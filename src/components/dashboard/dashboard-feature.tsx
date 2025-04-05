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
    "f7KfnXkjFGZwPH7H9q1wanrhg3rbNeUvaA13FgDuKDcUopc3Cpf1uRC7jPKesZq1oh5xqVKrTXmRVkHaWcco7HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVDUPuHZXygWYFrvVWQWjiafhsQ94Qf2cCQUhkiCvW2wJPTCAcLbm2SmYaS7EdWAQB4cyMfGhhi9AdnVTGgBzbt",
  "key1": "3nqWRnCHFck9Riwh2ResGFZcbp1SoutnzBottvHQwnFiiyEssMuvYN427y3DGj2xRMYmkZAEKkWbiagzV4pSCvBN",
  "key2": "5pRX5fmF226kJi1by6WaKUiAArp7vy3soAG2pa91i5G6Bgiuv5w9az78g1HgJ98XoN5DbuEixPck6uGr2g4AokdV",
  "key3": "2hQQgbT3xUKVzR4G2cqWVpv5tMrS8m3fLkFsdSVVkSHCrHK6fXETJwHZ6NSzn5XB76DVnt7ceTKfAaii1LKR8NaA",
  "key4": "595Dyq2A9mBTv5mjXhuT6io7faZoRqKYELMFajAqFo5LZwKg6wmcNKzx7CPbgRdMR3nnpxKRxjonY5sWCUC6vSUi",
  "key5": "5ZsXJFhuKdkUphRWSMX4GQ5uwJMYuiXdvQ4fim1GAD5PqT779vkLiGeJcuhpSJNYWQiMfWooR2qv9jYQ5nCqQZBk",
  "key6": "4mFz2XVvMd7vAJbxwvQLGABFLVfzg87AWpBF4iQ2pzPpNusWbA7jRzDBjdDX9cRMzw71g7wytPSgEMpCNoU63XBT",
  "key7": "2K9EZggetZUNe6J4bLidxnneYrzMnpVNRaoNjHnUJoBmWNxK14NHNGYFEHxTvbJWEc1v7X2zRiA2UzENohFMzqb6",
  "key8": "2gP9i4aGeDmmDVU9AC6wcdPaqmMsFxGqav6fPjLiuSFG7HKgMkKBNsFgFqpbTM3vHSoYvz16knViFk2nWnytfBCW",
  "key9": "5E8ftvuy9aswxsVynoH7PHAZdJ2CGiGXjad3FYWQcMgyaaBJKfFqT2WeCiU1zneVao2716axKuFBifE5aqjows5m",
  "key10": "2cUaANPPvyXvqfVMamJV1HqbsGQyqay9eEqNAEa2LcK6wY4qzmLL8JcfkhKzAzxuh5rQgwwZeF1c8MaSSbMrHTSj",
  "key11": "bpRv1eB6NKFtmLgcWmfSDesEbCVT4Zk7msZYGUdgBfVicAAiP3RRTaqPi26UuNScc6kh8UF4PyowFwY3GxVaj2n",
  "key12": "gg5QEC4DyPFms2FVwYYnCrkkY6JxS23kyAMnJPCR4SXPeZasF4aKPTW1oKBXKxBKbiBomNP2oYWMoM1eGuSRSPo",
  "key13": "3jj7VSeJK11jsatmZNnWGMagjvFePsSH7PFwFZt1KYudxaHqZh6LjvXDbKbgQF46u9TZ1qkZKmJJpg28GdyLd74N",
  "key14": "54qSWYvo8PzNhZB4BAWbs8YM7dXUaR1pq4JCSgYYPUmuxWTGWo9Pw8mmNFTbGYrB1fL4g2FrZKWjSXHAx7meMAD",
  "key15": "3UJjnfC7wzzGmLCzGSdZg9tvPwyH2Lqt61UPggQwJYQ7A6sqEsCmozdsRRQwnDdTy7WM7vQekyt36WX6eNgHPkFb",
  "key16": "2dbMbkdqZRq4hA9T76fkQRG6yYQLE7PG32xdze8tqi8j1hFSQLwwU53uCjJscvbxbs1DZsuXczgTCd9JeJCR3NvS",
  "key17": "4r9DatB7Eq7T12DUKnQj2ktCdajAD1RJ32MK65Ps3WdzJi3QCfqyh1nKSXJ8pY41i9mRad5R6qv5WtpvMzVEwaci",
  "key18": "3ajqrA2bZz7AEnCoMSLzJJsVNzJZqwa6puhg7nP882ccCke9aFpxnPxxchqVVVZLBJ8SbNRhJihAp5VyhrXjLk6S",
  "key19": "5fQnoReByMSsi3Q4ZdnX1Ao4QLQsV24hevMnR2X7fQyHyxmPLxqcVc2usk5kZWg5oSbgNiMxpxRCnnTXjfZfFSxs",
  "key20": "5unZZdjJJtQX4zU9yAyk6Z6tQtajpKLr8gqJa3ygxPEqwZgEgaZwAJV6aqKuFVDwvuMmurRkdpeXxBuKYBLDAm6A",
  "key21": "63pmH7chNmaBzyb3t8GWopV21PksRk2pM8yFTpo3PGVoZrHcLDwdxiYT9sWtvBBcz3BBpJV5nmKphgT5w6S3CZPL",
  "key22": "2f25924vHJzFJrGUtQ795roqMzxn4WVnVgxgdv1uBJHM2F2Q5dmm4p9PZN38YCe1pfQZZdNMqyofbvH62qaHAQCc",
  "key23": "th3gqRS1NYkrEdyvSUr2zqGXoMxueecK8tc5Dy98QdJZAEnoe7mauZapAH5a2MroGCrt6LossWM7tC4VQhqj6bp",
  "key24": "4sQvQBdZCzDQgKN2BqfNrQVr1AcHaTxQbNkmvNTfFyZ13hBjUVafQ1vCuEbKgwNvyMh2nqjEqJGS4w7kzaLMGHMm",
  "key25": "dLhaCouzmyWMy4EKZJoHzQFjxhgmZraRrntEHqZNbatnHwfyUXJkkuV95QTGUKezVzT2uPhVwhbgQi3Xs4ixeWc",
  "key26": "1j3ybU77ptFJrQcmNQDpkN9Mu9tHnswuBQDAiSgmUu5Pds18PiCJ4fLwPRD7ccws6ukGjsC1Axz3WBNBY7pJg8e",
  "key27": "1oM5aeKP5ao5fn7mKLoP4gD5HdX5LYuhQWdo6btiqwA7NibJ8y7E6GY52GwZpkiPPPy4KdrPXoSxEn2qeiJRvkh",
  "key28": "u9chydRimcHz7TPgU35foMmD1FyGm7qZkHtP1q7xbvGx3vEK863MPssSpLR5Xou7d7LHk8rFpqh2TyHdXLXeYeo",
  "key29": "Ktur8kAaG1yEPKPVcR3pabqnouGNmmGxxacX5oRqgFArraCn8CnjQ3CirT7pKYAz638kbsJuH4rPqwxnnd57zDW",
  "key30": "LwmaGLKz28ZysRmy8xk5mAjBY6bgyotWYrvBUs3G7KQTWhpqb3CxBhXsL2jFCamyGyJtLywHoAJ4x8GLMepro8w",
  "key31": "ww6CWkKo1Dq9BRJFwVzvYeWVAEj8m8ScggYwjMkJsrj4tdkqR9uo23J8MUhH2L2YkNkdenxYmwyH2pEW4GDA2Tu",
  "key32": "33x8PeoTYivU976eRiVDKGdfPRk8KfRbXDUVT4xV2TS3XNCdx9UHFk85JwrCjgJvo3RFWA5nxwE9nMEJst3G6J3o",
  "key33": "tfEZTSG4qGSNrQmuy2G1GDLxS7mz6cyCwQVnxHELsr1h8yysp1sS4h5Wrws9sRvaBteFHaPewpcmj5xEw9DAFDY",
  "key34": "4uVEbyqstGxh7srAAaYyJfzEpRwA9HUkrZ1vAXrDYt4y2xd4mPr21XgHnZp1WwYEYAvDbYV4RUx8K2bSrTRBex1p",
  "key35": "2bZWHLjWBZr8jvS5DzfCgoEXwDoeqvYc9323adwaoxiFYf6gexMo5acX56HAYTWyWQAZcWtRfaevTaQikdcKYCB6"
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
