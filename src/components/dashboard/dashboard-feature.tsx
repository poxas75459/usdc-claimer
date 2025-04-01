/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5NV51bc38F3va7t24waMrA78DGr9T3q9QZAW8W12bxj2m2p6BfdRD1Dy3KazBuz6GraRQ3tGTnHkbE53bUd29jvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJHvFZLvFgxaFVv1mPVc2Rdihn7SHoKifX71jh6XcCrcMxHpSDpkSCHJ5oWZGfAfNd9gkAf5bMUkY3G78h2dVBt",
  "key1": "31Fh8ENwbEwGvdVJGVroNXoJwUjNiPqRwbwBEhdHB68Ctx8A3wwzb4TTMKuDQb9MvAdmC6FbY8xSUrYuuBtkBgiW",
  "key2": "5aqi8rp8DPe7qTRCdvRGpgddwvyTd75o3qgEPnHjsHd7qMvhDG9eXHfFZ7ZqjHGAjH7vqLmw2FNEuRhcPuEWNYff",
  "key3": "128NEMzHKnysFCTWBEFj5vqno1Aqe8Tmxbprn2VNVya6AHwUMsmXAUsUvn5eY2PtsGZ9wuMrorFRvk2LyTt8dGM3",
  "key4": "2bvGaNiLL98WaJby7EpU8hw6Ai5j8Cr8ytEDR4cWeVVu7UKNTAa1FmWeTq8Nvi726eX7i5roBUaLswHtD8djK1d3",
  "key5": "3JoMNkEjRTCqyxdQDzFBtUrTjtgAqWTcaLXkKkQVQdCt5SYbx46v8ZahDN2f7yLxAhPrZc1yS8Y7TDgc4itEmjcq",
  "key6": "5kyM1bEwNnvM9FSuuofEJEgewfK7GcEz28quzjgzBZWRR9m3xwkpqfHvEEc8xup4uwNxadEaVhfP8vzjNLsgxnfU",
  "key7": "26oqXsKBBXiNtH5gmB8RfhLnW527rs3N5TaH3iPtFQLXHeRraNs4TacEcFDak6rKYdXAkys1XnShaxngBLFCqPxn",
  "key8": "5itZeDbhxPmbLU9cffBYjs3PwYjjysRfAoGe62eTaanJx8jm6akYoepBTbwS9knFxVj47qgbYzEfVS5Lo2fyyri1",
  "key9": "3MLgRWbaHqag2SsqZruxKAdPXirTBQUNvDPnYYVG1WQ9cRgvHLwogxxphxjGtXGTSK1oMLH1Ktm3WRkzRetuXoJp",
  "key10": "5eYbx7vuqrU1kYZwFARxSneUj9W9kx65Mx9me6HANc7SXyrUA8RUgGRrCaZxdVs5Q1g1vDEgyZZThyd65ZGPMqQd",
  "key11": "VZbg2822cPfFe2Enx85EEwpLmSTwXTaY1bspgJm6nUAn8Tb2nrqeisfNNneBFL8rBMVEGPwX7R4abi7bn75BBLj",
  "key12": "BCqNQTWBdqw8pRVqG6ktAs2xi3Jc2Nm3Mipy8x3GrfjRmAWHBkNVArJUuHi4vGULThSo9Aq442SUkKsuLzwZPbr",
  "key13": "26A4w8CxcB1MdK7LarELJLDvvak71u5Awm3aeBCykAuUcKe5NnhUq95ZMDqh4h69J6m84VLtXnZBDNPw5hCincAR",
  "key14": "2N7XGykmP8UPusDHTV15BpXF4sQMmfuEYRYnhgjL2ZMvM4H8PhgXeWmEMb3igohvVwKFH5pvtPa5yeTzS95RiZ5v",
  "key15": "3biXg15NxHAxw8qSEi9Mbw6GowKBCYarkFSVPwtDtPG2iqz1JV4ACzpPimqhuFytUeKuTeNA7gASYQ79Ax6ztUzj",
  "key16": "3GGvLygvfSX15xJErX1NokpCQgB9AUY6613KWsgeLiSd2h8Pd5VmLLT4u8wZKCA178cD44q7UWcRDsAcmKweULuP",
  "key17": "639iWHDs5husrFpgPNDPkd516RennS5VZWZBbee1iSrzmo4vPSUK5MKL3BqpFGhecLXBTYBwppCC82tvhGesAqY5",
  "key18": "2LLKyqAgRS9ujQg1BDSQTew8WuFSHqw1KZcuEwQWpNY813ZN2EN95cDgirv3XPx7t79mAWyoABFNNVWCboZnqjBG",
  "key19": "2Y2rcuyhUd6So8oD8rwmE8ja8rxBokAubGdYafeshYiUCe5P5J7fmfqEgSYc1cq5VkzWuuAx5F1jdV5rnNMyHfmr",
  "key20": "59i1P4S2zmmk7oSxTmSB8NQg4fzDVXMZcTZwWpcXXsDuxDtfvDEcpnN8SNMc5YPevsfLv638xbUYXE3Xoc55PL13",
  "key21": "5pVHkfx3Qnwv591c3rkH776epgvPnkCEdB4uXzQpbrQCUNqtRyvuC4h9owFS4sAzaa6vUmM2ZaemWEagw3JWyHkb",
  "key22": "4Q91aVuNG1tFcHhUWbCY1eidnjeKb5kV67Pz3TUhhjCZiKjaScfEH9aYXLTQxv76FmFRH1NCGpgtNEq3npAFGV1Q",
  "key23": "46sMMbA8WfJgUn6kHUiUPJ6T5fnikSdmMFHwqBigy2jkvLrcfv4ZhLekz841FN8fNY3WVErDaizcpZF9JkY7N81W",
  "key24": "3ULzz2JPRPLJXYkyazXU7BaETjvZw19jAstKzinwir5CMMyJB8xKrFCfViBUtvGe3gxLZut35cWxpcnCUzRchvNU",
  "key25": "MkkFfQNAbdYS3R5iE3BTokpXAnuq2pPu3YHpb3ZCaNFHGBNSXNyq3YwTkeM2rGK4ueyrtbKiJqV7Pz33KzALosb",
  "key26": "46B67Y8pgJgCir7aZPq4bdYQi9SKbZaZNFq66dFCiXkAzLEdTa24ercHEeidBC1byBR2ezYJ1KS5f6RMRxCdhWaC",
  "key27": "65sVdMXbb4u8P4GRiHssnRZ8GtKcC3rNT9tBXgAwmmpznPqRSxNd6RXTAvPHUGBtn1KtCCL1JJAmxAujwacbFEGC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
