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
    "4CcumeRddNXtnC5hoPkzAbKzCoUKn8H9CTDaVGAbqDFLfMPLjtwfBHQS4WQq1rQFjvKSCrar8ah2ChyjCtVWPLBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDYeLsVSfVspRrgJGXEo9NuWwxxhA7tGHUCWbwYYhnz3cB6kFkWGRJXtHSA5ucUg2bygwMUd7X76fygYABmwAt8",
  "key1": "2MpTGYFYuGJpPXNmuc8nh2wTQa6Com82ymWTMcqqKzUf2KviGb1U9nDyN2Hc7G5tK31U4k7EdKLJqnPLqYqEYWMZ",
  "key2": "3rB75TJvFxhuts2Wqkp4qJ6uxWNNJk9RvSsDcxr5p62NSPDZHsySfgNXTwyCEYmMRj9XsSGYGt1FL4smsnw8qqmX",
  "key3": "gcUvJtAZ6uxb6sXTeX86Hagu1q1cER8AzZ4NhuZ5xdqJS1X1eGWWZ1cyV953zy9t1YoqyB8qSYyNTck1vBYCzyn",
  "key4": "38XHghz52j4gUEEz9fVjyETeYqw9q2xP7X9V3o8sgXHe6qPNGnCPtZ3wsTFois5So5XJypYQF3Nsq2ECtPD19wz7",
  "key5": "9foJk5U6dRQMT34AuZbDxB9NgimB9YofTdSZWnY66L8UgsW93N52mYMHSs9TQ1hu5zEEZG8exk1XTkk8GD5Des9",
  "key6": "3WJsagaqwG6txViMBz2pAMSFwG7RBvimBA4mYagk6T6Vx7AghAKEBykjqzfjhvB2LJTB6H84RnTidBG1Wuqw3Fva",
  "key7": "wBTdrUi15sPdApw3tEE3zrRdrRT2rntUWk1CHWPswUkWkwGAgvvGW4KPU6S7xZdnwcnbuMANhPZ7mwV2WqF9Yza",
  "key8": "2dvfrdYQSMhSnPrQB4UN7LsHSiBQg2E27QnZLs8aw96icYcFAoaWKRdis3ZrPoHWUDYGWhq5zXnVHxzhaGvEG6t6",
  "key9": "2eq7N7hJ8VQEZergtPMkDJ7Seq6rLfszoxzzvjYWfLP41csaJK4YdJcbWJzzwjXvfFzpsM9Lu7KooNdvDvHmYpfZ",
  "key10": "2R5h7kpcBw2KZXB6Ua8nscxRfoY4G866BbHB34vxzw7gA53wP72VghokqPbcqW4WvE4C3SYyJM4VAyhzN6THr4SX",
  "key11": "33tZYYXMtyzmJfcgsBFfa6e6qPmKqJ62p6GTptaS7G8kGRyo81xuxcxZ1nz3B5uXxpBAVuq7AGdoN1TEZ94HE47w",
  "key12": "3gtfdaiNNfPhiP58EbNJewThj6q3X1Wj1bRZZg99L6KVjAnNv9fprSb8ndSwgm9RNGadU49RrpLNswCh9DNiaBwE",
  "key13": "44sGTxWnAqfLzu1v5da5e57NyeUqSbHqtgZ94BtrTzdGrGQA81Q8dkndhYshUyVv4ShmXDtuhhdtgYCi2WM1tTEH",
  "key14": "5er2CFs1tQCZt77oR4X173AjAfMCUmgnNreogtKbz7WpZHER9NGGJdLUHB78Qmch8b9NbjXum5LCZ9f5Mq8Yz3sG",
  "key15": "2ZJhujtodcNRJm8CExKLRxCdeeFhtv5Ux7FLGQANpMrt7mTiaEzNHn5tx5hL8NJzDJnZGvsuk5wQdjVc5m1hDv5E",
  "key16": "2BcaFEPdfkHXcHALN3FQ7g7scNzx4yDqPhHLJdnBcLtpapdbLVC8px3sQxF3w7idaV4q8k8uy8M5GiKW2aqdvH1r",
  "key17": "5sDsaTdAYFuKBYCM657643YX4ky5nM15uEh3UBPL424CQ3kV4ZmyVMhA3X6p3MbCFZo4k83YNHeJStegyF3cxkWi",
  "key18": "4ERGWwY3DX8V6ZiJLEkwYRTzvNjR8BdMDmpnnpYrg8rxPpsDwJmpSqPKXPsZhL6hCAiMJFbS7CLTRfVJVL9ZeRBS",
  "key19": "2PTApMwdMKb1n14byno9cTx2iU8ei8dKWjcCDzKEguH6tXTmkArwmSzdXoojfobXdP2vzNeJQg76A9dHxk2ZTWGZ",
  "key20": "5DJQADsiHim3BHNtXgjX2LzmX4t3Nmadfjmv757f5SrMBUFcFoTMKF4mh6K8GKSN2ZabmK8vBytjNDCtiLSk4376",
  "key21": "5vVtEoUY4rZEXrsbdhUoT6wjwW6jBwKXWtNqFoSrtHMCHaxMAS8pSNJewp6Bx7p2FBzim7tbx3HkqeC5ENHQcMhC",
  "key22": "482v2i8ARtPzE3cUC13UKHoUQY3jFEBnmoGkZR9hhKwwS4tAkfdgs18ZuB9EiftERgKeHbnBhzLMkmRaT76EtsJe",
  "key23": "27CC1YiusGaV6AbCKrQYLNXmtCSX4FZTocbq99jbH7u3REtqdBT7f9zeSkNRD2HcZr4RfsWJzRf8maXwYJsjj25v",
  "key24": "3Z4XwJZ23PGenAwYCjgye3JPrrZJocR54qj5LJY2AAqijg4KLG8jvQs4AC62QsyeenxsJ8asiBHXZK5i41TmJT3H",
  "key25": "5hD9J6DhnB5KgrMFtNoSrEdwz213STCWpiuNiDZbs3gjqdtibi3M5WAT1x4JWBgNmRP8CbzAPo3Xk4zCotd1sfmn",
  "key26": "8UWu1whcFgX5o7ehPVG2Dr4c2ZoKkNSdQXrBt8bKZq2EhYvWseygEFrrFz3VfHpLRzpF4hjJTksFc2tcD5bX5r3",
  "key27": "41UTKv1e3MJWviSz1dVdvCPZHtdv6QNzomSu64Du6MHstcZD7Wc11AgDEx7Nw6a8mstFSrL2cvWkqxAhtYsn41ZZ",
  "key28": "33nq5j2tzPakyurct1nwrUMUqMrZPsgrCFeuaxt2dodR7mabkoHf4dJpFypjS5jwtYbfwmuF6BDeAnVCPPQxNgkV",
  "key29": "3jZ4MZXAn9uGUKxjRpZNyfam7534bk29D1umdBTQo6G1HQoqDDbAeRTz3XBJs6fLYgnWXugfwZ5BHKvQmccVcb9Y",
  "key30": "5USFjpyMSMua6Q2gsSUzvKdvWbyiWaUkPPJv4VsZA6DuhNkQKmxy3zC8ws4gQkbEJ24Cs6zBFUSnMe96PfGrFZBd",
  "key31": "45TNeXdFgrbNxQafPcnBZ11HQVmW2tMdS3MMhkPEnvESNNjpCXJTdCg1xgyQEUiTz9e4efiKufHF6AZDm4qWnVRm",
  "key32": "A8acPmpP1FpGrKSgSGBLheiRCrhKL6n7HJfv5i53DLiFWYK3n5h5ayzcERzWum9Uujw1hbmDn7m1GRqLwgfccxL",
  "key33": "4cSZLSKQwBQXvBv9o3d7uXZyHhLUCdKh8wAyzoFUbyzuHtJJ7Z8FJjvaiBqKivf6E1K1WEZpb9tFuzeVMwyEncgi",
  "key34": "5vNQ5sYSBWwmT1MY1s4Ts1mZd8T9xpUkWWYZWfLWixVmPBiNxSYLJiv8pAGVzSNmoxGLTpgsYb2oMbppdhheJSQa",
  "key35": "3hseZETaXFaVQ5VHkXAfbbMbPXk5Lq2QcFov7S7o8M9bF7kpR75ck2TisupE8ZHKnWENDM49Fi4cXPqr9c3tEXYv",
  "key36": "4jR4a3Zkc3z3iCcUYtw5w7Qmw6dEFhMxCjM99Rq3bCK462dPKDFWQf5owLZwwhAN393QsuqyLxCkSuadoyyaPY2X",
  "key37": "5YpNqap1B7m7RYhQkjbPY9Z2hFrrUrQP4qaZsQxFnQ1nhD9dgiMSfdB4zpWuEtZqCWD7ezRcvAiJSaFBCJxFADk9",
  "key38": "5zoyRVremq9VeFY9o6Y91PRJF8h8TZh1s5d9dMTww8HyDH42Ct8HBvgChLhogsgnKuxhUS8JN7BX83ggLJ4JRN6n"
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
