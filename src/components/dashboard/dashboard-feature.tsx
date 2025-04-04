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
    "dJHzFJnoYe5i29gA4cJ7seCEhCaPrwsCCssNtumSxW58DWgZFbYt8h3Pax1S3AjsZmw39d7yWNYNHCTZNonXHXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dy2pZBLhy9bzdF3nPBTLmxa5y15ELUrutYmQVTFgxR4Rs3VVJjpHye2vHHLD32JTBbZh2RPQqCdtF3pPrRFyYQY",
  "key1": "3pQPYGHyjxDp1wmqxQUcJWx4ymbxvVtkxDavRpXBbEouNe3iJEECD7us63HX7XtEWqEysWyhpKZGExRtF8MZUHmR",
  "key2": "2P87Nwvk7kAXzYwgaXs3xzmtz9gEqR6xafzR6bHSHMEzzfsGJKXLVLCsphUu1u91is13jh6HAMjdnZTVNA3qVgM",
  "key3": "4Cuo8hnxJ61rcr8wykuL5vFxYE6xLNxBayLXkWuKDGv825jRpLDfgtappwrCmdvdgBgBJpXC28qRhBFo7PbR9W2d",
  "key4": "CBXWmsJNv8b1Ssk243LijS5p8TVuT5dzoKG1VPJbBAngWi6cqy4p3um1ujK71i7tkgKJEDyB9qFALuqgvzpJHds",
  "key5": "KJwrriceyYwdbusDQ8uvFP1N9ffhpcc2g9Pa4qGs2QHkrcCo4YoWDWWznx4ss7E8Ctj6dPMUoSFiYjQ8T6wrq56",
  "key6": "sr3SADneNGHd5yfWt25iw62VDs725USGbZkkjsFo7syjhDUR9yVWMWCoTxNjCxCdwUG84UfU3zanSv5VPAjE8x4",
  "key7": "4EbQYdM6297s4o2QYRBvWmvR7QayRvZAG81R6AJToA1EYCWZ5JjJfB9oSubYocWM3R4ygLqRZ4BrJ7nT4Tg3sUNK",
  "key8": "24TVUTiNJ6fW99S77hNm6k7UJJiAtATQxBBzydjwCWqEwyfPYVYo83zVQKyopmtA4CLNWYpPFivPYYHWXM2uFQoV",
  "key9": "5dktQ2bSezGUMW6iwkbRCYjvF8U9Pu5Ci7SMwNbXikEkzYHpMLY3DgnnymC9XDjVuoG5ZbcmT8q6jWcvHLVPX83A",
  "key10": "39dXv2jpFF9YsWoJxz6kNLwJVQGR8qtD8zv8kPTnGS8wPMSug4SfDHfXvhN1unJ9uWtEWZ1EDn91W1iWNjt6yxRT",
  "key11": "4L3zR3gthLjRMuSWx7F8iNT8mwFp13BgTNsHqjPg2p6s2HKy4EHgcFqMhApLRCAwN3SEJSzNuc1xU1K6xb8sHWRX",
  "key12": "5saDPT4fEPxF2YMjuUsbZutNjmdsrtfKwFDFJCyiGBTPQbgwQASWoHHbiuJdTKu65aNxjLecsiGREfgyAvSL411",
  "key13": "4ZbgQ31cof9poKZ7oEkkqpAhpZSLW9xdBH3zSUGrhc8bdkYRKjFWiMRVhXiXk7ug8Z1vDo7HKXQY6LHCN9Zo8Zzj",
  "key14": "5o8c88tNeAPL6zesmsLTf5DmifX65nXdweSk2VX8MFoEpExQvy3in1FBAvN7wvmH3rZSbjdd8Rx4sQa1JKBMRJV",
  "key15": "25JuVKW8y4yYPKBb9QooQ6TG398uGWbb2gYWWntkS1buyvRQh4vmVnKpSHBHsQKZXE3GrkSr4wKKiAeuQwiSTZDV",
  "key16": "7mBdpzUGBeq47Bq5rG3YXHZeM6YJi8BYUKGkmQdyPE5kMvEaxnS5YCbhz2FD77sYTueNEYpTdeHxqaPAXsxMUZ6",
  "key17": "2dez8bqtaS8edzNh8nXA5ucbd4iHRKYPtSZwSnTaHrFdfKZX1idKYLUZs3N27ri2ieuqVtyL8hQk7hu9pEFCj7FY",
  "key18": "3CJVqQDHkTDSa1mRSD4DuMcz98thFmp9wsqJvZ3vVPGQtbHKrJyV8VtxbcWaxGdWUeHcNNPKj7mgs2KF7XVb8ZNc",
  "key19": "65e8LZ4SMvkLvDhpPySgxHTPng9dFnpiG7y9iQnS1UDr4ohF7RK91VPKDkxu2H2v6Du3vy3UB8FJthpZftN5eEUE",
  "key20": "5x8hpSriU7S9WkcTNQQCcfup6tBbx9MCedJvoVpvN2t6PrKzdNQbxzy7Z4gHqyxBW7U6XgZhdfC6p4jYNecvSKKB",
  "key21": "5rjkeEU85ti7SmVYqA18AZcsLG8S3Ta1UqxizQwFkdfcbmfy8YrE3TSwfC6JVvn4qrsyQ47X2uYRMKafypWPdpXs",
  "key22": "44Yrw724JK4T6KxEtwMhZzgMHyKukrAL3JTj3kwhejEaYwVjSMELsKWnJeDz3951AX8iGjgLxoEkKA85gneWyCds",
  "key23": "4GKJ41CHp241DBvnCSoBM4gaAJuJWm6jjCQK9h8mkFFwMFngXrQsNhWV7WcWyJT3iDEVD7LALhoJREjM7j941Pmq",
  "key24": "34tGzo7fuyE9ph7m646a1fUQhDWGGGcxat7yV3oZkyaifMHsZS8VptXffiKha61BrF8DXtAH1TAXWr3TzVriXFX8",
  "key25": "5GYGsFa95FJrX3XnZXHfjBUhabtT8PR935VPdYeBS1AfTCkZmMawhDxvrQ7SabLJK2Hp69x6YN7VbjyGwL2CaM6M",
  "key26": "3UnQLA19157sKJeuDcdiTyCx9tXZLHHk2h9J8zsEEWyXE4xLvCKAEEsxiEte3fy81rharvicRDYqveCkCE2ftzaV",
  "key27": "5s6hRu3FYifr4jDmm1DGsQxD55AqyxBYYcAWqGhcABH3cDaqDktJudY63438ff2x1WjCd5o7HZQWeWtqHMhNivga",
  "key28": "ptyCStjjaS4GwmXnA1ux7RgpxZ3oY9EGfb1dw6LLfF1BtfRxRJwpe2Pah2vQBckLH64dJTuto38mavQWBzwxtws",
  "key29": "3gc3PkAaGuPwUqNrQeT3j1sYSsLtzNcGSyHSkk5HeHkrVE6pEgnuJRV1CfNEoQC7UpKrptw7kb6ZF37TLGSbv2rr",
  "key30": "4DPRoq1m7e5kVM2TMRLTtegSooocCyctk4NpcBsQqghJrWUpyaNCnCPsUHcSzwfCSMw3LzkrPrrL4nvURWYjrGJZ",
  "key31": "4HZgLr5wvCrtcUqYrePos51FYc9nxgSXJ4iaKixPei75qgSEXmMJ8SyP5b4VjEid8DuPHD2rkkr1eBUmrHJB1q1g",
  "key32": "2Tt6Zmg1Jkq3HXJ5dBtV2oTm4kfzSsnyzvTVQK5yUFZdQUkHfSfA4bcHtjEtWHK7j96gdHAPtjFVsqbc5SYT1bm1",
  "key33": "3Ccn3QWUyFVtrTjRp1CxTRUPCzCJeUrBHKL1qBiL6y1mf8VLnZc5oEAytKyqe3JhTyk4KEFmNrQA3ebgCV1FFDNd",
  "key34": "eGDSPfwDZCfMsdVr9hZ4bU7K8i8jAd82gDy7sx2yHwcEGhL7bMiSV7zSmBvsYy6a64tavSi68oZF6JcGRdBJms5",
  "key35": "4XA4dK9nE9jB94vszGsPhgXVj9kgPskKfA8EqGSvf6y8zSw5Cb7q4QQmp3jfjBRCdngaS3bTaYDZnKqAhCnh5SDx",
  "key36": "3JwbTZ4zMAM5Trb68d6dxE3q8DCxSgriomn1AGiJebSmHPKau5QkPBysen3LjbSXYGBgaVqL22stBiYx7HhVoaCu"
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
