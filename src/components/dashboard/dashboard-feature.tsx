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
    "5NquSM54CVSyXNiwDynP91iTWcjdBrQgRo2pVog7sNNNgbZBgMbSNkE5sZWwYXMf7CauTiNGtBPM7MhBAmB8VVUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsZrpFzrowZBqYAoZZFLD72eDGAntT5GuZh8LKmQbGjnrKVDxiv9P9RP5Z6ZB6J7ptLtUAktPUjtofFBYRzqpwk",
  "key1": "48caG6MzT2doD15WBxAH91x1aDpn2EWcZt12QdMjF1SJ7fjp3JL8EPfbMLocZGNFc9ZRoHQcDqnT4f1jiUwnVhUV",
  "key2": "4Hf8Y83aBiBTj3SneTNVzy7Yz5p9ME6qv3R6nKHKai3oWg9Kx9dTXQfdxJYdyjJkqeXJhJwXzz7uvmwXZKeS8EzU",
  "key3": "2cwGd5tVv6DzDLZkJszU7mtrVgpbXNicPTxxNLk2wJ4VwXwEKZCsxMAasUG2e1LTNmYHuUjMB9wsMKK12H2iciRL",
  "key4": "2YKbjRid2PHb641Lyyadnn1MjxR9wuYxGf4pUYSKL88b1Ca6bSKdkYsFCBdRsLd46Xp4QEBHaivPyHDK7FBYgm58",
  "key5": "3tyXVMVumrDi196BW9i6BfiPVgRWT5Yuz2ypfutWu13UmX5kSgxRfzhqsw34XaQUihakVWwdt3jYjaBvQft6tS6w",
  "key6": "4YSYsjC6Tms2MisKVX2KcSzkjvEiTv4obJQfTJoe2XKCZ76PkbEAKY8kVz5TcyZngxDKSgj8JyHX5apMC3U62pq2",
  "key7": "3RxNUsj238hXwUVAkHRp7foynnavVk1dzjFFapZA3Yhyjr7BnUyoumj2VCAjFzXUEjJPaogLcTTVyFNTP7Mi2o4Q",
  "key8": "4VX6cc4fd9Ba7uwjZthEwf8cEbEkUXz9R3xDx55KwKhKii7PjxRxZe5eSbRHNbyaLizk9vRUwU9odGpgU2Kctn1o",
  "key9": "YGvoG94sQiZho3tXM6K3YfDGp1FfNH1sEKPx1xKttX3YBYqcAUQ1kU76NdrUotTFZJ6ALb8TdAoJko4RKZVNjHZ",
  "key10": "527oVkNARuqGKS5FrLRVoiqfR6K9JFnWFdsHn38c51DxE5K63jXzEwmoEwcrUTUCB4DguogdgzU6BWb11emZfiio",
  "key11": "4jBx5dVC4sirw6DKuAZsnEuaLxVjYUuupRjUYikGwjJ94XDYHjRJRSf9UBoJnmuSwRVGrYdSf1qLQKM8G79BxbMx",
  "key12": "ENmPMP9c2U2aDPiQ7JHg914e1YgYuo1JBq6rd3bzcorkXiqJhsi87kfiAAYhGuQ2kfRhzT4wiHthGRVa2tg51oz",
  "key13": "EtT8EesJUePYNKkDpVyYkDhpuPBvSBdUjuy8yvmrgbt7jwtUmThAY22BwQh4PcBkYPz3kKMh5USGzDy2vktAWZ9",
  "key14": "2EgSdQdNyxstUBBuDdYDe7kFTPrLdp7yGgNPR1pLVsmHASetKax4pCVAfQcWEbAsWveZ3Vb3y6BVAGUDYAd9KVk2",
  "key15": "aBwKd3DfWsNvphMNkMxu4cvzXWeH3Avv7SunS26YR7QUSGYqeCEJuFRHomVorkJGqPcYCPi8EEK7PRL22DwYzqY",
  "key16": "2bUHmnTNkAjD5b4di1VLd8JDiw3HkGaSUCsetcFCyCmQvNUmcJk4J6hLhHFFU9vXGPk9AmWX6mgjhZL4uUrFzhfc",
  "key17": "2oqHbRBkU5RuuY3E3NXd7gNWoQiBLM1WXtWN4WUkDNrMdecvfVFzAGo2QK8tHKuG5z83ZYpVZjGS4yCAa84neBtb",
  "key18": "3cyod3EGgdkmk5X2RLr8xV7fFHmWTDdXrxiRRyBSnhTzRZgH879c2GtTsjyxZVo6fBTu3npkYM8U17Ga6KUVgSjb",
  "key19": "64ppcWyCNtZUJ7ZSwGDVXv8KmCe6fsKPwCMxquBfsuNBxQvNWU2SmvTpz4odG8soAsBvK6ArTWZWWDJtXX9ZhrHV",
  "key20": "25MngyP3Ft2ULNaNo7N67pQ6iDF1agodFmn2Dg9o8Qs4WUNbZtoZ2iQLpCmLf8Xm4Y9fzNBDJDjGSE78w37dFbMw",
  "key21": "5gjVr4N5tbEt8gyVZqDsPq7S6Ygynj5PMEPwqHN89fqM5uRy7BJKWhYbq8SdnnZZE7hpEY5x5uBjF2WCvPo7WUX4",
  "key22": "3txRtfBVaxpddd6bykcPfx625vZQ6hB9apthSqczH6zBe63rFCE2ssosq4MhNZKo4FWpF5Cqk2Bcz2xfe27kTS7x",
  "key23": "3wM4EnH62Kbb6goWfu7v6zfptFij2ML5ejca8yfQ9DyUYP39UGyaQe7YzgZTkbhJRycFRK3sQnaVx3NY1bj9fd1G",
  "key24": "3LExUHig2SF9Mkr4yoheyuehbQE7mk42hh1QTcqG8w8WZgdSknX6Fqu9miT7HZAdyUoqnxnkz2QVwYHez46D9hW6",
  "key25": "4grY1Rru8vdb3gezgA1SgZeCckHT3yUnKwpiAe2k8UsEHv4xRdpgCM7GBnpDPQDy9TUehjFJXdy9Pjatvao2rXuS",
  "key26": "3nVtFQ5YE2UmATnLg1HQebpnQ7NHC8DxZpgThFCMAvRbsmkPyDxoVeSypon1tc86uiC35N54eZnAfZrS5oa3jNZf",
  "key27": "3CasFyy2kwmX79yrv9N4B3aMkyUH8jHUXpR1Npf5rMiDmxAAkuYgKSLcx3jbN8FveRoghkWrS8YAMAaz6E6nKMTQ",
  "key28": "4AA5xiu8qzcSH2HYWTdP2Jc9qSo5HLHT5MyBMqXxbQQVpGp4HiQyM2zMC4u7gsXB4n5UzE61LMeBsZGg5YxiAMzV",
  "key29": "5XqNCimot67oP2VRX6vH5dYXqKPRFXeFneaGPe4XFABhVpE2ZUyS53uDLe4URKnZLPWSeXzrJFCzEBYru4fBRAaq",
  "key30": "bZZUbAbMGKPxZSTBobtUXuYvNTsmXyWrMSHGrtk4MK3nhUg7eLgBAxXRCZS5Mds4myFPjF7qq1pi1DDJszHFrLv",
  "key31": "3P4yZyE5j9hgPSJi4LTK6LUoZbVbkv7ZVCzs7Rp9gWbRgrb36ehNtrfND2T9ao445dhfEa9wxjs4fbmH9DdaoHWZ",
  "key32": "2fTtMFGzDVZE1vDBMeHPVkVkACjVni2vthbHLgHQ8N81dYNQoh6YGyXaMJLLYK8BC9tHu1inX3wtJDH5swA3edaa",
  "key33": "5nfuZBCptu6kAtNWcjSSiQqiRp8tH5icznRorcrVuARLyiHhE5KarZsGmaEzz1SAQS6mcTYn6snED8KvRJiJCR55",
  "key34": "2kSSdPCYLC76z1VzavNhptURyjwAn1MXvnd7YLEMxK16A2Zzji4mK99wtCmW8eqNGh94VQCq7PUXgNzMSteoMP8j",
  "key35": "3YwQsywj1Bf5GPa88HyjgUf8f45E2qQEt1YQs7Pym49KiRYztUPLpFQFXEYMvs4V4dk4TU57aQq5TNHjNvipmAvu",
  "key36": "5p1X5a9B8PCqnKopYq8m5Hbt5LR8jXa3NeomvoD25kZSnD1KR8hVGpiSyU8fv9Kyrxj1xJPwAcqYAWDVqU4m9nL5",
  "key37": "38r2kR5Kpzpuv2qcXViiW2MuEqMzdX8GshKwxgbWTFWwDAFjGQNyaFJ5hVViZ4S1bz5aAcVnZofdGiq8tG12M8N3"
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
