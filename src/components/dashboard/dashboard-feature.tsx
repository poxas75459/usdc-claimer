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
    "3v8ueMkfvThxcwGBwZuuE6GE8MJEyt7uyQeMN6eCbm4EtTE52YcGoVYseqjsQPPR2pLbMJUoBQLeoTsRQoqKoBAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXy6e9KKaXLk6arQrQGQkw2PcLZ436L7Q6aKAm6fdMLV8VLxwMtFzUtL5i63HZrUfw3e68o1DebUNnKFpXc53qw",
  "key1": "66iJBtL5E12h6tCq4aYSJwYk3MFje3yXgZLtHNoeGwW3rh2VmfAFdE9dmU26XkwgzEMbVahr1ZoZBAAk6sJ5s7cd",
  "key2": "5B1zd9HkA6auUTRqH2ZLkxAeXLZ9ToZsWjsZY9JWiosGEzJSNRDq9k6t31ev3mXuMpTexYjwCNBnGDVRgsz3DqP4",
  "key3": "2YYhLeaP49eMSiay1xd3tmwxvXHjujpBqy9yCxT3Dzvo1U17UmRQVuMmK2mmZHyp36bgZR8LSVjmGKLdhjZVn9Yz",
  "key4": "5PQ5GEWNxHz1UWnVSd6kEPtAw5KcewrHY7SzM3oAgkFqwnZnUrnJdBs2qYFF5skrpV78GviEEwwv9eoAfM9C9GaR",
  "key5": "2J8Tz8n6nVpHqjRMC9Q9ds9H6GDxzSBjPh6TMpUcvEiSfdhAZCcsemyxGnWJxxVJkdbqjyNYJbFWArVjbWqVm7Uf",
  "key6": "BnfDDPcinjgCUGRXpjnC3mX4rnBEqQjgYReqV6ZgTodPX8HsSNQ5qT17ds2S23MnQ61KeKWU6jYsm7mJ6SFvttX",
  "key7": "3QMpnjEBrYJC8Ctg7zhKMnjQJu4hfF1dzijYHDTb4iyLxXysGJMtRAEVsCUzgFLpfTTpecbLsDMwmEuUXKgLh6xt",
  "key8": "58hDHZySvuXGYEHeSEMwGQAB3NUXk2CwruFAtxc6LUzxmdbTFdFqkFHaToHmEWTs8396yB8oQ74pJ9Q1VcKnKFx1",
  "key9": "3opgnXwzjV7UT78Ns15P8vEHuGWGmfs1wvyDGBroMvyw1wGYcgAfZmLwpZX3zmqSPwNXZe1FdoikCnxGMCNtJeuc",
  "key10": "5w5LAPuDycNR2nKFzdVp6x1e53K4qghWBdXBg1CLiY2jCyNeKoPvFkmdAMyhZsD5GWFwfHNZ8sNb84h8vnEWnB12",
  "key11": "3kJPpnzPatbfm5uCfuFfLaXv3AkKRXHNoS7HKXwFNhRefcnyvjPWtrrDycmN52GPoYGBX5KRvAuTrQhHU9SrQjC7",
  "key12": "4gTWdwqwvQbFSmSqj2CNcDKZ7ZDoSKgv7eciQcQseLe52ZjYRbPXy2k1vm9NvDxiUNt3LS92SmrvFE3jZuQAUxFw",
  "key13": "FmTgmjdegkCAmsoaa2XwKEJe1ypuS76bnr4DYfnovq1JrtBuCjgEZFL43Jq7AcTLPnWQNaTxwuUpjXng1LGe9rj",
  "key14": "67NA3m24NSmjF4VPcUS7aGGJr72xJvPYQk5fB3xE7hrogppJzTNvgPcRRdFgkYD4NS4KNgDLQwaQ3cyMLch1Ao6",
  "key15": "33H3nu5S39yfvePFYjYkXLspPgoTCiaF5asjxtHnonTR11i9Egc1iP1BxnpLd4161QoSTsDVWaJHRwe7giowfztf",
  "key16": "2qMERWGk2FrPa3f4mNM7Hjei1oZwwghbLDnArdmAprjCkeYfhJBTCtJNWN7fTPQpk69NGW8iVM6ZNZZN5YbJvh2H",
  "key17": "vayReCdYmyDZ7nP4GHf43mxhUy2mm4qiCeHtDM75RTEPfqZfAbBEhEYABtxpbVw6BAwFbWQnFxoktBCSNqEEjFw",
  "key18": "QjkXV1pg2ihUCw6PLz44FdEMsdC2cz3M1KqLM3TLTrgCEvJSPd2nQfz8cmUgb15J5UWgSAHswuRdnvXmfnc3VRY",
  "key19": "5fZgFuR78dxsjRaZyX9Zi96NkmuoavMmYBUyXgJ52TAetA8vuwKAqALrcfyS3rNMA21nZBKtbVk2yTosUdr8T6Hi",
  "key20": "5E4Ju3X64wg22H8j4D8zQcp8jpEKu36EPQ8PzmfCKE426Cx6iZNF9vqRsqFJKJiKzaQRituZ4cAGWfvGquoVhaHJ",
  "key21": "ctFubLmCod77Y5fD8j1kyBJxE66g342Aj2nYwtk6XExBpeNZgwCaZDuAVRd3ubXN7BTNhntC4mBjseecuSBm9L8",
  "key22": "2cwqMKcgzjQgjHUMQitFNx8BRGKy57gznTPghtC47mv9k5QZSPm7J32wkhydyw8Do8q7bNWsJ9RsAdAHGv2BpfTU",
  "key23": "2ruobEVta1F9kQ69WYXqGPwWH3oVS2m89M7MFTFmidoZmFVoTHw87LKb1PHp8QFxjC3JqPBr5eCuPHpKqgx8YtBR",
  "key24": "3GkLf8G4aEZdQehHdGudCYL69zo3WVCVVZcXuUgCPMLueRDQC4eks3s7V4SEx3NyYZRHHaYwNMWj4mcrVdJe8Ybk",
  "key25": "3VERpjTnLu6oRadJ67vnsMZJHJobqpRHKBBS41CGhedud9WwiSqYV2WCC5tmTVxLc6LhXXpvstuFCvM2eQbZukY2",
  "key26": "3DGvWM1zKmXeyAr3paXHjZXK7tejGoccM4pqN2FXEMMrJxJLVJr2GR4ZLQTn13EXgwuvLEA3a98Kc3dTUNd6K5zv",
  "key27": "3mcKVFe9iC5xqyRaaJAKyLtUYP2T7MwE5cTW5sWZFJPayr62vGh2FvqEXSwgF6tsRoxuQN3Jm98YbSuJH7N8oacn",
  "key28": "3n32CDTfxJfzC5vejodMXyvxhugvKXry6kCzWMgPY7waquDDk8cErss6ypxnNxSE2dKtpfUaULBYwAPGEDvZhzAp",
  "key29": "4RsMRqjgcB8RumigqPzKRQarE7D45xmy1v6irnpHR2kgVpZd648BCedPXNTUxNum4dMGJWa2hzLG63woKc1B1YwA",
  "key30": "29CmhLTqoDntQmmiWzb7uV1i9VfNgkC41rC6bj1gbnxS3M9mXccJjU84D8gr5MPFAqZfvfv5YsKZNU8n19TitC2S",
  "key31": "3ny7hZwBMkgA1umCpDUt9sKNCvzeFgLRspxjungG8FxirysKw8A4JbriTn1NPUiTuhzSc9qUTXSHAWRy9DHebKh9",
  "key32": "cntpxZRNDzchHVM2zr5wKQKohXTvBWMvpSDSHnSGmBSqHqWNf54QCqq23UtTjJos1bnJrEqzSj1wsRXNjYBYPzf",
  "key33": "3ZkFvKH42TetTUjKMtjCXmBzvjgeVZNQuuPEzVrDvVhtizes3cQrbGFhnimsmJtxG9k8h71VvdA4ArdFLFM2auv2",
  "key34": "547ydJLxjhzeKK25ET31yjYZy5BTFjeREeUcVR8qDqn7oJuk658TsDmXepTVM2c41DN2Wqcw762hFafwfbMLsUUR",
  "key35": "2UPR72wG1tYShHZ8BAhb8N1oSamKSi2cp9SWYFWyVHZpvWWFLTXuWhDTTaHbRKttn1AfLnhgx6G1doWXKbJec4XK",
  "key36": "5mg4TKUPG6UBEMQZBZpg26QnNfvhu7HtyJTqYgWoYrx3xyqhfej8h3ZHTTsP3WkYw7BHFgeSoJJgudRheoCWueFC",
  "key37": "3jRfDr8A8PKPeAUi36hnF2GYmCyaCDc1MRvipkLsLGcqihs4oCGY8dDfqA21vvHZ7qjphRKNkJTHPAYzfx2MDwWA",
  "key38": "sY7v4RbkiWLiTySaqUXui9yw9burCLtcWBhqWhFZRU2fqBkVhbw4GvNcRK4pVyoRPMSfs9Nk1K5JVZLmy8AJYjy",
  "key39": "44xSKEiP3dHAaxcBjvv73UAmeFU81ggR1RBShTJaPgWvSQWQuPNWzhNAKhVuZHhbihr1eoa3GBsskjS7jQftvTDG"
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
