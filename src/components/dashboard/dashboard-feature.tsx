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
    "24JjMp2PNBM4zZukaStm8SscKoh6xtEKo9h4GjnHEPy1cnCZs4XQ7VX6iYUcrMpeDboW8zXrwXbVsS6aFyuKRS2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qHx56oeqQJgzptjTLM6bbrvSCyDSuNTdQHNTDZUogRCTEuWde1PZJaxoFnuGqZhUzNjvfLJV2QncyVoRFc7h9a",
  "key1": "2TRsn9PioZ5CbQRhHYxWaTBKLmx2MwZpjzKnTAFJ9TpCXZAAPDiU9a6yeCqXm2oDvPEGC7cAQdFCKeEAviAiuAdY",
  "key2": "Qt7Fdkgzc2nZyv6nQP6eyTpKYjBKvgkzUr9wibLLBvLVMVehE2xW852imzWgG7JyuqKhKRfsRUyB3AmDbtZzHU5",
  "key3": "5msTgjk5zjUdKUpkWLmkG6kjVH19F7kaApTVvvwY6Uwpb5er2zqFTgvFrHyofXKfr2BfiTGRjz3PFhrJJGkNWMnH",
  "key4": "3D1aNqYs9XHU3ayiLwLaQsZDy8RQqoogwGdFBaGq7yzU4SEX3scU3txTUXZP8TyndHjWThXccTCYyc5uzQZToK96",
  "key5": "67ro9bwZBDp1rYDBHf6zZPWWuGaKvnL7bAebiTJGJKzxjhfJL7kV5roMuYeobYPY2V4zbnKEdHAda4sVxHtyXZ6v",
  "key6": "2fk5z6HWbwJM2Hk99HVCExqDjG1jdVKoYPSdyxW9iogesaBSA6oEmoz4u9ZNPoMJiLXB21LZga3qRauKJhF8QWMS",
  "key7": "58qcAQ9VfDDmmTAukqfUhyWKkUq2WuBchid7wJHHk1fMYKj66jQJG5ia66g8BJNptbhBRHk8Vr9iyJ7Wi5xDZMA",
  "key8": "6friVenDVxzm4TEhcVVVHrAXDRoXkK7G3Yy3Qa42n612XDKHnjRWqd6eNoeQZVvWzpy6HyGvpKXJ1diedWPL2y6",
  "key9": "3NhhAyQDGVQN5pydzf2PKojXeHNzhn29bsappvpQ9T5bP123BsnJ4EVja2bZwPJwq1GPhZPYUtom4ExeNsEPFAbc",
  "key10": "5TmzERgGjgNVWYCMUKtNZedBJQJKwBm8yDz5gr5mBzM9mHhGB48FHsbTiCr1fge7QSingueFfr7h22WpoG6zwxjV",
  "key11": "52buM51TLfAYN7wgnrN5fkRA2UMQNH3aSWk2xb9DwvYaR5WiBFcwcX1q7N8yg7RfN1XzBki1LsESFSsy7YrB7psZ",
  "key12": "4h1YzwBJiogM1C8ws5Lm5D4zHPi4sbVEafaiKb9wx4fsL2cpzqxcjeQ3kT8dboinuLiGe536G7CDJdn3Mb7nJFBu",
  "key13": "5DosHmnPiHArdivYCWJgj7kyj741bFVKweBAX8XgW2TBG5aLJc8x6R24boZzD5yJ2HboU3FkeCc9qumZobkSquj9",
  "key14": "U6U221iSZyMVyzzQpN4HSRRrmBMUno8W7g9nNSKZrRngvhiob9bny9b15tzPCvXAVmMp9zGCPQfkFG4djbmAaHH",
  "key15": "45UnK563MQMfyqopvknS8TmTbAHANd4p25WDUYhMoPoYJxkFA9rgU5UfvDQxpGZL5PsAjruLjbUHu8WNDjh1K7f4",
  "key16": "35vrqKPB3adzqs9hRGFK1Xc8SqJeVC46yDqMXmCS7S1u5vbnHWKZdJv6JjxUKfVP9ypcFfZbtrjK1LU6Wg2Mvu8m",
  "key17": "t8UCMvh29EyVXDfsLFxWv1bHPnnHvzUhxrv1WAaZ8QKxofpwpYCzbhyF1ZNxGVTmzNT9Rnk89vM6h89ajAK24bE",
  "key18": "3Z5xxKmVTbb5hBDiLLRwE1Ha8yMLu8Zk37Kqeew3nLA1jcFb6m3NrvVnti2Tc5tWiBxX1Gi8e1FBtjAEgtCjQHGr",
  "key19": "4QjohZVK6u2zDxGoSv3o6qzDCa1X3ZZRqMLBYyRFSQkwwVzZwSsW4cpPyeShSryLwAavFYWpUL7As2R5FjnkzBWP",
  "key20": "3MXjbwUX9miRBqsBkGoJFKeVXt6h3mfnywnfheFMDkFf97zBARU24roRnVgJtQMgUhBUhVddB1ofhhJ2yzKhDvVS",
  "key21": "jnuDkFzp8yhSEQMKRPGaJPueHDCoG3iV9Bj6ua3Vb6nLPmY8iztQqgMpYhAKekSFDg2d5TaN5GiacAXj7TXXapu",
  "key22": "2w1SFraPHxiEx9nRB865RyJ3eyzhUEcL1rPzjWvETSruBgLrUEeCrdH4bXeTUwcgqxUAk1DRkn47HHyHE2z7x8pH",
  "key23": "jCCeTRmxTGTPzoJwNYx6BYoZ1hBXfbT3TwX85XknERzCKLTJRgRoLqyzR6UowwsvEjaypffgLB7nYKABvpKUijd",
  "key24": "2g7DnmSRf2cVLjd1UsbXp2JLjWiPt4E82CUjreDdpnoxakWcBjJhg5eenzZW2xVUcBkLmP8hAv8gUW4iRtPGrke2",
  "key25": "3HJUUX7tVkwxK9vyHs1QFKfVZWZvBEaBuJLPycoKB34G7wwzSe3fyGJzwQ695eERRHCRJWgmadZokryg1Ro4csTV",
  "key26": "62WgFUsMsgdyW6ksKoDpq1grn7creAar8GN7K5q7Eb9k5TDMFpuPQcNAYuDccS83HFQUEcLt4mgJha9wLELg8AKD",
  "key27": "2SPdBjjnFrhbgPKM6FLQxLt9nMt5hBfykqpY1GeaMtTSxdpj2aMoMZbvWwDg3m49dbPu7vgoCBqF6iNrh3MLx5Q9",
  "key28": "5AuK5NAbQNCNPdpNBbwTR1P1sBPi4umzEU581zqLiosyBSQwJeeTLEC2YZqrCRBxHseG7GjvxQoKkWSWdjzRRiK7",
  "key29": "nMtacfKv3u7v2EEFHf91FNL6L4YCg2NnfZgjA8jd1T7bJHCsR78hA4veXTgyCkGkwSjzzkZoziApVoSmsLzVEUi",
  "key30": "2GGTjAe5X8FYbYcup6bdRAQpjbxXBYHFLWpWNkfyMXRoLeMfru6NF8XYM87nJQ4JhYoUAA5TkY5yf4S66oCmXKEJ"
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
