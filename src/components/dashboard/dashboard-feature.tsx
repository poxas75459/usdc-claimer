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
    "2yWvy1KiYKs4vRr8AvQbDwbfazfFjeUA48ZKVkbpoNoQo3v4ZcMfzJshREjGKBLw3k3qhWNapAxVaD5Wzc3XTY4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JS1K7P7fGhg7N5t6H3FjnYyS7V8bCzU4jBfvazejdjViUPCh8NaxA468Gr3dg66JEza6URM971SbxpwmXQVvLDk",
  "key1": "4sSXgvtuXgyUx2tSuKd6ggGqjY8SbuVCLqkqZCFBuWQvwVMbw2mYYPHtXYrDJ4aN9Yh5CbKBpyNMvxDzZUNZfdyx",
  "key2": "2TZ7iqu8wrr8aBEEGR2jkhtNiUygjkh9GU9S3cnaWXF4m63X6Xm3sAMcbXjLoreSRy4gBKLz9DvX4LaXnHjKXWDn",
  "key3": "54ywjesCD3JQg7rdCKu1wYJ7di22SozNyPxtTCE7AWjdgNgT9XaKx3ETCPUybrVkmH6Fdodwuku7gpWj37S1EmUm",
  "key4": "4n96aaBCd69ZvX1mdSwV7rXTh79y176kCokQjJVM1QDBBLGimd2WGkp549DzqkwkFfn389cwLUdqYBvBoUhoEueo",
  "key5": "DSzsBiiwchLRprhizmmryxaZjQPb3Ra9oyo2io6Sw5ibSUsDyo4cchM5iTBMy8JzhH1o2STcBJKezjiPo3bEZXX",
  "key6": "4tguGUMYcWhzHWp7Sz66y7YoWbr7zabRVxpardpb6Q48miA4XUe5BLHmnBHuD5qVYP5xoSFLpL7gbUUh7M85wAJb",
  "key7": "ux22y9Xr7qMD13BDrMoKPoH6Kp9oq1Ea7BBuqmvAfbcCDbqQtXmTbJaKeuuvt8qY172xoD6BGzdF6XyEJ5h3eQa",
  "key8": "2XjH6oTJYCWzfRXDLdZbHojMizYxX7GXUz1TcsTaxuwnrcNQ648YJWph4XDsMxsAG4ayhfbidiqt349TpSpSHvyM",
  "key9": "272KGQoBbuFzkbm62mRpBSXw7FwnBjnvFUraGdVJcH6vG26ZpjzGTqsKnxf6vNs6r7q82kZYUvAF8H8iR33fBkqm",
  "key10": "4zRg3SYQWeQqYHS9GHbJS5pPhi7caoUqKrh5xbCrd6j1JPWKovVaMRAM5u5s2zAsUQY9jyQ64S41vv5oWBqkTiMe",
  "key11": "24tfSseURZ2h74m8ATTofkvT7hxyTPPMmNk286VDbWoMMdj3dMCRvPyFV5oxK2bP4WD2sCRsJav3Ckwe6jzF5QKP",
  "key12": "22jEJW6YZCaUJ3TnrB6Buak7YrbtjxV4o7LFP6epmknfisjg6YhNeRrXUWG5GsLvjzq9th5WgPoymsKKzgEnHaDJ",
  "key13": "pZL78tm9XEhaCn6exiMnVweTKesu4VPUEMcAeF3CNBWn4FG8gmQAAFbR2CVF8k3cdVd8o8dTehboupMvyKZWqAg",
  "key14": "4ZZvgMqcc4H4jVmTB7w8nLsyENmNH5QsRMCnciSisENxz3wRsNkVtk6wYoySTJT6kE6p9cUm5FaPB92iCXs72CLU",
  "key15": "4M4iksQQkbnVP3MKoEnwkYGbKkrVEUk5zf1sfaDJepBLQ96tTDU7YxLQTvo9GeVeRQ8sNkGGfEcpJUjYSc56GQLa",
  "key16": "3p2KmJs8WM4QobPtg4QmJPkuMdEH1ZGdEtQLVvz8LrNsaDGP2MCozZbqujq7ZsmMsNUJ668x8CivFZueARNVC5Rw",
  "key17": "nxghaNB1P2dpy81b68Znqq1MpGbx2yfqMoVtZTf6ciXRX8XQY7QR3J6M3RA6Y9u6T4pVvgDqTNe6Gsko3uxF4fk",
  "key18": "3k6Ck6GgB6dJU9TMxM3awBCgVTnZmkGeqEoaHr1q2jokdHQ6ENcuXydegcwSxgKYQxnMpywp2LtE8fHEBcHVVyfv",
  "key19": "2zxWxYQbTbsGrw8ai1zbPdXPz9fAjqT4hQAMJMbwJKa21dGFv6W8TTMd7qQDiyRbUhpMra48Pe1WL9mfQUHcdhEu",
  "key20": "3eJJo64FuN7c1WeYzGKoNY1YujowBCb1zwbK9XsZKgcqEJ2HDgZj4WzXtFBwgiehuFAPc46L2sobtpvyqvtsDt7w",
  "key21": "2mqkpGmCNbeprfCMC4JMuvZsqDcTgD95PLqV7d91TmDqLFAGsCNsySCrv7DbVQC21WcUtpZeUVn1ktq7UfE7giLn",
  "key22": "3jnfrhPxgLigo81w4PFqSZ1GZGvgsvR2T13VD8oQya92tPycf7Z36U6d7bGYmhGjCVF6LgBzCyRRMDD5VCLym7fi",
  "key23": "4iaVLexxL8gm5d3WQCw4SP2bqPuH25EYPadujC2VCjwJ7f5zYspS85UpZ7byKbaZFwEw7a9GEiYGBmYnudMkcx9K",
  "key24": "5evTPkrjZetGQVmUrrnWH76tYsPLGhZ2cqqDkduShKoaSSiN3QjmQFSfpWiDHoQbxYFVD64sh85rrbJWyzgmN8j8",
  "key25": "5kZ71f1fBkx5nm5cHmjzXAhJaL5P8RusgPdjwUqg9LoffakPDKVm6oWHmKHfpsHhF3mMbQET1AF4NQHtfs8pX2Ak",
  "key26": "4gp2RYWSEwR6thp1PMwfSM6gW8PfF5K9VauHhhzZKs65fCa73rujMv4aTzpYiENrCMfXTFKLZsAT8RM9TsvijXu5",
  "key27": "3hzwVpa1ZqdLzz6JQpuhdLMg7scHnwiXo6SXAxG7raDiiJyVyPUedSU32fZbTf8W9zAvjAfEqhjgGKH751TiG5X1",
  "key28": "5bxxnBz792VcFcu6no33g4sm79t32MUV2ozbyDWnyr64xRb3wHmyeqkXUY8tvaqCX9a72BpH1rdRrZHBmjeULgJ7",
  "key29": "4dYZjQyNUcoKRqaxVqu7GUtduZjHyPFQy62o487vaSi1U5kJp8H2bWgaH2vjDUsyUywXdxi9HHd3ukYk51tiN8Ya",
  "key30": "5sMprNrNnu4v3hXWg4eAt3mEuhkS3xGKCGRQAQXFd7EXv7hiSLNqwojDvg3noqYPWHLnFnLnqyW1euohZZ4i1Tj",
  "key31": "2ayKGXfBmAvdncP23TKBaViLEzywU8scmnnz8fByBX9ZTXBSPAJRScjoi282d72vCvJLa6ruGhoUo9jrjqUNqJc",
  "key32": "3heFbjdaU7Vk6EdKrD2DfjstfdTYC3fvXj5sCZx1X4ar7qDB5nFJwqjXonJii7ytSh3T7FWsi4bu4tnxCkpw8Yhw",
  "key33": "2gsB5TvwWjdrGPvwFF1VU1sMBzAZ7YdJEdXiSiR5zdUHSxBmaReEDmK7eFAsqKSb6yQVpYqmHM7kuaFKaNFTuXQd",
  "key34": "2c6s651bfivkoStWEAYjQJ5WXNEQEPth1ekr8wStaERqCfAwHmhmSXRHZZpHu5m8WmRYgCtDnaEQdSMrfacgQFee",
  "key35": "3HFBsMkbXS3es7xEhbGawjxJsaoZyTAjXh9uPv5A7CfBAtC62dCJeGuhSAUqvTaT3hsVcPgbtP1QZpptxhSk3UpQ",
  "key36": "5S3TgSZXvrAoU3DbCtTN9yG1JnrxCNhPYUN9CXTR7jpp696CkoNWnWxPoJ19fh5E3tnmQF7t77cLd6KXZNEfYDaM",
  "key37": "UBHqUikHdgUnPypNHsNhBV71yLkFs2Vzs7y8p7GTQcCuUapNmWV7jvDWDSXD97ZyRWUuXdhc1a3cHnU9jHGzTNy",
  "key38": "2GvjxsSpdQGRDSTFKsZEgNWNX43BoEG8ebu6SSfX2Got7ojyDcwxkiXvd5TS3Xrw8EBPcPrkThueAmTCLczGuikh",
  "key39": "5V3Teg2RPqPBAwcwhSSCfDSZQPMQ8cgXY2fqni314H24N6ZB4EnbyQmBmQ53F3kH93NxNQypE34kEyYbzwhcgLQZ",
  "key40": "4We3P4n3xYVWv597px31hPHDd9FCENMT82rmtLa6YTNHk68LQWBcHeFEBTzBzqGFpiJn4xURA7YFUuAbi5U1ejsY",
  "key41": "26xviikkSN2xjoJgVhP9dLgpuyTXv3sDzsC9cvRggNGxChtfmFVnJqwLMP7LhYtXFiPJXEU8mV9LqCW82Morsfq3",
  "key42": "2SC5jDtQFfV5H21sz5cJFF8x3UASDW41PZh8yQwdRGEMDrCPZLWjGSFvQ6P8qrM8XWtwpFbKuGhJ4PoyMxvuLBNS",
  "key43": "2xFcLNBmjXaGzXGBB2k31BibbcX1hULUt1o84yoEoJyKfus2AHrdWVnH2SXop1zzyngfYFcTv2qxpL7FSEe9jwW3",
  "key44": "2K5Sy7sAWbqXHyjtsT1xLKAzx6jwh7ZUVVPGgC2ABtMwubtzFHRn8iKtAX6mbNxPkmK7GZwLCNrtqfwDJqMhTM5K",
  "key45": "31ia3cfuTfBJkgxhcUaK74VtpK9t2dXHSpEtzkd6vz7qPbNqWu18gxusmtvSo1obBik7kdUuSozb5dxtyU6do9Hb"
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
