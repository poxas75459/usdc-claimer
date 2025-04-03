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
    "fbyPcvcG7RyXebjK2sDafPC7iSmnaEHi7akftQhY7qWhPgwfTGURJ8FZJ1if1bMpNch3kdyyXF7Wm3fSRoWgqRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "565AXR4jSxcMUvqP4MNMt7LpyLdHZr53GCgZ9Tzm6u7HRbjo9SH8hstSnTcFyBQd1sDnGnGzB3iKP5g8R47VBMA4",
  "key1": "3AYL4sqg1EuHyJW8nzmxGL5qWe38nx9u4FoXWGHYaMgFZZBepMCm41AEUHZNSoiFwt4kyb4Jdv12vec3cEK9v2Qv",
  "key2": "38s9Fm3Y67fHHuaU3sHg2kzfVRknpkfYuH4PCB9jycwqud2KQTyaFGcPYdDiWXYpDPLXo4PySZ8t4LV4i11ZjadN",
  "key3": "2n7YPC2HmMedicHkKshQeUYjEfPVmbrp38LGx2qEaqMXUXefkGG44yyeckaWDHfkcfQTMbbStEqWjUi29Ux78uGK",
  "key4": "2nMmS7heYQNq1BKFQVBLXSw7da9SNzX9xf7KcXeQcn5w7wi7mdQGd8gTojJXx6n58UBibJ5PfGJ3F4gk1haaQ3Ty",
  "key5": "3xCvjAnEAmJKps7tAa78MiURBDTudKPyYR4UUHHuZ14VsxCYmJWDZj1WfYzUyhJDSNDC82PyBmt1XgypZiSadyAz",
  "key6": "4Qxvy33UfimKL1G8oNVbrDt8TTpTghvxH3gc5qkF38GxiicN3pYbALtxhPT6D1vamsC7L1n4XY69UtrM4B5uPfTE",
  "key7": "5EcZ8ZJtTyGGA7H85AGnEs8kGTa3SSxyN4aYjc8kEC8FJKkadQTnBmvbnvQKYgTZF2gXsiSYpKUFwK428dD2m9sQ",
  "key8": "3E6r2yQf9ud3G2YTKXk4iKs5Xe4j631gSW1YazrJ8R2wwcUZKQPyf7mphWQnMMdz55ELUJQCcSk2xoUQqCaDi8E5",
  "key9": "5cNTRmqHVuTEdu7dqKSJNFhTXjdWy7HQ6WBQPMTVvDN9tUWPAA6DMLa5AcKwgqKYsjzrw49CApvw7C5V94UimvmA",
  "key10": "2em9LRxHyRERKqSsSXeRjotmeRA8GQWMjtvQ3u5j43avQ5ubdLyQSNXBU6JzTAS8rL4qYxj8xAyRYrVTHtqGWhxp",
  "key11": "2waZV2zkM5BU6iiB7m26VGfLuMKnkLmymoEyfSiWAiJnmJ4qRAkrsduVe85hGzu694ynYyFyAWQ5NoJJsAtH9CiJ",
  "key12": "2LXAXxPvQbwhdYjro1qXRmmzrGZggUkHh4WfwELF3wQeM5qjbtsMRW3ucCcXhaZRB9em5ZLN5ptAZ5gps6gz5nr9",
  "key13": "4ihPKCx2Rpy3vKVcVgUQbXGJoS6PUs7mw3dMgdZupfmD3TfdM9roxm2b6itUsYLdPf3yfCdpeGqC57TeGxYB86E3",
  "key14": "rR9JYGucduT7hzP3EstDjTRUBCrJD3dygV36FzSAzUdACbUxjveiKVzrJ6KYVY7uDKfnU3Q3KoYw4iaTLeP74wy",
  "key15": "3DXZUumUi5yWmjpXfaRKLiKS1gbrSVxwSfSU5wA4foQYMPWnXFfiVjPmGRoWxr3bx7hvu71gnsbmFNEXPYC2d2oh",
  "key16": "664rYhu9C4tBHoxV2R1vGsgjkooT6wJvzSscSfXSs9gNzoYScjbnRxJK5reKfibnm9js9iQS9B5C8Kjj6XpArhgm",
  "key17": "Qeqk1MvZcBwvFZqX1Wrwcr3iK5XCWtvXZVcnjkkBxEYL2q86ZrBeoZCtv8WufdCgRTX1w52kmq2G3CW5aEet93b",
  "key18": "2nLRxiG3YTtiUyJd8441ciqxH8GvRxwFNXmRk11qRtZyyVRFAcGfYpUrBWxHjtxL6RwGM6yuBgRa82RmfJguKjQB",
  "key19": "5opRjjaShEdxDJUFgpZ1ngb4UYM7CtuijsTeEWAhg9HzK1MwgPER2LnSPPMhWuFiFfTwx5jm8LKtvQYGPivuG14E",
  "key20": "R6aiXQpn4ZWn5ph1X2fqTyuMFC4UjkYh7tQpugPwifGMMMSgjx7EjkAcwumfiAJDQgBs98M9ZM7LSRptXCJ7H85",
  "key21": "5hvQtYZexFXqe7TRL8Z6gcTuWfXDazs94YkQ8iAtQVG55T5diPnBzwe6dohRRdWW33SCSPXxHNnLifZm7ZvDtuLG",
  "key22": "3w6Zzf8jSYPrDMyZRzdutKrxxRNySq8qU7c3kMZT6TyhV7XyaqXNYi8fgzWMizJhyRB2uFupgKQZZpuMwEAY18xH",
  "key23": "DamVNyzt45ZjfKAKXrko9WJkjSvznEFD5PxxMaDqmi5DKtWQhhtao1Y6j8G49zQJkG6VpGCrt4453wxsEdN9ib6",
  "key24": "3EfBuJ1zB5oamPXLQLb2fGD8BsW7fmUrbLStUYtEa9Sh1EyKmqujLVsPGAFvw9AzHXWYi27AvpftWqB9QPH8rnt7",
  "key25": "2NQQ5VSmsX5T9vE7GngUKinEjvqTZLhSRreo5YpoQy6W6bAewPHuzhxj8TkRRHHtHztbv2Z98Bn1ELFaWhRiJbfT",
  "key26": "2VMCQrzNKh32EJxbMj2eYHEpnwN4dQPPGWcPb9CZacFz1MzrUJvruHYyGYbRDUS92u1t8TP3ePX3RyJsqsrdecbM",
  "key27": "2Z7hXxZ1iyebLCX9cK8MoMuby4TMccMNi9SE72DvuEuTF75Rd61j3bKBBdw8mXZ7CrcsN1j3Sp6XPb69Zuut4Yfn",
  "key28": "2kquqPRo816dq9Zc1V1VqoU1vPLaFNXLYGiJHxu4vw2d62YLGsmUmXbzXcYQmQvCPd8WaFQUrFqXUjgRNeincrCP",
  "key29": "4ifkwZ7B1gd7aZrfN5t4kyP3ZMbqZ5932vVHQTtUVgznAhChANWYYkkrkfgW7TKe47qQkBboymZSz8vCsCu8HbRt"
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
