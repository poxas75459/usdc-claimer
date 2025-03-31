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
    "4eSVWFfnZ2KvGLp5g5Tkt9wmqUB5UDpQRdvQZjH1B9mxyoPys39xSDBe6RrWysBcWxRW6wT54koYUkjbv3xxzH97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sASbw2EK2G7tefRWJjpggkNvEZMDcogbRULoSAGAaJzrs2Jh5J2s1Uaznjs1nj1QMajE6uX2NyZYq8p4rgeRbzh",
  "key1": "3pw9seM8V7hf8jYmMWSMTPn8hsQpimrzRzzZfhE6NkkRD4iaJARC7MJJ3hsaHgPbjGQERJto6urxJKHVZab6dvrf",
  "key2": "51cgSzEUJPf2SyXEvyoksCYXiAecGc9dMGYewxzszn7i48QnhAtJAqpVXncMftBWusFQbdveRnP3JVxxCaJL4F2X",
  "key3": "C5NKLEfRH37j8AxRRNeyoQgcgLjvbsZzfqQWCJJKfyXUXv28fyZ5Mppdk9VmGzWV7c8Ev1FrdYtcBAJU5K5BL64",
  "key4": "57wx5m8ZS2ajTbRnyC8aQDGQ3wZqaEWpo1G1ReLvwm1UpYBhPRGFjPp55ssavFUmmcsfT5sCHjfG2qtMPaNUSyJz",
  "key5": "S6Q1BZT1ZqYD5zD83oeE1BSUtjKsMApwuqy6UZuw593VrtKrdBvvXEHWCGvocgiFFpqSjwfXMVXoXBnGtjw4fKQ",
  "key6": "5pSHRAPkAizn9eRAUCUj16oZ3U9Z7VDWfBTaiJDfREbve2pQkdoHNmaMm3jcbzKyzx6CNagih4NxuJwvArG3hyto",
  "key7": "1y3mAK6MhXKChu2FMa85maqhGK76ogbzBqM6FDVBVRgqmpckJxRceRRKWSzvnJgF6xfxbLjWaU4YXZmvj7DofU5",
  "key8": "26kujvATJECuJsyf8b3NNVFXzuwtBG8i3hY9GY5oPYX1UEA6m1a3fHVCXqApSW9cP3wxUtWR3fTEnPWjj2mk97n5",
  "key9": "28BzwEsZtG8mjAQpE6gkJHpRhsu88Cr4w2xrZUQjPbby2FioQCBt5Hh9cJSGmBGXgAHVGJeLRWz8VhVh6wY3XZW9",
  "key10": "61G2oUZFzRwxCPToJ7KQwEej1oqZqZ1Z6m4RA74W8D3SZ8xBtVHuhJ49BwX1eARt75qR2zftQU2wvNuVjJRLX9ew",
  "key11": "4CyvEdPT3RHiyyga6MQ9Zw4RQpAgeBQ3HJg88zVdiu5RP4dnHdfB8iBqwYfjH59Ga8UgmQNLyKUs9v28wu2K9S17",
  "key12": "33cNfstkmhCbDwDQGhVGomFjX8Zw2cb5CbphGbi5kuoG4apmkwtWqJebafWBPhPMg1wVpRVeUe1JsanP2PbeEP9f",
  "key13": "V7mY91vrYnFTvX2yZNZrWzB7XNgwKdcGrHzx6D6AEzUxctirAzbvYofDBb4cHHR1D1Y7oiRbNDYEsZFgFsdo1GU",
  "key14": "CXsRbMVzwq7NLT3RoEvLvfv9ByGnBemTxuMAa3NYzAjJscBBkb39nmQUn3MHqRWWu8wa5L9usfgnTMF8D34DqQG",
  "key15": "5sng2AsRL4PmMkfhDnv4oGdVXh6556qz9PgYgY6HWJzHFgxyb5fB9KHAh1JzT1SsEtF1LqhC7yKkTy5m23Z7j5Fs",
  "key16": "3RqCso6Rp3KKBVeLFWERfCxEvJXVbw2vy9sT3LHuuLwAn5t73BGm3rATzaW9qC7vzh5LR45tbE43r1eQiNFQHmCv",
  "key17": "3bb9jhwKvRWKjGidDVV8gkUNqxVwusrmPZF4FQDHvQX5QwGSjGissJqTy7PRpT4y9Hez88FC1xVZtq7cvu9m8PWP",
  "key18": "5etSxRCgQdaL24ZvPx4Rx5jZabwsWMdFiJW5rb5UkZqMqcLFHcRZsSxV8cprFaHTfSTpTL1A8rirRiVCS8pvmYWL",
  "key19": "4Nhjizf1Uv8QqosBLyCGi6Jn7vRwxb8z4ckFeq9J1VaJuqX3fWt65nVRN7Lpo1SCxdbv933LPLBSjmRoP5uEfm5p",
  "key20": "5YdSCGX8dcnwCoAmbxYzkgVQDvNSY6qjAF2kchqwkHYaoCeH6e9dr7R7Fy111YLNA68RinihvCB7fjKBzWZ6zqs6",
  "key21": "5bUDyAL2gapn3wTChwa93n5mC6GQm4odRhh6Swx3YhLVVwAKD4YvSKx7o1JeGqJaGMFm7rv17NimrwPtxYQwKDe3",
  "key22": "3cWZpvNu4ntjw5iuwxqoWrcxUMrtMsFpfuKTQxpYec4Dr43FJXJYEbN4zM7NghuYfL1KvKzBWFuijukXt3VDQsKf",
  "key23": "3mwDJ1ZLLFsiLaK1iXXnAJbRk112NVBAapzUYAqq12A7XypAuqZaJfjAg1Z8sAU5s8gQz2dPjCbjn8hXHBDJkVzq",
  "key24": "2NMwxYu5vdR3LM6GcnzWjWyfwYnh93GDUnArmEaKA4UtvP9Dugru5WUYPUHFuRnB8JKkVLnrMYMAC6schVYwYHsz",
  "key25": "HSpS2YFxR7AzyEoXkdM2LaJGYLGtka2KtjgqsHywxnBvzjRFWAYbA2Y5fySW39DQ9CF9La17W5sA1k5vuyuN7qL",
  "key26": "29VGNY4xraGTrDK58wKFtjG2M5Rshkbs1ocf1VhbVaHKPeoMQcJ9d9nJ1ef3vQbqkW4ccvFbNjrH6Ptasi3Xic2F",
  "key27": "5Qf4BT2fmvkn3HyvoPoDRHvqGDBgahNq5Krx8a9KttFkSkFUV6gRZk9WhpVSmAPcbSpB5fh8BCjxKEph5aZCQQ7L",
  "key28": "3U15zAztQZRQdcDTfdxitoAm51hcTShRNvLx8tvNZcQuQE3QNPtJ5k5JKpRFueKxe3cvB2MLFXEud9VYdhDqzrCT",
  "key29": "qyZMZZcAEFg2H6pjLdiUJkJ6WfBmj1RvpfzjLm7F5MSqsCNYvmpaPZny63svChzCwQ9rvtuPMTwNpXJ95GedSxw",
  "key30": "4h8Kmnm5dyLASBmZB4y9K1FsBbRdnVNT5dPJc174ktU9N7ctBMhaoxLawp8W7FhvWrhybC3A4KXmFoXi9iERpsUw",
  "key31": "3TS9nsMLFrvPnnEhtWJKh5tEgYtp7soveqQ7S8pcgBV2EtFGyMgNu7zsccMeP8KkhPXwNoQZ5MKdKgNXuRz3RUvM",
  "key32": "543NeCFNGbKAAAxWaJLFacMGv6u4hUFitcs67Zia6HZhutgQpPz9xcS4XotoQYKgwLb2CtZR4eLujGFjpbg6gwBH"
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
