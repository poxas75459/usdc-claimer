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
    "2ftAwFMHgBmKqwfNP5EZvbgyH7kk6vUdtaETwJuQqHM37H9zRivCD1abE5ff1UecTkbWRwwezp8QqZQi5FMq6dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHVU7vpQDJo5kytNn1jSPmhGoczU7NkAfENXz7zSKVwNwtG1pYhTLeKeu4y41eAmzmgDrw26zJAk7ziehyrMWek",
  "key1": "2ar7AV9e7AVCv4oJ2TgaUw3dj42PfuV9kx1vDDZLtMU8Pffjbnx7w4qF3hi7pzTvv5pnX72DkFU4KMEPo1rrj84T",
  "key2": "4UQRDzbAJMWWVB3AkWpAz11S6vRfKySWmJbe6T8Pxbw8tF34QkBFd89HCJE75D6Wtj26nwbwyTV8uUa8NCtXY8Ty",
  "key3": "4ubnQQt3um3rwNFEqdTPfUbkXWBy5E8696kJJGgvEMypdVvEf5NsmYwBMuBDovCZNTtjB6pJaTnbqzKknurwMj8q",
  "key4": "2n8RzZL3SuA9PatQeAPBELhHauzXJFUPQDPWTFctKU9pwWTttfcw6B5dMFBoUATfnpxvqCLZuMnSsLXBopjVaoat",
  "key5": "2TohU1SRnVsQcJQSkw52pgTypEu5kR6jVrafr2iVmHXE9JJAaq2pbZ8JELWzi5j1UZdDFcFWzrvRhewhvLehxgzP",
  "key6": "5TTzmc7eqHnk31bYNg9Qbwq2k7BTxTNqQ3YhbBvwznTandyCh7xJX1zPyUsqhrzd6ubgNBFmDxUrSJjz52vR5mNd",
  "key7": "2bVeKwHCTs6P9z6rqqUapM1SnQWMBJxo1Vb1NzZUwZbQTBf79ZGdDjz688omNvBsu3muF1s8XZV7f9ZczLXCdkgm",
  "key8": "3jQdqAfeLQQKZ1vv8RBEAUsnBzfiyphuMfYw6YUkfmGxKJ35BMJgM2uS4p3X5vqGCtwMhMugghisUrhVXn8ehaqg",
  "key9": "3yVeLdeweNzYTAZkKv4mT4MDqZAJbrC9wVcnR8KtB5vCqGkSoF2oCG6GstpARuufGk872pTw9TgMvG9UtypQh1Us",
  "key10": "56DKbsPcqQbBEiyLz8NtP1zHiCvVwDjM8Dk4fvshbnTgnWhaRcm36gL57eDNbTHBYkeFxoGVHXci4ji7iYs92sj4",
  "key11": "3R56vZpUrCGyPb9KuhaPtPxrqZu8h7QUqokoDDWBLAJ2iVsMzXWVkZdP1jnoznbpdYwjVYhM18biYLyQZyVVU3Fx",
  "key12": "5yMtQLN1mjwd8FCezuLPE2gA3CSHrZBPNtRdiXwpEK1RdWeXpUprDRiMoL8EKQagzWTJ44ebNEnZLsGgdsVut1hj",
  "key13": "5r5aWXdmLR4F3xxfwBw7bHVoMKm9GWDu2ugGackiHtL2BnSyvM4kRJDVEFcn2nhK9C4FiqXNafJjwdB4CEpuGjnm",
  "key14": "655jFc3ztsQsRkFtGTLoY2yKgzD6zSBaWog1uNyLhmpuYCNtw5QqRadR8qGWi5fpAhE6VazuvKGGcPCrwUbvxLFb",
  "key15": "54G9TXB9QWNJzARDBGp92KmxuMPbLTfANQ7SEK1GoNuPJDG8GcDRzt29rUrGvEiXZ9ArbQSU17d3JJphcCxUedvZ",
  "key16": "2S7ncDPdAFHDzUvxzqgXgWTVyC19pDPXZCHis1QHmfTY1n8wbhfKQT2TdooAroiCMYuADWoz9LeosVN3BEyQTxe2",
  "key17": "2mQZYquFVWVQCfbBf2q3CJ47ZbfEszpeBxtPoBa2v8qiNCggnchGoqtggBThzNNNBc1MUYF3dx8z4UNBYYX9h7mm",
  "key18": "4ndjozHwp18trRfzmZAWYzwD2TZ95SdbBvLLmgrGJdxFHs7rKGvHBh3bx6S4jsyi9ePxRgXTakxcWUVcMfWgGwGq",
  "key19": "22hkuo8R7qhd35Eyv2Jq8VgfJz1bMupbkDxscKrrECqKcBwMeSrCwKHUVmks62xt8f4p5VzhQUnwVkWPmA4TbQpj",
  "key20": "2ngJpVNi2EBMeRSkRYmVvtanEZqZcBmDQ6chGiJG6A5nFyKMzHpB5usoDeXkfNBqQsQBsmedKk63MyUTy2Zri676",
  "key21": "4HmhFHM2taWCHUvXo61qUhPbVyxJSsWqqUfRdrjdNahnYjyupRyD6G2GtpAW3a7gEaggwMPqRjyhw7HQb6Nyz2YR",
  "key22": "3CrTTPt365V3BDi8VSF7STP2FXTiRVxit3KgwgUzfJ4iczviMkJJ2mPHLjhwcqYjQcvenrgZzFeqf7k2SWjcu4DT",
  "key23": "2riuAagbJkQVk7uCP28s9hxndhXhojd4M2pLPxzMpHbTSQv7Lb2SjVPw6DKk2iQdg117X7uMr1wxThvCeeuZWdsX",
  "key24": "36cei6RQo6WsXbmqTpPKfQepqUsqQUFH7ciekUYx7Jj4jH9SxQvzbXr4urfZym7RunkKwekbqAqBwhrS9ZRqSqq9",
  "key25": "5bNazaU7LzkE7MexxibzRDVUBsLY67yjqKpYb1kXvZecKqxcBW1k9zaNeywbh1Q8g8JtuF1osaYbcrPhvVFH6Jz2",
  "key26": "43FJigaKKhk8rmZxfwWjoSin7B1KcgHpL7o5AjyFSnunv94mv2XNjL6X2mvE3zHGPTYLcgC8VNry15GNvdwUWw4g",
  "key27": "647rLPejeYZUzH258Uu9XEYkPhNMxRyaaf84Rtn1G4A8TYqYV5bN5yW5RWYzevqNzDgd4cJkRKrmJ4eeTUciVVTs",
  "key28": "2MLWxyGkDpQgv3iaBJMQ7E5EnB2D6pQ9hbz9oNsyoyrRQ9iugCYgdKbSV6T5CBB517VUzMkUKub5YimXLjqDEH4o",
  "key29": "vNafeZGwDxFMYfAtCsGG9hmfZkeK4BQP2ppVYXHokijzddN6pA9A564QqDUhp2eYgfhZuVpkVHgQf3pttNW8NQj",
  "key30": "2KEKJRiCoUAAhHmALQQKkbkG21BKJB2vyULdFSVLAQairLf5GvRuy2DNodFsu2jrZUJ2vEpZ3HSYVuRj5m7Ju8Up",
  "key31": "2QwUQyoDDdfUWtoADme2H3732SPXVAFKYMe5csq6CV6Hs8M24DXCB4NBjWm9XjBL2Ey96HHkXTKe6AHCRDxMMj3X",
  "key32": "ph83bndi2xpuNa4AkBa4fG5YJgmWDuxvVEo3YsB6kVXe1XZ1GGKzikLaW7skj9JN4ebuWhCB444h92M16MmSpYo",
  "key33": "2ZsCWGi3NUt8WWnywF1NjUhrq8ecfXgnZNaESjDBn7YpUAVUyhnWBTV64ptDz5qHBEiigv8wgXNHKCNfPd7Hjo6x",
  "key34": "48SgKCuXYNRpTG2jnk6b8o9zd6aGmHTXfwKXxyGr9axhbhPobpzSyatYffUvdRrYdt1bynAh8DWThB1z9fcfM8PX",
  "key35": "45q4qjprDQv1UKYX2Ns9xVJ6SmVVrmFipLLrxUVa6XWNSUKMneWy58nfoULRgXHuUU65DHjE6vk91MWkorrBuZ1k",
  "key36": "Q3t1HqnB8ezsdjkBrvhQJ1Eafqq4112MsbZAV5jZ5kCYD7JNgoBMaTTUT2ahW3QN9WWqHawuLBdKiWm7F6EvTJN",
  "key37": "3WczaiN9iu8EnjqYmAHYXvpow1vP2KgSDbwWaSp71rz1GcVsqA64Z6gw3Kdx1FVoxUcYtifLHWLMLts6x4uQ8ycL",
  "key38": "4kQBxkzntip1vGQQ4BduAoang1dteLvS9MtmSYZuB4tn826P4AgQVLmUjNhMpqvNsC8G84wUf1k4pPhmkCxsvDpK",
  "key39": "EVtSmovttrSLA6s7UdRLM6TA35kHDKasq5fdWdtGbDQ8EER5SxqKGWEfTxo8x1iQd4CMBiTUFg7qaCq3Humtwze",
  "key40": "4JjFs4o7dcFitK7v2JK4epNFszs7dtgsH5ppKXpjX5sGfQFb2hi5SmTr7bA6gBBUp5TA8fDhrHwqJ4P3pKA5kCZC",
  "key41": "4YDgT3iRL87AL91u1pRVYmJF55qUigLeCsLCzbRaZ6ULbQvbFi3G8M9NzdA7BsAuCqyCnv8ytfQsgYieHo4CNX1T",
  "key42": "2yi3MnuxDaZ4tcSdVfETVi7bhWVEkAS6RgihvWhTD3A3GaQVvHVBq3W5zQSsqhM9A2SCSZgjAK7TJdGYy8p8KwiZ",
  "key43": "4vXQjskzsWAsJyGYCTPsfhxAHPVBXrePubTtLyqzy1wCJobCoAEYz46jmUeXKAFqTU5eEZSRSpvvq2AymLcwMr56",
  "key44": "2DCs7upmj1uUog28QjetqonEDtaGgFAu4uTqmEX8y4GZDR3qiYCar2efuacjYwDvGkpPrni5TXo85rtz9nCErkbo",
  "key45": "8hurpTNfv94kqfJ5fY6tkScMtEDeJW9VwpsJ9Lqmh3XvhsxpPkQJ54Roaqnnvo8d8TY97rBcw7juuYmwsv2wUHy",
  "key46": "2pkfr5RLN8nsFSGBcrXaxSUaXAuHMFphLG7S3TjyGjtVxvfMaMuHwPHpmw4n2pkvmY2zZzTwsDXKDBk9dbnm15dm",
  "key47": "5mENbTRX1N1dNjD3pe29Wkgis5vfWRUXyLdZXDe3AwuteBprGMStzQZggQvm3g7z4SBXw3MtC3i6YfYSCZfmuGdV",
  "key48": "2CzNaFJZLzFaetgbEPFagZZ9kG5HrrtqDnXqhwBcQZCVLscXJ8ugfW7VWJWMf4XN4hRCsgs5j44RSShWviGfsJvT"
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
