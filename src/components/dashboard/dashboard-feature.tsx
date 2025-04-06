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
    "r5SB7Vgyjo94iAAewLVWFu2yYA3JQ17TgRhtcK1uJvg9DciHksmLAjrebgmzxwZX4qrD7zJwJ6cCvZBVP6yWro6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTXP7FW34c49W4Um23YsWWpuj6JkL3q8NVm3UQqtgKwUCaDvdUH26FGVra5uaQaXzyAhrYQT29KSKCLb2RDXEFA",
  "key1": "2pMg22Jp6MEGx72gigcncmGx4GcRi3myefYGT811gSbyvSCmG6F3F4wu8J8DVezMAhtkhvyodiCx4TPRFD6gDmv8",
  "key2": "Tr8bn8yvJvqcBxP6fgD8aXhxpadqrgv9CQSLPgwHuuRbYQAqnNB9CX68KPc3e6SUYTeE879jBJqALU29K9TVNmb",
  "key3": "3JkF6hYXMyUQA4xxvvy6uy7FB2xCz4hJG5cV5FM3Uj8MmVusDBMzJA8CfqKXM8jxMSydyZMbT4uCag15xXZ93zsQ",
  "key4": "5sE4sTjXE3wBPrm1ztQfH2E5LqBe8BTXW6iTbrXSLfxqTD6qQfdsGsN2V477JiL6wdYWQsxGgEtm2pd6YGecr96J",
  "key5": "3pPwYJzvcb8aQBMmUyWQPp4Wd4B1TADK6AXRVWUUH2Tf4aNjxkN18zmSGjMxAYSN7DCeK2kiEVgK48HiuvKrN6Fz",
  "key6": "4qsGAm7tQzJXeKjsvTtKRdNj9ky7vqoAZPTwSJvBPsR3RajBaQ9cLgMJHPY9x1PkLJ9TPTxyb869aEUoa5Z6iTZZ",
  "key7": "416ziBMTVRQYZo7hcyP5nyH7asMsxfTHKEQ7w42nswYYBu44TcQSg2rMrPbrDu7sxBF6mGY3CJhu9jaFrJk6T8gC",
  "key8": "5Mp68wbG85fmWGn5zMEtK7MMKktzPbeQL4wkdeveQkM9Nuqn4M4LHMWFv4DRx953y24FdcRauSFTstF2AYMSppKq",
  "key9": "36r9hGsR55ohp87UsoXHb1rTzaUnBe5Djy4p9wjUnHtYoAfk9g5U9QqdpycU66SzDtfhekgwDnUrDVLrqjYdWLe8",
  "key10": "5kNRDHgaq64wgHntjDC77WuLHzngjwJ4L19VrqmcjLWtAwcZb6pm76ZsMTZcMCmg6La7YWY3E6AWkoXZgMAHxnz2",
  "key11": "B1JSfp5Nxejy7sKfuefSeBP8VZbC59rKehtF5ggEpevk7i8ct9LYpS9JF6tUZLeX2jkDTebKqUZjwpe24rA2mxj",
  "key12": "SzB7Trchby3YsvqTKHaQxdSgBGH8pthF8Bjuamjx14eVC44DPfFznhRQVusQHARbB38qRZzYJm33aeVdR73qzsh",
  "key13": "5ATHsi7XJ1ftUmWDWnbfV3z4P7z8i95G8NnzW38dua4LuXrcUgpVh9Mvd8KwWBuS8ruQxh4XTh2PJY9tShzr9iWY",
  "key14": "5rm2MrNoHBJnJUqmRx5Rs8dFmfq1pcdZU1jvPSwHhJy7Pxb412WKU7jESqKRXchG7o8Yc38i7YhfRf9SdeXdB4jA",
  "key15": "5UDCsJm9ex5Sxi9B6vQZHr8c5HFGWPQXVst7Lq7hbXHnZn2Cgu62R7GDh2CZve9dK7RcEKitT7AAAaWD692uxtSo",
  "key16": "XL3qoD8j1w8E94yeL8iWN6yQHdqCFkkeEemzXni6hFD1uXyGo8UQDiHo4c116jWEWJFVocp2ATbum6NUhwqJTnM",
  "key17": "5YQrDvtE7gRABBxxWVRg2K6ZZmkbX8jmYCqq1QNhQ9HLvgA1R5wgNWnKq24sEVgJ6J68iYY6vJV7UNrRVMY8KK8s",
  "key18": "2sAJM7CY1Q57PzHkHJQ1LKuMNbYrw2FTZQXUHRX8X2a4pJAFa9uZkMLG8FYM7Xh83J5mXUCRFsUyqmt34pqG4d2P",
  "key19": "NnUnTuQqXceawJGE6k8bzPPJw9BdrM3eLJAzpuZPAkdGd92SKvtE4qidgbWDQuTkouTNaEcDDRhgRy3DvxebaF2",
  "key20": "2fYSmQofrwfZwGYXoMHzXCbUVM6mcHddEjWe84BSLJLbmEY6gLGPzsgGM8HCQc8pjR4yDbhbDvRgNwMHmWK1bKh8",
  "key21": "4nQFbfFUaeY7DrNTyzQv87UMPsMSD56QvSzGt97EXviU8pziWoFjzm2cr7hnVMX8AkW5v51mN7hscsZxTNUyRqEn",
  "key22": "4cnCkovwu7JQH3rVkhtKHPiHd2eTSTxWWCaKo1Qs4zyB9yRXwke4JSyrmcckzTrs3YqPRuj76ZUBdZU5viwyhKZm",
  "key23": "2RGBmsyZQbVDc5mi95yRoin1ZNACAhubtLYS6mZP1Srq26FiFY3wfr7az6qgnfRjVyG6jWFWap8NnJ8pW5zJrJUg",
  "key24": "5t1st9NqRkLkg8M4eyX5sJYvqVR5eKG1iQj7JvxGi4KJrFctseuUyj2QycKognbQSZ5K5dcUNR75tVCemFoXVA1n",
  "key25": "3zGfAdVDSDjAC1bT3ZwEvEk4vqw3pinMi7kMpydPNNAoFUZdE3KDFNVWAsZMSwDeJB7VfggeEXtDHNFFjmkt9CT6",
  "key26": "SLTyJ1LqqYBSXh13CGUeY3dtmoT7T8KsfqCWy3PET7A7mimKGw252dN6vPC7wt5bn2oQ6uz5xML9kF9QkgVMGVh",
  "key27": "2wJhsRgbUWoG79tjfyxWLcr6DNMiTdU5QQ8ZKxenHxrcfWFrFuTtQR55zNXdHc8Un7AiUv5E6EQTgRHYsmWk2GhH",
  "key28": "2qvQQvhtNNc5frRcS7hoT1RioYtQ2VQzuZQbRQqAv98qLWux3vu2q9fZXeTWNP4MffmEUNrHEnHFn2gSiNxxdbts",
  "key29": "5Edz6fg2sCUxty1mQgvrL29RQQ3PEu9QCUVDSz6xKfs5EkbpyTrbMKUVHekmoRYFNeTc8MnT3KT6mMNkviB9AQV9",
  "key30": "3YYhdyaEUHJBsiw91swPH9bd4U1tmAZfnUzzAY4ux6DWLVyYzfi4rDLH5arMStVfoWBDyR1e8hEzEFS3fypCCPgw",
  "key31": "223CXGAQMtbs2vusReZCQWfYEzr373NbZbk4hf9ZRat7RS5PZTZV5a2gkZQK2ziY1ELDBwv6FmETt7xqX3NX6FeW",
  "key32": "55KB6bEJScj4rXX2jKuLoYdAH149h8ospSYGmC9i6Pr7MFkoDw92vK9iF7nBkARvpvajw8iuUBwBeKPdMy6oM1qm",
  "key33": "HMpWDh2ZBXYx91BiXsTk5WjcvBFbfJ8vjEfGMp9yjgiVo3SfL29dgDAi9FfsfGxkLSoDVBR5FEzCywPWtxeyfNy",
  "key34": "ZmPbWzvuVmTJinTBRKcHuzRJsdUpvQMnznt9sgER2w6zDBqYuQUduo4Kg4H2Uxe6w3dUJgH1R7WEMUKBWUtXPjK",
  "key35": "2sn6WqVAXPAriLeVJNKQbWGXQ1Usbv4Wd9GmDEetc4grWNSViBNz23WEfUMr6k5N9p1GhWTYu8kGaahFF6TDyyFR",
  "key36": "QN25Pu6F64ywjzF73Hoanwo1Xjvr52ArYXqNPBgjhusN7YBqSwCbT4tGHAvURgvpCPdx2csMJndzL2dp4Udx9LM",
  "key37": "4bfS58HignBvX3tpo5Ph22aVoxhAfKzNot1VUBEBazsRHRbGDrF4wxK3YspeQMzSEiP32f74bbU66acthdDZJ2kj"
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
