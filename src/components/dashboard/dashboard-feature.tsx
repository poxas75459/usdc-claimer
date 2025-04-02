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
    "5pcG2qy3s2zEpn4m8gaCx2qP2HjqT9z7tsfHXJwF88ZURqUYtSCRyXvWK5S2sru6BRfLZ8EpGsmcCunzLSHp96fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwNowZZgqNyZZeDn6a8aDNmPzCFTTo19Uof9ShjPTzjXt22pLQuxRz2JQ9xrJ1st6AW11NgpPZhcjMtM1ENyDJe",
  "key1": "5Jec5rATDH8DxGVsh5NNVPgVVWeuGxKjzk848KCynTgSFaNcBpd47k78umz9dVkJr9Lqz8jJvSz2a9uzL3wrCMBM",
  "key2": "4MrNjMtrMegyHwBX4MgTi86gsPvnmB8JoHHvKfpnWQBTNJXLPLLmQWTHEDg6fhv7JZ46APnUUCNP2BF6fz2YMGS9",
  "key3": "nHZvC4gDFKGFzCKTvF1q6A2k6xen9FmzU7Lsa8xGETvHUYU1g7jak6XLggwxPG9G7sNAPZj6fd6V7YvRV8kj9Z6",
  "key4": "fkXoUsW4EWpuRBNJWEJkSQGrQRUHqrEuvuWWxJYCC55mPqVcEGKwzpkeRawL2zUSjQE8jjpVe6m3Azzsvo9AoVH",
  "key5": "3XAsAFVQt7o4Q6CggH6Xz9nPuEA9782sSSjMvWnLijVsk1dJaHPPg1hiFX2X75YrjCHLTxhvuPsgoCa4vArkzAzf",
  "key6": "GqFcEDu9MK5Us3u23THPPrK12f1hnSTk9Q29LaiLM5Cuq9yHYCzs8e6Lo9hppfXZkzqDxT46LYnYoLUUFN8nxBu",
  "key7": "2cDHe6eP8kjdSgp21YqFM856yn5HiV1PEoq6n4ZRqGtrvq4cGYUdzyvBjeSHXrpkqBCJMoVLPAKcYpmBtzKB2VbK",
  "key8": "4A9jRbekptmFCm5BxXyQ6x9jFsWFayBzxBvrvJL9fNKrr2g9qyoLPch5iDffdLwMV4hjf5o7BNEM8Ej4grP1HUYp",
  "key9": "LMUh9H1wYzfEN4TEMz9PRk8LiWDN5vukyUkVMbdECmCTU9uuK3WW1nmynCVG4Em36CoieydUVDqRcFs64VuzGbe",
  "key10": "4aWv1xnzL91XE2yQHnUeCtAv17sNggqfsZ1qbJsZw7BL81NiHxJNwgZbkaj5d2HKKiVw8QWJzAvAXkD6QkUMPojq",
  "key11": "GEuQjEgZU7PtgU6Kc5kmbpvUZpw6zdJkFaVXeG3ng55RkR5qgz79XXNSabR84LqtweoogJvoNCVEBiLmrqLSNse",
  "key12": "5aFG8vwv2Jg3UimWzA5aciifDXjD2ntCUKaxcuYqy4F4rc5WbhNdjLwpogdUS5NTBvtAZH66x9XeWR8z3QSzBhNX",
  "key13": "3Psjd9kkgyv4vqcW4Uorj3Ef2Uu5Uo1JA8iftkqh7fxbuEkLdBCvyFfrA1cJvX1DPMCExfawTA1PY5hFJVTwsa7z",
  "key14": "4JA86Rmeic1DSz4ZrwBsURJ5gauhp7TnP6MuAn9Xmo8r22yiR6pBrMUUWDmAg4DW8ij9ZLVENMPAmPjnWhzTdTpk",
  "key15": "4QE1ydJjBqHh8eurTQwS79H2CRDdBwL14pyjfVddx2phWAtpV7seaq8D7jVuhCaJmL8YP8xD9TEufyJtF9AW4VW4",
  "key16": "3kV2shySfFXZjRXJKYX4Un6bXAoUtna7VYppvnDv1Kph6jnY3StNRWEzFx3bVCpBgNeNF4yGwpG29F7qoXaQZkeE",
  "key17": "4GVNyVc7SDDii3zsikmVHWZZAHj6ugWkd1kcRj93kCcWjCnJgKn78c5crkguU28n73UD2WCCZ2hMYXRpUNDe1bcX",
  "key18": "3wcMhD5WEU8vA1Qp2XWjEKL9Px1Eu6gC65JsU1oj9n5ZpxKNo5FfRM2N6eovjbUAd8ueJsy5YFMwH6S27234uZJj",
  "key19": "3ZTh8nLWXkgf5PHTpGZdFphTZoxryZMdW8LSkh4sLsmgjfVbBxaR21piDALyajkgw11ewBrtVbGxDvrKDgVMVML8",
  "key20": "2ZCcFua8x5APx1XJNXJaJZu4jSH5MNpcnwAB828jwT4BuFeUvwmNZnvjSjUzZFMSiLDjFdTCeKrV8K3qeUpmRwT8",
  "key21": "31TENsKdngwwRSUcvo9nYwXdqhSbcqFLGePoZPBPjp8giQJdVTsw4DZUftH1cBoKxU1mXBKyzM6BBKpqD94aqemH",
  "key22": "5kuFQe5VK2VM9fVU4qt3xN1tr8a2sWjX8sVA94P9tFNrvYLZpxWv4KPRrbYiZd7L4sjv4L2BiQDSq5gysMKqUhm5",
  "key23": "4wyGrAN6n2jqwT11sV7nwXnAXvevsYauRaBSwgTFgsrLBWnYYqfArVLCwMByqJR1hAUij8d7FBwjb446pUZyPV21",
  "key24": "xZk4zYxzSCtqy1TXDbkq2TBE3icEgvo91hjWYNmxtuGNqdXRNiLJHB7ZzQvMjdGomCTYawKKGMQpn1SNz8oinut"
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
