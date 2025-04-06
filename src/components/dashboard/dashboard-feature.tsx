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
    "LAkAjyQAWuvdQ4JdZzsJnQVXNTUXW9wPTxk7JM36PUoY7SY7JTXMYW6u42pzCwCGt2aCvw6dmhf73kfNFnfq3r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJwor8FPhNQadn6WUKXY9A5h3wgpd7z6AE9jYf8B3Zt7PMyHYs7pxL2nBmJpGy9aQwp8ENknuF3WAmvyar1grRn",
  "key1": "5GEvLS2fd3bEWg8ET2aFRdEczFZ6siSxoNq8pkRB7bMo5KDtrtj3AeBhyHFJsZEKYivmyJZiTRi1U9HZiEAHGea3",
  "key2": "S8C1tQqX7WVuJKYhHjCmjnWkRmeUPqL9TDBToAnjn5bPWV5t7aCzWJgspQ9AHrorifNRztDXBiU4x5W1xr3L8KC",
  "key3": "5Tj1mmrBq5C3pY6aKm6C8uDo14BoYf2dmWq4Ti5isFUsXaqRespyZarU12E3XxhJ4yac6pdnb9VvkVhS9bPMFFxF",
  "key4": "4stHPtXZfCBkgMPovx93XvkddViAJYotddxCW6AmXCaVFzPzd9hbSdPa5wszKbdp5KEzrtwXY6b7miAqtttZDEQ5",
  "key5": "5G22SN3adF2YmFSev1WMfM8EA3RHG5Z1rzYMEBoT2y9uuCUHn9fH6iuhDP8vevyXoWevngM9aFujuMWuAtXwoUfr",
  "key6": "45Ma6SAPWx9qC9DXp8zj1U7DeEhZZibeTQzUpupGrs4TDt6iE7E2VdMTbYrvdvgnqedDpiMYgBENNKNoEzjzbco4",
  "key7": "2Z49YQVXnUxU2qaZV35wWLfPU7iJZacEwXshSdJ7k7e7b7cdCgrYujAxk93vwDjQeHZzWdk85T8vvb6UBV3ixvNo",
  "key8": "4YxJ6KhHYCuBMCAtVUjFPZ67BGUrtgrzwoxFecnarqpeYTWyGMFs7eoj1NrE4MJkDPLya7YhsV8xrwSSVW3wKFzC",
  "key9": "g3rCp77fZsk2fWLFMg7mvZ6gLWcjx2J9nNLyCSaBGZ9dNs1SfN97VyboTwZfeEyFPXjKhLB5RLqJvik1gwWQCts",
  "key10": "3jPsgn1DP1MmBiiE1SEacPoPZRRjubpiYTrEFeEfFvQ73Vc6UG4mKQkRBj4pngs8uA1QfwdbzXtqxQ63r4doCq65",
  "key11": "5wBaxuSgtLsNVztXALdSFQe9cGzAq8jS8TNPXiGwkg4QziENFiWv2PbZoz8XG6imP9WHHwV6MDmKntMM15sxehbw",
  "key12": "5hGWNHYyKGNNWFaJCGnFoKL4nUWba8kfm5jujtaKW7psPYS68qVrPjzVdwxZceSP68EAdZFeUdUoKZAUtpqQf5QS",
  "key13": "2DgkKxFQcMFxPgfLkDHi5ziNUBY8xnifmqS2pF85LgvU1DWrZYfTfU31De1HeYctBFmRue1eD9YWL5fw22984TR3",
  "key14": "4v9ezpRazByS2z2gshemZEwaTHaVUMdnY62BKaCBW9W9DKGijyzZYucoem3LE2FMeQS1vuob8HD2Pw9JhE3hM7Sa",
  "key15": "2hJc7dcasRb4cB8Zq5CfYt8Ui9ZDXCxga2fjkM1m4wf96WnQ6TXDAZ7Jvhg7dxS9CEQxLHfs3hbMFyfhYuxbwAHA",
  "key16": "5qQdQiK38avtDwbdwGshRdozzpfvmXrQwTsX7jzVbLARTCPJ7WDcjkqg3z8Vd6tDEsHG5VyACEgjbqwxQVuLXJat",
  "key17": "5BVFfR6fLv6sqHZdf466UzHxavyJLiyGjt3hJws9QXc4E86ZofoVBMfwjozqfx8FDfzjNzM3KAYunjoX2ufsypnd",
  "key18": "352GfmWgwtFH7nEZdGywNd2CePBHQmrNtWZfX9BZPAJPsA6yoKyrxknACUUPgmzV1xDbj57TLqW9kSiTcCHjrqhP",
  "key19": "5oocagTGn35PCZ13c6ncinNJzMruoe1gCzRPJPbd6N89HiUFZhrSi1vjboPCxF7LJur1A6UbCtBP9dEJiQ2D2wNL",
  "key20": "E7Peu9K8otRsbqMea9NnxAnHHs3KdBTKU18584ok6HBEfU4oP4ChJCLMZ4KEyUSYnA39hMe8nibvfgFA8evNwnd",
  "key21": "53cdeXD4xbu6Db1XBRnQ2RLfT7DB8UxCKtJycVoHxiYcjrAaUnAazsZQDN7oSuReGb8oJbn4FHdMzUcX5AM5siAz",
  "key22": "5WRuuhMHMJXfp9zvaqCwkcrW2qqXDazjaCPk9u4zAjHWsj29hZiDjmHQuJeGe9nkrp1ytPJgBT4P9JHMV2GrNZ4z",
  "key23": "4p9wc9xgv6QPFdx2TxZ7MhbLJWWi93Ax6kZh4hC3x3GvYvX4UatxqM7G1FLRfcxvyQeNKaFrYL9QsPFZr3U5vqjX",
  "key24": "2xYGjKpGfbS9m5EEvgG2L9EWXomAvogve2gLaJuNhaKPFYgygbi32JLzM76WQVAWWiLYm7RwU5Qy5WRZs8yoTcBP",
  "key25": "4iWU7NGGLwvXqXvKCgfLTX5kkTVv9NLBSZSyEPMGxMJdh9LY2x8cxYfpnN9kpUVEJKZMZRCsbdbffiA1fT1unm7j",
  "key26": "3TWgkZFwaeTT9YL6B9SdZt5taHkMMS3zuMRXBHtoMkZnzJRKkpY86D5gnTzHuVffbNGw4uPc3SiBFEq1Pa9owJ1G",
  "key27": "33QVK83V4Ak5Erq8hEdtxFwvQm74RFr3r97byssdnURdvrGtVXbiTzqkNS4gKcw5Md6NBXS7m7NMmjbTTXykzzsp",
  "key28": "5GBaa6a3Yi4aciqNXfMA5RW61KbNTDZprYY86dKiAxpsNegn5kTh8oj8rgqJJtnErvBH7AcZxBQ9DwK4zuhs4tai",
  "key29": "3UTcbTvwUsmcJemQvN91L2cdyray5vUbSZL46SSQjBXA81d2ZKg76DCJ5E9uQrVVzuJ51FJ71EwoTGjPKaZXbscy",
  "key30": "62RGTmdMZc4n3UzhzaUdKYwnwRB2UGbwai9hcSYrSQz8rKt3kf6HjtgdpLE1A4bRXBD7YHUHF7ojdYFXz3Zge89g",
  "key31": "66Sw9FS9DjpbDQPnQNyYVH8SztwWsibC8Uuhdn46FfBkDUvpZGatHcy7TjVCFjGtvRd1tnjpKhvnQZmtykPhsRhZ",
  "key32": "iqy6Y8UJuBeq5uYvDT8E33fgTdUjpaFG9UaQQKBJCdq19h3jfviCSpGFZi1sDSof9Tx2seCTQWc1FSxiFt5eRou",
  "key33": "48mm9XzYhBWYhAtYLXMHWqhoh7VK2Tbj7gdDXJUDHB6qU6pq2PoWrt9eJKyzQrMtibJdhfR6ii9zCBBA5DTSPqFK",
  "key34": "2famq7h96X7qbXAPpCsEGsay1c627A7WnosGSem2YV8gvhSFpPdVHc2TeowaR6kwtHoZcaCDCDkGdPuTWpTRzK9E",
  "key35": "4Hag2jU4gpoTkXu8BCDzhsMS5dff1JJU7szivgrLaxHFCNkm7jzQcsqZkvZqbXRRxwp9pkyL3CSR83AL4fVSmups",
  "key36": "4vjTjtAiXL1zg22KjprFYCNwVJC6bjJmM2dgsAHuWskdPwQg9tHQK7rgBBQUt5Lt8pff8GyMqQeVicd5cECQ8UmF",
  "key37": "2na4tybFMmebG1T5ut2a8PF1ZhiF48J3MQXrofw25jzUr3rk8BoYFEXwUdfLyEgjEqRs8iPLKrWo4KGbo4LQL29Y",
  "key38": "8N8UjL45DRb4WDVm2eqaZQHVXAtsSPeczc3H4CQoQhEZbpvGXGWCVdfJDtxMGsgTxaCDe3FHXspXRMuQPGPAzKT",
  "key39": "3VMQeugRoD5SJikm48KpF5MjWCH2UWpB8kULoYbyq5R1sRhHNdC6ujBL4NZ4ztSpfJLfTXmc62CWnEwgxnwPNFbi",
  "key40": "5puYdFz85eKyuvAHLqssFVVWuNbVEZdiF13WngEdwMVrbGcxuyZf2G7mD6EY9vYbiiu8Btt82LqazdJBEWxvemH3",
  "key41": "4DYfoWUi65U1fuTYixBZLHEVmbsQ7wfETaokEe8P6viPQdmvJLiGvh1K4TgdciB7T6gRxQ16oJV3nsP3oRhDkN6g",
  "key42": "2tQWyXpJ3dtjAcMZiUT7EevSWUjLisu8kcUVjDk9mt8HjJfxj2Lat6vuocZTNDFDQNoUXjX32EfWLBkcqKPRZbPb",
  "key43": "28gZyRSy6qVhapxmkLQ9492LKSWXaHGo3v1w42CWU9LLE8bqdfpFcpVeEfKSDvY2D2UzMpqtSodQgMbyzXxPiwPo",
  "key44": "2HTM1MwrKzyea7kzqiAwNE9xNwg7UcfZxYBjHkhLX7Mempx5xjnqwRBVoRbvihoGAADKsmCfYpQxyQbSF5tD6r9N"
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
