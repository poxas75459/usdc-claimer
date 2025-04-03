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
    "55DsFkVVd1DDCTJNcYpFhC8QancXjwYsTWNXm8Lgw5MJwkqqc4N3qNzxy3DgMYBsRX4JUG1Ss8HecneyvcHe2Nan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PioUiUiufgaF37oHXrm62CspwqPkEXv37gefJn1Jd2SoYEKvEas6jKNCTfcHZjGr7NM5bqed4v2uaEbBufFHjNg",
  "key1": "58g5Xi1n3Mq2xewbLibSvwW7jgaxXcaZN35xxG7nkgML8izTL7BwB2eoCo76Uc6abiVQMUkW4DFfrxhQ4MUqGQoh",
  "key2": "XJVZ7MJyUriEiYZpbvtvRgTKPyCxaBAjyndPZDQDPmTULZhjsuoRkJfYNwz1XZEYHTz4N2q5bBbPpArRAdjveeb",
  "key3": "dBcH47iy7XX6a27nankfjvigr8kGUUfa32ARoNrkJdREEwkdCFTAKfKiW6qsSiR3yi7aR6rj1D45uFNkS2znjKG",
  "key4": "2KSjjiMY2NiBj9mL71j192WT37DzvnZh9rPUdNcNJsS7zjYegD7rvco8s5CphEKRLJCzhzcpv4qdAtehyBU4zbPM",
  "key5": "2SWidKdkFZuGcJ6WG53xxxy4XCwSo243zHbEYETFXmq8qydXxFVzDjyH4BjVMQCF5EdQPUmgqbAtQZmo9PGV7eTm",
  "key6": "5KPcqCQiQeR25DXA1dqMX5uCsQuaS1wgFx6UhD758hyPV97kn3kpjm3E1MKKD5xJP5RgoiMYLVyTZ5MrtDdaQaTx",
  "key7": "4SrD6YNr5XgXDXvVa5sN352nQeLnAfhWQrBADpPS3kmApDZtXNimHQbsLoLqMEvjddNZby584z7ZmJpg2DtxodjQ",
  "key8": "ZbCpmomoJg5e9uRYjLa47yozg9Qdq9aHKM7d92BLudnzQkjAzTDiL8s3yHRDycffzLQxGtbxiPAtP1GszNF8X9C",
  "key9": "5TWEne9eevK3uYsR6tZBEjZbzPjU61da2HxihaTVY5tgmUHetfKiJ5jChZsxHcbuFR4T3uV13JfeTiYGncDuqTgC",
  "key10": "4ePLWQr2ARMtFFvxdiJhb6iFN3v9483cYxRg6TVRtJTCVWTgS5LJdop3eKZtEXfnVnHYtF7m5igjCVgD6XqXJZGW",
  "key11": "23LqwVWJWEQgCNx2n2oYc7BRH9cztP1HZuo3NjvYSEDAYB1oWqGgKgrmc5L5Sb2Uo1csGEgHXWzya2eBWjZLBxoA",
  "key12": "2SxXjUaKuzAPG3PSAuFawRNLeg73KU93k8BYsVkZhjF45JfhmH6anNQD5MXMkFofWHoLFStpjyKcY3J8KnNTiaPt",
  "key13": "rjHaWiv9RpB9r36xZvXn9b6yJw3vsBdHoN4EqyDsBsCjwYXvpzRvErkeBAvr6HXUEbXQos143wxHyKqnWAKHprC",
  "key14": "2cJAcwbkq2gqR9iGCbUvQJbTXvq1VxKbXBt2nTrd85CZzxDfebV8rBnPSFyDxCzZgtw8HUPqRhLxMieEZigWQqeV",
  "key15": "5XUYuh8LFVe1TLRXeRZiCops2oK6EzS7YqFLPP7mmxh49TiHeHy86PZhqsHFYoZA1cYX3UxTKbC7viYAdrsFwKRt",
  "key16": "4ktXdzLht4UsoMssgZSWRfP2UCCPtssr4Gt2H6pVnZLydZmjnEJXMFAhtbc9uMMbihzRXtAFBgJzK3ZBrNkhmUBk",
  "key17": "2B24KYvXAcPkG5fVoRaBpxPTCsS1S5vtLc1Sgofj39saM7TUjw9qtTbsrTMsEk4nGCm6D49pK39jj2y3qyi8GB7e",
  "key18": "4FVydfxCJmCbXB9qK7r9b2YJG4JfyGVVv8nbFF7WSWMdE22ncY66CgZRN1TAQomN9muQnrZr8wdCXJ6KPLmhVtJb",
  "key19": "2bnmGy4PcECDA7fSC7UR1ZeNk7LYgvgqH4oTeG566SZ5DKkaodYHik5sqYmeSY9Hd5g9rvTxWFGuBENMXkQk8z49",
  "key20": "BJZxoMYyPYFttmQ2hjirz94Z4biRSxWUjHLLpmGdZSHubVSctrMdpxUMSGrTfZcK9PVoq1GTMM7GUsXPciYytz9",
  "key21": "acn9yKr9q48n4bbq8QZhLQ5eqiZxHRqmAknScwQAVTdjj6ja7EjhtNxQwGrKCt32punQYpNDQgT7Km46BvV4Joi",
  "key22": "5VdeRyG3V8uHaNwaRVVZgxkDioEG6HWnzouiY77NxvYBRdSSwFZ5mrdyttFvnDvJUNhz26QA9rTvuucdTPBnbStr",
  "key23": "2N68paygE3QBD4P9m5MAV6pnauzRsP7ALPvU3CkHat9a1HobjJxE8QQsa5CKEbAXG9ajRoBGmfrZR7mxrWNSux2g",
  "key24": "4hs7r1odsaF5jtTLG7U3h91Xmbp3CKEc6bCMnasF6JoQvdpVZ2d8jkYy9Zat5JYKW3m41KWsbeL6EbaY3ZB2HR2X",
  "key25": "4T7q7y8DRdEH73EgSeSrYVtSrZVudxBkkjbvNZ2Wkc7Yx51QX35RawV3Fyq7Yrjusk2vavGjDhQcfvAqj3WJCxcw",
  "key26": "4bWWopw1sTq9gXSzp6Sh7eHqn48DkpQhU8RT7u9yiBLp1SQRC276Kjjfh9KFfYebj9BhGq3aXUFAn5PEgBZ9YtGH",
  "key27": "2NiehnFYvAWyFJgdDt5eMWLGbY8JHqLVMQ6JPaxjNDvJph4mmxtPqmmDDApCaerWHe4FKQz9P74watRbpH7DcehN"
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
