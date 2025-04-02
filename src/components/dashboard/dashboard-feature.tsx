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
    "Cia5iTRPJvzxEVfvTHr1eGdxqEk6Ps4JSjc4Js4VvRwKFbLSS63eUw7VyZ9Cqaquiq1VjaPqWzU1Huzv6NnWWfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ETovUtoHz7cfqP94Nob21YSF9dHR7bhmVZvKnhgcn6LCz1xUmydHtn6KKqYhhRhQNdcxW92ne1bZQAeSGLjDTiT",
  "key1": "5V3QsGRHHaDBgEfeaZStM8Gj4iHTCH6MDVq9ZagEf7BiurigxoLdYMnHYDjub2rQt5J4a7uT4nQP7YKGkEWxCNYS",
  "key2": "63KrJZrhq6JVn1qmY6sVtzMTAXy4G7twQriN1s3xadart3nCQ6ZGHrBjD6k7NQ3nxxtWnsexTXozbCZMfmBf9tci",
  "key3": "5y7FjJuYguaHeFLEym35vwYHEofAqjkFvZVheMkwdFHNJcNk7URfXAma6E8F8r31Y8NjrCeXUDs3cQubxaTfRygo",
  "key4": "2mdyEBuwj83caY3SuDVVLdP5KWS3LgNh8Cm74jP1tt4GeG4xnHWXYSEbbaUvrbuVNQeosxePiA8PHudtjpgNLMGk",
  "key5": "hg2SiW3CTqTEW6erFARQTgCsD2Q7n3aeVWv2Qqep39hYogxHcHDz3Xdgog1JoHGEt47Z1tmNQTf3XEwm28Bu4AF",
  "key6": "5MwmALWEHDjS1xvRFrTzCTa8zMk4kGvpFvADPBy3KL87yE19dENN8YpU7WCFXENVWwVoea7zUWfPfzDvvpgGNWtx",
  "key7": "2uLp1xZRrTXAXwkg69hffhJGVJnm6iEiPXiZeXatJ5YPR68uc13QQra2KEZuHf4pP4zsfAPFXUJddgSMJPwDBckH",
  "key8": "4tBnH4dSLg3qwA5RSruDFkdfKcEnpo4wcE6x5JgWUCUkJq7sUkvmzBgyH4tsrsvKzNCuyNfPdW9UT55xwGtf9sp9",
  "key9": "3mbg3252yP1w6zZsdmw2BQVx1bmwaf775eAB4ocb1BEwqnaMTHAV9VgXp2wnmEzvqf2DxMJf854x6vke41RxESx5",
  "key10": "aHMoeUSEUeuyNK5yXDLf3jgmcLGYQdmpg43xtVLxfbcoPNh3MNaosWWRpFQKeTwBbzcLMkX9z1NCoYoBLYPb7rV",
  "key11": "29bBZydMiN3nv786SRzcDfxMtLK6T8Jjnyk53KRb1ozVDTbXBJW83oR7sS217He9yDGDNwAqmsHHVuY3UPtX3VkU",
  "key12": "Bf1TKkBvhmvdDdgHFVM2Dd4f9iN7VwP68RXx7QupfEp2Z64ER6XJ6eGpmp2Z3P3zKHiEuphuszzgDrS68TxKYGc",
  "key13": "4D3QyUs11zYgiuPkiuTktEifgHjmB1kFBG7U9gdRWeNMA5zMNnf1VpMoe5iM8Wp7zb1hfn2QPCpx2mFrvySpEVUk",
  "key14": "41ujWUSvz3zatroRvomxYtubeVJJMhdEz8mh7xsBunnfifxrgDPQAjX1XAtJGQPhEgMe5PC7v9hWXsnxE7YknWPv",
  "key15": "2x53tizAwtGhkaadLjLBbaXBJf9ZH8id7vTD4TkMAFvLfePjcD3cmUsXSLALZHApNRzWvBesEtabMLTvoWwzes2v",
  "key16": "2QTDaZtumdPSchLsT8awDqdwRm9AdTafTQS4x72qX9sVwpPnFxEaJsNXmgp7Jw1QejHwHqGgqt1okUzdA1wPLYUB",
  "key17": "3oZboVUkVUrfNfDwRxL8gBvEfJzm8aSK3vLeosvsGzZgEpAZypMcVDBSQtgZS3vMP38F3bmyEULfawZPnYbb1nMe",
  "key18": "4Z1H56Xyn7ruwBfu4RqUHEEovzk3AzCMfUcA4ctxe61fHdgdCa6EARHkWJmWfJpSw6ZnQVGMVD1coezYz3VHPwvQ",
  "key19": "5ThYuh5aKVrMxiWf9VGZdzZ6M1m6LioEpkuz9mp4Wy8DwQ8qXDo64k4qFicRqh8d1KejBnQ8Y2AdxeEkhpP8N1a9",
  "key20": "34S8vpFYg2XmtVnb22YAWcmWhgXFVi51Tiwd2FPq8AJ4gHpN4Cu6E8Sbm1rRijsMJjVR3HwMnVaEhQTZhc67Q2fM",
  "key21": "KyiiFedSYCBU8BHuK9vtxGqvzmu5etr7LjL9KujeenAcoFgGPeNEaJe8xYe1aoZmXRefuGsBFjuXcZ6dMrLp13c",
  "key22": "5ZqRC4yJmkHRa4rvGx2q7cfrVwJxLG4pNuJwk3uezoiPhuxRq4KEr8cu1DjU7hG5B4YJt5RxBk6Wz2eqPWCoaPjX",
  "key23": "5s3U1gnG6ZML5Z3xDuPXPXFT9vKHWtJcwZ17zC6tw7v8nGHRN8KGoQaKWTFs6tp4rN58jDDxWTV1zi3Z3JEZjoCv",
  "key24": "2LkZ5AxL2Tx22TNtmxqihBN1BAwMtAz5cfv9c5nEUqQiGGcSkmwKLpTEnaUssLKNaJGvyFtaBmfPuAp3e5BJ2kNj",
  "key25": "4nsrxd5qf2C9fvYsy4j7CLJsaBiHCZcZLj5coBncTPJov2sqRG1khwifm8o7JgsoiS7bg2d51hrgqPkb5jtHLDaF",
  "key26": "3SS7ofcovV9dDDZ5nxU6puJK6enX3Cesk4ihnGH9oRrTEXV5Bc6MtrQiWyLpEfyZd3zZEebVuCkEfJfyPG3KqGTm"
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
