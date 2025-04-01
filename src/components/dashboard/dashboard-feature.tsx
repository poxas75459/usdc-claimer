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
    "5uqfuUR6UHMrxNtUSnw5nruHjWbNcWB6XfmHK28WGByb9sQARaHDVWj2vKRWyYyB4vTtsdSMPdzG81hkwT6tfgqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUohiwJFAndN1WV7G4ZF9SEFGiVzk3eB84VZ4dko9Wm7Qhf3ickn4ZakHbDaFYs3UZNRiKGEqA967GoSoBdKjtK",
  "key1": "4YDaYd848fmkJo9u3Q9sE3Yt2fBETSrcK5vpHDqkzLUeb1i1J8Smkm1xSGSQogsPWMvhZZjUZg8GT1LivGsUVsme",
  "key2": "2V7p1HZo6cezFP5Ubvjk8rSG9949WSXijyKc7V6wSztaXQVcAtm7vctRt4UXiFiWSBBj6sH2WM6h8h5PGFnSLKXN",
  "key3": "53SoWSXFv5vTaVAJo1U262ZV3f1RGbZVXQixZNavGrsbQNrj7ka6CsNzVnbvXzZ6AK75FXMd9vA2FZVbTfDMoxR1",
  "key4": "k1BujBVdf7whZEx3ng6zmJ8zSoM8ZdusafVZTqBVXTBHvNmrLtTVcbqD4XoZyp5S74kCBVMRHhPJKEHJQXDAUhh",
  "key5": "amaxhXpmo3YA4XvQU62Rb1sHTvz394Lsf3fnE7hUyd17XAVWm5pmroVzJ9zfiGiPWwGpBPjWcts2izASBi4XWhh",
  "key6": "3cqcbGQSTHUG8c5QGa8UceNhLb9a9QsywSBeevzAMzMG2xkrotzCm1CVb8rRFGSDrnxSCqTf9NhFm5fnR1Q1HFAv",
  "key7": "4uSJQMMdb2T3G7e2mXQJLMdEtcFQB6M5fxfjaE3xNHSP678djsUoX78QddeoAq8iBb2kcNqiWB1pXBTUiYeHugdt",
  "key8": "2jpBTSEHkKTxQ9LpzErKvnFktmMaeEB1f9Sh2QxsBtu52QvNuQh3xZTKduoKrei4f37HjqeYLwEYTygLJULxxDKQ",
  "key9": "24n2CDWAbkMqKSDNRrr1cwhUhAMYMtBdkjq5qocJZvcgxnQ5CZ3t8oV5Acc7nLk4UchXJRtHize4A1jo7WH5esW6",
  "key10": "3R6sHaXKzic8P7cmWXaGTjrXQ7myEfv1EjA5fJq9uoShWczvKfJYajC7BkepHEJ8QR18zxD7MQmpuduQikaLHc6N",
  "key11": "5KTTBtRzg8krjNo2oEiVeK4SCGxGaUQ1gwxiCk8PmJ2J95fnQt2uX9WF2eZAvax6xDoiBXewLzvCVCwKcrEY8Bh4",
  "key12": "5uXayeBASqNCxdJyAM858GUoGCJpUuSQ4tcknHEPJetUnc29pABwvTd4YPVqnamaJsfP7UdVEzh8f7NjSxXHxNeX",
  "key13": "3x2Rm2Q1wfaiM1pFcQn5o5KNM8a8PJfUEYyxqt3t7CenEF16kTG9kYn4dnbcp9k77S2jUJRpp5P6maHLjiArV8tN",
  "key14": "3qcQy9QpDrGeESR3whfpVgfDgpt9jdG3w3UsNVo7QcH936Zyi4fehtv7PJNCqjPVUCuYoSmXju9W7BqTBjqLtY2V",
  "key15": "AALW3pPdRd79UFbCqBHhvwVeGJS9nUmdUgKfqxGyFguiyKy7k25fCrfxTGuy3F6UpBoGqjAxmEvXwgxUia9AdqC",
  "key16": "32r2szswb4DPA6wxKYcFycBY3QWFyUXx8JMTRn86mEqqgj1a36533Eu7ahERdbXDK1Qu9R5gZBZrszg9uYniYyTG",
  "key17": "3W5uWMGdgvFKMKacEtUEpYSNaAKqsfjYvjRoKNBb5Cm8ektMdhTZETqFCLnFYjK4Fs1Qb58Q67ZYkPDwiGbTDxvw",
  "key18": "4ritQpP38R9hjWGcKEPkTk4DNb2EC5pE6ugrkidY7BW1T958aiYptc8pzcWvbNubVNBkLH5KKfwCrQofYjLVvYEk",
  "key19": "UqZMUFwLmYLddeF6W6wYAjtUzvPNFNuVCQzYm4PhgLGambtvTwGjiUVxmJN2gd1zdKiM5btSuMW7YdWU3J5HfP6",
  "key20": "5rfv95A8LtvqhAAh7S7WcMysickVcZBuMCQ2Pt73hwMm1t7Cs8J3cD8kn9Lr53ydbLkvBSADVpJnkSpQyP1XJsra",
  "key21": "4q8pGUHZ2EJWN8RcWRrmV2RGRWswSV2irF9Uq56zZm2dBVYbxxQBuLNW5iamcmaPVYCGoUc8f2VZDWhgW5yQQL2R",
  "key22": "4eh5qv6wRk8Ck43jAqdExZkVRkrPGGQV8VNFzxVWyhg4Fva8NHp4nji7Q3KE43ppA7BthUALVMNd63jFZgxnS9no",
  "key23": "4uPWUo9q41eXSsHQ4MKXU7PU66VakmHKLFW6BJ5tMgAEuU4pPLGbBdNpNwFC4kmDVX77YtZfNifkPxWtFQei2nv8",
  "key24": "3XowWKdbbLvoeeqE9PyY2oBcfhRyK1zrBGQ9L9M59ihF2UAbV8vQ7cErcn7rFFGwfNtcmjKg6qAF92X2tf98hiuR",
  "key25": "4cdPv3Uie7Vx3aobwYK1x2s7beX9bPFbrPTXN3CafwYTz7BZFMXzmwTdnTRHGaLL3GK8cubKGnyoivujK4xnRCva",
  "key26": "4DKpgc7CuLymLuxQeiFnhL2kw3RKPwrzaxm7M9CYfpjbrcQWjDLes7G69XyVnmrdNvhUtqd9yi86pDrkk8iJmpgP",
  "key27": "2pkVS9kQH5SR7meGrmzTc6CVrtGVCTJnEzUd9McLZqTdbZngPVx8mtCi9mcZ8jMyXoaU4VfY9rs7aA4FifoUt7fx",
  "key28": "FKn7DXxV3hZwiNKPK2SCZcCriHHTamUgRfqVGRUGTz3Bix7ibYuKyFhV6DRYkXB4YPC3Ne3vbmHkWzaQbKpgc7W",
  "key29": "vDJXVoKnEFcKJmdXrjkVqpBNKZLybP4iBUWMjbrbozCkLE2fUKYyQ5Wv4YXMVgzata7TsytEBmg84cyTZPr8Boo",
  "key30": "4qS6P3LeLR8ZJ1KjefJbVJvUXSUxtUwvr8YZUdbUCYxCyc5GNwwBkPcmLxiYgHUBpf62DUL5XBYhs1YLqje6Mzz9",
  "key31": "23v6KXjvb3PhBJPkVYeR9NVvrB2jYy8kEdcnZRkG4LhY7B6ryWL3hkBoFbcaMWaSogJmbLN5D76U8btHqNWCf9Gy",
  "key32": "4agmoXabAPe6iLjCfFUKje15e5TB26pZGjKj5dpP1SExJwH4uDRaneBbadTLamVzDSAqJSqMf9qhuDRqM9Hibomx",
  "key33": "3QEFbxQWLzkL5eb4tLJDFQzEzjyBQLfky2WighmC6BG3ZFruD2afQnLZSLRfkziZiehYqQkqTc7fxreraQuuFGHs",
  "key34": "2rZpQGjU3HUmeDpGwua5gFm8WewsK7Tw2nx6Xt2YVH1samXMzhbJRj19cbtL2Az2p2rn6fJWXSbAAwhs3qMVdvBn",
  "key35": "2vAEmMP5gEbqzNeZcQZ2z9aepaokZeg1nL3ztCay1GzuQFucNYheHft7UqZ99SRbLmQXiJyvHFpNnK7v5dqrG4Sz",
  "key36": "mReYj6MRHteTzfuEFcdvwvp5jUJJECWy2LnuefmLRyk4HPrEp9AFkQ6rk98AyKMdFbDYZmqZPVrh8gcqADBhbNx",
  "key37": "2DVXPHPzAmbZWmxbBv5HtGtTNU58j3Ea3vwZjJBxZGGXxfCm3Tgp1iAEMHBV9uqehc6sfdrPRzaEy2BXPAXrmnWM",
  "key38": "vMATrhvLuv1jgmAQqF3ZhNh8XhYPKc7p1whndf6aom7E57vHzwTQCam7ZYSfMfviBG7kCHUKbztkgQW6jaPFzQV",
  "key39": "4JBCsAwvNALQTgELaYGu1v2to4G144tRSgETQLYaNmxGPfzijpfQoaz1KmdWK2rYJuGo5e59sgVcWQFyAGyzWmNj",
  "key40": "2Mwea7Kddv4RjdH7E5MwUtEFQKUtpWparMme9TqbzUrp79QntjeG7oaUCB4twdxEXgJpDnxERRgGXfrtY2Cq5Yv5",
  "key41": "3D8Qn97tgBE3YEBqVWa4S2k98X7F4ZRywjMXSehsLTQTuwrJuFdUap8qX3gdhcVuW1XoPRRHB3yR2sZKvWZq2bFZ",
  "key42": "uvu1bq93xDfbGanm1roxgFCpSdnJS77JkoDkNyky7vv1ZGhphXKKyuoFMycMNT8emZc9w6JrcW5vHTeEVgUCxnH",
  "key43": "3D7pXbqTBKLxGaGKWRukZRWiKXervHHz7R6QdGpctqfQdutpQhcxup2ueczc987bBrGcJX47S8pZb2FxhjwChFXw",
  "key44": "y1CiTT8KkcnjhWSgCwpjB7raHZL7aroyoQxGqhbCjDdysiiphcaJ8DE8EscuJeq5qNPy8xid2F8p7gjhzbrcfaQ",
  "key45": "LgDs5YyFYb5vLCtM2cfmYYJuCHgWsFpSjoiT9F5AjWtpU9cVXyM9g5Ch1aGwGZ4aiw1mQHZb9W87PSmZFPWLdw1",
  "key46": "2X2ULey4rDXpfjixM7bpJkHo3we8rUYpN6UP1GJ5vq9uJv71DkyWzXXL45UgSc4NnX2PfAqr28YsHMhkYeNNsxDh"
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
