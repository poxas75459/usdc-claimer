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
    "54m1oubiWZGQLiEQQegRXYXHVQuYMzHkWsQxA7jeLnE8SZhV4SjggWJiP2TkD9tk5M23WNH3qrLsAKjfGrdS9Lff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvBPMcCRNvhNmXTcfCuheZmyWtesG3gB76VsZcoS7wbhqg6kxgifaWj24R7LJeVLd8tKseXjEmNjeL2jkihZxUi",
  "key1": "5bCF9QmHsYeSUvWeq49P4Bzq7mQdAxd5QkFMYPcm8X4fuaXnWq283JtTdnFEoSpyoVwY1emTVUvUy18kdodwVcgP",
  "key2": "3oWf3ULheXdHEzRhU2w5U2363f91QfzX8VjWAe4x19EcZfom57hJ9wSdghPKVv4UKcrmRvNKmfngNUsyUo2LVbz2",
  "key3": "3KzLQaLAgRgrATPE6iBvnoyZ3ibLk2iWhkMDo29KYwDFgxgmBjaDEDVJZdZr7CAxzbQVchoxaaKiMYgJWDveyG9K",
  "key4": "2yDLXiqrkcYc7mQacUtBnk6wZssc6P6X2hreW9K1paJiSGmWBHUUFL2gcR1TMdtoWMMLN8TsAubFqFH4wFQtb9tZ",
  "key5": "4NTRPUcbGcxuZQV7Xxjg6sfbLptQti6529perZyaFNXhSZTgQ7EDNK312kTf6SAxTSbf3wG6svHLPg5c9dPghDCc",
  "key6": "5GvkBM9ZA53Db2ansvUPqPwL8ffHmQzT8bgRmcoKxg8fCtKD3KgSnywybaAbGEU4eXmouVxPzJzAAjdgQjZMZBBw",
  "key7": "43kdXR4tYPgnjzmaaBjzuoQD76HXD6NAgrnW8C9BjYttAgXXVbXFZsaUm3ZzZyUYeZnGcNYqXQqL3hhyNvJReXrj",
  "key8": "S843MTiTSGTUcBRcG4Z7UQAJtoc14Sc7NM4Rt9EgkX1mHaPCaQAsMcFQsWFNH9prwTzuC7xhZ3qxFP9q82tUtKG",
  "key9": "5yFNLZtCBW1nniWDs2QuuwtfVnzjVba8LgY6pC5gCNusrdhyS2wnCM9odvHjE13cHcUCSQ7xfek7Z7TzaUAnCnv7",
  "key10": "28arbLeV3UhWu5VS24TgrsHHt1sw2H4BeuWwYZGc8uoRyaNyPUSB4dopWSoj5dYyHTkHFgxhathphcyzteedqtRQ",
  "key11": "4fHfQAxCXacZqnYAyaZikYidTwJbvvJMZgnQ4hU1311suRPffa8c9ZVNVRxpkr5h9SaMhHYh5zf7j3x1TrSsesVn",
  "key12": "5bh66Snpsyod53YDeavp3UuFypGrwLdLmaNJ3WFrhRHA6DwrDLi8kgJLdjktt91dL2kEkDt6a4eZRPen6DGCKWt9",
  "key13": "4dsUjrr6HQK771pX9vNk3Sb7DGA1UenMeCCKai5mK9otaqRpKZuBZMz2BACXCuWPBbPZAy8pDAHQrFkHV7Sp1myK",
  "key14": "2kocvy6iRYVb4n4Ey6SfisJDjuttBMcWBB7ynoDk8mEoWumwwVoCRh3CrDivqgp7df3CLcA8kJGReRwYs8toKRh6",
  "key15": "63bifRgoW2fKEYdBG23PvPmKkPtX8xwJde2PxRef3dQ7dR8rnuCcwzqaTsU7eiWhM44MsbMMQHVa6USeqJqwxu7U",
  "key16": "57nYiDmAV5BuQoNrp6BEx2fhdnLEvMsd7UmjreKkWuQke4MiFyi5EePpC528xc7NU4yCAAn547KABfqtto5icX2S",
  "key17": "nrKwoqSK12kTBvUc8H2W71iwmPGPVCgZd7SahXwioyx6YtXd9PbKzNyQTaueL1xGGTM9ffWpfcUsLwPV2siF92S",
  "key18": "2HEcH1FKmqc8C97t5pXEFAqCFE8QHz1iUpNbTG3JMA4xsJmSb5nfoTY9cCJnvNoy6yGH5NYq2Jjzqdb2EX1ytC5B",
  "key19": "29ru8SNBE7jWmj9oRktoJU6bGhsNfu12b5CWFXvZxSbZPjWffutU7XA2nVLu3oUsmBFFm3GYZfuP97iM2tku2NSk",
  "key20": "3q88HSPjT8VijPNAf3grU88kKHumGq5T9mxmPfyYzA9oodg2G5pma5mPSVjhFmt3mVMQttSAWRmHJ8LCXxBAjN23",
  "key21": "FgWkuRaHu1Ja5LeMXauUqgXee7vUMEd8VsucXPj5Y5VPeJS8MqL2XJBvBKDLhD4wgSFiFJFDeD3oX3tcVyjYKFQ",
  "key22": "3E4YJzSTvw5swKJvbWiSUUKfEhaA94y6nzJG2vbYwskohPKNfhcSVgNuvdTGJrEMvqUDd63gyc6Rd8L7Utjxczf3",
  "key23": "3SqMxhfaetNi5LVuFVqJWds9RJFq2fc679HzHej3QqDPv3BafPp9rvzvqALZzkSBNnVhNcWuZVkkHGV2NsAu8RS8",
  "key24": "4gqsEXfjF6CpPtKgKNRFcJn31vGemHzJYUBFNdxJzLfj2z4RVKPU7C4qko6ot6ZUvF8jGWPKPkiyj7fFiwY1YtD1",
  "key25": "4zdo17qJtfrKvw2ZkrcFtxSssmKR6f5usq3LBVdQa73FpiACs2JG3VGv1wxqKuX7xkFZ1UQeRfooysQJDriSZmSw",
  "key26": "WaMLpCumczntC84XAhEUX8LVjhwTke6piUmJgAgJngnqCBCEN7kPEUKd5Vo7xbfyySgMPtVHPJ6Kt92n4TDHbiv"
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
