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
    "2cmwVPo49a3HGJx6UA6Hc2nKezYZzTSvT1GFzsiX7jpKnXnUKQtpWMdXueypTT9YMiX1zGng85vUCeRnmVTBWDdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eYE7imbuYqW4hZDiQQ2MGccQt4HVCH2TLrGfS96YdJNZEZKC4FYVFCm9zpCwdpSK6n4E6J2MBdyPmWofF5Hf6f",
  "key1": "5SBsA4J3pPSZYziyK6k7JWA1HYHmXH5gmyFH6qyD3K74TucMZGmuXEcXjTZgoYf7CLQgxbMQtEoAFhZAQEbDimNA",
  "key2": "3wvrqXB7x7pDRidzJNzfxLZKLZwWYeXmPEhHvbCRe5CoESpex27rErUzsQbbUXrxYW8Z9ri26UwFZvTLFUX8e3z1",
  "key3": "4rJ42Gjyc8GuiVeH6rqEjv6j58WcfzwMQTHS3KvDRZt7LPnX5aDtNLkRBjYzjGacpFouDUXiHNhaBfV1mU9975ab",
  "key4": "3yUfQFzjLArKpXt6xLEyM16VL4RAZvHKrLp1t9ac3K7R1UUjsm3ryF4TuMi7DSHexJoNTkLHMk76qAWgeVq2moJ",
  "key5": "2WGkYeGPsh3pjyJedMaPe4aUWp7RbBFPs2Cx2PjwKjQqQEEuxPgeqVM5SqSZuytDu6J88Z6byZUpf1akminq3m7D",
  "key6": "GAX6n463ApzBiRcsNgiKeXWSEqn71DM46x3acStyraj2Jf9Wee8tmKDXhP58ZYcsmT9hUKNx6bjEh3qs7vM1eVN",
  "key7": "51v3ZWDEWEWfv95HJKmpxuhpijyj9gioQevHREwDXihSkCJFF737yGJZx4bLqEhthynEDu5QAfzz8icRfcA5iDtx",
  "key8": "g7C2DwcnVZgZcTZCnr71BJ8XU3nXu28MdPwzGCTQpySa4GBrEBCVRhNrLWhg91KXN5PATKrTUsPW2YkmuanGes1",
  "key9": "FopLwk3UNUDozgJWff1Qd2mQAD7EyGyURh4oUs4Ut6xjTbiaPEpQFd4mcAZVsn2QwvysUv3JCpX1dv8GnaRgjYA",
  "key10": "2inRSxhTQKALmUiSo74shKqxC3pvFP4S5TzYBSHc8qhSSMDVw4kva3fZtPqKYmQnStnA13qshbfMzmzG1ACfZb7Y",
  "key11": "2cuxhJLej8m9B8ykdqxv9sJk7usUcyk5pEDS2NryKhqLJQTaKv5yByvk2zWobwGDzy8Fo9RKdDS1NA3GpL5aw31P",
  "key12": "3cHjiTw2p883KBdzj6KEVELACqjMKA7wL5fkAXdBKvoUPKLJUYMEmKc1gPJPfwLcNETW9XtjQE7cjtgSiza8ELFE",
  "key13": "3F6qtivK7wht8SGJqhYy5oZ2Q3ZdTqHmg8bbt9tHrRrjsAaJoa6hhUjQQPi9qZQTjijwWptmF5nAG3ztRFWHmkcR",
  "key14": "3amZHXZUxdHTGrogxRRLtjJUr5dY428YCUStTFo2bQ28n8vMDAZCMFAracJQyXMVL9ptqjZ26VDZmS4wK67wcmDQ",
  "key15": "3vRS8UAokiyKmsH8XMB2LKsfVc8eTBhyqjwaodSPANxKcicTWo18NBw4Z6uJ882YkrSpMoQ1oj4GZ7LwyXQbFUdn",
  "key16": "5JaEnBgJPLcZ8KWdnHZn1xJHo2e6adCsTKaWto9AC6xcevGtd2ySFqY3fKEuYuUYFPW9k5eVvHEgSrHexNmzX4mc",
  "key17": "5k5nZwsh7xfh24RhJrScfU5JEECgXDdnX6vJ2saQP4czDR7qVsWxbTPrQUMZhzvcwS7jQsQeYLghFkJJxFykTqbd",
  "key18": "aNRAmC9bn9UhWzie1WcmhgGzdy5m4SxWvVkEovyCYA6P3ho5m7RSi2JNhXsXSdwminaHuXVLQf2MiZCXeqoymQS",
  "key19": "yFZ9LAUZSszB3skRAwzmrrdsfBQeoLFwRmBBDZ1zbVSUkTKzqLuGz7QrK1JMkCAV2CD1Bq2TPF5rFT17CeK1smJ",
  "key20": "ZJK96UPYHyBiuPYQkByf3FaTTUKG4xnhoY8G7jtq64WvDZZT8Y7FVyqECu2xstLeh9S3C3XbqufRLdpmzXGqt4V",
  "key21": "4qkvtc3vY5fmwxscBFSnYhH1oRt2FhfFLwWgeLeNSodgamTdodQPCqNtmg72GFsEk9xHdHJ489N4hoK33JuC7A2j",
  "key22": "3HW5TPhjXX44t3o4tx9XnRedGyJJP5QRQNmF1f41G7daiXVhdxrVLAmaeEipfGBNeLk7tzPxTEhUcyikVdzKosgn",
  "key23": "4J1cyUp99mk3KAYuqien8AWEkcDBZp2aXQsRiatsGf28GxdaXKc77BhjjGjXLVCEgxnHgNnzuEunaWQzaZdd8vkb",
  "key24": "4e6z7UfbGwzUMnMtZzb6kMSsN54Kyofxw75Ex5LysjhbgSjqBhxEgL4uHHkcDtQJfi3ePVp7ThBJjdm28GnUFDX",
  "key25": "4sSRrJKAbHCVfUwsLy4RUYC9sW7C96MMjDCKq3AHtYR9AXQkH8mTKLRYAmykmJJfFwxbEtbGD1Ee9W8NvjKJPQkc",
  "key26": "3ebuSR9S7RXe8Zc3pRGfSFpRNNk3DhvFAXQ21u5hmuXa3iCyrx3YL94N99pWUTbbi6KF1KdK4exbeNH2U76ki8Rx",
  "key27": "3ttsbfoR29yTWCCTpKqNxv9DfwTrbFgptGNBm6Dy6zskci7J629izHXkjqLYm6fxQMkapZondWnMpn8ETdNbmnSf",
  "key28": "3mnNSuzzcvFTQW8RCRDv7ZJXuCSb1kBSAw7JRfAxpRH5DMVEyJgRLQcnWRFsKzMvRdS8dAFFnUrNX4FzFVqfMwTq",
  "key29": "4CHk32bcD2wh2TUCBokMx5kMBEEKLXstNND21YLc1WWa3iwgPod4sqbB3CaTLeV2siVmN3rF3GTv4pWjKEzp8Usq"
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
