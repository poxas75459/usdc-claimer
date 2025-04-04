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
    "4YBq9Pyn8wxXUMWRDpsmhrvM94F8NQCzJBHyw7ySRdEbyyAsqNTPb6jTunw24b75iGtera2cTUZCTa6Pt91HpQnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCrdcdiuQ2V4ofutaCswdozzLsHEPMRXKmavTP5QenwRusSmmxxgJgTKDZ5Kc8XHQeZJABtvRgywqwQLUHB5SDA",
  "key1": "D2DqFbKy7AcEXvv71tbD4RCgg6XodJbzCK4WEN6fepYSVEiD1AGQ8gHdH3ULA4pdLYCMJsHJb7xXHgukiVLqaT6",
  "key2": "4E1j7eDH8srzjysYk3VmKFAkQVnN644AMBxY3h7ZygWsUjCPoJ6EK3xkVrDDZY8CaWJ4G6rrGducAXTn2hYFBvRm",
  "key3": "61LtW2YqrT1zZRkCLTSfq4ryndqYvsoXqwS3SfoU7reJS8196eA7wu72cYxyKV3JSqjoTQHgJ79orymPKqfNnwg1",
  "key4": "byo3jtdSEZVg7o5GkEsTdEBjiUcnrYUS2FoccXcXeYGnV7AgcgtoCzVm6pp57dG96eNjFFsQMRZ1fBWXG6SfPVS",
  "key5": "4twtER8vgvtNe5j1P3WCPgnPuBVuWh35p9K9ZSEX1kgfKR78rUkj32qFn4reNFttDFqYxnFty8N8nEN6gaLChMv8",
  "key6": "3VpetA3tDiRtH8AMKmea648ntGcka4GwBhAuoVefYARA51C8BQBUYKriM2W9cToVtEZTxdw91R7cw9GJuo58HqG1",
  "key7": "shUXftQePezqxXzUx9QFphFa1LockK1XHvcyY825t29E53w54vtUz13CU5aCsjEr7J6Y3gQVrSLc4kt5FNQr3eF",
  "key8": "564oKp1xxXRg4ejT152DTKcxWZDriYCZCyjyfxU9CAyK7juZfjGirdhxhViNRc1Zui3YJJdExksrq6f8EMEMjxuR",
  "key9": "4jjH28mZ5JLXEFDZiKZiRvZHe9qLLbBCatzbHtNP8MhTAurhKekVe5C4eUiRrqRdNyu6sbZKhMqxEVmcMVGxtNJv",
  "key10": "fozw81g5JqAB8R2za6Kq88VdRAN5tMuGWsqmqW1o5xBD4fwRikoeXGjFC1MuEAmNnGxzHzwpb4yWCct3YV8n9XW",
  "key11": "3NBqaLWBTBfw5FWk19q9fnxYGUfaPPQrQro3Ef7LXkVaMWKvqk9SEu14V816A65evcQpEyRskKWrKJ6u3pBj5zBH",
  "key12": "5HhY5ei149bnLsewJwi2WPaEhrLvMVKVqLXAsLjDo1BYTxgQDiccm91taCuSduNekTz5rhZ6VhVJjS1pz23Mfnfs",
  "key13": "4DDT75pFrb8WjHR95ccfRCwj7T68eHPpAx7CURCwWdNkvNusEGRynqNXJMTB6FDKr6xMkot3crLaWGfb8iZUgwWz",
  "key14": "3v5fxh8nTDRZrXLFwKfstuBGDoLDnBhwQsqkJ8NB1fBJRuvJjN7jLBgE9rhvbo64iHjZwfyTWdqdztijivtKExbU",
  "key15": "5XXGx3dskwSzygMP6JPPTYU8KUij7znyGsJ3UVuAoiTedSGDzvfU3kCGS3q118Lvf9btLbjFRunLbb8SAAnJT5bb",
  "key16": "b68R946hTUYFMhvbD7L4B6Q7TkVPZ3SXDd5y8LHApKVVtNHZGgeW4Q7PYA9AkrW3U4Ydw727zkcG2WJtngw38v1",
  "key17": "ATSy5eMLc1rC58v22LTzwczihU2BN57qUGKex7ok9FFiiETp72nExc18XZQpFcSrxRiAJvpAopeUpdEFLas2YXQ",
  "key18": "47SC5Ms68WzN3XWV89fnXJFBhwYWmKEvDqmyG2sNaTqr5ixxx11PH9vJHxnGdY6LgaCq65vTS4atdceweeZvFvzV",
  "key19": "4ZyERXixfMq27yFqcRbQZR8b1ueENFB68NHW4ynZvcqufDgKR6W3ynoytSsbZ6yUWJX8bEn4mJBiqbEAG9wAcjTQ",
  "key20": "NEvb55MjTYDp4oFBYjASGHVGP92ZfrUx1btYsbmMuQuENom7ZN8HUL8m7SsoNYaeAuTmHxPngvw85imfsUScEF8",
  "key21": "SR18MeKSnHEWHZgFgkSHZKBV3wdR3fwEd5bkowoQn7RXeJ9xSFEvZHDBtJ2k2zGnBeEcZWPiJdZMs6NammtQtzq",
  "key22": "4SSv4yoNqeV14LL9chbSgc8znnqsdhhhPAVX1LuUdKw6D77phY2QEq45SqWAm16raebPnSSLsPnhQdgtkKXUapUb",
  "key23": "4M5skV6a7Ti52d3rCaMCGxoj96dFMUG5M1VBNSB68q3KWzt9WFKPknU5gQXvuTfu9P6ytCLsQrSA6L6tURFvnZ3h",
  "key24": "4TBDzr56yW6KzPr2rZMYfte7T569U17qytjHD2b3DqAgnZbmRDyaU6za5yGYLzmR7hygeFPrETUcNyDLmtLK27HN",
  "key25": "4Fur3jbWDGW37WXmzWEgQQdzNpTyS3txu1ERaQrzgvvxF6aXRK4rMo4Vw7KSqQrwyfp1gWPS5PDTSVu8AZeVshiN",
  "key26": "ydwasCqLT98bufAnNZ2KdKtcsTr5nCdc3fqqhMpaGqnCAqDKD2kjxYSmgqcqphjGbmBxHuqENF737RZ8VMXugMf",
  "key27": "3FBtjmrtNDDXRxQrjVCto4xG3pTdVH275k4kZhrD7qFS7C8XBQvkZodowtv3ddMpKijMZVPDdgR6SHkxshy2KygR",
  "key28": "2GoUtfB2Z2jCsV2BVVZLpLix2Jsb2NsfuoGGvPv18wwgaixRE5a21vbyTskJb3AWFzSHSfBSYzxoEAUSe1cF7D8N",
  "key29": "631SFGMhDSjArkQLJnGMQhavvukyh2kSETiUMDHbGuoLD33pviSnr2zvE4dFDhaSuBVR8iLveFy66cii2djksuBx",
  "key30": "zafkbfiCj8TGzj8mrKyHLP9UinLNyGaBC3jU4fHmz3b4mdCiSzjq4Hkosqb3Wbq8yp2gmZaUP4ftYu1w4WQvwb6",
  "key31": "4fKUVsXXsfGhdMVAuDgsJYMHyBj335CthRxqnrJxgZnN9XTEWQ92GMUnf8U344vXf8EL1HvYiUbatvTeS3zhzrWw",
  "key32": "5gGUV6TtwLWnqbRH2yiRd88VuRRTDEdJVsjWEs9maAmpsb7fuV4aTbc6kYTn6DKw14rTPtQtHsUzHjeET24HNTGU",
  "key33": "4gA63FXbiz243XEJZ4THyUP8TdWJ4mMb6bJGrbAJ5trqgXALq7MhR868mpKKumbCBT3F1MgD1NHbWNjQqeqCY2Kf"
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
