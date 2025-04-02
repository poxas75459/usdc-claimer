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
    "3YwdNV81hsvVjFswpbP2XMnn9GW6crJoEBTrbadepD4LU8Lz6W5mHGmhHq7jjr2RE4WsXyMz6dycK1mimccnBE8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ctex8ZNPBQxibWdEE2KjnaZSYXX3hz9JH6q3ybB7wBJZgyU4dwemGKL5dn9TZEpcBTaTSeA4UpvjJ2Yo5PFzmqX",
  "key1": "2SEWagBKHxMDXQq5WRzDCniEoHvgmD8zKJzoT16T7hkc1w4xuaeT1JNndVnRy9X2kPEqThg7ULAeHQKSDXm8QwsH",
  "key2": "3FnHXwtU8ybxdPPwgWH2uqkw6voiLEhR3PPveyxcY49bBpoit6yTUSzGQ8tRsS8jA2TDyEcZhcdMNmCfS6DFZXkz",
  "key3": "3ycFJdX2srd2E1A5pALjEYLqCsWRi4DefQDiNLYhNmJ3WLemtx7CLDmgSZkVQWdFwsi4GSneSckf3zHK73qqYtV3",
  "key4": "5rfw5th1KookafwcVsCs1Cvu6m4W58z2W4g7k4p3gS1pN71hrwUpVTwp8aJ7w6rJW158TZG3WbFXkjvwDJtqY4J8",
  "key5": "eptZawKZ317k4DpGEKKY7HQ1w38Pc6Gixc1yjWYDvCNZPJ78QYJ8Rey3RzFzsKV26BMHo6b31PEeg4yAmdH2Txg",
  "key6": "3EZfzxwkETYCypGugVWNjzfX1JfRuvnkxSf91sdScP1QQYhkGHcfVkE56XbGcyEh7d3Nm7pbJEak8As5RBhCWwrn",
  "key7": "32T5qMkCnkCA2Nbk68iVycjjikgYS6UT7UGqDvfQdYK3DEAbub3MMjWD2rfGiiGsZFaXiPpQXydYPftFrM8MmG4h",
  "key8": "5Nwdxy6qiJi8TfcDNC3zk48xPkYY2vKxkyjfyP9sUmU2g7Kqgn2o9zyu5DdrPsFERB6G6zXqXBHqsxwtQABBBPz5",
  "key9": "fWRfNERLXPNsCZxYayFZQEYAxgBtxvzFtsuMea5NhUQjPQWvWZAvKSAPsC5UBE3Lrpq1tM4dEGoN2hVUqhXkyHN",
  "key10": "3Q1YWNQTHCWyRArMFkLs74wccevVxAvfVR32WqLCnuh69xQvmcxvtdRYRs1qfUQ42g2fnLtoBzMiYjYFrnpY5bGa",
  "key11": "kAEYwgTPHCLQsxw9VrcEeLv71pJinTnNXFsx2pkErGgoAQoexxBA8XwsUx3gjm6XzAJQ2FfBkBD3sEJKXyn1heP",
  "key12": "23B85PvnpQBTKrXqa1CUDBdDR4uaGq2a5r1kLJd6DvmZAjHnVpGk1YYuhBbfqiJ2z9die1AhGP9ti6JNFvYJnMAC",
  "key13": "58J2pjPCaV9BACDkLzncFKFaeGPxJrizSWrvrBGCoDd7poY3WSsvirsH5t75omNmFHQ7UeJTCeSw1XhsajJgKjJb",
  "key14": "64FMXGPbXnpPfMsDrP56z3wJec8hoBYhLJSXtXNKvFqq2oEFUoFUxhY6XnFEfSY7yaoARc7YuXTHEtBce8z77ZXk",
  "key15": "que2do9j1FAM8UBgCxPg8dAnvBtVsaWgi3hbg2H4cfa5R1ZndH11DTPa6r2HnRAUeufzG8LdoV3HhoemhnGEyCy",
  "key16": "3qvtC4BG2k6eLP4PVaF8BMm125uB8m5eGpsDXqiYFXLBMXxKGxUyPnvXoNjuVx9BssCHAQtv5ub3GxVsenLvyhUW",
  "key17": "owzoaehvvbHkrWuMPEtFDeic7SjcHhCsf7zLELcn62NL2RNHswZDF7kZxMmezkZ1E8LKXhL62YoXDZbFudhMcrz",
  "key18": "DFJstYS9P55pKuSeet27Rdv6kUjjnpyYCd3nvEUFjP8HFhFhcyCWkvkpivMKQ6d2tQY7jg7p8H5iYUMffdBQtYC",
  "key19": "2v2BtRcYHAUT44hUP4y1ASA4bjoRxASmMBmELtHzAApFmCar343C5vEBWYjpJXoZ5vqJxJEfyHrKbe96EKu1xyLR",
  "key20": "2Mvo7W97hew6UqTDupmrBzK4A8Y9JNdzgNK6Uk5E56dUvebBqsQRT4jXYFfZBTaNQk8Zf2E8xSiNLb3pBgfDhRWn",
  "key21": "4hQafvfDdNXBr9YoKAsyHuNNBhu2MMmFDjsGNucteNbFSS8NhiwuRwnMPoidMW9dH5Bemzmw73h6FDz8AcPG68tf",
  "key22": "49ReDdvKd2wqnEnYSfEyXQbt7WzNqBSvRtqRAxERdGBggKDWapLtPB8SUAvWwfK4g6yUdfaq8WcVvK4XE4FqcSoc",
  "key23": "219N5TsUFh5u3KvibfpSpM3tRM4Vsohh4ocdDhSyLKZDNdCCrRUKdqaRnUyonKgzdqYLDwu3ngsw8L8BZ7M51Z44",
  "key24": "54VH2jXfK2BY56V3jQu13wuzTysnhLEEYVUmUfQQPaRQ9YyHikqbbzqniM9wuRsh9R1LrntSrGZf21XGdRwFsWBP",
  "key25": "2s9PD6d7rLV8UgwGtVoqJfVXtLQUVMW4qjQ5P12T8MqtpK5cb6BBMynwre1uefhhFGVHmpUxfMWMeYXDA6csohjN",
  "key26": "4PcUBE95eswbX53gxuzQnkXofALJTCsDM9DHxgNwAwg8wBrfyzm8oAaETLwLEwBMjykbPwhi2VffFCPdK3vt5hv7",
  "key27": "5cmgX8oStUSJTr37pv9JF3VL5UUwZ1DL8A3aq83UxqxVTtbkFSrLCwCuDZ3TNA3eAsQkBQYpCwnPUYkAc1WksKGq",
  "key28": "AKXMi5aoUrJ5taP1HohHvHmAY24ETTX4injkNeqdqqXCmvYFRZwBELigDQVvnH1YmZjVYLhWzSjnnw94mqyZbcu",
  "key29": "2d4uymPE5VMb5eRhMypvHPEUfQyDoStGNV4RcnPEEJkYNCrMHxzczstHw5HhFtFL14BbvmJAM4aymoF7JKmpebhJ",
  "key30": "5DSaWRNY5LpHMKDiVbzTduisFknAPiCkJyS6ZhtE3aTDKfHWnRKeru74ZBCQZZufjo7MB4Zv5WQ8csA9gdKPqd8r",
  "key31": "GJk3Rb5pvmeqEaRjufgSF9vJJS45ckSGm6uJALcwQQNpM4xffuNYkuQ6ESVDQAZCqcfNCZjxHVB7BtSC1yqJuH7",
  "key32": "haW5JM47rvAYMMNd4ztKLhdQ5MRSBTdPiZ3bJshA67FhR7fsdhY3uvYxa9S24BjXarzkRX9BNSvkBVsx22xjt5r",
  "key33": "bwohEoQZ7G6cGrRBfGEfZrZgT4TFbuHDwxuH2QwV4sYbtdnnQ1DGD6LR6gJYon1KDLssRR6oZYCM9yX66ANqayt",
  "key34": "3TayEu1A9WbMbN45V8usUNZsaPvdHTJZYRiMKpvxWquH7pTyRQSqDammJ3MYBfqSerfjfnNq1sX65BoRsa3pPCsB",
  "key35": "5cVafABQqBNV1JZwZEot4fFG7amrjS2Gj8Pv96oUwxChsCQ9ApL7iQ89P4MJNPY4JRYPamws5r6uv8Gw6LzFFWYK"
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
