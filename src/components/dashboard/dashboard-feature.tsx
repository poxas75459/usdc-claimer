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
    "3rTjuMCCsukJo1yhPJSPXW86FA1tKGy1C2T1DxFvid8AVjHMc8rYj74XRqzYwxzqEEg8tbiSV6YwXMUy9HBvzXZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzoyLAKgMKd6fb53fKNj2mU5G9DM3aMt21VXWC2pu5HGh9NUDiSkQyPwvexyXktvaNmHVvYmxmdz5aiTUFAV5N7",
  "key1": "3yoEB8EGqUUbMH7rRQg9hvSHPj5MMCkP4QfJbzWLjxo5ZsHqiyfaEmvrjTPhxv4nhv2udi6JcaSA9JLtNazwUhMr",
  "key2": "Xkr6Ez1KXKygeN4gzJBx2rRjC9ep292uaHFP7eq2J9zg9XmvWgxA37xHpFSYjMGnRsCmjz2Yj6F3QW229v7j8NN",
  "key3": "32Fjx82wsr6BcwBS7WXpXGHFoXbKakdnsuAqTF6ZUn83cEeXGf9vgMiX7G1x8upTTiATdjpETWqhXqoSp8XmRRSU",
  "key4": "x4YNagkGGFXUJPjB61qwE5NKZwm5aKN43Q7vChKcM9XtC2L883bbuRFwEcLV7Jb4iz4DRdVkGwGxzfhUcDU5mJK",
  "key5": "4SBpN5uAaL1i2vuBZsiLJd9wvNTRtDNJub76E1qYnWFJL9PVDsDf8VxdtraQox7ftR8sJQKcjKKV7eksfnBDeoHp",
  "key6": "3BBLiSGfnP7Sc7r5aqcSJwUQJKkihD61T8HeC2MSqitH1gGMQKizQmsy5Y8nahNsh3qHPkkrM99XPJAwHarsbZii",
  "key7": "fDAfXnarBdWa89YMHco8nXNQmQfUhYCnUQ8DV3X5Lox1vRkXpp9fmFidE1KG3XMde5d2xUnGVmLaNVhK2azU7fm",
  "key8": "T6GzjAe7GEK8MeZvRdWoGsEfk6S4w4iFVhDbqnnVrTFy3gSPtRtcVLLvhXJQ4T1o7Kwj67hGpWfT1N2txgTqH5d",
  "key9": "2UnAj5JfqoqGkZcL6u64r5SNndLprc59JYHpgG1u5mReSS3Rsepp14tkSwLYB4sotfbQ4BDCvwt5FJ51Ja1Z2qo4",
  "key10": "5mif6kxtqCG2S9PZPV9oTDpEF4uj4oXrdh7JHDYF6BM8wrn78sv8gx2EcAPobrKXMcc9Wt9sPdUa1KMtFSYMmLKw",
  "key11": "3akMkZ3rB3ERLp4LVHYDLWRJCqhSw8YyEkEoxuQnHKkSqpTSw844FRh3yDXXnhBHyF7JrkFUjP4XHvi8Q8bRjDoY",
  "key12": "5bGiUE9bjptarFLjfrP3dbiHCqpAgLGA8aF1yh81fY36MdBmMQmcWQ99zQZCJV1uGbax8NSKnd2gW1eEhyNMi1bn",
  "key13": "3jFqTqAvCiLfGgbLuLHzfqSrz9Mgk5QQN5uNdDqoM8jkpmuKhv98UWZvMpaq7MbaH4ukzCTp9FGufGoMvynHuBiA",
  "key14": "f2XgmrUQGc4qS7jV38EFyEw3ZeZYNbJ98avBrRQSX7LhLpUdLFmWzDyJ5ezGRLiiT6Fvqh8jLw8GrLPdF3QQAYS",
  "key15": "fbtLqA5U51hSRZojgJuUBRcrJ2KFpsuej5gJLem9xk3uMoKC4yeXm4vKgQcw15xVgc8H2quoCaKnfUXXfmQeAvp",
  "key16": "4q7p59wenN1RDybm4yrbsJcukdERkaXwr4sNdbygf4kJb5ssyDFnn3DqN2SM52Z5LAYV33EaTyu8WTZaqKyvDGPd",
  "key17": "2xRyWtVSJd4GHdbBrtptpCaRi8ZwZkF2b1TfeQXbf1S6XcZSP8KWAKTYtzA5sS8G5CkiMH85A7Rx71KrwdfdPZJc",
  "key18": "3u78sBVgTna66MpbK2FQNKPKPDnF1bNfx556ETCrqKhFHnVfV4S4SReDDatVfVXnk5czPTgWh87UggotSKR4hcQS",
  "key19": "5VPCRSMNaqc1g8SYr39sKYcvUUAGWLvuX1i4bq2kTmxeG8vmP7hAQGqUhgSBa3e9EQm8NUUSGTN8YRSyR423EsMu",
  "key20": "NxqpWrkJpmPnN4LKP299Aai8YvBFvogevtwQ7tLzXpPJqhmqVyuNa4gNF5RJBuPtaj3EANbQHroKsp5etyvSPSD",
  "key21": "5PthJhqxZE2hEPQxeoUUSBjCqtfodBFGvUaDkteLfbPq7YY888bR6RKEVYoFoWT5CKHD4G1GgXpdUuat1Hi5oMLs",
  "key22": "2vY3F2j6kUVCH3nYEbb99BMzkjNcneQL2FmWH1YSCuZDdX1skZZVHDtvmuiztRnZALrvDasPxfZYS1cK3gpgbF95",
  "key23": "5YAaLVmy37WDTjdZdwX666ZEKcvzCw3XBm3LwcKQudHnGN7zjsMaaHs6pdtL9a5tjXYM9Xb1i5Ug9sRJYHrT4DNZ",
  "key24": "3Njk5LGcq5PccVREXz31mX7BXrm6tACtcTwxcJKt1BdqPrYLhQxByy54F4R5vxqekj8qaS3UXVMg5MTd7S3arbbW",
  "key25": "3abPS9cEc7urW495RQcivLihYy8roM6grHhBxaYSpyhGcQBmzFni2SBCqtrgT6q5wBD8B5gYDT2eRDFhcc9UK9S1",
  "key26": "4bki7vZsxF2SycbLyw8GS1kpZp1b5wCRNvL2eWDRXgcyThwqXZ6cw7HpUC559g5uQxprzxfNT5M4S3nAy4GrZFCH",
  "key27": "3PZS5HonbrYeLysMHhwi8zhLoKAgqvu4ppBXFs5sSZ1inm6sFZXW64Hw3BY15CRWhbontvToUJjdtkUsNbaCzFAq",
  "key28": "42JZNzTVMGyGQ2XZk7Cn73HGZ8VHGsGmJUZAwfVUzaw5ob7jMd8VYndEiHxj1JMsADUHRVm9x5GCc1RpaLsvgpQh",
  "key29": "Bo8D7DLfGd6f56MjxRotkDjqbfkhZxAMTbdk5xFiGy2XmjtwUg5Q9Ebpsv4aEmR2RUW7mkLswC3Nva44Sxcb8KP",
  "key30": "4bmCuwxqsCLXXy3xpG32v21zimT2uRKjD8CdsaVs5vNxCaiQohaD8dhcxs8nfV1MbQQCYgarZPAP7NypfTj2iCaf",
  "key31": "3SeY6yDuUdW3q87ZNVtiBrdrL3T16m5AUPYkwrK519iay7gp4QVe1mLdnAqWJMHJN4grTXKFxcKjfgUnG9mF3VJ2",
  "key32": "44FNTn4hwEFCc7huWWmrjF9QFwjbqvDa1DKkZWGVmCzB92XLkgBnhNYm5RUCQXh9gEbWhxZ4uq3Gf34ibCjRGp2K",
  "key33": "DGMxSX4qTVq3WvX57nkvxBqnejbdMiK6hZJVLbEyMinPcgsu8G1weESuVRgQjUDSbZMcj5wSf8839xdkDmJAKkv",
  "key34": "5SBXTJoi9MYRPDuFFnjWB32N51eE3nF4QR8qQzghgZfCPM21AzwNMxKHgcTnSSG5KUijXHRmXgxrNzRQvT8MFHfA"
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
