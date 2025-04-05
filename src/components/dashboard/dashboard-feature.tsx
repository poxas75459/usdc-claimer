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
    "2oYGeRSw3PhNK5upMb5vvLNzUXo5aYk5CdMbBLAaaKaLq9o1R8h5ymwGKuFxcwxW6az5GvPUQASdPWzB1UrEdjaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4vnxkRtSTKB3gHdEkvJfjnvXAJ1VDwzYG8hxcuTWvoVUTAxQrJz5DiBWJkKNST2uzo6vDopAEH6kcZ8isSsx4e",
  "key1": "2kWgvYxL9oNnpF85QzBSvbp4nJAc2s3DUHTaoaGZPJkFJWxRembGjUpMS4cxyVcCh26cpyKQYD1oZR78G3x24mnj",
  "key2": "4G8yhkgWfp1p5jyuQth8iRzdcW6PbNVoKWMJLkRqJpweJunx1WRMvXvPr5G92DJua8tKx8ntXhk1md2cnScHPj8c",
  "key3": "5WK2Jxwd6Ez4CL2wmXwWco6Q3NLmAjg4LeWvgSKvQz6YW2Hs6AsPdLXD3caqvAf4GsBg8TUpobXiBL6JFidpeMKM",
  "key4": "4HgjvDXnBff9UVXPvJAV3FhXSdivBsuLQ9539BSoXzLgC2qRQzFjLSszQofMa1Ru4ZFAb17NfSyPArrrxqTQ3a5A",
  "key5": "5nQvtu8zSMjqGrnEYHkLp946Tw5A7yTT39br14YG5cxMD3pmNisFa7pbbRN36UdUTW2hrd84jmobaaCtDLpn97LA",
  "key6": "24um2S6PshJTniVpiifZD7JwaANpb45a76CUFuepTr6uU5kJ18tPKUiduJdGj3pBeUW9pMnytpuAKRDGec2VYRkd",
  "key7": "3weEJRrPy7jjusg6mrijDykJUbyMTBPJkBjBuKb2rvRpVKJpBYNCHRshP7yztsJDq6YzBme8stTNgBqFRsYfaTwA",
  "key8": "4Bvx74wYkk2rdkF6khbUCTN6hmcCkAchqs9PirWe9Y4NbQ9roTzjXfdFusxSm3cR2AAMsiyUnwnxWZWr9nEjYuY3",
  "key9": "5k6akjyoeWZ8GZa5c69iZRh8wRNqPt9vN2jqK6NhLLJ9on2P6zwNkXn1vctaazvZmzhGYiHtbsVtbNxe8hZbqUKM",
  "key10": "4BnJ5H8j5r2ZgstMHe91QiYkgVBoGFU9DBCn29eygUva1gkBqZzqw7pmaqTuVaUJNJupGY8VZfSCwJXT7XESNQRC",
  "key11": "2Rpv2KoKN6YKAePNqPL4dGnS1q4JmL6qCM3NfYBe1pfEsoJMdvPJeQpUBr4YwLckmMQVu6k4jr26hhGoY9xJyTq7",
  "key12": "4Xg5NvZFk2z94nBHD7RrvvBLDWcEnmm6JL3wSaMzmS6TDpSCkmsDpCidfYmzNQp5PzExcCYiwPHXBYNq1rPX2o2N",
  "key13": "f2jjnNpfmvxnSh2exf7gYX8BEzgkNoajpYq3pKxGaBzRGq7cBVcve9TGi3cu915ufwFMYJ2TREJB8DoCKyV9BPc",
  "key14": "3qxjpBxMcBpVvzvaLf6RHiCP8msC794QmsDkqfjyYtgTmY663CJ6mZF8YDehUnAJ2zL6vBz4wJrxc7YdUTKDBhZH",
  "key15": "5vEKgZyGEuARQ1FKzSbP5dHpk6kbV7JmqpQBVv5ANUeC5ob8u8U9sRHn5udLNaFL8mk7MWrHKHrqKh8QJB2iWaKP",
  "key16": "3xZRS7ta6LLDYLCzFKanHChYjWZCLpMoDMzBtQcJ6dkUtw6jHTqa9SHyrRHneagdrzg3y7MLvVo7MQF2XRcHRgzM",
  "key17": "5ZMTJeBKVgBpgKoumxquv8UywaCyGV2YyEgSTynPdG7YjtPR8XRT7Ad4UR5oKaDToWnViCxZtGW4JY31uVJ4RizL",
  "key18": "VngZ5jxjA5qiyecYKHfTZdMWyzvB9aQHZtpkmeWLg3GM5akuSM5NNzzmVkKSJHJcPuUZQVqH6Je4XnhHdNvkeU9",
  "key19": "4CDY28Y47uTevQsjFoiMgPEBBwhcJvV9HBSNhbGjsPa35evKHLFp6ymaukK63kwQGCPPJ8VYhKaeBBQ14S6LJTzM",
  "key20": "rTvsz2J6gf4nqu8zvsGACo3gDEoQf9PCTjFfNp2oKg4mQMiHSZhvVrRXKuZu6H8mqFdHvUTWeBgny4jAwCpPVVZ",
  "key21": "2U9xXgRMD29QXmDJPCTT68kVogpGxjSwU31mMXfwJT6Uiz4EsA4VNXt6iJpVnqNVEeFgtqH6DowaxERG4BFeJipH",
  "key22": "zuKjEinFqCYv5XjtC8yTKQZL4pqy3oLfToiv96mKXyLzA6G7xQY8tzas3tw2Sm7LEZxZuv7AyUGmHV3RbukUZy3",
  "key23": "4WjYjwNv4KRsesvqkt2gzpycEMMEvfaAEyxCV12yWoHYVwUnrKoQNxpJWRnTCfPEejtdfEbAWpVWx6vE6rHDUCCu",
  "key24": "3ibQKkCFLBHLXHaXSo7zE8CnmNYbjdfiCWKsrwZp9gEixHLW3qmo3Vue2ark6gjJpAGL26mEgCFNUS1v7FJnRJQ4",
  "key25": "2jZpwio7dKbPmoMzgT5fu4zzU25LXihpac9VDy34HB353AxLdrGTXMbxwWeCChSpXWGSKiQehpEN2ULQCqT3ruxs",
  "key26": "MowNFApQdDsc6p3Ad61GnMVLr6E1mZTVYXQFnZRCoqk3WjJRPrDijBVi8EA8qA8gycbLSUtom43JN6GLp9nKWg2",
  "key27": "26YFHY7YL8cUqYgipUymFgKqbnPNrooRx9egFrXbQC5Qshestdcvwbb2rvyfAg4ipk6f8kEY34PV94o11KkrGrX9",
  "key28": "4hpttQnEJbwEuQ8eUsFrpDP8y598fxfwe5mA9V7d2H3KBvteo2FSumEudfQAEvmmZiYK9k9ECUnAqTD4q3TNKTBa",
  "key29": "2r31a8Czbw85e532F6P85ti3CkjvHWxVPEzfYhUCC4FchQLKGHwZV992Usw7LUq1shs3qDyRcqjA4e4j3gDB71rB",
  "key30": "3eojugcsKhbnk1U5pTLynCaprZzBV8UvoTYQhvE5iHMwonScfsa8EyafJdAL1Jd2VeiJ1eVnXQvkBoYFHRjsSnWY",
  "key31": "hNWz9YikQ4vsxGwBozKkRRA4cjpUDMVB2PK96hi7eBSCjp2fgFbtRVuL5H2igvypkK7DQfVYzPy4s25scjjVDnm",
  "key32": "3TbnBkJ4iuAwcM989jH1qTq67VsmWE1DcaJvZHqxxiberhCrcpCv2XFZqMyh53dUDbmwYVVJRpBhbBG3VM4WznCL",
  "key33": "48qHfAi51s4DnPmkpmLqYNVfuGiXUAnDvijDhbruZEsLRHckiXTS17pdaUgqSfU5VdJRcft5duS9jE4X4RZmFU7D",
  "key34": "S29JaJSDYHbrK5fc2yGsC9zgYkSiect6NQvwk9ypMGXZDyingU8APQqwaERUuoaK6Sd4WoHPBED9vEwXi62D4ec",
  "key35": "5XXGbznvQSwTGxqYYzRQei4z8UYm8tBh9z139co7AQVu1YceF9G8WMcTtEephkysaauicoeJQ1JW4bqYpvgZsAFN",
  "key36": "2VYijsjPwNNvLnxNYWde2AoTWLMdgzTHCy8m9HiKcUV9xtDUEeeDShoeFU5EYbsMc2AU4DQ3R682N3Xd5Q3EFMLf",
  "key37": "6oD7qSXX5X1oA5BeHPcYxZJkX1yXUQZEmAbdhric9zvc1B1fdihQtqCU1wPGmXFX8VqpKfguA7YpXgVjBuaR3ot",
  "key38": "2umnGk3zUK4XadESNzLy5P5tttwUUujSWAQF2v3nG73s9srcteRz9x9tS6UBBeWLy5scg39t1wzDmo5npX1zzjGf",
  "key39": "5S8CmMfzwgDrBwv4j3dkDkL91e7ym8uTPEP8zoPp5mxhr3BQwSDLnyiB5WmhmVHa5fbG2PgYJ3LFnhrzJXXPqYzE",
  "key40": "2gBQqjwQtweDFNrWpg1nWr3ck2q58aKJa2ifEFG6WcVQ1S8tu65hQsKpUjp86VoZELJYETzwyXDVBEg8pADa8bqc",
  "key41": "2zCJMtTe2i6ooc44apDnrj1B5BDTwiEKa3obyGXZ1W3ZN55C9JCnA8BLuzJMQ6DjgQMtev4rXDnLhq8REoJurs2i",
  "key42": "3n7ea8sPF2Yku7aPBka4o5fLPWohRBgBs2UrgWtNwSsxVy8DBgmso747ZiH7nAquqrjDcSfUhzufTez8PNXWASB2",
  "key43": "56tvA2fo3QktLnhXLHidi4p6wQVSxZXgrehkn1HwoPd1i9a6xEuT1Ed7zBHmWBwZBHtMjhxdVZoki795vfhLcQbK"
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
