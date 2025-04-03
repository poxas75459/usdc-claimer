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
    "3YD1GfoWHjYPsv59JNWg6qTKkZiA1rYctevD1aaDw5eKySzv39fetEqmTNNuymd2cu6eBDyj55AUqH5rDLgYrMsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HixcLDK2rYh7K5EiC5tDJfSCkCy6Pv7gieD4C11Dp3GX4396CRnZqkyzkHTTewXhwq2w9CeoR3rh96S5jNKH7Z",
  "key1": "223PNq6m6M5PM3BWiWWRMvah1YnTggc3hPi8vaMdUKT2CT2Q1CQwjT6rC9ZPfsGL4JkxcHMGtmk4K3zwJHGTYqas",
  "key2": "2Lktx7vyY5w4eN3rcxQ2yEDozmnQ6sbskRdRtDLX5a6ANQzv4Bz92xguusUXgUPy6UTHeWnSBWxmdVncku5ciicq",
  "key3": "2zaFLPRkhf6TFsAdmbxDFW9xDiRGPmgSN9nx4u2W9ahQmVk9J9yodqdRgMa8mv6DJmQtiPRXn3gkgdPrSFpoZv2o",
  "key4": "3fMfALJrxaBGjQAQrUyKXf1GMpD44uEAdSk6CZwPjNB36zVaiw7vje4HLUtabTt5vcwFYc3KqD6ouPW6VEWg1i3J",
  "key5": "5LdpZukMGyzvi83rXvPZjFF2qEU3pQNfe2SwqWUx7Th7u3fvBYJYxbJfovm1CsYwa8Wc2Sph2wuMaugbT8bctQ27",
  "key6": "2vqcvw4NbmioU3LTJ8Y5PyATF4WedjcsokpBmHyrEB9HK99Kv2GJyR29XKn9ZNrmd1RmWufUh44NHFmtAdwNePMP",
  "key7": "S14iBupLYk2yWL6jGjXyG7HWS478jHbXY1bR5EuBHGRLRzWYHYjJ8zgeeEmYzFeSt5kzWAv8GegeivTn9zwT2Yu",
  "key8": "5EiHa5VgiptcPtmxdNcQw9N5Giku61FBbjuKJWd4u2V9945L7soZgZBGEGQ9Ho8bykF53XQGaKh2t5zZLVXjTvL1",
  "key9": "47Z2Hmp38x2mDFinXVePJh2Dc3p6guHu27daQaxoRaicp4LUTNUGwwFw88zs1Aw4mC3Saus7zMSLuZyp5nXdutY2",
  "key10": "3BCpBDB5AkwnuJXJGF2DKGZzfsEfjm4WR8AxZhU5YDhkfcF9y29GEfXRerDFuFZM584DoAB5wmbRdYVXhXh1NaGq",
  "key11": "etR8Nzq59TUrfEG5FntadbqvED97NLU9jJANKdYVqtUgFxphPZNmVumFMFReQhEnwwvnKog9KPoQ9mXEeqAEwiV",
  "key12": "5emCd4WCE6cxyyfkwPHrcreiPCpRsfQwTu36fvUwMNZtpF6pBurCjhkP5YaxCM1TNFUNzW3nfSP65cEbc4Zs58V3",
  "key13": "iNs3qUCZbCy29YbtsAiqJg6VxBfPqMJVUHRor2Q7Gv5rzwPEi22dKFR1aCHz9azvQvVvtvTmFQaa8EHELhvjesG",
  "key14": "5LxXKxNK8z5Nf7BdWHnZ5Puugoisbq7ovDRhthuJfk9pGmgmNUk44Jt5sho9CbGJnAJUxcEyyMKSjeuRVdVHz3jD",
  "key15": "2xArSNspBXxKtrUJUriFVJN84aFHfGYVcZAeYq22Rye6UnEh1sMTamZjv7gU4L5quKgP4sNYejF7fD2x5mRykmfU",
  "key16": "tvdqYFo1cJfnRzwGyMqEvvFbLbj9QSpDjnWkTdfUm4RyJjwd2Lzk4duaJLAcHjktewGhuD1hJybY2Yfxddc2z6p",
  "key17": "54wK4LyM5HkTiWmtFkab6WQaWhxVu2iScjiBCvUBj9WUgBohY9dFxGR8A2LNjuBgfWVvnzTDVw9kGxQnAYywQ3zG",
  "key18": "3rwmZsCrFLTH59irvcKVyQir2oh5JDKXeuJBTRCNn8A1HMzS2Y771kiu1UoW2m1jP5vHo3wfS8ZDSkCg9fP3vk9t",
  "key19": "4LNAUbJLge6JHAKWTENjoqbitTgvYtna6uXcVPKF99Go5wmtG1B5Rm2gdU4iDaXPMNbK2nknmaq4fC7fLQCJyhji",
  "key20": "iHquh85Qq7qmniozCDyNZzEaeriYhG8qzXCJod3LYDfUAZ2N8fM1uMR5oWhsf2DyP2KUB4edNvdLfRNVxCetgze",
  "key21": "5TSJ2EMnerwgqQAL33ioj3VVTnYcv1fKWxNNQpxJg6si3abXSnDPDFtJ9Dd5L5VPF4F8K9rfcP5fwFEVFEqEt5qE",
  "key22": "3ttskHSoUKp5SPBbo7JGBxqxSfvvkZ5bE4aFCKaK85wNs4TdFS2uTL9njmdvk1PRg3XLRZZJt53DkLSNnVVjJSms",
  "key23": "5eYVYnB43nuNTuRUUr4chBfrKiQfVxLpAykrtfRTLoTn8oWpoD4wrQtNU2b5R9FmsZdRz26QgQ72AE4NdvDzvxo7",
  "key24": "5g5pr7mmqEdPod3uWvQm53wJBYAmySc6qvJv3qhFcZJXTkwir4syVfvKEiPafuQnM1mwn9idbJMkEkez3pPzt1tv"
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
