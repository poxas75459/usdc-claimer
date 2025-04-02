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
    "3ixwT1iazgxLYM3zoypVrkDoqUyPeGwXvn2PK8e69GpgMvKM1dPzQ7MqeLpDS9kXXwFk6jN7VrSsAemcGeP3ucPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryfZtp4Fnt87cgsGeCDQumB7s4z16BxEFATydDaDeaXtG7HrSjb2oxY36qP3kLYQ8rGUusSdUdeqTU1JtjTZCui",
  "key1": "Hq2jteBRuVMxj9r9ZNWdz5jPMFbMp3LLw1gX4NrkGTMerXM9Lu5EEa9Kv8PbxDTDRBD5QJagfQSfonBrYo81iTT",
  "key2": "35wnVoYWHi56TboFUmfpmSwoxeKDhEErLh2GeExf9y4wLZtJLwBBGBZDhaqp1SZrPtTLV4p5GkBwqdJtm9bH3Y6",
  "key3": "p7rfwR6NN3QUHo2DkDpWyHAyc1DNDdj8TfKnXGqK5UAGocTX4AvjnzqNeir4achzYYF1RbQia3UdKn6NAbNqp73",
  "key4": "3CudBaHMj9792oKVo6hmeTFfGQrQ1jMw1yj9pXsxXUw4N9fXmey8YBUg12Eam8MEa7pg13nuC3mrZzZgsSo8rtiH",
  "key5": "2bM2dkGGVN6sias73sY9bFCRxGAHdjfvrpM6KiAXUAebAvYhMCs8gZBeMi6WzGf5rU5tctXvm7uJXtNSc5E5CY2q",
  "key6": "4z4tyHyd5LmEyZGjgb3BHUaGakeF9PeBhd1DFeJMmtX6D3YWuW53Y4AzFnmgPqH66rYEGJ13UpJB4LksP7z7CN2Z",
  "key7": "3mSThRyPtHrSjByYyVU7ucTYjR2JsYUu958rfaviwTpMwXMnvcBtGRwqPT1tywS1DhiuNtXnAKm2FumH8BnaAfhD",
  "key8": "31nzPviZoBn2LDvu5gQKkLMcqGBMNWcvWVVXDHEtpmzprkUsZwy9YFZvzqAEzsJNsQfaTG9iHaDBAr14yuoiFZHA",
  "key9": "F8jJiyWEPvfkwVEfYgx4NznwUomBiw2EAHQybFYVUHiPDvCSHwN3VDGTi8Z9k8e5Ys9f6XSjAm2qc5SbkqtTc8a",
  "key10": "2MN2ppsWQxMPRuf4xZ9aPPyQ81fF2vQG2YkMo8psxuJ7KWHPLkPyippQCsYcdCWwGAE35SbnDjfLgiPKFcUhtajR",
  "key11": "55B73tNigYZ3v8Yd1qRMaGo42aU3uUrYdaUYQYU81f7VFyBfWWgNU6WTcZffQQXk3iY2n5Fn73n2SGa7VsxdSdo7",
  "key12": "3MAkNLAZ4Xk3uEuvz5LCwtyHsMiKBDex8nDRsHFRwqjGERMyuRMdn2U99korFk45WQw8YgtSNKxMi8Ss5Uakw3bS",
  "key13": "4UD2xYddVi73gxgbMacfUtL3fjyXtXV9mWJWCqmSfLR7bC9EmNbzo6tZ9x3XPRbR6wV7dth2j6MZwTe5tFdXryA1",
  "key14": "2x7H2FcbhPQTuRNfmiT6xPg7r6E1MCNLFMTbazoxY6AHRCevMAPQS9nCRHhN4Vqp1UASadTbxTw2o5wufGKCw5L5",
  "key15": "2rRspBRXdS549UFkf8rKMGnV2sKYwVvgHMB9djnE1PEByWXntEoFTnT3PtEgg86AJdGz8n567G8JqZsRo9gibXrv",
  "key16": "4TcEkPnHBaiHmGJf7jZbuDmw6nDBxmbASi2DwfcsC8MqCkPpLkPr6VpDK3tAPEpzVsE79tNAxH9NDd9eQeU5HkCW",
  "key17": "4dUJtNVqBrFFp74imVRFBgjcbWxKwJpzCFe8wrdzogpj5GZ4KyKMgTqfyLjWftYaGV8CuNXVwzZ6wBF3wDEU5m3r",
  "key18": "h6FVQvHh23Soz92tkwj5J8gue5vd9gMzADV3koNhAQSLPEyH36ZWyiVdZGg99rHJuvfFemnVMFoBFnC9AAnzBSE",
  "key19": "a3Q3jtn8KQWxoAh6T7yPLaMCUcML8jS2cw7NhA4D4HM9TBRky2CcYdyto6LYPwm5vuufjLNEjuwodcVPyswiV9j",
  "key20": "3pheDNm74Y6JJrpF9L2kWuvJJFmF6ArvPCRJLZRCgprUx7CRfzGv3MVYWhVdksryZzwAsWtuQyCZLoE8v24rW16g",
  "key21": "387Ku1oeMjdeM4bU1edmxArXEWGoFjPFRKgiLhbqxuvbvoBW9NVq9BVHiyjXtnNgYWg26U2dXCZDPkqTHW1kYndr",
  "key22": "3n7xULmB1PZMuRJRSwjKPE82dhMPbfiLu54pBS1Acv5i83kuC3sWqnc7vnjWLLs8VYGDuvpsPqNeG4T82Fpxog62",
  "key23": "5mESEHGDsy5rRZCY8z3vmw85hD6evzYHwAgeCJyFXejuA615KnaCiMhicZjU2GJSovV7TdV6n5juZigCyTyHWdR3",
  "key24": "253DVcp7zKF17YkYkbuiys6pKVW1xyVohWH6vBLE9ii7Ru7iSKKuWbis3qqE8nb55Qa1JuXE1iDZK8qdHmQCrADU",
  "key25": "2wCENUjLgb4cpaYDrD1aEnEvmWaV5DDTbH6iLhG6C7FB7RdwHWLJ8DtoiZyHyNRotoQ1F98tRw3s7mPH2VvcuH8r",
  "key26": "613sSvevPYbrofh3vhLVraFMzaR5ALqnJHAAafotArdHLMEPzu9dCGK4FhXA9dq9LsSwwnsvopmp3VhaBFF5gGNB",
  "key27": "4qgfsNzmJjJnF8n4gfz6a16aT9z4x6FJqyWa2RBHL9XdzMwHnw3EAN3ZwJVjHGzrmP5VVkFfiTwEZTvds87sZM74",
  "key28": "4e6Hgv3e63VJqUfyoWs6Jb3cVTPpUJgXcfUR463Q58uGgdWZiPMtaysbzyhHS18CjxzyQdcWM6mERs3pzVGKd35Q",
  "key29": "yXsP6JBaBinDE4YpmbvuDfYdHXj6EuYGxqsq713YuipwHK7h13N3TeD1uiq4cg7h2HDcGNZYdZQKkiQQY6yHq5C",
  "key30": "7sSPr9SZUtbzJWKn8uDPXRMRTASMQoqWNKs3LTR3ggXHBtNeG36C6JXTSYUvpLUo1gYGERY2RX4BdaM1UiJsrQa",
  "key31": "29MeBQMxPzQuPhQyhgseYM8yak39GS79WriZKoUHRNC3i1W6iR3HxKvWDyk2S4do2wW26UPLASJKkdw4MHYycmVQ",
  "key32": "277iwAJjcSUFNUSNpDjo2zuaNHN3Pmd5cbpRAnc22zrnhNEiP8aW4UDP2ge8nNeaTeRnpkAfc96kZ9EEsxniZmdS",
  "key33": "4a6QSCMLCGJxB2CCdbjB5YKpE378TpDhGMRVhAKwgr1PPbCogWE2bCqVamS55px3K9kJq8AfUUEN2i7EtXQHAoNa"
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
