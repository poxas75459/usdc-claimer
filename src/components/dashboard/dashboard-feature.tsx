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
    "4Tp69Z8zWGZeJAJ1bCBhNShTez4bmR533EqziTmedBSh3HEZsveyM9zbyXRciTAomKkgLH8miKKRJgMTNkEiaCjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZETR4dVuSMBedq94Bd1jsv4Y94KZZMX3REFmg9sYvSM8BS4a6ndLtjj8cVKMRZcQSPNL5STjRC4HHiJeYLBCz76",
  "key1": "2cs4uMoBnyB3dDaQoZpp89rWbq7ZrhLNcvr5SzN2EB2Ux7LvP1qbf5QAMpAyv5kT9iXhZvLneD7kPdfmuPYgJ87b",
  "key2": "3GLCRzTm65jUFwVkx6htMPPMJKcZNYZx3YCoXrPP78sY3f4Q9vNbQagPeDXwG3spuWiYFEZKjUsuqML6LtswXk2k",
  "key3": "3AqQMKXytsMpeQs31VwygF6SAbaPGokgFBBPYLkCxFqcLWEFEYkku9k6XKuF1Eoo5i2n5Jpdbr8GvUDRUoXRGuK4",
  "key4": "3Xi8FF2UM9WTLnnDnaEoLrT8wpRXrpj9F2ZsH96pg9opRfxZsTKgzxViAiKFUNTyE6m6v8NATq1WxinGpUm4b9Sp",
  "key5": "4ZoAEdhdxaym71mFGF1HH6Q1NsyX9DbYyP8N3M1gB9Y6krBo2i3BBhfNzuidsojZrsDzDL7KnU9BGtgPp2K7J1bo",
  "key6": "PXNFrZZctPbe2DZRAZkBswRugvLYmHyEJxSSPHzsK5bue5ivEs6u6wUNWAvrPc7J4jRNqakpqpyfbFw9bk15pCg",
  "key7": "3d1R5LLnHSaEpru63m7HrkfSQDZU5ebHWdP4Z1EmhemkuRpoMnzmLzyGA9khgpafshkQc2mpuG7J5pPdeE5CLAML",
  "key8": "2EJYgnWDWLR7MDbc8SvLX45XWGEN2iQ8X9rHZMrwQbadd4zswUH2uQu3dws93zYRQj4Gz6TpqF5Xzg1RrSu2ZnCN",
  "key9": "2wwX5raD1oN6Uwk6UDK18uTiQn18t2WaJBtjquV61JiqKVGtya67tzsizw5tEsutE2NKDMsCo3yuty8fBuRfSEQz",
  "key10": "hTA9LKUnfJ9CqFxupiVmPn9EW4EukFgAW2C23TCir3GHLLUxAUb3L6ztPPmeX7yZKgQxpxZ4ZEpyahbUMKohnf3",
  "key11": "37wpMJqAzSniKK2e8YfgEY6kC6fX4RqiK59PeRS4iXAGpHZ8Jz1ni4Rm5bMTp1tefpAxGm7S8MWdrVj8UKb3SdcF",
  "key12": "4PmuHSzuXkAWJGCdkncmoU96nbyz5mG1wvVtwFVKGvCsMuUXNBUFk6scbJJKMpAsAJvM1xEuC8aUSAyTS39X8khj",
  "key13": "61DLvHRyeML7pVDvgv23YvcaMvjSNWPkbFQHEDd1utsdhZuXnY9kmaAwEXidpS1ehBJiRQdqChVp8JZEEjXgSHTE",
  "key14": "3oCCnb4uvxoRxvXe1JU4WxPpvbPWtaarqMEM87g1EU9qL3GCzNvvP1HrQKCTQx3eZc6X89mpcgBS2ibc3f3Ha81o",
  "key15": "31NXohzohmMuN7NHYz5WmhExjLgmFs5S9bM2fPZTVWbKAo6T7MEGA5pS5nbSWkmDh2QKDzAeRmZ6myQYcAu9JbGR",
  "key16": "3fVvCfNb34TYbdLNt9sYPTwMm6vZpNSEMjDkVgb7oA8iKcG3961oz4r3cZDe1HLLcviaLusKDdjvFXvsFZswowzu",
  "key17": "2t6bPnRkVf9JwbHQSJCRYLC15Arf8fM2vqywdoxN9SCbKQu1PsXbVYR18H7LnveqgcDC62Df32DEgbwmvbz4cPkz",
  "key18": "McZ7Lf5WGWmaEk4tAuE9U8Vu72kmsuzWDZHrfssmADD5UfBe9jkogWDcchuuBm5wQFZ2nBskuikJrGyKZaUpPVT",
  "key19": "2w5xBom6s6RN13pUUS8taiKZkk87AXCBcJvDhHUQ6JGc2fiFiRT677AnpSfBsoDA5EFXX93WG8tj3CKpbB5c861T",
  "key20": "qnfu3rnvy28R5QXvLQU4BG5P4pNxR9wMNvJwQtgwPzzxLvrcPm5WimTGbtMHgvzYZUfoyz4YTe25spkVaCk8aZZ",
  "key21": "5G7FdBFLSAwcmc47cxy991TitmAGXo1cfqogD6pe5VzZW2E6o8wDzFvMPWETFyBnbnb4eHphX2msk3vkav6t8Din",
  "key22": "S9Ht9KXtKgTKwLMP717JuniPSx3HYsy4Yf8UWuAv6h6HJGv9ef9KiTf2MCwhoqEJTResrX5g7n1sFJDcsAVWLNu",
  "key23": "s6vVXMTH7Bc4BDqyNyQ1PXF8VX9getDdE5YLmwiMAGCVRjBBfgRJLDGvamD2A7A5KMio54n5UQuvGaaE97oskuV",
  "key24": "hJZ2K7TNgXN5ccM7PT9NTbvaf5ipE4h17fnTEnP7CEJFQ3jZPztCYTLKPCHJh7LUJWrx9cYbZ923yMNQfpNxsev",
  "key25": "3A1JdZjDUMdk47iQddvmX5dU5zX8N2wJozWRCyg81N9rALhKd56kHC5UnA4JtCDj2JVpnsHWFRTUkRRdtfzAhdwv",
  "key26": "4NQz5ww5oB9r7Lt3tSYUWe6zkMg7XvfN35nTnQ1hp8oni7E7XvB3Fm22rj1ZkCxg9etJCtQhhiDtGZegCRyt8Hy1",
  "key27": "4VLq8nhog8UxUuruypwAmwNs5t5JSKeAPFCCLviL3tc723VtMvBjviQKuf7RA57RXKGqFms1bxA7RYQdikhFUeN8",
  "key28": "4eg7AJ47xcJHT2mZ96xAGKWZkXRk35V6vf8zLsNfzj8MfPsF34GDKHE4NgNx7F4RpvZoRKhHDtj1Su83SqcXK4YU",
  "key29": "5GnrNLMs4XXfZmXmBqWuEiidfNYrEf1TFEH797PnrnggmS8YbbP8VKAJ2PAsJk9YBepTgfazZb61yVDKhxj9NXfA",
  "key30": "2rh1MiZiH9vYY8bv3j7PwYYt2m85RvtvBs4owkirPWhN6mPdrqXN4S2axg7wkYSSsTgorn8AfBTETWuo9K846TLH",
  "key31": "2q9qmA8vPzSkzKmurZiZPDyBCUMkKoRfTGFE7uZCjJLje1PeAqpG3KHP41AosfpMmsBfAPucpzrkQz7D5zbsWum4",
  "key32": "3ve8SjpC9CacGEAvw71TfYPFPetcSJMgcfXYiuNofD1qUoGHZobdf7tFDHPQpxJqmvrdHN8GHFTyGEFicq5KZ39p",
  "key33": "4mhYrWwkJDjqg6H8LaD3q7YX772xFGqxFp4KRCVUpx61bWgVrMav339tBxbQUF8kbEriBgLSrGhsQ8Za9mf6NqjG",
  "key34": "3rXHmtweVB9rcWMfxdfxJ1m1jEXpQNUmxQbd7TTPw49GnLJNPJf646XDe53rDjFC8CdPrWYKxhwoG4z7fD6Dqd7D",
  "key35": "2wDz9TAxTrtHKXHnbbtaQyfnvq1sYTEuDjHMvmsx3HWgW56SSNxM4dHXWuQYKHiFYncpLm77iQXiZvhGogZz3mBT",
  "key36": "4iaKEmTbDm6prmRGzv8NB9d1mrwDdv1ziUTUbvFgb47tBVU8MAcZRxp7f2byWo7UWy8PQzFJRmRksM2Yby6gF44E",
  "key37": "5G5faJYCa5qmW9oTfeiCi5aGpDj2rhCxpVBMyDWtFKmbVQVHAMQVP1hDaXbuWtNsRvU3hvoQkjAwXQ9tRSJqD3Ki",
  "key38": "3zSLotLyhghZfzfzMvQP72973D9DRZeedTpzMwTFtfMRAp4vaY4kztPw1MK6nfA7ThN8aBURyjxqqr4VoWQmB8hX",
  "key39": "21sSSsi39zNEV28ReEAbkjB2AM3X5Nt9j4kpZpQdHnySTpMcbqJFQpUrKWScHC34AYG59p6WeL3EWPmKGi2jFsWe"
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
