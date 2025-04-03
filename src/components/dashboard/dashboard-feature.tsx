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
    "2Nf71K2a3XqiauVA87zRpoRdv85fKmbfwPXTbRTkt28U7L7AJYPWU6tupi6EP9zhqWhJQLF4zKhc32J8hvsvaCBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duTaB85TWGnxDMdg5tKJvQ22giAA2oZCcwSZz5i5CjTAsmvAYfZPKC1sGzEsu93vmK72CwERtURsKTPNFzS3Yvb",
  "key1": "5WqDH2vQfm7hBgexjs4uoca4rkPZ8V2YBjgWrBeTAfSZ6VVsh8H2AVxt97aXemf5X254mpXxmz1UtyFa7RNTfG7s",
  "key2": "31iR1YZ8dYdyr9izMUhhL1sd76RdvTTkbyzdBH6omuKvV7o3tLGoGHmKwa7W76xsiRcqJnzJ1oAVNB2oK93mZuzF",
  "key3": "4tKLSeVFEbh5iBWJLS2cGCw6sYZJg6veR6muYyuQEP9LND8uKhm33eZMWSpRFYpc5nmA1oqdD9i8H729MZ8mD18q",
  "key4": "5gk81vPCus1T76ECG47NVuG8DPFTCm9ZypWAsvqhgRXrW3W496cmzFPE9bcG3xiEaSWkYsPg9E16ZZeSqBHfBLiC",
  "key5": "3Wo6AykCPKmr7w4AVoTMgzQ8Q3gFd5EetSsSajeMQkLdHDvanWdGuXqQuw7tsueqeqZwv2dRY8V9sneziPeXD8zF",
  "key6": "2sHgmFFyPuk4RP3psqrAg2SKTsHE5nVH76fB1nzCZPqBd4dLkSFGqZQcLQMoCRaXhxZe9Q7GsDNUmJDJkgbz34wG",
  "key7": "b4c4N3psUEXF9WCuPbTcfdpw5Uy2w2fsF2kPX5dkKUy11yXs5kcmRSwPueM6guWHYnhVCfFVuqPuBm89w2PKZqT",
  "key8": "KG5iE9edRNSXRUrNsdkF1zWvRFdk2YZ82oL2YRrbuv21PKSh74jkuPrXugxAjs9qDUeCHH16tAwkXfgjBn29RVR",
  "key9": "4pdioNFNs6c6xHKYMSaRSVsKLPw3DeceYSBKXAgbBCLqJbafqzs5S2anWPve61x9ZWz5rhowmf6eEiBmYXuvYHMr",
  "key10": "52zxsnpQUt3JQzDnmpbaMTSmjexX6PsxL2rskvNF1fwgBjcsCCFkhUYRh5W75R44TBN1MHBTAgd1cHQzot4eZEFJ",
  "key11": "m9Tzrik9fLyhG7TJJRTqcEgYtuaZdoYpppsbXE45YS7vpgAiuPkX42Xg3ourrFbKf72X4RzMpqu95VFnrjpFHrs",
  "key12": "2GtAjwdDuJxowRnTuDSjesoRQHs5u5aZafDKML7aK8gQScTKUaqfZqFcUSvhpNeUwgSmUaJETTXbNRmb5VppVTi",
  "key13": "Ga3q6emTgirjx5E5UdCU9riJwr59gwLoieSECnA5Wbq1rkz1pfFKuE1sWmexWVgrLK8ow4xeqvZ3kfK3h5osMQi",
  "key14": "EfmfK2FNX2i93oeYB7EqTMdgV77ZMZ2tueBySaPjgKvRxiNBtPNSwj4UqMPaohidfNVq7jk2RCmnGZeu7dzje6q",
  "key15": "2T8pww5nBZYCSQr6s43mRFtvc54vDT13UrarMccU2xVEgzQBRFeZjAuA9UzNXz8Sk2EZLEQz3GsYAQ3Uj9tLPNbV",
  "key16": "5kqS7tcUcWyPjahaiGbofZbXPQzPJbwzzZRmyUDyqz5Rh95LqNoEev4ucSkBHESpb4RvkRkdu4UMLUYvdHR7Gmhx",
  "key17": "5ZA8MALhx5xt9GwtudEBAWtvjQ2gdGteewKtczepx86WHkCwJnprfCm2eXuxBKgLKuPjz4sEwh7vx1iVuBPAQtJg",
  "key18": "MLMMXn6tirCa7NDKpRvp9v3c2FtsuJA5NWHgpvqTgQNcAGoCffB5JmM2X7XndJrGDJ1F9fJft5bHJ9gh9j7jrAe",
  "key19": "4s98TXuYJJUuKtPbxGxhZbCVse2K5SDpieENLCALangKqbyAJAbLT7YqGZBFgWhn1KMBSZ6dKoLhQAytXc92hzdz",
  "key20": "3YLqKiEdA6DtrCP5tDgmcupz7YFYEP5FCpGQWMJwqH8AbkRA8ZfvELr178m8TY51TTP71AE4WRy3vDZeTwMkC5nH",
  "key21": "bCQy2xpuak68uwErNSdWjekspDfqh9YZQPTMR72kFSjU2hzUEWqkhy51fXDZMrR8pzneSSa4eEhGT3eyRfUZNkf",
  "key22": "4CwLjoKdavbpnh8RD6egCH5NXRe73NruZCMdRBnNt88soUEaXnKJScN6Y9tUqnTjcg1gJYfqp5hkwxQ8mRaNrvmu",
  "key23": "2UKL6JRHGDWT6AoPfyL7zJU2eBWdvtFkfiCFk1euT6n6gwnZ43ucCHrFAXkGdLcQeFkvKrXd9RWb2dSX7fpVH31t",
  "key24": "3JAoksz3LJLep18SqnhUJzy8oHvTF2knx5TEnUXyGLJP5FqRRqtjBDdd38CDBuV7UCAi9RhnaDMZ6xcDyjPKKYCz",
  "key25": "23p3vkDoT8BvRdXBKwtErNtBY5Xg2hvXCHMKCHfjWfBFDt6zfbSbzWwHQniN5NmfBdnT1VStMHNq94A4FJBqTW6K",
  "key26": "E8bDW3aLu1EbkBx98P5Kaw2MubKx6Z4MA8UxRoycph554gUDU8ZDb8xGSSTWu3afymer7ahymA58Hz1etveZeJE",
  "key27": "dTTgEyd7ApoQr8Qd7PhYRzYQsCNmfMpjtprsqiyCBCHhuo8eZ1VjBVaGKDmm6CU7MFebmFb8NbAihYEExroBMDS",
  "key28": "rwfA6TxWZdZvzQVTNUwjhV32XMAB2CtyRkd46ASF26Ld3QLe5mtaR8t7jmbpdn52UtxiD8XwzWLAuvMjuHnq6Hu",
  "key29": "4E7Ssg443rLi3TFxPG6ohVJVBnHvPKizuJmrNk81jUkGFkReeWcTk8fbF1okSHSAsEes3kuLHKcHmWQBqJKFbBk8",
  "key30": "2ZmoFwoKhG9vEnKSLcxwuUKqjyCGT4hs6NrKa8cKTARDK7owoH8CcNQe4tCfbPr4PBUKJJZfNfw2vqQwNCQsLQyA",
  "key31": "4qmw6oeAu1fDY4AwFLGNpoNZZHNCM415YwgQrknA4qq2hjKKUK7FfNpMpGfhtMQAqfZhrb7tsWcTsGm4jEUHcaTa",
  "key32": "5No4KZSWTaSRyPZqxYRiaDSRvKeADYuDo1es2zdCfkEkS9KGDfcvXPRqru6iEF974C8f6K2iy9nQkWdnXhZcoKXU",
  "key33": "3nwNzYAG2hrjXvpCdpGQ3gM2h1kRotZrPdnhK6Qo9Gvvt9iMwnrd7gKWVm9mM47n9b8TtQ9dnrggDJsEooPXmqLw",
  "key34": "4adVBuEbeFexkuGiNSpQo8TFHiY6x6uVrvxh8JSgePJWU9roXgVzot8njM2BxLanfRx4E5WwMMotZYn6ZP7TE6pc",
  "key35": "2acyMBETjn3RjZUUK7ftR42X6DeE4iTkdnGFCVdJcBS25oRXt3h43S1k1wQuNNCaEjAwkxrB7Li1bj6NXtD3SX7B",
  "key36": "52hwLdt7Mqqph3QT1t4XotLS6k1YPSvQwPnRKkzqxUhJUzq2SfokL4k4rvG9tnq25bBzFuT4qBZs3d7yc2fKBkLk",
  "key37": "GNkba3zDznnRDizW6kGfULXg3PFNaffLH6cxFSQ4EL6ajgzgap9oFrB4T3YBm6WrXxd31oMLqyqNC3FbUtL8oQg",
  "key38": "1hJ6MeYg5peyqpWEg5WhbHDgoU5qHtp54hBQaxFA4VocmTbgtfwS6EtAaCwr9F2sGtqq2FviYMYDd8NP5SsDGCE",
  "key39": "37Ze517HbHYTSiHKtjMUkL4WCSx7fmbYiQp6SyBsUEcugCRdABjtut8US3va42QsyceSRnPyNwuHbUYx6TqQgBmU",
  "key40": "3MDCgxiFb8zVEwwM6dYdCddGZhLnGusu4n3S4GsUXbfyjRuyuZZfpoAB2yEpw9AcaSqnsnxn1SWhiLdCUZpnRiZr",
  "key41": "5PiLDFvrrFdbwACYE7SRWrdV76A6Z2npfqTm3oxgtQNssztmP1vyh4CzKRyqMmDe4F3Qp7fE923b33SPFpRsX1DZ"
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
