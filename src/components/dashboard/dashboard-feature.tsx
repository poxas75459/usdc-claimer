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
    "4BM2Qp27GanE6Ak6NgvEf8Q1hAoTmfm7cQE9P3CFVxACQLrxkYgpcTGv1jimuuQANznZZ8vLAjuu5kb8hxDW47ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oUsBRLApgtLng4zyNtXGrF5SxAAdhmq4tFzi1jumsXUf2cDR3vtWyhVf5pL6hXQxXwfakfndHdiBnU9ExzJrpsc",
  "key1": "5XBy974SCBr2PzgumhekhSyyatuhdAmDpyX55ekBFGBcUXxNZZ2H6zqVgXLq9gVVpjrHAzUZvxaqXnqyQzcB9sy4",
  "key2": "2HqJViGGHsLGoHw52MGGYiu6KTR7PtGpcbFEFeuqkYS8cLEhNLcwoEReXaUdo2NmDsvJ2s3Ah7EhYeB1yCa72dAv",
  "key3": "Cb8nuCdYzC6PGqkMcB1Mf4E2ASFaPYroiANtkZ1iKNX1KCY1JKxcj6oBHz7vqEesS9om91JpHwKQARZmXgCmAbM",
  "key4": "2jemY1tU5A8oTtkDZBZ49ZnfgbLPh9SHGyXiftY5hngxktDt5BReC8d3e7hhQxEtz7GNxU66jRSuUj4ceTWUVmTa",
  "key5": "59m7RiecugktHoHpVo3HsLp6XeHLHwwYrta4HJ3pKruEiGkZ4FMrACBxqRHt3Jx83c7NFySVRVp1Lxk17vXK6VpT",
  "key6": "2i8GuKQNb1U75dH7ZWoB3pCu8Y4GzGmj2UCAKDbKqAorG4VHmPF1REiRh2v1CC5a4EahALhGxg1WzbWEzxskNSha",
  "key7": "3qNVBtAY7jyBuYyxA2gwiacdwt4JaXDieEDGcbE9hNnDDeYrkmsHcdPBgCxtJWafArZv67u4sWwbYzfRf1GVYHHf",
  "key8": "22Bqj1jDVTJ5pyoWKvVBX4pX5DNZVzEkhRH7kk7ghK3mBatcTMbGcwnKiSzhhStakeQvZTf2iK2mFq2jh9HhYaLT",
  "key9": "3M6P5RhQWMiX96RSfYvXh5mrr5xodg7RZkQpbzxiWmbDUMN4wQSVRUsLorwpMbDHZ7HNKpmgeh17GpG4RSEe3vdt",
  "key10": "2eS1oZzFjovUN7VCFmjnW8UyMKhMzCxVE7a48b4DKJGirPHDmLXYfBCj16TnRLvGFC5k5fvMwDCiBUsxp3bMZf8K",
  "key11": "2kV7WoshG9ooXvHhA2DYd7tqk61hez3Tbc3HcYjKHhGeEccoFgyN1cSuVJMLai4qbywZ3mY4hKwMeQMfEFadpYJn",
  "key12": "4aqUViW7gJ1tPzuUbobzJJRX41CXRBWWDsxZanYdA96CypyZGBQrAQiyMcYnDCM4iFMZU8ZT4qB6Vw1Hb2v8fL9J",
  "key13": "4WXZznhgQdqBwffL5P3sfjwD3HN6ErY14dTFyXthWzZZziL6eDdgsNyq1utznaHvwY5WcywadWhAY9WzobNWuD4U",
  "key14": "3skeLjCa5aYCwaTt6ozZoAuEd4MtJHrigDzc4qAQCDgYSmXagwqGJwUVrviyvJQz26fx8tuJLp9YJPLEEJRY9j8F",
  "key15": "5pYj9v3ggqszms3ePcs6PP1ZRdnMZKimDgp8Rup2JGGWtUArFzFaw292Yn6bKpyajcEWPA9qh3hP8iLc8ZV3jw6e",
  "key16": "dcnbiFjKyVGjL52uDU6YwB6SSnkrWjWwQDcwmserBnj16NVd91zytgmyGZGux7fsPYjmcGeyJF6GHacHeQ4xe7M",
  "key17": "36dPrmQq4dg1gDbHRgVh5cbAf65bsjgFj3DhznXbvKiNpkGe1nssq1QAESi5wwWgqMobtwzzt9GYvZyDW3xiXn7W",
  "key18": "3cyv1haUXZqDBxCcNmg6uAksoncD3eihSw2H9z6DSba1LgMCt1cTF27pxj6JkSUSBGVsyoGVZAm9n3kNkG6awxKm",
  "key19": "3M2eMLqa9NTFMnetYtbyr65MyBbXKZMAFtBKgFLYSj4ou5FyrVqDQXSDfaYyji5KHS7gxtjDbgNa5Juc9wHC5RDT",
  "key20": "2nPi4LrceG9d2SSnA86MQX6mJyjV4fjL5L3cnozZL3cRPd6qExU3nzGPPA7q52q4ExbWVpUrz93EW4yv82UKZPKJ",
  "key21": "325kkhpNWwAQ5XcXP5DQKnMjyd2xNvzKAe3WtCuMj6JmErsmvA4eWMa7qH7V9hNCNvWtF812Cna8M3UUdA5uE68V",
  "key22": "4zUgcG6aiCcvZdS2vEfBxjMAGDhvrecqP2CGXkn72XvkBcQf2GhQ2emQbZhSGx3LrH97BLw7B2sthJ4N3LUJDW4v",
  "key23": "669TYFNYNkmv4U9rHkwtEvZcBqycjG3fUpfft3EUWjsunCUQzAvJbGTuT1oWF73vmruKEVN5YrU9tZz9zH1VZs2D",
  "key24": "5fVuvty2LVNgfyNV6hf4L9xCuGcUFNJk8QYPicW3Ew7Y5JQPCWPjDDMR3B84n6XXA2iMeAJ2AD728tHRi4wGp7Vg",
  "key25": "3EBxbeu6XXCLSHGo7DTsni8bqe9HF2rG3xK1XnmxCK7BAKfhqZpo89dkQoaUSei57Xr2RNfxo9LbswAzCcX6W5zg",
  "key26": "4pb7ckZqa7gcUxuGhxbqtfjp2LNi5wK7C4fezDJzobujrcPDC5Eo7FZs5jsHrXCjA5isAQxh1hjxZnDHobwWh8KJ",
  "key27": "5q41ArSzJyE9ADGeNf5U544gyvzG2uAhh4SQ5SNTLmSb77j1Rny7ronH486DRw4YspGZ39Anb6HknKYxZa2YhJwz",
  "key28": "24r1hfYTx3w4PBtjb7GWCdPyCAEwH8svcp4jY2ojoqDWkQdzkceVjjuquogcrinQNF3V3Aj7nvzjF7byNtybLCqP"
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
