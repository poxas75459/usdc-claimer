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
    "3aa3CMXS5UYBzJGpVwwout1PG4qokYXS63rxSQeX7zy5YLZMJi9v93QTwKrLs6fKhMExuuq7NLkyHg87HQg2bKue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCxN496VoNFd2wVSDJQ6yJY1hMrGfmsLGXMW9EbxT9WRpY3rrTUJLGQ1HVuxh9vXgCWwTc9pHUQD9mRDq1QiwV7",
  "key1": "4oHkeTkq4o1MdFxc3tDNhxNvWQEd9EV3G5Un19d4x92HgbURo1nmLbHDcmxBdK1o5QJxnAxb8X7bsUfwYPaJaiZ",
  "key2": "4ngVvdi5Kie8qNEbQvqE5MLveHrHpePEJ4R6yhmdkcNRbDUniKCx4bjR7xY8p2aXX6ZzWuYULZA7KD3SowBF92DH",
  "key3": "4hxYLSDCJqi3DxuL7BmofCH449po1ZBqauSnUJxMPLBxS2DVtH6wqJVfCB5ksWTG39f3ma778xfbkiss9gXEoSQe",
  "key4": "xrtApZBGAvrLr9qvoVv5b6M7uRHL3ufgSaxoC7jJGc8zWEqgv6sVkaE761JLWyWtkn2Bea1bAcE7ntE1eUUXwEy",
  "key5": "4uojkCTRwzpA3H5r5pGVEQ9wHhkmct9Q9DpVjCWL1GDjo1e5CeWePgjimnxvj5q53Ves5mokoWVcfoEYo5gwFnXJ",
  "key6": "3vQ3zMAJUd2hEGJCuwsA6kUK2otwrmUEKHkPhCiEzQ2qAWpsGqGM7mFcegoGpFecYqNSF15CjmxAbqaWWmQHCvMn",
  "key7": "4LgNnq7q8C1TAjzE1shJ3ewakTe96qC898RkHSuYPzoNYpkNAsJBqYnudNdpfcZ36W3Rj2qdSsL7MqEWRRPkf3cu",
  "key8": "Pfnyw9zEyKthXEDfTHauPLV5roh4sT86fV3tZ8vdH781aktQJw4ojvVnWDMW3GKadfcXbqQvyLaiwhzDapTUhcs",
  "key9": "riidTKxyL8kMu69JLA47HUe32eLJLLo2pJqunjcUqCeYmriDUL9yh4B4pasRfPmkrqr8kQzy5J3u5jXaVgQ2nWS",
  "key10": "2tq5KQZSkDFyf7aGarnTCbh6J1c9QKWJcDqd3DT9Z3tqczezQ45H4mqca3PAdUUxfxWpPhVifqbP7bpNo8Ng5Bsm",
  "key11": "2S5hvHfm9euiTeR44QjnnFEf8ZA3VyHHpUDqWohYkxFTmLx7jFHK5YtkV4bNSEP5DRSKJiHiALDqXA83T85qZVsj",
  "key12": "5JYy2MdB1Py6kWLGKLXfFWRwgNimnGN5pgMKT93V2CZabiAzygTtvLfHt9Pvi98VpoBJ13bv5xSa5JhiaDnT9c7y",
  "key13": "8rn9CViuy7Gar3ZdDDKUb2JDYAzWnU7BGCP5Q5BGBASdLBNzwYJg8Fxf1RaSPg9mMb31jwrTEebqRCpWR5xbt6W",
  "key14": "3ZgrdgPzgRfnwjYqjxN745QXTs5uv32JpkGCeabR94EuvyFEMpqWwhrf7GZhFGZk9G4QACFnQeWHYH4C4WpiExCn",
  "key15": "7fnQJC2PKWiMSzf8CdhUT6EG34Fi5c19f2NbRKnPfkz5QRcwj4JTgsHnXmc4MS6TcnyRR91wjMTGwAiLXRhC9tR",
  "key16": "4H1kGHvN2jbRyp6seU1snkC8KRJBjTewnUCiuokGRP6Luo5y4KAUj7pTjDWk49znqekFUaZYAK1QdUCWxZ241vr5",
  "key17": "63vXsWimsVhX1Vbt4TEQbKgD6nG5qy5hqQoD3TfY7W9FkHR98MiTsWeTr4Z2xgWzMx9xrctEUvepCW5i3nFqG2Cp",
  "key18": "gvhK7gvHLj7W4jKUzzNJx1xaMUTQybN87KwdYRzckQg6E1V1MJk246zsf4KoNir9VbnV1UBdY4J5Kr9scdAmG3u",
  "key19": "5G1gsGVYnzr6y16Wtsc4AvUpnCdQ3MnsUkKy2dAQb2SNNKY9jzK5PudNS1bT1A1birT3d916kkzjFihN6gWYV8Mc",
  "key20": "5F6QzZf7tNwpRLcDZa9CTBKeepzSLLbModpgB8HiBLqF4v3g3636kaSVoAPAycGhnbycMfEa8QkApaSzf7xRFod6",
  "key21": "3Ji6HonAdBWHt9hP7wNxRCKuiwHrgWVxUiMmMEthtnWNNHbxJ4kVG4YBHF9itgtsanpMDMTjCi33ksZj6zCUBphZ",
  "key22": "4VJY2PfLxKbEFQwMqbkZwQ5JARyPzrFhRrDmyZizxFiUAB15eYzQx1Sxb54WE53epLG5K2Mw5aRxXHqWNLicNb2s",
  "key23": "JsL1ukCL6MqJkEPgai9hgkA7kyDtxKb3GbPvqfLNzxsPjSCv7er6VxjnesbptPVe424tphEfKRsCURhzx7BfVvQ",
  "key24": "4z2jyfLav72pwsagDDtPnTnbBoKXtUEKR51LrbcavjdNow6Mof7H2K1k8VCviXbDL8LMj1foywPNy8KBLzFS5B9R",
  "key25": "2345pqHuA72tWGczyuPcmWW5RXN86PTC5iYptbLrj6JbAjJEqke9kFXAn7gWziNJ3sHTYPFsBjX6QLgUtLCf5DLV",
  "key26": "tgVVGiSrProfHBf9XtVfnjZSqNjMLn3Wwqbn5am7TSyw5SajjjiVNep5NwoDEvor7odBb7zWWBDY8dfbDq78imB",
  "key27": "4vPnqqx65bFLkzo2QcMEwTu159Tsqe7F3g7mWXCsizs3YUxRymjbytLSarSTQbExJH5sARdxGoBZi75uFNQj6L94",
  "key28": "2DKXPn6wjVNoXnXFCFmgxDtUGkqYfLq9eeMGcNcUArcStsYWVi52iB86mBDwtpNH7QVVnaianZDaxMxc9xXkom3v",
  "key29": "cYiVasNRteLviTx6oRf5ojtzFjWq6LKunTDTHj8Duo5vTpBg4KpLZygn6P9SiUxt5zMfDrBgpXekUNpnHCSTo3x",
  "key30": "9wxxdy6jzp427FV3t8yLu8FHtwky69C1QiGArfn5JGN4utohtHLd2XSi3hKfonf6riHRYcA5MoavAreS5b7Q6ky",
  "key31": "2gREQh1ibTiLpMovNcSD2u1GzorpTBBm6tK6erATsPjMttW2jr8YEJHswuJjDf6sfADZipKR7rEcCLNuikm8R1QU",
  "key32": "3h7NuPWwnFT2gbeFhghCg23bHHQtjt1KEZqrh9r6pkpXVTWxJ7hT8ECMz9R6ZxDdgUkHpT597For34wXi7nXdhpw",
  "key33": "4KRA4aWbZ5R2XKnwkTMrBM37L2QR7djTJ8NqFDuVMDiKxU5puMFVSADT7r4vUhu7bTwF442BS9W7tYhkSTX1JzrY",
  "key34": "4ko8q3o9DrryfgvWoKWzgg4DJM7BXWj5du3kXnK4jnvKWMT4nErButidyeGQjZhQ96pTimi68mu6jWZFWNjsuLx5",
  "key35": "upvekDi6cuGG7uyErU7iLZnrUR9diJ9cLJbdy4oFY8b5hRYDT71VQqnTzxHwHapDUdLvj4a2f5Y4ThVJKSySL2C",
  "key36": "3rwscCiED4jWnRoPQGvqcDZUyt46wKA7K8bjGnGB816aPVy39ce6W9dZXv4dpUst4kh71xyu7TzdBamL92941sjK",
  "key37": "37kXCRuSY6qEjU6NDM9k7KZWWiMn9VigKcLcA7AvEbtK9RL3E6wnNj2pu2WW9BoGegStFRiXu5KkzZByhewsjZmj",
  "key38": "FLL7yDFBXUELfi6MPoA5bhHaifDGAkWXpXbQb7rPA6ba7njPoGoTXS5SM5iTwfQtcB8iwBfqbVw5ouakEh7mJVC"
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
