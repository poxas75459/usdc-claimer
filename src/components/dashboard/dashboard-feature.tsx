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
    "kNDPm9pCP6CmMUhM2n82bKFnBu1KpFLKMusR3eJTXXo4crCyNLiZx4shWXpcBYNPZiQnXcBf6RkaYbVeizbVazS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZku4ML3eKXWCWAtuS2tnop9SHtiQMLRyQBZJJFdDDE2niEiTp16VhAdDfzWSf5gVbDPQgBGQdy25i45aHTna9A",
  "key1": "baWoxEDaPuq4d6cffupgZ3tpwca2JxVHjDM5BSPbznnHXEGPvqoUmaZ7qmAyYVUDk2Qf7tENawcXrriGazLQAn2",
  "key2": "qQui4XnnXvJ5jAb2y1sqvdDJ7e5xehgcVtJJH8G954DSnUfFY8kEPwHrJP4PjAD7F8jUmuVfv4Qt3upEodHfUJh",
  "key3": "227RP4WszrBsc3t986Wdtw4cfTVDdxJZDsGSjab6q1uckHa7spESR4PnkXnbfRHUT95fYtVcskU5aDQupbeStYqF",
  "key4": "4iaNi6sM5JjL6faEDMqV7AxrqPKN6HFEwkkxp6LAVTrnfVP6Qna99KR5g3JfeQ6T947Ei7mPmmL6bwDoa9cWxKff",
  "key5": "4gviL82Nbi3jKqnSbgToXPUPwcKWkjMamqkXyrzkibs8GNd6H1jngstxWC8QU1X2x1UceUPCc4ftHQj5TFP7fCaC",
  "key6": "61SKw5mWxSs2tmfUNoUYWSL9MU5Ay9W4ve5eJjW4hu37KVneXrroxKEPrSrAs53sUuFhe7tnvnZAKFsh2co2QKsK",
  "key7": "51wHRDEnDE8xMWqTXNipgPDyWpQ9pJEDpMPQ1donxybLaKYH8oNJkkyHvpDxNdEJ97UhVQGwjV421A7mf9ju4bF1",
  "key8": "2PNekJepAgy3NC8Lajt6R9TpYCmdnhKMYr9Qsn9GrayLMYynq9pKpQrwfZoG3mV8xaJA9v43jgcJahPJyDp7bj14",
  "key9": "4rZB2o7GsUqr6WitHZU5vYASmZQRR4Dobb6EBM7ZF8VT2NHYijrdbewgxEbSQ5HB3NGWEnc8rhy5nS6YGZhiFXFF",
  "key10": "3XaWVRd3SC7JhWHVukdKftihzSLwx5vBbdHCo1DqTh8RH1vvQXNkUwC8j5YDdGQ1XGpHY93TKi8TcKyYJtEyA9Da",
  "key11": "3zyHm9vYE2qAGeYKBeuJRmMsWb1K7DYL4tEKTr4q21HaB2k5tW2XZBrTWF5AK6KFqJTk9WNUFFGXc5cMzrB6UMiC",
  "key12": "2HHkp8fqTM9eWVPXCKuorZz12zeTxMHSDRZm9jvdCdX9QuWGBsCAjfVG2C7ncTaREPTLDWafNbJwAvhUrx9oGpTk",
  "key13": "5Rw6xiqgPj5RikVpva4iGX6vA7DLEVMG9hkVFpH1dmPTK4zMTc85wn6nHUaeoPpa33HS8DXiQJ2hcpDNe6ct8M66",
  "key14": "4W7C8f8sQQrUyG9F39AfsnD75KPcvZeZ3L4jCGACRnQJa6iVBQBhNsVutZpeVL1gcon2ebMUuadAYpwTSNdM8oFq",
  "key15": "bmYSw8mJ6cTe8dqpihuWji3GTLVK3BvnySDG7R4oCH7ufUn33sWu9WhVqyjnezMJZfgzoevpJGHuzT83HuAG1Em",
  "key16": "zuHBA3pMd5TG2rx7qJvwuCQZabpfqVvmp5UxaPXLzqHR7NURrezBxTC9VWnV1sz7gqcZnVfqBAQrg2bJ5RxbX3S",
  "key17": "5B4D21uKPvQdiAwesFGYZMNJ9SzjtyaWgyjqrdhmqjEzQFHxhQBNNF6cJvgAM7wXh7P61cqQeVkEp6my9YhorKuR",
  "key18": "3aAHSKUEEEa3dpbdrTLeAg3S6AyKTWAcs8b5EV1z1y6rWviEHrsvzMCLXkDdhNGxZWp4W9fvJ6nwMPRmqJxzqhcF",
  "key19": "avy5EcH9Zmyz2yon7u5YvkAyhHQTuMzho2qcgm1YpYu48RP4qybELVYfxCra18ycWWtseUodcUfoi8NEiLtWVZR",
  "key20": "5jKYbSZ6Xfqt3y6E2QZmCxcyTcZtk5GYWfdCJPDMRfFD3KAwQmKrvR4isQBvp6bEbAz5zqknaiMPvdAxUbR6hiLf",
  "key21": "Sjc26qR5qQK6Lo6xxJ3Dwagii61AYkWwaG4iscVG4n9cQWqMg6xmjCQ4fdQSdSF87UDzfSHqvUXTGmBXkKuq8zm",
  "key22": "2WoJLUr3MbgaS8KAkHfeytwDGKyDBBZy1jFTpgci5G1njuyktgmvadLxFoozYz1LWbsX9mbfVVomaME9Ft1bxkwe",
  "key23": "56H2ZCBKpEPr4GmhFAxWcfaZByZPmm9nWrCHqcAKWBT5uat4o8b9yYhy3fpw1WsXRrJpabBgUu8eU6j8e1266Zh6",
  "key24": "2rwzuV6AaUMUPjuYo7eRCSaqjjKKexHUBGSQRLvjG6TmfTQc6ZPktQ2nMcxGm7BsGTFLKjtDuMypSKPyt96eQXdu",
  "key25": "38sYoyxfiCFaswEHHqUJC2eyb8e9wgZSU6setySB7j53skzaiCiHNPCqXhm4cFtM4xQPE8PA4MX9Jm7Bzp6XeCBG",
  "key26": "2c9a31EHxAy3B4JQwqaVG9R7fvd9EmdqnDNaUvhJfPBPB5DHZYxqKBktXPnHY4zPX7Z6GiuwG6Ex93m3oHbs1W68",
  "key27": "2W7h5UL55sVUW9ys7oCRPTQgqYoHbzKs7raQdkegBZHRXVfaL6o6bWCrcMNn821QejyWBtLFTuoziBhehVwTyTR2",
  "key28": "5oALKS6ffw4TSagBgWMrYPBtwdjwqAPpEjRhtzkivMB9mkXdoiq45R3pGwkNcrKkDy7dKxFbxCKPeFgvUmARbYkk",
  "key29": "Y3YhWpLXLu49gzVSnNtn4e4CHRkGt6iLDmn7DijMYTWasHqJSACysVaYVTm3138RkuxXBKcPjkCRFaQRNUzhxGW",
  "key30": "XsXXxU1GBkHbBDVKhiDyuXixZLY54swfkBVxdnNycxFbxQVY46kzfVTjxLgB7moY98YDkpKutizFPvdriUC6AEy",
  "key31": "nGymaXHJTfBbuMFCEua864NoYVnzFqCMct65NjTqK55uQVxa2XVcdMQBL3Wt75m9Vnb39dEFZGYdJW9tFB3kvGn",
  "key32": "3iT4gDieBQFVpw27imCtBvKNKJmkbc4mcACG7quQibSFu6vBqvXRDKQNpo8DcMzw8Txjash4r9XkKCREuwSssecK",
  "key33": "V2RwFeG3794bjM2HnD9pU6ifm1AmtZSPCy5KSFnYeaG4idDNvzY8peEr5xrgLEtLheau3wEUD162WU4TweqMcVP",
  "key34": "3edmxKQEcGj6ZcgQYkCp6UoGGdtqqXRe9ahHDfTTMFLpQHc96rbn99K1QpWbxoeqNAHudAfaZtBLjcwHJovfR67t",
  "key35": "3tzarBAC5s5XM4SRLCB8YxhP8yhQtyQqnrymvG4yhp6ezeWeNWpsonQSZxm1hkcAwdfdCzXFCYeM7gdtASRewhTG",
  "key36": "5RtyoNuFbPdHL6gHU2FS5qtD6y3Ef1VXZpeupuZLJhBKVE7z5fG9NF6FJT5nXPEM3D8bui1wb67nf93uwMWSPJmF",
  "key37": "5fZb9n5dE6ruiHBfRuA3CbynqYgFCv3TgHz7NrwyzujfcFxrDbg7aCFxSoHhf4W4hYQReoTCsh9W5eTZZG4aUHa6",
  "key38": "2eNXTfSWLvFR4s9m2zijR62oUUuWqP4KRWjfepXzBu7tuWqSnTfG85QbiHafGWyW37FSJhcWycqyBbjiYmJkzhnn",
  "key39": "563FU5gQ27TADq4GcbiN346N1rJzDK9zYstPQ2NPkAXE6F7XmfxpqN61DqQtmRFQvgScXhr4FK6dWCmxqTyGvk4w",
  "key40": "4t6qEjUgZrswXg1GHMShVEmfTpr6yH9QEBzvoqJJjHLXFpuNRx5ckHmGuzZBv2ZMZcyP4212DqNoH3ZieWNvVqqn",
  "key41": "3d6UXmD6kNa9X74BkiTNqLjmRoFUaiHQxoHqBWSkMxrLo7VjS5ma8euaWLetXX8UStmYWThMtJiCUYjVMUNZTXbE"
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
