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
    "48VUZdrgpxppb9yquhfpqwsAjnWTLTRGoxgBcX9Ur9j2BdmaFQmnXcxTLJqnKSujrcJ8nMTyMuTbYSQB2FEuAvzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jF4ytLh1r1tae44simq3ZRneE79T3wN7dKxW9hVGfSu7Q8tYzoDaZgsXHbVonKirYMtEJs4A8ikRXEL3k1rQuKP",
  "key1": "3Vp3eR8CoU484kwPRKCPkMovAWggfk4vv37QGA3wGKwq4oszEeLQUGRLHAnMMnGMJJxeQtGRc3jr9Zac5Zew5HCB",
  "key2": "jFUmJEKzfwbFWVsCLHjVpionTXNuDy6MnEf3b9QAQ5kQB84zN4XQcHs3PeX26x3sNNhHoow3W7XGJAAXucKr3Df",
  "key3": "2GLN42vxCJ4gaCSm2gzhwEb6bJAti5HwoykaTtB1PJbwVcjY8QMLrUxNyheXTGbN39TuSWE7VPTmhZpduePZM1vK",
  "key4": "4PfbWb13d53UcspkPR7Kf3Rc2u2kNDBc1p2x7jFBCzkjmZnbQbKH1h79bS6Pg3P37Ge4Mt1WHHERjZd7EhxUGJYW",
  "key5": "tphDvVCGbCFpDRq4i5rdJLx8JpyppxVNfhm7wWNaX8iLaHM2nEd4RdM8AnnGdk6fguvitKRhkwCLQ9XdEA3BbSK",
  "key6": "4nrprGR15RuqFDrye6VpooNRL7MGpAHXtzuUMfqC3DMF2RiSZBtVzzCGiSN2CcZcPHSGpWXjmU4cNL17Kbe3orPx",
  "key7": "QnoBYfuP4BHasMZUtSnsimntHF7z5rNZ2wWUiScVbApewvUWiBg9MfjRcjzFk72epbdSxgQURsAzLAVPsj5Zrv4",
  "key8": "Q8YwomcbXXcjoC5iSdrfguwmoTiSvBctTuhNYpDjnJ61vK4YLYcHeHS9nCh2sH84J3PgfL3sKdqPKBaZ8dC2Hra",
  "key9": "URtELPswFU8otoLw31Uwao4m7BTWU5z6cxeybygYXX7tciuCFweVeRQ8gbcnMPmazjUahAyYER1M47qNwVjNnKf",
  "key10": "41tCwoQCopCLnvJkEKsVMBanHRoEBmNwTGG9LkapzP5sA2ysS1sHH38kGtmdiA1JjNoMR6XPgyMZmLp9finfgeWo",
  "key11": "116NbUx5GeFT29unc9PCwFXJaeJ7Wu7oijggkDHpLuhc9ZQvW3w1i1S27nZLBYH9yrJioEJZNCKr8iXxQ6cP8KJ",
  "key12": "5GC3vrB6ZbLdYVVQV9M6ZW6uBnUDV9NngQ7WqzAo4nVzFDp32YVvrzYL3YLQqV988nRcZSbV2sDsmQMNjoW1ahh4",
  "key13": "4Mxs1oALnCHXYSs7a2Bmev8YGTWssK2aqCQ1aGXEwoJSMua7aXobs1PWLjuXcRnAhkUtCYcvPGq41NZSXUcZkfaS",
  "key14": "3V8yooDF6mB9AWEWgn2nZw8HuQ4RfLo1DXZ4vkVQg47E4uQUPFwuV8fPZkZ6n22vjF72gnSX65jMhgZJJJRsggqg",
  "key15": "o9TmQuRgtqR37YzN4qpgavPYRULqkFhLKkBgEaJGg4dyfMj8CsFgA1K1DKLCzvTKv58dPddvfJjGxPZ1UHb1DTV",
  "key16": "4pgkyckWDjtxhYXWeGxvY7CaaCekRqx4KCfXmAqoWXbXgUDsf6L29hmbbc5M3z4rhzk5tmXw28G6x4hDjUr3gCj",
  "key17": "536wcJDpKgxAyegSsJA4htcAV7gBsJE9uTtCCZ8Zyc93c2LV3iNyBiw855zaQ35wygAUS7BBqegseDZ7cLJJDcKR",
  "key18": "29rv24EbvJt1VaJJ2Go6KPUyuPtM1U51p9QXkifwRd6P7LQHiQ7UDzxfrmLaNtgeLxDsuwyhGkZJqokGuVyM5NxU",
  "key19": "3e4FteWErQoHwodNmJJWJCzY1ATweEJqBxcd5iSzwY2uR8fn7Dh4GyXNcx8sSMsdkdphcbYogR25VA7hVNdZyGzG",
  "key20": "2iVB7PJAvhbVtJTqtU2Gt3UUnARfD5yGG46hMh9ybeA7Kv5Cz69bcZoeeLGJ76ypfRJvC3Pp6aHTKwhUTfgvigzB",
  "key21": "5wJv7VWLX716YH82QLv9Z5cZ2js3fhjfftGvjVk48tkco1L1BM9qSV68mnXU3Kb9HF3EkLPTb5sc4bEsC8RD3tUn",
  "key22": "44ZXBpN2vhg5G5tBKQUGxX5rnNeGkea1uggUaG6acDoEcpayAB4kS9EZFQFcmvjaxG968nds4x47rKVp9gVRzTRZ",
  "key23": "3outwic6ezD3V9PZfJSDtdFvju8GPnCnVaGriGMaf2HBehmf2Yw1iezFh78JzfThutLCJJiJ2GndeqsJPxeKPnm4",
  "key24": "51iXFZZe5Lzhkc77Zxtm8PwZdfWwGAkAu3QQepqosnev6v3hGN6o3ciobdPfVxCE96Rh4mdgqwipwAGiq3Pbkr7y",
  "key25": "5S1mmqKxpkoCLqU3KWf8BKotBGh4EsyjuJiYqxRTgsisTX7XfWkRzNbUKSeY72JQ7iS2ywcYCZG7Tw54bpCPFyez",
  "key26": "3ZtZHWxmmjQDYDXkiMRx4gQGhNDKrAsCh64yLXkWyCv24dcLMUiyAV7zyyQ3THvjtAENAT9pj9Xz2C6yVuatMbUP",
  "key27": "3m3GdWs3Pnfgujeow9X8HAEXYTkm8T33CzhMEvgksNNjQCvk3mCyHgUbv9Tm2fH8sApbzxY9z343Xd1tDsSFSy77",
  "key28": "2geyMDdrrz8w6kjmDBoJvhJyH2LXzdiuBfCPiGLgEN7VJ7w7fW6Rkjqexh2DjxmuAGreSacZX54Nd5qBxPAgcBcv"
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
