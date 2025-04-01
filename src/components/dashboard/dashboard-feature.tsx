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
    "2geyWvs996Qsa1myTW5eGBqz9omzoZWcRMg9dPvgTiYhRJc5LoMpvfAa1CgQ1wRPxb3f2sT6yLQXnNVSWZTaBSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCqNpmvFu8DbrxbSPwVmKn98jSr8gJUHaK1QLsS4ee9uBDne4i6YZFhKt629XG3q8ovuBcMmKnghuRVtk3pgRGV",
  "key1": "66UxCfJWh6zrJ9vX9uN4uCNa53yTPwsAETvhmyKMrkQW3T84B3i1ivcmvzAbHB5rQSRc71aRhnzMr3NNyA8xY8fv",
  "key2": "cqrjWe36GCpKET1dNjpma3Cd8Qd2fK7RmG7BCWtE5HtyE8bJ4yiKEnk6t1fEtWgLSK4mRGsQSbtBKEjLbmo76Em",
  "key3": "5Xh7Fb3eUQNLEoYD9cTKo1LjATJUWSKX2W2KV9YzHCt6cQUUcHZF7aJtCsvXa3xTy3e69SZKf5mygt2XF8DQaPDf",
  "key4": "3nDApqQZBTVaVXzG75mNxca82GyjEbeX7V5Q38HRDexTfwF4Ppf37pFhkMFvrBg1Eip17ahyHmdCGMzLdRrYRGbK",
  "key5": "4EQLxbsdrvj1mGbjtqvbSaXqvag4A6FoAAwcj6EKqwLRLK8ukAeiZouLgJrCa4bB584SSaXFewpTSaovEbx1mQDH",
  "key6": "3zeT5yjkwnWzXkXZfva5v2S2mjHMWL7hY5x47rPastHzc8jDBnwki4CZ1LceSidSG7oQDrcmaQcYYXmEpWgmb9Be",
  "key7": "2vpj7BwzYXfT3VPcgJpkpZF39TWFhGreD2y2Yz7xtuHbcKGcPeQgEf9Mdf3WNDZFh38a1WKcP4HsEcfHRB8id6Jx",
  "key8": "2UqFctCYb6Z7Kf75AQetEf7Nwon9Lg6uLYQSkFt4c6hJaUNPLDM16Yqf25znfVS8XX1g9p2fopX6Aj1hPWkQoTeF",
  "key9": "2zaYevs7efKBLUkKCHgpLa13x4vFSecYxhvcivHNE8qJ3jNCGfzC18gWtSqSrGuYXvKDwzERX69fXwRu2bCpSFsb",
  "key10": "3ELMsghCLY8JHk9WdSUS3VSczUiLh4PrYChT5GYPrUpnZH6Nv3vMpswp4w16Q9biCSuB29Vz6DVnaUBrS7d2pXhF",
  "key11": "5YKr25qtV7gBohwL264vxkEzm9etNBQebWv8eJNFGrzfimkXin2ANtVRJXWS2XL37YZyCGLpYTR4ckkBFM37nbFi",
  "key12": "5KoMB72gDKXn4Ewj18Bgxgi7w4spKWgDaeBDGiSdEBmKwb15d336SDo7tmgypjRvNkQQ8unthvDAvWcMYt9NdPZh",
  "key13": "3ymhpcfQ37ktfWFGZjXadxBgeLQxvgGxLaA6nKJEVsy9JzvQjssMLkWMD4sB2DSpynY8yCMNb91tDFHfs5NgE2k5",
  "key14": "2DeuZnprdSx3GZdBBhbZGai66PF2hb7DfMkt2dfYTQnhGyDVJY3fg1xw5XfNP5rVgmVLsG17JyoZsm9SAxwCQ9ZU",
  "key15": "4Kn8orQsUFjB7AMnaaQ8Na9SVzrj3TwKGJdVYLmvtwogPDDVpQLmTkjnusP4749piz83E1JPkJag83SrgPGW5Ggp",
  "key16": "2ZVd9X5iash2ttMfURXVob964UDZvxJaqSooXKdaF9BeFfeY2JiccRnqoQasycE46SaAhZeUdF9f9AzG2vW6iX3q",
  "key17": "qzcdPFoL1W76TW1R1jWmQDUiX4KA5aKH7dzgafus4ye4hYeKaBXw2nfGwdfYGPBaDYx44565A7SLEAYTyaiEXcT",
  "key18": "3RZY9SZ3r1N4Kxvc7CvxmF2Ni4qiBatZCyxU71LGVBM5FLVq1mFC5K3RS7t9Jaxzx7gdB4qmh7fPfXRzohiAPamj",
  "key19": "SHawZWKGWf7BE2ydFTEXdqkW22QDKRrfgUM67X731gnAj8gRK9rEtrS6L9K3oG45fUsQeXaEhUBVKT7Le9LDYd8",
  "key20": "RjGbHTvMgDmxbJxxwFw9qv5Le2qcmQvdEtKcX3MZszdFi97z5YtRW4F5BVVxsf6Ujg3bxAhi3a4yAV9SRMcUxtH",
  "key21": "2pNnsRDzeFt52VoRZguqvcrA6d1qfz9xapCq4psrwjuoYS17ofEPy3SwGVUaCpuAgz2zAa3H7hstUtRepq8h2Snx",
  "key22": "LUeXmYKSopqZNKBmbyyjkMKwgaUXSUYZCj6UqJ87YmiqU65kyaNemRyS1jtfEF4wpNcRki8CxJSa8fJGatd8Muq",
  "key23": "2mLiAyBgiW2wDbtZes8Sk9vqzaSQxxzD7WbuTpEwVdaFBAgvnyj82j7VZbkUxnFigTuVVaQLMZE8qAXFgGPHsX9c",
  "key24": "4wfx6EHAQrVAGdhm67c43PeWkQVp5yQzuXxf6uotAPXqrPSFUWCLNqv1bFTjWbwZfabCpj8srfLg5Sc8U7C8yDEK",
  "key25": "doSrwFgQfhABnmEuARatrfSovjRqKaNvAMYtQHM5rMfvdayPNu8yDsSP6n7ZZ3YcE2BVFLtk2McP3xQzi6NAzH2",
  "key26": "424YkMuE13UVYFizXNCoVYfptv7CFCHsf68rkkqXCkn4g1vcLYeCGrbAY3tX6mWRHvXzd2tGF1DxtgGARvamtfZ3",
  "key27": "e5pwPHLU8hB77Tw5vmHLcozsEAvmVrCg6WEJdE2Ck4zppQhQj3X2E5pmZVvgC72BJcWCwuyUrfGfhiLoNf9WjpN",
  "key28": "2dJ18Zcboh935KFfsaSZV9uxhHVF9qhMfVPAfe9xLBca2KmQkQR9YfhkYuRqnEWGJfB7qAQz16Puy4yXTmLJbpRo",
  "key29": "2nSBdScKh9HKe46SnjuMK5EBWCiSCdR8b1iJ9zoPgCLHoe5KqJTwC9ty8t8AtbjL4CxC9faWF7Aw7H6wafdPQMFb"
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
