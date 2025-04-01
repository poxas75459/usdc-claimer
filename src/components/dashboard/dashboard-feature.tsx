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
    "5h24BWfUfeV63SLNitohyuJFqwDWKYWh2M2X29P7azUXv7QDGnHgePrkErodyGjyUpPaahw88SkyM9WXgBExX1cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjxMqns9ovZ3pXZdQxKthJPvSszLBN77FexLbRoApRs5uFt4C4Yp3v6jb79YKbx6LmKA1wGry95pqgakxpuSSJy",
  "key1": "4HxzPACtfMpK3YSP2dVDB3VzKJJGwF13EjbbHfPacFFUF4sQq3oRKvjxuLbyAn1EpX9hpZSUWNehMABCxPsgmZ8V",
  "key2": "2KpRgBmGCe5kv9jJFpYGthSCaZVZriVWB6HcHedGjyp7prbJehSAYRPZYZAZxYydGWXYsRcx7jnPDc7EKhLuCVxS",
  "key3": "2DmkqCe423eAnfEH3sbTmhiQs9DgPvF8CEN4GNH1U9oxJhkTNBWN7bXozw4qDh5R9rBP8AajFnqyfMLcrKEYZMEa",
  "key4": "3PooWoCG2di3Kr8Spc7VpNNR32f43iB82Bzon1nssLuAqJB7yj1k3TnPUzNMUG5pVeQGw5ubTpu7bVyPDEhUSqoM",
  "key5": "5xdUAgFzWQLN2h9MeS9rmizWEYdH3SRgAZXYxBD5vsLQwnxrY2oWF9RzBUrGXVzYqnXa5PGBh8pmLTgrrwzrUMxN",
  "key6": "3BYeBYd9EqGewVC7KzJfUPykcNk82pYeiC3qxGFHjTBsQ5cLx9os4vsKVEneDVc1HZ5YmSXFzVJHynifCB3PygzL",
  "key7": "3HLJ4Q3k7FS1qLwgJJSs14M7ky1FmDotzVNPrye2cLmgyeFnSkyDxQiiNZhgPYRw8rAXAsmMVSdyCX3s5kGf2Q6V",
  "key8": "4mXxFYWaWJehwujnt6xYYbeyn56PnB1ycoXT2KBcavMhQL9w3Jv3YrRD7VEn2U8e6gVQmRX8hxZrXsp4wPSuwLNE",
  "key9": "5vdMaA9YnJV37PbxhQq1wyezuQNH9ZB48Y2nq5aHBgkJ2sdPpztqKPxPJCCctTa2mLB4xCtaFUimHQRCJMpv1F4D",
  "key10": "3fAphhDX4GhYD6gTWrtU3LbhFsGs517mGPTVyUduCEds9u5e5SLhyXTXBozowXrTLgxqfrFW2srqphZwMyEatdBY",
  "key11": "4iAkqvEykr4Q3GcS4cWAKNBfPkB5Afdd31puPKjfKj4c2dVn5ieHUTvTb64U2bVKf4rqxq6q1wCTeqHxnxJNJhro",
  "key12": "2aE76LY2WJs8cAHJ1N7f3ZRg1RhVuHX55fnDR543czymhw8XFWSY1E54hRkWymXV5g1xxhPuCjkwedQeqYdoD55",
  "key13": "5oxLdA2nA2c17BkFNd2dhhjCA3ZSwpi7zKMJfCXMVuwYXEoDXn8hhLiN13Soz2qsfweRqXtbcSw3oxccvZPLW1bd",
  "key14": "4vy5UAAXd5yPAwWRTu28Kuyk8ckNeMyAYu7Yw6LVYSLJwJkSSJfwc38t1XYRnt76MCMKjMSo9DhnA1R8WrubVLF8",
  "key15": "4htCWP3SpeFjiSQunzHaKm3oz2nAhEhDyFkEKSaeS6dVRM2LXNnWBtR1BwXsQyoCTufj8NoiMRCxdGpi3NcXUHzX",
  "key16": "45UPmLfh6vDFVqJgzeYmzrmgB4366JQ9b7FxtWwMVg921jnRM9vDViuyW8nitou5g6gpQS1yToC8QPUcQTtZbd8k",
  "key17": "4YFGKWxHeqbmjDqbSAzkUig76U3rJhc6vCre6ETjz8X7A4XBFnM19TfFzB4jjVhJwE8jcH3S2Y7n6hMQpBUuzGpy",
  "key18": "3GA5JM1v9Y1qa4wGc2vwqbn25Qc1d35sd6tixogitHFXfnWDQ9F3em5VAbVi93NqvyqcBgBwKJNQ7eP7Aj8U5quQ",
  "key19": "5BPbFaYWdgBHti1w4Uj7cy7cDLV165g4xuDX4Y4Y72VqvWQTF1BcXVCDCKixFyPbLdeLxRHNt6k655GD2D4S3cBF",
  "key20": "43sKvqvdpYXjVuY4KL7AGhoopWTZSqwFvgwR9YmpBKkEx6hiVaY4uP1zLYpNHiSJR5JupNMguKSp5hmW4QtZ42Go",
  "key21": "21jKGBLaw8jNP1gQtCasKEvb3MvcwVk5WKpYdk7nD2CyC2YjyHripUFMqZiLMRao7auN9zTfRnWw6za2GQPEw8dD",
  "key22": "5dji5A5zBBtksZtxBdTLhXcwbf8v4ZdVKXVY2E6ex8uePFesrS7g2D4uCVGFvdwwJa9jW2ffVLTqf3PpLYTNzou6",
  "key23": "37ALQMo3jTmqYqwLoKJ9PAHKUzAKXq8GoPzxoNzYup64AjbaCPfQbYLbC64ki99eVrc9qmVWnjYxVkdKRGMEnXXj",
  "key24": "3pwGoMFgrCGKJQYdN4uBxjcrY6pDv7hhYEMWz8mufRE1bB3G2bdhXB7716b42E9ZsaLjChQMtSniXztQYCNPdLWd",
  "key25": "4gUTyuHMAe5ckPcCL7ageB1ZD1cactVi1LUWuSHZvA5EBMCr1TBPJ9swhHYiERqh85zubAdGvhu1pcT34HeF4Nyk",
  "key26": "4qEp1F29VPY7t37DZ7jvTP5NK5nyn2A9omqrEpEdYoxL5xy2QH3murcDKqLZz7vWBmL8L2gKVUaGZ4fTSbkjQLWU",
  "key27": "5TrVygswcXW2NWvuNyvU3s8byE9JFNX3e6MTt1cj3U1ndRPU9KwwvDos4CQqvUfCA6HpfBn72B7C4y49DifADGWf",
  "key28": "XCjaDVSiMYLtDyZZSA33LTgbX27B5RtPVyG6J6wFP6kQSs8rKWYGTyP2FjBidqAe6yQpW9qo154CABsWqxBp3cF",
  "key29": "3JxvmrStEveyY3zvEUw857dytgfV1MmfnTgM1vDPKiwFscCv2xRyWhMG8VKjkehfPh5Yrbdy32iVpAXuBomqLwqm",
  "key30": "UacZtdfG71TGBnC5BEGHWzxZET633CwMbmGkoekbuLQWFdaBNgnDt9nqng5D7sH67ZeMTPPXQ3tDcGHGZxenjdD",
  "key31": "3N6VL49i6LZBvLGQpKTNinw6eUyYZ4QMAE1Pqe6mms4oYgLpkFLju5Ncub73NcgeH1PM7k4P76D7QMuKtHEtefzi",
  "key32": "TQyGrCMnuHUZZuT45Qm1ATZrbB8BoYdpxuFRhxEwHeMYpFF1VENL74n9fxgvA3wSW3mmQ13qmmKjbFdzoWN6iwD",
  "key33": "2fQLSjdk8n3u3aeQLPm8uAN99fkCiG6zPrhqDEjPaMgMA53tK53Lv4WFmt5kczynxafc7Bo1W7E6dnc8ZCBVMEPG",
  "key34": "5bD9vo2KWLzDtT8RQgWhCRUvfrPFp2PAKzfNXUsQb9DRhcLt8BV3XWFiB9L8iPQ4g8wSYTG8Wi6Bfx18G5TTTVoj",
  "key35": "33AMq9jMdkPoSANShaFr8LuJ4x71Sr4nS4TiqgVbfJybjfDwSuDTUV9hGRirch1urNQeU8e3NirkKw2ijCdcJZJn",
  "key36": "2DKjoYNhpi5egMzYpWaHKg5JDP6uSW7BmEDvWkJFxzQaGtbrBegEwgVvMnm4twjjZBd6LDNPtp3TJqRGDSL9BuyR",
  "key37": "5iZcRMxdfvnX4ZqvmyQZ9rZTAKasN4UmMzNKgc1SD6k6wtj9zDrxqAdscTc2wXZtDwdFpx24aPVb8ew2TuYdmyhY",
  "key38": "4B8uphrF7Nzt5SBWWpQGiUajgm1cikAt9ZkGv3JXnx1XtEyQQCtKxuXr3DbEPCFzuCcsjUhXa3UHj6funKo6PnC6",
  "key39": "3TgzUgtY8TxorVttrVb3p3eP2aigZjHU9pygceCTsHimTT7Lo2aJAhRMJcVb6MMVNWghyQm1rU4EHJca4K6FarL1",
  "key40": "4E8v9apH169tXAyx8i6d9eN1HEusSWtrwywb7qZQQta8sCAgn2wLCLWn6ZLu3NfSBpJJ5meK8PZdAZiCwU4iyzb9"
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
