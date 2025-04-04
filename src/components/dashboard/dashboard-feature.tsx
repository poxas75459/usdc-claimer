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
    "4eFPm9txdDRrGSoMoaV5FP3JXhQmFEZJ8ZwSCPLX439UMbBcT1M5iHsWJiXM17pjbP5ixXLRwDSHrLcm2PDvBFsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9mQYxfEX2pNZ7oRhLHSuW2TDWzyxxnn9mMWteYeMobzeiGkUuPVMPA6HArseZEXx9dSD5giMSoP5U2iWdB65gb",
  "key1": "ivUe8fbKqjMenecJVSbLm2SJ4z1ddDLVoG26c66L5hNJjwX9oYf491MmZrUGyLUKBybwWQ9xmwETEmTn3B7gTGS",
  "key2": "4pJDzmSsoZ348Vs2CVe3XsJAKWndGPdB6ur4jp1PdaXyoj3c7DfqUJwKDAsWtmatF35PmG3AK23FFxLwNHoHhC2H",
  "key3": "5nkdmB7xaswUQ71NX8VJNSNRRjnKfSarz7DRKuFgurearEXx5idgwAzVaL94iPLL7p6i3hzZDzxaHVn3xcDs9wbs",
  "key4": "4QvdNka4gLAWfvcQP6x1zk5nermuQKCz2oLLYoFGvnjvPsBTx7fcKcJHHZrR3Y22qozbUBdQhMK83veBdVdVe2KP",
  "key5": "2QW4wt1dcgarixLELvEDMrTCnaSiDmAa4jisyGRSwpWNhhnzpjS6FMsyh7izH3j4qey2juJ59gpxCJo4BBSsekjn",
  "key6": "4c3F1dWitTpWo9AjKVQCBrkKWNzoXjPharXFcMhMpzBGsVhJBDLkxav9KgJQJysi9Pid9SZ4644ZJR2s6kfe1DVt",
  "key7": "3x9jQeq14dVQ49P4c9sTLdzURL8vD5uS4R64Sx3TtNXtgJULZaJXQ6wkPkWyNQRLeo2zrtz68X3tRYTPxjGUoFqi",
  "key8": "rZqJSpCXFjE8HgMnhc3gfQejXx9w8qAFXkhpTB8gZPP4cQpMcc7oTAr2FHMrqX2g9bAqZ4tSTxXnT3HjqtKvYmC",
  "key9": "5bmovdijP1wp5V1w2j38T3mGdbK76muU75LAHCMiU9u4vpzV2pz8Kui4UqbaNRyzm5TDgvhKmoLiL3UpSAuSUk8a",
  "key10": "44WjuZE7ZgpLgtSuiYdvYrQRccqe7tEHTX5jQ977mCu7brt16Ztp4sG39TuJtL6eFpXaLKmMNwZvKRkqmVVMCQPd",
  "key11": "5WsJvMe3LcMYR8b3yN9ubJpjo44RazUHqWr5r834fWWyaE9oKf9weY7Mimfcw1tJWJFbwH5THbFpUbg18auWGXX9",
  "key12": "46qEAGDVeWaxCzbczjNumKiryA8W569Xj9WhV5ewhPbMQySnqKjyznDhkm9KJtGywb6yjgxYMDF6qmLoNqHvF2jW",
  "key13": "3vNPN7Jfq5ypFjp1f5xtoifHyb7JDM5L7tLkWFriacjhj1shPVr9geUwDQbRxgY6mBukg52aAe2Ah5XA4wRhM9i6",
  "key14": "3AbA1UDc9aB3PDb1d3aid956Va9NQJwjjK5CUjM5sGUhAVy1Re8vuuvNngCgSbYek7vW8xPZ2NGQYhZYZ6a48eMd",
  "key15": "3GPSn6oCQpnVBq67GM53FTjpPLFHCAPdUb5EPtyYcXzoab7G72u2KtMFo3zdBqJFwgdLjBUNQbZ9Xp1z3ePPkrD7",
  "key16": "PREYufaCLbuJP96XbtDjyYyVrMqSWFVQsbweJxKXtVwqSdjaeAzLr5VaH3hA1KjUP4oCAryrUqVXTt5uDGptVt1",
  "key17": "4tzWoRXVD1D8HuKqfwSe2Co2cc8xsd6B64E1FkUY9esBuxQPB4QQxqREtayg2XtyJkXzgbqSLRF2a6q1Vxogaf54",
  "key18": "41oxfEXg3hE7p4XVfibAjWoUL3dkyDwrUauvofDSCCmnjkBCaCRdW6RYWH2kigUejiqkibJSBVwpGfsBLVRPpty2",
  "key19": "5S8J4nAfUifoJ4THbT4EebnB7uE66YyoNHVePA7gscvRCQq7zg9hexfMdPYBZ68dGSB2WQKNMPHhauRVMD4K3ZyL",
  "key20": "5cikWGaX3LFx8LqarMd5pewufnuZdGWxoDcxfwYuWMc8h3JjRDwypAELfayvKZx9UeYvrf5ttBsqTQjS11nmvBfw",
  "key21": "3Md3AvivXb7LFcBPe8d8xCq7JvZLYCryb1sAsjWAN7ag24bJzwSaiGa7QmPW7t1tjRH2Mg2JGSKe1yBAQZ7iMtrT",
  "key22": "kzYZfFjqDFj8PU6vabc5sQJ9qLc6LqLGWYS7LzKvJTNDAQcncewW5cs2GquPmhd2fpMrrXNkkKTWp53N5GEBuLz",
  "key23": "5Qd5dok4GHhq6nQtmN89j8M64ykkWwDAxR9DuH3d5S4ugRkfdonYYHhTEofQEYMewKZtwk5jtK4gzZ96VGRmQrUe",
  "key24": "2TcY94v4LQU5hLeA1FfBqEzaFK2yDemkNQRt2zrzP1Esj4ieLPEiBiGSBGgHapMorHhFVXEKiaz7CeSJqFgGEFc6",
  "key25": "36WExTStZ1ex52Ykxoyr1ZM3UTUKKq1aTdJtqMcYyFExPsP183ESsgJbtZSaoaYLY2WdcKTJM9NcatAMc3LHc58V",
  "key26": "4qCoP2A7WcwBTkQG2A3yoiWnozK98UatAyTqefHzfCiULmBD6WpVbVoafShN2N8b1QwjmbzkQ2zcgGVsk9Wfg1SX",
  "key27": "34yFXsqZSBNHBFTUN3AvgpxVaXRocEEWoT7zHmVLjYatGyCkoDQf5P5Km9iGFVcwzPoc4kQpe4WGWxJULxRgwceS",
  "key28": "4naFeDNiccpne8NYSoD5QjZ9tvVM1hrM8RRrBcaUNtn8CRV97zdt4sMvxnTX2kBbGuYq335EKtZb3Rjyfa56d5g1",
  "key29": "585AFfV6o8so2Q8NqtJNaQPg71KwKP5YqvfuENV1i2awdah7g4hG2X4qHyYwLxQEVRfmaM4PXdyxEwvpRnMVBTwA",
  "key30": "2gkFkzUq5D9rYQDkPHH2fQZGhNkaY1K6N9A1YGiptyYbrGZURj17EtkpEHCMPQWvrXCVvDyyeRYXbz5WrBMVusrm",
  "key31": "42XcsQ2tY2A7RFvXZ5VQdMhw5th8fAyLy3wEZ1ZY2cLHFFmUNBdHWBkzub77WabopquFrAEFCZD3hhuR3pcVx4v6",
  "key32": "eSzb3JxPydksmNQyhVbF4MeDusUDPK42Uox5wSeLhRSu289ZZLL5bhnWhmDqFLWY79kjucwYBpMDWuGHb3CRmxA",
  "key33": "4YUggq3j32iLXoDKkgunmiUuaCR7rL3Pz2wDHD3vCZeNAQsZ7fD5g4mLB2cNLLMrikYLKBPxGYXUPKRBqQewWEG6",
  "key34": "3DD68FVbbHAHWvgnJ5V8DrkbwRBZhesHkqLEKLoMB2VRNR1R1jKzbNA1WB2V1HvStb8S1nNzhhE4GUQ2Te4TqgrL",
  "key35": "2qnBGg8eJ7LTUShz488iPG5spMqDPsc6fhvS5vBgYrEp1iQMEcX3H6rApGwXSpRzsZmToghtYJ55FyNzhtQH6AwN",
  "key36": "xyTezTvVxmwJYZjsohbAfMDWHVHPd1FEzfpxpZkRmSkcYnftCbTBY9pn8meRtDYNdkGy5Gbu7e8bz7DXeqe1NZP",
  "key37": "3YygLZ5tTFuFnDTXBJJ2aR8d9PySCe5ASkqiHjau4iu53HaTMTZCNgjD6P5XDCP7UshfLRdKDFEnBvp9JZ5WWiAs",
  "key38": "2hNEuYUVAsggfPG8VQVnHzd6HP7PXPLh9puCzDnTCwCc4z1qkEeJSyHaFGVGiSPDdxaQhyuQHgupZL5vX6A8gQcL"
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
