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
    "2H3GgT4w2LYG4681dVmxCMjPZV7F3zpgKr4GdJnwRckW6Yhfe4QieX1Lam1AWVa1ADJ2giNY3Xv4Nysqs4UT5gZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eXEstgL6ft53gQToRoAhEvYHT2eKWZU1ukqi4H2rNNK3uVBHJeYb2bCoETiyPVRmR22GLNvEbdyrPqJQS1jqRxe",
  "key1": "3p1tAvMToHyCaBpX6EB5nMe4X9r3CSy5ibhxzrona4kZLtmQj9bovMuSE4rsjWnz8FVbXDQuwmWcHdwi9VzyuDJQ",
  "key2": "2feSp6Un7CooBV8fFh6c83daBarSAVxescUKZH3PpHGC7BrRUdRFWAT4o89Er5Lp1Nt6xFJewyonFkPKDqnAVeUD",
  "key3": "63DyAUsSaiU86f1FhnKDmyvpwBnbTJ3F4BXUQ5CfdtrNHppNk3TgENvXi8XEH4CtVDDCQC1L6nHtYBXzse2gPqR5",
  "key4": "26Y8xydctfJTLVGyZVHuudrxgpNxMmXg8wLRzoWK3X1ibTmiRabc6wnLpKrgb169x5oYF1NTPW5jhaFNV3HfNgJF",
  "key5": "5M7Mwo4ggirJoN3vvLL3fB3Q5wcCzvxv8DkHvLYXSQWG7atBfPsqMGgDpxFiee6cipMt52BMcevhos3bzVWfP7n8",
  "key6": "2kT1Wc64auRxcWVkE5iX3sj1dRWF6iCcoemWeT2pP9S4agby1Egbes7JNcWV6cYHHwEHFceBKRK52MrrKzE1SCmp",
  "key7": "4V8wuU8uXQSqFWggvPmKdt1zGKucQDMtNWVbAK8tEz5WfAj3rr77wHqvZJCFQgxcDB7uzMxCgRonzrynJ7GBdeWa",
  "key8": "e6ooAYhi4QFabcgGJsSXyRLKwWNQFtyjz3FodvDCb6DCd5b8hgbxX38zhAuPCjrFXVtLRpPjcwdfVvdWRxzxC18",
  "key9": "3bUgPaTbqGYNBQF71xp8Yez4y5LNrBhSmiHAzSVXmZPCy9C2fVDrLZA6SYkTCpimpP8Z5LMorUxhkhyG4XuHqovD",
  "key10": "4pc1atkd483Zhyg51bFkh8Bcy5aKufBE6xqw7coDZ9zsreHP2k4A6UwDvoCd4267BFizt7N5jUyaqgsvzg89moJ1",
  "key11": "5YnpwtT3MJU9z9LTTM2DZafvvV7jtXZMEpuz1qpsTQhH4zmDdzqHvyM6cNXhaGFHCYhyQnu7D6PSPD5FgtQqzmS3",
  "key12": "Kb1cDyz28tuT9Q3hQztWUV95esvmSq3uQwaiFKig6JtADwWaTYXyUqyaRA57wsAV4txXVKm713WRooZ9fSra3cp",
  "key13": "4u5PggM6NNnu9H3DB6fJpUMqkjgEKs8Jb8Ad1hozAcpV3K5W1mL2AFjWso7sCbYyPRgtud8nSCNkTxcxPCvuhVQ2",
  "key14": "2hcee7dQmUv7qEXvui3eut99Kq5LzidfcAEipioZaEu1CUjjviSyH6cgcvRd8VZdm9JQB8SHqxxBxd4S2W9vVguv",
  "key15": "2Dz4QoxKvYvEUdhBmdRbWzK4ga69E5NbNxhzpdop13MZ8FbFHPRA5TsnyKyMA77nUCjfRKxwjwzJPGmooBCxRp87",
  "key16": "3nkeweGNbY8ikPNm4sbY4nwG67YauPA69SQcqyCbtdkYMzxr1fC96vTFNPdLWzuSsTXppoh364zXPJ7z9nLDjYFF",
  "key17": "q4DdBx8iMyuERePNdyuVxwYdHaK56N2spxeQEQV6mFktqhiaV5TKE4XmZD5nq6GidBy4onPe1UTgzp3YroSawgy",
  "key18": "51AT1bjbAxjg7V5p2yC3z8EeuNtxzHvvcfGw1B86E2QRe8xBbJero6m1Sd9UM23S3WveyH3CqGZqri64VZ4riCcr",
  "key19": "3pnyrnckunFXFxFRQG1bMXt7CcgKsD5Vvm4rw65pW9SQ1uAKjMkFdPBnuKR4YmxSyqUiGwMmWz7n1tZgZUt6xCkW",
  "key20": "5zUpHRLzGimBTDzeQzNz3kZdAz6z9CyEfEcdXkyZo6pwRgXzTmQM9cSLqcb5nkdtEFgDxThuCpGo6tJ9iwnGGX6M",
  "key21": "3sJpQDoRmmPv83JHqau44TR5Y8eKgq687bjPoWaJPJaDERbjma4qPe7rhA4u3psZGqKySoktY9rekknQBgLQN8SS",
  "key22": "2FeL4rNDbC4vKeiS6o6X2SU8YdNrUSXnm5SnWC1ZZd8WTq7HnstpJir6QU8SHR9dYpF2piFeRgLXTS4hCzZpM7j9",
  "key23": "5zjwypAmq1uE9vHFxAF4pTFwQDnveuAbT7evdebC9aTeXMHVvsF13Npa5n161yL1hKKYX3dQRi941B18jkhAAnQP",
  "key24": "kZw4Q9GUJq8jJVT6Ng8ibrZEkbBiLbTuA6omhMEJtSSY729mx6pXx59Sb5MzS6FofGCBAN4EgNyMVPPKaiNap1s",
  "key25": "3fR1YBjutFG9fuRb7vaDtUbDwf4eRp4e3a3Zwz33WHcoMttM86C875jGaZtzQ5wASmN1yV6r4fuekN6uVrp2nGGc",
  "key26": "3EtBAd6ucwhzQ121TQ2yn3TDFPmVnjF6UUR8XkT9mYDdJGHCvHbd98nTHovtFesD6nVdwbydkEMdtbufXH2prb1a",
  "key27": "5G6PdCzthqxJGj4EN3kiRg3MoEepGQyLuXDizQGrCj25Dv1KTj6KSLhMrsAyrC69H3nN93Z474FR1B4rsBZN2cHU",
  "key28": "gfVztFEnq8GSBPmxrjJ63Lt6GoUTiogUwjtrtkezVfMnHxkaCF1mwVgWxv3LAy1andRFfXdCqVPKpPdfnWwzdC1",
  "key29": "JF13zVEL5Y995FkM2xDmt1P6xLKLbWyzuqM4hPhJQ75ADYrNYTTFMyDpgdKNQzwDZxGaoMEv6Peh1zpbxFye7JD",
  "key30": "fds5c2SJ913KxuQW7Y3rYaFuVQBiZgfoYE7TRxNhxazTW6tRK9eiXVBRij9uCPyz5NUyYTxEXBEkWGXLoKJTSE1",
  "key31": "5qLZfvNecNQFPdrdJzC5LAS8zY9XX3aWXukBkzEw9kcYfD8ndCcgMpymP6nqSw4c5JqmzZujth75JWwPV2eU11RK",
  "key32": "2H1wMPJodLGSTBfCUgzDcN62Kogt7rqPse1mh47zxCe8o4rCWBunm3QxduhjhpZiyFVsUAd5uuWdc7Vata5yhY3c",
  "key33": "2ZmxLZuoiErqGEYm4qUHZiQbR8CUNFYnLu7FUheJJREtxHJWGPRij1AQ2BG3CZ2MeVGpbmbcWTn6mLF4Bqf63NbL",
  "key34": "2ADAmuXDzXNFMf51mNiTbMgkcoBHxhrvwUu9na6zHgeXrnMRyv9p1C697ZcFfaX38XSGWrzXRigSgGf2tyYT4vDC",
  "key35": "3435QHzfzr4gAzQooxWYTZEoMbKiKxVSzZkctupSCWMa8z2PU9zYxLB8Rh5mSMxsmr2Vi8fw5Lwxu4GKzaE8S9Vn",
  "key36": "2qBKjwLFF21mZBr4waVfpDkrKF3iuUnfWeRdYsae7zNPmJpjuf18hn5k5iMQm7GgTmQB8dbDZBDBikj3iyRWnYZE",
  "key37": "5cfufTk6xskKeGqDRzfgQpzULz1neGZiM18KTVPKdJ1XwM6BZraELWvp6zSMv4rFjosCxRGiujbmVUKqp6txHzfM",
  "key38": "64XroUR4va4RdRzG9v3SVHe5G29kZXDZjfY1xadjg5dYpoDXYnRBLcgH4xeHVL7CkGSLFdxEVryLkzoRCVNTB4a3",
  "key39": "3uVHes12AQkUUX7Kg4NJsuXx2KXdvk3HsnwSm4Z2pTN1ZaqE7shkDQ3UqXKP76hzQDgk2CViSAgiDHSdgDyViS6s",
  "key40": "2xioiCqaLthjNYbowe9YB7T1mLkxr5nCf83QsFKwwTJB8TbGoYsgcm8XS8AoQTtkY8BQ1xmSgV36B2Hw5aRsVWpv",
  "key41": "5qUVLrGMdXbQuznkuvDgcFcp3GJKBPGpZqdycPtDnFFHgWLzTMpuXQqUeKRaSc2hfofD99XuspAVG2gkAamhSTky",
  "key42": "5NBDXjyU5E8ExRbXSw5GjTFY9fjowia7bTPse9MnS5X5Lyju3R5nUKU3vJsWE774zEcFgjPq6VGpaZH7Zak8zLDH",
  "key43": "2FXFaXVSXTvuV7PV23ze7yr19KkDr4egBoLJtHMFo6XSTf6N4b6jk278efUrbUBMDYBfEn8zYii2wgwu6uRs5HHQ"
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
