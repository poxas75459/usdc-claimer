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
    "66Dnbq1fh3FBjzbqCrEiV11J6c6x6AyUE6uZQKMiEV3EpE92c9jiMD7vLcEyCv6adCrndQSNWTfVYPQxsjKmjAjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNH8Vju9T5wjsVXaUiWsu8gZFAkkFy2bi4BNeoNxa9S7UdHDGwCUjsc8kMjkWxo7Anq1WTBuXEXL9Aj9k3EfrXZ",
  "key1": "4qUzjCevTfWpJhkGqox1BvnaAzhbfzEA1wjgTQ1MnZN4hayKcTN59My7JBy4fRaJDwgtvBT8DBVieqfSDcgJc4DM",
  "key2": "5q4qMZdCcVmY8uP1dB975LshBHZNVUmaTh692H4CF7XTSdBCA8ifcFzwgWsVHP7WBKhJ65ZtfP1H9LpiGnc1BnPQ",
  "key3": "2GfuKuNQBVrMd8bUHvdJesCt2aCJeTQHAQDrJbK63X7EateuVz3A1UCozxsQTmoStvqRRGZEF3zYpvKrK82L5cub",
  "key4": "4K9nZEvzcCMLQ2VdNTSWFRNCJ7Mfj2wXVTgrkp41wEeQHwuAbEUf2fhwfGbXCGHvKjsojL489s8AQeT9UfKhBo65",
  "key5": "3TpqXgMT3GfiSfzPccBm1quALwBxAVebfzRcMsptmqATzrWEDQvZshiS6ESguHQfeUM5DFgd38f5fbJEcTUDsvB5",
  "key6": "2YEq96CZEhnGnAiNaGXp5KsrYrd4DDGxZAXkrtxg8YmQ245ihXSvvfrEH3jEeQaauqa7GwjSTypMn2wsYS4C1ugx",
  "key7": "2cmKsFePistexAZaLfCePFwjMfbSa4LBQch2KWCVTF57Z2hD35Mzqq3HNx7hsQHXjzNDmT4cVizNV2YjJ5BU4kCb",
  "key8": "5PG8PMA8cgdeLmgGBTuKfnGovS9sVQr5JgXcYCefnKaKSC7juGiWFveHuFvTwdPy3aYnzU49Lt1GyEnnm5kN3KRY",
  "key9": "uciBbDus44FXuCVe3K848Mj9fSg3zEfjFLb4v5UPeyRWt9vnKAdLSknDPg2L5LsDgNfVELJ6X3hH9TSQRkhHYtP",
  "key10": "26hDt4s9imCQYT3CAHctZU7R3fDUSdWg4fbvv2ok7xJeNQPXJwkdmWncX9BxqCAeaSc7ih6PmQUHmwQfyHaZ858g",
  "key11": "5NHTsm882YLAF4bTysRKw1gpJoxqr3sp9PV1L8CA4YcAhseBG2VRk33iuCYsyssXuWue4qRzQKiA6KKBmUSVXwdW",
  "key12": "3v1bjTFXbxn7Ki638j8orun7quZvWTMqccSRN6ehK31nBzjnzBiNdDPVXYQDktYPUQfrw2XJDAyses1Z5gztB182",
  "key13": "2o2C1GWh2XWybE4538hBUnhFjngS29DMPqsBGv8M5hYJiDtVDLinTvgEVCG2wpcpSjzH1igtTDCX9HU2sxWgvt8n",
  "key14": "5tRmjHz6BMjSrx3WxV98QNwScryfSinJHVdDppGS8V6Es7sL8x7Fwpp2LQLh2cMyTD7Wh4TYs8tVAMACJNDLJeuZ",
  "key15": "5EigUTZ7ZtMfzojHVocQ68A21k2t2MmGM5igbE81HHXDcDCZKfoVcHhKr7rL7av9Uj7BmyGkeRze2iwuLasohZCy",
  "key16": "2qGmafX3EEutwEBzuy5e2KafYQsxL7x4fngqe2kFXwevkFsioLvf7UUc4GsccqzqWHvxChapfRm3TCSUzt3mbnRz",
  "key17": "VABxPu1trKd8y2S5oy44sUS3UrFtzpYF5KenDrd18dj8HtBtBxRiLSNhiKLCabrrTCAhbN6NYXKHWJ18VTwuzRi",
  "key18": "5xp6s21XoXwNZb9wh8odnrFQh1K4kRRb7oqFAWZotAzGqp2MVxiz7V9AcfJUprc7jNunRv6CVW2TfWn7QE9dSN1w",
  "key19": "5HPbCG3dyFEBTqkwt8eqvpNkYQJMNkR28A9KFv4UQ4FLVmos8BwtfMNz61Vw78p3AxLnUcWux8v57FqUdMmNXTxy",
  "key20": "5LsqcNd1BgZtYRgsQbUajJ2yXN4o1HTMvkjyRxqmBMZ5EZoz8FR3ZhScg5ugJ8wSnpXBPsR5WcUtwGG1ree8uxdH",
  "key21": "5p68AxeUCCsxg312kfhpDiQgf18PmYGmvXBGra27A5eDtDNMiNHup3UDScfwyS5PQq1wNExm8y5tYSr2nvZ4Qaq2",
  "key22": "2tqucF9bYhXqe1hUgyjHNgG3THCtBrmfJwahcBSSpKthZpWrGtYLoESw9C8QS9E4us84cKNCuCURLpPAWDQcCZMd",
  "key23": "61kXmxmMRMyrnLRUBXZMXMtJPgB6qkEW8khMpAP4AjjN4a1Ys9PeaSbYwXtye85qr81xyGi3iF8yL46RZTeBAfdk",
  "key24": "5gwzaRzmLow3iP1WnN5ifahU9h99kHwTWET3Vw9D6PwaBtPgNHAWFpmoRXsfmEw8yLaiaToWiCLBJ5w5LUNrDR4a",
  "key25": "4qhtKNqC9nUqZ6XbzZ2unWgWjHuQZdw6AqrYQkkrEuHdDj2jzqzPtc74rDYwveYFEPRBU4oqe1o9T1WQ5RDPCuXp",
  "key26": "3H8fJLiPXcdZzyuJb5dXJvcLffy1zMvopvf8NWq42wdYizxvmBd4CzCirydzQ2rqzrWsRx6wfJdoTCPvHwfUjmKw",
  "key27": "33SLjoMCsfUdZQNLzDJTDSMQKGET3UfD6jhXNQ8Fm124r3JShkUTeJQ6udRPZSuyhM6xwhtbXwPge9v9bgUWZaK7",
  "key28": "kk9nxDFtHXtgMJe7ngc9m8FQNKoqghWYCwTNDXhoWWzR2JQAYYnNMQRmbiLjtc6EjKyh5oxAyAPGua9sehTkFHe",
  "key29": "3C6ZWcHC4iCuXgVRbGDwUiWiYUGnsd7LnzUEBBF9MhFH6qxBVYuzRFeU5VE7a2sHu1gGX9vahBy5FBqHa86pcybv",
  "key30": "36AbS2W2wTeVBARNNrL5EggqJfCK5QGTw3ZZ6bXuLvnru1QTqMyhmXcC2yNBtk7t94a2KB45Cy7b646BVmQ1uuhJ",
  "key31": "2CXNPQaR3WakGGdGAFGTMU17HSfBg6inMmbiTm6tu1g4dNSaunZxXEfUVB85yo3DEmjsmJtUTTBrhWwHCaJg8HUA",
  "key32": "3ANbjMs8cQUFtdcwRGCBypNJaANQDDUc91m9cJk7YQrh6M1Afbpwqw8q4u5GFNcVfqjWEtYrFRxXhxmrcYA3fE8j",
  "key33": "5NFMAjWYvgpvSY3U4xFMXnkGCFgD1rnm56hAZVMVdspXjDGr6hpLpcmz5oWacTErdBe1GhdVgp93NPi7KaaQa88Y",
  "key34": "5171JuaS2qfBSVwP4jzkbVt9AUt1TNnajUXF75Xm2pvu2jxYDtP8tFuE6CiLrmiLJAcSi2cup3ZyhffoWvqvLD5V",
  "key35": "5mAoaQrdwgnhBoeADmkhkXy9YjuME11hoQt9inF8sXrYZ5UdQ2FkWAFffFgDsS6Z2mha5cDZCmzREXR2FeCM2qro",
  "key36": "sxv6ZG1ic3k4htrULTQrGteUsZnXuMAASi2NMXifpg2w2s14rGmbV8brqb3tKWstfu2DJE2rGTJvxxrGtRFCt7N",
  "key37": "4khs9CwsUPz7SaegNdbK3nd9oBNMnkBozvFGzFKQcAvMxSGh9agdEFBnAAidXUeNiTH9uQLPFhtDfhTXcWCYNNka",
  "key38": "jPvdPePGCpYJkdZu8Fsb1DTdUjvQzAFiRTFiiZw9Yfgd3vBgTHeyDkbUHGvyTpGxoZ5J5RWDvrySVHoepKESFc7",
  "key39": "3TERujnjiv2yuAJd7wDKvmkJa29Mf9LhdKGQGLe8auRAb5khbyxmbvJCZ5pe9hg3jY5D5gVNgnSXUcwFSE6kG4oK",
  "key40": "3as2XbiBn1ppqs12FkiA1A8fTbzBbs3pGKAPuS7Bz5TuVtihMxCZp3mMbo9aZVSCp5LPVqauRjLxzYbKbhyCtUbJ",
  "key41": "3sxwVigKELdSkaBnCCdQA8J5dFbkZGi5SnqqwMEN1VXVBgfYkCXkoHNnu2wpqDchpKdoZpt26cHm9bqZ8ZMyHn29"
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
