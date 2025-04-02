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
    "65TmPDoUVqCEoMxwPaAGrJhBNn2SEERwzk3BqsNP1yQJAA59pPKbAuJqgwdYtKrh7S3bTzmmVkGkjPeRUZ7pS229"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DB4wHarYQ5SNdjooq7Lzcqxc1xsxsM7k6BJS6wKVTLQUaLiyd2Gu8gqHkKMeSv11J1UpVCtxsvLg6F9xz4tXRo",
  "key1": "3soZkJHT3yHYQhAJh8cerBcNmWLGjTHA6wiWKx2JvvFXawbSnNDsAfAVz9im96a2vDa861ezzyH8EpvnS5gzEbnF",
  "key2": "3u8fLANMJxzC6ZWxbSmotkrTL7Qy5zNKQVfdCR1RroMj8h3qHmtHkc67T1qQmhooojTaX5aTFbXLkvNBiXok8TRr",
  "key3": "3etkrFymyqGbogUsceQCSEbsxEBa1yTn7J2Gbzm4sZp1G2pPJzxSgVZSQW9q3YgWjxP9bPzetoxggoGdnnnG4ao4",
  "key4": "5q15bDtA9u8HeZQ6LTSF1PCMGiCMKfG3wUq5NDmLnnmawd4XZhd4E5Eoi2oEunKmtezphVJce1RwB5antLCXK1Up",
  "key5": "21Pc5GUjSP7cHMuTsoB572djSHtgv1pg9e3VzxiFYHcG8hDkaiMVdhD4zZDuKCgyy2mTgyRJd66WDdauMfauL5b2",
  "key6": "ASHtiw4ZZai2YRU2HSDLmMnZdD7Hq3zQCB4sfR9Kc46hxDY25kpMfxNMHkBk1VqEwuVVFUfuKZ3g7PbPw6RUqAf",
  "key7": "39vCNGaa6sxy5jazq65v6wEaV3mAQxoza37mv9VjXYvQw28FypdoHzaMVGqXKXgUBwG5r7v2AGMxFeBGX9vvRVmp",
  "key8": "3T5S7BwLbQbBhA3SSKP2f5HjY4Wh5tXqtk22NaodsB31nqFWUgwpWRpPQXKD5e6MH6zYaxeW1aGABFNRRewzkmeY",
  "key9": "3jAAtgtPPe3iB3BBXCrBqv4bywEc8HXtK9q7nyQbZStfXGAP5Q6gZvtvkirrFzSpziAhZAPXuxHnN1ZYaa3ivob8",
  "key10": "3ZPbH6WbdifSVu1AHZJduEShmE1kkYcBZ5M44xowAXVK8LnTVPfGNstxhQngHGRVCUzXPkcScN9WTLKGA2scCn2D",
  "key11": "2niQKykV6jFCYqyHzpB4SDnMBUdjog2Aa33HEqSdnsKaX8sxinMveTPd8QdLU37Wzj9vKQHd1iC43KEsiRVh5dMz",
  "key12": "2ijAAEmnj4r7Pw2VKovjkAPRZLdPYLnSGwZ5w12Kz2gSHgmqx6wGXLZCPwfCviaB9Nuy53gVkd7i1SWGct79FcBA",
  "key13": "4b9TSYL2dheH9AH7Y9PDxn4vcSfES1UhsUhv9djzdkr8LUNnjXZcdZT12TEucw2N5wMAWbAKSXfXk7JfYSWHKwWz",
  "key14": "642Xrv5fZwP8h4sVaRFg9xDnFyUsgEymoCTE4G7aqj7fKUi65DGuxVaigaroK1q3JjdbtyMpNsxUPV4JQGyEPZYw",
  "key15": "4tsJqRpMFT6jSqjBMtbXkuJS8KFtUAkdEavwLWHQncT22bs31xwGtStAcTHfSKHePqZQGt46QQ3tvGGoc4Nk7rAY",
  "key16": "AumeuaemyaeHPypqkXy513hxNDUp6r8UJvgQian9Eh4mphBGvL2bwH4uZCtgN989HCZRykJoxn4kBojRowvr8WM",
  "key17": "2CNH7GEyuygFPc7Aa5JBs54trDqYUNMRX9AYZBfWR6UzS6wkfxx3cLC17iGJXWmiV95Yr5HVPKqz1CZYYVT6Phjw",
  "key18": "ko4W4Y9SQtS5tWUS1abHMP2bWiBgKfFxqyyhDC1FnCTAPcmNyM2koTx5HCoU4GymDAFidAQ5MJFCfBzh8opiyLx",
  "key19": "32JNx2uKbotrokCcRipiZ36NrZC25vekNuenNhGa53hr5vsKKpjCZ9CR49MXk5stv3x9rLnZJAdHVbzeBiRnGP1m",
  "key20": "57FVpon672CWMgvN3AgfDpkoVnWoSSJHxgT6LfpdXQ4jjZQSXWjVQXJJx7qeQkpzuugNE6DMdM2vWLFT6eTt77He",
  "key21": "4w5Gt1xKwxpsX9YaNTN8BKEPgdNkk51NuxDR8pDVUXK99H7KTmdvrNqwQF67PK5x73ADp4TVFGZaricfRwSzxvFE",
  "key22": "3Hzm3RseCrHcDFidr21UhrJXBVZQFggEHDUVUUNrgfTnFGks71RAwRCcpSY7C4oNGVEKVsFhKntzBVTDMUJnRYJy",
  "key23": "2NtutfcmndnmXiS5M1zm4E3X5LmpcfoyRncsyHVZRpinC9iCvQ9146g6HvTpuHhwHxuyoEPXb1GsoJedgtCsusCw",
  "key24": "2BsCiohcRW2WZKN6LSmhJqfCEpKf8Hf51bdbwJD6S747gA3QaBWWMCrbw6RXiN4thY12ogp55HmiRdpb515EeEB1",
  "key25": "2FQEBanJ7aJ9njk7aq92SdGKRf3tMZrqHX2zBdbE36DDBLBWVRXWT5HSxMiP8Mir9TuDQJepD8gGcpWy53jL8rcb",
  "key26": "2K7vHW7eTF2tRUB5hGVSqy5nZvvM1LtiBRKieMt61wYKLi51dESePvi7sZDAtC3L6Z237B65tpuVT86emrU2NEBH",
  "key27": "8XcgWQtY67KLVNeoBPmQAdGpnAa8zbjG7M8oC24sWtEuNG1Q2mdm42AfvtrCPTVo6JoTg3xBdenjjsz7u3nNGfz",
  "key28": "5wApdkDrWwAtJkYXcoN9nCsyRcm3mgJdBfwF2J18fTaGxrpTDgQnw7GNW7HLQpv52Tjrzuc9rZaZNmNHEtLtNNtH",
  "key29": "5GMaQC5W2bvWsmoStnd13PnB9WaHoXwxxAt5pXfXEiP61kPR3QbaJaaDQcAJAtj2q4MtWUNKGTLdgfapog1dHD7a",
  "key30": "2MA5xw7txXDToUaSrKQznvB5tjHka8JtN3tvcr9wSVpq3aNCjw9UKSzom8eXM97uvQvZn6MCzgn9asp9xR4F2siz",
  "key31": "5XBgZQMPmPkLSYT6Au9MjQSb8D1xcBW2nt57STAjX3p7SCewiVzApzgV8Pi53aHHaFsTowTSVBKAD8fdu9wxRcxm",
  "key32": "7Pg6nKE9kiSRQ8yyrtYSFYXFb2tJ8qWv8KWiq1yfGsqjKjaroMo7w2n5R46rices5yW4vJ4JnEGZwUK2pw1iaoG",
  "key33": "jBhA4DfQRjXFmT4HCjB3rsgWC4D5aeVVwk9QLTtDzV8LWUysRWMKoGgBP3zBHX2yrrHvVeY8M5N6btL3KKc3trh",
  "key34": "55GzRmiHh9AHvQS4JSVCFN4ioAxeuqGBx4trV7TmumcbhkzjCbhYVB2N42XWWSDGA3AGbV1TaebctcJPskukxLuu",
  "key35": "XnkxjaRmJpZpmASWqW9MJQx4oYP8Ctq35rDKbjn1c1aAivrt1AJZnwAxzWnbwYKMePSdKiNb4VJJ7J6eMbhcLHk",
  "key36": "4meejHv7Y476wa9taG8LJ9HJWS4Nt9CKDMEbkuYDZKCGpXjSeyz2MRmLAdj8x43w39QtRPU356VjPxYfAjDN6KZt",
  "key37": "5cshygcQwEi3i1sKid9EG26Uc9mvVfGFYVABVwht9hWBr7MNMu1pM8jFFGbSF348a9enKbML9MGuWfUehHPmBZx4",
  "key38": "34BBxQ6ZV3TQmAzn5R5BcQ2bYqKS9kfqeDFoHWJKHuEGUhxxizkS4PEUuVfNhsKnCp4K52nkpZQ4jAMHUE7Wjv7w",
  "key39": "3fV4H8SENHpWM8CfdP2ztCDzMyHRKzM9NoccvN5qTZ6zHreu3JzkmG47nzV8kxjZauTWkY46VTJQDht3PNY8CBMw",
  "key40": "4h4cVPe4GHCzxB6qBPZDnzNHWsAv9mvttDrxmWv4Xw2SZonWTBYpzXH5ssuksrHDr4FxpU7Spu34QecJtnvJaeSW",
  "key41": "5Ak2oiePfazG9RxjiXER2r235fDHWX9xsjkmFg8XAjeXYKjGPGkiuGE6vQ9hS8p8PNWzkj49V4mprRAkhW6m6zwP",
  "key42": "3tEgV4uPob1j6vGPSX8X5S1uQ3sdeujGeQKnDbbtu5xeR8VGZUeS6LYcNQy8sRXS36pyghCoDoMQoCyzTw2QzqmC",
  "key43": "imTM7a1Kmgpzin4dWpRY3SEEEsXPfh77vQHox3HjTkD4Lc2CNVtXY5E9nmkAJMtr7R2aw4dbDBv6qgxoHQQi4zY",
  "key44": "2jBQtPAPd9xfdTHKMRzPKipVg2YfJCCc1vDsPBRrMKpXdFmkFS2eUfB2S7cr174echSFLbKmMNG8CX5BTADBdKmH",
  "key45": "5itxzVMndEcRMYG91jpYt6cmbkufGxPTPfUfEwJiEoG3zYeewKZuFKWgHgLVkCQxaFxXhjvqXeNjN8amuw8FGZkc"
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
