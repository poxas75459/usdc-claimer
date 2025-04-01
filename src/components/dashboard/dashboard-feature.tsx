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
    "RUwt2zRCkjnsDHum9oZvNgc9JrKEXpUBz9j8rc1Hckz3bU9hZnv3uo5K4R9uKKmqZ23D5RLoTbp6Tu32f5x2rYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avrhCBqjfQur7G4fzMhyv86wm8zq9GuFEFtBv5bcBoaavcWe4TUXyXhhJcZvHuoEgYf9NMxxuLo2qTycWM3cea2",
  "key1": "3hocEhZqkRE1FUqCUCBVfzdksNXvP9U73WNwK48dYx67Wm4wZYcUVp3QSt8gZAHYqsXizDXh5z73AmHwhxSPD353",
  "key2": "4ysFHV1M3TeZhiwDzdpHDhjsv8oA8bDk2GcFAsF5jxAtontAQsbWnNtGeeP7ti2gchDXrDfXi83Q8BzWGwMew8HH",
  "key3": "43YG6FsC6cRUTyhWsDvxwukYvH7znSATPhJj7Sb5S9U8iGWc6XtgMZxR8XitPUg6fLhGrTaF59d7a8bMwb8NeWVC",
  "key4": "5C9NuAR1sN8Tzei8TZbuc2FJQbGYdjJpT5GCFYkSunT4YKJSkNSHy8sZ9r7L52Sdg99Nvb6rbsqVyj5Q7SeQN1d2",
  "key5": "3a2KdeFBjrmLFDZLXtEysQ5PVHFutkUtmgbKWbYhUPhkNYnsX3KkibMtS9fMUXv78ZcYa4cZZ3m99kQ64fTQcrqp",
  "key6": "5taCtgdTwS4cYUZKvYxRpafJ6y89AJa2HirqpcLWnpwXXRUedHjywEnQoHmu6uAmHHerfEcMN53dMb9o4AoPuCUW",
  "key7": "61Z1w8oPmjjq3j6Q47RrNHPinZAKvKeRr7L9Ex2akjZsE9ricWM8Yvap7yQ21e1gF5efgFcZLVPwrzDqCf3DrDB7",
  "key8": "5wjU2XkrZaj5MLPYHCGDiLevV14nmS2daWPUPSjrGqaGxyHFJWX7jCGb5DQZ8rp9wRwnUCcTuMNPZG14UKYaoZBU",
  "key9": "L9jykGPiHpTmrWdKQV1CLzHybd9AVQhfDRRKvke1m5CYdi4N6TMCBbrad18389PuZqi4ZdxNz6hBPgvViqVsXrk",
  "key10": "4B48rnBvBbFJf3qVhdnF9djV6amdSR1TjRUzdPgKgBP89u9BQ4FNUAWJnp5evgcW6ZHrqiJxqT8y2Kmq4ucWFJQb",
  "key11": "3WSShmZUG68MgXuP85sz7HFh1M5pgmzW1Qv8cdaCaEWwEuRLz9ypxp9zTr1nqESbw6FiKsPbEdmGU6R4uucij8W4",
  "key12": "2bR1GiDn6uNRzpo1Jj2xFziDMa1rg8R4skodQm51xwUFhKqsErZybfFxQ51d7K2Kk3HxAnkAtEGjoeaaU9ztTVmF",
  "key13": "2SNxPtFs92uPGMN6cWAUuoxh91dYx4f2HP4WM7kbNf59ddc1fjtZ9WxVSJNirK4ySp15AvgZHkyB7bmgb7TQgsLU",
  "key14": "3KkJ5o6NSnSpEEpY7P2F62XjGhkhTdDFGxVKsPwZ6X4gcXP1TgEQzJi6GAxekhvqpnb9S1VQRTw84Z9ZnyVcEjhR",
  "key15": "3AZQ34HZJZ4RPUoKu2oirXDapo1P3devXjonH6Rod8C2bZQ4u4XBvJkuotuyFr5dZ2oWVGaJJH6gfLxv3gyLoy3H",
  "key16": "3K76QS5hxQN2XD81XwAzhhBMq8Ecg4etMeta1mBpvKmkteRCGK2n1kLMKEkzMUcutjzxtxqcN9eQpiSepCEap8r4",
  "key17": "3KavNwYeeaifCpysakfevx8dxbemiFfW5oLhGCETRG16EXWiUkvH1kfsGtKGhKezPQB8xPAGtgwScwaqSh6Ptpm5",
  "key18": "4Qos5PzD8ztuUqt1g2uaqBWufBGjGBkKjaABCRuWLg48mghjoh5NYz2aWpij1iNbfT2PSTSRZtsRetPEjtaRkS1U",
  "key19": "3BoNpQpA1Pk7yCkdYMTASPg3QVBiH4mKTisctwoqeYuCZomKhj8Xh3aAN4y5jUp1wJKSMSUmZkB9GZ9dZQxp1124",
  "key20": "2dcQapyNitPaHN6HUhs3Uu4wEPhKxKGhrSmS6bPbMxi3ktGU3WUz9ar9Vq9evuZX5JzGDRfi88Q1nqzL2cGTag1B",
  "key21": "3m1QhUGq63q892iWifWabBQVh4uZPNDDra3udf2Vjs7QEJp5W6U4dmnhQs7WRsGP5sb1vdrbt2nnz8ir19Yxe3Y",
  "key22": "54y6FhsbNt4n615wkneforBv9ek1SWwjeq8NCxLTUmskckCmc2tzxwpjdoNWj56sjGyC9uMdZyAt2YHroA2NksUa",
  "key23": "3rnq6iwaewLGsyQQaQMfBpQtAbPzVdBRJfJkCFsrneYYASMdWtjThLXZ4BKswumLwEv3P6NFH3rdsmTAULQkJ6NU",
  "key24": "3bSrxwB3t6qfPZdA8PMSsWp7vgre1YGSkrXoYH7KaqZPRnL3si2pET6nmPgx84JCShGM4nHJyNAk9ddjmDoqNHJC",
  "key25": "39LmvroWLxzcc8tQTcfod3Wq762c9HZhte1XdbBU6MB3PjZeE7pVZT7nJTqz357raBtSWNDTPK6QE1ouzsojWG2j"
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
