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
    "2LApWiPL3XR6CRqYUMuMhQENcYP4L3AfJwwt4uKbgf1TUCgZGuZAipAzQqJGxHBVLGgfAZ44scDpTnY6Fvd8suu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayq8MriNF19LYWZzgWSNZG12p2JuiB4qsd6hGoXZnTERW2Nu3NkiWSDfU3t4JqcJaKEKp5nqj7jaYBoPgRECH8E",
  "key1": "32eJEq3XaSD3PyJpFZCURxvxqwWvYzChZMfVpjvkujcKjkPwNg9vxtprBUWpWxjoFMZv9rZQ1UJqMX1iA6cT6LT9",
  "key2": "3eoo2WgitJ1n24P8YrK2uHEjM7iguZpeUUffzk5bvjesioVmUa5ZjDswtaB2DcBjemAv1WrK5GXinY7NusxCuwyh",
  "key3": "3WXpdC85nhjkkANCJZ7uxU3vJWiW5aVkzuryn2rhLRjPtw6qVjYNm69VBLrwhTKMCwdH7n8rGRVanqXW3gPrLWee",
  "key4": "4WJef8to7WFLGy9q7SnGbr3SnKVX6zbDtXuiqsPfeRcgPwMpRLEXuEAwcdySDeXrHyWBjHfhKFN3kGGr34UqDfNQ",
  "key5": "4Z6jfrwCvNdPF18aECkRFfTBRBxQAsfnbgHDRc6hRnFriEzQnEcMyyidfBzredBgbDoEpig81r2Uy3Vz9EohxbYt",
  "key6": "2ndEyteNKUG1eTcSVF5stEu34MCiGWLxnmi7jxMqBCzpSAK6kapxSxEqcBtnQVZpufD9FNMhThqdTN59fqZmxvTW",
  "key7": "2fsfWMwDo3CAhdPkXsVEN4shc54vSMoG3uyDVTeEM6yx6PZWnvzoev7oDQqbAfZXp8FCieizDyzDUCGuPveuqSk3",
  "key8": "3AEsaES5rXLY8ActN39N9PVyjXqFZreALZn4LEnaynBjW143uSEEzjALStkwL1XAmLF41NqTj6kCb6hEwfv2MR1h",
  "key9": "2bcY47bxDA2Q28NAxchi2kZsjSRLCTHjJWAgNMVEzNKXmuv4RUfzVcANdtjHnTceHq3iUBddxdTk5noxqndsEd9e",
  "key10": "yma79FzRJmmU9iy84hLGYTKDd3xRCgmuWPmm4JmpC7Sa6CZ8KVXEzX1LXooUKi2PdxTSyvpz75wcBHVRjTG8Wj5",
  "key11": "3nKasXWHr6w5AJzCoqSZ2fDdEuPuTpvVznJizNzsxoTXkAEaWpih9KLKSrd7hhttBFwrh581PVPdHfcG5izxyhmb",
  "key12": "5aDWJG6FSZmsDTWqCiKFkTzhDXptp68EZNKig3F1fKWqfV4wKvDRD6o2KxAX79fTDyeiBZ1HAiUEHofavySRW9yz",
  "key13": "4YdvDKYknDV3uAHY4trpgjX6XCFbiTY1jUppUCHJdnZQG7jSWxfXqKwr6KrtPx52So5LXhWY87qDdziohJmEdB48",
  "key14": "34V9hXmBpY67EvPgrDdz2zCZD2jH9Pj8ssxGmUPmKG5y5MQThkQ9RPsaKY8P6WvgEign76YpvLd5Dm9TyzGagLxk",
  "key15": "cdhuJtPzBWXpSxMskpwSAsSndyDR7p9qAhCU2rM9zuX6iuqHno8jcpcgYzmPoaEPSr7zTDmQ6KbpL64WbJFUDbf",
  "key16": "5LG2fbnqJtmt2TijDvipfMT4g8iaZMp4tH5EZGXnXatnE3CEXPQrV91N7NzrVvVksUckYj4Ho2cCthNU3Ms3YqTx",
  "key17": "46RXrs4YxYrtzPjJ7WB6YwHnXc5NMERVamYL6axLnp57TkFdUgKdFJrRMf6KgRniyxBqc6vtMecNz6NVU6FYQ7JA",
  "key18": "2mqH3ouMTCek9VvbWKwJKeFYHAcqaJTkDafMo97rzYu4UdfZdv9PcztRgRUABqJuEf8T2qVXC5WHD4QhECi8eZw1",
  "key19": "4PhmmxK6fcPpj5eytEe3XHv3iRsfnXnay5oJmEHYFu8BkJDtT7AbK4cX9fnFCXKHotFwQSiNsuQrJFH1sJUuUiU9",
  "key20": "2kuu2dLaEZPdxxjM2MeFQiJywCQYShKaJoPN9CPmATHM6NzFNuYH726cVCSnogR7qbhmNdSt2Gi5e6sUW1BXnd1D",
  "key21": "2ogRDBLw29wBTRdofbWqrG6eQejbZU75sVGcA8hfedJYkMdbQmQgcWWPDYyhxuqRDfKswHjs5pBhPcRch9enV7aW",
  "key22": "4oi9FwX5M1XaNUkg7t8xvAKJkYo4ZdrNKhi2U6E7hv1SpQQ8mQYv8K2zFrhBSA15QaAshzAhKQKBQ5jnC9o2odFm",
  "key23": "7casvWSYAHKY81QkmKAh8g1HCGxfAbRm9aKospiJb2Q7QG61pcFrd11NNvVomMJRrGvw4vP79qZkqZMdZwrmf9Q",
  "key24": "4HU9M6N2ZV9WFgEfSqXLTWNN53SYf81TsindEjPD8Di1eQ5CozEY64NBSF7o694tTjJgJLDKoLNXtoEFR7mpesRL"
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
