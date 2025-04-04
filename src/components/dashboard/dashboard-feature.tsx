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
    "5Bgyg7PvhhSSyqTL7DPLQsBTY8Z8fHBEcXpew7CTiyx95izxDLwir9FcrUhHyXhWKMSCDcos4VLS6HssNX6nHr4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4thqd1cPkyB6KmTcmanx5VoKzpsQhGKZR1L6GunTLNt3eZ1Jx8Fk3czFt8SmKGhbW5qTciGzC3ZFurDvGsQPAWHN",
  "key1": "5xkGZPmkyrnR4rWUQqKZwMkeCP6wLwXJoxgTsx7Yd3MxbEYBDE2thy88Yy3JdpETsrbxCqZBpp6g5LDaNYfq5oS5",
  "key2": "3RHqfTTHNXQyiterrYfyeHfMCKyhAHvubYVRjUAD4FGKEGFznP3PKxJuVYGMnNvQ8MckajPsdPSqL4LUCU4hXTp",
  "key3": "qmmiWA6SeCpfQ2Rc8FDjQfAAbk4Me3is4ctzTW4QLbtYgGYXTo1yidF4AVGyZnVkjytFBPZ6FA3WRbAJ4u8xiut",
  "key4": "4ESivB163K5QhZsD3p17JH8ZSqHX94RoxUnHjwM41o4tf7zLGisziMuKhthS1wTtKRqxeVjjD7HMJqRMFbRhWNeE",
  "key5": "2DWryjMpWhdKAinX4LfKUCw5V4bLsNZ3TLhiGQ6gLF2xNFXJgVFYdCdNFBRL8jL7c2KteoSNDgyCD9Am7R435wsY",
  "key6": "GL7tp4Xgry4RiPiPBXGWs5dYMZT3mx699gQgk2WKVYTWH5SspbsWBXycvJ1pNs7q4E7RZSudjZ3jouGQyuekcEe",
  "key7": "5wQw7RbqrryC1SRV8RZ8ML264fDL1QN2bu6wVFNuPvU91mi8Sw6AGQcbQ5GX7oFeEpER4Ud543Z8qhQ33mn15zLS",
  "key8": "63UULUKQ5bWGNuhN5C12UEAKFYy8h7AF3vko5StPBSDS2ktGz2DXX1mv56eVmFmwBETbWT8cetSSBzCVSKQWkans",
  "key9": "2axrubr858XFwUXy1gtU9vDKSWvuxVQv7vL4vBbfPwwyTMveZucSZyiZgMV7JeSfXK7vLL4hUB8PfCJM9Ln2d2Ze",
  "key10": "38X7zaTqW1gRPVXyrRx8zaadQHUzcEQhJcuzJ8TEdJbWJCfJW9QRJxX8GAh7mEGwQaBEUxgNgtMmdbu4dL3f5yBP",
  "key11": "46iFbV76Tj7o4E7tF7PoqmUuBcA57zUTEqPqswuAU7tczxqeM9UspR7T2GMiocoYoz7sZVtygvE31MNqXSUZyxjS",
  "key12": "2z9gPdYRwSS6Dhii9z4jC8suF3oe7TguzuKdNjxJa1ppd6mjNYBozXTTBk1uANQszEoqeBj3Edizsi97SDcMUo1F",
  "key13": "3jBVdAPrhatZgEmxcN8ADNRSX6FnxPHqWUiSE2WpTjq2PB1ciD1iYQyXgwUquv3nd4u5uxijpNC8YHT3MsWWYy7D",
  "key14": "LCTmqVkiSgNfTQczN25trDWHzgkivJGMQ7b4cBLyGGcJ5g8vjm5BRYF5nPkhfbD3k7FTZnVouNxfzqTFbw8Vky8",
  "key15": "5mEPVzX3C7AfibNvuKUreRhnePEvuQcDkrGUsRXkKQRAjCs6YvsC8TLTKTq3qUVQvqmFbnEgXrnG5TeHbhRNgb9M",
  "key16": "2kksuZL4kVc9re1vj7hcn5zLJP5KXyWjb35tv5isxuaHMU7GTrqAhRA2CFq6K4ak9zdPfqDwRH7XRfjtt7yVR8qe",
  "key17": "3zjznkcWGHh9Bjz2n7PSvRYgiEJpWS8XsoeWfJkzDaS4L7u2hotwgoWBv5RQZHhdsTiuvNwrsjG1DTicNGre9K9Q",
  "key18": "4tbAGPgTrG6CrFDa5sqrD7zXHzUmmmZGn8mXmCHJE8AWuxLfMEeuRk3KQYTzBUAfzAdobNe6YTm3r7BaPTqxPv9c",
  "key19": "z4kTYgSuQvqHWrk1HhKX5i454Tt28a4KhMH5i792bWCfMaHP5uv8PQ6vuDKPiQZqmfL3bcMsmYAYQqW1CfpQ7fp",
  "key20": "12SgrZZVs5SkNxhLviXjAz7FwzdPvgQFoW5ryCZRb8zxHNZDLSsqVY8K6gd13o18e1LhY3vD9dHr9ZWfR8RE1VK",
  "key21": "2SMyANAgwCnSVgiB9RQPVhTPhdVHLcsN1MhQxKgn9E7B9We99S4XspWQJor4WpnEBsCuJfhPEF3MK6HjaDoXChjk",
  "key22": "5BjW19WopNUBayvYsz8FLk47fqWV2LaNdniGbfSxPEuzgazEbqqRwwqEPukRAtMoTL7mSNVLnTe9uoUhS5bobWYU",
  "key23": "3BS37qWBo62gFydnioFXAAcfMJmgiWfLiA16NgnGC2uoCuUUJWLCt8ksuEviZLkm1AQV9oR5ZBLyXnSagRmY5pCb",
  "key24": "5TuraK4YPkEwcenH7rLj5fkesetmGyVXfsjZ3hMLXgoYGRrWWYhX2MB2xXNu24Y2VNgoSE1BrQAE5S6i6523YgiH",
  "key25": "5HqHU5Q5bWe52DYaeMnuHXoByFyskMURGTxKPnXzY4MK1wdwGKFoCjJuQgAQJCRTHrMtEvuVdFTVQoo84Sy85em1",
  "key26": "5ptwo6o3GbHcv3iAsSuW145xWUtEkrhYRYnCwDNEqYcdHekN9eBgybhSyoaNt6D7mpEAGwhropHQ8HZf79wkXJf2",
  "key27": "45MAPY47ePkXcbxBgy8chvJWv95AmAXGz3brS7ASpPvsoKQsRnvfBqXEXqZihStQN8yMN6xF4y17CAL9Pf9e9aXf",
  "key28": "tAbDEk4KBf2pJZEq343WuMZBKttWVw55merUKSEdEwzBvmAWosnZ7RPVvXBkqyoeXzq576F26pYf6PHK8vGUwzW",
  "key29": "65LGxfHb8ahUsgYzWEPzXtoZmbpUmcxC1jtmtMg4jY8bpBrVUkUSB81NjZBhvhptjQiKVijmA2STJPzqUPtFi6FB",
  "key30": "WB3a6Tx8ztu7qhuHEUMGHEFDZ5DQibdmHwow45Xfag16yuvWX8j21yY1wTwbtkv9zwcDCU6DTNxpuuD4TmbisKA",
  "key31": "2v7fWjbXtxxqFvPSEt1SkLtUF96eGJAohVridEqaLDeieUaKxTjtjn5Vdob53sBrZHrTZNkMtLT6RV2iv8bsJuS7",
  "key32": "DzipFbxTGZobSTrQEAGWsMBP2zoJkmVqmSCHYwGF2q7MvWUNJgDtGhaAptx2eAgqwx6NrJH6eZRvEsAbxEVVe3j",
  "key33": "XYVgenAC9enqD151wKShncrSZGWWP14JeBe5TAkt9nSUkx4NmnMTaeALajq8P2z9T4qSeoid4sTfhDSnU1Dc2bX",
  "key34": "4GkFatYg6G4zez5xKNS9K1j96Mhj8XEH7vLDNBS46Ws5qBGuqWP12yX38h7ceWSDoLzRP5xfUG716C377e6MFXzn",
  "key35": "3G7pxsUZ7APL2tCiEs2GKATA4daXfrn2fzMqgVGp7dgymyFksLRAaQXToiRx5qGp5pQt3dKeKcjw2f32XzgrKUGT",
  "key36": "2d522LWrRknRZFBVAvrormfWpgutiEhSgdBFsvoeaTYfrd2mB2HZj2KATf6M8GNup7m6n3SXUma8CXyHpzvqDkZM",
  "key37": "xPYSHUZHXGhV1U2yBkDDBx2QhuUAum4Ymk1zSgeEBYHTk5niRmwy3Y69JV2rtru3i7nDqHMabU5Aysoz3C3BbBN",
  "key38": "3Ep7hnynSv8SYN1m3tRoBhLnvLEh8A5HvrMaeQY7NDqD6jWzMeAY793tLpMNMJpzVxBYq4R7Ssk76MedfLTZVS6r",
  "key39": "3w3Prisvfcf7DtEe7KpN1qExvHdpcb2SFr1ptQnkTGet6yqFnFFNYuUMHSCv78kcYEhW38ZbqVwH6QxzDPttsLC7",
  "key40": "5Hxkp3pBG5uxDrnFyhJZuWakmppXdSCkSNPsC49Sjh5r36424YRW28uBxBNVS2NZsZVQ3EKyoKYjjjtLFyKFuq16",
  "key41": "4Cy4nosRXyJYu8DMp3dwjBKviEXinAU9t1Z2uJf2KKLtcrGCFPoaDx3Ewt51xPDemcxBZv7gTP8MgVWY5NY19W1x",
  "key42": "5Fg6LFaQU7j1Meh7LM85ihV47ThH249KA6SzPmE9NpmEeBsMKSvUeK1drPwzGszcjesyd9vnZho1v9zj3PTkwHcQ",
  "key43": "5mF2m813UwxUTvH2vwdqMBUYahUj2RWzRzQusSfENFZue5dn3tAGdwkH4Zxys3kxGLZ91B8rntnSEeBUGwwe93C2",
  "key44": "2cZhyyqCmx3M97tY47NamXsRxyQnNgRC1w1PKjyN5QDqG6k3ChkqFaj3isbUk9k53CeZwam4AGsV5vkvovepT48T",
  "key45": "3pJVBfsoucznp9HotZqzZSNvpnkjBh4KPds2Jdgc5pXFqsqCC4iSj6XU5W58HeJvmABRL9o4V1kHqsDLvKZ9cynS",
  "key46": "46MgNwwQaD3aBXbka368j8aVobQB3azZnCjq9nfCdn3vLkVxKQk9kRr3ubbFrtnFaqT9vPq6icMN9bAPmmvp6pZz"
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
