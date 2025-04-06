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
    "2vfT2kfbVfuqAafsCEdKvTsRveJmaMZRtKB8KNEHn1V7aBffKp1jKvEJ24knQFZBFvxu8NsYBK2sdaH7F3X1XMR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqV6HH9bYkNXppgudQmHGGzdtRQDaM684Lyy3Rvg7ytGwH3TVrS8pQdh51mXR7pAPX2qBTmi9Cqm3axsnzpLkVv",
  "key1": "3SpHFi9jZ7yvqHKKPzsWBfp5wPww3M3BEjVYjKaT1uNsgaox4cwCMKf4UvShhwkyoyZZxmXkoGJVEzsSN9PbofWW",
  "key2": "3zHLZPnpi25qWrCXoEQBfKTsq8c6ksdU4rEThUKyzyxHcWZrADPw6tb45nizsRtC4uCVJ9p8bSwqCLUoGv8bYti7",
  "key3": "3xD7UQjCMBETD5uMH7uDykrFNcUGAebn53wPby7J5qqVNgARz9Nk3nNMgkpXXN15kmkqjSQSiKevS8ZfK9tEfjfw",
  "key4": "5ybnGrToERZfBWtMhtiLANaivJesh4Strd7N84Xe986EgjSzk7HAJLJjZfhd6pJEkaipVdELkpbRixFcGS8m3Bmd",
  "key5": "4Vuaih4FHvi6bLiQ75USjBrJJheJ9dEpbdz9A1ABPdzd78iBSAC4bbUx9w6nSFapJhQweiTxPNN92JETDUNzh1i8",
  "key6": "xNrWGWCUrmQYfUjc5bphAwXkAqD1hVWfUnAFa7H5kmzGEfkAGxfPJGgU5dibbHR86Scqct2tEs6osTkS7hbHMcm",
  "key7": "4rQno1zkP1BD1mQ49ezkJSqgriAAqzBoiXHfoSksr8NPz33eXULUKnjD3iophEtKCqLwvv1ceijcHRamXUxG5wYW",
  "key8": "51ZxrbsuArhCMcgPRLmDSSdNTB6WKhVDF7uvkGVMNqS4sadU1tsWFLKb7vqK4MYoaJSkt8b6Egm81L1A9RsCzwFm",
  "key9": "52fhMHoFJJ7nN2F1NnV7zeWfUtxseWsZyD8UpqAcuvobNB6b7tJuCmGmjsGsSnZuN9AHT6ZCv9Me4CiQXGfzkbKc",
  "key10": "4egjCedDxDAQnJJSyKNitDhM97Xmucq36XjiK1Gb32JodYGwAWnENU9umqoVfSYAtJcxjPXDgSJtrYnpk5L9qC7x",
  "key11": "2DTC8TsXquaTdnu19BiprdhY3x9vETwMukxfGyNWjvSSUP9CZnaGkHtj8YuPLoAJQSPrh4x31kybyaaUojH5pKex",
  "key12": "Smn1m1B3ZWN38hiLfA4XwvUnnHg89JXETNTymotxykcDbqcjs68Zz3CQ2XTCfq4nVc13QBCY5Dbv3K1kwMvmVmU",
  "key13": "4eFvVjHXEAmeArqCSp6yiBvqT5aKiPmR9CcrAApAYhaBAqHoxJcRpH1qqB65WweHMBeBXuyDfCLm9Yy89Lbh2SmW",
  "key14": "XZizmF6pYAL3YGB5ojyg51HEJ5VjnG3wXJy2n5UQFa6CXfnsfQUgK1tD3hro49igPdymmWwh2C5EPzS2v9aqi53",
  "key15": "5QBFiv4GfKwzEJ4h6P6k7Gfqzc5FHAFbZnbsdfWVQfpCKn3MrusDhWR3GTt9AXPLx8tvogP73fCy7SMrVh4F4Lsf",
  "key16": "2KAognHo1naCU6W7SedwGuCU3TvJNEG3tGmmaUVNMviAfb4vJosFJ3acaqRcXH2C9SryT1iGEQuNMa1Ytk68JStz",
  "key17": "212CaXi9eixww21YpABvvVU7hdF7UPk6fPbz7Z4jmVvuKKH6u2hHoUYP1ghyCk2vtrByhbVSzRnt6BtnKgvYdhki",
  "key18": "2L1EnkC7L95vs6HsPMBSu2rf9FaLbcEzg49SN7zgnjUYjdEYi35gZ3VnnH4zJPEfneViHPwEapM9wj5JxZMxcCio",
  "key19": "3qEoLMQKp5jMZYAHmum5ZMAdUhLE8iHgdkvdXhE6rWPRDPKFafhSTXdiQ3mMbA5QWuAog4kmgrHLQo5hBtqD2yQU",
  "key20": "oBKpmZdynfze7Rrk9DcG43ZaHXkSTrzLxGoAvTPvFFDCmt4WDU586GhqVkL9Nk2VfjQEHNU1pt6jY9cPJYJQDLQ",
  "key21": "577zXxSiAF279uLnLeFHBnMQusTV5NAJpgvpwBSeYYnVCEB3oazHe2iKebVGZNqEFACeFGSvxoPSBS4bKmNaCaD",
  "key22": "5ySvGdA4dHTtBUD76XVvhnyLn9e998hTdcy7UNYhh3AYk8MMuFMa4QmF15cW7RgnqJhSpXbu67MhzQVYByrQWb17",
  "key23": "67QyjRs3MSE7khF7ej2FRdnV9FaxKeBMcHsZy8JEm29wAwRybJscc2rPt72wgjfq8mbupTkAKHLT3uQw3KeQu1ka",
  "key24": "5K32r5hoGDa7N47GdStzQJieb4xffPKqLserzVKNkC1SXmMxjqCZUHDKmyZ21LzPM9mcQiWAuL62on2EdWFcMJkQ",
  "key25": "qq3fNtmV6W3kyNgTGYWgz6ZrydiZXQyM9T8Uoh1vF4qWCvCRFJF7gwYijqVk5ZzKf7h65LxcZ53FYnNQdxdYUMz",
  "key26": "4YJq56kn3zgnGW7z3La3sM6khwU6mtLW2gdzTSfbAeQ1wrtjnw7Ez3sTHrFPH7srHieXqBih9z7QEmtAn5Rdb6Jm",
  "key27": "4PVrkckJhqLdESowbYDat9fM5uxVm27EH4q7dbHPDA1xqFmLhZ8NpoiBsecAnWwXNwiURXAb7EowZJVsTLWUzo1V",
  "key28": "Xkf73zZhwBNMdmbg5BQoUeRhEkG4UUCQcrcmBvHH6QBp4pdw1RJAXz3FLUuG32CFcj2dLXJqMwGfsEXP1GKz1d2"
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
