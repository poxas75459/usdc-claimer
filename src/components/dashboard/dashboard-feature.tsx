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
    "5faERMe3XaWs6ceY7Kekfii4CuAKAA8hYp2R8BVdYfii2p8uyirxzze2UDB5bqhGPBDtMYkjQNVafb7P2EW2Coax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HkGQki9yVuhknjh9aHRF6RhMhZadtSCqYxJBvZETzrskYNgaV2CKw9XGhg16AWCpdfx2KezuesrfxzDPXcUpVmC",
  "key1": "2s4bsGuT1Et3sMxvgms8y1JgvaYCKpc3STYHxfvazocJE2iQ5F6G7arpqJ7MniZEifma8apPPxh8bmCVr18NmZyE",
  "key2": "2xGXc1QN1jog18J5AScf1sMFR92LFGPzHh4KVFCuMa1S4FEkNHxEBJ9UamKquQfkf7h9U5N72zAJgmxdgTnLPFK5",
  "key3": "2SX9T1t9sk5G3XLMw9M85ovbHwR6y7sHSw1CwhMpnENabcCzUbjcxkHTnEdfvnwBF7D94TUX4zH9iWJphDHbCwV",
  "key4": "27S3p2zQgG1zshoYQZvcmtQqiKQGGpQ6xPFnZGaaHPuNJFD4fUb2gLgvsT8C2Ldh81ob4ThSjBJTcRyXwG7bPbzs",
  "key5": "3D1fEuSvukMsXSb4WHdcdnEAcy1xjXB9w53g18BcWkPxNRjP7rwGasK7QdoAPYb1Xz2bPqZHPzi7xnY6z4niVszm",
  "key6": "2waSS3VLrNUFUVG1aqSmzyq95JZSvnmeX3QYVPL5waD2rNDixnDW1nR3FaMkqxXDHt5R86cn4Up8CufbDREETyfj",
  "key7": "2a7PaVywLafawMLFW4hNo5nqvCsqSWJbr5GUzwiuQ6J1E8mNWRTjfejtWcZEVswxvKTLrpAkx36wkYoLg4CVNzAE",
  "key8": "5ku4mZHTspmEPn69UC44vxLvKPoWXZyanyKy2Rim9anQiGV9SpJ6oQdoeDaQrDKjxf9b3xLjgv5cbyKsuaHFt4sr",
  "key9": "4EvxEVNxSWVgcxUJK8QVcHpKS9jzaKEBtzagJRDyPfkkVvbTL4LVLa9LqNnTzUR57EAa16CoHpvCfFxQMrsUEDft",
  "key10": "3jkGtG9Q9LDYzEg44aVSJwJH9McsiYDm89V45dMMDujguSy6qJm9is7j8fe8J9WSPgA8CcfhQmE96RQDdrTBDP4z",
  "key11": "2Lc8ePhCk43ZZZWc4XtLwdMeW4EhXbnXsCqfoTKMDimfxZGJUo1GYyRA3Sy1h4Fd35qnbAqbTPqL2q9UgwBGXCWZ",
  "key12": "2YpzF7FgHVNJofVnQ8SEdPeFmb4EqJCtoS78Pvnvp5XmZ7Qo91U7wJ4XNuZiT9ktucueM3CRquWSUapjZuyQkpKi",
  "key13": "3BxetEjyehoALExXMPWQHemf4nTnw1Yx5yHKGLyu5ThmKpebHTLkVwGWNT2QnkrGsziiNDo1BWMTwP2R6Wmxq7MH",
  "key14": "2c6NxJVHhWa8w1QUC8LXpgZtMxdeEp4icNKWNoLVHrRYwmD6tfFGDF1qU26ruSpboZBH6FfDczxtketUx9FZvc3f",
  "key15": "2q5PAcsr4s3fadKAqB2FRJ3QKun1K4vsDFd8HaN1nG9Tav4dcYgmDpwMYaaMjUJKoy9ZnnvBSZcJWtD8qzvWRo67",
  "key16": "4MP5THjBWkTpijiWRvHenWEeR64YwPz46kBr2R4UX4YejDz4UECq2QPCxagdHKaBNBZEYoB1CPQjXfHGJSAhvDNU",
  "key17": "4NfkZjiiSqjKY6TsZpMMjXZrFJjHkqyJB76qMSCyKoTnnge96cjodjdxxA2DhTWnk7bNEeREKgfM9zMDKDtTfEwn",
  "key18": "41kU7W5a1jm6MtB1CL3J5g99C7RvXUPUnukZJ8CSPY8gPSXD9iGzerSz9ticrodZ9F77kxTM1gN9EcuLULw2C1nW",
  "key19": "53n4Qytv7TFedqPaHNx6YoGAVQW9qNqBYX1e48vuHUL6gL7p9CfHhyAHoJ3KCfXNvQFTUqnsupG7gGPtTcbx9F78",
  "key20": "2EJbtU8itLwvtzdhhTjDk2cyhaVpyx2KcP1pYKzCzjvdjqFufQD4m53oByAwg6UHChdiH5LSPdRgE8yMwXhggPWC",
  "key21": "45nmy1DXxVRBbws6ftcgQQS3RSCF9R16qMKtUaQgyEm6GFfGZHpfm5765Ww83Mz1XGhe9HXBZcG67vv2m2v66hEe",
  "key22": "5jXUZq2aYcSVrcVGSm7YAFtD9LCgXwHpLhMdKrFibrhWcqmvjoaErXAqKRN3LputuDs4hbAEwvPK4w9d5sqS3phL",
  "key23": "4xBjFgmkm1j8RirQbWWfRUNZB7QV4PjWdkHs1zbpaUaYmk82AchdDmY6ibd1CoApRRAM6qVdUvgZRsjKsAu52XhR",
  "key24": "3RKTw27KYxGU6eYRmQjujzMNVqL25invzGeyC6NTib8ocwjmx2jZfZMvPumsHz1aB3fnrNXzy7eW1PUNp87QKi2S",
  "key25": "2Pkghw7a4DR2j7ztMTbDjrTyrWEMTKZuqHrSEfYih6EC7nmPVMWqDxg3Vnf3b6k5LERL3LSamYH4AwYb54uUDSRt",
  "key26": "3axa5NunG38kt1Mwwv5rReF1sWQuyNHWjVkJMGMJr9nD6SET4cWd3gAr8WyHWwcCk7J3cRavqv7mnAeVPJhFukKb",
  "key27": "4YNXH21ueXM8eDhETmsUpzvSbWJfgMSVtMYrEi7YHd3sK2yy1qRq939mWxpZCdJyhhe7hRcAy6S925jdxmJ7fdR1",
  "key28": "5F42iXpNeXL7VjthK6DZ3eAoJs8BV5SMqXRe1H825uH6aL8kgvKp34RBMb5FrGf9npHAvvn8HJNfoBKiMpjq8Goe",
  "key29": "AqwWJ5wXbjSMFC4RZeQqgLZuFwgeBbNaewj3FmQLbK4BnY4pP35QmcBSEGTcuNnowKHJji5hXierpYke2yLN3WU",
  "key30": "4UQyh8yy8HxxywvknsymqeBiVsveKR5NTya6WH3Gfqibmyfwf3nsHdqn5RzierEGW2iubhQbQcsSm6jBE8Qsp7Z2",
  "key31": "5u4upD3tdbzhznXkCbtGiBH46umBY8dAyrf7X6BtN5Ywnb4FbiwssgsFzixmWZoCJ9qej8LGVH6eq88wLUw8TtrZ",
  "key32": "61xXwicfkob2ooXoRLzW9RVZ1h7cixETm4B7isEk3eo3XymHKZvDmsfatGjRAHfrWHCRNByHo1rikEejHQLD45UB",
  "key33": "4g8pq5fxUDbcbeCkGCBTyoS5AWaprbJ8fKKeu2bgVPA8QgZZTzju38fxC6TwdkXP56pG3a7HM2LDpor1tQiHYDmJ",
  "key34": "5Vz3u47AVZAxTZ8Rp6GeHaedmCMR14aQyEAePrKtwW6m4S7Sr8CiTFsHD4dXWzRUSqQjLDZcCN2JGWaVxCpMX7jG",
  "key35": "6q6qzanSbppNmpuPTxZgeVYgQ6mBVHfijKHnLCGbLT3q6s5bTvbK5kTEruf7zucZdGdgMsGep7USeSUQAANx7Y1",
  "key36": "3pJ71urwZag4vM1QezYcDSZTPXFnvFYmo4QCxs69v9g8eqmfEwEZqDm26bZPbXHvAgKEYpSKEphveS1TLd3BWWWr",
  "key37": "3iRHtedea7pbrZ6fWmbXVDwvHpjEfG5dd8kDddL8kw4GxJQPtzxAinnqgUsEfRJ8tnnpRGThPrWw3g35wBkPtMdP",
  "key38": "49F7URtC4rgXUmdz6NejciAR1V9Q8AaxcwfRfhYbZqjua1NWLdn6nXooNCsuPPaow8Yj8g9FFBj5f4Bgy2To3kpx",
  "key39": "5zBvGQW3XAK9bLcDaEcpLEjMQYK9jEdUE5LPpADv11mR4kmynW37Je8TQAX5dY8fPaVrHKAuZZBbwbVApT6Yv4Yp"
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
