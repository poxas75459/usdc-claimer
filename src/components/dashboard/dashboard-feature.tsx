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
    "67EgbbLydqV6USHhQndeUJri6KnyvaR7g7NsP2YQd6DkNS4L4titiypZ5HFPqVjgoNKZps3xGoRpGYFjCqSFRtdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5TjqfW5t78JGEEicQ9FVwmAW7xYzT92JnYapYp1qZTJZ3XDjTSaY2g5kCK8jUZtYeB6UArxepZw3PQSnL4yWcS",
  "key1": "3QpjDtrAcgmaRdpTaWJU1ekczAZZvyCMcqTCgwT3Y4rqj6TsHaoAqXAKEL2sc3HRxdcFFW93jzNQZCUHcff9SPFW",
  "key2": "27QJkHkcRbNra4PzBK6sgZSuNenQuVx2Wuc7ceLyC9wGAkDj9quptvvxmtzCGVTiBCz4pyt5a7ztvHnxvHPous5m",
  "key3": "3jNGJwFPD62xy7y5yXBWXSVHqY6tiihTAgD41xZVBaYiarJNzGmHVZQW6N9uXyjViz4ppRDpHdxSvzbuBHFWSG77",
  "key4": "2i3CeAjJRv2U3chgk3Bvrt5HccfwdaxDoL4pQCxmpgStvC8W98gtVnH5gyTdpSGQsH9x9eXaQRo7GoJgbntWZCjM",
  "key5": "56Jkf2Ckmp3GT5KkiB6352RVAD1S76ERWEbsuDZv9ye5egWBCM8dnWWXDAK5feB9y9mCkDp9wisiCo4zBvAzwmiL",
  "key6": "4cuqTPuRJ7LrBD1yNzv1uWZwx7KpLnoYcin9otp4McfXmEhQjFXqpBCnJAkX8V5u7WFHnSxvsJhabk4y8T1BQfH4",
  "key7": "26LTHignyVrb4SjkwWDVf43T8EwauFE896i21CLPnhwDFwcCT94uTLsCRjpYM9QBCcyRYyeZcaVKxH1pnchgEnzF",
  "key8": "3VgQvtg9KNYsJyFX56QbDp5HZkQDHGGSC7y1EaDDZcYNY2eS8KbZByvrrsb1v6aKtBeWHBAQNVPbiCFhprUrhHE8",
  "key9": "3Gk6qRBhnGNCyuAHGwGMJxURH898XSe4j1qrjyLH7qjjXtnEn6anHXn1hRsKe9EF155o976oFiE8J1VSyXeYESCZ",
  "key10": "5bYbpgmEbPKHjWGY5GacVBHyjb7G4ejc63iAiYYBQvDhVzTG6J1VA7sMboQ68BMPt6V8d2t2KQuwwWbTA7Ns37Mj",
  "key11": "2p9XMPYUTXWvDRCbDF5LQMgL99sXKTk6vDEHZWH3FCWfHjkrHdqpY2d84yiEZAZDnUs8iEMxrvYver1QQ6Y2YioN",
  "key12": "3eHK6BanrDbQp1v32Szh57TLdzKsnuVdn6cGn9ir2q6HPppVJhs6wxCUXtfisvcA6r43fVWwHVWctfL8FCSsr44b",
  "key13": "2zwTVYUCi2cckF34QiMWTKMzmwYxgscjMkJUwLj3xmfJNG6zGgrqDAYbk269AN5nA9Fpih5c2gXYe7sCvURtvcd8",
  "key14": "5bFhxsde3hT9vAqEa8F9pwRX3aTYpbpNA8ufL85dUnG4kNWFpxVv7aeYCcihHugR1YPufEHbDbpkpuyfFoJwEktd",
  "key15": "6BynxL94ja7nGTWvHoa7G7bp5rDRwr9wZyvzrLghoi6AL52kTaSXXUmSHoMrMwU8ENV8JtpT8d36HNKHMjXYLdT",
  "key16": "57Xnpkbh9iAHHbCvLss9jhYMaVxGj1pEHRwgGfhJgXmUZBj4xJoj6H2ChCFiYgqAa8LAhoHtiXiYzAZuQXSG435k",
  "key17": "4v7iRMxuxBv4CwiZD8VWiYadCcVVBxEwrkbVsZrM1Ej8X6k91XQyDnbT6X5iAei3qtSg4jujo9KckRp4NJaBZUGG",
  "key18": "9TFXg8Twm7G2KVctfHACFdsChLPqXVFkr5Qb1cPmBmQ9FDea1Ad5dcToCnwFRD196XNZTEaiwarSMvzXLqAvQRT",
  "key19": "KAy2EauZLseSUniFYedrHKDuBmcqD4ry9P7BCPcRb94hYC27A1Qaq8Xg1H9F9xdZapwFLWnccAsW888fDrBxRzK",
  "key20": "28RcC4a4viHTXCKPvwrodmJcvgrfWH5UQgkwgU5ct9TdDAwamMsRbXtpAhQYtRrf1eYAZfdtYxz3JjqJuamXLg7L",
  "key21": "3yMgRyEY2dgg9xA28UZ4iYitk1Y1KtMJ6ShVQ8agZfY9F852QFbUMCvDqnQwsia2MhR3X6fTE6uxhcwvt7YBW6Rg",
  "key22": "5Adf4cWB2igUiutxpR4t7khCdNhniLdAMwzMupRiADz25DYUTvy7EhbKJWMLCEeFeyZirZGsEBF5JtzGeZxyG2Qb",
  "key23": "61ejH33AK7hQjR4iUe9pj66TrXZ7zayeJY29esJajWjzpFqJGfZswxnpN94MwnvtLvtVp3YFZCAo5iNGJPy2iQnR",
  "key24": "4SBdVnXehDuuHbpy5Pdq65aZrk9zZbK6LmY3ChqJ5Nu6E3gz8rwTDCEeTE8hmLdoVPVVrcTXLNE2cU6vgZrCvmdt",
  "key25": "3ddjDUdzDTJ393Dz1nTnmzoU87nmZfDnNP3sSbR4h8pm18DyGRkLtH7FyeK9mKzNJBKvjXtogDziuV1tHaUX2Kku",
  "key26": "2sZg78j4ooD6T1deVhmmYy4agusSEFXug7duTRMmhAt9UNm5k4dh4J7zFmpwcVrtSwnnKJ855FBmRNARw9fUk5Uy",
  "key27": "67U7Y8avptTsotCN5xn8ohqgsH9jhav5NcZXrJfuBPYX5SduK27epYLcWhMh2EPsbFNMxvBKSVSTQtPJEF6ZbNN8",
  "key28": "2Jcbe6ekGYqnbxYmJTaVUUXN2s8HUqUiSLfkFoWKrbXUrcqjSimR7DsSeFYb1en5uhchWdVdwGaAnukxpWkxz52d",
  "key29": "4YGisSby8iaCNdueFVrPoGnb9LRrWmgyAbVwygbKCMV6F5zHa6cDDNVDEnBxyi3AFhKwA6DAwyQcNh6UuJPcZdJp",
  "key30": "2XUWoBFBnHfK5XdfYK88BTRsp6ag3KebWU8axpmQ8wQQ7Av1kRUKVWcFPnstwxd2EpPwntkVxbb5ApNpM5gLqfq7",
  "key31": "3Vo7YEQr4HcEoqQ26SAkEkZ2TCgpztVsLLLj4AJBHgvnZAsn4MrLkkxzkcMczxxaBKbjkAdgY27hrgVhWe8kEMj9",
  "key32": "64J3GMLRGwiyeDZKHwgniKcxijdJrh1iXEuurwfocLjQJb6n7XKqx2LP7c4cQWhK3XhCJtn6L7XfSUZmBHJ1d3m2",
  "key33": "5DCfmA7xatRCp3FfqFBWxcXb4sKPQUqEnHuZSs579HUeenN3V1BaadouNjHG4jwCuaET9o7Brk8wgd5pifQ6FBs5",
  "key34": "LYdcKqo82iH253tWTo91ExGBSRxP4yTsfjeKNgoWXEgjpzpWZYuSpyKDkRTWRXectWJSQMkMbDW4PeXToVfxtrd",
  "key35": "5QSkVBXdVjz9cJxch9Z1VhZzv4cYmbYH3qdkntefuG74frEzZcQ7XaKSULWHbgrG16XtCJfs3VB6cmunKWk3y6VY",
  "key36": "2fGK2bVVkSW8BQjANjhc1pjm3kU1fJEurqQHQcFFnVH2BpRNb1JxM5YZd5uVgRScDKDST2e86eLnptPZuD5bkpbg",
  "key37": "56Y24CV3XRxWjjGDK2Cs8oJc3jxMkhzUkyhYazZzWKwnCc15BUFz4e8UxgKk7fJbVGjW43nvQbDyJVx58PHRmwAk",
  "key38": "4rpGXEzxpRGuC3Prt974mgkS7H1BSkAyKG5oqHF6hxyuPjhbfnUGpBrLwc1pi3E6YU6XK4DKyW2RURcBBSwjzvTv",
  "key39": "32vufHFEXoxpi572pGWYDRz3Ur9CB43NN2rPLXwvJ1TrRfqN4yynWmt4gHojGBu5vv3FQQebqivvuhCbK4u3kTMk",
  "key40": "49JboMdtWJhBSRe4R4goyVW9LvnAfntZHgySYhFGBXaFLGoHXXBvju5qizQGbR1dfPSB2DBT6dQi7CGBRijAo6bu",
  "key41": "3TNw7ndHRGUfWN5CNcTswEC8TJK6WPMv9WajmHeYyDSF9jFKzvV89pMZWUAtmWvzB5wkQWBZ5NuwSnDxuqSqyaRs",
  "key42": "5MZo1c5wpqbpApijDFz4XAVcGzFuSAYUwALxPbyoB98vonWMcstGrxdEs6n2gCvQz86T1Y1jCwQ5L55vKVMXJr8t",
  "key43": "4RRoBHgV6cyu6PLGqF6Raiu6C8MTq1NT1hRFgFRgzFHk28Zd9Hpmzd73AAwWWy86RzqvbBAPM3CVUicwrxvMAshx"
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
