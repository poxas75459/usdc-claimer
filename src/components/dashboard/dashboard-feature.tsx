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
    "544zzLVJcyvozjPb7sLkzrHhfw3C1hihrieg9D1trtd61QqtyguBZ1ZU7xbJKFSTQENxp5okw8DCi42A6TvMGCjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zzp4FpykF6TC83hxEyBvsTXtWwYCTbv1VmtBLw6hAXGs9pJfegBoKnJxtfRhpn1ociBRebwVvQwRtuQurVbbEq6",
  "key1": "xHCiUD1iQiV6mAdjxBPcjRPzaafcZM52xS4jEzyP688J3spbmXEVD4YbjYATDcxb7bNXRD7E4rFXCvWw2CEmmFH",
  "key2": "e8eJ3nTRdL9PhwFZ9oHjZwt6qEHnRUfQh4sDRs7UBPsGfizupFR18L9eVhJDXHaqrqjkHbWUdvj4ZLGcSXTksCe",
  "key3": "25ar1Gh99A3KnGMcDuxFVEqmaYkp3PA2FTD6zSwKqv4yLFs3FfMDdicNWcstupYDndj9m7Jtst5kbXJpKbUQKNCy",
  "key4": "2hwJx7QW5XvTAGc8eJh88FZqJirciYYMeDZradcQivkkvpwJMgSKxWwhHoA4agvA3Gjb2tG6fEDSJ6VfWsgpQJhh",
  "key5": "5wo8W81cEnfQpq4KfYvzunZvqb7LeqGqJByPaXvQzMMdWE6MAGsNAAz8dRZXhjXP47cgXXXLsEEkh4RagidLDun3",
  "key6": "4MbN7XuyvH9AsThmLKsj48W7YJzpKk4XUgCE2MTKcq9H8ddQGTMe1E5hZdurkh4gTWqTKNWCrk36pEcN1cVbZuZQ",
  "key7": "3YeZVymDjCU9kkZYPm5omfHhmszwJA1vvsjAFfoUFwUbHd7CgWBWjBSdugSzges3PDv2Z54FfQ1Yefb8AjxSkutx",
  "key8": "5v5VFxqkj2PvX329BvPijMcfkexQmgVeWd9afpHSFBS9DJtkXSrbgYVsaXmNUMVu63g2F356D1Xh6j11DPjqXEyq",
  "key9": "3cKZwQ8MTMptcH1xB7TQhAtQwAD1marj7WRgMb4yEzvEThAdC6gmz2fEqfV2GopS5T2vJoqRyaZ84DrzgfCxV1jG",
  "key10": "47QaTMKwo9JhFmRcLcZNTJqSUqimXHBDvFnZSvFgfTm91NRSMQsKbLyHnRdZAfS3jBoZcB3i9WwANuvy9Cx84hNH",
  "key11": "32UGipVqZkiTwXmTY1jazLreCWrj85Yud3qKShQt2RdrnPy3KhuipueXvNzegYCHWpJqDx2czk4f6D5XPC8ujC2D",
  "key12": "3PK7oTNADdj1J3WZ1qpQCmJe3sipa3nfFnXSqAusB63gnv1dWgRA7RfcfFd9kxnf4c8zwrsuNjoVzLN6MRS9iF8k",
  "key13": "ifPJ2L8gsP9BzNSsF3EW8gYe11AkXDmbRBqYNedphUv8UmY471WBREzPEvPjCEqwb52MFQiF3dcNCXaBCbGUpz1",
  "key14": "4huoCd5g6cJTWUepcUDJSwrpruZtcSz6aXQHJjsXtiSujPtSLapQmAPeUWd6ihucUiYyq6jPiQ6KfJMPdc8SaUQx",
  "key15": "3VxSNC9gxns9izpro64eYy9T6zC2bkm7BhNYFiYUjqpcbJEXoYzahcbFay1KH6qykEDBWu6VByLG2DfHGzZcTbib",
  "key16": "2hCbuMmnFW9FwtJpJP9pQEcRoeh87m6wytvsKhcM5BBnNwCx8LdiW19DzkGDxMUfiCHT6pxHgesUEJmVDkawnB5E",
  "key17": "38kwhTvsvbNJeTvyKaXjDfUQNBQM8qPUpKeHGX6UsAtgkxSUMH3KreMn79d2byeP5UqnLMSu8gQz8JYWfgAz8yMF",
  "key18": "55aLttodTQ1NWcwQgmfSceYmSwpBRJXovWfwear5b9neDJVhEYPeaj1ZoLDRNzRa1voVq7ewKyy581WxM7GzuAyf",
  "key19": "4UepYRZKDraiVhzJe82LzFrNkyTaKVeFH9jHGbxxAdSX4uUdik5XrVrRsRbS6pqGSndxgPLLDXT3NJbfK6atWQWR",
  "key20": "5L2iV6Wmea7UkqeXQzK5MJdATSoPwPYG8Q8kxuypHYj52G2SL7z1U5aZsT2gjFUcHfwgSijHT8fT26svLG74SynZ",
  "key21": "2DM9U1dd53sxwnX7durZsSA36EFzL6k9zVnmdpkpszpXYFEeckg6ukuxf4Fm5RR5FCGo9dJbvbJwQEgX6b1b8N41",
  "key22": "a2PidFimTHtAN4ESTiYcYZmFrAA234yxQLk7w24VZXGdmoEGAaLV2us5VaXms8CVPSEHH1TE2i1E7cNWLkNgGBG",
  "key23": "3mmurW4rfFJA6n33wogfp8jSeJapQBmRhuZPgk5adAmdVkW2iLPF4wbv1veBh2duD3wov1Swcn5YUi9Jjs69T9R9",
  "key24": "3WBz99Sd6mebMet26GXHxYCy3Wyw2he6ceiNAUYGGp6MsZJVCrYdruZaFVF3vcM7dwraRsUDYTzQiZQP5xqRczUq",
  "key25": "3CpKEhEroXZrykiWPuAdCJL8fq3H3yXDixPiPAWfsQfeFVXpRyTDK9xfKSzTgDKnLLfR6JATYqJ4L7SvKP3grKPd",
  "key26": "2rCmXHqx6fzWY9gzfT1QvVJChWG9VyeCrri53jvL662ZF9H2NWiFBtsyvtaUJdtuCEzoVk2MQCnanQisCx5aozsX",
  "key27": "33GgMthGJhf4L4Gr2rhZXqqxKDBNVBess4r3dLzLZ2Ps6f27zjeFcD68TBqjghTzbTs8VwgwTbXjYqTB14FJWExR",
  "key28": "3HAmHK7seYmaGrpe3G65YC6Xdf4CFEwbKnYspTaAp64PJ9VyTVDHd8UdF61ftthXyA1kUfgb5enLUg255YeHfvYv",
  "key29": "5aurMvZ1PUU5Dv93ZSqjZqHEV5wHv3rjPXcHh6DQVKAPEzkgqVcVtzDjnCrPBAzncVpD4nHR6K2YoGKU7kKn3Le3",
  "key30": "YUZVn3VvRMBP9Xw2JvykAWkq9P4PzxuHVqhhG2Af9nS4kFoKU5bLfHDMTVhFrbFpMPYF82cxTRabdY4qWHw77kU",
  "key31": "5KuPSKLRcqAxxLqt6MTPoSF9ezZvf4cvmfBa7uNHKr1MUsrRszVFPV7LpvhUkxL3uidur2iSnjbuqcmvM92GBLmd",
  "key32": "3KpKkeSpoDvrLKj4JCPyQoSPjNhqNr96uj176p4CsCyAXXGbuSnKgPqtJ3pfetfxHB3zQYV52Pvki876NrnvDaaY",
  "key33": "2nFQs7LxtbqavFbsNKWB7wPZW7PiFBrrRNzxz5YZgxMm6cX2j8Yw6x54XNr22F3PGwwfVaMCaZvMrbB7ZhnbU9H4",
  "key34": "s9dS6rZKVx8bZpWUojLYtso52gqom1hdNEvma18CjVYZ1qzwmRR4Xoz61gJiFmYGoG4PHE4RjMk4xBY2mz5N1Vi",
  "key35": "2RfikuJw91kXjz6mbEGPBkShx92hS2stUwDjE7VnyUJ5PHRPi2gY4ZbkNzZXKDj2aayLwj4t7JwQshpbff8LL1GV",
  "key36": "3XhX6gz5e9PSUA3q85x4kSrYNV4dFS5MAhLjMkvVGBQphQ4Kw5wNTXHQctQMwZkxoLkvBRNHo7CLmXKeHdiAJrAB",
  "key37": "2xngE578eTfwA4FQtkueUuMwRkSzNPmhaMeQchDEajWNqNTkN767xFayHnppw6gLi7ggrk849nBeaQMJtvQiYFF5",
  "key38": "25o3zj6Ekcnd57999J1bZUjr5C5pNPQcdPpVim7rXq391J9Gj8qeiGXR8VxbCKF59Z93gEhLV8fYjkJHtSdFcTKd",
  "key39": "64bCJdzeRFc7sUrNVNRW5E5qJB6LVaGGj3Efj9EeMWQzJy7fqf8YBgCsrooXAAyJiinbDGzBUVcfvoLDbHNZn6v7",
  "key40": "AKT2oWb4UyUzookR3Cjwo8v9r8a5soTs6wZHGtcWjCg7UrXZdTKQry7CZywu2iZfGdpcRFbSia2Vxtoeo3Z4JB4",
  "key41": "4tKRRTBXUefPMhLKrcrXGqJA5vHZGhyatVwQBj2psLrtzAVZDQ6yZcCWk3phiPGouz1FdR2AqJ22j3694cpWoWS7"
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
