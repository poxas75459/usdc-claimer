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
    "diDANLJBwGGCZRd869hQj7r36EQNCQ2YPkdyn3WoYX2gffDz9aPZH4ewzwdztcvEQPzic9bGLcffmVCQfPZtrXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588KjPhGxS79kQDMuesVH7e2aB7XAju57PKj1sLo1Pb9doVTzwoNFKdBPrTM6beJQhmV195w9kdQbKvGDekoTMH1",
  "key1": "R7sGc8HFL8y3MMYHcPKjcHjy27YW2ZXjJgyZiPj16djJKoBBnGJPtTKSncHVQxWc8V32cPSdf9KjhnJmJQLTr1Q",
  "key2": "P2WRC1coN5abpGGE5Q7wWTTWA1H7ErnwVcTJpNiDgkxasEyknDzGik6iFH1yGsh1aV3DidGqbdmoSS3LVcuK6Rk",
  "key3": "2vDNz8d8J9nYa7hRxq5oHCaiG4pksqA2JN6VWscDEv5voUoB2dLQe5eT7tE1E1EZejqkdMdHCpJRqEY6hTzu8DWA",
  "key4": "4FtTtnKJRYTCym9GYSHnbCu3KnMeAQB3mP4hkCW4PUBAmKy6LX4zYg8sfAVz1Ha8NBgcnGJBGHwVGXqMEbgkQen3",
  "key5": "63SHkANBQBvA1wNiZtgRSjNYuxAJKXtfoZm68mDtQ4XwHuQaviVSBiieTMuaisKm6PpBxqoMB2fqTqhFuuQbgzX6",
  "key6": "2oDEcmPeWop9NnJ6LUBXKHC8ZuzH8CV7H2de3cRsDcJSNwjwPFhGCabLqNBMujdKvvgLCTmTs39TVeUPBM4D7idb",
  "key7": "5YAHHR2Vn4uohFBo8v7ESopGPUxjkycnrAvmD5YSip9TqVLDwNCpRk2DFTi5S5RgLjS2QSrEbNshAVVc7p4jg1ro",
  "key8": "2h8DEJBH3oU2Nwtoz2QAu3u1eK3s3dTwLCjqYxv238hTWfxSnbPND2WmKKYnzPSwCLzGJ22TEow73pXkFniht3mX",
  "key9": "2yipzdvN2cgsc5syQt9VsytFT4WQFCArhDkfGzUB8tkrbBbhm6SDq8hs4Ups5H3dUU1TnFc7cGUwr46ciZerg5Yt",
  "key10": "4FWQ1t4bbwrUeL8dTAwbg1niKp25aZjM5aRN4PPrBRvaMxgvRLVXu6oLM9sY7jRVGQXSqEmLqZ97p7hKEfrC3o7K",
  "key11": "5sS3w1SgNFLAzmMJdtFha5gmJWiZNVZgbz8oGygaEdM5sQoYDRmzT97jy2xQc9uJCDssfRF3jqRH2jNyMkgHrmoZ",
  "key12": "63Prkouy9dZX4VJ9aqosiGpVmh7eAG2jb3wocvTbkK5QaSBqCadGDyjXmE7FYbSLpWkMG4LdHQ4WWXKMn9KJDzva",
  "key13": "3nJPovcHtwUQbnQDqFVKavFsXRffnKJs2rH1qi65kw5S6LCEcK2WU94MShiKY2V9NDxm8QXeRYwiu8NWuDPSXhhJ",
  "key14": "4CjXF5NHQnaBqBj7K5A7LC8zJfxyi5JCBsUNQDYbptFu7tLtTnsd6f3vLvEBKmZtdvREDM818gsKiQGKegKQWk2X",
  "key15": "4yZ8zkMdgqTZi2sUDq9yYvisRHxVC7eJh9kv6TJ8jUFYfAso2fStR91VV4agpeYfeA3ZhRJWdTgUF5fcDjHbG2Zv",
  "key16": "3Dk3wYsFUK15tGc7RthF72Z4PZUmtzZJ7qTgJmKrUfFpSuzEsihB2JeHpdWUTMt8Q9seyhPn1RM4fCP5w4nZKMc5",
  "key17": "2hxpzWS555zhPBpja2V4GFrCvtf5SAkjS5T4AwYzUDGMcByA2hE5qfJxfJEzbUYVqkuezF93Hz2QNwDrprN3Q2Vg",
  "key18": "66BSquj1sQk8Hw9R6US7s9kWNjRgyLLKQZqRx3nbF1MZFFebhG4pk5i1MqkLfhmAUp84ENmrRjWjGsqw2LskdxfA",
  "key19": "4fRhTR6kWSsWFGZsJKDrnZFeaUbyHUpxQJmz9vMETZGDmcQbMf6aybfCo2x5m6cVin62K7Mx8PK7DrcHZEnY4syT",
  "key20": "3aXXjsVdMLwnDi2URG8vbtHuqmdU7vxjfsKpRafTpRrcQWdJcZ5cM1upAhdFQz5VRXqxthTC1shmPGoq6MJ1rafT",
  "key21": "5G4dxFw6d31SnLY8oed7RMwRbhuCEERh8GpXN4YVAYsEReP596cZTReoC8aXqbgQaWU29qvhLx16sb2XUAn2UUxu",
  "key22": "jnHyfLB9GSU92TQ6ej2DbBVK7HKvMTNehRhuJXiitqvmkedBiHRWmWSFXvR4xW5A8miRA9Qux4icetcxwA7QJxA",
  "key23": "2Uq2bJpZXuqdLHDNeh6jzouufRTLQkfJvg6jaD2R5eX85fGktedAtQcnRoLe6FFSajeumWJrh3aMw9m4SStDpK9c",
  "key24": "5yXG78BXNyiPEG2wuSUD42sooLjyMUXndSBwFXFwEUTTCoq8Fvqn6786KWJsDnqSbtEdqKvDpHzGePrdnagoaYUs",
  "key25": "2rz9kHYymzK43xLa8CCr3pcAMX8uknvVJgPN5H5ZeMvAaMmyYDHp1S638RRmLXhUGgJV69dtBPuqwaegQUrun35R",
  "key26": "22Uodc37gUHh3U2n7vuxM3hXc8pFGNfUBtXSuSUkixFNFg1TjK4YvCKg4Jbw7BEf6W9krKdSkyh4m12B8RdKZscj",
  "key27": "bx1yWVwe2YUzxoSMDNfxsEj8yVy3wj7bUBLJeEWAjWCqKsuaaTARwZnmRRxeFakL8rrKYby9Q2CmekzoKMktSLd",
  "key28": "sBdQsVNQpuPWnL8weg1yLegToQUdiJYbncavR7oDhnK5iffAPQ9uUvH7zjrtYkE2eLFYDySc9xWbKc9FePaCpp7",
  "key29": "5fSmFA9T8pPhMjRAEaRY3SZbG4EeFJeWBhT9cqymgbjM5WFGqqXFyj1n7Z8ga1Hkk6i5GoFhLVZGARqHKdvzjdnN",
  "key30": "33ScVZZCHC3nXDvJAgV8ZHTkcmrGEnmnGsSVWEw2p6iosocYCYv4bb3reCyiTjQqP25Trfjx9EMmAQZEBACng2FZ",
  "key31": "3tkDzzm7btrEjEm3H2CLmyts9tv1u9Mz7AB2iic4dBTb4XMC5NeXsdxtPny6m1XAZ79ZxzUwUxLmoATNDivy85MG",
  "key32": "2aFTys1LDhuaZrcSiNd2ooiGdNJZMK4tB1218G92VJSjvxKwRDdMWCMEPWDkvJeeg22RoG1NU37HLPcUNxdozFjK",
  "key33": "3JchzB12URzDv2aXM9uaZsFSXZEVp9ZF59VK3RhWP7RPmEJJSHdo8jCaVDq41xAJQerKnkHejFi79voNfgL4p2nC",
  "key34": "5pUiK5J6ymQT5knFJdMQqRNzggwFfgXCsx6L8Wo6qRCaZnQ8Ne9EU4hvejb1kfLoeM8TvkQnhPbSgQSPtirqPFtW",
  "key35": "q8efx4p6nYdYHcr7Ws7Vxan2MRt9FSgP7WXyX34S2b1j7Gi8A1Y7AMiTuTHPodawoJK637Fz7XwaVkv6HqzzmHh",
  "key36": "5iwz7jd4iZV448uUeWQbX9qrEtvvPwEjRBD7LDoWyKTJC5nkHpjgxuqW31PsAgWcJg9U5oqz6Ncb4CV2B99RTYRU",
  "key37": "2bq6kBwTbLRViDMNJAjcXuwa4RSzMAzCShapNeEZXACnmr73Jt3AEP5pPyLk2N7wAekMcUqmKpF4nRvPMCVN1WBf"
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
