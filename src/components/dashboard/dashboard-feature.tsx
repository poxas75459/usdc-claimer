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
    "5nmTor1YSaacHJKgdYgYp4etPfTGMHjVtwEZdNTR2iN7FXs1CvnhBmfhqhwv35gyYubgfhKUNJFVpLnhgYDop2Eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7cCjDhKRS3eGBGJU7zpGRbdEf5nD63BmqMrAQt93qWSL1if8jc9yMAUCMo7iU9HAqmo7WUCxnZXkZma8N3cJKw",
  "key1": "5EBsu9AgYNa1WHcG8f2YnF536uUwdc9yCYyeYU8zsn3QiRBQcrorvmMcHnWSVsoYkuSJo8ViNKSGyMWZ6iUUYkgG",
  "key2": "YdThw8uM7GVQVqTgdysaC3wmmdwQbsPBgLj1nvhdGvWfBieZaLU11479Uz6Gh74Kv8pT4jtmmdJioJ1HrghNw1o",
  "key3": "2eZfBcnwWaeBmK1Vmp1nHCKHf58xZC6MFWydRY4z8NiDkJ6XDivgXWNdAwwXB4SyrCpxJKobRbVxA4HCJMWGoYm6",
  "key4": "4NZGMFNyAaKrV5WX7N37cUB2q4fWmjmKn6b9DtY4szoiPemuG9qS5sdichJFFRvTUqcREnKXLcko9KSsuJKLJvDy",
  "key5": "38cj3DnoHu5bbUvEvri18XAuHn6ghyeyvgQwHJ3VB7eDK2p3mFmP6KYA3GywaTEDUpK8oG14YSUdutE3BzehQY1m",
  "key6": "5yKuBHQeRXwYhfDBYiZQorWGuuFb2kQNNcG6YSfPjjjnDdioHTBCgApJdjhKPpPiBNVpH6YhqaXVr1XJQQsWRiTr",
  "key7": "642Y6AvSSMcsU1XSSmLDGXgPj8L3vuVpWyFxt6FedMSU7DQExbPrBJLACeJb8VDiJxzQ5ZcNQ5DNCzKQBi14USFv",
  "key8": "5fn7y7iTHayf3RLKbg44Po3MLr1dwr7yQrNpkFhsC5teeDfpo5FKEozQW7wd5yWppotz3MC8mNb87Y1FcmTJGsCd",
  "key9": "462zPrYhM8m7KMT7ChRtkjr4QCWg3tvjwtmyjTvbwtdiSsdHrWABD7KtnMbxfTSzUwjWf9wkHdt1jagGYBJArMRg",
  "key10": "2WtqnUtSrpAvCCvQzQfuzGd8TSTqRwFeRSSJujTX2Fv6nkRBL1b1SBW2yYPDk55z3uhnV82nX1Zu8Q6eGhqQ5ouh",
  "key11": "5H57g1TsUQPiFeB98iLGKES2jim4ASckM1pERf9mzk7y4H83QBvH1GyuSEGrZ6dYamTpsJwnN8kh2K9JnLi9dj9t",
  "key12": "2C4CZcm6Wo2dGHW9SLh4k8osK2hzesLgn2rY5KKSjfHaov9ev87mZ7peHi3sShLcLtURM9Rek16aunSgGCHqGkQE",
  "key13": "3d9UwDDXJVU4pB1CNp7Npzv6ApdETk3kzfmmB7GxW2stxyZwuQB4UgivGMuxrpr1W8kjREnKuKgFGuAoK222nkmZ",
  "key14": "3vdNzbqMpy2vXovViHnuva6t17pAKWoNCJHxgH4LATFVhWLtnwPYFQro5219QaGCFDcLr7ikGymjYFpwgZHaEgbm",
  "key15": "3PyxcC1AgEbENytbaMDtpC1QeVBpKNgJYQ29DCQE2Bfw8srrEQUSG4wXSEcBQWLh53q2bowBRDZhfyvqTQx1VUKf",
  "key16": "5dZRmfQnDfz9QDR21142v22BoHhJxn57DTESKjk9AVt6MeX3Zukgz7BEdZLoLm75Y5AkFbDYZg7ii16Dyg1WuG82",
  "key17": "5fdcJvBSqfHbVafLNGuQBz8Egp6dwAAVmcSWbqaUEXRGHLgJtWFFD75bj32SqJ4tqYGcfh16eHDHXHH3UpwotesT",
  "key18": "3bbYXHFmMqTiejpec4nDAmUDKu9xREtEXJZjFB8c2hdC3Dk84qHtXFp1cy6YUYuoAsBWCxW4BH3MArKfT9Ru5yUz",
  "key19": "2fQwLskTHvWJSs5sGmgTAdojKUpSdCn7vTRKUHfvtCMtKuCZVw1uMHgFcb3uYTaFFeHnHDFh9Pdn91SoiAsxyTn1",
  "key20": "63hdp2VvbysL9eFaZgAyegazX7NfHXnSNVyu9DkTGjFx2yrADMZ8UyyYxRSeHL44cMtUzsdhLpSL7wgbBWcrdEws",
  "key21": "5q6xp522TANsyaJKL7jpy41qYun2njJ8fE3Zaoacoig4R99i3Ba9LeFS6U8o1yqHtFSgwPdBXy6PH5dfyS7kw99h",
  "key22": "xTNxxeFXp79aZ3aQAyKx8wbApewVJWGa4AXXLQEUWi5LWJCYY1aLhSWxg6e5UmpwW6JDvfLmjmGjRqY2LKaxydo",
  "key23": "3427J56hVRgzos2MxvNgJEi8tARzLqzmizFSGD1LMcTJvmPkq9rv3xMjThBkBvdDdNqGv8TPfxKyF1pNCgnPYkWX",
  "key24": "2KcdsdNGSdoBXDYFqQGaPtfSYSkPteK667YH3g84QXGeRjfsdSFNdwrXoqrA9ADWdcd1GiyT31MBQWG4QoRLoB6z",
  "key25": "A6vkLNohmeK1c923sRGybwvQ3ccvRE2KWKbL5kH1mpdq1x6KCRB2qypKBXApZK265yPcK1YY8tayJq1ZJx6xRdh",
  "key26": "26UmZLSKgydHkcvbfwHhiNbGYnyxuzRqEUem3vEUBY4o9FzJHC2oejF5Kt9Jv4MTkqFvVbvmgVnVUmSjNji771nM",
  "key27": "5TMQWLg7n8wTbVci7tqsihJP4o8Y9b1DTEChFZkruSREVVL81Dsix1SPisyWtX1h3R7nf3k3CYLvLrZ2KQgKqXbr",
  "key28": "5XinJsc1gWmQGsqojTzoxHRaMzYNWi7Hwb22ksRVjocLEiEtHay4NkKDWqotUQDFbTQmH5RWAs122cNF7h71DLiv",
  "key29": "41UXPpuY2QVDK1UHaLWi7VBgc1BLTYP5sWQgqRfpqiu7amhazgM8Pnc71X2okbhJhu6oyW8GbaVwJPQ3yFYpHztF",
  "key30": "Tf9ZfLKfxUHE8eTLaUJZuzgGQ5ojJ2GNpWLgNVWRh2PpzmT9DgEpbdWtfJWY9CDhUVyV6awKkSkUnwnjQzETTBA",
  "key31": "3cKzbuUkZf3evktJe8DzQfu6hUSquQi9qGgMHHbCb33cVA8KesdX7a2wsahxSnH4SdeXhKc7xvzqahKpNoydY1cb",
  "key32": "3PeBJvYbNdkU4bog3J6w4Hfj14Kk1ASiUtUxWYAv9MzDHZxrY1EYPKkVdw3frakoTUJUSTdUu8MPafzMqDbBDnE2",
  "key33": "3K5RnXcZ9ybGrpZvNzZVTenuR4kTP4gV7BcMmmMFHXidDJ2E86aCPZekaBdAgc7k1aC5BnmNXSzoaShaBxCbNZ8U",
  "key34": "3x4wupxs34FfCV6Hc2hDNvYeevMxEwGpavQSL65wg44ShUPrLTe56k3hNqBVp3UFYXiDE52945Hmn6CrDBcWbRRe",
  "key35": "GYBC8muWSy3KpwGa8eBCVsoQZcPuhCqaS3zqpfFC45YMnMsnzr9jJXKsajAzw1td3kn2f6JRim885vXBhqGccY3",
  "key36": "3e8HbsZEaVffBN7V9oZRohgYohwX7XNu7pzoGjDnmaeFp7wmz28P7kEmcuKiu2aYWmpuoJhG7Xbv2yn76TRSJ2tC",
  "key37": "48yJo52aXa9m8gmERanmZWADpc8AiG9xbsVQgDhs7wWeg13Z2iZuKgkoE2ZLEbaqZjYoKQVZTd9S234B58Ah73Ks",
  "key38": "4MrSX9dAFcvtsZ8MxgQm35eBU4GtFYbncwwUsMGQDTrVMNw5AUMaVDqfor5U9Ji8dhcRi1LjjfgwvHaqc9SCq4AU",
  "key39": "y1fTLvaKujiXSCt9QGNrrt6qLBCYVLQcxdSVmzW3yCverv3pNsx8qDu1N9pXRHuzZ6y77u4iyiUTh7yDevRsYNi",
  "key40": "3nj4HMzcYpBLKPSrL4yMegj6QrFKwsj7t1wzJEqLB7rtP6ksXtRVJmyXJnJ3aszPCgsrNMiM4oxkHnWPN9nHdgRZ",
  "key41": "4h3f8diZ8ZQHb8ycLcx8KFXZkwjswabyFgEzWD563HnQPnauN9fSHXSBDdGfPpYpJR6Z38rehcKRgKDKPD7w8NMo"
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
