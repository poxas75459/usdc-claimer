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
    "3cm71VFPfoVJuGZ9xwrRCWdhUmKLCXYpNhwFqmpLuVY2iL75trmRK26gjt1Z7TmYzfmiodNeMtnTRH15fRzTxSpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFwtKQKzZVq8biuFrXZKRrvv7vbR6Nz4WDPmjsyPmg5i4wkJdofEYTx1XL5BVq6QDFCKmzXm86faTjtGMGYFAcs",
  "key1": "4YKiDZAyaB8r63Kpv331AwtxyJemND25NLXadyT8sk6WKzeZXieGWZDVqfFuk2PgVUDqeHCuNT8zAM8h5JJc8t24",
  "key2": "BoL5LrXyScnqh3a9pxGweLChHKeR9zzTb1o3WZsPsEbSQELCjiAg4ECEB8jcBfya5LZsEegvvSAjhta9Xt77vcd",
  "key3": "2NnGBGpt5aH6WyQUcywwoxjTYJReSRSuTGPzXQe5De7YjH8z4rc3uzvHofAuorrfC4U2Qd7ZKhQSN7oqfHAnDyUG",
  "key4": "DCnx3YXsiXQBxcQ9WHiUZK1g8YtQ7jNdZhhzNTmro46rPjd8zHdZqi6Kgx4rALYMMWV16sfC2uiqvNBewGHgW44",
  "key5": "29ezzEYujqkqRaZZqg8TLBGN88cv1cwBVDUGz7xqDx4ACwkNkhyDLfaWsfB4QiYr2H9KAT8WZ345yvowyjkRtfjv",
  "key6": "52WpydfpS4C1wDRZmZuShLjDUCVJZ8wVdKPWXeKJSE7zhtXAq9v3fj4cFageo8XDzwZC2o6gEfSSV4mRsGUxCNX8",
  "key7": "jo8aLz4DyS32cbReoH4M54JNBWFT9fJsDn88un83nq2DyKb8grV5ZuzaJ5Kj2rd95WR8kXHyGQV5KCYzK7q6CAP",
  "key8": "2L9mLK41wujsUZDbdEwBW8Xr2Zv2mbzAgPMSRwGJv12W2JvRwTAZ1WmZQv4wPwbaMcTXkocW3gij4LX5csYaJ6Cu",
  "key9": "5zfDzkBgvwyjuqFnmTFEUoC8YamH63bqRx7j2t1VXdsm6Yv6eUd8VqPYTSdKzSVZgzX8Hf94mu5ZvctsCuiob16y",
  "key10": "3svrm2PEVWVxLPtXdLv13jTwTC93wZ12eVPLwTJAigf6d1GTkZpavN9HARbRJNX1XPvMzDnVKb8JC7SbPjCTn9rB",
  "key11": "oz9qXU2VCuzsrgpkpZH8zedLUBeGtvgfTLHFEW1Ki4HzV5WqtbwjU8nwuvRQDkrKE8JAYzFnvGGLPnCEdkJB7XX",
  "key12": "dufoFE6HSHP9oMcGk2h37KsShxe7QrJSeZ7XYcfayoje19L887ThuRShxApMkP4CeMbRfNnwL3DbY8SzRBUqSCA",
  "key13": "3XDbgBKmzWGWuS5HKnqmBiGeMrDPNKxptNzok8yz1pcPKPoURvanDeTHPJRMVexkxve7yXpWAKLABKSPiWwHfUtP",
  "key14": "35ggbKZAk7PQgHfhJhrxAbqndRAMmd4QSzvXRN6qsD5ccG1VsRgNrFYB4vTwvzAjArgY23Zar7LVgLoUv7TzkCdR",
  "key15": "64Fb4msqpcLkr3kJ4ENPPFH6LGNJyhCTH5r5rWoM8sWQSqKuu3Ya6NcpvYnU1eDY33HLZgCWYjPuSxH1gvzz1NEn",
  "key16": "25U5GLuvbnVerT6TjDwPUhbtSwGjsYKkPCJxYAVGzXzqA7ys4rg43TcoJBVonqy3LWCh9Ly7oFnQDkcNYv11ozWh",
  "key17": "5aJKC4EFFT9TsPckXFMapERVqevhQuTzMBAeTqvTHqstZVVmpcFSwactSUxmPunimdzmGCc4xBXUkVK956drU4Jw",
  "key18": "3jH9r6XKWq2NQvsnW83N4ezRFrEmFFk8o4EnSkaTt345GmKvGbiT9vKkwi3E3nXkhh9raHkQBi2oPemYgJhkh4Q4",
  "key19": "5ZxJSo2P8Mj4UP4yMR7TAFWHwJyzDi5G8MsZTahWY4oEahgEaVZeTo6YCNqSDmxmGb2y3GSvhgALYmWB8ggCys4G",
  "key20": "oXxjwxBWyeBi6945J9pvNvzpfWnEMekyTsVQMtQ2RHW5wAhhp52CHhKSXQAEnbKqvZWmd9KvDnUFv6UhMtraCko",
  "key21": "5tvbkkWKuH1LHSNeSNALS4H7GXdgjzCZmekDfpsS97kynsaW78UMm2QHFabEea5FxnwCyULSrEnEVoZMrGvYzWnx",
  "key22": "2kYuwAQmbGHsMNuTLqWq7h79HQyPwEt4vpi4xrSJR5FY9CWMDh5FbpPuGZVoRTqErSMoKPSUKEbEYTbgq9pwbN8Z",
  "key23": "C6RA8h2K1Cgt6NQgsJVzwhDpZjoBrQ8DoFxiGfQqjY4xBFhUVAbRpRT2x6FVQ58f7xNeqPaFSYCCJTFTfRCMieP",
  "key24": "ejGi4u4uzyhD8dkAoNkfSc6J2XrDdCvjQMeWGujJYecN2HXjs7MFnQ44QcpKouMk4eP9mqd8yiqLtwJGVvXRQEb",
  "key25": "ovQBa616Z2vXTj3bU6SCABTNgrtYD2KnsSH959r5VC574qQBKVFMnDnNnixJxxYaNd6v9bmnrMFWosGwDSaCdcA",
  "key26": "4kVqtWPbpydQc1VomA6wfuEPQBQTnZbqFfC857TeTtdxUczUJsuvD2fTovLN1AHKGNQF6rxHPSv4gXydihMNjwLE",
  "key27": "5Dy57EwMfTCjY8WedzBKsxH3w7GrhFfjFwqLzM7RUpWMG5T115zfMMYPy7qUvkwhovkkmAkLk8iPiXn55hEEPwJP",
  "key28": "5VRPd53bRewLZDdFatvZg8guedgf5n4v8XWvbE7iQU1wvxRHtVwTmzqypq9syqV6B932m5o3rTFY1B8qNLkVwxPd",
  "key29": "652PhhuZFGMPXPuTJgo5f8gh194q4mtFhNKc9bnLhEEuyuxszAs1EzY4pwQ4nEn2UtYrkjdmvepgDR8HsLe169hA",
  "key30": "4bXVw2WEqiZNdxn7GPi8LpnroU375zwCDDHnzmaTqHdCZypHS4op6UbEdCTFaJisK6URDkMH89EJ5KFACwjXNcVW",
  "key31": "oaJxvpLaNF2Wh7Gwcv3q2U7J1YzMmjbim8L5DUm446CVXirhwrhTMi3Sfg8msd4A4WKKSrko6tnJJPAd9HU2aUv",
  "key32": "5HPy1UsAJRP5U2cuYZaDAce3Uj5aomfKk1GJqZhTnxiLfRxFfzKFJn23Gc1SUJvnH2kaMy4EBXSEKtULWhHhryuJ",
  "key33": "217pmfC2ieYzxezVZmEjHyMADw1VTzTtLE5RQmNPSoH5Vscmj6zzrm8YvG5csieBRtsy2psG1oyxp6LL7NDHuUgA",
  "key34": "4jgJBJM9dp2HLSgwiJw3hrHRPK5pyEpFxd4YxBNgeJcrp4oDgXtjzzYui3CoggnqqfLZKonxp8KtBPjks3b1zwwR",
  "key35": "47bmPaSy68wMB1PTngMx5imwastrhMnTFiT7R1VgyQbPffPU1ByF8W91dDH65tV8dZ4xWfVy4TEeR3GkMg76jaAU",
  "key36": "3mQjJHXUUgZQ2RUVQPp7q5d27jFK3ZNMt2TcEvkzSpc8YsDMwso82Fjuok45wy3ZKVwMhsrseY1UTjjrpMs7yNk3",
  "key37": "5m61zPmKUwNpfgki6ndpqMBBGKBhz68y4QFq2N7DVngoPwwmwait13kPD9fPQ1sjYNNjAx26x1bzeYr6Z7Tr7Qb9"
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
