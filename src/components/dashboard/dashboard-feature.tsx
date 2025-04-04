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
    "3E7yjAqnmEPQfqzNzCqzV8ddRFgGbxNj85gjpKrmxZ3TaQift1GrkCokLBB8cKvNQnaVToUm6UM3aZg1Mr4z7jht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jW3554ceDoW6uFfAr2yJFLMxjiK1TfLpBdZuX5GHgWWuhjiR2vJRyrBU7SFyrTDosUKG21DUtSTZgFCwk7SMDDg",
  "key1": "2qa5ScYJHAyzyVC1VDwpaFcVcNFTGANioadNWQ1864Fr5axjngnuJCJJhS5P2TZuVK4d8TBjxmwj9PMaBLzT1Vgs",
  "key2": "Sn2qo6uMyA19X2bZp4ZoR9aCZoMjpCQnYM8z4jyRgVyxWrKAdeF3jS58UVN6D7cJvhKENdLW1zDK14qzBYsUkJ9",
  "key3": "3ZqAzMCEqU2eREibT6vJpzyZL4rQSwDpZ783fvBEM5N8kt5ivnp1vHjovFgGpbiqMKp8ZW31WncVkuVoEjRVWZtx",
  "key4": "3zdwDR2f4ySkWtQ5QmtkZfuhyasnAzLP4DPGPC48vX3neaAhSDK1GN8kG66Hy4URjqeZed8xB2Dkd8ojwsfneXzX",
  "key5": "32tMuduujTcBMEGR52co2jcCuyYV2qEZjPrjUEFTndQat3thLiHeQkfoneBPdT8NrRXFoJb13Ab3H6CuqhWGqK2g",
  "key6": "4AcSYYY6qtumAwXh47EkHDQD3YA6AmrhnKLpsdRkmhnfxxWfmF2St3kgaJeaTYUpAfWhpPQUrVtCsYLzvKHcEwjE",
  "key7": "4ebiuu1TV5xgL7JSegNCWNEzn34esSmfuKmwUYT5WKcebHneC3iSAy1S7RLREZR1eChKhWy7GGcrNDCgSzZMLXYm",
  "key8": "5UnCrn7jhtCLwQLx4RCNdUHCQoqZdLghhcXFreawwxUqNJQEJNrD5G1sFLUASLdhbF18hRF4Kyat6FmbEBXXgrJx",
  "key9": "SdsEasyEtZckzKRrC1yCGPFneKeZmbBxF9W6qhK5SviJYFPGR99bcWYhoGnLeyAruS4Ktjs6scTr7zbzevnta87",
  "key10": "3e1ksR18dVd6bm1qCM9PsZt4ZcqWXxGn9urNNmyeeoW5tAsJJVYeHi4WDCXNNPJmWmfNtBwbb6XEdhgY85BgmrWr",
  "key11": "4kcLaGWkqWhyrCRsGj6r7dZEH4cZSANKvyKWazssvBsmhDxYMCxKJqbwv4wwkqGSoMk36kGQqn7w51xcPA95mtsq",
  "key12": "28GksgsrXSRjMWvnnpeftSyGLnTMMsMf9L1DcXRRqaS4vKuJ88PJxnn9NypXAcNgEgaJyHNnFbKjm2sSxmLGNK2r",
  "key13": "4WV3gSjHdTXm2fh8KjF9kwxLCRLhK9hh4Lemjq3aUCT9wCtqSJzN7bvrnbAb1KwDRdUmuukY5ZfmkPZ8zj7w2Adm",
  "key14": "277QJTyRZ6XDz5m7JuwF6nWdkMZghPXXjwDupGRQP5wn8DmawisWcAa1rSTyedmqD797M1CwVynXKk2ogMFQiXDV",
  "key15": "yKVBcUjT11txgZA8hQXti7YG7q2oY5zouAPGCB2ucG1GrtSWTrtZstvnLr7SenL5oPzt3embN9M4HsgUKDmDBWD",
  "key16": "5ff9rtFPr1Cp27GGK2doB2gDdxHRBPs2c9cSzBpKf1rdd5YQnTxJfKy49rMFFahujT6daJwHanTXCqB6oFP9oQuM",
  "key17": "382eTXU5wrsnkpuKEL7fPDSfizk7G1kXWSYv21Y7kFpfE1sGrCPdrzxVqqKZp4KeG8z5UEaYcUgPe5E8NUXKE1hX",
  "key18": "4LhYCaqzrbP14Bmq8DNBqXdYtPDhE9dsYYk1Zfvc2WjL1UEcDaJe4rMwGLghHt7WX9VFijsM5AnyRBb9andtjLYf",
  "key19": "61GFvvon4DEJuKN1Y8AdccZxTqX7vrW749172KjfvLz2KpbUFqhq4opxSoCfbeq4YiymwxdSKUsJqfVYDpoCq4Vi",
  "key20": "5K9N1oZ2L9B9NGmsYM4cgQNXmsBM7JQfivZStLQJLiCizNWg5TKDLo5sSksLAn3fYNuJ5SxX5pwMCkeXCFaPCyXz",
  "key21": "yTGH6GEstyXCLpBXLpAr7ZQqTC6gXGvzUF4uX69scXanNX6iNhLH4vG2izi1tExaBSmDHHPwcTGR2tn7kxcgBCr",
  "key22": "2FeY9G29pt8FLiorPXiURRmF1mhmt8qF54fzUPpuvBuDGgo8mMkBmA7H1gwMKwbmvzreJAoQ2TFDFWKLetiXVqXx",
  "key23": "4SxGDK8qTs42x3Yo4Ntn9pYuJaC7UgDNApoVhjTJQpYYLv3hV7qDKJnAAZc3bdg93SgKGN5DEesNN5mNEdXW3cAJ",
  "key24": "28zWvYfSANEnhqyqVAw7AAVr9VTWrJ9AeA49QUhpzW1tegjVLmCNwC4SBesGJp5wTPhedAmwGFt8MZ6N6EbXpj9j",
  "key25": "22MD7LqyaPUnG18jgipWjq2UzaLf2Cv38jn5m6pXkfdEZZ3w6fqPHFjdc7Lb7REX2BxTX7RuM5k33qGthHQgbvqx",
  "key26": "rMLMzToesYAqj49Fe4kw6fK5veFyLgA5V5u5gqnyet8zKwoMq4MvqUyiDUcEGZjZoSXbVvfZhQXDiN2tNtTdqdJ",
  "key27": "KGPmKN9kEfgnAvCpqy7tsbdQVaJSou843Z1VzdBXTjJGSGCUzAye1hnUsGuGKBPcFBCHtgdUcEVz8TQt6EZNNPi",
  "key28": "2ZszeY2dosP7FYePUqWNqHhu5x2pxJDEfFP4oLcnZuL4WzzhFUV7t2JEzzkbQuNgVZfpwmcQcNPwNXBMJguin51f",
  "key29": "2jQygXDEmmjntXHxxtaSUzGsjhATEL9SMR6T9HLEbVU86e3CN1ZGCyFiP2xkBrMcyFxc1rRziXBWLyJT8T1pwu9Q",
  "key30": "45pb7MZ2sQ9Pf9EJy6ae7x9CCn9BTG7b421VnvD7hQAm19c4RZGnGCLZUjZvRwjCuQkrXBdjnbob2KxLK3Kxk9MU",
  "key31": "4AMpJ8kXTXhYcjw5xQuiMqFACw5javUNYLWsvwpb3gKDGYba7bcZHkoyqbgL3MAekGWtY35izopAymFMMJC4wufZ"
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
