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
    "54w1tHT9jgRcCt6evcpvBuUcsnhSw78wguJPVZCyNb6Liw144pTpVJsDNWYJNGMtVVHPC6hLtbdY81LjZJUmbJji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPLm81MbMFheYj2dHPBq9iqENK7fpCYL2DZ4EXw3eT178BjMdyDP1aUL8GunUZxV99WJ516jHmhVHpKGy5P89TT",
  "key1": "5ecQP5jjE45Ndy2jFt3Gnfu3kyU1y53ZRC3bDbNtHXQnic74ZiKLZFYuAKCQSnCqUKQ1sBhPoPK1g7crHSXy4PQ5",
  "key2": "5UpXJBfNsz37vb88udtdtkYjaZHJPWNohjpaTdJZTBvYLotwBT8BUEsLK1ryXiTL4cgvFYq6vhLzf3U47WBpFPw",
  "key3": "ju8rSzw3eSk8YrBQn9N2qxpeNHnXZRa7UJjQHTtAudNo8dEwDjtWMZKmvPBs6j1fDy5d2ZS9VozkKs6gX7wkYEB",
  "key4": "57KtRkZJEGmPDdCCaLc99eKmpB8W6PaUN2w4pcf7TJULqyTwx2pdmBCPite7VdPoYgnGcFBgF1Bs7WPS4HmV3r7Q",
  "key5": "4uLDu8ijbd3mPs6Hy1jyNmMz2EuHPLqZTayK3NhNjG7JViWJwjwjYcsPde6QMF5dZe2Ks9GbsGhWQ6UQajw7qYHr",
  "key6": "3U25RghQBC4aceM19JzQnqGYNNEMf2aKoWLKWxNxQGBFDoGJ3eCaQkfbKP52b88BmjvxAWCMkB2Y63YjujY558ZC",
  "key7": "Q5SxgXg2f3AmdzpGiUnM17XjhmY5SQGoYoR8Y9sqwT4L2NdkNb1XNYFDxeWD2zRjYJcLunnYd18UGm33NiejHxk",
  "key8": "4R1oJh3g169YpG3b22UchWsHGaJaEZT9vcscpqVinS4cTmQ366SBkwgook5wBwxASPfgvKGbWzcBwLd7Dxn93PLB",
  "key9": "58kzgxKnGvbGEkFnHJnNkGjbXtFTUcZbFGBjs9sjY4UfkNvSc4oU2DJkp7YxhW9kGjQpexS7cXtWdToG6K8soWni",
  "key10": "UWwkBVqSw4Aeuyju4RTCMkDVbofhWYEFMtSVQZjp9hoNtSh1MvCHks7uWzBoe9PxPF2nYw8YJHfrsZgzd4k2aLb",
  "key11": "2AFDBfUecqRsMePLjXWQfpyqBUhgBQkX2PmToE1pp9FNcyWF1AyEt1rFmubuGLsVuDdhQ3rdABrdSa9oUEcxTwxA",
  "key12": "3qN6KT4zSEUWUvTsD15B8PmHkPFaD8pXbQGsq4ya8j8ewZVLQ36XCmR5dQMwnAxuhuufpr6yQ8HLj33L5HLYHBN1",
  "key13": "4r7dT2WfjmeXPtsNmUbYomBv93fRkmi5zvMikqxFGveASsrEkfJUhvkbWB8t1rDf5p5UdusbxgTSkXW2ga7eDvwU",
  "key14": "3k1iS8NHAibZd1BRWCnKSNKoWrbvjoMiAc4XdvXG55kXrxJrjWTYmeSo9Ufdg7uSxcHfxnK7XHVxSdhyKx28HN4W",
  "key15": "3f2GTmG8JV5SR1wKQpqnKizuzZnr3QMzwtyvwnSbb5RBSLZahozypCeAnWZMyyvtomdD1kwDn7y9FW3M3qWzhvVe",
  "key16": "2sfSkQM5qMYj2wkjqfA7FwbtgtEGcw2Z9r66SNo6AUhCjVvdczMfwm4GuUpYgYdPY7b2DygUpqbyJuGT2XuU1ums",
  "key17": "2Lwxkqjbyigp2LWdyQQ1YaWaarXkU2XLqgc9sARLJJbAts8BJ6e3C6LNYUn1gANbnDkAobdhddDCcDp3UNF2Zue2",
  "key18": "62okdvEoVCWrSm2c5XuYyRBQ3zpxujx5aax3s64XEPx51kHTvb8LDQsqkDwAtSYCC2fbjKFvsMaR5Aajmap6aZHv",
  "key19": "3MrPXkDz1v7nkFHwiNDR4MVh9diikPbsEKMkAY43yKVBfnoj11XA2h7TDwPCH8tx3ej7BT4AdL9DTPmE7C169yD3",
  "key20": "5R4MmAhXuUGNkPqb5ehnKktTeXufg3QZk9tZD913v6UbtcgU2Ei4n8NFF5TqMYNVHACqey5aaupava5DGSMy4WVZ",
  "key21": "2u5LB1a3HsJHKYFLUVrdGGQg5CN2iu1J9LKnQj7ytPmXug1uWiZVxvX7XGnopPNwc3yMEFTx3cScz4WvRMSeKX3W",
  "key22": "2qW5LVsAKw8HPKcNHwCTD5wQggpTAYAGE788kEfTeFECL1Gj5bNgk5mMA16nJP3qsQUkX7xbCSfG8HrRp9TRxHHa",
  "key23": "2pPeWZbixrx4Uievx3pAo5pPqWu4AgVAt4Ksj4MKj4YrPZfBdMe36wfPHWbGwMEBQ9EZtA5dhyD2LLkB96trFMKn",
  "key24": "5qSKP8biPw6MZH4hi6fbYU1qDHaBxmwDyE9Qne82ooVVGDeBCPsRUoF16MYUJDoW66k8aYyb26TnyhXpTkiVgt6L",
  "key25": "3BD7fK8u3TxxgB8jPwSZdE8C9FRfMa7bXHvrhGxxhpbadnhseAPy8ErZf3ARYddyHf3NgdB6vz3RNFh5d4cqhVbu"
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
