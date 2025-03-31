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
    "n9XfENV86aRrAusbtW3RrEKk7CKZSBuY2AycSYbPk5n6mR8eKqHazLkSxAaY4gsPZHL1xw6qkgnw6WPuMzUKdJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntYTkAxR6S2ixgWYnmYGCWvEPrEqV3jMXowtTD38b4e4exefM9kqH7bREg6U1xP7wMCu3CChkiKPAJUUxnDEhcs",
  "key1": "AToQrKtoiBaoFsCK4St8YcjvX9tttJwYNi5MXUP74rtbYBbuH86vQeeDqMk5BAkKkCrCwHYwT2Ktcvo2kstVKkm",
  "key2": "24AVEejhgtXEKirqjGfEE4kZwgEAJ2jLBmcHYauyufFzpn9bCkW6FX9gMpD2JiNwEr522HUC3u5uCyoVSC4Q26ck",
  "key3": "ok79TgQi76T8pUtxTSMn28hGFnQaYD4yi5omFpnQ7apfuTKaRsYq8ZaPW4YcGahvVRarDqSNuPas4WxyxqssDeP",
  "key4": "JAfhUm1zR3y99XJsMVET9bcGk1a5Fv1JtSvjVANWzoDDEHd4VdM63ypKQ9m5GiUx795BZxTvEpSXVR2LCNHbZsx",
  "key5": "2DQSv771MDegTFXxtAfMaSs5KbaGDLxPMDN7anL8r5itLojHymSaAYCVP2n6UvETaQaZz84WoYNc85VR6vG2krz9",
  "key6": "4sBZUXjVUbxj8V4MqV5UyJvwHoE9KeDda1xrNbRyuG3uZS8hgoecWm2dYfQgMmYWntaDK6FWBvusqWL8iSWYddQf",
  "key7": "2eGchVYjuL1kYCAs52tbnxrcQ6LsgzJxhGpGcChFdmjFdfJCiYHsQJ57PKSZtyRhHXHySV3nrY1dvzw1JSvy8iT4",
  "key8": "5gacT2DAeq5NstKrPdNqAg5AthpZK6tSBnoDdHLMTDAGC5GmDoLBaML6T584YJJeq3stQXf9xhLwvmYZnQ9sXqmB",
  "key9": "4JDTCXHDB6xTtfwQ4zhcLhadSDfSTGpPSobDqQiSnb8RyDyVQrXDSV7vxyJ7V26yAHTRMEssYxPS5h2G835V3u56",
  "key10": "7TV6eS9ELufvwRfavceQU6kV2i1jvujpyjLiiGYpc16KVmdsauXYNAtFSBvuqbxZ4jFVAX9L8gsTpno4DZiEwkj",
  "key11": "4rbKRCaJKSz8y82dxvFZRwhjvrPSEajRkPh1Vs5JR2wY4E4z7hWZJRSmFAgELgBkKD6tyvVrnN4EJx4ZSJ8V43qN",
  "key12": "2HGkTYiN1LQEsDpmiQhjqjw92XwYdrB8kWtmN9em7jgemhGzbP9YZiacH7ta7hCcpr1R7Ud4Pxxpk6JqS6C125CL",
  "key13": "2RwNh48B5susZC85jKvLvbwih87GHfuoMAif29zjYnunbSydxX3bC1AewQgSfcGNA9ve7xcUbQtBeF12zz6BuSEm",
  "key14": "5bceRf9GACCWpQmR8KrRS9j83tAxmFn74And9t3UmyzDVUotDVfMqrYszsqdQiYV9gqX2HJaffR1HPrQvV9W1X4g",
  "key15": "ttpKQ5vHE93k34EKGmGJZ9TxxFVRPuN6rTZsePrvucCFAakUXWKFZgYJs4Satap4Wvpk94Hk8zBy7s4sWvbsrPq",
  "key16": "3jVeJHBh9Q3CVKnwZTZwAsuk44SWkvRMW2v7yG1pbQPfsUJVxPGcBeU1uaaLyvjdf6eM2UpFv9RB5ZNojWFU6wre",
  "key17": "4s2143VYvW8hAcWbhxHrCtKerKMQfKhx9P4q6SUjvkzJEnTcFoTpF2GVDgA9t9VWWeH8iQLEdVpHMc9recG5CeMD",
  "key18": "46MQEoFP4mhA7mcGqwscQ1uFHcyf3Ki1HiZdQAEt3zL7hiXn98fj5gcgU2x8STDr16Axj8AiLxqvKnPfvunBXBcQ",
  "key19": "5jXfnzKm4Nf74KUPh2s5WpQZaWYHQTVHHKUSta5CMnxMA348N83gr29pNz8K4afdeGvZeM2moWnkUPBB8jCKk8Vh",
  "key20": "FNCSxrLpPFtEjUoPuyu1n8LaLjjg48JYzG98eVLydLK4Kh5nHeYGgRoCt3K8KL71jwMjnZmaDV6H4aKk7DNjntP",
  "key21": "2ekTZqLpzQLky8wDSHQH1Kd92EYVjpX9h6aCEoQLctN5sE6219ZgXxWpv44nksYaXq9wSbXvnHMWU7VBwpRVnzp4",
  "key22": "3SCyYuvwQw7S2TanNRxJSPj9RDbL7btoqLXYnv18GyX9n9QsGtNe9uX8AB1vhAmHBSNWLKc1b6UM7RAZv2fR8iMk",
  "key23": "46xMqxLE7X6skENFcP8NnUKBuBSR2HbXPbqNKZURt1z3QD7Q7T69qjGbozYsG1BzWzkmC8aimsQ4WaBqBuzd6dhn",
  "key24": "27XSGGzZ1MoEzo88P52vf6HraBPGu6Mh7DJztAAHHsUuD3mRKrL5cNmQUBKnPJUCEiEKLzDZ4cBEuaowVZ57Gg6Z"
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
