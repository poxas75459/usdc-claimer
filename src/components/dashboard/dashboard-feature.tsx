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
    "45XjRVrHAK6KvnWGQwHKgHGqXMakey3ZQUB8AWUQgosVRGhzX8qHPtZkxTA92fggu3SXqy959NYx6nAfJ2Ry4NUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3586HLk6xZgWqCUmouaUv5d9Kr8wgtbGQPZPBaZ1zW8K88mKzqmhLwiH5X9uq61F8xcey5BynqS6H7dEXJxq1ikh",
  "key1": "4NqdTkCuYj7cp3N8GavvA8axww5KBkZKSRawMNcvFeoE2wpZDnQTALw7miz9DjJ2xzARCGkEKpKh5pTeZgmZKND9",
  "key2": "2Ltbe5mndPJ7744U2zTKoBx6LDucL7NvnaEjZET3bccDR2L8SjX9pCS9ib1AcjWZqURNhAwL6Y9oGAKSoaDpStLw",
  "key3": "4TMDZZgRrVymvT325PWNJiXq2BCyTtSPVsxz37PJxSVhTvwMK6jbc9aSTMobmqiaCarfciBmX8zXeMjFuUmC2cKr",
  "key4": "5HADuKsaH4gAZRCjXT3ySduV4BuPzNPYtwzGm2hkRVfxwvBm4GVEmADSaNzUSbvz2C6uTPdUjE3ttywDqasJDjMu",
  "key5": "5YmLY8ZfRxdkiAoXoBFAXF94dj5KLqMnCz1RYCfetY9fXr1wo2ebKLucsjq2ovFNoCMKhaEB2LQtPjHi9Z2My24r",
  "key6": "4AKLFtenU27Qm23LJA3MtVmVEuVHmZYttGaejm2eQGgfg2qoMJskWp6ouFgSZrKTzjzLwyY5ewYCqwmehje54N88",
  "key7": "38KNaz3z7sM6Sq4fooHFHMvRqJUnMDcGWNSdptgguRiSnGRBS45GsNQjAr9GRmdruyU4sQEa1YGSWnhzNbHZVfRk",
  "key8": "66QaWVqCen226Jpmrf8UCRbXNYqF4ffks4KiuKpEPSeKZZA2CTu9SWcvRoSLaUJFGbU1mbfsyTbe7SytBUSzmzYK",
  "key9": "56QTJFymyKsftjPfk3Vgq9igo7ZuRvSGUDFZS7Qgc4G9ny3ettuuh5Nkn9q256SiGG56fW3gctgj7cqkR2jxwRvy",
  "key10": "fucRDg9ZQ6aSweiGti1ErGwc9rVDShqDmLDkBR6E54e3hFBhT6GXSuc4QpVf6BFMNKGWnnS3xJhpt5Wa8VoMXtD",
  "key11": "2axrnekJTQQNezygZ4nSKgSi1kKQzaggGeMeabDTDafcVfMGEfXCQGGrZXBxXYbtj4ne5e97NMZASUKiuAjAfcM3",
  "key12": "65yBCJBgukjKEEG3NLxbQ9G6xX6pknTkorU16hUiQbnyG3NiawkydghcHe7bpHXydeu6aFaLUSnCSuWsWUKKLg4d",
  "key13": "4YkUjhMrm2kDz5jaeNZibNHWnY48gKYMgo8A8wYPCki3gPMmoAtsXEYRGqyd7gL2nVXaJQfFtRGfVBANtZALLiT9",
  "key14": "2fWrjsofcgCj53DiBULXjWcg9DU6Q8TKdoNtoctmfRJiUuBugaAnBxMTbpdhS6iLyLED5V1uqvRYgwbLJ8nTshVE",
  "key15": "yGGHrPiBctdGZtKVMGerCGzmLgc61Mkz3tUUAJs8RUovGkJ26DpyTrSsB5nL4VfRu1s2h17KJJ98bCSS6hgGvEf",
  "key16": "4n3o4bKhE51CJPe25aEJiiRUyCNkSCga7fDSAqzvrvcMP4qXeU26dYifJ4aQEa7Db5Zpnz76fyr94TneaT5XHsYo",
  "key17": "895ZArEst3dpH6HiKHF6bQZQXpo9FEgEWSL2wgLCQzCmoTH7h7Yb8wsmqVNFVqjK27AKMQx625LJ1jg6rW5BVDg",
  "key18": "5KRt1jhg1oN1fAJ2qxvqxVw9jvRmEBp2G8CugvjFRXWNHw55bDcrsGvBiGA5tZV6HNcxSQgPQwT2ZnFN1R5LfZ5Y",
  "key19": "4Xv24kJkuRiyT8MwDohXXkDCWoTSTV3wvqFSCbZarGAGH82fuLRtttb1LCz2cdi7VszibMZCjRsTxnPXrQJGpNGh",
  "key20": "2UUyMbjtrfM1HfyXR3DGGtmL89HHPqYfoX9W54TNyChYzHRiVfGKvWsJYGDd911xgc2Asg5RSKLYy2SYL6pcRY17",
  "key21": "pE4UBobsVSwYZMZ3rBsHEtrnmgDneZ2ErviB9BqcXqiyPkJYiPkX9gHWaRpZp5imjnLJsYSAEXWGBdoTip1PTTk",
  "key22": "2ndpK8fYz3rphaFWyCFqt1XXVhmQChPXXMnPEsHXvKvQe7o7sJRgpupLnsQ9kKFG5LM7dKsLD1Yf3UTjjWNTuxoV",
  "key23": "3UpQMkPnsrSaXux9kvLxnqH2uwzGSvBt7ZtVAQxtsHHeSG1Cq1iJRZpMBWiTqX6szYLLFS2k1WSwbHNpM1jPrpEi",
  "key24": "2bgeEcBMP5gzeDQn4PcEjeG7Pui8DxE4fmHmJTBwShgJojk73paoDao3HZTWusu4we6o8VHQJYYELuGDFmhrsxrs",
  "key25": "4BZ3CEtDmnT5zTEmyDAxYrEnMKDEjj1unoFbgoVmPqSNz9g3rSuHBN7faWmfjEaXWZmyEvknSjSp6PspB4TM48t5",
  "key26": "2DsWYSKmHRBbmLXiGnsUptKhPA7Txb1wHM4XyFQPYaegVwrUKed3d799Rsjkwsx11PGbH4ryBGFppSpDWvokG5gs",
  "key27": "PvJw6D9dDX8Mv7RAy5kSY84LorHE3j8SSXMYsk9GW4tGrENAWxZ7CzDTM94C8yoGt36RW6uzH6hmHe4tAkXZJ7d",
  "key28": "3DdtB4yCGmhh98baimRouc6DmFRJB8pDZG3vXWW1F88QhwYuJ9aR575vhnGbnRKYi6gQv8bWLVQxEgDqRTvmxoRC",
  "key29": "2irYG8fvaVChYorwVj7TNYBEXNis6YDGjqKJWB2Ck2SZLzNCUZneznCh6DSbUUu5xJ51LUX9fxKwTrAbToizyqLB",
  "key30": "4iZEjCutUm5Lfh4iquYAaMMSPsWXuBcf8fMoBU91XJZziyNKCqGXV8RFazS6m38ne741zVbrf96EzYxomEmizdwT",
  "key31": "2AE9kuug8hN3tVCsZAPSXAJQ98szNQ94wWtCbhtHvUN3jqfjaf9uAt7zwJbZ1jK2hNF9medQ1wdLY5WouqPgnwjX",
  "key32": "4G2UFUnCwryF17qBZnhXGAy8ydu3Q5vb8CVJsF1SG2nvfhsaMMnjHy27MhMW3t2neWyJeuEC3oxu2x8vMrDyFEPg",
  "key33": "41yY61Gck3VJhNNHKnaVTMMsSv15AikSC4CyZ776MTYmJ4jzX6YxLW8VFb1nsFY2WEzrNiXek4fhfLcwgRMdoDCv",
  "key34": "4FY3xpRhfeMVmri6EbgwXxdNFo1q3zPUkpc2cmNACcCzvSPATdLAqTChtv2n6rvT5f2qowMaYZXbsPTw1vU5j9NA",
  "key35": "26vqbgGpo5KrEtHdArm9xotaF7CYQW8c4QtCQJhbMTzUFANXCoKPcPovGrGQUYWhKf64HZgzzNMwCZrrnjL8jPEj",
  "key36": "ykAxoT4SHf9dM7swu2DV7aEpSzwr3U6DvQvu6K4gRtQRRFEucq3Su4Ldu7X6CGtPr5XkqRoCtgzuFWr3NHc6qSd",
  "key37": "5yVL24Q9pvkk9BqP2gtgR11sGdcgyxnwRPffW4g2SntfGGBMV56DorEon4cvtMLbbvEbSQzQA8GFMsAPfCMrAEvQ",
  "key38": "3N1r8NiUHhhGovkBFmAvFps8n9w5b8nXQfvPThzPPWt3hLkMHtdKhwY9JgeWPy3FXGS4LXqXZpzz2LymjuEYzKDX",
  "key39": "5VkLaCGAFSAaHm1QF9SyX2uW8wRHGR4nFEb5ZXiyYSJ6Tg9d4aZnPZCTJaPfYz1DG1hscWgbEtEueAjqRXG5F9N",
  "key40": "4Lpr4yzCi5dve4CKDVPfDK6YEEXrVpGWn1kiCZxPS4EJGuDJMzf74Y8XCFpWzfr9Veahd3Dm3kon142m93PRCeg5",
  "key41": "4yLpm8Zy1eDZLLYg6D8NYZhSYu1ScMtTUv3R45NfgkfT3bz6M7hmYqWw82Q9qNyRm7UnSNncR1s6nGjHZSNDQDDz",
  "key42": "4bPuvigVpzin4XBe5duYqULXPQ4BQMaioYkah6hfpe5UPVYDG71f7xQu99EE4mAU2bHx8xrdFTvXvoqTMnegVJ8N",
  "key43": "VkP9szW5zb5Faq6J9ixtFSerPbFrgXiq7Fap2tkhXYSmZDJi79vQGk1yZMw1LoGVzXWLPwRrLKfbJ6wEj1hW3Rs",
  "key44": "uZzjeGsFg8V6jMHXKpT6fW5moU8xeFmYFHRFG7XNUiYUnXs3yttt53aaP199sKJiUshGDecSeSHYPtFqgahivUs",
  "key45": "jUequBxGMJ9SSNHtuXKdx5QsUSRmZEjUnTHhDmYMqxEmiMPiCZyTDaNkggp6vrDVVCmH7Y44DAQKcUGxYGGnVio",
  "key46": "52wrBmdPzKDNg8aCWbv1X6Ly69xyotMA9qjD7vhYBw9qAc86Cz4LzKnu5taZQpapEmc1wD3oSVHL7PkKuradtEY9",
  "key47": "4mCnYkNJmyu9zSo3Fzc9xcmEN3p2jpESfiY5Ckit13SKJoSoaTWRjnfCLh82DEWK4xSckUoLzVm3oCnAuZhNC5mQ",
  "key48": "48aqLEBHgKfSai3zL5sSrkCsVPRNRGT3oFf94ibRZAPxvqCS2NUCR2xvVJ8HQTb8L96cn1cZcU4C8o7tuWiSaknS",
  "key49": "24JZmzxFDVCmD88GuXw74YbWX4avQiDGzu4zqBgHdqoNwtV8i1iQVMtZkRewkzDgyLyNhmZyp3Z36MBLNsw1dJcQ"
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
