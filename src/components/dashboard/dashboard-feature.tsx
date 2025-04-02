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
    "2GgDw13acSyDsx5xShtPcJVpyTRs9zExkP66WrwEyupNY84QQnFFUeRcyeGvrFDVM5fXBnuqKJFanXM3Kw4uKnoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ds7ssUiRYQ7vYMZD8ikaFVNwZduzQZAVCYxEotajdURfWUK8gqVGcKK5E54L9inA7wRnZnsiyBZt4wdFysjnK9R",
  "key1": "4XM29gwwq1keVuL1ZSrZ2Amd6nRkRY1HkigwX3WtCHACCXur8pznRWrjw4QpcxzJDCLH1tb3gEryrYX7tV3cL8ng",
  "key2": "5z6DjHBfZgJvzVrLCxWGjDjshFauzJUciZtXCjWTT4tLRNCd73iYeC1FNzi2VLEo1Fka5Kvmc4bffxYPzKSrMJrY",
  "key3": "2RFvTEwGyp4PPDtpCo1pvxXtMC1oGkw1mBdiBhEF55TyjnAeTRLcsYU9R8ii534peGMAawFRZQ6bA1jKrjCozrRh",
  "key4": "5pBCbQ57oa7dKRzNH43KH1o31oaPXxP5WmWVSYfHCdrwJzSDPgAph43zJ3uHFYYHmzkPDTpAy3724Fm1xCewdEYZ",
  "key5": "3fctumb72aWRxyk4LFemCGA4AcXxMpjP3eojE2sT1iYqiXV6YUn8E3ZaxGFgddFhrcUTExLrzj7cznSZa2z978ut",
  "key6": "sEwH5enbBLypUPvPE5K5b7NZuuo25ceGJHet5AhczsigZqKvALYXfRkMgfQUTWzPnqwNmbVTvPdsr3nffvWfGUS",
  "key7": "675dsJDb8i43mq2dYz4iCPgjFy8mxcRVJ7uTQJo4c1XcX76gGzpL82PyPgCBKVfGJjkLBjnKHdHYBMpdp2H3KMmt",
  "key8": "3zVnE4NdcxYU5F9bw9nZDWvsWq34YfJSRfjr3RKjKofzfsDV57NK3Vth1CjwA3K42gZUDFRyzZLTPydEQazbD6g8",
  "key9": "q9Gwt8UU8tL9Y48gUU5g1Cy6DdnawUfCf4H313iNJd34HppaHvPpDR9XxF7HqpofBdP47U9ZGmWq4dCaiFHTQvc",
  "key10": "47JfHxd1GeqQFD9PfLeUyioLRXASoibDiaonn1MHocoz95zqc25dqyFFatky9iw1SR4tqZUxBd6WwYxs5WYboP3B",
  "key11": "5aV56bmxW2oUV32tNQRAKVuG5wMTZbpZhXTPhgYjHoVLjwQzKaRreQWLnLwGowxU2ts3einaBC6V7rh84p9Z1deT",
  "key12": "2D5tFpNBjkosDM5KJWNTcHmaQ3F5PBVwANqLbQx1rL9FndgLxiju5pEXySsj9Zt5ny4BRXXormm8Wn84k4pznb4c",
  "key13": "49CGGq2sAafANaeweTSHGEs1N6kTeTRkVuRuXf949baxCLRDj65B2iseKjzMCZuAY711ynPXjrmUjUqkwJjxSkrk",
  "key14": "5mcebiLYtq1QfLrA2UpxwSVmFwyTojtCNcBenpjcnhXt9xHzzwGgpFWs7RMDgfBiPRMQXvqRCEUhYRL9xU8pyq4K",
  "key15": "4bfLd34YtzLrhZfZwgiYJzpSh8GPGa1wPe9uUpJQpfpLmu6XegirkyMUfDRZSGkA15kCsEAhesxtAa8NvoGjkVP6",
  "key16": "47RHqqSQDhQSgEBAHC5pFBCncfHCsD3n5VTnxzBQeHStA1GxVxheKTdFHkeGjcbL4yeq4MWY3dy4jUJqLgkwhk47",
  "key17": "5UWN57HnDXVemfeo9sYBYEhwLbkdsWPGrBW7eCMuc7BciWuyXVfLLcFqdDkn7mAkWKMbnnwnUE47hmBxdkMhhD9Q",
  "key18": "39PLkijHp8DpvUtfgNvB4p1gSXaPibfpTtiU2XHVF35NdJZtRCuJJ5VTFuUw8ztGYCNrBgFRmPxK7yBUv73JfYjV",
  "key19": "3YMXmQoAjBCEpEKzJyczvmvEUk1LxieNfyjHgM6rDqd4rdpLbM68Hxg7nzDGdUmSPRi9TsyND7Mi4GtBg9FKnPDh",
  "key20": "TZVF2HMFvvNt1FV6C7sfdtwU9w2FV7sq5PGnNQGwVxkEi1ooTyfg5DmFL2ojoHeEGzT2nrLSX4xNLpUprdbNRNC",
  "key21": "26rBXVYUp7kPeEePhK5FK4xsfJjvqtk1LSs12YkCDNNJFJDfmiCKyUEgT7HL8JnDCV5MupKVMQLegXnGUnH3kGS5",
  "key22": "3gyQm1TrhZgBCGed6sB5AKDnPjC6ibU7WzXA2221ed6WSQxAw7Q1cLKX13fyjMTjoFrLacyd3T5LVvymcPhBdnHY",
  "key23": "3LR1MnZhwdpL8zZZgxKFHtKeqK9hhTP58y9GW1cmQck7yw9EqWocqH1ssRg3sPzV2jbHhdSTea74mf1gWkKM8KNH",
  "key24": "3wyCuah8FUJSEVhaFa1N3gcFnmbAcYwwd9X2czsaiqGHsqfqwFkbToUADxVniwowcoLAHzDsXCEU5SsXj54W24Py",
  "key25": "5quBzqeEa5Z6XFWiLvr2LLBoqw1foZo7XGnDvFkgLQPZ1cyiWUfuMTcmHJe6wrcKM3NbCzmE49oDUbeZufqNs5Qh",
  "key26": "2tnegkZkbbHqozY9BgYpdYjGa3Way3ruiFX8UwB92qwH977n7yCaAhYR9BqFteNAuLYGYGEFrAxHdHwQZQ8DWF74",
  "key27": "uLxWK71gZeQ7HWQLt6ArLStztgKogKg64fDP53k6nZ82nb3JLKCpS6AYcocnFD2vuMmceDcA2YBcK1Zvge3GFJ2",
  "key28": "4Ps36BZJ4DA8sVY9fNxL2628jSjBGfm8LV4NMMXt1fEQTGhq5fu7WwPaCP844N6rhAGbqdcTxyPZVQrrXUzt3hFu",
  "key29": "2bXrbaDRwMJ6Q2F29VjEi5NyirzRnZ2po8Dh6R7NCbZuouwmTRJ8c38vg3LezaZFt3vEYE6MSAfoT7my847qyLZ",
  "key30": "fAhSqzTNUGNwtjaFCgMfU9k3sK1oQvqn4JxQGXdyPzx5Y5LpYmYYQn3dosjyc7NkxEhthaGQa78JGKm93KQjTRu",
  "key31": "uq9egvb46DQRGqpjtWiKufhesDGKdnXmvqAxegnUaLjGCwCv8ZnRbTgsrrkbQm97aAEwpMsC8UyuDz1gb48RKpJ",
  "key32": "Gnccaz5fezcc7Dh5ZF5wTrUDQoPwpcfXwFRVM76z2ZyPGcEA9m9fTiXUYDqq5yso5x9a84pVaNwAN8HCMZ5px5k",
  "key33": "5UAvdHfiR2CjEfdb2JadxMdNM4ArDjBirrv1a28jUxzUhPdhRUGZV8Y6EzbDXmQRLHn9ELQq1ifayKX6R1YnvZpE",
  "key34": "EiU7fM9ce2jHDtiQTpjFVNBA6K8NeAYYweS2pLt59wUgfQ7BMjNPeLYWd3iD3QFpDQbphQjuCP3vSXA2Ct9EEPU",
  "key35": "3XcDyfCTVVU2XT5rJhwv2eEr463woE1KCyVMmLws2X6DiB4rVX3mMJwNGFDUtGXTrSo1a6kM925y9S34gJaFntQy",
  "key36": "24wWys2ry2CWSz7Cqu7KtbXzvhBc1TaW3AGqY7mgHg6a27Q7KQU6zg9LpdnMUrq4391M6BSKkFY6C1MC1dUf1DkA",
  "key37": "2TEx8CGCgra52g2kdy3gFkRkxpDWoqVYdWH9bxUcJ3fvoy8ruH64SHVFXdSL9Li4Wji7xYa9tVRCWHmjUNMbVvcQ",
  "key38": "3m3DBonoZ2LyTqGeSbze8MSUQXUpj5f3NBFfpRSS9EMHEuGaAhkEginTEiZhzamEUbvyF2qjWBwD2dHRRnDF7fnT",
  "key39": "coWvMksXzs3BpnpJmVWoxJhVsVXTkXjLYRr9jtox99KXMhE6XPAwofvTsibw7d7Atg1GbnRqDt7QQWrvaF9w4TY",
  "key40": "2iDytpZvdvWczkTm34ZWgSdNpGczh5Cui2LNGA9WRqow4kjzvN6crdeuKnJeJGh3HsnKeEF3VXBppoghh8UCNVuH",
  "key41": "5ExyuJHE9XZjwr3xNUiY6GooEistXgCZAZtfMf6emJERkq3CYFM688f4sdJPhyRM3kHVgMhht2yvkGFY63jiAjBz",
  "key42": "2Xu8DfMSogk4Fhb5CPhJMhQC3t1EGXL8U1RXzUqXtubv4gGDCVo2Qu6fPhMJgCw3pK9MP6wVrU3WBjwW6MKo4SAZ",
  "key43": "3voG2RWkH3bgEtDdcX1ATB6gtCrSN7feq4hpNKfjBhbuy1XXS2qJPM8TwQPzqfHyETsT2SVX81abzfLbprasCfuC",
  "key44": "42D2sdyNETWEnwayv3WegBMem6XrPXyigkzWAc56mASk5zwS5r3ncDq3PZExuBDsW9h2rkAxa1GHew3Re7DNh9Y7",
  "key45": "4DtVpUgzBJtkfvmfRNWSrFuR1nxvZdcB3kYa1d7i4p3Etxfdkw9vEbs3uSeQYMuaGCZgdajpcA99wcDZ31y57jrw",
  "key46": "48GodCPZeMGg6kovVugrTucZTqi69AB1BTgP2nnD6CZYZabc8mQ7aHMzehuxJERS7mKaYusUzj9MjteqmzZcsBQa",
  "key47": "2qrazyeQmw8oJYVMmGXD6GdyB6DKTJvkmD9JWP5WaaZAbsQAM8ypisrgcvrDKaXGgnN62k9yGdsbS7gitVnDgaWV",
  "key48": "4VmwnigRdKGkgfC4hPEVg7Z6ihJoUzh8vco7rV1qifnHC62R2P7iradwaAc6q3EqxguFVf88LWrEk56Uspq7KDxq",
  "key49": "AJvch1PD8eFqWVE1NLqwEZrfGauoLYogACMmqSUfBJkhHnfqMNBKyYjyydg1vn94jBXFQy9fUqLvdPfosJ7Toij"
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
