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
    "2enh53nFhczUCAv3JavM53VoG14hD7AFEVFWGUbEqSHN5YxMYhd8vYTHA2tsc6f1VjsGDbEi3NnuQmWbz1haxPmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgx3Bx3gArcQAwbcGYd4Vd1BdrHsjgKc6rDdfwfzaaurcYFee33R8Sr62mdXxXgsWWKF3k52uMYXYWcSuFpbcSn",
  "key1": "THvxgEjCXC6yuSpCNsTuq6HfrvAVcK5Ekuvpzdwhpnkgq1UcXfvfbdc7dPGLtaCLt25vci7GvkyUHFhE3JbA1Q3",
  "key2": "3hrToMzzxWkFFcHBqxttAjPmEPLSemZ6xm7Z9xLV5Bq8GEvGEKaT2xeGphggxd5NfVojXUHNWhMES7CgRxKvXJ1T",
  "key3": "3mVnqnpwaxupyp1BTyB4WSfYwZmbPHN7HkAzZDN26r5KrvhAKCUQrb69A82U7PEuffTKW7Wv1zyrKHHKqqKWyuTk",
  "key4": "4Zid7Sg8vw7Pred9dReybBrWCrB7JrcpRSkyR4Y4RgH4tAiszbiJ1ppxiFf8xALxkS2kU7RqpM5yjZQvwm3Ttb1e",
  "key5": "3ACRCiMWrrGdXQaztA5spBKBdvZxXX7YSsC3ZZFMqV9mUW8QXUVNVbTCeHD2AEeWBVPSE7WydeKxTpqVLrcymYNg",
  "key6": "4HAkXTJXykMwnStUytGydxKCCBJtRNy4zBG28QnEFZX8hPE4ybk7q3RRpzMQxh3bixRx6danhKQKgFNc37oif1Fo",
  "key7": "5TR8Kt3c3G3Ru4xkTKgwKgc7Cjx5KjnYpxwumpjnpsxUAjpD5Y3M85DVdCDWwsJQF9x4Eb7zvUsa6Hq9T3fhRpYp",
  "key8": "LDLVJdav8LGNsV3mNeZYWUFbb1bUXx9D3J1y6u9iKtiR8piB3bRK9it52aAotF6ABvuscNCuC9626HNxx8KVA6E",
  "key9": "49CEQfmpiBkxMw5g3dRfyZzsbm7ULMZZTjn3GCGm8i5vTfRYZEfJZeJgtRLJ3BtLAw9YSodDD2QzWepigNM6p6oV",
  "key10": "5KqUNXnTTGTZHJGkWtzfP2eFXxZjAtgRYJ9Gd1kPJzsjBMaKbgfTVBEA4uKtRk1uSNqPfnfEMnJgR2yDNQ9odG5k",
  "key11": "4b1hGsDoCpU5nWgig7XoBBFbJa9XW6hfQ3sr6rNKWQYifrUien1M3RvUVgkaxENN1Y77kpko16SoAwD6nHq7F8kk",
  "key12": "4dVVGj9eNgYLDZrd3w6ivbyn85yBP5q9zjHgF2ERD7EatySkguq7KFParfxwqsJw56uJhENdxhugNWcEVq3wULfz",
  "key13": "QJc3NYvDbpURL4fCkw4A8484CRJ7JkwC4AqZwMYtZM3eAqcAz5Z8uieVt4HAFDUcRRM2EuFwVTjrexDnv8Ztw54",
  "key14": "5ZWeGESccZJT6qRvbFQzrwrbGu1XU9Ehw8gRuMiyqMkupxbe6X4R2a7cNBU8rFGbKp9W34wPtufg4zur3tfsBWHX",
  "key15": "428qLbJH8TwVDhxJNytRSY3Da8NBcBQfC3okd7EdEJ5hhPgdEXW126dyikMHDpSR5TnLvgpoUET54RbSqs2jb1tU",
  "key16": "5WJrLuDZLHiDm3FnaTMzfqkV7M3sK2f1dVZZ4PD6DXrmpZbMdeHZAyiRNvi8TfVikB85PX8e6skrrURz88BgdEvR",
  "key17": "2TWASYsrUeiw63YTKVtEQ3wpZmLqe2gQagnGEfojpNzb6ikWcWanAJjU2EeCWBoT8Y7pzb6xLumTHLpaafSGKWDm",
  "key18": "4qU3kyVcq5wAY3p3DELo5cUjSFtQ8RhS5o8Sz5HwE6WuZmFJVMvFCDaKDxYzf9wkSVbvf3cgC3QZs673RzH9XcD9",
  "key19": "2FFg1QToxvdWnfnEEHTGtSMpoiGrAPbNuTEsuqgLYFJCHe8vycDNbTLayeRpnNEWhhQpMnM13dm6FQVaB34xEa4w",
  "key20": "4E4cR6KDWwu436VsB6TMf7xqm2vbzSV3QVu6udcGsc7QLQypcocmAffzw7vEcBvxAKd6yP7DX9EAmAeeHgpsLXaL",
  "key21": "4wRZ5E16Vw2K7dsqLE1fPrWsXdJSrEiiQBHdASnXiKSySdW4PhN1JhLhrU1i74SBny2f1p9yVN7Bd7vy1Hmqhwyi",
  "key22": "KPMX7Rsg4Yxtx11U1iQ2tPT3GDfsd13586AwvfHXn4Xd9cRVhyZush7zzk6gmUuwScibivBAse9vMSfgFowsoJ2",
  "key23": "24yyqGa1EcknsX8JDgUt4JtSUPC9983XcB7XgYi4GxkhmCV7KSVXcgQ6ZypmxzrM6sosVKrZfJ87HMkfg1KNrB36",
  "key24": "2BR5pv5nSn7hCLuJG785WZUihCZ9mL9BLdMk7c1L9bwkZaudo83FoEXEEN5iySVkhUKKeap3B9pS7fB3MSJmgjfg",
  "key25": "29R2XnRFvXWkWYtKuVAevNxpdAnFoWbyu6XE1dKzMi7dVwb2MEP1ZGcRoFC8ExPMdmn6jMy4SCamf895x1d7fqoW",
  "key26": "4jx7qKLm9ouPwoKvx4gA4tuJCyWmAKtaGC3om3YHHxVbGqXdSVbfNNHkjou68vfdciftGgRQNRs82C3kgWp42Jm2",
  "key27": "5n2GWoKn3Xh8vxPsnUpsieRUE7SZFtbKg3siaT6dwzMyifZWvyKX9uVncPvoQYRiHKRSLcEfbw3GJB8k2oiDF8wo",
  "key28": "qagcWQfvvXwLAxApCCznSM6SXo4ehsYTay5zwFkvtd8H9uQYGzCLM9G1TSNHzxPevLt1FiV1fQ6PtSKRTZMURZM",
  "key29": "285GBYyT299JQQZgRH5hRRJXmNTvgZ4pchJMc34xAeypKLsABHNA8RbJtgK8NAM2hcdPi1W2bsDFVR81Ju81EYCy",
  "key30": "3k3crrq8L1SSGUogx4XSCyDqNxNxXewibccFHtx5xtMHRtY31KW95f884W7PY6pmdsk7FnSsBkok7vZjCGk9SKEi",
  "key31": "3sc7eKiwvLcdKpzX6kKqHJ5aUgEh4DLhKcXN1qTHFzMYT7RnCbWdHNXAjqNwhPWcM5GBeziEUoWciCzTPVjcabuZ",
  "key32": "rCpHWDABf9FCKGYrL5gpx6mmJXmVxGt87eMuL6zciVb981AFgpYXeuTkBfFiPG3U6nW7o1s5PFzrdYkJp8sqbuM",
  "key33": "2BpZwrhEQADV7iVEKcKce7SSRQRe51dw6CH8t1aJaWFgsERJU4B24S1n7zy7mwS62xcGPZ4p4n7tCUXVAc9AN8bY",
  "key34": "266ErZBf7LU6aADMxXq4MRQHSiGDL2aNZ2n2JP5CWu7UBFcLLESFjBqkjwFAVWwoMtFyXT8X6UTo2F9WtzvLJpde",
  "key35": "5oft27mgPCF7YbAqUPuHRgRCo1ymBMrpn1StUUEnqSh9vAVC2chcNk4S58NbAp4tDPWQebCBGWZ42Bni368BesbR",
  "key36": "21PdvDa5JPkTbes41rHejAZMLLFqa2AithurcTwtiCEURoV4ZAHjwmJ2vTJ4Yc4D2sb8LUdgMmPcQEseeAQB3XWq",
  "key37": "2YbeZrYmQjZGbDpkcjBhY7hrhVPfZQLYpPRjYZgGNejENg6e7Cm4aGzz9sUgCKoaHLphKDLAMvz5aU3CnfJFtGZZ",
  "key38": "z98ZHThcQ8oaVsJHBDW5CGqiTimPm8mAhyZLN2RxruFmjLzVL7NcC5niXvx9MT46Mm5gbwVTY8CqsbGBvMG1S8x",
  "key39": "2xtAkKmAtSAVFvvZLZ6FLZZfqgZ115vB6vXyidkTf3fKYBjDTGXe5rJfcXYAcxtAaxZpxx5bdjVtPUi485xHE1Sj",
  "key40": "2QJSHjUYpdaveR9oGNk52Aji8SFtCWnnDFZJYApNNSQ75HPYyHvYWPaBpJkSeJqvbzDN5cUzCAkDr7M6Hb6PJwvo",
  "key41": "23bCZKbkRbupVCY9f976w3hgAAgThZTsQ7pKpd1nBSBR5R6u6Q4gcFtd84oVhrkmFgeJHqwcC5F7pwv7hVCGqwXK",
  "key42": "4D5btuzuNms5KxvvKDvApcRnyckUQW7xu3v6EA5MtrVGx8vmhT5bJUpx1BZVRCBZ4G7LNj9MyDMyxn3sL7dGGNw6"
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
