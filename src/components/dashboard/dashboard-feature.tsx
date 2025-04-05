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
    "4aUuTYQaMPNKbLHQuemYadwYSFbKVCNd1gx22nXiB5FuPnZLcs1PgZtxRTEvRmchJxpj4FcppzieAdf1eRk6XpEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7SC1qqW7gwPEp6yFQGmAfS69shDancZgZuPkuqv5vW2nAwx9EUzUKRDEAZ6g68FjeeuTLDFeU7feX378Gydq4v",
  "key1": "4ViV7fB77NHQrQqRNqUCQXMKEUEkuZA5tTFhggRDiSksBqfiVPsQDGfZWpNDqqNfwstE1eHpHGbHkrXhAgzah87N",
  "key2": "2vdrHrhF8mZi76A21i221CMTEpeaeZRRuqCptNJ9NwVWZirxtxPsPsJvF1oPiPb1YUj8jsuNqZJhogY9wBdfrTkG",
  "key3": "4fUMyo1u24qjyq8VnkNncVhZ4VZrvgwz9cq6a6WJMEXoDxaQKzhqcXeEo5doPg2nY7NxToiyhq2MaW62mYZqbJhi",
  "key4": "5yAgg9RRQw9cpfqPVRBWaPGiZH5UREtmkzy3t3CZ9RQ37CLgUFHP7kehq3E8TVyzHrq5UN3AFmr46P1Yvamz7Y2x",
  "key5": "3hyPyvHJg2AwJ8yak4mv6gAr4bZ232awEmURRDbhahcbvwFJP8F7ZUHYSMF8dhrQBwMWG84yFyTMRDrLjXx79fL9",
  "key6": "534CeqtYPvHQyAv3zMmpJqBh9Gm5L89Df3sEfRKaBUkieoiDQGt3zfSyrdVCejnCHUbpyEicVdxkPyNryyWUCzaR",
  "key7": "2BqGUu5bz6uzsqBS8fA9U8iaoAEY9RyRJdHBqz7mFXkqoefzZZeuB3Kub3UjMnMHveJPtg21SfBhR4bzQ7RFrJP1",
  "key8": "5dBXvLn5fgjFHxovJ25RUmn8fSJbRx9v4aHmsXsL1ndsu2TTSC9C7rayB7xyKCb2FnL9rntPjQctAn9kfgo9tNra",
  "key9": "5S5WNuJPsGSyzx5dyz9Trp6NJgbYEbecahGTgc529ahJH7QXUaPp22rjPnUWEutGmMaTmECfm2dqJEg8qNKxczfz",
  "key10": "52LqaS5oBeyULPE21T5QnViRgA3iuzPkrCDecnHPBaHGgDSsi58oP8sK6TawpbSgkWQqRyepYWyvcwP1NBjuAfeF",
  "key11": "5SGJAhKDwrXNTCzavkAejeFVZs9AMQTCXottpXHMRFaTnr42HiDuEWBs7wP7MFRQr2vDzSV6ifkL5bC6aaTJYzsC",
  "key12": "31PJEAXWPB1DcMxMAmsjWa6j5AysLEU5BbkzAVAzcUMQ5dGyrW8w2seUUTCuR7vpN2FdDRKAGHNiXAm6mu1ivjh2",
  "key13": "sUtLhvn5L9RqvZwTHZcRStigo69ukLHzojMjf8cwj37S7PxHgAaBGS2FJAAStsTjC7ys87GjfDdETT94hKNXGfh",
  "key14": "5jfmPLnqZRv2yqZhau37uMbyYaSfRBvSW6EGHYhg2D1R28bgjQ2ZqPdNm9kWXgPvV9uRaydiY8qkjJAoRZevDWCT",
  "key15": "3ZUER6EAGk4rGdRjc3cE8QW4yXm48XXXQuBZSSEfbCDtNjKoAF5qs8R5EkpfHoUzejhDGvetNrbxJ2xUZq1L7hz8",
  "key16": "3xwv3cBzrDfJt8azPa7GdzpZcvU9HY6e6C7A7xJ7amxqJrBga3povNiKHFPVwqRenHd7svpEGkaKtMvqVSJSf5c5",
  "key17": "4ZM72rTLWf2fnsVoNMcSX25zz5wvJHwqhtQzkjp87MT5hgwyFMkPB2uHgcZrZvXsxUdPUw2naDVr9T3ejJRuavEK",
  "key18": "3sGEvgbivCwswn8GAJCNjDjuryipBAi6amTW7wKh8FfyJUmKCysmBgmFw2N7GM75jtuMtVnV6oyGkT1aCpJAGi3Z",
  "key19": "5vfGMqVqYZ7AgVroT2BRdtW3wh7f8EVJMUucPZdhbsBjcz3M3VszAwfG4er1RkjzxGXCtcN3mZEAvqkdpHqg5p4f",
  "key20": "2wmrCHJe4mcjWoVqozMJzYW56uZ9vRGh3aDroTVmukUZSjgF5KAr1eGbf7yxf8RpmbknAp852tBEePLKvBPsJQNo",
  "key21": "58wnLQVJ5ZvJrbrRdPzspmeX9LBEa9cU3CNK4csghcASh4ViMDZaQNDXy5pvgpaoYWiwwrerNKmaGQ3ZYACq28r5",
  "key22": "4wv6tY8Uw1jRzu55KVgLr2AzC2oxNFNBhNE5C3niNEm2JSnX7eCei8euJxWm6x9MFxas3zGW8Bc5nxxFnbZozBVB",
  "key23": "3rVPuW6vUNc8moFUraxrDv8qRE73VDH6jncsiS1T7e4SytswdjsEFZrnYiPYw7p2YyWbAHwe4Ats6WL2VWWvoym9",
  "key24": "2s4pAMqUsgVNZ8CaJkUrRJtKLYriKtXr8sp9f3BV3xVbQVJPDxo6bmiyZfxh29fe6QwZfvbkWC2CmCziNdnAs2Ch",
  "key25": "3VCr8rFHK9q6MFu99ta3xbpBorKDPak4frA8S4FCGDuNjE7Jd1cRoBLWJCHkiZmjY6B7weVZ2kFa1Yi2Qw9ZZzFu",
  "key26": "3jLJnFH7Hx7qRdCDqMeVMYkUA6xbCxtLHSy4KyXu6TBt44h8sKM85dntE9YtBdJQ4MbLzzoapiiquVwbo7VFZtci",
  "key27": "3Utaj6b5bLawdT4CAyAaMctZZ8wC3tX285jCKHmZsGhg1bfymgctnRPqx9pJfn6sjQMgaTSgbLqdkTL4N3zZaYLG",
  "key28": "pcdLV7kUukWCf64QR6oy5Vfr2VqULqnGus1BzK6k9nymjehU6JFaVDQJtqoWHSiP7UGsVoM95CZN9JNTaCzBLZx",
  "key29": "x13ajNq75siGkyA6HaY2TvBkMcE1h3a9ZYQqGpPa3PxPxsT18sDtUR3n22NDuW358yCQakEWjQgvxWSvBWHvPQ1",
  "key30": "43bWgxgP1P5eVz3TA3bguf9JWEGjqrCDMxu7DBkwS5i6jRQPMxnMkDBhUK8dApvpvyiLYKirNN5ZFWacRGYuZaxP",
  "key31": "3XK7wkLVFr9c6QdMLpikSfS8PbHWqUnsPUJ5MNuuPAfdGZU9vhUokdbMBpbd12pVmZL2qV8GCbHHWwkqkbtDi9Zt",
  "key32": "5vKnfsQgLoeF3HwAJ4TRsn7Z8MbJKtp8CZZr6bccjtg38FWCRxT3zyUAutLZN2VDKQGS1TKwFoF1rXNDJkSzrbQt",
  "key33": "3T8py34rtEmMwDxmTfiskTv1TCTDnyxTjTGCCABSp8S52PccRnVMGueoH41Br6vM1CBmWeTX3iQCsvLuVaS793uY",
  "key34": "4DHnB7s9G79XZnRXnKXkrD4p2ajkTXyQNYUWgBpssx5z8VgPg4Sru9HuzhCL4xupuDcomrwxRdZtiJzj1JaHHnLU",
  "key35": "4dqK6dskjv31S2wi6vgP2CFgAtg88q6qFVSh4PSkMrs5Q6vZj1ogiEFvBpE7djeQgbfbVwMAx5yUJzgQ81EAweEJ",
  "key36": "2gmxHSJ6GVMxe3iP7eZuAWmxJoNRnVXaWeJYPDNkY35cc3ZYYcwNS5PRiEsEA36YDn7C5eY3FCAuJxz3DkFbmr8D",
  "key37": "4TjzYg6PggukoetdGuVNWr4wSBxKpSbYRJG3iTjRRfWzktWp5NibRyHvXmynExR5Zxowv6c325CWTovPH8L64Hf9",
  "key38": "4ad9D2cNpG2ChKq31NmAvkwL58dtCJzx39BjUqgMPLGEU7MiyhkM3HmHfBx2FLPd3zbvcEYGixtbbAcDTKdAkdmH",
  "key39": "4vS3NMpEaTFK3oh1Qx8z7wi1zt1yqcMJkmQXQqEFJE3FjXgqZWnwTx7w6N5ZJby4uK2eF7thF37jaWp4y2uKYpDJ",
  "key40": "JTm7SaZpN6uUG1JxCa3BcvwrM5TYMsrmH8cTZaWFQEzCidE7UKKuNEPpGzDLw47ucLTQq36dCvobJN2A7ga2Qpp",
  "key41": "TLb9usBCsAdtaDu4C5i8XKLA8ZbzjESgZTaUEhtedqNUG5MaNWW5Vd7k7ghQ2Qqxn3DWu7NmUBDAzEgdxoUhghj",
  "key42": "wXszFeLaxR6wVyqFxG9PzFgHEuNzvfjDSo6CTu3gqThu5vCbkYMN4sCY7QnxYL5MoxW6LgnHR9NoZppYHy2Yrw3",
  "key43": "3GT6aTQh9rNzPdbk1awYub3f1w3FsezrAH2PPms1Ebca9YgrQQVouZtmW1yRrbD5eKkhZiCcc3fz869knCVJ7bRP",
  "key44": "5zrjVxtGwg98uCv9GnXTgjiaRQWtkWuiuQPTzdCCHzpYmxub1z5zo2Ej3LPki3bNEcFXdouNfjcH6yNii5nEu99E"
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
