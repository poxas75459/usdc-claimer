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
    "3fTb1Y1DyNjLFco7CotuahoGQwqbiczUySzDbvujfj6Qrs6Jr8hXmJJT8iyjvVwVXHhkQw2mJNHHXbjVmNmUa9Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KuUqUmMJt4ohn9gj1E3Skx3xjjQMns19wtgvftozLBp8KgvZN5CV6UFH5R3KK8fP5z7wpCg2LkrKV5UJwiJkAo8",
  "key1": "2Ha1Dyz8DPaiEy9EGm8rr4skCWsFYBvbyc5XrGMWsB1Gie7vEugJGci3fJTwTQaP2yPtfwpJ3aZfGxX14vCJprek",
  "key2": "2N9F1ifyW7YngmWmeTELuv1qnR9n5x8UsYh18gSPhyuswJcuxWgWCD8NunyijfUR8YtqaA8tnxDmdT4C2Zx3QaQ3",
  "key3": "2JRGLHoyut8AioZK4EBJniqQhLSpRjyDbNYHJnvKx2cg3KSzHt5GuMKBUmy8SiJeURG5ZC6MkXFZrYY2eKo6aZeL",
  "key4": "51zwhayQnwkweKDHTvyRYKfX8LB1D7UaeUJzpbmt2WpoEiUS77zZg9A6fbBMiCNBvfoyToEFrS8hM1HyPSpMDtGF",
  "key5": "5bZ19hnwpVPZw3hL6yNrDwGVPD8sFjP9TUuFzNtzJLyhPeG1RKrM7FJyjpcDtsHxZrNvucS3gBwQ5sxbHq1VKy9W",
  "key6": "2as9CKGJgcKAgVBQ83PTiupcc7Ghokvo73aXZvYcMmPx9aKB9W2mbafibPEWNZs1ku4YQVD86BTyCQAYpQjmigMx",
  "key7": "5RNZFVXCY1oCbJgUhQBcSjWKkXwPR3xAw2S71wAsvJF4gyGUynBuhubTeRPKkR4Fjzi5QWwg2Z4BEGM5zNGd6Kp9",
  "key8": "hq7MoSP3AuUtd8gFEnCqVVrdMi7dtTyXXugFsQtEBrw8cyT79E9WexaeG1qNvkA2GbMjvn8wSoBshUnF1GceQbS",
  "key9": "45CUW1F3eBnmUYzRiAq6S31pep34oXgr1rFcshSUvKozwEK5c9wGGxKPn7hddzH6PQuNbGNRfqHKESSUNubExoZ",
  "key10": "cVAsy49WCrMDB4JgqgeAUFqGVd5nCy7tWKyyxuojdEco98Ta5mPhLUw9fyzPNHDmNMpYG82ZxweyG13EXyHupWG",
  "key11": "4pJTsAMTz6BBLYBiuNhxRgnqUns9vUbAYM6RbEjihuUUqyrD4fXNhsSqAxNR7Dprupc673Ne3R3cCAmuTrobmUie",
  "key12": "QdKHjq6zqYDhnxausFSN29BbucXy2NGPjFo6qcj1Trb3Kv66uU1MQKzDTmubpr6Xn2PkxpUbJSh3jqqUV2PT1NZ",
  "key13": "2qbZaGTxLpoAVuXYE3DAzE3Rf1xcgJQhstqd9WLB4fsLexR5efmiSTb2RJzUuBgnGvmi55KTEirm1Kze4DzEqjur",
  "key14": "3pSVvBDC1vHVy2K9eGm6WSYv46unGWfEr5quUnDW8H4heKDmwhx7gRV7NnK6HyKLmhWayEwALv4DGNsF93gRHZWd",
  "key15": "5s47SBt1rSfBt7B59HpzXuxkqdPMJo1yDWCSk5PDEv7eQSKMsSw1GDL8hudwbAisasN8Wqo8V2BFg5vQ4E3UAABb",
  "key16": "5eeArKmNgb8qVedbJQtMyvUZJ2MSJvDBsgeco9CpTSkEw93N9XWUyayN1MVGonokogJ9kHbd465tYP5RbhvuL6w2",
  "key17": "4YLS2CbkRAGyXaWHzGbq53pXpW27DytsoiNrUcChZfWnGnhAJ9sPXjvW91htNbMYE4YWUGwmzNESxecFg9StbGZ1",
  "key18": "3ybgL1bNBKKVkKQSqfLP6Bq7ixcZjoNVGMe9gevPXe6SRduRAZyC2BArtYEnVq72wpSxG7k5FWCsgHqoZnZ3yKr5",
  "key19": "33FVXPovvgXtqUHVFV66chMBeGcjdEaY593mGEDpKhWBPioSyV9GkEsk3YMk3uQfHiemBPxVFHoMPCLMDAZPePAs",
  "key20": "cg7ryhHE2aW3zAFW3ZAqF8UViaZSxkoMqnHSYE59Ts5MC9BJQH8j8KRJ5BCPyRK6y6Ffa3pipYj3DXBtxL7An9K",
  "key21": "isfAYPiVJsZHjUUaBoALsahAr7NBRjniqYFtt3Nha185WjrRaztV8PvYgW21FykjXaoEHxQGk39PnUFzxTk9YUp",
  "key22": "46Eakwk1VDyXKEzn4Zp6YJHq5yq7yxn7tGBZTWxShcEVcUiMabTJaHuKE8eUm1FAu1X6sLQtwGYfgbca4LqTDZmz",
  "key23": "4U4xDrERWcaawdWyKJptyY7qA4dRs7rb6qx39xD4i35DWnj5gnnYPHs2uRx6iswVzr8xLAhS4zvD5bmotY8sHCDe",
  "key24": "3iP6QQCXgrSgs8Z9hNzJwxZRa8xHDcmiQFcGW438ghKvhq5LbHdKf764vFdmZ9QYDwtiNzcuzyPDbxmEgAZcuJXC",
  "key25": "5GqCLrEkspRvCVGu41JVrt6VNA8wNYSz3uGsDe58CXGBEYLiiB9ijdSMQRS9yzUrnLvQmzKPXGAhRQEBz7DDjsm2",
  "key26": "qCRzHgtmgKYzLhFHWMUvU5pNEvN6vyqvGegXzaZmMREdNjTa7DbjMPpSdchW3eRXLMu87v391dnVW3EM4GtssSx",
  "key27": "5jHN6FWvUHRSrvR2S3csrUfbAJ7Lo8H9YTqcnS72Bggxv1HKnoyY5qW9MvaDsNmajcZdtiFuWm66GkPsRmbKfYTh",
  "key28": "5RukqhRCP4zXzik2nDTKZjj2BSwa1kigdqzFw6hJxgXEj2zSYKELRLUh5TrVfrBQjsfwHcPnLAkoJLcYg8eFxQFp",
  "key29": "5FV53RGfZhGvc42GLdWbppAntTvSXRiozDZtE68QQJ5kcjxRUzGVvrayGmVL8cAcpr287ZziopHZeWyZYsEajKzQ",
  "key30": "5R6CW8Zr1cf4FDwnKKegPZrhuJgKEonxm6S6xKJk7mACGrpsH5iRs7DY5TNEok2d5q4d2Qa7SURzZWPp3XaKeTLL",
  "key31": "3mfAk3gNisbnDR4Q32SNDCpPxSEbW8Zm9spJwCM6qPZQMNaXYCoKPSWQ2grdPy5tHFk6LNZG1obTe9ZsS8EVGZGB",
  "key32": "3YAA6PpP24PazB1S48qzVnWfvtU4CM431NHidVVh4ypFr3KcrGLDVA1h8rTDGwoe87So3aJ3HaA8pUEPV6aosvFo",
  "key33": "2nuSdNFnQdRaoM8zZAywcUwTPFYUPLE5K443fx8fwBkVu4a6XnQA8ARKpVs9Ut2cyKuPc1KM2GkkXFUELFyMmyJb",
  "key34": "42KYKA7L7sk8L1vvi6P3vha6BBXy8ctCiMLuQacV7cETdYEJUyT2txbxHM5Uefumw5rfxLJiig3eqhVxbAEm6HP",
  "key35": "5Pf4yp1MxXdkgi7AwcvJTBCuDx9mCEr9KrkXUuTuPZsRoHXUtDQc8BkvS4nUVZ1kmpSoJk1XRbqsnveJbgFcHDat",
  "key36": "5TFjkKnRzucUB1M1mpDmjGUFqeUL1soaveuP6mv8WZmg3AAnBT8SPnEUXRd8iVFhyR5B6pKq4U6Cz7qmWFtd5tsw",
  "key37": "5gMqASfmDhwkrgeS6MczVkJ4CskfwJ9nkDnZVC3q819W9T7zdMoUrhnxGYz7WhnjGB7cVoDTAu22pR6Sd5S4e1sr",
  "key38": "5iuU3gxzuGE1HJXkzbaLDPjsKKb3v9SryhZc6rAcbbped3nrjxhme6dSzaVMTFo1ZbSQKYSAPPVzw5zd5Ft2HAPU",
  "key39": "5jwVtGxBZcMF7AhQ15MbZrszQFcxcUPBL3Wd24SN2RhnkYqJDWNSz8E8Yp48fmSjkGR1HYfv6EQJm4ukCrCnkT2E",
  "key40": "395F6KrXqv21JRomJm8dkHUnmLuJKvb5kFhaibdZaLaBM495k8zzXFVfGc13u6ULACe21xGGHhfmaZLiEWTnhon8"
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
