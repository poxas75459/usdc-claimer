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
    "4itTLhk5dbi6Y8tBs359uJYa8g12bJBxeRbp4u1afgvYH385MQuCvbTfbUbtBuAqy9r7dncuovXLyShDc9hivUqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "348aQ3yeKpKAdNuwoyTVSBvLNgjEq8Tz3hTCyMtrL8ASddm5HbwDBH15RR8hKbjNfeXdc99jMmrpaWo9NSgbJM2M",
  "key1": "3Az1ktaanrMXghVaj2cNrzhUp2942Qzb65zfDNyA8uPPSjXWqgzHNWz7G4WXWpmhm4Tp1NKBrjdaUSyiTULPncVd",
  "key2": "4UVMAcDxczYVb5DRNkLtKeTvFhyjaR77BuEQ4qX9G7LvdQMQVT3auUaN6MPewbuguDeMMgKirxgbuegT3qHMkxXr",
  "key3": "kM9mqzU3uCrTWVaxBDsGePb1xtVkwTRJGq4BBDRDBZrCpipqptYojZUUErBsmzfRMnsWBYw17LFuUYuYiqEnGgx",
  "key4": "4Q9gdmv1RuFNJfchfBhTDUVmkvDQs7NLB3rzSmKHTTs5uiCDCo5Jtjw5DPKqFZdi5U2eXLJa2XYfL28BFTBZ5fqf",
  "key5": "3yR7DrULzkBrdwSgttDrZuwBFGA7sNHa2fKmBW4JMpocgyiZGsNEGaaowFih6QN4RvoAvBTVZ2fbssVmeb4ifsGa",
  "key6": "4vgkfp33VAZZ4s4YTXq9mLjSubxqwNPX12Wb1adosiiKx7oJbT9zdLRkjJAWTYtQSiM9zmVMav3QCiTuG6qeJvcq",
  "key7": "5HZuj8EaKswhoQovru2YCEjTYaKBQvxNs23FFPzJ6euQyatmtzey37CeEibu3cNU3cSyu6CRrAhfUcLCmNGrtVhq",
  "key8": "4frRUPCZvQwd7BzhRKLemBa3GtfcBzxdFQF595kvrrTomNGHmPzaDRGHJ9udMZbp8WZvSUuXfFFiqeNXJg1SSx3Z",
  "key9": "4kGavme2JfD2FSoFiK7oJFpg4qp45Ssyckgj3G7pF49sBRyw6ToosYNSb3AsfMEQgbcg7NpiWjid89x6UWVDaPry",
  "key10": "23i7YCjUnob4zVhxkMyPGZZCCiHQ2fB6WYqjyMj6PLJTfNdxyi4yPkgMhDwz7XWT3s4K85KGNXo7yMAsAQarLX5y",
  "key11": "UNbiNwrgFiMtpoMgwFf6KPJekzqMCHgUcoiY6ca1znTALdXxD1vGNdNJmXKz8xJdPPcSVoSqhX5bbSjnEHKRmBe",
  "key12": "YHdZL9pSud5xRSLqC5F3T7YKxUfZ2rhQsMr3bSEXpBUDZdnxihU1z9fGw76X5JPWYrU87GxCXdAjzMUJGegStkH",
  "key13": "3Q9XXjS6k7uVeU9pxpXqy6UWwgBQdvRYsAH4cwEtT5tNRTfjjhraMV2o5B2pPfN79NQE18ydv6Gy5HKa9HoD7GgT",
  "key14": "2nxbZ5Q3ctmFKUZNV2jAuFiwwH65cS9zUwmfNQDRNff2dPLqFz5cgXKNg8M3ZR2S6THYWuDeaKZCXmc3WPnVvSyY",
  "key15": "4FcaKBKC3Dwcj2emAqRXUQ1SbC8XLSEVTxx7Zc3RRhUKoVfVEk1hSDCBBRm7FKgkJyfrahUr7VzuK3esk2h4ckD8",
  "key16": "2W1kamVY6TA1g8zkSqrmsuxoA9Gm7YQc8qM8YeXMbCoAZieNtgiB5jzsnz4vZU5SBGuLmbuQnYWNPJUWz5cWAWPW",
  "key17": "5pZKHdAt47NZ2HQ932r3GreZ4STj2X69mABManATCvBSy4GXvnoZ4TChqrk4yusgUpEYGME5v9rkSJBR7VAdbWp7",
  "key18": "51HPYLm6QsvTxJ9mfbTckCcTpXNjjxhFPN6Es7XGTtxFL1yXcLgjFQPuuNT7gx6kG17ohQC9Jkd6wcB268cVQ8y6",
  "key19": "5h4DAqhgo2obcvP3RnGTfQFPetgdC4riVC2WFcm8kHV5Gmc3DUyiuFRVdzqsbKHu2qJz24N1maxEZBrHXx1ty3dZ",
  "key20": "3BPMxJuETsXdsCzuNt5fNheTCVWEHHFJe9AVT5ZCEZCY5Xr5ux2YUR6e6ayi9k5mGr7keG4We2FG7CrQR9LdJr8a",
  "key21": "2u6qfeNh1odjgNq1iiD2sq6dCByMfQtX47KfzMn8XBUzeJdKDMERVd2jJEDrCqMLqMK8frq9S1o4ykAczNGqWkKv",
  "key22": "4vA6ADTpgDT3Pxbk9LgNgWPQwwAATofnrxvsbV48zV8dSsVQ122PymYWmErtqBY6UJ3vLmVq9CyR9d3LNvKY3uD6",
  "key23": "5Y7U4jgQh9dYWU5Trsso7puAcqvNh5WJLG4YksS3ywaxP1wPjYVrEedZAKLixvqizVb7ysZMfj7AGEiNQig8rVf3",
  "key24": "aZkTK34Y5vUd8kixZs1DjdFqjoJKw58eSvkdQaGeT4E6nT7b47kZXiFYYMpUfXtfW94pgktS8XgQbA3UvLPETwX",
  "key25": "3DZF9GTnC84U3ayc85iqr4sLiXaNUu6j8NdGwXiE8c8w6UcFmWc2UEtZ6fnvoCrZrDCcpd9d7boeoxVpmWTJAk3n",
  "key26": "4hYP3bB5UWPw9BSsJQoedcHet3AQuFHs1khNDx5h5bsGoD4VoB3nyxUSD23qXFiMwg3Gfp3gZGq8NPaG4To2JEPF",
  "key27": "49RUvyGdFDicZkKb8zLM9yHoFa1ZTnfkf4GDxSAMG2d7Q2rRbDo2cgJyairSkSFPsFN1Lkz4EYrNHeiMxRowxS82",
  "key28": "5FYWPaisZ4a3XBnRhYbqHa4FCB2EFxxheCLVkNuxWUoYrf1mEap2cjGGFykZx95v6z9RhnRT7b4HYfo7D9QaoHLc",
  "key29": "npL6uV9oYuQQbjnYf3YQCJFFPb1wSPvBG8u35YMuE6eS7r4eXRdnPHL2AzXrJSDFrR7NpF2tjTffifzagrFj13N",
  "key30": "5cyM3sJPr16kxSLmrVng9MzcYzGPFc6RNPKDbZFQE1R9Q2Fpc7zS6tYpBA2o2MpQyMXM2DUWY84cQPDvvChmnYDD",
  "key31": "37QwEAboyCu5wpzFoSJhaSQx2WfT3Yv6DRS6ArXeAhFZTyGkGnsAYz6bLCpSENq175fvEWzw2h15osfYJiXGDUd8",
  "key32": "4xrhhKgNJxzVqfnCqJ3kT7oJLtVJujrY5nhARXM5qTCGEkesz5fJhQ6YCcn8piMdHRfbhW4cmGmLRvnQ114VY8Qw",
  "key33": "5Q1ah3XBL3LUSG6fQoF9p1dnR19DFKU2iiGgysb4zrKFgy2uwKW8G4ce4r5Vmf4gN923r17mGaUWEE3oZRZ4UC4v",
  "key34": "24KriyxhPrSqcCSaGmdaLnpPXeipDgRUxpE3wVDr3nCgBACRbwKGW1BckGUNDcBMD6utDVdDjHSsw1hiJn1sQFsn"
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
