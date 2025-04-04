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
    "5xuZHk8JPouoo3zFv6y4TY6b9S5f9HssfPNm2rRgD7D1oVR3QkGcHHmJFjK6UjqUwrgt8JnkBX7WCPuEyLdeJzYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NRdNVLa2xMWhnWDjAscRnaJcfCLjEN8Ha1N42GB9K8BJzxpLofyriRtNYofon883M2L7GaVazYLJ3XrBeub6uK7",
  "key1": "36it7bucX9uhck2UjGxJFVcFrGNotidvNaYtM1fe4KDzXxmL6bQSS4VudfsFSfScA48K8LhrsVZTy8vupUgt7YPU",
  "key2": "2NW46rWTgKRkN6QiUL88cFWCR31RkA1ch5dY65bSgtEdj6o1xAdy2PJ7Djom4MPsNc4DYvpMhptCtF8o73WKTsQC",
  "key3": "5UqubiBMms38aV4J3WGmEsqSQ2bEib4EkwbL34nQko1b4oE1AUjo76MPY2GHoAUFgJM7aBPtemm1aC2euaAH7T6i",
  "key4": "3vpGsQGeU8gLc62ejV74z9WkbS8TPUf48bfY253PQ2wsZy9LQDjqrZgSwX7w7KBjJMFKAYaSAnWphcne4HZ3Kj74",
  "key5": "2GbRBiURd8wG7Y7UF7GxyTXCL3G51A726PBYBN3EHrcxUKgYhPmeDddTWh64iJ35Mhkv822rSqFQjfEj6bpD43Zs",
  "key6": "4m9smsQJNrbLKW3ckweuA4ggGpSYrPwvQayfLU5eSM33d1SepFVDp3dgxjWamMg9x1en6uCm19MAbYboSER7BRMZ",
  "key7": "3EhHKxgxofgQXni4g1CauJv8dv1oEFUA498sDUbWgSoqJf4Yx2KY8C72N3Am5QZtX6Su1mRHMDCvuXkT9dfTd18g",
  "key8": "3fJfvpnb3PxsXDdYKzVBk7ZSYSnTBcZmotiSkCZreJecfGqv183GX7MdkCbQdC4XhZ6akAKqab7HhqMhT58oBi4Q",
  "key9": "514cQTmkdaiQaN15vcTsETYa6C4ac8NphQzT2mqcExSvUyBLnXUuorNPcprBMP7MzLgb7ru6rbN1epcrPbt8u2S5",
  "key10": "Cy74zQgV5JzuMHgdoKPDES15Jc9CewN3xdp9jgLori6DdNJUcEkxFFTKj3kZmrd4SjZFVAuPv6dkdCNQmvGk5v7",
  "key11": "3akEvGyT7GBEzB58qKXJejx1mowMNptU44LckMk9cK2nNNrFrkLH6FxjVqcjoLT3tqEmKJ8G82aYVkRgTFYxs3Fy",
  "key12": "z7KkegtQvExg1ghkaRs4vFTwrsvz4wMBYD8oTYyg5dPGjQnQgYj6anAco1tiWAGxqB2s8FKP3P5Nq8C7nA5m87F",
  "key13": "29NDzFb22Mq3WWkENHgW7ahN2v2hTxk4fYf5v2Jzw38jaKDrM1PBBvb5YZkrawbW2yQ7in255XpA2aNSpoKpkwCB",
  "key14": "3nMCGUqYUtR8oWWo5cz7RC1JwzhvNYCcwATDFATFdcsGQ3MssdKoRefMAMjQXmQEAahmAZgRNmTBF6uNThbre81J",
  "key15": "657vtDC2uwrxzG4Sj7ZXAbGtL6rzHryUZrpxSYrgLkSvz4nWq5G2KceTgvKy9qADxwsCp6frHLv5nEAkpYaU6XNQ",
  "key16": "2wNUsDD7atw8K9ZQR8JPd4LaGj6wHsfftkyVs7JDUuEBqNbXxks4P6qiRdwJjB4FzppzJue4gjcya4EaioqMJWwp",
  "key17": "5w56TSWsjFnydq1Vma3kcwmvbvSGiuEUrF7N8Hybuy4vZtG2KtK6hygmoofEeaXcipVsbuquePnRgCVRzuDJrpFL",
  "key18": "226G8UUtgMLfcNjTEktzzZfXdebRtfeyYfsccQZtQp4frV1jz7gTb2RR1sCFDjgMjPT9Ej11czmsPUDDmsDBhXBo",
  "key19": "3tw1oZiEWLsbVxacPayrXXQj5HMGk7n7BmXiabp8CzvLVP2q2USCpyrm3QgW8JvTUpdG6wPe1iz7VaHWgo8aPeiv",
  "key20": "3nNiJNaM4ontgv8C7zBBQm6RWtgyuFMjRxkvz4pjCBWFeYkSDKcrwbUcdcicf7oCKvJyBM1BWbGCAzR4aqnHpm4R",
  "key21": "4ZeX7tZ6zr2avxhW9TMHLYLvt7is9ymwBvxcskGANjdgL8zBaG7Gb7ehRmwtEf14ZSwbwU31sCsA37Cv3GifEcN8",
  "key22": "56wD5n1ApqjP42viaDhYEqfkAA7hXpRptdzWiZErxMo98YwynSvw848vKTdqopNj9UM8xjC1ieq1gQDwLzAoDRoe",
  "key23": "5BDrZGxFkKxaimCKVeWgBsTnTdJ3HKbkfrbhisRJ9m1xHaewWHLyQC2tDRmTBjwPujShkx1XgRZM9Qm156Mozbud",
  "key24": "zuWDiMUdAABDn9NaqRMRwJuPpjHwmkKy87voVevsYK5YvHU2L6PxK8HLFiYxK8NBa8HMSnNTgk7Lh8WJD37vDuS",
  "key25": "66r56YoFh6AkFTWRpQnTgHV7x4h5SdeG2F37DxTScTfj1wvbWJH7sUb7QWaCPQJFb52a79Lxtt3nyHMineQ6ZEdG",
  "key26": "2NEzLR31KTvzxG9g7SGaTGTynczHPXUhKs2TZkTPKupj5P3XM4iSeL8QEk6KKDAvotb2se8h1CKMQbgToWEq99wc",
  "key27": "5zJjq1ce1neThXfxRccCTGSYZvud4RDSVQSBhQwEu6gNdGACoHmSUt8bdfjg6ocwyy2hd2MQM9spP6wEVzhN4TmT",
  "key28": "4b2DnmeFrHTihG1Md2abfTFERLugtdTkaghSYrysysWhbNvppJVjxE5aoAVQFqNZM1ZQb5orgWQoxKvtAbcZtF5p",
  "key29": "4GYu8yDBfpCgp17sia148sKi7M8XaYsJEFUemEEUtRrZhYtTcJdBr6ZhgV53C8meKi6EGK7REnG7VLvo2rZ4SN6r",
  "key30": "nmRN6rDgaJqvEqR8dgznF4tPoY7tMnBhq5WYf9KKTKMft89rcimufQdCTvmmwVxSsXKSKXzRdYeX1NLyrYpxDjE",
  "key31": "3EPYfcSdcSvBLWoQJyRzfyuT4PiXvywU1X79Xdtz6px1nVyPjwbGmZ6WnaehidAfMLR7UqUoW49erXGAqpPQts1S",
  "key32": "2VtUoi6RMyVCW9TKvsoYehW77xVyG9vAdQW2mhgAh3drJsiX4qjpnPrMkTxUdSD6Cd8DHu3ZEYjYjWU6cAgpqtVe",
  "key33": "6cDq2iPkCiErR8zWfDJbNFpY6z1PLPj8wqSswwFaPjbxkuSJ9i7LKQXEk337WGmMAwHkPTj4uSSgcyN5Vu3veCp",
  "key34": "3iYjBdGS1hbBxibkj4UggQ4JRK1SS5UL2df4K3TwsY4t3abYDqxBnAgugxowJVAwNJTaRu3ABwhGw1AEse7Ew2ra",
  "key35": "5ryuCzLjdKqc9n6hshwJZRahxNsn6FUskxKKEsY3Fec28TnB1BWzx5NLVx2JG66vf5bYhgW7SqAS2kNb471YAjRK",
  "key36": "5u8B5eNX1XBpmRhg1wFbkSZVXHKCH3Lh9MAstrYXdWyLVH8XpnaQjQzF9sn7W8m6xCMaGsrTyCsCrsjXjLG1YPm9",
  "key37": "3iyvXmRhFzEcbYKVowBe5wANNHsaXCAQr2Eaq2VqomTjAXvbcGGxsmUPd7gMYXsyisU1ubhT9fDGdCNYuMar6s7d",
  "key38": "45JpuNjXUVDRFp5kTxKdKncnaCk95XwLd4oQ3Y2q1ZNEvy4nGR1c5PDZtqQdt2mV1sNAovfSopGZXEq6xzf6uSiG",
  "key39": "3qme1Vz2S89tWDVheNrQ28A99H6mqqdUyF6vafyyRJNzHMhaLEHMGJT9k5aU18rvXP7xvbm5PDe7XYNV82d9tKMh",
  "key40": "3DR5h4fyv7egsJEyjJoEutXecBDfGu7Jn8Z2Mnaf59YKoD2bhPTnhNXHmYpHX4zmgLUzd5kNz1TxKQ1bKNtGderD",
  "key41": "2LDnVCfKELRVkGpbDhcPtfPffXPGRrfWymgQ34N925DF5j8PtHCrjvooHfcskLzDzhaETGXNiazxV7xjpmFukmhm",
  "key42": "3YwH5Vp4KiLAstEQuEotLyAL7DqzTW2NuRYkTSuDqAsgMEWCzk2iy8mP83rH7Phi32TyhS5zozEWd7aVCmjk9dX4",
  "key43": "5wcUPH5oT7dZtSpN7ygVEo6n5eucWQT5X9LBXcAbgg6DN3Gytj9mTwqY7Sp5az5xvJm5GqaPqJBUARyw2o4zmCkS",
  "key44": "XUW5Aoa39DHAmeMTfv2YkTFt8tdx8Abwa8mosRWjtmM8Mw2xDZvTK8BsCUaWerVvnVdk53CZefrcuDfJvfDyY55",
  "key45": "2yt3h9ueJG5jXJBCRReMpuSJPr1Gko5ygxnJ3iwJGBeTwMNEWKPG3jfBaG4suo25yyBSDusd5GKEx8kfyRKKXLJ5",
  "key46": "58wYiYGVWNkbJTuKFRV6SHXroM5TrjExpRGionUnkR25qJrzCzUMpT5QDWkLQhS7bpaG8o38JQuUzPg19iyhABmy",
  "key47": "62tDUb9hRyoaeMhkxZYKbJEpUN9hzDcfTjW1kYhG2wLMgjmqZkKY3nPUHR4An7HYQLPshZGSrCC5TH4Dp5Tv4LVR",
  "key48": "4owKowDEWw6LwDbvwZQtgTzXKAZeP73EPqMaDUDKh1QZ5i8FQxs39ktWoAT8Fu8ffRN1UMaqqB49Ex8WZb5FxQNJ",
  "key49": "2eduTmcSWj4SVuBVGMdg27h9yPybtW7YzXhEVXLV6XrB3wqNQUy16SfTiU6Mr6PCq2nDjKAaEHdAUYRfnhCkCqeX"
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
