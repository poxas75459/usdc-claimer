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
    "t2RdYmAQqTVJSN4kgf453JAm3MaZvPTKbMmrr4WFhaTNUie3hrjcFDx2aTWU6fobgZcStZczve2vfKFvYDQjZmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufKTna9oqX8AweBgQNLBGSyPQ5UY7BQ6MQKpBW2oCWHeZNadApWBDKNXQhGGiLbkYpt23Hi5pfKJkUGkDHrxCuY",
  "key1": "4Fsn2u2X3D5Gvqz5gsaEsWQMQ4TxH8sJ6rtsCkeV1CQRBLMEaq8BuSFmEbGZZZGxp9MLbdmSSD2S6YBHDFkCp6Vs",
  "key2": "R3WFeFrRngixGV2rPfX4BcMUpVsFDN4DMwkxTTcwvH8cpJpRdxHoR9q7J3EDsadsF65c6FNNAB4z4FpoHJKSy8s",
  "key3": "4fDk85DAoWjZTok3ak8brtMoX4YurkC3dYkuHg5hbUScnWsG2o2isWhtPnqzUKTQAqVkLvLKmTaNUUo4CWnKw35B",
  "key4": "5HJ5foraKUvjCyBshMJoxEegMXe6HPXQxBwJHqvke5GX9NgJueMR3RCbSkutwUuPksADSRVQE2HXwSc5fExosheF",
  "key5": "4cAwdcnon2tVPJkkCjsSTjqVWkf2s5QjCfvbpuGjLQcjDt4QVG2vf1CXkBqWx7caUHdAWuTzRvqJhLU4KEreqQQ7",
  "key6": "5uF7WEicu7kd3dkza46bWmjbJs9Zz2bDWKgJvn6iG7vLBEnmVkLBbESraDgFf9Jc4JuJP2UXfLETBo9uJvWPsqCZ",
  "key7": "4Hkf91txEGrCJLyYur7fVdFXkuizBWdgE6ud2PKiCWrXcti9chCwxNFVcoa2tcQm7wSWvFC9MWMBiGQrpKqs6ceL",
  "key8": "55Xwou2Ry66c37ovPehxmnTsiJJCKECmPDCeMWLwN6bCZhV9cS59VwZnrQiRMVG1oqFVWcFwJPYm1GEJuCYL5XuR",
  "key9": "4rWa5z5eUdPgptCAC1NqUMoDfyniHVfxRbxaStaaqJ7kKshNfStKgLNuwCLkZaCpvQhqSWwEud6jPvBdLhViUdyx",
  "key10": "5pBZq8wAdxfCuCcCLhwDUU566HJjDsJXuiBzqZzypVuzW8p1DSwuK85FB2eEkUuu7eBimXNiDG9GrMAAwstPTEXq",
  "key11": "3drqPVcgFQkHNuMHyQ6MqpVeZ79WZD2nUhzVEXcGj5Ww8D2HgFPnah3RVXTD1U219rqqj1dFnuWavaL5oSveUkvL",
  "key12": "3hr2XJ74ji5ZbxfLNkdCPXtkzJyt95uWzoe4kSu7TxJqE55yGXPwSnHjLeyYkQzxbnR4M9wtWMXisM37R9VBk6jq",
  "key13": "3VAfrFNinL7tRqdnCBhQp89NKjkUXcRt9MWqoYu4GfF2QvuYZBesMswtE6MGF3qowMWGJR9MP6TiKHmeGCTddJbF",
  "key14": "4iJXeVXL1e6NFRk4FZYU9rscHd4BrivGgkcvpzH7ZXVXiQhyETjvZq7f5edDNcAfjUw4dPt6SYyKuXWoNyUTxcGk",
  "key15": "5eJH8QhQqzXGhRznLvq82uDMPGFPExt9KFfhxPxy1v9YVK1oHCspBv7oCb6JqsdEN9qySwwK92BkUHo9kYvykBvL",
  "key16": "g6RgguKU6HmyMybujgsiCtPxkFDZTZ4wW3MK6djPvYCi2hQmz554NpwB55LK36SBNHnUWWMJ7FFzQPCmFZidESQ",
  "key17": "3VQSGQGu9uCGgj9gCaZKHM5xtxZXJY3EsZ7P1dur2CvboBaEbAB3mDS828gHHz65wgawiKxXDpDK3NfjqPWmoCHy",
  "key18": "5SyJU2jDF9ES2ueQgTtCrbYpC65XigFEfgHBicJ738whpgHyyKeg5Mtu6WSKYZQryHvzvJnyEXf2n3Hn3fS7pL24",
  "key19": "62EgYazfBFkUMXYjhVfYpWHUy5knKxbQaLcYLW3BT6hadxRXUWSSq2bwfkeumRw9EgYWnfXf729hUwn9UfJMQmMx",
  "key20": "2XLkHtEQgRKCWKVQrCUtX4hYuPKR7vGNw6hRVPrABbsjxPKgXRusU22p5g3hKMXb1xxWG1eLgRcbWqD3ZdfM2S9z",
  "key21": "54iL3CeEemM4RaSi7PohPwXtBcQR2zVaQGH34q9zyJFe8LVHzPk96qDhZqXDC4fHPm2KseshP6csodZCkgscNrm9",
  "key22": "3b4zcVfJd6p2asHvWSi3HGuyMVJvDmERFPZzhLufRHgmZgTAF9snLremW37n17UbELT9ppbLopZfZ6knQ5L2VTx",
  "key23": "5fbKadRg5rzeaY3EK25LDJEaWLP49hHrvj8c8ciqd89JQzpcL1ftRfHWBvDxd4kmWZ6JgK4tvPVXhddbraXSjWie",
  "key24": "GDhj97wjJftyjYMStcsNM3JnGssqfSvomd685RWykCQUJfrrGqphSjXXYXVkQqHKP8qsbtEMWUrTSdL2fb8fC5F",
  "key25": "g8NUAS4BmDZRfc3hedYCuumXxpx3mkxBA1RGaWyrgpkZ7zTTYcxeCJ5nrGJnvnMoyeo52h6Qpbgj368xRTGEQyG",
  "key26": "4eJGPr5781aYT2s8oyGsSaaApRnT3Fud3vNrx9GaHmEwx2Wd7GMepQ7GyzLD1XpSfJYEfatT7gvV9Uzf9ju2ZGH7",
  "key27": "3edbAHsWq6cD8NmpyMcJuSqyWmax73nQNFzP7Z6u9rnMgEoNgJjkRmxaMokfgk1vfn9QFiuijL3us2sPPfEHJDNz",
  "key28": "2faZnhtjnSzmothQSYPkHhniqcnqdoWJKQhfYp9TdTCuV3zL5TtrFoAv3f593TT49qH4J8F7x1nTNV2qpscaEGs6",
  "key29": "2zTEZzDq26E4YmfV1w59UUyoxeUq6ccJ7aENwnjskwmvW6SAapPyySqxEXXS5TifhcHHpPe6aYyo8AffgAR49mqi",
  "key30": "3Q4LBqMkZwKwtPcFA6WGgAkjoNaqVXxuCdsTCZpa89io8WT96mEynhGYE62W1PKNvz9Xm6KL4KPRFqztrcUDhvT6",
  "key31": "5mimZtn5TDrkamJgiDF5zXJNkWB26mVQ7KVuNrMTSxSK3ZZQp6oQyrbgp681DWY2gWcYHx6jt6nM8kKgCC81rZgo",
  "key32": "34DwE5iKyNPBKDNg1vGRxLfBaWmTrYS7XnQkg8iGFJHiZRwpRDK9HF4nYZS9ezmk3SCFVCc5Yi8VsudwavdXvJN9",
  "key33": "2bpXYnHdzNYBt5CmRcbeaffZfeCqjHXFmMjufBqzwSdbgVa19uNB4ZGRhZzFuXHVyXjZNPSbfgDhr2Ykc28K2H7d",
  "key34": "5f9mkvwvxks9QrTvjCZoW64CHj5g7A3BbJ1ub42Rabc5TftH8GbgQvH8b6fmMnQ9S5cFhPLkVMdwZeyf98rY3MZN",
  "key35": "48GJcpUYLzsViN52Wsez6pnL1Aa9Vrr3oYeBbNQw1aXkW8A9ZmgbTywXNekvyEXTKHy4tEUzwaomTTrrAxV7M64s",
  "key36": "5L1BGz6Cp7DT6bN8bt3po26uaLpMim16uXjFNK8BBXnTPnvmYCWwWZhUN8PFJqvX1bhKUekUidKhs881UYuhJ7d9",
  "key37": "sHXPUu5CpTVsn36LLfczEBRDXFqzEZ2Nb5ix7Ukb1MjznwAXPWNCgRFHtqWVWsHXuWtEBqSVYgf53MBHVcKStDV",
  "key38": "V8Tdp2cZ1SxvNdJiWNJuzPEcqAmW1u7Evj3McMxGtzPmTFcSU8dHiX4a8tEGYYxnyJyZQ7kHqkeMLaq4YVPbHzv"
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
