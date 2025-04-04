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
    "4E8WUnkRb6LHN28tfrqbfUAiAY7YvfNYb5tezxpfhgp3iUa4buwV2YjdswieL8rFSdXa2L3XSBAdbJ6rvR4cMdKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDE3tNPH1iQoGLquoeZNjm7Zau5FkRypN3qr5p3nYC9Jj3QFcCvDwPV3LozQXjgSWaroykAfCcTziA3j9h4iW49",
  "key1": "QJvx35Ah4Q1pt2hZsCiq5Wsi9HxXM9U9Wswk5DRDHpYxd8EgLrW8pFUMFP1jTRMeq1JJ7xLokQFvdTX2XU1JcuV",
  "key2": "1z3ThZmGxjc7P2yJXwVtP39KANMyy6e5abLrntVHFCmqApNLQYATuyjRbBHTUCeefkd5zrwPjeGn9ACNwj7LXPB",
  "key3": "65XVj3vGdeanmv5rbFAfvMCFw2dhthRFmyHcT4rMPtdiLUqcCVNqL3r1j11wVHdd2ga7kNGm4EbHPqmuxJkTv4jd",
  "key4": "5zQrHuiD5Uudee9NHWU38jrtuuepkiB8yFgNomxUa1uhWi988omBYv94eXUMYbRtpU6VcwGKrYuhkw7P6Kn3ai1h",
  "key5": "4jvvMWdpwgppdZUedBUxWxxtNivMS4GkgzQAxRQ2swjXU9YM1viGQ8VpksffEzgmdSppvHg4cw63wkW2A7itu36N",
  "key6": "4L7w6JyazqLk65dupbJKDWtu4ubR6rgbfNaHfjNcBonoXW8hv9Z5vL7CXqvhAjdEuBHCsiQj4zQqKc5bvNHB8mPJ",
  "key7": "2XRHfYKzXJoVHDTd4dpPxsLgMzs3MCZaJV9hbbe9HRqkRrJuxjsBHpoBEigYbWL8nHr3rb4GpD6a8d8nxmiNoGWs",
  "key8": "5aQkVidKUDagGtedFsVwbobfo2CNuUPDA1nVyceZMaSoUVLZ7sF1KM4xr3AZS5Aur8NhKJqxgwENyDYn3VbH6ZpZ",
  "key9": "4YdJESTuukgpjXLRTL9EHxoccTSbT5y5eaVf6crCS33nsocukyKiB8NojA5JBVeZjGvBS8aPd8eXiQL5su8kCd5m",
  "key10": "2TLRzF2ANvMJcdbohHQjaGvcERTWpVJGMbKaRrtf8bhicEVwkSx4MSSJMoPH9hYr5n3R1BwF2qddQ9PG4NNRSh3P",
  "key11": "57Jy8C5riGtxDUWXwfGmAhb58MRZU4VTFtb7J29H7R4BZBQrCTJTavKpp5RU5CacxukMqi9PhLNh8W1umbN1yhK9",
  "key12": "5qnkYEdzXabCR57afbdbat92GXB75f2KJhbVskxmQXHYwtsRnXE86LrckCVRjk8vFV751xqJbh3AyxGSfowhVTQA",
  "key13": "5cWhQu48KL92nBxi6XdTWBciSf8q1HemireZ5UXFUArgugdmxeE8pjN1MTG7agk3EGL4ESoUumiVR5HfrqVZmkBk",
  "key14": "2j9Nmh6PrXnrEw3Fwx56KSE1rED6SpXnNNyn5PNzHy2sdo5b4fuu8Ba275pcK7j6754QzFZCqMPpNEPzW69LMzEF",
  "key15": "3pPVV9KxgKFWBQijT8WvoDXbCs9KyiSbkKgjrpuoGtFdnN1PgNJxxSgiE2TYYcRtZL1PTmCs7eAjrPq7r9wF42GQ",
  "key16": "X2LDeKiZtSQuHBmXkUXRXgzgUFM7mRb2dGysgb8R3mxAZGTDTCb32TZkkck9Qds8Cw1SeeJDnLndmJTTcsywXKx",
  "key17": "6dTWdbeXxCji5UtRhbVfs5xTgi3dF31diJ9dfrf4isYAToA4q5cg8ba8i2hMFAwMW1txaLGDhynT71mqweVXfgz",
  "key18": "48eZ9nFNNU2yDGvzeBAZ4Ysqe29TxUyZMQAZsEcgHEq4qT5NW8QvUbMLScYse2RZkPxhggpAUxvQ8keuCvnUjuGb",
  "key19": "3RS8RwkaKA8jeaMj6GWEQ2ffaKgNKaZsbtWLEEvbsuMV89H4b9t8dxMuL1JRmji1GKLa9yv3yq5qGtYguvhsaZmm",
  "key20": "3ZgTaXRpPDAR3j6v3fEjjWwCaDyHquVCS767i2z4ohy8G6D8ECU3FsoJnJANeGaE2GPcJtL1RtZJ3iXU72dhKMwn",
  "key21": "2ALti7zgq73QJJayS2oHih6FAE69mhBjdHxeyuskbjKWrA7KXpFX4PgKscnKYzdcu6UDAaDMpK3Xqm2qbKtZSZAj",
  "key22": "4APJgAPwV4bXwQbGzgfSuB2Gx4udN7q2yMTtKkeBGNJUjzvXwtyzqvCm53wFmKq9sxjAw3VxbqNHk38EVXeCzQue",
  "key23": "2SUCg9JFdy6QhZg9tEhSRqzRyg8mU9Dh19nmWxqUvHZFxgM8V8j83Lxby74QdXSvKtTP1DY4BmKjTaHfhY2eBP1D",
  "key24": "PTuoqsfoqBASDpaLnATmkNA5TUfq9vA4dP2m78tURRhuE2XZB4zqwgJyo8SvzpjdVm1m3WdFbmeutTnuP84XZKg",
  "key25": "5hE1KQ28sxLgSK12pMhi1qZww4y2jMiYsxPSRcS2YbRoj2CFbgiTsMgqu9SCYAWYTmy3HzNje2GPLsiYM39dEVvp",
  "key26": "2cKehSwJxJLJdTSwpYiMvLGMvJNoC8iJUCHQSVi48fUcJgmz8qo4ZZ2CQre5zyi4gJvH1xvzGnaqEu5cvT6MNjB5",
  "key27": "4svAbTuk696348yf5p4P6RYxp7hwdAXZBFYLwEvgwTati5hmHC8ARzdoB3RgfvCpJcGN4JmdvkugjyQ8r7XEJQg8",
  "key28": "3c9rBRSJ5KR4pM1Z5mgDqx3oWR5UhTKU6GbcdeZ5wmEexr1cCCSJeXXBbFyCZLDC3GRRVRF445mLnmLxfRynWXbK",
  "key29": "3qjqMRfDgJsGED82oB1JGiWF5vNpNZBVji3GJ9FQZNrEj15915nYHjCrU4ugpuwhhwJ1QLQk1Swwmh3inr5oGRxb",
  "key30": "25FgjgD2zXXDaMq8Hn2hdPnXqJF1w6amMYABoexHsn7QYULFefNrN1fm7aRRRGmJvKHTrwNMJzcJvqfdZG6hZE6t",
  "key31": "5TNoeRJq5zrGw9bk7aUfBwEtnwhCteUFTZ2KC1GpS2nCoR9c9bq31SLSvoCj45bfDTZv5E2AJDUKvFEoiiqmcnH9",
  "key32": "2ESbjNyzKiXGDgxx2Nq4LTbJm1PoXTtbA2q9xPrDWUhipwUX6Bftss9q3YTvV5VdV7i9vwsroWT6HguZeadvc9yG",
  "key33": "5oJ83uLrZ5tryTVWRazByT2ntWTe2g3ABi6tfksEvM12bTJVniY8qpqxVs3BZacWyD2JsscQp97NFfEaeAHk8GDe",
  "key34": "DQ2GDL9Gwtoas1ZpjP2YvuaYAVBmswUzX9zPwTEeJjTqNDzQ3JpqfL1Tz4kxDc5atXRKnrJxQhAq2YL3N1jX5ri",
  "key35": "5YG4hCvkvAG1inp6uf2vsVDu5z98zqdUdF3pnF1dKgsWPALkRBKjXD4RGS5wH268FbgMQ91CwArs3JfMoDQU9D2s",
  "key36": "24pu3wghdyt8VcFVwACihtybdeFHGABETJryq7K9cH4SgqMQ1CTAoqVoT4yBeJkYyBnH2arTQtiM4t4U4rXxZ6ia",
  "key37": "4JGpQG7qGA4s9bAReYreqaw18z3hCRgVbP5oZx6tsKaxkm1PsQLXfNToxP7aP4VG38Ts6mTCHppjbH9NReBCscFg",
  "key38": "ppTbynLEiRFHMJPdqSdPmFg7zPZw7gUH1i9Ssm5bM9Us8AXN93Ba5sRCzCGMjfA9kHjqSyqQo5vsEEcVBkBzAnW"
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
