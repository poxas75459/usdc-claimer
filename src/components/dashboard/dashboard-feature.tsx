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
    "x1WZvYPidSrpQvgudKTaBRbxuS9J5DHmnzicXez51NU94XoLKQbsEReAf84S1Prj3Kr6dqdu8N6tfiwTpDRm2QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJy7tWuX5Sh8FkR6ZeKjRkzHMSEhSbbxMtJZTYwBtS9D1hEpoij2ZCYtxTpTMNEEY3afXU6CPrGoSyW9hwfGqjf",
  "key1": "2aptjgGE1Mw6uq6qfnEvVLbCHoF16q5mFCCSZTyaMSdZnRFx7CijBhgcrmQvFwHYZQDTiu3qGtQeDACT9AjbokU",
  "key2": "5y8kPoyxi7pBy8fMZ3j6J6TeyuoEXkcxzDbbT9nxjLEBKZFY3W9R5JGFoqmSgt48T5BhNeaHmFjEuntW2dvdrY31",
  "key3": "3Xfzd2k8krkAadnsbdpB1o9AhWnSfgSTXKRFwwjzgU9HTjJqnsEZQzNLVekW1BajexoLtKTjkmCEQnyyZwAexj9P",
  "key4": "5RiY1NZFeVep96KxSYcHc8cuEFCRGX9qwziWzDrBF4suBJ5rUBPNU2P21z9qgcfehEMbffev1QKrtuhBgyAfZ8GY",
  "key5": "5gtEArqbThvozwzV7jzBumBxJrj45vpm94ose4jntejf13fKxigziogh1AUuFWbU6Ae5U676j2VjUvFEikfo9Tt3",
  "key6": "2DS2y4QexWD3MamFAX1GYyJNjpj1p2kRQcBNFYRzVXYZukzrZfr6ztxghjWXbHdSKn7rmkBc1Z1f86A7XCzC6zEK",
  "key7": "5gfXYGx4Py1PVZyncGn5tatPnnoUmwg91F1iT4rztpgVMBiGD7nBj6RzqW9R42pv9uX42ahaZ23JwQ5f5st7X96y",
  "key8": "44MTF5Qdzdtnrtoaz8pC1Rh1ddVxK9n7pK9Z2FoYEAiCrE5Tn7FxBZ2dVD3xko4D4fANWpoNgRZorxiQZy36dw8p",
  "key9": "2msfkqAh1dijoQmw2tHYL3CFF1uEkRhYNAj2VawVyc2PHpADeda3q3TVt18ioyvzRYDTyPzYVZ3x8XMC8ARWw7t",
  "key10": "3n3zwFkxp4RsEePPmSEgsw3HJjfHeUMBzgR2TrNudpaYCSsd9MjPtND94U2zXNrgEFtYzGfyb1MDqDc1ztNWi4Fv",
  "key11": "4L32EZKBP5AgSmGhTYfS8L7WP6ZcXakCLciMBVwEv6TaeUWKuwS1CWRhStm7htZex8pXfvGbCay1pgPHkkZnrHbf",
  "key12": "4SHcE2S21pqGCYdGG5DHezpUJbMSgJ2MLNbiE4pj51BjPnP2nUkFhjAkSHeQpTAxNeMNak5mLHVavDRfk9p72XUw",
  "key13": "uJCMay3pUx6gLWY2umUXbu7HeeUTdBnVtFwg6NvhNnjeAWu6vunu9xwXViwqnnf2b19fgCfbvyFcvcTPA35yoMe",
  "key14": "HE7iYM7PLMS6GaoBFhtjj6wpuZ5b9Ctq6b3XD7RzrDJuv7sBgx4wK8WcznNEN2NUkF2ZjYFTmSWvGAhNBsMhdcX",
  "key15": "rfkPGpKXQSt5d391EqjisXm9AThKhze1Gbgv99hhKH2dDFMNgDe3fYoCf7SvxgcJMJySH68sZvRDcEqqcUGutAa",
  "key16": "5J6ZsPfRVwX5stARio5J1Y81yHgDygJmgNktzXy55kPRUmZ8B6VdeVxYGR4DMuaoX1vQXqgomu5ChQmnXBx4TPRs",
  "key17": "61tsyHMeAARSFh7qg2Fv9uCFpfJVkGfAEJUwjtHQ2xsrPB23KyL3rYjeBQJEjL94hYPPXuY2XF5uVvL1KJP5GUeu",
  "key18": "3usw7RiC5WvMNBpZZNagswPUeCUGfcugdon6PWhYDPn3tq5JyDhtEiKZYMUfwH1f8JzvHwmtBYWPmNmA8yDJkia9",
  "key19": "2FXi4J7vWhRzuC15Ku8zrG3jNTJBgbrJ6qFeREACNY4P9f2iuASemWfhJDVUZaLi3TFc8AQSSdmokzKHuZrjrbA6",
  "key20": "2TyBhz3HgPtUBZmzkSkiDZdpy6ZqsTFLu8sw1s1ack7ZtAdWRi9vXXMMJWecv97xfR9HFnQ77s3CCKV1jsJFKp1j",
  "key21": "4gBPWYufsi1b1ZFuZby7uzYHBqGGfwwRb7UAxAzqskbCNqUAXSEME1ULxjpSkirfZ3eDBp2h9YArUctVG4Pj4LA4",
  "key22": "QfKSrz1QecWa5VWLqnt2BYzodiDi6cebYxbWZgGvKADZSHmMK7NQ8bBnzq6KWFfRpmwLQniyjxtbyPXrZeEJJLE",
  "key23": "5rqJNMtS1aPZJLcyrJCZm3GmxAYqAxJMUfAy33iwronyNYaR3ubgUqwSswZj7fpNFdqnGne2S73o89r1gbeCqDiW",
  "key24": "mGDH4Mk6TuqExFqjx7ubFcL4kcfgFqShKY5bspYJ5TVTbitP7CcgbwuSXvAPcpJdx8XKXQzAGUnadEK4mNAsqNg",
  "key25": "4ukNmXwKWBPjD9ybzH3GWYYqAfyRMFfwKrg4nYGT4NBKSWc3rCYYxrbW8eCLoeeAcrZYVfi3d5vJ2eExX4JQSF7j",
  "key26": "31XciSrsbb9Rw64cykcanfvFday9dEZXnRugDKpb9az1r9TYCjtQtyMeJkg7qTFLkVi4ACKLfHDup8ybUj3kwwvZ",
  "key27": "3gZLmFPVXJQFg6wLWxwfxjY3qUzBjGMraNXSngPwVUbzgyMkRvsYheygLD2VByXmx9DVSAEmj4E2seHWPR7Xnao2",
  "key28": "SXiCp9FjALFpL3sR7tWYzeWgJ9c3Q8Q4SFZkJLYcTpsCydz69SwUZynV4ABZb4AXd2DLZLnh5D1xuZXdesKVVQ5",
  "key29": "cGhPQR1byXLdVAZWwCToUmPjxLivXFesZfEateuE7qHcqmCvRcMGCeSRU8x9N2f1ErdfheSHRiBhHQQ49DjWAeB",
  "key30": "5NTcaXSoJktCLcMd2sGks37EUxZeajLU5Psv4PwYJLXmMou7YJwrbzMEgXm2bP4FeUzCUYyZTfEXy5jP1aeUKVot",
  "key31": "eWweQLX5WjDdp1nszDcCyrJchwtvEP47PYSXSDa33LndpEj2FhCgDVqMmK7jLR8dPZEbspLpHKzhg3X1pxX1VjT",
  "key32": "5feaSooU6q7mQqzJ84hj7or65bTBk8NkSmV16Tq7fgcxZRBwyuc7pv4HSvENnVSHERPwQinCXpCtjZ6AR3dYwnYK",
  "key33": "3k77oui4bsktgVE6wtP3Pknd7G6BYA2WAsfZX2JVeLwCZPioxMeY2oTZYch7gFCCFSrWtyqpmeAA1crBdhNs2wS",
  "key34": "4t4xsmTbDY8PhVAfvEh2HakTL22PAierPbmA4hr6zM1fpGHGKybFVSqswKMVEQc14kKp4GZCxkUJY6oHNQi4KK8Q",
  "key35": "gN84BT1yppkB3Vgq7KTQrEUxgFC1BVrWv2RA8hyJ1QjABx2fxpDxtTR41FmjYvXNn88G2zeWJ3f5gRQ5F7VZvJU",
  "key36": "WFiAT4nEfBCbmtrpt8st8BQk1MHzc1SJGCK28yzkRmR6km8V2EDhYLsaLELbCMCs1UTcXaLJW96kFfXUJMnybHD",
  "key37": "2bhdDLXCXWh2m3SfRxGceLi1wG95KK6AiUk1Z7a6mjFstzaLWHZutNk1aTN5aKCKGFSCcVRFFxUpYCHz852A6cEt",
  "key38": "5oFTqei4PyvYsxFyix3oXhAP6rCcAgNBqpA14qcSFVXBwNFh2hYUtvjuWY75bdpEApsAZgmaYxtPXahHz6YLu27i",
  "key39": "4a45A1DW8PGSHJasSFihoSNg1U9drHaGFMLiejmPWjihtGvvnUyhiRJi4tCXiKh7ysH5kesbuc6Y3ssLurB4YUv8",
  "key40": "EpjWorBAzKngWbjMTvFVW1Qp39MKuB67Lj1h4tbJ8UPJS65LasLu4kRQC7TR7cgPpMCRQvfMzzMai9SKS83xf3T",
  "key41": "5Yzck6bBwerEhm8q5i3871zu68ikXUZYgB6uguGeCbQk9Rnnd3QLGMP72Ft11VstQLYoqChJpQasEaRQ8XSyDL6X",
  "key42": "aLeTx1dzym9K7aQCyf6EHpdgX8rRtvgrA1WWsqKd5LDPNj2dFF6niUvwrqsZASC6kaTbQRXndRuHpfSGSusGtfp",
  "key43": "2727nJGXznYXgi7bMxSawFJ91FXCoPtH34zDW7iG761Jfx6EnwzJNMCBwcBJ2zLy6s8z3ma483wG7mubXz1A65Eh"
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
