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
    "3M6iUdD3Qs3B1dX6eqC4xreexkz1GoH7V2uiiKxTi3cEPTj3ZEDjA3GgFFy63DrLvRKLTD2JQ5koDN4N2vYPBn37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zH3itatByB6bom378rREHjAVof9tLtjAj9kyKjy1Dk4MQFnZWETCtiLzjia31cRoGMSUjTbkP4UBNqszPuFrMkf",
  "key1": "vM8DjSXEDZr82oL9mpzUrmAv5LcCoyB9dKnscV5ZQawYTJaCyQNXWxVVgZUPCJHcGb7QGyXViCyGvhGNnK6rb4K",
  "key2": "2qJW49nGJLJ8AkjnyWjGUuiSAnTn8f6xsBN7KtxkKispMKw28A2AwTwSQPb4mee6ysn6LzgAWDLfGJ9RkcRnbEMU",
  "key3": "2WMsXUdCt8iq4tFfkhDedpvPyqYs9cqMkXxw6ZqN2BRe3fcpjkXrQ46dNAPqsgN7yj76bUKw4CgtGVKs1wmrgxmW",
  "key4": "37ZUJpzzra7yppDoYjoEvvE4zZkk6bNaXnGEe1LVM38qNsB2XCokvb2bN7ikKN8ccshWodNf2Pe6eTW8j5RBrxLs",
  "key5": "3HZb4TzAVCXkSRsJ1i8MBAsuahcRWiTc3JbiKDyynFM7rUs3g2GA49gCTWWUQtZceb5kJfXj5wSw1kMnLR6hFaDJ",
  "key6": "2naJfUYGfb8jjDX8eqasVtRhHcKtGAzwHhvVrTSEkasVCjBccLK52evUCSh5emb8okbCxDe5xbU53M9fpa2JqN95",
  "key7": "5CpNJVX3Vbxkwxhg2UKu9cFB7PviPDkLjYpEVDJNYwdWF5B6mXVEHxfNXrHLkr8zaAiJLZgRSsXAYVbovbrc7E2N",
  "key8": "4cz2V49ben9Le7ya7Zc6qxWtzYCJj8QSaozWT7SSSzdXdUDne2fCK4JBQJvYV27vVsSPWbdjrL3Y1qLZvZBJYvWJ",
  "key9": "5gBVCS7wnxcYdWf8NRvFVeEvPFFuTdCTfeyqgJuF37rMTBRVaJE1jjdFKGMkbp9gwaWwenpgG3k9Bq164YeC6yG1",
  "key10": "4b68J5dircjpstEWFcgdaAgpG1H8f1kRVukwJZ7Nj65AN6pAJyzQJCCfuvmFDP6CfohhTyY5BYfzsKdeUVoB7pTT",
  "key11": "9jpxBPAWzzkxi89tguM1w8gdh4YiCVSJ3TJkCviioLPfWJUvCHJsSZH6m6tnYruXwsUJ5TyoqhNzHX3SGEdcN2T",
  "key12": "2dp6pstc7oYqWYCusfghowHcStMqGcdgdBtrfxvQ61uozo8azqQcug3SJJ1Syhte1brG5Lq1HZHMvrz69tzHXcYL",
  "key13": "5rJNwpyyc3gcL4hwJH4YSLNrcGs8YkwqwmgpFsEhHP1cqysvdfa3uBsQcJ8N7vDM8U9LvhjG6tsNxLADYi2dRPkv",
  "key14": "4hWzyCRfpQqKHmcuLTfB27QmhiK6K4cigDCT6XJDJbZ8JwiNYtWjhveh8agndLmW7c6kpsfwiZdNUYEBheoUmE6w",
  "key15": "3iVb6uaLNkRscSWePtGdUhhMgNZ39V2LtrJeR9yeU21iNQegiDS4v8xRxV4ixYUaJxCPfFG7BPPSVXmuGDfMm3sT",
  "key16": "28XCj5yrgnSfzyiND68d5D2hJUjMQbbKk9QwVGQBgWR9Qjc6m2SknqLam2YaUczZ2q5QpMPTrvkMEtYNJbCxbk4Q",
  "key17": "2FiwaYq2HdhgZDTpKSzM1pFy3E3Qvztfy2qpCxCuGQs2vwxj2nsfGWqD1EBpWZp8ZZMrfyz21zA3eW4MK9FAM2Eb",
  "key18": "2sBchSRQcWKutnEFYYHccVKYDR66sW1VZKdM3nsnjawFsXyigNS5r4HabqeH6G9LTrZjMoPBpgDuEwRQbUKbEq17",
  "key19": "3fWMFXDgFp4WVHcFoztYE9nW53Lkqdx9bMuybfgzAjRGGbJMPjqZaxZFhgjSxMY2eR9Z1mXVrn7oeGFEMgfXD9eK",
  "key20": "5tGDXK94WYE3yeZu29C2LZrA4cQCQRXEZj4b4hjgiEZhhZGCzUQSr777GZyFdyRzPzmsnQ6aQB8rp9ByJriCqpPA",
  "key21": "457KTLdr5iFzmz8unda2hJMSn27rfCxJDG3PjPumMRucsDHCDoVqTQYfA2h27tDVk2M3etUkj4H6hy7uVWMdjFgH",
  "key22": "4k6Me9nWVdeneRRJZ3WkS8j8qsRMHAZBsk8panGiiJ8YsXfSw2dC75yTBY1DmbbCdmYBojyKBrzMmcbHF76dj975",
  "key23": "7BoiTBRXxwyW5SwKcDMLoZy3vUYhTMeGXHBR4Q8iQH2Gkido6Voy6pkC1idiuoWB2v2uVn5DRigHfdMwYkJDwdW",
  "key24": "8cQGiB9KUvuGrcWa7WWt2Bg7TXkoHQz6DC7UrBz5DVkyJtsrxRWDXCxHnawNhGz8h3mrAi2BbeJfiQXt2qmTzKX",
  "key25": "cEXMngFEM7mNZFGou6P4dFD2DjtsQ6kSbKe4zX1amhCxtHSMPGxKJT61SF6vofrGpWFA2xhhxaveRmGNjEGKgLx",
  "key26": "5biqmX1p4PG9mx2FBJh89xy43xMCALe9gimpGFDS63qKbDdex8c8kJ8fc6sDQrJT4MgNFCJJLbVqGu3WTizPFcWL",
  "key27": "2JGEJ3Yo6cu3RbTMhdCzAT4AAXGs6p3VXZ96XkwotUDUTbkC2jmvi5TKDTwC2E34tAjQ89SdkDR1V5Y2hgTK9CmF",
  "key28": "4sKaJfqoHuPDKHuN1tR1yR8vLjPUKAjvP8Gq7r6EYh3zpCU1BS81ztZ2GBLp3E5NxFW4XncUyjRNbTFeCdRj2AwU",
  "key29": "2xVwMaqe2D84cUrhcXXR7bPxBfyevcJoy5nqUrFN4ensqfKwvkMJiG45Bqu45oCYJjMnFxE931nhcC2BeWpyEz4P",
  "key30": "5kt9rgkaJhH2EeU4znZju2kMM7iXizfmuxjsj5mXADCRm7j8vs7e5H8eHcPMUXD4Y9PH5rMU5mn44BSFcPz1giUo"
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
