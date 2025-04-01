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
    "2Wqk2MECgdUvyazc8xA2qpEhEvKkurBx61pChzGtZB7JCWVa9Pwxaj2wTz1HoJpW57uePgzdwfkVEQmyRy3Gv4pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245mrbzvF5tohV9paJ9CCY1kVU5U5xvXDe6azr8cTLwwiShbBSNU6L4h4brN6ZXKkyEin6jruiHE6VhdFAwUzZiy",
  "key1": "3k63UJFuxoUeuAZM4yeQU6djw7oy6URRNWKRbLjnD4L4AqwvMcbZQjzAiGkpbKiQ3k4VWGpU3gaMe4neYiAk9iCL",
  "key2": "4q9iRAZV25nwXx9zZ8KTq1kTEuxKoQinMLLCZnhaRQYqdkKeUMhphBYpNL7ATa1E1LjGbgBAuXUXQZc5RznNCHtz",
  "key3": "4kKPTWoAYM3XZTLhoWqgKgzZtC3DwYZiNj6AcQiwsxsVYgqkbp8uGhJRvjWt37dk6cj8VBrtE2Di5mt22aF3Tzhf",
  "key4": "5Qvz9WZ8UmbpziCXWqQQfp9iFZmkkXXvw6hMNXAHA27H4JVFtwUZUY8R2LCWAGcdhHwek7fnBkrt1m885GMeKjU5",
  "key5": "3eucSGpuSUkTrNcf33g6TW3Rv6iahGmnt3EQ2GpgaaZb2QFLrSQ2Kf7FD4LmgDnPZ5xP9njLeULtoaSDDu9LVivg",
  "key6": "4VcHf4Mne9kXaTfaoNSPE56FvHvCbN6pJVKJkzjcJkLbcQj2nwU8C8kHGS7wWssVHHSvdkuqbn6yaroNttPp9E4M",
  "key7": "4aABd9drM7ZdvUKawzyQQeSYFuBnc4rQnBzgkvzc46MVMX4rirBLyNGKYqtc3wmdfNxMEQMUeirNzzkJmnTEigKm",
  "key8": "2kxBSoQjARMonVEbzuQcjZn4EP83vXnibBZm8BNhVVYjGwyqwx11WzEYVokezXVx99Sw9ufVQ9KDkUzgPRAdYCj6",
  "key9": "2JDN1FdKB81vSU3DpPBBrRGQXLEv1JmC4ffNUnXbwcs8jybWPQaii9ZRneBTCBqMhqRE5D67cQAPESXuvjyXqmdN",
  "key10": "51H6naXa1e4QQW7zYXTpUa8ymVNbcGtpF59XQ6UZoE5UV43ttqdJCE95MJR7jC2nJoNbtYN9JphLusEaYhscuZyF",
  "key11": "2C1FnGKJ6DodgnaMaFj2hHzrv72WYqockfvicA6AoM7hZ4yjbfhXot9dev3g54fiXx64cKqMLwrXifjqwbhVmbBh",
  "key12": "2Fpn8KGNL1Xf3de9E4YVZKMWr8BAfwUqT6V3qPqWAHGzqX35aEtVWJzjFRXgNyipnbD1N7vtzYcFVx2R4bRT6xS6",
  "key13": "3xLY3ngWAcM3LfuLiLMZqbzfgUqRYsYw7ci4ikf1eeAUkRSPw22xfiVpSENYSuB52Mfh2WbVgUf1dsSmoMAJU9X4",
  "key14": "64UVpVKRihpTuEeqba1vUUuwtF23Fyedyh3AMSbEyrM9xRSJFohGQD5zXHfs7M35xkWwpaAc9MRtWQX5tg7hHfXM",
  "key15": "3z5WaX1mSNZHg6ji9SU2fAVBRiPsAv67gWGF2rnkV9A9NapekzjDoXTjqEW37BQb5AUHHPnGnsfSJuB4jRNLqVJp",
  "key16": "2ng4twKjrXPY73Z2eyukVbnKSiSKr7EPBRWtmVeoGMW6ntkaXM4YJf4EMTZWmRR7fm5uxxVnanNt1ATaYneG7bDV",
  "key17": "5JsoE2ijQgNq5EiTcvkr8wT2LMiYwm7pLU3XouXnatQ9mAFXKEzPpzP7ZZ6Q3XYRbsEXFCnGAhdNNEjiYwRZBRbw",
  "key18": "4oge9acTFoSEpaB8HEZmnt7yaTsT39A8ur4xeTrZZiQ31fspsaNxSSkgnvJKF289EnarQfSTfvMoA3HNxLe3P38c",
  "key19": "uKmjoeKqQL89ANu4SU785AN5ceCTJYj3GCuC5RjEdgiGT1bQ2h5nqbzWComNnQPqDDBJJmiMFRRq3wsM9SF6BEA",
  "key20": "5zckuKzqoMD1DziuYYkrnqygKDRqZyToTtDFvjjaEbAQnuXxgi1AyVgCeZ9p7LEr9R6e1UWd1ShsN8GirfFrrx1F",
  "key21": "221EcBfSsBgzZHdZknU2EvLnMKiEt67ZbgjnmbAZKXWY7shef1UXmB5eQcmmHJ3SmBYAu6vggCXq88RYswGVG6Ci",
  "key22": "2GRqzET1SLX7osc3aHM6kUavaC4PfcPJy8fXzjdRb8q2hNmaLCg4vfj2i3AG4WEXM9Sxt44rjfgoaqSPcFCw7qR9",
  "key23": "5NyYgPa9y7NRw3XPS1f3uhSSapxvbSxYLTWDeUcAXfbxJHwAPfM8SktD8NxQodHAP2R8CAZVmJWH7H71w779Mkan",
  "key24": "25ncM1PwtKVa6tmXaA151EDU8ieKzutctkGySCVEckmT4JVHBdzCS9tcE5b7TA43mGcKXaS8YBsnvphUvYfk3Fzf",
  "key25": "4XfHnkLNjpi8V24WM4n9DdnATcwseSsar2umV8KsgjC2qM3vcDgtvT8zhHBeJaTdMS5vNnfdCUUkoHqQckPtKHhq",
  "key26": "2vGgTdm9aMLphncRpX8ST83W57SdcipXiyjZ9iGziMSjP9xku8SVHxYvzv29g1EeCcwfuQo9cf4PzWTZWxtUep5i",
  "key27": "5epmhP9Qt4C2oVHzNaFtrpg1zqTrbCyavNCK8tmm2biTugeAu51eiE6gTjUNHnJNSsjUPdWPE4qr8domJZKmsbqG",
  "key28": "S6VDc7QcULQsczHxCoWVeuk79DgCC5cNHb8Yrcyg1SbwXMbNorsSncQyjGDQkCLjzjyCzF4GXpMWp1333sfTQEb",
  "key29": "5y3u9KhpvZ8W13LfQTCi92Buua2bD7EEnFgsy8HMaweLbnWMp3U6wWoFUHGhYgKAEUbVxUVphAvBFQ32yBwKAvhX",
  "key30": "4gGx5Wi12fqigqXozYZooxSS5u8XRspg7vx7EHQnsUxjJLTzi7ihkHfDMR5PtrhZceTHZVF9jQHSXuAuzHxYdFVD",
  "key31": "5QVvfMMimoH42zXDcGhFGnsZXgn6UZfC7NJSvN2NpFwhTVBvJFaGsFRvHBZQ1QXdc5QH3XrS8hBk7mYF1hadgAwe",
  "key32": "tJ8rBQuM2XrYyAGaBMzHC6pzB41GwQG8fnuoeKqbhAQ2bkbZXFtrdzvTRtqAf4dWq5SXjqJDkJSUV2dF9K6Yhc3",
  "key33": "2Nf49upxV5ygng1x1EhDanWt2DjHLVpEuWkTngWx2gXR14gxQbSLp1DdAWSKLZqtJ5eub21Br6NXWBwQ7A1Zsg5V",
  "key34": "3ft17ZriPiajXG7tDK8Lmc128S7d3ftC7NDbW31WSPjJt59kktsjdQc4jenZ8zFeYHKBtLcCgQwqyYjpe2keUrny",
  "key35": "TPwBUPv9STZbqdeZYdBTYdPSFdk2AxobU2UsFiGf3g8U8HTjgWUgLqfN2WFXgiqgpsvVdxAPawFjBmzkR25Z6BY",
  "key36": "7PKrpbzs1KZREK7xo8n4vE8aSuF9qhG9MBbaCkAUf8MTdpbd5HqJrkUKnMx45n6s3W7eYkoNDDmX4Dng1uU37Xc",
  "key37": "WhyhHTNVYaEqBbCXJFv8k2SrQc8yQxBUS9uz86hyfahk3hAbSddttR3bNRXi7BogjzjpbNSCPZx99YJE8a5b5q4",
  "key38": "25vCX4C4XPoykEkaZrpr44mnsFUd7x9ipqDycqymXJppaRZ1gMBGGYz6bhknCS79rFvoP4c3Eh2n7UshFxw2vNjJ"
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
