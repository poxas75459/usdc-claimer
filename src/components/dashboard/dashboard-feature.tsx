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
    "2KA8C8Vuhk9Kbg1hURUwVRvTn5WrV6S4FrQUJ6CoxQA8XeCTSz5Zj4FJN6Lbkvp3RLqjQjitB71vtDU5jTspHPZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaBFVpzZY81BB6CPhs3RbvwmA2zDSUhw8MhCYeDrXdfVLpicLWS1kbdXCvxRYfow4WquaeTSqzMvjUSAp11wATt",
  "key1": "3EQF9PqeP86ynCL2uuAFrpp5heB5UEQWzQcvtotEzUvFSQyEz1vo727ikLgcuz6X7g5pGbSYxq6pza446QpoPLVV",
  "key2": "2K1Y8jhpxuRPUG5swX1qGFGoxM1XMvo7z9BndDkH6yGESMNzSNEvzirPq144qfyPDs3szT6UbYfbJNoejJKfEppb",
  "key3": "Ceo8d3hZR5ioJnUgk86f6eRt1T3dGqg9NiiwFMtdQuAJDGpT4qCEU2hpQP7ZtTNNfyjJ1LAoyYAKd6zjDCQVvp3",
  "key4": "3yCArZmuUB75RVpyAZ3AsCp4cdD2M82mczRks8BEMJm62sFtx2DcLRHezDkjuBQKer9HqLMW2MFpnadXHWAyVR65",
  "key5": "3MeHq8a6nYn9PsjwSLsrCQam3APNHrCkT5zBAugLYHGrN5RZvPjFA5zPite1R8hGYKzHVoZRTfytGNAAp4mLaq6X",
  "key6": "41cfpXffgjwAK9w8QP1vo1UwPgi1kZUEthcqtGzmwgfFkzKvQs95rPUT2zYFqWYjcJvbv5FgFA8DtFyzVvAFgjSb",
  "key7": "226AwgnxEVTxZpnNJSVyYhxoXmgGBrX5fz5L6xEtDLrRUfTn5iHsGnfhB1kyCUPtqqepwdbrL4hobrV996AaU51j",
  "key8": "3hzbR7EL6dp4AjggjAWBAPdhkWVdBpvE3L13zyjhwnz2k4CBYFFPZvCzvMwiMcea1unjgJX9XCbCf8F7fKwUjeqN",
  "key9": "55iV8t4vS5dmF89rwTb52JBfs8WAUGqT8P3XM82CevjgB8jbXsZELMsuxjNQoy8w7RE893GKFHshUThkJudARhJ3",
  "key10": "2LuVWnyUMePnmmaepoxT5bdYk9PUnBkmvYTgG4xK8zU2VqYmr2yrz9wYab9Pe7gChFKozSGSChxgNN9okSAa6zU2",
  "key11": "4LByYBLnEeqNM7b9dRML9pzXuwGr5yQFRc7euQdeeFFXHZfuMEkTCm43EEVXa2XGr2XpXfBSCuinz9YJzQtyKSWj",
  "key12": "4ckkJmNcEJMxiJMPifMLpd847QrzgzA9zogf8SNBQZmoUVPJmR8vrV6fkLpvMxuiUuciqJmwYgPSHwYt54Jg3XnJ",
  "key13": "5ud4amn8j2MAMkqhoA3gEewRoFFDDpUjNLSviBWQBzRRcRGYUCQKyc87kSFAeW57Va7AnZt1ewsSGMexXk9X4oMW",
  "key14": "2GSL4Ldi4zpDyJAuhwkTkExbnc4BvLQQvAyyCHm624oH5k7bYwpqawiRWuoBcv4Tnotmuwq4FZ9Yi3NzenJaNmAu",
  "key15": "3BVqBM8MdZ2SdoesFd5RxepB4mLqc4APiLcb86Hga4X8xcQmJXnDvnDAMYsC1G9q1xWtkt3s3gHVqXT7VocFpuZs",
  "key16": "3fPXZkh3Ru3GvjX4CkGenTkTwTdA3fxtBGwwsKfBACiY8vhgKPvXD4zZLBtoZToapS2HKxcsyoKRiSgNBbf2NVrP",
  "key17": "44yHRvmLE7PLcq3kC6Ga7dMnhQfGhcMTw5iQY1g14oBPtYEkhxpiy4dDoWU26v382BLnjpuD3hh4DGtpjmrdHpWk",
  "key18": "cg9z2Eg8KXNoki21fbsgfWxXSginJaxj33Vha2GYMmwcm5XKXqRvhcmvnyM9TcQcAT1E5TaPsBC78AUngudDSKk",
  "key19": "61hogNjMn5DaKWipkjhTa5bVnt79B4Hvq7iNdzfPT9d8NKPDGfg1EYJLrpgbWH385ybBGDdua2uHVZk8iaa3u1s1",
  "key20": "2u4NJzPCEu1GEF1fNpSxnqoTJ9UsW1tbPkt1qXthnWJV6Z9fYuKRHqua5EiEPXSEK8Hbf4ScmhqoW1AESvteRwZ7",
  "key21": "4n5Evpk1ZpUJ2GMh1UpycPp1kAYQ5Vfarwe9axdfidMfEgvNYze5oEbA6CgfAEAtStdSYQYwxqRcNJytmRWyh8F3",
  "key22": "46gDDYeKMWT8nZCH3Xj7L3teSMjNz9Sm2PvwvJ3W2d9e3DNtZqNrrvFtckHBJ9ynZjTKGsLLMwMm4jvSe5PBcca4",
  "key23": "4MxUs3uRxYUZnMBcNwdje3hhKyRZFZZXigkG8RNaNj3dp49YfsZse7KkUaGix87aZ38gpyk818wg5LbQ2mzgk4dX",
  "key24": "2pPXoKfGsQdFHKRVn552q32SSNPLc5SjchaQZEiu3vb4MiUu7XwdiqaXjoybiZdpooEAcokgE2Ep56sFQrgFDJsp",
  "key25": "3ca55wP5PFDdxRVwYHkFh3WXhm7ioEpdt2ffq9cxYC6jtsHP7NicpNqoQdLj6WhRdZGKUAXAxwgR5wJVrot9LJ35",
  "key26": "4SqcCtGKcdyXTg6JUrkXWP4NExesFWwg9drigroHcXaQqmYFSvZJKR4GAXeH2WftxkVJUFG3xLMSmhKZyfSzvFBn",
  "key27": "4Wy2Vp6YMV8pbdiadqW9BwB16RhLviaj1aAZ83wFKwBM8AWdAZ3WTTwTGk6wn9meHjFvtYjeQge4ak5bBaE4bzzT",
  "key28": "3C3g2fkNpYB8cniUXwhLTnGWCi3sSdqyHkjAmrHxq1gkzGZrKn3o6aEh8QMfK3YRtFYsSov6TdfXBk3DVnHFPzdR",
  "key29": "5Fuh82ejMGVReDJgtc95r8XVDJ6foYVFLLYfhkwhEXwh2irVDNCKDBiejEbEoqEhAMPFttQwyn9DKc88VqrVqfGZ",
  "key30": "2Byq8UwjMEBbHowf3MsuhQUysYnCsySd5H9WGfj4nSXPPVTcCjzsNvvk9gAzBX4HY3mfs7iP4Tw2UmZBK8ivjHLW",
  "key31": "Bs4zqQFaNGReokreQ1E1LZb84kvEd2pK8xkMJdUKS4GnwAfr84VGu7z81yqngRycFHJodAZWNPku8qzpJhASQxz",
  "key32": "4idaK2Bo1LGXfJEmMnrtLCdYikyQEDnZW28DsNSqDHWYdTWbyuSdFYxK521co6FEWQBvrKwEv1ALUNVSzJtV5hcz",
  "key33": "66D7t4hL7iTKshBymvU45fX5Jr7BhZX4sHkvRJ9X3X2XfyTE9kEoSvd89rRVw5YVx11nRBZ2ZCg71VPinzkejtqa",
  "key34": "2LKviZsMnuiJhq8wqTBEfRKq9LEHrTaEEfdTbUmgCwVXcCx4RCkGtPxCqWMuLzrZQoPWGut9VDw1b5W1ortgyfZs",
  "key35": "4BwCUm4SjcvLRwJvGdrASgQ7bhqsWrQ6UvAAwdZGoHbdLA443j6GCtrPJNg4nD1finGzpMNDHLBUKGYNpZvKKsd9",
  "key36": "29QZw8K3ctg1ABAy8FzowPRitmbtuyeJTGT5fEQJxw7WpaQzqUwuhbaEjyrD7RKxRHKUnGwVztY8xfvFEQdWFx2T"
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
