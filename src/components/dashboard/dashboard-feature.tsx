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
    "3sSeisSoFQ2NUpDDMu62SKtwmQjDfif5sqVhrNCWMf7R8kSWNUG4uB4DaQTKHm5q5QcoEyazNLvP3SU8DGvtGfaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5phiEvrp1tpEzm7DJPhRcJ5KobUHwc6WpDRKtpLLasXJkUcqGWjFXr12vRoYNat3UzA2nvc2yp9HQQgh1e9zYHA1",
  "key1": "2bELL1sQng6amV2HUyTMGUTs8NvoiBDYdzHyg7B7crArTDi311B8NFN7tZ22iCrRdeFruJ1U1h7cmjWSr4Nqchqu",
  "key2": "5XpSbZx2sWTLr2tgrVXgkoy9QFSAWabiEhBtQdqVePtJSmqvGEKoDXZS7noaqoYoF3a9QuJx1vzniTZSgc4XAp9L",
  "key3": "4PemF8n4PsBQh9Y6VSvLWZAhKfWxfTonZUVfFk2ci4GT1qSsVCDDeApwZ1vAg2PPs6eTFbe5CuBGdx1gm6SUWvfa",
  "key4": "4M5F1yZPJaXMUij25ZWB7Hx5B6sCCzBCvVuYVKoj4mLsCtcwFZjLwCp3XJL76DqnWPDv3p3w2xa6aaMJNXQ1486d",
  "key5": "458GVz5oaEMB1T8WiQBL3poojJcErMhoCPWAJLHZQGbuUwnJ9cj2dqMeTDQrV2wu2UhS1YSfMGwrkf3R1R6GmXMw",
  "key6": "iNdfBdCV3szt2n4sjLUUhZ1NGEybWa5vTgR4AzXEQiPB9eQYgHme1ofAej931q1rNMiDt7fviLezeY2RoRKnWvN",
  "key7": "2HBaF52otTQRbG5znD5NDWRTupo29a7SGSWDAo6GqzbBSqVFf1Uqfiy1WJxYQsosv2QS6PXxWcXMVJG6cDypaqDY",
  "key8": "4iUTFT8c6RBMXayTRjZda28nnd4jkTV3sfEcBM5fwtQQ9MPeaTJvkD7y9Kn5nFmCoiwWp9HPN5UHrbYhxAncmnm4",
  "key9": "2YmbUJ6AmpXmXVv55h7ZscK2MMbsGEHJpDCEuPNVktv5gsnesj1xKaPkASKmLA7zDf1U33A58yPThrWPBWKSPBd8",
  "key10": "4sCJnSUQezJvqD87ES9p58U8KBTw4ZJYcSQQwZRX7VL44WohRiv5mJSMu5Su6GaoP4v518FVcnzAQfDwGARFDBj2",
  "key11": "5C13oQuQEH4D4yeiDokqdvksCYQBYr25A2aSHyWJJ3Exh2wRWJPHL4hjNDL9zmJzDMqnMQgwDN5JkHAZPuMieV4y",
  "key12": "3Ls9tKWiPVKyG3fsbvtqKsJTzcL7PYbJyGEFXKuesrDHxNcEskndEsSkbM7fFZZd1BdWLGBPzCj158a64ae6TjMB",
  "key13": "28GAPMxoz5M3oJUo9tJtZytxChHBrCJm9dLrg4FxnGkogq72HQ1WBfu87mADLYGrDyGC6FURaT5uMPoqLycKJCF4",
  "key14": "2NnU9SGHUt1NH6nLjJryFgLVadQszQQzA8dH6dSuXQH8s9Vv5SJ6mWqUCSpkPvzPpPWvnpkj37aQvCGNndt5vqiD",
  "key15": "64nevuroTUgLFoPHWJJqHFEV8c7biv4z1kDYgL16wP6fPd7kvNZL1KUkkRrXq6geh1QweVmfnMnGTRjZxy5C8gXz",
  "key16": "2bRFGAzU5Y8uqA2xMXgEzwaCL8NySPuD7HukMocpcY2Yhqn5p6G28jaHrPP8893MjZUGFwB2vN15VWZY9NDfPXtt",
  "key17": "5K2Cbbvte6RJDaHygE2sYuHBTQJoapcZKnnQDucLNSqN8ZJDBAqGwwbeEbiMowSBTNuCkrfw8fsANNhEVFqdV4vQ",
  "key18": "5LRqBnSKrc95HpCVwReBPtqrhMhf8THmqdageapbwHfkPQbTEFPVLd1MpyAMy9FHc7jAMNgdHoJzRA8k7mJvDfq2",
  "key19": "2kj4pwGwJqLM2eo7iisx7QJu8FESfZ4T84BH9ACzStSnseRZ3oNYV7vjMrLzCMtiZgXSrK6iGg7L24fxQpVWKPJi",
  "key20": "4DbR62vwfpWEjMqjZtEtVcVXsEsRD9kDb3kDXuFcy2ZGmmG5BNfj2i5HVwskyub3S76Pp97LQ8MLDECggReRYRyf",
  "key21": "258aN4YWR7fPPnc8HkpJAuq8hjtXDkdcradfKx1mFEiCdqhRJ3HwS8nVMouZxFGj8DgfRUvWNnenB3onbfrwvPoS",
  "key22": "24vyE3W59YjvZJwvpzq7GdsDV6gV7cADtRA7dMxA6Dwo5YQHhS8V6FNgr9dVpq9Ss9kdMxTHNiwjuHyWuVK5mBKL",
  "key23": "4pgchaCzzphZf4cFnMHQhJfU2rPMv77CbeHXVKg8hHZGp84rXrT4XKoHga4qxq4H35GPv8kgSFznhHmu32Eajoox",
  "key24": "4E3FX83oLq25Rj6g3Wr3Hydhb5A5D1N23JMpT9oMwz2YAsfuDkWMmmHwFXmebqKSq5PwN7pUfv8tnGJo4DnUKySb",
  "key25": "ZWbjnxSb3fg61Qrzc4Y9EgwEZe5vqqU6L21Lb8bhdAPaHetJ2sMtWiDtGqZbh6C2du8DTYJMZSgkH3n8QKS3Uzs",
  "key26": "2YuACb77yJriooqLCmkReyR7HLernr8VBJLtAqrz4zEAnZryRCBYWgj9Dct2eE6YjADEMTQEoQFwMkVvkf66D3Ye",
  "key27": "mbeB6sZXBfQeSHECteFCUrMUFLD1HTKL2inFyT1teRRxx9EnD3UzuWnBWoUfHC1uVT7oSUp6tzhCh8fjUriXrCv",
  "key28": "Lrhp7LigqUwLwGneR1sNvVRzQCG24jWQwnwFHUhMPe5GKmHwdR1y6iPNojiiKEYDoVUhuxzpCHAVAPtFRcQeAee",
  "key29": "5ruPjzCkAYMYGf9bbvAsAYj5RRhjpZzp273dhTfoHa3Y6pqmwj1HAVz86r2in3Cy9j5z8aJuuvwTRT9AevBWxEzK",
  "key30": "EN5mUEDcem1LPwPqyb4kpBQZoSVHt1xuACeY8HCXTcatNk3vU4J6nZfR2ykXrH6LUqCzfD9Bt1cKoLGi19zG8Xx",
  "key31": "3jQs82YnL92tVMYcK48XkQSJSUynXFPB3ESEAZusq62j9rACH6oxv4jn3ZkLBqNJxmNU9bPCPDkn4xhUCoef67YU",
  "key32": "4RLbcimML6CrwAvA3H5aQtAraiJ2XPThtx8kaH75Q1Sv2mypWvGVU8DAL1MixiiTXgzJtM16PgCyhr3xP91iPJdD",
  "key33": "3or7jwgFU52SNxbPb4baMV6oLrd7wmQeTnSe9VVz9JcpWYMi1podgte4ymZf7MUJGezzSALwDCQMxUJGqLZ5w5XX",
  "key34": "67483bDHzoZhGMrSR7zsbbQdD4tSejVa6BuucyaeBNPKNfpER8pUj23XneoJiq42ugifUMoGC8m25EA5t7nvbuZU",
  "key35": "4BLzqSJ3EvVqHqoJajKr65tUjcTzyBUgFrHQpBTFT2XKHLyUD39dgBkZeEq51S4QcNqZPox3Jown41V2rUPC2NgA",
  "key36": "2bhMYSLYkUYjj2GBWo3fW4QwoUXWySLNh1RxBLrLkvuy969bk7d692wCnGhwL7BmBzexrMvxCvMaPFAXJA3Zr3R6",
  "key37": "4s29EHFMwEtJFzvciXR1iXdpwh4UGJQ77a1jo3DxZbFnbhBmM4qqt1Kq88fWVddGdYhqUmN71YXLAR4zUDXmoAwf",
  "key38": "3zvfv4sw4DtLL2cJ4oeHg475esGa48e5nfb17jxwSCK9m7YkqEjH54UXxY8M1eLXCqbR45EwpUU2kX9m9oy4aCgd",
  "key39": "4bJNTNAEVvaD1jVAuPWKaa5cesbQk7CHuGCCFcM1ZBxHcQEEgykAcZgyuGhDQYzjkhJnJaetMCGnV9JiyTsrm9Gb",
  "key40": "67f97mYvCgFTWUKdkUxuYdiebrVurfS9vNxewB4NgeutLNnf4zruQktjeiRsj2W9KzUgryWU8Jwk57Se16Z5zL1m",
  "key41": "3JdzHRMSX4zBABJxGQwFWuDzswcePiyW93uLMresGjvFhyzVkkzGBEzfxUuy4jQ7LsT8gew8wZzAAGeMbhFa7LQm",
  "key42": "5BcN4UgGSQPb5aSmmoUGfZmYtPUsbF6S2utu5qEzqmW3TPYVsCTj1Q4Z2PCAuYuY5j2BXBuU1S8gbcrgn5kRXhnv",
  "key43": "61NPSWEsQyDYxiQotcnP8dnCARD3ecpMF34fYsM2BnHU6ybRZpYC6vD9VA3UYdYHmZ9sj2QKeqmwSwB89FoFZUew",
  "key44": "42uShgmCvEYnJQFYdz8Wi6qg18A1s5V2T8ex5kYni2k5wGTraJFymphc2t1g3SDDWAHziLtSCpq84sBBXcXnwB7C",
  "key45": "4VrcRNMKfYFk2js57BV4Lsx1B4rLrSBsjYqA2vGo3RYC3Tsc6KZL7qnkRVpesjMj5Lb6K2cKqyeaYesZB6v3ysMs",
  "key46": "2JFG6ZqND7tWpbmoPi8o8He5HhXNrDsUvLj7rb1cDKW5kxNMPvA67h1URVEy4ViAdo6hCdPYznKHrBsgnPsDtSKo",
  "key47": "2BUpLXfnEeDaJfmXkzmNuDuYc3UfMsvbuwcL8CVo16xTrSjWtHYUCWSd9Sn7hn9DgLoeFmaD86cxZhg2j7HREZ9R",
  "key48": "3GQtWshiRqoTmHbsmKzwxUQkENXWk9rWNGvjd4BG8E9UBhUPNCjPqh956uowaZim2oh5wjvwxGAJkw9tBbze5YJr",
  "key49": "4zwC4Nz5QW25o8PtdgzMnT9KCYainDrpi3G32kBcmczhV9gGT42EcCGgbM434RhSwoRAmhHJiZJ9qgQh5QDixyBf"
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
