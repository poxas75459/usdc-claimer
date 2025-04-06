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
    "2nYNaxYtRaxVrqfP52itTkcckUrGZrZaEhfTZeKSzZNfEny8Ft5r7KCuSpBtoMFDNDkFLWpfD3SxJA4MiS48zek1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jt2gBayfEout2281ZVbqfvtDqgsp6nk4bxu2qRVVSoQGDMn4YTeW36q34LjueGLcAJJcppAnCMCdf8yMrDFLjq",
  "key1": "guj9vxqdTK6htHqMiae1dzPbYemmG7XaWN8HiFNWzrfSyRYWxASE7GCKLZmqzxCjHnWS4oK5i6FV7QgcK9bKk2o",
  "key2": "5QQhSP3FBR77jeQrsFUjUwTcegWt6eyWXARyFRTp1g22HTrX3JVVYdqWvTHk2MEMrbrAuBrH3tecFPY2oJUwbbnM",
  "key3": "2bw6YviCCW2ovUTy3UxnmdiKmJhprxkG4pX5umUTwmm9pAgwxFvLwRNbB6Fg2BLxLQnW5egngYqEaw8z89qBUm7H",
  "key4": "3yKgnc432yMSq194QoaGYtTNUv51sVrV3XAhvMUHV5p8iX8iZNB9SAj4KJwwmqmyqjxS2H8TuR5fn9zmATNLYXAJ",
  "key5": "56dFeHhRv6aF9KBiqwgMm2Z9Vs3i67S6gGUJ5d2buLLiPpU1SkoN9SB4UPrJXeKXc1wakJnSZCpBecvCTYtcABLZ",
  "key6": "35WPq6prP8csQjywMfrJtqSTRaSq6yMdpuiGmJ28RM3YiRSAd8S4BYNCjMtSrDXeFk8yk8PP2bF8h6ym1wEVk7Kq",
  "key7": "433c6H6CDnZTaruvVwwyfABn5cH3cRJ1mohtFML4TLKnHnjWcGCHKG1RLW2rfbiBgF9EtcCZuossHYeTQbGX8sMu",
  "key8": "4G8g5jRwyKrBw6Rqz3JMHNXFLXRbSwZ3m4JYeCjBrhGxtpQMiRPo4Ny2FHAXt4enmbyF8aGTqr5aSuJ6ecqbUfXB",
  "key9": "WPXGESSnsRU8bfyVRfhTqpVAH5bubH3FS961Z1tksUUZeCM4scBqAJeWPwUUuLfK8boXoQaExGYyTrYEVGZwqoS",
  "key10": "fCMD2P4WNWrFML2VxkJndXdDvXWSQLujWEz8u2b5TFqcnXs5mUpf7BzosJ4tJcrDshpwPRSU6J3hMwCkgESZQhu",
  "key11": "5LvwzYQF9LQrqw9eUGB1aS8agdCXR89t9AiaVtzB5p3EFCS8htXS156MGcHWxxsF5EhCg88wp6tMF8DeBFH7FVsy",
  "key12": "nyxrTsqHNaq3sFrYJUbqiaNfxxRtrWsaYt2feCw3CFrD3DxMnCTc1z4uupJ6LvJq2FjHuSV5ZVBWzwwVXv2JmaC",
  "key13": "3NmuhTwHgBxRDTs9m2Xsvt9E2TTvThpDnFUqPxEgCixJ59ZStAvpZjy9fAqmrLhuRrPUAPmKM81Xs8nd5NEwYxAo",
  "key14": "2JKeuyp1Ebq4jV9evfj5aLT1cGo1HQ1BwtdHrJFh3nAS4akvcy7iFne5NkCS76MsHTQWnebTrXL11AW26M3GiaKG",
  "key15": "X5UpyPcfTd7mVrTcKXRJKeYY8DHCDNsqWh1r51QBYhV91bhyzyUD4bqms69EF6vd2tt5LyJwem9DRmbQaZqWhZb",
  "key16": "3KQNaY1FBgCPFMdq4Kcrj1U9UupYyxLtkYE9JSPNmp38WuzPrzerkKiGj8UVXWHheHxmjp6A19fGtArdpMX28jau",
  "key17": "3YVBALxXE12W5wUpo71ChaVRh9PEqkJtBh7xV3VqLWHQcYh2wWBeTKy8xsKSjXMb1gWn2VWjsXYvLRACivfZByjN",
  "key18": "4coAqWWzat255ZvKTerDJyz1MQ39267G3RazAMpR2bczzik1rRiRSHUiZDBDFRENMyqrFCfoXi9LjZjCJcrzjtEp",
  "key19": "2n7gukzURHa6cZJsbuAq39M2wq3LbKbYhJQRSjcJyWLYLGS8spFeFduWEd3552mSxoipywRiKqA5WYD6W5mtAPeS",
  "key20": "67B2RAFXLEKjcGbqeCzWWuPFQiKHdjbF4QEnzR9vvZ5p281aeXPXMoK4srJuLLKERFwwbjTJjUwPgRLdmcPUWLHy",
  "key21": "5Nc67J7pxbEmoa51JK7153LaMQo7v6WSTKHefTxZKmcM7fqKJi7g4QpaF6iV4hYcJ9H6UFtbqjag5nq27j8sGCMT",
  "key22": "2pwqD3n3aPx9ecmVgC6kif6BcJQ4cuVUKnzLUYgWavDzWMArTE5hijuSPYC2kAGVvVjT8zASk7TSnv7ywDPZfYLV",
  "key23": "5Se7tiRwNrfPAinXNptC6L8efxw29Sut77mWr3opmQVNLa7rBHW25iNKQqNXmKyFRfoS3SiRRrZfNXoUAatmrKSm",
  "key24": "5wzUhZcDt3wWdkgj2qexHAvCxV3UCxSJ5wgU6tx6ixHji74yCVEQBRXvT2N2QXf7uVxqX85KwuML9USLGyVneHb6",
  "key25": "3HuD8kXdmtvhirYwBdW5WTvZiHiUoqhKHQcSc4u7kXPAcBXU9wWWNL38D3yGRnEbEhUXHVXekT1VyRD7TAFLuRXu",
  "key26": "FekgR9D6dKs5xLzXTLWzbraMoJELRHT1Ypqypr5wL52KyiXCMmCeyocsUZVWx3BLqYfLL61FtBjtPr1zCWRsq2q",
  "key27": "2xD8GFg4rV7TF7qFz2W6hzyVHdxJQ9Uu4EUAWceBqdNbeVUbUyD9rnqkuaPEX237X9pRA3yv8K2RZvEvhzPnxz2K",
  "key28": "2BhUztPfEdEriDHEsqjXcYj3hBrYJdiXQeY468yus4q2BKhxwnshB1n5bFQC6L8pVHH86d3V3CxQD9kmhm5oZuds",
  "key29": "5HbrwnN7Xa3XYzptak7ZXNGokbfSn3ZMNZ3d2xaEdvXcj5MVpLQe3Fim2C16KkRgYmrxLY6XYLT2WcKBtzQfzzS2",
  "key30": "XK5Lga6SQY9ctTJroteZTA49wALZbQJeW6byjRXJzHxefoY1EXpPRARLfpkKoP39VE9bFtzTWvXjoHoqPCuuYGF",
  "key31": "2pemsT1z5mxCNLdZXvy2Ltfad8hq96tEXZuB35TbhctChf3Fk579JVkg1h5azYvtgqKh3iTyWneauByS519XznyT",
  "key32": "5HXYWgc6BEzfymLi31jaKW5QSWrbnoQ4tyhxy1cCn4wGeA3eatNLMbpSgTzaDcdcL4AEoQKPLRAqBUnGx5r6qnAn",
  "key33": "5HVSCbMJQzbUAxz5Rbak39LveUvjeMJzHLypdLPWkFhGwa5EzvLzoXyjnep8vvwvCQEUwVw1RxP27CuEStD85cS",
  "key34": "5QmmCTP2UEwnCywtpXTUxRcwJoQABjLsP4UXnrwxg4wa7sZstCGaVpKXQ1zBeEd9PtMZTZiMdeKRyM3qfqt9jEfD",
  "key35": "5bEY9eE2PTKUEG33cJ54NcGErPbcDRpf7m3oRkrK6EkfZ52GxpBsni1WyX6DN6Fsqc3g1SiRW7o3vbpxJGki1mif",
  "key36": "y34DWtigi6wqEzCmi1pYb5KkyCBiRS8sFnHb1r9DUSL2nMMtkQvdT2iVQWDSot8QMpZauU2QiyvYtAzYAGoEBMp",
  "key37": "4qhSNMjotDsG5hcGsrQnvNPK33E4FP6tCmbRBDdhPTVxP42TodPzCbqcwAMBu2C4FvDLkSS5WLtpnMrecXMgiwpM",
  "key38": "63Wm88MEEqXUZjKTHDePTEgxY3F7ZzVJKQjjH7d751PcVbejojnooQi5ENm5wtqzPbb1EPwu2hfYfy6THnAG1mAT",
  "key39": "4tPvWeE9zuHEsR7RPDfyhmAqSP1LhUfvzRCwWwiXVJSWicpHteThEBkMpjeNYVysvCGWJBMzxgHsutY7svkFut6x",
  "key40": "66R1MfmQpRnaUPqzTiKF6ioQnsUu21q165Kn3dov2vxud7epJQTx7A4EKzcUqoGMoRMi3YBuroXKLRXQDwa7Nics",
  "key41": "616e1qThuHWgxu9LqpuDa9tRfFy3FNND5ATPgJn5HZTHYAGDjEB9rBo8C6wzHN5ekqKFdeHZ9qarZ4kW1vkX8sCm",
  "key42": "4TwBEdyKrR7jzu8EuZ3m4TPz86JsQZMHG8Yg7FKDLDwtSr4zVWPFZNfeb33f8pMqhTmfJ8U6ddaTdDyWKMnLW1L",
  "key43": "2xeQGSABZNxsJ5NkmY8ZjX1fgwTmx7F1UsftdsyDR4fhK42scLZkiqBTvKATYccYPqfowmPxFRb114LmzTBAPox",
  "key44": "3aZzWHB1YQWqz8CjW64XCAE11QLWWWdf3vnqXvDL5wQtbRNst6uPoRsZHmM2RoiQ7nG5TYSVnjYcxhyCpJRe9RPq",
  "key45": "5kJn4mKxr6pbuWuw5zWkjjjngjgQq1d1V2pudwyYWef7BevSfmYVUyXCrVwp5N2AFpgsYPzNhKEeRFwCrB7bLshF",
  "key46": "2CqGxa25SkcTnLiN3qwfiwoJaJBDFXrcNr8FPXKsPXu9AxADNGUbHe2dMFtWf6T7QRQBSnyeB8dcaoL2pBimgGF6",
  "key47": "WVKm8YNMbYQSdRR4KMEM6oMCjSEd7SivTb1wH6k7DBgGAaEDULFtmn9sGm73SvZTUXLoS1scw3EqnqZfKJgtPox",
  "key48": "4pc1jpERFQNoWyxTN8tq1z514fs8QymUfLsbNr57TKkHLqZbveyToeUFsK2T9PV9BiwJrsExuv14ie1vpxkYJE9m"
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
