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
    "VLendeLYxo7unsus9DL1733ru9rWsdLF3m3SEMwTxJhdMXC3tiQ1eF24o5gTeV4nri5gzaDeTmJvsLaZukwrjVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KML2Uk8YL775waSNBmUmbNGaDX6DCWWm5cS9W1F3Mf6Kbj18GtYGv8uqhHmXcr64VQst1NZ9LHNehR7oitGABs2",
  "key1": "5da92RLetU3RKVu2TeCtGRNaSLhWhnSshLEPvnwg7cQrFXQyZLzCGtuvAXW2F5ZwTTWtRTmcnQDN21qgDMm942Yu",
  "key2": "3BHav2CP2SurZxEPYJdTXd3UZCtNLmYyZqGb8xVWpm4VdATMpFWzpA288qQk98dSiFcYQnspgodCDh3ENi2fmji2",
  "key3": "49wMCHHYzoRyzMNfCZJgmaXeFn3eiwmnJSe1LGgnX3biYkjB1N4BBYhbg9zsGhUKFFmkttw2riAstP8in6cLrEUw",
  "key4": "5BMm8F14oXz8PJACfJGe5qcLhUaQtrBEMuM6TTg4oSb2eM623CMBgmUmgMUh5SCeH9c6f3dzG7nft77iGcA9e4v6",
  "key5": "5M79bEvgzRjxxKA6SyZCM5VcjDfRSxBwhXVT3ACS3DEydZ56m75bgacLww9BUUEQLChakDZj7RibQ9Ws2JPZVDic",
  "key6": "5ogNgtioDgPn1EeGyzusmBcry6CieNbc5bfcYn8V4Sdv7zSLT4sA3Wp3QpddthJSkUsLbQd4Baf2eKsywwoV1NSU",
  "key7": "5PYKF9BNwrW3VmZ6TWuKs93Dw1pJgUi3B66u3dNFkzLCj4jze9qzZquYDD9Mz7Hq6sBPcrdoVPu7cD6RX1vkVHm1",
  "key8": "2tU3hvnFzkoTKcC9VewrgvktmWNnTvLUEsRS7JGxENfasLiGbR2EtMjKmADGkQbiUWEehpptpx5XPEaobxXLVBsQ",
  "key9": "5gb2tK5VUw4SfmDgXXgiYae4VPJ94KGBLEJa27wtNZJHWTPo5guWRXZCnMQ5QQhYhNpEbuWim4AHfXqEYAEbAD4s",
  "key10": "3LDTKb8bhkNtWKqM99r1g3XUYrUP9ydkkkV6yBCpDgQV8oLFK46cDQoz67hXSUKeRBXsi5m1hh4vn17kgKngVLM5",
  "key11": "39x8cUDY73LxjTH4c4BkK9F2hpMQfhxvLYNqmYdTTDeaP6axjP5CV5tRXufUdHEfdCaMzvX6dDmVgYcJLgLDSvEc",
  "key12": "3f1wCHz5xbyQ4SYiY2EqjDv7qTczz1N5HbCeuDUzzC6ndZzavw5bRDuiEK5bxUUET8Jgp5mpDM1wtaocjC4pXVA5",
  "key13": "39wrPAD8dWnmsqSvRUsoQQ9bLshSybexy9SbjgeFVb5hhzXKqtzqz2EuNgcYJXGTh5mqgtq4ZsfkXBXE3kRjf2yG",
  "key14": "rCBXuczQVsh9X6yHiWJoFK8m4xTMCREVganNgi7X23YAtfYuNjjrKrZRg9UCFkvDBDsJA7vwVfZ39RTARsWMQMK",
  "key15": "hJSCvn5BLx3fyohxPxLh4ggumNZHvacNjBuJ9SUnpUr9pwRXAgFLjYNUF73LoZEzU5HvvNjayEK5c73AWjPJvKy",
  "key16": "qUvtx8XpahjwKDCgQnbvsYxSi3hdz2T5YmNuwySac1Sq7MWhDig16R2JHfRKa6G5LqHNZn9ySSFVs2kFpivL61V",
  "key17": "2ViYm5iaB5iTPpor3zQZkkfBDVjCW8GC1Cordg2p8HPMF99MjRUunjwAfbP22W3TfqzWS9nvRFfPsZWckdFSPNJR",
  "key18": "4wD2RTFTHT1YprY5qDLLZfXcnM7SDGo4a5sLUyRerdDKEDwS6mHkH39FWG3MAcFuXqEEjBPYsWAfZYEEf8fqEXZi",
  "key19": "5VW9ckGhjSWgsGMcb6kcfNdZTkZCzvLj3Cj83dFVanc3mmPtf4PCRxk7BqCUU1jH1fRKn7aEiBgMKqs9B5TFpP4C",
  "key20": "2GjuqnhVSsULf1YjADmV56znF4hDx119MruKBsUi28AUnrxS9hqrCDUJ59ooZgzP7emEny3FYNGXTwhEf7rJQyUC",
  "key21": "26jD1p7jnSzSvGG9Ds8LBWTbG9JS6k6UkFYexvgxMxa5hiasn8BoCcc8EQAJfhXSFq1rCFNJuQ1H6rBVenRRzV2d",
  "key22": "53GpVv7xGr1AbvQr6bjmERWHN2SPqd5m7CLUaJFTc9qfJKezufEvNbjcS82wHE8EfwFwE7BHrQQTAvt8ZATLKM2L",
  "key23": "5Q3wKJ6p4E4r7AefaQn47uC8xzo2k5qQDrShEMGP9TZZQqi6mHkg9ircw68GURabdhveRFzocCTirobCCaYT8UDg",
  "key24": "2MyJ21QbhXLNMXhsAbLvv2p1rsBqtDtD4DKjQgu8YikyYGoysTLRwNsPjgnRU5Gknh9dTTnHNbfoEym7LokxjJeR",
  "key25": "4HT8q4pBuhqJrZrP73EVYux74GG6tk7qExfJDzygnzLd9LvYpMkdmY2Py5txVgKqD1d2FHhd7ewUcCrmBTZfrx3v",
  "key26": "2cZjvSLBaYjX8s7UMyHn5XDMSHJQ1QLsWeAUFYMEVwBJGU8mbWUzVy26q57TEzGrJut9baQA8aWdAT7BipDei72C",
  "key27": "5sSiNtmxWhQS9SKDiomTu56beq59J6wwnFohE4vbwqG4VDSdDu51y6ETkgQRJGHUoZNpgZnq5bkPdyEtvDA2w3Zr",
  "key28": "5CmJLMMUWeXRsaE58v2mmXf5QRnoMwt677siFAmEH6zbs1J8NwUqwia4QPwSFLBLX81QcLxbcn2J2JDArcU6K8cw",
  "key29": "3Con4wukwnHKULPVscG6PToHr9nN46seiNj3DbbTrYT5GCEDcUhBrxrAWUbk6DgFpsn6fruXw7v37Fc3DjW3aFH6",
  "key30": "5RWMBkVM2p2Ci8WbnLSumAEthBeDRQbt2po5th8UqvjnFsvAaQTyUjjpFUhWHwMi3WSxJhkQERmxHX77yMjWuypb",
  "key31": "5NVHU1JZWuz2xjasTtXBrf7dQny9Myju9W1bM9Xc6F3gFpBM9JBGfz6mk73ARJ2vgRcUoCszYwBgiKo8mvXXt5ev",
  "key32": "3FiPFHNd5yGpmkCxfydFYdAYBWfkqHHEzv6NYtJsxzjJHsBqCUaToAL6KpL9GqLE4aTAVE3xEgHaowf6Usuw525t",
  "key33": "gQf6aXSTTZu6S73oFkKCX5xQMgsrni4jT1m8EMD8wGhWJ6texWB3oN6EYhnfEenKyDgytemEnZpweNw5sGy2rNZ",
  "key34": "3Hj2N3Fz9gYbjo56GRfeAjen3SgpteQwtAs6Z8StLcaNHHuDiSRNPdXUTH7jfBH699Yq2qLU8mPDurken5MYeKUX",
  "key35": "hfCBDbxiCdvBJ5qRDNCU44oq6JafRTKiETbd1dFGtkmMQfu7V4saCLgE7pNF5NgigCSdfhrN3X6BYgmZYoLTkXL",
  "key36": "59oPkkZ1naMPTPg4hqEJAGdtDRWQMbZQUEu8jpspAhh3m2mc84dvYDqC7Wq25ScEFQQwGYYNgHPynX6GMuALEMc4",
  "key37": "2LRuzG7sAan6HrG6pQTu8oXtfozPzVdgUu9qLzWK7FDHCRZA67hk2LmrYtggYXkCiSDoTyp8MLY6iCf6uRzEBj7E",
  "key38": "2s43bkYU2gxuWR2thhehCgNHs9QxTsy34XKtLDft3iiPYasWf4doJGEUnRyQv1yWFN4A7qNdbkSNZfgqiJd49fa3",
  "key39": "2h1pdBak1t5ZuHKYjqvmpD3anT3nmaRhwTjjXFmLPpTSdkC1JaAPJqUV1PW3Kt9yFfdky4hfM2iVdowE6SD487Vf",
  "key40": "4a1bUiPJXAcuA7mPta5PBYheCecytnN9q7jMS27iEk1gpHS275DwUH3bvUjmwHZaS6KuobBsZVj23LSJd8BEX61Z",
  "key41": "4LGoPPbUzh7iYuyiJbYzAUW4WeRZWgdkLPQKYMkrxWo387rE4c7V8LTBqhWDFgxYyWyS7np5t4t8QSKVZhQ9KXVf",
  "key42": "4p4VV3VhfpLd4DYCQXa9StUvJ6TDmuS4YbibJMEiqVvAr8LaeJFEKJMZbGvwfNgCKdPt2usosTERMuumMeDUc1SE",
  "key43": "5NQLXUJ4zHU8tf8rECebTyxxmVHpi13dKxqHytVzP8dPUXqrkPV8h5qp8DQUtzH2xA4aahSXRfq3EDFAuSVv8JNv",
  "key44": "5hHBGhUDMX82cZ9ZsYyprJvvruYcHeufEuTNZL9icDomP94y1f8KCQuYdwVUABUEqSfiEpY4CbGn9VPDSvL6dErX",
  "key45": "5CSGBtU1Y4EhTkbkJssiQnBfS9n8GCg6iRPvv6kmJ6oiUuHzAVXHHMW7gDq2A8psujHvujXwrtkULeZxD5Ykijmn",
  "key46": "49i16wCrrFrQhVW1fMJUqTZZeQD8qtnnoL3NHDPAmg37Xo9qB56mdbvvuM9xjRJsYiGzLzDKAFiRbj6inqGBqj9z",
  "key47": "5h7pGuqaVHdJt5NQuMwpH1CaNf1AoGbtmUR9buGnehzyXB9Q2fLcEJEYANcWibNdm4ueZVRP7piEZztafpwgAQP4",
  "key48": "3gjq8VnriKRZxN7Tkd2GRuvhD2xMnxZ7v7wceEqs4nnNXXrKgJxfFLKprw1GfadsL7MjxkeNhEyqL3GaVGFrcisq",
  "key49": "4a7JxyfV4qXzTsKEbaFaxKhJidt821nMhABEm5Vm9Fas9yiWiURnuria8QKdE1hDEQFfbgUmhBAzxzFQc1v3Kcqy"
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
