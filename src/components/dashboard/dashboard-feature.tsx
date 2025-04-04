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
    "44QADY5p4CKe7Dw6TQnCPByPKwEoQeGcvXfKbPfNA3E47SUTgv6CnJva2RPivfiVFpVTgQjxHpwivuvNCYPn55oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W77ZB2PpVKgs5bxmN4SN7nBpMXweogoQqncGGbqWCfgbHy7Vgd4URTkb8ZHHaa2keG6V6fWKe3vq4cs6RA7wKCo",
  "key1": "5inZ8mdQBzxmQCowNxXUruEV5SmxYL2ZSSsccPWPH1b1yswW3FtqEL8vTR9UNWuSeibKJCVA2tfa6pevyzGeinMe",
  "key2": "5XuwHspbLv9hU9r8TtfBRsWsds2hEXEuy9ts3xBJJnMANuUhqhRRqPBKFgeT6uxgtnpZKSUhFLSrWyxEZcXD91as",
  "key3": "XJQUb6WZNSk8U2nqvSQY87nMvocVWpXVHKuhzSNc7cjc9AfTBRfCVcdknohJpqjN9vNBWiRhJfKgTLSEcqEbY6K",
  "key4": "2HXUFGPnFsa8vco6e3a6Gz3SZn3jPUaYesPCpr1E81migxSGf5vzAEpYFubh2zEF52uEd5qf6ioX8maMZfuRsTtt",
  "key5": "4FUvdW5tsVFQM3izJQWDW51x3E1FSQxqHuVDJexmjYarARupGxNU5j83VZTfhNwDF7xUn4566SBWNqnDwQHzGc7e",
  "key6": "5CpynzKurvN81foGaYYZmRT6gqM2GMHXbeFodghcC9ibvb1rs7po9TNqzRmAgwCLZNuzUccRL8mXph3XR31SWrk6",
  "key7": "DXwuhFFhb1dq3BjSqJbPYe6dEuCM7u494hs1HyPGfwm49Pch3EZwBAnrp4RsU8yJjhge5rnTQcpne4sUNG1y6Tz",
  "key8": "5piPy2DqiLMwVN2GyH7SWBmVap7VHtrrHvRdorZEJUFv8ovYHTnD3YCVhwVgnjCz9T5Cv8PZHXEHHioQuCJNZVRq",
  "key9": "5UrfsqbyzCmE4k8fcstHYKBF3TvKpR55z8TJuav6bKM9bfogB5SprQpLn5LquNACWRsV5MFvo8LAF9Zs8qjFqU2e",
  "key10": "4KPp3RuYucVRqgwZTbgqDeaPDR4RtibvxpbAxENz1xK77SasJXKoR4PfFhC2jx1kvnvRsrQXrC6YeXJCojumMgFh",
  "key11": "qePqshfYGq21B6GXTYpPM21VraDNTAQfArppEf8o1XD4Mqei3JWddsHufL3K5rsgZSDakp1SGygEKQ2DevcTBf1",
  "key12": "4r9j1shCZXkuCyBzLFeM5M3xe16diT9guvTTNHKazNFaWSNX1gK5wjSdDUieajVGMMbvUbw7zRmu8vv4HDpVomDX",
  "key13": "4twGTmWowf4pNbwWgrohwXExod21AjNd4pBD8QjR6Pjs7D4vH5K7iz6ZNh6r531uvCtvuwHQnKNneWkUj6M6xaGF",
  "key14": "cZ2H6JwW36J1QiB6PSU4MdW6UrrCjfifmfshY6X5sHyhvmuScr5PCfaVnUss4mjDzpJRLudzgH7mQ3RZfbDytnk",
  "key15": "3Ztm2sGYq5ohjCi2ERbDbSDbeCuMY32LhFAb4NT7mwBMK8nzGJMw7RtDoKMTuumArFST3Ymi6TDMe94q3jeiwno6",
  "key16": "57k26evmKKHCznSXFNXo4hAhLbqFYAc8KD8NrK821ZKXCGUwAToDy1FwtBD1kpfDxaX17DCL1YjKv32DpqFfTqUL",
  "key17": "4wPoa8oJj4QLiNNP9eb22cMbepyauSUDxVYnQcSiNbYv5hSQeG4f13WetJhhuiAdtVwVa5bRtXkz612kJDzAtz5h",
  "key18": "4jhC9jG77AXzKz1LnffbnVww7UoMUKE9f5NzQhdHEqRda7axDTSCkws6Qgx9j2ePef6SVk26qZYFefCPisi5rFDk",
  "key19": "5SRJSg2HB1qviRquUbrAaGJwTMqJCgpipGqkSEgWktE2NTibeNYzF8wJ9sRUvJp49hTWDHZmE3F9jQTztCLRweq8",
  "key20": "12239FaXyZAgsALjjRZmaMGjg1WKWHvfZyF7oLRayh9W1LwXCyjkvMgjqYo5gSXS2Pr2pow9VpXuJYmBNcMoPy58",
  "key21": "2hH1Q1wEAtbFc82nC1WozaKfp7oCpBCq1ZvCMNG4VkAB8dmqgxC7NhV1MjRuzz8pYSD15nDsLZYAMtuGnnRhgjzq",
  "key22": "3dpdLbvjAucJ8eqX2CgEHgz172wZjubpW4pAS6bz3SQAiPzc1a4K2JN3h5Mp6J6UAvdGQvzXgWqx2YnW45PLS8Tu",
  "key23": "2A7cb78Kigu85M9cPLbyJACPZRZJmrowjnt54MfAaAoZiRMXgAEmEvrJfe2SGegkTfBFunXBiiq8cajdXy83Q8BZ",
  "key24": "z6o5NSMGxQgHxfZSCdXCivJBX6BeJM5gRfB2hMEVqUNvU5M6tsE1akfmLCx1UgYWwDMnBL9J5Vx5Lwozb4X44bR",
  "key25": "53GeYFGM5eYLoSpC4xvrv25GvhoQW6rz2AzGozZnn6dnjuW5i7FaJyxpYYVpZ4UjsRstkCEBercmwaCJSq2ttrhB",
  "key26": "5WgG9oy3aAQ14kiVisNny5hPRJtxhECn79Jw7pNFF451YmVyDmsVq2qat7M76Z2XShKHoi9HGQM2bNZbCuqWZHvR",
  "key27": "5wWcf43sUFSRy5pFb12XmjyUDnVWNRxh5euagRNATJSN6U1SLy1zdGrfeTikG1uQst2A877imypoppdUFMtmi152",
  "key28": "TCzQd9DWvcUmtKagSjFUwspEdQgzsAyw9mrCnjZ73ujyXeKqZjrrPtBeFiXs5kAYcUqw6j5Am8Ytiv27o1rfwi6",
  "key29": "3mYEgJoJRyUKhMSrmrJhdxrCPP4wCYNWyHeNKHkAAaayDvVjzu3zbgWzN6uJTQsCx3jKrW26ppa1wRGv1tmDFFiv",
  "key30": "5Au2QDppWeo5xVBu52nRTwndH4WSnFJr2rEDGgVNqc6RuL1eHsL2PTGGUiKUUnL87X2YAz6W96znQjvggDCSeHPa",
  "key31": "eTALLuoASWVSam3C6QZs15n5w7aWjfsdqysHs9mMun3BH1nDqFiF9Gopitm8odKYLgiLzrZQCeo95EhoiugGzV5",
  "key32": "yRe9mrUB83Jkix7Ykpcvf8SBnqUK9kT791Go1G4nxG8fBnNtzXr8tqdnKNH4zWpfAFn52vLu8SAqbKjjd9xGn1E"
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
