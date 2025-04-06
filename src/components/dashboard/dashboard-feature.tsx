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
    "2TfiKHNwYXrcBkp6bmMS5im4naK9hGzHErLHmGbnhochAi25bpbQKjh8nuQ38KLLKE6pLP6PQ5yAKfQ1qNi77ARd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26QoNfBP1wqbSACo32RJiCC2sAgyVApE7uAx7PcDrFNnSRgLMrKbQ5V3UhWGXfKAkznSk12mBDkgcR1YHT4pnbqd",
  "key1": "3CnzNgqBgJiNMJzduXtP88fbj6yqtttsDiDrduLEDZqSJ3cYJCYSQ6di9p345deWjAiWMhYbMFwKgVc9beN2FiwB",
  "key2": "2RgxMMfeUvjZZdmiBSXgXxfuSbmFBAu9uAPeeknwrihLEc2NZLj6W8wNRFQibcFHRmXxaym2QbrZxhDcoN7veLL7",
  "key3": "4jMfHUU3R9XyokiXjSFH6nu9HEcqHMxRHedEkq9cjysWUeXg9279Sk6cHHxFWfBdFzoYrMo5JhhhSCya3edKFX31",
  "key4": "RLHPYj7SjmhDR6fpL4vJhFc6HmD6WqhgV8GXPJJZpGdxjm8dfJSXX4Cee79RqFkxzg5GqEX1gnAF7tmRzMBwRVk",
  "key5": "6y7bVFipYYwX9LsqWqjPEcpsP4FQnt5tLjBcBkSW5KiKapNvpwSnosJ66LLVHjBSYFPisKxbpFe2xntrvoWB19S",
  "key6": "MYwtMfmq2aJp84BBg81ErqsMuWSwVNxQmtsuk6QXxiZeozATS6pAmSonpVe6Uud7oT2kzeK5TCju6uxNcK8nKKX",
  "key7": "53J5KwYAvw28CsmdV6T63KNKmPf1C2f1BCtjM72hVd1KAj65EAPnKCN79QXVYbeEEA1UaWBKWTzHdnatz2Mvban4",
  "key8": "2jVAu6KGg7uXmRx1uv128kPRTBfFNbhezxjJzMKjtJurkYe7TR5cdG4oChbFrx9Jf5X3VsHdQpxVouBGZ8xwb36f",
  "key9": "2GPKTjrJJFbYHH3EMHnX1BELCfZo6vDGSn6sfMkbEY2tj152PgSMXApWNdYBJZDu9ATjFEnybe33PJopV6AhqTuk",
  "key10": "2BWtXULxWM66c67Bqp1bzg1NbVY46Fs128SHDvYt4ksEKj5z89tPXMEyfUGCcD7HoMsRWoq3UXiBaHVz7RXPqgaG",
  "key11": "2vDXNGcDguitV2rxBoVNmRKCd81WQPYHEJCw6cedungekPAEPNn7FDaGX1vaHU1KoqqpnAVFBCzL6n3yrzaHJRL9",
  "key12": "2ypRhcGmhVeEU1HguADAz31jinR6aNJgc1txNoGNaGbkKJTLXptWkXLL1jNV9R98u2ENCzDAUvts6Qjzge9ri5MQ",
  "key13": "3iJhcwV2ZVuGpm1E5BNEUfvV8guj2Z1brsLMG2TPmD6MX7vb7oQ9gLoWYxiNyon1vX6YwAeZXdF1CfA6NFhY4Nh9",
  "key14": "MooLF1pUMAZSW7ud6SsjwpQ3DCMsKAHNs7dHefyMaHipAfGM9Ci9gmRo1H9XtsLUxqYft5wZUpLw9tccAEZRgB5",
  "key15": "4sbSHWtrRHjuQPYEAXivLswFVPQNMAb4faaBsk6amN6gMPK38FGadnA4c8PA6GXsJb9LsCy5xV3wckHpq5gsX3Md",
  "key16": "3LxmoQfNNjtzmrbrr5tAdNinwrcJNsyWEq3eQ9t3DRQWZNJJnkutQ349FSVKCawZeuCcoFUDXLG3WVbCMhANXWTt",
  "key17": "2Yo58VumtayHrvLEU7ed5vJFQnjEQ7mNTdTQFbskrsRYX3pqpSTZfESg5KyWo75R91fgiXPBRMJ7S4v4AkNECZgR",
  "key18": "5MEoKrRSnnkPykxDqjsHWEZKZXpCCtu58nUpzvueiwT9euu8mMMRgbtRGcfB3mzQLQUpWRc5oW28ogutmiEbrXSZ",
  "key19": "5tf63WLatNJ1pzMPocVczXinu5N4PHwzkDH3h2esczjG8wYyrRDnwMqJa8HPc8AZc7i7YX1i5THuReLK4n3MBoSd",
  "key20": "3KA3Atgcdbyw3v2r4GbL6V6eiNfaUnLvw8tcpiwteczNoPYZeuyB9zS4U8naQUmh2uCVeUf1CApjQV6npw9wpZWP",
  "key21": "4GaQQhfp4syAUh8NDer9uhSrgzLd6yQa7BDjkQaWbqdZBimh7A4qA86ggYbAD1vau4m2bozrkGWriWXL7ENjczxM",
  "key22": "4rGFD92Y4TquTd3qEcM96NYh4kYwv3Vb9k6gJyJKsk9UCNp5eptJe2dipx5pFLzVNsiKzm5rLaNSjJojCnsDsVMd",
  "key23": "5zjX6ukaYS7g1QHVjSVYKR57QfWQtGqdxSJSHrKgdCnyCLTiDXQzCR39bB77CZNFVGLY89ZVzM2v86Q8ZAaiS6US",
  "key24": "3KHDuS7np4Rq7AWShpm2GU1YqteD3tFSJwG4LPjAPxZBtQG58bXy45ZU6Bfsa4iLewUqwSxpeYuWv9uYWWLV5wr",
  "key25": "2G1dgzssRTW9SyRUxZ7VFBXg4fK8GzYvXJ6cErAQGRaQqNfbSuK7vukDLX5N6rCGZtEjWQ2339szDuVwXJTMKHfb",
  "key26": "25kZsSXJeZF7uB3fhj4dC9s9CMgKUM2rrmXc7kmgHQo7RftPghCXhZwNnqFdDZQh5bR3fXPzedjn4xzomi4Cbb6s",
  "key27": "6PYAJfsAy3rJ2EVuRf45C8etqWgHVm5nBLcStFdCQwq7cRDKtHph5F99VXsXT7Nhq6r4utw9NMpvJGuhEjMD21p",
  "key28": "3Xg9riozjM2BJcLvWYHt35TtFYNhRB8YFcdfg56zfbHzybSWfWHUYaAqfhQZTHeS4mxjaVQn5hyPbVhdpu8CcS4j",
  "key29": "2q9FUYREKUP3WhpWQmQ6u1WPndKijXkje2nUCBMexbazbSQzqnELQeMsP8XEQdRfD5ySWjTFbva2igoehNkXSBvk",
  "key30": "5tZ6DwooAcfyLkNwK8P1ojw9wj43bxFEYpGPzMSWdRs74rLq33RSJdLfGB9okNLFch6YDjfyZGiABH1R4hFojpwg",
  "key31": "36Kr1Uz3iuUKsE7fggEGnjoweHvD3wT4RAjADJ3YuX79XF4LsWyybBicr5Kh51WUZ8xfV8aS6Tdi4vFWrKVFXvNy",
  "key32": "DfMKZNmXnKJeDdoasvnbf4ud8s3v4WFQY5MmeWSYShURTfBF2tmBEihrbrMfEJgZ2v1aXrqeuZouhLx2tDJWnMA",
  "key33": "4LeexNdB5beasv31PmndA277HgDCHRKgMnugaNEDkknqK1pbSFxosXonN6LSVmrsKchGr81BkqhfLBNc7SXKjrzY",
  "key34": "3A3Q5j2TdWuWQr1DNMYfHnvp2g94SHZnPYyfTX4yPtoKAxtm4nKJGFxwET6fnswKCULivNuYiuBHrjpSVG3LhAdb",
  "key35": "tkCPWyjpjqcMNZkAc1HtffAfBWcX4m3hJ4ziemUkG7B1taJFFdGhM8PGtt4giSqx398hgDsTbrowfn1B7gg8A1W",
  "key36": "49dSmoSpJhcdoJJVe2FJc54gyH94akRrii5ELYhah874nbjHUTuRtTkU4r21bgmrcyTVixYYpdoacciyCE32Bhg4",
  "key37": "2P7XEMHYxPWivobcRhWZTzmebKLw47pHkiS9gbFuAd6omfyvDbJTBN65akiTcfwoA6i3YXcUnZ5YVAm4iFWpY9JX",
  "key38": "5WfJrMhNpJYuUUDDTdVv3PmZhQaem1L7e93W1za47RKs86sAXhYRiZRDDq8s1pUehNcQX61WXQcPc3GUBYbnFbP8",
  "key39": "hoqtrCUozkSukpGoMBLoRJH6aFVD6hyRPGiCPNt4TGnTVWifYFYMzQM8ZpTzGLW3ZwtmeN5sB2CEv2mYVjFTbCY",
  "key40": "35PhcwAAjGxK6ndF2KRsYGneZgo3ZuL6MEbSfVP7v5CAPT753MBCWVAHqXLTspnd3VDRBP7dLvz9Wz83PfqPz3xr"
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
