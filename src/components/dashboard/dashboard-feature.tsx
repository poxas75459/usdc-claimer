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
    "nZQoWSAY2UopQbiHn9eSdj5dDUXxSR8zA4dDrffeNwVea6ELhrsa9jW3maFdwXJGDgg8Q5Zx7n4NtskKujdfnXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tt3EkfvevxTQQBjcmQLNjoYKKykaNM8gjdZHMKghFTiWMYQD4PhrtEytgB7gQ9v3u6tfUg6LWGUomoXg4kAGTKa",
  "key1": "4Lf7NZ7fAhjmwvtUdhnbwkJXwdQufQa6Cmwf6Dhc8VL7UBECgJ1m3uNx25z8jA8mpBB4AK13hSum3zZijeHykHRo",
  "key2": "2owVbvf3F8dLGy4A6sjZrT9iVpXLCwHVXyPpe4ifcQVfT3kM2422aKHSTcPMD1146hyMw1p5r8x52nLULoVrsnw8",
  "key3": "3P3Q3uQdNQw4MAEMtknaVy6rcCJEKNEuNZwzPNEu9TZ1UFBTyFa1wLSVtCTY4Dgo6NXXJfwNi8oGr5cPWWptQDk5",
  "key4": "YSfbnWhfMKLpMzajmLaPL4mnqPsdwrZAorBmEFhtX7LMvUNsu9onLWkCn56oFu2EWWi3QeQ7YAfcbqMXjGwzMqa",
  "key5": "2C2F3rKc4azZqBDFN4KVnfFoWH8szjXosetreT3f6J6itqP5hna4H61E2Fo37a4ohnnvnPghQx5w54ZLaeqaw3bS",
  "key6": "4j83ZBKCtjDHAu75z8UkWyAgri1PKPhZx6MGR6Kmo5XXrxeyhSL2q4iAfuudvmWNagsDBjUk7tYrXuM1c5LbM5PV",
  "key7": "2eH1VAzhGef9oUYfYEHCHAbybb249H1E1p9crQY7WPC6A1uv9N5ek7nNU6u4vgM9CTpKKNGfCq6NwKZViGSHKCCW",
  "key8": "8Y1zTZPJndZ9L6og4HGK45A9VHtsAHHEGQmxx4FmfySgozNYeeaREpFUBvs5QoubHUjeFovR4yqeqpqFqLtfPJf",
  "key9": "2Y5cmGiLeSwKmPa5HN9Aft2LkugMDFnWokgdSHr1Y8mMDXzvJES27tEd8iY1CjYxzSHqaxdQUxixv3jBf9T5p6qT",
  "key10": "4zGAY1TfoJHtd58sEgQz64KhB1WDoxkp2qhzx2zSpNtb5G4W4ivzgbMVvLZj88U78tNeUSqcb7aC1qSvea8tYf6N",
  "key11": "2JULcuRwbCHKmGeqqbsRpJ1XTrJVwQ27buFJ8a7BVBrvcEAw8jLoV1iJuozg6VCykbYBFyoUHF17ufP7xJMHqvzk",
  "key12": "3stC33rujn5t71e5V7zxGJK8DvPWUETxYbhntT4vkNcnZ7uKks8mgxNAKg9877y4V6c2Tef5b2WfJNRFtYKaMby7",
  "key13": "39xeAMRUkqoRTcEK1pPSiG2i2uUDXAymF27whbDrYuoL8RETqzYNeQTMLbvESpFfQvQZxfWhCWsRHRdwBVQFzLyk",
  "key14": "4UCTFXa7CtEWS4SYiVEamW9PKEpuRkFXN8K4FWZqdYMZ4Bv3nkbdDroAFeoULSqamqG6dahP82LcqFRg676Gy3oB",
  "key15": "iCj78H8bNjEiXZAZ36SNKssuonp3utNKKbuwACoNUhZgYDsR32qmGEMKq64TwNwSiJB5rgiGWVdUgtH4VGuivxU",
  "key16": "5LfEhMUyfqyhWPahQEyhNQ17TW3aJJAfBBUoDuhT1kBVY6Jf7ff8Fn6nvTz6WZnDYGFA9DGAvtjUFBfqmHyqZ8kG",
  "key17": "GUwv4hqiRiubiR89Bn9BSKM48oLMin3qaG6sinyabBL19YNzn4itNLCUd4kSpwwqwP4pX7D8CsneeL6UJ6wcwPh",
  "key18": "xQyPLtkNEgGtrhKDynWeXZB6q3iM4g6rpuWZVfRXcsUn8vhavDszXa9uxHKqVLDacYUEn9SF54gTD2J1BoB13Gd",
  "key19": "2SofqRHvVqwm9cVdkEVBunVPQKbXYbETLRWM7hV3R7WPWbnouWDVmznvELAt1wKKDxeUWswHzkRuHDYMB6Zj5iRs",
  "key20": "3NKX8rx2NxQE2DM27xs1isioENqZt7aTmCkepwWwyvArbU18k4Cw7BXyJiAM5z6n3z1uNcmYN2sSujKs79gxCZ2K",
  "key21": "54BVZR3SQwbXSLBSAhDNM7dyVdr13oUyyzVgkgeG4F5iec8bge9sZB6MXABhsUzatWUEbFJ9Smpj1NDusgKYCken",
  "key22": "5aFv9j1LkJ5jYJeUeatVexwb8mk3Wj7pdAjGS79engkU9M5YHFdBCTeVdd6n79mabjWhcjKEUG7jqBcqHzdRkdPb",
  "key23": "2tygt1bdZ4TrCp235wKw7of6HR25fiSVFuTR1VYm5GdinZoG6Pm8By43PN2aj6VkAJ8jNWWupQnfKz9ucQdFS49j",
  "key24": "3vFWaWdytt73HquarANwdoEjJdUbaAuTto2KhPz3NQkvgsSWBDuADi8kG4sbdaYNPDVJLLdPfzZ2Zjc1fN5nmim9",
  "key25": "4RffUEfaFDhujgH1Hi6hiRBvMEep9Hmu39BjAJzivrU6N5DaUwFfQ4srFC5cMSJ2EYsCrWNExvp7DfRvjEdQmcVk",
  "key26": "4yWGBkA72oMsHTAa6azUqLvpy1UmddDN8zdg8uVAAwU22ev7qJzwF89bcRfcRw6DDbLzbhx7QhGnDVTmFK7n7ofo",
  "key27": "2W4e8AYqRGB1cpHJVp3arH8mN6pCuQSMgQScddjsGeQguoH9paHbVv7PJhQVpUZ8X74nrFAJous9LoronCBkZNdG",
  "key28": "575ZDw8WKWwy5scnNV3jQnrDtDuxZhPXU5FKJoJMqLxmsRnUKL7oo67hRyEXZZga1Qfqp8xMjFaKonn8nZre7BR3",
  "key29": "dK8EKwx8vTjRThfgBTNfLRMaSM7S5QJhRyVkpufbz8G7pRMHhBYbHHtiAB7Qev7jRWwMbYTYbdv8xc2YwUjvd8R",
  "key30": "42kw1UU9TrAQV41xZoiag625CkdVZAQdS6bANw5ndMTcXK8qyikqnMEiQFdN6PJvND3wvoAeEQYXwnzdf8Sj8jBF",
  "key31": "3ZxJjPNLkVphEfbNoEVWpm2oLHddQyK4KX2CUFPN3sufpqT9PtGmCSUpLy74w8CNnqQu9AiZpec65nVGLNAZS9MN",
  "key32": "5uZCvG22teUhEQ9EHa8vVwadwBLJPVEXAgSQYEksKo9jgi1gnZKHhFv8kBNuMo9VKeWXuPD5k8vyGJ89549DsjdA",
  "key33": "nyi1wjC1hkWzG82yuxXntLmy8SZgujLKcaCuZxdyvqfdMxxRyunmzMWExW1g1iavbGduJ3cAikM6QZMvZdgmVeM",
  "key34": "5UuXvjx7JurgoUEXBVeQA9Fv9e8SeAkv2thw1CRjsWyBorx23voFC5Yq1iVrArsHGcxaAnzUVKMo8FVZVLUt2dK7",
  "key35": "5xM4HHLYyWyPXFrbFtjdHBeL1a5E8m5aJBoLGjGXewizqpF2VV4rhxDGHtENeRdFatnwLLzM3VehWBZVpKWVZsSz",
  "key36": "rA6KDX7tEQKEXwGdXA6MDxA6Yk9ZqXNBJ6qkK8cPPfR4c1x6bF8Y19GTkWawjSByLo8neAwPN7H6hHgsx7Gii9m",
  "key37": "4yeCzfTZyjABsirKunmA8bWjjuAshCG8gg6XEBZfvUjasaUbZLEoSL8ewXAQ5qCfybujrAQB7qt5ZcxuzYt4wpq5",
  "key38": "3dR5P85cas69hj3vcgM19noqufUwEBj41zbLTqovAx4VdFjp8HeyAmrhk5PDy2qkepPDK3pd6nK9nSnQfh8W7npx",
  "key39": "4gTCRoxTGBbUoYzKLAnVvskYUmb3Md4vzkDJt6RbogrxXt8Ly7eNoQFhqTKRzYBiCTgEpzVTT1Pajz4czQgAofJW",
  "key40": "QQ5h3UxNdytLUX7PZ2MNtV4Bxahj2QSuJNFoJnN8KhzxZX89ekaj3mZs79LApNPNNG11sNqpTHCj11N71qdTgQg",
  "key41": "4PiF3D16ZkdJGYuK47pmmjXwKzD65nrsDNZ3qJ9CbVnsnGcKT7qRVbSiq4sgWotsppYmdPAz24xan71EhySWNmrW",
  "key42": "eP9UkTasraWxqsTsMvxzdj2dqLVCgpo9ZJc3Ri72Zzgtt9birM1xc5bmmWQgnfmVtdpQ92jZ88zWwZkrWAiutEn",
  "key43": "P8eTa9xx8eNFEwhTQyeWy5KiXEVX8126tfPDKasCkLJYdaUwJ9ZBPQ3XEYNwrruJBU3aVoLs7S4qWyES5tdPiDA"
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
