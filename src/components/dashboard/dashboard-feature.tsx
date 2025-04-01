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
    "5G4VgPhHaMEi83DXJ36WMbqbADZqWw7TExMEq97QTP8acoifgEGgHkX7aTvkYdd6hw7jLRHYapxx7Q6tZfzexQnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxTfFk84nnWjWfzLpJ7JxadVjSX6QFHPtW8Jhym8CQnzQnRpxQqYdakC1bHCQEfmMXuXkKX8HUA4adi6ZNkQjAf",
  "key1": "5tknL2WiptuxjS4R95c42tDkFXzyGsVCSB7ySZFwYCPYVLiTnvUyLiKtjjLKDkURHgr7cccrcAdLb1qqo7KhcPLo",
  "key2": "2Yv5aXUd7XGU9H4gVohMd3JTd2tgsKb1JSzhVzn5fTKjXvXV4NnGS8t2tBfkRhKynHdTQ9LsPv52rtiQbwzqLyPQ",
  "key3": "54WpmnnNZMjfgyvpBiARNWXWDZEiUK3muEaMEJWEHMKZ4uxXGnysciYcfd7W6UvgmXDtr23i5gwo3gk5P9degFq6",
  "key4": "2ieAHEicsb6i18UbkM8iGChohmiuoD4T34fL649NNSuvhfXrfVrDWme6HtHgiNTaL8oZHBdGkf3PC5wLLwvFaUCQ",
  "key5": "SLctHcJJhJsQBKRjzB7ZarFXnmkfNoaYGcDGoU6Nij2XrsA6v4TqetYueuyzTFTFbTzDFhxU9rYF4nRGQ3CDf6M",
  "key6": "5YBcgtoLLN9ztyoQFnHHWZ2diPmVW2rPT98rTdpC6GFWM79eo3FYyUaWjr5fHHBHoQn9Unf538SLApHTmBjdZx6N",
  "key7": "3vEspdsU2dTt6CSdtTnUZhdNKfEUWgWi7To1i1Q768N81nD7khDTADEEzChuNnVCTHyhvYCoVBqtKnM9f7CsQFjE",
  "key8": "3HsduL5sNscNfhdg9jv1mNFEbNJBxUTQn6XM8rjQn8qMN1CrQbm527QtxQwcKzTzuu2fsSFgkwDuq6aoDuKipWG5",
  "key9": "RcBuxN9c3vJsgZyMNcAFS3qW4uiicB6AKyCRWbHDR5UpJDRA4mK3XtooubkEaZ9Pb5WtzvYVGNxVyo3ubDeva2Z",
  "key10": "3tGDiihoxT7PxGxyK3XWH3VEWxCC1ZoY1QLVY8d2dgTBkJtPkVKdqsSqFmM12VMLRJeQdA5CoHc6zc4cVXDVTjXH",
  "key11": "4ejrqHghKXBB3Ur1HDVXHVvh67JUjNruq1sP3YjFB2xRCv7g5VakFXzZDxj8HaDsGtuTTokwfXeYj98fzpcm5cGD",
  "key12": "5pxAWSWpQJ3wuSA6LcjPDq6hns72Zh2m7ynaS69JcQQp5keB6t88LtSNT2ZiJiHJxMqbuWUM4M2mQ6Ju8r8Je8n1",
  "key13": "zD2rssS4g5sJRxyFe5prZrNTLmjsYbh6CuZZdskdqfqdu8w9UiZEE81YjTz5BSMahDhxQs8DDEjvHqv5gFCSZVJ",
  "key14": "5NxXS7kvPEU3jxrqQBxoJqH2hYQE2RN1SzWPGYyRJPnduzJMeV9XWmAgmnCmMUHnpAVb5qBnm3Uyfx3Vbq8D91qD",
  "key15": "511GcrTpPKFDew1RbXsgxP72RQvJrvzfiE6ZwF8ctqez2iJs7JsD4Jv5aJaQmauG4E1dSatVjjne96DBbtjtFBJ4",
  "key16": "4sHSN2FcTEnA8BVnEgGeBX6BJ7Yd2cN7mvQxAbU2xtEEQZQPVjhesCjwbcuppi3DV1JUns7FEfcGzJ6BmF9eNpmz",
  "key17": "2z9vLSgb2RVWHZApk1vQcgXJUc4fdG2Bbsqiw5kuhXAC39JSQNCW3M9WpiZEBp5HYnfNb3abNLivf1pZraYN54oM",
  "key18": "2AePz2mQrAdSokAQ46YVTshmu4MJJdp6gZitWR4Yc4PyCfNrKkx38SmV9RT9vqCQL3KcNjMCXYGqFzeq4q3BowJA",
  "key19": "5G3iJSmgvcHJv3JGmimHUyEHYnV8TGjKTjZMzL7pDC1z5SQKYPzxo7otEp2PY7DLszXtTMNVs17NApefh7h3664i",
  "key20": "4idFT9aACtdqeNiadGhHRD1Djt5yBz4Z16owBqkB7u7LkxDXh5UKjnE5jeRUFRBPhHK2kJbkdzDaV5gmnhVkbrgU",
  "key21": "2GQ68Pwp3aUMjdiimKETvG4EX6GLBx7RurnvB9up2wZLF7T8jzGcmL53VieG4VTSrXfoAwvyUwUoZb5vzGB245MQ",
  "key22": "65bVB2apb3GqPCvwavwC9ZBG32Kz9QBLnuwxLPL3eQn8DE2gKc52tMo9SJUvVvzwKRpGrmQeU73whDHAkKvSnELy",
  "key23": "s8x8KZMyuq8NP1vWEQwtpRKR1yu8oF2WRKrix1L3FzjG1sNSgZPqa1Jjypfmpk3nV7TEf7PeCcNdBBSj9fqnNeS",
  "key24": "5iwZZFkh1oZqd42mTKQFeHsZ9kgPw6wwVEaqv5LLyWdTuH2cvHRhZBMX1SmtNURqsaGMCsRiPCD5T6TFU2FNwAGK",
  "key25": "3syqRgdr66Zxn9ZAMLtX1yGXRhfQEFi9r4CcJtwxf91Ergovm7WPnTuyUimt6CEBKG67AvJsDBDvjwFgYS4z7Lqe",
  "key26": "4mPViZNLmdwmw5pAGsN7dHR4Rzn2k91B9QXZ2gSpeqhnRDy7HoszouVovVYCtzLbeBE7i4stbPa7Va2bQdy7stQs",
  "key27": "3S9mPzySGRxnnWYUgueEafRi4f2UcnAYVTxngFXz9Avz7KVRYY5Z1DcLjucW87493dUE77L5LqdDqRVcB8kYgfLR",
  "key28": "4hxfddSD1geDhyTBFXimE1JAJvrs7mqxbLeepRezpkiqLs9DJtLamTQbEfx3iyP1VYgisTyzaeuzky95WaA2ct2L",
  "key29": "38q1D8W731PjwYU2n5nVgPZN5eJCD3Pb4c3wYHLiYuLjwBm5jM1akyYHXoU28atBfymepbZM7ndubFuoFUAHnMSz",
  "key30": "3dnfgFjCUzPKm13YHc8FqGxoAW3xnCt6Q6JDNZhhHoBm18botREQQ9EzEEwt92eVTJQBnhWU2aobANS5Vd9vsmhh",
  "key31": "2UuN7qgzbGgXcvgv1E29CsKo6phk7U1ixzb4xpVsCKT7jhdBLU67Ykuzkd5aHL8LU1p2agjwXKV8hbY2XcgkgxgC",
  "key32": "4UenkfhPW2Mect3VwoF87gWDdzA9dJMMRQ8CRVuZZ5fMb55WygzXs8kr1vuC6CZsKXrajxWQpprPnKfBMLAwVMxf",
  "key33": "46nPnmp1b1YqcoRxYQUrJKfJEFqg97D9bticjaeGC9bZsT4ZLDumcJ3CygZuVWatLAHTrEgy6Yta6eh6UhuoGgdG",
  "key34": "3B2LjDsM7BfQKVThRUKe6y7oTBhVL9gLTejsFM4Jv2gJZDqy82kR2XoLGxkjD9SP4MCz9Hyr4zVkZ78EN157NaZp",
  "key35": "4h4Aqf1aqXNSqk16zrmqfv5qECrfGedCMfD8bU6xJJkcpmvcuV6W4fi2WUjyEmzPq7RgWpYxJWWKPKmCuZ7kQMbN",
  "key36": "32hdHirA9D3zSooF6HnqQYCukANxbB7K5YNiPRpe3FY9A7xWA8WBnzQdsvy1imWdZRsPp68y4vaUDrS2UCNiTp32",
  "key37": "5erMY2ycwiorhwLeb6s5U6MQnMFxMtwWM938hZvWkjL4mjtXyTEAnyKWQoLZjT5eJUTDqGN21i2tGFrAKGpbUxWg",
  "key38": "29mZBy8uT2sHJSVbBczPqeHLpk64qMLrwUBikiS9eJtb4dLYAzxb5psnLLhMKFjAnWhJvbBYGgrnvZK4Lmxovsoz",
  "key39": "2G1z4htNZaZkDk5PBczBpoYXaoQnvDuj6fRXTyhiwS5gyToHJmdphj8gKhtYwBNWb8QqvafyeF5ZiEfXdu1DH5b1",
  "key40": "3WDSTjd99sdVM1geTJStavJk4vsPb4mqnsr5pNKgoSSjfS6gi5FnFEZB4h7U2LDUNXXujmoG2AaqkQcyvXrQsDke",
  "key41": "571Zjuc9rVgESqhKgpsQwXhHaCwtCnCcnknj29nyKnkcAs1fh1QUXaFFJjPxyAkTr7a8XSr5gLUjG5c3k645UZmV",
  "key42": "ED2jhRhks7ACDa3vFqgTGCLtAxZwZdHfSgnE36xsWdchs2DxhyjcSyW7jBa7RpWmkh9ho1eRXKa7BZMhQFNs5mQ"
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
