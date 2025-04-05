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
    "5an7bhTeKwpf2Lcnoz53DzKL4LHCSM3jWRrEvvRixrDLgxb3jTWnt2d8QwVNiX22Rr7PVEoFLSxCKskmkhy3gFS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gLLu5frw4zZdKaew7QWuQguXUP8bPSB1Czu6XV2qXx6A7FEibqVbNJx1g57YKc4YShTtnHRbidsn5eGJDr3Hzst",
  "key1": "2o7W75rVTTEdRMv6upgVDhEysfTMEGFcdWLgNKQQdoK77yxCj5nMMSoZpawrjUYZLaPsy73DTgrQtBe3hJmELfYX",
  "key2": "3S4YwNrtZDU6ViLpVALs88HwkqysHperVd9vnSETVhUjxHPvWvkUsnX9ZxqnTBc3SHw41ZpDdT1X2XpuUS22xnk9",
  "key3": "5WMkgsmKBD3swV3ujTjhJFpbEB31SUs4x9GQRUv8bgS2MCcUZKKNaBxHwkfNtUJd1Qh3ppyQuxaEEhsgzT3MAnsh",
  "key4": "2JzQbhjJUrBD76wf7z5C1Xc8tYhDDqS5UyCqRQMsn2PDCbWcgYuKUBESxaJSKLzp62aWVDA8TaeZNzkDXPr8oSKy",
  "key5": "5tSB41vUYnYjXpbmq7kLyGdEg3tUUhmMNVi5aNo2Bqb1zNkw1teBGQRks6axp9HmNTL3MuyDzPcFZCahqvhmiNiv",
  "key6": "MWuYK7ttGLK3r5M8efy5Qu6NHF3G3zmbQiCd5wSS97DvAAsaWxZgKh1x61iDiv8fSTt6L88ZHu3DyFURYCPSVY9",
  "key7": "4gpvZsQuiHvEWVpEszZDdynVRPitXmz2Y9EYX22inEuN4oKEQTz9FQa3VTiJgEJ1NeP7QncuTkBQeGtZ17mnqtez",
  "key8": "4UnToHioD2DH7KxatuKtekw9zkMtXCztB5Y9eiiJGLgUaCYma5w8vgQ5Dbh8Mg1bWh1mRzqnAuk4ZbsGkPDuWeoC",
  "key9": "42GuYB7DsYkmrGdaNCeodyUr54vhLKU13P8EiaEp5rXpj99rvKHdvhJCPtwPefAE4wZcPcgkRhBdrG36djWEWRWt",
  "key10": "iyedx82STM9yxPCjWyK9wDaXdt89eQory77YzT5hSxNskTecHbPVN4skJQd1GFnPJ9u83DgHAZeJvtVwiDVA3od",
  "key11": "2tBLPa5grqUQjPCS7sHWQzQPjCMCs2nAoqD57HzKVresWsGUpD3UStMVW1hYJKPLxwiVxU2TzDKraau8n5UpGBzu",
  "key12": "3cb6wiwct5F3cBxCxqCMrYJqxvRw79W8rPQmzn3wY68A7iLKzRU7MoCcHUkjRu13VsdJTuTrD9h2R9qDC3Z2nSES",
  "key13": "4tcLFyVJ617ZdwxnLAHuK4zs1QMBZDcUXBBHHKWGi3cBAkXXTPRTr6cDpCh25daAgm1pcugDfWjPGFzVUHupNc2f",
  "key14": "4yQdW1VtpraJJo1XyLTrx7wXwA6KV81szSyevQfjQSbX92RaT4uacDEhCeMfZckebF5shLD3Ubyg6yCXL2tixvfb",
  "key15": "58ysgkvp9BwxeXUV4i3ZL573RpgywSnd5TunW1ADbuwFrPQnEF4sfUh8WsVexk9W863WFuxG8R695YCwSyAwRMij",
  "key16": "5eYfJvYQfYLsL6F4WSBdXypTdks2re19fnbtsfKGredwo7xjqRiAcYbVqNXSiUbYmEW85TPUwpq5meycwU3c5oCm",
  "key17": "4VxnoihUN3YJfFH6GP7991LRyMYg9CNe9vdsegHhThuxQqqEMq8r7dvcwKAR8GLefFiHymoUJAQPi3shWsoFL6jG",
  "key18": "YzYwzSexkPFpSPeAb8gEGhaUjvh7YNrdcvvVCX4TsYDsGzz6xqCCA78DDwVqqywe2tLqTU7H3w9YyQnuYdo3U9d",
  "key19": "45ZpaoiNwwdQWgKi3cVYH2BBfC1Shop9wNXXENZXZmufhrYdutgSmX5XVnjjD1yvzkjovSwqw3nn9y8Zmq1PEanC",
  "key20": "31aod3ufA1jESoftd84yLWcq3gatQsQjjGDmaCHPURCkcXokZx98hMXzruta4rNWiHa7j9XFSD5tEiTavbBEoA11",
  "key21": "3pg5TSP5XjjCSdPdtHxE2YiKLdaYjaTghGw4BmFEt4nfke9wRXdkQjPZJ9DRNUugdAFn2Gdf5Gp6JFbqLyzMPKN8",
  "key22": "2Uou6jgrDDq7ry18NoH4Ray73SVPRGzrKiGK3MXrd5yjE8VbyARYdFViFPyiYQAQ7XVedKkiZHwe9FEUr62pYsRr",
  "key23": "3ZPVu9LtjajSS7yCA44VGymJAmbo3xGcxWyrCj96kVB4UKLUAJezqnZMG8AdNgveFfTxKT1i9k5VJn5oZPYYcMH7",
  "key24": "7HTVi1e2ypwCM4XC4vDyEHARVVQwbJs9tobnkrLxN3LRsXcqykdyVjWrshQGQyjieBL1BKdEg96UobgVELzJFKT",
  "key25": "f6x6xWiMteGZ87WmifCehuX9WKFpjAPE8rRpymHZphopZUqLdGreMyUnxCnb27Zi7L3oH6rSq353iRQK18PiYKN",
  "key26": "BCEdbTjPRmgjPUQQryUMEX9ANauLZqEUC26WJcjETb7iKEDub24RwU31SynbwQR4H4DQ8mN2Bt6Vfj4SGhhmm1D",
  "key27": "2DJCN8bTfEbdeXkNYWTtNMahE89qbu22EMiJU65w9ndxYPra7RoiQTejX1j5d4EN68jNDHQHqfNGtYecgCQbDqHc",
  "key28": "4NXqrTvtapbunL49kXCz6U7QFUy5Ehp6D1EBgXUZA4qrNbHR94PKnYTYaFT1jCmEJ6msARK4fKzVMMT2aq3Syqv8",
  "key29": "2tDbXBCnKtKiuvnZkfVudSkYYTiQum4hfuQHQh5sE1zZ61yHCBaExAPncMqoJMxxZ7S1sohTiQhmHCPPfFYFuskg",
  "key30": "3raYfdAazJsBFw2VqX98AFEhp1eNpReE37kXArHMCL3ATnCYssrDMMdmA6x4cjYZS9eBiQx4SznYKnEpAjAwX2ct",
  "key31": "WwVtAatkL5QvmSMuVyWKZSUtRvjN7Byacp3NZZ7v1eWZVrWbmzqDKBGYgYK9VFuJWSBKJ6TRab3PiHN4tZ6Sv9z",
  "key32": "5HK6qhZ3UJRGgz32urPvmCpchK4KXXMGpKQqhndrwEuL2U1QaP5ZJvZ7RzMY3pbZjo231tk4GWEufRMXno63X1uH",
  "key33": "5eU6eTRntCN6wTFGLmNXU35SbLJcUHbUaoFQe2qMskyMmJRQ611YLrgYP2AjsSmngYMA9qGd2sxLgxfXKwrvWCFS",
  "key34": "5MWRtBSK1PCg9gBWJH32wjrqhy9UPvKU3j61nRVeAd6fg2DoJXMLp5nCb5fRp8G64JL1rvEL8ooEXHzcnLXC1q19",
  "key35": "jFDKTw5chQ2oDUfEERHTLp4kwxsTcsLzEKkLjFAZ9QkFuXpJM5vkk9JizAMZhxM96wnfZ7u2u7HZEWowxzJMvqm",
  "key36": "APhfiRvFdBBrogHiFC4g84zqqDbZoq5aTZhhU8gyi4CCAz3YcKzem2bSX2bHbAiReBYb3LkVxCxzPRuWE9vcZhW",
  "key37": "4dYdryeNq2zX7gor94HFNLMhKqf97fdJ1TNEeGKAENYKY4uTCEdJmqiipxWqydV4UXQm6iT2G3yMHScEbrih7wk5",
  "key38": "4kAJiJbbifCwjW6ZeTPweGkxkyFbpWmfec753nw3UDhRCJX7DSkGddEvHKtmuPsTtWkBsDgLgfbcZQ4HtKtczHsb",
  "key39": "4vPgjrPd7gDSbuphrpxsq9JYCe9tvamh7Bu57EqQb5jzoRgxMNUWBrHGGd8vrBr9Pv3oWsgDU4S1ae3WT5cBEtjM",
  "key40": "26URMHZjyJojeSAXwncFzNxgrmVGXGYSTLMua67ZBswdWrZbCCsMggJiFJkGFhr3ko9aeesCW6L8ED9zB6R3nVZn",
  "key41": "ANLjzfxJAyJRYHq7x2iUsDfQwSLRnFDQAj4uyy6EDXEKciSx42zyKqFVWyVGNeYHbRXKwnB6LuhyEUMXdw5jEC9",
  "key42": "2VoSVcYdri1dvDmN15kFAtR1wsAW3E75GREHKSCWnkithLjFPqNTxY6p2t45CMg9mFrNbCqt3bzPynKWf3WvBaWd",
  "key43": "2ozq8zFM916AQkmnqNCH9SrQEmWihPMpSLkSk1C8QnBpJ99V1kbLakTjAfB1fS6VV6EudcbU3wrmaMcmYXn4obRf",
  "key44": "4WVWNzrXBUfNiae12f1ayybCJudHw3ZTxNfuRgqXeFbmCNTscfXydf8qMtd9tiAdueD4dLLYdLiLUE1zA8bCjEqV",
  "key45": "479pVatPhQvMxDKWKyBuX2QC4fBqoRvg9nDdDGWcTfzveqHoKM5YD8FwVFbjgLcDwQx8SmdNneZXLg6uoCvy15Ny"
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
