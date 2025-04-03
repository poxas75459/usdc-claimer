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
    "2nT4TnpiAPAQkivHcdG9KBCeLYbq4jpRL8BAP8twFjTWXeRvcAZANpnYP3iUAq5RauHginZimAvu3VKKe8DoqU9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfUtef3MzwKNTV4iNDHoxcikZDfAthrrWPcFJ7uYMAdoxmjnz2x6ZAAbjBCU4hgR87LkC5kCTJYr3QwZCAu7qyp",
  "key1": "4BTwRiyy6Y4K6Hi1iaPh14NpfLjuEwrPL27GmSiNdXSUN8pWB7vPSFFBdJX6uHFESEfDWxkWTH6uvKHfqj3V2jwi",
  "key2": "bJPQ8FR3DwRjwicALxSbbVbBvBvXZmwkAafXvU33YTsNxNq1YKUpAyeiKdJjFFE9cMXwzyitvniGHEN9eKaTD5p",
  "key3": "3kmdsX1byVpoMwAhwgLMBTZxbnVXU2FYeMEGWMGh7mwvfDrvhi9zQ9Yv9fvPXwU8ehzdqJKpa5y42nX449D7HHxu",
  "key4": "5jkCTELoYd8pGv7AkweFLxJHZa7JahLsHptga24G7rN3GGM1Dxu89egX1e6pLqWb49XC4yhcdDTycC2zqf9pZpKC",
  "key5": "dawPTamgmVebUpwWERbHXNoaCVTj9AQcsopxnmifcEBvJqgptuxwoji1ZY3b1v4BdpbDe2ui6n5Eb9rWma8KAvW",
  "key6": "2LPYu28kAyxc3VFsnJqpzNz2w7w8jmAAc41ckVUSdwMMr3GNLqjdFtL4mLvwz83JbgmmPUsfgT5hKfA8j3qivJQq",
  "key7": "31t2TdpSvBvA81s4Trpc147kxtuBYMDjcL1U5N1TzjRotmRjUt8Lm7AXg57dqrG9kih8ALaUHgTiFq8rVzMwtDC1",
  "key8": "33zrJ2Su61iz3VnMQxwTn1F7RAWUxE37nSah6Lj16Yf46MZLerQy1EtEh5HBADDCQKDWx4by9em6btJe5nETCZBH",
  "key9": "38gpo5xAkBQQgXmy1Rx7fbnm9okhJHzndDG1inpv4EURQwCxZPmJjguaid4fufuTuP6fRJACqvkYssbxKJzjtHC",
  "key10": "SyeqeHeyg7RMMScCJ5hzAJnZ24FuMJXwB6vTmAdyvTx5cfzaA9PJsjj8iJSLagM41hxHgeoQmVWrBpHmtF3GJFi",
  "key11": "FzEhpGoy74LVdtSniDss86AiArR9yaMq99pJ54ibgMBxqb2z8sWArRyAVaJ9FAmSgTbysa7dmHWMm7Z7dVXD7MW",
  "key12": "moWatCy7yPa22ZW5MY66ds3BcQxSuV4VYfHGvbD3XaJnwfLeVaxZxKyu17UmpWzqoxdnwkU6vTCua6uBupAhLSw",
  "key13": "5HruYnYeEBoCC4qznHa4CgPbVKQARtcm3USWLxfxqcfLdaPPynf4FeK8vwLMMDRjbayHrGovW96gPjSLDR7W9Eai",
  "key14": "3uV3MSGbbG8C3RRy4yPN4pp4iYDRqKxBMsCHe9bXmoidZQ9EfLe9h8GMQEx5e3EYr3FBgrB636drsxqYfQyEcF1H",
  "key15": "63mDvQw95YwvCZ9UocAohrmNjsn2kzZ2vWWoVcbMs92dpMftSenH5C57obHesd1t4B7PzbknyENzxz45bZYqmJ4z",
  "key16": "5KVPKiovUqicVyLd9ukQbPU25guaVivEy1UFJJfvp4jBFvrFdeL15vgxA2ZmES3WAjuBktpeS5TgnhaWg4xs8Yqk",
  "key17": "53BfHGgfb9QsQg3u4CtRDbVtVge2APwAmcpzWwVUfKtBPd4g2K1UitxPkKiDTuJfceKYpiuoggNSZeRjEhbunUu5",
  "key18": "3MKw41yXgXUVPddhCzzTtBMa11QkEE36q4qVaHBVZS7bauMURvQ2YvbUkTPTPrK8APt4FhX3jpSansyy568WDLLB",
  "key19": "5BZpmgTQui5v3fVdhbMvSthoRhHMWJFZBt79yc1AaBoxr7y38aGpfnAK3powyb7UrNQSuX8LgPUYk4pn6H5ZWeh4",
  "key20": "5M9QDcGPfp6TmpUpA4SBy4VvNhuMqRwXqgNujmFMHjdPjbvVTvpcvVY6dwsy5bPddUcHwabX57SsGcUwMyf5MD95",
  "key21": "LPe9oVf21S2zoHJ84mo3ZpDguvXieeEthjocqAUeda7hjnbkLdshHSG2jCwy4HiK4MYNbvUfuuLit9CrAixzC6A",
  "key22": "3JDbYswxGF5ZKf9ZgqL7tPU1VbKwx7jmTSMaq8BW1PobBfdB6HomdfF8vv7yBdgNau3KqP52uiRBGjH3VBpjm42k",
  "key23": "2s1TXhD2v56cGK3anVRqLX6wg9MjrZTpx3gKCaHALmXMmVCaWTQ6yf7H5L8of9gJmJTWzC3skGSTTcgMrQEUWxf8",
  "key24": "2D4bTKD24iLuVxPEN4FTfpCUBs7ktCNzEcUVXbWz1TpDPqBjgWREwgDo3fqn12g29eo7sLsEeZFrfqu6tnUj2QuD",
  "key25": "UkTD5tHf5xUBa1FwKmYU9WBWikhFZhLzZETEeNsi8yfgibRLPfME4zCG3XvHwLkYtF1zGDPegu6xLHh2Hu2cNsp",
  "key26": "259NN9JSHSma29ZEjLnNPccpv1gVbV4SjnzK5vq7A9jshijo8GBrghp1ZGtGjKnkE53gKA8eDgt94NWysZjVndir",
  "key27": "4MMapDczDTe2VjvVVgEExjzxLReh5rHbLYsRuaKkVM7ShCtkULZ1QMxVXrsrwBDWMpW94irkgKydvzuwNX3oj2VH",
  "key28": "3UCSrpP1kjECd3Ui1MhNLSaktk3DscdcKZaoyE68XcEJofPxU2L43bD1crQUkvL798gkyPisNMXMs4ThkG3UErTm",
  "key29": "jbebswyjTxnSJd6k6yDkDiZNSYtnYaF6LxPtHXbf6a3USitMQBrRwuxHCkLKdG1kR7RFHGqhobzdDy199HegMog",
  "key30": "33iLP29QQVA8JGuc5GuXEocvw4JiVViqfgTkSSWhz8txvSKJHj1qqibQ7ZVDHdA3YniiLbFUdBBkvRZbGJavBkvg",
  "key31": "5LidZV8zHoCDBEMgEbZXf4YppRk8o3PkTG23p8eJz9vrsQ33eaSbZ3pEnRuMS757vBL5LkNp3TsKqk3MGaDznYtv",
  "key32": "5tggiEFN32A1yfLeYRR68XFwNQ2tQJdzAXivS7CAfi3W2voKF5t6SDZ4hkbwAGMftrWZWHbfscTDy16ogeratpff",
  "key33": "AywtJozMRXk7Ey1jaNyF4qv4rgqwoQb69tR2M5bj4fYxeLQLKyTo1xpgSSLqHERTpGHtrxquDUD99zucqs9GPGF",
  "key34": "5xnmNb1iqN3bDna37GhLCgo9JVbHfQZRZAd3fEeWbVMmBqcnhS6aA7hVHSuUq3TYpDDRmWnCcAix9bbnxojsqtLS",
  "key35": "3EinE7e9ZbW8xrzhj94zsJbj6fdb3sVw868MuBiRMwVz5qbJjH28kHs4BapgTNspysDjzum5jLRabHc3G8WgRt48"
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
