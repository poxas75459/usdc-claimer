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
    "44TqwooT97ewkWAJL31faE2hh2dnEEb43qkaZHa2RxXPx3RsvJWEULFcKgWfrKzRJN1CunAgLJeYCr8eMvY9FwDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BEi4idzKZgq48p6Cio37Xxd6LZLCugWZZbHKbXijGwhbxpH57JpRvd8udPMSqAAWFbnon1wNqc45o2CvphS3kZ1",
  "key1": "55wMQ7ywBwhUxuPtW31woPCDH1pBYvkVtfU6W3mo8PNzMCqBzHugaenGBsrHME3qKjx8zTBTWe9DAEg5BmehNA83",
  "key2": "62V4Q4fXp4ibBmjd1cnp6G8KguBvpFzG9E4tz93gxUjV8j2tJUxKrpAFyTnLwsMqxYEtHkHV5rKEMWKY8kt6ys7D",
  "key3": "Rh2CSJaVz228et66EVY456enCYT5RUVyNAZHLEu6YGs6BrxNnHwvDWJguwVBL2G2CpVeLyybb7rcbrVM8VanFxY",
  "key4": "3M5JBqRF5gGkR8fp3rLaRX1AfQaKAzmqns7svB5QjexnS6xja9PUVpKkf6ww8ScCesMX8M7vYyhvbZar8aPEbNsC",
  "key5": "2mowP8wEJnD3PVwPoXXbPYrCqRQbYF4t8jVNv1dFKMSY1CgiKNspriCBZhJ9eYcnzGTkknaf4h2cYkKLrJXLuFPh",
  "key6": "sPPie4GRzKP8RLswCiEqL8DfME7JcMted9A6EFV1RRc2YcJNdVSqE6TkHuDPQrEKFxknayVTbcarLHG5Lr6bNfK",
  "key7": "43Ue4kcKvDQDQRFsUmVcA8zKfwH5DDGkN6wXaX2oaXNrzeavaWfULiwHeinkCLeC3WsSwndWzPTfMNjPxoNo3GQa",
  "key8": "2aS99W3qTnEwQ5dEN3DXPvExzKHHhhYhPmHJAfG5yWfyLxaoujsc1psEgpMUxYBG6a8sHLVv9aaoYf3Tt5Sq2rNX",
  "key9": "4BBBUEwnbx1WHT4RqdM4uQJMAgzep7s4oHz9dDNqxqHRX6FtPXQdytcPNJX5RNKTT22w4KbZwbPXjs8wUJw354pK",
  "key10": "37YyRn1r8D2ytc9GYxW3xKQmRFt52Fnv8YbWiCuZr1S3oGkBMDPZysmeLQU4nzDHoceSTrz3xrZ3qS6BqetLBrCY",
  "key11": "3coajue4D3TUkReURXtNfoGDisMpy37V8m898rp9ZZxsRk1yYxC3cV3kG2rufJfExpazPzLt6Q85NJr4keU73E1x",
  "key12": "8bjrn4HE2PgD1ixXSf79juSdUYCdhV5AP4MiKJdHqLM7kvh1Mt5nvJpH8d4ZDpVTqVmSpWgTexnxZjj3MdvGfqN",
  "key13": "4hCzGihL2bTb8JYSYwjwdktwqh7aPN558Hfb1rDo3Tcf8KYk1P8gV11s5Cn52VSccSpvzKQonAhiZTzKPsTxg8Rx",
  "key14": "25p1kPmhGzpatyqDZbL4kCvrziurRbRk8Bdfvut4gpAk78ft3KrvEizcEeUkRtwv65Mh8stx49QY4FjyMoAxFT6E",
  "key15": "2WTi3SCUXDs6GwRog8uizA2eaiKxQMbwoE74BsoXpC5FztKLJwWJtXa6psyJ1u4RnXxeVyWpztJXN1EYozL5erg8",
  "key16": "4Yu9PCQLhmssXP2hK6zP6dSZzGCdCNJFZD3YjqYs653N4C2CoTi3K4vK8j3z7cD6jkBfir6rdbuGuLxjgdDktsBC",
  "key17": "4H28DCndk1gGH2c38ynvFsqqT3wxQz3e2g328cjfWyCQjKt8srXCArMw4CpBfB9dywueKwQcdoAtQdGMG5TNyB7R",
  "key18": "nicRQjm4QT9A6nyudZvbQPAvMiN5PfzeJSi5E6Hnma4Gfk5HPRamC9CJRB1E6Cyk7tgv6rbry5yynyAXowuth4N",
  "key19": "3a211f2AFENbnw8BMNvG84Dft76Fbu5uBLJ7hhdwv6fFFd4zYv15WmjfFpo2iDpyYggoj83Zzp8GSgaubaJbSDqs",
  "key20": "wzbZ9ib92DUt94H85m3Uk2ghRfJwwkfYUuQLzrwmY4RPZbbzewabjPh8F2V3VTXBuqmLo9imDnmzxu7hdyqisRu",
  "key21": "52gjpgHXKM4XrvNiRMH8T8YiACaPnHFT8zLxbf3jNKW4SCQJPSWP2MDE99r3qrLrBsjmjzeyZ9PyAAG77kiZMaoM",
  "key22": "2Nb5hcWrZJAQyzJZEZ1NEAapsD6yVdWmKmrnDM2aBb3zycGtU2js1S3NoudJ8DyJ3fvby7kna58pBfCgKzR3awCH",
  "key23": "54f5DCw4tRo6PpnTiN87JLdCNy3YyQc5QfMiHWUMaK6kxDHb2ffJEQw7xDdu4fo9MhK4k7xQCV3PqNdFM2on1UiT",
  "key24": "5YuBnX8SLSS1KDwX5Bj9A1smwoXfA2Lh718xS5YxSKtT5HJr2T854x1zqH2u6Mgod5WGByR1r1CDFJdXj2oH2Uuq",
  "key25": "5Y5sqTny9hLYD9ndELL6DUZHBLmbiXdzn33mh7AVZ2F7GEjRrYUzbBPD2emsctA6RsFof568Qa5oJzmGf6SpYZek",
  "key26": "5gvi6wVWtX2c1NfzpwLV2HEbBUJVShxGAz1SycDYjzh8gUW84z1rBfXHhue4EJRdYirRyryuWh8PwD953zbqLqFo",
  "key27": "3849tw2etBogFrzguQRxZM7BRngKrkzkkUGvvpwSzpmtmQQXqxV58xzXhG7zZ5vcadWNuwKrifNGmrLSaEqJQyxh",
  "key28": "5uTaHNnb2h3EU1Mt2sJEYVEw5AWm65u4yzzMnaZrM1y7DLKXouqJ2Mwdx1xzQdLg4K88nmZJBE16JXZyddRx26uk"
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
