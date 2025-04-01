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
    "j9vT2WSBst6M44YztjA3chjQLxjJUXLvF2sWa5WmZagLPPHAEv4QGSf7ouxa5So6X1TJeqT4EXX5A7mfqQdRekn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586Rw4tvdM3xiieoLA4JV4mxAN3dWe2feVzaiyj2DormjgTbAEoyZWCnRhD3bkYsxF9s1AUeQV2vhni6sALG7YcN",
  "key1": "5RJWWpfTBLi9S2ZovdTZBU6rYn1ZkP79pzAGHEsgvss3A71ReyNm8c6oBjE7Pn9risak38Xw8pqjX3TpDqzPv4o7",
  "key2": "5sn7yd7bTWD3eq4WhzAfBCtU8pMmSA3NJkLMoCPjVupbE87CrZq1qDb45tzqcJCL31xQpLMay4KBuBxEDsWgkLnA",
  "key3": "kPMBvbjKLcJYqnPbrLhJrz8pxscJzetexwytt3Lnq31VkcJY5w5tgrPpbC7Z4bxFggyNUJdT93ksW2vQWRDrgG1",
  "key4": "5CZ9dRnhhWTvNQBy55BF4ca23X1zLDXmrvhEW8EFZqLaWqfyKxdxf5URfxTy2z2ZPuhWh6wCgKadDAG2bhrJP1CE",
  "key5": "3NThrUWY3jZZBWi1XUqTwAaykj3XmWSLtcYkg685p4s4VdsL1KVYVW6zKUqDqFg1XnjFiYEaZhzChxM7C6umLycU",
  "key6": "3Mek7JjPFQHbMhgmZCRj512RP8nZsUFw5BXWrpKkeS4GkdJz6JLg1oCB7yV4W2hYkB8qL5x329RGva4onqAyrYxg",
  "key7": "4Q6w8f9Acg8N4gBL5vPe7xg8XqReCofH6uRF7g8ejoTH5EJ9MrVeLMJ79AsKkySrg8Z6vtxbx8oiv65UqU4g8s3J",
  "key8": "AoCyQjg8te6XDXjsut7U5NdWnN8x71yVAEmc9jqxKWEKS76v6ft8eSjPuGxBs8eEkBWZhtQMK5Fvo26K7JHaUmU",
  "key9": "2DPB6tr6JPNN6d7dk4nVoJ5DeS9jZ5zjBEi3zrPaFFLLhBx3jmJsEw8WquQmtsv9L6C4KFshWJfzgxJAzti9Qeic",
  "key10": "2eQ13ExiEkQ46fT9qQCvDLwZ5utuSRd5pgiq1k8qMwoSoLddvHYbANYyQ8cTxxDFZ6txM8P2eyjeoR5L6ihuii5H",
  "key11": "4TmxkM5esMczkEHRXv4fzHZDCCEBHdQb9eHLiFNHvtVyo4SVfFVAwc1mg9RNCqWzws8RXXhangfrSW9kTy2XgA88",
  "key12": "2YbN5V16kPaEHvsQ3jFwxoQGQDLxqjcuiVArP6KktJYbHR6DaY8zJ5qZmZwkECkEMytbTaDzEZoW71kSQg12expU",
  "key13": "WftPMTULKz7VcCRuLyFJFYSAkinR1MWVDAQii4FpzPB4C6Mkr2cpzfeSvpiL7eAnmjsPoSvipc4n3ZTutaXcdQH",
  "key14": "2fKfbpMxCtcEsoY7Sy9E23o5ez9JNNHtTmbqS4yLJ1Cuo2CTzK3ESEmtiBxAZDoWXgppFSkdsYQ9eFTFhoSxcZrG",
  "key15": "2hGLNT2KPCJ5GS9dKUANnx3BvuuB4vSP84XrHuwUE55DBgykwYfy9rukda7w8bHraPtUfdpuEyuW3MDL8xwk6BGH",
  "key16": "r8n5gzAGwEPSyTyVoJkAAgMb5CThJ9rzgUZgiiZyc8yQjSmhY1cN9vgKs5DAn3JRXWntDgi7M2hUV5wborf9Qjy",
  "key17": "jn33sTi7VNBaTmF4QUq2tWZ6HsRktFCtX7MneveKP8DS4GSLvwspSqcWvJr2qcYfYh5SwG48YMhUWbkh4urHGV2",
  "key18": "wqJryLdAAd3Nd9zsSwRipwNNfAtuNZ8RepEZNfLQXHSFE5rVNCybeQLSAvzJinkLQ5yTf4bjQ9R8RTnDzbEQizy",
  "key19": "4v3pcyTdp9kkY8Lhsu2SFNaXYaPexEC6gKx3dxhvFVxDKfBsaz7feyS1EFStFTqvrGhUigCLBhrWcievczTcVtNF",
  "key20": "44GqkPLJET2h8R8vG9UDsSzewQ7ip4GGr2oW31E7AJXjATutA1z4EZVRP2s6arc8cbv7mAcEqjXB3adDB7RL3Fcm",
  "key21": "4XJR3SaAqxHheoVwUNjcP2av7KEAbfPdzQeSUN3fW67RVZAmbtDYy4ociCcTJYxAWtyxHQpb3rH7WmtddUbegsFM",
  "key22": "2NX7VqsRW9Fndinq1JTNwEPQnTgXi7NmnWaKrxKNWuNPtrGyikAfUxnv4ULiH3oapwVbDXswo2uS7AJ3Ptygr4yX",
  "key23": "BK8gikToE8p76YEswKmtY23DGHBTWsRVCJvekkMUB7Zr64KibHasxfHHm7j3syCkvLM92wbFL2p47z5jK4R4PNb",
  "key24": "4H5Zkd9QdV48jvFMbhp4Fst2XzaHshtzwFGaeoMSHo2GSN6H8joVMqx1kj88E9ikQ2ifW3sDB1o8X8DYxHfJmrWM",
  "key25": "2rnF1oVazPaDq368wnY2P46CK6QeD5zHKoPQnP2qYuJJUZ37nFs7StHEb6V9hZoK7Xh2Zh2rRrCYJAtsAfpeLiF9",
  "key26": "4Mby9BL29BrAGJr83EuvmZeM5erkn2qTThevZSsrBsxdE8Qf6zh8jQZz5ELZ3dgoC2ijfZJSVGYvix1JiHWAnzvL",
  "key27": "3M18QTo7tAxgz3Vx2Pufz1jxK4GngpoJVLQCpHyhUP3mn2TjVxrTZ4FdDuxXGgTe1F9h94RMaZDbdQYrrtZT2vVs",
  "key28": "PzN1fJMFiqV59jnwfXMPVy5Qr89FCbUWFXLaLkTUYCFVQ6cj2gkR3ChrwgYjbW57txFPtgdEuEXZMwuAp2uwVFn",
  "key29": "2S5QtXLFfbuyGDPCEPt6d1w9KeGCnT9GPUx5Ck43YvFGnGFdbQMtKWXVxeg2f1wpHstSsZGjFmRM9116Da8YNfmz",
  "key30": "45nYAA51Q3eeJVGjaSeMPhqXjeEf5cmWAfisrmVUdbAMVdbEEqDB3AQD5WtJbnEn8qW3LcSzRJrPwMrwFUACEScE",
  "key31": "2QCvHVK58SnLtFR71u3YtHN8GqSzwvwmxg1KJoJ82NZsmaCvF2eNm4jK8tU1Afw3vQ1QbZmo2a3g7G8TtkC3NfVb",
  "key32": "uDg9A6JdN1MvEgMQNua7w4yJFUeZr8koiiAxWu8esuieccY1ren5gfxLRtJXzbfueLrHfTJpSjB3XTEUydpppdz",
  "key33": "2h7oQiW9RyX6aSTcvrcUL53cEJV5ZrpHc74DhApczJShmJ2MnThpvWJigB67q9sBtsm9m54CfiARKAmheBHttg7T",
  "key34": "248if9PSKDhLhnRL4g9ruCqEvRbXPKNw26qaYYSSJjfW6XSU9jTyXV6qwhzCca2aTchzJmcWorrpmJRDyxqt4LT2",
  "key35": "67mMoh42GrPht1J99U1KBmbByP5PQHBiGYwwXziRAi35EJ5cqtk4cGVroSGTjhMwAS1ExoTaWjRBKYuyVv5D5DcW",
  "key36": "UcE6YWGcwHah59cEpMiE1uesDYgZfW3WQfg7rXxtHV4gB9kDZnVwzqtL1P86KfE9LvZadyGMB96pu33EoKMyGUB",
  "key37": "3gzsH6xhScNjgun9nNTNpgUMaWBMtFDJq2XhjbKE399VrrgcHrsmyE6ErBVGqEkgX9HXK5tKGWbF3ekdRDdWjz6Y",
  "key38": "2kkb4xzFJ546ide8HVEvkCyYS1WqT3hTB1SZARQ1CpkphRzp7bVYoEwek552WxMBUbjRn8gWm5RPxfbnauU3EeY4",
  "key39": "BFbviNqtEbkCs61u4ffM9H43ramHKcyt8YG7YeF2jeEaPvv5KsAC2eq1bAYb3DGjtjH2N4AJPN7KsdihjeT5kcp"
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
