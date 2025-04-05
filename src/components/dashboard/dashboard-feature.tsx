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
    "2HPpWwa527v5mG62kERJPbLDC7iwhnqUybiRAeMvheWJ3t61RZPKhvdWHontD2q7Lh8UjionaP2owRm39HaEAjmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuCo9eekt4AxkhTJ441qEZtJRejEy7iZkC6UGMi5RFmL7uNS2yuhc5oMADr8RHJP2qzQtippkFoEC7HHhej3whP",
  "key1": "4NAXf2kcfJBMPsqtVkKbGzMXi3L5rrSHHPWQbCLpneuR5Gvc8vUaDYbTwFgSGgV1pvfjabehg81fwMkLyGweAWwo",
  "key2": "67ceEVmMuwQi4tk2xC6LuDXBwcFS1A63nhv499dyRYm3SoQZXkAm9tHqBYQENDYm144d7J3WwZWydYKuP7rD2b91",
  "key3": "ji4g2DGZLJFTBrVfZthmXE8WyvKdtdwGpaW4iz33aVN2M6kKgGKstJxvtHLSgwaRbBoNtkfJBMc2UAbMwudU3We",
  "key4": "3p5zCq7bwAY83EdrFvR11FyvzmPw5bFryueP7LhAJyKP9UjwNuSpgdgXyeVgg5PymzcJUrJVRNrFxp94nAg3GFpP",
  "key5": "4McicGrwyNs6LG4eEgAo6YYvFJFUc1QJZUoM9KymBXv7fJsxx2iFrUbeXpoRU4HTfpp2ameoQUTHuEgC9Y994tSK",
  "key6": "5wqCKhnMHMgDYTeSdaNfJkZr5Ticqk1sHcFLMFXnNYyf342XSGKyZeSx5hdmaLJBitkZMdDQL2V95KCcCcwkG7kc",
  "key7": "4A1Cui6rGXL5avWEiuHeqL9CzrKjQb6LohowcdvRCJS5uhqoambomKqAXta1KAuXb9vUA3Hp9YFLrHMX8tNnSUjk",
  "key8": "5Qs2HAcjHpRvkeGjsv82Gd7acsyYiTrcbTDRvbdQ8MBNiC37Gqs9xrjhjdsyXjhmPAL6UEYXVJpAmSE6ErFgPQuU",
  "key9": "25TKh8KdV63HC52CyXquTSS7vK18ttjphAe6BDjmC3Fn25jpweSc1YJheYQF4ZUSD3na7jRFjmYcCqBZCWpY5J1t",
  "key10": "hw41hzcAYtxW7JzSrU7VuEcULMqtZL5PHgNGgkmWW9hzJFphiJTLXqvtT38mYwAwP3CqsVmYtC3E3AdF1Svg7ji",
  "key11": "5pcyPYNppo7oud8vPwdGJraiYa1F7vu5sb8zPbihe9KwaZzDc99pr4YehZXFRuiJuRoiKdAiiekzfVcSxJSynS8A",
  "key12": "2bQXwmMerUsuY5XsGGCzGPBdcpUurkpKsF5UpYr2JdqWPfLtmNo6173wtAHNtzKviG9uN3b1it9U9LQ5x2asbHYL",
  "key13": "4MSbbprgYRhWbGfhj9JrQNvCkwgPiehwVNYHBdjGsCziByL5m5ry7FjP9BNC7diEhxpGnjPdK44W5fL2i9rGQNiG",
  "key14": "5ead8uyssdhfqeoxzUjQ8G9MmGXdpKYqLyeBRjfaM1iwSbRq3B6eTXbC76ekNVYz6FAohEyrhcHGv2nHFztwf1Eh",
  "key15": "4b1Ao2ENTYi3hbx6ETnKK24fVW7r599b2hUnhrou2s7TvsSVRhsbcLEe7zVeTe4fCgkQSKSwJYVUErzLfKPg59LK",
  "key16": "oS7KKvMwXGuyhhA3PDbzM5FdMpmb4GuGn9xn7A3PyEkEai4HQFQMrztUMHdMyPtUS6Vabi6CM48jTpXFNVzmVHe",
  "key17": "2HfWWqaS9idV12Z1heEWrPc3yGtWoX6aUUX9nVYu9SSgfFqfNi8HQGmKNayDP6czAg8RkDYBCGvz66kZfT5RXm63",
  "key18": "4qJMjGaCgu5vUYpBbBvooSzEds2aQwt82DxmVm39tkC91S4nu1NXceL3Rq7Kt4a7Ysfnxj2ee8kmHTZFxhGpLHYw",
  "key19": "2tHFX43t334hjTWK8vWSRacqeTnGaCwj3CCe9N1bZ2tu9eoDXob8YU1yKJNAHowaoWGAc472e7Qm2F335uJGwHSW",
  "key20": "3etuNJzkdNyWeHAw3qRJJcRkBDYubQ4HMLBQktqDYuLvfQXwRkoUd1DVpY77yTmsjUbh4FrcgrG4U6vdBtYsaiYT",
  "key21": "5NZyLppDDJwVDac9P1mG4NVsiiQMb5i2FGfgiT7BYaMipQQtTXibLEtMhVAViQinn1hjDcJ6TWwik43CzNNcpuyg",
  "key22": "H55in1RNdxvc225FAqGKNvf3fcEo4ufYuvX9iXrizYhm5uF7kQHJyo8ZpBSojiYwuLxu3AqoMZQoSqjP1S6kaAS",
  "key23": "4BTZsBXrTNeGmEBFHm3gbZmHygqsFUPEcL8a6wGgdozAMYyHdRGFPuHRTajqhD7Vy1xBKBt4doSuEei17TnyaDF2",
  "key24": "YAhQapVFuUUDmXxrF6Gtqgb39xmjVynuk1SfRimkSvwaAKzedfPWoptorMauJK7UYfUtVmMGSLzigusv7MaTUF7",
  "key25": "4hjiFZ7vRBDKzJjABy3VfaK5b7Bj5sgkySj7sdm5MV7c5MZhxUk877x6nFG7cSF1pcxHmdVwR8khtr7oJxAz6vaw",
  "key26": "qswqbAFpjFZwKkKaKp7hgVNJvXh13k4ZqsqjQzYi11H6HQ9vVij4uqJKET6tU4YDoAQJ19BbskSA9H8utrSweCr",
  "key27": "k58f5qBBG31gUjYuYNrYFj9GnhFZmNLh6o326KnEuENgdfshjauXZgcjxSHTTFQjNsayCULor5EMCcsxVU99hQS",
  "key28": "2gz3Ddo3snuWiGzy3dDZZGvKagiYEsiQtwPQvdYBgfZCu2rnLP1Lw6MFWhHUsNudHyBX2HtA8EJu6gpKeHYX1Lui",
  "key29": "4ywDNTshRKvx36kxeGhbCm3wR6138x9ZRyWYfA7jXmSMfYoQStgZmjsxpqAoo5TGa1khFHoQebLNZaWXkLrXB4sM",
  "key30": "fehe8Utzyukx87M2Gff3eC5GsNs7EueWdbYTsShYS3wA8AhPVKhJRHSyL3CURHEPNgXCw6ydGWkkpXr9czfAzQv",
  "key31": "3tvs5BQ4uVadE6Tzyj34Eg9XzvW2pz2U2LFqMJR4GykipyoJGUuiiPi6s8JWDZ7wzLz5C5XZqnwUn1kpCM4Jp8FY",
  "key32": "3oW4toou8icVh2vePMEKsxf912ABBcQEVSR66p6SEuf5Muk2A8at3qry6j3zBY14hmHbk5Q2VwPqmYiebXFgYbsz",
  "key33": "3GgbTKv8rxGLMGUhZ3YBsq41yhcfjXvhHpEUcF4mkQ2pTzeDzNYZM6rQuvomUy89B3yKsvcZ7mM5D7anknuxoP9t",
  "key34": "41DLEUqZZLBmKfFrRmJ78FUwJQJ6s86W7vwkGBHGJt54N2uv5WtjKqf91AwF1JjXnruTBU1sh13MGnNmLndd36u",
  "key35": "21kvrZUZC2jshd824fmKz3Z8zuAXVknsGSAJzW5NswGi2b5xqL9FqbJvoFQWTyycpZPZVUUxUJ6Vk9ZYJMyhGCQ5",
  "key36": "2UgTUozojswE4WLNxTh6amS9mHRB3JdHCWkQCowhNnMWvXNtgiqk2VQvYNpf68aDiDQ7DNv572SYD7ndCLzsKxXf",
  "key37": "7gT7fD49QhD29N5yz2CX6bFGQKWUFi47ptDCiheZPPDVBFMzAhh4HR7ESZf983SoQkhmCHNmtfKz8g342HdDxpX"
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
