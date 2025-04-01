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
    "36qKKwu4YyFnsVpZ6ntPg4wxp9XzczLNs6x9VM99Wi3S5eAFcozi5vW7JcqYTaFAxeKJgLEbfucvnydv3MtDCBSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AwNfkjwSx7cd5rgzku9AvtPxrKx67oAeeM2zTS2TxP8dXtHrTUNvLs4yHTZjegLgoS8ryLGx7kaADepCtMCQEMe",
  "key1": "46DSTgxZQMNvPb9Em5YVpSUxHKeoTuDx1SoVn4xAQz1mK5D5Lthvj7aWxKGrsimH1kAbaBCfKTgb59hvLeRaVCKR",
  "key2": "2rHDHBruMNTs8Veri8wpXD3kvb7VCPhYc5wnpkWB913i5xwYK45P8xWsHzkk6Xi9H75Y2TixUZdEb7yGPKeqKvd8",
  "key3": "2VTHNpBpTEBd7N2SJKY4fPcChX9mKhgd4DCNZEAwps9E5CxitbPXxnyJBbFT83SStD8CHCn5PUNAGR1JXr94tZBL",
  "key4": "4kAm5dGVsYMCV8oEaxfQ2aDZaDr1aVLqmwb7EdJmkG4f1bogSLZf89EjxZM9XYq8iZfFMWGWWVNQbbZNFRxse4kL",
  "key5": "3J5c7D8xRDAV5r9v1j7eMaajEi9QktfWFVib2h4YqbTH5zm3V5hgGwEN4KH6UFX36Q7G19c5XuwEKo394pqqWu2C",
  "key6": "5vPRD5XVa7hPjkGXLQAF6fBNNQx7nGNuDX6dRzA6tQ88NL7zWQgiJzdYGv4ESQB88QsX6cV5rpLE6CqnTSRMAwCb",
  "key7": "5uvQFTeDkVWCrcNGWLVemt1NQ7rnj3X1Z1d5nmDt8acZTmrGv4KnEiWFujichjtWK4K9H75ZfHpqBJyXzFvG6YQD",
  "key8": "3DEgpVUivWzvaHCnjUx7v6qNzt2QaFMBMUvJBPWXegvGr3q4DidsMmPwsX2sUWLfmVcevkTmb1wygtEFJYJiz4Fj",
  "key9": "5j1XF72nJC7zMxJwCnxccrrmUJTiP5qLfcjZoa48Typ3m8jH3syCabH7r8Mcy1VQfrRss1Yiq2JK3R25KKJjjyuH",
  "key10": "4dF9RnFPrYTMRPKGiMCUbSFQEN3xdoPobKP16gUqwNb6wQjS9Lu2FPZeoYckWxKCtBHJUrRcs7Qv8P9h2ycVAMWj",
  "key11": "67CPLooHDkkUam36Gpaq3LJjsKBGRRbzGYc1w3uLkpGBuug2ZRHbbfgtyQdBDYYNdjte6tyBs2HHttmHdH7cTv8o",
  "key12": "3T5pEuq9sXk5kRDfW78Y98QLARVYExUiH89hu6USGpdTohpFVZhNzLZUUysbQgvc46RXNcAHbCFccRsWY93Dw8RL",
  "key13": "4XvvC94q3HgipfMzGvwTx3CK2JFu9s3WJfT4heVkkPDFLG6wET4q2Cu7P1dV9MYsLaGRMvuoUa13bL6qnZQmLGJJ",
  "key14": "2chjf9QcJ65UPbxREiHfCMXRKEidBp6RAqdroBErq9ZhWvMLtRSXLQk3yqKundcKkwyZPb1FLkicbbx7xi2M6wNc",
  "key15": "2BMEqAWFoQwwHHCepYgdj97TvQGmECDduZgBFUZ7tVLDX2L7QBH9Zc5cjVg1g8yVAdz2716ehsKgDfMjCUwMteWd",
  "key16": "4qsZ5VGtsNkvaVQkFaSrVDPLbJ2jhhCCrdwa9spQKPSpMcwyjVNNa4LhYZxhzjUTAjE5oriTrfxniwb1vn6mnx8P",
  "key17": "2BCSGhH5XQRRWj75tRuyQkuaAtE6stMxKhWL3C28gVKbD82TGao4KXrqW8stTx96wM55Gz8UVCWnZ9MTBH72RHdP",
  "key18": "3MZ5Y9ZdpPsCKdE9jvAKfiXCGzT1ewLE9WnsJCfE8TLBxiisz66raPxA7itvGnNK5W3y3p6PCygRRYenzJM7ux8d",
  "key19": "4gYHEUBPy6jtqgwifzbQ8TFNMDZMowZ33rQSZ1smhLeWjXvDSGCsdbFmx6d9rNvEKmgxoAngkBRRZSzUrg1sCY9P",
  "key20": "F553fNB9T8BDAcrEfBouG826sZZym77C5Jc9jMFEwGHsVK7gubwv4Rhs6DVn3kqVhZg94ZZxSnonAQAZLu21Lbu",
  "key21": "3yr1rSxPftAtMPi8LKRFYQczBjtbPcQ1RnL1yMwmSqg2hDFxr4ex4zyGrzQ3nciNC4j5JvZkSkxXccQarKSUYDZ",
  "key22": "5USNtkZKfq1Avqp8zxru7viyoHWbDNR6WuGmmvs5rG5CcULFmN854GHhhpPTUsW2jiShVcNyUhLer8bZFWZxdqEc",
  "key23": "4FTpQ7cd4GtYtoe11YKECp1is6kcMAZrSBobgua12vZadGyXzDDuFucvAwTitdQUKDKjeqpC4PrLAagwqrDtvkGg",
  "key24": "5XbuiwSUthdE7dAjMaauJRQu9jAStdWkFGPxdYMkonh7Tp29daRPZfNREsShcrBiVzMQ5mHY2gt1CW2CQfTy23DJ",
  "key25": "2HGC6R6pitAqyStMgvFGbDxg28hRvRLCMYLJ6RCvpkr7GGkJoQiP9AmzRoShU9D2RyvjBcxyJbbHT2Ufi8DFbnYu",
  "key26": "46ytSbnPexoyykK4VzkTsoDi4XsbxcjaZuTxZaiMPL96svLAjEKLDCbM9MMRn93Hput9K4Xjt3BN1Cuet6gQ2NPL",
  "key27": "bX8q6d9XBo2edLtiQKTQ9d7FZXYthfPVkGPUbfwkRYC9z8ibpVQqXxpzFpJE6YfXjuN2yY2gSySdSj8xVGLSWRp",
  "key28": "5NX1je8kieisu56thqx5Fd7aa7VNcE58NrH74Q1J6pDJTM9tjmYPQtbv2ZaUtTJu7d2WE7xcDuQfvuTQu5f3MGPR",
  "key29": "3tfhhen4YiBCi9Q4AGvdCHbV9Jzgi2crYmpdDgbSG1vSd8rS4oZGmHUoRUy8uSYX9eL6RZS6ae4FoAKz815jA52F"
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
