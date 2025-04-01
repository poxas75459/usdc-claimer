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
    "51j9ef6nZdwXFfcvaZu6y7wimFhJN8Zjet49aDd4WhjDKQRQcvBDWK8juV7KRAsbnUrxnNLfhNNV4Qmkew1drx7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrS8dn4saBjcuWrtfBzYAgQzkSd2kmJeLfAmiEgrRbdzgRDkenjGMjVdSAkTTEtxEsPEPmrQqnbqFciFVgTCwQM",
  "key1": "2pDpCNgo42Cg8P9KA1dwiZLn3LsyEpriLgNkGKvBijsgLiefaEoDQrqQpRCuWzR7dzyDJ2jVZjJWuQRxFPTtJq1y",
  "key2": "4FCHgZWhmNM1ayywvXixgBDr7s3KPYzdi5CmHDZStDyXcxc9HVHhb2UYDsMeZc3FQzWrSEEpp6SZvPoC1apnWFYx",
  "key3": "5GYi53tHwsVEcDMhoSNTLqcUzMYw8XgmX91JgVpESdbvu5UqA6E7x12E1x1KFJgBKyHdQv3ZmPAxs4dqFo8GAU1m",
  "key4": "4twcq2mKcpNbXS8ecnXdCdgD3yzjhCGhRY4sijBExJj9puV2ZkcxH2yQTtk51c8pYooRuHDbrXD6wccJSPbJ6ZTb",
  "key5": "6p9ufBuxtQBUnvbWQSX9qdQCGeczom3fCyghpjnuvW1fCMjripAuocqJk8mT7uV5kekCLeDVUqYY6F3WpW8NZtR",
  "key6": "1qqRMP3Ev84vtu1isz4yaMvTAXbGtunEj8kbbDrs1Gqv4PujaGcjD4FoBbp2eP6QddP9BhAvAMwntpAqcKMu65H",
  "key7": "47LXZ8n3RwLsFB32RaZNThsPPXXMgX3MfXZfYpDufVDEuy2FJKBodMnpZdikNwV6cmLnuH9DTfdZsVsd2i7GBYFp",
  "key8": "2TibQSaKzjNRguBqHqcWdVFj36554GEeJGi7U93V7AKF6UUJWVjrSzFCRrbECMuoc5PJF82uSBhGMhCpT8j9FXmP",
  "key9": "2TKv7zrjB1b6UC6JiVsuyf2J6y1Y9KAiVbGsjy6Js5L9XNegXwrhNdj1m67447nEg6K73EAVuyem6wSTw6JzCQHQ",
  "key10": "4gCNZhL7VsogZRmCAtXmoTevRTUUzDoBVXGVPUJnMUzSnw2udksFdSPtDJsH1qpQeArGUysU79316q6rREbyVUuu",
  "key11": "2CcDBYZtovqt3APfaRydYT7vTm2QxFmQoWNQ6pPYEq3TK8LeAQrXYiSKjKVxugwq7kpkdXWkuvaePXAwhd4yqHCo",
  "key12": "3NqUEz6XZaaBpZuGXa48EaHpgCdkmQsjxCRYAEn98aKZBVKcTG9xxEU75zBqFMUhDwXM2MmtkD7yPxLWpJMsRAho",
  "key13": "2cQR59xVXijLFUSdLNxt18FXwtU4ZTCWLdTEfjMo1fVAFLLMEWiJfKRje5jrekX4UAiWeRKsxZiQUwqAgsa39Qd5",
  "key14": "4khmPXH1cTxmx7PFndeSEZWMdPcToSxJW2vhB8TWS1JdJ36SzhMRYdR1yUtxbHpujcJNGt5Ea5MKoF5AtdTb9R3L",
  "key15": "35xVjrN9N7cpCVrBseXb89DWtzb2e1foQAQ5V5GC8oWpTrvSvyLibpZexKbbQc6uepQfNktaWbckKSpqB27GXwKp",
  "key16": "2gPGqjcH46P8SLQDZ6aTAFAG7n7J18zeRJUStusd9VUP3PpFjgE4oxA9fUS6LYYaqYkmaZJq8yE5ta1Zej8TV13",
  "key17": "445UFwQQukVzHhDenviHx4X4nxN6mBzrnMz7g2FF1Fz9ChVqRfRZafsfBNzrRAzZTCxdrhhdTrvDgzhAXxdJ4cLi",
  "key18": "36vpS6MyzUAn6RH1C6QEMa91K4owRTvACHyToyiCFe8QQpArQjNLnKzjBNMmJLuDH4F8XtiqYjFsJexXgFzjmRAq",
  "key19": "4abJNuJiLY1QD44EWmLdjto2Jni9hjoC3APQpsE54nhXsaQrXTtYdhXCe6MN8TPGYwVo9LFfe4K9zVbej94rfGzP",
  "key20": "N9MMfpgdGfJPZkFknzpBt4mUWqxVzu9TaroBX4Ty9754SkTJqRKwj4uU3xwACifzjtEAt1xfdZmgfmbRQ6PXXqE",
  "key21": "48hLEEVaGKLdKgT7oT7tsK726tvL6B9nBZWVizhf6yfxo2WnVMfJW3cTsyZaBpL1kPkDPnvEbjNFq7PG3EACFk4v",
  "key22": "3uHPGdJXQxy8JWQQ6uZmzigbXEbhvNqDjxM6dWBXAxSNtDjkj3AvSNuJPfABdCQ7HZfViPxUbBdH37NFzWmoxSrw",
  "key23": "29XZRR38F7ENgk2pho1jyBwAyW6kneesDaaHTsvTfWFKEQymNEg9Hx72YXhVCGYbDjqYWS92nrk9EeHoKBohAPFB",
  "key24": "5NTHBTbXj9UognqbKpqefuHtw1KrP6VtN25yjuKf5WTDn9v2is1BWTEKN9pgXT9rW9aMYnZFj6hcFaQdy3ZaTRSf",
  "key25": "49rJqDtD337SrQrsfZr84Si81r1ndyGb63psM2eNxGzFvB656pfMQZYXKic8S3vhDgxzCWKTJRofyscZ3XQ376Et",
  "key26": "aLL9gTMAUsN3t3U2fSc9Pqd1X67Z6F4LtJLwXY3TGo6FLtdWMDpAwsA8Ay3rXeTVcyXnwYdqR6ppUuAC8PkRowA",
  "key27": "4Key3ecXEpGyeDRXaPx5uSaRHrovmfdu2jVU6tigTUumZRsqNEVizaTWn8Xv9kckQDmcpU6qRhbpHGy7MheVyAod",
  "key28": "4YSrdrFQw93mxVdsFUuU6rcqdRNBUB4jbTcD362SJc9XQ7PPNcJNmCdMiw3XK2GbTYGt8ZmQ2Yq9J5tns7umBrEN",
  "key29": "Em8xYD72LRBypBWURVsEbozKvDE2G13Ysqkq8HvvmkMxNnbjn17dbukshyH6iGRzJunYyR8ds3Mszyy6QsqK3Yf",
  "key30": "52BXHdHNWCbJmhj19BmvDTGSGBTQSvnrrEZahbGbRzpipmpNR85sRuftRpboE8ih2Udacyi6DpHuiMGwwksRwihp",
  "key31": "5rNQ6JRRnmjLsQmGCMrAz5dwzaPme56AWCTAqwRLKfwdYq1s8E1mqzbiJKTdw5PnCtKpt7qnrNg7Et37AbPQ2qNb",
  "key32": "2ZAbq8AaQsmcLpjdK4RWUzsptY98dF6hfHXdD29fuYAj2J1K1ns4qBG4PLgujnWsoRtmiyq9n9x42cudep5BTrms",
  "key33": "5mkkqGa9QuAMWKf89pnZQq1wWdsvemfKF9hrXkxPQhDigJvfBtvBXZw49PAcCvWEdLkHccGNQYPKmozFeLgLBgoP",
  "key34": "2j3M4ybMFns38ZjySKCHQp8JxsoNorVov6MFbx6MiFB9eiiNtNubW9phqziUoLRiYazE2h1iWHR8Tqm4vdovkHBG",
  "key35": "45kAQdYebXfEgNFxjxiss2hLSK89jkuJ3tnBQm1QfFYc2Rq6mJmUktivA59M55D2dorWK1bfGyUWXHyWyKVZgraq",
  "key36": "3b185Z92xQFwA6sz4LDyELtVMcH6RBLh7VsaoXgALVfHCvi8ZxK7cy4DgDdETbwsBLpsirNj4wW1PCenJbSy14Ma",
  "key37": "5CQgHuPDmqfpNXsi8peVPAfvxFLvQY1BzPFLUpkm877x8fboTUEYcq8Nji75roLE7o84chLJfteZ4ECw2y8eNX1Y",
  "key38": "5CUCgDopPTYnzDfH47AXC1hVgjBhEwPwiu61PU9VJEehJUEedq7TEyP3VcVw2MgyyuUJDNkmCJ9A57DLCsLdAVzu",
  "key39": "AQLCLEx8LFu7sw5AjzGbivbiobkeTWe7JHm2TLW1rWYqTAnioCyUdrhr84npDa7NU5uiDEh8WwtotzQxnK2CJsc"
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
