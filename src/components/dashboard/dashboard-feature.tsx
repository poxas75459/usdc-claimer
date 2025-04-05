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
    "4h8B1VTiAZiHacwqzf53wznGpRzvygoLLkFLN1YBzTyv4nxaDhJSmSHih3sZkXCUhkAWP5fcCDfsgQJacpZ1LRPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqvEJQ6JYSDXxCA6AWmUyCTYa2sGPrPWaW5Ve2Si1tTHzBiyoeV3XNWYtdY36j94998yLvxNCus8BBP3oXF9Ue1",
  "key1": "4T5MNfp268bKTb4NBc79sWJhUALsr1zJY6VMwACPAVATB1bPU762od4KPA1FbKD5KsUPnjf9XUc3vYoXz8zqyg4N",
  "key2": "cHHQHKb93nfhFpjmpKM5uVihSvXdxYkmMs51YpFtZTjZMPxp2nm9j6XaNm7dRFknxvQAorWscDptRmTvYyQ1gQL",
  "key3": "4CGLwq1kcjgseFcTTmUhSohx7MSAssmKYXxAGLojzABAUbNesrnoZfXuCgNcgcgGT1vLvcutozEUBCWwLD5xwhBt",
  "key4": "5CdZYnASLgjwriAGXXhktWSgFafvzRcLSiR8MkF7Ss5W4mKcvAyeyGF1ZVASq6gZu91jEh64682ZUFzFjr1SjyF4",
  "key5": "5gQ7bof5PF31p9uXxv4FTZkAyzcB2CwDSzqeB9raR5TTPNKTDEy3oDMAVe7WDvoetRnmQ2Qd3ejc5YUNPzCMP39k",
  "key6": "5pJG3HWbyFR8XK5DaH6NcAsfbDaUdQHwxxoc7N12zgeZaDC6fwM6ndxrmBzaBbq46jwk1pXWdYAFNdWkJh1kKepX",
  "key7": "4vE6niCkJv4rMTRFYMhPASxB5A21ZrXJrek13D5i76XTUrzmmf92R36dg7TfaW9PWZ3xCnjzcxsbM5TmARg1UaBV",
  "key8": "3PGL53cxohKgyVGRpATsnmQTtCM9xmzfY5ZFyNZTvMj3MF2va1auzPuRc9om2hWpjP9kDX1t8P6B6mN1QeKLFGkb",
  "key9": "q81fUYBdJgGGbBs8p6tTTydtKKhUiweg7oNhqoLYiJt4vJKw7AGnFqPFeHuB8QYX1XSSoeaLmq1ktRmiLJuL5Ng",
  "key10": "oWkLJb1ogkyzdnXZD5uMSvKxFsfGEAa3JVi317EWQNy3aZPuLAWGD68uQDP8Ab8hZLx8TmULxrfZozxvcvQ4nhf",
  "key11": "2x5tgtcrYUaUwex5BvTroDKnXXNcEWuJK6PtGvAgfj34KCFrzT3fUyfFj8bkgf6ZMuGHvUcCbVyk4yT6UBTdHCC6",
  "key12": "4EDL3BwjAva7Zd9zfg87iUDgtPDixLv24wmys6ViobUkWV7H9mnF6k3iTWsh8UQEdj4B3mSmrXqZeBQSPPfiBrG7",
  "key13": "uyj7UveVQw2XzZUYsu4yrbUepJAGDgCar616FkZKtXbrYw1Xi4A7oNc9Z1m8zSV11ekLW9VAejCyVx18c1aaTve",
  "key14": "GbYaF4SAadhRt1znW7XzBggPaELepnXL9ZTRjHPEa4sMvfHNCzuRYj5am6rvKHugfkhBdQA88pcA7qUvRrC7cPz",
  "key15": "5UKgyd9vVFz3xkzWtvWsjUjFQedhEx8onFyKNuWZKgDx1v2ESr7Me4UVu8XxnRRRBfjncNUeqtJ6hATT52xpET85",
  "key16": "27V6LtbbqnM8fVdRKdsswGD9bZmdaocZPYmYcRsiCGewAisqUPLc9d6nPwSNAEwXTA6VYSdimKiBcwR4AFdAYRVj",
  "key17": "2dr7nS82hfbsg2LWD3iTazfke8oXj2LSfLUGjvG86fFLZ5kyUTYNqD9qNzXo9hcQyuV6dd9YKYS2SNZndcrz54gR",
  "key18": "egxULP9jvq8vrkxpCCKUXokNhyQW6bFwx7UyRm1eJujXNj1tNqCyLpsFZb2rFMFMgsUNiEyaoQsxtghQa4NGV7E",
  "key19": "3CV9CH7v7bzvSFzQaLRxdVusngZXjVA8bh6WvDDS5K7XZH1nwbXYPU6SUp2QWocB3VW9JuysipDa1bHRsMHPzP41",
  "key20": "2QT4oFFv1trjnHbFhJcLzd7qjtrPdEMu56LqYoZshiRazGQrcZcZcbCDWCrdvXnAooUxGZ8w8JKyH6GCAYsEzXmH",
  "key21": "GWjXVHuCPAeVpq4dGeUxqd1A2gt63rdc6Axqa2V9eu3h6r4oDXpakjt2sa4trXmuuutc551RFpns7Cz8RH18yyy",
  "key22": "4eTcoFcksP8ydsLsVWL5QZ3hfsT7tDbXfY79cUBU8G8y8kAAzR8wn4Nnz1Xy6Voo1i6dA4R14wfqzeELJZUCH1bP",
  "key23": "3zYoPB8jzz8V27tKywhtwR2FbXJX1gzPxFmZ5gDnRC72TkuXhaNwfu32A2EfaddgpdsHAEMfjSnkdf5HPKSSc4Gj",
  "key24": "2AyZwDy37RiG56y6crraAuEEyUX66HJVsC1v5fDHDqk9iMuTX7sWCsvYt6yMVeS4xRuxAZXyVVpCLhM8yAV9JHMg",
  "key25": "abyiKTqq5ZDZ5yj4VpYduLHqT7s5foXuWNRCVogHoAcZoUTfRVWZFX17dPszDUbSMkzNXdLYc9cFLKcJrs8ADt1",
  "key26": "4K34n4mtGQpTGKsfTPhERwn67T4sBPSgrGeSHSPNL3bN623qYW5sTCT8Wxj7iBuH3cjiQoKCDca3aa4hRboumidu",
  "key27": "5gaSNsqJGXWyLJsn3WECRySHreALMJLERrpNBD3xSEGSA3w9zQk4gcE5NTjuYcpxAzcyRiUSM4vEZm35eVoG13AE",
  "key28": "4Aw8pbBxuUdBXXpouPRTpbiexmJc7ZrkKxahPXt37Tt4oTPmBxRGat3DmDcjHSbfWbSeXSreRy4L1umyQBe1RyYe",
  "key29": "25cXgbmDLd2LwvN6aTtxGZvfY8K6YzFNeSuudAVPkv3HmpKJ4dPaVN2m23V3iMUhaT1oaNtKSe1btezgR22rqb22",
  "key30": "51hZHTCEZKdmcWkPsjUSiXa8e5nqpNPS2YPQ26vh5C1RokUzA3wfMRCu4kjEyTbcqcE7cKVg58YtBDc9u7a1VG2n",
  "key31": "4pYTQj2xh9XZSkJc6HQVU5j7AUe1eseLfY9pb1Dq62A5HzwMKNmF4dPgyjGAyHS5e9CCdYkhsQ5KYb8sPGctcu7c",
  "key32": "6AF7YYVD5izZjxRDTxv55P1rr8X7rgqqRjF5z8ErXz6J2JUsKJugjfH73NUAoRpBaMZRArKNT2X7fnWL9fQb2uP",
  "key33": "HYCaUoUv39asYR64fNuazcS13KGnMKtMPZdQY6dTFXYEAt4DBTHrQehaa3Q1sWyqsiHawiLUyExPnLrArTREh2p",
  "key34": "2WHPaiPFjkfsEZ3EXHSBT4Jmn1s3WxbEFtzochQHk1pYHVSBSFfpJXyws5w8GfLoTTUaS7gDAYL2aVQLiK7E1SCU",
  "key35": "3cHHH9ggcB8dfmWtt1wPkykCEuyCzzwXpszMgUKsDJ6d36HMRafEum4YAQityYZutt9pwjfA7oQ6p2kPi6MS3Hvy",
  "key36": "4r7DKd5p874cVN1nHWtiZLNMjgarSDryNjQ4W4QTyXYM7aAczwg1Yw7Vy1iPf8bAd1ohqBPaWWqEFXiZWDLbeE3T",
  "key37": "2YpwUFnCDYUf8BTckMXw7PYg4sDg25TRimbkGi5BiFqzgM3bBW6XSeGPhF2UWVgAtTUbbMF3VdCrGvv55QXCuAmW",
  "key38": "2X7MdYazswUFJqk19wRbSyYksCdCVbJuZwNGRm74FSwLMATwZhmhSnNby5BeUiGxc5AFAc5G81aKcv6wfbTJqZfm",
  "key39": "4v6L4jW74wqRSHBxxexBkBSc1YxyvMty1rtoyq36KirUcWdECXnUJs4XcmMRGSJvuuzrScD7HzZh2ptruA332E8D",
  "key40": "1cp2hPmAV2SiAwJzghFUTXMDaDcQDbPnH7pPU5KAT7oKGAQTKTcrbX4Yh1agif6or7xk3B2fSLHTWBzdxN5R8ds",
  "key41": "32kCfXHVXZdbZ4oWxnEoZ3BD8kvjgbfGfusYUcKqJu7Ex79Ek7ufYJ2gbyMjguLroxxJCdLKmhTd8iucxWeXPtPt",
  "key42": "HGVa28LDBEVv71aoomBV3716nsS9FUo46Cbx2ZY4nNRKB8B2GrYLRKGwCZ84QzNbiW9q3yK25GfWGUrRzvE3BCa",
  "key43": "36oEjGnF5cTu2reE4C6wZxDuLtcDXzM3NH7rYCb4eBebPbMa5x6TgncG2xKjgCUPrzZrDsZNZ6Y3662m6XuCoq8C",
  "key44": "5kcZvn9gGeNokVDrv8UEngV64GTPaqYATsUzG7zZo52vzndLfDKuq3rVaXeqqgMDCEjF4nM8p6szTnzWGXq5czcq",
  "key45": "23Ti7WF4kj61BzYSGnq7834pWXeDD5p4374ELpvMuxsajUJWvWWaG5RmzDT3wYMNAE5dFM5cxSCmPs51sS2Bjn9F",
  "key46": "3XpHySsfa9nUe96RB8b1MBv9mfS8miGN5MpH8wocSD2x9kcv1EWTTfmKVXDT5FsZ3NfwFaPLyYJEpR8Cy3ok616o",
  "key47": "3N9bmUq4NswJkhBE4YipM2LZpxtCfKgn9dqHRRgPGzVBk5p6cTT4MAsZsTLEuwwghokzpCLye4sJCBRxojjnyE2",
  "key48": "45mZ9QGpBvseGBDc7jVMt6sehGrx647LZSvCAcXb5c45BvXkvY9uM721A6BcZcFYManJhw27k4etLd9bVd29ddHt",
  "key49": "3Ts71yjNERmRzNMNMLVnJgwXyCwAkpUsqJiFToCmZh8jWGUf6AiYfGMcn2BKz88588MjnwNoAWdwzRJg9ZHFsbu8"
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
