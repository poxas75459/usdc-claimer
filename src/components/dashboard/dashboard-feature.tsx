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
    "2EJVAyjcZR98fQz8Qo8rQPRms4nKzsuzvjCWXtRaLJnXgAarevDEnam5kNEbomwxAkxRQqkZYVGR6JyNshF6Cd97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nW6u5NL22prf9ZB2V3KpwLGTorPgfwV9K2pQmWxp7xWhuqGTyQjLHZ5sSmNJSWHjvz7omzLyJkDPzhFkDBHjCzK",
  "key1": "4437QnRagoNTZzCVHRgA4bwDWcu45BtsMNEVAMJm8FidEKWFjzy1ktTM23Chd3fE6vrNjdAr2QhqgTy2pKMYPtPc",
  "key2": "2NH9Y32wad8S82ZWseGV2tywCJ33SqiXdZnT2ot3hrUebSQ6JyG6aBCTi11zZRNpxNYSB8cPZ8onBpDVTKgmHDjQ",
  "key3": "3riipMoQsUR4KKLgCDcwB7SqKTn8RLtYdvy6NiYhLTHZ9vVqyJWkJXLRmwZfkZpJSzhSH89Fwhc7YbBp33tSFrkx",
  "key4": "3y52F56fiPkbkFh58Wd1pVRo6YywWYZUnhxWTrXyoSQjGTMzYst7ecUz9aRgRnJvKyuY8df58auixbuxmgRWoPwk",
  "key5": "4D2ZY47HHnKi8Ej7ujR1fBtgio43S6nhvN1hCApyCDMD36SXq1yyDQ1VaBwPQfE3wz91yPUbR9XPiKhfd4ubRC5B",
  "key6": "3xcaPhD9JsRE1UazrToLCVGaZJggdipNEtT7exmtqVMPFn7McURF2xaGGhzSpA79w5vxd5Y1MaESCo19QdDC4qce",
  "key7": "DQuEXFsWqmgBZZaxmWVV7MFHgQX9zmk4sZakPLodohi6cywxHYRMDt7Fn1ERrVCEL1WA2DkqoRVRnFpqd35WNE9",
  "key8": "3i3urLbtEG3MwSJATeMpwX18NrSB75ML4KVQVvs85XfJ9RnKj3zjiZXbrDFdHATmBoGQL1DeYNPPVTz9Jdn4nhb7",
  "key9": "KBR7QpdQq5C9ac7YRAtayVnNAvyZVHBv8j5nanjSy6Fx9vfSmMJHjtwzDcy1NU3JmmSZqYQYrGxFvC7xxjS2rfY",
  "key10": "5toZMSgYgznY2ffP4wRAGJ1EcYQFFZtdbWtvZdZNj3WnydEzxeaffFeKZjN3L5tE1qa43VroaTVF6pd7SvUmqqNK",
  "key11": "4dh9QaY18hyMKds7xnpaQoTHDHkbZypAvXBNK62YCMydGyd8ouTgCifzPRafPdkwCVVggngM779aKAx3Rb2nPAxZ",
  "key12": "2FWZDjYqPicY6GG4svNRb4QCxAjhu4N1hDvLETVFuihLuDebKbthmGwhkqZtqoBUnAkQrBxwRZzfhXVVoGb8fHQd",
  "key13": "5ro97cQnuZru9i1MkBGGAjvqJHUarabfkXZm7rVKWrfEwSgUoBwyvBywypZi6dPN9364qEUV6DbXqestB4LB6Zza",
  "key14": "4T18RKcf7Lhbd9EgjxGiB58mKBxEiW1oYAjdRiWAv9YWW73vYcLZsA1Gnx9MCS3nzHvEwDHz9MnczqH2mUFsk6mn",
  "key15": "4c3gKPSSt7CNkY7x2XSe8EZdq43sfvLRnQdz6nEdLt1q9me2GKsptPoh5dtyTs1XL9e2m4rEuxtSATvr3Cdx5WLq",
  "key16": "5QkxHV4TR9UUTssik6ZvC7KWgcbcThvcTLaEEsiL5H4eP2L47Sn8EPfhorketXSsuqfxd8ke5QMFdfWHQKidQvtq",
  "key17": "4mKXQfNNEYdb8MSvrrnacMdmWfdsYkygLaMjhMMnt4FZEaYcd3kiGE4Zkz8ouQavVbed8vE6CHUca27DMdbytJZZ",
  "key18": "XF1KBZBHyP9iC8Hd86F1AkDam295y7YUwrekFdKFygx3HrngGNp72xAxJu5m8dKAAMRuhrsAdzHUVGti9fQhyPY",
  "key19": "2jco79znfMGTtP82aCe6WL9BzkwpGwCiDvqdk4AuaXvjFqCQYKSMFhK6jSwzyqDBL4vGffE68LkF21JqrHSCDavT",
  "key20": "5YnUbwcRuREerKnBJWe1u6Dc5mwjWMVtontMiPkYKqJ5Zj9iWawwmW7LqVbqeS1JrquG6zQj4gJziCqFGp8qGzx5",
  "key21": "KEc4N2XK78bq9XVbBe8DHaakFNwWrwYtLYUBCoCAEhdCNRCHmFmA8d2xPzXMvH8vcnRpMFRqMKvpkPVr42buqsX",
  "key22": "3Vr6ZCXPbryohbzX8BeaoXDoVCz3638JpZtZy6Q4hRjTpxJ9hfKm2jGMkbGbWP7oQGq51fmJ3cQuNnYXGvyR7quZ",
  "key23": "wCumifmo5xkmLPPBJArJ5rLNqPVoWLmckkaJ6rvkp65kvK7j3N4PMVTbZVJpgqj7xoRBGVcW6KofuRPrNtNjWwG",
  "key24": "WJPekivmWcPUH1cWDY2B7ctSJMW88Z3WbksNGpdfqnnQE7AJMiYkbPusUpasFHSMcjRtQL2tsQGs5We4YmaoJ3a",
  "key25": "28JYrSejAbBiH1owTyUp3XX9yqSiFu1N4jWRuMD4vHZvgccbFneg6SgQfjBXCqaF4DQBzEhxzsJJfYNyHvybPLS2",
  "key26": "J5GjpH4ZZykXuLuidxGKbiSbbNDVaHMnEHwbjCcf4EFf8u1ZB9ovDzs1oTf1fwrsqDEGtaDwDnJNwKYFKFn61NG",
  "key27": "3WsrYbEebVRCkvi846ZQqGRCVe4ahkSHNHscCn6UXKGAnxx77pLMEn1vD4j4QHMtQ87UJZ4chMsHgipByTXjQJ64",
  "key28": "2JvGuGDBcdRAyyPSacLJboktLMJPRyk7dHxTeaHJNpLgicKiFYzLpVi11MCunemtGd73GC64QPkcSN1svMV48pW3",
  "key29": "3YK6W7TkPjpPsfj4Yq8NyoPJWHoV66HoV93LcAmnHDTSw6E6wiGye6gTCBwxLpm6XJtMT6fRM995S7LLhHipPDbB",
  "key30": "2AucHmJNbkzwSvQsJtUL6EzLMU1qm1rrbFm4jckGL6SSxK6QWVSnatdnFUQRjZpKZK1ZeL6gjhLPQy4iwf63yMHm",
  "key31": "4k6BXT51mijbxzJcRE7sNKu41vQ4XMwT49nwfMogL9kFLLkgASDjuKgQHdmqEDBJ17BEQkz3F9JD6BvsawsYBBnd",
  "key32": "5i6qA6vKNsrwjhgGuygnV9d7RkMrBEHVc5uP6Mb41w8CiVvhfaxeGGbcbN7a1giM4iDTJUYN3jGgN5pmN9oLmfYk",
  "key33": "4YfZpyQDwGGUDgG5YZQQum4VuwszjvtDGsnxX5UqAYNhpqL97pzmMXDZSqyd5Zn3ZH9k5MWHcxEPNVCHcUZFoU1D",
  "key34": "DSpnHDjairNzqBPLQeeaJaRcToh43abpVKg8JmUxisSeWjUrg1ncAd1ov63LwG4cbnttmNBooRe69G3YN5teF7y",
  "key35": "5iWwqQze6Nuwkcujhao8nPX8YD63bAq6ycPppoKGST4c9jjbaoHVNyXzoGD4DsUWZ1NsboJrSpaPn9mtGPZnpJyu",
  "key36": "3jPSUshwb9esQCYcS2iiLuQwCsW1orEUJU6xngXdvtgPB8znctNN32m5NVMi76NmWZkP8HUqjr8V11mGhv9F4yjm",
  "key37": "5ECnfPmnNKbxxaUxLh9MWXCM6ChCfDyiDap6hfjdzvyCsGqvbvUsnGjPsrKeye59bQFhC2KzPiypxM4kRWNeXTu9",
  "key38": "4Vs4AdH5azBKmKcAwb8Y5FUWZpMf3o9WmiYztMgZKyQLfAbRr9XP3Fa74vMJrEU56xPHTnYabdLZjiwoFRUSqKev",
  "key39": "34YxWdAhzY7NUoDDxATNm6nFek77yUoUc2A7SFjyA5SEHxfqef7fJsKUwDYDHA2Td31Qj1o4SD1nUEqvfScJ8W4o",
  "key40": "5s6V8mW8KZutiTd6gmFrKirpiAmX8rymaBvQj5tPBQwLeGfgT8eCo8RZKqWpp3ioDrWWzEMfymdzq8sNgHDxSfj5",
  "key41": "5rVWKCrtuKsT2hMVXrcBfo4rvs4o7rKoJqGuX7g3xfMEarDvVaaprZgT5xg3u5vXMr9BFCqqVnjzx8d3bt6cDCUc",
  "key42": "5A9aeF2UmQ47pCEh2UP9HKah8eT4AsuzS7USpbqH8BbyBhuSXUqyHN3vRMk783iJ2zEezzxiEHSvnypm8UdoGLvw"
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
