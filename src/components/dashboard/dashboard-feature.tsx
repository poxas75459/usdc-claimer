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
    "425Hfvi2jBBiUshpDdpTJsUTs8hr2beVhA1aJdEy4oudAhz7RUizY8E9hLsWQuJXyX8MasEhqQktgtfDvusDSzBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttkXpLgqL1gvLFxZjhX2LQBD9VHkudh3c2Ae6h2PAer1GBogkZ13ofRKEQkPcaG9UBk2jbSum3t9KNT5m6hifEh",
  "key1": "2mN15nwXaZtJJRHaLEDwLaL2ZBr4D8EUJWkckQJhYvjn3bFVafWYnHK3DpN5hx18oQLv5kA4vUZfHhzWhAmaRYDP",
  "key2": "33DckYNCJvN3VApikYwVgbRFxNWpSenCQ51DpW1vXp5BZyDvjfeX9uwwHedbytmoP3FuxvYoZQe4ejpe1AM88rqb",
  "key3": "4bBSjp6mzYfpcnH1zne6oqTz7LZEz594uXgAyXSC3BtPPcvPzcsatZkTveBeCaarvSqPTHSvnhEiyn1jXm5q5cxo",
  "key4": "4mCuRsBTQwwdCViwYNAXxUk4je3TMfNzY6tkJ23ESjdfXhbmbvmPvQANo8WvT475K7MjsctRbQbvWcCZ35VL3fYb",
  "key5": "axrQjxzcZpajnQvAChxtjW7P5Py8fPbjmKoZDMpdJW7e6GNEMU1v2Ypp9B8HFjmfGfnv7TbVWqVQrwbLGFJLB6V",
  "key6": "2uSkUt4vutQjQAZNio3d7AnFY2Uzsf3m4Ep7CrwST7jhGZWadmM4g4U3t6KiovN11CkQZ84BwtwmYeUmZ3HP2bBE",
  "key7": "5DmakwiVapGWb6Ds3QGeJ1TU4zc6GvhUUirfB9JNz5u1gJ2Cd38PQp5RLfkjwbsw1Z5cYc39f42NCuMjazvKdfTp",
  "key8": "4PBo7QbSzyRYo6fTgdxV2QAsg5t6hEGHkoydyLELBeTcMonyusvqsQPzWFSrzBPHgmGWW17NnXPYHjLp58EvGjBo",
  "key9": "2t5TvXeHbmgPkSADrbxTL4FkDvuMNUqEkEMPWvnHFojJtLA6oBT2WDXiVqoWSJ6tZoKTAdqSAT2v6XpVNi8yQjJC",
  "key10": "5sZXDApgArfjs8mfiWYmhAwruu2P2M6WqVyNaK1c6w6aheS44e8M6gXZAmM736dw9Z2xZSutoeY4oXrUwjQGr49s",
  "key11": "2Cv97J1fYge4rz5KWwEu2x6zLwpEKdKAcxVdBDksmf6WZjJhk3xd8ufkiDBCAaXGPUatwJamftXjRV8agW6Zbggs",
  "key12": "35amsXpK3g2SJCCJEHGeTYrGfZcoYx1B7irTax3Gn1vatApYsyCYCpXLgowoAhbspedfSG14wULRwPEzSzQKam1A",
  "key13": "2xkxyEBKdScyVhJoTHRsXV2udU5LECqxnetLqKRjukcEZyCXex9h8goi87Se1UPT1d7xbNYmzYHWRTevcVTP5irY",
  "key14": "JEeQDwM5x9oABVXUrhWT2yMFmpNDjhwUZPxYjvdKWZNn3oKuo7N7NYGm4j4HgmqhnUzaFMC6xCaywynx4Skwxpz",
  "key15": "5DScsVSAmeFN94ZUKBXpn9btWXTD3VvLMWMR6LvomyyBGMKoAPZNeEKtqxbvAQXJtRbMAPpZQHSs4AqsrHFkUVD8",
  "key16": "3dQGegFVmVeZSrjoNPMf8yTtNpFiqd2bWFBJjj9fu81eVGiY1RTVdDKENZFM1S4RzCXYtNVo3E2GSXb8LJ8LvDf2",
  "key17": "dRzuG4rQojzo7ecbU4LKwj4gjztMUEENgSrMPZDMMJ6cRxiShzSPtHkQKPeN8GsKtYjW3xZBAVXwKAd5d4hdTBQ",
  "key18": "2ufenRqBwKeBXT7PruvhWvVSDEbPj8bt3iQ1nJKLRog6uAQDc5Wru82jkJNXEWuqQGNUrzywLksoCMJJ61sf4iGV",
  "key19": "4sCXgRAkTkegbopHb6LqQSYra47uZfjtGuYexzaLuLNxPxSA1FYHFe52XiFM5pjcgEHfMTGJyGc21D1JuHEeTNha",
  "key20": "3JaNWQ5MDM9MbW15uHJNGS2UvRALTinPuVAk6gBcxj9Vzw8hS4dpGVDVYUd8Pf5CQ6rZtwvEDr1GRXrVZxW2rY2D",
  "key21": "3qkN4k2fxn5VppGeti8jEfDDs9qkowoQjLFTX1qy3Qf3oPHCknkUgFuv84CuP9i3soRq1HKRMmcxLtFbfyzL3Mnn",
  "key22": "5Nsm6BFQVE5LDUgY9KbGxQ1CKBnCfhVYVJG1n5ZQsiWcUzoYpBP8ovobdAYVuZdv5rEtTtHVRjAFA8rXZNWHCe23",
  "key23": "3eatvgLHDFdQJaRRr5koFCV1Dzo2oPo4oAmLQDusL6uG9LLz9QoHauFSUBRNtN6KvsKbmkH5yHzF1nknY5apdUY9",
  "key24": "3rUuaJP4r2qsPTcX2CxkhqgAZAF3ot9A7rUYFWfpBssrie6YG7kvr8cCNkykbok7CG4PMvBDQfVbsSJSbDeegba2",
  "key25": "TqhKzrZ6LM2RcHGjKYn4Xcm8sAXS5eqtCPd2y6yfT3XxZaSxpvZxHPvmYJCPiRjmFmEhMoPN5HoCMQQDMfXPXK6",
  "key26": "38PEUMLMg4mLJ6XNsvZhXLCudu8jC34LD69crcDUfHeDFS8vxLVMqsyB3zbzAUjJt7xVeCuVNRGXJkVXHUDr73wL",
  "key27": "3hCDTsKcEQb6JrRGdaPZ4Hsw3yNNZFFGTFLnz2K1aJbByn4MEpMWMYB5vey1e2EFMuTrRnf8ppXaGSFAW2MphMMR",
  "key28": "56H8fXLAzqEVNLcYShuUtqhk31mfVj8WYh3VaAuJETfXHPCjtUSjsffZMpsB76iyziN8yABFKr2Lj5jhughZqBoW",
  "key29": "5j2HBXRZwrBhiMvCHYqvJNH2Wot1xBXd5jSN84A51cokBhWfnHVZpoyDh5hksnvMSh2hRhGVrjuwbanCJTrTQJD7",
  "key30": "2kfbyZxkFak5ZEvTi96XaepuPWQXVgJXJnbmb4Td5weXzZ6Fr92dBz5TiAjEJmb1geEQb6RaM4VGqXpYhQE24b4U",
  "key31": "44AZk3DadBvksY8hv9uWhp4kRmTmo5cRSVQ6eX2LbsUn2TwLYri6KaN24ZRswufQc1imsuq6H6zcqh3BrYoy31G7",
  "key32": "5JVcUwKMAhD1kePNq1hW9beMoPmpy23FHafRTDKZkrnUNJjMJBzEMrMNxoPGBkSvQ1fr6VaZRP5G2aiQqGAnE1Lq",
  "key33": "2CvAMA2tKeD92zYAXvsWNhNYiZMndV8QsxyGLsvvw8obxaHGMMUgCkqcNh6H8pzGYNT2CFMt7qkYAwyE6B3MFAsg",
  "key34": "4ZebTTC1traGVmoThtEG7XTRJbPkuuNCeZgomYF4NBFnR51ZPogEuovH4uP1qff1vU2eNMdpHmxGtR7dWuBNdPYG",
  "key35": "3xhXGRdwshtTncGefuCzd27xes4LrfvpkBwdrLopCDUBvvbCYsMN8fHBF59b9LGiForz4ygTrpZUfuoar3cEyE3a",
  "key36": "4KLJLbboNupKkBjThCwqpvPirF42Yk5bDTzLVWjokmESJGfE4KVckp2Pm2ayjhdjrz9kGRMAn2u3nYyTuJWgdLtf",
  "key37": "rRBxjdcS45WhtSf9ucV4bzgtxKWyc4WR8mGCqizqrcHan7rZHTZh7dKPri8zRemY3csnzbyw1JmFoN5bRe7gL95",
  "key38": "cJosY7yPtfpsx1bJ1z1KZNYZFmS5BkWEhBzGDwer6VaZeQy4UACRZaMB8vxoB5czF2RVDyx7a83gAPkKka1uGs1",
  "key39": "57iyBWrYUHeRCpQjAT4fS2qiSpTJ1u5CsGj1kzPTdFwQhDGNhmrrHw7UBaPQEDfC9BArAvNKvqCnfUH9jQEYcniK",
  "key40": "67Q5JovY14wwkQqYCoezaSUrXrX3bKQuVweqVxaqNZ8QoSFMCxvMPSUoCcMqFyCPKcHyhChZUesLeZMUEXGNCxqC",
  "key41": "5FPfPVCZYTfmdDs9NDZHrPkpXkjwjHQv3TSjpbkED82f2qgiJZA123AJcWhbLmvJFJxSdyz2Kvx8M1BrXTGtUcNK",
  "key42": "4Cj5zjZZTaUJBktqeqHrRMF7w6msodTy1ZCKU2XyXZhXo2BS4DM6CjqiTuZTTHFfxxUp86edgprBKufTB6jh8DYB",
  "key43": "5xz6Y1BdmPszpPyh5WwbgnMdWRjTooMLtW9VEud9cHB9WkjemMhvcGw4QyQJzVnv4q5kFb93npGAWDdwTehm6uHC",
  "key44": "3g8mwNrwTykv1nTHNM4wLx484vs8pzHyMoxqmkRhPX6cmCnRnVFe2AvztK1fhrWTgUTD8YwZ1ETScBXX6FYxUbB1",
  "key45": "3knNzusw85EVhxu5taipKf6ANmn1Zn4tjaBqKtCjktf7jSmTtS4rdQCQCBh3YLFwkjL5ZA8AWCvESC3wTJYeGeuN",
  "key46": "4TLCp5Z7FVdTz5pUGMxQx8oqcq2qaiMRDjaGChN6Rd7udWfhrC84toeqnha4nWUEpdhDEA1y1eogAGC97hvsDW9u",
  "key47": "5rF5rtmRzwnajKHjFUanmvKgJCGe4FG11GHfe4P4BmnkZYyhfv4TAWqmJUaX1oz7nfdc4gcReGPnXjbBuyXk7r2C",
  "key48": "5b3sivqFCX523PPHgKC1VYbMbbnMhaTp1DCHb8swXiobXqZp2RFBQah2aAqiLZMxXxA3hyYuXHjKEJWsRGJ7cw3B",
  "key49": "2yEBtde37tPefAkKNdtnB8onr3KTtT7w9CUtaN3Eci1rihMXdNys7HsRg5sGyhowLhMN9Gq5BHVRp7vna2NopAZU"
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
