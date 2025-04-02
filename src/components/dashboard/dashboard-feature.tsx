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
    "561ybPHRMZkkTuqu2oxsJ3Ey58mvDtoivprBLHG8skshpXbwsbJJxc7ozqvxTFdo8rBCiDLEBPapzPL8svFWAPKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obBJq2bAPyPN6pmVL7hcv5q18Ja4ph37xRAQtsD5bA6AYmisDPBLW7iymNBw4HLDSvFsG1nGz2rk6U4CgPeAmQu",
  "key1": "tgvQfK3RzgzfP21DcYjeGo9EzimwVjYCy7dJxJfsvH3wSoanBUmWwSiACGzya1Zk7W3Kxd66VpTBa6Waek38vXx",
  "key2": "2fBCU91pJYQjLzPGJm5Dod9668ZAqrwBaJ5HQYq7bnRrPh2bYe5GYM3MJK4vopP1Vj4ADo1PUHaBVEsCQAZA7YDq",
  "key3": "34GGCovAuDdjoUVXn2Rnhgkjaj7ecVNAWauaQca3y2maUUDJiDUqV44e6xyfhUjUcdkiihqi1BVtPSu7QGvr6fkr",
  "key4": "2jAbbbGzi8S5gPzRsg2ZRJ9XuRiFtBsKZNV4jwJWGFcCm99fEWYngEWyMnDrVigVBErWtxbqfWoMvzws8QrX2zGp",
  "key5": "3RcMt8HwuhbKwWCVP83dtDBqjmCjfxzdoJfWbw37p4vbSNWJZVS5HRYM5bCG8zHqPJSQT59FRRGmvbPmEPgNEpUL",
  "key6": "Lpi5n7MiMCiEyCDqodfZkk2jEvz3KYeLioBWRvKPGk2EAiuVZfGJb6PY1hz7vMDMvnhhHkyLTwCXZf4X7pJbM7f",
  "key7": "4aLywgavxFT51sxyiNvdYM19g7p16r94axGpttT8nDGu5ZmUs4eyMKztCix1oX47idqUAQCSfr37zQRC6Y4bw6cY",
  "key8": "5NGKB4ATL4SWKsWnr5zNgksAxxuW2CpEq5E1aqVo4rvib29KKKqXVhFBG4WeFhLX3VrGFAZTssLHhNv44V7QGmzo",
  "key9": "PT9QXmjfcKLYZiHJsrVDa8SYcpTwgoSEQyMNbEnmo3NqCZCpViNh76RhtxwVaEvL9J9km751Jjtg4ZQdUqC2iTd",
  "key10": "4irir1WkaJRsFDuJ7uBNLMQqgS5HptLRq3KEHJwX3PvUwadZeamNWK2Jt4VoeocvLxuyxeeAq4pquj21g3NRDmN",
  "key11": "5WodqNUT7FM8SWWPtrz1r2RYcGVyT51jXLxAHSpyMyobkyrpHL6BGxLkS3gHq6BXrMBJHXRvwDPXZkXynqQQ9Nan",
  "key12": "5AtUqqJWSY6aQKAJH2H82qh1nfKnVk4zDwhuS9ib2NVqTMNw3fu4JemLqaCgjFntACL5BYDjTqZYtqqApCv5c4ft",
  "key13": "3BSj2quBxtsjJU9MKCvWQWeMu9HfPCjJfVVv2sKerRdrCgVGn23ioWFVKhc4YeXfUmqzScBB3C9HRoAPFRbW325p",
  "key14": "4ju2kr6LFao3aR2KKPXcMsEJV8n8yX7A1BLxoPH5J4gwF49Q72W4zNbYY3pF6FDPKYsEpdYfTQhdNHEitoMZukrv",
  "key15": "YAFHBkA22GMzB9ypoo2ajHAujtvTwotV3M4b2PgoENXQZLFnRzNLMtrGmzrbnZTyPeRQaU7yFGL2ZMu3Pr3rRVa",
  "key16": "4aZiamKV9jpAT2YomfqMGh7ugnecgQuijkE5AAJi8cqAA5P6GUJkEWMr2cDsbaHyECyLLkgk3FR32Ydav6dVUYNb",
  "key17": "3wNrfdwb4BqWXLLDGGfrDuxvmqLSqjdcXfUfjMFC2xvzLakLhegbwgjventeA1HCqpbngKytBWquo4an9tHT2e1q",
  "key18": "2Moz9o1P8mPAydHbHrWDCEw4qTcYgkdFqqXe5aiuPcMbr4G9JReSS3WNqK1rC1JDXdRwwie6ygdEZy5Uei6xE2zZ",
  "key19": "5stKKdibCNtarenxKEeGBX4etu5Kg4vujZX1XcsjmWEDB9qD22RcAmFyXtHPsPfVrvvDgvE3z4Qntv8HA8uqTBRQ",
  "key20": "3Evgs7wzYYhLJXdNg3AfmxADDJRMp5WTLkUhoE5UxG5CuxWg1jxAa4jVvrbCP9TGH1cFQQVa4WYXCosY2qd77RuP",
  "key21": "39dgs6bP5Teo91wJpd7GuSE75yWKE6fq6Gypj6n9B4FY96NgfY7N3VMixZHN6er46PKpTXSNBK38H8nCyminRHm7",
  "key22": "2Jz9gQRcGjq5LJEhWsXd9ZYzaXbsiF8E6jc8aqgbNbxohKXHsspABmLmUaXztT1HMat4X7ki3HGzF1VDRREi227X",
  "key23": "2ay8TeT6bp2me48f437MLQkAV3B6iiZqcAdfGJjXRijzuDducKDepPWMnjQPgHANzjGPjBVPjhd7CZToLtDQ34Gx",
  "key24": "5nFYjTJFY4wvEYwziNcQWX6FEnFTp8voq2D5KgjjJGxNakuri7RhkDSUGXARM9u3RG8SKjr1Ycac6R1qTBKqBngk",
  "key25": "4KkfkZiWm9HNPp6YZMJnFyLjSWiLVwJDkRnYxSijkgFP7kkmBs5SPKCBFwHvKgBtajYDX6zGPXCNKEVHDv7qCnB4",
  "key26": "2aMogdonWpe3MqArHBMRJwJX8ntiAF1U3DfCpK2D6GM3kqLNnByzgdYF6CU8RsNHn7eLh8RsgRuwntY44hjDy1gc",
  "key27": "422d36eCzcHj4oKbQcWJWtiefqF72o3wWp17UCkWiUt4CAqzFkWGKY25MgUkGSd1U1dgGMuB5p1q8Z98zRzhCQ6X",
  "key28": "3E1QxvLDTD5bTFNBuHsyVW9DcmCBhLYemj1USAuPCFheUyJ2Ne2u72oWHHjiw4VLQ8BH33vt6eScDVk2NUKL474n",
  "key29": "1XhaRTWcS1XL1ydg7TZXti7CUsNi4vkXY7dbcKJnT36T5r7NgBuERAyBPr4kRBGZRVLySvDmaxUWL63Nop7ppAt",
  "key30": "2LehfRXRZztgK7F5v4konrb9344Q62wRKbLyYjS6orSLA1drjEmAKZ7HzEVa16HSdRo7KybKetM32RXKSYo2qkJd",
  "key31": "2ZDmgF4ZBtcn39Xmx16MiLt9T1UJfdXuoC2Mq9e1bXhL9AhK37M9TSoWn2jJLC8sdgHASACBGzrhwULwJQGMw38Y",
  "key32": "dNmVBTkidDkfWrMtzZ1w9JFMTor57fyqqpTaicxCctj1LkVeQmLztomfugXoa5sh3mQ8BjfqrsrMS7WwxNEfTg7",
  "key33": "67AyYbCoTuGsCiQR6WXptstDmJapstK5ZWwGQAysvSNRFvbPvN1QHA4HUtCbGMx9PL7AfrqJtWBYiuiw3J4DVFHC",
  "key34": "2iVvTUbEXUdnDmj3HLpwYpsRq8zp8i6DkGAsqL8Nzsoa4twZKpUKuwqdzqeKJvEUf85p81aM8WwPH9Wwg8tYCVbW",
  "key35": "ETZYJyFCUegyonvHw6gjLYzm6wUVbj7CTtShNtN34vtPcmtWZnfdbFzEoEfFuUTB75u2cB5ueyR1sU7sDKz1HAm",
  "key36": "3q5TXkUmfEXU831m4wueKCkxeMacGgcVzXohZbY6dpSrb4nhDPzs9SWLkPotdrVWPZ2yGKr66ZvFK7U5Y91CSqBJ",
  "key37": "44VbXTYDxYxoJYRatNGHWVseQ8bTEzfGaQZTXnFoGHJkkM5cxP4ruhYKcx6MXtLD1fvHMG3ZXfDifdUNsU3LEaju",
  "key38": "2DygqF7CsbB1cs9A3iPRUpQoJuEZjumNU3uKJLFwTbfkfR2xG7R4HzQP7RQZ735DtrDYbCxexqHoLCKULAvbiYjf",
  "key39": "36zJwp8jiqpmiDq8EYVFKr3RMxS7rhhSs1KopujQ5HXGKVa3AzLWJ6ksLxQufBkPVGofqGLqpraGsBAyU7wS2w6N",
  "key40": "qCTvZuMnpUbsNQ9pGxjfsUyBREZ3DVZKtaiF1keWopGGTkrwfmN66xPS9dSkb2YiyifoAyBswVe4ayDXm8XV9nq",
  "key41": "2QoiHLkVBu3veTf7c1dDz2WcbvcD5huMwcRhQZxGsfPMYB8tM5J3ihHn8omDxYphwmAmhsBXP9DbmcPFsZMtbcH6",
  "key42": "5b5Y5sH5J3vQptasLHeeBCpVmxg4znWDRizDcHLMikLSAPbFkdrKg7H6kaDGQxL3J4uFMYLEYZZPfRaC39R6KNL2",
  "key43": "5ud7BsM9tCXLMtXeadneUXDdGFRhx4yyYmHZQH1cmPzVQiWiQA5bmYY1wJJ7yQqNz7YbyE8CM1YcgjrHNqjtrCoY",
  "key44": "3Y7r4PXK2uuRa5zGYovVh6DE7u7GrryaedfeciT4sgXpZRAs2ony5SZweMxeLhSmVYhKjVwWHMMREJ6haG5cqEXi"
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
