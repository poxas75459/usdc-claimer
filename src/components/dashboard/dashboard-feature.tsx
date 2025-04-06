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
    "2XD38KBuy9MDgEXZiL2PozGFwpNWf982CVa2GtKXVBaqyHx7M9rmRRJzKKq4BuRnmw83ghEa2ETRS1VU4ttdFTvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DTvCyFX5QAQ5BXEH97ChjpMYQrUgZUBeuotWkusLtArGoaqX6JuxGczC5L2VtXS8bKF8BxqW4faMCB8a4aydWsv",
  "key1": "5gdNdpA28W8dbdjXuBquJwZUKCWBqzgH8krDapu3UGCgjZ2hz43yoMrLi6jFJ3RpuuHrZaN4whXnB2uDfHVz7xJ7",
  "key2": "3V5STHHp2BHfh7tCdXQJVdN9KUVYnnJNsVUGtPCaBJRJJn9FmGkX6CTdjXNDNhgDpWNEVKQqMxsRyBD54VssjpwJ",
  "key3": "23VLvSwsWF86r6NZZ9gcvwj9mb9zKWNRVJEHvsPxvRYQLcyziLoMuyJo2k8xfjoLSQiGMrSAaWbHLndXSyqYJvzE",
  "key4": "3UQ8NZeuBnoAhuQoPcNwssCcNaVXvZEZg4FAu4JbQ3ciNnnvUmo4mUAA5HsuyCkU6XPCaWcqu1m5mdg8KDzTLJS3",
  "key5": "k1BSx9tMcTowHe6PVPdMVSame1avdGritkiLahFvxCUtxpRSLRyo3znNiPxkKm8mTrH5fANe2mB35kMv6C4TQTc",
  "key6": "4Zb34TAmcx7YmeFPCujgbwPErGnTuDP89aW4wdTe3rAErkyRTALrjk2DWYkno1GbqmTpnFnGPNt8BKB6Erh6ybTB",
  "key7": "4TXgckLjtphZKo2tJJ1nPjocTfFcBwcKKsBji8V4qWwc1PU2wUYVHBC1fYHQXRpoXFJY5yPehomZqYCc9mAtwxk6",
  "key8": "321ZveJtpUkESwzBJ6jJEH9Crf13vBTo4LrFrsQJxFFw5FQhtA6fC9YQ2VeYHWqfjgYzARUaVJxsg23ninQeAue8",
  "key9": "3bMvKmdxHc2kwBe9i4JyEXJjU2ZBb3XKmjdxAVz8y558xnPTcpKt7htrEcEanPpgRx1efmUkaYVDbbun5ZeNWJo4",
  "key10": "54gkQwYWocqd6ex3wAYCczHVKJALa6HaUsHPzb4rCzNbsx5qfnazeihZwJpEEXwG8q6jfVWLwGZZphBrXXHpvt8m",
  "key11": "4Tbb4RWTQn12DMvDsS4VGLy8soPENk8HoS7wJ5kid3wNsDn7TtWdKrCSAr3EX2mJfGM6j4VJiH7ki2HUj9QeC6kq",
  "key12": "62uUpFZKRnzzeDUJ4NZD6Bq39GjmJ9g1cQM8ZMKCcwmMga9tzk6ni2bQmouRk4P9QzfJyHKrGZfqMLEPz94UCxAf",
  "key13": "4ZQEaUVEdbxSdP3o9iUk1yXKUiJzXYyzghNxJA8P9kohgNSwPZ7FWLaMKrGafanVzXe8g7qU47N4Dh2Q4dgsVtcY",
  "key14": "4imNZEUkwpVaRvbL7ChLZAf1Pn3p5ysNbBuhxNnGGANKcMfi9GMpNhfvR2qFBhXJAt9X6Rci5jtchQhACFA4XBGL",
  "key15": "i89zDi3NDm9QSgYXXjSoWKpzY4RuoP8tuAU1S7DykJSgNytuaHobgLjp6noSyynrvMAsjcQqajdkcGDFRnTMx44",
  "key16": "3c7jBeBSGtEyCerrw1mZhMTmSwKxwSW2ksFn8CKvmu4qqGmCwCuJUHAu8u5HfBrm3EpcTBQHguZCJU1pY5xsfhyW",
  "key17": "zwJxBQbAEGEVuztEGp8NohwxyBUEzZamk1XxePzoRYmW7ZdJZXg7FN73ynXoADNoV3bFssjWvNRvSUfiZADcPUu",
  "key18": "5ojkscnw5CWTRyNw7tTzxEWasxdM7XDHbDwnkfsozqRXm2MdW2zDJHXc2n3EqjRsB2mb4d1BHeCnBZ49dxfBoSaY",
  "key19": "5q4aG29UUmnxUUxQTjsLfh5itqdHibSbdoKuiNB6236WfyJxnyh8JVjtWufZzzZSqJ7WJjkAy6cD8xJsKHtBrQHL",
  "key20": "3qotsfFoDf9HmLxdSEB9zoErDWDPEqm187R5Qfrs2S4vMdEt5b7WL6nr3bEvSatyW9YsmzetZ87zaa3aQg7jeVNz",
  "key21": "3a53vPzKquU32vPigGNPfFeP8xGQ1YbVWTJjFn48JFh1k1XAgq525d6Ng6DBQubwoCkj4UCXVjQ8C1HzS9X7Rpe2",
  "key22": "F6egwRDqGLzwJ5sQqUeCutEbreYLpSRmtyZmnBakLXDHhSf2aHbXg5dac3nJNmJReGrrS49bqqZu9SRGf4bJ8U3",
  "key23": "3hamHKQPMZQrnc8xNjJSdcdNW5XxeT8RNiwFkMs1vVticfRCg7kH2psuvDsG4NMYG1a75D89LWTXnJza48XLkwhr",
  "key24": "3XbT36McvHiAN7AeMqKkufo9oA4S2r49c7koQK3QWpouBCShjYCQemHLjFWzvogaBiRKFNMSxZX4EKEM8qo5byGX",
  "key25": "62N1mQNU5BLBnjkRXhQpFMMFaM5mcMVEqA8kUTqqJmp4i26hCX2cgLW8XBmsqWQnWfhXrs7asWNh79Ngt3WyNZBa",
  "key26": "4zZRuwXfvvnaWNe39H5G3uBTD7XjTzERpXXrhfdCQyDavZcP2VNhk6eeh6EtGDnvPBHKVQrV8VL7MU41ZK7XqMMH",
  "key27": "2MQgr2wAJZA7JT4KvryRRNkVjWaRq5JuYRQEaFucRC4PgQo74W7qjV2E8h6FfCq2e8Z3wMxx1A2Y46xvQFNDswPo",
  "key28": "Uz8Rz8YheZnnj59k4ASYt8BujdXCGchZ9SV2Y5duSMY6VcqaSDSk8RukVkufjp13YnxvwySoHuVN7DxaMQmm8FL",
  "key29": "534kios7QykqmSm9oDW7dkwjyLJyWEkt6zpQiqBNUNhrXYzHHtwceGxAaTUpgEA6EYMSGu3yCPeuLqP3MU3MftK7",
  "key30": "5gkC2BPY9KnuNZKYGV6LFSkftydHkDC6MNH3wj7nGLAL5vUVtZi3sWR6oNahFHEZqrELM4tKaRmSKediiX7FaU7V",
  "key31": "5ATfhJa1u8gvqs3pmveNAHJJXyuj81PL4dXFiTj299nQ67oDNHWbi4Mo4uc9SxaH69BqiME75EEYxTDr7iSL21Dw",
  "key32": "2r2dEL7iD9EZ1Ba8e7Mk1fx8cLwvycqPaN9PwKBEjjuGfAHviMkvtiie77GtG7DABu2DMzcb2DHbdXwzgaYWNgKv",
  "key33": "SnpZyukd5mstca67kYvRTdTLbt6CifB7kAZj4ZFUWHRx6iNnTvLD2BeVitzszURyyEz3qtWhshPg2rARhyEszBz",
  "key34": "2WcGbwj8byh69DoRmG9ypPhaQbH4VJUhz52T4Ww1iboe87cpfNe6etHw2LfpnFujGyVPBHhPR3RKvvkNeHaRgjLk",
  "key35": "3u6ZFuM1D3EhQvnmD1tnpLe7vFTrKnq7xa9v6u9K3tiLij47GHGjviPUuckgmNYCpezLynsw5CdFRTjrvznZLvZm",
  "key36": "2CzjFx6w4uCGV6gLSsgq9x2NidwhjmwgsnirtN6UbkauEQWdYCUFFGXnydFCNLdQBEbvDCUk84AYPMDyaLv5daBZ",
  "key37": "3WaMJQ6T6n9A27AyGYbanNWXy3LGBBGtJEHn8ANaf9NfrNLSyXMDokATV1ETkDx323VnzUMRDJ96WysaN72CLwvn",
  "key38": "2moSLNhBY2cGD1viNB2AMBLbfDSMtYP6nxX58N8TggVnWrc3fX59bUJkd9FkTcAQ79yYA8kZeD8eWFFkHdDatL5E",
  "key39": "2yPoN2ph9bYiS5s3t1awf57ZjMw7uVKEgHCtyNRFFYfsrNa27PnkJxrG56FawQvsZYcAQNnrH93s57DVGqE1oL1w",
  "key40": "3m6x9BTSWjaRyKqBhERUMG2e7TcYnbnWD2GSAzKmBhyDA8MoMvWEhVw86bPdHwnH6fjC2UZHo5ytvwc13wWZRYcN",
  "key41": "5AbP6MZEntCA7AcqFhU1qUDFJtCMvpwYuvZucJxJh1DzstSzjwSYwZkkKnRcCuXMPp2Zj1wzwr5Ej933eQzAafBe",
  "key42": "45FTr8vW69X4c2WK7GTmbmZ9Pybr6ZysfmCfKdcjoNTF4RnpuCqgMsxRa5B4EXoNqeuavjmNqZbwYHcav68KBkdm",
  "key43": "3xNFtg6YYXGraqwBu3SYpbVM4dnXLTPJvdxy9MAkBCDVi1nwGaDP7Z8KxZZw1jbVcPKH4r8xVUx5BYxT4Db9Ka4x"
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
