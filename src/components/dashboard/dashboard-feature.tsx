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
    "59uyV7hF96UAQLMEToGcex6Ei9tJDWVVt6oTVqZkjH4nSFMtnoZWRYZPMm1ML12rjo95EEpgLHW6FbzrrvuuoWFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abePDFXiV3HkuxyN5nFX4No7nWMiB4oxuZEskhkbG6N6Qt67QRqXnkzYPkTNB4egZPzYpvrfDEzgTbWzXqAZMVB",
  "key1": "67kfCcNhbz3tx6uXWTQUbtPPKjfouDd1svJeF4eHPjTrTGwhcW9a3ZhaeUH6dZtbQBqj7R4Ceervn27gevn1HWak",
  "key2": "qHFi9iFZxYWXxn9d7iTtXuQQSriW82qWd8AW7Z5YfaeS4HeXotaVtuGMAmj7Yn96LxkKQX3bxvd8bjtabLCSADt",
  "key3": "bN9b3ybUe511QyZePf8Wwo1SgrodZphSbt24xM3vbNaE9L8bnwoijMrN8izjcfsrFZ6fbRdyKvdJJV91sp46Q1t",
  "key4": "2A6XGWy1qCmJsAdrm9P8igYrHSmAJomF91depNNTuRNWneJTRvTmCcJrEVNKdZdA4qZTus4GXxZXqxFTxSSUzzA3",
  "key5": "5JfLomz314X7UA5EhSdsukZntBN8gB4mckZJ93fJ3hcQgKxmXjNTfLqXKcxcC8cm1eEqud67otngRdkyTxHYMV1W",
  "key6": "DPKh7GiCLhr5ZLkm3Q975sRVFVbVFUWaPUHKPYZLe4LMBLsHyNhULuEY6ZU7Bmeicq9w7wLDmr2UzNct9CmDJm3",
  "key7": "4ARu7mLb7AJoiPR1hy7UrJoEwXg8RmRJ8kaQT9hiRv27D82CjYgMJEAPMWP2ooxSX6XnUZZBge7Z2FSapjbj6xsf",
  "key8": "uGFcgwc71vM1ua4Ht7WR3aupfmBQ2wi7ZwtWsJAXxwEyUj3kSRtZqvRVfAhNs4FArhiE15psEEfbR5U9NfJ2UZb",
  "key9": "67aNb1pztMpRRVy43zFEbDVUsHWHtobBxn35bEenJdheWMiH863ZVujaQU3WcLtRgYg5NTVtjN9fcUuh66KapWyx",
  "key10": "3uQF68Ktx6Adp3F4E967A4FmZqsGGCLMRsVRVN2riEfMdwQ1jJUgi2JUmyzH7ootfPbV7ttGE9BVQ2ecVVhy8P74",
  "key11": "345zmWcJ4tiCEKoYSbBxsdcxLJDYem22CgBt3EwRunhhCoC6wwtXh6XenWrPbALjxzh3BBtGdJVcLcVLN3cu6tsU",
  "key12": "2XSiUM581RVHTpQhzmY3WivNt7tRgU9eZ7jvVdrdZbx6REPgS2ofC2SKPVHEZV7nLzjxoB5KCM4XLmDuo8bE4zYq",
  "key13": "5ne3pcutfJgGQSL7taQV8MuBrTbzt8hhTTSoLHrnf6jSSPj7nWC6jqEEHQCwjooxMRZoMPUhbaAPpoy7VxJkr92m",
  "key14": "2m6xGz4yR9HbAHtyVwDjfhZdpUWMxoWhK9mthJPprHWzx3EPrKrZ1F4pcnPTTXaUUrmGKAmT78CFSc33jZMQTdm9",
  "key15": "4sv6Pf4GGk8Bara5QWn9b7kM7Fj4G4t9n1xbx5CkpsKnhyLs779qCRmeF4FscsvJ1Y31xpJx9gzPisYACYt4JZeH",
  "key16": "4CCjigSPMV57n9GrQrxBdVTuGfjMtEGtrTaRqg62LYSw7S5Bkyx1hjXPJHNZxxvcLamCzzhbmgPQd8BuTff4CBgp",
  "key17": "2QQwtRk3FDxJDobDXD59qTwDW4QLNsE7KmW8LDqfmMPESa4Jn8Wn1b72NhvjtCCHfwAepLfAbkQgxqYHwAhnEbsF",
  "key18": "5trnsXS4enu9HnxkznuZhxPZvY4WBy8xQvVj1zM5dGAFxgDD1oQVLVEaxb6VHcwxrZbTJ78v97c79ncpwFeeVtEy",
  "key19": "4Pvf72d7JNvkXfSMzAYHHdeoC5Zat48VZffjdMK8AG68RjHF5nH36jCki2fqRSmZXJ8V6Y2MH5WnGcTaYtna3v2Z",
  "key20": "4gRPi1aAqBabhmXpu7iQc24d49xbQkN5pxehhMG4NDHNszToQmGEeRBrsqkEfGEuiT6MFrx5iFXC6qRrRftctFrr",
  "key21": "2DEqwgYiiygkgtyxMegy5GrTomTvEPV5s3EyfmJ5APf96nVtooJuqcwBbs93SyjNGMQwfV5KtHd21zfNTBMEU7yb",
  "key22": "2vTi7dE1khywEiCeC9MMPQZv6rJ8UkKM4Aj4j4W422NeAL3NFPCLLqg9iDcjSHFgUuueikq9jCZspS4u3qVGecRy",
  "key23": "5ovr3XsUqe9EERLSfZ42T7oq2pNb7jac1z6aCvBy9pyjB2QMvxfXsyyAhHVchRnkL8unTbXabWyGF1VWzLc5GzEn",
  "key24": "4TdwHNzSK7SiVZtJPfYmxMt25UaQgGqvE4HCEH3KDWzhSs8QLzUoHoRCEzF7MGY9CvSHKffS9wt2EZgBNQYGDd24",
  "key25": "3fnJWyMF5tbWhzQUHL4dFnn7jicV8Gvfzp7q82HLvDCVbvf1ityaL6Q5DDVLJH9HhrqoeGUPWQ6X9rRK31rFuiK2",
  "key26": "4Ka15obGQQcFh6jJkCcCMWzQjjNwqX8qZTjRmmprSzoYaDXgVax1Bf3XKPKQ6Kre9iUCa3ktppmEEw6XpETRavQa",
  "key27": "5BcYCaCMTh3Mbr2ZKWN5faBYs5n2BBAE479xTxSaNcbNpUBmoDG1tSgFc1THTr9hoFpcv9oNkoTtaQ6xQADCxNW9",
  "key28": "2AbtP8cFyWPq3J4shwMWpBbRM9FQmMj75dGwKmfptFMWDy1bMQKExcBofi6MWdVkGVWtCeM6FXkMoPN5CfPSdJaA",
  "key29": "3A2jaHAm3qzjiSjyDQwCUmaSsGmQH2r4GXPxXXAXVAc1mXv7d3qmoTaggVDfuxUUKHWqWgFvGE3Y89rzzn3nTiN7",
  "key30": "3eZFBM8aAwr7CRCSULBRXpXDzN6s7X6bDxaXdEFaAe2ZdaSan6Vz5C64DKeJVFnbQ8DpRPoqWvrB6VmF92s4ULqD",
  "key31": "Hz46cZGEruTy4aFwbGRgxqCAKTZx7MkfguMuWuvggtTcrKkyg4AVAJixE5XKnN8xpT37HApqTqvqyHA9ELAJSSa",
  "key32": "5cGAnG9oBmvYZ2fbDDRfzFdvBMC4nrDWtkw5eJeUsUvUNmwyndSFUjA4hALEMXxNYo6xeFyGC1DZh9RNVryNQRuZ",
  "key33": "4iKVqYQ7g3AzCdbpzpqvD42HMSkBdwc7Ww5B7JJmSeg8jgoqQZRax9cpiQ8XfTgtcW1KBLXEWJioV9zJTNLmyaEv",
  "key34": "3uis6qDcWniriRTQbb7aF87CQJEsBa9A94fR3nn4qjbFtrhPuF2E7udfQHZVS96UdxLQJiHKRnv4a22soYRjFX29",
  "key35": "dbCFPp9pgpsMwZ79UkdeoSZ6HCtXBqLNBXW6sh87TtBpED7s8venrFuWd5EanikBPsweJqKDmFNWjthnpdiW1eW",
  "key36": "3xg8xZNEYVRu8iMCYTYfZ6EL4zLbuu1aDuXX18UF46SL8mpkMpuYUeyTYYwFTK2V6QhoQHiFNb8ZAjrEo796P8o4",
  "key37": "3AovRsTDPyqa5Vf4KMMy1XhFTA28bhmoZFzKyPppy3U2VGRDmF8ivnwsf6z4u6yHU9GguZh3VmDYztt2nCvHNuBQ",
  "key38": "3cPUYiDH5bCuFbqz1zY4LidbKZPNUZLHnnPPGoa86gtRibP1jWd9m8wExmpxG3B7ZJRj4PXmWrhJeTRQWESjDMUj",
  "key39": "4bmwJnknMm98vCLgxdQvHT9b3w126sXPtYZQP11iUMdWV4wBnV4hjXoVLbfo1pPf9rtGCas1xJhNEfdwG2bQ4Syr",
  "key40": "3BzKcUECPCM942sWwK858DZAKjxF4UzsWnQiNqWDZcYwF7RKwKQ2fkjAJvM15aGwPZN6K1F8tytvpeUJmAxVW5rG",
  "key41": "5cQEFyqobACj68rTxaP19P1noVaGoH8RRSLQUwrwgppMrFwFH8rQ1Z4q9GL4VxhoSSHYpDMk8QakkfKJ6RpJis7g",
  "key42": "3P9un5BzWFtuPQNZMSJrYcBWw7FBidsKHUaTyStEu9MQYAskGNpTjDJktj81pVGmY4rb1JuW245Dk4mnM3S1JD5K",
  "key43": "2NMdZBrH3QPAETV5rLLADNijFMZ6ngrPzZSdfXmtByjcXeRa3wEGqsaR6oyN6GtMHfDA9ab8D6kMTyc77HEFP8e7"
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
