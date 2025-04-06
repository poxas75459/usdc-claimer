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
    "28r14XYQ134pytBZaPuBcDFxtokVfBjBUoGq9232Hnd19NGPTK59egmd8R9voez8hRGLtxPxW8H1h1uUkc4yk1sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxCt9uRV2YeXkqQ5RPrYWFtVWiSxryhwFbUQQbveRxi7ba1Azpwjbnua7ZWojnbguc4UbG4BosCJAuLWDRms8iZ",
  "key1": "49U9CwfZx9zLiy1Mh7UckNdnytbTYDYMCck2QLwQfpACw1bpN9ess1uozoPTSRFGHmPTmRUe6qZ4wwTCXaEpbbc7",
  "key2": "4Ho6YH3EBLeq48ECrsNYudQTrTQuY5tsSBCW3XNBZsTDJDAJK5iRW5uDQVXkto69JdEAhv9BwKvghnzt8jyhR7mT",
  "key3": "3qgpMnMcdLt9bYFGn8xPwyZfLtCUuc9nzrSjHdttWD2RuKPwqHxtdDtNLK49bRcTpefwqDVPg6jJswXzpx1vWePx",
  "key4": "2GLxDd48BvqAoAKyL5TWjzJ6uL8Zt7X6wQwoELpF96r1QXaVM8WP26ma4JvfJGyHdp6g4umpdjuxWXSCP9PBiczP",
  "key5": "4AGyQtbJfrZ2hstMHPRgD3avjN2hEGYYf7vgiB4qYKich68AXsEYjBXbuBnZTuKah1pWeLCDRVsvE6aDGs9LH5zw",
  "key6": "5zh4K9iZqNmabwrt2UXRYfjtuv52WJ4PArn7DZ4breRHut14vg9rMhiQRG6VdSnMfhtHGGwrvmSy5LKiLcuADp9P",
  "key7": "5CifSJ6MMwTNdZyc9rv2TdUqiD7BK7Kdm3y5pMNR6RGxkn8vSngtVWAGufSDGCTdkFr6TyGh2v6PJmfpUpoYFVBk",
  "key8": "3Cu84YwoU2xQeu8RgHHPgDPj2Ec9sTxMHXXZ7aJRp5mgQh4hHq9xV5cvkyP3haBPE1H7cEsqS4LceLcWPGMPvC3A",
  "key9": "jsz6BNZUZzyr2nJeMoo5XbsCzrHVmBRDneQiBGcghLjcSTp8U54eG95ctHqEui4efnJo8yLyxnnzzDDoZiZ7rJZ",
  "key10": "5jmswA55SEBXMqxST8B3s8zdoVUv11aZXs4eRnfadreYcWn6AB8HeSf7JKZj26dM3LainCtvKKPjrtBFDwzGkRhu",
  "key11": "2kbKCBRguQLia2hdzu7YAgQrsrZRDkNtUco8CtY5ohSP42WFstufb3A8DubfKKhf1NNuCdaXKg5p2kRioYvn4zfz",
  "key12": "38JEqccgcSFasFfU8ApMtkRkLov9WSRjd5tjSuR3gKuY2To3sHEyz66DR2Y6wZYtwp4H9MYh1G7x9rHVzpix6RJN",
  "key13": "55nMkdP241UzTCbCBxoRqMjUZQ8iZD5YfDKgu16KpCLCZ6MAcfXKvwKDvCo62x9eUQydsj1fqio9EK76vWqw36YR",
  "key14": "5u84uPHJ7dbkJsu8YYRWcoRBjdDzGwzFtSGxqBPXfZwqx4Ym4mUvUd4SPZ2JABK8buS8drdxJiHBntFjMCtBcN7V",
  "key15": "4oxRXvbkivRCQkRjVP8rU8qYihfcVeB5p6fDRRkXvqsw6hUKZnr72GjCess7pFFaL1vPHUzSEfb5aRpdzqCQ1yJG",
  "key16": "2b2PLef7rYGNf2J5x73z3WGzAckvac1DUavywmtjRYUjqHaXZg8wXTo9AN3LwJheDFBf11iWYAbALwGAhZ2GaY7b",
  "key17": "46HzCYrt1zM2AV3ChvRE3vwbrLH26cGrcJWbzXHXxz2J5E2UDHtTy7Ac3dXViCwKePP4SDp59P6kvMrBLvjA2XJ9",
  "key18": "4QfCtVKcQY4vNv1bvqfTU5wpNPDjc4VxUGMAeeE9QHN7d56DN1B9SgeuWj73Jj7E6WmXsiMNe9G5fiKcRckWDa83",
  "key19": "2mtGtv4mdMfU8htTdCLJr6UNFh1SCvyt1uurgpoazjREsACkPtHZ6eYXpCAh7C6iXmg1W7NR4RmLybc9VVUtZh3A",
  "key20": "28mLdjWZr6wmFVtDETum2Jk9yWgbPVsXG42Wyca69XHsfrpQ9Cb9E2ejRED4AJWv9sHhRwXgUAQK3anVoy4S8jgw",
  "key21": "3qYTN5wMzVeX1NrCj2JWDUXuxmx19SF94DGo9CYrKeG7tGoZkLh7EAdr3CLU7CSs1VKwCBRdtn7qx8CGM6ZVdZyo",
  "key22": "66t1KgFfohwyAEFyB4xEKGWmzSScVYWh7pVnUEvvtn9jGHPCd8nntTvsxMXuxdjQQMimNfn8AXYgkNr4uKxTN3k2",
  "key23": "335KJs7tt2cQ74TAjKXBexnRaeUmLXAyhBeAv8VdEgUUztfmphtdLJpKPoDBKkCoYLBuRPTZbakKoH8xhSUWzyyi",
  "key24": "fykScFF2w4DZK8uvM4et8dagMinPEMHDvgj3sqU8msyZTmTnTvtmbD3Zj36xTquibuw2rQJyi9YVX9d7QEm3TVR",
  "key25": "5NYBWndn3oXsBRUtwoA3TSQX4X3iykLFR4srLPevj7da4UyzJ2nnDTQ8FecsPTs7jC1gKxDwDKHnqkQNuJR2rHBV",
  "key26": "4Jkr4TKv94HyJM37XuK8Cpe8vdWSx99CfAWEweGS6u1wi8iGAjLrWaXDFjmc9e7rxS1y8rMz8Hc9HSiDFcLkMLCv",
  "key27": "2ggusrVgDpQyBx2SbJeQkvun4mvqKBEtCaWMXzU3y59VTs3WZcBx4rRjTGUH1Mwnj4v2jxn4DCd5tu6NdbxrULug",
  "key28": "zD2FiGtj8GnDsLxfsiADUikZZEmrfBph9Hfr4CC8TFbhnHzzxQ7rcmF8HC9dqeK9R8tNpxUAREmPMEtjJFtHnF6",
  "key29": "P7RjC9sjHKEKABK5U1mAKAr34xAqGE4Ke61fcaYcCNS1kuynh9m73GSir6o8JUwk2mZMWtvMG42FZoVPuMzhVKd",
  "key30": "5gVwdBDqENeu4hkrcPVhZpcz6KFxeTuPTRNUEtRuP6t8EnJjnpticfJjWvC3fHo1TiTfK3UMNL9qUbDyvmLsbmEx",
  "key31": "33AfYEFyjpBCFqCiztpQBrLc2ACuyU4j5F5VjeYVLXhKk9j31MVjgdQVywfmBgujjoHD2c3RTJL3S3QC5hYYuCCz"
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
