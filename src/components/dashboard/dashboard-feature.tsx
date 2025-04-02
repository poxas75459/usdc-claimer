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
    "yaXLBzrHmcMR8QjB65HeqEk1s5r8Xx8RtSETMX5817hACHZfurK8UxkZSL9dU63f3kLZZ8DBBpGp8PNTmpyQRHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MaKdrjz9TuFt54sQHEW4wtH4Y5KgD5e6QcqShwZNtrjAKXg9oDPKezp38YEX6hF7ZWjZdVPApTXi2xvAViCaB26",
  "key1": "5VE3w3bqidkJkzZ5bFk8JXwzy7qCW1s9S3dSaNtjCY44XZkuVbJXTUP5dpzdfjd7qdd7tGcQEGkm3FFvfgBMfiau",
  "key2": "3hRcez5zc47baHzQchGBwwpzYKnk4YT6GZJmwsWDx3NhqLRj3gf2f4RyEMsRk9HrbPL9LpsFxeLL2bgqXiYaM91S",
  "key3": "67XCfmzsR2zP3a9HpGM3kqpuYrJNTwWe5HduVxPdC9BEpEy6EFGtYnp8WXtpobEZMEPrgPiqRNCUXyFDdUe6roWB",
  "key4": "54HdHh8BZo3Sann9AJ7EaCk9WF4fMdrywxVy5LUWDy3Poy1VmxM3rtzjmZj4gNBorSGmbej12LD4pjjpLRnkjBkg",
  "key5": "4hcLasvp52DuUV3NGbNWKzVA7tkRSJYedPPJszTCktCPxYQFh8NnEyQAcmJvjoWmtmPEtbJ96N2XmA2kEgZyUxiR",
  "key6": "4WT86xNhiAo43kdwKqzpAn6QFFv8CvthGLgCbHZTHzDjNdvD7Ejv4hcwFCPi9QQFmEzJtpCbjrcsDiaTkDe8VwiG",
  "key7": "3tS8TM2PeNus5T1jEibavkUZxYcRAwQmCr78UUsc5oPW1PUrqyi2fnuXRy1c4wRtH3umRqdMevrbHkCXS2nwKtC8",
  "key8": "5zp3hfd4Xqhb1uWHG1gNpTeKkZ2m2wsTm75bFNSSmsN8VBNgDRanF8odsw9TXfFgxo2s63mo9mmMChfgdvFQLem4",
  "key9": "DKdEj171AwBDxpuY6FVfsgxsorQvWnYaRe5qs8fXY4gDwPVyRThvBxzBtvrhNf7XvFFSMBLVFyj97NtHwpuve3T",
  "key10": "631fpxURjvCcwqWDPPVismgeXzrnpLcPZTCUpg8yZUBRTTtAoV6p42aP3We6ZnNQMCJQywWZAt7PNpZCcwRUjdYh",
  "key11": "3So3dfwqrUuBHcZXfkm7cZEdXa7jRSQduEfbqNX2MhYcGXhd6kuqQKYJDwg6onNBside4RcdvVa4BFD6gJuauGdN",
  "key12": "3zvgcGcFS3H6aq7AAQwDvK1mW7sASijXZWzoCzgswhuaLZXKVcoufda5EHGvbo3FdCo2XTcQAX8qwBXK2TCMM1uV",
  "key13": "5on2fDV9c5xBRxDcSv19QAUY8e1EpB5cWCNwkBU9LY21kAug94hUaeuqeZPN5zKkJNVLDq5mwic5pTzmmeNKZcWK",
  "key14": "56MyxvUSF2DGqzpUVnVLPyctPaetZbeQDzugfy4wbTfztUFfaeRvdpgYh3j7NJVTxLcY1W23o4E2imz2bZeEmHQe",
  "key15": "4vXyTVkQHGdqZWXFJk8GrGpyXTJEoXxkMMuo66D6GV6RSudYEU2DJYV1wM7W4qAfmtu8U98tZdsPRKNWbjUsD4rY",
  "key16": "2Rj2oK6y9sHiCcCUPozUKae4eqyewWrGvg7erW8FyeEjaHgZWR3VbLZwsUtAfo1EK6GuxFmehcwLU5QAaEqDwusi",
  "key17": "45hWtm4LnVeLNYUUYHthaXmPg3zmVkS1V5EdeBp1t3bcegbJcgtzmNojfE991WAgWoxnSGt1Z84KFQ8PAgrr8u72",
  "key18": "5EoiNYTQ9J3ZteJ1xVT1qAJ1dviFyxDtkrSzApxX9aQhhx6HeyqBqquCk3bvL2Cyhsb66QHkdcQ8yD9xs5D1TUBe",
  "key19": "4TYZiVLZ7k5Di2yJAas3p7DvM5Vy31ywgBGDkvWt1JGvhfsrkeBKWykWw5pGJo6YuFa1RKZ3K14E4h6bzCm1gnst",
  "key20": "ntzK8DLWfmjTMAt6iPrcYuAUNwdQMLeW5P3jCKw7JAccnRVrQ3wL6cnHDTKX4pgL6Vug5jJ16gztNxtT3pnshKs",
  "key21": "5KGinuZtafD5fRUUYU6PWZih7HMGmcUPJnJKDXVxff5vffYBira27WqJTp2XuGFajiMCiLKJ6UKMYgkHmMvZUH3A",
  "key22": "4ZdbmLyx4cMjHX1RsvgGWzeAc7tooHeUzqPGPMfyXBmwTx2A8K79YA8wFYqA4oc1E1HF6x43ZM1F46JQfJYtJpZj",
  "key23": "26vZho3FCZ5jpsWUUjvLCc3RvNjuFVVUAV6YCrd4a5iDpeo2m4YGRqPT4uLZnkdvL37F5jnvnCV7qWFqYvRLzQaP",
  "key24": "23xfwuZCGc74HHFfSEW8Um3GUxyZ6h3q5KCUJZDNFkNdpLw1UUkkpXaVRsEcTShJC3yEjN9buUeoc52d3UsWBTqs",
  "key25": "4RHx7Fkimt5y4CMCrnUZPS925LSnmrW5ZcyzRqjSx9YsCTWo19zs3v9xKYTXi9tGZ652jvdKjfsqMh47G5reYGoc",
  "key26": "vWYW1so8VGJyWd7Y25mALYqdqBzTdQ7BdL9LCyeNJzJda3pAyxgkYKjsSJV7L72C67ECtKFcgHwDzxXin9WqMv8",
  "key27": "3XwrfHKwkPypKeiy1EtPD37hdnkLWcmpM75hAtBgjN8qBPFnKjr8WvPYk5yf2i3XVW3Lzf8An6WmHN31JWffooLE",
  "key28": "3iotJW5cgD73o3WqVDbvmxubSEsiXQPH29LkdHgSE26WvCMXMjjoADaTGpTBTs5gx9BkHkdXLBH5ZB4HiEshU1ZV",
  "key29": "3pc9sD7gE8o92EoaSy7EHVaX7fF8vSNUwWRzefVFWrFakivUtWqZPxmfJQHeUhR8jxy75ws1VS2FrCvSHSb8M2gK",
  "key30": "yKiiWAaQhsP9y7p2fhGkbUoqGZfFU5tcFfCpdXEAnEcMHiQtAJZZ9yL9ULfamBAod9ujbcptLawPU3BLSRTHSHH",
  "key31": "4QbYrvTomW8mFZomGvDUQf3S6Vgbz6QvfHHXHGd8F1Z7oB3WDXZdJV4pvicUuchkmrgt8kDQyxi9XuKA9wZemUSb",
  "key32": "2QKfU3cDrXXYq6fHXZXpYchqb7EFE9Krqp6KaLrxrBJ9bwLqHChLzqJWBRxncN7LWeBHggkLvxRr1g4UtyqJNKoF",
  "key33": "2Bkqpw65muA7xUKqfopkSEoMkj9gQiXMnHpks13k25Nw3GMaojREUHNhV2apD3MEwDuFYAyhb4DyxBvS65wa5rUU",
  "key34": "2Vay2TRcXzyJzNHsk6cinfjARAJN6D8uyhGyGjyDH4vKjvB8rEjU9Reh7brfqhexTWbz2d5LRHbjY18rLVRcGyPQ",
  "key35": "2wevgk6sicM9xVNfyoimYZiaEdYXdm8rWw1Th6CJE4BoFLiPEk8HipYYs6uccD3Csg4Xx8jq5q2VGArky73VyrgQ",
  "key36": "43a63qoHtAyrR9zFCBB8PrAdkM8rc7nPVh47BDMGTkxpGoYSgu4HHwMDQpNnS9s7gwVtVQa2uLnz6UKGGt343QGa",
  "key37": "bChVWYvTaSY5ignG1igRFZVn6nYRTsjvSrJzcDdKYqoDZKJqUdXo3AMfHBWgkKkZk7J46hCnD5TtrE8bKsaeGMz",
  "key38": "2BAUEYhXKGkKUQRfaaw8kVVDFALmaXT6irzmx5zP1vHGhQQzNMvTWM6b5iuJzmDpwBCKjzyycTdpqfhYX3AktSvm",
  "key39": "2caoQPejsXfGJW5p8wwKNBpnnQLUiGbPQh8qRAtNk2kFm5HsLLEPwhesHDFAd2bnhzG1gJwCawpQkqGFyqTk8Bxz",
  "key40": "3GWmW5S43gKmxwb9RtKvfXccbJKCve5HZEAeCmKCbk95SJFTZ9UMe1DEhDwKjc1zGH49p5P19QL2bH29b9snF5C6",
  "key41": "2kfzAQAsiYqd23LfSd48jPYMfiWDRSGa7VEqg9SvWpvBUcaEFrDmdm3VaaiGU7vyarm2kb5vUjCUwUfRDA45pZWp",
  "key42": "3nxL19g3hRd8LFYaRYBJrW84FL4tQQqsJXwX9AGZhXGGUwjpd6gxNVz4PYaLHNVVuisxT5nAjrAfwdbADYs6JfUi"
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
