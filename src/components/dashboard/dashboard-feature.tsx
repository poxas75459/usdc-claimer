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
    "4xoei55C8T6CnuM1ut4aBFYunDruBTYJ1gPUmCdfvzrgzZo5azec3EqtcYcPAKVwYqTtMhNQLZJ7dS3WgnFqdmNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bptZRwJRU3E3tdEgThSHkpnY6hbd6aw1doaLGZ4w7ojurpaPgGvxUnwMFxEnACWmqiy3886SB8RaU9K8xkxamhh",
  "key1": "2A2SjgBkk1JivSjSN2h9DKHoGQ7MQoWxbDLyVTSdT5PtSqLRkrJ5wN5Yz226i2dqGgo4ckKE1ickmZ6hCgR6ecFS",
  "key2": "5iRBD4qB8o98gbGScRSPZx4iymuffCXGtQfuQQrcRYrKgs9TSbZkypkeYYmS9apMmnfziUAsixbtfPBaTW9tqrQQ",
  "key3": "5htggVVyHf8Co6gP78GhKsnGrzT9QJGMshRghZ1FPcQg3KBUwuX1yEZSycjq7FGry3RwrS1Uc7YaRgSGZk6mEwCi",
  "key4": "r2mpcSQr6yJwfnG2AYMvn5fFrVKn8hHkBPibKizmjBQJHPPj7XSbE5orz1V1pVxLQZZ4sgr4ByLbTfm8hWBErVX",
  "key5": "4hyyt8LqtnCz5QFR2vg9eq5pWQXkYfYqgZqRdGsrYNnNZbjf8YMN4tfUQZmJhHwv8HfayX9tnpLJgjbT6BBaPUq2",
  "key6": "4LDytFPx3vPMo2vqJ4WhhdKFuHaKSsgrs1NLQ6pMGRpUvUfaAzEJU2xpW8JnPqPCiQAkrCYDz38wdSmZy3ksb5UH",
  "key7": "66AE78dBtntJi9Aduzuv3LvVXdwv7LsuKrpEwvqHzGMCYW78qzWzfPvaZa6f3PboyFJ9FhnrYT5q4UC5QtLPYEdH",
  "key8": "2BroTyS6JQcVSYsFof48oMcuyug7kb9DK5qUvytTHDmLUMyZVRXNxVXWt4UJK4cGWTbCa7VfPyQhGDuQ99dfRPX6",
  "key9": "63mAxksgnuTyJ19iZH3VdQefnww1HMmHLTHBdu8JrgkrsM6MFgNyhCeaNcPpwgxqZgdjCPcookESf6ZUDvFrQAGY",
  "key10": "28imeccr2oxbYWFfr69eP7RHX9Crbm5tHg9C4Y3YvJ5kv3L5hf7uE7WD4ZoevAeYF5XujPZRFEufhJDY9HXJpwy5",
  "key11": "Dgtw6RsSnK3bzETv4TNaThYnJimUJnP8EXzMtGqiqkxgcg9MeWhhKuKkn977NKiEiq2Fm3t6WbkzoJLuuzXHA9S",
  "key12": "64dwst3ttqZ2M1UwbaVhQvAu3SMazVLsjLQ7wSXFtCrftz6EYYFN1AswCB38zut9UY6fyhBR1MVCgqZZPG3Ara8g",
  "key13": "44iA36VccvQB5UvqCvQkPpw2mgRUGntN8MnGxj1JcM24Dm5LPQLhDFE3fh4rAwA7KRbtt3b2L6CVWdjnCn1KTSZC",
  "key14": "9jYXfWUcYxiLYfE5zVAEHBMYiJbR16h1QQobbTuNAQMTcdYt9zMfoK7Ar1qZmJ5cL7yGw4au4CFrNrQBGtoidMr",
  "key15": "2oGtNxRqT8qdzSkoTzNrm8ohLif4ShvkGtE3sDQbyC9oi6dmxXNtRwnriqPyEzA2yTVHL6M9YUtDy9vC4xFULd7H",
  "key16": "4rjcLNcnfx8YwBvvEqYWGR7yE61UNKBFvGWqzwhLFWHN8C3aNpCJRTNNR7iwwwRaNQ6uA8hiDTQX8v4ri1ncaUYF",
  "key17": "2pD4X7wja94qLGpcJ8UrfQQiegReDWJVzDruD8vAKczVT2A3mu76uhAdwFGRuYu5iRS3K8oYSoGTN6tpbBxYRxZV",
  "key18": "5sd9vxhV5AsatH6Nk8dyu855AsBx4UaTWS14zh48PpTs4vt7wsXMsBPxSXBQ2zHESnXtBziDRyCCZW6HJfK8DS8C",
  "key19": "2UsT4oJ5ufgJUTpWAQGkq5wPajLHQbaeV1gT2JL2AQp32HatBQu6xaDsEqYU1iZLaUjEk5q66LgRngDFLqr74QRm",
  "key20": "xHSHDh6zZjrt33hX5gkSZ6k3qu1cSmPPfKEawaHyfMLXBJqk8AgtKUe3aTzcXcmeB8WW9hKfLd6xcnpH56cLTtD",
  "key21": "2Jf5n13rTiHoSUZYDTH4UZopijbSkezN7cPJBxdHien8RD2SF7rMdCpjjy67LfPgmyPnR7eRib8f5M48HQQsFhaZ",
  "key22": "LwL7cTNJTPAJdBXqrVPqBMrWHM5GXy1NDKQAgjyhhkJtzA63PHgvfKnKe28qTDUejQGTVk9EBMMYJ9uMU8ihh3v",
  "key23": "5M2fr6TEpFygTbSQykDUth9JPBfwcBLdvoeKUVS3NXMCU3dymAWmF9PgPamQ2dVHUdeW2PGC2ANmY88DsF5BKfbt",
  "key24": "4X53hjj76Fq2ZnPbqbxyQ6RLtHwqTHknfRHSoBryV7ZWt9yLtJyyC5hX92ZBs8PB8fLqVJyLK3av97MwuDQRVZyu",
  "key25": "7BtEDb6S7KExRaC1yX7gzghYGfQpuC8Y7MJzWx28zLgHqYghT3ifwUXpU7UAS8dEnRLbrmqSnzBVXsBZevtSHgW",
  "key26": "JD9r7AdJBS9rR9Vy1G2am6hNwe2Z2PTeJqvKmk9RdgNFyZMM41Tre8nhE7tQu4H6uRbGfN9nELbuLZo8zQv4WuG",
  "key27": "5j5o5q6dEw6btwFzKu9W9CrzMFyirubSwutGTt2LxrWnsM2YKWyfPE496b4V44FySRhFjZAwTNpHde3n4T44n1Ex",
  "key28": "3UdXRqdm4ZLY9VhYJZgbRJHMCSnmYaHM58pEMBSUy36tEuyS1GP9JAT5DuLRaFhX7mnzWq8MmPVvVSHjkAq7vp9g",
  "key29": "2HKT1LAvJBUQpVE9G215QfzjDbiszxFu9e9HpsNanjxz8FfxfKB6D6fnULXRhF3GnKBGLuHVYCdsXVhbJJgfPAYq",
  "key30": "5rx5UQW89CegtyZK7k8eespYLDfMCcTVZTNk578dM8XiXTt39dfg8hBdtihUNW5rrjs2jujtTmVGxpCMrRKcL7Xk",
  "key31": "A1ZVjWKRuMMQ9RSCJJM3YRbczizinwGxTn1CwfBNfcWVD7z65Y6vnCcCpu3ysRVTg6uikxsbaSyLqRyVpiuPwqN",
  "key32": "4q6K47YHZtVEZnpsks5Z1ZgXQfySSbF2xHJBX6HxeMrnVbGuMS1vNwsDfzTUf72TND8NT9BQGYRaapDySHViSJqt",
  "key33": "67NrA7Nxgcknbh4M9mKLwBsYhg2D2u8b1CgghuLa6Zv7xcPHJVX4NwcyuBpnhSRFBj9BaFCh1Gzyk9Ta5Gq3tf6X",
  "key34": "5A8Ccik33vudTqktHJPeNarif37ihd4x2j2uPD1GAZi4A2HLeu3yKKjJjDx3eUiyP2HhWekydrJxhR9TUCyCKEaE",
  "key35": "3uDVvHHtEZYKffchn8SXP5MyT1dBZ7R5LJxSuB1ot4pj7barfG8AThhYtt7BDZVZqdeKBWpsvSo7aiwmGseXKg2P",
  "key36": "2iFJdy4d34MTXZAdNHEpQXnxRkVicZy6xsuvguFj2uvcMj2Xc95WRcVjZrwHocRSDogEKwZ14xvYjNeWMhfVUZBU",
  "key37": "61EGo7xxn79YMKQREvGSrQUpZka9kfSdZLBJteUGT1SWDCZzxabdyQxWUYimtASW5ofhWmjVHhBLMGe8LyuziogR",
  "key38": "5j71mUHAVvQcnzS7sxBvvNFdnU5AzQPMZqJP1UigwxKvmHPHfUQm1yjvRsg7cxcacAW1ctPNafBg4WWGojomxsa5",
  "key39": "4gdV5G72i2bZAL4DbTFST6sZSeErq5Pj1mYVujXqdFqhMBZQwHAaH8vFSkhfkFRTBVkCPV2YNmYsmguQGqTf3ZrX",
  "key40": "55a3iiqAucNSbgPP8sEmzg3Jaaa6US5BDc3tjR9BtZPv61Nr5tv5Juyw8KtgwFbxv4jbC6tMuUZgVrwnjkx1zdR7",
  "key41": "5boojZtS17uNNmx5NTvGe1ZzwVqPPCqdV8udmXCsoddWRdpsawWJ2NGpHkGpqhtwcycdmeXNTcT1yQTPgQ6D4ueX",
  "key42": "4m6eg7sEEWknrre6sayuePttQnJAEfuS5KR1N8xndcgAyaBq74Nbbir1tMqqJojjGH5tqGfan29sz1FUAd6DXT4D",
  "key43": "tb3j5SjZHgB1sBrjtEvHyjnYMpCHdGGazgP9hEWWvoea2FR21PGUbjuS2eVBTYdBH9EFFAnTPVv1r7cikJ1CWKk",
  "key44": "3zeZ3F4hkAppF8DLEbXvisSQNqarhNW2ZcJLiSSXSjHCkLGpSysy4PmuxpXDjb96aubhRKQV8GBuzXRTtz3WM8Vy",
  "key45": "2BqTFKvwjtwexJkzKgqt2Mdg3WxYDaL6rPduFsfJwVyTdJNciVwyiLsZuZ9EkYm6Wq7utq79H56njVMwAeb9HvNq",
  "key46": "5wpdKYnQhzSUGkyQgtJByXBX6bHC8yA1gXbetk5bob5iHpuM6AYgaBnojscL3rritQJTRmmPKYYTzMbNyDxeHNDp",
  "key47": "2st1vYWXai84Dp1X98tFAY3b5X2w3tj6xJsbXzW4zD9Vwa2G6SVFmY4EbMewquh5DR3cm3CW4d5At9Kmr2QcEXrx",
  "key48": "284x59U3Vr8XMWXmpsebBpx6Q7LtS2J7eHbJJ1CmVoYzqtH4vTXvU9XXTA7x2ykPV5wB1WkUNN1SaLxAukEXvNKN",
  "key49": "4mH4ABPsw1MEBQMH8o3Lvvmx6dUXxpbdoGyo8yVvKnCyWn4XEZBZSNRA81FTTWqWzZfNEM7Mbf6Hk4k8sV5HG9Yy"
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
