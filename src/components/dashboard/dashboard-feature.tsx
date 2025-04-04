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
    "CjjdpbA9Ac7UZDgE37tFpRfhqiz5Cy4B72pEmS9jTRyyqmnKuV93hv6vVuwEPWmK8LsV51TLxNkwyWzLVHTTRbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrsVo8QGvNq1L8YPPRu5H7ML65K2FvohMS9g2dz4k5wZwEphzZn8g64Ar2KiTo7cUcC9m25QXq7enxYaRWjr6Rm",
  "key1": "5NvXH88oepKCvFXGN4TvpBtziYUFnZtDEpoK67qb87cTGXYPjmj5HB3hjCUUxVUj3Cbg4WtsKuGDCTP11A9yun5z",
  "key2": "4V966ZJaRAobCQwktFeM4mpkwX89d8y8MAtkDvXNWB5kMjJhGHzCLRAFFdN7SMCyorAfcUZ3jfHdhWadWGyKgwmb",
  "key3": "4Ew9qZkzE7eaXVA9AvkBahDCKJMe2fgKuww5Jsuona7ZFBDtAJUXbvDQFPL4kxAdzFMZKK5HBFZhKSW9YnKnCbEZ",
  "key4": "2Vv4GgTmVEu55TwM8emHYYYQS6fLzpbrpLRMhcDGP9tJ6fGTeuMAqhJbCngzTUpu25664gGpLL4SewPnxGCZghVC",
  "key5": "2z59gb6BY7Ue7mcAoePUwJJ3GuroTJtvmaxrsXzTwBd1peU5i2ZFSN3GjTsHfRKaTNAd6W6He6GSweRayS9yrFG3",
  "key6": "5jiQD6sHS7yXejcTxDsyvNnAK6K6iZAsrHy488NxzFMmhpnxrhxoxKqMtDMAvcV9YqJgBsCjoLZVc3pfToD4zNxo",
  "key7": "2fmAxak9eABbMrVwbP6Qgoorx7sHT8s43sq34bXguKiPDUWHh5n8ZDQzbp6QkNBR9TQT2Nz3wvu9hWhueBJzpAdM",
  "key8": "3ZVcnEi4BmKiTjc9fcAmxpGUJnPt8G9TjHB3B8epmaGbhfLJ2H2oa1HCWvQZPaJPR2jeZRiBGV6qfBJkxXTTECAb",
  "key9": "2jVR3UFkG1azsghcEVMFRtTNaFu4K8LqN33jgTQ8HjfsAB9SzbyJk2EmMaw2hR3QQ9v9JpVih5rKB549ptPQU2Ja",
  "key10": "4bvBmT6X4KQ5mqdzz43o4muCTMHXtLiEGxNYowrrgp9LpfGc63sqLFmRv5jQVodFUnwYpSQD4FfPB9MUDJvV5tCy",
  "key11": "2peSqi1PiygRYYiwU6kMB6tSQuDPgFFmjuKZDjbm9L6TD6qqDGNF2ScUz5oZ5TERG8PjJqUsAPTFnrgTLeb4yKsR",
  "key12": "4txXgo95kzsFHdkcuWWjp3JyN1qMDFdDncuQ8sVr5pec8EuupNaYHHSh8uHmY3zFyn46gPQZyBiVV4zk8zEx8p4R",
  "key13": "4b8HzFmc8RamPm1XqXc5KsANvpHHyDqEx3Wha1kXyGY6WkEvKxXzE97ezKFKWw7uYy7xh3xU5SbvSeCawcv7gTTe",
  "key14": "3Nd81aVP6xdiuzP44ppyNHVYaU5aEFBF8U2s3rhZZvCbyosV3NT2DnRF8YLb8v6QhY3bVqphDL5WRHaF6CDpsvtC",
  "key15": "4RybfUhz11gqpfneM71LLkuXB1d5jVAsFxGHWBvso1dYLTgeCtoPoPbMADCK12KKySsSjYtgRSZvoaRRPRjqpmSz",
  "key16": "2zmSRNhVjUdw8zowLc3WeygpxYYvuXUL1cdNcpZ6dvGjP8k1WKpuUGSkHTAwHbM7JkqrGSAzHcvgBrT7tyjye2Dz",
  "key17": "4PFXF7ny9SQcydMTTvejtd48KidSjjFeQHSRfJj963nnUsFGvtyUNkTzWtZ51nT18iTSzBZ7oqDRJfsAVMJvqfdV",
  "key18": "4RbbuWMraSXKy4AC8Nerqe5Atw2AAJ4xE7mn76LCC3RSGgDYp1j2zDdTWtTYYxfA9wzE9Vh6L74uUmyH4kZYqL3S",
  "key19": "4XHqocfHP96QUvMzyeL5Mn85tqhPumKQvczjmcixxziaNKgbeYi6JpmPCnMbnQgCwAt2UWtuKtKwGh5bWQRXRJvA",
  "key20": "41ZEN8popxbrV4rM7sesiXcJNJo8kx1qyGxgw8kgpfEo7vvczp6kWXdH7pS1VS6DuKk7PSPC6ARd6Gaqebq3JGhi",
  "key21": "5Lo84CXEtXsF7gQv6xUfkNfdZD5FDZPurSVw1jpWiR1D5ZMXFgxDDiNpzBAj1tJiivfrBrnnVPT2j6mVJJqygStB",
  "key22": "2v8Pr7NPx6uRzzVYsmwYDLeZNtrwpQtEgJprz3XcEK5MsSDMKKyHfTL3pANq6tcbEMvNCvQYj9VGWE5uq15YgyMQ",
  "key23": "24m79EUry6jLqdgHrB8fiAdh8ssCqudNNw5pafndZmG3uAejFxrpBztPKJT1AJC7igk2qQ8Ntkw4q9grxkGLxGe9",
  "key24": "2LTkATTKw9HVkACqnhuFjTavMyA53VVfwPMPSxBAD6rft456KyS73xE4i2dJW4QWziN9CRDeSK2g5mfjS67JHtFF",
  "key25": "3JeNHDi5itDEqfFueefFVEe4MkNadMLFE6UwJQ9bcWuTP85LTqYBV788vj5WY4KyBZerskhKECG6PTU944bMaCny",
  "key26": "rywnE93BdUbfMwUsymzppZu6i2EwRgf4Nx6gdrQb5stg3hwLYwo5D5YtspDd2Tz4htTb9EXM75hsgoz6ib8Vuqq",
  "key27": "63wNdNxhM9z6eNpexkh1aup9bMXhPCyHsWhGuBNyW9z74EtY1rFLemjBBp4k4BYACHyqmJF8C2WQ5yS1Ay4FuhGm",
  "key28": "75G454HG2uHrctfao9aPbyXdB7Z138AhASqTwFmZarhjjtCrEcDMXb48kdVpsBPX2oSJRLrjXa2PTwPx99duaBY",
  "key29": "4qSmjkjCwhdnDeyzmNyaz1PqguALid18hdoxxx4kJ2ppGccfMBuowUcD7A9LRwLnTYHCqTV69kBfGV9BMB3Kj5QP",
  "key30": "2J5dniYbvxbiS9Do8qsVjgN8GcMxZThVGYiyAuLSQFQ93PXhoTjGKSkzt8RoeUJCsw7sJiciQAAwvkAcQvZ3jTqR",
  "key31": "3g6JZeMBufJV5C7K1wzf3Gp7eq6jziHeN7NjtefTdXfCJGpN8DmwvySv9ciFWNerFYteEDPVvsVAERgNGrSPNwgs",
  "key32": "2KpNMmQvbuu7iNDB3XD2xEF6jxNXG4PiHSrzgQqipNsXP1f279cTKFLx5qRzoAs6UvNeAZsvojiu8JTrGzGUGXqW",
  "key33": "5QgsQioqKQ12GaWQzyaC1Q3gkMkE8Z8teVLAwdnRv1E7RvxQ1vtbyVvPHoWFWz4XTbEGUBVzmpUtj139a352EyWG",
  "key34": "iqeyoAsTkCFCNk5BG8H169X1idxVm76x7HqZvy8HWEY8YXEGrsdtQ3fshUtqtHHqcrmDjuC7tSe56ZsjZGuQSRV",
  "key35": "3Bk335izCDyryxRLeJ11YVSQYwKRZJKrfjoLyLXVdgMCtXNeAixx6Knr3DJkAahQtASo3EHMB95Qgh15RpCRAuLq",
  "key36": "5wxJ68vnqUE9ZYtAzX4nQKqWobQPnLzdqooKx75BCoR9SLyGMvxZoddLYnE6Y9FJ3LeM1CXJBW6CaVFfYHuNdPeX",
  "key37": "DdjrxJ3EpBunCGiitCUghfizLoYwcbrCUyyyffmjLCSZwzhCrpttEMniPDghzQNRVenBXGdnPyTpMsi2Q9VHwsg",
  "key38": "3e5GUzDBsYbapo3stfAsp9kuKVyt2DAajbfrKndtRZiYABmQVXUwTouWD7uTLkJWRDYMCxxpTezedzvbSXMYnDUs",
  "key39": "46HSKVPbMkoCZeq8XRFpKRtKeSzkUUPCaG4wAqoC4KMyF7qMQ9RwuxZSrBgJimNAefceoUBwgU8dF857qtwmqCB6",
  "key40": "3aMEZtW8EzJAtpgh6SE2Yz2f4TNV7p1ueHV4TYY71RonKmvZEzBPo5qXLSRnnheNUUD14g1JvduN3yxDYhKjAsj9",
  "key41": "2dpaJgRi8np9z3orxKo4oQxiJYj4jW9CiRsM94zG9NzwLW2M9hFLaCGDZT8z9qPi85jjSTFqnqLWVPcRQpx1Pyw",
  "key42": "35EuSSy1124eQWY3Kq4S44DNLPuVdR6GswSyv9zaWq1MXBGtJtuA1zrMzsdVYkDaVXC2oyTGQ184L3YGZPzC6UHi",
  "key43": "4Mbj6QXb5XCLeP1hhsPPthFkbPD22i58Xo425bMAndHgguTLwKqveYPtecVBiqhdbQCD9Ko1oXAehdQAZ9ViDK43"
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
