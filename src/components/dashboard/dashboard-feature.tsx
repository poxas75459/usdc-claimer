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
    "66uM3JC1Ei8HSRN8VRQttuiDgDrXnBkbxcTSTP8LJsmVFDHaHUc6iuZddCU39o6QbnVs7e2UyniMrEXXNJU79qbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPHAdwLtz3yUFF1Q1kNVYJs9qvqauCkbqjqDEVXupCwAVcJEt91citSScbkxnwqezp87m8hN6qzuKj93WYv7UM4",
  "key1": "27SYWEF372vwr1cTGDhimCAYjxEDi94BwkDxBnFMkTo1kYe54oTK7VwJ1edGeZcVKGLXbu2ogvgUfuZ7FZrHq9HA",
  "key2": "CoCA6qZDMbneFCfkzXbF6VxQoqtTazhU6Xg4QbGL6uMnc294wTRKsZWBaJviAwh8saVGpoCHpx8fMWWCUzYYgm3",
  "key3": "2kALFUMgLWSfPjiXj3HoFS8M5qnEsyiJ1vuy4L9ngrUMv9dT5VUF148mVFUfVoTuNhrGufozmkDVhDXgpeXtChEi",
  "key4": "GPxMkV5w1MsvjNjaztAoGCB7tpzEciYqAmCU7Z5J2jy2Zb9RHuGiLessBmsL7SgV6VGjSVYDG7g8k2Bm7WiLvL2",
  "key5": "4ANqLMEDN4XrDRY7jDVHYgUkNZjxvWgDsMU2W82ia9YzZKaeNK6JTZghWoBeBqoLr56qzVnPt7Y6Bj8LwHEUQPEQ",
  "key6": "4xLiXRNmnvtnNFLPzs6Umi4f5b4b8F2aAPEFeyKuuysGqLu6xhH4fTsNMYBDBoQdWi3PFaMVk5sPxnmxEwCnZe8f",
  "key7": "5VnX8c2vEUW9KCxxGg1YCkx5KYTcTdTXT6Zd1KZo6BJK2qUdEfrGqRRBxJqzVHx3rXEVESkSwrnbSc8zDmte5Bot",
  "key8": "3s5U4zCijR9Zd8dfDVkXbgNT6MEvoQGMyyzUpRPARxXTzpWVcLrzNuMDXrRjYuJ8TS5Scx4KmhQ4aXDADRhwwKy7",
  "key9": "739xQfpmQfPCbpBkTRgVrxFsVwHYmDMz8Nu5rE2z8ZCy3dNftJTXxd7PCXy1KNmtGrPn1mWVSL1EsqAXUqx6N81",
  "key10": "5wD1r1YeADQk8KXMi6gNUYocPotFDQTaEJFQDAyWUntxMP4ZfNdwCLQW75xS96ARYLRE9uwZBvRNnAQuvB199EHi",
  "key11": "3ji6FSEwcuiYA3qkuzsPZiwvh5pnWqDDbvRWxiCE228Pqz9JVEByP3AqXHHoxTWBmjgDiixJUjeLmEZ63fnwjAug",
  "key12": "3hkdSrkGrQWG9t3XLPFaAM9fgsyujhgy6AznaxtmjxZWvtTcLJaEkj4xfw5oefv253pmEX2nKyYXiJ7BsN3jNSwB",
  "key13": "2HPeU8geYdtQ4LDv9Qmyo7aN48cRMCKoJBhdgAFLzxedSXyErptgo4UkWskeLGitqV2CsGaRjSTRkKzF4b6hEJZd",
  "key14": "3913Zza1qaYCKHY9poGzbt3ifpj2v2Cu3g8YWVjg6VYXXB1CjXJswVJEmHhk4FrHefEh527f5VgDGUfbouBoKgKh",
  "key15": "2eRXGAe1nySbCa97EDts69Cr12mL3YWx2CbV3iNYa8sUZDMMksextFf3TAuwxEx66kzzt8SJu24WVmyfRYxCDGmq",
  "key16": "3hUvwmxLXmJRYDAiR3VRwJdeDQDUPUAQKxhyvJNm58tDXYGwQANdRn9fNM4VP5xGLDW3w6rEKU8BGRhzAYPFWhum",
  "key17": "KD3zXJr547HBEUJJ2U15ZEwsr8MyPaiAxw8H4yrknosgoREXvixS72uyuHXHzu73S5XdaMyjBvx9qYpY8fnzCSg",
  "key18": "4gqxT4L4g8s54tH22TfQWZZwvYBquQ7gzZywpar1rmeBw5Lj2STrGTYjuudBTEKs8tRtBsAJVqefBABukYzP4mSC",
  "key19": "2Bn5W5sA3R6YJsdRBXaVHZ2ZLCxMErphL6sBnf2ZBho1r1WSwBk8h3wFYx3PvPhm7xrCRZPZLpcbvznRZZk6HkoZ",
  "key20": "4o8XmGTRVjZH9CbnRco7WZQzWSTcna8Mos9AxEfLaonTQFUA5txT59tUBJsGz8pPRMbj97zkcHVqChLf888kTURz",
  "key21": "2ZsbvrgxDyDeBDNdFRs3UY6xtufsQUCwALyDuwtz34sLeX3UtvMyi4ov7SEitz2HQh8ugb89BdfWh6NvZbUc1hvR",
  "key22": "471LZkH3Zcs6PDTDoKrNT3fin51bjYWm4L5HDomY3RNWeZGKnsjxrVfH1N3XquPJ9RsMKmdmgu1XZoFssZVfXTnN",
  "key23": "3UivreuGre1XrWcjef8fR4z2b7FGNWFnuPApYftLMAxpFeBfDABsQPJ54SDxT8GKXAH15AAj458vmDSyG2mG8MB",
  "key24": "4UK5DkZrTjT2EazhVYs4RBNXhzobCAPfyAM54UeKrZaBeehi7u65LqupiBATJ1bNEHSZQHw4wtNAeqxLBaDEyqqV",
  "key25": "55HwiYuJs9mjvEpEAGmpUN3FfzkcbTJ37VSJJYC5W1vNBxoKuHa4WT8qHVWeBzYeruU8SiSACuLVu9tsHjxQXFFZ",
  "key26": "53P5dJz14k2KvoAEZh2yukJJxVG35nZdwehWbkeHHn8k9N6FbESC9RNTxHyuJk3ZUtYq9Bwue8njrZ3i7W4hZHX5",
  "key27": "iUsn8jPHqrr6rPRHHiTpK4SD9zwWSoYBNmN6hEcU99UzLUpPgwCmx89QNDzyinz6X1RXemUu4PG8wUzQRTEKu6t",
  "key28": "4SY8gBaHh5aqGViFk3H64HMgV2Q1KSVy4eJ7YApuQHL2FrfdY5L9o2Hu3fmjAwQSo7eyUkWbyR4uu5bUVAxFGb5k",
  "key29": "3Jivwc368sDgYVi8efVUu1x3csBbWuwxN3VGm7Q4nkTRAQbNDEBXPwayweQdzwbVTwSzucsVghC2LgAvRSLfS58Z",
  "key30": "c2K4xuYi3NsRpLj8YNZX29rj9Uuoin5nFYEvZfRB36whY2Xb9fVZLrPntLGeodB4umgGLFv5WRzmRdsfMdakX4p",
  "key31": "1uQuwrRLWaRkFpeEQrUE1ufaCV2ZMgJ9hH21aPhFUPWnRig5vfSHZGuYfgbisVUx8ivU4HFWguRtDsKrbnCENe7",
  "key32": "3qhxMPrzucya9gkdPp1tRXoBiEianwvqctxKogv9TuMQhqCfQks31SzoBgXHTz95o59Dy5JcNhQvpFmRuNTDqrJk",
  "key33": "5UEn83LXqM6NaBi9VLnRcuVSUKnUjTEAcDPntJMz1wsvhH2PaicSaCWjDdpRrPWw3ixuZawkEUGxxSTVrmrXcW7",
  "key34": "W1i757QxUGcWhCQPmf9XXnrVAf6a4RzmnoG6t9PW2CgsCVeyBnPq7L4efTaV3zfdmYBqJ8jgFV1rvanrWDy2UMp",
  "key35": "5QNKMb95WTXkTV2KEJ5Ce1V1NuGhYxv9hgnLFSPPPvYYr7uop9yp2wNfb6sWpjinoVczojV34tAZS7bzfnLjxXHH",
  "key36": "qZyp6fKyH49ZhwJWfZnutmqPuFebD18RHBCYvpz6mq2pa8cpJP91vXbphsnareWvTfLafEzfva93Lo5dikxVwES",
  "key37": "TVgLDn1x9aUErUDFDtkSdtp6Bc54CXgWfh29ZGWYBKYDrz2fZRPveRmVXH3SqN6x6tMgv2hQnzevbyce6o4Yk5a",
  "key38": "5cxSjV7w59zMnMcZcimkSkqXUhtquZuGF88nmybAVkhXRCPtQs1YtQCGsVuuz1Xjp5RvqMbQQ7d2Jmgpr6Xd7grE",
  "key39": "2uZxRPZvZpugHcg3TYA19kDx6G5Jn4bbuumZVdytcqQ1PNVf7AftQgUMXFAumNTtiRovXG8ALFbMuEkzgHUL4NYY",
  "key40": "3Ag41EdMmcQvs7mRRhKety1TDGKv6MYhw3ADz7d9PoU2TCvoQY3TFze78dS4PBVVz2gka48WuhLW4e8ipS62d8bh",
  "key41": "5A4cboii2zJR1j7JZ2wKV7hir7Xhwy6mDRRTuMcBKMnCgQKsPrzPzmQkBKm1vPHNYGY6btfvx3r3NLoyJHJW1US8",
  "key42": "3v8D9F4Y5iVBEA19oAACQvNyuxrWxYpVasxajtQjjpCiFYhTCEhCZgCQLphuPVpW61caqb5UmVNKMEebkxEf6p2U",
  "key43": "2qiaEfNsPfTZLkodnFfumprqg9fLHgubn8VoQmKRyUpscGmpDtgwjWXs7a46nnzq6JMp4uXbDMDnQQWmVhoALvCK",
  "key44": "3vaij7bYzMj3zBB4JPFdtszGe66XDC2QZjRx5pgcQagXJ9LXKJppTStjksDnC1FXEqUdpekSH2mkBgQXP4WXRCcc",
  "key45": "5vyoxNm7W3NRVYxwqUyStkcWiAknxKZSZavdNcLaZbUKWjd69PekPDnzB3f8u5Zr7xhF3TkHkZNYgGKTSKJDZw7r",
  "key46": "3ggVm6yJveqXHdRbpeEiFieFfBJV4ffn4grmGjtxr3z37rE4rhU6fvLrZhfc2v7nixWJtbymZPZhZuLVyHiHXTKy",
  "key47": "2Cr9j2D3S6KhqnaiFxAarsMSqTnAa6hAzoXYe9K5ygHBQxjCCjfcQWXiF6PDhMQWZPJPZGh9icriSAtkNLCMJx46",
  "key48": "5ekUNimbFPg96iXyJygirmNqHKedNFj22Co71t52cERK31oLEiMvuVhpqehAqPruRiHHQZBXRkkVjJB6azTCYMhR",
  "key49": "49pNgLMm2ds2pfijQg6F7z177tS3VnCpiDPgrdG5Vkr22PShJX4ttqFEdGt3wT62oiQbjL88eNb4bwidTSABHsoj"
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
