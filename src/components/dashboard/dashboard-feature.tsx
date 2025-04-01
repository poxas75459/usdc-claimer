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
    "5A1AyBjvL4PM8BXyH72Kv38v6qYbe3EG6ESJE6DYWBYDvX19W1GyFFKfaRiZvX4Kh7HQG2281VnvTJNDoyUXRCvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23A5dLFnfGLN1kgGPpCs1Cg9fQi7Y2oCmCN22bDsG8SKjY1Q3YAQmha2ywf29u8GzwWYPH6FV3wm7DR7cvpeB8up",
  "key1": "3wdKxYL9wQcWbvGwaHdV4SRcmr1VMU1YBwwzSTH7ysjAAPjbD9ShFyecBzy9irTtjLPhYe2WpYYVBbsRuoc2kFF5",
  "key2": "3ZgxngArwVKrJxScvXLUs8T2bpumGjZ1yUwwJwAFj5z9ngBJaGi4kccEkKgUmmDj4jbpR62p3TRiSZPJ6ascUTfh",
  "key3": "2g7yYSLELiULywTUavWGFLxosEZn472PzAYpqJJNTvJnFpq5vx2gc1riKAkSabqATJk85y6LFgZrRc2R7NSxsn6T",
  "key4": "4Hym8ErchMNiCz1qjVosrPHg7kPo79CJkgC3EVAM4oWTrcFsUYtcC6Gyc1EGejfJgweUqL3Vf39bCbBAZxRZPm7b",
  "key5": "4vNsKDLq5aiGo8WPpEzLc4gJkEYQdtNyUNXiLjpjGZ2iJN984CNDuBLxAF9Kf438aKqtQ4pttMVsCEqVj2vKkDtv",
  "key6": "5TZY1LBhJRjGPVoCAta3f7G4zhwaGShEdLpiPhb4Kjjq8koxpEU4jEwXx7Xdrdb2Rd3sZiwg8SqEp3jgpDiEmu57",
  "key7": "4noZXG4DEoUBcuE1fQiXoujp2FcycjtV8pZZtRAMZfZ15TshAwKCuYSrmY9kz9HBEa55hSeNCbRTPoUsSrRwzNmU",
  "key8": "4Wq9QGW53sZB5n7ocYvEdmpjQVt66HAVx17FVwPRLUd4ZJVTKWA5wqBMYwbpEb3oR4Niz9sUaFB3rRVXvn4VwGkG",
  "key9": "2ZEUZUE4gN7LnGxkiv5FScmVaQVwrRevAT7DLtJiTJErLjVqFW7EKLZeqG4Dn6kWPK82exRGKQkk7NGLxgxRo6N5",
  "key10": "5FQpGLe19jtmRqyVxLbLt4pqKg1AW8R329rUdmgePFRVzWKG59ASGeyhwAEQmkaAu6nuakqiMrfqqNRQv1mrToFi",
  "key11": "5KPi16Vuo9mEY7kXT2vx5inS6p2CR9ebuH2LuZX1YJqG4ibJ9QxEysexzinPBATw9SXRy4Qj5tUirbbcYLXfXpSP",
  "key12": "3e15dNcjz7cu6GsuNkJKct81dqNJKMvsui9xR1ju9xnbwDChWjV9vsehtehRZiWmPBS4KgHXko8D4USsuQidN9Mv",
  "key13": "4ivepmZHF1ZLK63yV2ecV6QCJygxtYKwfHRq4rCiYrujY6CUXCLbRo5ipA7Mk8sGNr2cfJBzfF5WwyUTLsBcmdam",
  "key14": "2jRQ329x7zwkrEoC4XJbj3fWSMCkoZ9mcLNZ3mndXKrqrvxu4J6SuDA2oQah3E9FNNVQx43p6XjMFPvEDEsYn1iQ",
  "key15": "3U71E8eWC3QkGMW43EKtoJPEuhWAKNrsKQio8Cw6rNfr9S8eXchvmQ1jm5gitcMJ943j4RBeutcvef1BaLVw3JTL",
  "key16": "5mKLbc4jFcTyeR3y72jLg1HJhirsETsU31CQxnzh4DaoBw6WS5DiuSMqcxWiWPCJ567bda6roGZwtwrHEkA9PDWT",
  "key17": "52UCoYmw5mvjpyQEQtxy6GFvyczZumN5xfDt5nqYxdMA4DSSUyaQQtBhYwxW7vQiKkTf3Xf7Ym5uuf68czUEtXG5",
  "key18": "3GmdXiyEDXcCciNxgvcSd9ue5qkciwqSNLw8jq47dEJkYrQ84WfPkbQ3mKLRnVry8ofSZMGdoNdnarvbp9dWKdYf",
  "key19": "2zNDSVuneKqxFZB9BhWdw1TcJhUEy48cBGR3bDrB5kyvF7zABXUvgXHwHrW7mjoch6gUqbpxySmSmZoKM4MsogJM",
  "key20": "3vpdp8oAUW2F5LLugWbtuKGzRN6t5FctZRuViLEzjsxfUdkG1tHKsXi5xWPk59jmWTSsaonGyyeconm4d4N7G1Uz",
  "key21": "qD1hG88AYjsTRtNWc2MYPfSmNtVGbR2ZypaqbayTL3PXReuJqmdx3nm3cwGGVdBKKu2z9o3H1hBtDWgFsouGwdp",
  "key22": "3fvR3GtEqd81Zus8koFJQAnYDwkhN1AK7b9KaHCETSCQbWsTuR4tAkc7spS9xFYpcFnPKCM1HNTbSnntkc5pWU7J",
  "key23": "3UML4brPUguHr2J6vjK1jGgKkzVTahy53vnsUdQ9w8Ybt1aZZbn7RgZyLBrdwiyr751DTtP7i7qNrmmk9D8PwuRk",
  "key24": "Hwp2F8NunSBQiQ3BZV9WfwguNhiVwnv4GSEtMMXrX1HmfFd4F2X6eXve2RFpujAx3ACUGBxxGVMBfhELMVGkRhS",
  "key25": "3zkVTNCTnBvMFoZ5maYv7WfbqbQKjZuiaDZELFmR7oJkELsgWnSiPYeXdXfBuKXsjtneJq5jMggvMT34VxF9Bn4j",
  "key26": "5rj7VzpEvSwmpqaoV8a8RiHi9bt5ZZh1rvvXiVDddSP3ZuYLY52H6gy8SVLtdTuBwpzzBzBRGPWWZa7Fp4Q15iD8",
  "key27": "54HEoS9fFCsdh89GmBrUtpQo5t7BB6sZu97ir9GsZy7YAbDMb41wpzKZmhaN9RAiYoAub8gi3B14VPjdb9xQcT1B",
  "key28": "eoK3HaAa8LyjX2oacGg9zmA6uWJoytHsR725cDZDnv7VFrXwL287HB25cCZoiGtWPFyKDkgzxngppQ4srwt8Z9W",
  "key29": "5QhDpJmMjZvVuSgVZ3pcdaW8xvhQbNEV5rdcHdteLfgGUEpVJz6HXoSf8kBWj3w2DrG4w2wADqhuZvNgs2YFfP9Y",
  "key30": "4K4zp9HtStPtKCEMWU6DQiEo2fardmNWmiiBwvm2FmZrFnNh2eJXggd8ZoFWKpC3suzDdy6ELMNJujj2n85YV87R",
  "key31": "3rDWNp7yeE8Utn7yL3iycJwW3WVYAnuShgdDNQtmCkzFXggUPBYAoyauJ9875Qmd2PGwDqnDrZWMbcUpj7yCfAkm",
  "key32": "4W8ovEJyRN3RqCcXzyCjCufDuHLZfZKpx53Ah42QGmHuXQNfLTJAXUnci5svsDLb8CkAJZucBAfJePfjgsT6UnWY",
  "key33": "4krNLhwuhn5DpiVf1rbGXxLdNgDTYHYGudoZxdgefAqRN26PBZSK82gG824q5fZ8xzetsfQsVQckFhWZUkMT8jMy",
  "key34": "3aqjXCZPfjE11DNutUF77qYbHmXqEJS6r9WxQayGmsk4qsjJB5aPvrxvgbP1qyWv5gHHZ11pxpFjzf41MC6P2nS9",
  "key35": "3vt7TSjzb1hsA48L1xsJ5uZZWjF31eNvoCCKSnhzsTkA81QV7nZvCzEbQ7CuXkDRQuVDi2DktGqhqMtcjAChKSpT",
  "key36": "2P6hHvz5SWnDmUSKuuiaFrAdZWjEZjZSU28AttjnFeXBBMc4PWLtUAUfez1VMwf1XpJN2NyWVVf4nnfmUdmFeQCZ",
  "key37": "2udCxMBCDNLBaLhWjUK2gsMzBtZuscFmKuWrByQ7bAxDwLdWkGq9jFkSH68f1R1Pdxe3C8D3nGsS7vyK4i2mtTsD",
  "key38": "3vhuu8TnS4UKWPXK8vL9tTutwoYAd2K4Rsaei6HbrtfQZM3U3X6sbu8kAtMdPJSvCTbEzdLuDLvphJ5zsdc6YUqM",
  "key39": "5ZhNgGcGmTqM7fnuaZBDmbatrqxZRSBKyHE6E4HDvytkhDKe6qPzZPHwEU7YU4hb4WxngCSYQ1YGhCZektsQJRjo",
  "key40": "2pnf8UYD9ZK9o1nuuwLEdx9YGGqXwZKd47mc2m5zLSr1XvpRAuNQ97rw739APfRgykJRYCRN13tNK9mRWCnFfYE8",
  "key41": "5roKJnieMcqf22nT3TsTzDbP9oauwuM1fkS1UWgxuDcCS7UroG7c1HpRt1UMwvraE2FU6g53Uz3pbEwMdjH7SU4T",
  "key42": "svw2AxZAJkBLb4LmgdRDm9V2eSiMKYFqPajrG3eu8TJ52gpSYr86r9Roj1bfTD7HyDqfDh1bWyYo7NoVZUjwtQS",
  "key43": "2tr2TJ3WpzrDq82cHzaErVnyfez4acVEFCzy9RcKb3pYwPDBY3imfaPn4r1qriePzEEYYhGhbzk2RWnU6naRyVu",
  "key44": "43FJ2QParXBY1wpRfSJpKrQBfdZhwy4XrpYDkbqPxx3oiR6J6nizq4Vucj4baWTWHVCdVULjCBjPQv1VDdVv8Qy1",
  "key45": "3G2hkuEqqqSCAv4yw3UE6GMGf4yH9Ag1y4eoDDnV4YH3jM36FXJLr1mTVZsnmnmyw9ZFWUPzAUzV29RzwroKcsSa",
  "key46": "4PPtdxDZwv32mN8RwmFVGgjcTnu7ACnWTQMiyzA4RRGgdGnuqdswcF3QaKXJU24X7bvGnCETTNZGTaorgvsNt6is",
  "key47": "gWZ3gKCtsRLq7jc7XCFvukCH6XcAERwovSyRotgG5oqdTJF3GkVaEW3XjGVBuy5mnYfttwUbWkczwDCnEzdULQq"
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
