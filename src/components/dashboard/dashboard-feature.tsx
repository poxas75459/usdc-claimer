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
    "4gR1FjrNdFthsUVhn8ELYeGqzLbWBCLzKCB1dgUwYsPV4CEeJZaBEmJGGsvBg3Uaxxprp9KieNeBovkEdEYjEfLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZqEZrve7Qqot8S9PcVj6Vd2NEiWkEBNHxC4Rvj6b7PQjPuFJZpPfsYyGyPvnVM2mWzUsuvYoqB9AXmW8ChhmJ8",
  "key1": "5VPVnGvCMW9bMNH4QnB6RYSeapNpZmV6wQ9aTuAjTMTcaEGDXs1DUxWa5trj8EeZQ4FW6GNCaB8jJCoJnwdf56Bn",
  "key2": "2RbQsX2qerv7qdN7YP1s9i3XqyiLy4BuL3doXvmUMXp32TxRP4XTJiV5qh4aze49NTGsq1bMinR62b4LRDKcsvz1",
  "key3": "5YmaqrJ8d4bCfh7CsLwS3tE8zz8qaDkamzdEDoHGEA4GnNcQmNccALE1i1rSwBYssb2V5H4zatKKzQCdS1vGWWUt",
  "key4": "2WEHxjMTA59sS2iHeuEYpjCcR5fp7oGKPsphPPeRwU3CqsUkKeU2LKM5YFTtH7ShKppN7BJJKdyiya7558ZdFDK1",
  "key5": "545YTy2iQC5mKaKnuasonZdAyf3qaUUZf126QZXp3bT7BuWHT595XSsP3U26yASJuhakMh3K24o8rt1qeX2kgMpY",
  "key6": "3bmcuYjc6pHbsix451711dhDXUxRHRE1Qeb8jezpAXdS2D7YZkPYZKkZygqBMeVmgLLpjGtJy6rqcbKFEyivzp4B",
  "key7": "223YEDUZq6VGQ6zZuoNGa1K4QRZEmmXPpuS8sudnmXwiozxe3BEHKTSVHT21EsNXGeXwgn8AQk87QFEXbauyF92s",
  "key8": "2roXpy4TsJ6hdH3vwXCMBDnC4SQ9uwDBdQLJJ9gjBr2NFk5nPenF1t3UvbLKJbYS2MZQsqpqP1njo1RX5hnzHx3h",
  "key9": "mFvupBmWf38mp7VhZR7iYeqi4tekC357RCPk6AAs4MGmHj3G1P5eCdkYJ1MckiyZosArVeaGUeng7ZwaFLFRb3q",
  "key10": "2knwLu7XRHEuE1zEDo5soPojgN76V1iw94s5v8vBxkG62RWdXkv9LduSLgppp1HWEbRCrmacadeKe5PN7VdzdXHG",
  "key11": "62HN8CT3wTRYphE6rMvNbiVfEksJcAgQ5sR11mH7hHwD1pf9NDbTKUFJqix9wMRtHuRJ7WfA4BySXkw44XwJs9mR",
  "key12": "49KPrMg2QF2ELuw7RGEFE2a8cop2JNFvksYwSFt4Ni44RiRY1kHCghpe58ppCUckFmHEx8x5oxkh5A7Ws75sTPbV",
  "key13": "45TNpi41y6rreXCmKRZVwfSRB7AubNDmaFxvLNamVczvySfUMbhcZQaGzgKKxgSh8MxW3G7XTN43gecTSurBBmgp",
  "key14": "5mEVPuQQniDtagYfcSpQyDbnGDBobwxr4KSmd8f5VXw8zTwaEKPbqjLkt8MsnYygQqS8Kf9L7jVY99joDEhJbCim",
  "key15": "5SUvee12R1upqWVh9TZhXHN22B3o7jLHCMPDhWVmHWH1VVscHP7KYcWbFt4m4jFU2qWT57wm8AxZ7T8gS4sWz3rw",
  "key16": "5SfejQss4w6tqNt5y1VAQByVjE7bfaGTJ8NeegvThNztT1ziQNHvFRNfBine5jgEYsMZTNSCag9cWKNewk35pvyE",
  "key17": "2f6zybbgnt54az1LwMCXxtrqg7PMN4ymbXykztjF4b6DLkk5d49wTZt7qCtoV6UVu8HDWKCFiEh7SeG29Dd4psd2",
  "key18": "4nJ4UJ4YcANPk9srkofv9BkadB4PEuZb2dX5Mhz7rUm46YGsDaDMkEf871SQjCAQfBXPJSuPJKviEnW9zS8wQSmv",
  "key19": "5V2M1Cp1hKJHUT4bjxoveSNxb4cn5VawRtF4GHRbJcJA1XhHx8n69rCntNVmNuNqG9TDVfqu5QcS8NjnB7Y4WxNs",
  "key20": "4BcyfqWE8Ts8iHwPCypqoP92iARJhuU4C6UrSHENULnKhWR4bUrpsEvzHmcthK2APf5xPHx4HYaf7CDnhKZWjhTT",
  "key21": "2jZTgtFQc8iFct5KmKpASQAXrQKQrA8WkjVpoazuW9knMFrUY1h2a8yzmLetum7ci39m3R9bL3VuiVt1ZY4695pJ",
  "key22": "3jPoMp3xrevzF9TGnSKyC2T91xn4yFvJD4XSoxWSopudY8TrA5yKv2NvgenqwY4jXXkk11TkrD5QzTe5rNMNSyH3",
  "key23": "5i63dAayg6pWmBXwoQczU6dgFuX9kp3bbPugsyHbaA3Aj2LrvwgN57StrVihYfQa9JXqHSLF2Nazdov9r8zPectf",
  "key24": "5mh5Upp8zjfWGnX3xtgEww3kfdmgSet9ZZfwa2cvsmaUHEtFcPs1A2RTjWZQD6UrZNGwyqhD7LxTGvsXaA9tHpLs",
  "key25": "282kANTXg5wtW3yJBab9t3CfaoRxW2KX2iSTr5zUxqu9QXHYGFWHjQQ4YYHuqJkPZth6HwG8VHjbbpgRayN5YXDN",
  "key26": "4rvhhoobtCNhGxZKgc2nAFsLDNS23931zz1V4Xn9sETKNZsN4hek1yyEdN8fYUViNqrt9ZiFxiPBRB4xsJxrm1PV",
  "key27": "2fe75N3xRMbG2YdvCWGH8JANFfXknyAfcgybmhH1ts6tqNEpXmGNj9sopGqeKviTSUWVPD8uVAr1tkvKGDDyeMQB",
  "key28": "Pms3yee2tuHyZdEYj9WGscDeAXbKo8pfbdAa7rSLyadpqoa7AoPhCm8QoMxtxMsYRgA6Kwt2gn1AQjaT9wNonyC",
  "key29": "3REYCJue23go7LGGZZq1PcnN2K7NnQ4JtBkAGtY86q4qMtjT6FNvpqGx9QpEWBZ1ey9PD16fb3Wf7TS5Dz8Q12xE",
  "key30": "nwnAadWezMUb4Jdv5mKajsAisbmkzysFLQ4gtWfhXyrBfwhrvW2HcVfo8B1KUZWHWheirV2Cw3D3GRjGCrDjBwy",
  "key31": "44CGghZzb8vekpcCimw21vPfoPtnjtsNLRAGG612n4E2giVRukxuYdykAmsMNcLdyWa6HCZgAeMdNRYdiRKJzigS",
  "key32": "2XM79KgiLLymPPu97MyJBKCDVPekYMJaR5WWv4sYDM4YrHajBzmGvJf2tsrNuZog38yoKYQv6XXhi3SbgSSGVrCf",
  "key33": "5qqTurhJJwigTviRz4wXMJRVxp3BtLh1yMYUdcTRYCXzdtQodWRskLdM17mwfAQPJ6Ldsj57pn12nnNtQhGg9VXN",
  "key34": "4tNYyerzLdkiX8xGprK53dwJ5GyNnHB2yKXvTmxYKQe5oN3d7a18U2iJ5xkhkbzhL5AN6TrwS4GbGcaMhu83XRiF",
  "key35": "44EfhkMKv3grGWSLzkVc6UCg4UP3azpGsCby3pd5DPLZYhDEm7vT4HFSnP9ZjCDKvgc34Ef7NQ5Yadej3KLmnrZY",
  "key36": "V4jw1Td6RmJ27GWZVMTUPFHXW5idEvX4NMFAjzRMwfM4jC8GcXjZE88Ye8MnitwQDkXwtnSGoevM1XKBsCVrqsX",
  "key37": "HUKziM8jsenYvkgukrdUG1A4w1pfDfyzrv3RS62w77eU3hahsRn9cAU5ScEuVmjyfvMweYoB59vShUNoqp4M6D6",
  "key38": "4q788fswdMPbiHLdE9KtPUK6VMCMXD22X33mGZoSHXKdyGtHUeDm8VnEGxr3Tg4J5S9NVPbzv7YzTNNa5MgsRffG",
  "key39": "5Bj2hDRbjv5ti1YjHHr2Qc7e1jJJAViYuKze6uaXh2mwoF2nxp2Td8Tx1pipJKegfo7RsuDpMk9XKeaAhBd2dx6b",
  "key40": "4r7ha2BjvoGARpRFCKAX6g9MGhTZMmTqUPMbgaN8jCr34fezenMiZd5X6jAa42g1gVfFM66yc4DzKaWDm9yJHXTV",
  "key41": "3cKakyG9MXaA9jLyy3MpKKV3pQE3YzNTEHy1aJ9Gt3J5m45bZShn9qRvVdTkPvaRXtoS86E2bWt7thw6fQRZoq3v",
  "key42": "2x1pYiw9i6BQpyCcbsxGU6vBnzPSXy44s8wtRwdTraEiVTH7bjGFPobRccrd4th2yXZt6kUotQwfSqu7At4nHCWU",
  "key43": "3AyvgC6iCgkbPmoD6gqhJ3kJPSBvgKDnvM6Y2JyKxvcQh9kcez6edvPQCqLChoxfUhxhxmq12zLvqPhCvezvw9r7",
  "key44": "3g9avPpZKjQJ5SUCrvS8U4PEs5mvxGRxsnbzANuFBG6rBwNnzAH1ZAZtBhfmbZFCApeJCGoN1ynNvwJKJxgRtwib",
  "key45": "sgsXaX3WAZjSPYsQZuSGhKDCmVh5DNGqMDXu43nsNruHEgm4iGJM1zgZmiCazs5zPeaY3AETx6aThGW8jNt3zVL",
  "key46": "437zSCCWRLxKjaPgk2CfGmHyro4bc2GQQWJ8px3Y6SVebf82SevSwCMjudDw1zk8jfDDwGwb7ihxg7TLm2rMBRvd",
  "key47": "3jqn1jcWgsMBHsk5GjDGr54s5amFEU8qQMJCyZLXGz9gWueZebxxjjpxwzdEpQAJTQFxPXrBArWSovPKjYutRAVt",
  "key48": "35ms2EcroQQcCU27cLSjvk8YixakU3LpJ8R8VMudKz5GbN43hojhFwEcBW1EHpP2mPuUVPubEV3jab2AEYX1rM3U",
  "key49": "3XXjhvGomQbQPtKxfAPy6pNWyHfNpqh8VwYGYfmjTnzFj8CCp2vLPJFCyTNKqjzfvGRCzXHEQ9rJPn8EJiLPw4PQ"
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
