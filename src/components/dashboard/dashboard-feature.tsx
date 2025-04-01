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
    "2XXw5KgkbPqfZadhmVk73oEYhSbXHNheDxX3PewwN3a6WtUk68nnQrVQAHMxBHwYLBzh6uPe8jdhMLM63n75mSv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3kbsjUNVtp1DFpKAXeguUmVbmtb53bnaKtz3h8Kf5DYKGSwBbdZRa733xn3Avatc4ZqJvnUPx9qcDCNZS7eoSE",
  "key1": "tYTBeceXcaDXGHUv5GRQY8RNUJh4jkwjsb8v1FxEqA4eHC9uW2KRDiM7JSAb4GZZreZzR8SnFaewUzWigcNkc6F",
  "key2": "2hiHVL2yE5SGqUxZ81xz8c31Fxqjj5XbzUj38eG2n8uiB2XvB7Yk4dxD7WqHfiYfn7RbHp8dbhWPGyMURgvS9d38",
  "key3": "64Q527CtuX88J9diMb3iYwGhPcqAK4gpcQGcNY2avkcsSe7tPjtV1UifcJdngFX8Y7YiembwaBJkNSqxnrATaKC5",
  "key4": "3EiUuB7QPvJCZBNk9iJTAQobYfGpUMg92PibCTVmeku5rePCtUFpfkp8XVejvxbDhLbdJn8tG8XNh3hj1qh6HYVc",
  "key5": "2Stuim7h3mVjLEDdEhp6PRRWsScchCh18hmrAXpTYYeEPC9YLpvUvyqQ1Pog6aDFPvsQG9F1Zxc6dijeL2VP9vMW",
  "key6": "2Wdj2WWHJGc5Meiw6BHyGTsKzPJpUnXKL267FPD1J8VSWySiT1EmqtosXxAtxLiMkWngwjQWsyVu37qMqBnqfswc",
  "key7": "5aME5D2vKN7ZdzS2mp6TBGZV1ru9gvAisB4xSovNGYxqjmPUfCJZUx8KyVP9n4ViA3J4tR5ttA1uwscc7idNtsyb",
  "key8": "4QXn2mkbvVizePboaexkLCxo96XtVd1qpLkrS8DhdRJnmcjpPfJww7Hwf1Rm9DQSM3Ec82FmMabxB3hfS6nYBNuJ",
  "key9": "5pUsz4B52ic8RzuU6xuvFfZFhph3TgMsHzb3WionfQ2LduUUUBLfdptN1WeigYBPHPUaTiPYsqZukdwSH4MWMb3y",
  "key10": "3UxyY63z7BxuzjKJof3iMLgaWV45PDXUTrjzrjjBtHbHdJg3ni3SBv2yVAqUAi7ENLTz497KkUBmMG4NHFxVJPrd",
  "key11": "4yt9PZKGj4qKpRcmtBmaaQ3cJLYC7X7La77BR7M85knXWftPqobApdd6P276UvRqjCXmEHmR7zXwa9ZboADBQdjW",
  "key12": "2stnTkD4pF2GcTgVhSLQiFE8fUZYV1q1P3FDZaBBzQgusPTB9jgAuokr2XosgncyoHXWxwVbTLjyDyxFnkU9Xti6",
  "key13": "5NXYKex7CpCQgfCJ567XSWqHCV5cuWqxYsiKRhg4XKTF7kciRLS8Tty49qTjTzb26NWyLsmBNX35LkdSAzdTNzvE",
  "key14": "2iC3pPorEUcaJGjmanKKb9jw42MwQcRRtxrZCpUPAUoMMG299VhFJmTT4ERihZUV53fLr6iUx7LTcqJU4EgyJUwX",
  "key15": "36DZ7VhiWd6ukWzYepyJgg9pjv5VsfJqBLPgd8FuRTycbQe5niWf5DnRPrpLMrtAcKGoRrVCgQbgdEafjfAdZ6Qc",
  "key16": "5c1RTEtER5vcZ2Y3fqyxvrPYrF1Qj1qbjxq5tmA2wJp6xbNCRLCcQjZvnTaEQa9p8uwDcfmK323Qm4owsAHD98RS",
  "key17": "b6gZRCtThk6JUPRcz5U7i63vLEwa5RERqd9mV1VE2W6ebA8akMsA33ods5VDE7iayUJXpco9L4pzSR814R5gUpu",
  "key18": "4UKfaBKxu3KBhMG1HJw8eWisYL5mT4Nr5mp55UPEvz4NezRYpcooTfmBWyFimYkiKW8Qa6Z1fnGShxZx3AhiZQvo",
  "key19": "5CtJogyQM7U2GpoYiR8LbjnV3xMhUT3Tc1yiHFZQqg1oKCqzL7tLhXBaEMSGhDkchgCpLmq7HvEgcYRMSEntpVzP",
  "key20": "3NztJpmKx745PwruaRtKQhuN1VnLpA1xRNs9byYbMuSzPvPKc23vB7p4N55EBoKxg1nKviLaVv4XVeEm4WhfLG3d",
  "key21": "3hWvpubJg5XH9xDCewkUr5gJ7dhXVHffoSCZz6yPtqWF3rTBVgcsQEGhn2kAFKYiR5NxUrHG1rfxGRBthY9hUgAL",
  "key22": "5RZwjt8bRQYCM5CXYn6q7GVVikLE8RPBJNLQwPiyYHzAqds3spbdvTZVo2krvHwTWAqMCL47N4Zbj9PuSqDuQRUT",
  "key23": "47r9smmKW7MfuYjghwt3oizAjgzN7wcCHETWr7fYKWXLqVSEdrfYT3PAd7ssetDNbJoKMGJZxd6uPHtgx3TMy4fi",
  "key24": "5rKfZRVDpGGwUjF4fR4dTS6AX91KuDXA6LbGDwmrNdfcX2oGbU5968MrMCZ4GkH9NxNKwiFgTUbnZr9PyWMUGva5",
  "key25": "3PEvHVLuL7NsraU399zcWq4xyR7vfpxXY1pVgkFarusFXEGV8o4s2466vFbge3hY3r4i78FWn2c7gqBxpqtsLAUC",
  "key26": "2hg3TCr6eVndTjhZNHmYQ4oEYTe2Fu39wLyFsazhm3TPRV54bpgzMwgfqwLpyrKZxDot2avB4wGhBB7dgMBbsKnD",
  "key27": "4ppP6mLZXabmQskXPrW4JkJQhTkAHMHnfQGzfb9yLipzWsbSMfhC4tzALnWbLiJgxU52EcCatgqtFzVnuqdJUJDW"
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
