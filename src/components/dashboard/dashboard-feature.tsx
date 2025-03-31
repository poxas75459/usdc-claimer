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
    "4rWLKPAUmfwfDHaHWWwe7ZbVkYJTNgGGtpgQkmSsiCn99xdqH1F4rHdymad8JAb6A5yhyy8kCk9saN3PgrBacaYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v24LVGGR2SSsRNQNHprsbmPv7qfFSqrbLjJS5Ru3C9z6a6s6cKT3ANjzyoykdfU7v5anAsnMfv7x7w8LpGX3Rf3",
  "key1": "56ifqHYTNxp4oaFyX8sVmmHLfBuEvWs1i3DLycnPbsTYr2gqYm9mtnHtY46NgRjw5Z5V5roKFMagcPPPmDwheD6L",
  "key2": "3WhvHF7rduhL768mfAnQuYTFHhxUwdNWPtWsmNwV2LzeBZR9wMKxRQjYpiea1fngGLN7GRXoUNMbHdztvJn14fDn",
  "key3": "Ff9D4CYTTtbMkctn8gUaDn7DwshbAr4TYFQ8aaufctYJ9zB5eNA5hVJJPMN6ALcxMSPSr7k736Tq9fQppD8AGsf",
  "key4": "61nn5umLtQcygqrUuwLRqPzBvd3X1pkMmA9F9YG5ydFHMsY7EGoHP7ZiqYbZVYJZWvx4YVrJrJUWPZLFr4cCDvMJ",
  "key5": "3N6Pk4d49uQCiEbFpv91x9KFGgEwCgrCGzNdRA6aa5iZvNkQVwxvGT3wZyF2i7ZNaNrRDugbyNq4JhU9D5KTdrr9",
  "key6": "2SowNcnETAiSxRqSuaxi7qnaAiF5eNg4JHvfjcTtGUYbnuCrSXAt4y57hX2fmfvEJBaBt2JFP3kbqfjfYp7LfJqy",
  "key7": "5H9ktrZVREzCU9TsnJK4b4ijGkYPKAccaSgZm8PJkqH1otnJCG4MBP5vxvEG4tY3BaD6vH4TwiR23JWZfepKd8aK",
  "key8": "4hpR3rn8RQf6C81Fkg74AqTD99PizmtuLAQ2SmDR5KuwUGLR9meBfc8Sgce8Ny1fRhpyTFpvF81krzN8D7QvHS2J",
  "key9": "3ysLbDNAtjWn8cLpJ99ZhtYmrRQve54knosjybGWQtdw6FqbS3fGhUprYrUL36ctXorJYKhwBUkqTWP8kCRqksNg",
  "key10": "3WHEffkM2Q6xqgqdqiNrvMape1yqH2wwkzMaqjSiJCrErALMEZq1duhRKdDrddgRyGTZAh6hMxXerA8sKkbZSao8",
  "key11": "3Dkucs2zSRo8Wc26X4cL4DyaLHGHLGLvCXsp6S6vD6TspZhcqgUTdmgj3N721nSTuFeid4L9GTjheLrnQyfkiMKp",
  "key12": "4yu3gMR4e5rU4UMoDygtkDof6DEigLGdW7eWZEMQNPhpfDEiqNJEf39ihQVu962D4kinUo2Mz5Ba3xfDqsFunPuM",
  "key13": "3sNBdoavnGmthGiWoM4XdJg2BgtWRgC1kHpok74LWAYLJVTutK1GjdLHAMvBJpbH5e2k2TiNjSyX4h2PZHqzPDzW",
  "key14": "2UxBEUohHLoUwD43b2Z62SbHdqY1NGiuJB955QLnoLowtqyN13qK8EL8rDvocb7kasJMjJjcPWibrKra5hFKRRqj",
  "key15": "21j17doZ5g73Eo2YfWhw6McfVTfohLDEzDfyi9LDvtZZVNCh3e7pnLPYLmu9moVfXTDbCsCWuev9KmU3aznVZ1GW",
  "key16": "41uqWnapnkVRnPkzYiVwJBN1JPZC9F74Z7MLbtF5iMHSeKrEC1mzsSFGW65wE8c43o8Py4tzHDRWW56Syit1AXeS",
  "key17": "4gdAJ6WuFdgHkURDp3vsW5a1MnbwoX94JJoHJnqQ4oej1Q5S4gtYkFxUmJatt56LgectKfwkaJeuo1eofMr9Z6Yi",
  "key18": "28WmCsTj2n8SjSDyQMwA9e5KP1sB9Pxi94Ek7p2EGKh3SjD2XMjnbajPzTPQGcpq8B9gftarZmPmHv1aFMJJZ4tj",
  "key19": "3qFqNAv1bavbaNtkUyXL9p1SKTzYy1rXrWHDtwqLmHkEUhtvo1PXkD2yu3bTQCSZvckhRHPsKETwgNBAQifWncPU",
  "key20": "5HS1T5UgKyNfqk5qp9yzpXAqsFk8bhtE9HB2XfrgwxujCeRJ9TpK4gxJkYJndNUB1M9DRCsBeWePLr9mHJgLRf5z",
  "key21": "3Yjzbwni49RgwVJxvN32wtv4FUDttwv1ryVW77xVZV8iEGVJCJ3Dz3gdawuWc3amGARw7jgkRfevdAVSAAStKej9",
  "key22": "tB46DLvgRgLu1ywAaApjQyGXPPD1FcFTqdpJr9yUhTxAPrfTnWarszGVM6tn32Zrcu4nwiAMUkHJ74RMinJHyMn",
  "key23": "3e6LUDhXSCmgMCs8sczqfQMhequA6cwVGKwYnfjFhESJfaYvN7VNB5vZz1nj3kwn1ypjLmqDCymSYZG2vxJT3qgT",
  "key24": "4RuWRT1zMrC37AuQECXYUkUSDFVEAt7CCrvNyXu3p1THZASU84vzSQ7CrPKf3avfwn6b9Wzi6CaHi5S5NNCLmSk9",
  "key25": "2zaQPD6PRpCny6M8brbVgFQdZhfCc1p4axe4Nh7qbP3izqYoxDeTmtHWPMm9pmAcznvUr8N8yHR5YR6qkG6ZMjxM",
  "key26": "2hXUzPS3eSehUD6BtiNBMhLdfba6kftzrZEZcS65gcYdBcQ8nbciBVgPeVcWZmtD35SZwD6Y4SmKLSFqrjVboHy2",
  "key27": "3KKGY6z8ZwqS6Y1Lf1fXbDkc7k1P6ds177QJjQhkx3zPPqKXw5FTRqcr58ZavtAi5aSKaH4hsfV5VfhkDcGGJSmv",
  "key28": "SbEyi2as55yXmiZfxzM4g1aL5Ub1b4yUy5jG9nmBoZJceADcJrZP5WLU8Fuax36wMRusodt1Lj5i6idzVweqeRR",
  "key29": "4p88sGXY8BeAUoTvwPzjQkCGE5V1YfMqXEE7JyjY1GapanwmkD1fMgvGRNJCgbbpDhMXHzpHkw6tDX7YX3GTe4TX",
  "key30": "5tU5kmW195pEoh7GU6vQjKtrvqS1a3pfLpYTZTbYDp77eNmD5jMv685ZoDVb26a5TviQvveBY2ukjwaEEGSpWiy1",
  "key31": "paCjGrvsWVWjkMa27rsAqACiY6kXqat1FgAY5Vm4ETBDu7wpb2rnQuwyvFDaNgt73KMytSUpWHKHmTxj7WgzR8w",
  "key32": "2PmAY8PtRBjC3748PiG3cHXUPhHAGFMYc1Z4UQR4owCjhE8YURSN1Cyoy9jyZzUDXANnbYsJFnyL642GHy2bUDQR",
  "key33": "R1fStTjF1FovuQ8Y1xu6PJeTtkSueDNmr2YhbYLLFKAzSNnp69fmXZknZi7EuUN6zV1KLLQGK7jTFvXuK4toaFK",
  "key34": "3qnEfVw4xM6dheoK9jVBSERV8HL5wVRRnceoAGcot1Z2RUpHcnM3u9KHDqNvL2iTSop5b2bBeMYFiWhfQxQCNRDk",
  "key35": "5rdaLVrpjo7bvoKhpfEK54HZxZooCE45WveE6RT1Bygc4jMVW5QfHzENkML6Ea5tL1XjMoU6TbGu82gTwmas6Jmt",
  "key36": "5bTBApShCcrm3hdm9LsW7ohe9G6exSUfLKJanRMePKmvsKVDxTrDNVdh8Hh5wnNLFukH6shCUvetgEva9FfuLWi9",
  "key37": "5cxuzmPkd19QGEn8Q7bxmHKEcKRkiXwNWH1WRKXhe69hPueJrAFVDhvpgQpYgzaW81BThEGfKzzDs7MU9CL9mvma",
  "key38": "3AbEoBjdJ69EKGLEPrP8Yrc8HuiP7Yikz3uLg1HxiHY2MQ7YbYC2qNZLktHXkJaTcN8kQVjc82jYF8w11iPp4PWo",
  "key39": "5GXRJhVEDLbVQmgdG61CTxqUixM8tWVyKgKfCyU3haR4Uwc7XnjcWVpTx9xvyMQ6j1hE2fZ7nsPf2fEGCF186VwQ",
  "key40": "2fRi1bj22QJeHEssJoQ6uyS8cVYgDb5p72Xy2vtY69FUxLTxPqib9qGYdfrs5HWjGJU5QLvxqs9Q7f5GD9MuMr9G",
  "key41": "65mKk3oT9A5FizPWps46u3cC3GU5J3CmbrAYZEyHnMXTEpMcC7nAyrQgxDsXrVZS9vF2vARM82B3FxpE8V79x1wY",
  "key42": "5QCcGoMFMWcrfA9qJBrib8v2fht4CHaapTWaUm5z6Ln4RbRzuJPBFjeaz9xrbzx1LYhgHipWjAZqZc4dEYBB2mGu",
  "key43": "ShTsaUCGrsPe2js6uCdWB3Rt2pvghT37hFjvC1zvYa1UceTcPm3paxgEehJ1a6JkgV1h8yJZdStiptdHKhKq35j",
  "key44": "2wnFKGRjoQubS9EFepBLrkY5My7MpswSB97uuBsT7XriGDvjrB69zhtjgHGR5vZbYy6t8bP8eEEytc6H7PTw1v1",
  "key45": "oqv5YoCEC3YCajVXSbstLGLfMnXGGoKj9Zzfxc9mmxjxTqoUo2aEWjznT2HRbzMymfvGoLr7gaDusyv3y8vfBoQ",
  "key46": "5tkTJvdh2gfGMdUwYQgBkJLf9AfR1NmXneXtmXUP4mwLdC7XprW7NyVBUUWFSRtw52LRo5c6eAarPPqXeEptinp6"
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
