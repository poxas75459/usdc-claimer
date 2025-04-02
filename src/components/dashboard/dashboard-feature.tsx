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
    "4SDWer94UzkGciaAmG7PA8w3j5fknDkqQPpcjW6esBooQqE4jEuDWL1UXzGrffVWXXRg8wXZ4BUGBFchN8MGZu2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9ZABh1jAY7bpBxBf76Tq43RYzepwKwWwqTrxBmXdmbXD3Vmj2nS1wpJkDzax64ERUNs1mQCi7SYU7tCf6ErnWq",
  "key1": "57f7ySqtngtM1QXeRcyhWeyQm93pS8H7GfSycXEeSQPSRL9Cw6qzibfuTrJUKAisTcq7RKpTnpakK9YATfF6ftV4",
  "key2": "2Cp64uDcJwgqgJzJRkvTr5daL4M8S4hwYp7n1Xo1jPevSrL1w3hKJbAtWfRRzUj9GnWkEY8P5djoXkTkMeMKTYQa",
  "key3": "cnpoDBmBsV7BaYcVB6qHoEYkJTD5VD7CmWSDftKX3udD64J8WuFvjyKvqavLQr7NafjdNECyNN7aet2fdo4sSHR",
  "key4": "5kKEugygRtH6KPXK4WCU2S9uDMxUC2FCZwgJByUnkoTJpvqyg456r4TDXycoBocyCN6TzixGAbPZpRvFxaaJbJqF",
  "key5": "Nobbe7ooSnMpxrCvVmrtkmJtNjFz9iZnh1UEJFdDnR817o58HHX8mp6nPVG7uYQL1g9LQf2pX4r9ZgMFZEVzAYk",
  "key6": "4ZGwMStbbwwvLAhLcNh2BgLAN8wUCPxugDLFooqGtRQjX9wuCEUJiuUg3ZWeHaQCYQERYEVMqn2Qj6Ngm3L3PkZJ",
  "key7": "62C2yiBaHg72oyF8B6fXJduphjxdd9uHyZJabCkkrp1NbRM1QChHuT1th9oLDSNo3ku4xNY52XXpgY659ZBmSpJj",
  "key8": "5S2YtaKUsyRtDXGjGAjno1fFMTPdv9Cu7EtPysfir8ZbYbTLHhc3YRq4iVBTtLCSNRsmAbVoKu9Vq7pewkcxGZnX",
  "key9": "3grJ6mg67rs6zuF2wp8CcKHyKb4aX2eJio3fdLyogqKk6XiZp8L9nmt4DeeMAmRaQcaJBSNmQr3bJxfC9becsJ7G",
  "key10": "4t6dYL7qwFNzT1fWnSTtS1eQsfARNqoDkxqfM7E4G8J9k4Mfr1giZu3pmfZeN4HvQMzD4HjucjrkY1gAbh2kViGJ",
  "key11": "1YkW3p2uC6MJ9AX46BJCj9iH3T13mE4PeuDRX9xS91DnJ2E2GJJFvCkseUMub5QvbBWrzAnTttBwN8Diaom5MHH",
  "key12": "Z9fqw9NMy3KMDgCJqNkBnSPjCeJ4AXDYk9gxdcvCdm8LLVUqEqdwtaKUhP7txmXCoDqfoRxcq4tZP6SLm3duvya",
  "key13": "arnVkGJtGfKu78pgmpr3opM5h5MoCiTGhRMZPJ5z6QfoMtXGmrUecpRpnEuVnWy1fSPcL1Ani632cJyCLFex3Ww",
  "key14": "5rrk8Xd6bjeuA8PfYyBnuEa95CWXXPdQt9krsgtM91gMzGB8eMAY1hRNDJ7m2E7C6S45FQxTMmHt3orw832o8BiN",
  "key15": "2eRF1Ttk65zU5RGtuJoNkoGfBBxmVAs7MNTkECtFswj4egKRsY5GC9aRUmw9seAJGQnGzLrLw6bRVjZ7o6BKYbNt",
  "key16": "4qDpxQ2i6Hh3uYZ2pcJWj5zBsAmA3spVx3HCVS7SrKi6jkUfKtnPmnqBnn5euvYjz1UAUaE6U9A6YV78GJZmKwu7",
  "key17": "4SPLbbJ3aCW9YcBcCutxeiYNPsXvtxZmvZnvXWeUjjWGwYnr3iY3JS91X1htFLob6or74QCDnyKatv8CqeNy4wRE",
  "key18": "5DeGt6AgNaCeWiVmtz3Yf1ep1kbmLfrhaJCJ3TEUjjJ5ZSqPaeNfyHYNwqkvYSyWF3tjAvowKTU9EmiY1oLQDPui",
  "key19": "24rwcBGLmEx8agsNQ3rFBFYofSKJB25GEH9kxLV6Pvs5CYkysw8HRJJQooDKxYJHGdWAJVKvfwFhUzpfmuhMiwnv",
  "key20": "4QdVS1TLJ8yZh2ujXBBoWRCqeU9PncraVHgt6KFBM2VdUn53wNy1dJGwyMjhAjfy5cZsX8EAd9xTB7X9NcjuqiPG",
  "key21": "2g2ZpZiXETz7zcAcfAauGogsNo1KvnvbBT5cwDTRkPu78q7ypjqGvYmYjzSgpfPMmw5wetdrgtzTHnehsKWvS71V",
  "key22": "5GXqbAS7HZQ87khAs21zhPYc7PVRLi8KBnbnLJCHvLASRJmrLSG8r4ZfUgRdjBiywui9G8M6Wwxh2cYSSqPUruUh",
  "key23": "4hY7FrtocTEHjDFbvzqenbXv5yQExeZENRcQyDMZgBVFnT3DxT2wL1JmBHqFrUQBU9BE2wcSmzcce3i3QGZ9ApPn",
  "key24": "5L78htG4S72RPzb1LUBguPpCssAqcbQ6U3XEfccZH6J25BJfDgUKe5FeP24eCotKxxCUGF11wWod4moNTKH9hy8q",
  "key25": "4ovb7SzHbfjwknyaiZm65tSCDLeJKkTZtZkfXTvjjutmKNPBMvtKM9NFDNFmQVhqdZLUqufXFz85xwpC1GCo7d2q",
  "key26": "4E36K1a7aif6XsK2CT8qrLMAvBwBF4xNtcuQNru2ayTSFTLUD9j5Thfu3SLcSHvxbR1y8DKFB2SYcLMRTHxqoWhC",
  "key27": "4wDS2SEBAo5Lo6NtWcf1JZhqc2VkGy6ooHzeUc4Bmi8dhXRZBnXsVNjy5iEpWVBDTjTJm92qazdcxysYPN2za7EJ",
  "key28": "VXLDETQn1E25WmbwhiwYaRBANGy12quCokcQ4JfwkDd4tin4eYu8iP98p1ZJQ9TasXGhj1PisNcuBUSwCvd1Acf",
  "key29": "5S1fosFsdX4N67ZNd5ecxJVj9E6mzmYsiGUWkVtQ2Zkpg7q14bGHcPAzwBGDR6pcZ71vENACtxZyx7Sv5Tha1CLw",
  "key30": "Mzv3qQFpDimCbcmfUAZjqK5aNKdV4k38xfmZvF3cyQaKj2dwWdMmJQpecuCcLJ7xUc2pX9jCGrF3rJehxmJyxRJ",
  "key31": "5bGA5g2y1DsAfxY8fvT6Bw54WedFjgdPVN4JCKTCLiPouFZ532DaugPB4cMx1LHYATx9bNj76tQUhNXgBZE48pA5",
  "key32": "4Snzyx8UXGbMhfFatj2MnifAeomyToSCyPq9FUtfJefse1zyYZCVd1bGEx4ec9MLZUcPmGzEiLfZGR19Fz7muuyo",
  "key33": "3F1eMc9oEK8o8whZ7yM2oKeon15bs9pZijYJ6X94szBGSvP9t5FxaAnyCp4MvniHAyze3nUYtEC31bnzDxumtrWp",
  "key34": "67EMFm66pVCpNPCcQjGYPjb1fyMFR3RErxvv7TS8NxBiFdyiZ97vHEk4Ug3TTeksAtiYtWXByyNQcEv4Bn8GTxqJ",
  "key35": "2ZobbbmqVZ1rMa8WdzCW3vdZaHeAuZ6fuTPZvvJyQzSVMNK3Kyrt4WgMvoph8vPyvrDvQ2R9hDrpf1uxGwstzipd",
  "key36": "2zdjqCHRNQMXMeyJLAmwCcNPJen8w9nmTzHSDi5kMjWvhJ1d9PcSs9YAogTt1rJsdX9i84wEuzL2gJbEzRy4vrc2",
  "key37": "36Q4dELrj1oBYQ8Gug7FV9joYiB6XUP3sQvhoKRhHF2B1be5zFciCUPeseKk4wBoCAmnPPCJ7wbCd5wSULgmiBHd",
  "key38": "5Zma8Z5Sgbtiomc3bnRfVC2PHmHquayrBEADdAxoRrfQhhFz3RHoLrfqi7ZcYnN4u2R8pSx9D5hgp3MiSoQVZEjY",
  "key39": "fRGBFjBEgL36r2yhqZB6YVvZqkgaH5SHfrB7k9bkcmq7Yz6vamxxZG66gG9AhKfDnPDg2PpdEV7xbaWYFp3LAqP",
  "key40": "4aFbMnJon8otBii1oxb5RgHaPrStx5JPq9BwLyxk4aGbaxW2LuQKyqmXoYMMZqJSeFcFTbKb3kycxP1XoQnpfKNd",
  "key41": "5oYdM2riBZkba4LDoUnczksLkcAatUgRDTREi5DPqwKP7EQ8RdsShHim75m4cV512Fx1kRsgousuLD3FhfUYM926",
  "key42": "63F7sCVBi6N18jWyUrWLRak3qeBzMQeiRLWYBjC8wwYTn1JsiRQCsnbuTT9wFGxe9rR9UanBsdSyM6hx6thZvTsK",
  "key43": "4nHpwkoQkynBJrB4CYCM3TehVdiWNfULuHunGURWrzHLJFiADEm1T9aySioEk4bR2hFJQz6oZCmfWXWf4qksdwPo",
  "key44": "4W2scwNvzcFB38JSsXQAWCFfQ2dtirHAoXt2t3fzQ1QykW66SMasp2NuLt9rLZahfjHT8Xdg6uX3JpQsUb4n8trj",
  "key45": "25Td4srZCsE3FHcPZhmUquFuD2vRVGMSQ1SKwzixvAeaFXvsDTuXuaHHvNUnt3A6Kwt8LM9FT3NyhkjBgAv6WbHT"
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
