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
    "86cJcAmJiMF4Ew8Mfae6aspRidN9Gt5nFsu4DoaXM8fdWKQcnB8hSaKqoZQ3xGrDk39QntLpFhLy2u8RqQjoRML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBZSXyEc35Ad6sg8EdmWubn1v7XVvNFzdJsddxh1q8KBj8o6B2C2QhH8Nbz554gcq6mRDje6gJWEu6scJtPZ8vP",
  "key1": "3YMWm5C7k96f1KUUqZ21ge6CEsAHzHCfDqKbE3UaRHeoXPHzdf1odk6aJ1n4e7z3exg8osAM15XUxBMy2LtLdYzr",
  "key2": "53KvEngP5cHdnNmGfEowZhaP3U6JBZ3bbGHbVzZmXDpDdT9qnbYiVUECVVUyZUgo1tUsqjaWYv9gqJ1HxAssg8i5",
  "key3": "67UMABG3WWeuFgTKNMoKrNnLNkMcbRHeJH5m9aizZNb54dAwus3TVo4Wapw6F3L3cCEoc9Y5rVdw9GBo3H1KWUEY",
  "key4": "3BWjtqAMtoHG8ntXZ7KgLvwTp4B4DfbU5VYgJMp1wAsqJvAS1q3H9yU3y3cnojc5vrZBTx5X3t8fxXiS7fnp5PLj",
  "key5": "4Ls8e4xpE1DHZYdBEyJ5JyhaKUUed1CggJoRN1Dgw2jFgZ11oNkZfVJ73JGu1bzjPet6oZxnoUZJAZeGgbJhdg8Z",
  "key6": "2SJ2PDQ691a9LKsmCz1bGJMB8BRUcmu1R7QEMbTbMVKDZS9p5h5rtmBq5Ur8xKLjkfTY1fVa9th4gMcPNtdBrqcg",
  "key7": "47f4oPiH1rJkaMFHNbSns3vFhkjSgqdzWita6MYXNkzpgxX5PvWkNXYAYtUs3nZYAx2Wabq6g4J9yyqNEnwa9zUJ",
  "key8": "5PuzETKppa5JYJQpwYtb48Ktpv2Nk3BNrWDDGPzDtvRsULv76fAdtqAg1sAZpU8q7AFi9ZYULzcKx9BVBbnMkbRp",
  "key9": "4f5rvz9cddUXzLXpjZr1dGF8uRNTTr9qsm5tDQkoHpd5gd9PUJWmTZE2evJftspwf7TV9GiZmDwiGrDKoGvZAF7L",
  "key10": "uoZkEamwUQyet17WkTv2FG1SwqYEiSLnzqg3USAu3eu9NTBrBgd8FPnF7XihyEpVffEPDnAisLHyrPxEsB3mivo",
  "key11": "5EvRXvrRuLKbm3LZtttdMjLjPKQSnyVBvvFLaQZV5xYQEUThNmckBFzY59JgRXHUcieSCqk1svDStt4YBGDYaYWG",
  "key12": "3NHDGhCAp69j7jQQWPPdNDV9hf7KpGVw71xQmfkQELrtzBUpCVff7sycveNxWQXYbRBhU8ABJFSeSwFn4ccdCwoH",
  "key13": "4fa2U87gVPo12za6DnLEdP4hrEZjVvUwdeFb7yoeQP1kVyVvqg1aGtc2ucWSJYqbBuXDM7RtqYFMSKyY2BVsR7F5",
  "key14": "3n953qvafHFq7EnCuJ6SSciZyvNzN2HTNipHq766D2WzPeYVsJnFs6LhvPeZ3yHZP3wJULMAugbKghDQvJQPEjGS",
  "key15": "NfMD3tP1tPQ6VGaoqBzjQBBrCj8TW1tFL3ZWnQsc9mtxgkctb4YJomNmf6x8GffLAypnCo6ePvg6dJ4EKvadabC",
  "key16": "4JCNbeXwRjvitH1cb2VjWcpm1WAF43V8u1RTmaTZcXAJdriGhqqhhZ22kByHBboZhztCALiyuh3XybqCCDRYL6Bu",
  "key17": "2Vo2JaZjX3yKRosb9DrB7aeCpBHVKLX7GjPvCLbzVnGAx39wa9mAb4BbxSeddBHdUBvN6qmsxBF9xVgnJZsjvp8D",
  "key18": "5Cr5a4j34MCoHu3E5HmEU3ZtoZbEzSyKmFgiijfMsaLjw2M835s9fwhjxPeS3bHo8ou632zEKWaop1kaCTcfpStf",
  "key19": "5eGhfDd5V6EHyAQ6GaVHt9zWFaWvmDyanBzME7WaSZyYonh5hm78nedRTcyoN8DmEQ8a6aZ51fGEi4uqSx7yDfR2",
  "key20": "2hLPP8VR4DVRUv3zLd6iWwoYfwMNEYr7N3S4fJTNLT9hYSSKewWYvbabwbndJqHJmwMMZbqykGxh5mP2L6z8bB6B",
  "key21": "5iDsWp3MmLWanZaRHZ9Us7QiqUJof4YS5i258iosog6LfZwXM3xJRa3ddWHFzcJyjzWL8bVNpX4Rk51Zbn1eMbth",
  "key22": "3tD817rk7vXrNtayw5qreBy78z5isV4TR2Kpzi9CU7Z9mbTxAgs3kBDvUAacuesVVQ6Mb5eCUeyBRfZ1cFs7g5jS",
  "key23": "5Eijpt6Y38msBkdYa7LWUXrgMsZNzRKgNSCaH79T9Y4GYrg46mtgFrecwnPDsB8kUBfxGQY2cyA7e1queqgsZ5M5",
  "key24": "Gfg3J6ZYCLQmak1gTc9WEQd2jnXefD7mEVdhLAXk6ADWs5AYB9admP2ziarJ2yfCYMMcwH7DTaEnXqET6mf67Yp",
  "key25": "2erRtEMo1wzQdteRqvR451vY6W7feznANKygPkUGTWZG1yuXv1PQBr6GcZvF39y1KspxKkggEKwddcE4yatEsZgM",
  "key26": "3AyH4ASrt95syQmHJ4qfKAUf7adD3wNVUs33SgVnJeGJdawQsv9en428Evfs8WVDp9HTX6FX5ocFEXRMbfMRSuR7",
  "key27": "2jJk87rWA9b9oAdWcf3zYF1sAJFTr4KtuM39n3vLsVn4yuXR2nXdHzboMpzaAQmz28HjCmvKmDaRRQXHYTbPfUhE",
  "key28": "3BjNjwzs9UXp216RJ3YsiNbnEFhqQHoRN9cKnzNijFWd4TcfADAF33n29NDQ1aRbvH7RBgFcuQsVY745PrfZtWH7",
  "key29": "4AgcbXf9rjALrF526SSUrxhQDy34EuT8PtKMEhYHJJhiTfzsHnq7gSJeutKYSvKk1M1sgBJxYHk68jJ4cQkNsryk",
  "key30": "58U78dxtFAW4TXVXzkqmVxXGTXp2yZbvKoUdBSDEMuwzB48u2LjV9JcSA1zgSFQu81o36DZq7tchwrfuNN81Ujpd",
  "key31": "34dR2e6Bgugu24VVcfZy8gmSiGLz6gUUWmN51ZYqqBxBGwAcRBJMr2cxpu64GesU1YQybmWxy8h414eDPR6qMjm8",
  "key32": "miEB1jVzL1aXAijKP8x2UNheUAJVCMdsgzUrGozk2CweEdU8bbwAsaemekrhdcecrSWVCsX5ACUqtYk9AfzNSE5",
  "key33": "uM6jbaMc3nSrcPcD6s5AhViXSnAdvjGfiVtA1wwH5znQGejTtau3ThchPECnbwPHCwniaVPNkM7gGyiMQNA6chq",
  "key34": "23ptWZ7tAsNpG1oykdUWAWE5pFkuVM9gCehSedPSFEB5TvKKqLzaEhDQaFCj4r9ZQaER3hZWJtUYtkuNtKxZPxZS",
  "key35": "2PW6x2sw2MHxJh2y3ibANUgq9rhoSrGZoQaCemyxWbsW4Xzxmdj6DduFcosXsjAHufoe5wPuypPtMZUUYo1Q8UMx"
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
