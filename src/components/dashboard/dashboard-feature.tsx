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
    "3ipNkcj9FhXJ2QmKKJ1aoUt9MyAKWpiVvyPtdeQMxC8ZQnLFpzjhh5Ngj1L7iJZDpsaFqMo9JBdhCEYZcTx1RAQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngvtk4LaeDd7bz8EpUbg1JESQDQUPXJ2hvX3muqmQfVyfPwhoJYy2UgggU3C6odQdAtkARz2MykwkYf868tu6Z7",
  "key1": "2V47J1RkWJaJXpCa3u92Wf45CvQAX34hvoq6grMCyWmG1mYhNZQfJzN8vgzpMFEXfs8TK1LP3Qk8fBkucawP1QWe",
  "key2": "2PqXnEKZnRu6vt3BwWxKsfViFLxqi9nXNZKMdEr39pCd6wLbRDdjfgwZ4M1gxp74ETc1MMtxvPXDsuoBb9afUHmC",
  "key3": "3STYE785Gse9hdEgXU64oRp2MtsP1vH75sJFxBzpz1ZJXgvZiaWrGPjquThhoJMEsdkJBT1hSrWduidM6iJgjQJw",
  "key4": "2bFCXawJCWjxs7TBtTYH9VRKVEECuMvPVhZCSNoaQfBR9mEp6oFS7gf3fifE1koms133UTQGagayujXE5F15UMqj",
  "key5": "pMP1rNGtJ6XZF4MikfbeVc7bdwakfby89L4oUWVQnHobWDVvZSQLUWZGpb349EjzfWsTJJduygmKk9DR4u9Fgj3",
  "key6": "3A2jDHKp7vxSDCafhS2TWMCVRDdE8qE1EJYqX7ZWmpyT9UYw9zpsj6ouoZEZEkpthuoG7LdnExt5yaAb1s5RbqM",
  "key7": "3sjtbUqP9CHg6TjhmiEBvWXvCbBzsDADMDxRquVcVnLGXSxj3exhXhQA1jpRnBWuoGBLDQqjmsBHazatX6Hgn54f",
  "key8": "4t6z81EUr73jkCQH6fgH4nnwgDRYdpvstNubsacotf82o3ehiH7rdrVQa1jS82S8QQ98gYTQoLJqjTLK9JHYTbCa",
  "key9": "2qwQH3UM9qMcgE6xVzokDd8GLLYL9QWDADfW4bbaNWPoYZzXqbs5rkNgPhRYNMA448BFMMVzkakxenGyAxmTnibr",
  "key10": "3MjH8tYeA2bUwfAg3Qw5MgAoK6cNMoNvbD667TfTS9GLBhwHQaxweF8t1uL8p6bcSpQyB89876CSybnaLgbrTuQp",
  "key11": "3qmto3cQk1fTJ267TTRKdd3uUptQ13ECpcwdNCHrp8K161jfeRBvVNwmaAnBLbWBf9tetZrAXP1MqzyWNU8dUmKL",
  "key12": "3Ph9TSy3ybTXfGNAizb9ovVPPPGjwZsv4gpsSQRWVGYLHmxtGNYxhm74uaNsELcDkTxYrAndg9vc6FPUTkVyScBN",
  "key13": "614GR96ByShDmwz8DmpG31RdAJjnHGp3yPgGJgcQaZVHAx5vY9HiGJpoDFvQQBsBF1rMxvyypne2VnPNhAM1p4Th",
  "key14": "3RQNG37Gr6wkEDM6Ry64yjNAxK9DuZJcNMPJ3m4XQCQAt8nURT24cSW1ZhCdGZx7XDKgMXM3DqPQi2wtNTgWkzJX",
  "key15": "4ELJPsD4RWqijQcS1k7ihk5hnJd2FPzm8K6PSx6Wz7weBzcKvHtm3viu3zRfMksfi8SaiU4iVFjeZu61iFNSZP5o",
  "key16": "6oFAfRgQWfSUj1UQoNNSS69g6VCPB1jh8ZAKNjRrNZaDD8FG9CfxSxNfhDVWVjb4WZ8U3nxsSgBvuB4Zt6A86mf",
  "key17": "5YN8PNtHb3yynxdniPRjW5BPEB3xsjnBu1FAmYsdFcszL6AwQ5RNcQRPRXnHJZjeJZUs7Nbd4o7XELHxnx4Fayif",
  "key18": "5Z4hjg6tmxZYbZm1Hi814gVWTCsR7NX3ZRFaoBtBDUFEhJ69CpDYBknKwNkLn6HvCRjXAfqhCS5WhmEY4JpH4atS",
  "key19": "61NWdCLker4aX2zAYx4wQzunL7VXS4jJg3HZdV64NTX67wfcdH64aaCstMiVFJB2PCzQ6dcU7fiLfXJ9yTLUMa5U",
  "key20": "34rnT5pT2j1SfwdsSXp9trFzmCETPk7LtM4z9zfSXEvve1dxZTPVDyCTtc2yW3wxK3cEeJuZmvRJwd76NCYgBnyd",
  "key21": "3cWeF18HgzoFtwFiYSA1npGn7mJtDrhgvJ7pqWSPMJR7XLeTNDUB2oV4UShuQ3Ub7uGe77APmeWcdNLstkHXskLx",
  "key22": "2MAFUBnHes5t2dSi8ptcfC4qdns9gz3JQFTq52jkYu63oKPRe4dtyEkB16KjduRwcJdsBgZStXBLZ2NDTY5nCRcs",
  "key23": "mCux9UsZe2THrnJU6L7UwoB5SPzhf8h4qu19nZqfh7hJU5L3LX18r58Xn5xNZ85ehnQJUQtqmYih8LUMU7moJ4r",
  "key24": "3xb5dsL2yc8TG8V1oQnGDgUUSL3kCpcnpfNzuKkQekUQBvqtnhG5ZK8S6bZiHRYvens978RHyhoYPtieaWzN8CeV",
  "key25": "32M9AxRczVpB6y6sgQJxC79dHeA2E6yKSGtQyti9MyQPFC5X8Gx4qosPCqs4gStNLR2Gg5o7W5cd52iUuorQhwgU",
  "key26": "4UQQJmFcKdX21mH9RyuDcVghLwWNJ6qrMddwYofd2KkSPLJNRcb1CU9MBGwJQq4cMZLAbswzHBK13UmW2ovZVj5G",
  "key27": "4RQ8nkegJbHMb3K75cNtWQjJnNdDgfm4Xg8vnTsGwQe3CyqzJqJz2SLjbS9e8vqsi5nivoJ7Xa7mTKeLLBsiyQob",
  "key28": "gytR8cHirMaWzrw3kQDry72Be34WVufJTkWEcHPpGtMZLBKh5HWRY4QjVLpFX2Ygv4tmk7LE4YDbF1171e6Wp2g",
  "key29": "3PoXPCNyLcmjH819bwFF4suAUgQJK8Pf8srJsWJQrkrykR66K9mvVPep8ogYmGFgVE1jxFMSWtkwvxF3JXwUvnQx",
  "key30": "2K21LCfx6KK6dcVmhUEmZY8HwaXHWH8DeLmuv1NE19v3PaFkph5VgR9cn6eLxKyENhvXKW9odR99cRuWGqAnYJm",
  "key31": "5QMLVQ8FoM4SNJWdEBQxybasR17UG7vru5JJVbceeNavQAHVedHBZR3bcsk93HiapX17hzviqJ58W1Uo1fTvqhEh",
  "key32": "5yxF32shM5rwx8E7p2tGDptaWVpB7nizbNr3aKkDDuBcVhdUQB1KSUrFfLk1S43zqHNd7KFKPQppP4wKoKy9gmZL",
  "key33": "46YvYDwygyUFCJSBEvATyhGDfP285P4HmxVTy3JQY3G4aaivu7DAE63QZX6KFx8K8GNTqk9WThGJ1GWe7yY46cRW",
  "key34": "64EVAoMsryV5HESAWfJURfV335ZdyUb4nSbWQq6dBqu5uGXqYFJZsM6JuZP8eL7xgkqjbyHpoJ5pzCe3ANKV1Khh",
  "key35": "4peicLZPhZ2GJWKgW5J4abWGEUdmtsHMFqFED1vivUeD5BzFQ3XMcESz7kLDF1L8ag7MjwNaf7EWhQBsWjXdN46g",
  "key36": "61xZzspGypTUcypCJ2rF3vGCoEwnUpitcjbUcbk4cmr2c63oTroFPSz8YsmFBzi3MErhMqzEWz8ZV3QYmmzGhNeR",
  "key37": "2Gq35mKZ9CKCft6wVntpoe32XA7KzBU7LzxhW3A1qHP4UHv9UPu2unogiz7JkdWvf88tVg91Z6vGfdi814i5m4YM",
  "key38": "3vPKyePKCyKpLYKEsTZpQ3Cq2jqq3kNvbhstYfe78smb81ZcpVo1o5XWT3CqNxmtVH69cjLqh5juUXMthPmvRuZc",
  "key39": "4najh5118PbpJP3G19T3pnL1cS8oycP1fvtzB8esBAt773U4V4muVPQnif9z4QaqisnVaCRfkmvcPFa9tjCFmuqs",
  "key40": "QH95N8x5mJs323KCkvHrqGqhCTEpKCrocqKZiF5No9FHijtDFm8H1u9Qf81tkXfXHCnDtboo1AaQx1qXnP9bWCp",
  "key41": "acXKdAdk9Km4YT78qW49BNXibencyAnsRcq8CqqZDcbwavbUSafP2ukPBhNwmcDPRf9aYnEgKmhX4LuCJaCnn5k",
  "key42": "XpMcuwBuUu9XF8Qpc7ySYH357Ky87cvfFx2br4SGoBJj9EGiNPrdgiWkTd9TnUbbM8JEKWXy3Eu6QjkjSFLB7ec",
  "key43": "57rxiuH1zjSrHvqtD26qqVVQRxZoDQDNgAhJdprrJnM9N5fXBiM5F6WFpLiPFAjwVDWHnbizA5t8r1mFS3LJQK7G",
  "key44": "zycE8xgSS52z8GM9UAPTDvn1uHJzt9oMGTPDKB5akz8XEhUxT5WsCMb5LyGY9UqRaLainB9cn9PwhXyGb84ffkM",
  "key45": "22hrESmU95vUUrKP9KHn8GmwtRQFymNeXdgr6BE5jgSvnkjBNTDBUH3x3X16LwYA3r8qB2Vt7BHpnX4U74N2LsMn",
  "key46": "3nxZscMfbnGcr5Zb9Hg1KNysyJq2iqdGM5sPuezttbg7atZHQsgnmKu4FJtSDWcs9keAbtn8s8WM9kFfrSsZCYW7",
  "key47": "4GDy4Pg3W22fGKevr1WucHVuJSD5KmKkpPvBAhMQBsyg9ny6RanveWeZLZGtwZ1Jhh5mzA9EMsNaJBmmYTkSMSPk"
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
