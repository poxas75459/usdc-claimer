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
    "KmQ7FG6qxHcZQsyZKqSUF9iAWwfSy3DdCbJZHViS4Za5pdt9zv8GZWnt6feo3ZHMYXSwobWDqokYjE9BcvNwmEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgWQksjyZDoyJiSgWyZf4XdFuzGChavkJr1sgGoMZJQ1zfcQmWTW3YneZBQ4cywfjWggeRkHqxzvGQEF7FWCBoy",
  "key1": "5qKQta5bSJiQEanBBQPzbszUsWFaJ98ncKkTLiEu4US4FF6DhyuVqeeBzkA5D2xqq4KPHoV1dNWkvpyfJUUZcGz5",
  "key2": "3qLcS37b2QZQo2kfkSdAT9UWFzyEB4A4MXLgNAtsi62SPF5se3Vu2fgPSB28hYRSDVo91mzpXrFDNGkv37W8fRg1",
  "key3": "2CKsoU6G3nGQAt6eNNSVnkUZhqWpBAfAik5fNWrtnLAP2pAfmzeQCAR1aKknby2svapj8pJ4hDCXyJ7M6E3Kds4d",
  "key4": "2wothTmKH6BHd4okKy3925guXSqRatd8AgdTgNtj2Hg5LoEDEPsT8CUMiaYFjzycyAKVhWSsa2xKq41Gnw6tNzBA",
  "key5": "4Vjfu2DPzXRmXtGfB9PHUf1RvvH4ZVPY6FqRASfRDgHFSiZuvwU7ctRhBXocpV8n1WrPTw8jS9P4fE6iYSj5yXxJ",
  "key6": "3771oCZDrMMCQaB9skYUXqTLrxHjSipiFCQKFq3jm6yfFC7MaCUmnwkxUaghDBoL656nEPRSBoCFuHDDv6b7LXSw",
  "key7": "4edGPND4CYGYfzWBQwwKim6GnFz3VvZZ9okeJCkWBtwZhVqXNR1GaAMZqLa6ziDQ9FJ9nqWtPPZA8pADpVYVLCM6",
  "key8": "VZkKZs2PBZvpJyBKxPgZf1pJtKYFoawnkvs8umDqLKhHGpJSyRg7SrGbipVdRp5HruycQSTo4Jzm2kmgyaFaDRs",
  "key9": "4YypcdooV9jDNZa4T9KV2ntxwQfQp3ZXWw7Q2mHXv3woNAvTQQtpNibrH8jU26v8XBbAHUschb1DLQUd6mFeViPe",
  "key10": "e2RXWTmGL3uQE76TgHrXij6JeGNpUU2cN4W5LpP8bGuWP9ZEKvwPf5asQo6iB9zxPYAkbVsMHVLMikda6xHy18n",
  "key11": "249RCjXdvCMjn9XwBemmNPZBvhqhtraCJBwFd1ryZ2agf1qM3e2qJTRtUBJY1RgUUj9gKjdQERJGCu1UoBYqeEQz",
  "key12": "2Q7QhqYv9BPPBP5zKuV6gQm99GpLbYhXsDpwn4V3DofUgWowcGJXzG24fF5B4LcgW9mSDF14f1ZbDZzPGnLDkDFo",
  "key13": "5TjiR6ZSX7jiDhrS4UdpW4gdeHhHQ5PACpUFqFV6LCZXRLnAQXd9twYPCgUdscEjVMMsCAugdo4hSWkCajJxPT1V",
  "key14": "5TLH7EWS1D8JUFigZWR5TpvV4JWSibH1k8nXCSiSBJhqf3tXimqTAth8sqRryrztN47A6aR7dxPE9YWsZf3jXDb",
  "key15": "8mmEEXaZFdVDus5Hs1zPuTMw8zjZs6RLnSb8tax9aWivAweYrdbdao8cuYBoT4MskZGciTPXrgjR3qSkHhqviwy",
  "key16": "2J8rkAxafzmeU8qChwDop29F3WwdJvHi2mSnKac91GQZcAxK6ufZTEpjsQV31BRrembbdPMPGewof31UFgzWzYpc",
  "key17": "3NP7teM8Mzah3kGmqMpqH4FrdRSDUiz5ZRGWMgBnDaXN29JBzM2zvK5NCMKHrSFesHy6tVo6GAt6MdmgMDyMVXdC",
  "key18": "JSetxChd7ESqtsGbLEsx4kxP14jJndV6c5qn3opfW1bdBDqCCT5SmP6vquZsarikvW7yGx3tepTrLCiFnsTYuK5",
  "key19": "btmdjuMp9xVZiYh8re1XpnCNdd9E7besuNnDzhRPk1Uy4hdy4Fxiv7HauxMkx9vmdbMah4wYnpwY4pkC4SmNQTq",
  "key20": "3BMtbofBoozHgFfHrdVkGpSs4xxDW4zsJJg1nxucWQyh4fn26EEamYJiVppZYvfpBHk9vg41hLVqzLJFs6qRxKWe",
  "key21": "3rkePH2C7cAdodpDKJrKjCeEtFjBQ5qDgmGG1WgiMZuXCJKHgZr62C5PedLkT892Qh6jQtVqPHeywPzYHP3U1tL7",
  "key22": "5SFbd2jM15KtmJYAbUU1CDSu6qvJ4efHQdm2bbTLY5GdyQqAubMzRpeqLBGpRXKQEE82G7bvYZo8BRhRpJKLEtfT",
  "key23": "225neW9k5MJruvkqV73ZqC6ao3dBCpcBSa7KddVydLmztHKixt7TPz8ExinHdxCJKDPdwD1rKSSwjWN3rUgRvbke",
  "key24": "5oKmyEtkpr9byamF2RCqXetwSAB13i21V8Aeh7gDbNrRLj59AsrEpDc84zoqxMmWpGyr4chtYucZFRfnbHjrz5qT",
  "key25": "3eaJ9KaJvMX67sFsmhwZgggYJeGJSv16JDw1t8TBzjgYiASz9BV79ybFQCj3Jc3fX4gkwmPwbUf31t8BrV5zVQgH",
  "key26": "33oVZ5e2huxdnsHZERDDBpitywP5Pab9EzZ3spwe2sW7iAGsDFr1hFwRRP5xs65giV1m6798rrj8hFBhFUvdpnzB",
  "key27": "5S9TpaiggtyhCCY1yoSzTp5WiyKgUtxgBiYeecz9bWa8VT4YAttHXViWULaJwhQwjiYCeLENqE278eeqfmQsN5Ec",
  "key28": "ENxs8irhAyUiv7kHtayDWYyDzaVHFbtagcU4wadrKqvU4XfezSwBqN1VtKJXhxbn3sFSUGrRwrobfoaYuDedFoK",
  "key29": "4sq7PwoT9S3BHk5f5r6e7ejpwLkU5RJYuvoDBfrqDMvUXgjJTNoZ53uFfhAZPDESrTt4tzNreDtZKXHN6YpstNsg",
  "key30": "41KPWGQXuYC2gvuzokCE4v5dDvhhT7niRGa6rwgDE4MbNgoq3CEmvJzMWSPMmvg8XEjvxBvnEBuRkDPado25Dk3R",
  "key31": "2yXUBd9q8RsR7hL5wxtrAJDL2uLM4tRMEwJUMsyTmLj1nq8s2JbfrxcoU9EGqE79iVUxnzJNHyDsHnHjZavCv5tq"
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
