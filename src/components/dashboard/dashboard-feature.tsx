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
    "58d9Dwy5MogNyXycqPSN2ABMCY24VUtnMyddij8GWaiMvHtiEY6hodkyaFUJdiB1XgTkAdMWEWLpm8DouSPBU5vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYPdp76PJmEbqF7TbNRVbSHiXHJZYfKFVbnPDsJh5u9CRuKFQn4EKa6VUMCgSbErm1jmBFB27iv3yMPf7p6DFed",
  "key1": "3T2kzovL9utyaKmva7WreUab2ViDjkvoDQ2MRMkmvXTsx2j9FZJWYEQgTVfDFqJ4Mjj1tfSxLJqofYppqxD7Y2Zj",
  "key2": "1q6WNPPo3wc1XGsWaUm8V7x14447Z78Paemejad22zyTak7WXyo8rpxs4rUakU8y73KmtRCJqGRBEU8LQXykeYk",
  "key3": "5gRUqaY6R8jZj4nsjfSogGtGWLGfk5AADzLEFZ3xCsoLJNmEPzi9Bx7ZwGfuZiounfvZWwnNyq69nia4n5ygUEpT",
  "key4": "22QxkRVbeojuRePopEobbiyGsezCwt6FhVnoqS5szr5kkt2pYxt872jdjwUhr5mLXB44gdt8g4J3kmqdAyf9k5kg",
  "key5": "3FPNxmcaSkdqHExzuhga2iHYGHrx8mzEvfyqvD5H9nvRB8XXhYrXbQLNusBiqXDGat9ssVW5H8MJVfUDHLRiqpqH",
  "key6": "vHuoqAkjVYKob128FcEga1P2fHTSMiDHe9JpDLVjBT3o5neqkQ5URXPNoA61ZpqjSvxY3pHhKvxQQE76HKSddz4",
  "key7": "4KkNrqTgdwENNBrVwo68Vcb1CijWefiodcSXGN1UXC8WP1YsRySf5wZsARpRMvzJ8JCma9evhKAP1vnWzfq82u9B",
  "key8": "3uPC4hv24eBGS2BLQB4kFAAZX2U7YKVgPy3ktSF54tfHk3WDcfLL7ZwWgZpfATT5E5hj3uNtqs1z1k6L2ujiydoM",
  "key9": "2nXrpsEQ9X8bt3tkTdvAfzuCx8BGXrwQ8xHQwKD4RDEYUyBh8pRdK3HwBT5nkytWhMZ1Dwuyn3nkBWepndeeic1U",
  "key10": "3eMsuJB6VXiDrqCXE2ugJh9LuSD7igE3Zm3oApoV9Qs7y7pDezr4N6dR2EiVRtp4qDiK2ZAjN2n9ivK6huGhLGaQ",
  "key11": "3y97qE3xk85fkifVUkYgX6CbGU5mQJQa7uTCAjwgFR7auG76GhgCouhPsno9UDLMp8HDDcMANBQmNxqhHYb4uVYu",
  "key12": "4ihP3pTa179hzLSbTDnYRf1CLZjwPZx3PjdA2YTv6XAj4MueftPFms5oQydpd5ruCzbuJHFDpHrwFnVyN7Ko8eXu",
  "key13": "128FTCofDX2Uquv2PQf9ysuV721aVYZtcKQoRgGqbtmv23puDvfiH2qerx5ZPk3Phwfge3BFXAHzoUPMn32mL3wo",
  "key14": "4zeL7Jo85yX6vNTAki2Vgmviq4jQcX4SfTPst23UGK4jSMkLL5KkQBtHXvpESNJwiUM7Y7XnsjSbsfvNBAqt8KpA",
  "key15": "2A4YewSNjnXvQa5P4wnLh9eqnQXVJFwcq27cnpcSjuyejwo55WUE5ihqg3rEtQXpkGsYY9T5khAjSTMwJZo17XQS",
  "key16": "5AzLSJYs6qWnYRKsi2pjHgnZz8ej2J8YZCeaVCQPCdKJdaW81Bc7Nvsdxy5xGUFPzbXwNMS82NLYmdQxofDYZ5a8",
  "key17": "2ibEYCyXuoiVwaHHdmpDoYfGeDN4DBA5Pt7ttWn4zFMYMDVvpiasJwViXCUaabHbnTk47JQeWv3m7ubrE3im5YMc",
  "key18": "3g8BS3ASJduVtQMvr17rV6FyZatgKB5p6NFUsXaHcjZVLAHXo61McEN5Q4ktP4dR9EdUCsc1hHHfZg6W1gCQ1qPL",
  "key19": "3fMArmMqhZzs7fXhP7sKntUi8rKnvKnRUhVkdE5917B54aRS8kTHZfDSr4F6K7yW3g1ouMcmDYhDdZ28UEvw2hgB",
  "key20": "44UZTSQjXjdj8VeSABZo9avRRHdrBmToZ5fvZHxfR67neGVC4Tn6Poqhuwm9esDYaT5E4jx8DwzNyJzrVNJrkxz9",
  "key21": "2HKP7zn564w9QKetvhSExqUfhUdMfZ4tBkv9ias5GpYEZkVpVvTVrLqKaMeH9n63gW5AdLknmdDk4LWZNURXNSjq",
  "key22": "52bFffmkGn4eh1DjHs2a4rw6edqHuewrLFD4Z4efCttKywxk97s2cdhV9GLG5s1jcTjxHyTq4Yq6cDL8v2DwJhRf",
  "key23": "45F7t7mxXEmgrtcf3pwkK78NVVYyvqofNyRnLGYwGHKoUdMKCmfRmXJjbsg54XgzTDo62cTReSyEEA9QDYAiGdxy",
  "key24": "Qhq5MkYo7pMc8apKCoxpKfAatzdYdZYsTYu8viRH6gz6Ud6wK3tFACAA8eZYNV8YepYiNz9REYDwoRMb1jVJxLe",
  "key25": "3ppqAMC44y1LFVyzCaBaXrEY5i6CBf8qKQqPyPvfqCQRXSEcwDWaDmnVWJiNY27MARwXGt2iCQiV5xdsw6kb1Cz5",
  "key26": "3Tjn7N6tqQhVHJjmgRsCMSY2ocvMPrTjKd28Ac7hGfAvt6Q2tE3pQkeoazZ2UmiL3yWyST453sciQMriLNgnq1E4",
  "key27": "2BFq5WvuRNoqiA1YVjSEo9Pfyrp7B3HJdFqpJqBKYoMgSP7bmoZ85ZuRtAoAKzypxstPfRF9VYsn6pHexFk4b6HZ",
  "key28": "2sbeYZVWD3Caihff9TQtFzWf9cGS6kMNtrDpQtMQNyKdfHBUYeUpydTA41zTpsoSRapJDCmQ4ugQs27arv2pQhR3",
  "key29": "2syWZY44ASw56ierBUnJquugWuynQohmp4zBSmSgSAXqQEgXqrVRbVDiRt5JxR1c7eJ5f7uLDbkupqU2p5aXcndN",
  "key30": "284mvZ4NVu6SfFFzcmfiRyGSDh199zdTXB4iKeMESCCXpiTz3VbJzNnCgDWKntNE4fJXje9rUK8NCid3XU2J45iJ",
  "key31": "Udp1mEbn7Bps9AZmt5mJumk6Gr5mDF2jf7fg7vRkHaz4chPBPasnNAW5pnGVUMSbHxj8EobjCK3kX6KJa7neBU2",
  "key32": "4LxHsm472k2BdRHWZb3jJX3LhXPu133GPJqQu6r99hNsdPWjkFVkvXsZJ4smnJ9JpkycEtZwLUY31LkyKijcNc5d",
  "key33": "2TdpXobtyRvFJkL2FAbYsGCKiTQqsS1VNRK3bYEAddv2EWJJ3qSPi7G8HRtWsYJnUjwpE7SNrWW9QA7BoEtSBHhQ",
  "key34": "3oChoCLuXbRYqDhVNqRbfS9Nj1aSpSJrnAS517ZXfarL7q9bqfLqnZmEU4HuyFTDuKUy23iLUF3B1dEi1cTzetXy",
  "key35": "4Crr56i5qUH91VsVogjq29jYcb98LZD1XAkJB3J8tAbDLJMXHx8T1zdm6XU9wG29QVR8ehqsPBZ3WPb2CzawfvTd",
  "key36": "5U8J2YCATwZFe2ZLGRYZLYWjyABz3wjgxEUgvbUzctMHgVhhkXfwR994mYp5hcVQTZYgBSX6eB7t9EN6qrZX9SaP",
  "key37": "2Y8iHiuqokgGJBfMiad8j6FqtKXUVH9aAAMzENiAPnNLUFDouV8oVwLwqPFr68mwiss87YXBt26Qjkmc4NaW825V",
  "key38": "5UVx2RykHLve3aJJPR7QvygA1SVQXL2vox5Eaae3kA8UJPV5evK1tcQsm3tB3fn613SXyYZcY7HmzDeQLWULWYzH",
  "key39": "35Bm4QRffpPew5vnhx8hRX8TN2woBY85wN4ZfZKZici3XwiW4kR7Dga7czfXBikCeVxizy4zyDWVqRjJ4jkr7RzL",
  "key40": "3EmR6iKv6n2eyxnvR8SJ1vdLM2cg7n3LuN4SSGGdp7eQdHayspJZ8RpcuC9uVqry2xivY2Dc6vDypTjbdG9phKQy",
  "key41": "2KbfvUzgRkeQirzSwWXbCHcw5knH8N3bP9NP7W3ehRZW2JdjyQwgx5NaPNKnrxLSbrqYGMfMWC9NfJdkE7vyXyWx",
  "key42": "3TJrPQtxfFJVtTsCSb11YruWnPwGdzGTmg7CWyLiCZmW6Ny27Zks9PJYpnn5Xnhh45c3k54oiesYCtkvCXDcELU7",
  "key43": "rkQw6uJqjLEneYJUpJ8K8VML9Rfz6rUbKnQt578xCHeTUZK4AfB1dcBeNVSX5GBfojVJjMNLo2eCtVvfMHpHxA3",
  "key44": "1LNQPr1naaGdRrbmCK6gL9L6VVSBkLu2AYCwPJsrx6BR2k5S2PPZChfxkU3nTiM3szGSARUgnDTQ1asP8GBQnUi",
  "key45": "3oFBmAkJ6F9VHMT7fiFFozUdTo9biT4ryT9VGsHvMAgJRhwzbm4XYwZUyHQFfBhrozoQPiVn4FK64BQqTd4vaWrF",
  "key46": "3keCZHvoSKoqLf1uzcJn5bYHvPxiyFFTB1VQH9ENsJfNM4QKRhMJ6WyrVnqLs1TedtdW7nWteWLFaM1Vd1Qx1VKD",
  "key47": "YAgknmgdDAeUaPS9sqS5BBm6FBMtYfxBF5hRs3EXPnrvb7n6kjei9AUy4szDyB8RtRUDiLx97q4zMQyfzJ3NTmX",
  "key48": "2rp2asiMzHfxMTi5oozwYD91SAnvd5nV6EMXUjrJt5n2zBZ6LBLiXLopKkLr6xBq7g3KVA5WzPYcAvxSypmeypxo"
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
