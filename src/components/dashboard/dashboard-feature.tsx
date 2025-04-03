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
    "62ZB3KikLnSL5HqpTqkUhHnqANudVwSnXa1iimyhE2yBKBBbbNPE8Bq8jhE4n6gFTKDygaUKsGcAKzcJFT9GqnhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKgCwGQc4pTnMgLf5cyFjRdSUHJmZaJkjpJrt8qgkvBEtCKQcNKQnnyfGng2YWaT8RUqSisVQAGwPXJAhtwzCkH",
  "key1": "5jjdKHk8zSQSRvvWvXp1Nr5PUqUnQfGeqGecTj27mNd9cDo8QPBxPqvU9Nrtb9WkgknTTocntTMjKDBoUCxSCcQc",
  "key2": "4KopY28wtSVkXgLz135Cd1ToC88jKdPqV3vnbpDNRkzVsa2k6GttF2m9DdvsV66LKjfateWFNpLE1SYhA91ufGW9",
  "key3": "448ouHTv7DRvQRhd5i7U6EctmcFRLAqkvR52L9N171ScM4HAe94hisUcmbBvUsJXYFvpgms7ofz7jXZoryQemYPz",
  "key4": "eQd3c3ZUBNQ51h9gRaBgPoa9kNFijfgk49HEtBwHqaXz2nwdvV5whXMTQMJVfNKXH2e84GkcRK8T6edBvfecafn",
  "key5": "47vEA3Cexw5KjUnK4xANdXV1hoAV8mG8PE5gtHPDryE7q3cZ1mVvujei1HEkuzoiBtfS6FYHFHJnck4oun89gbQE",
  "key6": "3M4LrfzTHv7FrSBTMwYpNBPzfLnARukTp1CfsN2X4iuaFtHHkFab2wrMUxtzV97YzQEfEzoZgrcCdQYF5wWW5tL6",
  "key7": "38mRHYXL64wLGF8i4HWMu5EbFkbFoyQFeBbMnG7f1ri3Mp9fEnSuLgmFJMn1fswnhnRCufxQcQgMXt6Xfj5iEdvM",
  "key8": "5fw3PbjAcUZ97A1hUe8HJJrYhHZHRg9BZ7mpP7zbJ8cFNgDY7Kz9yqy7o74neZrp63D4XN557bbDDrwrGn4SAwbP",
  "key9": "5YMnT72guHyrGK9PVFDccaWy2BuVT6D2XPqCb4LDrmeGTwcrEH69FSafPhetQi4ijd3qCTDBG9CQrq2Vu2c5fWbj",
  "key10": "5QSaR151r64amEDDni8CvwTwZdk1eMAzYyks8LkrwwgR4VghwSScwyVnSWDo7pd6edh87YnUganiMvAsiMuWCbuF",
  "key11": "5rvVxq9g7fbMDpWj9Q1hiKs1gjHNwFNq9XN5Wu8bCuBVUMFuttw5ohDuyMJ7GCnQn1v9zjkg2UzBMeZ3JjFBE2NG",
  "key12": "3VCyiEK3vW7BGMbaXBwUPK94yWFmuwoMXeeRcPV5toCcCkm5JxtPrVPM4y5yG8nTzvFBGsKm9PmMDnxMWCtjwwy3",
  "key13": "3HUZr1mrCE26kUNhSotrkB2tcLkJUp5nvPu7NP4d8c92kaD3wiLbz4a7qK3mtMga2wzyuD8NhAUstWzQL77RDa1R",
  "key14": "zNxsEY6jxBEDDM1CtY2RXDEdnz2zwyg6y1a7jAmiFArMCMHG4Y8qeNXMnid4dEgrQmmVwreh44bRmUW7kimptoF",
  "key15": "4YcbXanppT1VMcHoC3mehXSXw7bEnFdEwdZF6sddF2dVfBGyCqjyajVs8h5JWr2xv2d3J1Map1r2fhhnrjskzsfG",
  "key16": "5FWLBcLTNtFfxgtRkcgHVF8m2txmS8JohCjT4dfwgiJFkb7dQpLttqH2gfaWMcbdkTC8d7zeHM8w4XwCfMWGLRkJ",
  "key17": "BdBoCX44bwD9bLNj9SNWHKYdoqJ1zdhzoHDC34uESkgg4NgzrSyiwp6XeRT2FqKvdHeMxS3AoM85j1CXsLnRrjk",
  "key18": "4E37rc7g9hZAc85Uwcp9uWomtoqqtqr1sJYiz989pCRaRs1fgYbQnWESWdpggmjmLvqsdzMnhDn6iwjMqpW3LGx7",
  "key19": "JcqzJxh72JzQ5CuxP3LFpKDWZJ64hPJD1dYgqyKRhvUEuEpoAqGU3M2FXcfXMgbFPZNMoyedHGH4FCSEFk8fgeu",
  "key20": "4vZmbmKW4W7JZsLUPT5V1vZNBiLLeSn7q6VMwS1B7SqynraGXSC5jRfp1Mrp7qXSuxbyH82fZjJRu8t92MyUd5N8",
  "key21": "5sXFbHKRQu4AVcwazaHe8uPKy3sgsDsYjat4U9Athr72bUyEd2gFkA4xRfYzHZitDGqCcvWTjHckpCdinRmu1F7P",
  "key22": "2mi1XLUUUBa8kZUWyf8g2VWBNti9GuPDj6DPDyakE9LcynG2PX89BjLGBP3kULe8TDBK4CQucccHNjkgeVB2Umfc",
  "key23": "66b4NSZ6PEapjZpvPXStwBn57XK8ywW52QU1Gu5ysLAVkcQnZKzsF127kp9n3UmhrTSD8QuWZcRtDqJjFXJ1GW2D",
  "key24": "4W8hn11XmpcCKR8qPQLCF9vG6JUvgueGytE1HBHiRZ9R8YyY51uz5rfxcjhk3v2K8Uyj7ggDnQzG2dqB8i41TcTS",
  "key25": "3kxA81fHjPhmyVAPnXCJmPgHrDByzNaViktVRgn5fRYe1PZM2wtCwaxUSVdmo6LZUn6YJ3SgUt4aw2YM645vUbhu",
  "key26": "29mvkmnkg28GCSxiFR3JnrKmZsP5rCBq7uS4rajnURuAwaokV31SjeB2kLTomc9rYxmMuxRgX3LLwCnRYBLDuREi",
  "key27": "utdL8Tu85B2BVtMnzymjLaSZktpAoYmzAba51PVHvheba28zWrAaTsYM15aGfuNvYSPntnuT633W45mmtfYqEwX",
  "key28": "xm2QFxgcDL2MZtpCTiwGC9yH7cthx1eNsiWJPCDsf1eb2F9ykfV7swcWxjpseehuaZpwNnD3bgxrYinCgFJ5RqL",
  "key29": "2Gr8hGbMovAsKUNuUVAd6FFKUhgdoBSrkhyeDGEHcMezgakFLEmWmsXSnBAXwtnKzH7XHSgJ6zaphF7LXCYt6fms"
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
