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
    "5ydWZeUbt68JsrxaY6tooCxMJKpD3VHoe3k9a3W4QfepVSP5zrbiWyBiKW3M79KRTXxA36PrxYd5KDaa2Dxjb11y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zY7hnvnZwUjs18mqPVigU1fn2HFkKzTTfCrBDXHnCsPFettNbBnsknRzuHJWTgXYR4JmefU5LPzCF5HdsbmUy2Y",
  "key1": "3p73VenuNFFzKykavDHhegruvMZmL6kox9AsLNh5QENNybb7REFxDoNVVp8MoaXCU6XaimTuY6Y4Yhp9AkwBc3Tg",
  "key2": "297yx81SAQ6vu9Ckz9pEJwgXWGUE4mcT5Nf23UEXRZv497oAJEZL1Rr9NwqNizpJJBoZfLDKr15mRHLnm1kSf11q",
  "key3": "knr2cj78esx1DYx67dGUJNTLHCt7AHwcbMBjcXux5AYRJENRrMn9A75Mpq2acr9p6qh1QWMEYVnMAj3zTRtxBrC",
  "key4": "3jkwSUKgzvUoBTtVr1SmTL4Ar2jf5sSJFg73CJxMb7559p8g5mPui1LeC824LqJAU29UBtSkCLB5jEsAgRPBWfjJ",
  "key5": "4hTpDAKk92nthVEbMMFysPNTsrDqz5oRzU6CeuNTXFyizEWhBhLCHaH1CnPZRKfgZpwhZT7yhNLuuuSvKxrqZSs5",
  "key6": "3cTEzSye9YAvQ5UJ59dr1FffinShpG5Y7xNrGGqd8J2uX4z3qSE5ri24kU2kxiJVBy2M92EerVuhdwVBUYL7E8o",
  "key7": "2DRpSRdzRDPz3Msc26ojEB5yKxHNjE4aCBvWK3vkxW6vFebLEhHBumyWwoYXospBFbMfmDPtR3tY9agfV5uPiQaL",
  "key8": "uGP4gGgfiUj2rVipufUKjmBrNs27tEpmZzLMjdD2Pibh9iNzjaLrNBoQq2vJjVVijCBxMk9u63dVxUKU6pEMQMD",
  "key9": "5rH3gQEtrYJgFJ6JnAd6bnyZHZW2XvsWqa7rqEecCuwEaGomcM9za4zB7SMtqQKef1Goymtp2hLLmZABAFHrEGap",
  "key10": "2Q4Huudmp5BacJotLWjLeS1F8atZJfhTgUe8fMU24yT39Wm8w3qW29Nj4hu2mN137uXFzu2yAJopoUM1dXBo51LA",
  "key11": "5YSTsesQwMnk2o4EPYupHCH9L9f28S1LfFqmEHr14TwrjVQi6d2AQSj4FAPer7t6rwSAnq2KcJrqA5APV4SjVzc4",
  "key12": "mSJPqThXs55f3n1cG8tLPxidWcyfGaWokoGr8nE6Qg8ERsZWqQm7kecthng1FjMnRWpbteFvvHpGhujrBsgXTH1",
  "key13": "21KNnqyL2V1VN3H22b3WcvdWVWJXTMA5Jq7T7ZTRaaKiPsEAZbfM1WMfyaxJNDEHv3mYNpeGtWH8YQtTgpLtRkks",
  "key14": "zBVANytLmfAAod6fTowk9pi9D6nwgFBuDKGZCX2xFP8Qu3uJNi9Up3ijuGLaiDHzd4FTtrKf9fnxA2XfWSN5FMQ",
  "key15": "5ZWn8cnx98A8L5uF4JgZoRtM1DvziV9mNZdG2KsYCdzp1UNAGhxx9ZgCjVVo9njbvvYKjGxnDvgbiU2BLWrXmCV5",
  "key16": "FwkUowf3ChqM5hx5H7b2RLtKpH3ZzAyg6TxYhx9w8FGJQu7QGDtHoMy3ntVuoUcB9Q76c92UbpLWoYJ6n8H6WJ7",
  "key17": "3CYRb6p2sgZ9nMQC7hciBeBgmjdYWKYbSsBcLoUuCB52wFw92rEtCoanL9qHyzuPU9HcjqkYHou9jx1ha28C3xdv",
  "key18": "65b11kJK11oqGH4EptdrCvUfmvRkuPM6U8B2f79ZC5hKBD43bgNFuymQdpFcBeVmvwRYzN6DSWox9iMJvAc5vZJf",
  "key19": "3AUshdFWL8QeJHPW22zxemrVcagcL3ntAZnkSqbaFxzEm21bnQW5WM3xHh6XsEgMVm2zj1kwMh2gTApPJtToUAai",
  "key20": "4ZTNUq1LyTnwJa3EHEEDxF9mzg4qJMPg4Wp2xQJtxGJhuAbqUNcXCqEGdnsR9K2W5XoTFicaodjhsUjZVG4hUajh",
  "key21": "2Z2VhFDjgkZqJymTiovjnKBUuxhMhgoLRT1PmCP7Akr3H3zfLC3xcTCUSAgvj8pJtDrDWYBdQ438tQyJbSfvZsG3",
  "key22": "3L8bhnoFbBx45PxeJogNeHgjAMan2gBTcZujBdJfogmnNtgmhxixbFRtRo5TJJbHM8rJL8H9uQEAwXXgfQiYcN7o",
  "key23": "4eGq7EZ1RzLJbxB3HvHznR31Q9HaRmD91ujYiAAcjETA5ui1HcYYMKbrX8y8haV21Xdx9eMxt3jgNHDm4RammYPj",
  "key24": "636VRbxnBKod1JQ2am9V5ysUSaTCgfkDBGruhsegi19WJZGkd61jQY1BtoiTuKntAtW597dXjyU3MEBpZqARfAkh",
  "key25": "5nPgMBKXAdo1DEodrHyRHfm5346fyNLRT2ZxBd11mzoYMA1pnCPeCzzwEpz6Smv8j8hP2bFab69Z39pqjzeQpkQm",
  "key26": "2wYVLbnq3FfkVSXQQL4PvSY8ewRFFxLuPtQGGZiwkEQyVieDe4L5JMeQpQmUTmgLL3HzezHF7agQ5EfcmQGxc9kt",
  "key27": "2GPUgpdySeKspXFDXCAHoq9Njhb8NbEQX9HebbFU3dAPFmeWRfX48YMh2oCbNzzoh6XfBiiywHEfbyWvV9NJ3kWj",
  "key28": "YvKxhcjsKUH7qPPbLuo6CExBsLWf4cAjfBuiRaeA23A8DwKsTXrSqDctaV26hMkM9mxHm1DLUP3NLYZCj8TKApE",
  "key29": "5FZ1Dz915AqVpMgNDvfNiAfXx2m5TG9ZS1eKg6wtHdk359pispyj8MiWqbEtEXGe3QKq3p8WR7jDdrWzLGf1Pdor",
  "key30": "3wnLJcjBkH3gNXRiYjnv7wXLfCTSYyPhnf3cGehcAp6QjYqLADqjs9nsw5tKxWqFhNhkSwimqC4RpRNbvzWqS9PZ",
  "key31": "66Kz7ENv6z22iAXg61GdVyoDWVHXpABBC6Cc6WSGyDEUQJjifK6X1X2beAGD397W5yA2xKhxF3q4xvQKymsFgFts",
  "key32": "T6ug1DvLW28QGHuw6ARcTEQXCtWNVnXhSmcXfb81CiXmXde5kBbik6g3YafjCGeQ5z5t1umNmLdRQr3UQXEuFWk"
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
