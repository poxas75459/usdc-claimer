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
    "3pfa2noPW8guMMThHf65MyiSfenHNVhUD4N7EWB3zrZ9H3F8S9rusaznCqvrmqLGucgh7j2fjoLHSaQ4Uweizhtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ixWX1atYqYgWZnZaXgaecHhAEJXZGbCbfj4tz2o4rsaMaJvp27VTHYjc73wMAp5xQAmbQPBfJApkqL88Hu7vhj8",
  "key1": "4zS1o9Xeq9pnqxdWVkRf57xetMrBTKJZCEHDQ2z5oAuR2irEa3jnnkZd1LxWTCngbz4AgEYr5ii2sMVPcBbXB1Ry",
  "key2": "3eLkqv1kSuigNSgbD8Q9Lde5GzVnc5qWTNGWxChHjhhwMXg9b6D5LhqHANjckDsJKUDSzBjhahLWecBKXeGLhpBt",
  "key3": "2AiUAtQ8bFFydEeqb6acqfz69DhuPxrzt3FnXXoNRd4LNxbJecA7nLfCQLNW4EDjLaW2RsAeeKSf3r5SWM3Cpr2x",
  "key4": "2Qc3HJbDWAoujgLixEe9RMc8728CGThWzgBiKzeSj5gJ36XwKRWiJnWp4CK2YPYixPvNUA53e7LNxWy8BtyUbkD2",
  "key5": "39rH893Q8289zSf92orKH9X1QzWm7BsvypBQnvD4tpQbwi6Ug43Tzibo6njoAMpfPdUL9g4C8Rtb7p8uoUZx9kPn",
  "key6": "3CyKfYVpAcoELRwUv76N6pMzbPHLXbRpmbru1UhAgGFMacsXxMNPpBKp91jfexM1z56ftrgsMwDQkkgWwrGeSvKE",
  "key7": "VSXCAnysQiQmP4WHVjYFmG9vFyJje8wQprGQbybmviSA36XMUxZfygHgFVSnpS1LNU6ATaqLYFJSaQ1ebwFGt9c",
  "key8": "3FpEu7QhmKhUu5mKFLGCYSLCB2bzhr4ed7ruei65ifrCdFZfpQdq2VCVsy1Fm3BnfMMvDr43h5zkRbdZbXJZZMse",
  "key9": "2rbfkqb3tXpbgMbSj8LiQx8deW89HVcVd4DHpfavuXYFNRjkxHedhn34KCgsCpNiVhhvuzQC43hEReadhTnrHMMk",
  "key10": "5tDRwuHCCZfJS6By1h51ky7bqG9zXGRZonvK5eCEXWyVivU2jKPZUAnZEHFNa2Z73MdtdKCVS7Aavtvz2zaWsDuN",
  "key11": "3tDii9JYVs68H5TyUBvGynH1TnSuo4ZGGTzidwEKNmX1XoBWjAUKjYRkLgXE8LftU5CeiSb6DmwTNEDMkwjN9wRf",
  "key12": "2xMUcj76vX165wrCfh2PhqrqQtFVqtx7SjZcA7nbeSr79nfY9RYhCPndGdoHmtLagpc28w3TXj2836wstbd1LHLD",
  "key13": "2gjobRKnhFXVoRL7Xtbyi92CcAt6pFUrR3KNAekw7PvVrTW231ozn31DX69FhzqiTz1H3w23tCyBZCQ4y5n3uRkw",
  "key14": "5UzYRC3yjLbTfGT2hPwktWiEBTVKEEPo87vSky4grUMV8uw4aB7PMJMsy7F1arYidUVA67xMYBhB7yV4W4qsJnDU",
  "key15": "2VMpHb1D7LE1AJqZFzi9cDSw9pJeKvWQvh2Aknj57wEpbp3VvyJHEWNEAWiVb7qKuwwnWvzhoDZss6pK53f4qByF",
  "key16": "4nnQD4vTfuqEPZoKDdGTwtT9XtNGv9tNyTzpddoA3GGtvZJaLerXhx5FvFYVbYHBXnbthFZ1LcHgBr7qgBY5mhg5",
  "key17": "24V2CXLbJTr9gMjT23KEBZHRhTqArJDNMq9k6KQidwznTMSjvY4sZ4FVjPXfxkwE6KT8bv1uv5XVLeKrmRFY6Zg9",
  "key18": "55sRnJ4yMu41g4Pn1CKdN9TtPatSg6Jb7DvYJTvYaNeKneVDVr6dPk4bQ9hmC8jhiLZpepvup4VW8xgx9k2u1iqa",
  "key19": "3wdrjKJ8EZQ8NmESUSa8hHfxgZhpLPCDFVWazDcHX2qJsXnwpySDqQNkZNAHEFTpGhaSXywKRRZMnnNaMwM19vAa",
  "key20": "5VbUhnfX6Tf1Sr5HR5NEjjFNJ1Q7htf4C3SGBcCyF3CMsjfoVPy66YQS8WQJMkmZ9Ycy4kMWi4gsHQtSfN8wBF55",
  "key21": "ogziKpJToea17LLf4LsPrc7mtXd1g8WNb4FXoquusqMFGRM87MqGVWFxDE8vqhvUsKAv5KdGSYLrdGFFH8gsrCy",
  "key22": "gPhH3EJJCtsvUpXSWKtKtkPjMnjt2HUwCLA2f5J5bT8oYTziBxGt8KysincHb8WCa8tsG8LDGhgem1MKDsum7hs",
  "key23": "4ZYpWbRbfXZZaY8axn4vWU12PhdhpiW4wy482rK6fZbpEpseM9Ep7vmT5YvvdhhFCDBUtxmLL13aQHSozDWDCBEh",
  "key24": "36Y35dodFyd5ZjEiZD27AM9SMgc8U5MM5NNkR3pEY5yMKsyzLDJgqsP3MEHs6VPVSdS6yMNaDmra7Rb1fSdk1Chg",
  "key25": "4VoxU24iuL6NxpjmH99pmnP6SXcoC71Srd6uh1D7uvF6vKMcsJXUReXbvDRwGaGk9doZeQDiqD2KgjGoperoSaCm",
  "key26": "39jUcjVXd2sXmGQAuHc4j8PjF18KGQJge2x5oBhqYdFsyfNexVjvkC8Q24r3hneMDjaMrKMNEvhw49WvAXB8NbJN",
  "key27": "2G4apDNYkyphctan4Q2BAM3ozZ4sYeGBfHU3xP4xL8QrnTjC93BCV1sWdpLz9d6ubDNLjikpmA5SzgGWVE8cgUuL",
  "key28": "DXnVqobfXFYwSpd9KCmbjxoctaBYiqEUyotvTvx48S17xyRUeM23ALRgrJL86MWhjixc5RjsnFb3ijYpQVMj6x2",
  "key29": "yrsEXBuYnNEqMiKoxHv5V8ZhAWVgjQgxS4H7QjfSj6HTvoPbdoL7S2HUKqxy3a8qtrwS6vrTnC2x5AQZ4e4iDyM",
  "key30": "4LppN6nAvJeQqTheeJAaGSVobCPADYeoEDvpvXExJMKSwFNm6jZc3TaMEuZz8M8jbwi9dqvwCv8Pe7cd7bV41BdK",
  "key31": "x6xfvi5hXaQzm5YbEiV5uUocVSoFnizq1WRTNSZoB9jkA9BVL1GFt4MsWdPi8sR3qYCaz8tiHCh6pSYdp8sUinA",
  "key32": "64o2dm4iVaMWQDcXyZuxL2kipxK1fVMquqa1zxb7DGTA95CcT61qUkM3yEZtQL5JEXv4aBttiHu1G6E7APSA6uZ5",
  "key33": "2rZ6p59TfKqdar1BFcFTNRhU3aeye9Dc5HuU5Ag2AcABfM1wBSDuAkkbQoxGqiyYLQjhTm8G2e6ZUMijcgsA6Vuv",
  "key34": "5hnKARY9RXu5N6cZx74U9NPNXAvbZxgNRr8Uef4SV1igPkoM9hSw6BGNjR2kF882xZwLrQBjAN6idQxqhmwEUY9H",
  "key35": "3JGvPbr44QmYQYsFRsqAVnvw18VdLVS1T5qdnjTaFkCUJXDgHZDERsp4StswnPEtfkqYXGMER3gUZi21ichBBrnq",
  "key36": "4nQv8DrBe358F5DnMf4k8ePAfKmgWRfcCe5MzpxjyFJdwEBAuJq8TeEP6iDD6p6WfP2LTutinj8AxgG7SkZ8BVWe",
  "key37": "23CZQtbwHHS82hgyuEcGj4tJBchDHB1uLaWfeuAuFuqAK5gcH6GkfkCMLN2QB6z3AwRPMof1eRUKFDJWJwpwwhve",
  "key38": "2gNhYfEQcZFtf4k3tijD5hQkkxvp48LYaQmpRsErR3X2mBmvvurAVMkfAD4Ct9xrCmP2Pr8Fis4a6C6kx9rW5SMa",
  "key39": "XNqPmyAE524TvAUMXD7j8wNXfVsfdQ1Bz3RbtxRRFQSDiEgyuEfKTBfwf4bnnLoFrUYHDNKMqLsWiYJKiZnKRGc",
  "key40": "4dtkqAMSSEY44UzDZw4Pj6WZBsFwXAXDGv1av7S7dynLLooRB5hwwvv93obNvqS4GApnGCt4dGq3dg9qajyyC9xB",
  "key41": "3JGWxD2ZtfVo8GK2ukhddHgYiEBAngC1NhMReFiamJKoVarQcWtfxscXS3k5YaaSnoxsiee8QTTjiNEH6H2cBVDV",
  "key42": "4VZCgpVeFQU6n72JqzyPujKWSy9qonysCnURAKWF5wcpMN8CxH8tnFYoxu4YwxV8BWrPFVDXvV3RXRoUtciVunj4",
  "key43": "2bapdsqBErkrNpJWCgBtt6G6BEnwg5aQBRnjr3FF9QaA9uMmcwZ1mTdHTBoBuek6yAJ6NPvgqevc3FnUSKaMLYRA",
  "key44": "37uJuDmcC8aW5UsKwB3W7S6BW2aP57Xqq8ANe6SeZ17Wr9d7zZYBa5i37jz27rmJb5P7SCBUpRHtwBYsX23Q1wPb"
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
