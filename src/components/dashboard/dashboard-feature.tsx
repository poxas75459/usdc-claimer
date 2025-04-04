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
    "2fJBrNXccCfnWH3YmeDcbcMSAQ6mi7Wg1TvpWd9hyK3WsbGKMW5os8KKm42AiTtVQodof4zMpqsWQgRDuwumqUgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFmSEb5KLvTKfVQMwvZRRQLyPW4fuRxGV7K9WpKjYSrMcCTw8sYn7yLv7M5GhAwcRzHRh9PRdDCRd7KxAJYp4Sm",
  "key1": "52F4b4LwYoeRRHwQE12DrSfeG35iZFki9bGbc32koHkLdvSLEMPax122aSdEoFq5nTXvu2GsDpeTaCL8JwG6EbUK",
  "key2": "3Wn5HHxnPvSoNH7Yq2RHWCdaNcM6J17nBrbuhcV7XvV83WxVQSP5YC8oSwPBJTBk4DWoN9knEnjsvjKik39RJ8MD",
  "key3": "3mY863dL83HAuyt1gbCKPjz642hBtSWj1hVtjmdANa7eNRNYtAaAgQ1qpRg3bFsTEwonaiDG1KzVrWsABuMtgtRz",
  "key4": "3NuEGjyYvQVwLxpYPPPSdP5purMommAoGCZSo4fdZ8QmyGnG1McEGcyCKbEvQV2T4s8cxM13Vm6sTqdmg68TUcvL",
  "key5": "NhLBjmt8DM6SFzhwaoqMntA3PVHPYpihsFv6HFYABYLUgTFThjf6nZUC5e5kNDwfignzsZja32aBgPwT75jQPnL",
  "key6": "2C792MCtg1ZNXELKLwQab6L32WsnuCat3CB8E28iCmBBM9ravjEw3772beMPUbzUHifaAh62R5uhk61RNc5BwMzK",
  "key7": "2qtHCU2ABbfzEbdEEFiRSwd5R9QjoxPrXc28HqBsJKJ68vX6CcTdiSHLQcW16au8UNVe4VsGWzgPV84Egt3avjUx",
  "key8": "4tKtufHEDQDFep81T3twXFHUgPp9LS5afxKecLe7QuVaqoUVdgfak9vyKj8m4Hxu2DcpEmrsCny3Qd72HBAgj1Q",
  "key9": "3zPNsrv1VSY2E38Q9iHEM75482oBSWffvYqwZ9Vir2FiMFwYSijwHT9dkhETejyK3SY5CDam5HUPsiMrPtuNVNCs",
  "key10": "3rVp2JT3y246AvcyNLP2X9woeMMi9JMU5o5bSGuDMEiaNDznsDEb2RExiKL1QFiJpi5PaMHSpEsQnPMZXMaCPgiF",
  "key11": "43hFuC5Wq2Ax3c6xpQcgQq7UTBcpwTn1H78aqUf94JmE2rgDDYUxeR4bVPae772CLFC3g4PghZ41Tn8nK3BbD3wt",
  "key12": "5dXgNaaVvunF9UuqWpTXtJ38qcCUBYPCUXWUHKCAHsTQ4QtLnY6bXXkNwuhpsJM9SZHgrSakNVZzZmhumGGADA2z",
  "key13": "4oFwWfNLDhsiMRKTiHcqrt6Do1Cs2Ko8pHPdxfTJTHqqjELjzPAe9xNRL81d5mEfz2VnqncAVagxTB1xoNhrukgv",
  "key14": "2YEmnuwHrwND1uedTp4g1sNyC9JXF1DYbYWkgqYhLTA8444K1MXxa37ogMm3Q2bCNi5BQoqvoCeXNBi2N4Eacxyx",
  "key15": "3C8dC3yWa7psfxqiTZHKghRM4KMouLRLzYZ8LMbkpboPgJY9hH8hBftMa3s3ZCi4TkLpLeQZLuQL77MesU1nJFkZ",
  "key16": "4BpZf1BjR8v7jjiVspGLZJBy7E8qqwkc9yti84ZdaQLMzXfMsoYgmFnZCxX8sC2SqRK2S7SbT97JW5h31HB9VRAt",
  "key17": "2T2ksaUjdQbWdNrxZCbcGLpuGZ8AeBx93qqWXVj24aPvn4XVE7Y8vkQzoo9e2VyAsHzbj2fgK8GfQyh5z5ZMaqYb",
  "key18": "3NLTZsbWktusLEwmL4d5Es8PQ5SpWfnXytKYUkp8ED8Yrf1tKQthUpG9e6qyvTuoRQfVN6iCA9Rn1AckRdYq9zzW",
  "key19": "5qd4j7ZQQoXJAQTqzJHjHKuczmbQenzWwzkcx3HGegb1zvKrFGRcCZw8anqxKh4ZnRifa3cwP78syhcEGoQ8RWTA",
  "key20": "3uABE84QM47UPkbM5w6R5BmPNK1PanR57zV5UzcwHdgPWxhWgap5kS1A8W9RhBX63ns8QCzHwTdVt1mRAHFA4Gg4",
  "key21": "2h4isgssJPgSov8fs23SV3U9573cwgQrf4RjeN5MzEiNcnpHHwqJvjrX8jTWo8kNEsAjnX8RKMLy438cN1tUX92b",
  "key22": "3DgA1zddEDecwrgPTGoohLqDyxTnzojwQjn72A3G34kZNirTmeT3L9d5wecCg8Co1kCVXtWTdUsPo9qDXojPXMzy",
  "key23": "243MZYamDi4t7LqqBTvMwXCGnDFXapeZqJSUSC9iBhKhJtAW1kfUwYnWFkw3fNtSt4J2eEzUwRaKveoQa2Ec1CSm",
  "key24": "4J73sMUhXiBriASWJni3NhwdTxmvjhDaN2zgtrc7Hvu8x7bsSr8QQiinRP41o23WnVuyUgRtkzpX853swj8UqqRD",
  "key25": "3cRKSRqF45hQdch8Ebooxy5uYPHWASfaQuthUmpASUgJu6U3hcDr8vEEGXyEQB21eiQTUMdNPDWZS9RCv1bjdqTS",
  "key26": "3nEuGWoFg6xvjeGAiPJfJuxXEuL7WDALewhD6q75wziqcYVDn57SpeEqak4dv5hvq9EZANQ25oFPG58cWMyjQos2",
  "key27": "5Wz9VCp2iKCoAUamd91BCK7oAQH6ks2HWyMP9ccDD9Sp5esF5Cwip9kJ99G5tpvPpfCmC3a9fKqMkmigNsttLyvk",
  "key28": "4SoZbirbTtPUj8X6EiivdAquPzpeN7PgRw2vZexLAMysJmomBJMtPAqHR99h7kHRNRPWmLjG6Ny1YiY9jbHg52YS",
  "key29": "5kmG71DasNYqdf8pukvHhJ9j13cJt8k4GZcz6JUBqniovEhHiLMXeRasyDyYdVUH688xBZsVzTEEBCxDHNbVxkdq",
  "key30": "2r3ptntHDjNAfgq44h1y9PUJavq2pWNob19Xe8xwP3qmSmH9PESB6qMRowhWTq13L99mUs3AySquExxMEFA85pNH",
  "key31": "28YCookmePqpLuqUusEb8d6CngyHjjicxA6Yky4ucVG8Hcffzt2LYEcFFtq2qguETqBZWHTzSF2AYLpWpEcUTQiD",
  "key32": "23LSKBbdXfcj4rj3cohDFnPKPD4trMME5nAnA7kmfa89NcL2UdsM4FoSBpvhKiWMfGRBA6G6h9ABnGzw77dLZLhQ",
  "key33": "2qBVCMoD6CmcqZBcdWEhZqCwbukGvntXmuR6hmrr6oEGhRrdK8V5dYJaf1qngM8dRsrgG3HQzMaW3TPFvX1v5MUt",
  "key34": "2KauEB431nQqcwdFyQH2kVSFMjp5FkiecXszBtE6YFpKZnshsieX88Xgusqggrkr6uLZJbkpUjTRN2REEJdgMSqD",
  "key35": "5odqMm72rrbsjXNrx9rbegvQWXbmVfzNvB3NJQ8ybm3RDdsKogV2hxxyyEackcuHbyxJak5sqpn3ABF2fYQoxxM1",
  "key36": "5GD8XEhgZv4PMXym52wVVX7mZb6TfTTuoCwx9UghtfdJuh1KQ7tZ4DRNPaMyVxDaEBRsPVesBg7vTJ7zTPzZHFpf",
  "key37": "2xtrqQbkGqJWhVNNjob8qk4oqsC9jpY2aJxX87i8KSoKyCZpWsD5Uq8SaFLuf86Kvmix7kVFMu6vxPXW1C8CLJmf",
  "key38": "3tEgWLKa1RpkYmYUta1VqFsxtnbYdfRjoB4rEWJ7fdn6q16HdGDUEiPYnHESh6qct1G5cocYBSuWsBmonJmHRcET",
  "key39": "4AFU68LW9y2NmpnfQYKLyTgVvDaxL2g6A8zVjFcN2B5SfjvsuXGNBBTedVv5nW2oynuPZqNRaBp18Bxtv9LvASMs",
  "key40": "5HrK8E5JaYgeeqskSnQ5Cw8j4Lqu2HvQ2ooJwCJvSd9Hs2rm5YEhZVoPHPueWDgjRS9JBJqr7hE7dxsH7GgMfe3U",
  "key41": "4K7CQfbidDPB6owSY6pBVLZmFS6xXacsboXbn3xdjCgcwLTmypfotpFZpsP6UAt5GxuEMpDtdJ1nhxbukMj2Gxon",
  "key42": "2i5gg76gepsrTKdm1viN8EFdVCciU5jdzoYpScahthVfbg7LPF7EC7QuDaMLTvQmjva9KQerBiXWRLqke8zcmMcA",
  "key43": "4BYbHatdXUJGWMCQchL4QX3T5yVjW14QbuaBPck6ZSMSLXRVBKhpGrHgQz6uNBX9pEogja8faA4oYmvV8MNq7fGY",
  "key44": "3SYRXzNM4KZfPGwrAQTVhvHZMyzGWQvtRPeUWrviHWBq6FwMfjiqmcDprY7ZZtCGvMo2ZmaR8tCFywH6rADFTMp1",
  "key45": "4fiJRsqfKbayfTFr277qK3aBMQZw81tsHkR8x6wQRESShPn1rGRsYfb7NqXfMipFUTvQo9frVcsgzgQ5sKZEpQHG",
  "key46": "Cw18nQGsyFb3UebbFsWWW7WUEnozmbfF8JJbbTLDbyZa3Xy4sJjBCqrSuvcJxG4QvbvUi5LAHTCb8R413m55scr",
  "key47": "4n9TJVJNmHjhK7maMYDQzEDvvpb6W2GvMt2Ayi1tYprmomrTkyFpTU5SyaxXDVGPumknN2YMEoDW5WXv2i2gLcFr",
  "key48": "2d2s5JKJivbtS749vWdDS5SEidRSzSFz5Fh3YnayMjVtD3QWo2doY9BKLjJqJkcCMaSG7GSAHs7is2QeL9x6tEuF"
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
