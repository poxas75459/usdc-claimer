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
    "3aqaweQSzmZHrenmCxYvZqHrb7WNYhv31kKJyqBdMm3t6MHAQXaDD88rY51RsmWc9Guvj8T6BA7xnayWkPYNQaSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mD1SQoP8oRHWLyzWDW29GfqJoRHBk7HDKGzAwr9LDhUngUuXc48m6T3VgDeKcQFwKWh2By9dNvFD52j2EMn6LgL",
  "key1": "4kxiptE3KzdMwpQaDUm7SayJi2vSLkkaquu8dSPbGiH6MQxWetYtzaKbsAWQ2pvXeYnM2Y5yNk7jYXqFm25FPwBs",
  "key2": "5ze1QDWG62BNYwQQBdG5x5gPJe9sLh5Hc2iFnVarZ2MsLu2WqUEswEUYckwzPBpeq99B192b5ytSqSRExzz8ZsdT",
  "key3": "3oiUC6Z8YYikiGSwGmEPhfXvtTxvM5xrHpq3fkLXuU2pKmBbZ37T64uZ3p6xL9tgVKHRivfRGmUnMM7VXkogMy6X",
  "key4": "DX3mnn1dGVhtateniyArGPcCp1hvDs2gqqhMpDbdy6VKWUZPGMPVjvAu447MdsJbMRLUsZQjnXzouUheQyiyRHu",
  "key5": "4aeGbNGpgsn3WbWQiSZg9WXuHQ2GaCdks4DhsFanff7xX28CmXdo3RiHFzUrZAPRRRqVvmg2Ff9k1dfrufxFG2zE",
  "key6": "5hnpG3tpCEioWTy8PL6XkwXq6uevaJPYnMnWioqh7Puf25pkbFn5fb5jzjvidATqg5g6ENMALPDgjuReUx9tqsoF",
  "key7": "45ubxkRD3oZ22VCGMaMqn1XxChA2obpj8EC6AVhGzpK6KxBqFa52H7Su6mxgkg13tbJ95riH9sW4jCNvdn6n7iVU",
  "key8": "2cWygmroQ2g4HcwdpSMsSBGxDcYP8WuTZFHBLT9gUyeMziSJH4AQXzJsQP3r9J9SwMHwV8T8ZRYvBtyrqHPNNP2Z",
  "key9": "5TFdDo8UzUVvfsBW8cu9woVuhfLNf9GWwkcrtuvV62cvdZxgQCmDDE8SCDo8c2Rfn8nuKxexM7uWDSHkXtGAQqtB",
  "key10": "3ZjGnucP4d2t5qct2omx2GMT2m8yGm1FaRxYGiZ4BFUrQyAt9pJP3Nwq1KbtkcVEksgsUAxS2us3WPM9Ms3fyrRb",
  "key11": "5wYovvUUnnoPgBgpamtpiDGYnjj5BYr3JYug65rPvtjvL5GppsN7RoACsDzck19NpW216PDQHFd1UqdLjfHQ6gvZ",
  "key12": "5M6Pd94VMKSpLt9KT7RSaUygGyf5dXYLGstgGjy2t9QCd16o5Fq2BinzxAPoqw9RkGmMShXvinKjRgzeALLN2PQs",
  "key13": "2rKRTd8TxoYgHV8HSSVfZKcjJyAU2fuSSe8K75czrk51MNus3ajpBhFNrwHGPqdb1NPApsdFRyYMLXRYeVsED7D1",
  "key14": "4vBUqGg1KhUKMCdrNHcPx8xNn8Hf1rSqAwY1jhMF6fTxCFbVGiY6KWQ9rzTqnjVwEniHKW9udWxKREizFz1hwyFf",
  "key15": "5tNrHHXhNwWpNTQrNbLk6G9tGostw24yAfCLEfpZowuE9cDHsiSzR2Qnwo6v1GxcGWWTZRMPrJGTQocMndKtQqSM",
  "key16": "Q6mv9psrsuWa8cbiUoeHii9GXU8vcHksCBjXDBv2Bz69WfGH1njqY9vuj45qMoXu2gefGFHCRU2tBvYCCGcyoVP",
  "key17": "3NJWq66d77obnsNp74LPPzncSXgY6mQM3hJu2WAS8V1c73AsYDtpU8KULwp48PSMPK49572M1zbkViR9hdo9xCoY",
  "key18": "5wT8rpjEzWpriw8sVaep2KtgH8uSi87fLYahB1NABCfECUnZKYb6EzMxeaE14YCQAnPpuZG6J2mg2myU9hLbvLSB",
  "key19": "guNzqpJFuJS3RM5i1nPnspEVcWwkdLJnFbtJ7BRrRtjJ27VeQBarsF4jDPea34xWRK3MGX2VLn7RJA4mNFj6czm",
  "key20": "4AANEGiCSkm4wkoSPDC2PimzibJ9kcAqUkUHD6HPSkXLJLJ7fD5ky2D2uknzbWpeyv6cNyoN8jyRzgvhMyWgsYLa",
  "key21": "5xWjBjXYW5Rz7T9EQ7UnScYvARe3RdJNE6JvsXK3rrJMgmWVaomGKogYkSZDCNzRcxWSDpMZPgiatihV3bsfhssW",
  "key22": "5fgCmfJybaAPyEfeTcJWvWpvBTEGazewGyrBfuQqTSzxiKvePUBxAMWVa57s1X7bj5Y1LKxstmX7HH18dPY2GUUv",
  "key23": "5QjcLtCMZx45iqDiqJ8igjqkuicLymn1aYdyYSdGdsusiDPNsqExepsk3xjm1c2gGJWHLnmcQHWUAopWkiPS3Toz",
  "key24": "2dUuYG1eUvJUjKVRZNuE1LrrbJy2wgXbpfGFY1YeeLHojojRD9usZiqu2G6VGZcAHnNCXrZMxqDAfpwtEtRiRmwe",
  "key25": "3oHiWAT25wD9MEXAWXfaaZrQnU5VsSAg1xpPcP9DZk4oCEGupbibuJa4NbHXPDxmAQZHi271FXPTbkKB2ZdzmWD9",
  "key26": "2jM3iV3232NqDPzbH9vT6SAepboDrE561g9cKDr3jJu4DvAMAWHv17sPmgZqbAS38RkTneA2uVZSmdB2DS9JsKjW",
  "key27": "5own4iBP3Tj3j78E4iaqo4xYK3nCsFd3noHL5MBNVLQap9arVrkuteeemMn6bAJcbjhq9CsUk9LUnPCjJDcmpq72",
  "key28": "3Z89aXKX1wTmRzH4Ww6CiAgmoi8FjfXRVjzAixRc28jsKW3iYmwwgRaRaJkta53dAYVevxoBo2oJtJBKzNEsCZGk",
  "key29": "4ox7ahpgrCdVGBDnBzRkbko4NLJkSrjoawT2rLBJgXbvP2xoP1TcdPXGYgL68hAhBJipL7VqZqT85zwP8w9zR3fY",
  "key30": "hBfcvoJcuPDzHdw65KxPasH5uS8JekKCJm4wLGZhzxjrk2TuozyQW7aodpzcYVUmTjBgkJkPkkKBhXpkGne82oK",
  "key31": "4qkSdV64wsx7BkQTNEAV64cjk8N2NfQEcZ9x9r33jQPHBExHWaDEpLnxNdHe9179nQ8m2HoSiMFj4YUgR2zF3HvB",
  "key32": "GDpcDTz1PekqAiugXCpy2SogHakmA4P3NfFRasjXDu5yy4wNvGT9BiWx3vDUStmmSoNCnMFYt4MhoMf9BLkEwQs",
  "key33": "2mWRf2pSYpaxeXEQSVvvPXybWaqW8m1BtFxUu1ELWM3JLuCLt3eXRdfumgUmhTocfiwfc8xAawaWtxYRxXr6ySJz",
  "key34": "2w3gDyRb7x7Co5ZrjkrLFZLCSh1KgFZqJiHPvmANhaoJopDbm3f9EdTR1x74eSjp7Xbhtm4hCgYwBVEiBawTSxhQ",
  "key35": "3UdUDfbU6TrfZcxmoKpsX4dhP8MrmoWnzY6k8DsqVg1mi3sZdw5UGTHRuvH8guym8gtksV92GuAjYcpo69tyhXUi",
  "key36": "3mwCNT2M61zvBD6m84s33HaURLDqY2Cr3yLKtoYwdekLhR4C3GJuXNVtpoEZqquVPirfysQvvyZD4tgUkeBo6ycN",
  "key37": "36gfzG8P4begB2Rs87tbkJZHQJXpv51b1JoFUw3Q4oxLJHmdJ15fh9TvsEWAc46Hzs277ZfLjUZeHtwe96jomscd"
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
