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
    "2QHkRSKTrFQjCUgvu7BYv1jiL4w3NsVpf8YWUYUgV47YPPNVJKoBeZmishLx6bj4kMtbqUBRsuWV3cDMr93EUY4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGDgmLtxB4msL6vAvX3eM7trA5YK2xmJTPpiZbNfXmWjZFJDfrkWR8V6C1mub5MtFb1GYQ7Ubx4H5XG6TxDViu9",
  "key1": "4jMg8giao6LKcjNMufizpXe3cGFJcrpkFSSirPF7RPYUPEY74LdT5WK23waZMwpv8cC5pmpqva1XKpWPRDsgpapy",
  "key2": "4RipAt5F3wynev1hUSuCgkdGZU1fSN8Vp7myjvZV3LJrjgoKAhRmtcDvGwDq5Lt1BhAc7U3Bi6wVMq63QGWMgys2",
  "key3": "3sXe17qGtQj3kuXw2ztw1f8hMGfxjqJziPuZCpJuZfY6WCmuNfaCWNuQQRLxPf5dXPPWr6jnAA1xhSDu7Cpq7RTo",
  "key4": "3snPE7fd5WFok8F96UhBADvLTTSfikUzAtBtnRcYGNNBe525YPqMkFRtCcTciexKtpJbnEGJSadd4EhWVQ2JKcVj",
  "key5": "3oWVyeRYJ3jamqiq68UYbZdyYbYfw3zQbAtVhRy3dPD4LNXBeb85wyqTC48bYvBBVxsRYf6N23BvozZxqS4zph5r",
  "key6": "3sPn9rYTvrS91BeKQxiC5GzHRxd5Cz862x9mt6ToCubUgx79TsLVmxQmN9uy81naMdRiRUimpmuJPRmMr2VUbmhu",
  "key7": "Dn83j5Ugft4h8APyxL6VuWbjaL8EZC2EKExaBhGcUEWBY9jA2jGhHok1n98Nkj9i6jJBHXAowqZtWmCMYmaok48",
  "key8": "4TtpdjpJosNg826jKK25puzPGb9WsvQNTnnvgqdqU7iJn5x49Mvpsa3DxBSdkkKB7HgprjkzUU6a5ZjmtyuqZA6E",
  "key9": "4gbqH1Uff8fgsKtX8HcJXTPqUWQMadcPV6xW1a8AkoWtRap1B8fhS9LbViAvNsAG1YHVJbgoDZKHbm8iEQ3E2Hwb",
  "key10": "21pgcFY18QywHchFGf1Qk8KXtvqs3d5tPWRsiujMEgsgdELFLNBe5y7FWFYgiaF1JmuRsnEiXYRuXUAfWtq74r9w",
  "key11": "GZrFeTzFzNR4KCHPnMK9WxbUc44dqUop7RaLcs8MLeecKMGGiBJfTFoVtporQkw5yK2zdev11Uc4KYQo3FsvF24",
  "key12": "2D9A1T7yMayTKuvimEQR1RrxZQkoZkwfEQxKYJ2aKSubLLtkXHBp9obPktgTi6rNZWkYTeqKH5M9J7vg9jvbDgwr",
  "key13": "5TXSftPgPnkw2NBL6zo1U9VrDuR22f4SiUdgY2NxtQMQDnUkB8xQxGxCREhRQ5KX7NUMGnR5fupXXvgFpRiVYoW2",
  "key14": "4UPaUWJP1pW6Us5YjCd7xyJuEKb55nhdBBBEkz718j5a4cp6xE3nAiqkTVfhm9Dmppg3W7fBxbWN9e8HecTbvudo",
  "key15": "2FGPU6Cj5HoPF8q5JcjXeTovfzrpscE4wiLgzL7VAtpC82BpH3uZqe4QZ9N4X25nXsDgKvABvJtKVDsnW3Vcobsn",
  "key16": "51QWiA54FzuvXUbU1R6aEpTrhosNbApTiWFE81iU8aPEReq4BWJTvnmP12JnwsQ8UvME8BwfjF4yBA4Noire3unj",
  "key17": "YMTAgYRor5xqE5S3DJhGMtNqWrcZfEY9UZT38o1xL1RLX8yu3y9bqZZ5Li24g9iZ9tNQojo2NBxHnUdLrrEvxPo",
  "key18": "4RpoED5CGmu8At2Mrdcpmem4eh5KRKumt8QnfQ87ikiZPFERscwpy2Xpm291sFfBt22CZXefzqnNT6nAxbRMPxzT",
  "key19": "5CVoDN4NDwKQzjwhUossdaMQ8RVP2WAVZ1pnYfwLSQYGDSKBhDJvk2mHttuqUiEseWL6Y9fQ6iQnJvrSJbZEiX5k",
  "key20": "5ZbtkAjjExz9TDzVGBt4rviYihyTizBqvJYvuYKhY7sWBUuWuvZwsdN84t45DyckR3YGq446pzH9gcBJP4RauFVx",
  "key21": "64xDd94SS3jDzDxkAr7wTRyEZUTDfWay1MPu7tQL2vtFqZDRiBUtnQXP1CWaX71E89bL3ztWEKSGTLSCo6S8J1nw",
  "key22": "32NDzFAANNg1xH94YjxFNE7K5yDeGwhW1t4p6TqH5TqKedMYtmsst9uthTVy1hRCFCqSTvMWRaYMb8Cmt4ixgir1",
  "key23": "21jw3Hxai13YxnfPaLardA61MmzdvBeUpccUHUcAG9n8TtnGpfvGTjCYMQsrdGJ9ZjEpKpY3YAwnKUHn6LKQQ9Qz",
  "key24": "4PYWaAQzYyBFQVdq6rw81xqikuUZu7HPomzLuraSEaDpRX6gBA8Yqe96dDnzMbaHcmP6oQFQd9KxnLdAx4SjL41y",
  "key25": "5UwG3D2WFc1dREo4u4eYd9WA77K62txUWidqT4QZKpBMjAga24BAbyaxHQkwDjsJopfozBKvuD7XcHzxJ8RmhMFJ",
  "key26": "3MA5CzTN717ihSg4YdkEv46PJSzUCHRoG98egN2pNrUQ7tvrV9vrkREFCFpfmpDfeZA64MWnqhZ11f4PnxfowXHn",
  "key27": "2hoYH1EPFj43WckALMaCTuBasdmAWQfGt3Q3a4YwSw7XdfsuKPm2xqbXx3y4f3rxvvVi2FDf9fiXdWDnQKPrMgzt",
  "key28": "2EZovKfrimt5h7fn7m2Z5PTViGzJPLQanBnW41gDMuLRRkZHUbUTJQxTtRivhCLFESaCC7WAXGHnakdARMRTfrqV",
  "key29": "2Xn1x9SWkKV79E1GLsomUKFife1AjZJLiYZzzK1SvMJq31FbmAbixWJcjH5XcLc1ZC2jmuM1QSuW7oemtscPYHh7",
  "key30": "2K12tAPXhKDh1sTBvhcqHgpuJEdhs9NbeVz2sfsrS4vAvTu5xY1gk5uLmsZjCAZkkUQRCwTffFqKo9k5QPpSSAag",
  "key31": "3e2D3uTmitiXBwDFSarbg1kz8g3BT5jPVuv7zeTiEWeCmy5GB7NGWaMuBZq34sAi5W7zTTJA4BwFEmLxmM8VViba",
  "key32": "bKvQ15GL5tPdPdAtM6dhbfoqYDbNGdfcRp4UswvL1gGeXDAHkW7KiZyqYcuLaLVjr1tUDZqdUzU84sRABpkuzhG"
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
