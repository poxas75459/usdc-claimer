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
    "2P1rm5n5t9QKUZgCshay92Laksq3PxUgpnJyjoKWX1AdVzaNJ7EKoew2TYDC8fmnq9MMsVw3tpFAm3bGxZu1XV3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Gjsok7hPpPn26hzq4q63oDMeyoBudtDM3BR5MJ9FZeUrXJFTtooDqV8yXmDNMW4xCAhTafTA85uDWVzw9pF8x4",
  "key1": "QrmjP4KSa4w6E56otgJCss4Pq75R9y5QVP6sfn6WDvLZNXMUe8AfcPjsiDhipqSMAgZpi77NNgf3Vpxzr1SCeTb",
  "key2": "7iNMZDf4kYp5w7G5zb4qTL8DRya2itzk99tK8bp9LFnuf37wP4327249zjAawfYFyz8cduBEc8K44sfrSqRrTAc",
  "key3": "3TtphwiVtBn8aSa8BiGmsuwm1D8v6qp39QUo9z7poxXnnSisZjMEudVcmc6Z4LgxK1MyzCCgAiUAq5F9f9Lr82F",
  "key4": "vNUPb6XS6JS1VkfaKhb3quDPREhepfKmVKpEKYpACsf7dQZEGUpUCRQPi1d3vU2fHabQhABwmxJ5uDJQA6zdi4J",
  "key5": "3E7FdpTwjmT5UMKHNzsn3Aa4km2ZKXJmgyaMQsqQ8GesyLq5qvDDj8aGhfDy2faEN2d2LqowK8etKfNhnxzszsCE",
  "key6": "Ytpn8u2DzphEzGQETxVyj5sBgjQM5aJEQHBKxPMHfNDEH2DQmrM6fHgRWd6wG2sgPVFRRMA4Fg5yLa2Rtp3eBFW",
  "key7": "4WccH163G2H1sQL9uAxPt5GuZSmE4XFRJ7qGgsp2DFScnAr8qmUqBZAAGKXMAftXcFjMbstUg6KnyxEYADVVVytg",
  "key8": "2H47RFmWdhQ84X6tddwzWWEyAY5jUJXbC127SXLLFQjxgirx2awM5hkhojGLiz5kc8bfQTKPSKkuYbRzvUHtQp5U",
  "key9": "51h16DsLNfrPyUvxJvcahNAFeGUij5DdPV6EU9L17yGPXgnK6eKd3tryks3jNY3WdJWkYCKyhj251gBRiLcCrhx9",
  "key10": "YJyYRUeqzwK3apWPmuKH1KPbMtbgEEXDq93pqnNhSgqJY9SCFB19Y1znnQY5mqYwnBqM6B3sFp8atk9pN8nagkq",
  "key11": "349PGY1euVdA7AwAapNLaYmC3efzAQx2x4TM5YcPzvPzK5V56HRn44UA3dqjswDMFWLTn17T4uu1wkuwY2fRAEGT",
  "key12": "5Q9h7N5swaD2fqeCyp2LMfo7cBRee1yF361L2tgAatNV1qdxM3MNzpehY7Udn2hGxt6sZZp8iyNt1csHT7oCV4hb",
  "key13": "2qscLsEkPvgPHvHhuT9E6ZzKgoFezW4xeRnccVdy7ivNmVkY7E6eUbrZxzk3wYcLj4jpG7gcPGVnNUyYRBYKosrs",
  "key14": "3w7i6K22ia2HMwkUYFh34Tf79Ph3uboGyvSBuPwaa6qF3mq2augNuWgFVMQtR1wHFCP9qhwywmvDYnk5aQgTWRCz",
  "key15": "5JrQSs8vB3iK14ZbShMnjhFanvBgXkeEzKESuoJZF6BKAwWv8yz49Z5hNDgjE5kBaHZNUcNVoaEZiYVph2K6mQ9k",
  "key16": "32PEF1HX5cN2udxiCc5Jgn4yvoCiFVG7wDTKaiZAs66FXSEKeyoSRhw66bpncdTXm974PeaApiqmv8YhKMCQL3cU",
  "key17": "2ufTsGPKkd7naRhKChqtB5rsSPKwWJ8g8chfhSaDgTQUCS7YYSvqid98rxsbKG7SgNnR6p9fCPbn3dmJ8rbXstVk",
  "key18": "67TZjaK5Ufe7sTL6ekyQ1VjXCERTqTLEmtDVnBS3XX5YKwHiguSfeCm1pxPFmPChQyKM3mkGjDsN3tDeTH9R11xa",
  "key19": "66noXRYXxHjdr4g6951PCe4kK2t8UuMUvzKdpyrpjf3avBF3aiFZ1mccUz22AECExsyWMGz8GS47fvZz3ZBB86wp",
  "key20": "5msd6gAoDRjrMsDkiWp7X7eEqwfZHXKiwDMB2vdm2cZaykNRx2naZyqb4itAamtjAHXQ9P2pnRVkHKgXS2FVA3AR",
  "key21": "41tuLeCRXrYZNsTHfLei8kNufjAYchM1ZsR9miZypEnw2ntVxgu9PyeKSdcbDpuAwcu45Pj4yBeeTL7yPcjZ7NPY",
  "key22": "3JtY6Ag7nivo1dGZourHQLnA8N2Zjkvip73D5YvUPXB1dFgg4FHSbHF55XGTs1ajK3dfBVsCKXypoqmtdf39LjRQ",
  "key23": "546Qoo1Dd7ris9eMy8DUif86myee9whZEQy3u5tniFffDxtj9xtDVfvJorypz1Z9REFXpnXQFYe2bFDbd9PqNYpe",
  "key24": "2L6ZPAwym6hDMXykdjHzHUcAPxBnJmUmniAh2HPvg7mnAMrLpkp3B9jrsXs46xuTXZ2Rfzm31B9aPMYnZTEbe9mB",
  "key25": "4KNCQjfFdA2pjkaNTdexdc2oqn1ofg7B5YixPUujr1TNUTKb44eEP5ruehHYh924cgy7EfLpJ9gXZmzhHsgtqWYM",
  "key26": "NisSy9UZdyhfjeDEeRKcuuH1wP9tff7SukPExpAadNZRwganWmfPRejjvJuCESCLb9RcaevDWHVcBDeqFUEm5r3",
  "key27": "NjaVnzWmXoT6upwcs3etc1mg5XZA634LeZ33oHFJbuepeUTZrF2VwY9ytqAueeQi2YPEjpxxmf5j2jdresWLyEy",
  "key28": "GkGZptRpyQkYcku3RBFZUe1RWhh4WjEbkq2Yiq1irVAS1Fta5YBPkG3VjAiR3htbK4mHW27aNm9PeHsraYfz9gj",
  "key29": "57wZKHFkGGA5E9c7bgGPWjwp3iD5p15ovJFAENW8hkKjiPzGmEWMKS7B6Jr5kx4R3VLg6wR9AEpSPY6DA6qzbava",
  "key30": "UAkHzrHhZbFYNJ1pgEjUbAhvgcr3DeztkL8Y2taR4xMsacKTcPRFBS2nZ5QGT8evZPV6wt7Su4B7ym3ZbQmKccN",
  "key31": "67WwjVUNW2ErseLHETEWycawz59HeapT4d2SPDcBJHuzfnyBAPPK3wohWmQ4A9g4mpBL9AYU5yEqmbvVUhyvuE1e",
  "key32": "6ZsdPD2wj8n4Ks1dKgReDbSCUCoW7LfYWJdr8BFvNART6aaA7YrduRukf4Y9UQxKEmf7q7pzk46hNRrP82KXvV6",
  "key33": "3z1cqVPngPds5BJ6MjBBdANR5Mz5E6mUUSeYEwaiK9Nr39ndPsmLnB11qDQkYjP9tL5mUKsZYYr4ro9x5A1y8ki5",
  "key34": "3pexYBAp9ATmYptqjiCwpi9rxeKnvvYBVVuT3WfHRYTaN7fJ4gajGbtEYV2sMHfinvHQ2PFJkroRAjHgCAq5WVR6",
  "key35": "5vMi2jb4kMcRSXiTyW5qW21VMS1tSu181Ahw9PXgswc35Mybm5NkGGeZ1X5qN5xvqkpo5udxF92sPZ3A3hmKgPg1",
  "key36": "34sN3NFcCn9ptoe7qyaHykCmH4jo5q5umFQYjfRqidxR1WVUYWCJWNqgUDAB3FNev7TKnSpuV5dRoYijuYBzi8SP",
  "key37": "55DG5itHUaqXieV8Jrf98ujjuecqU4aSsQ5pcM929TEz4r1f1LAyNsPZkURsmzUD2gTLm5zkdQmxf4kTTWuBy4c9"
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
