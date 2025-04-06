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
    "3nEPxF5RZKYDrXSdieYuL6aaYiVSTcpRYcrR2gG4Ggf2rkKdZkDRAKfufxnvnjpFotYQUw7cfof73nE8bRsguwD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31heCSUUFhpPG37DdZYBRyREACqd7HxzyiL1FUVRMmsjqpCdCLTuTfbzhCK1VPGtRvMChmaki1KsmyKKkdGwGGzC",
  "key1": "3Xo8Mz4KHAiUkLed98kua7tdhxzH86xH7GzSkbyxdh6SZdMPoWkdJPUdjaRftQeY5YbyGaw15T1r9H3gpz66iHbs",
  "key2": "39JopAhhd3nPSZCeKSbRpjWg6z3MyUYeRAfXQo4VKMhQq2SmmsqF3w3jEJnqVxPRqUd4zQeAZAQ8vv5MNjch1YmT",
  "key3": "2xrQWWVMPGjeKXv9S5h1FWFaK8fPq4ugsFcGUvQYenuT82nRXFTkWDCD9qFcN2YftpEQGi9qYqxGxKhXWiR2Aubn",
  "key4": "62ibqNefHobJheE8gz5fkQTfFFobNgtGTW9dzpjcAPrDRBgVvkrPXBgb1bkZQp5QBdCP6oLB4av353Gu3zSMt7Qg",
  "key5": "8bP5A3tGh5czVkgMb4K6DovnnXtunDpY2MbeQaeBUzPDxpfc2krWTCueMfn67puKbraVto8XEqT8xzozVp4BaK1",
  "key6": "4QvoCw2JHTWyVkoRDNBfM4QX9RkKiNYGRVhLAG2Mo9hUh4xxDqhYiJqEs8K8GGxEXkoirUdQF5fF25r16Zt9zqkK",
  "key7": "3VhF8J1APhg2aVeGFLfVGoBXXbsh6vtXw8hxAAJv36NGVtCV2RnpxsWbaMpmWNY3bPCCfMxEuZ8wcJmY8LdPoTTG",
  "key8": "2hY1hyEKADRcrtKqfESfuvxHwxqst2Da6j3t6ucmkfynjvdChQhRjgAJru419qMNnKtVPXYmsYVvWqjCPEZ8ShaY",
  "key9": "CaU1L31H9dcq6ou1xcihmJJYAnDryLn6fYkfy7JBQiVJVrVPgDf2qpn16gMCBbMzuYQrVsCewUhBRJM8bwsttRT",
  "key10": "SsQve4aFsLSUeTbFFdk8pd77DLUVkqZXDkQo2bK4qGq36T5wRwDHZnLaJxpA8EuyJwQwvrDEyTWj1jPP3dnzkXY",
  "key11": "4L4YXnK5wyMMP8A73ww98NdY2G3ccBGQLqr295vAiCBoi78fz1Pnjdf8cWonF8UVoUPdejSQLEL9tNKQM8iuHE8k",
  "key12": "eqEJTP1pznjb5qV4eQJReg9WknWYzGs9eAaskdZABQSoyeRgzQmevPe4PmRxnjuvkwpiavbbJB8QDDuDtn8VPhm",
  "key13": "W6S4YWMnBZJJTxSvMMYKocjBLkNdsvtuY4bgspiimG917ZaS1apr243o9kf9buooa8tQx6BSJPHfFMs6KcjUpej",
  "key14": "5fnKExprJVXfRd8FdCzPQhna985Pc2f2Ye79DYWTYkTFZd1MgJZyGBj5XmpjVJ3x4i5EjXy3peEJHbCJQ56Pmbhj",
  "key15": "EsiaSSsDKJXJJbnis9v8sNHLJwAfPRjfdxvtGvKhmnKMUvRxcnx3XzFMzpwsHdvyhpd2d8D6GLRvu19VHeeJrY8",
  "key16": "2U7waeyyvYELUbCBRHj5Qkx547J4W6bfoXaZXZ88FPto4DNeYsWwmAywX9ubDmtGSjA1qmrpcwvuHusZdCwbKqTH",
  "key17": "5mpcZViDdZ7bGDsjJ4LU9PCwPyo1oo5mTiwHgWBej2CnnoxUVA3mNhkDuGkCyLyUKGtc2njfBt7FwidXTYgV74ma",
  "key18": "5xKaoXUA9CQyMGujRCLqQXtYq3ixcK3JDrho7MB3Mo8JGk1DDcQx9eHZKTKYJyutGSjiMs5mAkfruZzt1cp3NvxD",
  "key19": "4uKC6oTyfSSrvRaxGzxkThhZyfnbRQX1mQDnz99HLhbTqdjESoAooqdtaSQLYheZzQ9rhUHc5N1cr9VqFhEcZScA",
  "key20": "3RELqV9uzBrLymFYuSiAMwbqj7Uv1uj6PTqBfb4jSj7JeEwUcMhLwwdnT6DE6FVzWiZqacaaJ5L5vM9kvyZovijq",
  "key21": "5QBtCWHwJk9TJZYHR6XkhCXA2N2qcKBm5T7iHi5HeUxhhZTvJqDHWPC7krmNWECp4wW319oCCQnnKKpjgacCWT59",
  "key22": "5LhtsrF9SdP969wMSEL16BLaxy79ay5VRcCCXxv5aJ4NRDzFW4rT25JKgyXa8PtTn3KKFkvKicczinqwnbpbXGu8",
  "key23": "5cjB6dGj93Fs49V2Yqzw53QG53yQ3bMDqRsfDpzrU37oSPb8vkjBhRK79ewkezsSrNUxCUATFbZmrq6s4v27Hipt",
  "key24": "4QLLDUnU8dCeMPNQuP1rmY43Tcv8KFdQDMJSa6ezyyBA5rpqs1wRqvd9DL7XuXXJYstXWWkQLnbKcaNxhy8AdrLR",
  "key25": "iYpV7u3CLkec7ifsVaB1mEUuAg5fyioPGHXhw6n3ibmfpKkbgrf94LoPf1asE82crPFFJCUAhAL4MKfNmi6w5aV",
  "key26": "4h96Fy67EE1Gcd4BohkjBqquoEbhBxdvBUJ6t5zNbUYik5pCwxA5xkXJena2VN3YX1kkezZqhh3vzkFghL9zoUKE",
  "key27": "5Bpruuxm1PZZruHPYTLZgVVAA3QvpnQnSpCRYyNuTLUgS1hdZpz6dv2P9U3jYXqxu6Eu29kqK3oQ1VKQpfQcHDCS",
  "key28": "435u4RiZJzJmdLhxr6gjwYkrgjnEMyZLy7uKGTCRxo6Qsc7GSfenSwR65eY4WgWz636vCoA7un6rUEXE4GZbbmgs",
  "key29": "3uf78UsZk3ZiHbqcD8FCc1XbQ4fdAmnSe7dsXSDKReMGQ2ic5rnMkJxZi5PYeqVScaY1h2YtxwnahFzPnB4DUuXH",
  "key30": "4VUAnt1yVkFCBfZd7m4tftvkWFHYaLYZgmiyFiNPrU9b33yGZd1zu7sixjmM6oSXCUVVz9xNrJTz1TgjDQXKpuSs",
  "key31": "45Fx5agKGyzdu2SMWWGTmdh5LS8G4cgnTaFqYGGHUpMjtAE7DygtdbArhfK3S4kSC5FDYcRR83ebnC6DGtVmCvY9",
  "key32": "34UVJu9HTJnKjTGy71kBMzE3Epfb1Bc3Kiw6djYeX86hckKJhMkKcSUDjUhVNo5mUVEQz28pAsScEkj6apfDmsXX",
  "key33": "3nVFouwsUz1cYZPcfBEuTAjKn7TbeJBmdZCDgfqjxmtv3baznjYedK3wWc4XHjdJGuvK4S1SfoWF3rh5UM8EUjXm",
  "key34": "5ZfzPw8nFEC4kAF1rm3BSGHfznqcoa5Hx3qgME8Uk9tkexG6XCLHrREkhHsTkbSH4jQSXzVBRnSqYV5RmYTUZc5G",
  "key35": "2okfiQbDfExu1cM6TupPugmFasj2Kbo2rd9M8uYmHnLm4fHwsCTfvzxabYSkCU7vw9f8ynmaPxjEwwisNZNZJq8i",
  "key36": "2pJocQuW1myu2mUEUHCTq5FBJUeCHSefPzsyvAhhjrBD8TzGPBhwid3L5hypysC557zydTfFTnvo8aoCiZL81FeP",
  "key37": "4ytRhRLuRApp3ezqLFKF1KAw8g4qKbwmanDWqcYsddwPEsB3SMWU8midfy8SnpEVp6UgwpG2MU1ucton6aDwmfwM",
  "key38": "4jNvsVCYtAeCU49ZxZuh8Txrfj8q2czEDRTceVheNU1K9NSSCh4HAvh99GEEDbyMpd6NPiB5WwiT74kiQvfCA83h",
  "key39": "5UypyjDaU8EagutnAHpUdfkwydsPkWCL5yNxASaeKTfSwiLqLG8Po5q5pUvTi5mFN9Xj8jUf55XYzKz9ihvd4uyJ",
  "key40": "3PxoPqr9MrW7uQE6MhzmdgXc2MGNQrr3KsMyL8ZGz7jGoEvM76McURDncJo6wEcqA5TRsVjFaVnFJhzMiCgWjrS4",
  "key41": "5kjyUk7nxZeptUzxZ1EGUxrW8TLzHpiwWMyZsEAAoxMmnkc6xvo9HJsSgyWLQ7v2DhqkuDqSUxgGKkAK5CTEGNNX",
  "key42": "2kAzK5yBohdbzjYj2sCS1ALyWvfzEB47Nsci2s8oxNF5rT3VpgxnK9gSaRC8e2oWAvxFGi3LjRpeo449wzYtm3bM",
  "key43": "2LD34GMzDMG8QCNJQKy8A4w1pSxA5iwGfZTLN4Pv2MATnBiDSErZkMkNbPsmXaBNkoJnoB5YM1DsTUeEzfZhYA86",
  "key44": "3JjkiMEoFuDa2SJG8aexk5uZMMCZZq12uMRs9seNYKXg9EstbR5UAFCjZ7RLHYc85f7iwWFJ8RkoXbS79Vdf2pTB",
  "key45": "mNYb8nr3327R6S4CtwiGSrV3brjWHYQCMYsVBhygNeMN9Z3eUZxJR3LweRXkELpiJM1LuQhvaHuDoQ2NGBktjyX",
  "key46": "33HvPBGDWbYPTSe5Mvp9iPry75B7vDcKMueAxMx83qZ6u5Ya4jUtmNXMSJX8YZGeHfVrAuFoU9Trzm2CBYGffUZ9",
  "key47": "4mPZCwvLsVJmWqb28CP71JYAvYkg9N8rHy18iFadTJNyEpPvXBjYxXZK9yaKGXH6qoRYY4knwQjxPzKSJdpiBMrA",
  "key48": "5j6ZKUuAdKbSRPXEaerJMqw1jpbETU24T291PGTincFvSGNkJxtfixbZrfx2LzDK5xBWZXdY3KTfWwGWATPXWd7b",
  "key49": "5PGcT7A73dTFzv3QJJ7XzA58Jv676fphaVP8TPH8Vqi9BYBNtuC1WUTzyVp4T2KddY6swpoJUzyYheh2TkuoUewp"
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
