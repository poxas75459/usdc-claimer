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
    "a2gxpyiYA3Hf8FTKdrqKBTx7ou4qmzAAY6DXKWYVCTV4FdoLVL3bt6MgA2buuZ8G8q8Wsk5ZMoEGqLXcD4ZLGeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njWM4XrLc9Dsyu3fBkWM6tYzvaighqTMMBF3coNSfFxytT9k3N1sfXaY1wPp8Y9ceaEgjgq7GVm6yZzNAsPFS7z",
  "key1": "3L49cXRq3pSQnEhw9f34pYnqBzu573HmauQChS7bcTP4ctgsTyTFnJeSojhac5iycyu6N3uM4uBcvebtAJjq3LGQ",
  "key2": "2AHG3SbSsUVnuqZEP78AEc4b1oyamM9pX71UsC52w2bpxvh7PAerb93Sekigb6DhXhorDuE4VWTVw9CQmD91rBA6",
  "key3": "4Bk7shrAKzZJuL4YAVLsz21g5pzJizg2TsqUKEFfctz1mFvxdBmKRcJstEPqoVszpQPrsupgfwmipx5UBYr7zTgk",
  "key4": "RULUpi9GFcbFbwMaMYSNRrzeTijJx6vbgFgcyVN4qYB43saVZpTD4wRRjmT1bPPrxWhLwzDcNHYGS5JVkJePovE",
  "key5": "223Fs2me9fTrHRBW7N7gi8UCRGj6P8oUYvuXvGZcmZCkegJFXFc7jZWSbosai9jxNMsAgNajQetqrj1dvd6efNCK",
  "key6": "4FpShPUbCcQKeQKXuseydwcGY5oWs6RU9P15VGkeuYXrWbFH5XjTiHuHTxfFMuupcEdaskTbmbmmv8mdkEryjd3W",
  "key7": "JQiJvNRscw7gUZ7gSyEuWxfgd4jD44p3p4Dv95diKXtfQ8By43ddyV5Vi3AoJD7ENRdGfsb8tJWARjv6RawvYZ3",
  "key8": "4yBibbskDHSLA7RStN3KSqknAFvNziWTBxZJnqrUXCJcQCVb88GCbGYjWmyb7RiNk7XhxATSStcWixKxeZNvtx5C",
  "key9": "3PXGnJ9KvE9MXzTYiFGDhvsMZTHpRgS8GYAPRhjiG9LWDQuHUqd2jPh7R9iDBsvGKC9pDBnp8UuQhmSi5yUyBWMN",
  "key10": "5PEZWbHPL3VNQipsUCgVuBTvwxDhHzFFHbBWdY9JGTimxQRngGL1NYJ57bai9FcxVRRTvrPX65w1ceXWSTh19Evp",
  "key11": "2kNK8baB5RZ2BjyCgBZxZr2Kt2s2XyLojFCFDQMomX2g7XQoGi8XmhdmYd6zZTtNSSxM5QPnMoSiCaGz6zS15axw",
  "key12": "4xpuADTWGHkaECXTGJKaYNQpypHsmZPELDy82iV1k9DSXcALfFYBNWMEjQvV4gzfKqLJLGvYDZBzgMTLdxNVCXTy",
  "key13": "4AXPLYn34LYdqAkEp26Wu9cKUptPSk6wW9ox5pzDMiTJD2e22RWWhPeHjsQz19AG5mdd77wCxX4aCVruoAkc7jPz",
  "key14": "yuMJbmYk85fWLjnSt1gwJzQDYWfg4vVsTJxUxE2uyY2e4qQK2EPqdonWbh9hFscqJ1coMbxpLQsj3h8utfeNMKK",
  "key15": "4QuVruLCk779pcFduMNvY2bPDUzZ6VYWUDo3sLe1EL5mDUc8Gv4x1FAJ8jZoL8gpxd4cCpZ8xwYFBiJZPBSJK93o",
  "key16": "3kxTCWVBPz5cg8GjBF2vy2xEQDSFxHizeF31pHdHfJSGGPJiYP1paM8AxJEcoMq9sJXBK9yctsPgRHL3zmC1GDr1",
  "key17": "5X1nXMjRm2Wcx3rSBWZhqsaKnryeXJFxGTwZP74hiRBh1dAtiQdXWFkKYtL254SSbE1nCJcjaYqr19pKDieWCjER",
  "key18": "3k2m8Qir97qi9YRuRBALJVa6EWBmQfjpojFYq7CXJKzpk2SgFV9xm4EhVCBXz6W3LVN4oRqVRmZBe8o8CuaW8HV9",
  "key19": "31ihihjHmQWgTHXaqr7XrS8tbufMgTnsCn39ZFB14Eteceji9Mah1ibcXuFVCSfvfTDNCMymaM9XZ4hFuWVSoHC8",
  "key20": "fdb91gQiDD7jtmNFRKaHK8zvfMxB1FztrTKBpCLiuKYMXw2HHGDruPgHjq6CN5u31AnmafZWR4FuiwvftRH4fDS",
  "key21": "4538AFn1Q64wYQXtNqDYDMTfkN1XcJagPnFHArVJnaLd2F6y5atRnUcDFW1XE13rSDjCYRr8hUpianbpKhvPfDJb",
  "key22": "U7mJ15ddz4jmJ4ktRVT7cieDf6TqPaAnCvG7nWc9wpY4z1sDztqruhPPTMiweWBHeZULgNyqAdTSFoBKnugrb2S",
  "key23": "542DMD1ME1echejgooeGLVwfjWpZpcJCCtXJydek35i6QMrK1JqReHjZYKKJhBgAdtDAtxmudEbU1tozhVFWWpf5",
  "key24": "zNcTiqcgdUXegWYumWNgE5bue1wBPZrExnZpSxu5jYUrm9fMrjLWEDBWBVFkC96gyerTESMP6D1f7XkXp1aA2jS",
  "key25": "2n8V5TM2honPiz6vb4gDaUVoY7dFkpXFWdeaXgRnxqUfDVft7NALi6QANSV9gSx3L1UgHtXwB288bnopY5pSdCbE",
  "key26": "3jZSr5VbbcEgmDjsfU8GGVarRFpPENokCtLr8rp8muYdFBp5f15LovUovpup6CJoL23YuSgmP5qLuKQjhMoiPBgo",
  "key27": "i2F1Phxd43XqtzZBHedQ66SEQwWoQRHFsPSBydJmJSafiGJXFgPbtkYpaqxUWQQLC9erAqGDG1mLQdSVfaguACj",
  "key28": "2HuX1wGtp6MheYKakArAXEU3Arnevh4tPmH72y5miN7eQMSKxiMVBiAGZLCHEYZ8DdAKgj1xtNtKN366f7THtR5P",
  "key29": "2MMmNK7HDEQ2RNP2BrcTzkGXe5ik9kxvfnxjxZfKiJ9XyqA2PS5KdfmWXDakdn3v2ihEvYGJWwzsHsk1BtEvcK1C",
  "key30": "iDBh98S3AZp1ditXb81Xhp6K4NWHrmoR5bXJxMHBkkMFVLebmfXRR3tCTMs1HzTRPhuuvbL3m6K7jVvbWY6BYzU",
  "key31": "32ngRLugEzs4SdBX3EihhkrR9vfuaBzz4q2TfmDBGvMxNt6E2KBXS3LrQqe9q1NbGcqWHxmmMBWPPeBjNefBxUFi",
  "key32": "2aX928bW6orCD7zy8xSkNwabSNnViRRq4q5cwWGtr5sdbwkpjVYaiCzX6fuH2mTY8H23iBqEVbQoQiP9jgHauGoV",
  "key33": "BAg6dcLrUAcNUqmnunFx7tAVjWqMHDtaxG5E31zFX4kvRHTPnMyX6Y5t5wCRPDSmAUCVHedH1Zw3T6fbzAK58jF",
  "key34": "4FLMd2gGiCW4VsEhTkA4SmnCAbH9hGPAMzJcx1AFB3hruLtiHJ4fKKc2HseoPfvy6bBhsdBnzcEmzsj149AEHgBc",
  "key35": "4uu3zAPfTQAP3EFATy4RSMjmhds7upvh9D9bSRRDhmVYLCxKZbEDF1NAPDBCKwCkQ1UELZpWqDEXoBdw2cCkeBVW",
  "key36": "566NcT7MBjVtahm1SNgpTMfERzx8Leg6iXsuKJ6UzhEMYAw8VwNfJf9FywJVzu96esxbiBTYdtWmBqK1SE2ToGSq",
  "key37": "525q6yZw57suvgTnZmW1ExKcTzaMPRvexY4oSR2C7bjd1PArsgSPN1YGuSCjJ4fe55mBopr2KV8oi82CVCk6MacT",
  "key38": "4Vjp31jLu3WhYjJBvz6Ln5ax8J36DSAtCGViw1s8U7QSg4eGnmnm3zK27eyxHzjYa5dfmoXQaJJqcDtBSRknvgug",
  "key39": "2jxB5rqXBU9aHpwW1ef34YZVHvH78SiuaCHEZxgGqPkWVVacLiMGhPDsjsT3Lfj4HFYeG39MmTJyo3ARdm76r4R9",
  "key40": "4JKVW7jXxjZy5DjujbC9pgcv34FzTEbnZkKLfy7ogBgYEKL5K1RQxzFCWZzWCJ2y31t23uvrDdQBJSUC74gaMBcG",
  "key41": "4hzeDXPZ8MXrau9haS8r7Rf1tbYgD5HRWWUJtb9BMsqWxQ3yTugne187NFBVQFfCtnrdFjo4bmrHVd9qv29EK6mz",
  "key42": "4bFAk32711MtpLp823nFpwCZ6Fuk7ifF1RjwrUQtTf8F71MTkyDyjRPmu3SyT4JwoCPdMiUuUtGagZ6mtTTekG4u",
  "key43": "5uKGUkY4t9qHFS9N87kPvVv2YB69vQi3MewEZe96MPKQVpMBCsWx4HRQSDHsZLp9TCh23Gjjsfu4yNt7jNvuiN4K"
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
