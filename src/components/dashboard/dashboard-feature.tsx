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
    "2VLgVF3jvAXUK5636JSHbu8PRVvoCvf2p3A4Lmrz5fbeTCFMpH7U8qZeDfyWLfDEtwTX675x2UF2cfrunnLxFCU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYrqy97yL1bmMFY95vLL2nTd2rifeipenFfEV9cW32Eh7LhfqLkhTyaCCSrkoUW9PfxDTPByk2j6VnyGHC4fmr6",
  "key1": "35JodDuBMa7JXGBp6qPVt9mEfJMwG4xZydwvCAeQynFVgvxFtSfJKVtmqKUEPdP3XHEJDwBW3Wqz8NLXiepbt7iL",
  "key2": "LLe2uD1t85cQna1LoR1V5FVMuEzpWtEFxnuCFRTcodg5d9UgnYX5ion81oGBLruov8x25rc5DZnHoJd3kqPcoL9",
  "key3": "6729V4p7ggTSELQTTr3dXKpYnAAMoMsLXFgTQseD6AoqVumcL2GzcCcmNPrsxhUnfmmMov4Z5jKfj7ZuJTTr2kP8",
  "key4": "52KuCjR4ZFoJaK7q7jb3zeSbW4gM9m9HEcpLMQbqsQagVBdRogZcgSf1AeVdumnyr8cRMSkUHc58KMhTw8HSxQff",
  "key5": "4dd7GXkaUehVGsQBtyF38eEGpAb9YStxoAuk5xCfiDCngbaNWszzZxzhYehtCF6f6bFwbpgSGfzZAcmWwH4s3sxV",
  "key6": "2bt8usjMksVo3zgitXDKtwRAp4CjYto1hXnyzJcMoTGo3WxqNnJUauMgn5Agpr7gh8qVxv6MeDjGJxz9dUywAtqC",
  "key7": "3XyK8xf3ecU1WdwUcDtwPhvPn6qazrbohDKyWYUQ85hhemMvoGpurbBG42LB9DxwWyaVFx3mpa1F3MjsFen1veJK",
  "key8": "5QWoQHgg6oZ78U9QZAtnuYdzNJF3K22HQo1JMLABU4Eyzc62jZsqk8Ltb8m1qf1wBMTg3SaSBcRUbsteQca3onU8",
  "key9": "3ugHShgCLXBwGH9XT2TZaLxqQ4wPmyQreKmFJ2ppxiXPTGCfmVyGypVd6RQqF4CM3hLNRG644x8SeDoM738n6xtF",
  "key10": "3v3sW2m4GTefi6AXaFbPQHowNPPA9oDxwkVgxKTmrvgbQNXDGWWvE8K3fDJvcvZsPv9AteqFbtRBnKJM8mGiujys",
  "key11": "5aJax7aGYHkV9WgApFK9t8YsvkvqtKF5z1oW5X3GSwgPDPQ6vxfLMdy7Cu4Vt4qNBKnekBhCxUzsKLjrAs9AFbAA",
  "key12": "5zov35nQuUj3TqZfeLVE2MCVRgb2FfHMjuGTE7Xrg5XukQyuRzUBtrkkUbcGFnMGff6HyhZHMStuXBaEmYnjevLe",
  "key13": "4CTDvG6C6B26AVCfnLBdMqgjnWZN9SVsbGL8Q8hZ92Cy4kxDovP7UyA1Rtt5tuS3BCiZ7ndB4PhGKtaHHxFKndFy",
  "key14": "5Hazq6BbfpPu6vaM2kUvgu5QtNC9sMXbUEgxJcbE7w1DfmRz5gzYh23WCZaWEjRbS48kh8QdaiNLXiFJ7dPWCFrd",
  "key15": "R9MmCexTvcqMRYJYVuuAEjASXz1PxznrFSWZkQSRBqPVcaNDGHRtDj6WGi1B6FWXeMqWA6VYPKREMxVLzAyZ9GL",
  "key16": "5QwUyNrEudYkCJLyDM5D7RS1uQULvQt25NceSVM1PhjArPLFa362ve3AwGdkcY9ycsEX8yWoJXueT4cP8AhpHbfs",
  "key17": "4EMh5y1UST2T9JDRuJp6WNCR4ecDPwwtXxy9sSUtojZtZzejZjGmx8obY5NsV6UVY5hjiSf7JT65543T4aDGGfSP",
  "key18": "91kCrSdZVDYpGqdTkY3xJ9aDYfJjXvQ4bLP99jgRZx3Mk1szmAdoCVqBH6H5ztTykh4qrhnWdg2TGz9iGesfqvH",
  "key19": "3VGSvhfgpdDNKkNQFy1V7cjsMzRdnz59DNDDjC3ta9htR2TvUXuRLvEdsuCiUT7z27iGpAbk5yKEEt52mvF3G5Vd",
  "key20": "2ZvUtEiVHqdPkBWu5kLAKeCYdf45nbDwqHWoa4jTCwi8TfvPVRZb1WZrbnUkJXrx5jGBNN56rCpgTRJqzokWPvey",
  "key21": "3WCiGgti9fe4TDzKY9oQ7sj2ZLBpXXqEjrtaw8Bm3FExGiUNT8Ljp1AJnP4TJi4nnSrSdKjP5FdvPecbjWUE8b5F",
  "key22": "5skAxiHtQgMXQwmQ89LwDvhq7gJNhe3yaKeDbd4vYednvYhzoVofLesooEwiSAyt2tAzyAoNDAPJ4Z39UYvw2NSw",
  "key23": "3iRGq9tzYsXrttLcg7J1xk5BXkELmx8jPr7VgRYKEE8XFWaa3EXKVmwCQJAk1UbwKvegwqVVv6dRsBKyR6i2YHgE",
  "key24": "3YLctZNpkaGAX2FPLkABoZFqvcwJCy6c7bgfLm2w6KDkoD1JgnqXvhSq3KgQcD9puQYfgKjhV51HARSrhJwTVMSU",
  "key25": "3kTFSpExqRCyeCvJibPvuHWn9VWmvx4nkSUaanuKiSYQHk8ce7Yy5Krc7bgDSme3hkUaxPSCSgFtffnQJtvcqXSu",
  "key26": "4LtShWapD1U9Dd2zcyfEb5dZ9cjtqjnLoj9JuD3GGyVSjTaHALtzHtpJ7Y5iMLEwAUe67hUN4gwXKMNVnWHMYju",
  "key27": "3aRwUHnFLXzmFRh9jT3BAiH6BYf8Fqq1iTKjewdoqfV21EEu3UyXS2mYRNPBYXzrx6zSSdRd4M8LxhPmLYjwp7gb",
  "key28": "tXMNYbu6VPbNjc7NCe67Sq1mftfx4RJ5V4n5meeLZkqiHp2KBkLefgtoz1352iwt31HW3ukhMGDHjhhHBgMUyxe"
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
