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
    "3S6N3USqSjTd6qDrfkvcTjgrtntmGVJyrV52uVCTbhiEyTgWYjGU6SM24hyZdFG2JxPGoGtDeiNBtFXBPUKHtdDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqmpBRXtB4sNY4SPPiwUC2jCvvECgbir9CqGFa4BWBtobBms9Zzfao8P2CNcHabQKnvMSwUvfohqwkZ2gQfipir",
  "key1": "5YLa6APD78XgfVgPHa8GAdkBFLD89osRUvG8ndau3NVYb1kiaxejp93pCbbEyA3gd8gNpbuPro48sj7TXh35K73T",
  "key2": "9FKMBWnbkVkQLYYKMDqHHJZJQutY2ndczJMkfrr5cQCDRLePA3gcD5p7K9dft7qAQds46TYiA9VM7o8N4xCgTg2",
  "key3": "LkSqvkjMDoeQDpvcDGDYWUNfzYJ2ZMt8cs6cSwGQuzpcoVAD4dcPjvuphK9GY4z12quLt34t65yYV7wVD3ouAyZ",
  "key4": "3uW742d5bxq9MBTtq5v37k8jXBkWwR3cjyTuL6YRXNDHP9TsbdVkuHchhaqwvody3ABMnSmVNR3rQEM4KgyXZEtq",
  "key5": "5bmyoe1jLDCwruXokiytqnqAtqrdip8JwazRBDjVjJfaCuioSfijrTmsEvVHfBTceNLLSijCPCSq4SrUSFSJvtXG",
  "key6": "2774Lq4EoyUAaqxEEPKp6vDy8JPryjZdNNyDdbJDtACzqKT8eNZyBnBSk78GDoqWa35uUaatD9UJY6jDBLXoeH8j",
  "key7": "4xwViJPttsQJDMNJgFkFqEj5tnEYjEgFoC7qdEqFTkLV2Bg3ThEbJNvHknRWT4s2xTtLDqAteTsJ29kCHYrTWYYu",
  "key8": "2HBxsxphLEED7MMdjn9yi7moF6W3yX4EVfyP6bNHmKtp9YZShY5DUsV6x2CSHztKqw3keJKjB6VjRfFmr347RfjA",
  "key9": "5sVCFfKNH3o4LuL8HNMiQtcyNQbVv9CQDEjx8Mn1QY92AbDLxqympzbxvrsJmdd9mZsdiYsQi4yH83XzqYLKdvhY",
  "key10": "2zWfhxYtKJgamnKX2ke9cbg1GSAazroeRmKHtSBAYUaZtp4a56HinxuUphicJsByzcV9hpqzRZhiitkcFnAmRKfX",
  "key11": "3GL8gYo7AZcwec9Bwmb2ctvtPj5YjugLhWdi419273dHLd1kS1z2BiyjnWqBsitG1US4Cq8rDPkFdsPXSfG2w2VS",
  "key12": "2DDS8Sa5ZhRAeb8AffPuuYKQrmTYCwwTRfnCXHC7bmoiEaTcz8ojHMBDU71x2rH5KYcM2XUgzvuRtHXmCuUYhg7x",
  "key13": "2qckJ72rSYrPkKJJdGeSkWgh44SWKckDzV8hD2tG3SfJfrwJcPZMfyN3mW7DVVJ9m3aB4k3pgsSY1bX5rDUnLmYj",
  "key14": "2tD8jsAB39b2J2CCXnMZPnSbWgEgjbYVXNuU5MMkvdoFnUnGt9pXyXhMbboJ92hADbyEHoBW87GXVoapgzqoifwu",
  "key15": "4os8DvJzEfC1iJzGY7LCsHUExzrjbQSbBHpFXTyXmpiEPrMaCuwej9em6byKBaqr1Ftan8tYfcGE5j9WK4PBNC3r",
  "key16": "2fENEymoruhitL2tx46qW6Av4iTgXEnn3m1fjQVcSWw8QU3cq1grSEnBjGqocExZyhRbbstTq44P7YQFn4QFxsdq",
  "key17": "675rg9Et7W4yBf3PuvHMmsvUR9rtmSy7wcQ9sjXqFBUpr7rohQifZx6pQmU6Vr1LZ67SoDYcK1E3PNhobystrpb3",
  "key18": "2WFGzEA7d2eYhs4bVU5CGG2RBjArURgrScox89pDt1GZCa7TMMGWWw7xWxzJkHv1w3f7wv8y3tUVVCtxkm4BEQNr",
  "key19": "51RaUxdHz1rFBWUid3NMWkC4up7PnVHinn1gsHXYfQfnypirxzVgpsB8v9r1uZ7AZ27SVsEGysEUakHA6mKrVrkC",
  "key20": "rG4WRm9hmEH4Hsyd8fQNJRhPtCttx44j7PCu47kihM5tJkrmfvYy3PcGTPRjuprF8t1VcFNP4fMFWg8oHjMfpts",
  "key21": "23ZFjisUy87oNmbNnZUtMoavUkqtpLpABQp3H9iuFQ3DyUEPXtKGLMXt8PZnqJUPE5qKNE2s5uVHVCrRkR2Go96Y",
  "key22": "652GzphtvTRFpS62gzz897sPkVxm9pHs933XELmbYNMzV6dyBzZyr6WVMZoC5owjvuUqf4j2UMASMHtLCQnoBfpe",
  "key23": "2dSMnvwoaFdQmLTsxg2iYRRYGK8JHMQwVyWVwmeehRpVWPPRjw2MoQ3gUXY318FDJoAmTbhQYTzVtsGAbMXwyMuW",
  "key24": "4XGZbRTg22L6U5eKJdESPjhNqEKZEfaJe8JD7yibDKagGKHafMot1zfMv7UXTFFSoxAsMfUdkvWtDmJ6yfsKLiSa",
  "key25": "5AC9ATzs3J7AWS5uH4PMiyDA647CSsT72jaJqFaQXwZh3ydmcC3rpzyZBNEx8iP6Z4WN2SKFRwPiYm5iyjwwSE5V",
  "key26": "56uhuwB3f172v8uZsS2hNnePAHcLxNywZBTAkyYt6xufrgHauyFjbQKZajrEwXQTiQN61BwtdiATJk2KiDoUo8rT",
  "key27": "tv8FrCAock6cqUJkvyfSj3RM2shu414d4CtmUTaXNuPnJ8WZ2tW5k3MkeAqGSzJjDRTpnS1hxqRJ5g39QU7iuMm",
  "key28": "5q8mHE9mqo4YYHn1J9SoHt7zigKa1JpEMWkcGjaCoPuWLRsjxshRGvjYF84CRTch3wn61Qz6gkG3V9dWuNBorXLm",
  "key29": "5tg182u3AQ1EBxz1LtVfZWNk3SKp5LxUNXUZh46mTqxG9VXDmvLY3JPzsp7K8yYtZz9JQHWm2SyHaKvesrXayCLc",
  "key30": "3V98xWa7iSwJFUzjVV2JwQtTu62rFudAhQqDrtZNbaVncHWAxgx3fCust5LQWRPMmQDFhpTvH6fm8iwfpq1u6yRH",
  "key31": "7n2jfmByMGhPGDSA1ZKm1KvfVDZpAvPUkS6yUVmWQpa4rFUV4nn9DJLqs8Poro1x3PhV8cag3eoYcbJWp8FWeMx",
  "key32": "GwmAWNFB6tBLxSg136VnYiQwkcDCwiu9WmD1ACrRnjeg1VuxSVks35Cs4AY1gMAvc5y7aYSfC9sgoiJMmzEeW3r",
  "key33": "3sTkJGUJDn5Z6ZygJnP9jdbE63twSYGzUN5mopv4EYH5NFsWjt2HeDbpxYpRbnCnx3d9uWhf6Yg34jDSHmPMUrzb",
  "key34": "3a8ZBdiKX9Ltn5xruMRDtM31Xo3RB4Jca3CnGpg8uQanRBbUeDy4ZHdfaJdv8Lw2u1eQp77wQEDDDik9r3Ucwg1f",
  "key35": "5sheu3CGb9ZYE4oBt4GTr1buVG9nhpJgPjikgyXam8yytB7XR48fihu9QWfzFqx45qVyakwXkNFnoVcJCUpnNDrf",
  "key36": "27exkv6FKiLZptbthSd9PXDz2BGjnzUmkmh1vuGPDgKMqs5KDgob12C1mEiCsSLYCELzaDLqBwAqyhzkAw68qmUo",
  "key37": "hS8GLPJoPKoN2zTaQvWpLGeyaDQB8F9uUZE9q4ygZMLxNxW4gVMFdh1VEG5ZGS8puZBmd86EG1gpSju1Aayj9Dy",
  "key38": "4VRamX9aNJ99K4otXnJRVUKxJYbMYt3BtuP6PcFuK7zpCUmhju9xZm9QCrcrjmwKmSLukg4Grgz36Ncgz3wA21Tq",
  "key39": "676GDsSWDDsYKgAoFaidVDHcVntSU67JsX2zdHm7tFxU8jwhKUX3pzPvQCgXRztLnfSnKCFxhqB5GV6PHMeXgaZ4",
  "key40": "3uEhEAcywow763E87M9UHwmBgxzXyQmFHMUz36ninJvDaHeMKjrxUyp8divu7GL5wcvvKuYxce2YUYExf325gsy6"
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
