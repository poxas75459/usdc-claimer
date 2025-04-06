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
    "5SVr6f6md2RE7NkoDPqMxx4zEezRdSJDfmAVViznrbAdLVM6bSCxVvxwNGDfhQchQXpyLbbPKsq8ULiXjBwBDPJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mirHyCx1ynJGQeWKtMpMDrx6C4eWMEdA1eC6HrBzLky4WrVDRmbmZ7DXMTAgCkhXmnKAgj4VUNkTBXv2RG5jtbA",
  "key1": "3g8HsH45GroeB1k1FoNVRhLayWEKwJYaDqLqkJQdvYEdcStuDFqXbRjmubjQYe5jkW5hQGTBdEYKyEdtDg64d5na",
  "key2": "3LrCrBHXUeU4avyAefTDi9ydxRfwDcRgSVdfKW23kgbMNWVrexX1nwJGsZKdRDBasN9FUu8qLTBySwzFQC4hApBM",
  "key3": "5Zy5b15hPzJvgCmaUtqwoe1yheXa4DhKjaoGW4dwv1kBcdURwj1ptAekLWEaj4xP25J5fvUP8ecQvKScpAwYmnsX",
  "key4": "2arjzqSowFXjo4stm4gbHqf85LME5RCbLMFzt1bDRZD5WXs5stXGR88ZoyQ8Xd1QpyxdCieYxRuFCM784BzoZJVZ",
  "key5": "5Xew4PH28wugMenVpkcVqGBqD1DfZwodrTZAfYwZ8NT8HJ2E1k8Fg39Jjaaq95etW8jiJ2Wwtxvip1kcctmowmFk",
  "key6": "2vGu5dM77t4P1u4aeGHfVSRfbFKt1agb867uVd3MnDDWjTtG52xBQTLEeQP9Pira9tQTNVuTtmKVwgcf4JxjF6Dm",
  "key7": "4iMJaW2nA6s3wLsSmU4Es3p1vLJBPQooKEP4y9qBo1Z6qt8EKT5YRB7WQ9hgyVV9TvSnzCBNsNCsyWAyFyTZ3WQT",
  "key8": "47v8LLk2b3d5JwFjass8WSarZ2EySFMBCGrVzLWG977raWo9X2J6KEvEm5z5KMkuHpq9tab71fWLXFtP5AnAKvTg",
  "key9": "3JeiQyMNSEQyCA2S6ioGpaZreGxPPkabJjTPYutaC1au9kraHPP6QkjYcEYEFa5YmovGSqVmBu262jC6s5fGs3qa",
  "key10": "4NEr5zYSACJZeEF57ZTfkWoE8uFKN35N7xAEPWaWTw2FFi7hUWDXVdpDripJzxK99PfvmyJKsPeRcRwfQ6JL5RoL",
  "key11": "4L62LycMwWvdzDknsdi5Z5783v9BfZ4CptQRY1azx5wpjevtKp1TNqNUCFXs1uZVV2fo41FzhtZoKCY3K4e1mU5H",
  "key12": "4stYjsb9fboQJT5mdgZnPjj6g5uweV3KyyDufqY1hoEFpbmt4TC8Cx7ocXHgnXbNBfeCahxSpnVaH3egNF32AZqd",
  "key13": "3ock2BaUdVc3ymrbj29wcctmAe38sXjkptjFpZrKpwmjJrdNg2KFAh7gUyyaAW8BtTpVibTN3G4XjKXNr54KcwP3",
  "key14": "4gtiVYR2PUDtqDdfPQNnG7AdPSAkBEZbeMhhkWRPSp6ujr4A66EbE7gsKBEGt4YaCZk1nzP2pNGscywqtAum69mT",
  "key15": "51zMxjJrWo68u8ofC5HFpoiK8zTVhBLdhn6PhZTb6b1KXfP7h7vYTuwm7aNqAt4VVRaaNnPpzZWm24iT2AxevNHR",
  "key16": "35wxYVgoQfikuuQEwVSCB62V8giGVvKEkGMzvQGrUqFaTZ5iDycQaxUf2Xc17EEsH7bqXTfPkWqJL6tLfyYiVDvk",
  "key17": "2ftMZ65qPryytuWkfmbmPaWhUWxbawoXJ9kkP3W1xEKRwA56mA1CubRA3grCJtpPf3X2nVq8vJeaS7pPP7bYD6di",
  "key18": "29Zxz9nXPMZTYWcn5CuaJNSxbHk9stPMkDeVSQSaahJ495maeXw1gqjzGv5TQitwRjWMmF2bcPoPFyUxrUwhuMbL",
  "key19": "XeKsAo8yFn932WW9aJS43N5PxjGSMUJWciqTjBhPUs71LJ2eT68fPnJZUKZMzsRSXPx4PyHcUDTHFgLTBgsW1nf",
  "key20": "meNGFEuKXVNVfQMthk6VygBwNC9roTBeSixrWQUKCwCaTgbvPH3EdhjUKaSy3SNUDyxWhFvGXko8vLTcrcdNW2e",
  "key21": "5W6kDhPvaJaT97J4Dn1iLRf9R5TRCg5nACxMbjXa8bWB8D3csMauE699LH9Ds7LBdeAKeAFx8nU5dv4jXv6D5smK",
  "key22": "4weNcuZdPwa6s8sj3aj2FLFgBHHntdX2dnHpgYcgkFYJ2w77N4DDmAzps5FwtJ62ftubQsCV6CodSG73H3uQ7MJj",
  "key23": "2njvrneAn4FBa7FuTm885jDjqfsWKL9ihC3cUvNp5QVypz3v3mBi8ueKghnYHBK3m3PMstr2q4dVBAyNPrjAqbm6",
  "key24": "2CUZA61XwVuJPJ6iCJYtTsCZPhY9ZeYBDoJFuaDPDWRr2J7PgYBCT3i9CLgviK2JBJring7DiVgZnHifXBocw3WL",
  "key25": "5RcEqP2zCiLGcdBf2nNQqZas8Ma7BHiEwV8DCJvefaDBD11XfsDG8PJYrGjg96wKx9ePKa5K1uxhymrJ7mpRVQas",
  "key26": "Un29mfAubMvjd9GpdHU9d5aUMwTLgZsMna3QQJfsc8mVCLhjvYRFoC2msJKR9KdtzyxCLJbTQFC5sYiP27cCU6L",
  "key27": "wNV1XWo6Ev3BvZHKVNW5px1NGq8JN1RtqYb1skPJJz7kACp2VXwG2GjLLr4oeor8zwtZz6ayn135UaF5sfPPdUK",
  "key28": "4TvTYw43MYnbvYEvXqvfUJuewmu8Yyu8Tsf2ckSWRWJ7X5oEzjcfsFfHwuzsstCsuAqohe3CQuwFMwtHCCubPf6Y",
  "key29": "4MeLEMGKTxNL8xs1ifKsHTGJuSxHYFa4NApJnHbFvDRAHa1gbHQpv4sHTt8pEc8ioYUMXsyGFcoAdfibT5nCBSg4",
  "key30": "4ZUc38tJNPrAxY33j3BVUpR3bCVJjqkNFy3UCGKYJEXK3NBEXJpsMjrtkEpCSoQhCWk71jQgV3x87hRF4AFG1U2P",
  "key31": "2qNSyYtXGUYWW1UmPJYuqYzgBFK6pFrvKbBqUB9Pkqpmk6V6PDdgs6hV9PneKVvaUhidy5G5WsQKEHvBhVFoEAmT",
  "key32": "4YQQSJFG5YYT5JMNr44LSxPjRpjeEhuvxXbycxU2tZtXmjiwdUaTNQW6ebtuavzK58dKYjRyQDqZbiBvDoaCLQGX",
  "key33": "2bGDC9bXLHRF7ds18CU6uSRcBCwZmgEmrVYYWRbNocKLHzhimAVfSopa6pyxGDmUNqv5H3Yogta9XAJpTLhPpETj",
  "key34": "41aZvWJrvHXvS7AcZMi4isS2v8oiRRHcrjWAQgtLRv2LvbL1pRMpUC8c9SH6edt7tbX3mv1LNEDkosB6UEBjuUSw",
  "key35": "5fYEujepgoUYnmn3Hweofd9oW6Qik6TYW2TgbQfCRJMngHEkntuEZKdMm8UmvCiKdahwv7SpgCutXfi8KBdXEcdZ",
  "key36": "LBBrZtvw27ZovG99drqidToYrsqPz5vMxsPRLNjJwdhW6QyK1ZKBYBDnbooKnVYVWhdj7YZtDfktqj56VXkWr3s",
  "key37": "4WiLhbMFLPmF5WjT61bBApJrhngRg4sK6rDXNf2kq4rgjtn8Vt2HY5eyg1GtyYUH9jxAL9CoRbrLYQQCAmpxYub4",
  "key38": "BhgnGdr7ujc89qVAvbqwbag8muag3cXDkkiSXdhDsAdfSbeFUQ66AoLBPTHKA19fje4YNbbVWMrfb1v9DTYksdW",
  "key39": "578iJUdbSg84DeUHdM7R42JcM1B5nv4uaDPaZr2QEDsupiX6FmL2EN15mshpVvEjMZekwGjPQqaufteP9XS8FShM",
  "key40": "4MK9hN2mGcyFcfr1nq2VdYfDjcQqkiK59hKe7MZve2H3AcuHUBVgg2Mhdw6YncMLAv59ShbePbSGJ5yMwdxkm4vw",
  "key41": "57NyPJtXXRxsaLqLxg8Cv6zfUZhytpbpEJ47cS8Fg9b5Zes46ujJVHzBjg3hWifL15EdRzy36FgQcy1rTTEk5kuU",
  "key42": "34QMK5MH4zcCEHBbFwuFDJUQiY1nUvVfScUZnE5pntMNueT3sMZf1t8QN2fRy6J9AQ8ZtSRSQgxWGZSDStSCoUAf",
  "key43": "4Sg6uoJ7XMFF3Vw29uecUHgnUAJjjJ3vnS8JbcMutNnTGcXBcGeJRLp7vhqRSN1YYE9xpkBrmbnd28bQDZSpWhr1",
  "key44": "5VExo58VWDFNDwcKtLT1PLsfr9pbnAPsjGrqzRWApTN3yVoY3ecgtwVkmiWrcT5cU1jLisL5FAeREbJZXs6xeEoU",
  "key45": "3TZiEesNyvAN3nm8KkfUMB9rTBj1j4DtjyrNmjEfGxFutEqKMs7Yr1AWEH8U72BjnCPWBJwapCh3UGLUsVa8zyyE",
  "key46": "41H4SmJGouhg4u8K8CNXLyZEaxtYr9P6YCRRjfDALqgP8pdFw1D5cokdftr9tMS3Et1stpSkcxy1kGLQvGerfwqx",
  "key47": "54w21w3tNrm1bKW4pFzApNfxNm8dXoWwHUgmj4Cj2oTTcAVcXcbqBHmt3iwRazqHnRWeyaEY3QbNJyLxaRRy6k3S",
  "key48": "XyowgWio9XZ6gFURL1YRoEutadiQbxwxqPbHWGSvZYteGz4fT2Mv8ab9fmFztcf6j4gLqYKMCxHDez7K7kLUidc",
  "key49": "gXXEvzi1Tr4XVANp7SCSWSKuyDVskee2mPphStKfiSNiqW9UuuMrjtuT7k968eYCS2CpUDAbTAguEaEwZrbcBqa"
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
