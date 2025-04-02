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
    "5EuhEUtj5jue1UHrNQQDgBA1tPG4QhTDajKXF3XqpRyL4c2je9HLi7JVAVPMPXWCekVTzp3bowGwLYnqDw3JFGhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xEZdHZwSPqGEErap15Q66RNwGVG4q9rcGgVrSNsxDaWijBrVfUDihz5KcsBM2cei4RAKgeyDo4AC4Ya38q577q",
  "key1": "H9VpfB6RCtwLL3PqJaS4xuUDLtqgKGswR5qu1UD3yDNNYxjv4tPN9QoqvstyKq6vi9hvFYULi3uQLF5bp2XNYhB",
  "key2": "2bpqEbLgjguzqF7PW9Qfn5dDVkGSSMyv8rrjmVzcEkKwF1FULXzCZoPGr4b3tUaXtarwQR9csf8CqJcKDeGeyuKD",
  "key3": "36jw6qceNn5hiqHoJBYXBY78CmVdaKK7vTc2mVoqsWJxTHJvet43yegqDAAF18skXg4j5B2RCgXzxjtK6DYsGBX6",
  "key4": "2JC2iy6REz788SM3PJDeQ3LinvvvUDqs5NJqrscYL6N1QVJDNqEQ3cuyV3NQzFWFSLHJob2knVgm7aEP7Bbp2o5X",
  "key5": "5PzM1FGaqTct3NtN4uS3bubVhZ4vUhUSefhBYeivVjiP65h7wqkn4DP9sMpkHiJVCCqbPrKF1SJxngZP3W63H7dz",
  "key6": "2cgi5bqoXLBUJPD4yrXksdtbNYRmCb5okthuRg4xQuDM1ur36xYYi73dmjEn53QkpwzRWEM5qSNA99qnQYLLCHja",
  "key7": "4sjTikdwCgH65GaTSogVanAKmzkhQD6WggtSspgPK3ZYiVNJPR2yvhMLgMfFokxnSKQNpbzhF96J3RrQayevcEEy",
  "key8": "c7ov7JjhCNeBsVFjdKjoSmK38iJjGVLE1JAmBkfZTqZSpRPgXRt9dF1rZSPk2GvhG3xLd5bW6rTPEM43giW4CPE",
  "key9": "2f88xHGtN4mEfXHbK4eGKbt4APhrSBTszjR8ZU5hAnFFWQcEFdQCZth8jPTv16zvFRXYRriHWZW8jnQWmGpcTnac",
  "key10": "CGc3WJBEf95D69xrLcWR2sy3tDE7rETvjdnxwSRQtkyZ9kLWUzsWx5V5x61TWpXrBJbzgmU64GpqQY7NuowDqZW",
  "key11": "5B1brGMhwEF4xFPxoYr59CiFzgaGsk9dANyb1xpVUg3hDvSP3oXmnieA96eViCBk14saHD758TkZ65oEQvFubTAf",
  "key12": "5XrTrEyCo4eZechHrwq54HYumsyeoR8Hq8mapJoDejM3ZHo89bpEZZ4r1Vr8NH7xkgG2rBzskUgCzr3YcUNsKxWR",
  "key13": "3irnWB3KcTcA7DVhzLboY9UKz3tZX8ChawwqLmHwU3E1XbP3YHeFxGysdPGDRakiRwymF36LFNAL39xWKDk8PS2T",
  "key14": "52vXbB14PLZ32pszUBAcQ9Z8oJ6ubx6EXvGMsncDNj6yGjNP1EkRSMGBTPoumk9g4orBGy1rrd5fouXNfVmrPFHx",
  "key15": "2VNGiAcaLbEzUKunwMqFPM2uofJEoGZD6Wgq74DJG3t4MvMLcHQkrU3xw6NjECqcdVwVa6QVH15jKov74MZ44sUw",
  "key16": "Pyee6rgvCu7xT6DbxXJhq2rmCEcPUKupPN2GLWd5JLAWVgCTgiNQ4exUUoonDEhBdy7UKEJMVmVbhK4v6Y1i57W",
  "key17": "3u2aaRdCiYBdTbrJQGf1qZ6pKb4eqWSve1ouptn7XHWqeuAfEyAjnX2xsx3reGRoC9YQpxrADJTuPTwBDoEXXdJy",
  "key18": "SMh6p5sCNGhCTXgfJgaKEfoetrqKtiV4LkQkLLY78MSKfBZvcCqrC7AsC3RQVZPKx5JTMt6t53rhpRxH9gr2uyF",
  "key19": "389EfZZ2ZhGLWfbiGQYptbqAP8uctBXBFupynpSFXyNi7Cz8p7FFvDuDkPgZ4BFZpWEKMpACQ46PK3zyNSS74RYC",
  "key20": "3JnJxMEzZQVpnP7ep6iadxojnTxqPbaLUBnEgjgRfWvDeNGH6wjvW2yuJ4Rco4WDKJBpRUdpmM3REF8dPbNCjQC2",
  "key21": "32HDbTtZMfufP9358Kqv6m7svzAH5smVr9wx6uJ6yfaUmp37RC5jEscD9rwiuAp3x8kBHsi4Gaz9RwnZiPjE4NYh",
  "key22": "zGxHB6zJ5tkjr3iB7UdPHK4n7PQuk1GhqF2tadbyJ36zZTL6zNhimFjSGBs89XozpwtAqXbWyznPqRLWNEWfpdg",
  "key23": "4tKzw9p5mqvWXLmrtfSXs7MhE2qqsMGzKKoXoamU4MqEf91KcwrbGaaLQ7EFjMQJUtvMt6LUwbZz9ATAshmWhcB1",
  "key24": "WBeq85j5TZR1EQ9w7ivvN6YRNVWfxvvkVZ8scZitErazhHNLcndB2r1RyNJgyMcfXwyipSGuBPBp2gtQEe6NXRk",
  "key25": "3ERMNqcrP3pTVSYyeksCRtAhtTFvHXwkpQUKFJgfNmK9L8pfasdck2RgxJHS2RNA5azxtAkbHbe6CHHuT8DXWdvB",
  "key26": "hUC7L7Bonist4R3Dn3oWruxSSoc3U8dUcfu5cfKYEiTQW99KBXVp3GxvykybWHGZWLVjErnEgjfk3ERywt8q3ak",
  "key27": "2PdGAuPmsfxwzaJpf74FALQ9JZ9CiTJrjW9M1qtqD6XPkrRJD7rJbi1YtdgLqgNqc9Y7dChby7C48A4F1wXNaPPn",
  "key28": "4cxP6tnixr9sjm32ADeQezfRGXSKtpgf1eUd3tonnmkr8e4nKk5mtopbE9Fgeyzvsy65G6BhXStgPkdHKhhvMq8t",
  "key29": "2ZSPcoYRMJRbEedmWKHF21G3zyP2Ji29sCb2NF7ymhWJpCHY7QAqrTg6PKhdHhWMeSrPRFsQ6GSqeWspd6wH5Kuk",
  "key30": "5x268wvNuhKaL84SJ2wAZ2sLAV7adYoyuq8ZUng64TWqiCVhXmT1e9EVndw6qyG8TAhkHnFLhbfpZopJ2UGZioYu",
  "key31": "4WUwVmtuQbH6Fz8mybohaAt5Gm6DYBXLkqnJDE1Yj5zMLkCFqcdxd7ZhoHLit4QtQn3wmLor8YJJ9udXVu4CianR",
  "key32": "4TxxpjLwcVe26KqqTFqHvEYaYbn2pF1z1iokaa8taXXJuVDYDHtrj8hSoC83L3sFEvej1cvHjXAYkvqebMsqyPqi",
  "key33": "TkfrN8Nk8Xs8HrqbmPr7ynbP4TsEVP7NRJpzyUASAFgdCqqQuJnioBQWvHXX4cMhvQde349Rf3gAcvVoNgYo5qW",
  "key34": "2BeW6mEfCGRaG5LCSMDGYYUqHBxiFp4Js8eFf2Tm85FAyUSm7cSeJXE4afX15Mw92WvqamftVoqVd96oe5se5Ucw",
  "key35": "KtGXSS12MrzAw9XwZqoSaKvCVxMuY25onKME1xqh2HVCxwcxijTNkrkYBCDbPoxKV5TpKbn33EuR34RGPTP6MH8",
  "key36": "3iyNf2PujuHdcirqzRC2pKysYSfkJfHJkWGLrt9LypGv3FhsR61PkBZNvr149EDVihKfsx87qKAakrMVRttvs9PZ",
  "key37": "4DMTyBHPR7AMvnQVbk7rtsMPFkTFJYSWguXGWw2SL3w5mK2hkR6vPZXHTU72K1Behkp5yJ1aTXhMcgpm4w9f1FRk",
  "key38": "4eFqXctagpcNMwLjqgPdLhzUgzXPEFNn9QsBzHLX3UNxfGGDg18FMC6ga8PYq86YwHXcNRZibb85Yis5umgaY9rd",
  "key39": "2C4pNwu9gmpBCiwpRWdQSzK8GAqiWdrmHzew4CBD6RMYbtgjzKibJvyYveA64sTFELkpfDfzFgZieYmiEKRcZ3SW",
  "key40": "35XbwcPCrJy3Lrb8HHjQf6ZobyFzvR9CpxjHVyydVGZgzBFaT6EVT49GeQxJvabuG2rf5KiJQSkZDWb8GSNGBdSY",
  "key41": "55z2HjCMHZmzcSZbgrVcUzUyFuNsTw9LFNZsysxjXEV3nScjZVKHAJZrk5ZWYbPcVE66rX7LVg5LtrnJhyugABm2",
  "key42": "56ZeUVMNw1BeNbcdJzA7VwBVgr9T592fhxsV9mDAkMSMd1ShGu5sDkR5WqBY9AVBRArsXtnf58eWktgre5D47PpK",
  "key43": "2eRVyzPMG4EvkGtk4df6KZPefyErcSNBTM5RXEdGd5okMmyv5dbEEWxpWt7CWyw8yKmHjTG4zt6o9jnYVBjDECHK",
  "key44": "5uXbtTWz6RtePPHuBJ7cd9jC1qnURho4gdzyqoNyMihknD5U1G825S3vtC6wUXs22RML4tUyEp1FGA9WVkqPmzFZ",
  "key45": "3adsu9mZDLexNxgYnwEojeGd1tbQqHu876j9YS4YbqU4wSQCH32bFRwZqWTy1QVgwroBPfs9VczxEr6a9bZQBqqw",
  "key46": "65UbMBiafXmJnux1ous9g6EGGKd6vAKdssvW3WPkE5yoDBHRY5imFB2suF8MV5nDT3jLu1U3JjRfkqgCVHyiCH4f",
  "key47": "my63q4CjNE6GBaaFEeUegyXKQ367fcoWRVn2SsZcPpgmNwGXLRQ4oT8mrFQetpqi1PqNLcWuMm2D1q9pRPgZh5E",
  "key48": "2pHch9mm3cnYgTpQTN2EMqwnxt2dRq1gst7bHFFP3841CwJq637pLt9mU47BuqxugYqhe9mXDgLBuhYuWLv1rJk",
  "key49": "3w1Xtz2KLpwXWFuZutRWe7wYKh6A6NWQ5Dbn5KQC8tzBTEhBU3o7giFm2dByX4whxG4zMRJ2DCsgr5Q8XQgvRCe"
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
