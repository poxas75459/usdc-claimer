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
    "af2diRKvpVTNqenJ8JP1oevbjuGHmRuBKq1ojeemvuYoFz7KfcFxHgZbm6RLcGWTqZKjvteazdoM9NZs6oWmzYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WeaRk5MWMqiFU2igUod3oR3rdQNHxjJwopo2t9ipv46aPmLPfQ5qpygybiNNNvmQjPVsFgtiDFYrprc1iuoFfbw",
  "key1": "3v4q8iydfx8du7uwF4bXxK2pwFWWRkYqWnEHGvHdNZExE5N1HWZHb9fAEfTa6YKZxw7mjFgxTaBis4Uz5JbU9pGU",
  "key2": "26sCNZ4xoWCBtLWapBYXuhTDaeu4cGvZYRVDjBj7Vqo86Cmxkqoct4fBNYZjX4VHnhKnmfGdaJsuokmbG2oLNd5p",
  "key3": "4BVRdYcdd4qy8RSXtMrYGbfJSKdRtoCY2QjzKCiEFYxSUPsoTHL6WWnoYdGqMGVBYqSXTZt6GpqAQ1BiKLsYRkTw",
  "key4": "8VFXxSR6sV3AJZwjjc7fAmB7Cb5h12JPjXbHn83Pf2DUPnfjMDhVCZ5B5oMibSfR9G5wYpy43gsM5nBPqDcwGSk",
  "key5": "2ss2X8DP5smFGAzrDgtS94EetA2P8WDCMPnZiNGP8KuqU5SAvfucRvsirLsvmRrsxh8zyvYNg97dRpneGgwcPLv6",
  "key6": "2pXc2y7QiN8Lde6EiTHTCiqm5tvhu7Jjx8SmdzAMx4V4X6v5xGX5xEG7ZSoKxUY93Y7wJ6TUBECXWc81VBMPQUtD",
  "key7": "4WgAc7Vza1JeNHC6qqPi9ZbyJpbtCxBixrQqxwySquWXNgEN6PNpkyEyektDDrvJY89nyfFLNLpMXcC1UGD6j35u",
  "key8": "65prMC7yX5Y7TyFBzVZJjTNknjBAPAVffzaHnvLMNTWY1xccXZ7VX8fnwSWdZ7fhwxSvJ2jYqWsCuhNfnHubk48W",
  "key9": "S5kQoCAZ2YE78w5Rpye6UJD2hiFwepLne3F42Uv8ExGV8WtjFXQoMLQ3RRgAfBrpUsxGXhw91qrEv3M1H3DMwbn",
  "key10": "49ipzZr7SPnmSsUZKpbadEBrrszY2XemN493AMJcwpj31htnBCCkyPweeKq5VHXCY3Ro24XhKK4nmombxQxg5oVZ",
  "key11": "2NiFfZr3Bf6mT8yFNrfK2GZ55GSDPWyY5fV7buaxxRD3zUdyjqdPD6CJ4myKHYLQfwTSqGd8HdoCqUjANTqBaUXJ",
  "key12": "5JkPyacenVHc9X5yLzuy6jTjQSbTbU38qnWcvwToj1Yr7wKKexQcVQoc2grArhUkWo5KmRHjHRgFGNAUJfbafsgK",
  "key13": "38fHuQB7zXnZgt1qb3B6W1WKPKkjtBDpKvu2dQMBRvgf2DnAphh8NFSyDhdyYCtX66dKLz3XfAjn51bHHjXRWwR5",
  "key14": "43RH3iYJnMcvc7DgCfgweERQaY5VjrD9UzVAgvEQqeeZp9NHyqnxCM1dMyYUP1eTt27qx7sRp6APCJnnjXC7obHm",
  "key15": "2E3WTMLwBJsygLcBEiQVEQsLwaphHgF1rTAuRfsJjjXhzu223w9GgspeEHfwKM8xvxvVywEiZy8D79mocUWWCjgh",
  "key16": "394g5tmAtD9NDZS9qgaC81FEK8NJAuKBBaZZRBjJQXNt49isEZXw8mLFVJRDkSB8wDxF5Va3hRoPhYhF1uvMttmS",
  "key17": "27pdy6iuGx2hwUa5LrjaoETuDUa8KJvzAWqawDhkSgoHpkhgRc96xctbF5Pq4pBEomNxH3Ek9thvuVN7NnQHqJ9G",
  "key18": "3oukQrgeePESPmxZTYc5C8LGBCSyPzm41tVkLwVgLDnQZTvaT51Z3DWue6mKp9Ctur5Jd42A1bUSsPHhAJB3e4Nh",
  "key19": "5ygCiBRMT49cCKhJqP3ZcexyGK4MMBipy6S4hUF5wdLPnqKibUKxakBGGsWw8dHaYZkdEBcHonSLeZiZtQ5HapvC",
  "key20": "4u3YXZJMxMKK6CPfgr4JYR2GGFNXB56jiV8X1tqCyjYcPR27Q8uFPR28pgzhf4qmUpeMyP7Y6hYjMLiJvs6gbUbm",
  "key21": "2NYxKUyFLZJwrzmRz6naStv9UyPNvCzcSo1SH7D1kaq9711QPyCSYjNpzVQyP5YEXitH7KeXeWeNCBSmbYjrUfsY",
  "key22": "2XFno4FLUZUnm6vRGtVxcjtCn122w9nBbJ9W74WZQNLF8BnBqA5MuHaqZicNn9yRz6F1Z9FRWcPgqg46wKdJ3TRL",
  "key23": "2sUTbwhtpu7BfThXSunabCSX4vbqMVVw88zYGKVua5LXsEiEn1xAVetu5MHaFeV23tw4tDtzzQKCYsjUxRM2QQ3T",
  "key24": "5hnZSaJ22RtKocVpfFYBLr8pnDph88bQTQ3vrqAoq7ph5Bx8eGbCBPKetLzW6PKyuuX85XKj2yWrq3txghNDMtte",
  "key25": "2gdioq8zKuGnFgGf8G6K6CniQJNeqcV9Q5WsebqUkLXUYb2rGTEEXjPTCnk3vcrAw2Ypy8MMkt8hcmspMZCCrZgG",
  "key26": "3ZLWKq2svMPjZBfqQWp23oVti7DKcY6RwbSmACboPpY1yJuAnDMmgJHQFc3fGeZ2rPMnMu4rUSiXdGGDzbEzAXr2",
  "key27": "2K8uZu7iGWrfoMjLfH9qrRcs7m3hjvKChTBorCZ5rqHj7WUbqSGciLSjUuRXSwf5GpubHZc8A8ar4peZNmZC3hwm",
  "key28": "4bTXMjKJEFBcFZmynzXacerVka4WHRkcK15HGTBUWX1FCervMFFPXV9a2UMtswoc7eM35nHFYDaoF5PR7W9cegFw",
  "key29": "L9TmuHL4kdFitFsVMRUYY4WGhGLps3mnJXN8vkrXMMLML5puq9rCfv35hPj37QzdTgkJGeM3EnafWLuwp9E5Yua",
  "key30": "eMmPmWvSo5NN81SZe2Fa3AdhJaWcnMbX3wzCjCHEHNzqEtZMwY4Z11RWqQ6oux1X5vJ9EUxBKw4mv2U564AvhTU",
  "key31": "468qYQ4vZUtaaj6HmJk2dUXWU88iEfRfUz44rQfe827bQkfxu8HLpG6G5UwxtcjVoqkndiwk6ZjRCZ2XYmiCx7pg",
  "key32": "4Ctv41e2omutD6zgL4iUaSbEKpVxamNXaRQ4vHtkoHwh5for5Yp1mCAVRVLkkFRQcQ1zWomHTp35KoNxsEJYFfYx",
  "key33": "TDa6QmYB12miBU67MuKUArUHKrV7GZ51ZMYnmSAu3yUUfguNXM6s5q6tVXTuuzZ7zwfgToYL45RWFNyL4MSM3Zz",
  "key34": "46MmMCiUwvp1hCH7dFvbrrGzWpozNysozw2gEejnKjdjjtwjbWpBJg3k7Y4DwLGtYvzjpwetvkjKTJiBsoSVAq1T",
  "key35": "2MW22kHjRuvfXjmzm7bfM9Uva7GUAQ3hnr4T9CHVXj29aqSVA66zd9QAnJFFJxjAKZ18KXC9RpXUHBnSCKkW6Hfn",
  "key36": "Mhu4ySXLCxguirxj6JLY4BSjGM3o2AmMdqfQ2MMFS8gT92hh2srrirgVuidgEtjaR33q1QyHsRsgC8AjyGxhSfk",
  "key37": "2dz7PbM5MsRB3Juu8qzo6LnZaq3j83VkHFyykVXcesascdLXh8VwEPMpcyfqVkg2rx2qsDooJgCoCpHybRN8uNzp",
  "key38": "24JYt8jLqTDBpbNiEmLLXWCqakeHGB5kXa4dG2sHVGZ2LhFsSiGb62txy4LD6G6iDnHp8PZ5SzRHfB4UTpSJGjZH",
  "key39": "4N5BKwJFzCg9CoYQS1PFfhcxJiXjx9swhy141KK2Z4egZrGwNewmWhbyf86HvNiYE75WAeutjFiFVtLuuMSCTu5o"
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
