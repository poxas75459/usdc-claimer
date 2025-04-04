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
    "5KJr3wxhFCzxK4XftY6VabdcSNT3rUsc5uRCuvT9Zbu9uUWSLHHpyy8pE2W6yxeoEkVBPKb9xZzUMRp8M1vjPoRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yF33g7mPVcLH1XyZakVAjQU2NTkR6Rws6b4PxYzAczmqr6eaRg8bsf2JAjV8teCzp6Gn3x9Z298f54Moe7Pssh",
  "key1": "2pe94ueChuw2BBa5eMJcnQPyKuLzAR2LPAyq2C9CsC17MyiHUqU4YrQKqvrmDYVyABpL4Srq5nCf9upwXu7nay5W",
  "key2": "4WneEXFDk5qctRGE1zQBCEkkqAyvtMYP3boJDcobLzSBbNAku6Gi3fSALgkUuGrV9cCivwaASbwnc4L5YjuxgSHR",
  "key3": "ZBRF2RHZcny93DVEsxmMLPXwaTk4VtYckThrsEbqr5mxQ1zt3y7c5wDCSooXRQjMtLzV1aWb4bs157h6ZeYL3pY",
  "key4": "5Kutrn77dzhAtyGg6bkabdvK8rbYqg3RAgc5rhbdioukM3KcQmD6bnMxGHhNwcCFxC8NkCaaNDs1bMUG4XFm9xFn",
  "key5": "2Mejk1ax6farTifvhNfd3o4ZixNVZ57wHxZM9L2nkwzqZ3NiS6hTv53GCtFHDpDHvivS5KE6uRYz9yMH5h2UHBRg",
  "key6": "3DMHFx3oUGhCfC3JugBks5ZrCfuTi5igH9s2Yogq6aU8CqzWDYuhydtfMzR5S9yzKrx2c5mtiLy7MZdbbn9f636c",
  "key7": "3FXHSLwqaF42TKffHXMRDvGC5xw69K1X3vWmsKcgxfxvYBhNVehpxSv54p5iZSBoxZ5qd3jUqYMAeSFqZUtGaR3n",
  "key8": "39c2Z4JvuxWRRmRczAkZGwPwDhiB57XGKnup4tuLCAdFz1LFdMPxCBM1UU3Ne98H7YKcT5yd9fXMSWZdTkqQvvFY",
  "key9": "ZcJvgNPSZxyBsMHw4cP9SEqaD5LDtpMrpazJLF36f5q31bcLBMdo89drr8t8sEhr9ykhZbqX7fikKLaaxaVokJ1",
  "key10": "345J8Pz5RVNcZrVLwkqQg355e4zzUcAhispj9QTykfUmxzRiZtdPwkm3HRSUG46bQ4m2Sj6AZXLZoyeeGpec9Aiz",
  "key11": "5zgGMYUAFTLQCR5o2SautYG45qqbKFQNjvYtzmv3sJkqNk4vBVGUG2267qCdcoSpWZsb1WAMGujkXax7nqcDBG2k",
  "key12": "5DXWiaymRwu4BzPZaXzux4w2QVN22A1R9ZmgC4ygKrqYz1JwfT2HAyhHikEABCSNxCDtAsEDpZNXquAKH6mPPq99",
  "key13": "537PtTs9ToKwueKXE1z3TBpHKwtfa1e3ffdaG4VRSktvkHbnyu4ZtLd7W75rfT4tmt8EmjecbjRB45Kr3jNgXF9U",
  "key14": "5ZDiLW4sqrhdtkMneLCqXgKkEG1cZyZkcg1h3SfmhUXEQCKiN6YLBJC5Ce96dTUPsZFoNNDHRcd2fgHogRfUnvST",
  "key15": "FnX35s1bp4Bdw2JHTXiTXLexqyKZedvsNYerp2hzxdAUJrXeXYdqNBKYVaj61se36pKBdYccZttLvoHrDfcDmen",
  "key16": "4tJvb9yiZUNnAZXxYUoV97HfUbkU68qLC2StDFcjuMT3UrrPJfcZo1rLzohPeq7bPc2UAwQJ5JnBa1rr4MQEotTV",
  "key17": "3CavTSvT9xowht8BNdhKHpi3YVXq9xCYcXstU46iSE24JL2Y4eM7cY6oYYtV6kKFdnbq2VftxMjQb1VmfCVvErJF",
  "key18": "2TbLWCzekg299GxatJTBBB2i9fy8MZEapx2iji35TLjjiiAVjmcREP5UZeopEF7Vg22sJ5gwvSHuSGoNTVgEyAzc",
  "key19": "2gBkzrLFs7mJGhabMLhsH4PHjN5p6LH8EDYXPQvYubFgkCgBXTNDLu4pgtPpbPuqNybvaDX3pTnaNatkcGjqceEy",
  "key20": "52BzmuwFMiEWoWvFpsbcdDeyPLLGAVsexUKCygVj1mSBhd3M9P8WHu1Sw6VqjNV8FL6QeKeRbc68KUY7wX8P6c88",
  "key21": "2nYWZUwdaozHdiYG9TakvBWLQ1UwjARXpN2QwgH3SZvgCqzfKjR1bjnpdkJSvuw2tC3fvjEEUH8PayyqZHbZvM3q",
  "key22": "3QYWAn7fXyc5bbNRZHoLf1Nz1WMDPthC4kffD4GWT4FWBgfNjp75nvnMNj4mAjLC3jVfpepkReQzJxXMiceuGfHB",
  "key23": "2rLvRUMbyN2CFJVdNwnzBUBPJ3WLFvdmyndtJ9KJ7Qidq8bxADaf1wjFAyjZbUaCvsRukzmLAYdQ9mkVDRH3qUhg",
  "key24": "5TgXdztunYpaq9TqoBptBfARASiTbvKAeUStmfRYn4iNAWkXoVznNFMfT4qNRbVkWXiJJBdKbnJQixe9yYXroH8E",
  "key25": "2XeradGCSUUxNnEzXV8GKfSKTXnLr1nVkbt1TJAEyhHJTExqefT4nXF6fQZzDMFQJFaPpzDnCjGcbQYSZ1WKezxN",
  "key26": "2B59rtNFimNMcWCmguL3qAPBCfqMbHwifWP3fhZHwzn41edghR1WHcppn3UWeY6fQYJmxp8Kte3rRhtet9FXgPot",
  "key27": "SDyiNNggnocotdMxdRXdSZoy1KUigb9bq1WeuZZQq5Fgeufug28RqbrPejYfS5gqNFbTzqDpbELcFdjks8tXw2Y",
  "key28": "4TxvLrGzFyUCH1tHAtRngnGbuUvTU9JSAV4zYpzwMR9kj3Gj7DNAioG4tm7nbVLz3uW9BnPv6JYLCTf1uwGDydLB",
  "key29": "2rP8AGJwNVnrXisbuNqDe1Cm6voafSVu1D5DKmT5XuXKt7AikidQM4egr7D4HgsZsuPYVS26YaoeDvdqjPizdAh8",
  "key30": "XrDCi3eQpGrq4RYf9hLJPrwgwQXxjahwWGP9ZxHQNrNPioyV14bazsXcSThDsbGhyKReXzfKUyFKh7fYt77Wu4c",
  "key31": "5VBAe3vp5h8bSxUwJVKGW756W2BGyNkYZSugujbR97utyZirMgoDZ2fe7RHHV5SR4155N4FKi91n6L9wpgRZf1sb",
  "key32": "5PHxeWf75s973Y6U3rQVgjUkJvsQB7ZMJpZHmB5DomjhTPb3jvQ3vzMPZR4gpQBmdBUmH1xz4ZFUkL7FY9Jc1HxL",
  "key33": "55tTHmzASbzXqQiNC6fgJAF7Xdp3xKVoU257YdNq21nCwNN9U2qhCXcKNMipcG8bSdiacUUKzrYuWP9wpT3ziix5",
  "key34": "4gvuoYiT1V1fGKWy3AXT9tQuoWAx9nwbXpDrj7GPc5sj7NSUBB5P1pArDMVkU2hwN2mf4n5AMopYnzqT38MipN3D"
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
