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
    "24vsypcFGmbPHuwStrQD1jAfwC7GBTosdfKkCqQQXXPZfRyKnNQ1gyNZ6EsfR3q4KpreHegwy8239HgUBxQ8Jxyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxKpGQYhLgjsMCYqPtK2528fZY9npPQZugfQC4y7yUjhk5otwXipPT39bK9j9vPj47agSVadLS8ycKChcsg9xNw",
  "key1": "3zwSnmtiGri41KLiJhn2EKX2W3CktU5a2jm9kFV4XK8WpJs9fR9HKcENvMhqhfAiRt2mJUkjaKGjpubNWgYwU6P6",
  "key2": "43DVMUBJx1MfdJtC6bL3xwxVsVFL3YC9RVdpQPfTt7hkvousH1QsWYP6qnkQSdumWiaN2dkRCx9sbLnhS4ysCLgo",
  "key3": "4eEEtQ3LKpZKE5UWUukYPkEa4Do3ytWd5y1mnbg5WBGVGG8xx9cvFMKcESxyUKFzvVvsDuoRkMNC6Qkj1FCAatKU",
  "key4": "2feDaErpzVqvVFRhNi6BxXREyvMjuzvZ6vDKgRcgmVWiaQc6xnQpELsTkWQxcXr7kEykP5fMBsvfYkFW1aRakkKG",
  "key5": "5aBEhQrSeUyWyjocqP8iFhFYaUE4PaFKP6SuGgfrgqojET1kqAVgEDfBD7a7Gb9854C2T9gWcUKPnmK7MiKswzVS",
  "key6": "2U6SwmSrAJx738WCq8M6ytg3d4a7JK2hetSxpxvNMBFKkJdTo7RK7rRFMifRp7J2RS4x99y5M6Q7iHByQ44ToA5S",
  "key7": "3SoRmntkMEGREq67R63TG4jN1bsHbBFgiKGas1jJhMYBLuh922YAKuB3Dz21iVbwhp8PKvNQ2Yq4hWgAjd1pbbAj",
  "key8": "63BNraNx5qBh49CFhtWX1K17LcQsMzZzbsPYhx2hoq4BJrtipE5X5eE48SMJQ3vvYCRmiQuUgo3TBVN3qd8RTXYw",
  "key9": "2eyVVV4izgsn8mJMfJ93WGeTezAToxjH6gNyxtC3zfpx3YRWeZzzhzEf5jCM95riyA2Ctk7QS3C25fVWeuuywzcp",
  "key10": "3qEPQVCnj1CcdEur8nc5MvnZKj96HmcEmb8eLpieAG5YAZ3mH1SEbkR6aPjDTzyPX5bEfoo1LUMncdaupLYfHLwK",
  "key11": "avoijkrV1cMrViYBkzavnWwKVuyrssNVtGyo1kRQgVubs1JnZqcvfPjRSNiP4jCxBs69cQKsg6u6iUUDBc2KG7T",
  "key12": "3QNrmhLx8ovwzpt8viKkw6h6Zbews6Lht8vrPQQEYEnLY16bf6q5yjA5vcvkVJ9rv5wQKXtvHo9ovnhxsVso59aQ",
  "key13": "656YuLncXeEHBLRtycAz2mfEfSHnNqQGTWGkKnYRcDxV4rGBpaWmXPsyVv4eKKJNsFD3mQtaXXmZzYr9TjmRDV1p",
  "key14": "54xyNoXVRPsgUv7VWWc7mUoS3KNXx5Pg2reC5x1qV1fnmR8r52JvWUmBUoC1V57heuMXuEbDWkAbownn7WTAdk49",
  "key15": "GAKMMXAJmUj1d1brjuvyTMfQicLcbrgVinF9xTrUXiFNmdyLcAD4Ky94Fp2Ckc34ajg6FtXkJq2KyJi7xHnytoW",
  "key16": "NEx7QqqryiMuaCSYDCaHyFjGZKBCy6o9H6TwWPEkT9n6Cd1RpxiQd8Gb8X5pgckLS3Gz8Hby4UkFZ2W8a2EzA98",
  "key17": "18oxoQPr5TSsJZsHjUg2QCejxWtjW1ZdSuyD4QanvsTNsZAEJ7JNeWzcbF81ZUafp8ViC87YbezdzXfHxDdZ8f9",
  "key18": "MB8HdghbHuQGtB4hkmb6ZVkHtEAZcL8E7MrUJKHwGw8tPDewqPniyJhBqcLKrUXdGzZy8TDVqEhDq1ppYrKFiUx",
  "key19": "3a2VEQLSKUC4pWLqmemTB5wahtT83Sv1JbaDTTAGMBR5SgjrvwtT5D6NqFt7iMy9Q5BEAkZ14PPCj6MHur5MhCuK",
  "key20": "5HLTMe9WiYvpYUCbo5Ba7TSFiXy4Smmomft4Bcg4U3uHyYrnZPXf8pZyJCMzcB8JSyVtvAtchYEfXdUfop6HxdEQ",
  "key21": "3GLXFa2LTh2pL7CwGc5Q2QgDmY67osTC3uVokSfKbYcmD34gZHJH9LiXBcsWiR8tVMVBJxsbwvW1iv5nN3p3koBb",
  "key22": "uvF5XaErYERYcsPFJnaGT532pYAkNzbopFRpXrkoKSs9oiDB2K1PXaXtVEABoDy7HeQeYXJsuSSA6wrY9MRsrhK",
  "key23": "3fPCqnMCE9eppoZEvCiuzcmsnuzFbYu7QAwxR4d5273g63PwYy3ji2xyzyVA7Na4ZjeF27fQ2zHLbofBAT8A65YP",
  "key24": "2P6CPn8h7nLJG8Hh8LtpkHWaGBzdKYsVBPmCgYvqGLTWnJLi5juvygEmyB8W6AiAqsW6fNr32FcDnfs3Wit28ziq",
  "key25": "4yDLNAMAgCyxZib7LrXaheLREpfnvfxGgy47oRzbxXEiDi7GTBDv3A1iXnzsCAASCUxhoG2svKit8XUTbFMvVUCN",
  "key26": "5Sf2WvzYRYGrT4gdT2FpNqkjnSBFyojFWqZTdiQgt48MotJN5kj1vsFKEYXqUwEsAVDCfMQAfWeey8KABKXu81rN",
  "key27": "S3aEC557Vi73XCzCyFeR2S91StzxzEya1BcYJsKqLs58WuUJd5qfwM1TbBcFLfTokF7XPmZtfQQx6GrPs4mDTPE",
  "key28": "3DBFy9pdLPAaWE2FFriGTDxD5X6VJjNCTJpCKke2e6fFvX4oCAimN9rkScDX6JKtNun5WrnAb6dGzE1ZiZkoDPUg"
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
