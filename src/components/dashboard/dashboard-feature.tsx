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
    "2tNWr8pQPEw2ehQmgTQAWE2J1n8ADZv85MNaw3MYMtMi1nE9njpzxPoV7cxtbJtTVAM1LcsTycXZxqH1Jhfcepcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQTRtRTXq5ouv2Y1png4jhZr4H1kQcywn5r1BPezYLRPwcJJh2vPDyA5sjLFGCMG8HwpUU6RzW4FtJRttWThrys",
  "key1": "3KXESLg4pUGBMVGGJwJZAExrW2S8nVCUc8G4d6AsoRCFPzj46y87nVVJwN96WTrWoN3Aq494Sjsa2LvcycUjgpE1",
  "key2": "2cT4uKx7Z9yGEzHixmnZbQ9ivHm9EdvoV3LcTk2HrxapDa9ZvRDyVFmJcmvcFepaAwtcauvuPPjvaLNZA3ATcZ5o",
  "key3": "5Umr37NhCiNU9SFm27sZwccArxDQHgqTKFPGYt3S7sZy377YB3kr86bdMosDJZwTqyYF5Wew41sMk948Pyqtmsyt",
  "key4": "54crpEXSG8ZXmEEkwue9WZYeD3G7YSjwcMoeS4evhpj9FZA2ZjvuVwAMsSL4QzSf8SowMhaooRphTJ1RLYMLDZog",
  "key5": "2gPiBDm8bD2RKEeQmYepX5V7cy48J3qKxqwNZY1h196htQNMjxUHvLjMcudFJirhydM2SNq7vpuYnUmpdhZDJfhC",
  "key6": "4qYdXaPESZRzfH7bHdcyKiSWDwpxPhtcgJnZvRUU4PwQeTNBARs8a6k2sSNsmX63z5W9nFtJJP2Uw5yfBYFZbRfw",
  "key7": "4HkvBWASCkiX25mcz83fn13BV3jWSwXXpcgduWNr5TUc8MfD9kcgXBbNii5uX4pNjEnjQmBVxud7hsK1AvcJi4zA",
  "key8": "4E2TksKjKSVN7PukLcS9ygdyMkvdP33tCqSf2miooxbm9Ajd371Ceec6HbSkK6nYWrRDDoXdwFXMKqpbeSWL3zrF",
  "key9": "4fmi6SVcj7SzBJoaLPYfigpE5snSufUEqeMUu8NcrMHELDhPpEL4NE4v21nmH36Mzzgq2ybdi76JKaFKCCHrtirL",
  "key10": "39M89pTyEatHmyjuY5Abx24waUXPWn26Bqo9zXG2cGQVhBThBwBZ5WcDwiWbjTsXG4ENnM7cue4gdwPm9vi2qx4a",
  "key11": "45ueSTV3CjNGW5SMBJq2z1ZS823TSuYfkhScgBAkU9rkRZKpfE31YryjEmn8EvLnFmWdofStBmkLVMn6VXhpJTWy",
  "key12": "5apVREYk9QcuKRizHNUM9TkDZiTXE5o521QeyENyh84888mEsZ9XnE7qMbGymJsUftoVeP3SUQZeRC4d9JqaZCT",
  "key13": "3DD3qh1Qfp9JmeP2HMRjMdhnxaJmFWSSJGiyzdwvTf5v6LvkshwPnwX1bmh2siu55hxYsRh8XNCVML8wZoyA6o3n",
  "key14": "2wR4tKDVVQKd3ABBArHmDpVvxo16A73s6P46aUubrAtUPPjhHcb44TGavZH1aXUziy7c1xesxKmy5rW5ZFdxVHk7",
  "key15": "317jESaewMQR9VZL3quDF3j9xjTvnM1LmKXjcZg11RNFxMtZoQujZveTJh5PrSsqZNMHEXnugpDuVFEaLGURnC93",
  "key16": "2npCoQCPWNufrrraK7s3sG8q1TmVmo8Fw5Yj2grbqybpXTkUXx1oXL4zxUKjyxEDCojFF5d9VQYif83QTDap4PzK",
  "key17": "13zumixLV2d4nNY3XgGubK3nSvBFffgoYMqqA6SXQQFmLj5uHKkNd5hBoaPKEEpUCdTw6Krk7hx8scfpUQmWLRE",
  "key18": "4WVHFtBGrxNkmGqt5hnn5nnC4yZnSYiGWTLneyAiwpUmgPyv7oMDRqPs82o6co1t1VDjFf3YUKeVVeqZ2uUWT83N",
  "key19": "5jF2yUTwtGCDCBBJoWPWdCRNy1YrfivaXiYpKv329A783ALnbnHX7MPdse7SzfDoaDrdQtaQ3FMxKj137BBj4xnD",
  "key20": "2c51o9Gp5GKEjhGKmSovTebd5xCEaD67M3GbyLTZvJfkBdSZZ8VLDb1nfAJTijPUm2VQeaJezdJE2yCCNBA6AdmS",
  "key21": "3gPF2MmcN9CDk9QWYx67v14qKmLb26E92gYUwHX4oHtHaXmSfwGvfFhQv7edSvuz59eF7AhojxNy2hn8YtMURWKe",
  "key22": "iUemKtesKzYnnwjESAMuuvYpgPdADv7DZ1V7LyCjmjmwkmNpFdHzK2ZHFLntRMjwMKBYo8jva7hRKSVyLpzBb2K",
  "key23": "5ewsu6csyCnmCYj5w6gULG9pEyyUnkDsBvAG7gE6nfyvYMd9dHETLim6SrTmESqAC6U9ShWDqC9rzXQBS59ncZej",
  "key24": "5yrNbbqBRMRA1e8QpFr62xTmnNAQbjNWs7imLPiWUfkZoQUmFYLAjUUHZJWL3kJxy8AiaQ15MpAeAYmxEiWxc436",
  "key25": "2ZdH7yVPHHzz2KNdWMcViSikVjRCV2v2M8hS98gYhvhiQyjQzimEzP3DEYKm31tw9DaJForyhVmsKSCPLqXVAoTq",
  "key26": "2VvrijMtCf192Au3fUfPhfff8ZKPMkWaCGg1GSnimgQhyecF8UyxuU7z2SoeSKv71GmPKKrDSg2bf1qMPduUNzC8",
  "key27": "51TsTvte95PQ11gMVSmbbJnqZ17BVm3FgWe5Ewak7Hfa7QCriBJapM9eDWRTs9zLibEmk3LNp8CwouNihm9v8Vb3",
  "key28": "4UygsLxeuqz7PzZN9FTiBPDJUXtEis7cVwqc7mgzJm3C69CZ1YHm669qw65WqV3yoQ6ssSuMfNGhAHfdGHmvGfAE",
  "key29": "5eKzX89cnd4TEwzz7YyjpKnyvcf3DKGay3AzKvgB9zDmMtaZcJ3MszFkVMjtNkRd1HqRFzMAGuSsoHimqxqA3Hek"
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
