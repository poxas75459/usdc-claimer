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
    "5jrHjwFhJDrrhBoCAYfu3VsuGCd4o2XxX9i7k5SDwvLaAjTqVUxusyGS2igw5D2r743JNCaHVnsexNcrb3Nw2RjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2uZ8WaVD4uvrMxg7JHEQ37CMeW9sVCNdkuYAsim6uKo3p7oFnLEB64kKNa8CaQUzJbVhtwk9BxcPVtx2Q1QWsB",
  "key1": "mFMVjuwJ7fT5jDjm7aJMjXaprKqUBnWnrkHggtS5s3BRLgr8F6SZ5Qo4FoS6GP2xySaCLW2FbuNoiUDdmgjJUeR",
  "key2": "3WcuccmZ765o5WQT6z49Cf7zEWdWyXz44KtB9Q5EwdFP2JEL4tAvArU5VoeanKvaVqiWjKuwQxutnN2EFBiBZrUy",
  "key3": "2vDmWqrDhvvbjGv3P2BtTCLQJhjfCn9djATdcDYWvzYFX83Q1y6goYeoLztcvuPNxeYkj9oEXzPguQad4iLT9XVQ",
  "key4": "55cP7WjCQjfbiMjyxCThXmvYTe4CbfKVVqFxw5ziEEpwsQN2SsJE4SJjGKdd7BR5wFXRKP46LQEkyTbLQdG3PmqD",
  "key5": "Hw1qRFDCJW3hGx1rnBgC4iV89BQMqV1dqzx2XxVLgPQRmEVaWTVoWN6SeRtBBjJZgnVvejF2x8iCVZb3raXBgbu",
  "key6": "2i5srj4g6FPfqVrL1KubojekdDK7DgiPNVhB9UHqWC5qcUhH6b8dUcjVxEeyueTKrnM27JLAAdtvvDuUFo6XUtcK",
  "key7": "3Uq2A21wPpe1CdDMKQc5szmQvMfd7hHEXuvxr6MMkHGpNTk5tMf2k4kkryx9MDywiUpzuxL9Sark6C1Xbf6H13cJ",
  "key8": "3a1UEcB5Pvco1HhTGY5bLFnnb1LQY2EMYrPFNtAV7ZkB6kD3ChsXZsNgbHsYC96Nu6VJwSb44kdQXKnvcwYquLYS",
  "key9": "2gPGrh86XGqbw4enPRu2pe6kiPhgqFwnz7AMA4iAxodSoJJqWDZAHUowsKTFvByHQHFCEPFH6K46H8aW3YXH5rfE",
  "key10": "31KPAjffrCCDRPKbwhFwkaxyEaGzVpKkKT7u2JzTbQibo7kZVRgS41xy6hV2wLdLMUwQrS1UWnNaPAduJ4NRecsx",
  "key11": "3k4M1U6o7Qvf87R7mZMtTTKpXH3n6fpEjTnjPWiUZEBg2ruBAbZSurUKWYE8H6omQ5SRw5H3Zw8wPXHhPzsp22Rk",
  "key12": "5AL5rdPgcNjfVYvpHVaruuzu1U2th26YngVpEZ8RQZhPy6YuDWzGvbHp7Y4ds5GWBt31njwYg9deJvGNJqymDAXS",
  "key13": "55skPdzkRRKtbS8Yj1Jzs1vZNjgQJkdHXePpKdvqjEVcdW19AxSanyCsRKFVHqDnF1iWbXWjoeJegboNCGsduWuo",
  "key14": "4ZPHKkPJdZ9o68R8NXusGYC3FwtJixYxKo9nx6xbyfmd6HMrxaLSFfi9jHHEseYkJ2kziHeRvs1HGspoXHYJZduD",
  "key15": "4hwfbgP3dprxZMYzdx1KRPj3d3y8mTFHC8Wi6D6EBBHv6Gmn579J2gtnmKv82BfoWWhP85jeNmirA2GVsmTC15YJ",
  "key16": "541wmkvUP1wZEEzLsj27pgF81obHQpX8Y9AKGWozCrZVVHV7uR4s3HYJtpWMNpLP744CdPxCVXxXRwvanKgdL91s",
  "key17": "2nB2xRopkbEjnHGHBqniNqSnTnitshoekvjpkrFLqG1qLZpsPprJ5dE7y4W5LNbNwre4rewyBbGBUbKgciSjZmt9",
  "key18": "2sNiqLQDend9BunaCVLQ4mDbu8qcKgYxHHyi3qvXtHb5pnY5HhC8LjjDN5SvmKF6eEkHV6yFQQNeAVfiotYyXoy1",
  "key19": "5Giym4MmUKrLCMRquADg1vEiJ2texHT9Az6YfXn7ZtMmmhLbjf7AHC4wYuhMnChDx58wPkWedD2Sbaet9De1uBw4",
  "key20": "4Khzc4i8X8imeKUToMJkCBPfpwqk8XgqyLS85hfLKrQVsFcH3yX4re9AArcoqf2K6NHhgbP4Sy9QNQoxdDTikzQz",
  "key21": "4fefMGWU7ZjWEV1bAXGQPcoBki8rzyDB3z8L5nNTtLJxHzpEbBPD1QkX9NLjuvNqy9tS7vCsQJVNQrv1gzxXk42j",
  "key22": "3sQjgg8PHDKPo17WN1UR4yjk27dovvmctJx5k2ias5NHHf5fiUVzsT7VWfnmsm1kNghZqrMxRUvMCWZabNbo46im",
  "key23": "2ang6G5DgbK6fuDUmWfbdFSSeFNvbiK2hPGK72G8ExcTn4nPYJeqHdScqCWhhouDixeunXbjCMtDQsDc1auTcV2L",
  "key24": "33Y5QWnfsR3wtW5Ysb6oAaVrdJX3GiVyKyDgmzrpo6Y5Gr5CRKNGbnfd9QHBwWr5eWmp7PrGcE14hCGukkqN7LnP",
  "key25": "vxKgSKiXXWQjNXGSnJUAayNcwfPaSFFXyHBp1bVkHXtXoiHLTn1hSVESePfz6f1qgyfUZRGLccFAhHdtotPhBju",
  "key26": "2f7uAe1Pfb4A68db9CakZBnd8vgnJmbpzY5ZicER1uMekXEoEWqNppxwznLesf5M4zYJTbjQJBzGpY8UoDNxxEKU",
  "key27": "4zbr6kD7AGDdaLLfNYEVbYuB8aKZ6JmgDQxjQVRzNi5M8YiEXSWQQfezSiHRCVjrLBdFffWWhvMJ1tUnNjbCrfvu",
  "key28": "3oUBEJPzAyMFZhHcZhLb6Zar61MAhqhAfWe2oBHfepJWfawYuaPn7bLEoVXSXcAVDyq8ZoRGBaPiLzgPF3x8jQNC",
  "key29": "Me3gKghG3FaqoYd8Qn5DYNbK9RhXEPr2ptsGZKpwUEJM7L1GwnNAfYbammTrjGN5jdA524t5VBztAELoTasrDch"
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
