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
    "5p7tLNxngwkS9xr2rt4timr3KehdQrh1y5HdeBh45xcQ3qJqhWYjHmGY5joCPUXxvZvRzx83NJhmJkqNEX1uoTAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCzSzA1vqvTUVgNKg7SMCvB2S2o8FHTTbaZfLhcF6pqDK3soRsJn6guU2BuDTakcZYoqWC3tpMtnatkDXWaQFML",
  "key1": "2dxe7ZBoysGJqcAQSHiDsK3jtja9TpXTYNjxZaqpQVt195QKWjQZEKK8FobkVdZRurGBD7sF8NxYrGfRC3LkzuK3",
  "key2": "53WkAF9jmUUYGHFRfE5K5vdNF5LUAiHVgwoegw6sUSyF29zH4ff8AHQPRJovKTGC6DseNJTepT1youoLTXXfm9fy",
  "key3": "dbejKv3BEM6PEcHNhhLv8m3wp6VqUgVjs895FghkpuhDutyjXDMp25ys7BCo2UpWYGMUwi8gzsT6X1j726Bw8ZC",
  "key4": "4P8LqDcx7HVP2N8hdXvqqe41mofnvLJkZZW89onQ842DSw7FEgogGhR9tcU4hX4VXar15XfB26WqmQPtN6rhepQv",
  "key5": "5YSpAvPchNoVpDgAd6oz2k2XwZxk2yZB28SoqwrRgqzA82r317V3CFCpyBZkDVRoFt56DMfrvXGbHVQ5c4zMNvRe",
  "key6": "5ZrMFRaSfYU9RmJp7kzRQ8MR6FVCfZr1osRu78PzF9bQ3KC4gDzk6UK881yRLNpWgoGEnxFdejL55qBPygeNSQUi",
  "key7": "5oJ7h9PUHuA6x7PGmAbzBqGX6bYG37dFATPQoVq9KvuS7q1we4zM9hp5pBBPeyHCh2zwBW2wMsNL9L2ho8Y2khq4",
  "key8": "2gjRqF71tFu8nv1H61m6AReZEBtua1weSK94EGmcEMeKizMYbgzruZq6M6WSuDcyJrDX698mSfsyvsfToRHz7Qbg",
  "key9": "2yx4GXUQyiSGhu9H3KQ9kKoRvkCKL25wKw1N4vQPS24n7LMEtEs5fpvaBGPdZNCg7q9Ue5TaRcy2KGBX3vv3W8YJ",
  "key10": "5a41M4r3iBU5dNVWbpjydjK8fZQ3LCSZhnvHDw9Q9uGmJowTHDyumjpt53ErkhRdieCtLgBsA3xLek2h7Mk4oftd",
  "key11": "31h9fc2VdZouaKEGWngXui7Xfu34q8Phpp8StTuqqEVupAm72TAws523CWYxz7HoVYn24peTN9REuSFCq2sA5BKu",
  "key12": "2shAinpfZvMeLrrdxKvnzoeW8TQ6kFrUzd2S7SSRMMHhsyrxZk9k9QJJS1eZAKZANgUepchA2UWbWntPhb8NFrpA",
  "key13": "4v3twfRoczLvmCqJqqDECZBvG9xrQ1nJDKUk5V6LtnBZTYQKn961JcbcCAaQFzjFx4qmcfwzp8YNxPuC9vQRNbrC",
  "key14": "5vKd8wviez7nDiZQeJNwcAr7E6i5XotNg8vw9g3ma72QoX9FtZGD36SWdUrDPJvuqVKTM77k19qq2f6tYEXywjAH",
  "key15": "2YRBY15QwGAGsne8KbccmdFy9XMVmPrpKmhKKKYK8eJQnwecGLcf2yfSb3N3gY46TdCTkEbx6dd9o8XQpzevSkvh",
  "key16": "51Whee8We4e611NPPmaQJ5z5xoN8BTEarUaU5GdQQgAfr3RX156QGXhdRuphkkpgAwsN4b52yfsFW4pD1tj5yQ6a",
  "key17": "5piupbVCU5Uba1VfCgsWyC5m7wJo6h6HjMKg5FcdkKmzbDLSU3VttnHsYkSpjZrxbwP2V45A37y7iDJRGenARoBk",
  "key18": "24A1y2c6yocr68jGSwh4NtMuuu2KN6dwHuDeGXai1EaXEtDgzeJm7GZVoML1vwLQGUJB58pjWg6mVYhiUkbsvDb9",
  "key19": "5dNeQUYJd7Cu94fmnd7TKBfkc2P5GfXfTxHwd5RYiTsUukxupGo5zz2V3skNfeL7mSQz92jbkTA1iaW3DLr98jzz",
  "key20": "39RoDyQhrnTGiSoRizwUEbd6V6AfkqTHfL8jbDDymCz3BzHgzkvSaRDjbyqn23kdNhdDybAx7hxXvgb3mB6Tm6Cb",
  "key21": "3o2xCHWUbaY4e3SB7pioiNXqJptgcWjRPygxxJfD1fHZyjc4chVyy4tAZbaWAivUisV6zsKwfWhM5Ma3uzY84SqB",
  "key22": "fXSaHad5RJcaXEe61hMLmbkKVrKXv4qzsAnXkGMCzaYfwntLZ4NJhS3WqC9na3PWjyU1uGsHWKi4E5TEhZuhEfg",
  "key23": "3wG53PPsSXp4PTLUTq8Ek7NeBPknzHcnk8ocsrhFbMzaNju4VJEZeEJqbbHxfeDK2xz5nPgnya5CDmb3yBXaAG9o",
  "key24": "39jVDFdqcEgFFCm5CEDmH6EuEK9uLb16LLgjZraX4VnFLPP4TeMz89Gt81jZvehV8QCNcxoTtJu5VMwm9BcP4mb3",
  "key25": "2HQ2Lxaq2bJZKiuiV5HnVFkyAXrG54ZekuS7zLXURPr5CsNFQCbwf84Feqo5Ua5HHoffPNaDjrxZ2HwSQ4wzo1SK",
  "key26": "4Ywe3KECEQe3iXYSJeEAK7c2pqdQMPAnvbxkEfBLPLxWiLWyyHbndFax1zdhQb9xAyiq3Pod1kYQqPoWQwgWCaYP",
  "key27": "3sxJntmEpcAXNUminisjsKGPvAjxJoPvZnrPqioEyHbbUtgGa9a3m7pj2HEVFwfASdMBbbShHVaZ48acarr9DKJR",
  "key28": "2rocLq5eLEkBA6igz7s7bfCpjFA7jBxVmSE5tvfTghRb1yHTnVCJnfvNmAcnCz1e6tHENGY7TcJ1HLdgBtVSMk35"
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
