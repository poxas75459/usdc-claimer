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
    "27Gt17eP5K4GMAPWyJgDCyWUeF6gLYxsH2v1KccGNwMgvDcXXs8dajHbhuDBGXPCfji1nGgbAZLg7XR9jF9bXLAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4b8X4qWitSaFpS4g6brw1RCd6Yq6unpaGg35HQ49uJJQcHvXxyaExgLzB3jSrYHzpFT1WJrfaevc6EETJmKTvw",
  "key1": "48jx6kTxKhMF3AjpspwKVo4aqeUsLAozuH8JsFAdSUwBRsJ4YmAFS9bKEB6azZ3pnE1Jb1SZKGrFNuigwDgtvmwb",
  "key2": "2sR4fidBiaMuXeWN3omwARZ9emb5TvhfeQyKNdqJNVnvA35ibfh13ZJ4xtumd43cA4HWkxkqtFPQcpdUrPZgMxyk",
  "key3": "42EuGkocXwzJjiv6wjrihgWLDTZgpLzkd6rVCBKWAfGF11cnD5F2yHCwQ3GMpQ4xRnf7XoqFVD1JAh1iKhyuNzdc",
  "key4": "r6qq8HXZ7ohDYvhubhXzJXhVoFj68nnHnDD6ren6Yx382q3gQYM7tfFhGLrpAS4noLZL1LfR8GcekzpZTqko8DD",
  "key5": "5QDscSfGEzFNXLNDJKNfaWXpDrXU2uWoYUMxkr7errfZmYPSRRz5ntrkRfQVUNLeSGJFhKSKggeeXEPxuvZmADmP",
  "key6": "5yxCu92Thb5fAZtD2J9KcebehsdGHS2fmzVNKHoCiYf1khx8jsMU9BjtUtSczMLF58DW6BAw8WmKAi9yB9NKq8LH",
  "key7": "7gGJiSmcMQCtxAMTFRoH6xL6evkQD39AF3h2tNxAKi5Uvxh4woqhdiDaQXrwLHfqGRm3xmGsEPeFaMHjxwqHi3K",
  "key8": "5SbVHcjW2KgiUxAVcmyo4QiXHiYPdQYY4qMh3d6ZezoY9XNCXTnhMwpqEERtRtZE85Vy49XzVvJEZeyLc9WhZfpe",
  "key9": "2YBeo6CRNZRaztuvWeJH8FnYWiZ1EhGCWr7FchQNfDcMb8EBBHiea8kYzFDaFKf9VcDEKTVBZQFk9wp6NUbMPYyC",
  "key10": "4dGhSpbU3Jq65o4NCpaAzNkgY93ZFrLQi7HBxtUs48rBbQVaHWdQfDGfYCAkxwqMiHGpFKqRnxo38cyzixHT5Vo6",
  "key11": "4weWrSUhwqW5byCRWCP2ZyFVZTvHEfCUxiWNigrJ4owuq2ApXNW6bFrAF3ZfQVnYW1Y5VqRejMxtXCVxTBQQ5ksY",
  "key12": "5z4kxL3XGj5PcKLDVm7ZwL6qpzuw5ubifW2MPmb6TqbFcDbp3oWy8Y6kMWafm2k7BasL2hoo8zRjNjjX6zfWA2gh",
  "key13": "2Pigma8Tz7HzHFLTsd7MMainFTETux8omh9AaYDRUR8xHPRRYnLzDFVehAQ73dm8SJMqjQMR6gUvr4NtrckzVdyF",
  "key14": "3h3Rdbp4p3uvoxQwvH4izpjacmTnDEpPFGYfeuDS4a8MrB4RXvSad1AS5DRaDrxw8o9oS7Qsa8GoLdEknrWNYkfg",
  "key15": "5MKhCSkdSLaBGHVxDvLEixrJDwkhVRrhog1PuBdAJj1tL1Uno1C7yYjxDEomYCTRY9nki7U4fXoBcR9cNm3phE1",
  "key16": "2wjK3ExU3fk1HBVVZKQmk2VUY1qKwiF69WQR2siAnAL932EAKd1QzAEXFH9VcXfD5R9F2XBGtS9TpNQTtC8aYnFN",
  "key17": "45GJZgjfsAH4iKFNHmW1o2Y3DdiLEs5P61UH3sgttnZ7LG71EUDYLfm5NAreMzh3qc3p5V7gPRZ4k38sCzroJaZy",
  "key18": "21hWCv7nxzTLxNYD96TxRra3uzVBKaMxGsAcXTQ12kitSsfkmj24ZL5Y8vYLteoWZEuYauZru9SuSsZKZgJidEbG",
  "key19": "55H27mdwU6Z2CVXsg38vYRfSwdZCLb7iJqQDj5kquD8P4LSppEAozgFdNAm93ygma5N6JivDywrLGG2LgsMTxBKU",
  "key20": "3Uhtp2dGNyjuzrBuWez71Vn8PcgC6ZTTx4ss9p5jRGcvUzj5m17mevWEFX7C42TCrHUqa9nd4HTMTdMHbioBy63H",
  "key21": "3CH7TTAzTf8bL1ovQy5HjQjxA1T6bNjrfxSw3YqARXBnEtwPx6KqZK61ALhP4c52DuJE7sx5DQB9urhQLdgbHHi7",
  "key22": "2HhV6nVJR2sDb7XvdpwKSfRjw9C1ta9WCF1Ka7y2dUjyNrJzSiMzJGAGXodfeeSuteM7CDzECp6MESba3jZ5EJeN",
  "key23": "2AFeBsHC3XJSnU5W3KvhyBSQgCuwxwwaZzF31QUVDWgr2gmZNfJGaNupMBW6fJ17CorZnsDGb3gekx28oLy5ZFFt",
  "key24": "jEEJmSZbpBZvxkj9hyujb3UycpL6yw9247N1TUQZgH6hcoh1asAPbyDnBhxVdzQGBzZGVGpS6NZWpc9tr87Tfoh",
  "key25": "s9tKkb9FHz5oBZEmfkzxoBR4q8PQVxxjE1cYDyLPdgqTJqxZuyhzZtimF39tuSZbgdSGB676aDQjoVjXNxFbQw9",
  "key26": "4Py71u1ryPLGhewxgoUNw1KmoB6h4QiE9JCaR2miyWSBGgt7aQg5erfw3mjeZZ9HJukKyjqX2DpXR9BXtxzxedRF",
  "key27": "3Nz4rXL2LetfjQuvhLPys1rfkBRVYzoWdNYFCQ6tzCpgoYNeyXJ8H2BjnTkc4EupwmZBGQmjNiN6igRWgGkK4gDM",
  "key28": "45ZUvmK7es9DJRyb1q88UVT8vVCHPX9QBPeU4QuJYYdBAXVq9Xgj6x3Wg6U5SZ3fhLQ7XEroTFGKavZyjCHzz6xZ",
  "key29": "4h63kzhoLRLYiVp52XaH1utvH2V3kscfTjcPtdP24k25APnXetuXaJQAKynmGW7taAVCQh3PdtJaLtSTV1wUdfKV",
  "key30": "4zmzM1fyhRuQiEqXXvcK7LFjUwKECNSQoUjLn8qj8kAAJXEeCyTgCo4BL7LUtqBaBtaj9R5cUrMKuYVvkM7WNnLL",
  "key31": "2iyB9q32VU29byXVSbNVWYb3FtGVXyFuserYiCAzU316a5LJn9BguiXCgWHzZsSw6341F275e9XfvGmsw3zQd7wy",
  "key32": "2YdfvscNuPudQ3dAKFtJ3SxZfCs6C9C6eQv7RdgPeb5cgRg2kUJfurPAR1rohnn6cMAHjW2HTaWCxBeyw8LqNdE8",
  "key33": "4sY6ePw4bQrujHxyJEi67mbBqDRU5uTydiebqWtL8wS8i3op22XjoL3RcSwyKQKJrwnPwVDFnDndwsk2zWbgz3av",
  "key34": "3Azh7utec87NYWj2JSBeMhg47kadf2iY5ur3ygjE5VPeHD9ZiyWoQkjMAYbiYR7D7h4EFCad5GkzX3ifSY5vcn9x",
  "key35": "2EQ12bJurbPMTLxFUxVusfzCXozsNFF3ourYxccP7MJS8ZtD4rBBR43JSz6fRHwZAL2i1mUaRWhvaYE6CiUXgLFS",
  "key36": "35iP13N6rTqhcbGzyhHH7sVLWVADjSrHyNCzn1Xpt1bnmiN9u2VC5wbgBioV1gPGwvCoyrrXGFysbXTRE11LSYLE",
  "key37": "31GUkkYpXG6XdphYwGx4GZMZbVX78MLMptY4b9ZBRFJFpioWWBLbQHDbcaFjjJQFpCZNyekZL7LCvtWGFatPQzrd",
  "key38": "2SKyFrNQ4QyuzUYXwt6EPwFcWsD9Ci2nbZqGBT3xZW5kSJS5dzmDFKabJCyFgUDL9jWLwKTbwtyYGqjMtu6b12rj",
  "key39": "2hZXTKf4Sq7NqrgHb4N1NYwE8kx8vDs9aHmVP35tJ4AynMTjtAzBxPygygaLcuBTLeNRJHSRF1MJFC4XvZipKMjF"
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
