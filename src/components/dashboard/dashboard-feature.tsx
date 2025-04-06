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
    "sDsppE8y5z7bqc9WbDhh4jPzNeiitvBnkkMKbqQwfeAKQyEkzuiQSet36FCTA9pBoNaYegs5JoKDpAs7YWwzJKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdYDq7pTqhpkj39HR4GRfRN7vdMvPt8vEp4Pye2uenzK1ZrnQwtPZ1T6VYABEorWDDXei6VgQaecF1pSptQxmQA",
  "key1": "iAjD3HBaK5CKUqddPWVbHamo7GAf1JB9uoAYahhvufBitRp9RjdXXfv9QLCnZV8r3jiEotYg1NxqdZyLYNAVN5H",
  "key2": "35sMbtgsgiqAT7mrZTEyczTLwcsYR2bfpWiBgNewRbSRywMaAjz4J3KUH91KATLEBzwgTqzqTmFm8LwCQgcB2AMN",
  "key3": "2j1PVD8bK1CAiw8HyAaij974NXRtuEcDzrAGcYqXn2MVY3kf4qpum98rdhYf1rZ1o6c8xJ3UgmvMiBhxnuLpUgZx",
  "key4": "3B1EBbh5TFei2HuPSCsEdgStxWrgttEmFoP2QhzZBVUWQ7WyFzJJmRsyA8riJxfpEvP56CpwwNBd6HCBSWRqwQRw",
  "key5": "2icCTSCSMx39nuVZAYFguuwqQBpKc8znUvmvfQojj7WhMVtei28XY2eRoWWjqHukzH4SFqhY3TS9bkJj6agNjUgS",
  "key6": "4nQCdwTPvao3qiNc4wiHwEBBzTaXkEuGD1LV9pkWsRaXuU5kBN1A1xBuJ1nnZsc8Sr2sptsDFn9kgUoxTeE4G5wc",
  "key7": "3xXp5zVZfMa66yoMDMJ2jxZga9VVqYLtgsxkWXhKnYaxKLTYmXcWcXVhNnkeWZ3V1wTJ7YExjJ1Vp3ahKmKYXEbj",
  "key8": "67jiubCrCSErsrUrD2RGD5ERXj4Tb1nMpk2vhnTEtRVXbjmtLNmGPt8gRzcz9JVoXWCBDbj6xsKhkMtRhsEm3QYm",
  "key9": "3XnoG43ctcEq8P9C8FhGY26MkUs1PA5bGUu1ZdCAtPNCBqFAcVVRtSmQjfEcS3ZRM3C36qs613Vao2xK31exQvN3",
  "key10": "3ezisknP2gHMvbnWij1sPAPF5zqQiXiKDvjhEVwsFV2SNeQDuapLR2xwmduf46JQUf89aHkp7kBge1MYBwYfkaXC",
  "key11": "2rPzht1ZvKnDZUorgm4xJXxm15EcuY56HhdowDqxnjjKa2sBXyTwU8hYVstLAUMw4uXQBxJDDwbQ5Aii3qyMgY9F",
  "key12": "4n4VqRtsj4dMzPik5m9NrMJvcHtQ9pJvxYjA5MdkarQciueDW2ubFGk24oh66knXbdN4pXoFgd71hMVDhaeLBRTi",
  "key13": "3rbBkLbHwbjuXfuoAbNPm7K2yrq66ouES5NTdoARHg95gVM1SbBJtzHr529ZZrCMwHLbsxfjANzaLFSNxWYXCXP3",
  "key14": "26YEYh1Q2qhdrmCTDsT56yoa6qVT6Ymdf34uzHeaRJ2x3NKzkR854Dcp33qHC4QP5hq1teBbWE9T1kfiEyPWSa8g",
  "key15": "nU3DjkaAFVewtRT7kA3SL3MabgfTZ11qg37BNV9NWFTAPahvVM9i3sRcYTvkrMYTyotPXfwF8X1Saz192nqJQ6N",
  "key16": "23v152KWsdHvzDaPSmKQuZUGVNwkoLXCbtKPYSLWxgUaCRZ8C9p6RKkQdAsf7VjXGVcUVhCe68Hf1Q3nqKcTqV52",
  "key17": "2qHHiGQoHyszv8Va4Wsk7ZS7HFES14TawnT8QU9rWZpRaZk62BjTPWBuXRDHsrfDu7SiFjujRQ6UMV9ZC8yctuhw",
  "key18": "5NMaKUkDBpaVwRced2sfjYYg3uWDGppSZ3i6EEUxjvTpaKjbme8J6Mnur46WfA2YVGmFNNsa31Smg6hbABEyiYR8",
  "key19": "vzC5XynzwxrqjtWnXcbU1b35rT4fHtjxTiTdFYaBMuJ6scqe7tyZ9Ekqo76P3wTqK5ZTqKKnHYs1CqWAxSoxB9N",
  "key20": "XPTE8GCdZRvRoRVFiWBPBLGTVcdg8Y2EQW64QKSBhz6GZzUTPrZyG8cFAi9izMUreKg5Wg7W8fXfLd6ZVrD9dnA",
  "key21": "5XS4wzkP56T6enfgQxaC1wmrvP5ZCWH3o68mZDghfqgVPNYR5e4z8rsR8mR3HdzuRep968G1ZqVf7uy78txrSAGu",
  "key22": "2P399ntcDf3eR1SZHpbq4UPSLw842ZjfbvwccKZYAjwZSEqJKvKqxQYJDKJdcLjpUjquvr2y6rTPXh28kh2zAVqw",
  "key23": "3g4pytABrReNNdvm6hdNKSxgdMFsqvkPFWBqw6rbgG7kcDHvFxRSSDJRndXTfXBcGnjNEe24Bcg7iSwfUkPCiykM",
  "key24": "3j4LJpy8k9AvaqA6BMrnuVNY1iBguWR51Aq41Dn7yznT37UDeTsCvofStAnZAaqZq6RNdBVGoSRUgrhmLsDGpqez",
  "key25": "2VRxNqrfNTfwTPLXVTuaZYbEJinoShcscS3doF5JYRyj8NX5y3LdqTAnx4iGPuPydUP3LqM4aqRNspUFvV3g8XP9",
  "key26": "39hC2axKfKCVubLd5WednUsWpFyXcXMDPTGoZ2SHx8UVLAKEn4Us6uSspGf6HfLjw7UZsuyVVsmAq32NaACoG5zH",
  "key27": "5f5y8gtt7PqKbUDCWtJNom6ZjyXhxLYgsCCLrWgxeWCanvWz1otTtBEpxpvjW8L5fYSNRrzLPh4qPyaUAhCagZuv",
  "key28": "32eQzgztqG1yZYLk6gDpN3imCAqzTnqjXEgN8yHE9sDmq2bZSKH6EJV96YWtvsWUMTqvpRCNd4qsrfQD4e33fPje",
  "key29": "2xw7Q6QJCLxQGvfKohsLRTd1WBB1FVaiRmVzrPVpvJT696j5AvAD5w722h5J4BDfQVTWms2ALpDPcyYcS6V2wQR9",
  "key30": "GfGVY7MqV9BBtikaXmjxZGpKHHtiCGhEJhSq12RS5yrkKwMivPnvNdk6sZ4fT1kGbRvHj9cpg8zhsV5FthNjg8S",
  "key31": "2dYrSx8McU4R94ETic1NddnNMXU2k9L5sfSA3unZqqEWXDfyCxu4A2F58RuX5u292p3bcHdXJiL19gESD8zakxfQ",
  "key32": "5oHrBUFNGCTDDksYXaf5qaA4Dng1DM7PKcjBwWPsRFVjqp2uKnU4D5fzEjkdFT5XLcyt9H2UGvRiXLmMYLrv4U81",
  "key33": "NBFjpVqFVDSd4mA9hecpyMCd6qMPUt9mSL3aNqi56RysfaR7e1ApPGQZ5XKU3yC8m81gW6sB2xJeQgNfR4umUQ8",
  "key34": "3JrGM5hBxTsnSa5QPEd6xrBRoHW8MxFdrsvWszRSvpEw8hA5gfRVZKXzT1hSi9uoAr16AruBD6TG2BQt7UnEL21a",
  "key35": "5n47We5iGNRajMKXmjctRRVdXwzEYbAZrUjqJdBZY4rMsdPsYNbqk5BEngkWKeaNtW5PYqTJYeDVSyK8GzgoPrfB",
  "key36": "3bcLmG9K4u1rXu5thxRDQ8EPTy7kfco3i5BEVEkbiov4JEHuVqczUVWYP95SzAM5zesf3RG2kRpw4u8MiCTQvyCY",
  "key37": "2arw6Dia5XPW3FqcJkvBZqpBDBY6QLfT7ejozYMAcaiQWmJBGu3e7ckqYLy63VJ8HuD21kbnLwnjutaayNhFieEd",
  "key38": "4UFC6tuMgmfr6mMXgw8SFX3EBuyrYhS8zGteaZUstANftDaprwaGusafQ76hnfNUhRxkW5s7sKkrTWH3UFMJG4AC",
  "key39": "476AXomFfPENtQwhy7k7nzh62zuVmner1MXMnuha31sS1ERydoBVdv2Ke4qriyXWzm28Y77GRseczzVpNQ1u3upb",
  "key40": "5qya8JyJXiGD6pe4VnaRU4bNTu6b8kvUmCvGAzsdSN4gAjvMJw4DkwsB3zwKGVTVnzUnqW6wqiP71YQj2uGX64qL",
  "key41": "hwpB2qCFeGzGapbXFpsHGdHUaJgGG5tbhc1q2FdbvuSNnSDhLbKpiYxQwELjcgX5bG9XpuVyZhLcYR4TYBbCNE4",
  "key42": "5pxYPJXFZ4WZ8KzGduV2gVsGc6KEssVojsYbB8zzzjeagvf9RT3YT6EQfJmX2asqGVf2crW91N1hpTKs4DMX3NdL",
  "key43": "5nnnTqpawNxby5nJCty1DVBrYossyEnZWyVyCUyQJF9MDR5gfNd3enWe6dCk1gJCv2WDVF9fyfLbrp86fPhRkgpb",
  "key44": "4dqsFcLuBAX81W3vWTcLSDYoB3zpMqxeafoGbMjPZfMUjCercG99RZ2wmrsoLRyxWrRTeEuCbHPyCFw98M4VGpRX",
  "key45": "2wL1DccgiUN3At3xBRXbdpdiGK2WA5aVScmot5PUuL77CCYAGWKEP6BNvmasvjUAxAdw5REfbkJz3JBEMo7Kkedr"
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
