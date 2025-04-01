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
    "3AJPNLHnRFBDGsDxCA9JpqANoVuS9jWvBjV7aVAS5nU8WM65njsZe9sBxdzEXAGtwjyr9DX7UxC8j2jNES6cXkDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HLULrQyJMh5ikZWFFxcDJgn1s3njZuPBrWiBayxphNN2YLcNYTBLsVEV4z87NyX93tNcjPTVDP8eq1aYy8kUSeL",
  "key1": "5c8vWCnZRz2ezXQqbH1APjRc9e4jA3k4HGzDTEaNgs8ZWodHkFH4rw4asZGJCi7xRiGySas66G7mHzEsDDt6ciyy",
  "key2": "5sh3rLuu1Fcz4BWSH2EjyXZv5gY3auNdzVheSdYp1ff5aV3E7CH2oBtPCxGyhu5PDMSDjg6f3K8fkB6YukTZ2HLw",
  "key3": "5bA2aqhxVT3otppqj3SaHt4JSspCjPDRyzDm3dMaJuWdqVksMCEp9pGvACshaavHLdc2GsLd1GUY7Xt3qvUiFn5F",
  "key4": "4YVMB3soHaXSqnRoMK759Dmq2UrMp8g7JecuNeQ2pWUXo6U3WeT87mQGX6YR7oWKragGHVCJVMXByDaKnrS4Jj2y",
  "key5": "GomDU4Wpr5762mcVN1t6sNxdHCmJvU6Sj2pWixK3BMfvJk77JTNW5V5sSwbtQW5b6nRBfC6AmULpWU6K5ym5z6j",
  "key6": "4rxUFtwie2fUPracZKtNJ4HwjmocBjygCsiw1KgL5FQC6vFo123PXp6YfyP5QjbEEEkq8k4W2eGsT3A5UwD2AK5z",
  "key7": "2Rv1mw6hzGrPUUexunTHnVfrzLvvhFD2fUAQcTbVT4dHq4BpZGKvpr968YBw1NCBBhNLrNbxFqNN3cLfiYqMdCfq",
  "key8": "2dp6ehSCsdeexYs4GS829tUdQTy2HSRNAXrUGpQPwmrpkM1vSbhVPjETunFsX1vdKyQ2WNJFV1xLcGmcRkBmGBDr",
  "key9": "3AvikAFCHBQxTnB8CEBrBQp3s1qLspveTNTUPLRnQeFvJs4vZM6mcnYL3Qi6oC76mfHJxRGqkSKbJg13T1qF7v6g",
  "key10": "3rotUpJYCXSo2AgssnSkQnMbMfuogfK4f9pGWEi2EAHBgC8FFZ62MWb6d7QSCJtnQ12NtTqcKGAS6MxdZocmJbKU",
  "key11": "2Jqe9ZU7o1CnQ39knzMWWo58f7aJ2pwNwvjRWrLSpCHHbGY9Sa91AE79s6sAfMgvkSZHCZdz3fQZXTCtxkV3RjZp",
  "key12": "3yWrBUDGJ3X1mubeYytbfezJhbeKLeRTv93MLrugXMAzRafYkZpepVY4GVNvTmgATWS1dr4PiKiMCGdrJPpbtKNr",
  "key13": "5careZw9tQDx1Aj1Bi4zvjQoY8AMWF1FfPCAgPNWrgTDyN1PPBbtk1tQcPWY64JSG9zPnirXRFr8DjTD3qSHUfEm",
  "key14": "FbWP9YqwmBtyrj3EZQr9vrcViVwH6aEdsiGT9fy6oy3t2N24tsrH3CU8P18HGBPs3KrV8kUj4aUVkLMp4Gjc2K5",
  "key15": "59UEPzdUYKxW6fZXn8xm5rFR32UtcP8wwATsK4TmW2dT8x1uXAEjgyqXofhQqHFmaNBxDJzJteJf3qNcXvVUsxoR",
  "key16": "5J74QVJBQU4BDmRM1JcgCN1LTvBomdJAkzSuMxt2waXR3RXQMTNAdfz35Vy4uaz9ZJXoBwa2pHeD85M11sr8XvLz",
  "key17": "4W9wfurqi7TDJmrvSmoKvpSaRBPyTGAtFsHQvSNrX2kva7VpJnMPMqbKTMVJMXbtXivB5UCsSXbcWmmDJAND5pJZ",
  "key18": "4tkvhwEBrtTL3ZwDihJFne4FCaZ95w2H94isVpeNxFnGDRqzKAqWhZKLtGCYUwSiDUuJWc17A3Se2zDgtZQAUfj2",
  "key19": "5gtMALjpvUieGhEBKQ1AfAcoqjXfKS1ad3ud99emhsN9KrPTHZ8cb2KwijPXL7bonBfGwjC5jmnbd21aYoYxKDK",
  "key20": "2BBEcbfGvECSB2RggHQa6aQQSaxYXoqpeEcouUkqCRD6TKNq85egMndACTX6CdpuKkvxwTG8EhTUfLqSHeurNxn9",
  "key21": "4MGCt9Rv25aK5VykiCqi7bnCt9BWGPwGfPsLJcu1oYT6YhHBMw1LJBiak6LJdSkfs4UUtV3zGy9k5LmzadyVpoMd",
  "key22": "3zAnPtbeKqHLmZVCDdq4YSBhpW3LFz1QsZ8mgRZ4XQUwy3gw8Yc1JYGWcFtqoXAxwCZjjPdBTvnymd4drKMFKUYu",
  "key23": "4UJivkdXFAbmNPEGRVTo2jiqsgC3pe4frk6GMnwG7cNBTWA3uboSfTLbrDUQfFbT26z8ZRqLKZ6gEPzRWDo2SZtW",
  "key24": "5dCWuqkjKTfKrC6utTDgSUg5SDySjDBcw75FLTY6rd3gRbNd5bBzjzPgjeLXvv99CVkHfTGgcEws7c8qNAeUR9Cq",
  "key25": "5eyK6669kCJBFvUKFvPzwZcp8y1crVQM828HvbaegRCB59ri9mdVxKBUG4uHs4ZPS1d4vqBUJ411UMwLP5DGQfaR",
  "key26": "3owxpSoHmbfyv4kiBxqcjThUVVFbiRwYMxxk27rtSavWurWyTciXakjAt65N8LvrDGeUHHSu7maQr5x4Ju3wmJMd",
  "key27": "4VqQq7hQ6CmEsc5Fgq8HFuNqHmkLUK3tbNv4B4nACKv293VJVrSkT2cYKV21VsKC766GQgvKpVet4VeEiomjYmLy",
  "key28": "4wfyMqyFdo2eh9BezCG8Px2kW7fAH2gX6cAJVsyxFvU6vUSP126pa7zCxtBSFYqZ3dgnCQcRDm1pz6GQP1f3qGsr",
  "key29": "4QsTWY4A57wPZVs5CXPviZBXHxBBtAXsKX6Hu4dDPtQVLxZHLagBUo9nkfNiLWcv2QfiGCNjSZzaST7xhCx4jRNM",
  "key30": "3i8dG4CzcAJ2zE2teG3jFPcEWXByZHTDFUyDumnve1FF6oiUQZGY9moHZ5BJRouYjEbFowgbFapki8M1Ho4bbw67",
  "key31": "2pyqexj1W1NTeDJKrc1Y5an9AbayskkwiPmppfSxAvzeqTdGjekTWBrhE4KUPq56NxZdnAFf16KR8tB4Uv9HBsrk",
  "key32": "4txJENidhptcAPSeppeYk1FVvCQHBLhHVGcvfE7VHaHaeiJTYV4rbEA1HK7j4pXE8vydRuvS6Fx7ma9zu2MicQAy",
  "key33": "oXVgy36uAWLLJ8F8o2MWYc333bviYrabQsjZoc68LfBf1dEaTPyvAxYKHozvU3QK6oXfDzq18ZuBo1TuGWDozbX",
  "key34": "5LULdGxwsvxwPFJKHXgR7t6nnjT3MpK8rZCPG4sf66MJhR7qCswiynnTZzrvpUks3bq7WKos9LFfti8j5e5bcQym",
  "key35": "4J56j6Jt3yquNCiQrpdsaCaghgC9frdTPmWDJCyqAwgEpa24u3CFyZ89iQWJWYuhhfB5gA6GcC5z9neMDL4qhxUC",
  "key36": "2gH4YBSYDrxw7KzonUzXWgGYDFSeNBTFQv4P7dwgkw7bVctBNVimV8fa5hhUrMpXU3pJB16XjGbXE1GtEb4TuzD5"
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
