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
    "5WALM2g2MBs4hGcPESEjCdb5za6AJ9PNRs1TdXZCwYDq2as7WKCGNk5svUBCBSCikqZj1UgZ4vkYHTw1iedpoGUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CyuoUQm6t22VjsgrUKNS2S2hFeGiGd9E1kNKLJ1kp8r5tzcZLFsGvPPLkvrNVAXmP311Rde7jgM1g3ECHYjV8d",
  "key1": "49m8AbyA2KNxXwpimoGeE5NuV4nPW5vZe16BJGtmS7kqoPC71wJ1QYRCFrfwVvfU8W3p96Sdm7cASBUNyWJMujSF",
  "key2": "4iGcPy9B4HQHSUUTRf5d3Bpyg2uUS4cwk3uNKAFshwfreW8MRV6wC6whPRQ4EKzCDnEUh4kPXo3oSRfXSt3etnNY",
  "key3": "64sgUoYMySpinVci8RKZPGpn8zzYyqEsZNv5ooZFh4UbrWPN3LBn2VpvuKMh2maptwxps5FoDsAa1TfjP7sU51iN",
  "key4": "5uJKysDJhqE9DcS1qfzs9sWq4hUTdXdpoLxgTfJSmyeG6w1P1V8f7LTyz4jtr5rpML5L8ULucAq4dq7SwMphArDP",
  "key5": "2mnxwuThtpRLd9JraovLVNaf1WNogNh9K3pjCBLdtevqrvvNwbrB713TiFLHNwXZJ9cFfJw1RnUwnYBkWJtqq6SM",
  "key6": "2m5Ewv7KZotTyF7b9tg2L1DKJgRSPqdhuUYoLJRFVhEU8hifMSXdSgFhBsxz1crG3NQzk5FGAHAbR3a5AjnLqpu7",
  "key7": "3NpRHB3KEChwgUUSN3c3Qu1dNKs33RraXtdKcB5F6FbNHsL9mk4Z41cR9vpfPKPWi4numtN3XJHhgpfTqP1UAPtT",
  "key8": "b9qB41wTTt4mKzcEa7KnYDC7xjquBN5NbPxrthYYEZF93vHrkAKDx1XAJf65nDaM179zmkmQARXFzsPAPnzU6nv",
  "key9": "2pnHxiL1Gxc5CEqahhqWTqhVeb9Pt9GnnfFyYnTMjjhq161j9TStLhdHopSpCaUUP9qnUPcwTL4d7CqtQLd2un7W",
  "key10": "2wVG6JP2FDCCL6onJk35YRvZrp9kuMXbjYiknMJu8E7SQzYo6mhDzhx4fi8JpogPXuiRa135Jb4EeE8UWz9Grf4U",
  "key11": "3ZtU9YExYCAnSvfUSQUr3CJRCgKhDEh8gboxi22Kemi9ogs7zNikoVFNcVUikeqe8ujEdPTudfgwHx6fzWsuR54b",
  "key12": "3acqDSAhnwEPZNy9FiRrnkjU7DgoQ36QLyn1vqWzmMY91raoxXkFVpAxhQsC6VAZZ3X2SNQhWKD9HmdrabdJBKp9",
  "key13": "4poBb3pMDy6tXYSZpqvH2SStsYDF2p1XLenG7fE47Zc4UFzgpSm6grS5dW26tfifpHXmtyf3Hmysz42BkZuEKa2Z",
  "key14": "5XDT48hniYTLd61H771Pb4S1BKpiYMLx3rWYsixtAYkaFmYbRVqpfw3GLEWVdPAhHKH3WNy76hVa6GcYweQfvVzq",
  "key15": "2ujY9yAkGooEUqKVtSsge4gyu774gQL1Lm6SDEqR9DVzeBUzcKUTw4BYMHobUD7naCtZyYDeqtdE1JZQWDtXjF61",
  "key16": "29kvmDpbZ1Qj7mrpzM14gzuBoNv9rnCEApkBQi3TKbWLPydqYgX4PwhCwtUQhiR16ehrRDUHeuS91WdiLYk2mXhb",
  "key17": "2bCd7XpRyNNwe82uk2Pvn5Fsi2uJYCztXwhvHoTfydQj2goK3pfNQXea9XLaqHSER4oxUaDugBM6wtXERipAAf5b",
  "key18": "4ow8MWZPsm2qLN5hsmotV1miTD1B5JLshvRZ2wsJB6tyyBNp3Rov8NnMtGLjNiC8bLxGFdNyjt8RD8LUZAAnGnV3",
  "key19": "Qrn2NS3XRcQFn7eqRCh9ncDWxTwWR4JybYjyeZ7Yijif7YvXntrQQwoJqCc9SCQJmWDeGBq8tVccVUVCTF4QNZv",
  "key20": "4ffhAtoxHPsu16B9QAaL9JNUP2XcVWswoX9FUQfx7WJJvgttHbgzFGtzxQ8sNx8DcXJNVGJ436iziQqn2ALzKWG1",
  "key21": "3S9VqmUaFhyyweoVAG931wwHxYN2r3rxnNrUj28g95ctzwoxtXPmrMjxjVLynNUi9GAHJjZJBvZjcm6bQV6faPCr",
  "key22": "3sPUdJZ9YWUkmPBNR2aA1V8T3CTdbVtEKY9LwnMq7vEGHX3s8f7G2fgNduoquNJzs8YR1ThmQJgN3oMm4CF1nABJ",
  "key23": "4T7oPnoCBuinTnHocHoC9BHGrtGXMTXfiZejFi5rU3AFkjgR8azF9Xpqovzr1uCjWUbxY7wqF8amxRqjHgz925vL",
  "key24": "t7rYv4oPv2sPbr2Y5okAGqJyopWWAah35BNoHQKwLFoArKPxnYr2aojneDBXLD4ZS7Bqd1t9wyH5PmSNgKfHQa9",
  "key25": "2hXY7v3ZjmAcLUmdtrQA373uMsjv8mGXFj34AiCx47oYge4FPgj5n9kr6pHfhe5wRsEn3A8TA7NrbTrBH457HqhB",
  "key26": "4u1j2me2WNCsRM732d9c8SbVxF2d8A2d3LMLm6AJVV35QSmGwUooRg2TFFcN2htRXgmuGTE4MfphEp76sB2jx8HJ",
  "key27": "5FcddFhT98U5zTdviU8EauK6KC28DVwa5g1efQCJtwdDha1XmCZtMpUDHFBzeBEKaWZFd9T738GD6BpvjPBdqogX",
  "key28": "4oRRaw2BmsmJAwS4852htDWJahJAkCP8enUB4hG8R5kTo3HngP4peHep3GG8374JbHr4Jvo67pZboyWNN1AavNv3",
  "key29": "59t4SEP19nVUSRpE53ebtogWLLqhu89Pg3AW55jNi4Fqi8seR2NQBqKe8uGMG6Q8AyWcXHU8Qu28cNP8Qdypu6dq",
  "key30": "22mxur9r1HP2UUb9BDKS3savgC8pgbD45XbLZPuKTMtgoDS8Q1ppVBbTQsEo5RiNF1hsfckSqhj2EneaadDvrhiw",
  "key31": "o9JQQf4XcEoAHGguhHinfEFBSQdFJ74YYLuQaJjehmfAuynQraREdNBwjyboHyNghYjGUTtS8XFFcfUAFjTvRT8",
  "key32": "2pxt5QpkGeCUfTBjqqTWWnz2ZuUEThPNLQ4CopHvGDH9YXbtuguvTuKNDCJ64hrC2zefGvySiPLDqg9wovWJfS5w",
  "key33": "48ZZtQsaZC3cim7pU2mcRN85abP9VYVS91ga93iUwbo8cVtmohWi7EUamfDrWgEF1XibA3Nz2N1U9A77VmyUbyK9",
  "key34": "212vgMijGzjXDFKiSPh55ywWvSnup6e4XcVcF6UnQfZDrzg1kuxKyxq3JA1pssqMpSYEBbfKZjEAaRTVNLwv1Grm",
  "key35": "3yYDfDjtB8wiLYf4PbPG7FyiKa3r6aySAQnTwgB95LQNMsooXM2CrUYshTc9Z5s3qwV1JgYp1w6uLeqaudLe7zZa",
  "key36": "hUzanPPiWocVGsXi8tRyQmjAwSiFWuhZX5zPiRvHR7Ygp1AZtZ9ZXvTuqt9kQP3Y9tbxRFLjUJaeVDLYbATkmeK",
  "key37": "25eo6uRXk46tvzde4rGnKvuPFiKMzvt6VXFjWXTaBcGckUSDQMJCdvTaqGUPyfQNp8MvwbymRFxbojsEwC3TpXfq",
  "key38": "51M4NKFcops9yS2QTSeMMjBMmCX9T6WbYnZrWdF4rViPkviEsQt8sfXmf5xTZ7aG2m1kteMzGKpz4hx582QcsLAK",
  "key39": "4ibVVTgvXMAoKSYgLkPUyziUKixaUe1Sxg2deTT6dSMXr52Er53i5ybjzfZg47Cyd6MreMYcsiLzx2Pdd3CxyE7V",
  "key40": "2xh7EH3BUVhR6NdmkPVdax4wuwJfVZBBR9t5SsFoJXLs9ASJgpYsYziHPmL4bJfapXbRPKP5MLu5mNZbCvS7rmh5"
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
