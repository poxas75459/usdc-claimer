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
    "5tpZoFnu6dVsJncoQ4FJoLWJyNEZjJYmLV599wAy8BTwLbe6csN725wSDEsjJHuQWBVJgJMjwJeF5KYWK8WAAiis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4MpbrW5g3MAb5QCNG5wGGgEsN8U5KEr23mmbGBzijfoH4SdD4mN5jgFArDh8cqSQowDd8xfkcihTV44g4riE8g",
  "key1": "p8DArK7rSkaRC3wYPccLZMjG6Uit2fR4HZCqWY2baTvNDEU4ntAZpxgTQCGhKc3HQiMrHMRbMYinDcc2zb31Fkb",
  "key2": "a6c8A8Dbx4N25xZVDy7EV9pFRGbPYXZzr7tBrSEMaL6sp6RSiqjy921GqUhq7u8LRL3aruVHiwRgFTB7M8BNtxM",
  "key3": "4PEo1JUxRYn2CoVt61aG4mMar56wi6mSER57NuMm2HY22cdeXPE1hH6dyg1URCGCFk456qpYxhD6PD5zWmcFYHDh",
  "key4": "58UeqfgTUaRDxwjqQvJUXgu5fmVqTihUgwkqv19g9LPwK55rXXS3ifjvmHfzh7tuudNrf2Vk1Y84NVD5TK1yBa76",
  "key5": "2ibscsSqcx4dHU2ZuVNk4XKyRKgp5tenhcYnEWqmqtGnAbZZzpJwAY4Jp2Ex2pVp6iku8Ng2KSQgaxKWZkhGf13w",
  "key6": "HpkFPnM9QNGuo3bqmoixtV9TSbQmygPKcL9JgcVimj2GB5wZf8Yz2W6AYboyPfuZu6AHU5fzwHTbKxFgZkLmZZE",
  "key7": "R2zCwfFzAFE6sqZ1v3hQ7BSbmeD6dBmXM2mTbqDwy88srU3jsJ4q8561KuzesT6VP6fDZRyS6iTCYd4YBgvG6RB",
  "key8": "3LuoyieugZrHB8NYxdFo84GFneXkGN5eSV6jDqcs56LiimDPFk3x2Jpi6BR98CzmHxndFhxtJi7T8WLZVntNp54h",
  "key9": "25kgjSS5P4M3tEUK1vZjGEFVjXfyQxgfhXPccZSGFWzmMPZE1xWBZBmDxRpdZPaV1vY9KKKQC5CakmnjpNYcsgkw",
  "key10": "5Fjf6cYH5ou2FcoWUYU7YKsv9aQFUXM8cFDQYyjDmP4JQdTYSsZD4HHgz8vo8ybArbLpbKjUNGqVwg7HqUuFntZA",
  "key11": "3aeVRgBAYjJasFwx12RTSBEPKXVRXSyxcp6yoAJZspkZ1QZfAuULN8jXKmgaNvceNSaqZiHgm95QQdqXfjf2B8PC",
  "key12": "3kBguuxmE71yuJvsqyW7D97uqPvNzv5JdWUidP2WBANJfpMXmfQpp4vUoBzexHMEG5ZBJ9u5BEvs7PNjeX22Dkri",
  "key13": "4mF4SHtKkCNTAVpWANpdox8BNJKcaxdPVoCtoo7epYv1deSiQtG17kew8vSzE4PeKkHCHeNMEpgktwVCPQoeXhoZ",
  "key14": "9FbWuAAnWgi1oLPMe84vXqbZFKwcoznfQQ2tEHrtuVeBaJ4Czpi9utiLntFVCKnzWK7rboF6hToJ5oXgcGe6zhc",
  "key15": "5ZZocRgjvKH8Zww15m7TvvYY55juqcpLG5NKYbzbEscWmn5eZTSsoUqHAEKtQxyCTpa1mzdcS8wMNekJ3sdetnYn",
  "key16": "59Ab5PRVn72rCtM6aaJ45sSwhYt4rLSx1a2fKedLHdJ19ME6RhBE844F2aHiJooFtYZGLmxENk7gAqyRAdXhS891",
  "key17": "2UkrgouebMaY3rgKpMTQpy1pexn76eBoYTykAU1xY1unCqksQz7dPmZ7ycFXvfJtRDvzPEZT2mu9AqU3fmVfbTRw",
  "key18": "3wV2RuEyWNhu4AsKSgmGsWrtKgBhBkh93M8eMtLRBRSF6Ln2Hwcj7x2yD3GWZj7oUJx9jfxbuUVo8dzxtZYH9Urj",
  "key19": "372uQ4uEEHufE7dopHEoDhG7FqepDeXdcrnYurP5zTyyayPef2c8XHC4ciPPQaxWFsxy444DWqYb1C76nKFiLHmX",
  "key20": "4ozNXgnPSXynEXgUurPpavfScTvXwescZwxHcBjzUvcEGxvHEw3MSh3hTbrTBoNTiypFWiLCkYM7VCwScDThAAdt",
  "key21": "KgR7KTABnz5eWRsxnd9TrDgv1xRpm8AAnLhaNzzHQiGW5WZ2ZY653bcXYrB6AMpf1YFmsxk5j8sG5q8KsjBQa8i",
  "key22": "4EA6y5MaZ5qnhVm9Kj8NyZrHofeZa6tb9BfAywkKYJNDQrWXzC2DBkNihVzvvn4B4aPSxoKtN884yaHbtHfWvGTL",
  "key23": "ca9ZEifRTt6scWMUgn2KtwwhqAzCP2mwyhCPJJcigFmDwf6L1Erxcyay6N4bj1VdtakLcxxQUqzHJ7RgUawnfL2",
  "key24": "mkeFXq7c4MfBVAoU35bsVBC6MCz1DKhdRtpjL6hvzyjxqwFLorfJhpZWU2yDSMpLZW3ESP1gVqnCX3MXnv2UHS7",
  "key25": "5mzqy54q5hDnKqbtXvfmtaVuFLTcPN2M2nFN6ADY6U2z1v1PeHLqRUXRnAGBnebmX5hJp5AVcj7BCf2SyqD3PEJG",
  "key26": "RqFA3XUZcLWSMFTaCRLJefs7JPg73rpst7quiQjiPSMgnkb2yo9Uw7uzKPxqfjUG3X1r8ybwyWRaa2CC4imSbbF",
  "key27": "29aEs5m3xpoj3S3xocVH9CrMbt8hmkJeLiG7bbp5tkcmhdfJiQh8N2Rq4VeUC732T6Euh69MNeQorw5qdQkLgabc",
  "key28": "9XHBgHDL4SjtabAko5hFNikrdLpPcmnS7mBivHs8PK8pFZTHnDDxY1xxF4XtQdYvASH4UFzbbfpCqojKL2mJomW",
  "key29": "4sHtXYwqdSYFDWWRv52gb5YJoRw8fyRMra9UqDDHqVTUcmjQo7Hy8oRSwvuKUe8JrBczbvhAE7CHVBP4aqfAvNK7",
  "key30": "2gMGgBRixEtwLuAzPqgDRQfzjWotuL2ScRv9oXjxnM3TX7bBPNXNuF8w5DJdWQiRmFPLB9rs2PRHYd3WNP38zqu9",
  "key31": "2NYoJJt3oc3cECYq2A4vmNa5MEcskQLixJSyfCHuMNFa2C1MxLYDtBhRuz2Tw1PFYw9ct5BYEhSf6YNFYWHuuT8S",
  "key32": "3VDXbsK9E5D7XVahN6idHAWLaWxhqV6vu5ieGSgEqh4KF72SrdxwEvu5dQeCwCuoBTxePsbah4EXhTVS4qN6Drvz",
  "key33": "4Mg8oHdqFF5v4sQwGKWnajy5bZ1vTaUoubKENhoszXtVdU2G8svG3nSGbo3kupkL2BP7w3kmv3sd4PLdnbGU7GVh",
  "key34": "26PPHbH4F5KQG8kDKBDDqAb3FqFSHkLeLYRjePJFKoecqU2vBKBe5nwtEV3LBWV9unzxAmLydAadSKWxRBViaioc",
  "key35": "4iHt47sMwU3YvuDmhciK8DN7piDtvJUPEzvHPvWPJNp6ABWyuKhRssMaRSThLhgZfDYV8m6VyoLHBJ3eJJH5MM4N",
  "key36": "3cxgRawg6wgCKJDt32dehcvSxNo6o3UTZ8EtRnRL69dFfwgNjCPSGvAT5gypV55Y1hu2iCmG5zcP9LQRSyTdUyx",
  "key37": "2uAkW3YJghcZj6rSpJNCifxogx161cuKcofNPBS4XjtU2fu55uZujh66bzdQXmbnhyKaEERLaWHNNYKenNLNK9dx",
  "key38": "nLJBzikSsXHBRTrc6gsCtRsVq7AXV3PH1Fo7FoPow5RXPnbB34PBj9gRc436RscsGPui37bHW3zjQFg7hwMMymt",
  "key39": "2CQYHS5wK78NQfTUUVACFcyiTCyNNhMvuUKfT1dAkQLnxjaaqjj6qJ5BSGjSrPrUxrSAypDd4kT6o2kevWFbxzgb",
  "key40": "6TpXKqy2RoRJiBTmTYWHGAQqiJRPjqGte9ZL6C9r6mHVmaQLPkav58sBkbmfxDYxkSqA7HMDMnvjx2SDUVKzqhS",
  "key41": "xKxw5Luhr6rh1ZSGcMH8PiE8nXXJxVXeBKJYbaTbsMGsZbMZXMRn3FqNjcmQB6dYwtYFR6kJLv2ngC7RYGvqTa3"
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
