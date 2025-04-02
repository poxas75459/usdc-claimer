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
    "F2489J3R284NmphkvrHpToqE3jcHamqJWy7fd1YZ8v3cMHo7W1ih2494d7mEbS9dAhJVStaZYuimtfvfRCXpqzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCsToYBv1ic1D8V8YsWswE4Vtxrc2hd9LgDTMiZM63ezRyzATU8B2A8cjoDFFiJ73A7LZarBmNpQjuHnKjJcBfW",
  "key1": "Q7hwBjtbsheoa7HnTYHnETRwWYyN1Zub4NhikqNjmXGQhfpphsC3nzq44N9VWDrA8NMK2aSGwDcPq4Wjo9aWWK2",
  "key2": "4ZHLU3nPjqqQA7mJ2p8XD7zbuZKF9VggtTeY692q8Vz7GjvDq9DsneA1B23yGzZNRnKJ32JKUQQnxGyGK6NQnfCr",
  "key3": "2ZGNdZMb7nPjGXLi9r3Hr3Tm5shoaoc15iujrA9NWrLpUmFyuvcxTg3NmEPLYy3LpdiBjeQube3D5LK85bxCkh9H",
  "key4": "5v2ChV2eGU9z1iPTzUpUbiJhcQdvxemeGAPfWbNAHcVMV5ZqWZzVtSa7y7oGYSnfQNk2t1GLfpoTqKQyNv6U47SL",
  "key5": "39KPVmz3YEJ6UzubKNC9kdqKMVpXtSLqrofZywLwmViUoEGQCbZJXxYSjBjE6aW6CrCBP7c379CzAgqNsYBNFY1N",
  "key6": "5R81y9oZH4SZguLq66YGGGB2NT3ELmXXb9xwpaMHceWDJFs59JoAp14pAurHsAVv3xjBvfvvM9mZp51pdv1TG9NU",
  "key7": "5Zxn6cnbSh2qHLtvpUiQwpHQwwfG7uEsAwDduKfpAKCbSpkAW1BjBz7z9qA6U4VDBhwZxwUPtjUayrxoCb2jH3Xw",
  "key8": "34qJ2b3RyPyMvQYrKFBN7uqa8PqbFnjbCSGQ5PuSgTn2bD9KxuY2fDZdrKJCcMsnSDzF8YJqjbcLSmzBKeLsfdup",
  "key9": "5bAt5QC8p5A8ypWpTCnBv4eBXK28MzbzdZFpjQCpBbo9QenHoJ6NaNaAQYv76iYYHbfP878WUzugqZVrVS1UjHHX",
  "key10": "28S3m7YrtB1DCqwBkpSGjVxd5XuunejTJZzbYnyV2zf2us2QP22C5Tr86GcQhJ2uTrXEwZ2aj3WbuDvNcmUKeNfo",
  "key11": "6PWx3CLxzvskFym3keKWfg34ChNeDYhhkKzdzzaJEH2TVGTvcsahk7eHjNqQ5s5ZgpksDjcN9nMJhShUCsng6Hv",
  "key12": "3CcTDon6Z6bsv7rv6vobii51xweYiMgWuynWcUhhFiRckGGV7PeT5kQXHZGWBYrWFMPfhhvCrAiyfNeU1fTpMg1c",
  "key13": "3hmMTAazc68mUBEgtCAwrafHW8YCJeCL3F6LCBgwXV2pWAwZMkddGPGM9QbYScgwvYNmgZR4QdGhEo2p28YVzey4",
  "key14": "5KC7TfLc8yD1wVb3ksJr2NqajPcW7vXdZidGpj3WHQnZUp6YCKxUeKX82iijTYK3Ci3Yrg7VqEDXiqYxwXftMMhY",
  "key15": "3oU2pfQ5zerV3my1vhaT6KLn9xHyR96gFTXH2TF12m3RpA33S62GGk2MQFBqEGatQVWW5fTPUk5QuWhWTev2T4GB",
  "key16": "3ksQtNQoGAREXHL1HbWp58AB6si2rDee46EFziou99kUU7YJxcZ2UjZU7WY3utFAZwFTQf5X4k2zZviMeN8m5bwG",
  "key17": "5SQGuUzEMnpnJQCNy7VCkZeXPAdzUJEsoqJhKTwq4bEcmhdBxtmpmQrr5X3M9ppo62zFEkRyPSbT8Wt82vGXmPDC",
  "key18": "63Dt32mhyES4vEXwx94PKBJTASfwLfNkny6wV7R6DriciNXX7pdr1QqNkzrU8vE9CTLTDT9R11ZiHddLKN5ZG7rL",
  "key19": "4Wi6inLiFmsjJcSQzTRimDS6ZuVEXyxfdV7x7Vu4L9ZNHsVBhbmsyZn7UVKiuDQnSaW2ANJnDF4oNCcuzErVQqMJ",
  "key20": "5X9VV6yJFrEVppGmpAguZ2PtnJyF3R3PBLj59GYreXXG9GRCCXc5PuHjyY6PQB3Lsj8Azh3Ws4jQaHV8Z54hHps5",
  "key21": "3W9kZcwWpXBY7KWQTxvPufqpw3aA2nK82AsPmbUqeSKay9JwGr2QwRmjdQcurp7NCxsySQCa4Bd2s7Tq7wH9UJQu",
  "key22": "4xPpxcK854zZY9Rgt7ojTf4v9B9wXRAJ5ovUe84XZpYDcGk8KLuD3x9g7QTKAHuCqPkXRGrpQmTV4YNuKxDSngg6",
  "key23": "qgS6dpvPNXyifYjkpLRPvZdvrJasY5jtgTKJUpwnwWQ2pUcctdxH3oMudJEdzwSEYuZpdLz9PpoXyUS9oaixb4a",
  "key24": "UPVzpQryBYFBfM45uA2Lhjg1SBfT3EptpB5AYxASNpUJkS41XRsbTtUMyxv7mPEKnY73FNmKRe3xnEAdB8J7CRT",
  "key25": "uWku4H6siEw9eTzjxVc1X9GqdFsQyyLDLSRLQh37X3i7ndFMLewfPFp5XxDtN498SPv7btBrz36B1BbgT7C8yLe",
  "key26": "4qfCiUbCSt74nqdyQfBQCNQgy8mDYbe8Axxe2jsjh7c4Sjs7acs8vkDF18vSj4evn5Tey1wrDJVFABD1bievDc7y",
  "key27": "21ohpqzYnQNPGwsx8yEQYxv8J9JNGBLkXCejLYQ5wCP8fQD2yCwQ7PPHYU7z3CXDDWKkkXS487u5NJ6VSACKPmZo",
  "key28": "63azDJJj3sMeUFy3wxCW2bKYizSUsb9nbDfkP7jZ3m4i84fbFJrSyLNLayq7eTebCZxXbaQLyWeHxhE73qo7i9r6",
  "key29": "2eRadHRADvYAUZG2LV19ku8NFuaeZ7oQLwud5AouY2WfaWRrHg4NjZXvGps9HGbbJjDqfte3ogYUJFZ2t3n9jb6S",
  "key30": "2HwVHRywbvHSkfLAenEZw4yBnrvRUhJsQUQhCNmhFDWSj97f2NBHvJaphWb2njQk1MD8C9bQhVnGgvKLfUNgEJjw",
  "key31": "3226x2fk8akZvd8PyFhGZBR55XJJuAi89LWsyvHfProTFFBguGDSuDBCB46887bkhwXduB94CAfEiHVZVe1DdZc8",
  "key32": "2TddV7HQypHvban6mmEBMzb29uJRpHdCrRrLa2hJEMpkpWYgrQXJbsh6GH9UfDmeFrWXUn3KyxH5pPEtXUgf7hf",
  "key33": "5d5WjLXsmyY4Px68A4gzwaYabyRHf38vvpfn8ymokU3XTFnJUVnRtJH4jZgsxZ1cEEpn2hcTEaF5hFS4SZ15eAJ2",
  "key34": "4d5VmWaik4SQ9Wpn9t2JGMrt5yNBNj5cmSJ6AYC1Rhvz8PXTkQDcVmkwFLjLm59VaPT5yyHTorZemwp6bAhzNJmn",
  "key35": "2NGJKF5D2EtfP4ZgTS1wy1aaXxZY7go4W8NqSAG9jCpW9reyVxzw2Sh7kdsFk4XUwcWtSTUrc2j49Ro4RjoXud18",
  "key36": "3c4ZgHYQ2QLQZdqq2YzLz97Fi5CdoWeUPnQ4E1h3sRJmuq7Yq9GbP7kXDPBi5sVd5n5iKJjaexA5ayvtJiHPRyFr",
  "key37": "3dfPuV2T8sxdBhZXzFdDtSWTiZT5dXBZ3pvYmUQWtru8c1AFowXDevs4JEAk26rPDKB3SpNHF5RGoKeyyJckfYyW",
  "key38": "675MzXfGuWMBkGC72SZ2cM7kqJsgyGnVsPYJ8gZfGApXbbELgbMixGHsNtP2whmSxHG28mgXMWFqB3eh1xnSpkQV",
  "key39": "2cRYyPrShXV3MnC7NGSsAnzkeBxFJC1iiivpwPRjfKjHArLBMvJdC8mUwKoS8SEKaVLfw1EEtNaaLbH2k3duQq1e",
  "key40": "3ZnqRCUiA5bWiwVXGwmXYW4vFShG63xbHq7AJPY6QNNnNFr6M4q9CZUSsWHqtuwCEHdjytKpJG37DezT71tYd3cx",
  "key41": "625oFdYKjCQmxjQSAhT5Cp6DrmxZsNKXTbGEv6gWD9SuRGd3QK7vyS5JxTyHP9p8EAjGpX9dqkyvwUBVvn17F5Qd",
  "key42": "z2stua8q783KTxCxhfvKinpKWdiQ4xPN8hUW6obWA9GgHCgF64XBfKvFp1FzdCHoi4PX36i8UrK4kHGr2BvGZDS",
  "key43": "4JmMbKWcQgZD5qmCE61jFmgQy8DD4dttJtSyGBZhgRyk8vm3J4VbAXKMQcdp3rebphKnXXVFGHjpC3axJykL3gQC",
  "key44": "3J5waQ53eo3EWQBb3gjME5ShQ5ju1wic5EthfEDmRHXLhRzExi1fb6enyfm5iFd9amBP7ZgKs52x5oaBYeGgruy5",
  "key45": "EWqEfxuPgbK969Ni7CVPme5PQw25JqmDNZaVmK7oDqEq9KNrcJUajNfRUxSPhPH9fZzgj6fRfasvt5HB4et3Hx5",
  "key46": "5iYU7mtWPc2ru6srYv6BNmePXD81LR8hbhW36ApMV6qhJ3fxbCCuLvbgQvTEF62HND5AU81RYUQs8Yk2oVm6rvUi",
  "key47": "3SRNU87VPVqgS84QMXccbve9gPZZ5mPkqL4SniNV2xtj5fLo7SVAQUeCh7i9tXap6qqHcp5SwrdZmmTsPaYGedoh",
  "key48": "4g5hkmYSGu6dHVcmQsiAsAUGkba7CubUxu9adQSV5EXvXF7ByFqcuALQYFQtAFNr8EQekccZVB385qYMeiAbMXRy"
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
