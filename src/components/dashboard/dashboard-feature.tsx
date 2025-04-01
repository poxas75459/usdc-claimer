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
    "39GrKftrD3qVSV4t76VN3Vg1kcnzfz7dujWhGb5PM7ZSb7TM2L3vG3ArtKwxM67B4VjgprEywzkfVPzkx5BuyXsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXYmfhCG5LFYvffaSeLmsecf45Hp2fdPJdX9PDmqExgTpuQPJ3944nEs352HKsg5FxKeWny58LJBsRqCNdJ3xz3",
  "key1": "55nWh9YoZB7zyjfd8x5EC3EDhAi9dgfbrrvpFAkJXc1y68DdVePnksqbiQphdCrhBs7aKhuYxryGTSTWrNvcZKTT",
  "key2": "3B8YVTRHDoeabLexb6LYASmstdxT33epvgJxAYuCU95F5FY8cvkR9APGRqxoMBNixLL836KYr23XwJFDUmGocmV9",
  "key3": "PAZp8G4pUWhYXyfHLVmAMpxBSrdt5PFemee2sCjNgK8CdWU2LqJUSyuMYXWjVSoZJYDszc5cCzDLroqhbVZg9FV",
  "key4": "5CZEsAmJv4qnUrkfT3E1FYSqGTq7sRN3gwd5DivptSj2RBrCd4R9Xu8Mw2psVtrqio6aUpszp7ZwFxe5gHCzimXg",
  "key5": "bQ5KXGQvSLF94Bo15bSyAXcL1dzvmMeQ8rZLAaTDh1n3Vavmc1LrHbq3NfLWjXsf6joqaBkAhGV97dJYFsSQEcm",
  "key6": "4ZPZZmkpVpHA8YndoSz29uDtLfdfSaSuLqAqWkCbsF8gmXnTmUBYLAdsfcvfDXbVT2uXv7YkgtJF1yjR6LGpTcUA",
  "key7": "28BTeo2shaGvgSN8dnSPsSzn9yUUYVy8CiUSjx3djMATScFnxeAizKK6sK84zYMdFvsFwcDVyoWwSd7SnwkommN3",
  "key8": "2gc35rPLE7zGVpkvsfbjiP56fu4qbzva8FDpejdxaYetcDDTTX8rGkA26gNyNt41PMJ9uzNSK2RAcWyiSNsYb6nj",
  "key9": "3Qa68k7otgtEt4sFqiwVS1ci8pjTopzGC5GefcN7VdqRK1J8iMTdR3YoBqYMDMVf255oo4BcgxahusdFhyxpxPJP",
  "key10": "4LFbjypLT81Q8dCesVd9vqYkgXZTxjT21YAAwtsBgfCiXoYDYarSbQTanaDfPdHQY9pVT39iH7r3Fs5zK9aboFfu",
  "key11": "PPYSzCEnVUkeRnQvM2c3nMDKWaexs2LH3YtrYs6AR8dhk49t7fzPRFBKbkd4kRopQUEkvk3Ea1X9FAT3kFNQmpo",
  "key12": "55NdqTrZh7HF3Vk93EL7y1fEb7UDAWJv88co8ZnUEknFAWhdUKqyjit7MAop6EoijNaeBXRKbVJeTszscv3w5MSj",
  "key13": "44RHwargaS8c5a4PABtC2fjF9jPnJYnqBy5zGKyiom4vRqriYPi26iCFmqPLQ2J6oGWKAWVAx8mx9HBZT1q6f9zV",
  "key14": "YZPNB56GhdEaNgDaysuayYxz1KuFnswLUJUKrE2TWz19a9wvfUU8Pb1gxvfdqsfZazLxRzmp1P53qQSFHdGiuiD",
  "key15": "4RoB6nnAGceiDbstsMwJMV82u3ktjQRnLQUs4AgWTGsZRQ8d1mXoxf9tdVQ9LFCUsjnMdAGEB5qkh1wTjAY9k23P",
  "key16": "22rEdLqi5W3RzMYPTQdMXYGsdcczziRXpPDKXvwPtfdSvHDAqE4Ah1utv5SeokWNkCehiatCHXDUnxybKsLLPddr",
  "key17": "3sQxbEQ7hRrjxrYdDpdsj7dNMzFAxiKyta5NQ432vsamYALk9DjQJZYKnFusRVsYFKnxHcwg5LdpUnW2hW2qUkVx",
  "key18": "4a3pofAz7rn9Aj8W1qbSNy9wwUZSMkfaw835D6TWChq27X6z1xhRotDG2LPtrpWkz61MEyvbtSFgxTGpEeUeKaF7",
  "key19": "3xMZJ5wCpWYHpo12ZfYTvJzYP2Bxa2iyd1Sgp5MoQSzMqeCENHPvpsyGZX9Ubf4im4djrXz1WmX6WbJcJ3wHhHB5",
  "key20": "f2j9VVMdqmYF9fbKZCWsf6LPkvczt1Cu9oq619ZGnQGvYGu2pHF7XD2yuSSWhSFNWtuQT382mxpSzdzKbYohgQ1",
  "key21": "3FdbyVofJJAmRZ4XtyuvXieBeg8xHTBH1YMjw8SJ9NUhMwF8B8p5mZpq4FkzQmjBsPTUMzQqqNy3KSyCR27FDjk8",
  "key22": "3HMQpCxHUNfNRS8r8jvwZbPQUQRrDwtzhN8WvwnQn5gR7fPvEAsxzytduwHu5TExqRT27wC6wyZfsBTUixfoTvjZ",
  "key23": "5335FmAsxdeSVH52dDJP3Bhc9DfZdTYQAFjwJ19cGahJKC1CvYaBQTV1xrUoneV6etKhwScZ4hFuPM8DxS2A18qz",
  "key24": "vWfUptdHu6DMQQVocBdqpBrcPb5B4VNDyknKvGcfW7qa2wjawitZntkLuScsfWw7fejWY8fT8ttkdSozSpyJcyJ",
  "key25": "2y6bUJvCXTdbzW9LCeXEBn6YANRUP2RkA7bDoHffpxXvHdjDK9ZWacrYWgXyZNGVe9CkCYNUaqf4rjz1pU9ehBxh",
  "key26": "1fWGrj3Y2ThsSU7Rr1ZBNWvhaep7PNt15MzZMoz7aiHb54xcUoRukP6RaTdN36E5mC3XAufCZPWhhbJ5ryEzgWA",
  "key27": "3hg9fguiXfHzdHAdoDVU8YRaSnfDYLuXAf3AsnqAtxMtHPD9aB3EvhfQSiqgETkZqhmEwKjT96KttkNymZWsyPzP",
  "key28": "2rRkAvYBHHVqiUqXiVY2yBToAvGz7u6RwfubdwhoiaD8zgCyP29wb1RpYgnVsSrWUoyoE6Uzq9To4ovxSd6kjKQr",
  "key29": "4BhjV9MM3noRbN5C3rX7hLzYHCKMp3d1LzihX7V7F4iRbtwBnje4kHbpUTvZefWZhxV7qPNfX3jgn3gUsd4ETMky",
  "key30": "25ZwYjCjDGHuaHudRdpGnT3pXLRzAT4wfnmCi9zkGhdqa4R4wqphnK7M11Rfu57kTXYpT1hLfcJSTZnpuD9dkCrN",
  "key31": "4EpscA3bHdWqPEHWU9vrPmBkUHWzfPgTyzgu4oW8h5Nr72SxJM1AmUXLXtRR5s2JQhxMpVgkPSuvqdrCp7473VMy",
  "key32": "2qgmhdnf1BVjaducs27ur52jKy76CfNQoFQrAB3CszTWHQA7MSkV564nji4HHTB5TZxbzMigkQ7ZaoYw4y5nbKDy",
  "key33": "2MHRPTQ7Lzeo1jBfQRqQBQDBjfrJMWjbP7CJKscLodYTzoxeGSjSnP3ZT8nPrPBo9EAq3FvDE9d6t1WzRXY7dH1n",
  "key34": "55GK2wuKgbdo9GEixLDC7YHG9dYwmgpAFoicTFh7TTsXnGcmTvc417d9Ajo8mxSwY57h3hMUBqP4uULtt8qxALG6",
  "key35": "4NF8oh8gB5p4P175PDdSx3Vau7zZmMeSTPK4j87mnSL4wQ8DrgqshsPpcPAhox4LUghpMCozuDideoCwATj1uPff",
  "key36": "3E9J7SkokHvawNFugdKJQFQ8ZH8AfNSzaXw4ucuw2GQUm2JRhdHdkiNFKS45VL7gjMA8GYHEMEQ5sexCFHnVZqQs",
  "key37": "5eJwGJby6eg1DSnJp8dGu6GriPd8P9FYSLCy5MD5381LBM43bFVpyneZSKtBBakAzNahguCBd5e3Hg7SRc5qRpt9",
  "key38": "3gQk7mPLd1CZY9jSBgU23FxaVswyvR4wykBtr6PAazVsyvQNWFxEQCB1qK6Cw7BZd2hQVxm2KBxqLk4uB2Byz7jD",
  "key39": "4gvammkjrQBqCMNxqEsMHBEzGK4QEK6ayJmDumqUdm1BfZMtNNRgKaYYxadLcAPYV2tCwhGpakuJPYjT9xPVmATy",
  "key40": "2rRdK3QYQSyzYCcR4PxFnJNxaG6SXW6YLMPbtBUGpkjyubqtp8ssQsDkKFFepUqddVXRj2gEsE2puCLkwF5bevto",
  "key41": "4AJeLdkyuRCKyahvoPkKocLhW3qUmAHhykMsB9zB2BHaujxcHSdJrRWWyKE3WgsJnLU9eGH2wbYJEcb99Hx3RwUP",
  "key42": "57oYBotjW78usTSUJwh7hDqG31PngnGEDPJBc2VZjKWsFs1vZVMpGXBaZf46BPrwA4p676MeUFDeXnp9GJeKxq4X",
  "key43": "4HRf1cCz3DUwKxWQp2K6vT1R7nby4XC5ndBDnWVRsDSCEgnyLqUBU81cSDbVzXi4WJsbcujyL9VwjgCkRPupjTRn",
  "key44": "3Npves1gh5NeQPb5vVxhigcrEzL5KVNeKe5edF1yw4vq4pMXtjMTsydB8kXN43noP4Qn3eMmkcCxwLH1NfxbGMFm",
  "key45": "5ys8EH1QopxbLpPWNLazW5hNBj7fkr759eGivqt2K2b6PA45xU3BrKKLtGSUjubmAbKeE5S7EtxiMsckCrWFTivS",
  "key46": "5AmBT27QPDPcCTcDPRYc2ybNhGCZC85437MCfjfgAH66y544dHZ7o5aRW5JzFDi3idpBSZW19SS2UurhskhX6mTs",
  "key47": "4gvTe4RDBW3tKQDgamd1UCKZmUeHV3bPNppXd7Z8TgsvCTFwGwqAdQyWweWAXWhXiyc2VcPGWwYKjNe42SFLqBaH",
  "key48": "4qiCsf3pyqe9MEkC8Lj6pFEgALqQhZfqk8o1ZHdj4o48EV6yLHYM2zwvxTn2HN6zjLwMYuiqVXVjYCjMHETN7fr2"
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
