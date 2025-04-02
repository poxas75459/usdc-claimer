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
    "tTonyxaZBfSuDZeMrfvSiSeKCHebAPwQVsUDaZcyViiqG3feNYgVqszBUAdBG7ro92QJwg4dMbwKxXkTvoecGgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQcFNg5vensB51ZsRVzhHyzSLs2QHh4dsSk71Sc7Ace3QyWxCENuxbQxcHcP8AdbsrY9gVv2tafFrcXXjpJr5Dm",
  "key1": "4GPATPpg4Hk3z2K1GviSEmvcUKnRrcoNajCHW7MU13N27c34rjLoMQqGhu1SDEWuQnhaBeGqn6GbDuZjpbYsTjLV",
  "key2": "4knzqHGe5yRJcQRnciLsrxMUUm5ejHKjohNtkzgXR3LBZ5XdfpbjWxcvs9gBk9aGxzfgJcdKyS8grFc8Meh3rp45",
  "key3": "4h1KsGG1bd6jqAajBNEmEqx5XnzKAgHqQFYdm53MFoTLnGrW5WJH1BAVVJfgZknCNEiQJHWAVES3526V7wxVjhCe",
  "key4": "55btQjQLtthgBTeLygzz6YSq4XT4pAHVENa6Yb3fys59XPGCeBMMfKEQCYRoTXfqkBJpuRXaqCUBx8ScURALgdEU",
  "key5": "3xbyuw2bfhy4Leid9msw4a1z2mA3bW8ynQoeHjW3R7EZ7a18iFxR9NsqCVBDMum2Vsqc6QyADWVH1t3bzdU8qYfQ",
  "key6": "2yjgEACi6WC8Uk1eYJDXWRLxQwdK8sNR53rSoD8XvixKJqGE6FS9p4R7nq7s6YV1wy9mDyG2QZhMJwcjftiuHDWX",
  "key7": "2sXQyHEbLEsFy8ezb1T8tnm3T3SNTzEbeUaAhHfGENFSv3SHjWcUhhCiJQamoRWfF57KTsefPznDzZhzoWWLEbTt",
  "key8": "2TYLBcPrWgL61w5FZ88SaweaeJsns65nyqWGW3fbpAWaxvgTJfdbMYBA9DkQkPeNDZbMCK4KXsYbGfjSPyZj4zB9",
  "key9": "2m8oswHpNQjNuGvUsvnDozkneyGcnif3ozxgAP6r8uuLR5kM2T6gMovc9wRwzWybRMGHr6WMwQ1eZ6D2K58sWQ1q",
  "key10": "aXYvAd1dXcARQBmxNnuAt66evG5D8jMgrjZyVqyBtxDxNszJ2xSMwCZSMNo2CDwchftWBoRurzYZdd57oybCoSr",
  "key11": "2pADdKZLYscMeSenTvmE7Fb8mGzbMcSTRNCJXGHzASo73ybnZPxbCDFmSyxyZ977Cmn95aYQBCmUnnzadBizAGQF",
  "key12": "65eyP9KAQXP7GHJ1z1GAr6hiqpBk4pAXvzu13sTLacxeTeH8aN2f1Vdwk8Qhgmuk5JU3GhanndFg5YWKgSsKUMML",
  "key13": "3rK1nWqE5428j8sfgxCM6U2DtX9rbqEBnhvHZtfbkivXbXPWytCc5LY12WEQFhhjbY9i9P6Thrsc8W3M1KTKpMvm",
  "key14": "YRs6CzYzLSJ7d1SgRoNQGSotv6MbbAu6w7XcAsSjDfapEJNCuawVVEioodWCeAFoGowvPtxrnmxUX8aNnBocpXJ",
  "key15": "4tykCxVYTcpsrGSkMrGe8rMeBhRNW5T5xYH8jwSQi5EoQ3m3MzthY3CnGhVDAADG8ngZhsaPgx4JdCp8AFukcaeY",
  "key16": "4HhesHF7sHm1mDmZdKSHe5PhnU5Xr7CePfjcX2WSgN4zD6ZiatsxMUuijzx37UWwaxbxwdNjD7BMBdSyhUB17Px2",
  "key17": "4GXifZFBjx2f3Y7FHMbBSCG798jPrcumTyEvZQpNq4A7UigiajVQmC2hZuaB1FehyZFwTd8mNNfTnpQH6fVVWZ6D",
  "key18": "2B3vj46C91XC7auLaCTMxVmFjtYAYTQiG9ntFQVkSFvqurpbSmDwtYPjiwKrne6C2eu1bcnLCrJspV8Y2duRCyWy",
  "key19": "4HhEcMUawKZb3urTdWm1w5jSD3Wj1o8CjWys5edYduTove4CGCDEzQ5kcdEYrF4aZfUcNGVqgdKZS9RUgQWdNKhy",
  "key20": "46v6B5LMJU91v3nfrBWdqZc3JxT4pkoZYqyoMoEhUcFHNK3Y98sjEq2aV5wAm2hfiHXj7ykGAsvpEHqmGmoGcgKr",
  "key21": "2BPzuv6CcftBxvHHMVCpLxfxoxsVb3fsyF76Ky4RDyq6T1Pb3TMkxVNLwDyAKn1HZpMWJcHfWySWetsMP1g8E1eb",
  "key22": "66KtuuqNwUoZXoZ7nVpxwhxWKkVJ2smNAiFCYycPXX8u5f9GPHNzjCqz6d5f464cpSH7Gu8npqaHTsymrVSET5EN",
  "key23": "2YNUG28bSdZSKpPTBdqtixmhDjgEHmzHHbCFt4VWjhYgvwF3azaxnZYMXEJZKuBkrraxB2R7tMXUcFbSrn7K1D4P",
  "key24": "5AdiHJBGADxMNLJddVs6iydzojBTdEwEo1BXozRbbKvzTrDgunTufkeiL6YHigR5jDUCLrHF57S69wLYTsFGaZWb",
  "key25": "3bdFZvkLmUoxGAqHBxBtnzhz3Jf94Cvodr7scgnnQaEaCFb3uKLNk1GP2iXVR44qFyNWmoUnKuofvHZNzXTYAvdL",
  "key26": "YrpEFoCedreY697NQ1zxa3dvPvwr8ZUQPbGmcgvXpFVX2kYPNoXxonceoHHeyxqWEKybmFT8LyX85G4Y2DzHrRF",
  "key27": "dzW1FRux9wWzjkHfv2Wf5btGB46HhzXJ4veUtoaGnyPhQwxPVDsQmJocQhtZJZ7Cm26twn1oD92cKPc96Dz7sfN",
  "key28": "2gxhjMrxTnuzvaNHnpH4cH5wRr5PDqM2fPtssNNCeCmVNB4hX6pAjJ8cRWnGPhK6Lt18z2CQ3Gxk3cMTWge6P38E",
  "key29": "36qw9dg5fLwEZMrPQxoQ3bQMvmAYBpDRzbkz9cwLidh7gPJPPZBVeLV9riD7QEHrh462LkuSSWCwfDMS3T7jnjFj",
  "key30": "4PHNXpWzyow1B9RPoPpJS5eCB6J1XzS2riMxdfGhwZGqYEyozVgK2FacUeHVgzLveC5DyxFiZTnaXpSHAqgSjuUq",
  "key31": "QgDiGPfYbPLbFSVCUSDfQjdnC2fJaqgeUXTMahDBN8nzbDKnXCAyP3EyksWVTCqfHcFS3PzsCTpRjdzzRosJwzn",
  "key32": "2529hkrEAP3ikNHwkvEcAifmXrUiKjGkDhdUsN38swpgBzDykq4K54kVGZfVtR8qbT3JjUtjh95obcf9YwAUjnQ4",
  "key33": "5BGAZ5Tw6C3emgRMnKmBTNbyjGM3ZzqFF1pjQxsihJGorKL3xW1yDLWSNEPty1qxXCRwrwr4snMpGPw27CJtML8r",
  "key34": "5vnxAsPm7BS3gu2hRZFFWVW1MApwnf7s8Zn8ALpt7eHmm9joJcnt6TwXBDdmSg7WX1hbd4zweuUcCTngro5ZZCsW",
  "key35": "2PrRhAieoKhbBv27xLyGtAi3PJ8QYcCMciuJsZj55qz5pSufwyBY5NXeDR78WfEnuKVqCBVe6ckVRY216zAATT8y",
  "key36": "4VUB6MtymCwZcK1RSwASrcTS4GZ2Qmp6dyc6tuHcEBZEw6Kad7aYGtWAmBjNAioQkXLC6brBgNXj2xrMKRPhTQtE",
  "key37": "4kceW2RZvu42fQ2oRfaFmQyn6Nj8nHwQyRLGmjjgQbCVhhXUWSohzmQRUVxxf2HYv79Xh7RSWZM4Tq3MzQwDqsBq",
  "key38": "4QjTEjt6dcKFy6nTDmvzfPbBKCY7GRDMMET7A1gZAe5v6xcNi76WBBNkFzjbNKpydr81wq6BbMcZw74uQWKtKTZY"
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
