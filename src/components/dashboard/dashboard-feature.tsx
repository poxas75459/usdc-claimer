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
    "38hASNNv5oRYVgLrwVF66tAVMvNBE1zTrngNUVfpkcSRE8qMzA5k6C3rNJmH9V6FKnVjUYWvdi9WDjxUsTJJWbgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMqw35fMyzZeiRXAi9WWDwAWvuLdgmd6LP2Lys4gm27dpVR6ELRE3NzxKvVzV8XkgVE17LsKp6vZALSdeckg9zS",
  "key1": "4heByB7dwR1uCMB5YVtvk7xZawLBJ43nHQLeXqmEj28P6BwDx7jcn7pMkV1MgMFWAzoh7qnQNVtxc9mw9Ar1Rtk9",
  "key2": "66w2mFctaXBPYXxqs3Wo4LT4YiYq4vGrZjUXAGAGhhgugGt7APkaShmWcJGVLk8cV6Ej9UqQ6cxrtPzf9QCFNeVb",
  "key3": "316NRfXpDrwLt9U9kFc6yHrU2AnRhenbFnT9EPd3rxC9521cUqNhxukcLirMAvyKi8CehWWnaheY9UUEbPwnvqYb",
  "key4": "2c2MjfaV75Sekhp9nQRos6Y8CuWeCjqKFGsK8C7pXw5eeDVjetKjwGLD3TTMDdq9wvHyeyYRFWQdEjVk8XXhSMh8",
  "key5": "5x9DGUWwCcuMzFK7wabteF6HMr5yyYQDr9TuMyjJY1X5FwrYi2TNdYmceAfTvCQGRAqDhdBRXMnGCmn4A8HR9Adt",
  "key6": "4VwfqYDQy6QNnTzsJrnUkMrNkFqPxE1p7YGPHkK98bf1JxoDviRJ26dNxtCEPZrtrbDBe9ZtTVwLPkZpi9UdTEmr",
  "key7": "LCiRAwHyQy69xTmQDJt3ynn2KHVuLUeWhcx2ZpV6RhTX2HKM97i523FLbGrC3NoGb9cPqv4kNjK7hL9ezr6CvSD",
  "key8": "3RaucH8jGoiq9EsfafCwbJ2zYzWEskHf2Hogbng7RJ6avTUwgF4Zf3FhrTwxQN9p1X9cwWdHNdyEBmwPYumCRnvF",
  "key9": "3qrMnpU8mwFyutJrWok6q4mPKX6ACagijPTJTDcsia45nUNhz96ugYZmBLJmB9K5gsRG226rWYdRJFvHEPvnqTgn",
  "key10": "4rJJZ7hzMaJ4R22fRdHvPtEhh5scY9Phc3NnDytRAwpNF4RB2Rh1ZFCyNwFSHvE14LF3Tu9XQZQG5eXd9swxj1zK",
  "key11": "5L7rX4LR8KqcwyTWVj8e2xR9fnwhytccNsQDuT25d8QXRKbo17xLBSx1d9igcyZwS5KSNqvxDDjyrd5xkS2N9ULE",
  "key12": "7qJb7StGRBPkJjzsV32VRYiFtWeS3qM3i9ENcoXxoJfL1NYy1FiXhyXNRQNJfptYevnXge38rEcd33LWeVSX73o",
  "key13": "id4457GRHxfmBemSXFHiFFjBUk8q8QwGc5igeMxZDxiVTmxbsaL2fnEJt4E8p5BqTqNVvU9C92agKyKjK6iKLda",
  "key14": "etW3xVu4LKSYLVfdsobQw84wFqnqWSHqX8snrpvapWAjSjHgYjgo1EXVPJQDkm4gw2Sk9qGKC3rRegnggDo67vE",
  "key15": "LoFJymT7cRubhYsbSx3ugE4NNkBnB2NEzEbEMoF7EC5kMhbZBwdUhdmMSKFAqj27LQf4WZLEgwZuqj3NVrQs4Nf",
  "key16": "2vTnz8SH1qwkuG3FbGyrzw8kVeRhd7XWWfnB78Wm9Zi24SxHhEPdk81UbmZtmC7c6yra1HWUMdG9ZXptrCsAjTQL",
  "key17": "4rfw9uYSeEnoQ3YvfxeUgmB3tZa953H86zE6JpANVMxGSUY7J4AiFkENd4fit2WBKQjRZHszNQvRwu2BRewLFUBn",
  "key18": "4ezUDFEwVVMnRn23w51PFvVSrjwQ8FEu6nPEJqiqvPwcC27YD2HXHky8iQjWZ6t8EV2WLQtQBsx8sHLrZn92G4ee",
  "key19": "5kypeX8fVcBfyFcoA9PeqVxKHBeCX7urHpMhZCi5CtKDAfBMuMQQ44r3VFCtfaeYL8D1vqEE1F7QTa4TjEjgUPZ9",
  "key20": "5YxcLvunv38obVCS2qLad1vs12qZgdVupETANDUsBV8ajAHbBgeX7mSTfjPHiLfKGrTembVTfz3Z4HS69PekGrCV",
  "key21": "3HiLNfm28R8NrNnaGdhER4HcRVhwbniWcbqgfCgQSQHN4v5RX4yqZkUTcCsCgs1NpDcrEYSwpuVNLLqrLrc8W5Eh",
  "key22": "2FGFkGFySwDdNSnixd8tu8TGmteyc9JToVrSbFgGZj7yMtc8o4XJUzGJi6fdSrw1caotUQ1zWbfhepu5GQN682fs",
  "key23": "3bx92zJQBmx8hEUkFpsp7x1Cqhdn9557F2ZCkeeKB5ogFTAKvk1oUXgXhyeo3kexoMr8wCtiynVTUsCLdmCjcFMu",
  "key24": "58W2sdeqtann56Henx8GcmPwkmL7QoFBCKpoVLKSqRYoj51bdn8BKxNSLF4WXCiPrTwBrpY94tUpHwoW8nhrNumX",
  "key25": "4tqcX1yV7EXEKTVatAkEBgWCU6ekHHfWAug6jizcKKhaUi9LJxxXs9L94ByAxAocxWH64yDQWHEVogRSGXtBmVE7",
  "key26": "EWg6cTTgaTANBtBQ7NGbXnHKavW6mUTXeezifmiut1F3pGaecAQrgCvJSRHPRJvNsmpcwpYmmCDKnEPhuPJebgn",
  "key27": "2d4DEmydXmzQHphypzd3mnmwbmjqv5a2PhKUhpu8i8jiQxF7ByUqu4PFwCEvaLP5sVmvpwacehSNf3XUERM3zagi"
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
