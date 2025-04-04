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
    "UX6iYtUmQTRgFTXFUjW8fFw2kN4hsc2xWwQBQP8ivyaabmsF27pdxFmnvgHcRn32vwjtzujoa9AZ5uN6nUKuxtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25m6uj11eptPCMeVrqbPVdTf12ZV1Bo2ziHYnJJ8k6kyY1hgzZQrXoDeAaS9ARwC5uB45fM6GFDd4Y2ZfbEvL5bh",
  "key1": "5ezvj9GPVYm9zxQHyyg3yN5Bk4AmzjT6Tm6JmjjJJhABhVxeYbhbo1pifNeCTMrS5nNMC76cKMfCVu4BeGHJbHJF",
  "key2": "361paq7rChyyNxTizBqZmpcBTk8XSvpPskGww8m8zUwQNygmbAw9Qwb6bsP3bSqSTo4tLSfuDwhkGzmN5MpB3aup",
  "key3": "5mcw2xRqtMn9Y15J5LRLdrBRj8kyBQAXUAPVEDVArWnJB2WGHwEedQSiMW7zxJg4oSUpQSAaUeSL4LfhGc5XXJpi",
  "key4": "4JBsKn58btaMPUsGcnjdz5LkHSecbyPhwfqpPV3d6ogXsQ7XvKA9BwSJ3mEVAARyoEgi4N38yYWtotyuhqp1nXrv",
  "key5": "2K84uQc7XPFRZfRsShiKWo9pGC5CNVqyDS4R6JEZpRUz6CuHxjU1UhPxstCxkZw87xn27R3icEK2oA2WGq133szr",
  "key6": "8AKUUkHQPPwBwgrGDcjjvCvEvNog7KGs8tW8nLjAZBjXoRfJYD4LvtPWYqT1K47vt9BT7GS2dyfQN1Bc1zt6t8u",
  "key7": "48DiC8vnQNoh7QyBJ3Bf16qZvRX9vqAFPKSCMaxhnvUWD7roLj6UJCPCJYaffvedATn5MmKtSKE3aGFDBofGdinZ",
  "key8": "3NFwjD2oz8inyHFEjZi8q5iiYVd1LRJ63FQstzHecmf9Q35yTpJg2qQmHgiosiigqWWgzmCtgLxbNzhXsqisudM6",
  "key9": "5YXaZYJ64Q5KpW9nuf6FL7cS96tg3iqcopLL4XjqGY8AoXJpHpJ6cKNwqXcTG5udRYyWMVdSC9ckS9GrMdcFD4K1",
  "key10": "2f9QmjhKyZdMktoZL1vde62TWDemXedpUkrVYRtysy6hdZb38AsLgC9pPn7vAAuUR79iB3rvszaNQu4Bo9fCRxkS",
  "key11": "3iffP3WyjaaP4fWzBZadEx4PycF22fw352svnetnMvYH298s2v5JAjzsPxfAhXm4kf8umivprZ5F6eUJSiCE9ws1",
  "key12": "58UPrkw2zZHGwe2a6nvThHezDqZGtY4gXHsxwLWoctrceZMz6hiX8hYihonfpK4Y6mgiPXppt5B2QZR552EC91K4",
  "key13": "2tbbCbzmwhv4oZM7kb9vus48RaY4vVt6m9vwDtFnPDzDPdre2QEUA65xrz2bmNguBUWSJnbL5nrgV54g5kBnfwpj",
  "key14": "4GNPpWWXq3EzuE9N2MCwbdwyLRJzokzUXFJpWsZgpBF7BMNGkf9AYSxnF72RoL4wXjigj4UTcw5aWi79dXfF6nzP",
  "key15": "obFq4fnFN2pHzWTxZAeUe8EAUE77EszZovnamfMfqfRcKc2eNkKMA2KPjb2cXbpqCcM9UMsGdzWTXx8uwkSa5By",
  "key16": "34Cw4HqyeWsVx9sT6WNARgScUx4R8Mga9R5jJ4wypG6mSMFbCNRbYZvh8HqDivivB3AqRAXKgHVcFtyT1sa1UQwv",
  "key17": "2Qj3jK2CXUAxwLTe54MuepYWMUg51enZUGrmZhnocxtP6TguYZHRxSeZLirgf6yKoM2LwH8m6n6VgxicKQmxrU5t",
  "key18": "8dQsC3NQ7oURNww6ZYGANgAoyr7JfnFkpzBbXbdFvF7Lg9RPuncTp4EuwNi2kQtGjgNF2Ay4iUneBBZNWKWw212",
  "key19": "3R9s8zT2FkuDRiTzpoRvdBiagQuBU3kquxwNvg49HqCRvEoZDRGxpZbYdbUzQyGqbZzgAfAVgWQvqTsvczX9jXji",
  "key20": "maTVaabRV6KWYoTGW4aFrjydRwoPc3qBzTB7beBQrkxTAxwzFp7bnG1Py4QcCjREfqLibsRx464tpRNWnCDoLJE",
  "key21": "3Sn6g4rF4Djo4vJj12X4nFXUH34kk8Qp5WGmD3VWZ6CP22MDh6jqbJtb5jXL6etF2qv5TRjG5EUH7PzL9qkEnsWj",
  "key22": "4oe4Zxnvu18JbDNnFQhJtsx9uPu5zQ3dbFcsj1ZzDxmsbwM59hokt6uZqNesqohYo3tm8j3RaprYQAa8U9i64V6y",
  "key23": "LL5gQjvBQqpJhmQvZMoUSXaVxazn3mvLjPyC8MPTPtWRmnrTuHg4VFzh4ENZroDPux8F8Dfr7r6E1mk3mzs4xcy",
  "key24": "2Gy2PMFum5omrBw1SnyztR8gcBHKMxkc5VywG4w2d4veDygeudzwuir96S7vqrJtraTM6vwKWrME3tCRjNhvFb4C",
  "key25": "3bPvHuMFNT6h45sFSt5dZw7S6A9AJPHs4jiGKL11sEiJHwnjMSnyER4Xf8D9ANwTkuJRGSrvJ41v7WkUyFVcFS4U",
  "key26": "C64mB6pSYHTa6mkWC7XuG49DcVjxW6AjWZMUAZFDS48fHCy9e4RDECMaNtG5dtyMyu4j7wgjUnUCXDibo9e6Nbc",
  "key27": "3849Rj3ir3HdHdVaxoZ7NzHWdiCpLpmFXMu5DaN2GFFcZ4g4MsvSDeBFrqn7ZZ5AmsViH9GJCcC4MS8eUauKMLTr",
  "key28": "2nTR33xuwGZF35Q3eY5DsSjUMiopLk6kw2EnQpN5h31GeBbe956X6qfiQkksNGNeF1ceJAWnk47dM9148Njf7h1L",
  "key29": "2MxffCP7z3JyQ7uUH2HLxiUEsGLFLkBEHkYfDoch7rYbkTrwpEDpqeWMLkt4Sakh6itXkNJvckf8tnPmX9Fk7fDq",
  "key30": "5B1fN73HmqKhzfUd2V27h44xmeN6FKtMATu7avxJjHtqwREGX5JMkTWgzzWMKN4qsaWZCBdNxBY9qwKantZ7ZKJr",
  "key31": "iicoLXpKfLV3brxRKbQwUgLPUEeKVdJWKEjXTwqX63MzmBLUNLCxaD5i1k81yDKF9F7SyEGFmTHgMA3iGmSEHmX",
  "key32": "EkGE4ww4X6zY6yoXcsM6sQXYDLESpcMHkNQ2kCqYPSzfYxpVrgJmTQngQdh2nf5wwgtG5A3RctPBUNNitoNmsCx",
  "key33": "3UmvMysV7yZ2iVsH4tZ6p1NfoAJxZc7GYMMPSs96UiFerUdPmE2DrfnQ6WhQz2UoWLN92J3ufCvwLPiWLXt87uug",
  "key34": "4a5dVPmRi3wHcZkwEhdohmdLsvsbr7LKdDC6ss4Pm2f1MnU1CdQyuoVSQKo4WVkto2ZzanfU6PHE15MmsmrK8sjT",
  "key35": "jq1q6XqcUU7G3hh9J5Zndi8Vope3eMvgg3dsV4Ge6FDf9foFo5PjthnNjsWrcDUr3h3CP7U5uHRzuP789CTqWFx"
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
