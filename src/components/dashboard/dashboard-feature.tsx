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
    "4pYPwLzg2BUjSchSv72SHh1vgHWAdyfXX6Gb6go6fA11Q9MsGhQMo2hTtTLzp4VSy78ssUpVnuzZeMCfSs4GnT8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSEgUq5Br7PRUjbRy54rRUecgJ3hgyN39FjsGnncwjAYUhumnz8tQ6GQAJ561H2oVgLf5WuTGHFjWtoyWdKBhcY",
  "key1": "66Rowc8xTmCGQNjm1bujCHyEhbJzJEbNJbLFdZ6gVcx4AGXV4hLCV6qNvw9CjtQF5qmKdKozn6o8dJXMAafc1o3Z",
  "key2": "3UtkqoBAXfLt1URisSgNK5jxU9XYjBGuLzndkeUyEGeqLHbgTb7HG8S6P2sUwPTRkosnJSrpA6jErfSn8VkWcmey",
  "key3": "4nLYVtbvgynt2VNhYuRmnuCpSJbFbXVEdp4remKNXYPgnAjWdH6m26KoWJmMKA3mZ8mY1tAbYJMnpt6CpCBCQdUa",
  "key4": "nyEmgeJNyf8sNapBj54kLgfTyKtfhpvvxg5phckKvnSWTqAwBnNxhmdMD6PmHNNvTJHjrJqA7bzPFMFwi3ecukJ",
  "key5": "2KdFVNZgViDaqnZq1sBJiwfHxPmSUmwTv4pRnc16UVGUpEAJT9uJHphn9BHGuNpkqzFHnkKHL29xDEbQhvYU3Xdm",
  "key6": "2854NcAJRJ5gaGX7H8g1VqNGVLz1aKon9x43ezhNDQ1BuNGwCYNFEbsxzv93osdDEqUwvgX36dFRmCHejDQy3xvw",
  "key7": "5t6YKz8uMzKqsCuvjb6pCQsoTsgFvZdeEhMg1rUcGaCu821BNc9ySyWUUBjcpUNUKv7Ud3Anv2ETFxFsF1dAwPzt",
  "key8": "2TSZpmmYfUqm4aXJrxwzTmLeBGFKnUCoz4wxb6LaYVsUjtucDWCVjpJ86sCfmZnHVEYkuuTrJUxHZLdfya5Sha82",
  "key9": "3T9LQgV7ywmpimEyMT5HJtPD6ohENgk857ajKxgHAX68S2kifPrBGje65P7iCo2vQqyAtqLTJByMgSjDJUWPFCGv",
  "key10": "3AuW3GfYE3vpSfkh7mez6U2cN7NuV1go4nbMgV4YyvsBL1mPNoVKrz4mPCjJPBY76VnbteQSBbSw9JipibH2bUPT",
  "key11": "3iFawntEfsaRDysvW953aYjADtJZpo3GyeZUUcrw92jSCJhMntVanKFC2cmtFiMdZJXPKp65MNgejmHBhYYeCGkt",
  "key12": "5QXA5P9jUtu3KMcnVfs8ReHxyAi1sGDG3J9f5JuUoNYbStbiELgD2LkGAEUmGVLiQpjfQbVbtrKejofWzRyym5h1",
  "key13": "3EArHzfbDiV9PH8qfQz6csZknPaLSUoMnuvB5DfQ3jyRsJtYnzKKqERWPgEJhTHWSzYpnYvigkHHxsKdE5Nvduft",
  "key14": "56XNHnDQWaPkh8uNMdJ2sB94XNDm8oZ8vV9Y4jhhLzw8bAZkZNns7e5q1x1YGTKB6PouCgcMpcrM2vHyRWTUhRr6",
  "key15": "q2ocWBhxFyFBnHgUXN3745p1xuoJWh4qeqo6uP3wyT6FV1SXR3dtw17AmP8g5Uyphs32tMvL6JVoBVWLLZmiGg4",
  "key16": "2tMzm9X3X235DEtayScfW5ivgwGXiAq2dnEFLZY2KZeLbQq4pb6yYb8zUoW5KkGQAfL4EsxFYNr69RiJtK5G6qVy",
  "key17": "41SMXJkYDRDg1xHpfu7c47ethY3tw8WrUHiqSofYVtGGj2191esKrdCoQDBpWBJr6XUNLDyxGgPdz4m8kzJSPdFG",
  "key18": "4NeZgWoV7UAkG25QDPqhiHiGNtckod342tmu4ncpYvYDwji7dz4EiHpmCJSDUGL9KsBPvy9ruYCYw5tcKLX3DZE4",
  "key19": "3PNagVLdan9Sfj5bYou4P3gkLd7hMKNHy6MNU9hrtzJax8HQHx9g2fiqvHUNysvD7pcsborVCKyxdisAPj58Hw7J",
  "key20": "4EZ4m4BuHpWEQ8VnQfGnqhqmq9gTb2v1kARtSkhmHeYZ47YnWJqEaS2vf7gQKevwdpBHM1E86WvtU9osPoo521gh",
  "key21": "5hBCxYLxzCiuaTPkKoQjy5pLJMyTPsigKiUw5BBqXu7uaytjcBt17bzRX37EpejHg6UHXMSL4KsZ2cK42RjhgJKu",
  "key22": "36fUVwBknwj37HmEGCYE12VYjZUJUD2YEGZRzD3eGvc2HkWrZwHivPWiaa13UycJWskPdfPaPGszPU23VAtQEdez",
  "key23": "2Xhra4g74sykWYDbZsQrtmRiqpzPB65z9pBP1dZwpThWBDSiwPpqNdDrmwpeLuCtJeDPyBUsxdAxVL64KfrjE2bp",
  "key24": "21eyQ4zD6jC3CCyEVMBwTZ2BjjtRofK5ZnZwzYKLFf2AM5Q8usdmEcCmrxXumSzSy5nYoNZLp5mZfHBH9HmuQctn",
  "key25": "4gRG6aPBP2mQikHvS6oYKSjGDTTyHAaEDYhYGndgWiy3Uyma684DdE7zhvFNhGikqC9fuxMMnmWxWGcLhV7oSYYR",
  "key26": "mNZ4nHQ4iWgtL4CW2uN57S44ydiGZByAh8D97neuaLQALg7W7caW5sQnggicVhRqy4Vb9rrgETUwmfyNdFcd4ec",
  "key27": "44N6JUjEtHarukzMCczQ6tmUJESLiormWHi4M6QZbgBhinZcvK8WkCfScXa9GPra8fNqg62BT8nN6XFFgRaPXnZe",
  "key28": "BfFTgPv2deCFZryxzMpG1WTakMD4JfzRhudqjSQjU9SxzGfKdRtscBn3YzQusqEUbG6cZvnZbDqGJRJkhW5mzKx",
  "key29": "3hmmVnYjSgdzCJR3M5UrAK9L5QsLwGgDtjpSj7uBg4oC7eqi21emA2pMBFuta2hqDt9VDKHKJFdKPLmu63SBAGD5",
  "key30": "3Mn4kXAvuD88MrA1xrmUBg581uD8ppX7xuyPnHpxmio6jRhNWoyoQiQ6NGQ328jM3s4PvLUjiN2HsyyZe5MbHwJL",
  "key31": "R9aYV5DNPBB9hvfJ69Jh3goheVNbQqoztan5KMd8uZG37G6JYHPEJgPqQigEtMiH6xGCDHfWkcwxvWbX8s6z6Li",
  "key32": "3m895Grahdkakn8EvJ5X5C7xTokjzHCqeyvTkYu9uwAZWxJQZksU2fy6r2F5tg3yPPnB8CAmxK8vcNSar8ojhHhY"
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
