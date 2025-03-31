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
    "4YsKr2858BQ5i5Chd4WKbSjzym3heRqsArAc6dPQQqJpF3BwcpfyckGjAkKxHh8AVoRLwAbpuXzmWaSLt9Jrk3GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P159zRNBhFQUe5UjJRUgnqeHLJpsgU8Y73JXRRWXxgK9UK4znzTWTmZ4W3FMAZsFH5R5izvGMSKYSWbbQCiY32y",
  "key1": "22ZGWmTDHAo8EZET9idEtArYXHbvyzQFg7k2dhWjFqyZ8LM96a8VdzDyYVqTTjRpbwQj2eWk3oGGVRtfks32cjCY",
  "key2": "eXgEBUEipqcVr6ShHnmV7gQdbxF1zCNYr8eBq8uVEPXaN4msGPSMHEHUJZwmGKeNUB3NhbJgqNjNqmnw7uUSNLM",
  "key3": "3GacaYjNfUGfdDKtRaNhqSPZyvvvX7vTF7LhCEXNCMzpgquKxSFa1NTbLF9iACQnaguj5tRU3DLUstwo2dJv5PyJ",
  "key4": "3UAoMTEQPzwB4E4M9ZuBeLNzj4TAnNuXy5x2dnTBLUqEedcucnz84J5pHQWHkGh133HvEXennovXir4p8sDAQ8BD",
  "key5": "2B7FjX4XvqoVBrz88C5YxWetz8cwhqpHNQNMmhqTk8NwcJ3is4aWS6DRNBKboYDoHLpnWzCvi5fjVDNwVg4BaPGF",
  "key6": "5mT9thkTaY4RsVp5K8HFdFm5zmEQb73VNN1Te4X53SvRWLT39iWDvimQjdQ2d4nCmbD2P5nJZpzfA5dABypnuWop",
  "key7": "4WyaESf6sRZVj2NTUqXfZUKzw7Acg6sPGeqatWvHaG2TYc2MuzMZ6EUYf5CbfEapzXXcwra9jVmAgyt9z8H6WPNQ",
  "key8": "5kS8DHTYDHtSUMaG3LxJ5Ttvc8vM2HWXVYAQYHPnKxT4tnUwPcAsKcuFMHMA6P4xrHBJck3fahxQvHSdocxfrmhQ",
  "key9": "3W7KWhbWhmKohP51GiavznBxi2owFCikRjbApPgfR2fFCNysHH1FaD3SkVA4eqBWu3aVqKC2ip5MSFoDCSdFCoZw",
  "key10": "2WLYCAeh2TeVgXvzzBspDLbrcK4y1RaYUgAMYSbqyUzTvp2MVWzWWfbLyAhSho4AQZKYcG8KyKw2JZs4oZZhfN2L",
  "key11": "5FAeP2GueRJggBwZMKXxgMQcdbYNPtXJYi79mxDCVwNQKkWuSPkK37jUnCAU4PqpSRKo9WD9YA2RLXpmSnVWugLt",
  "key12": "3EzouQooByjatskY4CHnRhZfTbKtobA8kWG34HnMkbK3GqDtrybV6hTFn477A71PSLpTkkWD6WnNTSaMcUdwhcR6",
  "key13": "2p2YaGCfuiDq8bbZ34AzzCPoWm44eTxaxM7ra6pmiWVmxyf8vRRz8Y1pUquimMPvazJ3GkxqPdTg9xRskyPiY1YM",
  "key14": "53WWVkUTBix6CJuZ1rEoYt7nLJ1WG31uAVvtH6xs677iLnvmadjr3YYtDY3j25n8MropCZGu4XLUbxNbvsgpLr2z",
  "key15": "9zTFit59YDmg2xXavJNQVrTVeZgmvVFjcU2yZ5RshpjJvSVmyy6Y42TSMuQNoThvpX2QXKtNuxyaYiWGQpgHf9C",
  "key16": "2yMZiD46neKhf5uJNns4LCNJnB9L7Ys9gnuqQyZUPrjM19RaHgDz42gtfTbx25ais77agQkfLXsBmh49W8bTCqYn",
  "key17": "4ouDSmvMSXBtZhBabwLpiQwL7CvXK22RkuifkbtdHofJ1N3qWDpf375h6uoXiXgaBVrPw97k4WtiX4fVcTVBc8Vy",
  "key18": "4uuohFt34fim2bqv57XwckREtecyjcoXHrf6s9kZ587zYwVTfYBJVRuW38U4JJmNaTWWnDsZKh1DcoHPpLj4P4cm",
  "key19": "5CdiD4TBPNMMKWKhVL9a4QpVqxm3mhc9KwrMtKzc8X9L2GLJXFE8dHUdgzFMb5Psatt21XXeD4YHZ1BGk5s5RHvc",
  "key20": "4EK69YQNmXy77BFp2Sk5pP1KuYDaYJhoZr3PLrJDXb2HFCwFxYnSe5zjEAa6UkgKt2LtJiAr4sEukVPRJt5kionZ",
  "key21": "3JrjNSuiRsR8UBsp2BQgtvkNXokiZb8Jooh88nhUytpfijFFALUiU21ks5mSWNDvEULpus5UnA6V963jUEDWqohr",
  "key22": "5hmS1FsBQhzxYkCGtG6fyEEA2D1bTDA5vPTf2wuzd9pN9S6LVetgpk73B5TrVVCAJDxxuBc1A45nzv6PXPBSfrLB",
  "key23": "3XbyPpsGt6ysWxJrcUeSs9VbexfvecqZai7KaMTGWdMjskFBJashXjRJDejguT1zg87fvyLG1eY2Gm9Z4V1KVG75",
  "key24": "4Mo3UTcSXcf3nZRc7SyS6QqNeB3jTHuXFxeX9q1SyFzyeoQDsu9wtPeqKXbMJmXjgqVc1VJBtAdCkV8ACvShA1v1",
  "key25": "5qWYrd5vzuQo9dWaY1RdEiK9p7dxwmBGPKTc8JBca8gZ8cPGZa5vfnPrsygz8PYbcW1a6AdRiFG1Pf6UF3nBqXKS",
  "key26": "5hqGpmgH7ZccRz4CMbAxLNXaYyDgPZurU26cfAeRJjXfDPa93xfU1LJcdkZizyQJ2xmfzcMMvV6MEjUp9AcQp6Z5",
  "key27": "aQrNpxG8nPYMR7qnQ1gWfQA5MrNmZEV7mXcGZzhaDKyEv9ydxv8RqhQZGEwxGcHbH5CZpnFQdZKpDAav1kp3CjJ",
  "key28": "297WFDCNSR59DMsinwbEZXu9ZepDSfb1MUhAQzGKFPjgg3gZPtrcWAHQSWLs7fRK6PWrVekcEX8SyDXXawKwNa1L",
  "key29": "zXhFXjAdzLyvjf4JzRLSFK3poPqFb6pB8KYEp1pAu5bHHahc6jwG2tiHgBNY9sWNSVvdnGfEM9GaRXQxFieftMv",
  "key30": "5EGYJAuruTztBpjxHJU2YRY57Kta5ToHk21SgWHQ45iJeuQUR65J7WeARZJrCKVPcXunJsLNAPw8TQwBqhvqpkwH",
  "key31": "FnJvvhrV5uq8AoLwYujLh16uFkJuSUSihZjEkFxupiZoUT5rAWpxvBZFpHgVWQExaiJVfinrSbtPSqBzcy82QJ5"
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
