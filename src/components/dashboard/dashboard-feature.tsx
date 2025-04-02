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
    "4NkwRXB8XiQKpbVLDpLWMchJY2YzgwG8UbupbSMrubUz8ha8FuqAMU9uensvHt2ZtCS4oSKHtQEdpFV2vTsTEacU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYnsixkoMJprkR3VRTmxftMG9aRgToDKFaNcHHE5P9BsiMHvmVohXLYu2ScDb6HmVsaCdMdnDqQUcz4s2PbNLrV",
  "key1": "hNqvzuBReGNFYfctK5TqygLfFV7pCpFh8xEtV3R2tdpKwFuAtGkNaaMSLWg6VXpDErmbNFYtCQoewWLeKgUHzW8",
  "key2": "2yzGgopsQeKRgDaXjNRVDPMDbZSrYg8VXrF6TTfJbtaCpb19BjST1xpDHcaBzYPyeobehDoqd3LjXRDnQW9ySo9K",
  "key3": "4BE24aDAVSirXc12Pu1WEhSHTbesnkJ6QgsTANSYH5W3m76D7EkzhbdbPcinNWRbVoeJ5Ju7LMLZMkC18xSyjiPC",
  "key4": "sruLKm55PGLgxbJgNRCjv4VYU3qY7RubDEHqoVaKwNDC7aApkzLUWH4hs1YceGZvGYNQ5DeGiw9KkR8pfJhBXzy",
  "key5": "3i619J7mPY3Lsq7xEq4QACVgwGQhBJiS43L3gRCyAgKBWGwYpL3m1TKsUsx3yt3E7iS7TEy1ZiEkbRkX2X29eqf1",
  "key6": "U48SuwgFFuvz6XfL11LJHuebdLKZ9uxy5hsuxz6Ue8ZKb6XVNbWqxNRwKanBqrP6UtzYqQMmAJPMQBRFhCfEdag",
  "key7": "59kac2ECmxuPXna1af6SV3tkr9UQYBu1RgXsbJ5dm4Z1bmzoWDHvyptpJmpRU255bGaMjyjnJbwpcHZn8PHwQQCD",
  "key8": "57whpRvUsqnw9BUGHuvSv2thXXYLRFB6asw7CmNXufSB7WKhUMagB8FLqPfcwXWknZnue8ivcn4HNtdXQPWspVKp",
  "key9": "5RrdqT57D8RHB5ywFVk5JHkuEBNRsugGiFmsgm19wMvwbkYFNKNHbLrmU5uoWnZekx8kbB4C345orKL2bDyKZKE5",
  "key10": "mA9tCbGYEnr93pFa9h6ebEv1FXjyJGgjHcK5ZwNHcwsEEtENAxLEWVTTebGoDy3oPxKo5q3jTQXZrmHutWjHpHb",
  "key11": "3p53pYxmjCjpTFGC9k88EB2GmsUroyt2m954fwQvP6mM5Q8Esf3HCt418enAmgBksHKJm6SZmmDx3RFL3PUqmd8u",
  "key12": "4SKL4chkWjhoJ4PG643FGTqZ9dauT4UhzoHADY7GwnfHXsFAUHuAgHTUqG35z8eNSUEwU78D2dz4bWjBHK6mTcru",
  "key13": "hwUZgS6p3K5DaYAcJEfB7gqPf7RQ9G4VvMNiNeAUFF1ciVn2CzNJZB8Eupw36i5uY99DKB3KXLi7Zmm5yeWqTsB",
  "key14": "26JYJZNqH4HMqUjnUD4PYc5SYHGJQrtutnASNKNkx23PbjmkZSTBYnznSGmWNU2Lct9mUD2GxVLMaKjdxC6hG7Lf",
  "key15": "2oMZVijB5R2UwMP2P5ny9XosoQgXEvyo6K6pFu13WgNZFuD9oViByqP9VjHpU5YrfsVg73Pcb82LzebR7oXqDcHF",
  "key16": "24uaX2Shq2V1XxLZU2hqDuRsnnYfSoNFhngzoXRLAgfSxTLVYUpZXAXL3WAsSSDU8T8nCEk88TgRz3X4Cc36MXRa",
  "key17": "4ihxDvBNWYHGy5QmEW81h442zP4RBhLvwoVxRnSuwgkkezyrAMktZxuq3Upx1n81rBcPp6YQUKBUMDW2veGM31i9",
  "key18": "3mrXERnyC1ALVdWzNbX5t7eZag7KdtnXoVFFM8qmP3PVkYYh7Uv2rNu66R9zQ3wAFmnR9B8tG7fhbBBDzX4ru2Jr",
  "key19": "2sWzBuDv5hmpbscjYh6fi89mHb8UXXpRYnvspG9bgspb9nPpmt5sLoMBGkvXjUdq9s6b7bmKzum1KktNcbRcoG5G",
  "key20": "398ZheBVfMyGdzMon6bNxLN4mBDjeSayaKsgyHhMEEvqmQ2a71Yzx39hzBTuofEZ6NeCg9gfE92Seu6dULaYE6zH",
  "key21": "4JeqpXhecV6UUmE58ZCay6uZqGhgLmtu6i3mPbBrY9iKUMBptkxx72jppeetVjYSCCr1fjfkAiiab86ieJmPhMK3",
  "key22": "2G7yemxRgvTzELenH5R6QpfodMg5gHhqgHMhqxs2aeoEwR6ASnH24jM94RrhGu6cy4kqZZita56Zkiqd416W4958",
  "key23": "2E7e1BFn4iA3YTdgbZtPZWBM1KkTnHWJsxr1YU5YkxetiXPRjojbYgZnDkgXi1KxR6oU4s1Mup54AWKf24d6UPn3",
  "key24": "62nh7DwBHuDKCKwQ864fc2nnvsbUr9icYgdtCopnhZyKQsb4TxY4S79UCQARfSZEg5WU7nPfjFzYEf27pv3j6R2t",
  "key25": "5U4gxb3zXLLT8VWU6aUW9YaQc9K87wpbBrWJQWJPrdpBk2Y2Cr4PJKUZkNVTeeW4nwN7NWFWNQhXVxMo5qfEWUCQ",
  "key26": "4j9dbL4pAwymvhUnpXRzv6vavJQFFt1vBP8MTzCzRaQgnLrnMrNbFWHyH2HFYcdyLMUScEq2ZexDVoN1LRu57Gyj",
  "key27": "4Zy9XZTZAKLSs3ERq7zAfGAbSnetuRzoLvFvfCwMKKXiHo8fioystgZtUrKNJ8ZWcM8LsCSAgdSzfuR5PwugNjWN",
  "key28": "5xZAMAghFiQkDH9oDdGR2ZrTuScSBZ2ht8Qfv7DS82PKhLCEyq3yTgSPYpjjUvEAqHoWoUUTtctN8T574W7fdtVR",
  "key29": "2zTJAJZQk4CrTdiC6q5YTmTEjTeWeMPqwnPfRr97WHSmRSftXXx4g1FEeT1En694f7AiCMLoCeuzkoYWwYRe63MT",
  "key30": "FyZxcHEyExXiLYcA9iwoKNUtiQZwDGnQkNJCHjjCSkWL3ZwGmmqsFwunTf5QRV7BWQEvojrofQFUzZaBay5BiHh",
  "key31": "4Sk799zCoZWsjpQHvYfEk6fnUgL2YcMRDEHtC3AdJiRukcEGD7Ro4eKpVHsUgb34yJQjjazhxehiPkp7yoPCw9Gi",
  "key32": "3Z7bBygTfNGsfCCkgSV2VhNbpxdK2XvUt8MqGwEURjEQLsLsVcwx8BLKkx9Gm3PNqJbUxz5EpjzuMDE2dX5BE8nw",
  "key33": "2dAML9W9Rj6wMcsXCU5tmdQuD6MYwE3EdM8mj4JWopgTVvbRkGct5p3yLEtzD5pQ2v2iokdqyadMRBEnMaDtA7KM",
  "key34": "2txUzxGxDFrirchxfxwKrNdT6PDQ1zVg3pncUX6cxFPBVcZEFNCRe55mkvL9c21e1sj1wo78ZiTaHWWSaHTSxQAp",
  "key35": "5DCYxzVaFbyppLetSNvLCjJRsKfvX4eyzaF4TqZAZg2tm6HrejQbAFmTXzjp5NtqLsnmgE7SF28SmoNy35EpEtef",
  "key36": "4iBXfSjCifCCwnps4DRNE6Ge5dxgp898SVfijwZKa6ct2EHbtopESp2MxZuHUjPHR3wr7kwxkkADpc9medV9rT9H",
  "key37": "5hzwu9CSh2D2K4x1C9JC4m3rwV5bwkcqqU2Hbo3bcdNwHBwdbmaXmWKjPDfzGKtxkBS2JVjW5ZTzy1H1jYgNgsiZ",
  "key38": "VoExwEDQZvSBvh13HMjr17EdtxCuNui1udEDB2kSJoo9VWX31kZAi4UfWkiEYyZ3kaF7cYguLNAGAJYaqAPTzMB",
  "key39": "3j7gbiK6FJsm8KmAMoJUABjKzWKoP1DajMu7d28kdd9D41MsKULw8b2h5zv16FKCsZuhpPNL4MrdCCkXTpz2WE6a",
  "key40": "3wvM6aXYrTvUEphL5Byv9BdnAJgKhHZ4udLt3nUPaZh4eMSj8GBSD6UzH8UXqu2pNUHXd23hHVuQNw2qrSsoRFTe",
  "key41": "5TPET4VSLap33kwGxw3ZeybrCG6aNN7zVB8n774dyuQDCccgAoEQMUNGgUHF98wzijy8wt4UJpb6LwmbK2wfkmXM",
  "key42": "tMjfu4FFa6pYFdiCNdCzCvka4dh5yyLy1xy6G3epQDUwbW8i1QNeiFdwyoYFSZP7mXegTQajnT5kR77SWYR8Pir",
  "key43": "5ZHQZG2RDG2QgNMUHhzzLeQbhJXzZiv58As71PNY3YVX4CLoqLbPz26vLcpH5BAfEqKqJmUXkVWNGXDdxHPGg6r",
  "key44": "41vDErEWDohABoFwgB2fCsr9C419XswEMcW71wQj3nUwcVp7jin88VkFFk6BwQa3tBwJuKjKqoJqsVEfbS5XPPDg",
  "key45": "5dzYyYVp5ABQ4w4sK4JAJRrt4gMKfRSh5VQdsGZ2p5fdPbqpPUGRThGpvh2ajzTccT5VjWkDKt7nY5mEijx1eBvE",
  "key46": "3ewfdV86sZW1eD95YXmvJPmcZv2fo7kA8QNx3j87EGdxusb87Hv7PYbA2h27vyjpMNiPNX4e2qGfscRJ2V3qkRRU"
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
