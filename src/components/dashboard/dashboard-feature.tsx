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
    "2Y5PTMsp5ymwEYNFtC3Nrtp17d6pdpk9xSYFjGpp2CmDMp873ZJM68UTHD5R3WeBaUvDw8HZChSB1kJWLAqxFZqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Lwb2s58sUg5h9W75iygMBStt5x4bqzEc3zLfRCzZRPQKmRBuxMt761QD9jH64DNczDy45SkY4dDHHNP1myzABY",
  "key1": "3xVGFdzL3LVRduV5SySAjuGfzyFQkN3dH8hvguSMNhmpLjo2qkXpTPZCmixem5hhTWKRqQdS8UAMQuqMdT3rPcxB",
  "key2": "4cPSUtoLuS3HgQMBDfgfQ1ZFSvaP17zuXjxJjCAWCN9rBttEFt6Jamn6F3WonP1KgCRB5PpTMGJ6YtUGbPduCQdc",
  "key3": "4DSeABmB1uCTdj9MnP9hLoshHMywPnrdRRZos5nWzfZsxd5nicBSe97kuJGdU4sC6JMTYocsSoEXeNumnw8h98mb",
  "key4": "5PnBqqw4KHwrf38taQVdrKFV1RgCtPZ8n2FERQRJ8vJPSqqU2L7wdDguGDCJT93hXtuuh2YJ2mkY9EEhKAhkZADH",
  "key5": "fYPHabuhXMRvP6Ae7LcSqvS9ZnRaa9WuGQBoqUAcWRXT1AHCdC4CS142VXxZ4LCZ5JPXBHuq5zGALXngvvzibEo",
  "key6": "H5KNqRAihoPykUUL8TQXZbGCpjLTekQTEL6wfCKhaSbpJPd5fsFSEQBXoumXpgUD7tK3gqb9ZWvMXJJFcLr2heX",
  "key7": "3QfzubdbVjHfzd2hYGzoZrz6nsVDPvxfQRFh2hwHjjWxuDJFK4x8s8SyVknYywiPKvAKToBgrE7YZgzyS1MxiwqU",
  "key8": "3HAKmTiCUfLfr6gYXr9BgxWfzcBvQttDF7Evc5v9b5J53cLHxZVfSNbZcPhZbshe2cKNqwiH5WszSaBC9NZw1A2b",
  "key9": "4Q7sxyJ61J6N1iE3vQpFUhYsrY9Rp1fWABU6efuWy1zMGJfQEVyZaW7nPiwesRK3pN41NWWmVGaeu9SUB9fFBXNo",
  "key10": "5uKVJcVcXuceKkCbBLuWQcw2iQcciD5gtpVgsd9wFQ5xBnJKDKGmCWZgw1vCu3ysbwjC3V91QQHUD9Pu8RcYBxWb",
  "key11": "2y8PoJoZEq2vVJ3ojJiK9S468jpKKEnYTVV8G6CuV9eCc1v2vSRaXuMjsbpuKGDtG5abTwHL8ckrNGz39XkyUB9d",
  "key12": "39uiTSCgAyoKNFQHFbxpwG723HxdzjQg2qgf9Li8cfDQgcyFTMHaaEMJ8dgydPzk5EqDjrX92uPcPuKdydEz4cCd",
  "key13": "4QkQNV7H9KHLG6hypJ39Q9Wys4JAA6WtLe5eAXDG4GmRnZYDq3tQyVnUHw2sVM5gfcFi2vKVVrdEDUPrjohqrPPt",
  "key14": "2gWrbY2nf27ZwfST4vkpFJL4TFjC7GkskFRFJZbTCf4wmUHNb9L6Mb3GWjdpn5FTdsaP7d9FQwDppPa3dDY7WVvX",
  "key15": "2dFvZRs8Zpku5ZMiriUpG5KxCn7VLZgDJ69zPbNzz9Lw1GapgsPGj5LtAJcTptyDiM5gyavgGGE9G2PxFsgpFNcr",
  "key16": "5cG7GN8y7587sBwHHkDxD8KqxR3QpwjzZf3PjRugeU74Mf4DnFEzihzjPH5gRsRhGXccSEciwt2Wucnk8SH9y7Zh",
  "key17": "3GcPNpoz7gvvHtHubBSfEnEkHJ4LfBiagW1e3Zv6uvJdEWQfaEvN1zMaKUCsbyn1RRb5nujjASkgDAJVwgZHppra",
  "key18": "4g7jWTc2JbkebXByZJvcMaNZTDi5E8e9WJegLh3aXjjBavdzkZ4jyR2XmR6oMtmYgGktHvkRf3ZXGxiDw8iWaQ4e",
  "key19": "5VmWV91yjeAqHRFyEnMgvq7HHaJ3kadfHgEdtn2LrFvgfAU5U9JJGXouc2xVdPyNaWQGFw5v6ww38JnFYN9Dhs71",
  "key20": "YixV2rhT6MmoLYySEXFn6KXyRWwpwESKYrzHpbYomPiiDWn8dBLZgejVaXtigA61bWgV7fvqUAz1YzpGpnaZEAo",
  "key21": "yP5km3KRrfAE5cAifsJzbBUw6TVWAVodqLZi8VqYUQaH55cagzamZayfRRWZfoBK456iA6DbHzpntQsz9gA6Cvg",
  "key22": "3eogY7wu2nj1M734TQuizbUdRJZQvi2bGS2oCXu3YpQuegBECLUfzv9w16ttqQMNs3EgfJoRYLFxEDTe9Ca8Zgpi",
  "key23": "WALbmNTHYE7mecDNKrthQBY2pHosDuLZ42v74p5zddCfjfCGYsDYEDKicAh9DwJYQDbbUD9JVjUyHFxxATuTmkt",
  "key24": "3W6AwGmhG9S9VJbU4Lkh5SnBEpkaSiPNAP64JnQ5WYDWBtdJxrebEPupLLs34AqaBdGscqwXvW1j4DQAt3GFuDkE",
  "key25": "51eND58qfnom13pi9RoBJQhstEzHxoHbSmBMKc1JBnQHpqGPpmbyx5mkAsoN426BKfDAEE9PWHFozY5Dpz7RmYFz",
  "key26": "4BkS3jXG6hGkduMEDcjCf7RibP9Gycz3m29U3QbM6dNpXs4ytqoGguiJnVD11nKSVe7dswmCRu7HYfRpSceuSiou",
  "key27": "2SHJS4id4SuwXbTMwMNy2rX4bAAgs92AhxaQbhAWnWaYPsdBju4YztUSLeiJpD19kqS2yDaHd8bN6ikQoHxcyNvU",
  "key28": "4gWbsznxCHWi2iuGMJa69ySRSYUBcxBGiWx9bdDiq6aa5b52pptmBdVjQgdK5UXGRgEEuQLERCtqpMarMWdnbTRT",
  "key29": "5jN3UCr6QdRTCgNxomL83wvozqXpUxLMn4k4UcdMjSLMMyq7kVkL9gQXCadvwZeiTT2bXeT4WjFWgmf2ueqYb9NX",
  "key30": "5W3hjYyEAJPXusszWvuLFhtahb1yn3dyJ1cF4sSpCeHGRthDw2DvEpXMFK1gtdXy2MAnuByt2bbB3VQVUbtyNL7m",
  "key31": "5UEXNLv75ZBKz2BNxbku9btg5tzLttK9rBiMNbmHwC6ytqyQrp66hmBrbtbG79QxeR3DAz3rQyuCNPaHB1evrtiA",
  "key32": "5FAz4JtmEPYbagEnnvpgLgbZUcCy8zMG6AgMGCajCQ1yGoeEPyfbm8qTvJ1dWFikSe7VCHWG34JWaG4j4suxWDsB",
  "key33": "3u28pw2tA4EHX5m1WXWkifuAf2LDZD6kiEpVxuNrQDXxNBz9EGU6SPa7NwRkEyiVKsgKNySu5AN76vX4Pz91LeLR",
  "key34": "3jT5gXfQSpvjnjWdeXQZCjBNF63Y4mN7VDeQwB8v3wYY7zZDCidSAjfpqFWyT6hr9CcwwHTNoFrvGuV5o1bAXFqR",
  "key35": "2eCHEq4eVdGoKFwAxQFx4JpfLSVhX3LGVpBTe8naf73JjhXiQceUphi55H9BMxnF7EE5tPiC7QhZYCuXuwybpn6s",
  "key36": "4Pe5dHKxFtfKsjprzyzRGftgHXdgj8DabKC3iMV47TXgSqC1vr8a9tPAnkWcRQDk5MDKfnnJyJCeEnXYrjtmX6HU",
  "key37": "5HHoQ3bsvgQ79gWbAUMhUvxhVCjum9HjicYYzDVnVptKyWiHvubvXyuRHiwNpxgxSZsh53j8H7Naa15wTVgibRXo"
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
