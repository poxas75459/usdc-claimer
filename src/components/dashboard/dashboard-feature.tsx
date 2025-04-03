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
    "D8nPUUHKFGcoxhdRZWF7xf7VYT1YjiTjKB7Y4oQsgBDUxDBxvKZrRGEG4vv5kgBSVYgAVHhETojScU1oMyo9YJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4bdJEqaX8JCRvYAbrHmBctL5YH8HBPEM8hqDvtYwsuDFzWuDCxioPJ4kjuSWtX8bfahGBKZE4N9UQjcnFwji9z",
  "key1": "2C8LFPreiQ3U1b5wxBcVx2BjYetsMoHParbqA42ee9X5BYWA37jVDhNcAwP2CpZSEHLeNuvhKGMcedTYtmK31BAv",
  "key2": "43kFFq6h2F6KpvwkoSjViu5dZuTveNUgrBf4pjvMFvJeQvhSo7CfueYEeoirqfwN3KF2QpKyzQfkVM46iDCz6vEu",
  "key3": "4u3VWJei4kg7j5A78sbvqLiwqzsp42QoZqSTVsMQqxU24ypk8YWUhFndW83kPPehtNEvu4DKkMcNfWw26tYCUmr4",
  "key4": "26gJ4PfZg8ZZ9iGwNaYeGyvLrcewUsn3qCnbHDa4ZKUmQC8jjgrfbGqbZ4Xq4rwYuHeVSkTK8th1rFwDyCVEuc6e",
  "key5": "gAm7fbn6Y1MJrPXXfcfpmJv9JJmRPAU9Cwj8NKPtv7sxxZt72kQmS1CCqDnLuzYLXpqH45V1yrVGMuRp4E17WBQ",
  "key6": "SSgHwBvSju4m6WorcJUNSq1t32474kUHKKn1M1EyLseMFoZZ99kykB7moeZ2tou557XV2GpkEnQ9nXeqyPcYgF7",
  "key7": "3NtqrcypoexTGspDfPPeiYtmYbBAX2atxF5zvSmFKGKH13rtPdtdJ95PthmMrJjijB673iYuhGg2rY69DTZG7vzK",
  "key8": "4prWE1g7KbzJnmUmiPAxkM1VSmUHwYdJzS71Ayp9rDef8p2EZ7PVgw62TiDMpaCtX5EpChv8re6spKJo43JHV8fU",
  "key9": "65aVrhPViC8cHBbC5WW5GtGksjacrcNxwFLqXK4uSRcyKRokR4jf68ubNyZircidubH2vvACyaQnLuKnPPY8stap",
  "key10": "33RUkRHw5dBAQg64AyyXFH6iEZPWwuJhG9cH8SbnG8xRogErtB95fke6VtnvVgLP1H1QbH7fJnS6h8pahJgLxXS7",
  "key11": "5Tp4HUGdWKaTs8eGTEdqYystZauaMysywuyZA9UBy1fzbZTjhtHaFFZ9Y47oSJvzY2Hp2VxzenQoWDaELpbYyx8M",
  "key12": "2fQW5bXMuF9TEWoRjPzWGCj49b7gMrnx6YJmF7KuV3GTn8oYtapdbZu61sXkQtL4yk1Vu8Z9VmgsBWJwpuJUHYkY",
  "key13": "2Amwf6SrD7Le8HJqCzTMwWyEJfPHtA1M5w61SknknAwRi8UQs7VS73bimnCRnqPoeDn85FHcjPHQVMeJWiHu8HBQ",
  "key14": "67GeH9nNACpXtESeLKvV7sthcyTCw3TdFZAGc1Nh7sraHy7ctRpMrBUTVUcjqkUTAwtcaApJGp8VprWcBPqh4zYD",
  "key15": "37HnhxawnxafUeyJ6kEspjdaYAEEckd1DGT7ooL2sFdah8xGRPrfpCP8qvQQ6A2UAE2yEsHUay27X8wQSqouKDHt",
  "key16": "4CnwQDDbFThSBimd5mBwmW9rUwEHUYFzne1myD2aEoMJ5qEqf4i7RLS52Z9UmFxEYcKaZHx5LiNaU9ri2S5fTc4P",
  "key17": "oMHNE8prmth6h3K19uMuw5823T8WuhL3fxTEcLmcLphzsmyx1hEbHCgikN5h3rZYKGKtRTx3xutYgF2isWgfW2m",
  "key18": "5ZgLXYxdyQMB1t9vMnSceRhBhjoz4yJuMaePnXmGar4tB5M2iLUSXPNk8pWCrC2bJFwpcqjT95KWZUJsivLZ6u8",
  "key19": "Ujv26c9yYjV2pF2XqERGfETC4hwrwE7fg5bhhPjpJzjBAdhqjkpi6gKGaDSiLLpzNkGoupxuQR9nvcDvdo1Qcjy",
  "key20": "YZQpy5VhvArxJRxBiuC2YyVoJinV8NM7SqhyboLoFNztAeeK7JQXHbjntUXLnHTe9DwneoehfvJDGn6KLXeK8a2",
  "key21": "4qCHFukcYZQwQmerDhuCW7M3NXe1DzCiKFmanC8qbcwuQmuBJNFHWHDCNgfFxpKXFHpqGzyoiytU2AsPma3jyUa4",
  "key22": "2ArGKuN7QTryfHfNCA4YLL3zXUrQhPupUDSsREahuoHJPCUuuQ1UYkPvAJvP33uhQLEyuAb1Dgv9EUVT2NfhubqR",
  "key23": "TG7NqNCxn7HNBNuYtqXEfo1d2kWRFbzJQowGkiYh2zxHi4UqRdrSPXe4BDeLFHhN651avkRhBo86wirGG833cyD",
  "key24": "4ryG83tWVutnVZLHRxL15fjcg2DMdCByvyRBnfrEjB1DhzQR5v1a33qXj7x6M5uFwaAJ6DWzX8C4EGGEBiWkmqVh",
  "key25": "5CtzJJA8SeGsdM13pzJ9Qe6SkfLejRtDpZHCV8kvHwyeRJ3Q87Wpu8xPjPNF9FcNxYyaep7Xjpj3knWNVaDHW78P",
  "key26": "2u5LcvrZ7jD53Wna8wLN2ZDxiPK74747Zy9srhSegxyysvx3MAhWM1jhqNkyp9wVFqzs43tRLHAEfLu3VKyxW5yE",
  "key27": "4FYEyKnrrGDKis2hc6Z8ZrYDzSFSfJtjLPeYKVsAy6sbS7FL3MZdBwMSVHTZgebG162YZs8ckEDW7bw5t4cuqu5L",
  "key28": "ftSHzP6WnmhMYuYVGSJu3gCUsziL7NVsFFk1QbWi3oKmUFLhFhEodtSoG7Dvz56jjXHxizgL48HAMVN7jRvGnnj",
  "key29": "3zQUtXhbF6HxMBC6y3ytjANgj63cTZkyovUCEabD8xsucxKaWn5pCMb2DCmocuWKBmVuswnqT9m3StQ8LJvK9Nx2",
  "key30": "457pcu9zM38Tc6rrxkfFU1yH6NeXKNCsDH7Za18jRzSvBpHexTXFB3QxjwJRE63i4Nezg8Jq8HBuabaZ3HGP5PnS",
  "key31": "659c9ZmBARnGURFPcXfWsL2DRFtvDKamzDXPWrSEp5f2ciUxb8L5w3mBHbVV7TNeTiEm27PYEUoCJM5uSZPz4z8S",
  "key32": "7vSGt9rZLufMpuajzby9uYiEYKByXeewDQpp5SjVaSH7m4nYVxCvyYNDwLaJqLgRnhGkrhRct3scMoFU9bVcD44",
  "key33": "4sSgsBfJ7qUvF2cRNtDKQkskHyBvwmCJoSAXUbPJQCxZZMDiqRjAn5UyrrcUYodKNWzFd5b8jzo9HpZcFi8rTyDh",
  "key34": "33m3Nvq6EmGiNAa25cYJqJc8tbcRkoF69UuRb9AmKHodiFrLXkvrjWv93rKqdDDdfmW7V6oGos8aar3r8vTLR3Nn",
  "key35": "2LL7yEgpq6CwsXgzLj9fziwBMifJC5d3hrUC3zqgmtXuZJHxSRWpcNuSZ3xbtKMBgeJTmbcEyc5oKNYahh7UB8v",
  "key36": "3qMjK5ZrettHeTpgqYoZC8f5PaRr8wcAf4qMvLVB9KyQqduSJTtAHsvRmQfyxgeRkP8vk7H9WE6SH174hdbFEEon",
  "key37": "35jQpak8wuffkzkUvtUbrAewfHEzCJe6RWMzsArYFSYWYwGJtmTM1wiAeK5fkjQtfCwPgp7dAgudvXbAyriPXndK",
  "key38": "4idFTmhzG3R7G6LqoKjYTphoHrdmCe7phFsKqd9B3Ahyag438uBm1J2gE68igozzZ4updDEVY1KQPd5vgHihcEn9",
  "key39": "5kUrzKBeUiV7wetU6xEUR6VkykFmE4MVrDAMPYQrLo4Mz5PeDQb1yp4NMnPvxvuk8f1mdojDb4HjfwuqVeQM5TKc",
  "key40": "5vFW9on9Ta7cJtUsQ4izeYa1YDR3rwqRdnyU4Pq8C8QbpBAbx1s6mZkrv44KZM4y5Rz3nbFQZVx2wX92kiaMc6n5",
  "key41": "5bR2ofn5QkoNgiMzkGxNiSndxCtxoM6afAAuB6KKuGiU2yxWDQnj9nqYQqzdGH8S8B3NtGGu2gHegzUC8tXaLaot",
  "key42": "2gcuybx1NX2treD3nqpCxHedi8FfqmEsvzxECzu8NRHKa8Ww3iB4YCRdB9EUe1btaSokefN8c8d36r7oSWxXXBot",
  "key43": "5RDXZRjhf5oQkHcL5t7N84C5qEYyxL3wirh9QRscyhaaouHhcELRYU8g9SFakKyGvvf3N2gT8ZBMQD6Y96uVJZou",
  "key44": "43mhAtjTmfMvESJAdUAsERNh6h62cEgoZChJPnDbawu1z6c23dkSuHesBfkJfmbcqzBxDQesAqmCTNDoPfKBNxEn",
  "key45": "43ocmvSUjBwfhZB9tMrNsiunspAoXGVjT9yyekELtq1ZBvrbY7n8EKaubdpDzw9uSfesMrwAinmtPEhrKAJ9Q2Ns",
  "key46": "nZMcmnjMYR612NHKbaaVXTKghi5FCxu95BtwcXLEiUY6uaS5gp3cYibLGtMZNu3KFPFHCCMxqccbexkCpCjDLzs",
  "key47": "5fEom8oK2i5MvmogKVZy2tt3A6SzXaMgonyiCjfALRbVpu1uDfTVNhrqNUxtnkCdGDEEabyGShe7QRizBx9Z6dvZ"
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
