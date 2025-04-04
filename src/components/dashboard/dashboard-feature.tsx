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
    "5pqTJqitcfVVNNg9VmVNngWePomWShHJ6spiygb2yvLhwvmRLAmxmpNhTjGo2QYPWUAdUFYB1fy4TzzapFAMT7Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCvEQQKarL6qEVVWf1RpDUzmL8Ynckari5cQNNuvJfwiG7EHG6Vuey3jaZyteiqrvJTDM5QKL7wATZe768gb9b8",
  "key1": "4xaCinQ5JT9KZW8WF71pCrHMy3qMvmMw4Qmx8EVdqe5o9c3PGkCUNB1CCuEmYyiMd7mVALTbHZ6Qz6dSybCnckr3",
  "key2": "4BA2q4VruwM7mb3Ck3od2avc1Pckj7YsfoaoiVvSbwa3CrL8MZqP9AB6sdTUbQUaDv2VfcFDR6XZAzW3oufqBnhJ",
  "key3": "4s9Y7SY4j4FgWGHXJVBXxA9kDPLGHSpccLFbvQBGryvegw3Fnubc9mEUfNxSJumbQkN4pH9y54tYiwbgQFXHuwTK",
  "key4": "2vdmLAGB2VWPPtzzbkEsZerWs5iEVDZZu72mQxhE3T9C9YXk3KNyitiQrTpLncgSMiavbSitPP4jwiqFnBA1dwbn",
  "key5": "34pbKqYWTudj1K4JiRcpaHvWyuip5eifqhvhTrmF25uQPfbRAb5Msk25ow71ptPLNpdw6a4qP2WpcUYQh8UZFsnh",
  "key6": "3SB7Gq4ZWW55YT82gtdB1Y9ycLCJd3eDATTtW34QCJTNgqdLLABNR46FPzeEopUqgb3vkr7n55XgXmCjEvWGC3J9",
  "key7": "4zr2ijs4n1o95gtp3kjLDJToe8oywjwdfBpbk8ye3nHske5PmRJXqd99XSMjuKvBqQdEiFeaWesUbHfFnkqBcd4i",
  "key8": "of3L2sqDAiEGJq6s3kEujzDEYjeCPNKLLPKNqZBzr9CGxFCsHGqXPz2SQhs9HD2YNZTxQeZykhENAM3Mm9syNy8",
  "key9": "2qDmyyug4ziFhH4Rs6hYhF7ArtneWwbTSzNpW1RPUN2uqGitUF68yURNXHqmWF13aQNfdtaLzj57SK58SfRAFkem",
  "key10": "4QVe4magGnZxxnZR9yiegGujQpEpfQo6HSDT6EoJF5qTqJQsAQbYzFeWmBnVVXbjyVKrkgCcCtjPYwYuWGTFRpx8",
  "key11": "3bqNHuACcuw6RBNi2GdmhgnGULQ2aEiY4Uh9shhqbxCUUcfVvpCQZiVNYR9ietqfnezjJifhSCrrdeDRvxhUdLgQ",
  "key12": "4vg6gsDVPJfd5C4hKEKK5kLNDLNXEkxA4ukNiWcx5Wxu2Dmq3tKdNe5eJSXM3wji2jHbVBzPZHC8SXENnxxkDwSy",
  "key13": "2WZoAhkNGD9V8Re7GANRowU4MRfQtWUGGQw8A5WEFqBqmo145cs1bUJLVFxCe9fmC2WRiAZ35RGZw8uvFJ7iUpiW",
  "key14": "3qzSHCU6rAMxQDQkjcnACgiabKsNMtxqABeQDAnEYsz9Kf626aGHkMLzzSKHJaJWuAfvKQe8Rs2n4NXhw3uNVVZE",
  "key15": "5jWEkkByYpZA1Uinj1ARxT4xkaS21qFtaps2koyZkEZ3AXXx61EnQ3QsbN4STWSrTRBYRzNjFHpujd8KHmFYcVoq",
  "key16": "2U8znsj5ycYBFp4cdeKUmUFVu7FiUZBZMUqBWcWfiM3oYBaCYvqVvPHEaqgra6otJt6HBhDvVKiBR1jwmPYB6mxe",
  "key17": "4LYjLqGHn11H248KDmfvXrDXX257RASFFZUQxmAnXhihpMqLswQRm2BBTtAXVSQx9sqWJ5jABmkq8SvnrhMuD4EL",
  "key18": "y3DbP48SJHpHQHRfnhUTrGQ8G5bczhSMkF9nfqHTswADyi36FEz5ntRCwRLbZEiqNwSmidegQ6LydQKvZxMw8YN",
  "key19": "4ueGJ7BfgU6WLEtxXark4viKxNqbjR6KoGodHTKXn8ZXvRVV3EpQATSyGpxazFxr7U4jJFTNku256nAd9ZDw7vw9",
  "key20": "6UMCRgn3M7HizYVfcGrpLbqaD9u9ft93vU97ctEsoeR9fKo9GqQoDgLNfwvpuDfNoEjzUKhzWXGvKaTBifS3HXe",
  "key21": "5sYmqrptdCR6E1uRbkPXCZXKedcGyMSnxmC1cA82MK3dCUpqxNDiY6VCvbzQqpM2U8e3fGrvSVzj2fQkoaheGnmH",
  "key22": "2sBzn2UQMoUexbm7sLjubniEY4z2U7hk5JbHhQRUukUet2ecyNkKKJNQv8YxKpxEvZAX3ZpBrTccRpdjFQ6ftZqX",
  "key23": "5kZ9dfL1gXs1aKuZDmAmgLZunRpZM9sKHEwdQm87tZ9dj25GoLmQLnaKLU43uMHBHtJ1xBoDGiEfF6FyPPPfb6BY",
  "key24": "3Zq7KxthmCKNreWVqvU4djrDg3oA3cjKtxPu6ff7UJAz3pMKgfNVF5aaCYN2W9vjLRngLPHaZxWttDwm5j2zL7AV"
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
