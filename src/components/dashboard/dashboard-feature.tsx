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
    "t87BqTxPD9qTk4izVEkfQq9ziVngpmd3nWX1dQ9s5YyLXSAAoM6bdeb685MQjjLxxqSz7Qjwj5cvXADC4NnbAmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dPzwzYhdmPGMZFkvkbcBZ7E7iYqhqdUJBbve6K6mhtWZGaZQVzdwUMr5xyVmKsoPX5rnPukaHdgA9nw3xecGDi",
  "key1": "46wcjLFoRV3UgYZYojW6a7A7FAVAcYVJTZM1r6wbThzbiYhjbtLbDseVAk4b2B9c55Mb2db7pKJZ3Wf9Lw3e6vkf",
  "key2": "PdfrvpuEQe7irCyVhFJXsJ711XZTbS5qMFXG748pNtpp54ZuXkMqyDSRncQUgHE8hC6hZtfrBzsGEXXKFTmdSe8",
  "key3": "27GRcFqYPAmb9UrwBGGsn7ExE2xRixHqLQueJgFR3BfoU8CWTwd34k5LKP45A1atBNYwTzmMd3Tis9d3x8hHMooH",
  "key4": "b4G5h3tCPVBRYvnuAmnYgKDtSmdTmd5jkUYfwLsDk3a7YFVTF8dkEi13ajXkNe1fBcC5y5nBNz6BejiiH95UpLy",
  "key5": "4xftDJfLqMeZBYGiZyQeKJMo791vg2TNp1heFByzERbuAMNvEbr8LBsX3zQfudHwqELhXoPW9niCAW4D3vZBxHVT",
  "key6": "4NRqJGH2M6dXJzV58QLSX2zEkAPHeNyT6qHbn2oqoFvbzfw1tALD6VenKjqt1mrPB9NXwFWazjS4AvnConBLht3e",
  "key7": "2kPFWPyFuRXWWdTgsZsxD8hJtKt26eahkEHrwf7zg9cHdWUwCLVvBZD7fRP5T4EzNhEJf6c3Exr6oy9s1Vop7Rbt",
  "key8": "Uk5sYcftZrAdjrsAQdNPpv1FtfSFWgnyCdBVx5EYEoR9u6BT9uUCjQuriwLn9h71zNpP9QGUcZ9o2ArgDd8d4hk",
  "key9": "56W1u7EfUrjdvjLHgyBwEjK6GziK5P9GfdBJGXxbvkUQ3rdtxK9KpLRo9SmJKYrXBbHiNvw8LYi6rVoqzYknCbvT",
  "key10": "2QHPQRJDX3YRhWu5dHQpLSg3Mer5fZBiNxma4VFpNApoVojLPSGMuv9b3N5hwwr4K6mjRSZ56vy1c1uVgAiXRXGk",
  "key11": "3FFJdBUH3nDDzGre4Vq1Esg3n49w17pounSJMKvh3g6ngkYMviA6o8Ub1KceBgkTNDDea6xwcMN8bSfa5gctnotm",
  "key12": "2Ai745V4issyqcX3G7aQXxCS84VudLvwau1sNvhbS8TgdCbGPp2LoungZCDNQ3XCu6sRiwvnWCSwYVBpMXrG37xW",
  "key13": "5dFpqzKtx1XF8WzvEu1vV3YW5CBGKzPDiRWYtD7cbS84ApcXfxFJv3qXdxJARkagic7En9mvEGMkeJi6AMryGwxZ",
  "key14": "4BMPpqVTh1CsyD8Kos2T46aQNjovNNPkdbyUte47vSrJ8TiSmxE9ctxte8i27qfm9DGnRJ8c1YXDzXuWtBmeg3tr",
  "key15": "5rjZTR13t2UakLxDZAPPKBV61xXpWr9hffZwpQYB38pQYGPYxV4eXCd64ei2rAyf4UgcfeRkiXz45ACWFFPTfCgJ",
  "key16": "2qW1rjPePRwMnrUP9Tv6z6DbtmKaTAM6S5zPu3ZXFnFRMET1xrWSeG9UsVgd9DHCEHQkp2VrrpoPHTVCBK3GVtnz",
  "key17": "2A2i7cCVJ1f6sRADcGt4LostfUFNqMt98112AToZGHEnxGP4veRF4GixBuj9TQeqBB7sUQ93gmXQ85XvXLiNxmto",
  "key18": "5YAnRiEefGEt3QLUFDTBDJTvKFjHEGggrTP6Y5mbrnhf6F9VhZN97hXXvwUuSrqiKMwHoECZ7e7aHDGo9iMYTb4t",
  "key19": "2Ds5KgCv7BN7fexvEmoNmWbggBftXNLQ1ipTsbovSpei6nmmEBZcfs77ikVsM79Lu9poWHQ29Uj4V6PAAGFUwUtm",
  "key20": "4m4qCd5tsWYyoUZjr2Srx5zDMBqji4mKM6Y8xc7RoJysXbnLtRvtR3wsGJCzqg33Ef53QaR3ZLM24timcXbx53eK",
  "key21": "5sHBtUSPRHLZAk7oTAEYqfwzxJDwHNqWmQHgxqxhYyYQHyXH27HcxWf3Cst7NdQXL6Gpup2QjF3DSJ1dLNKBemWs",
  "key22": "vgst16GdDN3ExbBV7BJjnMqzeYBbBYm9CpXAGLXxDhYuJ9vkMxQv24pGoBzSNT6nAMm1RfEdt6sFYeSzmqL66AX",
  "key23": "4kdcPcemiG67ECXojgBAjCCzzJMt6bphYSN5qmA22cbZdrXmDfBAeEagCvP4YhPKMqA6rLMKySF69tsTazwmMGi3",
  "key24": "2g4zB1bneLnPBEe75nd5ZysCKttfFokgRemWC9uh3H7T8JSTXsNTiFjK5PNCrnGRVGNQdUg2hpMLWPTASLBMTShb",
  "key25": "5RDmcugVRwS6wN573yRTnKedrqt7gtoBuHvxX8CD2UZLMC9JcZv137jSzbXvuJwT2FDSD9aQYgm33vJeWKA93n1y",
  "key26": "ioUfWxi2NyUcMRemjtnbavkMzh3prdF8bq9WDPHDv2tZhWqGfMThmg2wZYjQMuxkXwb8EDAuJ2F1tNsibjZuTQH",
  "key27": "jcVVceQRGqJqqTuRzTtHLJeyxVLbgyFVmdxMmnjNcjcVkx3qhXux6FHZFW7BTnLLcf8JYi91MGb29kfuMV3oWYd",
  "key28": "5yem6xCpdk1fp48RxWR6ZoXbw7QvBPzPcmQE1H8eorUNHxEAtgwFMp556vPH78PJdMChRYg3XbGJFUcV8dLazCkR",
  "key29": "4q9Qndhx5QtYmP8rnWJzBBje9kWkHaJWvZJLGtRvuT3159izAK9k1Cqcmg992ye5FSChvVJhHgMDCe5VrJLSLdRJ",
  "key30": "5zm9arRv9f14SFnCSJ6UqsCnEnS3TU4oy9nSYn13mKHAHp8NeJqfcffahkwVLsVikJcETyNgTXcpdvh97feFd6wa",
  "key31": "pmwnbwQPQi1dF5U9F63Z4hp2cgsBRhcZfLPjE1FSKXjWFGByFL86e8KYnnfwtag2ZnnemCgn5ekwpkAj9qCYjYf",
  "key32": "3eXHZJmf7egGRmLS7kwZE6dc4wpV3zRPSUnoPTxsQYXCnaJeqx2NY8QKDq4S4bf6TBaVHbZVHAWraATTMVh8AePF",
  "key33": "3BLT3HgDg86NJr5bGSxt6bJcgZG3ssbMDsxML6Nhi6tfV8nxnD91dXEKSuQc9RQJQXXRBZhvnFP5dEr5KhhxnE2W",
  "key34": "566McVfwjpe9vwXGAUSvgzDVxVs8nNDKGVPdf9SeU2gqJKbt5GxJyJi1xBMDDon688SWc1XXotLc5G7EjQQ2i9YS",
  "key35": "2fiVUz6khPbDXt7wTG7qW7cWAapVEj9JkRAXzRRzfr6ovsbPBCFecUSjzLvSFN51dgejScFBqWKCZaWxLroCvXer",
  "key36": "5qaYtUzZFrTJFKywq1XPXTFnkaKAhEFy8LWcSsHzM7FVRSbXayCxhjsnskyDosjLZbG9tDPFG9G1DNad5LvK4K7Q",
  "key37": "4mp7o9jEnSbEe9f1T5w8ysB8QYvvfiGriDcnoNZ8TaizjvaCxUs4YWsnGRmwkeWwxmP7yq57Wr2Q5cQmiu3jDrJ3",
  "key38": "3NXot3Q6GPFC9tYny1Xz2jXABoNLXHvz6Mxz9vdSHdAA85nx1ieYGCPgM1aoCg4Dp5P4isQjBf6FDmHftoG4oEEW"
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
