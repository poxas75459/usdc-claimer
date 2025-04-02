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
    "5YFxTVTU9uFRfB8nWGG43yUmR5K5HKUihDfKeojFKCENnaEziyeyj7NNnm3jWiFzYZgGjSduH95r6xMAq7ULMZeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Eg8yFTkRx8Dta3xvF1caPqApCJiTXxB34wGZ2atU1HkJwKAxokfJJUPehuCTM5DrMFPy1GtcFc1Forpk2sf47n",
  "key1": "4tKmmkjEiAZ8EyiUawX3P8hSAm5XayFWtRWVVaLxUjLDJFnxpbY4h1E5mdovw9qwbShTyURDmSUS2q5mnv4bwZ3p",
  "key2": "2GHoQkLhRN517x1zsiiME4EqBiDCKfVznAna2QqzZMEwtExvEu9hMJCiiJUHKgEmPT9EWxoGoiXsHf5JdAXByN3Z",
  "key3": "4DLHoWv6TxcbCSiQxryx9RCgwWYoxouZdaiS1ohpQ9r9YYUf83rtk8vWkfjx5Gpf8iBsM1BHq41WUhJQYYHCbTaR",
  "key4": "4NFhjrTxt2HaJfCUGUxAKTHgzBjeNwNawtvJgaAQYzzYHk5r5fxHbD1B3HhrDUmwNa9hgiaEHjcdbwagaxyBJoH2",
  "key5": "3aZQxmFdWCN3zDdXnth92HMzmw9ZniGqrjVRm5zuL5pZFu2cmYVexKqMKLaF5xPThbKrYR7xW4ArHgibD5vWHtPG",
  "key6": "34HNXpa1tsAwYT5WE5NY7G4ggyeMJGEdd4obdDUTkq8u8nGPdVkxLizYsFCvLuMw5tvbWWJzJUQPGobozeG86AgA",
  "key7": "4GWW4ZNFmNd9Vi73z9YQEqVznsSFYov27DZpTdPDTkAiDcbNTAdpwNMc44CaxLuaLox48Z2JdGmgzFoMi28ZswWz",
  "key8": "65Vn8zeJ6VP26AURSZQZWkjMw3sUFT2qhWfqkB7T6xzkjP94Cesq1tfQe1wvM9yEaHhmF4e7RDn4qUottY2xJB5x",
  "key9": "HuPsVUMMDMjXv7i2LAG3hZeWeBi6zjiqnAQySnxJhLBukdisLF891fHAtMmszEZ4mmWBZYYf5jGnAxgzM25YBU9",
  "key10": "MG2xcaqeqBoJXoV78eNVjv9n9SWNnCumhRwH3csArpbHrHEudJJhJ4ZhqWyoarnr1mb4d98fq5vsFN8NuyEguJo",
  "key11": "ynXpCHC8Eq68pvXLp8FFQKmHvjeN4jAhCbVBdCo7HrfNYnguqp96khJxbhWuxhvhxB8m48eTUmmFeXzxnLR1Ar3",
  "key12": "5Er3jRbGU7hwhF5ismGgVbFBWRRoqJdSPD2Ry6Wthy55dUi6jW3joAn68XsLkK9yjNGDpt2UpN6f7Q5QkszSyvfH",
  "key13": "3eiD8CqyjameREXcTVsNQhwpWBo2FYwqyLp3LJXsVBoLsEM2ZRYorY94cABhmCqD93G7kqpWq7YSKhBCPZyKcpNQ",
  "key14": "3RhPB91ojFarpCW8V1eD7pYkCC2yi6PibeadUYXJ52RD5snihCv6khYvmbEioDPSBswQGVeNfqCSQVCtHtz3x7tm",
  "key15": "5hzjguFwEFjN7rDeSaq7v8VWchMcb4xTB7pNofCeKz33EZiz5kWwgapeEuvfGRqxAQA8kaFY3djcLFBZXhGMuke8",
  "key16": "5m3uMJDbdZsv8icPQsJSMahDFgmUqqxSX2atkcvs4FekPtFBxkFWkbQyg5NeMiMm7mg5JRLFyosfPc3HDuhZ9yhV",
  "key17": "562ExfSE7wXTDD27q7g9p9GuCPYNFQsCifFD91WweKnDEcmd5catkLrc3LUieu8bsxBEVEDdT8y4eXAHq9L39B5L",
  "key18": "2PTaP4uRZHfJ6SJgpdFkvie7PhrjA7VxvW1F6WJbuabSLHHo81H3mNLrtHMkfXkRZNiooHLk8PedG3rd3EUBDHSA",
  "key19": "54CeApmjzyyHSdJQCk4Xf3Xa7zkef67QPw7cocrAFZ6Pzz1fF6J3CrEwiBTWDozUrSjJASex2WVU6ZuATYrsfg8t",
  "key20": "373WA8r8ajG7x1TehveFiyPiyV9k1tzJYFvqYLukVRyCKJ2d8V2KBp24C8Nh6jHV7mqTuyQ6eN3kbCWxNmG6oqX",
  "key21": "nTRvohcV1b2nZifr5cAzNVy8BNpznA9syz7D2j7yQp3jDQH8gN4Tnat9KQ9oR8DvPW1ZNrqnmpbwMtKP6YYyiX2",
  "key22": "5WJLEcLVNUWVex1g1aEFuv5a6icxnBySAkx3F5MEZVjLdrWNxtiUjxyEmduaDkjDPmsBcVyAb79d7JWwkWQZbLsD",
  "key23": "5mBmh52W91G797h6ZX9CQ8yDq5zRDf7KjP4LUYYkvghDe3cWo6NADGHZGkYrQMco9vCVvc9UpNH6T5f7dYmoPgLt",
  "key24": "2bzRC3W9fTQkpAkCsdgkhLQsjuaj981L8Uuh6KWoDFhbP3vZHfQVrNBAB6N8fqbzqvJFNZx2M9mdFshp6vAYPprd",
  "key25": "483hum2CBwotzqzvL9UQ1Z8mYzeeoBdqzUzefjUvXiQkZ4rxrZv3Wk7jtbekNhLomeQsbpxHGXoT8L437nUXbZXS",
  "key26": "2EMf91Pgc7X5EoGsWZAWjpt6w6TSgNQG4qi7LGKSu9fJUKSsp6bTES1TaNGSxTt2q1EXy1Mgiq6bRHipmPv2vXhf",
  "key27": "4vVnXQujKMBpiKcobEt3gZauSMx5itf7gpNPEyZjS3pk7xBNoSFiKKGyoLiV3ssjRau294agf7jkd5XCYGMyTWyV",
  "key28": "puMaRL8h6zHbSvL1892mkcxKymLN5YHjjxCWirPGBAgsVXsgZ5cprLj72Zkq7oHceVJDAKMYpsHt6KH5jbe4t2C",
  "key29": "3A1uPkku6bhUfVTyuaChLHuYLBhfeCqKe1UtUTe8wXgQAnH3dzisYjda6dgBAmMm933kW3NZcCv1SQDXhxk8Na2z",
  "key30": "4zr2iVXArgEDrYUxQmkVQiyExwKmSMiEdqGRTVi14SGtMdRcMW29xZzfEBi9AyAPBxghYbxcQwgF2vH3C5GJDYVe",
  "key31": "48BjiR5gtWHBJ6JHMtsk1Yzpm3uEyPJg8rkVg4DJF7FGgoiaqzRWBojtSJAKDAAfGc95SrL8BEzdy5CEy71sMDaJ",
  "key32": "2MNp7Mt9STAwxuwqaMM718PbvtRU1qXfaff2hVJjSiacNfxT1Wue7HdskTU5WqWc8tTNTCqYAMSemJD4aaaDk2WF",
  "key33": "2VHcRb1T43gtQch5e2wmGVKnnos7nVK3Yzgd3T2qc9qrhvSakeawH4VfHkzUw1tub1R4d1bDjkqVWR8kkQ1CD3MY",
  "key34": "5TnWXXsdr1a2ssQG6WfoL1UTXBdSHyzvcFVvnpz3MNP98WEHoYbqyiUYZ7twwmtVLWWDA9zB7Mo8psCtRPiRXwgv",
  "key35": "6hKGYhDQDyU9JPe75mbrWhsbQVQ2jSx2b23w7NEZxJfFD4DLC4XFfZ8GRtwzTGd4rzhyksa6cuqF3Rwaskb6cNL",
  "key36": "5worhNsk2fDZrZVxhb6eWdpTDX6FGkE17BmnX88jxPUdyHtE9TM44Pd4PEni88FX16j5jtkCmB6a7v5kkk3UaZrs",
  "key37": "3NGu5vG39krUaegeTpLEeScwyPYzcK94YQDKNBU7mhi13omWjxKob2yGoNYRGAehXUCRcLsQD7ktqGsk8vK5KNS7"
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
