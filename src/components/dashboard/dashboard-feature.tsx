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
    "5NyUwd7ZjWqizwLnx4a4DnfC8rNNM4meYRMtZwjuyczqrbu6HxBTpgcxiw8HEV8xuEsbQgpUcq7ZpzvG7Vzdq4e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48acM8ZUeD7JnwCrg3eG7us9sZvtecUxP1q9LYpW3unSSscquA9bDY4FnG2ZsCTXiSewHUboNyhMx1SVzNGEgFpD",
  "key1": "5MKkR2PbHijVp4hPZHhn6ZgR4kZnfxXnnANziZWdaRzKTCDGj7ddBhcngNgW6gn6GWfznFv1cEZGzV539MjqmKGG",
  "key2": "43qGdapBV93QXnHfPgQyugiqqhPG57xvKoy2AQdqSGSLVCPCFRh7rKEVmvsXQS4CMVH71bKTrzpVEziPdbFF6hLT",
  "key3": "3U44FcvjHKki9ENwcAUDtVF8A4tmMRDEbAN5giWDaNV6JJmodTUdMRanGztaxRgCfosGw8eqKXPfmzYEgMBmuEjU",
  "key4": "kjSTuHBw6oiR3KLgtBcuTiQ4JG9bw8RyfJZbCDVpRWTzAHZhXKo7c7CAkYmVuND587MfGBiS1QtmihUwxWFdYU5",
  "key5": "2YFwtUkJQ3XP6sCM6M7mpvnrenWNuiv5XEFjVWqjGaXq9UzgZjogEzuQX36oiGG44hxqS6xjFtLwJ8NUNzEKfrhZ",
  "key6": "5SnnG5zzS6oMX8qKKh5fJN7RiKqLhjdACsvUHZDnR9v4y4zb4uBXXKZvhfSGURrw86rGWp7hUsunVr5LyeaZ5acf",
  "key7": "2gFeWvwL3d9gtb5V1PqGEuHM4Gdvd3mxYcNAdAs9Euxtr4tixVNURVQHgPf44QWXSYXvW1DCrp1pT8wFCekmUFD8",
  "key8": "4grXpeHciWSgcxGAqrdrHV3xHzpDoDT8PMFjH3B8rr3FTxF56nWeJ5kmSLpSmdP83yKsskGvMmV3UoKKyHdJRaCN",
  "key9": "679rFGN51x3goUvRzuf7XNi7hTuvJEvY1NX4NJhsuaBh32pVRWz7DvyoaSyaQ2J9VZb8SZVg5NK2Z3L4QzuMk9kh",
  "key10": "2MozX6htPjguLHahYF3qEGpQYNThGJSyKrYeMGSkff6KKbQABMoTAj9Hi69ZEGp79aDjRQpzLcfD11Y6JZbpivgM",
  "key11": "4LfpTQwrDsEuQ4Jny8Cd461j72sGX5S8ki62sR5uiHTvBe7gW2z5QsErYn86LywWucK4a4MSEB14gDSPwRu8NoT4",
  "key12": "47fmGQD7H9AgGPB1Z6uYR8LtwgZqRxbf2kfHRtMMhnU4wxeSP95UZXrxkNcPetyHsuQ6aoWsejFFfd6gQSgWBmkA",
  "key13": "2PxoAK2EfBF1nZJDWxtvif5t4qD4z8TixWbKJt9AQQntW4C61jXqUekgcKEDDMcz3Nu7xRSuZ7jnJKJZd1Xs7KBd",
  "key14": "2eD7muoJXmAqzduPKYNqLbkmskCvhEPNEnyWJ4SoJmGM2TRzbhxDqLLZGofcckGR6z1BrrfpV6bmZuihaYk9BgcJ",
  "key15": "5mdRdaWmqzekFzUvsEVttcj62c84UJsjRP7gcaGRE3kwMncFBEF16PieaCeYjo7WEZhA2vEoyaiQQwLzGqy1FvuK",
  "key16": "b25ULoe7AWY3r9fWdQW6hfG4HPodHADcYV1Urb4d7Cwz72bnEwoGAxNCBw7wu82pJWTfVQ7UQqMVet7D5UJ97bM",
  "key17": "2XR8ZVnSHkuYWa6GDiGjTnVh9MKeLxsUwsatrw8t74hnJFJraSPbvsJQf6rmW9CDEUN2UFZQdTcCVahwLLuwBP2c",
  "key18": "5Ma1br1RGqKd3BYkPMqzcfKk4tB9rbE3AqxRngrAmnH8HTKXmccsoqYKJYwzfndqpicJvL5kowTMTZSURaw7aS4J",
  "key19": "4SXMd9hfF7mvK7B5iG4KsRRaa6gitKJP2JXFxadGrbz8hkYiAVerJo2GuB88QePEMjZZJFCHnZA9XTJV7JSToP3V",
  "key20": "3ecmkrSMsK5DaA4WHXp4cUUNuyxj9DXUYYkymQrqdFyUVwEetY5ZfbCo4MW4y54UtqEFE9sHHk66poKkhDEc6ac7",
  "key21": "5zxEG7E2aLN2DLbCkdES6BNCtMqQXuALKNUvzZKaeQ91Vh7RdJazjpFZ22tGDqYWrfKEnD2XDz41ktwuDs5Q7Fec",
  "key22": "29tVhQTXqKJ4FBnr8eLJQcBQQMEMAFJCCUmWfirQZap7jP9P1oUrV4bh3DMLzEYLYyA31RzLLThz5zPJ3N8GXSgj",
  "key23": "b2mmwQ9sPQquoMfmbBxonwSDir6riFozyrQMqBRwwsTMcTamYUM3UZoig5kB4wLuumYPtiLrCorGsqY7UWt3JkC",
  "key24": "2ZkKtD2PqNGP3ChJo83Nd61uU6H45RZHtRfkx2XBhQWisXgjMKkg3AVwRq8aAmmkHkTDHKyeDZ1AkSuLXxqMTTA2",
  "key25": "32w7RgD3zFmYpsNyYGWPSqRUSDmR8ZsTzy9H1y8orAXRkuebPR5pjkKaaNih1iECac5baGwN99MTryLyvDammZzv",
  "key26": "2UaDY1pNJPV59TR4zU6LmXvAKn6pfpyvyUE2zuB3gT5dAzPTpHvDfZhYs6ZGhdNY2cvZyhYi7a7dGmjMsCejjMUn",
  "key27": "5XUuQSaNmTVSqi6hrK2DoGM4M1a5HYs3EnryTq8f6PipxSahwKc9sEFmt7kanMrVU6gN5CXDZ9koDPj1NGNXA6xE",
  "key28": "5CYHjkXGeAini3kw29uiLCEGtwzwDnuvMmifsXGo1RdmEuykK4uzBtN1BfxWFm4Ya5W76x7tgdpcCr5kcDEiChSh",
  "key29": "3AAD7L7NrfTmTe1FJU7E2KScksemLc1ZPeB8gTN6tXyXv7rFon5seA9YNJBQhi5k6MKSMo76A9JPchAniRbcEB1Z",
  "key30": "tVWQKvuX3C6mTvaK2NdKiCrXEVhPPh2CtNsjsik2sfHf8az5g6fXTN9hi7oJYinKsqvgM4Q7AxUCsD2XPZZNYNy",
  "key31": "2rNsA5ffjNk7k5JTXXrXp2jBpjjfbk8R7SeqBBLA7WDVW2YfXwWsPbf1s1bQKBYN83PU2QPBD5qSi3Scsqe1hy2E",
  "key32": "644wF4aKm9ejk8vUh8VpTFhW9c2VHYFSd6WttQ4uXnCR1SeoCRUik6uFNa63jS1TzBvhkCiY82RCAD9GqCaNSJmT",
  "key33": "43GoaGWb8kFWVWrWdAkwcL5RD9wDqmDWRZPyp5vsHzVMA9o4qF2y8MfNVAwamxrJaSKVhyckwk8DyoCYPFxH7QTz",
  "key34": "5t5jUNoaxDQg7qHDfUXi1auUUXUopgSMQoYhruqPcrofw1ZgA1RXKuyPPpE43z91tR2owVFNsExMBGQa6HPtch7a",
  "key35": "4XKhDFSjd3fjUkK9TfCceMVGX1AYrfnZzpidYeEh2mPEyRW37GXR1Q8Ci16yZ4SydvpPuHWpyE1XvtVR5We4FUr2",
  "key36": "3zUNvcbpe1Utb2cqaZSWopUeXaFPTaRpw6WLVzbbEVYmuWxFHJpxEutoELAKQbdTLLtFRsjHVgC7Pgmr8yWEJjep",
  "key37": "2nirCMg5DhdiUCXNx1qPgNaMRYBLM3SQmd5iwStfCEbJfu8dkgNxJt8qpGoy43b4rVDJtGSvvyNMvxuBD8xoWe37",
  "key38": "5CKApMapPHp7gbRrVQNfXdkvMBb7bdXBktedwsYWvFFarkQ8prMdkrzXFJKGHut93ffeuZEc85Z7Hdu9WM7RzzXM",
  "key39": "5NuTxPwXpJrBdnv3B8VEhFEubCBVgc2YRLhmKonqLeb7JVg4FK7QbkzH8LQmwUYjrPF8Q8DdJFfT6mJWatdxN1e4",
  "key40": "mAm4cWxJgwxcxDbSiBzFGkYHpWQAZodKkwznGaY7vGnA2UgXbVdsHdSRETiZM8WSJSQEmn4NxHCCUnAGjthRsQm",
  "key41": "2ayGtAQ4iU8JrKxqg4VxBELdSChcfiLP9Wp65tsSCvVsaWz6DihguuKAb9FgGdi8xx351v5nma8fGqpJ9gEnkMjd",
  "key42": "5yPyubR8sNxhtyHFMxFRMFRhZTC3eNpMq6z8VxK7H1u9AH3uvPZa8ixVQEcLt5DYXNk1Mc8s77rvWaGcPqXQuGMN"
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
