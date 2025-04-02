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
    "2EtFH2ANNpbjtByVRr8nwpNnQt2dW9yRzuMZLop7SZgFSFwN7hx32QxMuhcNPfbc8VEBPdgSwiMjA2ssV72Rt8Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hg1vwN2DBiEc8aa3JHdrpd7yFBxNzHK2nSRekWPnLBoMHKv6ceuTLudGGcQqHH8hnKL2DfczDQshngoZhhNArzG",
  "key1": "myuRanXbqwXGcsdGguUqoCjeUTX2yXRNbeCq8n3et4VinkdsxR6HPizEHvqQkmrsCGqjhEmNDRkaXbVVquRJQdu",
  "key2": "cQWZYdVey5uUQPMga3E5tPm9hJ9MGXkbwnjdSKEVithacKtsYS7pScxEb3zLk8hsa9YFCsMBoor8xwEXHzfjibA",
  "key3": "2UTzTvyC4BQQxjoo4MHxSPkaKWVPZ7QngahvB8VPmyJyceeczRN2nu24qnq3CLZyUonsbcEikSpfpv32agk8srSj",
  "key4": "2KQbBnkGafHmW5psRpjea4Q2hHQmdfnhnqHfNdtyzHvsPQSL64SoiEy2qwvc82BEAZr4Q2Tx8kHjnuaojpXqzmYJ",
  "key5": "4TKRXbFYckS7dm1Q4LQRob8okQaqVZAgSq6PGS3fVdeyD1Ferwikv2WMpfoEnUub9WUG9kSCDopqd7doN7ZBCCMm",
  "key6": "ZhgB9Pkb5EYp5pTPeUj4Eq1JmKU8vo4PhMh7zNVMQU8YDAyKuPfwkBXXRqvHPBLSgHodEm1c8ofxtdvWWp4hE8a",
  "key7": "g2vJWRwVKC6ogqNZwnXuNozaFeizDsQr387uknzmvBdAbrf5fhiCfW5isZfwFLwBQGqvjn7DqRctsMdsE3WbkJC",
  "key8": "4XodYxLi4t8F7Zu6Wjo539zPxM4CdvtiDYqYJ3GVbxhrT8He3rLBVoKE3KvxoA7NVtXYppJpJP5DkWSvZFGaY1Cb",
  "key9": "4jLjiMHc6jVRH2vS7Q9MgvbUi6KvaYS4SSBEWH4RWAX8GUBHh5geCupRsv5gpdFst1yuF9pv8hnVSXecT8XdSPyf",
  "key10": "2KBdr1VpwhEv7eADojsWJ44hxhzyp8MDsDtydHUt8Wt1HMkveKobwNoRJtP93fiLjDu3PNngkXJJy4NfsWixmsxP",
  "key11": "4uaxgo2ZHsPApRrTwpSdMAi54Lcd447GA4rF6hrU3X19nj43R8AF2uP2PUi6rtbpTztFXZQ4d3WrmVZomewQzUnE",
  "key12": "5zCffQhDJxK7MHxoRRmcTjXxcdR6z1f92mNiRLYHxoeUYYam9ZEe2vJtTVzVde7dGpSC7VGnFNTrN8DxZfdCZ8mq",
  "key13": "37dRSZkNKQZxqybGXP4xKT1L3gByAThfWJLvTMN3Ud8JHJPemoz3iHJuatMRep2ajtgij7WuC2YRgmPD2Qjvnwod",
  "key14": "3qhP4CzHEpjXXZkX3TaMegE97kxEnrksWVknn87Ab1NgdYJPyZYnzKrn1rhd14rKPCfzz6UEio9agMaGSQsc8cbM",
  "key15": "AjoGCVBEa5ebXSPYyFk9gZzdB8X8edPYJiAvzaGeNyAHNXxPNCrfU9nQnqHeEdZ4yd64i2QPGaUVU5KtmcfobLA",
  "key16": "gZHwm8DjcdczGSNq57bvnuLmZxuoZMzvXLFgoCVg698DDfVA1xs1Fg1cUfgpH1eA5ePdA6Psm5msE34H7gsmtB1",
  "key17": "5VtR9k1U1kkv6v2y8fHtYztMmdTYLtB66PdwSs89Tr319HeQVxKaCiEtpm6YqZLxZktMzF5KngccKgPcWVWqVb5Q",
  "key18": "43xcEs9xKv26eAd3aELF9sZjsfKCPrTo83USZ6pW6dWCxv9WDt2aQr9UyRpyn6tEJz71oZvzTY8HhDwEHuX1f9av",
  "key19": "51NfWdPCRMNfHiD2X2JwEoceQ6p3AGx5pUJYNMVi7sTVNH1hN3VBGtGGjszoHt44BLnFMvn6fDywc2cikwYVbwGt",
  "key20": "2abutuMCArwUP3b8m3FtxHaadbd4JMCLRVsUvxcBcFVDhYA5HaVkFgAaq5GcbFDmbknpmvWBvJhKKfeehTttu3B2",
  "key21": "25ncfpkssGYtFz7XTYN1SSsk9m3v4gDEQSRAKbvZoBszG8qbxCtWV4rUre3HMokvLTJ3TTuGnqd4oNyZ5c3oefJ5",
  "key22": "38ayJJFtpHMCwmFAWi5RE5Ra3LwNt3oppFMBnpZ7ncCpjRSvfxWDk2Bj58ismJaNmdXbhu4U8kAHa2dLJeybqPRp",
  "key23": "NposQgAiUpFA3XBpg7nRkLQgZCXFQnwDV2Lo7JaoqLZAUxYuiRjyon46cGuJAZJj9nxVUXifBwL9SECBqF1qVrM",
  "key24": "5znYj4msbeohX9tgfSSGdtUpv2voPdzsgEurXTXtoKqUsJqYWGFmgLX3eBcBopjMNAiqhZKp7bKWdWLJXk42CaeB",
  "key25": "5gSQ9n324Dgsf4xXpBnME3d9hdFSQ2dhKLqsNBrLSrACb51kfvQpCaBezGsK5V1rKjZb9TziehPwhF85qCDBnzhS",
  "key26": "3nFGJ8KUivUy9eLz4nKv8CAP56FsSJNY3SAhZgEBxNQtSpEDF9jmBR9oBeR9bmRFFZjQ9j3YFQHkXCR2TbHcmgQ1",
  "key27": "3cq7HvVnrcCiNYqiB5Umx5H5Sv8zXVqY2BFRkWzotr5enE9eqXak7TRpYD25Qh6vJwuPfzj9AyWg7prcfDy7bZTk",
  "key28": "x7ytReGdKL1kMjxgCWXBCeiwYRhczRn4W3GyRjXJ3yr9w8kBcpW5Ehaex5w5EdBufMwCKcZhaXF4nQqpa11cDXQ",
  "key29": "3N2qBxKWzPsZ5cf4AoskskdWZp3RPL3PfYF3y8PCMmRbCjP5oBi5oqBTcfn4St86i3Tq1HZwLMmYA55oRFst4KH",
  "key30": "4nz8Neaz4tBWr329gXmASu1SrsZ8mv76F8gFnc8uh4N2dFZxa6P1vV9LWu2dZzYg76cDB89MioFfB6MuUGCqWJEE",
  "key31": "4Enne2DajTiZHBwRuNFua64gfoJThKv2CSG4kVU6yhcY4FkBPCRGpW5mpNqX95N5VszVSQ8tXtrGRmG2u6LN9yJu",
  "key32": "5xn8ESn8eX9BZ3CDBuFEDH7TSGMxsQbjw3SuFTdoHFNmE1vqJGVpea1gK9DpEDoLoqonW1EF4GDQV5j3J9hQbwhZ",
  "key33": "GaLiWSDwAzJvTr9kDohXC5LcvGTAKKY9EsBLiaUgFk1RBkg5gTC48vBwu24jyAysDcLzsvA4cb4ZP5SHVBzPc1V",
  "key34": "3EpvAqRxWkzcq2j8RurjH726JB1WzsXnVSAn8PTcLKb2PHJBwKuwtSsFcVLj5N7N3boLxS1MMATqwqJU9i4d5mUt",
  "key35": "4eow34vv8aicQyJzVaehVVrfqxCXBsotgFFojhWB1hvrcsibMim2gPtSYthLboLaGwGP9zfrhMfbXhnZwsrAo8K8",
  "key36": "27ssQhmZEbMcZaxD4KxwrewQySoj2QPkEYmFEKo3he356Ao4uNYgbBxjaVFY2y2jeCvXuU3yrLgtb3uex2jnRpR8",
  "key37": "43Kd6c1pJqLJ4u1CsvaLfiB8CD48DmtRLGbRKEvdPFJWPESmkKQhJbNxDSYnFswkq1gheFwzn36vaTLx8zv28DaA",
  "key38": "Qf7GZzrLDJvxvjWi2h8GSYeuhNBVndwWKdZB1H2CaA3n8JVr6GyW4pKQtC5FNW9bipx1EA5nnfDWqLs5FE1w2xX",
  "key39": "2KaCVuDcMMsQtKiBj4YfVqbTKxUk26f3HHtovhBki4tAcZbq2Kpafo9BMYTDKsQLL4bbrDxsG6cmnMXiUSEtspUW",
  "key40": "3RzTLAUhmJn8xzcdhbt8VwYA9i7ZQCPd6nL9RrVEhk64g3hUC6f3DLpprc9CSyysVA8ssWxkMu4UfGpWaHaqcCTt",
  "key41": "2Vprizh7WarQMjDej9peqAh6A6rg2WbgaCvcFpjHox8M8MLQuSzUBjfoLV1kCNV7NfnWQv2xSed1cG8KiGnbQYqa",
  "key42": "5cUm7Gs5DfYjrbwD3Ups66JTubgQ7DEKj7M6c3GRV7tFm5jvUjGJBkNNwgezaVqJuA4xziaJQNuaiadmvtqgec5W",
  "key43": "4qHXuPjDNyPodnCvGTwgejv7uYhaGDmYjCgD2ieM7WnDjgfivQQrBbQ6dKBL1Za8W6VhYG2BGXQNtBQttqowhd56",
  "key44": "5KsNcZjTfnVt7GV7KhKHCzUFtmUVrd1a1eQQKTm1jyyjx6x8FSTedqyEQben5QBfFTfdWTDQQdeS9BiHfbu877CC",
  "key45": "4oZc1RJKR1FGynTRNMWHe39df2qVbXL4rr2Muacz9e2AWPBCVsbCyvK9ynL6tBn4aedeoPBBiUyFs1YHbJgWaCiw",
  "key46": "55nkikzdj48AKEs8fVETYsbrkdhrTGREMcyvkRPQtPyRbcrR5riLxAvesLdf1kPjgXHBw38EYPB7UJPFd3j9thMS",
  "key47": "5onEA9Phfdjb8XuZY2WE8xLYnjdPD4ZqvEW7Z6e99gmGJdAWXwH42RbgaufxH2kdFKTPGjm5o1JGo1HtEh9dwW5M",
  "key48": "Tiqt1eiPBbbZJnZqCEPJRicLFn6xdVtnLWW7yJy8Vam8TY6UMYW8AfwK8tcbeYoXg6WDXGZhtcxQDxE5MwXmFfc",
  "key49": "2pQqKR1HK6Hi6uBTWGVKkZXPuhJB5j57p7ffJhvk9irBP2KBaLLSoynaDmax91GASWgZzcDLCj7WY2PLKHj6Uxr9"
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
