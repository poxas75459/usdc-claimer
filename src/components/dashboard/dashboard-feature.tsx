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
    "2jYQfTTjZ4U2CsyAQZmRe5kNH6jeTU7Pse3GrBcbVBCL1nqT4gQkVXooet9QSYiLaiKpyezKoqqsx1GaQkp841ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoLj2K4tTBuDGtxhyBhrKP3cAn88gVDWQ9jaEd8Uq7hWCqpgWhvwpYhF2fLdE5fWwUMaAesXeSTuST8q7eHMH1f",
  "key1": "4nrqtC2LU6CHUZCT1uZLhopMtBcs1PUX8bYvwG1nuFooCjgRpr5HukwBLXyEuRB52KNwsrguQ7EW4F2WbDj8TRwq",
  "key2": "5utDGLzw3t848h5vp3SdcJSztfg2tRRkfDPEewy2KcSp4WrgtFc7pTZJpaHHyVUM7arjwxkfYaQo6GAMwzq49PDo",
  "key3": "eC5AiaME9ZTssVCMLNiJ2fvRoCUM4WAERumqGqXqPenKrSVsHcanTvCZeKs7GYi4NPvhiQWS7oiBuHGaUPwVTg9",
  "key4": "p4fUxAhuYi8XBa574xFvJdYkzw6BC7wnH7SWLvabUYmoZRhrwCceELSDpgpR2uewSsCzScWxbx6vwB8jhqpvZ9d",
  "key5": "36ZRN4djZYZaxSEv58LamumMeY1JoURFSfm7HY9za98fcufpAW3xmqCzMRJM5vfwXc1AQ4daZqn8YG8jzus6WiFZ",
  "key6": "5nSzvo29y3LcHxeHM4LcfMdduiXyXyz6GzMsNSRGfFf1WgYZcQv7yGcdNpv32kqF2NA9VZ7tdqoKamERuEFKrcDF",
  "key7": "5XxmXxa2JGnYPfboRVd73pqiEFLEpYM25S558Tyx4EjmLnK3uuhtetYq2YPfimUoTEwQBvF1MD8G36DmwQvfMeTd",
  "key8": "3ANeaQ9n57WAYRzG2Z8Pa6N5uWLY4FgFa55LTwnTdUfVc4XEEcy2mbX2rBAHtwrRhMX7VADgTpBb5WYBM7QjRTmk",
  "key9": "3B2fPw2LQ8sL5dz2QnppfdR5xT8ynwyHiJihi7wZ9m4WCu7p7yWjr5mRhGy1Wb46m2Ucet4auTgMeL3Kjs48Qd5a",
  "key10": "3Lb9ffyAE2v3aP3AS7RjSVpTKwbiJCBtH3mddkQxpsTFwoQ9bAwAq7Z33VMCechveCguWZttxd6Z849NiTZsTveC",
  "key11": "3Xap8soaETCbjbAzQ4aBHx49JXYX3XwGNeFNxCcjNHiiBZzSLUH9gFrDgck2yKvhNxxhS46LHDV6mGFSFDXHsGUT",
  "key12": "2sM9VaYyXsWhuuL4f5FYX3rVSsFkmz5iKFy6FRjKBZxDimQr4c6ryK1hDFLsTHo1gEcvpTsFRv6FaGQphJPvdHH4",
  "key13": "3kJkbPRy3t8iRJmi4j8gJUExBkKmUpS7PrXSjM5fqGpktGBy4HY2FGBRpYKMPuCcFXeTXrKZoSmu6S7C7WFcnVg1",
  "key14": "5iXJnaDCuzYcdUcTKdTigsiWttcaJci8fxrhJzkwbwdtbkVfxShfiM9Pi7UnAfGa5v8e1siqXWEvC3f8M9U6vcHY",
  "key15": "2AZPBU9jw1rdpAyXVvXUDcgBCw225uYCFhqkLe5D65tHS21Mg4NrwoBjHz8ShNKx61uHXvj4x7miyJNmU29sJCAr",
  "key16": "qZxnNXfNuPc6w1tRJwWHPxoAM5UTBkGTiskYCdUdrP82Psv2221SoYkuyCxM95gEZDZUz9awozgiCUXuwEqNe5V",
  "key17": "2sp87pGFrvxnBq8qsuKqadyVEavpkSr6CTxgdibM5uwPLQYvs9DvoATkYrAGpWjdeVZRqaKxBUjBhrCbRmFCa7ic",
  "key18": "4AHx83BGS2KjhDwEYMRFyGGNWr4LFKu2zdBQ8U4hUaSg5Mqb1eskJxUWc4RZWEGryuAhYoJe4Eyw2gKYGwoaTgmG",
  "key19": "ZfHSGW2tiYLDR5tun7K6vkVBUFVm6fvPVhruYyywr7g82ds51gGdbhAyws9mH3iLbFBXK4pdfTY52uSru6JWJbf",
  "key20": "rKvaCSEMNtGof4jHg3CkWCnVQjCx2dEzoYURkB5T2ncZQB3qNQWKrng5SGQdvKm56TSCGpsZwdPuSeiUijrqGUz",
  "key21": "3qgq5JnKnxt8wp29CP84x8AqFW6tSnDpKNxVBhrj6yJDn8qMvrBb6jxwYnkZP4u9DuEonF6nsMRh8p3wbCM5mybJ",
  "key22": "5DT1Yiv3jaMZrFyXFen5riaHEm7jXqwcEctwrjjeh3tj5MBL4joH1h6sbDpmxoK7ggnjBZ1Q6if9zikt5EdUyvw9",
  "key23": "2bdKBSYgrGQq1yZnKGen5YuLre96wFHmzHNYdt3R4rj37wmR9XXJzLZJT5w7wGCFTQVCFdyk8VonngUZQ4RacTTB",
  "key24": "4zmMSexxhR3ysNNHpUnk3Npp2zCAcGYWUYwn9snkLtPXbToQjneGpfKXNTEMpqwcCXG4DQnXaKqjZtVkCQ1RqAYL",
  "key25": "3w7tTNYzas3HpxachQGu3YSG9GW6NMvqKY567EGtFzMvM65MgGncXFsTHZ8xFbYwXSnMwfkPuq6BUibMazf654LS",
  "key26": "5Ad2RiNATrSAwbKsUifWNouCp1CwrbAUnsmcbdgdboZ8LbVkq1YdEyrEWYpv1s1K1QqYCfyd2UUkFQc416izdsBr",
  "key27": "2kYcmxc3544c2Y3bLFX4wpYzjWXWwoHYuENH66y3kJxpdjVZm4uQVsrj3xpXmbWnkL5VzLkpC4i1f4S26CjJUAhb",
  "key28": "4rqskQdXSkEyaxMR5df7xSWdauSc2zamr6ypQEBYgAAhd74FtwwtieQS1vsGGm5rQ85Kch4pviZiYjCmTFPoAFZq",
  "key29": "P77kgXNuday8xqhu8U6B91d9B5N8zYc8pfs5DjuMgfQZV2YZXqYSkKXNNbnweRRpinBNUnKYQhhc9MoUsBUUiYh",
  "key30": "2VQsZZBcWvsFjJa9AMXKJCGs5g8ip1zxq9RpP33RvT8dwKTtw6dmev6sfQnE8cX1GVVnrfyApMfH7EcB2sNZtk9W",
  "key31": "2oGW5Sq8MkPCmwipniEnZYFC9fZPNu5ftyA6rSpFZq2o4VdXSwX56DX1SBqhjz5xFUreRY4t1HVytu7puyMKDex9",
  "key32": "5kSncP6ybSQMxuwtiYQx6ZZZg2U7Uro9vTJLiPE8gWCYKKvcsvEmG9yJ2PHTZZqmXKbiJeNdoEwg93V2HfignxS7",
  "key33": "2TCEwYxZn7XoNWSd7CUPRockbcLHhzA5LCbugRPFknUdpJZHHDXcB4cPXFCg6qPhm5NjuKqGNEyjAPTm6t8a3CRN",
  "key34": "2ZPvfgJnnNV9B1BJJU9U3TkneHBERo7b8q5zA5ETUjLWRvKGNsKWbNECcHZir7SRxDr4PsFpRscAeWXbGiuxyw4M",
  "key35": "3yBmpCoLzbtGqTNkhcAXjPDA4xpv2jWE6Ut41RHoQyJ7E5TUwrUeHByTRsfP1p4pPkfCN48tYwyeaqC5aotaCA1Q",
  "key36": "4rs4TRjrkroxVPFn4FXaE35misdWT3BrdYPpWcJ8LNm83acA5y2rrDJFxd4tKpkcU69ZxwbMeUp237gxSrvLVGBN",
  "key37": "5jSb39ajdaP6Wu29AScD36LMrsDPqTe2b8Nk76UuispHRd7PrKv27j1iw5o4yYKFyfm4L1Kvkx3QUbCvojSvs4E3",
  "key38": "233BVNggjQwcNaeQ3zNnQbtuC5iZTsiyg7dPrKQovbJ6KBZMjknBf4TPn2UbW5RL1WZrR6hctxbN1mwd7fGpb7SX",
  "key39": "2Phxd3HqQATDsT6P3PVX8ZR1mNRZ38tdDZm7kivMCTxKAzUsMG7aPLiY6SbZsVSJDtCMD1B4Vv6bCtWVeqUwiY1Y",
  "key40": "2BHhjrMze3CzdmiMmSSVUDFe4m4PRD1BTrbwpuCa8Yf2ogKVB8jnYeXWrAZ8qPgi26HtiXcyHmYcGVZhKw4ZP78M"
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
