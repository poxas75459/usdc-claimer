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
    "wYGzJ8isye4qipXqYheW2LmEQyyDAhHY7wKDdjStYxHxZtWSK89GV1FoLzek9J7UUBh6pCSCNF1PiWvVMB6Zuzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c9XuYwTL7Ww13Q8mFQyC1CssARwZRdcMD5XYDoGNiPseAqRdpAVqCodc9po86NibYvLQurBpREH6TG9CFi37azy",
  "key1": "2sNRQgTAzQhyCYpnHnRBouufyZWgcc2tQAN5mekM2PzP3wjMiugSHFkoaHwCc6SUcird7Fv4WRHKX9tNJ8XMiQFJ",
  "key2": "4EqcxCPcKm2Ubrg6hb42ZsdiEew4yiRn5xzD9Xsn6ajeMc6p1XJ8ksZs2bE3X2C78b6Va783a17YM4oeZ9e2KYKA",
  "key3": "4zYVgQRFTfY2trjqHMhkEQL4qzuc87BDyy8tytsTr8W3k6KiSYyFv4cGmwWyJu8deXhoG9mLCFxPbiUgZavL8gLc",
  "key4": "35AnCHXSN8XXXANuxJ8f5NJZTKkQnVN1vbqL6gQjqvieNGDWUamFJ7osGRjXc9w2yYteJsNG5EBgZFBK3FdtiShU",
  "key5": "2ZyrFUctvWoK4XiwKHfMgBEcGzWn8t58cQLim1pQUTTh3dStpd2DseJLsDfG5VsRkGv2ZRHGQMacxFcTNhP5xcA2",
  "key6": "3ZfKdRAQMFmKkoZZ9vq3yvUm82BydTPddr6trYTuSfRavH1sjMrLLEfcVr9GABPqwy2w7hRvVMii7e2D26gSU2Yc",
  "key7": "3eAXfMn5HUQvgVYsBEUCe4QnSsGtdGZLTPoo4y4JFECqXSLSN1vuG4CtQsN8zxzPT78pkNTG6z64zmbYKswax1VJ",
  "key8": "47je69cTUHKYE5EHnNj6wjCW61iiBAXUi3KHJZf5uSFzTqtMpfE7MgptcLfqgMtyG9T8pT4fLyNF6CogrV3HBk4D",
  "key9": "CaQqrDuFa4UG8kAJWkphzDYWWwbvRF5Y6ycB5q7w7BPumC92GhvhaQNUdPYnqNVzquqPDiE2TgEHoMLsuu1iU8V",
  "key10": "5DyWjVKLadijA5andXdQNfwHiQLLP3jUx2cgPTpXUycnwuMSQbcAVY5Nq7wZxXopZ7uGkmrt547bdjL2YPPnJx4b",
  "key11": "652ZVsZFVg3QBbJKmH8ovuhZZJ6rHKogCY439ZZVjbMrMv4ucVizon5DxFgs5Uyj3WrgdyWWSKvNeadMVxmNqXZy",
  "key12": "2NRuWAuP6yS6WvhG3UbMzVrvtQEF65AtXEKKuW58UwChDSrykj9Hh4tugdwY7bFnPLDcXdYUFmaPbko9Zhgh7bfb",
  "key13": "3GsZAY2FjAvWuCEnogMpq53qHD9DH5pKsXqxAavoDY5rjxN8yG5cfNyfwtA7nQkaYxxMj6n4kTSUjLoYZnTqctjH",
  "key14": "571SuujoQpPSU4B6QHeK6gvntEfZC9t25tnLkYq1MzujHEQtyqf8tVh6Ycg6tmeXETrPRv9wip4iNihrVoEV1uJE",
  "key15": "uyUoFCjW7qu5zTM2SmHYP8FskSDsVJKQkLb3cNPvwFgSu6U17HQkEkHWnZMJLAp48py1SKmjaTyFz6gyobfnvmZ",
  "key16": "8NkbxNxnGhUMMZZzjBR58WWzrTmP34Ugxnd2Di8cRZgs4fEXP5ZQBL3FMEzmwxcwGZBVD8qpsDacVrobKkprnRm",
  "key17": "z6dMzHn9atzjdZfPPJbcvV4XnYFpGWGfEvjA7RtxFjSsmkr93xyTa1PkSBkN9spTbRHxjW6EQL87mcMZHPYRvyH",
  "key18": "4S9yiCs3aaJcDEAt8RHhaJoxemZ5599rSTrumJZkkMMedQQa5F1c7mZnJgWPJ82utWEiwEvtmw2ogj9VZYgRpxWm",
  "key19": "Rkw9kZeni7Mwr2WbkCRDpGNhn2Vatf9DbJoHgjgdYGCzCU7z6R5JHK2vKEZdxTX8uw7Rud95DJT3iDUwJNQgygJ",
  "key20": "tPzFcPqheo1VHfbVmj13rMSVcreNQa586EezDsVhqTQ78SGk6QPXFizRpc4m8prgiHDP72yugwfg5pDqam61Ltx",
  "key21": "3CWaNMywNrPPhqFLsW7vcb1cEUhy3GhPzesRJXBLGxqTYsi39sSrPKaYKAXxc7Crf2dhuhJQfD6UBtp4KJP7fXF4",
  "key22": "5QghwqtJXxwZLRp7jfZGNnenzHM3T9Fg38weMH11iHTcNnsuizTCHteZt4xrEoSabrtwGkA3rPfRZpJjvEw4AnSZ",
  "key23": "5TNmWNa5xxbfFSdoybJuTinMdHwrmjCYwNWy9xnUcu16hrb8hXqw5KWRFtCeskpwyiTfhvrxBA5ZAGHrMzwEAmQS",
  "key24": "2CHAuUq6EgMfi9QrhaoUHFScJeKzHMAtWFjCmjYVTWFaLpKzwFvTURtVuctjvsrM27yiGQXeVZmbNUoBxAW521ks",
  "key25": "4ChFZQe5HMyGyVxsDogsi5NHEKM2EMoeiPJmnE8nzm9foEZvxfaZ2zaNoDdti9YYbRqgHCDEsVJptzXtjhZ9x1CD",
  "key26": "4Tfw2nnb5GrhAmhUfgQRjjpz3YVLknxARvPSCXVQN9gesXvH4tBDDzNhTyvZMtnNccJq6rsS7MVVAvZb2Nauk1cF",
  "key27": "3HBzhsMk25hZSu7N4s667wQuYkkLk1knMpHKkmx1EBjai3VcYkUFfr8KySJBnZ8K9ASyawPkBbMAJYBHjaVWPX93",
  "key28": "4doSv4jjpPomXmqXPMB5KGeaJR9JsFJGBX2AJmTcfwmJ54bAxmjabCFwvcUTkqx7eXEJjTpzjUPM534SqZCqoXZc",
  "key29": "cGfAQYgbE6Cm3RANdaRt13pXohJS1Rt3WH7Kh2Gygt1wtrZn7Nkb8aZb1xTq6jmcpDYWRKfQY3wUyEXwouhLSfd",
  "key30": "3d4CGL75oJFEZkP2ugvAZ5wNMdBDQidgJAxQbFEtQsqzRpanWTYthR6fV5MKSE9MquriDivQHVyJvQ3xXBzF2AhV",
  "key31": "3cNuABunHFnWz9S1bVsL4Y98dp856Yn9zL3V5VRNkKMZSAK46SQB9iwxzBnGXq8VJSwDbbVRcAw8FM6YEKpoeT1J",
  "key32": "2qoHPTQy8mKAyoVqDrQo5phxjBTdn85ggqKcJQyfqy3J5D8Hmsn4Biv2SAu14uL6uRgzdMzj8juKYEZWvHwPzHjt",
  "key33": "v1jLJU4sxpPr1emyyduQouqzJNouFvj2ScHz556VfWfCojrURV6FYXrzJcQywtF1nmZNNtRHVEi7CF8Kvdyri2Z",
  "key34": "3G1yEVwgwQAyWVsQKBa9L79HVsHJuke7Q1vPvMLaQifH2PmLXVg3TmPPQB3LLqvcm2AKCkLckAgH9xwfpruHk6rg"
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
