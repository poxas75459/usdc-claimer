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
    "24nhrJ7jVrGzrKz7PXHLaUk6s7Z78NjM2z9Qg6my5zwe3vEXzrvKSwPXatvbjswUhRsLfXs1UJd6Qp9jzZwsZsMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zrkT2S44a4kD6DwFUe4oyfeMde6UfzZjkwX1JaMHAcg4R3k4m9AL7SoHTH1ytL3oqqxvFDHRy2irudgEBBoGuAg",
  "key1": "fPupu82TByS5AJ6Lf5vpyvigU2i5E8S1w81aC8RwLXHLy246QwrDH3WNb9SYw8y6GSz6AP3ZsekT5G4yKYVJynm",
  "key2": "5Z5PkpjRtnpDHwBf3BaJk4w9w7XjXfk9nELFdZREjKYMm3YNhBVfe691PWqxrtHfYvdSUzupeSJ3JsFj9Qq6PuZL",
  "key3": "2egs1yWpTUvJL6xnhhyBx2tP3tzi7X6fqTCRFzLf873N3hxXJrnFziAZAAN8iPH8fYJiUgr4Q9KaVEaWxjHUgUYH",
  "key4": "3owY2Xg6gHrNzfZaAWFNxU4VAJhZMFQ4xqmeJaa4zqkLcBTXAv8eYJ1a9zQhroYcc8ggx4WkvNk3v2Wd4v872FY9",
  "key5": "fWUN1r3TC28ktruoa5VNJ1zwVfHrwzkAZEUS2Jb7kN6dmzxL6T6ei7h3fQJ19xgey5A8tUgt7DjHuBXk2gEYaHN",
  "key6": "5HzoWtyttbE9RGGtDiu7YFN7eum8VUANhZL6buhPfx2QW7gFD9BrDR1Sg4WzUDacNhNXSrWyfRkdwrzfnXX7rjrf",
  "key7": "4xPnSLHkGiNwvRPVNi8JAns35BKmiXjuU835vLcGdGKCTsq29wsSxHub97gijBV93Wey3mJXLQjWktG59EC2P72e",
  "key8": "oQWwYKK9wYQhmamwAtDmhuf9SESCYn5tXLV6cBYKd81VZeEJzjVSXdJE7jR8ADGDEeHm3f3A5MPBDbjh9j4ZMVs",
  "key9": "2sptrGh1nXJcsWN6g4bTT1zAbH6ZXHP6bnvnkczGmQV9dKRLe3v42HYKXX4ox2hXmpQbHMCjQEPJ1Yk3vKw7hiQN",
  "key10": "4Eudsr2Gz6mNHSusip8MvMafcwPHaPgYfh9noC1fHhkYr8ToiKsQgzLmVhsgTVkw64g22sdwkFV241GoJvfNjXjj",
  "key11": "5hyGwGx2cFAs3LE7XrtjqfFc4wN9Wh5K77q6jbogtr3dXSDP6DEkjjzh9yRR5wxDdNqWjpgxeaCyhKwFAx6LwcJW",
  "key12": "3EkjacV4DxdQhPMgrKJ8jm5ow2AXiftPJfx1fo5FR7ifwkfpdAL9eKyx3ECHSEscpJ4v3oHcEGG9Dw5sm3tpRygf",
  "key13": "jn1Loif1bc5JqPKzF1NMhsRFrPDCTdYrc4mujrrXs9JaGussQy6yjn6PxxfZ4sGHmytH9RnosYxHQcaHYqp4dog",
  "key14": "5WzVDMGKqw4wAtPdxzM7cUSyPfpCLFSwJB7dHa7dzUpJq7aZcuZB6acoEEaPCvEpUqYasqCzZ6vkNqwULFd4gS1",
  "key15": "5sHAueWHRm9tQpmdJmbCnLXebCSXGF733pKq8yrba4BLY8FE8qwv46j6PnPeGBXWUiGHNqCHrvNWXo51fvZHSPP6",
  "key16": "398YyEjwudRaiv9d7cv8hgvEPWCJaink7X5EGyDa5bQXaGeux4PtnXo5r43uh1NQkBMgtDhSSUuYV1X9C9bWeCi7",
  "key17": "27hXce4TrweYADa73YyfeDLSTctsgbuyHesYf2kNzsTc8irAd9pPpEQuRrA1uTPSUPJMksXDSVsRZVXftUmDooq8",
  "key18": "52MGvwqFrPYjCxdmgWUAxrNqD4TFLfj9mTLwEMgPdRu5QtE73rDxyDh19bwu27Zp5q9tpPTqk4b312PbvkG7fgJ",
  "key19": "5exUyXkEJFX2bjKkCGFioLqkwVwa7tZ3moFoBvyyDQiz1geJGNXUyYNDHtcVEhC4C5pzrVcpmwAohWWaaVNUbjY5",
  "key20": "5PnmEDdvsutVNh4pkmioNtdeNoZDKtD5N3jLDgtros1ZbMqogU6bnH4vPta1JgSQSbCfM579d1rjsJPNG66SecMB",
  "key21": "43Dh9VB9MzMMBazkWHhmtujtNgadPxs9AyNs8MDBuixYVYEfiRmM8zeS5KaDA5sLfQrqKeFU1Fdua5zw21cWtnag",
  "key22": "5Cw7fNtBLViVsxnGtdEGTZY9j4UFFngpUPDae15cMWgxoEeDswXyPKSE4ZVKDEFD9H3EDHQdfpVccHFQipYfFAqP",
  "key23": "5HUtyLW2gdgcARR3R7izKPwZmYcgqg14cm7wKswiQ9K2HKnvGrbcDxxr9yN1HqG3iPbDJ6WsLjgEynmeQ8aEBFXr",
  "key24": "65f6Q9ac19189SJwyiagf2SwuDBem7gAYUcfPv45s3yJfvG7zCJmwd9hdnfeL1A4W4B7C1EgPF4NcZZcQresqv3u",
  "key25": "2nFbb9eR5kKMQqKzp5QzJXHEzFdtccsoohQMxLakZGGeEfmwmCCtZPtq4vg93SqxART1iWrJJhRB5QmeY2mtginV",
  "key26": "5Y3Tc5Yvyuze6Fxs5kCjy917crKZPPeXS476Rh2uqjr9fXxJFp51VteoYbBSHae6tSn1mR542MMq2aLjUTgmdEaX",
  "key27": "2GWVVBcGBccFhi4eEKuWcGb87QPKB4LbdVWfaAEnLJnFm8Kv7MU9hoCFAutU47q6MyejrxY7KXnSS8ni6DT8zmGo"
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
