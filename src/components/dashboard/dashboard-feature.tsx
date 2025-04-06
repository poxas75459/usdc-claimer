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
    "5M5ThRG2WKdivejQeb23sHk1g8YLosiH8mzcp7hqCyj4Ffn13qrLKGQQQAwdW6L5nSsv3FRLa5nLTPyejRTn3MoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L2v3qyxadpV7dBtgeQEkcQTCUqiAGiRPSGbz3vBz9syCBo9knwqBimj1wKD3DaGWri7Nsa61p9sh2RCxSBz9c78",
  "key1": "39v9uAgYCRpys8uED3VJX1hzj9Np3jBSbbnnHafikZhWXduT2Kmg1zSBpDJE12yLazAFHoVyWzNFtkB37qD2X9As",
  "key2": "3j6nq99FTqiQRFWcau1UXSc22MTxrddniDF5S5mJkMnSvAg6eceizWMfpwd6YzeWZRjQRSoewdUKTHowwsirqLi5",
  "key3": "4UtLKhCut5kXxpmofJfJF8FBqU4Fh6BoEG8Pb7jJjXN9xyuQDwBgKfKCgkXGX5GiPpfTew2MdPPrF6GMvDCU3DkE",
  "key4": "44SXqDABuc7TeZ4YBWAq7QjxVemba8coRkLes2N8PDAmTrXtMwt59V987QtmLVBRfW3Z89kFSvMhC6K3ggnMEtyX",
  "key5": "uDDtaACJhL5VVKZcL7nVgfveiNgtSLQ5QMiMZ3ydHTRw2LFkTUzWaCgoJaorrt1BozjXfzjWYDxMhNrS4tycqXV",
  "key6": "4BjtHgu5SvpG3N3B4ey2HTZWSH7FooZrEZbnHZxE8cCt7VHDcp4aUfQDtsSYwdqm7aqCkVeJtRDHKwpWypyP7W5a",
  "key7": "44WBiwM9jY6XP4kgQ7tgQXoRBt8pbRx4Z1T3tPRP68JXS1xJSyWs2Adu522iqgUVvQFmy2vT14F7QL9h8x6CxvGr",
  "key8": "5Z9zj5v7i7kawHxMummEFyurtWZv9uY5nyFczERjn7RErCtwjLUtjbSoUAFSatMEVsBoiygjxL3A6ZWVjsdaY4Fv",
  "key9": "4ZKqJAxPvvaAGPVAip3qBfrg99QmNd2QN3dE7B8FyFZfUxwmDbTYnB4hhTiVs9KW6P9y6N7raNNY8MpFmVuewJTQ",
  "key10": "YwZKarAHg6e9p4GLNS2q6AqkuErYdPjybHYFkZ2KfW3uXNgT1pBa1r4jpm4a4a2yqg483Bbsm63A5QsEj85rbAe",
  "key11": "2eTSqndCgFvu3EJvXKAuervRCtibNmemctPEQcdcmMyJXkysnGaPnwrW2ngor8B47akdDcJhnEUrA44sL2JEKE2W",
  "key12": "4d1pXzmvuorjKiJ72eQbUeUs3iDvwW7YovM85UjJuSfLRvYRLKRNNm62w88Z3uqzcvch38UAbNsEvP6rp2MdTJyM",
  "key13": "4RGQEE5z92yerxpHJfzsTSR8zMAiCGCxepKnS4CJum6Rm1xW4SyUkqnYPe5CtNy2BDbYjdHEAXXxFSJvWDz9XEhS",
  "key14": "2VTAL8CDpi1Z25NacpP6ExGjrZWbk2MaKhkC9jipwwaLEQQdpaCHF49YiHDiahthM8ZxJ9VNGvSgJtY73LkMbVDP",
  "key15": "45qg7Q6A7AEhM8uBSwZRfdf9WmnwkPiAf12C5zyAAPg5rxjs53n5T4NTRwfXsvt2uauNSQGPSvz9fNSnnPFZU3QW",
  "key16": "oMo3pCgisZTm3QwUC1doFVHJLiMGPw7aLrddjMWTAn67iDQEDprytaqsDAGCiAYxfdFEsJAKyFvD9Wtc7ktdDfT",
  "key17": "3eGybPRgcHe96tEZrpyqpC8bLSwxeMP6SY77kHTpVM3okuNNVztbBCe6ZHDYeGTn7Hfd4Th5X8mxXhP53PYHwgFi",
  "key18": "Hz2eXkh8CTcyqMFUc5PmYJ1ZvLGuRWYkQakRf1MpD4YTJ79UiS2jbbYCs2Zk3Kn5p9G22sorpF5rUTTeUt2MkAP",
  "key19": "3xUjvxaVnzBRZHTfUHRmKRBc5RF827LAoDv3rp1g8n67aAhfJrGNup7PuWmKK4irxbYTizPtVihAFPMHwk9b9UAj",
  "key20": "3beSKPyL4t3ECLBRokYHq7WvxZ6StX845CfRCJy6Vs2iEKkZehgHbRXr8gQ4kcgFM5TvUEJV6nQ7E5pJ6jwETFZ2",
  "key21": "3mrcSY4mKo9pmdHa9zNUjvtPeCyiWdwKxGcDz3hEuYaDc7PtTQHHwgzBhLBxejUF5iktrQJCQdUbRWkta9b8divr",
  "key22": "38WyoQWJKvFMtD6pVa6vGKGb8Ucp6ALkrerCkupatNbj3HyDDC8LonHDqVNMquAaVLDey5YLJ4oWELw8Uwp2L3Hz",
  "key23": "4Z8C1Bpbhj6ZzZp9VZnG9iP91Cai5QpwdT3finZBi2UxNmquFndGwRaCQNur1d6iUah86MXQ9TAzowRX9xfz2cVt",
  "key24": "1ShdSbePRKJd22MmoYN1pUYzF3Gjkmc7rY4x69TsqpsKfvLKWdZjk5N1P2CkvVKKkRKDWVZgCk4evAQ73FuEMCs",
  "key25": "3cs7gEkBNsMc7ttLL5C6oaXrxkDYMPrjB7NS2hBWcXs2rAKugJ7JXz7xWRCWrCdij2qHEtJHreKcNfPKsBsyr7A6",
  "key26": "5P1M1FFsqmuS6NuygAiHJP3VFi39sSo7edhyXMipbdC63DBBuskaYhSHfvqG8KwXTnmiamxqZ7d2FqSR5sxXjgPB"
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
