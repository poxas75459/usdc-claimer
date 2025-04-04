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
    "5YQBw54C8mYacCjgLV9SXLCLq9knXC769cXgqJUy6ZoVvU5tmERfrogb88oSE6wvR2RH6aSyouHCUdgPdEKXjJ7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LedyW7AS9fc7ivxRQNfEdA1ydRWNb52JEyt5nwRcAhTgr6FUvXnzCxajnsFPGPQGEa6kot9XHY7fqBnDkcnMUXC",
  "key1": "5S33mikVEWZyJN3aAR7nqsXL56RYWLGdqsrQ9boHLNoV4rNPLdEcbWZuhkBhmh3q3JSCSFTikDGxi4EsKjcqcAZo",
  "key2": "2PzAmeMNKwyLygdCsERLTGj6UpJkLrecKsngiGkTMKuQEbZzP5fhzi84JcNCtG34CrLgq9bHXwYdSHLCmRPdoxfY",
  "key3": "5Ng2F4PDdG3Aa8NA4t37kf4mTQPXbd9fCGwhnMMg2VGujUoHfFjPLhE6UrEPHEEFJU1gLbGLThXNB1gZuT8CHWYf",
  "key4": "3WQMK5ewcktWfwcjUe9sqeig91RYEEmobPBB13UFCwAHEViSiKVNGXKQK8eE7eUTkwH94rP5ANPommzgy7no1JrL",
  "key5": "4azPyjTT4dGUirPhvPcrTmXVbyv7LxAgK5V7yNN4HqvvvhfcffYu4zJuq1VTtm3DkDqsmj4TAHCxXuL13sn17vBm",
  "key6": "3Fo3Cuj9Eobq26sFrWYycvwzo85DF74KdDDDLahk3sqYwgwo5ME4uXPz3Zqd8WxjTmxeDpy46baqqYSztgx1S4oy",
  "key7": "3NXpesoAVH7TW7oGJgxQhCHH9tFeZZ3V4abQL7TYQpuGPvS4WqpM9jn2JYCZfaYRHCov3Yyi6neoYfgdoYDrNKDy",
  "key8": "28nJRq3bzMCbgFCi1D46nq2ETRcJKu5aRwAc7SbpAPrWads1UdKVbpt3PgKpDyGoW8os19yBUyGjEWrX978unSw7",
  "key9": "5MCnpGiGpwjuek154xrT5W7rYJueb6ae98pxrctDepHjn1MXyG4RdTsbF9qBzqcYHtmkWGP3NaXffNAypMwi3v2J",
  "key10": "3zEaqvNSemiVfthhVAmLjo696ck2g5qjxJiXyBPh1trarnuKch1aPTuKN26vMSzdj8JTPUTBMPZQRnCNevyVFFSf",
  "key11": "3cjTJuA3x6zKekXTNHPgTpM1SiBYigG2pPf27Lxedvqmk8C8uCQn8w8hire4RH9gbSiqVtCzAiWWZ991g6cVVpbj",
  "key12": "4BsbKMVAxYDa7grXXUZkrqezGXWVBGVgGnsNEP1cCewxWwAMAk5My24M64SFkVANBfsKcqvUKaqZ29LwZao8dMqS",
  "key13": "5Sr3qyReT2v3sDXUcQKMVcuHXeLVWHjA2nejzGsrHHx9yP4TfRb1DC6qYoYEXdxLaQu1cd69gnvLwhNF4iu49VVR",
  "key14": "5jtzadhW9gR24a6eRUA8nF8kgBxbykvhBRz1VmZkYrTzCY9Ksm7xjZSx57KutCLp7hpHDX1WxeRU6pTavMWtdJpk",
  "key15": "5NESvEziBBEm4aVXTinjbRPB6E3NU5W6EZnFDUvfBoQ4bAmwos8oXZNpKxjBNAXcUPvTHXSQ7KggYyvhytio8ACn",
  "key16": "27jcbuKGHNHoHwVZPZDmeo2uW6fbEN7w6n5AUSCxxRaH41PtQUHqmH6hhvTvo4cRoRHF4M83T4AwcPtDWKKHc6jm",
  "key17": "MrFGpNN6kUV7EPEouPqLp7b1K1dq5mgvBAiRo6kDoNmZvRBdZRPxRs96DxC12XTiuNUNwWhaCZDY61xm2XYvmqf",
  "key18": "G7Pgjk8YTKvn9gGoEwvutDZ1jtee63hzdsoj3ZhQs9jGzRzjGDPHwh4j7sKsjX8Pgfs7kpZMJgzNN4rv4ynQCdL",
  "key19": "4W55Pa6um6AVoP948KEURTDY54hWg2rptfyW7EDHQJFvqDRnxuvhWudeERiJA37U1vzuv2PsXdJ5m4PNGWDmaSGn",
  "key20": "4F7Lnwk7kQJrq1PAKRxNcF2RdgAsutyKPvm4MAhTXt71a8FeXYB3kQ8E5Va3kAiHdZ6BFwDeuEDyLTutZQ8GqAXU",
  "key21": "42LVE5vYgfTFawepgSExpAK6YWVrSn7ZXhVjsfUn1f7t5XYbSAe1kz1sW3nY4xxGpVq3oAvg1Lt7h5koy9wJ8FEe",
  "key22": "63vHRHHricNaUjrZ8uWiDPCHCDn782Kh9HtSHrAcMepr21is6Ug2tuZ11RXCPayGJ76Kyi5nSHKogED5iWAxRLKB",
  "key23": "2dvaTxhMs3L5cDJuRwpi5vYR5fKNzN8LDnZy7CkxDFb8FraypMuzRxM2mVEVUD1B6Fwnatgad2Kdwd5ZXELfpbnb",
  "key24": "4AZSvFZUftdLCWtgccL3rNWyainMuN3qsnuv8Rwj9UobzB6ceZepcyu5rdvS2LS36wMGeiUmm7tbqsTVSL6HDPhb",
  "key25": "4Eip2rCxYsURyqJ5isBQ4VvdHN87i4MddhNM29t6CtoBTNPgJuDzDab7gugVK3cck6tz3ahTAgeeKTKL3ru6jTN8",
  "key26": "3RSQHXddDgY8ij7aqVxAzXcuABxsKbo6d2QMYa2o4ZPSwoQaagsDjNaZGenkEBc2wXu3HEk5ki9Aa5amBC6NHQY2",
  "key27": "2t39cETeHFfAfbNoSZtAUvm7jdAkjwJ9matev6bMjT758JHYctzGA5aM5Nx1V69YtHYetYT9YL4qMG6cacHBb38v",
  "key28": "3KtJjPLcK8zPEixbfZUmMBMrEQgyuxKcsuNFvyZkJgBsaNKwV6WYeQHJUD9tDUtEmuA9J9mQWdS5m1BGRLfjv3CU",
  "key29": "6yiSYWvCJ11CFBTyvbkZ7QYVpiDjkC1zxsHun5H3nwTt4f1tapfm2hAGiUKbZ8dDD1Gf3titcESA83nB4QFVgrv",
  "key30": "AW6WY3gQKof7CPmXYLmcJtGkEDeiH8iayH1HTijyCP3UkheMec3unY5LygWHQgkJhKrBsv2mQaeoMSD3Spoftxr",
  "key31": "2jj9igSFGDcmn4ZP697tkoDrdcPNDz3wEXrawMZJDDjw6mrSUAgRSQfpQaMtnous1QUgNePcKpS8FdS6nGvpadTH",
  "key32": "425KjJfaao7if5Ag1YbHJd3m2Y3PjQPC8VbVJPoGByCcdHGmBQcJ5y2DPEc721BnPs6gyk3UXkt3gSx7K3S4DU2Z",
  "key33": "4CgYE4nk2pr18vPLkuRcaFTG48YFJKfhZ7YmLT7XfbkikC5fo8Jq4sjbJBMRuv6eMdUAjf2ixNEZBE4RXypxpoyZ",
  "key34": "8jEx9m2jG4Y6z7PJW3phGUFb8asGUVS4smBtrrm7qYnGGJUhMTy5YQhr28BvjZFsXuot7fPw3arBDx8CgqQbjGS",
  "key35": "5QoF7kJpWAm7Vxq92ghit3otD1vLnKQhsyXQwwGHpL9nH89YEtiPkUDMDkyeshJqgjkvLsZhqoYwaf7paXsCx5XB",
  "key36": "25RVqo97hjxWjCkEQkYovKL9DoyUc9FQuqZ2G2Ewi1GpqdRZwoE8NHyDgNDj95vyJpM5obSYu8THceoFSKd1MGf7",
  "key37": "3mQzbbU7DgjXHxbTSMGCHK6juioRYCj91izetArr4gAJpyaMCCkdtr9MZHZqzwXfKJHWiUCkkpeG24LM8QqwKFUx",
  "key38": "56RyREUYrAoPK6zCQvrM3NdRWAGJRaKnMg8yLrv4XZVwUoHdu3RJ5eM2umvmfdtG3DaoHe8YAwHqSQaq5n2sazu1",
  "key39": "4mXdpWZiZyhK88v8zonoPcW8rtRkUxUkR7QRbmEbtE4EsC8tEY2hicLheaxPMzJB4n1V5LbLwTmKDhQH1H6NVsmW",
  "key40": "SRyWYuHdfzgBQNY4eF548Q4a8VfD3sp1tG5NKsWEoKBLATpmdThMgVevpRd5JfcTciF1pmeKrwvekAdVHGXu4xA",
  "key41": "3563XwgUoheKGsbMvRzZMta2aGLTR4oCb1kvkDeZgEwCSSbpSkEMe7ttUtHMjxvJ4E9eCJbdSym8DqPMkmwEavRk"
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
