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
    "3gfSLg4d9yTK4xfFTFpyaoHquoWx2uQbEQKivtNxrqBKysoR25H98UAz1RB2Vd84AT2iFmjdsHXbk9DUDj35CZsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgEnR7UraK6d8Ga72qgBgoYv3NpofYbZKEPT9qKWvL6yr5HxSy28SAX7WTjkhmDoVgVtjrrA1KzykaAnfSj7Fgp",
  "key1": "dReKRTJWt7ywWeVbXBwktPqtf1PziDHjiSzn4SqqeLV4iUJFKtpvLxsB8xXG9sd1Re76gqiUwfDHdQjern2bVZN",
  "key2": "4AwgHgY1dDSzG4ZRtxZapgEfB3Z5WBUnbzZanXFRxuhgxV1pKyDqATeobdqY8T4yFfvcpGxiqqVGrMFXQ998irVh",
  "key3": "k2TodUdgJBnbpkD2dpiu545nkuYNfgq4Xri6VMWvTAbvp8fQUjdKgb2hxo2MX4ZxddTxDUmXx7LrkU2uSQou3H5",
  "key4": "5KCUE6Uia9Az2vrgnJwWpGAD1KTywbzpvKmYLkLRqZbU587hksDvkJHSpsEy8VyLPba58bAUH1nmzpRVBhFWDUyn",
  "key5": "5yhVnXdEnKx6xHyJCH9BXH66391oM6Bqggz1oUv7JFJ5ZofFu8ePXgwsTHH1DiXqZ73E5WMvF51BuFu3DWysn3CL",
  "key6": "3ovrEwf115NswvrtjAbXUg2neEP3eMbHTJYXGuP5oC8Gyv8gcpuKjWg7RG4rUS5MEZrorDifJxZSLMzq2Ve5jUGj",
  "key7": "2P8wutz6qgzcJMKKFuZmPcbgL2reKm6PiUh38sr4hczScWNaYMMScZo23o8xC4JQAFy1qpSeiptGbkHzmQ7M59ao",
  "key8": "5K5eioNwgT2NYwKwxXefnVNsSGXoBbrguhNZMERbZ3ZbRt412Y3hU9uZMk9DEjUXgHqWA1fRBoQTsfURqgRmG5uF",
  "key9": "2JhzstdJs1ybRVfHT5M7WVfhr7B7inH73zjTXvTLeS6UjM4MMm81zpeWFagGBESbB2RXth6zBqNjRW886ZhJS8cX",
  "key10": "3wg8mP4gTx7wqz381X3ZLu2rPG7dFYKmCY4TPMK386cVthBDktvUKQftzpZHsJ25mC8pe4jXajjRipRWnUCiXaJP",
  "key11": "2mThxqv9k9nutrydUqxKtrhFrWfLLPdao1oqYmK9QgPreanAem3YQgGRAmBnoWq7fPCPiiKUYhmw4FnMSb9BsudQ",
  "key12": "5pXhGpwmz5eV896zGuxe6gkz4SFQntbM3YaZNt8JCNDcAMCzK6VwYNKDmCYHKcDSEhp8fh9Byph9ACPLj4rWiDdR",
  "key13": "2Bjoc7fMcCcWQJAaEtySmHsQn3Efqr4QNoMWCCohNg9UmAwWsE4JpNFPgstAW92pC3Fq4cqeJB23GYSiJMzWHZUu",
  "key14": "2ZRW1vEJAZku58CDmy1he3jTau83s7WASTiXhfumQm6Eb3bD5JFnS3eNCVYneY9oq8hT7qXKPr8WwkBTQ2zcu9u2",
  "key15": "5JoY7cwHtS2wDRAaTr1DmvsWKjXThcTXauaa5kxqQ6tRgaKT783q9rYKrcjjjb9yTV25NALgj7uoGRsPNUzt4bUM",
  "key16": "n54ScMjTahYq2DzV4JBqY4noUhcikRmTSRYZfeYCfS63vjgaTvx55HWDjP2gSEKmfiPrq4j9CmsTfESmKQaBB4b",
  "key17": "4K7r1Yg2rb28dJnKiAiEXAdyZ97h5mzZrJsXY4TRf9KQX8d6cV5RFpqupaZbhHAmWGHFxSHY1gX9CedHuf9ch6id",
  "key18": "3yU141RbN94wjrHgWWL9Fsc2KNoJSs3PSoVrdC8VGA8dTXmRzqPRUuu2tKMrEqC6ZvK4zPvsCmeR8emW8jhdmmGA",
  "key19": "2uNvdkZWxc1NgN6t79XmX5DPC8abjH5BEygzLudKeL8KZScrjDKB6rSJShKaStoLwFbRLeaYfG95suwPEi3nQNKE",
  "key20": "37fgitbRMfmPKCBVE4DQtUmJKhx7wnkCgTtCeZ9MRAaPkDSWcG3nDSktNwFDYWU5HPgSMWLqFGZvqKg1WAPYFxb3",
  "key21": "3thL4KTq9ynWqPaHVGCccnEinKAL6gP8uvCtTabaG7KGKwtpbJzBPHfbTJYd9QAcEsE4M2cLphF4Ecowcfw17wJX",
  "key22": "2hWiZuhgY5C56ecExcK5RSCxAF2MSpbPkCYJZfu3dZayKAD5oCBv3V6sDuTb9PpVEeWDaURqJy97zjWMngBUqbtg",
  "key23": "3Kx9D6AmpTgMRFyMpJYTLBn4W7pVa1ythNnScyU5jS32g82B62L3V1PMnmpeyMWMbx2Ga5poX23GxXRD9N9qEjCh",
  "key24": "2bcNehhUkmVRDK5NeCFJtU45JWsMKFb1M8oAxepbsUUaPT4b6kT6r9Ewy2FNzP595MUHfurQiUyam4ZxEP9bfbic",
  "key25": "4H8iuNGDdBCBSbWKp6vZWJPekj3cRFFcVGY6wunKFPkLCrsKZfpLM9UZ7VmTmoqKsXfW3wrmcxEmbPURxjQkYL4N",
  "key26": "5ym1Rxawk8agH4dPqanuwF4LhZH9hrouasU77ZFycivetGx1hkXR6bLLaHrpHCRnZxsq45QRC6X8muQ5Nuj4JKv6",
  "key27": "2d144gkNAnMHtLVSAjn2eSVywDtH17iTXup3mwsuFmFMotZgEFz37hLaWUnTAYaZrbKo33SK4V1pkEnZQudexSTh",
  "key28": "5CPn47PY6V3JJBrDXTxudkjGusMEaGEHYiTkUd7xYqxLNPSq5PuTVPh9ZG41hrRwBYWE1GY9hT5e5BA78z6yVXMs",
  "key29": "5dQ7jbcTuHaz8LPwwnGnic6VTFBGa5pv8aenw77uBGDrK3NEy6p4G9qKisBmYULLtEXsJ4ZX6QNn1LAVr5HSHwSS",
  "key30": "53EHGCs84SiboE8nRzt1oeiAvmE4JrfUi3tpgDvuUKMEXj2AAT1PYGD6Nd5HJfx92oeWpVATknW5XML4JgoQ3RKv",
  "key31": "4dr4sh9qBp8WiHSjpfg4NTuBPN1uXi8eNAxhdD223CBZpzCLHfUoYPmZHJZokKbSRLFkZFRd44uQ7uJo7DiXqe6L"
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
