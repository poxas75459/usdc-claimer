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
    "2pL9uyH6DGNpA79eg2s2QXA4t3wRMryZofSmhBRcRvatFspJJm7QMGmozJZZJCL4Z3yhyYsSy2A4qQNLbytNQYdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcLWaVheouaLFno2Keo2nGV75moGLctQbG6wHPFfMacV5SZnDLvemKLmNzTu6hbGNvuubdr1D9XDmnj2yVA2rXa",
  "key1": "2LYUjwGVRLM5QddRH33ryELaoSMAYxfiiLfAnR8gmhLkYYKMw67XjrFcUygGf4LYMokA7Wxgwonpp1dfpuNDkPQH",
  "key2": "46wnNX7FdpSCrQS7RcB12JfikoMG8WFuYi1Miv87N2rb1pZUvq5JKoUKjbXGoaTWw2KSpaRsqTW5HV7BnDLmhHrC",
  "key3": "4iLERv1CfYYvYNi1iQZZnYZzFDwedqMtQJfmWLVxCXW93A53cDS6hKhzkyz6PNnQ9x2cn2VLq6VwVCKrpJezyALf",
  "key4": "33jWQyvK1wm4wFjpWufd6Qaa8g31orMbXkEN8J259GnW9dZug7xt5aDtCj6GCeA9u67JYEAwY5JkABUXkVS8KuW3",
  "key5": "4RfJZWdE8CgyrJwD3JZHDpCvyqovuxRcQHLPWJsy5WSFCyj5ypb476Q9Z6gonxgDYFttgo5PW6S7xkXjn5auTQeK",
  "key6": "2e4yEFMtf3VdLD2d3yj4c5vMJiLHA4BrCKUHiSb7mebh2FEBoQxzRcJBbC9qeqmXBgXeVTFgYkkQN2yHJZVewNeX",
  "key7": "2gUhAjRifUV11iVtuqjfs7a6FRjzFB6JFjhdDnFGFE26cTLvWcuDs2JbfCGYdM8JiVukezxhqMUFH6nfa9UDDM6N",
  "key8": "5gSzJNKzyqAWBjbpSAJzyZAsfkgcA3Sac1yCt3vEkUz7UyFiwqU54DLCb2HpW62ahRXFt5bk3hzDSra4k4u7umvK",
  "key9": "32oucqsBXBenmz55rbKt29Nwyw6FpjmLUjceKJPQfhzw366DmPUGwijvF2LSPHfVjK4KCW7bpkEwuCsT6koLXBS9",
  "key10": "2uqhRMMNbC9g8Y7FyCzMyPhoThrbxurLUfWF8npU2bF9AbeYeqvMgW4U3xV5Yr1vPvkgnJMLiNqzucuBZCYXt2hu",
  "key11": "662btaZgqgLdn5UjnVQt1Euiq5zg8BAKmGMkegyjk2vTpWDzwAN8tHSHYhK1Kpnqb48o4KZd7R2oWTnQMxjvEyyo",
  "key12": "2b8Avpn7TdhfzoCRHXgD7KKNHBkXxHu7bdNgMWvAnyreWGAkt84LEVvuiGMZHniPy2CMdaMtv3pUCdtyUEyYrGb4",
  "key13": "62EkkEjhvcBQ1XfBpPyRVo5NaHKqPnarW3TowBPzjhCo91Wy6gViNmVez2Gb5LuwxFdRoUntzHmVonzq8hu6UrnZ",
  "key14": "pmb8trkY24CzWRMNPfKjEtK5uUsmXcNRKHxMPJ8q8yPs52Dh4rjnHk1UBc6GKM5E92eNwHAjFQ2ARkXst26uSV6",
  "key15": "3cBHtmnC8MBkLPvzarnkvBjUSgmnpbq6JzpVyzptdCDtrgy7gdeb9jyc86XgSU86u6QgE7niAXf6yCsAJAidTbVZ",
  "key16": "3vm5udC4HLCXvgUk5ReKNcwRPgfQHTASjg4ZadbdXCtUvf9B9LpS4qUgwBqMBR3ZzB3QzF1kHRuj9zo1ZgAFXhQT",
  "key17": "5u8bPh5Q6aZ4eYoDPHwbqCWtmgnsCqDN6r5cARhnBwPmbLeApKDXQUSzE1Lx3Nwcwx4BiZhafiT7ZgKThWhXZWfM",
  "key18": "4t14HimSafRcrZAfS8zxnw2QcUcNRDmzQhrFW3yqK273yjT9ksnGwLbQSaxog8rnmtcMGBW5LLWPh9rcZ3vFZP9j",
  "key19": "3LbXvJtTytcfjxGzAsnEgkEnwuDpXttYhUMS31QnzpHunp1yXVrgDLMPanLXkCMuNkLpYu6sEw77MYJ67vcLsLcY",
  "key20": "3zxdvo2VR8JQjEaH5L29nG8F2AK98oH1pDaNQvXjycL7cooDvHE7ptZrrA1X8Hh44rX6ZrBP3HkCFLaZ29V1uyPw",
  "key21": "3gUrisqnngsQPpSAAHosZRhXd14SgGWmCBRgfQoHd3dr9kRqopmUboKgcxyXPtnYeTYytfPnMtkSqujpejHBpykj",
  "key22": "3KVMGpRk3GkjVD5xazBmhH27X2L6snYVgWigvtH1w7Dtm6dXNUCdNyR53t4zvcP3CmRWaeuj95FTDg9uVjJbjD9p",
  "key23": "FGg3Vv6CmRS6FY21eZaP5oJR488SpoCrJ4iLLk2NkrKHjFC1ZH3E8V4HBT3rHiDknyvD8bkXWQbTED5NonAvYZW",
  "key24": "3TWQnfx9icsV1m5AgWpaSAett2mtTwBwTiUf6Buhj4RJTAw8omZWKTkRPeBGXPe18uggVCwM9x2LQAdJESHKHyRj",
  "key25": "4DXmK1ZkZehzUFA253Qaxrnxw4zayPVkYgfb8pJtcdFbq8SKQKnpAv6e3JKBfSpVnQKdsg1S611A46AhpPfUtJqf",
  "key26": "55H4u32hsn5ZQmSzJr6kAiLdbXfHwA1J3h3c9T2aCiqMsvC9kxTszkmuUCVEmKnfrZ3jQLGq6az8ByTHYSFPtt8Q",
  "key27": "4NEGesaJdsWhZawaakcVt9dPfQCSRbNiHxZr8GMw8V2aD7NYvQocyjkJpSLu1Qw3xAuptczovCeXCPvE7YFMhXys",
  "key28": "2FqLPAAAfUWj6yo3rDihWVWafrjnhFtx6hv9JTmxvb35Ark2ctmhy6NVkUzZkcfTVLaPXSVC1iAUxb7hj9RR1jTz",
  "key29": "4b2TyvN5xBT92NY3FUceBDYHbdZeTTUoUPV3kDYL1iqoD51VMda96MffgvnAR7wdnDsi1ZpcbU3iCZWhSbX7LRed",
  "key30": "Yx6t5KdG1nzV5cX4jWwiWyuziuZ2YLGeXTf3jhw4VMQ1nZNErmBhtcskBnCQXTvK7rpBAaS6xBPuDFYo34JHdhu",
  "key31": "2CDzysaQtLTquXkYtWfvqPjxctPmUdvx9C6PyX4D5auJBcSzyzmMkHdMnvfAPvNhLQh8ULPwLTPmWzdpXBbWFhgC",
  "key32": "4EJzZUXWE93XezfspSPoFaMAfBzcYCKvCFLk5M3ng5ehGTAdyCbLHGxgufUdi8KYa6a4XvzoNYq4oGGD8PwUqPJR",
  "key33": "5aNXc69nrKBqSDpV8ELU3VkqjK1yio963xMUVuRx8yAfE4HqB2sd6F8hQMfHurfagKDUXPc1uAEDEjFQ9hwF9TW",
  "key34": "579c1r5JmZ3yEo6TXuTNfLuvaEGsrtEFb174RL3upcTfyAzVBdCxLKhpiZqje7s3qs7w5AQpaR9h9WgsaKqwD1z"
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
