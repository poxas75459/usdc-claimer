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
    "3bMv74sGGYYJmXaM3z4faDutKsJmsUK2wWh5W4iiGH98rRaju2RFTLjioKCyRypwcX6pY2x7ic4dSzTiuETaFrd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfGaUzuPshZFvxugJqRQrms7YzB2vbjtVn1hRXnL8fdEkrgKAwmui7NF8kEkFAUK4WezEgeojGtr9NkfbeAQNmb",
  "key1": "5SuSFYGsSGi12qFrR1D56KsNzhAVxpuTyHLeHMYt2fDX4Hv2tk7H3SVsrjsmNpmuCM2gCmEzP635DxJHcMTmeVJQ",
  "key2": "neg2ex5D7RiVDmkJmjxnzpEuVwfaikHTiwzg5NiP4nC1182u3qKAkC7EP7eJUdwE3vgj4NybDAPeJu9w5BWSsJ1",
  "key3": "YFi3JZQT9ZSRAmLg6jPztWkW1f1ZK31PWztKLKpWa5TDvkdvGF1oGVL27XJMeH6KwdFZDekMyvqRMsZayRVxVSK",
  "key4": "51wink9eKw5Rsf32ChnSzhbtxBzNwX4uABk7P4guePLuWupesPVkodG3g1eL1g1TageumVygqgA3TEgBxcFKg1ev",
  "key5": "2LXn2gFRBjpT86Su9r2Ux9EEtxb4T8oaY2nUoF83CB2SDaJC5jKHMgYePRcQMQLeQy86BduJ8HtftwZ4oSV6aB6r",
  "key6": "5v28JXuoHbY4CJYfu2AEpfdKcPETKfSpzoiqQhVPTNhp27zF4NBR75bG6Xq28RxAjFqL6J4frPFqQDUchs7VRcyA",
  "key7": "Lir9iXLKnEZLYjYjzmDHibHGi1AZpsiBsdJzduB8DYoDvEn7sCPbFU7Jr2ebeAbhjbp5BfFDzEouVEi9BxxcVkR",
  "key8": "5csVqHoVPsrurzL6w3oTbFyxTAjrjRmRb946bumzC99UXYibUPD2w83Ds15GekTBhkn79vHUj3wfKTXoSMgcSb5W",
  "key9": "78YvG8fJ3ZsZ1eTRPsD7FxMEoFcpei7Bjrd77ghNc8oG59GGKtUL7CyeFuMsH65mb2nyKufts2wa3hShiYhguvM",
  "key10": "4YJ8tyKw6hr97QwRLWZPUETureyCpVBujYWCjXUUjoFfDEYnaCPhfZorBLYrfqvoo3GiGVCNyCEFzL5Ze7aBHk8m",
  "key11": "41UUL2AJQA1tmrkogne92TmwMvMTaxD3kh8BomZtBWABs9JsiW9VyN6FbSkg8uXDRRX7Z5UQ7hyR2DvKYmWz3h8H",
  "key12": "37ixP2gJUuVdG7wKgB7LwNEnJ7US33GbPuGkvy9Xsg4P6Fmt6wE3ecENEpbF2ytV4XkZsqC4hece3PMVK3BnSZGi",
  "key13": "3XMN5HKFxGQMEKZXvPoUe6BMMRuBbrUeVcVpzhBZwA73p1FC27Tx2gtLtQq6voVMQ2LMwkjQcuoaVTQGcN6Kcmau",
  "key14": "2Jhjznv3hpUdyScHeUUTbzwthEgi4HqZ886oR27gmzr6vRJRcVPL2ZuLuWaqwZHopjiRYq2m1yc6LB4cS4obicKn",
  "key15": "5DV6RU1BFnMgy1mt1gFzRe2BHzktVURonzBNo1C9gcSQziTk3SizZWfrUouJWftqQHPyA1MuS74K8GmtxU24Xfsf",
  "key16": "5Hfm43VAUk3xMSxHBKnDi4hnj8Zzvdaiwc48Vnq3szFYiKGerbbcuRL2nCkCNfE5DuTa9GpeF6eXLktYQiwGXjtd",
  "key17": "4edofi1bmX2Y2wu4sKpEeYmVvckguL3F9ypohbCyZszHokwSamDadzQ5YpyQXBgy9cHZaY3P8FGdiYXaH33SQMEr",
  "key18": "5sRD5ohJsoQf2MdphvM4b6qiFurBjBT4rQzTTDtrSS6qS62ZZBw2Th31pZCUCAC8VQDwn4jjzR7GZjw3wkYdh8jZ",
  "key19": "4ykuC5ojKt32zzJw5EEB37VzBkPWv1zMkAcHYG1Nqxi76RQB3rc6W19H3qkX4kYq7MjbPPoQqcdSk5ZEnJp99ZiQ",
  "key20": "2vcRkJkm1uAohMhFzmqupFpjSu7AnUfm1foQCGKsFEqkvo6uFgoGtv5ALZ3KaYRedFt3c87fWCf5R6HcAFsHhnqS",
  "key21": "2rMKVNjbosLcqrCEQ97xnacPAXaWjqbjns2TLwhuRkR1oVQNYLeQi6t2i1AHnTc6kgWygitfywXuFAagCyhgx7En",
  "key22": "3vVpGrZCcQGiQnvA4jfSw6v6xz8eDTt75Bq7bwpD8YYAwdBwgfEkpHJaH7Bz4ruGQdrMLmw1NFwunW2RqCyvTY4H",
  "key23": "2xC7guE3z5ed4pfufpu1eNkWprW8wUiRujGyxJgTrTxVQ7SNoJj76HTaio8UG4YqPey6WurkfgfkLmNRFQ3XYDaW",
  "key24": "2YaQKg8282nXyQ5BFH2jJunvbmQXdD1t2nffoEjGc3UMrx9NMdkQzav29Em2nzPicFMtPXcLbRXjxxdexPFy1VB3",
  "key25": "5YgZYWi7FS4bsKRv6qPqKKxD9cVaTw2LaNH331fhTeUkGWxhCG8D1RoSeXswjEBEuEYJKdHzQuMPcsdwsVZkEsjY",
  "key26": "YUjeb94amYgbkVZApPvRuG5NtnmhKnRcfxVj3LSqra9XjNVKCbshQL4PG7NQjdTZGadExh4qJiXw5RiCADpMP3k",
  "key27": "2h47riu5LDY1hWS29hdSFJtYvw7g2emAdzWsbax6DV8a44z47QptfGXHBippjpi5MrYZgDjMPpy5EBMyFUfWKnb7",
  "key28": "5eXUZfvHbMe9Lx9u7WFsDWv82wESzCYvBAjErkzLKTbTbrk7zvQ3TnTHxwHLX8jBLfwSnp8H8AwniJH8eQbTqYea",
  "key29": "3MLCK3bxwfYSyvyTvWUWcpAHhtzN6GtqczQtX4dXcw7trYMWx7DAPKyPNKZKL9717WjPiRS7QJJebwN7DUvjJdog",
  "key30": "4gwykUFPyr1U447wqSW9muWJufQn3qvhXQGWqgTx5QyYLE926FXMtcSk5u6yme5X5Wk6y87cz8r1V3qYexeAa7oZ",
  "key31": "36X6FsgVYkHrxZMFEY4xrx33955km1N9AkCFtggi8gHdgRzqaVdVtGyrNoyvK3AnfD6VQf8PvxkZLpCgLw4ahJzc",
  "key32": "2gAF9KpAccXYTzShctTEDtcZjyb4fbZEqX7dwRGMDMkLqwDkhxEm6rYw11vPMBJ7KAbR2YqUNyhSkM15CSsSYHPU",
  "key33": "2Ga1ZYWTzQcbjSiBphd2EPzxq9S4McJPkBuYsnV5yPkJmgY4NZa79wLoC15vwhFH3swsZ9zrr7HVoH6WJsB3Lsr3"
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
