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
    "Ezr19arGVYpaJFduSQpxrAWPevd2pi5iswVD2jP8U4Jmdr4dWusFSZDBYpTCTsRwUoZMjLfT9MfhQGmjajH1RFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfqFGRa5RDRja8UndxMjo7FvQw9vxxnCeF2cmTYwaBVU4jut7J4wEahXaiGAgcMshaQ4ZQTiWQLzhhzoNis8yZJ",
  "key1": "5eBoB1kFiQ3x8LZLQYbVTmFQaKW6GpZ3wYho8TLSTNzMxEauuy4qYQxgjwvDnHoZ8RxKsDZzdFChtBoiyNntjvvA",
  "key2": "62ZKnotnLXKqngPt2cNQWKsD2qJHrgERr4qdCLqp2yQxmrcAm36kPvNsmQCvAHUtZuz4b5ifTcNqg9v6vfpZqd9P",
  "key3": "5sRZQqL6pefNtFok1NAgRHijxQW1oGRn3e5fe8wmtdqzgLViUMcyeypCkejrQuB89NfAgSPoS29XW2ASsYiJMdoX",
  "key4": "2gFGeDTCosMgpZUx8UKnzGhn86MXYJAdn9vrs7VL2KEkW37nba2ESEH1NvM1pVoaZojxaiYX5B1DEzuLMVHfgZt8",
  "key5": "jtthNZXGUotsNjmfckFgjw7AXtTXjAu72hmkW7v7xJThNJJhY5EhnoeVDTm49SdWd5hHTsTXiwu72HVq5EtEZWX",
  "key6": "afbY1URHWKNnTmvmAogmpB3oVySxttc3hwD4aJUVGyJ7ATHVa2q9SRSbvYiMszSWhd5MVDGzqQEhJfMv3bvgaiC",
  "key7": "5Cryyyiq4apDAyxgweLjBXgy3fUE7vf1TndbsLLd6eMwHK3NVTnYuAr68PEEnk4i6UBmTHCuHh8ieRcuFz2Q54hc",
  "key8": "XD4EHsqRDey6GNMvHGtKuDKWnfX4oRrWzXYHo79NtjvxRCSnbGMEXWULhqwqdXCUM7PUtZ19ppMvLVZ32CjXv4F",
  "key9": "5PMTqggfx9Rg6XpXTbskijSreXPbVYVLGvfXn5JQJRHaMmb5AxfBhEtbjkXUv5wPe6dHuKUvecmgafwyDbUpAg44",
  "key10": "3PbwPL2TRgbGfhGQHo6eQTz9Z7cTtQbZv4nWAgf11XStcFrkWMN6w4td11viw8kj55Fdue84vsbo8PWHqYZAbE4V",
  "key11": "41knSAY9nLPeS2AZe61qDSBVtd9MfBRnXc9v5TLLNBVhQgKnpeaSV5QETGuEpw3VxWLAkvuDxUnKeYNa2f3AJT8z",
  "key12": "3zK8xt4J5t16KDWu8L2mBgpBLe13NrPbb4XuPbptUnAccvfof7oEHcynCfcjrMSd2q4hVXCLZVeWBxZutsRhb18y",
  "key13": "2soPSBFMrZp2wkyxP54yr2XmtzkN4NXueyXeyXrfy9idXQV7eGfK8QsR4uxifYAcW6vzZCGjBS14PM5peNRvgtXV",
  "key14": "4wJgsTix1KG452mCjZrRY4G1ofCW94izoYX5v3ipvEgX4EMzSQ7sQGdLUxdWF1qBPqWbVicfuqF95evM7eea2zie",
  "key15": "nAtcEfW75gZWaeiwyreDDJEHp2SHJqQdngcT1CEUmnBax83T7UDuWDKUCsS3ksrJ8omKkPkpQZ8iVvQBwZ4UMVN",
  "key16": "5N5YY5pi6NeEfNWt7SBYUcwHe2Cfe2CDYtTg6YG2MD2zsc1afrgXR7pJhSAiA9sbkERyNZmAoEXy1fsDZdrwHgrx",
  "key17": "26R6mmcz4PNcji24KUKxCdomqA6FRc4a6XGpr1sDh1JoGcW4gnRZBYVqVgfEBM2NFmUnih9yz5SUraAemd7XHXuS",
  "key18": "XTq3RZAxY8MKEHSXjPRDM9MA8d6D3qEBBCCER74aevPSEffDhCpQXPQ9zF9urbef372emGirAvUoqm3EYBrvkZt",
  "key19": "5eF6U9g7eqkSts5V9R5XZ13pUmbh7egUhMUhPk3GKLg2EqF25Bx5wwQgJQKwNLxGPZXF1pUXwFDwGjU43n9Zzb9s",
  "key20": "voVFtcjkackAUbZm3cWJZmPJ5XBZUfY9vP3UUAfCDn7kFcXithwLHE3Uw4548mUc3amc631YNBtSBQUbVYakMSJ",
  "key21": "4GnG9Kj3s87TSQYB4VTFDJvqpEHSXYrkSRejfi6xdfTigcMDATuaLWwsxGb1wEkUv64x5w37WkvFRAX1VXShwW1U",
  "key22": "66vVi3gy9PBQderysQfT3uUayTPW8zUxqbyUoZSDHK7qoJFQXt1hHUhjV3iei7daFtyz5JbNRvuFr2eWiXQcah9U",
  "key23": "5qtSZwjZ93584mZkeKnmjD7f6SqUNTDcrcptMUV8cY4hTyF466Kubb5iY7efzXN9iDg5wyCkioauHUcvVo68Tv6V",
  "key24": "2eYdBZTbb6Yw6WgsJiiRUwKfWmA6TrhA9S8jevybXa9ej8DhrUpcJ7PLN76XHpJxBmTQUjeKEdc4PCCoZjNGGP5w",
  "key25": "4F88iJMX9BtVnCU1H3m8p2W7QejQrVs4AuqCqCDnkCDsN6EfbttamVXVW1TrCBXUETGEEJj7WpeZaq3aTQE6F82",
  "key26": "3djHLJCawdCogV5Cxokec9k88w1gpgkoCfKNesw6EezZFgCVdWM7gAY1HiL9ScU5nAB5cV7aKEMmEetFkdX6Sw8x",
  "key27": "2f8At7LFknTgrAAAEawZaje27A2aXBX1harvrh5arrssorwuVP1yfaKSQUS13Rug3YZg4E2GwpVmVbNszHWyQfQp",
  "key28": "4ZfsXZKzgM2G5PhvQsuyPW4K3TZsf3T1MeBMbWkwt7JHAmC91SHnpM75viMaBHaBuHZu2FuUn594XCNqpcP8Qwp8",
  "key29": "2QwcHTVBa74peG3KQgoQ5hBvrC7NTvvv6jkbBFvEByzsc8P5NkHCAg4xar3P51PRusqkS6aHWjo1RtXvMqMrb6yA",
  "key30": "4tS6Z3ZhxdZQC1yMmvxbpbbct1tZB6bxSuWmi8tf9br4RntQTcj8suP3kAUuCfnhKRER3EqmY5SavLNnEs2LnvwZ",
  "key31": "4wUh6E1NTrL15S3HZgt3pYcYmMyzPEa8q12Nrejxgbs7oGNt5NNa3VKdsEEgD92chdYGF3CjTZrsUEvHRsaR87a4",
  "key32": "4nnNR24yGtMeK8M93hpgdhYbEty7PVgQZDJS8MJhppmceK1xL7mpfKwbnhxWueKGo8cdyji24NkPVyfRfkcwnjzw",
  "key33": "28hqhrQ8Ggx2CPn91VqJ8gpkkBctfxAVrHaPBb1FPBEzXoyC8bWQtzqrbErLDwHVk4MQdRsTPTGkq17UV8L78Aek",
  "key34": "4W1gF5PvSQBFhHtUtN6Jp9EBDTb1wzae8VqnBJSmNJgxCCx5qeWrHcFhAQU5PhoKW3koumE5FBx15fzqbHNuDWmH",
  "key35": "ZpoHwtvuJ3zk6375CkgNkx45i5i7nDpUXKw6DahsbcCX1Rkp4ggLxms6Ze3mRj7AMPVraXGktE7kAWkSrNcfn5P",
  "key36": "4fZuCeAx1eruoEKPWdwy4k7mf3C91NTtKgMfVHDGE7H8s717RqWWSxfiiiA1DHpu3pz9u2Nd9GoRfkcYuuxEfA35",
  "key37": "66aT1r4vkNEhY2kvEKYZBsp17Z9tG5aFC4aGke3Vkz4KbPfTNEPzWQ7Tgnt1jV4JV27syc8T5D2dLvXvAyykWMuu",
  "key38": "2K4g1VznAD82b6bkJMKPfsrNAGb8VRoFDHAhUhbjrqfmeywpN8cnD6LAf8EV9VVKztVJdDwreXQfzyfvQEyaMtVQ",
  "key39": "4TGdCD13efDaDyeK991uiCNBbAh85n63CkrECf92PoD5qvDEfoc74arR7fQEZCHUzmwnqtw6FRDxBQDp1WB96jwx",
  "key40": "2yR1qcfNhCDms4W8CocyAEnJstLcNyChQA1sMDLrfQCqrMVHUanG1D3KHBGsL5uF7qgB1xWnrSpitDDtpSP3AQp6",
  "key41": "sUeSAkKHoVDp7jVKUzu2wdkkEbGUTYVDchZHvoNkcDZKq4mmFKxkSNGmWqEc3D4BwHuHw5kfmKMyVf15yy5TBpp",
  "key42": "4DN7PePAVA8Y3knEqt8rYqcDm5rCogbA1bFu1U92Nt6RKkxBeL1nJJCYAh3B63frGCLMSyN3RaTcBecyGyWvV7ZV",
  "key43": "5kK2KPXSQ1z5ZQgkc3DaXTMpSuoSn4yPHrT4t8UZP2FkQo5cPY3it16Yk3s6U4H1RENCphXNvKqD7Ar1Ug95obxN"
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
