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
    "Aps1e9Tg9LRv98GeHUwDCXaar4zTukLMkuu6GR9uGAZz5a3rxLX7k7QgcVghWRuf51qwvRAGp7wyTwsNrpP2boY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jquUeeqSUQbGEZereBriuqGDdubZ34HTc5QcWmffRBAi4SdVqShR4VPpHMc15Enm21R1pZNLt3DwyK7BcAQTCFi",
  "key1": "66eNaay8ggY7j2r1qufKvTSCaEYo7pzTpQNtb4QnRgjgk23adgsZpvZVnMw6mtZZE83K6LkCpDgxza6tfuWrSRoZ",
  "key2": "5cwGrsAFA8KQPuiT81VYzMpGARTQopY1VP1UmfELTsaMMBrBd4bb9iqsxp4FqoqiiLgoGfLD9q94x8DifCWUFreZ",
  "key3": "3BuHsRqdVw4cdcCexe4fBeEbPREkV5aaMAMZAQHrrhVPZZtWJWYU94A9mty5ppxcHe4k8WNNbKHYW2pPBGRvctY8",
  "key4": "2bKraA8ganEfmYJfPq1MXLniEHXzPjjmiMdBt5L2My8zAW57isSQZbpFWBE3nxT7FxFdHG13JQgnxyw84aLsWeT5",
  "key5": "3vMhL41VDGotkU6RdBGyFwMmMMkAiEhsusJUnS2QnmiBFifJq6vhJvEYqqjbhEAqysQWnuGytc5etysjpYHwtW6F",
  "key6": "DtqV7HEDxZ9dBW5rH3qp6MkzPFh8WFQzYkfqeB14a4Uk4Tzx65TyLvvCxRAd9EsJN4V2amCwRnJWsVoCgzM6hf7",
  "key7": "LhfYBpdmdtpaQzjrBGM3F6h43P1SAKFDM7zdTnwfmeqoDce2qK4Hc2xeRNSQVBp5gLwV4LGqZAvzTWNdeZ2DrLD",
  "key8": "3f4wmtY42oVXT7HB3mnn553mGxM1MN1QCRRaRqbKbzWGC4vX8WfCHornTkpptgKeioBGELqfJHabnQL2ES9RhjNX",
  "key9": "2hSHprJ8gpzswRxYn5XfrUSQxK2nTSYR1vu1ChqU67cBVk8iwZc1YxV9cVkeWa7oHXrw13Erx2BFsKhWuy2Kvxsd",
  "key10": "3cPkLHgBsnxknzs48D5Sko1StEhZaQUfcrNASERPE3J7y8P4G1AenCJYxSfZA2hn9C4MXAnXiEAaxFUcXM9f4sY8",
  "key11": "37aTU3HmsfscLYazbqaNztXFraHD9MrrhK81Di3JpXxs5xy2abctFDjyaxzVGeS1ihhQ98k15n4KWf9G9Q5R2XTA",
  "key12": "3pN3vEt2D9aJVGAFCqTqhC1aRHqoGVq41Jy7muAGSMji89XdLAhuu8KsaSPGbtkg8P7sGRz8vYXCr9jGqvpB7xEB",
  "key13": "632Qz3HHEyGRwf2hmEjxVk3ibB79yJsPi8h2g6MMgxUAnU7JanEfmpGevJ9iTWdmvGKbwrJnZWtKgWTViiy9rajy",
  "key14": "5GAJ56QyyhiMBSZ4d6NTnRzQe6857QNxA5aPV7Gz6n5pzDfMeH7maDmbmj1oRPb4ZgSstSPFNXLGsw1ouertcqZ3",
  "key15": "4eDFKhFSMjtrwpNGYu6Yt2QX7vSMetTydDbrii14ztovLJ5tPNBFbu8rcV98MvXFrWZsRyfqKsAvKegf2fqa8sYD",
  "key16": "5KcrFavKhQFXP2kxdoM8Qji6k1qdqhPjkqngmC8cyUh3G1QyqdBQ2QTLxoYwuyyYABbYN9wR8461ko8joHNZz6Pt",
  "key17": "5PcEZh4bLFKDBT2wqbThhWBvqx7TtoshSach6Ns7Bzk3chUydzLnn2S5P18CSC7bvVKdZsFyQNL1DfbYmQ8sFvwd",
  "key18": "B3MJG3fWHVc3ZQBAKaY5BA1BJyK2Y7ZfmDdjtxg5NqaeUP4J8onNaeDrRNkuHqMKhf79A6LpdhBUYdzvTVwxhqk",
  "key19": "NqKiqmwMNpJPwGpK4rUG26bkigRfEhYgp8UhRs2KjxkJAmzrKnT8yCf8TSEfEbQLHB3YZ5djVAozyYrJj1CqfqQ",
  "key20": "23prrt5icatrT9oHweSDK2PmZpfiyAr3oXju14h1wWvbyK2B1bGKpzCFqvPZLS3UFXubDRvpQzTUPz8yQRsrxttz",
  "key21": "2NwP4yNx9y6E4NkCroWv8mqFQXi9z8x2Smfus6cByK3CpEZJeoLD5S27xfnYYv9SPxsoGyyAwx33cC2zzSzAUz8K",
  "key22": "3rev5sLkRGe8Dpe5gybAuj5x6qL1NeX2o6YZp3KhSAfix7zeEbQPQ87uYskvWMPzJbzX62uA6BVbiBRG6nXqYTwD",
  "key23": "5WkGVopxDmYrkQ8rzLNvsBEDyYpZrTDRKX7LpikpxgbYV8MvJ2zE4QpJRgvA6Cb67UiFeTLFffvRCYpg7ufv2HNn",
  "key24": "hRm4iucH4XbvxHnbbgK6Vxd3HVhLgLV7JDX8HxqaHTsWZ2t8JJ2kkSrRrnr7D69gPWCts9MAJLS4LvX4RCan3tz",
  "key25": "2fNmtiPWpHNM9XzKbbLPpvB9C6eKbSYpMZv1CBh5WnusSwsLGDsdgDZojz1nuBFCNa1oCypxQbgzj1sMUV2uuhDm",
  "key26": "5tGXU9xrLZ9p1w9UQ7QPV51FXGFq4Bw8xAu6AKuDdFSmuToepVaYnbnTkNr69sb6Ecgu62VzB2WBWsReMtTJaGd9",
  "key27": "6pPUuFH3mcvHS8zsgkBvC3kzkCxbTjf4uiR5p8GqkwH4WK6CpRBMDgGQhv4ote8Lp1Jxsv1kCmYVSSbApZM6ULs",
  "key28": "3mfYjjHdpVgtqv5otLXafYdAyWzwLMJuwWPakgzr9MQWrdVFSHPTR3T4HL475STuJp143PXKDaArXKsEdRhptWTc",
  "key29": "3uz6tebn84Sn7pXDQm6mL4nrciZQXAdQSCGkDaLprH4nm3qdLb4Pfa3idHn2xEPRjFP9JoQ2NZ7FDUyoGDaToTTd",
  "key30": "4MsUberZHuLfUbBGRkFZeZnvg7gMMQCkLZ7KKG5L9d8YDifafwQc5YwGRX3HunhHkhEsD7hKPxL2Ge8GfBPJMRm4",
  "key31": "to63kVQV6UthxMaNZRHU6NAApAKiasVgcid9KTNbtBpzULSyDNRCBdyBoaZK1Lr5x5k3wzthBUJtifqkLMnJ4MP",
  "key32": "2PhG3QRckjh5vFc9NXgK5Vf39KTdZPH9VMPzMeQR59CyvmYw2v1FwYmWuHRvMfKy3NoAbrAaQAqACHDhLkMi9bGh",
  "key33": "Fefz39RogiFoHcMHNpeYZqRRj5jiorjDqNpA6HjCbW1pjYotb9TjzRgvD6ahgazauauww3xmR3Vh5PrQarcmfRA",
  "key34": "65tD1xkAitcwnqiTcAuehKMkiXypK12QzGAgnsHTnBehHdqJkG3yPNRM3ddGsRtvgR93QU8nY5iLT7HKSq4TEokd"
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
