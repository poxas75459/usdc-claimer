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
    "shQFkAzJrvdEK3Y3XuNyZiFx8LNTPYAKZk9PwyT6DRFPic6X8xv691DEkTrMesXBm1Htubut9owfTE2iKvxreBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WU66XRNmm6FzpSFbP7okHPkR35Rq4VXFsgpydUrbaVVXT3DFsK5TLCRBEsHgRt7QskPcWGidqjLkD8FaDZNCx6a",
  "key1": "3VpFc5UTdqHabt6Z3Ea6QvnPWP43MJR3szDnvYr49KjL23xK9FYTrn8giM7NJr1pcRtD6VsvFfJqZGwJE9LeaYWN",
  "key2": "LPANDvYW3ofopS9rN6qR81CYYK3XRLSCo2iFD7DmFmAYT8d3BfBwUKYWh7UZTXDgwHCyuJNdPi1wtjWHZQtjBfs",
  "key3": "23nSzmvMtq4WshXEv8adwRTZtmUbcYrWrFZ8gQZc78ki34ePYRwSmhbHYfhZ1C7aLVh4oadPxskcX1X75ozT8LkP",
  "key4": "5MB5kmhYmqxbxfiFauXoLX4NXs5EXTWRDmXAzzAi637L56WDM9iuUY8dKCsV6RSUvMRygGy72iCu1E1xc5MSkH28",
  "key5": "5rWJ4bfaSLW6bQgxjfkvWPCaoLk6int7Kwf4rEdCWPaFqXcJuMfALUuHLV3g4LTVC1jAkvgf6eZymYfu4fHU5u6A",
  "key6": "4FkYcy2eMtomC5XUgxJAa31kRAUSH1EpZgTpGBSdfUuR7zB2v6Hw7raPxc52SuQKX5L8x43KPMHH7Qd2AuWHmh9p",
  "key7": "4eTqL9RdXF1NingCsKbHFMorpGMUqZfnhQmnNbauT5ZGWuxwFvv6RY4mBRYRyZFBqFHRnT82pC8T98BFBoKCNTCv",
  "key8": "4qCLNRPuFg3qwtheCgqPg9sFXSkDVp8xNxHLzHqtCJZP1RDNu9o6wxVcDMASbiHhLzS4wsBgZMS8QT6bTfdt4L8n",
  "key9": "4U8rmyGnzPQQivq3zakur6UuX6WsDE2kdbMpxzaxrKZ7BwakxUco8ZqqQQTz4E4AoZ1nWfzGEvCuHLScHqncegjF",
  "key10": "2xhN4p6U8q34a6wsvVkxGDz9Wnow8wkfxd4jxmRAYq8zCR1kLSnHcV5zk6sgY25fsGmMhsHRY3Kw8zf1e2oNn23b",
  "key11": "63jojszpx8A9H9SCMMZ2iQG23rDXBR2Ypf6MsHXnuCskFrrKfRwe6kGmhc354Jgg33BZiRYpT1qo6ViFfCgrNZmh",
  "key12": "5PTmtHakkYaioPazWQnNv1fdGwzq5tXFWn4BzJwRjz7sdJNcJqiFajfYjBy6EBQdNDVVHNeGGBnK9vKqu79mpETq",
  "key13": "JjHaXgZiShsQvaHc9HD9rhERphwsXnh3SV9mWCJeawYtNzb3gmzcq9j9Py1dWyyLe4b488aKowW8973GAbQpQhV",
  "key14": "4ak3wUuTbcovTWo96ykce1Ts9Tb5CGyEdySXpSJ1GjfEA4ZRBkA8Jv6CbSTFfcCYJhaA5hV2YPeCJ1CiceN8QzoD",
  "key15": "3vvH9rLq7W54emETe8FqsULTT2nfpa1N1CnZLEhtYyhAdCScdiMVRsaGwW1NYMK6KKcVReN5wYZB35wRMg8zSQji",
  "key16": "cTSoy15HF8djKRzeQW6HLGE5trZu7pHn9kQnt3TKJJzy42B9TMEY3DskXQYvP3sJ5VhPAR2p2xHmtA6nDebXpBE",
  "key17": "itpgtJyCc5ewsZ13SpuFfDbkicrymFLYYwyWq4EmpknmRGgUczC4UJ3iS5LabyK3PH8p9Bg6kBzDkUZ3vBLjcko",
  "key18": "k4P2Sy5Q6Hap1cZCEvFVDg5WTHVApw9ZRUSUY1a7XWr5tZAgMNspTmcFzUj933xe29bTXaeL7YFF4gNouXNytWQ",
  "key19": "4gWgeeRUghAfB7nqVuAfWRKmigPn1NKdKBfPtKgYjnyUxiQs57Q5hgBcebJv7DMTDGqgdSgNboLn9BnMmT8L3BvH",
  "key20": "4Y85wtfVCb2ih6XeasvFasEgK8FyXeR7NP4hATYJ3Cup48cucc3xr6vn7eXenzJRcV5BZQ9Noq1bHp6Xi8y2YjPd",
  "key21": "yVidx2EvApLpwgN17pkRhpzh7n7hUatBAqfEFpL47AaBab4EiGJvpwJenNJbF1KSpDcPL8eJkVPimyzX2ZGACPQ",
  "key22": "S46tpSYkTXsvUWqLAairSAGMQi2cwTcij7YN8dBwRCbYhRNdwogLWKUketKwbcjzWW3kwbHVEgHAaX5V6DxJuox",
  "key23": "h3DTGo27s1ZGggqF3Ek9Vw3itHEjUEHzLrBYYRvkAVPmYLDBWUbX75epdKCdHo46UXTtXTegLdV3VPPupeET1QH",
  "key24": "36ZtMjmtrcA3skov7eW7wVWGUtZsTbA6wRS4arvku1yuTbrqmiaVHiafrQUhqCDvAZpGNLpyycGV4aWA4NXayynC",
  "key25": "2ZkSYhLEx6XaALibmfL2YcLjJdUKJahqikzteGqKrCU5TvP7ofYMRvcQ7bUtM2wzHiBEMYtG9ceoznuGhyaRLMju",
  "key26": "2eXxa7YW5VGVwaLDKwXRGMW9TSiEHm4Ra4ymXxRsDg5hmwyp3u7Pms1EUXVNNRBULRnorGFU4Y5Wnq2WADqdGmMk",
  "key27": "44WgBBi899yPUKWU6w9QE7q5F8yM7s7VsX89TxmKkFJyLjZEBxRzaYsPQvGNSpRa34vT8oMUznZ5Z1fzqXUk3WsX",
  "key28": "4F9urA3SgBwZB8cUX7Szd3omgQvKifdCpyrpK34MysQsi7pRrzdqKp7pU4Lm3ybcFufEYcfTDj748o3d8omQmkip",
  "key29": "3vKuMcUtpGaDNyyd6TkjnY1ZnxKBYMLAdXJGGdH9i2ot7o38hMyr1J5H7jfwLyQV4YfHV5o8tvZ5y82pzZL5rL9i",
  "key30": "3rkZyc42yLoam7HvM1xUU5DwBpj4BHiPbdZcqSgncLsN3WNiQDsuZrFMMfvqqMCrgj2jmHDg1sr9vtv4HaaKAD34",
  "key31": "58LcVsn1UcZqENvcKK37KRJ2LdnhZ7sngXt3hL8idCa477aw61MzCCYR4AMFAY5F43oBfjAAosV15PZ1i7Jbn3hY",
  "key32": "3ingUG9cQeMo4XpzjTTM5N8TTMkAoSHmsThvSd8HmksLouumfRff875D7szB6MU29dtNVCBZTtTYqZ6hvRp3B2GS",
  "key33": "4ay156W3bRgw4riMWdhpen2Xhvcy4mk6MCaQTbrGXYPDyPapg9R7ghMCTPFh1uHWXggHYf1NeKib8ccjn46vcYT7",
  "key34": "4XxzQVzov3aWJgUW2MBga8uzJZDuuLk9JmNd32PgajdAEbYpadDgAoSe7HTsXZNUe48hAkhcsiSWfQfgcWzbsUAr",
  "key35": "4vqJW9Gih1nvZQpqjkFFCFuJpjMyBWeeYrhRdtShoopCqK2ZvamB2PG3stp71ZMPk1BtCk4Yh6CWwMaSBrjsBUS5",
  "key36": "5Vvi5RuA921WFEx9e4KdrCKigHhiJK5m4zpEkHsbaDHLgiN5wy6Cjjq6BrxZcU1Hvc1AVQeamS9DiUhBgAsoXxz7",
  "key37": "YwBA8xBd1Rcv7ktDnEBTke9eAtvZYRNsLtCzd5cvegUJ8N17nvUCcvRgRAW58zNmedFgLbqxRu4nJxouv3xDJBj",
  "key38": "4J36L5oqU2YaW6oCJgTCACxG93tuULLMgEknYUbBEti6Fk9CeEDaZTzw8PcopqpSJK1YgTiSxz93Ck8qzYC9v4rQ",
  "key39": "5NMLCP1D9qF1pdSwNS4VbPB6PWbErLPNjx5oivquCNSj84C1E7pFW6Y7PSqZeRxWscdUw3NpBejWsgdKyUGWtvUr",
  "key40": "5EwDF42feAACJst7hMTPo2cCFsUUgPDrRSfW2yBtgPLxpxSVtX85iYFvdzmQFfi8iyEPnSbzj4gWankBaxtHK14m"
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
