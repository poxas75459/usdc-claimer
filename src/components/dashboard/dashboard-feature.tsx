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
    "3L3HE9UymTBhZuugLMwh3aJqFPX2afMnLn3ppYLhk49qjbqZ4ECWGY1Hm4SwXX3FgFGAca3zNJMUP14sqVR68xFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJtjWUyUxBfxF1tfp49P9Z1JtyKs7pBf3s1ziXA97PXKzgACQ8vGG6rp5EadkhbHf6EdvSq8t3D1doEVyRjFsqe",
  "key1": "5Yi5fUAn1a1owZb6HVNPFNdDDN1qhhdBBgzypeLVxVPz8DoZgwU6tLLRbPB71YTMYiHAfKBkMjdMqV2VYdRBkHL7",
  "key2": "5Ux39FBkfcPw4LK5MfAG9Yg1s88ZbjnnHW6J1agRjYQYFQz1UHs6nWDwJrVRjm4bN8VjU6HsGXDbpB48xz1x3L8E",
  "key3": "2eKSUYMpjBAagx4VCGrf62WKk23CUvhNR7TwKN89Nm4dvMRqtak2FkoCHR7ECtcDNVQDVoWTHeA83f2e5aZmNWRd",
  "key4": "3HLPqVoLEQ12eQXAYhf1xEA19VDYUXUpbERTxnwSc3vi41S2MgwfnyASvNYBBYP7T3cgaDJyPRb57rVkgRYixscT",
  "key5": "3S1xYxr2FrAB6iXsW3XyrMBAgdBzp9YukZgqreg6Hg41kk63a3Tobhy8Wcq2Gwu2hdfr5Wy5eHz5zBTKUqZxcgtn",
  "key6": "2c8rwxB47bDkWikQ1KuUzZcPvTpPg57qGPXaTKjxLVNVB6sQutwh311WV5mL48QFEAm8eWd3cyakT9EQGCTWWep8",
  "key7": "3hVuwmF1ZZZ9ajzfZ5ZHhbctXZrPvwwZJNcdsnTo5GfYubxf9VQ7CraKaUpgDD6at6Tv92ePYpuJC8QNKKVatHqJ",
  "key8": "4fKrFPrV2Ss3BjTLzG8ATmzy3JfVdfjxsbUZenomDrEVBbw6iw49NNnHjZKjD21F44gDJ2sAXeomWbJDAetxFAr",
  "key9": "2cGY6QEgXKf5iBtyMgxsYmfXMaNR8tRz2zpZq9kVf8bWiZHyKTy6X9RJYCeXqrDtaos3rHyqLcT7MJNQqnbWN12M",
  "key10": "2Lo37gKAB1mxyJsR5fFF2Cj7GFJDqJ4k9wBaSzyMDBZ4TycFd86txkPMH4HysW5T8ecDeNVVUF1qWgti4RCxaA2j",
  "key11": "2pE7xCtjwgWGgicbKN4tBowWueXUhnfBeUnFsMWwLFU6hBgrtBhirdRdXCc8hxW43hSdthfhVAZvzKfYsJoezDzd",
  "key12": "2x22ktM1JnzhnB1JhmcPdKNGW4DMCymmDxiavxzbsfPKy1NYn1CC1Vh7fGQ3yFf1cAynmAYHkGTqa76i6o2ikgfB",
  "key13": "2s5j1gS59m9GE72kdA5pcNDLPBqFaqFM9hrsLLPd53XFcmGPncKgYsHjrJQEBKsA5q62XFGNWi7gYVeifURbu3Vk",
  "key14": "2SQxLAXvG5QDuhRr76JcSmPktHvtpBxW8HbVpL9jhg5bveA85eZJa6boGaHosbEj6mhGTpj5TGPR2zA4nmmuan1w",
  "key15": "84ARCPi96LgGkS4r7JAw53CghNVLRBi8BWYRCMk5FMosXtR6oVVcyAd6j9qZgiVf5A2cznZCvfz3FGSrySB7Sho",
  "key16": "3FKeE2cv8QyHDp8mX17mKPzaxczW8aWxfMwx59LdmYVGp4JQ4Fm6uy54JD9sS6YKRQeE46EXGP3wTn2Q4nH4z4Z6",
  "key17": "QaqtrXUFMi4knBsQsEJmCh7nXrzDfy6YfiwuC9rHXaPQymuaax45KNet38mviCdCcEHxemfdvtAKhHiXVnABabM",
  "key18": "31D9bPm7B6QBVDMgpp1nNr92wwXT96gu8nY7wTxrf2zBvEViWq84Y7FJ9Q2DX3RyLAutsyNJjHN2mFF7BqwtdV4N",
  "key19": "5SyFJZN8P2TxUg96ohtTdo6JwzFVvjDadSdfXWLNw2x3gWnNtc3Mvtq9qm9dJAz4qVnGDRGPTZP5FFWk7Bn4pv3",
  "key20": "3yAssJ43BPZsS2S3wXvXHgUqJWydxGeowjp5e1QX2KMv54UtsYiPSWHx8EqS6Gokk4YcTUAVQLq9kx2sYNCJdRLB",
  "key21": "5MgLjJ632g9ofXMjws1SXX7iGW29eaySuZzHXR4qUD43EenfSMWZW3ig1XVp5s9SFuLMEnbVH2BrRWHxvWgAL7CS",
  "key22": "4BTFxfKGTezFJSHWp5vqL7K5MjiCxVJtEgWFrxjZyagSeV9YxyjnJicknwFi1st2hbQHHBhbXg3BDpiEK3KEw7DA",
  "key23": "55xCp5Ggcxdqxg8u7o8adGanErB3EAofL5rL7tGKTEt95o39uyrsoWPpfCptg3wtYD1tXnCyTZK5YFrx2ekYTF71",
  "key24": "2QdgLunmZwaPfqJaAmR7o8NfbH6d2iFVi9wtHUrbxk1inNk7xkSZ5EXaK3QhgHWhrGPUJ15mEftRHCMJFBUPeLJD",
  "key25": "2Q6GfbuMgdCaTFTjhoEHuBqPD13XN4MCWmraaKobtnfkidQ6vXUCC4LdA4sLLG9HDdgAxnM1Wrv1Ybp1H1vgajBe",
  "key26": "VNPbURtLsKBA6P8oAppfqTSiphLPf53DrvN4FC7dMqfQ8ufFhsjGNxZVBYKAbzHHfRowp8L9W5tEh1igKkRTNLR",
  "key27": "3huxidznhwn9dYxq1pRed89RjB7KpF19sPjcUExZf3GjBfndFZ4J2vc2kEh8EEHqJ3ALzrcMkieNvCnef1gFysUJ",
  "key28": "5ieJ53gf2kmos5jcHmxpvnP2Cbb51zmYG4KFW6dxGZTPECT9anqPb1daMghiSEvJJwYSbVgoDVys2jCbfTuio795",
  "key29": "23mjJFaQGcbaouiVp1WCnVwtVYyeP9XVbS9o8baVi5Bwq9YTcA58eE51WbkS98Tu7NUDm8XFUBSJ82vtBnjwYsLE",
  "key30": "2N4kyBc32QAmVAvxwkVBJvwzHGWbK7bv43d4i3WZJ9iX6RQPtTcm1UsL3zUG9NRSWzvb4vAU1Ew8NsAaKZfQ2kKw",
  "key31": "2T56vP17JvysH3sTP7Ske5KHj67nynd1vTXXXyYtB3oL3QWyD7NXXepQus7r4aArDUJGEffSGgMDXLjv4YErKETZ",
  "key32": "2FZCrkPjR13e5KjLnmXkbzhtHMXFGK4K4K8ckjEzdxic1gEeRM2YNYc1qbhg6Pe3PmKmfzUy965w2eP7qbV9oxN3",
  "key33": "2LJmxTM8Xx52ycZCnferVzCzNssfi8eeCkYtetM5v2L65i2HfLrN4QMr2ZLBRKa82sJuo9SaJFy3Cc1JqnZZ5iZj",
  "key34": "5pyvpVLbMDVkyecvKn94NTjykK5CdPzYXDRyTQUjkhQhQUZ3qzWqD6uDBTDmMSxd88uEikb7KeAtAeJsKtdfSfPa",
  "key35": "2H37VVxF5VAN6eq7rsPNri4WukvSJdib7qgfYPJ776Ljt29uRdDWueUZ8Zy1c6RGc5iXaGggjExsLEvkQxNmfJsC",
  "key36": "3Nhq72mZq1AusLAkmgDFfkUnMXDNURz4ehhhzaHeJeEW6Em3gt6K2cJKCEE31R5FxQkpseeMMD6jU2B7DSkhwvQ3"
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
