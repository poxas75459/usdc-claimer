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
    "GtDio5YH2Z21QKXosjxaNbmqHmWoAXwJHazsfZobXAfYwaXmqSoXESsBfAyJyEPWNQgMsEwmRkpd1Y5ATz4bRqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xm3AGKbGcvqbcXxiyb3NL31QmGdFSbXHbd2zjL1x54yv2bL2HAfmDk4fCqhvagemhkSKYSXYGkRKNSCf9qvAd8t",
  "key1": "3GDpwn6xkvFbtCeF6zbccxXqBD4Vx1B82xVsYzmdJvA1HwLq1xAJ4XheMreuca1VTBx1wv6gvMnqUveq7nCDdwhR",
  "key2": "3DLioCDAJ7wsZt8ahfmZyTT8EDoDVQUnMDabXJTXHhEzJob8jy5NDgLF3XviD8ox1Ey3Y6QP7GrKuKjzTGbRBZwx",
  "key3": "sRL4P9zWY2GRYNtdVEiohzgoZCDK5GjabFtcxzwowwHuPR3hFfV9cTvPwMXFNHbLS8TdUFnUHjHQuMoeG98snWa",
  "key4": "3GjdkzB8UqsidS8kF75GPNnWgUVLFuzN3uYyUKi7L8cBsKiX94zg1hUELnoHv7f8KJ2Tbwwar4ZTvJ4rcyfpwpBq",
  "key5": "4fGQVAg9WUNvZBxd5M3pBH8gPGnMdmyMNUyKEsLYgoZ2A8iFnmDUWsE1kkYdg5yrB7cYhGsiUP7TJ3GqzUqLbBCH",
  "key6": "4T8Hcz8Cy6DvgPmfSYdaTUjMd2eHPNhDDuscRnbJA3V7Bs2Lrp3yhosn6v4Qfs19xfMK6PpGPmHjmCmS6cZttxdf",
  "key7": "3XagvFBe4cagaybvz57oFswMoU5YqWwq7E4RmZoR9XExqwN7bC1S64U2ejHTCh5pw4EFNrgnabsv6xgXhgkBtZJg",
  "key8": "24uiBBqYbddoQCxCfV3E13KATHoQgY4nL6gTzj8XA6VakGwxDc5LATWMUDr8EeVACEfg3jfMY9rmR3rpDGj4mnVM",
  "key9": "2eWWKFwtRWfNWwSU5r59Ew99r76VwuR5T1GUPf4CRcgFR2Eoq5VLk3Lkwnmj87662zHYwwSFJTFrN65UznaSumEM",
  "key10": "62ztQggLgKzjtyjaN4uGp1wgqnJdxG5F4g4LU6XsxWHCiFjxD3YWCTCp2rxrekaprFkMWN453dVZ4B9Z14MhRQnA",
  "key11": "3GdaiH9UKhBM92TygEd7SncWX5uV1EjH8XrDDoGoLVYAjbVcrCJ4CwYUUb58iHBM3p5KDhw5EFrXkTmNDiyuJojW",
  "key12": "3BA6ejZ3rTyMxhCh5CxbzGJJ5bjTb9C2QQdnSpLAFmtctzweve17jxHNSt35hi1hdLekb1TAQAiMqxTYb8CW2oAk",
  "key13": "2yFdnekyEzVU496we6jBjKNLCwqGpLT4oBJrqC6mzmRSKZ766BcLjgdr3yd6y6oxEhdni1Ckp4DFJRLdFHjbRPMJ",
  "key14": "4gAzpyoJV82WBhGM9sNqZHEjrm8m9yHp1ZbHsuLsn1yqdzhWLfWoDhCwK9UdUsQn1rsWJSAZciJd6ozVGFBFishd",
  "key15": "3fQXfehv3M6vuT2Wu1EaMZBXC2LAqGBMmfeZsZ589APmGKCRC1C5aELRueagkKaXRYbxLvgK4AD8hekuAY6GniJc",
  "key16": "2VNrZaqwHcz94H21CLdPN6crdyEhGTJeLvEgZAX5N15Z1QAM4zfXVcX3TKLA9sTLD2tM2Tr7Be6M8mdAx57SgHFX",
  "key17": "4xUzoaKng6ENBLDUPCbHPs3VCxb5zSFJ7GSwDKcqxgsLKVSWNUxd3xJzbvEb4EaQwNzcr2Y383Mjve2A4suNnBGZ",
  "key18": "3z7LoTMe91NUMFRx4FzXkpuumDWPxVNzDkoatRMPPsz9demz6WFxTu8KR25JaSDmbNcHiSvDV9wASQUi5Dj1AeYx",
  "key19": "WCacXxBpsJMy6jNvr1z1eRKEh6xPCw6bQSwAvGEDFr8gBmehcA8tYzHQ1chJ3xGP3y2Sdz8iJgZt533ZbHLRxnR",
  "key20": "2is8hx9U4SeTzFDmovhELwKv14pt55DCehRrwVziw8MVqkobFYZukkCzVRbLvkKUNXFYQLvgoWB5joZ4hrbZ2TSA",
  "key21": "3faQJv8195yJG2g6RGNAvExiySbndpiBq4DZZnVLPh5WXvDJUMtbncFwAUFfF7kPFNz3ZWcFjqqWTCHyjyGBFhZ9",
  "key22": "4TZ4dPYZQXWZxP84AkEQ1gG8eTkYHUJjnm7fuqJVhVdybmAFMUw7pWtg9swULQFR7QutQDXJkiSoF7y1VW62NDiL",
  "key23": "44z7fj7X5ozZ2KczzgLWCQyiMpsQWw4eWQRJuDkgeBe5GUdkfsMXQJjrrjPHYu2kPPv4tVyvJofKeqmV43MtBv1X",
  "key24": "5UBEPjZPHvJVrCrSsTJfacAcN7wVpNJMDxG1eMGHvXgRHkUVEZqtNfWnHEQqynwwsAAPfbaTFPFZoZetRQeWo498",
  "key25": "2Zfn3wxgNjvRE4KVK8ss9KSxN1i3TFemha6PyHRwoUwyGZYiihtjwekyz6hobaYnwChrAnECcLTdHdVSvsNwcUcH"
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
