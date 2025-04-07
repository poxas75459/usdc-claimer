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
    "5vSHJLZbj7N5Ppto9xbAt77kAFT8v1JcD57GnMxvG5aoLQisYC5BK8ACZFEgM9uVRG3jeQyDjFYxLtC72VeESnrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKpwvJ8LZeWKLyshiVWQRkZ2QLzK4AUURobf9r6c9Vzf7xoZKqHEoGWuoha7iGt1EijcAnZQApLT6V8nuy5UpKz",
  "key1": "3ihS8LDpadPHfjRwpCBpprx7TcRAEsYAMqn31CCScWiJRQyLoL1him9oS5DohrpnevgWFaCVAFLWQ6djszSQdzt2",
  "key2": "3egEor7q1YfGJQeNqfrq3m17cMFFMznWJeYfPmZ7mnxriwoH8ytHuPBPnh7qjJB4JAVB9a6Z85j8cKuUqyrg4zqi",
  "key3": "2j6hm56vKM3Q9hJchnYcBQo8uRczE7Wep1UEEJVm7XZrRHGAgwCRGZUqjbWAXGrBg6KpHC68F6QFdYegr338bbsd",
  "key4": "2LybAeny8o639qUsTefPkgfXiZWuc6HDHCHtBKzCDrLHyN6sMhfhM7LywgMaFTrKvYt7H8RkGZetLxzGdJAgsdBn",
  "key5": "5myJpqjYt18EYBGqhhZBW4kd9Lfg4kXbw5WaW9hJwwqt7x6xUVkvxrvAfjpYJjLMSvwyV7C7xYcTxqMgZMCX765D",
  "key6": "4HLmpbvDrZSNasjX8D7JZa7W2oT91QbKXFNd2DFNxFijmFi6yBqy6RWLwf3hRhvksNKcdgwtv7LY6Ha85MZXUvrs",
  "key7": "42QuchsZgjBuX2SL1eogQhsprhotpXKq4YPTQsQFUZwFcWgiZrMy4skSmeNst8mAYWyVdMiLnhhNY3eKJ9ZpNhYh",
  "key8": "5RZuriZzdjSRXATzKMBhQRS2WrovEHQoVdDqc6Fq6REAzMtpZuBjAsFM9RduguJPuFJFhunNsSxMg8ein7joYWkF",
  "key9": "3mRFmZgf2iTNYFx8t5BqBoUho4FgeJvMBYQVcgwFEyZpa5syhpgXARVE1WRaPJMsW1NC5uYJ2ySfbRM36WE6mwxF",
  "key10": "2W13xMbuGfK1fCk2GAXCPgAADc1HomkfPvJ8GxcSYMUeWWuBNGkzFq7LNVHpPfS1hh9SpkFWQNbnikoQAYoPDRFc",
  "key11": "2hg7gdUNeJE4NPxysM5nw2pHfE6tgbbrt8adXrHrLwr43UTE3CfVpyaFHxv7DoywV47c8iiNNkRRMfXuSH7E3SSC",
  "key12": "5WTH717ynzD4EUUdnVveCsNS2jHnor2piE6uzJNzGijtwsi1jF3w3n4uamdc7r6dqGTjSez5z2RDswtDkKqNm8Sp",
  "key13": "ztWvrQk3rCPbmxsxrDhg5vH1HvNRCnHWy75zKe659f7nsPdcgTdQzkabNFtRLMafzcK5Y4mpx9qtZ6ZqKAYe7mY",
  "key14": "4a3XKQvTf3i8huCfU2LGaMMnWgB3NwrcesxjotqwKZnczgPTRVgcsZTrNMeBmxuQxBifh7UPMcnwTgNRxc5zomKn",
  "key15": "4t9PZqecTg8MYdyJ2dUn9rCGf47AXb7jaC43N6YH4BQhooUALVe2oxEjkG4hNbUZLRa4bB31Rp4JjtbQT1qhRbKy",
  "key16": "3Zn1cJkjnLWaTuiG997yqX8DMHVZHxjuTNXJkTcAkZbjCJxGWvVW6s3CNfu92kduzej9r1r8aZEA9gmcTjnMYKpf",
  "key17": "3RwKJadJmZZS5zVJg781Gm1gfa9r2BviYcfJv59DarjvYLxXpBRLM9oPDh33twETs8ewcMjZy73FMk5WMEW6AFKw",
  "key18": "jGgmJFwBY7jhXN1D9A7bjdrUHRTsc12YN4JSqx44MmjWA2XLYj9CkiWpHPQ8J5inoyn9NiKBeDQTsCnm9cfhgZE",
  "key19": "3sd5Rsj4JVpdmP7JqAfJLsRukf61hjg3bhhQLkbUbkLgWiXaU8a4QowVftGM2WMG96gZiemih178iisZLDj7zE5H",
  "key20": "5zicFGBeXtATM9CrGiRx4L3R8gEG4CwaQyCh2DC5FortACPxyGXubnss172XEzmQDuiZHfSksHKnXDcww1cLbr2T",
  "key21": "2HzgxaH89Dmd4T6AniP6xZ6sZ2nqcF8c3YdckSM7wTTwkfJs5u884m13kxSvidBcrfNn4VhpmBcKTgwGDXAcC3et",
  "key22": "gsY48aAiTCbupQwZW1gzogT9wwt9Pr3CdNzgqLcBZhAgumdkT7MiyUCrJBV1ZjiB4d4hhvYiA92yfWQyuDvYoua",
  "key23": "2W5pottXeku9mvgpzs8LcDAoLY3iHM1tGWXDMhqSjUrzqoqQ8YBuQnEvDHUpGjJWs916P3F62BFZKVreVeZXWWw7",
  "key24": "5sGXc4E1orpud1qEb34PwNrknPceQgTHWBzq36vBT19CACtXDvRiMwTS8XqoXVrhJ3hCqWmPBw7JKKN7s6AmeveY",
  "key25": "4oUwW6ieHRWNFx72RmaYUyqSxVbyqDXPD1qNVbfMmiDTm8tq4iDS97HJadUH1Vh1k7jyFi6qpSt6v7Fd6BC3B9Vw"
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
