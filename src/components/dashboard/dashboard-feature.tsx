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
    "4pMX6iFyvomGwipY6nnUoomuVFd1daVMTkJPmv9hAHyMyUWcC24nb4caKMRUeeVmykHU93MJuLu9FbHxWpXLFpaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67GoZEeCVxummxTF48nWZSHjsXomHtg9Qi3fGRhFpQsREx5u7e2i9Kke33PijTtjkP4iQYDSjXU6oGGFMNv66RzB",
  "key1": "4Ryre7p4ZZfzi8wBJib1Sk1N7ayzWQeDieuq9MiwwhTX1cCEhgiKnxeZSUPrBRSGohKVZviLtJLW6eeY2cwbparc",
  "key2": "BAV5p3Vo7ZrMpKVp72wV4itRAbKHxmna1S3yg3FRt3uS9HwmtrYx88RPt28uwe7JSrXkHWapvFWYuJ6cgdzqZ9v",
  "key3": "49166FNfZR9BuiWVqR6kBRw22gqugJc9e1cdCG58RnqbktJNxLzBg8N93TZkACpVA49HP8NpV7qZZKU97rfGEuZh",
  "key4": "NjwiwNQiRZP4JAs3iBWhojVa937ycyJgiv4JNwzCVQfxGYXGSF3iTu8rCBH49K8GmiHCnA9hhhr7e8soAbsAAUk",
  "key5": "51H9Q4tdoB7TsJYNTiY6amn7tL9WKoNmJxgcEeTAQmSq5iV4a5gsZFaBgUZwX5tRxNFLHL5UKo87DxgpkokJvYH9",
  "key6": "5X8S6K82mHuQjHRNhqHYDeeEVLYZgv5hpQoQh7WYsMNt2ZUEWupBXeuTk88cbWHWbNqQRtDKg6WCUfBUgKTie6EQ",
  "key7": "5R7BmfUBc3aGHGrNZTrXTqbBXBmZneQmkmdQLAr2FgCuYRaBAT8BnSQZABsYV1pbiDPfGrCCZwGEw8K87ZVGjKmt",
  "key8": "4SfLXv1N1ZP9RY4AaH5DACM8EoUcxk87PxpDgfVufPFwKKhAswdiXWpK9APoRUuH7NbkA2Yf3FXek3eSWBmwdHjT",
  "key9": "3nZZk2qBLHrYynviJ7a6jQKLGb9m2S1cNYzESdPm3GVdKjfSHv8kPWpkMhxEd1tebb2tcvhptSreuKXLouJYKRYm",
  "key10": "RedaCed8FdFRwFhhDcikHgEJs2RMEEKWPSMULZTMrfCJ444EkBcZb1DHxbdCr5SaSck87kn8m6VNvPeFkG7jTFT",
  "key11": "3W7JvBrqbuYj1Hvg5khB8vSqjnm5JZVtkSSSGcSyzPyeBpJ6JoQHjEaBmUqCPDQAPARE81ayZw2sy8MkhA8qj9hF",
  "key12": "gKNeT367KrDqHk3hLW8bMRpf79TbWncktxojb18mEoPVzeGpFejhDZnEeXniNAqpGSGzbJrYiYXZccSAVvdGULh",
  "key13": "2tm9UHoyVoDPaWbC8RMKJqgr2afPwnZZkiRfY5x3LPvPvcNhvpViSNwvKg522APnBfCBmNo2mpkejBJ3QsiaR6ir",
  "key14": "5aa1jV69NdEXUj5MYaMqxy5z6xWddyBGtDNkXRrF47tLeHou1fxnvziWozbJAPrsNC9BntQmaCrQhjQLPmj34wCy",
  "key15": "5GpcoNEBHCarzFqD8zmogdd5xmGSgGvg35iK11mqCCVPPGyaohdX9CWQJ4Y6TDuhpuL85NF4TfjzihcZu6dMyxqU",
  "key16": "4A9YV3WpXBcANfYH9jxeUbEB9peYWC7zZVpDq9My3vTBwSHzvu6ERJtQaa5NrascWew3WkRh8eoCvwVvwv24PArc",
  "key17": "2qsRieHbtyUBZEnYCDYFuehw8yGy5k6Ks6ondLXDVF2Pjr1QS6PNPegX7EUKQLMYQoMXLz1HDvBiFyTB3juAJ6WM",
  "key18": "2nAY4Jbh8JdAbfJZ9Mqfs7JchfneybgTNsy1ZpgsiU4fgueTLxsvQJURSG8SjUF2D1CFSU85QfKMvuXm26VhGXvU",
  "key19": "2bM8bbTr284kjCKhvYHPzRsvg4wpuoViw3cMyw5MbN6q1U9ZdtdDrKMvh9Kq72mFtg4Hp8Lh1mQnQihiUvwnMBzD",
  "key20": "3NxjatrAx7AAUNFcjv8RFkn57nr2HaVxq2XjVV4Shi9fg9Cuojq56jFF5F3yyjaR2cUAY4GuDX2dVTze7nq2er1C",
  "key21": "2magV9zBRMfk1pm54ofFeom3v3a2fUbbiTM9ZU4rMRXno7cDMjXDGoPP8NSzuaY6PJB88gEnsUYws9xNo7KgXUSw",
  "key22": "4vAWYKWi19BZX2LtSceWHeEFzKeeyJLxJYFyQkGthfwrvMX7QKwqqyCmDq8hY5oz2SAVQNVJCgXmvRne3JsPkvJV",
  "key23": "zLHc7xdjrFMe2ptqD1nFXgorqwR4X8Y8W9qxvoob478iY8nmJpT43YnCUhqL1bCrqvgRVDeq84PALuYCz5rzFHC",
  "key24": "5ZfkC6fRXzaPVL1cJBHqnFNxQahu22mEqsZ9DxfQd2kqmxY5Ftf6cnYEwa1iMvTVcoLgqSnvWBRiMRATxcpvfn6d",
  "key25": "3Hs3a14XYhrfFCVz2ozMPPCuTRUzyirkW1fAXgN3yj83bUnBdudJJcNn3mTzuJqC1pu4rCRxaA7qcd24km2wKs7C",
  "key26": "5b5VW6DRJJJp4zsD4P6kF9r5MnoEs3W9YLRRwugwcLHnkhv8dVfdpAFyrd3h8k4CA33R8SsWLWfDmXWKdFZ8ZgKD",
  "key27": "4JkDc9u7Hfu3z2v3qVf3TtjpCrTjADRdhQVQtVvArH9svHB8bjvbPM2NxcBKP6FCtMekBWqvxKezUXSSiRfu87fE",
  "key28": "459JSdCNmmttoCD23MRmL9kU3hBrLQKbbb9s3XzNfu9qBDhtGCQCJaM7aMnNHzUs7rUyiVixgWqy5Dp2P9g7WuUi",
  "key29": "61uaJ7V3jidHBavMEmtSCVMTv9rU2BPnBjufBNbCPjUdDZU3aqR36gQ3u93QEVSXLzjKwPHBNRUUu3vnqvHaW93G",
  "key30": "4MWGbpvKEE7h1zEqNQ2pRB6CDKPktd3VnXKEeT2eHxTYLVHMiU65gUxnyeF97Z5X7zji9eqnzY1wZN9G8Zrfkqv1",
  "key31": "3rj8EUChExiCnWSaiJEHwQs8ENsNpuZDWKdfRUPhJxThxqaan8FPQQE2JxSCtFt29x3LHAQomCpcdKBDsaBeDvPa",
  "key32": "52JftYJ5qGFbzVPeADjS7wP5XmknkAfaxiM3XLt8Pkv6TxCrqUQmiqsdfw3ED28GxPFk8UgM2RSSciKyyH2SNVVS",
  "key33": "2kgVum6mgCGNrjErK72nX9UHsB2y6f1n4kiTGwYjgf5rY2HFaZHeVFxHLh7LtbmuWBpP8WvvJHy7Q6a3ea8PywwX",
  "key34": "262cPFBqEFBbpt41pmRYysa7q4TJoKVGVYUMnPHreB1Q4nzNz9bPf9kqh5V7kqtecV96bYc4BnbSwfMef6VpuV2w",
  "key35": "4r47acAYm7HwpbW9KppkJoTAsa6rKGaY9HxVdYCAGh3BbtCrgu2k8CGpwBJpNVo9CbyAMYieXDa28tQ832QHpJ3X",
  "key36": "3ywctXMtbt336Q1ejv6U9wDgjH6QVPkywq4YrguFhgkdpcD2JmGtX75DtszV1YyYi6MrzqRKo1roy7jtSUKgp2UW",
  "key37": "5y4QjFdNcoeiT2mGyb791PHBFNwCmzcu3AAGgYUm5LhwBjSW64wMQjLverd4fimsZaTmuNsa114e1EVqDQEfZg81",
  "key38": "WXbSZDvzfEGvnpShnuRZ3UZALTKnbWqhfmPQQj5TLJaQPT8aer3SQTdk6rtAP1DeL4o4oaw15gw6yvwqS3KYmvb",
  "key39": "3yET7fA39UNfknaSdzrJjbabECoierznpHTRZgQsXk8eb5zVTj2xwMJXFgMq3A2HkK4nXmVMeDoa5MuTRaSxSs1E",
  "key40": "5xoYzn1s3RxatwJ9TC1xRnjkhYPP6uCuyH6ZX5pdrarJBsUBhq6ZZft4gg858pEwi5pnTwsR47Xico6vd1e3iGg7",
  "key41": "43F5tE1QfnJk8aAdu6ihCEZbFoAvBq4CKfp1KwgAbKmpACq1E6hWS1A8ag4PPCAWYre7JJTCbiMuWUXfAWRV1K22",
  "key42": "5oX8K17W6uh4vSTZ8FioqCXyvaQyN5NG3XSV3qPdq8PZNTBmWpPHNo3gp6ToNkuLUsbFeMftzz6nRzCG3P7TgyX2",
  "key43": "5eZtRtHNebFVPBMeksE8Lhmh9sb8gKZEqJcaLUiBWDMmD9vVDevnFKMBe7inM7XL2dzocfXoG6pGsteZSJE2aEGb",
  "key44": "3yHxeSWLdnskTyjfW7Lo39ZLJHcbNUPPrzdWCyHrKis8ndH7gJgS7jKVPGHuKw8Ljkj5FEj5bs8TEYkH81ndsTEw",
  "key45": "4yJRT4FDJFhwStC8pS6nThCzuWgppwqXeh93H2KnTvoNxReiMz7gwSYLdA22VmhMQnJFHj5FWz1sUjMNBAgPHpdd",
  "key46": "34twDhknAsz15s8cnP9F6LNBdCTsqyfyFiJbF4te3e2gJjdWiMX2e72U91iGKB7dA8TB7jdaTUMP9gTYoyGD2D9K",
  "key47": "23sSonLbzdRMGuQo8YaKxkFK3Exhmx8AazJ1TdmubSffAw8H9PeJkdrJ7xzhTbD1yqFt1To5Rif6HHxvsYtRcAxM",
  "key48": "3DEog6uvJCGxV6hGKY1qayJFWXuC2pc3UkjX9cmPZeq2y1v4bzaTBkoaqq78C8ec6s6cqbEkghwHcfHgNPE1AqLb",
  "key49": "356nPDmyYLv6wjJtd5SPRAK4uF6TXTCrCjS93zquPM13hRxkAAeHE9yWtpCwTswPvoCpez4ALJ2RWG1Auu7yWBe9"
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
