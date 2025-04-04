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
    "2EAVTuiuAUHih6qerP3TXtuZEQctHWVWuhDWt4gZ3JtzhfsRoyqcsrcGuAw2tmPDK65rm3ou2WHrdVy2e8YXPdzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GTzGW5btqTV1Anqa5XPLtfPTV7Bxqw5pwwDXMz4MiQNuaU3QdV78PKHMiCihVvwrYLvDKRj64nHzZLQ74FEkdT",
  "key1": "5fvty8BH8zseZjbWHf3QUeg765GEkbRoR3UFbGh5foFoqT6BQSc1VZbHKuLzjeD9HW8ggL5CzB5uQt6CFUJehpik",
  "key2": "Dx5SxTmKCZkGH2tLDxQv8qsMQYL8d8zQBQpAgJfrGNF5UqBu7pqbXRkGo3eQg146brZF2jhqa8hqjUfAcyqTr6A",
  "key3": "3kHNSeDihdQVrgkzPCw2PpmRCDhqCoAgyuExhySWH44fRY5jWtX1C6HFTTnzg7k2yWdXk1sTEn7mWoKrFwwRkrcR",
  "key4": "2BLrsRydSXmU23cPJdRW6AWwxFiTnTmQEtAhdyfEEnrG9oxQCDswDZkxdunAgRZASkS8qkDvDSuSHwYxKS7LBm31",
  "key5": "4LZCeWJWN79rnnDNPSSQwwZZWCwB7dUHGtDB2rYFHF6VcQ1pFAowLm8bZHFZPnZeU55PSzvimLTbQ8hfMPGvKrBd",
  "key6": "4m9MowzmUFVZx1WQund6DARk9dvUz6KJxQ5ngkC6AasVm82w8q1HzyHvijPSikaL1iVEYerVAS9gubjZLMsUKvZ8",
  "key7": "45YBqLxepazds66AVetHjc1n8fWjmfPwWJRXkJZqr3icEy2AkCeMNzgiURSP7w3WxbuPLXZvQtfSNpDpAtkz69oU",
  "key8": "4W2zzXKmf4dVYaFyUMrCWHLrSbJh4G7DycEtCVitQYGCq1ynYDZLt72uuTBRgfox9gdrhH9NHeuZVyvd5UD3u69L",
  "key9": "wRqgvq7imgfa9nfFA5SRJbqfQviwmYgXx2XCSwpy8dyNBuap3MJmVMB7Wej77DYx8xiL6e1Sy3gRovTU5zN46DU",
  "key10": "3MVikK9GZBq8VKxCKNYQdz8ATNkd59kfYuAGL1cr9wPa7FbwZXAoC3yX6wUGtc66qtLTi8qtptrk2gbX81DtW7J",
  "key11": "B6RY2EMxeuYbaQa6UyxsnTRJaRjJYiJUTsPZpyz84EBoihLFeC5BSFymHmQqftP2ibrsiQVoi2sbvCBepnFi1yC",
  "key12": "4rAupyC3oZg16dNuVogLb2sAY51A47R3uMu1T9941Fy1Q9Nuh3BNAknXaBuxqRWnuZUc4r4bgEjrYWHv8aFtdNs5",
  "key13": "5t1uNWupGKiJg2uFaajQL3r1WYm7YoNFnrqR2tD7dWwBjPaw4qqTdqB6FVG1PuJfACvnuP1kmZkjKkR2wCkKWZBk",
  "key14": "4SoZipdr7anZUKofmWVnFT5PaPk8PnsvPXjXcdrPxNymSNtt86YBynfwCi5PWmShFq5VexcSVqjKLYtccVL5W9Xk",
  "key15": "65tcXqWcpgkWYuZ1qngYuMnb6WTveiye4uTkEP3CnjkUa5gDwfHhtfP6ECk2qPiSyfXLxDLoHcKzWDep6ixDaZmD",
  "key16": "4o3hvkhv9KsP2mq4aXxWrevUSokuYPrjn5WzTSQS7zrMAMfsGifrQN2S8SEg4aaANjYze87CBfz9vva5e97BMhcV",
  "key17": "4nhHKrQy2GZVuoe6FT2JwmKWgkCNrKtW4q4U7LXqxD6WiD1AQWcHBm6tyAG8cmShzeKnpAFesqeoy6cggPE9ohcv",
  "key18": "3fgM4KtePpK2BCa3An52n188wYV3mpx5gBxwiaVyW9aLuLpVKz2FqtUihRr2WAjyCciewiJKmuvyvMiuGvJhJ438",
  "key19": "4ayrKJA3TJfkeYYU2swUqXLdEsd5vGLjVnbyPp3kRx4mXpPtQj2oZytKARKgg7HWmPFtxcp7uTM1RcDXFjT6ZpPP",
  "key20": "4yuhZer7MR7XNCgrj16jAfPFLJBkgGmGMbdSHYVe8M42t8oeKGRCUWc7wAopRdzfpM35MRQ1xBfhayz7ZRsUqVgx",
  "key21": "5jQawoq3KayDRbGg8Qs1QoDMGRv8JwuvHi3aU67J1rbXEzX9JCSpX3CumYwyaq6rY6S3bTLbrHiLDQytb8JeV2mX",
  "key22": "4DBtMHbMiEwHLxVfsdoYkmpii3MJaPuPjhizUEPfdriVgzEodpaBMWCrWUu82XkvmQWA8HXqVJ2E6F9qarQsCkr9",
  "key23": "63H9RRv9Fq1JbYytrxq4TjgDH1K35tCAj1NTx6k1DwxahyPDjY6hHoYVvNnaVuYgbFzRCToLL2GG8XnR7gjUBdGA",
  "key24": "4rpR6XF4EeQzytRkJe6g1CD9JnuvmWdWXKd9jygxdXvGbmzo3NjwsxzSB94t5k2F6jbnrz7jBMyMmJrQdkMQDHa4",
  "key25": "5cNkMJxmsBnttfVeVysVTPWCGwqyJ1trpoqkfQZuFYVj5XjxSRqWkvJ8QgfLpB7DG2BhXxMs9dDMLe1A8GGRJ494",
  "key26": "mUSjvhMkHDUeLS8aKessC9XLgHwQ8wyUrQ6crRUT1oZaN59QmSVXsoNrnDxyKC99H8rZb3XFot2itqeeUxfRHWd",
  "key27": "5vKB7Ut8WoBteoA8YHTyPX5qBDxQ5YQESpU3yCjmN3UJCwW3hbWTgvGSRf5ZxGhnsZyxZF85hKgio2XYHD8e49Xn",
  "key28": "4m4i4oaEdbTMEzStW6a4nE31vZF7BCKRJDvyvjzVACpaEd7xvb4TfuNJ8w5FLYN4WiCYYf3gGjhW6aCR8b4DUfyF",
  "key29": "3k8orhggjz1F4ofBfavxZhB57T2zK2rTA5vUPNV6k11V2DjPXyBgDy1Z3S7fFiqHsPFXy4EkxRnxv9NNRfvZZZWJ",
  "key30": "4Bj5pqubyu6etarRrAeWxhZkYNmgF3z5HLN8xpeqqCWrzbP1ZRESZwRoWnyxmeQrjEBMUwzVTe24VZh755zscfC8",
  "key31": "3ytmwrVgi2sk8gQ92feSNzEXjsLAV1NAEnarWij1TEKLot8s3F9nqRmbsbDa4inmYs7fXV3RYRMYEpd2E5XxXr7o",
  "key32": "5g6vnveKpVFQpcMN3NAvn6mKcuvi9ANvQzCL8JwkUogeupQMryMfodrQtBS59mkyBgzk8xyXrR33VReT7FgFg54U",
  "key33": "5SdZfPfAmLxyvmrUL5D9R9FK9BpVQigMrh1mUZfFYrw9obr5Uq5x3kyKbBKNwpFiurh12kMMGYau6vrK8o2gbfFM",
  "key34": "39fb5b5kEuF5gQNybncU522GrFrSqctddYpWN7im9VUKq9AaW9tuehJxkRagwz3XNRV9pQUjKkbCS5RxprEZ5NMx",
  "key35": "5EpasNJrDra1JSNYLCRSskfnmYYUCdTo3LimbhoBStb3qjqmVKHTqUVm9zpZk1D6mkErDtFyXDdFT7LmZPmWn2mE",
  "key36": "2ovtbsmeEGcQb7ogm1QadwKxw8aSsQBBYHmQ3hhWnAPTK359rGpsCNKaDsU39RF1AcVpPPSUJGnQdW6zstzXmho3",
  "key37": "3Xnt6Se7UnHyMJWNYSVfQVfgNiPcsnnXDnrXJYr3oQajErgnU7hXP5GJFu6E3n32AMjveGD9HAmU1H1EoUAPwiDM",
  "key38": "66WsupRrT3z9hagcmFew9eXr9p4qV57hjQbUzwgRExnWysDdS3Jpjo53TLmkEfXUP87AF185w63XRZoaJSMzvvws",
  "key39": "3kjrFNfhTjhnU5KBgqBrocKe8JcowxKwtE3FXszwhcmo8Z69uk4xZaPvmKHsgHDFArF3nsGLpTdE2FtGSxiLPg3Z",
  "key40": "41LeXr2sw9VT7XQWuWT98w6QAN5ML5Uh3a19tAkE1x4Gahg9RyaTAkGQhEMrXF6jybRxKL77ticvikLGcodD6tya",
  "key41": "48B9avxpPPWAv2kRKWKXvwtW7WBM2xafqxDMw7fChmn9VwENFp1EHoBT9VtfgJRnVHMKGQDHKTfS3MWCJ3ZRmhSK",
  "key42": "uvy6NfAP3EpTJ6Qxr47cm5SA2vmC6G2QLY9tGP89797bPWauJUhpTKLCWD6rD2EGyMQB98S1rDW4PRS3BoSzW84",
  "key43": "TXD1ptESxFqA543oBxSFK4xGa2wDQA2QMCAdykiSChZyBcBzZVfcCU2BWoemwECnGzkg9NhibTfhTQPS5EAzQDG",
  "key44": "yRighitBtfJEejQDh6nhyjqKN3TvLaPyK79yDQYwQpNaqbkXA1UYaMnTFGDB5KdQmBPpkGnD8G8PqFU32Xf68VE"
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
