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
    "4Yw2u7BLCV6NcYyHNMcGrUnRyemAfKdG1aRse1JqYY1ezj7eb13vuFXWGjt4cY3YqhygN2iDEozDcq9turG9L9AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brM8fDdxH8rm7dSvPhGMx7Fv2K92TxXMeZNkdEsQYAMxg5JuCjeffZuNwBj6tgQzUMBvb3KjF4TaqiZM1YxiJAh",
  "key1": "2Cv4B5345d6R3fzbE2kgyTuu6eSpCHYRfxZELCQZobZmT9SpBm8HENAJTn9ELbu7CydSUufPVnAqjjmR7jb1w3xh",
  "key2": "2DK1Qr7Dkwdh29A4cz1P2qm1E6BtpXiULiuwPQY1w5kGbhaCJ5pXdKzV19wDxV8FUh5gHyVaxBstqYzna193mbsy",
  "key3": "BFyGy3mrrx4VEYMNwyHy5wXWmAYzAXj77nKuicuPZ39c5gHkDpzgK6ZRsDWg5VbJGQmY1YvtcxLnxHC9PydjHza",
  "key4": "594NREzPn94EcGDgmwbfrdUsEoxUjwNPSvdJJoYUEYPuBg5nARLqp43tqnX3UDJ4z7GbJXunEv3KuXAB43P2x1Js",
  "key5": "RdRSiX4x9hsysXARzFZr5jqGQqd1tXQMigXesJwBV5LKUDCtHaSme6UbR3DgyzYwfk95X2zF2PGktWMkcRxD61x",
  "key6": "3XYusi2AK3nVZZe7Pdj9pU7NRq784BCb4bTweMGtwyk6ffsAHy1Ck54FNEBHf3HjCu2GdukAf13rgmTqCpkNzNQ1",
  "key7": "2wexGLpEij2hphxHY4rrSbUc2ZY613XbA44VuAh8ufeN7eFWLkJJsK82NWFiKt1SWY3q6aAYwWDyvxDfWVaHsGXk",
  "key8": "2kQtGzQEs4zmN9DVhda4aQReumMsm3EMYKgLz1wkunoF2u9GTi4ZVZmsChjf58mE4LT96G9mJ4SaSK46FgYFkiPN",
  "key9": "4FBRRm3dtsKZvXeBXR4iJELNSRXdjMaYgjVz9bVrWiAZqxegjjfVv4JoN79Xki7X5pbBcY2EgVgzJCn6c6bmeakN",
  "key10": "2XoXz2FkQTqncWyTB38XCUSTgPH1AC5KuSfC81Kuyvjc6kXYDyBtjS5PNx4PJg6r9Cj1GVDj3iFo6jAWYwajejTz",
  "key11": "3kQP8mijntPXm3cCtxs9KM8ygm3rwruFEaEGwceD1587W12vPtaPfQ7noBJnybbyKExyGdTL4hzYBDMWNDp35ut8",
  "key12": "5yM2m4Zfe73rEUoDRdsvHuAx3TPebXQsPpwmueb3n5ymBaERfkAtXPGoKeHLS7t9MRhLTqsnGtmCqWMmz234qFLH",
  "key13": "4iwBmN3zkEFrrvJhD5pC9j5fknPjeZx8wY5238H2ctNYwpTzx6eVNR2VgiATbkr2i56SLAThgACEc5K4DCFdPKmW",
  "key14": "3gEdkm4pkaYHXcW5XqyThw5ANDk698rwk9dL7Tp7hdade3dSnNWoVubwYc7XwhNjv3aXz5VUz2xvLBkLRq874s76",
  "key15": "4KTKedx36hZd7FPosNrzqBw6vp67NMjiXxtSkCX67drWNW7hy17D25wWRVawdEBkS1F3SPLNAdHDiqQu9EgJDZPH",
  "key16": "Qxke8W9v4PU6aeB3miU7HbXvJExfBp7XQzLqNydzwftd7ZNA5tV1cpDR1U1TQjhPyxMZ6H6YXY6Tm7qFoTBmSAp",
  "key17": "5WutgJpqbiaafULtx8bfuXMGFE9qSdWKWqn1QkUbY4ivUggo5TBmopfp4QmsK3scA5HpuEodGcinh1gZVrBsMy1X",
  "key18": "62G7uioErjzRHBmQ1N4RQYHChYV1HrC4MKQaBH3jHtJPAC1xSZ5Y8W7p58pbVXhhBRz5HVKXb6EqWXJbShyEQqMa",
  "key19": "47yfAJeg8vYWiYXzh3XWxidNBcnSZnprVketYymt6A6QRouesUce7RRdVoXnL5zjeCVPYXYA5tVEqjqjHqWw2mhP",
  "key20": "AtjzNg1tiqtUc2YxjEMb9D1CstMz1HemEbh6qQtncopaitJR2iqdxz6oPkqsK4xQ8YE3v1Lmm7znKysn4Yu4HVu",
  "key21": "3mD7Bk7Av2y45aJLSoT7jghNSsXRCaiLU3MhkDXzG1Y1ZsfqoKAiAM9qnpSqGeamPMf7h9qcdJDeGqjrD9J9Nj9u",
  "key22": "2unwfMMpLLzWz7iEAtVWWz3dTXBNisJaKVMJYQEj46GWULspufkugntsRj7ccwRdCVs9cTw6XiQL2NN7SprGQ6od",
  "key23": "2T56x9MdgXjEn79pFzqKQqm9Vaiaw4gReWxaRfbA7BDAKPGSjBAWQLVfpwP8uMHcp5FKu2BpHeAzU5V3Nmj4KuAq",
  "key24": "35nBGBarZiB1Jw4gu6WZ84592a5fJrHYyd6YoCBpF7e5EbApF2GdkGPeCKs5qkF5mCx4oP4eZWFXLyzfsYgyGM1W"
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
