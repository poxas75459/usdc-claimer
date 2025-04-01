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
    "5gNGkSodeAJGZv7KQvLnorUvTyZ1bxtVSoYdnAu3QjFbaMyAgCCfARKJp4WRGpDXrpSHE5EKTQQnyzTX61kDkgjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjKvvNHo7VMFdRXJoqETJzStcgcbcPQTQX9iPnpWNQkHMiGtvWnWg8SLHSUd5cprKhGGrMj1V7ufwKqk3xRZJvm",
  "key1": "4Xt1SBK4N9nG8Rhh8N5KUHNanVpF9bfKBuQVhQdyj4YYeT8M2uvPRJrGzAZoYHJyUi2YpRFt9pjbsvwCpjEwN8Ck",
  "key2": "211Rqzt2XPwt3F8Dq9S8wwv3EKxYvxJNv5QMDgSA3roVDsGD9sLpe29ovC6oin81u45GGh6yPYddiVP6uyTu3HZQ",
  "key3": "Gvw25wxbsYMTh2wwmN7rvGZ9etVq3n7bWAEPyvmoHKW9EAkQBd4v5xQyLnCSUFbxCttcMUvsd26xYTadLw1vGzY",
  "key4": "5Z3Q4iUZKhSzvHQqjk83Hmazvv6Dy4e41LK3DDH27psE5WX1HeLiBAm1dSBHqjvV4oJHpEp1P23p21K6g9w6mAUr",
  "key5": "3gbPhCwP5Q4Sa4VDfn4rLyvJvgQ69q7WRw3ZxEsnmEFKfL9LjzWtLn1H2c8LkE2jRtfDpvDVitTYFkrqmW12zxhs",
  "key6": "EbNCeRokrzmkMY4wFwPpU47wjne5cehEgCwhoVWXjKHj3c63mr28kagnMrj7fznieVt6XWmesSGvrpFt6MGqkym",
  "key7": "35UUhRsH9UXwsCBrXcAkXy2CpwZszTcbFSz5HFnJWrLzaVbAjzny5xJm4Nfg6UWKxh9G2guxm5TXENB8b8FwEo6g",
  "key8": "3j64Rz8WVcU3mXbNxkF2r1p6AaNvB8rYH4EWqmJ33HJPTgvAxzUEDPx6skCLu4yVUDZ52Ayuv5i2yk7VQcFbquRe",
  "key9": "4C2fxWMFiHM4oDn1MLBTc3ud5hZjBpMZChxMhUCDL8mZpowKs6RP4q4xsp2ggqmDjLQqmrqraZrUrRDTUaZwXXWV",
  "key10": "2cSHvfRvCgrUvX2ehD9zGeMfC5nAxSNooKg7K6KzY3QouBCP1qzRRz2xQfFgBYku9p4edj9p95QLApXZDpwGdFu1",
  "key11": "3knSsqS84HoegvvF8z8z1U91XKrQpiCXfnH2ECDxgbZDdUPUcY6qfHK8icuAey479rMD8SLwQcAcEtTZW4k6gRXd",
  "key12": "2WKsHhQt1VWoZzmfSoYwK5VGui16cfdzg5ndSzX2aHuufuW2f7ZKDHZES5Ur2D2etEYHFmunAphzbusSLLW9SRjr",
  "key13": "54PpWzShT7jJBDbkJep8BSVpik4VH5deqkECvwWB6S8uGkd2CUsB8yGpjarsA12Jv6VKuHkC3y1eogbKQzoDC6dK",
  "key14": "zbVwaB41CUdo4PfANt9NjH1nDnyrCPijdgDQFyAQEFLPhQfVzoLhpF8mP5X16x92RRQvd3ua6imF6ZLGFKbhR8h",
  "key15": "2uG4EmMMAP7MXxui41P4tmmfBCwia4XJkWTNbXhS7mRUpVP2oV7XhWdK1cuSpxc7RD841N2cw6aorcuWg1ZtTixt",
  "key16": "2yTiTPBTVcHbtrjQDCRqpLFhmFewsJLh5WQo3p22vES67Zui2MkDiEWVfKRg8keCQFW7MKPp6EtLHw3S2hc4grwc",
  "key17": "pcTnFFxdKENm5wwxVrZMHudrHwqHHKTD4yWWhLrA8xjjC6xJdZfp22cPyuQAPSsYPjmE2qqUhhRkfaUGDFjYLoZ",
  "key18": "56Br8hX12gG3xeYeQNfGMjAgjRvKm2VnmwX8KobwhGdDnZgDhGVBHgrqCYgH5Hrb3eHc85Xt2c8XXQ12ByaKhYS5",
  "key19": "54nttnJEJseRfe2h7wimn6MjD1R7vaAZYFoBktPLPjpAL3DknK5y9MMXJVSxuAXa1avQf348T6Ym4Um7euLfRgN1",
  "key20": "2s9r6i1C2mGq3iZAMjh5HuRuYDEUYWtkcywXpZWsXHWYCn99oeKn6KRueM4nzETTywzqL3SBAmyTCQZYoQTW5WtG",
  "key21": "35VEitKqTZBVPbWjN2f96xxEt8eWtYRzefWbcth4n1GesAiXETybQuag1pcSB8ukw1CkooYbVmuX1XYfLFgYC8uw",
  "key22": "53E6tN3xqGRDPLn1UwdfoXiEj9gGkrgdjQfdyPivEgTY4cKnSzdxPYSaWJDBmNJKSQCTXsWHQbCcVfCyXpidCbfp",
  "key23": "2XBrVdPpuxkeGz6jZbFQbRiknRuND6HFc17bA5xj7mxxjA2pbbPw2hYB5Zcp2dK4iELpjW8qRHdrzTAVJtLS1sxM",
  "key24": "2JXV1AErX1tbW9tfcv7aMTANwY1mD7sfmpGdz2pWstPsYGXX6LATPKjwULDzmuJopyrc6sfDwRCdMFYwqVmK97bG",
  "key25": "473NkLT7LY7kBu6uwh6WayEWbYGo7pGXd2GL4Q8W1E7YXDmc3i6MRHFj5919bxdhMiPJGByN8qD6iSkMXxQq9LfZ",
  "key26": "5PGNNTFjABvoWbEpGTqrxhzqwnMLx3kPVzXyGTzt7cTsov9gaoPYUDom1rEcAFhVT44ZTyPy48wTjNaPW5AeJUYf",
  "key27": "4UBcAzZdgJkRkrtoZdE8oDgDhuAhWWMfHZtvcouitDCnXRrWN3xGDNtZEzFap82daczQtnz6TBmy71evos6ufvT9",
  "key28": "33kEdLHeCVfszfedcLJCKRUpCK3vSiCZqeQBqmFnKdUraPCKYwSzZxsbTdc9Lh1ENM8vbbPDqcth5Hj5ZwWN4bAi",
  "key29": "9Dp7qEf28LNkj36Dr1kLcH3WEaJtiX9ATPCA8D7ieCsPWVX2AhpGDz3Rh6no1WZbTBKqikGVsHPE1nFPQXHACq9",
  "key30": "4c9ZArhxpJGZU6R9K8GijK5MEUxewTPBWPQA7vCUi54CZofaTvjYdi75WtdRpoD9b2fuzSBzYFi2tPLJtYqEDTTN",
  "key31": "3a25meTdd4fG55iKjcjhPAFfnyCfV5GzsFjVJDsaszVLCZL68gyZnUR76ybp2MK4vdDDWBTfFHPk7NpGLFZpDVs2",
  "key32": "5ExsP6nqUWNkzxDaFFjfQsKyTZoLiVEqajxgSk6pUGxuRwkDrgCf1WpBzmDXsYiFGbtuw1kdMeWuxF2MTw6HpH8D",
  "key33": "3JKMJYqD5ZRtgejG2FiXmkeoAvKghqjtERRkeJoNDih776ZeFcm4S5YJcAGQxUSW1DWckXKDG9jTTfit3ETzszBF",
  "key34": "5sSovQsgPC9y8r3oyhNdiV4i3m3pjkipByjWtGC963rjDEDV7rf5afmgkjFaraos5uFNLfzp2nRqptwjZ2iL6uda",
  "key35": "LN5u8MMEjpTPa6Vd2UBNTiFFNknvrVCFt1J1YPELccDdS5eb1WZsWNQtqoYWfYnJQX18ee7y9ASJEeUkT85bVPn",
  "key36": "4q3r73gEMhmBcxtZdqqDR1U3y94AvBC4E18LoTGr3onevnbyjJx1Qh1pEQQ9t93Ndwdxth5bPuXazyho8NZY7287",
  "key37": "2k1VEhq6FxgQvo77xBPUejRYZ42wRwy4QNzt45fNa6cnrJcT446U4cTLpnzQ4kECkxMEVv8CeSoPE4ivoBLNhgey",
  "key38": "3VUX3X3UQbffCc1Cijr17YCgWDJAPjeFNZAF9RCvDGCkqtbZyNEdiBrcvrst59cuKLmXxWZ5hBx8QXVB8PAncQBs",
  "key39": "4eGaYF7JPhNJSBGx7kncYdyAUYoxiaXhEA294LBbjUKJMsgq3ZtsY8YMRvfXvYURRC8FtzvoXVU7ZAgpqaH6kC1V",
  "key40": "37Waj4b9xZYXvuN8UqyWRefAwzabrW8EqTRsRdgz4J1eGfk5LbQk7Wn3KQhdahuUdTnu5cetE7YWCv8hVP4dWfsS",
  "key41": "2zLkwiQaikY3hrSU3Y5J7PDJR18bAtWnLSaZAebYU5k4V3LVKbgF1fTH3aoNbgvXtdD2Q6wD1YCc8H5ns64UxrZT",
  "key42": "4Hp97hv9rXJgRq7vE3Y3oBC996GXSM2WKAxub5NRLDHUQgCMRTRjGQqYmicEsacL53ZQ41P1MAeGomMSP7EbB3Pt",
  "key43": "64XiAwZ2QRhrsYW9cx27m1BdeiypQ7inUMNkNtJgQ1AcUbTuNrdUn3dWiCjjdtStR9VDMkrNbcSv69FPoPNB1zK3",
  "key44": "4fHT3k3fXCtwmXPNh8qaJxwxYN1BSJBunPvV63Z2XdVG3rsDym8JcMBiBPDwj37qN4dAdJb9XRKansp8Z2jFuYfw",
  "key45": "4Yr7q9wqxyKVqFiUwJPRC9xzUzp4T1cKKuDRwFzm6YqExztRg3g5xYEX4sTgptW5WfhENwffpMnFnzxKoccNAtYc"
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
