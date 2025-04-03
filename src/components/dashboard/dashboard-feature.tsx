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
    "5Qgg1DEvHmFdbQ6VM4cTVqyuq78bqB2BdESuoBNX2Db6gQvNf4VUrqTmJ4sfYFPmqBeMQrPtG75MYTqZNGtauFAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TsnRQ2zmY5xxVCrh6TdqA7k1Z3Z1e22jQjP1yz93GsgAjT8aqbfvRi41XTqVWr57HdEoy34sqKzugChg59Nry7S",
  "key1": "5ZVTqg4KVHiEptRqcYAqzZDx8FrWzD9ERYVTBnd2tZZHscQmNND2SfLoc37DYaULKurCByJKofQ4fbvXrDR9WpNk",
  "key2": "5mupzKYFuF5JzsD5YJukJ3XVrY69x3zjwsThvUyKrXRMRqyDUvKspFHHwPg5DhrxVVunYY3ZjBk8TgKbW8HqReKj",
  "key3": "2PAkQzK2ESJprU3mpRDmp551tL7ibdwdYm8xxmfQpGB5AgmQ26tUqURNBedgpXNkLVB6bPdpaWvFT37iA56ABrUt",
  "key4": "kBJYvi8mwzxSwCitvTrkU9xmcJMuFJ6pxxgirTxmAToQfXXgBYtuhMsbb2Pei76UwbsY5GkCfHSxrSdSf214tto",
  "key5": "5CTQWkcUfr9LxuhpVScdzoLCAiUFSV7o8zYrhjLjtWDwNTeJq1xrN8eKNRVT7LhSRQbBNQbYHzsUTm1CrbD1iqfs",
  "key6": "nEnYz3tM1PsdTymEFmvF436HAQ6hbAySo8dty9qMUZLXe8gLKBz8bVVwMe4yYBp3kjrfhG4cqHKvJFtRj1yFRWS",
  "key7": "5mgH4tCgenQsZSKUrGutkzKgocr1KXaudEEvyQP87okJskckVLt7jAxYCYnRFbNZi5T6SkKQQfQopBfQukobA21W",
  "key8": "3YSqv8tN3p1rFQwuFB68QB6fBB4DYesDuBijnjVbx3bFZFyvewRjNsAqoyCRnZr9MwZYCW6Nu1KY9o5nqvQPf9DP",
  "key9": "3e2v5182y4MNNAJ4RxpkuvT3VM44p6s4xZMeG9job9Ckbb2sCHHTMQ7iB8CQzvCn9EToyDAxDsQqTH65k8tHsxyU",
  "key10": "2YQSN9qZgJ3QW2H9kWPbCXfX88zU11LwDqRk9CDKCFgA2F5esUsfkf4YvW4Sm5hXfNHgarS29qTN1uoTQFcBcpR2",
  "key11": "5EeV8zxVQaHKyVWBxCwYUsJzSvtP1PedqHmCDouSvqeEaPDH3RXGQ2Yu3b1aQXCHxTTh36nQpD7tAtZmojzKcPvj",
  "key12": "5QZPe1bpkrASnYGEgGitswBwtafmQUFC5w3JyZf1xD4SGNFUBWPYNYfVh9hPA4hQEbwcpWR3F2VSkGsvnUNeBNFe",
  "key13": "5eTQ71nTyVhTh12zCLRoVk2cmjfVdtKbLp4K9YET7WcUuz62MpSHxe9gX2CgzYon9GgVcLv4Ryk4tdsHGJgamyrC",
  "key14": "2zQfEyiKBcLTqeR1kPGm6tnVigSB2VrvNaVAs5Yx3HjLBo4gMbbyZovCTQa94JUZVznD6eGvsExpfhihB1tCuBFL",
  "key15": "bM3FBsLNbPmfB5jnbcxTsbFptv4aqj8A6vg1qpSmAcJcb5KzuGSLEPK5n1f9eqd22fPMHKkwUyfRKLfxEMQLVXC",
  "key16": "2r1otbMpYzAxCmjNVFRenPToMFvbGk5RzWEyYUDGXKNVEmsr2BxiwvgJYtJerFALAbReK2WLHHswyv5iQgzZnMbz",
  "key17": "4qJCXv2VdCVoXnTFpdx7Ym8pVNWtsAMiuw1tb36AsJwrLYuaSCmhBJt1YoNx6GMeiTsi44LHH4aTR9sxSbm6adTQ",
  "key18": "5iudjEXfC3nqbEMA2iUEygbFRM2o24oc5bC38qbG4Sw2ckRumWwozWmYmDv82Ykxh5RMKfAmSuLNQurS4EsshNG1",
  "key19": "3Vtv6wfUNscLrzaS4S2tvj9trWuW1bjGWWhFYtTkx2oDAc64vVRahKt6j2JKQJW1ryefpCK4GV3U3gvDx14Agn4M",
  "key20": "2HhJu4N6D2JSSLr2vxMY1GDVRDygzj2FhvnU4hftAzJ4WRngJ8sUsJBcf9NSyxZbbpxMLbBGpxYQ7p8d9wza2yQQ",
  "key21": "55px4ZdJwAiTuCprHXgsghUjgb4HT19KvN5DF216hnbrmhoKf3SgFD5aTKxXauXTq3WLXcKYpmjzGhFXayikwumT",
  "key22": "2zymz3Gv8jnKR8wDPMwC3RmorVw23ppQ5XzWt2irJHeqMRVKBNeBnTbsibrnLBaATYE5LyZA17u2nUmSAArcH3Yj",
  "key23": "4FUvo7p5vXYTSzroHT6Kjrp6iSxZPHdzyMVGcW7Q3nbbXo1Jz5nB8Nr58GwKRnCwAFiYPF4mi7J4WonyssXNSbFm",
  "key24": "4zHpXNarkeLneDhH4ec9i4KZQFkQ9ex49wEBMUQg5AzWvpBasdaZ6CVy259Jtu9tkCbBanti7GSwgK5sgWoidFcZ",
  "key25": "2V9sir5h37UZw5A9ohcU3k62dH4bm3HHtRabxBRB1BKHhRdZMU9E18k3AqhY3H44s8PqpfRpwpAtgkK1rDqscQ1n",
  "key26": "2kx8yoPWf3Yn7vATGn2EC1fBML3ReGt1KeELgJHAGNKgoCgLo7y1Tzv9nWa798Ji86wEvQt2huDVLg3UExnxDqir",
  "key27": "2BTJfPJzwPsasQXagvkJZZHDbsFdPEUbQfheghFBZAigBfLxGzNMeybcBUUQ1PLegP554NFXiQcEoffom3UaRRfJ",
  "key28": "37T2myTGQkpbPfJbJPX86iPRSd5ryGPRLBRmW8Vd9zVPP95SXuwYAi28VTPFNcdWxxSXhfE2bakmQZ7Naqu5KGw4",
  "key29": "4xViFXY7zhmrVV1WUWtNddTkt6WFiEPfQTceKFrS9tpHoHQxoRJF1HdYocUXc8dVsrRR9p5gr2PUvVqqGVNP19Cp",
  "key30": "4Z8BvyqmGfj2TrFzK7kCbmPpAePf5Jwxftd99HzrgjHdzvFyKbifYH4M3G54RsjUpwj3ahX8oL2aYBLrbYSdS5Sy",
  "key31": "53jT78C2MmXK8dZrnp66rxmHZyZbFZjTLrTXLHJq4tnmcP4cvKSbBVzadXoToqfnMF1AZijbEzXywsZB4QoK1NqU",
  "key32": "4rz1CqN8t5w5nvVPrcdSN9gq1q4WZQKanRxoZs63YYtu8yoVW2qRJgdydwE8AUw9Vbbay2YGq8CxgvxZX7d13dWz"
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
