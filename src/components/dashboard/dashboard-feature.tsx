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
    "3NRnxmTkwoLdkLW5YLwSFcnAiGcjhwvd14MfT44DgjsytqpfaGzEVcDLm8xCEKjbSkg5SnEwNwY7p6J1RMEksXGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWm2vY3FmiB4oofQAGLDynTAa3ZPUcGwQEVBPE7wdhZ4ZCbBJ7waFSahemzApXknL1z4vtwFiyhnMWgNR5DoCL5",
  "key1": "Gao6qf8ZpVM6g4CrMPpvACYFqAmJ8QxxmGfj1zJDBSPcUaaqWE2KJpZC3Vin4cBKZCfrMEA3LZJcGmwM3oxH1m7",
  "key2": "5CYcFdQ3yrgu9JSuWLzhCuHZ3VYftfiCsFQxvBj6UEWwnKbt5LQoRqCS8kgX6WbnTSMpCMD9pddCSemnHqb4oKEq",
  "key3": "22FsxsYJwziy1v7FFP7PoLpi4fMJzb9jUYB5oshi9Lk1iWgYZ3GT4HWRcDvYBhH6VkqK5goSFiDEmgDrn2qGcRg8",
  "key4": "4EZtQ8F8uNDtZketiTTfuWxAsrqLt3759qWkQq3fJgkR6A6mXByD1jfwdUE87edg3xgsEqyr5oGir3bpiHiDP62Z",
  "key5": "5zQbLbzobdZYjwQCfZwGUw2sJH3PXphnzPJrFvar3s6TzzjDTtAud1Kzck4eDsF5jtXiyxR3ZMraRgNfdhpMfoMK",
  "key6": "4aEVnjXX8pjoh5WY9TSzewyLbtHMeSiedvmS4ZBeJ4yuM4SmwTJkNB7u8HXhPQ81A7t5HEPTzPL4fZJJbrUd3vGS",
  "key7": "2aQR3vsAa4q8o7F8LSP9yUzh8rqfyoc9vRmGeYsRQQfW5MyASTq3xWffFazxjjnteFDYPVtnDY8c7rQoGG7zhZGD",
  "key8": "5DZBw879YLuVg37TKPAwWtDxBUxYg9vg8NrqW4r1mHgebxtr13mqjoHuhEtp4pW4L59Jk4CFsUnAPrHQ8EF3bXpq",
  "key9": "2p29jGDdQDMuKE46gseZRYsLyB7i6bQX6kzUoWYHEC375ecTVLsDFqZDHYLTZEbrY22vPsc4j66wPWR5pvtgPQsZ",
  "key10": "ebaQVK6iWK4VWiHMwe6fHfdPzwrgtUDSwqyVLLbAX7WQLQWQYp9PxBWiJWjpcQCKznjf5iC9Z4wjBHgiw1pWMnJ",
  "key11": "57KTjggQCxwzhpqoKwQpNdkj8jsLP2hQMjvgpYcegWDFCT31znN2LVgpdKDDyNGJ4ZaSB8xXJhMy7YHP5ouamRJo",
  "key12": "4iZDjGypH1mXWcHyiWS6zoSn8madDgUwhDSAouNYKRqjtmuxPvUpQZJkyCJWsKhnBCJxaLts7izoVZPtQNgkgN2u",
  "key13": "3yGQrqegCSqw1YWXG9xFsbGY9uxokBBomG943vTnKjrdnim28GZM2PVnb4GPqLjyb8NKrmvbqpAvXX42kyLAoJv",
  "key14": "2R7s1kgL5JNEwS7NSLKR6vpLRPPyU6ptTz4nPq1PVzxTdnwgvvX9kEK1hzTnXhHkKwKzwiVSUdmkfdcufxeJ6PVR",
  "key15": "2ZgbCDioPxHctdiwf83xR7un68vBFFAmQLcBv3aNw4Vetaqc66XmRcfUcTuwuqJqicuHEkQV5UDnVXrpLb7Uyims",
  "key16": "2CAih9NqVayoVZo7bquCd9gRZT9EhwtWad74uTcd5NXKKTDQVrMuu4v2SeUWA1uoPiXQLfEFFgiDKCKspgWn6vx5",
  "key17": "2E1Xh5ZwkezBBeaeAVh3g95cZc39fWFocw9iH2ezo2HKU9DFxUY4z2tHRYZN4nQWAABjdYQ5bLrnJ2Q452oxXFrZ",
  "key18": "4D91mtEq2dTsD74prjFYmjgQPnAiJ3qwthNuqAh1LDH64qTPHn8v5kiCkz1cdQYHAJqxC25QGT4ZeggSn2EKQ7xr",
  "key19": "PoYz93wh8BpWQgCEuP3a6rfuT7P6EiZ143yUkKqpjB8ZKvxDaTnZNVA6mp7w7mDMUmGUeSA2LzRJzjiE3ZUJ4H1",
  "key20": "5mMiZC8iVLmRNiCELPzYCDkWaequScnY1CwdTgDFwnQtNFeASvmxqUqxR6RudnFDXJHHjJYZvmcLGrTiCsHQDioh",
  "key21": "2RqAy9FK2ugKbQ6u5aADbJD1ZDaz162dUvFBmnNUC3ndUnnGFohLZasr1D2Lsif2V9jYWMTzpUnK7bGwqe9MM8oa",
  "key22": "4McYexu4zAJ813JZUhpJEez87xNhQQ7TEb5HthUxEFnsgTwkrptsdQYqcrYAHUjSWnfv3HcFEgDA8j6HLTViwXSK",
  "key23": "eZdHaffgMrNH2aViRwb4j21EsXEjJ9Jo5a7JGxd17xeWesRk3QghsCmAbubEmpDL5yAMx3xrqG62rVZjHp5nTvM",
  "key24": "2PsbQBrmyw9WxKTTQC1MTjWXqT45N4rDgmpLx2Me9E8DJqE5JMnLHjWm5hxi9yrGMWwC1VNn6MN2bEDmS1gk1uuX",
  "key25": "2LGZbqanbkWGF25iW68JXnjXCNXGUjQ5ByXop1Qwnrpod31MDjXkFZXCaFpmoEkGxX9fKBhG4YitWaPpx7Pkz8sr",
  "key26": "GC4TsFs4aoYTiPRGd8aN4QoTt5u9CnFrHU9bpPc4LEXXCqKEBM4u9nGi8eSwpYtvGgjXPLa7vu9iv2K8cvpNbjY",
  "key27": "49X1Ron7yR43P6EhdkWZRAbxY4F3Tn5wwrhNAFsMMBeMcUEoTSbwfogSCVuqgk3ud2x5qZhRSVN29eEsoE4GQLn6",
  "key28": "3mYu9ucEYSgKQgQUseoiGr3bFpg7pKmdvTZgiR7tSdys9m3grk696qchBSb7FgEWYyAZz86SAwxcN166AeHt1EB8",
  "key29": "3J8cSURewgjHb11yngnTn8KvD9aLS3csXJFnarMqJwBfm8WPdyxfYkKDJQSLD8NBqpqiQjhikDr1vK2t9ee1mprG",
  "key30": "4VD12rDFg35dvdVCMfE9Xk2RVFD3ebCw9AFjcosDNaahQfHZssjPpx8EWsdKtom5fV9VkUJsLZToPWE9brtSfCF3",
  "key31": "4j4wkbo3CxeeT6kZZxAvNXSLTEGqxsGtGZis94rVQtJzXSE35uv21anpCpWsrrQvjFB6cX5bgMdcagKMTD1pgHqg",
  "key32": "4DH3uhssk4NF48Zm3DybikLimPtXUNHeDJS6CC4BzUhAyQYjM1TAe63sMy8nvJWMPyQuG8hh3FvLD1jNfSbAZNAr",
  "key33": "4sN74ePaJe9z91vQU4sVTN27j3AfyEik8BKt6PbPP9KCdx8WwvmbbxSSBsmT8ayH25FgPsKX6KvQkBaCdjihiE3y",
  "key34": "62gTJHyz5D5tCNY6HafmJQwRiGxczXrtYfpYJKj7Zar9wmiDbbSrTsUvxYpKNvrowjKvNDg47xKq48VzJbY57DEz",
  "key35": "64NWmmckmzqgiTJztt3cMxwB44gCwJv6M3VtqHCeVmCU1LJEtz4VbiVFJs4k7ibR2rzY5STaHmc8gNS9u6NRqWXo",
  "key36": "5gaMxm6Q4K57iS7sNpDz3zvUBSuYxuDQj7ikjfoVXt2VzdzcFqBBTMGoKUvRNBNATSJHko4RDSNRts6jxARXjDQy",
  "key37": "3LTzuCLpnTmDJyHMgQ8S8pbTEqgsZ12Beeo6cde15gFppwca5JdECLCh2PAYStbaeoz4JAUQUPQra6NkvBDQc96z",
  "key38": "34h6t3aNtf7UiCYxYYvDoTwdgxwCFssozwPTHv8r9cXaKmBghioi8UxNhwzLAiHmi44BvA8GHo51kLikznUZPDG8",
  "key39": "4qfDfNwj9NeZVcsSLTdBZgAPxx8u9LwtvsuaA5qqSv6kVrpWj6gF4NGXsetpdMo798sm9hUiPc1qouBFFCjGHY7S",
  "key40": "5g9kGHfvv9U4rVboPZxW16rjhRkkVevTCJAzUptpq2NqiwKt5LJ8qU3pC7jtvcgZAtpLQF2GamovihNCkSQv4vEw",
  "key41": "4P3SYRiiRw6w28JLmMdHEZaNLzmnVjMijf1DoPQ19CYdUhR3RpiMEFJ6X3g8ZAJpLB1tvdSLmGAztrprzWqeTwkp",
  "key42": "ZA7YYLqcMpcjg68hoqYurR1jt1iZxMhdZjDB3fzohM2LTkfrvXQgNqGyuXcYe7XjW79vzNRRYwdTVVF2AYr5kP2"
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
