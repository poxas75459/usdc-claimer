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
    "4uxoGcSwdTwRNtsCbxuQrGbBLzLz4R25HqbupXrvV6cjwPSUu8VsTJSCQpKnLWpLM996d7qbhnqBFSYKF77MP6fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYHdCF37Av21qoJPs9kGVSLySfMQznuP5AJjQxmWNNsGjrVLsdKCs1cbUP22ivVCurs43c3g7qXDMd7kKSDNamF",
  "key1": "2Dd2gsgubcKuU2jg9MgDGmVYANXK6HtG4SVq4K9LNDjj3MCAVdSNRvv9PLtZSrQT59dqtTDZmCZrDyXvQ9JriZtb",
  "key2": "5xZo5ijzKhgrw7ijT5gKgbDsKUKaXQmagZEXfeSTCXbB7WDLDUZFXNDNaDtD7yeDFSVibdCtYhBrWDFAYDCVN4kk",
  "key3": "4VKKe15xNRK6iwzjQXvvgg8cx5WhtD8pp1DJL53PjQe8Nrc7gqRLD7NCMad4geYaniY1tfbN2TQKA34N1DmmvERJ",
  "key4": "4pb6UH9pRyCCmBf4uxsaE4pESbiCCquayoKPuvBzpXcnqrpi1YAYkAsES8v6gtSJdZhiEward8WWd76r3nt1qyME",
  "key5": "dfDXXrvxQrTU8X9yivDhfEVYyJjcwHAMCkSMpJAK4wzZKqLYkga11nGjQvyaBDyiMFCBhj9cfY1L4TZ84mLRjav",
  "key6": "2V6V8NaSuzpF95YHUANs6SXCSH2ZZ6rxe8u45mU6NGHca5RXabPyHX3xitJsbUHCVsVKkHUYMBrfLc1LdHDrZCRi",
  "key7": "5EFhKHQoY9ybAF5PFXcYyxK7RhhJypfrwCaomMp6SkGrkTT1Twt1g8iAkahdmUPtyM5pdziKwDqeEfaLDzCHGKoX",
  "key8": "3eUBUui8xBuSxfa143ecHYBPYNjaxKFfB8a7Nn9CtuDbxrbKbs5eaGkeYmX54JBv23FRFvaxrLN8KDnkFTTcFh9i",
  "key9": "WvCypZA5bdUfQYj63biWCwgGM9J4qA6AdXkBYKNEJ33xc4dKjYfARjGRwzLAem8qSBsrY3VCmKSoPA3ADiPAwKF",
  "key10": "ooQp6K2HQMsSVAVhUZCrRYMpeDxrq7cAFcQW6GkfYoBFjpbNC3gMV4oTJiNTQHGoTRrN7925qgoDaVvM1tB4kLo",
  "key11": "3bypb28d3QZmKnN1HtWq1mp5Hi2XjGPSXQQsygBdr3fYPUx5ALQBiHLcJxEKmwy7jmK4852PcWmTBoKM9QwdP4hk",
  "key12": "5VRiu9pEXz2YqdzpNdF1AfH5LveViniD8VSZdMMuqPJVqBBgoxhA4N1vaUzvdYCjXzbPiQNh6k8bQ5ayGg5TzxUh",
  "key13": "RVwpt8hUEgWY3oZFg3uRC4NdWY9AXVzAekXyDZjuvDRWHegpcZdXuqA8PnbepitmNvBzceGfRRaqV1trZzn1LFJ",
  "key14": "5BJz4RknLRoeHAt9RJQb8SFfnr3yPuzQfMcCZHAfoupaBmxUw3CFPkskTrjKGdNKAZb1yv53QpfxZ6e6HWjMsyn7",
  "key15": "5aPzYKxPzG5PaRj1RCwmre4aiv1wnSUo93w8wQGftDhygExYvYcGv4NHc7DhsQ1Uf5jhjGXdt68GvbWQKPosRPKx",
  "key16": "2o1Dy4Fhhkon3PaqVWRUvXv8V8NEFrVJpqJ7RYg5YyamuNxJbmwgcPpuxJRXT8aATfmCNmzFtoTm9Eii1aoiD63J",
  "key17": "3xBRyV2uAoVNDftrRYejLEwrsc8nJ9LsscTKdoSURAVeckusRRk4R5NwiYnHcM3bcVs77AuYJ9sX4pwHxvivrf1i",
  "key18": "4bnJXWWsHuy7NyAZc9i4woYhqExPKwjDRvAGaFmQafCR5EHzyBcosv3aW4WqDyqWhHCLCyjm8vwoV758eJw19afT",
  "key19": "2ucMC46Hb4SnZETBCohdTrZF267nqh1XXwyy64y3j9ZPns6qRsiAPVkVCuXutPJBBGagGbLJhJMs3joiBjWBhUvW",
  "key20": "2DeCQWMCbsTFv9bpNvs9Cdqj24KQ3PjjDA6Rxam9QtDCY1xw2DzZLNK7JnKdYVM2HcoJSqZAxu86mWfX2J7gGLed",
  "key21": "4uTCg3yWoSF9PHEypwWzJW7THsP2jmbMy1nUX3YwgzXsKLiahVWa5hvq1pVviCAjrVHwBcyBcaTbpPLxi3CCziKS",
  "key22": "4kxoXhcXoGQDicNvZNRBYczUS3FmcYynEz7DGYvcLGjtgrUWErAPn7pVsQcd2CW8GaNoaYpUZuavmAfdw2rzK9wv",
  "key23": "518YQHvXn8Vt8gpCvDzrZKnpEJSihG6UXgRfzsTeesCqd8uLdpNS6hy3WCa2JkmwzcecCLd4mDZSQUMLE28dpX1K",
  "key24": "63zGsvEYAYs2rSqSugFG1x6ipDWK7dCUNDkZwotcwQFBHXtdYPYkugvuYm4WXoG9844kVBDqZ4bNX4k6GpGi9e85",
  "key25": "5xsuNYRyLFxBtPaAQYkrW83YsnxaVppHc7YqudfMLmG8R6k9uBoYeEd1JoiEFKkxXZQernr3QLFzAT3hY5kXPSMv",
  "key26": "2efSdvjKuU1Sy4KqtYyGUJzdDHUMBffMwqaNBzu3PijJf1GXbP8sGbAXPYzkuKxDUaegdrurf4AX1v3avkjvB3Ch"
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
