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
    "51sitnnGReVT74ay6pEjZREyKwZykmPMqr9m4JSy68PiJcrDfWgCuvpMQNShnFcNsfjz7roV72W366Tf83RQhCHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrRNb4PXp2wfvPuyTMN7ACS7MhJvE5RPTxu6rhaXkCrevz7hZU5gUY2HU8QrRp2tbM3u9oUggjKB8HP2CswmLqf",
  "key1": "3tPhJy1xXv8ZcqjTPxKjD6s7Xk6jk2JGb3SZ7SuTPnC6d8zyVFjAbVubzpMBVa7bB9XFRtCqJZLduZwWMbNzW95n",
  "key2": "JzA5gw2dxtEFxGKVg8LwVzXmCFwbgn97kc7mwJNhMorTGsD7rnShZDEvvwsUmAP5ASMafShQhkphg9tqMtTqNQD",
  "key3": "3QtSSQYqomw3pzbpC61N5hNmj9be9mxFoYr9Bcn4jX2qRgcJ4uErdxxgL8PFSbdCC2WkTG5UC4dhVrJK4qgnxoQf",
  "key4": "4HZwJP3iZoKSBjidF6EMaxqDPP55n8JxnJkZnzbBHd54JJmQVr2rYfgpoUgjUHsFryXyNF5tdsobgjHnBNzP2vLy",
  "key5": "2WK9P611LCnom7KpftYmymrFjgEuvtGPnsLvdvSFMyw1dYZ5EG1MGHzoPWZ8syYNtbBj19dy95TzmNL5ASncHofV",
  "key6": "x4dRtr5FVEgYi9R745EzAUHd4iStKJDQ339kXemkm7CYynCQFjG9k73HTW1ASQCeHigjMa65vm3Ke39rGy89Unw",
  "key7": "33GyuAyrTX4ainTLLomNfrBwJXavz6RAFJbqiUT5tXVmRxNb7y8P5LmG93tuJQoMZcEhrDWsDYUMtRfUoAF3nKxx",
  "key8": "3BvnRZdZXSxP9qpUaUCGvo9UtD7iXPwWuGHjNQBgsbRD9fqCNujWgwBRS6kqmx3vhnZf1qBD2k45kFZBzFr2owtP",
  "key9": "65kKJxGDuZHK5Y1YJJi8PjV73oJuTmWZumK9ifXj471dXN58hN9Y51rMXTimEfetohk1UeRB3b89XEtWq7G53HET",
  "key10": "5iCfT3CPsDTM1rPtguvH6d7pMks9mCJ3RqKbzF4jgzQKpJHKnFqPHCQ3NNfHVp9YaNPdtWf1FFSMoC21W7GsPsTa",
  "key11": "3Sv9M6sS7BK3aXhqx7825jgPHmuAcug6reoRymGc8mXbikqdEJiNpN4p9aS41KEGQoNLgHsNwR7XBh28dRwgc3Q9",
  "key12": "4uJMwKzuSD31jXdfwQYieaNCinCp9JhFJFUbrR9kNyE8qa1EcoEb6ZjiqeAr611TmwZu35K4gU3TvNyYCFyv6J8i",
  "key13": "2jFzdhsv4CSP2baXmK6WYzq571GjwZu6qSLdc4SfFggZuCHQTm9d88MVH8Cr5Vg41WfqeeR5XtieFTGywWfbpJ4D",
  "key14": "4j8oM3S3tegWgJJwNmWrAFWzHuxC37SqHDhM9VX82yaw26oRyLdapPZ4xztzZUvVY7u7K3pBLwXvNWCXLZkf7bYi",
  "key15": "5ik565AuM5qpfQXq2FRp2dP9qWVqgDwPddcAQdjivwC8uAMGJuhpz9iQ8QK8CzzTLhPKC8XRcmBWpTDM41kA517D",
  "key16": "h39jJkgBaDfVsXqAwzHMnsYYVZDMSJYmPSr4JkiSgkq3ugCneWXSrpzaH2jPS24heXC14pLNst9pVsM3y2GHDdG",
  "key17": "eitv33fQ2WJ5cg5soF4TeQdnP7JwvzUKxNwkPNCdhs4Mk85QNB3QEEQmSR4VGXe4KJEEj51Dh2LWkB2jG52JA8d",
  "key18": "25JRAD1kmvZPBwPgNYiz8S7Pe5nGcyC63vh4nUubyWdXJpx9uFDzTw4yB9aWY3BhwV7rRVdbpLFPqskU7Nug8ghJ",
  "key19": "383TSbVKrFnesE78Sn8WeN8Jy7zbiNnPGwWtCizPdWyxNdaQbzxA96MdUMBH3wSsix8bPAcMkQvV4eZTZ8QfmT1B",
  "key20": "5iSAh6QE1EvYNh9npwcJr6fAZwbm4s8SAbL4BnNieDKyroPmcQusvsEtma3D4iHhKeSte4dBQ4DhYoiKhKcvnSR3",
  "key21": "27LbFPEx9okg2dJHCGjmcmCaP4G3Bxm6aunvjf4nyEUuRgxrmjmb9gLU4xbSgfqVt4Arj74dqKQ2uus6zH1R3rKy",
  "key22": "3gy4GeNYFeiVFaVbT8znfJ7bxJCHpQJh6T3dz3nqiF5bzZskaqvHutpy2E6FE6qWbrDotv31Z759PoYgD6RyJ1yu",
  "key23": "2MhLcHTQcxaKJWBFSZgPeUpoZNX6haqKGVHoPrbssSG3Kq7reGvf84tfuTxgA9AEs1XapcCqQZbzGVZZ2xTSRSJK",
  "key24": "2C4XnFon4kkjL3wE6eGHmK9tZsJ1ZJw4y7KK357aknKvThu95reeXVaPGyPb5fA53D3GSo1cX2W75GFxvmSgveFA",
  "key25": "KFZeDdsaVkBJ6fzKWFXdCY5Tsov3vrb92JFvsehRepELzfV46xVr2WAyHxfdG9L1MVRTPWJJsDTZ4Bi8Co7xppz",
  "key26": "64U6gqgWeDVvhb7AX8C3KxL48Smh6rYdhzT3JC1NGVF5ewPeHK7ETMSCaKvv1qJQafdkTw5z26JfVZk4v2N4Wktf",
  "key27": "4cZS48vpZCuWxCPdKckauuu8VMUPg1bRfxAGG1vY94Tt5oSShPGnHV6pFHSAJ9dXKLkeMTNVFv3FX46ruuF4K9by",
  "key28": "5M4UNdxTKnUH9RkvX8L8ufMWeUFFGnriYPUtpPjdv1sR5vAxJtmZGbQr6mULts63BKpHHZmRB6tBrNE7xdfxTk8r",
  "key29": "5qtrCqr7dGNyX7vqiSmtPs6nm4Ma7fVx9XgqS9zY2o4jFTKmoMhPmjt7hCSKcQ5QBUKpJEJw1bCf3b5mdTNVTxfW",
  "key30": "3wavPHsVpFd2iz9c5WZPiLuyDnB43RQWfwKTrFUNxEjGWCnF76U1XViHpEQvRsiaV1HgEgs5KFiBwYqMNeyMEx2D",
  "key31": "42PXysZKz65M885uu8x44sbtioqtmbCSLWujBhosoKSP5Mba3ZLzBSS6UtwRZ2nRphnojFr7bA8oSDM6uZL36zaE",
  "key32": "LhXqBxLk6khYLQVJV9wSDMPUGYstZPKQWAw7rV6ssTBYd863UknVj3kgBuTfKv2C3yvfpj9g6rJmKt19bhZx1d4"
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
