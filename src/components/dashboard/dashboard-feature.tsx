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
    "5mF5L7jMd3DjuD4oAHyXsFCnZ2zP6TPZVLZeC2KtQJHhfFSrMwGVCfH8zPuDQtzicuUHbPKNdDgBs5qsJ27hcDbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7hPkVP23Jou3vin72zvTwX7NVKCEqBebxuZWCWfG9R4ou5yzicMEDebN8ZPGM3AqJMwKToB2HUxuFxWqBNqSh9",
  "key1": "5cHt1xGt95cqMBcBXUa8taKjrgXU7cGpnmfCARrVrz7h8Kn4BWWE4ngnhGJ33hQDV1E1AHiBagnwGyHS9UBC8XQo",
  "key2": "2gxVchN26N1EVCmzcJ6x1X2RUBdjcgaRpLDVh52xv1HWD168yHgB4gUjoz8SoFcFhyzU9S7oxwULLRbLL9nJwbe8",
  "key3": "5BFxfWD2b8wxK4STNCs1S5k4eRKV7BAE9ytujZ8ibztEJeBoTaYF1msShNT52PXcAxcRVmbK9hcF1oBysQjFvRcF",
  "key4": "272aSKrFAG5jQruAKRjbDgRVFYGcxDQqJ6jDMFFvuHrJoksKHfpQ1zmoCUZ6qd5tWWjiWBZ8JA8Y3iiw7BCtfCCu",
  "key5": "2N9HMwH7sMvdcNDSqcNBnWS7EXstDu2Yazkqad7dfP2VavKwpQV1xSnxGpo2EeYEj3dHnFriia4wyU1QZh38zgjG",
  "key6": "2ieeei6cH4M2GQwMxmCHpkAmwLrfYfPoCvYecvZuLchhErmkRdPeRwEb4WHWGVoVmH8koQJnm2dnFmavzPC7skk2",
  "key7": "KMUMLo6HsfZuQon67MgnX2fUzf1HR8XBAAxRttVQafnBe3F6XxxRBPRQ31Beh6JNn39RishwVgGcqR6Xaj7nXRh",
  "key8": "5pnSF6HMawFykG6kdxUuwG8q2S9hXo8VHqqPrjq9RXMa9xoXRBLAiFf8G4PfyZSWYrRRpCwBEKwd98KLPCffhhof",
  "key9": "4RSC9A2ijwUnVrfSdcjhGMDZ6f9YGGRmFaxYTKkdrPmqYDpBBHx6fYuEJZ6khMCd7Po9srTvQWiFWNL4KsZ6gAAX",
  "key10": "47gjL1BaFBt2uuKogDucL1zBysDJbmjSsB5cXL7Q7hGeKcm75EhdHaX69BRfjqgJyaBqdKikNbuzakzhTsH367Mg",
  "key11": "3tiKzSYed2F1Wqqkcip3hUZb3tvGrQiaXYwB5ReKA4MksFgAcrvvWqDc63m865TSXJjnZGZD2jzgG7aNmigPoV6y",
  "key12": "5sY9TfnZBoLNk3FDz1XTX4NktamPtugSeqpE3xSpe5q1TkkZimrKX3pa1s1Wm4uJEtbYL6wn2x9cJNaw6bTKKc8a",
  "key13": "3ejrRZ1qEiP5ZbXP2SzJw719YrSsF1KGy48FXcBrmPRWhkRezbhG2xxfL8PEHN15nxVgkgzsioFHRgeQPYt43xvx",
  "key14": "4smYcAx2mT23MqtxtbD1nc8JN5tELP4XhxKq31RLV9WNM65eXRQHyWNLfsVryh6BWEdTUEVdduujhykuchBRehCB",
  "key15": "59C8sVAXAMXoWohUAsqVC7modXvd89TpSgLGukG5N7Zr3GbKETXqj87tcrkATF6zni1PXoaMHP4qxWviTG1pMnPH",
  "key16": "iGHJeD6xqgjqnNEXvftCLv76kgnfcbr4qtQmHzHAJQbR5TVur6mJXKE4wS9dS4w2vszQTPVvjjQR7xRPqa7v63P",
  "key17": "4QZHSzKfj4Z93taSof9qurDBPMSgYXjii7FhxKRycX3rDtWspqtShfEYCxVu6LhKAMFGHtQK2v8a3VDaBEPx2fuw",
  "key18": "4mJtujqqzyd4wzU1zYo5Qu4vGEWowdVgXScujK4stDgM87niYdrDAfV9iY38ofsg8mwK5hmdjVC9mErvCtfEn4bs",
  "key19": "cYFK39iZWweSFFAakyUDdwRnJuMfUNR2TfP376KuUSaXvGxe4EVGs7BWZjFVhzTxAqmJd7UDp9qsrYo4K6wTiEy",
  "key20": "8D9itoWpznV1DysqVqanPss5aGJbReBhDiZowxq9yY8qnod8ByYhmTzsZQa3hofB8xDASCEPGXPGuwsabTMr12o",
  "key21": "4p3yATq3MSMuHDzFTbZsn5uR6xUtggGp25pQbTdK4WHGL9KREvprmsp2zv9hJz7C3SDUPh6D8edZ4hWNRuGXxHKT",
  "key22": "goQgpUKgcsAcvzrxYHTU9dg7e5ZiDw2AhwuWi27SpqzH9jNdb4jazHiR6VD59VWrCdLdz3esvN7gT9ymJZQB239",
  "key23": "LJK9dmcESKBURFrUAnEKF8m1Muf6TxgpdhjMTz1aYkBo26R7yBwRwvXncfEisNGZ618J2Y11pzCQ7w5TYejVuEh",
  "key24": "2m6mMRGzjj6NkSsb7XjPrEfoszfv7cH8CtWFpqTd2XzXYduFkgXsRVYmLarsU1qModKX6treeYyxdSybRNwr9xTr",
  "key25": "3kKD5vbJJEdBhQiU1WjAqRni4STLswgrBCin2adGpy7zHZ2zHTJRCHpUZ9f8PzUXhULnfRSwBDbithDzdSmLsUTz",
  "key26": "f6XT1ydnCoap3eHtxRnd5sxUm75AJFVfDcvj8tzr7jmr6KxFi45FcK3AxPUDSrXB5vx5PxnyjYvXkBztjVHWmxF",
  "key27": "3QHcweeHsvjcX3mnh1XT3Ps7ghAiddXEoJrRK3tfQamXyChtc4pEZoDZ3k8x9h6rD1vPZ5qmukFHhvGF8cUCFypp",
  "key28": "TtYo23Cmn3cHoEtPpZpu8QpJUgMHxUamyn1U7AMVBXd14CJDaYN9MFU71VYWGWUBjRybYtjTXXGSdVJY1Yg4EX4",
  "key29": "NmYNsdQV2i6R3ojc6ZNc5RBf4tJn712MXPT1dvqSWdDr6eZcs2vuuZm3N6RuyCJZ5erV2hBBSPxCfeF5nHqde8K",
  "key30": "2MWcyeWW4ruJfgxXjSyFLbsySapnqMF89MBpDfrR8V9NEXZS52w6jZsvE3gWjDcppAzeRho2K2QpV5qAuChqCnR2",
  "key31": "3Kq6gpvDvwq5TR5Er5Zd4SU3SURZUurBWjfSWTqSdioXKeg7jqx8imyiEXuLsiKRL4PsMDqFP7D4gGEb5WuBQh3y",
  "key32": "5N5bsZNef4msDwHjQ1xVFehXLLFWS38WwxcCgTvSBpAEMr1v5LZqQaoRv8ukvdY5BBau8tpB3TRbZj38Gf4qnqsT",
  "key33": "autKTtqkwcHuxC3sqVfVY4JrtddxR8Y9E9GrDQZDqZzYyULYABbYJVbGT9XkXPzBs1QW8wLTtpLRheTDYDAyC4r",
  "key34": "4p8Lo7ocV8egiyAgXeTMhDkcHr8iau4cii24fxgomt1eiH7hnF8FfeGqQS1wcRY1WDc1zvApHmVm86YFTjkjXcfa",
  "key35": "4728ocrCx6XH5k6sGwJ7YLorU5qGJ6tuxkpUH5vgroKPHTvA1RMEGAUArveFTgL25k5BDzujhTG8YkqSu3ckrRZV",
  "key36": "3sPGzHUSKYYRZFF7JcoSK41R832ARFKfoyWWgAoip9MihNojudqhF1pnuTNXkUv5ECPQ1q3zb9kSfig2QEYdk2PW",
  "key37": "ugsTr3syhaAk7zT85iJYYG2ou4pR1UM4o8PDMoXnub3UE4YoFwLvzL73RZAtPbbLhJHsW9aKJ2zHUbHUVFzrH3i",
  "key38": "3xTEQMvrxk9reAZX45kd366GzT9fYvjAuX6U8F4Yfo6391rjmpxgQMCqSTVC7YtACqXgZZvY6nHhRFw1MbSkrws",
  "key39": "2Yjdq2LoeqcJTSjTuVmU5FRJSz9HXuAbcXf6yHLuCWAoF9mREkyzdRjQMYV6PuxY7amvjtuaUWnuXmP3LdMViFbm",
  "key40": "4Z7ch6NjzJNcRkHyubdphSCVHZ4jKCe5somwuLydmqCBS2EyJtnQWSXCX5RS7R1Am9FSaMbSrCVUK7RdDYK1QFUW",
  "key41": "amER6bEtentERC2dMC2LFtzkMhDxJ5bDGUHTcoFxn8siAANUWpbgibbmMev1uFQnbJnuvSLvzy6ghjxQqNBkYyT",
  "key42": "2GGGvujvhTeU1jCxBPkSix758rMaz3dNtu1Bmp9Bg48rqE8sZMu3ymPAhxXoDWJqc3fiJk8mZAEETTUnHSxnzfyU"
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
