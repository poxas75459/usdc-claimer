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
    "3zeNoxvH6BrLReU1MDBfAY4FMigQt6cDxVUS8y86x6Bik39T7hDqJfCXUJC7d1KxiXFMGHf2TtsXK4XoB1FVoCgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYtMQAAwKQGbraJzhcyvsSnDSC6wff6XPtzKD8tNYwxctZpTzxGp9EtDRDE2Q3f9kyh9EJAn9ZABH9zGSKpHozC",
  "key1": "2vpLuumUEmztwSyPQqZjY9VMX3Koy7h3FuXk9qbR9CeJ65AHMqY4YxXkc9dWSDisNthJ6RobqDo5ttRuo5vFRvky",
  "key2": "XzfGsagLukdeeJDcfniUyQqpnNYMK8gHz1rJYYJUsgm1Ux74sgja7CUEv7i7aHeQnjrESiDN39TTz9g24kxnLge",
  "key3": "5vc1LV1mhGSLse7Ux4mgnyYUQ1jCi4tPG56WF73dqzpaC6gu6fiLn1LP7BvYBBozDmwjDcmbEGF5e72pYTyghcE9",
  "key4": "3jSLwPhZfjg5yQZE6Whp6JtiLgMY3Cd8dkrmfW15UcG8iN9qpP4siJYQ4ck5tSkdJoZ2NRJoPoAjpuq5fkDABxSR",
  "key5": "2aafRWiKvX2m2urGsaMXAW8wMph716x2rFJQDWK4hHj4jdeBJKfBdBEStgySn9Yn3g9vbEsFeDdWWLwZ6oW4XCj5",
  "key6": "5WTLoAYVnqFoCnkWvJjLQjt7KYyWJSvX6M3AhHFEoRGrbor3VghMaKBZ1VYDZsxtGPdJhG7CeH1fAhFSGVJ5u2Vu",
  "key7": "3EeaU6d7PZi14ae5NCmV52X291CN4t6PS3WGaEJAa1oVwjCkgkqgvn922v6WaFrbDKuDAqQvThYpVJa62eEqxNX",
  "key8": "2mSCHZDKFM2XoeQveuprYCy1s6kLGBV9gFuVYFKPBGfv5UcJz3CW8pj2GxhWJJLysF9hudecN5DSHqpogXbZmk4",
  "key9": "3vrU6EJ7HSPsNWVgkgJ2N31yzbU58nUjCp69DiEfaDjA4kgKWAffTJVnQ1qKpW5CzwcZsQeS3wAjBGRUXPdTu3xe",
  "key10": "bc4287H99P5PBsVQh7bFkyMEf7GfHz579LdpnRx3Ur2cH989iZ7j2b6Dms9pmJWi8wx2kVK1jAJZKZub3Gb8f2X",
  "key11": "3f7HKcKy3ecer13nrwAfor9shqkD9aNfaLki1ge54bTxL2YxraH9XP2Uo8EJM2H41MwsYMuYjkxaBAGK2roT4x3U",
  "key12": "X9hRAoV8Rg75mPZS8dMJaW2s38MwU6KDLtzdLMVJJ8fiCJTTm4yavgS5JN7U18T33yc9T9u1PPvLDvesYJGsDS3",
  "key13": "XM5nWA7PnDTQUxKQfaxPJGQAUphHtfdenFqxUzP4MxPHrd5MNJnvSFx7g2M25UZKo2p1HS8wRmsooC2nfixiGvz",
  "key14": "4ANZ7hNDxrUnk3VLSt6qhxXHZ7rNKorN2Jf7YANLSK78UMk145qboE6fMHCpNtAAL7C4W1N4nmHEZDjSpPXPLRrk",
  "key15": "7tXTJXUgE9HXuYQLtrruXi3G6bBUGieoNUTyQV3nYKCbifXPRGUf95PBND41JyUNgdhh1Y1Ec6epka6q2p9TQW7",
  "key16": "48brMBVPmMVoL5b4hdxjc1zvBRodRE4GaLvf6qfh1bBjAmrEvovWDML3epHrZkqCyDct4ga4RfejemxnCF4wTqaV",
  "key17": "3um9h9JRck1tNXWbKSArTfLMjXK61Xbjd6PtpVDub2AqbeP7FSydbG6UMjseHxPe71uK14xU23NL6dLjrz9wRVoU",
  "key18": "4zgX8xLZUD5KffWzZS3NeTJsxTSveMpeNCFop1PMrBJGjo9myCVjftSfDJhMq4HYCqxoN3v8aMwhX1A3BMsdrBfe",
  "key19": "5GfL8wKrPyst2pL4k9GqRwpbos9e9aVLc6WpxMnVzBBQDJcDNEoXJXLRRFSarbDGj5Ev8Lx2VSYZ1mHKydMyjBK9",
  "key20": "5FP8MMHq22u2xwKVviZYXKHr88R6T5phKSdm5wZiAGg7FhyruGaemAxaAnJwPwkxm6sGXnEogiDMiQpM27tLU5nF",
  "key21": "2YHHUCPtsZq8jztYm3C9EGdszoKrScD5qwhwnzEWu1cqAafWC5dPcyo3kvoJKF9AGtnWDKUroPGdD1ZN6PSCt3X1",
  "key22": "2xfhLDuZfe3yMvFM2UoG1NDPsDguJEvaevgnFNUv5Y8w2nFSBTYk1saosFNdFTAvJyR5Qq5wsC14oJrL66nc6Vqr",
  "key23": "tPctWGQ3ysFrj18pAk6Nc1cNTK6TmX8uhcMeQGpkGFghTYjjmaoKmgX2Ekc6wwmZNDgpyoXvdhKPAtieLJBcv2M",
  "key24": "AbjSTxr2sDxmi8x7vcpxQBw8hgMxLtRvqDvmpHyV3ikuk2EYT5DFisbEenfR1sQxQ4Amo7jvpENFShd85ukWc1y",
  "key25": "27pHHc8QXHafvUAUgpwKRLjq8rS8A73ivTnSQSAs5anytSw4pr6XUUmmU9M1vAwETt847R4An5raTL8tRwYpFQAg",
  "key26": "3GSaBb6Do7GEoyGbkJrJ29JpC1pAv4nPz94oFcBtH84oMZeAReSuQkLDKA1jTYNDz8BaeZe6okUc6vfbjR96LfQ6",
  "key27": "365o3tTBK6uqL5xGzt9565WnorGekztS1sBZmjujdRwayuDwQ1CCZsFVinNXLhNQ539YmFHZmzgwwppXtP44iT8Z",
  "key28": "4ugPUeZgLLDbo9MWtUxLTxKwSwn483Je8xLgNFPsAp7KhDo42SVR5ymktdoQDqWfw9VW5GTszupZ98Pmms4pKw6N",
  "key29": "5oemUQUm3fRYeEAuk8d68XuUP5KW1TWefCrhQLPNwDwrBVUEkBBPgviaqQ7cR6zs1R7x9F3Z7dg7ZfTBWQEmN2mH",
  "key30": "287P2q3JLb8SdYkwgEe7rXRUBdBvxXAEGpZkairZp6VCuccWhLXK8efgTqBECPcT8y25LLUnX4KLNUGTwbRNYwzw",
  "key31": "4PZb6La4Psh1DmvHbfdYfpLcTmL4CdNWi2e87fhQBYvJ7AMp82qeMfdBL66P9wEnGjzGAeRKxFFzV5LZCsq1NTDV",
  "key32": "1RcTyGTiDyJtUyYcWMvXGBpANuAQXokhXKGr1a2iCE995ek5VUaKwpXVMwUC6765sx9gszev1Nbrdyw4zSABpMu",
  "key33": "2hPoaxFV8WfVNR8jmJBgAWBKrNUCrYPiuJg2Z33QzpbNwopCYdiGajCFYfPkduT3E6mVoDkHYkooZtNJgncbi7Yo",
  "key34": "2L1MfXuvud3jeB54Qn8vJk8yHbRfPPdf4UBUEdwwrvETXwbhN4Tt4bYDnWJxFHFo7naMxGRGrfa9JrREmFBmuegz",
  "key35": "4kChvtrYmh4do7VWuyMWrFm5dpMPSYnetQWXS7KpNYoxRDw1GXvrL9pZMZ2oRmirNeCRQDJnuMA9UjcaW6ithpcR",
  "key36": "5VPmYJJpFH3ySuiP66GMQr9RsixsqWVnEzTMMr2uXDtRkmG6qfabFarzRj5Rq5RdcrctRDaR9SrZpkVPKvhKFXtj",
  "key37": "3RZ8EfArdTDGjrCqf9e4uzAwWqjHQ6dfueXRAwhRXaZYdyiev3v2FGs9K6Sjeu45ZuhE8uhpCYknjpRSTCBEhk92",
  "key38": "3HkhT5sB3KVmJWubA6oqDzHWqs3p8UKAoBbLNkrNgSoyh1aMApLUmfhKQH84J1P3XW1FVGWcyxg9GCrV4kTTj6BV"
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
