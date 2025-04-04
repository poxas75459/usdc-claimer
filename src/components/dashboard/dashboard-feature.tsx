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
    "3W92Cvr1zWfK7Pr2DUNfWYUzGFPkfcmfGcn5WBBrQCrYgLgSGZcRTskGun163LPv2Mq5u2cPnEAGVfRZPtePDW46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7qWjq1Psvg1nw7MartbUikNdWex32UvjB9cZJNEG2tuy1EeaxNDvbSwT7NRevGDSq5BQC2s4vQUZBjiiZGvhmJ",
  "key1": "h6bsdQ7otqhnU3WW6ydYudBYhiEr9cYJbBdECX4BGKMtiskGNhypY84kUMcewNriFa7fWYAmXw1C8J7pCcRrBhF",
  "key2": "53EiWn3C8AqbKpCGowXLzKc87Mhoax6yueNoGv6HUgJcCE53rWN4HBjzxeF26sp7UPBehvmtKPAkktTWDuQ7Tn99",
  "key3": "5SKP1s29FRCeAUQLjDG1JSbJSmMVWew7qexeKsNaA6jhN9mCWmYHPnEcoQHFC1Lq954kTuPyaFPJFwHczGETajVf",
  "key4": "oCVYM16kZTfqJUh6GQEmCgHSrvAB3aUKwvtDKFv1ranR4sSBqizX2UQ1Ty6S3ofeFHHsqyMffdo7wVdB84uFnwS",
  "key5": "28upqhvtAMpHJDGQXSExoyeyYz2X8pA9BMji2yJtaJMA2tM11S51PfUwycYm2amkWQShkmHnUCvEyncfRW6ZueEP",
  "key6": "ePjMvS5jhNNYKj2FNB1VPgabCX52ZiSMQUAYpzo8XNnPAn6hDrEtWRwFbTJbQEqdMBA7RVvfsoe8q6WN25zAUSk",
  "key7": "4KYw5DTQJhBMSqDqyxyoTLA2UaWABMeMuM9sxYjSHvgQunBE1qAnGdDBUeEgXptQovMeouSvnQHQXGNjnnDLjiRc",
  "key8": "31tEvZmGEa9KHW8PQK61TjFBaqAPnrKZxbJH8TBpr2tH2sJhEzHQXqWYzmFhH2TKjfv7YpJQFcSxRYZLHt2qsPF8",
  "key9": "47nztMr4q8Xs83yGxLhhW2vXr5aZ38xiMjSMH7xLsah2rpm4UK7MoGR5xKnj2yGrnCHUGutKcXxirWCeQCeEjvSH",
  "key10": "2KEJn4CGMsZTR5TQiHuCAPvFH66jZEokR7LrmNncjczXrCbScUdmE9Q8fPqY81JhQZrN3DFM4wkP1ofMcUmFx7xP",
  "key11": "ejrtsNX7ZXapAYThvD7wxMMLAH4UZ9NBL7hcWkC5TkmVTLHcZY2BzFbtv5CsyKAENBZo1SekJqZaU9ySdFFn1P3",
  "key12": "2SFNP2WDJfKYao4QW78LZrnQzEgsAqor2QpBx7oGiyqJMeCP3yC6FtERQK9gUjQpawVbXZ6TmgwsvpYBtG9K9PXB",
  "key13": "2LST6K28ZgqAVRqYTxBNUr3EYUdkCMMAW26LpSn5RRaq1ufWZrVnTV16sYkM8rTM8K8D7KYjMtmfnyGWjNd7RsD5",
  "key14": "dbqcSFT1W1UHDDdZMjaXk2AUqppnZnbaB5xmrTu75JjEfLXW2axK55owRGqVcsCbg1K5fPU38aUr3Ts7x8Amgii",
  "key15": "5bgjZvibFixjPUrnxqSnzmgfwZpmxbC5RReSMWQjLyKH4FU8V3Qr9V4LmPd3KNKuaRZkVGKWjxXRHWpGnmuzYDh9",
  "key16": "3xAZnwpKE4EBadUDQ85729GyvhGWh92VXD8SfHDgGeNQ6EoFaFphhxF9nk287DDR8EgVFcT4E51xyX2EQ3fL9J2t",
  "key17": "25UKanej65KfaPtPmS7CCYyq7akZa3iGsLfVnz2YzPHthpv5FingYcvmCMKrpKskB96Mbj6Am7k83mLH9mSBNyQM",
  "key18": "569MxQythNapcmxvsLUqTaEei2GHdDgmkGPgVXQP7v9MSHq5Dugw6G63JDHgofibqmS7cH8SWgYhFtsVHeSgVrZS",
  "key19": "2phcKYsQGd3BeajsyzRXUjKDvZ11VF5VCoMHEai2kRufhaDh9Ec5HRT5xW2xQ9qb7CPfwSSghMHC5oTdvgeWDuie",
  "key20": "61GD9Et92oACzNUKd3DbP8HPpcs7JqS82Lr7kYa3AoD6jxFJe1PqiyvskCJcayQMcFSjAFJLDGuhcttrwZsfoaiW",
  "key21": "2yDDiALkTeE9N6cy5pvCQ1NAVZ9oknEmnqX5vwAiwu2vX8Yrv9J7xx4SEHQvMT272c9BTbjz3nRxaZJBSqeKcYL4",
  "key22": "4V9wgdb9DNT94jPx8sJe57LYnAeAfbgC2ZRfniAnzpr1VDREd5kY1GUFuTTZSDjWwovNj9Y2nW7Yx1Me2M36apQc",
  "key23": "3aUgu99NxetJ8i7xxjhNS3ZJKaZJYcTrCXkKhVmCGfEhsbTBTZQu6VFaKDDZ3KsZ2aUs2FVfj3ikZhE88mmvgkEL",
  "key24": "YyPZcm76LFer1rTqZPzGQp6RAooeWA3GrnJjXAFML3F7wsgrsBm3fohu9LtdB6n7wZjU4TwAQXoEiLHkxd5S6Fc",
  "key25": "eh2fW2rbXXbM47Ls1sVe4pUPziUhnEPL2aGkcm32HWEfHhgcCb8uUL4cnC6zUnSdwxemRYdVK5rSsMJiwcY3x6y",
  "key26": "2Gd47qjBkeGXHVT7NQYMrUbM2bXPV2SxzdUxSnJaN4vGDGw2jerwYFmvdG86wu1S2tyrEcnWEoNKNCkotTX4cf4y",
  "key27": "5imhVBG5JCp9vWoFm8u6gTsMA2bhKhhiqXCTW225vPoC2ZHW5y1oWFVbmq3uaukQCGVNJVes6dTrwbQgojxMJFtr",
  "key28": "GFKz12hoGp2P3oFHd27oWrzKjcgYu3rNdxF7hTa4oNdDtDVrBouH2JjgdV7jGfmh8xNAgESAHk8PBEKEDZQRu67",
  "key29": "4DpFkP1Xit5M7tVUHpjT9LqKPgnN4pYYonZJTVLrk1CxhQkFkUdLMqDjijaaDvMVRt1ZNEDhgdn1hiuQXc8iKZww",
  "key30": "Ktsvqr5aTkuBFwe2yiX24QqhT7GucRoBz1nU9jea1AJu797F3FCtu7xT7Y7athVpf3HRZpEQ37StP2CgLJZsAxw",
  "key31": "e4uPQDpttWyjBytXDSDcNJw9KFCKhbD4g177AmzWmwumK2Abd2dH7Y5Fqmk2c3DJYGYF1D2LT212FMWsCz3zQMd",
  "key32": "5UobwrRyoiWtjrTAtqZCPAN5LAtFKEejfnikhu6mtNgioaratk862KgWbyucBWh79RpGwsHnScn3eEYSzWmUoTRz",
  "key33": "k3Fe8FRm8Qw9jTBicJndfZEo7HZ2EUCSqSXs3T1inJZXDYrsefgYVaRt8ytMqVyWNuCKTUKP81zXjdWve5V1f6f",
  "key34": "5haWDPUbgC9d2vrh7cShmXJCyHHnkyB2Qobp3yjfp1KPRf77BmiV5DurAiFFQ6C22DLDunXnF7fe8NkpLTQZFkrb",
  "key35": "5scT66gjUB8Va8uP3GP1XyYy2eJ6pDxYnnwsgUDAfNK8UxT5evjCgqsWHQxiLVdLbHfsmhta1KNzYdkzBSunnnWY",
  "key36": "4YxTaRx57crJmZkBBjNhumWJ13T1s4Nzkq7XThe4znJ6wEyhCkoYczftpJcWGwN2eF1JD9EgLUavZVy8DZUejimT",
  "key37": "4vbXbQfNNEdBfvPf9gebHco5iVM58aL8obXo1DKwEDF4F5V9aVsS28ULNG7o2awviKWGqCRXhMDaLR7dhJtMAJAK",
  "key38": "66Nh99tz3nbtmVinLj6Lc8i5sjf6Bdu35e4qbkdE8SE7DUW5qfJBN3C3s6HtqX1VCrqZMddUtjhhrtYvfma4o7QR",
  "key39": "4wWwcQPSyVkTXQtMuJ1oj2B35MrFAcfpA53aeeaNWntp4t4pP9QJCZoEx1PuViKbeE1ioroZ3YCw3fb3hzE6mu3E",
  "key40": "5xVPVFdK2oC4ErM7kKWHrb3Yi3LZwqedRfd7fDNzQvezjPnZTkA82dWUocd4ZiotfdHFPrcVEtbsv3fpsQw9f6xi",
  "key41": "2e4qFQNFhRXm7JHsL8ZgjU1zL53oxibNAUY1oa7rW3EZKvARWtHeSZRd6uw4bGqknSH18BF2mvL6nBoeaT7xrMtX",
  "key42": "2nHBrYzzeotBaBXfwupZUc7YcWaRF1hvxafoQ2SwszkE9RnAU9sS8qWmh8UzQfgKcS6pUE5aHjPWwDVNLd7YsuoL",
  "key43": "2J9rVMu7FvfA89Y5aUyvBr7ttWRGJeAj6AnBPF6Ez333UeUr9Yxyowp1DaXdouoKvesR9Wmh4sRsZkqk9CWd18UW",
  "key44": "65XvYe7gKUYDF6GBgwY1ZjeG4ag1g3NWj5WLsWQ3kpzvEUskiEDX3cPYkeXu9eWBAJXGS1s6fYvvSix3fdLkAYtP",
  "key45": "4WbazNQEBGRnpRY5FHPfwY9UaRYKepB58CX3BePcda4nQTGw5yLNEexKsZVL1q4nGSiLEgee4ehvKqqg4ADRbVsE"
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
