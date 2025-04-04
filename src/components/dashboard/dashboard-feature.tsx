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
    "5nmdBsJRi4HkD4Y3xmwQRZgxSgLf8ze4Su4Pqn1b17F83CcQNoJKKSJc8X9FsQ2bpJCRFYzys9nnA624xpDFjk16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RcU9mGMkiiurVufLf6ayZM5qjVMeY95DCR26YPuyNdRP5zPHKdybnaFyX5saKKXmHfYnY4Ef857VTYTFt3pTZdP",
  "key1": "5T2xaQTpeQFN47LCXjxgrVyrQLkbhCkV113SeyvaYKctkryQBXXpEhkuB286KcY1hL6KbH5c7tBsYW2DWbmwTsKS",
  "key2": "363vgwGjYyiN9DEScLXfJvFRRHFrnMnmctj9hjzvS7jN45cM2NyHD1yakd1Cbb9YGpoqyQ9vaqoDHim87xkJcVMp",
  "key3": "4SQc5rFLgx12JvpQwQM3FruggweDt2q8GisK3nMVeBGYCcWoVWCgs8px6dNeKUxnb9iFG5AU6ExjdSHy6BrkJ6oH",
  "key4": "62YeTHUqwgC5VyBwxLnoQNEoubaFRXnKyVRyJ7pyrfwRBeXL3KzCHjfMWNhezVuYUbkP3jUuKzEyMeMsaT4ULXs8",
  "key5": "URo67X4Rzc8ZVfMqQBCJzjE5pHW9Fyp2kGUZMuaQKmvQ7u5Fi3w9LkBPg7WPCkFxo2EcnN64t2QC6aSgeQJs5hn",
  "key6": "4JmR4XqiwDiXsiKeQnMdgh9caAUcghHfn3bzde3KvV9xm6EZbuM4Y94H3KGfh1vYcc8h2kdx3fYWz1BYzstVjq5D",
  "key7": "5dMJ3hyS7MXAA3WigZ9RgjHHdBHasL1aHbBXNfXrsorxXRa4WnKJvhebpVefpXu7RdwVa6iTscDYaUDmQ4Gz2j2A",
  "key8": "5SLVUADguicY9My3tPuz3diquw8XGfftw4oN4eUUw8WkZBRGYyZLSHUUJEoedUXi5PHPomDjcwkHZyC6sRbXWWEo",
  "key9": "2yJmbUsjkzzUMSkH1rhfmgDWwfJnkBAFUnsky72eCe3YZQS77w5ZXJTz4aQiyYaZHLAubSZHaWCUyyPnxTsrMAVi",
  "key10": "29VcyFtdK4gcmuhTrvN8Y8gMZY8wpq7SLYHKHBMQWwmnXXMFak2hwRhkudZFgok742SJbLwG2WUUNZ6Sa4vzFnBZ",
  "key11": "cCJozwptNjZKNt1qcA71oWwo6Hr6mHLwS3evGucHSJfGobebm2iWw7mw9W11MbkqgR492yATzY3xej4Q7oDNtWf",
  "key12": "3NktMFZSfnxpfY9fy1k8h3meSW7TArkfNpEaF7eae7KUNbEsfxj2srG5X2VrHZtpQcthfF9xXxhASnY3Xn6XRq3c",
  "key13": "gpyiKW6KGVF9z3fyNHSmU93zwikUD7eKeHxe1qW2CzMpmGdHFgpbP8t5X7G9NqDDiFFhcEsq9TzA6wMnkDpjA2n",
  "key14": "43PdaeqDqafLBtRi83qmx81iEqRmP4kMuoAH9hcALd6pyqCVtnN47gmA8EDBRrFNqRNYtcXowxGy8MJzdYhwsyCr",
  "key15": "34jvsdhp5CH4TFUoKBCEem4UhrxJLboDH5hqSDWpfSaz33kDesjHAvXVnUrfZXPJWMNZuhFW4m3Jxb9b5KEL6BRm",
  "key16": "62BdaQfzmsnaVwyuAnk2BAcLVdgmgLoZ9zjvPPZVPMT2BdcDwAqmF3N4X6fZ2YefGvJVHmsG2V9YvMtyJoNahxBV",
  "key17": "2kzGqh8Bxquxu7e5ZJXBXQ73haQH5v1e6KErSmZ1dHNYLvpopENBxVQYaG68tnMYTR8ZP833n7tvGz7AC6BvpGrz",
  "key18": "zZiUYBUvf9oyY51j2XH3bs3kpHLQ8ELqMQbSskpghe5FpyXzrTGJEaN2DskKDhK7NvQNfZ5KHLEmoCGbM5FhVvz",
  "key19": "5uQC3JNAxqZpaRW9tmx49yCfPSuBY9iCmLhTJnRAHyoieqeba76JdYvLM2cZuVrD64LDf7x6xsakzYx8GJz8mxpu",
  "key20": "3v8cEssq6qoezUW5TqcbDnW3Nt97k53N3mSuEWvzUL9PaHs3YKGH6yiVixPwXCTQvJ4Jyz8ejHAS4Zw4yGjJDBPP",
  "key21": "mJGHaj6rinSeuMbnMM9NBhRx1b83MeUheDDr1baiy1rWmY27UaesoWKmBsNcsFmMGW1oAyr6FCfroXwEd3pVqBz",
  "key22": "3rZ1nrznRwzykcapTx44e7rRFeoJBwb133R4uTH4RtQBuh6L8WtXhhfiVj5PPHF2h3BcRUSU1iyqBkCasL4qemSJ",
  "key23": "2RYfh56fzfhJVs1CKFRikV8VPM51EmPhdRHszZRdc7hhsG2pruV6sAvqezjDm8Qx7gN5nAJM5Sbh7KP4wkCJcart",
  "key24": "4k33LiycN3MA639vURxWq1vVEKi3JaAQDokZAcc3MPm6SVXgkrK4SjzABQF8q7weY53yCyvsNNTMcDUGuRRhaf5T",
  "key25": "5uYwx9BPAXmN1VXvyM6FvZg6mGGUMQozorWsfdY73Lv2YL5S3W9XRtsRgPV1ndj6Taik9ynCtxDXLoTYWfUKCY8j",
  "key26": "2uYeA6pJxKN7CZXmVndEanmifFV89dagA3WTijTX4GoKR9LTC6ZVdHAfVkS6Bo6RGBqX81K2KWw7f2hkMMcLg4dp",
  "key27": "5n6mNHdgvTgH3RSWzB9K9S8ncp5Dxa9gGms99741hKAeYza9LYvzkcLAMxagqB7B8KzsLqDX6U86RYyTfw8nRLxZ",
  "key28": "3UmuD4BDTG4HyYbu5adfGq9MmMFxzSony496443mF1otjueqYbAzL29d5LTYqENNmYpUUw571jFVDH7ndLEBTMSD",
  "key29": "2124ZRk13ZRVTrbfx9VpQbseAhMkQvNCzRxYqdtNZqCcemLtbbWK7JAzqszxp2QwCA9pWqeZ3zwT89GS9E4jU7mv",
  "key30": "ZZJSZQBXiqPie7974syhz92JgbTPepK8D1qSr3vaz9qyUYtAevTVLEa6WF1iefMfmVnyPLsBkdVvRon9Gp4TQzA",
  "key31": "51wzg5Ud5cEgbCTyvheKvUFXhS8NWNVjFs8MNMza1tEYzV93vuXwc6BnChSK1ceLAMYDpzJ4KGKVLH1PAjWVcgqo",
  "key32": "55YQ3TPuLq9VhPmE3dKJ9aBHESY57rXKBaBYxCqPDLERwBTzcYKTF6J5m5jzVfgmMu6UisCsMq411LKGpcRmG3wL",
  "key33": "3rwdRR5L3SNBiwFMWkn1MVcWgKF3HVxiDgW7EbaaLvHJh7pA5rRoUho4gcc7NdvfbBFF6kmYTQGhRGB2hBwj4DD6",
  "key34": "NKZDTt8uKr71GkskmtgP85zSfZ2MuMTcHfGf87H2f2xPTuV7DVjB1HQUrzxb8Xo3By9B5N6sRndd4h8QZK3wyKB",
  "key35": "23AJLeJ2u1z8hU4rVgtLaEckfr3UqzJJnawuU1SCKFLkMMndAAVYweqH5BwUCqEtrRVWVHBnT2Jckzw5AHp5SJvT",
  "key36": "5hFHhcvE97gxpRewfdG4eHeGonbUZwKYaMjWt95QAadEzWxM1i7bGm61EgG3rLQ6Eas2VqxtBCKV7NVaJv9tXrEC",
  "key37": "3oJe24MhWDP7NHcFPak56KcEaD9KY3QfX48kXZ3CPB8ZypjCNRLEQgFiNNxUKWvUUUXXeWQLgJETE26Sp6XugRLr",
  "key38": "eTfZ4j1hsw38fBtAcVC1jndQapuyscZZBS6VNpTamW7J3Mqj7odYZp3fMVdFM9bcEN8QcVnXGY62r4iroL7xpN3",
  "key39": "4tQM9mQTFyKKoL5S7azbtihquTobmTms9fnA7NHVqUqMZKuUabXei7wgMAvHBLV4yndPRDVbvhAkfKjvRASn7TYV",
  "key40": "4M8UHjE439vmBgpZ9tsTF9T7YAsA8iGHqHr3eVnn4EbBjUGgLpDNkeR9sR26rfGD79F9vQ3FSLaTsQVQh5DSFcjA",
  "key41": "58zCVyvFwwJoFwghXceXcoErf2BhcxR8df2cZV851UhGPCydbzChxTrfdRdWKGands6VxcjKyX8qsZi4peEAyg4y",
  "key42": "4pbSRy3uyRdS4cMvKmAaDW4oaifuYm7nDmibEV54Srrw58kgUGobCqvC3iYGwh7fNLDjxLHS8Y1Q2odH9pt8zBp4",
  "key43": "7kRWr95TuXqmGRe6YHH66RRJy5oeryyrrpmchGrdMHP9SxiYjSvZ7kNmPEGvCMTjt8Hc5W2iU4c7nNa8T5jKXSt",
  "key44": "4R1pENxqcDaaJv7zyW6hkCSzu5acsgrfc7uxGYhPme3ZBCd1fYDxPTshw4fCAt8ZQ8oXo6R1HGsrEQX1cDv41etK",
  "key45": "57S5u19vVgZ6DRSaYs9f67aZtTT8Ezf4pcQXjpbbApokerdBmF43igAAY4gRt8gt4K63gj2EcFw793KAWrGsKwaG",
  "key46": "4SwUe91A4KkMHaf9QSScfEfYsZ55qjjfGcstheXJeQzhCL8h6DzKABSdd6abwju84ykL8LsNFr5zmS1qM5BS8LsC",
  "key47": "5zvrPrtRRPDY3MhQSEi76EbVX1Tyn7F6cC2GmuhVRPG5938vPNvu5P455cHsdAapPk485XVG2mZUSbNbF88y6i8x",
  "key48": "3aQeGZDgA5weyt52mWpSGA4cMWgpXJKLpTuFMwp8t2QKKdP81Af4rkmM32B2Z3wy4Ne4vh4m93LpJfJC1Z2xjNzP"
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
