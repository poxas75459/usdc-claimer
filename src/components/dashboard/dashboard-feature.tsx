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
    "4iAL4wtaw7i1p3u1aU8dAiXnFEkiTiX8GkVVjb6egyi5mr26jSnL2ekgCktKeaKp4B2t69AhQEvVrETSj5zWREBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xur7d5mhpZfggKnzfVWnC8SyHatSbAp9G6gNhkWDSsA9uRHBSuZKAsazA3cpwPmmTKs6sw4yF5apogSCSaE47J9",
  "key1": "TzTc2FswV5qc5chFyqxX99F5gFev1Uu7EbTaZeiGi77Wbx5y9HJjj4iNC7xSj65TLAFxqx8CFxZo2ix9i9NmUdT",
  "key2": "5wHrrQ32zms1dvu1Xu41zHMqwgq8hrrkkMoMT2inBzuHgPnbYFXvZwkrUDMoaEKi9E7nhkUwJn7An2BZonTTazp2",
  "key3": "wdPG5mZqpMqcBkwGqj395tKj3A26Va7PMhqwjoo3MBWjJtzEjdy6wrHQocvuGyU5G5JtdHSrUyUHtmNaNiECx8n",
  "key4": "2qvCtaDxJCB8yPYGkudE5JELR7ZjGNTsvehFy16kDH6gFjTRED9j4A4BaVrKtEJMLW1WdUxKBR5Yq44wiPBASEJX",
  "key5": "545mE2RiU7UfBXc8WewTTUjJvZH3jo1Ay9fbvD4RHHA4ibxE5iXycW6cc9szzycQ4s64asu1pPtuoMLtdUQGT8Zj",
  "key6": "4xnvEC2HjmGdzpBz3wZo2Vkv3nviVyYXSutz2DewBBxi5u2CRdvwb8hmnYFzk3jztBLoW6odJcGdxdZCqP7bbpQa",
  "key7": "58PGqEDYHZXmzhTYXuJkZjKTUmZAX4bW29TTU3a7Dfi1EMEkuGpd9CjW67MR7LZRzN4BFTXy9MHVhUdY4Xsws3Le",
  "key8": "25Qm4t3RLW2k2nzX3fC1tGdY5Waujw7oSjTRAj3grbN9P3E14xHAr4LtcnYEjuUeesyRK5VpCMxgqpdF9hNY8a4A",
  "key9": "3dRdwUmqCP6SvWnxUBEqaiR4mvsD78fmQ82ygNvB3DMzW7w7WEDEDbJqeCCZZhySyuHvPfG9pck8g2PHC9C9uAee",
  "key10": "Wb5RJFoGvxxJozNuRj1ZhdBuv8y8DXSNAgmETb8RmhSavzC7HR3eU1jYEzDwqr95nx71gMSEChrYSJp7rYC5BoG",
  "key11": "5Acf5TCfTUNbLf7QbinxmA31qN6iPSCTaLdqL5FrvSU6kkHba7uEr5Ji4xMvyPhramnhQmknNQ8GkeMjYqphthMt",
  "key12": "i6b38vGtsmV8C7oNpw7yxwpdMJatDtdMFg4oJLkqCpPGc7tVJinWpcJhJNRMM5MpBTrULjKuZ2oBt86L91hYTk4",
  "key13": "26QccvXPeB5DqRUMRPTrfugdMtMGkcjdetzPPD88xApnBejvRfb95vqmyjKwVssgPnvpC3KAaDyUNpBL4sRwSnzb",
  "key14": "5hmUbA49naDVHyagnwNACYwwc159nuHP3txoKqPxk5wqWaPTfJZecivqwA49CMcZ7yeHGTmMAKp47vGs7qowphxx",
  "key15": "2EVWL7Uqxusegzw8oxDw1NHphhjpWN7a8wEFJbgKttszo93VAfQMDHGsEDtXj8beRxogzuLQpLk8MXwnDPWwhFXv",
  "key16": "4tHT7Yq3oWBN7phA1dfBNLdAHNaWbdz4D591Rjx4m4UH4fZiyAuGmdPoYPmY3FPTegqQFtHXnLmugfysSthxrBV5",
  "key17": "5QnKUPm1P4yQX2pD6PRTsL9fpmtU9KNmZC8TdCBcNbyrhxY7DhhpAizKW51jvSTZwGWxGedUbgBpk6PtSw2nkAFx",
  "key18": "62shRizqrNSvmpqKUchLqKcRtu3kFKgKsPNfmGFLFSrTJ7h4wq2j37GzNiimBPbZzAuDNhmVzhQwY7YFYrNxTcC4",
  "key19": "x2E4ioP5aiSCqJLZWo11YWvFEFp8BFrcFMgd5bWPe9MNa8dtHpAM7Wp6ebtZVKpkKNAtSv1TMpuGFsyD3FndLRh",
  "key20": "4Rqs8AzkCSkwrkp38gQGj7dvctVXPursDw7eEbVAEZg2UCQWffN4Nxhh8BLkNwkgA5LJK5WKEYHUr36XvF6tTZdQ",
  "key21": "1FXuHPBkgj7zpr7y8iwSqYYYXuaKyX2UxGB1AHXJRCCvpoEVySDr9aa6vjFEy5rUixGfufJXxPcFzM8cRw2vTej",
  "key22": "3qeQExj8AvJWvZUbzKVH4uSBJCgq4ZL54kZp4SpsbiBiW94gthPbjh5itMeaoNkTeSfriRsgHovcbYsxEw198xa3",
  "key23": "ax5Ks7mmCPRAe74VcE7Vg7qcwBsmAHTPdbNEuG9BypuRdmze1sZMjp9zpr1AxWzrdeggxTVqqsdiKVwYDtEQ6gp",
  "key24": "5vjHNqZ52afV7gEj3Nfqv5Kj2tfsbZxprMk91Z96N9nAYWDDvk88g1LzfZh3CBZt1ppDZwVXPF6BwZv7jnBPNdVi",
  "key25": "2VFrC7wr8GKzHt2VckvYPa6KQbQ9tKyQaWcMsV1UWYsE7Hz9xTkHR2VYnSRrJjGRhwohY2An6N91xgaAwLWPLWGq",
  "key26": "3rkjarYQqrXLPs7Vdf61mVyta4sUt76q7RdW4ywhoDynXBiNJrcxsxwys3PxuAsnJzDzob2ZuFBBfGQw7RWJDhaX",
  "key27": "hgBGkHA8TLaRYdXZj5as9yc5u2DGwn7UpfhinT2YrDBHRLyAKn5VKAg6k2NXmDPpzVrq4iKJ3NVZPudnXmBHnyh",
  "key28": "3LDrh9capw88CHdDNXTA1xPirfFvk1dTPBWUcVudmpL4mdX1jfP7xkrt4PyNbEiJmq21nJmCcJPXfAJpKS4zyy2i",
  "key29": "2iBFSQSBC4gQydP9XYaKxgJHA2kUTAwPjQiKXZpy1kmvyJfHqvhhdBxvrWEvd9riLij5k4anjL63DWxLLoAZcS27",
  "key30": "4aSCNbMHGjscYXdQb8SbaJD2ivddUYpcNe14YNuxWhMH1p4i4r3ERPD4772dx7BMcGHwZVNGLvNKQ6V5TexQ2q8W",
  "key31": "2EDdT1YF9bqp3ZVNjLTMKnaqKAbSfm85rG6GRe6rMrUkeRoKzRDhsLsNSEK1Hwh251GqoGqSRjoNA8CoL7jGmiGJ",
  "key32": "2vuRoBKgJCprkdfYr5Xm93v28SxMCCA3ZVpywboqSaj3vgdBhbLuVKEbRepA4awNJkHun4haD2CMpJF8SBsKrBxh",
  "key33": "4DddYa6W9285nrhmxx8uS2566SU3fifmHSmpQXLBMcjrrn5TsUmRgZGNE24yzRJz2PhiswhPGWMrU385ZrEHZ2QU",
  "key34": "CB9PysdHQaULPiRcrEcJpqoZbkft5ZqZggVi6uv5bS7S72fkPvtG4iX2G7fybmoeci4FXmiJ6Pd1SnEVGq9Nsym"
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
