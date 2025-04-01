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
    "3u2777KfK9WJYc9fUb5uRFjyTcoAHaLsvUXw72zUQTKh3t4X2cc88F15QnhoeDSp4LkuE5AFbQpxaT8rURgwg6KX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfVKm47w5pmudSbGhzWbMzuHwP4kMWdMepkd4PTchJrDVnnK5G68aT6NAVUehJhizR3yAaLDPEojF2CmVN9RC5M",
  "key1": "59tRTB9tL7t2FVBoMhcdRkLJfXB17N8bcQFFg7u5Ewjpbm379Q6WD1mpmpgYXLUJrQS4ggYMRMnAF32vD4fG1pFj",
  "key2": "5yj6jgY2J6bjtd25x3brX4pK9n5cWBd4XEfJdp6CknvChEG6VVUc1boMiYpBhBWirUivZearpDEKTVxnP5qgCQKa",
  "key3": "3jjxbbrD2KqPKx35LMWpZpy4U5Cs6T7wHXGDCYPgwgrBYhtW7SLNCev7pT2jz7Ltoyf9Ps7xMVTyrVoKtMtHGVXv",
  "key4": "osebZuWw3kbY8mJLzU1zMoeD3jkb2zkx1hToCDLt66QG8M6eK9DA3i1Rd75h7cQ71yDqg74xCnoJ2qBRQJyvqrx",
  "key5": "4jdZ24n58LFByyi49UcVryb9vn5qFkxWRnVZKKm9Gng4s4bnFVDXRU81MFg21iTMT8hKCn1aVm6SfUgfLKhNxd5a",
  "key6": "2dQfP6kKYSNpJ3X5uHrZ9ZUY4Frbvn7hawNuaNrRZcJPUbtiXUnVawJ468R9saPJk5vxyKn8pcviFQLiWnVVJd3g",
  "key7": "34BsraCr62NqVGnQtVeGN23z3FnEZj4puZ3MrrjqN6pDt151UviFLxXLR7xZxn1Gk7LyZEm2CNpgTPu5qgKA8yQf",
  "key8": "XDLnX3zKnBoDVDxqjbi9tGcSwLHQK3bMq69RXVNQcHcQbrmcrw2pxmY97GkMqaScwu21vdtaSmupQRidDt8xKoZ",
  "key9": "27TA5LfWCzi3kP38K4oYkiiRnFR5k3xRKLJF1c84iJvAjUmDy4SAfrYEAVYHvA53LgqJ8U9h1J7pL4tX2HERj4Tw",
  "key10": "4x6frxu7Jc7G5fJDmvsAYJz6mj9hSWWtUTLCcezj7udguTXXBRnuKGWBXzvjJXr5EH7HLsoPSTY9P55AUWWMoizS",
  "key11": "5Rgq9JDEW9aWXVJzBeyWJCAeZxJfwfhtWN6TVoMes98rmRF8NwSjH5LgQV8PXKJByG4D7ooAbrjT8JZ1Hmeks5rE",
  "key12": "48ApXzWMPASKENciGn2MjM3KJm8acfERcj2yCg5C8obYaWrkdeyC3SksZ2roHAypCVskeR9XTwvFsggHKwzyRKQV",
  "key13": "XT9VTzuVShdMUskeq2bjNeTcgpSCfDk1TvmcNfzugFJiEq8VukgXJCpgb7VZNmSvqcvQ7F2NXCvrxD67WfL7jF6",
  "key14": "5ktfpNL75Ywo6KaShAkFGMTcCWj8JTfSZEyVURM63MGQFR3jYkMVyh2PfEno1grZDw6be3cAfXjp2yJ6vHcgV9nm",
  "key15": "3jp3SLX8QqMCu8XKUDeoTKQ49da3T6C2NqGC7ohL5oti5BsgvYJSTpC6MPSutFWsSh3kK6QXKiAB61NuPraiC9ko",
  "key16": "y4cTnYYg3xWVrpdQt9skjE4Q8kBRqKN3R44ugHGeGfvJtEU69pNhudbALyrB7Lkq5cXVRYP7GiD25vJJKBE7aTZ",
  "key17": "3UUanaonS6jn8Ww1rHftjWZKSDAMYf7VibXNKfMfhnXZnTfRVNCwN2xHcf78ywGC7LhmEKFaa3W1t9aVMQXSePsL",
  "key18": "2Kg1LWtMD31Ugsf2UwJbtMkK7c2No5QfnVK8HebFvAPVm1qFpRSVo7WJDdy5hxxrdfSc9zsPrsjZvNKFSMVpNG5E",
  "key19": "2aetaDg85rRr73dczBn9ocFGMDi8qdU6nTRbhzPx5gjXczfCtDMCzZm72zcKMDo92JVsBEasDkArpkfZKYB6GcXb",
  "key20": "5PWwp4CfbQXbxGgJMunSTbvA5DWPhSYbedgBsT67HqJQqaBkBrSnd4kvPxVEuoDj4wonYYPrseaRLKuXdEaj9iUs",
  "key21": "22AUHKbTNcRT7R92FK9VoRv2BPiFwkdZWBGgG8syYkbfXpNWQR8y6KJTRtCeLUCCx4rS5WefoLr2SKboDDLqiyJo",
  "key22": "2VaJtg8KHG88n5cEouemeK9LSLRi7GKL3nGJED6XLG1gi6KFKXpn8T18FNjK66HwrLhjK4oxdKPLowCFi9AXS7xa",
  "key23": "56qSwS6pWfSumUUt92TqpmJd3K8utatrSjyNS6VgamTps1wf6vk6vUtm352V52YfuoN7ab91u5ZBDX4A38uj2BWw",
  "key24": "4Zs3uKwC4vhYnMeaDYkTp3u9QXSVe51txhN2U4grw4FTwkXCahyVk2Xynkv9GU2VTxM1bEpYog1gsxoGy3RZ1Q1a",
  "key25": "4JJtETSJnS3iHeGt7p2GLzvNowSvhNfqr6cmhqwQ3A5FgSpmaSTyGroE6V21QSDWr5VomWeuxMR8So3KaocKGVM2",
  "key26": "3icwce1LLcmGZMxhjv9ciMqHBtyB7zhAHkXCEcuS4bjecnqT8LF5TcpQgMn5hmRepRGqUMbNRxduRYXhmZnehgek",
  "key27": "4XuYRUT9tcTBGauW9NTaMvviseKZ4ve7pYLJGua71jUPq8AQz4L7FAtw1dsw2Y2D2JUf3sy57XqtYv8HKD6PDNYw",
  "key28": "3H33QqBTpAPmGGwTRXSQv7aauwTTeLE7GbsZA94vMmB5VfHhj1ebAFuCBgdUWapfMDS6dpsJM8GLjmD45sHmy5M3",
  "key29": "5bCQbork7oxQVFgLWSLWfsyW6ADDZGZB83cxGfUogN8C8vVKGz2wcXXcPLh41X8PzsRBpeLtWx7MDr3haWvzrGAz",
  "key30": "631NPokXFBnxC4MYovfYHwtf2HcWhUprLHkQpP8PPQ8paN4ZzRv2LLsH8TQQELKMU5SvCorQfjVjXhizwisH8kc6",
  "key31": "NhwkivzoLAq5TFWGbncdWVAPJjz7chQXmPbd7AsEdkCWi777R5PdLSNhqzha74obB4mp46jNe2xMnz77cxBceWw"
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
