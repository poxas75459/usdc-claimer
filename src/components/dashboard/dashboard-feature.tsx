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
    "24nxwBzm7563sNyWfrFesRqkuCEgNqHr1xc3hiC1L4FTdRnZRVMRYVRxuMnryNbFUSbCMhYXQanHeCD8aapc17ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idEiwnL4NpxekwHTNuMEU3sKr1d9E7hmdz8FMYUs1kGqPXGpeakjB9qstGY9wvA1v7JBd4Hs9ewGsDH8N2Etbgv",
  "key1": "2ErLEdSk13td7D22wCDUmSKdfi5WQWXF7k3ycb35Arj4HD41gDD11fE15wiYNHBnkiSprMmw6KHxs9kqVVBsb5gx",
  "key2": "4ETe9S6UoYoEXf2jCVgWaJggidSYBLxtJmNtmTgeMWYfqYWp5MwFBKJeaMmtRoidTeSAUMRxkiUBPsYTMS4dFtNT",
  "key3": "4SLPp6fEtCnCdPr5usJHit7ypThLpZH3gzKkdyqjikyxk4JrHRWzdiE1iyMkSnVQCf12gwczMrNihpYu8bHNgH4b",
  "key4": "2Xats6C8SUXBf4RchKH9Fih2BUEBaEwA34YzGEmRMWD8tzp9kdK7XjkrrjQKX6mpnGMNL7przkNRrNAfEr2Mcfea",
  "key5": "2HnoJuXMWTpDYr27Su6yYHSbhC5nspUwgK9PrpQHYwGUE9Q3Hr66UthuqReSB949qqLR6SXghFxGxo2HxVqxFR9J",
  "key6": "4fcMSrgrJnf1EWo7eSRFBJTCKNMZxQ7xCn75U37FdGbJioEqPHR9bbZTfAE89Dap5nV2XbbPN9D5FwHWKbkRxCmT",
  "key7": "2fwicviTjVZSEZoiQQUDk3XC1Uobk2LSK81fvT3xNC91eSCwNby7ZLv9RC8x7VyLk7jzyt5e18GUgAV4fBrriREv",
  "key8": "3J2vVm2sjraatdohLhGrJqryfTiJGNZNcXj6xLcQycguCeDxythQjrPPNu8yfDjHHgWf7wt4xzoBiwuFy32gEYQh",
  "key9": "4FYQCmeeXLTXguC6K7bHGTbbGYwZK4PYQrzdjxBFGP9PLtVsp216popuUe7XNtczF768EgQajeYiu4onzsTZri7d",
  "key10": "5EjFf8pkkVMzdxXiPJFSzRrq5mnaeHDpqTKq5tDW5z7joWo5e2MWYvtS4WkNyCcQKDe5CWEDfac5JmLaDc7uyPe3",
  "key11": "7JCHU7EAGahCCdi4AnaAEtA9ty2uwUVsGzwa7wB25nm9u8LdfE4psmSqXzo3E3a2sYU4hrL2CFYB4qBU5Avmxm5",
  "key12": "43v2F7aZs6HSV5LexF3yQWKUgo2DNPrEmm6CFrPfEQqfy19HbdvS36BdyRvsNE8gC4PMhM8YeGs6gtfy9xEAkZ6Z",
  "key13": "5z5Ys8gHn984ZmC4VaaLSPGGHJCk1bxuN4gN6nFCVNgaNxxRqdziSj7TkgMuFZ7mDGr62KDWcPYpWLgq2kJkFZb3",
  "key14": "4dzy57dkqTgTomDcnioFdVrgdL8g1vMCavtkA88T9etzR5eqfw7Y7LzHcNppQtXZKhbLf3MerAGNsKYAfDQqdssC",
  "key15": "4YAo1Q9ztZ9FAgzoxt26uzSKvwkzLV7G2gfKMLUUDRmEtLFzPNngw1BL8xUi3uzDoHNUMcoN9U8Bnruvf6KttnVP",
  "key16": "5mvnmAiuuuw4mEwmqS26GkypyCTNUKSyhXiXtuGFsKxYUF7E5yHJbyodq4iLUeBAuYKRgbDcWUMJHmPLyTViRdNB",
  "key17": "4nJWMsBr1JPQMwKNAmk6QDxkisEeYHN8m1nYGXRbmMaWTaPejKbjwqUa7ez32uFAS2zPdhjDh4akuCsk6RUj6fr6",
  "key18": "66kFJjgQwTBnMcmf7qXKZSvURmbJQPRUuz6i8wXmsGYa2sQPuuzsyr1HHSftkkw4kD55NDRqLeSSDoxsmxMtCLat",
  "key19": "3pdwgA4Y6jWkPd6cViXGaB2aRWVbPZ1ekEMvKd1pVpgbLXciLujV36gccbRbSkUEKm9QqfmgsuRXM8SMVUWdqDBa",
  "key20": "4noipbM599W2cwGSjYAhM3ketJwBuZEXQkShDhQNW56ideQoTYbigbJQ7SvWLmytZ9NZfcU3uQLAbivw3zKxN8YY",
  "key21": "t28p8Y67wAAtAEkfkLxxN9mSXtNpuq5tTonSjEap2Mkf3RqP4xV7NGXoGJXbxpmLo3BfSoCSQveoLL3rH4KKqBq",
  "key22": "Dx23NToAXbKKxTAd6riZnPVjpEMMZKX8YdLthiaM3JPBqqPTLchmZDxwkWypEw61ApMF6GpqMdbu1a5waUb3VEt",
  "key23": "64RtM6xbCTMcz86jfv6jFJENdkosvvKs56JYGViAjrVAaJv82zHziphhYg6hTrGUQ4DwNWNAVB2XR1apc8t1TYhB",
  "key24": "URfUq1ydTTwGR9dxsXsrGx41aXU1gVLyPRv7S9K9gst8H7Lfms92wLfQvqpDHL9yyB9VfarPMn8cQqMqP7u3sxe",
  "key25": "3rDndLJXrQvYjP34TZpHKqe4HgV5mEHpA9nUznEN89Go9jortZGahxm3Q57vHrZ9xDhWpQCEHMmUtGZrhQy8qmT",
  "key26": "4PNsGgWzjiS6PtYEpzC65L5DGKVcF4pGUPyWkgkbcoF7qLk3NkQ6GPRMJwkHmUEvUStsoGD4MMgiWB58ihk8dj2B",
  "key27": "4viJJ79ymxv8gnchmJnvsPqdTEFga93GETnCQ2hwxswDYE3b8a9y21EUHRvSC5rssoxyGhZUghtTbh3wxVkWbvvs",
  "key28": "4tvs9h8i3jQdviiYyTYorR1xnWzgKMcfxhZTbtEs8QQ9cJiUNddzVPHXA5dpNvmyX7UjDVUkVm3AweavBbdybAoi",
  "key29": "vuNby17Gtv4qPSSzH6XBmcZShT2hcYfZhiS6FCucaK7t8cj5TTsZyQRNw83C2mUNAynqqf4SkTRNa6wvkseN2Gf",
  "key30": "5Dk47pqXSWcVY2HjjSQJpkdRinKmwENVWjkK3HQ3p5vJAqtuJHohJrWwFxswbszcbgJWcGatn57cFfCq1MQWnrEd",
  "key31": "4sAt9ZXqsPNQZpZAX4UUZi7BkuEEGu79xutbETL7s6Q4q8B1SJNM4fK3BJ9MLhuT6JREefeutTZgun1KaKQYdok3",
  "key32": "4rUeb5Sxz3HGKNa3KajaTpNt2kaB9avX4EHpqpLJNyLXeTw4KRdQAg52eFajt2iJ4vRzP9uApN1ZVXeQRfrF3y6W",
  "key33": "4iCxpqb8UnnEQVnsNu5G9Z81cLL7UNQarS4GptFaenQsAKYuVdM3gmVmWfTGrMtFgjFUwtpQWqdtNfABJVtarAUh",
  "key34": "3xToWsbGDHkPf7xktb6K8pbyFYNGKYMsywk6C3Yfty3WWvTiGiNmPgwguGUTYXNG2rZA87maGx3WnZxqkunDrqVF",
  "key35": "5z1badnVGfHc1JEwNrKH8SzXBEsyhLt4a4546Shutx2b9WC5kVHMWtjBTwYW5HJdLuiBbdLfotNNGrpWhucKxvXR",
  "key36": "47r4S9A3WuDGWpFEDG2KPohsGpxm79WyaeGU4bJjzDbx9s1BUjZ54VufRehLQiPyf249CKVvBf5mUAcUfkJ444aq",
  "key37": "5ZZGF2VFQVwqQUfEpdibVkpE5pZcooPpC8tNNLQFALS9RzAYp74ftgSkiHXMiWF7nhdaknJaezW2tr8aEtAombhc"
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
