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
    "53n7jNeriVdGDxjgvyuA2Zmp9VmozSAuKYKA2MJLmE9d8KNsrjqVzU6fTvTfr1Haf7MpV1R2funt3xmwGwUcfLeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfbgixRgCyr78zqVFZN55sPU5s5FL6q1y65U22M1ZcyZ4gMx485JDpkFgcqa5SbpaSi5MkEWJs13ofXGUPckPq8",
  "key1": "2xe3iGftck4rUopzEMDmJzh14Xd3XcSvhYyzmgMySCvczsrxLBBzq9oUGmqWeDkukgqFK4q49KS91SEnipgryjC2",
  "key2": "2BYkagh4aXkZ9EevMZn5Zut49w5k8ij2oot6z9gcebNqSEFHRt3rCnSPwokUDv8detrvvPPJKJUbZLp6vtnQZRy4",
  "key3": "63a1QCDiKzUJzv1wRPEj5E3uMTtpuWZiQN1UCtXF49Ah9dM4ifH3gFvdc7xhCMQxAZj8oY39aEfwNc4TUTGfXgqF",
  "key4": "4n1CzFwh6UhpifBhig6PZNwY2XzgDvb2eNbbsJggt6EyAorXb1EWt7K66mNEXMdAyVg9tq5bB7qiFkNcR4CcG17Z",
  "key5": "wzz1dKAHvdFpJJjtA4y8YNfkfZpbrjSgm4HhU331JKiBLCfTwqLFejherE9aVZNXik8m3PNZD4639ymK25cBab6",
  "key6": "4feBSCUxfmThqQStstMYWTRZzub625NaJKRXaUwgPYA6Dtx6u3wLvbUUuJHpBUYwpHTrsUo6KFHXwChKyS4rjX2D",
  "key7": "3CCrdAaT9E56Q58S5UrEtZweUDSVtpZ4XP8Frfoo5oAW8Z5ngAt7FXFAFvaqq1TJxSk8nfNtvHnLNV8ZPyS2m8mq",
  "key8": "2384fEL14kaAyqcBk57LRp2AMKE1hh1kAXtjLBVjWhZEsmCF8YdNWj3bZPH6muBzEuunMrKf4YYrXBPNVJNpEtRD",
  "key9": "2urtm3ojSQCgqHWMxX4EC623uE24rh6Ca5P745FnsNHkddfyWZw18KnhKxP9EzPXPYtcpXjapdW6wKHCvGcFLV9Y",
  "key10": "2WqhtfmvBrnmxkTkoDPYFbN7vw6ERSdFVQBvBLfbFCiG8XhHV9JWkFBkehhnfTJwafJLS3idCHZA81cvNstwzWmV",
  "key11": "WGiwFFZTErALz8smE8zXgeeP9X6Ez5BASMuhdr9edbqC2TPwiQUcAmomfycqzhRiUQeEKcTs4cQXtueiQJXziKM",
  "key12": "5VUcesZLiQep5XDhvYW8NygdEEFm1xMgX1MeNhNvYaShANLEtLpEpUStspFtjMd6RJPUN8HJmFgE1Kj3JfHJhT8h",
  "key13": "3ocS9hjuRZEVYLLf47C3EtAATy1yv5YP8eSTw7nyXXBv4ZK8YpUpK7ML9d71y5CSpRx1zQeR38PgKCcLBLWtxCbo",
  "key14": "5NPssgDbvhKdqaC42AY145FKxQyR6ThXZXCoQYkAPhaqtMbNx5CYVD94kgSdc3sdHQBC9pZRG9p7n2jci79TZNDd",
  "key15": "3yeMo2hGmZSZHCPhmnR6MFwm78AftXqVq6A9AWAiJrKVXAJ8rq5SxoEW7sNnDzgwr84Do3Cokkb1sLtv5UDJbdMr",
  "key16": "5YTqf5aQpG9aaG9DnxXixakG6wjoLbAC9urZwz4XmZybMGEsTdtiLrrJJGmof1nA6mH2u4EwBLjFWyJoEShsjXVn",
  "key17": "4fe3PmbX1hdMT7z9anGLUcT7dDvn5ehHW95uESFbxDY7TTjxapH34HM7oZRj9BoiEfqmhH8USJCN86r4eizHtVTA",
  "key18": "2zFsAVFDbJcygnA62jQDG5xJFpRtity9Som8tS2rHpCbDSPXrAEjiEQ6fRgRtFrVhRAj1sX1rNgmXdM8zfCpWv4f",
  "key19": "VZ7LuVndzhRmZL6oMyXZe1cTJ7Re5wm41KVPW3gewAmJEfEgA2Csf7cDR5oPHMgbt8ifYDiTmHi2K7tasiUXLH9",
  "key20": "52WtpGisBBTNu42VgxpsbW6T1AjiBtf6qP4N5u3BD21uKNkt5KRoMRhEcn7wmqycNUsJkr8UoDQDgtGKQAWFgXCa",
  "key21": "23dze1XT4vtt8ME5W2B96eb5kk97KV2f5ngmnuBW4Aeop8LBjhsLBm8cc57m8qxz2e5QjGYUvEmUYaNLmeRUdL2X",
  "key22": "2DJRonJv9BaFTzmyGuZwY8ctShi3LE8dt94EcGsNu5RHrUt2AuCzbiCddT1rQ9redheG5Wqgk8EX51Ptri5SJX6m",
  "key23": "hmrpUJQ5mvJxgqVrwjnePipdp52gxLDovPY8fR5MHNssXL99txnUgJeq9rLcuhkKfsAB3XSGRyLB4JVzHxofLXF",
  "key24": "dYh8LHLJNQizqjPsJ96kdpH47C5iYNvaxShCGwXGSF5MX9vKxVUUHr19i1AoL4Zfzd6DpoRJutr98yCJPE7sYgw",
  "key25": "5AmbaX8T7oXPQkxoKEW9wXsbKyJ2uQyvqKpDLgtmuhS86iAG82zaiNecKsGCy9UBYvjS7A5R69X7py1RMac5ZHKv",
  "key26": "5JwkdzZv18Nuuw26cmB659sRwckFoSKmSJSLwDk59dfSYJzidBpYAu2RY62BkqnyhKwZKj9sZXWwuioqsnBQPLRE",
  "key27": "9LiTZGwzuJDgjisnxJU2prMSQnYZCEJBok9711nY4AbuE8YaKcCTLq8tgqyPBszouQ51D4mC1HEJHBu9r8LEoai",
  "key28": "5BByYrpkNfRHvB5TLajoWdhxSrtdwcdx2xZ52VWG8fqohGV8Y6FDJGbzgNEDQXKM4qaVxkv7GXgzVFwTsVGLakUc",
  "key29": "5fXxX9HvNFu6q7JkRey7xAGzDDE3rLiqezhaWKkwjDdTVVfdaz2JP6pKJkKdGxSWv2TKimYBBXFU4Yz9r3MaJytd",
  "key30": "2cWrRYDWKBcuBuWMtNsfkkfd59uV6miH2iJihiXQLacXHt72Q15FL95kR6AjWQUnyP4JorX7xeZgtpv5jxq48hzt",
  "key31": "M85jtngq9AzQhi1DT9c3KPyAsrDPDSwuAYZjWLJ8i2cS7oZHVaB5dFbZKV23MHbNgCw7SsrW8yHnAon6xnK8nD6",
  "key32": "QFqyctAE2qXdp5WQCKy7d6fNjJERNdvCe9LZEoa7o742tQ2hprbT47jdKi7KSMTbWd8Cv3LJybicDAZ9xKXqKaC",
  "key33": "2nfqdeJYt3cwa2bdEFj7er1mECC76xLMgj8jwRiAwS1ZKR8NuWeZi1B3UpB6Ch8SHzVezyDWzngrJi9HxUcjNcHh",
  "key34": "3aJ6kRXhesVA3GVrYRHXvAF2CrD3gQcSyUD7XjR9d4Lk3yrscbpcyKXwVjJDf1CSyBdUxweAntgU7G2Ru1YEeDiq",
  "key35": "55tXXwNX7BXwqSMzrf2CaQJ4SmEstRaBvoJgSpdcibWLk2c64fv8Kqo3MdKururNMgKaqMGr5z1JeyrbAjMErM2X"
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
