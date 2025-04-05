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
    "63KhqPB76gmyrtfrXzdqdQn7qTB3KHLRqmEzXMDLJfzgyUhmHnsvsc5iALhCRFfLwYCVs59gcEK6Y6w1HYJYhpHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445DyLBrto4R2mRjVMcgesXYDAvs9wQy6CVBP7wGcdm4JoXhWDmCmTJRMjx8wUxTiJVMKV3h9H8GsXLyQmbuQszy",
  "key1": "4m6t5RGyHuTao7DpHkYLqhSpxT6Q3Xy75UcjigXFT49TtwaoXJ9i8V24LH9wsmx3JWo9FsiPByuP8tB4z1PbR6mv",
  "key2": "421315UNB1RcC9t9eFYjdMnD8RwWquCY5GGLTwUmww5gRN3MKc1WQfh7WCcSfg5gpGoNPw7Wz5iRDTJDYbxqRF4B",
  "key3": "SU6fbgkJaB492y4NUE7fkpotYDBxxJmx6ZPvwbEwQAN3pKDLtR6pZjF5GcoQeVJ9BiHgdbJUv94LQMEVYLMvWvb",
  "key4": "Ktm1z3SRd64uMw3cKntf729HzL1WEAtpH44KE4fqKRmA1RgiEpfhHknGTC4msqWHK9mDHVnoHcbhSYg9uiUP5i2",
  "key5": "4voKSyyTo4cZ5fdWmetvDuhCiVnmZuRqMbLsE19MwhshxdEx3mvbHvXU63ALHqgpX4jqKrkYWGB7K6ThwzRfqvTa",
  "key6": "2ktPLMmK4bM5qA34r9JVMgPNfmVLu4EcWVApkhyREo7zFBbieodA61HQcab6NSbWWo8C28kZvt15AvPPRmJYCKW7",
  "key7": "3FW9W5pnggawokkBHJsv7wHoBkbK3nYRh41g7kWrtykP289bxFF4NnEYGuHwCEfft73fLD7GCwLXC7Mitg21rGNo",
  "key8": "3eRTbzPbNCy67tFExJk3S2Pi5iCwhU3vzezK4zUYJjQFNXSawtYkEjP31xspo6FNL64GxFDPtxXuuPLggNqnLWys",
  "key9": "2LwiWiLAog5kqqiBc9Aq68PhHXft84C56cGvw9uUDK2bJFfXhsHVVH2GLgeMKnnZckzmVVfSVfzeWnkAoPXrz5fV",
  "key10": "3f48bqiPXj95LNc3JR1GJFzF2NVA1NZHgCXwHwnnmjtVRy7Sb6xiY1rGWRcLpxhJBM8QNdGk1hGKkUkMWsHDtUsA",
  "key11": "3cTDPpHCHQ5dPnVFZTsWLqX8Z42U86rqrNbgKjx3wnBwFjmLSC36HdBgTfJ7P8KhQq3sGyvtLTDBqAtETCzzfgqJ",
  "key12": "ikyh1Xgwpa2xgnaJs3vRWah65KRzdtKhT1FxrX5DNhwmv8HCQ96kARqThUQ8HVGaz3EfiD5jYYg32fsgLezWh3q",
  "key13": "qVNNXwtTbNpEnQL5HUjJEy9Me4muvhGsFxrWBtYtZsM5L5apVR3pYjgxTRkb9Tce3g3G98yT1r6f8jpm8Gd2HPG",
  "key14": "52y4Qor67GkLarRmjzco3Gf72GaPAKPok9cE8uQd9tHUY6RCsHXySirb2Pshmdv6tkSGzdGQu1g7Svk55dw5fbfb",
  "key15": "WQU1H9rFBoGBkFxicQx2sLBaWdwJCVjycFD5hW1hnxktLRtq5jHRk99wKNtMvbbb8ZH5eVde7JqxCBXE6uvL4XK",
  "key16": "5AFcPuUmiQeqr3KdBmTruoh2FV1XYsrPaHgQq2GHANcg2g6Z3PAo9c3aBJQ9sgvrxPWYazFSM3qQv6GVtCJEoxqY",
  "key17": "2cDpVCJ6rneimUCrDXJcHwSgt8Go9DuSzh7ZaG2TmzUZ9KjD3o7MY26sADYXCH1SuRqpMPX4qaFywj31a5mwfYTw",
  "key18": "393N5UPPW4u9tyv74KpruQ7dRv7cdZUfFzKpfJiKGk64SdNcXKPqmwSd1EC715ftP7Kusg8imtLYDnMu4qLv91D2",
  "key19": "5xF97yoeNDUT6TnzLYAfwUVmyJnZhsJYiYfAmBDGDawERTRg4nYktJTpq4xhrYj4qyepMufHTdUAFHgq2wtstoHS",
  "key20": "3TXAFzyrEL6GjH4CXF1Jr8V5UptYa4WV9HxUkNW5uw1c4Q2Hb8oqLgpbp4YRyx1BuqU9tYFQmcNDjsNePA8YWLnB",
  "key21": "3Y5TsyEQKaAt24mGvNkttJ9oxc6CzEeASpDnagBN7DDaeXBinzzzmydUNTWYnj7JtTxhPREYLKkyycnC1NN2YENe",
  "key22": "v2oHXSfPf9T2Ytk1BYhsKhNjZ4UkT4SyWzP7ALYjN4ZDXcar5LZUYoFAwEXF59fMMQvXBgSzcqnTNjR4ytpMtSC",
  "key23": "3QU4K7AW68zvELNVPGRD73HHBEartHB1ECR8D4v89wbpnYZAvwfiPjeQZQbcKwWYbSWz9WX16sipr6GnYTqwGR7y",
  "key24": "28bUUaX4SmgAYCn3WWTj4XtgEncaLaZQubDWA9NmL3AoLRge7VWScsp5gQysBRzEhS9KgGuR9FrE3Uzb3kKufzo1",
  "key25": "4Du8QrTzw3SP8E2RiBAwgvGzUAGrcHcGVZkiSmEug3YkQ3SBNNL4hhT9BFDmtiwvfi9oPx1mUTuhYH3ng1FwewaT",
  "key26": "5hbyxUpj4EDZPnpgMRYjkpYHzJ4vQfes4PFmHUFvZRa8UuUeSj6r6SZ9QuFE3uszVVC6aB97Rkssi8EHYFw9u6QZ",
  "key27": "44FcL6B5vyxLFNCF8aasWCncrbaKk5QwxWPRwC7suk8WqXVJ8Wor5QD3rWN1jqrWFewdp7n6vaxGaejPkjr1cTeL",
  "key28": "2GuWSoAyVtkEA5pTFvecwLjFurdK6NUbFJ2CkDu17Xe9oZzJ8Q7JizQ1wrz8fP9DPuHjk1JxzTAekPGtD73aemGc",
  "key29": "2UsSS54ykgxzRdRtcaaZCehWAuqCQ8SZUGUMbAzroNTv3NqBCy92tUo54czzSduJBjTd6AvpXdJcgV4MY3V4fUmN",
  "key30": "5TwtxWzVkES6Y4Lj6aZbniNSrP5b6QJEePE8R7m6sFxYHXRVmogp7JtrGEBe57GZSGinCHtkVwt3CSTRJHAHHiMr"
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
