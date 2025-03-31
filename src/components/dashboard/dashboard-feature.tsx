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
    "xRt88Sw8F6cMtfJgsab3BZNGevipdUPNQAVxap7gfuQ9nodofXZEpVkswiKiNeSwjAw2QRn1qW7GP6ydEKAshPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qb7mWmzNAsABMr3Mi1BpVYjbsWgLucDDha8xn8pbGtcHci8gv1Zh1MvS2Rr2zVWU3VTMkwnMvKj9rXX5p5XXpr",
  "key1": "5iCoVosRWPF5WoBXDddpuaM2Fk5rCv7SGFkSuzvJBZ6cmPXiASMJ6aMHGtvzm6Tm6sXuWSNAhpRLM2sQ4qpYXTmA",
  "key2": "XeoVSAH4cxdBKpxR8dpK5syT4mxJ2ykJCVTuqa4WXFtiMHw54pebi4cr82vaSufbfdkBXi5c8t3qBtuPzBrfsy2",
  "key3": "5KnQCJQduCChBqLeFKfaEVjDZ8y5KWQttcm84uaQJbNkzx7b5SBnK6EJ4LcfAKuoyBAXpNK1HKMUYo5PoNypTFWS",
  "key4": "QEyvLe4ud9JSRadiXauTVPG8yoK4XtkKvWQXTXm3QNsKv81mEzfkhZ3Q1i78PYrcZwQrCuhZeyk23sKfnKufuKf",
  "key5": "5CduXXaqSQQ1w37fqcyh53BQcKybgrQMzkDoPg81G2qJDqhKpxzNM6czRgiwUSmY7zXg3vZEjokUc961nDxmumm1",
  "key6": "2xa99DPH7jcVo3pAtoRytWwGBv78g4GNMjML9Z4cC6zJcbGwbJ9SaDRpKEcVoWQ7mCL8vTQGFDkCXkKrnEDsJKPt",
  "key7": "5QNCZ3riJxqLYs5Jva4wj6BzHT7GxDC14BM5KjB1zXQT9QVibSC3p1wmTgVg8du1zLjRyjF4gC2Fc6ckm3wm3BjE",
  "key8": "33ByMEDJDQYAHzqQ3WxzZ3Z6rCvdxke7XWiRr94E3Y1GCDArmknJ9bVzXo16DEKUg9fBrJKRgyWadEzKaYnBVc3G",
  "key9": "3xUFFdE68UBxaw3KZnscYjAHUVT1KQ3JxVBj7z8suAzqsPPsmAzjeuX85bbWAUhCz94Rg6U6Yw33agn4KYErSdjP",
  "key10": "362Zqx45tRzrdgifdhVMN3f3tFHwwdUVyAa5DcaQKSx1PKTUAUbW6JzWmXCxgKkYx4tUJFarbZkVn25tR9Dnaaum",
  "key11": "2YtYAvVCccKi4LPXmoxurSUqdnzGunXUFcsUWRqErqyq5bgKFwGPBTYYEjkg17ry8GNuGUtJr41AioxvTEraXzx2",
  "key12": "3mehhqxV4ESs1FdLH5JEaifgyAPy3iLtoztDyNiKBgvRiUNC9dxpaAnUiVhFBN8Y4UVdnU4hWoJVeVhT6RdqPor1",
  "key13": "67Q9HUkTDf6DLifyxEP1iws7jmnzy4X5wgya1vm4VcdrGDwEpCMAZ4XUvAkgn6FUPPZgcfDe7S3kr5Lu5V9rxNFC",
  "key14": "3UXgAfHHxmVJxXnPm6d4tcmJR5KXYXCo8qS3Dmdtj3hyzCRspKLKsmckUDVy27LzepjBwxkHjgC4NpsWraagJeq1",
  "key15": "2zmRm7UrcZvrwZvR8nEpJ3aXSqDbJLzab2XjPJRTFDLZm9nbokMhrtvpWQbM8wH2wWem8ZAABLYD4NQKc7bNHkvo",
  "key16": "4JsMi31PXKLxqWKjBKTtQiCGCmgs6eRMStS2bkmMEDwNX2B7DXBTqGo5jikc1z5q6NEys3q2nCkN9sT4KhKDU1jU",
  "key17": "3ZdwmsHGg29EcZ3ALwZKJuAP1UEi57PJSiM2ce82dMAX8abz7afbb73rYYQ6Bc1agYxui7WE16sXA5PQqHjfEaHh",
  "key18": "5x1exS3XA5MKWzEug8B9KLecB8H9Wb6WDzbyqDPjxNvVBnjtKToxXgjv838ebqssbDkSScxNP1sLF3hvrSS13U2u",
  "key19": "3uZEZ5Dk3uUgd7hbeCwNejidCbUQr4wTGQHBQTime44QHhJpqG4aZVQo9RdTuWfJ3XjSsbyknERPK3XMwFYEoYDA",
  "key20": "qZ3ejDXm5kjdQgjH1pi8v62x3BoKB7n6qmswNgNN6MDinCKErK5HLBfqiSfCVhVeiNBonwwU73NzFYTgNdyJq7n",
  "key21": "3DspPRzWNAaYkCWRAbByM4FbGzVNzt5NMoMrPzohwjoGnyHLy7x5boKam46M9FeFAKnZpiBc1puNZu42L4z9Hm8v",
  "key22": "K8kYpVjHCxksLRsinoe5Wz594PiHA316B2QUKfzmuqrZofbssuQJ7RXMKsZtsHeYmDnqPcw815C6fPHHivYgd62",
  "key23": "2s2mbGwo1cHG41o198n4BYp48Xtjfy13AX8N7c2Cizg1eZiuj1sUGqTWysgsGMWGjXfb2iZmt3Gx7YHquP1nHWks",
  "key24": "774yXVNVhEfbNwGXVsmrQFPqYGFiqPCKCm5BVPnDevUsanT3AfEWQ99Nshh6SfA7A44uEmzqhaaGtZeJBW72pUs",
  "key25": "3zo9APkxCQDPWMH4o3CjkPDYo79M6vSuJDre1QkdxS7oHXWPpn24C2Z1CFfgUV8MXppphgXSAhr6ft6VVLiBP5om",
  "key26": "pVQ3HwocQ89TFT16i6eWocA62Zq1vX2ysaLapgkFNoDrHKK5wuaGWH9VWpcZNWSs7ZMGDiMKteAFCwobzwUpFsv",
  "key27": "5tUuGcKdLBnF2DV8mMASHLSpsp8qvQjRfFuUhWNe4TDKPmbyoAvFxFenuX9q5Gs4C9kcQhvtMCvAt1wUgZgDLHPp",
  "key28": "217PRiUZG2gndLxd1juAoLYPQVejRhLXd9VodCoFcqHw1tDY1DjU4vP8B32SqfxcsDexT1vFcXXYRsDD1h7AM1fs",
  "key29": "5eWuUt3MQ9uwLmcYaoWTjmLy8SuAsUT2p8gsJ4NKvCrRVr6KwMy21N8uKMQZNYh9Y6XTMnMS4Mp8V4AHVJw8LNyy",
  "key30": "4M5YAV7G34GXt41Pqkivwbs2RYwXa9JSmnpq93uoBukfAjna52BCirrwGS1FqU7t7KrdcssVAC6gmKkJDXV1ZzpW",
  "key31": "6jkPAK4MPu4iuqnHZQnF6yKBRXoXJzixgQePWiTTvYv9EfgKXakFZVuC7Tgon9RhkUT3NFvTmVbyTReY4HB4UTq",
  "key32": "96wrpSi3Y29Vpd6ztC1Z59EUZYEyFgPNEcWfMqknP4NoPPgc4kE9fgR3K6cZBx74AjWR45fG7jXN1x2okB73aHd",
  "key33": "57Htenmt6e1t4ZTSsc2ntmmVoe5wYYFvrv3zvrSXtxiW5nyZHyeAfeSzoknyGhvnLFaesxBV5rywFoJQGrCTALmh",
  "key34": "4QF4fWBvtVEisrcKYZJwrxYRS4wQzWXm3p7FgoofjrvXAM1YRPQGd6uddipp5QZdi1hTBEfvgbtnkZ7KZAGLRLoL",
  "key35": "2VrVHbG1oPmQa7qUcteyw4Y8FqwsJjHxAevmDMZkgrRBCUCd1RWsckbNyQ5iv9bAMg1ikAXooc7zNwDeU2q3RjZB",
  "key36": "4GPNq8DuH7rg2Zdgv4SXwF3CQugAuENX81Hrz3JWPVBZ8aCKKM8oXHk49m6zJC4CG9EySbhu8FGj7henQJBBuT9X",
  "key37": "2ZWns5HPcM6xpLMEAnv96n3dDCSJkzCegJ4irX5ZbvLQn2osqGxFTK1pCy69pYpKGDBt7qPBPnvoXRdcv9dLRj3D",
  "key38": "B9vpccwxjz1H1gmxR1Nd8XCP5DrY5SeSxdbhVzVz3RnNGj5rzHqfq9PZTuABwBYw56bfCkFWqfWdzbhUur1txuC",
  "key39": "2ze3d6si7roCXz6oxw9NJUvuqmCCsNGzwQHk361DX6xJzg2ZrKyrns37dwfVf6gzYHThyo8sZUaAjm88uaKEPJ47",
  "key40": "4PEMbJBQZGHviWn19yT5gnj3n5pk676MyWUik971gJgK1868zVgKRZmQ5o3Md2i4Aze57x1DYKe9K2dB9JfL3Zak",
  "key41": "9fnEn7D79Zhi5dqnEMibFK71D6gx9DnZNetcCrLfDrJus3EDyG3WaPcAz6GSX1sN5nFgqodfpmmQV7cPmNz7b1T",
  "key42": "2NM6XcFWt3FRPcLsZS8QFHqo1BDVQtL2wf7z8SbiqCSK23ahU1biJXkg1YfVShz3qzBpkM2NiFifzhFSJBgntyZt",
  "key43": "4xW22sfpn8RFcTjEy9WucroNb5PkzxN1sfabgspeLURZEG22zhu6YuhERaYULi9n5FnnskHWPtzG1ixXBxUDVzuR",
  "key44": "3vetzQKkH1W1h23SpCnsSHNSF1b8xrhWMituimGuwA9iVv6iseqipAD9wtuLWhMm2SFg7FTZ24oHqcWDfZbty1Bc"
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
