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
    "4QNHUmWsohF4RrkNoDfXVAwFtCGvxYWajKL73d5a4YwBJGW5bjZtdDsxVmjDXPNx2YMFvjSeQLixmjiALyaJnpVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTwnpLpRrBXAMwqqdLvaXVChU7rQuotXacj8QwZhPuYw8PTCkcoVe6m2yWfFktPNPhGE1Zb693tTx2qvmkWmvGK",
  "key1": "4KfFN84evdJj4hL46iSQhN1NHLuZiM8RzgsbrWrGULxkpzzNeQj44PTWkBuQxK8s4pDWKgjDgsR49QRUQZ5Sf5z",
  "key2": "3p1N3oibug4NkXXeEwQ1AzDP9e6kMJiHKU7TWiYKkpNugte7FzrWwkdos7i65kPMuuePkJbhWTcKkmKKcXmZNyyP",
  "key3": "39z3NpVjyAvFTVqD9LGC7AkGBNQ8AdPcgRgV6KEakyBA6uaHHbK53Yvw6ueBrwFxbgWYV7R2ftSvDUKBszhLozgb",
  "key4": "38BxxFfYnpA5fv9cnMFkvX8g16Mau3foSDR5apkiifTDLkxnDnfKtKU61F3y2VowYdh7SVrdd8QpBbbWrzDm8nYn",
  "key5": "5tND6GZNWPctVztefDafBHUXNVQSfF9N9LxprhHTmeXWGCwqufJoSitQ5zoHnQ2kpdP9PQxCuzKDkYjrGTDNs8Ya",
  "key6": "8VbbUNXhbeR2CQPyugZACLhe8uSXyZUuQoLcpKUyLSK56uY6dgF2y5r2DPkuGq9oti71NTnGAmeievU9Z5YwJGL",
  "key7": "4EJ3C4cYK34hngnnsc1c9HK4FWJcYWpaffRH8ctCEjmhSP9BoHGS6jyEFukTWQ5RJDZSQWnZvsyct5mBfRVcD9eu",
  "key8": "3ym8SVUbG2YDfgiU41UmW6iudXfrHmhmb8DSGWad5FRQSJbutPuSvj9hE2paFAkbFm4i73pAwNtrMcgpJcyqvnq4",
  "key9": "5hbUyYCUSwEjnJsPqVemzY9BXwJoGMubP3mgBXabLdiiA8LFGnT9NqoxtozCZvU6DeqmZzbrms41zCuhFkwkS719",
  "key10": "3Uc73kF5UYfzrXr5hY1XPxx2xjzVqvkcPrarMA7eQWRUZNBWfWCTS71atZLWgaYBFonxhEg5w6uzPxPedhXZebUb",
  "key11": "2MLnUKSjMELGx4TmycHoYtqsgS3nhsUfefVYCe4dznxKVBhkR8XRsHchFMv7RwphTE3Z8C35eyube37hyFmcFsXX",
  "key12": "2Npc3RDpKBC55BFxxJgvhx2Qr5EfSPbe4DYwn5jsjBvnSUFCwCkSyYa9j64hk1hYX9ruW8cFFJfNc78LiGWUHXJy",
  "key13": "5CE33mxQAAYzzphSg4irbfbzFHqvCJULJazd9zE6ekUocGoXohodMEMEVmYw1CGHTBGcUpCdR1cJFPKQfWPpZB3h",
  "key14": "4KNMSFznBaUkmKsemdFC9enybMmgNSysBh2U4C1AGn7SDpNdbiE1kGApYi1i3tmRCi5AzujHn1r17ootC9pncxRa",
  "key15": "4ZMzetZiBG87cWRFhreEBmabp9C3pW9j9jB1WNiYsdQKUy36SPbUPUQTmRdBpxsck88F7mmyqHCA44AicNZ9E4YS",
  "key16": "49xvhFUQysmGt6LgDQhKRakTdX2Pv5JveKgSM6QADcabVpuPfm5aWzYgVSDHX8mE8ere1FFQMv19EUdBEZergCCx",
  "key17": "2oScVwJBBo4hMBpkGxuJiXmEsNQj2exHrYRwvGZGfGveEYFLMxmwJWWUxg1xk19FmZqp4d4QDZRw1Xvzipy51HUK",
  "key18": "4MXr4SuadPgU3rXDLuSQFsGhvUFmc2zApkkhJZkYAhLDEXGTK3snpNmrkwmByUXk5pXivvkuCqLfKBxuiokKk98S",
  "key19": "3xza7RbwRTywNkNRfdJ6F1yUuxF1P4KE8YpALUquC7MunYt2vNvAbzKLGEekK2DFdUV52MxrSE4PDvGQTkvEnTNb",
  "key20": "3ZH5yjyN3ut8jzSnkjMCQbaHXT4HsfBDc4CHzwKTaLzE5TY5prbArAu1dNL6osPBbbnArqV9csj3RxBru1ySvNQs",
  "key21": "3uBHu3dyo4vf7yNSuFB7KUnGvfzwHkX4qgarKZeMqUxxekX6DKjULxbLv7WohG9f8RTYp75WbnFKSWyJoJRUCeu9",
  "key22": "2fbXSLKb2sV7iDkm17a837DiJBUiRETYbWikjaDBG4TZeQV7LoVFg6vWCVTaSAZwhmEn9iweEBqXv6rRTLdPfVeZ",
  "key23": "4SiFDqduN3YfB6Bbj6zTx2PPdKZK19EzDLu2EcnsiPMVeDMHoXvGZMifm8fUDzqoo92bBkWosNAETprTojZhCQFT",
  "key24": "5H3jmybQXUVRXf2nVUK4YoFuHoUyQ4crTiszoFGhNzXHzN3SAu7CNnV77WNiyC1aYm2s2PDsQRfHqnKaYB8LLYxY",
  "key25": "2LBhSBnqSfc7YjapRxfNFbfSvfT1grUQtw6L9RGLYhLrqmqQSCKXwgoQL9XhbtkS7crLvi8gVUGyb7Ea3mZ3sCAY",
  "key26": "5nE6SiuTAc4pfdPmcsUaCxzjpAVjA1tMhAs8HZ5RQKPc4DGLExmQEh41eu1C3gkf6oKjjtLWf57f9x5zZHHb8qzE",
  "key27": "3FBVrQT79ymU8H6VRgdPpQXuChivrpjVdE3svCVhCgu6ZXytPbP8ZvVa2HY1ddGRcoKJDMX6NHxQ8Fpfcqd8SUfN",
  "key28": "5PERqfU1dJLyeHqPcC2sQBLRShTrvWM9rAm8xbEsBdvqKHsyFUmGtcuqW1P77mFALLWyDjdg5Fdn1Uw5Ha8Q2FLx"
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
