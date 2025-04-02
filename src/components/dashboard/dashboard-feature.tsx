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
    "5pYk4kEngedQQswwndM1tBPbr5SKoWc8AP57Hqh4BA5q7E2DHsnSACq2JsY2QiNFdoC5CTDtb2GbhqFHBPs16ghK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CmLJnkArnNRLG3ov16nZfmQSimfX5rPAPTccfAVvF5nMQcY9K9fWME5jADCN6EibnsNnwCn3t8DFSNVkju9abD",
  "key1": "2NpYjiWhTtamBLQW7BkFaiifucyHcKn72KcFXJgEHY2xXqtNkGsR6HgdFRkBXr3aU1V1E683FYDBXuLrRXgqJd9p",
  "key2": "42p6zWyBdNcCkffVyH8vo23kF3aHuDLHx7oGVyqdEezDGNEbvQ3Sn3hFKEgxwtSnRjwJeCuACsGdZm5CEtrdMwtp",
  "key3": "2HBDKRQbK9hVrqZx7kWtMTwLBzBXnJmmfEFFWqpShphPLjZ7qAEPF8vjFF1dtok8HuQ8pYo2C9fGWZUe35M7r7Sc",
  "key4": "oe5zEk6YVeTYBSencQxXELwcz4ch9gAavkYSD6uvTti7ppnTCty6W6trjErs9X4LiPUPG3rYNHHaHnm71wcMRLB",
  "key5": "4pkgfLxEgk6tP9MrHYuUrqbcpvysUmkgACNHtBhJrWP1ekp7tTgUgF6mXQmAkXuU56efZC2AJkZCzHz2KGqUMELd",
  "key6": "qYWvSrgBNHndkNZdWbof5ZdrjYVviqUqQKu9nLwYEe2msKEUas1FtMwNDw7Dcb56yVQtWFN2Gnd7Fb4XDxRArE5",
  "key7": "mpHt6oAoo8MkErbRrrygEsX5SuaZhow31352X2REdnZE7XiTRCeaLG8EC3EAoo2GBkodhDMcKZTSFZzdrmFuJbo",
  "key8": "39xv2hfKrECUR1DShobJBWimP1CoVcQ4Kk7d5xwNpMuWKYfHexjai3nGNy3Bs4zXvMFJGqKiy3xa3CgFjz1c1dDD",
  "key9": "3rLFkBjsG9Z2ppzhdnfNWERx3hbaNK65McpXn8kjPC8UFAr9qAXHStWpgH8KnJvC9jGAiuYA2GCrTcWp9d5CZkii",
  "key10": "4C76yiwSPbFsSegA44jaLhACUL9D1QgJh3jNaGouBgmiH6USdeDheMs1kmgG6UvZZXxtqmnS1iNUHVvdXXphqkSv",
  "key11": "5pWCGUAcqnrDyuTHTZ35xv66Bsm8bQrtPVQ9niwragstJanLARjidaeKHte7p8Loeb1kkEDEYr3k7vLX6tJzP2a",
  "key12": "2jVnE9mAn6gEYCVZKVLBG9ZnVpTvkPs92mkj8iovUBCKz46xWF2sswgU7o6NawAoBH6X3dUxALG3iHe7itwt29BN",
  "key13": "2qKFRFYuqL7VzKgi5sun8QeLSPRde9YbmxUyUf9QPHJUMmeyRT1h3WDG9W5LFtYfDqZcsRCPENrXz4HUhuNKqSaj",
  "key14": "2M5EPTq9A3UMeVfCVEiQvFok9drHeRAhJ9ePFWbkKEVsPUnHdoKXzfHXSkqjof57amhAmWiM65F2KX6fzA73n3fZ",
  "key15": "4mBc8Dg1R9HXUTYsrpgqmxrfrQe5NaQAZphxY8dL7nSrmmqm6gaYSaUgJMAw78vftCiEGEEvHpr6zCxCceUPFoac",
  "key16": "4dhR7QWnjQs3NGGZoVj2Mb8d87wwneZT52YFh2QgBcsNR6nezSXMkQMKo2Ek5yquMLgHg8TixMjAcSfPhtLrqAPw",
  "key17": "DTrrC4bn1Z2c4vUMM8gztcy6tb9pXVmG6EP2QUcpcupTAXbSsDZxv7XanvhkwvLo77VLHRJbowPLXehmdZ2f6FL",
  "key18": "vFwxkTzLQp9jSMfLmNhFqY3xsqS9W5vb5tSBg7XdvKSPRVcXdJEaBg2mnCW78sx44UQ4zwFy7LtaLf7UGh1UzYz",
  "key19": "zQT36qSQEywxnBF6MhvqcyV2roEv3V1zxkPsdxBUdUcey5w9Kvjh7hPEZY6xGz56Sm9fQWdWM7LktpkwKgwn9sB",
  "key20": "h5gj4Rk7xteWbSbbcZyipzMYfgCo6BTQpCZQ4RpV6qXZ8dYLh5Jr19wL7P1accjmyUHhmYPEcbX3nFkcnduZoiX",
  "key21": "3nnBqhji5R6Puw9fwWaSjBQybczbKSWtiWbL75xdnVui2GtzRYSRu3iCcY8Zday7p6Co4BSKNTSLaLDigmer7eUx",
  "key22": "2XM6uHRBgAs8nCvAu6HPdKMbVK6LNqzrRkLs9m573VrvLnwYU2DDhtezHrSYQLgajV3uhAGb8JPq8wFYvkj5iVm7",
  "key23": "2sXVAgej7GAWAiqKDbbQNMPW2gJqU1H3A9WVU9bVnnaWHF3orL5Cp4pQswqESkkcuAWpZ6uUvaAmA7Md7fgqNdop",
  "key24": "5bkfvvh8HHb6LSbwfbngSerBwxvi5VnNwqnvesR3rj7fiqkhsbduEqbjbPCKphgLAprd5WMUJ1zKYin1bhZKRgM5",
  "key25": "i4K9DcuqJFLLd6yADkg8YYPCLoAm12fHNMHZsqf9Q9wbjU82yJuFUZeMxeT6Zz1MwHDwWRUt5duq9zBrKYCDXaY",
  "key26": "25W5yQcc7ao5nwPixdCVehB1dCQfR696tdYwiEvShJruzm1KgfbNg5hGmmwU1TxcdcdFvjkdaPUZ8s3ooUMPVWkE",
  "key27": "34dWDq52uUWEgjKU1MmXhoNkmq6y7aZZSWWV9tGRci5BmsCqahbiFGLgCiEW5jpMTfyxjfuDSBPbRugZDaQ4BdLm",
  "key28": "35QmDQxs97aNX5fbWAU18BAL2uvi19nHZYnQwwXfJa6UPSQwLyFWZhAfWb9T5EjVDf8U6y1k7n8HD4KHF6YtAC2f",
  "key29": "4x9uRCKFkxfG9HHhrVo2bhnzvTYcv9kcHcKLYYL9N2ruJa9dkVxoiSj28s4CbZV3iqYj6Fco158y8KW942gBoJfo",
  "key30": "42yyHsM5FUJVq7DDkEUn29XgzY49Qzbavoi1p6jGYyFKtERw2rUoYoqQrKRxNAvndMcFec5CSu79YijkeRBJCzkX",
  "key31": "54ye12WbLggxfP6rQ8WYSzSVWcGYbjjhWLXbPTJuj9dwkBThp8HBSipqtQhnst9soUBYB8n7M9QUFEmhJQCvxn7H",
  "key32": "2Z17PWgJk64wUZBMWArCRMb9tWuVAVWUL2bFaScwcB2shws6nawUYpW2i4DSuVniASz3E4KrYggZ5y4wpF7uMicH",
  "key33": "3Kb6Q7RWngW3KL6t9997KxjgXfmYJfBSH48GYJTym9tmDDa3kiju4qqFGtpMXSLBeEpS4bZBxM6t5VDWDydnz4yZ",
  "key34": "2zWjNcmpgLS3snoHduoi9A6xAms49REANffPFbmp174rcCN3ffFiM7VzawjsBKdHESVGXMgUPFGNGSDWNeGfZca9"
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
