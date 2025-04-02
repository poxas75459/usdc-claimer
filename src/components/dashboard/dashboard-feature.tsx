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
    "3LXu7xZmXFkcAhaNUDh2YUGguKK2cdLinRtr8yQ8A5ZvnCULKiBdw1R5za1dL7BhLAR1qY5u1EtoEzASLUvQKCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iG2ZTyMHRZZz36WFRWkk4pW5AuWHpC2SYdcSrohsC3qZMBTrWcLq34hy3PCGMqrMa1AQGsn6oN1PSQcvATxREGq",
  "key1": "5SQkWojvwyZBqtHAhmASVmFUYR67PwfVZFysiNyhTKYEUWxDT7PT9DoBWFeGcAazS3JF2HY8mHGmMumBjfbiUnTs",
  "key2": "3YoFiApdGUVpjECbzABYGQwPmyn8Ahf95YKbRups3hkLwGedYwWqyDXrvKTnr8tDpNwSA46o4eWuGPVePmF4VoyL",
  "key3": "4xJP9hJxEE5brsEkY18mFJg1buz7koifJdE9VyhyV21yBvzFCdQoiKe8wpzRPN3xY8YZa2BVzaw42qFfPg7EtfWe",
  "key4": "3RL3C9wP4SJDFToLNibn3RDm5fubNTzxLnpozGLxJ1wkCxmCaapRdSpyYgNxT78VqgXkrVqsa1jqC2MFGooaUSW3",
  "key5": "5jUeq7gL1hAd2KyeAAoGHSciGhbQb7e5WDDXwAaCzTenfrF3rDrE63oTJZJHkNpMqL5KC18U1P5RUNWTjJv7SRPX",
  "key6": "2zQgaHyQUh7U4U8QrGkYSwfmwPDEKi33kSpzYpvD4Dwhcm1NtZLBk3HFTyWFCX4PpENSB2TiRQ7amCSxKHVTwo2a",
  "key7": "28nwHeoZTTAheMwVgdtrNc5Gvx78eX6t5k26rgf67533JBtgSBsyDnLUUsxpfTVMGUWr7MqtydZTw49zzoRZmWyv",
  "key8": "3We8EtTktRwASsKuhjLBjRerZFcKaPp1imNUBazfQxBXecByvBhKNyECnST8eHDBgSorP4hxZ8REBgUnkPocrRLu",
  "key9": "UqFGjWwGYHvV3xs4rbcGhrNkc2PnoUz8DHHUYBQbMNGeY3A9a1u2ra4ksLKV46guiGzQmfWRZ7UHHAwwJwwZynz",
  "key10": "215nZLAzvsYJ9NZeQ5LqfiQZyNL8VRd7jqGHPnjHnUYeH2J7o3JLnacrW7DRwZq3kmE5XmAMT7kfBSM9i8vKHVqe",
  "key11": "2U9eFDD1Q928gH3fERCyD9F5xGziKbzpmisKFnnrYK8G4aaZELiGXWUqHxNmiacPtHWMCnp9K3qxxtwk8AUZKfKw",
  "key12": "4DyLoYamSgLk8TsBNCsNpkM9MSAL5pHV8zZMVUWMvixpSqMTSLziExeQDshDQPDdMt1vqs15RiNC1LNMEdrtUsNH",
  "key13": "2EAPg7Ai2yqxAD3yNyv3EY3SHAgZZCwgXtsqBUAHmDi2C3RCzz2wRVEWZ7pUqpxK6A6fB8STWYQYNemrjR11B25p",
  "key14": "27Ft3y8i6oqTJsibkAYgKqKiQVepLd2EztHjDpb4nwTBfdev613vnqFfyTYd5cs5PkRc6wk6jpqTePpoM3UpnhN3",
  "key15": "MFi1rek8AN5uWUvQsd8NUH78jQYuzjbyX7Z2m9jR3YyMtJdaezF5Ye8WLRRisFr6yA4onjZJLo5A8jvt5t6FQu9",
  "key16": "2fZyNf4VFTnTYpbKWNHgwzSJdvuaxNwomBTnNfaEMqJTaCodGCF5wwNGnbTFr2eoqeGCnmKTByajJtFyUqo9RdEW",
  "key17": "5FzPagiA6idm2XVLwQ7rn91xrnUs6tPR2deURazxsT8UHP8SBaXiEcJTbmAvgUBaqGCj4jwmofunf2qaZ4omchHQ",
  "key18": "5mBjwYf8Vh4Wb2M5zXXvPhycz5ZfqDSywmTknxfFsbpbhk71KRqaYJm6GFmtWwmxcVpoKdyj64Bg7BvpSEQTYNdd",
  "key19": "dK2C3KCapEqsgiZoT6gTqyuX5YWojHzo9ZXZoMLS4XRSGNNrutmi2WfhyMWr2bY5jtGuK4fpVw21dcpbqm7CHP4",
  "key20": "3SSuNBVwQQeHk91tWmoHrJqcqrncJwCMRMNCQJ582FUyhZAJH1paVz67FRHK94oyLtXfMB5NnY4qJhvKFqhPLDFA",
  "key21": "3a491rJen95XtUw2UzMWNbDKsTfw2uwd38DVLKgFsywUEAVAKbdGmKi5HxSCamk1e5dsZ1kt1JesZNkGMqouaovT",
  "key22": "wqahiuJJkuYPPLAr1qGiE3Ar4tvHdyACCv8x4wkcVM5MnWdDVekitwNzmfDDjrQ3Fjw63VY9eMQvWx3mpA2JdUr",
  "key23": "4rnhMHb1p47RGBnkVXabjxdRgvbbrhGMLZsBQQx5gzMwfwuxKY36bWaFUhgBhBG2nLiNokzsDSdsaHeJm8GkiYAy",
  "key24": "4rBYXU9dxc6DyM2yk4C9AjFDAxk7L2iVQHVkHfdQ9mJCc8Uuw6G1H5GHfqfdA7rDCjnYuUJrGJJHH497dHANjMm",
  "key25": "RKuMfUnvrg9VfFaJ5JaE1Zc15ZprmujsPEMgn8AW4SR8BCUsL98HcL6QwN2tS2cKpLSzuxhhbVnrwA8qH5QNPr3",
  "key26": "3jNmPV9prPSpUDTeXzGoMsBGXezHsD3Xzk6JmLBgMBzLRMZWE7aX4cZ81LJDiu5C4pQzgbavUQsvh16jdLXxobPS",
  "key27": "5BZ6Sf812NkZZPCr7iBNNTSjGgCi1e9mktigvAmYfCdeyFxfDFmZZq7PDcuMxUBMW7aGG5S1g3mxrGkpRn2MmWQp",
  "key28": "4vX68Cs2NhShqqC1ReMiwJzR8xGC9tctrpjb9vWNx7a4cVg5KRJY6E6tHWXZtfkAtyfuiVhohPLkZvTaEJBYmNer",
  "key29": "hPCvTNmZXzv1PnjaRCBTusivvCzQDUzPySY3qrgxsh6BHY4X5nTBVNxAai1Ei7cyYCLjPBCBBhb1ziwZvMPCnox",
  "key30": "4bxd7uTdNMSdRzTKyXDJePvAPCDy7JBoXxW9sjzzx5mV6nW93zyH6q7gQEGTxsmyM2X4p95kQh8GpDTeNs2GQZA5",
  "key31": "4rbFWAsgGiRKaRtFcJ4eSjVXxnBNZVjB7gsQewvaSymhES62jMumX7AFiA9SodPJvJAekU7nQR4dXECUdhDDTcAo",
  "key32": "4p8dWNMU17h69vQyfJCXpnK7gfetkTyouVKEXAEkyebd9mvx8KF5jdxS3KJ7qqM42ZTyLDVvKZoQV9NRXw2RQUrE",
  "key33": "46nM7J1Mhc8tPEY26M8t7D4txWnFdjSvUUbL2aMPW9nKYVkJfmJd1Dq5mEr1v5yS2XDJNM9rTBXbBHA8NKokRhYD",
  "key34": "3wQpW2vyqiigNyXCn4j9qM5EtLUpidhmAcTsVZFg6WkGHFT7QJc47Pu1qyH6P8ND7MY1FwQADdsE5wtseLt4CKEN",
  "key35": "4Zv1GDMVwiHwMVdhm2oX3bHR4JBXgRh8kWo4uoDiDF8HTFBcivMT5RHtLiDtjWPzeJjcihZfVL5sMKcJF9ZRfXhP"
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
