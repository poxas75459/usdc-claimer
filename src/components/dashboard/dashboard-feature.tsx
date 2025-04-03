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
    "5cLAGdrM8VQMv3nBa8ddjYBFzuGhHahdxpVZM5AbPBdiz4V9Pm1unubXnoEydZm7SowSNiUGy3LNLVnkezy5uTCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiUKBHtoWp6vtrfDpfwZmdnxwixjSrMfN7epge2ZL4ozEyT6MHcLxTNCMH1QRUw9mdhqwBAL6ANDNj32n5tEMAV",
  "key1": "4aVDxFLQXWztMUfPjrhevNM5T4EZ5oegAxxhPBiaprmbhdZpyvLtJpKEJxURwGdvDZR4YWbYTjyVV9rs44ZwPz8B",
  "key2": "4a4dtDDgGu6VL92BWcUmbtxKfSPbHejzmSePqfDTXCsPr6Zmwg1Po31YzjrU7XaKqyAZgaxyiHKjSZyycj3cfZw6",
  "key3": "3jR3XxEPFeBghkwxWAEha3fbE51LmtSmxNEhGW5LSDioDPxQyinnEbVY9AnegruDkX2K43iB1TbgnJcL7CcW7P4R",
  "key4": "2dxTKB41Xiue37Q5WKvpzJ3rh2oEJ2ctZ3oVxZNwMzPyuTVZKvrScYszg98dFpAinMB7Wrv6Xi9XcCRCB5D7jEne",
  "key5": "2DyvnYDd5g9vS4WTb451H2bopjFL7LBteuUjNFfWnXtAHyTcrbuP1NGLWJCxYemj2npiBsXrRmUdsxAdjH1TygS9",
  "key6": "tA7wtTMEbJXpA5K99CqrQpKwV9g3DrpqrkiojCiSmrVyJNcG1AfqgnKJhEHFGKXG8tH8CVoHYp4Di5wySjKFjgK",
  "key7": "5NpXjD9s8ozTkVsLkxyywJQ9a8YVfaJWJdsUFRt4G1imJMi3vdm5GELkrcw597MQHbQyKS1MKZKNg4hD7DkuUNA4",
  "key8": "zEsyYWcjGg6DkFYS3iywJbybk8oCHAHvYP2AP1bMYtJpfnxEjsGhJMngxcT5sPtBFUYB5JdpqYRXcov5tDce6yN",
  "key9": "5QS6GGXBjveCAVqDPZJRkF6G2RYinB2YejQj4BTvs4avSBBazv6cBG2zFYrmbqHpmkEXKGtuSAwkzE59wiEKpByc",
  "key10": "43JvL9FsDrhpb6JNUNGrR6ohMdA9ZELJFW747MDs7NCyVUep4QQsBJDKHdbWQwZBogbiYV2uhfAhviW2qD835UG5",
  "key11": "5cNNsamRECwFDxrqtvLkP4CLZSSqTfCu114KQBTyESzd953xPHTszhXLp7ihnwLncprM9GDqC5q1B4HuQceDfLav",
  "key12": "336hkqDLWxSd3rGpTMXS6oTrUzZKZVrCbzx36JSccxpGcvuyo1pr3X7fJTNWPovSSuAKcNVRWQYWX19qWQ33SGEd",
  "key13": "3UaTG6D7bQFzUzaXjLEuDmco7VasbHBPa6KM29iKcoQafQdqifPquAqE6f6HbP7AMbtEN9S4jtrXsm8vmcPyd2a3",
  "key14": "2qbCYPZ7MQ7YKPZWc3ie7sXkqnFdc2h7YM6Lmujh2vXGQqe5FmdMhHoB1RpgvdfrmeMMsRGUuycnCcjzDdL7tFNY",
  "key15": "4m2Y2HXT29eVjE8JEwEZZQg1atLGtumjVwZHnNyQJ7J6USUGjzGvtcWEnUYhvRimmFw6Nd8J3G6dtyV5tFicwR63",
  "key16": "5pdXrUnKyzdjP36XkHmGNMsdKXL5pbY5Edb4S4UwiPCZZ9fhMz1yoCwNNDy3ppqdiLiJHS1YzB2wy4tnqSq1w1bR",
  "key17": "JCRUD17WXZRgbQfFhEuN4wh9iYjfQmiTKv6x9hP2SqxEw2HcXdMj2QdHGsMcHZCzZRDK8TN1EzAqizAxtP6nWGZ",
  "key18": "3TqBb3duPqLru4grAAKRtyFTBe3rrCybRXhL4XWEweBpA5uyQkd8ue76odd8bY46jRVVYb5L9d89b1AAw5uhf99B",
  "key19": "2gvWwbKnRTroaWebhVCMhDrF7NzARHSKaaUo3rhjzUGFLZzARoLtSAarPx7UW6peHPmReJE7YsDcnutQsLhSaHvJ",
  "key20": "3rePebx6c8L2z8ddrjKXncscHYts8JKgzXxzAWJCkHHXWMyRhSuhdPqwn84S4NAaL9km3SF1nCQe5mLZYEzuNzSu",
  "key21": "4bmmq5Rcvm4syM8ACp44NUfKCigpzkxhYxEcK5ZXm3MPAyNofTW23JvAzxo3tcpFPoEMhC2SmtJK6S3bXJGu1zL9",
  "key22": "647uhnrCjmrTRjHvKv6wRptBng3qAjEoLpxEBEPu56jPqxTG5ytUxMweg8g7LgNoZnFx3JpEEL1YVXkUT93Yvzjj",
  "key23": "4CsZxU9gEhctCV5F6TCQLwFs4Bw4ARhH1qGANUTbDxvz2nBuep29EP8MmcbEL9GXaXM99jw5DmShy8jR1zepH3Fv",
  "key24": "2aTtVkL3vSEjn3gtJwPshZ9Xy3oZXarR7MBTS8FgBaUShVSgvjktBKwCpEQBxgAxQ7hEyKR9Ce5erGfxkE5hxAYg",
  "key25": "3nZM5E75ZBTG3USyVNjrAmYykrPS4U8R4n88mvuCChzG2acoyby5pmLucv7NLKKo6QuphDZFxsTrRFkjwrcpuJ5W",
  "key26": "328XhC4MjABS1WyKQ6nq2APMiJuDbCz6AXv8coHQR7CXkDXB2GvzHn6WE9RynDAhACeHkXa5GKRbCBEcti9v8HGg",
  "key27": "Juu4nMiNzjkVZZKrFe7VktTNfyMFGtgZRywSdmpLxrxUtcQ6adt8YbU5kmf5G4m5Vy5QHVmN6ecT4XJaUns9mdM",
  "key28": "4ubrqqL3aVKb1fFVX3dPih7CaNpUhbzVuWyjJRf5d6TChL8aBTMZ3w6jz4hKSCgW6Uw7Rf2qcRMsEpy8be5Y638b",
  "key29": "2gq9PUyKfTvEE7n3MbqZeYxnPcLtzZzusJsMQheZiwJzYqhnmFQZFq8hUZw3cvqCtuSthuRAdvAHHSmu8HXiFqx4",
  "key30": "3x4PNhYF2fu1QvXBcxq6STBHzESZ35sZHmK8eZYd6HQwsp68n6FcqbfoDBnDhpXEBiNHQocqEXgpXZcaa4AsSVyC",
  "key31": "4HFX5BQSNyZVztNauo8pTCF1gNUhxRFUFrEK4hc9vERTfcJ63pSmAqcVgFw9abJK1xLQjXAHYS2bH3rFhXYfmd9W",
  "key32": "3AVWNrFVfoFZLAEvHQUdfjAvacSi9zbjexpJjPgPH9iH6S7Ke8AvFq1ascG1nWwL2zCQ6ubq67cJFfovDBfi4rxV",
  "key33": "1tdypx7uwaH1ebb22w6JCvcMFYJZjUQqHz6VGqAXsnwWd4NDYRfefRCfU5Kt1scwjXQXoVrTAj1jVc4c67gBwSv"
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
