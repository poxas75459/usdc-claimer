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
    "gQPH4MVXCt8JArxbMm7QHmWmPWrxBv9gtTTDLz3HmfGH3vkCbry4CrWAMjyjzGYNVsHUU8Sa9vxwcxwqCv9Y5Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQtLuHFnkLBjgohRZrBF9ct6tV3Qu8BGswsFcbJWVAFqQEErtsNAuC3wf3B45HWaUyFbHECZfARu5BXKdAtKPbC",
  "key1": "3bQgCGq3Uf3vLPfYGmJiymiBxTjtMNmN3iyZXNnEwrEBxfshjtzLrrDCwiu45TQhGkne8WkXKA5hvjnVz4pViRPo",
  "key2": "4vkvhLtEzJB3shmzZBpC96BfN5sBWmjR3Y9wqsYXz6DVEDZcuTdL1aaufiseD7mvZftmrbrpeeGcvVgbhxR2Cxc9",
  "key3": "A6nBAR4Z7zHiViTj6dZGBZvGFqwhXUdDZt2a6vXFxKCDAKsgcWB9uth3bB3EWpbVPr2hpbDZuiSg2uf2fpqyhM2",
  "key4": "22wpTMZyrqzVQE1A6VkTjRs1f4skRsMYFzTSX3JgQPVkWVaGcGhb95LCFb4KR22cMcNDVF5r28XUheHS6zpNzaBn",
  "key5": "2PfdJwzxgoRuwfmHupRpZVkkbtTBvsWnCRGQnSEKQridSzZyT5Ea2bPKfPcQQnZfHo22YUsKeZCpMkk8vHSfNksV",
  "key6": "4SSPArndorfn5sFuG9a9FBNJ6YaDtnBc1xox7ybwe9EsdVFajnj3sQnKg6gUUf8crYoDGBhGGpHoiPZ9iXakPWuD",
  "key7": "2oUFLkxBS8ba6zyaET6CrtNPnsKpwMkaNAN8y1wrmY4Tx3DChsZPCn4j1Lr2r1rho3onNXa8BQFXbxq4f8K6P5xA",
  "key8": "4QssqyMfZYtfDUyCwTdnHytXEUrRGRq51fNDjfakt3CTjpG4GiBUihEGHegfXnrKK2GBi82hsRopYb8PY1etHNpp",
  "key9": "2ex1kf9exXJ5cMDAaFHoUcUDGe4W2NsFwtLbmGVCbUHQ1pWmwfHjWreo7f6e6xMnYjswTd3xRrbJE65hV5VXFpoS",
  "key10": "2kmpBpQcE1jxQmrE6CkaGxyriCoCcT56a53CVGhgFCR2XJu8xcP7nVa5DJkbhZHmokiVaEuqnLV6t9P4VZX85Nq7",
  "key11": "2V8PCaxKs3WefBmaFicKUSPoK1xDSnssDVKLN9gDkfbUJVskKV3YFwUckSM1vyz7v1p7APFWFNfiUWbevwenWvyo",
  "key12": "2AZENYTD8ZbJ6W8v5xjEQF5pd3JJ7eFQf3iKQZEASyDBAKEkKkPdNQP7qRynx8h8Z2fsR7BAd4P9v1BKfa6V6DXi",
  "key13": "GHzsmY6rvbRTPKReuY5p9CBUjJj95xjahiTEWhL9QW24Lk9g89wj1x75gghffLwSsougL8Lr4BFuo2yFmmesdUs",
  "key14": "2XXL4xhoVNLBnTi3aeukSeT4BBnkLoNFwNZvCviZr4ReT8N8ERxP4UuNhYa2G4dockE7jLp2AmVFiUNo7cGyeiS3",
  "key15": "3zqqPyrFBH7QZLLjBZmTeRrieKwHUkTQCTGe2WCZhVWvEok3XujExasRQqusPWMCj4uw3WTNmJf7CWLpcXAWNXAz",
  "key16": "5hBovUShKkUUYLycoGCGDygfdtkt6DTRbTCy912nWe5b41KUGPvSEJbGQY1JEhYi3nUsU8TSDjbKTo4G96eeKZ63",
  "key17": "4iTAu11UVrDi2BmJrVBB8DYuqq88Je766hWkB7RZkKCNer6t8RHaVYGuWTKKhrzCiHY2AgscpyJsDBx7UiSMxvdK",
  "key18": "L5VVvDoynxtN8NUB9iwCTGN4pLGPRdrG6GSSvxVjoFrtj8woE4QjNDJWj3ttEydEa3uJeFnVLQPSe5rZMB8Sg7b",
  "key19": "4XRAuV3Lf21G8E1CehvNw6TVrBNmCjt33TPS4WMaySiXh7gMJ4BcmBoxs5jPrjLf4VdWFmNM6Yb62tL869g7pxQn",
  "key20": "2w4bupiJ9ERkUBoZcRE7MMkRBuU7Qhe5yv2QyyECYgth7YnQnY1vgifG3MUL7TgE7aQeVrb7hQEBDqwadcUssk8R",
  "key21": "4y49HqqoyELL6jVy3XK8NsNzCQQujrYHkrYJQyXBwVCPfhqq4yAD2oy99xXKKbb9VF9yojV1PXD93a7De5krH2Et",
  "key22": "4em9G7kGVb6N2qBKHMsBxLd8Jj8wVhXu7j6z2nMzX1dWhtKQte3oVYxpbxs7rPJddsbDioXFc1tQ97kVgTJ7rpyM",
  "key23": "2fMVVMvJcpsLpcLmhepGzFVRVq93Z9cU5gee2gsgqtuJM3KUQTtkv7a5CmsGdMedUnK5bZcBQ2jpGj48EznxrowQ",
  "key24": "2d9YeJX8Aqu16pLHj2jh3uytqz1vFQBRLTorKMntn9Gifb7CjYzSRRPYiT32FmsqDd9pssJUvh4DSUHepa7jFNgG",
  "key25": "n67c9yQ8tvcEZX8MXAEraTYTniLqaews78BeqZ4WZ9nFEhGJeY68rymGRu5o2NXD8gpZHnU71x61nLWTDf67k67",
  "key26": "3x7XhyHQ8roDVzStXyZZfS6vGCiWuGFQrBmJNT57mL6aabo84yDDBhZaDH3JWEofQXXA9kDsmKANYq9V8XtzY8RB",
  "key27": "2t72TiYAgK3GEwTCU8gHqAJSe9GgpGqTjo3PuvPqhxna874dtGkPhaJ4qfBLxfWwJE3H4CyS1CDPMxFDMjFQj6Kj"
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
