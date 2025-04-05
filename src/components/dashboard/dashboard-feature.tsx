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
    "eLanRVvRgsD1GHYW6LRyEvjwKHxNoNAUHdZxDFs38iB5Yze6dSpEsQbN5kRuuqfvdtNMXyyUKqJyTF3kg6FyHHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DxXhTWkrop4RTXFMrHsVk2K7Wdg1ytpUPy8CNXuTdcVv6NZDKfneZdGvfcmqdkeRS7y6cGwY5z4LFDyuLNKWvUr",
  "key1": "2kFidAWuxoSCCxGyFhoXeny923HmaWpAr5j5vkTCzV5kmMwYxjYnKSbFhwhLoYAB2TZAJVPFPhZAW6hiBsZ25c8U",
  "key2": "f5ncF7eBCHrcMp6WRGwriXRNZF6x62K3reScpSffEhnS1dwEpBHgfh3DN5CgdgxWHnzdv1u4ahJUBWKXtFtJUmQ",
  "key3": "5f8Jd55rwptNXXzA93oYcLYKYRW53BzP9rMEPwEYHXjoP2KXRF8K8pRnXVaRZs5FScgumzLXgswEHVDEyNoee2Ra",
  "key4": "2XHU6aLuQvFHrr5hArtoefdG2taXX2sHsrB1jzhKrsbM8XTxbymNnAWJmkkm9nEDUbXYqTfRbPB5YDTF6vsfZoNo",
  "key5": "2pkZPEkASD7Avvf4WuNKWsFReJtuwqe8YMASNLPXmuJ4Ax3TT6v1yFvTps6tgEzRV18wkUgKH7GpK7qaaPzZBjHh",
  "key6": "4vLTTTZqNs6MFGwbWv3mMmnThMA5TK8PAJyWw89TKkza8RjPQfTe5aJ5FkpMGwpJzk8VWkhvuK5jaf3iPQZVUKCo",
  "key7": "3rLkDSGvo54cpD1CfwygwkBmU9TpXKPUMUHXYNhsguEsvxg6fCdugrErrtLFUvYxsTwKwskgKY5HyYsxvXC8FVWP",
  "key8": "2GiVVhMGbjCpftjbXE62Ytx7HnGDZmwvrkCfQasuRMaWW2XZMJCBbLSkxER4zuMqPARWwsm85DSPQYV4gE1DsWzx",
  "key9": "4R6v1AvR8iTJ5cqvH9KJisvxxcg9JCaBjFcBZ3T4K6h8BnFe1RDEGZRxA3fPKtWi89m8ihWAycZnzpZhfGAgkbjR",
  "key10": "3B3gsJ8Ri9Viq9GrvYkXSTAzHxoY72vPduRgQBjvBJ6AjSUQygF8TeyDbZegD7dRf5N7NNoKXjr9TzsYpF1iLdWs",
  "key11": "41zk9ZLmhNL84r8iSRigbxrgmWHGU3Re1N9gzFBgpe7jrkEmSqjbnkXUf7DNqVdvXDPQvuLm7KDuanEwPhgHW3VM",
  "key12": "4rHyxtQMmDeSVEqa5QbFbtudmBMRZTh3dTnwdXNrTmCJ4vpMmicuowm1GRCzfGryg68xeKNxm9vEjv6dg4Pvscvk",
  "key13": "3TZ1wwZdLg5hKmJWdL6ZouxiLREQ5YLAPKzyJLmx6hP5HauqREwihWcQJdsPTPiU2WhMgo12ZDxbUazv3bSFzcPS",
  "key14": "5j6CVFHhLNtjBdHJe3ZUxUZbJA3i3SDCyFUPnizETJqSbbJS4PHqACK4SxSVPGRdhBkgwXsjckhNsQohGUqDmKSL",
  "key15": "FXzduRDKn194BM4Q9HWT4hgj4HEN7wdFVmcNKb8qJ8B6XY3oAfFenjpR3xxrKD2Ys9ESgW2mpoFMMR9tDgSpkVh",
  "key16": "5XEkBC8GpE46qDyW4FXiFQLBDr2JAP7hm4SUGvgZ3nweUDBszwS75ZTXmGNbGAwtRcF8LickRKP2QjjBme2D4MGo",
  "key17": "rf4ZGtx7AYi9zBcXhnnQBng7mkpB6PsudTYw4yvRaCvPBSwriZ6UMXqMGe6QYfDPXDPc6icFsSrBwzLLqEWU5UG",
  "key18": "2rYrneR5VAtY6GpPS8FMaeRB4sye8x859RmWGhx8tL7pRddkhZKjyNXuc8RR6HUpHXk2N3bfGG9jPyCXSNKhs2mn",
  "key19": "4ExDckSj9GD5mNNRt4DzUK2m5imNUHZAXdyPadWcgizEPK3Ksy4RVGCYzKcmCuxDH6CZmYVJ7XSFmvSoSYz9jAu4",
  "key20": "3nDYijrVJsJQf3F45jDH3qp7sW1coCiAmtUSJeHiCwXHhhvKZXdQ3L43kY9Fjc1zNGSrTYsMSVi1HNvanHaNxEc7",
  "key21": "5wJGs8uVSbkLPF8BcosjTcrrSsZytK8xBmLo3EUP3Red3NPmAx4JdUnNwSXh5rXWGKEpkpKiciXMJV6R7UWTuSFJ",
  "key22": "4k8813mRzQVudsnN9Kjt5BDNX13f5n2dFjSxeHcPhmpiHVXKmJtstuyDkx8jJwogDZTEJWEiLGQZ3LQNdzqnSzss",
  "key23": "2Jhg3V4iGp1p3Jqe9XC7beAHSoPYM1qfYjXovsuLezGG2sBXVJTY8ZyY2rXLtkZ1LD9RUpVLMfZqcHyFySJtV2uV",
  "key24": "48eutbNFDtwgwtLiYnzbFv1DWaX1gexmSt6UgivwBrJrc7XADZMNDFUWXvWfQTQfbDWn8xQhYDKtQxigSstB3So8",
  "key25": "5ckZsajDo4sV6ehmk246GyMJ5jxs7bpSgyzFxmWh8khhGWTU8UgPAZmncmd9wcdHkuo5nyeezoQovAhn1tjXgcDZ",
  "key26": "6GJyHdwPQLrxzfGw33pTHUSHyZ1veaidqVafNVbyNuVrHuRh3ZaRNPB2cZs79AUfLYEwCEjEGAU1otiqRhX9LN6"
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
