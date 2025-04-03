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
    "5g8AcFx7CLgxwEqtcd62GJ2MTrdxBQGy4tXQCZGM78JxvJPrTvFURbCpJYg29g7mh7u6TUWLwySnztaDRczxvNfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hsc6CX2swy8EA5Xq5LuNuZP5X9SF4g3KpEkEBefXbJuNhxjTc9q43XB4HBkCrrmiGKn8jDdx1DjTNTUKnmc4FZU",
  "key1": "5nkLvvsoFRqBz9M1hUAczvZu66cYKmmVxrJN7nTxRhVG5yV6r338hVdcw1359oLZNFQnjdFtEbSRy5rWSvBLDoFB",
  "key2": "xx8hnTvzhJdGmoj7y6uEP21NYTGT9MSVYhzqWWKppY2cdQn7CDNVbVtir5UrxRG5iNgEFYJ8R7vyy4ZntuLygNF",
  "key3": "5KBAPC67kkCTY6gzkScfNdjUXmVs1kzC5wXUso8kt4PmCzxzMNxoT6LdbKD52WtcFm7EBDeLr2mFmqMZBCaLtwAD",
  "key4": "jmMtTeach7RA7GhvikU3LMYbkMEhJGyfk5KqfDtyB5dg2RWSoWu9KmPixZ6fALUtAFWkD7dPK51NEztE2ihy6JV",
  "key5": "2X7Cm9qJifVZPn5SBPE8nzm8PddDTXmkjrNrtb2bkaXf5BYqUpxfb3Y5P9Q2dRKxpHMKviHxr63zoSjZabw5zBU8",
  "key6": "4yHo3Z6m7M4VzMhZWtUxjFUtmAv7rAGbdvCwJmGqW5PrQcntLqRiXGeJap8RQ3Cqk8VpkdFT9FwSHareJMXr9KM7",
  "key7": "2XPFZZNnovLuCVdgDAn9Ab4XjC9KKNzLoxwFUFyB7DyNGD1SdmFCfmwyZkLEqBbzcDzjKctmGbfoWiQTJnUrPJ21",
  "key8": "4SZ29wupc7Rfsdk4p3xeydwUBgoZbdogR157vfRU9pyPD93pDL3cfWwBG7rbQXYbX2XmuzRLRnfGJbJ4UWrSjjox",
  "key9": "4ykdjzomjQJyiueP1MamL4YiWVs2PJLEByhg2xSccq5YMyLvE3E3H1L6tq2F2gGz1iaxMrFu5zuSQcL2fsXRrLyw",
  "key10": "51U361wn5KDGczGuDR25zUdHtGvym6KhsoLePLjDLxm61oBM5xBQDfXT1MpxtVeNmCJVbB9EiPnwQ4sdsEnTBWyW",
  "key11": "2jquYAbGTHScvwAWQm7W5tSpxsgQK8DgDm6exArxvyjA2A7iyfxHExrVJWTQkB6UYNHxNbQ5gG5pnMrdLCz3Pdi3",
  "key12": "4iF3qquHbdySPYxqASiNP65orV7eA6yUxJLJATYE8bPJpDiessMFfcqwZxc4fkLMi8Jn5zXoNwNt6yoP6bYerGFN",
  "key13": "4oW2TzteGcoFoFXmKcxq3Kuo7Ly2irzSsKWp8Mg6M1AAcZeSoRaWZDHaWy3T5mALieXiyAMzn93Nk1SND8Bi3ddu",
  "key14": "3F6W7ZvbfWYPpYxWkRBuwaYhDgfRbYRVXPTGqAUhTYLo3cAko3pu6b3ssB4bi5hk8AKKBjTkXyu1Pkqmt5LPzG52",
  "key15": "2UqTgyVUvrT7xgbqPdEXYFX6jbKrf92MYD5GPsQgHu1r6SrdEnMa5z2FGEsLiYGwtNyuoXKnEuZZegZpPF4qwpRq",
  "key16": "2iNKE621yteRCx2K1k6tA6eWHYFDUSLMAwj27PQd6qw9Uh7VSgxrP3t3aDaLpsuGBEhojyEUfV2sPkiFWnnLS2Gh",
  "key17": "3oijPjUyDoaYaQN2NQmj4cs6JE2qmZM9o2pSBRdKmoV2BVTGimRqc1XxehnP6jj5Sia7wwEzR3XMCskH5NXquNmj",
  "key18": "UW3f2a5v6qT2gPo8Y2xNDHqcT1cVhcZpyUg5wci2ytgCVW25qzxJPJ8mqEGpnLFYsiWhr8fRscGUDbo6hdqaft7",
  "key19": "2TP9p3QTaW3d9Q6m3rcKjM8CrAwvedEqbzPdkLUiFFSNDvN4JtSQv7RFD7Ernpj8cgLYzuwPkgHZ2ztoX9AsePGx",
  "key20": "4YcHtcrrLvGKFWjAY1MVegjmdqyzLs8a4TPcmqrQTcjv7a3rkmkW4HB9EdGMFhAryXv993m9WHKLNLk4NVewAhpn",
  "key21": "ZwdskSZm9nTrFX3cyMQGMUnC3dT6p32WidGGmHPpiWhU93UadRhuXH1FQex31Qvt59HxdxTbCnGjpYJ1sVYSCJ7",
  "key22": "3HbDkGuQpgx95jgvD8ppAGUD7CZTuKjNpiZ99UYW7gpjUq3PByP5C6uCfKrAZVzTfhLJhdLQY1q8i5kUXNSNiqaS",
  "key23": "2fgfoL3R8tJh1QnNQPcKttHxwsRt2Gcpje6cdzDKRoTSizXov8fKszSFkucx8Ks1hhbgVWgokDJYrt3HiVwnyQ43",
  "key24": "5RHikAHApP4BgRZArmHmtvsMkXw4AoPzSaTVSve7Bss7RnXC7qcWEBiBca1brsHtPRtZEyDfzykiZEpHdYwHxyNc",
  "key25": "3dNjEKnj5MdvgSARmaYshFj8czWpzwDYQ9t5NsKXEcntNYQdWjq8ek498XtZSi1xn14WQYbGHSWw7V6aB62EQAma",
  "key26": "4UL5vRRcqb6z1zGoSZu1dSaAz2dNDi77VVwjeU8PMkansfcYyomeVuH1Nnx8j24mae3qzJ5PaGvY7evC3NjCQyBC",
  "key27": "5QW3CS1QuQ6vLdKHsoj16V8pm9UYYrK8LqcQaLjoNBqWYHXtZptkmoKLNb6BNiAMUQnB5NCNGVwQQTdKRmx4EFcc",
  "key28": "V8xF27JvsBspmazthCrvcbn6oV2NV1QJKwBbo6vZ1Hof1VcjYGwh3hMw15YcrADcH6o6AUgoRpEDzBPd5wtA5Vh",
  "key29": "3ayygRJQ94K3cRe5RdreKGBMzW7mWKbHaJc9QpZLsdmrRDsZiQsrqtSF3ZwUfgnDk5SyT4oxHdgwBWjSKHHCKbwW",
  "key30": "5tgbGRouhNzUYtQb1xkeQngrTw7B7pn9ueP3rD1bgbh5w3TebnrxEhNgZ1LpiuJgo1zD9KnKsCFTwYFuXMznGdWB",
  "key31": "4Xd3KHqAkdjD34AASSD4QZMvDZqaT2QmrU1rRw8ZZi5bc95Lv7wbC8grvhQKea6DLU5qPyw68yu3cwAhM7osh43P",
  "key32": "3bJYNwy2k5cjvYvNjJY2Kfq343DocCMJERzZ4fe3MdHiVwxcH8RXreRnRVhLjXPsYKE5aq9A5XeQEn5rvqsQcv6M",
  "key33": "4PE4zg6ZgCr74eY7Lb53Lzd9e1Ujtopw32gXTk59f4Fs8Zk694v4eCqBzkpBnbUb9fxoUcFZA9EacjTmcs2Akx9K",
  "key34": "4LGLVjFMWc1YvcmsnzggozGRm58kTAwUqyCvMwxXj85j5LptMxnG4rZqEGa5CA1H8tMc5CS4F7D5yEUbyWHBHyR9",
  "key35": "mPsEatkkb5fojA8xXmREnYXKHRtmjBLxiHyiLoAeSU8pTNktWnPqXHx796V3st32but2BVPGdKSkvM2UGp4w7T4",
  "key36": "29K8jioXVRobgSV2GRGSB7sMybrfRoLaujhTfALedEeJ6WzZXygkaHHztRLPEpBWyriYkHyfVZRReHjpZQz9eTQU",
  "key37": "37hhuJLKCbecHjkSvkPorJcj4CVTPMUqJQWgUvjKN2CZ1zj8uyKjBceQDhqAzqbq8jhD7RBYg9rUcQ9yn1SJr9Bg",
  "key38": "62QkPYxajxyS2gWMjA7k9BcsLwzAg65Z4YjYCxADEVfc2bhnG1tf9vdisVHeLD7RMqsSFcuWY2pnFvLzCY5i2AG9",
  "key39": "2VFppjCgwN4Ab4cg585qvzjgTUeoSVFc94btkiTULvo1bxMCPQ7nBZZ2kkGegFav4yciiV1conVf9Y3yGdjuDoaQ",
  "key40": "hVDNXbT4cHJifaJF3yURLmWumjXwKtoTeyMZddjegF2qbB4iBWccwJhHbjEKj99Gp9KBHrSurvth4JacpjxNCzk",
  "key41": "5fHiXjJLKCEDAybHpADn25iePgkeRmsSodg6YTZHJUh6AzHMNnS67cKMmHrJgZA1ZMHRmYduMsACTPzxKPipcoFR"
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
