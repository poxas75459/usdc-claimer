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
    "449xhFPzC6N9GbbhbYFA8Y4BZ8axMABAuNAmrtDehCNRzvJaGovxBF9PYhNi1J4o9moY6Vk8V2L21QXP3K5Sh7sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEndRLQN3jHZDrqRHjLQmPFuVJobQJcnKwHeYygMifxW5far1GeXb8Yh7c37DPpBWD1WyZAjfmpZS5V8kWud62D",
  "key1": "FwxVXATWyEZBiLZ1M4JxoCUh4evrz9tquY1mPzKh5z2NosDzMGZuiUCP57UqSfVCGMhxfGemTSz9gQMGNaf85MG",
  "key2": "5MBwukosRMftHNvRqvZ1pitXL5mGyZ4xQafYg8Uuixv8F8V1RvXL4CYsou5xw3w3CxeBq6b4me6Mc7kQa9gK7aSV",
  "key3": "8pr6cdpf8YrebSo78vu89cbjHB8EPjZH7oERM3pSDaZ5MdApw2z9pAhQnoe6UevJjFW1JZuPunv8Svzobqc9mWG",
  "key4": "3KuzsJTD8iK9h5DGS3BUH4xBDWF6SJAW8e7vkAFL4nipskv3jXpwnhtLcQ142ov9gWCNiociEYMB9bxopG7FjvKD",
  "key5": "4DnPCpRjFwpAxcFy891TZmhxTaTngKZ5gV4ZsJYMYQUzoVJdEarKqrSaJw87wAQzx7nZtjVAEvbJ2YQuPaAuraPL",
  "key6": "3AKbW2FmiiFkqtTHSkPLWNJHJoPGqJzN74Q3stgHWXNVCwxdnmfTKn8Lh1ZZXJkK8K9CyXtfgmFa9R5cdTSWhVMZ",
  "key7": "qQAmULdhPwwFhSRRJQRNSPdz1cGUWy5mvo3HAZyvQ1fCiRLE9WJqhgg4fvY8CrGvzoCHenUkGB6EKpuXusTW4wh",
  "key8": "4E91U9FKNJKC1MhXEc7Tt9PB81uKh1EstceSudGnFQBSC2Z9NDV3Z4QbAsAjbPnHWhxjUaNLLGkkuHXuG9gAaWYz",
  "key9": "A2ogt5pUEw5vDybfiruorWcR3R4iGQLZCrckPARcytPR4PcMLG6w4ao7ex88RMyahL8ocybV4PXzAmWgVGAC8qf",
  "key10": "5gFDweDYxgmCt1rxhdyEE5W8G2qdtPFk15GpcDhwoUPiyQt3GH5FncDtuULjtYoWZAsuscXd9ftocQfoHgq95NqM",
  "key11": "4vQj4YQQYHwtfgcnhghretYm99A6vKUg8bjrWoFrGkwJxCuSigEQkV2YYwZ4B4kf858g7cvxbaLtSu3CzLThw96t",
  "key12": "3V8NQTdub9jZs5BkAonHariFbrWqzCVor2oSUrGWyHpFffujc1eZDeVds4icLmqcyukjqT12pVh95XeixZ89pgfF",
  "key13": "3P7WQZHCR59RgoWTGzog5wDPGaXFym5wPSE6wqBpUVi7cprtBHGnmUFNaR4rZobLSqqDsqKrSg22gsa6t9NNoNkp",
  "key14": "4WTstfEcBjFVXzAeNdN5FSmqA5kU6DMPairKeQ1Pv12DrBkESvt3pbVWvB7KzuCuZfgUWcBWYejQqA1V57bDM2Mr",
  "key15": "2UapjAAqRjwZ2o6fqXz85CoXMSfnMFjiiQtW27XMCsW9cvNW6hFQ589XbBqnU7vLMgeF5fNg1CafPbNaG1Wa4b8V",
  "key16": "c4iBfP8DDxB73oLcki1mojoqvGmSjFS8bypqJ8XhzZJuJspfoa2W4MSAFWzaLscfXgQ97Pmj97h8xtvuQ76X1SV",
  "key17": "3q2tSEuK82FPKgFG2sQewyxR9igMFKe3vwTd2WygkHHbjbZ57Ld8u5gwpf255kT9YzXqRKwXLLFKuB6umvvDPYGz",
  "key18": "4sChwVy4bViY8mkXT5ZYEz6Eh63Gdy6ctEeLzp1YWAioRzw7kb4XdqoKW2nLTfk7uN6R71snkbsrEJXZmhpaUpzf",
  "key19": "43scaU8PENuUUwUzxhU24Y4Asc7KGc1cXHTm5peXQ5Ea1Lh69mbZaZqgTMjUSn9kFWvQWhTmFdRgUWuR2dXyamcM",
  "key20": "5Hg2zjwDH17a3Le8iNvmCsRmPeV9pKMsedVPmXNdF12EJAHgK95FVrpBQmEqm8QqnaL1sSJxKUtWFov8o3ejBn7a",
  "key21": "23ycopMe6SzxXsXtGzXjRdrzKEv5t5yAFmb2h1XvjcqxAVcovwuLmTYgYu1uw2Rjm5hLzUmLMyvZH53JXjX9ms4d",
  "key22": "3ig9dnikwiJDPF8GxuzktHw16q9AkhZ5UiMYUhK2qAzaxtWGSjWxciDZ2eNgLujBzPb9qwvHBjJyecPBk5nnYanQ",
  "key23": "2rpGUAKP7hZwbkTV1i4Kr3AypkXSaH2NpG2xPA2motMsDJBrhv4WPwvCB9THrRqYKukAGZSRYrQFPUZAB4hDj8aM",
  "key24": "3wu4AF79Ki3Y39sWeiBCZyd3QmqTgFyRPRXVGYE1Yq1ZLbrT6Cztv3W3Z6nib8vay8awtCQqUTMs7ND1KdmsPBAD",
  "key25": "48a2MFWQEfyp9trnSrqh1wBHURWAG1oH8A4mHz699hPrVqwCDC17Zsz8Lri4pMK1qZcwKaFQx5N7ATcyLg1oZSyn",
  "key26": "2iEKif9kwXeCSbTbu5hjLC3xRfNRCNu6hrCrBiaDV8hSwfz81xFa7NW8scA9ut1S1pwCYctxB9Stgzk9PjwnJVas"
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
