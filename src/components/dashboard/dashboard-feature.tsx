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
    "4LiHLWGowTeLZzjD3b9eBB7DBhJJspTqPvGzTd7c2EWNwBXWx6fQWX8tarGycdUwsvmZd5Jpzr8ifTs4tzdUa2tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gozMoJfSBSB2kmaSdNixp9QpCor5uPz1KLbFQqLEtUhHVVBAnzCSdE3kHBRqgnyJtCyrr1THSSff72rzWyGCTpi",
  "key1": "5z74WoM6zQ7TFCPX5soQ3thX57H1xQVeEEUU8BHupBpufyRsjMrwGUS17HanCYdXzeiGFWPKxyiqtMB8J542Xxkp",
  "key2": "5wBXKGYEX1kvifBuBNFDvgj4nzPUNhd5rkwRYMGzCLPYQH3NhYmrVB1sXneGydxNM7eB4euPc2dNgJ2AgPrBMZYC",
  "key3": "4kJVQcgpxc6X6iZ5fZJ6MLxki3AH169KLnGwnRgycNhW4uApCm9fWcCYiPkhzzwFMWurY1PSLdb54VU9aJtTDSoS",
  "key4": "43AkUkarRnTpYUCR6Eta88efgkJpqeEKLqmyw1Txj2QnYBgW2WYdTT8zRsjf62ngA4E571wcVrHaBRvG3wG19EHH",
  "key5": "5NJunYxq4vdyrgYsCh4K6UF7MUCRcGWAuaBRrhWqaU8D1LHr989uZUyiQxQL3NsqzpNHGXk9wY1oVL7wW9Vj79eQ",
  "key6": "5tJmYc2rGTfBe6HUWnmKBY2gP8Z96X1sgcLmjuFm1eemEe77TFts6ZkjHYfEoMAw6AvkZsWcfkX78MXca2oCDY9f",
  "key7": "2UBxc68TeEE5vEPr3Wir1mSsSmMYEG7bPuLqUW4VsjKGvSaEJKLWQDShq5oNJeURpkk9D8mWnLDj76PPv9XcRGXr",
  "key8": "25MfUeN9B4x9xnMEYrZE3UuFxNh6aozQNYMT8ybKEjVBLsBTdafb4ZsqQ9hftv19taVVvSjpUWXYhGPe4YM3KR4h",
  "key9": "YbZMFqLdsDBaPqF5jQnA1R7eMSk6pGQbk6YaK53raKnNEYBCF1hh1zuHG4maZGZX6QJRJZwKx8gJgwJMyVmM5Zu",
  "key10": "64zUpKWD3zApTrQG1XrC5z2CMMneB5a6iNb2spA6GUKgrBFUAeSyrcNyFSp39B5Lshrj48DztsVWzzEg1J6WZ1ou",
  "key11": "45chPyPEZpKJWKWvjDJPkR7JnNj7K7BScvTpapNe3LYV6pWMoohNZKBh57QBiNbpoDWKedENYmh2ddQRS3eb5rGb",
  "key12": "f7yeTPy6RNdgZr99ct73FnAY5Z3cYYkQc5E8pzcXoM6bQE6d2p6N7yJYgaDCRsyTENYPYeMSccMBQNzwK3S8pew",
  "key13": "5cF789uK1pWNMhkSF8zcsQRbFoF8F23rDcvSFDnLPCmy6kkAytZZyesyG3Sr8hBX3tZs6QqokKjyNwRDVnFAFuqU",
  "key14": "228vbyt9RMnNkgnX2qkWstLRTdDF8z6ALBBCDapoyp7kCF5Pt1RkzQysBNkUN8iARQVRm2qzrfAHFY6tV7qmHcCo",
  "key15": "6282Du39Krb42rTMCyHY69GWxgQAm8rXtfN2onNfWh3SD9uFjdzbQsdzikiaV8asKAR8zTC6vjekuiJTayuVZZ1B",
  "key16": "4E7DWoKXryxavG4xNrV3Kkof2V2zu32ZRes18arJXunbxAWPnwUbsgwjrYUiogXPubLPVgym5G8DxnjchBiMgu3V",
  "key17": "4Z8pt9GngLiFL8yLzRKxi3nTyWSciEaJa9vWhK3sg7NyKZcC2ZpJzeNFLt3nGRnVpMK4ngkYEbYmXuGNeuo23BPJ",
  "key18": "3cKvEKF88ebMEDSE9GKfcG6KArb6fHfb19zXCqWMuqv8qaXVNTQi9RNgM5m27YFp3MmP7UmC8hpjZVz67Nsqd9Fs",
  "key19": "2Vy6Q8KJZ74AgcAdMqBXacgK75SmZgC2NJox4Zbi1MV6gR9zmaqBjN41cbMihexDp3RWmB2qKvPYpgh271cG6KfT",
  "key20": "2DyA7skjxjtVmEKGoyaKGJrZdooCA13UQA7abQj6gme9krpWZqiEogJMcTWTKJKguwCKwDZHwUaPWLzi3Bdt2T9F",
  "key21": "4xv1ydHbSDzAeoTuwq83fkTZhU5kWm4jjjEMYJgtRhSGhARLEWhNm2DnHYgVZ1dy4JyBrSK3Kr2LdBj7dSYYfjfk",
  "key22": "28CimFZiQMj6h866nqhP48RZrpASvdE1hJEZU91uaTtirR9KqHD4CKYkNsNMSSX3kezBVNBVVCeoAebAjBsgtd6c",
  "key23": "66zgY95sCLFar5LHQsrGXgQVBBVCHwAVt5RjDwY4WP6dBaBR8uYz9xCESimUuPrw8e2MehQmddskwnqFEcYiEP1t",
  "key24": "5wmKQXVPQ3JxwYyEf55f8QAuHzRrewWp7pAh4JTuzJ2sY8YJsb8Phk7fB4orCm6XRJw6PPD4tobVqr9Bijko4r6A",
  "key25": "4aLfrJPyh8M3US1y3rU9RBZyoCKrvW41wPK3nXHbSPNmuSBULJAK5W1wcoozSFkThL5ajDsHosugKef9DxrWc7mW",
  "key26": "61PMMovYSHP79chPSTbekuSA7S1b5qBb4DL1agesF9iN7GkLvryP5kAJxXumd2HC5ojWWh4j3nKtZDeuUurgZwon",
  "key27": "443KGYuZzS4KN7A81q9kxFPeWFoZuAxPsrXdqw9HFCa8Ntn5yarqF29qGAgNM6c7GvRf5BxC8UsRvR5cFazANn71",
  "key28": "3unz5sNMjyDCwjmxx5ZxqTYNu5pG8yjwbeLxdw6Jm1FmnL6YL1eLhRv2hhGGXE5jaHt1qJFfbgXmvyQFwg4MGUdo",
  "key29": "45YAf3R9n6ovaop15utyPHneYCyrHDWDftTjcV7hnL9ScLsv1ytXYoNZNCm6fhLVd6Xpr1yoJi7paJSt3BAuMh3h",
  "key30": "57GGVjeSWakAqBDRxBaB8XwBn2GZacdnNka5KCaihsy4t3wbPGmRygG1Qwk7xr7DaxMitMjb7r9b86JJvqBAhMMT",
  "key31": "5CW7CRPYAe38arkiMFWyhuKvChSwRknGj8MYkEPQovgS6amFCr8u9a2QHAxYqkzAhXnNMudnbCLaH5v1JfTT9rNk"
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
