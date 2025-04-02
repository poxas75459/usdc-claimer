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
    "32y1rZACYGWbSnGwPREEe1T5SnmoRLeQMEsmsQE73B1GLkbYsx5wrFJ8Uvrm3iQoTEtDJuMVP6ipdb9yv7cRXdhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jq23QeKk2bFhiLzchxeoCG2mrcANhEkrgg2yUoSqhueqFu7bSQH3hPYEbQPV4JkbnfcjRzhJDBbtq9Bcx8FTZhb",
  "key1": "VzVasoMvbiNGh3UTpgBo5vUJeKjAVu8gqmrErqg6JGnpdEUsAJ6dDJS7GwVmZFxxRePRgmCdvcoFDbJmTkSBwAU",
  "key2": "4Ng97JqsHj4wgN7pQhftHbkwhqeJySmVSznyKfQjLHHoVbXbsRRQvmGd2n8eyoP13FumYm4S4MjmyhboSGQ3wF24",
  "key3": "5j2LV2gRWcLS6KzMePAaRKxGBbNNLcqmPEYQrR86tLkNJZKY5hhJb9TVpp55tGcPc4WNYXDPs85uBicyKFxFRqeX",
  "key4": "3uSteyTkB7BV2U6atrEVvPLu5sYjPmsB8asgcGrh252BRzyniSodpwR5r6niT53xjcGzqQEpRdPFuEXY8JoK2uG5",
  "key5": "24Vw9gXZToTPDejoDcs4b2UfoeW2BWzxhqJX4EL4j6g3rDxg1y3y8kmCLjrDbmmHaG5q86oudrK7tQ9PD6LezK88",
  "key6": "29X6YGsk81dBJAwiiTtjboRrFW2tkRv5u2oVpo6hAkxUnp7zMU9FbsWntc2hJSnUuGBt89EZgMuaEZFeTQfWac8n",
  "key7": "5Mq7J8jkFWFx878KMcn65urowFD9YQSmqS7QMHZc9wgaB4fuf5SGwNCBX4r1hXhUdqY2vQGTHWtFJcJreoQSitUk",
  "key8": "uKmZN1g9mEFVVuiQd7kCN6zENsDQCMU2pXDohBTE3VFrVjbxM4S3da3nshuQE6LbXxR8zrG6wd9K8ZNb54Pe1oK",
  "key9": "5f9aFsMFxNh4XgtXekRNySE6RjAgaV798P4PuTs6PnYfosxnZW4Seyi64vyK2SrSNiNxpevq2MhYUvKge4PiFc7y",
  "key10": "4fuAe5WJYFbsfjmkc5iaS7WfEZMvhp14CLQY5ApszPGjCwrJdureES6qieeo6kaaw82LJbzBi1o4SdSGCrPDHDFz",
  "key11": "WvL39KQFmfdP2RfHCiy3W9RCaYXUUuGNq4AJRg6ySeH2nCiwhbMCMcA34DehuyWQbyxP7pwJ5c9YSUYEtWbpiwk",
  "key12": "4kvhgR5FnGxHF31BCbohPNr21mh4DjX9A9ABgMGY5ihJ9u3wmTfLn9FKvoHt6t92xVjSbmwE1Bg5TQgovqbcRdk7",
  "key13": "2VpmEBKY4UTpZf4ZwbNbDFzogUpqJ77n68a5JyEBCKojcQZw9os1bFaLuFa7EtgEUpQB2FM8T4SeNFk8E4TJQRhX",
  "key14": "3WJVc1uTwnn5RVP5zrv6493u8mmAZkzMXtJhBffWDJMdYvV6My1US7ak3YXFEEZQRe4Mvh3fsDkDkYt2xcTdWmNT",
  "key15": "4eRAa8zv2vmbCMFFskaSXsFT9XoFALXJ5ZKqwryoriqQwUQxGYAG3EgYxxoGTGLfPJND14sdcg9nEjSDwzE5VZr4",
  "key16": "3UUASDZhyG8dh75dYctHSwT1VtbWs2NH7KAWoG1g8Kb4n2UqDgj3K2wMvgcA73NUQYkUtZ3KekooSpXZQuYdczfR",
  "key17": "2gv3xTSvpuoZBqXoKdorpbq2FAQ7TEJpowksM1bJE56YxRsaMebAA6msAToKjopcmcsFx8gZy24vLy3wy366y92a",
  "key18": "4LpyL4uuvMFA6eahR1uCeY1MrXEfxhZPG6QRE8nWEQtaX9eBpoaVPMFE8oJETWcUGiZiSCsbKaJQVBkQPp6CJPfF",
  "key19": "4UpB6EoJiXYEYc21DABDfFTNW5UmBPUMhwLEB9LcCeGofur9TR6L5WmR7waRZJSYoT5iSVcZoPnXm2ovRrnF3mVs",
  "key20": "29jEjvss6ZjngiwKDQ7nJ5yrejeazmXCRze3QT41d5FYmuUaM3ZUHYGKjM4EtB4vUR3wkf2dweC9Bp8VSa1y7txi",
  "key21": "32xd5WThugf9Gk6PqvvYyTMwibDWCQCxXknTRVde2pAiVqavdqSZ4jF52skhxsGME6gLXrVHhsQsXK8xhrA4FKPd",
  "key22": "2LEAE6SmGWe9k6aAqscSPFBc3Y2jBsbF2LegBPeoboWdm2M26CwGhKBtLuvQEEVjsRcamCHyPmXN2ZU1UfTxyA6a",
  "key23": "3CdvDHxceH63ihzzz4xtAfLoTmdEe5YBkLhmX2MVzvn3JrRqccJt2CSceD9UqLNkfFJtXFkSBc2AzaXkj2LfnP6t",
  "key24": "4bjgDMkGLS8EVJBSTQ5nKivbyzSVooaJPQxYBXDosUThKTPwvHXGGLZcTtvUqtNmH39nQVzTZHLxwAuf2UemvWWK",
  "key25": "5rm8EDVXsNeApSJkH3ZjrvGJq9zBLJXnf5mc3SGvZEtRydNhHBgvYXaJ8vhbBz7oQ9DXJPc1pq8soSd1Pej1VSCX",
  "key26": "4aEeENcjUzo6drLYMSuvHsA2QeptmLbU9c7QKZjgBtMJPJ7wuP5CpYohZ1gxfbB3EWdW7ZGQTtK8jRAzrdfkfaDB",
  "key27": "59jLKtpQdVvbG8UMEH3EhqFq7NoL7w7bKs78EJgJjwoNWHJvB5LxXfXFScBSMsNwGquLA4QDD2MEp6ubFC3zt5gQ",
  "key28": "2LypAyqBkpJkiHvET8yaDpUbPGT7HetwUsgRHY724ju9wukWw3wq9pJBdkDPJGcACYGuL8Wzz5CDajLHGHP7Hgfa",
  "key29": "4KYXUFw1sqva3eviJEvRaFE8NsdufvVEQ4YrcELpcyopQHiesD3ihMdeQd8wjjcL9KRibSi2vXA9drvo1rnvMmBa",
  "key30": "51qRVTymDkpqG4PaMRyFbNATXNfCxxghzYjDYFrBG3mKwoZDSUq6eMufM4KxDB55F8C1A262jmRxmknnvUiev2hY",
  "key31": "4nm4SbLF3EjCKbDGjoNmN8SRgSpwZ4mBsK4R8VAV2cxGuBh6HnmdAUSv38ZPxaGjD9xe7XWsh8pL7ANckH7ARhnK",
  "key32": "2BHX4WYxvwgdN3hbdBpxxGSaYcPYdSr7BXW4dymTe4txpLBMFop3mwzvkiQhTDmLeNSuZob5F11icv6EAZe9ChYd",
  "key33": "4y2B5pzDPvYMRChrq45dgHLPZnoZQn86RucVPWxq8QPUmMz7nfpB7yFWwzm9aVkaoRPVKnvYSqCMhSqjnWHANYNc",
  "key34": "5xrQQtjf3mxu6Wx64T5VjwRxNwjCRYo3jnEKeHDLqhSP4XjX5muCrKdXYpPiEBPeUNmtPnemS92nDW5vXkzW5ZBG",
  "key35": "2DRB2TPtaqMwQHiqxiMXd3EKvGj3hKv5Wgf7UUjASqoAddGVBxw1rSejUWr41238zeDi2BYQ1iNXsD7LywptK6k3",
  "key36": "4csDKQ2PBszrgomyCSfdZsshAbeu1WQ9FV8Mf7bU3NZJy3UKz66gZenExcmMZBf21q9hrPfXVTgyZ6Akfhdq49KN",
  "key37": "3kUhUzuFt6sxS4HGzT9irvHavCTHYCnc2j45q6wJLKfYFeQHeEKD9hjmZ6QBuWujpbqamj9QgrXwPek9JsJbmCzW",
  "key38": "i8qSrLx4nqpwnqff373QRqkRMjbhLYAFtPts75YjuSgcSeoeaW7G7f4Eoi99sTJVJa3QMCvLm5dGZAikenFdfiS",
  "key39": "5JmdP9HM5rSarBkv48KmJPFb66x5RWPEzzKtqjzpJVHQWtbomkv5BfT2daFCyKEHZTBPvorPXQwifiUj1D2CwBCB",
  "key40": "3AF6Pm5xjiV35gGKf1KTdgBQCrZuiNLaAYVWhEy8soxhvXgCQDatFtH8zaCGLpPWEfyYo5M5BH28FQx14Tbu5KdD",
  "key41": "LQknUh5JY3rJqeYTLkAix4Bq3YxwDQUNjniRCfp52aN3FvyqTWavuMXLJSEm4hzVi36n5pubXMj7bkPSsKXNnhx",
  "key42": "24BuniUR2vUUtKXjyDgy9Sr1afcTwYN1QjyspgrYqLnT2frLoDjA3wKAgio91ReMr5kciFxDHHMjyHKVBZck4rjs",
  "key43": "2GhXsPfoRcmrkUBghnwqJCiMthMJPqoT12hqB4KEMbH3eUw4csoKSpZFgoeQrWgQd4mpyAC4EaCDPfN6QNXe8bct",
  "key44": "2iFGfe8nPsFAmvM462obAjdQyCCtACjEkB14F8V9sVvQoyVfSLjZKodQmjjfm12LsFNnY9vnwFMH8XiogoufRFtD"
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
