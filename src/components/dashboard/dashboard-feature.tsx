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
    "5MrR3Qam3KgAqLbGPTfAyLqFKM4a5FVPjBFYdjKcKY2HEscDug8dukTKfDb4FJbNprro3T1mH3MaY4nbra5Ndowq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUyqnzAkYDRhJh5b4RZiS7Uisi5ZS8fn9NtJEqqYgQYYCQ6sb9RmArA11NK21Z3MjBPftNGpN4ZfXQQ9DGxBbgf",
  "key1": "2zPXXkbhc1xo6fcLMZniUD9ZnvqTzYjr838gspvfNMZQaMpxinoeTrWbbL9cGXWBZXWkPgUUfMEF3q8g9fnZSYFu",
  "key2": "41VHsxBpyhsvSDuDb1NVDhmp24ZPiQsv5u6ZhsPJtXR1gyV8r3VdRinRoKXJxknkf47BLoKcKqkQXwKxBXNAbtwF",
  "key3": "3ghZ22Frh33x7FwTy2AqmrfjiwvsKhpYGEBDqMK4MxF8T37Pm6i6Ei34qHUURWabh3TYr5mPme3xVoPRehV1sj8Q",
  "key4": "H6RfpJYe8CpjoGd2utEqHenEhBXmEWRZMJz8EyTf9bWife8dCrVzZyh5oUmoa76YAioYQ4NaDkM9gxgF35xmKkG",
  "key5": "26YrCLYTx53J3DSxwxYjoJmZj55JNM6ChJ29AuXNhY8dGsLuvZkj7QDcr5SUwK6bPz3pzajdSZEQ85dqK32Xwm5g",
  "key6": "4T4WvAWnL8zwc4VpVV3Tp9EdhgcoLoLKh6khpjHDwLwaAy3TsbZTCdQAyDfg1EsdhxKpP7fmoc9C6WvVXjzyaV3p",
  "key7": "3S9ZXqN2FQYvgWqCSbAu2SSr5sAuiQjSrRkyz7FeaMuEDoBxPWQdDeLeUWiRprG3vxj9rYwdaEo1gCBoFgEtjSxk",
  "key8": "5koNgZaL3TK6wai8K4D48eVfhzTxA5z4oug8Tq8UpZ4Zg8DzfMfAGgzYFov2uD4kfGMPytrVZoaQw8Kme8bja9H6",
  "key9": "4SWELzdXYDGwiSMMtdiPt5R8VJvaykub4ktJQJ4izeiJxs6qaUBmtWNua2vD6dB9RNfYWiz5n9dmUQCqFRzRq8r6",
  "key10": "5Swzb94jtANKa1EBGSwfozCKi9xrKXgx8LxQXeKDACFSZP9DAGKusg2StxBKYXSMMr6hsnpUuJxbLcRyZh8GQo1Y",
  "key11": "5JBhjzhvg7etHdjRSE9SHwpK4ntns7HGYFa5Tuug5Tx6Lv1dUdnLQWET4kT8ojHMqU9P5FncAfou1caCkCLW9x1k",
  "key12": "36qJ8uWFpbL1ArQ71jczepgpcDwkwZ3xkRcGRMjj7983ZahtU6pCLjccqJkXMWBhw6z3pmQsQW3ee7aUu8f7MFuC",
  "key13": "4xLAnuFe3jW3LpnqQEWyiYFbeCe1Tr2E2RtrxzteJrNVdPx9h4K3Lj4xXrswWsVJtbRQJ9ASMThXe1pCL42DoHQ9",
  "key14": "2s73f6fZvDRALNAkQLSEwTsQk7ygbfdnFmMvYrevYDeh6hKPrVWCDzFZDN5166KNsnPddmH3WwsijBCWMDBMAAoE",
  "key15": "Y8ahEs47w3S6t1HfG8TsWKFVraQEMza32RLQVCP49XsG9jtPfDKEG5RGLYX84nJuwJyhwwUJiqFd9CYkYW1Tb5P",
  "key16": "4hnSkBoDvDmpywb1C1KGdmjnnYpkCHztVW3ePog8Cy1HHhnb7axRdPpSsGGcV3TBhhwAnzNC3S7VapouzNVRKFPJ",
  "key17": "65kS8WXbSV6sNCt2FkVk1nfALvt57wMzabQjc6XR8aFBm3tmWcuixBN75YJSPuCTVwPYk9KZusY6oqVw6T3nBZaz",
  "key18": "2FV73pgNH6t5fUCeef5kX7Ny6sbBFGxFtLgcsaGixnRUyP2V1wqmmpNSUA57GUxtK35aQ28Y6uhj7EUYpYyaFemg",
  "key19": "4MHCjnnyDEgWWrsD5FPj9ANasGp1Wa2FzLmngKcPVyKzSrBBmUdCwpijj1C7CZc1imDGV1WFoebakFCARgiX4tmK",
  "key20": "fZqi4snJEirXcp5jPjLqNf6FKaVdNjPv3vmw11q7E523Lw4Ncfnd64yz9DSR6vgjGQATvsx5R28eAK33M5o3TKi",
  "key21": "SuxEFWnX3KWibdnQ2uxPqzHByEnDZcnJKLfkiSrNw1gTsKXzmxLosmY9Na9gDX9zDnNcsg51FXVgSdj46cPjjyW",
  "key22": "3BL3fM8ujRYLoGHew74VzSyvAc3YsfYcPfuawCtaseYEv678ZNmvmJANrrWzf9tQTuEqe4mX5xaxRqdkucoPHGAw",
  "key23": "2J4uxUd5HJngxHcwubJt3sdY8Po59de8QCxgXZGdFQmnnLcMW1zfQRSEydi2yyPRFo7u6hDwasJFEbYHrFQBSgrc",
  "key24": "rPynPjmRLUJB47Cy6pTTGks1dNUpeg8YjJufZcLya17GkG6UYxFpXJFndz7R5VaWbDvkvhZAYy9Cty17PDxnSGW",
  "key25": "TpUDbjTjYvyQ5VQmEpfp1Na4ntRtqGWSGPcy8SFm2FsBqkFJU6oSb76Qrac2y3ZHSZdGfcwerA4X7xSRYEWqsgR",
  "key26": "4pgn22awgwQQreSaMBrWdM2v2NhS4sxjgZm8EEjcMvjiQNvtQpJUYaPMdRQYwpC8p9nE4kgyZ9wpsKE3F1Jc11ws",
  "key27": "2X6ge9eL5MJ7EtoehxTXqPKQVBmhyKBpduHMfaeCkdvRd9Q5ra5UnMVnEwnaQeZwuzuZSHpBfChbXAnDpTU9eCqw",
  "key28": "2fnDCPAf76wQrJQcusruxMQqxrPNj5VqbTA4v6yFVoqZX3BF2NrUKNr6jZwC61Ft2g92qRrCNRSfJ6yJFVdMqJ8j",
  "key29": "nGHTE8gFuSmoioJUvuZ8mpEUNEr5qQvx4GebZQe17deeLFTrdqiBH2VTHccoQQ36RS2EDkKJQbZr2Y444Qug7aA",
  "key30": "ug8Aqcz3PSKhZmqGHDp27fNEM9Ue1Jc2scPZspZzeMxdythrQdcKNCM4fxFCJ8pqQBonRADACA39nc8hFNaSEjp",
  "key31": "3sjUisw4qVevX9fgjv91ob56u8ZRa9eoB6uDgo36g6riHdKWSxR1FQuA4pqAf9XNi6NaB8gj7W2tr2F5EuvhN9c6",
  "key32": "66yho9FW29DLvMsu1bvWC91CvPmku557Ms3NWVwW4mUtr6F2iGJDK7ZYDgmT3xyUbpJ2vRjHJbiXfnzwaZbXAnT4",
  "key33": "4YezmkhDF7hmDrE4StYBpzsrsD7y7jFYp66LjpWSdm5onFvXDEmbA3Qt8UXMUexdD4EgqcSxqBny6xFiax4Kc7np",
  "key34": "3CMUDp8D5TZHPj9yewKykRRhZbPkgK7ztYBVe2qnZ4PFevH1X4PcBvaLsgLFbR2PcJ15NffSSF1DwyevLdNJLMxd",
  "key35": "36frBuDZNhHJKWwnVmdHfQKDZCkTMWKgL5MaAS44WhwG8vNhmMRhVBoVkk8UXjty4QfERHHCgKWwQiUCfSBQXqDc",
  "key36": "5DqFrCWCrh6STU4p9YWo9dKWq7pdxhBz2ZgQmob4aZLFiFWEK8C8Vr7BNn3w53iWt1V2uKu8SKV2HX4V3oQEEvKh",
  "key37": "4YVuCTEud4WjCGeBFazbFZR7oJbP6TqxuqXsoHpuxkNeuvd1QogfdFiKFN9Zg2WEXRBHo4qUe6JpQ1AcYYASwbyY",
  "key38": "2xhDGQjmo9NH5gXzW5aBx5fuqvCAtg25bpNtGCrej1Ys2zYhgrHFymgZ3zZqqgou8Lv64btkznPK1h58enS9qHkx",
  "key39": "HsfX7X9UPtZAyJfWcv2Hz6qnuycEZgSTykecfrQ12VUhZZM5g2fGSuo3vBYvMW4Q4dZJhLf6ckrGA35uyPReafF",
  "key40": "3uHAF8SvMQo1xtn8J5zdsnptcDPtsGoMTkRySc3pApBqUjHW196h4QhwQfKGSEX2gszDewN5RXnhsURkAanHJiCV",
  "key41": "2CV3MaLRKTauAatd8nZ8sggMSbLSfMiP5crCXdP5HF9xHorcscUfKwQnZAh3NFsZKyqSSTGo87b3cTRiqnVs1KQr",
  "key42": "5DarbRMSYk2AqphjsJ1LMePmAnCqsUoarak9pon8RXaGKXsWjJGwXt7hXLsLsVz8P6DJqWCigRi5awA8XRGdmuHo"
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
