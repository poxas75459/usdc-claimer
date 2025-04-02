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
    "3jK8UXBT3uXtHUDZxn9b1caSpq86eb1UbWA1C8EzFG2GiKirdRYozzGJkWSF5PEdHtokP9hVVWkTw48YZJqDwMH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKkKtp8k9A3AgQKPfKsckcKwt4e5joP4aULRt4XabGLPNbhCnpehvJaj58yP9UwVKVJdu6jKH1rnDqxZ8meV4xo",
  "key1": "rgKkpFeRwv4BnvwbwwzUjo6iKBXNdoyFYg8UQEg6wJc1AaFNvyCSeUPg4dCQNVRGEWRpKvQH4nDuwATeQmRMoeV",
  "key2": "4UrKCp9hkFgjLK1i5SraT6om4pasPcoFT7SWuPmNCdgPasc9gnfY19GU9VNUsnpPrhA2PskDBCbJ5zkaQUeyRb4A",
  "key3": "5ypPwpgFPUscvPsgQRFM7zXPf9fHhMNfCkDaAmim2r8fbW4VzKkj6JdFnnix3MaYhfTwFqbDvM2vbzVPQ1qQwqDs",
  "key4": "5CDnfcEQuoferqzDufbK8NCmPrhRCNbsodekqCwbuPE7R2aTSSk37DJuD9j4Pp6nBvEQXmG5YeW2agHRR1T3Wy5X",
  "key5": "5CuiqkRhbfBGUt9KjvZqXL5xGdZZiYo9SLBdxMgBAeH5R282aJ9YGxbKq4zC5HRf2rskC3rLmpZZrEsVei4GKot3",
  "key6": "sixJpmWsWhQvrmtNkCDCbQAbjt3YFVRpWb3PM4jTEeXEbWCFiwcrF4HS1sM94J2i6mhuScf46gvyKwAvkaKGyGX",
  "key7": "4EmHb11C7g8krwhYQYRqiQ1maoWRtGbXacRCoyFif24BneuPJ7xH17Mt3g6556AYeAGBDP2oqFu84WhHLFaeJ4Kd",
  "key8": "tnQiAYqFSZk6VFpJkTkGdgiWyrMnyyv5bzN82UYWqQfRFduJiaBQAUYZVhrqvduNRDGNBeHDd9rLvtDCTJ8BJSw",
  "key9": "2tgTpJUNNhZPkamLMh7fhin4is7M29hQLWz4Bnd29mKSSyZXzwRHJNNcUAT7dUJkrivgCMyba5CUsmpj8j1bazmx",
  "key10": "3TtFy7xhtLJmyAATzXG3RMSjADRZKSXqgity2DmQ8r8WQaJuX63PPzXvq5M4BpMjHVe2Y784dWF2vSY4NUrD6oVW",
  "key11": "2r6MKoJmaLAS8vbwBcZgtrr9PA8yjS5XWqT3x33ys5NTfbuGmFypMhMBoEbv6B7XVYmwmhXsqLUeV3mZ6mjstDtk",
  "key12": "31NVQJyHyQnHTs8PodSzqC5VE7nzBQLLa9PvfjytVee6dZgvTwDcQ6exV21YG67j4fVV2aW9WJdzHeN8zfmoeRop",
  "key13": "4WDqYxSeHijitgxyGrENtQ3iLhEqYSrjP8Rdb53YTvm4QRyDn81Ut6EhHXTciy9ekjH1vmk3XPGrWAb1GFwruU3f",
  "key14": "5NHS32fuyjGFmitpi8YBmXRWVqckC8MCSSJDZqPVfDxwE7gmAD2gp2ButCoxA6jdt1Qd33xD4Yd97tCWkH7Yi3kL",
  "key15": "9eHdviU8HGXxU5RpvYjUBUe6xTX2SiMxAXYkmyKP4tsYGF6MvpPuC1PRzHYJdkapYSoMAJusgQZKzNCgK5UJssN",
  "key16": "Ky4GE2cjYTDC5CtbyyAD49LooA4V98PBUPEWKa8fVPA9J5aKiRmYfHL1HnfayFiUtbphFNspTaAzQtFZVb4Kcx5",
  "key17": "3b8QuAQsudMdny9B7oTML1Tm7auVAXSa59h3jide5i7XraBfq2rzK8yGVHmqrNXxpShcevqjTntRSTMDWZ7LjPyb",
  "key18": "Cmy2tAo6BoqcwzcEfXUGMN4J6UEk8S1rToLPjbLH175bCxJkKNa8khKdk84fcmUvsppvDPEp8ZkaWD752fnnLor",
  "key19": "4iHZ2WS8uLPmmBJMjHGxTJJnSkYUd6iXezSRgXMviczKHWyZwu7xkoxFpCiPwL7ah1h4rCkjkCMsEqZptxRY4Bj7",
  "key20": "5UuHuSGYPNJ5diy7vm4stdrVny7rAShC9TEd4KQfAAHLdJkD4rT7HCj69bSfxhY6MKZE1petJxrZ7KPfUGK9ZH2Q",
  "key21": "4KTHdGLXScm2zEnuGErMNayi4pi4R1Wu6aqRiva7oHRtR3bHW5pnWaH7z8V5AnubP62amGRjhw449TXyDawFN7XN",
  "key22": "3UX1maPPKtNtm4C2eMnHNrgBYMyc7LTpxNiePqP1Wcs1GYGR1PSZUq1gbT6YVgQu83NUBD8NJNvfMC9mPmUV7Qto",
  "key23": "49SEF1dckftHBjwy4HykbsUyEBHAsYAXMU4HZyMRzQwT4LYQaAbC4JQcnCsnQVFq4VTy5FbAv23vcTprhA9fxdWo",
  "key24": "2i4XXwWhhN7AurnCAakcsJY4RAw6aK8Vxe3LQrh3kf8ZKSsMMRzpmY7m9SmDvzCgKHBBDQFQMrFPFfSQ8Pb4PDgN",
  "key25": "2Jo6jyz55xddYZMY3H2i7tBfqADS612vGdwpJPEj2rX4wCrtvHoJ3pvw7v746SHkPLZLDNeRM5gSEQARPKqWr8sQ",
  "key26": "2WBL2uw1TV5vAWiKgzQPcGMnxsypm64hdvFQhc9CUoe9bzTaB4g5GfNCV5PGdHUDAeub2AXRskebyVn7J4swF8S8",
  "key27": "pMxCZxsy2cnZpY2vKVX3zEM8G44xrk6qamKDrkyMgeHqfwfSoSLczWa6nM2xZvSWcSAUfAC78Vg4yH9P9k1HFFL",
  "key28": "2G896axwx9qCLmikaZbvboqGmfdj4bpohc77P14XqegML9eBt2J4vzhCcePJ6aAxBdd5RrTmcb2aBphXwYEau16D",
  "key29": "5yAmjtyDi3LVkBBuob5iFDT352dAdEHMoTDdmYMFAjrP3gcxVC1JKxpd9K2VcwhPg2X8jAS5Jde6U3vHSc1iARRr",
  "key30": "3w7KYgwcSuW681Nwa9BB771Ls4A31z1SjCfQba6assyBMKQGcXumnhMihLE41RQ5PXXhzUMdxYyxHptukHTbJ3M3",
  "key31": "QYhw7UNJqoht1d4B2WC36vccFucXoetSXpCHsUzYmPQTCct579czRKsDNrDtgypSp1rYBixKD64ELfx4srZGBAK",
  "key32": "2f88XBFBLCTuuJbhkwnsukSSE7boDp9VoUpAf3LD9pAnTCGe6zx15c4uJNSQnvaFTsPQVA87RjeumfqQaDfKYJN4",
  "key33": "4DXLdbdccCJ3P2hSSqt3mNQvVnKq2CqwDzz8xooMGo4yLyYvUE8tt7ZNTFwgHiwoR8WRw8H1kYDcZXFNCNQ4mqLn",
  "key34": "4fF7FdWRLZF7WEXdZZHDw1AjCzHm7nZopSB4Y6DHbTKz4fCpvQHgMoHaMpNZJFep2FP1pf5FTNPKbM4jF1XfeBdZ",
  "key35": "22xS8cxnYFFwdGG1RzNiahR644azqzgYqNAhicgV1hF7q5cUyiTfS72PoPdXgkxQn7yVeLd9wMEhcFRBkWD5ESg5",
  "key36": "5EeGwZm2GcQ5SuGisM6SxaMay25u96RESaYFN5pPYrrx5g1NrotQwsXtBJTVJmXmQeDitFFwnVfgw8ykkHwBF7Cb",
  "key37": "4LxA1n3Hex3ibG5WBwZBQeiomeLk6Dnw8xVgtcMfj8pugGnXN8jsdC8CPTPYwVzSUvNsu7ciayNFVtT76AKwJfAh",
  "key38": "4DrCjswuNnNKVdtW4vXdjqeenhfhiujn2fEcHidRhr8JhhKxCsR7Uhd7PAd6DSeHr3UyxaSuNe5BTfj3MZf2kJJt",
  "key39": "5d4qj9HcFfVSzapxUGTe7xngV9sMJRNpJ1JHdTYod73HhKvfbnJ8Gsis2CYsFLebrEFsmbUCJ2aAtQ6geEwJPPPX",
  "key40": "Y51V8TLLNb7mzhnw9BFxHPo4M2YWb4B4qhYp65pkudUdArQA3jTZmQVMorKaPHqXsqSphw5JLoENVa7SoTh2sZe",
  "key41": "2V4bLzMfAvAFEhkg9reSxRtjdHQzSTaYMtMwMQcQR9uxzhSW79SvGiEwAE3AqeLwcHVL83veK1LAFtRhivEs6yTB",
  "key42": "4FtzruYcWENVtZR3X2Mb5jJHs6FFjzPpqigVbbGDFGnrjtXfujZgq1nHKN1cR62dr48Uh8RM1FmZQsxAoFk8APYk",
  "key43": "PQKqeHdXhyedeXxZD91RmgmW3bbZYJQ2ebBiKe4by9LH58fYbgQq9y8YHDrGEAzs4PbYu2XoU1KBWLpQJzrfarM",
  "key44": "Nx4nHJcXc7sPPekD1rjd8quT3pAyvx4ZtNPqg1S7SsUwP4ZHdxzsQUFohZiy1vMusFKCcwRJ1jG9Fw4VaVjd7UH",
  "key45": "5iguAXmfJveU1No9RUdH7kqhw3fWLvKiDLZapoyFtEc4zBBtyZR5BTzy5LqexvckV4HS38LbdvGtzGNf8pVpRUVf",
  "key46": "3YxvtrcHPSmjxPqNktZFwtkkjP4NpMH9afJzV4P3SFqzqx3e7ccyPuCWNSP3xobfi31fDwpkwxXCdoccvkFWg7mh",
  "key47": "5rfkeXzw1ZGgnGB3XRDtFP369t9LiGRT8CCjrVKLDkoRxGuMrchNsvsiKhq71jCB7zxJVuvjtvXjSGMmZXbJffYX"
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
