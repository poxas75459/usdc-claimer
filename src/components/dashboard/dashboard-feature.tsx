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
    "2Q2WyyegtTXvAuTU75e4RxKsdA7QK4b45gqXztF35iNcNB3PZrkX7Cn9fg9wBWQy6bRtgCQsbHKqLSXXsm3hQdb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWa9u7TRqm7LbwtVEJCQx5U1nTWXMFGtpP35yb5hwaDaFmLG8F2ZymZUA3mA2t9NPWJHMYFYYue4sSbSKJcLhJ6",
  "key1": "3Y8Lb56PEHamZ8mC8pcuDHacrgZL3f8xG9o39oiywG9Jrnw8eVA9rU66jWr7a6vLThLtjBE2zgoYeVzL836G3cVV",
  "key2": "5H3okEu1FxHh7jXgsMigFDyCorDPW8xcom2CPiHwYjr8vp2hdPwEA2hiVkTJFtbZg8aJ6C3EwGdoJR1tFKP8jToC",
  "key3": "4iTx2sD8WYuj6r4te1XWwPRMFtUwFzPWVmomoykdPqRKjbH58ssJ94LwM6FebuEBRJT1uncGa9sUWVrrN7QLR21i",
  "key4": "5jnnSbqVNGg4L9JXfx4U6cgoZwhwLMZEEPQELcBgMWBVcFHURSsNKy3aygCBN6tVZEs8CBjiNLW7rtPCNQWGNSud",
  "key5": "5orMxVM4sFRK1VzebsGmv5jSupDsGUtShtS4wj3PPeThie3Qbky3dmT6wTHNaKDQrcRpjcpKMS3AHAVbwHP5rStR",
  "key6": "4hE5rcaZKMcN3UmBhJiaQikjcFQkY4GxLe53HSQ3xkpkS8m8d3VLKqMMv2p2pr3ZPYYvGXJNMDCvBa747cPLwJpn",
  "key7": "4JLgRb3cAkAFoj2iHn1EmuNwwGWrDgaN1pYBjVDMFPck37614CSUVqXGAYwHM2X13EFZzXUsHQaXKYr7MqADtu7T",
  "key8": "4R91SNNHUS45HMbMQUXZMqyH9zDV5is15wfRRp47SVRQYhNfHpb8RPPJsz9DosurS9Pv69JVudYEG1Z3v6wUhjXz",
  "key9": "cqJf5pq6R16jUc21SoZBw3XgCMr7Srw796mUjRqa7vQJjd6Lgi179pURCXS1i9ayBQr9SzffTFSRpggmS9xm3n1",
  "key10": "3KY9YMV4MFJKcbeCLFkoTcVzFvWFpRwsQBYSw8nWCRf474sz4KecCDRJyKEBzBHW6uWhmJK8aRGiQyPY7QAmDq4Q",
  "key11": "3jdS6eVh35cjjghucHVqAmZgU7P1kPEj79cUThUigMBChyozByokrjpbMJp2TY3fcCnBNZepSkgLy5tQhv8AsJ42",
  "key12": "7b33J2dRLRjmYiVL9Tzti72vhveNDKU9t4GJZorAGWqFfakvP9GcrkivquvrAM887VVrtRCgutnrszqzoyJHEx2",
  "key13": "5S3uAxYzotxyga8cH1PADnpJGZqEtrUNegQrribJsc73GHLyE3X9zY3Tb1oXBdNpQ3TLq128AitTKbxef22xrjWg",
  "key14": "5sb3gTVeZwSerf5tpRVE33weSG14TqPLGqCqHcgzdaMFHV5HWnLhRkEioi7cZfaMQmMJ34fhcXDokahnmrciMS1N",
  "key15": "3NaCpN3CPQVzcBFwpRapbByp3dy3rmrAAMSgucc3mN71eh9zP3ubhq81jafzkFt2qSf9QGwVa7DpwwEvqvUHSAmx",
  "key16": "3Wm3DPNDdXPvjtTLPL3WzAm9DQMJYRVwWMSY2o3uFN731MqUirC25m4LcwRseG9zRzo6bgxEeL5XZPYUPxriXBrB",
  "key17": "2ypf6kRr14D1EV92E2kehGeV9T4uveHMJ7DSRnEU33WELD1yoGaiCUeurbS6Qazpq2zmih4PL6wxq5MvVssr5yCy",
  "key18": "kGZQ2tSwrFk1pvcgt7KWSXGZ3XkTsNrLhNzHLouMhqoYgwieaxepGtAVyJfURMtTwKJHV7tUozrJmTtjTJUYJ3Z",
  "key19": "4w9DEVCAVJQodHGoVJ6WqTF794sEaa12Z1hvZJxTvAtfZWbRwBHnduLsuLrLfgBRUj7tmJgdhc15yK2wefgYsSGm",
  "key20": "Z7xerK6fut2xk6bm3BRWZtKxUw6MRHjcSpkocYk9PcRUS6JWWYF3TaXWGPTN9HYMDdmYeJMNEdfaKss2Y62Wn38",
  "key21": "2LWJ39i4uJoPHjRVLJXvZY93ZT6GrZdjQxRokQLYT7hyCxF8My7onSjp9txRt9CNq5cXx6RC8r6WHWyKsGf1MfTQ",
  "key22": "3YUEmWKtPwijZF47Gcf8jJ4yVK4o6M4pG9GotrbbgPt6ZNfCAnq1DRpmTFDMFzX4Qkmh5frbDafYk8Z9peKYg2ZX",
  "key23": "YykUaWdPGsNZ3YhR2mNULEsBw4J57d3pGR3ZmVhJNyKDFbf6CoLvFGzb5LAj4cNHVwqxob8fX7jZTsNGScTnVAE",
  "key24": "5xtDkJrvLCrFUccgKV1Ee27RybwCyCSM9jJzL3qkddYVWoLY9zSuEXAuSqAtvJ7woHghf5ZH4hmnZDiin3RzM2H1",
  "key25": "414U2N6Kq2Na9kPmbAo4se8yRXrBabZUFs5UproA1ucLRR84eaTNsCNQjPJDP1iTjf91iALazwK2o44QiSyjC2N4",
  "key26": "3vduaPwu1EgjLKSkWQuzMmfbwqUh1Wmdsf8DZvRfr175bLeUXCE6FTGrwsrTfkSyRyM6Gt4ZEQfFVPrVjKcAyDS8",
  "key27": "4nFDehyq9GwaCzmELt8qYZ1w9ddmfr4MrQrCmaJFJYVFaK2uCS2aoZzZdZ3bjSPNmGXFngwp3WQhWBac6bRvgZqs",
  "key28": "SkRFJDF3m6HCf58KmMtcBpGd4zqFJvJUTbVHWqZJBH1aRH4mEmf96zYU4mAqARufSykQLmVZJka6T12BgKnkVSv",
  "key29": "2xqB4s2hsH96V95mB2mWe2zxgNtYL1spUo3S3CPb33KkRJWo6ekrFMSmk8dvEKK4Ff75oMAaLqwpeWmBbJSF8oe7",
  "key30": "5sj87YmfqdmwY2NQNEpTNFmAzmpzgtwvAxXjbs7ggxESeWoCZHSkbx1U1t2RyJEZ8ih1Y2Pa7fCC4ekr1YQzDr42",
  "key31": "2TTEHwbjcfy4XFfvQBhjdFyVVmLYDRUxusAufCH8sGGWKvhrxn92S8XLVCAedvXFj5c3X1MLQMng5kXAkG4fhpUF",
  "key32": "5BuCudhJZZhUHDBpusBxP3vsMviVkLXGJKY61cRxk1BKtwBWXwXbW5bb4Uer72ty7KVSBvHcfd6fXouq1yyiGh9b",
  "key33": "4yY6KRdAAUUCKbQfkCgF1Qj7GPBGB9dPu2YDjJAw99V4n8jjYZ1uG57BEvth7GHGGWDyM9tAyDWJiUrzUqcetnd",
  "key34": "4RCQh6rPt7pGM1BWL3wFUZZXBUJGVMAqQE7v3Kvj9n7jgtYwp6gkN2z18drzjfUa3cBP9DDDw56Qj7EU75qSa4Kh",
  "key35": "6jQkoEWGmZxX2fkAxqWHfQp7i63AZSHiioXPfSbrTB3nb9xEvYJy7fQfLAhGUE5AYKm9sSW9FcFQVYH5QmWa7Wi",
  "key36": "3G25GK13fTDpoK4fybHyZe1Gpqt94isqwiwyMeUtE5YQDwjFcgLZAUSy4KiD2pmuDxmiPB9xMTHaiEuk32Wha1n3",
  "key37": "5EEXRGqiAiWUpY9pAHcNYSwmXnC9ToYJiz3BUjBABWMK5peJ5LD9srNQ2MjHQ4G1QuSU6ysS47m15jwFtXHdtQhD"
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
