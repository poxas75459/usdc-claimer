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
    "55r3wtR7rHZBSouUxBX6q5HE8grSeCgK3vMd7QgQXLYc9FbjpJef5xoM78qafV1KnYbPjLCLg3mTiHxtK4fHisjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4idxjn5Q7TzjvcFGdW9Kcu6h9Jhdfa3DhEioWs5ZtQWZ2LDoyvAsZzUq2M86xVEoY73J84zCY8NuLqNqRhC3oR",
  "key1": "47Dera5MiY9vGx7Gvf2PEJ4KKmjHGRNbqyqwLGh6M6A3cFiJQBP4gFXSuj4YKKgYFemn45TRQ5FpDWHbMp478rgL",
  "key2": "4FpbBGeCGLVDK5vhUrwGpNqzBZDd4jFRNG1Vb5bMkPGHKetJGVvAC5MD3Z7kLsAYq4onn6KVcNNeZraNLjNnWepF",
  "key3": "uTjS2ye6ekZTzsL3Q9sPS6ykHiBDPSFBusergpmkkopcrnnuwgw3vxw4EEddoRSebp2z5ajsEfU5xX3PLHgcmY8",
  "key4": "4sYE59GTjbJMUJgQMRQ1C9myi1hAdBi82Ps9BJ7tCoQR2D9fjeP5DZtpr61jLsqKA8ruEeeHF8GNwStMR3ope2k2",
  "key5": "3gtwZ9rZHYjuEmkPrMnUzMWPQmiQxnp9t6BRn5t2gWCBMPisYei5eHJXDiBX1JGKigqB8g3Jqr5Q7nQhaJSnYzPk",
  "key6": "2Txyg34tRHoX1eFfUYZnfVwQCBGokeCfb2vDUmpH7QKEJdJEDXefMFjkJ46Bhen7ykEX4c4YuJ27FHBMKbfVy8yN",
  "key7": "r4Y5xPyP8Yeu1f72tShvs7r6w3h5pkSW1RfDhGveho2nERVr7vm9aqZAZfZQiiiGpVnmPLAjfLZ73AApFmvtsnG",
  "key8": "bvNj6G7pSwCX4JFUeH7hD7cvcxYKuL4sHpQf21gHR6pYivHkPvvQotKJWRVGJET91i6JtkJ5LsVMi47Z53XwW5v",
  "key9": "5h3Raz6GoV52pDUjuSUopj7QXcmcaanS8RCxGG6wLxweJQKEXH9LHzCnqhejVeJ37ijrg26rDPEA42FdDd8TqsFY",
  "key10": "4GDM9cmzJd6UWFetDiKmNmgqyUFD5c8izb3UvP3M45qMvebzrbSZuk8YdnthCt5pDL1QdXFPJy2CFnfZEutEvBwt",
  "key11": "3foKKe6sbXgKdyN3D5gPZhiVkAZRfKMK19ikuXxBjykXDdSXonztwoanM4Sfd8QUBYCgWhFnNFJzgoV8ej1Wopxt",
  "key12": "2k4MfMC4CMLfiVF4pDmmQFHyCqVkwYPUrDEN2VgbwzdT4GFq37hRWhGezuhWgNBgM41ZYBoFK477A15pBDuqAV5P",
  "key13": "4Mx2PiMzZust694up5yTVW69NLt5u6xwWqzg8UeavMcxvBTMLYiUNV8ykH4VA96EBGs3hbTUdezrptMfj1r41gmM",
  "key14": "4y3ZSvJvdkGsqFX8yT8peN1JWaX71Fzrqp8NT8hjxV3Ti1WKaJ3cwFWVptr9bAjzadkp1QBw1wxync13vM9V8ZYE",
  "key15": "4ZpKJW2MXz4rsKjXEV48S3PTZsPMCfe9VXfeze1GXPkdBKbSF7Lxs7789u6sPDSMkJsU3k8WFrDwGnyFJgKpCGzL",
  "key16": "6531UoC6qcsnHkFZQ4JHHBJF7AYXnQMDKmLyf67UsYS5fNSiM1LTiXk9ZvHgRnbEyiYeHQcNDjmnqY6R3Vp2uZXa",
  "key17": "kwXj7eS1yyhSAbbUQkRTwCVwwqcTMfPdaohXqzKsLzAtKQLbH5SuWt4XwEp1fBkkTwgEXo7f1MF8Yzv2zr9K3M8",
  "key18": "55xGh64c8BQ54kWtHsLwGxa54kxp7GWhc8cM29iWwwy8rE5N1kz6R63nT2abjZBPLtqwtM6NVC1fdu7XqDCSCWi4",
  "key19": "GwwvuZC4fJ5RHHcwsYZUGBNSK47Z82mi2GBQdXmeAGqZrjz2ijbVUUvSr8oJVfVfeNX89JuXFpV7jxAojP7UDEu",
  "key20": "259vcVpecJdW1XZLDf9tk9w9188XnozMkCiuKHJ6uysWs2S9LBaYLdw3SYtWFPiAM5i9gokSG4avkzJRPX6AY4HC",
  "key21": "4SaYLBdULkCVWtFAR5NsiZw6sceNe7APmCMEzoNaAxbPauL5XaLAnatCQHsB4ZJyMKkDnGFxJ4gAYcxihm6gpGbu",
  "key22": "aZNeSntBGfepyjsv9k3VsM1DiEkD9MgkmuQwL1KDsGkcPDdRHR4z2ULnKqZmtfp29sUp1vZvKm7CNruq5nDkepv",
  "key23": "3k8nmLicVws9XpkEANsPQB2x7UYNN5Ke8bzoLDALG5zvyn3qmvRGP1Q2BXDhd7cN4Pcf7M5Fw8KsCb3kZyLcS5pc",
  "key24": "4zigzFsYqekwPhgjdkr7RT76eHJrZDdLdDYtzCeRdxBPgY3mPkcJSxY1daFRANS5YzfDRYCZFuB9nFeJwHQ36BRM",
  "key25": "3mw6mbuEV7Fp2cCVBVd9kD8dux3Be8Vt1dUnWT3t4dmsuWmmYTReZPCjc2uRAp1VZvu5GzLAdFWqQy9B7TSvrRzG",
  "key26": "4FM2m98fWTDX1xNMXVYpX7K5nqXzC1DAow4phF8cWTofWnMSJcVgp5KAC4omjPdw76BBFC31eon3u54J7VsDzTEA"
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
