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
    "4wRcocDYyYC2bDjLSivbKS5Nk8mVGZHh7bgz34fpNMnQzwKRpzWkGvVzSbZAZQdy7CWE3nsZzXt7AYvUmSQhRayc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bN3bSyJ14o4aHhfBwyoFZHiurYYWHNBRYUaJjWCwqz8cEW83phGdydzi4TPKxKZxny4rLbVa54bDNjfgGZE9BUH",
  "key1": "frtsizcZU1m2MoL8STNfpyRnnVmHxrtvYw8K6JNoNKAExLXp6BzStKR3E3VQ5BGhwBCvn8ELvTQHqGrjm989yVK",
  "key2": "fMbanb9MhpzibHfPjt1gXoZrJcEuJWcMtCCzQAExUp4aucWY1f7Cm3RrvuS7wM3XAsggJFkerHWYVKqjiXeucG3",
  "key3": "5yxdexN4oMPUBJsJFuwY34GQq1GJVXYXzmP8DF2mbwfsLuiLfdHCKw7jrNfTww7m7azyiQq2QuqT45AxZgp1cXK2",
  "key4": "4ZnUFYbvZy5C83ayK7AT84k8TsG9UCY4GMUjc3KpXkqXW6WjNwaSRZQRd3xCX7eKkZNMeMR9QTZNzp2EkTxwVPqY",
  "key5": "4bkFtNbqb5e5f94Q5RzbSdyXUpnC7TT7Av7hkYqsmyXpwnbVxcX4CpU38gJLf9VtMJjiXTVVYJi6XD5h8chKP2ht",
  "key6": "8RMFoH8XoEP32nnLaLcXvMjuKtoNRigjVckb16ctWmsGU4PTUQfMfwFz8oStt79AjFwWxfmFtN6ufSWiog4Lh4d",
  "key7": "4D41qBppfBa6oXLkbV6dWmYKTyviLuqaynrS9FE15mqUmiA1hQE6hh24MSZCQFW67Ge477pvhXiTpKDfktEjnqfX",
  "key8": "49iWT6U1YCVR5sAayGgSmWLAWCKfMTWWRdAZYAqqfi5MUY9A7PDTJSUqhRfPkyA2v44EyMuHtHZc6ijaW15tYM3C",
  "key9": "2xQuE8QVJYfKuG9TD5mZg9tugtaCCkBq8eA5ykoYDGRG59ZRxC3JVmL4fBpVo3vavPUNUQRUN3v9wGQE8gmXGvBX",
  "key10": "4YLQLawUu8aEQojoPYKASH9wmgpiDk24wUX9NBZnJc59ephP8quaDxRXjWofeErQSHU9hNonPQq39MmUuYyU9aJ5",
  "key11": "5aiQRsPk9FP9NQqx82KbVknrY6bhTyPp5LsiNRkXogsP1j5VQVxtysYZxwtZc7KrAT1sutQMkr8o2DdGDcZ7rBUN",
  "key12": "4qYh1vK76cxDXyWzTncHRWDS4zUfa1neGQx6pkEP9L51JQ29jihDc2zmsSbwBhjTMgPXh2vXfKpuYVTf9TTQh1Xs",
  "key13": "FoA6LiHSwJAkcKzcDMrKBhsbTLdjsisooHsdnVkm91R7o1G1wQh9RMzhLigvbKZ7vW71vtn4PNxkZ8UmJGEq7nh",
  "key14": "3jVvY8NMQxJZmSEKzJBuSQ5Pg1knpKqCrUc8hp676JaGHuGp2CEUaDNCUWQFLJQMZR5QCfmMamYdA2DXidhrLAhU",
  "key15": "5atuymKys8rcbTkp4qwmSeF9mRXCZT4ov8h6BgxBqm6Y2gncnkMeWNr62bMNLypgZT4eC7pMhCdgeSEBS8ge24xY",
  "key16": "5BVw62tkjMWb5jWP5Nwh7NyWaMb1heBV2Ser19bxEoAk7FDwFU4WDSPh3ZDkymthrsqLoBAwahthU652dY7ryMC9",
  "key17": "2uFHG1U7Qt7iDVH7R9t9pPmYqQwdmarGDD7TKpiit6D3wNBrTccncbUXPQSTUaTMKU4RrVPzghYULNHs6cn3WPr7",
  "key18": "5sGHpYscQgvPuZnCyctgT5iNSzBcVWkVNWCp7dQs2YPjY22HH9rmE2dumL9MPTfLqoZX8xtw8mmnvrz1FaAVcuCJ",
  "key19": "roiU1Bwi3HLLJhyjybm37ehiHF5UC32YXsDx3ERsJ2gTSGuQ99pM7dj3hY88mFAxNaY4jBFzqCoE6Bq95Y4gg4N",
  "key20": "36So4n7ogRz8eBKhoLY7e4QJjcdWyrN3XFbCRafqiV6JMPBbnD9wV2kKJpEeXUvTanBjyxxCequhESN3BkjE1dZV",
  "key21": "2aLuNh95zeawk8gk7cCDJJkA8EaAKhoiAme9QUXCPYSFxNSdTbE7N3bdKPYAzvnotthKjvW9UVtGQDYW4H1g3HYn",
  "key22": "5MM6vdq8aa3wpKajJe7PgaMiH7Ki1qjjggU3AQtqH5mvL9gsyDRtXwknDfngmN7osvSfqBg1N3GE4nhjxGPJxQhz",
  "key23": "8M39sD5XVdphN56htz4bGZr1pdLcrNJpQMLz6o9qpgvBonbRUiVKBYUcRceCpp1zL648vTh7Y67LFjU866BUQt1",
  "key24": "2gLFyjViXXcJGhYRfR9CnqFH4sDWEF9JG6RvaYQxYRD3JNeRrx5DiQzn5rWTi2bEufLq8p9P669ZkgSF5AiJBCX5",
  "key25": "46Mif1sBNKdkcNQNv2BuPiTuuX2ohhsS79s5UV2tC4pPHBVyYKgN5MKx3bsPV5V4v9TDg97Hc4diNudG93Zk9Nmd",
  "key26": "3G5uRwxyfvzh4E7buG6eu1m4CZQXMXSrExxmJjSmKPC2psqRMXN5xMyojdqpH8diXzSDsK2nT8JV9M5p4BZGkJUC",
  "key27": "4rrZM7Bk6Ne3UhRF7rGSaDkUucpvGWXUK2its1oThZk9phkKj2sfL86DmL11xMyxQvpNq9YQV8CdjBtiXRiwMco6",
  "key28": "5ycVrSJUQmMgyQUz7Z6gL2pm22tFLfsu2TdfAHsRcojZALHZkJNLTVFYdeJiKzZrEoMYRLjyVi7UAWbEHkRa9Lz3",
  "key29": "ih8xZi6kGKyNjTDQz7xvqW67V7iPMy1GaW3wTB1LS9obD3jj4a8kZDf68r5syLmtkALpWa9bYV8KUN3cdWBVKoY",
  "key30": "3csmDduhtgAxF2HBR7NbqkFsNeLxuTAfvT5so9xsskiJZj5xSiVvjRWAUGVSKGjAr929R34PxY84c7MGFi3nHyPQ",
  "key31": "2D66vboeqSkaq1k6QC7cZov1KP3EMstMnQTLVqEyBAJFQ9QGgeWQstYEURkx5k2vXg1C65YJR8rYvXBrftuC6ofp"
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
