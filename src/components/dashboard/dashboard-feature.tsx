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
    "5fyLi7D8B16wGCi3F4nEmDY1kvN7YY7Ry4C5o7sGJqewP5RJShY9mFgyB6Las7kBpmQ8jxACfNSqn8mVXCyp1jGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2kbKME2NptfSDVuTBatdsVdTbwyXRZRxdWCcuEiuhQ4AWDqm4tipYeQhmuMyNaeBZHoYN1x44LdLGMUUuQMYjh",
  "key1": "LHHFcPLRdj36szwFAVVz9dbKn4hrsMcwYW8hhJxeLn59UHr2KqUSfoDQnK1ms3PbPooG89p5YwfHgt4gLhCKR1a",
  "key2": "5ohcxLLWfZDgRGozCXUEKKh8U63E5JYB6qMU18bfDvArteF3vymbxUDCT1jC6Eqwrcb2g8az9KaQqvZ5zQwFtfLM",
  "key3": "4N8enBxxgABZZS4pSKZueh3wy1WU7G2sQETkBMtc7Tbrw7BtBYrUmXNuZpuqSVCPPZDWtkwmwDsXuHN1Eg2jGMt8",
  "key4": "3rj387DhvH6ZTHNWwy6DDdrVFYdNRw7ZedwYoWSL6gfSBsQUVui7BvwH82h44kgoP78goi54ZZiKgNfvQpRJ95X4",
  "key5": "5oEBNMbhrcea9uK9jtWmKNmm7vt4Kfb58SRZzpVr2X2LpnBDVDbA4nzSw7FREs2B1S51EAVdPUVCN84HNHDSksKy",
  "key6": "2GxzLyfLFUqfanuRM1TiCDEsZCJG9fjg5tgGf626bwL2vQkEpnpmWHqMsisfgKQVQ6DtPrJu1ioYxC2727eV28TM",
  "key7": "3MFawwgGNJvdoHW9d8HiFXaRq54g7TU3xWfWiFichshxjYRkK1UD8fGNTKe2Xupb3uGLhaDtMke9mzTZzsaZoizz",
  "key8": "8EVZyF2Rogj5hkP3a8mJE6ozyqZxNF8nFAkZWunfQ2ZibYaXaaUKdDUM8CtcVyu4XVgurANWkPg6QrYwgbyMJTh",
  "key9": "Upd1dKA131azaBCJwyixGUj4zGa84etE33A8q63fs82ruXgjLEgPJ2y4iamA7pmkzPiLCMwe7GUGAALHkx21Psk",
  "key10": "9VNupo2DkTwBC4ibQDpVDHX7RfhyBCqXxuiBwnHJwPcJTQmbV5ZUhbf1csWei9cTudrMsbgn7Xqz9Wo5SwFed13",
  "key11": "5h3CyN23XaERVAR9CVayjsZVFPxEvMVXoMpU8YZ5PPbiiKCxtZbUQ7FQ33HCKzeV3NxBLqFkqc5wDw8wtgybvCS2",
  "key12": "319DPmQaTc61ZBe8hvJwgVELpCEtUzZyMTyXUo4uUBCrerJBc6JAYChCivqo8xMTeM9En3E73bTb5gS5vP4GioJb",
  "key13": "22nEEmqYehpv6avuRmSkE3NvYk6xpUPnzr4fu2b5tdfYFmeG9mxzBqPpRZmqmbVmgbiCLZmQ3JGYfsx4AcxFHVAX",
  "key14": "2LxmusSPMS8gGCmAAQkWQvb5ctAdPDDJC9qY1tYZvdAfoMuANkSX9aV9VuNcm74vQMSgJLgvbMETTcfyC3JH5vDP",
  "key15": "RhhV5uwdYoksodJiLWbXjJVmjFfuZ4nVjcRfHh4BHwFgKc4edZW7st4qmQ5Si1mbG6mQBVuaA1DeLMGSarZCQfx",
  "key16": "4uUugfk9DMHrv5TQQJEm6wPbWLCSFMGPfMctV2cMMCEbCXDozHn4E8P5NJ7VvUiQdEMjNgyLwAzY9nQVAQfRAgyX",
  "key17": "5Ypzxdb6rdoU5oi7noRBcdQh11gjZCXFhUJHTXCN9KQfbePwXkutpFV3BSr5eWaSWy9GHoTrM9HzpraLbyFMtuks",
  "key18": "45DozTWtU36kdFYYdpcwXTSJ7LKiSLzXba2zL7W1Uk6N9ohjY6aExXgKMM2NuuT4GR3cLHxPK44EFy7Z4yicMMjR",
  "key19": "2m86Qm8NetfJZJq9KK3jCSrg2CHCYSfDvZ1qwVTfUALT3ZuPBeZ36T4hnTQMNzPzrG5Lz2XDoNiiGaj13qiDMmth",
  "key20": "4YZXsiBQsAG429A7kJg7rffSdhHWN3KvdNqZxeM93oNusPUux66BrJFNu8nY7Gbmf3S1eRhxHU3HjfyqyBFsk9mo",
  "key21": "65cmoenP57SKyrCRLtrHxdr2rZ8NCy4y4DpVvEZUwMm91x1B7eZdcPasBKKrUESsga952BGFpKEsdaER6saV1QPd",
  "key22": "4E7AFFgNYMM24odPzwkP4aWHWcrtY2mRatDVtvJoG4nJghxr284gL31eMaET3kbrYF2goMf2TvXhScAs6y1e1jTh",
  "key23": "4QJ7ia584rdkn3kTWn6hpzmgmc9kKtu7Sq2Md5AunvSsH5tw82mtQJKvULTGhZ7uShZtVP1vHQMjg2SUmpFFsRrQ",
  "key24": "34NQ3iQ5BVWEfQSb5XnumnEgJcVJjQHtH7TpJwWgcBu8UoRZ3kWqtfzUuqiw1ESc9wb2Z5NMd7DtQ5moXCg8fvGq",
  "key25": "nnX3P3YmazTuFzU6sqQD1qVPVzkjLy2M4i7GuXBkYknzYhdWRReatvmQKB4PXyMqDFdQAa2YP1rPT6SmCj8WbZb",
  "key26": "3DTYJMCaXPnFenRm4xDehx3RwA5ohak7NV5TretUrXg51NSpHKrmLMw8jqsp3xeYVGEvXHShzDRHPTrLRCLHyxri",
  "key27": "3BAfyqv33kARFed4PD4cqc4HNadjDKir64whqwSdZTKQZABkhz5XyyPJGRUYLpKqWwkWi16UgMKYUP1Q8NZnAyyU",
  "key28": "85ZrJ9QK9AuBQkCs4Gd5iD3w4WSejXJDpJD6aMQJCx2JwhTbLMaTTwPzjFokkjnCBjBtQ4iFDBEFeTNsnmDz1oq",
  "key29": "2V5Jg3MQmEpy1xSKR2WFy1Evz7t1hs8nvMFiNkjXtv6FXiBuH7wczmM7GSv3xyxU9SUKS33nLPqyJUjRzewDEba9",
  "key30": "3viUQGyYfysqfvjAJXZUQd7aCABdgbPbfvPhrx6LLKWPiVPYttrMrL6e7f4zKnzxVUsJWBXF6yuSW5LFCxifBorN",
  "key31": "2AFauBuuMFsaqtcW5oJ2PjXdxXtEvGPwNK3bTFtNvkHPSj57tvrHXSdXXTrsWJgwovG1orD2ehFU9Va9UcRWP142",
  "key32": "4aUPScXP53sQ9ucLc71cie52tbpBsWcMY5tSTttAXPqPr3viRDJT1cvKwkkNAbLGhwsALcG8kn26CSJMQVZhRQLL",
  "key33": "UMjziw1F8znkD8pv4wBhM2kjsYnuvckWyuiQLnqcGG81VsZADsupXdSNogZ9ALPZNTxXjKkrsC2tBZYcqFVaw5U",
  "key34": "HDYVN24xtPXoKUuM5AxUbMwoHppLK3EiyWbgbdZjwHG36ZhivmqZerQEewMVxK4gUewvbXLUWukeX9T65zsyoeU",
  "key35": "2zrFebLUJHTpd8165o6c1uw6nwETxW7SVXedckfBFsCD33ncheVBHpsAguVru2zSHttuEtzMGnQ2mPMxjpiDqHBZ"
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
