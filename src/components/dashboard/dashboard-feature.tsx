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
    "3uGMoN43C57RvwZWR47Q2jCuBdgh3X1vSNtirzRhFwQ95gfJmXrStfnDBcpCFvLhFYbzSRL2PtA8Y6DWwTvijkZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HX4BWd1xh9UgGXiX8AxNNwBBgE1S2TkUWLNyJ2qfHUPJBnN9qMp7nLW8eWo7CP3tiVfXyd5m1wWVKYE1hxaPN1p",
  "key1": "2R7ZRN2sA4GtrAYypq8wAMnPB3mcaZSibqLcfH7eTjmZQFUebLqcc1CSWF5oXc2n6U2WB9E6TSHCCNcXQFufifRs",
  "key2": "4Gk3oq6xU68aNFBkTYw2t1QAw4F479gkQ7urgtapsYWscsJ1zgJr8PPDQQ8Ecnx5RmgnWkESFqpaoTLHYuqqjGHY",
  "key3": "3ima8DmTfzFucwPK7JnT6hsMKyar6EgZ8ETDB6NonDGZBHceXL4yLLgbF8SC5RpC6xzRPpgYR2iJtuQemQYSuXaw",
  "key4": "2judUrxmrs2ESMP4dyojkyqrVqMA47C8TY4vRSvMyXVbpM5xmzyT3Qxs1iAUintk9URPewottvSfUoZz9mFtoBkk",
  "key5": "5KqzRcxrK3x1kTRnU2z1BDMzTrkyx77E8vxYcrZ1nHmELcAHdt3FCEGEHDwqL6kxGnx6RW2pLz83HbTiJ1c3mpRY",
  "key6": "ipi5wdH7E9bqwuKZ1NEYuceSGfwdjmYTZKjrWDKpxVrAgZDGHYWzfwX9kqD3gZUusv97fVm6eft7do5mJQKYR8W",
  "key7": "2xUTLt4jmkqVgKzKq9rRdr846s9JHZKUFkXvvGhXAcy9Txk3igMAvCn2e2jF1FK4rMnUKD4MX28FQTpt4fbM7nCG",
  "key8": "nfB9Lw3uWhu9AXSvA15wazznRCxzeqa8Y2HHX3KPJmobBmUjniveFyWePEB3ZoYYoEzaFuoYxKdvT46bbjwdMXb",
  "key9": "4W6pHWUJZYkNwJt5dcX2h6QK77jxiUxFCFQrskcXbVktKhuixo56KSVNoSUeEcRA2inY6dkwEnXwdku2G8jcaMHE",
  "key10": "4aaYxLqPX5H7cFmYP8DJz4Guxzp1EFAxkVTiPw43NGgmQ7LUGMNjrDJDpxD4PhTQEY2r8b9uJ6WyTe7nEtRvHrAr",
  "key11": "33vchWJ3v19wzXscruJfrqcNi1h4eTDbY4SdNqqwZdBKPQGz4GB95tHxN9HdHgCceZYp3viyEB9AvrSqYLwywiM5",
  "key12": "52qjgHxaP2h4Rh1VFyT5tmxSWYokgcJ9j3oMwKgtckWiDetQgZjCxqYJL2ANUuKQDzKitUiUhQ9AydHznmRJSB24",
  "key13": "2eJgKF3JenHvKo9pW6Fqv7bVYSrqqgXvsWUkFai65aqxAPRoY2ubgE4urZYfnFpFgUMgvSEx6csKH6aoLSKMqA26",
  "key14": "4SxA6eMnncwC7EUdHyVoNsfhVqKvP4kTqcjkmpW4PsZDdy83mNWgTxaeGYwkcXaA6ZAxYGQYVKH2CeWwAhb8fX7B",
  "key15": "3MJpSLPAHgjbvRidtXwp5fRPvEZpaV3pxpvzTjbeAypjwwaYH5YX6WuEjvNPoQZFBmNyfMaGBzHpwb78PxN79nVh",
  "key16": "3QenJgSNfDnZij9JdnZbxFnocdnDDqSCCacRmQdFwXBfxCmvQ9WgpzeReokvswptGAqR8NA2dZPBDwRqsD5aQCN4",
  "key17": "4dTMUrZihRESvmbK9okHnqeoVH6W4f3HD9kYPnvMGJT2bf59avvswekhkZBZMrZXkopEj27h2qwvG4WSnckhgMsE",
  "key18": "4ys3QdnPurybQmUjqtVjCgAVnbfdMT9GUAWJgNrRXeAziVQGdZ51AQoLJSgcbkRo7LQfB93PcWpwfHvHPkM5AnD5",
  "key19": "5CYePopuSWLbBPbA9RCk9vDagMGrT7qFCsuyHKSWLv8y6hSVLLC7C9iW2B3MbwLgXn7aRRhrkuopmbLNGcxnLTeU",
  "key20": "2AuoPt6LaTex3QhY9GYcjUMnNpBA9p7bByQZw8M4wbMfv8A6BQhtFzCjSrzEZG9kC4XPx1LTkYUoB33D35uBemnh",
  "key21": "5h5mAfQ2bZDLHsxJG4xb4z8KCSB4amZHFxvLMNDz2DHsRMYq1A1Zfw7tp2vGVyrv2rz7zY97JcfAox1XUfUY5rYr",
  "key22": "2hCQfRsYZfxQ6PcwmfD7mpQBkVuMk48EW7CEKRhKs8o821Lzy48NbNiNWsadLTd1669R9KvfTxCwVuGX5BUNxFRD",
  "key23": "3AGKeb1RxkDKjYMJU3vjK5iVdA8exq7pDohwkj4GTFXm6jNEbvJ1XwjuMCy2Gp8dcrUXdJwj5YKe2aHnmqrqoX4E",
  "key24": "4AUN458disqcxXvPXdZ5HcJGkjRCbYu2mBasis2SBbf3qtV2ZQiBawNUpexQYcYRKg3vJ7fQyxyUsdTJrm5oZb6t",
  "key25": "58fDMSkLeBLSGX9GUXUcroQ1ryQnfFYM8KBZCp4Kdi9vwDHwkrHxYQ4hc2o2qciQypN7QxkGNPTAbFTY7hSNxPN3",
  "key26": "5cXB3MnvyhLpjpJKPGDTGtUfC22ja784WHSrVWaabGLADhFeuLJHskQamxjWpoiHSWTF45Qx67vZxaNf6D3yAjBi",
  "key27": "2EDhUM8u6UukngyST5u2RQkHLMNQbuvn3BTAGhZMTQZjmEkqDo4yozMFmVNwkMTKqCEVGPe8omDZn8GkhhdFzMuM",
  "key28": "26ZweBQxuqfKg8rTmhjhnwZa3cLnEYFKFKzKdTJCwp2LLqGxJBBC19o8ZUo75pU9nuoiaC74xQTS4CrAvo3z33Zz"
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
