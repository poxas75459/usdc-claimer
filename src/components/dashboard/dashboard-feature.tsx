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
    "kxVVYRXWtV8hsdmMAr1Xq1Wn6QWuyJQpr2X589ZecXZ6KYRC8bC3fbvjdCBbHSSAeQg6xTuspAjEgGcF3zcW4eJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Esw63zSrZxuty6bcAuDz3GEF2ftTtzquP8QXrkBThimjsrh7TnjwGE7vyv13EYwho1d5hmvg8FuvBN8sCS2YWcV",
  "key1": "4a4PgAEdLvSLiud4XE2NVyfqCzfF2JN8uB7BYFsfXpNQioLqM3GWrEgEbedATQXQLGGT4yHRyR6LNfd1DTnCwokM",
  "key2": "3LYdxvBaRVCom8raphV71Zx8XopX2peLbGC6VezGxPUwCVtSsx2nrYzo6Ukr9EvjdFJuGmLunP7Vpby42R2hbC7h",
  "key3": "vHSHALNCJZDq4qRhAf4U5eyPtWxBm2TQrHUa9txGCE8Gen5L3obm3kj8hPGFeArhwTsbCQ4ZB4qNwmyQnrdrvSy",
  "key4": "4atdqJiUgH8Mme4tQJqTnHuHcQnwjiFaHHa7HgoTRc7j2HjckHG3s5R3rP3PTgkD76vYHThxN9jBmVJCDGLuhNzN",
  "key5": "5hiHcoMc3Lz4pkpDAAkWuy6bvSQd28gV1WYfpPx98Jb4Df8reRaf4sm7E1NuBRrjMCDwZcaq5fmjwZMJsA7W3scZ",
  "key6": "5k5VMqcvvsfZtRmRi4ENYJFzorbDh1qKC7kbHzhkQQoSVEp6iZBkSSkxLZAcjSjgD5mrSDTr66cj3atK1NUt4NMK",
  "key7": "24vdVBFTad6VSCbrC2ci5V6jVpFffzvwieVNtiAa5m7cqPTBA88bEEnXUDuNSfkzQLFcPVJ8iRCPFw8TnRzcwev1",
  "key8": "5APppQyoFVHfGQYbYGW7EjsrgfGPJVJhgnCxdyjMmSA2NVtHm38F7tPEdC1SmohosjBhNYgm99GDkYFoFLEusRo9",
  "key9": "2PGQMR7kntZdiFa7v1feb2YMBH5VcsTc7dZA6GbGqv8MHK8wZhNsRqJCZrtp1iya7U6hpPSpgJidKB2TtqrpeEGt",
  "key10": "61566VBdsWU4H5oWtr9UTgTQbWiedyv2rCxCxvjabrQ52pMv4RbyjNahYbKQj8VYrFkgiUmgZJ4RGZWZzkJKuJZR",
  "key11": "48c5g5vB6UTk8mxXtiFjfLF6HJWrz1tqbqmgayhw7oC13d5shGkcjgyEKZ2u6YdCB7BjEnNvS7giuxKtPopVVNJ3",
  "key12": "cnCA3qyLTMMfkXB1jAKbZCkHWdoXarKFnVM7svD269S61hNXpievfZ5ALymka4XwGrA7iNLyjv4yGE5skGMgsXZ",
  "key13": "4GND7aAJ2JDqpMx1JXY1E4qEhrfN557oep6wCb2FNCve6Hw6CrHjTnVA7B2mKqfT2zci97Nj5FbDssitMb1qHchJ",
  "key14": "3k13hmArRkv1sHAACwTCpmQt4vuhqEtD7bVwLPxArKgB2UL3qeRXsemYzYPNPfJTCUAr6zjyt7NVbTPinLhQrLPv",
  "key15": "fPpy7L1opgZcPUeo2YBycu4PUgq33CS5TKYP5JhbSLFci5F2DkLyMi3iXvWBu6Z7XwNk1KzVZRtQYxqFiTMCsx6",
  "key16": "4dsXA8RfJMBFEk4qCkzB7hEqmYLp2Hwe8ynPavy8EEBomiMqp1JgqBNrtFDhmLZHvWy1Z9cNmMb9Axb1tgD1uGU",
  "key17": "2WBfrRV9F13xgeJ71UneANzoQUo2Cgj5bECmnn7cB1na6Q1ASYEHQ3fUmVJdU6tip1NAAfk4GC5zVxwkKfAe3EPD",
  "key18": "5Stfy1J3Rro3LUSK3Xc7J9tY8hcRMxGHfG5V4Zvhf8Q5LFHMyxAtnt2rPfwf7eDwf1XCUmSjRMhRnUNnQKnDCWdQ",
  "key19": "5vdvGXJtwxvww1AR9dEX8kvXEVQd7jeSKdAFW8jTgZzb8srz4YdntKFkWcPy2UT6zx1ha4pLfAeTGiiCCnZe6bKV",
  "key20": "utkrkd6MjpSLY3RHCibGw4WoqN3qWXQ3XtKgNAK7KGmuoehgbh5sgPBURDrzUcw7H6Uh9cBkGJ6JRLm6gtakQsC",
  "key21": "3zPyMvLfoEWqA6xnYgpHmk831robeWJgUrMHr1bspzDEB3VRRScopKHVtEARazNbMWL7eo6vP271H7KPj4xpi5wW",
  "key22": "3cArUJY5rwFQpnW2mGqFoTiKEDfu8eGj2ieXCwaMdwyUb5AtPtaoJevoZc5XhGSUkNVRwFKWeUZHbweBqXCVNNME",
  "key23": "5zphrXXAfu6Q1ac4K24DLf6oXsU6o2dkPXu3StvuMGF3q89xgqX1ShXN7mZdjTTsHFM15WdsbULrG3jny1z5KeXR",
  "key24": "3AjvhNM4MQYFPf4ZMtuZaUU2dskciKSAPrpM4aZR5qCe7ZK27woDxDDPSxuMXwF4QqdA9aSPif1qgHjysQTbp4XN",
  "key25": "5gLWL6jmSs5ebV5nGyt5cenwyzRMog84aLCV3LUP8PNGJDMpbSP6ecS3bZJKDzaxu9QfMwwUjcHmvukiExhd1hqP",
  "key26": "YeHY21EmBeMPoMHiWkiRb5dSDn7c8zBj532SFqXouxnUjzurmS5iT3GptkyaWQqWNJmSGpRanFZzk5uzrBBEzCh",
  "key27": "4ZogjBsPfhc7owpAfasQsPy53CNvP1vUZtDdJhB5BdfRLgYVtP4idLe2Fmn39VT3xPjwfUpVrhb4PeYZRq8qPwHJ",
  "key28": "4gxjjRub8rYerRscG2A681PsxqxdkhAm2AmCfWRZiNKEprU3whtbXFa7wVKhyb2Xe6tkisWTtrku6rnY55fyEemA",
  "key29": "5QnikpwKJc2LjRqX72SxLQHbasHhUzG8D5Jn9stwU34RufFM1oxF9yV56Hf7i2kfdyhFkh2fnL5E7vzt3thz1C4H",
  "key30": "Ezz6c3KgET89W76bd9bcVUXKtPLYHbAUxYRyWVxWKKEURmMqaifJ9f1wvWJXnk1uDXKGSVdfczeGbzdcNeiEk67",
  "key31": "2jCCeKJwHKXAfn3z6Q2sKDADnA5Pgm6QiccA1ndSXkhUbWxpRSaE3jBa2FDGktv9B2q7r2FKz8RsHjKNW7LR85pk",
  "key32": "44apTCG16u4ZVLEmroPynNAqCm8ddTeMTe2BGpEcC6HmYiPsaaZwgcos3G7yXcUKzN1UcgxdJCzxonMqSdHR7Xdd",
  "key33": "5WBBAdxum7PP2y21mfQVxCeuMX1kTLg13oonQDyUUof7h5W2tJjUGfeT1TSpUX6mZ9PXVMHsq2ayJGHt6Vugans8",
  "key34": "3B8c2XpBRRPGZ1H7Enaf9PkzGMNTi1kZ8DaJiXm2oKqh8Gureccj3h7rAYnvibSpHSVEpWYZvdZfGxQHh5NVcKAz",
  "key35": "2NWgqtTjRwpmvTCGc7AvBD7HsiuEkUemieK2VN4H1Zgh6PtBysQRJj7715pY1LkUMKe7v1ZUJMAasuiJuYoPqNuz",
  "key36": "2A3gxUvzh1VLu18AiNsY7ig44qLkfBouaEa9zHW3MBFjaQQF2sXQG8z5AEDFpuMZjaDbFCkWeTFvR88KKxiY9nr1",
  "key37": "5fcC9F3k5pxtNXBstcUX5eWoTKUnVg4KY9uLnMou6uP8PWMurTuFcGQnnkieMPWYYuyzVuXX7WbtFreNMw4H7bh",
  "key38": "4rQ4nA6GYskePW2izMExDcQR1ZuLFHJ4Z6KCiMiS5wUVdHoH5sJym4by59eva2JkUj6qEunZRXwn9uH23JZfkNoL"
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
