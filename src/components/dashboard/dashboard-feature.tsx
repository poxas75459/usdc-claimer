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
    "oy6BWhbi23jzNKHF1pzXjCKNMSAYf9RzSg2cutsaMA7fh19GBM8YHBpwJ1VenkrmxLQUkA5kw2jVXh9WBPG7Y9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VscczDsFDVzBLxRrdpvpeezQzVHJwJZcuAKU8aecWGosjZqKkpKKzEhQ5AvJZ8ArsHUt9TCWALUPVjUJtstV2wY",
  "key1": "27GjPgnrAa87qBR8dyR1KQyc1SDRD1429NDU7kncgDZhVUzxitw3tNRjCo8YKEViKQLWv8jua8cKgnWpH6xKGdUa",
  "key2": "5CNHH6vmBDzsRKpKKuUyisT18WsgSpGxhp3hqEwpHiNWaNwWpJ1dK9WNeMz6agjxVkWhXEvo7AWBbNY8RTagWR7f",
  "key3": "48FSkX2x5S7APTZYE8dr2rX77tdDHh6B4SMMjib45nuSGygcHb4o7BKtKG5RqN7LdsPMtJnHyiTJaZDZ1Y9Hxqtm",
  "key4": "2iNnZjABP1Uh4bFkJgmr3TuxHJdzcYUF6NkdsxNa5J5c9bV2xykjzmhxaQfpVCBxUMErxjiyU1hRW22RxbzjyemK",
  "key5": "4RNLSZHzKux2H4vsrj8CZJardeKdopAExVPZkpcjh3t33cU5LWfGZu6eJiDi5vLNq42qPnPLfdYjvD9km8iMsBG8",
  "key6": "3abNJacQmrBgVY3GzbTabGsVWiBMCTAybnBgFAFm6AgvoYFhKw5Bfmzpa4efvicAfQ6ogQPGqiRDjhhaCscp2Vry",
  "key7": "8TrHinkLfpuQHFXxVtXt32zi3d1STFgYZVyxWeB854eLrcNM5mHPfmYgVMTMok8BPeGwSyiL9zD4yf91VKmkHEz",
  "key8": "56HdWDqFNqogxBTjFMeoLxUU7wPJXm2hKmqxtR3msPFFztG24ncb8cj9864Vyq2rAvrHavGxeVQ5fNxq5Brd5cBn",
  "key9": "2DffBJGaisVzUHGGyNTXPdk5qRA4bSHHNLnvvAByRemYvY2SZQ9gjXsVoz5K3sFFcFQZzfRyBk4iVFeCWM4Wn9Z6",
  "key10": "5hMobgPAjmoRR7uQvfhj7rWSn8FBBc2c9bx7YGXxyHksDC48C29nYW45h5tcbCT9Q7aBKRGWFuTCEC2GaMXRjbyP",
  "key11": "5VLAunYspQTbZx9BjXUpra4fsUR8G33ck2Yyu29wyPvZssLGqzQxqb7ZTp3hBZAtSzASbb9FzXxjxoNhbaUbTpQi",
  "key12": "33MiJm8PV8Nq647iAidP9PE4fXVGvoUydxAbX8e5PvyLPDxnzvELDmxkhpg55YmawJApWtkMSWeEAe4ThdHQ6nG8",
  "key13": "5ByasdD8F1gSZmiYHc6pSpzieGXgNVuxHiFguGoar9k8x5NbhYzaSKAgPgdSjLiNwCF14qMjtdeoW1MkmUEGecft",
  "key14": "2aCak1NdJd5is6CQTVhvGrxapRdebgsCq3xGcRL1G3UxykNMDYQ3CQmVcMAqSB74Lrriah1PbrfKCiGjHVQPW7jz",
  "key15": "64eAjZLJbMjah211ke9SC2Y5gHuGGNgFT9gHko2Ltj81nPSMdSHBdne6NNpcxjU94jG4gwTJ61J3nFSSjrYotRyx",
  "key16": "b8hqywVPigJTMmiuzyDLq8W7r5RFvmec1i4pzvDJRuZzZEKbb9ZNW3JrSfyXcJX4FdXSJZ7TrNXFheQPUgvNbFb",
  "key17": "54RJpRSxprSZWBZRyprA43zRGga1ti1Fg26x4cU1T7PSsdAikqStAQ6cQL33UxiB4E1cJrDSmcfcprWxf7YVAUWv",
  "key18": "3N7RDwPuC9F7NP4FP4YdbxLAWewL3jCfUKyrHwhWpfaLNrGkC9zvQFfZGMra6NsRBqUNhYu6pcuzttwt7A3VxUcA",
  "key19": "46r4Kt9Qyo2UKKWRWfk3HFPz2x5pij3xmFScFNJooJkfXVbbtxHbVgqoV2absNQfKErbMdxNccLciKyLXtKh7ED",
  "key20": "5CDDaix7pdxcSHwop4fcLZB5Ek953PsLtRmwxs6ZKEnuaDjHZgjXG39o2R5XSV2Uu2VFKcAggnruhHrmut44s4vp",
  "key21": "3wkjpXyHbfL3spkDTPEmx2A7Jox4UDK7TUFt6abGzEM2n2BrpkxskfkZmBHF2rF9myhKSXzhspNjoxXaGjYfda1k",
  "key22": "tMRcBcMhA2XZekYZKKBHNztJcZURPCruEvN1YoxyskogBeEYbVhX6pyjejXYgQGha1KZZLeB8Jn1oYgWvbDSpfL",
  "key23": "2nxdzkD2dTEo5De1Mf34nkoqXsGvRNRgkFXjYNexh5YTUrwGBffq5jaPuSXvdVw72pHShptAdsoeGUtaWPQLBrip",
  "key24": "KzwTsHqWuoTxCRxugGuxM7u21FAsaqi3vMNDGDdAoU4oE8EX6qTgsEPWt7NEp9caCPjjMCGKTqhYogiQ7A3vhj9",
  "key25": "653igHa9Pd4wyaX9B9Jb38iBajSpj99G5pqvgz7TXuWqrreLRv2qefBeyS6MZqNxwRDyxGj7zWY2VRfPLjT1nHAF",
  "key26": "3XTeKncAAdvzRh2uFCDtmxfEjhe6sxDmgn81cx9rGa5WqLGeN25QF8sN1ZQHbxEhCvf38tJAwEyM9DU6oMSSd7Lg",
  "key27": "2cujuJtWPAPgXhLie1QWn6mfz1wMaSSc1CGqsbP8yFRvQgDL82jqK92VsMnKP7cCfjhvtd7Z5tERN8Sc5Zc6Q8nL",
  "key28": "3WAhFKgUJg24Cof8qn1q9zNycqPWKHQwBdriurdjsupfoEtKcwEhx4y6D2cDazw8Zk46JmM7sNLejqLGn1w7tMPt"
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
