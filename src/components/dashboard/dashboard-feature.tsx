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
    "rnLB9yhbR1UbGDVS7EDvan1CKuAHT3K9CG63ma6J1azVibPLske9A6J1ndKCaxhAjj95xEBQXJkauUf48YbXE8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWDCT7F75gUjYmpp7exJqoGVHwEgWV8FNd8HuLGiq5k1iYrThRW9rrgj15WtsLicXQRP1ueyZC3aqpYwXybv7Kq",
  "key1": "YjC8onLUxnxRJCsrZr21HSEb3zFCxJ7SJdPvNyPa3Sk2tKyfjheSUMuqbkUyY3ND7uWJUzwG81kkYb4CRguqqRN",
  "key2": "tcT2m8dCkVWqVR9RkWHuGVwnKXedFVuRNvU8CqSfpBS77qnVZZGq55xip19WyeBi8jrwGGX1oirhNqf8tqBik9S",
  "key3": "5cfdTxpBjGwjWaxxRKmnex17Xt6eHnFVFuRkEajwe9KXW44ZDWw5DADdDrA1KYFSoLsyFutKbxnLdQJKf6YGaYGa",
  "key4": "639ekzzqff3gFMip3pBzzvg1xuNtN9ZqkVMMcbb2Nb1FcwVnmGuEURTbVvHk71mdjTRkojCLSr7zKFo1eGrMw6pz",
  "key5": "2oPkkGMkHBtvxzK8MSZM4AxMpgeqgWr7uW8QUKM2rMSZpcHGBYNPekVgjMRoK5JYec8gDowHkRXhD2pPuXtw9Uvr",
  "key6": "3jHBMmoPyYxJhpSMUKivjQADJvaBV72839RqfV7FW5RQuVGoeXEwofwN681xJ2rDAuicp3CsGE9q14spBsxNMdyK",
  "key7": "3TfwTS5QHxEc9cSDFvXrrao5Meo8RkCayHembf3ZksvdFWGDVqS6WABRnDtyYQJiefqosj9AYm2sDdePfZptUSyU",
  "key8": "2YJz9YQZCE8X719eRjBQS2rVDxneU5pb6e9hbZ3sAotXwoxh9jFkUaSYJawqCKadPmLNLECG7muJLXeXagkEwAnC",
  "key9": "5Xvx198WxLrhB4XXcXR39iAVQeaCJYVAwt6mWRxB1mBQY7o9QWrGeqvMWhgmNZtTQWSLAF4SNWmNVkYfzNuCuATo",
  "key10": "5WZTQh1WSZhdDYmjGPTiPb66WMsB4QBgsuuSDo1w5cauRsPmMRX8LbwveqKgdyPEnS5WXfbAr2BoGhrKLbg8MQPi",
  "key11": "3BRSzkbu6Kr4hXYSi1azBTw8VwjCzV1W9mtdp94DVQDsEdpwS5Ad8jrMuZZWFs1CYyox3gQQAe8YSPcx83SyPni3",
  "key12": "5fAAjCB5ZEBgx6bVb2xpvP8eubjvhcL4gyS3mP3CzwKmiabehy6zUaTHpFUsF21LZxTv232uAM2KZo42Y778bbMU",
  "key13": "xadvVYVrB8EKHQePMPu5aXYMeqyGaASw6jFdWBUQzLGRfxjDHhb17Cfmu9JKdReFufgCiWeFuHnZnnvYR2rTZTa",
  "key14": "4NWCxSDDrfftX3jXAuAXXXTM19bf8BAAjLW4q3gwXn1KEXQE3fNXr8K6ygiB5ZNz68wj33UMwzs1iXNLJdVmQBMa",
  "key15": "2NYGMT6a1MBFavP6PiBJkQL498T31k4Hrd1ESpXab6jQBALUJS41ofw3xogCfsmVp8RwChuE3zcz9zn4wFNaK9ew",
  "key16": "5VfYaFtTJEjvHvbxriQ5BQZfLEMzkaraT58BuSNSXAcFBGMax7GMyABWFVR1D1jqjQ8ZdthFrMuTZKugFAP3juMg",
  "key17": "j7Vkd8XGhU8C9Rv7RAp3A9fJwJjiyfBQ1AcL5565LRw62ZjPYUTTBsuzE3iind3YVU5aFhVfmKFXT1tEMTACmW2",
  "key18": "5wxstV7Y7aUsAvWrqteNR9F8cADpLLzd2k3zLCRAjPsvM2WLvXx5U6DzYdFhh3a3u85yienwEKg9VQRFCAxAVdtB",
  "key19": "2BJXAj339AVAx5MwvubSmxmaFSCud1FHdWWeNcT5gLrEDrH9RVuo9ByuLLpegCiEfq5bTREu9TSCCHger5fBafqi",
  "key20": "DiXbjJFLAySbLa5JzuLCF5uyhEXtK1SK3Lq8nMog3yVhcB8k8tYhgfdnDsBJGFXgLEsCwaPEeNne38BGCY4iaY8",
  "key21": "58DT4w1ZaSEK7vAoPSo9UFJxCxTubbCxLvMYdRa7w7AG5t6mVLAEYFAUWBVkBM4a3VLgMmADRc9T3hmmdntitTiP",
  "key22": "5Lei8AVYA2u7qhEP8eApcWhLoR89ZGhwpXheQYBqW4gyQZ5Gmo8mnE9KJfmKtPcJcgGGND7tqc9dvuQeuiGrSQbT",
  "key23": "54WupRbaCATbd8YgXw8cp7uwJT8riN7mimkakQBwQ6mEHKo8X3sDRdTnazMtxcdDjYXa58ZxiyWUu4FykXJKjPW9",
  "key24": "4L1WGWAEkksYD4k4dbYUFVRygpMJuoYuptrofDg5GWcMApaUpHfhVpUHdzwwpF7x4BYhnnuVvkpxVuuJWhEeQJdP",
  "key25": "5rQjLtA3pdxP9gA5bpdd3RReEh8ABPN3sHdSYZk1KRd2vbcxK69A283T7jjsRDqFAWfZ9fwYFiWMyXaWf1x4dDmQ",
  "key26": "ariVxSbK1o3mdkAVQvqfeJrSaUYXgNrJJko9MXJf4v9m7vyiYj1exbRSmLtynUsnS7ZgLQjAW7j2AiaLxryzvT6",
  "key27": "5LfPMuASHBwaroJgUhEfUmcMA77tQZUY3v8beeGGEXTTLjyF47Dk5M3y9sByvNu1ztdDudbC7KKgKP7XsnB6ssCj",
  "key28": "4kSpgWeAgrHCYPzReYfYgnSkRnsv4EA5HYZt8euSHkMhQHsvxvpSHyLPuscJDHsrrFEDcRVGhXNUuZvyp63uLk3v",
  "key29": "2J82Zd6YdD2Fo79FYtP1VYQTCQqgov4oXZy1wYRDTHuZ1MHgFHg5AhJWHjzo5cKs4CwekWZ4DcC8NLzRFAUGY5Mw",
  "key30": "4qm6ANW6MnK5MGf4ZsqYSDdt2G5xhGqmhcyfAct2RJMfJZnGkds9tyRmHAYWJg5dnaXBa1gdRPod2UKav28jwKXS",
  "key31": "56Q67w5PVymAKRxzVTqB7fX6S7T9ZXejHmkUQtRezckb9XqEDJQU7URVFitMWsdTw7v2Si6vf28TfXLiiBAqrUWU",
  "key32": "4p4m1gjoAtUGKzDh2LoNzqxQmdjz34HFfPb9Zh5gEt2Cf5Jd2TsKUq9Yyoch2QvuQV8YVXGc7YWdVEPsyH6E31G4",
  "key33": "5xZocD9cU66wVLAqdFa4puAvLv48uHx3n8zGAvhZkh19wWeqawEqZjYRjMsz7CjfY562z7PswCLvyLTiQx8bjcQ4",
  "key34": "4tJw7KXNN4hTr7VQfCM3dmNaRG3PJnuzpnNSGvn8TCYK9W73WUJNrvdbSX1UXrUTuqDYhL72LR5DadmicWj2YP3i",
  "key35": "3Q3sqttyCFA886q8F9L4q8nCXX88qL7DaykGdvjDRzaYXRREE2uwNAgwxJk1v2riayHJ2hicgHLwzJegCWcdSePP",
  "key36": "4pXg2vbsqBcZWYqDZv3XzeNwaARkD6rGdG885keTiaydNEjasJcYn3Syg5YR8rwXLoJ33hA1CrXuy32DB7pNWoRw",
  "key37": "3Un1PYukZ6SCAZFKanS6UUm8HMcH1iS7vXu9tJRRhkejr3ev2kdE7sc5HnKboQdvmqQj5EQRJFZ6P7jLqsZvcKnZ",
  "key38": "2ERqwY9nBetSk2mxsGcKT8aeLH7tPzQjKJPgzXxAZcAWymaUZpDUFav3ZB3vcYo58CVCVm341xiep7YZV6rrMr9k"
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
