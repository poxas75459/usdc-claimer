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
    "54jEt3xX2pnZQXDp9UHZSuYzju29PWg2dAFyb94y2vDrk6dCnNTLcaPWkVkyXbVEgVok6UFhjoeaHpbDN4YoMNME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwQmXnMN4QpgFnHAVriA6dJt9vbRiTcatGVQbZSuyAvFDr1pgXs3NxbPG5xFRgV5Xhft2PLiSYJbp5gemTrPtN4",
  "key1": "5A1sJDrtAe6JJcmDxy3xqqtRVncDUXnyauTw7hrdTcEvuDWhd4YEFZx9Ug5c5vPw8xGDSwSB3tf6VdyL4BsDb7oQ",
  "key2": "42WTMdzhW8FRdTv8bW9joXAfcT9X1tiyDYJXZXWzMCngVY77eB6cHDbtXSBujXH86JFs8v6sFBPBUt2C88vw6NBR",
  "key3": "3VWnq3r7m2jj2bY1FnyV7qqCap1zQoN9Bn4PtfT8QTcmiHJkfPXkPnQDMgH6PjSGspPpSbDSfrYMjuMRWuuhrBR7",
  "key4": "2FPwMjniUu2xhrUXd4JjN8zn78F7mG7JtguxxiBnPXstEKyRVHaaTySCTuLtpn4KQMXF9dV8iXsJvVZyPgQKLLt",
  "key5": "4nnDiK58LpXdbsF5VPCibnRqw7tx7ctB9LycVe7223A53at2XVwQdiEcSSxxhBjYswuxut8L2aPqiLWT1BRKsyWi",
  "key6": "34fdJz8YTvGUjYYRXpCQUoBwcNnDaiKAmDQNZrATPRoSnWToids5VrEMsaVLYHtUzAeLiZPSL4nwL1bCXctrtntJ",
  "key7": "2TZuHXSf612G7Lykta99DXqydn1373KbxeLSmX2iFkEv1wKkRwUhU86SPt2RSd7opS1wtyxtvzJKLPBERub47yQw",
  "key8": "eSmXsdMiGDv3z7QhgZVAdQ9tETb4npqBmTY8XcedGWPsx1FrHhYJuzGYt3oxdkPuH9VLPcxfBtNw2erhFKiytyF",
  "key9": "4ruC5dzbDSVawvA5mFD1piL44oVCRF3qsNjNR8wXMaY45fnA2TwUxsV1YNPzwTBsJ2SLNMMLjoa8XaaekV9WJXVa",
  "key10": "2G8WD1XRR7fpPNrN316rWCpXcLUWcHAgA9c8fzCj35hE6qsyFrLZvgh6KafShYmSzpn7S1X7yFDgwtFawJYAtyQ2",
  "key11": "28g5MHBCRosKZTiP2hs9VQAThz5nM9Wxx7DLHEqMv3HswRE7SJCAG1Wjn1j9QX4qn2CgskaovVSBWkbUDiQBywyu",
  "key12": "4mhpRfR7MSpgwkoDiTKqmaAuW88fUWh29yEpT2HESgHrVDSAg7bosDACqNTf3gQmHdyeSYeyNyZZdPjV1aghKtJV",
  "key13": "2tphjfxsuqgXUzMsBiC19YuSx1NqyxRS5GySB98Rs8Korrww1c9ptZkBmExSChA8ZX4qQZSpPFTpBA1aAfWUW6AB",
  "key14": "5V3Cs6ADeQGJ353Tf7fo6ocSYEhGScWgatN4ntvBf1kSzEeFkLicGmtbKCJt2XUfe5psejvyL7cHrAMSQAMPpx7n",
  "key15": "4bE72t4zdBy2zVoSQuJLRsrEyUB4gkbkq2mde8X8PHt87KQXeSaZw3anBGtSY6MGAoCbjifWe71CC5jaJ6zXjwvx",
  "key16": "3sou2WehMApBECcEj9GW4SA4qiQ73eGpyvfQSFn1tXyFiEXUzP9vHYgfRsFtCoxr2XzsgaisdfCUvGFjKxiV837r",
  "key17": "4aAVubYKrtCBpUypHG2tiTkFpTweM8yyJGiUWz5KtmSx3QVW1RRjPiFsyXh9N78PPzoak8XjdY5ELcCsYMKESAUo",
  "key18": "3ks9n5HVaTRtwxgzeb7kvM7bgQn1jSmN7hq1stRyr7AAyyEnLPjKgDQcyx4PmKzsWFQaYTBQUz1H6YVj3fLKhBRb",
  "key19": "3oMEWYBM74BZZQkMeL4TWstYde1o4WXdq5oW5fAy6mVC73DRjMdrgAmLcZMYhnnLJ3R1WNTB1WPykqDrWAh76nCy",
  "key20": "2QwEiKzwjhWsW7ZZ3Ur9jkkVTr45zN7y6hf14HP1A9RnCA4za6tN6uPWUDcZegvFv71mtFL8nqEAfrea1vDMJeq",
  "key21": "5ZRB6HugXK1ctkdEbGDuXyAamUEK3QXDDbDoYNJNUcgxhjiwJH9mtKe2PKTCanXcPNi9hryzyKoo4s3Z6J8AB6tW",
  "key22": "2aFFx2oByk4dgzqwHhBd4iArPcH9S4ZrW88BVeQBjx9esBh7JcuJFpTKTwfen95srLxvqAkGNwmJnafdJfkzAaSz",
  "key23": "5Cxnm7hWsSUoM7mnV4aFkRuvvjJ7B4itCW47LNrfjxSjcAZfAL9QCThm5JYa8AEghzGccfaA32RZtY1dhLsm1Ehj",
  "key24": "3wmArttsEh5LhCsRiVGCE59mbZoWrGKB93S8tQ667QCKijxRAKNdUmBu1NrtcFTMVy4TrCjFe2Zqz6wChYqJHFrk",
  "key25": "2po5eXtbsvQhaes5StcKr4cnzdRoyKyA4Fqr14BJFx1gUqk7Kr9CMmgvT5inUE7HtLRgaKayFubAceNmXRyaLZMx",
  "key26": "3x91UP3XgC77AVm64d4pJ5W5ZvRxatXvbvn6L3x48a2rwzmW2AFL4t26dSWiw3pe27jiJyFUFxK4YUUi5gixPJ6L",
  "key27": "4wsDsaxGdTf3wwgqyLRZwXhbWJUQ5GgPhkKqjwMLhPCWQenjXrH1mgmSK2G6E3SKy9KXs36p1dtkbLDJ66dCXiLq"
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
