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
    "3FcbdqRdASjetFqkof21MrjD4dhYFd7QhTDQQe3jFoiM1obk27NdcehqXKutbxoGB5JxUysz8LkoMPdN3Wmpu7Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqsBamFH7gbZ7Sq6e63hHPZBckFiEG3etkfXkyXbYz1anGBkvh9j9rPwLXtKAWPtcH3v3WWSy4KRCRXqsw3keUd",
  "key1": "4koxZt2AjaxKNSMrqtYqQbyomi45hjBMAXe7yjJyX9HXy7wj1LVSxRVz3fuQDcLetbG6ZaQhQa5hQKmRQwUmEE88",
  "key2": "ndG7vBkJFYgdC8YP5kfE9FquB2iB4ZPT51CSBv9kR1fv5WaATL31HooWDyR8XsFBMDRED5ZmLhsu2NdZ8k3KG7o",
  "key3": "4RadMeWTxNBAM7DHo74BfoJLZiVNLajq7NSvw2qqyJPNKwEj118Mfx34mTLab2qWoVt911TG2pU3DKYmQuPdG5m8",
  "key4": "4Neu9QXUaqg96mvmRbJbemExqeG1kP44GerXqwqE7s34HPTd4CeXpLca7zx78KGxyv6BRism4L5T4yPUVBhqgrWG",
  "key5": "343sU1tLvBuGAjRHXQeni4ceUsWeWV5EYyxxCFLNzcK6seSmXnkMHKGwcLTgqCVFd35m6vC8tStX5uPMz4WxP7W1",
  "key6": "298c3rurjVJUC24svdLvYbGSfaimzVS7JBUv3W9vibQwEzRg32DrgnS5fw1XpsxyDzZ3NMQqZJBBWSwHvdEzTT5k",
  "key7": "3tb879u1Wyk3tKFtfhdqogSZTE74Mb3a1V3N9hEYFgPpBGqUQZsXA2wcWj3NHBYn5pVM3Nevn6nXM6pgZ6zUQkpW",
  "key8": "3HagBHbRzy1rXjefZteJ6fBsz65tvonHyesx6Ut7p48W7cC8zqTnCYjxh8wMwjnc1SYYw9q63nDpCfEKfGik7wbA",
  "key9": "3on53AmEE1BUuhMpp8FWpbfkgMtkvvTCsCAXHVQWuFqTKyW36oYmBPGkoAoNZ8fUpAPcqvGD5bS4zcUqFCUtjeZ1",
  "key10": "3nRPDv6JPZXz7AuYJhpc5fDFYtPmH5YqUyrdFMxMCbW2sYsemmLEucneivV1sKEdm1swz3qgxjobpFBWtHSbLXie",
  "key11": "5oY4ck2xX8utN2wyUzfqgHgS2urgZ7USN1XXMtWpjZWEFSYtKkVoAee8XUBJZyrcKg1SCpjF2fYHe7bGRaTY3T2Q",
  "key12": "3nGGx3V3FY2cbVvX9RC5zwwu5YXXiVGVexs8MSDJ7DnzSsjQXXSKmMaN1A1BxYaeXHHiTUyJ5sWVLZ1hUAVQ2w87",
  "key13": "2yWL3aSbr16S3uHCmk5CncVbKF4g9qTfv9F9XgySkL3DMqzqSbUinJXLw1D3Nz4zz611L56AfVSFAFr65QVjPR3y",
  "key14": "3GsmszV5eJgy4cvsAEwrQZRRAraozWxZPzW3XxPGmW1Em7mQqtX68ugbyretoYAtoLE5fWWVijToxW1RScJVTkJA",
  "key15": "5MmQ5DgG49KRrpMuxdXNtNA79UjEtSrvAKvnZKwyXrHXuLJzTCGqvE9tjLNECZMuFH2suUUrNhzcDrrBJ2AexGuf",
  "key16": "ACHbENz1EZKTDBZySgUjYc8ghzqjcuMrs8YCCEE4jtQRrDxxT9SW8bhVqk4N45JMVr6ChWR2smKAwpcfZs1uREp",
  "key17": "3kNDsdCbTz7PjaFkBp5cZK7DaHS9zNaj4zvbtNxseYzvX36qXpFAt4z9rDncezRgQB4Fcp36nQ4iKpr73NXb2n5P",
  "key18": "4MiqpT6G2qtvUktckF4HyftQSv3SePozR1QTjnMSy5W8WMYfRSU1L1EQmh3SVoJHQyc8MBKk2BYUyNxT1Xmv2VTM",
  "key19": "2k92UjzUGzu7kKBvipWi7WR2nfXoBrMqkrj4cPMa9XAeHFGJEFtQ74kf557F8qXPd8xRotiPd7FcSzykCpDeKfi2",
  "key20": "3XR9byKkSJ9UiQA5npoBz5oSgEcrWriFdveMmKB3siRJ9CknxgBAczM6sC3AcQAVUenZXttdfjbxEJWVdcT9bqto",
  "key21": "2D1m4RU6Ci1M4k7A6d7Bs69EvNHnjCjAB6TecKJjx1HF6mH1J5hu3WeHop6gMQpgTCVyyRUXzvQJCj23xsH6dvG3",
  "key22": "8dFs1dDywh3PVZbTEiLYtuJCKeApx6w61Kevj87rUs1bW65x47MFmGwgBUDDkA9mDFXimmAfRPKYjcKaXw8AsFC",
  "key23": "5RTSS2sEBtndL2idb3yxsSFxuXeeqVQ63ExtgGNPG8RpoApds4ftytNQFDHAHTp8vLMjbjVQrRUvvbZTKU3Q5VMi",
  "key24": "5BYS7vi5HbgXeLsALZfK6ZWrFYirhSKcCTp4t1bChZqd8aP4ofzp9U1TiErUYs5w8mgMhnBmzy4DiT8t9y7FwFUW"
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
