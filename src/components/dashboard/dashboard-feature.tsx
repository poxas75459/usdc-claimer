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
    "35dYuCu2JTQtNi5RE6xjfSzXwZRCQriAFbB9EpybdQoN3nabbDWKU2RCGdfr8KqwssTAvGK8aab1FEUitu3B8Nwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Yo3zFBGu6cLWpbCrKgWjqL3CaaymJtderPLwL1Kox1HXpXBmg1QCGasWL1paeJ9iojEsXUEuBPr1NgCDoDd9Z1",
  "key1": "2TF94TaoRSvnbvPCaikf4j8m4uCT66wYG4zh1QBBzyPuRzN7aZU17crPTShetz8Ua7UvaZgrSqqdsKrdZybAP9uQ",
  "key2": "3sDigQf8cqLFU9JJr3oKoXXRNqojjEXwBdNPyJLpaHJcJjGKoQ2JB2PE8dLbskcXF4hi44NB3RdvxQSW5hoLRfp8",
  "key3": "2PBxiAhAfp2MiKkr8bGcY4T1RA6taQTYwoMkg8DLx6EzCxm7KaqkFrK1WWb26pHjnUKiHtD5yb7JKtFNE9LsuAG3",
  "key4": "3fstNXtiRbxS5caa9A9sCPxVThMmTqQ1YGsFR9a4jxtTaeykB5dFJeTTNoSctJs9NeXYuVyZLGep37HAYWQJJSFe",
  "key5": "3MguPg3DPzGzVoh5viKSkPTgUuiXz5LkFcCQxLGEGaGoMegDzovgWmDiQbD3H2yDLg9KKRwwimFfX82TRuUKZ95S",
  "key6": "4Fk9KRBcKzR53EsfsJSr4KUU96bpcAUdnMMWCuHBLpCjyLpqxxmuxdBKeAyzxMw1sgKiLwWa35GbsKBsaq3W9ZKM",
  "key7": "3hM97v3GANJDu1srFZMXpNfC3n5MGuWfn7gwR4jQiiBHoQqvaqV4enKQn6x2C8fCEWJi73pypEu9SAkRra1Em6rG",
  "key8": "4qyPm2x98zmozV2P9Wthu3nqBBd9dSf9MVTeRvgAVEDHFnAqgxkDDJV7Mr8crwosSNH9BwAET8s7oSL6NtHMNqw",
  "key9": "2iwUyyJfzPya7SSSDbjuWiDgNPpJF8PqwaxdhGfFiz2kcbqB6voW5VNPKdhb46XimUvVc6TUGN6BR1fRvaRPLHwY",
  "key10": "4fGV9L4xAMjwy8t4Fhxe8bd9G3VEBtBieR5Pmqg7FfDbbrfUZmBKurWNLg32ejJWcyBxydVPqecJ7bJb85TToahU",
  "key11": "3rRvkbovzpfRdUM6KPHr5X9kEN3rcrkRTgweBPo13owBQeF9YUjWzCmNnUGJNxuwhV8RoLgiTwypFQdWQLy4RhrC",
  "key12": "4zysfyJNZYYcxUZFiKiy3A2HRPcKEwYb4nNeRjak5J8k5KiuMuYHzHfUZvy5a4RyT1q2HH2oPxuwqm8Vnjf55gDJ",
  "key13": "4CYBqC4c56hz1pHx4sBGNkN6YvAdNSVVz1N22EKBe7WivWbAoVFeUgYNy4RqVaRZY7qhWVh9xgJhYYCTLfGzvVJx",
  "key14": "2aLVTxqq3dWBhkmzhmNpUgf8uQEwMhLeKsKFVT4ke46vpVmu5FDqFjhzeuhFGTMD6bSn9c1Mg38wApLw5jsvL8V",
  "key15": "5BSvSUtEc6UPdXwgfTYqzbKo89wB47KesnB5RnMg3jxoY1gsmY24LZZAsYWtPEj224PFWjNDb8wRBvmPyp51HuQV",
  "key16": "THYQKZbSSdsggtzbGh7qHH9sm7GmpDYFn6FSwirRiNVmpitN9nZJRP8reeH783eZYDBYhiK231PG3zKSZdjy2LX",
  "key17": "3hT9CDchwED6y8ucV7iBVyLJv4SJmyFpukKfYXdmtSoy8rVHxDFsmZzwtd84JVYeShkLQfragLzTQhZqZwCzVJSk",
  "key18": "3nFzc9NUZVfSU1AApC1fhHwAKDMG2cpRtrvBVbBdLHnKBj9Lpo6x74ZFvUvNhHmHYYPrWw7yfUqVCbXGVjJ7jaW",
  "key19": "5Gigq2pz8hHKsGv8C1pLH5Q1gN3CkdY98SYMV5iUyzW4NZd6YmaSC32meKsK7ABqmmRuFvcgW5y51CQicmNMZabe",
  "key20": "4wPk3fR5s3gV6N1Ttt1SitGs2ZMaCJ19PcR4KeYHRZsg8cfpVu89b1343fTQVLRxfRC5RX6De1XRw1yPiQc6evoT",
  "key21": "SLp5DLh3vaAQUwMEPUbRTZefsntwqSBEtyZDGA79zKCv1a6pQTnJsRFfRiCL7Tmwgxni3ejHsxJYbv5P8LHuXNg",
  "key22": "4wHM5ey6wsQvdPMbZPmNiCWLDZEfUxq5TkdTLJ36pgvpjerGKSyVJfsNJNGhgwLnP4GjCWPsTTW2kuFsk3AoMpZU",
  "key23": "3BdczTL8GjcyETGaZpLvm2TLjWcJSf6nvcZbxVdrR5TnLo51kTgVY66HNse9gsbd3X5hnLTSfqK6iqmbAWNZ25Eh",
  "key24": "45cJyhJLBVG84k2z5eCLPx1L4w3xq61N44E4HYXEtitH7ybCgugGjieXbqsryd7NYi45P4Sr4P7Pey7J7SsqQTwr",
  "key25": "2yU77Z8d3xiS63cUAk1UkLAfaFsAKsFggxj4bVuhdBReuyh2SYJcp9sonSsasCmaVMdffrJ2Yj4FpBbW72Qd5AJU",
  "key26": "2ycx7rQVHSeQW6mb9ygDvvt8TkC4uK6CiEWt5qypztbnoB1ViYcaA5rmGhrKq5jCV44FgTR9TC7vQRz27Mf8tGsg",
  "key27": "3mWPFBmn8VquUzHciprjS5wzUG9o1NucGuk2ioH8xq92XCFv1Bp51BvPf5Tk9QfUVr1YUN395jouC1XiZiPA9Gq1",
  "key28": "4RGM1isfhahtdzsaLyfmrcHKZ1tZNb3Heg2jLpbJJBnu8ei4Df2PxvRD3dHkcVaiVesC5Hh8rGECQFvJvxLzUimn",
  "key29": "tERwSTL3tUrDhCwujfqcVbFzsGUmQ6R9cQiUs1TQvdERfeAjz1Eemjqrw4ouUeiwYhpSLwpY5poFNtVimV1YAmw",
  "key30": "5DXQ6sqUnQxTzA4x9Nn2cNAzEewpRKxTVeR1z4qvWDKzumoqDcKXsqfjFD8kgfZicMjK3ncFU8qqhGm6J4z6VvUd",
  "key31": "UEfpzC8rKjNDsPDnzNuYnJRPE27rfcegPvkKP4rxwGhW319kbDByGQRgrGUz24KEgkAFYYBHsW744DrKzrNP1JB",
  "key32": "b1ec1HyFnAB1yvYoavUm6KCuUtATobQ7Zd3gk7zk5j1c5GmXMA1NhptJgvmqGCVV4d1u2nmWwXSFotVossueN2L",
  "key33": "shivd9YXPrcxskTq8KqV9zKareF17ccgvP8e2YMPy1i7gE4VtVeMH3Fbp3gUB4sY73ZAKPPFnxyYXMu4dWhCtTr",
  "key34": "z1JNpRJC5aoKA7quo732x6dBrvveaBDCRLVmuBC1yWUUEqppzEyZgTXdy5bqqxkCoD4Hrad7yukMTd17TQmBRzg",
  "key35": "5TjBX3ZZuKhA517oA84RLQG9pWMgGpKB32pLGmuBApSEpSNztSf3Cdd9BGBYBh1jbRFWL95t9yEJ2MGLjuMPrCMx",
  "key36": "heWxY8pHcw11BiKtqGzffBQz7d8ix42hWK7HSXvhBazaL1rXJKh3QDLbYznmYsTgjLjo4zUXCKxHoxryeoKwauS",
  "key37": "Ubm1ZueZxsnpPW4B4Scc7LXqrUEPtTJVxQAgJ4rj9w8j8WzD4hAczLTpryPKALEg9GqocVh38c17q5g2eEatQuw",
  "key38": "5zCvoaeNhgj7wL3BnVDBFcMSy3J3H7wLekyLADiXuEptToyKhZmKsLwq91t5nUiM6eChxmMBevyNe2dYED69a9y4",
  "key39": "4VhGEmKVc1LQDW6hKjnAGhND7AxvqJjqe4EocxC9kmscPtf5pTvuXFR5i1j4rQMVr4qvQfs7n4EfueQQVP9EhUMT",
  "key40": "ka6CqjmPuvUjLbRptuHKSoraMBvNG3yhykPxwRkmdZ48mLe3sC6zUgLY6KGt4p8d3WThNvLnvbk2ostHUaY11CG",
  "key41": "2L1phFh8nYU5L6d5Zama82WqiADePRMa6dRDBrwBuvE5iA2hNkCLVrWkzU79g4NXWsKaarkbP6LiJF2Ww9LwfoNH",
  "key42": "1p6sH9tsdJCmB64RQSxM1tFQQyd2oGmsu87SBNkbsdX8QTdQGWCk14eGP3r9aKzCUjhBfCkyWbEFYXJznSYG1kN",
  "key43": "258NCjKzZEvAYvLoRAKq8tT5QaRw46zW9x9gXc5n1U6fLtcxAtccWBPE7b1Xp4YrmHe8X1vZBgxCfej3rquG2U86"
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
