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
    "2vVEGEd9qmDayLEqZPyRKGrtRsgmQsMKFcVqvK4rY7Qas57YNdsjFv1XJm8kA44mEEcpMXhQZTJ6ZqNDSYUeP3S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmpUUdSAfgMreL2XjazdpmsGHxnz2ScQxRZhgLAYEDVkS5v4Nib6Y4xvCovPJKLnhWQEigHBu1uuYV4QGGhT62f",
  "key1": "2wwRAb9JoQfhYWLJSNtH1UgyAXQWNExw4VUo9xdY25Egehp1DUHjpf8cdbhXUNytJehVX6nzhAQPzDGFpWaFxfMq",
  "key2": "3hKXwWRVjxEPBwyEZBrp2DthB4vjPBFZY4V4GjStmaYs2abKou83peV1rvhQLRobArMqBcHE9eVPBZPL6AFrLgKS",
  "key3": "3xhhzeCVqwTATUMpqZtTPA3NUB9dFqtPPkAxyXXVbUvMwxNNdG9VWC4iwwC4cpYWbwDRkxWo4cwpwqsaxyTNLJtE",
  "key4": "4D1qMC1uT3o4sFxUjkVTVZtjqLdZ8BWeduqsLmi54HZSbf8UmDNyZF7RZLLmAnqMJvDrjXg3EHBDnVB4c72n1zNV",
  "key5": "dQ98cusYBnad4HqvnGF38J3vGfzQrrygcSiAWJEHAmf4B3KwUCeLi4aY78psJwfEgJDGwhoL1KaTMzUnERz4HkJ",
  "key6": "ENQrjnZt5G62ioU5NVgTMCUYUnfi6uwESrYggXi3wjpJG7iDze7P3pcRTyMa7e34ME653G3MyRndrSdUvZ6xMEu",
  "key7": "2QJHUGxwCNaF83caGBntb7bnnA9WFWTPfc43SBQuRxxv3aAyGdWUqhWhH2t2Vo8cC3wBWt9NvSSVhjDVc9qLTeyp",
  "key8": "6aytHgyeoWBjMWhF2bwxnQ4o746Ahg9xWppD7KhQQRYGtjzJuMqkFjA8S9Fx3WqbzE8tkwexDio9wn9c2wCySXH",
  "key9": "4wzW2c4tcUD7mJPjHz71eSmgYAR1tgwh4huTMCBchzNZa4qfbEzU9sJJC7M7CdxuQo8dqi6AmXprAcWwk7rseQMZ",
  "key10": "YcJLyfGUUYtLwo6Hx33mykHZYMfuouanHT71Ceq2ZjgMhY8W7uGjVJ7Qx4qM6HEfs7FKaVz8EGkwxCEm7wA8Bbt",
  "key11": "4KtnCkeXASn7oyPNPknEVndB97bTYtcvMSbSXXaAJQqmQgXRctzk7mQAF9PVMB8p6mNJKvX5mte56abh7v4WBXY9",
  "key12": "tFa4RrQamBYD9MYitmF5tj8sHXPTxqpfezwkSWv1R68Tu2XEkGNPe6T8xYCU6yUWfN2GvognhVMVarVvG5jemNo",
  "key13": "b283Fwb3JvS1imkmWCR8Gm4uVFFDMRfMEN6LTckEodHUK1NQmSuBwTvjrHX2ed1bMqjX8rJ6awYTiEHYbbxj4dN",
  "key14": "42HDzJxYgQCoYmLS7Zu6BjKCYjk39PvSwD87JN71D544qsXkGY3aAaTbqjMddhrA4r9idMNhbjsAXAyWEzs3FPF1",
  "key15": "3GrGyrhfwiw2P9yz449PEteavygGCJMxbFUf6TFUzSiAXz2bsxFY892cyBijyJzLqy2Gf5sKwXH51mAoPmLfrUW",
  "key16": "Wivd9bjZvjo978JBQKStiyLdixxfwbzQjQ8u4Tv2zQPMhsgoJPCJnktFauLjYhtCYs47WWvm7GJ1t3ayBk2iguP",
  "key17": "4FiiRin5BjWTsKJP7XDGf2pEm5CzJgRK7Cfqw18TdPesSCjey3oSKcGmPHVXTVcBt3hEouccJXy91KZAHGHjspFv",
  "key18": "LhZar6NpTDCesqm7mdmZaoD46BfqdQzHjQy5GixTAzymR1BQfkAtf2FzSUqnXmdB9qRUWAUb4beXUSxg2CNRbAr",
  "key19": "5yQAdz3xXfB9ZRnr68dDn6aPeGnJXh4AkPPbjE3pTw64xRw4xoUj7dLQ3eTcsUJnxZabu3dAw89BRSVsi2ALVRq8",
  "key20": "4VsejHdTGjW2CSYj6aP3mEj6sy4JJSE7GMeVjrBssueGBTeTg3e5vz634aJxMrVV1eh4QuGs3sYEmGxnxoi7bUC2",
  "key21": "2f1oB83f4tBUfZHzzuHdQqUWsqSLfSRT77a11GLU6RNLEH2kxnLu7pcBU6QNH6wXCW5VG9RRNDb71FFPasnGAqKw",
  "key22": "2E7kdd5xUeHn7r1mMNrMPNBUM29NFwea5ed4sHXSbKxUEkeAfUeedFChrX9pZgzUnb8P8CYBMkyDRtmwLMLSkXgJ",
  "key23": "3sq1Ff4BqWz2QD5dnd5BSLRZoVnptR75memKjVroeyC411ucEUQ3LmmEBVM5dwS3zYVR6f5ifgMJFVAWNScrDKyA",
  "key24": "HvTGx8fxxFt2Nps5QdveLJyaxsC8ti2Qk1mTKjFuaemy85ixfvrbPs35ggKh4dV3Ja2xwWQeUwtHFacYmLQ4xb2",
  "key25": "59erFwsV5nnrJtiA5U3QUo12XvNoAXXzFgCwRVbGksKQgZpAYu3nMADJZLg5a8XUvoV5P1GxqDSwB2qN2UgbN48v",
  "key26": "228sJE5NdrjfAPpaBAD6vjSNHgFbCbxqiePSVzKqsEMawAAUpmYBszWmGWtT9bSPxEZ3XvK1LDRQrkNG3wr5AwNf",
  "key27": "4F79sAuwCqCYKw7MUe5UyU39XqHsnndng5JhvA9yb7cLtc5bFcjcr7ZBwwCz9SE5djnepQW5uAfqvxgJsSed3Kzk",
  "key28": "2fgZtjNzBtaPcJJfNqXXwfW5jstvidRmvspYcWKy4DWCveX3CF3vSBKwPukBgJQosbeU59zLuHABVx7n81XFd8J4",
  "key29": "3GUiUCN9kfT7iF3ypp7JssRseCA7CBmtUXLsGpQ5Ud86aKHGSYgqA45u8gsyjezqYGxkB2zfX8ZP9fFsVa5HPPXT",
  "key30": "63UrpTuSTx5zW6J34CEdw7wXmHWjVK38CYHZhQwJVHv8vhQHNFruRgovzDikLi67r1AKQfqJNcXZFNqcvvDn3SuG",
  "key31": "La1GvBzeRvVzbqhXH7bLto7R4kkRe6kSJdVv1zAM2Df52dk9jipEeByeDN5icfUoW4XHvNmPGkqvqJTjPMsTYVj",
  "key32": "3UkKxhWsWuRMMgKERdKyGUNK4KhY5weCcfX6w1mnaAsgNfT6X4QSWyWBaXStdYKrPWwhpgKwLzFUbbXZLkGMrN6U",
  "key33": "5jX352H64n2U2dg8KxXfVQkwCVpDbUTE3QXzajeV1gXxirV5wVFJwB1ppRKCBCTiojGkn9Uns4rz9tzozqBqbruL",
  "key34": "4oysrezGLXrAfVwzBh1ihNGoSsS7iYtAxpzjgeC8jFxSoq54Z7Fo78fbC5qXi6TpmQJ9DntY2cTH8iTZcwBpG9CY",
  "key35": "381fuF5srwZki2mfZ34ZLdRjsbh1xb6vZCDBB6CpeAagFKMSLjBxCFMVFMRDhruNSzbfgcT5tJ4Zs3qRwUAihYYs",
  "key36": "2Qws833m6hviGFoevSYf8ubzci4zh9MRDWCAzmhNTnY4NWUsKZRpcinFV24p2R7R6Rcnku81VJV4JpF8iZHhUJfy",
  "key37": "cvo86xMxaRCucjd6XLvgP1aoAXU1krTYPCnbquJtiJiNoKccy6Gf8mR5qkNHwdeJDa7qfto8q5RTX3mbKtuwHdi",
  "key38": "2oEHTBYXQwS8fW3KXGrmnD8GoRoX1mdbeiQUjxa8tCaktd3GyJAZKaPfg2fZrHdmGAHzmndLrz9XLPVYKsmcJrCE",
  "key39": "41Si917xUmMZBZDi5xrSKbtNM63HTGKDU6RfYsUm1DqFrX1rCj5Wiw7Ej6LTrRiNzwB4vEgZxA8XZSwo7bdPvtBG",
  "key40": "3xmaKiUs7T7CmGxnTagLDYMdeuF67nPGc5fCLzutQtM2cGeWDVR558hWLzM1VbwMpgnxT9ZcjAtgCpa4YnLooFST",
  "key41": "KomMiAmYB3CKX9HcuhZ3tZ3NYWrYrBbnfwx9BipVDPhvDZ6MV49FLruwq6PnxwENJXHpgFYapgtJUubxhy2YKxh",
  "key42": "h15n2RjfNo2Q754WWc4PAtkVkytYwG7ybn33v9KuuDcd3TcToc6bHCPX4SviHn7AMvf2rJT88MHGDuhyiYWzteW",
  "key43": "4HC1M3y71eqaaQTPKP4St7Qew84va3EhkFZBqHM8EdZA68Yo1Lkd7d8HJb5gyvDWxAAY39hocVYiifdvvXYa9c6R",
  "key44": "4EcgtZfKhVbprLPb8dZGWKbC1gffZmi4jAVRmT5ZNBsQWdTgxjavRPm1Yebs6PcfLEK1xECuvCkNU5Z4rpZoN4HF"
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
