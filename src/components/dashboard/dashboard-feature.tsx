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
    "5Ha8VitrERaXMi7NDt85KjA4zDGWbiSMNERjA8rpdSiDLhrsey1F8B3aiAkYRLSZUhk7CRRWWvMG7TXsfwNWQbeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okPdfqGaQHSxi6f9WTQGHb8Scq9BTTbAj7RWyRTamtD9cfCUuTjbVcpmvQ1dJ4z17V4NgRxBYYuHWoaQjepVJBx",
  "key1": "2YJyku14kTohSBCZiVQMKgtUsfBTY3Y5z5ebRaqRXQU79rHG8Gsmae4nkppqbttdfgsmXuwpo7JHyHsYStj97kFM",
  "key2": "5M6vHTsuY8E82ehCgkoZ2bqqCDwD9AuE4Cfq2ZyVqcSXyDHXTGcjBjoPLKgL1Y6zfd5kPYBYwF9F9YwsLTaXxeY2",
  "key3": "Rw68WSHvAvzqm4hSukFBVnouQbphQVLusgaDSnMuqwPfLhq9qFpFHkPLSqVosvdPWigUvmdteFZBckmVD9iEQPF",
  "key4": "2iPiD5fWduBp3Q3swrDrzsXbXtbL56zSp9aTvbhYzUCmW57aYJpLnwm6Ay3XHhtLkNeGmQJTLfzxL7wwJjCnmS85",
  "key5": "3MU25mBMqB9Su7HmzZNbPYRwhZ9CoKkXpUuq6FF7oZwCrDT4VUr3r6GMDB7Z7myRjU2xAGDgcGuo7CVGgZzqemsv",
  "key6": "2Mq5WaSxuxK9NP6Qzcab3RtC7CTyiVVxG9YCQtFWKbFRy5aiiGYNNftqHDLuGfjwvWwNsrqoBVtkbWUkvXyHq8yz",
  "key7": "PrK4uCVGTzUWNfnaw63zezNyPkTVxejGRT3xMXqzJdu1UjAhi2YsJhX5Yi1euoFySZr1zwJX3AEqMnX2ZxTuK8q",
  "key8": "3SEZwNDaSZdfNSkXZShotRGR53i75KNZ8TRtcYhDg5DZiNA8JaS92aywZ4YvFAHKf9qpXVW16ZK64fcvxRjFjv7u",
  "key9": "3oHiNWYC9JzHbnXnx1tDjAkvU7PpUVq7MNt89SuMvMyUHMrZABoMrJuLMWoFEkYyNniqrb4GZKVSBCVgTsRsNazw",
  "key10": "4hioKpykmHR5nzsH6oEcRtjkfGfUE9cNZn5L3wV6obXKC2f5ehsjbTnKkCQsrzPNvMrZHY1jMCpA1dF5k7yZCneK",
  "key11": "1apLMnqymdXAT4oYRerNCYyM8wVRyfsDchyZVbmUVXQF97d2KrTn4czaipS1hg4kAh9safmEyJkyQU6P1cReUdU",
  "key12": "5Km6gdUrj7ZrkYJTTzayJpGWCpJ7R45xgPLXJeykMtvL9a6L5Akatwp9TXjxs2p7J7sbdALTgrSmJWpoqipLL5Sy",
  "key13": "FHBR29oceV75fdggQZi9otrAo7t5twx5PdAPBzznqYxaqkznvtG5u3yyx4dV2mfog9g5dGFCEPBhVbZBjmjEk9d",
  "key14": "4D2zsdrGjWznCMAzrxgKUTc48jDv2r5dFzVmqE4rbEufio7ce5hWtDPYZtgz6HiXHxJsqDac1CjMPJK7TUF5i3hp",
  "key15": "4ySjrNWi9nUaY5rJNcyYB7s6PH8gCEZCwcLLNREfsLmyAWcyQxg1vufuXudQSHoKXm57DsWzo9DgVwrZN51GVmUc",
  "key16": "FeB2uTajF1eyfNTWCDzFsUSMtSSJ7fwwXiAEmw9wqy1EgiXRRHK8BTmXe95ypgHQDseXUGyTVeJfwfP29nBgMUZ",
  "key17": "5oyvYTmyN5wunacRQcCeVXknrf7iiTpt5heBMGyrr1ciBab8ZXscoYphPMKE53VkPMEyN4GPMVKTQ2eC55MCqZg9",
  "key18": "64roQk6gg47tuWped6Ff3c9y95gVpzrRJSeMYd9RuHg4hHkSbJsuFbWwXaJdv7pA7UyMwu7Tk2MkTECsQibLLtwv",
  "key19": "3i1GxdL5uXAG1UN9LbUKFT9GmkwWDHuBW4YiqLpQSK6E3vPj2xpvXPALevisRFpTzDZMRSqpsgsLWvmSVqcW1tf3",
  "key20": "3NzjgRRjxXmeTq5k9FXNUCG7zGdLm63CF9VGQvRbe6J62UT43Ehi8dPgFx8MeNR8DNx9DExEwmFTswsoyV3vXSHo",
  "key21": "54YGF8uiFcaqYQKSL2ReRKpLKEeVKHd5RJmVcUBVXrcPaUZSuMbX4MDqhxRhFoTDjEJENcZXNCB3J1pPRcxftMW2",
  "key22": "3s7hY6wQDPq2jRhX7jtpX7SoRsiv5DkKnmR8BwHx2po22MfvgH88tevTxDyHG1BR16uL5wncD6ThtRDjsSjidjno",
  "key23": "5tSnW8XsyU4U3sznCCQfTLu1j8rrJEN2XCN5XuWjJVwT56YSxgQiRupu73u7EupKdcugTJoCHj5JFVFWr8ig4JuF",
  "key24": "5EMpjWCXJmVmrKcNdMjHZDkkiQqUhwrJgV2mQdJUoSCHp5ppBLLG144fqx3tFxbkdcixAEVQ2N3ELRXxrkR5cY4b",
  "key25": "2y8fzqCPrSuLJzCExtKZNt6XKUt6EEtLcXEHkozXUcRXmvixS81ME6mW8W1Z4Z8YEUftpVQkiptY9mRi9sX49Qd5",
  "key26": "NWbKvwKJmAPsmFeCLrqCGnnT1MjdLAHoQD9vKbKYowsDrpK6Lb5zNmj4e26e6Q84f1qEmGZkjAe5GNmRLzf1Tqj",
  "key27": "37gzR2c73sAbay42F7hwkYSJzbUC7NTrvouYzke7ng3CoHSo8fRi7too8vrdJEztroyo2pSotzraygG2FPkHizU7",
  "key28": "2nwqEvnjsNRrUMGoMueFvR7AtMmZ4heKwsDo9s7NBgm5inagLVLNNy1ZtRaq3t3dEHwUGuvosLkBbPHGoTmVMxMG",
  "key29": "3wnxLKg9H8vsNQY2oWsUxV4SJs1sviHJq5AXgSYTMFMVVNmYKwqu1d1j83Bd4fySsWqydFx4iKZdpReNZBvDSz9j",
  "key30": "5o5EXro9LXGsJpo53GmTrvccKdcxguW3omTePVeSryHnpq1vHNuwQKxvy1TJMfaknTzndNvpyUbtv428a7C99iuM",
  "key31": "38MdLoqVQHrX3ZYvvdp1ujwrhDtP5vUdPwXuDBsTJxuFwp2wXmcTsVQ9EBGdabSXwdyTckz9ZTmSsufaqRhy9DhF",
  "key32": "3mrTMtZVUHJh9fBxEnaYmLUkjrU2EcWrnh9kSCQAPaMi5cNY4gng7WnxTeoKMxX4KLRFzxGVJwNc3i65mfm1PJ3F",
  "key33": "2bMSjKcPfXMYLaxqjmA38x4gvzMJTPdDRnYsbh8r1hZdZgVpoiRFSxNf5ppJiwUpr3EYAGwUYVK2YLv7yB36eL5m",
  "key34": "2rX1mNYsshZgcnjyfq9sZPF2Ni2QXUB3oCV4WsPZuub7FjfTY3jeqiVPt5aWH5eyVtJ8fZm3cNN63s5gnBqifzZD",
  "key35": "5P7uwNvK2sZuqEgbxHgTtyYrwCjbguvpiz9Kzut8Z9s1Aqowzp1fJvV8e6F8y9imv8szR5RminvzyxUapfDYfATm",
  "key36": "5wTxKQpQnchCcUusqLYSNWSx5tzgs3xQ5uXF4Zo7XRtSJtbKyUX99mhi3eu2T1a1ybrA4P9mz1RpDq7kNRSpKQYU",
  "key37": "2yxuGd9cYHqdWUwwbMHoPXxuMh4ssEYDRMBQAhkj3RjKYEJZZwa7rJFBSERxzCkJRZaHHgUFwcJEuThqTeN8cbj5",
  "key38": "zahDLU9VwywfzLrrnN7R1SVn7r9feEuo68bCLJ4LcmhtG2MKuectm4ThoNrwCfTfwPbSpmw2i4vE8rzDkLZWgM2",
  "key39": "2D27g64RMKcYT7DrBAyB46WfyK1yNxuHDgV4Bsf5hnHqybMBDVuNoJYAResxPNm3dd5e9sYkbG9BAi9tK5XuiJuv",
  "key40": "62JqaQTBvv61dRmrGQLpBaiL5iCh8sH7XDYGyGFTYSrg8ydRQTY8GatxpLh32zm5KNvYg4W211JfhXR7h7d7Vffu",
  "key41": "3QLUbcyLd2MG6cwK3wYDApPxYBPZwRx43EYJyySvxYCNnJU8pbcT1LvuosirqaXZgkztVJ48XGDFyjiuJrebbMWL",
  "key42": "4wuZKNapx9RiZZJ7GY7jiaqESmufE8eP52ZTS9uQAF813zxj9eHZ65z1uDZprur4TEvrKftAS3pxGMDQnxCfngCT",
  "key43": "3kmP8q4N7CZtAS1pqhqEqh61LoAtLe1V2uZa8pVaNfppUejVEE22piiFHarPtnhefT2ocN9V2wtgvpdFkWBKRG7k",
  "key44": "26ZK1UiedKvWNfLj4RXv1rfSYT6kpeDNUaeYsXyXfmwnKEzjXhryFTri16aGKo1tnnMGswUCWUn59UbEWbpKaAqD",
  "key45": "5tiQcHXa3MaMZaxu6ZyZ8NWWoKgonJAQdR6epoDL3adzZWocY2ipRsCrmTVxBqrMB4xyf2D9YLgkXjkCxXy6ZUzh",
  "key46": "3Xtd117DbEZcHiViiJp6kJzvP3fngtERkt8xidfQuL8FQo1CpfspsLr712ZESR3GZpcbzyA79W8jJaVsTiKpgdyo",
  "key47": "WvkSqRMHxf7LZ5ucbaD7VPoAU385FeuRxJHveK7DymFJLSi36RPguUkB6ZvPCBoFWLfebpVy3MidA1kqeKws8NU",
  "key48": "3of4oPR1RemMiuH4sVJbPPaSKznDh9mbUxFLJ6navQCEjgz4GE96CKRW7Uk4Dr4KcqzjjKz4acghA9o2xNTHczRr",
  "key49": "5rFPcMnts4tUGGHf4tSq2vNbayD8oZek7WCD3cJPDxUKjnd6FW6EtwmTYcwHZGajUZvRik3FysFqVMrAqYcof8hW"
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
