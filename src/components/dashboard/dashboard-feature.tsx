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
    "5u7zini8VcBUepyTJbwEsWhXvys9KJCQt1EPuKLhk8RQ84Vh7ZnUQNkpKcQumN1SvJDJsKY3iKF4fziPJJ8JCKKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfrbyBMH6LA9MEe5r4zUGW75CkPhPUtaaZd8d3R7PyhrsHSLxzzJxDbF1DkQgKDXgC6pgwiDiqb5BT8pKUxMDHW",
  "key1": "AZ3dNwoTw2W2xCTW5H4h5CgmKs7sZWi6sUQn18SRus45qgjz4A1C7PJAN8AXMqsU9wzbXGKwR861FG3rYqnMV13",
  "key2": "7Wks52BfZ5Zx5UGXfWNWYdTgNfim4ejsmr8M8p61HhHcEdWBTMXu9xkSVHsyhgChSCwc6qjG4VcSH4FuiPh6fkR",
  "key3": "3eVQiMN8uPJQRx5Ze91PxvRoT4iwKbFGmcELd7DnD9jEHDggj3aBnptLykHnYuFancDcFRRFZ1qS55FM4HSygArt",
  "key4": "YsLDTD1bBFawy2xM4d6bqxDHacShd2ARnWz1ACR4CB2KxephFnbtUz5JnWn6iEjsNaCsoiPot37N9zQsWtopV35",
  "key5": "3bHEwY1onSFzXfaG6Ctv6gnKLzUjyaQ2VSL3dc4hBL9fsGSEeo5aH7aosgNe7vyusamU9NQRQs8YJUGfskXNS4NE",
  "key6": "5nwS2KNBwfn6bMpYymS6hqhsM5B47Zb4TZjxXLBZpFEm9BHyBaUQDpcwvPSGGdyBhnphGPDR6i52YnWrLc9hp5XF",
  "key7": "4yVZbQeBwuNQHjvNTgBgbZsGvd8uxMJv43nywSjvAVtnXqrsthRuMniJD12XDvxgTdi6E3zfmwdPTMoWSZ8Tvf2M",
  "key8": "3nqu1QwM9sy3YLC6HEs7xL5J2S2jS5Y7mMLaRk3BdWaVEBHiJSxRjd1cjziCMp9Y1Uih1eLuuuqMKP3Arqgjps2i",
  "key9": "38KhHd7jxSnj7PD7FqF5zHrpxyPw49JZDMduiuFCvEsAjeynJnqmsAsXmT2zVQatpFMQ72HUAujCUSgu9xo9GVSV",
  "key10": "3Lr1NJeFDNMR9qARFhSXTCCSwTKzhwKaSFkcHjMP8YoFRyQWLuo9Ma2S3zw9WY8iKRJP7M822kg29LNTpEugaKJf",
  "key11": "2ETfeQVQx8snmujRG6yEkmFTWLfKDAXKrHKwQUPRSAhpYhWiSUzQeNNmHEA8Djd4voPbBUTBQxLrYfRfeG2dgwmE",
  "key12": "AvwE17NyQKL3h5Rv21fod7gdpdsUTJUW748EmST9z2Wq1gpwJKU3H5PCeisRi2GoppLhoXoWdWxbQkjyWdC5Z5D",
  "key13": "3V7nicdRhn6xwbKfR8Dza5xqUrczQ4vKB2yTvW9SXzrxH991nibvzWmQ6GLvD7VH9mmHsxVFZgZ2uqRz3njHpJb4",
  "key14": "4sZEHduGZWYepQMtUxan5LKZjWG2tLMks9B3X1XWyXKhHXRxj7HX41GzyeMu1sn5dY2aNoHr3VXEKrjrETZi4NTX",
  "key15": "2nv2HYJnT8FJ7HJrAPDY8dSpJEpb2YL7jHAQmouaEWeLs2MNV1hG8u86BDyrwNCQJiReh7z7NcenMu2uFNvY41z2",
  "key16": "XWez9uz77X6vSQ5pFewkRXtkhfo6o43GNdzK6bJu1nzLkRGx45a9cuuAozEc1izbUEDvFjW8bnMdtkMxNsZozkV",
  "key17": "5hFXvCce1hhnU5U3mbHDFdmxB85cbzhKhk7ADc5aez8MLF6KavQyng9FKEDAbpdpqPSo3DthdppoL86ZLqzebsZg",
  "key18": "ingcj3Da9FnFn8RYZMYVSvTVzv1ngtWRvcJdb2GDKrvvZKvJKhpRSDxW6Ks4AN7WWbpvH1tkYhY232N8eX8VZrC",
  "key19": "51mAiohvKkoe3UjJVeFdL3wEojnuiLQHvSBnoATfckmMbH1XQ5qnijf7mBrcY33u9Q8d2Fk79DtytvyXXBs7LPy6",
  "key20": "24e5E1UL511xr96Qzf1wNNBFXyVWHxWeKAudaupKEiRxUkNt956zWdq9odJzj5WSgrLxiCAdiCqR6ZRAgCLCAMt1",
  "key21": "4JoqmoyAU9U71tdzLZiThjVWV5kpcqx9Hgc9bcwbk4moCHwTrr5wjR1fWZJ6vjKSeFADBEMA4DFAqtrgCESw6gz",
  "key22": "581PcnugFVy5Zn14h8K4oXkUfgbynppY7epdmF3FftN3DMmnyA3e8o9LnvzrgnWQuzueeSSvWWwfqrXfaq2bw3xf",
  "key23": "jnCAcYU2qFcKBKBrSn9b8e1cDfSXyXxV4UtKQ2H5UzrphMR36w9EuDsvLaG6jgxxPp76PFGq6SbPytaRsNR7mPd",
  "key24": "2XBtbDcTu18nThbXeFMsWcDMTvFJZd24XGvZVudSQNe8wFU9dC8S3cDYmpZvhsrQXZ38kCYaqTn3ALRwQADiYXSN",
  "key25": "3Bw8hESxGMWWUUargXtEwA4cX8RWD1JkJWrRttw8C6p14VhcKUo1dN3yri28fnA2VnVGVSvdVSx2THTws9Uuovrf",
  "key26": "4mvGEKtfZA3tFjYEPjRhgTmbxCZRA9koAiZYGfNHKT9xj3QwP25AJx5j36eeZNiYXZEhjCnkB2fGjDX1UZ1tNfD5",
  "key27": "5N1hGig2drtPKVtcY7iNmN8Pm6ZNoTKMoDmmhAKq2CiyLYfk4i6QvTwMBYLMcAkJZTLME3kkJjaooSfFrZ3JJ4YB",
  "key28": "p5r83sa31nT7Sp3bLDPYgSquEb63htaqwmNAshKYoSQSbnvmSrV9HFsj8KqHgjXJydJNg58ffsGYrYSkpKD6T2d",
  "key29": "2akCSM52CcTGQp9KP5CmQApo846kCGeFJw5WGGamJrTQnERPoJnzaHeBHpCaTewo113Ap3GEn4vm4PwMsCbYU39k",
  "key30": "2g8Ny9Qn1gvD3zMBWLeuyunGbigNv8fC6XVPbaPoVWQVUSaEoahDz5mLf8XSkKuL4FGfB3faSEWi4kg288QK4NGZ"
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
