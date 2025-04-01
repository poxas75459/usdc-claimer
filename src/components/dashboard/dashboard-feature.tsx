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
    "2WNRpGN4uK8muNCaJZYJKecbfYHWcbJ1EoLg29jkNRGwL6SjqxceE9GRAxBKsGVSaooQ7g33UdG4gJrmpp9jv8f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URLPWndrTH4QPQuEYQfH34W5EZ8xBY6j46qyGdmvZaBvqF7LN8ghL5r5n1LZjxwKfJeQ7HLiS3Y7Zq9A8FWBqqC",
  "key1": "2nrmCrcMJCdjtikN7S4L9NacVYqdjTYSuiQ8cr5TryYccikaHHWYtGXNbozyH4brMDqGxxhqeubtGZo5W7PtpJZT",
  "key2": "2iNGX2EGx8ur14m8AT3uxLk2GkkkoZjQqY4dbFNGTH744DLNBYF4jwdKw2hWLro5kH24rKPaof8MAC38oYTaPnbz",
  "key3": "4frTsRUNdbaqk2FcTQb8L1zJbBRDKJNKmPwTkVDz1N9yKtzKKKXLT1tYpo6HagYabwfJHiD9QzFduyTZuTT5TDyN",
  "key4": "5zgPv7XoGSk7Vo5gt8fgUXkgAXNNXFpajoXZDmKzjNbLpbDo2nPcjc4pXC8nxFZAPCo5zNNzLjkA4tZWDNNkbSZw",
  "key5": "51Z66ZHAjUbDYyJXu4cKAverdLiB7uNYTThdHVJQE8eAsX4ZPsT4jnBhPMuW2XWWGN1aeCL3fUEXdS3xrQUk8UrD",
  "key6": "5rbawbMMWSHsmtpoZBPzrJUzCwkniWRvCPdEBvgdnt5DHohC6qBqWL8Q7uY8sKi6gUkBexbBdofuEuVMTv86ypBu",
  "key7": "5hzCgBnY93R2K5YZveX7MAH9zyF7sNUXQQU772mazGfFHLNK7inJpQHPncPUsnz14NQHpxVQW3rFos5E1iKLTVVg",
  "key8": "2UGEm5AzVZd8K46y73RNqTdFtufZ9AQRro4RmtijHc9DtvBWDd4FPnP6pp1q5ji6t3yPkm8iWzGeeajUPdNKW7xu",
  "key9": "2Wk5XmAFHMAZimfHQkuspDna3XGWUPHcGFXKfEWU7dXrFd8tJuGxrEy8aW9PXHSKXfUXhFCyYYMhR1TKK8aZ5WA7",
  "key10": "r6DSguQwxhngUZgKKVqJJm7mfYfkcpxYcsmrFNJz8WQYtxaJGgLz1nzvVAnW67yi4gTVagjjgwFa7s8sL5WaTTe",
  "key11": "2jMb5iV7dsz6pjqVV1ZnZRUzA8mM8fRMJm8hj1oB36aqdeBpkhg8pUEmcJ3B1qfHgp6dAjCR8P7qvuC68QjCtT4G",
  "key12": "2hmEp3yjPXJBQ59WRFzDcb6Be35JdxmR8ae5x9FekK9i5tcsBKTcMQNPFPBFAqwZ1dfJ3o8V9WvFvWGZzKbXSD8g",
  "key13": "298ZSEUndaRzMQKEswXGagZCspQ4uvW2VvEXrucsng3iQ7u8cQV2hj1Fjy9Zt3jzCuzxu7eBowx6L5cCkkFkAKrp",
  "key14": "4Lay3xFBvXFDKrwWMKv2M9m5g6gRK6NXBQZtWekPk8wqMmZijjTQnvs6PdKLMihs4obM4ephd6y7RRbkzhAfVzvs",
  "key15": "5y3sYPaYJemMaaxvr1f9MwgYNEoWp4Raohn3KQ39BdrbXCzzk3q9YP1oToiFrNoRjkbzhAgoviPdhEUr6jPnZY82",
  "key16": "QdisL8McViDaTt4n8tLZNcTECpk1jkuSuBzWtH5g8VkMtVoEp3ohyoBFnkV616NkAghfsVnUvZB7vojy29ZQSUD",
  "key17": "5heQKRsGuwMpBJbEyrz6y1NE4k1BPsuKCnKWkVSPsxDpa5NBrD7uAkatB3zyGuEeNCY4S9dgMr7yD9yU1ToURxAW",
  "key18": "3cN7eLSvVW6VAPh6tUnHCkPEbFhHVyrnstTgTNZUXGZAV1i8gyZknSoucANtToFhZJHs643R6FKyEMiiZ1SXoj14",
  "key19": "rh4kdzhB4Ax4L59ULQewrL3GLbyQzcPVWT7q7RKsjhoQM5EveZ18Tb6tjeBvnSQMReqw8a8Gd1oZD9LTZT4pM3V",
  "key20": "57FRVkRiaK9n8GgabkjcfYUKVVVjMGYcH1YgNBr8Tv1DTAwVk7am8qBHgf7UChChG3boG7LUDNiFkyMNi3WcVC4Q",
  "key21": "5Vbee1jhbjS3qKiP3wcyamohfSQVrRDxEVzuMb2RbFuac8eCk2CDTyN17WH4XZx5sxsJddtKYfrzyYLuuYw2DmpA",
  "key22": "DSKCKea3nx5a5PLjrkwpvPsNrEPyLD1Cw1SNa8vmeXwuoqhej9VNt88f42PwXSwYV38Agrn4rV1pNTcY4pBPWxk",
  "key23": "2B8PTp9vn5xffQTkyhaJg2VWPrqn55QsJo5wZirxFj9n6Y3K83rwg7gCpyk3RmmKr2y162wtxasgmMPiPA8viBVu",
  "key24": "2j88xG3vJjaMQkXJ9XjM7qeJs9GMHMqAvZfsuUHbCYHgANsycuUEn9dRYfVMLqg274eoojZ9vm6vHUuMMfXDcmYp",
  "key25": "3TWErXu8ihdwvXnFTEG3wRNiuN314hzg6DAcRB9HzrYLzGehxS1uVgy6iVJGpPeSsazqVGjVShLrTA5xsrMZ4TUX",
  "key26": "nb3NLYGEXiRXNNbCVLUZFfgzqWdwG4KH1qzjJ7vNMRji6Vpfyxb8mGfa2RMyrWXiXquDeaTdSfN1ExE9fwxGFP2",
  "key27": "K6GoitRjxLWDp5ZZFWNLzbwJ5AcozqfCwoRPb664krA5rWeM2kTacxzaZvWNytXE6nhunQQNvR6kKjrZ8zFAZae",
  "key28": "66kdHJPLAWgWBxbYZz3eEPEcHTgqUbx3pdhVUnSjuHUrec62da4oKij84jejYGqp8hFkFm8SqR2VyYaaV9fwK7gV",
  "key29": "4EMR9qsAXy2g9fFxYN7uXKYdc3iayzG2BHpd4GNWZPeGhVGbn9crtyAP9Mk1jsE7SpbuDuSwPP41y9BxrHBQuXNJ",
  "key30": "5eUSgBZN7EMFtYeRHfDcL6SVA4xFQzKortHoWjLc7ev9ni4fPabN2Ah5ffVGEdFjV3A7jaUHyDpHf1XnkqQ92fqe",
  "key31": "3RQsGAPjuvqKuG3xmBBujRwUP97Varefj2YfP1pAjGoDJvbAVdca5uu9pQEmEjp3kZT2fQuQgMWsf9mkbL1Y5Bgk",
  "key32": "2xBSFwFURwAhkW7HgyBrgb3r8TbBgZvFZXstVt5iYjMSEJaimAaPjUBbsjYqqQ3VBtprtmP5FYxsD591ehekWq87",
  "key33": "31jFZoNw9PZ8fM5kGqSwpgT8XKcQ1mBspydSm83gkuJ1hTmEKkoENEk2Ga7v7yq371MxTwKx6FZekKQroY4WCsbt",
  "key34": "4iXTTjFK817TM3B74zb3jyqAj2iCUa6Ad8cNtEAcc9qKDs7sJqfXrnRnDmgkcpJ3QPnjjLgd9HPZRGhyPNYFEfnD",
  "key35": "2mVvsLXECDsDzmX7kVjwdVyq4QPh9wFKPSs9fuo3GAMnmdLyN4AMqm3nzUAsvkyb2j2WPnptBc3Lx5cXs32LLv25",
  "key36": "2LPi7t8FHk7d9x3z48mdAn2zYPYbCFeDF3SqtXoXSKQKXwQNMrTFTxUMKiGpxXQThatezsUDkzSkknDvQqSu64qV",
  "key37": "4jSs2SQhoRLZjfcsu1XnyJVdQBhVht4hXGW4Z23456wfRENudm3iixQPqWxMoDETU2oHyGKDFZTNuVUpnbb5yre1"
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
