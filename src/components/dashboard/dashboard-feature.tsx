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
    "4DZ4qrHu5dv6KUZUepKkh5eNz97AnVNXES9wGLhmPbodhbNb2w4m2kKz2eYb5rjmsHTewq6Xs2d7RdJhS2sufMd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyv5eviboyNN3tBE3FtoDnjQSaSiNJxHaXtLwxREPLJPM3zHVwCZ2Y1JtP9aP2oJCCBaL39e5upaZX5VFfvUnUq",
  "key1": "4TrWYjTQpXsbBQzZCzVLjFYPk2o8TwQRBimVmBrXr7c6CrBNcMEdyJQWTqTNFfosqy6vfGtj3gV3PJMSTyBTmFHS",
  "key2": "2sp9LvkLkgBNNFPPc3nL9Hk3KnEMWxKmR7rXkRpXgfTEQKa8nGwNxMjY69kgkuvhAx9u6x9hkq4C4Z7dH64Dmy2A",
  "key3": "3Ty9oX3Uw6HBP5PXBHEar8E1aaVWyQnYbF7oenAuJshTjLQN96w8k9Mz2ncCQcvyrH9FomQCEBZAfqC5DgE53Dud",
  "key4": "4jRYKA9W4igA2XSkZk1uAz6eekbLDHN7Qy39F5h1skepykJJNeGzBipwirCT2ddm78EXzCqTkQFkaWYJyrHgCvxz",
  "key5": "YruiuysXaXXwHYNbqHFrwSaVEcAoQ2379sCHSeSz8zvcxJsLMxYspUBTMYFH7pxEK95QH7aSZjoJqM71aYs3GNo",
  "key6": "4SESyu3mMaf99rYWDr7AUhJ43N1yqKK8c7ARutjs9vjp7qRGutPtY5BryLeoGLjTkBDiXKDPyoz6oTHV9WMDC3qd",
  "key7": "LN5B4tRU5hGEKbqAc5rNNKu8JTDvrFyHd52WHc4vF3WP8162NUR5s4WGBEsjpAxxhx9yD9sbWB7XNZwDPpfdKSD",
  "key8": "2nQBkAWSavGrL5Nhyko4EZFUm9pZ9Vxxzumoog2fozHvv2NaHvKyH84PL5joxaxfQk3TCybhr3aR7KSorvWTFDjW",
  "key9": "3T2GJecMToCXQXfjLr6Le6ThTGNEsXfAm2scGgQK92B8ZzajJv6jSmWPYxJQVBRctKzKZUxZWieMmXq9pA4GU98G",
  "key10": "3KPPozEkGkzzUb7pcQqatJk371o1wJgUNxtyoUce8gKXzY2ACBL3pRmbVShNzToeBsAuT1svhRrGpBViLmCPbt3i",
  "key11": "44cfNE796S3k2DA8ArtjJYUf6BCjqisUTWCyU5MGYsa6RBQETAwL33VrK5PTdTM8ry5DWYbi54o9LTV4NnBMnn3i",
  "key12": "4CZuV2Kx3MhPw6HdV3eFyMACZUZkjJ4fzJe9gFQJ3ErL8SHdeymoMyY5VgCLeV7YeJcP9UTSayoPzG4t4zXpffSX",
  "key13": "4fWbkg4EFQ3JrtnAwPYsGNw4DZx8jCmRCNs4EGYsLG8YWiiLsZy7x7xuvY8g2qguJ1mTncbwhzffyMcL7AwtdHJm",
  "key14": "6FPVk6EH8UEwVFTE27MaUfq4nG3V21uhwvUXTJqeGgYWVE51pNCi8UVnzZvPtmuxAKn5af4gCkpDeD7Rj1eWGDJ",
  "key15": "2wNScXegCxYC8qyJm7xdeJfUdPrur8GdxnM3C8ZFx1PUXaTxPfZwD3jBo8qZYDQPzFySE9i17asLbYGEWJj9wBBx",
  "key16": "4nXMqkk3HMJY3GpKfoegkeFETfUzf9LchdwgicscnnEzjuVdX8G9yYJbZKALBkgSDuedDyxyCHngdjJdGMcFLrA8",
  "key17": "5uJW6dkPJ8ButfZoo4thGgypGZRaTxywvQStoPbhXKsTAXLujt6uMGswh1ogWtcqRYq67iCPWj3fMG6UuTT1WTNz",
  "key18": "416xAndy8zSMEucMdYxeT9GAmhUNzQC2dLD4YW7hctKBLJWDg1mWkRjTuLtDdZoXH2Wtkr5sRb9dAukht2HYWBn",
  "key19": "5dDN9ndUAB2Gjwjhso4cVsWEUuFVibv7j8GByjgAANzC5ePJcNhiuey8mqVWzFcV2brbb5sWQTyhvXjteMagd11z",
  "key20": "5S8TWxEgyEZYytmzG9S436fD9uR66feQwSb3WBX5ZGT2aNERbuQg35CQ3E76Y28QPn7YJegf6oRRXEL5Bb9pNyT4",
  "key21": "2zN2FzhuEkp7FfAQ79oFLocvdVgh1BsEaaSSu7YNrBbwgiCPEUZ2oDqsxKxoukMLvuTREBMASsSS9JrG1XSgEVgb",
  "key22": "3yLu5EtUjgYpiVNdnL825kAkQHaMW3ydcc2qLqsKrAac74s63q5keh4Xb26aCBLycdZrrjiNndAPhxU8g3ALMvDa",
  "key23": "4BY6dfWWtjAr5gZgdtw2o3FwddBgnfZP2C5iAcipkq9xUwc5VzrKFYdQSSXFCUXeiPmLZzDBpa3gwJxsG9MG6njA",
  "key24": "33Po6PHDiUDD2Hrf4Jrbe3UQhsdi2Nh7qYirvzZZcRMzCraEq2mDqfG3GCLT5dmbYxgD513qdaESPQjAbNeVrc5P",
  "key25": "2BNYY9MKqhUydwZL86dDxUTx8CBykjufMqTGZ8sdRMTh8wsqdYBKFVnich1CTUfLnFVpmn5DgCBvSGvnmGg2r3tK",
  "key26": "5Mx1mGAvZCUDZ138NyRrCTajFfC9go8kK5SYFwTPcEpWMsCkRJ9MoMm9NT8k4EKDhqP9zwn5ZN6x4zPuGakkbVxb"
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
