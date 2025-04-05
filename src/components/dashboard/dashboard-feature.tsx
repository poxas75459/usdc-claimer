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
    "2woA7H5y2hqipPy19steKyYCnegx7Bd1fDjCNzC6CzANVh8NcfUknvogQYCiNXrxgdSEP7iDyc5pDXA1WVu5qahX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nsk7QgXZXkjwuJPD57aTgTAeqLtcTov7MThLQ7rLHoB9dkHv717QCWiJAdavxApU26rvqJUvnJ6UTpBe5Z8daPJ",
  "key1": "5fcgQXKpniEofGmPFmEB2wcchNnuwaKzxv6WmtWcxgBtvkCiXHiiGLBUdSBQxXHJ2hComNM5CnH8cVZparzH8apg",
  "key2": "2aZhtqSA2FoEXKQJiw9sakCoh73u9tAkqWU3j8X42Jm4yiecu5ybXCxidBLvdXEcBpCymGnv8G4NXwgDMTFoGUDL",
  "key3": "5FEhiCgceohBU6WtBAQYA4w7owXjGj9UaMX68FxmHbE26hwztnyBicYNAXni1bTUeZVGfdKmHnRfd4KMZsoDhPVx",
  "key4": "3ZogqPuBeL2cupLveeQG2V1Thpgf13X2YgvoHZCVZyb2j1XXjbVyWRrhKFj3dykQbno3ivARzA14QHh7u2A1t1ev",
  "key5": "5MNsv7MyGWyJp5QnnyhPHNcxkM42djkFZHaLiCA1k1dMve7SEJth77WqVMn9tUxpiqu6RBn1odGwjrwfu7gwxCsq",
  "key6": "5NtgqDbTWTcUVCUQes5qqYPJxWwBgtLT5JNT61c2hk78fqHurAE7uz2wzJxQ8BDiNLtTmERw8fs12J6h9jW6ZXmL",
  "key7": "XgDJMGnZMU9tT91KLVmqSrdRe9D9rQMDmPHDRY4CsmLofbWwMQU8bdNV6wdXnve8UgUnWXUq9s876YsqPq3c3xK",
  "key8": "4tCRvxH9AhUT1Uo7QLuqSuJHadYnWz1LWcbZQn8FMZYLzcUMPrvypBXnNYC7kXWDx5hmKnsP8KAsufdZRt3qGTvw",
  "key9": "xP5ye9uyhg9hG5Eib4xaBYcUXnsjmtcKrxfiv9S8D5dW5SN2eqQ7LAFh9bfbA9PB9u121CstRy7RuJoMWCHRsvX",
  "key10": "5QSqXZpa7vYc1dRMWuqNFBP8dbFwhqvgMNt5Uv1r4UC47CDZtAf7tAhyYQHPjP4DrbRvmFwXkVdZtznVXdsbMoCq",
  "key11": "4STUA96g6eFcyGrAoaSVMQkkmgwi8iFLHYCDTzdj9YFiZVhvWhLr4dSx9yzETC4nwVTRkcp5PSM95oMpr7NDfWkR",
  "key12": "3rJ5UKDDBCwGGVVPqLpZEZP6fkw6bzBVAiT8GGKYAhWtgsQG4ofWYENxEfr6indpoTGrHXm9P9dK3e8FAG7AwREj",
  "key13": "2v45mniGaaGA3UoKrGaxPFDwfz3h8fHuZbf3ZQD3N7vtHsPsheZe8nyUs8s94We8JmUvx3uhUvgmG8m6kGvyRz34",
  "key14": "3xMtAGzpeptHhCs9QLYDubduEkWvTLbGbMAFXiPDbSERNTcRnWmRLpCN7wPzZ8NsJv157oTRR1US9NvFfEehnLzY",
  "key15": "3DW6fcAiVVBmk4BLMPgdEQMjaNStrZJGGJPSf13tDKZr4VHvse9QX8WXPesP65WYpKvLCyvVwomKPhcsVTeTgK1D",
  "key16": "2hYFKp45ij1boxkE1k2bVbnr3bBxNsvVNWg4jLtuaWHfCDxy2c6i8EA9VYREw5z4XQJLBg96hXt3SCwnHXsK6Ysu",
  "key17": "5B9TgQXimFrQkGrQr5ngj6gJv1n118amrKFWJGagUamVQn2oZ1qm7Q3u8gvvPMwyD4PsB5wpPxmMuaZ9m3FxBFB5",
  "key18": "659YuQViCLvRqHJJrb7YuUiofGW3P9C7Rt3uHjtssrGwYfnukVVJoKdP26pZ1VUHPE9LkzsNfLdUQuv6DsfLD5xv",
  "key19": "4bFCW1qPvM6KZz9EgCbUne5vUFugvXrMe4TcopZ5NEy4dqNFcDwqU6VXnUR3HFiSrM3rGtvEkkvVbe4X9DpCLFAR",
  "key20": "4t8LpapvBGxo1ytZgRQeBaoiDSb5oLZzxH2q4LeF2jiDq3icNLGwGnWK8G2AWjqWGXAsGGiYTfT1osjeifEJgUvk",
  "key21": "22UvfRTF7yUNoDoUaqjiRfKsQKj1w1ogftYnTwKGcxg7r68UbphambCAGLyBodhhQ2RJYmmDKae3sBqy5sZmae5R",
  "key22": "424BaLDV7yuYky4SpwkQfif5g7aveWvpkHarvfJQwAodaj83cmpc91ijDBQWzmmWTovmjxB88XYRBygfevGQViLh",
  "key23": "56rFNVhvkdQpcgqgRY28Xb45hW2xJprBGahxvQTbaTe6CjJ4YQSJxjqxGEAWeu5chEi8GuZ8ZUktY81nkdBvZ7Ny",
  "key24": "N66uQaQNHVH8RazGi8w4i4c1wbmATojQpJNAW1YPrHh7CTJMa5H8a3zcQE1L81U7q59Cean47KuNwnx4owZeLG4",
  "key25": "3zu7vyGRxBUt6H6mxYYZwio52yKxeqpNQhtLtzqichU1otTfoGSxBQyeXG4L8w6g4V8C55KsRjq8f6YE5j4Fu43",
  "key26": "5RLH6ysXzFCD9Wv1iwb5wiCb7F9wL9ZBbvHebY4SDcfLEjZ7qQd2DCzAAPoBLkXeu1Lt2P2wCcekuLXRVzxGHiby",
  "key27": "2Z2yM6c281h8Eu7h6ThsBAaA1geQFryfKq99cGqrDHJDV7bTmwyMa6fqUm4NK36NgEreajAHSgfgfSqrbK5tMUVF",
  "key28": "4LTD7AKQzFGBRfuDo3KnxmuawvBts8NxLxYcBaYc6bXrDXgnK2VJBQXjHBqhVi8BayXb52ruw14vBWdmH6JLxDrB",
  "key29": "2pf6rBQT8Q8sLqBF4gVVDxTN9VuYFikodJRQ13H6dKDXv4r1tjgLBhyp9vWX5kP2E97wDuFqDeHY4bGe4GXtFYrB",
  "key30": "3dGUr8kYH4VLMwNG7mHg44nKPRGryw1Km3aWF4yuH4eMQ6gAqHBBXexzdjhBPHdk7JMSmt9eTwuzGymcnYok1NNV",
  "key31": "wkxHD4d47yNiDMTSpMTKrbMDs9JxZDskzQFgSXUR1MzRAEaxbZkioe6LgyZQnr3MHjBATt5ex8QMr7D8Zw39qHt",
  "key32": "5bbruVu8JDpR21VBj6jUWwrzhBy25dVvhYqEE6aajwh5WU1gCG7AYw26qJ9PyARwJaVHPccHYN8nd9mpkMjnY2va",
  "key33": "jf8MZQwJLb2R744mG5yeTkExxuYjp6rqZVv1aMJ87VmVckhK9VQYX49VScVrjuqDedUSkozSaiUV8qPi6EzvF2j",
  "key34": "2vnn9T8YZJENh3Y8yJhZGy2HgmsVnmFqmY4QNDGJ3YqgjMzjt5JwWeL7L34f73mgiCr9ZbJeyhxRjiSkuC4n5JwB",
  "key35": "5FgUbdvZKzYg67gdKMmCoeZzHEGBD3LvmJwmve8mVZ9p6JNLh6p9xLCGReJffHMwcdhjjvtwNd95pVuiAzhzb5s1",
  "key36": "4b81YQxxkroQ9gpEQzCJusW1NZmUuvS89n9jqZr79mCPEZUN9zbMGLGdgJB24XCfKEUeJwPzq8x7SYwqtPVXCYYE",
  "key37": "5sg1wxXNmTteL4tQEF6m9Fv81UVkAZoTcXsGWZNXJ7LHfo4PM5hn72jNwyjijBj3KxHgnfu8i77xZcUqR4bXT4YF"
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
