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
    "35DvEGEJpDs2i5bQvDGbZY6KBW84vRX2Ua4gxCCASthXk6ebx36GBpDsi7smDG4nH2TjP9B5ZCU5WskNmoSEQ7rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWSHAq87n4uTDN9H2rixwaYvRU9wVjSHKroB5pVpoRJTLZHXromGvwGy1bxa9JVzGgLPv3C1jJRiqbFw2YUHKRp",
  "key1": "3nahbREbL71KhrkYiw6zx6QMwKBFKakvTWLR6cfisEEnCnE1ysgvqoGGxy5GXHzHrpj1QAivJNBvWLSuCE4MQZu9",
  "key2": "jWySuLJt1nC9VWLn4wHHe482NXMbZhckcJNa32GjmzeF7nu9DU2Pe3NxwMydZLbZoNjjhQ1b4vdFLbnoJA3HvmM",
  "key3": "26FMbfKhFCBfS1eB18bwpJKubrwcgwsUwLpmfWiquNGZn7tHuAdbjq5ReMKFVHCAEuYTua5ZvzS7m8zeWsyUEPTv",
  "key4": "5uR9gbKF4bitoPuZ6xw9n68tGdLdvApZFr3rFMceTLLJMCXZ1zGti6MxZDPMMuUUzX8GF59K8jorEjLA8Z6YfaWv",
  "key5": "ArgmSvojDtDQKJ9ccP9hYEeEUaui8SPvz4MTsLWLLk3HNgyjmy8NuTQV2aY2LWMfpNJ9XtXMteBpEdwZMr54C5w",
  "key6": "4bMM57m23fwZjuc2HE9HVZsD1suTVCzYifTJAum5ivkKN85Bk9e5XT1hwehSsQymxJjD7JB2kfgHo6bzY45tCxEp",
  "key7": "31jhWv69oBmNjBBAMkBygg4Z1UN57Au6aiv5A31zqVAoErU99oRVaTddWyd9bxQzFZoqm1iR2ry8Nmw7ts5ZEJcA",
  "key8": "2RzPA6o3UQi3HLBHFrztGomsDjTTd29TpJcaRUkCQbeLmoTGmfBp872nTKzDP8xFq2fA6sqGP3KTTxXiAQBrq5eG",
  "key9": "22Rq1rwEEJkyWgtkJmWuAuNbjfyASNHeU45PD8gLWqdNCy5VXww5d4T6c2isSoVekmBkgMpopfbETwkX2qHtr9nR",
  "key10": "2kgg7ZrwMpWgAFE7apTtr6CGsoVc1oniNyGqV3ZsvAHPzef2FyyLx8pAtMzAaVBfywjyckTX1zNz77cCEegJzakb",
  "key11": "qAZbuXkBqi8wbnFdkx8gZ5cU35b5nSZTbWxT8rWF5tH5wb1aZEVbWwNeiekaMijWZcp33KgoGDgZW8icCQkkTA4",
  "key12": "2DgMZ8ig4q7KbLypKbvUvAZFXTZ1nvACweZXRhhzosAtffVrmD1LJg6jzqcHPAKvFBWvpZK5PGpdRMWddXMyADwC",
  "key13": "224T79BuLGsdATvFAC4htaM9h6i3MLEjr1qsbLusS9YcAQ4QFkexm8rP6X4EJYvTMyLdguM3SHnJnJb5QH29ysGU",
  "key14": "2CdHf7JA4RPqwi1oAA4B3nYNNMcnT14rLDjfKweuaKM5Nrot5UiGbRJcuZ9gPezRP8x9SoDZAxPHAPV7YgjY85XY",
  "key15": "uezpKTWGgGMrdrv28yej8xMtAcAB2kdCYQZxQ5F8mRiCDzDsQm6jeJCMiUB7C4b56Sp4WUfpw9aGSdNgSmZXDk8",
  "key16": "35GR52HPs2krsooYc2KzfE5TnznYM35wRtJ38SEMNxADBxZxpcU9S7H8BRW4JP6CD39vdJSRPQubdN3QxaVTYKmX",
  "key17": "4rh6JRDt86REvbDjJPM7Aphcs2dWzKZEPZQRuPR4vqMeEj5D2tX7kWS479DuzNo7zRYZoqsYMos4iYtTJfSWrRzV",
  "key18": "2yi7RQAZ6CRozScMgfkQuNyQmpsdUQEXFYS2vtUXK8SCXCyZ53MHd6ZUyyGLYsSgGReRNugALqC6TRnAdu9F8dug",
  "key19": "2ynoyXfjSu14UtDVk7yGqhfFFTWBfq3wKQrst1W828bC1xAZVFWZzsgwzF53TvApYPSr9vdFxhA36dGTmkDCf9dz",
  "key20": "3B337yj8KoKgtoXMHCFVcQExMjFiXcSBDyZGffKnQ1i6EeTgQjNvEtz54nn5ELAeEc14gLQbLJdQi4E8PCoLudE",
  "key21": "2pFQytfYP1JMN2HjMPaKaJkAsZc5NXk7PAi7zb3en8v4migbpn6G3e5MJzySmXmqamuKcCHT3J9NWvr7Uj5eJ3qj",
  "key22": "pEi1C9EzdvH8eZwU7WiyLhvG1GJVHmrnWYgixKKL3HWmwbeGaeRaP2PrYvo5wPxZGzDcDVxcNZ3Cjg3rtUTR5bj",
  "key23": "3PpT6eEAkqLCFFsf1y7fchV7vJXvvvwqVXjGCy2aWyemxdd3rPAYjYwPHCyTGpwe5ZLj4i1uUw1oCgH2b2YT99XK",
  "key24": "2UkpfF2YiAXHdXtxME49HQHGc71dTCnoJ2gavgntghHMfU6wWewAXs5Gp1FkzHqe8Vj1HKrXuCQTUu5upEeRuNPT",
  "key25": "4hMM6Zc5qysxJjcxvYY9jWmF9wxuAQMv2jNV23DgVukBqwLXwtee8DF1WxAi4kexD5fL45kRqF9Rdf8EYv2ogQmh",
  "key26": "3UGgeBy6EK2snYWPWhX1EUVxBCBfxETtZ48ng7QFnGNmjekzAdbD6V43T7fq1XGu4RuGs5EE4Vcpt8v3uouxRjcq",
  "key27": "5AZBP7RejsWo9A3Zvkuk9BzYnP42bjVsR57bqsdGMHakYEVzbj9suS2QFrB4gv6WiBGPLyB5uyuYMLvXYWS2rhXG",
  "key28": "4KBrVo1GD1JLYypdwkLNvnddK4GngKDWaDn5HSW43oyucbPvLn23A5GeVkNp3FkSdnNyAEHareHUiXpJfpq48pNN",
  "key29": "233gA9E6D2KapNtx8Cb4zaRZUFCH7sTA8byaXpqBWRgmWEj5E5i5TL8CEvbSJk7jyJvWyj9S3xBtYqfEahRRSw3J",
  "key30": "2VK3YkMots6BJvq34WZennKE3UWzbkaVtyieMz1BvyQjQ98RYCD5K5UWJR5M4aiZKpToebjcwJDEKjUDyg2GWWR4",
  "key31": "3fduk1TzsX7W1xiqvcF9MTbMwLvm3HKmo54U6ece8zib3RYafqYtopCwDwR82xBdmfXdHfMTS7hoKvsRCHP3TZzm",
  "key32": "5bi2NGQcX6ZpJsHkp7YptseKm2BatNSyT9ZUrUdG7DaqsStwvustzBEcGBUXpmKsvtvKuCMk7DWHpfTESUwQXWYB",
  "key33": "5VpGYJ6b4gK6w7Wzy4amu5dLRdDNJYnyT7axQQRAiGGTsmkeuHmcyRmL4kfJuoSaf5NV9urffpRmgxBdA7uvmu22",
  "key34": "4uYmoT5BK9WdMUhow6QwqKG9sCDuosRpAcuEPE7pfYDmBuJTA5P3568x3DDvX4LtQGQXCBp86NA2N57jnAFK9R4u",
  "key35": "4jmetPJE32Wv9rLWQLMjsjuZdsKPjjtLdUzF5srk7qvdm2U5DARxKuL2a6AecKn6UimMM8pauhPZYdJko9QFMB3m",
  "key36": "3VNGoUKLihUZE3E4XAExpUJz4qunqNqEDEypz2r2cEXgNq5WVosAHRULWrnF8LyXAC3YT2dNWMtYBvBeHc8rqCw9",
  "key37": "3emRuK6yxYwfy3vNC7n5dNdcXxMWBvmhwXNpH2Sbi7ZhQrqyFJhQg3sss2oonQAAtB6rsAqY3EzZupqUZK9JKhDu",
  "key38": "2bJitZaLAbjVQjZWvmyd4VhaEoY1bJQXGq5xb8ZjxhLMmsq3fbjZdSTLLDduTA8xRoSnxh3aJCp7DrYtNHUTEVnk",
  "key39": "YsJHTds5DGPxEAMP9NomXHWm1e2KXgcJtX4s3NCUAvBvXHF1Af58NSk3KMyRjCn5Ci8mzGbjHtViL5EvJkbRuKa",
  "key40": "3z4q4pYA2Ma1SuNwvwVU5PQQvTQzLTAFoJGTUV2qv4g4iEtbycvNNYrQzcY6JbYbjGzRoc7Sy47DE1bCfZaokYRg",
  "key41": "4NcYPxYxd2bah3TbEpCvRtWdgbEfEXY1RiRzEGK1zLR8wyqHsbntZB7KKZ9yG4Rn3YGb41jvErSr2RHLPZiTeqaU",
  "key42": "4pejyFcqYEuhimknTxEYoPqtrdCaqe4Mh58wRBZJtomj8VETKqRJ4UhzFoPKTEVeDQbeFTmNn1LYPdjLNyKZJAXH"
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
