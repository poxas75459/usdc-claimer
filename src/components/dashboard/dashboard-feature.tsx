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
    "3wT9YoDScHubkKLhpjNnGTxjNbQB526WqDbTMxPx1bhejv6MDadeQsrZ3TFaxqDD5hjWL96RDy9YrHxoBprQp3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtqA8J8AhZUBfV8qG3hTNwv8GvBAA1XjpiV8dCQ3U8Wthy8id7ziXQtrrkmPUStKoDM9B9xnR4RVsjU5sh6AhJZ",
  "key1": "4YM4SkDsNam5ETHWdhKtgq9vkiKkaVHSvQpw6Eb563gaTe8qiexK41pwxYDY5ou2ZsciLYaRxBBmkztkwd6uAACZ",
  "key2": "ScvoDKuxH5eeAbtpuEU5xhTD1xJxoTp6bFFm2zgTkjVFu7nW16Cs1EPJLCPphZCG1QjbuoZg9Gq4Whq2exJ4hne",
  "key3": "4wbhRehZx3Cyk5yMwiq4nJFpbVywjhd8Vdmptxs5QZEsYFpTgV4VAQJTWgD6gqgNZhy6KhezZfNg5cJ7CvTpw92t",
  "key4": "2eHQJuVAWv9kzRF5sFhWDWRg3jRjHoqa3xk6hSEYTTPxRWDtNi2pYkBPESa5Xnmbnjc6aATJaoWQsHaQQC6gawo1",
  "key5": "3Xf3qFgcWgjgSc3j2Gcxytie4EEFFQqReAZa37VM5zyJzkgD9h3TmrGRVLarGNfvjV2TntaBAqqgwdZvBsWEh5nS",
  "key6": "5F2DqqD9cpB4AsB3wMuDMAPVueTM3oVu4jMKoAwbYeJUmDQX5gxw61Gf9Z6ptLeEqgogMHPcycStvaqgczHy9dYw",
  "key7": "c9yswP3j9dFHHPUNWwDUgxfZTGKzzhS6rCpjBDF41WxyaYcsxCtfGx4Gm1D9t26WvV5t1QgX9fgm6vFzsC7oEXF",
  "key8": "5L33t6D1NgrCQ6jS38do2x3MDmCDKZrPNLqabXGwTucMxfYihw2q1dwECTx4AWaZC7ka6BP8ECaGJGVGn9Vik2Hp",
  "key9": "5k8LrES9GMScAzdQdLNQdvNPm3Q8ML5tzengcRSpjUNzbj95YbPLTKrjXRFU2AcJpnKNknhMYsShE954C1aQT4X9",
  "key10": "2BRkRzG3zor4dhHK6BXuUNpXMwr74CCZWeFDgBpunKab6oFJpWLFTmLf5pYADHPr1Nh6Kfn2hLsTTp8reNFJQEAn",
  "key11": "2HT9vxVd61VnEXoXhJx3CJo5K8TM22WENM3V5qGPjwYSa9sXh3QrUrDMuJq6dH9QbvUfU8crEofNPCeB5iAszE46",
  "key12": "31tSfiJHuzcG746DYe14AtdW3MNHf9fZ8swLD7y9HxHyWrPbdcPfUdPczxgtQQbmVuseE8RhXcNmogkWQtmvKj3z",
  "key13": "3DMeVPuDcZprn8sdLqhryWUJ7ciqW5X4YyXJuYgp9yUX4wmFLgvLBkM8Tdb1E2VDKabJ9JSd9jM3xC9jqyQx2UfX",
  "key14": "3D9hN5dhzxuxWhj1jseqUaEHtZzD4n3wCk3i2AH9Z7oxJupebL2M4EGo6L8N9yLkDw5LcsZUnwDGbyW3rELH43bV",
  "key15": "2LaMYf2v9EAgwT7eMLF9XYb3xoYevsRdyhWDzojcK1UEiSyHG6PccUrsHuxZbKfAUVe5wruYyFzbZawLj3snxe4L",
  "key16": "KjoQCg13NyRetFj7XW8QhDX3HxpVaR6Mf72tQGduDUPcn152hGCLriCipBRUgzHGGqxWqyvFfgRVAYh791X58pR",
  "key17": "4aJKnuCb9KDonuYYRWdAk2oBqdtKrguDZu3Sgco6i1THCeA9bfUhFX1tvWx5GVuyCG1V3LacQiJuBnGTBYoS3wtV",
  "key18": "4q2roUoKCifTauTYmY1iCLqcDXikLstURh26VaTmvw9YzCb1S8FDb44ZuSzdKyagn9GTojAUY4Em8FHpyMisBS2r",
  "key19": "2gLBN9AFx57s5UQyFW7T9hJKuBfGu7sy3c6z2hTwBhuucsQfweKsgkRyk4bmGPxm16DYJLYHhZAT3HB3hy1bReUs",
  "key20": "oGikXpq3ue33wHd5BHzqoVjeKVFGLN1r7EAa6RyENtBZFEGQr9BShtkevWDweKRZxJkfwGLhU416hwWTHqEzLXm",
  "key21": "2UVinXiKJrEqotehmzWGibRtmqrtPvtPpTomSnF55sRxzgwxS43tsu8MpwvDddtbtf5ZphoFCGqSDnwvSncFqSma",
  "key22": "5QjjFvDKUN1wu7P1ZsMukB7PmmJYR8V4yCfn5i5PDDpmvk7hVdWockQoLyYQeu7CDJdsPxYDPodj87sqzjqKkcsg",
  "key23": "3CQNGrzy57txR41NivDLuiVZYz9g9G795G6UuY1qPRMvKkqtiJjd7kJJECR4Vgt925VFNLoLNMJysL9SGABMJyX3",
  "key24": "5vVNFgG8J3uXKuw1zb66XmTRXEVWpNptqZ3QCz6kqVr5wtLK9AsHwEMg55uXKUXpJ9qXsrnKwN7q6abPc8VfbZY6",
  "key25": "2YFKGAE12U2W4YEpUKzsimB954ogEqGuE4grNvuLMpdM9XtxBzeSQuGEthHdqkmN3hMJzn7HApxWrtbamAXnM51X",
  "key26": "2TWXQy35sUAKK2dq9k5F3RjYiWrFF6aF6yJtz4QL61rzgNtiAiAGr4gpmqXCVynGba1nzSXz5K4jPGRcBgHYt3JT",
  "key27": "isNBdKbGNrHm69vfCbhXzhMHpaHVA9xbszSyzxBMbBHihNtEYx3YW24QjJTXAtpFjSfwT9N6gSeYiRC3xZY8hQA",
  "key28": "FrPYB43FV5UawTNc8ovW9psMHELuhjefEDnAMdEDGsdZNkcXufEBV9AwMwWYLCGLi4ch4FK13HhmdjkmXzYEEz7",
  "key29": "5c2gxFPG1ycJoVra7ZqUSF64vHrGrSZAbgiyGV4p7RuzTk1THkyTkJdxyS3DMhLrPCa5iXsjbVcxAzov3q8gFqUn",
  "key30": "5R6BVufNyS35xXXjJ3JnCS88bf1UwXVUCiEvG1K3t1UVBVeJWm1yrR7dGMtPW2isZPyTt5dVnDuHPGTtSPdseKk9",
  "key31": "5ZNfBDGrn9N4RLNuJWkGT45GVNTbCSutZp6B38eMB9MHqNTRXZPDhQ2Ly2T6YyT146PdRu23qNgyPM1EQrcPXbvG"
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
