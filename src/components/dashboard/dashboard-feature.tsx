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
    "3aPLckog8oLA8iohLbCVpLc2Gs1g6Rt6B6L15d7sK4edeuEdmQjanbhkbEUCrDp4MiywGXpUc6nDt1HF8vLJnDLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7n6XZx4kU4MW8rKAVwim3aX7Um33nDHBwsYN2KggcorYy5Gx51PM4EpsMy9CHd7c539PKvQHPXxipBQ8Fes4R9",
  "key1": "37EdBBAtbVZqJtK6uJ9wZ6WuEaKJ6Srgk28V2T7ySMg5FthmncGZ8sPaHuDbkyLTQeuz7gbYfK7Ldk2wUW1EiZZ9",
  "key2": "5XsZocU2q5X6KN9WeaKUtoePMwMkefrmXPdW5sRrpxLc9tGsb7jdTw1JEyMjtvZuRKmSm3x5UePRBB5G4FVUtvGn",
  "key3": "3WXXLArDWgaWN6g1b47aDwAmaHBvhUhR4R77A6EgQpYgBEWD6ZsH5jvBgpub2aYx4PUoGapdGjY5Q9vZUPW3ytY8",
  "key4": "r1Q94Zdau9mGdz3PVDTFwGBCSLWpLTHsnL1evA8KYBzjGySrn7LoZPHt7zSsBpvPsZAiA3SUAZye6Cc4y894dxm",
  "key5": "Q9j8qyuV12uRbiodPBo54rKjJEpGm2SR6EHmJRSVZMPUjkGCr3Ad6rLFQ9WF5F44MU2vjt5yrniAtnPwcGdc1vt",
  "key6": "4qgyxnBjDW3PnAeZVFxXKxRu5y7EuYDnPzcSAF1ywZtDVCZrewKeXKsKad7Yu7AXjpxnZoBky9PeMUJJG62iz3JC",
  "key7": "3qZhoD66Xj9tMrVgsyzBKUDdZzg8NYpzXt4d4xebJ9ZYpKCWurRChajuQvne2jLzUjCWV9FphLi7r634p4JjP9cL",
  "key8": "2gwrLVGYhmcKw6YRwnewe8SY1pm6eAYijsTkH1WoF4k1x1neX5kenP6i22ZpTSDJVVyhoGAEP3fdz5k2gMGRQ5R7",
  "key9": "4t9jxhgiBaYTWgREZwcwbiPdQwxWMC3LEBsAWoWqobLdfbHvSTT4FYuEcDsJcJeZgTCehPAwjzLRNB2NAmp5mYWN",
  "key10": "2qMTbCPoDGgJx8nYihyAuXv4jSvc2uSB9C78kbGB1NUC3hMXosYF2mHEi1CCzV2wFzQwV5oJdoEzMWkS4CGFWDRe",
  "key11": "2qPgvdbuecYN7uzUnEKE1DNJAEDpaMrFhfm6se3HmG5uJb8J5jvNRFD6Lr1epTu5VdHm2h5dJn7k3argskwF492r",
  "key12": "4mUXx5R58oGtnuj9SuZQrkuYGJKaRBrmX9ddN2A2rxeJJb7EhGcoYaxqwNc6YoEzAgy9tY3jDST9dzXAfBnxDqqA",
  "key13": "3hJLJ4sBZAj58UqS228LJA2iecaDmahmFRWyXEMSRzGktjHHGrZHtnHG1ageCX6pYjTmm9awGDcrTbQNYMm1gFPf",
  "key14": "2hWDiezwsPsB2vUJXYBAFcKXKwQHc755Rx7kaJPrtQXb68NxmrSpqowczCpbPAoTwmsnv6nVjH5QXdbLoKsg5ALk",
  "key15": "2vJkEvpN3Pfy8NKqm1taECqWT6ZJGUXbzeg43za61UdWArgJqyX2cRxmtDjCF7r9JEo1JeKbRSoFyHAm6mkRficT",
  "key16": "sidaRdwn7F3heTmqryLRdvjNhXQumsDyEknRJ7j1ASPJg1LBRfPWUSPvkKesVmmrLj3Z2V3qr6QWKu6E8L6a1AV",
  "key17": "B2gDJZmRfbomkYGdCXxXv6uKEkFTPWdMZ9HTmECZ7Gj2CNCXYdYgojeLyHSYGM5W3yzsGy7A5tWJM6DZoFBo3jA",
  "key18": "JMSpdUZSgcHoKC9rLhh4oLkij3m4Ub84QTrgkDXVxaskTekEdmeKUpck3rqTJKmx1cMHPhRqaiEWpkebxFnyebk",
  "key19": "wZWJoemFL8TEgqHWeAifXJ5ETaYP73MfLZFZX5JS6Aj7B8NqfUjuqfJAekmp4NGYbG84oDF19reefkQ9jnQMCHf",
  "key20": "2fcPxSmCfTntDtB8rHBkFN8Uj8reLbYNphjzqxMBLGD6UFNyXw5XFyTkwZHN6HAp4qsMgpckkHJApqMFHJqPGtud",
  "key21": "Jqmqp8f9HJcvtDAaNgwZpNF6an3g9aiQH7SPCcE98poJ9T8CUn8MDqRYKxGScFjiriwcyocAr64qDLcvFhYTcop",
  "key22": "2dqY8B28r7wMvJRnb8XiVNFgqVoK4B85XXWBX2JkMrCcKgujNjRjkGbPWhhJYKGGQ23Gx65KmGVQ4AqAu6LgcaEA",
  "key23": "2Uw6FVw3HHTr6YBVSEjTrQqZMMCj5cjHCxYbUtLZnZJp4z48NLTGWNMEaGxSuWFS6qAdATDpeWtgxBV4ETDbxZTk",
  "key24": "3mjxDXPbCxUdL2gE2mXiTgaMXhjsj6oeHXBDL1xArMGyy7qMFKecTdSwKQRscb8UYoYnZtnYAMYTd2a71wXFm7nv",
  "key25": "219aZkhD4BCsDC8kbngeGU1q9YGmTTkxYghjQxYwN5yQy67ZcXu32Hh7ag319NUodNSZLzTmR3YdzAagYPqSTaik",
  "key26": "2Fx3TKmhTWcFjtcP8G9SC4is4RsrAhtwVnn9visKMpPbfsuJCuTrkLDwJS97YZC3F2cXBM2BFTZaBXSbtQMQ4ybk",
  "key27": "2QMhL7nukqtgQyHvUQo4HvzC5xYKiKuuAa1w9e2111djp1HGvn37Pm697PBhYaVHrrAcmh6BgFJaymL3syH8k1Lk",
  "key28": "4gwh69BcB4mk1rZjbNQkpKWRWQpq6dCC5cFxWUkq8UQjXaqjR9hFRMzCBnTRTRZ5s4dmn4Uzb4M2KxmEx2Hi3Y7o",
  "key29": "2hoHNvKBLHGV2efqds8N9B5wGtpQpgE9nS2XX7y6Wsq4NLGH33ViPjprJjQcbrdXy5QYGGo1Fav5JXrQaRZz2qw7",
  "key30": "2np3oZcWV9C8pFTnS8eab24sMtZPkpBYV7yDZCAbpyRNqKoLMyiWvkoGbp2AyL55z1Yc9FfWxZsxwWaxbavzHp7L",
  "key31": "5cCyzb2uvRVnwspobTFLJeri1rYs2VxP3eYqdx6XZe1NaDWhHJzAZJaWanJdmkvkVxggW19E6317EmQNBAQnc2vM",
  "key32": "5Yk7xu9XZ8agJyBYKT2GN3xnedfkGiqquGoaUeHkrL8w68xx4XwT7i2nfyt1C9UeSZhN937gKvyysQTeCu84Yqub",
  "key33": "4cwZpfKuP8snuyZY3ATZkFKnuYrb9nLgb3LhPs4NxBxPMXEKmunyfVJM5rvfshtSAREHZY8JQu6SQF5xAUz11jKx",
  "key34": "5MRUMnzGJe3nU1DxjwS9QeDyUVVRd7sWvFRsHdWESzpTv5aHJLW8JemNZVsHLBrcXJWcz2nPjrarNgjYP9TEEnEu",
  "key35": "55DCanW1VTYA7PQgaVZxexP65Quprod3CKN2A1YrKGQEQ8xGrckMTbRP3QFZq2nahzxcmSPurx9ABWnHYDyWovJ1",
  "key36": "66CBq7QuCTRYYGNBXfgJatn1Z51JpRc8EzWEZ6GxAQiKgdGGQKecqsQcXTAbapautMrDJSBqZrfHhpx7oEmvMRXE"
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
