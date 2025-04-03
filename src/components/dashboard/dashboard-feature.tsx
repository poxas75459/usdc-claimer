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
    "ftmg5trHfvrBobzH9BiLQyrAjSKhKDaRBRroS75aukdsg28sxeJj3YpCfeyiJN4hLSMr2NPec6RXhdBLwcEvWVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gnS21vmyVZuPKaktbXQwn1kBQrMVZGBFNZP1AQhDgm9dbBDSkKkfL1qEM7Wqo46cXEp7GbrpfqyWeKSyyfRHhH",
  "key1": "3fKCsDyH8vhceyQYnPvbH8qXN3wtm5YGmrEaxiyU9dWzDwdzh7eoEu55wbFMuuDY3JtBCtGYADPUFPrACHCspYfX",
  "key2": "4xLjB2cG5aGJUC44KC1bYKpDPLZksXLBjq8cr7uVEGr7ATozYCqRDTkkcqCXHjK72apwCs4xpYbgQ8oCE1ahLvm3",
  "key3": "3VC9r9cJH3Qy4Pe2pM1f8vt2iyXPMzXUXc6Lv8RPHY4YMRHoJHGbED3aoZZWPyuvvDX37xSJ54reQzhe4qfKo59R",
  "key4": "UDQTf1xzM9Th6QnNnJHC7dZ74RmSSVBYqYUbjTWyk3kuRxe5RfofHk2MKhoYrUKicGB9VQvFMZuc7Mxq9vmogSm",
  "key5": "4B6EEgnkiQjLAiAsMnu38e9vFNeMgMtW6BURF72sAEQ6vX2eSmVHeVQrVuxPUbfbGnh6SBG4gBpTGdvfDbDZ4fDR",
  "key6": "2CaZN2tTmf3HcVFKzFFdKek6KwzdLYXVtEfA7J3Xz4bQXHFYNZFZ6WeZveionCNavW6ESCThNX5Bq3ivyvJM1r99",
  "key7": "rBqX3Dm8jho3SixusSy3pfnjmnU3E1DxqxtM89yxHTPoFsbUHkMM93592L83dB5qSULMfTUk8F519zxcfWUJKMd",
  "key8": "3Dj4SPKEjursUnV6LyxT8yhH7LNv42AVietjd2CrNhrSA6X8fg3ifFejvVm2LaBEsnNkTuL33mFZX8FuQrbzss7k",
  "key9": "3EuzEk86drnGWDAW2yZasCzjN4X72rtcNUmmM5NYLHLcqveZTioMegkEvd8qAcVjr2f6cgfB4aNjj5itHoXWopKr",
  "key10": "2fnGmvCiyDj9JsRXoPrzSk4iCuV4RFVchXvMZH8fSR8zUkBL2g4Rvt4dFziG6Cc6yTcdkUH8GinC2SPVHBM4hvXt",
  "key11": "35EQWm9iLSYhTe4UtdpEqGFfYVRVmZisePZGpHM6ZhMBWYT6ErYUwY3qcqYipYwcYuJjfYrYmwyQc4BiCZUaTjfW",
  "key12": "2P2GCm69tbD43DyJTSs15qHt7TqaiUqGMDjYD1cjSMgAC2BT1z6X3HWpLSMu7U8EZ2tHaz5oL6HcR89c7tcmxx2y",
  "key13": "3j8oQos5pkXFF9LQyXSN7h3dmxkBdJLC6J4YMLcYi4DBcCgUY52EBhbsn1CCD9pPYEejs9a4EBvaJXzneLm26ntd",
  "key14": "52H5sN26RcnpxE81as845G4hF7AQWpNyxdS5bWkBJXPFgVchjmxMr2pm7M5Xx6HTpyaGY7NYgPubR4xDSrMFbjS5",
  "key15": "5tUGTuQYLG6RY4oWyMYUfjXPhrCCrH1cUkxwGSroLHfpnGkQ5NgAE6dai4ro7bSn1MPdCqeDPgRPcG9r3pC1W7RQ",
  "key16": "2k9oyn1Wmuw8ZKw9d3BWQ8BB4zU358nyaBgn8koxpTfsmLgYYrq7nNJbZUwTqhgYGo5asghBVCoGQzaeLm6AUV8G",
  "key17": "354gJDNwGbXzAZKHTeNWWNvnCswMuFW7uj7mg6UQcJMz38pNYwKcoRGu2K1T4CEiUWrYXKXq6Gog4CfdhbQhLa41",
  "key18": "4hhiyM4A2wSYCiouWVhV6Rna7rKZNHNLsLrka9xBJYyDW8BBpPgoNHcaKvj7Bk9baP4ZvYYR317duEZA9z8G4tVD",
  "key19": "4bwR9MjSBeGJUZc2hWYDz4XFMCzScS5YjmBb2PrEufV4Vq184H59iHmPrXaESHoiqqMv4zKEU7P8jKhALLRSsTPe",
  "key20": "3TZiWdG7eZ6qMmPVTCKUhfWeZsXHaEZrBaxdRndzSJqdo1k9p4LYcu1WGNqcP6mMhFnq8XoKFBvhQyyKHY75X5Td",
  "key21": "xiTMHrhj2Vs15w74ixtiKuwLKWugaKYYucUQQFoJrzmSUEaQYRKeJCyp99V5KRwQ2QUan7srsx8yX7rKreumdVw",
  "key22": "5XtqNfN53TfZN7aa4MtTkrHJ6VAFueRvpaogd5cUGm7JcHVNSUM8i1JpCCzMZ7PaBp5mzrHFZ2UmJQagxQ5airHx",
  "key23": "4kRgTn4yLgFL2k7dJbaq5Ld9yVQ8BK814ao5FuWxsjXJ3ZtStDvrFXK9Q79uKBLnfFTVMRFCW5uSwApe76CbrFbo",
  "key24": "p1qN9Cs3i838qCtnXcg3cYWTNcTsLVKXBSHmmTSWDinxN5FbBegn4VDnwGwd6d7QeBa5fPnQzWsvuydNk7CK56K",
  "key25": "qaKfVkN8pPCtTRxXFDi3kdhjNgt35GvvS4M3TcgK6zxtd15jaTkqUFZTKybH6JRkNofHD2G6gmYnB94oyBih6HX",
  "key26": "2t1rGuefTsiKpo2pzCkP4Cu6AYJ3NWjg1KVBXXVkLrJAWpFsFSzVZKDeXMSkP9PWc5aEgdPxvUW9Eznok1E1nRwA",
  "key27": "2E8dpKyZLFe6j5gbr3HUwFMDR6StCSRHMCAhFhvQPPeppoQwReT9tFokkWZkMn3DSWwfSDNqUAT26u9hBTexKmZ1",
  "key28": "4fMpeS13SaVmZqEjYtMmkPAknNMLoYGrW91qFCmC2rjfU8EKCpvLzqjmQoYCxwxdNrae7uhvNLaNXKZJbbtdsFQU",
  "key29": "R3SacgqadBzyZC1DP9huiNJqKYtmzuyG7LMMdmYPG2VguFwt5r7kdAJDWt7ASAoffU9zgPjmfFjH5fnWTUxzQSK",
  "key30": "3zs6iBVLzV4NfXR9TdPmnYKLyMfjb5fAZRsJZv8N9W5mo7BZ1eJzUJL111XhxG9iSgyFStcq7Rbrn28odMKfRZDP",
  "key31": "4Q72G5dZYMRcon7F7umXGHjipmtv5rPECcGVQdY9MXcPBeqC6NrS1jwscuq47kT3nGTdmbUDwSEBrff8rqootTCD",
  "key32": "3Jn1ypJAjKiymwmRGoh5HebKLFi24Xx3TsWWaVPvTjtHJvoVLKGhF89BjzEcMNTUB47XLff3aBpdnJtMeyJxJKK8",
  "key33": "36hTzQGCrHUn59zt1iXWWDdfX2KzvYyxGjeztMnd827wbgQYTx2vN7Qi7gKgBGR8AyLypePdR1tcAC9Vpqz1gEFh",
  "key34": "2SJMAkRf3n4S3oyD5cahbXC4a6Z6s1q7Kn1G6vuAmr8k6CvkFZipuL9mQUex7qbU3vmq6xMF8JQobHrwLFjHM5rs",
  "key35": "5KT9djrHpw1YEeSuU5bHPw3b4QaYEVpXdWh5nZa2yeeUVsFWiD5Pa98bfvUn3UXyR7MtVore2NCXdJLvP7eVb18r",
  "key36": "2ieUxweJK7ZNW77wwweJyXnWoCc1UtD17CKdppUbfY7xNb9tBdnegjKqukru4tqKKJ6qT5txUEmXMdygd6MCrrr",
  "key37": "3e3iK3mc2nJKiPraQTErmXGhRUVYumcxBxuF5MzgwZ35PnraRUWc2tRUyv5Df4dZP3XyjP9PGkHF6ZBcsY7jEsus",
  "key38": "iTDk91JXis7hrB2tV9hHAeohPNSiV5Be6cbTL4jnAv5meE8RooY98RLEZ9ri9Qqnisy3tmXy261yY5GU3bMZa1v",
  "key39": "4MSohefX6kMToQdmmZ185U7u2sGAioWo7eKZmVEzayWoR2ZjKJASR4GJ8Upo4Fd8jFPeisUAgKR4Hz7cMKP611p2",
  "key40": "48rz6mCTa9T2wYLASMzN9y9Fx2duABbu1YU9RE2gNVf7gYub1WQpfwazRcu7GJgYDnuQda9TX2TDbwA3rCaPW4cd"
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
