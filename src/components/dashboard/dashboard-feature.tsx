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
    "3wGGaHdqqpERMfNgEqPqY2QWKNBP3UmcpXuTjgEbpDDdvmUhEseeaPKHPSvqQr669U5rddv2wjqojkoAdsVXYTQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ka6STAXGkBr8Jgch1qXgU88x8LYDg11qxPZNaESkPGgBdjHTLTgHMhvQb1AUsn2hpk741D9HoW53WPLPZsXKNym",
  "key1": "2WhpMvTx67Ug8zSCkmWpvtABdYW9LRDU6CJ8DPbC3nUZFDiwrH8HbDqYJxh24C1H1uEXc4HYUvAJfbKepWYwcbQv",
  "key2": "4pougQDEgiGwTjbno7PMjceEKYy7stAME5PqYAmrtbf5Ev55iTD9D5UPLQdEyYhjE27tuztpWXa6wQntoTBvXgK5",
  "key3": "5uZzP4hBnM3Q2RsVpRzRWiM7jvdF7yn78V8tst1hwJW7y6AVgaS14fNFhiQBeYgeFPVaKh3LKD4in44eUNpn6fdy",
  "key4": "2dv5MFvY2WFfyxAcGouzMWTfn8mT1xd24FK4AWLq6FKkQNCbGGXkvWCnJiBSy6ED2S9pjdPw8VvNwPjk95aJry6W",
  "key5": "8Z9nx5C7bZ2yrQCXCQRSEtKHhju2m9YVzDAQyjNKhf1VSQeEsjAr5YWxM4Qj7rLMa29ZZESXfGk1n3uY5HgXTKR",
  "key6": "3imLf8acuNcRdJJoYST3ygptSGoC1SrQmvvyb7KVAcjt2izvWNCKH835Kz9bfDbq4Kgm5Fk33neQnJNzJEQeVxpP",
  "key7": "2TMW8BdNkmLKrLH51RkiCdHqX8WZrLi7DeVL59rbo21EH8cp3VdTtzMfybgP6p7LvnFcmyEB91FkKifFoSWxaDUV",
  "key8": "2zbK9MfZQaqcy6R4HevRjCuhBLwDPfLuPbZumJvvSKGzmW5f8TxzAwpWbVfwjWuUmDFLaf1uVw1Me2aF11VtHNqs",
  "key9": "38nSp7STkz2CB1Jt3eTkctmnTDfVtag3jufWKmCKHzgroZ4Eed5EY52mfnKxajm4i7T6x8V8NMHfAxWvKMzKfXZx",
  "key10": "BiHQhPBuU2HJtxhTR34iQ2Zr4DRgVT2XKxVRMnc5zgfJhD5RpamPA1QxwBK5YSRZcpbWoKLga1NoN8ukHko7Kye",
  "key11": "4G7FAyGJf3o2jxMc2HmF3YFawDesTZqjp7xML9e2H5Y85fCQE2GfFwnidYsGzrGVkDXtBpqP8uvsjx3MjGBxxieG",
  "key12": "4XKp57t8pZtjWe4M1vfwJKHezTsxCLQZ7HYAQGLBZTJ2ZSxgNzSRBdkwNMeX6Uc9m1MMR8Z8AxoAm3PqHuZkLa1y",
  "key13": "4G7VpxQzNzdW83wTr1ZW3sYrN7bZvhWczyob2MhbLVBLtRd2GbGqTLrQ74VtEt3ruP6XPLecs4uDeQbRPKWN86Y",
  "key14": "2LVKNuS42V99fGvsWHEyULj4m45wYLJ9PQC8QKGaosvcXMWBjPKnKkKAi2G9Bs5XWBJWb21nhEDNKE2qQ1ir81d7",
  "key15": "471bhyTTjfDEv2jR5TcHJaNNKg7vg9R7bizyh9ZbBoZwDQQ8pzXhZYUVMEQxjGhKboQFd1YQXc3rNubeMFht4iQv",
  "key16": "41Jnij3PhzhHLDuL3cTxgCxUmMhCtPnenfzkhx4NhgxnhGwaRYFAcTJV26iQjEXgMSCtguwFfcXSTWC2eeYWCDMX",
  "key17": "2jewk6QjBuE5Mcxvk59YNawzNc526rbg5yYVNgqyH2b2oxZoZkfLyNqGvNB2oGxBGQmEJ4ifxc9sz9HHXMVCNV4h",
  "key18": "53QbeKPs6bCoartvHAtLkUBzmmdkNCrgyEb2enfLWY6bUkqA796Vr561NFf28EdEshxz2GPWK5ngPcq9fEizF5AP",
  "key19": "3jKLUBe6Vvdzh6VfrG93u4FEv9EGTLL2ydHEHaFzGpspkjPfUw8Rk3jWpntzByLtXR6BEdvbhHBb6MhfD1xmJxKK",
  "key20": "rpSu8rtxudyYWnqsJaorQeDxdkVvDzquMSjoAkUW5Xago67jy8juvgKLTrEZnTMfhb3Hq3KjFqdQ15fM5atnNgd",
  "key21": "kkrAWA1pMKDgfod77FCbuaVqFS4mdWogACeQLk1UtPk78nQY7VAMW8kqoWYJwRuAWWzxyzxG5LEqfzQgGrTZ9t1",
  "key22": "V64fUmdXuJA5f9xUcDGsT17FoVMLektmRbhNZE2Hsgr3Dgsd5rSXHvCSFXQVFBXTux44FsmkT1JinUdiUemeQKQ",
  "key23": "cbHysfj7oBi13zXSZHCAzXv7wFTji5CS6jySRqwsABJvekKCAATxLk8CSpbZ6PLpmgZYpwPyoeEDvnXcnrme1Bp",
  "key24": "BhUooM3mE6tdDMX5YkysvREtEUfRdmsKkfiphJkBc2tqywdS2RZr4xazMSRL6TBHnFBQsdKfgiYeKW8K9fj2GpU",
  "key25": "3fPpYKaw4KctSCcdK3fYhc7VtzYzpxqw789NydAb567rNKJ1BuQvgebLYhrMCqjGNMfVTMCv4zNtkwjyU7y5JbdX",
  "key26": "66DfUyMQd1m8mXRWcDxV8JVa73NM69RCTVkxuuowxoEXQ9g75otRBEw9Sv6MgADtJboxyKCgKFKftRBRG9abNzBT",
  "key27": "3WrKpjgdTWgo3o8KXQTr2tvV2bCXjWYyS9PAgioChNfyHTDj1uMqhvRe4wjTNCYoE81ncgna8hf77goHhDsr8FUa",
  "key28": "32avK4EN6zj5HzezPzV2ypGVJkEUyVutj35RmtnuqpzSu9pfRwMp2Tr5bHGPN1wDbt4K4PAEJLxoecLt5adRogTN",
  "key29": "5paR58nySLagXK9jprSu4c9Pe7h5LzvXWYm4na5PGKosoh9ZbbPWYeBKGv3N6Xrnp35dkVbF1TXmAf2wRxG2uXR",
  "key30": "4h6HUjd8jozLYKqwTtHKCjp1gVPQnb6VLx7jTqddrGKRsSQSyRenJqLQgBKPZ3AunQhvFbpFJuR19kRaLyP9K7ic",
  "key31": "5PppynnuBPkRbcHpRwe3VTqX2ipPH78882JpqUW5o2DcisWAe27A5xAQ6htWYCnwsvaxNQpZHQqu5mND6D1zQGgn",
  "key32": "4qLgcXMrPeDrM8YJwtc6j4AKnbGvtufLzLV9upHeZN4d11fL4wmvFxiRL9VfSK6BifzzRNUn35avoZbmDWHRaz4L",
  "key33": "5QPYREULiJ3Qw8Lqr21GXhqik4zQfYBnTyjtAYHmsgP4ZQDpQiLtxKnoJWyw3YdrKjgbNipLRNQVj6epbjGpGVYn",
  "key34": "2EAvxVLVfXWsPqmBreT8e8neFtqtMNqY79TxxCaPMJPrGgW2dY7hKpA3NNikofz5G7NLx2VJYu5UC6CnxzP5fHSi",
  "key35": "66ptqLAkonxPn2L5Jf17WrcTNsM2HwSZL3oJXAUkei6zfChGRC4iEZ7gMaPJZ4zniAyF6G1pnuXVPMEjkSXFKknT",
  "key36": "ERG35YWNrw6cuMAkHaTBiZxEcL7Gp3ne2N3h2UEnVxfN7qYWsx8q2azcyGiVYTUHxZnidKC7m63fyYjXfmnq975",
  "key37": "2N4ac8Fika6bNykFUT8TRS2rzjAw2rordiQZ3SELeQv3nRztQABC2ZJAVrtZ9gB51t66tiQD6Xm1H23ZVCf9XYh5",
  "key38": "3gJr4mgQxkWhhpLWWoozxVQ561gmVRn4r7UJWTJftvFpEfsqReEWLqPKmt6J1uLG5Znziwt5MXwX53VKATCBKbN9",
  "key39": "5M5bWGNnjVyV2EJtootzNV7cNQqhArCtZnBCd4ro7pEAT2Ydy851Vj8tZ8hfFF5mpH6EM8vQnVVfcSeoRH1T3hvt",
  "key40": "49E7WmiFoBHLHt297jQ9Hebp9YQUce89YGeUXuzEjHLPsdp7dZtJxTirGyZqdoX1ZrnyEn4wJ4k9HcusLeNG5X3m",
  "key41": "4w2oGPTjJt5JGfGieLaaPykHVjhvAzdi9QYetWJ7RR8Aatfcg7cN9tFMzEME66mkTQiMHkwAeoXudXHWDmVPkK3q",
  "key42": "Brf4U8nqNGgX1nSTiAha41EqcBrgqxfBqpjmZaS5axrq9XhYJr3ThasiiAtmiuEQzJ4GyzDQkocwnVzbA4Bef5q",
  "key43": "4YqwNX5xpHU5DZ3qhbAFWAdxsLacWXihWy9GTmkxekdjmiPs2h782n5dDoNBc2woFnjCJ6NLBRzDxSCyvZLfPTPE",
  "key44": "5Hr4vwQFDNHA36pG6PTGQ6o8astNWmebivHSJ6Tc1sqVwNQuNs9nwpcXEiQg1xKF9pikiYUWK3Ktn84jYYxzUc6J",
  "key45": "4487rtLE7X1NBfPS3RLcDCD4pP2DBCjKTEGTAc7rDAzaD96sJfyCKaVvdu1s23NYNGfgSwo1WHsvpbw4Fh9hDsh4",
  "key46": "2AydEq4CrHGgusZ8zWk7ZeaKe1ocdAWdiJj3v9TWoXxgbinr4RP2dsqCEK44TonPqsxn8woYUJeRtormHTsJcXeq",
  "key47": "6BFrvMA47TBtRT5rg2jN1tBam84iQcTAEQbAGfAK2jR4m3CgMqqy9ru8sVLWLQkiAJ1HXNJRgn34QTCeadxEMUi",
  "key48": "2XR2CAr4Lgv6n7vqJveRTfCaQVLVCVATzBtH9bm9J1AC2zx1bmNf9WccrqgeaEVpNpchJYgs1aoPi9vG2736ChFH"
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
