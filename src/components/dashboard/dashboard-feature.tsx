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
    "ghCvZ12wi93FmC2MVaxebi8hY3DfsCWSXXbLHivENQXvNqEEXQXTgz26YrkA76hrN3ndUkn2NDpch7dcUxL8swW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vuhgfAP6V5XreCsomeURKR4DCAXEWu7HXLQpzLKeLkN9TxFLP2hvPSFYSWodUhzXrYQtxTtYWLbSkcTLokqDXiX",
  "key1": "36GLfJ7gmAPQe7xF57Zn4sSGaQ6rpAfHQgodq1rvY5jcQDdJKAs595MCGKPShfpzBTbGcxeSe12K4KK4fyWtAarX",
  "key2": "3DFtoLFAZ45AsG6S5sfmFExfSwgkzyy4s62b6HkKyUkG2VifP95PT42jVDJ4FwkA2KwakM1SMjHy6GC5w5STMww4",
  "key3": "RXpTKC16SwW8ofHqNcfEpCC1NkfUNfHsPvyC6UZgu8GuvRDXSMTC8DTK8hNeuDFQqi2zAaFU3oPkV3vPUDnjxxw",
  "key4": "562i4p5BcCPLAQ9WuXPVur95waiNe3sb3P4hWnf1XpHMDJM37F4Epybr2tvhNurMSN3G89rRLW3RW9G2P3mVbjwd",
  "key5": "5nmUSn5BcFfBKKv7h2dtAYi8bz2vK6Eqr4DFQFXcYhYzNSYq3EbXJhindnAVfWpWeP3hBbDbJojpu7DR33Axijmb",
  "key6": "4KE2UguYD6yMfbnryPfSQHAuzdVWLEVHpGQv8YaXAQi2btopjDF9uKaRTqD9hiSTLBYnNwvVKm7uZnpB99uuDSU1",
  "key7": "3DQcSeE1ybEtXWQsK4UAUZRXdxGc4hekS5J1taFcezweLLSBXgiRatcTLDr3Qf9DqW5uBDX7DJ9yQ1vhd39F8vS2",
  "key8": "QsLBsgbAJez8rnhQDsRb2RGiJkXwrHdMoMwsppwBgAYtTaoDJgPEiUnNqHyDgVk8hGVZdyRZ6p2QGqoFrLPcPJB",
  "key9": "2S7YKB35fccusczLb7QhxUkAqRg75LBp8nX6aBuqiiucbqBzkKRju3XGfGSf6SdR2uazveqyeLekFZvM2Ur9awyw",
  "key10": "EPBWVsTBh5tPN93gQNzDUpiesVdnyqPxbvhCPZXcZnivj6VreArXD2GJjjc6LtrnLo3pfaWtgbJf4iAHZ8ALNWk",
  "key11": "5WVwEiyC4DuwYqiFtrRhPa6NJUB3nQEghg8gY4VAA8FKyrjaegVEt2hcqzhKy3PK5iPwScX159wcmWatMFonq3ke",
  "key12": "28623RsERVuiibWytuHC52CWohxtgTjvSsa6dQhCwcyYvUigxn12Ryvg1iFYd3NuwsKrHxyuTW66oWxV1sWr7NKz",
  "key13": "5uLJiysSWwAh6ZmwFivazqCN3GY9XhJvY7w86L17E2Dji817F9KUpqY4G5uznv9XAAzT1TRhR7GAnPr8fxjvsdtB",
  "key14": "2UW4NyEfysbyrhgt1faCMcXk9huiDcqhkhUiQUxqtGCntjGTSGyHhyjuD9YtbeUWLHVCR16kMTcNWb4VhYJ5Px9Y",
  "key15": "2J2W3Z2GuYjjmGsrd4VHiU84yQNYeWn9dzJFDnRnCq9dDETDXaggDkPvrNKoBuedCPt7b2LG5cRDTTcc2a1LMMr3",
  "key16": "5M1LpyE2JZ6o8z3kTSUQzmiU89a1K4JVCtN4vQYsShM7mLv3yPHem5HfZLHLbxnSGu1CZkQUxS8QUJJwq9t79mem",
  "key17": "25htWcNQZxsouUMcqLEHcXSYpDAWPi86SiS3CFasqcW1GtKHQ8jkBtzYPpP3gFu2QMbEHGHJzuDeFVqC9jV4wPPt",
  "key18": "2CanRqszSkhPGCsbXnBnrwiJGk2Fcg9kv1sBt4HKaczcrYr6qQJna9uzQLZZtR2UDcbiUB2WwsyEF1C42nv6uTGR",
  "key19": "wcd9Myv64XYrTU3G1ke5mtyPRRbdjT1ChxzEk6onAyAMsNUKeBBUd6cSxeoex6PhSipVWnvCTJg53NFoDsFHeGu",
  "key20": "o5AaDnz2ZLq4ucpfxUX9iND6LVXnwwrMAkKzHfe5J2ZaUTx8yrdEi5q1KCuL44pbnadNPHsqpKNTGxc2erR7uzH",
  "key21": "1KJh3STx3sEof5v9tDmXfK4iNwFeXAm18PVi8gEgEcLNwazEDvhRV2j49kjHpMzMFFEdXch94WqhafQSPCQUUqh",
  "key22": "G41ziX9cMNoQ6jj3BZ9inCjFAAWzFn4qqeKVmHehzqgtawBW7bqLW4Aeke9jxGvNLXJ2Rs1P6uFbjp9DFAyTtXB",
  "key23": "41hbEGjJfjyhpHW9tPiLChV4WLKcdS8ienC9ipYTtQemRT3C9A5HAGFJFkRd7PAmuv6hKevXZrqSeddBV2AMXs6s",
  "key24": "3kkf8rLeE2DoiCinLd33yJtpBnRXNq8JXhwZyAWZaJB6yxBEZQ9NwmAcK9gtR1XDmSHULuSsV3o75HdgUtDLWwKe",
  "key25": "3129acq8TKRjfTxAhbePK1yFH5ehSc58D2co2CMqnvAEUTdN1YpyYcHWziYdEFPKYT6nYDcRdux9g1yJeaQtSehN",
  "key26": "5wy2R1mRXyispzNsgXjvEKJtvgneyKZUr4kgQYT1DhSCDaxhzVYhhQxzEPkWCip8JpZEMfzpte3rY1782XozUHY1",
  "key27": "4iWRtCooZLvvPh1WCEoL6GCWwmY1NM9FX23zt3B8pbhEQoUuAMm6TqC22jKcUSR19eX2r7xqLpq1Cj6hmPuvqPax",
  "key28": "39mUeMRgaeLNHE8xh3J6n8ZKPB6m66YQXNyJWs4UTxWw7mYsMwgYPo2bYKDMpZbEQJQHcwpi6WBLft4aXT5Wpaze",
  "key29": "434dC7vuX9Xr1iWX6otN5kBRhkvbafzzKoV5djLS2M8Dej1ptpEeZbB7FyHAB8WZzLUzPQVnWaRsLa6DEzyzPi6e",
  "key30": "2rgSrqBNCathzmNpz4ik16orU2Lk133rVowwUid2BoRnYBd3PYYNsXBk4397oVSZodVsx3W3KkfU3uuEnf2w7sMn",
  "key31": "5uG97ALAScVVhMmXEjiDgfJf61JP498NMX6H9sv41ccKAfvhzZnYqDfPUEsoRGFd9v1L6MTCCQzjbCp57xbAsjKz",
  "key32": "4CCZGE46KcoQ3uebE4FSAds77924G8KQaRBH71N36WrZGvB3MGYZP5jJhBiYKjzCk2He6svMVaE7JH3tQ63xUQy7",
  "key33": "3XPUX9nwgrAwUke7USXCo3qHZ2gvQ91g2L9FWPcRsCb9JMrtbcQDHQfv6s9ZqRg9hSYgrSrnh5cy2M3xJ3yTBT3K",
  "key34": "3xFqHd4qdwDMGA7SwfxuT367q7uMuuDLoa6FNiWp9ZoF5UAGTb2ZWUB2v5GUmKiX6pufciN4FPNezv3PGADPo7k4",
  "key35": "2Nuic42FjThRZqvYyc4cGMoVygUjVpjkrRXzDtDEDbenVgZYuQbvG8P2NBWrREoE7Tu9A57kMcxsYf8SCLU15KGe",
  "key36": "2WdkZUQuJJRMkqCza27vN82ZAVvwqVVy9AW8gzkyQ4sHhR9w8nDmBfthQFVfpT2pjMPxi8KR4EzwCFXq6L1KwcNf",
  "key37": "xejt5Q5Aa8NUFjje7hgBh1aJPeq9EVCGbrn4EcmmLzs1ytwFM8yf8wQnyowrGtgSmYN2mainoDZpfERqsWFXjDH",
  "key38": "2LmyWmt5eHiLXbxjFprkeLnYTk5xCpAwySoFnDj7yQtvKNFxoNoHz94Fg3uuJA8XFL9YVYVXwuAR534yaPTkxR3C"
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
