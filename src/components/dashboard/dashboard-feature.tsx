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
    "2UqgLoToXpprr2xpmPb87e7S5uWNNfuJx2zTWx3m48MhghgxPtArdghYDCTRRiy9aujAi4qWguvGrbEEPk25sJzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkhQQcZLyokgxX4zRyouzkFJ3V1maPF2GHkoRAhsxYkykX4vZZoSoLx5Tax3oqNs6bg21zvuKTBU3Ye6UB3Wzpd",
  "key1": "66cfCv6ZqN2UsRy2yxGSJjrfRRtpBgyJ88uJchCn2kD4AmRtpCdtv8TVi33ND6RF7pbwbpD245iDnyArRaMyuUpq",
  "key2": "23UC9vDHbHGKwfo1bT1g5AXnFvv6Az1Pf4TEMvXVJbj7t4qT4PqvKLikkeHbDL69WdwggUvnq7bx6TCPbQc1L6ya",
  "key3": "5htzP6iGmiq4Gw4eLTYffonSCeZeuRs4bfXDjx6oDSprU9AzXMB6pCSRyuG4Px7UqvH8ew7gHKRGubi9gHDEcXAV",
  "key4": "5g8xqK5tf5MJGYfs7KD6iMr66aSjtM4euqoWFhGPQCnuhN4qLFZs6xELaSXHhFoBU7QWjQrbvGfV3U1nyCsaTVUW",
  "key5": "3xhtNuWwPMvyzzjpaeZCfuRoCVo2hxCmQ4QLN9r4dTBPMkFBWeHRvyUZXpt2jFuWntUSNCE2awsfLj5KGAULy9jQ",
  "key6": "5EqA7riTQgWdnEhkn4Zb1EW3AbkaMZe8xjJQmJaxcZ9Hb5DmBTtuEtuUQEAruGySuoyBxJX69XTDHSjzYqex5HNu",
  "key7": "4KtHzkpGGR8qJeLpzNAY46AQucQeifLb884ewZZctTGSfpr1uwm6rSMWWM9kWpu6oDWxctDH1YHxefetevBfvo2D",
  "key8": "4bHvXnyw2NR31tu6zpZQgSVZCLd8DqcxcnziHBUbePnBbo8LRvppMKXCCCUb5ChQQZdy9xRf43mwcPZcPaR76ped",
  "key9": "4VEg6TUmcPVT3ui5uwmWc6QWqJvbFWAhgiQiwqmzxKQUNog54kCPnr8T6jMP9EPynuLTkcyZgKewvpbj9bigZ8uP",
  "key10": "4836NvpE72grYKkgVYfy8AXoQ1fVN4EmHK874ibjZqFKoZh3cp2p2d6JsC4CnNNyvJKhQXNqW2wryh2VTyiDptJF",
  "key11": "2hWSwv5CmASNjkBcmj2X59dZyA3tXyPFBiga5ziTxNCY8Y5iFioyDofdFPutpUpK2qVzqbCpNorGxnQJyFp6ZuMJ",
  "key12": "39mCjj156eRhSJj3BuUPYKLEiin28wmz4si2HQ2grreHivAK5eUGeM5uSUKZtyEAeUnJdfzLHmBdqSwNLD1sjWud",
  "key13": "2TMZFdBUXTFwbN7KjYVQ6vfM4udLVWKgNe61cgr1Tcem2Pr2CkgdL3r6RasoG8jgwR44Z6rBi9FdYgHh6UtnsDib",
  "key14": "37LqNLSwzQS3gq8FAU48o73yWNA5V1WEJrspFfKu9FrKKumkcwFwMvrvyoY2huEE4pJt2byedfSq8WHSbGuaBrmK",
  "key15": "3UHzUoTgJoQYFbTC6sqpFeCE92iY3M1Cp7wWUd384wo8UfokgBeMv9nku1n7Nr6fSLc3UjNTYud6Q3Z6vqqwKsFc",
  "key16": "2i11JBzo2G51z8QULeP2JPPcACWh8zKhVeDNWmAMWoj4Ea28DSbE9HX9FbUU2fAyobjaD2NHJ9T1Feg9cZsnp7ui",
  "key17": "F2o7QBspwaZgnxDfPc8dGrc64gpVhnZ8JVqyaAC5MxpG1Lh2kRwRNXRhFGpF8dYCZyJs7D7kk5vNXFFnByq2F4G",
  "key18": "4EAE6e4ysG3FsarmLCkKTakN1KPtN583zB4rrb4eMJ7GRfB8jXi4F1uHLCo1ATk9m11h7nkn3zqkTVuznVa1bu1r",
  "key19": "4tvoHM4aeRBn1mw5XkSLXrfL8HqVaTTrN8AngYL1ifbczpW9SchRsWEQgh9oVmyFGRj4WMZ9cDKNZnRSCxNF5LXc",
  "key20": "SjUuJpWmDAJeLkEietBkYVkWjUhZvsnbxArMnAYiJxRgNTGpvCqq2xc7vAT2LmrH4SFTNxc7jDUmHBctQ6E7zBk",
  "key21": "66UhG8YdKDgMSmyt3xjREeTZpuXRZJMqst6bZa4LMTsUZjqtk9PoQTQB9PMsCAPCSwNZFPzaXCfh6YsjDYd4xAJV",
  "key22": "3dPBCVxe3MBDYUuszRNXS1iGnyWcmdrzfVGrD1SR19H1Ui92N3bkovLNC6zTNxe9gAcjNx22HwoU15zfpG2oEL8g",
  "key23": "8AZuXgrHywG9bT2mQMeyhBBnDUbh4FZSqyshNzf18W94CDC9am1JgJ4bXxaFe42Ynv3sCL1ij5MDTZu6tnzYiz8",
  "key24": "js3ybqg4huYc6dn1u5ZipRhbLbhSqH52iymCEcG5VneamsoakTECNDpvM3pgfWPGBrLUMKFQfMJKRBTgXreb84i",
  "key25": "2niE6Ja2SWQ9BE3uewSDCmCVKgvFqX2orcNrbf4EtrGhqiHH6GPGEHuvCdY6o7MeGjTVov935YptHh5i2GRUrUze",
  "key26": "51FLVhoLCG6Luhh1Q3JB5CHaUZb9LBegzXrNEnhFzoFx7teeW6iEFjj3ysEbmNcwXAvoJvdanXuCDk2sS9GngUZ5",
  "key27": "3YhFzrnEn4xZ4pFsKbKG8d4Kou4Dv62Lrb7Mho9Peez5c2uaCuWrNfYBHudFqHWWbLMQUDdhgvv4TLW2x3ehpAMU",
  "key28": "5aUXqp8pHjK6p8HtDvHFw4bPL72QsRfk75ezQ77PirZsy4Ad58NmAQ6tiNrs8aCg6zZ5zRTxTCBjiAtVQniDo28h",
  "key29": "51jhMPwPFMSTZmSGqrRxBzhypTFMW15uDaHQXsktJmGmyfpQKhcWkw178jfidDgpupcFMuVm3RWUu83dYngE4dTH",
  "key30": "2n3yEMvZXaVrYnvBHqF8fxFarwo1wPpY73NQ4r4tooY3CSLsbtj9AyJcvRHMaVsSZg1yU8NU6D4gCZwBZcU7SHWx",
  "key31": "4SXA99bsN7yQAZHN2u461UvqZy7sWrRMYxk2SfdvLFvfFCGF6SxBUHP7iWgmcFZLZBpBsWp1SqBreQLqN9W9oWs",
  "key32": "MChn4qbBs7LeBszVvJ9QWqdy8f4QZdEtrQGfLehLAk1NxKvyVbvkRjmcx96yNAdiriV8bsEK2obgLfPtkNCKLap"
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
