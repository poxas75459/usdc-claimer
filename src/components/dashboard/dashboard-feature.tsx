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
    "3a6mhzrBkkYNUJfTn9mfuyc6PjQhgCNwNzQ6ohRiPVkw2LsuCi33m4igxXuz8ruAU89uQ728C9s6VbZN3t5q4DYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hL2KpgS2yQcMCuUbAphX6qAeAkXm7eSiPDX3PnDoR6ae5rg7uUZr6ceucrUa1zKf8t9Rk3Y8Cgn5da99K2PSWmE",
  "key1": "4GbLDJUAX2E1k7kKDPzAkTCvDpN58u6GCv1orytgABHUrjCPueG8VNUCB7haNLFJfsuMSkYTPTaDE6E44FMb2jPz",
  "key2": "2gK4CEvcaAqmmqA4NTbzuLcs79PonxEVS21EvRP4GxvYSGYSS84KnZwdLQfA45zmotWMFHe59femULVYLptpCeqT",
  "key3": "3tgwaKusXU96cKiHCKYPmoNPyqcDUfqRgJASnMfX1vsp7gG4QqABUwyLNcGC5kpP4gF9eF3pMh2kj9LqWy55BJmk",
  "key4": "5ciowUWc2zwCUoUsMcebFaJ5Lj5RLJncyoT8NzfRkWwYkRBpBkXMzvu624HKBJ427oMrH12ZMCD5sgx1zwB9DJ4n",
  "key5": "3nGr7QNydpbt3KfDEreqaYQhLDZaoDhuM5rvvvthiKeVaHsyXZjy7oAieAN1B413z3uyqKoEqBxHY6SGJE9Dw4FK",
  "key6": "4jLTtfVmqTdnV41CKVLud2WGZubhb579EBv5Dc4MykHDoX2DVbstbs8UnQ2j5eaHpesekzCdJA7HnTCZUgbJGuUG",
  "key7": "5Qwkn8ovRGsyeeoW6xcK4Qrs2pkwsEzbEmuuc2xAmqQ2LwTkBRL9A37mXtG4iyK6YbkvsPjRywomx1uLsKEaoy8U",
  "key8": "xUqqxHk7qJPQTTkb8X9RBTdoeaVGP4FQ7Mw7ocatHSB3LXMkJMyoXdzKjZzbtkq4wFZG34F7JrsM5KsAXDWSzVs",
  "key9": "4V3dj4QEg5aXxYQSxaawEZrQsnfsEJGK5YpyGTvUtS5KxzXiGnYaFqwVzkH4wxNi1c8VTkVx3brJJCC24PeEGkPf",
  "key10": "31q5NgEy9D8UuzuHRhBaNk6ZiBCQTVJoF6roGFQybdUYT6TvvxgqoELHQM1LQ6AT9uzYyiMcQSbEsN7xs5miyB4G",
  "key11": "TSfqci87KvEeWuwJweBng2bowfqrYUx5hsjbQDCcsU5TY5JhV7LdMyqSkJobmKfDATEhh74EDZd9qcuuhfBwDAy",
  "key12": "4EdHjKdrQN1EbNsX8yDW1tFJoTPxfc7UdCdKP69qQkw7zjD8xAzqfFsbAjqVbzPZGjkcEhFxk4itx18vbHUkbcvJ",
  "key13": "45wC6TnVXUrWfBfxyvpB7AA1Ryxj8AjV4xNZXaDCScSRxKMKWjW8Z92EKo5ZRyjY2Ei69htMqK3rxPYzov37irVf",
  "key14": "5X41hw7JNh71LnUqNVBzJxC1QGkbbrDhw2Ej3iGgkWzQrZDd6yKLtBkcgV4qYNKkspBG79mhG3YSKmq7UC7B6a4U",
  "key15": "3kVeXLZEpztjEtJWGzeFvuFXViC4mFkc69ETn14orN2aSBQN2T9W8fVsYoac4kLFwYcR3zuXuJCzGzoeCVj3ifuZ",
  "key16": "4JApdjb4m5TuyMx6mveKzRtz423z8hRffbxXbVGt8onLnJPj191rfuM5BtNt5bKkEKKPrwP45KxkmdxXWSwjGZmA",
  "key17": "4YS98R3PFr9S1wsP6Ub6rWZK1HmUGWxzm19AaQ6yE1MCtNkNdAGxrSrLAdHS7r9JB93jXrW4GMopRYWgBQHk3ABv",
  "key18": "2rPLZuZ3ixQZwXrvcvkdPeYCmrVyFnq8L4KfPJhsYkFVhX3HcRpYqu8TBijGRPYKk7rPz4Bm8Vt9JBZRFJ7JA5XH",
  "key19": "5e8pyQw3Sxdks8kzbynuGrLx2yNhzPyH6AHrmQixuzxLNAsa65uMhBcykyd8Aqma3NiJ547wA61umRHw3dAxTF7K",
  "key20": "63vcRjWd65tAY7LaRii83Wvb2SeoKpZ28QvSLkWMvPCnLwacF4gskwqB2gFvqDfwzhAihiH18PX1Nfh68D9TtmyF",
  "key21": "3g2ooVTAymndheXAbVNwa4WNaZGkbT2jJzVUFkCmWrT6WdgdReVavJPAzUwJyrq83L8ZFGDJJAupDbUTjB2thJ47",
  "key22": "2Tq4RKeGGF1tpewXFtv13yfBWui71MEciATA24Dx65j8HWSr6jSmdQcoF9NHdD3DDw91h8ohhvGuoVB5uoY7DdWj",
  "key23": "59UBD6BYdkQD5wCutLbT7trN3VrfiD64M71XwKD2o3ZbUgTfQyNRLV66J2BvAMLJ7ENw1DGqTU1Z7xoFnf6Qv8H2",
  "key24": "48Qfesuvbd5pit9UMndwmvyMUvaBE494P93RVau7LAvZKR7rgAwTdtGhwqEAayTXVPHHvCtFmnK5sT381wPq4pD3",
  "key25": "48bF7sMLrXjJmVTFHN2kV4cf5RknjSFkmqgxmkz9QdunPHM7Fm6VVwm8QHd8zwb4AYSobbHGJWfoj8Fy6BNx9uQ2",
  "key26": "564rwThxFwWvRFZof8Fz1A1oDamK6Qg5XAMvUUmAUizq44zoDJ163Tb9keiaqCYc319s9oEpx4G1hprTjbjQjHcF",
  "key27": "26uttjLFWCy4nj8Vky912ZopvHcpE8xkLSpG18BNCTdLw2LAq93stu5MwTzGQEjGvPDeDaDNfGTFKUJZiWYLFdxT",
  "key28": "3RTXnkipwvGhyDhrwq8vreMW5Ws7ebvkrX8p36pxZZ7xz9X1HX8dybFPFkKceVRa3cFrxs5Ngcz9as1MoLSbvGzX",
  "key29": "4Ta1jsuQSHD2bdG6uSy1u8Re947cuB3eQy6WcsczmZF73B78AnfFUcJk4ARbL75q8SRUsLPACpLDozYn67BV4Qyf",
  "key30": "Z7p7YyeoV1Ab1FPRC7WgTcLQ11abkHNzwSviCEuEvoggm8YFxfXn8gAAfHwfrNHsMmwyXAEqQC1rUwr47qa8igb",
  "key31": "2rkaugsS5VELjEACsYZ44TaLtxEhTus3HwdLGpFP6h6E3uFKiSrV92qicXQfSWuzkBfLN8Cd7wXDAKbo3qiG9ECG",
  "key32": "5ZRwKGYJ25gW6RzSqL2pMYYgDo3HLSFE8emGvuK6kTHfkex5Hi9is4XZhHkzvEtQpnX4G3XLbpXgMLYMJD1WHUHw",
  "key33": "2GkwX9gmcVyy1pijD5p57MAB2ZtzgGew6MAHarPGfXKC8oXkvK4ctW33FuhvUoatgM6wW7MPzCwfcDEWFcA7qZDr",
  "key34": "3oFTkWGqMG1saCuS5qmzNuKMLossxGuDdU5xpVuL7yTC6h5dnMhfekq3FpHiMxETCJsrDYXEE6JVpvU2LgPE3SzG",
  "key35": "3TyBAYzqtwNCDpQjKDV6PdHr1ftvBNnKtFPN89cHnFuWtWnKjoBCNGrf8x2rHwNm9LqJT1GkV8FnkGzwxY5qu2iJ",
  "key36": "ZqFM8XeAURAFuHr6UfWBKrFXb3usUutCNVtaaV1Um7Cjjqf2bVFR3rECGwDms1EfJ916NGSL1xUz2hRmF2PxFVW",
  "key37": "55aNTBrRfqoTG9LuYQqVeCGbqoMumrTk6twWRQmL4mGERoP5xEtmufs7yV1DzaQe8kDSY6eUv8S2dUaT7NAuxC3r",
  "key38": "5pmuaWhqrsS9RAp3G6hF7JMZmonR3pXNs9r9Hx3acAVdvCvfNF7HNCrabwddorCYWQ9bN7Nufddhjya9PeDg81pg"
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
