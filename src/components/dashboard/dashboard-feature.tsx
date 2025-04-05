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
    "2j8vdCTvL6EBAxRj5qbGiayAoPsZkCjbX2iY6Jt7z3Gr1ghMGXE7pYirKpZtgYV2hH89W1N95pCHruoBzj5em8bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NGPWB8KFWHHeKLes6rzNJ5hEoBQ6AeJEBMy6mvuTJVBuWbT35wKw5qUX5qZ8WEuHESEeXbxt1LhVrtKVLALDyrC",
  "key1": "rpG3Rn5sWbQbYhhk8e2SSszAxgc6Ebh65QYimnoyAxo5755juPKAu7UukjwJ3mHGCneGKo7kEJcrurC72ggc4bq",
  "key2": "B5r8sVp1uH9T2PHBa7v5HeF8FUeFpZkozh3HrmZM9YvZwsapPWvghsfzcZ4pQBqjuVngR9in7pxzZYG3MBMwMHj",
  "key3": "3kzzDBwQ6wUx9oyFM2Krygu2igk1sNFEYjisxp2rJfbiuGY1aEr2SMX6n5jFcHK7GJyBhFpqtNYvUZ2FGoYDRNC1",
  "key4": "yFaSKHy6eynn4B3cKVEGo54ZTbzqHAkzfJZxQTmTgLKh35fhpSqRCXCgj8dVV4btY51k1iKUR4XTKvMRkFhfd9h",
  "key5": "4Md4C4BFAzgShSfTV4dE7EVcpFfKLsu1wjiShVhoNUAb2N5EiRDJ5fADXB1wqHCKX39GxKLPE9XAAbjx2Kqv11zs",
  "key6": "31m6ZJPoCKbVGfTdKSTRcc4Uu9mmwKrGMJkjpJYzUNcqxq42kV2gaEHjHm97YSxPofThJXu8eTPogkqDH2zJ9Ap6",
  "key7": "579vFahk8X4QVCzwGVqfK4NoFcgK8XcHizPKMs3WjPbsFAeVCuhSArYdyBTpkoeRBURxoQbD17DxEdfTa179G7LR",
  "key8": "1pjMSLSCyrQBtZWLNsiS9R9zpRLtcyktTTZseboijrTRdVmPNvQTWMmst9j42Ue994i2z73CpYmnpzDLSUf861F",
  "key9": "4TjxT9p7ivtLAeUpjnxwqy25kCPQMW8FvJopeTwUhCiJHdX4BNwMAyhXi9ZpkHdYDPFqQL9A7VJky4tYabQVMvjL",
  "key10": "45FLACJqJF5Lb6igJKeLaGCQQJ1vtP7pL7EggQRhjfBYxWLhAZMxL9G8AMRNS31srqn9EUPteyiN9nNZhqYh2AHK",
  "key11": "2CCU4pef5LhGqat7CLYSAQxXCe69La41vGDzXsRYrfEHfwXyYs9sLXT3bmNzb7jTNnqSgF8kJRDn2zWYkdSdTrh6",
  "key12": "59hCA5JL6aG5BnA1aXRGsHia6x15yGwccPPyZrVhJWjcpwiNq6u9m95QEdgASNZJVG4WZaUKoZxgLSomhL8BDang",
  "key13": "3VXBRA9ibJ1dqminKaKNzb7wDz399TxiTpYQnuNhpmmfBpRwWU4iJwKzmSQvhm4mmVgtjMbBVH2SPeYtAgFydjq",
  "key14": "4PpnnpzgVn41HE5ty23qQan42XH5eNC37Z8SoMypSapkZ7FN3azvVa1ST9Y5Ego52xaTuURMfuHP3BPc8PtR765Z",
  "key15": "3E4tkY3YE7mrY6PpYdRnhNh8m2iKLxdZaj1z3sAQFvQggoRhW4jq92eqmSgGxGzCbJjpNPRPFrmgMRQwgkQqKAT5",
  "key16": "UK4cxcdWqoneYemfqqZvumH8SMcPzzjgosYynSXDcoxfv3mfhzwB9m9uvhuvo99x7764Xw5tdP1gqvkRRPK5i8o",
  "key17": "3JL9Nsqt6tHXvdtXPeq1mMKAQNHQ3bau2UmaNgyYY1KTUzAJjACC9Af9t6wZkboLyGdc3crLFgTcQgsjYNvsr87W",
  "key18": "3mSnNScaGBmKDVBKK8t4Lq3FhqXEEbMC4HQ4E14GU3KSE6YePKQM667nd7urHsudiBF8evtXU9LKE4FN4NeTUVar",
  "key19": "q4vgNG3WHC6xUt6mjA2BRYeHJy6JRexK1oa1PsTU3oRdZQTfJbrNqdbEvuDZn38u29wUoVohxvAMo65XndBx2jN",
  "key20": "4kgL9Bczbx2mkmEyS96F6PnWufWw8z5iqs8wSaHY2zCkW87GLBBsfvzvdFF6bFK5XD5ph9TyKp5eyToDGxG8Vqos",
  "key21": "3tYMeth19RH8VSqCBJipML64n4YQfnR3q12K81L1ypXn8hMsnwKyn7dJjywDfAugnK58izGR1jLpGpYt8sjRYSyL",
  "key22": "3dMn26D1huL1i1o3DZ3cAeWBXmK2fTPjEapX2iboN6gsvj6bWk8LBZLaCk2ANwBRhA2EgwfbxqAfxZ9qLKtqsFFY",
  "key23": "3DTCooPP2u2hL8jHWGL9XextTgwGkKxQuU4oJxvmjK2vuhnzsyxeNrpP2ggZhWRS7ehUTKe7rcDBKYntnaXeSjH",
  "key24": "3gEchZbGUDryVjoQxbxJf88bcPatpUHHh2CgkjYZyFnD9znd42xbTm4a3hFseFSJjnUQFn8Di5ikzu8EiePXFz9E",
  "key25": "e1dx96q8kK9VS7MDv3VkM22DP43Z6fVYArfeVHveHnX9xUz41tNidN875P175yx12Jp7vqhBkoT19Hak9DhZ9H6",
  "key26": "4UcSsK7HZyUV3CCpYdU2FH36DXoeqVBb6NZpVobsw69BPvARSDLejeRtmbwgYMC4cRnCg8Wwqp8FEq6q35Jb89MD",
  "key27": "4YtgMStT2GozwYvbwDBFAdASikCSYZAwhbV2185dgYsWZzAVmGF14LSLh6NkaKF9hR2LvwVUPNqmtCE5cUGh4j4X",
  "key28": "37JhYQThesqkJewgJioZtY758JduAKwsQfwEuEKYy18WvVrgN8rAYnZvzfLCvnNYVZWxuhuRGJzVZMVJaHu5CCWd",
  "key29": "33CXHVApqMEL9ykq234fWs3ERPZuKL7eN6d3AYib8EF44nFERJuBE56iyDULW2C1BpAgYihPRjWrMjsGEfDJXpsP",
  "key30": "59YLUGrsfhCm6pBp9vnvadSeC5hHL8wQ7dBJFv6JX1MfL362TFygV3W1hEgwm5Y39g2zn4v7Mp1ds617xc3eRbBF",
  "key31": "4HiRZQLo6ML3aUX9D3YWRgcs5nskQuWUfcLR7sH8mvULipm4YcHDGCpukqmcotsYVjKtmvyBtC4VcGkjSDmRBxnR",
  "key32": "XUMu59hcQ6a96ssZS7ZVN6H7zoiQtqWvsvJopsoPemgZgbuWbEh5bQF9st8MyD97WuR4B1m36yGx5n24BMw5Nv9",
  "key33": "2dbt9ah9FhxKcN6SMpF434JkAMZMXMa6QcPMpEpW8pFhSooNDT3FUVisEaHJJc7hpsYbcJCv2bcdtifcyJ4pbKZJ",
  "key34": "3vyrWLDhoWwQtet7ubTpXPk3FjqmYDo5zssLptMihrsDbAA7syz2CzEJQZ9vdePyM4qxu5CCahrfTpE99PDVNafe",
  "key35": "4jGyo5JbPKXevoHqkv9dpYjdyGcnXqebxxiojwt8ResBM42zmStfst76fDvqfQ4LyJdK9XcaE1cY1aGgF9TVnoGT"
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
