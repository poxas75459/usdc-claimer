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
    "KkFurB1dhQNmiGWFHTjBc1nqcnAnrtMvGLjTKFqWfXsg7tJ3YR8bvVoHCUvpTG2Dc65jYHXTWkHpbbxRAn7oK1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "en8mU3UMQQ4UV4nxkUn6Z4QMgAvE9oQ9hASHicwJcvTvstTw1at4Xnpw53G9S9YVwNmiHQvKZMJW7tBdBZBiSDr",
  "key1": "32YfCgEKWKVNnEnVgaxgposFJY2K47cM9ZXxxViquX1MSNgGfHoPjDpBE81LuGw7z3Y2BYbHGZoQiKKxFtKt5TTm",
  "key2": "2V147Rqr8bSEWSYRuohY7dBkGxbPjCtCrPiC9AS8ziZJBYJPrakNNQrz7ZvRkzQ84mEXSjvHeBLuwTqi3DAU9sq4",
  "key3": "2RHKpq6it9DWi84HTL4U8H4yzp59dRgF2CEmKw2j7x2SybeSabrnMp5nz76umeBPi3T1rrUFouUvPrxPdRNVgU94",
  "key4": "2c9jieSnGxNUgLnmeNwvdnmsGEXSx3Q5o8byWxL7ZuLcBBUon6q3RRFLd1KDefXFk98zuK6EYQSyC8mzMqjCJ8x9",
  "key5": "1MowXRZJ8LLQpr62Lju8BtGgHnQfn5N9YTF7j3QPeLAQu8qnyb82UN2MuaB5Yos1TzaGVWzaKaf3RnH8MNrhvP3",
  "key6": "2GVGnrkt8ft9Ukacmghy7BbvsdpyQsytAko7m3eDqjZSLH5hYRepuKXiwWi84HsVqeAkVCZgKbfm8FPtBzTBbWL5",
  "key7": "5MuYWtjYBaWQWUqZYt5ih84et8SSLo9cLgG9oz3hPhSkaoyhE8dqnN1TpN8fsEkmyE7CC9JUk3CUafxjrmEzJUZf",
  "key8": "2PLZTksM1DHxHv5i1Udz3TKq7XPwKidPbx4rWDooGhKYj4muAZ2gqiW6VDxTbNuHtRqMNXzyGqyXFZVFEgpPrCij",
  "key9": "3D51TxqierY9zdMN5zyM42r78S81V88yNGGrHtGy9b24sFJH5UXngqEYgwzy6md9eLrM17hi98TNQyozub5yahw5",
  "key10": "3unY39gP5f1pwEpSTuJ73wRUPPuVfuowJEak4xPTpuFdaFi83oh9uBhRWWQLqkwpSBrxuhvZy5eAfiYJnHf6FZBP",
  "key11": "4BJGEzKmGNx7bkzMeNsQHaAzNmfSEMeZCLFyrPx75uAGXa7m7KjC53kG43Jn7HR5eunSB5eBssQcMLT5ZK6qmtmq",
  "key12": "56EFr3G9WXtyhidneLmP3u9ZFuB9Rodf8QDkxTCrXDBsWxK2f1sduikMSuYpsYfgJL9JRumzymjQMuxFsZf3fSLo",
  "key13": "3vrsvso5bvmtcQAC2HbkVspzc3pfL9fDzoJYnpFNGamQ3DXbqyh4SuFbR9qYkZb2j5hp1XWKfwpf3qDGYoLqn2G4",
  "key14": "3NH2LegP1RKohF1W2akzNa7x8ETbx47b3nJswHK3fELfGHUj5aVgT71ZAshj8jXWe5217weB5SJczZLp5uqvy1TW",
  "key15": "LREEvgD8k7YjDinukfoW49acSPHgmQNqJn3DTKMv51o6A3FzWVAnUbG2JcW71Q55P395jKSq5byCqr37jhXGSG9",
  "key16": "5firEFkvrDMeTw5mM4GE4MHPgL7R2f6Py3uUgaMC5VoPHvqXLBBuTvLBuSm6g5u3PvfBMA4ca5YWKcAWUt6DTbkg",
  "key17": "5xGvBZpWk17BmeSwH94h2zdQzeNW1kujUjozAGJ8jrqE58xpsY2o7GecsbCoAg6pPdZVd5iNTiigg9e5oYiwYHXa",
  "key18": "4v49eeaTyw95skbqTuvtxSuERniHgAoUmbDK7jE13xgx739E6r6TV2KhGkjnmKt9nmjHoJrb2eXT85rbHZht3e57",
  "key19": "2mScEq6tbJzNnC9DsvSsZaJytCQ752QeuReMg2C5iFtbY45C8XwEJJKrrxWuZdeE3BehkyrfcM4BxzGb5b3tpoKq",
  "key20": "29dPQjPtb5xiVtqwsAQv7BsTMchZrqGyxsz1dFLAuQWcgac889HnpH117KCu7ykQaArHZ2W4KfD6coHmYhtmjgkE",
  "key21": "ZD9BZstxyzwJxQ9FcaJFKFpvJ6oTcbmHUvpoDR3e31VWAdCX1r8pKAy5XSgqVG5CuirRRq5NrM7f9eUHNhuRhNo",
  "key22": "41Tjg4ZztiCZQV1FiFzt3y3r5t8eeBjnKx2ottWYhAeH9GkWJ4pp3yNY3cWeDJvKuh6wYAMVKP3YNtBjgAQaL995",
  "key23": "3ei8iy5u3dibNf1T9TQfJHzdys5YTRNEJBKrBSKCy863x9dpLBXzQM4u1kcFXXnbuHqxwh7vFw9pboN2Li5Muqc2",
  "key24": "4SpGPPprF4m1B9uadDi3j5arwR5BFhgDz1TtCgTNSP7snkPR1PTBv5BtjMXYhScR52PW6iMMDE2XYX3hcfthoR1a",
  "key25": "5bnYB9BAuqJXopWwrrGGwJLh8S3kKeiiQhi3X6fHrpKaK5dVubNvtAupBHTazyocKsww2hpBbWoXbDSUWjqP3kPk",
  "key26": "5EQf68BAnxAbCGjcEjQXFEfzBweWVT2YvZEZLUDGUdGbwDGYXhj1ZBXyra7AZbwj7ffqRj53q85ZaMqQbrDfEfc6",
  "key27": "2vP9Si8MnqZjAMq9u8oz2ZaJnWpBMKY6ujCEvXfPYwEqnymu36Moq7XPL98mUrEvLjQcgwz8UM8CLjVGgnDrfvmo",
  "key28": "5Z3hgyU3YBJtH87uyP8oGqF92XEwZsniX7fXBeuyVpMBjy6qYWj2htTGEB4LsX7GJC2mnnbGvpV6ARC4Qzu5CKE8",
  "key29": "3cUaFUxU63KZRDEMW3iJnWqEfT1QiMyeFShnVbsxYiUvmSavHT3eZYPjhCfDwaNnP1VM7oFCvVqiN6tebDYXQ7m7",
  "key30": "2UKXL69mZKg8NdFaMyUbaXjddBQUKboRB7q2ANTX7q5NnfcPEwcsm4R925yhKT47nK4ofJLVEG7ZD8sgTAhhd41v",
  "key31": "5BcqF5Z2hrpeRyG72suAuCN7kwyikPYHKCCLADdtu6ocwBjXd4x4Bak9worwBs4JRN9H92XYxjrbQAbAtv2P8nQ6",
  "key32": "ioAYoVjD9VPHrWpsEHEd2hyBXjBRsCJVgeH5TM9xqAeNeoFv2xXLv5btRchndBPVT6sy7A9h1T8aLtSsu26tdTd",
  "key33": "4XVkgBczyYT743gXTLHWpQSFr3hDX8Fv1nb2Dyn184UydgXfLJ1YXEWP9DStYhgghNM2uLx1p6Vf6ceR9u5quTae",
  "key34": "2whUqgGPgtTpiQCTwcacFWRp8bknsFNqfzXC84pCpyJubx8LzstUxyB9eZH1XMrfSwftbE19YMKzVHUW7eAiZvmm",
  "key35": "2Z4VhRFNmXWF8NxLHrSP97CUguovuMy21LULnpR6qtg9Pk4quJfv3XGe1wmN6kEKJ2itMj5uuW1pojW6W1VEam33",
  "key36": "3sVCfQn3Qo5PpfzTUSP3YbE8p7yh4iHDUwdMydFryH3PndxPRosB9Qw4Cvk4dsW1ayBsqEwowLKgHRTLi2DGumRJ",
  "key37": "3V7PBSoFLswFApBGXuzJfY3mNfnBvPd9udU33po6PV7Tnxndf4eRuczuNtuggGCse1Gu7XJbJHBGwhGGDvpEHB39",
  "key38": "3EE6dXpfTyEU74yPc7mdCyMtqBbpZjtcK4S2aUQuVhCc968AacWsfP4T5cUpDXefA4V5ibyRsi8R29E6LXrap61D",
  "key39": "31oL4w1c5WadjxpegUVFBjv7KPFcHAukfPKQfF2PPxpX1Sav77pZnBX8vnY2dt2THFZC62cnbxbspm4VE9qMhRkE",
  "key40": "57FSUNSZ2tVsdZ3Y7HPJjrf8QawREzsjesodyhRMAzfUNUQ78GoQcHvq53b2eWbj3ybm566cT3WuBSBwatjLb5Mq"
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
