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
    "2Yhv5bdcqgc8q9GUBT7hsgXLucD8d82TRy5BVCK8opfuj5BLCRuJaRvQBcrt2dCFDSDhcJmLnxyyRMg47jWTn4oF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfHhmurFVzGmP61TXbVnkavob85j3EGq8H3qEGMSeU4jwavS39rhHWzuTwdwC1v7WJJK8pAqeS5FoBRjECFgd3R",
  "key1": "5WFKYDmZsM29GwjK2UYzfsHiYcbXGVjr4stSW8g8qwhqAvQtz8zrUa997AhJiRjTe1kEzA5exZA3G3AgaJWjBvJA",
  "key2": "4X2pwt8bKvx93SS5xk2Q8NDTCUP93tmQfEDNHuMGdgenVYz7W7nk4qBc1zHMda3uzmDZBbb6N7FxreMu3QbiP1b6",
  "key3": "37ebJjMnk6L9rXR3ZAqXzoZ6C5CPidmDyzYFnz8D3SKMLe7K2Q8sAXhupYRheP5C3xg7CK7rkdr7fTLqx8PiYvmC",
  "key4": "4jgKE7ZAYxpcxQ3fasnD3uK4Kru1jzDk8jW22L16UDXwEfNYjFtN5VFf8hy5kqa2JsAff3uKygfrXaYdE5zi6519",
  "key5": "2UrRY77X5E5BSA2uAAMYbJDSwEBrSvBSQuY6VhkCGxq7j6DCtv8qRPe4Jmmi1PhgeMH9KGpzhK618e2wcTG1zoHR",
  "key6": "5wX5RuaYsATy8ZQwnGMe1X66sFojhX1PDnYwEVQwAwx3MEPrhUbaqvpWNMquA2AafNvxxyTeBqctzyEj32hyoPbT",
  "key7": "3zWrP2MAq1Uzrpgmym4SqsES8Mao76t4R5cMZc83ihJSboubcHQnFJMPojExm6qeaFNvKERRiRFGr7evWouCC36d",
  "key8": "3HkkLVcH34TNLgCsXsYa4v3GCBm7XVFDsAMGkV4J2jSaNu941YGoCLGbw3ks7REoZwfxAcHXwZGYQWeDMjmpJjT5",
  "key9": "4N21btW2nWe6sCQ6GT18LbsPmhehmfC4nkKsVuGQRwUCRDRbuwGnoz6BYfSsAaFsywhubrmBYJbGhF1fdkFpFiLQ",
  "key10": "5YP3dHje3BNzj1NLz97LcdE3XXYMTxiXNNuiLXqJ3ssSxLurK45pKZH9kwwsQsvQ2qfgZyKaCV9E7uS7thjb4WJa",
  "key11": "54UXrCNwSngN4C4U9bhFVhGpJsj7qcGT1ULsJ4cZxPgwCssRRSURSqYtsy4PVg6Q2rjhpkpXfQXwX84kwA1XD8Ho",
  "key12": "28x1wTXigx9C1aWXuf8J1My8RjSLc7y1CGxVcw49QWCTi7WfrBT3aKkkwWQokhpFu9vna5bKu7gB2TPAzyjr6Rky",
  "key13": "2Mz8Vn6J6GE6MD5Jfjfa7kF7YDxU9kJ5cUtZKxMoiKijhopZANTLC9dMPjMSgH2PGWYF2UUcaPcoHbtDE3vgay9y",
  "key14": "5hM62CLNmpuq6VhFknNcAG4QQ4XonhbWPFFJWA7VcUHBLvAEDhJehX3o8dSAj7KovwKvsZWe5iuBCyvyT3NAMhB9",
  "key15": "52cXG7a4jNYyfcvtLBCCBSyHmm8EYjX44tU5XmBiwdYrW4jiMm5qiGMRFvU1Hw5pERD9zWmBSV4t7vnLkDmJcS3b",
  "key16": "ADxTUXrE9EZeoubR3y1NWhvmGNLz8f4XyDL8fkSPW6Rb6Esn9Yy8RRtdLk8Z7c7NR8vqpA4haPXXG8M7roFZFqZ",
  "key17": "3RqwxxiKSfxJy73FrE4b5NZ6FAfUF3tPM98UwkULeMitMX1p9nRPfTQADcvgJ1gQAytKAFQWrY8Ex522DnN7B4Fp",
  "key18": "4cywvbs3nCdwU6p1pb3bGCpAmrExNdLeVfdeZogrKyNf9QrLexWjy7EBWpgCwf1h9hXAXSpz3e4Eq6TwQN23qARk",
  "key19": "MZ4ioTyzTcZhGcqcRjeesVbQTvx4v8DNx4F96hDCs7jTY5UArzkHH9kowsBZgHsLxE7iqJnQ2bPda8PpssAUNeG",
  "key20": "5GpT3fPkkv8sXrXacWxpQiJj6kspBco5bsJasJPY1gyTqF9Tn1jADcNkXvUS35zsLNbUNaHziaNY5PspLQeMCd9o",
  "key21": "5YvTyk4yKkBPV5ihuQaMKq4vnDTRSdazsUsbtf5XPCBhfT1Q5f28bEkSnDaQSMe1phsUgvnAWWmeWKv2GAAwdEQF",
  "key22": "5MNMP2ALJis87daCX5gmHutXy7qm4DXbJ97iTpPmnPrMHh3sJZJYPL5Q5kSaqhYpTxvaK8Kn8P7AssqCqc8aDD5V",
  "key23": "35heewbCkYJoApcGrTiXeNR78BPaGDT1ckt9pzHEbJLZzAZYYo3wtHfiu3mh8bYr1rMYaJVsHXenRLwfdQYw583z",
  "key24": "4TWHjJJfnPWRck8Mxy4EMGjzw8Hqbsw8u8qWt1cfWDT5B8RGNNPUm7mT9HpwqeGhfdQujiSp5xmKkWwbLPm4yXZW",
  "key25": "26JhDHboV4QUGQS3cyF8NMCdQ5nFo6jFv5BydHY3r7HLatW4Ew4nBpcpyenEHKjTV6SkCaamLoMf7sntLmcL5F9K",
  "key26": "31WjPkcyGLaWY98jynjDGCpJRGyZJkWzAaCU7LA3pWtNomApFYvvvENy4G1jGpNdLSnUMwUwQYTJm95S7ob9QVDk",
  "key27": "4pnMmpXKX7Ynu9Wn8ax7SggkxMXmWRaBcn2SkNhgnELWWdXg6Gu5Du9Q3s8GZr37gnNUqUZ8rEeAAnBpZ5ngszeQ",
  "key28": "5qYNi1FLHAdGtvLM4HbzDon9oqbqqS7Xy5mQjfp3yYJNcad7auKBBTPQfa2oLLNjv3RohGEuP3inV1ai6eSjv8AJ",
  "key29": "5PkD7D5vdQ8oeQsnYY8gKs7eBtuP9kLbPJJ7B1gMqqrBPp8onAnNYGcKo2C233Jvy4CUZuFvHWp84pYqzKDnBg8K",
  "key30": "2FrKV8CorSoUAPdfFzQF5WfonPqsv65WQ6whnzriiiyFFit18ZXvZdvxSXhSW7izyvJiSRDuvhxoMcwPywFkftza",
  "key31": "2YA5wcfMGP7t81T7Hr82Cu5eXxtr9RyVJH9MsAi39DH1ddzZRtx9i9SSxpUjU25bAQmajA9Ltn3Epn1rGqn8WyVq",
  "key32": "EJ3TE5yD59vn4baz1KNDq11H1LFb9AWC3zzZBKnT6HxK3Cjnpcb6q7R3cPSZvaGgzzkVqRxhUAKhmC3fW9NX4dx",
  "key33": "46AZEoRkk2ugh6NkXLmiJUTkAnAypPAVyArwMMYDpeajw9VhcR2nBBVzfdnV6rXJfwutmdVFpgihVXNH7jLPSfiz",
  "key34": "32kawm8o8ND3MYzi9YuHfJnxVzpfnkWVrq2vz5oAnKzVRAmbngYT7M1tFQJiaSfJtt6J6iVdiNCq8fzsYkYFm3KR",
  "key35": "3tcN5PUVuSZLYxuYDbEBJqYmvHQELn6upg9skSDq6zdufVtKPetJ276vCy13Q7UuratxfASMHqKpSxE8NqiX1nuD",
  "key36": "5uGAzyBs4dMeHpdDKZEgPGygiuvWn1Qy8GSHm5QoFCXRvLWruFRidVTWtWxiAL7kDKTJRyyymoHEyRxecVugo2pP",
  "key37": "VFNB9rd3EJMmyBmQC7rEEwhpyKtcnLXnhyHXHT9EVuLfSyFYDQWSXtYXnSzUzhkJRG2r1WefbfuRaoAq6ULsPaE"
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
