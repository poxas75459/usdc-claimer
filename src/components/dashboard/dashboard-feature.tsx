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
    "EQhwqJRyDm8JpMF9QVnG7xyxmD4qNndYEQSzguVNNn2Eeuy7UmLkmbG6JVh6RpAQLoXGTUyNWaoPEAaG9x7tQJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kX2XdZFhHw33YKcTRQvQqAWdMpWW9gbVd1xH1wLPjZtmo2hBQRQppZXb2NrMwSidzuwbjsT7f2CZPp79sMMgMc",
  "key1": "5Vydd8Vz5GdrLHaYA33yUQXGwbZ2Wb18sysrgzR8PV4Mp9q99xwqMoE9KppEtQcXP4jjgXafef74kY9zvWVeYNes",
  "key2": "4WGV5sWhWNGZpVrncqWmJZbEwmUuohXS3EudsRU2KeAhY6CDdcKPgqMGcGRjSneS9ZeNvzXyfTg6CbdtQjsaDZCL",
  "key3": "4eitBspnrQK7DwBHAAASpLKcAp5DKaWigsPP577BTqmRQWTg7gPSnUfev1rWjegB1nusmwZnv8eTozWNufwh2wb5",
  "key4": "3fQt4z9Fmgn4msJ6r2HA8vkRKYEDTfYvSgyDNp1HCd9vPJdGaKVQvrXLa5VymsfRaBJ8S4cCeFMZxyj1T3rgLBGE",
  "key5": "28TEkmP6wY8MnmWrHq8KGvWu2yP5x8WWXoZK6S5Uq4CJz7SCXBP8kVbMewgmUXj2H277Ea5CCtggGbxXvggSzXeZ",
  "key6": "2Trz3vEjyr3ezzeY81WPHecQ2HugkF26dwg8o5gFRYGi1U71XU2qyCxnJQtCPjz9zK5zA42gS2MibaAKjoxRiHde",
  "key7": "zS749WuFexGQ1hEKu1KvYCbxzeGPQbjxxLPrv41R2TjhJ5r1F3rHcoEdd297EoeYxAnkphiVjG5RP81uFyHPnkq",
  "key8": "y4RtWmRLwN7xbhefVDipqrN1v4TqEn4WkSHTL4k5cxCLVu2c3A9aTqgWtxNvYXQJm5iT4ocP7khFeiK2SeAx5Gy",
  "key9": "5n5wtYxfYEyMc34YQr9X5X8F7FAeEQRFKq3HKkj1KMoiCx9YHYS4Eogjp4XFCsvLXKZwufx7CjjnbD3WAAS8Vze5",
  "key10": "8dt1H97UDSF31w1AmjFx8Acuu38P4b2EJy3FNEUR3LHzrgBqLg5ndsJ5vcPt1g6TY79rHo6C66YJMzERsQUn8s5",
  "key11": "T7Er8wumAnMkkQ9NyxDZx6r3pGVMKyyLXbQaQ7c8ArStJVyEmk1PovCozRdbP6monJPtpCdw7r1fFEXmCXXg2au",
  "key12": "4LeViMM4oHoajEfSzX6MxRnMHd588HntCVBpccfwHCBd7pJR3QcDzLxfqBhDGwbszHkaTVkqHew9vYsAGDDNQ3Jk",
  "key13": "PAC7tVKvybeTN1XKa4G5GerZxujZ4JWLMUeFuN86BmbezzzduCzAbdLEpc6xcb6NX1QFBbb7vKVfK9gPBF1Rfzj",
  "key14": "4D65H8zJnTFYt1zmskdVXXh3GvQHSTbod8jfkcPFVn961V5sVS7H9UUdYLU8CDviW1DHbeFZSPU3QLbKVYGfMB5g",
  "key15": "4htgmNocpzLPseEF5Ap2jQSLZhPqcJ5sr7ZrfXnuxyytBcGFWbDCQHMFdFUDETg4nJ9PtBudocpaFzc93NqJeJni",
  "key16": "VGxSdaWjMBuhBNNpMLmMeXashqdwNFC6btzLjezSJohoKK7aaBxsEtKDAFi5i2okXxYXSn5uHPKYtZkc4eCc8iG",
  "key17": "3QUZrvWzJVWi34uQNpYMYw96bpQ1DDXy6PvsdQzaXFXqisN2bXiWmXvxg1nfrweLTmAVhkYSmcQdWgfYaDUCatB1",
  "key18": "592owZQfcEgexEWf8fcTEaCZR1JwqTk8XdDqaFgnVssp8rRuNuRWJa4rm71317N2k7TR4mkWnWHsm9ExAHFAYV4t",
  "key19": "33QEnwutDifAAVj4hKFSJrG1QV41K4aiHzyNBNKTeheRuUg2TobkPQXUc4SxX1SRwgVR3kgKEJfusCDY863DH3um",
  "key20": "3BurHLpBSH24T2zkwnERPed6aT5bexJrtUAaTgM39iyPGNjptp6noKnAb5yNUNti6FWfk2ZvS1pCRfZdHwfAqZAN",
  "key21": "41wpuBV56Wgcu5FCoYmqbBGMqTSL8MZnTpfDEeQaxrhHMgJ8tkjzF68hDomN39V8v3tSb9LsXjd8ojEppLdoEaoQ",
  "key22": "cZpXoAi6KxHhRXpvfCtXAJMLsseGQEASY5UbRh1HUDn8M7W997PSnAgXee9qKUZzCmdcn31fChcAktjmrDDVUf4",
  "key23": "3JSQuMdF1eCxwuA3FQdSUvWe784nzgtnyNjXrkDTwRyJPobvuQ5dAZJiYVjEGVgcTo72n3FFRiXVpj11MMF5YDMt",
  "key24": "2y5UxwMmaQHNKLYEGdCjHsXpQXP2ykof9RVYABHSr5JB6FQwTmDXgDdT5GmqCGR8eignNC7BfTEahR4cU3Mpt1Je",
  "key25": "3VJyFe2QiZenY8boHoGz2rz2JoGPCtLYk1iw3mXKJjhmEVGNNRkrasVt2rTtk617UrJsr9gjUGYvgekQAzeAzocD",
  "key26": "5wE2K5vkhQ8R2vhoWbxNPmicmFpJ3NgNE2jDUo4NyadMg78GLj2Gio9gvniZuK9SwpndMTVjPTtmbZzzcQw1WkH3",
  "key27": "4irD8PhwuQVvCfVfX95DCCE5GckrNoUZBw7WNP4ouk4X5px9GeLRkZAeurwTTQVfjUy1UFSpP932oE6X4mEAoVyj",
  "key28": "4Z3qJ7Eu7wkEMJQKDQhXdsdiG9r2STKf4KyLriMjNBig1jzoUMDCTUjXgReRaKNoCQUjCGuCR99n5FGk8uiUJtaS",
  "key29": "3jnPMGvtH9kQTNFXRybm8hWKcUqPQ3KLFFyv67fXqWnSTNYdLBTxPJcP4QBMmKT5hRFXxByVRXKP9gxWbsS65hj3",
  "key30": "3NzAMpNS8wd4im4NWBe1MJ1tC9FTQwzcC6QjxRKLVxgX47hbLmcLm61hhbtvsainvtBvNqQSeNcug1xXpZNcBrvx",
  "key31": "2eGBK6DowjpzGBok5L6e1UJfZDUmzxCXcfSSfLBC1bbqhzHyfbCoV7aCoT66m88pp3zP8aaqUZLz8yrfa81wDkxR",
  "key32": "3NXagT8128oeGJPAnq4tJG8ABYadfthL8B9P4uAQnG7dgcWCRm5tvr4uhMf7qwoKx8qftEiK3f4EKkrLX3pMfhss",
  "key33": "612xERQzNkMbN3YA2QY9ZCwtZBsDcAQ2vpGCXiZLvq7AHuY4SJodh8eiC1YYr6gF8mNtj5SySBVdJgha2AfSKsPx",
  "key34": "2sDDLJk6sKTtC4FLbAKuFEZ33rgm7QVGa6FoXXuv2xziJdsUcnvywV2WXfq2YZGG9N66NhhpMykCWgpy7kPF7ZYW",
  "key35": "5vFuRAtf6q4V14nC3fL8LH4B2yHCfvsLNJibfjbkKfEsRzCQF4hb58ytibyhhz77uVVeGt7Dert5xnmV36DwhqBz",
  "key36": "3Ds6YtmWUdEZysjvkTj8uaB1pWGMWEC6MUHcNrjzmCoMxbVuVugovDm1M2FxnmWQvYoG6tvdtpkq9irvk9vLCkra",
  "key37": "vQXw3Kp3ARuox2YoPnZofCiAxCrD8tMNHy6ejEpkMfPFH49T3L2WhPKqrJ5SFjNpZ6niaA1DJ7MFmmhm6gLh5jn",
  "key38": "31aHmpSAKBtTz71FnURUX1DSLHkxGXq7LGpuD1XrCF9EgShuoF6gz7Xj87TB9iKgJFPFYprWGuBhrmgVjrWGVxnw",
  "key39": "3W87q9jtDU2AHXpozHuhCcanakVq259fu8B8TLWHWqgCzpS5KuZSj7q8zKe6azeYXDuDb6Y6N4yE3gMx38Nodjm8",
  "key40": "3VXnVys8hhHGrDouRDGgAdBogRNWBastTo2oj4bUA29niEWuoU1zQbu54aBbdtRQQGgRc5DE5oq6pEPaBna8ggqv",
  "key41": "1rqyQSJPXoV6pe3LBpVViy5dC3pE8Tbz751B47vzRTHiwpVCAuqo22nZyV5Q9X7f3PUe4gi3LGY37KRLUBuyarR",
  "key42": "3Hy3rEb83Y4yVTE2qYGafnXW9vtKW77GnS8nJG4Fipw3pHSrx9UkQM2Si9utvFHXwC6VdaMf9R8ApaFX9G4qr1Aj",
  "key43": "4zPwxsW5hnGKnCzu8Fkck3mTfKUG6FHqLXPCUVgwHqLHsRWwvvhVfojp4P3NUtc2i82MMbfaZL2JRfR47TbJ3i1Y",
  "key44": "4bHQsmmRrLUvF9UTB7oRD7tmnFVpEUeKwRjsN4sVwb1Aqx9yAmxKFYYfnxsfUhcNoCbht8suH4gf9A4EApUpXDT4",
  "key45": "2kpYZ3XAR8xevcDxhiKYvEA5Q5kAPVKYA4dkHHWZs4a4KiozCFKzXq6hPGJV3Bo4t1GPYMp3rQuG1djPPs3i8eML",
  "key46": "26j3QjSny3Bx7CpNpFv7GZxaKUZjqCaHgqWeLL431E4F1m5g4srS4Hz5hEGkFWyrG9hAVbHnAQgaYvDToNa4aXL5"
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
