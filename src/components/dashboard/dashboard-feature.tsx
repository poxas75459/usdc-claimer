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
    "swYJ3QjXTvkVwynUbZzA66RMwedKfZ23KzxbCJvjgXCqU3SKasCVfW3XFB9GC7gj6evhM9xMHTbwKn1JcR3RCVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpdPvn98NZ9oFfxBJaJkQ1sjTD7rVST9bogGvVQnCjEhfcCE6XXFLTpRxXxtSvWrUFu9QifgkGYwVQcpTcJdoJN",
  "key1": "ALi4ZW2vEcuvXa4Yu3m4Jon6TB41GaHcDYLdcs8qtWi8gAwihbHEFsSUhVtJbfVB45PbsA6Efq5GHFS8dA679U6",
  "key2": "3gNzVcvu4eEwj1CS7XLF3e5e1bLiAwUFwBj4WdJL6hGyDU1ZPAhJiNznSqaCXhxuM4hMSmVGpKGXrweMsty96SMJ",
  "key3": "2mC9R7kC5ZTPkFuf2bFJdTpjYaxkkLdVnC4jRpbUhT7aBX998VkQ99YkLNRy8V2gcozegCEwn28Frk6cKiZ83UVR",
  "key4": "5iKyxuQP3J8bP2Gba5vJTLa7L5nfFgpY85YpPBoSbRvufFTrbzPELMmAQzTt8zTV3UjrPDBKMmAHg4pzR9BZGYjc",
  "key5": "2Vi9eGUwy7dCQ81P6N7h8WeN5VGsTLJpeoLSNKibJTmAVQQWPQfpv1pDbFQ8n8BwqB17WZspsRrTdycaL6HbR564",
  "key6": "2bjfwfrc2dTzaYgCdAtNb1TjU2nQf7rgL7rSp7qxZrRkZjgxuRNKRLMZbVfkBsbJwzYFGxxxGnECd2ED73cSqm3z",
  "key7": "pdGZyzBQLJTkH6Q19CNhsZDQbv13vdUPQr8EnGuH9HuvVPnoEaapMm7oMxT1azm1EDqjhQspHbNfNcyiaTEDUX3",
  "key8": "2n22uwCwNTVdrNHjEr3VfUL5tvE3UxwqEWPffbap5WGA4tvKsbxjr3tX2uDw2YmyNNKPLTGDqGGcMZhGQYF2uAyB",
  "key9": "5m438GDGoi7kDymWVDVuHbY5HnQtWEFoAZoeNn5PxkRZrpPvcAZvd6yjGYNn2rd4kzWoWxjuHS2MmGypAC7oBbRE",
  "key10": "5is7NbyQ1stAZwmvXWAhPu2u1EtPy1aiPqvGSpN9SNthoQf5B8qAxcayTkWeuX5cZ7U3guEbbAU4nKQNF1F1najB",
  "key11": "5zckBdS5puz61YD1x3hbUV5WFNyK38Sy2ouKr1RxnH35Uo4LUHzNJsAaXzFTMm5B543oKTeNXKfJrwnLGpKwqVD8",
  "key12": "3ePGNXnc7LsGomtX4ViaSyy1eD2ePoET2cdNs5np81CsMUWjZp5uBMBkABf7u35L4A28He3Re33VYCRbPR44yezF",
  "key13": "3VCFMTGJGDvRQN4Af7EdhH9AZZAbPqMH8NXUjJz4ikYcMWwpUzRsRf6QXiWLPewJbNJTsKjE3vUpVYTBogHBMn6z",
  "key14": "3fhnVLwWetK2SgtTRT3ci8roiEc3QjG2AyTX75oveeQe2xjVzm137LpuazmKfF4C9qdRjDcMWv7Ne6FvuFTTwvRA",
  "key15": "vyKM4LLV5wRnKmU4TYSXNaGe11YZci9JAVHpZkE2BLsi5g1zEMjNowJnGBfPRjmyjRGL9knGi2LrUdyuPga4yon",
  "key16": "3VksmyBpMvp6smTjUFZvj49GB48aK2LsiFBn5B5GJfcKCk14LrMj7CAD9X1ojhX4dqC2HDymbM1V5W784WD874dq",
  "key17": "5SusRuX1LCwtZVAWd43EKtuVzfn67dqNpC85AwtCuXjjyfmoUT9LBjsuVCZDwwKCszmpZfmFWgYKu4LoBCSZJ9EZ",
  "key18": "5T1AkfKXeWj4rLw1Z38KYPdopiKVC3bQ6x4sVMd2bhzdKm7DJWHVhfDyRsC4p3YN3JYBDGZhArfRYmnU3iHSGYDR",
  "key19": "4UV1EHtkt7RrWTJP76XmTj7FWvbCon311nAkaXcVoDz4ZkDmJWpaZ8hRDMyHfR9Jr7xBrTn2eaNfCf7f63VyEg9q",
  "key20": "5z867E1DDJPtzhCfgQaXP7cK4nMdTaJrSLB6yjZzPFAriTpcJUnMxAUVgB66qK8WkM1RLQmSRm8NqhJ8DFgXPVFW",
  "key21": "4569DtHUQLz8pBWngUFrFNdJw1zqXfvo68jPoxGD9Aqi9h2LVjvysVLTrnQix79wQi7nTey7wFfzE4dZqM8Xq7Fo",
  "key22": "3EkCtMjpSWMjRrXL8gqroNQYtpGkSC3T7jezqVYEsw2wa4gpkVxKkkpgJgvZUpfMJ6Bz5q2ooDg6BjpuximanY3m",
  "key23": "NLsahbFDsJN3wPjL1Te5oumRxd2BQZ9CmVuPcwhYRm1akiGsYCFLx6q5vCdxf37ixwoj5oiPCtScLjsegqkC9r5",
  "key24": "3deF8ePDGL58zsAM89mdb6y3bRSpMVACCr9DaH5y4e4DSdAKcdKco8hRDaB1CkoKcxHTcshpvJiznG7GpXnc1e7X",
  "key25": "3f57gNMw5wAyaZwkoje9Xgnb5d2VMEwkamuYCws7Y4cP2JivgU99neLgYfMdiBEruajE83VxgrgkWSVWB7cSKrbJ",
  "key26": "5xpixQLGF61hr1Zfpxdnwq8cqrAbP4QF54asYBvLTuksw34QyTMcfCt7Z4uKRnsKNbvSgZZP37bYgpsoacgQShbr",
  "key27": "5EUWStv2wV7sFcmxaPCcgqa7P2kP2gcRqduPK8wWTbDve66urZ4WbWg6veUSJkCXtdPKfZsgC8GboGkgzsFzMF1b",
  "key28": "5ZAB95X7wzWZ6JJv9o1RdkRLkXPFeYMyn6nq8f52SwJEJyuUPJXDZHjSHV2J1s1dtzjBAt3RE9kS94WHzZWjAVgX",
  "key29": "3uL2oXGbriXeHL3va8VRkZ58BbZ5dFECCZgfpBgLAQ4CsJ7fpZSkvmvUE9d1nbnKyvU5SgcfXfAuVnE1z5pFHA3L",
  "key30": "3bZ85RmmXLRihSPeKxHPmeXUbCp5vLjpbjdz9ZBcFTbJ1DRMCKJ4C43CACmH3f83hwhuvB877NKmFQ6M31jN27VR",
  "key31": "2AR2K5tVbtBqHMLdmeFHcNxTuYPJFkeni4tQWpaPNYpHdipGmoCMmCL65gMc9P5HA8bw1KvzznuGqJQjQJofkUHB",
  "key32": "GC9wpb6CuUZBb74Mqu1xMtJDWT8rdKhBs6xKaEiWDyBCaC7s4QYmGg45z5iYXDwn2YvJZ7539CAAUhXHwrWjkbw",
  "key33": "5ZhxBJ1pL4Bt1E6QoC7gkbsFScnAaBJaAGBFfdkWpMv3tRdYaEzuVmmYtWTWp4cq1wP4HmnwSuGsvPNDGQk63RnR",
  "key34": "2noWxRj4R3orjBLyERakneho7caJBkS6FgbJYMpPSshrHZvJNWCZ9tMsXp3zPtF8vf88aMSVHhBLpQjXT8oNtLMo",
  "key35": "3FGivwSfXVvEVTQmYNUry1SG4mGMUcU7o2BZvKNh23W98K3UiAkpxQpXEo92DmrpL2MXVQ9ZYwfWkiKc3cfYM3iQ",
  "key36": "3Tv1uHRjDSbgwhGpcskAtqRxtoD3tWEvmHyEnUqB9vg2FrfiZrHRdQFsM8Z5Np63WFEEYnVhajm8r5fN7tqdmEwd",
  "key37": "26T92M69jkRXh4v3ui2PVxzrwAkos54fyzPURJ4Brbr2cuD1zEPATuvn9iyyLTvHv9aCJGvauZhWa11yd1bZB6Qs",
  "key38": "eNfPfd3b9GDYbNEAq56dWVKgeLR8MqAeLUkzK5PUAuDGBPsHUggBnLeEsvSz2tg9FSTUh2GwsSfGPxviQkdFTRc",
  "key39": "4sKuNKupDcoT8tvmuTxb5iBpUJEX4CgekagA3dB2F51AWrivUbGBDDMUqs8DkQqzHCiJ7PTELbDCBkbKhRNi2ghw",
  "key40": "5r9iKT9jRgdFNaVB22gzKAZyufqLVrf6t8xTuaYfJM5S3XqFmtej8j8LRquHTzaPCDSPyjizrKDkK5UnXey4HbMH",
  "key41": "47SfEupXqZdFSj3ZtVAJehqSX3quxEu6hnK5AQg6Kc6RKQhuoVWQzsd8Ma3qwvu69M35v9mY68v8xRe83ELKdeN",
  "key42": "5koLf3thsGaKBJyt1M6YqD7Sesv4Ewbkgq9MH3WYqhSYWUpzbRbDiSDzxZnu8sozEP9ZYDiBfx6CQ6qxc9BXEFHD",
  "key43": "BhFPxiQ12zLM2JA9GYC9CP83D3xnpHrScykao5LXWauuSHN3hNuzq2HpmEF8rNq7xTigA8T6QLu7Vm2UhSGw1uu",
  "key44": "Bo82qswMsVSWepoGs2r9Jfj4UtEm7iPTU9V8L1fAMcaqzjijy5fW8kinLgowZRnmeWbYygxKTZczpBYiLiDPnf4"
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
