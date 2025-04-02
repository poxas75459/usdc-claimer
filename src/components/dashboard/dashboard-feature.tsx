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
    "2yu5kr94Z7dx4zJZTGkMQheAY338PUVmHM8wc43wDtqtarm8dWCqrKLdwdXbv3CvccZu4wZm7xdWeRGKMNNy2nZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTJxH8XwqbgEAd2iG15SmqKLyjpqBoXxQMdFUdZ7vfzBHHxtEaQDyQ6qBFdY2wy2W8VBLKsdetyvcVENQUVEVNe",
  "key1": "41uWspeW4pXSHd4w5ashhycZaLBbF2QVPcoG2VqvJjPBvWjK6NrszYYQRRQ9iWRwjUQaF4PwGYCjJYzvRhnJzh8x",
  "key2": "3i5dtZEkGH8rKb5sNiu1kM63A5ULxHyWVNXzBHPqGgoDxvkka2Dc9Jg33Q5sQynrhLKsGjrs8BkGCajAYziRYaB5",
  "key3": "4jjWqSudgqtYbym48gu9DQczmoJquSCcpwzVoHMrvsVDmeAhnWwjuq4PY7jccHrCChnvDhbz9ngfHq8ivv2fHNC7",
  "key4": "38dEXPE2c9qx7DcMtuUcECzTxeExyeyHsxsDqLvxbveqYAYuYhNN3S4QiZFdpV3xxPTyYAEjUZav79S4wva8SeZ5",
  "key5": "2PRZmwJ1WohNnYeVY6njbL6fvZJ4fbsKM87w2nEjRSsLvHd4xrvAdyLKXP94Ycer5XS5eX7NfvotZ95zopeEsmQZ",
  "key6": "jb94wKBiPfYXzcQr4XgYCLytuQhz6KkLQZDUD8HSavAZk863V8DsVt7YdbCy6DyAde3i7KD13vy5VS9JUpQyLX9",
  "key7": "5PxX2ZSR2Uk4iH1BynPzPfRSnpBijjTKFrarMFdbz7yKDgzbryT5KLmNzt5xbThurU8Z8LjBYeoxp9dJA4aAbg8c",
  "key8": "4LcM34MScz8K5jbGnMjJzf9P7MQUAgLdqxX7GCaLFQaY2193gRsvqmQ2rwfmZRhtbqZUcWLzXs6pNyTMx6BHpaa3",
  "key9": "37Gz8jZDRjpnSy92pNBCcP6TYU8v6RpUPR3jpTxksAQc2exCLksUBBeupp57p88E8P8ru1iEti3BPgT5W1C6KtNc",
  "key10": "5ZrBLBGkY8E8G5yQSiRbgfDfrgtFVtLxcGhc9phmKT3bx9cscjezwJ4DHxJuMAKyyBnWcxh1eyxjpji6ENW1HYyq",
  "key11": "5JTVLKAQfL3MCTWSZ7Jp6js6MvDmkkynRij47RYmChRm9zjoE22R5jzM8iLNFw1tZjMGYRB9BaZmsF3yQt7AXRtF",
  "key12": "58zznz2k9PokZcF5tiM57v7KuK3qxxkTz963EssFB7cfPALF8FMR7fGVxE9CRSRozTobLw7V7jTo3RrT6mDEV4dF",
  "key13": "235fcbUwVRvQ4jEdRMAGnngFickJCzsj9SPxRYigA6ts3Gn98NY8bnvFGayEkkdsFgrVJMQwMax5auZMHTMu6RK8",
  "key14": "4hjEtoTcrybpsiFATu5EZsF1Ym5bdbHVAXXpDY7wKf9ETiyLrqwRrPXxdhzgqr44TchTuws8RV3eSaCqMCpQcjwr",
  "key15": "jFf2e3AAzzSVz1LSpaddUiEFBTrzK4EBAP2rEqGRRY4PcLFjfTVEQx1K3d3y9v3CpenUxSfAaT7Paj3FqnB1bXz",
  "key16": "6Tc6NyKfi7L9YqJHVpkZjzdiB9vPLrULf7pHcDcBurbAKu1Hb9cYuPmwRKhBFkeNWQPhoQsrR6r1rDAN7nNJyV3",
  "key17": "47r3ArsC9CYVUcZXKFqm6XWVHwk9dGDnnnGS2jEvTy99Mmw3ZcNGWDJk2NwXTNmm82FA1bzv4uarghEQtwShanLU",
  "key18": "4LH9qW42RUN67NManfKUbgyH4BCpHhFr6YnWSbDCZrZn2YqdhSuhjLQDEcKfGBEP5TKypQJs4SWsqfb4ZmVGDfqe",
  "key19": "5GjouzXg6jxTarnH4X8YzWoMoLx9UBNVkZzERnpT2V6WyVDSWRA7vk5MLDgtgJJGi2xMoKXuU8BJfZVf8jCg7gXA",
  "key20": "5KViEX5PffjYHdM4gBP8tyC2ShVChs6qpjgofHNJpAzShB5u3wvAAp1xeMaucZsgdGBhf2KtbQKQfLTJWq3sR31w",
  "key21": "43WzJjDJSAdx37M5XRWpFTFZm5R7hVu51DSzrn6qu1yVPjSspnMUbvVZDqA3XjGkBsmQ7cTJCsDQre98CaHEbuNq",
  "key22": "5xovTspdPcDhRUvbdFS1AWhmgjsv8pSAfRJ21e4tARkmvQb6Cqt7CBmDNV1kD6kg4XZQbsVkAyqNVp616S2rNJPe",
  "key23": "2i1VR5PChy5nZv1PdNKHc9pFDoKPattJLxAAkJDt6JGWR1tW37wfEZLoKTSJocXhjRumBxyyrDbaBkLpGFqHo9Mz",
  "key24": "62jy61vTcio8Zy5Das9XvwcR7kyudfsgZcsco9xRNTMe4FdobLA1NXhfCeGHbPQcSBVao9g4WyP2YwSbtk95FLxz",
  "key25": "gjLnKDDTRbaEb1uGyuWwdsM9QRL6ZvbDYScWFejRin8CafzaNvuo3XTxioKk4fiDy85sLdccRbiFa7Ju5NsXUbW",
  "key26": "4bEHjXXxMUNrW7dAJhBhaCF9MoayFWDJSNnXdWsJeBoXAbYVQM3akx8euEX7LJ4F5APmGmnKa312VizjGgEkLNSP"
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
