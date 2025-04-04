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
    "5yBcHcaL2UbmZAn766s2Z3JEYZXTkPCM5tYP3KsE39ipAPd6S8m4bJ4az9pAqiy3gktZymnXrJEL161Kg6J36Msc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7n3cNiYsu2Ts2oNB4dZfn3FFyUEgbRNq4m7QeTJ5Y2Y8nqjYWTjkhtMjwj2TMqizo9MJAC8AwgdEJBwGUEpQpXx",
  "key1": "4YtesZuRAtLwJgTr25tEWSJJBT5xGywMYoQc7DgEMPFDaLqdL5Pbw7jdpmjQ3EVqo3mQdcDWm5v5RUCQ9fziiDKz",
  "key2": "2WK52K3sGqhDXEXvUywdVimvyET414nD9AvRYEXa531wDkmE45S3zFh19XrHV7c9r18eBvaCV5cZ5EYNmd5mUiNQ",
  "key3": "4AJmC3bmA9RCpMJUXFkpdNapqfHobwz7Zw21mqbGUhSJoKZFoWtLFHMNR2hkvba45xr9Pp68UVETWRZEiLqdj2jo",
  "key4": "46aJ2p7gxkBRfRouf7jCrJqAPBuPtdQDKqivNaBFpXurKoRaA9j98o6zB5dypw1w8xmMT3yXn2kYVBWVVADZmX7x",
  "key5": "2bCxG4BAWArXtJ89ckJWc32bWn4UoZGFbBpLyxHapifUDpj9XFV3GunpV7bA3oHq5hiD53UDvcRsbXLc2bPvGsbi",
  "key6": "3JavHwpYLqqQ4d8ZsZyo7M32GYHZodrYDupT4NHRptsavBYaZwG6Pdigj3JhxSLmVdgAixLTrMYP6zpVwKXT1JBX",
  "key7": "4ZGANPzSxGNL1cfjGaR9ZaEamvAwHdv3GmWHDQ8Xwegh6AHT1kNd931jTEyZSQXn2bN7rdK4FYWCa4zexP97inPb",
  "key8": "pdn3JDcoHAovgTTuzFt2Sy7UTnSLUTLrXjZtoTLZyPpGYVD3UBzVmwLkZTcf4Af1itX4XrKhxQeBtwTBjTntTLm",
  "key9": "4AeB2X7qi1GXQ7yoLqcwcerVQp6qNoERfWeMHxw8s2w7myFjT8iMFCTRkNx9EGHS69k3b1nBvNhvxRZ7bdnzBq6V",
  "key10": "3YZhNN9pPovUQPJXCiKN2PtV4rjVWGwEwHB4WT74aw73Yr5qfvjcK4MKnFHKSGiAdYvsuHgHCbCREnkoYAPUro6t",
  "key11": "2uL4vwTn4A2uegJtNj8mSZVs5vTxh9YeA9wQ2wKrvU4WsxdqeYm3BAdnmjVNqKop71VXGqa7pKeKdGehfuTUFuQz",
  "key12": "GtufWXuSiUGupJWhL7osuhLtjDzLP6GTsJE8tTkhXMw691C8KJrCrey7R6vksyefW1SrE1EB9c48dyS5f4CStjx",
  "key13": "3MnzvfRubk1NwAMPoRpws2JcmMSmhhv6PX4vMvAwijvzJfdjqCxyLjLe4jGUGu2JqJYW1YATbb5RKft52RAQLJz7",
  "key14": "WLqQAERkqJNnZvZGaNFwiFgvQxUjTKX7nhxUKFxs2qA8wNLbNv3gmGRnoNCYJzCe2SiZqWUqaMLbg99eibpcuVr",
  "key15": "4H15VGMhHZRfvPfYZyVwCCkXs1NqbrHhukR8jRgWbfLF8Jh738WgmtamykL7t4NxLDMKQbWNmXRHt3gSBFcRtAcZ",
  "key16": "62fDmGmtwDS5yBTrpg3UxV7EQYCvb5s6bqBUHZDwH5GBtY96cLQedT6KJXUYK77Fgj8ATmH3EZuZ4yjuE2T3QBZP",
  "key17": "4JcEY9pDFQCM9SuS6yoNkXuT41R5w2yBn6z9BYSdgz6PjxAttB8DAwruFSf4Mb2a3ukjj3WcirwmoZ7mY85p6Kwf",
  "key18": "4gnwKDFYU2Bb7PB8W2mrSYDNUJG4ZRgPdVDrsKyuqxUqrDBUywKMHNZtimVeLBbe1TWA1FEYPst7sEncyNL4ojSE",
  "key19": "5C1tA6nsDqEbuGD2gXH5rWrNE1uvxKRZxFidp6kUg61UNnm75hCLHAusygng24YWWG31FLYY6CiYZ33MboUfQ75D",
  "key20": "bwVxS5qNSefS3WqUV64V9S1cDDVLqWu6Ei8z1AisZFKKbeDJua9tN5kVffANFSwcer23jNmccvSt5aeMmMkiSzE",
  "key21": "3fu42kpjGw47m3DGbaT9CJG8JdJccyxEnDe4PAbLwfE6VJcwJynw9YdnKAunAX5tNddK2QF2BG8mKrWFNTZsFxqq",
  "key22": "5iLrqCBJtoct1FBhhygyokRQabD1FheVehbdy5EtC7W2p1mGhX6jVyda4W6wdpx76DnAYxn8gZQsJsthxprDA7Sf",
  "key23": "2FJYJBfBwkHwfVpNHGiovCCDDCpXhZqG6E85NZNFqwoAcHxrYSxM2MiPX19pRiGieUndnwpzFczQ9SckkFXRoEWb",
  "key24": "JRW2Lf3ooXn84BSPd9tCAfC3DZQYTybNgWqquM5jyqR2iTK6LAC6YU4kPzPSJp9hmJT5s55d7EfuFNhASWZEY1V",
  "key25": "3WCF8Ghy59y7ZFxomiSgSf5qJpfgEA7U2D6YfnEGabnMizGxodWWH4FwsuVk41aZKPbBTjYFP9nps2hXAKYdxyhd",
  "key26": "3RYLDxnFUMRREzyWT6K2oErHYrUHvMo14q71KfKzaJ6vdkoKJXjajYid8zpVeLPSPfoHHg9VunseaNKsixKL6mWT",
  "key27": "4p5QhRhonkHxc4FTzE8gfXNeuJf9An6PHtwZ7JgYvwLoLsfcZEtZ1ZRcHSbCaPpNHrSfapauCzedMef1Nr42y2U6"
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
