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
    "39b2PMv8pAiwTm6FbNtM8mPdd8HqLMFZKi3ceap3Q8X9iE7CRN8M7kpjghGTLY8MnzwfENcTjCyq6meRoGwzkxkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6nfoD5xMMZyoMydrKQYBFwKcisuT1kvDnFVdty91BBgqat7P6RJDBWsnfxTM7AcBhj2FK91HJY6Q2hfF3nsUEy",
  "key1": "3RKCFJFKEmPqgvnP3kQo98RzsDVEdu8o65CVoMME2pcUGFwFNQVkA6TjnSx1bVYjRVtgxwHkNUwdAT1t3YDnkPaf",
  "key2": "34yZ2ARLszAZ6fxymw4pZtHZ8W7otps9ukA2jMDgs8QEUqYL5tJbjoJfb2qNQwaRwB3ALzMZk62sJLTYdr8Hrqrm",
  "key3": "5yT7PxYhZ2hjA9wM4BXx6BAEDuXc1wEePjkSpGLk7pDUZaoNykuqGxetFjtWjRBidsykhE7wyWouAiUjbcvtCMen",
  "key4": "4eXXaLXsK2Yjo7ip8sNjNaHxzESvfUZU2KeS4FV51UxiUSHFh4EcnDzKn5pA1Y2ETMx3kd228rxUcSCLQgS9YuAZ",
  "key5": "2xH9hKUHYxKeff9i2EtBioFvZ2y6hbYzTZjYLG49iptYyBQb1KkTwG6VEocaCnfJLduaDwsPN3tMAvC7btkHyqhL",
  "key6": "3YQwmThSEKwyYtmCEH66FLvhFhTkDQqH3aUbaUmMVjegE5QqVxft5ozRdERAT5GDbkJYeNuM6NrLuozQxEvuzMzU",
  "key7": "3faHWjcriB44dsfQgtWWnjJucAfSupopjJUSZTCWwGJpzevbfqhTX1ztkFNsKoTzVb2sTsdH83o3gPyD3pV6WCKw",
  "key8": "4Ka7aX6ViLMgusT2pVF8djBGR1t57wPWf4eSFbKatU5URCzKk6XRZ7nWdqHLcGPXCAiSbriJuHX8EpjzKAK88EWT",
  "key9": "4fKGgyU2AZSerk5RxXgGBsbjBYQ19fVb7HjKV2PpK9cr8mg6umD9Gz46EQfYWhixhE3j9yfyiEmdqGHJX3kXo5eC",
  "key10": "5pGpySjDyhJLXFGgkRQNZmpRyt6eKzqGSrBu4KaNpNvXZDdMg6eDk7nxeHdWsbCvkNTREQRRZvrrWdUh59YiW6o8",
  "key11": "229dsw6EyT1nh94iEWth1ZHf7i4n5NGUZPTEeKyDAUXPZhY7dRrkmH3kMmwvdGGUqGU4dHY9ksWchvYVNRVyHiUc",
  "key12": "7ZVepqKAYMzUL7HN8VZM6eMaSuiinkFq3vyd9sjeJLKK7ee1aF3cXeTTmuy6XEx5qvgUqNuRqjzp5mwSAmAtVNT",
  "key13": "51HQMCRpQZFLxw2pAYAwTPgmfQBtp8Tn1pMC15owNFTHJUrVeznkE1h1icHTbR32fRyr6LSZxrMzMoHkAUMwHaXQ",
  "key14": "5TyG81YeWTQs7TL5jvjLp7aejhwFNMJ9Gz5jyPuDQkqNdykimav4The1XDe5vqveNrCTXuNsad9tRR8dFMy8Z3xC",
  "key15": "3dqq9w7Uz7sSDfbiMDw855FdcWUi9rhBVELzRFup7R8khdBHV7AcCNZbduTpRXbYTPSUxkyevcLjYkM4pB73acF7",
  "key16": "4UWuo7f5MG9GT8BC7ErJEnaSYZzKUHKvaec7JT5y7jvCEKKsCdx7b31CUqQ2PsL4HvFfNz4f4Xx6LNudPfLAhMck",
  "key17": "5ihQ7H2GaKntaTCXwbrb1GitAPANrS6XDQcjUcDT8ozFS2eWzJgokXfiQBeGfzrvFzLEcDiNyFn9oDgaG5dKSmgq",
  "key18": "5A2ugKs2KHeb6yQHyYLZdLwTwmJ6QaDbRox9aMMwrAGvGPQ7SzZmLUVPe2qBGGyjJcrora8XXvi3inenNGsm7jDK",
  "key19": "GG9RLefXmuMpYPfrn2bUpNj3zXtWDSaVCGv4kk4JZCL7yRQ23ptqPykpzY1HrsKBaHtsKD2NH7esSShP8UWQGL6",
  "key20": "zonKNL9cmCyeapyfWfBp7FBV4j1uAz4Nw4YPJ9VDfpL24LXmMKVkJsNAk8JBaBzrgDnBkS8E5k2DZCkrhybS4Jc",
  "key21": "4k1LCSJnN25vs2DNSAu59BBn51MctxFGNd8FHUtpoe4vVciBxvZoj5kKp5V4TjuwXvrNdnHqwFPRzifMW9Xp2nrN",
  "key22": "62As8Ggob6fybgqv7Vh6BxBWDzTVGviabMu1KSiaPE6C3yH5tzYRaSwBVt6JouVkutn5FF59w5EYcWtQGndLZVXy",
  "key23": "xLGmzGB54wpcFRFrHtM1WxWNMTxQzwkKW5fpm7WS1FyR6ohWvqrxdEid3XPmKyaD7wucjomm25PygJzjJVSX93h",
  "key24": "2nqCPig7is8WJJ5qDHQpc6fzKSzno5cKwQjPCsFKRH3Z2nh8yM5GvxKErcGKDkq48cYMcscpEAqPrvPBW4G6tXEx",
  "key25": "4BAVv8TS75t3v3Fdopaq7dSfKZWucSgPcw1WRRFjgQ85EYNVttJ4AE9ByufD39hfMNpb4QDfuSEGk3Ph16s1A7dR",
  "key26": "v3DZGXaiFjhcXPAiYXuG4oP7EDsTF7XtG3bYU1a8tbkhmBF9GvUdJNx9knHT2WDf6uSCvDcFQefS2RdyzG6h4mN",
  "key27": "JQCodPBgBpuWAQVswDnc7izzbcSUnn71rLkvcM9zXwJwxL6NH2zXC2uQYQrn4QJkbu1DKtCNBZQG9huEpQeVdsh",
  "key28": "56KGXeJfXaVJMdDxEuVGDxa7CBhu332LsRZmM7pYH3hVEx7Youu8rb4T7Zi8iddZSdQX9E4t4xwJxaUqF6mU9tjH",
  "key29": "2wrwD5CqEoCXVBtdaTaqpViYv9qYnwT56sN2GWPH7snCDqhYLgL6tuR8GgiLMBXEbyf6cCrxH5qPkgiU6xApwtVA",
  "key30": "5DJ5M8H3Vq4hrw1MsvqXYCfZMaZykoPS3AKR3uybKD922wuYgs5ACPxwLTLHQ9C8rm3JdsS3LHwbMXCYjpYi5jyG",
  "key31": "2X9qUDBA3XbXxSFZKLuEKiiwmAG57dD9AZV2LAdzMqkYJY6zgdvZ6k53CQ2feY9RMCRTNBT6Kkj8vANb4mv5PFqz",
  "key32": "svSk9osyy65We51qGrifwLvSBKBysUcitFQPzd7f953hf3ryb6vayg315PUby3vyhGaXfV1rCdMi6zxuVGjX4FA",
  "key33": "opYLpXoHMS6U3xzVCvqNzGR2udmvBpMSH1apFYNoWrBLxsX99kzUoq4ugU7wFqCxiNi9URZZTpdEwY4xSfQv1Se",
  "key34": "55QBKSQDsniX1ReiFUrK457TRjdcyYNs2Q3QszwSaVpd5uoTd85S98ShpT5EHSvxBboKDi9gAA6cj3jkVQ21CVfi",
  "key35": "5eQt4zB3giDnhZvtkdamSqXtgA76ffqi9SEGYgTZSvy2AzaRbZJaCx7RyJZrq1vtjVjJA1cSGwCKdxErdwwF2Z8a",
  "key36": "4yoC8nqCaobHHo4CPAQaVj2xpeHEy5dUGAFNeeN6GWEqUv2PhasV3j7eZbKdCwi9fccWtBeP1imCcL6XXkUcusUp",
  "key37": "4SSrNEqXxRoXThhg1UY5fSju4mkbzpErRAiA46LhqyATQ1zCzApYfaQGjMnGP8oyucK2EiEpoC1KnKZdtAqZoQ2Y",
  "key38": "31WWoD1NPZ9RUdLEVEG4mNiGzHUMhS6nVYFpxW42zFF27CjbSXX6xvg9d6RdvPwHCahnMfJxxq2UiAZawtYQVNMB",
  "key39": "4pXvvMY4AW6JQDNUekJ8uBUugyEt8CFhMher52uxogbK5enTVXxAi8uWMb2Ak5uMVaSZ3QfHAuGJAXjFybG5s945",
  "key40": "5DJcQeYRd6vb417EX6eCUHKCRNuB9m5aY1rDBGbPAhdCqV2bCy8oQYBJ3vLFviZdih5WEUu71MWHrhuRWKYAaEgU",
  "key41": "66Wudqd5HK4WvgpQ5mQSBkoAhN22dpUYzGeZdz8SmNe8QMZPwwuhucLpDp1Aw9DMotfzu2pKEvRv8YJiLY8pdZMM",
  "key42": "1219eyPsVZpN3WunhwMNsJCDSnjZ3VJtxHHcnLeSQ7uiv5zdq3zR97kEdb9GkkXb2EjWLJboy6QA3P8v37VVTJJq",
  "key43": "2FdxVFvdSq3Ep5cmmADHCHWKq3oLSgPFRJVXS5iaBPowTANAR7ws5Sh5fgSfCep1q3juPYDnTW73BxFL3hFt896F"
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
