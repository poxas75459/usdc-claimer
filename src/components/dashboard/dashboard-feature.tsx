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
    "4rzExrfYRz23HFHByHbUwvWVNaR2BQ79wGWu3133qTbMdVBKj14nis7aJGksg5r1SPt16p9wHEZ6yU8W8hWEuRJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54g83Wpf1Z8WU7cixwVNfpwKJGaAkRZZcDBniu8u3LGRnuZntydeaFRHn4QGXarshMxdFdvtcowFNSVtnZJfkA75",
  "key1": "4DkZa5bskxaB37UJrCTxzQvd9aRTK7Xz2C5P4oEZUzeVGD4QYcqWG8wajWTA4DQTkq72BBweaTPFgiZ918p6PmyV",
  "key2": "5B6jGc7t2ojb5B2MfNzfHbZk811nzmDpEFhs9hfpGmUdQVtUTyY2nm2qQ7gxDiBe7HtZ9nwfC72mjSAJCwowpmdN",
  "key3": "35BtAG23cB9inmjWUbmhxdwyFcsvLyuWgw7NjkNQiY59fE9Z77pw7Pm5xeL8AxvFRQ6VGhxj876Z35bFBTJtUvQ5",
  "key4": "3rhpxLTHcEGgxmd6ogZijZr67BGSS825k5TaJYAG4g7uJczf4zCF6ZJUeFkybqZdJ5VJgcGVVepRH4vwYiGvchE3",
  "key5": "4Z2rJbysUTGEhdspmYyht93GfyhgKEpc9fqGpMvBLsDqszNzU9oHJvsK2iAxVb8EndEn7RLbx4F7FxxDHZSy54h3",
  "key6": "4u8CZiE3CJDZx1Qf1GdMVfr6TPC69ZrfUPSEFHYJPvLotssZfzhat8SG3nV4og8xRxhKjaHtn2Sac3R4GLrCBoWV",
  "key7": "4xFgy33R3oW1viGJD8tCH2aL3pPHMi4Eo51MUKfU1Mrit4R9AuMgkyzWmR1VvMTtADct5c6Zcqxe4HMNgVX5U7E",
  "key8": "2upZd4HVrrMW9QUk6jhsjfJc3UL1PJ4uZsP5ehhW2gMVKvhSYt96kGCiQtn9zvqUxHEqW5oLq1e6cmX62A2SGfME",
  "key9": "LZqjh3wgic41BEuK6YuU4Sdh3kkmDuLWogPVwaMwaViuBWvoqDC92Y86Ewmv5DopXzGNaUBzr8BVmMKx3TxdbJS",
  "key10": "2xhV96e42pmfbgsq3AWYoYWwqTvdgY2VbyY7V5YjR7LXkRXnqkonWTuVt6GYFqoFDkfd7dKqw2RLkhNi7iWh19GY",
  "key11": "67iCBtVguJMSNVZFmqrVi421WkQYdarh8diXDFGCQPbjbAnrZVPpkHMJqsX6MqB7U3JdiUWBCFVGV7aVffw2hv1q",
  "key12": "5guKQtxV449VYgGAgcbC2nSPya3MpH3FDQCZ1SECdPLV5qAgUx3CW833kknXs1pbVd4d1VJUeEdijnQ5Azr9nngd",
  "key13": "E4JvSqdaXR5FJJ9fhbjsFouKbL2F9Jtyf14TZTukptPdyA9ZjbbUhXe35hUEvBiWAsXUWVo9sFoNsABrBsD8A3T",
  "key14": "3P1XhZDkZw7EAChcAttWmz8ZdJZE3bdVH16iUHuU5saishSSikeN65G2wkMZR16Q9QYvxEJ9mwKH6nBBri7guPeH",
  "key15": "28R9ZwAfMRcJcNy5ycWTDkAiy4Cch7SdZV51zNpreg9XRskWkYdaW35Mjqpe1j5XgXQH8gLVpPyxVxFSFndqx5kQ",
  "key16": "4wSbcNLBqBt4fT7Q12cwQ9XFbT1P9MnReXt7UHNp4ckgk6jcfejpLSKa5Rp7dh1piMBunppNkMUXJtAqeV9QYtc7",
  "key17": "TLZeBhEV4zyPcwS1Ru7WevKU7EBRJnwbi1E6BhNxVtKF9Z1bo8NYyuKvgY1ZqbyaqePbi1GL3LR5hZTNCFJuyy2",
  "key18": "2PwCdduvajBjG2P12Q52JxDQJGXWmj1e9UzkTzzvSqnCDGtBThr3oD2QxDyiTyPgJSK9wk1CmUEWP3aNa7nR4XFg",
  "key19": "3e597LMP2BqZta2eNFZ1oXvpEAr5PnkTunJydtmWA9jn7jsdpU7fMF7V7AjC21X4XWQsyGXk4bi7qy1rjh4uw6mx",
  "key20": "Am7DNm9mW9g7cMNKqodrr84xzb46ts82yhXvM3tUDdmEpPy5ZPJadzE7K5xnLNi17qZZqUKoZ3g88XmgdvP5NWd",
  "key21": "44f4FsWu6Vwhm7P34W6bWYmRj2xwUV9vRe8yu6fs8S4WJvHAARpyfsGR8jUL5tYk6SKwCtrLMhH3Nd7CyHKfXWNx",
  "key22": "3JRd3J7mGYUtGbm9jhXqzRr7Sdxu2DmdUDHeypJ4mKeFrMzUrtzrbAQxuxAdXuDhUrSRJqpcSQHSmF3mT2F1nDJg",
  "key23": "3AvKpRxeg5uujMT9Rmjng5cEjtvkN4ik4mYoPEDqiNscJGqWafzQFunsWSReJ91ASY35k4Fz6vqVDsxXQzFZSRgA",
  "key24": "2F9mEaCPavxsErfEriUHxKd2FSNWjiwKr5WKL9da4an47UxjyudBThX1TdxmQXbosCprAqwJRWujPNdFDBNpfDtk",
  "key25": "5Qey7TQkr8VnU7dAAWHfvgFKNENNTbewL8ZB15nkRePHgrcBYodhWAXUc1Pzk9bFwGtFQVo3LFqqqzgvqpjPeECx",
  "key26": "1T3aHCb2bfyWdzFmRVpDhnWJQbqxN475CY4WqSLJdttWFtj1AeKwkbw1WyxbYiQkFRcLRLQcbhDfK7Woso8pVtb",
  "key27": "3gAiAzhkx3GytShaMxvk5RFmjfszJs8YDiNEpmdXTxEA66Sz6ZbCoypiSk8hyyYoiCZRKUmBgRrE6ZSkAT8iHNHU",
  "key28": "iPqA8NEPMPGZXiyjUYBjo1aJyW2k5hc8Zk19qFE7J91Mv4GtXrUZwi5GeZ9mQ9b5yiriXmuRPzdQEaEjFeseRmD",
  "key29": "3bmHezbYmZV3NntD2mMuVX6Mk72qKcU4yDaaBN7UTKag6Hn9LFUX9UMwqbjyRYXsuw8PwAfFnTRP4G1Thd52fPNA",
  "key30": "3rNi5w2YCkMYgQvwPME1mdSMuBLisW3C2eT34X8benNjmiRrgCSXCHrQm5WeDBrZAwEeRgZbKF96fjcDfT5rTqRH",
  "key31": "3a4UHSvajpCu67tK16c1bFGP53G2DH6K4ukY3aQ27A1rHanYvay7uaF1TQQwJFDGecvgvsVjywN8iPbjQEUZrBBy",
  "key32": "5r5UsputWooTMZsb2wVPMUpAZikKjuccNkLqrvTptZcPPLGiNKcj64T8pnjT1hZbBpZnrxvZgkbCKm8jwYvvcbjz",
  "key33": "35paXoH7Tf6CtMG2GpMbMREFPb3spV7wre4xKue8gK6K1RMBgHDjR2q6E42vHKtGyP6sYJXgpbE5Verekv7vG7kj",
  "key34": "5fGhEiTJ3QTZrhifDkwTD8jECEbTd9N6GTnxXCNBcUB43LKf8cpgN6asnEvvhUJWDZJKQAXf4op2z6SnQ1mSVDfG",
  "key35": "4BqKNKF9QAunLPx4pBaGa1j2SzQFYYJQzJCF61c8JWJGw1LzXK8RDCeSBGoeRAr6HR6aPH7StY1haRRF4piyYF9C",
  "key36": "5xhEZ6YPxp5atwwUgBWDjgu6rPPYyWtSU5XNTWDu3SHwyGDKidgxVZA1wdEqCtPm8N2ovwYB5geMy1CC3gueiB9S",
  "key37": "3Fgwb42wDxoXM2ZJsRu4iioCTyKt3MZdAfJRj3scJrFLrsZxXzRaN75nZ2hz2zvCgeWfun3pDEpPwiJ2HdTjkBwr",
  "key38": "4egYrBFpNNbrm5RW3uBogx72mMYJF8ktXcHY6kfhhCacMXUWCPzJF4ycVc7wiSu1HUvrRRpiC4uxM6vV9SphFXJS",
  "key39": "4AqMgkZAecUfMnFkY6oDGPsbmJ72NujcK6uuutKMHrpu8kJyyZaXJL2osSdeSbsPZoi3YPqaoZrQTHhVop46vCCo",
  "key40": "32qQHCi7grga7gKjhXrtdSSoHG59sBpr1tVDpfZMYMrB6QKHxwsAKHgvLzmHPv5xP5n17vWbj3349rkBJgFs5uua"
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
