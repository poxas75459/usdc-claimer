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
    "3oAvdveJ2cNT3B22aqX4KcfJtbrKDLzkYzXxtVm9m7JBBwPBAPE6c7Yh1CyTg3w4gNFwyKyeE1xxrsDvB8b54BPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzM3NsHq5WmADMB1MGc89JxYSJBNJhMwNbab8Ddrinaqme4sPGSGQvzHFQRrja63XFDKxKCdT8hNWFaAVjcHcr5",
  "key1": "3CBBPRWn5fSxw7VCFSC9LzfhCWydBhw9pLPE7yRXofcYm8yk4EJHQmyZ7capwcWJzS6zmnKtoMD7MjeoJBE4ZT7R",
  "key2": "2iCmCRknuCXRdiZfAd6VG9DMuwHJDhUVh6T1N3jrQLNuAUEWCH9c792Daje3vpxGdjzXETuR75rCWnHiw9BTSF2W",
  "key3": "5MzhBVqbzb7t8SGfSCw2UFy2mRFZCVs2kfF19R6D3BktfkfLJKR9TR2pAiz2qWoh8FFZXpDNQdXYVhrmCApATibR",
  "key4": "2ZThaGrzBnFmD4HVgY1ZJ7QpwsWLDYXunyMf646uXGxLvtpHvaNC7idxZd9KmvdNYb6Raejb1BbTmW57ay2bQqap",
  "key5": "2x9PrnJ4V3ZEW2VnenDuB3UR7AjXcDq9WYriL4HxMEsJu7vkJHMNqDkZSVZqvdBSBQBeCtyuQV2mQUDf4qrmCAhE",
  "key6": "2BB6qgqnGFZw4xfhXZASARFu6ysrMjSupRmq6er69CKAz4JHSQMkvigehyJ9VoM6NuivPMjudJSUM1xPdh4VWu6n",
  "key7": "ZDNsHSEuUVA6w9JAhrHPc2TwvKjeCtbb8xPvK3e6KUfs9154CGXg73hBbRqcVn4ZEakLgEYe8m8i1BxxHKkJ1VT",
  "key8": "29nJVUrqUCaa33stBxm1fzk8Ghd2CHjyontevDede4qMQkUxnQVHBG9ywEUR8o6wsfCFBPNR4TcGKUyPNAgAU5RK",
  "key9": "3XS4hqFyyDs3kYDto2kfCaxweHBwaGsCL377Br3fzk1jnSicu58x3cGUPw6fLKYGaW7JY56HLzZuX6arecBXFrRz",
  "key10": "5t4LqYYhgFxgyqJpB3525u8GvT7pREa5qweV9o2jnzD5HiM9NiVp1UzViZ7N8jcUK6JbwdHq4FQXZ6QJkvbrWgy9",
  "key11": "3hBdifeGEUWa6aWS59B6MHKiDAPHgZZKAXp6VDE4o5GUWpQPnE4HP11SBwVw9SqKLBV7Ui5HWApb3ozJYSY5teNx",
  "key12": "2dZPtJEwsir72eNGrtrEobGRWn9Nm5f87akoLNm4DeGvSWfbUw2qHfREY5RWgVRRCSDwMQUhggAmRJ2DFgUUCsEE",
  "key13": "4vNbwHPkU42154cRSWCVm8NrfybwqCq2v25jhVd5BGmwChCPgf2ffUfaW6KMLLx3WCd735zDHmFqfY2EEZgGhErJ",
  "key14": "iQv6E1GA8Ak7a9iDUvEukLRQ3CfbnLRbgd76QDuusfJqRbEZp5ESTSprohwQSe4uijWszucAzkNeHMo3pBWGCt6",
  "key15": "K2ksHyCnajmk2TiLCBRd4knQwax7S6YTTknwATpUJAdojtJxaPAnt33Aq9ZouuPHe6fnTKcVRdb1UsknnSxiv7K",
  "key16": "2EgPGcCojrnr48unc6bz88frbNRMCDq2Qovemje2qJR4shTZyaurapmYvWwwJq8mfD74f3SZ8bXEhDAsxiohDMaY",
  "key17": "NUUhajUERHK7vbH57J7CPnPtua46ShNSevhhwhjSgNJXgvU7FJKiSZbBZ6fsMeQLM7tZWTHJxvNNHpqYwtEB38H",
  "key18": "5nJ2rhCPwu2JmVRJkwtYAsRtACiNXd94S7LnNogNzZKKrDMvNUP6sJenE6rAH6X1jSKPqECyvyYeJwSCAwVoPu1p",
  "key19": "54JG8cpU8wnAdowSMonCHqAMhSUDK1PfZfLaeVw8C5cLmZUaX6UMwC8Ps5qCs2v2szBFR4aSQ1YEus3J3EjkMf2M",
  "key20": "2s5cxi81Zy1RFmBSY98VQoTcyugfWeHjFu3H1ydc7Yvfnk6P7LJEMxUJpNrMAps9aH4DZRPQBGmxP4mpiFWtt193",
  "key21": "4139ygz1jFbwurNXWdhsbAsi6qgom6g7EB8Ra3FQguRvkfYAdE2qPBPzXJaEFvqrkatEDu3MrVWh28AgZ9RDXsBH",
  "key22": "4EmZ8ckSWjjSVZmPAhQ6mksBzi39K3fD6VPuqV8dGNN6rZEXk8pwFonsqfyvTh8gLMaTejisRe183U8biFsedpxs",
  "key23": "2db8CezgvnQf13YvH7EtQZGNnCLatPjfkALrr29p2vWXTfxtiNmG4xPu5YThb7k6X23gnKdXm12P5J4rebd52z3M",
  "key24": "2CpYNhWo3mVGeCuH5iXDYB2QRnH13EQHx6Dvut3zqWczyqKWHMGf5C9z8phqANu3SrmjU2U563AdMe1jmTN9ehKf",
  "key25": "VUxQ44ETJCsg6Wrd2Bq7keLDbSq3rw8jo3VmwwjBQtggwc2Tg5utvk5CHgEKZ8N5nbvNRk4fCE1NHooEtWv8L5y",
  "key26": "666foUGV8vCnDHvmK1n1FGiDGJPG9SFXZyt2qann8EiWCK7Zavb1s7WXG6FfQKKjt3SdozYVk3dUT5wE4ec9iFZh"
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
