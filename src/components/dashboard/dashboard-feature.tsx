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
    "3tUwD2uuGZ79tzFhmX8UoNRyDhDru9aWQbhyNbkQpVrycHVrhQcJvE9ksmnHLU8ZcVPTxPvV5oXS65RE7XaKz4Ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HoeW7vf9A4rFjgC246TH1YY1HSFnFESZ2j9zzwjgZeuTLNvFyPeZwtRYEcwt3xNYss7GGNzREku4bBshSv5zMm",
  "key1": "5YWTp9piM3g6QP63M3qWvBUfnNBYyPgU8RFLi61wyDiJvxr9Yw6DdH6dka94AkoPmPmkdEuK7bw84zkEmjdiiHn7",
  "key2": "5T6xcLe8qxT4mx26D5sgo4qUTcMLstwhk3Byx9UcUUMmzsZxMjJUifJJ32UiFdSQ71dw3KGdXJtTC9wsYHuS38qU",
  "key3": "5y5GD6dP7d3r2hs5uSJJf3yqfAd7BxpQnhaj7KsEDjcw6eUhaoZw32nZ6DFGSqa6mqmy2xGXHmzUStn3VGTphufX",
  "key4": "359Y3URWTwzMNGak8aJdtBLjUrpnBRnPUbwnwn2HztQRKvw935ZYrrHeEcZw1ZUhe2wrs8gUYSMwySf9pDcwudYD",
  "key5": "QCD9GmZGjRhQ1cCZ8w9sCB4WiA9FWwRYiUnHxUSRvE2XBn7yyK3hnGu7yzEiUaNCto2wrdjJ9PWMNL6XRJhb8Qv",
  "key6": "3WkRbMRJjvmSfkd1eFQB7HtneKMRvxYYuJK8LeZiPJrHkEsXfmSiR85yKgbxTFtpWkT8WwHfn5Q9pwinhFxNfBmG",
  "key7": "4ZcRak6GdQ5AEUuvxzkh74SW8hZovZWsiSEMYUsAdjQSuj3sQ5fDuhztvEo1JTvDJQJ2EGB9gS8H8TNBGeJqXcR7",
  "key8": "2XfWyV2gPsbZancEzu6SsTMtcAhYW6rWDpV8Vvvwx7bgQo1oY3c7tzxgMNwHaHn38ejz2VuTvAKuQFy2rKSZcTGc",
  "key9": "3y5MBftzqH4igcNdYoA5qB46Da2xrUA43HDcNhyGip5pDCi6r4kx8X3j76yqcLnP7ocNA5yQn6gfp3eULXxQxXpu",
  "key10": "2VADV1n5q5dFGafVoRxJqoTgVzm8jMdDQeNrdV95LQhvvMxq35roMhJbNruetTiiu3hjEE1SzWeGotDrvMsdCGeB",
  "key11": "35R9rbDirjCH9hmDCmPx1qZrD8FpY4eoyiSg4BbLAHgAh4DWvnmwrYr6dPS6VE1uBu7T4YP9EnqCsFeJooQTFaD9",
  "key12": "3KyXs2KxBrQLP4VbgVQwKJWXRVQXn1UAqAH5U4qX7m27mcu5de4cEg6zhf81kd2QL1F3Y9gqip6pPW8v5tWX8fUK",
  "key13": "5enfRXudUcaWxCuTVCGCu79TEw8jQnyKn4CCFyfBaFvBW32Km3dZWTrxoReN2aQZV2TXsRHrpc8Kkbsmsh6KAPFC",
  "key14": "Zr5fyva4H4VL6b3ZerjCWq8EPVRN1dCSfhRg85W2wAjw647uLTW7fWDtNwPZczHQqshLRAmVmQ7spz7dBiQUofU",
  "key15": "3UhVdzbzFBjEULECP7Fr6ud9JGuCwN3aqbmxYjT8ip21qSuGnGd91uJydZ4nHkgXHr6kUFKKEzqhz35gP4sbGcVo",
  "key16": "ppADdNtRDjL7ft1BuvaW7GDx7bsXAhdvkgGciKxZULymwdm7ZXYNASN2CUpw4hKvbgKLfQBw2AR5UoDa4KBzdVS",
  "key17": "ogk64atqR3RrzxzWUfBaM6iQZPyaAgExQvQ7d44SnC5oEiWyf2XonCgE2ZEx9FKuz89XZ55dA7PmmkQf2dsM2Rj",
  "key18": "2EgK6CbMR4MfdaRCPmv9tGCUvJty8yga15Z2qXg9msdL6zbnL6QhWWtGWgNDjPWV1RpTV6ceQ4ys1qXuaa8ZwKtC",
  "key19": "SdHxpsQHxa5n4FsfH9dhMEpmnhZ7WTfU9wojkGHuDUhb7fBg7a6oo2ey2KZobHdHhim2mAC26L1yjXcrD2Et6VP",
  "key20": "2T1VuHwu1Toou6q41PH8QMiKTgu3hmgrY6ufEWT4Npy2Mzzw4EN4zHk1PpHKdh3TCEd9F3pAesYKwqaGuoHTJog5",
  "key21": "3eKavPJUgr5tgKzF4fJxJXx2tKEGjzgubxdYLXNize97PoP1SgAunmeyXEAJtRUuz3aYpxW1ceQQkKqLCFSTTaRM",
  "key22": "3eXE34AMPhW1yeCiSMAY7ezAXVxE5QknFUvtLQ47s7Y1HVT3wXjGCEaShfu6JfXb7rWjeW87qCnJ4YTVF9mpG6ru",
  "key23": "33RUUvTqnoos5fsDZsuzQQKH8hbbqDp37ZD5KEtkqniA2qReu86feB4p7kxxPiCufZdtvSFCPj5XRJtHxC3urnKg",
  "key24": "z3yZyUE59hT7v5pxEhcn78twSpowFTY4PYEKjGiNYk6KWNMfeoT17VAB8RqyTLJzxcatLq3jpBncze9eWUgeGRW",
  "key25": "3dRYxdSE2AzpRXw7DyjuJpHnyhMNmk93BfMCJtHHSMbm65ZMTyxS5nKGX2F7FwTAU7jFR7pDr2fNqEjFxGbkkDJB",
  "key26": "51SRXkowZm68V769GUc9bMDeQfiHy3hGSWTz1F34fmKBLUTuKLbCzWyaTeXAnXor5QHqJ23SDadxwRHPt2T2ji9e"
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
