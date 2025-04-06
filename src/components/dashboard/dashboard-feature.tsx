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
    "4q8XwevNp4cQH8gv5mPtJAmpWHB1bJQiucg7QpugjHejVmv5x5fs5pehsKgUwFfVDPa42kySdsZcnEUF7Quzn43o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544kRQQderxHZ1Aw8p2vEN2vepyNeUwp8qV1k69NoUVbagSe6dGMy1pHfTMoFzYqu5iPDFAPnrPjCMFsvXHR1GoR",
  "key1": "61FSfomwjUdQmhQ54NE9QyUcr994PZHHfTxdj5EtRd6nDScHRn9FftM9afP3e9yGjcU8gxb4YiwDoBFgwhzGTiVA",
  "key2": "4GtK4iYnn8MFujLfkmkYMBFB4ksEsb8mL3mPyadFByWi9E5Getg8FzyAfMVZU9nZfJfm9NQFqvzNRQiid9tLBCXM",
  "key3": "ppARMzhq1PJxTzEnhazxAAjkDZ2NX49Rizo9pxTXHv7LP8Lmfwy1f7wqzP9s7isMtnLJXLwjYR9R2Y1Qejf9CDN",
  "key4": "58hNYr2j9HS8VmLThEBYRKaieC9UewqpeBC9dcqYuGqF6wthsbyJwqYGtQn8VCHCkFxQDVHCUzZHcqZN3p2Cj9bw",
  "key5": "55Um5AsrcWDKTdggKMFiecmj4QwATykkAjYaFQuMVtTM8qziwzm45Te6RSHyRkWGorBMN3jw5dEjLznmtGmhnKA5",
  "key6": "Q61gwNjxPdCdTGDnXpLiPqffjt2ybT1HvnoLhLBEShBUZvUMLvJVaqCCVoxbjfaeMkpMHBQeBv65eMtaJhanXaw",
  "key7": "642VmuKaXFmqAVAmrk1mYen4muF5QtSL7DxHPo9iEHF2Dq4CtCwyrBWMYUt2zJRujXfJvS61SmHcwBsExduC56rS",
  "key8": "4EjNzmek3cz5sqH1XkrFNjJ3hpL853eYP2dV9RLS2cCDoD8iB19kfq1fES8zQM7atjbmY83j8H7RcGsP43RnpsUE",
  "key9": "3u6epcoEoNPCLDX6RA2sbUnG2SbKiDJPGhiudi1coYS3oFdRyCtVKeknD4xFBrRtqEbR5JjbrzyCt54z26ChNonm",
  "key10": "66U7ijfHUDfVPjx7w26g9LLF8ApSbjmJ8Y7tGPSuKgj87uSMFoMh7UnB3WrSnkQV15y7awb6vhEYA2Vun4mMxwJV",
  "key11": "42q5Kh8B3Hk9So9p8K9ve4rKujcyVpxHo3M9SQoVPhtmNJSYhshNXu22VmhuhRh5HK4J3bQRBGyJXvBG1iaP6zhm",
  "key12": "449mVNKrwVvCmND8tNjdF8TSFTxLQZPmpTUALyxKpJGZ4r3rhEJcEbdhRu4Dg2Qxrq4uQ5dkL4otb2KqEm4L7yk1",
  "key13": "3LNch5tYGYU9h2KRqJ4UtrhnkBYFbsk1oBXxjgRXd8uWu75K37KjVvC8eZo4hSQg5Ta9TCQ2wYdtuapji8b776xW",
  "key14": "sARmwUJEEAr3qR971kDsW8usLMCw2aZ1s2gQW3gvR6cVC8jh2N1UHBuuVqkMpsg3hMz1hTSi5tUeahj2iaX197M",
  "key15": "3Yuzwy9k7Y56KsrvZ1uxhimzt4p1JXN8AYBMhaaWn6k6Ei4Ktj1R9gtd64NkUnfRQaztDpLUBz3j5crWsEVCWurk",
  "key16": "5EgLf9eW9bbX9EipZoQqBFwXLpwGa26XfQoxCd5pucTobVhf1xpnnH6Eg9C6d6TQYVYbVSWrRzGyrFJ4DEFMY2oY",
  "key17": "469CwEv9Fkcgt2WivhX3UbBmUo9wQzSU13WLAR6PSMSboKWt413WU24ai4ko4mcraJ4fvGMNRbpWEjVa9o1dDSUu",
  "key18": "5BBuVsgKGatPnHbY97pLXDGSrdKo6bA5WSVho3SrSEF8xgguTT6WaRZqfPKbmCKQWw1uCuwrUtCGKXrfhhH5j5Mm",
  "key19": "7LfkFRk5oE95kgVEh7pJ8disjdw1ZdMNEWWQUftgkB4PNUxHNY8YuFwuTqAqaNPv7nU1uVnDxYH73L6reNxFW1Q",
  "key20": "2KGMmnhYNgibbJNHhUtEKyANz2D6DdtspNXeY6YomdwLM4KeVYftYADwghUMPv1TWzj2psiUTrYv3sk1f84oTyZ8",
  "key21": "Xs68vDBT1yEyx1phycwDBEJhAsP4E8qfgQLTEW5xozyRwLHXg2hB1sraE9EqzLGSbAj3NagLVnkSxYj5XY3vh9G",
  "key22": "2nbKMD7CnwM5nAQCdaDiQMyBCtPEstoErjMByKd2reDyq9ZH7k6YUPTVzgY3xPX1XmHGaA26hMCJjKP9Re76Sr2i",
  "key23": "2cMe8Qwmgt75edV8QFE9WrJgtXNNvnZrL54V27XFZkho7VRjKmbRDkyyknoTLhTRLPAxSfD8UFMohAXNNqbohXA8",
  "key24": "2t1BK8ivyn6sk2ZUGnLajafMniu429y13d31PoMzzwhLf7Fmcpjw9eS8egSw3L3k98g6x5CUF6RvjtkjunsuwEx4",
  "key25": "4rr2STGi4penZUkYQtLssqDkUW7JkL7aKVjBrBoUJN197UhUd6wLCY7W76ij9WCRonaQz6rcU23J2D1RXw3idWE1",
  "key26": "3ebXjNcURSBGKrdihqjswVcRbSdsYsaFBiuJnpmLJF3PpFGS6pSBfNhqwZZxBTzRmBAPJGgsW28dM4Yq89gJ6UFq",
  "key27": "38C6uVkeuUdDLmdGapXZWx3RQ9v1ki8R5GhxFo5Ex17iTWnpvAYYVAfKG4b2MYPqSgHqx9S6Hu1GxN2b6s7QHepY",
  "key28": "61vn4m227vaE4fLc28UeDEYWSGdxBoKe9YnAgJMMDa1FU6BGSwcuy8nCy9ka7i3Jk5NV438ZwGBkXYLnkvFzd6AB",
  "key29": "2W9yYDyEd2GtrfUFPww868Zku4mLekJmVgrWBaMZaDAhprrdpkrk3eL17nyPrmWfwXTT8ccWvCgdrN4G2an39YfW",
  "key30": "3D2JXsBxdHowQNvDPCBvTJUhcD3BDC8YPyVHw5MtvqBwSQG47yLsPFNMn6R3uLEVYSxDa9GzYF9Zn3WScS9YTipX"
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
