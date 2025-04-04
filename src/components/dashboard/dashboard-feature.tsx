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
    "2RJkJbdH41GpkgjNtPz7mqxuHkC6xz2nAinoT5dt3rKehr44XdSqFfF5aVAQMKsAFg7i6bDZeCLgnQ26gGTn8qfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637NxM3zBPpSJdufGkgcYh6r2aupEhAJ9N52PdL5fsfYC1xSs82hpRovVebAtFuCRqxwivAJNCTRS7TLDfJeFD2F",
  "key1": "2iPFw9zEWLWjnGx7XgqpKHS6JNa9dznYiXybGxk97VnEydMTHGpYhfkgAAV5qnRuj4FuzxVbBAsLQfkUN4bTAa7E",
  "key2": "bMCAdsn9wkShdeNwWy7vpSskNnrPMBNeGzQqkehUHxvK89CpUxGGGH8YaHwowEa62RmRCorLdqbeS6d8DSyNdM6",
  "key3": "5YXgHE8gKn7Gfk8X836MTsnamA98oGwM2v9iSsX5uBcZzUbTnciFH4uE21kmS4fCqQGQcMugykwNKD7dCQpFHcGG",
  "key4": "3gBk9fmkJCA7gsYMjVrVRUNksZEhDmwo7upnPmNYHb9ivd9Z9b5GTKFD3itdKosM5fwAicAmPAmLrVavDnCTNWzN",
  "key5": "2RS3k8V3qJPn5vb9ZSx7AfcptkTEYmsKVHGoyPvVoRBjm2AHuEs9hMx5kV1txba34Gdbb8xvHsoKbjq8LppSBSCr",
  "key6": "3W48nhoqcqmmz9KRLBzMHrN1zCFbWRYaUpu1ZkdHfjYPmkXM4U3pDA5MYaWDAtf1QCxqxVvMeNQKXmYUtBy7whkS",
  "key7": "o6EuvCW6P9kcrBV4ormMMoLasa4XAYi21aPXx5Lc5c1skAbVs7Qim39pj3ML8HFxPHmEoEUz7wHSAffCuGc2vgF",
  "key8": "5z1vdnZthMxUxWxWD8Y6Kfgwp599pQ4C4LbE7gyWKVrz7qDNoYfCfnPhpMsLYLgkkX6pmjujPG8p7avNiFqvH2Xm",
  "key9": "Fkz5jMsDU5rFbnZkAhM1GHciZ4hpb9x5iCXeCefZz2i4kvnEu2N1xCogc1MwJJ8jWHpYRA6N3hLizkiy69NKDY4",
  "key10": "4VGessXpZra7Wux1he1UoJBmJmWZwDUSprmubB8zJHkQmLyGJk4xYTgdjtqUienZrDxN8HN2zK5EZFbWArk213MK",
  "key11": "2dvUJbjGQsteaZytaWKvXCiTzEQ1eYCkfXhySAcCDdUbj166iPK7qQiSaHBEkMVjUL31usZMtgyzWAUGjgebEark",
  "key12": "3MQzEFUezbDNicHcSVbQAtApZNHD2cTdiZL8iLLWhsZS6SjaJRJbjgS4ZLfH4H3qSdKDJ5hN3upiBjnhDW1iZ182",
  "key13": "2uQApR23Gw2MFqQNYvQfs9yjx2tMFUEP79ewa2xBEHoWHQw95neH1w4DKwMQZXeDA3f4HRkBUeXngZBHX93ctTCt",
  "key14": "311GzD7ghBQ3ya8dXqytZsBinvUP6nZthktBoS1CXT7xbqMimoChzEvfxp3fHjDec6FmqWVA12MStKpEjUZVd78g",
  "key15": "5ogzM5fe7ghdNooAGAR2Kp17z6KnwS2WrXLtkCy7XHf4DETZQp98mdHtQTmyBQRYHUwSf3RvmdwUzRF5QwrkFWRR",
  "key16": "4eNSeg6iBa12mnubdq98BeorTFckSUwu2nhPbAbWTwWdorS4E9aRrcyLrtYD8qTBTuL3AK3Ry8N6sUeekahkg9Hd",
  "key17": "2yqVBeNyZR21NKkTkm4AgHoMyyp1rceMyK86sbS85yDeg7rnJmvpznozLZztmWkMUwctUMBWfqUz4QmWfXU4mgnM",
  "key18": "C72DAoHPjycy1yFkZR94W9mMAeZsn4CcQanckpkGYxf7p1WeYmbiNzpAUzBDS4QCXihey9ipYHtvBHACu7pZGZY",
  "key19": "aFuRYmMNAmW9LC9rjxbws2J9H28bK8o5CGvD4RUhp1K2ZKZ28kgYPxL8NHqnsU5FWXAd1aLt5wg2u7a65sUih1R",
  "key20": "yaNscFRTpjmbgigvJoMJ16Jn4brwudiBY497HtvEdbib4e1MQnxStzXQgrSej6mcoHMUuNMYyYwBto6n4yQN3uN",
  "key21": "4k86CujgnZekNUn1FaXfFgBv2dd3wqxpNmWrSe4nerXAGLjbQA7TcfwK3QFnvaBMeSqAKMLne2w98yV1qDvpM2DY",
  "key22": "44PjK6v6dXSURBwvpHVYQrvYWUSwDHAn2grxsWAfp9Q1rNfBTMidVbEsocMv7iECrrj7zHzV6aeNqfnB2FkisuP4",
  "key23": "2UZNfYZ9khNXNvUkbUyeZPTpZ57Mt7rxzhrRAz1w2RqNTFve8c9mTyAfyNv9ciXqJFo39PS7soZZKVZojcNdVNwe",
  "key24": "59VJRJ9MKiVwoEkhedobe1C6VcJeqSRi4enp7Qnz2Xfujz3UaAL7ydrNGA9ELcQhooZ19XVvHbDkQEKP39jCsdnQ",
  "key25": "4qkYVKeEYJ5wLfp7jmJ8samx97gpXMBmLCRtGbsso1FjWjxpe2aa75r1DM4vVpYCt2zxAhwSu2SYFn5rAkjotYEM",
  "key26": "2yfEK3nWAzguBmskAjH3ze1cLUc8FSCofjQCMY5udZL1NjLEX53xgRBGnWnULQik3hBquUshgkx18vvvpdHrSeLe",
  "key27": "4FU6Fw8zC5GdBDHgzCqYKKvQfLL28FfS1Ur62uq7WiA97ij6snV4qQMy8QLZWbb8korymCKDjQMvbk1ynwfRY1Qk",
  "key28": "27p7Tfg8E58HCmybd8PicZFPbSR741sCiWpCgRbofPfbVuYHyYBiBzqP76iw4ERQNpSuxAUx4EpM8ZtSe8S26ga8",
  "key29": "2v1UAueUzcJLQYWekgMWg49RmQbGk58Fb7E2N3f6JuT47Zb71DtUdtMV6Lm2XPbVwShbYA8eTXE1Du4Sfp8SXFyf",
  "key30": "4Epg6zRUnEfFUsmNg6zTYWm5aBDNrRAgFgydktALuAgfWt5mkWnV5U2HJaxNcRH63Fu7AqQjSbJq2Hyt9hFRiHXk",
  "key31": "4uCsw41TMW1JEV68PM1ksN9X8mq3o6MHEij4Sm5GJWGXUyQLvEB1r2odRHMB7R4EpS77ZURD8cqPbF1YwoY2Adrn",
  "key32": "2FyjeaE75UWoJi7GwRgiYGyALfNTPcW8VqB16FGXv7uQmAwLP4isr6aoqKSLHEJnYmL7ZeXjrkYDJGftGmfKAQh4",
  "key33": "3JU26J1fvmxpep62JXVATXzLwAA8sYv9n8wc7qfgufjnRnF2rAqNAmxR2ofW9aG6FcwQxBBD3LXTA53c49euqgz7",
  "key34": "25LwF7CBtyvDqXfHxPZoMQxpkEkNmz8dDZdvv8HzWvopqD2YjTeppqGHWEpsEmGaAymaPsA2mpsagGTajV4622dQ",
  "key35": "3g64hCrP8MUFrDiku64pmgnmn4BaZTDoEMt78s9W4qArYY23r7i9umxRcY2MvpACVonqBn25Bquhw7gb8VXmodEU",
  "key36": "4AXcZ9bfaU5g6bfYEh9oQG6cCUK9kUJj7K2fTuCUH9RAjSK9jr17zu4zEkxiDQ4CsmybXnUjMLSYDs6BeefCTgCr",
  "key37": "3CXz6DbrcZQJ6Tw9V5suv8mdLhf1Jegh27jwRHBPHp2Fo4rHvTPBTBtnZ9EaxnhWJksgE7G9ur2J8FjzP8mk4YpL",
  "key38": "3aYSJfks6CQ6nX3L9XLjD9da9ujGshY4NtdjRGmmf2yPx5aNwScmbQGxWhxR7UUj2RUtC6PB7LRQu9tXbj3hRnMS",
  "key39": "P72HaSiGFBY3Wjc8W96pWjjdU9Y8Ji9eYy15kMY5LX1C7iYF21EAbrZD5W72MW9ujAhEZp6iJyY5SuaukrEqUk8",
  "key40": "1YKb9JRJXKmkEeCYodBx4KhZ1VzuY8cQMKgcLni8hnc1xVK4oEC3PQuRKyhdgyqRxcYZmvYJSeBtWkCp5wKaxxa",
  "key41": "tocsJrHQ9cT4uwYMSdrDSEEFNYnjh4zZPHB74nB7hdkz3Pqgikn3TQgr11zfd8rGcZ1LakF1ReN4EN4q2CWecZy",
  "key42": "fkBiARoQr3amijbHky8LrmXdmj6W6QB242Scrrf2zfPASijLaunUSQsLqEZnUMzNM9bz6cwjLfKq97Xoeciiwyc",
  "key43": "jC87H3MxXqn2nPk95Ceq6QdARJsumyi6rDb291zHBLdPaYLApxCMLnUrYpkhxcGWK1mXUDp5QjzPVthdgqeCUGw",
  "key44": "sABtCQLqJGVkCsrWzK2yNckD5AbBBE1Mn6xZruwLetfZ6SRatBRWTR6Wn41fEh72LHuki1kzeS4KdpanknL8NGm",
  "key45": "552BPVu4WyxafcJXTBoWgCWCjqoZ55STkbW5tYypuf6m5MMgspi6ycoGwPsUwZx97MvUij6noEfi7U9tbCHrXFmX",
  "key46": "KqKu6oARLXR1hMNviitcky5PSDPTeFBTW6rodqRi5eTF4RVTaMoHDPn8TSNoDsMcVbPGoPBkAfsCW5YbjVUHkVU"
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
