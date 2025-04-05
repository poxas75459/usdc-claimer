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
    "zJEEye7ZJCXKmJKijmaGJMfCZ6YnkQjUWcPaUSHMbgt5hqn4zF5pnZDcWbYR1LWQQSaTT1CJvNVJfCPmhBVqYfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q61W9Ekm2NSmJk68oEWwntVDBG6c6Sn4j1PMV5pYK7nvvJoAjdgcdLWbhTiuJjNbHCFnGngbGUVDNy8tFsVr5rm",
  "key1": "5EXV9wGeAVZJsX74VMDFCYWZBNThE94qhNTyMLFfS1ENcHFTeGcUJSvHDSAw1YPLSSyXKcjAkFiYQQ83cZR8F2fm",
  "key2": "4saFo9kkvTEBq478aNFHMFhLMoeTLKEPVcbKd3r3z51Wya4mc4TUg1bQkCV4333d1AcrgdcVrPRuJCBMQyfoWXdc",
  "key3": "HMkMwCiBzEmsXz7bzqAw1izD4BbkvQo6nzUHLT9QB5LeXUWdxLjUvjEXvMFYSo7X8Kk1pAtnuHRPSN9WSG2BEnz",
  "key4": "4mF1mgteAazLDYD5MaCorgbnahet4HmZfVt6vx18FD3duBGjeZPfkm9xYUGT4hJuhfUrhYqEBrCV135FzZqQjsrA",
  "key5": "4SQSm46XYn7MxYQixGHLuZEYZoS2NsWEcLY1FgiLWhbA9xfxeznuSKvu8SxtvMQuuzjMEbFxxyWBDDQZTDhhsqAf",
  "key6": "2PbNm7YZZujNgpwvbz8P6vT1Gqk8La8S9hEXN78PHL6FeWXRS9oRokNeenS7fnFfdAKQqvf58798nsDB5Gh14Mrw",
  "key7": "4Dfz3jAeNgSAAw6zMDQZFbGegeLwbkY6iX9r77DtiZ1fR1MArWhcvGUYBTXUAmimvWJWFwsSpM6yQFdpZ4Y7YAoL",
  "key8": "25DxovApPCpJakJanqpfnF9ZUeJHa3eYFQQPcAbUHRJuJ1mqcshrXcsQMHx9udZa1bBCMPK6pi1U6g2QMA8ZikeB",
  "key9": "ijkUCj3ZH1pXvt9kiVR62iL9WZmopSd5vwivrwgNUZ6JmHFh4KYaukQNhPF976MW66NRfYjAn5ALH646xrLpCk1",
  "key10": "VMPZH3K9uRXSqua7bV1MkJU97ZAZZQAprypAXBJUKcpMvX23X35CfUtWC3f5QSHuS5HAmEyhjkM4Dh4EuCmrKrG",
  "key11": "3TWjUzznW437teKPNMdc6bEPGr1bstthL1sX567b3UWzsuNuuYuJ1sugqWTS7witXNgm4yfCnVpdVnb5fgzpPVbr",
  "key12": "2izsRJryAvce929EJ5igZFYjRqJ1kH1wbNW4Sk5N4ontc8bzhsHcstJhXrbe7yeeJQqfaVsuHQeooSUG1e7cEerD",
  "key13": "4ePzBnN8uULmWmPYmHcXcSQ7GxAZUCX7wuzKqCroM7BaEAjYtLy59Xopgmsi6ufXfXYM5KbtVRmt6MkQ1K5dD9B2",
  "key14": "31kN5kMkVE2sH57RmQZ9nCGrmdfbHEa4NuE2KkNrH8QDrmZSsRZtWwyqt6yMWAYtUy5JU91RFX5drvP1X8Tv84Ei",
  "key15": "57Mj2Sw956WNJT3QHvQD6SRdSMKjKCfSMnGis2nCT9mMqvPBnh7aJQX9msGhkq4UNmj7hPanMwLMCPsjUkVUfoqV",
  "key16": "8iMLkG6D8hkN3HbvX77fpTTwPWjgRHWuryNMyVECqUrkDdr5xkwkos4LgFGS1Ext9uU8ivUB8FNMZ2QAXzFYU3N",
  "key17": "3vAbufvFECuzkiiAikPhsQxdgNJbW2uKDGa7YoZsA5vu3QkmCRPCWR3JdG5uzq2LbAHTaGFYi4EAW3a9rA91ktKP",
  "key18": "4f1Ac8bFe9aDXbHuhocsocpQK5DedyEQEwMzQggSd1r4dnF1kKEvJwiiEruBZBivs2DBfi8GigUaYFiRqw3BCAaX",
  "key19": "LbErkv4aueS81PRH5i6W7duUWdh5MGVaN5up2ZHUmLhHYYQcvHrWa2npBQFPuAZoWbTTagsD1o8Mz5MYvRnSEkP",
  "key20": "5Cng75kSr1mVszKZZL3BTkEhdX3FGzMaUbwvrsqR2ZSXNyUQmRnGPCDp5rWCMZtmDnRrDkmJGMKUrGt9V5QXq9hy",
  "key21": "34BdDgArMWNTxXLXgxTbpoGf2QDskTa9its3a3pKxfVC7JrfGpVbKgguDHJq8gs4QcLUeyx8o1t18UvJSJ9c6154",
  "key22": "2yuk82YZYYTjsTBC69hxUz1D9zyk3Tcp4CVezH82sNZD76cf2HanXPUwjsvNnxJwq651ATTDENnX9cQAH8sFtNdX",
  "key23": "2eC97eCZYF5R2k6MZDyzeZrKNhtrad8kjxYPcxeoMebKwibodfgaCGNYNUqceTrJcdRrMvXVwgAu3xWKdL2qBEDk",
  "key24": "2GC8y8ZovFnWMD89kaP8p9qS8mQgsHSHZJx2dYYzHAnR8wDXXehjqkXicR45KW6B3MFxNn6PVzaVws3HsaJLRzVr",
  "key25": "45g3isBbAM2kB5vUcuUkWSmGG2gkjrixwb5UsKqyJfJrS7QEg1uqdPM4ApJh6QD5BWX41aJ1p6847nT7dxs8J26d",
  "key26": "2QDz6gxRwHBGp83R1hkYgLdqcMVvmTvCjmf8JeRhKaecFn2XEtuvCXBM1wVYXSucnT2kWVaxBbnpnfzrorWMzNhr",
  "key27": "4NkZzVKWZM8JGymaNumHS9xUevA3riwQxTQ2GiGWVHzeryTxVZwTeWQd5uDYgFhyVuQuGLBMoe96MUMamGrumRHx",
  "key28": "3ZfVNtM9GPQvJnngeTSKfzcvVrZf6C3dz5sMVJvSvfBmAPWoGuZLD4HT7eC4baNVzKDxAR2LrMhDD1yaQAq5bYbW",
  "key29": "4NpAZ3jkJCyUEKWegACAY2x5XDKbhDwuKBxXrpNyjsbBANroGhnCxkvxuxUhMzxGFiyTyAEvCBtZhqoyV8bYfP7h",
  "key30": "3hRQPDJ2pMzwH5Cdm3wtriZa4EoWfdUgZ55qCYCNPTP5twCQaY5yFswkgGHKhMbpBZrsXEyEsbpCgorid1BH7hBr",
  "key31": "47oXQVsbsichF4D7EmD31nrzDx2FuCtyNKo9h8fCet6MJqRA5LEUqn6Rpd1ah4EivfacBzcFCAssf4MEufPNgKit",
  "key32": "4jT7ouqzYk3DRhx8gNnpaQL5DEVriWLPZ44LhLtgF64QpCBLM5iUFF7i86y3VfYkeS9WukPa7q1W3rR5AFfLUu1J",
  "key33": "2XFCHuu4wRW1hGuozExiGtQDx2pAA7ffYJ8rCQN2KeMxMUDQ7n4oGFVR8pA23UkEyCYJdnevngcNvFrJrSASum7M",
  "key34": "N5YjTA7Kh8HJXGRfn2vCs4mTkFKeMxWFoahFdkWAUcuBFAZGGtnxFpXMsSKL2kh6cHjd4ne1dknDHX4kw3dg7Uz",
  "key35": "56bhuXw6NCFz81gtrDKr662eVe5TefsrxdzfgNJzFNqW8R8mpcnwzaJGQ2nfmiPjJ4KsfaErypcPbujvbq9qQxs7",
  "key36": "3MEm5j3DnrAgr75eZAHkVVAE8S5ndxPKEkhnVCxy5sSyLcNrCUzHzdkvYpPJMqDMN9Cx2D8YBw3JyCfL8RHbGR2z",
  "key37": "5o8qwNK7B4e9viD32aEgcNQRd82RPKgYeGAMKBiknfTjiRr4bjWLHWBr1Majf6921aYc9w69AKH7UsyBZ6CHJoU4",
  "key38": "5SDoTKgwkoabi5VLTafDQWwFaDQ1VESeGYhMCDDNsczwxPywSgHP8cj8bDjaXURprQrS9mcbntSUMnERQLc3jg9T",
  "key39": "67aWhAAdY6bokeHG1fTCAoqkAbzrqTx1rSWdrukdjYez2A6T44Ba7M2GgfheqBeeHbLTbAdLBtSwqWq5jvcm8PLr",
  "key40": "34s4jdX4bSEnp1tBs9q8ZX3t5T63SZzHNJaF888r8DCa6ui1Yf2CWTfmf93kvLZYNgcczhNrUqea1TBKvy656gZR",
  "key41": "4PNE8o8tTFNEJS8qCDvB5kF8s3TceAHVGqo2TKLzLLeooVLGoxf49hvJMUMN8cMpg1fCUvEJbNj8R38WTmP21y2m",
  "key42": "ibNJUPW4UdzhNRVqxFAGMtMnyRCpqifvJGtyvGfzv7hQvPFVKwHjFP6BY6UkZyrcNYet6iwV2GYdGPTdaz74VW5",
  "key43": "4m3F3y4r1UGUtWjTcBeA3xBCUfEtuenu49waKDXgKjVqeJBu87Bnj9GvQoL4xfU46vqC8MGgL9bd9cKtu2YrZjiQ",
  "key44": "qApFSHmZj57QZaP59cmdyUejqjP4kmAG4ha9PkCgvomGneKnS8cEJEEXC7R2xTbpLQkf5AysyRdGCH5Fe1RhU5C",
  "key45": "2b9Yp78gykdpaUxXMsMK1C8ybYLK5mP5GXf2xLMFHPLFb8gond8ddpDe7oqCJVmECr7hKSkWCHMxAQ1zFT9iL1YB",
  "key46": "62LvKMu2ohXzSoXseQzVDLqpePXNpbRs6iFZ4AKxiFhucWFqMRAyNTxbU1ViM741DKRjhajzwsgYP85Y5NpdRuzd"
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
