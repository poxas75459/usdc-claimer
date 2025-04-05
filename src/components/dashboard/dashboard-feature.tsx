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
    "4Fjd6Vuvd6oEVB26xBJKLYgjJEg3PbJh3re3KkBDWXtpUfLRqw2hXSmuwDFyTnbPxb1HfwR7yhHTFCufisKPKBmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FszKYcRzX5CfLupHQnb1Y5ux8iUogrtmZKFR3QabuyZYpyawaHF8CBKDTTk9iGy9ZqoDEopj34AGiGti3VWenZb",
  "key1": "4fTXSBhLfxe81TME71f48ZGRuG7Vf6KephbJSjUfdLXHBKEgQUxeWBxVZHcs2w8F9dNgqfveXNqMpJDKwtm4pfyc",
  "key2": "3P3ByUTmrav4BH7gTZLL2LH3VJHY1Ji3HenWMT5fdxVJaBCyQhvS6SBCpE48KH4tvML4rMG69NQeS1Y9mpEisAYZ",
  "key3": "21Nvof3Y8raS4CfakTVoJgBpm6iLcnxRwxU2PfY7a8u3KR9P3K3FKXihYyyYYMqPD9c8tHJ4B22eXdFxiiNjC1qP",
  "key4": "2doXac8NgyLBHK4no8WyH4DgfGjn7xf2YMnwjdcqcMU98aWAr2zq4XHBnerAeDu6o7smoRkrYg53wizdydznFQdo",
  "key5": "2AUuT5iLormvx9AGTnddBvfZ1Mxr2SGkqmDHsUzBYyUj1ZGcSt8AMYKX5PYTyu1QuePKeWXHb1CSFMcmvGpJTCPo",
  "key6": "274SskFaaXVkdd95JJWq7sUC9Dtu9V2CU5nbk4VZzBxi2FJkzdQWhvH7nj9cmqQdeNSL253Qt1CMiWD4oxurAtp9",
  "key7": "2xCqq92uYh8RknWSKsY9U2o2CVfnYdwnjFWDS1mfjxxEGW7THe33o6HUBW5gG44YGnSiobRm38i16mQF4hiJiAnv",
  "key8": "4WZPdbgHAXisKC9FXR4pASrLeq31gPoEYkTqTWD1h7Ptr65EdUXN8Tyq5EsKVYqn3gSv1TbKNJDrJWUURyKnfaLw",
  "key9": "3v1u92BiPm3tkanY141vyr2bvMFf1xzDKngq4q6MBoCc9eHW2nNKVHcMVbQA5Tgs8tY8hVitNJgwJc2BszBEev2m",
  "key10": "4C57E84b7qzjZK24RvHAsyXwMqc8Q9qmKdtzTbHWSiqqDtfWQt84BXRgXxYYxpDjqkv4jMpXHsdopCFDEXCceYUd",
  "key11": "5Zm9YpGBDSFmsC9WJJ56pLo9QdrKQ79iZJQuR5PJovJvUYYF342WoHewxYZt2C6zYTEjxYRLHdNnWVFZWRmLqwpj",
  "key12": "nkeZFWYCHwx6ZgbJxYoD4nJaMysCpJPhUcCHG2gqCVsuHypE3M1od7vE3rfZnh8HnLQ4iA65hWSod97yYyEXcii",
  "key13": "4H3UiiaNDb1GjxGmFqyAKm155jUqmtGcq91dLXDuSVT31HDH98hhKMVsc26KTyi5RzggofzLtAdnrMj6MfYF21j3",
  "key14": "4wy1H1x6Ls6xKtjgq7BPKu727g1iE8t229HtegPpTgnCkF4HycWqws5xBM2GczfhWPRu4BNVMm5WKigBE2Kdy9xr",
  "key15": "2xF2T8Rhtx5YM3UcP2cTjGa6FcsaQhQe2jhcP8wuTXFGauqZvmKbpBZXz5UffZ1rN5RLjn2wxZkznifwyZnS2FfR",
  "key16": "5beMNBZSfKQ9aSCTvBm1p1AA3pKP1K1HW5EVDcb98jTipCoiSr9kE5w9326vXBaxJB3rYshXyLDnJTksMjMqU2n9",
  "key17": "2o8qpnWw5WiXYf5r2faTcHhtwUCULMRkF29XJ2eJRGDUgS4XVwbqsAjF58XWrTff84Zyx8AZaaKAmWPV1KYsYrMb",
  "key18": "DUHw77ZKs3z2TkvxJfFCwGnzjik7KPVypU5XUT8o8oKDjF8GHqS8k6Egxu6oMjfy2JUFz37UusNCn6q3AYDUnep",
  "key19": "2bjQorf9Jx1wQbiNnfJapqQm49Pc9rfTwefZEMBzxhTs5HTzAho2GTtqYoaPk5HPRif2xLWxxM15NptU84QCEEeF",
  "key20": "28GdCgBjdedkEedZ5xcnHdu6Fw7BUTmXYWYSnfUwSc5eVC6zw2jsVmP5V9DF2fzZQkxDBa2LJy9zR2D8xA2ZUCx4",
  "key21": "2DU3i2xryseAKAN66drdkq9EzjVZsNiVtJ95PVhLp9yE7zMqNcdYLBV2V1yRYTh9uf27w9mKZyFZkyC548Lep8DB",
  "key22": "3P6DUTJDcd6pbydYUwS4uKEjhiS9nNZXaJHYbP5iusYBiq1fsagUYyB9zpGFptG9NkjzDkTifyCByfUmSd3MST37",
  "key23": "4gdHw8HKeeruDqQu1Ey5MXWuitgnz2Qbf64R3pDAiVNwQkChg5nqLr41v7idAmt91jZi9rd1Rmw7xxurPYAbKD2T",
  "key24": "gqCQsdjZRG4bi1S5R5sFbPSbHm8eusrkSZLgeMyNUAsDEzf9mam1QfvnwsJX1eHgPduDthcWwCxS8Uy4cxKXkxB",
  "key25": "2eAR7GB7EtQvj2EJ1jnif7Y15TXDL76ksvie65KooDn4KynSDzAxBxYYQVYpLEa6Xrw41Yo36E7eHa4ggx8jyJ6n",
  "key26": "Qr9mhS8voxJdvzZ9xk5BDYv3XwvtDSa71zjQhbxPQmkcFPrNodMVogfu2jQUJ93wvBmi3txdYosHKonK4baxvyD",
  "key27": "4pQYm5qAPxUbnr4XyYvxaC3t63Z8612jghUkEUa9ms47d7AkwB7NZkfQD2qXhiF8BgTNQiRe3JyubJdEAFxqFV1i",
  "key28": "4f1wJcejyADrvbTP4Zftinuotiq1mTzFufbiTzFsj2W7tdYtqg2BtT7FmEfXpX8FDKToWYe6km1h6QmVURg3Wm8n",
  "key29": "DeyuHMjX284cTP8sojYHd5uBF6aKfiVnT3HJZGVaMhAAcBJBtfqATgDF96hMeqCxQbhVbt9pckE71TJAisqUdvc",
  "key30": "3tydRQ1dPv2LkFC5uwz3vd1uFGLaKzaZJDKrVpDfBEhmeHZtVAtihqG2FAM13LVVsDfKaL5JznrAqeuMvF4bdVgH",
  "key31": "2J7scnf7RSkzKsDi37u5h7WpHDmU8FngZQnj6umutePmquCxLS3jsJUZTi68v7rgqXsA9EUhYHt8NnKbqNZz1saL",
  "key32": "2Snow6S2iKmkSiuS89u85FirYA5KUJkcEDJgE1sKnS9fVGpparfF2dUhTYdyubod618BkKFAyMQUBoLQWUnasq6q",
  "key33": "5wx3RqLNcyNLY3r7MFJ4CBpYx4qRbWzovHni9rHaAK5PU9udjtg8NFsfJTPUyNXkc6ANJemRR2ubvLYD54WNQeCK",
  "key34": "5TRp3xNDFZDqnZNYTfcS36C5SCxxgAzLNYyjzvbBd93npGxxTaFehHzoefiCW3LPjXF7e9G8VpZQCZWttM8MiBBR",
  "key35": "9Y1vsJpwf1R2ea1fZnnPEJdAYfgqa8vtaEuYanuMJNsry7KFz6W4cWSvcjLG2Lnyur6cTR29iaRefTWPAuow4jK",
  "key36": "5tH4mpXtWNrEtWQYV4pvQBCMy3wYB6kZUBoEvBuH5SWqP5gpNBKCMX83Hcg6H5wp2RB3y2BjyjzNXEbv8rCe3Riu",
  "key37": "5FNFY5ZaTyqoG3phpsNE6HJVKBvnMcXp2CMaBp81Uug84oC8VfvktrSooQPgDeEDJCQSWrrsjH6uMn8jyCF7ATG3",
  "key38": "3vLN3UQm7N4tj4pDTnzttH2PkkPNacSRPwc1BTuotn7FYumuzpXUmrJaZebsgiekd5URSV28LZSdGZzMSaVNGvuj"
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
