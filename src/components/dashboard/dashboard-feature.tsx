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
    "4qQq4FNCzNT2AdUfiuFcmUcJQ7F4f5Y3T7p7PwTyRnJfamexXrAnQZ1xgSnHPNAtgTgyQWJiN8VncCUmiP9kXWTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "goHdAxd4FmFp3868nba5CRXyKhLq51gP2cd7ya8Ae2ZyaeLNpxNTmcTygs6xgxHS58MKZfHEon9GhNYrnNGJprW",
  "key1": "5GWhWXXy9YM5jUvhXCjcfJG5hRypfZyxLVyf1Dghf34X1jNXhfq4zZD81iEXMGwHuYpMeNKKxSRcGS4k3Tb5hbSS",
  "key2": "5ofKgDp6XhCF3vdGm8aShkoXR5Up1eELQiBF6Znhjrk19q3XadQxJrAHXtNv2tVSHFVPtpKRvXfXAEKxGDxYicmx",
  "key3": "3C2ayHAkZQ3NhLRTcjK4sb3fkaze7Sw9W7w31Tbqvcw5Nqxd8JhAVUK1RT4b3LJE61UHwgX5Cn81J45ZZVdTXamu",
  "key4": "3GYwT3458Qzp3rQR1e3Rc4HEpU5MBcnbNwoNjkq8ckHkEbwJL6ocCLUdASfvST9dek7Y3cgsCR5AhP3CaHQAdJGe",
  "key5": "5VLz4aXpwMjsU5sZmWWHexHGtVvMKMNZPwEQLEWjJUxHmuq67NTSVtaM34Pt8Rsip8Uc3vtxbKp2zL19PmQSJhEw",
  "key6": "46BiffzHaMPFtiaK8p3yL2w32dYxeHQkDrfNYFmwpxdRWpEnBHQEZ898qFp38ccf68ZuhBXRU813r2rwpTLH9gpR",
  "key7": "5tFtd6gUEMGVikQ18PryG2YRs4Eu2KL14NYcN3g3pLnBx8HRDraAocxkJM2cupfAA5BFTPJumoNvHtkEV9dvemrB",
  "key8": "5MpMPKmb6unxAne3ckRUUrwtDWBpwdgcnVpj4zVPv4Xpk4dwzxLruVyaB2xV7TqQQBNYuxd1sLEZoiHGw2B58src",
  "key9": "3jCtbgaXGS3rkQzXcijVk6s1VwZiyZ8vWoNrBbWnMwdvYFYS8cmRTassv4VEEnbbgMspDaM1NAJWvW8zwqchSU2L",
  "key10": "EV2p57pGXR5deEdiPzqCjr7scLfv4s7bKdX4PeQW7BuCjFfgEhqGEc7Kd3h2pQjeG6QTSnBSe4V2SAK6T7mBMvs",
  "key11": "22zrp6XHiWJueFRDTnbD4cxYL9ckPMVMNCigHZK1qKVNqwoEmamyxvWtSGRnKEgmg5ykSVsxtJ2YRacwNz8hAEwd",
  "key12": "5MQuMrkBLpCwvQ5Nw4po6BoYJQcGSe5NX41cSNsYzcRLjMoojH2JnD3RoB5wHQ4Cwv9miB7g5qkNVGyn1iWbYiJo",
  "key13": "tNGXwtHvCDuiKsTNQ3GaFapp6A8jWQQ1BFyBkAzjJESKgisBgydHfir9uMK2GPr9PstULjZgzJLk7WWvK5Yu1Dm",
  "key14": "4q2Gq93bzcFPwukrXw6juXmVKS4U8bP5etrU6FzzLfBJbUWZ9Xnq3AaZKe5PLDc4PFEocbjTF8p3FPAzeBQaco4W",
  "key15": "3mUCeEupAX8ZneYfEeY37Qpzxo4Yw1UVcY9wp7FCzciQm4oJCtYXzaHpaMTqZJwc89wJsVofXvXeStn7LC9Zhadp",
  "key16": "4KxMwstsK7FBPdeB64TnLu84HfJw7hjzRJfQRGgrb9HextQMWMVYKKx2bfiKXb9m6QjgfgMU9KnvSRB4KdbCuPUP",
  "key17": "4Tpr8ZdLniNjE1jZqh1pjWmuzRLgKhg2Mnz4gPBLPkEeVPRdS8SQhnhbMfKndhti6FDqnWW4AMS8hyaKtXznECJF",
  "key18": "3B2WjN2cQHNyaEpLWfTqU6Dx272twvhcNJMTZTBSmH3E4sqep9mW4HpKbQtsJxfzFtVrxSdGif1BRB25b2Wzi8ov",
  "key19": "5Mz1mB8quHNYarEJwRVkigT3eSc6CVwBNTJjmgYLrTPu132PjshfwBtXg4S8wDeWPwCLn6cmJMYTGFntkd9xMaZ9",
  "key20": "5A1ukb7vDaY2WtVXpAt8G92CQmzpo97RBXNLM3SEs9JkheHsSbpfkVGJ191TDH5Hwv7wvGmkcARm83cVjfpmykoB",
  "key21": "3YefcXrPihRnKxpxD18XjCkrz3xwbszFJoMrhZEjYewnck9kFKePfcYsc8JcUZ7tYAwu8S6T4RFUbmdJdgAxeHEV",
  "key22": "2iTkYBgKGLZ5sWAKejhWSLkgsC79jjkimTX898TJbPrYhtYx8vRFJfjEY4wxs1v8jSR2n9biA1Xi1d6T2xUZe8A1",
  "key23": "5FN25VYQ2rQA6kTqAsAcBJPfKP12WzuZVbC2fW1pbC5oAoundqg6mJEARzN52uh2Lfhx4GL1ibFLopR12Zywaagp",
  "key24": "5iryFEkDJqcLRFG5NLc8XUGXPhJkfUxTyCyazdFxo1v4w1baSsS1nuyaV4JC5fJDeSc9LVr8AZYAK7P56PTWG51g",
  "key25": "3sFF6zy5LWV9Gf4y2pG3b3gDLUosnNLZeBiM1fbKSiQaRN5qkHDLqe59ArgKhaJh6NBeTEQbXoHkYAQ3vatZm8e4",
  "key26": "3Y75NsUCQnzZ4cxgWyvTaPWwmvT3sBQumtFXKua6ykmHEszMqV7GQJfZebXw6AMLnnetqWEvSm1EFLUfAqNYe5fd",
  "key27": "3ddYkjkQgVmdQ9MB4oD5EW1rJT42sKNdN8igwHPqteZHpJrLVjZvMHJmMJia2LgcbsEoKezdpXtNN83h1JppP5ph",
  "key28": "4XsUDwArBmpLtehzPcJafU1R6GNNxQnfMwDART9uFLhbeMeeQAJJxuKMbWzf16XisiJBRq1LThAP8EV4LZHixj1x",
  "key29": "3J8TS8UkVMkdTd7bGq2Mncjp4FLyYmAaGm7Y4qakRrD8HwJDAM2Npg3pi2fNCmptMEmLmjjRhsj2YAHEbZ2G4bU",
  "key30": "2wKrW1f8Xg9nKuCFGiWfgmSS6aG4Hv1B6dLm8wQ2GE9cnrtfjBh3S2V8psRXxCasbo6WNGDd9WC1moeBfNP4jvUP",
  "key31": "2D4FZYAGBUQJZMSjr6RiC4Ch3VEYCbGgDfd54i35h4LWHAKbYF3U528UDoC6qxMpUPnLe7ahviwc5XQhKzpGfMQF",
  "key32": "2ecYtEUuT62DYtyEpBt9T9WF49napwJbgxe8mwFRsNLTrZeaY2W3fL3nVSzwGYUDAXkjrTvGATjAj9Qh6nFuEKoS",
  "key33": "5S7UJAkrkNCqopeMsdXkmHwGDDkAiosJhoq4gUUEvkPu9MDQD7xE2SLXGjNQh8VwENYFPLGFgwyEjJs5zGk2VmV1",
  "key34": "2gUUpmXKKQbdA2GVJFsPUuBwjVK48QbwNC6QELaM5sd5zACPf2ACSzxBDmaqS82y25GCrYHJk6hLwZZDcm2Lcuwy",
  "key35": "2ESUuxx8YWXcmjEMBxmxZ8Pgmj88onoUAJHK3ax2r8vvd2BQFAgLpwcLMpTzkUTvkFNdnjLMcb3pTMcFenCHtWUm",
  "key36": "EWXq1YodQkkUE9GrzgratJd4X44f8tYR1LumjypZwkMB9DvuG9Q1H1shUxBmkLGLXertQYdDyB38YV6fn8Vwxqm",
  "key37": "2iN1hDP25ZFV6vxyHEv8pMPJjHga4V3Rn79ZGeXKHqtX98mk958YWdgneYrknJ3WsfmT1gNxqFWKvnsPvCjvs1sq",
  "key38": "4szwfuNBV5VsepTgmZ5dCZXEBpHG68ihYNjRXcBc75M6wwkGazXbqzqK3ZHgoULbKitMsxUQE2snK8HLjmekhYSG",
  "key39": "5tbj8VrZmPZsay1FdRBrHezSv7jUxx6fWHqMdiyWGHrzrvbdJn5VGVpocf7e634BH9fk1uUGmFn77Gu7xSzXFTJ2",
  "key40": "4jCT8mQmkrcUgPc6LcM5wbrFrkNdNahCKKon4kS2bXLAAz1x4VtSHGAzCipn9FVtaembPfERcf8NcZRwoG9aUcnW"
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
