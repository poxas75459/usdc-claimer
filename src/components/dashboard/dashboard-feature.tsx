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
    "5jsxqjwnVrSzAbkWi9Cdcuom3W93iDxWj8MnxCRGUvHearz1jqTpUsqpTSKn84nYSK84D8k4KmEomdpBfDTHQhZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBMr5PUGguew21P1o1GrDrYpVzji3jU29BXSxuUMgnkk3pVn3QsDgwuxY9cKkTfoKdYBzinP7QL3d1chjUpDRbV",
  "key1": "3F3Kaq3WCDj8FRxojenS9L6duEPRJx4ZGnLNZvViiRhhBdgDdJmeVniszdX9ivjiWXfAeAi1fdiiVbBh3S9z4s36",
  "key2": "2W2YY61joYJ4JSsxRWW73LrxxhEs94QzWkJhvCoFkQGKRJSkuicKPyF1Q3iu5Mt8tNds3JMdnYE9NbMiUvpBdfHi",
  "key3": "L432AofBV6aVQdE7RGJu3zNEW5on9ab3gwTUWh5fiEUykrzjaRyd67HfnpJyxhggc55P3T4Nfb6v9GwmCLwG58t",
  "key4": "5rKqAFmgSfk8ZgmHeH8QhNENfXp5yhmQ2tiZyKK8nscrsGq6dpuwsZ3hyDwpQvq78ZJb5ZQ2H8PnTHTWm1HnVgEG",
  "key5": "XEqqzQSnKhFY6Yc7NZCQeB5TbR6CLfHg6hGLNnQpmUFixSDdnG8yvydzDaDjtKmRLNinyaqTkyADW2Qfc6TApic",
  "key6": "3tYNMUKbjKTGeUNBowx9o14ZZpwV4vKxKw2y1SaMryWQE46u9QPE29HsjLZXCMc7RMcMBcTWLrNn4QvC5dX745JS",
  "key7": "r1HoVvafTmTatypMnL38fh7nn3PF7HTxrAQw7XoDJEsSCz8dTvjWmsuPT1Ge2DYSGceA2tJ4dtf7ZcNPUPEmog8",
  "key8": "xLn9ChwhRi2h1JnpageARefXMtJLrDVMzCSny6ymQ1WCmkJyiS4GpZsRcjCn2pwbh2cr8HBLSTjMEVhGsDFwY7R",
  "key9": "m69X3SfKbS948TEMPZ6aNfBUGawKrrsB1NmnUpkD3Wy8sAXNqBxWgfs7kZxnauqjyMSKs7ehBGcdu6nZk4AHVNM",
  "key10": "4Hh7i4eTkQ1k4AMTJKz5GTuWaQHhBjkKnwmySdvupPLGfaamEukUrMVyAbEiR7KYRUA7xDuWQNLaVVmLtt6THYhE",
  "key11": "3jr4tieQZ3Eekuc3hPAve9Dr7Mje1pnYpez35KWQ4qfgY68hSvz7LqxPfRDvnU2MPti1qK7sewRVDSWmqVxnpxLQ",
  "key12": "3HhP1Vw8HA6ZFhBtXvADMoJmuTmyHsAQ4ybysZtSpoaBjyBdgbCpGTNLYdu4qtBmKFa7kp7KNET4QQaU6vwETgPz",
  "key13": "fMTymnF6iVJ5EtqMioen7roKcB6YTVnLu4ZK22Dn2gfw2dwGr69Xb3WLnwUXxnVMjQQqs2R5K31ttq8ounbzu2u",
  "key14": "4TqJ6xC9oXvHrKJfXM7fpg19UovcYmvW7hZGwnvEtXjAHBL2EzagHdRTNhaTE7jYDrYTqD9HydSLkX6Gkseh3GZH",
  "key15": "5ekHQ7V8xJA2upjUyQVTCBKgJmzSJQWsabvKGyb8zr1Uiiq66qK3mEuSKSZ42p7eU8bgEk2PQd9e4DyBcCtBa8JR",
  "key16": "399u5ZZPrLEL3Vyz2M4bfdMbjemew5DW8YZVtE7RPsMCpexRH1coxbXFvGDrXdy39eoCSik5e4m9f1xpNk2b3jmf",
  "key17": "5j1hbdnWL2nRtPhdifB9AhsXgkaN6nuWDXBjG3tfKJYf6VaUJZb92fDbXcJa51hS4D6fmeNJRdGyvbqLZvWaMaP",
  "key18": "3SDWYg2sgL4cpAkJ6Hxiq7k6UMRFbuUwMJSUpGLgkDq192rrv9F8WLfoPuBgxwR593qQvJekH98jC9inH6TEHnW1",
  "key19": "5H2Z8hM4gjkT8u7HJuHTMJK4f2eTQwifXwp3RHPcGYw4hLoB2EpT6CB8uMk5PqkvgMwkgYrsQ3VwaX8dF7yBXocm",
  "key20": "4dLkqbTwXU7VzJDwHpJ6CaTGprLBjCjddqdjW7wPAmgZULGM5q9bn5rHqCk486gfjbKr4a2USCkRRXdB2UVWMnXT",
  "key21": "58R7eTBGKyYBBRXPpZQXgiaU2ePjRnkGj6uNF6Zx3dQrXVEtBEAPZM4zuVhiWhKEQHaTMfe8kuTbV7WfKShHAFL5",
  "key22": "35DhRgTG1j7MUaJKtLEcy5yFBWvZsA5LXv8nJhTdS7fHH9PoTjU4s5jdijWVxoG8NbKFsvS8HQx9ofceog7zKUyh",
  "key23": "4bYwmeN6J6zXgathfWeNdDFkGfGZ31vJANwtMrRjKfZY5vDiTT2dGginGDsmh8ECEwYia3tUTYZbDqDpyJKWqb75",
  "key24": "3HzX85au75PWdxM6qr1GCGh44qRofifRex3pt3YXpBmPjwLSZjqdsfVYK2tHHHSsr6dmJmV2mtF5e8hDXKTerYz1",
  "key25": "2UQAfU71ZtSRXE7SD24mfWHLBTpV8Fsh63XXVQwVbLUo7X2hLCAjBqqDupc95fwJSU7YBh1EKHc87Dex4PJxVLLW",
  "key26": "7RgMy8psqvDanHDi5kcJw1wyAWTenM7RABpLB9S4VpWrYCH1zDxWXj2FkRA8qxLaX76fqzu7yJABaihbZ8coUje",
  "key27": "4RFGvM7j8Gngwnemdbw6pAUpGP2HAZn5kDWe7HaeJJ6UZ6GgnrFu7XFgDyT5q5Gjmm3rt6zvovL6id4RhJ443r2n",
  "key28": "4stGyzdDNeg9DEVWvdFR6DfzPB6AEiWuBssTeuriuwucjqsHkpZ81wy2JJZK2XUU5AV42JcMfH5dvGAdj6MGraCh",
  "key29": "Mykg9JtmHMzPMkGEK1H8GZYFrnNyU9rh7gCpZwjj7mRn9bdVpmyRzSdqe6uf6Mtf5T3rmPeUus5PH2tEbWRWUPz",
  "key30": "kYPuNCdkwAQkYauqPPMnpc7oDBzYxASAmvUDPWMGakSRYZb8Aor4hJP3Lhx1VxSijo4f48mT6Rtr3semLSyzzFx",
  "key31": "2WtqC1q9RsvDNZQWjpDLJ6UYrPx4WGJXZwzmBFNd8VuEEMgQjaqa8gHUmmW9V3KgaBtbfyGdeEgMreJF1Mr5oBaE",
  "key32": "4oXb7qDHyYGwqLtvcHdvURXJMWMm94GKmKK19Hc6wWoSTd7XRKqow1FzoKYncsSxoJ7psG86nXKELfMEVcARbSPy",
  "key33": "LJP4ULofZLUTSQkdjqSAY6StEGZrpzjMMCTz94ih4Yy7ue3FyUaUP8qLQ5NvNfZPm1j7u2VehTiaVAZgtJkun9k",
  "key34": "28bvmU7WVttm567ZJqxHrpXWReARsniG9FfwPdk6jcqs6wVzrzPZMESAe9odr4qc5QvSMuQSPjVdxYuVChfbQi9d",
  "key35": "2y9jEsJVynxN7LcSLTprpBtYarPCcUFznCQwSkB17cZ5JckcbYo1RekPxTFsqysQS63o2uUUR2TD7ncSMwh9yhmW"
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
