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
    "S52681pxBUgGd4HFXapMPBe9EwHk8wz4S8hN6VitLsoSypHtGt3oPzkcWgkhMzj7cvsnxLmVV5ZwDWd9hbGMpAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thXWZC6Y8Zbrp5XEU4V7BWxBJcdigz7T3jdRcp7SqAVSMrYiHr8hzisJMrEPhuTZzGLjUsEX21QxZtR1f4g1w9Y",
  "key1": "38LcnVhxRfy3T2Ln8R3TxoEUmvVcBJTeYVqyEASFggYbroVZXyeKZZ5WRGVV7pYq3vHY6F286uMoobDbB3Qr89wt",
  "key2": "281A2EayzAEDyimjKmNT653xqBCcX4rxKAdMsgTH2pK2CcteNUW7RR8vcGagFQiBwpHV7XpdLckctWmxtVAiUjuv",
  "key3": "cKTwtEoYBXevgLiuX2CeXeATPcDMZSsRr6dvGMnR3kPRoxZbk8QNPzyeB6T95EpJd5GqfMWGPJcvEPuYwdExn4Q",
  "key4": "5rEEy1X4Ab5T3qVUDPHAAa2GXqMJYgirexUyo1fbkqL9Qrsg5y1r9rWqYGjLToLpPbafZjb589MDYVHMditNxkev",
  "key5": "4uS36hdNKM9R43CMoXwveZfBYPEQygvhmJsqyJ7VYFdKE6CFzb3C62y36nTWs7ECzKF3M1TGVTo2yFAXDd3aRzij",
  "key6": "4BLPbjCJLiskjDqSyZ7EfnFv1VmoQmhMnDCb2ohs69oyvD4xHLejZHMZXESmHMR28p3qYZDrQyECvKCVML9S2ZbH",
  "key7": "3JMZBnqWyJ96L1gpxtLrad4b5dh4mqBMTVGa4GkYHnKsXK175WXfB1jcekmCyx81g2sU3H58jFEtogSRZ18Ya99G",
  "key8": "65rZhg8Hfpqhk8rSu9CRXf6tdpzH6me63MD7Xi6TudhHnFZvELSXFmyQBLTr41mLBf9mv9EHUr8vVaFQdBaUx61o",
  "key9": "5aTcnSDhBifDFfgjGromjQ5ghygnbsVJ7EJGDrCrmGSZTHFS7bWYeX2mQNykwGujKAyDXRmMkC7KF112DTfZYFH",
  "key10": "3QCpAvHLEvzevxqLNQJTENiaCxu8BgY8vhoQbss8SCaHVmV3hiQGp3bLo6rknXAftuhVDqFJpsFWZ4GFG9j6Y8vv",
  "key11": "3JoK744YZH6YAhWBWfv5mRPb9y9rwG3TZSbnTptCAsFYJ4C1umVE4WUPP6tUjr1BPNzfTyZAn2JjdSxVLfzWxjKt",
  "key12": "4fQxuzLrMf7V1EDqndUpf5bVLmoS716YksmkTHQKeQyJdH6tDKpTyKRaQxTNfU6EJETjBhqau4ajRvvf4RSiawsW",
  "key13": "3Vr6c4dLUEPPen3HynAEbEynKegaT5PiLM6TAvwkgHEF27DPHMwHi8wMZUTKCo1JboHQzm5yoa8hwN7Ak6PmX16H",
  "key14": "26Yx1wxxdKaGWkS38digx4qhQ6mBkL4bJjwyUuE7zssjEkCVf52i6aTX11CPZhGm7RAhUXyeCDrcuCpWmEkxeYm7",
  "key15": "5s9T73nmAzZXX5x6x5VWCRPHCmhgLPmkLW43ESypyZ6cqxJu6o3xu4wcuPW1cpbiKGXoKnfMfxvfvJmk2MQYTaHZ",
  "key16": "37qKUSg5k2oGSUJAgjFb9WwBzbd2cRWWxFGXPebsCKnn6K4Fypby8MBqxmD4FKr4gfnEfWNEBd6r9KiXPMu5fJse",
  "key17": "3f4CT993T2jCF4GVjSUEj8jF33cKWjeDdPHxr39vGFLeuRdmKctZc7PeAMR4NytpqSiwNps9tPrVuQkFKCiu3tyX",
  "key18": "5DFGRdTBCUPY2jw1jcvRbH5jBvCK84jgdVWHrijwe94LMDvwUchefmt4hGpmNhYz7kntwnRwkR8Efum1BoXj4A2L",
  "key19": "36wcSfoFdfBdEEjuGKf8FvNGr5dZDQrbmAizV8m42EyLY7yCe9yAToJquAaE2RbFAT7b6eCPZMC53QXpFpuMRDYM",
  "key20": "2knAnWdhETPwU5ZWnB79wU8UfS27dHmMCWvT6Qf8sgFckkv6e8XHegJX7JP7ULxujb9pKkbfe6RYUiDASncYJxjV",
  "key21": "5Hcwu1XUCmYJCGdnqTRLxyobe1d9rKMzgzZCJG1yzNpVuu5sHxhEeEyJBT7bH82bPQ9ZuEhaAPPijGCAaoeAXdVi",
  "key22": "5CfL9LH72Fb6sSgCzgW77XBqWAUr9EGQhuPyqU1XSm5CGGBvXHbrBk1X7ja5XombfFDSGcFbVKb2gBXpUBgxTE2y",
  "key23": "1RERDFnzv9zif8R8LoMjFHTHE9gHRpw3L6r3X2PKtndGDkLXcbLBpdg9k1To44BNtRDiz8h71NVdkXmJ2SHyVZF",
  "key24": "i2LAqCJPpyFxdeAP4wiRZG7LRwccZxqMJpc1zzPsTwiWg285kg5m6jdeNGzEu97kCgGXC9rUs2S1rKX1EP6L1P3",
  "key25": "61g5nSvSa7zuU3e4qjRKb3b2J6iNUysNxC7tKrcqzcdUcmChZy4dGEE7GYcc8ZEWkJyKvZXxrRRq2B45mShpLeGN",
  "key26": "4MdCvX9aKqj47vknmwJVMnUR9te5WpjCRyFj6Q6vbhM5QR3PiAQhvdnNze3dqiVNmHNL88TU3ZyZnueVaKJK8kAb",
  "key27": "21n2FcLESHMDemGbjCAk5WokyRjcY3d8jTar2TZHwGVWTX9PZvZL3uzAEUTJ9sWVkACx2FmJF8eh2bKkZxeB6SPW",
  "key28": "3SVQbDKySXbge3XXqVr6ME7ELhHuP1t1XQ1e5Yg3zzhB3WyxpsSCPo83hqY1Y6Cj6V8JkgxMNAPMLm8vx8rHKixY",
  "key29": "G6bSBsPGiJ4jCtqJsvsMHtMAq2SQUhXU8LKigLHCpHqJpyUvexoLgdLZBe1ymS5BPrBM6mUwLbHDCgVBWA1cPKa"
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
