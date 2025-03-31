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
    "4FiiHdALuqGFQ7s54GBvTCjc3hZ3gKCMUU6LcmF1KrMLhSbar5WBqvh38FX3GyN7nL1L4fznkBVDweysK1cJ4XRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhHWyRfamWUJ52TzfEfoxykLkgzBWShHHjLWcmAYgr9uNZLCGNs6hfszNGaGeGjBuNsNEqJt8xDLmYWMFZCvX6r",
  "key1": "22bav8Rt3UyAe7P9fziX6DFk3rhz8xAgdvPuzDcCsS4SCErYagr3R4VhHuhyy8JXZSuXNWE852Ucx9DyFWVyoQV5",
  "key2": "3dPsDZ2Ps2cTCVa4yXh4rC1pHVVCUhfWUAh5RUERvTNjuao5HAezHBZK4TYETDTYN4xQ6Qe232gnpz6Zoh7apHJ6",
  "key3": "3EWTkHMJwjjuih5VUoDRmyBYjEjuS7fY3cYnNmgNaZRChLVwiMxz4dPNZdrHwucSvNXRSp5AS6H7KPpEdH4xK5M9",
  "key4": "Pp7dzAWnoS7nxupbvgCsi3SgpF5XiXwh65u1Ka66D2uhHbVPrUKgPQjEZ95bjkbuY9YBzW1QXy2D9QdedkZELjj",
  "key5": "21y2CJdVkEZP4hWXeHQX7YJLtPraBs7pb9osGqp9W1SMUcNpNegDZWhAP6DzPf9a9HNHXTHtTLR2CykDY2SsgGdn",
  "key6": "5LUntZDWPwxMG7AWADPMtnsmGKQupEddffQ2L836h8Z9uPsqBHiBPeGq68gDrsW83HYCvS3Jyj7tUU41EmyAMC4C",
  "key7": "KVfJaMn7RFJBZzUkrXYSzr1jLvfApP58mM2XDLNECCVdJWJJWi87km7Qb3hxGfkKkpG9kPbxXwyeWNAAFPBgFTw",
  "key8": "2vh8oZqHXK3KQhrwvodwCFMEdYsU9RXU7pibrqNGDKeNYvV4X1mD6zUxZaU4smJDr6JbR2smMWkc6ctHZ7LcsX9a",
  "key9": "5z6N2PoE3BdTkt5Qvga4ekJLG8oZfs1HqGP9g54HZ2BGV69D2Q3qppG2m6rojKMXhNaguCHtrGNfUrpvHUs2deRP",
  "key10": "2mqVygg7o4P82xYxHHRw75k23oFwNLrecwimLH2FefsobaVjQoMvRDnjKC4oBN2FF9AMWwxAt4YsvVkHuKbhYtmT",
  "key11": "2G2X4J4EsVd39TZqUN1pVaCXKt62iKNQYmdx8SYmntaz6wKcfHCFPgpwXC64LKqYhK1jVYCVBDQCKnpJbtXPLjZx",
  "key12": "4b2s37wW6roN78JL78rfkRjqdisFdMqv3FA3zhD6dxErcRGC3dChjQiLQsZEeyAeanVJoSa5znh2KUT31ctob7uk",
  "key13": "5CdgWybR4n7SKTw2Cma3opuoPAcjAD1PZ9ict4qTL1uzDzpd7hyDFmoYjHAzQVrFR3HYB5Jzsq7Y3uaxQe2h18tM",
  "key14": "64UWebMELkmb2VBLZVRj6a6pDavzvPUiMGniKzFLrPLdga78bNQtmFfGhmXS2UApK9r4pkQ5LZSGGX32gZrd1kcM",
  "key15": "SPoBGXt9QxJiYqkY6RLgkRpa9bJ91DcGzMgV7pNehPBc98YgcGFJtDrDG1rszNMmxUQcewA6BcHwV89nxocF75a",
  "key16": "5a4S5CGVPgxe7yM4DFLj458vHz781M99cen8NDjsESsJsPs7YX638u7D8eVQ5KH5eo7ox2rBHFbGbroV543QrY3o",
  "key17": "5rUMQ71w9yuwQMzz9Ankuqnx7re4pNJ2vwzdPtvVRcACqpUq2Ly4nvrpNbS34hB4YJw4UmE6j8SEwtB2CiYegFZt",
  "key18": "Y3zA6cu9QiaAtzYk7yVPR62nENKSMh8EjA3ynw5yCQgyicSuMpqsVbq6AvtjiYLUAPwGxDj4FE7RcjtVp4oHttY",
  "key19": "2ecyWaKLmdxnquMa6Wr9vqUkxUzEFZVro2GYt5YCWMi7XiqtRCQFHymKeHK8F6C2hAeHMbQKdi5mufPxWEH3JRop",
  "key20": "2W9mVxtuDcYBJTZk6NHhzsHoTuqPwLUowtcNkDSwWCV8XKBvoNBuJUf3kzBBmgu8hmNYwbnqNCFMwuEht5yuAMTC",
  "key21": "2YtsT8Ca2ebBuGvAbmB4NJSpc77eAZvYyNLNzZxP6WNyS84cSYhs4uwYvVNyWNVHCAxyKmz5dNJFU97rHBViJ9ow",
  "key22": "5phKBbpSRzGVgAiMSuWTsAA6doPoMFf4hrNVVCrZwPu33dfT7QffVMoGhLARV2rkTzakGJFG3FNtnrXQZEWd5SHR",
  "key23": "3Rkc3arUNgc7kyTXNi7EGWjZGGmCPuxhbZgB2qcTpFz3vArmVWPd6qboMc61PVnyWoAFj4bmHW6HR2q7kUfnXL4g",
  "key24": "3go6pBCapxHeG4hHwcf8rKBwZLkzqHKkaF4HRhxJJM8sF9imWmW1hJx1Gsvv6nYMKzgVPN9P8chZFgZKmBYY2Tpw",
  "key25": "4xxp2b8vsLvCJe3nSs4VCa1HgZKHtV9whbCNJvgyXkN7CvPwCkaBXLhqckwzNck5FPFor2k1t8yHc4EwnG55ekTF",
  "key26": "2pEsHKTXScsFGdpTnSq7dsiJR5k4m8gh5HGFKAywbJh4zN5c48c35crgSYJWuBnCniDxXQdvCeRBs73oWJmbynd5",
  "key27": "B4dsaioFvrhaxthDPoirNL4pnLZGisfocf1r1Rew4NPr84rinvYW5g4jdjdUzGeaBqsXgju1ET5HQw868wcndt1",
  "key28": "23QzaCgx1yyiiZvuaRbZGPB6YHcpQnG5TgTeznxBXR49hWzeQTJPx6tTv6iXhqknXzqVaqoC8nMaWYsE3bpahjQe",
  "key29": "2kQyffXFkZ8t48jtuFtCk75rhfcqfFhejxdX6t2uobNfLNCEx5cP3co1aDqQWk1h9hjeNn2jj7TPE7Pb8BU3itre",
  "key30": "2KvpVMo85jW7qhgKJGigYt54oKc5GCMBHmS3M8KHJhWWLELhfrocmM3woDGZ4TrS3rNfjetLFLTeczGYp3MJvSd2",
  "key31": "4XiN7UXHVqyzeWCyDZAGiEd4Thq7aSAtEcfTk2mtKvnZ3fr5uZba6nsGWK3v1wp4bGrVxbRTvVaPUpEKyGkQ1Z9M",
  "key32": "3Lvq1abNjfDwDZhnQqiu423qD727bDivCVoxanH4pfXdiphafU2kZVjkjSS9XtFPpwifUpcYgdDGaCvcsGG6tjgu",
  "key33": "41vQuDgZGmWf7yHpgXm3PzudwRmh3uohQNQZQPtNqiPSe7pk7f5Gatqn5sjjCJiYn8rMXHgvWgz4TxpGmLHFhxbY",
  "key34": "26PH2Dg5XsJbPJGDUmFRgm7BHu1TMZ3L8SCpxWnm85RELFxNnuuHvUbHV4BkynEQqctCm4hZZAdLQtJbLkMwjmn6",
  "key35": "t2StXpzcQXPvg8mrbEAuWxhxYYLQ6p7i26tB2BECn3d54fgRUHUXXuCq5jNKRMW6fjrNG84YaSeBwBDDhL9PqYV",
  "key36": "3Ng9pHXHYiEyWY69FPWvpAxhgV4Wy2W8ZGayJU2FrP7bcEQNgafL65hifDZjwoCPYBUETqH8NWj9C9Qa1BEW961B",
  "key37": "3EUSvWjtsyRDkRk9rLcJ82Wrasr8F5G6MhpXKx7irA73QY6K9nBRPB82ZBnFRu4jLgeHayXPCVvnmoY3tpxgdeyf",
  "key38": "443kQBiFi9A4S2cnKXvFurQWXDQd87XFY2XEgY17QqPTwFPmxHTrnPSmjcxoBtK9wy7NJf3nAzWT9eVLn9wM21aP",
  "key39": "2HhiXKaFCHR4UzCY2D6nPKVnxE8vewFwYkQSY7tLuFZQQQLuDbww5DnKCzXzQetio8q1nJoc2MiyaR7jtgnzwmTp",
  "key40": "2jPbdthFy7X9g2pkfsEqB4DCcWEgHpDzNCktPdSiwcjwaBqsE29P7CXvKCmFrEWDchC42rJjKBne6sL62EppFbgN",
  "key41": "EYfjBYJKSyU7vD3ncFaCVUFjDdqwtqDgvzhcS1VTncJumrV8oPKvo9LZr4gfHfB3d9jecHSTqDk9Ec2m6WQUUS5",
  "key42": "56a2dC9DM49BjAUkSi1gNSuzZDkBsAHsnPmFhourrXUYCQ6yQbuGN4Vcfc56YiuMZ3rPSR3MaFmqLNMh1Pvi9R77",
  "key43": "2JuKr9SdBamT4Fga9kjL8vi1UirA8hFJQBfp7oJ9k7wM9n4YJ8uaQY3VCMpVNfXEsAa4dGwww8rPKqLdbNwLz2pe"
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
