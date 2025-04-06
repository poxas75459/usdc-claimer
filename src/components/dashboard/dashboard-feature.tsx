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
    "5QN6XT5nBmdubtUv9KN8n6uLJp8kxgakdun6YK1WMP4p5Nhca6qK1KMg3WMeHCsAsL9tCybaKeVGZR1CbvkfPMVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQytS625TpYxZH8zd6pPTkLb7cYpByN2JD68xGpGoXi68hD78SGAeCemRuntNXTtUqVpxefsqvHVRjCTRtAQWyE",
  "key1": "5yhYEytbBDv7T9f4CNPZitVrwTqzsSF4TUdPcZ6t72QmwF9wTCpsAiYPEzsTyXt8mqso2KXr9mU3TEdrdvCknu8a",
  "key2": "4tjnftp6D4mkkkwN6ugxnJZJ8b1wAwo3vvf39byHF7hpKHXdSJJtfnx95PwDVmzWLhabovgBwYC6GzH1ctyXLxTe",
  "key3": "4jcmHT2D9nTeEZ3huy3zaCoLphc9GNzMYbX2xYcK4dhvdw7J1DkR2rcvA8WUDU55Vc43cCzbLbArWPVJ6neNTcPo",
  "key4": "2326TUNLmQfPeZDNtd5ddLsE3sTJcfMuyMVdben5T4Aecc4LdPLnGCv5dGQRgyoPjGnQtVsZ5FWYZWVWYQxN2NAK",
  "key5": "Uptf4TQF1z9LpDripgpWNei62R5HS6js66XU4iaAoiao7BAnXkLR444YSkBFE55pRp6umkb6rpT9qfbss5FBuXi",
  "key6": "3fZdBBTbt4ZyzTF1eCrUKExADEMUn3Nt8UUDWMd5zx1YHsea4adYFCw2qJ5fdJXj3eVKMr8xaeReQrHR3ABsr4KA",
  "key7": "5iinCGhNspNoYYygK2ef1VKk6LdwML5Ea5dhUP6vxB62huCdubSvzQh13bWfq6zGNCnsUvKyP2U9LxcQz7tpCm2B",
  "key8": "XtJLkKpHrkLX3z1vsnKANYVjeMRYEJs6McoETCUCZ77NjQ9yKhTYxp3mxW8mJYAEmUgNp1cxQsrtnCbvEhaPzqV",
  "key9": "YSQs9osbRf1dELjgNqgwACFKac38eGMt8rZxGZLHnAHfPXiksma4iMpwJtgkVnViZEnp8ciotsdFkqvkz4WSKEb",
  "key10": "2RdsyZJoEGaQyfuZuy2aGf2WYynEzbBXR6BhZyRuAYKPXoWrmEuujUtwHgJ5WBAbhWs1E5nAJPDoy42v3UEtjUPy",
  "key11": "2a3ZCE3XDL8CZrswrnJwTSid6Yp7Q16L8GPDR43K3k6K41m6E7fYSTW87gJjkv3zKH2HK4mW1YQK2f66nYfucmjv",
  "key12": "3zve3kF8k3MUUW2jfzhBpJkdcWPCY78Gf3krjoRDhxHEgSvo63pVZsrgpiDrNiNXRd6EyToFrXiTFZ6PT6RszAhP",
  "key13": "4MZpTgFqdqHZNVKKvqCrrajymxgEfNJZm2TvUpiBEH1rhCJUuo7tpTEW3ehggXwP2zrEpuMgStDYox3y16sMbVJj",
  "key14": "48UnonyMuZhrbncKYnBPbTfvbjxQKzCoCXdSA8eiFjzW5J2uDNMKG8cqxWR94fvQQR3NHUminTCdQzrbnsW6ZpPz",
  "key15": "5YMuHTYyomrFuri36rmawmZNLcmEVKfmxi4b9j7bTue1vNVY4hVuATmiJ66tG76UFXiUaMqECtUSL5G5vafpFrbX",
  "key16": "4w6PTxDeK36FkNeqStamXr8f4aLZZDbj2vBHMLmQNbGbirekCumHojWAp6e8U62Tp5WoTgPP3dh6yjRZiQXav3K1",
  "key17": "3zk1JuYodhBwx4A1GPvqDSCygZpkgQepmqvcnFLwXMN1gWSe7XbyAqfBPsRRmnbiJzmBsE7iBCtHzKfuTRba7Fhs",
  "key18": "22QcTpZbSQaEoeNDXJd5YpshAqv76fp7fr9ff7fW1xzDLEaE6Ejp6BG4GnhFJCF9cM9HxJvUryLuurqNXyPLooqg",
  "key19": "3sJRu48GfBG3t715qvMTMqTH9tzdfbDZLyo55xyKRoHdTieVW2Maybmpp8pv2RzaF8Hzu7drieWbh71rb1VSv25o",
  "key20": "464VUznPxdqLqM3CD5MQSx23BjeVLgVwNqAhJqrAbrUxpbFRVHvdLrZxbVFMgV7NbJQxYQxCLJQpn632F4nd2SNi",
  "key21": "5Dt9sRoudDkUv7CMLwgq1ZjnZRbnjE7aBqxZDQcE4CCze5nM7wbpuccGMXAZPu6dKR59o8zuzGo1ePGAcemciUag",
  "key22": "4t3bbSdNHXtajLnRpRZCNbDummpzs5ciBc6YJeqxGaiYDqjG9Ps5nswqJcvbyeyGgZPBTM5tNGXi3ikHRhyVWESG",
  "key23": "24SbnHQMRuMLdNqYRSkw7uxe1f5aJbNSrFhabSy75s7w3odHdQZMxtmDMRNDRd3xXr7VX19xR8NEEyyKUcm3WAox",
  "key24": "4MfYQNKTj7DDKBrBx7EopcmTVhuyy1hcVSKEjgfCkMfhMnGeqmQbuVLUh2A96x9CCFqccCP3pWQ3s6Vyp5QEV2My",
  "key25": "4x3gPQJjB39sTRGpmFYKfd5zK7yHPQ2oi15W5Lh1WrdZSuUXq3bDRge7JeCx6iuGHtak222rAXeBz2k2S1dJ6eZ",
  "key26": "3bCC2UzLTokDyC7b4pUvKanU3Puzc8n2qVmeVbYWiJd9EiYmouTqLxpRMv78GBsU5MGyzDMySR5dLeBXH6kR6GHm",
  "key27": "5mztZbcfkU4sYWRgNWKWh6sAixTuHCnMkbqtFMzVE4Gi3meP8HWzHs9KC3p44poKFcMpCAkHCebNfB3zn5AoaKG7"
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
