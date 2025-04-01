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
    "2MafT2dpQjsWPjgHRU8orFqgJJ5Fib6rWKiKuSKSX2FN7oMh1utqfFcs9AFdQ4ck5u2yB394dcivrJZwAeBWHZr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJEB2A65eW1G9gXjMKA6HoCn9XvEbHmafzDiLqB6rZUFF1EnAzm8Vh7a28L4dMiHRjJsGzRgNVJMMcGffSLVTK4",
  "key1": "4ogY5vsnX4Usb8ptgQb8y4uaZBL51qEsoNZ7eXzsmCByNTWqPig4BKPu8bD7gMPe6jqnqxGTpMJEEj9QwuoX9FBQ",
  "key2": "2Q9HXdrrskMxNhnP7wQtLARo9XaPCjk3f6m69XNVgJKUTtuqeeaB9q438QHfxsc5uaHztCFxWBSEc4Yv2zR2EVB8",
  "key3": "2KySourCoHCaXc6ojfS3TYazUXdEEZNnjGnMLxDbUszNYzdSwR6HUDL29jJWsXKtZ2aNa8s5Etknyn4xWMpVQu9m",
  "key4": "5kWvUPr7Wt6EDtfAYZ3pzFCGYVrnypE9YWUYQSbTf2cpT3hBCT8pSgc3257LT7FXraVfeCuMCBwmdFumUAzqHyvT",
  "key5": "42sXo7AaZA166t9R8FE8bv5ScNn1j5nFCLh1eggNBrfsfQxJX9UURDMsdp1RWPABTxgcM15WioGGLeUT4CB4Wy8Q",
  "key6": "3CUV1wao483dBiXBA15ALqwb1uBMbL4x4VeTnvgt3X32BgY8xFuSfnrR1E7dya5FvkRnhgZBaGf9pDu3xPDntGAG",
  "key7": "4eK4VfZm9f29PWPearbeNK1dv8x9w7Mbb2CXmjzYsowrSCTepSvuBfYj5zi4FrcAan4d5DGNAao16DXrbhuRoHhr",
  "key8": "5BhiVL65WgQdBHWqDNZwFFXom6N4Yz6oQsZpSJf8wTDh8MwC2mP4cLzaMLXT4vFzBYxsKVgBBfpLKVvGZ4vmFhgs",
  "key9": "56HGVBzs7s8PQrVXPQsDFSWyJex7gf5zVycUEXapJCMW4vFrcQZDjKBcR8haQpXo7X3adhVLxPRxYtSKP1xK9N7T",
  "key10": "5LRS8ftdzNQhoX623QrNxxUURs8R7UDrSyMJJAbyi1ZfbfDCubCenjZqMWqGsLmTJthZ25mNhUnHuuaMcrUQdvtn",
  "key11": "2MpQuqUp7EHixkg8opR3VpqMcaSth8nWxui56CiWnsiYFdsPsWCzMVNJNZmnRGifGtnNgTuCm5jHLuBB4g5TWnDZ",
  "key12": "2quTkWNaQQNsX8x9AwFidLGZS1GL2T2Z738Rf1rzhwsSx2h4u6dUtchSjnZG24jhoy9sqABwUafX4BNNuDJEjPfx",
  "key13": "4tRYUFbiXFuKSUTf8LvAcdJEcbxgkhJLxiyzFsa6Kswr4rWEKeuFLz18KCew69PoQvX6MERUsuWcyQzahCVa9Nv9",
  "key14": "2ArRsfL33F6mwEaHtzttqz1mxDA9J85zihMvg4zTwM5fPb3EN2cNmw3Mh7VBCJucLDNCdMQGVTL6f69hnCLpFFim",
  "key15": "4Wtiz7HhBaT4knGWVptHUoNV5m8P9ErCWKYyH7GtVVstJvkQhMLEAywPHYnCaTSHvoZYnS2C22o8U3VcxuRmAD1J",
  "key16": "4QqJbdkvv5qJEehxa3HzvFu3jBQyddSgWB7e9a4CDChh88LqaqhkLN3jAbMJXCuvnf5oSr19b45Hh3YbAvnAJbbv",
  "key17": "3DhUogZDDASLejmVKAYYC19YX8ZjcK2RjGNTgxuiE1Ck7E7gP9uxG37Vuoh8kXnsN5BQC1f6Uoe8XgpVJPFKXU3n",
  "key18": "2buBLbN4JjR3BW3rua2UY3u3bDzvo3wuJz9H5voqpeAqCH3UWE8ycT9i8xYQ7MX8vqrGpW5YcGvPztLfghMP5fEG",
  "key19": "654j1YoQKi4WvYgb2xxLhdCiAZ2WDcE5C48kuiuKvtXUamkc7G9SbmUjfHaNCskwFN8Mhq6G6pcSn4d3ps7dr9Xd",
  "key20": "y26ofimD7XW5STJnwW1HrhdMHNDiQFZ2ZVDKkm19B3cAx8p8PqDZgR3gQk2PihDT4JUvFczTibcYxA51ApwtBJq",
  "key21": "3r3cXwTrm6KPVfFPZdKroUY9o9VTkNA11gmhyuq6axqkmt8k5b6aRnKjuhcJkLFu5Sf7dc1aHVSYhG3UARBJ1kTd",
  "key22": "3y6EEHrE2dPSWWyR9gfN4GuPoxXUn8XSEQBtPhfNZ76EZxPSL9Rq6T7S1q3HT31c8yA1rasYLUkQTeXrJF4tPGqH",
  "key23": "31DcDPLnCmuo5kQdA2i6pD5pDgwANmgLm9avvnvSXDehMRpCrW1mJGB8Ak6Z2ji89PGqosTgk9U1mtSeuFzyC41U",
  "key24": "3L1cQd4YKumQjzFBbVwpjdVxWkQxKTZaadQwGr4twKzS9gStkV7rFmh7Fb4JxuU7qXnyxksoE6r3hwfEJuuYusW7",
  "key25": "gRZuiJuN1GWdrcZLgZxdX3gCJsnB18pEX18757TeLsR3kfrpKJhjvGDP8rfejwUJaF8JRNRjNcDkT65QTZTQ8Fq",
  "key26": "2PQLG5dwT6czkUL5g5VQ6huX8zP1gdQpmxprSYNpCJJ6DgfgLf9Li9Lp2zVaWoLgGSyXX4N1jQuSWasbxqdwtnc7",
  "key27": "2xmcR7rew8rShGv2UgRdTVU3aubC8xbwXQgcuu3cAv6YXb4P3yWqH33wuDmTZ9pbctv1V9uzpsJ9WKLQrJQysnQu",
  "key28": "5Se5UQVAtymUTeAhUe37qkbZBHumWxgmZSBVEkSGjHbk5sZHCAv4MhujVDLtsyKfCrF5ExZQvXBHnVFsfy6JFf8e",
  "key29": "2Uonbe22pUuUDqnTsykicZsxS5AgqFm3raYfMCdUe8hsvZLFxhkR5hCerBHiGVHD1xEnPEu9EJmr4kuU9pAXdcKe"
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
