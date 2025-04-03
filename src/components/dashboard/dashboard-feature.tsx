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
    "4HoptZzAdpStu8bxTY43sq4dP5AFBbWQNXaaa1MKSQ9ybL7vTtLxWodidwQjqGruQBrX2HHexsVQbad8muMurKGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCt9syTfGQjJmU8nvf5ptZqs5Hg5EgZTNJruMDt1oP5VbwJi9EAHGLRo8U1NWYtgACTJk1scLKBJkJWVM8x5owq",
  "key1": "3hE1of51a7cGSURhyreEpLnvf8wckApcmkXi7GAWk8bAUjv7g6EkvW85QppqftjTms2Ta2iR7dj86dC6JvKnruRA",
  "key2": "h4MTeiZ5aczXWA2ixmr95W2Sst1FDeCebBJKHjoPExFya4mbQLgsCnZzCRXuvB9V1GuzQ2bDBaBA7fFjk3Njn7R",
  "key3": "2NcELVbbUPc1W7vUPB3UzrfmTRbf45QWNZCZcTeqUusGU4bw1jsNzzpA3Ba5XZiShahZHWSvJFjzGcr1F8FrSVnF",
  "key4": "B42pKytpZV34DJXNeHJjCDERufH2szi8VWktB7nEe8V6Wg39nJ1QcJKd9dPRrmYyrrjfimu16nhk3HBZ8apeCCL",
  "key5": "4yqX4Apxzhw8wDBKH2KQxmfmAYvMfcRVFwvRbde7tmhrCC7ChszB3Y3uEqHXU44o4ewFE8yoW43tFUmc2N67z3tc",
  "key6": "dmwCWq7Y7ApygERbw5DmiG8jHFutmCzpygP9LfdRHhzmCnXnU7pdDHZmj4PvG3BnKD93r6JinbJoKMCX1amQAyX",
  "key7": "3J1HNYg1JQdbHWy8q86GAKvb3mnmsmtSR3kHs5ekG2UsRU34doDdfQXE4g3ooPE5b3zYuJjFKFZSX2wXwzD4wwKT",
  "key8": "3KiNgHxgm53TtYn7QBYs4kfG13T2mGH96aPg2GXPtUVPHdM6LRWjp7sEiospN1Dz427AWJxFWNCnfCqDepKdRaCW",
  "key9": "FAMKUdtGKwgANPDXQDv4r6da1VuWMKcwfmFYpUHzanAiHc9Fx4HbR183oJ8s9zLsS7fAKpjPKJKGC9hsfPX3qQb",
  "key10": "3rmtdCQo76mMBqzyKkn35SruoYXzeoQb8HfPwDXGoAsiMfmYuGdG1aj7GqEdYAY3Z8cUyKcqVxG11agrsgvoBZuP",
  "key11": "4jgjVBzW1EzBVy7mXj1BHVnirJKcWiyDwA8pCiQE3TPeSEU6xC82JRw1Za1bDTSksg3bdXfDsWkoYQpE72aKja2y",
  "key12": "48VaAwVBobpFDMHb1NdJ15ehLbrjfxZoU3QuTd57eHAgEu5h7TBxmSch3tZe7iVcrnUbt9zwuPYKh6ezFUsj8XVT",
  "key13": "4YPCdmXesZ6dc5wTsYb8TquU21qKjfXssWNjGbSEhm58QfM5Zm5odTjdjDQaPmjX1zqVi4RPZDfmpX7EqDQFRYQL",
  "key14": "528q5nhvUP5aKctWQwmTVdzY2SYhMD14Fc9wRqPp3iCAQj6yvKnRfzyg3GJ9vLK7jy4j4gZ6juFMGwV4q83LVrdK",
  "key15": "pJouKywDfaauFVWAKjSNsWo3ok5hfeXMpoJFFjmth5oxZVxcd1boR5mRJ6r2a2AP4AQCdd1ChW2k94nfp6sC5pc",
  "key16": "5ARnNBWiJhYarXbmaZdmcChLXeabmDMcCet92fWxnx7gcdN7NXoH8Cw6Svq5nMc38LL9YAtfqaYuNMphYJ5ojZvP",
  "key17": "1d9rXBktgpwLMEAtth8CTRLkNmxeRZWLBH7nuRQbJoD3DUUJZ6KuYqLuWzyRRd2NrZZy6933hFT2a3uz4GBqUft",
  "key18": "A4oKvDRV3q8ovgjTKBJd2onHb5ik86WZzmXRftkY8M9tipQayS2SbC1bLE2DyRWCQDBxwC2u5WVY4Sdu2JY62uc",
  "key19": "4faFyCgoR54vZRfusSYTSciEW2bMwVJPKoacaBt8Eq3b4T5C5Vcyr9k4hXZ8QNe1eu1SN7a9uZWJ24MuDqdw7Jef",
  "key20": "3mgFDZ5y7upXUTvnvbTf2sqr8hGro18uYJqELZZj4uknqr9x7TrbfsAMUhMQuoCHTKRdBHq2Rv5vUkBzZJR6Qiq8",
  "key21": "4Wcwp2m6niygfqBHu4VqfaKKu43NqEWoQaZqNzEVz1WTJa7yo9VpShLsiUzkRhAAdmnNAFmReJmW7XdGLWvKG1Hh",
  "key22": "5NaV8XhzHHVXdWyw7LZxkMnERvvPFZVjvBsZ7tC3JFmAKKKKH12x68bnSq9w2hVKp8LPiZZUd6hZoTweJ9p3wHkr",
  "key23": "4Dh1Kz8taCWA7vC6Gre6zaQoupxjqkWeaNDBqNGt2joPjyG7JFe7MQ6D25hMDTyMGbGGjD5HUGfYfVVqBXF8grFw",
  "key24": "BDzyJFdn72TJq3LNjsu1hUNN86jJ5XJVoi1J9kCCbpg4qhuMv6UMDn9QC6XBJyZgJopoE1pXFYLyL2Z7pTcTmmb",
  "key25": "5k1mpVeeSwDQHsgKBWa5qWT4ffa3H6eefAVkMXG4jgDXT2a2k3pnjaQT2FdbZfHaRbJP58RpH3rsecug3xsFZHQa",
  "key26": "54WWDVGuEYNRE5XX8cy9M1BCsRs5qXv5sbiBVNHAzNH6e1LrdXjwNJeDmwakaziP68AnRbqkkAYdovwVwfrttDEW",
  "key27": "31YdEbPqqJUvRJZbVyxUY1y2jKabETUSmutxrs6FLLAqst7NJvhekgN3YZCka9FdcVKAUbpQAsxBaXM4tHm2Xsmp",
  "key28": "R5rxhjWyQUhH5JjoSHa6A59uqcULeRJxk2tevjVK41mZDY3NNQrZGynMACu6evBwmkDAYQ5eRHr3gj9jPxFA2hW",
  "key29": "5xpGWbTU1t5oH9uxaJU1S2MgP6yLyzYS3iKJiQHZBLvnk1op9DmQLwEKXwcVfeN8Lscz6VDdks6psByLXANrRvEa",
  "key30": "4jvsEhHNH6iphhwL7eQgHf7j3YPhoSAWDLuoSqbngTDqjWUKgQ3sXUFbi58PZRzbuhfnwsRGc1hQ6BhmYpXtrNJv",
  "key31": "nx4SaR5NF6AJ73KwXuDiKq6zb2ePXoc8jDf3XRsUiYDoJnsnhwi7BK5a5nBQfxa3uHMTEgiu48XPWDSTbqNez2J",
  "key32": "5qqhJrHGSTAG1x9UQWiBfbsaBVCsgNSiYkZTaGcboEgHXsAYNi2Y25dwnL6kdDYmT3sxnvLS8D5CcTxNmYGzvcBq",
  "key33": "2PiFx5AH8uACvJQeMd3MsNrREQnMJquvr43kNCwf5jECvcixu7JSUYRf9G69kRPUP15yBH8nLEGSdHAJ31UzfGRh",
  "key34": "2XCnzU2KTRZh8TcQGFtykRQVwo1SR6oEgWUtMMfiyM4NxrhmJYA6bivoGLnGDq419XmgQv4NHtenb8guhxgMAjzd",
  "key35": "2w2k9uVDkdN8XhTv84dr1maq4rzEQjz4Bceh16tz4t9m5DprdwmS4tt92PzwCjsCQQa7bE2rUrUuUvYzQEXH681x",
  "key36": "5Rajp42BSv92wQxbVN43FY2TefmpR8hcrBtcLXdfwXbBWatyPdPVX5CcHfiedz1zZHQsBSyM6TDfGXPbBnLLmser",
  "key37": "2VqjBBBTaABxsXf95M1Ci73B9gYTPV4J5pxQCDmEdQ5puzWffh6wwYGeF88a7HoEBNuEDKJ2rK7ZiQ8Y8kuhYDtq",
  "key38": "3s9J8pzvkFVWazwbczjqBPyS2YmUSofWveHKMt6F2p8DF95zv9Kv6bQ1kthRgEBjZGm6insMPBaig8DRr9UMTrG8",
  "key39": "2BJchXJdsoEhkRu7WsfD3raWzacGpiHF9cpfkYKrXHe5mMmHxygPN7uXwMEX2ef1svpdu9WpmP9ESCUic8a3ys6c"
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
