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
    "5gRLiFEvwfvoXi4DrnW8kR9mNy6n6DgLYmZZ9eKBQZecV2Q8mHgkgRtoUidQK5bPAScXxjPngwsiMK2aqRJJq1oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvkzZa8jHJjhP93ikLVf79c81bLVvS1JxuQXCD2RqWggSgzpT5sM78oVfWHP7eU3wuKyNnVTyXJvmTMaNBTvy6i",
  "key1": "4tCG9QDeGzKn6EeG7jxoDHaVMwee3QkVqdkoHCf3Jt19KRZP35QpcHZnUQpNqs1RxcJymrRxGhB1nwg8JvP7LBML",
  "key2": "kkwrHX7HyfiDTorjsh8KCiNaMTyr6EqdfHtSqUUAt36uPtUqby7Nhs3jW1ZA1bGwmHLBjmvU1q7UrGdXct9DSpY",
  "key3": "3RhYoXgrBojFmzawrxuAjqZTJ6gycz6J47xqVvoJYYjYPLDfMPfEEvwcoB446ecMwipNHCS1gzs5SF9W3KKtrkNC",
  "key4": "5QN16uQ3iEHQYZuPq48DczY4hLm5ZWeB2Psb2a1yqGjAfwmeYs3CHWkCkbcDDof6wqUC3W4X7Kjh9kXGYLAthVjA",
  "key5": "5H18rXY9PHTxwCMr3gMfPT6i1cCfaYTk22JSDQ3LQfRWEahNKw1eaGQRSpDEpwxKqc5JCNFtaHGxeVHkKHjdGDxX",
  "key6": "5dqUP2KUA3oqnqYEf3hBC7xYsHv3bvHgxuXaPu2E4gDCagWCnGR7B67fcukBqRcRVBgMHWkajYD9HeCetSsU842L",
  "key7": "rb1FSvM93m53bWiFycRkXYc8uEP3wjJyfNNuxYdBGBSpARPh7dJc1bSLdKDq1KkRvjFwRBm7kR62tFJSzWGPPWS",
  "key8": "BP99HqXarCy2ccsrnDunAQ2gz3j2g1T7HxZ5CrVyQRV9rLwrDMjGDkwqUqfb2aKcrbQfjhNs4RnXNbiAVrubPLL",
  "key9": "2xnvsmzPVnaeyxMyiRBAfCTv5YfsV241ke1amTzCokAMWWNt2VeofnFoFLWQQNS7C4K2SW6bATVUPeUu6KjVmB9S",
  "key10": "3UDVwzZfMuFYubuhuo473McYqfJBZq3HGoGVoFQ2mfP8mNMepFSo84GfeJzkgUHFEDW4an7khgiwep7J6sTYk1KK",
  "key11": "vLS1j71kb7ELU3fZu8bEQH38tr9JetNfnNnZZMFLDTvxvFWxVD3b6gfuufYFdbshpk5L1qHGgQfR6T4V92DR1Xb",
  "key12": "2V11McoFfCm18Dz9i7bJRbyGGir1K9usqy5u38YsGr5S2YAsn7n35VoCswS9qK6f8jmbk87EuejDwA5Tf1dofrVb",
  "key13": "3FRZKJfYD1zCG2zPF8JJkm94PC6UTM9wUFEYaWnfPW2sm9BeD5oXcV9h6sisvv2YsgS5cHUNDBhqAZqJDA5M6MMR",
  "key14": "2GqEtdsLKXhnVmFBqsWzGWi9eEHDwhzrzdr3YPb1cZ6YvuPUhvXkwswDof8RDmRkYNiCoo8KgMj6FqZWPvdP8WgM",
  "key15": "qr3Y7UEsjRoKit71NZhuATwvwGFCBAfSpypF72jevLcApiVSZSo4dCx5EPGgQwA7v4fABut6e4jqFTqBYHFsjFd",
  "key16": "vskUfRroFcq8kBYdEhAbwp5YSL1foa4K5CWzHAuAfVYTkqBjbEmG25Cg8fGKo8HMNrkjKPyzKSf9sAJLLeJb9kM",
  "key17": "z9n8W47AXz6H4ckAjh9n7MQzH3ftSYDUgcAowGNYegZYaGf7Y5wXvU9KnrKAMZqJza2RsrVatvKyc8bhJKmbhNi",
  "key18": "4eyfRTLPsPU1f3rHUHLNv7y9Lcoay1DXHm1jmWffNQ1kqSEZdqkHvddn3ht4oVWanxUByMs5BPXVsXBAd3oz1ZUN",
  "key19": "3ZgkZpDt3WjfqT9XTemuxBAezRAcD9WBL2QEmEebmR99SArGBmgcgbnoSqYRMpYku1XvcQomYAviFdd4fW9wZjKg",
  "key20": "5oUj1dUduDEGiwrLSsHGXecJ4tXV1J9Y1HJJ633Qj2naGFTd8vGtooPZ1KYzvCZaRFPrfuBwUvHvhEuW9Xt71Bht",
  "key21": "2FvwCHWCWucf9rznzpc4p7AQ4VommmVPRu6sMkMWo8oebTag3oH2GwXNYyMpBHGLW856pddRDwdoXkNZQ989nRN",
  "key22": "59yCELDHqQpj4e9Zotx2AFMm8FtYNzBpYHJbX1fftZFL9VQ6R1fpFS6UCMX7aqH5fvvQfbaeTDPe1PBaa6pKQaXN",
  "key23": "5bLdW49wp9VRgp9MZVtvj47B4FCmv7SEboY6Bc2ZuqQcrcqpnGhAJWpuBmRFoDwRcxQrYakwf9xuMRzrbVWHYTRR",
  "key24": "3gV9g6SwuyfWwGfR4HBqfKBhuhx2Xqc4gYDbUH1JKwFCR76aLFEsEupfmy5e2b85pbBj9wyZZJBawiSkSdxaMubW",
  "key25": "3LGcp7JFtxPGz2F6uMqrhj7wBwPS5RMH7sZvsjTQgY5KWK2Af9tK9RJdZRwvpQQZK2wk9pJueQfahVPJSdmku4c3",
  "key26": "232kKCk6tCwbUnAN19jUr6yV8JHH1XetgWpnK1p4a2XJb2E9dJTLSmLop5yWHHGo3eHmbvxTTtYjv3rTbjXLjRUv",
  "key27": "47nZ3b6QmneBGU9ULNa6ef82WheuNcDPXS9yjfTFcrceccwZTwZpL2nb8YXQaZPkb1sogAdPJYsoiFCa3YKW4Huw",
  "key28": "5XwdxrgWgJQ6yjBkRWYoD7X13sUJM4bB9Ht9sF1M1hR3nehd845S8bF3CkxmKSbmNcSQdzSZGj7QkXeWyaTYHqrj",
  "key29": "21WxHpQWAr9sXuAqBr4rz6Bk4RjMuAR8gwNfb2Xvn4jkDAY7rHTbibunjaCFvv5Mr4h46hJk5DK5gmfMx7BfwYRE",
  "key30": "gQ3i1GdWRBizWyerYHatH6Bz9UfpvzFRVCSv1JQRnQ6vEmCogB5LD2ZoJH1D9kLNSFeN9X1sdLEoumE9zXQSPoT",
  "key31": "3Z6RRRw2Bwd4d6XEzm8MHkvbkg4EkwebTJdJfpwD6FfaUSQSFzucPmH1kgE9Y2QmMpRafCyRrwKobrbsCXz9xuK3",
  "key32": "66qXp3En5kniC4VeAC9x3zt3scZQpd119o3o3xipnHdutY6Ps8xVyRNv2nMk1q6dvqKn4qfPZoFqs6Bn31EP2Lg",
  "key33": "4XQGrmvq5o8FKuFWPBmXpNw2UjeiqubvHjVmRhSTTGNCyeEHoziosZ45Xspb2rowmnmP75vHqfnW3rm2maaZe6Zn",
  "key34": "3YcJDNNppMrPpr9rWLeoj8eVqbx5YjpDRHdmb4VwH48njMoMoavEZrS1ajf7hV7KSnemj9faHuGRbTjdAXYLmpWC",
  "key35": "AsyhKovogorwaQxuoHYAj7a2FTVoUnPo79qpFAZTWd54jEUee4rBne48qBCsLkw8dCV9SMd3bmwapKahJ2MmwiZ",
  "key36": "25W8fkdNmiXBbYGadzYg6rjGGKd7vhDyYiJZioBrbQTRG3yXwNFjQBkMU4tp4piY4Vk5HZQpbC6qSAvHLU3qLJt2",
  "key37": "4SJ5rF3dKNAkfDqK6BfwtUSzf3WJhDHwKFhRvJ7A7cx8Aakv9W1EKpAJVoXq76juJ7ciQgd4QbiK468k5VxJCUL8",
  "key38": "2dH5UfoT3kG256nBw8EwqrZvY2nx47sMtEexwsdv7MC9xf1mdCsfN14mGVSFpH8scTXS5eTyhqqsGCxW47NoJKDB",
  "key39": "4BFh5unwmYtmpG8ru54WXPL9LcqbYzVASVNJxfWp7uGSCtiAHj4NS8ZhuSmA2QdjKFM5r17ofFnerSPPGaqrfVbu",
  "key40": "65ac62gxHPVb8hcjULMuEjtx9VyoTaJ5JmW6niMZJd6ceZzLtgKTqkP2nqLpQSwqkguteinV6dy9iTjiXkp1mtot",
  "key41": "3U6rvbfoi2KhUhDMUJpABybvXKxYvPdqqdUtiezjQqKT6Qq3Ecjz7RTpQ5ADPiYmWbzexSkm1qKcc7BheprrvCpi",
  "key42": "5ULG4ZKCfBmKHrXdpyeHM6LqPZR5zoc3pcWu3RLC7ikGLyEVj2fjc8fPYTwgiidPBHeTuB4JfPrnyMBP1wofHa3t"
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
