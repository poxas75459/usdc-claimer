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
    "4WB9xdkboxsDWNYwkNoQ52wkuqCB6MKrvVYpbxCRNMtCU26U6Luu1oqFEwbvcRnmdxvpKp5YnoBXRmxboe9fB58A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSg7Bdgjgpu2t6E2ub2BLt2wMCrhw2DyDa2JZUi8sMoNNcnqUqrjQUzH3zc2JzjDd1yYXSWEhNNybtTF3FFy8o1",
  "key1": "4JTGRC8Nz2cXuw9acs6A7iiK38jNHhMAn1mmvfiJ8ryWRggnwqXNzoeYHcfS8dDtHNjBF35K7T8A2zDDMMqWgSMi",
  "key2": "gT3Np1WwBKzqb7a5Atw8KFQCicD15BBgPjMYXFvDd9JLCEgPnVacexZyhZDTnVNNfQvX847kuq5DbDxseWcHUGJ",
  "key3": "z3AdsdyTwpzLSGAMFf5ufaHyZuRsAkeo8KGjjYs5m6KxfXsqffGTCEEwWvJbiWsy2zDecQM6NFgaBcAS4KqzDDa",
  "key4": "CToqh7kgQU1uL5agB7U2aYAqQDTEztf22hc1PGoej7xpBhrPG97tLAj4BFEG72NgBRTsSLHGJqRddozEAjAjcdN",
  "key5": "2jHhrZJpjAiy4wbnPdW5a8AgAEeQj6sK8UVrbWAZCG4b1656SXHbKnpPS4nL7YVf8Gd7D5RotQzaxkphJMmjF5oo",
  "key6": "2Fb1HYx2BsZGM1gywCJdtfuKheWS2KRVnyFdxFdUnkwaUMTc4dJS9sKSLxXDGG9CncBW26xNxPe15UJLKJEcnPeU",
  "key7": "3JftVEwdHrx8E7E8DjmsmqAaf2uN4Zdp2DFqgVbPYT4Z7HkWUJUYK2krntWK3GWKRnDWHQDqTYriFm7fbaje82yR",
  "key8": "5fmySCb6tpWbjVofyAGhtRxnxmDG1zgzu2sEBinFE3caijqdAjKQHCWk2WoVaTVxUiyhQ2hr4jJ7X68MTfr11vkF",
  "key9": "8mvNiBpkYERPResWtr6h3hqA9Vb1rNmCrCFDN7QoBtRG2BXtTBSYbWU6zEKUekFSQHixd7QJdHGu4HMPhpPvSxH",
  "key10": "3hPT1NcRirMpCYszdPnABv6JbwBVQng6g2XAUBUrKAVEV9UVy3mHJNQLFkyEtL3VUJmiMbhrsDpJ6VYvjHQU6DT8",
  "key11": "3CnuLbcem3y75ccFycRAHPDPzFC8SA53y86LQR73NJo9QKchKP8ntUCPVRfaRr6q5MGFCNSHwn3BvgRtxyekCBTs",
  "key12": "3HXUzSZn4R9Gtpx6pCFEQkuv7A8mU4B915a6fdLcVLvFE7QkdmGBU39cerUD79ZJc7VQHhCyBisZk4jY7fMkpT1L",
  "key13": "2wdhRESeyA3wjDAdKeAJuSoLiJL1Lf23o8xPbLneWEVsBrxe5iN5217ydobRgieFTLYL9Syz4sMK4dobCHqfq6wb",
  "key14": "22DwcjJRNavHKgsMEMkEztnyXdUcFKA4pG2ENCSs4d84rpmNHwobrvNDdPjsTtX7AjDjmimVBWFah9SEhXsC4Guy",
  "key15": "4Z22bQzpqb7SC25hdZ4jSThkL2wQiXD4bhN9Csc5eDKf1jBv1RWtiBuinkcNwNsDGoTYyRsu9shmX2mHc3ychb37",
  "key16": "3FUDshqcMuUEvfN8BM8QaXDSi1Y48tg9NCdv83MuYkBu3aNWx2bmirLgnLttDUyvBMSs6wV9rJxoLcGvQNPebUsv",
  "key17": "4HZyzNWRBEtDhbLznQQ1eqnbHrHto4YHARwPuMq5wVZ3UheLy4nbhrT6PuWrU6MEwmvTTEaroCwwS13iMBDtLBMh",
  "key18": "2RswZ7ezsb9ChHKTmV9BnAFapyw14LVS4DU8wtNuKV4X9x1fXbekXkLgzMJRU8pDjEPf9R4viRx5Yo4QE2cd8vG8",
  "key19": "2yEH3yQThqCdHBSSZdvtBRARSoL7HKdjS8ieMzB5scBo9Cutmx1b7yWEbrxbi7egGq6g1FXobK2z7RFMhUXphfZZ",
  "key20": "Dm9s7LpvLkrttiYore2K7zgbMKeeenCZ3NiND5X5wWuxx5pwoivECRjzNETQSRbjZy1fbodzLNNWwb1GNJFjJSU",
  "key21": "2iYT7bDG14Z1MfLQpqjZEgCDYbfHCwMkpKDvAcXdCotPgWtPjuQE9K7vWJXPzTS8SMrbTyWrMUyiTrx8BFKn4Wjy",
  "key22": "2tXRkks1bo5ndxQG2ZPv7Kj3mj6TuWFfTnH7iQEYA8NxkwCTsgKRgHc2X5Wgb8VcfzXVEX43vtPzvJps3nyMepuG",
  "key23": "4WL7tPSM81L7RjdpoXLPgofAho1oG7bLvmCneJgYEfbEEWypUt346TY5meAbxUr3o6U4v1YspQPeAP139d2wEi1b",
  "key24": "ue1Meej7qojxSiDF7qmfsJR96pYsU5g96VjwyLsrFRGQBpDeB6Uyax7zwmKU5CRwSjo6cvYXyVFqXAWhiCDkX8g",
  "key25": "5WNjNJgfJuFmMcttYPf2FNpez9aEe3VgQZkHKevBrZmGTMcSmtfjb8sPoYEXbeYd3cJqex4YKRroLkKd1iBiWpqq",
  "key26": "2yCi3iEQbse67ezNTMFGmktxCugLhoYcbh2xoWyttWyaRQHZ9z8ZpuTqjL34ufeL8JA35mhJrbEpFsGEWrnbHEPg",
  "key27": "46Q4EMYo63bzsqeGi8od3E85fuVztySyz1tkR1rYTMKDVGMGmVUrrKjBYmajDvXydcGkqvy5BfKd14WaspDL5Zc6",
  "key28": "3Gcw1y4xKEN5i36r4G9C862yt4WuyLGJHzDDWqCKoQ3AfVULzgp4mR4pHLtMQbaGccnmpE9p1mXPeULfvL5RWkW2",
  "key29": "RK6HN2SStD1mGZUCXB1Qs2pnv7CGB3ZcA1xtfbAZAHRqvtU5P9sCfXLu4sKgH1EHpqLAZcKizVDAEMwJnCzTGPY",
  "key30": "5MtgWjgge4FLL4a75rSCAANbBbxkk5Wc9WkXdEaoNStucVxkkSyuxaeCyjt4gPVSMkzEfRQsta4acm2TVeBkAZ8c",
  "key31": "5JgXUcFYMR2azE5bzzyw4sYnNafBfV5xwVW5eGQu1nGDyd2H3YzxiDEhVaotVcaGA5zbSDkz2cPmTxJSodh768yU",
  "key32": "5Vxou1zaw3tK4mNYXW2XQnNhCQU5cJuLzyWsKAmBd3nSZxkvCPkprPux7rmjMgLwbxxmFP2tKn7rCaaeU8yDqGg",
  "key33": "3qFbuNgEX7r6xdtP6HR7U3YvU3wAk3Fn3vxPUn9Ygdsf1b9ce3QJd552GRMkHAG8UVLbqq5sZUCgiv6YEVu4quLC",
  "key34": "4scZYUGmRApXmZuUT5QAsRFi5wX4ptJLqVtUFLyAsMYxZNWmJvsEnAVG7ULghnoQfpE8EyZEJRFZZ8ano9bJEkSv",
  "key35": "37GUJLihSPk9hSbbYFr58VKTsVQJe8cv5RJYh9rwooSyibvBTRMjoLgwZhNmbNjddamG6xxWXU2E6EmQmhxBbtGF",
  "key36": "RwXx1oJChtvsjW4i5teEZQSUtHvRMnk1eukpGNMfCAhsry9mwzUic98i5jw2TdhhRWoZPN18jZxBycKS87mYM9h"
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
