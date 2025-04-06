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
    "4GZrn18HHY4pM3MQKaQKYGgQ7L3jTQgNdPcUSfBY2mLsTYnSrBH8qKQaufNGrRcMwBi6jXB5HPAoSh5TDLuQM8Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqm1Vj7AdGe2Qwgp3jppFXXLHndPZZwg3nBXnfo6fmwRB86aZQBQnnPYhR8LVyKjhAoVR9fruWnAZSAfj5sXfTL",
  "key1": "63886oLzvd9HuEKUoNqf18y5wfHeJi188KscK4pCAvoQUwZm8Wwv5o7t9B2kPVz3dWgH3yohKKV9khKUDtvW9EAq",
  "key2": "3bjUnUAYVnuGEtC5v7x7RXMoJU6AMy3kXXgyZ8TpHbfKqzbs1f2qgMByApWPigPEus7s943QHhsq95Gqr2t25z6W",
  "key3": "4nFg3h4WTZUJQhW9Tr1e6QWmLLM6yddD1Uvf4z17A6tAXRxYRPH6D9Fu8KJ1P4ckef8VKTSxTah6oCW1MNknNRnd",
  "key4": "4JdJXWzHopPZNg78oKwg4Mo5zgwx2TCSaRoEH93kFNq3UsBQ2b6F6rzn89sn9kjmCxSigePREtc58BzTcYf6kJVK",
  "key5": "5CzcALy7hq7xLFzYTBF6Gh9DzcijbzRecJ77K37feEx1Txqhf4wXaZ1RPGA1mcyAZ1v9C9TGBK6e6s3wF6uDrn6n",
  "key6": "2PNgzrbqGoGYLGazt849qqVCcoUZT9sc3TjL4G5YoobgNS2oh2StL6Bdh159USgxtGXB7DQnBXwdSVGtrykYvP9A",
  "key7": "5ZD9bLEBaUqYWEzvpdG4U79vwCS5Vyg9G8v6GmYMTi42KuRBUQQNh4Mgh6T2u32XmLq6i6wBG3nKsspdFudaraF",
  "key8": "4tNa1TbAbuTy2CpjhVDwUkx3Rym1z6HnnCMjcrBABBJ6A8hauY4wBiHeCkHKXCbs1q8FwpHqXEtNDHaawxCgMxrC",
  "key9": "2rX6XxU9YEhhJASGiTVuoYUMrA5eaAmLdReWAB8UzmeDwR8mGks71vgHYyEwnKvqVKbGoo4DPUnLeppomFEq63ux",
  "key10": "3tHzuyxH4Qz4KFmqeazwuinoMfomWojK7b1M2if3qYYqmdVLZuro3a6V9ZG38tZEcVHWwtBfgi1HXyeyAiQpkU2o",
  "key11": "3qSXR58p12vJUmSvgG6XFSUS6B4Z5FPGXqDFLecT2LGoyrWJk9BdcYVXsM4GNQe2s7t4iFWx2PXfTvZfFoB978zL",
  "key12": "2Vg4nEYsj3viDWuy96TQ7g8aFbT2u8SHYVFW3EbcP5Pfwr6FxRQAZ3UNbFurD6qTqszK7VquSajFG57nXfFVmFCn",
  "key13": "e49bGkxogbCHGhFXahNj4VZ5MFdiLPqxW1Rgpv6PPvLFYAjTeYsP3pFX2Grw7qh7x37YYQ53ssri1D6xzgvE2Hj",
  "key14": "BcuMd9vWxhR8vHnBHyCKBkQcSCrXkTKngBNDEAS1yG9cNESGQ7pMRNxcoKTqUA8vwxhsjMtxRC59yYLGMUYzdrA",
  "key15": "2CeEEjudyDuVdetmUEkVEwKQgL5yHQzJ5k2WtDGzZ4xXnpt1UH9AmiTACfNXLgXcy1NQZBPzE2UXkcwqWrc4ySwG",
  "key16": "5DvsrtcVE1dcwBwFxjeZuZKra5nA6qnR2A6JbM5y4ZJtKbARXVrPc8sLJhdTKZ3rtj36sx8wxUNW3XLqRibkyvDs",
  "key17": "5t4NKkUUMaRWvXeeU4pL5xz37T1DJU7rPVirTt319Hx9uWrB1LgHKCWr9JMEt3w5PzS9fThjaFv2bBWX11VPUXNG",
  "key18": "5SobMDiz2AcfjnNd7nKP6SJHFeJ85id6QmhkaFZCueHCezfuBLdYUA1tK7j3YH4R94rFWQHht9d9i2ZaP88fXJHt",
  "key19": "5ZpUVR4goSRuktm8V9MeHaUP4gSTsrUJojSHdxRvL4frDuyxTjwBtAvt1Secm2wfdBF9uLSJB3vnkcTuYTPxMicC",
  "key20": "3NUorZq6SCSx75HmYyAVYHDU1LAkYfPcaTiw9HMtPCrGwnJR6RV9knNmk9RvhK1LWv1UFXnekejqs4tNbKDy3YF4",
  "key21": "5dFuP8sjRXb8Dqd7mpQwiBQVgRP6xX2G7wA4SbNX4u8D3mM7ySSWqt9xgudeY78xyVHJApsbYnN5Ub2xKGyXX26f",
  "key22": "63EVcn4zGQWtkUw6yauuGUjbJP3ExZ7nraqSPqPvPSzYnhCgaT5sKcsEHBENoXNysxfk6jq8jnu1JRuijWKp44FD",
  "key23": "4nz9xoXMX3dx59byNHCMix5CjKFs7rZt3hYhtmdHMWAAL9jVMG7898PKHedLzUCfd6GcwfYnYDrhkm35qXDU2FGh",
  "key24": "4xBBrxt4jPERqwg4ef3b4aLFSMBShQ2GWVPobrNs4ibga6SLfgdWKKHnpKVNhnSDPbX9qEJsn6sipAdsAeV5Ufbc",
  "key25": "3VuzDTBrK7KRaMhPXt5p6qUK1xAge9sS8x1d1UR1yqqnPaCXQw5XshyCHQpn8Xzb6rT3FqCBYKuYfHsHYFUDNBKL",
  "key26": "4TrAbW9DnRRBBG4Wzq8hdJEhricQTVSGGFHYZ1bygbCxENDZen4QJ7p9qBQkFUYkvBJ85Sd6EAhT1YJhS6d1U62",
  "key27": "5R24eGZq6UTNtKDcfWiJPetJUGQ5P7MYHHcc9bcGDjWEyWazFfhK22uue3RZBbCWiqumpakHpYGEYHZKo9qZivBV"
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
