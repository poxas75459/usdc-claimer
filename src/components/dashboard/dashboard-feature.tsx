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
    "4keYwcTv5D1Gn7Nghn55GK8PoXy9E7EdWx7VvfWKuU3ahFu77aNPmLoreZs4uLdD1qGoXVjuzFqWveExsZPRjhih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPxNj6m8wxDrHXpfkZsD38Y97E6bNtrAjSMdbGhJe8Qd39zYfH7faYhErG4ht3eUv8SSYeizByo4uxwrsVrD5Tc",
  "key1": "2LUpx8prg3kfrM2tCzXccXYPPpP5og7veDC5kUnKz7Fgg3E8NcwZ2yiFzXoQzx1S8bS6V4Gw6vreHvJcph2KMo7d",
  "key2": "2zA6AJVZrCZpz8Q9nrLKw2AwFz5J6mgNSfSJ3MgsqCCuPrwnCkSuaUEqKAk2gnhW5gzoY5v8zksxReYboYgxfdrh",
  "key3": "3ARoi2KbQ2bcgGuLezrwDuwJnG83tksDmmHjVnbvPswkZWAHHYc8s9QMfDdMAEh9B1ztHzj6Yac8ECWQmo5oJMr2",
  "key4": "2nwUzy7zAKbKvsbB4qdFhGvDDqKbxewhHy8aHdoCJYLKWr5cMpoDm6xzwURhmjDWAo9jkKJyjJKQi7WCJRobPSN1",
  "key5": "dAH7exZxK82N9YdK6eLS7S4zUBUiA91SZEegKDMBfJNko5FLcyAajnxhvENLtuiwebudFQTvUQtkipLxWKthCrV",
  "key6": "5PWPS4vNefaqfEnko2kQqV7NJJQSnapcywhRPQsGZ4n2q3NfRqtjTf1fhBis9VZP7wLLrbwdsqnvsN8L78eik7ur",
  "key7": "3EV8y4xmiR2NYbf7KnJ6Wxpp9YhD8MuNaHkMMgTFvK4xRZ9KfmvvTPqs8ej1x25Xa49CLECgMfbxVcBA5UbxbUBr",
  "key8": "LLtBtMAaXwMAdcU6PZ3FPYSdrTMgKgkYuVRFdBe6nEidcPbN8aCvaKBRQP6kUvLqNoGwPtHySMoYMbLF96v2j4k",
  "key9": "4jARSK4a4sLyKExcFwptPoWmfbfWFsmUV52XDiZK5MB94rnoQEfa8DwpyMpj3H5JkdweBcCESUmhVUh8PEP4zetR",
  "key10": "2z4Ng99YBPJEZ2u7F3nnkPcRdL8oHFsU1PWG2FSY7FmMzNw3YBEPsE7Hma1JcSm7F3wnGDc82R1xb3XFUAHzB8Zg",
  "key11": "5CwLL6NxtSCsDFjtebwpPRXgYNKf7EbjbCWvKbv7kmT3CnFs4zKXi6abfZykTjqnShWVq2JvLBbkS8rMVSDAhUh1",
  "key12": "3SYwddVbzirCYZUE5t8sRxdfjLy4dLNmMgB1XQNyBM9MGhSynVvxFKSeUZdRHeqUadNdd1tGzBqgJk8wThJUNT94",
  "key13": "qJr7epWvNWHw822TkCwb5AeXRQUTq5YqYmxVYV9dDHsBQ7nEUSR3aoMMr7J89SgH4tG8zcFd57uUSscyZf48Wdt",
  "key14": "4zWGFdnb9vyttaCav1vQyeEkE62MRqVcVunQo4Aik5Kgvs4dYqs2v3ei9DLAJrGA67WJoEj1piWwTCpLCWQkcvTo",
  "key15": "2FAUZ6YTSqM5TMezcuv22deWBgfnErWbXf692VTw1ULCAMwPGYpxFvWcgQ4x5gUrS94rigHLZvjKJTtvDVCk8mG6",
  "key16": "2ZBY3f3Jz2wtv7DiwzShRGweZu1rz7VhyzTwJXmT6XK4RRn8KcMu9vYhpA6QbtcWWWrugVG69tUCQvJMd48sEUKp",
  "key17": "4dXFvqzTbBCameuBoKC2WNUALiYZJ61Gohh5DTvjqj1jkrMupXYgjAytU828B2yA6rd5Paysg6zUWoYjzinsgebE",
  "key18": "5Sh816UbNStmaP2ZFhjZ7oSsf2LStfuBdgC2oLzUmkjsLKedB1jPUroVxnvFfLCy1fFEvsACUNoBgp3xb8vm2YeW",
  "key19": "266JYxoVDyqKoAkrRAGz8t1eK2ismXgfg9Ub8QGprGeUZKFqFiZoHcxwu4ZT4Dp7QWfxEBjyxHeLehkESgNnq2nr",
  "key20": "5KKtsrPdRAYPv2gZMqtMYfDTzPBzHHEaGDSchCsB7qVpGoSSeUFPi8sSBBSMehwDxUsAcmPQFwapZKdXFGcB8pZ",
  "key21": "Y1vr5dWDghfjZov7JZEEtvahg6QEH5EUBLzZv3AbKyHAo7GiusXFq4RJSFmxRSPpJLQvKkLoH8uifME9SgHmjRg",
  "key22": "2D3QiL7vHHrE24aWEoNuHe5XrKu889u6zrq1CsMYLhxaYRJTgP4NYHU6pBJGrmvmTsxE3P2MTDUXZwkMpRiLmQdJ",
  "key23": "ZuLBgrsEtx1bpNPN394qWzTQUUVTU8XGiBK6GTnSUnWgoZFnLLVgxd46x7YUBoFSMjbwe3McyMniXUPKBESNQh6",
  "key24": "28LNfteAYXFPZLqYs3eUmGnqZoXHtYoN4BJTmAoFioGRKdXZVHtj2XGhdwxAx1nnFxsCszPN8GDcURRTzqR5bgQL",
  "key25": "a1yBcQ8ZvM7VKssjyrA9zP91vUY66hD6mJvpQRZRnt2S9ppw3ZqjbPGD7RGtxJA5oUwsMbPpWdYB7vEx4Bq6sAy",
  "key26": "2v6BuYTcnaGbL3AQVTYFunbSDL9ZTzextTHU5XSVCJzYRqg9ENN3QjugJLB7CGwyvDxujmBaei48NR6pZGamXXdt"
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
