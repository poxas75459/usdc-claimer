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
    "2vscbyGKQBfsT6NzLA4xvZAt3AQupnkYumtC9sc4GvNDMRNxGiH9VpHQB8n5ncBpywnw5gXPkkkCLrDJiRsnvv4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sd3sAudR1njKmYQwh8qUFVZSecjMn4iJD2kB1r2RnYZkof1v93K7TGuXsse31fE7d87PX3WcpSngNauXuRzY1hU",
  "key1": "Cj2yLGWu6WqxrEBmorma4nXkXucxXQHto6m3uMMcXgCkgZwwjXcDQP2jc6Zes7UakKHcPnnirhRbC1e1XBkLa6q",
  "key2": "h4BPzm4NQgxuW5SWC6ShiEsbhWR47AWmqDLCzbwmY5Y95C9nE8sUPuTFA3UVd97WEF5NuT7hSL39V3WTohd6hY6",
  "key3": "M8WAHMEoDDbYSGNL7U7jJGAnw8Nqs9QmsBrozuUZYSQ5Jz7A3Z9CLb9tjhNvxJur25VwQGJod3dbUtEhhN8KRSw",
  "key4": "4m9GCrS4UYuyai6UgNKBphij5ipLJdogaPQhG6mnTEUpQoMpHAWY8ASkH8nuq95KzAbzU5k3uAPw8NugqFRqjXaL",
  "key5": "5NLmUFqb7W2QcR8TXgnBUeJnenAzFLuSmd3s5SRj9BFtTmJT955QKt4XgeQozkC1Sifn3WZFbzQNdU3xsy8Y5QAg",
  "key6": "2zNeEmEgan51MANzoXs6oCrh7gTDHerv5T2rU5HuooCcKitrnkW3AgiGTBEHhbNB8kdDuz3DhhaBpx4eN8syWpgq",
  "key7": "2bgU4HzBr4HLqHceqroDqME2abfNtGQSNpajSRnx5pLP3maVK1GZNSzU3n3qwc3WW7TMWrLt5JsVPyJxyp59dgpJ",
  "key8": "65TcKEq4Zbs1MGjbN5aYbCKx5vZLeCx8ALebxhNH97VCKv51TLdCmuPfoiNFZPVFtjZyskY6tWSp1i4A1YVpPavy",
  "key9": "hTMjuJjk36ivFeNBePwkgm5MhMNH85r6qsFXTK9YrcnpSZe3BZDYysBSbNspRAEAwSmUDD4siwyn4MGcZ33euLL",
  "key10": "29cCtABBic9a7idMu3CczFKkg8NHmC6ZEeDotDcGYgGPvyyvw5S3tVa98qZNVGkCjTywKTb8yFgNY1fPHKyT7Jy1",
  "key11": "4YDDg8DSjsYb4nf8Tt6Ui2PhHPisgmmUgTsEW2W85mZhsR6YW4Fyjg7k8H4JQ9ZptDNBXPnKPPDAiGLhLJA5yM6D",
  "key12": "4NFnwHWW6UyaupUVtVpXUqXg7fAwvNr6R4k29zgUA7PJya2NLZD6prVeyNffnwkuR7bx9BijeAncn95R4nXKnBha",
  "key13": "4rfB14tgRBuGJt7JhAoCi1nYJgvnUL9GGFz9yrYwd1rHYcEQfswNUNXcFsqnYUAQHPBjSeAGPQQcMonyGss7KHMW",
  "key14": "4xo69zADYtSjZJ2EBoPEsxQA78YiPUJ6mhJVCSibAydaq6gKjCkeQbHCbEx7LCQHRLY2UD7BSznZH3tU7D4YT5E5",
  "key15": "5gWqcujAFiR1tqwnwueUCZn4p2BkAw42teo4BowqoZL2KoZMASnHujS8skrDXnQ3M2e8MxWcKzvpjVeGvm11b1vF",
  "key16": "5rGoevTmZn8vND4J4k6zVYWTDDbV3JJxMpBnFaW6doJGvmFz5LAMz8bF6VXmqUbcGbkpMxYP1f41dfeGU2P88XfW",
  "key17": "3mopbRaoKcPaHnCKHQpSbFJqGMmAEvsEsbCyZfWBiNWjwEMGzbgZj88ibXqppRiRfM2H6oLVoxKCqbvusMyCte9F",
  "key18": "2bnfTwKDvWJx4Pas88xqSSmsXqpJMyetJwaAxG88nzkJfYYDqvCaV1eVPSHTVHLXmUUQz433SHW2YRVLWiuCeUuT",
  "key19": "672SQJ8GTY7Mf7wntQG4Ejd8gXFncT2cKbTNiefH2RAWiodBKb4WZDSJ5BH8EzKoqNqQ8pufSJ4oozJFYZzMkLZk",
  "key20": "5Y8TAVvDS4SZDxZ4CYAgUzcsQHtWJknMD25wiGv7v7j61q4BJYBca2LwPHNzWnai2FtkJCJ1iVW4XYUciXWCFKpN",
  "key21": "3Ua33CCgmM56Q1Tf8Y7SDqqgqia3xF25UTqC2aWZkzCmGMgzpM7y1DAckJLM1d4dFeFp9H6jxMxA7fSShZwo1dqB",
  "key22": "kozSfgyxMXXxr3K1St7D2Aavbsvxe8cBoYyTgwRbJBCyJYS4JUeMa4b4ceix11pjFBKBFu8ErAtCKiztcvgU7Kx",
  "key23": "5TWfH38qbEsjTP6TrcKSEjg9sh9qqqXZBPhLXyt9UoJGEBgsy94P2Tbhckt2BNhcoiXNXAP8aEVnRJ59ZBjRjud9",
  "key24": "51TBrFRqncYMjW9qN5ZB1Hdk3CZTN5ToEXdBLp3FH1sdRWLEfK1VP7onhrhfHBGtrRZ8wDec74BPWNLuwzyXgadT",
  "key25": "3ApfZ9jJLVZjMRLWfbC19HtdnSMLnTeL1ubx23SLfvrgZy86F7srW3uigjLG8SZAPXtjLJ6WzxqYkJbzFaPwqwZZ",
  "key26": "5f6sSK5TuqVSw1oYDiWTmmWifMPLL7JMwmzhyuA5UyhiKLBWdc1SoFAqX5FieoiT28xXEu2Q9NRRhRnS1xBm83dD",
  "key27": "3LEFrfmY78vsxJirJU9qerj3VtZtDkSUCZVkJvVNUFVd36rf4vZG8BaDbtYPjpZGN9ekA62ycCLurD81MVfhangV",
  "key28": "4VGK9Vi4XUoz2TN6SEaM2WBiTTf3zzUEdu9vWgKkxtNFkzXs4TyCqSog367TDCogrf1VW8Ys7v9aDgx1dxFvDC7V",
  "key29": "4rgGhYE4Ntwgsoiz1VTtzKzfYKwJmL8sYZHqHadyFTt8AB5z5YUfa5aWG7BEQQazfXDYMPBqZ9Sb6pPkBcRe61ha",
  "key30": "3FufNnA95i958qYTAyRcADf3MCiTiHanPJAXCP5ZJnK48yG7LeNQbAFVp7M3DftvfDhB78K2ysbq9qkCFZEJKXsL",
  "key31": "5kGPoCTRtTWXpnbdw5Xe9Z56inU6AHqyXn2PPL5xtt5hDGqXuiBhjVEBjpBJAS352cSd7xny9N3pyEk9spUZzJaW",
  "key32": "65YCs1Yf1tQ4FwqveV7Lnj3k1teWoFbhJ8F244qPPUT6vqRQNQw53x1nPfW4zbWczVwPDsCXeL7TDRxABgKgBKiw",
  "key33": "eWJfvidEjD146ACuZJQBwnxKNKM1iTCxyCf5Y4Qx33B12zjjENn9Rttijs3wi8cB1Zdh2ZfwYRMzSG6Tr1FSQRU",
  "key34": "2CqeuyW1wxF3gANnkHRtLbcWKJC3ygLRQu1CYxNFuoaFwGhn9nQK3uHpF3h3DNayTyiHkJKv4o7YvXNQAqPfZMxq",
  "key35": "6bK5qn639wrhxfpTF6b4ynSN8JCzum1NZAry822oxuC8UfzWqgEi9yzBmgb7hDxxpkqxzFn4U39zRtEWfGhvqLK",
  "key36": "6113qh7hUg5EyFmwrcEsenM1WmSVnt4UuhuuTuikHX3VHbmfyt3zt7WEjMgyKsbHkt6bK6gHzfmqPzKgB8mTxXWX",
  "key37": "4KYkVY8TY9UNv2FwSXvcWoNTChfd253MZMWUjGhhi7NhQQFTYB57oSN6yMdD9eUzZAaqkWdtgA8C2Pv5uCFWTakB",
  "key38": "468SRDew4WjEueHKngRaGyfhoa5JiTbWG4SN5WFL39UKo6y72Qy42MAs156Yhx9kro7Kk2JxafFsXN8nCroVG8jG"
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
