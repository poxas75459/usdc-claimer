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
    "2q1ciLSYsyjiJLUPrZLYHPqQFpwbZSct92xtoUMS7fdGWyH7pPnb8c6uUdx4DLuoVYNtNMDavoU1tPWGm1asZrfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575zsUhdWfSqQNXcDfDfBnKMeKWmYcPoekutb5hqqtr3ySfZJK3D2SdiRST6yre1AtczUhuV1qQsGrxHisA4gfET",
  "key1": "24pezUkBkXdFaLnTXyGjiv3RZVG9DTMABaYA6dawsUbsBNn3a4YD6P1stbi9A5F3KbZSyQjRGkX4mYmFB5K8z9gL",
  "key2": "3hqeyV9uahA45QsrV9ni3cJVHKJvKhnLZ7mpAM3b5GriKjGEXpiS6VX9she7WeN3gCNnxFqWAu4ijyc1hZFAizwv",
  "key3": "5X4ukVAkTMqoaqjkiuUUJ6dU1UVt9MpBjX5znZ5H9NjDFd5s5LQCaYrJDAPQw3nfZaCxmLeGQqm7hB7F5PTjp1nw",
  "key4": "3GFBSLUoCoXqhyR5EF2oBFjnVa171CS1cdxu9F3wJVF7XwCkU9HZ2opWxfrk2FmSTXVnAHpdjF2eHPALCfKuRfoj",
  "key5": "4Efm6GyLYtsMmHpW9R5YcNg4wdnCEqP3p7nHtGamSNnb3ZBQuXY6DrChtEFSyNsBcfUoFHHL6iZLCRmopmCMTWvw",
  "key6": "EzCqFtg5c7CMS3Uoudwar4f9X44PWr9ycB8crakPiAxNfUhqraBJU2Qvz16WnZxd3EMabWvc3gpEgcdZYRM5QFW",
  "key7": "4qtZAD9rZZ1affAC9eroRagETqVBTEHYwXG7Bsk9oPVAJaGgz3CUDEqS9DTuFeK2gGwPKw1mgzNMxrJjL828GGbK",
  "key8": "9EvK87zvrCyxBBcDCzAdBtxdkgZxgGXfLibtoPbVJ2TEpNWmNJDrFYcMSCXt97WwMoVPsFQi4D5gVoZQ9Cor3UA",
  "key9": "6P37y2DpmPTV41JkbiH5cndeJ8qQTUkvoVZ5majW3xJ3DuhjQhjfM7CaUhykuYHc2voYfFMBAZshSP44UPc12Xb",
  "key10": "431RLxVgPcqMLLB5MwdK2wQcf3pd8yzqACBUFFmuZHP58eDVjek1WaPQXSgy2QYp2Y3wady5sQDbZy3aTwv7u1Kx",
  "key11": "34H6gxRTPGKq32szi9Fi3e8CYxLiShLY1gEbsZFE3HMhokCh9kqAwnjAPytajab7hRBfFj2cj823vvNZ2JnWjvkR",
  "key12": "5cr8ntBxrXJzhtwWfyTRzRQ9X3FLyDPjf6XCWDzpGz1dtgN8gbAkcsgpBR2XWP8yNhYdoXTdYSAtxb1McgPGQAE9",
  "key13": "56HoHxcHsd9EwLVbLGaGuiEP7KAJDfTcCdyuUBm6eWwckf3CDY1r58AZF2HzCGGjbBc13D6etmzbE4N368Y2gwGo",
  "key14": "4bwqvWm9L2HJft36YwyG8bwfptZDVaPwFXHGTYyHgPyCeFxBLcK92jLVDSuNEMJe92nh9kLsz8vtcf5iyN2hDuSa",
  "key15": "ZszKmL8Bo8hL38BT3zKp7PJwAJxja4Jj5VDbdszihDeb2dFdMdTk4izS4pd1bfNnDpUbo4pjGqMAncEn8BQRCH7",
  "key16": "WSiBKKdyvt5vCcRNrTRpiwPq8Qfdjqu1SpgXZHZ4kq5z62usMiBRDUx9bEzUD2iEkqFLGAw8R5RUL7eUBv9BCb6",
  "key17": "3ENYu3jHtbtctuAXKPvhQZrVLG1C3YGYS8UsbAzxFn8YRtHR4aSWxWUbnh78qT8vpDGv2YZCrWucuvia2LsZBk9o",
  "key18": "3KHGx7bjVHsmALDkjNSsFsmr88rQYUuJ9ghGfhjxjaCswbYY4qe4qxryNFoUcdnTNQyAkDgnkW1NuSuq44tatucG",
  "key19": "4FYN9t3owsCy2b24tUigvKWvKYa4mE7JZDrRyQWBGZfSEphdPzCyBAb3joHVTsPHyuNtNSwe4Jni6EGZWgDr5vnV",
  "key20": "2u92LR79phUPwZ5jvxuFbHCd1TNakm3FRywu88mwfNFYVmiZUwXo92HCVza1rQ53gdu6R4ZpzFActn4L5kMuT7eR",
  "key21": "2dhpNvz4TPWwB8BcnTQj9nyAvwTytddHiBQKyEvY8Zt5gggFv21yt3dvMcxCPQoxwDD79ibgCQxG1iYa9K7zqhNe",
  "key22": "3o9aewAJcnHJpjXj9Z6cgKNkFFdMgcm1iupP3e7kkWANzzdrevGTuSCxE13ayVpziMNLM79gs1xa9kTjP3nEu9ZR",
  "key23": "nqYcSYJxaDJJP5PPzWi1xqb8MdSw64MfRq1ffus82UxYChEjJKEmjmu2xMmgNeRMCWGBFr6LGZidwik4E1et48S",
  "key24": "sQQMzjkEXaEuBSqqBqC5upgvt8Uk6x5E2DEvMrsXsdmVLvfxXaFRAidT1f8gkbrm4ZQcNd6kyYGgSQt2LncfFGh",
  "key25": "4c1oSTdvHU8kQ3mVZqwhmEXSBfY4GGxJwaqS1xmtpsemPmLJDFsYBgfKMufSrvTFYWLSQe4tzrgRzNzwjgfVBBma",
  "key26": "a3CgbADQS5VFmik5egjUBSpprhCbguEPufisxymGihsvAA3VZLkaVbQpyox68beZGy4dYQByJhh8mc199Fxfp8r",
  "key27": "2mEXcpcGaPkqXuGj9Y9B8SeLciGtx2kFzW3VFrZRDbzfCdiagMdLPtivbLPfSP4NdPAvTQkDBdELUJe3Svyw7eEi",
  "key28": "WtwLguiwRU5FMPxtKwvrevkMUJoPJNFWRbbcRUTjVh2GRkddA2JN9CpqMeyzF6iMwDn61fiynHdUAc7KJiJP92W",
  "key29": "v7XmkBLanCyFRvNMitmpRY3ehDkpZZNt6XUYnphn2yaaL5MqKXRF9Vm3VFvQcQmFmQH5EfbPtXAPVXvXEChSrF9",
  "key30": "4FTpkhacio2VsSNidWp4pkLRQ9L7ebA7Kr11GsxijcwmSNh3WXJi2JsiEK9R2KcNzMhQUhjyNrU2PfJb8UjxZcky",
  "key31": "23PKjFnJksKjqtvRHPsqwb28SwebboqVgxUq7NhiFLArvVVn86gWwP8G3rYKYg6eFRXEZaiCP183adpt2f91Wh5S",
  "key32": "5343Jc8FLfEoGM2PdQ423Bg9Zw8bQRPyvbA2TGbPdNv5hAbSi4t1BcfEmkdQ1XtZUprUFM5vLgXq3TDp4m6Hon9e",
  "key33": "whHu1GhjpoE3LGqvC97tAYsZPBkYLbPZW7FCbTudijjGgqDmRsmoZB6Wnemi6kV447wSY6usQVonQNafkzsk1Gj",
  "key34": "5PK2qkjr8eTvmXV86ZpLTQKMv5H7CRFznKSKJg5UewD8AxkhKjsMY4sDNmYXyGeLQ1VhR3aaNtginqJA9vtop2Lw",
  "key35": "SQaUjVdqc78PeSnSdot8DH43GCBzbGnuuapMTyU4zZYinMwWn3nMpJP8B2aB2iWCjeTgHdXaQmL1KqPJt7ThaUq",
  "key36": "4iPoWbFDvDhpMJLfGTLrfx5g8dRNiWkFHvYFnEC66z4CSNMJWyJTPJGKUJdkW4VT4shzoYAWDh9JjZiWTpf9TwiV",
  "key37": "3c9PgYq7YCRpS8G4BGmdPvdgi3nQptbaJMvMUVXdSHJ4erQZVGK5Ue1Ef2Qek2Ro52y14D1GpE52YFWPhzqPuXox",
  "key38": "2kVH9KXGSCv7xaG46StYBtdkbP8soxvgUW8yxXd1D4EMFBuTfVfn6ShDxmjZCHzUBjzEH1EKZo2SjuNssEhaqyHR",
  "key39": "5RWoqzxbV49wEjqwtrcMSSv2DEkkDrppYGTqBRwcJ19L2pQgBuDUQSZc92dKpz8yyvhZw33cPUR4Yr2jCB1umUKP"
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
