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
    "311vVbA3jRga7BD8zrzSbBRaFq6fRie2S2BUQZjF3qVM9NcoggJiHs8LC4NcHTKgv72N3FdzerasEfXh1Akor9mL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9ahnUqy4tQHLW8LirHgN66PcV9kS5Zr7cZ7Z9mTcP48hNv39Rq1ZboJmCf9Vv1jAaN6twJ3HfZpUuTq8KNbrJy",
  "key1": "5LHLTyZthEcSDHTfd5u77rSsGvYZCva1Zm76CtB7vE5EPKvvMEmmWtpoSDDXSCPATSdP4Xyio3iEKmbekVWzYENE",
  "key2": "3L86DKcD4aSuqok8NM36ANSG471gwmR3C9dxNMXuPdrHTz9yUL8r15tyC9xgKLx1HHeVFfX9NbEoTQE1RjWTfoXP",
  "key3": "48FeJhK65A5wDQTvncb8Wzrp1nAnhSJup5vqgCMDHg7usLUgDzvUk6moQpLbGS7WcYjix4UVRgCmBkpxEjZ8VCM3",
  "key4": "5hEDNC4uxNuio29ART6SzxAxqQdayYSxXDYQSjyVAnGnnqsYQSGk9sQK7HUxHkW4dgokRCyBGJRGzJhcBnVUn2vj",
  "key5": "2D9vUtLwNYUaUD3Nx3sZ17nM7NxCQnijQg1JA7CDbBCsveEpbZvM9a369FtHbMS2U8Bo5VNF5oza1XGZKCSWJxeY",
  "key6": "4AK44SkwW9bpGpbYps6v85NLzwRW49LXj7FSVwGRAuoSFPBJjRpGfmbDKzNTKN1f7v9WfnAzK8qjvWyQX3LBZJKR",
  "key7": "h9bACVnbVdPfcQ652wisb5g9tBAEyoDNzsCZTP3tpBjQvfL4fVAPAyQDi96jsjfj3R2Anbr3PfDBQUapBArzEYE",
  "key8": "2xu3w66U2wRhHpqvjs2UYQQwrcSBcXC7uRtszANDHdXa7iMhQ4EbWD2AVmUdQzQ9RvDCMCELeNvPryEuwXq3GiXo",
  "key9": "5gxtF6Hzo2cTNKcz2AHrw7XFqLf9RHUq8JUCBRXU1Sxie7QbMrFc6VtJ2BLD4LerrLwnCWUEpj7kDwCANVH5JKUJ",
  "key10": "4ZSnDV4fVXCpftWyYADx6CU24RP3wNGQDczXyMeCcGF4YS1Qty7UgGNHGetQytkPm1zNRsuN6z7biug8FNTx2Vh1",
  "key11": "5rXBvAMxd1cFJazxkQ9Zsjh2ogfiLSYKiY7qaqGAnq4soZLRt23uxM7cKdUPjkUKZ1gdd1Wnq8EySJLt7AgPU4LE",
  "key12": "4Xd63ZXo8jmWu7paopmDdpEJZ53DM1eTwXdGrW2sCeN6WPx95dcQaPVN61TCVhMbocYJtfCzb6hukQnA6Sdg617o",
  "key13": "jJU9a2KBAXpeVBW1rznks8AH9Sam43oJCWrH6Ni9VmX2PrYxgKZLZDR6qzwsLGaMoStJPy63fS9s62xXdioxEdq",
  "key14": "Tw9mYKfN8utteX3urKL1b1TeNZnwqukRxE4vAhoR2Agq9NWDaN18h9WbQAcXqMCzuqgsAhVAw7DbY8yztZWQSrP",
  "key15": "4EQdwLPxFptjxyxN5BLxwHU1vH4g3bbf6PHens1vmQEMFZpThR88VaSuAjLCX5AvYQx4TsShtPmq4sXSuH3ovwyk",
  "key16": "3ZehVe9twTMvf4mHhoURAnzfm7kqvQNFV1nrbwsPcisKDBVjshgtzWkpPxB5VGUUR95CpagjYWeaEwgy5ej6cuCB",
  "key17": "3Zva7yenTN6odBCo7MWDBHqNmbQYYHuYiU5tQq1LNEA4xrJYFabmzzESN6mGiqynYPt3SmZoAPVoPBnRNSJnsSrK",
  "key18": "5pst7qS2GFy6EeJqprpm1r2DJa78px62c9nGu5po6Uby393EvukJUMz3UDzKwPnucAZ7hqoZg7Q9MGygMvwNRZVS",
  "key19": "2b9TegtAsFoT6Q38KxFdHHog3pcbcZ9hVXzSc7ehHRtbEyXAexDVnL2Gq3cUpjXqDGcm8C38LcZzPwhTcPqiXnwx",
  "key20": "3XjTVtw27rAE1y2g7p5dUrasTXzgXGeJcNP5jH7Bhf1X8j4LXfmVxQuigyBhUyfkv4Ry6xHGhTXosNGxuq6E5sg3",
  "key21": "4we75hC7JVhgA8VwqHuRXtzU3AxPR6uoRgkfFCJGb3HS8ao6wF5pm7BeNcr9QwnMSFvap36E2WH7fnqs3TjdsgH1",
  "key22": "5XiUiQSsvyht8yrjJbvAL2EjeNrxQk4CrToCK7SgvFCs1vmS3sM1skQFfXg4jAH8c12qnq5y6YAs38p9kvohejVa",
  "key23": "4p1GQfXEngjBSTU3nPt36vw2xBADTk9dzTQYtRPuzLxEmeg585EGXCLsGWdQ7xDdHe3r7kXcycSDkePSaU9fF1nE",
  "key24": "5yjA3CpuZt9PyupGm3wef5bT4fwNvybjpUnnHn5eYqHdTE2gvAx1zrBsxMYw1vwV9gLPgU3gAbimunnhqakDafpT",
  "key25": "5XqUw1G6KXRJg8F3guvYnoZdW5wTaxxGfvJiW5EXpcdBouTm5u4YGQcgK1M6WWbdP7AGpCsJ43eN8WaxkCFovRKA",
  "key26": "EnLoK7cTW8sw98nSf64mm8v1B768Pgsy2ANNXTzcPQupUysamTY3Rq26XNHD2BXuXQ6fJ8fjyEfbyXTrmERzGMN",
  "key27": "2nnjxsELAYiH8413KEY4C4GW65mwbp4pWBw7ELxMzepKbbmSSqCwDpvbKTct2t2Wy6TCQbEmDVuzZps58pyWjsH7",
  "key28": "49UHw2XFwa7PWZd4vESxmasnj9jk1CBbk3bsu8nziNs1E1Aye9npRpxJt7Xcs7vrxfLvSPAx8oKZtc6rhDkKd53L",
  "key29": "5iaP2wuNQCqHcZ51ztGpBs8BDd2S6rsMSHWHVkbFGP2h8vYK44dx8JE4jTGgHSDriSiSt6Xz2RMURXvd17hdHzUu",
  "key30": "5XRVEUjnmTMkZQ9wc4wUTg49Tg9n44PacBr98e8JSKf65u6jBhugwZgEUFo9h7ejkB91sENjSaNMfWB73yLpBGWR",
  "key31": "4KV2H9ofkEyWryHwmU8ogF61BLZec6naXGff6ckfRgaJjKskDmq7WdbvGCi4jXu4v5Yg1fWBkfWqnNktkjBVcxkN",
  "key32": "62kno9nUSJvRptmVSjemmKiQdzQBtrSP9F1X6RRxhrRMEY3m7aQzSfaDypmQAWtgRB1SC6QSiswmGqUkWDAvQN26",
  "key33": "4KmUCcyRvicj6Ue3dmPEMN5t3EpTvm6JF2aJtF6J9GVgJg94G4vzAQWXYNwbMZD2mmtLDkvXsV8fr16p1PMxCHrw",
  "key34": "4xaJoc7jGoVjidHuZ6GXfwZ5sHrCUu5KckvsF5BG2KK3UZq48BWhHMmf5yaek5YWor9A6VpZyLVxEPaXhvZtN4FN",
  "key35": "3M4MX3ggbC4zd6JJZJ9okHozARdbksu7nnRKn3hA13TDXK4rn1RJxhomxfriXwFMnKEGkwjXDJtGyWmopFJhZzwc",
  "key36": "3YgjASKC42A7E3VzwjWYyKBcbkibA9AwCcADoRXgZczUbt9xpPd7siVHF4RP2bUzhi4QjskS5gpPDEMQv1xmKGMy",
  "key37": "2T4g9V56wbSx9DRepnrEf11B3Azju51ikwukEx2DhogCfT1GRHTGA3uzbe82Ubf5mUsisVS239vTTCdVbuPDS34A",
  "key38": "3tq8Rj24GcSWQ3d1zkexd1nLZcyYKKhU4UKVEFYAuzM38n2sUJmq4y2Q9t31dWbnbbkSY2oHwEaTnVPwFSkpi7v",
  "key39": "2JoZN27p4Nzvgxqg1d4HXimkik3uDvrv6j48Ex36CSCtbxTEkzbSFDtZXLvELpqBTaB3nTSaJJDEh8hYMk7oScFG",
  "key40": "2MWHWdn9w9rf9aYG4Lo2pGg26mPSGvgC9SQEju9KAvBwRX2RMY5ULiu5sjgkncmUQFLD397T3u1qNZgjXhtcEBpN",
  "key41": "4oKmpM9SSBnt31ueZQb21sd42PGLNg6hGxerrZSmxtadViqQs2Xa5Uqoi3F6w3dnHKr1f4Xwt1NGyHMgfQxTWa2F",
  "key42": "jGcZJ32LEMHEpnZ2SbGUT5FL7hAEwEeUnoPzPRfxuA36XcTRVDFEbWiPh91q9DND5eaDsuaJDAd6Kxf57r4FXLL",
  "key43": "4ANTPz6wPBWCqTo27vegiTKaVDiJ6cwczzvwJ5urSNumX4q1iv5V3cWqv5YhwfvrRsiKpHQH86cnKULgD5EK7AZN",
  "key44": "2hvFr7pRmG29z5FuCPHa9k1mktMczSmFxhX2rbqZLrvxEHGPEVLeaae22dXhf3PZSbZ4VHLfeBoZX2gw4Gqf7Fru"
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
