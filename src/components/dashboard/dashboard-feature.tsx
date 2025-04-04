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
    "2d2ecVtBrHDMVCUYdo9nejAHH8CNdLKy4vN6foQqA1t7yuZyjU6jvyBjMwzRi7Nbkio5jBrLWEPTKZLqm67sTVMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cL5n7p3HYcFixaHnksCCtwz3z4VKtyDTErtZbuYTkAVGiCmriWwbTqKzrBTGfMaiC9r2v3YMu5vkdmtfX7oCpfh",
  "key1": "2ApmFaF62WK5wXNo3wSnafgXNTjRADFT9WzY4Hnqey5aFiQ9sK5Z5PWcCgjnqU5vR6qimqqBfgmyQDZUs8dzMqXf",
  "key2": "2PRqRVgs7gZPGY7tqBbwjZv5dREf2iZLJDkxRQ2YTwqsycNjSdK4jcqMBAbkf4fp5EV1YsbAXM4CZKdtg8oxQmy5",
  "key3": "5BauDSVSfywUTCANkhbUkdsEPhUrrfkGbaooQX3RmvVQZ9xTxFQqPWNx7Yd37T3QLQsvBxU9JwwxAntmTghMTk2",
  "key4": "5Q4BW4idPegHpGxftcTiEcrRnYNdpPmnzjxQj7ZyajvFkdp9vfPNeRZBQ3ph9iDCq5KTMXSQ2NJgLvXiUqQgenyL",
  "key5": "4XDKmE6jksjdPXp1DwnZY4u5wQPYpZNonuuLEd65eHeUQvhDNwq1U9W4z6tYEo4j4cGau7fiUV3KYB46cvEi4kRB",
  "key6": "3V45kBFVTY6URbg41Yj78Gokij4U36L9PQuGFmHi7SP8r99kqhrEJ1RZbtgsonQzfy9ecYDmRE3Qx2pbHd5EfWn6",
  "key7": "4t1KG1NEC8eRfxSWdcY5fqvfesSkN5BY59wyWWJ7yX38idWpsErzsQjBvNYozA3SxnysQK5aZ3LBs1zKB39hpUWE",
  "key8": "4wpxTAs263xaAF86G8GNvQebboXgPLBbJEmSFRFHmkA1T2gKiVL6B1d5m7gKMGFf5K4FZev3mx1GQaxvwmi9eBjW",
  "key9": "2Z1hz89xRDFBC2XuDfp5ScY1yov8d9KU2fQUrxPEU6MpNGXmZMJtehdUno322hkLwB3yqCfgHnU8RxAVWK7tSgGB",
  "key10": "32AQsUudUfyGQprKLSQGmNYyzuaqQ34uRccLK93wUvF8UinofH4pcg8WsNZ2ea3eaHDzRXNuwermwZbPLDo8wbsX",
  "key11": "5QyM4C9voHsdRBX6ui6fVqyCGU2pCqtG9GmwPS6GSrGpJLEtbr5h8373FZq4iR5QyYxi8NfzWGjm7vZBUZQxXWT4",
  "key12": "M6ppvvtR53JwEv1MzoCSy6Vuf4j19DpWe8DT35DVzZhR8vNXbJi4q21wdYetPCxXvnH2mJTAQygLKJK7wegu3p8",
  "key13": "4HTToSdazMQehwPY3PSietcidNrG1Rueg8S2fgRkcwozb2Gi3QF2UYkhCdYXGqbdamDTm38DmstSabWvkpKEuT33",
  "key14": "4WxqD9rYgDtNAz4sGhXoj4ykfV2Cre6Wwc9qgKXuKgB5k8xZqyb3qyR1nuRQkwp8X9wy3LVjPqWyxgwaQi6pQYHk",
  "key15": "4rD3n8iJiCgKyQBVBCnpPJEJ8a7j5WCfbHdrCrNtN46Hyk69UGmk4og2wQdLk41Jt2AMxFicT3BDsdrrLZiAafPE",
  "key16": "ExS8YtJ2eMNUSu7sAC4tMAhDFvVkx1MYkCKRbFRm7rvAfm19dnJJ3CYcokFvPBP8MbYnr3o3jKduHzvWVVrnpCG",
  "key17": "2CYrwmwEx6si9q4TgQhdDRG6RX23U5dSCShLsC4oXnMKMuf5kvCsQb99J2W4vYWcEgANGmGdhykMRepkNBVK1koD",
  "key18": "7UkW9afpuBdtRKLk9oN9L64hLtJvnVkTggaAtp3sVgmmZ4on7TPzUMoJoVdsgaHiM5Jc5uKUSNzw5xg61Vs6oXn",
  "key19": "39SUquHFiS7Agw6yKvwMJmuWrFuLWP1wGpwNNtLrATGTgH5JBLxHhwH3fpcu8o1Y7EvyoPihLqjaGEwVMqHmeTDo",
  "key20": "4ojeD2Q9ydMtbrgzm7ZAy1BgzB5goayjixGSEA9i2aByZsG4D7vwctfaeiWbGkUnrKw5Khbrvg6QBeGdmb8QxzXK",
  "key21": "2YhWrHwtBNBMjYZhtwo46oC4pgLzCBj4WLu9BK2ezmLcnp84gArcFTjNERNf1KCJcZopBYzzfxaVH1bod78NHq6f",
  "key22": "4oYYKV5W8fTGMhkzpgVKrFLG4mL7Kmju8RrwB1Z9pLfMwzouXTXsTmjVyaxaScKVC1aDWWqAXSE64MS2Z4gU4gQL",
  "key23": "2Ta73L7z77da5g8pvXktFHL3bPUMfzQhNPaSy2u3aAsv9QxAc4W6YdhEKME3r6Hn89ShLGGHqMub5pmwUupRGwHa",
  "key24": "43LD8vB5rpGCSNi7KH7SP4pcMxPJLegk52pmctU828EcYpNj1rgWyULAQehzMC8Z4aUB4rPyCu1BS4fLcqNnxjGm",
  "key25": "4VuADtqiNar96881CvZShvMHn8eDQXvGXUAyYfmbpDS2ZwNzmreuMHdKm4qpaRg5szXyQ7ku24Sahr2iqG2ayeVR",
  "key26": "3WmHSMfo8y2MD4TbtFN5NSyDFMi4P3GfwqTmTN4Tn7i6iZUNHQ751QARhmaooqSn8yLmb8sqRJteo1DC2hzEv645",
  "key27": "4cC6xuAAxYavoBi4rYK6gdApeL3kgAoJegRN91BS6jdscrARnKn3qKUPQ3xdQ4tSbZERTBLW7BJD3ZFWSFBPsdfo",
  "key28": "JxokxaxMUG9U3C8g5A9P5ush8duxxUUKquqSMfut1oswBmTSVVZaGdqd59dNhDrsDEfm9wb7deaUjLnAXcV7nqY",
  "key29": "4vksBpAJkUjan41TjVuDrCD1yFd9s3fqYWNpUYbUcDxmfpJeFnTQyfb4iUSZnZAi5bo6j4x3AMBieoA2Znrvs6Ej",
  "key30": "2fvomb9qHhSsDAQKvva8kHYMqSRxXfY9HsALDqkKsabiPymrQv9eFsuW4JVRpTtobUufjey1ELCbtJDzjWRLro7o",
  "key31": "5ELGFmpyMMp2ZsNuJxUGM4wWQT1ntiTsyGnZBc3d4hNaT6Y8kFXCjZKn1PxxBTT7Pqgk976QTxAhP3LeQy1ZvAWZ",
  "key32": "5cxd2CiQYHUxjEQcKX9hWv7XKX9YbuAEy2ut3MdVnmxWG3WZEc85d6Fm6BYwB7WNQzG8wVhp1RsdLiPjwhw4u2Mj",
  "key33": "5xggfFkH6hRva8jphPq2zXKF5wiu15Bi8CSFhRRMcFHEsZeacMfusFUUUZZsjwxVhPtKwHkgMRxLHAo4Dnr39Av",
  "key34": "27KUrLoUj4PHa7c1sE8i2qRAtWPmHgCA9MJA95AWxMmtr4qAodv5DttuDXJX9Up15MKwCNUT3Q38HGJqpqy8KoY3",
  "key35": "22irCzXkEtXdfNGeR6d33Xq9JcuXYq96fJ6HUZQQEsaCU3SwvL4QbkRQcRmvzzDuudgGqqBx7RFJnHYZERsuVJyd",
  "key36": "5LJUmwwFcNaqURbK8GMtCq9JCYd2ooRjDo4hVx9wY2fXsn44v9cXe5QTdu85xPRsCSy4jRyJ4JJ58ichTwXWJEQu",
  "key37": "3fhCATqg1E38RUmvtkqxDLuZ4qbm3CJH7qikZvN3Zyjc11xEJitAigk8WA7SGqjyfsLDDBx4Uq2Y26KtDhAiezae",
  "key38": "52ihwuRaTb5s9GSPHHjUBum4UajYx5KnnuUxC6iMhiYLiXSgicZs5LP8afJYatXD2jYwrFDchNgpMArdGjFiTfEv",
  "key39": "5t595rcBQAQTtC5oRRzWbfiYRJgbgaprfJDdMeX9Lp1ZwdKGA1ophkiz5TCtNWmkFJH3oVvJMsCcUwwtQMSp31AX",
  "key40": "2K9ZiPjMqDQrx73guFmC54Ugfhw25ZeVvgF1pGAr9k6KwnET74uoe7gbx6rPRRErKX7EeBdQES5vWJ2VxyJ6SXe8",
  "key41": "5xFtdT3v5eiQjKbFiFW4eMkBdqP2nkFcLmxTmuUYC8Bs5t9qeE68sYntTQthvooagWxjm26WmSXKzeB1D6ey9UBB",
  "key42": "2FTp7yXsXmGk1c2y6ZyHhwaKTgaCkzTD3v5e2KBFmn2TiwcmpeiPgsJMEDoR4vV4Nvajwuo1r3ypKi8P78A6CLQu",
  "key43": "CHnHkigbGAFL5cdrfmtEMCuSdAMrMNsZ67NXNweGxZgnFc561kGh5YC7puJUmFLeT3pqqDbxLutoaFm9EYzZRQR",
  "key44": "3JpWuzwKNSqV4tdcsTaP8yKcWfwA6yyR4Hf7ACMwAjGZ4PcVYFbVZ6eThv7Tnv54NbNsnDhrwS8oKZCga6ULHwDb",
  "key45": "58wxupNrFkDm9GnD8QQV8ejXkzqxruRX34fLTsBSfReussKhmpMmNVEsTPzTbE5TMWbzRgvrg186XEa3LCsadwVd",
  "key46": "37yb6s452K4S5ikCGrq8TixDRCt7EV7uMui7BqPkEmbDy44vrn93dG45MrWore7DaLYT4baqBAxtNQ63AAuH4J4Q",
  "key47": "5ayp8Dqoup3ePXuLxTSdDVEVCg6m8VH73JeQheSsfYjxQShqoLWDThE4ofA9mk4tvLY7VJboHUUW9vWyjoxeNfUU"
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
