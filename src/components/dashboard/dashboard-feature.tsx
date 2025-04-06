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
    "5cbyKqDEqDTfadonF85RSjHL7ijxWwC7SJywHZRFmwjfL6hJEeNUgAhrUGHbbyN9FSn1UHKVwzT8uBAVrMv1i6vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBJWK7PtySUHm8zVxhYS5Zjrc9tKJkf5vtmJWC44jyarxPuLQuhyiSwJdQQtgehAmtGqUndfwTzQM6n5xpve8uQ",
  "key1": "2PPY6thAj3KYy57bvSQyemCKtpWvS1VR2nB5tQv4vB7z9hW4zBoZ9iQXJ7xvBfWYaUo4jXdsa6XBbbWEZ3RVk9XF",
  "key2": "1SUroGMCXufSmsC81Chs6nd28U7iCnm7h5yezCLVhoEnSGn6WbYcgaqvW8rKJDwDUNuiZVWmPXxNoz6Ce7LsBdd",
  "key3": "98fGWe63WFCyitrSLD1xowEoYvnGSUMvCeynuuns1pKScYvNkPCMeGW3GnnCtBRSZHX4J4mEW4QT6dgeFmayDtq",
  "key4": "2NRr7SzbM4h6p9YkVBdj2LSan9b2bkoV1T4yRpTZqjojTRXQHmgh3FdWQM35uXUcWFcRMpU9rb7K8C8RTEeEyCNW",
  "key5": "3NzPVnMpLFwZNZoEX6iziHXpjWrm779P6pWFRnv21Az7AuATRLDgTxwBjXxYjFffaXbTr64GcrctN5Vjv9Wr643k",
  "key6": "5AwAPNRToBo9qu1ptriYt5NqNGZWTSrn6Zn1oWQofnBe5ureXhM8pTRGHiNJYk8xTq3g1XsUXXRDu2sPFczt6aqd",
  "key7": "56B2bKhD8ywJiT5aUndcdXwKQ4UiG1oTaQF29r9Nw95kKf7XQAYrJ7d1oUPNFJngYEKxvvSkf8W6o76xpojqGJLf",
  "key8": "dcFLArxB7NboSqUzo63dCraJMoNgvqvHLV3XwRPXHy6C3YNg4xCqVFjnBDzzvnXpiWoTyyKXsxntJRqhnF9VNmH",
  "key9": "2PsVC1S6Nc856bAqnRnqeACrxvM6tse6wWEbsoJUxZc64EGdYqahxuRVTLDYDcHjVmb4WbP4PF4ZJvRnA64HogsP",
  "key10": "3WqBgGumQBkU27CUqXdQTAHzMuchTFFcxppHTYPUWGRwzbcaJXK6zDqRuUbRsRf5sbcBYgESjpWhhUht9h13rczE",
  "key11": "52HJMcLB3Rt4W12FqfhmqeuZS5pPmB4jdyitAi5uefV8EwCeCj2opCe3RQK1QXT3fFB6Tf2mPXWrXCQ9SS9sp4v9",
  "key12": "2SvKEmFAvxhHjWkkspW1L6MCTcjMZGpkZ7XHYK9TLgZJW7M57EPBxxhanRura345J1vVCuCRFtFq9JRPWBXmubMG",
  "key13": "5S3yRUqjzQjfVzr8HyEnRGQMCXVWTkpAWo7i69k36oRiUNM7yr2H3aRNob9wucdZiVcGusVvCaGbPZFDuBebmoCA",
  "key14": "44R4Cv32Z2jdC75JfkgQWxV5BWJyxVxiWHF7EjjvChngkVHaKnTKbvtBv3tNdQn8gNi72eUHaK3TvDYf4SaNMkaM",
  "key15": "T8xX6TnMTJbGfdfzkk5Ey4aAiddWdJBWYZQPiym9KNyDwU4knrYHfXvhTLFTdeqHm1Sq45FaM8kAawUfopPECKa",
  "key16": "2yjwkskDV9Csmc5WWB8BzqCgrCtqh1gFNMgpDKjrNWZzxgKNygjtoAkNJjYu6CiPNhU7xt3CSGCBaAkQfmsyXSGq",
  "key17": "3hP8d13yRRWmzKvJT292QFTNj1JwvjiWvPaZYnSMqKzRbffBo7j8ND37hP3YfTtxLktsUdHGwCdLHmQDTHMpyeix",
  "key18": "5vJPqF8ovqVytFedtdnqqSTdq6t7AbA3wBHFqfjWC2zboLe73ehyW19KEvTmtvDjQfTznqGALV1mbHNjVoP5TeXX",
  "key19": "2F29m6WkTKVFDX5PYzWEAUKiXUFAVzFC3ZwaHUkHid7CBpf2KJTWhthyidq8rB6aGR647nFEc74MbbennKG5KEhQ",
  "key20": "3p15g6qiw4MPn3jVPh5sWxsvCbpygYrYDsu9TPbNNQTXb8Nwj2ir8cMo5kvsw7jXWuy5hvNT7n4Cxt51rDLsPSjx",
  "key21": "2kud8DZnYiir23Shm5BbpGYQaWsGaGfEKeDyzFjLa8cdExrTzvHNTimt7TFAodcC5eU8g5TMdr5GqF8uVcSNikKF",
  "key22": "3hGzxdx4JPtBbKFTxa9unAeGRpMLaUgzhunUsJJo29HN7wpcYGPG1DqRZU89k5YFUKgqBCMQB3Jh7qps7AcMkZW",
  "key23": "48qCc5mA7U7GarFtZzJVabpsUjWoePzKkY2H7i3BaFS3esAPTyMpXRtvduHc9Azc13UrC9ug3ZPB3f1RD29vxWM4",
  "key24": "3vanRFPmM7aMQbUKuGxwALz7cok9AoXruE2pzJxhvhUskTfZBgWTWDaeWCVHjVfRmx1uqS6yDTgUkDBWdYfh8WJh",
  "key25": "3iDYiRdfe46fHWpMKWz1yRsCCsm5czmYBqS5ye5QQF4ocjAy3EGwBupLNdx1YmP99LQP1Z8bm8NbVPUMJbpyUR9z",
  "key26": "2QhBGJDbyWsHGv6iTzwhcCPX6Ff6s9jAbe7Sb1j8zB4fbaHjR8exbUcarPzYZ6QB6TdLwnZQkpmE8XomDKqCdZdB",
  "key27": "2qtB8r8yYZ5Fjh8kYCX49j764DcERojghLBGQ2C1HzfWYFv6Wuc2nuHXZENR1STGUPDHng15wbzWJNxzXvMQPLU1",
  "key28": "4nmmCnZKuffbCPqFQCwhgh6f8vAyHvRS23F3jH347o8QDNdZz3edhHpfjrJsS4mTr2DSkcrQrSwtiUZXxhmhw37Q",
  "key29": "2qqCvpxttk12VjC4i3ydhvQT55wwKwmGWUHxEcASmULYq2pJkE4R9nX8guaekqRve2b9hF1MHdvECeogVc3DQp5f",
  "key30": "2zioSHRFMt6uNSMrXHici9wSKSKFtARR3LyK3qd1sNSELoz3fWg4rczVjAHdqpjkEp8L2zVb69e7HsFqSje9tnZ1",
  "key31": "3w9JHD7icLASJGnB4M7ufxRuM9TbMQjUYQxAjCfdrnLsbf8E8KhjVdxB8j2feGRSDqHeSAyYW1qtGxrf6ejJQE8i",
  "key32": "23ajqQEbMnL4HAuXYP9zuEKEgrK6WqTjfwuagjREzYMUzr35PRpMRicBQwfchTVC5eAZsAN8c6VR3tAWySLN3WqP",
  "key33": "4ezeKn8cf62vxrErdoHko8atPCog9qangLHt83B11NQMeUG47DYKeCQZrTmkjHSoGPVhgEb4i9mR8qM1L62jaLvL",
  "key34": "4xh35ocACGAG7qwBDjJu3e4PF7Su8Fiv14LGDZV6UMaRQUfYowRGnEJ4xo71Y8yrJSr2ehC6H4TSN9FN7i4ubkzz",
  "key35": "4N1pkRrtifm43TcvEH78B7Rvs2KDs3Ez8xqEUrwPJNWgTaZJEt93wHDt1aDKqeURP97fofyhMigKYZmfBaFnvFX8",
  "key36": "4PkiVjoiX3zt2MMarfrCAif4Xu5rJ2cY1XUqh4hgLGwnQN2sGTfN1tdZZ7mv4FTMu3AM4B3xcUrWnJcdiQ13ztjn",
  "key37": "3kUtqLEC1CeAvxmbDL8J51tedwy23znUZrAwnHLnaxwKzRBhJbE3DDoWxsrxA32REo94Be5cJBGPEBXLBUDe8EtW",
  "key38": "1ahaEoVSf9beRMQsvKPBEoEdpA6W1qvxtNsetY4mJvdrQf4Vh4yZwESQHZhkmjQQEhY8nzATiLvviNfhWi1uudd",
  "key39": "54D2XHvrfR2gdkShpHmq3S1wU7jJEsoxiGi6kZpukiWtcyE8QoNqLc62rXeGUEHoeFnQ926daBZ2eL6riFHHDDca",
  "key40": "2VDMSBGt45YLE6MTP5VWn2Z9qXF33m2w8fb34vmCvHECkunrwG4YciDAjnroKemYSJ5dTRXC7g4fUraXj7wMLcj5",
  "key41": "BiqC2rAViVto5PmegKeCPhZni9MsjpcUQxMnkgb8Fc2HEb7FRvWmvc7XEbAMdFNWSmin2zTMLpszY933VTvi5FA",
  "key42": "5c4uFvpSsZibCY4hsUQ572RZbeCMLaMKF1JPXs64iFT53ZqRVeW9bFj95GP7jBFQz4XS4XM39bSbDvXzpBEn4Jm1",
  "key43": "2ddXxMxE7tDe364yGNtTLrAA7Znrg6ckH3CdT5sFxSeguJyCyEoekH2EnohnawLaGVkoossBypR9tiyCV4HcivA7",
  "key44": "5PGfVWS9xbmdFg7RvnQgMk8JhJ9jEj6KMZhUrKNivULJTTni33Jzc4NnAap21wWFrLnGexfcnruM5VNH7fSwvcKU",
  "key45": "3fB2N6bayxi72f2gwht8vKnYhiMtbf4AEMiDA7xarQNGvwz5kVrDpB7NfEsr6FrdGSVemzzbehg5iJk9Qjnuf9jK"
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
