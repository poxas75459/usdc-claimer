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
    "Jdmc55oArfJFtv1iP7j6WrYtujkkFtMPkD5qNPC4C3p1D5kDdpfz42WCBaiTNVavTCqYDnxx1zzHiUui2LEDCdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKA3rLMkkHkyKuFubz3d78TWyA5gHmRdPx6ZpSYz7ZaFJBxfUNzGSBzXW8y2Utvtb6z5CZcBGr2mHpjw55Hyuhr",
  "key1": "45xH5ELWepnrzjQFMigMvwi28avK7rAc6sRGuQZWvUCBYD76Ya9oaN9hBskEb67ZDMDnn4VZJPvghtLuRGCtNxLU",
  "key2": "TKY8UwzPfiVJZ8VGdAvFxjyFJSWdFQKyhX1w3YBvWz7mbAuD7fGb74othsEy4VUEv6g28dUPNPDMs56gM8Xx2b2",
  "key3": "2CosNAXE5V6JL1HCtke18CHNY68miP2qD355gk1RBPqKDWzLFMbbLNUJYpkzcHm7YEdqMqXrQia24p3zuDv61Zk4",
  "key4": "2ARyonAkppAd7rkVhE5V2E1wTr9EwXp1SKYD83cac8q2ZcVAXZdjwNywEEvm7XmGy12P3u6bcu8Ekw2Raf9o5f7Z",
  "key5": "2eY6GCgwc6bZ4oYGFmAsYc8zFsrQFRjAejc2UUSqCXgaiMsP7QnsaJqAGRZjjC43PRNLiLWPPqgrtU7xXuaVECZa",
  "key6": "4KGKRJKjHWAGCv6RPZxEKm1h2BKswSLgQ8UtF158TKFFPCXhPvRgU65vg81wgF4d4pZLWq2XtbnDsoxQRph1z2wq",
  "key7": "58Hvxg22DhJu6gpBXGmksmvxNA6DnxxcXZo8B6ewwHCCs47tEE2mBhetk9zcuBJLz8cbzcssuG3uoExVKmguVPYZ",
  "key8": "2xA6Ktc6vgAbhW617tYHbgY3B4VV9ZgWTwoYUxRUvnyvHG5a7L9LdxkZv2RFRXjqzzsH62hu9mjz57XKtLRXriTQ",
  "key9": "2Xy1Gc5xbRW5Gs8zT79eYzy7FX5gwCF6DZ3TqSA7SXgy8QbUdB2Aqbz1Ai6rCy7rbXWEEehpgVCDPCDGRrrnswf3",
  "key10": "4PDUY52S9twE5fiYsk9VvYEC1b6va626fqVKTeDGs1A6Q5xdvBe52c5xGCThL2VeTuy73YAvSpDWFmtLSojwndJ8",
  "key11": "55jGqpJunGW8cowKqgxTxcQxiTih4dpUAo2YKqV6rcNogg597KMujvVrXxB24rKRTmKH8ab1b37e1QrjsVXBmxzF",
  "key12": "JZ24wzQ6KCL1p2asKSDRUq9ARneuhkKTsshVDC8pNGT8Ku4N6Epp58FEzDXPFHqN3yiSyovV7cG8SbLS1WQugwF",
  "key13": "uEmYyDLLRSvCZx5FhBadrNDgQtVoaLfGN49yHVwReuPzzGpxyjjyqv5vsEURTa863NXBSUhcHqwN34hvjgwuQh6",
  "key14": "5iRdtKtwd9UpB3LzzERYgRPjy7eRoQAhqjdLxh4rK1SAu9qx5F2MMvw4MpPPw8tfgEwHzVuE3a17pB2yD5neXnkd",
  "key15": "5XqXSLhsH6obqsW3ZVYfEubHTeQRTGJPZpNVXaREDS8LMa9qKozY5jEEMXs1w83wpVxRXcqovZUjP6k8867bVjps",
  "key16": "3f2GKkmdYBzUoex1fLWMBfUbVievoLu3X5SH46cAtSQeErfByhv3RvN1znpqv1vumYEZYTBeH9f54x2EJBMHYJEx",
  "key17": "5VpfUQbPwjhjcSKP9bYcQ2v7SXugZR72nbSBJJMFXAALzHRyx5XGVHzunyNYPDGTMmnciEYFhYGTa3X9nGoJ5qJV",
  "key18": "4iWdPuc41jRjkKN6mNu3citXBqXyksoy6J7qr9K4MvoAzsNcnW8wUT3NenFjVxJjhyEymPrpbdViAMGei6eu6yer",
  "key19": "45kHnFkuhqGN313z9npaZghXuMU82z35MMAEWfvgF9cpEFTAJARYxVW8w4b1nL5q2FLMTvPHJwiFhFRtfhHRCGgD",
  "key20": "31mhRHRxZbPryoYV2vNmDvFxisCV2vkG8gCXpsw3YYoA7kdd6dSunHZZkkzs8JLqxgu5reqmhaniuBDgEmcjg37q",
  "key21": "3rA74RfHEdrK5JoBAJskAjDzuGq2Hi5fw8DKuaZRKP5v6KzqrpeGsUiFm14yiTeckfABA135RErD8GpCyJT2Qdwo",
  "key22": "4HnyX6s8Bhh3xFfM9oEup5L31G22ZiHMDiV5MSbVbvmARFPCaDWkJQ1ZQkMqnuY5zD9D31Z5KEhvNGP39uDqcsJE",
  "key23": "2YcHEpRF2kZERF1puA35HWo6e1xjc18989VrYp1nasHtHvMvcEq8BtCAxh64APz3DQmr6dvYZsuBfyPgbVpsFev8",
  "key24": "5jLBWtGr8uvaiejnWvpAjGUWxHi1miUc5cuWowqfSDPmYzzCKq3knpaQg8hoFFm7UYkvcTKFQPdnyvCgbMsJ91WG",
  "key25": "3y4SN31ww41TfJ2JEUotuqss44tcdmyJzkLWYZnWxzcMQA4rrC7MTnAHYn11voXoWLb4mD7H7eydVCdvwdiwPbJd",
  "key26": "5xP7xnMgP5JQN7i6ciNTNJegM3WPXxSY3FnegC7ZvMDYh4b4SytweTc3niisFcVUpJ6bkMxGvrHnYCDrY63Bpesm",
  "key27": "63fCuigW9Z3kVPhZujWuvkw6ajtik15aRcdvA3rBkugSMUmhJeT3RCvhzcdphvkx3EzvEP3z8rmJ2NcWY15FFCAP",
  "key28": "3G2XnDmhwTqDqLmg4eag5CiGRtga2cMBHGUMw7mkPL7ms23sDZYAPY2osKQq4vKM1V5B7AjJPizacVEohAUiPPwJ",
  "key29": "3pX1q8G2UdB6BkdABjebfT351eBoZ59WufUeeig9B9hhPBWHrQCfzhn6KZNEKCg7pMzaKWjNWRKhBr6G3AYfxkX1",
  "key30": "5dnr8ThfprP8ffo8aSdLHMSfVycLgwjuoiqqtxPNqyTd127ajZVnAkfedjMCE2hLKa87GmsPmqDpLH9omfmVBqmM",
  "key31": "5YphXiu6Neam7KisxbRPSQdi3ybQftbbketqkUs6NsWFA9fAj29YTx25ismbPUqgdFcd6cbnFEsc7fsyQx3BzPbn",
  "key32": "4h6kX3dDcP6SkLC9PqPMe1MbP2yPSxpNRo9f1Qz5FbmGZbqiGGdX9mcVuUJdcWVg4uwEvyihPHWChyFoeYx2cy3B",
  "key33": "2GvGhnbbbdDHCHZ376AJScPwjKEkcjqSo7rnkbzovbwhYDhiCQENPrW8RAKNzxYyQZ2WfpGyd9DDzLPy28P5Jwxb",
  "key34": "2Yyo1gZ6rs78hjzgoHqjGQsxzeavGpS2TD95jvcyF8nTmysqZPRn7tmJ3tfJymzrqcexBrydYf9Tuq8XoYeSF9FL"
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
