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
    "4Lm2EbKbqHFbSEeUDZu19Eotgy1DBLtbPzWExwiomf2FUHZ3iUqFGXmoW6qWCyPcZy1N7QEvCwvnrJiiYtSzMs7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqC7XxfpRHs6YNJNHRkjDWRhqT87uz94UGThPtW1KBN1AGo1zu24uZhUGJ3FD5K5Xpuv3NBvxiAwFfB1miKhpW1",
  "key1": "5Vyk7W5EoHLTMtNSntWfZvPN7iqjvTJw6bXrECb7pWMAV358XkxvC5myFUnpiKukPFefS8cnqND8adSxgopfJajo",
  "key2": "36zwERhz8FN8U7A4vDuQJTah1fyJVNeBwefR9jZvPQR3SdyhTcPcN1e1yxwhpxLkbzwUWdGdEFMwhHDxUzFqPWVa",
  "key3": "Wrk25MHyExYCQ7HG6XS1UHuEFQnjJ3HT7eZBJKQ8J2iSrEE7BE6pGod2HJ74TVqA7AJERdyj2C2WirBQJHKnERT",
  "key4": "epeQ1ZovcUCho6q6ZVP6m3oP7jfeUY1aojJMVkjHLRfBDxM4rhnBHUtkPYxCWN4nef5v3z46NEFedLytTFfiALZ",
  "key5": "4zsgD3S89t16YToj5CaKNJ3U2w4nkNNAgAeqJ2bYjr8hMg7AnnXnaqTAwCYYwUad62uTA3gSmLHkDdbATjDpwQz9",
  "key6": "5GmerS892P7ZvfFnD74e4UeyxirUQ11JQjkQpX3dhA9W8BNr9GNHzyrsHQy6bPLWPnE6LTyBTyFgBykrrq5HsJTe",
  "key7": "3Kz4PbjMAGoPwY9F6mvyiB4hnH8zGm3867UtVvZezpckkaejyFy54aptqAUUxQXTZQvHhdqzBPyYqNGDKYGdCahX",
  "key8": "42veq2T2vkg7D7n8cQkjwpb2nZpC67j8qTPzksdxjKW6QHF6efh7anA8ZpFuRCuzMoorji2zuMRHQYBpkfUweega",
  "key9": "35bwyQYPJ1Ez2mPfJZQS4RXXhjCaHNo8btNwuLPbi2MoB3EpS5MMXyxpUCTXvK6C5uW9P23QdznsBDghqGYcJ7M1",
  "key10": "5DzCAPZioLmWWMnXMPrq6NNT1GjsXrJwnef6kz9cqMzr86KQkqsqEzky7Rxwn3jm4B2Fj9dnFfPwLiRCfp4U2T1X",
  "key11": "eocH69mfqacXC2kUuAvtyTsEWqEHQ63BHzDMD7Xp7CPJQkMTWAbk3ToGuRXZTLoJwnBw8jcV7jddGq9oTarFY5z",
  "key12": "3DcgdWTcvjjo4eqwQ5VzxjzuT61fmhKxCsgQ7rBUjs9tYHUCSXYF8zxUdYyuRpqZQkRi8x5QBChF29PBWxLv74e7",
  "key13": "LbgKEJN3so1bzV9yj65Nm2eszkXxAec3HxAZi3QHDQGmpXgCFnjX9cJNFkN3PJRht79yNq5d9FezDB9hMp9X2vp",
  "key14": "4aPSyfre4k8J1gQPsWC4yEvEMaDCXxTjQoMgHDRTq3Qxs7xK9KQWn7es5HnyXFLH5h79HQZF2azD5R3gT9B2hkRi",
  "key15": "J4TBdpzsBcUWBnAjLkJxc1fWCDMLdPnMUXf12d8vegbo8zMczQGjpZVnjhKgLWPuYfMsGzSPURt6L63e8GeLHYJ",
  "key16": "4n126TejtPKNMGLwKjuiEK8mhcy29RFaPDTBj3yFr3b8NuJjtef5dYb9MtpZdZaT6pdyFmhn1nmt8Hzs8P4mJWMH",
  "key17": "4S9jQPxFSNVdDRzSpXkHCsjc9A56QbtAjjVqCoKFLdT7G7SrGRdqfQQWd6xTxXHEHh3TTTzvTMDKoUGcVUtqJFVW",
  "key18": "3RbrTWNKspXKVu5CpxBHoRBt4RWpKbmH82jSRDeCxgrnNHfZDDJzK2hNy4Kob2ePDHyDATZmDGm8aeMD3qQjkZZC",
  "key19": "9guns6zmfj5wXB4XZf2mBvku8UNsPNzifhdBYTn2JXq9e9heymDBT3XpdRN9hr9rGDNPuH9KjtBRN7pG55wkbgu",
  "key20": "2vXN7WKBbMPUDDEu6SPk9zzbMegTEdLbbYoftvrZwcv2k7KgkPcZVcAQBHF95TvoLqYJGNCSjibGGsZPsbbYC5km",
  "key21": "5n9wircZggk2XEpzTRh5X9zHx69kkq3SfxAmyDa4CjmZbDLLCHECEAavp8qaFEnrLtyq2TChUyWNfruDVVkEXvFW",
  "key22": "3NHxw3tfEv82pTgqd9WpdvehXYvPtmF9PrxyytgKpWZ9EVBWuBP4fqWPfLw61ep2iK1gBQNMDKub8U6GeTYeAYVT",
  "key23": "4mHHtHY39GC8P2pEKVNTyV5tT1CXUPivavvJVxf3hAPoxq83bfXgth1DTTyUGHEdExtPU3SfH4EwdTy8jdnDQJDi",
  "key24": "59pqwyH9WFDCHSd8avU6ffDHYCgWdgowwWWT9mrmQusxH7CcAQr5cWEu2ecyW3qi6fVUN752PhK719B3sudWq5Ab",
  "key25": "5PjUDjEjkLQT6iU9GaSnNM4Qr2YNUcdgK7HeB5bq72LxG9XtSvMtrNiW2bAAYo7pkEATM3HzxN9vHp1UxsjXKBgy",
  "key26": "2o21Wt4pmiKUubRgqfke4bA26UyweGSnjVeQG1N4z8zHqBpVgodDobwTdcxVPpGdaovKBhFscdEtnEYgeCN42rT2",
  "key27": "2kUozrXc3hf2FGML39sbLjz1nk5AX1b2aBV8j5xBHpDf4wFBAXGEZjeY7SSWK3mdMb5ryCoNbzGyN6ASf7JenVMT",
  "key28": "5YcrubxZisx4WvrJD3YZbpgW39djj626KkrFWePHg6M9uDexnoW62HkK3GbjTYNahMDMAEDAMeb7jEgX64md4t8E",
  "key29": "4cRagh3yUv2dgi5ZEesAKmr8gZYvNYzWfgDuhDVeGrWCmPfxDzNivnw1ZwJRCWC4ifGKM12JBgGongMH2t2oWpne",
  "key30": "4nvqh5mjvUDBzocmLwaoYR3jysRh8ZfFX5GLs1diH4eyMk3zooLAwuZ3HvJZHBxPCN9SszahFxJvUSy2JsR6xryT",
  "key31": "63i9tgxuzTEETTjHzhHhfQdHtx8cSCqbkqxk6KyW5fo3LrVEsGJeAnQdAW4VPLzWdRWKipXSUq8PKcb813cdpMJr",
  "key32": "3SddGtzZPV1MSARHv295viP93Bir5nw9TkJKjvdtnnREysemT7Yt931TofSWSipfKs2CKTd8ed8EMrpPBrwQm34V",
  "key33": "417s1kw8qoT4o6DKecPUY27WxqYb7vJZfuU3H6A6m9Y8aVxeAKyE5N2j9H7UvneEyZJvWN1PA5Mos4AQ3xRogbjf",
  "key34": "4Rc9jtuFppzSm23Z5Mc5g7jtpE36m3SaSB1B47ZfgEwrviCVLrYkGGiZsuNywvanJ2ToB8HkrRKNmRdPZV96cPsy",
  "key35": "3uehLzaJYdj3mUD1FHMXwCVjPysrpiqfLu1UL7chGo2STwo7dP6fLjxMp1QJQAnqxLgRgjHQzAqmkmBnw3Nc4Q3i",
  "key36": "2fKCFdTYAKM4b3Zda6py9HpsJJfZPT2MP32vQkyGfAsXZa2wta2tUyWxjAjMFQ3kyCABfof32mi5QqRUtuBUER4s",
  "key37": "4rpwA8V2AiYPsk5eiG11C39Va3yq6BRRjVr11CnMEL5Po3ZJhWbisCoEFwQdDtc6h2ZRfiaWHJFgyEUJ2CtUNtzi",
  "key38": "JBV9AhTahyz62LCoC6Gby3DUt6qoTYwRyRGy3RMQyaDJdEScVfWm1ZDqNwUdTupo3VyGkmdb3ciMRT3tLV37H4p",
  "key39": "3LVS8rMy1xBs8V5rVoKkyfBYxwWoH6WzuDmPPMDKCS27MzAnQtDr5GhWXmzsYppGCfdWH2fBBGTKDbCLAnkuH1jz",
  "key40": "2mJ8SRy77vMGLDYmPkz462iSsgturBwkcW4G9dUcMuiM988Ymxi4B6XSYtzq5o9wnYuuJR51Lb59ubNniRKRhuXC",
  "key41": "2fDhBWadJjsxiZLo9qBEP1xRNymHAYn4bArBE8npSAK7vSm3nPtHg3zhCbiZvmtk66n9LsszJVBfHNd7hj9Dar6U",
  "key42": "5RK5GY33AMfCeEdLzqJXps55vxappJXHWJzfQ44hUqJctV6DKxR2ZFjB9waNQ1xZFcezxpR8govziNhXDz2njzXZ",
  "key43": "2k4BAojh5qJ4tWEFJJguUbW8ekobBbQrwSW5PdWB9GjphCQKcuJu88o3fFRxYJvkKj4ffv9kc47Vh2AcayGm2As3",
  "key44": "4B7E6m8yXnYAKbY6tLYy8JSWmo8tCCdUP8J76UvV1NJwgNh2SQVNTbhxuw1iKFjuSGz6nHcG21zCuvLSxn3Mzsdz",
  "key45": "wRqBoigxK13uL53svmBHge6BKozon4aJSeg5psKdatZcXfiojtXxQojUBfAykXmT4VTrgYPrn5tNCEJcCpXaumu",
  "key46": "APNscjRGL6iNMmzD1UoZc4AmxfXGdC2r9Jij1k6Rzjg9e7JzoipX7EfwiknTpUjC748PejCbnL1c3tF6Fp5YMHe",
  "key47": "4R3PV9ne4Ah4cUF5vw3sjFNx8cEpLGoAHfsXajGrfgWaMbeLjLqoyX4y6QAQvf6aP7oCabUr8VqZYueMPNaHoxW",
  "key48": "5tSmmYqaUZwfK7H5Pvm14kfeM8mAarbUVSRCax5auMHXwNnu1sBisTqUkreMwkX97XR9q8qWifU2M6E67YaUicg2",
  "key49": "5CRWhkPdKQuYLtQX1aKhoJXDYX24eqiPwxmAgwyL2Aojn2mmixYEn5epu3eXxdg9gvBCk34YGxHbgy1sWiNMuDA3"
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
