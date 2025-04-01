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
    "128oCgpbFcqsowDF9Kz4DPymvgU5NHeNDy5etdd959E4T1KChEKPXHPQDJuztTfcx5nMhhz6wtaRUp2NBXxjSEdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3347FRMbS5o6nrvhdms3wHKzAXvCbCTcpSLbgXngZ6wwFeQ7Aqw39teAxtbyMNyiVa2W5vZZ2MRW2gkyURVq5ge8",
  "key1": "2g4M4NjSB3QQqwu54PsULxrAo49TjmpKbQqztKwZ1HBdSaoyrdXQKjYKEA2hyoFJ7FMxi3Unb44HStiXHSxzRR8j",
  "key2": "32xJ1GLYpwvtiTx7czKvKR4RNpC4uZHW3K8zFQmbrnpMTZcKgKJ6187SDSrAnFSGBC8dcSTmhCGnV5aBjwVpWsv2",
  "key3": "2X6hkmc2rSH1gSMj8qikfz5jqVrtCfAn3yKHoWCsN4gqQ5emibqdUKCsfSdHw4T3miv3QVNzyZgHchEzEEixC6zt",
  "key4": "2v4o2EFZsUFzwn5oZbtc4ULBzvxfT1ScJrjnit9LbTAHiB7pkLfHmztKH9c8R5k2BCoeeWvCicdqTiXDFBAhNEZd",
  "key5": "2QfoStcgdob3ua6z2s2hqvPd59MgpFDzmuYnkqHSvqeNpSoMLAr7ADGibEfgChcSSkgo5GN2wtQ9VXQn4KUPaTK8",
  "key6": "Y2SfGLbymPffK1J2Aj2hYwPFESvhcpRA1ijZAqve3gx2onTTBzKVweqmZWo3Ng8e5uKxkHgNBE9NfYTMLJ5Sz3v",
  "key7": "5N2hgy3qgLbhMihWWFgJVTiQeUnskYW4T7Sbn8c8YXSAEwzuwXHcqBqoitaDVwYbtcrjmd5BC5jQSAcJN1myTqLe",
  "key8": "2vNdVJaEou4QWQuyk5rT38cH1D69ceQGNFbC5EyMYSxw8SHRTU5o9CTX81nCbvmPAFGJd5SAmyudyLXXK9W5Yf5R",
  "key9": "agUMgVbqgsj6i51wuZrXbTRF4pfDxssTF4o9Y9w8HCSd2onMgadGqog4MxE5pNAyuPxQQasEFx41Z3Z1a9GY62w",
  "key10": "5qk5Z9Mdsenf4v7uj31AhDyB5pjFN83jq7fxKtwpQEniNGkc3gWG6By3EoNN7rfnhgVJnt7rgiz3CW8Fkr62KXus",
  "key11": "4UhMXaBAoeuazYRG3ADFxA1FGnhQLRXUsDFGArmrBbyekJ4CiK47Ds7zdiXGwHsJf6L1FP7jrAJho66XZc6RuVCP",
  "key12": "655xZpevEhtrZeVcW4cG19PSZMrn1M9U43AuceU6BTxnUF9Y2yEZLxRPVSpdS4xrZn3s6Czu1S8d2B2Lg4rTarQ7",
  "key13": "h7wxEUqkLTRANUL8f2iTQRFZKUTnMMvMKwvCJ8NtKHi6xre2pWf6eWvyqpJgHRttDUbF4aDrHUCiuY6D7JnDD7a",
  "key14": "5MwmyMz4afiJQv5WhtNLMDDuDoahEDgdMr5ewmurLq4FtkexAhtKVy8ass3bcTwbaJ6tawH7Pphdd6UvzDUKnAwV",
  "key15": "4RpCHANQH7LVwq6unguhGRCfXoaBSJm9fvaSbfkPvVrAQ4Xjf7FJT2NprXKPXV88SGLnuncF8umhFA4KMsW7ZRES",
  "key16": "34ENxvY4gSaEpt3Tq52hYcaLufX33gdbo5h2fcGGjRs2gRUeefFfKFbsQYGfJKnXM5KKbaUsx5tW9btJu4numZJX",
  "key17": "2pC3Rkbg7vgaEe3q1xyf9dPrdbuXb1AdZo4BetgEdYy1Kgnza1DyecXwtsevETCH6LYnqcKcWN4NdugAXnsEapGP",
  "key18": "gQvqdxkwyQRaojwb1oVeiZWH5w3Ed3XshaVxdXwud4sDQBgyp5czpCY9g2MByAWQ8u6LmU3KwtK5AoEqQL1qCQ8",
  "key19": "32xpj13QMdiPFp97jXXorTapfMYrG1f7geGfuq4N1HWgqaHGoQe8BLdycZJWBz3Wmd5GiNGyUkGpoidV2SL3u7iW",
  "key20": "9WmVPpUs5j6rCV5bBbLABAurkfBeiXqkMicQKhazcathrDng4qTzirWua1RWQUqUTSTYN3w7PRQrTaJS9j2X8bW",
  "key21": "4WdH4gK8dVoZhad8EZQWtS2zXU4n6UeffktsQwiGGs6fQdis8Zj3fP7S4c8PGTQfhA1dme966bs9ARQ8kCCNLtvy",
  "key22": "5xB2KoWSsUK5qirZScCB4umkEPvwoLCdcRHaFoDB7RNGk5ib11LhgtZSW6U23wzvv7HT8DvBPe9zeJwQ5EjhRw4j",
  "key23": "4pYUMWK7bcD7fJzQkuidnuNnaLeeopCQ4nmNZcTnCcqczkAq6R5YNvDSxWEkZmHBgnwLTxvqsw551L32UnTS4oUs",
  "key24": "5a2kcxMiEKPf6fS9HrqqVFWQ4oXwDQereCp7f86tanEWjPFq2EM5H6pxNMChAgmXJV1NJsD5giWqhoeCKPHkPSue",
  "key25": "2gacHwBQazp4QdkjVfaAHFzNtYFkRYTrUeyMNvVDvxnmUgWKyP2tUCBzWFwUudDNw6eo9KJgE9sxybLjq4YQiPGd",
  "key26": "25FFFwFSYp23edx7xiPHx3bAsjJNiwVqEwDbgMbgmSXBDSJxit1dcMe4Pi7Ms54DfwgXZhAUXtZnBTJxVNfjcCkE",
  "key27": "52GbWRu4T4ogdDwsVDh9qtVSNu35hojEvSrU2cvcuPCs3izm33Hu2zCoHWR758hft6Viqc5yrVpGzTKJGD525GJq",
  "key28": "5auFa27cokWb9wbAhbRPj9Erp2sdfbv2dgy6ubyPg4dL7bwsxshSVhVP7Gv4GqM5cRUTgGoeP8wGaXSpEurd6z2k",
  "key29": "52JVoDAKpohPGWAjcM4QuhM7wARXwVx3HuDfpf9iSXZMx1V7Mg396yj8R7Z3wLtmVmerrGKMAKCRzjR1gZJk5FTX",
  "key30": "qR4rwHk1mJf6bjTJEmBqFaui3drLkT3fBFc2msVVdoVvN9f72U6rk6mPkdJ5x1qDHS6HsrWC5VgsCHjjooA9fKW",
  "key31": "2YNGQer8tSfDagBDXFXUqkBT3UPm5dRNgLvVeYxkBW78yW947cDGj9uQdnJWnAKKUXMXggs1Shhom5TXCNC7r4Wx",
  "key32": "41eCgqzzbSUMF8jpse839qTz28HRNPPzLWRHmEP2xfdmazUFQUAWZegMW3pm7YEtVC8jr3bhJQkSmPVzhE9KZzsm",
  "key33": "LrLQ7LEnJ98CGkP76B8aorm4cUXnionA8riyHT1NrUVWyPkZt9kkUCWQYcWwyCnkiYydRA2fnUmdBJvxKVjDJF5",
  "key34": "2wDhd3VLjZvEghtLVo4ZSqAtQocWKdL3TopHFrzttR5gCkQkEXE4gqrmWmB31PrHmFXiyq2u3u56jJv3ouSi61Uz",
  "key35": "PTVNcwEAiUpoP4KurpGqhvxUV1Aq9owafLteC3Sv2zKYcGGbMRwdCABnQrmLDNnLnmyrPDogDf3E8ZC7XZ6r4A6",
  "key36": "29eiTT38iC8ebwxYDoSjSxZBDEFzpjQgaJR54EaiaCNq5sCgBCaHyh2M6C23L18LZba3phd66C9WhG8T8kRZESPZ",
  "key37": "5BP27q6i6fKxPpA4j12Fox4xjYuk6PVj9tskGjLDv1NMteTs1bRL9KYu7mwNRVJFzGVEXbtKmokhd59XCwMwSULi",
  "key38": "52fiBAJhuBNA4sxCP72XC5RhrWMxnQ5QPPETW89WtVtJqQo7jw8QjyHaBSNaqCu9XXPgdY1WAXNCeeHU1pjmbVRi"
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
