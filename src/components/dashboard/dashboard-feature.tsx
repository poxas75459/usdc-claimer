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
    "3myYVPb4cCd8BmRAD8uEMjZq17Q1nqEYwUuWKDSAbsNgY88PtKRmdw6mTPfRoGMWKUPMT7E5U2hT2mShLePbMrKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UbtQQeG1PZSPsdyi6MXxs8dCBqfNnrbhEVrbWEhKFVXRAzWTAuFBTRb1sATytFJQ2tATdebtuXMA2ELTVuF5Z2",
  "key1": "2Thn791co13hroyxBYVcWszgttg3gJCSUTdpZ8mrufuSiRrUXHnpRqqP5NV2VDUekqg28t9nVNBdXVL2BwKWAMpJ",
  "key2": "4n2FxSaa5WfZjknuNyVt2nJVTRwaijGjR6XhuDdue3JeZBrj3NKbdp3FMMrTXqkifakXQvCLYpCfJAHQBP2cKvxH",
  "key3": "54N5D7nXgLgnxuxYQMyxCGtQWScgX8JL93GYDmJF6gj8LXKc3QYeJVhpbf53aYmW558Na58WaKiwZnY6Lns1dQ4U",
  "key4": "238ijxwSX49kw3qprBvziLo4KyaRq2TF47pmwVwG4y5Y8TEShTCsVw1aJ7Eu3xFcw3y4G5e9WKaBRoxPom952bop",
  "key5": "5PJNi9cDk7zfmNgdf4o4McxcG4LEmzEmNp8Vh6ah9LXeHNbRDFsf58otjYzdHYWQAfcmXp56gkHtdEJUkwGVGMxz",
  "key6": "5stffAL5VNKinxPmimTcnrT3cXnnoWuKYiWJgrw6CQXgoY92o8KX5fwucWNWpmJSdSttMvL9EECc5iMmSKnn3cfu",
  "key7": "5troKXGNL3n9xouBTUyqPRB7Kgg2BspS5RtDwRw8Z7XDjfTYtePYm3SWi4JQDFVLBQ82FMwpzGsmPW7Hk2dDKopp",
  "key8": "2upMepZzJXgaAj1Lre6UNCzuYzygfvyp6KvRAW8ng8XcJ6euyCYLePActkjrQpvqNVBzakXQ5rRfeBo9mNgx3fxy",
  "key9": "HS4HCkWwhPscKvCKY1D2eLMZULiRM7FtPUZjwmTJZetwTyQabLmAjrfs4PQUgRozsPRrvJgXDBFCuDzty1tXo5t",
  "key10": "9gks8pkQHtQN7T69DHJ2jsoLyi4qVFJSCc9bhHTFRd8s9vYL28iK5E8HvHzdbsDKtbKDNdkSM5DXqEjLGq3uyBk",
  "key11": "4hxgGeQeMWMYsyEHRp4r2m4VTLWAKNb7DNziSg1XXGuvg8YD8zZemW771Jn1ABgkZGpxExFw7Rr6guY698ouoxwq",
  "key12": "ant4NXnn29FHAL6wWie6Xhmyiu5rpn4DNERH2A9yNTe7mcFzc5VVrkt3kz6ZMUxndXKzDVLkXJ43pzHBwp1WZ5R",
  "key13": "55WTCETeqPcTgDZ4iRoH4MkUWCms7JMrXG98nLwmLmmxn2JEEPp2pMTr5xvA98oZoTrCH2BpSvemcKjbeJgE2uAD",
  "key14": "42J1ggubL7Z14TTJDAWrHPaATbwojinRqnCgcQxeLUSqFUTtDhN362tEnMsgTJdhyGudCGPAw8VzuspL5y5w9HFj",
  "key15": "5zfajpSxd22G1jijgsTPYEoZaLqmxy33m95EubMhhgyyQNmDEKLWpTnQ6vLzdHM8nky1Kvuo8WPqhchQd5ox4PpK",
  "key16": "3VFVofzc5vrJczkWRLgLGQHC6bQwhwybEaRMWBNy26e3mMiBpvQagGVJbtCpvad8i2VAwT8UQ5TPKYhTk1ZzU8hN",
  "key17": "3vM3SGDhw6MuYNUnFv9DmTNfCs43NKXkHBb3sz4v6sj9J4s5AGo6LV5Ni6aKgVHFVutEykza6dM24X263gvXEY52",
  "key18": "5DbkzFFGJqgAsELHYMxpbpefNXY62fEwSd8W39M4wqzTaFsEMG4D3vC7kUZQUH2BcKtpswgNb5p3y22f4jwrM8f6",
  "key19": "51yPsaVB2VpxARqoHeZNY3e8oRKUB9U7ogYYbS6WdvBhfMKaGo67EATYA7Q3yjd3RHnthsbaUxRcBYQP9sd8HJyY",
  "key20": "46G8fzu216dxgrhjg8dbr5s6qCqGMwapkM2BQLhAqPc5GJ6MobZ5Rk6QJazfDYHhgaJ4yLFdbDJHiNVF4XZqo6Yj",
  "key21": "3Vwue4PvSCvxE28jA3vAKNRSpuLKJFABGSjZmK69czw543ZgMSNypEBDmTHDc885s9VnxmmJMGAyfyJecgmz4MZF",
  "key22": "gohYRGhYe3ZnorK8DhYT9JapfkE8qnsaB7vkwgLmSn9MAFj1QL21bAEUacMiQG66iaFJVnxMy3VbEjnA3dKdhEJ",
  "key23": "kSM6PU57RJxi3LBADtXs6jCb4i6ddeeiPdzgM8M4DtG7SRwNXqAaDhv43CMQu1cgWKrBpQ1GTT2mBBndtDVRDQ1",
  "key24": "vuGUehNF6Vv6xsMjNdZDUdhkqy1No5h3EBuzneeVSd73TxuGGpz7hoJEbU5pebvp5Adk59N9WxwaZViELia6NgN",
  "key25": "pWQCcuedxpYLVk8Mg8Dm7zDdp7qNbaLGEdp9hUDabu6REMdcuzqpmWdchatnPzRZ26BNjk3gFH4crDyB8eT9v73",
  "key26": "5RHuCyA2bNNFTknwbdFvism9J3Z1QgZwpUkVqY6DRBjJ7d8i6iyzGpK8Zcybna9cCk738cwGeAAAnw8CMDSXzoed",
  "key27": "3ogL33Fs2DdYgbikYxAcbYjXdb16sLCHuXaMjRWoCPvJ3cGUjJshBS3HmXQf9gk3WXFPmvkneqkGRxDKRceXNV4H",
  "key28": "3tyvQfbTucAMkpj7cL3SBc7kSe6ZBQ1KFrNSSGm6hs94NScHmBDNgiZADcgydRqY6jUFQyTGhFNTdULAMC8ChsSq",
  "key29": "5ytkxGAxa3DphTwYGAood86Est96zPztu2vswYYRuLZdRe94EvJreXhdpF7mKvG8jxB9HW9Hra8PS9CoRBnFWKgr",
  "key30": "51MoJp5Fn8Dx5PqMkYoSq9S5P1SjG38MnLMFg2QVE1cCQoyvGHQyijQtszLQFJ6PWXsLmYKdnsUqRTnxazWKCUtL",
  "key31": "4zdQ7mg4YkrP7SHdFnzjGnr31wGLEPwZ7oc3FQpkf6qCLzimS22ZNXQd4sCdhT2QZaSRRJDkf36BctJ7G9R2A3VB",
  "key32": "sUEtWYzDxiw2p6KwAGwi9jk3RUsrPGqcmyRZVPwXh1GQthjsCF9nUzr9QneuVe97N9nQVb8Mcyv7WC6kyg9Qyvg",
  "key33": "3Qcicp92wHerrywd2SiP2zHq35bCz2mccTd3NDM378Up6rwoQdiuuiiSE8A6JZS5QXKzwdKFhcDygMF2yE4QPsPq",
  "key34": "2yZcJ6X8z23QkQCL7TnaWAAh85ydpM3aTjZ34fCXmc8xMBKFP4hHMQ7HnxaAkydN8xnH5gHw7yTUbNGdKVtHZup7",
  "key35": "3rRBS8PzQ97ae9mysBTi65PM2Aa3Bk7s15zGwTfsCxLf9aYHpN2QMJWAtF62F1qQdVwGxR7h8CFKLzGDJ85VgSix",
  "key36": "uGsxAENz9R4kHH363crLw253kZgqS43jRZGs6E8LibfgBECBXUq1ZVSzV8jxbxVdfqtRoygoWE19SCZdEdVUgmW",
  "key37": "64R67wgKohXCTNbtWvgVHXofasbb5JJGmbuFT6gr4bz1HerA63CMHdU8W7NDC8BtBNZui2bU2HERxrAH9Cz1ZZ5x",
  "key38": "2y6ra7XgJYMTGKfCsDPsxZcDsYD871RL5VsKBW8Jsinq1NUENE7AW7WEZNpxcyFksWbCaGDZsNtpceate38caHW8",
  "key39": "2qTBRpQrD17D7LhEA3HqCsUoSW6AwkM1e4wKBuHeA6sFrifWgfsxuVoJxoseiWFY4YbSxifvqPib6VpnFcmy3GBU",
  "key40": "ESoFmg7ca1KkwDyu3nE3imxxE8HjjcizmSRDQKssCUkBfGnyEBSC9i4oRgtvZxgag1d9GAgnXwBBrjpQBNEWcaK",
  "key41": "8GXmm93sAq1K68KutNXVMTLHkZf3oTnbwE3moUT6PE1paWaPHwvb41cxuNf1M5cTXeDAjGWe8GCiAejt1qnTDJ9",
  "key42": "47kF8RvtiY72c7ADcS9GSkBaYKr36dd6Tu4yMXHZFwU71UdRNRZKtNEyxrVbSpb8prQFEBFNJaFWyrEfjWt3ZnmJ"
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
