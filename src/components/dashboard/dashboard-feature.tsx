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
    "23KgFpoVcvnwA9sTCyrbGJAkcgvAS85FUzFRHh8rXVBrYcFaC7zPHhxKqzUTcp89rExyDDBdPYPEiB1HXYyLXkA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeQifwcSXSWFuvbMVEyzbMZXmMq48BRQerXMj2Thb2pseEpMy9cLnQ3Cvzx79BuusAVDMBEoJjRXkDWJwdYzLio",
  "key1": "3fM95db5A4R2W56jpkEFoL9d5YnPYMRyuY2Sw1cfUFhezQaET2LhdY5HZCXWH7pWsEY47E592qUe9crdtJuN1Aux",
  "key2": "67Jx9c5tYHbWbFYJ2frcDoTTFBSj1CgHwgi38cw3oDeMb47L9pVpDXAfVB6wTwqhnw7wtBfsJ1yRD89RdkEQts4a",
  "key3": "5GNP3j27fddCmu7HHxN17p7XkaZ7zg47JEqTbM6wWQ9KUqXkE1euCv8dajGuG9bGSY1LKy5XiQZrK4bMhagz5tZu",
  "key4": "xqHfCzSSE6bnhFQKRCDhH7NuYDiPYqmEktJomcMkM7zMFEDQPRbtF4doqoTTqnHyZZTGHQyDy72nGFwWxz8SMMj",
  "key5": "5H495dfTWd1SfWyvPNypMUHYx2s5fDcvTxgWGynsAc3KNs3uUSZ1AjJRYqLuxB3cSybUzLA9gBPuoXZ5KDUnCEEC",
  "key6": "588p88SUSfWsN9WcV7ffFDLGCzQThiNFiZfiovHcqhQoeMsbAgyQf5oBY1PY3Rnp3vLA4x4MnDbRCg6Wpq1KEAJg",
  "key7": "UZeQKKzJZuX3nXPD1iAg65v3p5tgxYHGPzXBr3WMgvuumCc6gdFjsSvM5QG5LcGhBzK6hKGdJ5vSVAmouVRS85s",
  "key8": "3kHtYM5odmzx3dTz1CrZoJ77zZybQPvZWiBP6QrMqDpwKKR6WUi3sDasU1WMCdWVn1QpCSRaBtCvBzJf7ScoWAdb",
  "key9": "ZWpkBvWBbAUG85GasHqP9BXAuYxHE4YiMkRwZGBPmFMqadQzBpiUmfs5czmfdyhiK5kCa18m9LWb5qERBDbzuDC",
  "key10": "dzAFDuRF3Mw1c9HS5XFA6A2sutserxp4UhAZPT8gzNGzW84YL17oQ2r48QvKH3FLjHB4VAxR3nrRck7NxW7DgMP",
  "key11": "4AbTJ2Hptzp8fbDzJa7LMSu9yD7FbrFbNQ9Eq8LfTF9c9dEEyzx7Yhvf1bV2m5C5ga8xypQy37kGXVRfCo3iWXBC",
  "key12": "xUTgNqnzi2jx1GTSNKJwK3JByTMLSz8TVxaExtEzpYcf5tQKYj8v46dgeToMHVUR6tGY4SvrVLaQbmoXpFuB3Ap",
  "key13": "2TJMMPkqs6yMduGsbsz8rgrvKT3rsa2Lc2xtPfcw9apS6e3yfHVp4fjL57eKJPP3s9B6DiN89yJZNXyyQ8p3PbcP",
  "key14": "2qjTqVGp1bDhueMgfXzwbsRMPGvwB4QLwMorWC6LvvKkhTAgbT1QcKS7DMbcGSTFSYfxyND2rrxiXw8q66p7jS3Y",
  "key15": "LNF8XfYdG5zBhYp4Hgm8aEqUDNC5FaJCJm7QPocmn2TM7FzF3zmKub8aVjT7uV7UXM6F8odTXcEPMxmi1wJE3nU",
  "key16": "2pZW2XZqLPouYx7DNpekJY7Evxnw9Ri4oLDj4MxpUCtNYjFmvCTZEtRQjQzfPrKfR5NHDSPBi79Goy5gZtHGXqVA",
  "key17": "3qW4XANnBP7AHk4TqpMEECMTCen7csKLTUnu3tApMWUKHpr2Mtr6ex3TV3NKn93jbD4XQQ7TD99w9p1VjLnXDH3W",
  "key18": "49ewQ9WT4ceT2uSfsjGwXiQgy5yu9pff6CicvCYGCC7wyLpx12WEKd4nDv2oUhLV2A4w4SFbZT4GTKSgv62yVY6b",
  "key19": "23MtGw3MrSbftAV9y2KNSwg6KxdR6tpwXbLWh5AAvkFyMovDWQr8MXJTKC3QoCJGNBEY6uHoap3LQ9ncBqAYYoQu",
  "key20": "3EnptwMyXktMQ7eet5GDsF9tw8ibQnS5ptbZtjP98udACDpnQWqUoELdFwygUXihMRt48Muei2gjt5jy3G37jCmK",
  "key21": "5boH3AdBPfQzTE1ewTgRZskcf51K1uKWcBRdBwxWk3LLeEA4tqP7ovBBY1SLqv9Bg32SDu7uhrfieNqyR2xLt8h6",
  "key22": "2DLkFuKhv6BtQDDvSLK7jygaH3w4vj4vFseHpYbKZYcNvX4DuLr2tacjFmAugzSsx2zYdXUjAY66wjSEraXuk4W3",
  "key23": "53JxWFzx5e2GrxTJn4GeQD4DHc5nkgu43U7Jb96q77zLv44W7uL3QoDZDeZPRjtanTv8Z7VnRytxo1WU4w2Quey9",
  "key24": "4yavsRTEioF4LyEJfD8aLgH62ZSgBePkMpvEGw9zwpEGey9mrEXMGnRJCwu3PhgF2Jb6RVnANVcnpzDmdjgpAubc",
  "key25": "5pWif71JjbksHEQaLS8QutyRGp7WQVDt3ccEGkb3uyoFt9RjyRtMbXwxGxo5nZqKJyWF7uqxiBXuqbre7dwzKpay",
  "key26": "2QngWVaRtn3WRr5g6CUG6nKempa4wHDqU97SPHVANFKh5xuB21EZLi7M3bmXUeYN7jHZdNprMiCgb1aRjrfifXWc",
  "key27": "2RaCUZqvUfJxoQGXHNF3DRxs2cUntqmTb453GwrWFjUW6XoUY6NiqL1kBYHkEGkUjEubYTFUDHdoXQJrJWALyGra",
  "key28": "3LitCrW56P48HPYaRUoFiaivahJCCCjD61sWABrsyvytTuWkky9u47A9ccbDhd5nK2bMen7DG7joWz1uJDZYTYkS",
  "key29": "gS8ue5SCQDHoxNcPFd7gMRXNGDHAhGBPqQSTixcdVHUnTqUgKybun5JDwuQDRhNwsUdmaWmMMA1nVcwnzKAaXK5",
  "key30": "5xKghkyG4vmdprxzF1yQfZN2VhaUGr6hezQhDrq5RbQhKaF4S4q3KrSWg9TQnaToT3hTJSCyR3n3P3KPxzktS5gV",
  "key31": "3n2scNW7LwwdRyhapRnntF8YPu7VoAmHtNd3JBoeSvraKNdTQ56GP6KhfkZUS1iPavwpiSf8Pk8as6tydr2hUpeB",
  "key32": "5cW2vK6sqdZxbjT8wiifBLjzZLFZid5UeiGXYfobnNziSVXVb6D3ysoDeroiU9KpxJm79aWC8LXGxbPF6CLPNK6b",
  "key33": "2paQqdzdYRYqT8x8jAsA9wBGpZUT6eRvrKjSHTTvhxgS72E6rtJzVP4b7E3ioQF5R6dbDDGzRiTu8L8d3fPmuekM",
  "key34": "5r3u9KR1s8GPkHV8ykBryZtG9Skn71XHFmCnUZxrgCR9ibTj7xMxgbJAzN6jWS23XuuukdkJyNfKRgWYFegUvLu5"
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
