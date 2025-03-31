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
    "62B3KTmoK3MWFTas6KJL67kAnAHbzQBWs7DYWccCrsZM3VCzHys5qNravfEXiYCv2hfX8KnLir6P4k7rL7ZsjNvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EZ6dbN2HSWmSrqLPFzy9FKWGUVFEUtc9J3ch6wCd9xJRKp8MhwKfsUSCVhDVHdkxMdmewJ7HNG4Bw1k7J7xPg4q",
  "key1": "5kfKAp2HYi3wCPfX8BYxdRySr5QF6xRUVQVwWRdEoVffJkBowfMhPS43pGMUK7iBpUeHewWTqm9ETskSdcznrwRr",
  "key2": "3sw8QtGzBj6zR2a95Q3jgLPWqbdNjkTDDs5yGURqt6zJXAK4cabeUMpnhnVdot6hrJVek6rjwoF2DtfKTxUFwpkZ",
  "key3": "3Nb8vXuCRhn3aWjDCMqh8Ut7tE1hKUuVnSdxYRZ1XimAMstsDotRA3YGdTNxk4JGmyQLo5WVbvYBfv7U9RYnfkP",
  "key4": "yJTTpLaPNWNhJPUBHRG814jvcvKi7Re7hQ2cBR61sePu8LL2XvidN9xRA2Xiftm16HhHAMJ96orYxPoqNipfb3U",
  "key5": "rmHDoncUxXk4cH6NhgwQ5tZCV3nTeDsYH8iK8x6xxTjRcBg2VkopeLb7NSKArchdymHPjYuRA8M24gatq9qGtjL",
  "key6": "3Sj1b3NsprvB12VJJs9JP5HxMTCXyaCSs7Y6Ns47g7KuQuZcBSChvpvUcDy8Uvu8JUinjD83dLs2x5a1RV5gAiW6",
  "key7": "2wqyvbgjNZiX7SDoPkGsNvMSAB3eHc6Kjmg5ZVus6Cyk6b9LVz3zrEHP9wZ51pbwjj3EEnEUtnbMUKWcMzqAEtBe",
  "key8": "R5Wy8WmFvgWeuCTor8dyVVhJ9n9osQhvabLp8zdkz4bpn9WenREAbM3zbK18CvzWrGnKt2DJUpJZ8CH5mWsjhAT",
  "key9": "2M6NBaSSsESALBYNf7dzyCLHQQogJBpoRggcfpwuRyQwSqH81hHwF43BrVa9QmuzBMLU5P6a2LFEVf1YenQjeyeF",
  "key10": "Zxfq2SzSNUkf53goFPgaTqdfAmrawNucM3BY6EUQBz5tGNPwqynx2xSweaNgM5GaN5PntqGcgQKegdDrDLoHT29",
  "key11": "4zr3tZCuVUEcpHtCoufCyTeR5uBTHiDW31PZ7yXZmHsNpXcdz7kZHGn5oShRRfHrpJuKAFVV4RaBBfAJtxe2z4Jm",
  "key12": "4ThMBYK5Z8zM3s7nEb1NB2T8cCYXaKjNZCxALgqcwCnenJNebkenC1AcgwnXC2dAmqcXG1Ef9udUyFsqS8GqwXLH",
  "key13": "33eit7sUQG21tssVeiA6DZH82LQjmBwAx1iph7QgyzFAQFSyxpoYZ18Tya8NBgWZFK9k38hoV3cyvhADHnoDBNUX",
  "key14": "41mpE3cQsPNZecHWarbSYQJ6AtZtbMJ8a7pYLXsKUvxoBHyoMaofmgjXVGvL1vrLRDq6fr7NfLxXzSYxq6FH9ZU1",
  "key15": "32cmR6sYZ88WJwGNc1TQHCLXMkFo5CgR2nz2J33eC3G1n1UgSt7hKQ2WMktvZyjamP7iv1pvCZMywXom8eJoFXkh",
  "key16": "3kgjmFAfwLQgzhf87NRRSztgqcFfmoPAY3uk1UxsknoUrSXcwgJoTCAziJDkjf9Xjfhw3BQpKThFCPBctE4cemmK",
  "key17": "yrhKqTEmg2D1Xdgeimb4BVBsQXVPVe3fn3sgjpMSnR7imULHBaXQax5Sd4vVuFojjt731CEtSGc8FgGTjebe2Db",
  "key18": "3FpdDMK5KPJD6sUANKVCvZLFwjTZ4HtdAuGvhnBDvGQucbJzRSMpKbnqpevk5bi5JmLSgHQ87VVofdkcM6g4Krcd",
  "key19": "2hGEXTu77ddGGcP5NdC18B6uT2RGtK7yxRJfUQ3MdHq8uhurCXxTmokS3FRrzQaCAWKgMu9BuBXKQSdxxUSPsqfQ",
  "key20": "5YnSRG1g8WJ5UNC2b7MyjhYYs518kWtAy7E8ZYDMuhTFr9AHnzHXomU6amnSXVK3nwQ7NNp8xmaRdZTyFkDSLWDA",
  "key21": "5EerpJufrP972nCoQCXqfd51uwGqRCqm3iKAQAg7bAR1b82fKUCP3iDv3MqB6Mw42M2rzgPFZ7dhaxb9H68HCTma",
  "key22": "4iic1J91ChHxEFwuWircKGsYzESodWcw1GbyFh4SgfAZPyyWmTEHdHgvszTJ6fVNxaagY71TsbE6vBpTFjc5X3e7",
  "key23": "BdPHusFFDFhcJNDx5exYUw8z2LTrhP6AQU4nFFZrDaVXEn9TgaYcnA99nDaW5fNtYmpNRvEg94F5cDqH6gqt6zk",
  "key24": "5G3g32HKUnJ91RF7q9n5qSdsMYts6ReYgL9cZqscwJt9tmDD3YKh8oHddMtUqi7vKhNMZz8y6CjCWvJkzYoPGKoC",
  "key25": "2Sm53LQRY8YRXvzG8w6872w1WkND32yZ54FUKPhjDA3uykhrEa6teokoJMcRr1uQDST1SR31fyZ9iAQyveN9cwYV",
  "key26": "3JfCgu7fFzNqzdCzfc81zNbHtsGkScLPHgnS6V4quxw9zk1MR5T9iTtxqdZuEwmLfC4cS727MDMUssHvHonyZfUR",
  "key27": "286jzQzpNfrQ9aQtFqGwjhrfHCEYNPB5gZkSpkuVxiyfkaf9yiYDw95wRiUWTnZSQtumTLAeFpbsKEodBtwKepnA",
  "key28": "3dM6UAiQpP79HrNrtHTJURxhxFPz19saiSkCVt6jVQoyJuP49rbSgqGm7BEHREFFKLikqLmX9hjZqCtiWq7pkKah",
  "key29": "4ac9QGk9faKRwZGMHKRMRip6vA4Bk79oBEvTSQcVD4Xj6UfG9g1YZibGcnbzd4UaMkJ9oBmtUVaVnqsDVGkEkxV8",
  "key30": "4V9s3QGM8MFrTd8TzVwAE2jQJvXbg5B8Gjz2h2L9HRd9TsfmvWKeK4yERpmDVPMhp7iM53aa8KHDwS1Ub6rw4yJP",
  "key31": "4GnMF9Ndr6t2yEW35k4VcQnRMcvGVeUUQgTqPogn91ciuTbGsyjv1CpCMMPhwPi5d5iizQuPE9FNL7JzubJpL2GQ",
  "key32": "3vFPAYgHU1c51hhxTcAYUhtR2HMZtKjcEw3xMZb4NnLQRwdmiFHP16rdemJW3avfYTC2vFnacK1NoVjVuhXLMASs",
  "key33": "Mpf7J86MSGq6VK4Tz2t7cvobs1RWhtUFU5N6vvY45QmdHN96JVy8BQqqpj2aHEgNGyowkhEi6MMwHe6ipxv7TNw",
  "key34": "2jQCWjuJuW3kZTaDfgR5LrvoCTkLzqTyYKyRWFr8jBxYahMJFMTGCTSBXhkdypLHbYWiHHNJ2mYD8cJHehFcPUAe",
  "key35": "4meeozk1bWRUA4qiZkG8xqHKtjhTFhkMSx99DeLgbAHgoGwa9iiXQz48m8dXAzHA7DAAzbufDDVjVzHLABrA7Jin",
  "key36": "4br47w2boYysJdD9ZV7skXrMqyRbFCmcqigszmnFGqybd3k5EkmVnJ5HNSojN8SykHsbbwRkSLvgaaCsmcFmsWdw",
  "key37": "4Sf3YNFpZdkMzUXh1qqaEFRuFFPZVwPwkp2zDs4gxRQs9ebCgWRFFmPkQujfwFCHygppyBJTHPYrCuTKLTZDkXwf",
  "key38": "5GiEwTMrbWXT7Ujkpepj1Rrj4GxnpZGmSm43F65QsECAbnXUNLMUuoeUwBvPJXn8v7QZbtDoTByvFzc5ufxHm4zG",
  "key39": "65RW5P6Wy1mARm3w9WkHMhcDbxMk95dTTp414CpvCgdrvs2TwAz2SAHuWSJqDW3wucAH1bApwSRqvTvzeBCnAi4J",
  "key40": "493c3L3mm17moEBy82RERLvkvPmEuRraKXeYu9k7bhPX4etcN1US1aFPs2ndX9gBmkvBVA3FM1Hy6dzBuCGfXnAu",
  "key41": "41Z5AFcGkrgduJ7tFPNYhCouRrrcYinj7MRH4DUsj52DZ4TBnAS112kcmwQGgPqiVuctZvKyLy7q6MLhZfwPNksb"
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
