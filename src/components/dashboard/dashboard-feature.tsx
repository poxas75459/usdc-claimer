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
    "2qgkUxXszgbKGevnFqpVZ9Qm7t5xgDvRR5g1JG58DMZpYDAJQMLTwuL2udh8EwE7kPFqHMH1xvssjzHhv6E6VPRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZC9aropP7MwUUT6pVgqTfRq6yHrvGM4Lau6dfn8TftxZzXMzM3uLmsq8Lq47nASuxYLUuRSmuqB9TX6Y5wXi4x",
  "key1": "4qv7bdPQLhFazpDdEWZiXAhhau892gUB4fYH3t8oratB51urMptYfzrqWtcwasexPUe8HTppanofyhR7s94htubP",
  "key2": "4wgbSa1NzgHbQgZhrYXvX2Sjs5UCfhctmGoziRMFGSPSNiXEetwprDNuk1oEBsk1wJ3ru8TLAs6usj4QYBCni3Z9",
  "key3": "5cuzWmUhhjXfRxFA15f8BsizxvFD3nZN4hzeRqY7P1pEjNPomyfqFqbSMP1RoLmcAUQ2h6XG4yWXvYbLdxJWXNja",
  "key4": "JQLwxiR2oCEPq61zNPNfNJ8L5hFqFJyvPiiZFCFLp8nfjkkdnFoq9Wko7Q6s3CnM8BvFtfNoDtMkc1ewMtqTVFk",
  "key5": "5nCV7bpKZjSTZSdUgauMBUWtsN1zVBqHfpzJGKQs2H5sFtYsu8ZrnYLxXPYZfNNMxxFegQPxCXfPSQPnPSaZmJcN",
  "key6": "3gT77cCWZzSoMfwyQh3WrrB4452yiHfK4RKVqpb8S2oyA4fGBXNvxgDtWvnDpjZGRDpD2BuZBXbPjj76jN5AGmT2",
  "key7": "5Jb4fxDuE6zp8Z3L2Pi3mBpepEeKWsUcYievrta8nPPEytTAhExZRtDBVdo4FSRQLrqU8VwjxAeMa7YfBjkxPHpC",
  "key8": "yEjJn6LVMskrAEjeAyWdALnBr93at3VLkD4fiYCvwXogq5DgGm1HG9PFPNHejCf6kYV99keABjt1wuErXMQ2KhF",
  "key9": "4QEzGN8CjAsLSk2KCAZaRP7mDr726rCb9zgFmrX9BLHCX96dkzgEKQTaXD71Ng1MwmdZTGixPEPeEc7vE3odvGeR",
  "key10": "4f2Ue4LkpVJBbqWymCGHE5ZgA5DxwFDeqvMfPAy5AWnXArvWQ92jFNwM8ADfdnZ3y1NBysrM9DVohWMLXwwL8h6B",
  "key11": "217CBpit6bGEdKq6awu4jdRAfCxkoEjoZ1abLniJKaxLdoagBWGmrVJNgDxrQX9ZUUX2Pd1r6grJbNiA3EfKY5Br",
  "key12": "4autiYV99YRcY7MkKT2Fc3bdNBxTcMhcwz4T8WC2PwhWR7nHZbGAoc5eu3REdJPRF3QWjYdgR3y8rGfKms7cVjXx",
  "key13": "45NhpvPYTyk3qSj4yonBv4yGhPAvQw4mN77omseGqe8QrXDxvqUPCnQvk7xGpJ9GPkuRoyahnUqQMq97JV4LpH9T",
  "key14": "2C1AVD7AAkxfx4Ex1B43AnR3Vw7gbFQFmJZDuVqAnf2qgBUJU6nFA4GFcx2THKZHoP95jbTS7qYZsK2ZCPUj29wp",
  "key15": "3eq49Xdr1RApnFUkuG29noPyhJbxawhtwft9cs3wjvpyGRN2SaXgsKDMU8Prvj3j2rd4LXnds4LynNVAZ75ZRNaQ",
  "key16": "27QUjEFWDQLAoidjspRbiwEY8yAuRmw4mKiCcRwwUAa64ZZ6ZzNzwgR2ziA5HrCi55FmDcQBCuFrf12Wmap5BFaV",
  "key17": "3AmTN6p94Usr7ivBHgbk4J7vUD3FFSJUMhwaGmuKPekwG2A5E9zWzZv6zThTFto2ZKQPZbWwZNaB3DX41GNEauax",
  "key18": "3vdJUFkQvt9M1nEaPAyM9YM2kMhfFK8TGJzRRiiHUp4L3SikCCcDWekd4KqzairVrqPLqhVMafoqw1QgGemUv3k6",
  "key19": "PimaeQfrHwnDqauQowd1FVxAr9UaRWpZifNkemRt6jW6bKXm7UnMDA3YRdUV1BHuGD1VBBWRVXYwyeCkJ18EkDU",
  "key20": "2kRAMc8oQU3DMfs4sZnhAvG7xaEmeqBjTpf7AjqM6SzqNFX1sVVZCKXfquKh7J1fWcSyLrzkerWmds1WRSvYctJE",
  "key21": "2VZQu3WyiAfyirkUxpRRgJbBoU2BHzzbVMAbSvHSfdwiGnkXSHpo7quaj2CJzUxTRMEPjY7ZkJcfHAfug5CncsZa",
  "key22": "uE3f2xLFq8wDCeFpkx4cCemehqMDHR4kCbNHyDWJsLS6j9c6FjyAzymKsoDD71tCEtTZZDWgegvN6EMJKhjahmg",
  "key23": "6n8Q7AXM4u1H3Bn6n9jpWKfvZijySTtr7BhJCGxgw3bUAcTK8U5VHf9VRMWc1mVvsev1TAaLFLvGSNZ6gMqUmPY",
  "key24": "4vhiRaa8jJSd3DBCBaNAfw1K61oidCTw3dSmQRkbbR8LAr5Ru5XPb3Kmw8SMfHnjEUfrniqbvi5iYicgc8L7xUbr",
  "key25": "5YP6dWQrxfXoh69koXq8FVLp3ii4fKhMuZboXtzxqFc8BTHg1MG4i4mRqhrg1J4SS7GCtjGVu1XwFmjuVvfKf1LL",
  "key26": "3XSrefy6cctKVa1ANtUfTiEX1bgwZSUvhNZtLEiarnTRQ5n6Hpbn9CenV8Cot4nszYMre1eSBwomHj8wpUzmhwHD",
  "key27": "5QCYQeTo71KXS1wRkDXd1UPqGyBeQnoa49uUS5uvypksjPtjK1KwjonfMp2a6YSorTKS41WhissY6WAJJg5R6dDz",
  "key28": "4g73pZLbSmq6bA3Dq3Kpqt7gCFsGm2UXFUHZ4SgVP5mtw4vdJEzEeU41zH65fF9n91uoav1FHJERKTetYea1CuV1",
  "key29": "wba4APtzrWtcKFcCx8zt45svkUDyyvXuTNdJmDNV54XuTrnZitpP2y3yF2yhFj7mLX1jtaa5Xi3B6Ez6BEMHUd9",
  "key30": "2sWaP3ga9PT9NH4RaNfWiPTowaj47E25Fifs8ArfK5sUsvKENnEqhUGc1GvXaJ8jBGkxBtyKKBwzgVPE4cgCFJjw",
  "key31": "3TbXrraiSNqkSMgdGjVoPony5gXgDmEt6QX1G8ve8SfQjYWTiMJQYQZpQLL2xEyiyUyrat5guUh6XtkraCL7ik1k",
  "key32": "3Rv7H67Fx3fXqmH54WrNE7rJnFqU1EJbGmmxhej1c1uEu5ePr62pCXf7D8J66JVgfaz1BpyB3gsDJa9DdFGBLepF",
  "key33": "3t8eLuVQzE1bJtVuqxy9o2hfZd6Gkw5NS2m1NNgE83Fc5oqDiTewZQNFQLoeUTjURzqszRzgMboMa1XtqZM3EqSe",
  "key34": "4NkCZEjWD5pYBH9NQYXx9JzvuWKERHwPSmhNWa4gEDYdn7Lwahag6Mzc8QyJfCrfyBr8H1ci8jJaLZRTD1NxbCaQ",
  "key35": "31TcDLxpWfh5ddaDS9yhSsLWrU4nmsFbv8gN7pWRNKxCnGnc8B4LXrJydwJHtmqinTBV6SCoKHgbij77ButGdwWe",
  "key36": "5vViTBpcX112Kso3mRxcfqK3DSRWPpUVZg4LmKDFagbbbhFugFChrFXEmBgw4vyJboCNdHUhRq4rwbN8Qtd4fQhK",
  "key37": "4B7xJQZB2BobGgF6qQjEKApJPfGKDZ9sUpyVDNmvhFUALP2mmRqS8Z2fe55CANQBtibRiRaT4jKF67UNYMVMakN8",
  "key38": "5ZJCKiFtChRGiY4zXj5LaraWejuLZQ2tkFmorn4aAZVVmeVZdEHjh8y96YZjMVy9sx1NNQk54Vuk9PVuPyFxzDze",
  "key39": "33Sa6dwm3juStZAWwmRxBMKqxwbypxHaqgmsdfPp5ifQNfKKApyYSddCtdfYW3QLPyMe8Yt2raifzGN8tVVLLNzo",
  "key40": "5GgsFw9UwEz6L37ygQnezyP8YFghnpcYLpE52dfmHK6f9tbJp9M18eQULMLcPSXx4PtuBCBCTSrSErNzVs4uuRns",
  "key41": "3cYDCA9UVTVT4f8b3bXa34fftBX3HLazPx4GAZKdobao7jzFE2KQzw5R46f35wyXo2dhSrieGmqsFzqJVNrC6NTy",
  "key42": "td3yME13DTRSm1dRyV8pJbCC8WYkd8yfiq2YvBgSE367qEZuPh2r4CTNDReH24hC7oqL9rSa4RGUCJ6R2WLsyX6",
  "key43": "5hbB3J64D6fREPAwMK2Btsg1Ghy3gAaA1rQtfmXxxMCCkcT7QaJx7ZgNHzMAzaF86XpBKQbZCQofRMRn4TiBoZFm",
  "key44": "5xC5HBYLQuj6Y7favrN2HHHKpG6C2ZppdiJYBRb9ccQ5Rt1nSCtSLn4E2PiaAR9oBeeBGYDmb2LsAko5zEM2hEQZ"
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
