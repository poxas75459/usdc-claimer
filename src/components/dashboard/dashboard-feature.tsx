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
    "3NA2V2rEciyYvzRMt7fH785phQJGLdsPTHnEWQ9snVEdBcfKWhe2RhcxYAUMbQGVSP4VzyKTzGkfqz34YReEwgio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynBTrCtF3RkvJovKbUTWX6ZSswG6b8jSe3LeKsV9aDKe14xjrGGxQbg3fHHVS4aBLE9sVqVmfj1dU7AmUnd7iB8",
  "key1": "2GtMMUTDRam42Jayr2Tvb4aooiaDcMqHHY9YWvmYENjnry98rK1P5RbkaxB4QSKM3oGbVHv6fJWQd552aojmPxf",
  "key2": "2oCte1YToZfh9MvTcu7mBcdiAopVZYx7jZY7FEE1cn4A2tDFZ1gixMdh3LQ6K7o3SLGSThv5hUYvQarUkKCYc7vi",
  "key3": "3o8dNjRdVLUXXTRSxVXELjLKFJyj9vdPDEzSPWc9XZDnS4HkpQosYoiorYWbmt117jdkXu2kQAdpUPXc8aYoGGKW",
  "key4": "TcFCw9immGELRt6yntEnVq6QmouB44iTyXeuwUCWeEjA7HUtZReeCQJXodxz27Gc2i7E6pqvgPwrKDHmwhFT84a",
  "key5": "3tKArJt9Jnb8CrcCGRQyKhPLcPXVyPuz8QpduoqHxZ6ndUojfh5pHGPFPoU1k6cHcavkNgr49yRp5YNQTmRxnsta",
  "key6": "MuxiLMH4EW2Zw5gr9ZNS9XVsDG3m3dS2fTu4wNedrypc2Xpeva8rzJC7oZQRA2oRMzsdLx9B6SfvT4G5ZceYGHQ",
  "key7": "36k5DNEmpUEDKVoSXYtogDaRoewi6Fh9KcXe97sTwK4yT78bYtnFGzzHGHz5GLN9RLo6LrJS6TZcYx5kNgvegvej",
  "key8": "SbnE8uoLKQRCXyofxVitfgN1eBhgV1UEQ7y579DnFNhyB3QqN2M81i7HRpJW7HD8vBCEyMXprZa2pChJY1wNZa4",
  "key9": "27utLQbXXmzFUK5w7qZkzAVh23SvEjvsuiegcwWru1EuoeSHZmQMj2ZPXj4x3nQKfy8QMV6xXotJ8znUpFCXwL8c",
  "key10": "5AbeVT8erYaPAjtGffq6wJuZgjFDxceiGrT2vwBeQVsbwXDAjDCY6rQhA1UMjvwk89ymWJYNsW33pGM9Jzuxdk2b",
  "key11": "4e4bNS4yazuSgGAbew1kKRX86g8gD2jCi63uhzgq1qDEfi4dgNCTh24GN1tvd9mV2qgHR3EqupN8ncFL7VAXehcu",
  "key12": "3Er2HezeWrNURxaZVEtcCZWYC68x9uKr1h8of3gZRUAcNPgxacV2GKcDf7aYCrhScndwWawoCwwQfT6Sm8iRUZzQ",
  "key13": "34Ntz5UqGdu1giTirUiyG5DKrQWMobBgZ2THXt7Ce8zTWFDNE2un5d7xnJb8dLrKvKDn9do4Bt5h3CJbrSUBCVm7",
  "key14": "PvUyNt9toYsGojpJQZDtdNbSJ3sv3Ye4mZHhkHny31CjB1dzsivhpEyQZKVMRgonaBgTvjACf9o3i5i1poErJTh",
  "key15": "YuCXpy75wevqWX3uWno1D9qvAjoojybNsbETUMRS8uBjXF7XCpAaG9ct5Yk4LKRWyQuVgseGcmXcQUwvFZGczHi",
  "key16": "2dNh6mU5uLho4RQtJJryg11SR8LHxTuknYzWykFYsbJq7PaKvwKtkuZex1VnKTFwYfCbwbC7YE7b3bKjWwWa3X8o",
  "key17": "4qmYPPw4vSvdVrzCVFvwPrvm1bFztXWvMWgWXi1TifeSkYeVMv757BY7MoYDiyS9se5gmTLw4aNXHZStREuYPkHa",
  "key18": "3j7XejCqd46a13NfHPWTjudtp6dF8rNUp2voD8QdzLkKFQQ1iAMLQXu7wvAeV6R6g19yJ5vhhr29SsX1iNLWn8oE",
  "key19": "387vPp6HKUPnAL6gi8sTfdQxo8FWDV18w7YKpePPE9QhXFzoBgwqLriEs3GyFbyssGXBNYTUUfM2apfhuFcz3fvN",
  "key20": "4BMmNd2u4TouVB2j5wuQQcDSgyszckZtfKhTxSRBjus7Kuzd7dNeEEyf9ZZkiWVHFfNu8oYbywTwg1DtEeCCr6eZ",
  "key21": "4SxX1XCNh3M2TVkVWaHZkvyGETyJt2SqCpqW4omeY8v2MjTuooVnf9XaEiAHjgfD6EnWnDn6NAFkQCz9x7eY9FF9",
  "key22": "4CfchxbZiYkrUYTwVf8YaneuuNoH1UDyUxjWeSZNuDyGcH86fDe79HiJcA8bug6t6AHifx8KtALGkkZr37KyvXvg",
  "key23": "37QtxRxrg1Q9z5G5NPBEsSkjwiuMnr9dHXFFo6JvEvSgex2e3AdaV7rBG4UGRZNUhHX5R4y75Aehn3bXczzp4u55",
  "key24": "AECwVbWQm9ikyMyd7nhSmQTorEmwE4czw5tLpQcvtJW6AghWJyx6mDN7Sr46JXg6JCKPhC2uqTB5DRh82M7Ktg2",
  "key25": "4TNNa2SJPFDD9EE6WfZmawCMsURcTVwhF8TihQ216LLc43b7EHGtJ1TkGfBbMesya3YX8KA7bC3Jvx6YR9qCBpGa",
  "key26": "3KvyDhTqYqo2gzWiTrKUpzTpdg98BhN9JSwxuUy3tUoE3Zc2jNfPoB9AyoEEH3YmP7NmE1Q45aZkMVNxt5W6RBxS",
  "key27": "jQWWATEs7MPUiH57agyrCoUmH3uDWfLn2moHv6kdVHoPK8gxp2GArz855Vi7Z5Z1xNgGawCCNhfAaRVuHKVxTuD",
  "key28": "3p8CWyonEUbcTG294Ho1Y3Psa1JPn94qxXrdT5eD1uBkoU8gw76Z8UaiBdfAgMJK2qHZ4w4FMBwK5WcrNd7q7SKM",
  "key29": "2dnGMvTZezAKK2q2MnYQ2m5GhEtrhAs1h7bnarhDRJJ3DsnErMY57uKfs7GHZzQ8HZ4wEppHTZ4g3So7VMCXWuTU",
  "key30": "5iDmskxFqz75znUvXzWyoTkzJnL9KjhqPjK1J5yxDujWrg1v9kk4LcorJL6ANRsasSGEU8rSJ1C6E1HTaaGJTKLD",
  "key31": "3NbEY5fwjtTKdHyFC92NyocFz6ZpcsWm2NzhDyYMuJiLE3H2bgcWyBpsNosYJxJaB4fndVGMmvtRbWt9jW8AqPDF",
  "key32": "3djhdTbUNcFFd9LzC6oZFcGQyt3KpCY4EPLRiW65W7L2UgkQ7xNRjkA7mHhENfVL8ZPAAxqD9n3EqC2qf4huJFMt",
  "key33": "5XmSgpn9tritfVKyKXYpaWkjg7iEih6vemmsgvuqxX8vAS9V3sa5xZWedPz6hUKnP9QFsFzt5RA9Kfmf7aXtxZbF",
  "key34": "wudqzUTv2UHXdf6xY1LeN8R6VAaspDurcXoGqX1LGctM1hNc91TWZ679fEX9HwV8DPtTFyNAyhCjwjgn3Su7NeN",
  "key35": "55oWytSqBMA4z1t4t3JeZXxkVczUZZaSAQ5CmojNQoyEdcifzYdLzGiFjwPfyBeauASWhJKpwZxaUXRbXhymN4sa",
  "key36": "5x5Cw8Hq8BvuvUEv6rfKhCiTPkCTRwY1aV2xmT1j5sz6gSgeQCLkM6fcEzFS8e9HQ8qGsUGdnXNj7FCZ7qvxAtjs",
  "key37": "2U2YB2WSKKo147mdwPyq5sEWNUz9u5oiQGxkGP9N7W8cL53YC8JsiUqf9hkpnshMKVHiDS731icEC5Nz74JGCJo7",
  "key38": "5mUSaBpumF8tiAdQzvAxZ6cJspsZucSwZnKadoo6ZELmfgS6xU6TdDbGPjDGZTTP6bBeQK7Ezy9wkU8m8ttFf9JW",
  "key39": "3beVtupUbwundqKCLH7a4TgdFFaey81jmp4RDV5td1dErGndz6pLjG7wQXz96jrZXnaxNPvkVWAHxmUF1B53SD1e",
  "key40": "2rdtu5vtRwL4gzn1WViUoaZcs31G4PYc8EngAg2VfuwcaZTXwgw8s7CbEf5EMjbxZn8Gfa5Me4EQ5sdSrHBneWwh"
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
