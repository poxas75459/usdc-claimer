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
    "4zq3j6sQod76EagsC4oBfd1sbvYZ39YxGPCSjGv2kcz9QgPQjV4C4nCtnXAiZuRQ3psurYKZByfAMCM5P4TYnAGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9Q96UDZPgYGxvFkBRfSDvynVL7qbtoj3UCdhMqEc3FtmAcXUDCk6QPoJaDDC2upFysrR72T963nHZ95qPrv2Lp",
  "key1": "qXiWadpWNPVnAKem78vzB29YqJCbF7q4QowwG7RJkQTEKoQaV9ndKCcxEq698j3yJfc6fGpjjVcyUo5a6QxwNwY",
  "key2": "2j9LuE3LBkJGBVvGgakQkgA4RLUi1BbMfoVouLxuHHpCbEepTFaZ51LZmv962cKgFABsLvLYsRoapLkPvbVrQXyC",
  "key3": "2n6yAZD1MFvhuRw3nV9KK6JruehvxeyeosCapFhqCeHvBZmtQnAuKae2URKV7DDE1oPd3paSVsE3K8QpZ7EgdMAS",
  "key4": "3vLs8Nr9dzNQAK9CF9zpw2Asr2u1jwMQCgBEm8DZXGkzxgv2AVAyYFGUDgCAvWJ5uu4uh1pvCGv151EgsQNusEHf",
  "key5": "5aVNQs6hHx4Heo7vkVxLfFyiJSDSPJSqgkUoTdUyhHqmNUb67ZJVsG4d1KNiqqqFUAoG3S3BA5982PvnGt78iNsa",
  "key6": "FMcZfK9FcabUTiRtJZttWZ5BbkpSbn4aBva5uYcARkE2c3HouNs9VgPN3CCB7dFQT6L6W6Bhp67sXFhQLVWuYoN",
  "key7": "5jxUpeLn4VJuQryqSAADXuoz2TyQbaVJS9aw1zFCpZV1kGP2gG2DFUZZUBae9qUHZRjNWTvoPHZfWGkY8pLAH3nr",
  "key8": "3kuUnVEcJWdZ7PzLneLsbJiikaZQeGthmt5JMBguDdY3US4DwNYwVhAMJaWjqSeQouideboJwNZPYfNAsSocbpf8",
  "key9": "7Ct5JtDjCRHSQB96UFkfXTjK2tXmE1B4xgmQq4xGkuctQFy5BLWKh4Sq5cTxeMVEjwRMffRArRywt7WnSXqAo6r",
  "key10": "2JhLVNyDdMVnM18Z3gMr1DaKPoHDcMfgHzATH7Xx8jyR5CvWFGrJ3vXXZhboZDgUNRDfE4CydCwMn22V8PUeXHmN",
  "key11": "123j52QWURehuyu8iQT1kTn7omjuWssEGAdeUpV22sAhQ9G768yKzs3wARmcQWXz4rfoYKsraovDc5npc6Ep3Wop",
  "key12": "5D7XU52QJrXfJUx9Kr5fqgzfgafntWWx5HeVnthLMRbA1vVApnDNa6YLoKQYuKbUSaFdWKdAjivN1NR52xMfmfEJ",
  "key13": "4L4damQhif2hUAoRqWxXyfbkqcuruAxywnjYMi4yrTFxQZiiytU6KLePx7QVrs7Y1QWeyXovZ5Drh393ewUVu74Y",
  "key14": "4CG7Hdz2nexVfwMqx2JFsDkwD5hyuAWwRJqUAxhUqzQipPiMTYCBwvqM6XmrJFhZTfRnh8FkexrA4VF8UHwiWcVL",
  "key15": "xptFwavFhu8nHRS5A1WYbuUpEocUwdcnkoGnvhuL2s7UKNWeefivT7XRCTRHHyyd4HyiMiB9DAAjR3Fg8NJo7Bb",
  "key16": "2HucFAroBZ6EzabntkZuiHnnD1GXf3JrLppCzedkexUTQTSF7NSxH9Sj4RMaNWTburcZjVDyt7FT2dk1mTBJEJ1d",
  "key17": "3qoc1wSCva7VX2ReuzYCkAJ7BHdZAackuapjcNpNsxwqwKgH9jN37DCjUoUz79RsCjc1aJFoQjpGSG8Whwe8hNmp",
  "key18": "4qSjoDcDwQGFAt6gNEx6qZW2AYvvMqV4K2M6yHVRAV4byAAGv1KKvbnYDsG4XATEFvbWw1w6h5SqBQBtAE26StD7",
  "key19": "wNMbf94UMN6J95tah377g6eknTk9p1v9BDks55EvTvu5UUezWPBv5ZgQZBK6t55q23KM2J2Nr53mwyvNYxK28vQ",
  "key20": "3ZHWFSpVyxVuUjAJhmcvgYinZndXxmq7BZDAEkMBYYRDeows2YJrsDzHa8Drxstv1gA8X2mRDfqiAzGiViqy7vsd",
  "key21": "4jZURw7AyYAvCtAAv63SVc5Xkzax2EyHfqAnmXvaNLUJxz5dvCYPvvPb8i8Y7rc96ga4znE6Lev3NeSFwk6tRDzq",
  "key22": "5AYKwRLzwwSu1qxCi2h7KnVv9r8gWx67j68awzoTzbUbF5nJXwKgQDEhTXwvhATiR1hQFMh2inHk5PTghYg6rZLc",
  "key23": "3sxH9KyL2xhbTbZtDNBu41VpYRUiaAhP25PgJNuDBQi5g2qkhLrjbULL31PGS8JuA64BaNu854W3kWvCwfThGhQT",
  "key24": "5dJu65q4HaRGpmnxkBaWexzSeyE8oBbveyV8k5agov7v7xnsjjo4bQuuMzDtgUHfzGtnAYWPix981jL3kvybPuJD",
  "key25": "4jpHpyVb1vTqVWNR7vivgLpKQhxNVg3VozbfMv4TiBgpGkxoQ9XmZoUGhAb7PWrcyBq5VREPiF46cjVxgAXevbdD",
  "key26": "JdQLhVb7EqBVoTCTRqRdG59iYTWwdVE7ukihVbHwPm6xPBQu9QhPNgdhCzQALxEcAJvrMAbJ1ympP3cyxxi7qCM",
  "key27": "2wCwMAJRjNyo3eZ8jMzmBzxD82cKKcLG2G4jd83a9KQfdFDsg9Jke3h4Fpz9P36ExSWwguV8Gg7Qpk6oRfq5t7bX",
  "key28": "5dMyvEHHfN9mJroP6p1DED7PPFX2dV9pgDzY41SN1qRbv99qnk1CAGPcUpsPQ6ui8DnkRNKZTjSzrxDUZTzSX8LA",
  "key29": "3xA1kQepDS4iGTrARLVSSiJ86kozZXECzEgDSKaShPiUUrfhGpG5GdGqu8gbgZUnZ9iGZrMi9y2MiMVqaxwbyKoZ",
  "key30": "V5MPSWm5ALhsUvu11TjPB11Bfv44dz6a6eKABjbvq3bN4pLffVYFgUYB3wmVBHcQNVEDV1S2c11NsBKqW88py9p",
  "key31": "2zQQbMteq3MtbkeUJCaux8zthrt9P9qzJ4azJdpj33q8nXAktrrQvxwjxhDifrsAiZs6Mwj9qrnTiXsFArxFShs6",
  "key32": "2h5G6E3XYqhfZ2iVHcNPd3zScNLCobwfZjkKmTbkC7U4ESyoE9KbN5Y7HrQW2eytaWP5Nmajo7eLNMx7kg1QdQVN",
  "key33": "He1Kp569fSCfqkqfob48eRnJrQFmSHS1Q3czi1qiNwiQW9k4gwvuLia7XDbEgMtkHFSTGnjGxYBuPVfauh24FWu",
  "key34": "4T4c7273r69ydroMcYk3mETuXTkpSA645o5oX1ZU9KVv36PX44kv6QX2XB18vSqoM2YQB7C2LkV8mUAMU8ECuyDR"
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
