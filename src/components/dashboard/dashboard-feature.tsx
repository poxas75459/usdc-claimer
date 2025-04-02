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
    "4CrxKNCuYHHpcu7HFY3xhjwvL4PpRUNp1oNzfZ2uDGsx3pq6kJBSci7rrcV7MxSBKu2JztrNJFNkcDJVfc4YmSVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJYvdxLmEHGwAFepU5bmb2tfreEmxjMpqo13JH5sYwEHtsYNhZuvi4CYvgrd4JAK1ve3YVf8Fkp4iRjyQMyNtGm",
  "key1": "3gxnwwg3QF2xt45TPAbSTV71V51YL2XPzVQGeM8Ka3HDEXosXHfaUPXKsgfQGAoLkLSq7ct7eLUjHhMHFX7xPezj",
  "key2": "35THNwKhPQbHyLPZd1xpoLB2tvMmqtMMx7pJ9tCNfAXGX1rkw1MuY6ABSiRCXqJ1YfswVUNxVuUbWnbenMpU4gwm",
  "key3": "3tBtduyxBCw6URyYApKR67QuhTx5NBP9Z9NtNjQpmgU88YmgHGMkWb4imi1SnmwkXDUM3qybpaVePXKwecrma7qH",
  "key4": "6gDpLDnSGDyZiKoQvtXRpk6c6yFFX46GLPPhXyKJvT9XQs5FSjsajwVNR7qsEGmCYPMUWRWobckPD2GL5zZ7ckF",
  "key5": "4SYk6m7GTXhf7fB5mFK81DjaPvAnHutQP9eyoeL9o4FEE4xx7YaKvpAp72SEGe13iLAZVDoUGosDyEMNB5jcQoLV",
  "key6": "5Tv9xSd1ZV18c7Uw8N669xDVqhkm5spRo9BsBKkLt6pRyomsdgZLAo7RHYaZKjaDBqPpsbj2PUBdsGsRocBmdT8z",
  "key7": "4skNJd1yRgSyvBhrtSwYHAL58aF5kzyNMpC4ViJsErvoaaXGtUCSZkghc8ABdUiiUCa6UazzvGt78eVXHKhxPiXV",
  "key8": "2wjXdNAfeRUfQwvuTbe1b2BiKKvkeLarw6W267cZKDkbCRQDCMy6vQhL2bUMNzKFKQDwKjNaH5LHWR3Xpm5QFY94",
  "key9": "4HNQkP1NAFss1z5S4SM7xq7MBUN71x3nqrP95RDqZQ6V45p6PLuCGo2H6VS6k5B7F1P6kjxDenzSgxdPChdfSC3s",
  "key10": "3qFyetfrf2cWgqmZeUisUASGWnuuhu7d5reScqxGRfc2gV7icqvW8i2nGz27qa1hpSfHZ4rmnrMPzyNW6bmdoCsi",
  "key11": "5tMG1CpWbz9NRRTfeN3Lbdh8iMhsrPQhvLQRKuhK2N6QPHMGBZJbfJLG1XcEor21vFhFHw2aDqmPvZGtKDbs2svq",
  "key12": "2SrYPVhuRQiXsjjbh8R6sPUNHy9Qni8tqrNqXFqs2MiM3xvNTodqMxDonuuhFN9VJ6x4dVzg8ozFdYb6AeySNC71",
  "key13": "3hXczWkj4mshqzJqEZxUPX5fBUxDpMSkfi7ynkASXwjzd25FhGq33F91aRRKiUbovQQx1CvNPBMMbS1VzmZCL7z6",
  "key14": "4a6xMVb4YKxUFJsq2quUy5bgz1mRybEUPSGXqgUzSQxJcuJkregcUACDjo4tp13i9ikWNX7SBgZXSEkR6oh4i9hT",
  "key15": "3a1wnP9tNqQR8mz1RYgX5er8B9uyMPe4kTMZ1624XEhru1mRS9wCsD37127DWB54svpdsqNQDCy1U6MAYotWp7kS",
  "key16": "3Jh62LWwczrNG8stai1JbyuAA5kjoGX8fE7r63BX4qPkoocKc8RzRYfhnmQSP4T3d6mHFakAcwQnQy7gxmmQS8UZ",
  "key17": "3sfvPTxZZxTquSKsWPco5CDXRGxj1nxdxZ8Sj48kYN6Em6x1DzDn9Q9SEpvyS3iZYd3NcCC4ryKP4FkVCkz5F5vx",
  "key18": "rHhUFjSPPSYPsSViC8fsvDe6KvrJerDhmTPc7GvXvA9dasdWjza9TX7zAxsXfsfnvgRcUnxAE7iw9vHEnGmzkWm",
  "key19": "3LgaKoUzXDcr74PVThgw2tJ8DVJWrtbWtNYDi1HcGdEhNESYp9a84UjXs2Hx5YkzgsmdgNRwn9L7WSPYQpBTkGKz",
  "key20": "PoS94eLgS6nTXX8wpUMy58wFjRKoxi45HCXBcV4UULjxrQmkk7grRd1rm2YiUhP28Ygsag9dGZ1YZGwMMkoLGT8",
  "key21": "2hpoWgxmoriqu9jsSxwUsmb66mQ5ku1LMX3WrsgdMVtxspuBsrLUPo6VjFPJyxHvxnZrhevET5yjHGjnDBZYabW",
  "key22": "2Bxdsb2yaFiB7h2mjKYHdxfvoPipBAFoi2S8tHvZyDV98DY1g6VV8qZjXfC9KyguT4xCQxjiXT3o8QN3LQStcByS",
  "key23": "5prDSghjHn3HWitdCVPi9wpK2oBwjP4wqe3Xqwv6GUSxa3oSjBFSV41iALezNh8ZL6d9KrCrLbGsJBhGZ92tfQGs",
  "key24": "58xGBTZm3WHuDGkzd7dCaYPb8o7pY7nx5dqvY3X3QS9yt3WYkzktoE1CRxb69LFioWciY65bXhp5m7rWnedjWu3F",
  "key25": "58BBCbHbyR8hDhvDK7U9HsrmyfiomUdRXQVrxkAvAtvHup5GSXvE6XoNnkxGMqi36vE6VrKPfJ25Ro3nQ5CqGzwG",
  "key26": "2ti8zE6pcAhSseaxm3Zyp6WHcQgyV32tj6BPKztFsXJN43Q3ryQv39toVQgdBfS4To7VktwACogdN3ibD15TPXCi",
  "key27": "2K3kjtr6jZzRCbPmPbfn3XMMXBCgBydfcxLTkNiXnKnBSGr3CmYbQjbZ7BfU4GdoBUfq2gXxqztpWoC93BoaoTVy",
  "key28": "5v88NrUSnCC5U2XE3zupinkrthTXxTrLvyBWcaJhayyzSyr1eE9Eftjke28QJiKK8FuGaTeP6X7uc5gaHh6xsgKC",
  "key29": "4CDGKWUUrVFqirJ8wdjyuTXw7rgRUzDsJhKrsgTHbB9WCCLmpF4hdKzXsbWWRFaJ1nvW5rTD2bA6EPmswmbmBipm",
  "key30": "4nDsJMj8c2313wFk5dN7U5eb2fDGWAKVmuaF6DWKZygP1svrW9GX9M3JCmKH4AUgMa9vPKww7XqjZQfxuwGDtdA2",
  "key31": "4aKzqHw3k8kWDJP1fG9zi5b4RRhhb747d7YScgUGk43Co2dGFKyQH8TF6emXkAKs13MjYr635JyQ9w7d8AfmLz4P",
  "key32": "388Kb8xWZmzopaCnvW5mp7PVJ1QoJM99bGQh24tt2LZ1EPxotG9mXPcAkMdYxePNS8V9NuFVe2mZorcdu9zDyidZ",
  "key33": "3qq7PeubKGru1BZTo3WNNHc3eDvw94iqGYJhUBBYXzE6WWp8oUguPC5fUd6TMfnYchqGeQG3jDTd29wAnuRRif1J",
  "key34": "3JHiq8M3S7W5AfG2oBWrTsNv5LH7cw91JGLhGwiJ5KVHgoicJAeciuLFzrFjiAKM4idDLNFrTancKMJzqurJJyLU",
  "key35": "5YTpiARXapSKPsRssHJKTmYTgeiM2qvU9D1eZiVvniWqCCqZJ4AYbGetUrkm51NuafdsvhXD7drNwdtqFdCiYWMT",
  "key36": "2cqwMSJLDRF22edAMmoaW7Z4gBHCJDurE9URpZoXcaqbYnH1mDX8a3u8jm95mz9pKrQMr5ECQbXdeZLW8VBXEv1d",
  "key37": "MK2MwEhnJaCBBTZVhmVQw9KeqRfsL2QTrDzVgNwwkWpkmg1E3NYrrtC2SVA4sZVPWtQALPZZs41an2sXWRa9BMq",
  "key38": "3vg3AujwZZ8MEwvLc9ggBGw6xMNfYFy23Tsn5MgeEAUiN1sM5MetHNTx3HH1k1SCMhCbBRXNDPZjiHUwAsNeukxs",
  "key39": "578VXkComa3Weu9nkZk8iNupxaZGrr3Z3TXDPuv6wW2tFj92i17akysExnDHrtkhwPJPsnJPaoYqAkVSPnG7BHiz",
  "key40": "uuyYFvpgUDxXvH58xuZRqpGg2tX1tiLKrTiBcaw3fhH2wKQYsjJYFNFttF1oL2W16AvYqAo3MDVQp4kQqPrARik",
  "key41": "4pCdp3iLD1zQRfmxKdYP2Xn8QRrTwWB26gkhRkz36Ljn1UPtpdtUQk7XLaAZXyJ9ESJNg9gEcMiKsEWPwNe5UaVQ"
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
