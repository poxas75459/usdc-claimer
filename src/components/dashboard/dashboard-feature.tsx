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
    "2H6DxhiUcfztFQ2jy2tYzdUX4EW97tvo54sqKFs4nYQtUqaD528MSFYLuJHn5DpeMv9zkg3X11GV5EdcQpeKqoTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3y7uBHTVJwUHnSp2g2gVXpeCcSWuweX8wdWjGFPyNuv47XieNnm6sMbJ7gpTPMvcDgbnq3FuxuKFQAXDbCMUtX",
  "key1": "DFDBAD3nWj6A7i39NDpbimBXqZWKcQb1512pLkvaZ6yrqRMEqjxJNRC68NSs1bg7GefziqXtGkwXFmF3hoaKz8F",
  "key2": "3MG7akWv1VUzetGcmQDGEjN22LubEkG7Nc7ncAaTPZXZ9HpwmL5RerqBkYFSYvHURuNzP9aChrtvGne3CzWrNSZT",
  "key3": "5z1AzDkhR6fHtQ2EshqJEbqa8VfYYn6TtkzZas5KdUyRwQfGg7ReQyRcuaAPvmT5kLYpX4EQExADE7DKUEDEHzgX",
  "key4": "3psDvtoLmfS1x6jUzLrNP5wisQ2ZohZcv6k9HLfufV61Bq6QkSp6tX52nPVu7hvM19t1zDtZkW43gGB6uMjs4bjm",
  "key5": "nYyoRBdPNPcBVFtQn5xs3mvpbdtP3B2BbPwT1mejbkf3rfQG7sVXM6aDewXRGoTaB4T28Z1Pb8cgy39SRU3yNq2",
  "key6": "2Wg47P5bLEYLHfuiCuNkKgiBy37msJF1KECCYoZ9daGjEo1po9Dc41U1484JY74drYtcjzFZBTn5SWDfgbc3CdTu",
  "key7": "263Gkx6egJX3zvp5qZMbVFXVmUNXPxq1aKW4nCCRd7g8e8x4Qbmf2LJf6cnvVoYDPbN1yQFfk82ePpDmQYxLbPJs",
  "key8": "4Gyn49pGAxmKyGcwBKCvKtx9m3JWRTCSm8iywkycCajFq7yuP4muWj5qz6mCQ59c71w4XD3bt2Y6MAubFXJZxVyd",
  "key9": "2H2CKnPsbEU3MgE1fb9y48HCY9FNjRnCDCSD2x4w1KKrTCQBUeaTfq1WLCbNWjXSeuqkeF4WHNY15mBqyVng7Pru",
  "key10": "2xjX4T1eT3pd1HG938jkwLnMUnhosrHcTbP7eUGcsBFfGpg6xs14KBQdZjM6vr9jNXPmRAUGSSm3efcwVgoHp3c2",
  "key11": "5MkoG68UriNjvKzJYtJzqFevYeLEhSQLE4QENm1mwCbNSu83hmjxhAjM1BUxniaLFjojaxokKzeoYC4aPLetjPsM",
  "key12": "49b6ZRQT6pjP2ALQuxR2K4sbVfjrGixvKsw2kF2Qz4Jr4HyJ4ve5FnqGJbRi2x65CQbKLEo213QJGPQkLNazPeUU",
  "key13": "3sxtgk1eVG4q5fmJtkpgVFEpvJ9mkfHP3LHDJWyFQ14YkJwUj9oUkmi82EFKMYtqt72HLo6hTemm8DSJQmJ9Phgy",
  "key14": "3z64iL18WgWZp3h5Dq8JvXzVVeen73N7LyJYVhz5wN5XPp9kcwwsg51yQykAzCYBq4JtErWFCX7i1xFnAspCqUzy",
  "key15": "5HS7Y84ety7WmTnh1C5kDU4Bq3vjtqnjVajV65U497SLPuHxHdVT8RRNCiKBdNbhgaJHcNb1FW7UKJ4Ea7eXFuZ7",
  "key16": "2pvP7khkGhuWtpFhN8hMnfULpJnsRLHdaneWhTMPJWq8U8A4vsifbEws9LCsH6XsXFjXN9zraHTGBGYwwYYg4dpY",
  "key17": "2v4ymJ2snoCdMCfffHYaK8joiRVpWsiRU8v9MCi5u8WWmw8DWKF5VbrP436eCU3rRrRz63pegJ1jrJB9SoHxH5YV",
  "key18": "3EmBmYwDidEwridJMqte3MbAbEnF5YrLjbA4Qq66jn54DtAPZhYeJ5STaPCmU4tGArLU1DGUQrZmt7tgthLMRx6A",
  "key19": "3mH9xnNAvjw5u1AmsjqftUzowBnamDyu9TWxFxakfDzRmnX2z7x6PxD7LmfWcyiSopTzkX9db15kT8q2bkeDSCra",
  "key20": "4Uk8jfvxz4cxVKxxYXxb3kceeiuZqmwWDkLT5pxSjFHMYzFezj2Qq2VMbUn11QQQLX6TgiocAyEbotp6x1rf8kZM",
  "key21": "3vx9d7o7bgo9uKnWa9F42BYokLkZLWhCPibyNpF57yKRJYSjxzxYyHBjKKqETyBgpGpq9t2p53DAR9FtLfBeMBWm",
  "key22": "5wSxyS2aTZ6V1zPBzT8SbZRK3FHnSKEbKcR36mTZRQg3rtWZN4hS8fvP6GpFeoEka8RyrP6UY5uTPvXYFHzbg3gm",
  "key23": "2dNf3xPez6ZAcuxgGvVqXE7jyRsTxUdbxfHGkbMDzkUJsrvgR79ko1ZALvvmyhuZ6fc7BZxZqgHZfJuAfk4eC5QC",
  "key24": "bNkwnYwzU3NHJdZ46fhPKJVqhmCKRPTjpEXwQbr4msuLBzuSTyx99eK9Mvck15cNCByHQZX6WGAMpCRJffkXuY8"
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
