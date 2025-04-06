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
    "4NavuxJb5e74AcvqozafSuPVevsTow9G5sKcq7Kn5Spc3DUtTqjb5wC4V1ysNHYHT6PQUrCLK3CyUZXcWGNLezoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3Yipvetv9ZHWtZTCY9B7uFbY2M4UWTBGYfZaUpXBS2wyQ5deLq552pbBx7LesNu852c9aGpUvs65VZEav4iY3v",
  "key1": "5JVPpEhWXKDaQLpeSPKkvQkC2g4ec9cVnHqnYFDC99VRvkZN4upkK4dxc9t5jNPbsm7es5JgFnXbE72HbquQQdgD",
  "key2": "3UbfEB1hnVzfMmPXC6vRe1L4TomztNCHur5oQZK1QoyNuvVnfk9R8u4uDXmadxxrJTgrF6tED9cSHjmU33r2z3Tm",
  "key3": "5Z2ToYk16K7MANHQD1oPykCf6L2AQLqoN31AEBdDuF4u8D4cXX7PN7BVsJVk5UXpfyHLUPj4jghUckAj212vo9TL",
  "key4": "4VngUXGqRhvPQVV7J418KCbNBU3rc4CTGACX1UE2md63rn1qqjpHnR22WYXJTkHzSvyeSQ7ZScxQGmzwsMR3352z",
  "key5": "5ZYeH6f888bvb1d1GbiNx69DvozR585GkNwTcyFmKeJ1Lnigi19boAyo2tRsUcJBujiKtDkHUSwtYXkVYJcMyd94",
  "key6": "3gUFCQBuLcVZFBtC24Dej1VaM4NeBPc41zrVgRn7yyztSSPgk79WVJ4jjD1oFF6oSr39vP8cGKYGZU68uTjdY2hP",
  "key7": "5QFfMgYCQgWK2s2gV7jn4xs3j7WbUTQfrAEAasC1Mjy72VAvJfQbZCJozSaf1hQpYVZmgqWBp4yr9ReeTopcYGri",
  "key8": "jm7wptUmcen3Na7wiR2WQYfguPGcSoRkeAXpDe1a3cUE27Ma6UZCcupCjBobkdRtS98UdusvP32WhrzyZZp8w8R",
  "key9": "5wnX9vpNysiFg2YGT9xXQpJR3oyE9yWrAo8ZxE5WHRpQua9usowqUjpe2MEt8kwdQH4L55c5wGZqurU3JR7L9JU9",
  "key10": "3dopNDxTfGm85x43DWQPQznV6e2Amiz5DhB9DvtS84bfXEEqD3WLSwYe9hrx6AdggNZKJko1ctxcxiEp1ktaYWxV",
  "key11": "4hxAzvCVs7LzvastBgSRQ36bGyWuwzqxwQCFfa6CzLRz2sfjyuCpupF9GiLbU6q5cDGrT51J56Eji91vvZSqHfcP",
  "key12": "47oMbyqhtfqKEZs3WkgvEhqUDL6E8KDe58SLNB8hn7zXWamf3PL6QXTGDJqJt2nrVnkHt2MH312A2tJGukrAZY5M",
  "key13": "5L4QnRJbMS3zZtVVfxuBFYzy2FKLZ2JoPmCiGmLcvh7wNGsoDYrFThyK379VciGZMvjuhAgtJyiQaEhZ9oHf33WW",
  "key14": "5oG2MoSkq4oLBz8cKa2MYmPUvGs5p6JVEKA9dZmvPNA6V1ULa5APEonCzjSTM21a1qCHCm3oG8JyYyaRVGSY3GNn",
  "key15": "3ckxwKMBqiq2p4jmUpQ7SXSkKTQ834DN59Vow4fYAL4FVi2xVnPtBmBnMG3skTKX76AiEXt2tQvyB2gU2W3d5ffM",
  "key16": "4MzkA3ArrPmGaVtjB5mjvBffFwjYaWgW3QVht93UFEQ5qk5Mgoi6LegvynxPbGEugC1Tg4t9R8VESQgnokAZmYko",
  "key17": "5b4WMxPM5VtgscugfVsbVN7Qk7BjcNBkGVt8WLUUrLMCNWhz8C7DmYBoNtqKiLD8jw2poaAzABYuEF9K7deQnGv7",
  "key18": "5dPADeiEYMYoxseGrXez2RhWAYY4MUUFYJhB8xUe8sVTd9BzduJFFc58J8ZKkNkVB82BRJ8ZSq6fbr38k5kShytV",
  "key19": "5YxWUpG1nkTUawwAqELww2yqRDrWHZgHCvct1nH79iPWWbjTFK3siPUgkC7BWbzYhZBHch2wyAhegx9m1r9bgkBL",
  "key20": "48XhP2QtydCHxdB68iSE8GowdG9ZyFYUHTzPg63V2QwEUYVRxWzaDiQPCjDFdqUd4XEjHJWXEsQWhyQ2ytCjFSNH",
  "key21": "mZL94SYVFaTj5ukiN9RqbpQE8RiCXuM8zbSzMCaExTEhrjQixhbtbSwVsC9hJM5aRaTHKqUUkHGWWd9v27ESPNA",
  "key22": "2YNYbW2eXqcHS19FKTJtgTf9rMLjCsazhx9Dtkmghp6uoc4kjRiexrNV1zedgomC2kqyor8mdT1wi2ruVSNo9WUi",
  "key23": "2gABDrJfumAJimGeafgeXU3EqK1hY74mL1CB4kjtZaRmBYaqzmWuPdgWkXBtWkhPeYvTcSFXr1Z3vTWuTCNsHUAs",
  "key24": "3qN3Egez38Mh9cF3nadhkYCGCR7YgtqoBF579zncq7SugPdyXJyYQvYRK2KQqKJNBxbCbMTVBev4jXLFRW3EQjXs",
  "key25": "2SCiDcVvKRMZUqKQeX9t6rQwmoGncUbx3YyLfDosNiwbA4LMC8faGLNhLVa3P7fayxstihhi2cHcnmemWHbsWtxX",
  "key26": "2JFqnWfsu92B7B1GdPMZQ1P5W8ESWjuHEj4ANnK8VdpQkwN2D2Pe1JWvQBMnR9dCaKjdbA1UQY5aWk9vd6tsNRCz",
  "key27": "34EJGQdPGCtLuncX9LNG1iUrEVd6T8haHaiBa22NNFzjoQzT4QiotHEhjRvSd3byHo44WSyaCkSfU6RyEyNB3SjK",
  "key28": "5jorrHJhgw1sXv2XbwSjXsNEEJdPNVLByTMivbbbjWjE35yQWD4cxU8f8fCgMQLET534zqAdRjf7gE7km9qkjLFx",
  "key29": "53nFvuMDKsYjgehq2N4JmxqRFnbe8H2mtF4bA7BGShVrjuGXXcj3g4xJP2NHxueC8YgUxWjEUGc9mUzZeGrvtV6m",
  "key30": "5xxPxVbGogGLd6jLgbKw91263XB3FNyB8oiTVL29U98tSHcecJsgxZSAT3ppnVjeQ77mCduTx6gDxHNvi9DUmcJd",
  "key31": "4V1FQP2gpgR11SaeDaQqGGNWCC9NK5RfggA4GrX2ZhxmjuG9ay2aB2dXnPDYFz5QJfZMwc98Pi64q3B897BuDgiZ",
  "key32": "66fMP6hLDJaQn9vtCMQfN2uc8cDB5rgdpMKbuH88EggbY448vFaqBtMS9BjYEyQnm6tJ415J3Gs9SDrMH1DC1JVs",
  "key33": "4RbYcc23mASqTNVZrbjDoo95iqbtwaJNC3jDf2fmQoQJFR5JSkEY6Ex63iWrsJhuoUcbR9bfEMRmbPUMx3BWERFi",
  "key34": "2xiLyFikXBHdSp2DpM2YsXMxjrQV2DmZmMvGC5rf8U2tBB3yY9d2fMzpL6LXaF2Cg9De9zQgyUPw3xzvH3YK7VLR",
  "key35": "4nmTVADf8CG5Jud57S7dnS73KK2xaXo75nnQAnWAR42pSF31AJZA9bkRtShDmqgnWMbTeDBFozBemKQP261T2XRo",
  "key36": "4HnZa1pBcWTE6ooZ3X1Q1M7k1jZwDRfnWLxfJAqMmo6qSVLMXohCTzpy3MbkFeA1t5Jhivu9JcwwwCUhGuTGiTZz",
  "key37": "2VU4TbxGmvZ53fQd4gmEnCMk8cxurz1WfMEs7JKzEoGc6Zvci2X2DcfVKSgoeCaDZ5ctkjug9Pwb6zNzWHwcgRW5",
  "key38": "4pEVqXPwZNhqGWxR1Sgd1D5Luhm7pnyHmQwpinRJigSVD3AMnwkx1SBfHsEAzfTTNGHbun1j8Mxy41GkfPAycruW",
  "key39": "2xoCLmfFdje1BDRwVJG1LfYKxARdemADgq4jLS5cXDKoxCsnGeA4Q2tyScZsnnojmM5UuGvxjg5coP2MZVu3zWRW",
  "key40": "31tRmEQBaKW6UKwCsg747V1PsvJExeUiNpwSTBMA7G9926Pg8YASWkjGh4DTKJ62RCT56CzpFzz3WDPKho7N8rHN",
  "key41": "67cBhi3sZjjnzgaj7BVvwd7g2RHyENqXEaFmWWGb1BDKkzBKtstGJQJ9F8gd9Z2FrwMS2z9LbDCnWjkMfkg5gBtH",
  "key42": "3CvHs9GCijhHTh9y2oHdsYSX3dFKMpvKJGUPH6nsRCHUYxTW9cdpA3n31oA65Pu91z1gcLskUCygbM6YttgBJmyE",
  "key43": "3GiK5BrvvmL3CRb3qsixBzkouAvfE5kwTiBdTBsYiUn3XcPY22nHU9RHY3aJtn7ZcwCZhPgYYcKagWTT39qaAPMd",
  "key44": "4gx4mwc9GdV7kqDuMXVhXS743ggWLdWH6qyp9NbU9ZTjokfrkowkg8h7BPfQsaTM9HnMcEMHqZvEsUnkWNxHUS1N",
  "key45": "arb4XAwDCqNRGQV8qZX9QuDNcBqtwoPHiEQ5E1fVSrVDD84NgengTfQaAarVtMo6MUmPCfw3R9YeUugdFKNMjFJ"
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
