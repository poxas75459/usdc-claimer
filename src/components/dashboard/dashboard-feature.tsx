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
    "5B8ac6BJgeWoTckABLkh9fF9qsKhyp3Tt3MuQ3KZLuUcxzGoKzhsfo2os3nBGBBKwB4UpX8ZLyjXcM1wVitFrZd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAcMorNd8Yzk4yhutNDzQ6JDvwMHE2oRi67MHaLdinFyLy3RHohXrhog8Rm2wygeybZAG9NpH3BsLiRhPAaAjrv",
  "key1": "4aCo4BAKHGetW6Mbp86jHt7MvD4iwq7d3mn1G3Qphz9f6hvDfmrPhi4LU2WEEzsQazsXyuSxpmuztfXLvHCqxPZ4",
  "key2": "661qYraE4AwmVCKMyaWgENcwmp2DxckBRERwBXDcCJUzg24XKz3f45WfQi2FGFcKKHRm7UGkvdJDizpn7DEtWxAD",
  "key3": "3vfTKJQttW5r6VquYNHL953PGbajvWnKruWv34a8doB1faTmRbK8XXcvz67iwajyHife6yLgRTrHpvUisHJQqNst",
  "key4": "2cmWJndKcW5uWoKkD6v5xaTDmuwzAoqER7GNKPSMVhAcQ5fGw4jZdcPSRkN8yGpFHoBbUc4vmFHyrXXJN4ZboZ2U",
  "key5": "44emTY5F161ePFXEAmjZWXchxaVWUQLc8Y7TMkSe8kAvs8UzLTzwwnagUnYSBMD7fRDUUFzoJXj83xGcaNccJpk2",
  "key6": "2XZxbPUfhznR7XxEbKgg32Wfg2ZmKzgGo5YFUHnR3MxtAzxfCANCMN94hAg4pp8Nqbzo6RkQF44tkPJ12iGmtMJA",
  "key7": "27KgPsxzvjp2UNRmMcaQed6Jpxk6xmvnLBw9CnxvbA7g9YB4mUNpKP3ApcTRDDdzab8AySvii8Yf1xGtTiegbkHG",
  "key8": "5momRrNfnGELDKwZ3J9c8NtTt9CsZdYPQDKEQAb782DfEhgYNdUTV9Fg6eyLJzt3boYn9hCGhAEU6MuWgd7EQvbT",
  "key9": "3mizF4ge9a41w8VCDgtzjDhG8J2okaF76ToxPJiuPb3Kdr4g4nS7n59MZS6SVfVxf2PMDy9mvBUTFcSJdN1GdfQn",
  "key10": "61CgqHaTo8VMqfgLraeKZFFnKMLT4MhHGTuznVrVAcVnEdZWvbLJxn2rB8tWwbrtPWpVEPw4iUZ2HE8Tp8uyp7Ge",
  "key11": "43pJ8dc8tYJXVnXSGQLth16maHpzoTHeYufxjPyKKpSXLXCsxaYA17cKTUfa57rgqHjEsA4NLoo2MMXqBqTT4DHW",
  "key12": "61Sgar9jwNcbggDvMmKyb14i2hCk9bM1Lqf5L4Mhwbzr5X5r2w4wJaVGXmQQMdQaMqzrEYPRhiQQ7WztuBJPErBj",
  "key13": "4YRb1BVidW51Nfqkx5gCGGb6DcY21SMTfQXkBMJ5RsmTDka6dPEKW1qXNiWtn4Nm3xGcUnGczXN68y3arg8H8jNc",
  "key14": "24MkQmcTqzLRqHS1EPQUsTm4HW4LCJMf8DwqmT2ppeap3Er9NdTNgDiFwNxTNV3NcmRocWFCL1YHGxxpii7Q5mVJ",
  "key15": "Yr2SHAsZ4JdfTNVHdenS1bjuQ99f1P5g2hmt9wZUS7CTCDzdZoiHqSJFfo6HfMX9kXm8DadpUbR7fW7aKjNWFTz",
  "key16": "5f4eBQczqPaUmCYdrhAJsTw6qKBSbg78h2zeZAYxv2d1vQiMyosVKSyXjHPbuFWu8HCQSwcqCsXjcX5m6MZqNF4J",
  "key17": "1EDX9e4wfi8SNfWr9LSYYu7o4fQadn5E8dqp6mLtAAHwbQrZw947vFTKCPewKcPRnKpdKAwxbZWAvyiMrC2CFFL",
  "key18": "3TDWSQafNcBdQsvZuNucj9bB7q7Fcm6xXBMdbMfwvoXuK41ckWRE3fyZedHjt73tLXGJZnC78bsBvn6erme9fY54",
  "key19": "Na64zFp6jhWg1MQ6XPCkZ8RwZq1LAaodxZsLXZgb8AqXgdePBjkkeJRddh79iS9XAPMaoNpPX6bFti5UNnuN55H",
  "key20": "5jFuWn8NXEp3e3TnwWMDhS1gGZoZDedcB2dF2nPpgX7NUHkdZBFXQRwxL9BLyPx3RgLNcUqtPT7S38VsgMwxM49p",
  "key21": "4u4aLYdqYC5NUmw79jYJyUqryhakGG3nBHrohEJkQYKNNGCx8vmsNE2c1AVhmyLtB1pLhUou1i2WpHCMHVMDtu8w",
  "key22": "5uTbT45hiMvgqhRHHHMfGVKuaPpuEwCaurDjodcDEPt1QZesCR3VtuN34bUUd8TLWNS72tt5RAjv1fb8MKEGHS4C",
  "key23": "4NsVZiAiL7WAkM3JfFYgKc4WpfLb4axXzb5q9TBzpVCbiCGDbrGLMncLVRPZJ5uMW8MgR5SLgnaax8iwVvQuPcoC",
  "key24": "2sZZnDH7rtCBshKUKGLzScAjdDqVcvMzmGQrM8TqUgs5bZot5SdeF8LQz2AYPTAgFsf36wimYmGkocTX9iZWqinB",
  "key25": "5cjdj5McT8g8M1LbyZnAXDEr53FAxJcGK82phH25Vd5Ubf4LUzWv5iTXXyCfse7mDEbZsfWfAReMEdEGKbi58Zmk",
  "key26": "5HqWFX3H5PvEVnQ2FugjJSZY4oXJHvPTH9aEnrMaVUBqxAPkhoKEW4rt4VJQ2ka8erLmQvBz4JwDBSXf7gosmnRT",
  "key27": "3QXR8gboCv13siP9kYtFTKJmttMtBDy76VXeqdZ1p1siWCdSitwrwyBMtkftpt5Ldq6Q1PmvyHfzbbpxmQwBuRmk",
  "key28": "5nGU88S6cm9TDbczj891jUGmZMjdQeZ2jJm6PEi95mR6RDUoTjYRxQK2HpdYRhohahrwNARNgjhHPUeZ3Dz7vVhM",
  "key29": "1L98JLv3MTSNTRkgCR1h6CxQzit1Tq8YdZpybgqPkteHaefUebFinGvG241Qevhz4MwtqJPgYqdwXNENTrvjcj7",
  "key30": "4APyoTf4BSsRNm8v8WLtWfw1AJzagqR9MjnUz3kCTxNpirVdrHQFRRHzB85TBxMsDbDo9uyGuC3ZAP9UvnE5EH2t",
  "key31": "5C2baX4YEEAJ962nzvQsbgj1KqZV9NxDL3waS9deDGBpTyDyEfg8Vyizg6QBJJgABFzPXQ7oKDbYCEFMS6AQGyo4",
  "key32": "4sJstg7m1rgNB6d2mQjVEsw1QMtQvY13SwdkVMJdUATKgidgP9RRM22xvLTr6fMDQ6aayiPtUSxZxCHUfBqkebWX"
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
