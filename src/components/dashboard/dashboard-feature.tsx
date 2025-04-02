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
    "418ttgNSTM2JdoPyzAitDUfiNatF1t7hyNsbBia8hros1Y4A3B7sCU55pHf7y9AeFjHoZ5uvBxZCteYAkSR1fSVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPTD5Zb1cdZ7B2DLx5ibJd9aaozNtQLq657Le4knog5rXKxdyGBv276jYzB3SmErhyJSwB9zL1HHYvvy264nnzc",
  "key1": "4vo32D7xj1HntivWQhbtbQAtTSE36wShMRtVUvfLiECXTMJ8se1eK1bcCwhFiCUisbMBeYFmzMjzhxkWjhP1yekJ",
  "key2": "2e6xEw95U1ZzDtpbBYZeGKvEupTPBTxZ9zwGtwnznaZLdNAdXnk2Sd5XpycPuPv9oDWa9oLu7tiNFPx1AAgSgWhv",
  "key3": "PaZiCmxZx7pktbjWeRvGgkGvT5d6DSgskeEPdHJbq54Kpszaa2qMcWJ9NAYkCESrA4AQQnA8N7Wsf1bWwPaFiFA",
  "key4": "WQBLmwmx5irjy5j5mGoAc397XaBmKRx8LwrvorNtoxPfrhKL7S6AusRwNzGGbDyoQ9GkgqSoeDigpJyrUnaBSVG",
  "key5": "1SmVHazaXW4S2p2b4uxPsPaPZtyuDSnY7bN5D7nX26fSZryZUT9p2rYCWx1xWgeJCmpRWnGvwcgevqbTTxVZhyw",
  "key6": "2AZ65aoMeAxUqh6LP9RsRrwKY3wNQGDmuN6PxCxqpfSmzGmrZTySYDwGkQeLsTMx233u5fwufUNstPzGz7i6CBts",
  "key7": "4KgUoAcGM5snYRVFB37K9bDNdqv8zJgevccV9nESgAdDmAqCqSzsrmAHa9NNuajthZkChbh9q2aGXVKCEfZRqpb6",
  "key8": "4VrLoKDXXKxYRVXULQph1xtn19GCG2VhksXRmTWDkhk3UgUp4XuEak8zEbCqkZbEyRoGzdRgyr81i7UvqvB9Bz7u",
  "key9": "662xFxZ91hgYeHwJSe3gfewbh4qo2y6NR4ByRAWrMJtQWX3h1j9xwvSe8SpgTozxhLfPkr6s1G8o5fJkibq1Qgva",
  "key10": "4WqPuPGtnXpsxTAKEV562o9CeRodiXswynPH8fYcaE4Mf3r9BQsZd8c2xKqJByQPqhfCpLBjXgJy6rcufBaaPQfc",
  "key11": "497vyKM3yh7MweR8bLKoc8cZe8AKnHHAaSKcJBQ5dv2KMNXiQE1b3fhXHmkPXK4Cnf1QB44az6Gf1RJX8yVcKJ8S",
  "key12": "2M7qs2ARGqW8BaCF2RyTHUfKoXvFZwWLWSo8qytY8Um2PeqBXxPGsS3DpyMLqYcXXVj7LzbupdV4W4ThBZdxT7QU",
  "key13": "4z9m8FZQNaD1exphDncEkjG9292LkKt8CyAwBp1RnrV82KwLHoHTrJZ79M1QzR7pEiWdFzJj1n6t4V63yeCJCNjt",
  "key14": "2cmpupYqb9To3vnR4RvgmRpv325U1WDsKfSVjuQQ1tYZVzTX2aFBRHV53p7obro41CYEk3H2n6XyGBPs9WuqTeMR",
  "key15": "4B3jzk79SuquHTbYXGwTXcugYqf2GcCMSXDtLN2o2RXFQgFrDiUVotXXxGV8KwDwW39bFVSG8861AGtLqHcgLiSG",
  "key16": "4zjLJv9FpGBHPzxZEBZBRzuC3wvNo8ZYZU5cstfViN547q4eQpdC42iDzxrXr5YvqL9hjTspJZUYEeTtnHMUqZeH",
  "key17": "cq1WNc7rifsSkJKWmUEWYZEnJTYkBhPyoQQ1XC2oogBTedpcA7Pb4Y1pAV4Ny23S9UjjHJm2rZYfgd6sfEufJj7",
  "key18": "5taR1zYSQN3q5c1QKmxSQthLLvyp1gmxbc9MxQYV3ACTXXyuvVmkrpowetJ2MQnMA1AC7zKvmVzE3eLKYXNYXUos",
  "key19": "2aZ2kqDKkHHiUP1AbLY6PyXagvT2DavsEyKdGPajtcUxYeFjYYFUgqDoULkw1Nq8WQaJ9VnPjGgD5joSrGvWfmdd",
  "key20": "4UZwySREPg8gnCjwnZ6PWDT7qksJkgWPrDsvE4UqC36Sq8wCPKBkp2B57CU3JbDabP9R8rRdVyn9z3jcP5o6ZJFw",
  "key21": "iaYqVFwnwt7wcrP6u3DhHSvBUyDrvSqiZnzEj8PxQYDzVvpMc8zPH24CSQnUogMTHxdiyMZ6pmo7EzsfpXXVTt8",
  "key22": "4QHcqmTmennEc3g622YYhkRWw1Fhp6BbmVYtGUCUhjwa2tnbH1vV8FU69pik4BAPrZKos4mSqEN8DSvNSpmy76o5",
  "key23": "2KNtqLfqKuooxLB7GoHPut1aTD9S21RpPpoLg7zvLuQrfzeVejub4kkNz2tkyhp5HiQo4b2MR288kL1zaBrohHjN",
  "key24": "2TS91Wbc6x4TktrBnVsDyuqcfGqD2WxCkA8JE8dm4xWT1j37z8ckXBGD1xcHon5bW4mKdX2XeNeoVjBM6hT3PFP2",
  "key25": "4jCqJChkbP3NwNdY2yxWgrX7mXa84eYqMCbCkyPTBHkEVKsxdFHU7PLLEsakzgWHLkFWh2p2urPp83f2dd2Yvywu",
  "key26": "5jLsyPDEXUsV9w3JMNTnvZsxAPwyr76xgxsqjsgekGHR98NQbNGQoActkBBmHVWD1djGSQYtCwkwRWzQwJjUiLeW",
  "key27": "CNYexcV8QeP8MuNvTi62LGcibgtZMMfm1qLTqxbM1ZCiN515NAqFoCb3r9axxQcc9MRiJeCKcfmie6t9bkGBR5g",
  "key28": "RaRNB6wVknbKuWKQ4Swuupj7Vwpr6ttcJ5NFjWpNKszoCze2bqB1tqCxjZQykarW7zLbyjkt5ZDi13YjerExxBd",
  "key29": "28Qq5b227iuxC2ky8AZfpFYNSttoRGJ595GYP4UQfFfNBGycbni7srNBKEqUy3Kq7TDR26f4kM4NnHgG15B4fjXR",
  "key30": "3foktSXVv6aSphBrU8uTMs5UwE2Mexhy8MQL6fBzwrLR2UsmaAvgV4TiDMmGC37Wnmc5o522AsBz9QpnXQozCBfm",
  "key31": "64g8yqhxXrwNGYdU7QLDcrBbXMwYEpuk6PTSw6XTHY4WKJVY5twTmVncrAX12tZ1rDHWwAbszZVgsVwu77Kgd3M8",
  "key32": "42fkyYGijJfgujhtideGLmTTM2c14KT1hjj4gaQqx5PQx9KsiRB3YAEX5XidbNNBbKGc1VLYVPmppyJDpZfLzvY7",
  "key33": "4dcYuJJbnMJhcYXJ2TpQ6gd5W7Mt1Fw15KK29zumfUxMqWhaBwGFqG3BVxsy9F1pPYLc3TPuUvH5tngW7r8tvbYq"
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
