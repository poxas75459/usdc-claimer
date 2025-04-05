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
    "TWWu9S4yrqhF3BLAyiit257V2VgUzqXyQog21RF6PD9hPn1q1hdYpfMG5hZ2fNxfQkczR2jYAtpK6wWCFg5G8zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3hbVkMtbPsgTS3aqj11rwUT2Rku42QkM1iszozgQxHX3P3xqHDGynfoW551WmbhuwToeRQZA14BfHjgrvSo2da",
  "key1": "n75wWtAT6QWjVsGEUUSrqmb9tWs4ubMDEU4B6KDAQPpBwuFEhwdp2Q1Vf4jVaTMmJ4QHmSm3acQ3UhFvHUYbjdJ",
  "key2": "3D4WUPgJR1LTpkSpLBYuwyvgonJsqMZAqkZ12pv43wFKhkBhD3BJhs6RavynKgYheVniQ1K7WrueYT4bhVwbjSM",
  "key3": "2PPSUR3mRqeQgKSnwJry2UEUhnXLCSiCPUsdoPFV77ogUuZK4Nrhz7MzcAbKXnDTXCXfT1t7FFoowvLTpyFa6Dba",
  "key4": "4SxLb6frCiTr6VKzqweUVVtCz7eMFj9Zikyn26czoHBmmWHQonrkY2RPjeVWUhmP6YXLqTLgT1jGgzPSyUVjMcBb",
  "key5": "5UYBACJcAq3E2dgvHo1cWMHbTByAk5dwW1RWhyCeusF8h3iiWnJWKHUEGUZL1MowHDYFywqUcWvbe2opS6zx3B8Q",
  "key6": "5XdzNg2Sw1wSbfSiJAD4CSf4MZFyKvG12UqXob4bSCX4VMBvBdtUh14ByhuvJ5HNf5tM6hNPap5iHGEEw52GQBu9",
  "key7": "27JPK6Rbp8jScPHcVMKELrtBvxraG4eeFecWRUBQBkKcejQDjG3dntidMKRSdyW9GhLSNYS9jEQ1Nj8jHxfGNDns",
  "key8": "5H1ojBgHBMqAfsP6q7kZZ34n7Mq8DDB5rouKsFN2R416rpSEgiPLYA1wuiqVH653AcnhRaztQtqQZsqUxmg83utt",
  "key9": "UkxTpRZHzLgLS5dvioRt7HRDj1Robjjz1o2Nk7BNkFqqs97UnfoWbp9EToqcSCscGURwnnmvvighaEyC89ZxD44",
  "key10": "3NMJmEukSn5yrEPw4r2e1BDyai4GJqt8zCb3ANbUaLEGo5ywZQWyTFMNgGX611xecL7sgZ3rJcxjENz5WdgiYTqa",
  "key11": "5eMHDVV3CNa8ei7ZUfB3yxakJhFUnC2q6uqP2aZqzRKCsAPAHma9JGaWQ3zsU95bywQ2s9SvqmmbXdp357gcDLMc",
  "key12": "EUwJmnqMeJZGQfqMA16LMLVjvZS82tQZB5B5PVR93EJacD2icGfmKUgc6kQdig4osrRTsQ4oEYLYDrF4mgzdt7q",
  "key13": "2nh3sjT9yjPGAkz4BGu5E6L4jBRhVJkPPyd7hd28VL2fAMpbCpgCVxCtAD8ZogGsheVvNtHv5QTgYw3gYfCgiuDX",
  "key14": "4JVCP4g8AaNj6AEaL8oYnrHhvASXsraPSV6kroSqg9DPCdaMYUu8X9KLbuPVqwFRDP8YEZLD71rSWbsZBbXdmWiD",
  "key15": "46Rrx6JF2NpdKFztkFRuLoZ34zoeZamhuyH3WZa2uF2GhYMtCidZ6QZ3zRYhoNNKLi99p2GvVh17BD59ucdXBYDP",
  "key16": "237zRiWWqEHnpbkJenTbrrJxskHayTSLokb47hxTxiF8cGVo77mhsZBUa1ARuUBjyH7PE4U9jWn4tv3Pq2bdjZuS",
  "key17": "2QU5i917vEzypvpN4GRMjpiNNV4kCjL7oQr5D5WMBj4PYAkbXmNEZirWotMiEeRoQ6hFbD7u4oMpDkaSDfRA2QAd",
  "key18": "4ACzBWiBL62oB5VRtLWeFF4soaz8TzPZpv5rGx4gkeCnN1xp9JykHJbdFhgZq6U8QrXAYPwpWwzcEwZv4D5LtXGS",
  "key19": "29y5GxUeS667r5wuLe2oMNqXw8jRAfNLjucNcxuYq3y8idMaoPE1QcvfMvuZ7n1grZCred7MnfQeXKHA1ynhYZx9",
  "key20": "4Nz4myiWYvXfBcHLD9fM6gHSdmLR9p17dQMusTix8jVtv4c6KoEkJuqkQNwHFJoYmfAPNMKESorfk1PcvYmQowDX",
  "key21": "5hMJDvWDJiVMiidSEyB3rWu1NcZXhnocoFFKjKka5R5hWGPpeHNV6F1q3cBJcowtxgdgBUYpyRtj7jCaBRcvrZyS",
  "key22": "5g7biKF7hGFuvsn4T7PmSr76tPeULXtkEDPSB43rxnEBdzJ9j4GreM2fPpAVdTbKihpr1x63mSgQr5JFuML1YyAd",
  "key23": "32QBjKPsZ5KF5D5uBLGn6EkbtihiXeBE3euzCXXsRLeckz7oTGLejmuKyUnDs1LEoGTYsPmvhcUzR1GXyna8DLfW",
  "key24": "3CbgPLv4iXN1iGhx5y7hajSsDSpKiiCeFLC9Z6WGbk2L9BQBsFU7gjJkB1NrSTk2cF1fES3aqW2KdHEpRFZobAR7",
  "key25": "doNDTXnu6VDtchVWZ8eNGsq5U7VM3jt3Cojz7M8w2qMMeEGu9QcRVKA7ZH3nJ1ts56RqJzxLjMnth8e3rDogwgs",
  "key26": "594ZwgYLcM42fibwcyHJSdFDwagro8niAKKBdp7ohb9aHgy2jDrUCosxhYAmtSVUD8EEhVa71nivngH93VaY7571",
  "key27": "2jF82j3Q47vVU7aHoeXWgSE5jFYsw1FHiRz3ak3nfKk79uppzcBM4D5nKeD5K1kST5wskDcR5RDdG4YvpiaAUcYk",
  "key28": "5x1D4kbnkdDSFhtSuU9fVT3KMRA5NfkKreN1LKUggn9itDbMq98REMHpG6nwkSUupHFgC4cbgiWLkNMvv9vbAjAF",
  "key29": "3JHcPWJoj9Xuzbtws3Nimgf3GsvGnF54mMmCp1HrCZjAxRJK4thVJHW2vdUQV545xm1cKS5NWCFg8JuRPdtPKw4M",
  "key30": "2GB3fEx9C4HHJnRZfJfJdJLQ1wJFpvsqqcYQfxj9zr1j83jigwjnPTQWbtgoK9oruph2ZdtkwhV4AoeXHxyytu3p",
  "key31": "2vtjRRD935RLZ2q6Ho6tpxsBr5r5bhaswWd3jMdv43SNec9YJr8PAqdj386Z4a57ackad2DqyNvdmWBph4j9e3qr",
  "key32": "5pCGGqQKPdDkxgZbU81QCqnxhWrfuLjwNHGv438i86Z3sg8NyxpRELn4fa8SPrQvfmByMC9cd4H7xrqMFTQjFqeN",
  "key33": "3dXPpP6fQ46GJaUrMbjoJN2BsXKDnVvUi21CWWFxgq7FzqN1XPQ12SnBgVpqEAP5RtYUjKRo94mGdzV4pDKmhGfo",
  "key34": "5BxWUrGCT8TUiWyGg7uYrq4qui23eZeddPkMtNhZoVkmask4w8NhvQtJM6V7L9ks5XwszsbanHVTWYz9UKNzA8NG",
  "key35": "aPUkyPDEcovX4LxTLXKwdeFS492VghX7YyaLY9UqGPUvx44Y6BJE4QW5563ewtbegybtWXZaneHxaccXdb3vwdf",
  "key36": "4XzNYPCiU2YHjfdwfy2LMjZSuT82yV4h6VGHUZv6m3D6uHSakv9GfnMLu6HB4PGKvPM2gumKifiSKZGUsWrbXdbJ",
  "key37": "2P1zB8kejz2uzUpqWH6WUg218w7MR5b4dcqfqjQWt2ZG8bkJwUKWAC3d59vVEkNqCZKPcgBgf5pFwM1FU1WvbPDy",
  "key38": "2ZrVykHXt4S3gdBbEKvFCG5bipZ1Ss7aQXzTdfw76PYirrJ7eDz8eH6RZHfQmMxYCgWtPYFRqeEr8HXypCJqSw3w",
  "key39": "AajqYRUoPBAb865d3U4Jqsc8Fapmu6JNKaWvp68kzS91PVsxGPDNwQevqZmQfybMotPU9BDF6fp5Ri5zea8qA4j"
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
