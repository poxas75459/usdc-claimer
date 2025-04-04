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
    "4mXiW5nfdKn2rfCANEKxRKSXSin4he53RkahHsWWfTTDFAFvxwJrbCewfKXa33hiYQJ9rH5LYZzFbc3ttukUgyJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfdeyUD2XdoSiKkRLmMR2hw2Vop6E1X6QVhUr8uacFkwD8fojMvn93rS1RHMsdWbE7WDcu4x3m68JMPZARZ7bmr",
  "key1": "4N1RPSasyAidFxnQrkyk5cKMKM5AsnioWm8BnD6Wno86E5FGbj6oMAKtA6y9dQDzvMa1XSw4GJqoYjNPcEJ3CPjC",
  "key2": "43D9Lc2foVwi8igw9h75MfNTmH51s4vZuddzNRoyxEqyUmQws8gN2uYqeYPcreka1LN2U9yZYGtqVZE9Pvc4a8yy",
  "key3": "2dBCNJ1sdDkVdt1kowM4z8u6DnQbyTemmccBTxfcRyabHPiodpQ3wpAsMYRgUK5j261NkgnDQvD3vjKbNP7Kxr7j",
  "key4": "niNrDqMHkPaDHzs3PAKAHySnfqj6yzUeJsCfyajbVqJVftFvmg2Q1WK8sNojkUaritXQAGurLT5vyeNGo3PVRjf",
  "key5": "3YNsFXP5tVJAWmTXFaoMFRajkxuRVbsYuitSwbFDKEhYFZyrdxLK4btreqRuoSQgz9xbSW3nqmFQnoU3A1ZfGNfa",
  "key6": "fR5Pu4nL3mvZozKyYdN5mE9EkVNkb5aknBFVQAs6Vac4oPop8rz56SAvDdChRu3NbGFcSWvSZFaboMcMsmedMXR",
  "key7": "WjSNN8KzNeQqBurUyjXvWCPodQ9d3nHKrZ6W1hKJb4zp6PUgLapYgozxEvEYGnm7xXdTQQv4DXG2utn9uFxsAdh",
  "key8": "9PUkc5MrLD7i7Bh8QfuuRUQFkXhir27MJjRuQsXb3W3LuhRKnys8fmkqk7rrRV8AuL99UHRLWNFPFbpwUvtGiuo",
  "key9": "ckTQzXJb9ZhhnKCz2wUGbcFtojkUZJtvTf9rFvRMzMiTmMg75M9BRS6xfTmQNVLbHSVtogrcQLgnNKE1rVLdgRD",
  "key10": "iyVhBhbyiQwv1E8rq6qodTcEF9F1pFmgpWLBgg1x4ELKwEFbc59DYcWuGnXvckUMahyDtYoVt2Wu4ESiUqXR6yy",
  "key11": "3BnKjS8tAUXwZ2nSHJhTg6s33GQ32wZhwZjKZ4MWfwrZijSGuhwsQxw2KyEEUAhEKzj81zwaiBbQmENcAatiw9qT",
  "key12": "3SxcJHsHb5mXUZAcVUM5DMRD87XRUR4kkFQ81KGNUbcSoZZapqXgSHD1JecX8rSr7ARtn1CscieiMJEBgfBNyutw",
  "key13": "iyX913QeoSNb7vYixU9EU7B9zfzNx8BVcA87fvG7o9N8ZfgTgTH2PHDzNk7dQ5mv9RQ6d3EHtgznsukTZJdvk68",
  "key14": "4MvMPjFeryKAYHLutt9BvSuj8Wq2TuFuF69rtB2RLiT1E8Hzy5Hgg5Cochy8kqqWG7EiXKamukw79Yk4FNTm4awW",
  "key15": "63JKqQSYn62E6Pfbpp3ZJoLj84NH6AkiXwtiJfHo1KVchMyRHzJUjpX7W8NR2fBTFAyStdHB58CvzR1jUAcS6RuZ",
  "key16": "4vL4UPYaw2Jxd5cKchQ1GjxdZ3tca5Bry4DznHm2MmnpDzbGPZUkb6Eu36NHDXfU6H9dRXb5BgJH1grkTcr2hRPH",
  "key17": "2HcZ6ZUgMo5bWaUXjdTvAYuNta7mb62Jt6BEN593o5eKKUNF6rPCsnj1Azz7xheovGZpdJUMSNQAv7hXYczEr7LV",
  "key18": "32smfNwGu9CHySreAAi8gfdjpEoWeoR6FnmCAzmWwW1HJjMeb3tfqVhqx8kkgFwkfJZ8U6k3LknTWNHfUFGZSBT2",
  "key19": "5gMDazdXJ6C5dRxUMxyn67Zps7CmQL65wKWMyRaZkgVfbARRcF9L57w26H5z4p9FQCNABJvhjND7CnZ5dq8o33Ur",
  "key20": "4yY7TmNm4RKH1wmSpTdB5MSLgVXqstJUDh7VwxEp7vyAnPcbc8jCLTxACLXJc3zQk1toEuGVVXRK5STdHmY5htc9",
  "key21": "64rodSRPojjRxAiH34nkCsFHCQH82n2R6ekBii74nSPLdjDFxUDUBGmu7VgTjVW5qPmDHsyM751sgbPyxbxSWdiR",
  "key22": "264YuytUWHHr5tYc5PHvPGfQ24CS55diZV6ZZP9bvGgpTnB3ehRMasoTSmzBLJuTsVjMGRvVfXDztaeV8gDvz3Fd",
  "key23": "WrwTxqBXw3Zi5kXLax8wkTbq5CBbpRiaUYrhBJNQJSAkRcJSytw6AUGLjqyy8NWSbVsGHWTnMQFEnX4mvZMQxer",
  "key24": "3P9ZXNJWvZ2QBd8TAr8N7Jrs1wjfUsTqureDa5aEsbQ8bntCoge4nCa7WjSz8BPxm2mpmJ5W22wQe7asK3eMWYSy",
  "key25": "BMQMpUjrncjKrv6zJ58SVRvPMmaX1XrKW9D8BiZ7hrVo2TGfSXo4s1TbjWeMb6jfetBfUdwAbNgh4C9Tg3S5mPM",
  "key26": "2TghXVohBeQ9LCZgiEAtC4U52XT27xWCCHjhWNpUDwdWQMYkQGXGeHG4caTrii7SYTHzos5du7ZtUEwDkRwNsBrK",
  "key27": "ek2iCT6zucc5Emf58Z6w71sgijXGdCq7w1S5RRCwHQFS9zakFnAdfz2UTpvoRghEh8B56PShvRRWRJwVrNzFfM5",
  "key28": "4rPCwKVwrnWENcqeVnUSxXqYzbmRjGo5g17ufWi2Zq2WYckue5DtpYkJkUnHVTXmEjP9oWG6nuU7JygbUBa9x7U9",
  "key29": "2Lcg5yYthpsJWPksYJNTdAdWhZkTvfhdkGwgCe3pzEgKS5ZStKwajuexmqjq28pkGaTxjQAXEBiMfTh2vt9CEpna",
  "key30": "2QV1eZe2qfM5U7G3MBdd4VNpWBEqsZuYACbf5JGZU4yPM7iSv8jTrbjUZ5KmwStXgUePSaGz5cPLMw6ZZUWutjM2",
  "key31": "3VcXNF7gfZkJeCm6G4338fnB7FzAZzXAetPfUikKcAFkowbtFRa5yZJFFSNGKDGqBZZHvwiUbXuAa3mRUNuHaZXT",
  "key32": "4ahXud8iPJiMWoubS1FaCBdKVrXxHrSieMYxm57bWzWdcgK3TVDyzjLD243w6LCciUf3tUWbD34SE1TU251j1fVZ",
  "key33": "4Au2tD1mhBRQh9X9gQwBRdYgaEJ2UQqRqQcgWfEAb2YARKGtVpF4oNWXo37aoXaAdMp8RNhJm9nV5RU14ttLDaAX",
  "key34": "2piJjqBirBDmXHkn4MBK8KvcwafFy2Dr6DKjRXdKtG6cHX6p198sYsLy3oshrXKjVhssm9cheP9oLhPLiQ9G7Qq",
  "key35": "2uDQg7BqWdkvbX7oYEi9q8qfcsv753fkkD1Cx8ZLFG6SBd6euUF19QH6WkCz5FKb3mcTnvVHU1zdtScWHUujPfaH",
  "key36": "55gAo4U6RGUP1VxK3LAmkseYpB8UpLHE2AFTjNdXDGdpMPENsKzzLam5ZzhDWYWSBzP3Uch1HpbdjLHrGXbajmrm",
  "key37": "VYT5wmKx5mk6FdxWMR6EjdkNwgophDoDvYQ2SqPYvsJsmeM6p9Q7XRtbDnDuHKBcUiP4Vu9HgSTj3XH3EGDizWA",
  "key38": "PJ6R6SrJ3rWxjGdaefpUPaT5qLLw7qZRxr2kd5JCcKfPQVUKLowTRrMTKzRiRjX2U5ELUdTYKUzkPwKmPZeufAX",
  "key39": "3BasLs1LhBdMppgUW5eAaCf3jLEnG6txEpMP9MYBcAeJxFBYct6AJiZvpqQzQW4k9LQjNdpSxxfr7buqzdSTXsyp"
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
