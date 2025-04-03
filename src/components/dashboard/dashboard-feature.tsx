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
    "2k9YmJkCvzLSKrSKL9u11Dgyc46q2e73gsy6Ws82GcTpAmsvntKYvq81FTmsKJPxBxzaJu6kvQ5NXFuj7p4PJYBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66YDhTtXN2ywKefUS3mndF8bkdpuZt3M9THMoPMAF6qXRMR6RBCCfm3iW6ZDVNhvv4adXy2EMip71H4C2PkZFYai",
  "key1": "EU5KUiHcPdvJED48s8SMPDvrkM5NKqM8gv1kLxwaBA9Ri4MXjDVPfBY6QDfJGacXxo8cSvN7aS5qApMaNjJjmTV",
  "key2": "2yVv7yjx3Nx9cA2phEPYf3962GSN4wuzKN7GLnm8ykdtpoNNUVXdC9RsHUWvJih3pKnApqUMJ1ZKscFRG2pjyMKV",
  "key3": "5MzJzfhPPSjBLtNjd6nNPsmnKE2gvQz8So37MxVNsWafszumvt9NGHr5VfRWQRijSFy36ssSnXUSjV7vygK5jCZG",
  "key4": "exNtDWJhKHkumejfgYf16YEhEjM3nqSWmUEfUpD8Uicuda8aMErzjhxFZvFQzd18Wm3dcqLb4xZQVyBVb1x6sNi",
  "key5": "4sVqJ2NhmFCaGn8ntkccqsJRMeMgiHV7xtSvqqAaThn6Q8DAHsGisoPkw5hsfrC3zLHYf6Qg1JDbvHuoxhuGVM6u",
  "key6": "5NQyDANpmVk6yornzKsrF9TTD2fYCk9j8R4roZwnJRUo36DQn4izR82W8kEbnbshaX4eau4UzyXGTygmxDLQvYy9",
  "key7": "6zSV23A8ax5YDS8gdoPBYpC88RYLmKwmX6MP9u1GcXYF1ozpndx68ECjtGLyQyFEL1WBb23vmwHCiqiYiL1zkkG",
  "key8": "3icbrpRv9i6aZ11gTjYDBoj4u4StrKqpYdgQKdtQpfFjULHjqAVYhFxg5dN1ZuZ2Fh1dvytTenM6vioDG8i8bDXp",
  "key9": "2MAa2t9nYff3YDoq6eVUw9UCrG9ML1kuft3ntgbhrwxZkcVgukzRkT1bpuxZXuuSo8btYxw4fmj25cgCTt6HZVpw",
  "key10": "335yVWQfPn8MYypMV2gBYSKTGkWsqZUPJ1aXQ1hstW1YP8QpihoC3BVEey2chJSTtpbxxStt7HYorRiSoF5nJWtc",
  "key11": "eab9QTX31GSxzAvYafJKLeCLy8AHMtV3BDyNQy3gxPJj9DWKvpavoa3acQLAqCkSi1r5TyHqDtV2meypFiteN4G",
  "key12": "PdBVv47WNUg2mGbVkhdjUPo7n38yEJcRtLBaJ1f5DFjmdo4NwydMEvsP2Sdf7p3KKPR32P3Qzdy7ZogATBqub17",
  "key13": "2W5uLpPpRsWXZ5dmoxV6xCypJTYd6Z1PxD9kQRtws6gsJ4Mzmu8VeC3riCsJFmHA7WWN6PewbsUuCd2RfJupRT9D",
  "key14": "5E6NAkCHEQTnT7Wnqcuog5xudV4pLZkeihH7NhwebB9pMKRxsevVpPyDYDHTCmMPqEeZH7wsPvfb4S78XnxgeCbq",
  "key15": "ogiVc7cLbdZR7HM8wYeSTFpEi6JQDgefDJQki6VczsGPtpvbnwtmTrERkbM6x3KPT8kGuQ8k24bnopxHor7Bt7H",
  "key16": "9QGP7jKQ9nGUAaWa21yC6E65vaD3DJwQda5MyM4GaTfoXqvoVKMycUutQt7xumG24w3nQZjuBN2MEHDD4kDgSH4",
  "key17": "5DGG4QwiAdRfKASFbCGLSYA3KsoaKcgR9HtqE6i8hrrRzbfUkjENPtFkk5LjqEqEUt9yWE94Z8gNdyVy4T7KKrxH",
  "key18": "5WJaHVzsk2x96pkW5yxcc55fFKndT87MR28hMvExXYkSrQmpcwzuN1Hrz7C4cyuKjCtWykHFT9wcw1YTUXFSaTd1",
  "key19": "djsAPUhDp8q9prsdpJPYWkhRcWc4aHUSzTVVtesGff6uYxyXnNdrQkqb5MtBKy5oYjWytsJmRgFBeLVfzLJPYRG",
  "key20": "4abZiNYeYH1YXaHc66xhGouTKwJckPHwayyjdLuLxKApTiqJxwGBtp8jS7vsdgdkHwqAm58VNszP1q8KT47gkgrm",
  "key21": "4sP6L3e6HGL2UYJ1e6md81hkxYX4KEUhZxnM9sxc9b1tawZMtuVQQQjHyxWcBY1XyH4TkFMJU2hBfWEpaR8VdwJr",
  "key22": "4XTCvWaEGt6SrUYwBTWDcqd4sVWn4srGxtst2TRQXt2kdmYv4JeT76ygMvQNX9YD4PJQh2wozFMpJV3xhFKE2XUb",
  "key23": "p41YadNz8QMdMjKuBo1qyNesBdbKArdiZ9UbW7xWn8z8QdLpdy3RUVmYGzpbh1oxqZa7975YfoJbncntiu29rzu",
  "key24": "4iDhfopnvo66YnKHsz5QouGoptxBDKpoLTzi3QT15uUVVmsRGgbWaJtsHDmiYAcTKKM3YM7PMRQ2kXBXYBuKAMtT",
  "key25": "26cj848QaXyTd7zTHtHdoD99iAaV4WkuZ6jLcmCc4ZbPsWNNZRA7ZWuATwFwiiHLonqfiMBWbyEzTP5HfyZQHX4r",
  "key26": "36SUJrX2SVGtGMDC76n8PB6FQ1K2riR6EAHekU81A4SUofp9TMJGo8KpjAHrRh9En2gAVwBFmoQs4pMLEXUWMXkK",
  "key27": "3DSbMvyYJ5H8THsHvGZyJUQmJbqJwAopWRM1ev1ohaWHNhhEehkefeBAE4RAmyBAb83jXeZbw4c9ibVT5KeJSQLy",
  "key28": "3xoX5RYMZmXT1JkBxAqzPgKAbH2XAHWMWjAQ7dyUyqabAq8xUYJvoYhAvFz7xjmTM1woSBZYRzN29Yr6tM5q38Fd",
  "key29": "3DGGfMe4PGkE4xeNd1dWy7qruacbsScQftEftho6irdvLER546as36L83FWHMBrgXLUbVFyuS6pg6iktrgnzYMce",
  "key30": "5KrjsUm6HjnsiA12p2b45KarS3QkEudwRs4PZFg2N6UjUP2upYVBr28T6P4Af4RvjjVeKqBcLcxCuLy47h5H58z",
  "key31": "jkaA6HJjccQFXQuR3aTA3impDWf5vAM2yswxur61VwFdh6KWMKGGJzHqi36B5bt897Cfr8pEyjZVnB7qLLCZ8dR",
  "key32": "5iaGULs49C5FEkJ3EL5HFvbQbdYQDfNT9uvjAqa51ouxVt8nyUQrS7VWCUjrxhaspvrg8GhJXcZbBpJbiABQyzpw",
  "key33": "47sdqeWrxuKgpsy4EXju6rvbdahaheM5hTt1dtfTLsPMeCvbrPJFu4AkUvHJ1C4fky9BGaMBuSuFoU99eXALxAmr",
  "key34": "489iRnPKuP3SQtQE4KpqAWMYSaQFPtJtbWqBNZUAkLieDNd5XkoddY6B79buDF7LzVxVH2JHp3p8d2SkWwMnDDza",
  "key35": "3BWBVJVhzNqEs2iNmqZ4Kc89Ce75xC5HjfD9gxEzRwvoNyxKHaeHHi6hspSNFT21zaYyW7M4Y5BfEeyyqi3Vdsrq",
  "key36": "2NUkEUmPE7Tzh8e1GZKvpTEsTLcp2dgoAYwTJPFmUnnYFY3oGbdvGgEDFSFPJdfDTD59G1J5vVQJwF2JYkZLmEYk",
  "key37": "3jVhHvSeTFDBdQNyp1TCFNiH3NqyK29PVuop9JgWBcUah87jFutA94NUEgCu2mgmpeQNkb7LcwpxLn6t8Ek7AnY6",
  "key38": "4pWhfXwigPNRx5V9TThfC7sBV1kmvKX5A5zMQSojP1sh3yRe71xNEbhQGMnENPeTdUXsPDYFQYSbHGBjRAZcibtY",
  "key39": "PEqMUp35bzuMXbzsQriJNECECZZU7B54Coh9w7apDxepH8pygcaqAgwEC3XJU4rUMLNucv8kamkAxGtrn3fNPLY",
  "key40": "4NRrZNgoJdkgTBfmVY12XEn6uwvmRzR9BEgPX32mRjn1LpjFeYmgcpYwEUs7uiuwUXgrNkxEkCDENgA4BiwVQnK6",
  "key41": "4gGN9AW5e9e4LQqg5TuaE9Sf7o34PB4f8Fd8SPWok373MLRTy1vcARQA7Te3uNong4SMAna6UWH345ZcamrbXULA",
  "key42": "4tY61nkucw6y5K1KGpVtaUyB191hUEWeZt5hMhRp7zLXzv24mVfQs4qZyf62nQT8kPi8EkjqhEhWLoBDkQjZYi5m",
  "key43": "4ooqsu2FduL4X3HoAuawqwYg78pMTKCaFViBZDdThmy5X1Ve73pSjJCF5bKct4R2xTPdc5cw6s3CZPZQeZkxJZHT",
  "key44": "n8YXH1d8wn3RjCKNi8FsVqZXtVSJ8CywYM5da27MQLgC4snk4xPvymx3wAXsB4DhtGwS666FevhNSBYLib8MZrZ",
  "key45": "3RE27sb2JesjN4vCmYrvrT8kwm2dHGwnxkspWf6A66uNg1D8vwW7mddRKJAWYvL59Y7iHkzsZM4SmebzxjMHB5cM",
  "key46": "D5Ma2kh9FH7satpHGZZLr5Ez1LCkgARuEjGBfM264bekYK6LtjudujJRqxuHd2anovVobxEd8uANX61zLQy1JSD"
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
