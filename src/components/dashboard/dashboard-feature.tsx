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
    "4zG2jDWkkXxzp2r4pycp4Umdxr2WVeeBA98RNkXNb4uuZPB3Zs6UpSjvsz9u6qjidkPFJFqpjDsV1DfESZf71FMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRhZf56QWnL9x8hhKyb5Lw1ykX372ZuaXNDdhXqUhPGWYURX3xvvHQRrHskP1DS9Xh4h8gk7UjyKoGGRtZzknzu",
  "key1": "2QM5eeVVypGfPaTeBzqJPDcqhK3iYEmkLLMjzaStJscySNMUmjDtz6pTgUtA5yRWzTq7vxoTExYtr39NwXaCDRAN",
  "key2": "31mc5qh9JMXmbhhFNVhr5wTJHuCMKzvsmpUCVni8hme5Xqf4MHDjJZF49znZJJMKfzfz9mKgV2RuXuxHFJp9SND3",
  "key3": "4HHuTdKq7FVNuoxW93xGh3B9PcYejexZjP9WBz8cS3HqmDqS3EBNtWfWnUoFyavx4eXDc44k97jNSeGy23SBD57f",
  "key4": "fSS467475TKRuFKgbhUuNEHJM8dKyZAZdCw1XgWz6GxBxbq1pawXbEZBRKAeeNnDDsgsZ7nQw1Huz5L51ATu6iL",
  "key5": "5QoaX2dSuAdtRN767v9kcmCoWr4iGSWnUARZydquvW49CcePfEdm9zPVpz5H5U7mJS5F2yd3kYsr133yVGRZDyWE",
  "key6": "5u4UYVEq74VnNVJQut8Cs1kTtWCxZr6uf5nPjjxPkcUE6jJyWKEt6PpexfedPyu8uoTuTAe7T3qAzJXLBygNqR3Y",
  "key7": "3tsL87NN239pwwsus97hnsUJ5ZpNZCDrzsDmpE3ks3Usr8EhnW3bxKqm5yk1dUTtthMHmMBiHSz2nZJZ8fqUAaTf",
  "key8": "4BWrRCuBbEhNFipt7Y85s8iERrbWUmkZ9SrTHRMZrytZdkmnxmWtVFXV754XebZ3viJ4kVDm9vTvjVMrdnuuHDw8",
  "key9": "4qYUQzwHrpcC63pmcoMkgQoZRpARaJ8jfQfBSYorQ8SjSB7M7ZeR3TRGRoLnCrvUyTVAhNjNjXyDXLX1ScS2ChbH",
  "key10": "3CRgr5ZnypiXkMjyPrFPnznRoSW8uCEW8uq686e5qK52PXCq8u388E4Kx2KomwzZxwHGBqXR1Zc4w7RBFELpa1Hn",
  "key11": "5bnXkDMuUp8FvGug9Q1rc756Lh961D5YCWYJCgcmXsTU7cKHqmVqN7MEbcDTos21VCzvdzLBkrWNX844eC1Jn13",
  "key12": "MvSWsQ3Z1itDDEsr3bwks8rnGB7A5ZvNWmZDh7ZCmSyepvG4VrHKTARfZ6furvVeyx39rjBdv8DpaJfQdtjbAp2",
  "key13": "3Y4vtLgo46YXnP5cXevyNJtP6SDeTkiA3Pigxke3Ko9Y8dXbdk7tvdC3zgywTM3j8XsDVAkx2r7Tb1gtmNNWVugm",
  "key14": "5p6d1Es9e3ugZP6SUS1XWBbQsdck3PWgn2MTR7aXLKa9eycrRaNbXgGPXxTaMvWDLpjrwDD8vcvKXeahF4PmbHTV",
  "key15": "2FvBAX9AFDsEc7G5nq2q3HPZkBHUmEywB7VqZsujQqfczS52rHVg62Pv6jJSADg5Q7bQ9ED7c2So4xHjGaKVotKK",
  "key16": "5K5evoNrqv6MKqxUfqgh1QYSKpJc38obHCzV9oDYkPjowkuVh8K3us5n7JXATFZEYqpHn4PXv48iLdRUvPCdexRi",
  "key17": "btXLAgxmGtWtAPM11xkgbkgYcXjbsvetHXayg8qnpw7XAcsbeaj2ijpMR9SQLWCk6n6pAjkK1w173mEyk3geoFv",
  "key18": "5hqkyeMqzrzuHQgjywuTqruDK999YaG8D1ZsV49Mu97Q1dL7iTchpv7wRLZXKSQN2HSwASRuhx7inXZeQXTrGHyg",
  "key19": "4GDUBDSz7crSfXCwSbLofjbQg6Xi5VqHsukBb4NbKyuikJcRjKMqKgL7m7eHynujN66uL8HBXz73M2S7CrnvcLTs",
  "key20": "414NPxMfzWG8epTbWsnpLFBpKuHD91uNVDHN5fUTZufqrEVv28a94wMqhT7prvzSNZ65eE4uarLbVDL2w8YcW4J",
  "key21": "4Hyb58exKJcy7bvtDsYrFDA7jvS1oDWLi6i8PGjCJSNaWtMmwb8cSFQLiJjS1eHP4oxVRmYuqYPdguY1Lkj87djc",
  "key22": "4dfAFu2GAasBMVwtvNW2ZZDrFAM1m9WYmMiyjURp9h5Fa9QMwWasmssyJFixfUsuvvMiy4tFGurUMR9VvPyoZNjU",
  "key23": "3R61YUmfUNa5hxf8A4RBZMC36QstyKzHKPnttTsPNEF763aAoa3uWn8VDJmkchAvC1iD9brbJpPvRq1gaX7nnHh6",
  "key24": "3yQDAswrCMSKAg22TqAUqgyEA4yXRwxtipJxWka8Lp1fB65tGHtExxKNnea6RrwxFxfqASFdMAjHwMVxtWhnTpdv",
  "key25": "3bnQdqVsGzvwHbuhC9L1cL78LCfbJzFaeeXMBdtLsXhoBUSTCbvwcqiQzTyhyNtXc1aAPBgZ31DNLeXM1uzWMCjA",
  "key26": "2NQwPwmdmzxp3atq2arVCKBN7Xfw7qX7qqFgCixcq4gGdcZREjM5GxpD6JNE7RDPJvJL6BUB1DFwdsgvvQb5TEVg",
  "key27": "4fdd4Knmry1UgQcL8ZypSy72vgkL2TWSkMvVyMY55bTuPDrK6jdN7vErbmyhaDMS5UzwnGa628fojtiyNEYjigd7",
  "key28": "rUcD2NbA4GJDjcCRxK2XP6dmwvMJKSnHGAcwnphuCrUXZ521mMcSAxrrMaH29WHMTxBBbNKqNsRRvNKJv5cGQZq",
  "key29": "4CbG5TtcQPSpGEs8NT8LndPSknVY1TLcwCZGXUrWSzUdq8P2APAiS1r2QKegb5LbNb3DeWEC3sSXTkdBp5qY5BoJ",
  "key30": "5vpiRjPsHkLRvHBedg65qdkB8XJnTHu1HNPRKjpuWkYagJh1HTs12mgT3eRPK1MiiHQwpYTVBDxzgXExk8qZe8b8"
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
