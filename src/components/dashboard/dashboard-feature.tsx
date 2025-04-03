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
    "5rcwH3Xr89819d8tf3iE2zgDUT2TLZuY8EhP9Xm7zYMpkr6dGaJQoaemHPucjyQRca3W273kPVemF27kaLWiJLAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3EjpFQ88hBnHuFfgzK89kk5e5JaGmY4pkXpEXSRPPXHLeja3tqWTr4iojgSBwW8yqyQuqyZqBKhAj98pQAi3LE",
  "key1": "33t1LwT8NfzXKW4wGSicB3272BjHGH7SCPaPVALaT7iakh2jsG7oY85BFNDcqMmXcvi9XNHUTM1AJ9fg75HVanSu",
  "key2": "ugNGTeNRgt8fG1p9q8g5n8MuQTD73GgAG7mK5FL3D5JW9tDf7ugo3hsuaqUTAQkPqR6j9TPwuBhYppJ14GeLxfD",
  "key3": "drHevSC7yEoLApSq4RPLvmAHoX7Ex3oDtkctuMyn3WHxWB9iwMPqQpWQUYkbFG2qC5tsWib1A71YKDBuFDiFFdN",
  "key4": "3AxjfJ2b1j3ebTNWRTxcLjfTAx2KonDn5B97eAyksDVP8JEo3zaxtTZAfpJuoYouC9bu2VXL86bVFcDe3nF4ozoX",
  "key5": "4VENVLZYWhfoT7KvyvWB7vRRwqRggrhu52akk1LELhgAH9XBYiGcsdGvJjJmdJ9S1BqaBD44tY8fJSvkodUdvwzE",
  "key6": "2VutMcrbbrQiNwMAv1of4CGmxgcn2tQZ67UbMp6xHSN9C4y3MLMGjspZKRGs4u7tHYBNUSw1RuykVQuHt3jQnnLK",
  "key7": "4cfkSwqV2chRypRRznUTjzdswbXw6tKa4RoAC6SpwuWCUFWTZUwChQerqe4KQYMzuLvKedrPxkiSEQJqPYbFujdP",
  "key8": "5QmGU7QWyn6vBNxRRJBzzuYqYEwP4nWVqhAyvzWiwijUpUnqVJ4hdUpvTVUjxJoALFxT9DovsaNQG8JSg58RmSh5",
  "key9": "4woWRALnoThLgo6ZuJvDUzBVMBEDQYjCx2zZbp5tf1Ee7AUjdPGLLaLVTnzBL1Smi7hHCiwfQtvh3wGZetX3BhPM",
  "key10": "5Y1LAM6BJWhJbijAk3LDmDRxwDn1P6eAZxqACNtV3mLzNMcj7aNA1PuP74vespz8Vkb8diHoxe7FtrtSvJTcq2BA",
  "key11": "4MMYgSt6ENQVNqhZFA55vihM13hjpVBRswFW9zD5h372qByaZE11ytdhr5fQnaMxxjZrPBGErjsG7KQBZ63rQye6",
  "key12": "4qXgH9W13H5mF43dPBQhRgzhqYqypzNmAeTMTMVTxrGxU1xkhdxGfg4JqiCXFaVz1NBWnkJ1MDUyNTDh5nj5vgvG",
  "key13": "cbyeYvhxoCxf7FG5QC5PF4DvQCmY9Dt7wRr72GraBw9DVnBm3z6nsWL3NeZfsTU3RUY7YGg3qXY5hJDaibR4Xq3",
  "key14": "N3emzYSP4XB8Ww6QNjCECqHxSQZGk3QQKkg4CcBJ7CMhhWZnC5BRD9BZRqKB6NYnK8FvKeNbXeUB8uKrt9JRCy3",
  "key15": "5rJ9Dr7D6XPDqJypYj52Pua4yHmrwEak7PAH96qEWWKdaNsRcSiZvxSi6gsiAkDuUZjnswg2Fqss8EV9U2fiXref",
  "key16": "47tbh8JUcKyQZxscC9vxz4K2aLuRLVd1HFLpUq97RxYXPd7asXibqY3KS6K1ZEx2wXF1qsfEKf6S1KUeBqtzphus",
  "key17": "2UAqhVzJAgNs9iypUwpAB4rF3tFBeGcbgS8cR2jedJjrtMdcLFxN4u5SWjCPt4LCxQZKZup5gHRmKuacphEp2huG",
  "key18": "4zbRgGWWJHXiALrDHTmDyELe3djt9risBJ8aQwntHSY2BFWcrTsJZEKJJ58aM66eUDdvkbm9yfouicwp75QQpVTi",
  "key19": "2AMrAXf9L3VTfY3d3bKYCAZP3uFgrZsT8UrGd3uYYeWLwjU9XJZfV9UuivkvkyXFxgnidbGpkRwUXs6mLe92SUbr",
  "key20": "66ZjnLMm35UgGZ7e23Xw5DgeDqWpnkzJ2AVFXBMCus9XUkyRSvyzDuFcphsD96pnUiSVTu6GDgskg3L5HFjqGQLW",
  "key21": "jeb4yjbs9ACTN7VCVEEbhqeXLDmjfjGqCV1tnRVGKeMraLSuAYu6eb6JLmi3TSeEcSkxjZuMgcNjMyvrEpfypZd",
  "key22": "aNNmp2hCkFBYkod4qrvhbQ8HUt9c1RhNVJ3Nadv6jLjanBfMBaL4i7J3rxHWBaVgEyKWNscxKzXyYSLZ1vMNRis",
  "key23": "46UNEkTK1Y8D3F7qprDc7qm5c5aCqgufh7uKsAH6jTjVug5yxnHvW49SUucw19UfrzEjP2hfkZbm5k4YpawfDgkg",
  "key24": "414b82AVfkU18tzWjXqJUuW2TZWZJ1HuEwV9UVvPxo9vj65HYk1fwK4jBymg6ChQiRnLjLJCjU7Rh9ygjERh88Sk",
  "key25": "2cudLsRqML5qawoofeHEkJoHGK3n9Kgoo8KzQr2xAUS4Q9AUENk2ARGXwKi998s5LQqavimubiGrPhbre3wqSJv9",
  "key26": "5gQU9gbtdc1sJfo1rpS1aHidYJ4jHNvbtUUs8oE1jiEzK4SvDHQN8mgibEh1vVkRNmxtMizte8utxb4zxLrNRPtV",
  "key27": "3pwft9SzDNxf8NqpE1tGfVa5UuYx74fsEX7w3W56jUYXx3qKkVLiUW3Rq3ZoNYyjbA7RDLfr5ccdo94nxUJ1j1uv",
  "key28": "2H5nknmLYnRDfCKoqiTiwvJf3A9Hzd2GmcFnC62e8EEQ8XUcTU5LBBp2kUnW9L9PDmf9ekWam29LsSLs1SGNLKLV",
  "key29": "4JgxeX3VAE7XnGsT6wrWnfmeizpUGQJjCkBjN1ASdqwntokL4Tks1K3tTFFmRDYwvCTqByqAQqG92GDmdEBoW2wj",
  "key30": "2gST2tYfT4oc8qWpMvyA5QwTKKjkDc42V6Mtr2EnVu7xiiZb2Gu6M3PvpkPCQCFqwyqYvZDSCwsuAK7XcSYU7KBf",
  "key31": "2kGLyPGhN4WdfLvDWr7h3jGCM9iN6SBW9FK1rWgep3ty5srchyYwENEXcV5oLyduDYnRqjXMAGt3c5kninJrDu6T",
  "key32": "32gZT4xHw584NDUKLid7Fxt4RRXvjDtEyg7SwNL4vLmTcrpGAhfiMozqdWoMRaUiYnSW5pWrqN4Kbv2YJgMRekDm",
  "key33": "3ZVXiBKje4tbmsCEBuUdVNjvPnc88tkbp7U2Brr8Uqa6pQZSptbmGFARtK9PcpMiXVV96m34VfEk51F6hGZFKqsB",
  "key34": "3cFeKYKpz6x2v8fCBJLjNRmBx9grGZo5r4KMFN6Ar3XH582xRJdMvfN5TGP4M3geFo4WvvXu7Zk6U57y8ioP4po1",
  "key35": "126JdSpY3HGgRzzKf9Ssd7yPx2BWGPG7ijUH8NGNrJuRkJZ6uKdEt3VGP7QthcGPsTRXv9dVC8odkENXe73hu3ZN",
  "key36": "2GhNboNJe1NKC83s8ATA13aKpdhzzdPatrDEaLQDmFvHDFNRZg7eTLcgcfhYVyjvR1snSDYQRRzM6vrGSw8E7FmL",
  "key37": "4NyvdsqNJj5zViueQL3aBJTutZB6Mm3jqR92eM13dYqfww55YZsH7WnAF1SMe6sD13jfL6cgam7xDoWZWb4sDpDv",
  "key38": "4heCdUkVvytqUVcLBbn9265yAXpjdUUHG1fVRk3SBcm2jYLqDi9Uw8Gz1DRvz1vGHCHQjnvR7LWJYGGAoaVvncTX",
  "key39": "sUzXGqdCWLVvFh7xNjzfovHkE3uoPr94mBKxawjTgfEmR818BTsMB5UdPJQgL5DLSxUX7xkRqN1y1TRfKsMduMj",
  "key40": "3EmuynBQdVTiP16mqm271Vrp4QCWPnBLcpXLK7ib9GSrccuNuCVa6mcxp9JV4HLtLW87k37rN8SG87BDZE15VMab",
  "key41": "4dngcdGkyFpRUtVPb8i7qKtz1kZMERpAmyUKYxeWBrnbuBBQWjMGnYopinCwcc99kNp3KgmLUekNGR6PiaLhfwA3",
  "key42": "3K91ArJo8aqvaTpPC4z6n2XQGv8S5LFAL2DQDQCbuqVwjVw683w8n13XGmhRtjwDTaJxrMsxfJWkXFNduzm1b5bn",
  "key43": "4EBUKrgtNXVzvetvZsdyWur18qSuaEJ5LTogrnZmCzNtEBQizv7AhBRT7yrmhyAMxTzokAtzZtoZdfeYzoVpwWGm",
  "key44": "5JL8BhMBtY9JtHkGdF8EPDENKhuQYFjGuH1WzVD8d68ihUcMbdcGMFdPPxzdaGxpUDxS3FY2UdBbbkSNaymiGcwo",
  "key45": "2zvLjv6QRQkA4Ca7zAwN4LpSGw3tWaQuQ8M1GzBpMTtJa44EUZSJ5RDT7Vb383qCfK17mnQbAjrbChWg8gAeTGsL",
  "key46": "5s8dQh23AX6teLcAsh5n9PA9wAPdM5HUtuDkYy9zuztKXv7z39iNfinkJAyQfJyWeQZPJPLLAEaMRixuuSyyUVZA",
  "key47": "5JWXjcs7biTvYWE9pfH7SrALKqz2fNc3wvQgsRvVVhKtc6YAmBPzUDLAmfm5FdUhAC5pdH1LmgmeYrVDS64biAti"
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
