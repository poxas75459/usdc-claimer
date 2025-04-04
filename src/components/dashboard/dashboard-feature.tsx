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
    "3QqYrgRriLCMWkfvR7dN2q1MjGnjbbXVTKmEXWryFYv45YpK7kXQKtmAAU9K6zTkYQ6WPmd543p635Wizj9kn7be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xp28i6WUWNYv8EN2Nt5AAEkapU7MQdUyQCcJ4wK16B2HJZBcJGpgsqvu61Gtu7o7XLyn3w6k2PYCX7MnLhpSPpt",
  "key1": "64TXVquNSfUKxr5LRBmvByXUaGYzRnXzH6b7YqGUg6nWUjQ85LAaJXWGsQcQv7uWmPDrmdaF6QXQT5L5Rkxycm9e",
  "key2": "5WtNCLue7prhFSJgFUMJQ2VnBubevuN528mbNxTzr4RVdiGG4Ug3eYKqKHXeHcPArC3NWNCA758s2V5t1FnpZV6d",
  "key3": "382XURor6Gfj7ATc4GQLh53jdUxsMMVAjXPveD3Br9HtkjJEhaC8QDTGoQPny2gHX3aGJPuBvE8qt5rHSiffT4dD",
  "key4": "2AABtxLugdzx24xeWhW24f3ehqfXparfSRBEDuSc4bB1wFuUMT9qxbvsPdNAPS8Ve69SPdA6hKrtc8jBApACXACJ",
  "key5": "4X2R1beNvGzBe93icGvJXSPP3gYtfZNfo7QGkg7ndg7PuAAmtpRA333zY1gKfsf9wgswysRXd8dR5hHbaE378bBW",
  "key6": "4QxN2bwNSuWDoob7xaaT9kCpEFRyFvxXSpoMMwicp6Mvb8ru4V5mRhrrZBdVVGptgn34PV9pUtS1Zk5xSsD8tLqy",
  "key7": "s6tsZCbjUzhMbk9YHrpS7B6zYh4mthFniBbKSzHwRtfUMkvQ29nihLH1k9tAXB6ZSvKgy9pbRT9vBkKEkhsFJ9v",
  "key8": "2zQJ9xMmNVgEHziRjZHLZ8hesTN1cnzh9AJMQxCrMbujXCG2PwLPfbEUF5YH9kN8QouxMAQHWoL1zLwT6PsZuzBE",
  "key9": "4rmVmNYeYV4HMtapBEwgnDMePPCrYCvFohcpQNABEgaeg4qxo4AwkRyjYjdmG7dBjWfwzaScuqUMsgWURVtNewxV",
  "key10": "3gPVxJm44SELoc8p1qRnY6BGqbU6SvSqQLz53HQQUgKETwqZ4Ne7uiQb3TBCtohDnpF9CHDL4HexkrDF6piEVEgZ",
  "key11": "5DAxxMVrDAvk5M1c1ZCBhLBjKp6ySnAMjcSVuLmG7M5JrJFxGfVSQKSAYb5iozvTKueZhCB9gZA4xcwyaFqJd2gu",
  "key12": "4sRBC7PsWqbHHsAXyiUQz4WynbYryJFJEQ9G9BmSG53DSrmazZkkctsoESX84iW2qxb91c4eqmHLpdRDx6spLiKE",
  "key13": "3m9o8P92e5tyPYJtcy7eoAMNbYAD4Qtf6EsDDhHhWTqhN9NfFcYqb5keNUroCFtvNEsoDG9niVsTdygYpsNtu2P3",
  "key14": "XWgeG7c6w7zPuE8Fz8YvFE2Udn9MJEWZYPDQitQACNK9WrD2gbBwMhrJjFLVVdpMsyB3mZxKvCSbZUc81ib3x9D",
  "key15": "etjpzXw4osSX1aAtb6p6GcDLv57tD732Amhu3HnHLytztwcQXjdYS5btRqG7EKyWN2pUcv1beU7WzbZMsFxykPM",
  "key16": "4DP3ENGai2RYA3zUKQqt5cLsW7FZfAB2HE8S6ggqWvNZG7GBPZz3mE1qiubRd76VVKEStyDrLTVhuK59BHqqHMgX",
  "key17": "3ggy26cLUM4pqKjJrTtqTw5XdMw2AdyKhJiUmHn5Np2Z8zXXzseSZKFKwsrn9Ssw5bVj1Q8hfkSvLLidSjrnVw93",
  "key18": "2zMUpVafRYqGehBkrHgXg5NAJWvEnSiqyHHEQoS7V4z7YxFvQW71UK9gN4uWYkymsX4GCBKLtw9T7CYyfQGwHP3y",
  "key19": "36dmpYJmbw8JLM8PYiJ6Xw9ps1bRiNTdkox4fVNcfuqz5McjYG7PEgoDhdHR6ufpiTx9gEd3Zsqhwfq5ZrEuzpMd",
  "key20": "dLtysV3MQprmLx5LYz3Jwh2HTcx4KWKqoSeyB9Hd1MmfAHSztEcKydKHvhJHZfS4kZEMouEkff31fZAf6RQo35b",
  "key21": "4gqrdQYf49unzKgsr4QAz1RT4zGxBDr962Hxt8pnnnPmmB3BKsPxoDJoi3t3dQ6iAWfT5JomizNsT7e6HixJXxYZ",
  "key22": "PTUXQ6CSAeyDuCgsMs6qvPzefGoFJ6mQPgcs5tPoi1dGvLkkpH5fZbX78VXopVGFmn6ZoBSth7e3DwVPQ2niXY5",
  "key23": "4jrNDz6a2xq5ccx6fw73cn5XXUrQukSz3fuGwD3HxNreHTWyYkC2De1Soqmnvr3njP9orDUU3CtH1gFSNM8NxAf1",
  "key24": "2P26NLjacK7yX974qSyKLvZHS2P8bY8BTMB3GAmTEasmzkEcXdtXS9BQPkTECM4fkLX3hW9xWGWhDuuCsVfrREr5",
  "key25": "2We26Xxjijz97sTKgYbfHnqXqTVfRurkFqFyjnocgSQ3kE6tRfg6U9akiJUceAHATcrBKJJBdahinrGNceoVZRjL",
  "key26": "3CrNDAvNtvy4V1x1qwxuC3TRqniqcBG1TaisiyoobJKakvJCjCqCn3mi4sznexPkRghUfhVc43Zv821xmSb3v1dX",
  "key27": "3sZp9UBSJhvBTBiZn5HDa1eCVLDaZNaGBuaExBRCKf9ULy5oeMNnsRCJdRWBsJVSUD5WhPhnBNgWaQzJAmW7mm5E",
  "key28": "3s3asQi498HUzi5RhSM7mqXsNjaQas5kNkem9gZYeAQfHVjb7mjoVdGBkDvBhC9hUo9VN91rCEN63XfN9PeUsXD8",
  "key29": "52MNX6kBpVA2kadN3uz3BX4zRuX4hBix1gbWFCsbBi7h2KUqJztvYtHFLu6RnEeNX43GGm7AzCuw6eqzR3gMRvk3",
  "key30": "5bLGTB7HSjj6dzhTt6urf3n2MGxiUPmAcnYDEK3RCnNqoUBnzzjWDSBkCLSLqoGUcimhtXjmUofXmqCuoSMjsCSj",
  "key31": "63KA18sezXSAiXPP5cZqqvkGzvVA57mWsQNVdvfyySXj9BPzRSkAwnEJekd2h9yVKyvrWVicK7tcGrqHJAe5NVrB",
  "key32": "22DHRGW3cd9v44G25JN7iEeyAzSweKvuz9TzRgg5Tsc5JM7ywDJrWS4G6RJj6SKUK1NjJvF9j2xVN7ogRziTw5tE",
  "key33": "ea6breUiXW4rLwQm3HLE2NkDj4ou6FbL16AicMeRLV5RvWs8ypzuscWeMA6V6nTxTGCGDw4cJB64tSeDhN3b3QG",
  "key34": "5hjkqTxkZLonq19MfsB7znGTEjnsCkursBwsiFTuJaBk3rZ2xnxWeU3vdiLQUcgomxbgQcr4usxSitb2GZES8gK2",
  "key35": "5nuuaFpKBHsWLUdUkSyyUNJigQrZvJbNoYu3mK14iFxCtWnJWKZFCboBDgdBwGeniQ5EncXq82VtAJWht7x8p3j7",
  "key36": "2eVRDEmsQmbsvSBPs3NiZ2jW97H2Q43w5nSYy82vRRAapFv1nxfM9fjUPratezi5piWiGbHf6Rbm2v8oRLiwAR6j",
  "key37": "387ZY26nvcMWPzUiuEqgoABEUh5mTxsXLL6XtsKWzJmMYRBdLY8tqMeGFwbcq1o6L72oR51kDyDtKQXYbo1kWUb4",
  "key38": "5N5oUJWTxxhrd2jhb6s3xj6v9ZdtqZhWnHg8fGSNQ8LTtxwYqEattFcqF7mSVbQSo3H8wXxzxsnMCFxL2YARrfzR",
  "key39": "3RfwNLycvXuF3RP27noFsRw7i7AUmSNoEZWTbjLAhBnEcG58b4RVyyQgXtMzLuW6hGRmg1pqJRXvn7UXmgT48k38",
  "key40": "5MBccfeoerSFXnxRLtQcpVsgZr43T1qqr4QMrqn4W1pbyBdeZPJ1cGviXqw7iYMtGNRD1G91zjdKXPC9fTZ74zxF",
  "key41": "67LvVjBLuXZj9pRjQLKMHbHNScN11zXqoAuUgntBDm9YAVoE3zwgo9wr54JrUYBgVL1QkyH5tReZSR4Q8A2QPhN1",
  "key42": "7U6yTfAHGWC9qpxdKKNmfHytAtVwYCVqRe6aJVeFx9wGs6okRMRFaWqPsSn4wADcgnRino2kFNzyMErJBpB5TRM",
  "key43": "5F2uMeDQue7RoRPGkaCfDDBkxagtZvRc48LdNSHwkSZJ7TryQG7DpcjDR1qopWa2QY25LqNgkAPKSjernqbC8KAg",
  "key44": "3NGqiKtJ4gomh7mZrwFgy7HmUm9tWftbmVahpATR97Ja1rEmBeQuG8fCKix9Tj636i9Q5R7Rgo99E8pUpYHxtnge",
  "key45": "4fNsvH7t7orSKnNeKJGvV6DRuQE1eMrpqjEcnw7VVS2PGo7sMfpMfrpiXLpRDZLHbmmptTjLBUiurcBJ3pD6kfwA",
  "key46": "4Qm8SMHVWL2mWsjvJYe8XzXTnUGpqTvQWWDjTrWo7G2FZyLiEzjYags2VmRKfj6vNJnipsgoXEcJFro9ovzWJAQP",
  "key47": "2Gs1rAB9khiuiE1FvoybjL4y69RQiqyeR7MjgTR1L3VATGzrmyMdfXqtE9rGsaX5e4ULfMGr9vrqTpyvc6JBMNEU",
  "key48": "5o4UCdE2cZx4L492CaZueGHPkQL82kn2gvgbHCjW2BDPu2A6oTGPLHo8hyH7Sjw7pyYDqvDRFRrKX94utCMXGore"
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
