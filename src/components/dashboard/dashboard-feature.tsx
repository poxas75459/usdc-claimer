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
    "3n1VtS6GbZAES9UysTEpPSw97nZ5ZPNkTBBEayuZW9HNsrVGRWqrDj3TmDL4Ts4iLT3xQJyQQKuX6Wmti5sBDDhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FqXBi5d92UZgZPVy1ks1pRBwv6Rzj1M1XzeRqsRqLRw1Q1jzJJ5LzDxZh4Cn749X8RVhdFXYrvPhSgs6sSaKkG5",
  "key1": "4AS2EE3e4xkdcQgwofMkDMpNdvzjmM73EFPwajUd8KsSqHbn9gCwkEqTF3pDuo9Ym5RPu99nouvmNU4RAtTyDoJX",
  "key2": "wybZZkKjsfEJMeyxeCsgQy4b8YWRGZ2VuYyATa3Srka18usub2YqFZKStHf7C5L5bfCX7HUK9f7YTvz8LfdpxQ5",
  "key3": "2kP4FXVfQWJA2qJEWpHwo4Hu3gmP92BT9d9n875atm9hzqPjVYbFh4M6JBn5wxyzoGXjXg8f91wjDomssF8zQ6d8",
  "key4": "4nHjrsS6GJevasx8Z4R5P2MVQgbTvN7pMysqgvumHorGNjWwAp5mWw7z6Sf5DL5QaXYBYwjXt5yMfRpZpVYVSvRX",
  "key5": "2NoWsfdZBVsM4qRhaHVrnBWJHoMj31221r2uhc9ERmsVLrDLpfTf4cwEkesiMUA4iAYLJLnDsbKDeZFmNWpfeU92",
  "key6": "5oEPxHTXeQWfbEbUCE5ZDHPW5953ZfccFpASnGABeRiHFmNv5Rzx3E5RcUQVh7hDL8YkjeE84EeU3gxZsmrdaQZf",
  "key7": "5g1LaqdbJ7xTUSuqQ8DffXDREjrAx5QAi5J8HJtnqXEGoEFSCKCBpjLVvD1DKgxaTPKT8PdSaNFwihS4dm5Shn9p",
  "key8": "SXQKhCgAHG1qzMNp9MCuFMQegcwYuRy8o3nprPL2TpbzzvwNSNWTh7889G33nS4nWTNjA9uQuEg8kNJiubxggCY",
  "key9": "3CkF7fM78kQdoYhNhYTBnkMANhby3AsgKGQe9RkQNiNjsLfzD1tzn4Vjaz1SwDSB5MjicEQHkYDnAJ36hwxhznbu",
  "key10": "2WfVdJd1X8Zi5m9VyaN5oe7h6boavawj9VpMCT2Drj2GZUv1ciPEEMVjCKGvX28VeBeLtzWCQFRfV9oKbVfebrrM",
  "key11": "3Lq6mx6QRMb9UeAzbvAWk839BtZs6vWhf2PmVSh4ZwKWNWuCUjQMBKGspiCPh7Ltsax8GxTaWbVz9YwDRxnCsXCe",
  "key12": "4hYYAdK3KwEDVQPP682UF1fqBkwz7PkNmj5hBRSqLbRmt18HRBRrX8A3acRqMF9nSP58FiAUySQ26GeLjRY83uE5",
  "key13": "5ndwQpjogSrpoKVMh7EXK8KJEabSFMkBAHaH38gQ5nxZo4RjtGfRGrubunP8BEttqVFqj7ZjFdvK24ysFbpMgPUd",
  "key14": "4KKyCZgqag9cXez677gFAWvYPkNKAUFPozLoCz4TTjC1xfR4rGUSqLMtEniAjV9z31TwcbCyNASxW3zjsxCkqZq4",
  "key15": "n9NLYakoDqX8YcBj5kqGJgdZwFDaLH6brQDWaAYF3CWNCjgGq7wzotUS9c1Buq9pw9XEkQD128y4KKa2DuurAXn",
  "key16": "3EHPazkea1vXy2dzrbHaKcVC6MWYZYXbTAB8y6xaRCgHFSfLLdgd3SAPjVHocRqbuxBcAzAn6GaHvTBEaCWUh74B",
  "key17": "4edDUUGmNkSyvhF5JXTrhWFKJ51P1chRXCfymFUVMpgqB97JBGvVopn2CvDADgtbYeDbDFQFQfNV3mW4zZRUoSCT",
  "key18": "3vptfNy6hnruR3eoU3G5RD5m7WSdMSwbmufts8rAUhcGWY5LasRewxSMzdzvFv59iqkaq5CehGq9EsaAkrFeXmdU",
  "key19": "RnpLXkz8e4qCNZzj39FcD2xGNTKHGvVSJb56ZPMbTLUFJJKAuggeZVoBVN2BKa1ViZ6xHzewdyG7hC4GfiKSa9B",
  "key20": "LMgowFU7BRTdRFngnYBArWC5b3Fxe9VAsuy9BQ5bJgZ4cfw6VTeg9TmhC7XbfeZfm3pw9tgU1caLfoFTzB4LLrT",
  "key21": "59awQNYS1qSbxukND933dM5UWpUo4PenS4b4ttRdSdFFZhC94iWCCEJk2BT54L1xiv5gkG3UDMDbUYDkq2ZXt6GY",
  "key22": "5rnmg6AUg51HYGTqmpYbMormxcEGbKDj53iZMKTUcGF4Stay6UekfKfuToRKhmJxZqvcDRrCpHCo4bBp7cn1wn59",
  "key23": "TsHcrqpypZ4SCxFmXK7qYQwS3NVYeQteNaWYVtEFRRK9cWGRb2SxbHMG49WiXt17NvyD89kstZv5QF2PkAL6ub5",
  "key24": "2eZ1Bte7DXySAHL3xdfa1Hw5FW8k4jYR96PhD142XfXGWkNzZcPUQsu1Xzgm2bANGEvEpvnT7H1gDM5db2gBrvTd",
  "key25": "5Ki8CbrQfUuB7SwK3EZwWagNsDkHe1BVGMhHBEhqXVH9FZJwozdvQULWveVoMurkjwg6xVaJMoMZghA9TKThF2wB",
  "key26": "2rrUEATL4EnjJ8kX7Hv5DtouHkkFhMgxpmAH8EzMUWKzha7JpRxx8XVToR57bSuiVSdxRSE6DG5vTxtrxvMdEZmr",
  "key27": "39HnuG8ZVRZbW76cJmqChPc8YKrEt8qtETBZu7JLJ9K1LzLdZCcPoeJq1ANKJCUiVUhGFstWC9mq9NtKREgVFUMX",
  "key28": "4owFsXzUpBgYUEXinp64bgwFphyyqJaJBvQxKYDXdCafTunec1hfBMxhQDy2tGDovfJ8sSEayr3anQvFXzn71LPK",
  "key29": "KxnvguoiJHtQyAY8EXXB32Viix8sgiYKNkQFccSLH3wZ3rmKJZ1cqBPAMk1GSXrYgtrQqentzT387uTpcDtBdJ7",
  "key30": "2f9R7kPvSTdxKazkfZZzkPsAWomxnqTEmQgZeQXLm1p2oCk2fQuPQEdjqQpyvsEW4F39F3DMRsrMRiMiqv19wgG3",
  "key31": "5FBbA3aP5r4QjYEm4pnkgKBnLbZGRGRoM8wtzeF5XMqojGJFyfJnBNRBKjb13HUnXTXdVzeFac9KKDBoD3z81bYM",
  "key32": "2Fja91Z9jrfmbZNHZXuhTuaXcTtJcqvPpaiMhLuzLWHVt7tsPonH2CnrdS6gsvPFvyrHJueDKXnVAHT3u9W2HMVL",
  "key33": "Yjt1XJqdKGyJfpxDfYTe7Ff8fmPKtPrbjJnxJVHUM9E4RTeZJGwa2V8YEcY4QJufz1KccLgG7xDKV76DagBgBrJ",
  "key34": "28jDgzHLsGzpyp4wuuUnhKs1wvxwZoW7n6ePxDPR5iiFFhUPquYKAKLJh2Letv4T1HWeC3BvUbHjCDLh3duKFYiv",
  "key35": "4ci77VSpoChQugn4FSeMsd1N5UFp7KEfmob7sL7xxFYvMhkHfBRHFYnW8adCeEuV5cn5PsbwgBBG9v6DhczqUQ7C",
  "key36": "2cxmU4X11GyMNd4kWXBsxYVSiUwP24T8tPuReT9Ve88PWzs3VzZpKkc8MXcZgYhtdcT1cU1mdkpxBfFWRzTiMma2",
  "key37": "oYmLwG82VZX6AztxEofppEa8hyD6YJaUvRygkbEisgMND6KDa8oNwDQQLxkJ7SETCXrDdXwdEb4Ac9NtGoyp4Bu",
  "key38": "4Xk4Tiet71utfqGxypomPibwSNyu3TokvyCEpTQW2u8ybqi7Hp4aJQeL2iuxxS1aTHwac5oAwwvn1fFwSjKuFhpH",
  "key39": "3nXQgr5jcekGgdnxzsUEpeuCwWvPoeCr6Sk2NyTrcMLtmA1LgPGwfyW9cAKMstkDYFmFDjwYeTBbzEigzW8FxwYf",
  "key40": "Ex7Zf9rUTUW1efhLYHyJsUE1Uhrv2mMQDWpDSUHVQHu4c3Y5JNAtRcnG2goAC353n8TcVsRT21yrAbD62zMiwDD",
  "key41": "33p91od462FRsKvrxHNhkTcYGVfbfx6UTuMkvd754mye7ZfZaEQepMvnMLDPJQvMUmkPpQ1HgpU8uEi3CdByEv38"
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
