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
    "2zgZBs6vL67C8gqxJ8XZVBtGCgcgH4vDtGBLTnez9FRFbC2bBEjtFvyQcz3bQo23xb2CkR26BD2GbivgnyzNUxH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRBmuFffQvDJrDTSBi94pPaCoRArTM75fXwnvG6gpe5wZcw1jXh3dMYJ41YcPnqrpQiaL11WwnVXyAYT3LMasjC",
  "key1": "5GWe1hTJoWdzv2iv6PgvVspo7qWw92KkPAv1B6zijYGHWt7d6vm9nzXN9MT3njs5gjVtvR1cgHxyAZs3y4GyDjEQ",
  "key2": "2m8fBzJ4hPNjxmfZ9kcDeFBg1xJqD7uShH5AEjEQkYzPK5XThbmrtTPGQuZsBrX7Jwv1jqHpHuNpP41BSk2eSxF9",
  "key3": "5jd3HuvuW7WCmixPfL8bKqoxwkrWXzr2utGxUDTSwqWrohj9ZoK4gKHG9UZQ6ygxh71PsXDBa14jGkZJMomFgGRS",
  "key4": "2GCiD6vB4BxNzugR5noajg6EaKHh2h2SoMzwTiGZ8Baf6jioTFUsoTRBA8xGnhpieguZQfYAs9uWtRhUHp9oGXWF",
  "key5": "5ZAWbAS1tokp8fW2zAXieYyeZuQbdQ5DtszgGGZjhsh4shJLeN4iNM1UjrUuEx8PvaHZV12udtL18YF99q6mVTDP",
  "key6": "gogeDVejPpyyCZdzrYBNZvi1waei5ddTCfSd5jHQWc4GsRgLT7nM4QvbZadZmDHbrXQqEVkjf8mnfEdKBYCxt5P",
  "key7": "5yDRofiaqkDhhxGNzAsH8JvnKXtCETnaDxbBo24aPkSRG4v7aNCkvk3b8q8DAcCzRVDKCSagW8AhhSKwLs7vnNo9",
  "key8": "4uAE4Bwn4rqXkHAjSCTcGd73aTmpzCxS95JTix5j9ZDfLpUbG9YdZDX2FrT85GKBYRb5Gs1UXMvsAyzvvvFetLKp",
  "key9": "3mwFFji6bXhcRHtVzCDjaNT3DHeV3z3dANxA6H3LsyJvpoWecrdtWv79Mz9wPoaRN8knn7qJyY8cSGxgt75MEA9t",
  "key10": "29wdBudd57PV3X5s5fCVWqg17F7pdtc8WPkZVFa8DnRxE7o128k71BvLjuytdTsdGXTkDoeufrGvf9yX7ufDCQwQ",
  "key11": "4pNbcBrJjrb4TVxsspbBNKB6UaRSzLjm2SELjQPGUcgFSWVVaq7mVdGVMb64S7WENWsQ6Fz7J923MXSbEBeoAqU9",
  "key12": "3TnkrimJ7QtwUXt1CXt9mqxtkphtAxhnE1ZhWtFBTjJfCVAtyvcqAnCxHPwkYhEVCUygJ4mHWX7eJf6HPrzF3wyg",
  "key13": "5ajWeXarEe3iPQmzZrDQLrgC95e33tZ1WNXxRFo2ig86irt5W7D58mJiEQ9cZJArruNhYxZiiRyfXGPC5h5uWspM",
  "key14": "4Pp7s7CK57Yxdic4ZAecUkHWskq3yvhqujGwsMPhUJVSNLqN5VkXbnSh8aieUrgPwo3gqowpqxWnQMcmMDa2wJ8W",
  "key15": "54FuSEhLFUp2mTYALB7UsnGaarkVf3bsFPUYhPx9vTqgQzWXHvYN1z2UCBvMTZEaiW6Qgwdo5tLTbBSUo5yNA8SB",
  "key16": "2mzMAqzutBqWUPoKTTfrcsphwsX2NCA96rcHHCsSmxGLw5i68Z4Z2tojXbViGKcGtCvDJXdCGpmL7DCaLDBktLAb",
  "key17": "5AYNDDdYPkNkiF6FvPTuVA2JpxxtJCwQRHFLja26BtbdpRpmbNbbtrpZ8iMx5w9s5oUM5UdrBCPYsYfqnN6qtgjS",
  "key18": "39iXioRJGEeWFhHjU7NNhSkrq6ssrnAG6FZGuV47yTqxBr2Bk2PyHC1umdJ6AEg5efZaQatN86FfzyR6ncpapxmq",
  "key19": "7ay5ri7KtCys7EDjDoQ4K6Npnc7mCCgFDsNmVURC4Ya7RJZxM1zkvbT3XvEtBYDs8wHcuvHv5kK3i4vGxgdfKCF",
  "key20": "5MFkXVzFuhFiEyH6GaiFy2ETAPmY5Zo4CU1NMJhpivBEkvd3dCSDT46mbzzPzHJPQm4LAySwVc8gQoeNgUS3Np3R",
  "key21": "WWQbPy9frWU2FDRVmWt9ya4wkcbbDj65xcUBh1AWGQyR7m4WHikuYpTdQvqSZdU4uQUKeyoPv5wXSpnkKxBSwpi",
  "key22": "3C8WWasMB4FKjM1cafx7heYMUK2xzLsmMPmWjakxX8rPSH1aq65DrLijowcqniY7VRumXtQhi3uGZwRbGUwgPaXe",
  "key23": "4y39fRPpjitqGH7SQJzuU9iej8daYh5ddttwL5rxc6TLGnj74caAAH4ym4iJuMzrg6sgEAKJb4Kr9fJpuWXMbT4c",
  "key24": "NxH9YNUMJdggEgunAy56czyE8iJ3fst3UJ2nZqd2QWb2SbXUB7vHMuUgcPJejEVzy9EgbsfR5oeqo8Ys3G3AHPo",
  "key25": "2D7Kd225kvcTshYwPUN9dkRb42JV3V8Ryo5KLqLmeEDiSfoXEUmqW71iDLF6gZNzQUABdjA8tKKeGsHYskeZx5iN",
  "key26": "fCL5xAmgpkuS5reh9BLJiM3jg4AfeT1HnWCNvQPjvqbKCnTrKTPubSbYaGAMB5qXv5GFowMYrVNQ197ijVBJj3x",
  "key27": "53rsm8eu98YHajiXHdPfcsdFW2dP2K5nUC2kD6evpPNUF2nSpb9eQ6o8t11ho25iPxo7KmNGxs6NmS1cARfVhfzF",
  "key28": "NDqUzFnoMzh5MMeVeFhQ7TT9TUbXKAv3S6t7Gk4nQ3ht2ciSU467gGqGB3Fj673QLSQQdio4bxe34vcBwiiTduL",
  "key29": "5gRUeAyivxQ1uf3oQJB7aUJNtXmqpKKvuyAW8pYCLiTYCS925yQDKj1KU5RpTDen5CVXf5R7riB3bkbEAHxEqUkA",
  "key30": "4fmM2paukUq7XZS1BMTQULCKNnuH8hV3VN3z9KTP9YxX3QYjdRwSTDSVvyHzAkdp5vMrrchGQ6Kv4eUL4e2aajR4",
  "key31": "5EMmnVAZCYMSS7KFXk3wujV8xH8EB8PCA2K5tQd9xHhgkFNvaCJ9EVG2nA46zcoUwRiXMaAP1eHXjio9QUtZhWZe",
  "key32": "6crVcgeLCybRghwGNWr17fksGfG9vU3AoSj1dwo7TozNWYUJRukFEAZSdv62LjKfgk8Bcq1gMcG7MfLXJjnXjn5",
  "key33": "eebv7g7SjLF7aCxzPAP19Z5xRtNfUxyRv5dRtMREB3UAsoVqCwnDzWout2TSvDMvjBkikZPsP6z322EVqfrvdXb",
  "key34": "5gafDJ3BHzp5jtyWAKnE5RQvqNQUj9uShdZyegSXuwQymGw5zqShvnrC8Sq4bFs2mes68SsvFTrpAJc5JSbvEtgS",
  "key35": "2GvRWhvT6r2B1cfPBsoogBfTo2jcTfQYQ4ei8dy8MAkfZpHMRaFd5Q8Pwua4T23kXz4VGpov7rKa49mmHvyvV44T",
  "key36": "5fg2cE6CdBuPt2hzbGq66hUNyA5y4yAvJx9iPuMXehcXRchHVokkJPgfNWuDVySWSW33tiiKhjqTiafYDEyW3mjN",
  "key37": "3V57buESKPREBZRDkjbb19EwBHhpYao7i6tjX3x3wF52nFNz4rfZ4qv1wj9PKHgupWcqMCaukNdzHTDf84TGZu6r",
  "key38": "4QjAa56dbMC5wduYGD8mJ1jvFjY5rUSSDubjGmcrA6wLjDCtRL96JzsJHh64on2a6M7eaD28LroVqQnXxfsH68hJ",
  "key39": "2wib5P3QYS3mmFmhVGDzjsWm5ZJdQWcJWqoes4WTVR6y55dQ7coNxu1PRKpi4qYGktu1hS6XuNpt4GcQSxiDQwPQ",
  "key40": "4o6HCAPZRGgLyTdk12x6kLi1JaLYrp8km2MMWHbxt8n2FeJNdQfHpLtPwwCnkPYiRQn7ZyPdoGuTqA4dL4FbHTQn",
  "key41": "4jR8RgNBELYvHGtMmxQ7w16K95BHdw9avSNjcjvZbmoPTBjPNLow16jhJW9W3FYgNJm2SbZrM6Ycf3A4DjMXP12d",
  "key42": "2AHLQVNhqkQToXMduqxvcFtXi7A6cuC3kcP4HDNuyd7amra727oYAhcmSbYq8BogA1KvfAdosd7GENJsZepawxzV",
  "key43": "2u7bShiCW9y7nT33VSK4XkyT4EdKo5dSsdjiZ4aXo21c4nfgEQTeUyQeuYYb1SPtNqHsjDjpoAFQbNHsHhhar7WH",
  "key44": "9jQJu8yF2TbJphjYxJZSgE4QSS7rk5JHRhEetB15GqycdnAdN47cdnDGaiBAtchGDRJLf5zwim58pAy6wbjZffA",
  "key45": "5kSvzzGwUiqCa9LSZZi7NGJskcoZVutdfNix41n1yCNrPcMTrv62yeHYXF15EwRjgZH3Jbg9ycBuyPp36YQPvH1t",
  "key46": "4Le9QVMmUhuVEFBBuTg4sWPhv5N4qnueqPkE98V82dofGr9tGxG2qgWKpyMxtYdgQTZkQJP9SMnjvhkDnMhbw2G1",
  "key47": "b9mGNFg4tuRARxmfCh8LvfDyJSEePtcC9VeXaaK9zR8N6t9UkWdXj6BZNPMXi8jLY2dpQqL6XFE5gTvQnsqWYLe",
  "key48": "JzdV5GaHBKWzLnmCtHGakvmPGxPNzGnHQtgfnziSxLsDgZtjfy9Yr96xbsnypHULVjbiQ8y8s1kxHhjjwsGVD2m",
  "key49": "3QEJEeoMt955jBiZVsmKrCDugEsnQ7RGeNo7kUntw2JsTpUgaKGixYbhYBBTpMS84UaWuKBDjUroba9z8jKKScyo"
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
