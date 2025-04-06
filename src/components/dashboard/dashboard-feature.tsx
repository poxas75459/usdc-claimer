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
    "57KKZ9gCpYknNGzbuKD8JXbtSfaU1uo8hhT6kwWbZGMqoPmamX2yVfvDXo4BUhFP6xyiYVzdmC9jhmx8zmUK5fWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKnB3VPBXPacpwd8LnvvpwL5pw4Lsa5yDwyMZCAfues5S2EHqv6JPkBeVKi3JT23JvZMpmcPkTcMp6Pr3Btkt3a",
  "key1": "4zuBYLPLeo1AHv2PWwptApC1ERNYoPTMxWUY2uiGNU7VwvGm2zw1kGT93ANTrHb9fRtKe5hwiMbieQHa2FK8RnEC",
  "key2": "4BAtHHmB5uD7AWptfJn4s58Ysm7QUpLSzGJq8RfFwuFkgxrXMRD3Djm9ARW7UKt1jvgot6MjBc7BgT5qto5WBDWe",
  "key3": "5CwLWXjGFddZ2iHy6Rkzt1FWn2VbDQrs8q1n5EToM3P9zqwBnP5NrK3wTJ3LNF6vk6cXffCKwfDkznjWqByPPDfx",
  "key4": "2W3oxBdZ69RDKe5y1msVsNUK4qPPYjNStARfMAy1BNLbDvunx9zDFMw2X6urGzZ7yoyB7ynE2ZyChoMwGvPDnZbV",
  "key5": "379CaxeuyfD2K3vnyLstahxpLSNyFmkSkWXgsDg212CFKf1yoHDWYvukuwn2bYCziUHcTfkacaGm1XrGqXJzJVyT",
  "key6": "3u2FZvmgo9J9YQUJUaP9XLk8rRk2g83voHMtfzmn7keCMRTpHSbMtfyXmPvM3Y6KkJqiD5rVc44uFoVLU5gp4qRt",
  "key7": "51uU2xoUXPD3dSbn2XBe9AfTqMrDHS6SapZcd5NKMJr3Rkq9buADpQbSquXuw94gXfM4zP7gWRENNQkts2VXTtcr",
  "key8": "b7vxdiUM5twvUNkz87y9SV9ViBPDHGs8Jdid2Y8pt1FyyfRh2E13rUFgAKDNFytxaQnEUFmJ7EFPYPmHsusCr5R",
  "key9": "XVBDTUWkZqRGNPZVA3fmR5jeNyp5nUHz9ZLZeVdkbwh9Ft97vgJjNYdnLE1C13XpVv4UxnrRPwdTtnuB4JHZry7",
  "key10": "4LD6bXm8STy8GyN4vaArDgMzCHcAX897dfjDnKLGeuAQ1jGDsYxieSP2Fowmb9gU6SvSZzk1iUJLQyTm5eKeD9nR",
  "key11": "2LgEhuBtJnT33UnbYBFTwDZMtqAVcsParopUvKnUqZeYR5k5iu1ZWXRYekoX7FxpkuX2t29GisGu64N2Aggom3pd",
  "key12": "YoSfGHhNQDswcRgM4psW83cgLuE8UanMouZ24zL1pMQx1JqLufFmc2MmchpjX5UcrK4oCoLS6QWKzRjG2DmAQso",
  "key13": "5Gtm1iRtj4f339RMySDkCXjD7faLiTkuA6t9zUw2kafgkGhKjPmWhD3fZbQNPRGZui29LtLk58MN9q7UhD6pZ2Hp",
  "key14": "zCo3sUvm7Zsypdzu8fBNm4FsYhbDnUWm62HkkA4sZ818sF7BuhQmPzxv1a8sQkcPuCGH6tsY7ycRbYe9vx6SKDw",
  "key15": "5D55REsfxghgYUmYKR1iQ8Frf7giqCkdBaqEfjSbcAFMPsC7ywai56AksH7Mzunxgut2Jrt46XexbY59yFBNPfjj",
  "key16": "4UpVufevSfGPx4ZvAQNsJVkTgQXXG6KFy6NJ3ztHZsmiimr9FtcchSPi2CTrqA3tAA5tCtdhB9gxAetNPvgA5kmt",
  "key17": "366WzRXUV7DhLLM4PQ91ymwpAMceUiC3TJrofe9wF2yLN19sqMBJRpDCWFCGbX1adqDiXSfHM4hqmjZsL8EWieTj",
  "key18": "bVZ51u8MzZEbpSYEXkkzixduv5cnNvqJsBrGcZtEVXHTGGkXyuCWz5mvYNMXPD38RqgJuHTpmuGE1LcEsijR1yv",
  "key19": "8amV7XNqyZ5aZN9qAnUUx8svT4Bo995mPVbgSpCcvXyjSj6i2SmLb3D5ELwUa7khQRR9RaWqGBbTVGieUdFSEmN",
  "key20": "4p4hHuucmz6yiu3azGXF98qfXMKD1WEs53vFnapXUCbL9kUjh6SvUTwDU9PXtYs9qurLB1bLfvKxefovoENeKmsu",
  "key21": "5DYS7BKRebChsUWi2XCNmHDP4dyJsGe241k3ft42CEY2fGp9VmbfeJoEonpMet7fUHfchK6yNUnsWGiE95Bb8QCq",
  "key22": "5ua5EhYLy8WZ5hob1rWZLG3NSayKBieNKqxVNQWG7tf5JFCbwCQvuiHNrCj5P3NUiCVZon69siswdLjJrA1j724v",
  "key23": "3MHvGRQXx3qHUwhBs4Nut2JUiEgY7YvBVJfLww4aPSwEN7CavYRk6YZnEuVSZXDhQF3vd4onFt9kQ7JZTxbpSW9Y",
  "key24": "4w6K2fdfgM8QNQdkwFZwprGJQnNRfLa5r5udRh1kyRDh84ZPm6gL9hRZ5BSY7jgNeJtranCejLeYqw9KJMETaYNN",
  "key25": "42rVFqoPCndH3MbG2edv2QoRNixvbUoYM7u38QswHcLTEAGahGWq3NrzEnKfvzJ9EMFMutBijJGCH42S4aeC8cPg",
  "key26": "LxvRwwhBHDxedpXDzQPMC7PgU1cAJdb2DoqrnFEDGmkxN2LnPtb1HEracsWD9ujMbWqpJaQTCVaFXzoMweG8c89",
  "key27": "5pmCbRD41BjcR9BKjFBS13VAqPVFdtDhAq3zMKZc6ZLV4Jo7Ghqa88CqhQgyb629WQUGjAB4peXyPbK7y58sr3gf",
  "key28": "32i5hRh6w48q2mAGN1uWFD48FVQf9LKjA6mmHrN5e2z6Q6JVAzMVtZsEY2wSJxAJwvj5SmtAhbwrsEHB5Q12MxCu",
  "key29": "T8tNFJDB2i3pvxg9eMGk3giKa2WKxmLodm5wmawigKrVoqh1NhDUkv1SVq8NuDXZTVfYzw1CK6bL99w9SmKAkqE",
  "key30": "jhMf6YmYDHwj7tWfCeZYbzAjqtvHL817mydaQFSjYGNo3kyMbrs11n2tFcKtztK4vAPKDgiFfbGx5wBNHSwop4K",
  "key31": "64ZiWMgVYRtRvQWuqqeuxSHRjskHBspZCNzeWKkzinmHLU1C2KvJAuk3YyB74vW54Y2e1f4kX6wJdeVx6mFyE3nZ",
  "key32": "3U4rSaRcKRUZbr2d8R8s2yDr3F4TFmPZEwpNQiB4UJvtuDgVbhB7gGdM53zHKswdpptyeBfmeGon3AMnED3Nt38X",
  "key33": "4z68jCnBiVZ4S1LMGoQJagw6XNHqAxms32vinMm9iP7syoBuTanZMMkxTrsuFTwVf3uRohxV2d29zWk1PJqux3Tp",
  "key34": "5VCJXYoXTTdRNEqhueZbBKSrNQp5fFXUU4zRPPHpsiHprF8gGgND1mhi26SUouMRVeJxLszSFfdVUL1EML5MM4FF",
  "key35": "5AJpiHpb4hxsCtUn8r6SZ1HHyDoPF9s4ue6tzhBi1R7no6nnWCRTKGEsE7Cd82vrcFgDN7swPVoSZTJ4iSTb32mU",
  "key36": "25K5uuoxcZMZZoDQjx6wSdQyUocb3uhwKn8ktmEnS4EUNvGLRJrohEFkTCEx5c9uzLZRBygN7r9arTYodRHGuYaJ"
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
