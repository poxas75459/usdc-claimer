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
    "65SsPgPSQFb3wFnBsyodUoTYJXqmxfUiT9yqhJwv4XgxJiyEXHBs83nRabu2AzgbJ1rdPp6rNXa65eKsyx9MEhES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33sdKxYptQ9x7RV3BUF3MRv14HWjcwCw7kbqNqzBP9q4yJr8Tzxn93d4f35Z1amYDC82rUegQ2YugzXkdDXm3zs7",
  "key1": "AouUxLAWFFoMxudMxSMwdojJS3PcA6YXvfTqyq5wHTTq8ZabCEWCGXiJoeDUL2KykgK1eiUGJFCg13PJRP9GzVc",
  "key2": "4wqhgVUCFgkctg1noQzyFUT8ShhG9onxEVihG6hz7mSWYHx7vUiAYdYL9Qdf3f8HZ679bRvF6GNVkS9eBmZw1dzw",
  "key3": "22VHNyGkFWYo9d1CPcGGYLuPSXK1VwM4zmsdzdC5z7hEWGDT6HXmYTCoQLaeMxrRFZvNUvSKbnvC7CF7KLu2xTQM",
  "key4": "2FpWCNWKD3tLwJdJy6oh2hu6RgDTzBpdUEhgHqFvZU8nzb5EyS5wDvTPMAFNZAfqvFBGnnc6CXZk3oi5iDMU7THc",
  "key5": "2YEJd9dtQh5iCc7vc6qcMwRYGF3zMCWfsQLHQYDEhWzWke1ESwfnF9w2NXHPhGh3RYB7CKkUKz4TwZHSMg5Pi5EK",
  "key6": "3nwgxvJyiTig8fWixJYQKoFpc4u4oPBcWV6obrfmSdVRGLPUkvm7KjD7LMZQKTWLyZybUcujYHEfopMr6WcgL1HY",
  "key7": "3UnX6nff1Ctoj9cNVnfYNpcf8vXEh6fcEgY7KxSqCXJBaGbcuVUiLoCeqcqL7ekkfwczkAf3Fve1jTKMAM5hWs1w",
  "key8": "4QUnh54xPPc6x2zDAxGXUkLgq4bAFwaENMSYBqMkEQiz6tbuss61aLwN9mQLvvu5gaUDCHphdH6sQozLPE3bJT7H",
  "key9": "2JiPEPqU8JP2b3XYem447uzjF1whCP8arqz1pxcweo6WSYp6qsGHwDDQuRm2HKPoZxAWFaAt5zqvWHDy8SAtNhbk",
  "key10": "62JmUNZ3KCg6hwfQPXtcZKBfi38bZR1PFeGZyprPiG7dqctZG1Fdqai3LAVt2MbUgv2L2GpDZKSwXwPJTjB291X8",
  "key11": "EhdFZyjCEH8MZhaVEJbvvd9Sp22RcQEV4vDaEjzjcbNkYwt6nPwVB6Hs2neeEgmZw9BsdpvvWMTDur2kqDPhHJm",
  "key12": "5LBt2rQviwh2aS5Gr6S4qz3uW22JRWYBANxaE9DjJgUSjQt8UetHbMHLLePZhViJNGYw7m7EZYBp6ABtCNKWd6Fp",
  "key13": "2QLvX2UtCXyM6kaNx5nU5nhKho9C5icDtyuHGufPtoYwP8Ei1UMbmidChUXUHejXriAZoS4PJaxpUqRv77TxvjMv",
  "key14": "2U457u9kvpUSGQdofiaei1N68t4QiKvW7NDTBL7x3HJ54jNhUmADMTwxCqPr6pX1aZ2LHnqcigkXadEN5jX2s2tu",
  "key15": "42TRGTz5u1omvRCTKMaWsuqwaF9UsWb8gTxAYonzmkBoprSGsbLdLMBR9g4t9t1yoz18r9wrpG1u9FJexdyrYtKR",
  "key16": "5ZUiSCNszu128WhoDsswzpdUTgKkoACKkvwnPh5iLAWrN99eBHdQAuJA2Qgttd5EqWBSiAbS95qAHhtYnnfLtYqx",
  "key17": "5wVFCPsEDGFsYAc4p5AR9JDg254pQDYadaU9m1W36bvgfTwY8YpY8Xh8XCLVQhTmbbVtMjk9sj25hvHpyGYYFE1z",
  "key18": "4cwPHhjHsoyPYMdgK8Ce7mQJTX5f8n9SKY5uUh1fT7kFZ3yV3q8fZs63jph8xp2fuX9bTFsSuGA8BFoakyx9hXQX",
  "key19": "4qUV8vM37aw7Hsshk4rkgkEoQLZuvvWw7bF569g8T25YKUhc3aTDpdDyRDKJ5EAjyyGfZ4ipcKiC6M927eEpTC3X",
  "key20": "614Ef21kce2LZ3ASwv8TBYHVUa5ifZ7TebHzpxxiqZ9ZJsu6eExiQE8oneReKMAX6xetLGkWsx5VWoXGiv7zh9tN",
  "key21": "sCwLJ1kiCTjhP8vXLuMt8aPYzPn9zuisbNjiRcJjimWYXgodUuyzfcENM5zUrAT2VmjSDq3kX2tbKsTxRbLD7tv",
  "key22": "2gfTjvYzW6jzZ2eWwREq74W5ZjXg9NaZ8Z25Fj5SAnYujwr8BATKYVYkZa94Lpb6jWShLkuoSfVTJvpkGqPvsNtJ",
  "key23": "2cKygcGTD1T6iuqmoZwAUL82DYLNmasLE2haJg4oKDyp8dHeVxDzLF15mKLhsaPeVo9ENUgrZr35gQJ6P776bsmk",
  "key24": "3SYp4TrULKFkMHTEBuAWvDgkBk6xenRFA2QhMXFpinRvtmV46ZTwv5oGgXj5GKLCYxLFtnaS4WQrwQGtUjVJFqMp",
  "key25": "pdU5y8nLup7Q6SVLzFcqwkUSo7XXZBEzCBNETTMTxB5EBaJ1mEt2oY1hVEH9FZtLEr1vYCbVTdRtfotyPP2drEx",
  "key26": "5srBekNvy95wqrigt65hsQMKFJonCvKjeKMEZyLhjc42gYJjW7jnvpuxAxXn3GKNCxEsvDfhJc7daKzj9wUz8ML7",
  "key27": "7oHT6wVHLWPsjHfCLPaRKyG7Br9Ee3i8rJbaGaA7ZbJvwwnq4i3DqhYf7KLLbQmwh8j29GzpD5dBCWwGfb5gWTw",
  "key28": "4JA621d9FXGLGyBWwqbsCuTJhVU8vJB1zgVkGK2RmwsQM9x47rvy7VLDUzKEAmyfuPc2teW1yZRP4RzK6zKnRQBf",
  "key29": "pLi4ZfYmKmbGqRPLGttE6Acqy1dzRspB9rQ8joFKwyUvB4uKCHLvBkKMeeikY9uaU3b49sfmJ9u6cWQceEfNEbs",
  "key30": "3uVt2AezRULJSZF4zLe5NkYFu6Y4SmfcjWsFH6HT34n7r9ApQBfQm1bQiyMqUiK9ZUx8bq4Nzn6zwWj2naKgey5W",
  "key31": "gyZDTT9FvCn663XdUSwTAYHBYudHNZnbmbBEjcUoxLmqrdZxhc8GbYerbt1fhwha3dtY6xSnKV7VQRqvUEeeYrv",
  "key32": "4ruckdwAG18KpLvEASgm2hw43xCwJkp2zCvfC7DDYQxPbsYDo93d2AM2Na4KYd4ucEgEWC4Nru3q1cLXj17Ausy5"
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
