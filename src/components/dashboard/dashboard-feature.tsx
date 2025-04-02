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
    "aceQ8RuVVXQkzpr5fjk2PkcjDX3QqsDg43vgD48CRuGDGqTPZTDSS8aJDfjd1me2ywkBm1RQESU9yE69QtnWtsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nQ9ZHTQ5mvWTtQKqCRga4AWUWnccMjj1KSGDV7ohHDcPdX3KpwaVUrC72QADDUU2q2Ztwh4XA8XfTPAEDQCktR",
  "key1": "5xgnbmA3iAEHZczqk3JzAxVREf7i6kcj4YpbBtCjNrgbqCs5ZUs3VaWSUskhsYEGo5a4DvGcn6Mr2w6CUfcG4etw",
  "key2": "2KsSZEdwmqdUZ1w7c82rc5z67xcNiq314hrRg6NXptD4UZPn4bKiSQ12DWieqkBT9NCJk6P9s58f2rbC736SkGfA",
  "key3": "331dXpMoaT1BMCPcHqtoRasWLucziT6TUEJBeRa7XW6jhysDbuurZdnxgu4i8NDLAhaJgvtKft5KT3koeeez4esK",
  "key4": "2JAQxep8YBzAPbnLAQB8LFJPW42pom7k3BQ8QgvsQwc3VMAC6q2vrta6xphG3pwMD59jbWAWReJVMMMM78WH5aUR",
  "key5": "ymipDwqNnnApFP32i4rSakZtnNCrdr87xLQ9bfitKj6GNXxKUwom8iqbvX8taNvjEY5zwsuiWVhtZg2voiZb7Fv",
  "key6": "237PgL75UPp533WV8sTFiKotkmLJukx3zi7C8WReV7KTpUFkuN7A8Dse5ndVMHAC7BG7AuCVMka2KQpcpGVwCacX",
  "key7": "5k9pJMwqnVTvo89UE28WaFGXed2mtPSTszwQ2epG1e2oy15e4s4Q6j2t6ZxTvNo8741rFr4g7PZM3QBt6ZK9vG3J",
  "key8": "2ucw9AroDsJcYSQiDfhdTEBhc4Qr1W2RYFdM2UUTgAeqznXuYTso1mr7rTmiZKWcqEB9Z2mEmCy8rG9g5n2cx3Lj",
  "key9": "33bBH5zxXgbtaT8kKDENTnTVYKNFjy32Ss45iPAa2Hm8J5QW4DPsEPeiTEMQsH8aVNsYSu1sfiKgtLAzZsZuubxg",
  "key10": "3FCMUxQSn7ZubuR2hdro2W5ckjHvDU8xAfeGZck1KVrRBYj8Fkh6wgNoAGeirqj8p7jd4dq7Q3VXvws45bvWvoaY",
  "key11": "2hqdMYaair1J8G8YFAAWtrbdMYaQCiF69HnHMLq3oLZofyhHmHXeGS5FPeJi5xhaJ1byLKnmmqzB3vtEaZsRQG5A",
  "key12": "4Nij5R76qKw3cia6gVVACdkmmQo4rY91ngXL3Q4epxWKFraAu2zGNZtEJVRxz9F1cNwDxxKM2RmJBHmYD2n87C9q",
  "key13": "3oigCh8UCSTXDr3Z7J81FeYiLbrKbBqTsJ2Qv3XPE1Z3zo983VxfDNVfHNncWE4QEYASKZVFmpYnMmyUxpGbzgRH",
  "key14": "4NwMFsN57PoroWnK43iDzaswkMXjrJ4iZSRYmuy1EbdxtJ2SKVFXFCECyWx5j5wiDpydSoFVhBh9KXXxzn5PSRgw",
  "key15": "5eQ4Dw2A6rryK5d5TqTTX811w4MAETcqBwq5EDW7YU2ErF97uhv5P5C8xXZ9HvkVVkzK84HBFRLUC7rYibi8zthv",
  "key16": "3i7U1TqZkWrKhaSzPri5T5Zg1mYWe8V79fJER3ZLmxvttXhLKtekti4HQ7r3DGSh8oXig2hbE5TRYyRArZ4VRwbY",
  "key17": "5w8WnpaeAMGtig1ceJZojMRcnkyaTDiN5zqHAerrTJjFPfg6omxnYWt9DJEbo24Bnd4ZFfDpHrKr6rt29rSKmZ29",
  "key18": "57RPy7Auy6HvxPbSQmGg2JH8DQeeqdMpkXCANRQzGveAjh3X2xBfRxERZnrrL1w2wubFWAyPE1AderpC44idM5k8",
  "key19": "B4L3JzK3xamyNbV9pTiEd2veajvc6WVdKD9sM4Aie93YCezHFxCd95z43MhruzDW3aVucNVLAVXhqmtYVfajtNz",
  "key20": "4WFKiCMacgBHqwoVsPaXQ7LzcM5NU1oDx6Wotn8nUh3DQtD2Q76CGwYJ9Rdae3jcYWp3HAs6eKQ3cTaEzZQj5XhF",
  "key21": "4nPLepn2yZJzUb6wjzGaMYcay2RJszv26EZfzDbiRwhNrAAq5bfzdk2o5ko54unMzvYWzHgreviFXPJi6qFNfwWw",
  "key22": "36QJWGqLfKrAz8fEE21mxqNfitPjVoAkdsv4Kz675WYEnxsHX4mkXH5zgtJEJUDao8o39XhZiT9wTKaPSxLoWfnV",
  "key23": "3jMKgZaUyuaG8P17qgA9L1FEstDmNaWFSSbMWbPoo7iV6SjZAa7vUqCcspzEVroiLZovMmHLKr5ANKQiNRygzaTe",
  "key24": "57uiEQGHVky2WBQy3ppYvk4m7fxEyyxmD89UT19nyc5H6eG4Gh48DRSZh6rJiAPJtUshjYChsM4TVm5oM3arP5tz",
  "key25": "beMs93G7M7oVNxy5igMLWhs9DJRXv7Gn6jB62wi6hr9oRALL8zQvqQ4QFAcqzbPNeg6VqVNXeSKxjkDyy65zf3b",
  "key26": "3wfxoqch3EnUM4Ck24b8Qu1Cg4vVydTnNEfCfjUM3R1gyzNPnQ9Z2LJCggFo3ST9KC5meFvAP6jEmrpkji2brvrg",
  "key27": "5RPUDtcW4ruFkTf9F1buNw99Y9NU6urxsN7MkrppvuxdUjbz3sffvbkskEaN2dGuyK2PxVZ2bRVDQjkzHwTdieQu",
  "key28": "3aVr7TUfaRoLn74bEhCeGtNqrUz1aN13UgaT6rbVLLmE4u8gufw7DEQqUDrSMuoB3hdSoGrSyKWqTYRpUaUm1G4W",
  "key29": "4koJYpFmSQuJCFWag1PQC88KHu3wodMTkzbbNpbcwaTjsGbN9MSSgtTA21EX8dJFFjQHZ15R6NQRuXGgURQ5NqHz"
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
