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
    "5F5hVJmncXXoLKMtYRVaHBwVjy7MNoXWkb5KrMtZ3SMx5938XEKBF1hHqV5hD9XiuToyq1p2pYC3UuXuE53VrZYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAoBMPpce7uvGsBEPVmMzW9F6GHQdP5KzKKsgxJgkYbqYCYy4d17JZiqUN2RJnM7TV5G7tnaXRNzkJBb5RcVxxH",
  "key1": "3yKXTyhzFRz5ePFfyuubZuZf2k7Kyvm8S5q4Xz5HZJ8Ps1kiFnXiTqq7gWfNyQxvHuZWK9DHnqrwRw3dafyk92gp",
  "key2": "5CtNvgM7uLcR2WY9uvFWsVQG4yU98rTUmUxGVLSiiyVxmfeyLaK3Z13Fp6qkTEo4mtmLNMAmN6dNgbCoALvkLdS5",
  "key3": "4tqXfnyjyu98kmjqB9Sh29VgY3prs9vpuEhYotL15nMwCHoo7yyXjrLWAnbUXuRBzJndra4FdGPTaJ2Tt52ZEeHF",
  "key4": "4ysFtJbGtFaJSZPUyyrmrEZSHAjL3sk7hZGAxR6DjB9qYdtKqFhf1PCFT1kbXZVgGnmdKzgqxpdj5ETcn4zz6Q3U",
  "key5": "5WtMdpCCbaGg81PaS5iXBDSEzj2XUmLtJTT4Aw4G6v9XFSxkRt28WwarWJofdGEG3h3aU5pVdHLkLG4DiW5SKLAx",
  "key6": "35LJjsqiyUr1kGRNV2Yju4eKJHLhDMfQXjmAJ3ifVRZMaXP58NotjyHEZG8K8NrHw4m9hbThw5RcH5EZUPyyKoY7",
  "key7": "3ygH81kgGL6UTqDPHFhNLGSMmZ3NaBD4jLQimDzD2emdjdwK4wMpch6vZ2kUmDNJ6hDNjrL2kMeuf2tejX1ZDcbs",
  "key8": "5WLjBPvrsW4nzS2yjceFRs7tsCo2ou9EoAPMMh4y6xJfLPFEHaayZgK1qYAsEQmmtH9A8ZUnEosfTfAPucsanKN1",
  "key9": "ZpzcXVXHTjyrgpXo8AGKM1U5JVUqPoHMpaakHmrQx7es5C4WFVicvUxkGyquHisT6y343K7QaivbPc1ZBbqpwuT",
  "key10": "5aWaaBBXrrznNqJvTzhPL4ynaCXjaWrK7H5ZswoUoRYWqGHfWPxjxYP5TfsaTBZaqu3gK5ojBNRfEAn3JyLDiefi",
  "key11": "3YQVTN4UbYzGKEQkpZU9ZzQRZuYJjVYWtutbtSpBpPDqYfRjbVtJ4ydYxaWvNDv89MyJnbSvNpDzHo9kUAEFLMJG",
  "key12": "2G9Y9mRvwj1exLhnSEXu2mTfSmjB6VkmqJCPBQoEo6xKU8CpzRRTGR949qdJiDLzar6GyRsJ64D4Pa3g2sdgnyhr",
  "key13": "2kx2uAScK4we4QEhq2RgGoEFhHvao1BBcr17rGABoP2ai9mNb4rWwNMK9s2f7SKTjDUFoEQWEDUXvov2jtsvgRHv",
  "key14": "5NibBHZx1yt4QXK9eDEyLtTF7vrREZqxGpYGoUcZYdVeURLVkfmvNfj5mhBvmGvJ8P7ZG61WG27p2icBCGQqSRuP",
  "key15": "49NEuQGstvFi6EaqQfiKQ8hbNCk2LiMENXEjtF1DaQq6nndPorzuc68jz68F5uCU9byHCu28NqiLfJqYenDV6mK",
  "key16": "5kWpfju5jdbhhBQkNN1nfM3bUmM3zmAJvEfMh334Bno4dUvhuynMNqktFb4GumCVUf28YNhYJnnamRijbo5x4Rq9",
  "key17": "236r8pxk9oGStZdREDRKRbEe1yuNaDxBMiP66rU6UtrRBhwwKAWzXBZ8BjYZ1MEBnvVmNVGBDgZNxe4cqB68yxBG",
  "key18": "2bKi4Dtgxrj3YXkqYUKMoRDDMNLxe3da1hgsZB5ScaERYRjCVks7LmegNakUQuoTRC7oLfmQQ186w44nAkzqxV2E",
  "key19": "5ZG8FkHiDJ7XJdFMscmkz6NUJgaiC2sen7b9R5XXzbp2fL2xcXrxrcmttKKi1WusAhD9ewsYphF1QtbC9FRtcVq6",
  "key20": "3KiEfrccJwvBHj7KyEcjKwJTifdt8Jhdeee7617XJpQGfc1kzmxRKgYWkcSWuN4HFA2DaWB7TP1J9mBRwTiqWWRu",
  "key21": "3Cg56mKKpaEmUXtwdeWto6UCMi3HNdSsHgeEUNCz1Jj5CLr3FK7dHHYRToNsg9FTh2v1vgJY2mbZQevNUpoZa9n5",
  "key22": "4eY2HrPZxzeNq45c87jEcVn4q4v1D6XMC3CGxTy5dUx2XtLNgvdC3bKgjEnucxbEKbvruVVtP8JFmrCoDB4oWiBK",
  "key23": "4YAVD8thYYw58CNBXpRRfYHB1FABn5aSbVDFqGw3GJDyxTdiyACrtCjPqHa48NtLQZNDR6EAXByiJytHkfSRdEGh",
  "key24": "2b4C5A6qc1pvpDLAJg7QeUG1ayz83itACYsmuu6NCbjvwbYhRTWsR5fxSKop3aSCAXzf1yHoynEaZrPyJCuE7mWE",
  "key25": "4SVFo5eui4UtZ2ZkV2QvdX5nvUkxMCiFbRwH6CMNhzPCTWvqtM6h53w5hgN8RfgAd2NdwqDHmkegqx3a7a9fx6pc",
  "key26": "5fpTg35SMq6RsV5osymdFPivjse2pEYMX5PMDGpkXEpwoWtVUHsBu8osrHanu8ZAhUsdLERroYjSbapKb6kPEP6w",
  "key27": "2yDcjwVnf9PVAcBkUwCXzpFUM378ALaKyZmJQnaXubcia7xRrbpF7LacQo4e8KYWijBDd7sGkDJacb4t9gJfjKbU",
  "key28": "5vHBEHRgy4StQmfrhzy2ML9pHRZ1Sk8kyoFuuuJ686Wsau1Zokzkw8ip5N782DqC4eYugMiw35VUdxaakzUMiVrq",
  "key29": "4mPFjzuTTHe9JNWi6PJwDgw3x85jBz7kM1PfCsYYg6YkMN3XZzwEAeCdV1M3NEy4kGXqiGSeryghsBKLSpHZU4Ac",
  "key30": "4dTXMpB26PjSxYpSvZK832KsmnHtMvsdaiXk6SjTdo3jAGkVbFY1AAWrfPkSQMj4nDfEocNhKECSAjqNZQZv25A",
  "key31": "4GKCqdfiw2ern1dk8Wh81z8UMxL3wnxYrpwhUTowiyLEuMX41sGMJuLMmDAVPyhbW5sxsBKEeg9a1NG8mTFBBTE9",
  "key32": "3WTZdwcSPmLhChRqLtLnZ3cjoZjeYHvbLt5XuS9VDc71y6x1qrHUgaSU3qCXGPpu27XoN5DSyu1DCrC1o7uAUjYG",
  "key33": "3NhaAFmbGGqWZJfMhQjHnZMXHcScDQLdjp4Zyh3cFZAznKjNVN6Nv3UyPYt9DpEJci5YsmPTJXFPQwULKrzh7JSP",
  "key34": "wedwM2uj6nrwNaA22fCRMN9eTS3LqKEf8fTvtKHkssPo1thtFEKK5XMM4A917VLBwvp913A67WUrodvUcs4JRGh",
  "key35": "3EgqWYv9wENVBsWftrp1tXnvFzcnyBnnZ7JGt3Y4SmVHcquSSkFs32k5CUZCHQQ3fvNtiDwvRb465mxivWY24bX8",
  "key36": "vdSGtTakqGKvESTEgkCz4iNYQBMatcEXPkt9yeenaZZig9MXLuViMh5Ws6FDxPr4ns9BsatA9YEdoruogszBw8N",
  "key37": "584k62RVAqJdLqMwFeDxJqYrFb2rsnvaBxco8dkVwcW9HakfYKPPdZ7VCBSWmerbePD1HZsBU98PoxhKL9MgcUMi",
  "key38": "L5kF81ahXdvpiXvLZpsqjfgPwygs5pv2qRUYGqYbnQh5Kh5YdxPMfaF8DkGxgZpMpU4KjzoqDeTkv8fse5Kc2a3",
  "key39": "2eCUZ8LaDzE9fzMPVE1e76bQnuSaaJyLE7ncp3ABscttakgg8aCAhTL3Mfc7iRKKkmmxHRMwgX37Mti1pLVch4M7",
  "key40": "3ZEBcXvPDep3JuqjAN8kNFHCDX1BT7ngXwv7ijSBEMPwEH3b3zKZTUkhUqYm9fxzkqbG4cE739gDSriTpKq1YMYt",
  "key41": "2Z1FMSD2noK72xynpUbWD4wUDPT1XEJdZuRpbb5rm9dbfpKVgU7fSupcyT5PviTRVmXvYjpfW4YLS7ztKxYsu3XW",
  "key42": "4Q75jVDatvurbFWvH3A43fGiSKc4N8DXEW7y8X9TyxznfwkJuuiiNqaGH5EEyB7FPpcijCDRifM3wkbv7TuLA6a5",
  "key43": "3hiK5FpgVhCCdjidiWxg2bNY3DtmtKtT1gmJx2gJRxprXUqch7EJcFdiKAYWMxJASHq94PCv1rTHqg9yAtXEdyLD",
  "key44": "3AxwHiWbfwxToG7SxD2FXf38ZKPM5TELd3f7SeJooajzy7ArqcHtqhNeYE5UTQscZ8xbe7YgmJ3nkQ1Vmy9cuQuH",
  "key45": "34kz7zrGoTCPkR2k65obRd9MZmab5NXtHVsGb87Wk6a943BfHuCqYAGosCGdz4F3sjwt1iMuXZZeD3wD4J1SmdiB",
  "key46": "sExyNcsLZoyrrYmjHDmtLcZLpryAbNwCi6it9HHVzHCaieztcmuoT1FT8DLJV4sD9mJZpmuArRzq9KFuW6TGpMJ",
  "key47": "25beMqhw4hZVG27TWSLG8q2BBk2AZFJ9chc3JEethLFJ3MVgEY25EsT9ZrTs1jLHqUxqNbKVRFztcn6zmpHAqHtv",
  "key48": "4eDrgrfLjxpcsiRriSCboskCmXJosuVR5quDvX4iYv2dbTGwVi2cqHavVhyQ3QfXWZPqBKgmPJLU74ufAGJ46cx6",
  "key49": "3HN2xyTTJjaCqEE8XSRudfwMRPYWBD16TG3aQvu6A6QgmuDNofgJ2kfnhQvirwoP7dpL2VN4hr5H2G4Fmtqy3wZe"
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
