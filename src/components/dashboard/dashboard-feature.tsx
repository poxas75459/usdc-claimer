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
    "4ko1pEdqAyYynPsJYGZxT5NMj2pfbGUGuHLaYRC5u9cZqG16ttN9ugHzQ2bjfbenVaGEt5ThnyGuXp3mQQPXbSWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqq1sQmVkbpeRmxkrjj5X2pdCFvSF9sSdfbBkXdQnQd3UGpPgp7XNzaCTVpmF9U9ZPnkTPz1Vnd7PTAcC2aFfqN",
  "key1": "4pRjiP3vWG25QWJguhL155e3EPiDAooSHCXFUFauzGXcNNb6sdjpzjQDcVKCi4twiUrVP2EGPzFiTBCUvALGhRHZ",
  "key2": "4P4f6s5RgWSwynNW1zATQ36VNqs9aKwmENDzF1XgT4bECGGJp7LmjP7pj2AorYUBtPgvXNWrwSKM7S2RMUxX4aea",
  "key3": "2NS3fDfUKvBs4767bPCig6719MBTACi8AKB7EcZTp2qhtT7hknBibrocwergN9v7g96hpvTNJkSVYs1cJ1Wb5kVF",
  "key4": "2SKkUTnShFrwm9srXJ3mMpZRtacRP8a3U4tQi1nmobEAW73A573ATC3b3ULBjGndVmtjqRvvRFW5zh5FfWHEHrEW",
  "key5": "3TMW64E2Rsk8GcB8KfMqskEH1Qfs1ij24pv36N3WHdutGAfRz1QcLwM2iVz66LHLoDieEo8cQJ6Q6ugvCd4MAsNF",
  "key6": "3e4jt1ky6JkfNE21uzT3zqNH1NEMiMGaTy9TdDGsCcjBk76AfA7AHV6Ug78jerbhzcD43PRGue4w5mpphQ7hJNkX",
  "key7": "48WNbiJMjpruGXojGykvtuVYFUDZnzuZW1A4trA2vnTWyb78Dhx7frvPUTs3ZN7n9wHkzAqwosKem7z8q14TqBbi",
  "key8": "2jJjdG7jLjf1AevB4gL59RKmGupAhSQPhRRD92vb8pgBPbCjJvGdTvSCzHJsUWNnbuyNMW1c2eDMSTTLYRffGMSt",
  "key9": "5nJo2EwjYJt8Tr2wbnrXrnaTN8DvNiwGfKefjGdZxC7pKuRwpzYy2VQNHgdjHqtAGsW3GFmyFGrobspHH7z6bQ1t",
  "key10": "G7MResKAsQNkh6y8BtuqiBPLvr9DRYZ4HbT8x5ZyGkwzfKh238chwzJduESgzjsobKtq1V28xU8koV11xS57Wzv",
  "key11": "3VNyjpNW2K8fTuvi2LUL2f7tksVnJnPtL8kZQ3jDCyt8KKRk28RoPFyn8vwaaVE22k9cCoLUGtaKKBYH43d79wXY",
  "key12": "3Jjk8Kdv2R3VcaivZ6ErguvstPutTaJq772NHEXibC4Xrv1ni2pWeQ5gi1drjupRC5HS154n5c4RNeiz9P8eatqn",
  "key13": "wEr7CEhqtFtRpmjrZQdsHeq5Rn1TopsL3cphHuYeiRXw7NUBbCaEEE9fwRV92YiB2Y2FFJYRSp2qXTohpyRRJ3n",
  "key14": "4M5LPvD8y7AhGvcVNGLy5GDn1A5teHtGFEH112Z1S3axyz7niDtXAz1E9xTBdEP3bvVyYqJHeJZ8dnRkk9kCiieM",
  "key15": "4ivknpFGgQq39rfvmriT4gtKFE4AAH3JBwHaPFBA9sJyGvp4CuXiKKbkHciw3Q5BWfjyfEY61V7kHyvRuXjRRs3E",
  "key16": "4JUD8mjNsq9haendzM2KHCX8BaQD4fVRCShQa7bfSwzcqFvLtrJgoysRhhbCiz9cajBj2MPCBH82GpejTeExKnBz",
  "key17": "5aXjj4Ukit6oMkdYXogGqn4dAn6tVi2hPYM6Fq8jvHbyoMwXzMuJkZXiD6FDDXpJDxNffU5XRibbrjggDNR4WsV8",
  "key18": "3kKXPzggVtB3k3KumRn7dKMXBRjDPsd1cFsUkgxqFQJGCoLWYjiY459i2ydT7PZXag6fEhxk5ShiBSCc14ih3QUP",
  "key19": "22PW9La3TePJ23TtP6UQ6YANFuJB2Gmp5eAzQsNThM8dfCEvZ5nSVaYnwB6Ne3CuMMPaPGR3yZSEjRLgtKxcFA8k",
  "key20": "rdr3Ju17JE8FPtV63AH3XbRXSHU9wWgA1428RaGHFVWkmiFkcCttrUs1eHapTSLL3rxwmpq9YmUNuVr75WdygPt",
  "key21": "5L4WRxzZxjBm1e6TcAUpeiUUBuQ5RNtwRLThvWfR9ANJsor73WV9DZsoiAwP6fJNKx1mSQAuv6c8E1hScLWKyWJf",
  "key22": "3ZV84TkBCCJRg45BBUgXUYciDnBj9XPNwpijjcjY5ZchfPkCXbifF77Dj6sjSTC3AeUAU4MAiH29oBFEQhwVmZcK",
  "key23": "2hiyqdYL8enmWn1HEUupqJP5ERwg4gAbHrJmm94JYzXrxmwossob1766VW544bwtqXhWgmVz8DdScYV88jGPn4Gx",
  "key24": "41mosfpX7EFTYb6c7Ro9ngKdSYvhmroZN1qSTsBgUt7NBPH8jRQovqGxsRHfGE4zKMAzkHc8RbJDfmy4y8Q9tX7x",
  "key25": "wm8jszGatT8zTvqXyF51vvrWxk8xh7DPfxf11bwYLgmW3mFnScogxzmvcX5diFc7DfkzJABTfnqUgd3p6xZiyHo",
  "key26": "Q9LQAxu3YAFQ5Q2oPwLxXitRGEoqhfkgssumRAUTPqiLqeHCxJY48nXoHQE14ZqC2Js51wWTwueVZLcegE6gYbS",
  "key27": "2EHnSjqRouZuoJ2NreAd8SwrLfeRLTrffvNGVCTNsWq29ZN2BmY4UwxxgXFradtLZQoaXNisVdVviB2SRizJrcPH",
  "key28": "6715cjQeUJNFtb4uA3MYLtR3i7BYkztxnLfqX1jVrCpWw28nXsSThmKKH2kvFUbe5YVQ13v6XUwpBJJiMTdaAw7R",
  "key29": "3qG9nbuhtqBaexqTCpQd5c5b8LZGshjN5BknAuoacU6UDo7PP3LmkHdu4RG9yJ3DgfmqcZsvHvz2VGWHknuqUuVt",
  "key30": "Rq5JWc1cX6bJ2g2uCARwFpoKFMF2Q5obqofwENUssWuoQidhVvNKqFA4KzUUo8kRKx3mEX57uRCuU4rZN8FUvuP",
  "key31": "5BybNV7EY9gZeAZUv4DaPsMindY4hDRVFDzzkhXQC9kXggxoT5ypMR4L5Es6Nph6i1kBTQk9bFeJpPe6C74CeCiC",
  "key32": "3Sv8SS4e6WDVZVzCiMYvgXg7RPrsWoGVNo1KCRh43mP3RjG7Hr5z4EyCcZE85Lh9SmiTUGcWu2EUbVBWnetjXydC",
  "key33": "2v5VWS6EX5wrnNcNWfXXJSTQ4nTxug3ypt8S1iwEeCECYa6SFwocYo9ETee2eh2SaDvT7DV72QWdUbd3keCqi3Uf",
  "key34": "5UgXizcmvStvzBVsUMJME8UpDnVo33GP7F9wga8PHUM94NJRVqmLmURWhqAoq5G9qFKLvS6SFLQTXovhZKh7PTUK",
  "key35": "X1wxRH9Qh7s6PBEncUTZU4sRcQuG15WMJNsBRziCi1XHzgLkRaKgfKSjw9Qnr2MgtnyGjbQXAgPgQZWiv2tcNNt",
  "key36": "5PSo4QVdVRUVtKy3mrQ134mxdZfSjg7D65kAvYDWsoE7YA5B3qMxBHV2h3y93gEkqXYi2SKGvrMabm3ik8krbKFi",
  "key37": "2MiMFfbQ7VnzVsR9T3WzCTD9PKF15b3VHdsYCdrhMAMcD4Pto2QufYLiybGoTTaZ4kKDN4FgDGC5B9ghzjhxSdxw",
  "key38": "3pPMN8rjgH9ceQdweKCfRu6DS8ZYwjBxrXz8JjrCbAAsYNpymqA8METty21TQ7EknYdPZpU9aae5D31vrSwEboZF",
  "key39": "3NozCdxhTJmf8VMxJVusv5o8Q2Td2rsx8Ugq8KUyq3NNcaB76ubJnWAbLJb3BBRveG8wxzBQeXDn3xidSaUJwWyM",
  "key40": "4q8GXP68b2bTQuiNZcpRSMAsKsjwnNQmNjeoNyfC8ErB84Tf7mZ3bEYk5tPfedqvfprSZzwdr3wWbgmWgvGaohBn",
  "key41": "2dCRP7itMi4aJgVZ5UphGbMTYqNgDRmw9gEc7UpbADuYDVa91Phaj4o9dGCX78BjGKRUNXQDFLrbBvnRRJ8dXCNS",
  "key42": "3ZRLwZUmdPe8Cfd5A5BMtFat57gcinhUgZkTg1gaSXJ13iDsiVCZSmCup7ZVpYLQDyJPgDH3k8a1bvnxNGHHKLer",
  "key43": "3JTt1JwjgWSCZV1izQXt375h6ezqRSt8DapJus9tYtzuKQrsPrM1BqoNpWbAkq7C4XpXSBmHbWbTkf5rS37R9yXQ",
  "key44": "EV8236zTdecGLAcVCSMFjCjT9jaPMkqwqUhj6n5VnLHvWWZuP63T1DYac6QUdX4DjYtEgKB36L2ya7eoFkXSQtk",
  "key45": "3jGQajALpBgALzszQSDYzzWQ7p6KKXEhfrirbgt7j54Di45g5zajX9sswiLYEdD22825K8YhwsT1iKkBRWromxvQ",
  "key46": "54jbj8dUFBf7iWTjtCu1Z1ncedKp91aBCZMpYnyTq2JaDWb4d1voy2X3M9ZfNah9zsbmfrBu1kBBwZ5L6HzxiGet",
  "key47": "3DT38dtP78N1ADERGaTSHJviHfu3LcsXtYDHx2VwyqGPhZ3nc4cWKiRAeSPeQJ3du9WTKH2FxmPZTDhmYCNG6P2Z",
  "key48": "2X8oHcGE12Ufd2q4pYDVTaKtrKJCN2SFHCdCeuajudXP3pCbrSxMXyPWVneSfThDVvKhJGdyvo64MsUT4YRgQHBM",
  "key49": "3NGCFfnBvkUgtpsjWDXqZM9H5t9SoPkwWgjdBBAqPCHxiqzFcuBitpwVBJvL42sxkYjeGN432PazuqJTbSxJDTwM"
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
