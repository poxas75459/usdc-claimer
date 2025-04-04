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
    "2Ew6sviWstdk2yC2DaQ2VgfMQvin9ETLqCGztQWnpNq34tEhATvCfW6LH44QXuzgX8WWMD8tTUzfxfZFYdhfziL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efgkXC8PWahu2nkHaBMQjDFD25znbEojKnH7Fw7uX9vmgiBEArsiPtHGyvy5QEv7swkM4haFNuFFk7AC5rVpP36",
  "key1": "47aGvkHG6X47yjapfvtFEm2XwS3zNsVmrhLCyB7zszqzLnr2Go52SQztcK1F6gZbHAAsD25nrdgwvJqKs3mfNtYs",
  "key2": "5XEkgDRBvRNf1D96J8vYuWf6F7j6yU8DxpyWuirTiaNctGhhXzXJ3vixJ6Kqd2LbsvbGm99NjzVmqrnkFVk8RBeg",
  "key3": "bb6ZweFt6ptHmSTHBze9soy7UUPHY6UwKb9paAuHeVAmEX7tLkmmR7scU5sg5J7AovXrsBy7EMYaEDBzKFx15LL",
  "key4": "4m2iPjqVvnTmtjnoV5L6AchHMxgFhfDHgYrhqv6QubCGkb1bhqnUaABNZGv1TLK9c5r9u7hzejt5LCWzjEyEiMZj",
  "key5": "4Bnyui7X2UPmwis8V2J6ge4hC5HGvtJZwbXaGmJrpDTM72i6ZW9Wpp9FZn9Zkyheqznk8cimEg67PH636d7jf3rT",
  "key6": "3dbUQefNYfuKvub18Uf35MaPpJzXYsxpU2v9UxS4VkkkWYMEDckBtVzWjLWNPZEPPheGqkD4tnek5KTY1LThyhjy",
  "key7": "4tDWwp5rCcRf4WbF9D2VYnH56PkC3kpwGgeJBYDiN8krc73q17nw4WUkyXNb4cGxcYZMXMgvSqwEtzwdnW4mjxwU",
  "key8": "3SJ7gwx4JtWdcUhT1C8ijbCcJtRKHQgGvgiUVgHfXcx8VtsS9RHJRzbH89v6HHEbHFt13Zddhsgkr2WHBtpwP2UL",
  "key9": "2qFn41o41u2ACN2WHrgH7dYwoH5ZKUkFSwnmsBwe3bDENSKct3fo4zVzi7ABhZniPgjKb9rfMU1p3coVv7aaqgMS",
  "key10": "DPgSYjhNR2q6GqLxwvaRJnZrHZKTh2fVuoU81cDcTgCA4AYwSZhzB5JCr7SipHVDKu78VkyW6nj74dUT9dWyjd1",
  "key11": "2kMqTKDDFSVw3u4eFh4uJhvBnDWCeBRvPiXZs7rFrZ97czKJ8GWJFcg6mGUz6xEszyfQQwRK7ShwHUo1srQpTpyp",
  "key12": "sJSJjUvJv13HfkwucXT1By2qXEopYpNJnfGDmBLDUtqrQBTLKm3bxapQrbRyAwT95NXC5kLWTvUED4eieuFLuxW",
  "key13": "3rRVsNJEkHaunkHiEnRq3ewA5WSh2W3v7pj36CkQaXyDwvZUSat9ZwWLdFs6dg3CmPCXqTkxkKQkkFosy8jPmh8R",
  "key14": "xjwYx2tpCPtMDASfaksbAhXDnNUupJafcHFiEsx9MqjHbLJbUEiwqUZCHqqcAT3Ly5U4TKvnND2hHGGV6NVixuV",
  "key15": "3LKiyFCBMhw9KyVgdvvj84qK1tBPkSPLQtVDZMDXaMF2jgRhYy6GpCWy28AjXbXfc5pEvHAzEE221sQSX67DfycM",
  "key16": "XeaPpGU5xj5wiCZaaEavpwVnUP4q5FqeEtL2Vv7e9oVrc1mscN5XicZUue29o8xbeTCLcCiEm7kvQAk4fzxfcGE",
  "key17": "4bmExCscVnwkq7mE22NDtqYa6gQ5FWTdofPCx2THxSfuBxTjmouCz3GtSrM7cKiYjPKYiGs7KcNcATKRVYa33Gh7",
  "key18": "4EtNjDyTd8RbU7Xxuq5e8KDJ3XPQXXch2D6txn9vPeMRaYdQjHVuuP5iqUYCh8BEtXy8nd8dcscjvCsd9ctC9xSr",
  "key19": "5beGYzyJFUFiCEZMQ6LTW1idTkdEEMEYHYP4j4obM97Sq5u9BXTgjTPyCoEY7rsorbzKTz8oCzroVf73T4kb8npc",
  "key20": "2dTAXtePP1AH1eNrapY41yNdJbjFizfQSLT8QweqekGaNqbF85RewyTbw2a5CEB8RrjfVxPYudrHiPkpGbsBWRn4",
  "key21": "3EB5tF9rbx2DY8MEsuaeG4wxftmTnDCD6hwCJZVCEQSbUbNYRYHdkmgckBa1cEhrYbTGL3SGaGWkZMwhwDxwDu8e",
  "key22": "5MTe2foH1upmpv5kwGifNhHvSaWwYDKgPGQKmKyzNcx7QAR87H19gjXL1eP6AeFhjTEJfECVWVwrEVMhucTp1mob",
  "key23": "252UPYaDURhNgdCCSyiSZ6BTwXWgesYR4egM4nfRBs7GyM3Yn9WMDAW7g84r71mSHU4fTRxzNXBUvRArrXTNDWvE",
  "key24": "5wSFoZeShd2CjeiMzkNwWHDETN9uUZcg4iJJomkGMNTdXxijvZJyordwUq3pP9RgJvMoqyDLLpCjoYN1sVF8Q9JD",
  "key25": "5KmQEpCkyqDngJy75vtd286QuWdWhds9uwopWbqCZ5u5qRAcQofPrYCQhvfYvwfPGKJuJYfZh2xnkg3ejNHz2jox",
  "key26": "gY43yY5B6oRVxUHwuTExEPNCoHMMF7o29EpqE7NyBfTTuAXmNwUNyXwtrgJgwhso29wbeEvKCKjvfbCeYkVQDBr",
  "key27": "DDkKc6JN3vGio8gCTD4gicFnwSzyNr9iPPPWj2fonAzjb2j32LQ8GWDTPnwAxD1CdkhE16yGaEMEBD7qxNEYBJ3",
  "key28": "3npVFVM4MPEJWEnKAqUxXMqtjQXgcPqeQrMwUfGVg8VzVsa9G7CDSw7rF2ZsxJdK6PwX57v7HP7xhWoQwuNsZQy7",
  "key29": "5vpJeYsvzLyiAMiKifh3Mntvgx1W6SyxaQQ1amSYsryzCp8pQb6N9jZ76VBz4GhWC2AfwKVH5GVvx5Q82xjMpyQq",
  "key30": "m3NWPupd3Sr2e5tYAysu43PgRzLWoQBQ5bMPRt31E9TxDoEdTGhJ1KwYuYY2Z83ReGYuLr1WPWv6qmxWViQXofX",
  "key31": "2JxedqwGfCopsub8prUdoCPWgD2DMKE2uALYQUr1eSngJisj6Q2hPUhHowkBRwj1C8H8qpARvsDVMW6uesL34SaB",
  "key32": "3j9YYYpbNpWYMC27nTaG3eyFTgUvi5RnSPNsed5C7r2ekNUxu2xVp48LrTsSPqZn9iXiETWmuKR48n3zXvL2GPeB",
  "key33": "31fufqnQ4vtos66vL4T7Yo3LKkqigVdXs9dHxFuvA8aaKc6xaG2AES2dq4GyojMW4ACTBe8LtNtg9Nn6wioWPtqG",
  "key34": "2T9wv1U7S5sgFiJ9tppNCn4QJguJS7BXssJ4A3ZZrR76zRi7ryxJBBQ8gNdyB7AH7CvaCMKhzTG1QPtiroyLwbqH",
  "key35": "xD3s5w51juBAz9NsGZoACWmkHqQvo3yKwbDL6T59whynH12rvrVnfwESGJg39vVh14EdwjYDR73r88nUesXz2zc",
  "key36": "3zAHhE7AcQw1my8Cyde1C7ttngZPieuDXqfcy1fWgBzFnrTnY35QLWso8CzjTApAC3BhVErbpeqeYKqrb54RdGef",
  "key37": "2ZbUbf6yBXE2zmkk1o41rPrVm2sK1MvtSM6BUxCP4ah1ks9UCaXXwB1JgnRpkDqDkgEwpWQa16cQQWmkXrQrwRbU",
  "key38": "d38C3GJqdXUUCTVmUqUPLuPfsNdaGrwsytDfAJiq4ugpgbF1JiUVVDVTEXoYyQnkinA4Df3Nsg3krTyuo3PTdyw",
  "key39": "438TuUtH1qsKYtKJLvmsNY7tFV7LqM6qG5audg1aqCyun3Bi68gvx5gELaPAELmjhwLN2mR6XuAPos5siYD9r36B",
  "key40": "TSjz3xd2um8woDwXseExVCktnTAr8tRbxeNHtJqqLMCbZDN6TLxCGy5Nbbc9Fst5evMjoY1Hz5Hua7cpt3nUTPH",
  "key41": "3SPkW13psp6FawFTd3b9HJU5ZkeCvKsZesKG1puRzmN3mXYunXyy81AxUhCcTcRZ4UrKgRjabbRhbxdntcBqPA4z",
  "key42": "4SDWP3zL1SdiboBNQErgFU6X9J87UVvGcJyTi46gzs3HTHpk4YEA3w59GBade9h72qRHcJBLYLjdtiYag1aht5an",
  "key43": "292mnZvZWw4eJ1pFECfv1ch7c8VHaVadQGt3gviQ4RUBHea4jT3mP8CRvnN1Nh7gS7RXpBhHhesVs89va2EyANqq",
  "key44": "5YCpXGATmG5eogoaopYHcSPfEKxDtZbUJcsb2YAmy4yuiHBffpjKzeLSKJwE7adN2f7ctC62732mjdXKiDMJ5TXf",
  "key45": "rKeZ4WWWbDoXZmaX52ziX7yEpR5NhpinqHewrrSE7SDRWqVVk8wqdKmWiBb8GMRT8HcDhMvqJ7Fe8qNbyoh6Sis",
  "key46": "3djVDBEV9Sasa1wio8sYUqkmYBM9G32me8vJJsKohzNG8sjiyy9JkbENSm8vsGgAmqARiGMgDWyWYEo4JxxKtbVU"
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
