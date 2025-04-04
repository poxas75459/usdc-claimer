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
    "4Zb5rWPNU1X2xc6ygToc2F2BHKkfMN14wWgRvkSdKSXsJFnPn9X6QwyW62ri8nCcEXBP1VNGpAtVEwkSPc5UY8vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJuXLk8FuSkaHdvY7gYFn5wprt2qYSfaRfpifhRT7QHmhMU8AgswnwjKhwPm7FZpQCNDp3cCZTBAbedAd1xSmXG",
  "key1": "3SFpDEyWVR5eX8pioiEkG8CYC29FT2MUqjAhtjjV9eii8pbUjuFUgiKuZUPu5aESs89fjsvyALA4wboJ6kHNu82s",
  "key2": "3rKMdiLxjb4aJqXm4m2pe9THBcCsZ1So2F6C95wsHZmcZUawK2cdE1G4XKGYU8hDfbowcxnSjxBqJbFz9jUqrX2t",
  "key3": "2op4mazMcHyagu2nNVL23wseA2vxpPRwZAY6SvtaK8dP5Zn2fwb414N4Q79uKaVv1UA3jCgFK2t6kP7c6dTTUwSm",
  "key4": "4rS9VRGzPYCw9aomxzUARErM6CRit2bJHnyWgDLQjwaEdsuPG8u7Vg2rrCWUEhJxEbm5bX6XUdXw6z2ZK7CqKRPH",
  "key5": "2V6Udb4cJciKF8tqsuN93rwXkcwuvKstc4GoZNJjisXDhtYM3RiQQX4Kk2r1kjCikXuWEvgqBWawVHWU2NXEvzpj",
  "key6": "5Bji9SKo6HrwkGQrmxkVaV38JPjy5sNqA3GZsEiqwa3fnv4wnSJHfagPYA9iNySWjwPqSvZGJpgp7APQcz1oSG5t",
  "key7": "22w4LfcwWw2oU2ZG8P1exuuussyvRU4NRs9Lpwdcrd55m5ViV2fQWPJ8qsKu8UiEr12XZczNbirVgg9e3dmM9ssg",
  "key8": "2MUpjKLnQBbznTzVqyRVa6j3zDb8kD8EYJPwNWA4SpAFQFTwmMndvDnMAaiHyeYfEzTbr1dwwXNWW2GLiLXgMjun",
  "key9": "34thXEZnLhsx4pMdRyc848ATYVkALvbNLtQ8KXgPXfmpojaQeAQUxwYCnLzYvXbWqee4ND3nq9da3sk76sb8xtvk",
  "key10": "5UwBm3uh15zJYtLxikfEUKTGVNcECfTz5ud6mKHZVVPzXmzjYEPRKawdzLwmCdPKtemN9ToYigZeGyFbYwxiKV5y",
  "key11": "5Do54GL2hD26hwKWy8q8acPD9aPMtu9UfTzvbHefMzqBKLuAnCBpV4FbfwkMzRaSGzmMC9WHFipxn97wyHaiiemy",
  "key12": "5ukNgqD1FVS511VwUzMKKnJmKRU7koeHzQxP3duhw1UN1Xgaq4kWcJx7XVUaF1BH34wAK22QtyqVD1bM8nXn5r88",
  "key13": "rpXG3vwHDdJrPa4HtHxP4QsxfpTJq8NmAfgXaBRn8godfgjWSJhmSkRLUVkcRKcMBSQdRPGrydrVfVyML91MZ4t",
  "key14": "5KaDsY34HmNzbgsgS64f4XDxBbqiMuW5iqDbHkyxF1XRX9GxVVHfKecMRHqhnr8erHGK7wuBfLLPmpLxcmSL774N",
  "key15": "4XR4hhdzGQBiM2Se4y6EJbMadFBMXvrr63Kk59FBDWKRAbNK7e5wa9AFkpXcUKbd8E5dNu8tsdFAToHvVw4C2hs9",
  "key16": "4YmbtcnnV2DauZ238Bt9qbDgUE1rv4Xcv63zragcyF75q8uVw4mYyDeBLeApWmX1b1MCAz7sjd1LaGn7jdRH1fxv",
  "key17": "3CRddRFZGvwhiEdgz6HbmBYbLZ5vmVLyX3cio5foYGaWfGRUFfq69BhaDdX7daU9z3sUupY3Arjaf8uR4FbBRXSD",
  "key18": "QZ1dRGZ8bBHZo8LUuf2WYrq66bg33t1Z7QePDwhuq4LwSvnQahf7vZ5ttcd71usCLDN2TRVSNaT2bAnxMWN2fn2",
  "key19": "5qLYmwvLjogU3rhVZNBQrFv9pYUJrPLVdG9Z8NHX55RAXEybuN71zE4cAEjA6Sm19MGaA7xpDXEgNC5WA8k61PM8",
  "key20": "5WN17NbVt7Dnh3FhDr3bUUNnfbvezxuRJVch1p1dzbouThq76jb6RYiAswz8ti4cTTrTBUXmxjeNP221rZJM1qSu",
  "key21": "3K2zmM872qWSZd7t3gRRw3WQGzKgB5JWSdpCY5EdjJfkuTitFZ2YnV9GjrSj6ZJ3838mqeg3fryNA1AaVZfrRfFB",
  "key22": "3d4KX6rFuwwWGBgVXzSeXXq3wXcVtqKKhE8MgKGDwRT5U22vpxY7L3YLnTS933W4zUnkbqdxCFXxTM2K5SRDP2eh",
  "key23": "3eUH4SrWdAdQPDZWmYBdD8pvVnYQyLvWoa2WCgkiwee4tT9Q3hnnQTX7JhjmB1YpHJG1DJjT3XSr2P4B3MhcdKor",
  "key24": "3qhPSJxL5Y2mFh9wCS3PdBtHxS7pPngWBR7Sc7qWJyQqSwhL5MAZp5sfaVAhtTEsBaJp2GzvD47TnysFUtBoRNcN",
  "key25": "2ksq9f1f2u1SqdTMpwXFe8AyyhPKB4PeoMfAgbF3Pfj9cgzpSNUtTDjR2nSx75EqnyDm8e7SAWxpMqBz6f1rDJnv",
  "key26": "5g8QjoyyDLrriwnYEVWkfSbP4D2ADX5HDm8MGzMSdwp3xGara1KUEZuRS45K7VPxVZbthm8XXbjQiGgpXsP9ixjB",
  "key27": "2uvXha7eAmuKa9UwXsyhLMi6fUvHPrnniMKedUNYfKqLXsjCoUhR8Ys3Fs15cQFmpZiN36U2wu5zBmRJswPqMwrT",
  "key28": "2Rp9m4UjEcRCEVQdKuKJvGBydEJAhKvbYnUbdbC78bbZTEMjEStc66skP2TKGj6i1jZPePLvmwj6Er1eaFbTHoJY",
  "key29": "5BBCz8oRnQ4xQ58twTTzHfh66BNRccuwMNkeefhBbv3p9Wsakizht6cPNkkMyqTAKBXcCQ6u1D5cuKL1UmMVMj1D",
  "key30": "2XbLxc9wDu3DGtpG6itiSgNNnzZXxWjuV6k6QyJTZuEb1qrFcNsXUHcfKpy6mAAAtMhhpczEcrpVh1YH7BRRKo6e",
  "key31": "5T3PKoUpc3GzXdj551qpH685PEFTncuJnGYbs5LaXfoG4hRxAPTwCR7F1k1AHAXLEvv5Yo45LwnRi3numWHaZJib",
  "key32": "52BgsXqo34xUa3f4y4rFGXFAYNDC8zpgbrSYBvbFs6d9aJ2BMejXy6Yqf5PnqEj4y8p33pVyTnqrw7d8tvAttbMv"
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
