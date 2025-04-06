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
    "4YSjSfeJ4mCksTk5yr3F63vVSn1VGMZBysjywQV6HFcHHgd7fYkGfJBs16KQS6Ymc3aa1VfNDMUc43ZwWytV17jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SM42SVewrFZZZ41izVqyWCfachPMTmwqy4C2KhK8cQb9yGknxNKLZiJwz2D5g3c1pU6o9c4VBDcD8a6cRaa6YsV",
  "key1": "5ZBpFLYB3vFkgKtQpRr8Dtmj734zGtXuiyXsjZvGdxuyXSsAn9atVbENfuvDdE45gwymurxK142UKPDGH9eQMNiL",
  "key2": "4BK7JjDTaNPmM4sXJdwDW6BwL4LEDosTf4E7NMvoeMeW6d26AaabdgeAzfzfSfC8zJazbg75kU7M7bfJkUG4J38y",
  "key3": "3pwjiu1cw6wR8FA3mpA5YQv1zjgVg29Sw3LxBQHbzqmq9scpeyHTQJAwdr1wtxu8p1p28cuqp8UpSjNAFzgfDE7v",
  "key4": "oRUGT59GQNDu7gn9EbLkwQWSUB3PxNFn5JcTtXnv7Qm2o9ppWabDSLPEH6xbWWUgqgsXcXenJC7mLMVSWHFUqLT",
  "key5": "4QMYf8nr6HTm6fJxvwWsazqi7VZCJNERqR54p32x9FGFspanLx6fdMKjCvmqfHYTce47VrPWFdfRa6ynA4p4adCA",
  "key6": "2MfXGQ9MWCJR5YPHWUtEyjG1M9fVPceCwFyojiKf4NCMZDuRcCbXFvpyc6D6n7dQNQLvtmLWdPdXaknQVUwrtiJU",
  "key7": "23a4cAcBfjD5SmsFtodq8KMcRFUK7LL8zPDz1o8FULh6tzz9YtL8QkLMR2pJS6cH9gsYznXE6d6aH1rLawJaMrys",
  "key8": "2TwfH9EiCg9Cf2JEjd4zuutu4QhcDiSnN7MSnmu3C7hQu7UcV8tAVuVHNGr3Aw8W9Y2wtk7Jfs3LQSYGuqcCBxAN",
  "key9": "4noaVYQGt9TxtNWFqRcfyMH6khCHuUL97LovTt2gdbdZuF5Qu3ThV3hviEAhc2S1RG1HBBJ8EUw6s4sUzonyiqvR",
  "key10": "3P2Zo2mFGdgi7JK5rF48hehDyGwTgp8RjYtDJQUgNKB3ZEqHQvbVicZZg7VRaP4g6GRUXHp4LxxFMVJ39MKMfYf2",
  "key11": "1eqvjbbUgeBWCbZHv5CEji3pnmJggaUQXf8rtC6o78qmGuHGD8BMcxGV8hLkBv1Y5UhUcVrMUksdC7ExCRMrTt2",
  "key12": "2Dn8pdyWw4aRAurxTiWMvXiTDAeHFppvup2pMz9RQ6TFYf6gw4FwannHW4fycwtjo82coDkzHidqHqNrsqRYZe8Z",
  "key13": "4mm8WnxVsvyEVF5uwpzPYpQ6N4eAumTvxGx5JJbZs3Bn3tXXfouvyWgTuaYGRDUcAxRSxSjZsCQrKwcXz1eyEA2Q",
  "key14": "2M7Cab7XcXNU6KB32oxf87HMfC9dEbnvg6NoiU4igJ9U33AHRhvfvrPbx2Dj992YaVXSwXxTpebpttSBMvCvodM5",
  "key15": "ZrbD289Tz87HPh8gJ9SSFQyxYVnArVkC3trsAF4APwoh4EMxow1behQ6u4gWqV89jWi7LUXwSowxj3axr6AZ3XG",
  "key16": "4DHC25L9mQesMU5g15UfBHPeswbJxt76wETZLziaK2rSTb9hdbhSrwSYmH5nZZYo8hmz2fEFVkUhmQjfchggKp1i",
  "key17": "2PcLQQAJdUErnb8DoyE4QvQqkgapyRMpaG2W9TVMA1XvTpN3pDwzSAU2s4NXgtjymXivM4BEBsHaPE5Nv8zWuZcp",
  "key18": "3udcra4KP2hMFmNv2eieXH3zQokbhCov6xPvcPoUs8DgQYZR8A7FCzdFwpoTjsEvTSAjcTefqkeLwpisR5mVWyHF",
  "key19": "5MSRCmL1a3d11ehaixuPm7pDqZ8tHTTNkYV59TgdTfPH3NqLGQiEAMRzDE749ANvfCyMuJwTGKrX8p4rAt5JTy8G",
  "key20": "5RALsgBPFPj9iCJ52Px6d9tJEG3DejMhtWxJzaThdZbiXSfBjysrLyzKRfNH84i2PhdbNB5htsws39hVz3ZXytkf",
  "key21": "5fKanZ2jpyMvhLtJqh5L8umF9gRktiXhkpbh5MiqEGPVcmJm6wqNA4BvX8AuhU7yQ8c9DUWz2NG64YnTtbUEmoPz",
  "key22": "2NzxMNBb2Kzw2YA38YHqoZmN8AYtsHGAvJMaJsSuvsau8aRHztMtexyuYLdKWZ5Ghz3jYZypXJfz41JJuvCoCYt",
  "key23": "24pKc4Qv1DDP4qUciWcHaqCPNMFEYDgBpcYLqWfZ8zKtzRLZ4du7G2UvBrYYH6hSyQoHTS7846J67Qv3b9ZtkvoY",
  "key24": "275aeKae9XgHuLAxTSvb22zUbM71Wh1rGbhH5ZZzTNGEE2w4Sna98nRxvVphXFJEqV6PwSjbNHpTHq7mLJPkH7Lt",
  "key25": "5xC4CGHNx1vKofAZxDoe69imVg1yCoALbV6GvwtLSEBT3EbaM3JzDkYD1YWdwn4zTxjHW6SKABHXsiW9V94WicYS",
  "key26": "A1oHmRwQUf4v7aEXc3omCjkF6M95AqDJYyMoXFXP3KLMzq6v9cPonADtFs2NzTAGQ8BUGJvpyLWTerLdk5YPpSf",
  "key27": "dF1cN4hR89UoPjwysqhu4CbJwH7nL4vXDCkwb1Hhea5B2cy74QHTKnAeJbUmsJezdepMy9CEwVDPW4c62enSS1a",
  "key28": "4FEApqczMubBxpEkxVDc7mp6CKP9msEx2HLjyxngnVGsXiS2B6uZ8XuZUuqetmYn7n4w9Nw5mQ9nV65h2njW144N",
  "key29": "67h3rUMnJM5eVGK9cbnnbAicEg1VWqtzTbsLU4v4k2joxAdeRzxEo2gMzXKneHr56bN7dfBk1rwpHVkUUwiisUwz",
  "key30": "RbcBuURMruvJJcFCzmXGC9bdPsNpE3FrNNnkRcVcY2TUPrdDo7MyFVcwxDsSX4azJJp4L5acojcD7FcJSrorZFt",
  "key31": "4tKeVmUCTVosudLcsCww3jRWDv9rv4dBRF7T1oRHm3qfrvaAwhDX26KL64seW7tYfFvVfEnDY7nVQ8rJVCNMhteS",
  "key32": "4W5fbkPtgArMFVBcbbvrJs7McCKidud4N4D2CWkVbTa4Z76fiMBcerkpoX1icvDy2VmFMzSNdFkJcemgWqrg3J5L",
  "key33": "3SWjyWj9UTzstGvT5WgGBaxhDvtCHzdPpCMovwB3i4RPBEs85RR6ZJYsJChud73sxKxmBK53xAmSXjEK2H62Hc4Y",
  "key34": "5QjCZ5aercPxBcwhK1xYuX5upDAu6y3zPchVDZ4jbB62wU6tKeMaiFPwCubF4wwxiYMQAfBAgntbjjR5qdCPXCnm",
  "key35": "5CXPNgLcdDkA12nJJXXhRFjjvcKruUkJw9BMPHuj2L3QC168keaGkvTuSR2GTJXYeCNtHnySryukeq15mAMNwPtK",
  "key36": "5k6vTwSoNEvaekiE5hBsKUMV1skV2m5EJCF3f5j5QZrpF7JPnU66yTHsMEM3rWnD2HDTiAMfMVU1wnRf4tq57Co5",
  "key37": "8FZweQcudnrgUZKDz4YvnJZMDyxRJFtPbiQVeev3ZnH2NSwV6yhDryJoQMYS8MWt7WoDg4iJB1zgr5eLtNPwZBn",
  "key38": "3CM9n7qdp4xqdpEBgA6BVkgjai4iFpNRYhUKPS4b5N3Fe4vWkDQxGwX1net17Mi6j3zkK9Prz21HHisEPRiLKduK",
  "key39": "4Au6TSU1M4R6fCkMXXZUcJMB5w3TfDfrqZ8bwqW4a2Hc5hx2oiJiKbPjjmVGqqEQ1Ysbw14ZvnxJdXudd3PVjMjL",
  "key40": "QNNkxiYKJPfNhFUygGYp4y6dkMu2hVhbsVhnBNPbcZDXAEEefvbnNdpU2bb1iCGuZGqofZLwmCtGJ47GtZ9rFMe",
  "key41": "57o6ouSKTK4ndqmP7D43tcAbStinucaLUcQm3CCejeoF3PJViT1hJKxKS9i4UkXidYfu6TPwqb8djFy9jpq8hH34",
  "key42": "8RRDUnRpiGsvPhTF2ZEYoQZ5pBMxA5qHESt7ezrGpmuZxdExbGZuY7hTaM6kJgMA7X9n1rDgenWk56Qhu9eXd7X",
  "key43": "3VRsU1nsGcbgR8ySFWbtKgmpEVtQx6T7EqzK38JTUCQgMZogMSuE1kk7kSzpSZnfznsACUgGBPkoK9NV5ozufsyH",
  "key44": "YrC2CLCeJB61rpknDBJRcd9fk1myzKH3S4E3jrU1LUn6hP2tfrgdmL51WDm9ExWx2T9ZsirZMEv3guhmEPvYdBx",
  "key45": "5XaPqDdvQ5Wwun3tybYDTMTJeBGVuV426z7up34LbRq1yZFJw2j64QFsRtSo93nT4tYiHzkyEH5X7PPCKst38B7B",
  "key46": "4PafnUPGBithaC6PjS6m8jiha8bytdMXyrvst1rDk9jKQJ4Bc5KAfmavHHV5pUrU8ZzVF18fRDpVAohWnZqLqYo",
  "key47": "4Hz8zKDLCzEQTaicmJdUGptr86Jw7UXSq5TLVYGmk7o27fWm1U5Wik8BUUkXH1YGeQLt8WCRSNHehKAf82zNyCUR",
  "key48": "392etZAEoPNdyVpCYkKmsvgFsjts4qiErATD6SCDfK4RxBdnUbdm6PXvjMwEw5PdqtQCrx2kjuCC1DbGqyyjeRES",
  "key49": "3JAeYF4rnjYM1EjaZNT2oPzz8uKV3pYVJEEm1ouR3Kxha12Vurfh9wRfYBabtMH6eSK4QupUkFic9hX19zjJrEEt"
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
