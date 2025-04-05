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
    "2q3iFps8vCtZNcm6ieyMudAtDpkPWXQTUcPAUFc1HbGN8X3K82J8KPM2rcviMnGR52DnTzHnMNz9DXVPwesMGxjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nmbEWFNYJZ3GhLBQtQjckGpwbPZfdxZQVk3BEJZSm6VrCoNzUcCcQPU93aiU67jo7AH7T4JrnSvqhxaQPr1ktuH",
  "key1": "3Hvm8xey3XDfo1u5Tr5ehrgWPyqEjhEH5Q6hFBz41ykwy17pDqYcSmmSRiYVrZyNYNcRpegkXsLQCS3wgMagByzU",
  "key2": "48NPKWJSSJYmRyFpg5CK74uQwXnNJD4eqZgCt3xXtLfwaVisijPCrtVgixRVHxViRjkwt21TjGiC3suLeMNXPDU7",
  "key3": "7nTVimyPWrpfu2v2AUFHD6BbWSmytZ5SLKtLNycrWuFcGnjTXSiLpbJLL8kgvVJfrJZdA6To2VrRyPoKS2NgDhn",
  "key4": "2AC4vCb2rV2tZPXNrUswNMZBV9ZMpFB4kPWqps4WUCL1tnpPzWtrTWwbUciJJVSnUxL2T6kcJoCenGextzmdn2a5",
  "key5": "5kAeECwK6NyvGhc9VMSyAMk9CHCBMHRPP9rxBZnFiNoP57FRTbYo7FUADDczSCnLaE2mDhXykU4E5ec9Nk8afi31",
  "key6": "fxub3KJ6AwfQVBCe4AmpBhRJKDzFSFqfgVjBKXiJgB2G2VFPPwLu7k84rKAQYeYV8u4xPdDNMnhCMtppkWtuN1X",
  "key7": "2cK2eyXE3dtF8SBHf6eqkxmf8pacRX4UgtPL1dHwFG88h58iVqh2HXEJQovsUDLZxyXh9VsRa8TPudGAcHWtKz22",
  "key8": "41vDjhtEvJMsgQohjfFhnA8H6SS1xdK83opTfNTU7Z8nGMRDEeqDmJKgG9F4V1he6imdRhEFunQSW7PHFaSz8GtN",
  "key9": "3d46cyaeH3wxyVr8hemwrS571uJbC5j5TbR38E6YjFYsyamWeMrn2B4R5GcYmz4d5NgnFYnPnz8bCpyghtYK7gaD",
  "key10": "3nhiNEU53HB9YfMMT8fxSWFpW4gf9UjfSpnptVqQNbsVHBdQDL8oAS7oWWFFKJMcMhTyAJqD46Y4vUfGUDtQU7cX",
  "key11": "42CCgTpVN6AmChdNN4JojDSWagMvSW94HyqqYo6krDtXKTDNwA448YyVwuhNw8RgUBGr9KwcvsnghfG7ubZgwEEW",
  "key12": "zPPwYcuGnBWjY9mgNhVK6EYEg3CiHEG8gwKNUUXxyE2yiu3Zc43ZzeEmyhpdDP1MTNFWxQrhQVH8oYsSx8x89Au",
  "key13": "3yEUEUK8NuqBWGhBYQWvuVVpUz6eSRb4kvm6zc13DFn99SUMeQ7yEEyd7g7RfaVgfjPrTEboog4fdMqMMMim43UV",
  "key14": "2WePXUUWLy89y45LRG1R3kAJeB5TEYb7UevgDkGyJ8m6ySG3JF11itx4Jm3bJBCQrtrHopTQMejp8M4hw4TB7vTp",
  "key15": "4VgfhbQzHLz6MK72rq7A4xrZsGT7UupbsAuCsRnVQftT2SeiaYDgyGeEuYrrpvyYJj22CGK3Bj78gzWCNf4PPgfr",
  "key16": "cKJShV5GDAr6MmEELiFuFPcbu6EAqFHqMPwjr4wmojdCbypABrvL4D6eqzAcDTbZtehfPK1cCKbrT34cxmckCAP",
  "key17": "jaFvmVgzNnSXQJ54QbhiTefxD1SepZvoN1XUWHeFhCKcprcrtjopzzqRFSG9sXJ6wgvaLjidPCZPNeqD7x1d8Vc",
  "key18": "23pscrSxpXDqnJtALBvafkgZP9o4khy7BsoRzSUb1ADmjWf9X9a67Ert8MYBTodvMfRXxdYAffczBMNP5JJUhisc",
  "key19": "2vnswngdVwykoFc2GKhsZNk2uZC69iH57y1AnkXNnzqUSnkhmeW1kpYtbjboPy8gvPt4NytJpkC6d9vZHXzvJ3R8",
  "key20": "3hSnxhgCtoBe6y9Whni2VPy6Ci2o4tYDF4eGaRAxApq8pvY6Wc29z7NfBvWfggbpiFDYt4GuoEJqwP9zUT6VGgUM",
  "key21": "5g4Nntf53CbRPYAN4VCY6spaYHADNKGXSuFgYWUiNegzr4RW79PfKZEb67Eh285rJ995L49F88MeDcdoEFmhTs3L",
  "key22": "5bDk4V2GbtBuFE87nHLWXYeiuNgpxGT7h9qQ7KAugwUAzFD1ptNzLBG9dyM8gSsP7Kq5HGAdS7yVNPGUaSRaNv5z",
  "key23": "4xwCte7feW4xapMKSqa7nQnaypGfY6Xo2pthj6HPRUnsqTRtoXHt6hXNRP4dPADrRn7BQxbgvBHYZ7KytnGBcVCn",
  "key24": "36QMSfHgEoEqKLoLQ8yXaxKJ27XznJwqud9he9nWLWL4vaPjHEKx6xuqEvFziYgg5xsYeis7zjoitKV7U5szSVWD",
  "key25": "5t12xXfHy7hWs6Rr9jjja9TnPt2hxDC5pLZ9Yqxn1iKig3cVD7fhDUBiMcEvPWMb1nHj88twMQm4wTZbCY9L5gUY",
  "key26": "2L7L4FdSti7oEKZZjwHps3qh82ePwY6ruyn4whjbRcZXQVmyNVGX9Loyz9WG4jfyH4ddWgSTdtq6LUfM5Gd3eCPz",
  "key27": "2tYxdNHnHW7dR7iG7J2xqBjzceXiQZKydejUPFUbPxYQCLsGRBEBSSjcgYAHj6HhgsUFZ7zCaMtVermB8152PYEe",
  "key28": "4neQQr3FSKBhbDozHy9U9WrrMSeAuNkq3feQc6gJmwte9NXmoAjerg2K5YiuQjspX5AZYTYZ1wvGesVeTSRuxrt4",
  "key29": "3eAUeboH3bDwLqbLciFe3Hv7FA6gsfuk2ihKA9wcjAy78kscsxEJNwZ6yWzwWKDtMRz9SejHH688h3gLsoP1rJT8",
  "key30": "5utPYL1X5u98HC9MN7zQNH3CfjsTdjBbdDN1M5mFBg55iR3DuTk1sngKYhUVhaZgTyKrmxMDjtdzNSFdQm5zAC6U",
  "key31": "pzP26jiFLntAMZTrMTvVTdcJ99EDajj3zfaxbriWm5zhVcdQdWbEHhS6QMQ7d8seBwSNXVr3xMkDSBTSD9uwua7",
  "key32": "619VmGEaETmk3U2arDH8qLuX8JWbw5fx2dR7mXAs8uujhh2Y5YSxFhpKRZCubvo6gA9dVWoH91ic3jSa1S4weHpr",
  "key33": "5DaSWgF8c6GakER7XBuWH9Lh3sE56sMwmB4jdcsTP9jy9oJxZusS8m9XL4ze9ZHnN2gsUF31xLFqSEEb5nRJPeyY",
  "key34": "5hL6TY9UcD5jpKk9rBRsoF3LjgcJLGnuqdZ5i8KkVh8WpK4zWyQRj73atCJEUCKi1MxayWfbBmsKK5F4MYc5si2M",
  "key35": "3VDWcuiGVACL1vwCX69JAW4vPW47N6A74761fz8pgEHTu47BqR8SpHRNwgG799ueGdV4cGfKkjVjYGRPygZmCMJE",
  "key36": "2VahX4GCzKTKFUfvwH8mJwfDXEW5zfSQkGqnZTLPqRn78366TaY6fHiMAZGreByG6uooFvaTVm7F9PjjfHBtQgE2",
  "key37": "4ks5ekzGjQ9FQpJavaENkJRCVSXWVJSYPv9L25ErL8RhFb4iUgMmkAGhPFEAVoQjik1N3hH3YTuybUUoVGnQo8h4",
  "key38": "5PsSY4oV4ZVtsrKb8NW3q77Rhduv8eWQYm7QZGZznmteweCaFQqD6P68aqLEKoK1E3ygLdQLiuDbGEUDeEYHPyJ5",
  "key39": "3RoBV6B31LZv3iGxxQnSBSfg3bi6cGi13aUEf28ZhsmqY53RTDM5WTtNnet6qUK9iw8eYuG28V1EhgrXn1y2ci1V",
  "key40": "5XfK3WWCHuuwAnCJdy1HnXy7DVqTnR7dMMRtqaB8fLT2tTbLfZ6uf9BZCXquL327w1P5h9YbtTjRrK1HT8FCrR5x",
  "key41": "FuCWNTCKWTV1ZA7h91T2Wd2r6dsMWW3BG3kt8XEVy3wriSqgfVLUXF3eSd8rwYXqxGrjBET3L4216nNkaHuv2J1",
  "key42": "R6zTqJ8WbrzAhZWtea85pzThWkgSp79HUzXDoPia4B47QiEX7mi8mR18YqEzXEdKvqgNzaDL3mGAqwhGTAKZsj5",
  "key43": "2WiFeYRmGAU9LN4tSDdEcAZsLPQs1v4Hys11zJGzKK3GCJDvzEkS7EuqbsKqam6gKZMxYBhWoDZVmsKXf61ehkqT",
  "key44": "2t4gyo59i2zRiD2Zapbu2jHY9g8XjhMCFW4cAVqR5SswovLUDwNpzsfdJQYqJsvsHryxbdyDY1ccittcmGVoQZ5X"
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
