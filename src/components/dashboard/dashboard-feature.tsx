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
    "2Q9AFQpBwSWYuoWmhwTnNcXVSpJipxcwTDhFekawbZMMuMLQiVshUpniuH92Eb2VnCXLfe7KWDKUi3N71YmrgR6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jD7FZnS8Wd1efhSTpdWyzQkTCSjtYsSe6QLj9qunXiKP7qYvvLDV45X3Bkao3k7xhchsbq5HXQQ8iHdRidaP4P2",
  "key1": "4RuV84jgnY9YwqahnPx1o4kwX3WfGaquyLjhHJSv56Lb77XHv9SrvSUuGEx2nMt5gYNtRLrR4guxksV9RiAuuXLT",
  "key2": "2hVhXmRaAC9biMa6Gq47BHVuoEp2biyp4zM1AooVMjjEUhQUS3Zz9VqV5eA4caKvKUGkGQuydq1ybUFGnY6PNYuC",
  "key3": "aVvXqMoao2UFzeCFRLoSdS6pbCC8poRGqM6M1tbY36r57Upj8e8VwqjaQTqFEn8EfV4vgxrdrYkDEFRGdWh7xKp",
  "key4": "z94VXZsZJw121PwkduAmbmrNBVFPk8CLSy3WQi6Wp3Xk2sMH6SnzzEwgn4s4KgsttdbnS7nqob5ApmAMTLfEWJe",
  "key5": "2pUi7KUZ2yL8XuBLDTzkgVKLy6PMnwR49BcdKrB2sDX5sKpqzWSZGcBAZBSXXoZy1KYEC8qBayrEueMiGBg1MotS",
  "key6": "64pYUxfBipkENivTruUtmUgNx3sQshTzBo42U8yKDjm9tqfxFybMvxF5DFpDmHuNcZAE7KNXKMVTg89MYBHaD2oK",
  "key7": "4Pc9xQ9jwXajsrWQ9QDvmBYpV3kQ5QJNb8jVTvzHuQGB4W1x2b7nz4kXPaNfF6g6uWFvJ1SiCBUppgmtCJZoU49e",
  "key8": "3YMk915b4QVbnUqtnTr3MywqXVU2D9EM98pnhjtStGX5eTTgswV19cmaMXjpXZ5Wanb12F1z5tNM8bjF6BcUZBVW",
  "key9": "ewEyXD2J4imxzDCRFpHVUkjJTpgegpP2HT48ecZo78ZZ7eiBBFxxH4L4k2BCwxoRSAj8nn7dxLyBrFN3vJxnKBD",
  "key10": "3Z3vhZbzYLvDcK6GgCBTmoWtWbWmB6r3LAeLFfhNvofUDsqi9UG5oYsg16Ka5DEx9rbiCp3K99kDFfgaWXi5pbj6",
  "key11": "2Qqcnjp3k6V6mPF7ztwDbCjby7qThq4qGRJERtrMhWpMcbcRnRaQqL9Q3vttnRqWpfX71kCaLTrSuKmryVk6pxQ8",
  "key12": "2uGb92bHrcwf3HJ76ez2U9yLBEghWXbPLgCRRke6ZgAkpJoStuaN9UsrbAqkvJCRZ75zMFaW3TA9tQc6mT25kWbb",
  "key13": "HJWTrvsdypDpERsj7irUSggJWMCscs9Jr1QQ6Rf5bqC8HMo44cQbgkEeBTNe7tjmoxjPzmAjbHzksbtnMHwGg3W",
  "key14": "3EqTBEfbbHcwZDN2iAMAV17tTNpnw5G7PLngJ8sZaWmi3uzuUHtrWjKBabJJ1CQ1S6Mx7npgEvTLUmbJ5G4qKrEb",
  "key15": "3eC4etmiXxazfLmkfXb185U7mCN2EEs1wdxPUdcKqUak5FXTKa24c5QfvUnaLLvpHYZXXzvSA4K8iKQAXyHJrHUz",
  "key16": "5gLncqWajy8nzVVe2b7dZjck9jFvqmyTUb7nRXLAsZkxM3WUt2TVywtpFyea1mzsTG6QSFJGgrrdShtkWVXjQS8r",
  "key17": "5Nz8K4iiELeoH8HYBEeYtr3dx6RvH3VQeK7XR38yDMv5wCWB1WB7NSgowRkJWucMZ8zVHeD8v8qo4d5Tws65AVor",
  "key18": "4o371wpy5R5xcG9m8KFKPykAKUmTtJFpn3soD1CbQHQCbg1s6b6ArqZEPfCa7rCwoc5DvkMiC8cLEpuehoiN4hDA",
  "key19": "2nYLdjXQEHNe6nWDCTEeDNVwvvjcrbrhoiDSeg3QvsgGQbnpsCwRW18dJedy4D41J7wzdzgPj2GaULrCm55PeCF3",
  "key20": "4fXvZsgyedGfNeRwyc9h7njyRxBMEM7n3QeE6uD2S8JpiZmeJ7qhAfMAZV7UiJZCKCRjoQENLU8YHCVyT1hE4M1L",
  "key21": "3j6s2PXpWGAZHEpmKBbqYwDu9qee1Sg3fK6fswJwAbGp4N5BhB86P8bgNK7znprFt1aVwsWoCHrVsPBzzaiMxZ3i",
  "key22": "41oFHCPUJjHG24Yqeogy8FdsgBtMvisCCVadyvV62UE8CrVLzphYF6EwMh9BCpto925EgzsL9FxWqSYEMBKU2S4m",
  "key23": "2Ga6LrUUtCNbRZpzZ9tRvNj8LJePPZQ1Wm4hjtypumPzm6kQxEgEaZV5c7sqx1ihRVwaRTarJugts2WmLwdpz2HN",
  "key24": "64Yr3nmhwzaA2wNC57j1FjEx7FvQ5oULAf5QvdJkWrsBPxFHBp6zjioU9Mg7pdHsYMshWfQ7AfM7cDswRUYwaAh2",
  "key25": "3gnajz2kZCgXbMXCyGbkEtfpLSHLuVr8J7CnwwoK854b7hmohtL37pPh43b1qjjyDTgiBVBRwD7aasirjVQ8SmX4",
  "key26": "3W8gd2HSpiCuwEwHdWdMn3kmLMk2ARjqkM3DsKvtwxMPGpNkFCWvwx2fhWpJnoQ28pM5Erka8sHrUwMZCQ2hBPw4",
  "key27": "cN6GdTvpM76B5HHyBbQrcVJCJZvWQdBoV1Xmk9XWZMG4RyP2gvCLboyomkddiZhgt4BxLRiwfKGepeT1a4Pbbju",
  "key28": "3qpowUBLuuXP8UyZMS7zqJbEDRNQf996s7aG2ZJ9W2ET2YUsps5xcLi6KXJPXFnZvGqMJvsZ67xrUXcKdHVywCAf",
  "key29": "52dcqsJEgXdWt6Mmxiofvpy2JqmcG8J56hHFAPRdaas9jZfo1h9EvPzrAfSTGMesmGcGLVAGU5AfMUhMpi7vJX8i",
  "key30": "3JLsd3mtdBMzQ9U9rhxW5XveKMncbJVemo4Lsdg7MV6ySrrWJFedm1PA4f2UBtowvyH82t4URLkw3nHy3yzZUpou",
  "key31": "29zz5dVCC2RuVFeZcx2rubdQYcVosF2fNLgQgwHGqatYhJq8y3nHWAnxw1mWSbbT3CaswcQrxipwE2sGZsdF72bb",
  "key32": "uDyuhdC8aLv9kqmhh5yNCyiRBSDwmUcjUSgnYL4TeLyzR9hDbWiaFSqZ6RRsdrLmkNwwjyvT7MG3F5uRJ3hwof5",
  "key33": "44SF3p5f2jAnZbxo2YSk5MWmzEyAp2Sq8XdB3KGgrg3tAUrVgZbiH5hgThmy2WnxHbyPy4gpZYFHQ9JG1DtmNLDA",
  "key34": "2TDqCecR3ukUjN2MKs5oxExmK7qZtp3LRRksTmR621zbsYBsEp26k429JSHCnQqvbB6Pf3NnC9iKL9JjCXWY7WgC",
  "key35": "3BRBCMCrrbqtEnGsRyWJQMtCHxbnyR18z3wdaKP5GnkG9R88gfFS2SpjwjmgwfxknEJvap2pzXV5iVpiC8WULXvn",
  "key36": "7dVCW7otn6hV9JthsuTYUr8EWPnAPe3esykXEHPYPUvCNVfexU6dpAN6TUfjswoM2avvgC2vsVnBMy5ZVoxRjy3",
  "key37": "3JoesAeYqd6aD4EqCkV6Fg9HW9vToURPrcgxzXJNt8rY1h2fqC6MgrAHzz8uPF1f6SVMM9kHiRYV7xMeJbFA8qGx",
  "key38": "27gBuYkGSh6WJG65gAxz6eHCGm8AqmpGroQmTV1pS7yUgVD2ApKubCBJcCuYTuMfGGBXGxZRJw1uy3jGH21vCLDH"
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
