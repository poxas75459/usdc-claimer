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
    "3j9Xk4yiH1QmQbJ8pgwrYf3UB9x6xT1348YLtKLZkp2bGH36m5tCzbSAcjptPqn33qRsfqa8H7yVW1ziWkaMc9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5daqGeAV8Rrv2fGFPy7JJ2nDXJUx4siroJcv5xBRT4XjXeSrBzHCbp3Pwy1P2ecxWtwGsZFJf2gMuu7QroUJsE7b",
  "key1": "3ioLiejUMk1NkeDGhMLTtCofMRYrGYqFu1kPYNjydixmgu4RdrJSZ1jDMgHQAtkiinAw3NP7Qcunu4TSUf9N9bn2",
  "key2": "FPMkzhhNahrQxayZHt2HQGHgTzwhJjYQV1aiRTbHzDdHmzR9EBx83ZhK6VHX9Y2hKHfEB4C7WNwx9cVLdkrWKwa",
  "key3": "3THfxGdDV7jipBF8cWZdTREPGUEz24qKAFWGUgRseLFXmaHGi9xFeVE8BydosW4Bcmk4rbGj3tatkdXCh9iQowA3",
  "key4": "2DmupKqXWYEE7iTBS3GzPtUVMbtdySLS4Q2GmVkAR7m8jC2uuiqYiwPM6wM5etCN1ii4WfjYEDUDW9TKMtsbhKKx",
  "key5": "2CYcCXmiRwvo2f6wnJn1WpHxZJdWifT5gpMZHkPvMQFMtj4hpBEMmskw4e9RSAqE3Wzq94RTUYU1JqTUhS7wD7Yo",
  "key6": "5626zJ8rfQUzTCZgZZLUroJscK83xoJ5aGNr3psToYAjh2dSmVd18Ahw3nvVj3opc9i322xPCVDYmZ5D44MrwrhP",
  "key7": "2AR3cdNyqkcsHLsAMnbpnz58UNXiqQzqbCnnhAoMky5XSNnS4cADZ4Q9UAcPxJNaDBDrCMh4NTe37BKY6ypBQqZw",
  "key8": "4MqmrHUsxGrMsriF1EXsCrex5o5MkqQuiGfMpD5dsKViT3wYQfD2XtH4fsB8MvRyiKt9XQ5yQeGPomui66pXDcDU",
  "key9": "1QieYS3JV5f9GxCuoAS68s5GpzjTvEEDeCHPuvHAQB8Guk2LsyWCSD6mJs2w5NqLAyoRoTSsVBt9yTqbef97ySc",
  "key10": "3orN5Q11rtEds7VyWoxrh4WiH7Rg8qkfKwHbjYyfZE1F7qnyLeWnL9kMB2yZGqPBgPnczB4vVtQ76MdLAhVQX2jH",
  "key11": "UCJRbRbYAhCB2hg41puH8ZuyBBmQjk2Wptx6HHqczUSZiRjgcA277Hj5Hnwg9yoGzakv6oAkSDyjeC7WNwaiXSd",
  "key12": "5wq2y1bVhKeFTSpfedirBLNb96wRseuxmnz25Z3jDGf98q8jUdMmDxNaoJkfvx9W5Y6ovPpwReb95JiXuDsziKSQ",
  "key13": "4hnP7puReqT45cMAdymDYQ2En1dokah65Sobrgr4dfuqBS9yEmZx6ca33xtgFyW68Eo82m8tDFFsYCHP9zZNQE5W",
  "key14": "3nECn3Yxu1RngE6AoQo9Y6dkZ4ay3wU2pb3jmgQeNSu76RnatqrwSjGi4vK3PgEz1Jk1c1p7ts4AzhSNAtQaxKR8",
  "key15": "34aR4s94QtCmwBvGnBiPd5V9AZSKgNTZknw3RgBcGVEN7ef195aMTEYt9waCfj2AqSnjcB1vEYrTJpiDzMCZYmCr",
  "key16": "2ocAWwJcVF5cnNGByHtDxJtR7nc9UnpndU5FHM8ihs3XMfhSNFr9keMutV9MEHk6K4nebnGVYNcjv5jhL4L5qfCp",
  "key17": "66jZj6zsWYLKqt9ZFxnWQQim9ir56ocDGg7xZChCmzyMeiCRJbNdb65c1PMjBuxm5kmvPc9MZbEXC7s95KJDBPjg",
  "key18": "3a7CDAVQu7QSz4uQSAVL3sSsE4wzhVKRekJb6i3aKbjREs94UR6TvaSTSv4qNCF95u7REFReTcXPQNByG6WHYZCd",
  "key19": "556XQTfJksCpa9wWxtnfbDT8XwKWEzyVouFNkjJ5GLmHJdUgEDd1adSEUJWqh3J8QkPdYoduWXyMtMhE24V3em4F",
  "key20": "4LbmB4offt1YKTXizjjJwYdUPXtxWMaMHtF2RNyEaQTtk2ZnAqmjGoF3BYAdMVKayqRj8C51f158V4W9WxZQ7H3g",
  "key21": "5ioPc5v89W7PtjY2HiAzNfRT9GHfWg2ceh4wPSUXFGpZ6ygixoiLsLZmTohgde49ZyatDwohNNrprEXjSgbXJqF4",
  "key22": "4jGYHqN2JTPurNQz6Cc35EofrjJzpj4XsXc7XfBfr6TnZWUMnWrC7o5JYcdKibTkRr81D2psQpFjaqFgtUJbALTn",
  "key23": "38QWx831JmDay5iztdNqrUynEpe7VMCwRzeyQjmQAenq95iUtRHQ9YVW1ETvC4F3Dw3nnHbbAGWaNwVYv7vxR5Sa",
  "key24": "49WwkB84fKRMjBEzHkzhik6vrryFJ46aqn9vnHikWLkp4BnvRfC2p5hjFvoknTfFJtHZMxo3E3z2xBDPeoUyogZE",
  "key25": "3mJhDrfz9mm1gpUXC4rv4DZrxRCJcHbXXRdU32jagdxni6qFz86m6pabrjr6dANrGcHYXYcxtFefsfcKneMxow3S",
  "key26": "2sfvaTNGTX33FYULQZgkz2GWNSyfo6VPmPXgUR1d1gQiFGfYWo4U5xPL5v3KAEPGwYbxQzF4KJVv7vP3FHrYmwCg",
  "key27": "4BsaqPPZWLa7Gz6KqU7AtafGjmTYsmm7cFXo7sfAF7PVYMs7dakjpq6FVbaFwvZxQg6MgxHaxdyj3BCqLpb359P1",
  "key28": "2MF6TLfBdafYGhrQa6ZH8FF4BHuhsbP79wXKBUuvCnXdzN1ryYpWcHNYPhX1i7TKMET9FWEYTnsaXfRxKe553EfX",
  "key29": "4Xg1RPFQbN3smGv9KRDYsfJ7kipWFpscEjs7nMRWDzjkark8hdMqLSoZ2aYrFbVxmVBdRJ2Dpa3f5zfm9Ts8ZN8s",
  "key30": "2BFnX2qEgWNoNjwTvRLTpGdPAzPAfPxfRzNg7Hcfhb4tDeyrdX8kFqQCfrdaXCJ844WxLp1v5AfTuqBPH4evtnpi",
  "key31": "3uxo6oorPwmsA9aogMtGPPitubEZGik36W5gsYVwgPcZhsC9tvGEFVFhGLdySzAr2cLaQs5NXxAFVpwKMKLjNya",
  "key32": "3fyo7iThQfNXFH58xSneMLtxRjPLbvyCRi8H4wVP3g6tMmjf27Wrv1qRL6y7G8cCo124Md45tPbYAHSA4fHHDVp6",
  "key33": "cJsftrNM8QuMFU3zN8jR17Auo8w9uyn6AJ5Y7NPeYZwhfiXrro7gFj1va1shohogub9uRdkb1ayxh5B4B8JVbry",
  "key34": "51M1HTazeoDN1mktVGQpVNjSfRjEQ3dmTSEUjAWZBiJNrvZQNViNAChUK19kBqf5WiFFJQ3yMmoTkKagKzXGQH5k",
  "key35": "4yiXNQuHei99a1vKVdfGbb4hTQgick86htVdv1gxskrHZqvb5bwrWE3sJJxhQXFqn6CkEMRke7FrvVsP7E9rKo3o",
  "key36": "2QGBVDpqC3T3CDBCymAMHZRbWrBaxWJ5RSbWpwRFcsstbrsYMTyiYd9T9NMnDSooSMwNdyaTAntg2dtafBGNBZre",
  "key37": "4E5BR9NdZ3PpCwCQyKppAiabqpYAUYCqCJfWnbTWjkheBBaKeMJWsyV8ixmx1DwH1kmg3o1oJ3zAkTupTE42rsaG",
  "key38": "2HcRtCPvHskwm3iaKWfZN6ojbW13Vo3uFkX4Kfzzm3f6PeUXtZfH3S9XFmgt4FLMQ27GhhASCEwPv7pgPStn8yvp",
  "key39": "3oziGmvPGGQwBnDHP5d2EHNXFk3JTsfKKHMVciNN3WZp1EPqqhP9KP6zag1sYhMRp5DLng14b3R42XgDW6aiaiju",
  "key40": "ocjcmAdjfTZ6Br62hd6L22CYGE47vnwQCyccYzJprBQCLWsscYrbucgRDUAeVDMpsdNMMQqL5h4Qv5hHqt9vR1w",
  "key41": "3EYDhsfMhPTzSv9VHm8vifEwUjSNesWiPzbhwJU83igV61uWcQH9pkAXnNPdoBst4C2QYo8ipTdat9WCfyR3zugp",
  "key42": "4nYZVwiXdMpSkynx7ij1mPXzrXfBhzSSaPbB1c9yNeyePrH8nT9sjrx1WXSY4wQJphYwxE3hvP2AdTYLPAp7FgQv",
  "key43": "4Pf7qsVGiUF4BGYT6bDtqjWrVzJU6SYL8j21MFcG5HzvzsUa1HQQ5kBGJ8UDvFCBdWA3FAUwwpLNkVaYFzvZMdok",
  "key44": "z8Bnv6ryy6fqepunQQ6txghzvuRBnac9RMauhdvMhPfz6xETZivUaXGExJSPZrBqohC6hdiMhrQG9QbJBQNfPoG"
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
