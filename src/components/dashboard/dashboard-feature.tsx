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
    "PNmxcRMWoNEipojH327j7d7eW3X8U43QSB5zqgpc3iZNBChomoPNGBDzxdvo66v8qboh9xfLyj3UAJUChYduG1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AoL9TNR5gaxzKEuteqNLyd1mMpTqYzfMoiR4SUSCr9fPzGTesiJkbgveNxMpHThcZXXVCGhuzuTjSqToBeUAdAD",
  "key1": "5K1aykWmXtvetNm6wXLbXKNoa2Xmd2yDmdz17ZxFnXiPFecX3iCkNJjDJPs2nKV2BoDkXfhJYc81zjyPHMEYcn6D",
  "key2": "4YxngsSSzSs4SCwt4GteeMjKvBvXvM73jD6CdM875UTGEWJMcRf7FFqkMu9ZUQN5wAUb11qwC4brqnDhFJ8n86aF",
  "key3": "tdi4HbUrBzsEmeQ7WT2Ka7nWPvaZPgUHMgj53tJJyitpurBjr4q4UCfbzjhNP4DnB1qeA3N4cNu3CYidg41nWpv",
  "key4": "3fRpE3Hb6UeAPSxgNTrUeo1bpqaScyVM2YDtjDvMRf5Y4fEyejvmKnsFFqrCsBm4H26cLNo7jWgxq5pn1DjWoxDe",
  "key5": "5bFMNXeUNmg4CA1ZqVWEqFDmFmQaMjXi22iNgd2yMJLN3ez1bj4nqqVumVwJxAsreNBKWwkQwdsoj31fUPusxa53",
  "key6": "VfBNc6YYbk3FAtgRxX4uuFWSSYC8Z4uyzpWgyjP25SdkNLkqePjHGnSc48NsYNpdiRbrKaeKt6mUcXtjvde6tL1",
  "key7": "ZwAj2gMGe32iXsXDjQXAC5P8aCpVyCeFB7q2TBVR1UrDWj4M87nLaB5QF3M6ZevSA48WZx7UCJYsJ5qXhvrBmbC",
  "key8": "4emyhp7zT2qHDUj3XkEc97X9EoCBstFSDwZqkdc89fRf6V7QUGKvWEcwhF7Sw99zkpH5W2Mr8NfQmRycsMhD7fTG",
  "key9": "3wvJJXNkzUN7SDxK8Y6nJUwCw7Fgib2zkyQgAGA7yUZggZYRrwUHQG8pDAYVgd1LtaBuvRkP1P2itCgSJR8PjWv7",
  "key10": "2bGisgZF2tTeUqXtrRbqwgKCurhAMrpD9bQzLwtNP5bttr2VB7y5prEzNM8gDRMW3cD422NW638ETi9ZHeM2jZAG",
  "key11": "3kYhJynnf1qobGMfoVsLjwb8HKNawWwKBY5gMY5X2kaq6gfD4UodyU2iLRsPtFsV3kDpeUxzEtTfb6DFB3GjLX9Y",
  "key12": "27y49zu7dEg25wYwtNodrzH19ZubwbkbziBA7r9WjWkMoMtoyqRLpyA5qEqvsKAGicLrwgvduJdaT7z3yiYGX5Zo",
  "key13": "4yyRhtwBSqHec9viJo3zgmXdYw63zPqHV2WPFZZN482mMjAxrrtHDwuxs1U1BMHVhi9yQBcuwfhVeJg84cqHPjYn",
  "key14": "ZiSGhRMsr5G7zz2RREJqFAvCVE5njm7YkdWSwDxiC4gJatg2527iteR9w28Qgg8PZt25xMQbpz3kpKZv6XreiV8",
  "key15": "Qk8s18yN8FL8hxXFVAHFv7C5GhgUikLnhfeJpdvsDDmVpsNn2zdGk4RbiGkq7EMobWfrecZHLTAM4xco7cv8w3o",
  "key16": "4t3qUFPSA3YGEBBnG9sv7EyQKh3eTikn5WD4kU2xSjwvRUmr5TaMQqarNxbu9VehZXxnb5q8ufGQUfRP67hKSRpC",
  "key17": "3cNt1c7HL2t3xgpCgwvJqHrvibPfvfwSUz6mFUEYFy4mttbjNfLJxtpB9uhF8FUwPErrTnhBQvM2P7pamkmpzaCR",
  "key18": "4V5YHWTsHJ1yj3WEx3bi8BX5EmAtFjix3ZCayn57oDB5QLFfUEJUQm4c3AEXXqCxGCVs5ieJdiF2eshUCsUPqaTD",
  "key19": "3ZTEj8eC9Ees7xFM3QW9Cz5B9gKfphpev8x7HcUzoEN1WDMbz5U1QUnX85zv8VBy2Ua7M2Cyhf6axkRDY2FYKd6g",
  "key20": "5jKYpNgGMqpoYHsDfQyhnn2Bcxx8pvLEmc8fzdxpTSrbRAm7F3g7GwJiHm72h5HCqhKF1PNCqw4BD2UjAQ3wY4VK",
  "key21": "4ayFsd68AgvAzvLpKbE8Xmrw8Ssz7c4Hrj2hkUoCXfybdsFPQXS8RwtVRN4vLW6iD729jsMqLDprPQdXTnAcHqrA",
  "key22": "2hwW7Vso84CjkUbULpMAQLQanTdYD5RBogssNCRVUaPyi8KQxgyPLciS4nhQQZRAGcnA6WWpk943NC9WCnkCmptx",
  "key23": "3QUrfit4v2gJbDXjFYJmGJTKwL1UaS8FRoV7P1hc2A4FdraaGQd9yxb5tu1LW89SMCXGYyPyZzV4ABntgT7o3cDM",
  "key24": "3y2FGTP5sE3DjB9js6ZjuHAKbJayfNHByftm99Am1qj7rk9Vn57qGaqnq3tYE3KX42hUSoLJusoGr8jVVgmeMH2p",
  "key25": "4Bpm6i7DszvAf1NXmdHetnV8RX9RpxhBo5F5ibTQ23h6Hvz2FbimPK1zCdV5PcqDRj6HnR4qheMhVGyWgHjUS8kD",
  "key26": "4NTSw1mnSepgEyiudb4YwqwpGfgUiranTNpyfWCFaDRkv8UxkapDXrvnGSKHvXYycffcPdw7gWriGVMwA3reDDvQ",
  "key27": "5CpFoexCJ6bGfVYU5vyMqAWvEKoJ4Wvy5RjHutsQjSXerpYghkoxEp7zPxDXAf7uYVk4Se5FCJyzXitb1793w8Gn",
  "key28": "5F7rWScs96etUhLh3CHB1CJeRcZk1XzJsm1VFGs7vEcvfptpsSUorfHsxHoouUT4drtB8KnJqeMqfQbZtUrHrYps",
  "key29": "5Z9YgCiR2kNxVRNV9rtPmGiChEPnxGDyWLeAmZbwTUu5XNshTi8L2n7CeWGjhTMNtJGiG2o5PeR6ywemBMAzLGMX",
  "key30": "2YkYyRzDBJV9QvP1BLhvf5TV6gfjD8wYWBG7bmpAZJgkA13XzGh4nRCSDVi34Cd7XktpLw3XadbEWpZkKr8a1pgy",
  "key31": "QmfvLuvg5UGczddguD3Gcd7JERkkC3RfS253rJZGBoLP2XPC2hxwNLbvyHymzA5dDAe9B9R7rvvg8qWs9Y2RnTs",
  "key32": "2Ff1BPGA5t7fysSDcQNCNSTKr98QXJod7r7Lyj8DTB5Gqvg1cLG18oG4Rk5BLuyYGe72TNS2DMuCp5htaZCnt1EX",
  "key33": "2yeTm2f6BXapv3JxpsVUk7ekf1i4Q7x6uzM9UkumWxZKx2MQr4M5r8P7aMx7BsU4JwxPUj9FVNLDvievFJEk2VJ6",
  "key34": "5Toejec1dYoertkcoT6JG4Tbeftxcnt96S85VsPyPUuoEGWGksxXNbrPVCsctkvTQyQYVocP4X95ASLWXvoiX2hp",
  "key35": "zUxaSQKbbWp5sA5VJbyaKQjAYTdmpJPrf8fBUtoeUCng1NJeu24Q1BuAvXWX2rheNUxcBDChp5ZgEadbXpTdhJe",
  "key36": "2DdnLAmpDFyucCbBZzhHWXsaBqkTCdLdCNUehU4MNq5cPZLtRUUh2BsfWAPjKFYwCK25CBU24ks67UEs8fNtNd2q",
  "key37": "2BTbmc7r3mSTfhUcdvrZ2BRmfQ1mYMidTytUu8xP3n79zMFxemdqtU1aPwe6rMCzntUbCBKXZoBwG1G2hBoLcPVL"
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
