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
    "4QwC1ZVuDVtykA558UWVBHLKHGvYCDnEb86ss2mXetSrzzLtSecXhKpXcBnCzAdMfHguTDZ8W2FAJH4uVD1H8PbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLWFhS2JriLsrLPMyBcHfp7BtpsbQUzyUpTfQKMmGKTfsg3sLdGfJSPK6FfhqzpG57jUn9EFQKiYDnGxp3Qisve",
  "key1": "5fV2fBgXuA5tEveEpRDcijkmd9VB35Jzxko72c8Skz6cymZTnfddftzTKRwNVjec4EamzW6PmxbQX7u813veVTAW",
  "key2": "63WXhsLHDDuaFnqKnkVe1327mLyzZSt7kffdwJHQchgdZpjuTHpsBPDosTpsH6ua44rbzPSAcUDzrVwdzwYoGnRd",
  "key3": "67Y6jArhbPhkXjJu6fGVpuHCjSNvvoUmuqfdQnJF7GAoEoSBFmseJyc9J8p7v1NKdBBV4GVm8mGS7a5bp27DBsa2",
  "key4": "61aqgXGzydg4BPz5thMgDvqUWdtTXWJg4HG6HNFQirv5VBP5Bv2YiJkyBAR4amWJMEXZYDSjsYdjn6DL5TzAyDGa",
  "key5": "2hfXZ5Zj49dSYEopMEFDXri34k4TtPmzi8pcj13FwYjQEGnDWCxGBA2k2cjBtf124EgbH6TW3szJHhDjTJFrTMJe",
  "key6": "2LgvQhWppzGLvrYeb92S3heBnzovoCkucJx1q4Y8MZymcaB6xk1PFe6Kk1wGM45yEYBYyhFDefeWsvw36szviLrp",
  "key7": "4ougEBVB3LHadqNKDdvsPRrDuZLJVDDKHNAytqKaEyKqTZ7HwJDtguLA4VroqzEmUyfRVoWcgUJomAuP6Xv4juQH",
  "key8": "23XfLAKPQNaWhU9oX37Bk7LHVRU69MsYgTAcyDxzF6roUsY5U6YqZ3gweougb7M3qyM6pUtTRP6ayEscAm654vF5",
  "key9": "xA2VJrjrm6rwDvaCAwKinzLjJ3mJRRVd1rwYWyjeNouGo9dvebufYWHptfthJaZcc5N2n5BLQ3eNyMbuipnx4mC",
  "key10": "2Gr7Tq6fzqzrFAF8v2dNpzskrrvrUB13YQPjXY81hc4Jrsj8hcuTHwDmLrbrGTeuXnKbFxv2qtrDFbkLhPCYgayS",
  "key11": "5PRi4TYcQQ9m8KcMqTnfy8Ma97ZUbJo5cg1EvEmJHWSNDMm8e6gSdnU1V4T2GxUqQhMAvosCG6dbvNx3jREcdZgR",
  "key12": "3VeJkrbwj5pv15a6q3CgegzfFzGsEht2vmrXf5NxR49738xaoQVPH27xxEjpU3S3KzJbAuRxRHsatMwdmp4pntXE",
  "key13": "58gntZLwAwq82QqiaZMHWdiW9pHaQinE631x2aEJyxdBFhxqvQet4vJ8VHX9MxL4dBYqh2yofkwoE7zkHEee4th6",
  "key14": "64KjQyow6FmKQfAYCkqCRZj6Ufha5UwoNbPEZLkp6VVe6ashAFwcTYCeYwfhef7xuddFcVU9byaJqFaskGk2YQY6",
  "key15": "2t7CcRbH5p4KvskwwPwPrji2ys1XBewCzwXvVTSexqMPEscpAUaNqP8rgHrPjQc6gNgeEr8sbmPqB7RJY5EihagC",
  "key16": "62GLdEY6cg3SPL2SuSLkA9vFphbtdVvkTQDvDxFKdifeDFzRo334yciV8W9R3AqkzbJvn761dJeD84QuE5yFoHnf",
  "key17": "5zPz96DqqcvNKnbxbchA9RCy6WdTApXjzx23CQKGkwhcqBbQdEn6Mt9w13iYwxrReKKdiUCGBBoDAP2GcUJ5ATtF",
  "key18": "4bM4xmyUG7inuCh3zMgsjTduUx5buPM6PmRgL8eLauebWhC26r5dLHjjvCxMUXME8acKJeSzEwsy63AkMEqbBLCE",
  "key19": "37tqx58j694sqARUjz1MnwCCpDr8PnmfwaMoZiibnPmZeVhLk454KvX94njV8cQQzmAdHsLdbp3GNUyGftFPodvB",
  "key20": "3ZXLyTXLM4swFpf2hi2XXeyZGooswrP5FfgVpemU8c5rxTiPjhMV36YrKTR6GvuGh6tJcAgwKKmYG5keWz1NeXbE",
  "key21": "3bQGJEy4unKRZxqUreA4kywqmX7kJgDjumm4JXSX7atbhtAzir5isiH58ZYWudMCqxZSbgkNVG44jyVffBRBhfsf",
  "key22": "45JYprMnMfZd8ZwfXFqK8vFumnS1weDrMeQxZL75vXh3GMHwz7UnnYSSxtSH5ZaBkkBSdmLn9QuJiwHjcAXw8FKc",
  "key23": "QhZwgHgHGF2adzC4xeEcKuZ27pyrAfCCuUvjDyb3uB5VsHwQKwdWh4w2qYvUytgRLCxneFeQVvi9AJwNN7qnAEJ",
  "key24": "5oawxq9gY4gztQhfq7RpaectVbWaPMq1RT4kqLrpA41HGQjkNj38auDdPbXmUA3WEvW2F5vksVBoscYiFVatvBNx",
  "key25": "FS8sKJWzuhSQQg3duFsZfTSeznRoXJD5eQwWgERfJBTSaWVvRXU2yZP4NfvTQAcF61MFrwufgWpyA6B7acbZMaB",
  "key26": "5bBWTjXuhg5kfj3m4ydKF2BwUyphiTTLdn59MCjCE9x9LvRqotzScXQDfNtWKpgSPL583az2yKXWPBZCmimC9Sci",
  "key27": "2gNoC8QGeHjzhLoUFG9pwnopg8HiTeAfmJnJFVpZKL8oEouZvYPoqQd7Uoe2wAhrn5tY6w7ENn9tb1TLARECRH3H",
  "key28": "2dvyrHx7ZoXxw1TcL19ECHosmfaruwszRU5e9NXRSs7ZTLdoaubFHgJkmE7BD47X3hhYLCvoEj7X9NfHdV1y6tsa",
  "key29": "2GNNomRk1d7ubameZkXXXhm3LUU4e1qN7eVs2dRictioaBtMei2sRvQFXTTvTvSBHEBKAz1MMfVTHZXky2bvpVNe",
  "key30": "3cPQfyypa7e4Fs6X7BDqirmFcUormraFe1K9BhoTnSWUatrfasEx1kmRaCuejagtAJbb881yyXKwEGgEuMHykQHN"
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
