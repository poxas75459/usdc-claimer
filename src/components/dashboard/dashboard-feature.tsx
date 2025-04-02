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
    "2YGWCAH2hGayaKrnFdYUjHhDrr4uRE7PVs5GFz2M5rzDhwLUcbBtNgLGFgweyjerzth5igAuNzbBc3aYrrYjaGWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGz8CQKX4zyQn5uyM6JgAF4WsYCThV6z14vn5hinPMMEBa8uWyfyRxgpuT96t6uQ2NiGUzBzxw71UCruWunrpip",
  "key1": "2GxwbrCCDWvyPk4tAJigjz4NUQxrevQ6sTvs1Cujh1WuNdpNeZLGgV9zmJeh7ek9YTjVGndtQazoC8qan4kWBTKT",
  "key2": "2WKKSeBL6KYjxYdy1zF53D8LWkax2akwW576zLoSJ5P6qGbBgzWEaeuRpYGbRyuBRYSwsuDbwMkhpJcd4ZoqepVF",
  "key3": "Y5w14igew9oDkyzkhaXcWZwTxFJGsk8RwLZc6GCXReeGFVz9gvD1oGEaJBcUtNwcPb9bQSaY7fZV7PoGNLRys4R",
  "key4": "nTjCz9Cyeaeh5RueDim5n2gv1w5eDKSZw13dfM518gjvre7YkqHWzNmK51tcxQzvBLxF7Cjrr3KobvE2uRnUYcL",
  "key5": "ygEFXKCpMKkQ1idYAPbdjc5YGzDn65JKzNzxiWmDJfWEziu5Jx8iyCwv5MVaBymH4EZLZiU7CzM7eWGZfaZT2DW",
  "key6": "5JgM7Eomj7guRbLYrZzZzUhQ9JDXqoqiURgprdYeoqREKe6J4CaMmUiZpjCgWgtrq1vR7qKajxPkENvUDWy2hxY1",
  "key7": "4eRv7nzzb8zEUxP3azZXABT7DA95xjFVRTtjQn61duhNRYTdxPcaDHadWCMZQZs1PeXe4Fkb6bGvRwM2uJFnSN67",
  "key8": "4MxZfunDRrKvEZ6zgFSyxrivKLnkNYjwsUWx2JDKnmCQdZjZjrKM74sQYnnmt9Lrvna6YyUQkjSWCbd8F7bS3n33",
  "key9": "5RddYNoMGo5uRoy5AxbMWwRPgJEwDzYbom4WAudYE6bCwQzfuS9dFAMDLHtWZBWDRmfzeYpJPe57p38wAG2Tekjc",
  "key10": "3Rufh7K3VV52tbpfup2MaofXuRuzq6TCFJ87BgWpuCQjJYZZ2a2ry9cJfUApVzKWTb4cTGNwwW2nXrkFYunNwpjy",
  "key11": "5yjSyqhzfY7CDv7kQXMnQRftqM7YE7dFCofAzkAQFY1coz6ECCR9JLLpy1tM2sKWJMMKq4yyHuWzQQCQEpkuFjN",
  "key12": "3N58gsdQdqu1B7T4YB3mmMUWaYw95W43TSLsNKvY9Ksj8QugnmmWyJoY2CVZA2oGc3QPndAyt1su8fksjk3NwqNu",
  "key13": "2y6aqCQgB6kziUDgj34fQfkGvZdPKnb7KyvF6WcivLyAMkV9AirF45ModPWapjhQ4rNkJwsibXFPWepxS9PczpsR",
  "key14": "3UbaCUGbNoaFYBUCTP98EYasrRYB3QK97FmL2Ci6yS7yy5CAKieg4esfE2kJaKX1PVQmE1Z4TQEkudMNeemKHSvP",
  "key15": "38fpCnfHNmRdasuYxQRHfkzEp1s8SmTmHmELFBDyyqS4SjzZYC55kmzkVmauZN6gZi9Lsi7ED89oFgrdYXBiPCSJ",
  "key16": "21FXEvjnUcDG1q73hSEFeA54JtTecvEqZ59csSGyBrxS6UAjTfj5R1qgD1dQBhbrWTqT4KgwvWbpt6PfDvRBsDv6",
  "key17": "gxRUTj4Rw64A8ZfpBdqHTtU31CepqdXqrsh1wSFTJxx8fZ2MAkkGh3fDbZQxYhULkzPsA8VhiKTZ5P799bSA4ph",
  "key18": "4CNrt639uWLxsXGEvpy3h25KXVLYKKa1QgbfPjftjnHyrTM2BArxW9P1qCmva57XThbv1AvwwaBijmJFpA2RnTkq",
  "key19": "2zovxnxq6aXtXJ8Nw4DA2gwcuAz8FLB5KRkGJ39Yb6doUx9j34wAyBAFvisQcLePnpdUDRYoEoFu9zM8KkZVxKi4",
  "key20": "5iRynuav8km8EmuDCB9Gtjab1gsw3gZUWhrLBMvu2qMq1kWob6qkhUzg4T4U5HbpxnqEbsmx1nggxcDGaVHFzcqN",
  "key21": "5eDsLm7E7XeqeXsWaKCTUzRoz3w12KuNPEvwkb1kBBjvoXC7fTX6dgeyx6SA31txJzRNteP42vu3PjxALGgqQgwE",
  "key22": "Ar58EXQK4SmEkV5YTMYRJDDwzeUzyzyCxEKpVM9wfsSzsLWzokrpgwxrE2E72hRsGpXvQWJEq6i5eHtvTaJjXtB",
  "key23": "63XSvScnmKDgN9dKCTkZ8N7QsRNtySi9Gg3hi3ThrhsdPv4o4QcT4Wp2hFeahEX2d8dDubKXjSUCcV3He6jRGpPb",
  "key24": "2Jo4uAeUYjuWyXRFuhgCriS5sE9vBhFEZKPPJJGYnWaKFMRTvGBuuLF49xA8L3FGYKyvKJjh2EmakKNEit9eGAWg",
  "key25": "PysqxkpXKBSniRgAtYYjiF9oyMA2HWYyDWgcDBJi38sMh7RG9HvfYY3kNeZEFS5ygVrktgZdeXtrTDHhhpQ6shq",
  "key26": "2Km5H8kQsVEJUd4qfoA8zCtNMeBiH6U2b63m9x42UgJCA99azBuC2TgkEFgzuhhULBeXKtYVsfqqzjoS1eioyJYP",
  "key27": "5nu2xK1ietW1baXLq1n6pGwHmk9Ny8nyAjGMcpfuCwicyceX5qPuWQfSBnb8PJ7Xo1o5dE8BPpxhjdDp5ECk8Tw7",
  "key28": "2AfbTGaZsvqwaQZLwDbrj7gJVuMHRakuVMRfHWHaMA9Cyq1Y1x9rytZmXDxEVHmJjuBmZ5PtZTtAkS17o9XBLYNa",
  "key29": "3Xedy9EfL9ouuU8KxNq8UPvDUT32aJcwPzrofi4GkPmbo9b1R9yP2d2yigTnH1R1d2iihMhhT4SdRg5byNESXZVh",
  "key30": "2eHxZnzK2euoiXftwcqBABSDsuXjgmNqpgWKmDoiMvUbS33tdHTwmixaqNvFsM3BwqN118VFMzusgAUH1ftp2NMw",
  "key31": "4D1WqYqH4wFig3tmMWz18i4zBUXRMiCkspaudjh46vbVNggteArfo5gKBcPJYE5UHZ4ZqKY3o4jW3xWZ6bv9aHBx"
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
