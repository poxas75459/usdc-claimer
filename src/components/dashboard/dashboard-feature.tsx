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
    "2cRGKeb99xefBjTHPhCFipGpmP1PbYkRFzduqWJ8czXKpKcx7sQYocEMQbBpkf3vAA6EKVkfeq1SwaYuCtUGDtxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWMGd3gNoPBsMSGZXS3y3Nw1TcCzHFRg4VEtVxLw1BEDHjMhiMftbsMmoXE3CLrK4e5qeabjkSqv7rG57e8bLyR",
  "key1": "34czRDZn3oSfsR2m3q1w8eGrv6n9DqcfsRfkmE5MEhsrFaVHMQn5pAZtibZshVbJXWUJNLvGd8oym4YarwyHdxLE",
  "key2": "5QcJPR9nH9uW1i9aYEwDLwuibe3JihcBvrAaqAiUnRGUDdnVB7auZ5wbcs8zvB1gY6FVoopcDWvHkzYZTtFVoTTK",
  "key3": "4WAhJRWB3KoGVJCqxufb1cPiZM1XMc3rRdBhHXMK4tg3eJcCLraDZRqjZUEYvq7ngSrPfRtWKTh2jrWZ8VWHqDhE",
  "key4": "2KWFv8VN8qQ1paMhH6V3rzC6Q2DA4sJUT1RFLj142DDL9os5718ApvcNvPEAK8g1SRfa2dZwAvYakKBtztk74SDk",
  "key5": "42rV6XSiv8fP1B9v1W5ycEWcTdGxjLAnG4ooRFVUgLfPNSwpN9Y19ZyS4vWZuyudoNTCyYYPLUY3tH7XeHvMpC2C",
  "key6": "4iTNNnaimFZ1HYKzHdukyafhMeAtwrnKPvmJzMtPR19h73xhpC8Tz3Y5jT636zcFTqErYz7xah4NZcVG9uPQpdDS",
  "key7": "3CS4zJkfiyRqAcZGGyTQHbfJxXkdstd97FzjrpJuM56GhSuvswusrYmzSzd6oyWscZxYhWYxBc451Yq7aXrpfBG7",
  "key8": "LQKvgAjFdraohgUwbM81ZVRjyqhvkwKtF2mTSbnk3mXEvfRNUV3ZvHa8Hn4Hh6dTzjxn6nwcg5dCq3KoAW7DvrC",
  "key9": "3PRu7f7D8TCDdHvqHu5v266D7qirXXQv3Sp9Ge4M7MMJwECHmRWitbbWveJo2tdwuhpHPTmQ9Ar9abQzCDzMuEwa",
  "key10": "4dQyboqiEL7rtjQ4ezBCJJfU7KLwCdLMPqb2TDkVqUjmiHejYf8uHg8D9SWXXmJoCGPWavJyRiRsphfLyKTi7eXF",
  "key11": "3rr5zP12q3KsSgqoVWK5UaoGNyTRLjygrwMoL27SqtQM1kmAyWEmY5q1FRAoyc5DTS7zetBwn4zNi8F1aKsdyKmP",
  "key12": "29u2UnWTLzzBDTQ7bmPU6vtMHk9gXAb2d2yF8nPcizmtNMX5661htjPZM3prFdcbLzkMY8FFtYvgxqUsQJv9TtMy",
  "key13": "63kn9c9qVhRWT86e5sarL1B2ahDSgFWbVfHUzTTdy5Qs58C6YXQkX9uvk5qZT4UHVzcptKQeSc5Ly4m8oib411pG",
  "key14": "2xfco6TcqHPrGMcr9P4EskMfrMfFy3NhnrqyTwDrGJkkUPwYdy49xKTdFH53taGdjaNB7U4VdwnfEPBoApSvaYvN",
  "key15": "9Z83sDr6yeQ5sGRsDMiEAzTEmn448H6VvRqKksEHPgf6MRjC3UiRLnkNTPoiFPJHQXmbHMAAtAs6QkAqNMgniJc",
  "key16": "3rwD3fkF2nkEXs2q65V28BLok88o8wkUh7uGkKKo18Ak5dtabkBfH6U6BDssS4j1fr2skfSQMbMDSq19n7LBKviA",
  "key17": "SbCqh4BN2mBm75oRowxwBBmFCHgyTt8WBjNwvTeezSVbnNg1U9PCxbCzipTh28uxh4a1342KniwouXUQyDiErrf",
  "key18": "4m57Eq2rxvWNgFhoSLWZBjmq7ozMqPJcwvuLkdvJ1pQtAwAnKaBG9GCybCACpEHgeNfBjBh3aVtg1fvCuzC8tjjx",
  "key19": "4J1MFN5dq5niB3pNKsczPsapfWb4rUG66fYREso44v8PpKLnjGb3U9N3EciFoa7BVNTqnrL7vuDZSF1U6a6qLDnZ",
  "key20": "43kymE3nm1WNisV7sxEgSC3xuZt1tYJSxWzdB2xTeJcaJS3vHwYdhPRVtYBqGiajcNSR9pYsqb9Dz9SMEesXanp2",
  "key21": "YUGXVaXkgpoFELKDQr8zTN9T7gWNPebXhdLonc5EWMqqCbRYnKHtYA2hVeYV8eN7giyV1uZPZpjbnuSYc2oakhq",
  "key22": "2fp6XbpBSjE4QKYERQEXgcrWDeuwxpc2iXZqxKht6Se5JFeV6g84C7vGBvoSjcE1Pzbr9M4SST2MpDk2e8NT7khF",
  "key23": "5Szg6hBcFWKoDu25hKtZLqp9FEaL2gKVyoSoj85LQBPcBjyDFipH8mfdKUqdMn4CABXzrgaJbeUuFvMVQUU7PCy9",
  "key24": "4qSn6VPrPtQJxz9QKphL1Y1A5nVRRGeFhEGDSshUmjisS4cFnNRzWfeDLq6tPioPhXPTa8mUsTWzVrqqpDaArNCy",
  "key25": "2jeJj2hX3JofDXLwc5atG5WEkw93yvKNRNUcmt9QiNWrsrqJ717KrVyp6wmPwzUkquBG4cof5eFtPvhKJw4u5stq",
  "key26": "5dSHtLXgnWVqv8sepxDxDDC4TPb6Zk5PmZ965aoUpLpBsgQ2UHW8mcG1ELwbikwFxGZS1QBU1UzgVyJ6SJbYpLLs",
  "key27": "5SoboExxBL3RZwR6wQ35DrJtXFxnKd9M2gXPKd174LrCfXzX6xDkjsbhmTeDgG14Aoub1SkSzNv8d7xwAwgNxf6q",
  "key28": "2vMAMReeTh8C8akPGMQWvqeYeATixNu35HwGUo7cWNqss19Nm6U9QWP5EFBvLSu9H6LB4J7DVn7NsAtKm8LWYwgB",
  "key29": "31Fs4yBG4jfff2q2nVAQGhwC5U6LP5UFF1t3oBpevE8KbSG8mK4qruymJYXeXf2U3GSzyKhQXq4orforYMGcybB3",
  "key30": "5tG3DShVETWuunpeVFss75jm1QBxtmdW8N7B9KQsyH1Dp72dWpF54EGwxSngQesd4DvZJff4tXFqqt9PjGksRhPH",
  "key31": "5uuL24vm7S4ffyQfywTNW6T8zJJPpQV6T1mZXp6LQAPfvJQyWmpVe14aKuwdBRvqRgckJg1MBnKyPYbAqjSSoLMj",
  "key32": "3bCF2HspndhEcfCkfDiC4SX5Q475EPovyzR3QEew3r9B7bHp8JvfdXfde8xKiNweo7Zt3AKfV9wANK5dNVP57Ssy",
  "key33": "eaEHTKbCE9vPyuefWv6QuC6mfG6XykN2a7v2wXdV9C2vSJiMudCfGHXrV4RjmC3CFeZrdSZbKEtu67h485e6xcb",
  "key34": "3Y5NHCxnGNLGGToB8qAR5YPoAU6AWigMCCzb66qC6bAQe7v4XSptJZb1VYJNBzRS55mx3a9GvphE9wBPT3GskLZJ",
  "key35": "YzAw7N4jcsTsZpAKvMNAYXGzzJkSBdvSJVxmmmuQQX4kwpdjGicdGmCuA2i2vLiHBcVrtCdyKduHXSzkERpMuqC",
  "key36": "4NXFn9dJCYtrnK4dpXMyetjQwFGMG5E7SJUdwWnraRtG2aGjz5YLDhpi2ZQPgxJPoafxhYycGBnKQhk2qpxemGyw",
  "key37": "2EG5rAviwayA9F5ZJ4JJBGFxASSZ97p23E9LYqQwhzMtd4UBk273SRjqpf9QDYAEJpSuTahg685GaAoFQpekrH5N",
  "key38": "4JbHSLE8guxqmRXXgQ3pHuRhksFuBEknn38crud5HVQ9mmxncEmPkSkJzPGzKweZr3kVVFindMtQBqokwc5HcuuW"
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
