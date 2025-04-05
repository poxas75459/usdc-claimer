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
    "2QBzZEVwd4gopkHGbkUH3cN4DiGJvwxaCth4gouojMBXM6wpF6oGNLGtf6YpEyK5qysBACH5nHTXDZB6r7JEPrHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2673xTR1kyLVNjfFrKe6mkpgLEAJB5yy2MxDKh8XiyQFFw4mw6AFbgnz9TuwQivQhLaQUxD9NgtWDUQPvNiD4teS",
  "key1": "4tzqRcbPMgJ3fv9eivrEinMiMcTi9ssEYe7sWK6xiEgoJhnwSxkcrUmaaennStvMJqUWo4VX8t3F2WN5morfAoeA",
  "key2": "4FgCqtpHtFR5qKJhEKAV8XRVGgviVrFVRTUzVmcpJ1pKf9NDwkaQbKW4sReA8p7j1tjrCXVUh89Uz6hggiY5Y3gC",
  "key3": "2H7AQhqUr64bRkHwWXXwGKsG5nJKiF4651cac7v6QF9weheMmTRbKeVYAkNombo4qt3Cywau6iPwDUd2a5bVDEX6",
  "key4": "4qBguv6AnRg8UxWRjjWor4qnbJvLtNeuxyJYDsxgcXcBoHgrbC3tjMek6YRuCdkUtFQ5at6ZcZRsnSZx83yNNBDq",
  "key5": "24f8GWH1qYrjZnQsE5JWkZen3EMNGwz7azB3CzUhpcqE9QmNFqoQJh6e7ZnyT5sfNF9tdS9a2Dmptsws82CJZaqJ",
  "key6": "3CpS954HGYwFcFni9HrWWvgapzLGX8VoYUpLkPyaJZNHmhSY1hCxPqpPiqhVYh8ytyPZ28T65UT8ro4KvGBwgzew",
  "key7": "2nFESA2W5KhEq5Ep3hHhDSbjKSEH94DFJ7721p7xf3AXMSVnd5xyvwx6FxqY1dU3FqgR1wkXtwLXNmjWV1V3f58U",
  "key8": "2KtyZKMcsjwMMK68J3MoWDouhAxJy1HFY87ueEm8DMSfTtMCTLuCssvfAoaAbmoTaVcVqByyrt3Was2naMzUj2yF",
  "key9": "4wSr26PVSx5FpTE1G6wpUn5rqzD2REbbNv1QDGGCpHSVV7tcVkoUW6QRtRsHx7GKTgxJ9yMukKXJJBk2xPRJ8oig",
  "key10": "HoWxzxFShKm34tGQJ394nYc8Q7TPF1a2wJkVNFs8EUByvjnCo9XGmqeXxjXZtC8AgD8rdiHby6NYXYGidQB32UM",
  "key11": "BWmi2b4n8bmZtM58hz1owyDtfKZVjsf6mkXkC5CYEHkycaRrX3ZVjiNQ8rhdfHTHvrGogUuxw3wpJqH2fS1ciHC",
  "key12": "2DFeq6W6NJSstEtcPniM9wrtXiFFC4baa9VJcmaDCHur3qmHuPppA8Rr73Yge3QkPv4bbkBB6GxZviHTDTpQa8Li",
  "key13": "2eTHsWpSx1XwZXS7GWvSjPcWHukhuz5SF2KDxfF4xLh14VbkrtH6Wbj9bwA9ykHuvBAobDYU4hmB3Qv2UV95yatS",
  "key14": "3HQJU423kSEJBXiXUY584rG7K1rSgw4QkbMBWVffcm8WhvmqQdV8me8jFw3LgcjqCkD3h9RTuWK4M6bTvcHSTyzW",
  "key15": "2D7BpSCSBgVcMX1i45LZafVEwAZS2wF58f1pQV6miK5RZ9KDgEiMjv7Jd47xx47tyPipCc5ThMBeseqSBL93bgh2",
  "key16": "5prv77xmBGetLzQng1ZsQ8josWf9wVfAk6fDymcBDrL5xka3pQr7RB7CBYQGvSd5AHSfRqXtN23nm8eKfswX7S4h",
  "key17": "4utxJRCSpuDhwy3fvj9aYnQCkRHiziU52Sdkf7nqQaKr8JUhWUaUgAKhqeiRPxuV1djnnbQxUCtyrSx88PJN1c8D",
  "key18": "2R1S4VXw6RasF5MwBYXeCBdQVnCGHFAiPQKsSYNZ1gSKmPeZE8cmr3zaa34CfUTKP2uFfmos5ho2SQC1YAiknELn",
  "key19": "3jGo811f83ZAqfJSHiroknDAnrxF5QXRZiYnVm59rnziRPRESaCQyT9ntRQDde7PWXLgAnBYg3QQ7hMt7fcoDWAW",
  "key20": "2E3JrcYDZzNMB4xG1sGVpDGBi9UBnpyqyP7QqurzU2k7HQVKqKt1JDe8mJ2cy8SFVD8Hrf3bXFvRuLwNaoHtGKkc",
  "key21": "4oV6aYHxjkn3mnUJXsxGMBQsLcFkhqKayQq7bpag57XiupnpRFu12ULG5Ww6TqoEeotjSr3VH27wkArCQDJkckxR",
  "key22": "3vKJmrQoAreRnF5xKarMPpjx3j9J8DteGiAR3Naa8GoSLc66547jHo26GyEnzKQx46y3H4z74jFjt6ECBhTJbH5Z",
  "key23": "5J2A6ZhSmEwivEJbGgD76io5cC2JKTxYgFcatWVt3SohhGGsKNrbHoT5cVB27RUZXdMuUxyoGNLcLZGZgcnzLqm5",
  "key24": "34w8Z1KdPxPnJspXhDPpLQbvFhfKVuiF3hwDisfMmcPvZBqUHiF4pF6Lb8UmHNFdvNXEikmUPFNKDi7JYmsuGK4d",
  "key25": "5PquC1KL5eVsSQPsxDJizFnfHMPSvcdVTpjv3GXKyPfg6LcwnPs6gnWBRAPMWUbUnfDC95bPYLQbiVXEFTDFdTZQ",
  "key26": "4w2DQfacvb9j3UDC7rrwsYARLPxmDKrar2dVVAA9S5RusGFdRprnhpma7pW1EFdcNzqFytkbydLtMaxgPxeQbSuh",
  "key27": "28YMkhsvgfF4akjnKS7moK6KiBmLnw3ckTA6rAhZxDuwgHBxoudPcS1Cnv4kDA35inmcEYEmqnpKTm1UKW6jhS1F",
  "key28": "4hnxBLSGWcwY2CwH7LbtFRX5r2LALLnJnmFn9Yo6EoFSovn5FvNnjNtLYcbAJHP6YUFRzA5KBS6KzDoKjZhzj4rz",
  "key29": "5gGmU4dsaA3ktJ1K1sRdCvhGGSffxQ3PCLN9TWxY6F5qZo7GR9QZzb6PNpkbZGGaTt6RpSissRK64bU1oyo7PguM",
  "key30": "2TugNH8aCGxAaQBgSwK6mhK6oR1kWhaZTByXJhMz71DVXXkKppzq3tLgyLuev2uKWwFi7YkpE5ZuS8Fv3Hx7SvYk",
  "key31": "38CQgtbpNUFjqM5GMwP1ng7TcyDpWTKF2MHnJzZvUU6m3PSysAnGoBUkjhswQxta7MS14LPWkHjvevZjMg5sDk2W",
  "key32": "2nFaV573LJeuiXFJRCjnpxCiNDnuAXhzq9ro6P4fmSCgYs91DxbTX7zxFaQzRKURbwhKKYGwfHbJpE9nQ7EjC1Xr",
  "key33": "3Q1WqaAHHguP5uaFFGWt1eDcezefHySYC74rAdBwfM7XN1NVCLxymtfhkJaFBY6gFYtDFkDVSLkTmxVozkSfTc4v",
  "key34": "3LoMEnruT7jEmGxjFwEqde5uVaJZZodJZq1wJz31e4G32mVGE5QU4cwUZt7R6EdtQ8fzswEcUZiBN4kx43DCtZn",
  "key35": "5XsNGfvs8PweJtLVfPDf3kh6TpbzY7zDQDBd2JTbTB3JHG1Vh2HJGrj2fPXx7DxuTm2FzutxNuZ1Tk6shZwjp9Cs",
  "key36": "31b82mo9aNL9Vq3PNNq9aqspn8Z7BpdeSENxweqsC7jhJNExi5YeGVxeNFHCq4PTH8vCg8jkKHh51UadU1Z6ss79",
  "key37": "3tbFLmzfYwsMVpqC9xn5PcceSJNyx7SjVrKTMrvsN5EhKFU1wpiJmKNWvFwcDr553iCWyjXbnpgVEW68bT37bgmn",
  "key38": "3Yc6eXBhUz3K81xzMXF43rfm8wZkr9zRrPAUXVRu4dXBAsn4LcwS2uHdQQwRSnWML5iE9GNqpcreeaAXMdAeo5Dr",
  "key39": "3zgHg5YFkwBKhwxqiLfbSmXPL6BK5ni7YCH1nsM9DSgM8qXHbyCEbe3UyVqKLGBzBbHb19ns15kzuja9DRnZBRcT",
  "key40": "39n1Kh5Dkj48tL9tCKtCbtsjQTxhAFXynCcFHUmnqXJwJj1YKYksxtVVyjTBHwcmQm5Zf3LLnMGihUd9WP7upMXu"
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
