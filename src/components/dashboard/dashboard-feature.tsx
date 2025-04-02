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
    "3vFaMhaKAhE3oTPTv8AnC1u9mbDAWmKTx2iQyDNTuVwvmc1UWiQdKGdLziKJ1m4QTfVyLa8V4bFC1bF4DAhtyWVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RcZSZ5aaYycCtzDMSaPGNZN6avo9G7Nhry4CDMjYbz6sJjdxz6i67s3bqWAxaV774QRZ3CfmPgkGF9UPRkHhgrD",
  "key1": "3dNduhqUAFyjbKXqPfkZnAbgAR5aHhzmDRcvKNv38UvJMR5xh81wfyBptXyiAF6nSx8aEuMBgfVvtWDM62KGyAUQ",
  "key2": "55x4uKqT6ckVsYd26QSq7bmC88Mr9re5nWMBixg4opjjx9PbxpdGBKmQr2VkbnU1fm55h8frTpbzxXNEiBY23Jjd",
  "key3": "4WpCL7MTCuKgS8j1AjM5vZQfU51vipmRAViFMVywBYhfqUrPHvfYkivfNBCgDQjS3HMi7bbvyVhZVm2N4hqaHrpN",
  "key4": "5HfVn6c5aiot6xEEvjoCVpNcK6kcdgexsw8K7DX1xfTZmiW7eCri5UxdfNiibGm8R6gmiNnkyR91phnQAD2RbYVX",
  "key5": "53jemZABsUACYgWdSmoQcbVwoHrqkTboi9wVWRQLuRi3jzG1EHy6Rk3awkYgUj7VbQhUp6nVzrcAXiYkPJxxk2qi",
  "key6": "2tir2aY4szutVvkPdVMjDMTySq48SmBQ1dTDaeCU2owCKV5N3FcKpnpejXQgY9ebziANWqWX9KRXd7dKfHs489FM",
  "key7": "51b5sqQKhfaTJkP9unDYS9J4TLggSDxQK5YgcdXrwuVdC5vYr6b6Psax5AMY7JynQPvmDG5nrJAzSLtjPNkAEEee",
  "key8": "67ePQKydP5gs5dtLxQXayCyPr7K3Qa4Fu6awHXXpVCLWEdBrdPpHY2cJJYDo5BhhsB7YfXgLJPabmJDJtYuMWetv",
  "key9": "5jviANsDuu2HHrv7iwPJc6vQi5ySVnbRRD8QjbdgjfToFckZpiirDVzDt24RPvsS1fbrmJbDrfFdFSzxSxYM3qEQ",
  "key10": "21A7SXFp3VqcAomnJqZ4XzRQekaic5GNzeuxB9AUcSiBCMHAxrGReY72DSWM9VAzpboFmskGdYPSdVbLgPdJrZKa",
  "key11": "qF27FaTGHjuDzWUL2zEeGm211hqJhgWmPBjbXAUPSFbepH4VdKq1Rhkdvk3WKiM2MUVMnJxSw5HDzG5KHyZJ4Bu",
  "key12": "48LeAJnUkK8cxwXK2CWFBxLQLRGQzm1jC3K5QSEEHJqMZyj6h5TkiWLxiBQj9ULP5Wb9mxLhe8K4KcZEusEzsiNi",
  "key13": "4vXrnGHWhNfewK9nXXP3tpefqByor13iKSEPKb1jGijaZnGSdBAavWDrmsh9xdk8Q4SYXELQxJ7GxAknRJytXa2h",
  "key14": "4xBU2fXyEtae2AxsqwfQriAd9yozS7YBETH8VjGCdF9ce5EXT6K36anDEA399ABvAwDVzBQbK7eTbhRkvnZYdcSH",
  "key15": "3JtFZthmweT4nphm7aiUnpV2PckETyKwjKkCVuuFpLNW6e2wDBVcV96RdcmRGCEaoQGh8PxNeAWQjQQHW7c7psWw",
  "key16": "3SS6nQ9bPjdxh8q8Z7uarKhKgwBV4FsiviVxU4xNbMgpZwt3VM6gExxBf2vzdHpeBGczkzr5484xdGh6f8ChHNuQ",
  "key17": "5rZ9UesCMCqNupgwkTjeTrg82mkxncqzDZpQ1CcpSBRTuT8JGDnnuzBTYwjn1UPjwBbP2WBYQrGwiLX2JEt8zkE6",
  "key18": "5UkSzVbUnfGgZxwFUok2kyg5t6rkYKX38yZdrFhka5URvaLPn8rjL6zLHWpPJKasr9YfR3LEWGFx2qUvmad5aeNA",
  "key19": "3iE3VeriQxBmnmBLgiUxR3uocQKxZQ6epVcpkSHeeWAncPmdMFHVdDMFWXBiCh7g9WJvJEfDfTyghoueKzRBWaYZ",
  "key20": "HgfX9rbHFKyMYoURJ3TG21NpGFswQEsq9PqjSMsiGnAoPkfipXnjMtfAFDdEhLJ3hYNzVmdrGSWcrsp8H8D2aQC",
  "key21": "2vSKkjgVs44EkezENruJdz7jkzh6KRGJbosmGe1Gmwmy3grFE4MGKU48vY6dX3WsHVATtmSb59f43B3RsCW28bkH",
  "key22": "2kRFrnCHeez9G3TE3e9Vb1NriAHadGhh5X3jNoZzQdZwxdqUNQdDTsGUYWvskSJnXSRK8rXKFC16G3kEAtLSdoWp",
  "key23": "yHWzViYT81ZEa9yzxvQ4gt7fuF1ekJUajkTZxaYUEPYajmKcxqgSFGKZgUSrJ4Mvvm5WjMmqRXg6wny8Pe1dXW8",
  "key24": "3DN5AN6F8TMqHMXYESYcwddppjVgKo2P1PBcrVNQLSmwkbpMRxWzrd3kg39Ywu2dtRHy3hqdKzQCnyfEo1mLKChs",
  "key25": "5fjqQchjZ6qwnhrJy28KuEvLK5td2QfSiE8gkoFg8mGvv5oqQQyWC1qYqPPXLiTQgieR2Z9XiKpGvtbm65ZUTgWw",
  "key26": "cBKgVA8LeekqiibAipBrRPGF5tLUAgL8LjivSgDK8zjx7zet3psg6BQZKK7D6mS5Kb1bjZao5YZzZv3DtkEYeVo",
  "key27": "2xZSjA8mEERPmAwHTQaDYkD4Fi8vioCFRid2uwtTjNjfpSKQoxjxHbUQ384w9gF5eSprPPjexELbZSmBjfZAs3WH",
  "key28": "53KwKXngvJPC48cMAQFn2N78nhxtcyE9dSKgfHnMC9NDFh3gSPGPXvunbnnVXpJLMthkUNKQWzGDLybSTwREXMKW",
  "key29": "4E5CbhmurHPZXUzeHbdtjhZxzUNJ54ngxYjmqQWwCUiSBi8hEiyZVFGwXp5j9pnX1Qm9AVKd3Hg44Ruy58Y2ACp7",
  "key30": "5NMEnkHsyBQjxxk7QK27oQ7Tkn9KhaNRvuLFYmHbLbAvEZu8MxM1XUghHBtBe1tsoPzyFasY76xypJXFn2oip6KN",
  "key31": "2m7iqJHaa52vevdgpnUsKXD7LRXQcds8PTt5E9DgTmEwJAnYWaEmg1htVBadpSNkxcZwBpy73UYE4eEdYq1cZcaR",
  "key32": "4joEwTk2xvSP6x1S5MoYF83zzc73fpSTuE6d8ZNS8d7qJmpKDY2APnZgB1iJxhaKFXcaravnCxnQ9jwCa4kxwKyy",
  "key33": "2KhEz5pSsNNNx3mHstBD9AtCfeRCSNUHYhAGKovyCZPKYVKGex6i1iiYqHHMGS3c1uSpfb1XqHbwHR9MtnRFyM6n",
  "key34": "2hELNM5mDWtrPtZzCaWG6QMjCasUFNfvZiNeKukxdvj5bAj43db7A49ZyZYJPozu6zqMuVGYzmGZfL1jGsw7xf1U",
  "key35": "3m2PHd1eFCSsuyseNNBxWkWSd6SxzFqiC2A3s8MonPiTBr2rWbNeovr6ePZBrBEvERFWnG1xJrBjifoJjntDyZz7",
  "key36": "4PRwqcsKuvsCBnpgqQpTYVmvgoAKnTtosFCepavrQkSkvFZqD3DR2McPYG9dpbRnwGFrQ5VyKCNZKTuNgNydLT92",
  "key37": "4Biixhsj11JgrDZPpsyfzuW22jdxWy4t1WkbevntoyfjL92agZA7oECsaLVULQNWErQMzFnsPdsFdNzAnbKwSFDN",
  "key38": "5Kg9nPzJ42Ep3AKVcKeZmgfoaewfsMxS73QjGCviggaEgK5M6KYBT7XqcAmFKwoHGGptF5q4VwFEyu2UNdJcMGrh",
  "key39": "51CLic3h3PKSM6tNxV2KFdCSaohQY8PWfrrYYL6NuSodv1aLPqaUtmBRdcfE9JNgGqeqcG6zidR77nZJvxDD9Kff",
  "key40": "2vpLkMXCopac8B9q86m8bckRQ95vQWW1963nWcd2XbN1njzKCCvDR3wq33fpTaNiLdZFHPFvqmcDDjzEtxkLqKq7",
  "key41": "61WR6HMdFKNN8HMoLtXPTTFqPcHFaMeNchNchUCwFqv83ND3yV5xkH34FwCHmpPqjwh4zUVBZYh2eWLrUZU5pott",
  "key42": "6e8Hhuy3HfVMiqKHg4nLmtV9N3pMosy3ZNdZXDmcgJ7bVPf8QkKfzuUKmMJqsFb4wxcucHhJxkbY8NTXvsUFiwF",
  "key43": "3F2TXkc6D2zDJ4mTPJ89YVpEha3ur8z7mPMEUvtV5VL7t7HycXvtApSvprnYYykXCU4CbfbkDJUvMZWWZKhWTYzg",
  "key44": "3nfsq4YeTv3cHezs3CTwVEW6ZTZe82fwEnczyrF8x3EgFZUKy85RdFvahM9YuQBKbfzAuGM6tywQFpWyZTW5msHw",
  "key45": "47Ue5HenAYFGQPomsQ1LYT97rBWLSNoawnAbjAKouRwyijtfvEjJToJPtNPqusQePsEMhG8YsEuyKFr3QKGdZXhf",
  "key46": "41ip3Fy5K172GeaVRrFTwKeXHqFVczdbNLSZJJmoMhe3mdybkWHqV4WpNPEzQf3tXZbcpus6E1gQEv6GES9PfGeJ",
  "key47": "5joDw9W1bxJJZN2H9xoDYuebUieVy24wPkSCM5WaFCA5q2SfM5HfzUitLbSizioarpQrro93jmc4vP4WhRwcEnG5",
  "key48": "67Wzo8ohZHfrB29SAJqpZoFTLdSuz24koYZ66pPqAUucwxq4UFBggP2sgThvKdL46HbxoZXydnuJFFd8BqnNktWW"
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
