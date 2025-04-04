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
    "5bvFWSR1jBp5x1wqsfMrrUmENEJHoYCLVyTr8rvjVfCHxBu4MEvUQ6N7u7dD8bs59xtiT1h7MU8t4kdcggh7rUTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qc97c3KRdXbkzuEo4A258k5GGbFxopM4n9t5QRZgmv3bciLdBxSSWyyMVsXnNjDYJyCPF5YxiZuM5K8GJrY66cN",
  "key1": "4utV1u75A896Eegx9XmG1gPeFpvoUAiVLCHvgUtZiNT91zCbccSaWZM3FWKRYqVz6rGCmzpwy7XTeUi5tqJD2Hju",
  "key2": "28qdAAXxRBKYxPvat5SWKzv6SwBCL8ZXFa6ZYdVtyEE7m74b9H3MnByYKuZBJsAgtaCRmyeMbZ8DEbuMUPBSU4R9",
  "key3": "2NWmsbXBnr9nPDxzNZjvxjdwipZNtQX7jkmwYC9tBag4QnUT68j5apAQUFGvYemxxXvwLfjDEu119b1uZaMoQ7eT",
  "key4": "22pQ1VAWscHMWYzQDp1bwfTUhVqzT3NBe19SRV44HZ33xStS9W1XvMowUH8TiHuu4SeNmUhxurQWXSkFDebVBz35",
  "key5": "2zTkSQ4YXzHjGjXToVtSb8WuP49dAgEYYtzhJLfRiJkoodPHJx312zAbjUHDmVfzcy6PtD4bjUjrZoCa17eRnxHn",
  "key6": "2Z5QxWfwhdR17X321XbjgB7bN5W1FgFbC4FjzyoXvMnjDvGyh4VwnLP52j2L1X2cGqP9PmUiZn8EKHrF61pnWvE",
  "key7": "5mgthSDZENwXNzpQxsQw5dN6b8BNBUhabuY3TVea6L7iPUFNGqLpRTuYp4uQUyuF2jbykETSzd2iTboZyViZtNnL",
  "key8": "5S7EU5taUrPdRrNc2ZLnMAGs2CirLSAJbscQTA9WQMBDp2hKimRtFC373EBw2wbEtrZZAdfCU8i33iaNVRhT9X8j",
  "key9": "57m7AZkFTfHo63LXXzNHkg93thydB1Lqm7MZqKKpobwXiZmepdnYXRScshkZ6NDPwvTta2LrjMSVQTPLN5x54fdL",
  "key10": "3VifNVWCJuZ4tNjhiNnEeJm9SbuFBgQpzLwDRGEfzzJA41zrxLTN9ubYjeaqmhp9oXNt9P8jqtreDntoeScyd8wk",
  "key11": "4E23orTff3qnKnAKBWVwtV5QQhqVnAgFNkKhYNCag1sQjqa1NMVENUMV4JGCdQrxX8XbApoKZYS1F2uMMEfoLp8q",
  "key12": "D271GtGBscMDTyyvBaKjTRSffCDapPDhMGvbkZV1uqDmdwkj3iKRjthVLnPKgVeuj7h25Hc5aKxvV8u5T7t62Jf",
  "key13": "J9z1iemywGonmVr3YHNpxoouvNozqtqCEWdfuT6yyuuaf9nbJoSyMtbn2Rw9Wc25wznCisyvsZWDiya5KnBVH9R",
  "key14": "515LmABDvzh66u4WKMp89uvhKuQuZayn5tyYSL822bFdEarHMaptrd7EWp9DHK3fWBBQFmcgDMngu969EmA6NPNm",
  "key15": "2Rr5dPizipz34iVwv25Sos9jMNbSi9JJWtkbTQCNA5umoy1YNt96vCvHg2ro5TG6aJzo2zy5f6qGTifmJut2Mu8S",
  "key16": "4R9W5Letb2YxK96BVyZGgcA1UNDgnUXgu7RNSZMvHAnZd8Ua3JzHFkNyhnt9GF748vddUVVgGtcZ8qUw64Uor2ev",
  "key17": "3KKFgLSSbG7p4jQLmpW7g529peXZ7gZG9cYxvSsvbmQbWMgwa6LejJiZ7VCAiQQDEiuRuEEWrozcGzQeNXBXzcgL",
  "key18": "3z664Q9LpKjyuiuP6j9wAfbTvvF3muVQSgbidvRcHKrGPSP38TmsG1mdkVQBqdeKvBgBC7W2oGbv4y8SULg5boin",
  "key19": "51FKT41LZj3GdSRhhmheNpZu298rqUQJcV37wdxyFrpazoWMxAcWYyGt6cBXcVBFXeY5joc8Tt5e7aBYuEbPjevi",
  "key20": "3ksckU5van1JattDwdDQDwGZiCizmoJDPvCwqHanRvJchsVundKP7Yztjivy3Qzyz7eCUem2tVkiMjSvqehZYimd",
  "key21": "5zJuETddFWWuJwpNrARbtm4CphUMkrZFHP4SPpsXMX2pAXc1fRtmVWRPJypJBnLEZGu2dGYfvQVZma3FurYhH8yA",
  "key22": "5ahUtsiZ3WxeBvB5FmticzWkeJQPiFNURK5pT5zR5tUdBdEKcUiTr5SCEbyuWA5WD6VAdS6L2Ys2aJs7cGAixszM",
  "key23": "3atMPTDetsf2Xc3hZJBReCTAUV6oe3LP2dJFVKsp4QQeDyPt8Tr8XVhN32rhef2iG2UE6uRWkTrs9frZc4oVPtED",
  "key24": "31yPk8dDUFXd5CkiSVeU9TncnE5g7vqVMkEWoadRD2h3pUPJ1THBqTDbc8hYAAX6ZoXBTfu2d9zK2vzgQSTbSbL8",
  "key25": "GTieVfgszggN8q8M6ADN82p95K9hnJCeNhiAMHUzTYokhCGqFyGYmVXn43ZQPgHRHyJLeBtYFmxuMAoPXH3mg44",
  "key26": "3kCbCe7dTPAaSGcNGkwYAXBVe2gKAFV89tjBTEAzhSF3fYpuKWZp5b45udXKyqKvzhksThz51eJduPUFo9CucuRt",
  "key27": "54U4LyAtMe8GvgjfyQC4T4nRc4wBgMroGASW2y3LoqBKZffPehFY6N2Es8HDmiJSBMqZLNPCf3VB8gC9FQ9omNBY",
  "key28": "5xqV4wQP7VDhErm2XZEEcouZ1dVQ5PD3YGjdir5zpi3GdpfN3uiTXMgdqHZAPSwBpT2ETfgYQhLqka6X2TV1sxa8",
  "key29": "6s9qoagN7GLRNTMiZyJcswBXKy3KU7d9vV5zJQkR3WpQZgmgauQHEPJPzLfxE7fzYY4e6p17Yup7qC7TXpB1Pb2",
  "key30": "to2Q8C2muxsjk2KDgbmqMrMUW4qnxfWfpbdiasKWvFAV5QgwDfNyLyqZdNJvaGuPSfesNQymxfdUwJAdisRKQic"
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
