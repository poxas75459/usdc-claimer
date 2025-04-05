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
    "31MWksK7LVbUxe34kjan4bAehrgDvgmFedVnPqtJtmjFGNCASM1qvdpcqobA628cKgAQAVg6xAMUwm15rz1LedDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqTDTWi5jjodU5h4kmdvd7yNVVHkmdypGE8ZsB7HAPuJoh3vuABTFHBsZKU12kHtfZof4LV5346nGVYRG3RK6SW",
  "key1": "5iozcQtPyGCzwqEfDe8Dtds7JLq33NbjgxFVJ1WW8a3xfzya8TLWvJX3driDJpjRfG9pJPYMueFJZab7wNTHGwzR",
  "key2": "4Pcz5TqYyygsrii9apYUWETJLPHgMg8TZLZ1TYWu8RnHNdsmHb5cNxe95yxRRGdhVmimKWkpTnRB4v25igvngDRe",
  "key3": "3tTLBWC3oiTQBh8iS4YGQeWpALdKT6TBuQg9NW96yhaRM9M5FjZCMnFX7QPerDAVqo19kGhXThmkYQ4ym8EbE2cP",
  "key4": "5qYwYGv8eFxEsvHNDVxNfxJL1jnLaAM4LqmaScSivzT7kCMrJoGAGN4d5n1Rp1hA3rr3wbhicqu455cNboLZwYkX",
  "key5": "5scCWJqZa52y9N1gRWAcFTmdRRMg1yKvoxkH9PsbL1mH1Hg1hxJ9Py2JHnpmpKpq9Gzw5keuVYivPrUWc6WJqKxZ",
  "key6": "3R8cBhS4yuuqiHvEvCSqAxQaVdadx3wzNXvoY6kDNa5EpxQ81raXXZfDueKp9n2JKNDrvUdE13qHFScgVA1DFGXr",
  "key7": "2HwUNMDoG4tQHzsn7su7F6VMEZxBp6FHE4a6L8Ea19YH2TMbFAe5WQJqYWR9mmbixVtKMhRARkxRcYau5X3jdcFL",
  "key8": "4gsoFzmmaxo95Who7jqsk2Vr7NrrqS1iXCsDLBh4ZeFprQ4jUUnUfpSGNdqYrgW86ApawXmbmXiQSxbgW81ckvEE",
  "key9": "4pjvaSZADqMEBTDaRWJKRnF15kcMivYuH7tC1cKh7kat9Y2SsJC7dbAn6RtkxAAehxenAFv7EyqUuBJUwXRcHCga",
  "key10": "4Rxf23HKqbw8AdoRJrM1rpS7jogXZbngyfdmocwMUFnnbqnN2s8dceBgZnoBC6LqTchKX7Sbp3WhaxtCAsh4gxKY",
  "key11": "5ePLM6NqV7By5MoBFLJLnn8MRkY6PMketVpL98kdKUgeX22T2GVxcWJojyKumdsSvrs2q5nWhmyTCarVoCuyfNRT",
  "key12": "38aMhuBZFLhojr7xfvtHDhUao8ndE6yNwvU1pjvjdaUPQVCbnh5kUjHD2EKRZ1jr5m3Kf3aENVELurr16MTcjud6",
  "key13": "5ky2t74E8kGK5j5MmdBZTzHK5hiiUHbpPJPDdhTa1qiDhzMJnsXjzy2JRpTPy4ucdxK1MFB2qh5uWmQxrJsrUE8m",
  "key14": "3AiVSAaHPpo97PHzCumN2H3MXn5utFKtdUPsHvYtr4v4z3L8j8RpWBVr8uRPF8cRqvY2DjRL1gWSWnYajMxwNR3s",
  "key15": "5VNotCmVCfQ8fn5HnsmgVEqaWnm9ynrdFRfzcfV31Dw6GHRwNP8Va5QBPK2e34w6ThsLBecbnv7tjpzbPy12eB5Y",
  "key16": "5zVjQNdwfzYHXgDzf6TPR2tXXKTVoUQeoND9AGuqTA7dB3GQEn5nBJgaWsmxQdMbWgHWFzt6Paw1g9gZC1uu33Xx",
  "key17": "dSggBgmqHim1Ra5ihFMYb4fAHwT6YS2RyLyQSvsd1maFGtMNLbhr4iSfVNP9KeQdWepFmEJstgrNizrr8sew71b",
  "key18": "cMM9NHYUb69q36fmW84UEFUvUtetA9yLhT58UxPnkccLgW5GhEetZHVcJj1XXYNV9W6Xb1zar3i1BDDr53TPKxU",
  "key19": "ZGJL7tWhVWLzk8ndkLa9yUiudukDxQRwAbjmvdT1WhPYWEq3ZhWvxnyLZGPNnSUUqhGFbiMBdfZzYPsqMgJzVjD",
  "key20": "47YQghbQfqu9HghX2bQcPgFU2V3zxzyAzg3qhsvJLia2LSy7BKwSH31dZ9LUJ4dMjEba3rumN8NLTKczECy5VPu6",
  "key21": "5him9hXVkiqrbh5utid1H6e6RSSjqjBwN5ka2Z7ByBm2AbmxR9JwzuQCbUsxEgRxDNTsJCpedQF4hCT7s1kZgDW1",
  "key22": "5LpsRbp9muiVvinhBdjZDRJ78BDiNhs9QfEn8WcfAZxagLi6kHGpjDZE2iWmgCZw7A4rp25Voy3E8oj2bdG57Jo2",
  "key23": "2CKeaf4y9fiSn6pfme2t8RVc1yqKb7F3eajYrCoDKDd4j1c37ypT8zicpPC1KTs38YcT5kJ3qajZ6hbXLvVPr67H",
  "key24": "42DJwXyRPPg7UyRm8gZJXpPX2MGqFjG2U1ZYrfmSJbUfnizP57h1NVLfUPK6HeLHebkuToedX56gi5DmNo3emQFQ",
  "key25": "2SretvFxZo2xBS5425Uo2m9wJDbkcHAZjv3PRuGTkZpSwMjJvtAgrLWBaUPb9o8NLjayLXMvvuFWcLq1j9Bfu3U9",
  "key26": "5BwpZjpks6RUxCwHgay6DZ1UoZCGGvVtisoMoVjv4aAZBhZT7RS1mNck3U4ACJQ3PzZgVanMixVPPEVB4Wgd5nQp",
  "key27": "2PXUikgmYGh5sUK6wvd3pzLb5VVbEcac2Nyta6MYF3TXVVJYn1VSXtBL6evkX1nsgU4mAYth63zvkkXfK2bmCouw"
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
