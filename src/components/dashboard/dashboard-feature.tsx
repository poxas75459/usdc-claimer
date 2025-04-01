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
    "4ognLZ318DbCvcubhTifa6Lgp9SWgP9ax7yRaKrxhvDXnBkcBeXJWecxGwBYQr5RedCVA6aRNWjf6udpEEoy1sLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LRCUiJyCVXSgejHQ3UcQ4Nx6PHXst2CDYLysLpXYyjZ2fVQRKo3nM9hM2zFHYva1paTBx92NJMG5ehNyMQUyRZ9",
  "key1": "HCGqJ2uRrBqQnQwWhzF8Yu4fioHF5rpMEKfs8VD3wWP9gL2wYL6k5v2W6iqqvbw8keRGFymCht8Noe6AGvBxr1h",
  "key2": "5reyfW7WpDSfCn3aJjWYCF8wHpEzXvQFGs2hCiKj8SwfHQ9vGLb9a4wgGmmvp1uKfEeZTF1DuepHp2sc9t2CSUAz",
  "key3": "5ciwEQ4oMEXmAVtLksJoLugiM2ixsHWHq4RipqygQ9fuAuX5ENz7tbadLJrvm1Kyh5hson5Eu6KpJkY7EN6boue9",
  "key4": "3bVbyrMWRYrmPJzeuB4rmeB5ZY4aSqKdbvnro4hJ7XWkZXCexR8dXES8tzpQyQWqtnTU4BJbxpqxGdAAizekCcQe",
  "key5": "1Gnbkc9QkCN5szdcQmw5aQw5htTZHVBBCwXgjLRPbH4DfAQ6iV6iUrSKufUi4VuLrVhfRhyHaCkgTKrezcLQnu7",
  "key6": "5AD83oHv9p3TjjJoHbEiZ5uuNMLsgKmrFRJeLw5p3oFDbDEoESuFPWn4XUbsPtCWmjWvNFYPT3Ztoyng7sYmbRNm",
  "key7": "iBooJxd4ik8XNgzhC8szw1kRfpCjUAiKfBFYqtLUFumtYWLr1xswyVo4cCrp8SMYREW6FodbbVbQbAcgK9a6Tjs",
  "key8": "52Qs1gW3jEiYjXvsjNNA2ZSZqCcMHBQdpxJN7n9ayYpDK3TzFWFRp5Xmr7tVqV8RGB2bfciJxvnphEXkwGGx8wBb",
  "key9": "3tXq9hRLQdfUTmXTf6pAYCnuch5qWxhoFEDs5z3B9LKUuJU7zJ8ZscgCukvcFB1Ax2Myf1bzGn4A6zuC5RoYzMnp",
  "key10": "29VeUYDLA8dctRD7iumBYK4i2o2S5VGNb2HWetxMyxGx595rdf5VxY43BKsdsbLttY4ccAvWhNnPDxJfQN2eYDvF",
  "key11": "3v2BMJusafzgJAHLmsNAhd9XTdD6DBA1p7YopBwDXg6YNy2LnVSzBg3VmB7v9Mw2523YCPPZRD7Wn283Gum2Wovr",
  "key12": "x6JWzsQibG5vyNQedbFuJTX4E9xTGVe3aZFifjNrMLzRvUAA2XvowkBvHVDGsq3i5Bm8vQGjJxo2xVHHtk71aHa",
  "key13": "2T5QcsK4GrTVKdDr7iZTaGu3wKEZ3ZfNA7qkCa1pfTGsvNmtramzhETLwxNg5bHY8b5i3gdaiAYb8DYTnP3cjJWQ",
  "key14": "gTxUc6h2dU3zEFHd8hA2BGYLLL8Q3vbjpbcTXd1uUU4skPepnG7Bpp1BvHQFuxzAEFqyswdaduFDWwD7GnJ45hp",
  "key15": "4Gti1EK8cJsZzQcDpT17JJp7onmHd1Exz4vLN4zRnWkPCYRSkPxveDU56Mk92huHK5L2CN6dXgX87oLcLr9459iM",
  "key16": "5RwRQaNVQX244yw21AVimmgKMZP2ro36PWfirvB4i4fw9v8mhfSw1xQSLaYauaXg6dpTqJapBYehsAGqoSxPaJ2G",
  "key17": "c4MstCrh9MKNqEPMgLWvYh1mzo9UHXCDHzi2HTpi8tEKprywD6z1V9JZ5pzUnkCexJfqWn4v3JeggSZeGu5y9x3",
  "key18": "3z9FcMEN46aJQKMTJvH4AFtvqTzDmm8EhZCTaZAg9XrGCERfEhjMYqyy58yFZw9M5NqSHvRsJCYPhx23y5J6LFrY",
  "key19": "59jQLPra4V3WLfz9wte8EvtNBTpETYFgGyyHK2kAA1W62qxLvEvskC7Fq54DQ2CQog3G81miDCvRN7Ge6jugHPjn",
  "key20": "2VcdnGpTtqT7crzXKg3ZxtBGTyTpoQZv36FzUB96WYu4PpsqsdNsD2yCbZav47pSBaf6RZJAdEFFFYLkeH55y6i6",
  "key21": "3tP2pALh9LBUQQNWetoaatPQPfiJPutdg3VhffAg2xeMdQZT7RZJtDgJdday2JTzroL3kN6gpJ52o7dkb6mNmdES",
  "key22": "3ZaHBeiUQxM8xBGeMd6pg7Ty1GuWsozC2MkGnjx1ds7SfstEC99w2j2C2HuMnZysW76uyCaARB48wDDu3QtB2bVY",
  "key23": "7B2axN3aAyy6FJKQ7zt1XzsDRLjPPGsWPPx8q5aekip7oGiYHj2cPd31qc3pnjkCtqjzTgitJevHwGmf8e5e5T3",
  "key24": "31N1aNjiSAeqrVK5Zwemx9wjiq6ArUUzD1CXDxGNps8MvZVbum2AHgv67T6rU8gCAnUYA7XFbQ4FWaNBaNdaTk1r",
  "key25": "RUQCQwJknJ56Krzh9CgFYxHNrzhzqTjDcdYPCYv4hRekWjVtaFAC52xBm2CEd8xkD5EvcmmKUvhySKhNCV5xV5R",
  "key26": "4H4S7J4XCexyqQcVzzjiDHerry3w8kMwXWLYDGKtRCjCJHVXGaZsqQJcJm6vi4VCeqtm69saPag2zjcyaWKZ1MH",
  "key27": "3eDen5Fts3aZQDjjXYUH95fynz4sWa3e5cxkRkwDNTBqEQZohGqWqerynwRYU6rpSeXXCTfCr2ENYAXNdo2Nhew4",
  "key28": "5LX6XWv75cTrJExUvf7NXjSoQysoop1b46xrUAJKNWrEg373fzsbhaAP2rdivAUbLVXti8zKCyYy9oMcP8Vd8AWC",
  "key29": "5SSoJQ9gfE5Ps9d2VvBZyFrwNwSxY1RgZDLhRt76woVPDHCvzkF44kHzRQcLjrojNUpnf2ZKWXTjS5ZN2yfMyXre",
  "key30": "4bmyRDz7GNZdSJmVvV2yZE5JD9VWNRYbmeUdQ57dNgDMR96WioBGMcL6kaFiTYLTUbBW1eQJsEGUwEQAFezaowna",
  "key31": "4F2ckkLx9d9tK6WTpzCQFare2YNTcs4VY5U4n8yWEExPgXPocA4VNnZBkt1nMgty4YXkDGVpkBmjBiBq8qdPfp9M",
  "key32": "BgMXBMW9EsWLntpC8DwmNoLjP6pVc4JaHpzgVuznMkbac72o9CM4mC8CuNwBjVvQAR5LzUjjDtQCoJKFEkMsnSy",
  "key33": "hHj7H4JdTxG39zVunFVrty98emMd3STmuaSKYHKQVhjsSsePQKbSnWbMLxCjMgSbYgYtfsp9G9ZAyL8BethmR3k",
  "key34": "XYxUSUbfUV5c1X8XuWjEv3K42m1Aee4UrqhP1o9q55eR6EnR7fUepH6Zng4ENVPfhrwTEueEjKaCJFqozJ4Sra7",
  "key35": "48McBuPMDyMTteGeqKXwrCb84VwJKeruMbEUTAF3Y8M1fA2GaoAGvNjJAJZcodkzJmzyNwDhTtuRCSAWJc4g63UH",
  "key36": "5UwDJmRJ5rCA2d5bm1MSxp8Yrtajh5N2gYFnoZPKcrc3xT5yTPeqznCYEMCzbdRzYCiLdHEauG4FwefWv5jua5WK",
  "key37": "FvdvbLgnQEzL2XzLE7khMVgFfvzV2sFDjmDNDwbEqW4A9GtFhVpodYkFEK4Gg7c1KFfXra2xemQsiWkhprrK7gX"
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
