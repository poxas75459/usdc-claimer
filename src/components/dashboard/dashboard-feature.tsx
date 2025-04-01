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
    "add9aTckxv6tpxnnAVXPcFvLDnQcPz1tatuEv6Nd8Yfi9h4vWkpNY1rz1JQisvSBDmhaGYwRomnvog7knQFYtna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272EwJ6uz6G73zQjjhi1ijB17Ywx2NMC9krpYL8m8WnCxzBQt27NGPEJJTnEnR3PyovTA1X446peFAspsBsZHkFF",
  "key1": "2rSM8Cs9NHNTGyJEw2vPi94VpVkS6GdLCBc5jdbaPNQaqJbQtjGAbya5GQEKq8muCi3GgxysQNAaYwSbrLHQV4St",
  "key2": "1RnvQFr89w1HiUXB7efVWajzHxTW1XoDF9cP4rertXg1qVTQVU5Aa8eHFaT5CL6bv6QkJoe18FLi7eoJBNDD2pL",
  "key3": "56rxqzwGm54yvoP2kTuBDKCuhnTnMTEHg82xRexNowrfpHiFqdAkz6k6BqbBmcd7VxiUfR4TzgmNJNA6w5bALrFm",
  "key4": "5LufxjQ41Wwttftsj5EhiRMYgWPVviVgRHMZTUKyZdGFQCJ2wpf6soSWmymwBLyj4quYFWbWvuiVQcZjHAqsZvpi",
  "key5": "3HTVvoFinzf26tB6oT3nGv1dDKEydqpi9U9t2eU7PjdigDSn6DsdMvyZi5tD4fBHnVEY22FcozAH1pEcyLf1B5yg",
  "key6": "5sXS7DqNF946nvphMrMn7Jg4UjWszcrQtp58B2SwaJSEsxcELih8puCfguEeDogDsAuoVBtaGowD1EbhGuuHStUk",
  "key7": "aLcTJR8ZaVxVXwHZDZ1XdRhfZSfWZnWt8rgashG5VgGMizLhaea11LRq67mkT2Z4JdU2B3wXDYcDubu7e8BtBgi",
  "key8": "rG28Q34ePnVovyCEGvbVEokCDckJdBBooHZfsU6eiPCozBmY9nnFY4beSXEMJXY2QZR3sk2Etp7Ymptbv3ecdJG",
  "key9": "5mAiVeH8GSGSzEbG6joPMrrcQno6KBwisbfu5NpqP5hPUZcPeTtW55qum5vNc8mZDTqRxbFg9dD2RwaDVVDR1z3m",
  "key10": "3f2vGdhn2Y1GRZbcJK1u9WHGS8c1Th4qRCvnGyfcXPvSUbjAh9jR4rVy48iGYYM4K41Baj3ypLPs3uBqiPoVV79w",
  "key11": "kM2rhFd3nQkGJqhxMVg8xhWxLVVyQwYzTx2tsCKDuETfn6EtSzJd34insSgSZRdUSBEohcK1qKzTnbt9cycrZsc",
  "key12": "5Ahki6bUfcvLYhnJyQYxbFGM13xPdSuTuz1hihNgXAakG2GH5MiLRS3mHFSSGxVh58NwFygBCRLygtjqTunxkA8k",
  "key13": "5EPdRTeu8sc24dgKhxX2PpajqnDwcuHMiCJSyVbm88vH22xGtsFda7UdDoZBxB8M4syvFrhRfM8j1jYQhQA9gjrc",
  "key14": "4CK3JE2gAjsN4CHj8YgsSmnyWGtEeakJznB5SGNoBXKzTptNDdKEn1rJ8nmfUo4z8ibXroX3Wqi8qQ1wjvtv9k1R",
  "key15": "33n8xNpk8fsK2ew8dEaJuV9YD56xNzyh5Z4zBRzxxi7jrMuNw19hrrYAmgctvyvya4NRu2dQdrFaZBPGPFm8B76B",
  "key16": "fVEF4hX7MW8sfLNT63LUpYNvFrhcZcxd6N3xEYNMmcK5u115Lt39whiRiSWLm9dTBnZuW6MCiYFq8xHAAm2wc7P",
  "key17": "4w3TTaX2Uu7hSL3oamT8DYS81kiQgYHwW7gnepJpDQA9zQGW1iqvPa4Gh8J1rPHzHpT4CYarx9udY3cuA4WFty9h",
  "key18": "2o9Kyc3RLBLXqWbkeNZwcYgq4yUs8RoiLbAxgPWsanNSy4pXZ1BKJzbsNtiWA85HY3PcL6n3swQ8etJmWfnwS6kL",
  "key19": "4EZPTAjjz2pdpaXehtbLtjaj7xqT92RmvZrQUUyihDCrQHovPHj2Lq9eZK3xD6sdUhc5MNHDbCCu4z7FrZBxzrd8",
  "key20": "3NkSEDW5vrZ4cDNsenaSSuk6eyuT8GPyuYnu1dcxkvAcXwWBwHwttbbqbuDj27CgtpQGyyZnmCMdrgFc2pDasqkY",
  "key21": "b94SDavWaQzWLn55F2NuvG5YwozxcPUnHpAWLKCENFQ1nFMPAGifcbbUHYmKcHuJkj1NtDpVMpQ7rA91zqDyVaQ",
  "key22": "4mf1kYFJutnvxhv9ZJvVm3ciZCGeBfvrQgRZmqdkbK1HxRXhworrUd7quMw6AWG2PiUzo5g2bQWQMwaoo3kdt3N5",
  "key23": "4UQWU5edEW6trc8Fji8dLqHGbGyw9sqFHGfKy6x8NUh59PvB1gmpV9j2LNDjMUVgStaLDnxhxbGQcGRhpYmbrAQS",
  "key24": "3HF3KNBKYJqzYHLLk3h2o94Bb7j3y7C14ExuqhVKw4znYqGv6a8p9HWHDEGDxTHphWvD7fLZaPftku9rEJPcoCFZ",
  "key25": "4LMhy7wBxPwMRE4WEx3E6g6egv3eCryxRkcDYg9KRp5L8wumqAnSokZ5K1i8ntzRPW3eKko9MQ7WJ98XoQBr3Nw5",
  "key26": "sKe5PNYKxanga6XS4M8xERxAV3cwhiJduAJwBMqaRfhPCceENVVHBYKBRMmsL22rzf2WYgxi6CXUThuSDxh7Mon",
  "key27": "iepMJBk4rWTJ9AX5GtRRqcK8yrcdout2p68b2YHrPqjoedqRMQSfkp7yZT5ZvJL9AGenm6ffz7CK5yJaxTGG2X2",
  "key28": "3sCuGfc9SWgumDXWnaCrPJ1aSHG7GuKA5GgCMc13wq49aTZZ2QxHMNHKtmStvhuBiy1jnxtRFpqKf2vjpM95xaQE",
  "key29": "2Dtg4ksBNTRGq8YWjLQUXXAbcn9MT7UGbhWP7fU64HtP5ocmjDuFpMr1LYb1ojKZUrriYLWj2vcYkqPi6Zqzyohi",
  "key30": "3HMbftDQJtTDLRnvTtDWZfkK7oZeD1AgosPWpce3Nm6UX5YimsNMkK7ATdbN8MjpzGa6cthETKqxhqe9UtaaKzNR",
  "key31": "2nigyafVm5EJSud4QYagzXYnLmMqwWKb8HJpW4NwjW2ZcdGBUWzjsrspGc59dtQMvjfkUqS8AwRt6KfZhrxSxSzg",
  "key32": "2csHKiizoyxo4fRE1zFBSMjEyC4ub9XkXnygbRANA4LG7d18wfZgauJgdGb6wyX4dsznepNFozAviLpjALV4JEoP",
  "key33": "3fwLk6RzHiF96YteUEmDvr9CTEjJRAC3uDTr8QgYNxqCdauXbY76Hsp8chvxTQfAbQUPmpmg8AGaf9vwf8QmMrc7",
  "key34": "4nc1rAuaaGD8BqBNAQ2KfwmbmYJNh4ciWRJMkPGmi9ybYZxyGxSJgwHUoLfjJ1Np6E2dGVxLSeGRHBKcUzr7U3TU",
  "key35": "5YPcXFZ4rLNLHczFVfvYFZsYKnVSUpnkigaC6HPYUCgs85W2X7UbpcQzf7P4gAgfWaUH2QZLf1f5YCo3oXhTpt93",
  "key36": "2eXcqd3N6Xanatpt4NNJ9s2ikcgKkFonfzYDAgn5VWsKM8XjXuYkGMMivXevExetxa81Zd8jj6gn25LawYwRKNpi",
  "key37": "3rGmddQDv4ZTGomi6gctVDLCNfwVLFTo4URQqXcwUSeeFy6hYbuRRPNXCL7tg25mJJ4fv6gv9Lzzq9TAzDZ2dXdR",
  "key38": "4TdokmnAez455tX2VjkiiY6e9oynEPxD81wdW5uSk3TvaEneAyFZqF4DsCNSH2Z3CJRWg2vF6whGSKhb1vKaWZ9p",
  "key39": "5HGcCqa4r8RKwoQDG7FRUogU6YHbD5jfzPUHb2EkheoAPJKj24ud72bTZYcdKBe83DsXpPUMw74EduYtsTmUanDF",
  "key40": "2p38Y9nq9kkJV4Mwr3t5bPZZAPwPntTM1x1t6y6ymUoGgkRwYfMednCsLw1rW6oYJcFJR2UfNGtcKSnjkzgQHSjc",
  "key41": "2HZHvqtJkY8qYvUKWQArZyfqmcxJSx8pJX6i1vNu2boiaZM4zGqnZhCJe9HueDFuAUXiQbw14ZjBMW1aQ9Wuz4do",
  "key42": "5SZcighQ2XM4bH62ccCGwnXscD7XRUXNa4kQvPPdYEf4SrUP6tZbVHoZd3V8MxChKy5SfzhLVQhsgvfhxyttjCF2",
  "key43": "4UWWWrBcupcKkd6HJvt5D8KbQq7JiXxNNftrvtKBmBEpotkc1PSJ8pVuDp6BfjYLWVXt31RWVXk4i7d3xG6VgHRv",
  "key44": "5srbaDay3A1W3JT9wLqHrtuB6NZkq8Y7146x1Q8j1g5L5TotWTjBEjn78xzyNheYTHkxLbWK9oqTdaDfKwGPh2B8"
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
