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
    "5cGXwqaLaGot7p8yTsSCQT5DLPSJmKgbEiZ6bLM9RTaJ111ni16YP6GCXyUbfakHk2hJn9xAhwgGC3WR58hYQpcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNtHHw6dbqSjcqQVDYjKziNXrTF2aDtcSd6tsXggELiF5oUuNbh4yPCpqy26pSKTkL6mEUELhmtrxp3rpVXLABE",
  "key1": "3GZXFRYoCqGn1bQZQFW9vXJxAdo2ULU9wWZ3ZQ2B1kB2a3uDq3fnbYsioGu4DtTxUC7NJhQJ6antpuNp61nwRqhc",
  "key2": "5hwf7Xw62iEUWJRSoktXqAMvcFNHx1eK2tj9r37TUmprTsMBjFNgfALw9b41YpD9ZseivJuJbyhTVEwSfzU1E1fC",
  "key3": "4SjdfHse31QF45DtM9NWvkzrZxxJdqqmuctNeHcXmj3h3urLAKU5Jd3m8PFduw2BQEiR8Be4Nqs4272dsk2aAzxr",
  "key4": "5KMCABUeB67cphgTFYqthsM7owhPBCXMVzfXNHQQy548UX7UfK6AfeBHB4bV2HUi7iCcNDKM3qy7Mhrqa9nezRaj",
  "key5": "2Dr6upKCYQ8u9D1b9BuNrWAi3A7S3QQPRCNLksWUJwy1pnJHfCCnjJzkkBtVmZJvGupKpCaY221EoFck6mA6R1A1",
  "key6": "3oXjjUWJz8ZLXeU2kj353RfSPzVmxvQ9TmHgDyPa6imdMYxGtxLBbR6ej9pRspFZHQVGPG6Eg6FmDk4UzFLw7aYu",
  "key7": "4MEKgddnbHrVYsjUa9z2NC9zh1zkKauc6tvvQ4u7voGyEAdSwQG9KWzq6KkAaeZv1fXDKHQACXHK3SJuJXCqSxVZ",
  "key8": "577uMCkWvyQZvcJjFfxqvkodwUDVCGEE98LtWjgSqBTdJ2wW5ZpecknDdBFG75v6v16NTz74MxXVbXNfgkTHT51v",
  "key9": "4ZLD5ENeZvK5qSYfsvFdAehs7nEsavN2xQfERLG35J4C1yVcJEmyyXSPocuJuhwhBKGfGTLPGyrWDorCPk2E1oEt",
  "key10": "2mPGQVx8xDvt25io9mYX42BYQxvXPs3sr6eRCyKdf6pbbMdUACK633x8nU9nyNc7oN9seGPJK3r38pM4wGoAnQ4z",
  "key11": "3UDRXsbcYoB6JKkcKxY4w5TRuQzYwBzhDTykE7hMdjbDeyimPdQ1LXJ7stUaMVGLiZ5iZgHTRPgjw5iz3SJVLfP1",
  "key12": "56nK3AdZ51inkfLxjNG39nRPUk5pQZ6vbLVfCPGFRLau62VHxdApEFrpHu6SeRs46mvgSE3Cmj2hroxExiQHgRZz",
  "key13": "3FBueBf7opwbpWcttq8N7GBxxg9M3WuWWDquknfhngLKJAb7ZdMnscDzdgCDSJ5VnTf2oByqNSotyWjWVsXizzvC",
  "key14": "3NA8sngM75sqYBGUUBbRsToZRUGw4gmpghgTVFBAWoMpTEh5AiqmnEYSY6TLAQmL3drXGoLPArSV7mvu2AedUawd",
  "key15": "3sCHrtPaQf5XJgDL32yWrRAdJ7HT6NSwZAUT5dtBVQd2fVKU6UJt8v4VEFUveHijj3EQVw3Y3TvTdyA1kYLxtCmH",
  "key16": "36edDPUGFDK8tMLEzQtEmTwDCuXSd7DXPZ76mP37vS6qdoH7SLm89Hh7cmRGUACYNYYwawnGsis64hbrwTpEowvQ",
  "key17": "VVvvTHep2JzKLLXiC76LBtm5Wv2Uin9KfWGzaBY7yVtHhp5xvpkTBVFHNQgiLMrS5GuHH35z5QU3nBq1494Q5S5",
  "key18": "4JVSN7NgwtMre2TQKiLrX8Kbpirx74CmTiv48596iuU9QLLHM7kwkZTEqEBd4zWrLydMhspEjydLK526pLBGCaWF",
  "key19": "2FKFNMTMvqYn9tqexhR1XjZXi32sWwy7qMFXb2grwUaavkc3MkViJi1gbNieHe2sRKbxCGpvHZfAgWN9ayg8YUhk",
  "key20": "54yPsA8bi2cg4BmfsasdX6T2SMPPBMaEDqrmfp2iozZiVktw8WoUtypn98G8uQUMXuPTiuJSnirbNBvKgix29eUd",
  "key21": "4thRbXpaHAbiwcfzPVhGUhQMUQPAtc9v28wdbXHK7T2DfXhyzKk4ULBKgi4unH8WSWra3be1J5mrLbjeVdocKc3j",
  "key22": "3mswgt8XxjsFMMqXqmmSwGiBVsTSYYh8ovbHZ1r55BhsPMKJMjWFSKem4BJKYus246YwXW4UYUokfQ18z6qjW77s",
  "key23": "3zYBaeL2rYk5Ub6cPJZ5uPGQvb9Stnabe9xC2iaUMRhoZBge5FoZ8u1tVU95LckuhyKy4CWCbdkCkhpx5WHZzf9q",
  "key24": "2PgajsDzfwhnMp2mSNMNRV9P5KprcGvjHeEY9Vi5As4ucjA17474zvkHKo4C8brCedHzaMDue8EL6GDGUSwLayS6",
  "key25": "3byXjqvqb5JvQD18KbMuGpyFvMZMXdRDrwmes6kRfkpxJCTJ3XHAAvra1inf26fNrtAeYViNprDN8Xto4ESNHthW"
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
