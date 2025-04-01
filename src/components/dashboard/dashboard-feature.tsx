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
    "3GgNPNTaAWGhtCBQADMKP7TKiy64cAAhap81GqjUTGcd6rGVNdSSrKuKvc1MJh3e93ZtWMnJHEpBsBzny1cf9RKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaYY6g2g4DaCCz999EVgRBGpYJDZ9ynqBEPZXWN72WwTZNuWimTa5eRx1RkbzCknChAKiwBPRTyMpTZYVGQboii",
  "key1": "2cKVW6am2phMHUL3AC8sqZ2WxzZVTaY3VmdC5zRMkPpzVQDeV93fVMWTLfHLWA5xUqHA7C4xj9BdzpBmtuZXdDbL",
  "key2": "4izqJsDszW4jCpXCfoyDqN8Wz3ua5rnYHKTWpY7jaFNhAMaegXrpvrXVittnW6kN15mTGZnbneNReSirurjFv4uD",
  "key3": "BFg6Paa5uio4hgYjjaQL3y5r9gvPHt8r3oqawvNoYFLGvxwr1trfo3VDU7HwBV3NL5ZxBje27pLR4zBz9soECt7",
  "key4": "5Q2QQyWe4nygRXhio84qYSyeJULR4j9V2GQgKq9atT42wSCymHCpcVKSS6TXNAUKm1YekLyHVVECkdAc8377CpHV",
  "key5": "2pNoeu8ZfiHCauetxnNYGU4AXq5k2n6PDjfo2eVxzgaSHQ1e3zwhVVzqHyAqL4aszPw2JcoMrXCnrPn3mr8N5WRY",
  "key6": "4yTi69DepzgWXxYCoEss4pVC1Y2nEtgom4e1Zkbo2ooo6enyBbyaPbwVZbPwpuAURPVZHaTnHD52cwUSSMu91JJJ",
  "key7": "22P1Ntpm97KqtQHw8b8SZPAdGNcLdEKnoKuqY5dqBQx8N4enRXmKagPicv2nmyC3s5dnFUuCy8r5y3TMPA5v4JYq",
  "key8": "4CkGUMZkFPSFCmFjHsJKMcAvM4GnneMfi2gPyLnV8z9zP1vdKajCw1gLKgzgNU4kQgm8ybC5dfj8s85EqyMzYsCS",
  "key9": "3EdhdrZCxyPXxeJe6m89VactN1Vqf2bEYzzAjigonD9FxnDmsgpz7yK4SUMK4sK1pm1QdQRgC9EyUXWoBrQnSZ4M",
  "key10": "4hr2RZ1aTQXJjZ13LUBtAq7vk3S1fZ9FXKtsBqaP3ZPGMNnU7a38nUeUrr4wS8xJtEkZLYoPQj68PYUvAY7TPH8z",
  "key11": "hhhDcysM7AeHPhdG6G3t1nAHQtqmJig7pPR8FEbtAtHCQt1icUaMHZaRKjUhKX1E4FgCFbwff2pQCzCXXA3xwMT",
  "key12": "3QkumWkC5dRU52VMCvx5gRRHcN5HU1wN2MUuiGCA8VSKdgeK3a5SsFqVhBpkHgibPZKiqQrDa7oioPMHPT3Wzzio",
  "key13": "32WREbCw57RWLFAidD4H1Z2ZyQZZeeuGwXwmr8TT8sKMRcctfKgn1DQvup5FXWXCp1SHQKDn4S8uxkU9fAyZ41m3",
  "key14": "2MQgKMLJXbb4Q9bVUiNHk6GfVB5YtcGTqNiXXoGCaut1DC7DfcLdBHzk5428ve5UQe7xEFKL94Up2HiWKzc3xk1b",
  "key15": "2TyDfwDAW1LZ5rDhizB3fzGS1CUCiPET43PG4raqrW3jCWzx1yhv64rKp93QjyBGQ4yvqjGVx9vwW9zT2116aHV2",
  "key16": "5sr6qhCHxU5QrGTPoFKcwHtD6yH5toXk6ymum2eyS8W9ZW59x2bitR6yZ4BCDqTZoy52waZent17SMSVCEEznbpT",
  "key17": "f4HGvLdoUqn1Foy7MDJTUA6DNhnpsz5FEarL3e4GFT1pYTcXgzsVdSkqZmkJ8tT6o3Axj6JePqz5pUwkRzmck59",
  "key18": "5VVjyyih4UsC61noE1bMkt3dDdWrpZdbt7UkUC2zjusG5TimuGz8FARTfWwGFXQ5oKGp4zuBR8QeDWxZn5B6YqGW",
  "key19": "52tJmLwJvxqXVvvhaqV5Y6R281umdRfFRaotvQybjvXcqrDEc4m9MfRMERa8CcnRcAV7xS1ayvzcUxaCq2jVwBe2",
  "key20": "5SDTe1eoocZmitk629vzuXScq6p3RWTajMgY9Sfr37DsSorQMeQs7p7RGrGxtep3y6TmCbYwpQijhxAbJ9gn7dT9",
  "key21": "3WGceeCxSFb7ivE7g4b2NbAvMEcZBeoPRvqcyn7CsMBspWpzFHjVznV3cPQ8H4edvgmYtZmuuKteJb1bvfP1gkX9",
  "key22": "BLrtC5g93QBSttaQZ83G2TuPcsSYvDkhy4p1XZ1tJB5wTG6XZsq4VNd8h82F6EU1hPAYydDvPNHaizAuCNEh28X",
  "key23": "2FRioBhpCA1RgsMXrXoMHYF5ETkvdJ9FirVkH5xNUEow12Dod7VoVZU1xd3ta3eDdE1qRH94qttr8sDY1MJrNrG3",
  "key24": "iUu68CATiYGSu2hLi5vKadaCgQ5u1WxzY2ZnjU7ZF2R9yzUiLHFvYki8hk7LkxYcridWR4MCj4gjLnFkRbMXyMH",
  "key25": "TQzyvf3QFU3hWRjRvBvxhJ8k8i3nNa7G69L8xLm6L1nfAxCab8oVePRkPHdPYx89o22qEcztwNUbTUZJcxzSufN",
  "key26": "2SAuF6jkUK2LsVrUu1bLMtcJT6Q7An3EzZDy5SDbMGu8FZt3cPjibEfwpfvtqgP5udnAj3aZTrCzSJTPtcqsHaQc",
  "key27": "2jqAgU3zqt1CjBe9GwxbSectuwcX763DP8YpBfyURwHJJvkt5jXwJSCigg1VjD2z9ZEJ5dTe8kTgpWBKWhgQaTNa",
  "key28": "5b8NaKUxBNhfayYAaRUdhDExxSj2kVxrcvd8dPBcJTDvEPvBcmnjBrgXBSZvzHJEAZnTb9e6T8jPHGfns8brc5ke",
  "key29": "3TyuG2xHFK4kqBhABMkD5KEcNSqhvYP7fmVYkSw9CKkMi4qF1hvd4DK3FB3rDp1TzmUAcjJHhpH7HSXSSU8L6nrC",
  "key30": "JsWDdvVkQsteUCzxtcpsD5RLoTaxpuA5zQ48tEj2s3pwg2a3JZSuUULMJ7UNPnSeSBWWRfXwceeE6HDSnPy6zW6",
  "key31": "35muqSzeeqShMbJqvb7p84wztDKanhftkcjgLwyVuzCHdpjeZzLhRPkxEdHqfANnBEHaGmyMGCnJ3Vyhk6rj9D47"
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
