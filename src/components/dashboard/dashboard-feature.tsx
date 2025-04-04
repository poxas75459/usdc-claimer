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
    "28T6p65gqTMgawpB9V7k225tA4PKJedeqtihxgygTYHAFSmpGfZpstizkf1y4En3j21kPufeqPpdAimWe7jdjKGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgSoiWxkzmZXkE2fJawnBHHE4qJXVps8BVHukR3Lhv1YhyybQUemqA5xysqhLGk9o6r6T5ocXbAWZkkC47veTeD",
  "key1": "5VwPgoLgj2nhqvw5rm2pdwPytUsdipp7MNQAhjk5NLMHQQSuDL7eaPEV7evmioshYhFUYTkxYmvF3BD9DsBuQtJY",
  "key2": "4LzeJiCpVqdzAnBiGumsPeuzUaXTTPvQrRQvCDmEnmzt5jjr2e79GXMTJwZMG4Far5P5w4qiisbpjtW7XBCsavRQ",
  "key3": "3A54LnwBZY65vsRLXNQmGKMrbk5YcgXDQzADWidmXPGhHoEbTcRegDfftYwJXRbA1PsgByxaEqVETFvBd4jUN4PD",
  "key4": "585TrivHnUvhHzs7R3uoFgAvh6q4ddtounGjrjrjd2664kmGYQggRAnAHFfB5Fsh22zgJSVW19A8LWjKSi7V5hXz",
  "key5": "3NTnn1eFskA2LDcZ9eiTEFg5rYoAjQh2VGUXgKGUBnBbhj9qhPYAbQQY92xopa7tP7NZk1A5fCjBScTPjKy89JDD",
  "key6": "3WqFf4nMJxw3KVMhaAJTrkV19Ux2yKYCzDjaQo8PNfdgUBmSoZiJujbhq86kvc5HRiCGjaidwxztggD72Koz7x86",
  "key7": "45cG75127nGEHkXp6aHbSTWyNGr7epH23PBrVrjy8c9m5c7Vb8CiteYvJELaxaPrDb5mc1aebxhzqzAVJmprV1t3",
  "key8": "4mgQDfnfKVSmRVbzWuSZHHMZBdbspbrjtiyLpoayJmexUQ9arZJaggyNiU5H75GD3LzpYNn3jeZEUbZ5LC2LFiu2",
  "key9": "4sCEKZHc4LBZzjoquZJeUQ4XT3eNQ2V4idU5vKNpjmY2r8GkoATWXTfkUSAXqS1aFR56LN5zTipfEW7K5Q7Smbcs",
  "key10": "5HSAoFzTUi1ythJea8C252j25Gt9mRoNQN63L7tLCdMhzCgeoKMcmsoLTDTYNzqEQg1vt7aEanoHGQoFQjtj5LCW",
  "key11": "94Wb5o5enB1h67TqP31BeDcC16mADQG6wncSCG4YLkvf21Qmr2hX2JUkBo6v9dmN8debi3hLG8SLXKpJ6nHEevV",
  "key12": "3oEQxEagUw2Mne69gTP4xZgpgDpwXqr3jyRLtvBpu6FoChFLc52u3BMtgkXuR3vaSamdeTQsBRPE2m9Ctg3e1h7Y",
  "key13": "27fWme6n896AL2B1qzAPXjnuvtNxuLbgUoWz1JYm5ZdV3D6RbTKEK5p6CH5XtqiYAsbZP6grggZjxPeM8XXCgKaE",
  "key14": "onHvP2GbMc2DgfBYHWGC2jMMA67V3f87YSVU31saYgceLTqweTWaAgmx4ygtWP3W3Vg6CLZg1R5MQXv3AwsJywB",
  "key15": "KbjDqoGTiyzfdUxJ515WfAGPErWDezmb9qgzGqer8S6VD4wW491RzmczSa6fUG1WXruyemsYjKxadpkkMRhyrNf",
  "key16": "4qSV1xsUVeqrtHw54C8cZPrG2JXkovXqYWdMtifjSKDSmwZc26sDjHDBjWMLje2m3C8nKCZg4B7YnxxVnAbfw6AP",
  "key17": "66hhT4f56hPtabcqsTF4TcYcgk4pzyQzv95yVZqeXaeoPU91f1JGE1FP7RMfXBg1MLmSpWMJ8wQJjQ66siKtKkfk",
  "key18": "3u6nshnbW8hNuMMSfaQA1rzeVQNZCDzfKv4L9kjVDku2Ry8ARRMY4ro7yybVrDHB8ns26BXQQVqhpQuVY83wuVM2",
  "key19": "9kkafxEqdz4cq3vjFGqU3jggvTUZXizPMu7SdKnXKsmPp1tKwmDmAPFGSGTsa1g1NmLerGzKtWZDxGt4dSP3Bjn",
  "key20": "3Cr6KYVJgY4W8gaWuoxgG3fQBiszGbjG9U1jebU6qCXVYuZekeKWEv5VP6kMPEoDqs6wxiYZx6Rk4fnpihtSsXRm",
  "key21": "3mnWz8JtVfw8bksZqVFoPKVxtiqmg8EzQjMdAsf8pyDs8BQJYJAMyFfCGPCMHyGcs7H3uXHB6NcfkNZrVzMR6Nx8",
  "key22": "YSy88owqKZmcEc2vNHWkBgb3h6A1jEv6cFra87p2ZWEoZWRd43HFj9HApoefRxGTSs8fdYc5N7yvNfxncMgJUMw",
  "key23": "3Tnb4n6V2wnCLLsPLHqwfNXFbbajrUwjxvr24HwfW4GitJSAQCwhc55E4pDmUoZ3d3odtABVzHSoJVTMRrbw6TSW",
  "key24": "5FFipsNAbSjKh4TQ361HpZycAYy5aKExbgTPgz19miF3f4gXW4rR3yv4preaZved2MZn6oR7Ms3B66ddTZvMmHZa",
  "key25": "3GEpnWNatwrBB7tcZXCt8yVdTjLSPw8kQtcQ8RxptXcizjw95TNQnGhFjW3dqKpvJ4fYPc24amFNN1ZJ9U5URUzT",
  "key26": "C6jRzkuAm7KjTJR6CT3PGHMGcKFyvowNExD7VjVhpwE3CaxugGg64pvttpnZABD9BHtjv7hFJRJQv1h7MfEGCpb",
  "key27": "36tX172e7JTyrK8yfTvzFmt8PooAEQXTSfidQKZM9ToemJ8WoDh2C1QzDkwrzhC2faWK7y8saSSS1QQdgXsg7TPV",
  "key28": "5WAxRCvcgoPR5HGqAKrixBxfhYhNmimCPMWxaYqMvC8MQVm7zLYoVFpF9Aho9hBFTG1xBVuVvfCWcMF9N4KK1h5M",
  "key29": "3HqUUdcpdwraZYU2tTEKztNqchQ623zEGLMhBUF1stZoyr9U625ZnZnMx9jXoyhVB6HVkBghRPSt1yg1LjRqEykS",
  "key30": "XhY7U4J2Jy1nm9HHe7EuBh6mxv7cJ72MQPtuEgzaPy2jViNTJ6yZ5DpuLmKAU2PrZ3r8mfN4oLSjKU2ojMubW6G",
  "key31": "5SZBDXhfgYQPThy6ZWFmtskwiwLWn3179QMXVFeNktt5hTLXVX5yVRBL9tWHPGQ1Y2B9GwBXNfqSkm6h8PfiYXsR",
  "key32": "5QhVHiBczE9jWGWf1p88AwpBC13DBKEiYRq1FqHvh4hV955vZwLQGiWVcCQbuMkRcmfho93AzEdYeFGiqmwJmpaS",
  "key33": "5LGSLRjBsFykGuKcRqaAvtDDrGE3xtoTsx49bdCf62JBLzGRJYptsqTaMaJt8ruRP5wV3jKnPMpmeWshzrNtvTPP",
  "key34": "4KXeDs6K2iqBqv5g5ib2Tj9KjutnmRdQ3RdUEaEyKyW57VUHCk8tAsSerDoGtB3MpKWHSVmnKPe1L5bYuQdxeonR",
  "key35": "4yBSoLMbkAoLv4wwmfJrTjXTcFVcZ4yp1T89K7zY89aTyFEsDKNnZBs2kapjRysuaiVUMK4V1D5CeBBrj2m7VPHh",
  "key36": "3pisSimGgk182ZyHDUptcn1Kxqp1KbtnYbfvg8JG5MTZe4aqrQ9qmsmhRyLPCJU6pGGMstx6fDwvm1pavMM1Uir",
  "key37": "5AB93prvCakRftRnRfYUSdWaMgbM6rF9DaFva4ZLLbGLqTgrsNT3gTgT8Em2ry3K81kQFPiDCpUFnngNSKribdff",
  "key38": "2JAyoUfWnJ3qStHXUfXcbTsCyaSF5dPPjKwAuhDMGANu5YEe7XfCZ8a3tmThcsPEkQAQBmg6s4V8jh16V5Sg1pDE",
  "key39": "3nns7LaDwUMZq4w8HvtoKoz8pMDcPjpqb3wJ3FAAXcAmckv3qvi2tc6HA3aVp61K7oCBFdBkfJHb2P17JBVwqoCw",
  "key40": "5wpb8dH2wpszdKNa6geBuL9rjzsMFNeADmSBY1Q7wn8uEbGdoR2DxZSnaJ56328So7yCL1GeUL4iSTx3xMKWaAFn",
  "key41": "m8v6GAvjHdJwXo8jaM6t9gQFz3Qnhk3Cb6ugSUmr6J8BoUFJVaPur3bj8ko3hzfoS1ruif5wxCCvsNZpqiS8wPX",
  "key42": "4xyipfgiDt6qcWw7Yp6mobZFZ5NtgEeAGYEh8Yr5f4qQ3375oqrS1RkpUMjdiE7Kuk5774WR7WaTKQX1Wk5vfi97"
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
