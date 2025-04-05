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
    "4mZMZEB27sgNspARW9naJVWKsrNgyNAsgCDn7YzpLLyBbGEuNbGecg41aLcYDQKQ4qg5xup6dkrZhpXrgHHWGYsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhfpvvA2PgsQcuBNhx3EZhDB5YBMdkDfioZqQMj9goEqSSN7ZuJEybE1RdHLuivVZkPNRTGoeB1GwoTMEsHUFpX",
  "key1": "2h6Fmoet8en8N2mranjpPfu2Ur898e71bPm7qXFk79RVMPw5webHUyaAeQLUv6CxrT6PKUNuF1D7xPNTbn22FFwV",
  "key2": "fiP59fBLx6YMXaBoHBrinZHnZDzFna2LBZUKqe761Wie4kF4tnEsiHCNCxy7Hsoy9BvLqQiksf9gcoQFVnPbTJx",
  "key3": "5pv8mczM7U8cBVcqcL78v35kNJiB82jYtnt2YUPu4rS1KLoU5V1J4eK3wYAQuc7ExcD6QLBk4kHNX2X3y2XW3jjh",
  "key4": "5uQwcBUvCavESGsCbAwUzxNWcrCsA1ywhi9jZG17cVdUuam7vagJoZhWzaYD2rdEpJWV4ec3GKcHiLBD9NFnVSoT",
  "key5": "3tS5FPCbDDX2fafFdF7pmhgxb4c4xfTKESLXFBvJMYgMkY2UREXpCcdpRSC5hqW5PA1mQuCPEHaei3hztNkugPSo",
  "key6": "hALVRhkdey5CVaAuSokvXkxAWktme4nHWPw2imCe93zCa8PxPkr7EJkVGGAHWwyNvBouenSdQ7B2r8dwzp34XCg",
  "key7": "4qBhqzcxkoDwJ9KKsvQdYFdE6ny3VKb1tuhAibdBZNNQmfzKZZqkR38jsNszcrWEXbWtBRJYRDmBQaw7Crs4NL33",
  "key8": "K1SQTDWNzp8nxr7F9ePh5giXY7pWK3NL6RcmJigDZ2cqvBnt48thdzbvrrmoqz9g9mrfjwQFTYQq14kfyP8gKGD",
  "key9": "5JHZACcMSsAFHcFTnu49D95siGzudPXSdoVLy1eMjSQadhECzEuZM8pwgnkUR7rTuXgshT4iNgFcvN6fQpcWc1k3",
  "key10": "5NZaCXubWnmHjsmwNSDyKR4Ua4fvfT934AVjVSktcTtPk6BCk5wMPUdX6EdsSbTCCmBabw615styLSjASWACpXhz",
  "key11": "4EQcJ7Kp7LFCighM3eRWPXUF8YEeBXZ9VsQ4yB3vzjxwgXD8pJ2U6wCjjJi36kZjNeYSz1Gh33rXHcZMnqbViRov",
  "key12": "2McjouaXoeGRosyftEDFpdzw8g79gJCZ84gWr9but6ezhzUNmV2c1sPSxmTY6yAC8vmWrM4XaZFGG1JiSfieVvVj",
  "key13": "3524G99Haec2NmErrEVQ1Hb1APzMDwWhKgvDFuCgZMeUKCVapV4u47xakogSR5J2GencnZmQCA3cVG6m7DLiT1rh",
  "key14": "hDQMzY6aN9oidkEp3YxZ36hCrsSKgjeLcfKitpUJgvNGQL6zmnfpPzbz3sxMrkF9vKwBRJSapTbEs48S5Xi6xzz",
  "key15": "2FnULQtVtxF5raj3wnSeABW5DCwdSAzhu3SkhQ5XgWD9RxLCVFsWwiGwW7rwwq5YxFwcvZMCHz7k3mb2BixPcxaN",
  "key16": "5zauubF4aoMkMmFX4igyA47WxqqePh1WpAgR49mCCvboVMPbcqdrmGSM1eyb3Fejy5mQ29udCYWbniuMPKs2MgLL",
  "key17": "4SevZCrHgw66fncXQoAXYWApyFLPezLmyDxfUUYbxHsWSNAwSbeFurQ593m9P8JTeTuAQCRKtFSRZ1WwCSz2MTyF",
  "key18": "tiSVNjjD5PoPZRiEQhURACWg4fgN4Mpsu44NhwrZgqyvwZ52zZDf8ReYcNwKXtrk9WP8cyjtZh7He5exgj31dJk",
  "key19": "7jHqN5SAPJH6mHFRghof8zmjLDk9vVLTnWWzfixT7mxKU3BF9ZfG9XUu2uCMhpTkWhZDjXSWqLxBztL1BRVGcv9",
  "key20": "2JcRKKTTsMdCay7KtoopNpgofND1aK45g8wxUXXitqFhU3i5rnAUSsFfTponGmE4Mr3DSgJw5xkESwmBYkCxmrGd",
  "key21": "2vKwE94dHyaa8BXS9yxRkwXZVAdbe3wR9pqWHhMeLTwhLVfhUBkAFfA7ZNZMiY8mFoZowRroGC3NVWqv2FE6Jpq2",
  "key22": "3k6Gz4CLJxbrXeidUiHhKhWCHgGagVYhSz8H3CKXgHvug6FrYH6owFqGtjKhMa69MyWE8tCY8uJc5kpRE7hEC2de",
  "key23": "sp9PMvSq7SNC3Aw3iHtkzKHuJ4RDg2hrrgHXpQG3Mno5f7dm8TGTJu3wthB5fXiFjs4WHM4GSMMwNz938i4Zp8X",
  "key24": "PQ4XS6CBnWbsLuRkitdyWP11JPWGrRCxweg3SPHS7mxXFX3KfaRxZYeJRbQExSx2VjKjqpQoEzmp8b2pLZUi34H",
  "key25": "4NZTb46FAjPXJ9tJ4A2j3286yGgmFNQsVZVMgsb6DLw2qakzTkbockoQZCuNBEP1q5nFTAJ98ipaQrn5HSqX5kgA",
  "key26": "4fVMzasaTNd3iKUa9GUSbFthk59v9DBgdKcWHNmYBAhH65f8weRMrfjor4cAvbUYAqMECmFmgK3fpQ1wHpNEhSHF",
  "key27": "LAf4viNHnuUVhnKFxPi8qpfRT1PCDbc3J9xTZKwARsniyaUVkWNwmE9ZWqfAFtUyyBPhYSKEk6UgrRLfvC8bnTT",
  "key28": "23YkJWwEbMH9R8CNUMYUqK5q95jYPfmMDgCDmYFVgNmNJsY9suGjXNimXRhZmFpTynkBbjK6FVH5GndQcKfLkGjk",
  "key29": "C46Euyb4ZsnhszN1VfcifkEzWAVZ4ZrRxoUHcstq8NniZU63DqApK1PVz5hddVMMLsUPHqMrGChHSE24KbfCYCE",
  "key30": "QWq9P5cvDL4UVvMEP5nHZT5kMx4SRGxrC9W8qgUdFUV4DhnetPWLV47UqFVJhzCbRx8jGugyhyBDMGtZBWjBifK",
  "key31": "anvGrLCdbFRmAD84gvpSZUAcgoQiMMGAYLzvJ1614SMvgv11ZUtF5jwVEogjkzQdCsgDwDH39KrFW7crkws3mA2",
  "key32": "3dVfHT4EQwhwGWPmcafPMvxMMFQYTosoUzXoGaxEpmaGCqtC6LZ67uvptuEFmQ2BhPoxMnb3Nn8yDFL3yAa3fL5R",
  "key33": "2e2dCrKFwaBbPAitKsh8Hjd5Be8FfceQ7ppGAM8zgtkwWgyZZPknZgJ6dRMa7Yx5dfHcQKXKGZMGFRSxnEWViMqB",
  "key34": "4cGDBRHz8YnLPhtsPyApA6mj66XfoWi61e9XEuxDD722aWmRzVutdtRXuZZy7pdHdZFAirsV5bqHTyD7n75MCfna",
  "key35": "yypPZsv3DrWBe4kAB9LzqDYnhSTgNP8i3KkR9RTGw3adK32sLNSTQiAYN2wMTHHNaLJDmtoTpnkZfccVQYenxRD",
  "key36": "3sPaWuByKk4dfYWVBEDPVaZofNF7aZsMPYRNAP7BdAzBaCx99NtNegtaXX1T2B8DPfb5GZbxw7PXab27j7bm8Rxz",
  "key37": "4c8owKFEueJKTNpafxgaAdTm8SG4LrxaBo6kbVjAp6HBTaSUyw7e1zRFNce4M6VwGJubrDcgwgLdseirf7tr8c3",
  "key38": "3ZcBJ9TqFMxFTwGyEsCjHDvGDy4NtMCe9d3bq7kVEVgvuP3CUdVVmddGcFcYGJJpyPwxFPCTbEtJgXuQo3QYthU8",
  "key39": "8UuJtbCmXX3RTDz3H2UPR8BL72qnHoSe2H4nyyUYLCBAEd9gohvpdNWVbczj5MZGwM5LhDNze5NNkZ3FqRPCinv",
  "key40": "2zCae9CB27ekovbbDM9yDXSiwN2qA2zGe4RvqLNgKBtFDfqxXbNE3JGKGHbT2hJccdCZ1DCwjhVQW6zfXsSHEXbP",
  "key41": "VZVNMZDhUcJ1szJf5u5uedVcpx6W8s2cnoas7hKiTptUUVTqahAMmb6L1CmLbvATrX6Ueycgi7vJGVW98meM8fd",
  "key42": "4WMs6W5nUaPZF8cjsSmwv6W9fe4eteZXJWzJA2zyjALjjvFZq5kpbWbvHYjp1EytLP2qWNjx3aGx28SGpSLGRpsL",
  "key43": "5PwqHAUGcxi95qfxR7HLd5YGP7MY2jc1NLx3RfmEwSmj8uQ1UmFrfuUTktwDPND3mbNirwVFqvjhygjMP38mBB4J",
  "key44": "3BQg7wKYsgkwEuCUhjy1pzNuUiXMAT8FsWzhVmqF7PNcp7zZdZkDBfJRtpFrsKZGc59yKL3yw9phHedbMoeA2Nfn"
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
