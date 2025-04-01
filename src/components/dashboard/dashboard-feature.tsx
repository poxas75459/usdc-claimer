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
    "5LvEMqgoVTdQ5fKjaE3ovvLm73hwdeuxdAwMu4zmYAGEBJKfYjhehLzQM2qAGY43hj4eNFHRHjtXh5pHvrZdLMDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWR11KQwfMx7feh2rPECE7QTcdRHFtJMcPpS74Qq9yPnuqrhFQjxn5EBmWGDsugo2DnFR6qMJW8ASKxTAEr5qd3",
  "key1": "38iNiouqKwBUhWo1Tw2zMhnRAC77tPtWeEtCEQHwNTALUzXhmca8sRhL8qsQF3zU72EyncX2L7Qm95MzGFjTtezG",
  "key2": "2SUteYSqnWLwo8Cfxj5N1VMbnvA4iS5MBgBeKF1UYP5CgeTZbovn65PSiKuz725WCT7chg2yyTrnrGpiHZzAdme5",
  "key3": "2WZPTgkoai8K6jNxDDiq8n2dyqLgKeyWybgiUwdJNLsgsafe5PVircmVSMhBZK2wTVkr23WvvrRKGywjbNfmiMxB",
  "key4": "3B6MNZbcZGRPQVrBmqowd7RnX6NQSTvvyGtXit3x75DXSkH5rrSLbvGcVpBc2kHgYo7rnKynCZjuiELmMFoULYHP",
  "key5": "ipX2hfqDYPADgc5e9aKRvRWx6N5UoF8vZLStDQmcg2MnbWr7vYkVcbUMDawBrCob1nkDh7SgjHAwJLaRXRrmfdv",
  "key6": "2CZ2eZCcdnqepbLv7uRfWDTonu9EyCqGB5mQBuGb1rHHCNswhfXnXxLVu9fVPj4cohjShPNCWVuAzV3v83zXaE5i",
  "key7": "rDFiQGdrp5wd6Akk8asCqTMDkFgMk9L2vp8TcCVsW2x7XVCHxj2vF9TN9p9cVG1ADZeLdaBYPBt3oqLxHW1L7TJ",
  "key8": "4ftakz3uySRwYS6vixhVKwiH9e64g9aweaDLs8eUnuTaQ1maQnVnQM85USianRaxHn2Xyo9hBFTVsVWAei9SqVKz",
  "key9": "2pPwcr9wm54k24EJMn4ECnozWbbEvj318bDWdmjqSoH5XnQ7t9wh6oFTyVhKyyQFHCe9psFgh5EoCXpdMgkk331y",
  "key10": "4wwBMQMH2BC4qffeZ65ATazTxzXCEf1sgXjgBxa9zH61ARnAWvME87njXns7AtBCjiAh246KatgVhdWcXzBxdL4D",
  "key11": "9s95cwJf8AXynQVvJzKxF2cE5eNKfbtBwpg6TsCpaFykj2vgkC1y2DP6MVNRizDGJKy3qdS6HQJtDf4urBFdrkq",
  "key12": "5muLTsWVv1HLQ8Q3nMXgJvPwivr7UaJCGBDTaTC7YVP8reyjqcXhwaJswg74vERCub26YRcyMHJ1dDbehTJTLFns",
  "key13": "3Rve4iiimTAHG3L8zgWqr2NPcyyWxwVvQBJzCFkqGBmFuVF9tVXxp6mhJJtcQWmuXfLPchYx87m2mLRvu2u3MoBs",
  "key14": "4X3n6PyYPcpScppySom7nUQKUTZYVjmdfoTZ2AU66HAJeZLk1Np93eGoP4iRNRLZuEuPCMBe2s5Cy2nhkfj2LE7m",
  "key15": "2wKQmvpZMCPqJWg6mQLtvrwchRi8YaVEzut1r3csAgc1GwAMWZ6btUj2RAoowNNEjtBPAr9HsSFieNwaAk4N4Ph1",
  "key16": "4aG78Fi2ZowGkUdvGnSgYEAXKeSiWWMDtXDE2Qe1stnuvaMzqBwZcMZb3MGAN27qVdAhKPCNEraaBVzYi7agYfaX",
  "key17": "3ZX8BPSyqcyhTBhjAd61g7oFZK42wh49wx5dZxuNyuNCi2DhHKKUgZxJZJXT5m4G5jkkK94AjnrQ4mt78rKntxa5",
  "key18": "2pmek6ZCqdanhiftr5u9jQ5n73G2zAD6ycUyg1nuXxvqTwrvUUbeZX6quHi4mVbnBNzoaT9CDyof3phj5Vq4zqe2",
  "key19": "oxfrtSeEUzku47jkwMYTufRuhedTDGNb6Lv1z3edZ6iQ5vKYSSrnTyjviTeQhJgm6Q8RX3uj8B2ugrGPwgkG4zr",
  "key20": "3qw6EPR3y1CAZU6KArUaW6tu5QD67Ea2PuXiYitjoneCUR7k17M5CoRR6qneqVK7tUq9f1Dmfe9JVMwLD42LVMZx",
  "key21": "QhKU2i4a87BNt135wjKkxgPu79fE5N2ciL7aVxtV2QGvSVvup9Un4W4JVDGjczKPm17PBNRc5R4dGVMNhQih8jB",
  "key22": "3gMgELpdQUv5FjWK4qYioodc189Ned5bLio5Vx8os8yymn7oh3GRmXD7bWH76x5DPHq7KziggYTGeo6VqQuG9yZb",
  "key23": "45u7Wg35KRyv2xd5j9HCbpzVVSnRBjDDRDtFnpwqPHqFKoqD2Hb86TBaFCUTrJgBhvtYiN6s9LSjYt5oLXLpdwvK",
  "key24": "FfbdMkvovo6RwBHQPvWquSUvG6JpvXYXRM1z1qsJkPnY9nMsqKz5nELKBsJc1jjw6qUrquPZbacRjBT6pwskw37",
  "key25": "2zekRbTmXu4tnWtxZjxX5A3ZNEhpefHycbNBeVtvfSWCSStfvC4dTcSzBupdgKd66rh1yKiC13XPhWLiG432aFeV",
  "key26": "529XU7cZHEoHsXA72E1S41Zwa3yLnHkBH5cTTMo7sY4xWzpaRo1kJx8m3J77CudqWNsUFfeSehYT8RKoQQ8GtS2n",
  "key27": "58UVsbGxz3ponbp8c1TWEASuvPih75d5QZWWd7ttGnuKhKUGSckf5FN3cz4iQ9N3KfePh63K3FT9ZrgyysxvVCYH",
  "key28": "5gDkgvWNVR4SeBowm599Dgo1ztBMbSPc12EYTKVAWrqsXny27QAaXPm5rokssST47XjFkQ1T39YNshB6XduqMacS",
  "key29": "9ZA6y9Zb1TR2Vn7myCVyZpGxsNL7b9xCgFXCDWbPfJkb7nvWjHLSDiXhFHuzsn4phtPbao5PruM1j2NrqYSZEQ5",
  "key30": "3xGTYeY929EMAwfanP8aBNYPgMNS3efe6XfnGn8idE32W9cqJNkLVyvFt6ykqAd8g3kK7yRKmao3YXxKivRUQkcY",
  "key31": "3EaQWiTn71EeJ6stz4NoiNmpV46zjqqaEiAzsA39RfLVhVhWqVEXmHdq1pJNx4xkuL8imX8AyCKnFmMQNpzTNtYC",
  "key32": "5Hesb638KWQvALtyYbERGmfRyQzAHZde2wzJQw2Pge4yVTDb7bmNWnCcbaVG4YMn99u4pg3jH35abyrrnAELMMBn",
  "key33": "43pYZd74aAb2Yeetifjce3QHB3ideeT9SLp98Xh7qhBmtY3n1d49htQ9siN9npCwxEKQ8Et2NGC4wVzqKh1BSPky",
  "key34": "5iN6SBTxJBBEWvSUr5AQP72qLu1HTLfkTs6qqiNZQDcn4PiQua7kiUdmhYE6VcAoFBHWRRCnUu8GoQvLdrKqMpeG",
  "key35": "5ZRCBcCRLYfoFx7TRZCAWUyNSwQeBrQhkDgN9x5H4hyQV2StGoLcsmVhXBJiou9z1SqmboZamEHXprTbCBYDAcYQ",
  "key36": "WFFgn9KSskCp28TmnmmWcyaEz3HxF2JYMDkmwzRUXChsX9N1PCoa3eqjfTefMBjFaSiv8z9xcGXkryeuTeo6NZj",
  "key37": "dDW1fPHBrVGzaqvBquiqaiKkSnBsqYAfBvyrChB3iSqBufFCZs5x947nimJq6mox2LFbYdB4WTn6Yy66276id4E",
  "key38": "3MP7T81Xm7G5f3F9MDLTVWFYTzWm11ec6igbryVdYMBSRRGtnaNpBwYp7WyNGxFSMyYMKAZXnghSz8f1gqeKdj52",
  "key39": "5Vz7H9NSZEduz6Y6ya4tB4RPXouqn9JAZwDjeUy8CYGmxge5Fxm8DBDms3ctCKDsXeWBbymcaenkTiamSM8LtQqe",
  "key40": "2vXn6oSU5muGFgFgHu123gPg4LRdvWBQwQCE6BaeY4LKC4Dn3EgkX8wU3ygpLeBmx4jy5cvxfXemDkAStG1uVEAh"
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
