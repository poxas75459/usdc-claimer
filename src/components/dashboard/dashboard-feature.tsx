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
    "34DsxEr5W5bDM8SQtvmQuSvPY3CHeVfFgQ8A6Zy59ruSKYShZYbR3ofV6bZfjD6X2rN4du4kTx6MtEC6Hd91SG9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vg5ZepeS6gR8Nh4KZ2HU4v1LJ1eLhFYjkw3EGkxyxKM7KNMDHKrmMcoyCjuJHJgjgxtLpf4nk8XSMzBRR82qhA5",
  "key1": "2SYa9H574X9yTnFzEGk4S6A7jKhm9MgHVZEVdLL1akdsVZnbNHyXY2qbp3XiHsxkrKXagiZxjQkBJd2UsvQhy2Lt",
  "key2": "gsPNYeLftu1yeuatyoKUC1XSoaKRimhEjXRDPiBx8FQyqxXbcqpzhAYPYTUPMLRNbV1UFG7apCZS7bUAmYVUwCY",
  "key3": "2P5Z4sHzeVJePSbGtTvZkgiuZfJyjc7BNY47b4UNx72UwthzNwBUUYbhcBFizJUbmNi2c4Rx6W53hikxQFoJ9JHX",
  "key4": "2V4axg6gKsikFswTy8CTWtb4Hm7kxTfUSe9a4PKAhdigrDUCBQXr7Q9s4jhGnnaT5hJeQdmoDT23yERF1rbmtVcR",
  "key5": "5QRoGxeHpXoxWKL82CYvLRniRS8BVVMxRfEKPCcSV4pWeAk49uCUMnuDUqiaS63DZQQzy9oWBCGPRLpBdXw5roGH",
  "key6": "42PXjyxWXZtB6NzvhvFbzgUSq6PQ2iXgmDmBvsnYbsZBV8R9bLuvyusGAFXrjqM1rH23HpzaPfWDPPwUdVqnWufp",
  "key7": "cR68ywaHbRerq3uK96832Ec5WVEEadGYav9VpoBnMt33pABpXPLMEyDGo2MNvqVSBWiQj8hKsgrgt2B9dm5TU4u",
  "key8": "4MQCqPsvQ8GF6ARo6jGaVTJDuoupnxC2gjdcJWCGtHqh9Hk3HG7m8TRSzrwn8gTHTcVEtgr1QjRppmaeVP11KuiR",
  "key9": "4RjV1sktnnfD5bT7LM8FtndwGCzGJnffXznohFzkhFcsYZggfXPBZJvYA3mBfsqSSHaMPjfvuvgc533QMBcVPPkJ",
  "key10": "4Cr9jTb2Tt8C3tq9jMfTW6LnAFLVjXtEsGFADyP6aHe14jb7cx4jQegDUnyEWRBfKEyqbmYN1VoL2VhTkdJN9xTc",
  "key11": "3mzbk8PQwoXzAp722GPSPoPwdjq5o2u24dhakAVgV92iBsp5Jf2XpPKsvYd2da31xojhFbGEszAdwGvkoK3JGgNH",
  "key12": "4Zh4i7iKgmJ3kkd1gAe7QhPvS8wnV1SUp8CQgUJ2T9K1zoHtZ5pHcPhoW5AkS16WM9qe4rNVqww9rTTjqruky4kj",
  "key13": "36crA1x83p3WYheLkAsf89GQTZhNNGP1JFqqrJsaP37UqGvWxsPe3yMqSiqp74K61wCRfKQL19J6ZkCcDQeVVWNy",
  "key14": "2SWgmg1znyckkhTsWceJS2xhW67TkfSGtWZmtWdd67dmn8o1wPprTAyCgJvPNwx5cPcrZYQHTHnQNVx8s9nSTbVe",
  "key15": "4jpCA3UrPoMVGz6jT5HsP1k5sEDNfhfRN2WqUH3xvoH9i7FaAhBJiFkG4zD2NhMxPrxuEk1sjN4AdXVU8KXu7iVY",
  "key16": "3dMRwsrPtiviTh8P7SQB8XKidY8jfmpys2frndAUtp5AmMaQw9THw41T3ikHNsLHQ4JSqpHrAFkrbazuY1gLMFY7",
  "key17": "5CietsmbWiYMSzbN4owLCoHUKavjqHebnQ1Mt6yW9Qh5ugQiGmfcAM7qQBJqYJPSUkyf7HuUs9jY9raHVL3ALjgi",
  "key18": "3cGu2U7fjW8bGyLuTAELEaf7d7KvhPK8ABnvocVgKdo9G2m6LUh5aFr7yA3aXMXghu8oDoeDsZfjwMoLPunPo4tL",
  "key19": "4o9mGQZwdTVSoRPFd5VyanBR34qiD7VyaAhFjwUNqk54gTjZ7vVCV9x7BrXuiwH9MAx9A3HAbM4qoCGNZiGJAbUX",
  "key20": "3HEY1TY9t7rcP4UZDJUyoXdc15gS6DGEfZQWfKqSDaw4ooSZYcVXmhNEWDgA5stgrWqHhLN8z8a8h1iLdsDoWpF",
  "key21": "zo4jmwBJtxxmw8aA7TxYP3ZtfvCyumarZ1TYxmy1YyBZj8GkHPfAyNBQzAtH3cjC8DzAxECXpA7aQDa78Gpepsi",
  "key22": "63XSLiKWGfkFHo3rG9Q6jWMcCNVJSubpSqUyaWneboLzdT7MZ555sA7sjnWWgHsDiZvoAWPF3K5RA9NvNZSS1JBB",
  "key23": "3aK5UuBB3f1K1JUkei3cNKqRR3hN5FPJ6RKNyAjBTiAuAZPoSNY7zqkSVujDsJYS1hbtJNuS51JLJfRYZKx7z4nx",
  "key24": "2X6eXbiRxzC5M9TzEYR9a3maSNPseh2YYy4PHe4Ud6kmCVf8UqBnhkCmHWpQQaFnsob9tq3EnQPuurvwoFjzkZQz",
  "key25": "29djvEGjGLMGbNkeLWQ3qHjXHn8YUGhpskTKJxMk2Kuk3w716mJUKDnCimDaLeyzDCrhP45jLqJAjyvax9PM3Ncq",
  "key26": "vEWkNQzuteUu59gFnARL22fLe4TnzDrUsQLsRZLHzdhkeoucbQnusWxyDeqnes3TXMAZS1tkhCCp3D7CXBSYyFi",
  "key27": "5dWu9c89u39aT2JvBnawRb4iqZxMYJJJ4FYAWMxqAf8TRKMcX4FT9GpJVUwz2ft9SkpFyjuuieRV7JR5eAPYnZhn",
  "key28": "2DafZLYM7izbUf2YCKsc3g5hoQoE7zRFfBVdPWVZL835c9Mycgfh4jPy9obsDi33PTj6WGcEga1X4h8K8tEG2CuJ",
  "key29": "2LieKRCxpXC7otqXFTcBQWDknhp9m9xBxvSzbyXUPLzAw96vwzdXR63XxrS7taDj8MZMLqHUytTSfHnbaeYznxcJ",
  "key30": "5JavQKEWvQJ1biZBtCX7Ccnca71C4hhYLoeTLq1NGWEJZ6bKtV1oPcMaAdkRr8rBJ7oTqaL8LXPvMJCNgEoHprn1",
  "key31": "vTMxWAVePwWCAxmp2pMYgrbUYU4qWsdRwABWTdkk1U79JppNRD6g3LRGfcnqRfwD5kRxcsYgab99d9FPRB3m8FZ",
  "key32": "RxapvqJGDx4yW5vmNpjUqNaGfWKHDhuD7udFZySpUg6CjATpZZ5Ynn1joghGm1tsFYf66YyUomiaZjZVxDzYxeu",
  "key33": "GcU4Hk7fmKHkxCyKL5YxkpercSEzGAgeGUDCj2eyhaF4TgtRQLhfBErb9LGqRPGj3at3DKX3hs4dNSxYNmWAmLT",
  "key34": "66mJiPsTVXuBSk7ncPq4fsa7MT1nfovNarhQSmi2nvJNTi8uKSoVjJeTJjp1o8sFtH9HFsRgsWC6zi3ToQvWXyAD",
  "key35": "33fgZgY7L8KpEcj7cwHRuKqVpnsKXCGE1mcam1ePL2NsQ51fmWf8gTT3fMyRK1Wuyftbvcx6CFeFpuhDWM7Fs9gX",
  "key36": "5G1ijDxvkUqkXfzSdWknYe3rdhWzfag2ERHbw4NF1nNYSUbKYSKmYehnWQCaKMW7yWerDgPsBdCF3TbvDKKijWLi",
  "key37": "2PqHWtf2nCreCbd7w96zwW5Yi8ombKNfmpq6fsAm9PRRkJiUGYLmm8WeEHpZnp8ra5iddDdRRLrQZoopLbnXDszH",
  "key38": "4eJCXVopN4m7tZVhTjnVsMbLwDbAkCDrDAhA42xtT2meiTC5Qc3gomy2qvvTe1w6MgYCy3uHm1bjNRicsg3tNpnt",
  "key39": "fxxUevug48BkrKEqvhPuxr981XLgXm8QACXVB7rgLuUQizB1Pb5CMtQ69DfRQA1uZYKyF3BAuxfXtCUkjHiM9KK",
  "key40": "3TRWwh5Q8BTGBPZNaKTEHQXbyUGZ6rirdETPPWeanxLRUXBA2scmEVx8URmdaMRBRTtX5666GaDTN8wmdPDowYxB",
  "key41": "5XU3YPoL6tgPJeZ2eahip3vgudoxaDkXVVzPMpP4RbWgZXXUWgLWUFmmu7rZ9Ncf7sdRK2K6xxfAieg8CHdPMXw4"
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
