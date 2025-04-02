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
    "souYyk9D3Y7WmhjxhRo8e7vTn8Zrt77UiVt8tNqxXq94c1UDAtNbGAXhypH5UyBNf6vUMhAhCT6yE24oTX9hRXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvSjKEYuKEd4PNcmkJQTACbqcHyexTrbEiKgYPcKo4JYN2NYkfL82URrQVWP1tRpmFYo4tR7H269e9MPP47Gn1d",
  "key1": "2GXUgek79qqJeRoHrgfC23oXDoBNHTN29baQVp4upP8b5sKiQJ4M8qPzP34CNVnn9fZL2XkVx9tpfqzjLxaZDJk4",
  "key2": "8op8DvdtEFhchNUgixsnrDr3dz85FfunPQRB4Zd7kM2dyuCExveQfwPPyqXWqEyYKqwEbvhpgqH9efE4jxefBuv",
  "key3": "einUEhE4YfkWQ9EyE9ihB4bp2y5PZ3ATy9UbH3hSQbHfwx735EUmaDoJBFVXnuJL7qFb8Vx8yX3a7aCKfhE4VSd",
  "key4": "2QS5h57rWMAWbGJdB6wQYawz4XjgwvW3JzspWH9Mm4PferAKEKinwAv3fSB1kgbwihregvbF3vH2D3JrCUhCKZyH",
  "key5": "mNYTxp6n4Hwb6svDPKRM1bhouZYMbpbuE2aYZLrbsfQw5nXMkwvY6CbL2ap7jz35Z8RGAegNMcvWDW7eR4f8cH8",
  "key6": "4681z8UMerN8mSffeQ7zVD2fwDHz7A5TKV2ErXMutsDgWayNJfJ12VqC4V9LPkkiPip8mKDLRSNK7sN9rSuiufKh",
  "key7": "2pbmkWQYyWTQDAw8QwMvrMVqe2uCzs9aHz2LTvgpT7YZeqjbPppK9KD3apytrepsh4JXdrcL72Ck2S1unkZfPxb6",
  "key8": "5Rd5417y5CELgGAxKNLgFGuD3nhshJrEWRKThuRMwp9bcjbmRVrhgYaf6Jqa9DSWTY4rf4rP4d6Bt1XjYqQ79mka",
  "key9": "4hmDk5EpnEwSY43Yatg6nDe3hgTBk9FvD2Kqk5gsJLfLUEbmZwcfdK6ZvNtMbB2hUbKE6ZSbNqiLGLohv2WLuuUd",
  "key10": "53oSQYv3kMjbpdBGi4jLAG2uie5GEwu2fSGLHy79jHDHsCEVpJLnAYKzYk3BkWcMvPx6LcmK8KNVPApEaU2pU1uV",
  "key11": "3NS7UCR6wLgcRvQaM4vxSuiBHMiRFj8DSJgrWGZsSBVYRwEd9WaFaHa8NKRsMhUzeYtRR4EKupC1rj4v7m8b5k22",
  "key12": "4hFaefZay4pN2898Zwv9uJPhwd9go1qSvHT4PM97M9TxsjSz1MAizRD4ijwV4JkF2nmaiHy7H6Tf1C8w1nTEqTYr",
  "key13": "ZAbiDHQF4tBbwBVh62CGg3fwFAVU5HuoSm8WWTiVaZg92rVqCkYGt1i4ALB2XdgiYGJajHGKZUaGYqw6K6vDGSA",
  "key14": "4Rcjd7f7bDJ8LkjhxpTeJRDSWmESwWrBBbwZYW8J7evR6pFKPycvPLkS1Pg5Q5cp1uPo5xCfJbB9aSYTgfysyqcz",
  "key15": "HKjXYSpC3MH29rBv59f7nezksbNWazoS3Z61xjm2thu5r5tevLAv1pZLZFnDNJtqs2KRZ6ioVQbPggdKrMrGngJ",
  "key16": "42ndNKq4GZKKY5ZZCuZ7D2eSeW7bbJ45Lhyt9MhuPLsGdj3gq22w8HL76sKCyZLRAvSqbQV4C87FRa4mZ4R5ULbc",
  "key17": "yS82B1kydvpK1yGo5seiLL97ntptiLsYcJYgdAR8aUy4N7ZYxzBpQt6QPduvaXcncAd5PC1cPvFt4jw1t1oqJNf",
  "key18": "29CN9PGWuJDmMoNvt4XcxUFdj8qtuc2qQpiCjGNWNStQ2YwxrGDDdrakyfP4TQx2vfd5DRXbbDPJ1NPePDmgFeEx",
  "key19": "z2neK6f4z6eFWHWtnbh5PkhzX9czsLmGfvUkqyynxHaAC1fQTqDd2AiDgQMiYFmqTeKL2FBmDUPYFm7mNScHz36",
  "key20": "4PdLvfZKTyVKNrsZxcMjPeQxSEwhrESbTijrU97SuoJaGP2DeaKzNbjvCuZh4w3JQTjEHqC9NwHUj3WBKv5DjcCW",
  "key21": "2nqV5d9oFBj1EsLneXe93z6PuaQ7YEpK7DPaKpz5Yo1Mwqg1fXXdrcUKLe6B6MvrJeia1SSy9rvYrGEN1GxPz9nE",
  "key22": "3vZdadkPDtXaByu6Lur1VcJyapjTRx3RsXrSPA5HweKEtEhfwxb98VRywZNfbKVUfk5voa2YsSfwHJEaLVrEtxoG",
  "key23": "5XbSvRy6LyrxQkBKHEcA2ADpRNf1piGoH7J8bQ9vUT9QKvdXcPkjRe2AVEBbXNdYGtSRpgDHV5m2dHZrWp7hBbT1",
  "key24": "2QKBZY349MMHsKPmy2jZ4mhF3jVNp1ELwpbhNJnpX1aJ6BMvVAik2HTKY4699aBrt2YCk38CiCYR6U3SPLssPomu",
  "key25": "2bCR1AwQu2CWZ3ZqYznNQ9dMNNjcURpU7H2nRteF5FrZqgG7s4Lt6k1xE6qVep4wAVjH93pcyZDbdwrXX9mhBQPf",
  "key26": "SVXgcWss7BHzUv3atPnAyXk5oxHvwzdSV6L7NpfKni7X71JepcXPCLgwQPH3QY8zKz7WihSmipKuQACiwd9gpKC",
  "key27": "4Ajs81zyc47YSXNmcVNqwNfZRNfiKu4kopuquZ4ZdQscVLp8FC7DxkMd5jo13rTy6YmoYExz8Qv6NMtRANuqck7t",
  "key28": "WTwM7ENGxaGVTqbWekpXPvwMUqJ2qfCureb9vQpaTA7yN4nz9acHYTMmKXVKgJhP5wot2G4kQ9kLiCQBCAgD4A1",
  "key29": "ANzM11PbyqkwaN4CP924T419E5Cva6simQeVKL3N9nuxfYjeEBcJbUuSg7u9GSYKQ6benXjMoVav5PHxKS48cmX",
  "key30": "6F4jnb4rWWec71QHpRBWa5xTPuNiEYF6BfobbMtjV9YPP3WEm26bXz82HwWHP86qKjUWDMsgiLNLnWzE9E77nFe",
  "key31": "2zmBvzckoVPiSvDFVmcpvsGVp2WdVDTkqD6kACHyoHdwtFKF7KMPrij5k7bA8hih1vyRmHCAb1Y3LrDUriJSRKxU",
  "key32": "4cJZRbkyLx3KXNAMKsjMkP8X7KMNsv1hKnNke1sG6PmrKLXdyNyFAzmJ6omfaSrraxAJ7NjhgpkVNPbK9se8B16q",
  "key33": "hrhgtRBmpzGRNU8FKUdrBGkFwQM7mxuqLLTQWKVZiTxheuWtyiqvSdzLQizQhjL9Vxmhd1BR7qStQz3Lra9u3uc"
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
