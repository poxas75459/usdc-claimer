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
    "3PqoACV6vBboViBiCmzg8ADKiB2SMm3RcHtPLPo9G5FjfM1iFU4wLeN2UCnikSWzwC5gfiGsXQoZT92nrVjMmDgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SuMc7dS2T8smvH8rgxwcce3FvZdGzUsdDUznAdUNrB83qCW999cEGTHi8K2RLoMTHifYkAZ8u6Li4tcAY4unQPq",
  "key1": "3CTXX3FDd3eoiWaLS9yV6ntj3aqbqgFpuPxdM2uMQ3mgp6dakE9eFu887njuYSjTVH15QBmkZz9LqmEGrjiMCcAT",
  "key2": "4q65rPzbzJpsqwiuiXN2pwKG2Qz5UvCa4vjRtGT6JTdtkEnX2gHu32zjsT6CAWX8THtmMufK6YzwKxJT1LipdPei",
  "key3": "5Zfrx1vwa3wmuQ3FaQ9SESVDiCNJPcF6aQaMojDPcpt6AgvCLZhLKyFza1jT5BjhNFtfYUXKoF5HASu4pzsxHSYi",
  "key4": "ESXRdN9QAcAahCLPcbpYDc5s1uveC7XNM7BMtRuNNksM43ye3dakog7X52pWp2Z2vN29dmZC3C9wK7X6xURsppD",
  "key5": "4oYPYTGUwigjMtcNNKrCbJWHrPvrdNPtS1yFBZAxqZXaBLjrNswZUsF9irZcpCaZMPcMHNP1kjKFretYpPsLE6L6",
  "key6": "38QyU45xLEpnZNBPXKoRxzx1qic7euuHRCrZdcpNoSobrV5sWnwQouAae8MLWo52YsX6GrJnMWyfmBDsXY8xfac7",
  "key7": "5GAx1wAQvGcsmgdPcZE9Ru7yBP5wLeKyEtiLXGCEXz7QCx8khkS6UstuJd1UhuRbF1Ag7JMuCHoHvpjbaRhyPrun",
  "key8": "23dgrPyURG7ToVod9CBF5oQw2xcvSR8VeHxJmttrbgRgRk7ujgce425ZSdJ6APPxWfURJXGvPkbEhdtjDBrDvp1M",
  "key9": "5fsJEA9NzyNjp17gJsii98gwEVVaZmp427LXKyd6uBYerVPsHZwGpAPM6Uv6EUAHQ8j6hhC2jcT2Xi7uSUgzPFUk",
  "key10": "rKEarTScAQYC19b7uypC1xMh5YVUiGtLBNyaBvidHHa2wQztAXRLbLDA827zA8VrfbkFvT3ghGC7dceVLNsSU7e",
  "key11": "4smTNYXDBXGaSq3uPHCQPA2u2UmAgD14hvr3J79vd8Acicoef9cHvwtQG2YEDk77zUFqfoSkKjSEpQovKX6BfxH6",
  "key12": "fCkpjNFEC7G6JtzXgKe3YXepaz4uSdWb7gZrzUozuz59ZE3Zr21Qbo7KtcDfpEkb7bjfLEghphsWM9bmSsqBCwq",
  "key13": "37GAeooECbZiVEqpvvnzCyicpHbqeCYemsvFWiFV2xasRTaoHR1fPwyV33P2pdsgcWDXzDzhHhPxfpybrwAJ2XFS",
  "key14": "2uBbWV9gPiBwSNp1kyt5Hhjp5r3fmJZrqZPTBMGQWUqTL1Xh956SLAXNKQDiGk5r3nb1UN9YZugLHzQ2wD2g48ks",
  "key15": "vepyLNNa6rWZ3HYZqfSueVqpfZuUh9fBcSuCpzpYUuzxqMV6pFWg8LYj9cmgaFWUYXkhFW9HSo7pJDGH54MwMAb",
  "key16": "5VuDzN3JD192YEbAbyeYN1AdXamEHy8e3UYqwBpKd5uGKBMBM4sbXRnEkEYfo6snRaWfzbsRSSCb5Gz6ZDqP4Fe3",
  "key17": "2fJWGCyQZSvTm2TSwcoHzJbVLLeo53mHqNU8dJ33krb2VbU9uDyqAikRNciNAueJddFxR1zmUVSdn5smfNc6FWcD",
  "key18": "2McZoaYGtGH9yiiBc4ogSM1qYV8ccAWdkTogdYnuXr2eJSdDp4x9gjeHorEVnewbGQ3jkpnHD2QPv4iiUj2F2Szh",
  "key19": "37fJo5meWU88BFKxb3kg4g6G3gmcafiqpdFprbvNNUQgTpBs6LL2c3uvmz3aQ5bRZ65Hs8kTNmad6HmGyCsp3NBU",
  "key20": "2Z9knPFvPsk55ej4JMFmsKgBVAJCnwFEBxZQ6yzww6hn2CY64ACi38SaxkcJ1EcXRxhfmGgyNPD4b9H7wXewxNfr",
  "key21": "2rSCmMqxwkNMpM8VVPH26azTzx7hn8HjsrrRY8x9iZQekUmLvo36K7Qy5pnm7XyR1EiMV7GmFz9tUaCQdxsr9z47",
  "key22": "VKUqBqCFSk5AuRj9u7kuvQmp1XGwKnfb5ZQdpF3DuysMFTc7ejZX8mE3pV3MAEVebjJGsMTToREMzq6jfCUvqYy",
  "key23": "2MStsvS8gWNc3WU1Nv96pnCjJXdKfhAtjuY5zfkZx63rAPT4R7nq5z35uvkKsram4LkjfKttvwDFoo4qXXQciRAq",
  "key24": "2RdeTDsKSmQwMhtYpJPdVFB4FhSAGbfah1UmXFecyQ9tagjipjmsYFc326BsD6xydkwMjoHAfo27vcS2GGduJCeQ",
  "key25": "4UStxcW5dyVQfwpGSf3Xvz41RRWRY1VCLZBGtPTq1h77LE34yYFD2YJYBc8XVCKaFVYxZLy59oBSnVvFQMCNR4dz",
  "key26": "3bzkQGY4dojthQXH5oFRMFFPqpseVdG2ThKfT4cqdtKYkSfj3uJHTJvLFFZC7so2nku4pqsLvAspW1Rff1xARG6e",
  "key27": "3Z5faKnnRXeeAexw8coTQQnhCXC3GyqUSH8AKMSAnvcFbmQDFBTebgrfjLDn2dhhPBf9JWrTj1nEiezjhayE4wbN",
  "key28": "5KFLp3mYEQ2TJYk767YyDYdh1gYu8PSb9JnTXaJxKWCnx3dqUS5ton9dbcszManFEneFguZDiGGgMndg2V5RzFvr",
  "key29": "5pdYxy77bTdnCbZusud7uPtYdMw792WJhKXbV5eB9VfC4aUNraWcpnyjKVifYdhdWP7PVCorBT8VzJidaqUwow7A",
  "key30": "5ce1FTM3xWbrAWQjyKoi4TRTqBYpDmJKbExb9KMCpcDbJXFKcoubDujUyTXjWruqMBRWb5LqsAb6mTtNybHQSEbP",
  "key31": "4RkqUpHXDVQBg1CRM4vFT77Mc4zjYZiwBQQDAfghF3ACecpUp4QdPV8okgWpJcM9DeCTJcGD7B3ZbzTBD3vfnPmm",
  "key32": "27GVzxpGpJKZdB7dyRzmX41PJjvroTx9utxjC3gVd9cvbUUgN7mVA9HKbBepkoxMSjAbNve99HTzugioPEGXqPjv",
  "key33": "5BZASpZ6BSJi9udgY4MWq54JTgdFGJvXCxkXHZPuY4zAt5EXUpixP8U49AfxJ6CaSxwutbbWJUzexNVjcGfkz8tn"
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
