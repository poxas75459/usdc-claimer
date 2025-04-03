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
    "wQyniYMh1tZmLpn6rhdRwYQvWMGGFbBeV3jFNMCNDFCKhZEXMjxz7D7UxssmWX8T4gG1aFbTtRSfRUKXjMePiHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aFJfw7hpbNGMrmgtXd39j1uWEuE2ZgHdHF5nLEBMcixFTzYFB3d5zWUk3BMRhaeyGFr22Nnm3fdhk1EKJwD3FP",
  "key1": "4r3Xgz9VPirvxRaDRy6sdG3Z3tYozwnrPCwPfzbU2i9vmjzugL9PeWRh7CZGjCpxfkfaBhXNeYYrtzL7Hb8xXFZB",
  "key2": "2ucGFjrX5oc4vXUmgjKa7YjyKs523A9HiuS11MAwVuopeYV2x7mTG5giB9rY6oBWijB2cpxQUtzbM6rW8YpKomSn",
  "key3": "2pGhH2MeqVNSTmyXGrv67aMUsiHkx72FbnP8BSBMwXJzS67bbYmWLLYBcBdnTEqEqctGYM3DTskQsztSoEEcDVyj",
  "key4": "JRTcLeKyFWj5Jr4XKEAtMvMt4YHCpTU2QRkfDoTGYQLQ2dPuPfQo6NthkXeHc41aQga8XgLCc8tohyoxMJLyPWL",
  "key5": "3qwTa4BsJpPHkZ6od1BCc1BznynzKahecDByXdtR4PS4yZbHauKtkhLDVCkzdUGHEMJEpxA6MATUSnsbH3aaEz18",
  "key6": "2ChEaxaHD78kvHRQEcp74ivu9Wom2n3tmWdco2gUJ2uYqvvBvkiGgSfr1VGyXrV9GY6zDzx9AuREz5bV6KM1oaft",
  "key7": "jmyoRhUt6mAtQQmFuUr7Yk1vJ4x9EhbabcLkBss8fzv7dfZ4DwkZnrC9QGcKRnDCRQatGNPtxw4fgznxAezRHpf",
  "key8": "46D3zggYrSHGwYjr4yzN4Ne2qmqvaCMzZHt5LVtiz5zfBcbtbmkoFRj9pxswC6uq3QugYxQq1bNjrJEmss6hmv4W",
  "key9": "nzSdNM6twaLfs5cFg4RNCHeaUEYcKFCFZFLZkdHrgrnDpFFSHffDb4m2PeXKiv9PPrsnvttuqyQQ561rBarSYBr",
  "key10": "67ijBqKLtEKX2S8K7YQSRa8d7J8q4vQZTyBUbkhdRVJDXgdMgQr7R1JAbAXWZYqGwWq42bMPefMGKwbWtjWZkun4",
  "key11": "3U7hTvBhEs6WiTJKUurG3j9dNHMtVVddY6PeSZmkcDZpNCfb9tEa4JruDVXemMDxohwzUCQHrw4dcwktER9ps9jC",
  "key12": "4E6HY6SBFg4AnyqkFfpcUtyTWJ8NZfH7gJUjuVpXQeBqdQH5pnVjr5EiuiiP2NC1ehq1CGrm8H88Zhe5Ho2cxPzo",
  "key13": "58AQ1Uq9e8S7SdRkU9qpyMAt4Wvxv9EY1jpj3eb54MJAHHwDiG9rYzWeXvTMmdcVXN1b8FZCsARsJtMkAuBLhBzY",
  "key14": "2U91fCYJYmjPW6AEYfWHWYmRHwT6bjh3L6aqgr2rEt4pUz2gFP2gK269ZwXK3fzbFbkJpYVD9z7EM75m2tN8vXAA",
  "key15": "2PVfrm7YHjQFMMQhhXHoidbvr8ffqgxpJMRUd1sb34TkmXPdzbs82h8Jp3EenVzx3Q8NSH21qRHspRcagB4ESazD",
  "key16": "3JFw9pvfY2U6oD4zmArdCv8ZFaFtRb6mDHEe7eejfYtkMK8m4QGg1BVfBwErdCTvDdHPCc1pXsCgtWw8qC6w7zS5",
  "key17": "NRRwJea6muJPQ1vnL9g3qeEj8SVVmDEc3rCvVVZBJ6JXTmRzyAiznnQmnvSbBeihN9q3tTv7M3K6zsK8ZkhLxBP",
  "key18": "7Lg9r2z4vSTr8Vfc6MoWQAbcr73RYnN2VNJv2ZhPv98c3ZGPAzgRLQU1DKi4nvfMMS1p82YeN1V8KcC9Ap7Si7s",
  "key19": "DLTkwqogqLc5ZVkP6X9JdNZaqF4JnKhrZJTuHmrrXaei5yYZQ1wAdmNZQ4PjYFP99YXBPKzzs3UDhHaksviikp4",
  "key20": "2jP8cfn5XfJ9MhYtVu9BAhkyQLkzXcoiRZewJYDDPBr34abgLsBvuqFVtWfwcGjxQ1c1MBq5H5npZVQ1dSsBeTqE",
  "key21": "8BzB11YrXNx2breyvXvXEwZaRKbW85GkbBNvanTxRu25WBsUrZZTGKSY6u4reGHcDWEsMBzL6c1B7NAEWSiYwxe",
  "key22": "41T16oFgEnuEE2jpgWrs5iaaxYRjnZWHjH5Gbx7LbmKkayMVt8zdniYkM7xx4a9VyCTLTnHdnJbciKFuRv9L5ZUN",
  "key23": "61Q9KfYkZX3mV1PBunReem6RynkJ1DB6kA4vVkYevp365Mkb8RdNE22n8zoYWxD5dTkZohryfLXtcSpzqkpViB4z",
  "key24": "4oFue9n6dazgssLcX6eLGUK6FET8ChbriYcoko7Af3UNKXRHAjDyTiTcVB8KWiRSDaU7kegJ55mzpefufkCt6cz9",
  "key25": "5GWf422SvT1jBqUo53UR49ZuRBFaCXNee6p5mD2gp5Q1pSo1HLvUuKeoa1x1ADcKDbgBAzbTTP6ANk1i3dwFGLzv",
  "key26": "3MV3PpQfi3B8ZMi55TansvktQLeg3Rz91V1ou2QZhrEN45ZaPNsvci7bVajL3QA9moVUMv3ofTnWgZMTD1dfsnbS",
  "key27": "2z3XoNsD6SvrHxcsERaQL6USwV36ehuYfxMnjiy5EwqAxPrHv2ncsq8iBACfw8mwDegWrCnsGboCvN6KTPoyZEw7",
  "key28": "5uhAAWgD97upkghujXePQVvS3sfN8vbzcDEWPc1FzA6JgTvBgCVbPafEiqMceK3HmZZknyLdXkpi7bewatoFuw69",
  "key29": "554XGa4QPudGHu7fQX89JMicG4GCQU159Jo1BsXtMEXSgeX6ZUFCJYs74xf9YVPQmBAyr2DgSpPL3Zsq1C4z1niv",
  "key30": "GHnH1LrVgHiupQpkDvfS7ZKyU2APizuCXuAkb5HC9hgdSdZFxuLKzM4avkNoegGh5Gc2cA9Dd18WHK7iKu49CnZ",
  "key31": "3aHJdwe2rhVYp8pXoWKWiwStfaqRJPuXkfmzv6XU1EYdxK4HJRyz6mZPFa1Tdh7SRKCfDMqEwiwR6Ze6AUQ56nR",
  "key32": "554YXceRin8FBKWtbhozdDGi1cZVw5XWtHUYPT2cacWkFnbgFSqTfrjE66sSqaCZdZv4waHERSkp6ujLvPDhH619",
  "key33": "3uqbBbQuLzSchepgcwMUTL7rP7Ye385ZrhbaszD6CoczxKckUz6QnH4yU1hRX1WWH8vX9weAPXKRqKamC6C62EWX",
  "key34": "4bJEPevUpqY5dRK5XzhzjsBgrJUUAsdHnfFWweS9BatqWBxXD7jW5YXRX6nVKdVEfPGVyTAcwNzx1g6SSXPPufkf",
  "key35": "3F41tY4Y5tzKGqpMWwc229QMUJAB62D8ZJz2m6umyaSqCtNEyaenvbEAh6MaprR2NRmhFqebLz8LQgSqv1UuqHd3",
  "key36": "3NHhJqZ66scvwpzGNS2zogbDJiZcY96dgeMf9sPTmS1VFbHwjwAF3Mja7jgVjQ86z7jxTzpMCkuRHdy3FcE95FLj",
  "key37": "2HbjyQq2qZDYSuXeCEUxHASQmuibCnnDqKx3kbH9DqwdBaRhWyUHtWg84jmbVzAk91EHf1sL1GtbTgViu4WprwMv",
  "key38": "2fyoVdzEumKUe3gnX3DRsjpmbio9Pg5c6DxUF8FM3G3a5YjBSkr4MBHwgNw3jdo3uzCsd2nDZps1ktCbWGaDTio6",
  "key39": "9Cz5PG1wb2XHojeJR8JDsVpD1xQVEoqXxFTXUqzH1xpT2amV2mDqUiXQkt6EsZ6VeKYjRqXCBaj3E7SxAtuDJr4",
  "key40": "3DMKejxe9WBNEZZQ4SSynpnA7qDG9D7V4JQSv6N8PvGav1xf3Q2Xyapu17sm91rggA3XEpa5YKNzsvQ6Rvz4hdC3",
  "key41": "2r52tiWk1t8pPnyF2A1U8DdypQrQG4gg2RqETeLR9f75Yg1arxXK7WWpfBcHCycP77Yfb22YcVr3sV4i3hr5cshs",
  "key42": "2ysbMnkcvSZz4Yfkx1Wbf1DMtMNAYXYwaSpAkYYP6oWaDDEaWLduRPHyYssUMN6P3V4FvRNSvb1wguyZWhSrcom2",
  "key43": "digvRD7PAao1gxwQjzu1mEVr8CKjVDWU36GSxnAdZ1AUK54ZbCSTyvbM6xASXPZHL3UW8CNhZaGkbNwrQjDJmkx",
  "key44": "3ggW9uZhdpskHXwNiEoETFmCsjvknX4USHTZBzwjU5eyBZ5aNGx8qY83DsbFvJ2APb9HnRMdC51MHZ4CLNUXxzwh",
  "key45": "5WU5U5EK3CiHHMB4bw7y5GoCGvU2Mz1X91YJvQHdh2Xs2w5qc7FZSSDGfHRfFuCHd2CrBGNTFkkcAsmDJLef8TJ2",
  "key46": "2UaKjcsULsyuSRCibZ7gqN1tXvWBHhzkZC5Kv2k1tUXx7ZEihDm5RCj6zfQrbgKg51UJdf7hVxMEwsCWPkpRSDkL",
  "key47": "61UmpuUqoaA2NjfcrGTS7GYY4tsgGAZgH3JLGbLcyVEDJLGzGEeeZVwgVncNMpJXSr7iLpBfW8co5AkFFFF8LyVi",
  "key48": "4dL3PZaGAZmydk1NhXtbTa81Uz6tRTeWuvFwMgMvqXywxAaLr7u58njZCmJEbkPpyu3bPxhiaH1Fh6g7kWSmAeXg"
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
