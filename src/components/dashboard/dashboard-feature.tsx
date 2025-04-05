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
    "5tdR6dN9h4LwuhqE3VYzz4tjMLUdVFYYHddaR8YEsRFgnCgvRG3cma8jm9BMm5rQgWSmzXFvsjRwcU2GzeJCDS5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCjxbEvCeTz87jNtYh3KsywdmvsMn4JrRPo1iDnCoh5uVigAdwPXCLGR5kv9im5Tno8YCXRnrAcpuWNn4Z1daci",
  "key1": "4p6GZ6WPMaKYKUQ5Jz5M3Y9rf8BqcgvpkSvEJHwu2cc7zeEsjR1RJzasfNWRcRy2jKDmjcqZ5PHKpxQYYmyzWvkh",
  "key2": "2yxmR3GJQqrC61H73GmtnWsemXsu2C7rvXQgoiEtPvtUVFUXEd1o3VJHmsQPwa1rdrMBdPKeCPjGyo6d6VwSUaE9",
  "key3": "3syPp19pVtiM6GSeu5cWXJXFCkPm1NKTDts4yn4Gf9z9463fXAre3YvQYA28x9aahtVDEXGJwdF7XjemGPTbEaBp",
  "key4": "2EeCDyqACDeFJ5o9MYnwk5ydpc7hCd7WympgULDQdiT9LGEtRNpMX712TbN639VFd7nXUjFD6bjZP3Rxe4UCYLeX",
  "key5": "4UEEmz6BXrAkP4FNGjUjZsdZza12VZtbpWHDKys7JR97ABEjNXZxWfwtiJhNcfyqUNmBDGmEYg9czWhVYkYtXXkc",
  "key6": "29eSKypTPwXZSCjs36sKYQKdBndQf9zCPnhxcVmZjxUFyHrMnZeXPEz2H8xhp42hGyYpAxBFxoDC5PDTVxgcWC9w",
  "key7": "2okSq2PGzjvvRLMhBQmfmDyrvytMi6Qc7J1EBqkQ1XXCPufp8X7Q262t1BV9KfeQYmWgsU88D6iHoBvCqxjhhkdr",
  "key8": "3FyUjVPZBc5VCSqsQZghdZuWwFH5jJ3GP1VfY5KBeMKNsWhWTsLjH1yfAWAD5ErNoKduzHwQDTErqvGKiiZRLMc8",
  "key9": "vYLvo6wK52o9DFXobx2oPByARQZ8M5yyxqdR6TXwBd9rCLkRZwd9JY23hrcA47wfwoLy3UTAdjnckb1TCLx3xqY",
  "key10": "4epwtTRUTd8VoaUwtZ6fMJoXd2ssMsK5WZNtuKUMsgQUSn6cTq8gJZNmRxRD7ymBgfqCH7CNdathRNfyLMxVqG9Q",
  "key11": "2utFcHEgrL1Rf2u8xPjBFPV7xgNBybcmYdgvnhf2wFhhLLerGA8FM4Dbn5pCwA1KteMJqg3eRF4WZikEd8MvCeK3",
  "key12": "5W5TKRftqWAjek6oyTTpr6HmVpbjE6atiU4x4C4VvCWsAV5DipuC8Nd6u7cbkULtNb8wqyqQMPJvSQQsVrhjCG3q",
  "key13": "2cjtSu5g3A5j8osNAHapVeqc1dBFJ3eFvJUYy6cDXf88gGg9p6MYunMno1M9VwkfsuxZsbyV8rK6Z5Pg4koWfcxw",
  "key14": "4Cyptd5VsGotFxqARyUsWsF68zHPJvfs1NxsUCKX9SFafbBAd2UvwTdo3dA9QPrnRagrRwtcKgxmdMqMUUJjpcuG",
  "key15": "28oDSremSMyVTVpx9gaCpF1bz8oPZG3wyroe4Atjpwt4TrkEZDLNcHRgnufGMcRUbUPZNiWtLZcH1ZrG8tyimrGv",
  "key16": "28DbUreb5nBMrmNdLpM3pNspMyAWYywpMWF8t7YnHTtj5Y7eFvxdPrA6PtPDirPNNFXCPjEoJQyKpxZn87ry7b1y",
  "key17": "5yb513HiEgqsXsA6oZXdQS3BtL2NjVELs7gjsUwAzsMFXU2jQp4C6iUTkQyXQiU34zc9YZahwmGEC91jTnmK5DkK",
  "key18": "5nCJwDX9bkZkVwMx171sMFALHgcWicG9bmt2T2AR2r24EgdepWoJ9nTZEPt74pTXPpnE4q67yWftuwnFufdr4mSH",
  "key19": "2n7MNoLLB2L2KTa5WF633VPRocMKuvLBMBuj9RHNVhkVsPrbiCVu4HvmdXyuVWGPG6n2WuyUD1D9kSgwAx7ydRg2",
  "key20": "3hFtRLzGdurUvLtKVepNZDoVQyDJZQ4Xpoam1RcfwRrhGPpnB9bcfaF1LJxpoKn8QR8YnwsVeRXHj3Ldmvw7vA4S",
  "key21": "3uVuKYoTZK3pSyK8ZJ8EpNopYdeoWLQBsXxo8jn2erV5bMV2myPvkSN8rcffzPj8qW5Nuqw1fqf9Bu8cVssZNWLy",
  "key22": "5fCCLrU4gMWS6dFvNj3VRfZLy3FaXg9YM55hTMrH7hDPdhjFTgh7Mdk8HGzQxShoANMrbpksSbdZuYcsrRLLVLjb",
  "key23": "wyTB7TTBHVw1o7EC4qHbojCytN656fTUMbAg9mT1i52kXgYwL2jUTXR1hjRNXk7b3bzycpbxKpuHc7e6hFUj5xA",
  "key24": "3s9NTpRJ59SNCk4WDayoDBz45SoLoaLJsSYdHGpWA3XUnDZudZnXMHnSjGxmTrJ8miwH7phTggTGuHNHDaZE3V8t",
  "key25": "48HWjYYRdPD9KxMQWSLaPCSDLdStV7TecKy1p3DeitcNEr3eD9MMgQozjrYqEese3XuwQdCNFfum5UqTgvaBsQSt",
  "key26": "5f3TitY5hKyhcBtyb55KSm73EjRdUHdtSduPAg2EBdF7rfTQKPJ2YYs92NLccPtVwa1359Fm5pT2JrbVBtjFpC87"
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
