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
    "3xphqquqK1RxPnfvP7fzFLQNx6BRBFVNtwByfDtKGuwZPdz7Gsnn3wdqBw1Zb3ajTKArsvY8rcN6PY99XoLsQgD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGTvpbF2Dod1XJQWGtCTTbkWL8wGuKVrYkZL9qTsEgxuq4drpMj99sioURqEvUcqLMn3a2WoMCJPrS6bV8Kmy6c",
  "key1": "5DV4BUmSyv7cwRGtXYeHc9JHAYjcvzZjuDG3pVJhjYXxWhapuE1ucxQiSPKgRwX1UA1qqXyu6EecsGHq8mp1dAum",
  "key2": "5rJWtgyXESRRx5241Rj7fbDcrUQzPCuyt8TyttoHpHaZwdo6gbngcsNBr2JRkGhoDoZYXSvseEFqkRZFJrN25ZBz",
  "key3": "4Tp8oLtw4UDj4k9b8Dk18fmfB3LjWob45hYDcjdaNZvVq76LTvYZ8zoNoz9q4NqftpYEzV9LmpS9qpHhnruupynh",
  "key4": "3spdEquisYruC8Pxv39GXop2c6C8DvwfjPAuv6yGdmTLPhQ1BJLCyk3ueYvTEgm4nDyx9ZvaMihK7711K6X2crgz",
  "key5": "37NKiQ1qBRKkHQQd2FavUCp2RzvYBTqCifSP8qKe69pjJ9Tya3f3Ex7Ze9PmssTEWkk2DFXraEzuD5tzm3m8G28",
  "key6": "4T1yPuUjrqJLcesjKhsToMjLwXFGASafYVCpzXRnz8kNt8v1BX5TnjtNSSP1btMbZBozApjYMeLHtdxYwvqLXK7j",
  "key7": "2skbioEbvLsnPm2hiT95TSWR513UE4ZBRiNCtySgKPYfitwTxiyJKL4vhYs8ZAPUgU8v8rg9sdu3Sc5mRQ4s1iBq",
  "key8": "4j1RssMx6TdXatzPkFwaBNH1JUL6D5DitCkBaNFtUj7vvYJm82vTqPnxUN3yk5cZHxszLgwfZEwedn3qK5adDyXv",
  "key9": "66GqvRJugtCgyhJsb51o9i6ZJFoDDAQaKu7Gsu93FUDDZikbFpze8pjFZn8R1x22xxzHpr9uco5C614ceJqgaY95",
  "key10": "2Ag6p6y3CbfT6x8Sj5xQP9TBHaUAu9GM76fuVVYMVNpnZjXBjCF1p5yxWZcmcm7Uss1Qh71xoAJUykrKTwr8xNeA",
  "key11": "2eSJoDZ7NaehV6okqgPaUqCHxB9DhrhDTAxEPpt6vnnRMWCghTPzXyQHcVVJq1L8vQNHzzkoeYQor1NdUUXdQCN3",
  "key12": "3oCwGRRJRgJQSA4YtsA8qk15F93U5NuvpAWibUQSqfYkqKg4cj2vGSRJCe4xrP7Ntd6XAod82AGyS8ZNi3JffRR8",
  "key13": "5nQELb82GqiBVLaMDgD3c2Ab3h8qjZSDyXWi54xvWo3PtQL9TGKs3mDr5yiz69dRqANYVj3q6G1YgEacXQiasr1T",
  "key14": "3gERqd2QwAJtyw7uwDkdYrUXojWH3TopiD872NQD5HGzRX2J5akFHucLboCJx4Awwk3X4tX8gArtft1axowwsTmQ",
  "key15": "3S4t21ceFdDQJ1g36qNzDLw62tvy1QcdL9nDenFf6RvsbCtMbcAVrgDxvPfBxLqMunxsNTPUhyocf3w7HBin13gw",
  "key16": "wYn7kkNKQQHkMXo3KEtqEkjwJwmVFXuZJZqwd4xfbaf7jfxi2HqKN2crLpAhDicQEMzAo3MLAFF6ttWQXPRZdXD",
  "key17": "3RnGbjuVWwFnHSZoSe6yZKYKaJz1hLGWSX31VGrcC683xQSZrcSCXZbM5p49w1kVtixai3cuiiVTkj9oMeZGi9CG",
  "key18": "5Gheb6jRwrUdSh1N1Z4zJukUeKv3eQVwdDkZHCa7Z8QYm95G5vXW2LgRdnM3ALFrEfiRJzorvY7HxGKKuCZrGfEG",
  "key19": "4nuBASwbwckrmWiSvHoQaZYFPPfczSNPsrzYm8w6qq6Rqqheu2WuTyamLoxnh6J9G9Xr4vQfeRiwYHiggpBPS7yv",
  "key20": "4SFXJncrcBv7vz2RdNXCikedt8o9JTRT86mVmgEC5cUTepwrJiBPTFUxaY2SaeDr29ica6N4wiGtwwWJzLF41kC8",
  "key21": "3okXxLEsBLD4JdXB4QcXqwtuYovKLpChMSVHxdrGwdroMN7nNXg1XKhpKumM5yyNmVZmKRJuNWCUSCsVuQ9Hy2RE",
  "key22": "3rsbhrU9qYeDDFDtRpyeLLm7CqqaRdLCofVPHomarULU4994GHGxRwnGhybBibxL1yhVN87XrerHscyD17kpYF3h",
  "key23": "44sioz963bruCiA96nf2z9wa3P5CsweRank2B9bv4ruXv978crMNSggKvS7xNh94U9QkH2d4j41hcKRDw1jmF6jU",
  "key24": "5KRddUj3rb8aMRQgykms9o2Kc1o2gVbF8L9HpnoBdTKkjMgq7whD2VkqsQJsnoqDr7R9ViNZSGBBqni6ZeZE65fu",
  "key25": "414Wi9YiGArNu6nCbroCHQ6FFBdHR3M8t6FNbNvkSVPJkLz33CXRMfjoXmrjZH7kUUpsEkWdY4p7HSLRVcxDmTms",
  "key26": "24pVddHDthNxhQBgSQsyjRpVsfdnJC785ddgCkC1dLzfuQM2GjuSshS7QDZLiCqnbC2CcjbC9GcsbTgUZP8vJZG8",
  "key27": "4qt4qm1noScyEmtEdeYp4XG5UTFMXYAns6C7qWUj5pspbGNg7aFJ67jQd38u8FCMBvhDswi4FpuApLGbxvyZ3YUx",
  "key28": "2HTVNxT9VT81rEUum339vo2TydX3VeBfvDFvCKCqmbHExgXNEVQTzPhpEPYhE4pvFVMXuRbezqdebZk8Y8nxBetg",
  "key29": "3YFpu7QPHxFbqU8B5Loaeyegbvjc4wyqUdYmNua5nLWjKgyazFLF8DQYjTSygqtBpuQfi1ysL93MQvhWXRs8sdH6",
  "key30": "3ckPqXQbEHkWpt9R352A7XX985pZeHhqssCWPDQHmCnpYz1wkUBrvLALgw1hmm8QXe3Ua77CBVvQJnTe3WVTXcDy",
  "key31": "57VyAGn4y2N8G38xMhCJ2oAGDw4FP4rvYnpMTEadivskdwfjNNULfXtKBk3Xe4GMJ7bTYN1k5Qc5ZTN1pNLJ2Emu",
  "key32": "4A3jtvY7Linjqp73ZiwAUG6F7N4vhYtt2rciwKNX9pvpff8Xi7RmASRfGernxR3znfaUmz9PrbxCQKVLNTD3dusM",
  "key33": "1bmca8hzyXFb5L3mmnYq8evoqMCwS1zDTyR7WgW8zvrwJUiwbouAEKgDX8UbXUwgWXspFqmYMnqdR6S45Vi3aVJ",
  "key34": "5V1ejZY8FkPpP6n2m97PQtS22zaS4hZETeN5NTHJ63WHEygGLGjK81Fjs1WDw5WDgdBhEkpMpqoFnVj8BXUN37QC",
  "key35": "qvS2GzsathRu1UWKQLzhco1n3fBbphFRKJXHReac6eiddjwkTa2Ws4q7fQXoTSTxnxcZvTBNKTK6UBnPnN1cdWY",
  "key36": "5VVJpRdhox16vXXWkbMa7NiKaTU2uNWCcCRvAnwBMT4D3SpfhSQTfV8YwopTSPGdKLjk9Q3UvXGK9Fj9Z5SqiRYV",
  "key37": "3Ln25GUNfUr9UQ3Lr6Yz6iqFNft9ssRHrm5JN8EBAx1VPq1gEbyAjRexfJFuYTgB5FpwUbUoUdXEPZj7Fp4wBpzc",
  "key38": "2GN2XKwpnnehVyaweYwWbEdPqebq1hFCxpkqo1xJZWk8c2wYxspCKLa59rEGFzqRitWEjdg5ebYeRWBjDev7TUow",
  "key39": "4gi36Sy1ueNQSMyzhUzciq72fkZcHRWQbCgZhLoGPsqaJZRfMDMPnPRa3hzcFD6T8QXozTEenQKmuffjfpta7DA",
  "key40": "5DpD6U6S9UW8k5jLCHwvZJBaqih1MRQbzHSL51MMCNAV5qb6KMqt8LpZYwScw2Q98ow8E4ifo5a2Mh5CF4Euus8U",
  "key41": "3yfDuNG3yzsJFMw1Nx7YvcMetjUutAYggoFLVHoUMCcqWEiofvdS8GVt2PdEc1dDvVw6FzfxFNXT5qhkngycev1E",
  "key42": "3TkyD3Qx6EjUAoGLrHiMxtNbTtwXrMnkNWzz3UVjXgnjY5XDTujYtWxTkk8kWMNUXKi84EVamVGVgtSgrKMmKHck",
  "key43": "R6AoenXyK33TW9FnkqPZFBKnko7EaDhNpxNE4jZVS4uTHZqveRaiMtpg994ejjwJ9Zi5vzZiYUhb6vuckrCviRw",
  "key44": "5zkRMkdhkrHsh7peMnA5kCsovpsR8kf5pqwMamijYj8MCwqJK69fQRs8AAEejBXUcm49a7ktj8pdAnSMMAJtcZpN",
  "key45": "3mxctuq9GTmdTxh94asLGnk9m8Agsoe4JEe6zK2wJkocHZFpnTNQFQNBpKpbqUFT8Q1vgNfn2VA6voLR9f3U5gqB",
  "key46": "2NNYLWeFYs87Xirq3mCTNyE1veoddjDLHzZW63bQzQ45W1vkftK6oHfZzYNbr151ib1szXPcXMeSUNnUp1bb3uzV"
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
