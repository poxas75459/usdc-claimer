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
    "5tcMxhdCpBtbCKNAYPEiK46uzWpPVaJ4JZoZhQh64vbHSNxjSjuRFAyUakgQjxiGNcQsR14bp15usW71DfsNP6AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDuuACnmFn1am7hMXdPyrxExm5fBYEwzx5uGW6aKcVLERKaAFLadeFMnBqxhfprSKWEVdKbbr2z6SyvmGB8cCx7",
  "key1": "4BiKjVCdJbC95Z2Fb2g9gTuVgiyD1W9KXniji5dQ1oy1dSsUKkKX1MwkkjWaYdHFY9TSa4zia5uRRkwa3Gn6wjLR",
  "key2": "4yzECCNTdFqmmwF9LSsRXDa2Nqng4F2KitP6oMJXW9tAQqobABfJZA9zd7AKBxk6JqzWMvEsNL9ErgnKbzep9qFh",
  "key3": "2aNmGZAozoGEoRiL3f9WzPNvTvVra1dEw7C1h4Pi9qB6Nw5VRQkMvkq9F3E1hbLA7kP6CBnmS3APk7YmLZ5sE5ut",
  "key4": "2Nwd5oTS7z6npoGTPR2j43kwA7rTVqYTNxr6AwasbwmaJjRgwxEYhUhmxqUryHqGZScYf55vsWXA7UdPGtzMbmzc",
  "key5": "4XZWHeh1vWRPvnqghqWCV64QAzYR3YrmnwwZ251W4EK4cWfb1twpKzVPmvHDVSqAxPuui7sG14Usycc9Pt7A42XG",
  "key6": "4LYGvzN3nPTEADxxAhuGm2Ram3QTSBqak64oMxpaDLx39JJGn428TkJQy8xHLUbGofiJLjqyy8ZBz2dTMMrx1uXc",
  "key7": "2sbnUC6BfNkToSbKRWeccG7CMCYDFx1SVGAkgygWJVi9bfpEbBxNT9XwdrDwQb6a13HvqCk5hRoAp1UTEXrAoGDm",
  "key8": "3Ubn9UTaqX6BaxTg48y1bpvb47DML5tgVt84zGRVWUQaefMzQ5TNmGJTqqSrvC9aEMxcyJqnXVccvDSxNaK5tUZJ",
  "key9": "5Ww9HdtATGLXN3p9k95q7AFsU5aAGCxZ6ajSKZ9WnGDDdezCxNHzRFN37hQGXNmFYq1WMncUF9TTHssmJv3TivU",
  "key10": "4Rc3tv92hDou4C5n95hFkJG87wh4fDxEdoxt4v3CkBJefkXWGQHXumTfC41jorpVDt9ozcYQFB4jTTS5d3DmjaTF",
  "key11": "3QFtMPZjWhfuZXYE3M2koPxBhvXqj4vZrN5rPnBsuQkZjNrXqzv3s2XBNoMp29zKaQeWr1vg3X4ihNG2YNF2R3VH",
  "key12": "3VZ9eo47TZkM5CUnjQKiLbDJwwj73aGdjNVza61ct13X9Vs6n9rDm6shnctM1d1U1hZooUzhrq8vmrqwjYnoXYTh",
  "key13": "34h3r7UsfLhFSG7z2X5xAMnm5q12RXDXZ4Y5MZXg1qVQx7JFigJCYmHT3bsZ8Hxjy2c5JM9zvbiEhJkB7xMY94z1",
  "key14": "5UdBQaAtnfN3iewGoiTDSes5HMLnxNND29EocVL7nei9S4GFG6AvNagkJijC4uawT8E5yiLPxQnAj1bJujTEAHgC",
  "key15": "5nFuiok6kXbYGR56M2n7LAwCvcQ2og2t73MBWbUVdqh3g72EPkvSQhSBSbjeFS978qVpf6z6bSY8u4JuDDujLQWC",
  "key16": "3NLbmgTAtkURgAyrZu1gHicgCywTerDjYt3pi7GVFZSpDCRnezmCmaSgZtaJnffX5xVS8jKwmffD9uc6aXLzNgmt",
  "key17": "42LGsiskPVoXsvKmLWqLzFz84p7nfQzwQdS1toKD8peQEWitbbLv9TSHtdYdXQGfCuDsYsioVXJFSWn6FkcJHBYZ",
  "key18": "4biXTt4drDqbVyL7uJCoL8trZ7YLVFwseNYF2NxvcVnv7aRWNDrPaSbaez4wvsGwCxLA3f6ZufNi2B8JXTcBGZTB",
  "key19": "5ykfWJij9JGM3u3cQt5m6o3i8URzkVxPskp6aTyaVTVxV3J1Mt2f7YY9rJVPdSLLp1ZzHnY1xjy9rLZSzEtSvXHP",
  "key20": "4gk3zUCvGMGYfHESBSXR82A8oLqdbXUPcCLjHba1Dst7583kHmkAcShYxhHr8CT7EJRwotkrCG5S5Yda9iiQJT7w",
  "key21": "XW7yjLjFNcVhTQGUnHuri6vcAiXuAGFeH2Y7ovUsX3XrsQ3VTs2F9xK4bQ1ht6Lf24NJb2rtWgazWDKQY1XYrcR",
  "key22": "Jx1u8b7RDSPuJAzXD5Jw59TUC6juHvAjy5j8E4xKZXxrfeDbnZ8qBTjXrgokFzc8fWFWbK2Wcpe5drcxTzzokgh",
  "key23": "4ybJS1YQx8FtNKbbbk8pTWR48GCbicA3TCNKhRk8BAbi12aGVRgK7rN6rQ96HpkZePPSUz7vgKhiWmGEUTHrdFXx",
  "key24": "3K3Rct5pNKqSKkZ8RwnJDj5xE2RQy8MtXkLjCZMVwqi5zZeZLHWiVdkbQvGQASGSWreYTiTozNwn59ELXgGG6QyC"
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
