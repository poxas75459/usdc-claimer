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
    "4f8Kd9RADa3t8znzcx69SGcos57a7AJ9n34ZWkbhw7Gnh4T3rjG48atHkyZ4H8NSq22HrNx9MpMGWZqHbcgGg9bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39xcuAX7SH3ATC8xBS7CAUnpQwPPYs5axPhW7CvCJfz8NuZw6FQD3dqss56qVA8c5GhCr5inWg4cMFnr9HyXrnLU",
  "key1": "33KZFXSehdnpQAMhJhniTyvjoJfPLJTTD2G5k5vqhVcH19gM22qYTWE1hW3Xp32Vx4ArM1PYhckGpxELKdEhLYkG",
  "key2": "5QXSBUVbwwL43XL7eaHh9SL4vwwQ8ep1JbYBigHmCNvixGw5GzCsFVemMpGfy1hMWYaFyQjkCyoa8p5mTsaQQ2bT",
  "key3": "2BDqzmZvc88PVnkqyR1NoxEKDum8BgoHrkyjWx3gxF31QXZbc1rc9U4WdiHn1xmoS1hK81bwUCYCgNJiLKcAssfJ",
  "key4": "3oHgmoAZ6GKLtoXNuGtKPuyJB2mvax8pkCUrUotg559xJyVkCnVsQ3r2kzHXqBV35DjnW92cDH2Pz5WzmpWircqh",
  "key5": "2cWqoXSHnBmsqKzf7iNqoM6fmjHLsmPG9UJ1gSzXQga6dMXpgos8r3TcqarSqWQx9S8UnPu22v24jhNxYdt19dqA",
  "key6": "3qcQTfhkUKCnnVc4WCHararTcFTzPp3VMhbVvBc2MJ4Cgmqug9Ujf785ekjpQbeUHqebSY7MwsBXtTchJdLcxifh",
  "key7": "4nzNP88x79pwQC5otgXjgXWXEkYT8oN1pCeghjarTjTcWaqaCfEX4ephBABm4EbKizfHFUGy7yF7qQP87pZgQtpr",
  "key8": "5qJr4jsFfdcD78B7ZYNCAkCzTAVakqeyLx6MYktTnPaLTDQ2sFZwoU33EQfvqkZDb8Yevmg2S2nAoey5SeB96UFz",
  "key9": "2fZaCGBbnMuQkGs62abSbS5FUbsSBuz2e6ka5W9ZGfnjLgesqCkAQWgb5nvbAto4W92BxqcjGpJpxVB2JfnNMbJ6",
  "key10": "2Xor5Yc5QkKa8mETzSBbw3BeFr1XKC14Bi2PFowKfKyob2Ujw3nBoUG2n1jxsJjC89HF9fjx3Tg2kEU3vh2zMTXq",
  "key11": "5pSZE5sMbTBDqAhn7Qyz7Q5BgzD2WbuYgUkFF9bvNw28jmgKNtho4mKw49gLXuxr2SgtNqaBqXwMWxeXYEceqVMp",
  "key12": "4a9W63yBveuLp7tt1NQvNTFSzCqJgKqMU4wFARuqq6MEAU74oLruTVyYBZmsxYkxYyjb2F9smWSQjvAXU1GBvcdM",
  "key13": "4ebRBiuWr7ANHC6Sj1iCoTcrhw1XoTFtR5BZ5CEFeRe7AUgj81Qkb2BX2ttuSiQHhoaZE5F7mqXRMixagT9ahxv9",
  "key14": "4WzMtPNHAafC6X9KbeEpEQ9eLNXyo8LRyDUshycJePWNu5vSwWZ6vCnrxe8xEHqrwAkBtMxtTSjRLe7Yu2wcYwXS",
  "key15": "4gHmKBr1MLV5t2WpStq29XNBWydez8MDSb2o27cMZeNXH9TigRYxtZNU7hSCfb8X4CVnfcPXmfhT9gFhpufPp1tQ",
  "key16": "3n79B48CQV95yS7juB4EiyLo32dwn1VXoomYcXhfvKBHqV8AcSHFK7fUFHjZhczjm6J8EGFhCxMbgEgkUovM563F",
  "key17": "3S97oh3itQQg9MJ7nXud4jbZbEuBU2PmMLt834388HQMTneMq6Y3FWhQ7n6frg9kEXUYinMSCGpnMKhCZhdznQqE",
  "key18": "3jg3HDz964os452ignfpzq7eWpgrTvahGu7ZvMDAVCAmJRQNB9dG3Q3iPHs1JyasyJZCE9egtjDT7agcu9VxJVc6",
  "key19": "5QfhCKzZCPDoP2Y28wh36N6CwnggWfbmcCoEZpMoW9Ys6aVpTY1i39HWQK8RuRESUVMEF1rggSZwY1YwX6nwuXVp",
  "key20": "5czJJwrnxZfVj4pRY5AMrsuJZCkZY3pCjx1QaXoZmZo7KpGAy6t38eo27QXEB1TtQ3pjUcmXZmrLJ2iB8qh5vPd8",
  "key21": "1xsbWDi11xjtxURZqY29hMWHaRjCVoopENymahr47JUwwGcMrm8MN2u5TdAPdaJsnnrLQyvnTNoSTWv71afrYwn",
  "key22": "4B6LLkSgEsAQuiDVxJipuSKZTxQTcTCzkkitTRpkGBMkxH3dutKH9bcfeYgDunjEBfb8sZJLZgopfB6K3Uzy1wfh",
  "key23": "2yGKgRYNvd5ruViT8JYTBnzyBEkkfqZLJpHbzr7X6nSEbSnSuLHH32o6mwC2A33FsGYwcvQfLFrkNYtfCLvZdDmt",
  "key24": "2zucW7B8KwcQiTL1AS3MHaTmAezbCQ5pBB3xLV1Kv2ku2jdrPt6ss5ciF3m3C2hgYJRoknaZAgDijoJBfCiTpSDz",
  "key25": "2grPCyqZkYG9Q4fVQrs94bB6a3722oyfBRtFKuDxqHZ6Wht4Rx8rHGQnVtZ1UDqdo77QdYLUT2DjztRLQXjvUNzC",
  "key26": "399StAmspErXAnPbpJuvPX7RtyAr1266qiHjsuN6m9YRA3S48bePopPKby9naqi3LjyqtmGVb6VEWyx47Bdy9yWp",
  "key27": "2Z4dmjKB8F94giLUmh2aVkALicymJwcGiPCcxEve49HWSbFFpX5gVT5NaVMbEY8MrnWEq9nnpPBfZxxTwmGtP5A6"
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
