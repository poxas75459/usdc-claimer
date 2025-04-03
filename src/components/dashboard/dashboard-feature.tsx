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
    "LypwtPmYZsYVM3uSHXnLSQZ5eoZwEx22UM1J7zvKv2w7pBKmL6Nj9jNGVXgNoq3sRakchvuvijDZpN1P7RBzML2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENBwKVs7yenJrXWb8NFvQWnXUcTNAfSNpeu2NUEqZM72DEdu4apkgmHk6RNtdGbdc9r9bQHKHp1t2y8fYMWhpc3",
  "key1": "23N9B3anszv1jhYqU4xpfYeHfhDfvjsTLCR8WCwqomze5GW19gE6NSobyLnUW5PJ5xo3ZdoSDxJ8MTCXGAbHYHK6",
  "key2": "5AoGe8cnnndvXU2Uzr27xovc6gZpoPVCZ68PgkvUVHP24SSz6zN1zSxUoVdSwumEgpDhPk47TuaTGqgJbCAqQuB9",
  "key3": "JRyBsWDJ9WiEzKDbpNnccYvqK24WnrSRex6ofzykeZkrcZVhcPis3iks3f7op7Gztoaq5MQVBq1Ztp9VEkuPRCy",
  "key4": "3JWtm3UNFVomUaHPhVU2YTwn1MgeBXqKbx8wBq7YyyTVhKVQSKKjKv5jXr4Kn2X1FFP1bRBmFEcgUk33FAoKmMVz",
  "key5": "5b47cYuvbxVp6B8QdnonUGmuYcDrCKCMtoNepJaCcPLKomBYdEcJj5hYKKwskj7QJAePMMYMNQq1racxiB86PvEJ",
  "key6": "aMzoamgBcLinh4cXi9fykiMJL5qFRkZKD6VFeXBr6XUqJJUDmtN1G72jPMPCRwHEwifnVazRT6Pag5o2si8pfk6",
  "key7": "36ZszuyzbFPiAY5Cv6z3RGcAjGWyFWa5PZnpgMAfPZnMWBJBhiSQ3WUDyM3CZ6Y6o8izio4ebD8RcgRmj25XHaqp",
  "key8": "3d6z9BQxVZRVDPKUduhAm3YC96oEdSCW7JKiXygw7M42c2y1oUDtvZg6wGLYa116vwTReQ3jMbUW25VMwSgKgsK8",
  "key9": "2ACYT784xtGcdhLZGHwBwJ1YF9CVAmai1sAwqfwoGy8ebSpRUugUicW4r38Gh2giDLW2ofJS6xhYg2NTGzD4a3QN",
  "key10": "kqFWK4pNCbTWvb1s2g5zE5Cvn1GKsj8Y77HQJwurqYfnaGvbnBrozSnPdLzL4Y2gjmzftcsJGnMsoUbM9SH2R1t",
  "key11": "5hhT97PgUj5ePuA1G1TBJYR2Te2RiyWzdiZqDV4TveBqxyBwFoRhWeCMGgzYLkxmhPb2myTq8pNW6YtgMB8RNKzQ",
  "key12": "KyCyHXTsqBHFm7yac8gFw7rJkwPETmnpsYMYa33UTHt5nttJz7cuBp2Q3XidzetsGxBxet1P2Q29uixoheAxuem",
  "key13": "5P6TUNDFEKEYyemZPNEZo1CL85kakxju5dBbHvk2ob93pNDaEHjbW5bEE7hr7QMUf1jEL7GF9ZXbn6sYmWtiTw6B",
  "key14": "4pqVUFCVeTyV4GFm5dC21dHTyut78NoGtZZGo51dU8nnH8jfZfZ8X15WiyHyxjATHhAtSA33M1nZGqHRVpdHybkv",
  "key15": "DR6yHAuBzzWp7WEi2ZEJQok5qKBVJE7DDGECH9jT5QySt3AZNPkekRE1JBrniyv3Aw77srRuWVKSfezPZM3DSQh",
  "key16": "4n5B7b3jmYR2FG9FtG9EMLPBsw1hkVK8uvZYHTTYKvsqGWzcCDysNpaCWoPS1prF1bjviCAnzyEQhxbqnMNCAcMx",
  "key17": "33VeiBLGro3dHLZwa5RBCMzg5HXa3gDcqJ4iyjYsrgKhivFyYFC1LbWpvXPmYjXAHcszTTmu4NGUac8kiixcPLM4",
  "key18": "56NKBjRwponYyjBjVm4Y1tpD3fELcC53vC2KeGbg8fDzTAkZNWGoq9g6LttQs1VeDmsEM1nk9EkacVvp1KRzXv8n",
  "key19": "2mb26k2J2AbxF4d9TSCC4bKcyXRQnuBoLtx1rkDZWWsjtZd3DdbV4ZyqWzVZXhPQnzZgMJ1asej5nmg8eG8wv122",
  "key20": "5QobVXcJUhvjNAu6mYeSJwjtdKqPfeNMQjkqJapM3J8dqso9bVfUVJCb5vZ8pLvPSNMC1ziCpPb3K4nmLLvghFEp",
  "key21": "2LKiaSuXks6MPoG4wKqUaY6L4ywKNpNaXwd2EVEn2zxSZ6Vzf8r7Y6qNJdmQMZ8iEFEVeM8VaGzHtKZ6JqouPhXG",
  "key22": "45wdY1keFFv43vpimec7Leq569yc3XBhc1FNhSBucc6PDD9a5RBTsCkGhBvkxEi1m3V81AT84BUJNJGW4AuHF4e7",
  "key23": "4443L5i3nfc2iurrxHiKgYa8d1XLmcM81hvzzYtxKniWxxt9dLHpTe9p1zRNWmnWjFDjGJP1i7wprxhvJCUm2oKM",
  "key24": "2E7xefL7MtHphcBf8h2Cy1kDr8GCsgmLjLz17Rj2gAV7Zxtoypiw3PneevtsPxS8BENFWMzjYVFhAXvxhmVpdbnk",
  "key25": "RjYSCNmDvP19SiPvxhQ1Cedq2R6rEJq1UY2HVGazK6tzvjxzushB2y1fZvW1Yg3JSoqJ1Kooezu2DmKedT9SLFu",
  "key26": "4Carx5wMZBV3CUzhnaH77AjLfw1Ysyn3cFvJk6r2Q9GC5YFnM2S7CX2CWFB2zr9apVh9cYoXGBcMJbQZtADwtMSY",
  "key27": "3u5U8B8Mr432u5HcyeAtcvngYnYVgpx2SAChLx1W8HxvL3LPLuke3cnyHzfcnpiJA3A7Rq1MwYwUvVT3DW2WMeav",
  "key28": "gSQrdgAASCtTp7NKJYMSCP7omctW6GVksff22SyMxAVq6qo2WRoTNpidqu8nKEVQQTGaezwfZRq8JTDSga1UZ7S",
  "key29": "p9r9JoqScEabwpwPX3HA5DBQtGhiTSf5vrdqZvX7xThCkLUq1WyCNBboF6aNEZFv8qt5qL4EfcrDLHyqbTF4t2F",
  "key30": "3Q7gTsq1KzwbJBumzGnQK25YnEnNQRf1ck811z1RFfzVCWAWvv6CGTdWyRBm3p3L7MLqbkEE6kuzrEnnHeuomRHB",
  "key31": "4shujvTjeGV283akvuA2wTGwjWYidU7dms8bMUKQFY5oNHBv3kL21entYrcKQsPo9UTFMQ9Wbg26ERxLtzpDm5Jv",
  "key32": "2j4UK16ZsnDxDtMPLDdgAVNADhztze1Nyb7rf7fXhmGyFFqBnNS2tiVxyjy6RF7fNh17rE93yQKZ1dNzF7LWSEHE",
  "key33": "4DkuEkDw7USfXDxsnbrv2Y35n1viv2bsRd6Nwy7FdUNeJLWU9ckfwe6opvRCiy794ka8xH9XhK695GNoDttu44HF",
  "key34": "4EYz6Ux2KGtsdJt5qYQfgKp1XRXRyq3b8C2RU6wKztsYRwdexgpS1e5UbNRTFs1AXnSo5jEd2HCL6EkPqWj19v9V",
  "key35": "XjworH4vyxCtZkvKrSFujv7wUEqt5q4A4RLANrHrBFU7Ytw3t2ydcQ92Jgw8yfuzwqihBj8JCHp2qNJxEchTyEo",
  "key36": "2qQDC9oXWqt5bSPcHfAKJNv6cmYfqaEhi6gSeS4CHPZEuYk2pKDdJPDtr3uF2mNpaQiPPASWJTvjd5x5sj6mPUKq",
  "key37": "5uzvYhxuv49kq1cUJZmDV6CKbru8fQ7hnT6U4Eoxi172uQmFQGR15fN9if9nCHyW3x4Kyrz48yzXK6HSxxFTi8Bf",
  "key38": "65WQu1arDjNo3juD1ZHf2RVXYjNZub6CsAHc9JGgzhQ2JKcU54MXbMW8bH3YYAkztJCfSPqDdvV2RnchpCCTcskb",
  "key39": "4aXLKVyE6pcm3hWR1oWatKfdcgdfWU8yvTEwKMyPLG88Pki1XUfVfVUMiFpBt9TbnewqQGw49XY9AiwVoFTKhTCw",
  "key40": "1226JAtgQ2YQP5XJ1yX9Lne4xmV9aqvZtQS6woi5gPThYNGaBD1T9jcq6w9HqmxBVriTvnXmr5VGcfRW3Zxc7fc2",
  "key41": "4r2NSGiZgdULZ92DHNpDC4DDifS4of2t6DKUmvxEX1aTxRKs9oUgEdUC3E4ffErfJcRCZperuwcLNogQNVFAtSQu",
  "key42": "4zF8uCJadYacURFggbQKpLxZRVEXSX9iXSr7UXUc7ccD3wriMcgZPWWfLvaLTzrVuQaZjKVixuixS7KQz718HcPw",
  "key43": "4kmvkyE8PJkYiT7CzYnexgDHkBfshT5FStXiRGLWtWHzr988DnaiGmuYiYUASbmT1XkWwGYZLdoZt1Qn6VesAPkv"
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
