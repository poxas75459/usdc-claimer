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
    "4DjXBSkbAtUEpeuGDVUfK4hqQEribroLZiRX1a5zBZnBVPNQiU3mhm5zsErDzLQi2ExNTLJ6ETmqaDEDfMQdDG2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yj1p2Xnf5CQsjywx4spCJyimCAauL7B8hAmTKvdgG7uC1qGRHePkD9UVRcZqeF2M3nSMMG45fXd4QG5rB3KhAZr",
  "key1": "5TSGkuLFdxmgDn7r5fWD6jSBRGLifcmwTZFrgsYASCffWkznSXSVqQEYwT1wXqHzjuGNXvQqsatuxMVMNwc8CKS7",
  "key2": "5J5vvoxhKQNbEdqAvPovTAGvuShvPoX6TQyCqPCNZxXq9Bre27FFGMHrJr4SegJLovvcLks7HFfk7yPV5MxcfXi5",
  "key3": "4KxaWkNRusaMminhk2Q7azEgqafnghm4T65nPPy75zygVcJPp8t2xhuCXH3cS8j7NEdMopgSijvrSfFqeg9ByvsK",
  "key4": "4wYMpun9N56Vgoood8UvkgniXbgsyYWUE696JzCka3HH7ZCqJUpG5WZDR3E5dMcBCDk4xKK7ZoBVrt48xaCarz5q",
  "key5": "4T4f8HPta8GvTtoLR494FoZq7qGa8iyNaaD3NJ71zZXEJBABNgdZUyeW5Vs5T11x5rWpnmkDASytfnXdM39y3akj",
  "key6": "3P9a7gz3M8vZ4bNW327bREdxs18DPTaY1pdcL3gdvyYDtwyiHkDSuMFrygEai5LCGWokEddoH6KPBST8pxxbBpS",
  "key7": "4avXf9rxStdTgPjq8LNnQDn9BXf2R25JFzpRYf58F1onfhE3cMZj8eC87JKv7si99djk2WwG16GuAfkFNZPmJ9zY",
  "key8": "2KLWNFZauQEmWQ4k7537Jn6Udd6GVFTcYyDNCM9x29BiGMnfDjCXcfW4ktRAVKz8N9LQiMHNzNsL2aEyNczRDMTk",
  "key9": "2UzQhFsndZ9Njuz4L5m4BGa4kVtwnWMmnqJQWgMvVN6uQyXgkhHerW7KfmNH8ikkBafqJCqrxaDC4m6upR5cx9t7",
  "key10": "4VrRjjVDmYYyJRGD1vUEwEqZvZW32Yem2JTeV9NsaerT26sUpQug6USWbv8A6WiaDknBcxVEVesswKduFKoWG7kg",
  "key11": "XuHLk8wUHxxThJje5g76MfSTMfR5c3akjin5wvD36WunjjVDeLF1cbgZ8Lh8Uex2R1hMn8X4CVniEKM9tvFALni",
  "key12": "4WbMEHPNJiJzwt3SGNgCpCwyXkhE3a1DuZbYYViW7fV4bmjJrXgYkSGMWX1PBagE6pA91cztVFYBZHLTbrVKShsp",
  "key13": "2aM9D5sv8fSm1haSD8XhnSz7kjWRAoJhQA4JhtsrdRqNYJiAwDQqcDFZN3STxPFKbQktq8rxiCFKB7xVFbv2FdVN",
  "key14": "4zEA7dYv4hsHVcGVT1vAJ9bTJVk7jggxxdYJYdSChxMptJpzfS4iCC1XkxoEQGTxCNccNEXkuUhQCNvecQrrrYER",
  "key15": "3VqmmYYEXLxjhGqqyPgb82QgWsqpFR92eQAjEWodqEfaY942HPN29ykE1nhP4TtpeLX9NtMV1fAASTiVh1WNeHw",
  "key16": "NgoFJFo1cCqQJapKA4c6CKPUtzDW4cwfPpSXRAtr2JXEHi29bA98aRQRKj7zUGDvDw2bNcX9SgrTMcrvYsDoAUg",
  "key17": "3Ko53Vs35jKYDw6fxBqH9smmwUJAqmLbRuPeZ4hWseNRy8N1pMSeuqqKPycmuNkztDDLojpcGqccwR25DQprkpcH",
  "key18": "CSDczDvBJWaJRAf4m9kZzhZLV7XgmwVt5ffbyMyTZGswm44PdU6kMYw982QBhQpCVFsPgNxdg1zV5ZAMZP8yD67",
  "key19": "2DTGmtNRurYYzbUwRnGq4MZSwV2Y6FLQUmbkKXnorJkZNDScCB2feHZ4o3gMCKtAJK3DNq6f2cj9QScgqwf9xFiC",
  "key20": "5LFskhqyPQmDLNwChV5hWinSRrKvLUe5bB6c5TtCsK4P6chXfucLMPX27xPhL4hhv9betexmJ9KydjTH3dNPiaJm",
  "key21": "291DmDQtx5Y4i72ZJCLN5zv4Vnb8f5aA2n8KzuBed2Wt5JSwkGybC8gJ5DhbswdnanU4sve9koquxDTQAvY7QXeB",
  "key22": "5QLWPE6M6QjGM5PcuKVoW4NmsGmKm8W7cdo6SuttKmM8NinramZexsxJGzu1zCojhKvaeNpwosB4YLz1UuP7b9KV",
  "key23": "2zGJF8ZLB1i7zkgtXnj7P2HwgsPH5y4n3QVZEHUQkUiDNMykXdVtzfNDHj67E6BxVCnGr9H5W4CXeQ1pbBT6atGz",
  "key24": "2EuosT7J6HmC3Nj6U3ic4mqZQK45UVWeugvGaLzyvSs5XhAzpmb6RrcYpCosWCWixLDk3cXymxqiq5cSd4xnWiqa"
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
