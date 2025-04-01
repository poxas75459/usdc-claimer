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
    "4YpeexD7EW9fJH7hWhNywhuKixuFdxjDgDDwMorbu6TC1eNo2vFCGjft1zdeBaDf1RtBjmy3AsrCaUpLUBw7cGWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBFd82VAYgAvkjvSQSbF8DAXXNtP3ZtqsJhfBnsSNStgLcaKwQPnmA4YSLrMJDP6XnBjF1M5BBmkHps94S84qHA",
  "key1": "HFeRz9vH2ffFfmE9hHMMxQAyZ8UjV3ZKPuf5gFHxBC1eug34wauHmqLP658rVQ5HWgHKwbp4ubveHKAygCsNag8",
  "key2": "3NEW88rEPx973LQk7xdsdj66whLJf4XERzUrUKzFf6nsR6tcTtHhEzadigK69NrP5pT4us9vSX8KeznQY2G9LnNE",
  "key3": "32ygL7yKeYTmYLX9Q93o9EvDVKBkMyozfSwttQeisLKByAu4Ymj16NsuCrKRHp3gMyC5cHYrGo75ZLATSA61pUxJ",
  "key4": "2YrRx3ryAZsVR7mb1areV77ttnyzs7epcYNciCpS1E6Ag9ADt4NmsHozewQ6RdFk5Ty8bV95H1W1oBSAmxcKcVLK",
  "key5": "3wN9GfakHEZWAmpArhEWzF1FN7R3g6Mve83rEkjedQrHxuEQCTeD9Uhs4UJeDhA1yVa1ZsXp4TAPYjxYaGx1PiHL",
  "key6": "5ANMKnk9Gc6oZdkQxZt9uSKiebiBxgnFpYV21fp767iR7voibAJGoUMsqaHtva4Syv3r5RxiS28ayeE4qXtTJ18D",
  "key7": "jjwgUw7Mj8xgSRDRX4pRAUCe7mc5gpcGXdzdqkPHDeEFneWRgnATurZj5ziw3ESTz31PbGzicMWQp2tSSwKp5ya",
  "key8": "52D7iLLwiPS3YjdaNgzF7wddGhLKgwUxBKHfGWmZfajC4FF2dRGnRcTKWpihoWFrhwXJwT4fTwJZ1rsorWD6jN8Q",
  "key9": "388q6RXL3SwHWtvLhBSRS2XrmTobdRYCNWgxiz9itx34DnyNrQWj1cNHknJ734FpxueiqZjvuRjGVPjdyFQYD8o2",
  "key10": "4mwXHhMYxQsN1XdHKQhZVp5WY2AZGNmZg5kSBXxgKRLQsyP8ZKCF7GW4VBMpk9hiMEqV6sWGeZ48AHUsTt3wNSzt",
  "key11": "3WhwWt9C3UkyDDkRvSuBWST1TzaSzy8deNCeXbsgrWerHDkZtmjAr7vzXhpvS8yKQCBKTncyqvgyoQ5qT1PSPFdQ",
  "key12": "2wkYsPjVyJYczoX85EBhRKTacJ59yd77kbRvBmrHeM645Nh85D6xCVQj4vFGkF3fYMXuk7cSZU43YmcGScBy4bkB",
  "key13": "2dBSzmx1mW2hhVp6bGnojv8zTWPpEjd7ukZZuTmbDhQe5x66K83hKFr7B6NcaNKgojUeT6z1B4etwnMp5PGNhN5Y",
  "key14": "5Z7oxKkr4sMHgmmAiFBLQq4UWPz7LEQj4JnP6ybj7HfmZkVCGJ4gkM6f7cAkFPnbhViTmqx5gJfhn7a8rMuQCYLi",
  "key15": "2Ai2tQBrBW4Y8KGkexEq3PqVo6qcgx78tYPS5U5yRgF4vB3nE4C6nSKBMgV9NUZ462kp4yidkGw9YRRbHpQSYxnq",
  "key16": "4J9GS2kgeyoeH6Hhj2TbQEkHdmnhuaaBXCQEN565aAXBQAfGAWVeoqmNSNcgS9MMQmGc6kcqa4rokAiGC53PojrR",
  "key17": "2CfAi3pMWr98kHjkTCahGx45rh7Fa7vVPirNjzU74MrrZFgTg6m898DWmtZtfBBUjupRBK6A4xcsGeK7Bm6KNvYG",
  "key18": "3GYFHMBiZrkPqf4uyPgdJxapQT8wTmYBx5SSssQQfyNJXQquqgWAtpq1bGtxj1TLYeYKcSufGCCmTLbdhVPG3aTx",
  "key19": "3NmLtxM7JnEkNKC6E3yTKtnDeNVkzuoyJV1ojAPRG2yEs75YqqNkx78j2wdXmQBoDoBcWua5YDHRhcTikypgDmSr",
  "key20": "5xvadc86Vxaa7nDoWh3f7mf7TJ77o3bxMn3fciDz4wLvWGvMKBX3Hb3h1GDXiy6keww6qHrVGJPQ73WoSghyyLE8",
  "key21": "365B6pLnir1FNwh6NDg3SJqXzbiCNuuwhJfzkSwVRh7obCYbTcGwy5ksHyw1xvWhcqwia51KnPCVwxitZDeCsiKH",
  "key22": "3tQGsgysAMwdPvdmpRpzYVkaSM9kYnXn4Rcb9VmcKmcKA1dg5w3rKa33tAVhvRsX93vTGQh9UZA2ZwPMz8BaekFL",
  "key23": "2AcW9942RCtSaGRMUikee1TvmgXjV4eigHL5hvCan3DG8DeEvyMuYDyWkyEhkR3gNLjWebxPxHShkJzzSDiM8HsM",
  "key24": "ey4ZJsjgHcGL4MsK1EiuP6RPYihmteusu5NGBQzaLtRzCg8Hhtv48GkNi5upWqT4VNnLjoFRiiDxXYqq1JkK8E4",
  "key25": "3ZN3YbXpd9wTRdSuzZLrJBvC6aqvjvkHVNLk2HnAhHxBSSe9hqP7793LEWPvH9oYcyPBkVSTKehtEfd1NtwrzQ63",
  "key26": "4eANRCG9HtHxPk9txjG2u9K52gok2nQax4GcLhVoee7RNoCzCh266tffYkz6FYdFrHjazKtrshiLRyLqcxNbCg3C",
  "key27": "Pm8PfikPF8RpF3kLzRsEJZWkBEu3WiSo2tjQcrntJTHpK8FPxV26pVbLj6cJwfZLvk7CVZzcqV3JJVKrsMYpzFV",
  "key28": "3Q4hvgKxW3M9KgQxqjjwXnfwcH61fL7ve15pmFiKyQDP91GnVDvwuMgDWR8UnLpcTVquXuzzZ3EynvPrPE617siV",
  "key29": "W9WcfKTPbe3Z74d3uknPeK6gfSJyam635v7KjtAVhLCSfcDk7zpRgcTBS4nzJ5GGXfmGBboTRLo72d9bUgNTt1V",
  "key30": "3DBtngsqiLnYMSMnfpoFjRc9tDhtgPRpZYYtnDavLhwZmXSpNHSs8UtfjFJ5sbhPWxd3RpHJic8NJPJordNizReR",
  "key31": "n7VUNBkXr3xRXBbut26YAih66T6uLKNvjn92KpxefQG9iST5FNbHEbSTBrHqmWrwYWAGMfgLJUoSXopeyuJMPwu",
  "key32": "3zZ4fQu2gUNhjBp6aEbFQryMMTAvwBfpYWV1gXGhfR7Bz1tQ4Z3JnpqQPUYDJ3dptCWeWV8Z7Hw1Le7jzyMVeD7P",
  "key33": "5kLoqDNdpS4iDVeG8NXDR4PEzsbRcd6u2xTvwkiwBdhpkkxaCDk5UXR1unUkbXU2oCjNHJq4jzvJJF3LemZ2X167",
  "key34": "5RijxZXad9AnWbDB9XBhfXt7NPZZYLcbv6jBVaF7SwTDgWoCTmzyk7DjsDVjcGKUzAYvmchrdHMMD8vsTfqpfztn",
  "key35": "66SHX1gu55Sv3KojutKGELyY6YxmrWoSxwrobPxeyDpRdwcnH3yiMKcSDvW9iA8cvSYCcUZTzmsvD784CShAHCFH",
  "key36": "55gvapihBzuj53dX7BD9F8HHB5WK73sz9goq8CMTEmWcEgkuFejt7kwM7N1XE74D2s5sNXbLRvNEfqM6GwhEvZmB",
  "key37": "1abZq513enkaeZQuHJqHukU95WCGLiTYpGe3xVLtZqjXLgpR6X6YNoMSCYtMJZC18uJkcU6AS6VpFkPNqo9WRCo",
  "key38": "5iQX6KfCx2BH47i8XA75JSV2KpyVcf7F73VmNZmRhpSPgngXpLfoxWUZ3Mi3tVwbeBLA6JU5prQfgsa3M48KhdGf"
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
