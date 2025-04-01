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
    "HCNoHgfLMD6WW4gsCKQrAxhXGb11MTSUidmPKJeKxbyBmXGZybLopjgXMn6v9pYjw6dbbmh3rsCJSBqmDayoXeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yg61j77aSejbybAC8BzA25SyDjgWYin5i7PwzXPZnz7Lbw2jxGSn63u9ZJ4KUugi1mgdu26RHPkfcfjtFUYuz7z",
  "key1": "2So2LwCLTMNWjrQ6FvdFU7gs9cP697S9cXuaaunbQghbiR2yx2errv5x2x1ndqTb1UWZ52VH85WShNbA4CiyNx9u",
  "key2": "dk9skSDtDf37AN3RMFTWsM6TqmuCp23xSbayYV6J764SBYMJ3KU3n3YpuT4kEPM2EEREq2hNsdEXdtinBFoK976",
  "key3": "4LcedyHTgvChQdCfKChkv7hqxWoywtToqbWHVbhYztC82x3aYqJX81MDQphWJFSqcUqXMMXJjiZ3XbxkSnh8XcKD",
  "key4": "29stGMzJS5rF1mK9xL6w5mvdpyBUi3ijWajSAco2LqpVVxq8egg3SMNL9c96NxNzj4XYDw4zLif885i7r3ANePSy",
  "key5": "2XGkiDpHBeADxJbMwtLj1usDJ3oeEmYoYGtuPAjrweJNbgJBLFZVJduPYjVh2Ef2oq1fn81TVFw7jHhESxd4VjED",
  "key6": "3nFcRuR4AFX5FxeXctp2gSZoF3n32iGsHjwxiaKci2JdynX9b8LYgFyKnzHmRGR6SWHPETyS4ijPrmDYNJUNnt4W",
  "key7": "2YuYT1vaL6AYjCY1bxCcCiEYQtsmeETiu2oqY7xvdhF6TLrAJLvVQNcRrsydpJDNXMHFo3XMT2J6bZW1ravKHswN",
  "key8": "2gh4ZMczKZuhzURvWqYSBvXntaqrTV8iromMVdnNR2mPHM3agLueBZNDoHPTVgrKTLKMF6H95KT6dzFwfjfMNPqn",
  "key9": "3QaHx1XpDjsXsf8U7e4KtguYfG7rLgPzQ295xyHvc4Zq2ortdZMhQPWe49q2K399tzPeKkH9fJPKTnT47wxYVKZV",
  "key10": "31FCRLogqmzMmeTYWQFbKZbCLEe85syKAHNBYZda5RR5F2kKghidJXUMWR5QAx5bhYVkMB1tsE9Q6YdnAgeyPnXf",
  "key11": "3yUgtqMTj4ymYi1Q4q2W7nYR8QvJHiNvkGyzA2PKy6UaWsXnTAqDrVv95aKg3Bm4VfbMCm6BppNsYpU8SSQanuJR",
  "key12": "5FPNR5RmUyNT1s2qHgh7EeiRGELcGz9JHnUdc1D2wGoUggKDKWgwz3tmTRSEbJiDzfDRLU4SGXd1HtwKFqjnzgj7",
  "key13": "2QiEQHm21RHxhjgUCXDgQ4NtTszKUdGCkR4gLvS7XhjyotZFcmYpW5wRrK9xG8Km1J3115P8DVuXJ5oRHdb7fefc",
  "key14": "3MPhb78njdxbpwKKjmJtry8tB73StWcA79HznJVqBQiN37hjpLBLh9jYVTPAc3ieA4o4F9mGj1ySnWem818w1Mb",
  "key15": "2t5oPcd7MyeijQUGxYBoKMi5CxuWqpRyakjHWreYimAZWfZPz6fFdBxy52gmx2KF8dp2uNyh2QM5zTafCC1KrcGZ",
  "key16": "4w9HQQqx7hmAFXa34H9Rs6aSgSmDoDaDhgMJHqKwH3Gg5Hr6BtKb4eW2uduCiXxFiPqMbWRBCXCDgzFq58ATpKnA",
  "key17": "5p1NQnxxjeJzJU2gLTwzape1DhbpoKKjWWV7tWbC7WgCB5pmG6waPvRYxeEM7zqicsaeQev45Luy6v1qaTYGKQLd",
  "key18": "4MHN4LNUm8udGuLfbdmx8b8a24itPq4ZU4fRjLFsvvTCvVsmv4zJCLavQAW2k2P7fRaKLX5DRiY85YkGsJafFygc",
  "key19": "GmqWvESRB8hd4SXE1e1SkhHpfDFVDFQraFbEFctutE7sVp7AHRQa3V7KMFnxmKuLBnqZfmMd9svTMqv62djtqbp",
  "key20": "3BpiegAea75YRm2Abf3sajA6EPk2G3jJzbDKcD9gmzq3ykWeQFbJvgTZHN5YqDgwXxfV4nRoBBtDsRpFE5Q3gNye",
  "key21": "hQCVGPXc2PPyySG5gvzxyvUMxwGKhRmCQNiBKRoZDRVXQuFrsKtBrdnSjCSaYtGK5FTTtRCbZpGaU38kXkc6Nba",
  "key22": "3ziP623Djq2cxUQQvM4YxehF9PC4vjn6KfMSzn9KmtwcnvY34K77n67prcw7rfuP1y4f9LuiwE9i5XQst8rUxrNh",
  "key23": "qwEMa4E8nfRUg2rKyF2df5g17b233x8M2kzX22mbThvxF37ybv6JzAzEdpJ3iMj71qgFYfPgXQzSfgaVXbjYg4a",
  "key24": "9vsieo25qjuvTKY2qRRPodQ7noSRjBELfMcKAXhYjUyYc8fkRkeNz8SELhunVF9wgRy3yb9ELP2BzfncEVEZAHY",
  "key25": "2s1d3XPTADk6NydVX4YPeKoyFgu86yELCR3BibvrcfwZSRijvs3H9kxC4UyPm2FNGZH6gxxCAkKRxchXVZ3PZc6e",
  "key26": "3DhTx5X8qjxooMfj5rqG4BQVgutuMrRtGDhnWiqrgvN5ToqocmrBDoAXkdqDbZx6qanUfUdFuzeMZmBSufpHHGAi",
  "key27": "6G9ry2Br9D5P4qZcQRqGxuyksjniqPyn3FJtnr9MsTc7Lih6EG8aKch4xHHxLev1hS8A9grnduYLXF5PU6EdB1D",
  "key28": "4Uaxy3q2vhxe7zs1y9kAxkHuuRAPxHTohdiyvRZVyD2yEv1FxrG394EtJZiefqxtYNxDFxKQKF1W1v4syvw9iWTD",
  "key29": "2xiX1fRLP72E6J44s4CkGDFfXCurTBquDXJU1HgdtY9nH7LSTYNtJfVZ3ccjm216YSPk465zTrZ1YvmbZUG5DvNi",
  "key30": "5yc5jKoCMocX64x4xfzZWhhoHcYHGWYeUYoctxBTt2pvua4gffLDCXbsu7DTLuxoLDCVbwWKiMpeVe1ibrunwo6x",
  "key31": "63F4vgPznH8QoTN2J46NZryZxveKhy2V29dJ4sW6HrWLswn7a6fAk8taEwyevp55MTEjiSCJJdrb1ty4XKqb2DxZ",
  "key32": "2C2cHbfpSZbdU5bu1SWnM9JxPyJ7mQZZK8FBM7m9NpvudCxrTFed8zZS6Ub94LpbyU7DihTRd4f7CEvNEo3rzgVo"
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
