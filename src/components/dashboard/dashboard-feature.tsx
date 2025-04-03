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
    "243mm1uWCiuEniqapdxPP4wwgCiCem64DdU6mrdiYzVdz1djeymqD8TSKy7q1GP4v2gsD224a4GcvWFQa1ovPKKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jjxBjkVFQ57zTphdzuBu9CHz33mSF7bHvaXGg17iEv9Rpbpsw1fgbqA8A8jtfPt8CJT5u7yZX3d5qz7Yv99p6",
  "key1": "37AK8ccvNgRqwG7pxT5UYtu7zrPg7xXSnBhbnyiC8FBWn1e9rBmUTKoLGTKAjnuRPe7CHh4BH744LFxNy83geWeW",
  "key2": "41vUK9HJZoBhfgMYtsCUMcZTp4yJNATF2YyCMNbVuUiyZ4kSbcAXbieC9oRbcHvpRVgoUxu2CJCQSAZ7ApZ9WbQx",
  "key3": "Hu3WRj7PkQTbg27qC9jYGbgEmSu4Q1T1WLURLArXVtYw47JvKNw6AkXNqUzoFgLiWnhqUrEUiqEFMc7hoVWqu7Y",
  "key4": "3bQ8ECuxhZuDCTdtNfyD5D5RkkJna2VfKtajjrSLUind4b4m1nQbqAm5dTgHRcHRNDLa5xM3HVkUWghkcjPcRA6",
  "key5": "2S4bbiKZhrKS9xfgCC6s9kP5PNLpWTMBfGAYCfpdrethfDmJtLGRcwSgmVPFvHURa82YFEH8xuy3fHmoMQB5zZ48",
  "key6": "5kEbY43FmF5cSHuazwcZLGtn5y1ZkFo9g7RUb8XWV8MByq56Fce3vhQPZ7NvTExUdfPWSGVdqdi1gtXGdaSyi2g",
  "key7": "ZbgpnhjdAqLgN1Z6v7ZWQEXJnf1DznsgeCLDHotZ2s3enFmvGKWYJRr5dmeuq2mP9ZWShhcZfecpBUVAThpZu8s",
  "key8": "4JPAboB7YwXeKU8NGRVXTQhgqSZ5rzDsGDy6wJb7KxNapPtGStTk5Wmtccyrf21PQBYjEHvnJrBLnPmMZRmeAnvw",
  "key9": "3VoV9UVDeTRnYNn1bxNd9kw4GeUwsgwwW5hezB9SfZXh2Ksy1bpqR6Vy5GUPkXeWXv41wDtqD2TcmAjWFysCYVdq",
  "key10": "2RLxhuxuc9V9heYL18AR7VWY6AerHCX2ie2Zhobtf7fthgFtEGZyMdd5raWaBGr6StEAGAj5nNE8EcjJFGJM6Gq5",
  "key11": "2XcEWtxppBmECFCjekYdcggQtkWtQjrEAS7qaXSVXmMnxTnJhypRCQ9qXbCXN9vH3gNYV9UiUt6o9uQa53yDFkAn",
  "key12": "5iozN9gGFWMrc4kA9rhgJMbmjQ93Go3tj8ryifX7tbVogXbf8LdmniFR6eG6tSsvyWGA5mLVhov52GNGcyYS6yrs",
  "key13": "31KhQpSRy8834QPFqH6qutLo2UCnopSHndTmYUb6gaPXxB2wbWxo75X61RotWXH3aHLcik1CX42BjVEswKSSVA8X",
  "key14": "3Wm2aXGJjuJotHZU4yg7BGvzUc7HiJiXYcM71VDp9P8xXadptLqFbLim8ESPjriTEApSshg9Xq6eu2YaCat7VoGG",
  "key15": "3z2BZCqXEdvivnPjqFhrvNxjzFRHByUJJii4pe2kqRWkJ18SUxUmPud9JaEm2LoseZTwDsBFt3meiLnSkU95aYox",
  "key16": "4fVVSbPz2QGQWVusnrWGo9FW5UTvJiW8GTR6PD9Ai2yYh91PbeCV2n3LEYZyHEqmpf7NjcK8GkrkcEwkC9ck9Db",
  "key17": "3gR7R6rbqdBAPpbK1DhxWg2zmRrM11VCNc4QfCsL5UQepDLYKkRPiwvVbFwurcp24wWtQiHxStzryTmb42hiZ5pv",
  "key18": "3nAMtSzSQ5MdZfWEGsC6jTeaVxuoEk6EeMa3qMZaWZNzSoRtMZkzyQZTmX9jTNt2MW3Wx6KY6D8ZqYCC6ES672wr",
  "key19": "3PNSMvk7J2ji6JivKL2HcziQGCDzprvLKdLiUDFevmpG9362eUrRLwbK6WLKQD4mKai6WyPy2551MNHDYgCfFPB6",
  "key20": "sr28Vqwx4xWiZMge5c9WW4gTL8JjhGn4ThK8PzYrFVJYwUG4g5CVS1nTFUip6jHhCgUpZSrmHrgC1rKdQ6RTDuR",
  "key21": "4pj1eDR8zAywX6j8G1QqEXewKhEEmx99H3tRyuHmbCGyu4iE7Ai1ZsHZZpN95ptzqiSAbfTLb79qzcogMFSARHjP",
  "key22": "3SwuWDrThPcVZtekFr3nyXxPamRvkhoUJxwakYxLdKp1Fz9eyEtcrK5QTU6Ru8VCSiDcqSNkvXkXi5o8xAEvpWBP",
  "key23": "5KJStfrMMzYdaWRzqQ3FmvqDMgUpibYKpfxWP3RqK1Ta7tJPX7E5fXvtFDAim1Loo4MfaxsiTuaQAjaLiN5EB9LE",
  "key24": "5yZ2Je4dCdjQr2BTCmiKpVfujnjGxJZtiWiYHmoWAe8y4JvCf57D93pzxyhrhLHvfmvJywqPNPGaAF8FwEeARfat",
  "key25": "jzyJ97RCwvshcDQhKqj3RT5wXjo1AGaTZ5nrMtLBsaxdnCqSkVLCapiWsiLG2FpRyU5G6djTRzT7sHXjJnDAcmZ",
  "key26": "4sodRRYT3wSKicQKx5LSTZpVwsqWGcsgpPs8Y8oBRNk9otP76FbB7ticLQhV1gmhZxFSuBsULCEuvPy4tFzFWArK",
  "key27": "2TDu84YCZ18jT42mPQye9VyFoxE9TJwPHf6YZNRYsKtm7xLahXmNwpha6CYqWLbSyQ93YVs9CAmnDFnGTdjtaACM",
  "key28": "2AhFLRHSHqFwrG4HuKNBNUMwqCduR3JKDwYkd1fKDyTB3ivQtt3UEMEn8dEuSDPw3eAMtT81MExAHM2qiMRyQtv6",
  "key29": "4V8et1C5Le1Wi1mCseiErorYvw8ajGa2yENvkM7t8Jn8WWa4ap1uWKk1JH9kGnrsE3Gt7XNHbEfrFc3SbVgVUSDX",
  "key30": "Zk9xArNg3KSEUWdpKrPn3nCFP4318ZnzHmuCWPZFkBe1dL2daRTbQGMgaXTvH1C3HFzcD3eM7gfV6kagaszZR1Z",
  "key31": "2pdAdXXZc97Me23bV8LRxo1kcAxyGGernzDbvXuxQz16GsJj3eXiP9F9PRo2SSZD9x3PRmGjvAXxzswXrLSfuCaX",
  "key32": "4e4U9xqoQdSAzAe1sCAiZi11iQhp1ayfVZfwQcU7RgfgZzG72Mo51f8NntmWz1SaRgyxpu7sdveo3x4ViEhWbzFV",
  "key33": "2AxniVUd4BN2ynMf2tP7g1i2um1U8ahUiNb6eQA3ZXjNZbfKtKFFAuCuqWabRF8b7ayiZrHbNjG14rrnkeLwFabE",
  "key34": "3ZmGDom9ntgxqqTwqBxiAW3oFCGzJtpJm73uYgJUa7o8vNzBqUikTLuPzLG9pYTbsaEVfwMkm5t6PRsLPK6jYVLz",
  "key35": "45T6NR1ojzbd8dKKn3KzZbcYJqhYJ2VSobUQJKoZfzRQ4EGSQ5eR86d7f8zWb3CWGyVSqNcGJYVQGMgQztB4pHon",
  "key36": "5BCrGNsf1VSNHGD8ZZRayE1z9DDjiHD2QdwA4rD3pWo54pHHUZK1K4foMZPLRQ8QTw5Cvh5CaWs5w2YvcUrjgnww",
  "key37": "46tVRkbnNxU5h1a8Q5FBS2hqRAcNW869W2LHSm3sPxAk5rDeSwy13TSYD52MGimDxHFx6CavgQWdrBZgQ4nq1Y5Q",
  "key38": "QCu386uDxT7x9in77xMEEauiD6hmTg6GpKiWeVqwCKu3ezVzgeznxvNadTJrh9fQqyA77DQ7BzZ9da5KQAPDqPs",
  "key39": "oYnkDsJ6cwrvCjWkr5R6zH3vzj26NNgzrY4aefjbxn78pcyaG11xmh7c44xQdowxvLqvh9nP32mvLTSKX9RsqG1",
  "key40": "52nY4XZWSB5Nqm6DvB9bjXUWnxx5yWDrZZ6ux7TARC5DsU1QTauAKLX79nKynNR883j63NUhMHrLusRp2kxSzPuW"
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
