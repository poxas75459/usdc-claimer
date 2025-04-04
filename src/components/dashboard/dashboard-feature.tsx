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
    "5tZgBF1ViuMq33FgDSphzKgrmjP6pVURsYCR4W1FYkykS1BgMDsVvp6JbbcfCv6xaggcC6GW988uhWpscet4uLwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXqRnryd9agtg3mKVCTqWvzRXvTHL9FTY2UPpYiLehTGJeLH5jniobu4bZUgFVXwAfeSe9dbUzpkxAvAxuUWK64",
  "key1": "VziabmbqBHrvcKpyXUFogF2ugaHKQ1qR5Lnw42WjdKzCVhMzrAEyzPDau1WSKZccjaQiRbjtt4uVPiTVTs8GzG3",
  "key2": "5jTSM4FHWHR44pRWkjpY7bT22pd6L1wzvfNJ96HfoyDPnE4RANU3o6rqJzfcomo855GiXwXxmWhHxdD4UjLkoE7J",
  "key3": "4tafqqavm9GJeoFijpLqBngD25S4AQ2bNV2B82RXJHnvbmbWxkj2Cjxy1gds5NYNxGwZEwx8LmbFYjz1KnyjWKer",
  "key4": "546GpMZfeMB77jkAbNvoCXvspgeuovZ6zmvLY3r5WZb5YnS7HhEgQei4VJExqQM6nPfgXFz4SpxH6ioM11WpEHFY",
  "key5": "3E6Yde7ftxh4EVexSDR2mYudBiFe63RGTGr5VFFxKt9BP44p2H8VYnt9sqi7fejrqwvRohRyWkZRdGm9kezYTXiq",
  "key6": "5bhoD7n5pHkzH3CRjGa49aeQ1J6MqrEr6L8fP2fpqUsuv7yd1X7Lpzvxa3Ue4dad9tjhNbMinMzyA1i1bkqprqzN",
  "key7": "asCsKuwsysCuBRNxpjNTt8vvSQr7zN7E3iqQHShrGocU7nzY9JPPcyPDzJkXuuu2fg4eStJHeP5T3UfyN5ob73W",
  "key8": "3cN5nyqE4YgUwzoqRPYTJTTiRBeTym89HU5YuJmsmdffR7zkCMNbLDkvgxpAPwDBHKKS69LNcLY8qvTGt5LnJSQa",
  "key9": "3JiXNb9ZNsmppsQUjvhVWLqFUnajBNwx8uMHjJ4pThq47VD5GsPV9Qtnj3suqKVdrZ6JDmBPAdVBdwQasgXsjdMe",
  "key10": "4qui4s5Kgbvo2zWbgrTBfUKvg8fboCjVi8wN7t6jkBuwM4ne6WKAyWcHYAqhWJGjPjdfBayuLGAYJK5qFQSaybFF",
  "key11": "2x9GV7Wd39v1KZyTyvc5cPox578odwX2VyMb5zXzLFxeUVebpbe2cEcpg41WdpWZKhxVpVUhVjghQybZo2EfKYg1",
  "key12": "5UrLYEbPTNYoodhurDE4tWVAFoDXiteNABg9QFPh8nc3kGDqGvgJQxdFZ1d9XnMkc4hk1VwjFvDhU5HfWsGQatXy",
  "key13": "677ijWJY9pLs5bFDwy9D5uLCYpW3By8DvisAY3AgnfLRDNemDZFmaKnUieiTH89wmnSagMSGVPZi4DyGGw32BzLk",
  "key14": "Af1Z7kRSTuZ1nSnpotgQQDA3UHsL9VnNixEjU1k87ajeMNGud4xCz8cjXs4A8fyNJ71TimVeBBBp8WVEi2XXnDa",
  "key15": "4ts9wycd8m2F1S1X7LQqjmP4BVr8DHBd15cL1QUK4TwdrwgTLNwNjTgBzDGCMUamFTshQB2Zp3n5RPCzajFvfM4P",
  "key16": "VtiCZZXnb19KziaatNALnyX3hMRpUSbRCn1952kBKrzWjr3boBEmLLCMPYoAQ7Ct8Gah5tn5Ss181PQ2auBaU4y",
  "key17": "2xY2e1vhjvGFEdVtyd9XEK9v5e1D4AWvBEtxbL95pa7CXagvraKMKT7cq43RUmrmLLhY2avyHvq4U9npec2sQVxV",
  "key18": "427Yufr9PLXkEuG3KFKzJNUd5A6JusakqPQSqRgQzdMfAZjyLCotyeUXYLT4iQu21LpkpHg9U5siCsqRmjpFKyTi",
  "key19": "4VnFg2uVpMd3htwo2YAFyeFVWCBq7W99NLWUM3XEJF3XbAkRag5TapLeYXrRrbDGcd8GaDXqGZ4R4BcsUrhJcwhL",
  "key20": "5Ln6ajxn3fUt1TokBjtubHb77tqhKEfCXtVpPDHXWbTgpTrxNbsqasevw2jTLc3YdsNPh5EZ9SqdL3VawGZ8EJW4",
  "key21": "4HNcqpww7y2A2iN9RHq5jDuAWy9JDPSRFh6LYgvpYhVxFGfBaoK5Wc8YdEEK8x2EuAkGtPnfZrz2gRf96Wo6wV6f",
  "key22": "2c6qikwzbcp3epHiw28CvaWeWvPNdrcfaCg55nYi1gWALXQGnS2H6i8Sk5mt9t6P747Bvz4vimKpf5Syg77wVh6S",
  "key23": "2jh1TGukGjNanoDrZjxbDswAwn1HRriCVCfju3J56c7hEvDwEy6Y5ZbzwdviNVoKvL5GQg1zriEQM7QHVQKwFDSy",
  "key24": "2ZC7pV5HPfkBuhgwZPYnK58LZMSAKoc8mhDmGJ7docSmWXRLrmpwRXAsKdendPo52sKWHtTmhymhega5kLWagNzD",
  "key25": "3yYdWuTaGq3kdijGDpcGTdQdZDhx5GvD8QsEnAiWVsBxA15sY2wRohCeQKMAaiXcDWzayEGavPLa5AwBqZ9sY7PT",
  "key26": "5dKjzrwqTCjN2V1KL2uaNe587twPgeCWKmLBzXDp3D2uX1Q3ZjV5LaffvUCEiCPZ3Cr1AnyNcrsTSiYCpksJCeZa",
  "key27": "4L5a4anCsKEkHdkzXnKH1fwT1yv7fRNDhYWryWhcj12CeHfQVEbQpwNCLEkkHC5jpYN42m3TmND5cAhDh6n4ELEa",
  "key28": "5z2yipNpHETZvD7KFnUzEcc3d89HLSXYkHRUop92V9DNEwagQaSJ3VnnFgutiJ95uYSvfQSaxFy6V2Kc9M2eyy9g",
  "key29": "4ovUaWXYHc2qbHgGJwZb4ccDCeztMU8NYqyp3AMhWYGPMC3wPwh8u9pAz8ywonuddYvndaiwCPYDeZfjmRh3GvkT",
  "key30": "4U7dNJA5yQtjsWHeErXECT52Leong6HoN1yRQiaA1caMetAJWDZQV8BxntoncJn2KMvobZRYufJvhjGfUpTb5ToL",
  "key31": "37kAjYbituwdZjfDex2z1JYuzxAJPvDGiT6ePY9a4XYPkoi2c5J39cgyxXco7V5aJ34chCsoRvN6dvNhscxoXUcm",
  "key32": "2QkVQAHUZ3ry3zPyxQdxUDwQ8TKHNwxoMMbiY3zUAipuzwBxQS4QksWn3wWu4c6jZXSYiza3XC4uZb4ime5Za1P3",
  "key33": "2DmEkMoQSAYAeHmSWMwEsyhJBKDwqVGdwYWFQSJsZcaJndeXQg2vbSq9dCqEqhW7iKiZs1qp5Yzxr9kSRsfvBs8K",
  "key34": "qv24HQJVtg8hqQZc5PcD6ZiksC6uRqNHL3UZiHnexW3XB3wfcrxrTcVEyJe2j1YPxyUnTjnZUghCEs3yLjFBzGY",
  "key35": "5km3dkS7LBjy37v8r9ZSZCNz8fJ6YRZpUyXGvQjygS9cywxtqSpUQhWdrSh9NFn3q34pDC3mQjVwwP2wTtXztZSt",
  "key36": "cPgKnkcfErPGXw61js84EincMxUKaVXMr6HhM3RnztXRmVJuVsaBKgMVzvzbFyscuUDxta6sY9Um5486XUo21K3",
  "key37": "4YLms4Di5MwvfKypVotQY7FWR5vwzctQBCuYMP2vAxwcfdMdKh6dHyD2CEGpFHA29uvhuhPbTuQkhG9Te6zTatos",
  "key38": "Tg1bqS8AMis37tdfn9gfcpMnLndDp2YKnFcpmmQRxmk2rSYKN5sFadYnct42JCkbL3gCoLAeuW9AmkB7drjYz8s",
  "key39": "4gmcCTsRtP1E6yW1NZc8wmZgvsbfN2GYMn8fQtyGeFWZHKwgQU1v2SCr4STH5BpKt8omj8JwRMygx9dR7XPbR7pM",
  "key40": "2EVhd5STSXqQfgXY4L4295rcVeszxPXUVVi28Z6jETdmkNbEnMW3LYiRnNjiVmQDcowycw89GgDM45aiddu8hezD",
  "key41": "5k1e6UboqJ5t5ufbPH5uzYiD6r768sfQvqd2hXztHMVZmU66CoHnBmzPaDbYAA9Mwpktz4d76W7oCWrt8sqSvkfB"
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
