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
    "3KDkgqSXHcpBJF8K9Rg3v8u2rF3dqx2czoGe4qL9wWA76Um6Ye8RQTK7YiybCUUsP8ieWY4a8Fo7FPT11G5Uaaaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ssEygXti6tMhbXhAiXCd5meHo6gWuo9J3JuoVN94wghomsyo7QD5979TcmciD1TSCEXhhvkM9LvbKiVvcZmHrk",
  "key1": "3hUE1v9GBw3c2HMEgGGNw3NBtvVj3gsCYwCh6zBcqBg436V6TujMEwTK4Knyvc7XLiwTiaKUoq33MsVQAxjndv75",
  "key2": "2wMgvy7ricc6ewz7Xsjicjn2kTQ8dAwRpASmMvr4WufozcLWbvGjovpGCxsGQtEA2wonbNBH3kBjMgtEa8uubpzb",
  "key3": "5eVQBARZonZxowbNHHvSBNHapsXT3T7AaP7Y2Ke8u22rqoDVMZMQL8P89PTFDeDmjMcgvhJ6MNBju99LX1y7jLBK",
  "key4": "UVTLRA6Y2D9wPJWFByn25ToXw5Boo3zfSoLGtBam14mxA6jmpBdgQ9NSoYPWramhJoFBdRWEA5tfJQDZcZ8kdgt",
  "key5": "2QmhAiqkgk9xQTfV42QKHwRGv4Dyk3DhUuzP536XNC9Y1tUAiq7vjJYB2SgU9PDW8PTQCuGz7yN9DjzRxQoqttRt",
  "key6": "5wYLmzd4WEva6xj8jYg7Kcw9UFyyY6Yfvk9rYkttCk3PWBjzasrb9TAiKMn5NrRUJPR4XBjSsdFfu6BZMLwTdvv4",
  "key7": "5AbvrUf175ajHjiUYNo62X27iJk64e4xbgsLWDuCPpCGi5XDg9qvqEnw18HbNGyX8Jxh4Uu5z2LwSan7A29DezAs",
  "key8": "3kpycNv3ucNucmXaYGbFCK7SNNx3JZZkjKrWMQw7Veq8saXE1QaETcnZW3pg24SALmYUqaj7gJRM7S4vQR5XRFmc",
  "key9": "2hNonSyJgJCxgG5GdgiWnu2f4fMmkAVxJfV4HgmMiKoxJsU969X4nsYJigrLUgofas3ts4nY7QzaoC1xNwWJ4EZf",
  "key10": "3NqbugXAKHPAbQJx82WeU7RuAig1tq296zeLydWZwb1kiDMaFiLQAPFhJnyduxunvrKRnbsSFE452bzExNiQW7Sj",
  "key11": "59GSLwVmmcE1FCYV2RbQkdg6gEGjyoeKMhY6bNQvsfMpCvjNcaEwug3vjwwnZfog7C2afMXnxo4bj116PmoNfqES",
  "key12": "3oxg1PzTkCtxprHH8ErNcppWgGbSAMhhGQRCb7bnNfnwagPoe7vWWG86arpF1NpF6pLZZpYir8qzWyPjg3g7mrwa",
  "key13": "3ZVsKt2Fsb767FtULmBCQTrBr5zeEiQgbTahRsDuXJuDJ1ig3A6rCtH8w88a9JXPCdj3jsYpLzgN7hFqmu5o75kw",
  "key14": "5mMauSyfd3TfqH4yHSXLJLJidyNsDif2xeNuBwUCbQqL75FydXctPZMGLZhYsYj5YaVNRzjqxbL8TGWE4bcanXf",
  "key15": "jiZspuE1RLUyeK3KBncp9dErTeQwuN7EffdL6Dixj8cEtBLTXNWMFwmc2Zk1YYRTZfNfUNLtABp1skzRuWfGXrR",
  "key16": "4hLNpgkHbGkfagckLRQ8W5YNQfXPKkiohyjbdUEmUZgfbVSSZ7BgQDXBqNUqWmGfyzyBub35WVHEgUP182fSodJv",
  "key17": "4iUaJWEcJWz6tKtX9H6P45AvAqnGaMEi4RpzTRSE2VLiG9Rdw4fEBhzHKUjhpMZMZ4ZjVvXcSY6rYUgNAT1D84B",
  "key18": "3EXaqki5tu4NjmH2vc8uDHG74ZLWYBLP7qCRqYE3N6MkaTRPJDzpSHbJpJ6etWY8Wh9YbL4HvK256CDDPTVtWCiJ",
  "key19": "5rCdtFypxby8hrXeUcoLiNziM2YfPd1ESdU5uiT5L2uKwwM4jXnskMynM9xdVLC4WUsQULf6DTJFWRC2t7TAfAME",
  "key20": "3s55EVK1TTsN2Uxbij7ehWMFHT4Jn4ujfKMdDxGN62DicSRfVGCBB8PkQzh7KdMyNBucev2Gq1mqpJYwRywrzpxa",
  "key21": "3vucrSe71yM3yyZpvq36uatvtKCeSgaLo73LvC7iW3JikPBFPH5oMjEPhiV2Y2tCL18EehMV7AQAiC9eeKwotbBV",
  "key22": "4zPyZL49pbkANEZyNTgq8e1CN9QoydobpNCj3siM2akaT9sWCJpE5qFRK4ynLPLUHm9RGsKGHzXki4TBgWnxCdZM",
  "key23": "4wXjTVZKX4DT4hwVUbs9mimG7MN3sKCydsD6r72bWQqQxctQnHCZYxvCWqwyrJAondCLB3Xq3KdukNVJ2KdBpxhx",
  "key24": "3NvtrT9FXSpAyHgDrtuvXSRjSrUoAvRLhyxmWAjXbDhtvwcPYQKGC1C9csMZUGQ2QGwnYrLHi6vdDoxBnJADYXYi",
  "key25": "4jXNjgEhC331uQyBTri45R3WezpBocunijSnGr4jVngPuC7WacU7s2ABK7fg62hGpFiW6czFaCHv7Hj9UJRFeddK",
  "key26": "5bHQFwHwZCVDgzAPknBrHHAV6Jx5UuEvaY3oMrrTX9nZCrXxLJBEhJvRHccCLFANkH6ComqBq7DHzACqijH485f2",
  "key27": "4PK2A9F42c2y2mb2S5SRqmbe44aE4rn1DiD1h3KQ4DVvt2c7mEz2AFS6xf2tMs9Q1BMLpZ7erWAp3z2d67SQukJo",
  "key28": "5J17DW1LvbqW1ef2G8kS6UqgqvDi2TsSMNdVaKAinAuateXfMABKfGJWewH2EnaxRnHmYH5QQKjorJduUgWZqXfb",
  "key29": "42SAEYp43LhZ5NWVSvAnkohNikA155BLXXkwyHXjRYV9hUNogueoo6XKBZTZuLwJypQC8iXK21tQdkFnKg3Dj8br",
  "key30": "26SEzUxT2weDjs4MjXtpuq5d7xk5NHMW6Nt21jmXKFiGUwuDpvFp8vneiDTgUW5W2YdeCJEdeRk9LTgrCruoDSV3"
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
