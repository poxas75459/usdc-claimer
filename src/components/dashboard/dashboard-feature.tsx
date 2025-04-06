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
    "3rKd7wKX98PxACgv5Vkuzexm2EfVJmPE1DY3juckCKBitvhe2jU5Vy7sHhnHHXn9q1uhFLRGeSZkgJuZyytRYDUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kNwyGfza7CByfoQsNWsgHLFAWUkkqtBJgctvgc8g2Y2Dk8Efs2pdS5iHvTk81quWzG9BWJZeeC5f5tdJwH6QF2U",
  "key1": "5FDijYG1AzBRnuAUicU96iCUNrxruttoTQTkkFUehhgEHChJyAMa3Kzi5S8MMb95C9F4d7VDqcQrsZYT5AmNArMg",
  "key2": "54jD75PvWbEvSorVEKb5AqsaHLvgS6K8mXuqd9eGqmNCim8SpkN8YfF9eKtKTwAjUrtmpRExQdb4NoqeBQrkdGfD",
  "key3": "3TXrfhRSVfjJww41J22yxPrAARQPzRCazzgP8mrQrk9xWgzjZJT9onZoBjiE2XbwEX9dTZPSTmKF96UB4durymbf",
  "key4": "3zKMiJc38vZ2SQ9GGDeRvAwtNBfj1utsG3f8VqJV2CM4NUYXQQrpuehX19rashAhhj9XvqS95YTfrTNeKTYZ8Xfd",
  "key5": "SMgR7bEDbiQbgPH7DuE7K7BhBcxYBtrQEkA2gCE8MrUhV7DWbwXwnVrPBF35iSShPdKARp3o8zFRWZPk1Ds9Gr8",
  "key6": "2xuWbosP6aJAeRcLC9s3oSH1Xw2H28qgFETgVzRfsksdUZKLHvpZkRBa79uZgB9zthr9Wcf1AnsuAzbbQPcgGcW2",
  "key7": "5DmAxR6PerZUuy1GGhhJ8kchciJaSUqAnAewX48Kn4wqxZ5sKCmqjs3JPsGJuPzSkJshHvsoairVVv8cGYBJC2i4",
  "key8": "5MC4GzhD21hgaVYM5qGsBGk2er8LJeVsHbZwZCfeKXqVMnw4fAC1R3Zs9VCQh2GeT2riQjDaRMswkNjgJdYne2tL",
  "key9": "2wuFrZxr1iCV27HjFJFnZrfugWp1XeoQT1EWxWts3RMeAHGBziEbX66X7SqLXFmGJHp8YkUBzDNHtfZ6q4gsWdjp",
  "key10": "hbZ5G8ASU14NNJScuhRThLMB9gM1t745AmVjR9gmAmSdLwZB26h98k9hwX8mjdvSR5M3YqQnGmJALVQPwM4ApMx",
  "key11": "4pLfKtftx1PMwDtRGPkVGurQ8LGKPX8zm4g9GbihKc7za4oSf3mBhpsGzfPSMCwojB9NsBdY5jizxbP85iX257Kg",
  "key12": "3ML3ddazY3owco3wrcQPp8Vrt2nDJQNu4ecQDY1KhQQLgtfvtAJx6hdtNfPLFbFz6XZ816UFpnQDX5A8iamBDWd8",
  "key13": "3MvtuPSUkpf1ZVgeZxkiETPHHqmxtKxbcpZcxeHdhxAAtreoWKSfx1ZBENs1X7CqVzQFLtTi8CABR4dWzouYA7ZL",
  "key14": "5b2sABuNPZ1XJQRAsTaGWEN93epkXWaHmdSzRpq9rGD33NrC2iH44CELurgoMCwaHkJAkdA2wwdmFY2XHmnJE6CL",
  "key15": "22GNQqsS1Q9U5FsHnnGXh5ASW4SZgFDZUncXsmSY5Bax5vu7F9BPJhsnvS1eyo4hHqEs1cqhJ5FSuCz1Sp33rdH6",
  "key16": "5k7aRypB7geQSLLBEyPf3opZiG2oNZ63J6M4Kvb63JKKegS1EnGHEZX77uRmsR7U2ycEviTioR1guFiysjDaZp4f",
  "key17": "mTvKhTu9d6P41qmHwjsDzJk3SbbrUNKviza3PHd4PWLz92FbaXh2d8SroWfL4y8bZhPRNzDQY12PpNKKeoSAcsJ",
  "key18": "24zkPda1fyW6ZpaHCE7M6rL6oGNk2ULbjevSA6MR48Qe1dUH7SNQUjaZd5HTL7SKtxdS4Gsg82uQk1k7mUbvnNpN",
  "key19": "5Wo1rdTYxSVv6JvTzaAPM2rZR5hzvePeAecNmRB7w2Pfo3yR5gdLVaW7CqGhwZVYvXiQEjLZxwrqngxRzcNCBtkw",
  "key20": "i8cQDmGB8aq5aMqzDcz83EMqYtYry6TAJL7mHg3RtYJPQv7mvJdk5Hip8poXx4LMLadNV63k1bLV8JYtWmmaBq9",
  "key21": "2y5xzXtcLWqdN6jdBxSY8hsrfWC7c52c1Rjywy6QF2MRnnooq7gnUaoFmF2haqXZGtMJhGdn8ro5Q7pFNUYSmb5F",
  "key22": "52AyJXBovjWEgDAEKJ1VQ8gwvrBCHjTbbHmThFQctausEW2NNuPeiBNerbub9Zrdout9fUNzbMcdDyVnKSdR6WLc",
  "key23": "2oKtq9JmnFWhxhr6wy2typDkWiBZNn2fscUtE8aQmcqL8q1mjcsW16dc8tXF86zpei6zLQ53Ane4Gywz6dWYLbDk",
  "key24": "2x24X4k3CgYnbKL1rEiJ3oKnKq2pwwhtawbMnnWEoxuoGnxQz8ycvJ3FMfFGGBh3syAConShJPeNkNdYzvVCPSiz",
  "key25": "3iYRhMmQMxuttgcaBbopsVikTdcTNsxDKPB7WdguP4QtqqG1N2ee7bLhs8eaaDJMberfj8gXjQc2KixiRdkxrRT",
  "key26": "4bMDytgFN1FXCtuFHbvbarUtVS7MtF1ABWxfgHCVVFm9anQ9sWEVmQZxzhVAdc5RonTE8UYLxVhVAypKqQXwwvnc",
  "key27": "3zVHraZtKU5vRyu4raQssn6mveGDJ2yjYUdaKTjRnkKxuT9UCG9tb2cLnA8T2uehm64oz9wrhw9rRsZ3k9sh5DND",
  "key28": "3XG5rCfbS9BEmcq8Ntrs8HV6miHZi8bzfFCQJHr3KCjPUCZzSfwbkjM7KexcEYiGSR9fWQbLuobPfE9B2BhoEV1U",
  "key29": "54P8kQnnGD23rrE3BjnNmYjDmcvJDH9pbWSv1BoGFDkzfisf2evtsuXc3XAWzxvyWtnHbXoR6JdtiHbPNuQ3nqkS",
  "key30": "3ij9mSv1yWDdCG9AqLJ7kt7AkeKLqhFpQJL6UXbjaTtqEuaW79y3Jw8JrgEZFXeNaJJ3XLJ3vZww9Dc9QmLJiZWc",
  "key31": "5qEMcgixauD4VoiBY1z1dkiWofDvUkGxgJXgtmaJBUm9fa4t7FvdfTe2Mey9UKHxKGrHXpVPySiji22Z49r5tH3E",
  "key32": "2z5hgCzZqSKJSy9bN2EhieyERQxRrgN6nudZk1ARv84xD4iNDTQnAdPwrCFvEErgLQLKAFFPNdV3Lo4ehnx8rjX",
  "key33": "3pxMbQWj6jQnxnxWYrSP6wFq55qRR5NXW7PTrKRWhDGTsqjHCfiLahm1Z2TuBzu4CgsCaNAAF12M5uj2fEcRuES4",
  "key34": "26JaonHc6yRv5zNC4v6rg7yKNMxGU66gAozbwNboC2z18ZnANtDh58Pz814UYJjBAXksj9yLVUVHmu8qYpK5VYgG",
  "key35": "24qbLWX2mVXiptpe2XGvxQRkYU4kULNjjcA1wMzyKRAU1dfn9ZyUPKcNBKYzCGwSRnS6JZ8nBgDRFU61EzmZX31X",
  "key36": "2yEyNLSJXPwXLfrVYrF7bYs8YgwDdWbtauQgG6j11uNxiVN8heqhEutf6Fiy6vyiSMqs6CsnaxfPVnQjXEi9BAzx",
  "key37": "4GGonXyeC97UYseqwh9yjBXHPuu32jXJnJgiL44G8QfhcdXyctxuX2WurWVZkMkjM3gucs1ubFko44tfTMzcu3Tg",
  "key38": "28KoqCrmTtYur2SGMov4EWMgmEiaZ4AhHAxgnZdAZEV5eKg1zyLsHnQ1zcS8NcffuKfm8qwjh6ZnGgpWiYVT9H6q",
  "key39": "3saAJK78fdCegRzg49CGXaoAzzEGq8PLtdvE4KZ2BCs8skco3iikHvafq2CXoxVD6bbxq3pXTCJMTfFutwHaLAt6",
  "key40": "2fnbWnbKY5RSJGUfz3z2qtfNMPkJt3Gb45N9CWVsFAX5FfEgpyK6REKUuKZ4b8MzALGM69SBZ9hrr9hs5B76cJDm",
  "key41": "4hKvJTW88XM7NL26QdT4rVeGCEK2MWoYVBFTE9iDvWBtEyG1Hp8uF91mGehc2wDBSbu2GY37w1A3aMyQCsUDsDcn",
  "key42": "4vJB8bA97CSDEn9Ci8hV5KtTG8icGj7FvCn7kagY1Jdh5oEWWZ4aZPoZDeCw2aET87BQVoYSxxddVBbwYm4v7XRZ",
  "key43": "2vcYK4woY8z2USb83nmUqRbZjdEipUVxUbAVRMseAs6E6htpXxMdKZJFm5uDtY9KNJZKPZp16sz49iaqQPkC76Fv",
  "key44": "4DHmLpXPUx1A2WfQxupN5R4DRzZ1riz4GEkPaWmtpC8rd9tBfB8EiNHin5rvuCM6PFd6CDMCTEV3w6iCaTpT1gQW"
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
