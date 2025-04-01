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
    "4xb85NQioByg46wWERS4GU2E4xW2wkwFUxSqKa9M1y2bfpPcywuKau3Js9gFUQEKfTvT1zMRHQNkFDdf8ugpaUDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wi39KdiC5yw2var8hL3DG8EVfHFa4TmKAUhn42fsD85UWGa1L7ZTRiKbqaGCG5JFQngAbh9kWbJ2Ei3HZetREUM",
  "key1": "55514vTbu1N8BPsUCtoT2Pq1csGvmQ7c8CsZTfeAdbBnUvpaY1524arPDV99GXuTDgScDQF6vHF9XJEmyDn4kHVq",
  "key2": "5W4v4vjG49qnvLTB6AvksCsAPzSxF6b1J3JrmtPn8Xw2LnaAaMK4qXGoBR2UsacohBSqSqYZhx2R83ChPkHfRsvr",
  "key3": "5ZxN5LjdZt57KNLCVvUWdWYRuCgWm2ZHQvzT8tutaGg34WtfscPhfVpnHymRs4C7MJ2fGjkD1WJgaeya62ipCr1o",
  "key4": "4ir3w8FqBAWw2uXxjxV93WyqvLbKvF3tvuWVryYGjUqfbGwqEtH6mHLHbThAhNZxNhox7mRoLcj7DVsaWjDXe3Kf",
  "key5": "3u7SHpD2xYg3WEXda8Fm5ZVLscdhNgbU1ybu69kXuCp5vjTmaZsT9HB4QchxRgXZ3JDnz8HDYrhq2g4YCm32iLUG",
  "key6": "3Q3Gf6egjAhWEDJyDiQqZYwJsoC9RTnpD6R3xGAuJXemCcuZU4Ta8Eo75x2tnwrCMfqZYYbm62h1i1XJaRV2Us2g",
  "key7": "4DBYkhEqe8761uWVL9cbgRP8V7EiDqBhhXsCeZA4jje3FS4NP1G1f6zDmZsKXn6H246CEsUkB11RknbBeeNA2svb",
  "key8": "5jKzw8998vYNMBzfUU5eT4x1s26TGXRK5NM48AubHZcKDLBqqu15tX1XYSD2DH4iAdp8iznwKKY1UwYWrD3tAhoY",
  "key9": "62Fdh964MNq3ymrhQZwPjVzyc9vkWHHNghu1cmunsSHr7QrTeyniZwTqqTkNnaCmCsKYKMCgrHk7rusYMXrrwcg9",
  "key10": "EMtoxn43GvZNwea43xMepeC98fqZ55CnzYfHxkw8gV8JbfEeEvbwPbHtMz32FufHYFCnHcnxEbRjsYb3SfoErJk",
  "key11": "3VPvuSa2LCEGcoDEiQvAz3fyxRc3suvp8gbC9UdEF3j3YNfD2CNAVvuv7ffrV6MDjpijARNowwMGcQpb1gUuYN9M",
  "key12": "4NVuDzBioRmKv3QbC7pdAAd1zxcYD78FfTK8daT8yRn8Z5PbuMpCAvgw526RiTWxnaNNCRMsnwd1s1brTNc1whke",
  "key13": "5UNftu5qGEXLzHQ3nmPG1VJonWZpcjN5QyFqW8AUceLLSi4VneCcrFL3HrBq9tNqCqvbkPAQmCrydwj9dMUQc1Q6",
  "key14": "5miLnqBLodafVCiViYs3WJYYVkbBcJ4bfsNdJULpjxQRYeRLq8Vppa1kKopNUH5aY85yrAy77AD3duYSDi2rcGwR",
  "key15": "4EmQidumUxcXyxJJEkA2Q2DnkfohxPjaA17qypj1wbRLtHVRSHaKHkpkJdrXnH7Z7Vy6aYyhTAorESFcHzepsVm4",
  "key16": "33Hcu1yHHL2LxUC2KBmDT8DwtNzkMF9YRoUWCJY84hDEesZasw8YSbiZyy31MZygWatDygWBBUYrC1pqYy4ALjRq",
  "key17": "51rdq8FA79khEirj17oMjn64JmW2eiijPdra2bDKmdQ9SDZr58DQEy1e3zZMuVswXm2CRCARXGkvC13FX26fNgVa",
  "key18": "4bmDtuxqpyqfkKY2xW94ZnzLH8ZLKwDjXmnDx81QQTwttqD4o5VGZYFZW8DbDJotdqAGtF4VBKEbhi8TVPyjh5vo",
  "key19": "39Xr1CXq3zhqoB2U9UVsKGguHpT7UKTLkgpPBEbVpsFSuCEVDnNLu95XfBcXbHSw2W8xfPzq5WmZLtQ11cwEro4o",
  "key20": "5SVkwFEVz7EXsWSLFBX8A6Rfwy7Ak3be6Ssn54KY551Va1Q3x7BzTC4ARzMUNiYYNzDZAo6do8HZTBasXnYUvfok",
  "key21": "47eikyK8chnETuP49dYNSLNbTMLBqJT7bWw984iAp7pnsjUHYw1RTgwm8hD4ozmQyMCrA4eRoHVGs5EVaYzktitz",
  "key22": "qBX8KmBdhkPku8gsCfwbtWDGYvEwHKYHYiWS492ez1NAojDoJx8DzDmZePyVEZVv5XZH1nvFyfb2aD1kFuDxSSu",
  "key23": "5XU94jJqL831WBATPQMs56G3QErSTwDbAiupHAFLneD2CTCA5TNAtvEkSs8GxjXUXkCVQrPVDqGaLEG9eEWnLErM",
  "key24": "ofaRi7fcZxeTMm7XmuCvpVqfYSGsiCrC61NxbuogGenwuENA5sbQRrjoGGvcVSWL7UWR4rZogxmDkae1cJN5tie",
  "key25": "4f9zgfRhixyH18JthMvJXMiWwDzTkNLQmB9HdVwrrxjXiDmfnJJiu8MPosEF9MADTJyhsRDwidT6ppb52XmVhWM1",
  "key26": "4MMA8MpMZaVj5H1v21mpirZjj11BY9PJKXBPP2voHgBkZds56ay8jX3jzaKPkgpM1oQhY9er1Wke7e42NokdwpJv"
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
