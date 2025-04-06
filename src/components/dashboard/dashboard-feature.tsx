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
    "28rxDEsEtuzrtmKf7dhSfR24dstKx2yyw5brbUBvGtnBn42USoUHknyWJcfg3f8k7RUSQwnXUBC8MnQBpmkC5vjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYCwxa8Jb3eRRtf5NxMEGaQJZHuZy6ijD2zFMjnC9DiwWif2DfYpAAiJZTmf2YTuqfK59qLVSJXjBDgnVbq6EGi",
  "key1": "4AE93zcRaiNjSyt5M7cfc3ermffSU81tVpcs5A45wdgwbauDANFSXZVhftb7Y1z8XxhPQHA6aqwwotuR7avXWa8v",
  "key2": "64WxntENvajpozH2HMA5XBQGaqthkvTBdtco8BEkp6vnUUxEya8FQQ3eRGDvED1s81hGVzrNpkM8xuBDqDg5d8S9",
  "key3": "g5eZ9aaFcxrqHW6vg9eNUTZDxv3g8uLKyLcqyAqii5QLgytjXJN6zWZcre3NYqVydTUZDDdDeqiDANStmQkVDu4",
  "key4": "448QrSKs2g29aw6DHDWGMK4Yavd676MYtW423K6U6pc4uyQZGMmKuf96g7NMukWypYMpKE8epciLL5TbneuTUKee",
  "key5": "4mwDBJ63E7xogzQGHgLtjVdfPLDGMm6YprVzSKjSwoJhoDG9junEDNeJhrhwBsEaJyKjMtwfYjjFZMttQfJrCtrj",
  "key6": "3kkH3usqSXx1BbpVNwXJK7q2mNxDHM2CgYGZSWVa2VwQXn4rXhgGVVsqGp4FuuVBxXWmf7vPtSsoFvhsupYqn82v",
  "key7": "5izciY9xqpXrZLakRK1Wbqd33NjipYZj7vtryLA1FPRzktwRAwYtrKsnwmKAL9Dg2CAnb64JP7Kbjs3Ccp2pv6En",
  "key8": "3c2s7yGxtWMAMuAaBqGGbbWpJ2SFVKbJKB2ankSksRNiA4ZKDt5ip6Aqux8uXxmRs37YBZkAgHT48EafyxeCtx44",
  "key9": "2NasnKCJ7xBYmnxgjMLyDNCaoMvMQELXKwtgLzrnoTgXCxCUQSb7YeZrF7fDEYQM83t3eDai5oYV7KXmtFPykDyF",
  "key10": "2VerA9zm4EGQZgG5QNwB63BDrJoFPPVp2CnBZNB38iJXJz2nczZ3Mtk4CrFptrziAiB6Ux9CdXcK28LVnL2wzX3n",
  "key11": "4GAXDPA3X6bDyFBXdCXXA53qR9s9CMWp4EkP7e3WRnCmayKysJqvYxR8xuaPRCRN8dCVVeS7pbxeR6nsni4TDddj",
  "key12": "tsbsbNaKT91PSBXSUSGQLgcEB9Kv5m1NoQiDu6gQScEJit9U2Ddc1R8188vnKSG38TUtcE6ENMMrPR4otqryiAM",
  "key13": "2odctafiFoA5vAEQ8NXVEpRHgotgtKbuKJQm7cCgNLSYKJxTPnPhT1dGcS3PkBX7tRDvmrKMNPShFdxmWHuadt9d",
  "key14": "2X5S3iqydtA4Gp2Sd2sMhw4C3frhAd84KUKU2YqYH57S2PGv5eah3aMUzVMwsyAM4ZtpXJCqqHmyrtBjvQvMeK29",
  "key15": "5Qz6fH9Pm9Di2bF7grRpYoNLFWto6MvM3mxetz5c13uE5Ba9Ch5A1MH7swRf14wMhsgaWLXpRiCCxWo2KZkKA39r",
  "key16": "22cscGSrBDgaGzTfAaqN2cKxWP7TbBLKZFEfHzVtqrhKa9jQbL2hccCXzMFLdnUSJmUq2U1x4Ds8WtW3ZTnuPjJc",
  "key17": "4b9E3a7zhPycPmFMyr9ZmHjibwNUqwgrb8pe9GXGf4D91fVCLmPLsF5FM58m98jRPXe7nj6fVbxbBk9cVBAaY3ne",
  "key18": "5uwE3vBPHSiMbePFaMj9BaPkPaAnFrQekw5ch3uHBzPDaRAcBrLV5yf16m91gnAT2WJ8YbFhAQ1NiwHYNf4YTE5U",
  "key19": "4Df7AeL6GVQhufmH86Zgon8btywLcevjSN9fMiCvUhcG7TeAhuTC2ZnZvqRFmfGz2pd2b66fJmUhzuZF8k5BdidU",
  "key20": "2rWGChsAA4sjBPeXtt4gtE7MPxHsi3mc2RDGGEqCk3b3ERCURXXgLjvjxCpz9DwBNFxQp3Qefn61SFYFdw7KpXiE",
  "key21": "5xubXUx7M8SWgb2sduupDVFV7z2WisYJwKtPjbPwNU2vhLdaT7j4oh9nZJDZv4fYE33b91yVQgTprQpsHg4rkm1N",
  "key22": "4Egi9ep7d2Ti2zeaKcUkHPvxiiXPXQzV98XV2FyDrnbFsWvB91k4t1LJHEqf4hvMHGKJhv4FqSneCnf7bqxm1gNC",
  "key23": "2C93kXYsgSQs9XytmP657oa2e6wYMYngQPocjVe5f16WM6zDqJieoswJHpMLpP4vGJ88MUojYpjwz3cURT3HAzHa",
  "key24": "Yhj639dMn1re6F54uR2hjuFAXWFdchNR5QcRGTCMLg2TMZnuH7xftNb5wsbJRao4NPVXVofy1E2pQNoefoLNniC",
  "key25": "4rbh7jCipEZJGp7t5Cv9ewnYhCgnuXT5L9Ds9PJWj8dhgZ9jVb3J52V3zNBmjfu1RSVNJxz8X4oG3d2DaY4ePB8U",
  "key26": "eoKRVEUiwbQzPBVEM8QA9jbrGZ8mLdurxACmtcedAmmqecMcydsbpB9nvjsPkP6C6N78qsDiHmDVsGnQt6QHC1E",
  "key27": "D3Bkj8iPMxapVeZAXJCeUG5T1bpvCG75RgDQPJ1d6K4rFp8jHzskMhyD8ax8Mwco6DiMRYY4DnqJDmY873wV3rN",
  "key28": "48pH3aUvjDaK4xKghkghhD18nkBQrahuMtraHea3dV97bPNaGyabByo5anGD2G4QCaF8qnYYBiT1Kg6Nca7xryjR",
  "key29": "3fTb1XB5zpMXjL97hFBkZ5SFSZYFHyRR8yby7x9aCw26Diz1hx7B9dGmrCYnznrgJg7Pu1eVrr7xGAU99t2AQKKP",
  "key30": "2GdmZhPZUDmjb3CRoYBfNapHFfe7bUSbXhFVXpDrr6gzY28S4Pe2GonCawSdi6tTVuHoqYteUhezRBLqwHdJnSDC",
  "key31": "5YqnyCNhLy4a9HixwasWLnmPv2azRf4F9PRMxJQAQnY9or8SHEhg46KRJcTy9gCSKYAmhtsrCPDFvDCyFj6zqkK6",
  "key32": "ZzKYm3zAwL73VzCtkgDd5wYWZkCzNgfT1ztGh6x2SFx4PPMiD1iotmB8vUKdjHFZJ7JrWnHib5ABQtWruHhtGa6",
  "key33": "msvQ6bY8L4MW4nogLtqXvzV8CVQjLxxEJdcnf657uZzJ6FjTeZZAmwqGn2hjtLjsGn6WdNUQrjiJDcCMyHdye5C"
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
