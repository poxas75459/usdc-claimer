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
    "3w6ZUETCKVNjHT7JsLRRDsnwYZpah8PeT9497VMF2qN4mpD98XMbtmZK3KXg83SvvdBN5NALpmfdweuDadUK8GV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VbzVGQWVaUJxYoWog6NF74SCJvAT7b9hUyE2HbJ7KBYFKDzALREKaXhi5rehUiwf7ZoGkgdP1RYBujv63FgwRZ",
  "key1": "KjMTpnK1G4dApSKPxgZouBRh7TzuypmfGtDLU1G9NLgwRN2BQ9bY5hBuGTCc1roEnUQC1mfgazFyJW3eQq3WMiL",
  "key2": "38yAxATE1u2SRQHgVzAjDJkVyDQMuEfNwhDHGn8ytsoHxHcbwDYi3ELzuor4eNMK6aMdWhahEJx57rNk2TUy7cUG",
  "key3": "5mbpCBcP17EUusZq4Ez7iiqFsA5caEhnXzZYsC7MzfhLQLjcqnsrp2PTwkqfcpdS8Z858nhpNJQVmhpNRT1PzYX3",
  "key4": "5GrKhpwHZ4K64c2DHEqqpBPRq2yCbqcDUL92wGHx2TCxPf15M8vy1odQACR4veybed1XP51RWvFtf8ACk4d98Qkr",
  "key5": "D9ULuiMxvAii7Xtc7nojAGsAUnXmJStt8eSwZfGhPWxBpqGQCoJwYy6Qnr9FihGoH6M3G4dZ3D1sFys2kzgE9BK",
  "key6": "N95bicHe3AkAwhDmMu1Yc43iRqQwbiV8QQj2Ugiby8v5e8xAutu1pDYHYG641jXCs5Bc9vpkmy6kAeeeQmzNqGC",
  "key7": "28NayhuqLgSVVJwvackXQqKm3L2A1C4XGufQMABfvHpNSUaXjRPACrPBmi4V5qErnpVBB1gdReX1c1bUcAZokhbp",
  "key8": "4QNG5Dv7AF4K3hGLuJKFwhg1a1qBLjKxYT7wTQiAoNXr7YjTeBLyJejU4WzHWsdY9UMbMzhB6HwynKWoxKg2bA8S",
  "key9": "i5MfbvtGJXncHwhnZyMvoLbGZXDsSbbkz74K92wC6Y3SbTvy6jnXop71VpGoGsFGEGUAGoSteTumvp7bZzaKUFD",
  "key10": "3EqsbDVZB2sHTmpCnnPiLU8FP21gsi2xWwMVGWdW3FJLyUoaxKBWzZQ5HWUTKgzj1JkrV89HMb2RZs8jpVmEQgsS",
  "key11": "2bm98gQFZAs135Wnw9S7pNmyqzp8R38zqYpPTn6zMQujffQJnd7Bmfjx4SXKSWDDBu4okLWTz1k7B1QyNBBHR4TJ",
  "key12": "4ZgpgAqKE6qzJPnmQr7j1oKYXfmxGRbcBn8fDaL98ZpSTvXnMTXcLz9XuEaehfu5DFc1fWw8j6fmPq598U2ALMAU",
  "key13": "3ZiymZ7T45fHeGaZK4cKcKKzfogaxtLM5XS8iK9ojz5mNYWTRJiNKziBNg4rv67vv9XVA5eAAVC92jCTEQrSyyHK",
  "key14": "57YY7ZNSFdu1VFNcuuyMJRFitFrzA7hn1MJjWS9syHgWcxzn4i97d5pWRabAkMaJp82ffmDqQSvNaZtfJt9gg99w",
  "key15": "i4UNdYu8qPPX5kavzGtRDuTvji9XViV6o1v6jAZKiqatPqRNH4cCvHh1qYzxjqc5MRv4sDk9QTL3e1kyDTYEHih",
  "key16": "4NeWhPWqsaLSqqVc9zyxgCYNdGsh7MKh7BF3KsbDJsUakwmbiUEouefFYDR59YZZXZiMYPHBA8ij1XcQ7TK6gQn3",
  "key17": "5WnDeWjy4CHZk6A53qr9jmtzCapxJq21xf7J9QUtx96m8Gby3C7UcDBxTiADbZYrs5vJV1UiF6GR6WYiTd3wqMyv",
  "key18": "5yiVAtLbirY2x7LLJMpPYf4sRD52tkHwuemFWnomv9jZZY5pqGb9WeFDirHJMATpBpa7Fr998KsP7BpJok6UC4Q",
  "key19": "3VdqA8HyuupzLMKacZk3Xe34RVnTdJpTgVhZf1GB2YE95HqZgr3ayebdsHkTWMuKdvMpptduefvTCPbtfHRwMdJC",
  "key20": "5tPQ9Zo4QbNzn7EyovV1y6MRGVCoJbRqiydr8TeeNEA5qZ6vCDWLFptKztGWo5mEHbJiGc4hYxf6bYAjYg23dB4H",
  "key21": "4y9zsGHnNKMBM7dRKYFFQuLoT7nB99WrSxn6MocLkHJt9pvAXLZPBFih8W3cBXwodXeQKH34P5CwnZBxCxSe12HW",
  "key22": "2bDw4DvraprcuAiTdYyVbSpDxzQzxaYpbQsib6xdUjBMSjcKX2TyeceewDKB4eGEnEQDr8cGrLrLByDNFhFF6m53",
  "key23": "2HQytM7gTALs1TDaid2wAcMqq9mcB5uSk9t3eA4rPLQ8BhwPjkYRmfC81r18Tuo8d3FuMaUrq37aoZJxbtD5gvgx",
  "key24": "4zXyXMa4JxW3RkwLDD9R7Swp7XWRXQR6txkyCi4s4n7hpNe9FXtRXZdUkYiu3Csf77nV4YvpvXzcSg6JSoTvPHy8",
  "key25": "4wYVvYZ37H3NHUu8hULnzqdnk8EDqJcRh1xmGQYTNBvm4PmQwe993pqzQZtdH5uyZZnBZMLvzedh1XM8PUArupvL",
  "key26": "3JVcLZvB3odDSE5FJajC4TGtekcyarqfwU93GdmXWZmdCzEbS8w5PQ2N8CkhYgGiyxtZqhvtABZYSFUAU7q9ctsk",
  "key27": "4dNjxeMKzG7UxoPC9qqwV7Etf92w6DrBYMTBHd8QKW3ohGZAY46RgzaGWMmqMoMKXYn9WMMW7mU3UWwBNeDRStRk",
  "key28": "46WdBwrzQDe4fRMCBoJtwf3BH9xbQvEEgEUSPwWpKDCgf8kAJkGpgS6fYmfvXqjMWLRT5yVgMZrMsPVeQ3cZCAT1",
  "key29": "4Qm6EtX6FB5GGqJj6av5eVsH3NgyntgCNUSpzPsKMSxoagh1erbxK4D3e9m3zgNmCFSUi7uRV2mDz67mxv43JQuV",
  "key30": "FB1f23xUwoBG7rY92eBF3ZpEEv3Aa1jBRUHEXNzvAKy1HXXXyYTXm2rE9ouD7TwVtXunsf6aHESJM2YYG4pS8Kg",
  "key31": "3j5gnHgUjGk3kBjBr4uZ9S7fAon1gRKFXQ3A2j2WaMU2VzNuvUfxApm9t6ZCPVfs5n8dH96uX5Sf9Bkobfp7sAz8",
  "key32": "3uF9S4xpZLF9VW4d9ere82KhPgZyHxxaJWXsKYaTLhqR21ZqsjgKijd8EFoYARK2TmpfP4ZLSrC2N3F75UaT73Ag",
  "key33": "3RNT3fX7rFUWnYHrtZz5wFkaVUrHPZTYhqaxXRu2HYKYyqiRyqNd3DPuMrJtHypYjsWZRELDqK7mizffNBYBYznK",
  "key34": "msKsaveb2Re6z1gC5WBhiFehY63ZfpJf3SdTVfNsSmZqntSsDVa2eXPVibnaBdoC3djB3KQ6MJceEAkhKVt3UCR",
  "key35": "48jkNWiEszaD7PDJFXPJi4XiTgC1Dbjcu1d5gdxgZxkc8fsy8tZ8DSojVsuFYtgCkU9MU5NjCuDNWBenEPnCExgz",
  "key36": "2kEHYo7qYivUxMm8GqJxdP1yNtwNfq3RYiZiQYjKcHHRevhp3gKzqjDQJwZvgNw34M2WYVjA3yecGjjxhHqcJ6gr",
  "key37": "3fw1UGbPa644MyqJ1VnwsM2XFw6kV9hPoyqS9C1y5FiSNUXTBNquShoWSGqSi2tUEuKcARwfbvRW8nxhNc73rMis",
  "key38": "3o9gm1yhEko5xnCWWziJH5YxbH9r3SP7n5CwErn3Gu4kytrxZi5fD7RRvL36AkfcBGDmfoCAjfidXEQE2SX93aHW",
  "key39": "5YjXoJtriJTaPSuYMX7sTFDqEknNrU344a9xaeMXipueEqkiBwCF2H2bbdiptRyWW85kCdVNytZFDwCYHBsLCsys",
  "key40": "i3CWZuBrWsL8kx5ebqS7GeD9iLDNb3SvDev8ybVKAdbmaLbd6qW7ZiYvDeB6uZgexSCSFNKPkLQFJnkKchuuUA5",
  "key41": "65tk7PjoTDs8EJh1DqhFa7gfaKDppo7BwrxkD374jp1b6SZvf9qkVqqSk8B8FTD4yQTxREmLw1z5cu6UnT96CS4i",
  "key42": "28LNZD9LeKQNcrf2AE7jTsx6wADoGrwKMgUmeNYYu6eMPcCJxo4wS8sVMnaCcbrcSYuJ54ex2GN8xdowihicwzKP",
  "key43": "5gT1UcoCNP3XXSM2MzcqjcpURoFr7EgjZAJxWCY7MweuTN4Shx88gYCh1WrVY8MtK415YbvUzjfC9UCiYYQJsGeD",
  "key44": "2JSt5k9xQpJrw9DbP4MpKo6mBjoBRojWUMsDKcQPiuw3yHbnNX933dkK7gtW9hEscYMFUSKKsNKk14gxnrckD5F",
  "key45": "5Xcf5X2Um7G8Q2k8VcruBukkQoUgdYDq4xujWPhrw2qc1fJJP4Pb4Vt6E1CrqUZZdFoYyfowVEBPSZQLr9AMLCrU"
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
