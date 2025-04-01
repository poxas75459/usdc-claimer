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
    "211P6aNu6R4xR9LX2JGhM69BxMhsf1BDifM1bim69owViDF4nFvKL6sVWk7rTjx56uinwFTHSvKcpcVBAWWYMMTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PStfVUR1ymVL5VcxCA9CTSVAgukGkfqF6ZZ7DBp3CxMNEM9r2CqfKf9JB9BFrsBrZHZ6P32UcMZMTrRwqiMGZD",
  "key1": "5v6aJSdVsoNwcL9figABQ1xSGXY7wXSBoH7QEXfF1CmZMvLfTMkQ4R7TkYJ7uVdrTEiNYAp8fGETFiTtZ4yMVn5w",
  "key2": "2ozMEQFHroKZtUnzCh3b7ryWTWd1Hcz3yFD9nWtNxMZxy9jEWbzUqZnUidcdepA7BU1h5gM21tgj5oobescN3YRz",
  "key3": "2zCbL9JFzDWNe6RPWny8xic3hUbLjKs1y3wbD7nNUXXqQjBvG2Rof8TvWKvVvaMBzjSkybnxxivUNN85NF6YK2Th",
  "key4": "3TKkLL4AtNbP8bVAQzB8QttHLeg3zYEw457CJQk9bFgb9ETMwcRy99ueggMaPv6JiScy5CAiYy9EBWbozFn4XWfB",
  "key5": "RLuTqwoPgX1npoDhi3gKVDoCe6c6yjahJZbLHTMP5WoUC9HYwX5VTJu5MTrLMHeSTKK6nTgnWHAH4Ero1oinU9q",
  "key6": "2MJMq2PXab3qz5xBKxNtHzb2i6NXYja1SZY6wZP2o9JbwU1oDMPv8GV6nnfUag7PRLEqoKBKf7Z6QHZ1rZrJfB1Z",
  "key7": "5gvNoXTmBNybCopZHWsqvn4eXCf2xpdq3srKbC8kpJFWmo8JWaXcno5eJwyJg7q2x2LtPtSiRp8fZCFxbBEPzeUL",
  "key8": "4h5eHTtEKoGM3FKeXv3AbU2xbSiuGm9ojRfzWWd8mC8VHdPxaRb6ZhPH1saoYKRHq1zaBCKf3XTS6VpiTsvEfRmW",
  "key9": "4umos69p9wLnVef7k8aVxnLmVYCQizVmuba92eug3p6zAPgiyUoyYBr1RrKxUiWC8ke8ZdTYeZUK5hwYjEQEvzxj",
  "key10": "5s53dD3QdWu4YjxQ2cBoBmSc63rxKKGCWXmBtcyeUWF6Md8beyM6mpp3RmQKbYAvE3FWE18w3qH3q3QvdxomwEqG",
  "key11": "4w1HhPjA25AWZSJJZgobvYQkhrX5Uxm9LuBCt1keZgWHmsR9LXiuZh4umsHZWSd75QYPqZeDw3w4vm5DVbQGyWd7",
  "key12": "2SRLodEjoWirntcRWF6VhyjxXtVXodYNBcZ2Dd789cWRnJYr8e4MX37baAuf6cUjP65KfeJY7Mtvj7WFGXECWucd",
  "key13": "4ZthVK5V6wFFDxJviJuX33Q8BKPeTJWsgyVAeTmvmZKH7YkryyTUo1ypbUcKByR2QRJK33kznin7UdaNqqRN97N",
  "key14": "4qrzNRHQDrAUS3J6TGke3EauBwjEfdWvH1KGdXyiderN7jE6gDeJJdNYJoe5mDV22wPbrjdBBKsoipvDJffgkJRp",
  "key15": "3kybubkVt2oWDJNgivTyCqSnYSJrx1qAo4LSPFdVrCt2DsRQmKAEsCutokswGs6GGwyhRtumaMHGuAoFMmRPV2mW",
  "key16": "4NDWAchHW7yE7Tne6KMju8GWn7YTsAgDDiUVhiJjsAeKj9Fwfrimxbvpi9iyWKAKPq3MsV2aaqFe124e1XYMSi88",
  "key17": "34GguV4DtA6zPrBx6ZLL2MQhVfW6YZEVuuApxnvA6LMWkQhWdau4xWBCPSoMR2tyDN5HTomVFFpdBCbub1R3547k",
  "key18": "5ciSfBEr31h46ZwzA5RDLHRB2HyQNxjUfsP1sjjNv2RQfjVo2JCFDkVhPwxusXA1UvWhADppejuZbG1qDuJHWis5",
  "key19": "5NtfqTnyTvqDP6WQ6Uzb7Y2QUMSQturvzrUMCqiwHMskqKD2BfdL3YFNjZ6L1BGmgf1cEJqQX6sU1fxvGFQAZf6y",
  "key20": "4K5FTJfCqyW5S8UFUQB4QT48oQfSj1rFw2uJ4n56EDXUcVYuAYuLnoTetd15xAWtFK994hfVov9FMW8ML3aSvecC",
  "key21": "iypCsQkhDETL79g2RJZu8tXotuuXhtQFx89fdpYLWKNBSHhigz5qUBHkGKtXgmFQLB5kFRSYouJe9dHXwiYg5gp",
  "key22": "3HKtZqXx9obtnM5VtFVqmDSV7qvcPeGKmuF8KWT5MhFun7jfxFBsEckuoEFwVQMi6jWXLnPiLUCWJuEyQib6x5Gg",
  "key23": "5UGumiNqcS5y7AmXLXtU23AeJqsK7XD93bPnBcNEd3oJRLviFajLE9nLANH6sJ34psenjLU8e79yhk47gVCx3nB6",
  "key24": "5AqUEZiPvpugQWbpYATfVjxrDbxf6Zq6ZELxt4yJfRvZ8b6Xhgv1VEsdgqfCfTQFzQkezGouZF3huiBQu9jQF2Px",
  "key25": "X61vxxCkQ7jsxfN6vDCjnGK6jvjMPKVN5b4pwZUN2Dsukcm5umT82NvNSv1acqDYy3K5KNNxVUchRTc5m9yk1gq",
  "key26": "26DuW4nLHHnDanTg3vqmk4UgFVtyVUvkA5dsw7RNW7dU1WabnNSoLk5W3ZdCmHXNLxJczLpHapkoB2k116kUHYgB",
  "key27": "4g9WEb7RF4oj1qQiBLQgKPaYhtCN31Shbi8KgPKTNJf8uJ912CVfge27rApJ6d2AqTVEJLRRU66kZozp9qjF4jQ8",
  "key28": "4dVALdeuaLKKW6yufNRSKjeCf4TDxG43AzZz9hs5FSNDe2P6GHnUbE7XKEvDZNfV2zSdF7CZN7zmsUWFGJK22Hzg",
  "key29": "YWP5vSUnKoMs8Gn6CytyV7wsXUYJxQztLBTyCXBuZz6AKyLzSz1CABSaKntRCug1cFY2RTCFkqNWRm6sjuK6gU7"
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
