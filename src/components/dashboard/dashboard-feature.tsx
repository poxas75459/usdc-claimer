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
    "5ZeaxorKy4qcd8r8MA932nrHUrxaWEUPfw68ybGiqdJL2YWoF8YugTZrhijn3qRst7qBzMtnLD1oSBwCc4dLdt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6bU7dfcBLYipVSrzjKtwdXGLJ5iYKCLWT2aNFR7VCvBUBrbKvazprLCc8qoc7K25LQxKfonE5KGhVf8i4u4osL",
  "key1": "2VQ2QX7ajLaMUsGEjfJDM89d6BNsv53tSBX6t6zHNWGmWJSXhFnZe7LE5pSDQJdMeBFhge3NwxTrmVagHbH5WHMN",
  "key2": "4h2hD3zayJbgwG6PomHqXv62FVGXURqX1xtPF6hC9nJLSSEspBesERK9FuEYR3hayZ94GsCPXhWjqsFK3QjzCciA",
  "key3": "EzhK6Nb1bF9zFQCRMUTfkW1dYNJECK7oSFaLjcHx6KLkUwpNg22r8e7aTZuGBxdptqXdkG9EAVgiSZHsmXfqpEt",
  "key4": "5pKJz8Mnwum3sTiEYipteSP8iwknX13wZ8ovqxXfyCQeLu51vWKJXcddqhXyuWaooBLdSVGKuuYXMn3fmt4VqLpU",
  "key5": "5VtcnbwpYFWV5Ckot6V5wyMHx3ew4MuU4jSqBuw1wspAosXVzLFvuqqqC8HsXGy5iFQP1m6nXyNFoZJWHuiJaLw8",
  "key6": "596BZH4HzLBQHYxfK5JDfFKmTEAyyAaALHkinDTzkca4XegV6Q59Cqvi9wHmXc83gH7V4XfZndqJvsHuzUkvdcbC",
  "key7": "62SZCF46kQWSPSrDXZhJqhGUQSrtSCpNZFT6tk1PcVKkzjmeogMteo5DbHQES4wP1M6BCw9Mpu8WMukKrjt6wjos",
  "key8": "5m95afp31PXQfyBvpc9Se41nT8SBB4TYrFhYjUEvHkAHdHdQ2kwHGhjm5x9MTAsnHopACbvgTp9QvDzp9Bfb2hJ9",
  "key9": "36Tr1tQfr69dTnWpgZCXUGEuJoemhYyS5xtcRaXHbSnPFUworthYP7gBg1t4AbkWuwcDYzzXptUcn5PRob2394aw",
  "key10": "3Roy2q2iWYR5EgsUjqRX7h4XQguqePYBz533cVPfEmcs2N1YJfAPXkZ9BtsSF3yzuki2QiqFunQAt5kC9x6Fdphd",
  "key11": "3amkdJ2u7wc6Cw7FU5zteNs9oPQ433KuyqQY7ua6UGJPdgYhxFvKiLky9CsvyEgnKn74dJnt2pbPgkRtcmzCKsHU",
  "key12": "2rzfLTyrdqvJSyaEuyHcP8JSDwawqrFze8JCyNDMb6YBd8dbWyu1NjrPr96ekdQwqCRrPJTSMcgchvKsBKojqVBk",
  "key13": "5sYH3ZuSoSV32GsqvXpKuyistReYpwpahZX7ADxQzkDA8jbecBc51pidRrCHiP2uZ4SKEPtaR9H5gipT4FPYe62S",
  "key14": "2HQqR9DnZugH67wwco9ZKenco65CnWErzedXUSW9U8tq5PZTmQtwxuraB7kA7hu39z4BpMcFa6FNtwMMHTagq6es",
  "key15": "3LBD1JzqsAoujTr5SHh3Y6GLXeqsjq5Q4s3abBEZkD6umRXVrJCNyQ51aUYRHEuVrKTQdPFaobovZ52NJxyZ6F3t",
  "key16": "4Mb9sdRkC7XV7un8HbLeTvkC6FxLHCjRJtt6XH1gRAzn7zY5sMZMuEFtaM2iqnKrUmPJQtrbttJXr1ARB9mAiHKw",
  "key17": "5wdjTqHkxSqVTWihA3H1hy9YtGTAepQTCYaeczYYfYfX2vN9eu6KdJzzLg6Zm3gq4tu2FxpvUKgPUovke9yZAs7J",
  "key18": "25J5GSaUsbao5WpA2YsDoJGHjyeCaRCcgxet9y7tuXZY8bfh9vCBXZfefNSx8Qmq8dVxhyfB7LTRFH2iKYZdeSqT",
  "key19": "LyBrYyue5XGgxyBSNFXEZevqLr5inVko8XDdydvXFio4S5vcwTETjcjTaTqAHDYuJYwyQQL8Q3AZp4tpCDXmVjF",
  "key20": "5JnytV5q3icAqhTQTwXkLaWpQQtpLQnyk4cYubpDpFgiCCQNSyMD2MUSiMUscyxjAz4b4GU3gqtF5kTiyTJxAwAz",
  "key21": "2qgJ3hrnLh36hbApPoTVdGrZ44MRgvSLKFSDSH1mzQUUdBFXMuWyeUeddV4pNw4RuVFNKxMaaxYNdS19Rb6Hoz7b",
  "key22": "3DUgXSCXB5Urs36GGzoHkoiCuNtQZVirjD2U45DSvKG7tAcUEgSdBymW83SZMAzvpgg3nmPV8y1GhLj92HKbdqBM",
  "key23": "3P5NngS4x6sC319C1aiKjPTW3dAEDmXovrdRvSyYqaKVJn43hrK5dZFs2tt5NGf4a9FmuUXrXTjPfBFzcFWvTAzQ",
  "key24": "tpbTEnrNVzpb3qcNhDnrrLTTT8SxbjNfyns7LMsapK2zyiibqvUxb9YVdZimJ2mJkokerbCwZmDCbKhcNHtVYXm",
  "key25": "2RgdP1M3JFKRvGqdjzHAfT6jP8qXFGUu9M4vPA4otAX4wVnJiWHptAaTf4gkfdP12ThXkYjeFwGWmm94u7VFWr3X",
  "key26": "5kzdh9YSsAyB38CxywuL7UfxTEsxmkYe9tdhfgrmySZEZY1Aiwm1yocUYfARpJUr7AsimomC2DdE9srWDf2tUfno",
  "key27": "2zRqAHcSbnC6wGgvAeapkPmi1umfrWj5ZdkKgkxXWECW7HxnpWKyBeBfPfGoQvidGHHpqSnFqCh5BXgh1GCr89ez",
  "key28": "5b6AHRBbkbt1CimrVWYgDaW4HLwBUAfWm84A7W3MSXVbNyni12jH8YjtP9stWEgwAeJHvSE8PSAdVp9bCU3ARZoN",
  "key29": "5jWzFA2x9Z6eZwfh1PZHv1aJ3u4fWs8z58tW17D9gmc3uJBfv3K1kaNAq2DDPU5bqrJ4XMx6V67SzWCuuHLVZ7tk",
  "key30": "D959gt5h6sk4WbLZtFUayKYtXXtBCwsArHJBHATtiUuL6YdrakLiQYPJzRQyY1jd9gihA8rVBLt3QyJBWTimoGu",
  "key31": "36DjRkJ1HUBGD7HwZWYSohoCEdZEsF9TnTRopGE6g4DNFDfzgoiDjyoG7WjcM6PvoGKsSyY6BQjTTWxzpP4wAKhw",
  "key32": "3Ezbigm2L6tGQ6Gg3ZZC8oX8qvoHP5PHUr1bisSmcuPxs6rrrwvaPVqM4TjSSaqNGowJBToBeTy6jZiMfP47pWLd",
  "key33": "5YbnMTZ81E1xAXK7MDpNPj4XBDatZXv9eJtZTXEG3rMMKzSqPyCooKcf4sM5gDVNQFRWZFuVjd2z9uGmUa8DMdUH",
  "key34": "3i1BN6VzCokgb6vgXLBPtUXnekefkBgVtTHXksenZSxUpbAg7aKspwdJG9hN5RRipdBh38WyPUqJmMnU9Jn77AMr",
  "key35": "niV49cDfvAJjvXrgXpELxm4EMCufa5XyU3sNUkP2eEnYnRK7Qi64bcT1hEfrbQjUr9KUf7N5jDt2cHPHahSWBwq",
  "key36": "275Bg3PTwnSAQjUN8mcUJjgrUMsadMBoPDKbM4w5y27cH24EwevVNpanaCaNBjm7WskWYtPi3qXLqGsm6zUHWJHt"
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
