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
    "533bj11T3ic3FDFKuCgpiaZ69ZVznfuKgd1MReqoRPLBM4LYLyyMCMHJa7TvcdJ5zf9vQVNVfcCcrET2NpFRGXdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hmu7fFsAFJ82mHiaEpcTiVR8nBCXo3NdeNBvQ8NL8JBeb8Pr829Fc7owCH63vQhn3ji2f3y6HursLt8JzUT14FD",
  "key1": "4dT4mVxniNmR7o3U4pySPdpCtsvtpPxJ89xaXg9jh3QrkSDsPkhdmBwnaAxw72QbKgDrHZcvGuEothwKQWrmDfes",
  "key2": "5PmaZRL5sgeP6k9jvKfGsTxopVgxm62Lz6yQMgZ6HB6KrR9mUq9mRec7FCUhAjT1cpaitE7owHMW7DLdXTU51knW",
  "key3": "LJf46WTeQ4dN49ZPBLQrPDgKZxWwS5vsKJehK2V9mWPEa7BFFopks7YZ24yribt4WewFw5w84j58s6aMJjPRRrJ",
  "key4": "5VTkTmtMo8c36TZHLHnFyv1yjpuLqEbbzvun2iJmEWQxzfJXn6GYUbhagvCaSg4CxreDqWBDbSsTidrHPo7B95HB",
  "key5": "5JqwEKcSbDEHMc5bJSwstkLajYoY3cWu27hViMfn5C8e6m2awTnzfEbKNmHsWnrTJwQH9ceKjPa394btBxaeNazV",
  "key6": "2r9T7Mp7J94JFgcfMDQdiWiSPKKPUvpLjTM6SfkrBeb3pv8S1pNpCjPte4wY4YvM93QbMBoEd7hh8imDgGyR6S2P",
  "key7": "3ubcyb5Qfci4txsMV6Z1qMzrq3qNdzuminW62EjvnU4Cwgzhb7LiYtAgnjKtdk8wkefv1mSSsZGwjaFWGDDSHJpt",
  "key8": "59y7kVdSGTkkh725e8iLdB7ZskF2HP5LmrK94iiCqJoYzNFF8zUsS5SQtJ8BYuS997NsL8KsHQMJ6JkLG5GuoobN",
  "key9": "3g7eiT2YMXBGxSZA8nwi4jNeGdAiJdonvXKjPsriJD47tJES7B5Tvs1bb8YjSEZ7VHrTxm1cKHeuTd17tUCKFNrm",
  "key10": "3cBdL7rvKgkEGDuQatQNJWKLrPv3xVhgoJV7FnaAHL2s29pVAhLskGD7PfdqJQ768R9z5i6MUQGmubvuM86JtmU6",
  "key11": "44ZVcARJqG9EZ35sYeYhqRyGN3Q1LLoTqbeSuy4q2e12jL9ujVUc5Rhkn7ERRRpkRatxXq6rrbDtZfNXdn3wxB1b",
  "key12": "43xX8mjshxnfYuJAhGoYqkKMRUYeEJ3G4uWXShmBuFeXdNtwvv37YCC1YkfLMc9vDMPDid119Djg42GGxQWZ43DW",
  "key13": "5JJu41yfqZWMFMBPNa4e3VWwtSXeeLHaESREDH7n1N7asTNFM4dVbxkJkKXmcJoQBj2ztwQmccpS6fwmdbHAxaQo",
  "key14": "3ZyJcCUV5ahNhzfr66UGouCBzS7L36cLtK5g4swGYsGpc7yAv7d8h7xL1URRRHMibjoEJkeD6hTctncApebxsQaf",
  "key15": "3soxTZvQ9csQcza9GtreGzyHid8Vyk9GDWW8QyzAjBoNC4tTEQNd5svk5WY2YJLVHYxM2TPnFKxz7Qxs69udUSZi",
  "key16": "5S1UQVmB8vH4cn1eLgiWYFponnveYykPwVEFTT6Vj5LHU6KnAXEjxAM837HKDpycKYP8eAZdmAmcxYfAxUQKBqqs",
  "key17": "X6WcvzVF3rb5LTtkwbe6zdJxJXh1N9SyK2H76FPSMBLfonYsMsTX8FtcgBNKSWEQX2qLVDGiL4nxbtcSXeWVmst",
  "key18": "56HwwksLqHADsaisFBqJyjVEgbwdU3XNL7WMPi17HyA7yjp5Ch8wWGSYcpcrjdkmek87L1j2wGZwWiKZkQUniKgk",
  "key19": "4yAyCMQEacUStHR2cyNReZeJbadb8gG8PRFq7LohFCgCGDo6EzjeDEe28MujqT1bNgCgHAXx7rpCy9DDHUy2tqbT",
  "key20": "4pKuPsjJrR3t7AcqKX49bCbGx6D1AZChMb8pF6gBeTmGPQKgePVsFVEYcNWi3629vxK6xhwgnUUwh6MV17iZPp65",
  "key21": "5Hbx3vEfv1oYYXyhGY4RYYeDgaSCJT6imErGmLxj3Fehyj84qdnNY2iZp9xQ8tq8r3LNhXE9GUYhXmVaichCvare",
  "key22": "7ggCVYoAi8tsqSFxeFWzAm923aAA1GPpik1HVQo3x84py1eU8mYPNiCW1rXjnst4Evo4VHC1SGzHqUnEBcJDgoo",
  "key23": "dNN8Xfp3V126xCLJpbTX5HrjPxfQoVYCMtrHuJLTJxfSZcqCgXGXKqLAZz9eZWeWwxC99zwqxr26F7g436PiQsw",
  "key24": "3ZV5W4x9mpXhBTxzghLEo2QLM5RzvPdQWjZBrSr2BUgXapJ47M8vikYxLiknPYA31N7xJ3K9bcnMQhLY35AQVsrW",
  "key25": "2vTZuL6z6oDvW8EkQ17UHycQ5Czr1Yd724ouwghrVDBirwSRXPyRajgdLNcSNK7tFyFgYup7aHFrJosSME71TPYf",
  "key26": "2HDiTF6y9PnJJWRmnUTu4jr2ziMhpPDD4Z6Ur5A9XfvUnEpTa9YVqTi6zHu4kGe1yMssR9wKMaAsKfToFn2Ue1Xn",
  "key27": "2DvniVxBRR8zegVMWduPXFGt36GvawPJuBej8QrsjsjGuU87HH1eaDnNY4ZD3hAsQQX3Tc4poMhAS5Bwju7uzVfz",
  "key28": "2B4QvCVWsDzEWGp4cEMnxp9TRrsfUEVUQfuJChA5cgs7gy7oitmBQpBVmrjUkKCrJABiuHfpF6EiXczqu3impbzR",
  "key29": "4ZDsqQHfeeN9mniYw68miu7iC4zFpdvnkufx1w9WtsUWcYhzZTdvfQskmEtHaYkwnzpyEdPcWdSTL79bT6EYDdj4",
  "key30": "4bhgTRS735kgpG8qfXBgPS3ofhMdfsVP1ndUd9eRQSrpYJsW64XVRAtfyxSR6LV9FGs6nhBSbhKRqbVWYsJeQ46T",
  "key31": "2CsRDAGo96Ztue2teUbjFtMsip27rsnHrFuMH2i4G9ZtakosZPstqtESKW9Bkb6cHLFUMS9fiPGpS24SD6q3wdpz",
  "key32": "4QcTNVEqtDMD3EQVFScDFsHT4rk56dLyDQ8sMKnQfKei1jiwMg59nv4gksvCMzveoWqvdZ2eD2Zni4zYwFrFBEcW",
  "key33": "3RsDwrdE21Z9s1DRQmap2B2QFrFTtYwWwAneJiRyUnjLQvi1SPfUumCFhGY5wADU7PNjyfg27g5vf1wJ9LC764b2",
  "key34": "3KMNfZNwZb1JVu5YcyzxbFQnQGevtHqPxFUiMmVi3DRvZzLfGDBQnCh8ayuqZGqBzuk74mqr9TqnDRsGwceA5tJW"
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
