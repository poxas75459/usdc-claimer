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
    "G71FkV88bex37YayCY1b519gViJTEDLa2XufP69ceErnzQPV8Mk76hFW9zgWTDeRqi6dSnQjj2Fw3D6TgGD5gMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPY1HQKbx5nYyf8jD4UBFneAbpXwb6U6g6mH4b6DYLxeAmMVrTmGEGExrkJ8Bua9i8zvAGwE2LuLqN46aQfiaG2",
  "key1": "4CXV1nk9i8e11G3YUbeBRHFERst5Qrz7wZkSBrCxWii1ri4Lep9oBfga5GmHLPzVaTAMWLhXg6MC4cSZqCskfWbk",
  "key2": "5WAa9q1meXK7B2y12KgNtzWJPqnYWcocn9hiRh3vVebb72PP8z6WcgQr7WXzfaMd8GHwEPJ26tWCvzAGWw3zmHnt",
  "key3": "4KQx1BxTaiyaXvTq3ap86orHCh7rSij7E6fSUcAYDPWpf8kUt2xyCHNYFj2vbc3TmuQZsgxjHiFXjoeQqYyZXET",
  "key4": "3V4eGhwoBYe5rjN14AoBhJwy4K7z5PP9G73d5HvT7TSmtXNE4ZHMtN4FGnY7TbNdWfGKeNv1zvwRoaJcUJAVJEL5",
  "key5": "WpwLgXfvjxqs57MhXer9xYmkmi2saU3A6A6FxYhaNU8XjHi1QxvovTkNvErcNpy1rQNw1mEGHxzBKqwVneSGRhq",
  "key6": "224Rg7ZXB4wmWZAVG6H4JbxBR5c9c2FfR2MdHvCe2SzoUowq16ewr8CX2xdXZ85FAz9vfpkGjQduxYJT4x6ScCAt",
  "key7": "4pB1NR5hTcCvVxjJLBZpCGUDbdCDHb8Dcxn3MvJ3jqj59XURWpCKtiERSCPkGRvkS8FGDyaHMWjAFWCyWftwwQMD",
  "key8": "2PB25Vg3GaACwjUEKLPCG133CxDawWgxUiqrq8wHhhDbCvu4Aw1rTpFzkFhjRJ5Epaj1pixWTSZqGWXsvTmdutSd",
  "key9": "5eHuFRbJwavBqU8VXdR6auoiUMj28UyQKYuL3qqJEyjgT5FWfv7JAGcwk7TKbpXWeYW29FERhBE5GkZgXrySBhpX",
  "key10": "skd9UStg8QQ5B8MC553knzbqiFC9zyfVtT21b3qyqMYHLCmMcJX4HQrxyS92UtKGyJ33S5as4WJogftUXzTsQMv",
  "key11": "2cXeVyQk3RXd99Ev6j1Eafno6aurAW5HjHLwwKpFu5mk1G56WkVXX6WrHeEcSuNcChNJmKrnpUWj4oLhXvwf3kDc",
  "key12": "2QNxPTJZGcYesr2aXuF45dkx4yeMF48uCdu6hiVMAXp6d69yXJvrZCbp4dLa5KNca9BAsE8azjXdDbjG2PVKEFTj",
  "key13": "5vawfQSrFLP27BS9AyY4Y77TVQtr1k3gaLNY6kVyxpCWErUb62WjsdA2hrgKp5Sh4XW895KCgNPoYoTXNXkqnoVD",
  "key14": "2BVZ6jgrQUzebnecjNmP2faZetWQ5AqsZHBRzefEATFJ935MYYFg146hcXqzGzeSJTAjkaWdkv8W7ci1NBGChdb5",
  "key15": "4rEqBhVfWY41Hvpq6eHWuFBkQxwhwWK7S6S4oCx2E5pf9gNaJ1CCRL4X5wXY8GMeYzvnBxamnXiZne5mUrRDezJw",
  "key16": "5y5i6gLSLVtZksgLcHCCiraLw9cP1fSk8EAHVByVwTK47C41FP9nt7Yd8iTEXu5zxTiwUqF6xd5F7RqV9AhfzCKZ",
  "key17": "3ZkrhdSmBZ5CpikXRyCVrejvkSWWeHxq98Dek7W4V44PnMBNargRwNtoSEkQAhduitmF6qftH8QaXRKSCxZ4yxom",
  "key18": "4iA2T7xBfUqzvMyjV1A5dk4186h5Me48VGyVEfHYchyt5wJGufW5Zbb237bk8v9eUZn4bh1q6isFsykD5h3aMmno",
  "key19": "4F1CFExLtB5Eg5EVnk12DfGSj1q7ooSqWWtKQbyzgfcovqvEA8bo2r28ogmHpcB3LFgXZdR5pfk25z9D1J82oV59",
  "key20": "23P4P1ZTCaUke1C9p9E8YaSFJ1tZJEzLBBSyZGdYhsbh4WmVsNKoTcpguwc8YC1gaWvtEquipo5zPkQF5paEqg1d",
  "key21": "5RUYgERRgQc2Bsi2vRa6WXtuaUjwXFgRSrAm6vfFVwJ3bBYha38AfjrKEmDjNZiNocbb93mc6eGUaG4qam4W1f14",
  "key22": "3QBdKsvR7PoQ9UDPzjm8Qxxma8GNfewzCDSPvygJbXii99NbZYPVKjUPJ7MPXrN8CmcPyh2XWMFZWfWDeA732Bw4",
  "key23": "3gY7QuCZmfSXvKGGG331T1rW3Go9DDPp7PPS7DuJV4DzWrv3c93ieqo8ZDiVnv28ZFPHRJgsJQbWbU1YMo5jHyzu",
  "key24": "5kfs98WejpMWkboFXY9s6cTgjaPauXuNEs8GWDd9n64ctvVjQawHX9UMRTdPm1cZCYyoNjcrQUKzpaqoiXZpxVRL",
  "key25": "mLQUuj9LaCYtFiJLnNSRR3MgcybTEpqD1HspWHXseLL3tFhXXSME3jyJvZzbQov5i6FmntB9e7ZVz1qyeKkAX7G",
  "key26": "cyFfpCJzHu74ehesPKrtNcdcPRc26xyiUAQxrqAotoQHxMAcukeyv4CS8XrMJzhiEGarouK2Ns8ESQKzT3PzKt3",
  "key27": "2DFJeEsimF6pc3ugTxTqBVzutMpvvGPquDPxRSHhbRgwPwbPyMr7zBaznybUiQwuhLLjSDKGAieHio4td8hac7pf",
  "key28": "5uQ9pKC22m1VGtWu84raQAs1okbBjiiZtsK13oxX3GBX9BTGncs8fMpYLjaPndYBSyYAb1ZRekbUegsmMb4wbEUR",
  "key29": "5SR8PrAdPNHs9aSf4sguKb9nmxpkJWdTWAKMS2SkT7qPvd8YwuCfwRNvjce1nrUnerx3XAnHV7eds8yUyJh4rURM",
  "key30": "47z6JS52JF5Dw771rNE2ownyw6pFV4MacVdWL6iVjmzbXh2oQTXocagbWCXzGQh5hSocNzDHZFS1ihxK2erBVsr2",
  "key31": "3Tbq7vwow4LdvwdYABSWkwwQ4SfbE4EkdywUXBgvy5V7rRbPdrPiTnoSNpVkKzB1DVxJYpwy85YDbQ7HnkuxJEhY",
  "key32": "1aMChPBKissC1bQJxQDERb7u5GqK5y11ioEqVkDvnShxWd4HezwT9q5JyazQgNWKERrWdFG985tvJqpZZeFAvCh",
  "key33": "3j7uLFXJbVvXQjA6f3ceDX4CYfA5wGsracV2yZMpN2LrGvjYZepKhaSfEWH4XX8f2vmpBxFpJyftPBVZUHPjHrLE",
  "key34": "5jDzyHc5VZNj4uadnwwyteUjfzRDp8r7ZEAKsZc6uHR12VfeNqjF4seG8yKUN6Y97M2fu5baNsbgTRAspCxznrK7",
  "key35": "3wryodA8xbDLPfNnE92yKhGDA8ebvxWF37gDJpEXrAFRPftQo6G8Z9rEFTa2CVoDtQbXCRLomAPo6GZq9nqbiSTy",
  "key36": "2cYibuaj6c83fgHXiBDGVAotUBV3b7ZEA479CWRpQEoKAeJ8XFstFr1bibSwoLWq9ec7xn11b81kMcfi4FEXJXrv",
  "key37": "3zWtdQsMJgPhDFvnQ7LZEdbndPQxZWkHwE9LFvXPx9k1F3qrruFjQLffV8Ft8JdBk6Nh815RXzLzbtUXp2xB2j1P",
  "key38": "4doYk8XWznWV3X72KcecJP7fxhKZMY3bpjhDUvRYyVqQp5NASJDTcxRjS7cYkwfhJPMxZPLGWqfrXEwCfeMvu2Fh",
  "key39": "2VZ3hUNuqhRA1gKGk5V7bfN3Gm8EXMbE1n5ZJRTbioMDxtb4uaTgMJusCpymecERKXvbnuT35NHzsB8G6tUQ3NKq",
  "key40": "wGotqsKmfquWJdXdYjyJcpjtJjh483qKvvsxALNUzbrtXBCqLGZSexW3R114fjNK95zFeRrTxMjyG6smdQ3UPYn",
  "key41": "4EajGbbydstjKg2g9ARTb5PnGrevuvJmQiQyi6N6N4iFigXsm5dofsiysmihbHDSYShGkewNukmVuyiE1HsbqA6o",
  "key42": "5YRz7PAz6Ym3XmUvkmZpQHm8oK7QD8yrDmW6Uvda5PBsHyGaCdnnunKFVGPAVMZLjW62m4xtetD79L8FK2YGjw17",
  "key43": "jWVnGm8RdADYqfid1NNFSECSefkygy8BKDTARrztvMMJQYMkzP2nH2xBmwMbpyEyY2D4ebv1g1Lnk9XMWKB9weJ",
  "key44": "3pxbY3EeBxq5MCdyJMnUENR6bGEEM49EGgFVpMbcNtdzuf2G8irci8bY8LxbV4jYaT6X8qjoUEstMUnFY5ivP19r",
  "key45": "472b6S1UNahToARCukdhmDR7zVAgg8qyR8zNjJhofRyz3hSuiY9Bqwscx3wuq2pS1oRGLYj72ZBBBc8fxuFarNMQ",
  "key46": "3n2CNmesY7SH6agAax3V2u4AA5gbu4n14TP21v4FoxyPNihoVPqMx54ytSR59wc7sHBhWYjyzQAYvsCtBYzN1SB8",
  "key47": "4S9mAzvQixQWiZFP7eFS5idwRy6ynpmi25sRPTnkbqs6bBWTxr1iBM9fTBisp5A7aJ6tCqCn8wABiS7fMkXwRFPq"
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
