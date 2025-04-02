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
    "2rGR2bTVTRgdQqaA97ohUUsRNhxys6tyrF9mqXRvbwLg5zHmimTqV3WMRQ8LTJPFR1Ra4yBcpoXxED34mDVLeXKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m698bGMDyCsounKx8Wocrz6ZzXtPKzMkcSjsgc6hFurj8JomN8vzjtA5VafPYAHBAPBgZb4JLdE3X42mEtKp5Hj",
  "key1": "2ddLJxUoYWyoQaW45mLTF5vhGnZez144Sg1iuQ754en7mBUF8z5DDHXs3LmkTV8x4YuZaktLivziysHMeYZkUDzo",
  "key2": "3b2YA5iBvkZYzEAg8Y6q786hN8pWqSzUDS6uFJP6bNkGnPi4R3LUt1fg19BmUMTbT3nJbrWfpKqFpuvQvXJ39jNw",
  "key3": "4sZEwMyZHqUL99xzeBhZ3GDVUSw9dVaeLAeW58eKeFbUeY2yhMwfJ42s3RWmW12xeTH6vAHKuDwtxYktBJxowr6N",
  "key4": "2pAMGT6CrqDrznZfbhN24rKcZyp41FF22WGsoCQveQMGBPRxbJCiSaZB1Ruh7X3UFbYNL5WUG3gKtWXd6Z1N92su",
  "key5": "5jiBVcaKNo5epERAZ6JRuPw1owwC69urhcf53rDNPfcnNmLx2SuCQ3pMXbozbp1FRSBkY3jQ7jqwHtr7LK8JS1PS",
  "key6": "2yosHUccUWpL3Jn9dV19GtUuBcDi7tnwVdqguhNVNpHe7ncfom7TsQKi639uqaMPdJ9fGcMxEFocAZkpJv8qSmaN",
  "key7": "2wFxtSUHzDxbct9PtAuttWM5UCH3vwL8Fo2JJfhbg41nggqwxoSUG2BRPHTwPriyWbKiFjW2eJcUCBcqEJyUNcYD",
  "key8": "2JmdADsEewEXqNUfjSxcMGmtJfQL5pKzjFqLADA8x54XjacU8hToxS79yNejjB5WdWJ55ZofpETb3rC5Ky9FmJkc",
  "key9": "4ECx8VW4oCfG67AcyDssLtgXz1nG6yXUkwHM8an4TXvnnY8qbYrZh3DDafRCRdpbyTeoZyGsauC1vdK2TSHysX4r",
  "key10": "28Qvw11RPcnw8txDTEKWNMgWh7oqcBtSYmiyma8KTPUd5Bdwitk9zmeBoGGt7VaKeX5LszVrPsnBhzZBy7B7teQR",
  "key11": "3UzJdqZjxwzsQCr7WmRotRjoAftBnDmgx3nN35TcV6hZC2zMV5PZUC5ocVKpM91o2RUtFJRbrXqSrJn2GQn3RqQN",
  "key12": "5rx3e41GCoGu7Quw66BSawQwj2ytPhCvD4XwuqdzwFbuuteNdGQ7NtwMLA9m6odxXBZ445DLUKQx7vm9ejzzHCm8",
  "key13": "3cBPRnf46MCFn9dqPMDYprHTuArrBnmu6UsM3y8f2uQtSGCwWfksDVVtaizAqFH4hNWro88HP1dVbryFpbq5QBUR",
  "key14": "2SM6sVrxh5qqcn2RrdKnATyWo6s9Jq3Peeq5oQnA7EepcbLRhhaeAULnvz3jzotLj2hvNiACJaVvtPa44tNUviJf",
  "key15": "3ukfQE7P9zEE84NUjfhTg5x2vQdLaprxUHTj9V6X1VRtbXdwQmPZjuGeXXeWW2uJvaCHyp6mhXTVv8anXtkESWY9",
  "key16": "2zLgMZZFUG6aPvtKbmytP3DBe5UivdonhJ4Wq9npk9xCJpJfqWocjkSxwpPh1WQKEhcmb6ycp6ZJ6jEbS3UQUbns",
  "key17": "426863PgYHjfvXTpAi6VLqzJPZgwNEmpjgpuDTkZkP8aqMZJmQGe2rGxj6FCgEV79guzFXvbaPxCh5tfSiXGhjfC",
  "key18": "4VkbwDhSLDk4sfGpdMaco48zAVUgyLrMvuz6Ef1u3Hk7ezdcF3ApDanhLJXZX8E61ysdwtvDX5yBuTcbUgMRZSKC",
  "key19": "4G4gLfkc9i6EG3J1MwTWoXHWLYmTs7eiMTsgKvrKx6EJ5p9aBWti2zZzELeZ655mYqkNuk3GnZ46wWNiTFFvoyLU",
  "key20": "5bnXpAeMMJAAfMyb9hbYJVzSuJpV6TUZupXdPZjURJLPPrBXn4qhALMXT4i1waMQCG1izwehJCPPb9whzsoR2c9f",
  "key21": "35Yf7fLpx2C251fXgTxKqAGM1iNDNhntg2tPHMJ6CPDoU65ZiuGAG7menZAjXkQm98rybinHgT2HG3XPG4zMgZkC",
  "key22": "1mzeM3LyZF6apJxHExzHQm8CCvBZB6SehVmsnoDo3Pjc34GbRvUQsRJ5eMuvwCWCWyVK7zNwaFnowmZQvseG1hs",
  "key23": "5wZ1aUuzchNwaZhf5FMytybwqzS6u8mYiDagPuHFNbQxstf1tAfjMwwsXK16gs5Fz98CAgfMeQbCgWb38ze6N2G1",
  "key24": "4dwwTv43x8qGUFXMM2VT5ovWzeub5fQeRzeFGacEG5cV3HVuUcSey2yM8BSb8HjRpbNVz8n3maE1JU1HD9XCNsvJ",
  "key25": "4a5yca6FYsKSZRdKsYScwMLN1uq4S7JpS5x3ziehYBWVwC4TfYBVeSP4x4fbKVLRhdATwmpe3YTasopTGF4NCa2Y",
  "key26": "2pkP2rGCbfKHcQ6N1K5dQuH9EKjmmtkW5Pa6txzkqwUJBiA526jfJGoXiDMzDs1zTiqcysarX2xXoe7RKcWUazXk",
  "key27": "4D9jVhUZQ3Pv8ANxAtPQFnM5gG348oxR9jjTuQmWNo6JSzij5Gaa5uNGTU4nnwDRnm3h4R994CL5GatnqQyspGUL",
  "key28": "631feUEWWUjgvJxxbR6ohfRGQX5QVVDZuEUFoa3c8EwW3H24mM97Y8X11BwFziLdz8N9X3YeZHXFYyAjfr9NuHjG",
  "key29": "46rukLW3MH2RZLzPibkXPGWs2xsoLx8fpepRrekG898GU6rRazRsNkHk5KuXotWmXewXr9t5TAUE8EGSAonhcSxR",
  "key30": "4ym1Q9sN83a6uFp6qdaiHvpkyKP7WEoe8T3FeRnLBJJEqawSa1c7bKPnta4s3oLwQMtcVkftgKA4XTFod9k8wyCw",
  "key31": "3mCk5a7uuKcDWGKHv71eACJKa741vqfKTsyCjbBwhKidssfzh9xcMYyswyt5VSNaRFvKz1NaPmakuhR8xTxtdemp",
  "key32": "2VZGfMCtHqoeZQLp9HYzME55PYbRCPDamwSxzQSyC8Fh3ak5R5DwHGN4vZq95d5fSDZdkzN6zGEX8RCLCTHabXpN",
  "key33": "512YtAAzvoJBVtfwVgrcUXqcLmhG7Ct2kEoK5qMvyKw3YLzVAJMRktiyVZhnTKbKJQ4voQhu6rff3u1S92QHPkF6",
  "key34": "5QXsBfyU3nMBBumzQmdAXSiaZ2vKCXtyW55Y9oPpqr3ykVpRmLAECzb84tP7npTd6oNF6sUekt4SW7tBCNrkpAiu",
  "key35": "4FQEdveqE1a3Zc7tBwgpcV5LkRxzn8bBwKAomNcZRXWgiKLpP4Ci8q1iEuw1pTGT6NKvgQ9ygz3dj5K3FeLquDbT"
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
