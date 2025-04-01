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
    "5wuLPubP64fz8MWfGK1w4aEXQBYtzXfEWQyqwdM1uyS93QLpENNa1coviTLo2DgnV8RHKBZcggexwmBVmw49tPBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSTkf5YuaVzSv6VnBXBqDkd1x4G6EF4sB2Efiqo4SYL2TX3XNPQJEJzsbm8jK92NSE8Ebzz7qt1DjHaPGpQeyxS",
  "key1": "3TQcEMKbtVyFnA3gDSQYJJtnwWiuzTBaFApJYDVoouKCR1cSrXbmxr46bhwvQZ3dnPVpaWuERYXsu3AptdT6zX5y",
  "key2": "NtKViVkspBPTk6Ck4cW8Mdx7BeQxsjsH5Ebp6QMyayFBcVASi486vAsooFAwQuUGbTUTCZqayiaBpLSQzG3aj8X",
  "key3": "5csA4pt1m7nmB9ECMviUz2kSfVLw9APgTFyENsPYx5tEvs4r5ANwJ2tawHxJTrtnBva23Qyb63oHDaHmxJqHUUAf",
  "key4": "rq1jCqFAqEhtLMWiZB6y8tsGPDdEHnxKxR3Jn1agA1SaUCsvcDDmHrhmFNrPk7sBMPv9oVkWR2aRbw5qpA9To1t",
  "key5": "yUZdq5maeGSAW6vFgHCnBkmCsy6fNzg1hFqRrPGSCr8k2R2KeThbxrMfLiodGypb6TnBr7rJgSHMgfSshPaaWDZ",
  "key6": "5tBYaPjHbTcBEhXitrKbbS6rsed8KzPsASrhPgVHkcRmHivPFNpKnd4gD9msfFwKypyWDtSDYejFvSDD9Rn89ygG",
  "key7": "5gbSko9wyGHX9ZnGk6G9QKJ9WqgfSNnKkLpfdxnz41Gan9rtw8guMZhHucrwDq5Bd4hNWTZxmcELsAFQQug7W5Ug",
  "key8": "2ieoF5uQXTgZ6S9MpCowkaGQuep16wfvhbzBbBmKFRHvJcQmp4BHj4qB5A6YJUezTvzYkMjfTpkqShetoYS7PEeL",
  "key9": "2AGxV4ZrScexHYqXzKncMu2iT5LkMU7MUsqRByuujSxL9vgfSSULY1WFogAqq2ZjDsKjxW17GbRWHz8wCW11v4d2",
  "key10": "5YcziCnDkK3ww5gqwyQWp8GponSvichmT3NujqmE29sjFAs4sW7MHdGA2Mm9YgiFs2qBftK7tvvRMokxugF9u5jv",
  "key11": "5cSMdhT6PCVP6A6xzdWnBnjRCPom1QwNXt7Qp6pD3TDMoHoFiYAHx4TDGekJD5DzXZDf5F6Gs1FSKwVox8HCNk7c",
  "key12": "4McNTUM8qAZPaPgX9LdALfopcQE14UNsuDBsjaZXhHBYhHDZvgiBP1q4tCVJeiKPWV8ihpRYuLe1f2LrETknj2px",
  "key13": "4cbNUZdxmmCCki3RJTnEPpMKLgX37Cp66hyxoZmELbEGYFopwS2tWRHU1hwbF5PuwwkTeHVxhCfVD89HrfCGM5U8",
  "key14": "LNni5UBWntbU2E7LhgsUejKbK9b3sdTisrWF6sHVANtuhNPVNDeTCxifnra9wRKebpGazJK7CaTvbpq87459Gso",
  "key15": "3445TkW4TPVahBdb94hGcNLkNNHy1soWKaYZk2qdxLhPh5prfSNNAnNQRsr5kDNcSxiySckDiDsMagjuskU2A765",
  "key16": "4MUvjo6zptHtixF7UcBbik8cQpkrfPF5XFq7S14m7bPrg4nBtYQeEc9ci8nsZwYLonaHk8xvrXafiSTQagsmgTdm",
  "key17": "3DiTQcDf6mKiFkaSFw25fAwbnWzYMKf7YiHG56pEgiUKcqsyKoZWeuBoQ7KDQPvsp5e5VSKuUpSPu2EVrqv957e",
  "key18": "5D4MbeWhTqk3XJMeUfvFx3TBiLM9CtsxZgd7htcou8qFhFDg4cL1T6GXQKe6xRYJMjEC5JqHfnin8CVgBekTz1TD",
  "key19": "23R2rJ1tXdiMqSDz31xdNkc68W2B7WJP4pyXzmeV3n5QioNLswukHBCegARqMnmWo5vtXwNp3eGFvyoPx63yMsjX",
  "key20": "fPgjbpxAUdPBq5Pfv6CDzkqhnwDNNzrbcdAi8e6r8hHB4eaUhS5hfe4N3bBP8zUbaXUa12Q7ofMUrQLtyqYdnPW",
  "key21": "4TWnxXTgJdhSk97Yn3RK8ydwQutJrj18k4yMAB7YWcUNZCu87Zu5p8LdUcoiohJUAgHH2U6LwWLm1xqN2WXYTUtu",
  "key22": "66qTgT28MPqL8wEYqGnv8a8abwZ4XPqvhBUi5PkQLU3im5nrUARTcVoUqo2tbh1PkCZVJVEuCzqomMkSRgQFGa4q",
  "key23": "4YvmcZ7HWushHrSLMUFR3xGwnwTQTttAh2cuv1P1nrg15qWaxfwmyYN1b4MRjVCnFKd3tWcQhFZu3a1HYab9PnXS",
  "key24": "3rqFUKXx34kySkPFEZstpmzFVdjDuBPxXQzevtK1duvfquvTxM1eGxHmB6uMNn5uydPsm1ZoP2Ktp6uCwe969Se8",
  "key25": "5KBemSNeVjwZsf1fLgXHp1b2uoPnTcZFHohHvHynVA3jcJWdrmE4G23xVHxXns3f9NeQunw7fB6FSVEdVnpLzk4c",
  "key26": "4hRV1hNfS88BP6caXcFcZL17dC4M1d841y1untwDUkWWBarp4MpgPaqzs5nibt43AQGMWCzzGSZE2A8ujZG3EVq8",
  "key27": "5DaVH3CTKMb9HxF4LtpxVh2S9BKCEUDpJTsZDrfMMdazmhaevunYmZY4chTKmokawVCBrR9YduromUR6mvoNaJ2p",
  "key28": "3qGY1MxsroRJqx55HvwygiSpHZWuLtj1oLDsWZSAuWXRHWUAKNYft6GHXS2nBLCPH4zSfD4WjryPWJ3hUwjPQVjn",
  "key29": "5KTACF6mPfZia92mmKb2DffEsHEr451qjDas27TQ9bAgs5rwwibJhQ9viHnr6FcVpb5YZpqPuNifbvXCh6CMtnv7",
  "key30": "5dz1QG1XarPyH9eBWe1riAMGvbxqhFiraRVWREWQG7zg6ePkxKAfMuETrhpKXdwoZzG2vqRRKF26WKsZseVv3B6Q",
  "key31": "671qfPW6yjr4225EcvhbB8s3uWmGpheL7WkAPDgAUeJmEmPsSAMBtMxcDWJqTiN7PbPrSdDVpkUx6H9svqgWy2zQ",
  "key32": "3ZkVokF3jZ5AMNgaQskN4xvgUR6fbVAvebWnxwpfHcMed5JWHiUCJi3FR9eo3UsRa3Cpu5W8KfANNJC31gWzZKjD",
  "key33": "NKU7k1vQsQ4kRMErJpeNK5H5AVQv848XDofzVYpKxTuvfAaigtqiT9ovxprzz1gA46TteVG7ja31FqVCPU9kYxV",
  "key34": "4QTvYQL42eFUUmUzg7xAE8SPAssWcWrUb1oqkj2JLJVhGv47TeQxCYH3nK44qXKFS8by9MXWjc3S79vy7Cd5zGTf",
  "key35": "R1VT89UrV9JGbwQMUnxGiVPYuzjz4aQre5RxeYqz2LfRjzsKhm95N5Xx4Gybpqt7HbwN8YeTHHAKhnmWkp4PWjD",
  "key36": "4LmKnDrVjQCWhvHKizEGpeK6YRfP6zdxxMfHmK5KpH6pNUjAJNTYtE6ZacsD9wVodpGKAFyjj1oEqijY5mVYPjy6",
  "key37": "4KMJ82FPgHiXhbnU5UkAoHqRwAFZAYvZq5sETFsD1U9T2wN3NxpWKmjkm5wUqC5MrU44xyQhftA5k3MDT6KU3jXD"
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
