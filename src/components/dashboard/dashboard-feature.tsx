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
    "33NC5tdQx9gchMAbk6RJEzjwkvf8LPnY87gyJeunHc3Qp5wQKHi7N2xRPcBcMjSxw8Gs4BCwo2n7wgVzGm6957Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4roYHLBQEERaMT9F4A5tmiPGhT4sEtAT2p1DpjXMuUA9ZgU9oh39keNsZdjNUHpb5iMCd8EXqnB3M52MzhmmUBNp",
  "key1": "3P8ksXJ1637uodXyZrPhGkXwZC3dRMHQvo1jAXrxaxu6JXASafJE99yah55bJ4SYjaLUmmpQ9fteUmULSKqRPf1f",
  "key2": "WsQTiK5GxQGq95cGF1aEPpNXQr85eTV3LofnmuVNtaMo7ZtcgG1kNHugrMAqxy61bPkxgyzimP8TpgU8ZDsQDgF",
  "key3": "3cEAgsMY2Z3QwQ2zsSemG8ExQZ2mis35FRYqpm9CbAwxWZxjEAvBPSsHGEsZabQCQi1PcF1qQr9TE5i8YTzLTaC",
  "key4": "jSpPuodjc2diajtGAjS1hKB61z7gmYqRMgyU76SQSHtwnw3Wic9MRwMRd9BWXztSDBVj46gwbhCz992yqhjc3kg",
  "key5": "mx4Yt87v8SWKv9KnNcgTt8qWYgHLZZwwQuQFyhLEJiPjw3FtzHURc7ewdXDm6XqPvPHx8eJ1JhzxrzCtpnqG4BB",
  "key6": "2wZdr22gya6RUzum4cFBPg5zQwMFr9SbTT82zmJKS8A4seD16NLkKpVzviYB6ND2zXFDqM39BtByJgZDDG824vsi",
  "key7": "5RkDSVgWBXLwXdvANu5LbrgoxSMwNJG1SBx41ZkfHRYuCTijEUPUccBRmBYuTNoYiB71veZxjY5pvTrhHprAftQ4",
  "key8": "3gZ7NmojmmZ72wucpAw9S1FunwxeYdXqayyG1t31AEfVtEfcSnK9wss5zghA6Cebq4QxYpQnQHkvkfbi7epwY7xG",
  "key9": "5kwNWjC1fiRhtoqMfzJ4czMewiAAigkpNDqAqxuUWDX4cCBzXgH6EHNzseAVB1UQZSiMqZdD1tdx4Gi6LQzYtffs",
  "key10": "36juw29Eaz9HxcdZfm1EXTKyNch5PQoSbwaLhATo8jN4rGemuCjmJpNdvWdVBEhWP2h91AdXWR6q1sSe3mFAMrho",
  "key11": "5DVMP8GrXbwCosmcqJw9hrszhMoTFaCmMCevdAfU68i6niUESBT9CepSecGfQBG2G4AYCai3YQiKYa4wTHwzQKfS",
  "key12": "4UKVwktVY35AtxeiTg85Q29JGvJQgQHSsmLQEdZEfrtnmkYS6TQXmzVpEPBosQZiziAbCKaH1PWiY1a9evmAVG58",
  "key13": "QhyudaTd9r4EvasCNdzKDrKKvrX6MYrqxmHHU4qiT5JayPzwUtDBpBHTzrEkRj2sT9ECUYWyXebb6sfYzPXMQDK",
  "key14": "4Si9WGo79arCkqM2AWTnTCXbecYonWDyb2BSNwVBS4JfJdZxAfaHhhHHRH84cfQSVSmrH1Pa7HPXakj7aLuJsCpg",
  "key15": "4FTsS95zr7sCg5cGTbupcyCS9HwWApYeanEF4RGdnxunNnRtBNSUNGHg7j58bpvt5nsYCaZfQtEo33nb2QkhZjJr",
  "key16": "2auNovE45WgjMUM2HiXjXnawdAZZ7wRAhLRGH5mDy7UGZoJDAWdRiZJC95hZUHUwYyRK9j6iyHQkqSqt3onTMndj",
  "key17": "2buey5pYJuLLBZnFKw5hTQANoAcPdFrqezSMKcspZi5roAdgjjNM3hcFFj4HYw8KkSWD8KUkEL7iCdr8kPiXvDK2",
  "key18": "5KMmbaST5fEmtjKPhGZWfTaXeym8LesQRKJtzr3MuJLC24QXwUCAJ3syyF6HHMR8VSxh9sbf47aWzGJJAJfgReE1",
  "key19": "2CuRg6CQwtR4UPRYMCczjEEAMkuA2KW5j1Cmd64K7JpTmpxvXCAj6mPTRhhtNjb9sGE3zAz4BS4rqaRztecRhQK9",
  "key20": "j6rNxpniRS26yJcBpdP5j2vWmHFrjdiqJGzzF4tgcuCqTigNyrunMhuj3t4pRndEESXjKbQt3Ud2aHpUmKt2epf",
  "key21": "qm1MdwAJVJA1orfD2obP1euWqX7XMTA9sda1XnKgBd98kr5DAPofyF46WG9KMrY3N23TR4qMDrddLY9Tg8f6kYk",
  "key22": "2C1q9UDpTUAjZXnti2j5AQFVJ8sA9PBWD1fTg7J79Lb66khUeGt6tbh3tQEuk4SgoZfK9emWxV4B1suWbrWu9UZ6",
  "key23": "3yUR4CNVAr4sNyUjFXgg2xwkcXoNqjr445fCVno7HBmjPTxLzpPnJJnpCQUsBjTUvSiX6N3hSvr23xek3XHzHLwF",
  "key24": "5jkFVf6nd3Z9jZrSH5kVxEwj8zePFs4LA8bruVTs2AaDYEWS4GhskFz5NyumL719tARB1MgmpgD7FC7V4aGbuqny",
  "key25": "MrjKA5e7Tevy5NNr8Dh8uYDrKn2r8xJt9rHHeD1MgSKACHVH3F1w9CGLpTDMPggrXFL7tRAnbee5AcrN9w5G9Gb",
  "key26": "2qmQ7eknHAA3272zQfWiLxaaTzjRFdfZsCWUPb8ng6vXFmSS2y5GjP9PjpUfYRw3bz5a6bdkVdwJEkGE3kMHmx9a",
  "key27": "4P3fo5dcVr5h4FSzGsHkCt2nDqCNbZ1mWrYzc3nUAz2x8SmVLMWe2FS8LNS3wUbtePs9X1a6k4qwFjGeNjaVQ7iy",
  "key28": "5Meww78msT47mTQu5Ca1pBnZh5pz3svCDPoGHUfv9vMFPRVeDQukJcAqMS2j9CAHjFKqFkamtLBFDEUZj1oK4mXm",
  "key29": "4NFLgwRjEcSn2VYSqvoxaFtadMMSA5S892bDUJZBQ4BW7VequqXDUHdFZKARBRn42eB1bbB5DCqeL2cELyPSFiss",
  "key30": "564HX86dMuLux5EvjXHGV47sfKaM8wa1cpHySxabGSXiqrxKsXCxsb7pYZxHdXcgWF4mfmyAGyqRHg8hvoDGcuL5",
  "key31": "3HGK5aVUvq2JnyBk61kaC7Ft6mPGHwZptwTYBo5KD76qD6msRi5kKQSFKftWAo1Yz7Aw6WyKPW24vKuCL4svf5C4",
  "key32": "4noC4ENc7Pb326S13UkUa7XmR12wo64fw87rseXxQsoFJWbnAJU2SihVGS1XdJN36HrRxmrCe8ajyZvg3h8fZZZL",
  "key33": "5r46VVc9trsH5GKxDPXY2fSrRc3mr6vdiBiEtdZujXf4MtQDhnJXpNjofgEVUZHwemS7PqYkzeySbyMuCyTQbmrG",
  "key34": "3Kby3Y4gLtLozZvA2x7MzFhsBxsV7KFpdaQoauasuwTNdqf2qtQtK2hfmdCnzQ6KGtChmVMa8K7kiR3RamvTq8Vf",
  "key35": "4qn1cVdwvGoLtuHYJdCMXBbUvnPqVG5F1BgEUQJ1PUk129csfLZr1uEQY1UM8UG4S6DarjR2cqdWQaGnJ4fHnrTZ",
  "key36": "3woKfQk75vmUHuLD6QDSuXHNKJ5ovdBuQHWtAgMKovy6AiKHWYvKeRhKq6AZUzjVu3QXjb6VxCWm63NEqXLmRCFq",
  "key37": "5Tb9vCec7pcfrBWumFeZZdsaq6MKmHj2Bkee2jD9DF2GoCqzkdANKmdcGCiLiZu4pP2jDJs9wkNZ9rsLDUhENsXe",
  "key38": "2EtB2pSPkoGrKENrAGvhpEUqKoxF1f1HFfkjm9gotGZh1WH7bhVJWPTkYDFKJyzyszxC83g419NcgExkRVupqmyC",
  "key39": "3rV9hjtMAtXfjBx5asDexWzXHNnWiMDpJevw9Bh67FdLqdTNGHjhd7q4z8BrWSFaj4FpSNeEkVZbS1ZFrE3m76Ah",
  "key40": "4zrRxPTzPmKpYoaEbkNgp8zMpxNXzDBVf7KSbFNPbQdZxs47b8ELw5oXut4uSRaxvaTvVc7R4mw938FQMPJXuwGh",
  "key41": "5peXSHdw5HHxTPfaJ8VRZqdmCu8xnGvx2pgeLW6sFbfjHoGs3fijfKiwY1vNooxLatemSzMCjWRfXCyJ2A3oLXeh",
  "key42": "3hP5ExGS8j4FMp9C3Gyc8LS4f5rF7nnCKerjmiM9VXhoiy5kAepkVxJbm3Fr2Us7eCZFrNowpvGFiav9p5Zd1YB3",
  "key43": "yotqEt5NQvd5qHuL3N9w7Rq5y8NhvNGdL2LwG3xrN5aZcRNL35ega1XtJtPE2qeoANL9RLKFXzsYc1GLy5A6N6o",
  "key44": "5WDKAFYNHpNvp9PRmnCrKwmjU6goZ2ZPExYRtwYBxcWb1SDBA5baH7tcFsjcPP5WBGSvZRCB4oieQanMY4ZkunPz",
  "key45": "F1ysxMz9nfzQvx4M79TFNRHvGgqdc6otzAqoufKVXEsFwdNh47e9LK4PnJA2j8LXJ8fmSA24mw4GrmTCrLeh1Wd",
  "key46": "4h2FRPRBqQEkdV5kGzf5so7XBR4QywP281UXYFsA23i8n9AYsKiAJnFrzDhREdhw2hc48D9mSmA4UZKU72FTd7Rg",
  "key47": "666DEajCxCQioThLzW5J9v17secGiQJvA3gkx6S6fW4KuvLepPWtkiaB8jY6PEzydWAGc9nqNg38qrb4X1QhCXZ9",
  "key48": "3UVoD6nGwVLJXBg42GvUGxjPEJsg1B5HvUdPYojnwZSTQvTzceteU82k4RjcPmMQTUoEyMEhCch2XwY6ay1qeZ66",
  "key49": "4zeAd3b72DvJ3qzwj3GDcj9Vg6yU8598rWszujCq4NGgCGoAs7kXnhjHeioB9AhJigehSCgqeK3NJgiaZcAtJ8So"
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
