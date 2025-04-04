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
    "4AH2UShfpMW3B5hpVcKobsx59ZB5AcERjdgbTjFiEEnW13ZopJKPr85BCatsRaPSZYBy6LLumTvR7m9o8ky921Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKcLpBrhrqrH9rqZ3o23wGUChm3NsspJUG9VXcaZJgmnjde8Gkmk5uCbirMp66rawdXGDrncsF34QDJ4rsXW279",
  "key1": "37y7oSgpFv2wtc4DAxbmkrkUAh8s3fze6uMyvmEY6gXYaP4e2jVAtnj5jSk8eMGy3V9vssLCDgTGQ8vyjsM2VnJG",
  "key2": "4BfwdGftLnD2MgsF7BM9iRKPBmF8WCKZJCBbLLH3F1RQRavifSfMZ9hxtzZAH75vzk7brLopJeWMFVSNDgsopugX",
  "key3": "5s18wd33M5DTT9gDeioo5ZZp8oYK1H7UY1J9DphGxDcw3eFPYfFirZRuthBVSkJiRn5odGuXp5jTxNJZca3AC8b5",
  "key4": "sJTt4v7MN1aTUASebLD8fVf2eiB59TzzoKssxgqPHSUh5LFrjif6BpxnkR1TcCQjddgP7z72MjwP9x87KAhZa7x",
  "key5": "31zHfighmhrZgYwGcvZzhyV8rwwhdTPY415CabpErVU9zJkJx13vVJRzrJjLs1VMbVDKowQwZQo3AGkqSKqg8ad6",
  "key6": "5FjUCGHcUcAd4hRp6YMUHMx5qKnQEevbBMKQDGFKjA3GRnQ7mJZ9vSdJUB7qHpj4DhyR1UofmZL3xakHEZTkuWKF",
  "key7": "3Z18XsbTVoSr1EWYCCv1iKRBULCXHAQrfACYzUJ226trdGy2fPJqJBrBD9rWuSBMnAVjvHgWDDn9MnT8sLs85u1J",
  "key8": "4BEq8VsYtMauxbj8twNmDM2regKaBnYFwdKqX3GuJSBjmwjMpiDbJCWnFcphQzhmHpnpZCqn9Vubyn6CA5TGsY8V",
  "key9": "4tw6qR8Tj3t7rhT7ADpubiSPm9D2B5wt9ziboZGN6rgZE58MBodCtSTzT4WfZKK8ojhCY15wUySfj4fxWvv8L97H",
  "key10": "5VkWdgPkhQuj4rk7KqyyTpDE8bgd3LYTe1gfgxqXSVa7uaRYN6SWDpHwm4KjC78vVU4Tg6B8ggmVshEEHzUWtvRG",
  "key11": "3Y16BHqBreVFSP1vJHq1X3RrhqAmL3mqivH5sHcDLg7xjzqt6KkWKLYzpqgse9ukmMMzovL1ZVV4VqHefCEX8Eup",
  "key12": "4JU4e6FuPRncMx67wgtpG77pvcHJwh6x1tiySRV3hJ9BMChep8QSviHSZq2L4jXupBMMFwrNR882nuJDhA8TJ9Vh",
  "key13": "2NQ1bFeFxk2hccs4iaJja58Qc5tHakZRiYMoqUToDotsPobVMUMyyeKFAgiSxm1YwiHBdEr7Gprh77cNX9zG8b4y",
  "key14": "5bTpvYWwzcidctEoq7bbp7NNRqUUkENtFZZbCYj4RkFnvL8c32SYunXx3Vy1kGfL3BGLhooMFMoDVtR5ad9tqMZ",
  "key15": "3ZvaCBTSa8D3gLF8B35XSYVzKzUtVeVFr99nb6s7ne2cT2SxZwgQXaSMEYuvGMe6tQyE4fPW22ov5wpHrZtp7SyA",
  "key16": "27dy8yv1cTs4EKicsVCUqZN43eq4K1ZfRZgyDkt9Br2sDPfQTbWvyaiesja8brXkkU7SPfCfXWptiaSsjVpsZRfL",
  "key17": "2c12E4S7VWecj7ZZzg78y7JdUZh8FSgr8Uf36jLHXpiNZXbdgRMVkQfqvZqfEC5Mhz1PbxfWLyDvqjnNnHot7ADA",
  "key18": "2GqZhBr7ZTiSFTk5mPGMHuLW2weosSeMGxzdT58pix9siHVSaFTEz6tWheUut8C9UyvyKVqcSD27WG4mkBtHpyuj",
  "key19": "3HefY77pmvo8MzfQoxVeihEz6vwUoJpqgpNgUEui5HFcgWBMLZrxc6QV7oz8XgGpCrcHHGvdQtFC7Wd8a5goMhcV",
  "key20": "45BbymTXuFM7TqZwYg8sY5eMBGcBNah8cU1MVBHjEuD7vueSQobPceLfahYNhL3pKVNmvcgctLtqHVtHofkQb4rM",
  "key21": "3woys54MJcBpiDudMTqhryqY73EiT51YaSihTzhnonNsGeJNMTgmGSCUzAEQiGnXPnzjVZwxPgNVaZaTJt3KBPTx",
  "key22": "rZNKA2MwMe6M4iX5ZZs7U3mkSNNtNY4TyP6QGfPVM6iGHcoRikBfPoGppHh99G6gcRVuN6QokhWLrreHjYwEfjH",
  "key23": "QFsTLpqSZLNSFGKsv6m7mDiCGGVgbENXVUGGvzJVbomSYt1wug2Xm5nAd5im1YWurpnfSqKfkwiQ4XLQdyLU1wT",
  "key24": "3J7DXcApLUM4Erfwr8tEJ6jx1kCP5Xkf2LKEsee3U2e7gqNPipgfcxN1Lsuvq6etdvL3qW7DJUxbZ8fuoGC2ijUr"
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
