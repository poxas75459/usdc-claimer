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
    "3qB3VPo2oeuknyRL7hDkXCsn3MzGHUHCRpzVGaxv9Q6oPE436nH9rmpRzdiHjwBgjb5eqeoYZDJCrgnwEr3NNegN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmH3iaeDm78dVAfxp1Fc1vY1tJcmE4PHk6hqa4e3EWthe3VkHxgLYdLz83SCVS6MXNeKph4pN9P1pwGHc4LzFpK",
  "key1": "4Jpye1Sa9SgMCNdxm78yz5LgZHTxEAH2DDDBJTh21QdLJYrqwu76L42oAvMjjuSncAUC1advWxDMMU9NJ6pTLvbk",
  "key2": "XnhpvxkGyRvLDP7N78m7biAZK12hDE4RmDdsU3kRdkek62f9mRXEpVM7RGw1KEZnLiHnCHDwfaWUyfPuZVw3ZRe",
  "key3": "2s9PoyYDFVNgJATDkhRwz5YkhoKCB9rNv2zckrsmvMZWYMsYyKmL3GqtShn2c4fd52WftAsjxTyXwhiuJmu6AeUd",
  "key4": "2Q9LSZKMGth2FnQxuBneMmUP5Hg4xbeE8vmApPbpL87ybPbkMJmrBMKtQ7ffiy3s9AmuMm6j5LPmfNDtUPsw9MQZ",
  "key5": "5ByNYrnm6vdPTfgyMP522GDVZh83Ji8jnNv9CVvVJoDZPcqWAQMuNtswF79oG8BBoZDV1whEGeVVoDGyGLiJCQKs",
  "key6": "3ySjWHX2iQQQ8aGnLx84vCHRhTw3kSvqrXbkoazJ2PUg7LaAz7ewz9oNSgEsZ6uNFHzfb4pm48HnbQG5FVXNSGeq",
  "key7": "nmoP375x5YpixnZj1kpzoMiB6L4PZDVNiCpGt1h4gFx9ZLTx7JsSSMy4hjbpCacDAVkoC3Ktk51rNTqWdQPro6Z",
  "key8": "5r9vY5jJg9fFj9NvKVMhxKkxMmm9PFmHSQRpoKRLc3U2xmib3qVTA8hzm3cvwhtBrDtp2DQeErdGNjnGCNsfDwJN",
  "key9": "5FMWiyPzSvKiUgYur96LF7awCEYhMUckd1CZoyywasuu3nUj6CMxd6sNgY6M7oD5eZCPc8sKhDLMSZ8Bynu7anU1",
  "key10": "2KgEe1RB23yqyHVo8Xo47G8MKMGQecLTuJb36iyzVgZD1UCgp6D2mVoYAtjZPuWqnDfMjNETbjpkimoiuGb6BaDQ",
  "key11": "4xrqUXwFUFk4Zq9RAQPb7eidXgT3DRd18p7Wum2bjzvxqSZ5eXt8gkY1gKvyQSmacnfqEFTpUPQraC9kdKa2BmdP",
  "key12": "5egSu3Svt13SrnQv2W6h46sTVpz8aTBtMqkchWJorGgkcLfhf9zELP3MRUYmsF3oxDiZNJ5EsrfrCKbr1vN9KdDa",
  "key13": "zqq1gXJi1zN3G6WN7AxBBFEi2UfeJpUq5QU7gZqwtry7h5FDsAmZx5RKHsEMeL2yrC89t7c8uU6ixpECGxkYA4M",
  "key14": "Kf6xT9EsacDY43m9h6bksQmrjvpxG7oL4V9gCB7hY4yTiUNJvgkuGoNxnxLTXgfJoHQCGc8KV5xnyjLMAyfaiAE",
  "key15": "58ZhdVjRCrBpa8GYbZBQkxgzy69yKEGXdNizCbLN4i83unD8Nss3aZmEUWoeZXm6qjsWVtXTATLnZyc9PLGNdny1",
  "key16": "4AHJqG9JRh8fodrd3PiQJHRt1K89FH5chRLecxaNKn6h47oV4EG8qixx56ku7YHGTPpUaXcfFRtzmLpLsR4YrNuF",
  "key17": "5tpaTieW6jdqnPRqHfmNnGo2Vw8aoiWcy13g6Me7i72tG5JBBrYXtRtQtkmyzm99BfYxatVZnHRrixGRxy2zuvhg",
  "key18": "4PN6KsNgoPDLWaibynWvaW6yWSqrbzngtqAGDW6jxH7CDNRnXrK35y9Vuz7JK7e4FhZizPn1yVGNQq9xHPKyhCQf",
  "key19": "47X5bKqcpnuQFoNE5DzUHAWitb5dc9UGW3jpkCqN7M5mmR3ecrJ5fWicxfBsJdQRuschqCJHbgsSpJu2bNHG5ocj",
  "key20": "3RBwciEusGgNPVwPnGoR4X9DNxk8Cf8RdagRBzAsvcEtgT1iMgWkQYNkM3iBsQL57FthENv45DBPJq57oJUmy9XS",
  "key21": "4gnMbFgaBfCYbLEirgvHse9APR2VZ2Jg11mHv8x9UhBUQAXQeAWncT32VUoKKTAy5WaThxdUnBvn5GGvZAE4kCHg",
  "key22": "GT1UVaJQzGq2P71uHDJnqHFYD9G59U1KGYZtrKtTqTrvgSRCryVbgSEgtsVV9g2sYdvvDLcLYNqup73EDZxJDcG",
  "key23": "HZMV3VG88veWvFtTN4Fdgs6Ue8jW49LvK79tGg6SHoHFdTq9mMCYRh99NmGJgyYRMVc8Ms9csUv6JiQ3Ey24RDg",
  "key24": "4bg8vfY2uQpTVA8n48F6MmmYZbNH1WbHwLbtMfTE7Zb8MPZB6yF8f4xTTU4w11oq3tf9mFEGLmu1fkDu5FBEYbBF",
  "key25": "3ARYuQ5TUgpPyLtzVoBPANDw6PmgHHEdqVu6c1RSy4zgzXdMbpCCUyreNMpapwpwsMeZSjnSuhh7L4cgZ1qpPPBQ",
  "key26": "4JmbkAct2tKf7WWdqHkJnCV1ziqx5XnuoAAZLPkZAiNHL5nUExqajEEcM2arhxSeenUbsqujk9xREuwaVwLUURvW",
  "key27": "53XXJxTyJusUTuS7vxQBoFXnaJw5W8mxcJds6TNpJjqBe43hJLbFzMR9Dt8V5TNaf8VHmPnjNYnwwKHA1BS3AMj4",
  "key28": "4BwwrmrhugPLk9w2Lv6vQudsfZSoUdKfzai5Jenp1J8szajPymLBGqnsHLgDXDDfwpoKbWk7a6y357Ldn1covGLz",
  "key29": "TRZxDANdW8fVbfMncPhbZgoERgnicbeVp4KPtsNdVZdQ36RGrv4LgAsmPjGhtbLBCaXCcMAiHf1LmGnJ5Sod7iY",
  "key30": "4DknZScRrJzyLtwHtcYgLntaSR6J5kJ1CxjFEaNrJF41qp2ni69HoYoTz6EdkigCFHEmxShQge1Qi2DaLSEjTXdf",
  "key31": "2u3sGFZZnRMvb4vDChpkC6iuK3WkNbtdqw2a9jh3nzvVBa9Sb8Z7ZqTMc63cCg15B5JY9nvrDcJfYNKdWX8Tbrdw",
  "key32": "5prhMhJxksqQi7MNZi1qzvcf6AwQEjNLonBDB3XRXmHHV7k1VqEmQ6a3nk2RfrpR8gFVvNm3euzCV5r6w1focrRq",
  "key33": "4migPf4qcuayuEaehPLXz8nGEeN1sNtZnicasE3xevgnFFRmm8ukxJ6kS7WT1aWQfGp92bM6H2VCHTpCSpwUokJL",
  "key34": "jHzTz2UVKkmJogLURtdfKSkXsPi7ECv1UqgYzm8zn3pijYw2syurvMKpZhQcWs5BPGPmriKY44sjgwYfDmiKu3p",
  "key35": "4tdJZoBUSyeHhY31WENp3cJypQF6hp3zmJXQ73QtKXqKsPwAPvCDFwwmCeTLheNVswsKqBhhBvb4qWD5t59pe9fa"
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
