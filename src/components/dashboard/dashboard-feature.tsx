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
    "25smSQYauGhhp3HHPn5gdjhKN87i6LZrKhQ7qfsJ9DmQ7Vxk4sLwwnmgysPgj8PNuVoSPbTEf3vNLVHjxugNacxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHgPNbTzYVn8d9xeERiUH2avhnvf9M4MiEKH442tG3XpavrBYk2yrHqpHFE2nRtkbtxFT9nJeNPkykFgUHLY4D9",
  "key1": "2GTpY6p4RojEPAtBweLwqfms7N74qvxSzYcinmWMcgMvu2t23nov97scDGSuAdBxq6WfqDo4KxJc74UBfyybsmDH",
  "key2": "2Yk9p5mi6vwXw6XpTtwXjRZANW961fX7oRdhbAimA7T3s5Kwez9djtboBf2CPu8uzvYAxmZnZLVX8izpyddSyG3V",
  "key3": "27cjJoDRYyy9sw7UVbPobJnbzYWVwk4afb2d5X4A2BC7Gkt3UkXcRP8RqmpZYEBcvVHAnmuSzHQ4JkcG64Z9nsmz",
  "key4": "4U2mn83cdFhmkWv8Wm7kKDGwGhcwHxuaDpnfqFq89XL6UeHiAAjHrNUumsZcxKgiF2XpwzbDb786v9DDaG3BVZUp",
  "key5": "9BeUzqDBDRbU9Me5ZzEbW57rpKA374ZVM8P1rXDT6rJUkKFyVhNMABwfxuUcJ9CEC8BUeqN4TauxVvSZR5qLyNJ",
  "key6": "3pxzwmYevsv9fX3D2YrhiHw9RTqLWD5dtpsW36rzgB17RGTyW9FDPaXhcskozJJ4kqAikhbW2UFinra2ZRQqg9Fo",
  "key7": "5R1ZoHPVZochn8itHUDsES5mDpkokRQbnWnYig9dGng241HqERPogGw1SJFoq2Yt53xkx96NQi8QaEF4dLkcjWA",
  "key8": "X8A9MmhSCgpNp8su66iSRQWxjCXkK6q9nxh7uD1fnA8X75h6yuxQ5Nog7t4WWUbs5RFqjniuRAzHSfsEQ9obQ4X",
  "key9": "39KsJAUD86gurdpbVgcAHdFKPXeZqNXPcQZy5ZU1Bv2nGGWwkm6xmvcMVbU4oA7sFjrLyrTxXjW1m7u2PVdqN2GP",
  "key10": "36ne7PV7wGq3kXEi9qdZYRzivUMTCFz1EcpWH6Cym3uCNGwjeSQ62nZZsC7jMeFkM9bPoUGfAMcRfR5dUARh7RsS",
  "key11": "4Lw8WZbWJP5gjvzoMJRU5FHCPcDphUgHb9x7xXhgvNaViTn2vBRqVnur1SUtq2mx4jas23iiyWCrocUfabvFsSZF",
  "key12": "4J2ohZmJhox68r816uqJ6HfXGugpSwicKR8Jdqr8AP8zMMuaVGuzneAxBM8syFimfVaHWPsfLAA2TvEoAJsqia4z",
  "key13": "4zsGBuiRXipDF3tmJbYBvYuKdwURp3j6PJAZRMqdj8nyxWAhtb64JB2BayricFdUCL58CZ7eWRXCJLfNyytf63W7",
  "key14": "2bzVDwJqXzrqJBaktQvLRMUTNLXrAfBFdYG1ucyXL54WbRTEXzwiEAUDa77G47erQpx7PJ4SvsNPgJ7k2YDDcQez",
  "key15": "3cCCLM1uVUyPQKFu4bLj1N5z2RUNSpbjx1miYv9odbm1Ec6frBkc9mBo81vT8wthdF3w1C4wzjaPAx6NC43B8mHi",
  "key16": "5E9oETv5sTjCLWgGx8WT1iNoPvdYLarbaZaeE3RJY3dg3rBdQ7XaFW84ywdJRYCbUcERADWcjUAobLjEiyw1etrD",
  "key17": "5KdNtQzB1JjjBdiw5fn4v3dveme6ZQJdHHY9F9wANKv4mxMF756HTUgNUSqHsfiUDpvHHNB7J8hLygNNV8pnw1Vc",
  "key18": "4P8DCH2CCpoJUCE9G57KGQshtX1VXU7YqmZJzXmoNVupEmN1kMnYri5FcUVAy18PArPm5KXsgxKa3dE2xnqYqDy",
  "key19": "5r958hVvFMrpqYYb453bydKtjhFDZbUkUjs5QM5e1ALnGmkstHYEB3qVh8D8W8Fpph5R7F55cuaoYhy9mCXGMzYF",
  "key20": "2MiYNtFWondzsTxTNavKrNT74GRqP5LzYHunN6meGoERcBsEMApD8CoMvzqPSAxzdFMgKjosbkPNueLYMfbJ9D9R",
  "key21": "2F5UFoTtF9XBgZHf2o33U5MpiDdZUnUy9r9oNmtm8QBScyAhfAWph74V2qA5PtXEV7bXdY1syAWGfAsZ8iZHtF17",
  "key22": "5QmnRCKrvmACjsGzorBpxbCTdj3gvJEpNngD3Ab7YoToGq8dv597GY2vD4LsPD9eWbDEAB7NBe2Skcx6Kw796LSZ",
  "key23": "3VqSdMH19eGwxqNhAZ1yYjeSxTtBFsp5mGkweiQNeJDv4KqywtKR2TqRNqCAenp5iY7PnoBMm7WDZcHgo1unMAYG",
  "key24": "5T2nLGVTGLhpWECDVJi2w8ojtDJKxdE2t5L8qkxsZ4mX25RX9XrSi6utewzakJztNeivYUVi1yizsX3mUmgDNe5Z",
  "key25": "5YCmDtUmZFG63vE4rH6QYKtmUh4aM51S7vzvLwJ3ukrcD89oU3fmR9ZFHp2ubqzpPP4nB6TuFob1DDvq5z7tZyR9",
  "key26": "61rhUKPjJv9uUUJqeXkwFgAQ7xDkVg2dZq1n73p4jxXtoCcqWh8ksBjUwNwSNPp7b6qTowEfs1AFCBm4RDfMoc1h",
  "key27": "5GJeWa4aPP82LJk88gFmEwmpbZjBrB4e76584UrivNJ4Ys5bVPvrd6VmvBMRX6g7Y8QSpJGR9BbznbnTU1s1AaGy",
  "key28": "rdwYa4UpYr7peDFcqscQDMC8M9rWz64xxCaUgiFErb4y7gcncgvAWh2ocod32sjfSUyUPgiHd2FK6AGZg8rsyYc",
  "key29": "44JYp2ESH2cpwczT2d7Bpgq8d6v3v9q6LKtE8YkTapGPDkBBoHtuzBtPCx1QHTtQPjiWW4ZZ5J9gvyuREFHaUBB5",
  "key30": "2KNWaE7quhSeAjRhyDHrd66CZNcbpTAhHoE3xZ5y7GzR3hw4vieYR5LVZZ95jZJQtqzUWUxs2fmjhHo7gFRAb9fw",
  "key31": "3rVfNhrUh6ZRYApJaZnwkCNGXNMDUsuKcPNo9sKw8tsj16EFrBGc3T3X3CEDXEiZV2PyGJXLzf6CnW5aUmRHpQWi",
  "key32": "4iekjwVs4VEkesWiZDuwL8JjVpq7ZBMBH3BMTC2tJsEDqm4HVnKYa2FBfPPiMVNtYi29ExcfZBeY8DmYgHKSxx2P",
  "key33": "5H4qzmNMa9YXEBEr81eitod9E5qNGqdZBCMRg3EBkBBexgAUesAeTdVGrua9c2mhgsUcGaAveTY12dwQVU3RpZdR",
  "key34": "3ABkjc5bm4Y6qA1n6HeLNi68nSfomABSuVJ22z6miEyFSm9jpQDeZzJX3wwwgionTVmE9Xxqpr4EKeavSbduamYV",
  "key35": "5PvSzTBNqFpipKb1PUpJ2QWMhxAfA9Cg9JfhnUHmAUNjATqSg1TrsEUxs4xNUStL8AQ87nNz5M9YgvFNjuyAProD"
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
