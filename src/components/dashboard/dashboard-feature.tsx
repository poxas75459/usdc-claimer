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
    "3ZoQQ4eANtTGg49AunEtaVhjigufVTNWGDCm2EfyineqbfDSrS9Hc1bGjmbLgb4Zskho2ffqoyyHTYkiayELscAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YV5Gp4hU5yb4qSk1iNnd6Vxm3BPhYnYfKMKzsTuGMTz9Yfs7nYQEXrJt6dWJPgwurJi27kjarHsLyU6WcwbZpQu",
  "key1": "3Kh4zcogKrBaMx5U7fZuVE5h8ABL5dWiogeeeZz2jbQTQet4Rzsgpo2bsWTCfjqnbPDwyQddqDYqEu81puYEszTf",
  "key2": "2SNrVN49sHJEH71sczAkGGiSBbuRcKwAARvu7MjFTo7tKuxt9f7hCWLZwSJUxtpm7HFTRzXfeNM3dwSp4RtkE3QT",
  "key3": "tepC7Fr5r18zAsgz87DrjLr3XPJ55PoTGZYb8TL7vxAb8gPkVmLULQiqsDic41hTgVToGnFWnSL1qzVAKoyZwL6",
  "key4": "2B6SktHtgq2kEYvd57tW21RbhHpozNUEKyTVMVDJVEiBUQTKdzzbRXRb1oYtcMK9Zt35e4R2qpQAW1EBpj1jiM3a",
  "key5": "63y3YULrEPjdBsvExZCWFzPH79Ms5tLb8BwZXE8fTTEJBnSbXc4BciHiTUUon9NBXmkfu4kcLWkSxyf13inGzVPB",
  "key6": "4HDfRMMK4jfarJhYqyWNfRxk8VA4X5D856thDfKu4PW432CNLxamZTXuWTBgCdLNbWApo9qFMhhaQWPC9oBtn4Tb",
  "key7": "299bNVGHJos5EbVf5dWzhmm68zYBRhKxQRTQojqPf3682CspY6JyhyDHwtWojyj6SgENgPFJgviBXNB3LHarJT7G",
  "key8": "a3oTFEf93zmHrKvbYMRdJ1FD6aARqJTXTGA82MWwXQYY9iee39hMBZ9Wwn19WjyuH4HbtbHxbqDjHQxNkS2wm3N",
  "key9": "53JN32vx2jFfuAzoda1MkJSAFXf2xYj9m1KxBUJwHNeYj3BnkrzRACKwoQEkRWQjzDTWhv7ZvXEqi1q2jnPArb46",
  "key10": "7yEWGqc1e6BY1Pv9JuLVjTGcbVgYExs2yiaWov3BHs8dT23YrNyhmbPwnFNWvDVSiYCwVMBCjXorDSJy7QSW1S1",
  "key11": "4w9R6QniJKQzDjZ35y6KLiWdTczuV4t6qj6ErJE9U75cemwv6nqL7wDx6keNxSFxvBG6qbFzgBrZQ1F2snDWxmu",
  "key12": "dhJt86BqVqV699JasQt7n9hLUamDoHVXNDyJrPbwDX3BDbo1QAEMuRDfiFW1jcTxhwoMt4hk14gSDXUWZC4D5qK",
  "key13": "3EfpCBDinRYgC6urt3RTpVTNUV32V6j6xoZ9vmHEWYfY7DXY2Bh7g7cVDmWap4Jh5YHBLPiQ4eJJrUYWZewTsGx4",
  "key14": "eTZ2boXFRpXeZkNcmLU8v84YsgD2zXF65HA9MsEFBGDk7iYZadTfMA73iMoec721TUHn6BnU8fpKRfQuito1mWb",
  "key15": "3RHeyFR4NsCrJpPtnLiaNYw2MfUb6facM5byEBYhgng8E84obEVAoYkpPsUmcAAMAhYTCDAsfKCZbYZjCNF9WwY1",
  "key16": "XnWep3EL481jQ475fuHkJEbonotxw6tSoqKR9hkPK16fTnx4wV9K1WwM9TLoMDNwGFXHChZgaUJQLkTeNunrXVa",
  "key17": "5TQdou6M6MNWPZXzW2CQsbk32FWK8urR2tNLsVqqDcSiWFd3r89CHsa7HKDKGZ8U2EDrDYvGzKmTg7p1w6acfRAf",
  "key18": "4aDnZFqUhx5ef731AoXUahtNoLgWRpWCVf5FfskhrGkJLYzhdDjRvJ8NG23gpzy7jkrK5jwzC8xUncoPEBRbWSmb",
  "key19": "5jTCz5pXLXYxwPjA43TG7MNnBjUYkLsv7sq1y8k3sQEaDFyyqSWxW4xbjmYBSb4ANH8AHhNtVXDUQRyKc6GnX1gX",
  "key20": "4fgZGPvQLnPw9JNFifcLqEtCGQ3FuQff5atpf12HkeZPTjJrTfnZb5n6LozBDFGCERhrCZYYgFsnTbvXK9TjpRbf",
  "key21": "F1DQfmogbkuX9TB118mBFtctQCjkejvAzn5WKznceQoGggAXi6nRaKBR2fvgCVgbwbn8RPfsEppq9Ftsv5ds6no",
  "key22": "53Q1k2qvD8sbCV3BaGu4DF8ZZkg1K33pbdqg3EzENkXa41YMRL5KTEMhUFHbY2kkZKv8BgSxfK9a8CWD8qqyb2bW",
  "key23": "3aaFNT29MTeHXEsBDzQFHkjzWsnJPiCabNJMGyesFsEnvhHnepia8TWSn6qjht8A5cVvXEaa5BKzr9cYwjddFzeN",
  "key24": "1vQDBinbuDJFk7kmQhAC2g8JY7xg5nnAHZQ61PhF5h7Adh7gbkM2ddqf5hKKfMZE82wLmekp9QEkX3fJQ8no5Cz",
  "key25": "5MQNra1nqFYwXz4kwSAkvWnxbP4ar2wZGWqofBG27QpG8oU8f3UTRNMxyqjyCEmTJsGmuwTMrUPsUi9oq9Pknm15",
  "key26": "58t6CARwvPbRfF1FcU22oCMJ13ekv791YHGaeyp2LU5SiAGq4bAC6xwTBTTt3QjsWQrip2mWBFRhZCZmivGrFPov",
  "key27": "2LaLsiwGuHMXzY49RPALVkoGh8RDX4P4LGV9ZZ3F6hTjzQ45c9Aw35wF9uhBdWYjYav9s2j1NZ1pTXe9NCLk8EHg",
  "key28": "2uTm4LMY1fxrXXfT5rmwrAiomQuJk28NWmrmeMVbCjvLYqztTtQojLzVj3vyvasBmkVx6P9CuWTRuBvVw7WG6c4G",
  "key29": "4zNtjgrxmMR5LnwUJVgGWEvYm23C2VwusTwDdZ3Ny1mkuDu2USp8sCykCTo5ba77sZmaviUHX8JAjVo4NhzbWCV9",
  "key30": "4o3TZ9SM4vYPEtqJpDDBpYA5Gu1xtMyd85e2vExckESWdzZovhsP74YRSw8PSPNbDzm972kjEEzxm27Ceuo7QqxL"
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
