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
    "3EXKg3HiZTuVL49d2BnEMctsPs8j7jTXYi5JSbEXhxgLVrShH8jYxxtqsmSHUhtnrbwnjTGh8fHqk99gFqXf5s7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3m5Sc9WZ2sNdgVsEsV2Y9menfqVDV4fFhhxu5MJpjztT7fryymjS87iB7KGUxVe9DgKZaX79mNPJWRr4V1GKZU",
  "key1": "M8BSfNHnejLsF3Wai36Rei5An95U69D3pjkQ2knmEcFxhytyXMfnMzfGfXWYB7rT4e9BAfrbJjhhE8FTKcCQCJt",
  "key2": "9LSjCQKNGv3N4VU98efQ9hifYA7y34Ma9jhpf9oTnSdfaqcvV93ZtumG18r8t5RqF1S5dVftL8HQKLoAGVhXZ9c",
  "key3": "5KfMZW43QL8XKDs6VdTK9gjGm6qJeFLJFY6SwjyAhAURT6zf95yt1aW1WBJ4jJv249kgnGWsuuLDgv4TYL63GL3v",
  "key4": "4mWeZLBgv26HQ5gzDDWFkshLEQ6ZvRrCuScucrJPx1FioW41Fw7bmGjcJpVbHpFPzpCSWMAVtweHgUrDvp6JgjuX",
  "key5": "qqkpixjWSHdHrKYAXCjVCRYGGeKLSqHrD1qXo6hpUq4v9EZsBqZx6oXKc6UAQuU77Ufrt7FXqzXLp4ob8Bdi7Sz",
  "key6": "4Ae2wEgsMhJPjALbLFybwwSSqCb4PffUTH6doTVohtCewvu145n5cAkZrTB4k2Tc4pfdL8xBehuE48nNXnz7HrbX",
  "key7": "59fZTc1hU7GWk66TaaxBmGVFrN1t9xBdQywr4BXCjFiG3FntC9ERkDSwPddUY9vgTCfjNTJFVPgHAxEGsjPXcstH",
  "key8": "4wZnVvnDrXWWd1SJsbTJojeZdi4H9KCEP7QQRH5EyJsY3ASjkkRxTUg5WsvbsUDKWRdUwoPHH7FgBTgoZG2Sfi8F",
  "key9": "5Ns9RqcN3wLiJfxtV3vRsAy3ckxPMVhs25iQriF97vBQFjUVc8cDmKL4XGjrqgbyCVQBP9F5Q2ZrosjW9geaZok3",
  "key10": "3hqn7LaJbkwkNa5eNRNKsCHVzcSNAXzUUFfotanrNjLqrFrW3eZMr1rUSJbZAjgRyv8G1WS327wM4Ad6DukdRZis",
  "key11": "TaKMEssiZysKAFCX9HRzdinWK5L97uokVvBbxzXczC3zytEmJSNkKDXqC4tGMHg7rVzQDET7hhZZnw29BxZyWrT",
  "key12": "2ZVBWognnVh831ZscmRY4VxrjjVgvNCdmjSnc8nw93ixhD36aYv7mfD3vJWNWZaV92MDjAuuqfYzdpcCH76mA3wB",
  "key13": "3NUj9RraNeCfuC6etFaJXXumK6y69oykUZWUaftYAYjB9Xxd8vktM7Gejzq6x69VrQEDb1W2QnZ8BzoCF1nwUVwL",
  "key14": "5dmTprAXfnptDAJNjzxyYtt6Ho2bwxsRHf6tHhpbwvAFgDDqTXitohfT4qi7VbXbHK3fBSqur8ybCrwK2ioomqiv",
  "key15": "384hqNuFCjvoVBafgP2tUxqss6qgMcbX1r4DcoSoKoCPk8AZvuGKpY3LcKe5XXSfCWCxZXZPaDf3idmD4qpnYVo7",
  "key16": "3ZbF18bXoxBtC9dtRfusk5BWTVoPHQ7jwiGxmgLDpWtyQKKAWqqeSeZtjyBg6WAJR3G7izsz6Kvf9gjqiTywvDL5",
  "key17": "3ozG6Jnh6EggqbpPEMZvXD52953oF97YRFj2CQ93iSQynfdKbbJ5iJKm5HeCyDfjDmXUMdUCs8RPHsWPtwzRPTYX",
  "key18": "2RdaaS4J46QDMY1qNJqvbKTwW3qLUfM87sn7Wdq1JGuaNt5Km85M47MmnnNAqqxM8uDPpdY96g8ycN14KTQuLmww",
  "key19": "3dSb8o1dqJAJZZSmYAa1z5874BvZc2pubr7yyFRg5QxxBqT6brhaxRJP4dg3ESSdCWtbYudZ31HR67f7vosr48KR",
  "key20": "5LrJCxVD5oyZvYjQdHNUR12voAyGR5fPPsgpen9WXTyBhiJjuwiEp4f2P8EKWHQADyEtGYCc2PtHuKcExLARdXCK",
  "key21": "2cjBUJKAfoN49acKgdYroWT1NEpMec4Quj5F8mX3shJd7ogYKT25Ky368UXfZjoPSNn4mxBPQP2vHwFEnUqdcjHE",
  "key22": "2wqJmQPD7pwcWz3skbJCfJm91McP9J6hPr1HMK1zKKppWknHhF9eJrUVgcFy7CGmR4tP1uZfDFM24Axz8swvDxz",
  "key23": "5JpbNnzEP3u4vzUrdyjaDKUgpS3sMLX9i14uGcVd815DjNBLwVXuFgVS6TfwnP4JtMgreQwUATGrFGW5wvKxw3bQ",
  "key24": "5GM75acERPfa4zghpevkbxFz3WiEiN2p12xtFhZdcizqr6NZVma27GJp5Y7FcW12qa5m1z1xBxafL1huYZosXeKy",
  "key25": "4saintW52eGGTAm8bvLJfA4TjSktscAMkeS7M7vRLvi6P4ar7KTqAzKxnbKbVLJXPMpkMFCEmLFybcUCN528CQcx",
  "key26": "y2CLtcbi1jD4Nu17DWh9uutRzQiWW9h13Wmw1X4QKZm6nU3RUZXCh3LCssXCbe8GRATDfxhgto5C7En3Steyk26",
  "key27": "MnNigpVNsA6DMgTase5YAQLTmUdV8xnSFx51DdDz2kKVGJhVMKLP8ZLDQQJay8ygxrAAQ5NUmh4PGdJgy2YrqNr",
  "key28": "xryGksgCwe6ojaQTtUR1ZmGN7s1r3TN2Vy85cq1VEsThNTdcNfuFMyqGZqCQhhcRj3GxheptCo2PZCqKdxzqwPQ",
  "key29": "44tRwBubjUYdW2vcSbiTPUNGbYyTVwU8BstYZZ3aJtfMk9JksSQ2QhwVPE9PCnJJuyf3gmyf8J7pnbtitVMscwPd",
  "key30": "36eVDVPgdmezA7CCcNYcN5GPK9JFr3rs5Ft1Kze6sL4tSVMJiS6oTFYnbZtkg6SvM7xvT2T6UYf6QT7UrUJvKSqD",
  "key31": "554X6HRZVif81CYvUoXbRsMSCgYAE6jP8DRYJQQFeHnC8pTqs5DWAUGKPfqpWyNStJBqWgti6oz7UFjyo6BECAT7",
  "key32": "4S6FUnMXiMVe6pYMAR8j414eoW6uUBgtZNyxWebsoVG7q4ucoXpqEu2GJoKrcRPQomjF3GiP2LpASakCkSaGoPw4"
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
