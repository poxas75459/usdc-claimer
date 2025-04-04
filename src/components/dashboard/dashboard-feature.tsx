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
    "P4ufdxjB3H65a8AjDdaQa79t7t5xPNrRjFq7r4KYsEPBqqAa8xLshyQ9RoGwmvKzudPTXCu5qxWV9SM1XHSXhY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BuNDjNsnyzD5GHBz94SP7EQAf9zXXz4YoQgDZKMDwmWsu2odcwwU9dLAQEKfVGApwR94agHZ734CAzwbfcht7Kc",
  "key1": "oSWYtpdgYQHJruGXp3Qtwyx8LUUVpPnvvEGY2GnEBgL1KqaM1jVcx8QNhTVcY49YZosb6jyoWpbxbBp3kQXKXkg",
  "key2": "25fiRyHH98tkztCnVkUUDGupBPk2GLNPG2Kpm2v2cJnHnrBTXBQqF2RRg92uxRScihyvvjHccC7Nh1V6itqDZNRF",
  "key3": "4w9pYKV2R1DX9Vd8veqqa2kkNzNE68dPx6QtVTrLtPqwCUuC3csZPQA4HH7bH43fnyo8v8nKUFK3bzSzDUPDT86U",
  "key4": "A97nyhWw6PSGT8NX72RLzNd8NBp9Ymr7QkbWjWN7HQCjgvjBxge29XpGH8ctBA3GppRStNQ9JJmDKArVfYWxiPj",
  "key5": "3Gd8RA8Yao7VLmpBCW5L11NgV1XkYKp8sP9mRj5aJkz98b28NbcQ4n3vSoogGRUTUM6XfEt7e2ivLn8MZzF7aUUb",
  "key6": "3KXQ5etYArK8o58cs5AjvUyZRb3hGwg5MXdSqDKRaZDga8p1seHXh9wHhsk15U8Vfi6Mma1cFmTfBqZtC8iCCiVr",
  "key7": "2kRy68X65uCWTiPcvf7pbLF2SECMz2X1QV9NViREMfeuB71kj6ZbPXT4utLoAJ7fY9gVVWynzp1Qwta3yyWyNKo7",
  "key8": "2hwKCmxpcfFH62nHidhdAcXUS2ZwbSeLAjPHSURQ3fEt6882FcuchhErhvgNGZX7p7JWigTVcWW9ENnvNCZUTTZW",
  "key9": "UKD6d81miNkjCCbtuVKQcFDJzDYDWNPideXQAZd9PQMjuBWCombdJzxVGNQ71wLKjtRffcnNNj97Txpo3xuAB4h",
  "key10": "4SrTc6f8bLknUwAkSkDhBYb9M35HuM9cEfbDaU5UVMTo2YVQ6CDLxjA7F7Q8oTj75N43EUMvww1rSaJMjBrosF9H",
  "key11": "57NGGrpdzLddqMRxP93fcprHd6d6yGSxDAj8yAwV5SFKgYqR6b4mVTDsYw8WMydDcAtFJTVKxdeyKawWXJjV61uk",
  "key12": "vLfmETd81ZqEmjqhTLPvmyZayQ8vb3C1uCDRCDx3oCfwGAdBa6ELM5uRkRfRJ3H98rkfn6M33J1W4YpLdmNgxYw",
  "key13": "3wnPoFarApShuJj1zzUwaTNCMFxp8tRre437eRRpSRmyP4WF6Zm4WPsbqesTchrdvBkz1eqi3CrruC8P6BC1eLzJ",
  "key14": "2Gg3iV6G5VpRrTfbzgEXePMZbQ6qmChAvBfgo3uDc5q2bghfGSx1sXWPboEkmoYfriwg3mCQeue9MZd5W7ajdDXM",
  "key15": "45x7mm4XiF6JneWEuFRwFaGBfJ6VjiLPQaRJ22GyMLvaeZv7MGy4MbsSoP9tqJY3ekSX7pDbdChy7ZAbF5UJsVNL",
  "key16": "5jbZqc6CzyzptFrtaYE6JTmCCTFkjze9c6Nr6ANZ91KSQ6dJvgf9D4Kagr9hP9nT7noMPU4dEUS2gmb47wdRDFCZ",
  "key17": "2E2Gw1t4JS2umotzhd9VwqYmnVx8hrSdTH6rvpmF8ggZoKmiDiTABhCufeuMNgdJKUHHhZj9CHZdyd2rxt9tGcdZ",
  "key18": "5jQZyKtLY3xFiPELza6D3yggXqNp4L9ejwM8m61PjNzNuE2m4EtMXtc3mQMmHze7ydgBz2zxuyPPXpLAE7mKXVMv",
  "key19": "3uZdEkDePU4PSKJbCk9hETGtUUUaSoYPTWhQZz9GinwX78ca4ZpSyNH5DNh1PK8JwzBZBHhEqHjKro9dGUY64Gs6",
  "key20": "dAPDXjRiWpyJyVVt1VtWYRHfWM9yti4d3ruSqYd5ZPVZEWm2QdmFxDJPfnLaXLsebciMR1QU5yyF6crA3jmA9E9",
  "key21": "3aCVdZVXirdXxT5bL1cz1bUCMUAvKzTUGPFiNMDoYfzSzqNvuNfXq1VQ3iZSXokFcbgsf9WX35HJ1HTCD5wSWYJx",
  "key22": "fJLiSWsqaoHvDBuWS7J6fgAdCTAccWackF47qqRZ4BSHviEWNwy5gywVkyDZTsaviCUF8fcpnhsnkVqLbsfZWBB",
  "key23": "3EPbgsfL4VgvoX5JTfiUFTMbR7JKUXsuCJeP9CKFS38e1dgL9bHkNZ97593utnih8YK8KvmhLM8zohBQtCLeYfre",
  "key24": "3Vk6hzg3RpCe3MkLT5hmXnpj6LVMFombdLzchgoVtVURtVb8Q4sVemJi9H7AFkkbSuU9Ud68CjWKgu2yC3Aa5Xb1",
  "key25": "2V2q8t3uF9tuW8MeGYvbvVXSosFRqT8eXYfvJNy32Wncgxzuv2vS59siu5ijbB5TAd65JfxsbTeYMQFuBUyQJcat",
  "key26": "wJr34pLy6Fnb5rbGh6wxWxw8RTM8U2pG5mZChfKorMuY1eEyssdazXYZpperSbvQjLycHWCQgcY4V3qB6WTs4yp",
  "key27": "2cywdRyjwZmgu8Ja6QRUhZGjEysUpWQmKHnTTTp68zBSnqwMpUzYioKhF9P29E3MT3Q5AL1S5AGJd7o4JyA5rRWn",
  "key28": "3ttk6T4QBxhFLaDHpmd9bfYGpNkowGhmKhQnDkzqPRhdnCUq9seLHpSJmG8L2vCeJ4QhpUpcgt3fYWC9HvdyqC2q",
  "key29": "P2Fjk4N1YxWimGmSRs4L6aSk54MtRHLPy2xmVMMSPyoBVnFZGDMxviRa9UXj4h7MwndtD6W6VyA1rZxATyuL3dH",
  "key30": "5wNpAUbYDDMAymNzFE6aQsYj2s9PMVgMMd4FUaXHmsmxceAn2jEe8RhiK9ejJsSXCwUzAJ5KXeipzcYvMf4uEcp1",
  "key31": "ftc2rZXLUTDBSv1spzjLHMG19x2qqyibh9pcrXwZCe2FDGrGV6xHSQNNjsXynKvw3xd4uWRiCz8HPjDHJskFmuD",
  "key32": "A2W2uKu9M72yoALQfYviu8AvZsQpBCAyuwKCa9CNfpagkWpjWzZBdESkzS8mGsgyLuLawyRnKcpxG1rzR71BCBa",
  "key33": "22DDe9y5XqWp1qqZWZ6rRAcC2e9kc35t5ptsBQkyiwxM11XygdUvs6Q7JPnB1SbQbtyEU3Ew6dGGbx4YEPM56YEQ",
  "key34": "2jEUQsuRXv6AQKTeuoAzV5JDtz2vwiA1kXmPNJEiTwsKs6VnbWdXuPUfKc4UhF4N5FnPZKBFkNbaTBkqxqFjyWKm",
  "key35": "2KkCcChJFd2yoXXWaRxD9LkzBU6AFovFdLQ7Fu6UiGFaR9ujHgByD6o5o22XFHiNLokoeWcPoaSEfk19YtTrWox3",
  "key36": "3pQxfxJYxgEN2BWMAcDtpn4uqmvBX35R3QhZ7NHwndmZ3swRb8hgV1hxGcEzk6qsDCxmK9rdjQ6yHtN95eE1F5NH",
  "key37": "3uGDzEwsSpqfH4BqHJ2A42RUbfiPgxd2fcTJfFLJ93J41R4WsL5W3kBnmMhLRP4RAoTUoDzy6mvTsVQS6Qs3EX7h",
  "key38": "4RASD56yjSMdT8xSXqfqFS5eBvUKkR1BYdjXTvHaXrwxqtEEmwx26qQtNpijSqwUcLNipKaKMt6XFSX4CdzuGEdM",
  "key39": "5szWYm15DxLexshKx9exemUbig5rd67KytkqY6tAYBAumToV6uaxvufkmERtKRydwkTVwmcuySMAUkkRuiB4NenQ",
  "key40": "55xoytSHMLY3edBMykTq7Czs5WLtGhG6aESZC9rgLmKATgsFC163MWYyDe45XH9GZPFKJccZZZ9p1NAQqBoDxnM3",
  "key41": "4BCJHdAMp4aKhvGC28GUy7Fvjy9dhbwYCoEh55gFV8hYSQsRcyBJuPYSxebZ8BScT63pKGDXYho7HAASHJPfRRZC",
  "key42": "KPVsRwGoVQSXw4hdPaudtve1A14UT9o1R6WoWHPMDXAZywkTehbCWHP5UtE6zxmPCw67VYDLVB4xog84WJDsmbN",
  "key43": "4b5ZXekqmmkEsch5wAB9BvvcWK8P4HLVjkhkEYmgoaeuD4VqaPcmsV3QEzjps1gXmt8zAEs42vy5z4bybSLnp1or",
  "key44": "UsiA4Rf4m73QSYRg6z8YZgX5uty7CveA6WNrznZ54ZuFWpCaRgvFsb7HPEyxug3VnkWNgwG2RbqebTCFNJP4NkE",
  "key45": "5nvtRNk33u8vcRmwg5NJmZnGvCNwaBit7REnFGxvmBPBvosNAgMjHashm8b16WbLsdQ6rGRFM4XUThsFBzVXLACE"
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
