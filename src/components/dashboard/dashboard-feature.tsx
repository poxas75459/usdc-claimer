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
    "2TC6bHfppap26yBVvSc2ewytYxbp9oRBGzabL6ZE7JeksQ2d9ye3L9QZ5VYRN3sjAUMWVKiqLN9nHkRqTeGU7HLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Wbd3BBraLymUiDuXpNuziKM8KgiKTwjpdGCeabAe4kQ3K3gig4T6TUGP6JEvHNqeGFAqgWp8hLoYnq1NLSQdex",
  "key1": "PtkZV2fhH8jZK36iJEVNPSBpidSxgXM8qus2xdQ1aDguurBQidnvrHSdTENqMzP5TcZYkGfjjT16PeQa3t1ov33",
  "key2": "4Jdv4yzh97MJbtRpSnWSjNankHepKewRUcZc28KLyDzzhMryGr7AnodhJzSfVeh69K1ePFoj51jpCthJDzvdN7UP",
  "key3": "hE1dh7MiFFVWTzsJwdcm6T6k4eNeyw2Vhr2J2wusVoWx1JsKUkqXHwTrAExMpTnVenLpAKPFFYYV1jN8xVG4hEy",
  "key4": "45i62uLQQhBye7UY78TURSXX5nLafV1PNnwTKyrNPP8Gz5WkijgyfKpmVQpbUC5RJJZUnJ7nor7NovSoMyUeajtw",
  "key5": "5iBFh13M4S5prk7ab7hR4wisek7775sWoebT3awnjef3vS9KqLQoMz2XVuJgdV1jeY5EDWpvgSG524fQuHjuqzbd",
  "key6": "4xiBMPLLGj7fpX8xxE4CZXrEUe7dPRn1kUSdUwV1hBkFQPS8nPc1p7vRQo58eauCQwxaZAxW3PR79H6qe6ypsWvU",
  "key7": "3CZF1XybEPq7EjD2V7ngpqz8zS1rcHH3ugxv4ZfYSr2gW1uPaapjCEZfzfeMLUfnGgDogqXtHcnuXKBEGB49H5zy",
  "key8": "47MoS6XNVsexudPfVbws4bdDEyatK8R9uuC7k4tY9Tq2iTVnSN222v988h8qTPvqgkbiyh3C8VxeSmD3MwaJ8bpW",
  "key9": "2kTzWccZ9KebjX29dkt8nbWKxXsAvuR7MhFV3D6TvwSQLpU9rmk6u8UTaSTjqQrTXPFYbcZkFGxX4jEHFeJBRvTu",
  "key10": "34rnrLAX6KLan41TRKgCw4TfHchgy2gsNLeoBaQ3ENLeHbHHiEoXkiEARkHWUanxj29quMNRny3GPCE4S4n2dRAC",
  "key11": "5pr8qforaEMyCYj5kbZ2pv8TFZW9Fv4jnH8NnrK4vLvQWSZvySwTPjmdmEWhQXqUvC5iJAS3XeJLhykWjnDyfbgv",
  "key12": "3DSAsne5mkMEvaEVFpeSxHybzF58iCW18jDEZdgKEcSAS1gUDBqQhitVy6gk4PUZrrzqRrQSYbZhvr8WmgT49wk9",
  "key13": "hiTiZvWuh4efgDY8miLRqpab1fLrJ1WGGBPxVp5UDDKh2BN7s3ZSAfTCmp3gXxn7TbPMex5jnMdFp9v5vS2BoXA",
  "key14": "31RxCGsutc53o9MU8QyrhRi6PuVT7MGGD9n9oQwYe1fgcyXmzZXpeQpYdCWDjZf5XQD9yCeBHyA8jrKJ53Eje2Zf",
  "key15": "JRaVJiEMApQ61yBsbqrcQGNJBumamXMDjiv2zQ2Qg1S8DTzT98sqPFFmR2bmxoBV47omxuGpAKhXzHVRr3Snvsg",
  "key16": "VJ6bpzGTAt7YQNcDYkQdvyJR4UDuGDKb4buJTQz1FRLpYZeufYkZab5Dqh1NxK7GnJCJhQLuk862VnDWNLSmXEz",
  "key17": "3f4nWE5iqNSaGLTJGbYYXagvHuxVp7EEhpskR2TGftbEG68dkg4hkWqTbRCuXGwaCWm89WpF6AautxH3GFt7UqRi",
  "key18": "3Svi2n72X39v6uihQTTXsUohoAX61dBAY5piMYEUzJkRF9jmtVbYxuc3uDnHFWzu6gtcA4BfWC12CKJ71e1usVzx",
  "key19": "361vp9bcXH7Aqb9LUxKKkvjXywzQs44Gx7MZBuDAstU3guPSTW3MJJQw9cPj9oqxV1jDTVSCRJKqnY1JYirE3Gqr",
  "key20": "54qWA6pcAkHm2c9gLVaNc4kfeVpnSZywPa8HGsY4WibMGFsDErVGHWf7o4CuwNdH5tvur51v9UCeTcmxLKdpd3BN",
  "key21": "5LKEmHbzW42JrgNUPVZ2PkF9DKG5dpEDLyV4CdPwb3gEeynvD3M6CBkkEnUUVC5T7XVjHfkGXFvhucjBh6NeCS88",
  "key22": "3gT9b7QYL86fkrP3Yf17GUUaJXng1qZpkg4RsZ8W5pbRsdkwhH2YYeypW3o7cUMSziPptC91ocDgAaSAytoam5J7",
  "key23": "jrHxsBLWh8TtzRDVKPxL2qDfskGFQoi9Hwasnn9H1StdCHoDxh4jUFrF27SrgEUenZKagdQVTJZZPBauPL9CyPC",
  "key24": "2qFUqsJAWbP1ZryMBoTDrQzWWkwgEEcijhuqiRd2fx1PPLPHxzWGKdqpZjfUEhJdUejpe2HAXoNZsiAJUAr5sQsh",
  "key25": "5RaZmez2Tch6o8vVZQ6w9XDvB66QQBrQGPbm5NfgaqKFpHqLYiUSFm6EY4g7z1QPo4UTRAjUySWnXiZRLuKhj4zm",
  "key26": "8YQTLgkV3yXixGqAM2vN87pv33jdYbj1M3Uxx7un1dArrBSeaLywFU3C9TPpNGLqkwncaMFeNk9GmGLYzMMwkjc",
  "key27": "4JjXuEXWsrMPSWsw1DPavRNe6u7Zhr3gEhiSExn8K6fvbXHcVTNacjGp5tNNBsmQ72gKQ69st4LYRDtSdrGqNUyA",
  "key28": "4cRk2UaEbCryTqC7MgFFLMvYupdgs74XoNa46ddqe4MfJaEG4pfTQQxJKKVioxrHvbeqmmN28HcqNJTjEsVc5wie",
  "key29": "58JEbcegxWSiRqchJ1f6L4TYH1sHTGVAebs77DXwB5Fr3ZKVb76DHkUGwCW7zVRrHd4dDMPbPq5cwj54g1WTSYMT",
  "key30": "3wuZ2gJRbkYAdW5zYMhTbL7JSuCTGCVVh2Et62T7X4v8WBSSrxymQoYqyb5JczyvSrEa5rAdLuWTCCQj1PHm4zb2",
  "key31": "7MAxNeLuCLYk5kPVyGy8gxj4Gr4hJ3Dma4bz5jjnU4Vfs1RtV6sQQ5krh7QTS3QPBdz9YemAMP7r1fWZdwPrLMc",
  "key32": "5x6N4GohNoJbUifW6C1GvHVgvMHjqKEUYmNTopzaUzvKhrLQ9Pi1ybj2XDDHuK6KZDsdik3uwuXQsFHivDaD4hmn",
  "key33": "3QUBjqWbdmYLTsgvnCkMR8aRVMnnHT1TDsCQtg7UTVQFr4xEjoPvRdsiLH7HxLLuKjY9LnbWisUuEfJHBmyeAXTz",
  "key34": "LUAqdF45AJCxoVCPsd6xNCdfCE79i777Q9jFKU6ic9V7gePARhtB4hN5MR7pnFZUSYd4e8CxzNQrtFSSguntfNj",
  "key35": "4VQAD51ELT6AzMyHdjjf1k4Uu4ayS8W7e4FQgn4hUGtek3gw95Hzvwb1UedP7nZj3AQW5SNQc88bnES38mem35Di",
  "key36": "33xe1xA42qKeJ14bN6rV9h4yr7qYdxkxXGp6kd9jCJwuCCphhsjkudQVQhqEaYSkexnApBDaLCSMxPLPBTJ7zuuM",
  "key37": "27gGjVz8XicokLRMazxzBXQJkZGwwZKioEeUC4JkjuSfV4w3x7sbLT8hMqkYWppGTdwPY1E6sPvLS5NkXqVbq1v1",
  "key38": "5ak5rhg5PxuakQ3y6Yjrj7cuWqZVbRGZfZZFrTCm7rbfjU2DYvrg6dkaN4HStRgi1puuBhBGS7DTyQ3aDggPVKn8",
  "key39": "3vYkZxytcxDjmsVzVfPf2QwfVLEcNRdTddxsGBr1WCCYkAnHSz2ShMiqGcsjoDGEHeWWAA3mCXVxbucD8B2HyPSj",
  "key40": "Qs9BPd4ikuavx8J5oernCg7EQn8FLTcYPk5h7nHM4MbYBuMakAw66BwPxbw1bNSjtkmRRDrukMRz9sQAECUZYLJ"
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
