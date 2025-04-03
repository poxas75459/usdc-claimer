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
    "vhGCvztvixTsKhTcN8QFMJ5heK9VgD5GqyiviVDGfEMSCP4W39phAau4ULaThDvCDw5KH1kJuYwpBPW82rwJUEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hD64QfG6Ew3Resbpd9pKFP9bF8PEwcLDBgNgFa53KVEhtnVd8UgTaZYQu2GHv2FYmcsz2UbuswDZsYpnr3TWrNU",
  "key1": "2SiqgJSjA7qCnnrmZXENKh2ZtABqdqqySABwLFY2giqVJ7CB2UJbqueKfqJY9Z8d3yXoCnr5F6wCyKi79puVworV",
  "key2": "Fnhumm2Y8JzSnyojz9HN2uSdpgNLsDRAptayxUj1znNr3WX57NZnUYgRBPCkBjHiRRP4LDYxTEDAR8PfWKMxEQt",
  "key3": "2TnP8XygThMD5qyXSQNN5Eom9MLuyPV4qKfzfcK6Bc2Pz8ZLFkTLjeSsKxL9JVWFHMc6H2M3YPX3wq8xqcK1tw4",
  "key4": "535vmfbBxaQTLSPT1Mou3brFtL8DqkDWko5Fk3Wsx5EYTH6Gpk9Vur1UqeWAVoHs1htfJAxzbVKRcqhnh4eDrJ3B",
  "key5": "5XrYkUCPMTa5ZQBKXgfLJjz1GMGVh1GBuEpqaWauwfAwDcVLzxGf2NYtRV15DQEZn2PwEHfzcRqS4mWo8Dyvux1d",
  "key6": "3YbWPer4KWiYpQa1wa3gAZwkFrbuPuvAounD3N2e7VBqAQB82nBHmmZsfp4jcR93M7MHnghq1CkCiVA3utyJHkWh",
  "key7": "2tHsWznL8UKcLVdPnPYqBTU23uLKf9waJfctxDB8CfpKteK3JAkQQnMQ3bqoGtREtbAqumhq8ZKNz41iXiKQce4d",
  "key8": "3DHbDA985h6S8CwfdSD4xUZ3Ct26Djpjijf8gVfUVcTXkU4mWbtDiPLrU4aq1pE9kTKfG2s4YDJ4YoPY9CTWzyAf",
  "key9": "58DYKq4oazyfAe1HFVtkXmygf1AwU1Ayxqqu8fK5UP3CNPy5QdRt1LyCkMLJoEcCLsmUNjAoZsg6LMcgTC53KTp5",
  "key10": "5HMPSF4QyMeC3WZ1L3gzwBD4sN8n516LhhZkyqTBYxoHDjAA7N79CWg4n1oLXzysEB4YmjjuMx9iYfYiPfLeFKLT",
  "key11": "4VpNa8R1AVhQZQRuj8KgL1kJQBbMoX3ajWx9sttcV6NpCkakc75CNbwrnp7A4btEYF3KSfi9eck3y9vtiCbjwWe8",
  "key12": "wK3qMvhyVQizmbKv1zAz2pJKf5KNzwX4Jn99bdmfkPNfTP6JVY8GWhAhfLvwYD1y8EfYaKoyGVNrLqLy6f5d1e9",
  "key13": "5ZHUaDVhXGTktJCHcjYzoNHsaojSRG5AXijdtmBTNUtVBnxagxo6ghbrxEEg9sC94ZSwoYwRe1PKmwVovtW1eu3j",
  "key14": "4FxVKCJCD59WDYgkjYYUBAnrvdP9UBK5HLwkgAiisbXYZXJnxwyRBxMpk5zhdfLcMAgg7k6wjQ7HQN8RiysLMEP5",
  "key15": "vrsjXxn8NWFiYDspoMCsP3qWcEgHzd2MuLRQeCsfJeiqfsw8hMcDv66ksTacgFvvutzyD1bnN37nS24VCEJR22p",
  "key16": "XNaX8pnaae26mRV6igU3H1tEoQnVnGddWa3FP3hsf2vJNYarTQNMtS9YbeGAGzwnq2SSrBXUSFQWrbBGwHz6csa",
  "key17": "3xEnMaMrn2NJgHrKMtHRuWZxTg5yGMDj6TWs16oHMRLPEQiCnF296ygDAaYApSbjjG9bhzz7Mzc9vECESvfjpPGW",
  "key18": "2gNigRtZkksc6aLp57bvf1p8FyeX4x1c7NdxvYPKBoYyGCpbCuqtsEWnNCyKLsdegv8hTE3Qir3Z19NhW4bS4TXh",
  "key19": "4ruEkR6FrFmqB2b79r5eoWUSuxgN9kwYxfumvja3PxjjrpRbCn9a5b959Ji9kustoeB5ksoWDxKSLpAxWFTiqHev",
  "key20": "5Go7kyahqA53nE2FqkdUZ79AueJw1rg5sN6TD3vCATR2qu58VJVUxcrEJTDroZuVyts8A667TJJdqPJzmUh6UUuL",
  "key21": "37k5gjRE7YayrodXCYeb6V3cG834sj1qL2wMJpJRTrobdxnb9HDBoD9XXNNWbaQ4p3wz2oeVVAcK7cAF5m7n3PYd",
  "key22": "5qktuDmbUJnrL6y4c7xwg7pA7HQ7pephvYwLAHAbY3yf7RsK1xL6jrquHdnYakf9nBJxZ18jjEVZ8u6v7i5WZ8cM",
  "key23": "463LYqGv85peZpPNCzroMUHkXVQLKPJdk5nEnKUampdBkUTvrFYFuCBE9eNZYr7mdfDNBiJPpViVhkLbmyNtUjG6",
  "key24": "EdRTph5Ktuftj8CbqDXWDqHxnbe8HVQZNfdeACehAC9iUxFF8VrQgoJtRtVzJAKFiwj4wV3tfx2DbBYFduVmiKZ",
  "key25": "4FZwEdzDaWohMuav3hj9F9EccY8SpL5VKd5caEjVeXXV2y1jwsGQ8gFy3UG8XaBLHdhrGnS2FPNjrBYqi3EfcZz7",
  "key26": "2Gha8kstiXW8DXgqM8XSLcqP7UWjTE7Tcxgb4A8YvVS6ZYExACyu3emtK6QWr314oDUkGDeAP7vfNQkJVz98L4Sc",
  "key27": "2puLcfAA1BKWmMLnot2yQV91VsMSbAFDpewaiM6YUTZEUYw3Hwh181JyDFcJwsisxUrsogSHWBQNpGcpDTjBnqEW",
  "key28": "4FqFoMrry1oK2FgdAG9ysvU3hpBXDHN1bwKJy1VY1qQh6P6RfqtYJ1Cqzn4kZ2yAVWBKpLj4pvwB7H9tLmuYmUaf",
  "key29": "5Y4T9WXxk8nMZQzTQQ8ra2akksSZGJtcX66sCr5asG2S8jQoT7cy4mTr2tCtSwahk6Vs8LHPKc1VPNGKYre2mAsp",
  "key30": "24HMSwMQMBn43gN3oWoasysxXs2W3FSG6n2TkUWAdsprSFRRRvNL7BcCsdbAWXEX9A8CANrHc5utjx5BbmiSL1VM",
  "key31": "rgwVZNz9Vead4YSp7sMQaoKhFiXG7PXe1q3jCPhGKb83SDSS4YTVbL36AnfFtdV6P6YSDapqYMYpcywJjZHrGN3",
  "key32": "edjHSDYBsArcwJH7cRkKoRAatNKN8qiAWq5j8sY2i5duD7Y4S4gVFXihqZJQMqaKj6783MTVeDF3KpcuLhuVhv6",
  "key33": "3qebmYGgkdbzXCin9RdJZs9RneEmZtGypQTKn2V22EEH3C1VKEDiV3ULBGoCQpM7obzxsueA64SSjTp5v3RC7imm",
  "key34": "3CWHU5PKdRLewt7TQfEQpQkuZ9C9R6C7YDwJtUHALvPeoA6HM6q3jHmY2mxiF6cVwSLV954EjuFzmPViQt8XgA1d",
  "key35": "5dSPgb5EkU8Ye6FKW1STpbHq3QQDmStJnqyH2MLuaU9PjKED1fhARQcHY7RHKygzm8qwHxKeqvU3q6WLqDUH5q2R",
  "key36": "S4ToxbtXMCrPNyuEmPXgRJsJvo8bbWHRATDM4PjMv9tf3Up8aT5CzUmnBWrSUWUD2pNVgcwewfFgTm54imWMjoY",
  "key37": "2SM364RoL92j24pePzU1auuXTcYt4s8i6UrQYTgL5oKf58us3QXw5kDomQ3Pn3qp81iaEoQvMCDYegsbEg8bEYqr",
  "key38": "qY1ccsNkttDabVAgVxHxPcfPMwWK6GsxmEHABAwexWL6tjmPfgGS9Lf76yZnebcp3uFZNUcEgQpURfYPcBptDsw",
  "key39": "2ff9WAxfRKvV1e2CN79Lc9WusAGTHdXx2tucq5XLk8pdJmvhQq6tyXJ5W2dtfJN9nX6VUTLYUxkPasMLL3swsj4W",
  "key40": "4ndvXAFeTCKn13w6cVTTZuFXWTYYgR8j8xR8x9FnM1WbXDgvND5VMtncydCrD4iaJrDv4moon1woN7iAx2Jt8pXY",
  "key41": "Bom8qjSVFrNJDXGnHqNfT8MmoQ7LVjpnbVSJxnQ9PPPr7Nf16yu2PrLJBjgnWTwVxn5er8vKDKv4yDPoo5zb7jn",
  "key42": "29LRK3KezW5EVQ6JxH3JMbWBLAQFisAt4CLZGTa4HsoxDc6vwTVtkQ5dxgaSFDLKFddvfcN57xowJroiNUBawPfW",
  "key43": "4BGrbqSeeUnbbVL2odgHNK5s6jYbijZckcT2ac4BB93adt29Txwi5BYbGmNqC4Z78dsd9jfy7paSNzRKzt8Gagfu",
  "key44": "5Xy6Yi94gN8AzNbXfMLi7PWFHwQ3wYsV96F1AQuBeMgUkgJUGmVN7Q4rsX8UwC7QogApNCNZnUq8F7PjPjccEQ2w"
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
