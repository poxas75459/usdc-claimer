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
    "2waYBpBxAqgpYXX2xyFq6rstBSmRKZ4DD6r1itkCjxdWU9ziecFPZrZH1oVEzspQXXXZQBoprjxXtLvYNznHzkfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZfisRAVZZdCXRXBNWgZhtDmfvvDq8xFMhdSj8vVCepBCwXHk7cZhwEkE2e8mjpc3YfnroQ8n3PNTbyZVFD9QTrD",
  "key1": "2FhQDFmqKjZUQmCd9KgwBcL6xM7o2iE1SmRJESprcfrbc7YFdNq5tA2SSuxUBA7JayskvXYkki6BGwrJWqMu7XPi",
  "key2": "8VXktgjnPedvHHJTTjVvAgFFp8VzhtkTpmgPErGipJDNrdfSqgc3JUtbDGj3eLVpFavDjjJxNLqj1YJ9qpDic8z",
  "key3": "NuRgXThVsPqP5Trrr3wABPAUFAgbCCEGzWEuR9BWXMpJqJG53wDgpBoVYERVA1JYvMNtnDiATkoaivsqpRzBdYK",
  "key4": "67AZSFKhB1Nfxat56J2jm5j8u6iJjH2FwxBFCt2ZP5roj36fS7WzJuGfcc8w7riqsAgTybbk5tGBgSML9TtGnrjA",
  "key5": "4uCVDeQRKTatD5ZwP2kfnTDTHC2yUpVEkNtA61mjiwVyad6BB4FqRVyAMQRzn6TiGDinNFh4qoEvxaMVpT8PHHGr",
  "key6": "2F7fVZsP7rHcVSmggGjGnmfKK4rH1npAYWMxJvfkzKwAZjyp79dSYWRxHtKwqaVpmQydzKLbPZ55FbrYbUGCg2Mh",
  "key7": "5Y6mAvvf9jrYqXTE4gwfFytVqqoH3tLoKKMs7EkVW6fyMaG2pAfMJ623LzUvBNcRLhdHT22ceZqBvKBs9tk6fXCA",
  "key8": "5SsxhRt2sB8X7vCcm8vnf9m1QYSB5ZAzy8Ebm3KX1SjT4ygiXJZdXoJF2qyZGJMp62wa5Pab8fSEx1v6BhEB6dPF",
  "key9": "oBrvptQ8GHWNadg9igWPvMfnqd6JwExY9fxjh6YK1dcfUXJiUkQnaFzNWzg2erhfgNZ85aB3C3ZXXdjfgKyt6N6",
  "key10": "2YcqR8jFgzMZZ2Zd3LMhwmFmET77Aah4PmSwVK38isimFYY77nv3dWPpPTmmU3nuoh3BRKt9p8L1iadUjoR9RgNB",
  "key11": "3aqLkGQf7Wo6NJPZ6foSTSy4jPr5JCi8FMmwogA2h6NNWuXGHbRLK2Aknq1NrtSrfbyEippSX84iWTgqd3VRSTMD",
  "key12": "3fC6BiwpyyP6zmJ7E8b37w3Lo5Njy7sVzs6QRJbw5XKxBMMNhZgna46DNDrYFntSeXaoan37VqmhuDHLzpy8L2A4",
  "key13": "2kY9DCteWAcBmTLSQ7gCDhLQQF5tN6Jh5fAntntFeS8aHLMr5KTvdrqcanZBWRvWj7D8zSZYkpx6H7dJQrb3hXfK",
  "key14": "C7u3PQqQKpqH2gb1mK7uipMgCpHWwG6TEtjtZUDCHFkzdCK6fLchb2EXgXvxp3EJT7rH2okNSf1hbxoWpnAGA4w",
  "key15": "2LJkTD5dbrpTFPtG27PZNJdjhkSWmFr4qGAFdHqJgwPvaaMVkGEPhGEW8GtxAV1xGuZr97UwX54Dzna8zEtNp6ma",
  "key16": "5TnqH9kAmB8Wrr95Q18RwHtwGrQXgVu3duooeroFeExCwA7D8U8mVTtGoA9CrTFdMcE6wsUQdxaQzYQHq4aHFZtf",
  "key17": "5xyggSitDruGPE3smcCY9vKCx6qgGcABho5qaf7d52htwAMsNH2WvGa7PxGR8HutnNDcaY4VzM2KyYdf2pQG7NwJ",
  "key18": "ndPUKPPSotmmonc2VMo7fcEaEEHnNNumxAtxNZ8ngsaq3ba6PGzkcaRB5nNscoMbXgnAQBH2G2xuZKJaGmWVFSx",
  "key19": "3MVQZ4R9LEP76HpUGuq5XNcpNMg9G3kCYJAHvwvBTbSiFYYac2n5GS1mo8TpxVAh8dFPGeAuMiLarfNYepE33Fxn",
  "key20": "5iCMxS3yv2jLciM2imBmAR7JPFo83hGxGhXBKhjf7GYPJtdnZosfKAUxinXw61LFwW6VBB414iHYY9eG9xvXdr1J",
  "key21": "5chtCYkiEGTpexpCnyMBESEjYE8UfHvnw845C3BXcUZqtDkyGZo88BkSNDpJPZZuTToYZv3q4Uye5i61ryZoWULe",
  "key22": "4W43pMSyCzxdTDizMxZWjon8WznMqc1gCckidWLQad6DM9aekisVisdCcKFRmYRK4isNbYVnLVZcTEkjH3GVz4iA",
  "key23": "3BMBkMtkPwcqSRJcihu16eJuEEhLsBpmFWBTkiSYGWKrPgPt8Prd7pVfn41RREqN6knF16qKSHNJnR7QYMM7vu1o",
  "key24": "5Lu6rPHGS86Hji5wYR38KeesjDS2V6qpajG7aakeQsmRAbaERJaLPXRJq8KcqhPGhYqrhCvnY8bCsE7BmdEGoTuL",
  "key25": "mAF5wzc8xGymnV6AeSE6vS3TmgqtgCUqKnq22ejmR9hMZc3sBeh8oB82zQbZ3F2rLAgDJzvciVgznYAFjVuLd9i",
  "key26": "2gBfvJm7Ri66hrUTZEteFeG1gwD8jMkbDF74EJChSNPbZh5PW6spCbgmCUdNqtkTvh6bxges5YhUh7zJZas7anTg",
  "key27": "2uNEeiY26ca8cerVCNZ8WUBpwEBRf1rMi4BeNyCskz7dzkAmZD6k1a5ATyX4TyKg9s6HJ7AsNQUyv8YXAYdX1EQq",
  "key28": "5nR3kSK4NWcZz7gVk3ZZaRJ3bhHQBS2efjQeqgdLcdaAVuDiLAzZG7kLJpHBjDx3q6v49kEV5aVprFrFzoJrPiUg",
  "key29": "4Su8v6yufju62scjzZ1o5QVuG8LHBBGPQat55WsVL6CtRFPdrSt9WMd51DFmroNWh3hQcycThwJ3QtBGiBzRPPRT",
  "key30": "2vaZF6Y16TL1FzHiPotsUFvPbb1MjZFk3eFN9rYz5eHYCn4DpcJNrCCKU5wh1HkPjyda1xZjEj6SdEw9Tk6siJfA",
  "key31": "5Ex2gbJUvn2L8XsYGh7Lbt7YsXiinn7H41cqBc9L1PX86BPmAnwpTUkaJ6jiCppzKVa9rD5Njjboy9xdyNa8pd1Z",
  "key32": "FRiSUeYKV6hX8WLMUmSLt18z88uPDc6GRJvmRMjKYvtpDkJLgWUb1163axCakpNS6MBrXJ7zrGQ8TWrTa7Tq7Ab",
  "key33": "5n1aHpbxLJtfwTsEgkpRD63PG4xNMnnQJVGnRnciPrHkLfpD9EfqMQYQr38SNXz6cRViiukYpZ2ir55GzD6FDHza",
  "key34": "5dGb2zDfMhSLYt4vfoA3g1XMNveXc2D2Sc9dZouQs8wJHVokMBqZ5SqdbXeQKVrvnUF79W3bh18rmge2C7EzLJHb",
  "key35": "m3D35hV42AUejxKuASoPQTuGvuUpj7datiPSmCrnypq3jrmAFi3omZipE6LyXLavTyGWNjyASbBDrxFpx43vxAA",
  "key36": "epHw1D86jYwmammJjzjmeMgMUoocaUDFPf6bLfRC6h1e4jnWFdRY3i6QNCZaYW2Uw3U9MerFiB6C5nKtVjd4Ypb",
  "key37": "5o189g7wZTKazeM3V2ViSPq71hyk4NRseDgFQngSUYz1PGcqMDQv2c8QvEyhswGJfZoDxNzK7koE6GyLitWybwZp",
  "key38": "21kNYZvJTfsSkb2Loo2CuG6MRAMG5aKCaDruuuZgsrkBFiGi5VZYxN9PuPe9c892TqBjgFQMnbPQXTEwi5tUmitw",
  "key39": "2RQxq5Q448RdAL38ReDTqXMLyQGWPx59SynESVJw67xqtdK4CKM7D6njZQ4Y1TjKYigZmd3WYyLZqifqewy7gFEf",
  "key40": "4MUntp88Kbe1q6fsdYxErRvkRHQKP9k1zJX24RnGYdJw8vntaEG5jeAiM83kCHARwZNoKb4VgvNXpvyP66EaiQRB",
  "key41": "5eb8vQqE8L1LvD3nwVaZc3efNTKrKq249ypr2GmE2RcVC7CaAnbNAyrUXgznUTRinwyh2H89FZ1Yjs9L9oNgwFGm",
  "key42": "27krsGi8VKFu6cCfoxzn2mBpZNLZpavuGETMYiC29JMEbVuVBpGfeSV6fY39SSz5MqE8Sx6XKT6F4phiqNbQFG51",
  "key43": "SEYSWKdNWkmb4ofqCoG97AbomovHbcAbiKvvkFkhdGewBDJJ8JScRrqQoKHA6oFjjEwdmbkXfVSnAMCW4aLH8ve",
  "key44": "5zBEaSMtB4dgs6L9wQdXj4xh7MgRBumWgkVtrNia6Y3Lkwk6iYn6Qnz4aNDhUbZ4j8sR5vaPXP25ptMKEZyWQP5E",
  "key45": "scdYhweCGgnm6pvFjsfvDmRvP9Wtja2frScE6ijb9VnMNVhrDfYqyDeRD7QAffdDCn2osm5AaWi5xBGgDDjEnyW"
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
