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
    "4Rhiyj5GrGcZC5bx3L6gnt3eHr8A9Qx46sQVwAngcdfn9r2wz4KPgs4jJkj5BmvEemDkVSRFQGcWCEcRbwCHyTLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bwwN1iBzr3fWoyFBNY4H2yBWntxb4miZMGVywM83R6nqTEgXLF363vWoZ9koCXTeLbkReJePaxfuJx5NaQiatjt",
  "key1": "h52VPvdpwdUSwgo6YcFtQzWHAKmg4yyXDMpFbRkaDssdV5Gcamy1CsB1YwQMTEKkgdtn9px6v7FuupY1BJMNYZD",
  "key2": "5WdUMKnhmrmY7Jgi1KkdnsbLEniHbxSzeEH2CyAnAdrZaJ58a5SPX96HEBeZLdag4yWpaBm2mHTDGbJJPUDtUy8E",
  "key3": "3CFCFXy3nbnvnNHKbpycSzNXtBFcKtHJhTTC8DViaaMESR9pBBxiWjdvDoHVpBnRyWiuaeptvbdU9CKaLdfafcT6",
  "key4": "5gxmoeZyeUeNcr4u6ZgLPDG5fmTtP4GQJNafG9TdQXoKTY7ksPnQuGcWVcu6WnMWcM9wYUudefAkC8uVJpVoB4uA",
  "key5": "3VXrMPZPwxCaJmd6ohsvUKL21RHPCSEd9NQ2X3f3NvAbQ6y6bKUBu4M2qGq6pE7QaP1PWGiyrV6RimEckzF1BevH",
  "key6": "2T1xuzDzbNqvBQerMcxcnfxWrxTs61w5zKRLGdMhQEmB5LLAXAKEXUAmdrjeAyn2u7oQs9559zCKmaHwVmJxQJsS",
  "key7": "vYDqNUfh2DqQacSit54GFbfYA8sbecDegGXoU7WXhpG5LiQEFTPT8CYYEwBNcfr1hgmq46coCCbdvY7mRfXLi9w",
  "key8": "r41t4ZCN7QGVfw7AkEdE4uECi28ksqVPf7dtuRPGMfGF1ctJ4wASQadidZeCJp2aKTWogqFsraXr8gEbT3WchmZ",
  "key9": "2KPqBZD5HsaZ14kk6DHQJszbG8sKi7rVfvzHbaPmcZ8CZVcpxZoVSrmxogTGvp2znsYEgkq8a1gSDjTvAwezDRpk",
  "key10": "4Lb9e5D2axHnLDzaDFgCe9uymZ6UHNVCXH8gN3ZPan2m9WwJvTWsAKbskyjebx6yAMJATAjKntFsMFLg68YNS47D",
  "key11": "2jcThVmTbA3rnoBZe417KTv8nbYbtGTwzEN6ignBdS6kyJxyHwaSKhj3exARMzDxZ4MpTyTdGJ4rbg7PoEAYroQK",
  "key12": "5k6dZRHn7353dvsBv7fX7nzoB9Wk7PUiVoES5s7PNmMUkzc7w9t5Kq47oFZdJq86aPzpaff9ZpsLYLNtgBe8uhty",
  "key13": "4ocdo2kuspZ9A6xHehg7U4LwKWqKFtay2qveBQ6r9w6u7Q6RABpvYR6JEXFREwTxMib6C83Z963NrnUSfeubXfF",
  "key14": "24yAudxwCGBStwNP14H3otGewdRrLvcmtzeRkwsPk13ne5xFNNQ6ziwSCpfKcACLTcDzW6TbdqNFx6h2d5WVTPSN",
  "key15": "3ND4qmsiGKU2KMCzK7GioUrPwVZZk2L4mEGpax31ngfmshJ91LdYbyZf7CWJKbEqt8JBKqsVDMsAr1qc1q3Ro5iC",
  "key16": "5gmsCK2FHrhrpiHWX5XwqeEvnW1umnfL7WC37pUV9RiZhRYBfhVEgjnURkuvxLHQzyFhgj3xGWFz3jRf1WCRbEaV",
  "key17": "jicxU31qZgX87NfzWQpyyrVHJdV3iceiY9dCkWNRMgy3rcaR1t6aTvRUDWaRpPccMy4sTou2gpKSWbtHS6tRqwu",
  "key18": "5kZ726CLxqgFhfsVdMo5ShgP5AyqFcfPDgWYRFB4pebyk89SMaHiretVrzD4s4mGDRjZALrgVeECBWbrRQf9XRQ8",
  "key19": "2gP9LqY9zpts2N4XbL59reymEi9kRhTsabaRdfEXHcBL7UFHepAALEEjZL3oKkDpZjTurtm2Yr7kp6Ck6tniBXm2",
  "key20": "35soUyk5a9faY5QivSx15Rcjb2JSh2a1Uf5Lq1N53r54FipH39XM2gu3VWEWBFCj2MEuQatJBAVwKd6Z3qm8LkNN",
  "key21": "nUFQsZm5qPg1Y2rhsRqJXZkMagSoTg4kV1gwdjtyjHUT1kuoftjsTn6HCAqcLLstSPip5jvezgzXuzstZD9vYSs",
  "key22": "429Hz9LxEPjt2sZWsuPd8JT72vscYUtoDd3KK8xXYrjks8DKk5pEiijs2FGkr9GG6unfuyQvFb26WKrVJyPqdPmD",
  "key23": "5h6Gz1ShGFE8NqHVFAUwKJNedqodBHtzqT1kTtTx2Hb32kuD6SFoh9jWRnGDp8LMMCdCQ9X36d3FP1PNYkvQAk59",
  "key24": "4RP81Z5JMxjTtva5SLQ5tUcQUoH7Kyor3zh8heKX3tp3fAwGfZVFeSUgdYwfzaaYN7P4gaVX7UgxWmduXsj5TaAi",
  "key25": "2VcgoWypmYaqVHdULFbttB7FUKoYMJnYQBykvYzVUKFpEimPEgQD21nUtwprSRnuQ4zqz3PPh2FQBAFVJ6Dm8YwE",
  "key26": "3q3Aq35Wc9WEFdCNaRvS43iTMnaPnvrMZviLxSwLn4AnYrbHNGRRMQGASm9i1eFE9vJLGyf8EBPT4Te9zcVDMDSR",
  "key27": "8vAQQNj4kwKUUQM6YdMAXGywuuuEssiScsVJ5tu7vWTvpzAD1mht8hSiCF9wF9pGapb1o8QCY8gUWZLgfcDvnZf",
  "key28": "4zBXkJtYjKAmnW5cwXJotsVXwzmFPDJBFi3ja3mJfe5cYF68aeF6UNAbrsBvmAn6g65ynhX5aiGPpLv2xYw2Mq1X",
  "key29": "21C9LSEL5mrWAeAEssrz3Ua5h6BMgKyoP9FM6Hf9FTggdVAx6DjQfyPCtb1fkYorvy5MSeFxtRpUQq1YMGaJ8Grt",
  "key30": "RffVT4DdTqLwvdDjMrqaxuPH5VvrKu1eYFLVTrCmhqyuXXJKZP3F6jwKTAEUKLYfCEVyzQNTPa5cLctriSu2P5g",
  "key31": "2UKNfpQxJzHZiWDp7BnZyc7LootjaV7o34N2EufFsCbjcnMcHpCj8cbWPP8qmw6XkkaHhhtnhS4U5UAqgYLMDV51",
  "key32": "4qz9v79PUrBVKxXWm5q4RNMYhcYxUZTfE23R9k5YB2nDighGjhcnZmN1osZfKgodTjDaFw8N3iUW8eZWZ2KF8C8k",
  "key33": "31wzc2XHkZMv9Z8dCym22HtyqwmsZicPcjYWTEiAhFyHu8CptvtEnjxo5SU5bMLoQoHds198HEtnuaSHm2seM9Jd",
  "key34": "2n8Hb32Yv7oKYEkuLX8fFf4JozRKW1EMN1494f83evnM3F6HosS2RzFUtm66BbWAQM3t6ieAFDeVSshgmNCkZezX",
  "key35": "57dMJnuZnh61NuFCiYP8xCB7WgKix9ndYRYWxHG8mp4jLqSAgnG89oPnPFF6WM99e3q25Lu7w5hBQHQDCoqf7z9w",
  "key36": "2JpTVLnF4p6JJshHtWKBRjm1RneMyYnnYLvY63AoxpWZaS24MkJLJmNdG7FGrekcssczsFesD7jNaeuGSK2HQUsT",
  "key37": "zznm37W7MKXbPc5gHqmsTDQDS887djFGbsty4q5Gu2pHtU14pyPbQf1pW992dbQj8jJQzmtEccae6mBBVhJmifg"
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
