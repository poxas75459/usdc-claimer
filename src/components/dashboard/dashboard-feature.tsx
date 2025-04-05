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
    "4nri3xdwcAggvnjN5fefWaWooXjSjKkrLaXyUDTLv66J8SrvTjQw7UYSGmCGkmVuFhMMxaoFWpeU4eWiHnkYi2tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1UmdxKZtmW8G9SK9TwGukie3E1PozB8tp7bzzxB5JdhChL7cfd3aLGpLJV3MsYs3Uh5jP7TJ3ikNpR6cgbYnNf",
  "key1": "2rsJdvyEMsVoPRHWfJexFDc1JEbDNRUbbEgDu3QxgrGeAzvbwwoaCKs1djEwmXvaZqkVKAd48RG7kTR1oj8jpsbA",
  "key2": "4fKbjGtonYUmcQKNJY8i2QzEXgsaDFWz6KcyDAwVX2j29MVY7iR1WnQNFSru4VfyVeThYDpz7uAA5SsWRtDr9TyQ",
  "key3": "4bZfgPrEQ8Egu6h6gfvcCd8qJmUfr86hFdkYDZ7mtHtHoAA33ZmR6zM6Ys2GTYkisZJim4LBgupigVGahBKmC1QA",
  "key4": "oiDskPfsTmojCmwGgzxxffrLFGbmPi7C9VwpaSw1zAFzRenxQUtGnFmB2LQ2y6Y2MbQgBnD5CZQGKtYurBuStNb",
  "key5": "3DAXNzcCfPuJxyDR5GUEaguV8fEk3WucCusmA2HDcLXVDs5eB2EKrWRSoHPspYEahBUqpbye4PvdCw97X8YmLF6n",
  "key6": "46KnwBtBW7qsJs1XFaq6rkhUSmihQ1potv8Cq9BZCSjuJrXQCFh3ka1NUgdjEL2VTrQfXhjtCAibKu9rxympkhBJ",
  "key7": "26xBXrBSNEZ6VpyVDfptEMwCRJV79bCe8xBYYJcqbPqocgwLMrdbQUX5MKRYDPp4DFmByviifrE7frUfZz7tKgXi",
  "key8": "3cFPcHWNEWg1mM3iu1CzpaBybp9SQyJbQxizxJdwoUmC8gvCjv2qjCsrSTLojTuERixX8pc2EFAcvqPVPq2xmwAD",
  "key9": "5cQob4tPdmM9kDGcepUFLWUWpZ7CqSaZPDeo2HrQVMHTsuojDXuxpvANK7hs9EWXkBrbTExPN1v8MFF33XKBGitS",
  "key10": "3urwuvT3PsucW3uhCBHDGNNdpGZzNpkJV5jZnHW1vzdxKKJoyfzbQDD6331FsRQqbqsUmoPoaffHfqq7DyyqjXr",
  "key11": "4HfKzFCDhF5wgiqkzEeJWHWvbspSAJVsveGq6jRpU3xR7YejgrE9sbY58bthg8YS5wy23nTjvaVBbkNn5CVgHXDJ",
  "key12": "4XDsbdirAdSgSzwt76f49GPCPT1EjLNLsvzod6o1fao8Rq7JiLRxxhSjoJtiyJh4BZLxZW22mXmM3WgPRqNXjjJn",
  "key13": "5maihbBNFDAYLdDcwNHVWvvMp4mcmrL2oXw1cyCML29pjH35noXRTXZAVoxzUSwvACtantBL55PxakeAZfHG2jsr",
  "key14": "5dQ143CPaCv7WcruxVT9oMHE7HQupEhwGk3SS17spUFyrscbJmNwMapNcNEJq8jpC5ToH9gYFi8PxyYUCrbWf3Lq",
  "key15": "3PBhwGK1MAwxgCE2a8BgZeLRKKMKPXLM5mkJHedwPmb3DLkpHNdPRfcCK7CJmwLhbtDbxtD9eXi13DgeKp9U1dKB",
  "key16": "4qjrtx2NXJvYxk7mVC1iMUk5q6zkcZVZhCHhtKUWTHzoAD5deZVRHuJKjVpLji15Vc2tCbKY354cSNdQzz6MVALC",
  "key17": "4zkUV3534V23E2JcDNG39Fngqd2cqceebo5WBbYUFxsH8MbRbH58PLsB2rJmM5zHwKQ4WdMtYJRNj164rpKZt798",
  "key18": "3rWiaoWxx7CBpAnDz1xgUZTjFY1dnDMFQKA5xM4zR9YgLi7QJMnDfYEswShyPhLBjqK6oa3AsBjPwF3jmrtr3QSj",
  "key19": "4fPW3hra6RghYpyye9yd8iinnfzxvHQnMR4ysaozd6dZXmNoeUnNYnWJj2GesnYpdV3ckuZhLAu6wxMj8KGuBEge",
  "key20": "3dECaZuvwnaWsD16sxUUdX5TyKqRvPS4kcSCAx5yahkjqbBsEDqNXQnGfBbixRuptTdMNHdRpfhpWRULs6EDMocQ",
  "key21": "63ZhWYo38dPZRnwRY5WWjriUnFstuD54Ei8DF2fSEfYXfLAYz4xHnWK8mqsTAf9XYQHNw8dZThMviX7fybAbx92A",
  "key22": "4vQafcFtJe7cUYktMimZoivYAWEHjtGSWiW49Xab6n5CEMPrQbZbXoYpLPri3nc4WbG2teNjUEf9pktQNekAJttf",
  "key23": "2ZejKhU8UvkUAE5SWnAvkLDjoHW5hNvh5PjNSySjXeydxHv1K2Ro7efqjgBN9TzS6s2giFesLPrnPUtNzyzH4F2s",
  "key24": "5snWDkT8XrX81nWHzvWQyesFyBYPJoww4m7TikCvkgDmfENL7mUmNkZrR7Pyi5kKnhz1xtpVENfa1Fbvmd218wYF",
  "key25": "5gUow5v7oNy4nvF6X82sEGr1SwJc6o1kwJVh3ExfVhBTLis6x5GsYt9M4YpHUPSpbLUAEq1MTqn7YrYMUj1EYXXT",
  "key26": "3XxJ1y1aCD7B672B4k1fJZSrufrDV9oZNnA9u44QdEuiCR7ALwcQtAZKsPWYeY3EaspuWGCFusgXhSE7zg4ivfW5",
  "key27": "tK6U4itWaJKMZUDGtmZFPN6ddErxhQqeBfKk3t6asS15TiQkVq9ctGSACcZgk1qKX75z1nR6UXzdV7kaeaD44Rv",
  "key28": "oVgpZ2Tb1jZQ4DLRvyiha6xhhmFy3LBEkX1TMR83LYBtJ2r5r8n4woUnRBYpmPtuKUZLSH1nrHxJpHDsEbwTzFX",
  "key29": "4iQ8HDJAkiTBw4Z31TxUqzp5VfyB59JupbYsDnnQYk8xVEYCoM9GshftWiyj4dQzSZBj2RzMZE4PemcxfLvzgwSM",
  "key30": "2X3wFSnq4wtPKGN24CQruWVWGyjP3jNVz9DpTmMXG7q3w5NKHgXLjqQRscbD1mytFe9dUccM7FKiF4qrzcMGT5Cf",
  "key31": "F8fZFnzjkYSMCTnbev8PiQpGE91CC7rojmav3wp4QMXidSuDJi4aHYXva9vPkSKs64227c8R72FYmZHifq6hz1e",
  "key32": "5GZrnraceznTWts65VbcS1FHauViCmKmKQH1XFQrBwqjbESW1PHovge5Nrr1wRc6cuViTV95BuK63hnjEEkuML2",
  "key33": "5RsafPYpwKHVy8b5Yn9L2UC8Jf4eko49G6JC7B7prJzK5ExroA2mft1KGFWiSo6HYfeU2xgmszMZx47mSXzvvFnh",
  "key34": "6573oPMtXMmW8wtHYEXhj53h1AqGvNtkj7VEy92e5DLPLMQhnB1koEpNuCbJnaWsdHTrTMNiKmNF25XddQKVTSG8"
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
