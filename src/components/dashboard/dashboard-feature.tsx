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
    "5gTiiwBRh6cDLWk5FLDZgSvtWfy3Dza1Vexbqbj6KU9inTVAxMUjbY82nBAkgosRiLRjebbVyUVVqY6UpzzrKPwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQLtxeGeMoKottqU4VKSDaFJxpEvozGuzEcZHAR9mbsvJhuM11nRhNmUPoiGMdyvaM2EGVz1EEYjSbyquvZM2D3",
  "key1": "uQehn6jAhEPkXrUtszL4yaE3WqyL2ZBJjopuyyw7Bnk8UUFGU2pNetAbvhmLxTeRWRkja3Vyq1jiFje7TkzPFZ2",
  "key2": "3EsbnThgLYBmnhG6eeGvYdqDtEuV23B5fKRS2S1f4frJEZC8BHhej1UDHR2pHWTwp2X9qyZm43tbQK98iKmhC7CK",
  "key3": "5QyMypwGkxpWpXrXoTU1ig7ttZUwJG3BrEhnMGhUVHeNKShzFDvmTQmm2h4CMD9PJ72nmZ2BoqKPZHSsFFp1RHf4",
  "key4": "3afbHbniRYhHXszEbXP3zqibMcWzMsYcMNAZeQuxf3MXyyAZ6zFqFpHeohuuHZqQawDETmQfQR3jSXLFXDUB5toi",
  "key5": "2nZBgotGKv1KZmWUdmWXrGoTj7pNLbUUmtEGWkFdZKgnwvaQCimztKAViX5dKmx9VozFnDL5H6Y7VzFx9UFmnKZ",
  "key6": "mG78KL7LRdqFj3rytJ5TiHTrwqey1AU9kQyXm18Xezorfw6t3ZoBs5eSb8gxAuG5E2uzoqL23TrNkSMiPxQgu6Q",
  "key7": "3b38G2xAnhvNEKupDMuNBPzaG5r9TyYdToh2V9wHaXjsGcg3MiEREpc8Dum1tqBttnpU2M6tYu977aGrM69ZjDVa",
  "key8": "219fW1soFeQkiMF5fWNb4cJ1m2KD4BCFVSqNK4VQ3LHeU9zonC1cgVANRn8Vj7FSrN3u7j1WbqCFtMswUFYKZc9d",
  "key9": "2FsEhhJvp5m9nYh4zYWMaQddS8sRgJg514TzYChjnRcD2R4X522KWvNbBKPmAo7KQbcgjvoCZcM6fZbAaQ8RS65B",
  "key10": "31wGNmts24u8kZmUn4RgnGnfXxA9yUYdMaBeneEVvFMWSt51ie8c6NTWe2NfghZWNMcfJkFoEhimFtSEBikL1vu",
  "key11": "52LCjmW1RwBnSj6M75auSEzFVrh2mdv6nHLDDGc1BUFcBnKKzwdr5U9Dp2B5aTkCy8LSyx4X5BpCHSFSJosLCx4B",
  "key12": "3YhqVkVKC5BVRK56rvy2YpY3Uq1qVSpHGWmoPbRoAPeA34inqF6TBbP9EJK11sx28wFhq3Y5ezm26nKjuSPPtx9b",
  "key13": "5aPowHtvqfHRQPaHagVq7hgMzr4FoA3rUidvX3VETvN2eTPGbsNGuucyXr4ridZGCYQDmFfBTiZ8PQmCAGBYATDy",
  "key14": "3Vu16X4aPAFD4NjdQR5cdVb3Q2uaCpsop7b2AtrF7DrkhrUYRvrdd2f5zpgFZUV6ACT1c2FWe3v3QcQWwTJU1wBx",
  "key15": "3QKhY4KPwrC3GhXJtoU1DSjK2KwQf4qMPrFDgobVBBDFnXox9rDWEbFfh8yM69WCNnt5sw7zZwBfvh4EQMEcnH7L",
  "key16": "3J1Ma16jgh2uJNU3En65xcsoD1WWCzp5KL65p8fajZj4dN5xNkZTqbLmzmYvgHjR4gPp4TQp9CX8SdHQygiu8k9B",
  "key17": "34k3pUj9A2UpTkYaQjudWLHjHezbZhgohcqAERAaoCm1befAiqpJE8T6MXU5pT7cJpRs2UMCy5sxQc9RePttmEM7",
  "key18": "5kBMj9E9SViP7WhFxxh8vTsjJ5wUNt1TbHDYLy9T4m3Qgc5osv7aNt4EVESvNDgpXa7htcScCjD9ZicJ5y4FSJyE",
  "key19": "56yNjKSXraupNj5kUhgpbruovcamcLMSC5H9BHmwLJJvhGYAeJ3CVWr77aJVaJaRFDDpptqaDsZo4jEAT3JKta6S",
  "key20": "5rK1rBhhFARSbJXyJotsQKXuacy76r6PdzsL65Ng7x664c2t4ggLhYEQsxyB95UNEEMVw649EXTi26FZqBYJQXj1",
  "key21": "4ip4sq3bA3wYgqvZxkg9wLVoS5mikQ1sa3xWqEs8nj1XZSzmneYdCeoUF47uU2nKYAt6o9DZCvUgz7A4DvmiAGzG",
  "key22": "2yYRhSiDEZPZPgjXU5tk7fUizwngnh1A4wZrGrDpYHnrm8oRXoKBEMby91Waggo9ep57NUhbENB9NtkvdFBTbw94",
  "key23": "xNCLtx6S84275MtuLXxhnfWHiK3RjqtK2mCCRfmhFTjcSqsJrFCB6M9qNmzQMiaUiVRpZLguA4Xa9x63ntnsbhL",
  "key24": "5SQrjEbFs5FL7yGwKZvPf4Rx4mSsfjJTXqekhXhx1WnbophHWQfJFL1aVyWBmPRvxvFVgwHNzbbe8UjBNxqM2VTE",
  "key25": "2XaugWqB28xFBwb3okZaVMeKwan1ksm6Uan7nyxU51k1xE1CtVaK9sohUVwmCUCPn75zi5GYGKUjukfj5nE7qVSB",
  "key26": "4ZxxcMZHWXi2Dg8H4e6JBCEf4dwhtbSSSi323rtpp3z6EuaPCttJkd8QhuoZ33QbATjsDap9uyX8NrwSKiVWsMoV",
  "key27": "2bAuS2pz1BxRU7aPMaHBkLoX48qu8P6u4gh2nXFAdJyqf5irdgdBx8BwDwYpHvk2GG1iYzL7UwnFeP4VmySyuFTT",
  "key28": "5bidFx5u75eHSytkEwTJwE4jV4Z3WjsdzDo8ZHvQYU2uEkyGY5hTcTK94q8aEk18dMcnJE5CgjtAuRUK5ffC1QtP",
  "key29": "4RGBbAeZCnzJxWCbxsFBgRdRdK2pCVJg39GVDAxfWFMSyDsPEXuqrMiqMeyv9iDQML5QTHLixBo8jBzpmToyCqns",
  "key30": "2XoA5XbPc8VnudwJWrkd281nzpxQwVeeYSBwQweiTGwkfCDixLosUfMSMtSAXjto4d8sAgT7wR7kYoYEnRopaFZ4",
  "key31": "2ZS8grUupHquodbSRiX8RNti6scbYFbHGtZb6y7bTxpQqrvQxZY891GBsZv6NBy8VTbotMYU6uh811cXxxKGydwD",
  "key32": "4Z2gZy7PBtAJuYS3ttXRN32NzihunRUzMW2FKbuiPc6uQo7sLoQL42uvt1Tex8mxEp8vK75jXd4qSiGKfpXfNozM",
  "key33": "5s5gbybiust4gpZTvnhGef3NEniZ2my6uwQ4qXybhnsoA25Xg648p3yATFUnkfcPEX716rnfG8fgdmCkH36B2Zx6",
  "key34": "3hE9rXPJPnGK9cUAqFqkNqEua89bRsQXh8QnhMec2ktm1hx9EKz8y62dB5nc7D4wu67LuFJvcmkQgNRyJqKrV3r9",
  "key35": "5hwuG4rzN4ZB3mPHtSWrWPtRJ7AMyshAa4xVzX1AwrZWy8pcemuRYtHr6ZxGKnRXcdHD1tR89a81P2MGcEHRFf9q",
  "key36": "4wxvMqWWgNB2ayev9uJmcn2HipTJSrtv5UA98MhTK6ZrwnCN8EE27Sg3k5FqwxmTw6Y7HSsGamqLfrtNp8TgAyEG",
  "key37": "3YjbwwyUbRQMvj1EaKhYiCpLX7WXrcTEShVcRHWXa6xwmwhdc68LrGZUhtyS3esYos7qYKt1Xvp6qHjxpj6o7QUs",
  "key38": "4tBLckxQ3N8oEeQiVNL4SnLiuaHN6WLjYrb3P7FSAjgNNvwAkKbKiAhL5A8pHYErjmasyYazzmh51YhvaAbP7Nfd",
  "key39": "4Bbst3uftTB6Ht3mHXiom5TEEmveBH2DYq6My8a52T9yVhvPtzeDF1W9Jwbmhkpk5ivbM4UAARtXDvoEGiWKVWms",
  "key40": "5s7295mCa9dMyVLvHJ7Re1HsnBR64pAuQkiKc3h7wqeq63a2rgtr3NJDyQm47zmNkbwn5qsYNWTgaB39qy9gX1ku",
  "key41": "axHTpXjfM5V6BL34tcXDr1Q9CGXctsytEJmpTmUputbDteDtKxCYya5EeuA711BqACKVHgAzrMRqRZGdN7ioKSn",
  "key42": "44eMyt46ubqMEzF9tiTun7MdpJThvtTHzdNyo4Zh1eSYtLcZSdF1usTB8WJGo1GpdjqAZzRStrfu2f4ZvDSavocC",
  "key43": "3yFt69f2nKBo2wVJ885C4XYjPSa9KcLjaqD9q7enuVtcdXGwVh3ucuPi5Yt1DazyG9RwfCsoCzbicThLHLwZNwjB",
  "key44": "iMAKoUmn5SV5zZHpk9CdtrirmqjFTrLzfZqRt3xANk6t25hWKsmjQAEoDGpP8Wx52mbuhheCvVBiLinFdbqm6i3",
  "key45": "5qn2P15tTNh35TkcC3XG6PyLAjukYc42s7otZNpcDnrpgHmBfZU5cUqh9mxzWb25xaTRMXai4dgQzJS3DNJUoBNz",
  "key46": "y5XrfMBkU1B1jGgK8fmMAkGCWSbjTFYPjyAPc59ojHhf57PravRvvPwzbJPCjCrGtBTMBSzvPqugp2Xb2pbSnLB",
  "key47": "5SWS96pkhCXRVTTpBLoAJ6wKtjPRN1HsXBTv7zopHDndURB4TN9nBjToQgYmA2pSoJ67bZgHfZAnE3zhT37yfEXo",
  "key48": "4QkMX5Qb7NrEBzqcuffABTHgkoctjkVUaLW7kVw2SCRM5i37hZXtdna4r96p7BuSCs1SUECZfDAwBTxghM5SBYMi"
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
