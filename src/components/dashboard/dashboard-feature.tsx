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
    "2ztpbdiDAoiYA7x167XrAFURsnjxcm5p8KJLf26chhBw3cbxUtj4GtRs45eEVn6hdfv6PbEuDzKEKZVDWzAbAyEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kjufd92GLRKmhmcLwq2oGTsvSCn4nPmFtdnVddNR7JnMvAHQ2uLmskwsjoxgcqjbXbRhKeBMV7e472Kyip9HD6",
  "key1": "336TobKNwb6wdcfdSGAWivXvWGRCkjN8xSm6bsyGdHd1c9KFTYuiPmyL9dhyLzeGMgmejrt9ixLXaYQrGNALMZu1",
  "key2": "3o3GnP4LRSEgXtvMhxFqjNT6wZz9A6s2ph7deZJW73FJ5fqotmfh2Aj18NqArV6KtxmXoRptxe1hT91Buvqo4dNv",
  "key3": "4AMXkApibieu2N2xHPi6uRXC3tig7kWjBmyoCEBfDPzVNWFam28duu2pLsDMrcmv5WD87SMu6e4YT2jMbuas9gVq",
  "key4": "4XW42xnoquAfdDYbkR6aepiRWg8KrtELFQFbDQ99HtpvpBaEraUNkJU8VeVmN8gjnmJm2jN8rDjHEs25y4ku986F",
  "key5": "3iebVqytMuvjUhERABTVcpciNsM7nAZFs21QTNyo1pDQkuaYHbZJtn64eRc47zZAkKRF5Evog6mfDKp59Bo9mKgJ",
  "key6": "2C4UGBGNgzXFdkt7sCrxEXwEHR4AoTNVQa3gzdFypSqjYFHby1hgvy2A8jLQCierjqjjCNfRNvLcaxRGuw6xzV3d",
  "key7": "2cHtWNpdMUnyfVVqGBrnHp318gv7XHhfwkKMc3Z61CKU4qQ2az3b2SiBWmFuSUmhbxuvfRHd8Z3Fg7GoxiHBz6TT",
  "key8": "59YvgzNmVE7SstmxSVd4eFDHZnePQEdm8PATytgbzXqAh8W5oLEPafuYzCamScXxCz1UjQh2iWyMYiTjsQtPBBog",
  "key9": "3HVCfWhxwCSANcVQFFTDEpEHW87mAG2dkmS2J9ddT76rmjthEoRbMVYpnUueKzTxVt5aWMmV8ck37FQnPTaDMHek",
  "key10": "2WHC5gAb9ffraruUeCfhrhheFQNTaRCB5c65sQyPjkYVrh8nRcdtkJseAsk1RmtJV4hCuGW9JEorK6kEdBPR3EqF",
  "key11": "625xK5FaxUXSsPNjU2mSrcyawbtVRjpvnw61NZUGPnJ3yU2siUbDxcG5uYqg46gi9MR2Z9XVszUJqd6WHKHax9eF",
  "key12": "3dmtggL7CrWqqnpX8r3LAf7GoXMaeahHZcX4GnPDvsxQ7MxFfhM8J1e7jd5SdY7Yd1NzLWEreYVJnMzk9PagyKjD",
  "key13": "nnHPWvmYuaFwMK2Knfs2eEo43tYNrfQirmMT79dxtvpN9rigiJZjWN3mD6qdup57yft9EYDMH9BFQLGAMar3QGw",
  "key14": "3Ks3ngg3tKAJAKn2DBp7paTNVMmdk8LSazjBwB2TwDBnMvMPM7FHpAnSahxuseJKYDqsgiK2oGAAAa5jKBw41cHJ",
  "key15": "4pqED8wRmaMfjq4o2RYkerTTJnxHtt9Nen7QK3b93wLs949KKTLE8PwgxrLdzzrDTDjGgTgZj6ttzSkZAEbEfAKG",
  "key16": "58EiyQSkuSdJzDBG9dnoieYAJzSyksGWidWVhGAq44q6LAXAUjFbokZnXomnCBxRdTvezD87Hmv3s5fkXi65x9hw",
  "key17": "4dGYLzhnugPgNuCts7x5Eqtq5RvfTe1buWRN4Pyx6pJq6J96FBUwseUyRj1BjCfTg3SUDFNEfPyjK3qCmNL6Vcoa",
  "key18": "NEZpYccMMCuv2xjAzkuEgbR68sXzkEfwp4CVbz6yok7VUSy1KRVujMNrNcv6EoPbXS6Spe7PmP527tWyosqRogE",
  "key19": "3qr6oMmQ4SEAkgtm115dxdk7Dr5QXWw6bHvtQbAvHvR1U3MQcvkHCeipsLUcpYQ7gHaSv31ZpvZvuYmMsdyBX9pP",
  "key20": "2qMozCUKZJxiXSfPxKaAPGA2uvQRBCwBZDTQhxS6EM919tvVXz1eUKDwk6Y5RAFnBpTW1hT7T8p4MgF4rMYxdzdY",
  "key21": "5H7zNPBxauwQ2mGHgh3J9pcv6jGQNR1rMCMXovtpEpQsjeUPgsHm9dbJAY9n2N1Nh79QvgG3PVViCJjMSGyFBeuP",
  "key22": "4AZghuDbBC583fpY4h26dbLSU89j1SL9RYvyrg3FDmSKr2xAmE3nkxE3vWHfrUaubS5No5S7Bwr8HrvZkPhZEn7s",
  "key23": "3sHK6dRsVPBzHuMxJ23AYCEwnF4UiJ7Z9HdeyTFg8mw86MMFJY7XYrfSipAJuHqCFyrxCD9UxJENtoYC8Vc2Lgu5",
  "key24": "3hJbLk1KUkKZHevzp8mkQMMw2wnf5MqtLndhwCstHokEZeJzRWpTFPvuZNne6jZH6SYU7yaJEBhBcz9PAwQpjYW7",
  "key25": "5dRuFhxpbhjRH5ixod4fcGRrgyC2uL37Zn5z4k4iuAgHeKXj1y7iHufFuRx4hr3kGuBGWi1iMwgky6M1VnJiAshH",
  "key26": "4J96ENG7X4MbUunpBNAd8wLttfuFYdeTPh7v7Vdy4AE6ZHBaH58TqcwnbdMyJNjVwjGwpwGUejAfGVic19KfLCDr"
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
