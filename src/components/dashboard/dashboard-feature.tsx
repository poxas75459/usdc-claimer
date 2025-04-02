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
    "2ktAtGyBVUPRo9SkvG7vp4Tojduoh9sDGmXFzrNjs34Rr6GyDyXQzMKWp9FF6rKid5jK34cTqd1T9howKJ23grdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzZ3Q7vfWGBRrkLm4mJuT2TVuhbm38TfyZ9EKXhKeriEzwYTpQfkuDFZpAHVBWKY6mUVxZgii8pn1zamkNRrX7A",
  "key1": "JkaohbHFzFx1KVwPsW27ZTqLsWf2UfWPGzHxUuZarZiobzuTffuoqC2Fn9U7PL5CwyYsvByQAYFMvDzEzzPCY4U",
  "key2": "3QQcJEVAqJZDaAHnkQwtCGrqLG3Jf84CREb42o6hAzHXhrwhLKGkH4uYHoEMKkEhwV1ryCTTKmavnM7nA4vasBxu",
  "key3": "Kzac34ECNxqRcCgDdrcnToDeE5no3ZE9NJqaF5kw5MnnjCGRCmn2iAYYF4MWCiHPUb8SH6zkGEWkHDbbTVXbE8S",
  "key4": "3Sn86cjBUYgPgWP8PL1SrCYYL3UxJNfKkjtm323t46gznRY1kLuZ2XXeZsocT6fcZQtvLZdRtqXSpsHZCwPXKRvk",
  "key5": "eNLrZazyh4vf7PmkC4CgsvmTgyXaL9aGHexnAhKsys3LKDLmAL3dk2EtdWQCVM2HXuiJ9JbFMnvgEHwv489p2Wv",
  "key6": "4CeqJkbKPLDuXqUbw17tz6VrM65WiQn9kMZRAHRFjAPtyrzWBbu8xEaM6UeaLEiCD63C5YsQXfR7joAhmHs328gi",
  "key7": "22yy3MoKwAEmNdptHJPAmohpZDzZHhsDvjRAPUq7RxqkUCyRkGjiF26FE4kapav6sBsYccbmVpHTjDAhZZeJkrb3",
  "key8": "4tEKSWvYVfdeTVYuUiA2t9zVxauGj72i3x9a56Z7Mm9EvFoyTFfq7n8cXfEvWqNp3NtjVgWjAyGirutheqVTYoPo",
  "key9": "jKhjoYGSAxGv8RT8WRSHXpnQK5KRzKG9QYsfdUuQ5MLY95i7wL5z7dZb83HDR9C6mJeiRtg2DgFFCv7mB2ZMf8m",
  "key10": "4jPCqG1Xh9vutBcarV8ihYy4RKbQxQ9XgisWmajktDQJasCdBTdSmwZyZfgwBcBwcTRwZw2PNfSydohbKhW6Hg7V",
  "key11": "2QDcCemBySSUcScGRRDAy77M93tG2PS9LkqAF17A5pt5dNnN9ma3hT2kDX1n8Nzbxz9sqTh37MsztQkjsN45oTjz",
  "key12": "3AC79VcFb5N3tzCvHzaf2MaUJfFTQixiu2cXNhKhovG7yWUVp1gJSCjkAP6oJqART7tBmt1TweAfQGjDxYiLSRji",
  "key13": "2vLN9Ncq4qFZb56RNnWNwQVs969JwZS6xC9irypuQKpoEkrAsa4fj3BASuFDyceTAVDygvDywMxanecWuuLdbjy2",
  "key14": "5e26Qyu4Dpz2cS6BFQTH2p7XtFPLiaSFCR19LdTfqFL9sPC8h7LQ9v7VNfKaX5XbhgVyhpwTqWtRruBGf34d6uKp",
  "key15": "5HzjT5gQmA55KTVLV4uCLKYgkxnkEburiMzxYVnWUUDzvDbskBGgwoHxnBcYSaCi9SbiuAN82s3h1pr58Sm3Ysaq",
  "key16": "LneW2EgeLD6DwzuJmxvFpnv3z9xq6e6cJuMpuT2SkDJCiupkimjSgz7MA81Ek9YySJBCR7rArCUeTE19VHMmneR",
  "key17": "2S7FqquDWRd7je93SGsP2jJGBtcwe2GUs5weRjWPtDcVAENLUp2LnT5PPvtpkAW9d1anxLiL7UUszJbNxzK44uNa",
  "key18": "3vcwbsKNwcgH3eB4MDTrtioQqjGANn2B9LwfsWLYbbnUyQgTPXaYbLoH3rG34uV1uUrjCmJz6orJ6z9qPeGyZRQj",
  "key19": "fY8o2BDZeH3WHeYaXnDFMhqt2a9PJsm8zYXQuM2hcBLcWAXJtj6h2PmsEUH6mnDXUQCM89SFiVfEBx8MZiW2tCT",
  "key20": "aX5rpgzPCvWGgXtXeZ8JG9s7McmECYnuku7BLB2ey89vYN54AZzfsC57nr2RVShPnpCJmHVSn2SbmsADfW7nbaW",
  "key21": "GtNHZCf4HW4rKJaZB7h2vwVqiSRisQBGoVjHheW6FmYocMvuXmtUiiYQoZZ6w8atmr13xEdyv3MF6mGgC66pWxH",
  "key22": "GznGvhMb6nwLjGWLaSwW3nAFwbfRb7ZT9yK6aXvqYPxmjCgqffepeZWBVrRWZRMSaK8A4WAJYjPhsGG6aus1i42",
  "key23": "3ZfiShvDqZ2SseuSGeP7AiQdVYYKy5adEGXkC6RYixWn7zLdKK1RMtcX9oMenrkPegBsxQyi5Rk9QG1WDzNHQBp5",
  "key24": "5qSSNpHyoPFiwwr9HYmRjW6KhDCYRW5Kog2hqU3zsYfMVdDRTvnv3pHdfCEknikzu3Ps3B6w4WdWZiAY6nmBPnAw",
  "key25": "4JhyiYnNVN8Cq2FQt59EU9vQJDAF5ocotjxYKv8hxtRsqjguQKT9GxzoQCHVCwW6hsqwpbHh2jdLi7axBarAcbqu",
  "key26": "B3aB9aw8XCWndQkjDSg7h38GDqYsSC7XKsm5Zu94Gi8RaineAc8fUtpzhJiUg71BAAuLW6ckFhLELdyaabLuh8o",
  "key27": "YFm9gzgTa5nvxVNGQ6xdfk1CkfT6DcyA66GiygMmVt3m8FHrKfaqYtheiJTE5WA9UjTDXY4nVDQ9YyHa8s2h96o",
  "key28": "4nesDskb4WB9xeNNT1VghEUGt7ArSTeXi6xs3pQvnn6CPkVQzmLCBpwaXtDzL5tDvqmfHqfVJSsxsyz6KKh2NSXQ",
  "key29": "5H7nftiNBKPA69h59A4znyndhqVnqaqD1zG9qUdq4yXYLBNt6vXJnJsfTu9Rnpf5oUe4Bm28MLukqpFX3Z2SkLMv",
  "key30": "3Yv8Z72BtikwTUpMvzWKoYKsTxdNbLdhjbzkRiXS1hDJutuB6Pje1q9Yo4rBPChfXznR3ypKt6yS93ahmTti9AcS",
  "key31": "2yrxYnqTvQWaFryg8hepiStJqyAT32YP7wydcb5opPA9ZakzZ8QXrm1HUvJVi4QkNUSAb2ooQ2KkWHXJym9HqeSf",
  "key32": "5shtirp8WLyYu382C5Mh7j2F5qkR1NsqyXMFh54YKahnnnWapAR7Ap9KPo5vNRf96NM7AS3vWx4Y6qGPeTxeJh2T",
  "key33": "3nE6jJrP6RnEQX9EnejNZTgisWk18svaoyMMiE2mGEWvdLmXVFRHQTXQX3YKQjbcuERXcFfRnu9Bhs9UPcnLPMd8",
  "key34": "62c38g895ecre4KZ5c2KdPGyxN2zTRHyeXzUad9skmpB1pacUmWqSZ55jEEYuoH4UBr3QQhNUAnk356CHpY6XX2H",
  "key35": "2VBdxf9hUYyaqRhKggbXz9pXGCvugWRQBmq3spZeewTyPe2e6uVsX8bf9J8xDvJBT9oWyArjZPZfDoYXaMKZd9b1",
  "key36": "62i4FjZ7Pk2t7Qy8hePKJaqifyosMBf5rdmJfvwCEY2CVffAhEBYHuSDcLMdoD6MZRPvvqU743LLaqz2YjDSdZCo",
  "key37": "2RjphAEyoYYKiEHXJ64mZiKL6iCJQFToWosSNBswJQxGA6U3UXWTv4kEajMFgeR4sCazBEVbLPqXDYmku1sBXhQz",
  "key38": "173GFXzLmSdhHdfSrKd6VShkbsFCiKDvsohzYgCb4Uk8cxCxfrwWeYeeDkzCE6NcKx2SscotyvwhNGfxrY3QyWn"
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
