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
    "2YJLg7XyFFJbKyhUCxuJ2ETp8VJpUx3DRc2gUDcfuKygJ6cNruhAv5tjz7FXoYqurb1xhQuT35sbYQeY9mTa7KUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QzSeVTo2c9jPWWAD1v6MTf1F3Af5ixQpkeKwzRJQEkaJszHy8SUeefNqB3bxxZsS8mD6G3vYV8864UvAPEsSbR",
  "key1": "5KGwm3YZKiAEcrrVDFzttex2q5rzBC3U1tciMLYd7fKbc5YEBKXiVgPD7HUK8g4MFpfPiA2hkq3GUZG8bKxH8CBE",
  "key2": "JiK6r9MNjrbQyMDuzwBHA3J5J4Akc188Jw7C5Ty13hSjGWz9Lv9cVHUQ7ufJB2nJXMPGSppd5uKq2YNrEA7MsaW",
  "key3": "4nLohexWpEPAgDD1BKybhzne5jPeTUsodnzTRtvKPjaPLrQWTYSKyNw8AowCYD129X2Hf4CEeRXkjwtWheyEYNTc",
  "key4": "2kpCZmSb9HMQpN5LXhAFQQA7re3a9VzZnyWWTb82jeccqph6kF7Euz3SWpPoNb8DsCvi82h4sXhQZjcQBqUFibt8",
  "key5": "3doCimZBECheVxzUM84XKHACrPoteE6KPcVik7AoQ6sxgEVgrhbp13wxSxEBNShRPa77fRBvXp3pXvfxWi1MMme7",
  "key6": "4CeYw8k9G3KmDpA2yARkXi5AiCRGax3NLXvrfAkjwPbNQx2BYQb1WbyMovBLCXomH6NJ4ECgFWDNCgSAG9WGEesz",
  "key7": "3WZmYAM2xTJxcUHuEPyu79pcZQn4xi74kUAa8zedHkMruMongDWBRUtyw7LNYSut3GuRGKYXVV8PdUKKnBy9Xtm5",
  "key8": "2BbGDLe3smu8LoxEyf5XTgCo3ck4i5gV3zG1RQaD5XPqUyNXMVR6gSvXb4upW36GaJqLjhXGHYWRYQBLL3W9wgQs",
  "key9": "35NfpNpK6aNrC4T7EusyoWRgCFZ9nWMxQnahnUm8EShVieKAXJCwvhF7yw9DsueJvsVzabvmwhvJUTaaxpRjtrNh",
  "key10": "5ug8jLRZLGnEEYG5vMCuYiepS8mZTZh5hJtcuwMesE72R7aKgmMY6GPR4AdRmRM8MUyZmvm17v4V3eQ22zPtjbzB",
  "key11": "2hUuJbRNRCnBpxYGjZTJGfsnsNvPaaVuScXMksMgQH4PgNxHWYi6TMq5fcLxuXZXoiWcXFUVjC4NPuymeV1RHy1k",
  "key12": "3Pcw9x1kqYJ4646jJQ69GwhmkF7WjKwCu4LzmZPZ66z8PVqosnBrTSzzoHUYAotZr25LFpQp41woVTcHfYH3doRQ",
  "key13": "2Du51FVMsNCtdYrMBjanuh4kCyiYnKA3HQNANH2V3ogckQGo2eDwqE1LwNYrgRLKH1Q9VeDMQPizpb6yS9kn4YdW",
  "key14": "5TP6XuitgTnD79ccr9tgZxHQzNmzGuHxzSVLoQ7ubta2mk9bpfehQoZYJj8nCMzLAve3z6kWA4kz7LGUsGkRLmYK",
  "key15": "489PGN8HR5nLNB3dUaf9vajM9ts5X65YxGZF77xmpGLVzfPfqUSRwVdHWrPeAAGvuFJKYpwQXfbrmPuvAu46W1vS",
  "key16": "3MLkTfTjxXUsJMPnQBayemzjPqBCGtiEHfRjHANot6Srm2yspeGo3E9U2pRcFBUL4oy6ivQUbuMFGXsr2m2attuo",
  "key17": "2iZX3ApgAp6yohLMjwA21zWrBBJuqAS8SA12prVAueJ6Li7fVYvugi9t9yekfBbj6gL5TLu2cqzKiD7Jh8M9ZZbv",
  "key18": "PiJHoiA9mewDbFTLzeYYRAaiRRnCqLRwe6o87HaffpArUvHZA7hXDjJhdaepmfKdhgvL6bPs9watxM8poNEDKH7",
  "key19": "5xdzeyvAZhcGenT497BtWJpqNsrRWKYQdHJfkurgJ8PdbGaz4pxk26V2ja5KW9kMydDp6Pp6GySawJFcgDDzXb4d",
  "key20": "xqfVyCETKFdakf1E7MZ3WfQpR5dz9rFBJmE6gvRXJEVcTptYL2Ytm9L3jzqZthktRG1Gai9BucY2sdnE9Fg4tue",
  "key21": "3UVBrNuRDPff3xyeuwpAijnd1bwL4Pfk9cTNKe7KeRPxzghdJU95UoeZh7w65LutTc4JzXiKN6VWLsZJiixfttK4",
  "key22": "5gdKGct3nyio1oYt1VHTxJNTxzRY6vAxpbQWzyoyBzpZZk77RvZQpwBW7Z9worpB2G5KfyQvLG9WyEqLnvnbxeuQ",
  "key23": "WVfYCatoiMro2QREdbY9ZfCpT1RfEXLG22NLmCf6hVBFFS8EWTcciCxmrVgmaPdNpBuPdeMkzocDMTGRzA6ViND",
  "key24": "8Na5kAB6SiWrskEcX9zaDgxgL9iceF2zSp9J5o3EKdt8izrhTMA2HrKRqWFyqjiDZFskoAgvmWSafVjthezv7m1",
  "key25": "5AM2poRVX683M88s2ihTUsq85rm9MLxmLnkf9FPz5V4YeV3nSBmK4cqqeUxqtrA1cBihaULupPSoJygR7gRLqbAC",
  "key26": "55qQ8RGTYj8gc1VjzRTsXyqUqkHieAiEuM2CKC8oxVrYQFF9PLx1mmkd3xHHf9QGo8PQhpqpKCQrzjrgcFswXTT5",
  "key27": "5gMmCK2QRwq8kN4AYj9FHPPrMexiKFYpRe29aD3dUxqFFpvgvQyQqvsADLgf8n2zvXAYAsJ1a9ZJgVyryBGod4je"
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
