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
    "3683DY7rAXmkDkWRaWv94rVFq695vkjByc9fB7pJJ1A2aFRr3NodVMfdvXqPXhfbFS9LX1ZiVWkpmEkmx4LSyHCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2syi9s5fNQtqDvvmtysK1ZUeo12xAXaFHYu23nyMeXip61UFPhAUUxkZ8Y9v8a5nmUJwv6KSXMCCEojQoVv1QtdW",
  "key1": "2UnW97gDrHFY7T5QECQB34KeoArvWBWbUUfwwbqnmuvogAAqLs7YbTvvCugLivLkVKt5BkJc27LDBLKSXDsuwam4",
  "key2": "4QE8stztaRpVFswBYc98Ahgt4UwTS3VbjuL8Bb9fdxdRmYbuVkvLAVVgn4dTaKPifscKbmdDxPr3iVnZb6NVJ8D1",
  "key3": "2GojTToFLuX8Fya844g1uT6ZnhQfrmmHSbhG1ynnfjSrwcPHq6qVj3ovZycNgFjQnS97wD4hTeGoMYRtc9KkgeAo",
  "key4": "61QR4zkbTLtuu8FqwYyQAb6FZmzBYJErWeRTKztf1M8QayCC6KQ7soREL96iBLKxMU1LpVD5FN9hG7XHysZVkWsk",
  "key5": "5egDu8hYQkz3HxhdTZWsQFYS5aty2bwgykygC5NTtWYmDk9hJL31Q7J6ZRGtPzc62chxMz8uAB5ENuSuXjKoFGZZ",
  "key6": "51Xe3nyMoutdwZkPtNUbKavRv2hiCqvAiUAE5SptnzvUCGaLmwKZQR2sqpjA9KfoQW9tpZaEzNLPiN7R2xwJ2TMi",
  "key7": "23dMB4gALCWFDYTTHjs2gu5yqKQyeQZNJD2MskxTifGXCsz5GecqgrYKGQHcaR5ZDzha4x1wiX3b55BW55reuZuC",
  "key8": "5i4x5KTk4sxqbXLsxHBbUFrUvt3MoMG9ANGsjCAenFcj7jxkLPJbCaxmRi8cdpFc2ehBWmuK2aNeiYaGBA5ELdxZ",
  "key9": "2xQxKGTb2MB5qfEW8mV97VykHeZdRmgzwMZgsjYgS8cS4JmZAPtnCtw6ywJnCPC9KA9F8sir2PCgtf7TYvJgKvGk",
  "key10": "34WNdYZRVCVqtTEcZEWwaheg1vNGCKa3ATJLanXbEEU1MnW6GteBFntLJrkhMhZy2qReXXMdFevjyciF4sNxizfd",
  "key11": "4QZbVJqtpb6nc2E3XCka79BKyyDScPJtaJbe2p7w5HbDykpqdKBgtwMtVaGcrRZDUz81roPqczP4b71wfzRwpNWa",
  "key12": "3TfRkQiAB97pExKL1NXRVVRiBQAQRuNwmDcFEPLYCJ3ehV7cjhEatf1qk34sGfxU69BdZNZFK5jKTi26ZJj4Lf46",
  "key13": "2CKvWd26Zebx2Kc19HTVSZ4WAa4jx3pa5M8LGojzdMihQx2ghpwqTABnhn6WBLfaPZK9aEcarBq1VithL7fiK7sh",
  "key14": "3TjmGhdYfBKnmyMMaecFCPR9VSS2XjukipMA4tGgpnL9e5dFqBk1tgHtmDUTogrS9etzSY2ehfnYGrb9yf2QoCF",
  "key15": "5pCEtVNgNbn3MWhFpLwh3YnHxFdgAW6453Hf1hskRtijQL5vK1FVWfHEABY1abAAsAbZ233efQNnBVNV8cE2c765",
  "key16": "4vu7WeLQzqxFW8ajC864NSDi8b5KCEBo2ieE1LbevnZaNDrVZXc12YvtBeAvUn8nb7HQELfbRtY9HPjLwngjkksz",
  "key17": "5scVepjSF5wYeJYnfLxAFbQVMgRmqbBCZovmForjwJ7jXdXVUjJHz2HtdNpKA7MLbMYRS3YAXaumqWnH5S1cRS14",
  "key18": "4yix8Cp3pCzaN7ZW5TbofryrgfUMsChNi8HpidLWZ5HohSYqq81kLSkzC9UjEoYuvaysqBex7KS7F56ZPbYc1i3w",
  "key19": "5ezzgd8qC7HiKKojk6QNH8MJTrqPnyAgY6mc8vzTde2822988BvLa5oraEeGD35iJEA7pLYYQNsicE1JHw8NikyC",
  "key20": "8HBL9bd6j6gRBSaGtYs4nhjkYaJthgk6QFN4cgi4xxt4G9UoWqpeH6mcsoHDZS1XdRxaGXiFwMjkreE58EACyRQ",
  "key21": "4BAknfvZWMZNkfWzgXJ5XD46uByJobKsYD6Yatbx2KHnY492vaYwVL44ZsJLZxE5WnKHKvD6w2AP51JNZU7kmsBv",
  "key22": "3VWj1dcdYTEiQ7LWvt5kQ1XqdRGkEmwB8vSb7CFxX1b5EYJbm2UkmHEM4zKZbuqGLzKcPLKj6cRPrNPqzMFqFYji",
  "key23": "PX4XHUsPKFasrQg4NYyZP39Dn2XQPGEycxAQxyKbjwkpyj9xuCW4npNNmcU8NoHRpJZUhvcLCQL9ozaP4qxdf4P",
  "key24": "2rZ46jPGzvWc6ogDnLGswXFYEQFojzq8w6P9NUPEiMNc39VMRXaKF49vHeUwTDrenAZFeSYFAnkGGGigDUR2r7F6",
  "key25": "3CG9uZSqYs3RguhkDLTcdTtRx3qXZ8sNnXeSLzZ6VbrbpZTc3tpyvNJ8ypTHDC7Y3MzcnFrJWksXYyh4cTpPj26h",
  "key26": "49jc32T3Q1BsfcGEHMXzpbGoZoU4YxVBnJhb569XiugmBLMTUV6RnKbgi4r9YGYZt79GTgWode6VkAXU3anhi69P",
  "key27": "42qTL7q2bSBFmphE1QVisVQv7tvFH4rjQCUxRHHBXdQBUWdCCmz4DyenS7BrUPi9ZDZ6qnL22hf2ErG5TNU4z9p9",
  "key28": "QLBuMTUW8oZTyzpDQYn7sKH3LXzooT1dq5znW3qnDCiFKcfEgWfRxi1NbdsxUQpC6qsQqKBzVahkLvoU1SLVGhc",
  "key29": "4U7HrHQJiFnq628FwYVBRst8mk38ykKgyzjyKiRkVVLujSDh89DutzTRwJgUDj9MgtZXbJ185rEUYHRGC8RDsZ1W",
  "key30": "ykPhf8ZUpHM6QQDaj8JXhyLzsdt4jNw7yg35Qucr6vVWfRHitaSaDCCdWpZ8bqA8aR5cvWCvVSdWJQowRfNBJKJ",
  "key31": "5o7JTuvQ75uEDjbt7pQamf5F3vxMkJbED28q8nVKjdYYFwELsKi6EbH8feaW7NjKonPV9c8xjTvxf7jRsU39zDdo",
  "key32": "3qrxhf2LZeL97h9kp3iq3ogkNJnoZR8eNSprFmWcTm5AeEPJPHRGzY9F9zVevtySeGh4d8JGN6cc8eu6RhrW9kxC",
  "key33": "5unsD2uHfJX23RDFvuAKqwNXvaecKf4247p3Rqou4JF8x4H5Z5RZqNgLPvu3qsJYtPnE536242ZxdXiRjdHNFbzX",
  "key34": "iyoNVkxtJ45ABrJM2V1cu3GcwVGnc9gee6JbshdwM5xWkCdxr4untVZYjtjarLME2KZYsFPjKacjz2HMC6m7xVc",
  "key35": "3mzjxKqpvUzFMVvmaQ3NWf3FjgXqbpK2DkyCxd4auwZSECxLowBz4RQZD7mkAu26crmDRF1La7Q6KJAoxYWiYpXL",
  "key36": "5yuvfu7HQW7gUfXJQ6orrjiAnRdtMthmu2Zt5v8dX9bhY6U2Kq6DezydoJd5LuXJpSjQrHP3cgzBj4kMgJd1BkNw",
  "key37": "HYUkqhg95R3b9QgHxjsBshdU6JM1rXjviSt5RdFi8G9qaARu6LUMXbC3evGwG6ckjGfD6VtfZEJ3Pv8tTAk9PYg",
  "key38": "apbk385MD8fHBo9juyVMsb9uZAWGMpDu5sVy7et5bHqi7VfwQBi6x4DfUMHEQzzUBvJ45bACmUZevduSrBBxvVE",
  "key39": "wBdwqc5o4VBnVWJNRqpSMWrY2St6YEPNavLvFVQpTFtgkzoSMdcC4FPfiaU6QanVwrAHP5UnTJYbMDvtD9WDRz5",
  "key40": "2AqcR1BKcA8gNxscU7yBXa9if7hVMWAdJnATQ3ZHURE3ZHvA8DSec21hWhkWeE3PPwKqAbqkXQnSxKoZC6AeKtQv",
  "key41": "eS1NDbLgACQGPyW92gRkooHmmHN5U2x9Uy3kkREN4mikMu8tyHtAscqwxwEhS9r9iqce8HfbYB5zDnFVKhvqXNe",
  "key42": "gTYucaScHjctst9kwQDzAiuzgYN8csmbujnyawUgzb3hNFfr5HJg3MKpxXuY8wvSKjALBRd3uFssanaoibjE61o",
  "key43": "65sWCjHs5vi5YWDZpBDne3RcZZi8UoTUhMpRAb8s3k8E5N5vyf9SgB7mk2GLsnw8anp6A9oHT5bh1zAzRpq9jzTi",
  "key44": "5PiCQtqPq7bLkgabeWpcbVUWFYiXi8eLXWaQvNzex77TcrsVvSJm83csv6fST6nzCrDVDBQnrRfki3YVFjnmCYkS",
  "key45": "BV9FH93YqfVX4dGh5JNcf1T7kvZaGJpjrkMXvtZRHAJBoZfcakNtvFWgjvZ7SG2jgdrRcfsxT4A6pc3Yyv3eYQQ",
  "key46": "3Fp58q5hUCnjR9Gx9mMz9QFSAmtBtSLwLgdLADkeV4QkjGxMWcXBNGYDJNLYVP6nG6dUKasx5QQojAYdgRivrbeP",
  "key47": "3nz6zUeFnrxWsSePpyL8F6qAhkNngRgYzHcBPYg1xXDzPG9Liqv2Bp6JDZeXcC2T9tqSioEJLguHKa1YRJYLdMoV",
  "key48": "5GXZH7XKFDYVxKZuDEKhLvNwHbsdip5QF6HLGhyzESmXD5x85WAwznFUNZusVKTDA1hCeUNP626jX6c8DdZt9TJp",
  "key49": "28vCgo9uWvU4LPLYuKJdqg3uYi1o342f9rceUqMoNHaXqFMbScY2woLJY4QxpVorwM7KFUnpdL7pd2cujbx1a2H2"
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
