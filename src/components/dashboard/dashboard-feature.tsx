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
    "2iVraYTCbyte1GaT3wAbBb4h87AFz91U83JUHd35y9NYjRpzcVVzaPknLmPxksED5kDcB1s2kJHgVRCL3EJkiCoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ru69ri3vW1TBKwT7EV5aBS4XXYsEkZoiKu8DHi2T6mwnLDPHcBKcP6w2HKNRykVoBttoatBinBjv27HU945FJHJ",
  "key1": "5iKp7JWY9sas6YfWmotvKbvhjAFSFQmapTeuovr9dEPJJy69FgnHoPHT9aNjJGBMLEJCXFZgA6eyTvBgkvhgXdMu",
  "key2": "6196vej2MRyP5A3iwU8g5PAZELwSuUn1bEC5VxFNSWWBgh1CepcQbjMaA3fA1vsHFxecWKSHdKvFHbWJwVobQC2k",
  "key3": "8i9ssV8N1nzLMRcqyJrCCHdFEwytNzeBUpQokidkpC4HwBbgEfUrEeqYs6AyuG2NbQxrUreALYk9WKa4UgWTRLK",
  "key4": "TsNXRn2qrG2hR5fQYNVHXBqX2J2NFBPKdr9PGn8S2mSszfhQiMiNRisXgphKfUGp7ZsLSdidLPCiqma4gkGDjXm",
  "key5": "2ND6vakq9nP9XLDibUNyTCXbqjWGZYPCkA871zNwVmX2F9XbEzZ5gdf2mjAzwvVtdWE8EiQ4AFEWoz7GtQ1VefnU",
  "key6": "Dh3Bk2WiVB6ngmPzeJw8LGPY6yrf8P24V6uyuLprw5kaWQbkwQYtKMaew6ge2sekW4VCNjcu4MV8CUX2yCS8Pye",
  "key7": "FUTk3BRJ8eZLVhUbDaq68QYkhP9FPijsTHxykQUNarQTEpZ1oWXwK5wW5w3CLNkAsADDsegGcnW1bDBGRpj8bXy",
  "key8": "24FPtjKp2pr7proWhZ6VXfv4DRJNCDLSiK1ivaWCigtfHUJ3YNFJf7bPW8fg8ZZdU5z7zi7NJAR79jgYVaVLDKuo",
  "key9": "5z84FYuzhZZDtEKf8Rcpc6qorCvYsVgF16z9jHQmz5Gsv1vEEESKCUiqWnskDVvD7ExwqyuWmx2PcncvUWK7pGmC",
  "key10": "4j1MPH7ZqQRH7bSbQ8nXeBpMVRy9gZjKDJWQoMsarWWboDrz8TD7fEcCXNzwrTZsYZnQN4awHAzv2PQnQayR27dz",
  "key11": "5RD7N1drUjsQ8g1HVzso4u3JJcCWtNPzRM1NoK8E1h9P5jo9RF8xMGm4yKNX5HXo3WgLguo7ajnbo9MZRH1LtrTK",
  "key12": "UNWUuCdSz8tegeYu9jDeNx6yaLFvkK8mHRhkoUDvkbK5Hz9N3zoVZTDw6fJ9Ej95fhCoyFgZdHtwVLPUJ2dGih3",
  "key13": "56zpkhfcjxgYAtrNbBm7kvGBDnVW7ZbPyif1wdarMKmBqEDdC5Kt1cXLwkoKZqejS4rMjzQ3qrrX4jzswtgTfEmE",
  "key14": "63DD4SHbDuPgpYrgwMQuuyFCwnhq9HgJCEesBc6v5MFS1SdWsApL8uEV5BdvMVAtqFmfUMow5BUbEKdFTBFUfQHs",
  "key15": "3Vda3uVnEWZ4pcPhfH3dztmDLP7EPE6wGVKBS75XSqSdSr4DBtMPsVVDZFmQ8gRSRtu6YvUPnnj3Sj9qwvj6zarN",
  "key16": "61wnppUhFv1QG4v5PrN7zqf8aPXsK9J4nTHdL1pMMrZhGVAqCivGpMCnUx9EytczdQgod3cBYj5DRcuTRy6EH4qE",
  "key17": "2dg6pHVUgrGssxYgTHupMprrdjvFkck6v7YR7f1HFgS3ypFSJ9FF7mNxCZbDFt4n8iVPAVNd78YzzPzPoy52umjK",
  "key18": "2UEyY9N3JzxuvbnWXasjNgYNpeg1SgJdjXxGgLbQmLBjMaKBjyirrvGVMrNEauSzJanyJSMAYnAbSRDdZ5usKJPy",
  "key19": "3CkhsktF8J3vYRqusgcmuWtEJXqL1a2i9ck9QxStCZH1ai3cYBzZJQpUv49MhUKyqX3oFfUPexYAUE3hhv36Gqqg",
  "key20": "2WeyHGfdLMBtoc1C4CaVqSezFaCPYbQab7WFseSsXMDp2PyqKhQMMiSBYYM6PBr9Wc2kzeCXstvWse5Mtq84qsbq",
  "key21": "8Wa7wRcRYMPWNonxMhYHzoL9jidD1jxZscTKGcbJN224GxaewRJgeXBgu8z7qf4AGK5Tk2qGCvNNb5aHYbV9aaS",
  "key22": "3VgDZXq3nfUer4qmXY7tMtshWLFooxGryneWrnaEr7KDFdRPwC9XtWLupfmjMGArsKEfxb7P9BUmZSDEAziNUn1M",
  "key23": "5nQiJkQ4AbP5skRMNTuSVroWAoVUX7XCsNbG6nTxdSUBmuRno3WaCuiBHNp8wFRyZae1s9D8uYBgqCrXQfaGeQ6c",
  "key24": "26PyM3Q9qQXxvdjfAKfo38vQAsweFjjve1qvanP9rFLcYWUa1rDhu9T5aCE7PmzAKgn8Ko9vrTT5D6sCKS1YPTg7",
  "key25": "2hAf1MNN1kmJfKt1z8sMn84WzTpGvfa7BEpuZpdyoWkoeDRH9sshneahX67ngsTY4VpDKF5TvFMXB6EJxdFqBVb3",
  "key26": "3RZoWrHyaN13wSqxT1ywpiNBTwAqtEfYKBxf1mJVbV9MCmaodPXd2M1kPY3MZ3vL9inJNNVP2W4gbn2JN9AEwQSZ",
  "key27": "2ZjC8anR37TZg8in1N2dgcHfbgSqmbgp27PWFt99jYxVxxutSnACoqzdhwvPDmgDRej6rYmxjBDByomiwaxoEfxm",
  "key28": "n6ojpCK2kCyLXvmyxpsMyPHBWuqXJ9S4Kajc4EcTL8mvDkjFSEcWjqkA38ts47YsWrmfzYbBxxjNTYsuhRcEUNU",
  "key29": "2zdXvVfucCykJQ12mcTZHqeUsGapvr8t8yMFajRRAMJiuTTYCMB9VhoE9fviL1mWj18cNfWBxfkWhpUYATz3wwTF",
  "key30": "4E33oYyjsNkN2gtKHaYZSn9qyHPxhKHZB4w1Htuh3j5zGah3UQC9Toyp1xf8bkiuMS1Jfonb9p9LscD2RfWpqvmW",
  "key31": "uEX6hTxz7tzSQWj6fLtjZARu96VeKDxS4MFSS9aryPzcRaatZKew6FtDw78QxP5DCuPJnNxDrRm8r1eeZ2ZUQeh",
  "key32": "5C99SazRZpqz6vu2sFUNhUMxiTxQwWyFCvCVnfpLN2vtDeLBjjtS82oLtcaTc2Tma3inXz53YGpsE9K44gMmreZy",
  "key33": "4nCshzCgY1RSU4VykBrFwogSxbLZDR4VobWVVXYAupPUZs4Xi6BAyZZwK8Rz3PtKtQf5DbTxGwBdfMoG5m1cGhLo",
  "key34": "27n6qyvbQpmiRjRDyNfG3sWAgsSXV4jgAsfUmLfcyY4LJh7g2VEbvVButShcMfVsqhEwmEHZ12YY7UjNgFVyV8XB",
  "key35": "2RzxkWKX6uEtwskTvbQMpE2uzJEWzdeuv4TNZkeRAZ6ke5xURQtcXGxwiBQKkUaeCNfeSysCHcDQ3zQD7sjH5Kcm",
  "key36": "4K6m9Y5FquJu2QMMAMTcmPtEyERXiuGC1oEJrxLpQBHAC2usg86rc5ZT26FMTK4w8rv1aVqot6U4Wxdqv9DiqF9r",
  "key37": "5NHMNmbaQSKUJxrqhec2VKa4LwA9Pxb4ZDi4U7xDaS7GLScYBC49iGMm8QEBZkxhkiAaAVVQj9HffM81CK9W5Dnf",
  "key38": "4UrrGerkYS1RotY3hBXEsmJUJLptWXepWaHaeXPdCCeLCmSaGhiiTs9tUMcLGiQVvgaDFb6gkw6zfZ1Fh3BaLABE",
  "key39": "5mWLPgFLtgbXVaURrwyW5NS7gQxNzLq12hS6xjCBEgnM8enZk3FPCXBY9Q2in2AaLgXkqVJCz41WwThcxWTdyYYC",
  "key40": "4TFoe2raWQVXZ9h3GNMxSA8FrcvUC94i1fya5xC7hNiqdnv1VUGNkP2z2us982CNQkLccdsr3bDU3ZU5pFix9En7",
  "key41": "51rjkWgSV5v5P3hKdCNtZGTs9zhJ2DobRG5pnCAUrfzyBh4r7EezmHFeZPgew4mcTLHjxsuwHGAMVqPHSvsYkJi5",
  "key42": "2WtoYXPfWvBitz31XVcV5tAJeRu6nVvrJ71HbN4pDgkFRUKGycN6AfGP65QgiGf6qKQbdtw4BSNKRuw1feQGLQCM",
  "key43": "4pFMVqSECqjaHfQe22x5q7t8HvqDcSRSHaqzCGT9R824moEqdiRdtxNQA1yR8FZ2hG82Hj8iNV26FiAfge936LdX",
  "key44": "5LcrZo2rVQH6dEhGdxFmLEh93ezd4yt8UDKhzTpAo8MPNdB1FcZa6CPJPpn3WTBhfSkM5A3RChMRuFEwnTPf25fj",
  "key45": "3APwY8bfZBB5GQVpG2HnXDkJ71gaMZ5N96yQF87xfSziYR9mKLNxfqt4ywbRsjjQHeB8E4BDKEsSHUG4vqhn9QSA",
  "key46": "2uaBSeKxkx1zND91ewt8iwF8665jDnVu7ML5oAhKhrcoM1gMTRiMVfKsHALXk1vqMXetMHPPrm9K2DjHupAqwtVM",
  "key47": "3dr17nc3TQoNfkEH1u9bizFFxFzdUEBRGbXuTGNEWeaiuVNgivxPsH1bH2Ke5DoVksK5GLxVo6CucsAgHsJbJCPd"
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
