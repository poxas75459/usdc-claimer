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
    "NNvjx5WLdQBgSV3hfoNAQx4pv5ypySroGLTXWhDw3MZJRbQswxYNpXTyQDwrDynUorMnspWpYsyJPqWArjPt5mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agxkVq1fLyyCNYjx4H8yAdouFfK5rid6U6PowrLSMtNPxaimgEmGZ5neyjBsp2eeuQtgVMPeF6b231iW2FUaQwZ",
  "key1": "2eai3KPNoQAVqKe594JxDgEdiFT5Sm7tKiQHuGoUFkqK1twutXsMaqy5q3iiWbjcAmjYSzvB4kJCcTNpRSduDCMw",
  "key2": "oPrdDT9oiUNVMfVqyN2bq92YjYgTCtJ8NzpWqJtNu3C759NAozsRtMZ5Cae3P669KzuqJghtAup9dhuHbNpJF5M",
  "key3": "3T9DHS6XiFm7Nvks5RjwnnaLrcz6DXHiTdAQryZxpaNAMQtyqUGNtZo5y31EaHmnsey6B9F19QcKYrvHeKfadJDb",
  "key4": "GGRndBQM1UyyXSJndsbZs8GbjYMBjt8nSFXCSJQ7ureL6Weq8jBWqvwbZ3ukc98yhmQTqJtEvjkdYjo9bR7jyUj",
  "key5": "2ii5ujgUrJqXquXfzk4F9uVEV4W9xbdKMSsLWLqc18f97rJdWecjFF96gQHUEZDHsHeT41ndbtTjCw5voLKdFXdt",
  "key6": "YqZR8SR5qPLy4YapUSkJ8VmMQF3XAYaKSGajo3n8pRcbFhr3v5sRRefJA7AATvuJdyqB3oZmsFsjG9FhfZZ5tsm",
  "key7": "5WxaqL13Af9fhm2izaqZPZ56UaGj4MuAr9GdM6wdmdaCYr11h4KZtCGVMu8bfVz1phFQuYtUUCiwen6xZA6RVCzc",
  "key8": "5KNhnijDCtd2iB7kTtJVHfEPSLJkMe1dRAovXzVCSfuLksJuUKkPGb4BToCcuoGvZ1doWdYK8hT4JyjGY3udkNue",
  "key9": "4YGFQL8pjrwa8jj5VXbHgSBZo3eb5Cb9S7B7VjZmdz3NTCvwRwTzVqdpVTDbcQqDY2JFJ1XoWVgBbd781RMrWKzM",
  "key10": "57sFj6fotVfrrnQdzpmveatdwErabtXqvB3FeVohyKy3NzhHLExku1JaCxQDNRebGP29sk6TJ42uEBLrGMeFThHt",
  "key11": "2EGsjdewyCHg61qNNuTStayrer7VmL5Lujc6pL6i1YJHkJReKxdC3mCwCJuJKqHgcPHK4XnekL94iMYXiBAUn5f4",
  "key12": "5TVxrgWxpo7bayBk6jKHDp8UAXnGny8Z4hnoeWYvqW25DVSirW7TMegiS7gXfqdx6LZyKqxq8pRWPvmyyofAPHi4",
  "key13": "bQ2LVPJKfBMj9Qkrwc2DBfg7YBj2hTfPz3BziUCN8VD5ZnK4rvoVs9Nmzxyvs8Z46NSzmqWhq5265DJUuuh774j",
  "key14": "4LtrBCvv2d3fybT5LawcAsaHxy9YWgKhsdWmFo7unLr19mknHC5eZ1vyEGRMjLTaJhu9osAV8SXJ2zrHHqzk8ivS",
  "key15": "5orP2TNFRssnXyiQjuyzJkHXubZsrpMQ3PVtHxQnJbeKsZigyUsCe7WgKABbzC68K1ksKykxYrHKRBaBwzxJmV8",
  "key16": "5roeZkPMLniSDDugSr69sJRHpwnzbWCf2xs6x9eVUSWsixpDKvPRRZG56iZyvb48AvooMTcTwKQM8BJ2WYiT5Yw4",
  "key17": "5d4BV2PTnHAP3KHQA2N3gsL4DoKrcPNTy2u6iX3BSpQSTHEKo1nzeBBDj5PEnSbaQHHHAwZzvuYdZ5aS1XLT4RXE",
  "key18": "2KkA1qocLSa8LJimaRWRxy7T9YpH7CDTUqB35kr6jq6Rhc7KXXXvcw4AcmxQDQY2wijkFM5qUofxQEu4RZ5yN3qk",
  "key19": "8mAtVpmBc2nxvmrNZZzHruLPEwKNoVdP94ZzpFCA3HZD221UrNKDwiPjwQ1P6MkwNCYm1W4nuZVXLuSd5DkaJmG",
  "key20": "3SDm5aceGw5fwRpT4JzA7NjVnurpJuLPd3yDdXvyHyqJAof3Ex1mVaJ2fWYF8v1XgvzQbhj39FLds2rdA7DRP283",
  "key21": "5uAqaeiGqZ9sUQuLzMPPaEFEp4iK62dCWRL3cgLhWzPGAZVKARvtNgPfNVY3qHb7kDCwHhCcdqgitihrQ7aCiQTS",
  "key22": "4vqBPqKhZMqRxMmK5S79p1DUGJQMtRR7fJXwNkGnZi1SgJcSAfKsK2zKVhThrnPoRkGRXxw3S2XPajbKRBpuy9dy",
  "key23": "358BhqYwfZ6yWuqyAzn5cCqV4EbJ1YGewHqGwJWtJj3duhHsL8iwrgLQcvaZhukQxKN6NrrNS5WsZbDeyCmyZZGu",
  "key24": "nsQaeC7eznaQeqY41vYwHPSTm8XESVGGUMPgr5rQWyZqmYYb7HCAVkc9V8HtW95sBweipPvgbMUhtNSsQDxvfM8",
  "key25": "58U2EQfPw2diH3boG2SV3h7cVLb4ZFm5kvbkcnSn8dJQBwsYSyu3JHgAWBc9EVaqXT5QtTEj7QAaX4q5iDNRGCrz",
  "key26": "WLtpCvQcWy8TEg1qELDxzDzuqxujasrcGgunXDQBiMwGJr3hd5nbAmxPzSZ3ch9rVijCJADTwC2um3BBZsQxiRt",
  "key27": "3JJtHLuDzHUk7nUwrbM4dPx179niFB4pYLcmStbsnhMBW2vK8qskLWPQwpSmc9jMk8ajDWVDESncwdeyCUkVzGbZ",
  "key28": "1uQfL3YnkhVnM7N5ZF6JXbX86t2NHmycTXTTz4YDAaxBBUVPqxECdqUBsJmTiFfKRs6Fi3M5FWBdvBnTZidggC9",
  "key29": "grAA5Tf66grLg4N4hUXo3amYvKQqtcfhhqm3TvRr3ogLwWaEtreviYNN77Bm3iLMteM68xRbyoNtmg6FAMgcAK8",
  "key30": "2krbJVEeQ9hi88ELYTD3FikNUwmqifTcUWYLC7qHEeRCJwmttMMWf2TwxQJKJYvabiPAtDy3ownSqkSxZxhc8UDX",
  "key31": "4XnRCwHV5L89Xzxbx9mh2stv74zN6KKfLW54dBxQ8jGpXq5SASSAMA51K3vSvqhT3yWhAwDvThHzNqcHja8KPN9H",
  "key32": "GZYKtaJ7UmWw5QmRkJAvfeupWMqhDyPbyLQ1Sc9gMLoAAiBk8mMPVz3TbKYcqqq6aaWQG6UzFLNLWvhQTQnw6A4",
  "key33": "3ozhV3YNd1VLk6XeY4QDz47FxmpBnXUT6xU9UjZf8xYCYoM6akz1451nk1tiFkCHLW2LQ3YXR5xu5SmZX3fUeb1B",
  "key34": "414enuZ7CqcvykiWpSnSZUc7xNAnVU27hSsa4LeHBVkN7bw4ugetgwLKgWqZvh8jJcpiemcx8w54MLWHRj3npnsV"
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
