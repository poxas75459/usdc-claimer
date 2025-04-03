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
    "3oLM3efwcTbFJEdudVZAxg2Z8uTvexF66rxcdoQ7KdtxNYzRqBLbEawMPFLxYDmhmUDLzZ1oBaezfMjCyiVBQ8yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttt9cpK65J5KQ5m7msmt2UuUQTWGygWvWSmh6z64eaCB57KTBmQ1maWoxQmSWz4BRuYUS6cQSGMja6Hqpb7o6YG",
  "key1": "418koHfye9PZeDi82dua3ZCSNLZDjpsGTKmVnxCx61Eu7CvQYhjmYM26zvSDCDraXJ41cDFibkQvAA2ZfxmrimUq",
  "key2": "4q4iYvtPLDEtuSpqw9r1h4PhZz8whRTWR7V8ybd9hiTky4GXasKJ6XuWdzxsXVqqUi48wh4BpaZFyYcC6GdRcF4C",
  "key3": "5YK71UuLvzNFd3USH4Ec83iKEgze2UjrdXoC2VaZbvtpueSEUaH1MpT9sSakHf77UiEQA78L7QjtCTxZRqr1K9ZT",
  "key4": "xBWSoFf6Tt1zngqUaQH2dhqEgTP8eoj9LGDMUTX9SARHzdeX2sXmra3BiEHk1UTdB8NJViFWsgnvAKNTdG1vN7u",
  "key5": "2mSjZ6dzAggW4bxzd9EV7cXsRqhng8DX3caMuY1GEYXEQsfv2hRXvcCTG8FTzQhz3yfZeGQ54jbJE5C4EWGXhRSJ",
  "key6": "5vz8dvrD5qadh7ZU7UroxyV7PK17zmRY65Co3MWLbpkTRo3tS9Hx9YDFYoYaitREq29W6vL4rKTUCMoxAkYj3xaq",
  "key7": "JdqjEaMeNUaZmRoKakqtAv5zjgeLd9F5ypGQYHAJr1xoeM9uirU33jwS9PTrhKzhqH5uUMoV3C7UFinx5DQYkmf",
  "key8": "5SzPkCAqyxXihhjUzoQWX2ZMCdYZtd8rM5v9txe164WHdcj1EsWQBYUQQMuqCPhoD8NyrfgQFnhbBvHvsGB47reJ",
  "key9": "2EqiFKXy36BQ4m6bHTz8z8NBfnEJpiiR2b2LRApkEiu1G88CxHDW5nXeoXv8C8d2tEppzUnHkaPgrZuW1fwGMDSY",
  "key10": "461n7ySKBPWnNZezpNR3ZkAcERh4cfS5FAixfRyC4VLwUtw2ZHr2SWTS63FsBMHFTnB6qUn793ZrfEcvKR9MUiEA",
  "key11": "58kiz1sDBqXJPC3jozH71179arM3M4t8KXfDakKZgZXpkDdEXSaGAETQWmnvhDyK7rB68HD31eo44zpJNdj98ofM",
  "key12": "23sbm6extFwvZQCvvqtEjYkr2Tk7CEuhfC2XzviA7DnUGPzUy7SHCxhEDYSAfbiVHMkSDQ4GtEYQt2zBZ7HGR517",
  "key13": "2QZNNAENV7wwJ4XrrjuCASbSd9Z2ASACboWbZ9rtf33vCc9MTfsQxPcH3ThrGqZUZq5vu4KQTuspyxSJHraHW1vc",
  "key14": "JpMVdgpcqTJBAhkc8EWAEaCD13dEnYr6NVSuaRTgqwVsJTcptLPPvw6SF5e7re4UeN9G2JjGsyX9AeMTUfc1HKs",
  "key15": "4ufTYv5k9AYEUjQR1jykie55V3VaU86zvEvsgU3hJPm45W5UbNhWHjpCDEbgdsierworVBbVVPWXNcJCHyV8Sqm5",
  "key16": "qi6cnxMu3iQNnW1d4KSAkHMX66qU426Z1FGKa7ptPn1XTuQBauUuJEJg7BhjGhWLM2YUdJ6WFC2QuB3eQTsNNGb",
  "key17": "63E63HMPrGsr2m7AkYw8tf9zjohHFVLDwP5aDYRuKFtagGje1D3nQ9UMHrfyd82RmBCc1FcaRKnyKPMthgeEBFY7",
  "key18": "HHoguU9T774DaoCiYWCV9gXa1MDgBB27T3CVWQYg3fgmqZhCouSjrhJZKGbdZm6CScsJmaPMchQmC6yG9KcHXrb",
  "key19": "4Nkyvwuz8sonTAwiPWukUrBPvCwNPDgn3Vj91cTxtPfwUVFZDepxC5m3GhzBtjBBQc3uydjXcxdUwkcPQCYRpuKL",
  "key20": "3XVpuZTiBkRtZTFNtAfMqYYknxcusJgTkTMzggYsAkFgVL8V1KMkiDLT5jWC8puASKx6RZkKkww7yEK98aDNsYwf",
  "key21": "4Xu4kuQbNtg17ALZ8W2zHuNVyBj6gnfYChwmxYdmKUbZsFbBW3U8QZDStDPVZU2TWDmyzVEqKk7EeRzXYy9mLYu9",
  "key22": "4HiyyEsF56voknFj3SUQ8iPV51HxRN8Npb8XDTvy4k2RohYEtSoAyvjT1Me24YfPv5PSKcUcttL1P2wWzfhYZCuH",
  "key23": "46bBBkdN35ckmodQSxwBXnNFhc7wuDfTWuEouwVnu5Q2XZhH77o7BdjGq5HVGxmisRre9jfKJRm9NAHWuV6RGxBK",
  "key24": "nUDAGdQzWWjmBAGj96b8Cc36nUcq14RYhYzzXjUKG2dtAs5sGEdaMwCqn4y3hXhJbpVQLPQzpSEzzXiAsVfyzLg",
  "key25": "3QdwrNdaAf6RKoSErxGLqPFGhJkSmXNZSp3Q75927rHERwiFBdMsRm5zpSbaZjHMXjux7Lx2RyMLExX2cDEpqw3Q"
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
