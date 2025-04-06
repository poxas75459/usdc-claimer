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
    "3j8LuTyJvD3KYk8G5a1x4vGDZ4GsnsbN2undPB9CsmD8G2wgP6E7pWs6DWJFGEjbqYAJxabx2TUnfmqTm45huyCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1tcEtcrm7BZM6D4JtLYHt73H2GSwJjM3kvNw3YHaCr9Bh5kK3iFg1YZmktZFQNQ4ycBevMpbtGrXcd61vE3Rhx",
  "key1": "4U7HBvQSJ6dt8JftRJDec7XVVYBskEMCoJrYupCfcZvVUJpsnBpw8Xy6f64n8JVaFAyKsVJqNYeDGZNYGM4Mb5pW",
  "key2": "2d4dtvL3boJr461wTTGzcPd2DPDSuq4xtmP6awxNT24CZo2tveoKLPKDc6AwxH9LDqs6MMZfPg48hGacX77BJN6z",
  "key3": "3AC6MBFHTgzG5ss3cbWTQP5AKrMMy8XPR6zPc79CMJ2zTDY1UTSK3e45CEFz4bXRjBBpu9TdQumpvYaparyAv5Ec",
  "key4": "5DGw45Tt8iLeadfaVGNwC86u3o7CWzVpbE6jmh4Yd8kQcJTt6eSKhvKrrPuqovRECF1QY9qjZ5Fn9sEnZJjFQ5rw",
  "key5": "24GZK76mnLo5dVjBBo83oJmEDd5wCyGWA94jKEvZhZexvJuBwx1AfgvYYhKxNTvQ8pkThFw6ZWGRTod9DZ1iLbE5",
  "key6": "6qEUbkGKKWa99rLDPyceQcAeJLtt4iDEagHuYHqSxSqLhHzFTJ8Q5VsbqDzAgtZgQtmHNavdymonxHtFRUtKLeT",
  "key7": "2gzoo1jvfQUSYVGf5BhPsFNMyJGwHN2Rt2eGsb3FbzhoT1S56Vw1Wpi83F8XLGDNvNeyfZr9m8WxU69mQzsuD2tF",
  "key8": "5DLD2xkQruoyFRh9KLSPmqPrX6yHowsx7zCrD1nY1ikXDfcG3ytcPfAR7ugVxH7uAfujC3wiMyiSQdNqSbvpw9HB",
  "key9": "6iWpSHAUzHpx1qJ25fVvKV5wihxbj8ypwhuJ48phruBqsLTDw5WKxkBboG6QWuTKa2NE7DRcaZLiSwvR6Dcfrhz",
  "key10": "5yQ3xAxCCQwmNpiLfiqfZHekFaGWXaDsMLEPndn13upCi3qPZHG3mYbbPYKJAcvnUahHnDa16MH8izHB3vDysSxP",
  "key11": "3cDZ6K5mQupE4XGShnta9KdyDvupgvvax9mQ55AKyXSe6EVj3qBFtyWWvLphRJTPd6Eaq5LNHKLjy7woQbKsUCjD",
  "key12": "qu9jggkPjYjFhhJoNsHTKTiuJjABYuCg2KFjK6qpzPRJWYPbxkGEP3tkuRYtWWFLBnfbUaAdx8kaNvSgm1Ni3ZU",
  "key13": "5JVvAX88e6U6CbXVDnGWa84cccCxtcRu6tNMcrHfbWCHh6XHS8PxbepkBQJMVyJAWAFyaeeKTee2MXsf5wL63LzM",
  "key14": "4AHVuGryyYTHGSNw4ENmfcd9GD5yfCFzHN9ZHaA7oeqz4FiBGmswR5Res2ysiXP5a9mLi3TAyamQCz3mg6ou82h6",
  "key15": "T3y8ozaG17ojzxikidMEDcSWRHF3YU21QE4tURG3LM6vAbDP7zUr9KcJuyjPPcmCgDnsABvfqQ25wydwT4kGuXt",
  "key16": "2j4neSz6JmpS82bVkAq9FCRTfws7V22NJC1fiJNBMrBjm1UFDDuG9ZvsKVmK5S2NHt4fxk72purZbk7SUNx7XZhZ",
  "key17": "5keL5eX2LHFjRMKhEhTVfynKvDfLSGhr54baExpcdKtmxbyqtNK46xK4Y2qj5ySpAREAPPadwbfNLXSWS5MEFT5V",
  "key18": "3W5qr8WJd82ZVUbSHprEZG1NtCM2yePWBHNF6RPJz565dYuXDE9ZhaBWLFptEXFxjcbn2csfWb2EYUiq9cwowRbp",
  "key19": "56X3UNzF8ZRmbFpoDSd5xz2W4PKtx8yjBSEpAUyvuYwuy4QkvaSU17GUiEHyJ9U97sawnFDwvNuVYf6aexDTpBuE",
  "key20": "2dgtV1ecHYDYTWxweKywgsGsjbfTJfCzst9EVxXvnYxKNx7or7drxdEQ8JweGk4pjY286PysYTtvRY2NTtauFx7u",
  "key21": "54s5DWzmQHu82rWtJK6aytKECUbw4ZGZqMh6M24JTQyHKhM7btZqfhLoXttWYncoWQ55hd3wC7GuMsfQCzrHHDCk",
  "key22": "4dpnS5YFp1ZJGzxfQFVTs7BZtoZtXzfKiudwU3DXwXCehbp2b3rqgK5mCk7aKQf6WxfjsF3ZZ5s5ou86Lr8cMzPe",
  "key23": "UBYxE4ehPiwS5ZcZ2gcg9nqNpzuzV5f3CyemYYhfni6cU9RQKWn5DKcnL7eSz9q1xQoHFRys8VpWxrwFYhUG3nK",
  "key24": "4TfFEam3HETC9AnUxa4uiBe9NcBEaurisKbZNvJQPNo6W74eLMwvrrkK2Tppao287hb4YdJzbVQR8C98jiiXggQk",
  "key25": "4MTbj12ShKNpiNHFUjuLzHTqk8c4reciBh3RpeBwZPseEguj1BMbD92fVuo6Xxk5vyodctESi8XKYLgkKwhs6Kad",
  "key26": "c3Vo378RMjiC1cvwkyu9hkKFEFQPJQKqxR5j3A5cTBcYB2jyUX7vwXav9yxh34ozMik4GQgHmaq1DDAxJEtpcpB",
  "key27": "52fAKfRKQ1fQQaV6qRUeafHDyH3yNZfjeEiRrMqM8X9tDW6CtPryGdTrUEnnJEWBJxgdJjVUiTeTF11R7ip6ekvH",
  "key28": "2TA1amiqdAPUwJUxW7ch1QSHmH8bQCXed5P3sHNNc77w5BrF1w7sbFo4qJ9QPNb8Lw59zChcyJ4gnMrwmnGFJ9gG",
  "key29": "4hvukcfMZxoZhGNwBgjxVEMhJjMSM7WBahVmZ6AN3Cx8wSBBKnQXQj57dv6n5jEgLyJo9Sct3uPKghxzmJdiSvLo"
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
