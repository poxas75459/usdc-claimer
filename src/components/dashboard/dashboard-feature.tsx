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
    "43Mxo4fJHG9GLo73x2ZZ5XQHeS8ASmmvXh24mcjq8RCF3MW2rxtCd4b2aQVJtrGc9b2dMmFBbFeHQUX1V5kSmpgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNgt5KgDiBKJFhXsUXC1XHmahgs1T9XTVnAToaT9qGqQbDKEEWWnwSGkXiKCjSggLVi1GvaxT7L7usndhb4qvDv",
  "key1": "4rb7wYKQycNZ78Mt6nnbfp7twCJtjKnDezBMfTZF8mnheVAWuW9goMvmY7zzgmCS5AgZad5ytQbe3VR9EMK2xn7c",
  "key2": "4i4PGaFxM6XuoUn6REtxS8rcmfoCD7xnXTbgjFYNjNCRKgniVGrUJX1ASJXpbuFmA5LaefzqpLhCLShHuWVZVBDc",
  "key3": "5BXrHfyxGuXP2NciaoP9q2giYqk8KurnowHB5pBCZgb4snZvpQUDbgXfhrjKdeMMCJz4Fzvy3boELHXeej43K2xp",
  "key4": "4iz7TymS55Cbx8oTewf9tK9SbUHGRDpEeyZyuPVstrYzRpPjLL5rhaaSbVAcEuCrFeofjs8esARt7vMVWqNNJZoz",
  "key5": "3AqxepRCdeBqfiRezx5t32BrEpDnEGyNiAk1xD8CDguGe6aP3wzG4RyD8XgfhfqnSq5MsVzUWpWz8VXLKyss2mTc",
  "key6": "5iAfmEoTc1GNgD5ZSM2dRtJpC9Uf4VH3AKcyfYXpihfpjzWw6vswZdo1CHHHmJ4viZKNUqKe6PonjdEErMRqgEQ7",
  "key7": "5vfCcUiqm6jWx6cpQskXUKeWJ9SQMvJALdS2L8BhKHqoU2BYXeU5dA9FC9ewRYdY8xirPEewxmVJxitmpdGCdmKT",
  "key8": "569ajtHvYT72oxKwkoe9aVsz2JV8Lng4syiuDeHT29kSJFwNjTszLwJTi8R7dwQJxgMqLdJ9TfSCE6azJQ1Y3nDv",
  "key9": "58UUnxJEEoUYHSihqnhGAZULZGR8d2CtF3PE9Ki5qN8fE2Jkk8iaog8cwHsvYRr2DxR6NrZsxTdof4nSgmyXR1wn",
  "key10": "tweeukJMP5h7tSWfX7XdPqnkMVdzXHREmo7v5Gz1tQJ8QXraePBrhjLsKKvHgLHkBL2oH9usgvL28UXmXZesTNu",
  "key11": "5HbPLjGh3w9JMq9dVjNU247y4kDJsMFYKQqCFhW9RQc6tparnAUBiQYfXSsKvyW47xGr7CaQ928gYUDrVsBcTUj2",
  "key12": "48NyunVUZSekmJCfosbmQFU2tVA3bdBNDrk44PcFRY929ynUPsNNMfDBWNsZaRawLEoTNNHQbQ6ZbWirQ4ZQ2Tak",
  "key13": "67KvYvpr1VWEgg6LPYjMK63736RV7JG6cSGjctWbWemGSFRJSG1imPf4CYu7yMU7GRZw66A12Jbm4Jm25artH9HR",
  "key14": "fHZLNfiQBe16dWMQQGEZbBRLAk85phjqyMJ25cDBFb6Zr4Akn2YmNqoRPEW5QWSFuVwyqpnvJgqE3G9SZhmy96D",
  "key15": "4LmdjVpQrmuJg4gcTh7Q4rwTGT4UVceMkvgBsUzMNtRxLWSoF3KR6wi5XBHCc4i5wUqQDWJFRo2dqTFWcwBNZuBi",
  "key16": "63oTmSp2QEvQstvhsFjvD4j5oXrYQPGf2xv64mhF46yiFmRDtz7FQdv9YZ4z12bX1RdzaLhkdqbMZyN5Z5BLu1ZX",
  "key17": "5QYPHFCveqVibNPXxsrAWtV7scxWwHq2qiL3dU6gRx7oTBGXygJnv2HBEcLA1ceCXniLK9jvoijeM153t8zCLtFT",
  "key18": "4MGytkV7ARwuw3BNrN4ieNym1Babbuc33rkR7yy4A1TU7sMtQBUQGN7JfKgBSLmDNtoAtcw6yFaLyrCyGyi5TTqa",
  "key19": "2cpnnEa9tCqKRD8RGMAEwe6P3Zcmvyj8GCjJJiH9wEJNuf2LLDKr3nPpWYYzj4s7RMBZvTZ1RFLwQRbwu783977C",
  "key20": "3aSu7m2QFKKwt8u2aLARZWZLzhy96YZkZcmXVxuxxadipDhSCXbmPTPUJLxN8Fbfjb6iVaUtYW5z3jhLPbhYeLQp",
  "key21": "3z3dVZzcTGgVbJ514keResnsu8w2NvLfBzmuQv1JCPFXhCBQtd8TFrNcGEYuxbpHNooSaeZP66Emtk4Y7KgxCQQc",
  "key22": "6tuWKKqQUaRdNWEaSH2n9YyJNspfEMBEztaczJt1DZDQQXBynYujqgZLei5NvhBeYionv4iigJUiiXmM5bA6y4Z",
  "key23": "i2D8Z16Fg9p9iJDPe4VQXY4YuKwEktHNzikowkZ6VN3cGhYDvJpRnsGiWW5wBtNHbZ7McFBZFG4P3LGKrtfXeqK",
  "key24": "2NVHDLNZHa9TDMokaCsLDGRT8JijHPiYcC3WDy2As5yfnZwoswvuRnoV13rMpbSmeTcAqfgzpqqKNwJCwbEJLR14",
  "key25": "2uvWXZV7uwbTxUcUNBsvFfL5SvWUzTBAXeGhTYKK3YY4KbRxHux6dBMXQgGe8uennpNYh1ECeBcRisxFqMXcQvxb",
  "key26": "5vTS2MXtyrJ8Mrsjb3WQYUQ7YvRcPCcWRws38jTKf5LXtt8Q5X1ReKRdpYA2p9SH4tP38KTpV8cqiYm6qiR7STFE",
  "key27": "3WyfEuqfTsgyBsbYeAvC2zGCMntZbSiTEn1sN4ifsAG9K9oypmfTDh16U5Vk77k5xarFvknmwpKuHiXcfALnxzC"
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
