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
    "q9i2FtAdb52Z8kzKq6wXXM9rLs1tS7mx7Kp5W2hZcd2fjmm8LMzBD2FiMptWkngzobNURc8qV7tR5dGewYdqv7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MeRcmRpTJVD1HAQFiuGNxhTCrc8DbWGQoNwbgUKFJTwx8tdoEZfrcuWJT1YpYgsFfsSKnRJUC76fAvpM8A3KzZ",
  "key1": "4nQvLZnM2Vt7aQ1ZsNBjBtngQ1jHiQLRGV7iYyaFWJbZB7994jH4Ypk7iQy8nQv5TkguJrzuvkDQH1yASHVQWswM",
  "key2": "5TbehnrpjS27XPzrofV7BrhcQZSmwSaxbVoK7jdzuiH1JXkHaAmh2gvJBj9s4ac7obFmd2ty3ageyXLa7kHwbhNj",
  "key3": "2kBKzwQKfRmKUW8wa1hayNNGw2diZRvxbimtRHLKCwArZkMjc3oRXy7dK6TngcdHqLrimE8JpqiW1VgvQwKqfpqj",
  "key4": "4D5Qficz9Ev5aaXYcvCbVYFfRFfBNmiGN5MV9CneSEHdKfyJATwECt7yaSdgniVP8Bf9gqet35mgMf1wKvKAwS66",
  "key5": "5UxQr7bkPwCeqJ2Z6vyznTv5aexxCDhoVtNmhMKvQUaVV9V3wD1csWQW3JQPFpheNNW8mkz8fRUv15hSdhYhX7ja",
  "key6": "EMJZWFyNAgquUnPyJWoAAg6P8iGeXSWvw8r9mLkeVWiQ3KhzRW1sPwHQaUrY6yT1SEya9Wm9JQGJK3JZfYKbL5H",
  "key7": "4LxbivWfSfpykfmgEDxc2gLqxswWZxKMtBYS6r4BZ1cqYCATzfZvisjW7dr1ggkPtxbWCh82NRUDMpnY3qg7381g",
  "key8": "2d9unMnJraPRUED7Ldasyg5oWXupKhh9MfWgP7oXkmRfiLMVqPdqXPZ1ivXuNfsZ78D4Abf21L8mPTFwaEkWULwe",
  "key9": "N4ZCj9GGPEqLLDaUW6AYhntdBBAvY1NiKWHznz5eo2pbQYQUbGdt6thjoUmS8LAHYFyYS5x4RSSHhLTGRWRxPWH",
  "key10": "2rT2vVQpbgQCziyxpQYXAf79vBjcmioKrQh6LYpoHKFKMsJWYJbecfKTXeM27J3KaG6v1r2oGJHPyz6AKFqs7Bkq",
  "key11": "3VNBVtRe6ztknmRCmXoqcEGiWGA4vna4kLpYK83TMXKAM1Fu8ThVWN2PF6uBQS76hL1LYJ5x9ZUHuFfchDW7oJAH",
  "key12": "2TyfZxTcoBDc4ZRR8rPwgg4idKpyowqKHhmdaLQeYNZnJmHps5N7mFqWPGcMB1cDT3TuRK1FKM6bTUiVpCG8vcgS",
  "key13": "2f9UhtsBfDHxxqizEPTgdjMPkBuQexmDHA7yLkmWHuXYfC1YUTMfowg9KEyBBf5AzRTkpwat38TNBuD3B9VaN2eC",
  "key14": "2DCQKeiaCn3BDSvVBuV5nGXph72M4a1ufsM5gJPvhGYCqwwHdLzrAVKmvArWz4qyrEm4XTvXmP2mjZhwTvosVJgL",
  "key15": "34icWH7xGq2m7hLB1jSkraFfB9acsG33mJ8EQcsP6XAt15us3yHMxvMmXuysCDKXSpir5qx1cSyRKPmWyJRRhb8",
  "key16": "3MYmFjGgnyRsBEcnrCkhxXE9xXvYw3bujqHQyRvsJdsct8vJ8ngJgHZpykj7VpYsrskS3nMrty4PNEpeNBhtsaDa",
  "key17": "5u6E7CT7RCaxiyK8YTCvtbc5R1LnKCEgYkrKb2FVVTxDw6CsMDtB6xhKp5iPWQ3js8o82wRpEQ5RgHvG8E8hjNvp",
  "key18": "5otLWTnmaxN4XMvyGjbeuPM79bUTCsYGFtNejNNZ4xcdAhHthD3UDPaZjCzgcuv8kWRNYoVsBBRR8oJ3QUavuvYn",
  "key19": "49CYVizfiTwAbxUaDbPGxBS2HNcmzKpH7fxH3aABJ4ebo9mPkHvb9tbU7zzvDsDq5KecCtj9ttA6FQqQsnvWTRdA",
  "key20": "3bLewXPWgnPdGFLS2v5UkqE4nvArC4hNtyAF9mQvzzqhqrLBeuHJ4Z6dG537abh7fCbVetUaeiKaS3djuEm6oKXT",
  "key21": "2iLzMpp2Ez4NSq6LygioWthgHDDfyTAAMES9QD6pDtEYw98cpudYWUWXY3N6HPqjSQ5CjVTKgPzySu1iLKiU4JYG",
  "key22": "9XQRpQ9A5KX1nXeZ8qQ6bKj3ZJMwwKfbtMvr2CCaZM49b4w6YKgYmgbyKEcs9mjYGEviWYdzWtLB2auYP2qdLye",
  "key23": "4vuTYMD7S4oVw2M7MiwmN46LqhtMTDLUeWBYoQeHAECswaN7puDoUhSR1Xnz41tgCigtpqsyzhcZJubtpmrPB2rj",
  "key24": "3gCnMhALCop3PLG7oNeRLMJeuC4B8AKsC6TRzJXGS3H6wK2yxvGRifog6ATocNzx4tEgKJDUdiE6d151ntae2yPT",
  "key25": "46sTueZeW2XAMCvXgxgPnL8qNtCK9k2F7hrnELtZZZsJirCCaDcjrFXpJ5WSqacJmt1t3qwH2g4FkQEWBZLhQ9MG",
  "key26": "5vSPNgeJdf4SNnsp5ztiLrWwa8nP1DT7FnGq8Ztqh8LsD2QTv7yvcRJdZ1HqH78R3Jd64h7UTu9SKWiGTRv1NDU4",
  "key27": "3CcMCykhotjKsfjr36wuYZhGQVPFHqwkLmcLsv3ozEYczUzosq8c2sUvvC5uGKCn1pqH6GVAhXGrQxRfWNhDLLfc",
  "key28": "fgVnB29EeL9qDfXxevAKwemMVGKV5L8rL5QP3CQuGsiYQLWyj4yyojh3cJJ7DsATDpTAH5HULp6ng8HXwtinsY3",
  "key29": "2rFDwzAst6ebGaW4gPs2oARMvacAFbkZU5xsHsLGbNRe41pZ4i8PnKuPBKqZP1jHTtAPi1fBSNUyLFWLQKdG3gkv",
  "key30": "3iRAdj4ihDt8VLBxvBuoy4BMu1D4C5kikqMJqzVNSntbCt7nP9KZg2ZZpC3QD7zjtBRnwjSFAiohpwkPG7SwctG8",
  "key31": "AfnJzVpxpmoTow3XgGKoQaRpJbhtRw96rXAttGmsaUhPrKdArXQKrPvB7C7TmxGoxtsNQLZ1W4D1HTLP3caYrno",
  "key32": "2DsBonpeT5q38viSVVPYtXGWGfdkmvwhVrzfE8fHzs4429uNw3xPFEYXMpW9BtnG54XcgcrF6yMXtfyVcKiq1ncv",
  "key33": "4aCqm7kBqgEFDBk7qXtGPuTgM76u6mdfjV5pu3tgMkLLrHdqeVUnko6YY2nLjhMAPPnNVfboLFxU7m3TZFhbxkod",
  "key34": "nTfTeEfFQbxK21GW3ixCHbL1HKjMGXvmqM8wqeboTJDsxp7PJhgcWJvdZsYkBCPFCDa9y79CPMTbqDhkPygnL9B",
  "key35": "3xijT6JgNhEVXh3HQHhzfCGnpphDCsiWnA2Qr3mpvtGXUq8RDSauNDYJtnVf5UdQBYQoFwcAw9cJukT6FRQR4PCq",
  "key36": "5v7deNJCGN2BJ7pM8FqEZXx8TjwXrYnXsvcCjsMTB3bUDCjGhKRcHRNChtRayt36brwNAPBNUtKKsvZpAXbT6Hw",
  "key37": "2c7phChneCZYkuBrWAphMbnatQYy5oa269L6YmZzo9bBD2qnN23YfWhqXEvvPtx2PLnfDBkb4w1N2KTjbwvH18sD"
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
