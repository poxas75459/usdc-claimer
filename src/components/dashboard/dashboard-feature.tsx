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
    "4tskUDregazmXdNK9S5JVu4yH8DdLCrcNDarhM1uRq5H4xcY7Sj6Qe4wMDCkAtQ2Yj9uEn2hc6nZX3JWE1TVM1YH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMkmbViT5qw29kWjvKDrcvkRLuz5u8bkMXbQXHNXEyPYrvHzFaocMSTiqDhu6uFRRz3nHkYkbJPMpe6GFANqHEE",
  "key1": "2F1rXTsG9fnTL1oz9m9XSwLSeQzYn8wASZHZ1PGnQ4CBD3cofVmuAuvNsQ373bk28fD8xTsV5NrvuSNeqPx8AjNL",
  "key2": "3tZEHAFuFhLGKgvK65pDTc3VHxxZ1jCAoU18ZCmmSRmt2LiUGDr2BX571sWG49314NWzPEWPxufgKbT6EMmDRwHQ",
  "key3": "2BM17CWmbkH5UZxoKQLT1fSP7bnHex5Vrum83XfzbfeW4AiNx8onhCxQgzGKLvmG8bh4yKZ7RFXfHxTdtFrKsC1K",
  "key4": "5N5washcSKzqWEYR9vdBWTizbNkYfA2E4fvGMYjWEN1bdSAjUmq3mANU79PvpUCFDkCtvBaSgmPSNe3QDbHeaxR1",
  "key5": "4Eg4kViadGh1Dj3PKpigauhaHbV26KsnNinSQNA67Jq19ssRvSYArnARaG4ZikeEbzyZqu8Wn2UvrWd9D2pKJBaT",
  "key6": "5TXD8Rr25SRGsVtmuQamL49dJTfbe1i7xdPVi9eyBWX9ng9k7KihWQbiwiss76TXPwu61YTZy7UedNzqizCJn9aW",
  "key7": "3MqaQ2GWSgybs52b2LuqGDiUwMiT4rZW9CGGsjYGJqWXC1mRv2p6mtvFZiSjtkXAf5Rgh4btd6vLhpPPhCRpa6qf",
  "key8": "2s3nP4ptdXgEzT2NrE6SvqQ8PQ57pXmfAUeZFC9PCtyY52s3NQhVbMhC7WoQpnQmrSpmN2JXSYQSc6K7UFa529xT",
  "key9": "5GeDAnWQ6vNYjmwfpG1Q1QBoyTeKkrohbdVBR8RyGy1hNaGz94jPGqXx5R7BZZyJYpve5a8i1GnP9CiArPyBSsZd",
  "key10": "NydoYNqmCSY88PKd6Tt64jPkscYYBHgPFgFcSda7YCMwn9V1eFununmGX79ZGT7nRE52rQgMfcN7V68jCYRnMuK",
  "key11": "2CStXwHSkBRt2zZ64SZGQ2QE11XNP4Q3hf5nLkCWYUg7bLpTcgfuXJTzCYMZ5MHxDsjqA6UFVWDJFy6wnzpkhAXY",
  "key12": "4WX4PfWHRWPAZftMRqnYLSb8jb9a5RHVFVx6dQsUkkjPjYYvUaa5HdS5bGTTS6f5Rwbzp12XnQyVusjsahBVDLFR",
  "key13": "46LZbqhsESuvfWWQGSVJ6fGLbyZNmxoQAtRfG7Q1u3qJW9mCuYfNvn4jUQWmwQkm6dFPMRfJEr5skaFxb4hfzBBr",
  "key14": "5eCYJxdJJb2uyyPX87tM12nmAQMyruhS38u2oe492ouUfijt43foxQwbo59vJ2KsjkVMnm9jJ6V9wFY2GixxvvCf",
  "key15": "3QkMdZM1SgbrebQf4vjsY9eU6rpz7Zuk6QBomZ9osxv5YaAUSXky2VMeLJHTghjCnsDK4ixGa338V6wRDKJgb6Cc",
  "key16": "2SyuhevK1MjbinyijNvJrWQc6emFu3dV6Ao7BUL8SBXZjQnuB1NBZa5NyGtywVjYZ1LkjsGWAUxxbQdGL3S4UkRz",
  "key17": "2y2kZ5jsxPPMZTyp9p31ZkbUfH3PvpAR2wVQqUPRbXejoufAE8yjgonvPTz14APUcA87xbzo3F2XwAGpHsTDzzWM",
  "key18": "3B4tVrC26XfAFwykYMEvntNzQhZyPx6z2SDWB6dwm4ak4Vbnbngu3t2dZx5hp8bGUYZR7psrH9sCQYD5ZvWy2FWx",
  "key19": "4mJvHM8CuU1pE2ajajMNWS9DftmBhjvHY39KtabHs2ZXesQXPrK32d1wvydNQihACmGdZqNVVLgZQde8c6QM6aco",
  "key20": "4SzK7BbvKyj4cqPZRHjoyXeVF1cqoEVTUvj6j2raQpfEggZqNWEvFgq5Gwv9sMxDRo8iwvazphyaxYRkq6jhzVXQ",
  "key21": "4M6hmJtQxwzbNaHRhYwcDErt1gQYCiZ11cmGYKBxnoLp15ZUWcq6XwJRAgg9wuTuepZS36u94h5FgzmHKNHoLLf9",
  "key22": "5APLsA9QF6WrAcNU1CvQ2gvPcfFv2zKB9sRExbwgNML84hKsRr5B2Sef3UsZC4EKykZFaBMwgvpMYCDhQ8CLFDZB",
  "key23": "2dVofuugs1TLY4hEuF65hBd5PP8s8Nwac2SaBf2ow8CJfo2AsyJCeVxzAX4Hd82EpfN8F8h8HiheWSKwgGvnu6gN",
  "key24": "3VHmCP6LjdjnbQSQ1NqMq3n5R7fnUDau5MFsf1uPkpqeekmdyJ3jZKq2RfwpHSiSEoRKwiBLWLYUXB3EToLfuWxY",
  "key25": "45xRTcKdfamrW3HDtj11jeASjuHvxFnbXamV9V5ZByPNWcjb4b8Mis6LJxFLMuQ6mKdLuJzr6gVjoTuFNMtk6uU9",
  "key26": "5Psq5FaSvT4cwbVuKZ9doRJWYYJqYoK1C8s3DQnhCQpybtcWLeYpHtAXoXezDmjNbUcAFjekg82V8aaXdjqQyGAW",
  "key27": "2X5mxuUQgvWHCqH79AU8EiqH4qCekiTE17G2vLFnkdymUrQ21h7Vxc32Ziqoe2TkjU68WstqmEg5U37JVCEHFzwM",
  "key28": "232iZpkyfXopqYTCpxyjMApgMTmUad93UWZstw7pCBuQuRoRueRDE4SeaH3e1V37YTLQorNQDtr8Tovw22rTVyCr",
  "key29": "3dApyV2oSPXWcBQCVtGUG4zDZ3szXn6JESRqPRuYuPvtPFELbM7K4E4y2NtdgZW8QoiLRRJ45ubZLtGk5Lh21gWQ",
  "key30": "jXfXSqqoNSLSvEr6oYc96QkSBkCmHYs7SWw8PDUx9CuAoaL6GoCuSkNhY1qB2DXYrZpaBtcZBjMAH552mnKjgv3",
  "key31": "Qg6gNWmR2AL172YQmGQWdhZ7ct33DZRATdQycNqCSijaea2nFVoFpNv64uRU5bPHN7tDGA3icyeTyDBA82eBkEV",
  "key32": "4o9cAq49ryizJygdvZevMxFcLZNH36MhPcC3JnquqpoAsfGpyyhxEuAK5cszedqPG5CEbdVFwcDzGVe5MdCKrbZo",
  "key33": "63pmNPj7V8UiXEgdeVmLsNd516T1PP45uGZQZjTz255zVT2A7A6dCMb8XLqYvUD1uG1z6Bg9pQg8AQLWVD4k3HSG",
  "key34": "BNznMVZnboscQcRR8cCtxnLBYFcn7BnRuPwhm3uqgCvaMe4FiLQkVQ6wQ1i3yAU2idGfPQ5TVtnSRr7HcmXWX5L",
  "key35": "4ADjnAZ8yCrM1WakhdsSD3awHztBiqAZM1FLXHAYUxqKtbpYCEstcNoxUoX8xBTrZCqWDPSVQH67ukTd6gx4oEmj",
  "key36": "3xXDjeoDx2WtNdbnU6rVLPM2Z7ALSxXqCd9N8RzWFJkqw3inNaSzWcoLt4gZZvJRKZsbMxSa4hRF3UEanevxNxrr",
  "key37": "4AUEahtv9Ws773zYVLYur8vUBA3NYDgHSC2BeUjqTbbCtVR38KT24t8pb7ADU1gofjQFMtrSGCLJQRwRhpLyc4t8",
  "key38": "2vjJhFqqF1tLLvKindGYagPzy6zaXyFgZWR8qFHxcw2ge4SJDE49KftzA6Czqqhq6N5m7Lc259ejwwzvdBhE8q2F",
  "key39": "5rwDVbPRZsbiCRzCJewqLsPGtb7wYg6w6hFgJiwSMsHANQMWQxuUB1oQnjM8RJipn1jGVwJKrfUXC4SootLjjz8P",
  "key40": "265YWuEKEYTTKWVrxZLhrwpbsTxuqtDjLF4CYGNHQRvGgBoDrsVc3stKT8CwXE76D1qZbfYxeZt5QrU9fZYcariX",
  "key41": "QrKvpjD6UtAzadFtuArbEgbjEMcau3TsCT2WwSeGru9q4vX5KKFjTJptJgmNYZQU9iCGJuQ2vJECphHSLv1QVf5",
  "key42": "3ybdyAK26hcgH8uqkLejokn5czCKsBCLvYxKGk3uLS2ViqVM4kRwd1q4oz1Fqs2rFRNTe7BbdPA1RAJ8jtdEdGp7",
  "key43": "49fSr3G1wtFNH9DBWDm9n4PkpY9N5cisBUM24uNAb6CxVmzPjHC4NbVXSb8AT1HDTLJQNdRBMSDsEHKcyFedQZYv",
  "key44": "QDWz3TPGi34q7Fx7V59QUVTuDLu7tZphLkKfC2TnzuQWEgYEPmhdjenaR6ChyTii6e7F2JbTRhuPZmFLNJgPEdQ",
  "key45": "3qFt6dBqZJ5juWkdgRckawEBmsbCdCWnCwjVJXYW6egk4a5scQ22MTTtQj2euL7AHW6kEbRzD8bDCLsA2AVs8HpC",
  "key46": "2v7Cj9y85UpcazKoqmbMFCCBWSMzGu7wnbJvHBehokMvKc6nvrTu8UACc3zsDdqmRPzdw37YhKnt8CCUBY5PfFpY",
  "key47": "2dZPRqGzwfCHYYNfCHQcvvE3SmKrr2FFnAo8LRr5EKQxiwE6mj3hXBwKH5onbcauRmLxLYYV9VnC23rMNKKGhSb",
  "key48": "5jWmd7h6Np9taSC1mc5Bsk61jMVxZrEiQ7dgooZcnMf6MJkynPirMMgi6iGnBi3F1vQyH7iPBg3LDCmEcnM4BTQk",
  "key49": "5jyhN3pm34k3g2oVQMT92Lf47yo7YS7hhkD5DAa5UoXJfoycHhWKt36TcWyzkVoeVPCiSXzTYR38LfHurEhHWoyN"
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
