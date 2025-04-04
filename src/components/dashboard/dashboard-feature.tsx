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
    "2f4s8kAxe6jQBxaYc51VvEWhJGSfoKzPD2ZUtZ5uXWEKTbRxzuKXC6dL1Rh52SfL4kxLWgX4nqx2kJHSfFvnTWzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBzzu91nv83kLy61p4gowGtqMYD2qu9e8W4Q3ePu6M1iY38b4r76BekeL5LgXC4zy3r2B9nyBJ9PUDSPjVXBTy1",
  "key1": "57oZ6p7M6VnWQFVkdsaB3d8HYBREcrMvwgn9kGKZVsxSURZ41RFLNxMocmVrCQmN8b9s8CqoAt2DnDzH6z1VZQkF",
  "key2": "4rAQKrZu6EL4ZqcqBGAdZ39qtaYLaQfvpEWKtaLGoL9ggFoomPbySw2Ad7mp3R2TLqDEifRSKzCtTK21ELFtkLw9",
  "key3": "3n7cH6J7QJsfe9N69UUYtSz34pF1L19r9S91hruxkbxwMSEtinMVp1AxtByf274JyJFHrMP7EXeaGmANvqJA91Gd",
  "key4": "5NnLCLYqFwFrGbrgWgLXZvRdSvYma9DgCBfnWmDtGei9VX8D63cP1AogACoLQMupezTjtvTbnVcJWp2BN1XPLM35",
  "key5": "2n1xb6yiYseffMbnfHWrDFwQkSW7zg4mARE47BR9amtwF5v74Hi5MzjJb9fbkCg4Gz3ARFo5taYN7CF7DZRC5QEW",
  "key6": "4nL765uak6DeVYHH44UNvjvxySQ9YGJztA5gwHo8E2wtGDMWhNGGYPCsTASbDGRPXutL9nXGSdZukMGnKBMDukfN",
  "key7": "3GSttjPNdo3E19WHGGNmXR84Ezzt5XofrdVj1EPyQiqztCBvPgNzt6WCHGHttZT2QK7bXsNRakRfXf9oiQPhLgZ4",
  "key8": "4mmVL2zKycTfWWxz4mECuEtqTLmXvjR4jPafxYdvNfPBqAa35Ms4nagSX8xgbtPNWEH6wcBBu2EyJoNFCZg2E1MR",
  "key9": "4ph14aCRSZsp41SxEiTjTA9gowGApqYAoRe8P19UaWp8feYkjNK9E43N79f2YqNFUGnLtmP3ofsiKPtPqpEf18wh",
  "key10": "3VQPGkLDwV1Caa3CwjTCSjbHAobKA21R6yqekgBM648B3JbbrEmNpMNQk7NPGmRnJsdNUqZ5bC1GbinWEo3MnbUC",
  "key11": "4nuMQuzNiV1Js28YasGjBRnrW2K1yhG1eb5r7SFcyr2tun5ciQtnnfcesddQLRz1ZR6fwE6HtW2bFm3VcJY9WYDy",
  "key12": "3A5fQacsctQ65Z8ZNiWkvk7SHX2BvKw7n9BxkPFbR2eVUcwdZ7P7wjg4o6p3EM4Souxjr6SyLHi62sHcDBSFc9ip",
  "key13": "3YgGF6sfJdiNgZxJKLKsfyEhoZzP6P4SySEZU1zGBpXPDu54j7yCZL3P5wTGVqdzKSvcey7uUqMQgvaAk9N1nUZv",
  "key14": "4kqiiFqQeLXUUsK3Ux9H2fxtF1DPaXC93GpwxZsjzQuQkGURgdvTpWumkP3UX8CHLCvnbJN4pNjPTzqXn756vX3c",
  "key15": "pZ4pnmyMp4NwtG19jKYjovDJdF9vg6YKgsnjXXrtofFbXfEnDURRMQggqeUtMWK7G3xBMQrKx2Fmb2MbZL3Skax",
  "key16": "48CgMGoikPF665tN7tH6miTXWxjrBL2FgfKBQgnXjXkeL9ZQMzKwFSF5VpvpsPv4zdoHuhDYaHcoo6pi7Y2qXAoE",
  "key17": "iGHyaNxXZLhaWnSBXE2FBvM9iAeatBgR6ZztsCKjfxQWSriB3Khd8NHYN5XH3GXq9ktxTpPkS4y8WCvxdYMY8Kf",
  "key18": "KMshijBf27p1NPCsD1XiVxhGhRW7NjHBiHB5Jn2jH871dKdNiVUimZrFVxo7nuGKpq8Nt37P28EUMvYJGzGXeJn",
  "key19": "8czbrtCABH88Du9hsdCWUuouB29TxzQcxQhe6zkmJVJ3LhSZmRmJEJysQD5eNDBgLxcxfnTbACPK4kHSZZQALQo",
  "key20": "42ohw2eMKFZrV3giUiC298XxW8ajfxWWeJTGKehedyCArAZxgBufVacEo2kWsiEMR2EavcLJwK3zusLrATyxbHQc",
  "key21": "4vJRaG2QyqeTNUdzgBn145tsNYjfT1wUKiayff36GoB6LGQFSz5mvPNR9JdGzJrS1pZ6vDCERzsNxaPSHduGDKWY",
  "key22": "5Nz5jTzwvoLAGdCZ5LSCGawiDqvtGeaqdVRcCcF8vA5SCk8RKZawNGRMsAT6wsB81b5nSanV9ssCCepYdjfduSX4",
  "key23": "JNroWNCeqc2zaHceiChF5PZqCijwgQ6Ptrv9LbtLoxEMLafBKL6EmRr1Xor4MSJXLZm7BXMmf8JJJAWzG3yUjw8",
  "key24": "5qJetMeDSjXmD2Yvy95WkYaB76YZDsFYgcWTsF1Vz477Zp4wxXbtDqstcjEGj23WGGwV2xqcxF8DLjVjFBuLPaFr",
  "key25": "4gsp14rXWjGo94tRkKPeMf1gWcgSXTtoNUBvWo4WcowxPC6aeiW5V3QMDQwbsmr45FYTZcHADiAvivPybRmb4oU9",
  "key26": "3ZxTsYaPndJ6cgfZvsVyhBoJHuXeqGbop3LzLa3uqwqwey2fUq5V71QequA5zd9mstBReqpUdmvwwJDoSCukDhQS",
  "key27": "GtmwJDh1CPsNp9Gw5tKKSGpZA27VdMzCoauionTxWaAYJzX6BocAXgRBGsk91ZTRb434Xc75DHpuPfkhECYQnD7",
  "key28": "5cgA1HvdQYnHarkhRvAK2iCTXnTSEevynx76D9chp3EmvVMELp12BA4YyjLydaRrhEVAziyvAYauQhbP3L2fdqwa"
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
