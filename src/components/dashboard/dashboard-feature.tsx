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
    "Sw3sg6u1Yb2KScXgnSs5RPcwkYECPxjp51Q4Tdk832SJJLXCozZUtnJmcAAjgaXsiTexHeZ5aGvaTGiQVjWewb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zr4uPev6K5bGxsS1ML6Binknc39uqHHzpjaupHsUAuhBAkX3g8UdZbyyU8CkD7zHBNN6DPD8GiTtXeDT1SDw6gW",
  "key1": "362kBNRnbPdg1GYgVfoFoESndrgWE4hU7s6N4KXT8pvRvYLy2FY6CHqDNGmEbvytKXZcvQ8hnGSuJV48MZvhRg2o",
  "key2": "2cprGQJRxQdQCoRMAb2kJ9aaDptKcYjRmfbu3vNFeXwXK8oYFBF2VcjThyCNNrNv8rXiyH8avZAwrjoBpvPGQw3L",
  "key3": "5KEffGWggduS8mcduWjjLGfQXb7mrRjoje9bGcJXsT7CcDFcTmCUD1tAvBGk1LrvDfSoQu5L1WHs3Do35cAR7yFs",
  "key4": "5iTTjgfV4av1bnqdk7PuuamMfDkWZg34udsxP2C6hXBvPgx6YaAkpAfRdcHMdg76yJCvT78fqSA1BpiAbEYzCCdp",
  "key5": "vwTZSUzFSZiwbRkvSB1iULuihS8owXzCbYp2bNYnyWUuLWs7pHhQhaLbdMctDgg7zHpxbrRvL44Sf8BNZ3JqLGD",
  "key6": "5srcQHbcefDA8BwhGfw8cfBDLnUVTJRXhCWfKrUsdis7pBqbsZfCxEjXQC4R4FdvV6bWbBSYunfVPoRYyZbTm87Y",
  "key7": "4Gvt485tXBugsJgS6QKUgXy2MCrMP9NTFvBrCqxhLsYf65GDh2kiELM3BfCSYkiZRHQVEXxzYpjkRP7yatyo5NwB",
  "key8": "578GFyiNvS44aeDbnTKj685cFp8AhbgRsRfc6f8EpiPpdmfYi5DJHHMZ6Z4rmgcB3ECmeNZofe7oq91NnpRxf5K4",
  "key9": "3bDrznWdb26ytRmAUjBZu8ustWDrqwknfW3owMvb2umkQK36o8D1yMZWAko29VCGtvEEga3S8pSXizzyFm7WShAN",
  "key10": "2qEnd3YnGgjoytKPGm77RQY1cTXXGfZCSnnimVidGUrJfw5WhMGtWi2mhZDSuBcrwZqBW8y3paiFyPARb2AdRxkd",
  "key11": "2mjAnkBN9ymWhLxJZoHSB58wk7gvTF7ZbC7fMJdftQSKxBiDj1vqw8tbfRihwGtnkumPREeuyG5VJasVX8yyAijQ",
  "key12": "3t7KZMrLpeYb58RERheoF9hSna4cNETmwTP12cLo2S7pCcm8SHHunWyQBfzYijiL2AmbdKorZP4fbc4Z8DZeFW6U",
  "key13": "4hV8rpiukReq5etSssjBeRokFY3SnozQqxB1fTD55cqUmCjVu1ewchKGJTiA5VKp6WRpfuAtEomcpKoEFbQTsvQL",
  "key14": "64m3GVJGr6di8wqq3XSKHAWfhSi6SdyegUtCkgxC8GrFbNv7w5FNefN4XVrD7w8F9aBvZhDv4vDjjDBMXXSf4fRg",
  "key15": "4pd8Yux35XmXqXAySDaavBAntwu9AaB56G5b13ZFaRQV7fLGHcpd9Z8EmzmLQ2i6hmk9DYUVYA4LGg1k83Zyy4u7",
  "key16": "3BDByNA1QtdttGnyzfCbWsiGDUY9UUnMLjKxEhpKEggVLXd3dRoKwCCFne4HDKhimNxrGvKrZwfoJ43gYuZC9QvP",
  "key17": "2TzJD7etLJ8QPWhCtrAmB8C6GDX5d7WPDAbJ6wnNuT6iNbQwmm6j2cbAL5FUWw5zH8ptwxvzPKNU6P86GrLcv42a",
  "key18": "58xJDWii6rvQg4dG7GLRnSsCW9fKS3XTb9yqdaPhYmpMRUEZ1pn32DzsFD5Mz7f8apX1QC46MnQEKBXXbASJKUs7",
  "key19": "4WcgZYVsBqZGEt5mPuo5xg93N7c81gRzCMWeL3yHR3HRmgcQPw6orRLQXoqPZzxpauRvch3HMrxiC6Qkb5GTrrXn",
  "key20": "4AZZn8aNytWz41uaLq2yrN6yrPtddBcD5dF8h3tAd1nVLayTngzmpXwPoGwFgnJAU8QLgsAdDhTQNR1dAXUnJxmz",
  "key21": "3cKAkHouenBAVWSf9t32xY2W82eQaz9Fg7XUmpxgVH3NMdc8vDw58TN5fdMkJvzYskekoBxogWeaiQwZNYPPZcxc",
  "key22": "4iA2vgxF5rV5UBoS1oVppWntmNgZ3PabcQ9viGftZtDGtkUUgS9AXLHtdrHoMJ1PPmwfq9HjkaffQ5KLvWFA54pB",
  "key23": "3t2y72j97kn3UK2PwuDEuoQj4scZoPTjnDmLGHMKjHDVfya7vECL5yaqCRUqvwEJNqZWryjryUzSR4espWHzQkWw",
  "key24": "34PLukRsin3pHyf8trD23LzbQb3VUiEXai45Tdb6DDZtrSm1gxpjmdopwbNK6uUqehVf1MjQ8NwpPiF6MxUhWxdq",
  "key25": "55azZ6tNYZaxSVeMz1cX4MGgFGwnvdcGDXiSLzvKHmJpQ7ndftP5b4aT9yDtAydQXt3by1An8KGcSjEkZEAnyDUw",
  "key26": "5ZX8aeZ37equYVnGJnUBqBTnhCoCfY1KNw5K41nKiPyNYVgRqCvQKoRyUVnshFgLu7HYybMjqamXuAJUYvVpMenD",
  "key27": "5USQR7BRrSFgnnbCjgVRCwqeiiQvoQGKNArqsHPzwyFz6L55iDKQ4C7fC4KUecZnrRhZTGyPFkzPDE5rtD2uUSyg",
  "key28": "4cpDrMReRzzxnoKdS6AeykfRjr4hbp9Z1DTjB7Wh8xnrkMv6RTF7KJxmEEXLek7hd8gTBGD6gvWPY4FBveE79EDD",
  "key29": "3aJXcYA5tEWUpe3tqWLZyVpYvR3S57poevHCEG46LubtNYE4LHUtLc9qSg5gJVZ648ZaU8NKtgbFr83nQ6H9d85N",
  "key30": "2Anwhh98RqKoEdhfenrH3hXnawAbfRfpeTk3xSCUtxRd7X6RcBWLxNf5p6uDmt4uEGKqS7yJhgbF8nohystNJrbd",
  "key31": "vWQhWmyTLbJSnzjCRcFe1MYrayiyqxazMC2ABbT1tYdxqwkML66v76zMAYjV2VeLVueSBbcy8iSNEyvanXuYaQE",
  "key32": "4RREa9kZ9Ve9EJuBtfBsf9nEBMEetgcQKZGvw4j83wXderQk4nRbSyZtrAxpAFfoB7Wowa7HWKQQPcFZACcdrdGt",
  "key33": "5kuqDEi3EAxKt6Y4ae5ZJ5QD4X4PTzhCAjtbEHMdBEqWzwmc296i6mR9aopLB1XsEnKrVjZLR4DwsjCEDA1C9Yh7",
  "key34": "26ekr4NfEpF5vMAG8nYgvJ6X6ToFJBZfTgsPo8aWnGBCU3FTzoBU1tY3wMZdXr9m1Tas6CMNCVvAhEFbd8A5ZzCD",
  "key35": "4nMxLJFN24xteJC3pZr1F6RLLQ5k6ETZGnMYmehppbWyU1pFZp83eih5mRRiKDmJuLpXJK8E9Ks7DdnMcy5FNqJA",
  "key36": "3a7uKrxVFHwuURWCJBwkXY1Hx7VDcuNrsK96rHyGR48XzrwKy1PPFgAJdF3aEpTnMhUorHPqaEuysERRXGY7vmgu",
  "key37": "5yPzVADMyDWk6UYMMJGSnQXseWUCqg8GVcjJsw4zww7EjjRzRBx4bnhfC9Uak5974vbR6DLPPYnA3DmC9qw9QPee",
  "key38": "58ewKkTPJCzt4PYCjwpA1UYxBF6JQZneUV5DQgPgHfj6fuXaHpd8RtbjeYSCfByL5tVQkzTeFW4GxpqgT3BHWm8p",
  "key39": "5zzp6B1j9sXCo3wwcNGtjiShgySNjGrGa5FmBqCAokc3M9nHJ2gntiGgWrvjQtAbKwSzj9Y6VJ75RhseSVa1m2kz",
  "key40": "2GQjGS4958BMfJjiYU3nqfvJCR5qMy6VuMgzDeFDCCrKd7MwF3CKodwuijCFaFQkvpLPTA3jMBkUv85j73CqX1Bq",
  "key41": "HEgBsErD6dop9jfvmpRBaVoydPdMHUtMUKKv6MzwjMKUhz8yFV2etmrK6RcYY9x4wfQhThgvdhjqKWtAWni9X4W",
  "key42": "KJuvrQ9DcaL9Ev5eM9p4EtndbLrwTk4ffCBo3xQ8U39qacaVtvixRRR5kwStmHW1QSgvt9hjafe4S9AE8b4RTA7",
  "key43": "29YvEZuzXQpt2e2YfWCdJLb6x2pKzrcDkgezoNbL7uigbrJUBCaDJFoNLZxky7sigUAyW6k3W1unv9dCva2MG7hW",
  "key44": "2Tx6dNZyWd49GsPiCou6muRaPxctR7db65mj9q4JmK7vN3C1fXZSSDcwdSHgwf2QVAJ4NjsEa7s7dPbMzx6T55hC"
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
