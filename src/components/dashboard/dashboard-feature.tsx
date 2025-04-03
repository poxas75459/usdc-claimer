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
    "47UVRMbdSNiYLumaD53ftzwPk5NQK9XHUR7JV6Uo8vB3rtRzsKSFvjX8J9UAxnouoFFSDaw7zLfFTK4dU4kMojzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGe8C81M95dU8kecHjBPqGyDdP1mT78Krn77TPv6dptLCgUag5JB41mnhfmjsccX1BU4FQZm5GRsSfzHVMZH6rU",
  "key1": "R9r37KmPYCvTn3KJV4vvi3xS1W5wUdxuQwfNCUrjafZSTeEAn1BonRNKvjZLNdUEMd96DeQHzrrvhZH65BNoukB",
  "key2": "5qTjra4sFQYuhwG2ciRRFbSDzXyBVaLqxfqsDDK2Lxwy56msKycqLs1138qX5cVig1VTyBsePYA4FhT5yNgnCYxr",
  "key3": "5pCX4ttVdwvi2ci4HkF1VCCFad3c2NpYyqTBiyS62HmV19ngoWTURz9pPi6zyoMgH7kNZYDAuqxxuUynEw9Wn583",
  "key4": "Rspos5Fajmx6Vj2ffSubLiyHJAYU8eXmTbEBMqS5nnAoKqVZxZovo8rtmqbGPMDAGQmg6C7vtcGyK5MfX3ZdjQ4",
  "key5": "2UUEcLxpvXbycnTd9kf1AtD5kcCmfX8FKZTyRghE95QZ57jgJcQFhVWp7uTcAQzeiZHM5egtGSYKB2eznzkWxEwv",
  "key6": "3QcgcNeUA9CoouC2Y4uqpMziZnZhLCzyPPm8ZVHdv2jWaw1ZokwbKHRfhHt3QS2Hx7HY8qWHrLxwLqpnBi62G3q3",
  "key7": "5Rhb7DAaEJJYvdNwR9pJwwpjFV5KHn1dh3idG7sNyAFZbDBSJMQJnRUuNbXSJ3dwvhZHUd3t7AVeu8ReU8eLina6",
  "key8": "5BWZtemXge6H618JaXXH91FG5Ti43kUuKLz9CSFP7WJTtSKnEPc3pjEeM7AqnhuLFfQbTCoRbuA23QNqQKcokpbm",
  "key9": "4UQPdmyzVzHLQTmwCfe4Ef7ETLY54VN5Hz4zbRrqKsYYrxv44th9qroyWmshs6Xn8mmjmwvxCECdf77BoKNrSbfp",
  "key10": "mJvzYSVrVwfjeJpfkuQEejwZFDVGe4xwTmd9CchBrajWWhyjQpfA1aYuJvxDVJrmcRc5fzt3DkDrpV85SBsxqss",
  "key11": "4i9cSU5GsqF55AQfDrRDVqZ4mS7kVNNFBa8tnfFQYvTLLk59Sid1xjog5fxVkMt5FWm3ZUhLjkyg6rnQySc96kqk",
  "key12": "4EYVoFmieqsysJB25nZHEWUXwnEiGc3aeKPyqgeninNZDQLXH54k29gpY4MxBGz6wByYHGxqp5f3WLJKmHAi46x1",
  "key13": "2RFWowcmPKA7VjSSbhqZQ5cj6yeSyW8peNfWtDHBGUyBNGGEEkSiSCvDgyMSoDjTnjgZa6bG7VDaqNpeNNSB2kmB",
  "key14": "3jyivAX5Js1Y25vcrQ8SSkBrZ9MYq2nEDBvvQM2xGkYWu2ZusygNtn8SPFLye92DmJ2dyshUSRYpA4KXrguLKfrM",
  "key15": "5susXx23iUU6C8MhrqQQV7h6GyPA545uPAFkRGbKH2YuB251dDa2hgXviw73MF11YVGP8Ne9KJzbZcPvWXWdB23r",
  "key16": "2pYQsjNfXSYwXxrEEUXLwZAtNWy3qQ8KfFBXCW7kf9FrXDdWtpzBFQF7HzZAMqrQFpxgbVUPqVNw3bFmDqvhRBGf",
  "key17": "4UNXHXV2EzAQinGawPBoopJUww5m5uuVepfERZDKk9V4jK7vWmEsGp8UUzVsoDBSHctTuYPxizWD9REKFNKMcxWE",
  "key18": "3TTBEvp16MCeNDqYtLZhRrDqRDez29iq557F1kNU73TGpQydxcUokmBX9bkekiTFnZikzTMqcRGMKFBqJdYx2CJA",
  "key19": "2vdq1scRGkJutspeoZcswkZpyQgL4PnTtDFaSBUf67c9BrzKwuVpKNtAtTRSD4yrPG26gyTx6m3MHs2CZJ3zxVpQ",
  "key20": "pnBg53UoZGJAgtAXBbefqAazC3qKFg6nwRf4DES4rzgANmGZwQSmFcwkUACQpj4763PeX1SCuWgRACu7hLPGu4q",
  "key21": "4WG3TrpZ9JN1RWGgx35pQ1FJDCtyMhYYpBbD3Yqay99EieqdzsSA9TU83UfFMRi6sykQtoDf4dcr83LDzantKiYk",
  "key22": "2Ugw8Pz5KGU84M3pW9w2bsZs6otPxCvCkYYmLeNzcvNSJdoFUwrom8D5mbb9DBvrMGV2Rcms1UKRktU7h7HuaCV6",
  "key23": "39po16DtmsC8RZRGztzMAWRu8G4fTWYrBXhE9vLd8Ego3ZUJ5Xor7vLCEGztBFFHvJxPbHVKTUHhcr2QxMF9ZpSJ",
  "key24": "286VZfu1UkaJV2TVgVTfSuQof8zVbGc3SMDzHob8SEQ38sdKdQLbggvVBpTpKnFsur5RBbwJi4TyA9EFaVfQ3iRi",
  "key25": "2nB5XhLLokRoYE4FgPG9XT6gPYiNewcfsySb2CYKykyTsAzNWzCa6M3gJq2U5bWGnNofJsWvADReHoURrNhuD7Gh",
  "key26": "28AdXJWLMykd86FBad1ADVarRVuYyqX22zEJJFnvBtnFxg91mREgfHPa7ZeRD2S5mLk7A9FQsTkp8SYY3ouTkTgb",
  "key27": "2SAAduxQqWwc1yHTc5VknmfKYYi7RxPPxwU64dftTdWzdXRtNB765fLj4zzu6QisejPnECJQN5a731e1835rBYHY",
  "key28": "675pTTyDtJ4hQ7UwvygiRc7CHvY4SwwV2jAL8GWqG2vC4LrYWDgPz2ouL4j5hhprfeXAna14xcUn2o5C7UXpU9hu",
  "key29": "4xCKnXyerjRaxn9nZaDf9nnXCj4X6nmPHwUn2QHwUx1ziWeK7EK1EKcJknFVZbdjqFy7fyaUmYVnoVKL45hgSAFo",
  "key30": "2AoHcY3f4r32YJRLDMvexUfCPD54eQjEeYW5kYq583RWtaFk4CvSSRByobxB9c3h4As6AKmH9abN9jHfQKmieK65",
  "key31": "4ZGucn4qGgsqXsPw2BAahRpFoftWgfw4MSFCYhhVvZC62ZG2cabgynZivtGCStvNK3b37AFdfW5xUyLyXUToMGAV",
  "key32": "4XLcUVYnzhtzsUBmZwWsRihaBecdrv9QNKLD2oDMNK5iJAmScF3LAP8ToU7SnB8g68nYRPy6ANVgcL8eZ4auW1dc",
  "key33": "4CsB3HPBT8TppqLioXS4PXfCsVvTuViKxeZNrbx7jPawvgGZ8iYrujWN3yVF1659jSNfypjvLM8aTmdg57JG4CQ5",
  "key34": "3p8pif9Ei7gib5uRJnGkGJqHHGZypVi3Hmm6wpqAbeBm1dizEjgbRpCmfuf7huQoEaM6yS9Dg6hUWWQeFMeVTTy2",
  "key35": "2mARVyP31nbye9SZVG5KyfatzkKdzWbMfuT1W1CJZQa3dJidkdEfTwTihPFS5jdAqHrzWX9YXgiZBBKTEVfTq3aR",
  "key36": "5skfDQE4RGArY2onuVv2Q7nwXR3D1Xwu7H3TcDbzFs8eEVKJsqk1m3FKsPX5EV864QoX9mgY1MAUTqEyPaTMWMXC",
  "key37": "rMXvcxLtfyKZTVAHXdwPNSErtpmNYGA8mWJ2aMcP8bv5fBU8ZBqSHL9hCtzDgp2nzN7HZFZPStT2SAmhJSwGpw6",
  "key38": "qq7nDDnfXX81b8Pd4zLv498rKABxGuKNpjCUB5bXWDJAEuwJBfUKurzd8iXSShU5PFMXxxPwGvJuzvBuiRkbKx8",
  "key39": "4XqsZvxDTnucMHYimiuBsmdneqVbicwS6zf3ysDeDsFChNrEWES7atwLVsJU5FqwbaLFcf9LbVURvMaUgTK8FhtK",
  "key40": "3M513soUR2dLHKVhEcSMJx9asztbNuRWbNrdmNFDQ563NshoYMikqtJmAJf41FrKER5sZTUfyq2i8KqhKFUoh6Qa",
  "key41": "iwwj4hU2CvrfH88PqFsXVEqmW3r9KmqeMYRUnuGnaWUGtNaFu4F6be6BvHw9fM9xxnNCsth5fHaFpxtcjVRXXKt",
  "key42": "3WJBvZTBSURc6UaAvQSJg4ypvZ4eXAvumnBDpDQAaKEpHLwp5i6d1dFV5DwBsnZUPxtx1HJV2Y8dHAm9BU99SXeL",
  "key43": "QRMa8eH3EVo64bhP84TsDvZgJ9qULdoDftxQTnFyRBQvoDT7DrKVADvVrLJVN8fN5zTUfJstZmFS2v5GLx5jmX6",
  "key44": "3MvEUhKRMv6Bh33CkZpuvoZz6QHyuyn33T8zWKo8oaNN6EcGygNS4BMibgTK13Ybe3WSWoFyVgc9nXovsdScZvTw",
  "key45": "41Q6qaLP4zc3j1guV5avATKK8NnFb2YRUqrstHo7XfYTaCG59iMjfgKvJtE4BkMduW2u77veJgCCHpxJr2Gm7pZQ",
  "key46": "4mysDGgctKArvHDvQE4LwHAh1yWqUQFhrQnfoMYGDLqhCyvvAeVP4LdGAfdvepb3CeH9VseWJohDghmTQm8Y3ZSQ"
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
