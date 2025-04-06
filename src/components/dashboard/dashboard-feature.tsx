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
    "5d4YH7v3scH5sBEUefcenniHHfDFhnMov1gnQjoEBJNjjLeM8fgRFBR9Ysqp23dYXzLd3R9Mbqs2EQctpt3xEcqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuERN5dVqbTeqS2mR1hsMBLjv27aMQUNNPvP2aNqwPHM1hBrVs2CrA51dShfNjHcxRC6KBPcd6cBpgE7hV8UFiu",
  "key1": "54qybYjmVpPV9aRGjMjfXY6x4MkxCaVzMdyHJgVJUc81RuxwLaQMtze34Gwgd5As6swGiVbWkKPW2ifa8tm65o6m",
  "key2": "4wvt8fKa5vpktnVVmBQwWt1J53fL6H8PEjiamgqSueswmAjdRDgX9BNZgAmr6NAnBWpZaXebgRBct8xt9xjsees9",
  "key3": "3pNiP6mzsruQQ8psEvvPsSGcuUYEEHMQ6QN65j9xKdXD2Ru2FZBUus5yTvkkCmsPgxzCeSSManmYVcBZFxHDMUzR",
  "key4": "51nBxzAyJu4sCRSxhQwnQaTViy4p1iZCfA5GrsxjWnbPgTYMyVAD9XEjEb3XLRiUDwfU6yvGoKotdeExT2tPjS9y",
  "key5": "35V3xHho83FrqVvGHpkEavaqBzGhU7vXwxE98JKQ9Qjkovk848GWqxvtja7YWuKWn7FNkz1VBBEdubkxernsFmb7",
  "key6": "5LwhugbcegAd5qkcfmbvMABD8gfvGqR8TfaKYL5AiktL7aPVRi5tAQfhRGq8an7fnUYUgoTikLGYEuPaZ4NiTuHv",
  "key7": "4andeEbWGzygrUanq9i4a5wVdCYrJbkRvR9i1CaHkVTwF5CKAAcRUYPGuxJQFu9zC6M4uoRrwkAte1ydpurUq4cW",
  "key8": "3D1Fmzq4oVZuoMdPVVDVjeAuBYUkJV47vt5PXMsnXcTMq8jdaBfiJhbhR7jYJB5MAnK4zZiUiERpdtVgEHHpSj1M",
  "key9": "3EW8EVfzeaseWRNkLgw4efYN4fqo18m8YJ54AaxJ6SJLUB6YntZmZKbjBBPdfnjYj9QDRC1gM8ZkSHDkkH9z8kKM",
  "key10": "2GyMACiDYNrgYew7PiYzGH36QC5awWzJXzwRXo8Z4WePJpLv7C8niLs4L17AobEuyaWUpEEyrbNxkevMr6sBhKYg",
  "key11": "2SuzFL1dCbr9YAPCRxS5kPUtjn9g9DJkWgtw4WH8W8fpPGkfcT3tZNSH1EM4rwygbKWK6GX3met2wtF7L1MAKqmm",
  "key12": "5xcpM8mspx1MH3LjhRjab8gwsf6pr5EiznPCFuovoJZrHcTKSXpq1wX9HYXzMNkNaHwvbHU4eYhDzbwjMw36QtTP",
  "key13": "2qfA3tKVzaCfFRLGt2XCNhHpzCpaVS9zbyjP6JrFGTigNnttGq4PFzpPjcNp2BeNWFf1sShpYhX4zyA5X1k4aikZ",
  "key14": "24hqM9cKeLeXaMjEDTXeJSZ6ctV8Miq4djFAanu5P3jNxg9gXwN7zzzVhmbSBq1m8Ex9hxn1ns7r3Bx9oCuX9RoC",
  "key15": "2vXchG2weTATwvV9N2n4sA1vAjrYuMuKrG6zNZfN97YUmJ4nd3upU72SntSkw1ugmJj2q6Xdjh3U1Yksangv4zeV",
  "key16": "P4XNhJVxhPwxq1qgmpRTr8vPczXCWvZwc7LKNzUbThNrh8skFpfSPgXqaG7jGtWm3YRg7eRBPJvLVzJPc51QbD9",
  "key17": "5BX1uHak6du5RJadLzAFEpKVeKa1N1y43NF8MjCDWVDK2tT3iWtAHuRWQV5NYdzLisWtavHeHYEKVXmPtiHC925Y",
  "key18": "5f5mWTFvRdXaQpDdMhGFKAyBZw9HAKM5MG4ihNB3f7Bh33QZZx4W9sTyfdZxqZFsd6cJyacwcUma1K8DfPCpRCid",
  "key19": "3i6gW15xz8tkowM1Kc3Ni1TgacfacQp9FBdKU92ohUUQN2PFcxYsDSHydX8pB7E6NzdEiyjTk7x4GqiQ91iC49wa",
  "key20": "4MSjFqjvRoPRCf9TMFCHKF2zMwspGHCbCC2mfAKQ8vxJhHpSnkEvBp2Gnqk1pGLTN59QM1gAgKvEpa48GnLTWYyw",
  "key21": "PR8YjACQmnsz9D8erAPYmt2rrfTwu7k77Qy952vdQ2391MfeigKMiAeiPuWCu35rVeDE1tyk1B1q9RSYWnd9ZsA",
  "key22": "3asKZESGa4WaJbwDn98g5nbP5qPScQZt33oFEmk5PFdbwvWagwxmgfCoSCVcQuYQLk12VtjJGCzK7wW3awPQnZee",
  "key23": "5ARFgxk6PYUyPcTpv4ooJWXmHvjmtBpgVq7cxgY1omUf6tM788CxhgyiCKfdx67zFY36hEspRSPegQbggubYZhan",
  "key24": "B1uuWTDAvgMjqXHHtcSVpRaQXhUqCWRTC4YVzHTKRXybvqSUJy1wpCjcsHW8kZ6k51iYTEoZ2V2nZcNVozjzquY",
  "key25": "5ZuHsyj1bkprMAqK2UxHyfgFffrMzducRg1JJr6H1ouSzSUUXgoEeMPuE2QXjRf9Az9m7Q5dxgTTiYtqrQXnt4vi",
  "key26": "39nqEXtZqwuC6stPgHxk5hgdjqXSYUNQ3G7M7Ac4HN1Sj9MKtqsPcAtZUi1X3DZ6PgUGoWLocPHmp49hcdDJecb5",
  "key27": "3f5YAsqv5jvEivASgrFeqTQeneSjCbRK8oM5hRSMahhMgwwpVAqZcvJAsv9vobcBVb5TzG5C2NFaNum8c4Cuccok",
  "key28": "5iQrptFi6EE6bKjvHNbohJNTHMpsXTFtTe9rvAa4Gcp61QfKni6AxmEZ3XdMhkh9xTJvWeYyt7dcZqgbo3CXzgJ1",
  "key29": "64Gsu4Jgo4v93UJuorZvNPQJuBQimZ6kPpw4ntDf9MdPYSsfiSJDFmEMhrcFWbfoKzrGeXMjn8VDpCKybf97VZdR",
  "key30": "2ckcF3j6SY6NGw78PgBthPNHUHRwAmyhY8KSUHA7QG3i74ykFnPdGT5JZ2BKQdzKi7NqQEm48ycWx4EN9mxKf7Mv",
  "key31": "XKryYp7vU4fLMNF5AV3pJFT8NBj15eXbrhdPY56k4b4MsX8nN8xzTKHr3yAoDvYmmzmuzXptQ3QXSAjHT3KNCZZ",
  "key32": "4H4fFzzGpKaL24P9BWtp3wCBs3bKJLuZPQYw2DL499vxnS6UJGjPwFAnkuig3uokAEZAURqaiBtinbkzHSHkP4rV",
  "key33": "xCw8TGgwxx8yejbNLFRBad52X72A84QmPiWYWuEPFEVkieRLAmXJV8bNTUeuHmxZzqmz8NZQw1NSEwkF482gxwq",
  "key34": "5bJLTmtVV2cC6aNhuj22MShLRABhtsy25epm3SCU1sSU8d2WtLVWYTbNxvteroAcFAPu6ReyFYLNTHvFZWAb4CYb",
  "key35": "xuu6HtBfWtrMKPZRsuwRnnvjAvp2y7MoGY3bZHZMuKdT7WtajuuUBfBF6Ydiq5QkEKrwQSNuowvXMoxQLMp9hqi",
  "key36": "Ssvjvq2H4zk4XHQen3ZZx25YH2h68JBciPPwMz8WbTfhNDSGc2fhSn4MDK2XjkJwWj7pykizMxeWWJuXQgxjyTZ",
  "key37": "2kxmsxko1W8ZwhHF1AAQKx9ZzMw8YWQratk8n7o1Cf6rWna4LobsskBf6oRomdwZXSv3L5WuVEKCpUBbHtz3tTuV",
  "key38": "4tRYkpUUG9FbLXg9TZK7sKTPfaEy1KE7K34u82jdrxneMVobFmefZrfJbeFTkvrYiBBQcB5uGCeRRzRgrKgZN2eW",
  "key39": "5ug9JDueB3ybwGBQXEcqWHxCKyxmgVXy9ZDM5VK4ndM5P35TFzshuBTHxe3obx84KnrdVc7dchFrb4kTE4roV4kk",
  "key40": "9KJGFPGKFvR5vwMyj4EHF2tXHory8YZudtqpfGdLyFvz16w4ZYvoAW2cDHkSb1zw82jv1Vtw3mQS4cJUCY26An3",
  "key41": "577npURHEC4LczKrZoPLFEEEbD7zGAKocxXZT5ZdsoJGcDJ9HZVxGYH1F4QPrHUm5QjZKY6WU4tXa5MvBVp4Behg",
  "key42": "3DfnNZhJw4FkPgpuHSsGb9EUbvPcPqYk2UYKnfxTMDxL2XkBZ9c5dp2HJLLtKXc6C3BWv8xU8TqjJpxCMKTfqBT6",
  "key43": "3X8vWdccgvMfpqVuzASEFnTNb8YXYiEZTSi4NhTDHqXpo2nfhR2k3SfSFAXACwg45oR57uNFxBtZwzUcVs6pFiur",
  "key44": "3PKxHR4KMDezYwp3XCePvxDoaSkMo4sa3c3b2RAPgFWopw6cKvNRn5zBpmyNF2B1j7q4Z2zhvsfLrFQHrHnWYS5V",
  "key45": "3eQ32UpdX1eAkU3D1mqMdvdMupQHqexgE9zvMgXiH7jcN9HediZ6JSy5D2ohgFR5HioBx2wCb633KcTkR6NWbSu4",
  "key46": "5cXrJ99b9TGQ67AYbqb3RrXfts9LjD4Kritqj2QBe8VmbMJi6scdPaeFimPVfKaTqLdGPteHBziMuJLMfK9KSeQ7",
  "key47": "2bFnzMLz6Qi4fpmRmXSegmb3ea5vjUjGtmswd2sehirw7ajxBrzNbfbNJaHkDUwBbm4ZuMQyu1vcC1TrTrRE7CiD",
  "key48": "5mpH8Wd6qqBkd5xXrNvXRaFzaPDcRqDHMCxSxPFiEmUEF8PaQhP6fVNND2BCN2TZTYUNZtE6sTSsjNg8edLzttEa",
  "key49": "3yBYcHXhVJLRqYRjXyuBEdwZ4rocrYu6s3ZQ1AdB9M9KuJ3fkEVei11pofCPmpbgco1rV3ebkxo8vAcLM3shMj2u"
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
