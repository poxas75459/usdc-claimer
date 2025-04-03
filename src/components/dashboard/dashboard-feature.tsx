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
    "wobnxeJLv1EYiYEJk82BTHLp7Sqxg4eoGU5QZoKgbzhqixtFNEh47q1rHMtRUe4H9swh7TfJRMV1DdQw3xuLhnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCwC2zWGEovyAHycn1w3oA5uBZFkuE45qzVP3oCK39aTrBFBBVxUPcEqU3BvfcNCg5phvj4A1HLuHJU5JuahHrP",
  "key1": "g6Y8S9NZDoa9UMySrjEyzEk8Zv6S5X4JjydVFz5Wuhm4GRvPAns6THSHvuGBLmdcByKj61rJFPJZDKJzW9ewkKp",
  "key2": "4ae5hFgeFjJNmRetERGpiqzpWXzjXLcFXaTWPMfbtqyCMdPM3XLakvm8KsEymeXsJwymK1CftSMXjSGorcQRmXBk",
  "key3": "4C1JbF6DqhPbLiLzFbUBZmdJLxptstyuwfAz3mUBeNpWBXDEwVgoqGqTKq73bApKWWarYtiwq7TQa1bHftmT4FzG",
  "key4": "yjc5BNid3e4nhvahVxhe23UGdnG9GJAbtwTYJPhEXs1iPR4Vuv29PhMiMfN9u6S183w28idT6S1boYGeECeWAzT",
  "key5": "3uuk8tSiGhFVQamPNgQgNvdiWUxm3R26Z9SKKShg6snnxLv2x4bsDQCfi5ZKu4XtTYJMzgb5LuTLeyb5VFSbqz6Z",
  "key6": "MzQB4TPGfQjqZMdNrXEh1kDhpRvLmiwSCyk4hS3KEUBgb4hPjrNgrMpBtp8CK4bgnCvs17SeKtcs2ive1b5pDN5",
  "key7": "3Sn1jnQjzyuyh7GCzUyhNsxoKeVCCiX162TVLSLhogiD4wgiTNPS2ogZh7Y2EeNWhd6nAweLQVSW7tWoHVyoAGH6",
  "key8": "DxKqNCQpHeScwf2D7MacGWbqVZR6bKmzUiqbLVrEyVuobk2XW2j3ZxvuQCfGCxMZUscWU38AY4aftu9NpSSDNGk",
  "key9": "2353LPvsP5kqm1KwBMJz83tvV8HjQDhCVmNCHg2m2wLjMwv3DkVmsS8uFYnj43dswZfc4KdXUbR6r9p73qMnQZnL",
  "key10": "2g5Xr5QPgRaVuTDXEG4LthQojrdfbxfjrmStSs4ERYZoRjrEU5vKG28JFvQiu7qtvNedFXxRYo7A9d4skLr8mLKj",
  "key11": "v9vZ71Fb7nnJkAEKTKiXu2Z7jWdH5j1YoicfThAQREPZGmiEijA8pwKsFABNvAp6oyacXvqENsywLJvcB8d6b1e",
  "key12": "4EPTsBnGVr9hgrBhTEmJNVzCk8YtKxQEtLNbtgF13ZzMyvtUcCtZf8QsjyACCY3oUDEMMqvwB6TqKLALb8CBkBxT",
  "key13": "5AV3QKWVFHYnq8TxsgiTiw52PCgKuu2QWuyLcghMtescZeu3x3MthyVzZ18TH16DxWVpt8nHCaz2NWPKxxSML5tn",
  "key14": "2r1xCGH2BWSZZdwUx2rehMu2JVd5byFvJPTqFRg9vcMFCUWFaGhAT5vppD7rfmpxmdm1VQRv4E1dX47SoqqennTe",
  "key15": "riKxvjmMhHaUsGCpTY82fGyuRuC2Nwcj6G1etZ9pRWxKX9i7kRDRmRVGY3wMmAMvujFaCW56duu8FW7kiYLubYv",
  "key16": "5eti3kqB2quvUVP4gFU7n7zeJP2hVXUXcjtYVeHWtgaB23QpDitoaP1tcLn5zvKRvb1w52H389j1KKPJEYpHw6c7",
  "key17": "4T1YfYn4SRoRWVNis8sWiWEb4JM2FG2YjDbEjC8s8DdzQJfHj5QGgKbxNZ17wMJ6gkswy8uyWRWKSZMJ9zSYgVki",
  "key18": "3Mbtf6KULvFGsZh9jsScshxcaqy4muMvhgdJEUrtVCLN3zPdjMdeDGkotazgwoJqsRYbQjMmHzBq4RU1KgvuDRS",
  "key19": "2CjgPxtuV6KCtziNezwJPzfg5Qt84Y7QhgG7V2UKbNv8ShyB97PjA8n7H5vDmEKhxcBzxmA77T2gFmwEjaMHomKG",
  "key20": "4ghXHuyHw3CxpSCYNoPst85b3T9JHj1hM9A8JjptqLxQBymRF2rCfPxGnt9tGWHFFuVELX3dPm6t7ZbMdFPPwDfn",
  "key21": "2Lt8DF4WWKJH2xwy4ResDEY6m2e2AKoSCht6rUqCrrNqAAbm9MrnHDaGioQoMeZUhWBRa5L9qApZrebdhX5gsXkg",
  "key22": "4BnJRR6ViFerJzcrjkoeijeFWGEwcuGNyCekwsXgTi5muWGwn1sDg8nM4DXbhCUBQS5Ys3RxMSBzZbEr1vsEHsFJ",
  "key23": "4tsGNehjxtCi7vKQEvNDwAfqM69Z7KbNmhzpWc13tnGDho1ZBWyWdCUQSPqvX1RkjjxXobeaTNz297LM9tet4rZr",
  "key24": "5vVYxqd2i6uuuYWLjvr2nwe3MZfPf8a2a2P64Js8irooYtpfHrQJpKvripyTnmPXzyv4jXx9qFpicCvv5L66gybT",
  "key25": "48pFeqZVroBJ6sYLwvWThwgdk41qWy5PZBeeUhPr5DNRinYUfNkMPsCb32c59JBe1FdoMbpoiGwQmf5tbiyLLTDC",
  "key26": "YAX3k2HguCAjgPiNf4FXW8jaCy1veajEpTpqFV1JmdMj7mqgxAmzT3ufPqHx7Z8VKptHGe8AzwLszsTX1rCjvbk",
  "key27": "55H67i1LiaaRQKpJmA1UeZeD3GUcmX3jAbteLWBfTtLkhGAxBkUHdbVQmQ4RsRGnDZuLyGvU3x3X4czeu45y7XQn",
  "key28": "4ELQFh2YB1LCyWVj1FHjNZSwvLqcBLRfJjSkFsbERxZPfKZfRRG4HRF2CccGxMUzXLeCnxPUmj6V39CCbMACndwj",
  "key29": "2SSe2fysLZ8c3sfSpGz611CSgyaN6DZc2Q6dPJJgS4B5vAeBFm5o49B3TGpL6XhGe2et4442aXDk5LGRWtXHKD2g",
  "key30": "35SNNCpjfb2FGcX2srHmwx2AUxC4sqarW4nNLk1cJW1Fwki4U2hsdm8wvzT1Qu1VFnoPDPFTUAhHDhwZeTKGsZ9n",
  "key31": "3M4pGgXbeZT4zxbrkqLvBBKzNP3FFdVKmG2KG3SZvx33dkWWB1oUTPQe7mV5KKMGrahrq6SnaFZWoacnajUvDgNL",
  "key32": "2WNozRpAqr1wuvbiBtD3kYGcw9vptfY86Bx1vBd7UGTKLcwy4vAHdFRi9jtHB22C7cw66cALiX3MX3pmBdR1n7sF",
  "key33": "2nMUP5uX6kDsgegWFB7JTYzY2ox32GTV9X5g2D5UytzHQLovMrSjZkwtog38ZN3WrENQknpetviSipe78d6YAhbM",
  "key34": "4cJeyW5sy78Y8fDui2VuaEDCWHjRLJ9HoWLrBq9q8ZJcrJJhg6Y9pJdU34TCEpJ7Eyb2kfnwL9QferQwU9y5Doft",
  "key35": "Vqp9CGTF3pwVZhaihCcvnPbY6HWESx3eswrcHQejtwLxFW4xTCyd38saneeFjL87GHs1e2SQK4qyS8AVsYtMHzf",
  "key36": "2xachroDEer6uoPrmKDUCqZa64yARp4MsmYSFVd8bEoYjGq5odighohDUYBCgXo46Etwm2aHHjV3wgKhH6NhfKeF"
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
