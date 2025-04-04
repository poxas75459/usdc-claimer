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
    "4BQyN3a1V5j4v7EwN93eet216HxcPaE5Zgt1VVk1jLvycqhYkQVFrsHi8iw7Xa9xGhuPkMaQF2vSCkUotB41rtgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGTd2FgpiTWLfyFPMXh7FGUctWkotgKwPcHsydwnM7pcUxJuSm6sqbbM63xqzPUoP9mqNyEeYU29VY2XExNbRzs",
  "key1": "BcZUgbBLEKdaa5P6awXk9oCymHgwTFrHqmCxCWr2pQzhBGJtNkATYq2dznaVbPS4d1aH36BQsoFop6FpWwXhGVp",
  "key2": "56wT3h1kXEn4XG8LH74gdiKEbckwvGabd4jrbtCMeuYqo8ioDFfT8jW7RXS9YD8Zf5DC7sR4mZC2eDqALzeLBUEN",
  "key3": "soBqzQwePzrtMA2cBMPG9Dp2gHEeHDgFAPdBdBHRfL7YndAyth5wD9iuZrxjpToUR2mBp8gVgvAq6RyMeyR1THV",
  "key4": "3RDm4LRhjH6LYMtbaeVshc7rZW8o2wzdVyAcxCSbNTdzpBTCdhkY81PM3xDhhiBUErUnPLthUmMbsdiMnpUEyH6q",
  "key5": "65nHpSm6X4eSNZzYA1UgA7tPjgBvPv7sti8FBvHrmDdqFsGJmHbmB9AQuKEEh6VVQxNgA9sRJHXwDx6Kk8QjeQbJ",
  "key6": "4DKJ3eXeBpzSHU5KTWKzbcFhEryGf1Lh5E5cFeoSrEM6ULknEwL4JyJeXeeA3jnnKn9dLkH3kTVh6T2rN4nacWd2",
  "key7": "2sPDAFXvccsPrvuRTQFq246wPVDQMz7rcfUq4NsCLzkJnprNMbkBsCPfpVDEaKLMtW799cMJssmYxTxLK7mJZ49",
  "key8": "2RWpK6UQfoV3BD983gXutyiHS471AUeskQCK5pdALwGTR8mrnogxRf86DwsmYXervFqF8eUyTiST12Ec8tVrMPE6",
  "key9": "2nntcuRvSDYQy2cATcP5MzsbfnuRTKQRdcdLU8sEh2GAYPZ8YN55DnaCjUPC9GiipkgvUKcBpgtuQFSj2N1Eky4s",
  "key10": "c3GMdvEG3qySxtbdWUwuVA3zDjKVb43SVJjnevUbnJeKPQzJ4N7zLvW1c9jHAnHbo6fRkAS9Kgb2tGLLuswbE6E",
  "key11": "3dPs9o1EBdQxUX8VXwWUx2c9cPEdFB9xDGkavfoX1gt8rPSXXQRDLiAGr8h21RJ8xMeR87FeLwq9ZzAniiDiNV4c",
  "key12": "5pAHVCjnavbioMfMYgYi1y5JEjEeExYwoVxd1bGPaRf4uFJ2uKdjLC6pw5aHJkcK6Zs9TmMZFZbk8S5gWtN6hVdC",
  "key13": "4BkeZ5Yhjhpx7GyAyPt5gCGGc7dqJEPhb48iNTgLaJZU2PNeajSgxPVVjExjb6FisxKpYw7M4kXCiL8eQVHhoTSv",
  "key14": "WbB7eSByiXi4Ptm1Ei6rqky3GgjqC7rqwsUzn63BD4bcaTEedxeyCgfwCa8ZCcjZ3vxfDzBMBF2SD89uxrrv6E9",
  "key15": "5CpPmH2sUSWMYxsLvZQKnca9a6PFqkE98TzYqXJTErbz7fptLvjr6EMrh62mohSAyqg9CaoU5ntwKjqiwGceVsMV",
  "key16": "3kUk5gHC8mZFbDFSW8YzLMSCwpu1eMSS44JvVhrRUG8cL7A92LPfhsPDTfFGW6nXLGj6mpTr7YKzq4rs6mvsiB7C",
  "key17": "3d3cRVQN5oKpKx9fjWkq2LVbEBsb3zdsZ5ZpBhM8LG7A6atfUKsgVHyMFrfGMzzKph6w7Wrmr88ua9HKSt1b1LG6",
  "key18": "2Uucd54qkCoj9nbPxdVj3LZUrNEzftNvLGyvFuPnnaFWtjKHyNUjRjnRoQCEUPqyaLd4VNfsGae8Qu2fynArjvzx",
  "key19": "y7K5qTWUZz3XVfoPpUab5smQksfRFNQy8NMgZSVUoQKaFZPWMeRqZh8TrEEXHbsw2mfnAZNjdnLPDLnbKgmgNCc",
  "key20": "44osdpWfGY2TrC5xaRJibMVJejwKAJSZwSrQ43Xx9QfahPyGKYqtj5HQW5mxL38SGvSPuEZGhHWQPJCdnnLy4A7w",
  "key21": "5TUJoEWsEehMxhSHvppQiMDwtqwibPbYXEMpk2xnXzNJUbCWJdAq8MC46fJfrWLtCu42u7FGHm8vxBq5YCgZdZwm",
  "key22": "4zfFexTQvFRKDNJWSqRUxzK1z6wWe4pt3d91AmNiSqXXiw55swTDrwBjpYBNacWyLQJS8F8YZyuH7Sr3UrBQfBe8",
  "key23": "5MWxvcQTfDCcy7s1Xsu8uVDLbyEiGBj6a1LRvgXTBqNgJrnvNZEDCQPLPxV4qMPSxfxk1ttccdUv1zW2WkFrbmxj",
  "key24": "49HWdQfCvPWHd4epeLRffFt1P9DZMNSzvv3B2Xjk2xVhHuYeKQHCfGumNs6QoHiW4oCzB61rEMJ6byb44efhFrhd",
  "key25": "32QmwgVoHQpDCCPV2tXsA8Uovx2Rg532AS1EbQ4hAGqe3o3kPfRtywfZKG2rfoHijb6iuo1Aos6yLuKD3Rif9rtW",
  "key26": "2Zrpt7sE5xdXyPCGUSZoZNZgvG8vZjN6GratxtDx3DkGwmxkRdxfoVYq4i17QN65t6yNc7TYv3aF8382Z9VgfLKd",
  "key27": "4JWtKkcZEPWVxdeTTYb3rMpsvKcXJ5LAecsRyvz1EMK7B2dWKRrvzUy1VsE8jXwyGw3iJxYbWB7RZ3TAXNWeizrG",
  "key28": "wjWayDiKzfJaiHqjvdnHtRugari3BbnGEK8kBVK6fgArYviJyaofLRz8eYP6a21een9iWju8A3SNq97VEBZGdJL",
  "key29": "3rqKTVKvYiQj1gVWTX5HoRwPxSqHM45mvRUcb3oUvuFBCqdmgXceZk1yzDvo9zAQdHDBcgnG9fDEVLSR4WueopDh",
  "key30": "2iLLY1XKc3SWsfUSUkg6Lb1uXVFET3HnsJs1ydLqtDAFCbxxv4m51ZH3ic436vecah9S4Av2Jb3XQkPtzhkeN3oH",
  "key31": "46E6dCvpPUKBujyqmHny7EWz6kMtzv82ijAgyxD3XvLXvTMz7hEDM3AjF9FxDZcFgmfNZxSwzF7Cwmm6b6GgtK44",
  "key32": "4nLRN3fTY2tQoqwMgfVpKwhJX5dSsvRQfGSFa5gdTAgbNPzUEtUqtykXAibTmUT9R6WdJ2e4GfNMpRoaoVHsum2V",
  "key33": "3h74NU5JWfva1o2eh2RiYzrg6JWg8yJEVkYULJf7nC1ZLfyHD31g6asvHS1dpmeE56ytPKvHkTMez3jALz3KJyTP",
  "key34": "5UNYPsPh1yRzfmK621hon7wKxUXWsdbJnKNyxzEYRy2uyQQAtY96ioHyM8BTAvPwkacQV9BdZ98U2XEGHJ7icwfC"
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
