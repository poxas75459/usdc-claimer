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
    "2uUkMXh6PPUg6o4UskgGnJa3kgvrv2U5aP2BXRGD9gyUwyubPKNhdMSC4qb9XdUbwjTmDVdoUqT6J5XRNinsvuhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9yKMhmrezZgqEaHBNM973VN7ZN5kqe6mPFknsR26KJTbg4eH2h6YZm5VMyw3ppemSrTnxsJ5tojW83tbM7YNGy",
  "key1": "4zFrjEdT2amkUpNvxh99jD1skhq8vwTMpHmj2PjTjWjp27Lji6GuCHArioyxDEhPrZa7SpL6aGyNHRpXyfsgmPpE",
  "key2": "5cXzPnXNYbnCj16GEPGkQkMySpfYgZfA7zzQnKWgzFkmNPMAyc48uhgo29FByoSZPaRuwYM8iPMUegh5nsEXCfdJ",
  "key3": "5x1B6JfxuSX9988Bq3WGEoX6AsrcSHZFvD1AHFkuDjM78hhNGHx9amz6JB4jW9EssZLkhxBv9r4soBAenyxkoJNp",
  "key4": "oJAndtQuh2UfAr6tHCU2iLwCsiZHKLZkKF7zgkj6LxDz9m5PPxXwDuQBpDwgnzf91622ykUVNBVhSH9Ny7QyPnV",
  "key5": "52JLRKsEhHndr5m2TKpbaZwT1jiEeEeoQAQtuE2L3LcHcdWFo4b5ithKEYsdjWCk3S5mEAoif9uWkNt2GnBt5dUi",
  "key6": "xcPAXAHB89R8WQkzjc9Y93R1sKxEbFUndo8mprVn1rfTJGZknbjbfJoiv8AFnz24JV6yiQPGRLkXYWF9bGT76YL",
  "key7": "3HkZz5DvTPesEJkX7z4ThvB6yuWZ8p7RFqwngZbuL5ipWBCGZL4y6y2iWr1T1pZuQ3MtJmXrNF4yZhj4MjSpnYKB",
  "key8": "2ikBo9NsTn38xgHKSnVnyG6k4GAW29EJQoGf4z9dkKQyqhwZuta125UW9SwBTNLtYAxqHFh1o3SzGZENTjKtCGpp",
  "key9": "35bSsqrfLPJGFa4o1V5LVE9dZYMgQQCNtzqKTsa1iJjDT7wjySv4QTALhP3hy7BPNu1KfzRUBT6KWR1H5KDqyDSQ",
  "key10": "2akNbyQSVkJEwaRZmFpmSNoftJ3V5qz9sqqRUWjsFdDEHwvzt8prBvqwYMyY2G6bME4EbPv8nRkWKuSc8w95s8DS",
  "key11": "QHTo9WgaRJxiteHuh47gquSRT3KNVQwTbQ5TDtuMyq59LsLNN1WwZMjis7vvE8fUr9RK6UmWUzFPrhYFDobdMnY",
  "key12": "2UjJGBVtbD5bwVrK7AWJJHbvBmypnVWoeoMo8RnCTa9yJpt8j31SxeMvg26Pa1QcQ7KtyDSPpFPziVm5wyoKqeTA",
  "key13": "4N8DfqdsX1qg1epcbj8PjwESbk1Bp94818o17rS4yFvT2ZcgzUFTUUYjRLLxAHZZGUm8ari216b1EYvxXdxJtdSW",
  "key14": "47VzMMnzzmTcZ4LzsAnJfBL8TVqqm8kwYHMqUb2EUcSiAGEBxz3GBnhUavPp92TwRTr5xkqKptjKbJG875vGk9uP",
  "key15": "3wiAeUjkX7ZLKw6wsdY1bhfuLhNGMpe4JU5HyMmjrfaEXFKQMa218sAVFVAHuQyg4ZACLDir9CzzYdLc5KqdGYrN",
  "key16": "3qdRTF8MRtdNKQb6GQoBrAWvoVFqRaQU5m6RBY2Fz3oGDJF9wh1ScnMjidFyua7xQA8NZoyJFmJaiKPjNtzH96eH",
  "key17": "3YiZd9525dnUYXsX83k8bahPkZjsa4yhCpPt9UUr4ua5qczoAMJa4UFMe86fGiQMc8vm96mwXvGZGGaW4zKJj1hp",
  "key18": "65snzPrmw8pCng1U1ALo2sj2P9Pm7bnCMLYtWoYRiqqsknuoEKStHXeiu9x8acN9hPGhRmeo2h2NRZtqsEcvYd7D",
  "key19": "aJkx8TrVgEN9GBYTFwXT7TKUMV5PQUjNhRUX2mFVUzLXQtUL61uW49XEpvYNQ8osjkbEupnEuTHZbPhZCdFNBTs",
  "key20": "3xaeFqDbpAcWMPpmd5hc3zQNBSqg7Y5y6MxRwhYxesVrZJhMG1eJZaHWzRjHBbF8eVtKPW9wixTcCwQ2o6t8EGwY",
  "key21": "5Tt2GXYtoK1rJGjpQ4cD1uitnXgv7mDi9zNZfWWsAK25dNPqTSazEYRveFR28AMKjwNWa1dxUVaqxjXiTjM5EkKh",
  "key22": "4ZPgPjvm74NXd1pd9k23vswqpd89Eox5hmk9EAtTRuHfKsZf994vGJUesoFidXSVaTy3GLtACX1UEdje4necTZfN",
  "key23": "3WGbzc651keJS4z5YMu9YTtKZ6dMNNLukb1zbtpepakS1qiJafUvK9cEXKnHnKcBejZBDuuuRkmdaDfyAxEWysiy",
  "key24": "2cict8aueERujQoWzP1DPwHu7iGBbAWDwdJ6sj8dxhQF4v8Cbnq8w73S2SLcZRBSUpKtHXm8Rk7RNttxhKXUbT5m",
  "key25": "JB2ai7ft7pRXEauKJSDvaErwXUZHgAazQokaZgfZd1D6a2vx5FNVyQ8CnXuMQZdBShraHeP5EeKjhDzahcmBC64",
  "key26": "1f3wtkUUBCedDBVqV55EbehxSbpobxU58J4Zo7uEiuK6sK9gGahjmSJoc8K89AfGCz7nZGGs3GS2YmJuaKwdtkX"
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
