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
    "2sbCfD4ziiZfuBoSvKTCd9s5n7wKtoRVNKrUe74oqeSfk2K4irDkR85iDUPuVMMRnvdx4ebAXAd5eRaZ5rC8ynDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tG7joSFac8oJCn6KBVHDmG7aCtc8NHF9p6Ben1ZLJobXR2fQUvM75kiG6a86S35v9L9eLNSgjUwprwVTmbhTR8V",
  "key1": "269ciJ6VsAtnBFoNbKSkUWUtdtQ9XQsnASABhYPFMYbrR68ffrAKfSjhtf4ofkhPeMfjx2KAHkf43AbioTvoDe3b",
  "key2": "2AdizgqUkM7UE61g9d7y9NnQzJfLVpW8Unu2vhQciydH8VTZegWphPycE237QzP2vfcNrVKgHfENkCoV7eW9mgML",
  "key3": "426qHMZ7qBRqQi3FHgiB1fJeLbutcCmWsGochnqDC4QyJzn3FBu79yXsegSG8pWbCydLoAusPLB2drfAvyi5xjY4",
  "key4": "5no4DaPZ2W58ANrrZbV3SYWDUUcLVK8AQFG6VvS2kLueqozB3GWj9wmqJiN4gxibMHzshFC1hsDHCfuMiiRKsXHo",
  "key5": "61mEUssCFGj5sMr1VVVu6LMWgMzXMtuY4tteKSvSXDQxHc1KzbuvtLDVM8Wygoh4SfUKT7Xeo6B8He4RXd2GXwKw",
  "key6": "4DCUMaqBbsf1hTpxPM24WTqJgLaDoKSQ7Twsg5BXJq4jMg15dWS1EEGXgsJagkjPxuyw8kXQR77WBh8NJQiHUhK",
  "key7": "33bU7ptF2rbjuJYjzyWLg11AHCEMAkE8PdA1C8kEKvXqK1sz1uj3CTM4nMJ66L62SbVuEGjRUs1awdbTqPp2pQLk",
  "key8": "67NguK7imHDq6vwspERQXdnzL4wVuStjkzD6jLkP2FUJYQry9arotxmESPpEstexhMchG1oua7XskWaV48yWYMHp",
  "key9": "2yun1XX2xaCDcAtLPiQwV3mqBrqLKAeeYkUsinswVr9PTFXrVNrE7AaVGEQ5Kx5SuwF1rTK49r2hGT9uEuyUha6d",
  "key10": "4skCYrpFGovQJp24PgmZpTPyksCJYrwX9SZSdoFPV6YdWJCotTChAVxP5fSiqQk6QfoJ8YFomj6pY4sMaM2vbXWK",
  "key11": "2XDqCDM2PFZrsvFzZ4pKyV9peDZfr6rrZtBA8bJ2H7ccnDzTw6PXSXniEDCFd95dz29AEgGwd1nZkdTgJXUm67sc",
  "key12": "ihJ6eh9RPvDibcnkr3oLWuxvrCh2pdKpni4tZoBnF3iK1J22GMPt1b7ftzcxwcLT8C2RCuJUnta4znoLefCL7tG",
  "key13": "311dZeS4iS1Fms7hpq39nTLzjbwgRKqc9NsXEYE2Y43K8w8Pgb9Gr47QrHjQ1oG5T3ZoX1axnoakR5HPiSA5tGQR",
  "key14": "5yXpMZuZKpJCVGcQuxhZn6c99m8ceTjJMetTQLkkV4TaLzczZXSFE4GcgFLzAiHyNeLzt7nAUXnFUZ1SsVT5TS3x",
  "key15": "5r77aLXkjrbiE4zfWbUqJtzfW6LdoxbhxtQ8B6HPyarPRRTky55vRJejRaZD4q3Z9W6ikYPhyZf42mGF578CBKxw",
  "key16": "5LYrmJDs4QAN3ZEu4z7DxnoMqdJn3G3ftVNHgh4NxjFnfaANgeP2FECAdiCDnaEzkmQG4TZVsBZvEYeKLnit73Zy",
  "key17": "gBBmp9HWseD5jutXhKStGj5vUuBzvQVkpX4QLPGwAf1MjSdLsmkHBDjGXS6KSWhvBJ4cMY2mXN4MLooBKz6mUKv",
  "key18": "3WVeZPLjoz58Jh865g7EV8GN7DY5S9oEjWqNpWkgbDyfUG6zjWyGuhuiEjHTF1iMXyEW2AUwQk1ThCSKY6H3ShvC",
  "key19": "3p1LWPJYHXT8UnMqYYH11R8k8u2TooMvM6XpCn8rbqDfy52PKiapko7TKAdyn86hbqx99FMd4Yjrzjobd1ZmfAAM",
  "key20": "6B9FvYMdjuNchVSFeGxQFugRAHnRNRm4ipz4x6zXwYACFAhDGHj8p3KKtTU9FXWUnRb1PsbzKP7oo37FPukHmnG",
  "key21": "3ry5HLdUGkQ6ELjLGBJuStMSJPkbRYDYrKbQNrPAHXtpX5o4gg8ZDECnnTZ5gyeYfwYcFS7zFTVjUZvfQfmh5Hpp",
  "key22": "AmwwD8zejMGMyJShu6PzkZaSTprv4EpXucuKowkJHkCNfqToEig3M4hKiyPTWafb8beCw5MijkxjY8h3Tt9x874",
  "key23": "5HiUwDeN5kTcepTuhEw3ReiCSGyUwbKcYsMntrWRrHn4XyPfQmZb41iGDtFomrRr9hsZ9xEPNuBXuBJXBEssFtj7",
  "key24": "o666XKS3Y96Mnv4vcGm39y9ntRKo6Fh4BjwCbELPHNFVab1bwp7HTcwW9DUiGqhtjUsSpWcbp6x7kBb67H3PwBQ",
  "key25": "2B9hZwqbNWaaXztMT3nw9GdqSDiTgFr3fz8GdDQrrxzUPtjmvPuMWEtZ3viyW8vfZvWyEMYqHbeQGuo7VvRTwDbQ",
  "key26": "3MJGu9VtbboYx6qzQyhVis4aka6v1tB97fDX5qZNrU6WeiKTLi7f8QfGbQUPed6ARcKU3fqmqDvXGA2RbhSXD9Zf",
  "key27": "4qyyeJh5UVw2DNa9Ea7iAmBVPJbiKZBavuR1WBZXhLv7N8jzH816YBYR4AEasoo6ftGgfcfLybnySAbS3ZTkE4T",
  "key28": "2D8wvppeXkLx2cW7QsRYzmfnxQGE7HAbriiLfBmEvQUfUWNsw68q4TbGZu1UCxFDMTJaH3SvP3wY3i7nxUzA7xGt",
  "key29": "3e1Epv8U6Gpm6mNXojKhEKjt8AxTTa5PtSjDwuWkm35jba5YDJPbkipajVfahpUSPSVhJXs41Gxt35eZYWrvHdCU",
  "key30": "2ojVGG7q5A56pj1hLJHnkFbYSj5T3s7k6fiesYsSEcrkyQvdzhnZbKTTBAvazEMiqKhqFAzBLAStFfWeKLAavGnJ",
  "key31": "3F8K84tApXP4RomWz9zkm8vgtKq2rvERxhH8yFXVwnQ7omHd54wfViStpknyAiY17N1VHrZxn7P3GzLt4favpW7X",
  "key32": "3VPige7rALB5hsaBHDxhaVrSpizzwHu7zjiW7TzsdFVBnXnAnQnbgceuHLPP7tnf7fxAkd2m3bNydP1GXAcr7w7m",
  "key33": "3SWgqCKG8eL3bL8dy9LwpMQip4chP1HnzV7Fqvz9JgKLocYhhDx1UWj4ywr7KjBSXFxBK2B2prrL5YoRzZjGYtab"
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
