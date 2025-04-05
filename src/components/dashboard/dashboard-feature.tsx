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
    "5ErbTDnhwc1szD4rvFzokwzJDKbRFbm6KNjfYPnfWLF3Z8YDuppzPFCbBKwTxE6oHUA5Dt1VwUC3shEni9dcTVTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tHjr4JJzEbKGHYHHSxV6yBGKyKy4GpphVRfVStsRH3KhWWt16qoNBrxZ7hRD8c4V4TbyCmsbTtpzrZMiWkgyQZ",
  "key1": "4hheU2MD95QQbC77wvhCHzEqueuFkcyVjGPopgk7U9cstm4QAHf62WeQUBEnSy3kBPpiWpBWx6xARWncmwcw3CCh",
  "key2": "3YMDCruaqQJE2hKjuaDinrg74baYquanmNkzxR7ekHPkbGwD3UEXz7iqv6drwnWgTCfoSj4KaYUbEWQnjGxMD3zq",
  "key3": "5AK1uhZRgTy9on38ytsmVaxsmwkhQcU7qW4C9eowArB6hGp4hqZXTuHoSSjpb5yUViSozm2PRv7PyhMPXKDmobqE",
  "key4": "3MUKwz2TscrvC2LvZyNPoVfkBASDpB9LDJR59RmMcMK474LjBc3Vh8CEM6SbvjKrX8iWZQqimtRKCURVDbv3G4rr",
  "key5": "HRizD63BT3pFAarNY8J68es4wedBDDW3b8FxSJtjJBxqJwrGHKEaNy73YSFXnfrH5XcT5FKUvFnrdKs2Jb3WcQM",
  "key6": "2bFHgsZQ8MGxwcmMuoye1qHVqd6U6RxLeZe99c4QRgKtfeNefF8jC7EUggzuV6KahTsYV5Ruup27RhrSkLpi5q7e",
  "key7": "3TratqzCFsQ8rdfC8qqh4L7sKmoQiQdR6iw91M7jBz9MvBbhFjjk2ekNuAoKQuf1GUry2mCLAErqBhWinuxy8Z32",
  "key8": "4HaTNLD7gbde21od9zhBSUuCY1rU2JJoQHiMx5ZNw4NwGhcwsWW6khCoBBgvqpwQNVYuEgNsKCu51dJejnV4Hyo",
  "key9": "sdhxbXWFytvrqrekvrwPvvoYmZHtsAEcamfLM8jJFjnQsjwimcA4MuYAGXi9Qoj5gZA1YPpDtCpBEWkRmj285Cv",
  "key10": "3WM1YXgPtTS8z4WdvV4MvB7sxtc1aCWtrMvQoyjR9A7brNNA2rR2e3FrwiJZL3zGVveFEDQBrd3vnNCb9WEvY3Ht",
  "key11": "5A49MbGKiof2G9FFAUXVck6wHKfFWoho7ZeZHY6w6b8TKZ2QSNACABxK3ByVuxTf9qsAFm6rwW89zjRnLrCVn27y",
  "key12": "65MzSkJ29xnJpuW6WTFqaZKX7n1PmfpsthrLN7E2avXtKJeJjGwsgiLCDefpLkqZCeKWgJWGxL4gCvvPwHWXs1TW",
  "key13": "4kpmKongstCbxsE2ZjHZjHgkxfFfc1jRAMqYBvgu2K9bhj64TSDsUb3YVccB621igHKweCz6ZsAWt3Y47FZrvBi8",
  "key14": "2BFM9iLxDC5A9AVgNBc6JRxeZWwMpPSoKev8VnnZ1sv74acJAtb8TwZvXFih4Gy1PFe86qpYfeWUbt3pwM5whuDu",
  "key15": "4xxefBJA15Zc8dMTD6QnKyYC5Y9yXrpPEYPGPygzKYhxfpSRYTAgYmNr1Zz3Ap3yg6XkEPbsHtZJ2Rcf8zRZbBWT",
  "key16": "5C8A4yuM628S5CH1UbxfUCKr5BT5U4ZWmAiKHWLNf3HpKykoGG5JERQqKY6CTx5UCT2kaymQmQPQykr4fECzgMhJ",
  "key17": "2D4GEJBqytJWLLUvXRmpBMGa6jfd46zSia1D5PAtUqVsETChe3n55wqFsubdpvCv3UUWT4JVZXVDdn2R3iKpHoDs",
  "key18": "4dDstxvcabbpXAR2v3aA3Tfr3HLskscXA2GsoQJMLru99L1taHYYMqjtMaMd6RoNXqkTJQ1jFMSZYWs9Yegb7W1g",
  "key19": "5nhDY5534A2YqPJx8tMNEFGZMHKaeh8m9xZEwdkRc1kogJkUAZQoqTBZtgwcvxyXmzapMLepw56BL37PvS46Geet",
  "key20": "3kThBJX93p3zoGx2fmEzm59eStaiH8tvar1uQv1HCdUeQUb1xDZX55AgaBpCzeNwPRAzYkEnkk8kiYJD5GhGDbMo",
  "key21": "2QBapbkD4Uq8S8ebJTZv9xMevWV8HaAzKcNAvf6XHERUbGWqSZwUYJttVKSEhzCuFxaxWiiocuwhjZuFAnZ7PQ3e",
  "key22": "hj3psrAq3bSEUBcnGbNhd3yevyLKvEMacbmwdg84U923ACXbqLBXCWR6aTegwZ8D1Pgrxe6DH1SC2mo5mpF3drg",
  "key23": "3VMYWaek1iAGcKuh9f1pLR19y6NkYm5oW2uCFBLYGJNehVeRGxf5YVoqvtFgj4F1G7znPLbNZPtZ9rfRfqHidQYY",
  "key24": "5fwYFr1EoHWdAufspZp944zHDStN2fT9yj3xE8PrpoyFkLC8pnjMMaXbtGorKSAWr5cHNCaXMiQ1XquWSaNsPEqy",
  "key25": "5F5GHdMTFCQ9wynELehc7E2fvt9Wwry18hGH9pJZ6obB1ekMHBkNVvR7d6NTytbpJcmN4zphwKCtNU1xzM1qCqqP",
  "key26": "db43Fuj3oGzh6J7btmBpTs9ttESLY1xhLdG7FVWrBjF9XRsL2RSkpi1NUgVRzG3fPrbyr2T6oJrzV7JLyyyhDsC",
  "key27": "4CuUkr2po9jGzHKia69N5JeRR21NANNTdpB1R1r1jc3hN18o34VfGTVDAdoR8uGmkrm3mm1PDsFkiL6B92TeuS8Z"
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
