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
    "TuPsDqjhZ57hSjpocpqKSckFDZA6nqJFX8oZVLZdLPbyk7KCNstuoCLYSXZ6SyQ6PsgANDQykr6hcMN6XzBd6Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgKFMu2oAUfKLD2ZWEBqWxAd4NRrQDfzMhm9W8K9HZjJeTd9WQSTvLNfVa6gf3swqF7nvdo8RPeXdueTSwfrrKL",
  "key1": "2xUk4KsbEnUFcwJg6Qg8yCKr9r5fiRoXVA1SmJBwNHrrLoRG6PCmm3PocrmzRaJLWWszsdZHMDkUhXGTJy4VF4xn",
  "key2": "5XzNA8dRqkB9tnPmbRLyi6Y1ZYZE7dSpYgTG83UFt89pvGDPSjXejtWjbuEb4gYkj79baTxjX6P1kJhQ1k8664sB",
  "key3": "5aPBam8oG8XDZooJWAXmh7HFdJpTwCEyFWksFHymSizYjkNhu5mgLpPBBxAwNLiAqExqZi5nVwDDu2MSHEDfdv3e",
  "key4": "kP13hHZfA48znBSFuun4DRtmL9GznLtNaETfvV31H8AjU1W2W1RWom2nX5J41tGc93Ao59KWAjGcMsBLR36Ktfx",
  "key5": "4Vdm1mYhKQPMdTu78KUJ1di4mxorYXJwhwm7mnCP4tapS1MpGT9SUBxRUC8d8t527nAWT18A1G9DqaYvdYiPFJad",
  "key6": "3WFwNnuDZFos75eK4zHTSWWbrbtopiZjbun9T6w7WqPz8LTeSSDaR6S4aiCGfFnhsKyRD4uQP1o1Ai2dHKFTvYME",
  "key7": "pwe3BSFqCaekuL5neJq3NkxMpqtb35PxbdUBntpQggsMJZX27UzUL4XAo1bRdEdSzf2UM1dgTNGh9tqyf1EmVzM",
  "key8": "28wyhVNysWSVVDw3WZyApsP4gXFAxidLCrtFzLfw7G44mXoTuXYw1i5z7HaQh25nMg1QXwGqRA2eRkPPviGhcVJd",
  "key9": "3WZnrrYJfYTBWYf3ueraEGGgQZdtdRVzgb5nzmc4zb9eZSDwpoxDUvdWHj8HqCd5JR73LgfyN5RWGEPuHYJC1NWw",
  "key10": "49Umm7qKyxBj9yyvFEjFniYLKCtU7UcwMS3FUufiWNHYEk5ZZvk1A7ELpNaKjdPAQiQVDRT2Q5G5pzCNLKqe5tVL",
  "key11": "nce4Un6xJJU1f2AXzzQDj6LoBYCHzURTo2g6LZ6nWinK46GLSBezgxKMwM4GmsVcMLB1JkLfwF3vDUjGRbqhMo7",
  "key12": "4w2K49qjiuGFDAmqwoLqVcffUk8NzFsi2Mgkt24vTDyi9SMHtMpbN276SzFiMGU9TtrfRPgiXFsHxdrxYNe2nA6R",
  "key13": "4o3pNhxLMsqbEqTc28bE1Zi2bZ2HXjC6ydncnr1bapRJ1fRqiUpoeCjXmg7nQQ5Azf2P4RPXEuDELaQeTtUN2GAs",
  "key14": "2hULK3xGiYUQRww6btBwmUBmHepWKevtK519qhTo6W3dLH4WS6hTG28BnyPAfFhjXvLhWQk3fdBSfAKv5Ke1Re9K",
  "key15": "QM1myfEy3uFoiAxfvy1fL78jPmWUjyUYpZJUxYqVWV8uzeJTr95hUQguqVoW7BJJcGkLutpkRiVUGfXFRp1ER5k",
  "key16": "3m8UM8hzbpHdTSYnP6nGV1jbcyJmogfErozxFzGLzQ6b6tNuuGnbqu5ANwAaZjruWYPQGVupSaCH6ukzBpDbftnA",
  "key17": "35zfBQCkekCgE1NUHZWqfNN9CRZnSYTQGmRm83uZ1ojz2Sb6KWUmNZND6eqp4nsnitP1tzmmeCzdzmNNWZKhGgw3",
  "key18": "64EASwX7ZYGtqP54c7L8THHw8MvKMi9vCASLZRZY5V6hxwMH6UjkLJkuorJZ6W1op1sEsgT5dFcLarP8Qf46tFtk",
  "key19": "5kgNQ8wrPoAsDfQUZf83UQEaberbtEb5ws3W5rSANp6wA6ogy8Fq8yAqy7UegHyXRrFVaKvp46GZy4fd3XpeZE1M",
  "key20": "4ioj9hhwcrTZ8uNCLe4hKumFS4RCTxu5V3M7e5uBTNm1MZsjkEPGR5fLpm1mSAA9eXmrhHKjsLo5TQpMdDh4Jo7v",
  "key21": "2KeAbekjG5pZYjss8dzyKAfbj2UdL9TnN7Z9PB6u3rN1nkZbud8sJVavm31nsFZhPZ6XAwMVbqZpycBRzHiLyJCK",
  "key22": "KSnWNvThWDxDF4n4MBk9RpjHWvXC4onQHDgdQU69wYwynff7NCF3XEm2sr14CxUub88usXULmvhmTjy5axUUQav",
  "key23": "3b6JR9mY9e1Wb3hCGnZh7Jj6PsQjGE7CTDyDSaZt3xV8xqRFoTDMgSLL68U9vD7kUeNsjBxSwD5fZHiNsTpoJsjP",
  "key24": "3WKbXvQmRn7zjqBY4GKYuwfs5GWcGY1NNhS7h2dGxcRSbAB6xKGBntypJiy9WS8SJ3gFgjcEWzrvfDFX5SeA2FtA",
  "key25": "cQXdx1CSHc7pw5bja6LRioPVSdv6TF1E37Bg5cyYGZbFZ6JHj85BUUtFvS5zw5WkC14vk6EiZDydkkL2DkH25ke",
  "key26": "3rpB2BPV9HjivDncqTFg1Cn8TQ4B6TECRbAFDGStFK3xDFeo4z7WtQddaEozZjQpZ6wFqsNn82asiW67MQbaqyEF",
  "key27": "mE8sv8X1JtJeT8FGmcbiPuzBAnN5fpWr2UYSYqWt1o63r4joBRu6jFby2osuEUK6zenetm6AT4s1XjEFjK3vkLL",
  "key28": "2aHV6kNoRH2q1jaaYPJ4qNFtYpBLJoPA2EF3FZmxh3uZjTpxuyfksz1QQMFx23xmmHGmikKvHQmfNu4mGjzHqck1",
  "key29": "4R7PAPaGiAHAjcm6Y36ZxYcG9aRiQf4F8BMGhYp9pjFK2JxgdKCcWzyrCRQMbxpVzcwGhkHyXrYkpHwS9ZuJBrbL",
  "key30": "36mnN2YQW69qu3DEWoqtbBMTJFp1EFt6Ro5Y4kCWtTht2HhSeRyaV81nVf6mPTU5SKKYJuembTovykQE9uoUHD8J",
  "key31": "5ptveaMmWT2x2ic9msPje7gkpudyfTacRvKgdj9KFUwDbX3qV8WRie1FjiN9eAxHH3ZaG3YtpprnDSUS3Q6nH94d",
  "key32": "2QBK2pqcc3CcHDDftLaiS36jmh7WCyHNLvGmMaApMWc8UsSBrzkxDgaHBHipRoeTA5oJ1ZVuHjmhg8fgimXnZ54X",
  "key33": "RAhUQmcunDCiM5oBnpEpUegp5pfix1kBu9tCEyjiu2fS3sihXssd1UMWhyXjuEct2Bm7sSUB49kjGg8VqzQmpPL",
  "key34": "3rrbjh451zbmgJFxogrqSExF9YuidaTbLcDqvMBvKd2nL19y8FzvHKN1hMj1EvvZhmdvDXqxYEMeFFkqZkmkwBSf",
  "key35": "4LzruFGTHdc1pxUDjmi9q7hoyxzkw6DYEnYn5TA12jhLMbiguMQisULTQV9Ltg75ZixKzqNi61ydEzyAx1jAH4R7",
  "key36": "296Q2RHbshmdfta7FmJnXoSf9ha3T5cmNVCq7gg8zQuP2ujFk3wRT35GgaXDhGZnZ2mRLBrbkg4omL33X4pQsQGi",
  "key37": "3H7e11qS92zyrVFAuGfYzGRNF5E8sDEgCPiCMYXhWzScwFwnPBgYbSaywps5tF6Ezp6g4b6x4XqnrQw9ANNvnXae",
  "key38": "57PNkgMYq8gxHZ8i5UmmwcnpeBp476qbAHvCjqN7uKR9agc2EBoprYNyJrNkSU6uAYHqFnSWZKrxiwdb4yZDaUkw",
  "key39": "3UGGxphHk6GQTtYnGu83Ew3qpoJFtA6xKi6WWfB26AEhB6usXyEV8G2Bu3ZSZCd1Dqgug2rywPiPSC5kBquW9nHj",
  "key40": "4kQc87ejh1oydc6452kQ8bN3eDMkyErZv6c2pXCfK8UUdxP9CwrPmhKiLD4H1H48w1VrSLEPuPuo7LjqJKZiiFZ1",
  "key41": "31QwgDd4SvAoqzd3vbBkg7TXPbTWYv1geW33buNQdWhmcU9kw4WHzSdB1DqbnugXNxGmS66SmHFL7rqxviSFkmjx",
  "key42": "V6tYFPnH4K5B4HgptYrPvXqDdrUd5x8mc19L1rKKdCLBMcgcRPuZavPyMt2hkacPYaHgFgfspLcnxguuWnkicEr",
  "key43": "3gYYifaNcPLhqFCrkmiqN2myn14bzL9Bct6R2Ha77ZMPAwj6v5cpaPT26w93Jv7LpAQHwPqgBrVNezYcsoYn8XvN"
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
