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
    "4fANUXEoj6Ch3BA7FRhzjQWfFZvFuGBU3qYVe9Gc7JudwUsBgH8nNj9KM4MgDXHig23Mqp52iVY1kTy4XjbqgXto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yK7spSowP4GV5PXqMn2anTWvSUDzMj6n3iywhdrh67SgaQhbH7bfMtJKLkMVDUyCAeE57Amoa7s7kmPXCUUMec",
  "key1": "t6Ltvvz79TVofWBYTo387NE6d6F37kYfQrLsjcbyzDLk5cfJXuAgethy9oiPBEkfDxvZY87dC6Jde1AZKjLMXgd",
  "key2": "21Jig87uPDEV4MBWYj8AK42emtaorbvXM26eEqJyhxD8WQPdBLUP4A7uR7xMhQaCYuzpkzkjNPwG55eLjqdP52ny",
  "key3": "5yzQUtJmtKubnSTX9QzfyUXSExuSBNgfZLbsyc5s7XugFva4vS6J97381CHQ6CR2Dkmb3mG1cFsXTPBTNnFzAJAG",
  "key4": "3JzQUtdBKj3zQgtQGnfyFdWnXpZmEgsYBS3JNokSWoJ7iDqnpUit4oJxHKtLrK8aZpudUuZoAiF1cu6SJrdYZLnY",
  "key5": "3FctdTvoAiRKg2vzXXwBcitGLAdmpxJkSJ1GML6CDQbrY5T1i8bDVdLcTatdvHVK94kYsv8wWobZE5wfh8vayNtm",
  "key6": "4RLLm3hcRAm2HCixN25f7peBvoaa6irYTNXYSKFavf3Maze6u5heZsrWScXgdWD22qyt2eJMVA5XbcCUR8GGXcUd",
  "key7": "4N45STJ3hC9yRx2GuAVKdC4QNcodfwUYV7fxQEK5GPEc3ut5HHrioWjkRxXoBnMVzQrMXZJzim4T9JTR2FFD78an",
  "key8": "D7tysSdj7Hj5gosdo4cnzsBDZwpVAQaQWVxyB2RjhtBwCGq1nAVyjZnDxq53sMh9vh9qfd5ZyeBwpQ6eQ3VDYoN",
  "key9": "4t8aU7QrThfxkbPRVyGyGaMhyUULapap1BjEHKsrNi9d53qGASHz18MpwyLKdn6n6aZb5tC4Grz6khmipTnWyL4Q",
  "key10": "4c7ZqnxePzxj4BAXsgRKp2m71yc3xeQDH53Sc6gLU19vuSiHJNFZJszo8bg77QD3q4gwBmWvgHuMNj3M1YGRUvBS",
  "key11": "4rZzHLyjB3QQ5ytLs2TmANYv5KwFv41dULcKUBzSEjAHiUgXd3j7JrpimT6srcdg1fBS3B2rttiAEZVdCP7iNMrz",
  "key12": "22dRXw5EqSKbakB3FWEn3Ah5kTXeKf3FQ4XySzJ1V51jceYAiCx4t6Be4AF7H78zUZsmNZn2Tpvcedvxb5XJQT6X",
  "key13": "39ArRM8SuUkGY4NshSAx7VNyqSZW4ewygJuPsFEJLbXFtyZyJrRkG6ZJvKGfSWEpSeSsGcYDocLnUTmEteAfK5gZ",
  "key14": "2yWZhkFHQG1RLd19rhDtjeuSc6PshTqQrfEnBheyubiB8bJMe9NZiG4DC134AHey4yB4Nn3g1jZ1GvFgiDTkW6cB",
  "key15": "2b79kMwu4UgX6nXnronTsNaUv1yCUtF79KbeiAc5zPfyKcfmvUvg9KCB5Meic1qrg8nGGzcyaqxCpzegsDpnuhTC",
  "key16": "38k8GAxqKxVtLMcbXszZUxYrda76ZAVKZz2YWLaTeYpN2DJFAFGGf1MkftSXxQF4jXdYusEpFHmbx2L1w7z3Enhu",
  "key17": "31uADbDJ57UjsXKvme28ZJ4oeUFyee1PGWm5iHkcAGBwQCykFEU6ptzTrs2L56tAKnYJe3fhv9XrQSkF1treVrav",
  "key18": "5NgychamqTdXvUESWQXu8P9ruw5mgfginHoVArA4YKY33s1ERRMjkPFTMaayctUiEs6BrYG4NJY5D4S12Nqkf2rk",
  "key19": "39nLX6r9cPgy7csaZQ83MX3ASsBADkPr2uDSU9LhgghQAjNmCD5mTNsG3qsD5fTMgcYXcwr8ZAC3yiMLffRvLfQ6",
  "key20": "5mB63WsjVyhH13FjvfF9CtZgeYnc1xwYjgRzgLUMRTMtfFhAFfhT75KvtUH9GEtuy3FpFAmZ1eYNZKG2sWCmr3tr",
  "key21": "3vJdbSa4G8TkcwpBtqDsD3ejs225BY6SGwKTzV2AWWr4r2mbJYznKAj1CDAzu2Me5FLTuZ7MzdVJx6SXeLjkcv4k",
  "key22": "2My9ghkoKn7bSBkRbEfBttmYMi2VPek5K77iq2VVmSsu3HtJBA65TXhJ8hoXSteeWGmhQJcrCCC5GYQB3hStAw4w",
  "key23": "2usAnDMv9SL9zJU4KWnjSL1K4BYfXtWR1JEAsoaTRH4LeV28t4tadKW4hukrhqLMQrmdC44k586vLyA9t4aY9E9K",
  "key24": "61XUz5NQVx66FasUW7V3gT2LzsAkZja5WJJKpU9uauE2JxRndzwJ5MDxdTHps2gu2Ac8QTuxnv8q9JU6AYufq5sT",
  "key25": "5RKEgVgBwzyazzadecde6BwZjo5x1FT2BfXuqQqK7v8HQ3E9e61Mo2h6AJ3PmGGtnnxNXeZBTZzDz8CpiHGGFPgU",
  "key26": "3nw8JvLcaKWotLsNwuKKVAT8Q8s5ypjS7iWRcySEeaErBAaMTjiEGQJvirUqV6XcFt5dVTtGDn2kh5mJk5wxri4L",
  "key27": "4wzbL5ii38qUwqtrUn2oeJE2sNe88z69hFC8xo8SJEDwVvxUGM4AWZq46jiwy3jviYEZT2FoHaUcEsto8CBTejL",
  "key28": "HcKsM9WEKZiLH1VGvdXp5BAEngVgKVs7WpKyS1pyXDCJ9LwL2ayH6NzJYxsuXaZqzK9arxavbzKj7VXAUPWhN3Q",
  "key29": "2npUFy5sUPjvhrgpwHQG7aRix26GVWM2FUzNapTKVEu66K9cc2fTza4qacWTLYmrTN2mPkM8jie299dF4vPrJ22g",
  "key30": "2hsKPWnzEN6asrTmLL3xeusNMHtCqXLkBLiXK5KDG578taY3qoUhyrSMEPnpa1XvZ6nqKcAyDyxVYkn59WJWaehV",
  "key31": "2ExNXV8RiyAAowMxGJfLJBdEb48XtdoT1ziXYBZgYuPD8kCVEYzZKP1HThpySv9f1EVvR1iZsA2NGccfzY7T17JJ",
  "key32": "66ehU4ZRkzrKSuYnbjVjLWD4UpESxw3RsxNQaMAe7eBpimHrjKPLiiodVh9qQksuUVxe774nCvDxeRsg2LMqpT8J",
  "key33": "5TGDhAQmXnsKNApUiqX5WP8treE8Zz4RhZK5x58CKjcTjmchjZvRk18a2pVcdaSSABC3w5YfSDHfFJZUKfPgza8s",
  "key34": "5ZCGxS9hQzUzAeVFptDKnN2iRaSFVAaGPYmGYttgbEhrTcnUrmtUJoakKJhqEXXrTfowABE1MCg55QnLT8UZybAE",
  "key35": "4txvNB2Fdgn2ujYRGZUU3Z67uZkewJpMb33rGkhnRPfS1wTwgnSoWqRDAzZUFLaoQayrUvoVsfQHSY4H12EUZQQj",
  "key36": "2PL8mFPLWupvKfz5BMo9tXQZdZ3YooQjjYAB4Fphna4kDEiQVBfgup2rdR9YDuS4rEjjCtMiZxCt34fjFdFzc6bB",
  "key37": "eBpHfgsB6h34iRUUoNr6968ED34R4XadGKWZ9vC1Vox3V4EXkWbLmqT56a3em2WESUnFzc3GaPQVCiLTFoevocx",
  "key38": "5tqiq3QRcUSfq2FRoeFexyboVLB34W6qsaFwnbW6HcbKymbHKjAfjykPBpBgeXgzu1u8iHEEjedPzL1x1wEpR4nm",
  "key39": "678fgA2TmeqwZk4ogHo8XUUJcsuHHCQvWPtegGXpn4rw7kSK2sGHhhD9oxyUV8UKVm7gRDfDQp8a5zcutddoSAVK",
  "key40": "4td6YcWqEBN7qud5YHWuKNQ1DRQRR79Y7U7AVzZQ1qqA9Ks3NV5HqkmVM44EeVHEBxmc2KC44B88g7j6WFUew1yq",
  "key41": "3GZPo5VZ53qQ7FpKzkSi9J8Xz676u39Rc7TgEZbndyDXDHaXXvpzFFZNVXMGuHN7W2zRXwJqU5jeHm3uykF2mwcb",
  "key42": "53Nic91R6TaB2FvqwksU8myDWrthx38MiHi4MSagfUPbAhDSLTn4kQTyhFu9nUrJHAuwTATrrebhHC1zqQrTKNcD",
  "key43": "uVRvRc7nsTG3p6LTQJeAWZrh92bFQJyoTc5NAzZevTJjtYZjytYHwMxG7655fNBMTThnHBxJ43Hwbgf2TrB3EpY",
  "key44": "LT96WBneQJMwQXojMSJpbZJ2eZVTG7DYE99LKoCbnK6KuFkqvAVEEHz2jDjpdzYAGiWXETMMozm7ExMjtP8ddmE",
  "key45": "4PwTdHC7A9AbRRmnuGswAEgXujzXMMghoRsPVUyH12eh41QtFZh7Hq4StK31hPZsZJKotiFhsz1oXyA857fxezse",
  "key46": "2Ux4CuuJ1jsQjYXXZUeGkbkyPr5CNv412MHYoKBCD1ED5npsM2mYUaQEgZkVQpTGAd82iae7v31zeBvM63ABWUVJ",
  "key47": "zoyky61BCCoNxmUCEuscmgJagv439oG9oi3THF2YwK9KZ9bAjQXQqmgEBT2UFYZAGkUhrEihnSGyAUx9DF4S6UQ"
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
