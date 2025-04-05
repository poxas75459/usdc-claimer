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
    "4WeR7YTKtdMMxp2DpaqA2QL5f43ASg7wL26w9Xtjh1y2XpPhzQfyYxstT6sSy7xrnnSnQj5yixGamQ8rVcden4KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDTSvcTuydd31yq2um7fQNbXArFfKvEHSeyzwKXn6jfQKGTLWcxq8gch4TcHHckyxHZKzKGDVMkNn1j6tzgyDTo",
  "key1": "5fhhFdJHnrWp7QKdcj5JThrXV6SWsALGd3pd1aTSZPcWWo7iEzScKtqCrjxyJsWRG1g62qDiHDYaBiPmtbxrJJJU",
  "key2": "398tJ2fuwzCacYUgw16Q5PCDESsoh8VJmnQFVrfm5yhJ6ry5JrGMkvhC6fAH4nftSqATHzf7MRLqJ6syFywRHGvZ",
  "key3": "QhZtQegKgfvUfNALmMDxHZU82KHsXwgEAZSrkFQHMGNZyfgyEAAU9Uivzud2vQGBT3prXrjQA9PuJykwbHFQ2LU",
  "key4": "Dj7f9KcaTuUxfuNvFuCbDaJiyduAWaZtboq7z4mLHyaPujykSWNsEtYw6XE19JfMsRTNVkKnFnc5Ma8Tc2SjF2u",
  "key5": "4szmqW8hy6VRbZM6xaUr6GQjyV4qyPrrPYAe8AWhHd45CNcvy9noYZfaiAoqzhP8TnrGbBJY2oH2jpFpCteWiZjN",
  "key6": "sMVEb7pocdPbHRRJiRPFjJkDg1dRVWzgJcCTKYhdDtp35WVYq9zBginEMFByw5smFPJ7NsJ6C6jWpZV9gyqW2s7",
  "key7": "46Xp17v9VzC57gBT1UAd7ksR56g1tMHiz73xMXHEpkDLXiRvYVVJ7SvW3cQg7dKL8tGoaSQTRJi9JECGjX63rh62",
  "key8": "4JzJRVSGJ4qwCd5tCRUdL4RB81RksvPmDuA685zgHWQgmiGAWyGAiebtpByNqPFwTnReV28Tjp59cipP45Fy5PJd",
  "key9": "5ohgDphzzLYiCfnJqAUcATi8Ue8RA7QggYZoSycUCEusHYbSoYXALPt2gCVa1X1RN9HrWf5tT8vzjcPzuBX5e5RB",
  "key10": "3GZZkaMZFGDQ4di8UrH43FdiYZafuDMGuCBiaEDWBAoxHXx2PnqfiqMUdHupmM2gYQ5ggfdEshJFU5LmYNvZQCW5",
  "key11": "38iZRBJyKNv5s5GvAJMBnEmUbTUuGWuCSYgjfpkB92QMvx6FPjpbfJJMyLyp7egcYejMrb8nBQsxE3e5uxyhrCWx",
  "key12": "3GLFS7TRBHRTQ8vP4XnmZTGMzRJv2j4bpE2yA5owoh1d8JW6gQuk1q5JS6wWszJByntrjDR256QeWQWixWZfh1qr",
  "key13": "5Ra8R5Ns3xLk1MG2kmvvWnqe2hPrbZ6DiGJKQdLMAeSbs2JUfRuMDxsyjRW2GSPPS3r5Gk2XXamFYLPrBMG9uDBW",
  "key14": "4r9u6GY7RCGQM4tdHkc6gSLYjazGZpCowZfsk2VVFphjJP2dHhiKnHGL7iMNQiUsxZv8C66cRZAga7U8Z61DcjM6",
  "key15": "2tUAJNaNmkYXhaP2cTr76neH84DVhPHMRUyq6TKokSuQMR4CykqjYZYwdaZZceXUbo5Cwej9FeKiQheY34Jxi39E",
  "key16": "LhRWre76nDSkGr4wy1Vq81gmD2JJQoyfhhGqCofyNZHQz6FnB2nQL1kNp74ND4rmSNQoLsDAk6KWyvvdLAzWDjF",
  "key17": "2kTC2ZpEyAtooeywMGswiSzdyfL2hgqystEJuSCCYWy7DXjuALQhBz4UZPTQ1SZ4ydR9kV6JMB9A9bW6tTuWKi5e",
  "key18": "2NeA8NrXKnkUWP1NJedXVZQjFB7Xpt4ctBVsBAHXicA1ZdsBSpRpiLXMVpvSmDNFrih2Jjqbnium9RY5dG1VQucU",
  "key19": "5wyviNgBDf6Lr7FfWUJpxTPQkTYC6VZgeHPoZZdQRZzkfPNSWF7AH6jYQWBmuzxx8DDG5UQQMkngFazKrFbLng1C",
  "key20": "2JVXfka6Z1aZzh5hLXHmTEXGC9YfdCdKeXpmU5kroAbcueYsdcnj4oHWAPjspi1UX1iyc1jsANqHc9Mpj2MRZ9iK",
  "key21": "4U375rJveEMxk5YM9Px3ECrLY2SVeGL7xeizHgBX6tNKengKE4KSaiuth9eZMe9cs4n1HUayRLrGJVKt42Y8Jb4b",
  "key22": "2pnnpXT2gqZjyb2BdMFYwPxtEkF6rLp8CRfTJH7UF2pDm8Mqd9MZk2k4uCj7X4dMEMrT8JHP71vytgnRCNJhMHmy",
  "key23": "4qf7QxH9KSjPpFf9tBYy8jgHH44DhDqoi3oDziKiaVdNcJ3QUDuuLJrS8dQZuQyHja8CX7Rr4nBUvRZTVPybaUmt",
  "key24": "4ZKvCou59xy5Q4WY3DAyaHnuMiT9ADBeKuMRPA5kMHd8sqxfTSGf9H4BEZc39cg3UcMbdcXNrdkBQeJ6yamkTnEj",
  "key25": "2YcJP4ES5m16HbxwmQfXqci3MstVnR43TLRrXefe6fg5DLn3tuLuN3aE9ecJhiYdVHvtoAGzYgd9g3toMhhPUD48",
  "key26": "3hZKMzxhH8BjY4zUDrgWbLfA8hi8NtBLwH5UXzXeKHFXUj2MKDziGp3fe68RmUoASxJsRNxvmW22gQCYpNqZ4Evn",
  "key27": "5k5B8zdDfcnD3F1yjY3P5fJcmDUViZRRUayMBsBr8e2NFfpM9NsjY68UEFNHQYNLTFKfwbpgTBuaaxEht9TrVQFx",
  "key28": "2Yb6FASb458zom816hhjLN7SFGLDr2gcqkqud7TfSEzAfn5MPdzquHfXPUkpUy6yFmdb9AhtruPf9kY1foKxCjTi",
  "key29": "3BsxjRRzmFAKiVV4JE28561CAm7igyDJmF1KNjBCh7Me7d2zzdirwv2r28rSiaj7bEFaTkcYCQnj2AFU15ASZ5fL",
  "key30": "fCnTBwgAcwLVTw9v64pFsioNaiJjDifH1CtPyZHBSrzBpuCSDWegvNU3tFv6bnVhcu5EdFjcAPK439zKeU6E7oE",
  "key31": "uhKSc99Y7Z4MbYW9DLqymnB22aAYM2v6WEHKNvPHSCKVd88DWGNjm64tLtFQmfzSiZ3vGxPF4vWFGgccEekKTxK",
  "key32": "4sEdTEyXQ2qju7SFfJJVkwHhcWx4ZpwqYCywrTRMMmhPYRZx41DSJigTuvPp5WAWg93uvETxJji9DjeVFfYHhek7",
  "key33": "3TUkCJe3yfMSTuXBwC31TuX45nShLctcxxgvLoob3DX7gi3pHyj9sLBFvHAu1JyYw4b9juRfVvXrYDKxPLGa19Ap",
  "key34": "zLrUE9DqvSVuJfdGZwqV7zfrHH5bZQ9wVYiQ63jUrVKVGN2kuBG5mqKbEPTHWR8W52io3hStii3vfNj1HWujAzq",
  "key35": "3gAk5uq8QXGpXtsVA6LEL2TAVsftJhYTjwCFQF2MNCTJsVxUhTL18z8Rnxv1kb8tDdEDRqK2zcKKSwRPfpwe9B1e",
  "key36": "23K198Bfj7r2fRzsHaRdmnjXuQgbNCBpL5P3ZCmXZgazAVFEnXL497Rtzb2vP6ruorpXwvZeJtpm3jrLpomHpjf3",
  "key37": "2WyQ7AQLQfPmX3yKKzPGgQYAFcCbDyBoRT64auUQG7ZKPbt2mWU2gNrmss2pGPNr9ne8GqFbK9De5YcWpxhDZV2g",
  "key38": "4n7nvtapAwjeS2QoTPtivWQiCV8uQ2aZa5KJdJ4jmryGzJ7MHc5LuEPwx2oiwwPX615rVBgAdAVENhvaysEkgZBA",
  "key39": "3kqMsZ74cVBY7SX6xTnvQnnh1hKRumYCLgdgYXLbyjoEcsNviQNPGFmTjQxw2oxK2JzmmAdGUYGsmCsBp5jVAPo",
  "key40": "4NzYHW9xbxgWd5YQ98DdPLSHAZdAG24CDeuyt12C6xJS3ncuzZWJ5Yp7UvG8D7bkcDjpDgVupJssXcDH5fa97SDR"
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
