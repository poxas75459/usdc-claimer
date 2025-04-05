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
    "2hZ6JDLa1TL9xrFURyonNnweifTL8MvoQt2jLnAqcihJ4YvyZmQ2d9eKf5qWCfKRbHaY6amghVoSaL6V2hZ9VARe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkQ8yUNXu5SrUoDmYVxMybTtwkbjg9eXJoVGGrmbeyFfCQSBa16qswBeiS8Y8Cvhs5F4HUujzkhMqahFAeACDFY",
  "key1": "59JNnZJZYoAjviPWBgwz3r2FUYAFzDavHNzbt9tKxRTjNUu67QwnFQFj3AkeyFNaHSuFkf9BfUZpwNwaY9DQ6oEN",
  "key2": "bSuf2LCF1eXwhiThe6dFt9SCmXxvdkghqGu1bYWoqNbSaK4q3ZgFs61qN5yoRAUmNRxbS299QqSbE6DfNHZnwMd",
  "key3": "4eiWLTghnw2y79Z8HQyBZCgmPBmvDJDxCDpTgGJT8AZq9NnWjMh2GEyg6qZB4ZoE3wTwDr4p4XQnvCv7UbEJZoev",
  "key4": "5gP1SBVofk6cRAoqjSzvJbtuhCssrGfPefAkdRN8xhY7TtaLnpuivPUQxdSYDwRw2hp98BaLBUteNGWnEGkSFJis",
  "key5": "5SzgsPc4YU6f7SUVbrazQncWMP6E2kS6bhqaiBf6TXwUvc5TSk8xU8WyFnSsYvKashmaViKRGy2cAJDKq2mpCk9B",
  "key6": "3sYZ4qdfjdzoZ1i2MRMSXE5Y97A4ozxQYfS2RyuePNHNPuyKP7DFFrUg8e7NKrJwzBrpTqJxS8bGPCgeie5yRDVz",
  "key7": "WPFkwauQGuPMvwxAp4NQgkn1nW8D39iLbLz7zRhvHX5uNH82y8q7QJytrbVXaRrJBa87agsTpjKPeVjHY71dcUg",
  "key8": "2VUKaDV7dxgqxV97vVX6UdoroKexwikD7ogZsAujzWLthCcqrDwKGbQDGhQwoVkPZBaNybBwqn6tpv1s1c8e8MEa",
  "key9": "51z8N8asuRFhwG3973MVBfhtum59YUqow1EZyiE3z3tGbRgngM1vzz7DeNfuBfEcFTUD8JDojAiaL3tMXrCQ5tg2",
  "key10": "UPJ4vMrewoTWrr7JjrdXJFrg4A5jHcrkAuaaSZzEqbkk6nJycAHfMFTdDqDZ1RpJoC2V8JRmZEFkSbuyZzJhdvD",
  "key11": "4QLMjn7f8ECgbcdZZG49A71Lrw82mw5EAA18uiF717pW9mX1ZapRq5fgjzhAAF6iajKHpoE4kLJmnyzW9aeVpeXf",
  "key12": "3sEJEXXs4DDPKma3bW66HEGJ4zJDdn8CPyP7hx6obygfSoPcxprQDWezDXNaDBB13AVZtknUn71x4K7dqHCPecCX",
  "key13": "3ni5VQ4tG3ZuyK3PQGx7r8TcepnBLCeLkZTg1Dy8VhPtgKQpzH1LZiyWRovqq1JGrfcDyLMuK895AMuEP41kTjEM",
  "key14": "5UnW6a9xNT7veeSHqhC35Yjt3smH6Q6b4qMZ9tbLTUQQVHPWRY9A2DRR1hPVEBdSrD3pan3c9z5RJT7A9rdXiStC",
  "key15": "4k83s3BwMgVc2aWcyegRCTLpQgdXG9GJUDdixHabd2HR6LkWvNDXARnHfbi2SdBTzznnCQbrtHzsPdSLyX7qpMk",
  "key16": "2AfwbovTtDGgwkD9WvXYc5AjTginRGYTdtQKPsxzJn6TEDCDvnCPmjqrf35vyN7SMHMxKD2xd9SV4Ce9Kk6FasUj",
  "key17": "mi4bov4avuWYvf2fFMeyerFZDwYmiG59fdNM8nKeqZHMRLJUy6558ak95R3CHVZKjKozdx2Z2hCBW2ZcWpzMyTB",
  "key18": "4CMeJGYDCLRPLTggUhaS8jZrhnPJNr7Gwjb5VnkKkNtjTFMCw39RkgdgyhidGcmU6EZDriuGF6uA7Xn7KLzUNvSU",
  "key19": "4jhxaUg6EtmQyjKrZweXKz3HLCXeAjtXQysBwj5gR5U92fy8ADufZHgyvFJ4VRXfjZaNKTxhuEVaNmw7ohftZUYx",
  "key20": "31nkhGoWNjjRzf6pPs9ELVWFEX4TybzDaJq9VsutfegtpXp98RdVuvGMPMnWf25JZyVUUWTFqrNsdtcbTrh9uMVN",
  "key21": "77kMNh1zzyPqDk3xJo6jXtqqUzUgQaGJq8h6hD56kp4b4im7XWK8mJHdg8eQEJ6dm5HPzWd4DWwXTSp5WApKFAL",
  "key22": "5AQH3BdtRapVBFBbyd34mmZoJk8Wj9qVFbfX1hoACypLJP1eZxuqUcRMKL2ZgeTKLoanA9Wq5Y4dwyyEwWSNRFWS",
  "key23": "3ZwF4Zh6BrgmdecUWFtbgbM5FWH7RGbD4YhKzJ6Wbhs9y7XbfwEv6rzCMeiWtArf7S93uAp2BPgDP9pwGPw87SPF",
  "key24": "33urqfKC12c9DwHZEpr3vZVdcqD4C7ZsxuvtF2WWJhCcC2tNoV23qh7Wornsy4fM6jCTXJ9pD57sHiRMVmyRSqik",
  "key25": "2iFsdACCWcRKLAq8fux35j7bpVESsRpAHkc9oGQ7vDXpENQdb9GDTQpLLmnQApXsdYiaL8HghzAdffu5hF7kZFS1",
  "key26": "2GwuAvPLJporSKK7F1x5MErMCB951fofA6DFoYaQVvLMoLLhQyDQMF3GhXnmPUXDQjUA9fRrMn3NtDdi9YTeBYtu",
  "key27": "cc5DqQTWmNEzjvdLco7tcukbdwgQNeENK3hNq5wx6r6RAH8d2rLUcyKs3eakgp2tA7xeC7zVcgYwUJY9iNkBSgm",
  "key28": "2GS8eMa3df2nN7PPj2Hb7RYyLvsofUVfGnwfexyMqDqCFnQ2y1vPYqWjAjnCHG8qjtCSE2Fmu68dUa1nohkULeoR"
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
