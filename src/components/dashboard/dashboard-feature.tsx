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
    "4oPppmZ5pVXGMvLQ38Gna6KhYuWSGaTJGEncvZx6hpSXB3WzT8rXicGttKBW53xQNXxAK54qRaiC4gCxufLzNc4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xbkbUMUH9i7BsYx244ayary6L86e4Dd1HfWaePdteVbAWJ7JjXSizb6TdeKoSDbATv8Swh3KrUW11MfziH4KzT",
  "key1": "rbvXjdeshvRW2FLhPS6DC9xt7eTEAMZ8tdwhZTDW7vvFYiAWSzm2cM7pU31kwnwuv4nYWcRBGmz5T4fdHsgpXWh",
  "key2": "64KFgTm217mN3GAxBEr8hyYXkE2zqmMTm7v9GZiEtzVzDaxoZCgswhioxKASBZphj6p5yVycpkUPh7Trfi3P3MF6",
  "key3": "4eoCYBuGrohpkYhDbXWzNPEt3uYgY8w31K63PfeCu1E5TCzBHudzor6EirXhnsE9dURpyyPsEP3faQ9iiNrSbwq5",
  "key4": "5FgVsEsFcvzQidMFWSBx4TrWKGoED7ZKy2pWUAoKbNtmujkMZLWTK8A3NcdJ9466a3rEoRTg9q8jXZo74SzDz44E",
  "key5": "RpyDHQpNxftwc46NDmoeXSPpVrRHcHE9XANdPfLHY8yAK33XVwDyKGeFgRjCfHSF1xo6pFzRrCfaxgQbwQGXMXn",
  "key6": "2d9KLLC9hYxispaQTxNgAYzpKds7qFqY2Vv6tvNDjngoqWSVjBraw1NFg8uVvF5zPejqhKb3Dj9ff5V6gQqGx26g",
  "key7": "4brfZExRcRFnMeriiyxkz7tNCNsEJL6Am5tBJSWwR5sgbY6uVLGM5cFpxChG5Ch8huCye6CDvPPThpPb1zbdQ9i7",
  "key8": "3ojZ74q71ikiYdufrM6nYaRtTjHnAXxttZurjHZbvDxj9Qh5wZLCWw65cpMQp6HpinkbGpXAc9QPZxw8EU8moaHG",
  "key9": "LV5W33knS4H2JpDYFhAqAbY1fdpD9XZozNQD3Yvn78piUurhmc1n6U3jzjiruusAfzccniTavSvrii3Z6sDZeWp",
  "key10": "3Q2p5FzVwZ8CS6FsiuUDuWd5XifCBB8M7CfgZSGmTGnXm7uA3cu2LCRtRKUXcfcYqAA8629Zxreq4DvALMwMwt3j",
  "key11": "5DtBN8nMKZL6QugHn3S3dRkyyHyECSSypNLNzJHRfHxfiWWRhqw2gHjrQG16EP65fGnBzoZsgF4uQgF8myaWLbYP",
  "key12": "3vUB4SLKSxDe99mWoSETZ62mA3yUpLfR54w6YTiyrEf5maVAbfRo97GA8t4vif9aeuBq7zjMScX4P5hDgdvTcyiJ",
  "key13": "5ErRcLKoiS1q1P5MryFmFRTG9q9SrcYxkHkziR2xfZsyaMqJEGczUWKHF7AWwaEVQTK6GNku7yexm4rTbn3Te8gG",
  "key14": "59B5L7kMcB25Zr88QPbaoLZC96UYvzq3FL5PFTtShWSmS4rxLL7PH1PG5zqK25zSB87Mr5rcKny1doNuEAfVDeCe",
  "key15": "4KgN3fhpryYEvuQ2CaSxSJGxEFExFyktjHncZLU9xZ2xrNgJF4tNPBteLtHXEgt4mkpbZcDcKiu5RsRiwZmZGnkK",
  "key16": "27V8y1eHbs25n1R8KVDxyc4bkvEhunVtFn117e9AQZkEyjdLjXVGQVbRnYnCvxV1QXVNmWw5R3P4v3BunuFfNkxw",
  "key17": "3EpZoK2vGw7T2EefztmQQ5xBpCv6BWuBJJRnPjjUsfwrLP1PMHdhu54Jr3qrN2bcAQVNSucXA1btzySW7zzjTAR7",
  "key18": "3dn7FrXpRQhHTPYJVNphEUS47ogSp7gLR3aLFcKn1Waw5v1DoJ7koGsNNma7SqemrgN15eyej53K8h959xgALckN",
  "key19": "33oVPBf3mPxsU3fNUZPtuAu32RSafFgL8CdHNmKgDpLBML1UJfmtr6349Twc6JNQ5QQqUicFDUQZBsQkTPiidgrx",
  "key20": "285tUs75RW5h4T4S4QHkckEDW3Tac2hzGWQqrJeZMnX4b7Q2jNoy93Gr9b4cNYgp5yBY7qM3SFwWpZfNEj99LbKN",
  "key21": "5FLxk63siqTTst1333ibKFMSLMMmcRBTCMfAUypSqpuiygvpupqoimxfG9poSkR82XvCU2rPewuGu3oA1Aa3yHEK",
  "key22": "3AmAMdZCqhm2eKQmuo2ftQ4vN7ighMzFhBB4TpUnKuhENxw3mqcfQhJLq9VmgQT1c2Q8aqS7MAirtAzSDL9hvJBd",
  "key23": "2Q7NJAmWQAjUdZgfg38aXap9RnyNK5HBawgkfECovFUtJ2aSvZGS4j9XpPBD31eKjcUHYTAAEQ8vB4MYSJDKwnS5",
  "key24": "5Wi9cfL5mvuHRkhguxVHjr2quZb4MnzRp8AjsuEsBzd4k7PLKrfFuK42tDPv2x8GH8WWqgiRf9zwD7tHNQ8ga1a3",
  "key25": "26UJxcH5ZnW8by9DtKfaHABnGpMgvDpjWsJM7wrXWYEsdUJXnsCE2y3ZYJwFBKNmtjjACCx1YiC5vCAk9p5wQCpy",
  "key26": "53Ae8H25XizVNazdA2qG2XueJSpfhj7cDrFKi9pzHJJ4MaZbJLxiGNtpgB78abXPLBrNJqcnsa15vtmHAx79NJ58",
  "key27": "3zL7pQ8R41k8534GWqbAsR7C6gaCisoBBHATBzcAKk4kgpBWRjkKsP5iSgLmw5jcqBCWsc3sj6x2kudW1VkFUr23",
  "key28": "2dHSsEcmEJk3MJ7DvxVrQ5Zhh75eaY7XK1J6c3LfkjgyF3KJM2rbrA7FH8QPgxBzJwFwbE91whQZ1zYsJ9tkycQs",
  "key29": "4FUCmnTkUDWNL7LULyYPyzEJ9XF5U1TcWNhmWns7oKHJu9TkCZTJY1gFtwS82M9L1nP2M79PenC1BQ6fGQtzUt2m",
  "key30": "2bPEtqL6tLpFbHzTC71EhvkGW1ppo251CVUNqvBmgJJLbcuULGfC8Q4tH13f7H82r631kH9uXR5n6zHbcibHvVL4",
  "key31": "fATE1LsCuvPZXYnJLi5kHY6C4pbEnUBGQWrWnDaeeZGXM2jRfJuiqctDYb1LfgHUfKMdxed1m9Sf9KVCPToe6x4",
  "key32": "ms37RoXsomDZyuD8aeLcyCjoU48vhND7EyQowhv7eGRpvdJPyjCBmumfc5jbvzf569E8WDa1AFoxPSsxi8aNtKy",
  "key33": "47jQrSVCXTk2Q9GvqvkwpKKYVqtGF7UWBt5vRdCws6Ss658kbzJspSSPYxaJrVjzvBwMuUSJ7Ds5LQMShnaZSkL",
  "key34": "3vrhw6eBjfwG13jed6rFNSHH4asqNE869eky1daZQ95nHQVz3GsGuxiuF9LBTPpJPpUAGWnkBB9yU7DKQf3XoLwP",
  "key35": "8WTPSPiGwVvdcQm5KF7gQsUjo8YXAQZKCCYrqaEg6PGWSLb9UHFBFQU1xHFnYATmqBqBTCogm7x7Pf3uWxK38Aj",
  "key36": "3qj6LjwGnnFogE1J5rqzxsY54S5Gu78MGDucsqEBhUq9pKHRPm2nCni4urdv1w39N7oMkvRDkPHdwBNcBpTRgYbW",
  "key37": "2HkqfW8nS5eJRjdmiGewcg15V12HSJvik8td5EeUWsCdjdErVRwWekCdTpJawSPSzQYm93GdGK6vSDeWDL3FPFhR"
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
