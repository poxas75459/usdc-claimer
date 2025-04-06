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
    "LwKickkjQFMyFTttzv9qUysXnB5Lq7H4PavuSW4T3CyuBaR9bj6Na4z2DkSqYpxa18gZKQVVPJ81dTQHykN8Cma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJmu6WbZ2JmyLvmVeWcXMsxo28JFnqn8N4qRP8aMD1LwaDVUQh3pmgkNxkjaAZahBG8VCYuVuARhZWwKoJ7FFNk",
  "key1": "3vm7w5uP6pAYknTf68uGoLTijLhndJCjgkVUEsTvG7NNayS5TBph9DPD1zMr3uyyv55YEXagEYAYW4sRotsSVdgw",
  "key2": "5dq46j8sHQCzw77E6Y5pHDh6xmzJ7dH2ULvkm6p5juMGTYQeg81mhtwaVxs47K5xD6s4MSgqoQauT9o2ap9UF9qF",
  "key3": "4TNwKpai7RZAsEG4SnF6r6mPpGbXrsP2KmFHYN1rePgikPx8rirjDZw63U6LQTuHuPLbR5D2nC8ZdChSKDDgr8nz",
  "key4": "5eikVAt1NL8FeBFgHysFGdxf37s4MvX3oga9vtNJ4MzeskThMaKXdFCeb1dSvw5zGFJknRAkAphGuZjw6g35RmzZ",
  "key5": "3URpZjfqKKRbDADgnW2DtkfjCfSMGuEo5aEcp5uXHNoe3m26SxAosiSiXvL5v9LMviZcTPWxQyqA1fLmderMxYv4",
  "key6": "Aw9mVhr9Lkb1A6MBKBAmjycxzf78oXVMmXnNpGxdVWhchEB7LoefuFCBmZBMuSqUB37Dji9edfK52ZitaYJUHW9",
  "key7": "3M43Bd2u1HZtXaoWa8jwh3VTGwKuxFmUHD9BvJ1vVc55vEtWpMa6izsbFhHngZDGUkdR4dik7r3gRXEfagAvSoKn",
  "key8": "WNaehh9LuSdbYohXZhVyRXhw98RnBB1H1aLsoxJQaEXGjmGMRbuSzpt1nWo4CnuN623SuvzDuJs8EYTiEsAVX1P",
  "key9": "2qSVV3vFvhtGnJmMSBKYmGShbgiC1EHLvSnXhbnL4gLqaoR3x9gEtEfAkfrsUVoJkn9EiAZyy3AspMk89C8GF6XU",
  "key10": "3ddMFkJReWpzzhErjqgSPXuJm5W5ZKvQcYemqE3GetR3TgWcE7uaZ6goeMWPWWSm9FdA94LfK8zTsLSUXbMKYVvB",
  "key11": "24mVsix8G46xpXH5KT4ECgjz4he4aQZ8fJqmGGoRmpUuVgCcFmTryU1WbpP73Nm3NWM3jXb3uH31JeKcoLm9RAsg",
  "key12": "3DTpxbL6FmFqr43SAW3P1M5eX1k89iVfCLwJwyxRPdGYGyUDGsPn5mRHPeackWUNPTATt1WvrtZYnQw39peiVPrP",
  "key13": "4wD85X5dWPjPRntnFRVejqU5tsircETmXnwfFNa9QQtaUJcu3cYefZcdTmrmQnD8ndDwQfDdvBiyzNebLZspWL2N",
  "key14": "2E6p2syu6FugXwC2Rndg8RNWvYqM3aF4ca27UrEZsUmurX9spJHx2t8kX6QgDg1fHUZCMmMobAvg79Hu8KUKWk6s",
  "key15": "5x9HH1itAgteKHtE8DSMXjGgLzhkoFtH2Dv3Q1kdxRzubBgx2G3jZ8XfPWoXX6n22x8URpddkYYjSbXk58CN81vM",
  "key16": "2fE6cVqxrHwxXdJr8Jy2Uf6fe6TQtwPQN3bmzubRrgjni1wyQTQ82xEdMUyR9Fdg3t9ZiDCm7wzxcfB4RUSdVK6g",
  "key17": "4hWMmkQYQF7rF5wi1LJQQ8TmMHRBGVNMXnjVqAsNEeNkDKe3bEvaJP8H14rhhvPaLUBHXJ554rZX9JpANM54hNAp",
  "key18": "FzusAgK7ded3ijewubdgxNdXZd6ArVdQujkjcD8dxQhT3AwAYJu2im37v7u6aLBY45Efg8uCY6MP6cQiyYpFPae",
  "key19": "4pZTXcUhNamqvWdF1jfasFrNe2HDh41rHcxx1ThsuYrebz8ksttFue5G4k1pqmjzatXa8kdizbREBLC5TSYskCsY",
  "key20": "2bnxVTCkGJS7SK3QfEtwGR7SdAz48aFBqa2VPs4fq4GRcFz6HFEV9ppbnkYDrpjt2HSdF4trwWM3LVwdFqHPokzx",
  "key21": "54DVWhBveEPvKTZ8DDbjiSqYWegQRpAzFVsepfqbnnGEiWcK5onGs6qqz6pkktvpU2t6oCAsgbyrL3KYKNDV6HpS",
  "key22": "3xAPJep5W4Mo7AjPsu6DDkw8QTA2iJi638cTbsAc57aaX5YUqgBguxwojhUVZG3xSqRWVQVLpiAEecJvPkFT2gHV",
  "key23": "3igY3BqMCH1QSgtUYdG5GZQCEpfdMCMDVz8iYHPeV5ofqWqQ2FnP462HPyEURXJMbNLFjnU4yPgK974QSSSZwTgy",
  "key24": "49qiWHvjU5xYGpzTn9KGAZDGyoiMc9aKGZgXiR5mtBipYz9kHgxtsZGzqmkGyUzcpsX9jgseHUHGjG2H6gXXCJwp",
  "key25": "4zpRhsdt6GiSf1K7Jj4ZNsH9zUy1hJMtqKG8UR4FPNNna7KWNkAFSaTw2ApU3JLUwYLtnzaVZ1eNWHne5tpJ6CCF",
  "key26": "23gH9RGApg4ikNukSwTcPcGBUrL2WaApPgx17fUZNhx93jx6izCcX5CvPg9TaYeyWYSmwMr1WPD3Y4KaXBiRwgbk",
  "key27": "3o8QdSirQa3qUnpfL7KQz8hZG7qdfUd4Mom8hpUNsgwyn1oADhP6adthUd8LxtQ3959sEYKuyZ6rmwYZxFa6kJ9p",
  "key28": "4YeKWJzSbr7qwoKkhLAY3CVbeew3zqzFmSzXmeSWyBU5g8p4oyFAQ4djFZwQqqoBeuVuhMUcD5SphuXYKCSzHkSN",
  "key29": "5cNY6zxZDYkiPq5VnqzBFEjWbwDC2Zb3CAWVe8XzxBhvGb72yX9U59nSm7NhjJTbdUVAJNKB5ShppFp6QaTQd9dS",
  "key30": "UoKuuhUaxmcsJVKuLCggPbgvEjFtn9cK1a3Yg3RGxTpvNs135dWuiC1jJ42EGZ21AFk5kQEoS3DYBPGwMHWxHWV"
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
