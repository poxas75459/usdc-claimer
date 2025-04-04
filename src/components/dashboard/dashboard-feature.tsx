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
    "34T74k8Sb3CJ979JtTp5BAfgwobe5c95HksGXez7jiypwUFmHdnZR9BGnzsCqcG4vEcVFxFGsMbWaVVCpk7VgvSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vABbrD8k3jQSn4uEtd5sjd8wZkmGyY1wEg1mCv45V9UWMz2PLP4Ef57EA7eLuugnCEUVGXnYkLSfMrnsvSoFgfX",
  "key1": "5XAxtAfRMHrjTZuHbTMLDUVuNzigzPkFetwo6xxccAjcgXrfR3R29oV6nW43XGBvFok5cFqTbSnh1yiKyb5rmsho",
  "key2": "gVjBbWfx2s2eNSn9jcCu2KeCcJpbSsf5oRUsSZvFcjapTkqiAuwGNfMeh1Hj2qedsSoWDNzNcjrBzzVqpaa9koF",
  "key3": "3cETiq6SxPezQC4suYajYUx2r4w1PQrbhz4f7JibcZ4ekCMqcGTJnrwNPPQYbpiKkpXmVBvrvfksQrPVLyxgy9tm",
  "key4": "spEnr9QSdJ2VfwC9wzBMdWTsAjR9xNYybQGJrLtpGxksBMcBE7HJ5WvXzkRkZZL9xi73TdeeEvr6aJqMCtWU6Hy",
  "key5": "3UkMBkemAkbxXYeKL9Cs4FChvvSZyUYZ1ZSLotWCq8FS1esCdyYSc6cuCvFvUWnKmgQhKPfYDk6ymQBBajrRGfTe",
  "key6": "GPr7JZhSdgHje2N3qwWF3sUHSavsZC8Vy2cBCTuZgjwznfMSXNz8YERPBHqmsigQEsLMcpYAPskbqw5SKyugeX3",
  "key7": "2bt1zdaNMnZcdcNm2KFBNVcRfxakecrT2AmL2pkEFA8mdCqWNKELgBjkovhx2EBGeXw5qwdksqbJ4tiLaV8w85R5",
  "key8": "4Z1j1zGDt5LTXiXw6kLAdYafsDv15fXiF5aVE1EzPX8Y1neevnrLqTdVmKtfwWvzbXCyHXeZ836N6rEr4DJgYHL5",
  "key9": "21Bg7VWVDN6LwEr2xbpTUD3DMTtnuxefvHxrPKrBY5yKjeqicCJPLnpu5e55P3Do7GjccrkUc9LfHtjzhjmkcmUD",
  "key10": "dZYHdLVxgP4DS6qhohuQVKkkYaXRyVo5wZ5gbvxKXg6EWc6VZDPXBfqSRCtxxBdfYU2TPi5QinmM64DeHYcqUVr",
  "key11": "5kCUWQW61Xm1pj6DxvPbMEFGabiKWe4yJNW6ug8kzNP1TXAXNAmLHtxLNtFhKmuqWMw7QNF3o2LxSgJAGueiF7xJ",
  "key12": "E2KPQvcWSx5SXQ6ySS88RMKruesCPGL1vkAruS6V2bWuVutho3sAvxk33W7rRpUmMk1Ks3VLuoR6432yK5kmVVw",
  "key13": "QVwRY2z16Jgsnu1TxCuRwmPn5yZH1LPLqA4uF8dPbkgsdAHqfdgHsoLS1XyDDJUgbGhkDAnfowUYTneUQtzxYyD",
  "key14": "3EgqcZq8RK3Y7aKEb2s6n1QbYGEm6tsHdMe8TLhg9Ggojdn3Vkj41S5ZtgaLQNERA3zUfPoHSaqabw6WQiKYAmPZ",
  "key15": "2Bu4AS85XHLsrEXr4Sd5tKzQVYYHLcFT12i2sBdJnwm9VtPC4mvZfKSJhQVg6Ap2xtQKrhJ3PpUbBaGYfD22HUF7",
  "key16": "2ag4Q9CtXVhg67NykxGLVgaD6hvbVoCtxGG1Xh2UHq1J5eHdqvoPDFnLf4Ngh8V48R4QwKsFVEaeyyAMVeXkQspN",
  "key17": "5ETZQDmHvP6fF6rkCruwGNuqGmMGSbSAH4v9hBZnaePAzYLvEcdQy31V51yG6jbWdY5ZneA1vHpZm3V3KeUGLC66",
  "key18": "27ArCTYu4xKbowdqrRLj6ZJ6Z2bKwJ51ym6GzdrDJWCPB8WSrKjqoAB5KFEb4tHW9XJcBSUchkrNjHNdMN5gUprD",
  "key19": "21LrWF1MLRu3GJPv4bjCSPicLoXg2s7TZ99wwdbtckp8D88r1QY266RdqvNfnZnAEthsNLFQqfvgwf6tpBGskGpv",
  "key20": "3RZtPVosjpyBK4NkbpNyum1K1rkD5fcQFrftk9M6jTpzdC1Gr1LFnnnKi6TNgcKGE64MZHnQdoDn3Sa2dWjSebuL",
  "key21": "gnDYwTkt45nfVVJiwoh4uVybf77PzRoqzURoEk3ANGHEvh9mDcCq8XAMnPhQRJZjRoDMzgFcqPE5tNDTVVDXBHd",
  "key22": "4Fbm8MX9oVAQtte5pELD1Wow2PiGQtdBddbDB4oq5n2WcS9md74zKsp7X3Cu35pRi7Rax1QPfAi49rCP7G31K7xQ",
  "key23": "2W8T5Fhp3UguV9MFrv4LRJsp1KRyyJ5it2ht9mjrYvnogfZezFLZGWrkDWLRPT56dzzuUgYiiqRn75zBAvmHi4yr",
  "key24": "5KL7bSUKiukiEiYx7YzUZsZ2UXvND1yQCiBAcgj5SztMNNocPvdmZTLWUp7QLzN18PJY9qyfhghgwDDYqeswXdav",
  "key25": "3jZDrWC6jRmPAbdumAD8bEgXopcrU1wZGvUiq6ArBVYcE1pjL3tDm4dQ9byL73zzkDDHoZgFuchuLsmYKxGo8cnS",
  "key26": "3XcKVT9RW6KndLWUbckVSHq9AK9F5xAT86qTCTzAv2CN23PRDPzvXL7xjy88anQ4HmcNxboQ5EV55X7DTdM3Q6E1",
  "key27": "2oF8nauF76sqPfP92JByE14kBCFXDMPTGG24WCWcqzGPEndqrCyXg97S1xkLH9geBocRdE2dDQv1oqCY3HF2iUhP",
  "key28": "51ApA36m1vkkDUsLxj2fS5YbM8A7AVj8ATzdcuf5C13SwzRmSrbqHb1ZpiRPZeRN2hyVhoGGRKHmAM4EX7Cwffkf",
  "key29": "3qBJ4e4f74qaeBdaAqAMtVTNRzhpx188JMz2RsExbEMgFSbfM8X5dDZo7rs1wgprtQNEYQ582WeKdgrZbf4kDedj",
  "key30": "5rVW6dH31GbWnaBGinmNsMeSru3BXGen21UqBfKzPR4gSy3gmUKnQb2tHu64QovmgM6h3iuvxD7zguGFyp891f19",
  "key31": "E6X33xpHZnm7EHw9q3LsCstpoUdWSDurvQ4oP58NKjoH5RUeENbzgKp2jcbgc3xAvnU8thP2iswiLmgwqR2haNF",
  "key32": "kWQfoDvHgiHSTti8RcuZ1LcBZ3Dv1LbQ7GrKnmnbbdhtmXr48AtZKXiKimqWkB39S4mvxu1mfGDFDqTX7ZLmWY1",
  "key33": "4jpT4v3SXAr13GdGyWiHT64R1BGJnDFeT2gukdTFG49tt375FxJTuBa8mPqHM5Ckh9ticFJkE7sCotrHbHvegt8i",
  "key34": "3wXfKP1kc4id2Nx2xE6AfTFTY8VF5T1p8juimtKB3oB66pLthRu6Z62k8v4pJ1JWhD42xG8R1qNZcR3bFFzWwaXP",
  "key35": "37jcwsz1cHyhXhkJ5AibZSvhpkaGfCXXBLX362rt67eVCg3GxkYnpLcAxHxdBoMrCbfBsihu7QpipQf52yCpRVHR",
  "key36": "o9UvVpySRd4CK56C8He3DG4SqNJLYErkg5mz3U3sQ3u1H3KUUS3xHoEVqmgKGrP7f1uMuYzqSB9A2zHtVHZwSBi",
  "key37": "2U7vXeTVzQ7uuBNgcoyg8bmgHihcH4Yo8xi5Yn7cdNgWB2i5EaWvUGiNztxUDfvH6myQJdihYuLqo8RkmP65psqP",
  "key38": "64YuniZnEjBFGQejGrrirf5wgyS7uPqX42gyAG6TZjYKMrgD2oBTc3cSuM35JwZcj9S67ANJQ4kQ67Bus792Ygma",
  "key39": "59xM3gnHQH1vzYrGb9pRraxPHMxmXvdt9KEpaGczuh5CUfmH4KT8QRAta9twXUtHHBKo8NLFfLcMjoUS7DnUJKeX",
  "key40": "5C6j9Vkv7PBAQxoDwm1KbwiifujM9otdZBVdPva9HUoL2qsVwiZUGrUMLyjVh1txzZN1qs7iKg6WrGrYpYJHAJZ",
  "key41": "3zvof99JD2QeACcLu9q8xij5V1Rcqq7GQczUMaF2cVwAA1K49F6wARhruie7VWwCfqGFN24PHzsuYLzZeoCtwMS2",
  "key42": "KRxsyBa1SFVGdonZLUJKehXScAaszWQiv5ja2Ktm4BPnvbxzoNEb9pxR6i6Nuu5jNnWFiZYqhLQ9WwS36Vju4VM",
  "key43": "2a17MypLUBnBdXdPHnNpW1o8m3HfBXhN5GqGuWc4u6qLUcB8rUt9fonnKnUhMqpVbNPHKJW5THq8t1v6YSJ6uEAS",
  "key44": "3JeBTZR1J5hJESR6Uyz63YZtsKXHKeYf6SxZKTjHveV4MCHWbCjZrh9re9ttcsm8Ry6MdhRvCw9tACgLqk3ZzcHV",
  "key45": "z2Wf4wexa9uPNUFyCsw4mPodhwhh2sFHRjwDRuLtKB3NCdpET45GsL5Nz4eJc2XcZWN5EVbdVMZgiapMatuWUgy",
  "key46": "3NcTqMfu94D4ccS1ZLYmRn7bfeyVdhqJjheNSrM6DxdZTSBEC2gHiSgVZqQuVZMZm4M3NRaJdGxX8twWHH6eCYwD",
  "key47": "2RQpcsHcNpNBSNzzojePB2UkkSE9CFwyooHX8FVg7RCeGJLXVAdHfZ9pEb9yzRRFaGYkdaD8vW1CMHo5rZv7jn1W",
  "key48": "2dPS1ZKqG9NQVPKVQLCcm2ZH4xZhsm3XzoCXrEA39djwKMEUWNbGoYLGTcnijgvqiLQfDD9twno7PTR5i15sxBf6"
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
