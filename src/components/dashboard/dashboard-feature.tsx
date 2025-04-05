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
    "4i5MuFkVFgLVekWg6X2qgQ4W3fW7Wtc3JvcJiK4WPLkP5U3D5qbffAbfwLBBzKuGGSRN1SvpN2NxNiR3Ek19fMfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxJthw2zsfF6ZJ7BtChQ1rDqaTT3AErkPgqgQ1CXvEgawmLMQwxMa6eEBjfwhDJ9JoyeT8vnai21WfBFfVbViP",
  "key1": "hiW3thGzRYAiqEqmPNtqsgQWeF9PeCVwQHArxpX8gRcG9wtqTW7efffRiiCEBproHSUWR2HYkebLMrh72a8te2B",
  "key2": "2u1kdjh1sQLvkhCMkt3GQebrVfejdHJLNgCRnXKA33qL1yPxSjUsFMHcufzEmhxHFU3x1wRJcnzmByycrY7Q6ZZe",
  "key3": "6RbWhZ8qpmWix9upXstibgirkABoYmuUa5kzTNEMv1XJ2LuDaFus3A6s2ejt2o2EBp9jWCVMk3xhFs45h9hSrc3",
  "key4": "6aSYYJ3L4CXmF7oMU2FvBa5ki5P2mhjmQ7Q4VjsVCRduVCXbMnePDUmAH2TahdqjSh2RXheaLqf9QA3Lh9XRSr1",
  "key5": "4Mr3tct1WnbupUyEgBr82Z3Edq4rYGWENd9qHdaaBkobiZwfgDTBWoYqnR9EQ4HJ53aMnUk7x8y5HCwhnGyAd8Ko",
  "key6": "6yKsV6rWHJwtZpK4Z6HDY7RH7hHPh3SJcaeM5Sy1aYGWUxvsLhsB7UMnjZwSsCtGhPYu2dmVB2iALXu7EN9ZLgP",
  "key7": "QKWUAKXA9SpT7D9hXGNK5t3gCiCFXeGuZcmMNXizqTVtg7BSEQ2XVmdUMk81DQFR2R9cEvALbo4Hxzjs2am3uUk",
  "key8": "4gDVsqrupQDgsxP7ywRyQ5vJwUWVGMHYDjRZoVkAPJso7mb9LXRMRTNc9iUYJccMLZMtU42zLymW3vYdjHSvMuqk",
  "key9": "293Pc7msHBqRSK922uEumWJv8EUWZKm492UWu2KAoG3fjzq2MHRjZDkiRPfbNYmg5hHHMBDsKRnHktKHt5tDACvC",
  "key10": "64pE1pVTSNXXt6tveESJBGHL6AvnhwxUWhRxBxiGXoTyRDxdjgQx3TmnVYdLCXn4v7nqUD3ydeWTxjXTGf1rtomD",
  "key11": "3iwKKqdb741Nj5Y4HvUAwQfERHbZm93c6MphEGof54pE9aj6i1opGF7av335F4YeCMVXEuoJVgtdSQKcQDox6hfC",
  "key12": "4T3cEA3PuknS93PrJ5wQA8J5jdn1CNMorKeNBg8fYLJTfH4GgCCE1Vo8nAMMgpNeJcgVfbuo7kVo5H2icnYukint",
  "key13": "2zLj8Fw5V8cssMzma93mJgkm3emDGt179DGUJFVaWLxZEy2tQF3W97w8LwaEFFCMEi5ezeHBvvUGEHsNhAXxG7Ct",
  "key14": "ig9wqFJYJKDjdKy47XMJQYYxWcQN5A9xWRpuppQkHJkmYQ7SvsjvTgpCVLfKdGVev6feXcYPaB6WCxypnbkSrcW",
  "key15": "4yg4JjxDLL7oiLqiWVo1KgWs6JX5ZT1GEKsUMMQpxJbupva2A6W13WogdYeBSVVgxn7CdQB5jTUk6Nd8LXD2NBr7",
  "key16": "21ZncTGPcFCx3FEXPo83TfqtTjGChyBGea6gD2dYYLdHMod45guRmMhScVGw2CPPFjacvoDzfQQ1hCnnxa5VhLPg",
  "key17": "3YUFB2CiCE9a5yAFCj7yBMDAHBLaaogCXC2y4WxLcHQ63S56oUPBjA5QhjmczgEXbgGXRF69iDVcimAn31AvW5Zr",
  "key18": "4fVB7MTjP3wRyjqht6B28sL3rJmWnBeco2XM4GPWWqzY4ucNc4ktuBPBqbYa5R8wyTBWJaEtMP8JFwSL5ExFHREP",
  "key19": "3rtPcTkreKpBHhFB3u1nphkE3R4nyaSmPySHSUWQqipvoVVBh4x3PQA4747kvLLpJHrJCAc2e6udvCa75CGVrUTz",
  "key20": "2PoeAW7o4x5YbneN3pW9X1uG9Tcm7zsydNyneKbEE1rWKSNd5fNM3WjEYzaMGma3VPXyGuuX3Diy4tF6WdTYPRef",
  "key21": "4SvPyPfTt62ipcN71JqWXfoxK7DKDBfBr83DiCiPc3HR8PedQRBxyMN3chnQL1M78j7KQiqtpfYURNjUyzpm2br1",
  "key22": "r1x3tM8tTBMCxphRkwoqXrtgFfhYEWn8GcqLYkWJ38515bK1ipMP4quajFnPs8dM3es5XtR34rHvkQoLcqf2vzY",
  "key23": "ePVNKQiP5UUBf9Sw9ZhbgGmTrprfABy8KTnrTKjbf5asQQnzv221bNfuteQEsrYLS1aU4zK7fAKNfL2F4hATYnx",
  "key24": "5CS5DLNAAfwT4aKBdQZvMEreUDvtrtBYDuh6UXwrSXr78o9c8Uc2mxYwrHrBza2BvgXSRqto4graH8zuTrCYtsyE",
  "key25": "gf2V3wVfEkMNK8MhM2V6iwKnRrPGUCwwbCewG6rwCyR5yhfqpQwHeQ78tbg8UBUwZEMsaHQ3hyitPDN78Ev2wvx",
  "key26": "2JKqhS4RhpJNYNxSv7pEcGwRw4QUGuZNQAcQwkQxJxACqYnRoya7gtujFt1Dr6qUYk4MvYimckhgNR1YZ9kaSWxR",
  "key27": "4erRDisPsNqGDynaAsd28pidUv7dCtwyVvf8EJEVGHnA9NYWqL8vU2hcWUe615VHz4SY9Bwi7mbnsHhCg4G52ECm",
  "key28": "4r38XFKq7EnBmiDBcg3CFKQwUJed5JquDsLV5VdKDvYQhMXkxvncyJ6qYrXwW7vaLeHxCKoE31VEyRuhLhh9cyJm",
  "key29": "4JW24XZdrRkfp8sewoPPjuBFwBXC8nPRY5MLx88uiA9BdXRSns8uY3XQv6o4sfodYeuDJYftGQf2G6MBYVLnT5kf",
  "key30": "2z6pq4zMnaYMCknHg8qFMy9yiKvzrsEc3Wck4p1eCRuSkeCLMZSVrdr3VgzhRuusn82DWGserN45VHTagKy879Wg",
  "key31": "esef1BSwQiDAproJAvFt7xQRfx4ef2jpJV23GBLrtrNZ7GSZGPHxsodS6kamrRF3ZyFrW9u7XWXwEFBUjRjoPN6",
  "key32": "2AokazrTdaoe15Ba62mRYUDtWycG5cf3tDDGVXrE5s2Gg544j23x3q92Yg1CFT73dW6uohYw2eQFGvDzNYqFKZz4",
  "key33": "3VfS6wVRfwuXv74mVBDQEhWCdrUDhKZMWZUAjYsWkHpv3F4KYxtrYAAo4hNe78ZeaY3jj1dQUziMV58Mkx1NTLaG"
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
