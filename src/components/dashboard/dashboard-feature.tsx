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
    "4nty39tdgsNnr5d5wVNj8rrA1KpMyfJeWfYdEyAZWzSN3ixGhWUnAj4EVWuECNTb2bm7JP8Aa6CJGGamsXAyXpiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FfBdSCG4GcBzcrtndQUaZ6RkRPivqb4WwhmAtKMy3i6YRB2cFUmxXP1cKeD4Uffq18x1wk6vmPxHWa1y5qC1CFT",
  "key1": "bbeUFFfJ2UkBksB3a8sSgWrfF5NN9RxVqxAMfPrn19b1hPpGsjTe9FcjgBup5nErmPcS4M3qwHqxPoFm95spoPq",
  "key2": "5bep8stjakkD87FBVsoi6iNHTLQsNnmghZxqBepEQr8CBHuRAFdNAxLwotab5Pwkn7tvV9DgEtum2RdwsvJfyEeC",
  "key3": "n31kdotYcyTfGbixWnmnTL4E3pTj67qgp3CsKp38EWRtcnXFPmcGKpLNKxP59uZT14WGT5RNT1oAAnJKSGqMgRB",
  "key4": "4Z1ZPfUsX2T31djy6iBL6qpHtPb22jzfXcfDqvsCijreDydC8KaBSQZMArsosqxEa3LwrLNjBhevkRkdEJB6Pqkx",
  "key5": "2Nekx26HLJ7p3vDxJPM2VMPgs5ovVt3abw6PberBQDyGMZosbS2iSLZxfttviq48wL6DBmtVHmwXoFcbv5VJjmbS",
  "key6": "gacfc9f5DRFzd1jVGcLKk8xyGur2YD6muBAACmkgTkD6p6UZQhpfdYhjQFJTcNu9m6q4hhHHRSoQTxybZ45TMUk",
  "key7": "5HBfiXqktje9eJzopzf3NJeyjvJRBabYpckUzmeTzorVPgvdQvLDghVXZz7RF1FRJQ4PdxKSVcDvDL2qwsQpeSnH",
  "key8": "5S1KMmhJjocARP2GxNPdc72cCyCjBZhpi9CXeX2F2qN4wcFcyBUFAmPsq1d6i3nbvChTc4w8V2mJ7qzjLhUAHPmt",
  "key9": "2dxQ9qWDWYMgWL4NsK7r7fpGQmppc5Jn8T1apxhQSbPgzBU23JvTFJZBWTSQvPEhuq7JSMEtq8LFnxzNRwaSDEdS",
  "key10": "3smtq11BUseTSXFFBatz1QbzxpXoFHfhhpMrdZT8Em5mT1xFqBm5webCwbL8sz8JnLGjWrJ4NzHZFJnp8ChJw5kz",
  "key11": "NSJDH53RgfEC7Y1iJK3nJ3SXfzdbjUWYZpRQbyToB6HAQJZkFJtQgPfEfApj22iMTbbim9brLDconndkwzrdJ6n",
  "key12": "22S3tMNUwZmhFeQpGry8LD4AGYJ24voCfHFNJLPxagFt5skAzg5dG2XKqSCufbAhmnVpgMJzJKi6ARyaCDmtnQtB",
  "key13": "4SdvsxVLPnXKCMUVDkTtBQ4nwEwiLbhP5RvHxdX5PLLP7ciEH7ejUDChmUbdF9fzSKSFWh6yYqSkEp7HRt2imoQo",
  "key14": "HzYz6wtbrx3DY9WwgEHessgiE1CYiAK5QnhPivdjpZjRdsvRcYo2M1wqXFK8LwzR3NdnduGru73WnV98EdrEam6",
  "key15": "3td5buEAXE88S5iBUU3V5rdRk6WUHa3uPeiLnXQiAx3ggtmmyaqg9pr8Mj7gvwsDc7wypXfNJSQp44AFxKmYWWVA",
  "key16": "5obLMjcWNPkLtvH3GuMiKLF4cT76RdRw3aQ7ZZzKHy6vTU1VGMcPkYQSfAKewLPHa6Xu1YBnWhLUoSix67UCCoVx",
  "key17": "3Ke7DQKAAdLByypwXTd3aANLwAbLC63bogFSzSGTm57ecVEe8DYxJcuNELFgB9pUgAu3v7PPCyjxiE3FwM3NMRYK",
  "key18": "2kErkLXPER3GvRrgEkHvzS3C4pdnP5MXgiFcM7ESgbXGwZxMJYJBvFrqDMkeFBjRBUpq4QFwErpEXB5hZkeNXoCB",
  "key19": "26dPNQ7we89eNgVbsB1iPoT1neXzXo5rZV6buhpNvC6wXdSWd5LqbudnwqAEehv5bt2rc532Zo7k8yqKyWym3vZL",
  "key20": "4d5QHWCywUUoGDQEvBMGY7inp1xdJcYxws3ZEXrUZFxsQcDr1itziuiDxu8914W3fimLgJxHH75x3UErayTJKN8Q",
  "key21": "CK4gtUhMLDwpPFtfrJqfCbFHTr3wZmbQG5LVJnSJWA775FoZ5wAgwWfupjUwTeuYiiZJVgmrGVHtbfaEujfkkmQ",
  "key22": "LD4qRepKHwxwRXgZLFyzFWRdEs2gJzdG3xBRJqGSenj7k1pvgSLork5Ze77ShnR47udBXdf4QrGCxq4KcGNxviy",
  "key23": "9DDfCsuVjyQsrdxvRjk6nUjBByV8gWQ4VBztQQFWLMqNZUiFJ7ceeeNBB7jFwoUEP1z5agdpCfoZRtGBQphUiat",
  "key24": "4QE2mvNh6QSontB2h2GHCMs2YEjrcuPGRCiHeuxEN2RdEMJfXR6TSQwWJfLXd4K8RxscGvJQ2NkdYTZxAM9KVVCB",
  "key25": "5MPodszJopCE2uPN4RwUHJJFGmj85PEbugdwnmp7yUPbQEKLEjJiWxr31wZFHfv2UXVTR5iJ867BtdSZ4XStgM99",
  "key26": "3NqQixqk17j8zGmkV4x48LKPH6Y6jAzXDt9gHf3PkSD9vsueDqewEF6gD3T4sqDiWNupU69xxup86f1P6os4dP2J",
  "key27": "sVjcdFo1Pr9zyK96F5T3AuGgMFCx2C58AHHNxXNzKL6zPHNd6yiweh7ZGw5Bn8Pr7snCgsnAwVUMycT3mkRG6mQ",
  "key28": "3zmkAhtHMegEmH9Huf8sxyymJymydA7NTxAAMP1GJK5n4ZipiHyVmbmjvMk6jjesBaa9oF7PyE5JzrMjvXXyVSX4",
  "key29": "8qzURYK5uTtZpW2kSix8zsRJMART6TM3HcvbMDhrdGtfY3u7XzhBkmUm2M6vLRZm6UjbBRFTJuYTQjjPG1cgYJR",
  "key30": "4SDaTou532kf1fJDWFBd954m9n6jC48k3NERyGrgi7SPcQJzeb4VYd1UV3Pusi2d1cdok56drLSbsrBmxzyXjna",
  "key31": "58xSmgXnPJKi75TCB2LJWvnev9ozGCo4tNrn4nGyQKN4gnVhJkDrp5QH51FQvYFJjuGpKonXZY5wTGpBv1qUxQmA",
  "key32": "2iuPG2kF9mYXgEXPtYA5XPahvdK3Z8HKB6G5sfwbVLqRZ1HE2cvgai1VsgYsAUqvx9aiJQxN8G41dC5TaMrue4jR",
  "key33": "5EXXmTmSCLmv29veWGTt1R7cqrvcNEyCVmEa8bw2CQicziK8t7x1vhrKkjMZxTcQaxTF3CuswM2wcXibNnoqL4Rh",
  "key34": "2mfLxcQ4c32d5sNk3yrmvhsMJfMrs9mHHVmPbHgJnFujCnwUamRypoo6suwPmw8rpXgYUZ8KL5vy6LXStsNajHRa",
  "key35": "4ojJNPFbZW6AtzX3UdLoMJkeXXytRzGuGnG8mLAtgnb9pzRHyW1iGWmeQP59u3t9uyBJcysVohVMKpW1sxpRArxG",
  "key36": "dXLTcwK4ZLKhhHciVv19ezucCpQLZ4s9DYEha93d6JqaCQP1PFUcXCDYL1YCYPMTvKYJG9EGuqmZ6meaMrxrP2K",
  "key37": "3tdymv7n1Fj8Dq8oqoi1SVK5cCAtiPtXDn74TaB4nWg9Tmziu8BMt9A4351BfBff2Z7bk7ueyjQfteUoEmEAQqYK",
  "key38": "3FiWYdSMAymCSw4o9iK89Kn4UFKGbwN8P6sBPXM3UDNqtrrd2fvYLmyHvGGSaj4obGLD5y7oGx1z2YMZG28bSBHY",
  "key39": "42dDgeypGgYHAGomC8qBJZZgPgt5iqp5qUpvaowPNanZiL2BDHbBCKQm7Bpi7ZuHTJ2GSbL5gm1cDcWT7isPX3rs"
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
