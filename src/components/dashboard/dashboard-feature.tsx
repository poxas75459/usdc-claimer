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
    "3gSEmxbS8wkF3hxmZEMqXPQcTcCNrv8AGiXtozkXoRtr4EJDXwQnpLJiP8nQg7EzFvAo6aP5iPSDyzqwQ1dqTkbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjG7qp4jn2DMzhpHdt2C6qnbWDpMaRZGDVtGetJH3ytEoYyYV1PTDLxYfmuq7EtdYM3JwT7TUeq3LUrNxfn9CtQ",
  "key1": "3exWWnhkJa3hJuodGTMCTQvSvhsJH6etRZQzSG8gagSARHcHV8fy7WJAKckp1y2SwjUYDEkcaBSWZe6Q9FmHLK23",
  "key2": "3TexzEAuKQYD7JFWJGKuF1QL6tcK6J6NMhp1jgZbiYWHJRDLLEBHWm5Xe1KX95RHj5mKrT2zHDNq6WcauTg2QBFm",
  "key3": "5TjzV68siNBgGQ6EkFu1zeW7SZmkKGanpDxiaVvP5nLXQTq3oVPF2d2SiFQ8gGn4uVSjzJja1FgtRPywxzSiMS2N",
  "key4": "2t71rdQLziDKfpBcUpHpesCvcT9bJR4v3HoTgapMvfPWvw5nKAa2HaLvBYtHvsdvng2F16BHkCVnpZJTmnGj8NnL",
  "key5": "5dUjUZ2kFrTuiui5tinEevPea6S7QaJMW8FhkTbmNyjxFN6j5qHUUjKMNRNQpP3kwW49Lftp3dCJAmx4Kn3N5Cvp",
  "key6": "3JvrgAaFzXv45ShdxD9JVogRULFXtZXPj9yiaJityEWYjYEtk6ZcoHHxwCT4u8VBXZQWuHdShU8Zi3eT38Zb6rX8",
  "key7": "2sNt5xXXxBz5aCkPEam7cdn47LRGyCPRjya53bm5ko76K7rHUfY4cw1GbGUg3s9P3fKhcmJFkxYM2dx2f3VT9E7n",
  "key8": "eSy1BuqRrn7vztjWDZLkXFTLs9KvBLEpmfGDsy5qzHT4JXRbRH663pwcZdP21XNcTqXFHvYpuzT19Y38mEs6tti",
  "key9": "3VX4rBBaugaLnKJBqM8e2apsDeWhJLJd3utEgfdvHNN8CTVo15TQ2ZtT5LCxiHuHqcPx9K7cWMy8ZvrXbgqwPTF6",
  "key10": "5pYiszroS3GzH1snKpb66MWqx5j3U4Jyek7bXownNX2bV9weBLmH6uoai2kQ3Yuwnsr4T69qMVGf2oXuA7uAMCPe",
  "key11": "54D3xTWjshCebQwcMZ1ALEsW3tP4BAyU7yLDAgbdyfyzKM5ACnLzYVdDmTS4LGXhmt4VqeycyanMGzUu661E2NKA",
  "key12": "23bN66yc4PHygSu3bpnCMbwdKnXmVdAid2jxffUHYtmaQhDGsx2Qkz582bK2nmiPBxxqWn5HvGSmcyTez6SXmjE7",
  "key13": "58gGFKWBAWtKVa1NGZy6xCTEmXusSqg4VZ4HQymQnw58YuDmWzbdLaFYTTR8XzgjFnoAq717g9pDGmDx34nXNvpk",
  "key14": "2AZastRAZdP2DeKqvWNhGZ5TmSbLdAYqRWcCPnGWLBTNpjb4biBVYrCqhNKzszmzWr7FffzfZaF8TdqDGR7r2Y6i",
  "key15": "45uQBrRxCtwHSvrdeVQmopSVH53pc25gXYRthSNSUNrvPEnPGwnx9tri21obYfA7LEBfL3KLcbZb8GrcNZ7jmk4C",
  "key16": "5SN231nBogJZLeiAnyzPWXTfjEcqP696zhtmf1SiTGMpfWe93xQsspU129HH6MRrvWpzKqGUpuwwmAtzRRCCpnGy",
  "key17": "2PgACaxVuCX9gqWj6fmBMKEgQtpg2PdbfjC6SvMasa9MNNkztHuPqBp3hMMa4CnT7QgSG7sVyMW4QLd66dj3jeAV",
  "key18": "2KDkHXUg7dHDTRzzvZ8m5wMfsvZRGJMSmDgbV765cCbfXwKzw9w48a1TdKFwcgZpaS6ag6uJ2bjejzZZxc6gCQFZ",
  "key19": "4bGsDctkns39G7rGvmd9ATCw6rMDuz6RsjeyuWMigxMbDJjPWyNASR79yAUvyMdGKK76pzP2X2jf51kpek1tFxtA",
  "key20": "5RgYqBPiULYi9H8UpXvBcd11TKoQ1TUG8ZruGTNJshvgn8VeoPmvKS9JBnaurwpzPSfLCqqhur2ZbxSHuujdVoKC",
  "key21": "4cNeeoMeqbEv7CaQCQ31frBSDxMw6LNhjtyJyS3mFfhXTrDRGc7ywHNGb7gtKWvRHNkfKeg7nh4XBK4usEZsoLKU",
  "key22": "2S5C8M7EtNp5eNFZRn7Bc2UvdUJEjCXv2imjbHjeQXZDo5Z9vAR7mXiVDQTD2knTr6gqrq25auUwNHwTdTCmqcx8",
  "key23": "2hLNc3QGmHk1YTNa648eofYLHRH4BQL3uaqtWM1vy1fRCYUoiN3vg2E46p5Kq5RrUF65KgVo4sfePeUvS4yhgPMw",
  "key24": "5vo3fWmyGwzY83yUmPErJo52CjKZozvXbhcz9WXfB5XowoRcLwomBk71cMeRoCKetRt9mJncrp9TUeWbt6gfH9zj",
  "key25": "3x9Qj31i5y9jan7NeTUk6dhZPkSVLLNQBirN3fwpHMBE1CUotmotiJG7gWyC63b9rMvx694Aeo9ZHqeMXQ9RC5SR",
  "key26": "4pJmfYk8TsD1L88qYZRmhEEDRP8MXxZkvts5ed4o4NcZheEpWUyhAH4ySBZKBj4UkTdbrLnHSMjM3YxxLPs1Sh3m",
  "key27": "43qAhAefKVp8YesZjZMB8fRR94Fishnb4mx9SGn6yFLyRVwruxDrt1xFgecmJ83exvWtuJQp9zz2jAqPvmeY9B9E",
  "key28": "5yrsresYMokSHkgZd2EQ5vxWCHqbYekEhrY2FQGnHhVwjgNo3XqiT8FuaJ5L2ZsfYRfj2eyP1g61GhmymfrBbWEs",
  "key29": "5CeT8gNffeZPK3cp9mvJToAETEDVaMbWUkq3t6Cptng7uM9NE97oXH9EqgzcMGXJfCiP59LLZn7TV7hcZkLze5jh",
  "key30": "5fLCgcQoyftNDbXHcVZ74MsDG9SC1KphupPj3SpzfkBy5UWn45JrTBkacieEoyv53wvduzNWGsT4Hiu2rHUFvJVP",
  "key31": "5Seucb5z8hBhUursDEpR9ndS2Aw2dT2YsMDRoSZotY4GMhuLzHk9ocJKW3TaoWnN1tAQeKKYzTV6xJqYdgZJdnJD",
  "key32": "9EBWRBvj4qzwDNC4jfFfdxfbpbsRSPRDHhZmN6Soir9pcCv8DHbuYf7qo6ZGuY4E1DmUit876jLXa3WdXddanHX",
  "key33": "51X8RBxDNB5HwmcVNbx5HddSKUsTrivqZrUEdsFQPAKhC9XyhDDuMc41YapdRzCuLrnrja2Yt9pkHp1nfa13t7RC",
  "key34": "2gyF1VgqiNRa4fV86mRsRGWe1DcNBxRz44w72RPyt8QjBxVVEjH6Mu45yyseuki6cQ81DkBoHC4jwFXTQrbQ6pnN",
  "key35": "4LCDzzVpGmAPKTzXJ46ZD9kuEUoegChHpCEfBxNZPZvjXXchrUWzaMUE5iE75Ld33P9LghnrX87aaPjxfQ8XaR39",
  "key36": "qvLawbGmBF39QmRDEe9NUPrD4p68eKhW28idfBzVenGaoV8BiZiZaFKxUg1MadKdHzirNETFqpd3268oKEtU8xb",
  "key37": "4HZVmp2BQvbm98FQB4ig1CC1J883Z6H38rdKKDcrQ2KxAsuuQRVaPAJW2tFKsSvEVV6Vhhd2fwoRYZJTBbkNoYyM",
  "key38": "4BxZtnJQkNngj9pK6zMqgJxXT8osMGdshSDCENpoF74NtgTJGHtVuHqgVNgYDMEo8efi86ZXbmxj4kMxnLyG8LjL",
  "key39": "XeP6PJ53fotpyBFJr1zHkmCevmvT63GR1HgYF9LGGzRZCnEAP3f8agAfMudcqoe1q6Tk6ZUmU1eFhKLc54NtkDr",
  "key40": "4yNKpmqN63TmXKJgapEemJAhMgPe5Ec6eJeRyoiwRSqZmvHvPe6E1KB5qChjed1VaRsgubFY1RsDD7hzhzifk1Fj",
  "key41": "5BkdbfZedCAvTtPj8DZwEhzMeM2KFsjVootynJXaYpa6kxKvMDGuEYMSovwwgqgNcqR3f4L1Vrn2gn7zZA7wedLS",
  "key42": "2z6FCvzCmDCnkes4SVjbgtdGDHEzEba4SdGmbKRBv8kuWH6ycyaWTQTaUQtxzXzerfuMRTq3QVS4CbusBT91iZXV",
  "key43": "64fHefUGL8ZAihKPZLtiv7k89uXhyMA5yFUGgAgD6yrbpZWgDwbXqjWNNSXF7u411wCEoLxJxNuRZHGBTdxMwqwJ",
  "key44": "4c6UzCHfupFxKre7sE8ksxab9MhTiFkoAM8EJKBzPhzvG2yrPQQdZArMnMVkTZhM5yjdm2HckbEHxKfWkLuxiCAn",
  "key45": "4mCapv2dogSKKXfCSLTHZB81bQjB3ude6UdQzB6qDiA1JJydnUPs1fsk6XtVc3oUEUy129x2k4UkS4i8jfvq2oRS"
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
