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
    "36PDRsJDnjeHJ2A7yCoPP6jyWLBsYyrXZaaEGXgtiJPW9StWEj57n13GjeJRq1mTqh3Sj1H2JyXvxGw79TQqpKNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYCMHaSUvNPTfSYwMLWUSizPiVAxjgkfwmEvmSnZYFsyJbniScB8rtagbcDSigmswAJKkkos7NoXy5jwsPPNrkY",
  "key1": "5ypF6UKfMgeCt6ernyDJHzaP5zdoHCtA39CzNgAvEB6G98xwDfZytwJfGC8F7aWz84Gma21kEhoTgcBfYe7fAzPh",
  "key2": "3xutb1yR3NnxUXDhsoTTKHTrbpXGjU6Lc6RRbvvvDiQhbpfxbMiCGhpNim1ts7XGhFhLuKVJHVw5FfzhSLvXViNx",
  "key3": "4VBXae8uCMdPeCujEoNbjbaU3AtMSJjf6srgbMWeSQNoCgzWC8jxEa1DzD3r4pcgxVZsNHeyYRiwrcVn7cRwCo6k",
  "key4": "3KpE6c8Y7PhwNPLgyKmZsRWyUM2NW5rQFDT6MZgi9rrQ1rftizjyqmrbXrprzSkduDP8VD2GxHJBE4WxSXLwWPyi",
  "key5": "M3xDgbPrY5j6trq53itiEBMnFo1KvLNF9CrNJwqUGqNjjfqHeptBznALMvpauXSkWrUZQobmpWLJvCCPmtnxZg3",
  "key6": "DqzxYtHj75p6HGXPDG1YjvJo9CcQJ7CCxrBj1Ef2PsrcJjuuFJVYpLp9ED3dB5iXBgcJwvU23N8MBBmCwtwW6co",
  "key7": "5qaKML8FqA3rw6R8KZEhz2bYUpqnWDTJpXQLvPw14A1NZ8DsRWogTWDi6KFzY1NnhJDJpv3rzxu8DzoqPAVMGihT",
  "key8": "2MahazUUeG3c4cjPM8zGcWEmZAAgBJgb4wJA9hix8BKeRGiNcwDJk5fmLaD1z2WbgmjR456kYGQfw2Px4H158c8R",
  "key9": "5raxFpihNcESLiYzPUetFBLdD485bcQe87Mqaa63eNXcXR64ia9mvCKnpM8K7Pis9HuemoCUYLzrZRvhC1GUur7B",
  "key10": "3NTJMSVzQxzmbJbhcnJ771GuDJ5rCgfLy71U2tpLpHBJVtuTZAunVxVb3HPQP9zVJ1zm5WLkSoiMcr44v4ZKtbBw",
  "key11": "rFwKxt4ZviLfRiq3cwsYmwMkvgqYShFQ7dudSWmgwRKjz2E7grD9R7JK54dy78PKDKMyMAs6tRLjxXEFY8MdAfE",
  "key12": "3ZQLhrxCX3YCR98qAiWhBMZdBuGvL2RL2ZYeqZUWDop2nceKTXgEWwvJkkexTENd9z65FpjfbmMBb3uPpmHcJAMy",
  "key13": "ney3cfV3Mda5hCyjXYnMxdBBB53JjWBWLKFW245svnpkXZGKv9S2NgmrM2YkHjCuYRZEKLP31Ba3f9qEUdd1vyx",
  "key14": "U3UeEqaAH1fXXqx3SaPcXzzGXZDfmAMyw6todf31qSh9rbgVB9AfQvayxzbXdf5hRupDT2S72fCHUNr9Kvwh6qu",
  "key15": "2fBNPJKjUcJDvBVYihgu35oa7Er9miVHZNSzhk2gyTUD2xTiAyYr1dgXrkovWSENwvNdDis8X7tR4ijvoc8K1cEb",
  "key16": "51jm2W2RnvyaBSCqLJyBHQ5uT99St5feJLmFtuG1aahTBLv5eFbU5VEN9NaAvKTUGPVPaESb92dZB5agiwAtURKy",
  "key17": "ab8D4Sb6wKC2aJ2sDZJDLkfYyScheTBiWFP4ujEUiJeZLs32dMruAjxXTbEbk8vJX7GmuiWpyBrQmRCxXkLifma",
  "key18": "3b7pK5EV3Uxne8Q8qN1ECGQevcmnWfSFBbA5tx28z3tt6i7QBga6C4tta5i4Adnk3Hh7bjrZrkDZkKjocfq4TWJ",
  "key19": "3PHyYYh8j9x8XoRsHPT7UePiyAFBAsXzfmeTPaWjoZSC4fX5eZmqni25Q8iUcFJo8P7LmPF9vZsa4WYYRRk1Yyen",
  "key20": "Z777LRDGXzJ3XzNi1zCFJSkpUxR6L6eBigPPWRhBcKJeetzmkdSS4JviGi1ZCM7xhP5kKuhf1gK7RbVB6V16J73",
  "key21": "5duYgikqtUjKpMUrTPGYT2oN8yvGPEZjGpmbKguGeqQ9WcTcXjxSQN7PfsrBhzkDWM7YT2GKz1LJ2eFgis1bThu3",
  "key22": "4mPFqm8mHQuvH9jtLVAxZDTumdEpPLQD3SGaABCcsbXR8QJrzTZcjc9pUEYvixSAopKmoEUufYcTPqf7J4ipabxC",
  "key23": "eosuEhdZ4nN2H5ijidayTvnjEoNFCtKGKcyonaaTakmNA9s8m9hCcvBTbJg81ox6Y4uKKcBMrtPPGXZD7Tz4n35",
  "key24": "YSfXeuwdrzKmqte3362cQw99kXbMMXCWieHx5jEsaKPUjBVsH7Vn52v3i21o6ZcxwpZfNGDjNyfZoeZip99RVXJ",
  "key25": "S1Zf7zwSHGZh9JBPTGrt7VsMeAyKqoyn78dJTWcDcBCGphtG6HMbdPbsUGdpRNGw4F31ERAsmPCnXsj1KkVmcNk",
  "key26": "2po6HKygAFTjxDcf33fX6WM39bf4sR6fwuR14WVsUVrxuzrjcZyKkfS7s3HREhbjiDhTJ9q98hGGbPvsAZGhQnCs",
  "key27": "5kGjg215R2N9YhKZRJs5GtD4EBJqrYmNo7AaNNd4DaLy8qXwxYqM6G3dm9TW2gHtHPDFxo2vGEw1ncPWjK7XUu4U",
  "key28": "5USJSRo5rpiFiEdbTSmdCy5YZFRW27SqCcAqwfWUsu8zWbQcykmAM85oidpQAFLfpFLnGfuJUaHG8Mv7tGMm5wh7",
  "key29": "2kFE8hzPUzMfCeBn78C16AhguEEUpNgMa4SR6UT2tY8wLExFCG1HmuB7PGxQYnoP7yAjUJRnChA5NmLksaV68xMY",
  "key30": "YHVhAmTHtLvy5WGoF7JAdwnNB1pGXaYGvcNQP3nb2eGv99CUbN6ouXXC235rBNc41aoSiWCKuDX2WFhbCRj11h5",
  "key31": "2jZZeVUB1s8nSmyZG6mX23MvXtxfP6hgFtwPQhbdXdCay8JCsqdeCsUVSo2nfedv3U92ZXjr7kKg3bmMNhAVBRSF",
  "key32": "rfi413EBfr4xHY188y7ic9MqjWFrUHxQ8RN81j6fsN5HCMxcpYzzXEZ1a3WJWa243c6SUANpTMneRZH2zFchEpb",
  "key33": "4NykoGDu4BdCoFesyygCkVQUChsTv87KRXtKqqESSEfg2MVu4qUT5MZwR9ojGe4SpBv1sind5RtkpfQGthSBYPd5",
  "key34": "5oR9TkVm5U7rThWfvXoQQzWwN6oGqrk9GoFUKxuZjcnSpm7Rm7mPSY41PiVAKVb6FNQJQim4w2A7CMgxAcB1NZbH",
  "key35": "3mFDypabjLTGpmSXVmQdJcWo11oPZtjS4ys9FWboCqgDQpFAFwRX2j5EzQaBK1xM46D76GGTtABsvSyHS7CxvSv2"
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
