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
    "3ufhJTs43j3KqQXH6YQHX8xbTcom5dQaKjuLm1EEETLD35TGdrmSXmWANyum2JZ6dMtRWR29NRbmqbropcdteVyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21m3zHjr6Za1uWeCEtHnudDqUcr1iNa2ptfjHMWV7tT7pSNRDEedB2R5vE5yAVYC4PjUiq1uKLuzz4ZgeHj4DDmz",
  "key1": "4iP1HbkaH3Juc9589miyG3ieb9Le1gdMZALtnSqtWmgY8VCBuevPiNouks1kFpRXYS1SzJCoWgYTM75VA8ogbPMS",
  "key2": "4UypsoTLXFETqDP1D1Df6Y1Qqm6hR9zBRQxbiRTWCVgRihBHJMqH4EERQ96c52k7HD878ks2QXfwrYEQwAbrAPuP",
  "key3": "2zf9XeXL3UoyAfY7gqmwvju58TbCZz2VT6wuocAtQtf1x6ouDDLM7ERzUBTdzQKwHxoXLfME59EDfSphZZttupYu",
  "key4": "4zN5qh2S8UohTf3EuUvtS8Wvg7XDQMEovYQhyomFVxv22NrdRnekJiwp8agHiZ3XYPxS2Dv9Kk6uk8bsP9bpkt3c",
  "key5": "5ikabdQ7TFVVJah2tCLpHXNBnn8zLzGzVzgDM7uvcYwtFpvwRaZ41U5aDnuV5otBP4P3SVbcjPpUoXrtpj5wiK5D",
  "key6": "217sCNQyVjPUmSYD97Bp6m1SVi5fhBQSoV9zyU6V7BPPFfANWgofPXbicDYacFZq7wi869oGuFhbX7NnLybepQHM",
  "key7": "2ZyhmET9MyFgMT3yR5PqSKdoERgh9BNM3ea9NYfaipEQEYE4ZCUcXBuXL8D2QrfpcKLovLLDFgEn18PRApxHTHUF",
  "key8": "3cPjmPMGBTmEMqejPvzb7ACRJGTX8dgcDJYp5Ga5QzGVPD79wtTkGDcvAyK8fbh2QbU6sFs6KLfyjpEBLtwi5hms",
  "key9": "27zdztbJaKKyK12waNXj42nKy3hdYq3PiBrYfd7FAchdMcNpjTSKR6gLUeTe7MVWkNFNz95V2QeMy4ETfjyFggeW",
  "key10": "2L4PsqjLGFb5iY6EbxuvEcPyVf2LNedD1cnA1B1ZtdrzbzvpjdxVUxd9K34R6CrXRCo5a4MQ6xubjHCr7R4mzUz9",
  "key11": "5WVJ9HSbhZ62pAppKqrUQpkpgitFUaWgotdpFdKtr4PdShbK9FmwTZLXsGw2NxyJh3BoY4Fvwo12R3hQhewXoyBU",
  "key12": "4WLFVHiLpMWDEgbhj3tBjDsZmnXWV7ox4qfcCR5pHrrXAWTqi9LysKJEfTAKYuW3zvFcV6Aaxs3T9VTm7CU5fvYr",
  "key13": "2rtBbtzxKQx9KnXgij2ft2KAmQFvXie7TWysaDwgYoCoK3m67cdXKc9uK86UeEzfuTaUaFfWnzyznXgEB9pMfmYz",
  "key14": "4qGBKbsY1zjKiXocxHHzhb5eXAeL6nLfdc4wPB5hvNsTgH5ZNBkHu5BZTCB64fvLcQtvuFztpJuNZ8mkFMoshZiv",
  "key15": "5P7vrhW64kVCi5xkNMgqhuudKn7HMkvEK6Z2skCsnHSieaw9jPCUG4eP6q2fq9jUGsJSHy2J5pvGDXRnSCxC21bC",
  "key16": "3RjgDiCsDP5U7XWgfRzT6xbYqwZy8tHFdQNFZvsc4zLq7vn5C7Kq8Dyy3uu3PVUzw65Jy1G55cgMGD6sGLGGV9Y4",
  "key17": "v6GXKL5TC91WoyoNbcoAhzDCUR37W8VSDaRWea5jWGeSzC1gNNJA95z4auoRLQRzXdEjDKnNaaoqq129dMUAL7U",
  "key18": "51NV2fTQQmVChwAWXV8bJpQUCshFcKHZbavzbGa5GqL9h7n7cNxAZ63JaeuWonnrsCWosahyVrwRbc7emqBLWyWF",
  "key19": "3gRbZx1tadQ2K21RG4bvDvtM1Efgt1d349SJQz4bpdeNNnmeNTpfajg1ydsJu8xhFyUFLGTjnxBx9fXUxFSTUgAW",
  "key20": "4uDFaUXHqVGxGCZ1D5t1xBBhnioqawf2w9LptjKbMDn82zeHUKjgwz5vazPuZWhYttB2dEidLDdv9PebRwSMJ6b6",
  "key21": "3bWkZ9uyUXB5eAratJqMfDoqxnb121Sod722UaXLRnPaL21CfTrFfAZbE5rBCy3Roa9RzMzY7qa7Moxw4zCLvErT",
  "key22": "3CdG3RLJawq3W5rvLKdzsdt3Df6PU2mxjbwrPpkGNVnVEi8gFQnTSTUtC3szUNUWoBXnfgped8RCJ24M1FWc2Yzt",
  "key23": "2umomBe7LQCx562MLEX9dHmU2P8D8RZJed9YkHZwEuyEjBTRiDc7CErTcpmbrFKXV1FWEV2FvV2SMxWPGrhraze9",
  "key24": "3vYw7GFz3oZH1gqP4FtbPoCjnB9ohNnjENquDTyku72huUeXaGry6az1jE8MELs4TaApEJsgwC84eftUkCsDttvA",
  "key25": "62d1qbsRbe8RHgTCpg2ybBSnees28UZjxqjESsTUPTTUSQCk5dZikkntwwwvBN5TTjykxWEBcKNE5CaSC5oYWiEU",
  "key26": "4VLSJewHz2rMoGRYqLf9hJoUPCjezcLT1G65mizrbKSKZxBDYMZu8b48uDRpg65vyVcRty3XgHdAWbbDmQUUWoRt",
  "key27": "4QwtQFugJsivxzMB458pgDfJ2rmC6v92feQj9wQm3AYB4C8BJ9vGBXJP4wno1UbMUoQ47URPBxPH9hcd3FwAA3SD",
  "key28": "4kepE6497bv4rt5XEs5fKdUV4SdPwtdep5e8ttCaZXfoNA2rVDESiYyEWcPW8EpNyjAwnzzBCVPZASnmEPWFUsxu",
  "key29": "7LQNEQ2Xmw7TW3GZ7eXV7HAFCd93JzLpMtJFziMT9G1EqXMv8BMhFBW2zrc7hC31FKtAZ4vHRSMSC6sHs1Dt2FY",
  "key30": "64EKmAQyfnMdmFLguxXC77dCBiPBN5T5cocm6UgQLiE6fZJzpMybZwfyUoQa3NYMaSPeHd6t3wSRNyPs7ioqvzWS",
  "key31": "3SzU27WcrQK1A2cfj2BfeAhKS4uXn3HioLvxJQfZrYRUQvye1fpq38Ei3xfoXpYaHWi2qxpP4uMVi3rdXyKuSy1A",
  "key32": "4Yphv3AwXJbmfaUwFCbyVh8G9DWNaPf6KLZxuvXy8BKuAMusTdnz8DgjasX2v8tVuja2NSFH3QNL8XjpacPTpFvY"
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
