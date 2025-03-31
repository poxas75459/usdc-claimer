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
    "5u6vHAemSxorcJ9diRtHnuFS9UEKdCctVZCjiixhdbZ2p1B9gB4Xc6mcwYddDdafSNjpw3XHrXvELRypMHW7YjEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MST5L43YDcBP9dyw8iB1PaE2KcUxBo1vH6HrAb2vbZqC9HxrrSmQJkKeMLDPuYq2bRamQNtJKc5GmoLqHYos5RP",
  "key1": "4rabsVtKDAZz6jKybqbvcFkcaPXXWnRJoqYtZbs7MXzUdZtKzYf3pVCLmUAYTkyJQneYzDHrMC6Hea51oGC8wwVE",
  "key2": "43KJAGkG7mMqyohmyorDQWxjH8CU7Wok7q4WNaAXDDRWiCNzwU7LqNWrpUfGbTendcmqXrwfQxXaJyHzZEeBf2Mk",
  "key3": "gdiAStpB9yFaH6YmWxh3pDoePp2bUXqifFmni6XdKvwYmgd7NnTr6MmobNFeFS2ntnd7R3aLAqGHuQRBkQp5V5s",
  "key4": "2YTatkhoSD4ob5tG6Yb787PmfL72nwyWQQNYFajRH3Xc3HsvSnvKYCra71TjyE3ADggYFTweVTbUM27xqCepmpj1",
  "key5": "2mL9Ny4ZuLw9BFi2TAjkMAnmiHqH3pLFtnxZoTRj7WPxFDidLyCk1TTpPa4s6Z4NdL7cAAQ2JL9dC4C5qYr8ErgH",
  "key6": "5zkadHeRYa9vi8n1mk3J1RUFfmXb6DNh4gzUbbQqxzK2pJYzUH3kSbxYwa1CwTpmmuNXiXVsTAdTbdEXb9pH13wx",
  "key7": "2eHuvMeYeDXSdrH2ZuvddBxePyVFMbz5xySnxFg2WjHN4ebM5azH9ECyUjXMxxStWCBej5mDjuvvdKGCtzobNBMZ",
  "key8": "4LhkTwSz4wKL8uoYNcaEgF9e8fb92tLZ8AdnubWDbgw3B8VJ8BuNaisr9SEsCmRE6RCBvtkaUdkUcz2QTDZBbwWY",
  "key9": "2VqsM7N4qcqspDPEZEkTJRTU5Wo88GWXVdeVDAkeVNK77oCehCUxgJcopJxvNDAhcCDnXiTb4KzYnvyZzAFvrxcT",
  "key10": "21p7paxp5S7TvFaYWMziNAUs3Ev3wdyxv2WpmmQRy72ZRY1NkTSb5dBaAmZhpgm3FgUFBoxDfj7va8yPAq1VprJu",
  "key11": "2qspPwh8S8Wxu4n5fYB7PtpeLtTWpv6KCYz6tnATw1WqmcxTstVTVmFypL6b9J8pUpB1Kk3o6RPkGrggN71QwA7o",
  "key12": "3fysbaY72KQd3ANidiAjVuKJAaNh9GVknjNEbRcPAskpkyimQiVwTcQsWb7cftDh1dpMj421sm2hR6xaJ2eBoV7M",
  "key13": "3KWK9dHJw55YQK4TeCEmw5SmhCaq8f9BrgCwwAuNReXehd26kKw35u3C9zogRMYBsPwmXm6v4QcQoaKQne9EGrWe",
  "key14": "655mNmDSKwDf3wyESqTwgTiwNArBtofv3n9gqEgRpDbDAKJAkkGeNkaSmPwBBvhXzwrSNvqeykWfitZMDuNy7au",
  "key15": "5c5PAvKo6rxHtBbwrj2dNbyYJiU4Kf6dLeHyb8NaM1QTDkUBe7aV2tnyGozTZf1fg9aWhAr1zY74gyqHw5SQjJy6",
  "key16": "HrP9VqLJsBd6Q6C91Z7a3kbAgg1j8VmeaMhJYhT2NKbgLnmmeXTZ32nME4ZzEUgHwQ2QAKNs87ytmSLyYSbzKXa",
  "key17": "4eHr2Wm6s4gHNyRUs9jDLJn18oW3QRPTQQLY8oQnU2skneGxy5qTKTbLuTW48ihABBYqDEByMdEBZRFodn1S3YRE",
  "key18": "4wJFYRi1KWxw3gh7RrAKh4kY8Q3e5AtfXnBFsSsbe7aAL3TuBbkKzVk2boPXhGucQecDi4qWoizo1Vy8aVecMnQf",
  "key19": "2FPimTEgqvaFKF6EgfRhxGS2NPxgqXnZ7pwpKGDgCWyQ5ZX7uuUQecqns5NNQqNz5squRmwV23j7cUFqSTYKBaEf",
  "key20": "LHzC5CrBafgdsskrvXzV1DfBCUF9yMkeaom9TN2z76XZR8KKgYskjdACxx3Vhfrs4eokLWqgcy69PbZTsMTvXUk",
  "key21": "4bNCVyWD2mSRNffgxhjMU2NZsrF6Mfd63Z1wSJTfAyHUcFE1vY3gVqLSMhTrLjGt7roAYxHLKVZ8qhR1Gpg8QZWB",
  "key22": "3dWSUvWuUDmFgDE3oGX21fy4wcAzhDNMCgt81pXEvpLgpYC6dNjAKode5oBgVF3GJqo8tyk5RR26U8TCHYP5Z12g",
  "key23": "8h3fK3ZQfy9BL3Ee8rgR15depuJ555554GH6kxx6DeNY6Gq74Ehcsi9Q6ib8L6dDVWw3sYW1DiHJLd42ffb7FHT",
  "key24": "uEM2aYcKx67KMVgfy1qeDiiPvHst6Yuq83FtLaFbuKmDqSpCsqnG2p6gh8YgotvvX6vuXpkz3c6SNBkVBQiNHAx",
  "key25": "4FGDpj6Q6fYx4c4c4iqWtU4fgBzvoo6RctPUFvMapqK65jPBk1Ae4HD7rcpAWx7VfFZfJS3xaoyB77dV4C22nW47",
  "key26": "NUXXDfe4bmzYLGcg2Cx9yjgM7EsN9h2NTGbGwiv6mcWcKJHdfkxsRibfhqN2AzMrxy283fUMizC9z6sWV873Cai",
  "key27": "3xnFFquKEftUTEj6vj7XS6tkKWYroevETAWVtUop5ApHCsUzbn6AV5txYzGuKuk5bMYUZv2H1CDfT4j1vKcJG1bh",
  "key28": "3gQQPu6vm29JwNE3W4zeT46kG3V6CFYdCvLM5WtN2aPt5Z55ZRJsmLCPWH5fH7ruZAf1SKUU6fpgDhgGy5vZrjGK",
  "key29": "2EtrAEf31TQRrBW73F3WB8fzTk6iqDCXteEyrkRuw3hsBkMchzCXti2b9EuS4t5cdAXFgF9bB5T3pPr5Vq3Hk67F",
  "key30": "2SNYCciZq3nwnRx9xHiCfEvEjeEihSSNVU3akkpVY4Y8kZYnn2Sd35rA9LPVr9cGfPH8nZgEADF3szMPmShxmrAc",
  "key31": "5TyApUvybnTrgfAN6USU6dEKRCHz7VTgDFLgwGTPcHwYHZoa4Z42SxPmZYXDpo9rtRqDNWBCmvga4PqkPe36XDyR",
  "key32": "QBm73cXYRNd5V3a6sGDYW8vhbxA5FFKC79Bzsv4VQQ5Ho64YjGVBEwJrkRgHTHBwRqqbAk8z9oz5yDSngvAQAfj",
  "key33": "51FSshbeoryNeWZBUBUTDMs2jCD52GF32QTQpZWryFk3QCMMjG5b8TBFhQo8qkZbM8KwTKLmnJF7Vs2UZwZiABtq",
  "key34": "5LbPH482fH6fjeKrA9QoDkjxXB7k5Au4bPLmWRhaQ7RaQRLnpnTrjntrhQhRrMtweEkgLEcDxvChZMSo7EEAx7gX",
  "key35": "5V2vM4DpsjKaBB3qdGazvu2B5dS4YK6KFA3UPrtXeEsX2gHgtSQbG83rA1bdwvciMhdhpTLdg87eRqV8QA5NCJBC",
  "key36": "fkYK7W37ioMgCYDRi7JU8ZEvUVE1NBxW3Z5jBMN5y6s7FDcar6k3WXSSA2dcYQ53XFARimG5zNA6adhPNZ6fQkm",
  "key37": "2mEFstB9BrdNYL51gGeMWefB6VDTSzPNRFfjUhSy6n9TVLtNMs4mrh69BVze684XW4keLkBoyLTwAXcpuAVWGhWx",
  "key38": "4ZNFw1xeBEn8nw7BfTYtynsKtLq1BBzszb9UjwL6RQ6qjBPmkx6JVtmiA5vd8okXgb2AfHAYYsAwXa6jFDnrdoE8",
  "key39": "4NkujnZcQ2xGdxJzPkJoz6YxWvL8smFWKNyRJGT2egeUECFtLfJvtDbnkHgmj5NSbeLXfZE4oxQpurMvCQp4qFdd",
  "key40": "PhpauuhquCVLzppGFEaSqauEyqYA8iAVY7NjQbhwSgrciaoBfmofZBdicdYP6Bocd1HCLmnJBR8j3FYVY3XnQLt",
  "key41": "2msi4XSMJb8z7SQE2nfbiYRQw1hv9UAjVzFrPvkQur6qnpBtvaLxorE23RT2e5sDXyjWP8o4pc2wxoM8xmJJVTMe",
  "key42": "4wiRKQSjrPjeLD2JxZj2NiEj3NqwxyLSizGqCmsbSzWkeN4LcWLGfk5HqiM9oGCS1zAJHkQBMKfmxk2VNhNGNRAv",
  "key43": "QgXyHnANFPFuaxK3DWD2bwWP9fyxwvXxwXbGMbHBUa9L6akb6Z2zbkukDe8MMmGpg15LA93ZTnBiLuqNYZZv8HV",
  "key44": "2AxhemxaZJ5HUJfKrMZEaCT7Xye9qYmXH6UPh5yd6VcrXSEqU4tM1jyNHXmrGo42K2BUqFzBpBYrDXK3SrxVGqRb",
  "key45": "mCTfw5qRK7tbGxjykJMJsCYfGy2h6iNVKjsb6gTCxJhC442VdG22L7wTBHe6SEYowFNdutGiRWsvv3uVz2Qu2M6"
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
