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
    "4uDZUZ3wtr3Ut1CrecYvXx95z1fTxdZ4JsXkEpRtNBNQGf6V6kFqnzd5j5MtAZ5Y3wsDtsMJE9JgmNY6vjFEw56T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPdmYHCTkgzc9Hkgubbttod6RzE9nPR5jKdvsXRPQEPM7gjqktaXMxk5UCUyM4psvh9X5zy4Ltfwhx8JnYzobZZ",
  "key1": "2VJmHKJMXNHAVcgBK4yXhSE6g4uhBPtE1ssGXLPP2rzCDjPLG2GhJhzei8WeJegTQhgXNfbRvESpYL8eSVsHacyJ",
  "key2": "4NaMXpJdvDok7BKycEbibCbmTgQ4L5brydego6ZNfJTe2S5yWQFck9L5q7DnKbBAVZkAM56WrDCbkqQpcR7XPBWT",
  "key3": "5qXE5P3Go3BUck3xoemCKGLHWjJk85z85tuoQHgm9ZYKvVfXVgKjUz6bqE5W99xZqtrS7kTUPL4un2DFotoZakW7",
  "key4": "5mrv3kcwStxmpsKsJGticutjiX1aov417F1GdTzDYo9twRmHdoFFdViyMkU5qb2ZX8PZA35jd8gijytZ7ri9wU7y",
  "key5": "5tGzqecBC1JPzpcARiEJabZ5QTWajyAKs6jyodjUuwsjueVPGKVAewyaVPqBx4Xh6GZz9uSjCYAbLHmJzEdQRC4z",
  "key6": "3CfVJbRHCiLMeCYprRza7211pBtBfKuSnV2EPHYL78xh3phbnUdp2gtobARbSbESq2MK1swnQRSXEEMRoT3FCb12",
  "key7": "5NZaECW2PfvKQuL1uEyLVv4VjsUvFoPJVcy1knMYKNvLvKbaN41Ng3o8fouhRMFhs7vUrdP1tUctG6oUfkKXDBVw",
  "key8": "2ABaLXGkhCLc82qPafkWrfwNe2JBXDZ8uGzFZxsYCwdy4cwktYdoHuogyNH7ikjx59EqwgfiSn6N7doumhtA31Fj",
  "key9": "d42L5fjGL9BYRLRwac9kiHMRm2NvRtM6ZnUH1BLcGjxSPKcUV6RqAMk4Cme8rDvYuci48dEqdwZdon8CYuUT9sf",
  "key10": "2fJkY13xqqePd5gd7w2EjUXnMNkEFYM6akABCo8hyVAEmpQyFw514oaPQn1drjqMFgimuAXCi6YrzjSqigPx9Sa6",
  "key11": "Sf2hyiVWwYXXLRKscP1rxqgtUsPhGMsMQGB2pseUwNuMQHC1EjXMdcyEXxZgT2rMzMaHBWJDBLXzbgKQszzhSuA",
  "key12": "5yt2FadGMeqXAxgoaCWzQLTn2crfdcays3EDdCsdW21kMdeqKNrvQJXBf6aoNkeALeedN4oRM1fNry99Le76QnSD",
  "key13": "4KZBdfg4etSn5oTCUfmxiamUsy8fPhztFThKzZjpUS2jnDjsxUtdTv68kwKHdeVa3U4VxBFDkCCbMNhTve23vu97",
  "key14": "5CmrQvpDVr5juKcuuVsrhvNNjUP1V4x3qoevk5ysd7yyEfbrYddTUx2S6f8ju8UeTTP3gQj3EwHQskHzD59AEJHe",
  "key15": "4LBoB8dW8UjfgJsNJh6W3c15YAHqcevGBM38pFdmatHdR2FriDmt1B7dg7gQEuMwk3odr5h8FKDxyrwuYQ7Wxnad",
  "key16": "S4LQa8qydrPszRbuMY1a1ydK9oZeVDjhw4GdUUjUshZGXjgY26a19pJpCbfKwAMipV2F9CvtzkWaSNNxCzNyU3p",
  "key17": "3VZFNSrdVbrXdbnMqfQmSYGLvXbjig8He9vHUcT8pqV6p8vpdw1enzssr4P6BFuR7srXVB7Ffxjo8YXGGod2JbPh",
  "key18": "4VeTzWnA8Re8zkrt3ZPvRNcLcrdc2v4UDcmVQR9Jvd1GE5gjHzxt28pjAnhE7frDrFGJ7gv7FJ4psaExDsViLjZD",
  "key19": "4E43BrQkR3XLjCNwSWkDyYh1GGsAkETxhdxjo3CwW5m78HkJCqGgbebUkfSiPX6gb6BpHy2yBNg6D8TZarg8gjjb",
  "key20": "4Pc5F7ynCTw7h12sj4JCUkZnzBCH52Ash2t2z47R1AEQJm3HzowgzdKVHBYpSQLH2uudN2KjWavuF72CckkcMaGZ",
  "key21": "2AH4qwNdAM8vT9ing68UktDkjGNuDGAW4W7CK9CZS6QfDKuGbvaHSTNd6WrAh3WMYetx2BMC9PebqtsmuBi1kFxV",
  "key22": "4w3cidTwyk2vbM1MeuUt7cDhtb7zTwWfKA5r5X4hkNnArW2yrmrw5tYQHd8iNemJdZvB5tPWUTV5qKnbUiy6aso2",
  "key23": "Zbph6QZuadmVNbkk3YAyZq3FBazguC57dvyPs81GX84AfYNfkxwP6hvMAGTmEgVq188v5p9j3LVrBsgKHkyWyXe",
  "key24": "5drzLJiVx88qfs8XZkik6QKAKrvHaWyj7KDdQy1KWHs5Jvyp27N4RKbbUkbdNLihBBMcQbyVzVgRxmbdUY8uAGqU",
  "key25": "2mqbSyv12U2DUc4oAvWzzqTP2ikdfi6dfzc1MjPkPwSfwB7rwALc62Kc7JFPGj8tgude4GURRmbwdcPx8PrAcZ1c",
  "key26": "2Ws276QA3CmhUuLvoeoGPRtqvzAXX6rMoVJmtcJSWq3DYiHWtk5DAjb5tuqeXXhWQprXs8oMeHTNnY83fqVaip7h",
  "key27": "Q4tmaSK2sBV1jvAiqMQFzMR9BXkrqZ4dcTFxa9Y17i1Tg4UCXDmK5kTa3EFGNuDUZCV162aquvXDeq7Zn9cGE9s",
  "key28": "2jtgC4NJhQbzeNyzBA8F5Q8JL3gcq7Um46tEaWcdrttUNBr7UU6jmQHmxapZw9XLpgBBYa7BPh4HjH3gTkmAgEaa",
  "key29": "4JR4bWE8HLD62ndru3vqLWf5GNf7TB7SmJYF18uVEc53ZmjkxUGZxctNHjKKsTfBPJvNgWhHnRBdprB4L1RxecKS",
  "key30": "33HhiBkSxFrZCYt9ufsnueSF6tBLeQzKe84mUSEMxNRXtbYLCDE7fu5EmvZepnDMAQBuofjkmsDmwoDNicNfxpXE",
  "key31": "58CHZKLgU2gXQCjB3zT3tf3JMxb8keDhq8dQfAzNZeEzyCzX7NKMXKQPLhfU61VLKQedkADdhoSpKkACmYFWCg3Q",
  "key32": "45m6Dv4q4ZTK6tJ7JQesLALxCWdGGNPrvXgpJyFuj8yYMbdvZnVT3Ad7FrEP33o5SH6mRDvdhJB2EerMcxQnavif",
  "key33": "5P7xhsK6PrSpA5hFHp4XsLbY5uXj9fcmdcj6urjAh8LRQzqy3K2WnDCZRTzgGpMWy3SjbfN75UtmwU5RoZB4q7W5",
  "key34": "3bgNeN4v7wf3p6eu8espUWexrjLsthPUJRQcNvHas8FWBSc25VHT39J8qWbFvVRftwUGjRcM1iGduzhyyFzFbwcb",
  "key35": "2oCsR3TLWid9Bd5K7oB4v51qXKeaBFzYg79qS9Ay8GMA3cHme8k3e9p1Scfvjskv8Piq8CDqZfxzyvt8XxYR97nL",
  "key36": "4nR3jdxTSo6ucwBscweu9xxStL5ei66prPXQmimhzrWYdo18BGZhqgZnckukpanhY3DrKY22Hauq7V2MjGXqTAYV",
  "key37": "5CmECNS9Huy1R8Xc1gVA8guLyrQZgSBVwxg3BjHZK8e96PSh9PC4h4Xzj4Y5tJTaCbc7y94k5mMN8K3GUNjmjSy4",
  "key38": "3WV5YyWNGyxvVWUWpm9Af3EMnzzuQnheBAhA3nMUEB7EGKSoroSFLTCdVxwYzq8864Y25D3GVcVvcCwNLLWf1Rag",
  "key39": "8EkTy8Ay9XW3cbcRProv3Ry3qKkKeG64WtN7uMaxAM9Ye9VwLCuPnd9HD7pp7JderExMC7Dv72nBZhBY1uKeZVc",
  "key40": "41sQ8Te7imdcmCjVckdTKj2FRddCL5tKQoayb3P4mRmCAZ8qowQJC865LsxS2utdEcKyUPHrvHRW41Pc5cTTMetn",
  "key41": "4EoFg4Eb9houm6LAdG6ArSFMJzSkuCuD653gfMvo4CG6ozu6dDYjieVgwofuqtvjHGS5Zv85knoWgbzjiB5T8yjg",
  "key42": "4a83pyiSfVjAdDVw8eYzMPsfq6YSQXwRTtk3pFZADstMs6RV3ZqLLkHXv92cUbtn3ciumGiULGq4nFuMEo11cy7q",
  "key43": "2KPUt2EKZtSVSXWtRvnDwKdv8bdhd7xPNKnVSHCzrDLLZneK2s56SXU9FY5TxpoNddR2PjZVdCa2cvpcCLwhVkPu",
  "key44": "2XRWFBdU4XUegUEs5PWvXsHyMxz5FCVo9JXrkTpUBDYdeRkM2BfkTM5RLh65DvWZU7mAAFYtt4Kataxy4TsFzjg1",
  "key45": "3bcUNpEKJ3JXJsRpxGHkoiorN91qFzJmmwM9n2s2SUFWdJc1Qn2QbVCzbyhEc55UjDQiXbBpQEdS69fgUwFshgsk",
  "key46": "4Zb3erVNAu5pfbY8mLfdHgqWPBQyerAUJhqScL53pzygrLCMqQd4cjBh35T5WJdcR6LDc9XjF6CoVa4FDjAkn334",
  "key47": "64YsExbjpzEyz38rjaAtvWB8mz4eJbPqVZwnPKs27jS2CUTNZR8avAnL9Eoq8jkpeKQfNRfHxcmXNQAUGTycwSq3"
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
