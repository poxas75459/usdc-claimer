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
    "51hkSu5DyhMgTy3c3M7dNku1mHNN712kDqHc852nV1RUu8BLfyTYkZ8og9Ly8hDM3LwUx5Y7EhGekDb8yC1h7Pad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQpnJWJAbgBsEPBJVpCjL8by6KLuSgPeE15WRjvWopBGk9SHe9W8tu9i8iTp8TEMhGKjqHPaGyCNTFLpPLLUzxg",
  "key1": "57649Evmpvfz7TqturqK9fD9nsNaSSfmvNsvAVpJ1yStEuMSJkvV4LD4sujheuQHTFyxjvwHvo1cKXC7h5nxpUjH",
  "key2": "3R2TTZnqBeGF7QUoPAXwPjTRubAeG9zZ7ip2kPQpj8HcnK6ijDEoHF6wUnCDDoKnXcfrFwRNE425ZFMxxALCBfBB",
  "key3": "37jpyY7sfjRcP3RtpQjTcVfcqKGidMX2JwgHkSPPc8cKvV7qVqBjThk2nXyfFC89guVSGyz8P7TjPwrNN3HRi5Cg",
  "key4": "43puZ3dxVrDvJddynun7iJ5wbmXaRvYXaMZT2QeSt3oyFraKjAzvSyJ34MBWL33b48Yo11SrAinGSJdBHLEKidAR",
  "key5": "4y6SwqoVxdmSrcFKbMZmUvPPFYtkdvpoh2ioz9str54PnXHuhm5sqSnKTo5r3KmuPhghvQeucLSXEMyBgyouYtHz",
  "key6": "2ehq4uJESwwSoQczc5iPV1r1baWhLjrJH9JaFYUvnz9ZQB9HRQeq5N1hr52DFrq4S2RnRSopLYrcwx32neZMd66C",
  "key7": "4zoABahe7E8UB1YWWYHgA1dbpYfdZHU8BiYdJSwUz6mBpC3aijuQoFQCgeP8Cs3E2vig6foJVuXNX2uaRm7H2aTJ",
  "key8": "2rK4RgeqXgPvGiT4pzK5asm2nnjR9Z22rHveiX91ozPbudicWBLUKMt45shDNBRLvsu3MdSLW1CvY3CuswRsQeYC",
  "key9": "5FifaTut3ZjVy1ARKcZgEJd3AArkWoawKRKuuTvrM24FcHXei7deykdHPvc5S9nixYcH6GMTCW77Mw8UFpQ1uAiT",
  "key10": "49MTUKRNi7jQXZoehMCdqFvv7TzYFJNNThk6AuVYxQQw7HvmScuMWLPYJBoM7r8TXVrm3bJ5p74ZpfSCLMXUuipF",
  "key11": "4iExVYtH6tisZ2gDfbCMAfTC3ydKcE9nLvwVjfUMpQ5jUUeGDBg4JGFPPy9NhABEv6X5RvHKiednkkb57A55tT2W",
  "key12": "3yqfrhEnFPMzatM8nCYZ9n8WYVGQm8Xs2LJdNbiRBQuHTFVjvHTW1wG7pSPVMVCjbxMa5wV4H9wA4PpB1dDsXkqa",
  "key13": "53oG3XCeuFawJaWeBp2QAX39P9nR4rBGWSfGvByxJfB8ZREhfaK51E7vpFLkYh6j7VNVgqwKn4EwGZuYDzAgVB7V",
  "key14": "3v4HRpaDXWHyp3zUot39BAEmfD5VUjKVbq7droYPJ9ug1T1EWo7NBjt1RhCathR4Sb447riTWN8mYLaWQqa1mp58",
  "key15": "4fpYWmjCJJX6ioX6XAJrxEKjEGApnkuHZes4WgbGoBF2nousd9xUDdwmHGHp9oBAdwMKbBMzw7C9nM4b426UyGZr",
  "key16": "4jChRZU4w6bsmq3XjFYWXHXydxfWY41rfr13RhQBv6dHof6maYWpQXM9tPBr8mJXazb2SB9GZuMqHbpKaGaMHc6v",
  "key17": "3UafGZAcUiT5qDBBKaYBVKLwTb6upCvm3j5gHeA2kwRHTAjn5AJ55HtB15UHEbVCEdKbGBz3iQmeewKW4bf9kE7v",
  "key18": "3PreJWRPyoL1vSksHWLKjRpiKKn4AacPe1VYYWfBnsP5dZrTzZBf5AooTju4GARw2i5eV9EPSGRdW6uXHu1WaWbQ",
  "key19": "4iR8qMQVVVLmSQsM6cE5YiRiBf6oZtt7yw1NCNjN7zUbz5aqZwSv4VCSWnice6EDH6LusuZ86fE4dTh8SH7wzAXk",
  "key20": "5h2MRkYpwJ1D4bgPZkqktWdhQ9q3CzSHo7kS2aaJeL61ZXXbRt37bVnmQnBgdhnAYVvBaLv8NqsUAxudE83DSK3y",
  "key21": "2YLJ7tY7gXwWkuh2KbVNSd5rJKFB1fCzvKF2QW26xKND8k5Z8h6o7Qhid8a5kr9XUNamMoAecEY234dVGQDJeumR",
  "key22": "2UuJFEiXJaYMQEmPVFxXBKQTjiuXy7jeqKSx3xkWdye9izHbgF7Vi4SorVpq7zWJbj56WNAZz8zeRxQWTupB12b4",
  "key23": "55uuTyf2k8DLVvXufJ4R2f1XQcWYi6xSk3GDarqHC7SP4hvBM4KDV4yhSVewirFGkyoSPV1uE4nvgt36VcCfGpnF",
  "key24": "43PLqKGeiY7QYhw1uTLTsUjkVwXXKBHYLnteiv3j6tkBLvUCZEz1fcnSxDMP29tkn1U25TCF3RuCvn7t4H6R3UDr",
  "key25": "3JJiRX3moi7HtGNiFMp7BsioF3rDE7zziAFBav5krtmQn5CgcSAgHwV6XEVMaK27WXfmrF7mZ9JbLuaCfcsYRRXS",
  "key26": "2PrG8AMcoVGa4NXiWxCijW9aJivG6VLwdmfNEkfCWAY2WZ6gxtb18MqDUT7c6ZrhB8gCtLgPzQk9VdALc7ncgVZK",
  "key27": "5R4KVvEgAMu2F1kK1GC8cmQWjDhyGEyTrubjnc1dHuxjj9AfN7SmyzuCB5c6TiDo4JkhoFzy8JQYq9QDszoYSmty",
  "key28": "3WX8W3fmszngXrafvyFpweJNJhR18H3R5bQAS4Lx9NBzs7kH8VbzvchF7ucczc81AgrpTVn4tHXhjK8ZioSSnrBA",
  "key29": "4S9qUxGVwtRhJAosinS52VW3wCYBdyRkzS8Eh5JGirEC8b56MxK5ArPgAzgmb3QdCAUz3QHm3DKqKRfsZXV4YHyG",
  "key30": "5GUBEYMN9JD3FN1T8JUL5HY1fhsxKHX1htZzV3oSNxUC5Ne67bFJuMKCFDsEUeQNZdN8v6goPn9Uxz48kffL3QXz",
  "key31": "5y7fG3Sca68qdsVv2eKnuVuiMBquTHSRrapd5Ae6TFbN8HmV8m1o4xd3FyWqnFUae45oiCLYhw4BsRHc4R6yT5nh"
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
