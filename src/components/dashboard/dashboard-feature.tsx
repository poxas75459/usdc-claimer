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
    "sVE3WFHdaux9mA9a82E6v4g3HG36q5pQLc8pB4MC9LQYMQPfEwQNRbFQdjtS1vKmeVSJ9LTnv1jUNarBnEfkuyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hF1pC4YtHCdXz8ZrAZEVp1MWXPpej5zwEK4uGqC3g6onwBZKUqLpoXehtASarG7pBdj4fGQqiAB7BtPXHFfcMn",
  "key1": "65wReyjSKubUAYRh3pH3z8AetfbFYq9Xzid86mYMdBQvwLyvsMHMabjSkCEBL1CrNtGpbXADnbDx6jPznWG7brXT",
  "key2": "5u271DKju9VEESxA7yxduB4w4zoBHVPnM7J2v4EUoMcFhTe7uyZxZ5RDXKrxbD5VR11NSaAXTX8BEDuakNW7N2rt",
  "key3": "67ER2fMUyPNB8TExVqqY1cncGsib1vXB3dXzuLWDKJwKurmSZ9Sd2mVogpMmS9dFeeVRxCsHgrVa5Wxa8ZA2xMTf",
  "key4": "2TjRwLjKAWdb9nTonvkDt4QovJxgFVNBbrnK87sYN4YPr7pyrzB49qht8EhxdWkNj8Y2ErbTm3LSUGB312xysXiZ",
  "key5": "4pVBDUBLgsMKD5kv5DuchBkftSY39AFfLAKyTSW1mE5tDWaCi6zbVKXD21r9sGvzmmBkHmZVBzTUVvEjKKH3HCYZ",
  "key6": "2u94Ze84TZmiX9WsLtFT7UgdXV6CmpSgEXqVLzPAprnxNx78eetG3kg8vxukbHQ53ti2nATNiNuYwsfJszcKjUJ8",
  "key7": "25WcL3rbYtktc8LkCnEX8uFRdRF8WCpUNfBV9RtDEVxzo6wXu8Rtd5J3jM5rcm9FJAMS9k38KKwG9CsL6LEYQiSS",
  "key8": "2w2ZhGPpCJHNQ4pgawn5oWc4HiMwuHPPCGcvzac5yPpoByi3RNgUAJfyUBEXDmckKepxnqnJVWij38xYhvt4q1sR",
  "key9": "Zvz8ChZNMTydkMmLzVKKkKcjSGSoDqZ45qBR5bYAmURkMitFCdRhJj1FPiG1JJuh1vxDeffbwF8uuKm97HBiXs6",
  "key10": "kB2pas5xj5BSQswU1N6d2y8QD6uX1kbkihdPNzrdXzLtAwjnQUfargz5hnuYzLtWDJc9iLoo6yhefvVQrF8XVCH",
  "key11": "5LKsTKP7D4aso2BCtqncAiRGNgDLuEFcELGr8WC17AwkYnikJ8iJdgNqK2sGcjxw8iNfR7iHKqqqpn3HRYqgACpe",
  "key12": "31dMeeAM7eJ9npXZE3XHB1xgUYAebuM4vS5bS6JKx1mJbp2wbQFg17VjETX4LrU4QQP55cfR9NvC8skZPzb8LM7E",
  "key13": "4VfnjzYvbnT1gtjJPixUwZxuCdGwcr85pzjeE2cSMCFDKAsrXiwLQ3EgH1Cjt6CKqcjoudtbhsNk7jnL9sYcwqTU",
  "key14": "3mqCJ2uXJo6eBTgDZxC9Uws51hCUkUfQmqHzPXRfW1z6xXsxdhvicgvD5FK61WPjXAomJG3QXuxLtfeEVLTt1iEK",
  "key15": "4NnJcVAtxj2Z8z2ceCgmTj8RHSTigbWjfAp6CXqqxtRiCov1W51WRvXfEK9yKnR1o6FAsgT5e87z4i7MhC29t8zV",
  "key16": "Xgd32uM97ZUYNgXgWGhq1xKG2N3NRY9hQf5pApyMMzE5Lrz6fanmDxfVXsqo1hGGXd979kCVYHQkv6hdD9Nx2G6",
  "key17": "zE4KUCiSai5g8PpUDWcpzvx7ihvVzBCA6NKDvafPC4REVs65Sui5kFSE3V8dnmcd5jKuUJR7N81mmoQdsJt39sr",
  "key18": "kXG2MZzJSep8ZyryZCZFuDLY9MnUkKX2zx37mFKn6nK2fGjgZCeP3yPpjpDpQUWukiwREVb6btPzBcHjiob2R13",
  "key19": "4UB4Jo5o4m8uFmnggnE9NdeLyHgv7yxeXqVHMDKwL61UbrFBMZ7axqyRHiYcrTnpVUT48qsUnNfvdRQpoW6Ad2U7",
  "key20": "4bR3zKjxuPUh6AYdvgTBBBYCJLMiV41iEJVMHTM1ZzuQSh8VjLMUEPfv4YbA4NdNipo8nmnTy3L6iw3ZGQRvj3uF",
  "key21": "3nCXvzF3bPfhBwnRv2bSAyiPcTFVr9HQM4fvBDe3FZEnFRV8GpgHqZW8P7JYNc5w9DPp2GBM2ka758g74ydRZgYF",
  "key22": "4awrmqRjoWUjH9SJWoMhBui8tp9NfCgtaZLPcvrLKJA794CWZveXr9XXM98bhzLLz9uBGwbY3dWb5DDn4EWfZtuC",
  "key23": "3Em9nWNtTgAkc5B1fS1seANnJQnxzB9Au8Ksh9UFbbpdF2NXEwgAGDdHX48rBwwne1pwqVpmkQP1FPM4eazYY6Gb",
  "key24": "4hxQW4SCKpkDubeQiCkoZ7FSYytT1tjzrcqkTAbf8jKVEnoNsUtH94VAWG9F7iBtfYEhWvAfqugWDemwnqTEJvwE",
  "key25": "47rtmJ23UT7cxoDcyLEJHunsL2mYzon5onaZRdys7mYWwKUweCBwS8k3M1AkszAmoAZCJpQy4infUUVBv4dDZzCA",
  "key26": "3R6YE3ka5wLdjnRocBZ1gmSwgmbXfP672fLDdRz8mz9oJeZGURcnMYA9V9ZiNE64nrhdZTkBEf7jigpzUDc7Axy9",
  "key27": "XJWqqRZEkrvrNaxQXEzy2VuEE6UiX5AWbXL9jhdYwYFPL3MJi6hSmQRfWohDg8cku39xu6H9Qg8bdeTnEx7tJyv",
  "key28": "5gMKzLMw1Us1qsuBtVTfJjHWnKpiej4m6Wy35iUGX3LZpy2i1PQtDRCsyVStzcJshYYB5hYgteA3UrZ9oNtrfkdb",
  "key29": "49tmUM1hCDEGWVfcW9CFiZyKrRbFRzDsReCFTgh9sNE5hEgqt5Jw48vXo68EhCRUaTt7Ve635gsnEySLpz9rde1H",
  "key30": "4Kn6sfke7fPm3h7tghPaNT8nukMaj3ZknJi2Bb1fpTajT7HgEcm2LAwAZkxtszpSSCwLdJdz1PU3TKm4bg2VsL4m",
  "key31": "2PhY4qzxCTNidnCUHKtvGfEEjdWppNZRgfEVz15JENs2CLfMZ3Wa1apStfHeQtgzMFgoy2Z8yJZLm1fq6PscGRp8",
  "key32": "63uy2jkZuDSawgSbuLC9UvCgekZVXfK13T3KMYziqk6ZP1peR2ogeN5Z54a8tiC2GKubFgCTFjrJt3pQGv4KSrqW",
  "key33": "3eaJyj4yvPmsa1zj2sgNU1KdHmiLXoVQdqCkP1KwprZZC7uDzyPZsFMuATygtLC38ZMKCuHRhpaSwDDQb6CJfoCJ",
  "key34": "3ci7Ta49zUaA7UY44eMy2KeiCCBAp5uAQ8LPYGw7pJSoKzoEV8XB5mqUB7D5PzT8oD7exkT1STHTZ6LxvafFAWim",
  "key35": "3YUefZVVSunGvvbaLX7dT1VZ3LMucyGWLiyejjobbg5rMCg8uTHsB2Eh2pWBhZvgfA7gWVZPR73Rx6qeuztP3Vvy",
  "key36": "3YhtqfTzvUrC2xKj7nknVUfkn1NFE86tgXQ5Y17SCrCw1nAdU5GNBnB4xfJmHDAigovd7GhdBQe7Vpv646r3P7W9",
  "key37": "4Xwr91vpgiQpZcuLWmzoapcqC5HJVjR3Cm5wsFCPkTgaaP4vdWV6vJVSDjscotTNf22uiTtgJWKmfqDsQpy7Hse9",
  "key38": "4vkQ5WS1x1z2HqapsmZSBhiqEDYBysTsLct9deZErTpVbdQd7qYVZrLTaq5PYjKXQt87ox11iP2A1ys23awKJJPt",
  "key39": "55zp9uzUtuCGGxsR6BYZ8nUgPdv8mxWZ3HDTit3S4AGhnSrdayKBYyA9xE8yR7ti7WXUywixS9opTYasKTv7PNqX",
  "key40": "633zfDHsUM7o58Yu6f5dRA6TqshC4ZrxPzfN8UMTQnGvJtnQSrXoRpE2CDPV6ajWTKmeiiaeV6hjtX24JZ95jWqL",
  "key41": "GsYQSLRMhy6kraPAgXcih9aKPD3RNSRCtfhZfM9nYEuZEmSxJkqRqbHvVP4YLfHGHwFbeKTuU1A33ccNnYutfoM",
  "key42": "4eusxDVV62vKp3otjiqvf9qRPfyJfPC1xmGSkToNWoGVJ4Mb6n2urjLkGbAaWtaDJv9MMvBXq74NDzebY7E3sCs4",
  "key43": "7v9M3cMU9dvmm764k2QJ6mz2ChUBTTXXZgo7ZgKkxvmofEmsbMv6fyjPxUQc1C6xLCoTbwVaZ1i6346TwARisqB"
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
