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
    "51ZM8x9RKzWuEAP3vzS3gsT1bbozJAHqR2Gwt5E6ZesHDPcXuxsVMNYoELuaE74gWoAnxdB2ewkjJTmj5iGwUSbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxCukxU6VWfiFtGrWokiVULqWtHotjbpwWXoSzyQ7txBxT2E8PMRBXYUueueiFw9dofm97eYt8raxYZzQJG3frP",
  "key1": "5gyECBsTeyVDzZMA9gdHwKmkNPrCVrLQKA2SdRFEjtokNfW5kzn9qDXwqUgXj9sxfahbrhDiPbNSPzR1V8iP8cAG",
  "key2": "4GDBr3ViktPCjtx3D2ETNbXZyLL9FZJMqs1qWVufrisTrqA9QnsUrvMosdVLn8RAuJ9Guz4TYbA2KVmX5RXkePYL",
  "key3": "iUPcmrU5dwEa1k6kr1KSSgfN4KKkTMVDPZ5cgUgL1aRCp7zADBKC8oNsk14xMPk44Bp5gkQGxDQ9jRTkAQ1heMJ",
  "key4": "hoFC3q4HobhnUYGzniUfzH2AwUBxvbCzkkH1124h7Wy9bvJnTzJ6eA7ic1zQjvVFpN98ncmfRPno1y77y8ynuVJ",
  "key5": "57gDfuqZRyofLCpSRxifdTjqZ4zYaYNhybmPDMrzCkhRGeQGYBKu7jL72GMG5B7Q3YF6kVYwDAGAi4eDdXPuJjV7",
  "key6": "2cJLo9gTLhgNzxc5b4G5tEJHTLDVEgJwXdZeuuzxgzm4ncULC46dbVeJUqrMzANUKzGdHLBQmHL3t8HZUqmrZJNU",
  "key7": "4kBh8TYUg6Ta2ZYVTTN4GuwFRpkSHorgQ9zWKpS7uipmLQFc356ZaMcsCcpyjJqfunApipaeRBrvvZZWFwwWiC1F",
  "key8": "3JtyqMFdYJFu41Te1G1rninyzjEBwWAPb4e3h8WCSkgqxnLf3bE7DNYNpsztStYaNxgFVNYHjMHY6qiibG6ZYKKR",
  "key9": "37YXLuz739pBVUrvebaDnXrri5eEk2u4qQFTCUJgb43NKewtvcZA8HHZmvq5yiTsB7rbL2UiaA41NMVmV7jV51xZ",
  "key10": "3V97ckz1c72NqgCHmToNbcciFGEQE27TwuopmcJi68YRzfgAL5AmMviqgcR89SgVPmRWuobEivtKQCmgcaWRuxsg",
  "key11": "3H71LKuvsk3DuSKnhqZJcLaJ7L7xDnra5nTcDn6guihY2Ja5URDwe4WzMk3QGs92Cerf7d6o9D2Vs9761B3wE15H",
  "key12": "553FZJb4DevCqujHMPUQjpaarGsTkDUo3TVPvbcPmfhapWY6jgq6ZEXLYGA3MDobdYu2mmzCsmLjjeCfgUVamFG",
  "key13": "3RRe8zmYUmvHMZiYmXqvfwmTSZnuoqTJPR2Gbp2msM4zVS9tzSqVAY54S2B3PeAhbzq5eQydqwRC4m1bYZJZcAG1",
  "key14": "5SoU8PmPqLgSr4w8iRQSaMmDJfsPub26M2vaukzbjFH7z3e1SQKHpkU8yyJVXEAk2NxrkjACkcNryKCzVyWaDMqV",
  "key15": "36yegMNGC9CkczUxoxJ2Bf7jWnb72CFhVry2UERGyLtwkAFB3ySUURgeewBtVSXzM64q8KuySifogw1DcXcBBVLr",
  "key16": "VdwPX6wWEZNxZbh2c3QpEkYHnoDiVt36AyZ9VCKqLEEDe6h9sYSNV4UdZyJrgymphCvgG68o9Dwaej5Cxy6DZzC",
  "key17": "WqinJEEZNNvJwfcVCHJ9nURTQWUwvGxRMdSSVeR47WyjHbxZGmNpGqCF3v7vwPSHKBqupWkdYB4kqePt3FPNBuK",
  "key18": "34Hk5Msm93MJSh9aVhpCvKL17oSVF86phCa8YBoSg7HyMrFe5JgUz3TLJHWZJSw4EG9cnNNS2YeG4qEChr9whEcV",
  "key19": "3NAQR69mExW4Fa3KSiQq6z4XhNGYkAwc6RTyX1KXeDGCd1X4bXarkr3UWzd7G8b9MwEKwPHaqtVz8x29QWSBD5PS",
  "key20": "4We95ZkUXtGkGAKjHHgNNESU9TDZ9ruYhn3AwNrB6iYwjXYxMV9hU8yt8bKdU8zbQADbon3pdiDmhu1j8zVQe8a9",
  "key21": "35rVMdh8HoMPuM6H8RvrukwyTJbeykh5mu9X6UXboeAahRtcCrX2RK2dFK6gAbCoTQFyzhqdbYaRXgvrvzriheT2",
  "key22": "2MFAskRzhppqLZavUv6a5u6XbhBcJ31ee1nWSdHAZxxgd38ts9TqN8NkSxpMraHAkh6RGkbQAgzGeSVQYnvwSLit",
  "key23": "2XLWB5CZ1EvNEFLqnQ2hY7DqZkGRGH8fp9QTz7vkLboD7YX4e9JKrQRdjH47dQkWSRBegvSQNnTLPXtQVqRHfkxZ",
  "key24": "4YqFwJMKkh28ApPHqrE6XK3mxQp92Wgd2bC3WZ2KPmvqgz6YSFMNpjuCz3ikZKAH8U9tLqjAfHhxTYdUKJA4nmSS",
  "key25": "2AuxxdvGQTzAhWxtA5EpwQeLJiTufsCP1pAxnzP7wUUd7hQ6QQh5dKthHoNj2daJcA9wYaqevqAxTGZpKZrhv15T",
  "key26": "2C2n5bg7NrujtHkWzhvQAgXCRMKksx1nuwkyss4HyBYbZ1u7ozn2NJkXYCXBMpyyb9AsP7srKHC5PYWJYYvYz23U",
  "key27": "4MoXpZTPfP9UCWdSom99mvmgtAPn4KJwk64ovsaSiqWExCbNGeRTQfuUMQ2Aa3SqQUzG6QUMcJbNdu53QkPJMEMf",
  "key28": "5Xok1nbDsR8HhKML1cbzRkx4knaNaHnnRBCcZj5gfdptKtTwphpnSTjZfvAV4z8k2skf49ZxdXyCuBQbrRFPiKnP",
  "key29": "49fVUbb5ZJexAWn6sHrtW5B1bWtQVuie4P6S5qz2KEz2bkA1s6Vi8zE2hzMKtoarkBt9pqt7AMJTfxcTub1NCgDM",
  "key30": "22AkFS3J4Dh8sm3y1Qn1EtV9HtcvMpdL8gPWenbF9mXfFArw45SxfC9AegPaEUT1BmdgQ1BYRpC2dXTkFSsQ5SAj",
  "key31": "4HV4nfjjreZ6BA5jLjjg1pXLKcNX7rkChUUhCYmoEyYr5qS2kQ1TKPp6WW63zNEo2QP65KTqfi7NSGG62fDmE6JR",
  "key32": "5L9GThNpXW7W298b62zhYyJ4BHJM6EKQ7yqXUjL9RBvk2bNRtQTtN4k9Zp7NpXvbqBHQRBNx6taqg5gEWxKZUTsj",
  "key33": "2Cx9ZGw4K41oFTqhMZPdZptsewjHBrRJNPH5h1eCjME1KMwk7f3G9DyfujiGkGUAzuGfjsgbqevMFu4na1NaL4Xm",
  "key34": "gEzCQ5Qe7Y1VL1YpPk4LXF3UvCm2CUuQzLDMjnRrWYsmm8V77SYpbaTfyQguYFHY2GaoKE5vbnrhNYXVzkD4jK8",
  "key35": "63rTxx4xHcd2SWhgdYw85n3LrtrdVoFzXUHp373YYT18SxMXktbTWpEdvyowMqrvoYV3B8KJGqoMb9yCm5ZZFD9U",
  "key36": "hv5rnE3T5u2oxeYxSD4SdCzfUdbGzS1WjDyTPGU9WGwg98EEbLqVY3mnGHjV9siqwnfYLGsJUy8bLSREm1qH8bv",
  "key37": "28eKZoFZx87FdKwuVzwjfZscvMmgNgHN2wuW5Nzp4erf4S8zwxR1UPyZGGetRWx1wM8HJFqFj2ZNStUveEXc9ZT8",
  "key38": "2aBz1vgP1VaVKC1YK3QuPnnTH4N2N6Se3AfHkzcDXxGG7h8P1J6djfgP59zskfk4562pSHXutiDTU7kqu9c1ZKEr",
  "key39": "K2AF48gJTHAjRZFXEMAs4HFNVpeceQBLE3L1fGtw44mnwznjhPd6etoztz8QFgPULktX62ALJdJXCVTQFkNLuFv",
  "key40": "2CCCxwaBd1AV5yrpsnzBTYqfdaQeaZuwY4pqreUvFerWWRkgepLGeGAFwpe2MHPp4gcdtRA4rMM3N9XFhQQ3E2zy",
  "key41": "2pmRMmuRjtQrtxT8jFbrRacqjeAGWVa7tgMFeJQp3LtnXi5jeDeKXX4ZsAUqy6GLcbtgJwm4GE2it3JjZ43b4zeH",
  "key42": "3y6jheQttzLcsfNvH8kKfN3Fy9tcoyDueRp57XkqVxJCNRCNDYR8oGKBoyzLjJ88iQ61CcoAt3nEEnYjp5hneiVn",
  "key43": "5JnhYacuwgc6XuBndbLJSKYA8DkJ5Z8rWqZUGqv4W9T9Ftoiii2PqkSPPRqSuAQBzN2MNu9agtBLsxaQ2E5PcAdk",
  "key44": "5tNa4C78vizZefebBQFyDQiTnGTsiXddNB2idTC14WZDqpqo6Q2EjBRmLbSzQaFvFG5q3vhxSaFVnt1nXs2v55ij",
  "key45": "3LuGWVXGkJpgiZcR6azpnVNA8FH1x72z78cBYcxbpyEaP1PSufdAWAFSAkFdMFZG54gfqXwisEFxBZccaSKbzn7s",
  "key46": "3btN31KvzXiHoWhLUpu55DKif5spVMtd6dgHkQq4sWUizXFtKNtMcE63DNaboei8PbNiAs6JFoguqAQUwjKJdVh6"
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
