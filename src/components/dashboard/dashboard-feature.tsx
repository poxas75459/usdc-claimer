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
    "qJBEEz6MteFVtuB7X3dLY41NPuxYCD7nBZgpwmCDt3V9iX1hDxCMMw3chKg5H3j9KCNLqAjc4Bm9Hwsk28x1tLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aYQfERTiDUYpAVyxFQ8Qhcb4MTX6KsD8CnGtK3cgsseKoYNxWq3kBpMg3SNMyUKeWhfKHdS3T9Bp3BvhKuThrXb",
  "key1": "DZUVCwwnC9H3Uw6adjeNYQL933byNU63RozXtC6FRGRS1Ukhnv2Zw6uRei5bLqayhK6KFmHPodC7QaaJg55qzXQ",
  "key2": "5gTRHgJHSaCDv36W1vGrQCUf5L4HPfU5fEjEoYVb2NSbAK7Uz5ZfAM7gqkrtEBFXde6Z1zL6Uj319a8Bfcb4qdat",
  "key3": "292RbUjrMS9fNLqqNewki1D1fd1bsk3cTCkCEiRLukxBoNYzqExbifrT8pKyzLm1xs967t7JkFiBxn7ZssogmxbK",
  "key4": "DYJFuL4nL7MKuCfbSHD6aTukMLtR2ERLcXdaF6YMHiuDPRueNF915pWRdmgYGzs6YwET753Yue1tx9C97C49qhJ",
  "key5": "4PKJQuGpzJNVH35VGb7VnHiknGWXaSqpW2qVCHeByP8FHozwHprYnStPng1UFaMaLx4xwGXrB2FxeoGWApiP3AkF",
  "key6": "5M3MQYD6d1UpUqQ5szuAXY7Pa3vzjjKFh8PZZTz3XXTBbXaqBECgoZ7gwECZDmxx2n7B6KNAbtqBjvshxCfcqrnK",
  "key7": "1suTMYKNm1bfqZrkd5rrnDt2LFRREABVrNi3PW89d7HMewbaDMuH9FVcVC8SBQssFM4iZU67dn7Tdz3UMRmDgR6",
  "key8": "2e7Mr7eUCtm6NdQyrWAo8CstxNPN1hHGbxDVHfRyqAe9aLcD87pukDYbbFfnHbSvA54FzAdcoUyhbsK98CPH15GW",
  "key9": "fPF2aUwDeZUvZC97LMRfEwdzWEDGL18WRxfTKZ8UvstZDsssj7HxW6x9rJKrLNvuM9epMiwupsQUJ1MyVsqJYvL",
  "key10": "4qp5RVkJyBnCCHcCAMCR48rH3qRt5RUpbcJoZE7GMiDorQEeTpMULk7uxYPCkVVoTHrgSzWpNVTxgcJB7qbGB6xV",
  "key11": "2TUF1KQsxvpr9gBt5tdVxxMa28qyzjkjAuC66ov4o5DzL5TFnDLvw9SB4DjdppCFAcWqY8XUgbV4B9w1FiqKfj8d",
  "key12": "4qjDruig92xJSFv2qDkeAeTzyChPH3pvwt2Sfi9acHn49vdJb7xJMokBuY6f1E6o1bQ7yv1QohQdC4b4BJgXoWRP",
  "key13": "2oR9v6EDWV4FbhfsEGwQURtiqucx349zuQ5Gxwj1Mg6t9a5xhD1LfMYWGGq6Z6RBdwUsnUBMNEDDCFwDJupFurDb",
  "key14": "3gSw7KVUskJSqgBnEQSVE78o5xNgxTPnUS9iRMpZ99dXzKqrHdyyNdUtMQ3NoUZNwKWa11rVGrcAVPQ6UyNDAc8h",
  "key15": "6gAjRUv7ThTUHhHRaes9WRcSsgAUwbh1XCeAuej4f8yw8sv27o1ZadcmBVoDtGkjtoFCT3KHdcG3jsK9Neah3bm",
  "key16": "5kJUyiMnoHEJmsET7rHqcL6LPUMkco843qj2n7tVWA1bzxRetGLk2hUPVF2WUfupXp8fpTZHJUyfuMwARErui68r",
  "key17": "3xjdtJnGbJyZFt7w7UUs5Wr79wKFX7GTnzFd5kqDMz8WjnTAZbuARH8c6N5bC9vFzjnxR2hNGPiMtLKv6hvm83ZS",
  "key18": "3ZjYjAe31S43XHggMNqBau4bS1mNFiqC8ait2XUduQgxWdkaTa3PxrCekWJdC9wHg8qKiF2CsAjgaCBVpsoALpD7",
  "key19": "cuCMddPDG8ShAraoDB6FJ8QbeQvixrkFzK65w3ETsPoo82M9sAFdVqyhiaJZs8DTJ94M8q6WfkokqyVssAQzbgt",
  "key20": "2CctpvduQAr2zEcnAs5frzAhhYMhUqe2qKWvCgoGXXR66whtzakGRXRUeyd2vRz4ab6EzF2f6xxKig1CvsrJ2gBL",
  "key21": "bNZFEio6VxxWEXYBL1Mo5cTuFTgKgz77LEjvDzdR6qfGUDYzLZqUCahBR1jVsqoWfXJ5EUgQJ2bvpSBh6wN9UNd",
  "key22": "RPbrhF4Vormv4efA26hx2WNDcN1JM6mudEEgtj6sEhiztcMWhd1i5Zv4TVdSEi5tCwagsATYpfTuqX46kbZ4wCh",
  "key23": "55Wt57xd9t5CHbBfcCvtrcYwjFLXXtUyodavryXJU6Jw4kr4pWfv7XUqkcv9gLPuV9NdK89Q6b1Tjg346CRXiKUP",
  "key24": "2feTmJyPpRPyEGbTqYAAxCRKZhL5oB2ngmNdHp3dkX6KVRdGqGKdJj5rWRZ1XoEZhgzjwXvWercGeikDdnTutsRP",
  "key25": "5uDusrC2XXiwtuGh5DBptszRtwmBbiboo7FLJepj7S6rMNQNsc1cPAqHapzN8thB8b1qjPYXM13UJRKL1iuEMGhc"
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
