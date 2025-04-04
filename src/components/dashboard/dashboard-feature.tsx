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
    "Vh2RfBftYnEu8eSPpuuMxY47DRhfHcmBcXJaFg1nXZNESNPgnco8JhaRhyXvhrJ1qpbxsBfksPiHJ6MWHbEBwgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWgqg46j4uZfDaSEnSiDQTMbnWag4WvBiLpHLAfCDoEtgk3rXMWjDG1wXBG6XEhV9NvGP66c59LcgrNByRcXcLe",
  "key1": "48qThWSQZCT6EohzYPW4m9dw7y256R6c4WXVFXiMANLL3mWdAtmYFLdKVCpnLGS7pmyegVh5E3vE6Nbgd6Uoo5N7",
  "key2": "3bNcqwCTPufRHp8QeLnFe86skmQeG5mxBJiTUu4ruJ1F8ciuVMftqdYyCDnEVhnL8Q5qjDMm4bHrUz4NCRSQJJ5T",
  "key3": "3wb4GwHh3o8zuvb6NcudkJ6oqiSN1DPDeQ1CQp6xw13Fs7RmgF5s9re1h3xZKufKfMrgGhN7RMLKPSxono5DkujL",
  "key4": "45WjCixumGh9FjiKWer4T7aUw8jXskuLuaGNYq7ZZGxrTvuu5dqDgH4L7QvDM4UAfkBmN5rpsg1dyUTX2hFi4Y6w",
  "key5": "2DEwxMvpqmFfm3pxXvo5VtyoAiagYqJYPNCgRcwXkqbfwUUPuSPgQ9weW1fVSn4Ux1iLmwaVcJVLEGUYbaEhhur",
  "key6": "yT6NyU8WZo9yiBMgQfM4L32EgBebZmZVwhyMTPx1znpGi1XbMspBgxb6s6RqZWMsYWaUJAkHQ4WgXP2QtJyj51G",
  "key7": "57aXrYoexXiGzr5kJSREd9fWtcc34a6tQV6zE4nmNZaTc4jMk9Kik5p3i8AXFwkgeZsn4YS1jCyafDk1L5sTKUsP",
  "key8": "3kKWtkmQe85aKMPuGUS1ixuvAZ5cdDwU2NVVrcijkWctk2WMDkzH3u66fsNtg2hqoPYb8GKKJRKyuRxbxGzGw5DB",
  "key9": "2GBjKPgfSvoaQ9fxkaYGny6ssWawCjenpwXcuzuJsS6ynkmc6CowhUSqNu2Hc5f2aGT9w2UPGnn5SZr6MCv4r4ZF",
  "key10": "S5HQGCQeKGxLk1JEUjq31CQuLKxRFH7x3Z9gfeCGqdrB5CMXJCnLbJmj5DWrfpDbQS7dXGFB9c4e5jt22uX3MhD",
  "key11": "5aEcAH63sEZr2PyugNszvz7XKEX48GSkEBjQRq9Mmf3fNV8sqCTbzdzTctUQFw27zFBGSJvdzFPXUxDyPPUMyYp6",
  "key12": "3sgrfo6ZerkBqwLdURWnMiygvgwN1pkkwjfcNBJjsZETsj8kdzaReoSLUFs8wxAK32uAQSks6KG37SqaurYKn9YC",
  "key13": "23UPYT9qWHqA7Td1svpfe6tLGWP59QGtS1J33gj8enZ27PccpqoHR5vKJK3n54ty95v6WP8s6GASvAJDUsPUzoCw",
  "key14": "4P7kNniQbsDm6CZan9dhc7baLfECeYNqHXv2aJY1vfztXobqbVWkNL9Nwkvg5B34aVkiAQ4pnpvQ5Ant6Ez5ekmF",
  "key15": "KLSkbeELyJNpXgQc5dUB4b23TuYwjmbDDrJJHQKQjYNeQrQHkbjvySKTMzV7n3VUXHwwY1PGVeN7mY8SD7yW6B2",
  "key16": "8ab1CwT7KMoiasieFBEkPcNDv1EX67dpFQRCi8iS6nSz5cZ4od9sBELbtSwtTCy7aQa7Xsx9HfD25gpZ46Bcbw3",
  "key17": "2PnvwfVSicGjuU2TKkGyieLRvuGgk7hbXjUsbdJumyQAuzfRe9m28itBUPKYKqpnepPRShbtTmTqPxWXNwQaLGUR",
  "key18": "4dKrWbeEzbrW1Mf76owj1nH87YjH6JeAVxKHVUV2ecWa9YwNf22aJQ2pmbe4ig2kwZFftoyq5vuryUnmUQvpWYU4",
  "key19": "5wDVW2oxWFmm3iLSVm2qP3VCjYT1BisSAEb3ELNSP46Z5CthTgHxKdcfSQo5aPzipeXkNa1TkyRdXDfe2WWimb2Q",
  "key20": "517BnwpXEYCLT5ZqsV1nCtstEmPE8Vax4hUaRoUzv1EhjMaike6FKQeUjWKKyUkQmKWBk9bA8zWMMPKnLQdXo2dU",
  "key21": "aazrLLBGFi6T9AmhTYuDERKbSJffKKdKiaWSpRezZnNip9XKLC56THpfvTEwjXjpLF1U4N1gb9J5TLM9D6AmcYU",
  "key22": "54e9L2MYJfSAMyfsRv6VjUS3NqGnPskrFVXMrT1U2KWYxH4YGGHoZxqavMJvzFdfgHxdpSM9vo6pxa8W8Em6GdxC",
  "key23": "5eSPVXPNLoAW2e1LTN4M8wMGP7F3HuPkMuHmQ7Se2ARDUqES6x69LZZq7QpgJZTjqt44psLNvRzG6CuuoD7CGRQ5",
  "key24": "2pTnSdjfKRivTCMMsNbvCi5JCuUnH8FUAUGyUNQMPCyrR2nCpkYQ35o36Rw5krjwZsMcfFCrBVEHZcSL8CdgNP7s",
  "key25": "2nsumqz2D6wZ36Shmn7pw299DtZ38E6GPS24M1LvUxMwzfQM3BSdbnBHdFf3qvwefDE3R6ExBDtAbG3c2YgtNi5U",
  "key26": "AsGy1rdZf4KrxyFZEarMaVKrigVARPha8kVGtsvNcGU3ioWVD3ibDDwVEd1WxnLHdyTMep9zbC1684xSDsLP8DQ",
  "key27": "5Saavkx1pbNd1VkLXf6WNkES1KUi7u375gf9QNDy1zmKPLZGBxf5VtF76roiSDAR2H1ufHgEFDzjR6UGo81FiG5Z"
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
