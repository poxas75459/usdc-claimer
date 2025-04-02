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
    "2Ye8ugHmLQYVjd8PpTT9ehfWtBcRPaiqC6GoJNLqpk6FBANH2MrRp2PCVJKk1afG6FbnGLf2LQqEptPvdDeC5wKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2YexbMFNUUi56RoMSNjCYHuHChAgUYE7UCsShRCvS8685ZTmp8M4PPhoE1EMeXzpR42RkfvS8PY467MAbteVT8",
  "key1": "527s553eio1pmWS9h5nAjZqrgh2vkcTSxT3B5g7ASjunZAK2Ub3mJdJNQ96KBUDMeBjotCg652kSNyLNTN8drA21",
  "key2": "4UFoDNaZ4WqYUKzBT9e9GfppXZE4HjAA77qLGRAiptuVT8HkGTTNqzwLfC7rxPzhGq2yhGJvyEMbNxEis7cTukHM",
  "key3": "4qRHHLuyyMkiSh6XWFaxDAr3dvwa1djRisrWu4KovVuZrhZWEjAReyHLZeaaZkfPhet8qeC6FQQTpuERGkunnnmD",
  "key4": "3xV6feD46EWC2AeRvMQN8FHfCCGxiLzM4TRRVn7natY4upYCAnzrwWXv4prNwqXkEHzaVP6QzhH6HixtPm9M3GL3",
  "key5": "2XnAgMc1yW6EaBJsXVkDVB3geL8FavE2mbFL2rHd9SgGdtWM9GsyE6afXuNvKvGhc4obdGCbuQeM3MiLqUDNdY2F",
  "key6": "2Cj6CWEhNUD5X8vMqRZasevY4hK4ZpxYySHyYDdvf6uZqMhddb1gJQeK8QcBb4E9WJs5aFJdruUAttheXM2MuzGQ",
  "key7": "5SzfBYxu9zBvRc6qjq32xZ5QVMQwmHXVdivwHCNqXSp5CUxBNbx4wFBUEpN87iZsPabncmhy7PiZKYFfEyJXuxKt",
  "key8": "2GtNQMf3dATvF6EfmNk9HY6LcqtVBnVAuZ1Qbu8t4GNySYBsdZGpuac6M4VvgKrcqmkyqpLhgGg8HMwKgWeJ8vp3",
  "key9": "4zvb7AJzZXoDYQk1LF5FLP3bpQkZeoMkdkDTRJVYdzxmTnvf9gr7RWBt5NxtDthz6Waiz52x3scrR92muVx8TfhG",
  "key10": "2UbDUaB3Dj6HkWvU6opuwxiNtd7RJJkFhwCpiVpNAbgyAHYKHNFuVQ2pqCABDfu23FJs5Sn9sSX5osA5DKfqd4MD",
  "key11": "46H5n6kkaJzDkYUwCcUSwt5cgkGC7rH54LCBzURZMXhvSd6qdPn73C458DYkCKoWsYyMRmHnzynQMx9qaifwAX5R",
  "key12": "3nQ6wJmWNjKqdVeGWKZNmEwDMmuHBGvvFNndVe5zDtDcWGo6tS1Kp9zQFvPUBAD4veXpe8gkUH4P93sFt19ca2kE",
  "key13": "4a7HFJrtPVBgD97M33HMkKaMKeMnQDzUxiMgB7bGjm1fufBKdDih6x92CgGmzcSJdmd3xtvSJKQsM55q8REwec2F",
  "key14": "4KdfwB6TYi7o6VSGaubjQAymezRUwhs39ACE9Z5TU3874p8JzFvdSwP9cAtwWZfjfhL43oqgktFDtPEJ6s18k1mU",
  "key15": "5yk5dTo4qtK7jadAnpvwkVL6UencCCQPS5US1JXhdF4wRp7R14EZ49gFo5QEkguMhxQ3mzgVJJaVZpAL4n79DRi1",
  "key16": "417gt9b3SvijuCA2Q3EP4ARnrdXohSe8EovrVXRVdt1crPRE2mA7EiwPQedUvdA244PAYWmYBGeBJSBZu339p8wL",
  "key17": "4NrFKxkAU8SMK6dbxuQ4dci4fcRDuaJrXCP7mx8XGwJa6pHBSmqQZAhn7yNy5ZK9HsuQNk9PbiC9TW1rRDA7i9a7",
  "key18": "5LLxXpkK4PUpwzo2goeqnU9XrbiREHaLiC8Yd1KuHAmfMQMUpKnCer2uBEKeWkY1e5AqQD3JH4QwSVBHaZaB2C96",
  "key19": "WM97wuZ24bmwyG715KEm7EK1PyupLbXryMydCr3NSfsup1Q7adAiJz39Bd6cqjYx58RK8H24MjCpfNq9BncPcuT",
  "key20": "2pEAKYkogs7wAT6QrW1BucRSifB47aZFvmbLJiMqayMdDQTnQAWC7HiKa6o9SSvEYn8q4HPypmU53zGi3x2fApfB",
  "key21": "4Le64nqQGC5Bfdoos5HpyTVsCNwYMGf1qqLYVW9XSLYSzNh6UxykYSnuRAreA9JW2YTa98WZ6U8etEGMnPnNnxty",
  "key22": "4UKBKmPkHiP5wrBb5js9fHtRHMjXefoYCkidAJLdXSY2N4mDwHYfDU64Ph8HPgXzVvu2wEL6dv6vq52WJyyiAYvM",
  "key23": "4f8joA1a3oUsfvybLFH2BGQr6AoBxp1bFL1mCQHmYP6mXEhJGn3y5dDt44XtG9cqCS8tRVfXomdPoBxMYDhpe9ch",
  "key24": "4GGHj3FR2XhLkKdRbhFqt4YN53qyC68BN6FPREs3eNZc5aKDn2z18Q6Xo6E21s2atNaS6uTJ1PMRg479Mu41SZZd"
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
