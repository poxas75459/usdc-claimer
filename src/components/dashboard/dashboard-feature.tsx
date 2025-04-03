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
    "4MJfz9h5Te9QvZda6bTE42NbD2ynaTdbfDqvemAMCxE7iq37JDuE6hRUUCCNhQHr5QjL92nVzJk6Q8VAq8bHbEFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SfreuG3s6hNXGkpDg9xgDDkFgMSk6fVzeNUQJNmLyJeezqy3LZN7ZQzZ2dK9E9Xmo7a6BqiNSSq3MC7gZNBNaQ",
  "key1": "361v4WZe4qx6KosHTrUp7vVsVpHSZtCrAKurVM2HgY7RWAVRUhCMo5QCZhEQ98AUDAMJjguGGSQMz7JVuKavfuSW",
  "key2": "4CxBjXy3xz7zSyTRTAL5Ak31zBzJXPoutizTQrrkXxBxDFZ7spyjuDKZHJAkutV7CmL2gGEoDaafpotne9Gq2R3V",
  "key3": "4rVVDkAu5mFWfBE5UGddFSfYdMr41WLVNhJCZQVebbk3sUV4Jeb23jPGBzPAMnF7HJs7cKabvbswAFeAxn1m8XDh",
  "key4": "RuytAXAGWxPHZYXGkrVKu38NNwcCLjjMGu5W1hxDLfiBeZuv7JSZAcd7bydF3EssC1v1i3Qe7ftoBKBeBc1NoHR",
  "key5": "44hPo44ChLMCu72mXeD175tRMMTK6d63BH5QqugJtiVJ8QrezGnrfwUCDxNebFKzdmdzP6pizT9BDf1t9NYn5Lwh",
  "key6": "2GPfhzfRP7K9G5jz33R6XabGanvWztVDVeGwZT6Hooe5n9CBc7uA8AcEAdkx3njTYHpRUqzoxaCgumxgg2PUCqL3",
  "key7": "2YJSUKyDLrUk4NYnrtEyzbzdjfrVYiYFeFxb8VconDvNLxET3jDehdPeSnMYR7qZKAcjkrzcMGUEApVYjBnJkE78",
  "key8": "4aufKVij687SD14EEWRyDiduEfGmnzEBkQ4FavhayMQJvUXu1uVSw8r1Pyu83gafxx6u8GX7MTa8YaTkh1svXzS2",
  "key9": "64v4tmVWDNbg2sJAXBymAr28CM6UHki9sd8XAzJsMBfxNmGCiyHuH4AWBkXYE9Vcezp3H63joYXHuu7BgfP6yB59",
  "key10": "5b8JEjc1zrX518m7PvHq3rD3W98YaWwd77pkUCbNRpN7u3173dfqM2tpjJFPuGxTKPKgjYsGjjpC8bGxiYrQZiSK",
  "key11": "2LAUtTqXSW4ryLJMygX6eiWbLZ2oU9tgQW79Tcd1jAMU2qRUHxUsFvZVJZuFN5acRBJVRnRcPz4h48Yp6mTidTzQ",
  "key12": "5gcDUL6oVrjSx4LLXzJmLUVtQpxrssLhndRV5ZGAC6mKv3oEFqKc5h8JGdciFySNPuxGwup86jw3p2R1g6TQpPRL",
  "key13": "4M1zrJzjgZn7GCEyaU9jyNAKnpVzbTnRuJzXwvANSjMWUKdGp4yWJJTcK3YBG2AbcAuWuXnNMKUVWdru6rkheZco",
  "key14": "3JrmRnW6yoerFCiQmKFgMGS1Y7fAdpR1AzCygdxpKRsDiykbjzuHL1SK2dSdQmufE7cnHGk755FFL3SQ4QfXJCED",
  "key15": "LhVQaiTBc371a99phAN7PRyHMKVyQ5ewYk7pDdzUCzZ8SytigDHb26uJ6qKMidAmHDqsLTzep3mMpcogrXupCgd",
  "key16": "463UY55FCDsdr5XCxLbpBeWEFtsav1cHZrrMymKfTyRxFqf4P3Psy78VpDqcymbsSyZBUTKRR66PGhsAyARrbE2a",
  "key17": "83oZuYCG9imh4jrQ8xRwME7YY947yjmvjSSpqWVEHhHorSve6khWydieZpJvewCgQgC278M33pBajSsiXXyaYBG",
  "key18": "4ihVMck2dhRjFk79oE8iaKvGs4Rc7yeJv9an38RENPSE3cSdNdQh3YmHhymsJbUd6LWLiy8vP7d8VWreSUsJ8NtV",
  "key19": "5DT8TDfDcv5rEGcBMvofN14242diHKtUB7ZKEtNhCkMdyT1UYdrYPEcWZm5hvAgYn7pvWEFkVLq4LogzXZkKy53V",
  "key20": "3g3PmWjDuE8Dq2cx2Pd9dhUTF27fcTvtS7PV6wNWLmb8zgKZoJCKoN7QpcRiYeZEDpyxkWHbeN8QGgTN64MR15A5",
  "key21": "5nBe5xwgCwq1McMqyo4zpXNgE5swT4iMahFYVaVR7Q3ujyjRkd7Zq21izF9TqKbZbkxM9HAnXbRwb4N6sYr9hp7a",
  "key22": "4cGxgYhD24frAnDZoYAw6RSPxmazsnvZRQ1naTo4L4V2QzDei7Z2bDutVGUVSHH25Aba4o9ncbBzRCVf7EwpwRtV",
  "key23": "4ZKA8aoMXjcbMBgh2VCuSz68nqk8EU26q7WBxzRPdFcBvbfhKqEyRcJbHqzKtsDXATdC8xi41o85KNevcV6bBf7g",
  "key24": "4SgysGePDZ1mNZx9ftE6tykn3FHsH8xvinopvjEcSLtsVYDsit46FqewxqopYfQrPsy1hWro63AConyikGm2eb2k",
  "key25": "2TcCAPq484LgEgjNBZKYM7bvznb5FYTRP78eC8VpNF2c2SUEq9ricY8fsiomXdkvpB9MBJeVr9Vfhzb1ntX4GRPr",
  "key26": "3X1atYkiHxZsDJrSpvpAzvNjVLdnaDoZujekGs7J8ykgzzwtw58wSnwfY23GXkoG9rg4A9hLDBCH1hn2cuzgwgCq",
  "key27": "T6tAqSRyiQ2PQedqbGDMsNeXuym2QuHjRxESAD8NzNKXyULwv9VuyE33P1fEL2QTNt1cSqmr11awLCxqMizw41y",
  "key28": "3n8XgMmRFCvyND3fg2RBwE8vkzRjq6scgia4SMhJ45H63qE5iZ7ZnPTymNKQZU7QkxpG8T8Acu6Hso88GAgeYkAg",
  "key29": "2mTdZbAf2FTCdGHbmZzt9coVBjvbrHtjj9uhPn4XSUjfHqAgFxYKfiTPH7XPS6YeWtmYxoEPsLziFEJkgu8etuEL",
  "key30": "mTaQdWrmubFHTK1npw6Ry3zQPFj9nmx8kUX4mqZm8HbQNtTuJz27DSDYrapEWMgL19WftjxXsWEGau8ujdzuFnc",
  "key31": "WnsLHceyfPcwFJY3EQr25Zi1ZGTMFsGJ9fePEv6er1oyw7CGmCHjHXsJcUCtFNDKtR4SuZ4RERDJSNKTqk6LD7n",
  "key32": "37dMrZd7YHXXsiqH4qbxPjc7qAGed8cT6L6G2XFVRcBk2ApU6G8MxJTvJBCBvpWCxKNS653bTs3rV6p1NmtaK78i",
  "key33": "3qfijx23CXiSyLbB89GaMr3WqCe7CzXsApSKKjgvZ7XrB5Shcb8ZdnekAFk8JkoXEAbJxQ1wwb2SFsq46GBZCcNV",
  "key34": "5udMZY8ZSGeEuPbd3nMxEqEfzwhMzwqLVuiAyoG1FJXCJbxgoabuUetgmUfAktwshYQqtTihm6GqmtV3qYWWTxdt",
  "key35": "5J4aRiiPRb54Y4g5ASjxZNAiG74mBLsqT3MikHWQsReMhR8HWiahCeWWqNWaaXdumpEXsvFLVopFwcDrniGPyyjE",
  "key36": "3WFUY4QyF71sfnGy7UiRsug88taZTNqE1zGFxPpdykLqhXNTS1HnWopyYzgnjSA4WfGfvCYjmBnyrfuJbeZ2vHFS",
  "key37": "5ZN4UiSyt4pnmMKAnhHsX7LUCMPHnK191tNB2vvniutJSr7eRSvCqCzZ8PXE5oqNju7bgL94JM81xdABQvNBtqBP"
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
