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
    "44xd2Dqws3qjD4AEp4BBwgGzKvvk87eTMzkSTNE3EJiBSvd2vLj9xMY9Ljwx1aTuzQDthjxRDhwJxXN3i5ymUR3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r62EqX94ozPWPuUzUVajmYGSEvDBGMtmb6jZ1YGGM2BbmKDXfkdRUvw8dp6AXkaj3x8Z68FR7dNrZcwHLK2dKYQ",
  "key1": "3AH3rrXa9Hqo2ex4qKUtS4FSpxdozCXCuuMMuKnSq4p9TqjtPvWUQaeLyZ8sLyrCCLjn79kbNy9yHH4xkeEHei6R",
  "key2": "3jLfHrjFaHonEGD9VZU7nFfk5GoYS64rSWPwSXLwqw9Xug9SY34pQz5xh9aLEn1pP6wEr1SBoUf1qtEap9H5HBb3",
  "key3": "2YQmXUTJZZZ4ZFCMFeaj14GrxJWhomX4xsZaz6CpnSfkCg2t3Dc9XcTYwpXZ97Wu33FqLBgEGEoBo2QRvnj7dNNW",
  "key4": "24Wv9qdF2bNnbC5W656iH7hcQc4Hy5HedEKVWzKfqQFKW9Bpz44myJHh4Fp8JD6AMcfyJYHoRZShxVzAAjwyZhcC",
  "key5": "XhWURkTcsYQv9sd2uxTgGCHg8ryfv5Yu6StwVzJNvH9F8DU759d5xefgVinfiC9UCVZkvZ2SdPBqXqq1T4sYrTg",
  "key6": "4yCjokd3byUZGwW8Jznbs59CSfy5gTWzgYrfBpMzBnCzBJar9Z7HAiqm2VFsTPs1jBkBghkssc4gp6tdQs76ZmJM",
  "key7": "4ZNgfW6syHEySsKVay8GYsgxMgCBCzp4WeqTzmVdNkJst3jS823sDt2gfk5arWLPzm9tyDaWDR2x1zQqoaEytsHu",
  "key8": "2HZmKdhiCVF8qcBkfExnnpo9Z2KSCRWHyTiYvBLipdXY24uPK1hccXSBX8reXz6EvjTrXbJ1wUfWR3cifKxA9PXd",
  "key9": "eJfjkEZguS9uBAw7dmMJUf47ciA37PMVTyydbVfZhmtpRc2irkofNioazEKZvpeMtHxPgdZatL43GMn3CBYuwVY",
  "key10": "29RJqJdBck7dmghBSrXggiai8Bc2UzA4AZBNDAHEW1VyyW6HD9fP53HFxqisZCjkr6r6gi7JcmmYj4zdGxLqfqYp",
  "key11": "5tJ5tgkJNticUA3q1pwGPxPGRQQfcgxUm3YVUXTv2RNKAY3EhkU6LVJ23NjHPghSrwTiapwTwqeFtd2wrVSX2oDK",
  "key12": "2WpriyNajuDJJ2DXNpsYg2q6LSbhgHWsBP2bepr529EiAGy7B6ZicWoDjHZS8X4pLUNh3ppkqN2VoTDH8piFJyVp",
  "key13": "5p9UPECi5NBm3nh8uUDSfb4vPXaXvWMdThQdLFZRuRToyVG8hzpe5aYNPegAbcDtJeJ9WDDyNNaD7HrEPavSxt8E",
  "key14": "4dy2fDLTS4UHfQaaHL9yTMcivJoRYAA2xTZSfuAxroZ3FnoozNswbUFuuE1HZDah5rdvhmb7qNmSJb4yMbUt1s5D",
  "key15": "47nNvNaAExANPcuhivTPmRyoSnssY5c5tdzzKHRe51Py8ET1UekLRaU7qjTNAwZjkQwvgsJFqyTFvSGscjUc95oh",
  "key16": "5zMrCG5qU3DaKH9wtngnRMt8aS9FXkRJ8F5kfTVHhmzww7jXgTcGPghXfh1x5fZwH8ehZgwYy4RB8tsu7qfLj8iq",
  "key17": "3zNAWFftJhy1A4MSjBwqdv9TzNhrYHS8XpksN4teerVFqU59RTao4aAQ1yaTo5fThyex7ddGkZBFb4xfaefMG1bi",
  "key18": "5BerMBU3hKNxUwxWxCoeDEqRPiDoMihr4cthH1gVhARCm6QeUFiwHqbgEsCVThdJiUwhznzhnUnd7RZqsjQRix6g",
  "key19": "3bNkkZpiCqnN9Db1HFTiUiYdUbiFrXBdy99hHUWwHf6KjM9miRXK2FjrXT2XP4mG5iytUZERyTEjpMGMhqETLXGq",
  "key20": "3cuPAeBk9cy9yi7yMFgSXFJ36ywtMirTrBdf7BP7a8ZxkMN6DP6PRyBRmqTVXyPcFyPq89rhG7mLcuKvmsubbqo7",
  "key21": "3pXAUJRcNXvNqX3jGxRMhznEcPVFNCjEq8SkN65yGLJXGjJHSezyeYsKfu4yAF2dn3nNM8xVWxbStxPAc2sN6PJU",
  "key22": "2UimstiRfW9qfQhPAUbFLFkTVNDQiWKyCckpPKBQPofCdvkLbwKJaXdjqcAp32C4gWHm8cUqpmso7SxUEZkoYRix",
  "key23": "3QX6ztyeYkMDSthcsL4vPtMY8mX7Wzv1sZDnbFT3hdueHYWNRGwTYX1rWneXKn2i5sQjods381jR6LBteF1Kckv5",
  "key24": "5jpitbe3v51Xux1Wp9D72yvabGxKPS1YBHDs1rTdhKagWBoMQaG51yiV66y35krauD59UMMhHwMwnGfj7k3KdLDH",
  "key25": "5qZm9SvSQnGM4qkKmcfGqhSMTo7X5TMaUTcyYT89zJn4dbNCnjZoEodsVjGtVmsJAN5vq9VDT2z6VeYH95JdPR72",
  "key26": "5dotsJJafPLZQZGHNQT3CCizrw8MNsuZmSh18J6nS5xGWE3wkVrVrtsAS4qABvEcN3v66fzan4oDw4QbemNhgXtY",
  "key27": "3vmsmdSjLSzJpciAUjTYABM2K9PSXjMepxBoi8ocR4dCKz5AnLggs98qY2KcjkD1RaEwDzyCJ7UgMDnkVjvKAzs8",
  "key28": "21VaxeBYeWkdtxbQ1ygkkfU8SUgcCD3tQ3EeoXKC3QcEi28exUETArhbMqfLMRM8fr2mPFZGnEbpEQbwnvbrNNPW",
  "key29": "5aK6rVpZQccnkXs8owjjvYYAsNQcPXgedXhVi1ngVSzLcVzmBKFNDQLFEuHtq6KFtegXR61fYmr6rtZGkgwQNgNK",
  "key30": "3yww6Vrc26VpXfAjkbU4uT3xYRrs5VJW9HWhoazLAE8mF4B975YQqqQvrM45zKmo6e2phE4LaUvLEvZfzrH2zDSb",
  "key31": "2b2WKitX64SoR2FrJPdMJb8Jc93itPnNJpqREkTp1sG3RKnL8KdDs5QYvzqSU9NnXoWGxbS2uDk8ynLAWCwTxDHY",
  "key32": "25nhUALmtL9GxP9oSTsasjx7uJPHYMk244ZrG3X5T88pEuRTBwud2Er9TzitwRqTjMeAYn8pmwSr3j7TSuGJ4SUZ",
  "key33": "3WwvXuPpbVkFX8LmNdFgccZXYow4WC7LKLaBsx66kd3nzC2GHwtYWrDSKbHQKg9B19eHm3MeSbprom2YykntumYV",
  "key34": "2eABxA5N78DgXKd81Z6V3tE6tXrJyHciZRkdnutmnbQ1YJ1nNBCSbcXSwJaqZyN8yYWWgyBG9cwMorC3WR7AJC9m",
  "key35": "2Vg6bNyxyYGj4HAR4VsY8pQoBu6GqMN44SnFhYSDESFs1WjaSkPQFRBUegkKVFpjbkgj6X9Ehckkof4XpVgfH4wL",
  "key36": "PNTVpozgtSNWSBseLTMsV5mLzd7kBm4ij6vVE36WoY3ju97hVSXqoD8AvASedgS9G6JqU5NWP85rTWrgAmfamU8",
  "key37": "38nMCyBuUWAFDd6c8GCYLPZK56AFQ7NaMSVfrKmxxzRfry5VnV1kBjUdfAgJ8mm8HtX3gSUp93sUWAKapBUzXTpz",
  "key38": "65CPwSYUTqPpngNs7qrrMBSW1aCVXvKxicF9kWKFevins5rUAy6zXTp9NNYWUJrsz8FVg49KE2jGXNpiQHp3jcV3"
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
