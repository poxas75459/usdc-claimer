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
    "38ckHhubKN96afu29hXYyFNtudZZDW4PiFPmgGruxk7YYixT3Y7AzxVM4dydknNbPgBnkNmAqyU9YwJPw5j4iMXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hg1TwdS7c3fJCo5o4g5N8YbSMyr4Pqou3Htva9QaK814VfEQAvVSqkLXpUfpTVtusDWrodNxA4RvzyGgFrusR3",
  "key1": "5A771mQ5g63ciCGmtnt2TfzTFzVKWwdRrmd5QVQemHjL8AzBhREmkg2SJPkht8rEsByJUfLG8Jw6zUQ7t66JUy9K",
  "key2": "4E4byKjFHSQLTm9Z5nhw7gMFniYJyxk5mAc7QLr51BR2i5n1yNyhmvWMSaSUZhoNAw21EtruZUjU6CZTTcB4k1WL",
  "key3": "5Ga533KXe5tBesA1NrAK9rJ4Ui6sASZPMfdFJfFTSZvdJ8Ld1W9qFQAkaKD5vg15V3U9FriaYZ5QkeECwqM3Hf4Q",
  "key4": "khxyndYHicJ7A3e4YCYtGJtgY3dai9eMwAmq1TndYhTcHHH8f1iGr1zG6t933NzwBk3FTN3aWqpwbaTTGhAKPDX",
  "key5": "2FGvVrBgsDNnKgh36grB95nuWinNbZH8j5CWmUJmfX6sgxMpbnepagbm1sfUPxbovJKDNukSXLaCXSS8JThHRW1R",
  "key6": "UDuSLwJNPBrAurStcCiW1n7ZdMUiELQHDpS38FdKvzxZqYQhweF6bDRXCbDPTY7xC73K3WFvK6nUe2Hzir8rvhr",
  "key7": "N856Y7QEz9fVAA32HzeqDPHqacJXkELV1bCY41HrQSHpakX7Kh4Me2Qo2GLo3x4SishP91gs1xtnfpRvU1jftS9",
  "key8": "tGBfS7XCj4drZ3QtmBTXDsdYHjLi572zXeoJsnHN51DUeow7piu75rqfqu8DmSjSCM9M1PgjNAJkbYNcDmP6BeE",
  "key9": "BDLgd5JFSicu6WoQeLuEcg7EeJEPUpKPw1JSrC7XqpZJCWbTnaAdhx6ZL93MnYZtAnmCwhd7hhkTagXcmyiom35",
  "key10": "483KoEdZ7REZzwwDYvXUrybZUXKt2ih5uByJ4CX7Atgg3QFGzx7zxPpomBrou3vZyvuE7mG2VCEBWD5uLJhC7jkE",
  "key11": "4cbWEusETMEFsWEyhHUowAGhra7Jg7u6aHfRJ5MkAvrSgFqS5ixUbS3LHXyi5hyH6owJANkkVTujqDvaYT7EvXjc",
  "key12": "5HpMjGdQsKYgLcZGKTnngM2AJcEfcVVEQE2ogez6Act9rQipn1qNtCADPdcDkijnKJ3H9kYs41tQ3BhKVj8VBQpD",
  "key13": "2Qq8qqYb2xENZqc2WEYy1wx4VTh7UpTHXJ1E8z6Vsc3psjPYngsaiKWpwcijL27QFmQDBWpUeNaeceieAdsEJHwj",
  "key14": "3PYaZzu7ck462jdDAC8ymrzygPHMUKJtuJ7Z5oMTHKLxWMzXwR9S9oYjvKJ76qXfXLuzofcMAhbGUSFJ1TbGKGtg",
  "key15": "4ktrqjBGQEBVZiYWwHdxEPpSnij8tTHcYjMHXGYQBUy1NboQ6WDKD1zHggzcoMtQUPy7ckTMpjZNUkdM3GArd7tK",
  "key16": "2aqPvNkCKu2ecgsVxPNmoR8RsYSZRr6d7buNQNP5Bku5Q4G2eSVK8WmTkLrwmgVmp8dEag2wAuUAKv6GguUYTQ1e",
  "key17": "3iZu2B6ekWMMqoZn1St7j5PGHR14dACZCCKQSYnSiF3dcaxpqbCUSGV6NQwJ26TAug8mdY1Yn4H9Cti4fhnXbDp2",
  "key18": "44Xig6nrXe71PCGJjPd6NVN1zc7wYYvjczfVkYxgYbjrCPfCb9ee76ySjFNyfJJaxFFWrecXGTeDKwoKzvM3xWVc",
  "key19": "4T4En5UPfYhDk9iArJAhKUjuj36Pnjx3WcqbgC8NkDHsW2v9VAiit1VV1CqhMiBWQr1VNmBKQ6GsEQZG6ekUk5ny",
  "key20": "3NsXn3Pjunipyatdbi4X8bDegiKT7uqmKnXskbN5gnCTYL6QbpsnqVcN1BXSjNaYvKBVsrSssYgT6vdPXeHqNVPC",
  "key21": "Bu8StZ4gVByUKSmceMNCjkHyVgmxYxmP5nP4NXCrohdn6D8yZmGct1SnaqzXHyDEJWe8XFwCbKHpvuDBr16Qpnh",
  "key22": "3h6oEqGnSYaU8fiv7ay72pLfUhfPfZsmqUACpURJbabVuBRo2AWYeiPX5MHE6vLx3xTcGr2TExTxVHqSZVXB57AA",
  "key23": "3BqPDV7TGc6VkViSpa3AYmSSeQj2QTGSHkgBLekaY1bjt7zCyoZ4gMJZ79d27c9FzaqRQCsPWaYLhe6kp6SJCBch",
  "key24": "gZQJrcCuyV4GwTZVanJcKYSUwUqSPApu4sk3uk8CbHAnP13MwGNRVChwwMN1VUoDWgP4jFRkBEGKnNWmjy44Yts",
  "key25": "55ZXHTTWvynUmzVJmXCBJWmk5PszH7PdsyhyiADvk3GyDy7tDUuNKa8cmW4ca2gQ3kQBvgjZDSBtPKGw6r1ryRv",
  "key26": "HxenF8M3GN6sDc2Pxi9pRTPbLDKUQFMGPz5u7gAg8RJSsKf34tYVaAeKtXsqPg5JCDjnC8LNnLZtZX6SsjVUhha",
  "key27": "5UwQ5fv8xzzzD8CgDPhhXem2QP7PmWFDvaeQSnw9h6gc4cGi9hCgmy2h1wEooGJTSpBoJjUeUUyXEMQcGEokS2cL",
  "key28": "ghpAj9WHNhB3ctVk7AoYb6y2qyNMKgfysWVMbgjJ5uy1SM8wNAYHibjx5ddztBqG5c4A1F1gM6BzyJiuspmCvMm",
  "key29": "4cW86BxWuGLy73Uz9rH826FC1ePggfU7LZ9GNsJjFnMSmTzAXX1FwKVBXetsYX59REiKcUsADaVJdLbn95epqUWQ",
  "key30": "5HByTekE2jc1RHsTjTWKxoCoqz73oCZfuGRZhSoWBdAJ1x6H9Q3TUtsqSQS8t3ycEmsQf1ay664YeieZG2VhtLj7",
  "key31": "4eqJK2Abm5vQHoN4awLyC2xdLqCB2Ji9BxVAHapwcDf2fzChNk4ebDH74WZn1QJ9dsMzEhbXue7c7M2mE3KBAp5U",
  "key32": "nVAmTNxzBk3zYaph94t4q73jC3amXxvkWqPzfRncYRkr9FWGx1fbdFk7YuTAqAt9eEubdWPdNp5tsBTd3Z9wKtZ",
  "key33": "5T8vtUBRof9jirVt2dQiCeMExCGnTXv9hErjBVdTsX3e1Lh9abpHfgrj8N3gT91X2auADrWQdoCZXoFW8AGwphMo",
  "key34": "fHP6QT99RvjMjGYRuBeeyeSCouGHW6q66xhxkT7zVyZ4twaUeRtJvihgfmem228oAKNNbXSJbYX3ye9oSPTho3u",
  "key35": "2Q1oY2LZmz9KKUYYEFyi1yGXPpzxpD74BoTxsK21GKwtwBN61ZqypjuE2wE3i7yxBKM8JRvVyhcVfPkdRwdXLM3t",
  "key36": "324Y8ENy2EhaDCDFA3p7YQeM4iRJzHrji9dWy5W1wZovhFpLn5bb84oMMQrcpiCm82YyppzDiGikiGwNzftHZZo9",
  "key37": "4c8ULeXGR1xqU4jYMrS5MVEjw5hspSXWAe6b4HDiK7ecMdmxSDT4imJ1SLkaJUuFLv8xPmRJ6juGBiKvhbiKgMzm",
  "key38": "36CHFWRGeaZyGmoRGX9qcFHqDXFDCsK7SfN28mcbHTBbdub31UZskXcZddvuyhP1Cs9oBz48y936sQSHtEgJdNXk",
  "key39": "4cffvDrTDM9W8ZuGyji7YFLoai1mchLY3Qob2fKqBcv5cCTyVLpBi8MR8VNjcLmsEVM6Sfr2o243vZNCzFY9Ef6B",
  "key40": "56NZ7R8eSX4SU4wPWj43D74BdkyyVM2HZG7yRUm4czSRekZXdchUcpLZfRZa4p6tShoCFjvoBd2GnXMT6uJGnU6v",
  "key41": "4afyW9VCz3J64cG84YGThMmZ9wbjDwiesceqi3y48M9t9F7QvMhm4ev3DwEyqNsxqbf3LkthDuJccmEDVGocDktw",
  "key42": "bP7cUH3pS4nTfH4G7awk7boGxTFK7YE1qF322rMUvvrebipArdzivX9WmBT2pTK7UCpRTa5kpr3qntR9SUW1k5n",
  "key43": "xkE2ZRkvjjNPkCbdJP4VHLLVcQdPXWALNZoFnCRzpJJAtj37xtXUnjQcosjGTKtppBnNN8sYpbHpUjbd7UHuQEi",
  "key44": "3udEsJSFC68habDkCUaG5HamrtNZ5aLAgjA5Pgyw57hYh3ZKphvmppX1nP4VTBw4PmRaUb9d6C2a4k5M9hiEQgQQ",
  "key45": "4mWHG5v4mMtd8bJNemT4Kg3vPJjARf8KBxN4DoPWv9i3dNgir4e6jaBJiw534DY2XM16vpwLM2iGvac4ULfbdAsS",
  "key46": "2oY1hMsAeaZu2mQj2GJiptcYSmGTePvEoort4udwPAtiTDouAQxct89eCiJfguBvYaCgM97gR6St26pEDr43WANg",
  "key47": "2rc9uxrEbTQ87GtnW58ejACpK1EEoH59C3dtmABiJWqGDqPwbBiyL9WWJBMGWrYYRupNEaoKfu9mNZBymMrWxkCg",
  "key48": "3sMKe3FNnuQGqXD1JFE8j1Zw2zuF3Hhz4yxdDLr5y3jKW1uxsn7J8q8HCK7Mj1QTj3ao151CVvL9hNJSDVjsU1nj"
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
