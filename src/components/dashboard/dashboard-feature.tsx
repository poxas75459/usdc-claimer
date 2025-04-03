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
    "5uP1o84NHhBZRtww5R2cm8wLBxT7NY6rhAAYVGpqeNJ6x9HyUXewixXzqZZfkTVqjaDbfJHJn8gK8U6Drh6NuGmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sEMy7R24wCC7y2KkoTDg1jNN6jmoZqnStgd5WpxAx2MWAb6Vff3k1GnHGeTtBZbNxt6J5rHwj6ph4wePj1xuY1T",
  "key1": "5BqwyB2Jy1BSecfkag32pwKTyb4HJNrsS6C57SzKUmYSemGsfjQ42pfpiqw6AGLaadmfwKvYsMaHezcp1vQWRNGC",
  "key2": "2wUAYF8TZ57tNQCg1mHxpHjLy73hmiz3VUA3vdqgp1VL2NKuD9UVqvqs6fppQQtGTLJJqiJb1L8ob4SEnwCBAAH3",
  "key3": "2Zq7iKd1mbx2rBL3eopZ5Ywe72dNogsLJcXhsM1CzHMEYwtEHFQd9eKB5FFEoUGca9Ndtpb537aML1vSVsmAj8yh",
  "key4": "3sdmmsdh59jQn2m8tGXeuwdk4o5Ce9cpRC4bRnRyFfQ8DmFfPsAayZAnPACA6qzoEyrCWvp2RmpuieW6QAknTSm3",
  "key5": "2J6xHL1twPo96gaFk5fEqEQy3KdVNHT4nFkyJf5xYGuntDCd3rdESD1agCboMGWxpDuGaUufc6qQBJqqMj88s4vg",
  "key6": "54jVG22Zodom813ojSBavUc5vKFje5zSoqHZ2WRmZo6VeLwrvVGUMYVKKtzuDMvGSAsdedRFTTmMjWyYETHh8246",
  "key7": "4of5vn65qMtboPk4bJgzV8EFq7BJyi2jLKF6TkUJ2yF8AZRxnu4BuAbSGMDNPJ5hnJZvn3MJ6Dhp5m4uv6TufMHV",
  "key8": "4Ab7ZB9MiEU5bH7f6VfcuCkhyQMvxeYE4tRD9jUqcRLwFQr4zGkwV4Nrek9bntPNL9nHBiww7tzbhjXZqWuM6k98",
  "key9": "3DUAboXBbpfYdx1hxJnJM3HUjbcfwQmw9QMyq24aZHrbgQiYxTtdvkmVbCEaWrvBFRHDiWfr3JRmS32EztLBJpe9",
  "key10": "3BPNfkerkpV8X4KSWbNoZXDgNEypHVXmGFc9JtvuK4PQotpmJWV6kSNZLeDgHTfpQYUEntu967i5zSnMwoHbqxx4",
  "key11": "2dGdwnaRRoWzZqLKzKVpcdEBSXcyiv3V9Zt3P5ZfewGRVuSufGHpoqvpbcRQiVk8RVGbSYWHW75CX6NrbEPNoSVH",
  "key12": "38KuYEPsLYbx8n2MunVghABAE8eNnA4CjyXGm3a66eDsC9jerTH8wTb8Vb3tmmsjLKXqZe3QohnUV27cGoEpwEVY",
  "key13": "HoB3uZztpQH759G1jcQA4fxAAWrxFqDsxoV1JdHt4VeYD5T7ttWnbTMiVPPipSc3i5Tr56ZgLNgP7RkPS3B169Z",
  "key14": "43v8wUyKaphpBJMMYiofBShyxTd52ZVEWh5UnCze5Ag62xCJJHXRtQLonuiSQt9UdWsmCoeejPHbS8Paa9rHYZPb",
  "key15": "5evkjh8yLoMrG9VnDFpADK8JfMd3GC1JWcc1VpmqF53fisjY8ZTkSw2Yum8gCTPnvPcDgTfwm1HVxRJQDVnMbpik",
  "key16": "67bp11NeVeGBsowAgaAwTtYLiJKKWxo4QK9Ea6wpCNs6xYDZv7wXHhE9MTjwGkP68Y9cVFSETwJuTB3vy5vphSrG",
  "key17": "3Cy5DaJXhAFNqLD5r3Kf5XNn1MaiKXaMHEwXDHqVpsep52dFn1HLXZhSqNTVquUgAUJVwn5bgiaMp1LUCmaSSMRj",
  "key18": "3CSn6t3WPYJpULH3MucUCE1q831MbsfXSCUCCrKuEjzd3cEzJjXNFMkPgpUwkRkgMqzNjTtdTbg8SGsFsUK9pas9",
  "key19": "4WEQuBFn9qz1YmJGdMWHMmFAicNuJNQk5nn8WcdoMKaffCgDL5YFqEb6YDHc9BkRBrL3qnwg3UJJ5twpBvANbKh2",
  "key20": "4mTRmYeC7ur7dqUisNH73UNoEnw7WLVmpkqniXRRpbnSmc3qPrQTxcSTyJT5rdcj3gk6unp7WCJv2QKLSzmSzXGb",
  "key21": "3a5hnjYJ6LJhJMQL6w4vmQ4VftZEyyLGhYeQq5zgTc684THncUUosZKB6GxgMsVk2vjk7qWa7ga5TiQwBK85d4Cp",
  "key22": "4irNRKqeGW1kUqma18q4Vvo6SfrYbQUV1pYDp4Bpz3MRYkk1pQewfR55avXC66c1iuqzS3tKvGR1Qr2R7ZAzSF2q",
  "key23": "5sQ6VM4Xwu5E7UhSERGLyDJoL8tCz8kxn1FfQ5m5qC9yLfvWR3YTsbpY1UnmwqhAXjzh9cTGJ3neC3mx15b6kiUp",
  "key24": "3TxuGM4xbKs2Nvi1RzkVc5GyggpBtKDBTg1DPuVmZXx9VK3N2hvTKmT5oo414YUnr7xRcehUyzuwQZeosPy9byyR",
  "key25": "5WPx9thvCxAYu9Ku8C3umpuH3TFwU8RS1GW2wzNQnat63GyUQajT8gBDvkiH59BurHTiu2RUBwvRFTtrt2KdDr4z",
  "key26": "ghBf62BvLVbRi1CywLXoiY32ChB7W8SSNT91VtQwkdfecNagjvKj75rusVNqSiSmUT9U6p7RgMqMV3anSfHaHtF",
  "key27": "3t7E5KHMXniqiT52y8G7TB7v4LziUy4fmR24xF4SHydbzyyJP7zbg1Po6PkNK86ruFcCzdDL33PyAa5rzH6oNkPN",
  "key28": "3asrBgwZogdNZATJQxZB2wnBAFdqzPqu1ma15QLJ3G9qpsDBmNMz4KcyfV8RbEkSy62NLycTJNr7fsD2E1d2RBb5",
  "key29": "MEjq4P317yeNut43Gzut19zCFwLGaAYX3iBRetc12yqiSxSZUUUQQEuZhG8Bf8ZEHh6khWa1QgigBLwS5x5Bxc9",
  "key30": "4ZXFUS32CLijxnFaUxKFaY4cQrBPfKa26cXniTKigPitoXLoABapDH5vnvWhuQJwGfgCvbTVo5F3kbqAi79m5MCC",
  "key31": "2pEUkPjEG5iHZpyRyLQ54xMn8CEbDLQer8T3gXZAEVniZcDF3DvZUN1w4mbua7Cy2RizHPgRC33uxC54SF24mwKZ",
  "key32": "5ofxZWGWkSCwykeFJFDPU4hBfPmK6xkPWcJ7VPTqimzLNkUugojNfMuFW5yYjyi3PmN4BgJphWTTrhU6iTtP2C6a",
  "key33": "2N1dxh4fQnLukuQxXYerck7pamzpjpfsRUVjQE1mLD9oTniiwHyEzBrxpKGtLA7DswS8t4Rn2DquKDjt1rLJybtG",
  "key34": "5NhVndJB9VFbZBggpEXaZ4pEvNJUVAD1SaY6hBgx1p1Q5pURqyWFBro4KvbRA2v66jDeaFerdyTcLtHaHGtL4KkK",
  "key35": "2u7ic7uZsb6Rs6Xbuwj5XeTUFidra8uiGnb7Q6M6EDffeieP4ysmENkYoR2D9iBbv5RzJsfwEv17ao2ixp2h385Z",
  "key36": "5EyCKxJTCX9RNr3EU89amBD8j36uH514z8WdPgjHMVmat1xY98CbHyhhKDyp5PsKw4KdUAMJtLe4cAu2VUtvF2H2",
  "key37": "2c4A2wJRFtrtw4SGmrghz35NYkCQ6oJPaA4gt8mE4cNdURAYNgFE9qF85zL9eixgpYUMxGvwfqYu4rpadGxketsc",
  "key38": "62MzKEC97nYFZkqy69QcZzFYm8ZRJah3vPnyNPRAcv514SwuLt2WJfeP8pyjqLjP1oArC4w1NtWfqmgFV6rinwXh",
  "key39": "3dojudzxUzodnBh4oQ9dKyk6rK6y4A32cwBtBmRdue2Q9iYm3J5fhfCrzamdhroycSVorCc9T5piphFGPA68qN3w",
  "key40": "4rtQf5t9cePL4AeUMtuBCCtUm4oEFCJVcakihybxPmM7qjoRroUsgCmA4AVy9mRfWnE6m1eQzM7CP9pf1VBKbbmc",
  "key41": "Z5Z9vZgZPmMEyER5hayBSGEWU61wpx7ajTsHz5mVkKHWJy77ptyTELRXBroLBCd33Foh43RxLWZkFzgz66hto4t"
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
