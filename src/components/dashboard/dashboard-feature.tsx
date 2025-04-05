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
    "3fUtRk6rZ3BruPg41Vz2juNMWy9m74G3a2mqXkxFTK5QwsHCDDPUFedENqGuARCSHLgDvTUDXRjRoXyTRBDLT9RX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnePHeX5abMFe4HvNq1R297gzzPVi8c4jiZcHUp8fDMBm1ww9n87wik5sSipdCAhaa3mBkCc2ymBSESQYzTXeLy",
  "key1": "4m56WdmgqFtDChNuWWksuC4jEuCh6FGbcGUWEL3KAvJqWBGsV9L4nbBo3SGNgQhjUdLnV84gYwT5fFzimiC1i69i",
  "key2": "4fR9RPBUJiKbmJfy464Nuee3Lq6Jj29WeEei9imYed7URMxZsVKCdXvSSi29QAKd2dpa5aMDQ4HQ4p8sNyRmHWpZ",
  "key3": "2JofchKNzYkyNHJfV17pGr3vz88Fc8LmKgsx8ZpmYPvUfxraUsxt86SdpY7PHcH72BxRzJUoGkjSApUutLJmucko",
  "key4": "555MQJ3q79NtYW9WQAXpLZ2dmmUZDahW99AZsGrn62KnSBJgweBmYpqZwc6F1pVFouForJSXVTPnm7GptAw5BVWC",
  "key5": "5Zm9ZDWBqwRxAkVL3u7sviejhJuuVgEFuXinpmzMt2Rcq76uoQyQuzY37cVCjNfYN456UiPBSEGB8b9qha3uY71B",
  "key6": "5491rozM3WtpFRLChsKdRvmF9Nsowch2xAX2N2w5zUZem6dFPeQ1Ay4D2MWusudTo1nML1hociFaC6LC3CAeXDYA",
  "key7": "3tTA4P8itE3UwFmQSihCzt6kKjAxrsPwniXi1TEXn8Dn5WkWYnr2yLvFncnS9STiGz76bLWwfrmNYZ2k5vuFDFqZ",
  "key8": "36yrNbB1b3YmezzLeXLqAqZqKV3dLPHLi8hpxuYup989vsTm4KyG5FKcGppy9pGvvBogmZKHzUn6Cg8oaY7mdUyZ",
  "key9": "5YLvABmYEapDi2Jzgt7aXKswm61fZhRrYWxYvgohR6FAbVqhKSQ8tLXDhaxAy5h3rbeeNVLREkA9wtmvaKnmmPA1",
  "key10": "gcxgsBBpBqhM53XwtKFqGJgBTTvzwE5HMs98vokAjNm9LRPRsMCnpnBzUbthGNc6TWc4RLqrwKTaFtBRzqAnGGo",
  "key11": "5NYQVCKHHZwbDSrZY73s3RcnW7rkkGfn3vPxgGYzc8fju8wYZBK6qMFyA4G3QkEP4Ri3NFq2uYzZcfHiha52n1hr",
  "key12": "4ergKLEoX7Tff4TJPbsFjv2nY93bmTxkpPi819RXpQQcpFYpWekX9vjbYQR3z4vefzSSzyggK632G8MD8ejUPp5m",
  "key13": "SqAKs8L17kWabDNoDzYmSyAb66YVTodi2H2mFsoxZSeYhtF5KytWgJRrCFDs2bufnS6wNDsNrzaXdCEcUVhVXSC",
  "key14": "tbWf6SQTK9Kn1BhbLsgb3scf45Nnt8jTTXXfLgjhNRFMyRkZQrygPfPh2eYvfiPTgJRRP64JnKW2UjXjB3gSsKV",
  "key15": "5fKVg6qLm2tmU3XG5CvyMyFGMD9A7qGkkajXBvQhXJfz5u2PiXsReaqaQSsjXZMXppVMdeFYEWqAELFrrbxjCdDS",
  "key16": "Ben8QyxUQaYT5JBuYpCaTrMSFyn7ef4fWkjuE9HFXjwPTngP6LMJ2AdWK9v5gryZw6Zr35Rvs7FWQyDqDDjVgHi",
  "key17": "4F64CodPcTvxGvRzbaPxzKgYqktzqByhyQKUBimYcv7FLsRv59q9c272j8xKbZswmh7VDzYU5RSZ6zLfKZdWnLfS",
  "key18": "4w8fqrZrertzte77C7UvrkPzcKuGhdMBbawY6WLsTgsk2AvVoAVJvAcn3G4RxAFnsnpfKzzh2bLU5APLxjJubPDz",
  "key19": "4LZ3KSYDNuJvQpp3i33bCkSNUWuqzApeFebdu9sPbMaQapNviBQ6E4oJGFNUFBW4Xy9yWeQd1DjRmsbASG3q1Pex",
  "key20": "4g2zbS9RzvQu24hi3CZP6Zy8zfUBqfsMRdzxJjRypxTvavytPYByVyh4FfRKnMn2ANYnf3RKAT3P87K1rUo2qSsB",
  "key21": "3id2zfLNtw5YSQQnY7b1TD92jXUZ3XoJBEiKi3n2oAbaxm8ZQwnZ3dthqtSKo1BK6yYdVMFA2cHjBHwyjrYpVqo4",
  "key22": "3hUoKW7RTsbQbmZVp95qPXDPHknGw3s1GxsLN4kPMiraAwHhKWxhs5jPELrjKr1nc3JPhahrh6MpsXydZzBTbEj",
  "key23": "3zmoYDgi2wkzXKsWX3iY8H2AuqEo5rXVaBR6LvaRfVexTkDhkjBkNYwfowt9MhwMMsLGmN7GhidvvnWk8rbqUqL2",
  "key24": "2G8TFa5q791BZYapPGJhbRtr9xTLftJvf1zcrfmcToPYon99SeL41iKFgcJkUoEsPaDf3sFDPUWbBYer4wgT9Egs",
  "key25": "29dKf3AJoGeP8rjrDazicxUHrJZqWP9ZoZN83ijtLh3BYvJ2hGHdGrCCBqagHY7xxJYKHqiRHw8FAeU9TnNnwZZ2",
  "key26": "2y1aNfa8cErbrk17SxYBtKtnRREMtRurxGmA3KhjeSzLE9av2NT8NXh5YmNjzfkN3Jfpw9a4tLXcbPX8hYVcTvho",
  "key27": "25VE9o98pSU7Meza1aHwfVq9NCwPaVVmHyTm7A7WiCZaRVcSnQBwCkKaMCmnux8pjthybwJHCGq5hR94WGBqdwRp",
  "key28": "2tB2fUSVqFxxJ3Lro7U1RzrHa8iA8WbJ5BZrPsAVUKJMTUmxWRn37M5ytA5o6ospVFXMJn9JZFP81JtJqYb6YgYn",
  "key29": "3v74UcganeV6ecBLHNJUhWLVXWHkm5BppKNNd3MSbKLsSopoekWPwydSVvFYp2k6rq684qjARKWXrkSs8LM4mcxr",
  "key30": "4JLUTYTu9o2cx8WYDohPekuBZfkab2CmPWBmm3x8sJA4smVjcUG9xufbHptuNyhSAh9zhnMKP2YhthLc23pqitNZ",
  "key31": "2RjwzGF2zh3K7wdU9w89PEAZoajidgHtN9QGisqv8tRBWNBGVVFdeTq6rWdZ9T52mQXdmeeXFGQheSfGtFnTbiaw",
  "key32": "3ue6ypnR6A3jqgL4kenBsdNXpqLsVxv9L3zYp6kSDfk6w1uu5GBMG5hxXsRm4aQRiTSheJj9XyJBdyeQKNCk4Zf",
  "key33": "3xeJhmMv8x3Pg9Nvwou5Toy5B79ZuRJtYJy178dPQK9ESGL34NGRcsKAUii7bHVFEcVLCsFTwazNZTt3ANvGD5rT",
  "key34": "4CX8B4K9NUbbz7rkkc7vQWuX5PEiqxwT1XomVBY5b6G1hED17jVTvFjLj8rTZC9fiY1ghSSeD8n7GbVFTrVTjyxa",
  "key35": "5a949aUzazFfhVTGayKa4RDpeuezgZ5c3KaWtX2bPaVFQhRSpyUXaMY9YgdwcPhWKCSSK7oUU2X3jsVgfxFCrdhH",
  "key36": "5CiuXCUsuXwyNVxbQJpL9wLVBL9jbmQS5Ye2qete1uUvYRJMZDiUn4ibHaV7aqV1oLBsAZcLw99XZr5TaJAjLg9d",
  "key37": "21NMMdpFg4DMeHp7A2qD9uhtDxwiy5qv8smVWBRvgD4vXXsBJGWtSxRoTtU2D7dbrmpLWm77tfviEzVzWmg3jySv",
  "key38": "4FUqvLjbL8W98kDBQw3rvLSEsa4wKbYdAKuS3dQwPMpDEPaP3qSRREY3xm4g5rjxa2xWyAGKHiQZBUgttJtScZzH",
  "key39": "3wAjfkTWhaK5YLgMthuftz6BB4Tn2NhF6qPnrN1L4ePVF25QJM6EkHKoXvDE7CM5ZU8B7NXREjLMzqTG78LcYd9o",
  "key40": "482PK1AALa548a2ZkmYQziBQCoRZpBbw9rDegrA1xTQHWoXWQL6T98rkuBsJ9zai8zDd9yyMZWqZkaMs7D3eRDQ",
  "key41": "4vgGS57jbWT2zEmGW6xCHwXFNcm15fTJMA222vNNwP5A1iDcieguN5e69zwacQDKheTLbD8tJcUMoncgejk41PGE",
  "key42": "4kKBvwHw4pQ1nBaTCDf4bD4fmz98x6SEqJcNT1aE9NLUxE6MUJsA5Pgum7PfawMv2Soq7H33Y5KAhnmhAyH4UhtP",
  "key43": "4m6TXk6TtVezgGZ3e8BJaSg6VnMhxoEGVfJGRHRQYPvTjYgtpcU6c2mUEMQepayZtWSoPrYXL1DuPCPyVq4HVT4n",
  "key44": "5pVoZ6FLve43tJ6gtK6Ebrzuutks7aa3jcKisjkgCcsjuMDHCa22gdMbwEBrmZGSaNazdJWuGY5R4txPanHdhbW7",
  "key45": "3T7qiy77xuyaF5cgwLByW7k1Hc1DyGPpy8Y1C5dpR3LehygXBGZt5EayScJrRYXUEoLkY2kKKKUqNQ6SWnMDMykT"
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
