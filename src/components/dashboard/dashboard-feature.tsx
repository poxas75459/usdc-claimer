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
    "3ZcYdmTYeqqrxxNBeCyov12X7fsTAL3RZ2p3VHX94Ct6Faqh8h35KRyoHkCwvjBzPL8SEehQfUsaKtXJBrNTkQqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rsdQokV6TQajFijcpgwMZDwQtL1r8FZmc2gJ636ouceQRBtFLWrCtztPawTQihTQiBH9D2ott9Lhs7RW99hpF92",
  "key1": "4C5bCvnKHdKAmixvLr7xYQsPKHNCuLnyMnoqaBYEvuxJhpvtPGtMN2yeJraNkqrJsf2XA7CFwcoqGNk8fc5DmMaB",
  "key2": "4mt3QC9ftWVyfR4pkPNALRn39dXUrBUNqU7ju2a89n4M3mJ3dbs876ypnj8tEsQQwDrZQbpidG5jLs1cAdKpHpc3",
  "key3": "2jpyuHbSg28WEUxJJSzbCp4wirCAq9uzQ81T1jFZU7tVb7XhT7qneNE5bYLNtSSvgMQ3yZpMdv8Re4fLUD7mQ6tX",
  "key4": "5heW1fkWVHTTyQnWWiyLmKbsYynHoey7mmEnz1uHwfom41PFGnr6hUDRtXzHyhJwRAi3Q3sPdipT4xHnu6P7GSgD",
  "key5": "5XPCb6D1ENofA2ZWUk4aMFgmb2uWpFe1pKrCVVCmgewwFoND5cLU94ekHEevxMzmzB6EFnwuV9Dh6N1SPwz9BbZe",
  "key6": "5tsXcbiHwYf4atyKYNC31HXKMkHJtvL7yCuX3Xg381HMNeiEJTZVdMwi66sKrRxCTZwE5FYzK347AmDGVtj7K7jQ",
  "key7": "4wR8Ca3Lvxy8BerhjVVboMChnUYRxgRxX12NXQfUTH321WFhh51hbwUPwtSczxwG1hFH5b36nbtVZ57tDux24rWB",
  "key8": "59MaXmemLmNEipZba1cQ8Y7B51DqqhjfHMFD7Pu5aBQCpZtU3KYBUpg85TNuFNNep57UYvYAYrQnZA6ayQoKuyw",
  "key9": "2DFdaNn6ZJV1v3z1g8xnUGPGbXeCt3eMbw22eXgEqW479acvbNyJGR7tadS6dXbzQw3BNZ4Ynh4uyLF1tQiLdjmq",
  "key10": "65nKP716A5RW2JsYATPgiEykDtzJ5Z6rimykFS7epbR1d5zh4UBhsiDFiet7uT7qyWJobWTZHiJ3pFuk7BLvKjR4",
  "key11": "2WB4xs3TgJLimoauukJk3yGrWHQ4hJwo2JNcDxGMsJkGkhj44M7jpJhVPtNRKffbMsqEZrt4ghJgyBa3FmZ6q3QK",
  "key12": "2y7aJ9SDjC3qvRw4nsRyp1VmGAa9ob3ELW2DpFATpXpxP3K7CdydN48usDAWr9bVNJqFoBd82B5WXtdAnjNpbp6o",
  "key13": "2jeJuVPiXfuKJhjZqM8XNGiSwAgLkasutsu2Q4V9gB148pUZmyBshu2UPFFxagw9Rszz6SQNRPVDAo1qbwdcHwrE",
  "key14": "4izaKajGmREYhSnSMwHKRKdSR8CrfXvpkhspiTSJ73WvZgj84WLHixhat4FV6UNzTUNaPA3NSHXLrjERhu294VHR",
  "key15": "2dnXESQXpnJQFzteLtykNpAuRH14SgHhVfrf2VjV3c9Wzb5tLiNPZry7BNPH7BAq81D1LPw8DUf5RNQPvgLUBp8F",
  "key16": "2E4vtMKWu5BrnzMFwCc8cb7vG12HDqLwu48tZEERqH2bFjMCfpg9KwmFTpGAH5C8SgMfM85sCwCv5Fq9iVrjDWGp",
  "key17": "2qxxD7zqqiyBtAUVGe47VMGE9omTzcwB3yyLqgc86WLkb4faeGaSxQ89iaxTkS4b1UJZ7oMaDQRKagY3vx9EnwGQ",
  "key18": "zbXjfLaLXmemzvFkKNwesyiQYd24FBGbLpZ4Hsaoewo7T5K91t6Lu9ysLrrY9xdbKLg5HjshnPH6bgNmHkFcBWQ",
  "key19": "3mnVo1uySV1ri5JMSKZUz1UiGpUF5WsAntrFYjhDmd2cXgjErTDtE3tG33uR8znyEmS2qjeNK82ud2yZdn1zKbL4",
  "key20": "47JaSLys2brfWvPB7TRWKTYd8CkrGb25vG4uKLYzQcSKwSXff1Yao7cTpZbHDvPEHc58moHtR9bjbHeRPMSaKPQ4",
  "key21": "yv5hzkkLPtzPXUJpRbodWqARizFingLQRjo8VAJX5YVMXDjDgqBsJzDL1uRhHohN7rWToxqmBuAh8FM6Lr93agm",
  "key22": "3csoee9ENyh9k1CgTHRFtUP8kwN8b6dzhmnQd5YK4spUHnooa2ENKnvBceiTn7Ztv82Ma7TuMBvAT5kFy7d2zsDQ",
  "key23": "3b3WotMdR6vjHqSJ7G8fUPQfsuBPk6UbAa1qAAayJESNpDBhhBW33DbgKm3UGziy1RJBGx6kD5gUZmU1n7rEwxwG",
  "key24": "4kyEEJV51JVsi7Ko81vv2cDuNQDCmXUhWiv43uCutfpqvaiW4naSK8FycJLa7KGcG5upvrcKFKT1iNp4cYDrMAqV",
  "key25": "3yCKWVCNr2tTaGTG2iz2HhmFVnWiC9R5W2uF1BhSLacxdYyXr1PSkBdmodG6SSFvqEFShMzbJc1Nx61v8ohGKjAj",
  "key26": "xjBr2zzT5B6S1jdkJXu897vScDUU2SSXLNu1fAkkfxD9a9jCsx6UvqCLeQedE1HpbKNZEdyWp4XcPAYxyHdKSsE",
  "key27": "3HAmjEFzmx6mdL4UxpGRZfUNV81464YkyVwDGF66EdqxE9mZGFeYut3PXySa47DKDQqDepuJtyw3HLfLoW93avpz",
  "key28": "3VecoBpiEqqZxdFYarAPCQiDbAFCXcb65qRn8BVzdtWm7MWJkTTjS9NVugtDs7QLV8FcWVTpQVF7ifqS7Fi1ivwS",
  "key29": "2MwF2iPbHczxQYZVpntCe7FYNzfK7K5ymkuzJfK3WYfXJTqToR1o87cj97b8QT5cWCNfSCEJjQguoCuUcqng45TP",
  "key30": "51WAyDqFcvxzji8pMWuCtpPkKKBd58EPBnvcyXbGG3jD9PQRLZuYr9MN8whLjaYcnyanKratyndXX9JmrDfCfMCP",
  "key31": "28GZwhuxVikZi5XDuA29U8CHW4WjNofzQTG67ZByzvVvJboUfDDYSRiTzqsGHyqrNZQQB4kpUkdn9ebFJeJ84x9x",
  "key32": "5qAK4VZDvSdzTwXTNh3wcoAHCXDjQEwDPiaUDq5ic4oGyLrfTbUWhGEoPSUxJoa8UfL8KoYseasTxiNqbQCmyQmr",
  "key33": "3mpfGvsHyGvTAdkKvUx61e5Jwj4dTeijwBaWw2kEroz6BgEAGBEn8VuoGjNN5973gTeVL4aHvY7PPs6HLNpAYBWz",
  "key34": "4uD6GgGP8ZByABpxgnjPepWhHHHy8siUSCmYumpJvfoLajFCp937AcFcwq3uTMYrMHkaaZArTVgk6Rh2XLbVks73",
  "key35": "5TpxMbVkv7VNGUsUsoshdW3pdcT1H8twiq29U7AUjkVxGs2RvAVs6tpcXzTCwR1VnhAwyckoYED6ADehFV9R4hEQ",
  "key36": "2ECBeWiLBGDn69dqsdESfJi5vMAFRcpCu2ubcrGYvEt2q2p7MQjfeQ4hqrU78KbJW7x6rFXUA8YddjkaAbngbiQ6",
  "key37": "2HScbcth3RMDfoWXkLvYYy2QFzjxxc8svJKXBeo8Jr89WH8CGHyQXSn4Z5YMbDdWvNTukb1LFTMjQQ7ubFsxRezd",
  "key38": "5zkJtBYmqTRWkUGUH4kewsFaBmCcM5aUoWhscR5gCdU8Kg1wGmmyJevQ5nV76SMM5fdctQcZAySbdtqmTENMHtQ2",
  "key39": "4e9tJyYKYNLpJmgGnGSQJibz1yFEGpWPkmFzksqJ6aLuWYGQbzYdszukR661FVBzuK95ekFfx3MQLuhKwLS9KgX2",
  "key40": "5mKft1wiTqoxhqPZu6gheMpvgjm5zf7iGk6aXswoPTZgoePeEB7BhPoY2cBSAyaiEiRsE2uJjwZNgwMg2w2UPTTh",
  "key41": "3YiHYd45PkfJNracjQ6VdBLAwVUddHdfyVbAxRVGbhnxzbxhmHPaCEvvDAXbG5rsYDpsCYfuvxcGULVpsiuF4Lfr",
  "key42": "2hydBQRZRaoR2UWz53DqmW4xo3mCgXETZ953bt1cGEfA65eGfNetkUviQ2n8VUuiJUXPETGYCHEfQMVJBsAkDsUo",
  "key43": "4JDxC96pfEPGYDdYtGNhinrJKhngY2KhXF5GNieQZsVLf5q34NA3V3vfERM3q1MbahXLhSZaoi9wgi2rQToQFX3h"
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
