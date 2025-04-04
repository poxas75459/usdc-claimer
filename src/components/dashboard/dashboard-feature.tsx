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
    "4RVixazSxoX1z63VPPEJ18JquEtr72AFe96i1cUY2wZZiSYJ5zteboBTexnDXEo7Rvnz1yBG1qTVqghdpeugdFCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iD8MuVz9rto9u42JN7cyMQicFHZh4YoNVwRSJuUj5fkA4rzfAhEyUo5LCC6sxJaNdUD697XuJxNSQDu1GC7wbnH",
  "key1": "32LaqnzDXkajYNQxc9KXKe8A9J4YvVDjtpTrXeo8ayXBwvB82mt6oxxrRvPjs16R42JsYuJn4SVJcMRycwegcDkG",
  "key2": "2fLf9jNsjARymYQDLGcmgUWvcvZq2pKMEhcgu3jZTSsuUYz1HVzgdZ7hnjrUGbFAKAGLcPRRP5qx6ArZgqxUZrn",
  "key3": "5bfVCRyv666P1ymqzJSmBk33UZQX2LaeX2sSvNUTo6emzfi3VwgoxhQaz38knaMR7RvkpES6GDfVUYDRobUnK7xj",
  "key4": "39jei8KwaiudeRCnSAUnp4ivHTvYsvKVkacNKw93GqDr1NdCoSznDsyo9p9uzafDgf6qfCpFiuFTtE8AbJVHzWJ",
  "key5": "22quPyXrE7cNU3asYxnobUG4LjQvThk5DnXiMboRkh2UM2Ckz4V8tWUGSxSbKNLRqRCSqSAwFgtfzGTNLcBCUmBB",
  "key6": "2y45rBf68SgV7xgoUSH7uVwQuD3VeDCfAMtxfbSFk8qVjDSJDKFZUNUVYhagcJuahaCVXYdp9dERJpzLsDpjsiLu",
  "key7": "2LKm3U6qAFpJKa8duMbgHbfwNjUDUUghoui7YtdQ2iEmZvSBbAA7p9DXmqdCn1kFLHAaTycgXcWfbpxoPN2aZNoX",
  "key8": "3h8HZhDS2SuZGrQe6eoMqCvixouCYo3U7B69ju2w8ujFNPeGJWsKb5w45QKgijj7JeKfYxGKYyFykyQcdGQJ9t73",
  "key9": "2DuabWwYhui5b8WdsUzHNYVw5ejJ7NPNrHPrR1nKXSumo6B9FvhGyj88kw9JmEH4qBDzsa6rQkwTNXAMJjgVgyJC",
  "key10": "q6eGXX6ye6P3s9rKXkLpPA9iH5J9Y9HdeRXiP4KqV1i4YWyFoTCodw3fCapATaCA93BcaHoS1NJNC1tAV3nsKdy",
  "key11": "4NfBzRBSVzj5tUR1e5iTzz4XwmdR7FjpcnGNZptqGjpvgDSCmnzBeKdfDfjcZtmqVi3PdnaULGPCV6jApXDBc6Li",
  "key12": "4HZgQnzcZqJvduTP1iWs4sZCztZCkvhbcv4Rcgo4RJiAhRWqqNKdm2erm471iHq7s4mNdetxmLfGc7DKZ5mjwgn",
  "key13": "41xbFA3Bcuf7MtcTH9T6M6rXiq2jQFAiQWKNTLwFeZsGjUMEv6QTYBuCJZj4PmhaVZ6RWqKAzRvcmrJteVir7Bq",
  "key14": "5MKwqRZRNP5Cy5i5X8Nn1i57pJ2j9zNRoa5ivN4HaMVuo7unY6uwuFuB2jVnn4TvYFTELS3Ai8iCba8Rt8RQ6FKN",
  "key15": "2iGQtbSJ3MJDkh8sLXcMekLAqHuFjkhz2pm5oXE68wLo3gSLBWmRoeNQUqF9KWz5xeo41H5BzRNyaDNBrXfzRJXy",
  "key16": "4weF7dPKvWomKZt9RA9u9eRyoA8DhuESVzk3kS1rx2LstQeYnTzQZMQy5XEGSUzJPmPy4m7jCcDPBNfKsBJm14u7",
  "key17": "q2pRopVfS1GxaD1fgdUySqcy1yQmGqwJY7KBYPXAaEQGWDtWHy1QVmppoNCyx8yqgd7pk49BBvBeurXFVTYgkK9",
  "key18": "5b7rJFLS12e9fzsNqx7CQPrj4pYfUnruL5QcoRqNDZ1XRM1wAyzGuVkm9rXixTKbNi2pSphvksKeLwqoSnKMNjE6",
  "key19": "5Rg1cJHzPTetZkRdCEvWbUaYAKFqHewk7AHHfDy3QMiaY4KSBfwi2dQ4rNsCeNPKcPML9EZuUncGKiwpwZ736JMY",
  "key20": "5czzLsPSgcYRkbE7RqF7yys9XcfcL1ET8xcwuWxuUmMu6Mka6hnPas1DtJxw1VU2atpzyRpRBaFfW1rGCeNk6jzf",
  "key21": "4iVs1xxf1MFU7YipfLHW976NiYr8qbSRAykg5EJPujaDCw87R6ppztVgRqay2JRAwNz88e3czMRNxy5BRfTHuETq",
  "key22": "3G4YsoAkzwFEbuTB7skphFDLaDevoUGX4go14uV8hx1W8P9oDQgXAMoTkUb7m2MkG39xK5ByHmfGpA5v7Gfh1brj",
  "key23": "4EKs2ioAYzPTHLmvqwzMEePXHFqZnY1M8PFmZVEcuu4QzeK2B1hMqAm2zYDNGeGmLM3EsgM683BYu4a8JQJfHMkF",
  "key24": "42uUwXvrG166aTevUteoUBPyYkdRxUGm2kx8us6h8aShG5amkqGzxDGqjYHmKJgvPxDLz5PR3mwNy9fshcLryNT",
  "key25": "4kjMgg2hnZogZzJHijMrioaVdXZSdY1nRS6WRukqzQvJ1vSRNuTDbFDJKtd2wuWMeAbi8796sAvJ3ENpKpHKgobe",
  "key26": "36mm4TjWn1aXhBurFVSoU6yytZrctbqLxxXVaF1cQzRtpKNJxikNsYUsaPrzWE3BFSmRPQdb6QZBnEQTLns6FvQ4",
  "key27": "53zr368Ze5WsYnA3nHpEEenZQSFEroiffst5CoFnHxdMxJsFCn9Sx9HX71EGyCAyHTqB71sEGudWBsAZqaHme5Au",
  "key28": "XyP457mDjSktPmBsrfDeCpxKixHwyPECuBFoeDqnGWow2km85z1AoutjwTYcnAFvNrdQpVGBfHXAcgDKMzT8Bdd",
  "key29": "3kqEP1G8KA1WbDFMLcXi9y4ZqUYCmkn6dVkFxuTkGeYNzYjrd57Vwjg38bAyJG8oxsWS5huvvwqMnu2oGiffdPH8",
  "key30": "5ZE7GGFN3WMqWbdNUxgKJsPTiUaJVu9fNiuCkcD3x4Fxw76QnzYm5QCtbQhZikJbFNeUJjhKy5mEhWskStnKqKbm",
  "key31": "3dogmRbHg4iWwDAjcmgeXbntPJyyrByUsWTxhdJhnPfXNcUpeQMeV6ywsBh8UrH1b6GTM7Vgv28x3YfNuTLFr7Nr",
  "key32": "2xe8neXV4rkrQpzi8jfqpJQUXJELHmGZzUisST6nTXZ8sZiotfhiWNFoaQAKogtQebcDXyJ5e2AF5tQchM6EVmDP",
  "key33": "3pXivXgBw7faY9z4kuxQNvZkMha4xgZPmMDycWKz1YZD4aQUb2zwE2Db2wSup15R4dz8CVXZTwGPkPXUSFfTxHa",
  "key34": "2fUTWcbTJR7MdvaDg7qb2Ubp8QuMzGqkFhdJXbhmzXUtL53bxpkT545mWNVjmNAvQzVsjscwU8okm6i22VGpYQa9",
  "key35": "DHDJCt7EBVZEH9w47G4RqvccW1biDb75bP76Za592UAhpK6tBGLXsCqsWsaC6NUChfP3xWNAKLyXd1X2hWs7vcc",
  "key36": "2eBoLQuNo7MNXN9qSb1VzpQpz2mawFmCMgxtp2SRcPaHkqLbW9G6XMLgKDHXgqv77P93wdgEeTf51txqQtXAv7Qn",
  "key37": "4W5Hi4g6bBkfVc8f2rwZoCu2GbHjTtoUscwbMw8sUT5wmjSogJRaVbiVHPEhuVtUdEXgDEL2UxPNmL3h8YtgP1Ce",
  "key38": "4Q4Wm1y1pijTvsgtK7xYbhWuwjhy1ckKzro9apQa28J5WrNqpLd2n3kKx6pnPksA1jpnSv2hHpMe7LFZsvcJyhyr",
  "key39": "4bscBK73JdGCJhoPeXgFg8CFatb2WuVcmaux5kLK23TURJLb6ZNRvbVop4poGqbXTQHipPymmcxoCJtTdtQYBCDC",
  "key40": "2FDTCJ6PkXJ1HLhbM8H8CN39tYDgTvE57Z1ZMtv8vagfAm3xNeHibPocRBrjwehB5Z6LKKfZLNCHgqTNi82ea26z"
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
