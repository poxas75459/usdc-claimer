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
    "4BqBcfR4Yf4bCkmtDVQz9z63FyUuBvqs3zygrU56mQ8qFkFc8FBahtpkiERhzK6HuvusPfrqSczAAcT5WFHkvM5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJrexKcX9W5hX66UFrjM7VBYgdyoawSA1PaEEEBMaKYcyQU1siVisEK5dRrXuMmMrnuszWXtMFpRgDYgBBmFDRD",
  "key1": "fuhGHDNV495bPznTnPFfKfwZz39fKm61kDPu3YnbQN8EjeQmxck8bWFSfKtcR3BKJg6ZQg2imRUz3uTNQqTD48p",
  "key2": "5QbwukrvLxjZezrwQTdXi6RM5SEYgnH6gdRmtDfCWeCEMDj4rhnJ12Yzxyaaorudx7TCqTseofCXJAK8shcw7rAf",
  "key3": "439yxAztHcwzxYmoFSPGuTrVdVg2RoijUX9raNaeXZH911mVuTKAgfVah2VM14FZEbTRsUWxdXGZiLiGfVcgFTjc",
  "key4": "45ydaCNm5hyra6dq7ZM6b9AtX2iF11HWcRvvMQLNnrUKCUQ99D6d2XpE1hQT976jmLPxy66Uw4NHZUsShRWTCzvw",
  "key5": "51xUbbgRFDK3Y9tY1ZVGgRcnsoW6eVX8uoUBMcQsDFVVhnCGbduBrj2sziQ85c9adtfqRMXy5YZteJi99ZAjTn3c",
  "key6": "tW7wzXk64DMTfEHgp8ccMcRPvbuEBBd8pgJBq6afP4AWHwTeus2cyXbo7hJ5eJniyMBiceaL6Qx7ReWB7waRh24",
  "key7": "2s8Z16e85CriQxLSi2DwX1P6dWxGLFsfH2W3RLSBZRBdPJmSudfxKcBCC7PNvxZsDUWGyTZgEjMY4zsS3YFhSa17",
  "key8": "3mTqC8Ygpk9g7q1rarPhetv8FFaqSg6btgTnqx3G6z8poM8Pom3s2wdfEMVEyhMrfTAqBXLYmQESqtx9jENq3wMj",
  "key9": "61n2nfsBRoK54Z5SRBN52UdriuSHXvuxVKZ4YVj8sWZDiUmqyybxj8VVvGujVPjEzacYRb2o15YbMDLVSuDVakab",
  "key10": "cFi2uEGe7EnoZURcpWvWTXvoxcVtkrHTx9NdS3vAhLFqi6q2THx7oshBeeV93yhxNyjXKHENjd2PMJdr1X5Nggy",
  "key11": "4Az9dhBzpqNgont3kjs9mnuBjuTMfrPpTaSTvTF91RBZyfvfLDEP7nMAyt9BobBNyZVLV8vPq2EtrxFmtMn9YUwv",
  "key12": "AtJcfEAKy7Yn957oCQaKEnxxHo3tduWn9v1Z1iyDbc9ZY3XBuTBvmCYn6GqEPKMVJwx2EsCesyG93h1qHbwFaox",
  "key13": "5YCBem1aCRuQow8BPaemsH5VDvQ344t7BnoTMBmvTm6XjKYduTBhigFeda41JZwrwp74Tishygow8vwoFXRYPto6",
  "key14": "3BwcMTUM1esPhT7RuqDQyCuYoYmnpb1LauKmwD58mzrdBKHw8PHPgxdFUZTLFnVPg8wPBWC2fZXKvb1PVX3itgVR",
  "key15": "2GmsrHfQjjtD2y9VbGWwcKXZhHbKJVD7tPjXUTNhK2kAtWK82GbEVTajaoNDMHCz4ASACbbat4KR7w7wZQbcFDw9",
  "key16": "2C7B7ozU3V7VA1iTXxb9kMCfv8pwP5t7VCZrWcySDkBFLTnmxwiqmYL6fsXCCtenUfrcqvQAntWfC1bx3AaFbb9W",
  "key17": "2e78nAVzUfhvhc1u7ngWgQ8tMcrwQVHGSn6FGqdQUWQ3Smd5hCsZg9AhREFtw8nDorjiWm12KrU2gr65gVS6w2EH",
  "key18": "7WbWcAyCYeszkzG326tsGRsYC8nV6PZDxaqLtk9sh6NmRh5SSUt6JTGG4RhjFZ5RsEnjwjVncfXjj5aUGzg5jo3",
  "key19": "5bAbKdzRFaRMnuLHgMGU6PwYruyFpW9erFpdNvH6n6V6vUJbKMA7YeL3yf8fPxTqCUVjTUdqrBseCcLQxF5tPnxh",
  "key20": "5FAmbzLq4XiAWmRWcLjv7Ssw7JQNLQcM4f6seXBrQ8fNHurpn8miKKvfdn9j8oQv3YGVxBSkeDYE3tf9EvJqVrwt",
  "key21": "H1Gz7HLHkom3sxUmkKee1KGHDSUK3tNLw8frAFcFoyLPhQqU3VQe11YmjxFd46r7RZpzFvGVx4e19PZ6oHDGpGB",
  "key22": "4vvmvoFpvwqeLH1t7rrWRj2QwUykiEV93xMgoHPDXZbX1L2ae75Qz9AFGwNkBu7K52jrqgD9aGX4zTP3VJwoeocr",
  "key23": "46FkYjTrF7yGnJBWiiXYSc3T8i6SzCaykMha5DKDt7XhAwwTBgDXEXNKRTJHCdE2EYXsvRoMcnHVs1h6efB699qK",
  "key24": "3bkAW8V7pLoeYX7xTv1UDpKEXZXRyPM8LeuvFCJa4DtUiV9HaExGrJUnbVTa296Uv5LW3KEQU7P5vrGUrdfC7yZG",
  "key25": "478ghHWmkQc3qWPhvtgYWe8eiNMPZEP61Yg9UzrcM5Y2pN5iyeHQosdyDGLwMFUUjUgeQpvpoBhQMn7wubxGBu7B",
  "key26": "2DBKjAWQYRsgTCbapn4hAKcQPYfrSq2p3TxFAavpSL1SUX2oVu3HexmCAZ2rkmauSufZBVEz2mwKbz8X43EkKdw",
  "key27": "4aCmRoMqE2aDGXdw4MUW5R9CHNeqo8caa3aV2RjwPSvdUJpMdczwgL1tnGnytCPGd48i3zVMSSyk6rSqr2nNggU",
  "key28": "2dKFjbhQfP4wb9Gjy47BngnayK1KzcRYjZBnS2QcGicbCTCrZg6HhN35CqT9nLfjjxHXPaC68LQvCv4YW12WiLQk",
  "key29": "3Hj76LhkPo3uE6NCNGcqcSakzBtJ2LxAx6Uf9XBWLh12sKgY3zjef6ojYHy9aV7bRcZ6VYKh2nmS8RMwzLQZCAUa",
  "key30": "23y3RSaTdUzpcF1pLL6kUn8NdVWoV1P9gzdQbMwrhr1mDRQxYcPhsoFJqaA71o7UTvvcP9VsmLQPF7SER4ZEgjKR",
  "key31": "5wesycGfWRSkY8nomJCUQJBR6NGf1aggH4kSasLuPA5svQ2hgE2LdRkpXi9bwLb9ZXbaiyJCdadwsiEiVU89wr5d",
  "key32": "86rqGXJEuawWpuE7yf9sV8LsJ8vaLwNSYvb3yTaAMzj4YXULezQdoCwgm71VPe5YcuLAgNmSdKn4rmwfahtf4d4",
  "key33": "5X1VZPf2b8w6TcQzEjsCV276yApjxasdjVgEzj3egfPpEYUkMadEaKY779tg4QHs8PzxKW8zB5LFydMWYBroU4AR",
  "key34": "m3bVNf7knMqyRZe6YCxfZvbPumc5SduzerA7aXVQ1b5tvKNAqjZJMiQSy57V9op3ZXFBX8R1APuEGUfCsjJjpMs",
  "key35": "2N3AatjpJDJMheJ6r6VnUmBodM1J3JR4aH5kdrakfjUJAodYQ3awSFt5PaqwZUb9jT2m3p5LL1GSGgCQEqm2RL3H",
  "key36": "3TPx8EWzymr5rPgytnbKebpwmzysSLz9YkyikDR2XS9qy354okMd4tfo25qeFvKDiJwYkh2GSnBAunKkvCHmL7rG",
  "key37": "2h7uNGtohLCm9XVViTbUJj7nTMQbXXZWN7oG2VSqdrz82RbMRJLuXP86YbNqmvqgQioVj7F18ufs2oTawxpjJJ5y",
  "key38": "2LaAksJsepHDf2HW4NGaXmBiMRg6GAWzAkBoDzTij7imb6XyxywAgfWHzxfgDHSNA1Yuie5mijRbgjEjhxPd3zmQ"
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
