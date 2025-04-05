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
    "3ahAJNwVw9TEQRrZJRG2TuuPb4E1mSpuTLM8pMxRHuMRUu2TkyKoHyfCb8XyohGgFbU8FktTa7bkoHkoYnnuwudb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsiAMFNRUUV1bu8BgBCPh9ueo7Wjnd4MMtSuGTkD9TvwFPF9WffjY6thXDAiYsZH1jq7WcufBS1FRLEhT3uDGnz",
  "key1": "2swfBBaByLgx8GGLYdMFkQi5xbTibDH6K1PftiG6XFJV9S8n7WyViS5M8YA3anHHenXHzUh97njL1rFyjLkA61Hz",
  "key2": "37S4WCUnEKyvtSEYs3dojBecXJ9GoMn7XZAfbPp1SEw63Px6xrv8omcnBTEZv2HWfWmtg92sebXj6DLh3qKsZNFs",
  "key3": "66Hn9drBdQRML8U9PRahvmzPV4FUWjeay59YGCS6XGCGAhhmxKCxDs6x3iKdXG49aitvcmamQPsB45mKBbudjUUz",
  "key4": "bUPfwBdqHHuqvkC2eycgnzChBJ9wwt7jzbi6Zy1j9mUcYbTv4VTuwsPA27xqVUyAHNpG1Y1eBXDSonGeybrkm5Z",
  "key5": "5cbZcYV4pVUZNwvHm2QmL1Dx3xr3ahxrUoh3inZVbaMjaStm9ytogyXKEBTLYzkadyeHBReS9b8r2eke6qby3g4j",
  "key6": "AMuqJhQKWk8FfoMrNvaxpyvE7NjavcMF1UDQDaJ8AY1PT2aB5kUD46Z3yuUDxCqY8WkPa3buvS48iZYENBKef9W",
  "key7": "3aDMzCNCUNDCQhPvjGSc7GDMgA5yrQvR3M1nQrheMgwuquRQiCXMKRbxZqZrLBdn13a7vo8mEGnsSqjruFHM5q2y",
  "key8": "35sJYWBQMCFXuwBVSFxbP9ts8WWhAhPtpFdEJoH3mH4JYeXhcsowUdqf8ruJGUwnRLui4q483KZHbbfWT9iXv6Rn",
  "key9": "5Pr11pY97vzGaC7wwHZV5tcJT3NMBwnxguEaBAcJ4vzXi94A3JfkNxHSy12iPGr2hFLw7NaBZ6AeujpquAHLSK1X",
  "key10": "2qwpKoh1N2DAAki7TYFn3wFzthJ3TRDa1cPgfH1j79aGzCsMauSeWutXo1BQP2z8arr62S2hyTbzc2rM5WrsvvMe",
  "key11": "t1sRskkTRjXP1C6Nc8ZyDYa1NC4S4TMr2931JpJmbUDffGfeLPULpKfBgxqaQzxUP2Zq6c7HYDK1s1GoSYjJm3V",
  "key12": "5tRy8uBoq59QcxoH4XtDUdDEWfdnoFobfXbE5VzMH3rLibraSGwbmapCY18wo6K5tUgy645T8FqhfoL39z6aCq21",
  "key13": "5s3UzAktSsek3A2CJ6pdjKn2UL8Ydz4iDUJYwtmYEXXAqZgYXoebtJmd44tqT4ME81aNDqcL2vBPKDjNGWivVH2U",
  "key14": "i71mHA3oo35aSxGUtjSiRqKS29cD5HdCwWKt3AjyFwpfLxq9itgvGQmk6HVZAVWkpULPirz1y2gZJQNQ5foE55h",
  "key15": "42PKB5xiaV723otsL8HtWZPofBVQJnivMbP54tSk5ouDR3AnLq1APpxE7DioMh7YAUp4phAMzq2sSwvMKvWGkZnC",
  "key16": "38VD1J1eTu2Pfd1ZiYi8y98DcYwPD1jgfcBj9cARMNvMb9RohpYG1cf7KZXGKhAAKNC8fCFqWP8nB5ScsjDCYpH5",
  "key17": "2V1SeQj5PTf3AgD5pi1NnZwiKY2Pvn5xBg5sEZRZZrjr1PoGqcXwWTH4fdSYVmWDJw4JuteXNhR6M5FfgaA8yx17",
  "key18": "629W3pfXHW3Q7Ukr7FcAHGayHZqQztR7z8Ji8XKkz4tyqKBnrPKuqJSVGg8EFZ6Qs7Fb5RiFQSqBhMmvVpfY35Yq",
  "key19": "utfkcko8Mtg8dznCV3aUq4PSreVAPadm8TVQaiPhLnmXqhTB6XxLCWYH51Xz3KqDjqfjJ7tS55VoWxWXAdgPohz",
  "key20": "2A32Tbw5KnH98pLBHxoMD8orWXqfmCiA1iCNmMphN1eyaoiJ8J2buh2yFWwfGR4uoPiuZnRHGjBYxn4xHEsQXRbt",
  "key21": "28uMhurNH9sQ3iZhqCiUSSrUVzsSZ8fNS6h7gSuL6ouE67MAQbcFhFMNkPoP2hy7evUpqPh5Abm9xiDDRJZoQxAq",
  "key22": "4dq198K7VWeQfqmFeY8nYJuSfMiNEsEofHYxEQMQtRmVfbupmoZdH3vd4yAQtiHM3NtNg53nWsNWHQqaTYTcdAPt",
  "key23": "FZNPuBViue72qN2htdUwdVrrv7FMqR5qmCkyWkjRtScaeeQVrh4QEVQY8sTXoBYC8VQw4GhJqwDPfsEgoU74cKD",
  "key24": "4a1hfoKruSbX5Ywspc3i8R99PsvQAqbsvQNv5M9Bed7ZwQdrQEoH8LrXN36B81iSDCwtU8Zr85CBVd2jqnFmGUd3",
  "key25": "28wFKR249Lr1McyeoDoWCzHFEWEsmKx854DHX1Yg3QhpRjPJNBB1pzb3LwMjbYPZfg22zKxtfoEo7rWJjutgvmX2",
  "key26": "2bYrMCNSBzJiin1cgvtk3atFCDUJSgH3HD4gkheG16eWoA4BCYykUWSn2WvH9ivPjhLsrMUH1xuLfStTuWirtAJw",
  "key27": "dQWc25Fiy5ZYHECcZJgmfB5emp1LxWqwZWv1SjKJFsMdFwnYwZbn2XXEENssh8VYDyGZePjrvtDkwnkVxjYGhGp",
  "key28": "4Vo97aqxatzm39z4LRjJL79RpFpfPDV6a2wdYWSeMNqnhqN8N6pYSb8X7MNpSHPdchng3dUizHJRbZtuALsTySUV",
  "key29": "2DWHUMfKcyav36bZHB2qcPTE2PVcb1voMWaujEyhVgWTaP3UBC1xVwNxh2rSmFvqBHAfpEc3RoRmby1FjhSGcyYd",
  "key30": "4Z7JZqemgdxuW5Z1Q52d5BK3nLA6YVmwfM1HStDn7AmKKzfPBZVAA1LhJJo5Y9Yi4PFxZyhxKS16GbVAV7QUZk44",
  "key31": "yPciH3o78pR22GrvsZX95uSXCvgMXqNBgYS7FDQai5C5phBv44JuTyGZBXeygCgrSKsi24jdkY7U8Bth24RYVcC",
  "key32": "4PFxUN5f6SPWbKqA5BibXzaDevGqzdrFxkHVKjDjAncWsAPBjnP9hAPBgdZyhFr7Y4NUwe8V1UvzFLrbc99AfjuS",
  "key33": "36Vooy6ksLvYQKZKqzD4uQfr7bkBWfY4RFFyDFVWhpGjLsBEDLoPnQG8WjBXeYh5FBmYneFFBpMKeoigvTyMGPqt",
  "key34": "2fWNAz78XVLR9bxqMTEyiQW2YVqp3t9rJnWDwDBniS2ro1GjudPGzBxXvHawspEwx4Dgdj6w2kVnjdtiftvYw22u",
  "key35": "TEUt7PNqmzHP8dVXpK2bZC9Zv6sCSNLMwXfvVq3KudoggqNn47YSCWaCJryxeh6iMUGaCBLVBydTnwgYXy7cebP",
  "key36": "CkvRH2FhA6DaZWy7dQedDfxJtvhWDZ7AqWZwTNW4uwhVXhkfBw7RuUMrENuvsgjkZcHAMZttTb14gYyNqUhJ32B",
  "key37": "4j6AL6LbtGXKvL6DzV99pRMEs8mfUhyMdy3T19waFXrq3zxYcGRqMRHqN3wxCo65aBm7Pm36TWPziHDykxuntYdc",
  "key38": "54p8ztaEaYSFKDGRQoiscaKhr6KZ1zsRMSDT2iFbTmKFNF673vm5uYWX7ocamaCyo6uMcq2y5CPtU1oU1oWteTVy",
  "key39": "56Mf9FSJWqxo3b2sUEsBhLmXzCuqQYqem7ndAcN2WFJsjBTVf2fd4CmY9AFh5bSgNGEFhBpdKHtiuUA77k1ubfLQ",
  "key40": "5fq3xnPntHdCkb99N19LaMuR7N59sx89j7yPrzvv64HriVtwDiahyRrHzJpqnjk23JoTC3mizKGvvHzZsd4dFMQy",
  "key41": "5QNughVhU5GPgyqFEppayqrtnM92vmwRg8L83w71hXBdFsdFu8PX7LZYGrqjDQ42KPyRg8SQsdD9D6sZy4mFW2JS",
  "key42": "3fcoEJysVLzR4jeE71dpAsTLGUw8CqdzKogPQqvhSKGxSuTUpgg5Mapmn7v1DwQKruqvuvu3rKSSYV7qeufuJCre",
  "key43": "57tYBSqpd57fd29ZG7CeNWxYQADDqswdePbfV9m5MJd9HfshD8KCzjq5P3bfwwA6r2xZ5L7p2dAR37bcbAorEjBL",
  "key44": "4tc5pewwrA7qvY3vJnZYHK8SkReT63eSEJQSHmY6qPkybbmC24WSD8B7ZUGQeJehmxjjnTuDBHea6PPcD29MiGeS",
  "key45": "2E3oNovz4gf8WFETFLezo5SDG6Ftf6ZdNBAg7dDqK6Jo2VMoQaTgzERN1eetCdxGh9hfs9MZA8kSojT12FAVFR7y"
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
