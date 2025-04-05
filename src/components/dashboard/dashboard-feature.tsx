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
    "3vFQ6PjbggozGmyzZFi2xmn9nTjxY5ovaAJqWGVTDmxR9KQE7xdFjLZc4QTr2KkxTGcGqLzQ8foC4qxR5PfqerrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jin7bv9ny5S797ZkqX4pjMxcvqZtc9L7ukNQbDSQWHSPzkxgGufN1f7ywFVh785BUHgVub2KYct6r48f74FiHu4",
  "key1": "45S7QaajMSXxniEiLXnNmB9D8hXB3jGFJSw1QTdn3BYVZzuqNpCcfZQdfLb7CVRLRAsUJurYJFfvFBtPyBU82Sso",
  "key2": "8MMniPjkM4UeEGJXhzkABoThMEWQPNUGP8ggifrE7uhXKGvCLXV6iwr757gsx5sQugpmAW1pjH6fuwPnGEN2tmW",
  "key3": "4UKypbU5VH67x8gNSu29P7feborthYE2ao34gdNX1YCkS27KJu1fE8FLVLHkj2h1Tminjj4atshR4Br6u35yqQ1",
  "key4": "2YMkRD6eJCguqFTFoSvoCjFJqibbpF7jXkB3FNty4EQwvR48UYtjeJ7u5Mw8QBUyjZa7VMEYrRNmGZNJmHALowL6",
  "key5": "2fgi4ntjAK2RUQjET2pUFS5XSjgF5P3gZctMtbYHyweTUCmBPzmZUWMbZ4LeReiGFiF2enAHqFPq9SBDwrSNH8fq",
  "key6": "nq8PQhQzANwkPSm4BreWAXiX7jzn6LiYms2PJKYT8CadNQzadEvR5yYeg4YgQAwkuymEVdSffQNCNVzjT2XPcNw",
  "key7": "NCVET6aUy5Phon8q14V2EshTjfUoJkEhx8Ca8dSJKddk8gCPLMnVoCP2bVjJSrMoAUj8JaaKsJTULuNvzQwrncy",
  "key8": "5nntJ7Z8yAdNLW5cugGhh1sJTUF9gQdg6rp5UVo37gDE779GmYWjLJEDQBinhPEjJy7T7tvbig2jjfFRwQgRAGTR",
  "key9": "56RYvh6hvn658Loy2WKvSkdXWY2SWwVtZ3sfw3KKe9arSmaUo1PM3Vg2mis5MpsgzMNh9cchSgDSSYgA8dHDucZc",
  "key10": "46xod23pv7f4nDiviQRPach4dpQ4BgRJUYrWByxP6Dm1yDyfNKXA1FCB4QFnAvGPE2uAjWDuBK5Js1zTzDbSYjGs",
  "key11": "3TiD5FC6HCanJrTkXWM2iePcmszzT7bcuUfoWpZ13ozqW66Vwg2TTxfb8ttY15YH6L9TcTKutFDzbCa1SGXRUrU",
  "key12": "3eixphn3XYxPVsKtfLzCe2yEH1rYTPhA5Cj5QMQVFY1v1Wd1x24p7NCcR5voTXzMz4xjfu5ty3hVtbaL9kYQwwwG",
  "key13": "pGwXaiz36pv8M2bXDuURMgimgq57Fucf4hqD9pAvgwdQMLb6bTLTEt5vcn7jTWgF4RSbLF9ffVoAry2wvqTi5vJ",
  "key14": "5RuRLws88pgoYfdnCBXeq4dVRtYv564YkdPxwoJMQYWoRbBhAXjNy6nAnEkpbPdXRnXuPgDiPnm9YFZusdUreV2G",
  "key15": "4w2EQzhe5kxB46ktdS63p8Sie8dzY2p1aJ2Qwdh8LcKayAaktKrpLYfXd5JMt6QcPi7utcqzjDU8NXuW2QCUJpCm",
  "key16": "2E1BdQDXcCuM5uKfYv6viakSemzRBiGdet3xZxahv1uSD5mkJ4XwgjUNptpZV7RjZbE711NaQDqG7GGUVGiAnkPn",
  "key17": "4ihvXxwH4bBwh9YNzRSE4xVuHrovga6dvSCH7uGPjAuxGMoYf3kcXLGPHkq8KQrDmNZ7V7NVkuPC3EiyB8YNzrYT",
  "key18": "2oaxqpmo92zHbrNrt9kdjdgVctLjYT1q7ELVoN3zqzMWDXub7VzubqMhLFEp6oiSsJtkMXjYZkkwUCk78eF4vhaj",
  "key19": "2cidgQvam3TnSsC7bBtUmaB5mu1ycrysRXy7eiqAkQqrwyWgqYCoa5YSkDQbHtA6niVHTGizMm5huKjrsSn8k5Qq",
  "key20": "5PR4GCdwfBsuZdgmYQqXRsqjQZjqtDmM5F8dcf32ge9wKoanA5pXcWxzbzvfv4rDPmbxg3jMBaDCDxLRF1LxAAfi",
  "key21": "4vgtQuFkfpgaSntZ2JwFps7Loz1Qqi5RzarGtooctTSFXWAd2L64ZBSZJHsqpDKqhjZddXgNwDzCeQV6utYsuHfn",
  "key22": "P2jvJ46MhT3WKKR43LwctQtJnWGATFmQ73aeV8urQfnHRRggdLcLusoYJukh15H5jkeGrx7z5sioWVT7Mmph5zB",
  "key23": "3pJRjWWbcm51q8s8Y4mdtWBZrzGHqYD7i6eFdNwwSu7qiAUSy8n6DAZNpNrB5WM7ormRuGNvrffCsVhBUUYtkLGx",
  "key24": "UyF6JsNgrT9pWqjkwJmTC5ZHzrtW99U98ruQ8tKMCha1uWQCchu8MCJiemUUATXiNgwzruom2ANQXiCk2iCuHCp",
  "key25": "5N7myK7eHLfW9KK4bi56Bu7vVJAuZAVzA1TB7NEo5eNxQFDdoBnfNyAqtDkNEueayAiocr9QYGRhWVNYzWEgTRPY",
  "key26": "4Wnj1wYARvKU6S5qrZXxcm1ZNLjUCqWkYrwoy3PdeS6zqUZcDS2icLZwRMkj12HmjiahjgPA8dZBBKS2mnX3qam1",
  "key27": "39s1PYhqR8o12c7DmdRLcEJxUyF5foZg1fx1yHaaDhRwGEkVVbZgQ5KubQhKC62WL9S2zjaRt3rrUR4JVEJ5oumi",
  "key28": "3kUCChfSB5qUCroSPX774qGuH8Awv66wrnVGhTbXMW2iuXMe5aiC1yDC7V9eoHYVMxeJSxG2iSe2WKj3qyQ6LF17",
  "key29": "2v4EsFMtU2ufSLSHNeypjg6e1RFoU62hq4WsH2vSijxMxCXyJdxWUsMWtSSaCRhZZEusapjYjh9xakWLo4D4z5vf",
  "key30": "2mySJ9U2gizBPBxrtctmoEc2LcyUTeSgQgtAcKnN3cK1xJmW9jcjkhdDeyH6jnZCZZw2Ksbngk1R6xKhjqLjQiSk",
  "key31": "9QEvx9SUNBzd9MC8djFUQxhJnfWSSe3warkRbJEHg56SXqMKJ7XMWMCUncgAv4MRcvsTqaJVj7nEhj7mBn7UAUb",
  "key32": "2sPZALp1fHGcmwo8HKCNaMJJ9B2hafFYkBu5mnGwKr7PD3vGe9m6tQ811pbiy3qQx4Zo6RomTTZeUYWrmxNKaWWD",
  "key33": "4rWgRHj8oKSMqr2BfnezWydyBiZaBpK7SQL3sEG4xEAnEM6gKCK7ymUwwLTeMgAT4SH8qDsEZs9WPKrgkVpbk1Lq",
  "key34": "2w6JSsGTZ7P4EU4MJHh8fZWrZUt2afpzRrVf8A9DuP9nYcoVnA2uRtJGdUirPcaxA7Md5TFpyUBSZP3ri55oiihz",
  "key35": "4kELaCdA1fA3GTjmVc3spn6Qiv8UrZtcLNP8h6Wiq6q6r4q3Yf2oABd4XQwC2BJ7A9PphhFq68eE84XnSfMkZ76J",
  "key36": "DHyrBvHrqSoGyDKiJSgKe4X5HjeFQudznxk9MtY3ZVij33enV27sRvfnjd7kr5Va2Wr62UGvjfp27EkKAiuKDCF"
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
