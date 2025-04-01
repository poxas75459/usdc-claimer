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
    "2qpYGTkj9mLKwsNe1UckJGEHT3NWJQzMVhrNjKPE3KzZYkFcqWs5PHsHCpEeXdfvdgogrcuNdZx9ZrYbaxzq9piQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhPXaQK9PwQUeLA5QDz2FVbzSMR4Jj6RxZWPCWvS2QA4m7BffTQbcCwSSr3LXFBpHcAtFfUtabBjFbdE4PtmhrW",
  "key1": "4JsfbNNPzkUVbxRt56fBhAxc47a7AfauFXp6fpUvFRgM3BqzNaZ5rXgh5etdYeaztzhhGHqB9FyKQoQcdNwFCo55",
  "key2": "3cx18khjLSiBjA9P9rwUSFK9N55kebCWh2Ht5hkvKmT2jvz2FbDo5xu6FESMt9pooqQBHXfy2J3yJztAmfwaNQuG",
  "key3": "4UGdD2KRXjiuZmpBWDdp71p7Uwue4f7Z2r87qoN2c6KTE1hqKSjG1GwE9fsr1vd2qRvAKCr2WQXdN3WhCi5YQXWQ",
  "key4": "2iceiwmGXu52KfE5yKVff2FoscjGTqKKxA7JCA2Pff7Y1XdyiRgNCPyeMAT1u3dgzHpkcbHb6oHJKJohCA6L9tmQ",
  "key5": "5Ktzyj7ZGw7sziSRHxeVyi6WdY2Dn8mbea9W29qoADC23msFtdAtb35kddgCUJCymYAk4VSybMu2bCESEDoLRrwP",
  "key6": "4bXRcxozW54gEGCy52VHCoujtyhAniYkXeeHPSdp866VSJfijDkWHLK3AKmUGuS3QoqYPJ1TTXdvqHpmwyYUkG4M",
  "key7": "4HYtuFMRCuaZ3iFcBP2DUxay1FPHazn69cT2K8NLB5FBxaoLwCPprSymSFMjCr8v4n6q8GhtBk4t5Fn4qGUkUj3S",
  "key8": "CjAW2E2oZpBR7V48bSndUs4Dt3DfW9GquhqDHuBtbeKdHGdDUosyoBvvSD2Av41pY2jRKwJoPdvGgTUfbNJu21b",
  "key9": "m2NJRcwamowdd6h49qzz9iqENvHgmfg9Pz7jc8uGViEgoF4Wy3vDTdaSUEYgcezRVMGvKhDtmhbaiKCtKaA4wFQ",
  "key10": "mvPdhcYjMPAxz72fd62CCBoF6SworikXkKXNySzWWtrVvRyxDpS4nKeNtNvXkYpfTBW7q3mTMypvJ1gEPxJ56KR",
  "key11": "5zqKtShJPQD1LTDp7QDLmMb5Jk8BGLSELyyhG5QBy5wPYma7wSWnGgiSmc7cqSqGeiHEPUj9uW2vr4b2vPCexaKP",
  "key12": "5xxTZvCgPXuVc3AbUHSLs4554tNb9hhCn9gh1aL892foEkayAbcazNwKSZbFUvhtCMGX53msaq22AWdr24MCixRB",
  "key13": "5RqeZBZT46dXpJAVYtrGfHv3BvBfUUgxoLixfZ1Ganpo421Z4qd1UisVW5Jr4qKQaWEcoDrKxKm343HnEJieNec4",
  "key14": "38VbnErzxBhAXvwi7xNancRZf7PuJ2DJHhxSPH2ksTkF64njwAUxMvPnqSBViBkAeQxXgoCDUkqsNJYRQ9cvUa8A",
  "key15": "2ex7f6ND3nN8BPbrAWMQsRzrHFf7cmjCwe8LczJkoMMbWGfnySwYLuH2D2mq1DWveNMzQJvnJ757sgV2Qabs4RMw",
  "key16": "2gmqN1N1Kpavfqq8RLbxZG7vdiYjLRvkprdMyLZ7q4nepKg5sTmHd31mXBnnnj4Wy3tkxh1ynFTRXd1HfRoX2H3a",
  "key17": "2BCnNhonaadjvwtTWYtFTm595ijic4UqZ7rmJ723BRgz8G3pJmWuZUrQ7JhkWCoBA5KzZz5C9A9LKkJdsAiduwF9",
  "key18": "2KWufxKBweKZ2jL9HFMthejmbjRWSu5wSaZ7MiL4Xagw3bwUpF62pfFTkSE39uKgtJeFfbGPv8M1Pyji5XCEzfbF",
  "key19": "eY3e2hcoaxiLmjSvz8oB9LbuPQBH3vTqHCxg6mSktE72qyddy6gxyDpR1GZzmz4yceEdJ7MEbHwHSX2KiSUWQ3u",
  "key20": "fj3i4ZRBWmFQq9YqNnbSQ3P5mhbTgitytu2qFhYMQ8qcAfNKuLvdYGWtnqd1e6L5W9AmN6pyFWS8uxapwW189wV",
  "key21": "35QY945m8K7hwg2VmNUhmrPzBGNWio5wNktgarfhNY78r66vvgrtdJSxpUXYNVemGyNwq4Lb5AyTscxtAh4QYtuP",
  "key22": "4cpUQ8Rtm3Lrd1XxKdncXDfXQXGYFpC6R8u8maF314RFQYcgyh6FWsnDGooLBzuSxssVKcoL1jLfzU6fnE9TUrp2",
  "key23": "u7LqwsFKpRyiWz3ktNp8cdFCpY1NQVoneuvo6CTA2GN9xR1xLwNtVZeNC8vCrZfotuLhq7a86m4Dv7jUbUb7CGG",
  "key24": "NfSUAEyjaDRAg6EDSeWMLfXKLVVP2McBRRDExHTaASUZMoK3MV8UbyvYmPSJ4nmoWxg5NHvk9H3yjLJ6Pdfmgyr",
  "key25": "5BUzMnNgKp8zJM62nifPRqK3SciyN3eTLyekdEQ1k8Nw4oFDyKTprrg2Bo3HGgB17tRKV4GmPa3HkEQe8Ny3KdnD",
  "key26": "4uPGE9gPRRAKG71AH8FLa1YRA5Lqe9oSBY91yR3TyF58NZZSeDdDF6pr3cWN5tpBGHesNrrLWLzJDTy3g3zFZmvi",
  "key27": "WVAxJtvXctXJZvowUGzdTSYcsv8pBR8CfTckfsaH3y9MWWszEtJKcMiiJkjydPDG4rxuCjjceMSr3P5fo5FSh4B",
  "key28": "H8FRzu2H5xktJJZ1vXPADoEX2en5ZYLr7BbWXf4mdEP3kk1ThXhquWUTj6HHfoEKVPKmikDojcKRvfvYtDvLTiY",
  "key29": "yniXQsBVKRnyYtjEFLuDt7SLyjUEFzXPPAfh99VxeQm4eBf4JsgQ2c6BxWhnG95VgfHiBYkQCXfhCgFZe131C3J",
  "key30": "4anpM68YjpxRaws44RMW2jHukxnf8bk6ZYs7o9szpK9DVosPobR361c3XurJ2DKMGmmcbSprzoDp1gUh9THGyhXy",
  "key31": "2ZsabxTdj9NoN8M2oDTiK6s9sm97B87fCgUL5pAdo52PvBJNjp7c5dxFTUk4VecstzTydeHG44K3VyUWPK5bBdag",
  "key32": "rsvA3dB1uvBzLMjuBZxoKnsqrNSvWKymq5y7fcBQy6HjUsPkHY1tEaiLZZqxjhz2DVbK3sS6vyvD3HW3dY5Mifg",
  "key33": "3jsqYvp7pfhQE37hA3XQcqRQ1oVBLU3Cm7cBoyDxiTZA3L7zXFfrubyz8wwK6pDp2L8h3irGz9y6F2JSrnkEQ5QN",
  "key34": "5XNgErZ1dJ1yKGXTFeyokUKEwsKiACH2sUGHUew8HaKJ7zWPAYMFbaS9UwZQ32XYeDia36Y7McBarAjK1UKRp5iC",
  "key35": "4D5hmQiugaiUaMxD5gxya4sa96WkDWGfYFPcBXobBuCKD4KeN7BmMEZ3iKRraynTUq7Q7Kivfq7Awzj9VkWu3y2v",
  "key36": "3eBWr7F6vundEUiVA3tVJccUkY2m8BRX1msXjPip2kRvwcdT1WtaofnMJ7AVpBKedDdSkNshVhhYkYmGFyweUdHf",
  "key37": "2zCs7GgeiB4Qj4tkggvsZ9TqEL7tbViQesjiL2qjkgovrZhRvdHTrJ4AEtPtsQDiQyk94pamxggWrMbipmwuzREW",
  "key38": "55LLCbQckLi1vn25UnhJgkGqvH6oYeGv4E1UgwHniCuazy7Em3vzhaKnTCG1aZwrwaSDA4YZq8juqtNs2WmiizVf",
  "key39": "3xQo69ecmkXS4rKty5BtwvkMh3JyHZ5xmmzfQTMR5Pwd5Jru666QUjHAuoyRdESXupBJf2HwGeuahJ4j2gNmegu8",
  "key40": "4VzFH8bNu5n9Ut15fi6JMWRG5WQXPppfJJi89xg6GMRUPhUhJUcYVbXHJK4JinRdNXXT2uCsJBpZn3NvhpmaPUPW"
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
