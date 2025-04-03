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
    "23zrfhFo8JfR1PoabkVHD71f5sMUD1gakyZRzh1Zp9V53qEwPAEKhfts6qdXnVcc9cmzGpXN7nEak8TUH8Rugp7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMvAQMk87MVMFS9otx6tPV9SzVd3Ai4XEAFhjqVBxYJ3M43mY1wRah1AhRdBf1TFbot1rSSoGPKCrEPx96jPJMZ",
  "key1": "KyouAiqUw2pE3HxKSZvDSBpsJWdMRYUo2RtDiEqWDgWammwdYmtPFnb9tQK6LiUshqTymNJDXybyy1tia2rX6nk",
  "key2": "5VAyAbR9miHNR4CGzrh4dNLSYZmCYTdFFHq3s99rEgrTVTZEWQJfHZwkepUFjWypLGUu74zNEKwVy2WZgu4Wrhpf",
  "key3": "52jdFcneUzUBc9V2B5edwjedr17h9g1aHYd2ysCs3mGNzPdadyLwr4iszbiyTjzooshtdjPS8QNaiWLAiLm1JxLK",
  "key4": "2aTEkr3P3epH35Qcvtc62yHewjzLVCAdsVpqNsWyCwtSoLsdUfSyhjdMWxbHvSG6uRWh6Mtpy3TkDsNf1F9FPzNc",
  "key5": "5sVHv9s5zErCXR2AySrzAvnHhuRTJJys5nY8NDuUW2a6Y8bxJpr5QZ6YUjy2Ky4tCqj5yXEY1pDA5jufht7hghQK",
  "key6": "VbrZvJ91YvLqmqTEEmcEJqdvCYgsanFAkPd6QfbJ6pADCG41PZ1PKnNy8gVJw6B92hTWuUBhnCX3SPtFUK3gbzu",
  "key7": "4vjkQWLfprvLK7s6EXXrY2svHLECd9F7MXXbK1PhjiApDAc3WU35EUpa8FHFytZ5BZcqT2p3KqCsHuCs7fe3XwKj",
  "key8": "4Hj3uMfETv8t9G1YcSXGy3qAJBSQr7h7vceEQis1VN5SQUNNWwBBq68aJtm49zYzcpq3V4HvTJvHAo54UwWPbjvP",
  "key9": "3xcEKmJneezc1gQ1qBSf6wWyZqxXg3is2fJWXUm843nmdBisLeHNa2Q62YD2UGzjrtYXEwfDK2tGG6VX965kyBo5",
  "key10": "j8oZSdBTky8QQnuwucHzv6psezvSsXo3VbvbkuCvwqt3gzrDRNEWJHur2orDteM15pAYHseSmybkuQjGejAMYL1",
  "key11": "5XUq6AZjxsmFvPtpDXLTRJL68TWrvvpWbRWscG1oL58u2F27EgpYNPvscxoKiiSxYVYTErJXXUdcemnfbAbswRgh",
  "key12": "3WFUAasHwB4EJt1exdqgRq6pyE1DhRQYNuPkqxpL1z8HDe4wQKttbxQvnA6Nq2KgVeco6ndNrDD9Z2N1pFavjnLN",
  "key13": "2c6JhihBgCxvcjhhU7K3fTjinRLKxwmnCEV7usfV9KkKxWaiKY6Sk5iUCWVNukX3c9qCsWgpTXKp6fkEhrenpr9T",
  "key14": "wK9ok6BjRFDCi27xS2cAbpe6UX1HLVaDpxkKktUKcAH9gZA4uPpXJL4Kpx8Fb48dTdYCeTLG4xHjZEZpRW9wPJo",
  "key15": "5zz5CX25UT5ujBSUcAS8mKhGTLWPr6hjee1aQ8BVtEzUFg63fysJzjCY4sEqh78UaY7P5Ea8jhRbrEEUJ2f9A5eU",
  "key16": "XWovcHKJyvMrG13A8hhyrwnSmLLk2asvug1r4yDww2Ar4vrhbV7R4M3VeRqKaJJuR6G5PVGd83zTfQB8j3WVjAr",
  "key17": "3mMBoHXtJEk7toPYumjmhZWumQHCpSvoEwwaj6WugRCrYAs5Aww28MLW31SsFe4fPQGgMmQmcbUCqstQdFsDYjJ7",
  "key18": "sWCpDrjz19TDDkfdgHiJBoJdfPt2KjpLYsc5F5H6haPU21zc74YgYnVeyk4mSq6vcjDvK82iKrnuUaBDhRKG4XN",
  "key19": "mDcQZHcyT5CuyAhkaC2XAaYkD66sLwitzZjG43VWWTicsECfY7jDwucuZwAgMq5YqskHTzhCT6qwwAxH2wdam4S",
  "key20": "446H5Fvwv53AzMK41KVZPRGY8LwFKa8CR5DxtPGJycKdPvMWnSt6jQ8CBAG2ggJ2CtFfxi6BVmQhuECzvgPVRrYd",
  "key21": "5f3bSd3EBExtMobypvcF9Hb33r6Vjtf2e21osRKfNy7c1W93WfWAQdHgmd1eS4GPs35FQ3rrjPDRDi84zEzMke6r",
  "key22": "4D6qYSzgniyRV49xSz9WftQtW8zqaFtH7CK3iCeSvrFraStersUDQTvPhMRVpqtr1e8Cg88DVNfiE7r8smPofVbG",
  "key23": "4168NWYMqeeuYdDHT5p5UEeZ8nKWuhjhmxfMezvEFne9hGrvxHAjEvCCeUzrPWc43n8H4TJ7gg2mBgnmHHHt4JPc",
  "key24": "64yXaR9JF9hU7G2peGsG5A9ttohR5hqCj3Tm6dVBzDpvXwhC54cPmHvHZF7wftJY9EUpdxLxEeEPEN4SuwEa4dSL",
  "key25": "9LjJKxzt11Dw7UVz1q8ZRK4yMTQJ4H33Soma89W5U1p6NBUcY6xZoZYD1ZYPJfVdqg1cdQX1kJtZpJ7ZPfoDyA8",
  "key26": "4DHiYVzbNJ43rQ3GZRYkMQQBcainnsTqV7uRQyZGyryTmpq7qiNg9Xec1VEE7pQKQophA3hYkH8RSTaeuiapyj8X",
  "key27": "39CarFQe2nZ8SZ1JqJgWL429ndRRTtEnGgCL18AHF6Pv7UGG6yGs2MGsJjcThVJiwWUgNHe6XrMbG4B9JLiKxns1",
  "key28": "Wwb8rmUAbdmvgCUPhSZdUTCsDcYxqofThFUEm5XYN5pXA6Gs32KVUpJMKAydq1nTK9mWpEXQ6bE1ZBnudnCNxB4",
  "key29": "5i6uF4r5vF532rzGedtE5toR8vQKBaGLGikdmhqfbYyQvbRBgc5LDneKxdXuMjwMdTGaHe8xi2Z2atDJxq6ZDHZm",
  "key30": "NULYzvAUe2gmuBvvRWAqKHieUL7pGPfTnXW7aMQfyDtoqYb2GfhNkjCc31fZW66RuSnBgzbXjaYLT4J78ygwPtX",
  "key31": "339JSqXCKe5zpvSdPsET4YqDzuvjELnavLAYaWzVK3vsyr75DdqMN8TWc6PNh6EukteGbF3EgGjHLj5xGeB8QPFt",
  "key32": "58x9CNg8T56zTjyZFJtKuc3oi6cCFxDktD7yJrUguGo9NJrPNjhXvX3qbGEq2TPrCRV97hdFU3NxnddRjdJzxDM4",
  "key33": "3GgMPNbfSbravf7SFfZqmaTztXNTGRcWx8GehiNWK1bYNaYQbN5dQ8HSbXaV7eU5gLEPVcNhX8BSqxo6tahEPBLf",
  "key34": "5kYXTKhvFwjD1TPxzkMBzsXWf41Be58nhmpVFF5CZ9cM7eefgZSSAcPoT4YhaMZKx8yiCpvFy4dU4pBohqyRWbfG",
  "key35": "4p3tHpByNKPx9wBdhUAhgQbBCyGdY7J3ERwxKxEaWVpeYAqiHVNJRKxwgBM47v74urvzhWAMvp7Bd9kBkzYmYAhb"
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
