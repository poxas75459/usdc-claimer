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
    "4XVNkrFyhZQiCWvSdYLcbZq3zPGf8czdt2aEaERi2VGPefb8rWJ7hzTcyH1LQJP46ZtnUFuq6zKvwXDu4p6fqUA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPvtv5i8vu2EVKN2nyHi6r5e3X54gBVSd4QeWAKshNXEFpLHwzSQEZ5nCje1bHbsRSem3C9BBnquc3UkQAGCvHB",
  "key1": "3Vz4GuNbLTi3wVLHTYNFsjnm7JK7TMArfhw2Rz4gCzi6ZjH4aXHe6FsAKbybbkxqS62ScFuVzoBoW98BSzCQSxzP",
  "key2": "5Z26v6AoHs6QRZrTNojs2dNww6LKtWdiFTkUfjN6EUGosaFss2nznc6i6YjheGhhyxe86Pq8iSYNUummyL53GcPA",
  "key3": "2ELD5LHsn5QBpTa5Ezg9xSYDt4NGCdBhVd1NR3t1AE36Dyvt8uKiwaojtjBgcuqwH1t5cKZUdK6GzmVKBtwmib7X",
  "key4": "52bERtKMQyq9zg6iEH5btTqXxDeo9CQ17iEGaH33ritcL3bHCk9bzTQH3SYQebRJaphwHsDQuvFdeYBXPogRogTG",
  "key5": "26LD8d19kzmQ6tzZ3P1ouSYULywFhZFjbcShNVAsKb6fctL2oby3CybobFUUzGQPQx39CtpHuiccaPaGu9CoW1uH",
  "key6": "4E888VRa9id7sok9d4SaGRi963KXytFFq7AG5bhiK6SAno3LUgmT5mSJU2rAHzPYYepY7iEw3GkNnHudmqLK5yFv",
  "key7": "4Yv4JQBVGDh8NwKuuBjv3X5QLWe9KGBsNQQz4g3tg7E6io2V62NVqScJ9AEt3RJXVhGYeNQkqz1SyMZiKSjuQp2T",
  "key8": "2XabDcFNv4UQVpRXxyD3ZC5eBP61FTY7eokUax8eA6AY7L5bUMCRCNRLJUwYHnADmqjybVvcxKwQ24ULhD7AGHKA",
  "key9": "5tHfxTtoafwPjwFPQfdt2nLWKEWwgHb1E9omZcV4qyX9UQ1pZAi81WcnPopx2Syo8kVsDKgdcc2fz18ZMioHRhnn",
  "key10": "5mMiUUEQc7qqZjCNrfy627Cjjhy1FP6UzpW8iKpCAq1qtm653SAwpQDjMkrHbLhSBbPDUf4zvb68BjmUjq2vebai",
  "key11": "5ZDkqbYwtQHuLWqoWTsEhvyEjhW5TgCoDYVQk4k8MbmWTcgqMeRs1o7CrjLwx8p3ZGCogPchvGbaPLLrEnZv8qg",
  "key12": "2aPLAGoaEwQB2Wbk2Dsr4w5K1PV7kFPMvA6AeMBwvPFb1ZavmxH7L58CD9rsnbwjTqQR27daMFFR1MYozwRE68Jc",
  "key13": "3moq1PDWrMgoaqhzQjDcKYeg8YvwpxvF34YSFMDKP9BpJmrppaeASAjwVqRkaf1Z1kBjGxF7gFz1LNqJ8NbjSt2g",
  "key14": "4P5bPZPCYzNFbiyAyJcYRytRe8JQXHGqX82k25g2qz6YBGJYyEeg5DSD5Tjs19ngj4ccVLPNBejmXcdHawHfAh9s",
  "key15": "3e7kT5Yd571R8k6bbXWHmSTfLuiPqtsYF8tqHP1u5J4Lj4314Dkj3KKWsc9USwvQmuxSx4NzsVzjk8DwRcTruJaw",
  "key16": "5YJmeb9Fwan8xPZ3b7MjapKefECs1xsekPNZw9bZHWGyZXqamka5jup6oVcfSXdntacti5PtiLxAt5DX5BV8YqXe",
  "key17": "3hfxswJaricnyVH3esum7ZMnRRojgc8xYQPEtjQbWCHJP4ctt2HjL1su4uS4NSN2MPWPsaoTU3YHB1qW72q4f8cc",
  "key18": "5vgEeZhhociph9QHz5yUTDoQCCztQrR7iNEJGZoghfqEb898L3BurPBSVhv1YT5FbBWLjnBWz6B3tPowZdFMLpYt",
  "key19": "2azrRmXx7KuNMgSNfiCDzwXnen9Xr6ePPgtZMujDU8nYo84MY73BygwvgqH43c13DsPCnL5PcBwMhJdj962SexCT",
  "key20": "2bX6Tt5nzzLgsL4YKA1YX66sYmcmZwob3immEEBXyutSZLiUA5Vqgzt37GDYszmLPsFPfuFJhZ9CsTuPULqRx1TC",
  "key21": "5WXUxy1Gwqiy8dYDjWYF4AM9rK8Yk8Y3Cth6pRtz5EqyrFGbiXCUr6uwKDFy846mnviGa2NGVe8r9hQvmmsDaYkP",
  "key22": "49RPha9ypJViBXwv33krEFbBof7pgtaQJKRCSJRg2YxuF8VkcmnTXoKbopuNqL5rbSgvn3BbVUZKKWd53RpfP97B",
  "key23": "58KC1XygfYssGy3U9y52ph4QzjP2SzXgMzhKL7n6vG5Bkb4EktEMG19eUpXr1CGDFrseck6Ke4gk1UiELHna19oX",
  "key24": "3pg5Ymj8XHRPPgjRVJZCjqKM9sjojWfjPbbqnbNPe5L95V4PPs47uoNQoVMvg2K4h957E7TD8fPy92XPgjtQ42xG",
  "key25": "5jQ7vNAYcXF9jEiSikATcGpue7UwGg7p1CDqNQGASuDMHLSsegnDunJfnj1dM67d7X3qngEarFXG7veLTXaFCgcQ",
  "key26": "Lb8TSm8N7Qh24Yqduf22eGTGBoK71LZa4Y2YkkkqNSroV6WRpB4WVFH46QTT8K9bXtZzKP9p7ccJ8ivvdqUbr43"
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
