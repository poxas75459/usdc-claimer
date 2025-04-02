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
    "2r4hy9mZ8qth119npoNyXZrpH3MN5u8eHCxkNiiQqAFP6uo9eF4MqhX82KyGgEAc7QE2VudKLWBLVXCCtzwUtbhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pg2fSLBWgUQ4LDB4g1CT9Ek77254QTup2Qr5ZzSfQG8j66oEdHLG8pow34Lc9vfPy8aDmVmgY8PWBj7kF4CCYd",
  "key1": "3iGDNCW5wA1vN5bZFLH4PV24ETHriz67orGzT5CsfmPeANcEto8rcv8TW3VcMmJSc5bQuAYz2m5mSfHw1zGPz3K7",
  "key2": "22SuNDrAjZ1T7EgSSoDg8u5zBjWddar127D9Z8sQu1cNZ7CZ2zMDBUwDSTqnCHanofNhAEMMpseXJLmWtJJSjVv2",
  "key3": "3F8AjPSPQSyKNYKw92LF9w28RVy9NWeULXEfbS4KyTbi5xk2GD1LXtDFsiQV2FGEU8rn1fQ8ncMPog9zZGGX8NU4",
  "key4": "2VZut8HM1NWUoP32c3QygktwqmWUBwqszqsDYsoBeRzA9qWfx77MboBLJ9AWeUEXPcVmo2Bx2hTbDe9C398Q2Fbf",
  "key5": "mQPA9kzL7RDAFZ5VBiAWxgN5iv4mTFQb7yoMkQ2JUfM94ZhHPdfusUPdZbtsiW3XpHwZxiSeQvdreBpvp6fg9qc",
  "key6": "AXoUBWwEQz51n2VJXbZ1xzgE4h5btNAsQbAqticKWZ8E8hx2mBdqsJ1FQ2B3VwVN9xmd9tvXsQHCkAFgGEUiP3e",
  "key7": "5myQbRGqWM6uzjqVtfHSUa8hRN6zxsSP5QxFZdNsPJJCLBhkJQtEt1vwxy3W2VzGpg3gSJzWDxWFrQcKfdccSPbn",
  "key8": "AY6KfiXHd8S6F6JA76UQBSLiR3cfKfyBWzrMy7hHTdraxFzywvZNMkwqCEHu555Z1hu6SiskfU24gVkaUNY5HSv",
  "key9": "5TA2rJ6EBti7RZapAWjk4D85XBehRQYnoeHaNdbBhPuLcvaoBwJyigixCJxoiioHsUVVjwM58wWi2NQU3Z2nrhx4",
  "key10": "5pWhgq9G4GNSzybS6tBHNupRKTRPCk8JEhVxypsDQVmXNXQyXzPcnpnJgrJXHEwpBExyHYfqJ7mL7VUrQKF39jc2",
  "key11": "43J4RwZ7LJZtqA8DAsdrg3iH7UxG3ouzRoRCcDBmAeyx392R27ZPuFkByto1E6ns8oKuhsLSFE2XXcBB8ajTzx9z",
  "key12": "YKj3xjVxe5FpCFnFNLxPfTcwrScJVw5jB76t6uoN5MHDUs1FScqE84U8T2vHRsnLnYJ3xwzkzxkjMmNn7nUMgA3",
  "key13": "3MzkF9HLtVtDjXM8MZRaFVHG7FjdC6Ls9ui8C8fNsgyMfLnGwHZS5dnH2kgSFzoVEuNLDxDgaMTcR7EyrBHrkXxE",
  "key14": "2hxUqtVueGS77LfYKPDp4MD62w2wGAsKwTHogRaTVVMCBBKgcr1XaateudeQYRoUbZcRSGfkLHnoXSPf9JQ2adqJ",
  "key15": "4iNk2Nf4DRmMYAQku42jJwotAKXrLm5WKSQRMVKs9N8mQZN6fZTKgB1ALkPP5fx49RYofamEjjeKXYAEhofZ2m71",
  "key16": "28iT8S32b8Uvb2SkvCUVCuquNL4HQkaTKrEpuyx25R9ReKWaBEfcRVreL546FhqL31VWRETzh2dr5p2dRWKW4Nxj",
  "key17": "M7yPTgbLG8v4wJSQrfr33LHiBEWYUmy8uzhxcCqVFE2RV9wh5A52phc869K7AWgyBrX2Rdb5aHjR7vXH2QZKRpf",
  "key18": "4v5vmW15Ftjnm7aRuk7eafJPUu23bzyRdrFduNYCW5ayVebpUvLWANgikv8HjiKtQoP8hNvPHprXRN5aWpEgWP3Z",
  "key19": "5umN6bmYQ5BAfN8VEHS31peJxdhCbs1XaKcw3qbaZNzFBF5KWKQsdWGWyhRLcAUuyU642zAbjod8kf3kx6eZ1zTy",
  "key20": "39oe4cRw99vLwH3tfnD1rk5Zp8q3VKrnnaGcRwfhbzn75PZW8GZut8oXNHnGSKF4HMdKhnAJ4aH25D9WTuX7kCjz",
  "key21": "4rjtfwuoyoi97By5EB4HL732gbSd4K5ugNSPU8iE44gsKN3M6H4jdX8qmX3hwmV3quUXmiFmFnVub6jizjk1DtGk",
  "key22": "N23pWZNVXN6PeqZYa6YUf5ZVF8iqJQfaxnMYrXYfFBbKHPLeVuRyFRoD3oJF4ofspxqotJKHNZNonx6DCjUaPdz",
  "key23": "4wqo1V14gjofY358v6VXwpoztuQEkHWCD5ocJuB33Tco81UE3BMXgrq5r3xAqmEyuKMAGay3UHpM2y3L7WbHwMwL",
  "key24": "3ZiyXdHg6SHSUj4kye67uZxkvg8BznuwZv2XuUxTZfYTWf6SdSrHa2rQRqoV65fibYTMWyufhHWdx8H27sK7fkCT",
  "key25": "ZxqyB8Wvi2pb1c6pej2KiiqontG1jghj4NjdtiANRQiG1UQDk3bLqAPWfUGEoHxK2N2Y5KV7gmc1PB6nKnjG2Vw",
  "key26": "7M4fKcPdoeJus8fWHkw9kqesQeVveaRsvx3ycg7n4JcjjZsYFfzsf2Y7egxKDSqYg2BgdoisUfRvNsUuQn841bn",
  "key27": "hUq4VW4ncxagcMb6GS6RfyEKUkr7RsD1UBXic5iAYyYn3FXNP8yj4QAdQQjeVvBqjEpMeHJGWX4wdqMxGKyQ9Vc",
  "key28": "5aZBf6LXGQHq8bEpBjEJfxfsKANCV6fARdgfpobkv9RAUhNq5g73Sy9NsGjUKxKDnG9bx6H22soKPqPHt6Mm3nUn",
  "key29": "5jTYNSKnMcBSG5ijRzcyT2wpJyZM4M6xmdXo7pnGGMW7FHRDvAbZc84Qz3pKER8VVj3TWnZbVd6B6vA83kWwzAMF",
  "key30": "21W37dRT7MVUXRhRxsyoFQ1EkBQpFAtz2FTQ9SGYcn27kWqoBgb45htouJHMze73FDA517A3xpxcd2M6KxQLcW2H",
  "key31": "5fn6CBvzmDuJNSYg3Zeb9cmyYaYvqhWRQEHrSBRt3xMAwrrvK4UQGqArmW2zvM63n84hvUume3iX9nZW3C7cvkei",
  "key32": "2o8eDourjsDpBggh1x3m6j7eyCYUAJP5nCr7iNBgLrVYJ2mK7CHao5rA74qiwALbgLzhEmBrZZM7KDnXeCiAjGJ8",
  "key33": "5gtr3TpQnpvyk6xavBNDcBgsP9neeiqbe7PMQt3xYhDC1tFnPydqgp1CLpSKHNKn2yrzRe9y9QwXBnE2tEsGxC6m",
  "key34": "tX3YVosss7YJmCQwW9E5JVYuUd6sZpLpLyZx97CsYY2PtbPz4sUymhTQGr435qyxkXmzbEwNxZjBMRMsyQoop49",
  "key35": "4fWCReecTUJe8jMXqZ33Vxrdv3sBsWjVCs5KotATssxsgVqH329y7md1dV441ofETLT7TfMETpML71p4FV1Y457L",
  "key36": "62SVNTQ1RSJMZw7tX1EAxngYXtcuAN3rBUJkEyJU1uz6vwqBt7VvxBn2QYjDFcxhhDRuKgPFLtTT2ih5vb7ek5DH",
  "key37": "5Q38fvM4HFX5JjmUprhGRPdpQZA8ht9Q8k9oocQPhz2e9sFHS4RzMGucTcGsgw1kGLthH78LY133fMnDP7Ng1JMj",
  "key38": "4EHs8iJ92Jc98C5MKh9GnqXpbLtxXhozonWNYHuxx1UM4GwiGSPt8Cg6qwS9f6Vzf67fcTBiuhzyUFbT1DrpbaZx"
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
