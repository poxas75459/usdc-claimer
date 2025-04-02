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
    "45NY2kDTdJ6BRNWfS8dF8AbJpWGT91wuERfpqthjQq9cg57bhLcncLUEKoRBa9FV5vtEaAPUBzZgVRzGXtMzzJjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SULA49ET6rGiRXCZBj3JCDJXjd18JrdwvfsHG7vcAVCGoijci6h2uuj2fWRhAWwPQRGaKJXeH6mAmkR1LUVKra8",
  "key1": "5kUFfpZqUwjEsD2uh8fXUSchAx6UcqpbLFXjhR6B74h5Te59yxv6WSVHa5vw3mTZWyPHnsi33Eb8eooxG35ywzTt",
  "key2": "45fsrDw54WfbLxKDzduNTLDp2gMbyTK3pvyfX53rve2YEUVjQWnGCbMDdk8tZpUXek9ANUqod2sbw1CUhMLLR1tA",
  "key3": "4B8fNGiFYZy5a51kukrsYt59yPxEAjANPGuZkMSEnfnsRa6pUpVs9hYG5VxjiTwSEZQt5CnYjGQZuSuUiyxgtkt",
  "key4": "3uG5GyvMueJbYjapZyt3wi9bDfn3w12tCXyjP49t6pMhHGV6uZsWHfCkDovsLWQrbDehgyFMndEL1Ew99aTum58h",
  "key5": "5bqnWGw92JqnUYbRDwdxgqYsrcWfcnc9VobZNhKai1eLzBcBQzKMis4C7Pj8XmNSXSWUnSS6nJXm9tgvH2qPk2gf",
  "key6": "2gy6QGKGsKgKCUjnbKkCDg6j4v3jLrutMUE48zNL3E67eqeJYuaFkKqhHT4Pnakfo1KNGUDqQ5VSvgBwGaF1dFWj",
  "key7": "4xhukRu9A4xNWzbFpVrY9BqPdVwRjUZuGCxNSvCuiQLifxbKkRaRFv5QCmuBxwiKEGWHAVEigHD5Tx8naRVcdpgw",
  "key8": "tAPzapu7h9DDTyCnTyHCxrhbYXBem5Z4nr7r5XTN8ZtA8WacFuUdhWr7Sz5Wocv4oYEkVJSu9zUc49KNiqrMHG9",
  "key9": "4N76HPgWQsU5HQ52Ngu7cYd3U5NDSVeJ5xYcG8ttc7VGb77At2AoLUFctxDkvcoohK3Na3i53VVEucCGjRgBNK4o",
  "key10": "2E1PseyruCGyM4S3Ar1jHTX43YEJwECCtTY197yb2LWr71uH1JAnfRUTPzdFttCT6n1vuQLp73Myi1VEc1qrqD71",
  "key11": "4gsiUcfr4tpZsmekRxYKWGDrL8v6t5ZjiR6Kqy6MBVCgMa5ZSvEQJsw15Sth1TjxAyvR2SuZU3CuGLREcacjwCJ3",
  "key12": "yEu7xatRdtXkAomnPagFDoWa9iumLvTpBTLDMqS3qkMLPrkTmh6gcFebaeuPJTnbj4JjwB2cfhX59GvmjZtBHAL",
  "key13": "4W36YJDQt1LUvSNDuYbFSf7YoqmKfjwa5LmeJya4BebcJJ2EpbHuaGXZt31maxiUUw3FEeJHfV261szm8DAXJ8NP",
  "key14": "3Zo5J5w1CPR9Xab2vsysmzJKyd1M1giRDho31BRYVzwQfq8uXjywMgy9GVgQSbESgrbZaWpEr3EXewCSmKXV4qpp",
  "key15": "2yt6EJ95DNgjCvH5f12FycsToMfqXjrsovps3HmHNSNTwKPWvoqbK9StDncocP6E3r6wfa6ZiYLAD5ezzQLDhzM1",
  "key16": "NdkxgYNWFTHv9qeRbp7RfhHFRwpW3bfBP3M1G3Cx51MVWTiGQJcbe4c3H12Morw96Say2pGfCaYfEMWfFMZh1qi",
  "key17": "3R6vQYy2E517K33S5igQZS5KDHDe643EyTHEiwQu2sj53oUNwZY2CtGZKMr6wNhu6ePxdmpSpxzD8bQuxVaXhz3V",
  "key18": "3VKGtAgjYxk3fHMqJHep4BNCS7MfosRQkTbwq76pawCxvBzgbFch8aywquMU1eUwbaDTvMKK63uHvYTWcGVHABvV",
  "key19": "2EHB5oF7iS2qJCF5PdW4iwWB7vQEwFTSXG933t4uZYTAb9FDKLhzCBBAvkE2omxmQuHijaFWnbAC8xuvHY56KU4V",
  "key20": "2tva1MYnnaeh5L9GFVEXtc3phnFQX2vkyVerAuFJHnaQMuVFLH8agaDMZ814udbYjqSZryeRKhDAKVR9DCKYBVfn",
  "key21": "2aLr3xFHE9PbK3FXQW25vFktkB4ESrtQPvAH8Qw8ceDZjF1YjPWLvgjAewUwQx82RHRkHpTf75JSbgcb1iosBZZf",
  "key22": "3ZfYUgHRpUksZJaMbBLzYnFkoB7TD81oSrPiPTXxivW1EBorep9B2PzJz3L4fhjjed9NXeim1NrUC9MG8bX99CVB",
  "key23": "57oN9QrNmJgf7YrmbBH1NyJG13zwpPc92M2V6UNNan8Mua1TDWKMWuqHqcB7UUrgARhTmVc5iHz8EziWdAiTGMTL",
  "key24": "4oVqnEsXtcof5zsYKX4JkUyRn9DcyonDYEfgziTDHc78Vscg2ngvtPKDbsEKKHY6TzGQLgMmbBip9rUr4m1iJdWp",
  "key25": "2S9Wg8r4rzGb53SXc4oCVpMUyxAU2qqm7bb8y51wpHPacpFXPBWstReUBJEasvp6ZCcJFZGCGjjKpiySffUSW7Dk",
  "key26": "3Aokw8p7tTz9TssQhPj45TXC7657JtyPwmXGohKz1X2qJWqDeursFsPymRNtM4irs69xai4bwBPwa45Xt7kNsoqy",
  "key27": "3MY1VA2KeKPXhYxoeDxQHCFL8iqx2zG2LdQovRAidK898wUy1H9NRVUYy2mvWeArEeNszerXVqSksTmLFheczUzd",
  "key28": "3q7o7i5BCabKTK2qKWw3sfDqy51xvY9yGi5VHK8CsDEy5Sna9rKFwTsr7ncNUygBfb58mSop31cF2ePd3y37E9bm",
  "key29": "4boy89BNQwhK7cMuvTHw7oXCK8dTtc491zNfse3iPB1Xa4zvbh5Mkxshg1CtBqCwV1VdJp7ynptZvT3QLKqPVHDM",
  "key30": "3xm1im6nAj2atah1Nze4o9bZ1ZcbRjSKcc4Lx2VU9hz6MNAx4rJ1L7jvU71PgQYgwDiPooia1dwo78wmyPLSjRMi",
  "key31": "3vHnsKuKUZ3a5FH6rTMpmmxDEkzc9D5fxtyHBLszJNA4wHq678y5uRMsibCbcoPV7q6twwmr6rX2qfgjrd5NM58r",
  "key32": "4ASB1iYRZnmFRsMhbbu5m8aZyjtGeqAovQdvJJatVuXYZa5vYQFJwiR8FCkiBAXMAGFsE2ei9RMyT7nwFemfhzKR",
  "key33": "2FA9h4emUSTvwd833qYCbKsHNDFn14QPAR8d5k6By7YF1DDWueDJF6wacBnCbQSrexAQ36uZJ5LPpF2moVrs1LSF",
  "key34": "2dEQMMd1uczuHSwbTMrn6eMZQSx33pEQUwMrQArsbscdr9sNLxgDZyL3CAhVW4c9QcyehEpAC271q72oZtFwt5Bo",
  "key35": "4Cu2Mdu6dBDakh1zNE8xtAg4k9bM6U2PsqEf4ywWTNDHC9ho3uH3GWoC6ade4HYr7tke8X3icyUAcPF8c8y1kLeE",
  "key36": "2miFBA3jypweRuYWW9RWGWMvTVXRZ3gQtqWt8m1sXHfRYZ2eFrHV6ZGnGbgwvuDPb4wmpqHFEtqNhYwmKP3DsoR8"
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
