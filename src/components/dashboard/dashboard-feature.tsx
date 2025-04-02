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
    "4DMV68NmzKUT2czp2wWHaiAsnjxSoHwYCcY53onUpiqgUsnM8pZRZpHXjvvefx19y9AQmxYAgsLuiN1zsXLfy77V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osy4NymyaSugVsy1XFwE1HYVjHSY44osMMtd4YjjsLbnt1FBJea2VQgzw3CQimNGmnQ8nujkYhRwTpm9j8za6Cp",
  "key1": "xziTLVRd2UTpzpybHjUTMdu55W1Q8fbR8SXdY7f3jrcBrnUGbqcRULWHrTjrVRr4h5t1oL2yqGRh4m13B55aV88",
  "key2": "4LYTtcq2oq2H51c4n2sEnaMD6gFY6NS9Ae2kUDyPqCyDgRJKVQPinjahwueRNbjpetB7CwmCuNuB1n6rEx71iVfK",
  "key3": "2VfK16f1Mwp2UxeC2Jfe1Gk2KgDC5wo6DP6Pv4VCvFY1HDfyeXLM7UCh6xwXyu76U1JnCpwcxSUztHSiHdX57nti",
  "key4": "2AsBkruK88ivyUtqTJwbRyam4qbKa6gqjCRe69N6avrESUDi51gT9Auivdm944x4817NpNdwZV5vyGeNCgGwy9Az",
  "key5": "3Lfc5mFHtpRV4mj2kaHGDSt7MdW5BzA9reCt4RtnqPYuzfnrKa3SUf9FpxWFTpBW98x7DFb6XyqN53UUs7RfoMnQ",
  "key6": "4Ys6J5HRUEWCwaUG8g7sJmVRBD9kot8LhKhd87zYyve4YrWHMDQkGW15ieiVonmjWLsd2zM8ZPx63X2RdzRokCuj",
  "key7": "26iebwNprakaTRJdyB3dFR1Xb8Eim8xYiYprfY864TL9Dyy8nziPGayJAAMiwntuoyQABHuJ1UPRcqaniGFwbPyC",
  "key8": "2QP8Z7QSBnXLJZaHFMuE9hSgpHR76oMR3uBuetC7Cbi7Mr6TmrWknHcX2pA1xFtxiJwYbivkCjoJDcvVakkDk4pa",
  "key9": "5AxKugfWCEDyibAfbsyd7equYcAj3XaK4hmiMM6ppijVXAkKju424t9WNEFg7h87WCAhduK3XJutB4bDVBeA5cFx",
  "key10": "3Hd9zzERxVUAphq1fD2rWNvt7XXZKzkFcHw1qbzbTAm8k89X39UN4NvdcoLJTS1HX6qdsZBDtXKfPAxWWSsgCUWG",
  "key11": "xPqjoWcfGKvFvUaZFMnHWfoXtnc99yQP2UCU1sE36bimJfHLSb2UCZKjAqTFGx8hy529kmTEiJX9MtCRCg8cpTg",
  "key12": "cw95xiRwWy8XJ5f1eXY8Sy3dAAvbkMwiJ6pbFWMqfHg5PERxeMr4Tb2uyPG2ETFRN8xPWb1Qs9bApbJ2RgdwGMg",
  "key13": "J1UXCKkL87bgPBk5sD3YuX8Ftzpm2swyhHg5yWcFjaBu6fga36Qtoqmgm6fCdPgESX2ZkTvSfnABq75Ydh1imgg",
  "key14": "2sMH1QF19n1kE3cfyg2ntf5jT4ZZL7rueX8vJCfzkzcaFUS83WWk95pZnsUGirHFMpH2g7C2YMSQiZLHpdvXddLb",
  "key15": "3PcPY7E8Rdoj5WRWmy9qXNWnTUM3v8mVTuqAURgcsfUbvuDtZiLz5QZnQs6B83JQNej3NyzDP2rrisiSxFDqeGWA",
  "key16": "53HCqEKKuPs97Y15jMg67WEt2AFJFcTXtET2jy6pfQ5ofpGkiLLVWnDfxSYvzdVcLzrcx1CaU8BcZ15b1dhmnU1o",
  "key17": "hjbyUD211q26xe7fUXVowZGtKaHaDJiHwJc6cqM2JAtpbadg8Xo5yowkotrtJ1VFzp6wZcEeeext39UGtb2DUs6",
  "key18": "3HpV8soHhh8f6BzpxpQSdCbwBsLss9RcWgtax3S9GSecriV4jxP5MPZ8DH5fpVR4v8yugZ9J9vF93GBxBBDd3FVV",
  "key19": "3a7YJdnpDoXagm5fXn26rwmHDPBJivh3qtLi5iuBQ96WzdUSHAerYWJFCTMMaFZSy5UJNUgNKprFTSY44F4BUcto",
  "key20": "2nzi5YbdGMx2gwGvAcCkRRt7BCQzhh71dxLQ6Svf4p9VysFgK67kWCVPdJ6Mw5tExf8sM4qWEQFFUWn9cT8xJzTM",
  "key21": "2SncQMTRQSxsi3Xh7fDCkHK1LmHHtQvSY9f6wYmMMRQQGGDZNeGNAC6pLLenSBTvUFn64uPdJiS7LTSNmwL6EwtD",
  "key22": "32JzJzCeo3wrn3cZGmhAzUR2551yG99jVv4Tw2qDgr2E8apW2cnjgT5ni4weaioMGk7PbWWgKDqqLv6PzTvDD74S",
  "key23": "5JsRjuYgxWXKWQX3vRaMRMF69fKyymeWxshQA46nmoDa3moeVtf99pTmsSEJcZ79cpH3q1bk9MLm4UBW6B41xbpi",
  "key24": "4ApPc2kVDwf1JVNKLheAuiXhuf2W1HMVTTqwTbYP9WjRrM2PuPvgaFsHbRCpEGUiuUdTPxi7pDUV1Zzxyz1RtSrt",
  "key25": "2xeAimRDS68u9ubeA3w4MaPxs5ympEELC2fKgjdtoPvbfYpjswfr4qEBqSwK4zZSgV1gWSVQx1vtH8DR3NeMxa1Q",
  "key26": "i1geMigEvCBMsuAS4cGi6NhUpUnY5xBsgNFBXcFLyBYYEVXGQKgHEj9R7Zn4MoWv1vFxEpaHM4NrvgnrxNyRA7v",
  "key27": "4jYkpeSp4Hx2zFyTksvAJQafSsaqsRMNNB9r9pCsHJ9FbeT6UHd6XdQdcEfig6rfmsNLBqrmcWoXFNoqn6DL7sjB",
  "key28": "2bEci44ZuV531D2qu4WcnJGy6ByeKd31zUNC7uCwayDJ7S8uvWEzJ5YUrPZqRb3CYZDJYYANvuThf3sCAUELrPzt",
  "key29": "5KwL299xcNH8zAN8FnRJpX44wMsZ45CMGYmxXDmBhe9Z82LEZUo6v4vRcvTTArHEgdLPYyS3VrTAgvJATM2ea4Sy",
  "key30": "5a4grymeA2yxfmDX7iWyex5MVTWXUUk3TGCMEvnNJ5uRLg6F2JfVVx66RLbXrUtv6B1HvqmmwFXmaP1Knvjp8Hkh",
  "key31": "2WDRFFnQ92gakU64RD4xbpeYPbTxiFEfm7pL82Hc3pTgqeWMwk7H2uYwhjWu8GXBV3AwuuzKQHR6WY7dXiTT51Lb",
  "key32": "2kCc6tpyWzBLWiMvYwydT91MEJs9zwe7kcCKjo9sicrYGnSfg23LmM5BCiWACjzUTTYukY5RhrFLvEvM9vGbKbvX"
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
