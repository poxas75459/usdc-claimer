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
    "EFwGom6VpxezCCVzgrWRpmTBA41zqpYouL8EDfaxu6DMTwhFaF6jfFrb4weF8djdmzAkoPNvfvjNVcQa8ABbikh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aHhBi1jEGad3hb9M1MYMssgNMZXiGpxUBdYdgguyTC3DQ8ibihkToyHwPm9px7msLsgyfS4SFXaMPqrAZZsMRv",
  "key1": "3mwbJ4BzS8dAAgCNFiDHV7XwWfLemEjkbQFT5BfBuGTcNaFnfRUMJ2BqgMfLpTC3hSnFm5QTfFzYnCJyAawF7ZLy",
  "key2": "bU3V1sVHtkpsSuMtzQwB6onocuJDCGwH8CrLfN5dYHs3qv2fVYr46Yz3M1c7Mb15bXohKn8Luxqi7rJh87WC3qJ",
  "key3": "42Lgwdrsj1G54AfA2eJ5rFCCy8shKiyQ2neB9iJhqXuaho9VMR8nvRH7wDsGWWHCwvCnAnSRdZQif7586A4hZ6XY",
  "key4": "2v3ABLCQooYtYyq1ssb7p5frmC9KC8EAfxBQ8piEE1eoiyV2npqRVveiH1SfEgQE6RPn4qvWKiXYUGiZjsvJ5o3K",
  "key5": "WJXe4RPVi8LjHM5eUrypeacAftSQmM6SpHkkBRdHrqNA3qMSKsvN3fZdYosRkVGT1XgwYufoXzCrg85TELVDsnY",
  "key6": "4iwj4Kcpk34CcwjvLzSt6XcrsHSNqLfHwem8h4yP3zYhAaCWkP5oboh8bLnUJtLSkt8R6nwWM4wM3fvFKLH5udYg",
  "key7": "2pkXer7euXeQpABRvnMxJA3WA83ivRtRxvNbQrhcn22nDiDKY6MW4fJQ1mmhLAyzwvwRU8DDHSPmLcki1tMEdxSk",
  "key8": "5TairakFGp576FmagtPVoNLctj2LBYFXAXF8xPnfaLhB8baHruc6x221VLg77R9qqvgpLdm3SVMU8rG6yPExHZtD",
  "key9": "3qZNrhhpRkkyNog88vCZpCACYqSGBCcVsVcsCLpNyA1C8t7tLdwFbLvj7XHQX6TakvzEMiyCcvE7Su1JsiHqK7NH",
  "key10": "48MQ7Hp2guPSYDU8v1Qdi1Nn4sdJT5BiKmoDnzKWu1adne85aGqPJSCPEggubsvSHRBTAQ4bJ5qCSRLWUezZUbuS",
  "key11": "4a5BYaoRTz5pSG74mvtAMwz5KUim549mjceV7q98NgtD4ENjoH4JwPvRvxaqPj1yUxs3kK8GPGgQaUHBkpPFbdxQ",
  "key12": "Fu7MyxUPuk9YExyd39XDwLuPR4QWh4rxF3MSH1a3atQP55bQojkw5JvtWbVv4TGhMcNSwi49xUzf1V7sY56DjG1",
  "key13": "3eakRHK6egga5EcuFRYAs2YoJ1kqbNd7b2nykrnJygD3iaZjNgxYBnhtq5x5xPvughcCPdyES8LBpQL35eew9Q5a",
  "key14": "62bZ7A3cGy44JBBFqia4rbJ2GoPrDAGJtvizDqCe7AgJPe31ZkGacbEC3TFyhYqLc9UKWvXgb9Q9wMcHzyQgzbfm",
  "key15": "3eVPHxbaXjXddnZr8sSceauKAdPH8TsNrtWAMWyZoLqhdkx4x7iEro4jS7cfteo37zWin4dVrrYGC7S5w2rg67Ur",
  "key16": "26Z2RnUFwBgp9Jho27UZJDwZ9gLKbY4RdnPa7JV7UbxCu58DFormDKRhdM5cYQp3AHXb7onsZn9EhXGt5wzvLLA8",
  "key17": "3TrasNRVXE8dVG8GPTGM1jytv7d86G1Xr7Tp3pfoehJEBQ1Nn3NDqeur8epWcervTsA5gJiMmXdpP4pQpt52nzdY",
  "key18": "5MS8eCwuVpSfkP7MFVCJJWK5U9Vjem3QmvDhi28Muavnvz4zdjNJxqed9MkKaW5RHz5dkmUMrBu4JXiNijE3zuv2",
  "key19": "5PjgqJRBv4nqCMw6G3ypx8RcYsKTnp1Z6QAowG34b21sTWCXPo5teE1o1Jq5c23gDh9XQ4VjzqsEWeRNHBi4kG4v",
  "key20": "3VrV2nD9q8xMpcTR2HJS5GVJVwSLBuCfXvhuyA3sK1ntBY1JqPws4KDkAXGxyqBRgeovbAwz5iY6obYSVPgbzSN7",
  "key21": "5ouReWGUabd19k9wq7BEngRsrnoJworPWpmyt9GG9LkZH9B7FaL6PcRwrBN6XkYad2c7Qmxhs7ix3gxYLA47AScE",
  "key22": "2SRHn89miqfCQFWKeH1M8i9JURWA8Dicy8WxD2ZWRHaNPo8NE4KD213szpq2wJiYTD5RFUKdJePq8zvVPM9Bpqp2",
  "key23": "5c8NECJqprLWq846TUG1FmAM16kAc1cosLxQ89G5SYVDh3y5cBNScjriEFzvZL6eQTCx4wAP71L66a2MAhZczdK",
  "key24": "3NsqPQBDYhRKcyjnB8skU51DiA2yumm2rNZarR1wvCHHCrJCgHtuERQnh8KkHRdtc8SUKqbBXMw8DUvMgG6dGEdo",
  "key25": "bCHmw6wxpkHFibPpPXxWuXyvjVoizfCbwrjqSansykAxCLwjD3v8SZBVrU196b415q8DXRU24r7HigFJKVPze6b",
  "key26": "4Ha1Rd9cnb9UPWUrTLXM2gbNFTesBmXLuQTRbj5cPa34H3pq4qv1XCN8T9vBXVbWbG3Z5aaqPgK2YU83YW8NYKB8",
  "key27": "3b5wSkHfBVehUjsfCqeE7CNn6fSEon2jf3g3DBFwAjmCEpMwgRb2V4v2VjHPepDf8XNyGp9ZxmXNJc9CrfQj3SDP",
  "key28": "4pUq5NqbeUC6jUR21WVWESms1u72qJbqh9t2DCWjhyhr4JnWE7az6vT38TD94PqFBPVvJREYs2aaspVZkxxS6N3B",
  "key29": "4AdM6Sc2Ka4xd6qsLg64FirSSVL1oAJxFo8XUxh4embPMxEFRcPGaxrvZ19c3hR4GvrB3SKLwe74HXfcTRxWWAaz",
  "key30": "3i3nrFFxEbJEZrynorJzsQvraBTWcZBync9Y4swbu3ohKFYsbRuL2N77kVokdyGsYmfkhDygr8L8BNkuZYKTt8Rs",
  "key31": "2QmF6C4PyELWWRkPwJGUEK6v7wiVA6Pc3MkB5hZZEp9Xk9AAA9bbmevXZq7jLyDcaj765rM9X8gwHR9Zvf1UP7g8",
  "key32": "2ZS4gHgb9nH8ZurXufVYs46cLCdWFvt4oRDSzXMwc6kEUta694fhyEWzvHTiWMA9ZmKXx66jcUGSX2fpyEUHaUXm",
  "key33": "3ZHYSmbuDTp7zLsq2NqXZsSB5qqFtvQ8x9UbLwM3L6UMKfNJVwUfZYTnhmFpTqLRmLFt3UBdF8VgDvaSWNYupxh2",
  "key34": "2UBtgFWzYAZxnxbLUQayAm9FBzwZBhQsRRRxwJVRrwVg9Z8p5xeCKqDd74XJ77JvXnVaJMfqkDtKzHq1RJC7quqq",
  "key35": "4K5yRSiUCMQGhAX1Wj5n8h9QvmFaJhyibiq3Xx2ahPt9cp4JjbpcyJCjZaM69ABe6gi1RozB6moinCfYs8oYZ1LF",
  "key36": "2NG1twJocrRGkiCTreo1wb48hEMWSyXuZ7tvw6WHCm6RCMMYBhfK4FuZcisg5zeCmaCjGPUbve2h7ZndhaM4tVm1",
  "key37": "5ncQLbzzeE2LZXR1UnWqvzJCoQbppzdHDWcWWxis2SsQ1qHSemjxxuA1hd61ShhgX3XP5USCYGzZNbZEgL72BAcw",
  "key38": "Ks8FymsGeeFbjmpEcCemfxCrjASjxvqMSLfo1BBEguuwsPThCeJSSvdLuiyScJMJFUVYGPbeVUyPb48QZdZSqPb",
  "key39": "cZ9RC1ddu3WC4qoiuaqo3xw4C7D51KosPzCQpuVtw6tVBEV1GhcsLMKtT6kWxEPPH9QQjrdThxTB2dRnBdQDQEm",
  "key40": "4akkWHWQu5fPDqdbpB8EzA7kXScYkQjMN6t8Yk5FoZAW2qHTorCcfEZVWP4ywprHNFZz4UA28Kq9XCKufcYmHmoi",
  "key41": "5DkczaFi7mx8LXMRWVWnKZcT1LyD6QbCGC2t3RrfQEDjT76JuEKhx1rLR6e5tt8vWVWexVVs2YB5FkU6CzvqZ9RB",
  "key42": "xtyJ8mCTs2srbgME6NQZYFqMa8r2dtVD1FCFCxdg2b2X5jDG4KrM6XRLVZGa6yRrgAKd5tvN7ycVMEKWE19dGrx",
  "key43": "4k9XJbBHkG3gBy7fC5ZbFwxtbzTja1dWUhPXi3RHme5cajhFoZJ7ycLQxSSSx34aGphuSXVurQV2DEKqannVGdWi",
  "key44": "C7zszmvsZz5a4ydge5L4wLigMhzyBw3AuQAu6LBcsGZSXHq3v2qfq98uAaajzo59fheBVTHcWpfEarc4JdHdXf7",
  "key45": "f6Q6yQPK8EP69EBf1SFYxtVc5Y4rkPLK34imQ8WjEpptzPjadTyngaZUH4RcmTNo3yjP5icLu6mv4qdrnyjkuCt",
  "key46": "NXciRTdi33rGBFgRdUtoMDg1r2QP9GV2cd6dP1JgHc2UY5kNREAswjoRFyrR7RHmiEyWMFXYemnzWdRdstfUxvb",
  "key47": "PyFxHjvn4mYfesJgmXuEiUAUmoH5sFXrzsn2g9Vbpg3y3FUUnYKTZhDhRbRurmGZcVmG35vHV99Js81yy7BRKgL"
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
