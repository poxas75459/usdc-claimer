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
    "5mKjbZLYzBG2xjjvA9wWfh56Wkdd6AEjNwTJ1Pi8vFZPrU5kN7rfH1QAN1HFR9uGuLk74o4T2throRZr8n4zi51m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6MFrmoEg9kVtpZD66QmHhrQb3wNKrsinvEucHJNAbrAVZVCHr6f8XrkjBHePWCSc5J1zq9CMnN4TfFVrSn6Hd9",
  "key1": "4iQNw49RgEp91WXf1aKkKq5Mhtd63zkr8eZ8axNfQLWyT3M1BJa5fqsiCEQ8LbyJEkuCHysmFivWNfg3vV9QZVRm",
  "key2": "3YNPaZGcStcadiBPthwmqgtXZ18KGY5FYR5n1gMXZxMbjFBJAFfAgttkS5QDuk6EHEU6crjL9xhBYqpSJp3JSAfQ",
  "key3": "3TnLfRnnU9gg2q8h2RKh1kzAFHndjYMaxusE3V5k2pU7uztgZVanzNP8VLXXjtGoSXo1Dwb5dLMM6N21qvzwFCEU",
  "key4": "4SiRgGZmUtAirDBANRQfiGmL1hbf6zRmdR5kr8QrWbxVqfWWn3dwxJ2pxva7zYN3CJb7X2biwuKi7w3qTFVzKu2f",
  "key5": "4qf3LyMB7CNpYch73kgPiWsZTHqHNSP31g8Ddk655nXLpvvjWNvhb9ntP6iEiywvhBvV47vwoVjeY2PYwX1oeZnt",
  "key6": "2WAoHU9c1MLq7aQJTuzWR752VuabxwXHF8PYQzpZYqdZBU6yLTFbdUDTFamkk2uErgmY2SbeYPqoxbYzmUKJ1xkg",
  "key7": "2za4DeBtw283aLKv9B2WNDCjvsE59Z4yeF59LzDZ9vJAsQsENZBxZsLso5HT2CzYvPpbemLQCFrnMErM7VMZfppG",
  "key8": "4hGcQrJVqQSU2mEuRqF1f9osfnZPLu6Rtbqpq58GEFUrqV6dRwmDAoafn8keXKfLNfppfrnGCzuY7Sjp7K9yGvQH",
  "key9": "33Yw7B3tdhUEkAssSpf2tjE42m1TyFZkkDhHQ7GRR8iWKSp7HPaL9Q8d3hF85Xoj2syX541rExtdHDwuV38ftheY",
  "key10": "2EZrAzoxmBXRQ4cAegfRotdN49H2DK4FgLbavZx8QLjjzb579UkuX3yivpgVVER7zCzcmp8Mn6wTfdTY6BCyPw5M",
  "key11": "3gbMpouZ5VCCc21yHAG2MsH5aFULzp2oaQ8ZKcuXwzjhHhAmLVTNzpmv6aFhuuKBaESS9Tfck4VrqYeeQmsbTknR",
  "key12": "4sywQNKo2KZpZCeym5KpUETPfNPw1uu4JnpWJogpoPH9WcECAXafqR5UtJcpaAoRcLcDYDWD9fgUQ4JjFqHEaPCD",
  "key13": "3szsY9V2c2VxuGEysScacLixQ44wpnEk8D5sgjMqiiDna2DbJpAW15o61PGSoWeyqtJr5Dd3C4YbT2cMSVMsK8fg",
  "key14": "4HTLTfyXQrCYRkqi9omdWQddBnXc3K8muc8uTqtHto5kPppaXN3c7qd65vd6Mt4221UHMM188Vtoq2p8osZ64m97",
  "key15": "BSFkyTzz9wbZWdDfTyj7B6yrrRfM8B7jJiE6Q8He5MLbBuLeBTPZazwff66ZtuZ8XmPfRykuedf9tsjaV3Qc5Xb",
  "key16": "5cfVDRtpgNhocsNZn58VCi1MetiaWyjVs7hmyFezbmFryMvfDWjP8f7VJRRHqH3mGTTF9Gk2NDYwLCsC355WUkrN",
  "key17": "4UoVCzK6eZKHT47YyQRFEn3CsaxXKVVC3V39mi7UFNeMNx2yq2XAkUNRzGDJC4Xvk4tsnnA7wWtog4e4t2e6zTwb",
  "key18": "3vKhyXzXrvezYJW1qfd2oefh7AQf17jsLmuoo44h4g2JUEMpjiXxrPds2RJoBJkXQTGfk7qFJrWyKmCKL5tbFUXW",
  "key19": "49oAstMwd4Kbzmri7Nu4t35uJb8GzHQ6rbH4QJXiZZdsSoxNiCz9revogieEt8xKBiuJNLnYcdtHZceN3Uo4Ah8U",
  "key20": "prHnKgRJv9bxbHY3q2u2kEgKnJTiLkQ6yMa5g1YBTryfug9Yjij4u4fi8XYRvnHGcb7MuS2Tqn6XkLgD2Tx1WvV",
  "key21": "2JD1rLnQ8pKhhMH34p4yQCbrovQytDg6ZTgRfsaj6bFJVeyPjbbZddKxaSYdgAHP63gHmZYZhombNDnVtBdFnmiW",
  "key22": "4rcjw9RJDoSiWJfRtYJYWXP7jgKpJARC1bARQsW9HrZojg1CAtjx7dadzwcdVzJQchJwNu42XZBs1usFzdyK7YWU",
  "key23": "3ckNVUwXrSa9BhpVVibQKr1rDJR4brmNmHw6KmNtVR1sWUHiUyT68JobgUHKiKbQgRzdZy7LJdVdNd7N7Z9mrQEY",
  "key24": "3QG4z4pFDomhXcWafhpWRs4RVjEFuV8KPBKuUJsN2YZhfeoCDhoXRXQNEkQjjCjNCiYzyUE6ajfwUCP8XxMu5i55",
  "key25": "2G79zQBNtrxsJw5oDdnD6aTXQC137SARWmUt3iFTmvutKoBJyhcFCy6D35zShcXZCxo1k47VRXJcK2DXRUoYnZpB",
  "key26": "1qK5VNc4iBV7VL65BLn3z28HCXEfaffKjFbmVd6knU4oVPgAxPiNfypYtqTaWwvMU76KVB14KJsL5W9QjFJcWDU",
  "key27": "E1MohvU4A6wSWCAk94XQjVo4HJ8Xnyhzp9gUeUcwtfNPexYwKab7h3ytzfGPMWnR4MVHm3CYEMzhGbjAXu7hyEa",
  "key28": "4rFy2YYgGiL7UaRPUgSu8HsfUxJ8XEp14HUh3NWm8ui9XKB5AZ59dn9efKDuA2pJt5UJmd45hf6hNDkFiwxa8JSo",
  "key29": "4hNcLt5RXBV3bjbiryG91zgcvvbdbuZAvkh8paBmCqyfyufgViBtdSdofAdrzu6fEeUuvBDEwMopuiyeuebePK2z",
  "key30": "339SuCpHEAfZNqXmGTCRnVVCXhedfUfbk3fZVPy6YRto56sCMT2KoUa3hRidNHQTrS23B4NZ4kD4UvW3ZTajKLEa",
  "key31": "38QeiVPWEJdgTy8VdJ7WJ9G8bKhyP6MWYWmk1rASVT1tKbS1tGwJMHGJWpepqrPTHa4ahfojMAxE1BJZocJiYAZY",
  "key32": "4FdToqjeCagdpmiBWmEFRVqdypUi2sktFxGxq6d2s9W5SuknQcUTJ9JK9RZmEpuQgysWQpvE9a71HBWWkHjqTmGV",
  "key33": "pFHRGkzmrAtW23SiyWy8sKZYVtZq7E9GXHAnnimcTWFDXG2oL6K4M2r3yJJ6EvB51xVp3WG1gj9XZy8b1NHy13y",
  "key34": "MDvKybmM246RVqV163r9EjSwsp8Ro1UjjHhptJbHWAAEvux2nB9tKUoy7eejMPyF2knfhHCKehYsK2jiKcqJFYz",
  "key35": "3CDVkYfzBg2wjjXFHN6KSzgsp3gtZEFF6QCMsb87Xeb7BAHcWLvstvdi21oZvMigPjwKCRm2kUcayEtHyyGSS4wu",
  "key36": "2N7En4NWk1XnHMrcsPr2NDnjecyPHdLUTD6366kLFjHGg1QYAWbhWnSYbcmzoSnSpEqjKPk5cXipJpdZSFYGSjhq",
  "key37": "2nHBsY4gHy1p1jxJZ86YXh6K7EdKByov5PBVoAt8TqTX4hcz9maxt6jpqirARUVw6r1TsSjETwQKCx3vS9oBTnLy",
  "key38": "3P2LwkbQwUJsVrnnmUM2aQ6LG2ZmXq7DddeN7RhzSV8P5bTC54mxKTnLK7ygjCrFSGaJRE2ibV5mHaixXfk4udw4",
  "key39": "4CPPS5gg1JT3UPJEyNERvAP82HAk9fm4733orqxRauz21AFBdn3BmX9LK4h6JjJi6d14nb5W4AniNmvzpL3AjZxv",
  "key40": "5vtHuEu5u1BDU37z7Ef9semEbYLHn4JucXgR9DFrsZ6tr8KLFCgQsiHagKx3tGrgVK72KfU5GyVAVRvkRfcXZzNT",
  "key41": "2961AzyG1rpd5ML3hMyQ4i5aN3BiH9mCYirviLmACyoyojWFF8KpEBc9fEmL7ioySJqJGs84xNA4jaCrCizwCjtf",
  "key42": "45LdiYRTVwa33zWtd7JXgRJUgYGZyJd3v3TwFSkqMTbd3eJz3YQY54D5mWL7y36m7fNCnkXZgvyqwzGYFynuS4M4",
  "key43": "ie3dZjTg4Ex2U1SAhudGVhWsLKEtuTY8oz5EimqFe446XRs76BvD5WDLM88KEcTXA3HitL7WhmZsy7pc8Fwyksi",
  "key44": "3GW2UZLLscAmF66qc7g8EiaJhA4hNZjD3Vxjdozo8bmYWnGco542ZCAf4g9X5Y2AM5ciErrYQRVEkLTyiqV7GmE7",
  "key45": "3jGEJLXup7nzTRMBsRD2yMDSXj3A8sQy7ZbSatZQzoLwPVnrj1TGhkN6NFeMDuWa2ZuNELdshY1BJJsAeuByqjvY",
  "key46": "3qdJccQ7atXJDjpEgUeuZ7dZc5scFgvZwf6rGw4qWgfhQAFnQkaH1MirqiR1ZttyxKWi9WXznX2UqUUtBhwqw1W5"
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
