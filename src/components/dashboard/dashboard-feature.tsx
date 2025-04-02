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
    "88gas97kBgxykJUCQ7KnjsnxXm3CgnRpJsndXg1gtZGqumsz8Ui33ncAcUjnnARe8Nb5Kdm4j95fep2pdLrBAKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49R3RTneFAMFh3SJHFZt8tzrPnBvc7yxQyR8zccmSesEJVCZGAeq7TbFTYz3yHGSu8aCVyon6ovRfmWPbB5WGoka",
  "key1": "5JrXLprxPrGjvKfGvmywWcNNpURSL91oHKSs8qLxwEtBWhHGVHCUBMz931ne2W2oWFr7TFPD8JicDQgsQaA6QAyo",
  "key2": "2A89DZXTsA7eDEUYzodesriN1KNRUbTD4ejm8QGu2jqewAdEDFm3aArTmU4ARiDWs1e76y57trAX8TKPD4g9fVAV",
  "key3": "2CZhpCzwcerFpULMxzwFQM5xmZycx4kYjow7gknoWjS9jtJPrJFvNJqM9s4kyMXuSrrzRkE8wHp1qDVthU34htq1",
  "key4": "5PwC4m415PzuLGWsJWKAZo3bWGWyMn8rNnFDSRGvriYUpiiSviLRLmAkLzGh7b4JGt84PFABpKmsy1GjDwdEVKfT",
  "key5": "3JRPCji1ReUojTpamoAUf4iNmNh7M1aQUYpTtc34m2zmLDXf8LvozEPKC5HYCvPGFqDghjFUzQFmtrLzUDiVYLFN",
  "key6": "aTYdscdX2eVSpgDZqpzViA9TLgRsjvo5n88m351jtYZg1Ptk4CCAye9pArZpuLVwaTY83cSo45NTA3xQz5xpVUC",
  "key7": "2ZqLRqSD4CFnbGXLdRvb4zUMWeNLCNs2QVJPsbGssroPnBUYB2C1ScjkModsUZ5Sxd8HQF1bga9vj6CptANWZ79k",
  "key8": "5umkS1beyneD5fHjfhqZZB35JvZPQqMahVCQVoeaMM4LkqEZv6mwYrupAPwfRNSS33roEczjQRC1VGazko4PcUjJ",
  "key9": "5yyQtqKTVtxV6u6229cRu13CusMpP7HNCisu9JD6gf9eS7H88g2WvecbpUnzX2XxhVYpixTxDkfLcCrigLnQERYR",
  "key10": "2XESWhe5MwCKiS9FBsgx7xNi3jTu3Wa1uGMqxaLdTemt8dV5bGXNzr9BYfpj4QGNNaFrYefSiwQzyVdnpGtJGZeX",
  "key11": "3q6JaNQR2yoUWEj9gfytohpHRSQGsq77YZpM8Edat4W9hN46bGW2xwf574vnHZvQFrmxT9tNAyQw2iZdavoVKZjG",
  "key12": "5ryXuSHVmmPB7HdxuJFRosJ2pgcBFE96vbWGr9trjMdYDt1wm6yub8hyW1yyjXhiRhJYWdxQGzAR6vsQuaLbEuSV",
  "key13": "3LcrVLS8ce8QMr3FAx2UCifAVuqw8QyHUf563vosH5zwb7smqhDTv6JG8theGXgKMZtPDvX6DwaKiwVWkp5Fd1Cx",
  "key14": "2pPjPvafQAa48qHuXaZn5RQR5nrZ1UZF2T9RFhAA3V692GUaB3hfiHAZ8QvdP7PDK3W6iEdyRcuhDUD4t1bZwvdL",
  "key15": "5RNmEWDkCLubktkW5fLqgn9UeMxJmYPh9ADrdigfXd5HCVQWBQS749D3aM3RoockJWP34qM5DisZkmUV3pqHruA2",
  "key16": "4sVXNPWkrKAcxfb4aUKwdg16MpZH6kZfLadkAqZbjmmMn9neHcHrRdXDQiganQnkuDtiDKMMWQwtmHJgsYEcBAjU",
  "key17": "39nngf8jLXU1sigLu43PjrhSJjL5bjWKH5ArG1h6gWqs1kynWgwdVGRE5JnSaGKEk2QpyAS3as9kRL6VKBVYVj2u",
  "key18": "3tWy8hHWAJKM4PEkkCr6XndgtqUsnzPtib4on2DRnm2cptzrhuCd8W8HShjTUKH8zV4iM9hpkRQpzEmuwcmxWZKC",
  "key19": "5YMmeTJWBYtJnUThbuxaAW9feJjXt4LSud1RfKjUnDGtTrLqtM9YcuHXQMBbg3riFVX8AbqKbbYP5ergYu5oMu7o",
  "key20": "5fXYM3smKeEg9BXAt2wGe8RpMZrsc8rPMMqDPP7dV5NcrRgrSZK5kG1Y9JPyfd1o7f3T7rZbZvPV1as3NQnoULDS",
  "key21": "45x1Gi5qjXQ1EFdPGjY6KE9nkepn9xhTgZS8hJJaNKewTgsH67rohGCosarBzJDYdR8wW7tJdZyR1YcjaEuJaqDG",
  "key22": "5SiRLvGHd2hagEnjAoJLqUFjfQSk4sRGaKt2jSqjupnyYkg8rjf9TDfSVYu6cbcLsP9fKNZ71vridd81MNfkwJsa",
  "key23": "pPc4KY6AZi4eUGubKu8dgN838BTyoVMgWKQgbSmD6S3Hbbdc2TAgzjETog5PGjuXXPRKLX2LmovEXZHEK6sHeDx",
  "key24": "3YjBm56755g9PSZ6uDg3FivjgmXFDekz2uaZSdLxUKGtk3xxxjG5LbTqWrVtZCUybRb6i4EGXM43szyyc3Y5c1n5",
  "key25": "5vfLJSBHz9xfZ1mcGNLwNN1WN96DPvNMJVGgaVv35A1NSnZ1N5bbNyvEZhWM8N7XSUhpg3G4YTDuTbAAp6Mehin1",
  "key26": "cJrRJeaxTCgd2mnhtBvJkkJwvsdGup6Qqa6euZGa6mSdjyTyyz7Po6WRqhMUSWe1Ej4TqwSBj4pzk3HBv8fBk3t",
  "key27": "65Z6dXwMVpTqvx8CANcHu6MQVM6H4588vdv7pMuoraAPYP2B5zLZS8b3sW7DWUWTf7uQPMaxqvSSX9vNJczmyo2j",
  "key28": "5yztQbsUANHvkpenq4mfWU9Uuw25pEugfF4y5nzRRAyeqQM9PLokWnFheSNUii3v3MUC5kzqWuQCWwbfHQMS5K8B",
  "key29": "4g9VHe4SqFcdHd1XD8HngQGAm4tRQxVdVarK436MANz8bkXf7Y2CxHD8WereZs5A74Hje4cTkv3RRgoy37THhAFV",
  "key30": "3P5NUgLTvR2hPinQAkyjTMfVCJo42zsU5kk6j9AEMP4rqn4mBZNxaVxfA61yY54Q9uA6UVZbNpHFMscD3DyGGbGv",
  "key31": "3csJnuTR9Cc4Bg7ofXRowEmxe6xXpeFRsyJTMEaygpofTwzrdpbNQXL4doy5P9sEbgFZA6BnRjNgZi9aznqMVL7",
  "key32": "2L2Vd2JLY8k2wTSzFwGMBzE26YTcF3uwZBmaFT2kURA9vfNyDhanjBZtqxkWCHTMLk9JFVJ8fLGRpiamC23PAszJ",
  "key33": "Uoh6pU9oSPaXqx4XXhZ983SzDvAxAt8jYDbg7PFuw2KE89usUfKGX1zTN4S9qg11g4urNpryN2TeiWvaDBCJRe9",
  "key34": "34yaewpXt5aucZESFWBKAyFTyN1zcz3F4nNfqhBdhziR8cZ6rP4tRT2n8hZpvsDL34qReoNAEJzNcKJ7bs3G8fXq",
  "key35": "47nhMBAA2ngqG65CwQkf3Lp4NnahyaKLKf2vGhM6AmKZgBj9jjtrGswsBsaBQKhFqBRaRM8xHbaXjGtq7YFEHFAp",
  "key36": "3ypz9NESX6inrdWcG1NuX5H5t6xXUWKS3VTUbeJMR7AdkH154KvW9ErcXG4LotMKA4VnyajrQod6fo8VPF9S4CxR",
  "key37": "5ue9gtzcZFQRGibTGibBN9MV9EXD1RYxbT2gp4YR1yyeVHXQr7JyeeXB9uajYDpzFaV31F383PzxMrZnhcX7iARx",
  "key38": "Fvzsv3q6dAK8JNZKyCcn3uENMgaaQfs9b2eXX6iu1qbEMGpRVkWsE4WG2zdSDSXAc1NsLF3VWoFpSnrXuxgK83R",
  "key39": "4v22wJENmxN3pMrsKJmo4B7njGux9h2nmMAXwQ2ot6F35yRetE6kZPv4sEmSGSfAEmTcH1yHa9kQctbeY7tNRq65",
  "key40": "357KWbZnbUZhHsk2God1pPQHVovZKtHddRYdQU2fz8fKzAa8CvD9yPaLgh8wr3c3nJYQgofVB1hYTgA9cAu5hABU",
  "key41": "3ESYA2giBTixta51ZjWK6hkbzMuSCswN423ekBsS785SKAcbNE2X3PduXf7RXLxng29o5VtM9xe3ySUUGqAZaytk",
  "key42": "4MNg3G9Qy14dX7fuQTa6sLtd1vrAiYhC4PfsjQb8CVEfJuQ5PaZfoaD9kwKAXQ5AqmmsgVxbHVcDsURdbeorx3uN",
  "key43": "PtdgFBRErDT88NbnCGBoukHnhKqh11Xdw7VQViZ9GcD3U1TYY2SVfpbhNkFSM7tFLRa2Vwz1HYFpmbEYj3rUuUZ",
  "key44": "2zMiN3DJBuKmyBVt4nJMwYhoVMqNGaEbAELJgKGDUmqEdtRgq1KPuHQ2pBBtQhp9dTY9293f3fSN8oxpdTEzcBVq",
  "key45": "3651rr5UnNgLtgRk3FYUHZETtQ82QRqqDRR9LDdfB3LsebWU9Cz7xo175aDUKdfL2vSoSQMQ1pzFuNwq5DRSFiwv",
  "key46": "t1qkUSKJ4L7dDJKADrNYefdxroLjRnyQSNhFuU2mz5k5nAZVbzBqEwZyWTFVzcm2w9FBY1f4Ys318phWTnKhK9X",
  "key47": "3tUSuUgsNByaqMF8ZKgtcGDqUEzicCuX8gubukYvmsoECScujUNQqHxfZ3xsjVXxB6oSbo4JkZSek1objso2uxHA",
  "key48": "4jzvaRxJDLoeQ9UruNS6HEVueFtrSsW2d3enYWwKoYeujHUncvEd3o66ndvSbup87jJa9eU8DPSuXqkEqkSFga1L",
  "key49": "3iQ5jqgggyE5JGv2HiYeGe916ixoEJSEGdBDDy4vr6dD7DDgvqpRx8Zc9zqALJJJroc8bP1qSRjRGjNSdxKJVw4o"
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
