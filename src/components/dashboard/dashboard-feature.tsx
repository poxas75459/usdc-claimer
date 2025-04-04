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
    "5boa4UYoCs5fuXufWhT2b9b33AphWDkK1ruDFfQKdQ6DeoccQCvypbdbqyApNGZjmSiRMJYEmnGSsnWQ1KPniThy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpsgPiGnp58SEyx9bbH1BqjAJfYtibbczTqSVbeN9R4Xk6wkQ6Cf85Ej4oT7Ab3EuMdkmcM4dDy9RmX1YjegUm8",
  "key1": "L3iXo4qzCRS2Vv8rE9RyDD8vDZvB8nrJYViDZZms6R7RE37AK7rCVwwh9iNuoXRqdozng5AxHRerJ9f3RtZD9of",
  "key2": "2G5pDap24meLNuWcL4cg69gdEQj3Ea6RDcHwDTfZ5cmATTcZGZM5YHZP1rTSgNbRwnVvGiXqYuvXuK4hyYnTpWRq",
  "key3": "3MQHvfuYZB1cSb43GwyHHMY2AR3xbgkRyiiPN5kegMe9CuKgug3mCHMLatHrRY6y78a1S4KJKKVxAuXHL2CFL1sJ",
  "key4": "e65yVJYdmj63m7tWZ3Wf23Xwh9gTgqESKCBWNqJsikZKuZ4hMxYzqBBuh5BzJfzc4KtVQirDxj5jHMBYyucLfdW",
  "key5": "4nkhvsxaFzUtSiJnZwkyczr6Keuo8YkH6g7ZAvoKG2W4EBuJqsJ21pAi5fwMTFqSS7Ft3GNtdruDxHEvF3TX3A1Y",
  "key6": "2A9GwYom28GqvLzXtvyKMqk6bpJpAZEy2MkjPHMVSCQcC5qDN5CziFXZWMs6QUBsDuEDAakjpoFMzNomfeXAbETV",
  "key7": "5A8cH9PXjJ361An9T9TDCNZB7pBcFVHYgFXoRNKbhUBjUReHtK4qtCeuhfsBiaM8DvBAXWGVGrqqTW2JKGFu7oB5",
  "key8": "emMuss6w63iK6BQVV3ihLHSQtZpzUwj3n2oD3x3jCG44UjfyservbTA9vSHbFoRy6eoRPZiQZWxSafBSfkv1FHQ",
  "key9": "2tm8t9ChQ1yGshAejnCqLz32cVX5s3QDXxjx2BKVnai4c8J6798TpJD1HVzfBBXWTN1fqLqMxi4LsBLh9gzHg6b1",
  "key10": "Muiuood6ZqWthGViZ7jkY5YqMSdg6XCP7Rbz39LhAYmmhETUJuaxbnTDKhq7qT6rZgvAQ1SwkL1m6kcnLXnLRAu",
  "key11": "332kyuxKC2Gmp33rjpRWXdnyZrWS2PU24Tc3W19SeFn2sg2SJ54QgMqkQSLAqjT938tARPM5WZt5ME53Byje2k4i",
  "key12": "47MRw9rDp3xGeycoGDjRnZTf9w98ktwd1ZorkTE6PTph9k11ZY8gumod3sjHntZUmqg3cHvmBYBgseZ1yNhaE9k6",
  "key13": "23P31kE5zg3qZy7y2K4iX1267i5wDWZRS3B9BdpmJxjHBgShGva14Rskga7nfid31RkApXjhVvMBKNk4usx5bYJp",
  "key14": "pdUBYSemsx2bXah6sxco4PXMbHwQBvXeAojFB9eUkbBLnKt8GmP7AhXn7L9TzpqSSD7B3ZqwEPHUEsVbiubBv66",
  "key15": "2UecYXnrFMFStYyF81sXCPHsr7yNLiXn7tQXvKpscVb5FcRcgeEa2fQVQTM8akn5aFQxUViVS5Z9Pkwnw1cEKBD7",
  "key16": "4qL2q6V17iMjU814C1Qqp3cbD3Q9JNLAQdm4kUUkuALDar2vi6DAb7DRxKPFtshxaEfAxEnzjSsM3rKkBU9eYFLJ",
  "key17": "3Kud6vYbJ8facQLUqA6zuhXufe1bWkP1Dvsb1so7tJ5qUrkEAoHd7PWRPGL7BKDbkBRud4fQw1FzdC7dzqazayg9",
  "key18": "2MSKcnxDQLT8nqRi8fjkDqtNPTUtysyG4Cv11VWZCbVHQSPtN92Fa9trJMmWdQNW8wt7ZUijpQerQwvUxjyEitU8",
  "key19": "2qtqBdsDQW7Q6tebJGJuiQvrXpYyCpuJXftUPUZKf35KHneAPWVSgzeVtgAb7agBe3oYCaJnjADVFiWABzh4RHfi",
  "key20": "5iiRoeETcGS7ZgzoTZ5ZTeKc29RodbZxPtBGnjJyBMRT4f88pMe5GcxSgCLjmP1cA1K64jpVUJZWo7xav4eGHcd6",
  "key21": "9XJQFRz32LYqkt41eaznMidQpd34GzoMUaMH29xLu6CT5mEkQjGEfSsfmEyvc1GWYSTHpHmU15LHagn7PEfT5Lx",
  "key22": "4UeyQz39efyyixm5bpx5GafQCKLA99fnvDSpYfRcZLbFDsgqoDsgtgxnhhMkKGyvujAw6oT7wTfVSc19GdCLq1A6",
  "key23": "59WwimBBaNc9mQJMaoYYyucEPGW55ZFsGVHja2KXpGkoy3T4Ck84JYsGv94H6TLZZh3bwReHmTQn4VqaJ3yVXcsH",
  "key24": "KeL5CHJhw59y9tUYCzL62EZLeyDjop4tiB3JNkJADGEAR824aekyXtRFiBZLhgzt8mSKQmzi4oduMPyhCookUr9",
  "key25": "3VFumBr4TpEX99tRB4eusgPccmVDhCNCU3SZjpVLpxyPQmNEAQ4YhH7qEWz64rfS44rzRzvm7xb3FDNro3zKjU1S",
  "key26": "4BTLaZUVYx3xqjUrT58tCbwL6LDvCn9jVMTL5fQjnQ2qfdVzFH9ijAuYXP8Jd3Dq8cAqySYDnrH8ipCqA8rmJooH",
  "key27": "2EftARLENNLLx2pyTJNsZboJhHiJmPa7kyyq2KngLs47S6GnVZEsd5XDjyPykckeVqmJqm85sAdKZQoVJLiyGCyU",
  "key28": "2fFtgkoJVGZ2Tu5K6NrwtsRD9XuLMnsnS6o6atFWkjsqpfJ8XCnuKgjeJdsC7kCHC6rKMoHE4e3hyTV6P975Ciu4",
  "key29": "63ZPvXC1JEBy6S58BdvwBr8JNJWYJSoXh57pne2Gvx66hffFRUzvQNGu7cAA3BjDUXywKJytJMZbvzZP1iiaHk7H",
  "key30": "4hqhLRff2tuhVRsMarUEEY9JXPeugeiwDzNZYYAYMLuP9ZQn597LQJPsmmThUfQK3Q6u4bNG8AZ8aQqfAwUHccAR",
  "key31": "5rM5HX7a3p8ov8i3oVo6C96WiAYD5nykmAPkimW2yPpA6tGgMWaAJ1Hy4znj8QRarFxjWyNtq2d67C3yux1nKVJt",
  "key32": "u9jXMcnpyViL6zWsoaHGFwqM31Kk7QUinr4ugGvy5f3M1ZLtWJvDdcnKtcJbjETXRFLL3PgMRnFdNMv3ckMJJWg",
  "key33": "342TyRfmUyhCGCbyP8PgyaE2b2cTzU8pNtMcWnTyGy4XnReWT3wAM6ZF7eppf9Q9PhCvn67Jcry3VT5s62uQtWS",
  "key34": "tGy2gYroW8u2Pn9SLkMcmPpvkjuVvLTGUBjiK2LFBnYfWkD76rHR7mvGqk5UJF9ajTUfuW99cxE4Yj6wvkEXrA9",
  "key35": "Cgt5wY6K6fcHttkELiAxHi3sn6DRzsVzwrMDamPTfDMTnSiBV4qsZTe5dZHjgEDujeddWkSXWbiQCxoCdJy9K5V",
  "key36": "3LZKa3fkkqeTo7cbEkBhaxX3uxnrDPw1Aeg1nsEaYDS7CcnAAbjUU5MTA4mSi3JxsvLXZXU4Pin4sBRM8UYGqt4x",
  "key37": "2R4J9Y7fFcquRRVJ3naMJbfzSVjqqCozWpK94Tad99QVwmi5ET4SvmnvabeeBFxCSVLy21i5NZAWj5bSZhCBhxGr",
  "key38": "3WuS394VsEwW5sCzK7LvVboK1xGggB7WEJemXD4atg3pH4LkMKUnYTyyq9nTd93vYYzrpBQd9rwhbNVUZDjuy5SU",
  "key39": "4NDXNor1q6nDdaVGrKc73KCmR5ZxiamM1B8KVfMFM4kgRx2Kjbm6FKvfHNcae81WvZU2PeRNFKvQqArcB5vDzD73",
  "key40": "2K1uE9pmz8YmEM8cXaJTdJJEDfeEEVdRLDvZiahTH4WBRXsbocRCa8ja3e9UxV7uihraZZvYBRtM1sMALwAbJ1UQ",
  "key41": "gbG44Uj9KweKF2jPkjbQmwgNcA2Hs7uongRsyTxBbUq451DUjmpbbUvN7sFcgXnoqNbibKmPU1FZieA9a2zfJVz",
  "key42": "2K17bPFqxLma1RCyHh8H5eMQZ1JjhvzTuqDDWA5QuGneWrkEapedK92MRTdN45R1jPiE5FFFNqpS6F4XCjXvk7qz",
  "key43": "4wkCNdk76t9CDtrffyJHqy7XEPRuTPyCM4ibL8aoMZJmjQAjBz45rpW3MzCkWXQXZWNunm97UCsTuwbGMcmdFSaj",
  "key44": "4tH5B13fK4TRcogs7XpijBTiHkvXKXZPmtBJii9pb1AHVsbyhDeUKmoftSsTkqkDiTRuc9xt6ErFrVjUR6nrxZqV",
  "key45": "61tLQ8KE9Bqw5KJE7pAFNm8uaxuoL3UFHzTFH2MVMg9ptFyecvvLZGoKuUDXXkKdrmir9Kx3mNwgMGCfCPJdm1D1"
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
