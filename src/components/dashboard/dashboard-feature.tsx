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
    "4sK1wqaGGVdsgGJ3mga6gzJaMYPCRSZrQFfYVhm7yQWvFqTTWqYDbhUDWdrnLkrec6mtQfks8ATDLQELYqjPKEN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCfSt6AkTZc9jYNr2XaA2bcbqdh4pAojPqRDZc3qyKAeEAUTfWMQZ4aVBWhBcHamFSPB6ZLsz5eLgv8UEHiV4qf",
  "key1": "mBG7Zh6ttAydEZ3gzcD6Qx2Y4y2EDDtHVEa31qGHebEiRLtrVy3FnsU3uoehUbdAjJyXvFh7DgQokXWQi8VBAks",
  "key2": "uauzzH6evqPLGYars3gDNdeX5pxVXQJPjjYaNZCmh8E7b6kskumRQbL426Uc3Rvni8GK3aepzrHX446QxNRxBpV",
  "key3": "2M6BDAoepBWKnqwZAz57QhJTFCPdC6fSt2JF2EhcQczCQe29hJD4r3DGiLm1TrMEYFD7CHaA9cBnymffsAf7LcMC",
  "key4": "65zqZsXjoXH198UUhYoQ1aAid2hASj7uFC2ukRnzdJeQEXiQomEPARtDVbhU6zNyuMvrzyrrxUYB8EAhNDToqyo9",
  "key5": "ZDEEJ9MX7BoBghPJ2LpsgKFPt7JHLkmH17yNALKgk3wAkTnPqK7sr4xibAfUuExqJRfjKR5ipCrwsDB1raCNT4c",
  "key6": "4yDxYx3RVPRzYWjTBrQpDzmg1pfrcEg98f61Ss9QkYkaPnxh1QezTtNEg5gp1QiVFZHKLyHV9aUor3V8xoQ6ZQLc",
  "key7": "4k3rKhow3nmSV4hnDs8meZA1j1yaSp5WxLEuwRw1YQU9C8ZsGYFsbcodSjpWYvwgceaAs1JDtBjAxdJSPkXNsEWX",
  "key8": "2jrH6Q8PNpzfyuGEvExog9BYf8qFRLBxAByJ7TbGq5mvsDBVkA841sPeRP3PcHuHTgTNFNMWn3pvrFeghVLw29JT",
  "key9": "4gFAxJDG3vt8tg8EBg6ck49zbYyMirUPLBnH5T95eWpxdFa9YsAUAscPWfUbhdRZJH9e73wTx5DjGMbY8jRivtBA",
  "key10": "2jzaD9X2QDSnfxpWL8QAMUeM6uhUfH7CceGNMsDn2fn4TwqiFMYP6qToFv67YggakNCSTDzsnSMUK96eAuVoLTXa",
  "key11": "56HEeKnS1Gpb4BK69Pt52Aus55uZnUsRS5MkyvxKEYihkMdWG8V6f95fTWACyGtzJXyqaVcjtTNYncUMxJH1N8tX",
  "key12": "2oQ1S1Bn3Xuqzh14mvBT5kN25jX4EUmFhyFwhkqH54eq7AVQ5uDiwBcGUxg9JWPH5b78CDZ4UR7ETTFRkhSy65e7",
  "key13": "2ts5ZDcZEu9zx1ABjkHueC2EGo4j13bibhTYq2ahJNtdnpEre5CozxJQme9nFeVyHYJkXX2K9qs2sKWZKRY6RSEe",
  "key14": "4S7v2qMmHbjPH3Vz6BgcQNpYV6LSZQHtuW1uiR5p8dpcNEVunpvGF88RunUnVnv1aESgHLZCSbpK6ZDzDqrSuEer",
  "key15": "5nTz1XZwVAKY3j3jn5pZqfrku8nWcNvKkgdMkbFBAzcU1dedApXRi4znLH3eAk3oFmQf1TtvNL8Jg4UKQJ1rCoB",
  "key16": "2YYDjkKxt4rj28utRKWot2vLxR7boPJxPMcTdgztmmDjjeNdBJK9XxKDgcG6inVEdqJr3yera9TZfsoRpB9wtGH4",
  "key17": "2ZswiS4dH5Yo5Fy3mM5kKmWuVwYmMtBYseMEDCqXcEtcRzyocY1nY31bmcZKFH9SazocuTiEuqK1BZSLazcTjjPp",
  "key18": "3ujftgPUzwnCM1yXouDi3m5JtrXaMZv7kBsfAeApAtE9G3B24HAxrWD3hNa5Dj7EAc939oaPfVhSrnwgWztmqrS9",
  "key19": "4mkLaFJAED5jDSMCWHq2dsxUAx4BRHPvsDSf6VGSU1SXhPVVfCA7asMEd5mMhqd5YF5Z6Qakhe5EELYu1MjmKcA9",
  "key20": "3NEfs3Zh3gKpBZWEvh2TFHqVA1bKeq5VuGrLDWt8W8yrD5ELPLB2RuhSDEz2F4XKUdFGXTkSJd9Xt9EEzCCAbjrz",
  "key21": "ArpqP2nfkQjJTFCP8UFZSzJRc6M7U15ZbV8h1kuRG7QE3tC5ypFrQzbhCFvQJHMkux6J5i1WoFC5xzquE6PzTsH",
  "key22": "33RQbe34FaG8YcnDhEcjGaA1jDVr8se7vAvwBGGLyGoHWDZS4CTuDgdJSK2fXiPoYf4qszUEhGFu7W8SK1THakK9",
  "key23": "3bLhrm2Ltb1sW8QrMVxxHiE8PtUon2eFEFj5og8mgB48ZeXq742rJia9mKJLEBxCYPwknQVF4S7efe5NjL4iMCwK",
  "key24": "hvCcFoKe42smosEffhabSNcm8iASWiBwTHEdrnMctv4SjFR2NejfPYxbS7Drua6fgFj1Jr6XSnhFZb2yWUhQd8z",
  "key25": "LKvNC4REjGqPobVKXxrzaRuWBwF1QnYhiGB4krQVCFzF54kkXG3pEzWxxvuHZggur1dMavHhwGPc8UzBTERzRik"
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
