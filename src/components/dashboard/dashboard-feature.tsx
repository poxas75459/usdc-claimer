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
    "4nk3LDp24VfuAPStDXvFc5oChnoYBV5XKf45rNmSSfrAVf4h2qxTNJ7cp5EcFWrWPJeNTQjz2Zd2bPML9bz2yeoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upE9VhEVzxosgGB2YkJDVCRuhkbsZKm3RaYHpyFRZ6Jwh5AVf9sY7i3uSUFRPGBnRwTwxJ5HQugqyfLmavC4K2W",
  "key1": "64Ga2HzWhgvpt4YhZujSrU26DHyVWT8KUrv6gC7N3YjML9GUyWEY647g5VPZCzCLW2s8rcxUN4vUzHkngSvoTyc8",
  "key2": "8fn7o2XC8geYoPZ4BpCkbj8rVHSNa3xc55c3d8hmzAL46gzndo93xUT3Lnq9R3gHjZFh1EZX3vUbkzRzNmqFEnN",
  "key3": "5R88eooCyjyYE1zCLGLPPSfqXs9p7hbQ3feXomK6DLvYn9mxNWuFc2xHhcRpnYgvKMbwMXgue6ohVd3ixE2td3L3",
  "key4": "4S8MDsPzFRXn9mtFG19cr99rM4pCpDP4CecURvHCcNStEwJzP8Yio77AhXK8a1xZnkriXZyTkW3PRWhKLLSmK4Ce",
  "key5": "4AnPsjeoqYBMP49Ddx8ry6L6kJbZBj2qP5WPgCTkjnzMiAqCyEfSBdQehRiAZJHaGFiZXqGcpMHha966fcMxrKJm",
  "key6": "MJ9Tgcee1wLkqwxVtDJhdwDLeX6UVHFmTEJgSmcCpKvhTpSQTQ9kQnqt9jj848YFV59f2g7gHQ3m2usMXJz9y1P",
  "key7": "4rYKa5dE5KfyFjgX2F6a7c9FoSGGK2HgcDCcpAyWFe7cQ23JWBaikrHyK8eaW2nwdzZeUwJEmBWsbHCyLKJG9n1B",
  "key8": "4w3jgurJAyXE89nKNUWFr4i764PFu4RfoxMSxkdPXXPaRevVvc9Woy5tGbTzs1rPLmnhTDtDPp2UgTrTDbNDgTPM",
  "key9": "MbmsVujeEg4892sQ7Yvs6CGz77D7uvMth1XtSr4MSYX2HaTVCY6XEpMYPiuZiT9waJ7FXEoY2Y6ezg8BzjmKaU2",
  "key10": "QwXnMpmvE72GXEtormiZrNzvbQ8k7Zvz3Uf7sufEiKve5F2D8UeVg7tzDB31kUG49Y1YHBGzTtE6QK1miKzY1rz",
  "key11": "5h9brrQdTsg1NdfNKkxoWaWSRuXCPRD5A8mpVqLnSHSq6jMdJqNHdxxz3zu3QJdH77VE8WV1vPVdXPWAPHrDihUo",
  "key12": "3rn5YUZXEvLpn7fsRduMMCFMwXPBZhR8CFeZaapVwnRSgXKaMHEGkiHcwB7ywHXKWK3m6qEqWVUAcpAWq54MxNzf",
  "key13": "2Wg57nPUrfKHqwccre1VEULs7ZzSFpw7MUFt6CCbKheqhJ8gP7ZtYbZsHYaK24MtD87CL6EDdSBqnr6NDoUCmEVP",
  "key14": "2LRuXWVGZvdHimB8qzCvPhDf3s9QsLL9jH8ajpqCRaxWWg4b2qqP6Av56isRUUdyRBcRsL1CmZLP1GYcfbyBBYq3",
  "key15": "3tGbZtyQDJPuxV4pEmwb993d9Njn5bCVxeMZGDs2qWZhN2nDFwsUasnpE5U3NBLnR6mx1tPoULeHcHGEh1eJux9L",
  "key16": "5QAbYyffvw5fMF3Z5N4Wg9Gu7fhCcA1ypgh1XEQGwAEcrPHgLDA1hZuCF6yV3HSAXRkPWXnPVRXmdxSyAhjPu2yN",
  "key17": "3pXJLDY5Bt8m2j9y66V2aMFEG3zJh6AmEfUhqp1hHdX2UroJcBdbGuqRxF4ZvPfYQsQYEw3oHW4Tw2eWFcMzB8SW",
  "key18": "5aZsmBCY5nofi6KVqGdqRVgEejj5NqJwBFGVY3bd23kp1WeWtF5Q8vrYbvUYxTWCKV1NixJSxaWsFcbYHm6Z3Ari",
  "key19": "2BBSGgfaY5BHyqptjnf5Dwz2S52tQVopYg1gfZsvxfbHppM28pFFb3jx7qEpP4oQBhAUBegM66bckrqFAqnJw47a",
  "key20": "4KRCTzuVLHQgKA2G45UAtgXcac1F355u15VMSKWuzbEUiCsvoSF79tNZrJ2iNpuK3ykDkvLNjDBjugFmqrjHUjr2",
  "key21": "5AvsrQq8a2vCQuydFyxvoHtYYCPX7D5zVibS2aGHnaQt1LZpwUVoytEx5n9UocokiSTakR7HZsRiZFgtBMMRuYER",
  "key22": "57Z1sbAMPBJUi1QcfW9dnNuM5kpfJ6VrDqEPhWp7UXz5nY5Ga3fLLVqYrZVVghyBLMz3a5jTC3Mtunby86mJTAGb",
  "key23": "5rKjN5DyokJcNpwwNQDxkY3gHC4LLbpZj66g1RBDjj7eLMT3BqhGLiPgkn9quf58dvLdXAxtzHhJzfUZ8bFQQPPf",
  "key24": "3TRjxGSvJpzrAzWcevf5odj3YmXtotnKiUngLuSa9hSKs7FLWwNb1fLjEj44QCQybhHznw1V4qHeAedTcpW7LkFg",
  "key25": "4VRpDaodwt79JXc6redEWKu2KCHecGvGAkod84cooEnzDuiPHEsh4XzZXeU1Q1T3ZFxif1RRh4KYHRumuGGCAjyv",
  "key26": "35qMffCrJN4dAG8ct7y3FTwjCyep8CVENciNq94mRMvMbsyEDoC3t3mCgm8VfaUero8VnjTtKxi2dTNV9EcSottk",
  "key27": "3YVZD7fPnag9G3aaJUUQavcmSMFiHhE4Qj8STiZ6ddfudJVSQ8mhfeFCYDQTaUf4AHTRsHbz1AkEwVEFHMMoRcP9",
  "key28": "KPXkjV6GbVGG4GXm3S2bKZcgHpCxo9cxSgt3eSUPfBochQ8oeuHsUeWVbKLERY1ZsvNVqW5ruf4JwnUtGyZ8Rfx"
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
