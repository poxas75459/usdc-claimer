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
    "3zHcS6gweEhmwUAYb6KYCUXzysE66dUtZcvGrMo4DWnDwd2w8kQXLEGQNzcH117kW6NkHw42B8fv4XB1qHmBEKiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zxDx3tJaPiAGrPiEgsgPxB9zNJdPZa8snRWToSgLQhEN3P4xgWJRpEVgk21WcKQpADi3fp6WpEqiw71se8rhWB",
  "key1": "4MmNWPJi5zM916ygEmmXRwXZrEP3Tx7gEX5NFqzEnZRE5iG9Q1wAAsuTgMNmS6uLQbw1QAU7VyRi1Zd1WDcQ7oTd",
  "key2": "679VMYiZzTk9f7cZ3H4AEppXZrP9yYFJatbEwJ5VMfoaVMBT3t8RRNkwskxKQ39fzznUpqoEQBibHzayLc4VAcVQ",
  "key3": "59fxoGS9spBxfNmdmSbTQSXwoy5CDTPWwgLa9Xa4JMhvwUQEAx5vwV73o8sn4WGjKntjGxEs3sCtHzKFEfPt5ikn",
  "key4": "wufRDHeaMLt15W2uzsXMRH7s6SjikaCA3Xr7MKbrMJvKPnJA9MRVpZG8wxpGgneM7fL1nju7M4diWzrimhMNFnH",
  "key5": "3wYv4RVHhTCL8T9ygXy2CAerDEPfA2wJL9hDAjgKhFs14SRkKnWqHDK84VJ9MPmVSPYAjCYiPFe6ffJNiSB1szHQ",
  "key6": "471RfT7KeMLNhFXJ26QmST2SNmPs6jSKicxoAZAoZthZvF729iBzhBrkvYHnrqbe6tQXEPhFN4tiKY3FG9Vgkeby",
  "key7": "22iWUUKVHu6WJMruxgQQ5yBNHqLNfTXzAozutwnDBRqPhfgBLJLkvoLL279YooktXL7ahML3XkrAN1cShDkk5tR6",
  "key8": "4bavjRxHAmFacyYvzAnnkVUdSw8gPVq67pRrdwbgBQ2Aqsb7Hy2xKuaM8HuBhsUipZWvEizF1xXepXWQ7fDja1Lc",
  "key9": "3uPBDwaXf6iFvDxcpJLzDR75jzCWyvysqmPhi5kNEEUxfdGUxMYmj5DJKRZisPef2UkPEXzP4D14akVhcKVGHq3G",
  "key10": "3D5cJwvCTbtd1BtyFT2FuqCSmM3AqrZCoh3sCv5t9Kuw3h4hNECPz6xPDRj8wEALKQXm3dpuNxkGjVk7YEE5qkth",
  "key11": "HGBTcvfar8xBnqgAr3HByAxyVhTBec4jCS2TVLaYCK229XA2KmSrcYMup9dUriNd3ajrJWhgXuUuPBTp78kQDBC",
  "key12": "4tF6Tp85Thcz9tZp9DCu9Uyno5Pv4fMrMkyHfdzwZ2KpTsrChzPmTFq2oBJJhCyJWr7driibJZg8XMtESiHm7EtX",
  "key13": "etNv5R7iY5AeV4mekRaAPRg7yP1uoiN4jKeQdD9sFAGF4GAxedP9ZZ2Hgt8vbXR7UHWSR8YLbG8b3HdVFy2BHrT",
  "key14": "3spYheoETg8gp1n97qXxSrjvaW21kenajcbJgnEAkkVKYyfSsF4eJEETVcsfEPkv7hmeZy1WBm9xcSP8SMKHiqW9",
  "key15": "5Y4NA5w9eBcs3eWV4yDfSZmNyz1cmZ5iVmnhgCjSbqbRNmxuxLMKSTjku3Be1B22LEJWNWkqpVWradPV8gAEvaiH",
  "key16": "3L5gEejCH7SnKut1in1XSRPMCEMQ7j2s6wRPdRmeUnRF3M9bVpUiCTDAbH9UgmR3tP4mr5upGvosqVHifzDtFHmC",
  "key17": "5kLH4fbsQXUSXz2KqjzWCq78PRwEoigoEQeqt4mBuQyrX4m3sKXWFsP6dMouJ6JShjk7yg732RsPdZmGYZSJkZsv",
  "key18": "2d6cQzSzttTPMTPUvRte5C8Vx1LMMYc9PhzYFwSyDT36EngUiUupU69Ra7h69QnCa4id815ZpqC38WWuuXBN3D18",
  "key19": "4nyQqAu3GgNWWoDY6u652q4ciAUZQer5mfskqXqaL8S6cLXbhCWAPwKcCkYAuHTAU4uvKewYftHDztpqYB1MDG1Y",
  "key20": "5r3saD6zgWmMdRCvmYHCUYRGyfToZ1BXPe1mEX2HBqvfthDuqwuWp61fK4cgf5gBpgkyjcbPprnXMMJa7ivmPSBa",
  "key21": "4v9wJarwYuswLiLSSVUrr1Ao4FYM9sgM7btSzypgbNu7xuDNgsQBL616QPxM8kheYu5ZXNpv4JrPTTYgQ9Ldr1L2",
  "key22": "Xs7sPY4r6gWAzfB5z5kyGkZ1s4YR22jxd2ntrqjbQ9ZcyrEXVMasrWCB9yX5dUvbyJiZjpW3vZTnsABApehi4re",
  "key23": "mGgC66jXoAF8HSQeEsqHcDok6YA6SY1Xz9jkhdnSFe6Wg8ZrezUqggWVKS9PZonDFGhRoobq2f52RBw3sPRHu2u",
  "key24": "2ahVhQjgnXHEd59adprzNCQ5J8SdcWc51zmAuhw7dQEB6KkD1jtfKADrTJE5mpznTdKW4USDQoPdJr9oZNs16bDi",
  "key25": "5iuykGQm7aERjg9hJZ4uumGtcE4c7FsJMLvLyehG5WejpKyuC4DAKo2jecMG9uMofxDUxuPUuXr4FRKrKXr34m9i",
  "key26": "599u2KjqaZdsCbsa6mbrAXQuFDwaJmpuF9bcFzErEDV6FjbjdLhHz4s7z2m6KhJKeQ6LtCR6VzigZdMzD1aeDYc1",
  "key27": "qxynB4fuMdch1GtYqUFcMZYZK6bviRxv14aLgtcby3N2eQXhBwe88pxK457e5wDWZ6w9jFC6EQnQ6VH9Tfw7XqQ",
  "key28": "3TuyD2NSRWzU6Qh5bBoL2znrDRsJhwT35ZERoggPj2kJG76UKNKwC9iWoRAdXhLwbe3xoMsK5q2d8dXkL4XMox28",
  "key29": "5aqPQp527MErxM5mUkHT9cHr2XmpWbsDWgDH1EYyVUVVu7q13cygpXwLaZuQaDbL9Pn5E2nQaGg6if7e2DrdSdrh",
  "key30": "4azU6ajAfB7yj6aiuPcGParkQ7js4M4FW9WTAaACXGaNUWAah2tqyZBhkSRpasGbvoGY1ihFjT45k81ttUfNGb5P",
  "key31": "5XHe8J4DgtBnRuxYjZhTFXB9wmZw7chueCyk35Hqc4jeehKwpdpHvDDHjJ1ZuXtWDUdGAmBRoDV19UXFQsj1KGyW",
  "key32": "2YkwG7zuh2jStpnDt9WmKvRwtrc67ngJXLjkntcLdMmTyTUzERDdfL9tzaUQA5w6s3uoz6GgJuMQe9j7aTbfNaEB",
  "key33": "4Hhpcy2uEq9XvWHyauBWhyqca1H6Ru3CnNw1AxufwH6zUUF7kSAHXMd6BwbFQtTtqfPZZL6UoMPXa2URoywwtty4",
  "key34": "25QsuBbyA67uEDkdzpT8bDro7TMJ4aesP1E2KpzY2Tmdt8QegGiMycUHo1AuayJZjTnmi9dDYAtvPEcn7R9r7AmZ",
  "key35": "2d7jsnZCe5TYyGtSVKfC17Nz51vwkfqcFmqUA5NnTDuJyFpCE249Bpn6QKjdw7R1K54U11iiguZJiFLHvoxu6JYr",
  "key36": "4kTi3e8kJb3jB6TyvWizJm8Shpw2FJ5mhLRxbqsbMCvMRKuaNHU1W6rzgDJNUgVxR2PMvHytjPSxpQbghGyuMB67"
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
