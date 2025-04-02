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
    "5dmP2LdXnZbBhDrD8gcvj1GycRAKiyKj1z2HnAuqbdkLWipBfpTRJfpHUBRo7Zuw8TgRxqsjaUdCgUM8WeRyoHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eStCNJ3yNe9DwZdtneHBHTuxKT4CyTJUHPSaXrVSN8jbEgSUxidSQnvgNTtnZxY27eXCk4gSYNCCSkhHqhsmcTk",
  "key1": "2nWzxVhGNqLBucj8GCtcsx5VGuEV9Th4tgBQBdJhqHcczPajwYcJSyCmmpPieAzU9DNmQHnqJzjZYB8uF9zDwpXY",
  "key2": "3QYrBcmtuMMLXVhqUWaFejyHZKUKghr7PkDKFJpk5sKAkDDiCbofyYTYeE3d9sbRazrnen3tNG14nGFZCG12cpcw",
  "key3": "224iSZ57vySzQNXjtJpSvRDJmqfcv2ukr1E7Y7mU3k9uvAwwm7kZZjvLrFtq48qWDPtwD1uxbyKS3zu8XWMhxoNW",
  "key4": "334yaURNWswmVMFj1xTQrJ9drPeKt9D2Pf8RiVUBazVFg74SYt1aTg6dyKX9SXN3B54yKSW5y7v5LtsP3X1xK822",
  "key5": "5ZpSeQSXpYv9seGPX48a5TegDQpZAxcyiB2jYJsoA7686SyEMyUoA4cmwyXuxrDfcf6fWAwktVxgzJjRjUTBNnwh",
  "key6": "4bnfEsEFfyyUzJW7fE6V4yeZBkkebLc2h1Ccqn5Muzx6rsiWnoKyD9W5LLv7qxapbeLrwb8nehK9gnovBxDaWhQV",
  "key7": "39Ntw8ZsBwNXVVd4JrHAuoHpXiFNQxhLtvpZhP77Bc8cnjGPMU42yUpnCGGdB2VqgDFKg3BzzGzqw5QVnxARFh7f",
  "key8": "867fG6ftTdHsbt2BMofwehMhfyZk7FQvF4XbsRpijJpm8uGobe7HBoBTaV7SdpE96JUPtDzuHwXMqYH33R4GfYa",
  "key9": "5au5BRB93H8Kj7uvunforn8wQDUaFrFAyeACt2Fmzot4bomDoQyKUF8rk5c43E76Cg8rW6Mmr7YFuSMbXA1SJXj7",
  "key10": "8ZHXcPsZt5m1tn43qnowfcxLJ29c6dL58CDFy9hVq6yGXmsvWQJbMMUu5pUTyLb6SHbb6wuTRTNCGJr4jQqVgJ7",
  "key11": "4bPjMsv5dBq8ASUZizmTJwswkZnubNDxnyYp542rtxP81RgdPte1kqn3YX57kpytLgCs4zscMNCuEUm6RYT3WtMd",
  "key12": "5XEiY5ndQBVGu4GVANeRj1Aby2sRhFaiZXMbu4ETg4zfQ2KnGi9zVrRuMmku247LNEd1rHHuW84BxThECX6yThDi",
  "key13": "2c8mJrkRMssztqdiWgzbggipx8fC5ELpu5tzhY5XhaUxCWkZxErynoikmKDwkjwa6MDCqr4MKg2jdDzRpEXVP5TF",
  "key14": "2bm7xi5Fs6WXQy8RLSC1MKqELECo6jjxBwK1oaa9qri2NDB1dCDqCQy2n6UcMX9mSYa7Cx4bmdqGWpYJaBpiJ4fo",
  "key15": "3zeucioSXixP9ca18NA9vZNuRJXDdGKafxUnKuKhdJLzSrWoYDCgj7LQFrQPouNZw1sRc9pYTrx5xTmb6Rfsprnx",
  "key16": "5jmKaoFCuGc4ErWzoQFeCRVZpWtJ7PsuisVJrG81Xg3WUGGPC9sAxcWaXAQLpub98mo1z1XrUQaT4togp6YZG2rL",
  "key17": "5XYNV54gp2qSFpZDuHcWFa5iekZdA1rmhRjKZzxopMGvSA8gTsfCBxkrbFkHUwZh77xuoLn4AWK8ZTViQxnpLTXP",
  "key18": "1QwotgU5HjbWUbjryYMg642jNzmwiuJKrDVguFMk3KwBRupHJMZpgey3NMvzsEYvZFscrgyR7oPiGT3gb9jqmKW",
  "key19": "2xEWMLp3y8fcNFxVUjet8YCjNkkgqA8YF9G23wDZq3E1riM9AQ6PKntCKp5ah68nbZrMYbUFA3ojjKvzPNnB17e9",
  "key20": "3NaB9X5Fk5uGoayaniYXFNSnzKhc4fr6X7Eknm5QXKKbu26VRY6idRnne6KAH7QkiL9Vc5rSuDcCa9A3emXo6oxT",
  "key21": "5xB9CWiEyGmNAaXtNDzRsoZ9KsYT5CnmYAVGghDSkSfnZ4Njqr5Sy1ZajDNLJrrvm2uJ7MPdWngpPu8hCfcdXDKo",
  "key22": "5YC8RZSCYnob3c4ayPF5kg13meJcQMkZxJWxi5fD7QFyYWziSskS62t6ytdAeDW4dnVPGJtCVjUW1KjVE7HjNsnG",
  "key23": "3Cf7M6nxUybnrhdo9ZRM3d5UkyniHwz8EvFo19Ap7ros5R9snzQKYZQ9eS54eSyuJfs6hmDsi71aYXseZHUgn776",
  "key24": "5vSjR3uXwea5JY9LvozCcCSbQKxPsf9NVe3cNZ84rGYWeXiJ9amYUiCSH7f9n5kbCpFrcQHaXNooz7U1o59tiaF4",
  "key25": "4Qz5bAyjCauCPZcykXpALi4rruQGpJ21Cdxr3yaMs9RErxdrKeBFeSsRXJQdB3x6WCW57QQjHxaQbqkEj75q6fQc",
  "key26": "2ewGC1T9rFbPDDdQXAtxZ3ZSaSKi4MnjadchUeQg3HQH3SsjxBAVxqoSW21AACyyDB6hx2G8hRqa6kbpEQqhkFSt",
  "key27": "2GZz1cZBoakRs8wk5PUo54qoZ59Wm6KMzMWjGSvjTc86D9iZbcn3ZKaiwwsL8ZVfpDgRhArAppA2Q38mnpQhh4ti",
  "key28": "2jhzRbRrNYUvc5vb1rigQCajAzVbYBvRGVkgbQXpvJRzKnSWUcneNVZoXZyRD1t2KusLZtJoQbPoQ4LLAoNFyveh",
  "key29": "5ys1TwEgW63H8cKFPiyxv7xNHJeyBbLV2ZeCkBweUap2rABVcnXmLVgfTXG6oD3QG8XprNw4NQGNqZpNWqrp2goX",
  "key30": "PBRcXxhXVr6C1WL3hqZ5NK4CFHGz16KTTQadzN15DRz8a97tBKCnx3gji8LrDhACCQ7G6AtU1ywJCENpx8ZtSsS"
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
