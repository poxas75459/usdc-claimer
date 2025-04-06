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
    "N3svx34crXDmKkTSvBwJGuAoojUEwSKt6q9CKs4xTpFnVmtQLpxt7mX9DmLi4EZf2pR9GAUyTwpjvvQar2Su7tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D82qev2mkKsKQ76bYqxmpSgrY5hfbkQF2GUEvHaSR2YVPKtRuwEKSrnajG1DHk2BAuGGFF6JHyR5u4fnSq2NdXa",
  "key1": "3Nuy1ZBULFZfWr4773HJpYxQc6QHbGTnzNMfGQc4MBwxtZLu6g7fxLYrDFgbYUfrAHXY4dfAMx3nQQtuGkhFcRSo",
  "key2": "xS2R2MW1dceM4t26sEwdSdgPS6T6C8zxorZcHppVTWCNepLTNbi7WPinri46AGfRbFrwJ72ziEXBHatYwUiUyho",
  "key3": "4dYag1un5id69wtoZp9nbVXFfvmhAYbHjv587sFHANFfCW3wnhjAbAYQVGjyXKEUK7h4Q6Tu4nYGbqGWKaTS8S2e",
  "key4": "2hRenGdQ771e2g9pzrG85NeyAPCtVZcAYuMqqt37n8R17wtQ2UMFY5Hv3gjjmFAbgyCt8SyibH9KtgEuRwPEVJ2g",
  "key5": "2i12NXSHNzFbVCJfTTYsRRfeRdx8FRs9e3t6Csu8MdWa9u3krKsKTT5buCJy1S2pQL4axwjTqUWQck9Lg6VMyiQh",
  "key6": "5mN9hK6hf2R2UCefxidmZaaV6Q9NUas65GUvXSHY13EMHURo1HLMC6snvNgCtPoMUn4Z38HXd2KY7sRzJYot5Z6U",
  "key7": "5unX9fQmamrKNBeRHjDC1qN6a9sYsrX6UEf64uqEVscaLV7rrGiYhghdz1ecWzmEwvdqFPprvPrTh7iL2TMJtrZs",
  "key8": "5aqJGrpaBT9BHtmSjo1HgPWuQUzcDyHguPt5LBA6jmKDpz7tKLp9G52aUapumNkQgwuVq7ZfsaUubw8qkcRb4N3g",
  "key9": "2ett2bZdbvjTXarKWQsCW8R7UHPHTvVGSavVDCweKZrgAYAvGNpdXUBPBM3STDBAJnbY5VNNiVP3ggoUvXHi9asE",
  "key10": "3pzwgL6qchW2Pzt4cBYyX8WQgVx6FczgADhaFtygFx8EMPeMxHe8yCaB83yWyyGD7uDt2CNnfNs4GafqFV97emHD",
  "key11": "5GfigbzbwBwGrENPiukhmPFXDBBLRdS9mLySq1qpSZkGGeXS876LUujEMQngZSqeEfyoxQCaFLAGpVbh3VymV7rE",
  "key12": "5EwK1m34epm9i799xuUsY7BcgPwYnHAT7zsYpp2FNBQimy8yBwDUW585u3fA1j9erZUrAUcWBEGvLAtsZ28nqHV2",
  "key13": "v22U36WxJNMgT9JFqvzAt6gLF4wWishs5nR9EKBr89Wh6n27ycCyRxUgDDMDgD7hjzrh8Wbsj5A8igkWDHR69dm",
  "key14": "5FyNj6aL4WRh6JzXJRSz9ag4cL1VsbEJp5Uvpdd8Z9eMfF9FUHkTBvJaWXJWhrs4CNWVgZvbX6PpVp13k7RS1ZHN",
  "key15": "3WhssdSz2S5wbdGDJJiahHd4fmVVQ2RaUpGXK4LK3BUL8fWRMdjMbX7Vty1w9HLYLdGbmt32xLkxedjoZRKQMVfA",
  "key16": "Kv9YdezjaWffGiui48XHSYm5vUyaPUYbqR1m1jb32QAC1V5gjyYWPMr3mbYAvVtDSzSMrrFt8tRAJZKWYsq1a4j",
  "key17": "35JpG449bNSXvD32ZbpNaq9hSMKBwmWA7paRC7gRjbEWrBpSR9k2oLAHUeb2oJZDiaSdDVtX3NwUVTgNvgi9atNC",
  "key18": "52pN6Bs9XuXJ3UJhUBBk6ag5Uq5pirHxjxTVcb2B6Pj9KL2AMQVK1Q86b74dXN8c4FKUBzapxqAe3qs6kffWFiYQ",
  "key19": "kZGdzTUVKHciGmVjcqu8sGzW8HpMzqNupUorURj5asz7ePEddDE52mHWANjJRAC2zDBRYUtYQiMuHD62EfddpN9",
  "key20": "2Hnn5rmHuCPhGmLGzphBPcnVN5TLPUUzowkawxKJNWScxwkSP61bA11nSdCRSeonTbXxR7FbDWrTdR268E16bZi5",
  "key21": "Q6bY5ar2ZavXB6L9H4eiZiCVcEwZrccGX8TfojcaufGnUqBcvmZKgHALQ8Ms8TuzgvpS9LV4fKjE1TawjZuJqNb",
  "key22": "vseDDtRd9nGgigHUzPjW6pCpzBhNMEgMsFkGguo54UTNiTu8rE9M7XbKY4sVE8A2rh1Vc3eH8F7nGLQbjxNpWkF",
  "key23": "5JzwZ41P2HRaAHiF2ziqu8dypKTfMK4RU1Afg29oznei25pCz361Fjf7er2qoGqHr2xsJLKrMAcNgx4zzfzVjWxQ",
  "key24": "5TdGxMHWnYjQSCHkMAmXJQ5B8FRdboFQexpHVkDZ9tyyeDZKVp5tKNW5ieoU64NCTgVEX4Bffw6dkQWyUkr8vWjR",
  "key25": "pjwQZiNw3AyUhnnbPuuUkFV3oX3Q4VeLzWquDSC6e5DToHFvJz4uoFtzi26TsydBEqSn64hUn5BG32mf4skA9Yk",
  "key26": "5qA6o447sBuqL7bzvo8fEh3FfqhE8unsyBosBw3ERJWw38P3rvBuKrwS33bjZNC7GrNEuSCUtttoDfaMS7HeMP5j"
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
