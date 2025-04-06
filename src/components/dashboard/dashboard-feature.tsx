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
    "5CBryQhZo2D85Ftdo5EoGHg8KS3bZjt2wJUvahxwgxXZcmF3ZhurGYcgbspouKwdX6YDmdjJTSFxcCoHmaUwHvr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WfsqFqHfjfzXtew1zAsJgdL1XwNgjaWsd6nhqbuQNWew6hzrfKqVcHNZe4Lfs1vurB8uzRYK1VqiSZRRhc9HYvT",
  "key1": "4X4mk5YfpcV1WMY4TtYLfzr9zsFHyWA36waN5FFRFroBpBnTFEo2sLaMvBHGwQ68igRbuHbQfA4AV2qKCoaLfPLs",
  "key2": "3LvQL8PH1kEC9CRDxpK79QghG3Jc93NfC8NNyo2x1YTKj87o6yHRgq6wR85XeoN7F4hzTnFUH7eTLsACLatHsp1S",
  "key3": "4zEt2Dcx6UEqAsHP8L2xWghitfdxG75ezBjqkYBV1KhMbXM5saUjWjGapSu9pi3uRn8qrspr9wimoGaX2VfTsT9w",
  "key4": "5SwrdUgpFUgzzKiQws3EoiLuJkrbVptA1wfSPw7pLQ92q6QLWmfngJE3iYNhFXcUhzroAUEsCLcW5wTLgX2vLmim",
  "key5": "5XLd9AVdtc1iYMdCKoJBcmnmj4DeBQs4QoWfF4snGup9gRLoXp9joNvX2Uks8JuUterFH5Dbx9XUHnzPms34ujzE",
  "key6": "pKdVtYFKtfxraW1nzV9NMTinhgAUdneWhRgvV9AK17pesVKLhE1weonDLAPM86hHxV7hcELqkcdu7GChKEypvUY",
  "key7": "47ruYzV9TX4Kyjj2ts2qGpbvhT2Mc2prGqYc1u1QXDdsnh1ouo9GcSEwcLLCynrT4MLMz5YsTmkSWo4cTJwGum95",
  "key8": "3nM1pLSoBVQgkz5LmDitT658KPoWygbg4vPaZwWM8H12ewhMWBgiZL1utdo55QFugtxgNm8jMrge16WGeM2FVGWA",
  "key9": "328zK6AYN7fgJFcgrN9FNzzx1DqUyCiJ4LGcSn7PsPD16kyCqaDCZYPqZSbPxca9KbzYTs8V69SnJQuSpcM58E3b",
  "key10": "4GaS7pKgeZhvN8v3jeG9Uw5ALRjdn4FPR2WnVuumzDowu9Db3GYYyGsYBNrnQ7cP4UEQ2E8axDZLJ2fU355XX3p8",
  "key11": "2dFssagNekHvqNmyfm4gNfjtwBPmNGffmJqJV84tkB8uJsVNY21Asv1fo7TtowdA4GBqJ7d8nUVcbA59YWUrKu6q",
  "key12": "61hPkjvCni5wtfoRskGKeWe2xnDjFDSxQ3M2ounVJfAmpfH35CLjahKta697ho2XbhpUJL3Sn77KKUhxkg6Mn64h",
  "key13": "GWrUWy92iuvuccGLgnMCq9bkoHdHVP4DJMVUBLnm87Hw51h8MLf9AFvdapPwK3TkgfvHJqbUVnvAv1n4M7LXRs7",
  "key14": "4JpbS4kYbijVBnzS2MgrqMWkXH2Nu1LA66R7qX1Q5UDifNEQHGBHYbbP1LfqgVPkp7ugqkCUJGtrhjgQy41sV52p",
  "key15": "QxwrrAjbJJVR7VwGxMR98muTrYSYuKJT3fHYmatrWaJwNhWn3UQBpY6U9m2M3ehEPCY8VQzHduutTsz14cR1eXG",
  "key16": "5HNe1kWT2pkvJqYWpHJ7kamJG8bJ2LMwjpFxu741Jn2cRcF594w285FxdzFf9eTVGfBtBm6UdtK6UgMS1NkjiXRZ",
  "key17": "5Eji9nBRB7zAcNaM8WbQH3xaHsC6RQwZPpGbTqfSTXNHJqdoxtLwU5qDfjfzW5gJpDgZTuUAZwHk5uy8GpUiw18e",
  "key18": "67iV5fVGdxHMaX5uNgo9qHfe8ohKYUMdpiJJNfncfKNitnPN6yfoMRg1z5NssrCzwuVMMC36oHV1V8QaYbRauWVM",
  "key19": "3GPYeEhmyfb1WBoMFkBv8Sq2X4QV3hX4u9AmqMJ4neuxaAtZJaxrtC7NoPLcB7mqDK6byxjJsuUPej7TEkJvxWR9",
  "key20": "5oQrzhKtQ1qZPx5LiUJKeFx14aVbZ4vTSsJH8ka2h1jHmj3HXqnHqJQh87iZk8dGRkoeRsjLp2JVj1dNNfwtPZkd",
  "key21": "4XQAKAeDsmMRcibS2H6M3RgwrPSeMsTgmtvhHxyPQafk7qU6W9bHX2vX92Y6rcx9L6MvdG3PxJcVd7JZvgkRSE1A",
  "key22": "5JTfWaJwLyCTRCp9qTH2Af94CkhiU6tkauhgkjntsQVuWTtk1sfxyucufhEyvsZ3LXGgmZrDQjXrGtxPBsTJ8FJi",
  "key23": "2CVn8b9cPvUC55rjyekhKeiKY1egxVaDnZj71Be4HDore8CvXb1TKa2dF6GhE1i71r6nR8Hvw1TAyPMkpaC8xSJJ",
  "key24": "44qKU6uhijmMn1n2KHN2hP2uVQjn4JLeyx4QEs3NQadvTfJ5tPCpMRqeEyNdi95e6RTPAigUK6AUhoYZMei5oK2U",
  "key25": "3yjbaobMBJkR8TAjqyave2aHg6x9qPLUPZatmiE1aTvTc5v32AfFwEr3g1NvvPsmwqgQKi75CUkoASQY4ziRSSRq",
  "key26": "4hzfsmZDQYUJHcVA66KL6WBaeWqnfkdNKAFAh92JDwvrSj5JXQrGKqMVFnjsaRg5bujMV3NG6o3MUAuc9inc5SVP",
  "key27": "331KpJkMgsvXvbxoWW6VwswuqerHXbLKpYKB6WZpsUYS1zqUcD7HMu2PXY8QgpkJHGKGDaG3FPU6aDnSBBfK1A9Y",
  "key28": "5fALXGtFUzoRRZR2xJH7vu9SiArmTPZQFpWZEVaWMKGKAqjHuoG42A75Rjm8URp6m64voo48oV1PFMRQLFU7icnx",
  "key29": "4oH1NV6dWsmovfdR2FnkFAJtkzxdMfw9XnH2arnaarjwr6EgNWU1vimLKs1BMvnhMwAnY7vL67TozSFGajkKidGp",
  "key30": "4ZB2fJLjs6SDhdFiEM1MP3jViGPB5WrLcUk2zk1Lq3pvGgsLUaxpahe4KGU2aweou3k7XyPR68D1HvZaCAdoLwyu",
  "key31": "3Yk1L7CWKzfDukmn6uCSQhUS9kHQnMYKyBZVNhV14dvyExAPWZCyuNR6zzEkKQ1TaeLNTwm6UB8A8YtJ97LVWH2R",
  "key32": "TUs8xBZAtAzeoxV1MrcZcAqAmBCtBv1PCPhrcx7L1pC6UMD8bKnkhGVpEcMqXoGuvnSVLtEwynK5q78WPDtpDok",
  "key33": "39nB9z25sEFkZ4xxrpoSnLcYxUguTUN6PzNLZrgf7NVJZRJnRm9NUntKgmzecVENusHQrrLVYhhSefaeKvVZNQPj",
  "key34": "3d9GM4k3KmPkmjqLkHVqvmefvRjHsWTEKBQQaQeeGHEyJRVp3Kf9fLsxKUiGKiTUGf4qP5prGmFRAKrd7Qjr4d8W",
  "key35": "5QjmK1Qnt8Y3246Vd6wVBgMNDxauX71Ef4TBazMUJqcWeVWUnpUwj5RDsXDBvS2h8sNsdBRzkbnXFuXYbaGVwzus",
  "key36": "5tebjAgDBBNd4ZQJfEVQSLDWNCybkWH12YVrJrsxuiqtm9EUDGphQXzpX5dMUPNa5LPXotaKXwKWAN7BeakVm8EY",
  "key37": "5C5jRrtf4yLNZZ31SYEsWQ4o3ExC5XdLX22SEmbN9QAYddz1u6a1JUa1PYmd3cajthLEwseLL24PaCVynXuG3fDt",
  "key38": "5NJv6nwo46LJwPmzD1G5Aqg5sam95z9bfcp9oSLbgcN29AhfPnYDUztsNpsppWc8BYLTGRwCwumZ39kzmbGFF1jZ",
  "key39": "XWUmVgVvBNbkrDDULADqwxfumMsav5fdc4V9438KkokCKSHV5vfpWSo2PyLN9xn9gvSjuryqz5gk63XBnMnPXH8",
  "key40": "5HpNSiB77FbStUxZzbNpM9VPk7VTgYZ5zBfYY1646kAjqD4TM6NVWjSJDjpebr3A4Vxhnpiu1WwrPgJ4SftHZPMG",
  "key41": "irqqZUAQ6QTo9KqNsXufrSUiDd9q2ZHRQRc32GVt7LLDvADxP8qtWKQmJhPRZZQTDMLWeHMNv4hscYUGkfPYvYk"
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
