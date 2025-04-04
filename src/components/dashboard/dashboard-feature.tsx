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
    "5PqxEniFxrPeLTerTbBveyFb3b77fUzdU6umNTe98Tu4Y6jqFT9gaHRbtMoiMKSw1KpeMmt9Gq6YYGUVbNqg57Xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47G6XPG8TCtisF1w17xKEKDUE16DDbegGBV9MUDeAQRbJmG4CNjnat8JMejujAuLtZirDoUVoBKKW7fnWHb98SZh",
  "key1": "CnygRGnXmCHE5MV9Bi8QgA12HVjyR5gkCxJpoWzLN5cDiCKmWaEhBzfi7bzkWb1Zqhooq8Zgmm1DFkuBxijSJJJ",
  "key2": "26MFfpkskCWJfsC14za7SSP2m4brwM5C7LWJm8ajzmfL9CdUftsrsni88QwzQRBKneyVt7VkBRuC1hdMzhnGPp7j",
  "key3": "5bf5WaBEJ9MGKRT8h5kjLHyVcjgQTecojs9TnLWJJUHwdJegTkVadSjRrh6AG2F5Sn5CwNuncqCMmnP9wHxCM4uX",
  "key4": "FpFhgj58roNE4HEU3oxa9e8Z1hMWBWQpWdHfj4Ficeaz21exXPSQLwDbfNs9UqS84iPYGMNVNdW6pwVdXetoPB9",
  "key5": "5FXDuG1JSDoYiy7U23fi3aGAzGyroonSB6VnEC5iMbqwp3kZDnSEaj9dpFpRiE8cVvytyMS2LxQnLGuJ5C1enTJ6",
  "key6": "4VyiRJukvpGZTVE7SXCCovyHQmA4aZDc2yKuW2mK54KJDoKouJQ9G8L3eUgnR9LGyVXmcFJrqtvecUK2am5eyRWz",
  "key7": "2tDyksWe24FKHELuGWCNYU9UUDARM2p8fHii478iQFHzGzJrQMF55Y9eXnivt1mkT7UGNKiQF2CpNpkP7Q8Xweir",
  "key8": "G9GrKuQXtWURLKwzRwHZ6Pu9MhLhq5s8rJ9AT7HnxUMJLQ5B9XmQ42HEwKeb7MRq3cEW6Zsmmb97rKAZQNhAQ2N",
  "key9": "DHXmffSfzNrKfkKAsTHXPNmkSfgbf7J7eLR44WLou3dyMG84QG3W1UmmmaQVMMfMyfhmfjUpaykjqQMznDKxEiD",
  "key10": "2BHHvzcLrrcdW2UUhiLfpuqCtcho7tFVkjXZTNc6r2mc6astkwc2edGJKZS971Dr1Ee5rUrDK113fr8mcE87o6Gj",
  "key11": "YCCWGoHE77FNzoXavuxFcWRmSZA8kKuZ2junLYhkJzkkhe9UzMEgfbCPA4QjXdctxEYLgDxSqL6UQTG7aQ9nJBB",
  "key12": "41Yh29ZG4Aqkfk86aZHP2eDfW5WC46LUhKHFUBoQ1rJxck8VG19YmUYdcvVM5J5BxWBzDg7rXYH3VYPmRwN9gFCn",
  "key13": "396y1HHSbikVV5Tpm5jm9aC8pRAxktectn6Bc1RUGJWECK568iWeAwA9tscokFyHZGcHad1bTWtfPEerS23SyQnF",
  "key14": "3vsFFPmSK7kZ97enjgJK5aBVLUfUJ6xUn13hkhSpYkhDjmnqB4RPps8QPMnpzzMCfePC3MGiqRMhUnxUjzP3uyKn",
  "key15": "33VUoVmSPr78QWiY5SesxCxjqXDokmZXZDuAEu1Ra1VfRtsFdV7kG5dLLJ2xcAYTsaopM8eE3w1DD2cdvHvyE2z",
  "key16": "2YaHLb9fdcNGJf1C7tCk3nbjsbJ5czLiqerhST7mmnDjqoer976bDokTX2PwYGBRMJrcB54ipJMaY6xPG4qmnf3G",
  "key17": "2C4vsLy4UKArHVkxgDT8p6mevK5JD967uYCFfx97MG5JkaonbRfwsenDhHi9cJy9RKpUgjGfFPhKpQkDq5wNSsm5",
  "key18": "63Di1oWCqNNLhAUULVPXT7JS779XoWKtXjoHaozehBSBM5Wk7Jsx3yWCVArXJJhjjBW1MW6pkrAQWxZiHk3cvGBQ",
  "key19": "26CanY1yW5rDt2yoSUYgd4ZnKHtNaczJsWzziEbck3c74ya9MPucmmzciHDZ8jpwg1rv35QmEZRK8ZQAV7bMhsNY",
  "key20": "3GSyWo5b7QMXk9niDMfYvJrRBbri19HC3UKaWaAGsJGtpoD5C5rwDvf2AyqVGpocPX35B39oRbBVJoMMwbqCbpZ4",
  "key21": "53AuqzFdzppeMYAHca17hcw2Kw2X4yAqcU8poXjtMosodid2EstaNq97cgc5WEv6jLboBfdJTej2Y89KBZ8ysvoH",
  "key22": "5DrPenL5hN9fiJwepyUcXzScuzZS3Z4QrZaQU6v7TDDLyvGeV9jVLCsTsTUEZuNxT5YXDHx49XtWL7R5FtAmWjET",
  "key23": "4ixD4NhJkDkitWYxu8pJqwRsvZfnxD3Rz6Xthk43GGt83Pg6o79i5RbbVpXMyB1nq9v6wmzAwyaVjSR97aBuYu21",
  "key24": "3qHVmwdEU51rxPFeJqBU69WnJb3zYK1vMW964NFZmvrNhXeJZYibihqieJ4hF6bqtWTLQuxDvKv9y6Q6CtyEe6R8",
  "key25": "2xPvhLvgf5wNZq1hT7vWP1bXJxjowCDZoRvwmPnsrdTHDEDpBJLf8eyG71YBtXSHNusnxryAXCWyRNBoQ1f4YwsU"
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
