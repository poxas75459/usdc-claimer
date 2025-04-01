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
    "3u6SRpV2mHzULm1U6qxzYwKx4aMWHFnAXFxL4KzpyD3LaLxb5dm31Kazge1DyzGUj2UkDh7UjgyRZ7LraCv5xNoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JBenMLEczWPRbqwwvPNHxJKspVpcup1eWkrP58YP3gybeqCgY58nMBMKW98nkBMVGaGdsTx5JvhbQZxTxkK5Pzj",
  "key1": "4KVPU1KqLrBYrBvK7AcLMnX4kEoDZsMbf9HWYfnqihsWiY5sDuchfToLNo7k7BrJA6dnGsjtaH34R3gABX9WVQPe",
  "key2": "4hgb9xpUyj3FDuqeKrPejAkcT7FzyWG26E3SopERKLFuhcG1dnkwEKpq3FfTCaSv1Zjk2iwhuoe3XDB5JrXeEJyd",
  "key3": "2zJBfUCEFKMkUiam4pLFLiuAuyz8d6fAvYCn2rvgp4Ym98rrSQNm9CDoJAcdsKw2K79zyuZgmsC58eB3PjN2oGzT",
  "key4": "3Mdh23DVnhFcDDZTQHtAvLZwQ7kvBdBkNULwiCbdpVGjcmKG2Kn92JrNX3tDEfimTWP7tQ9sY9yh5nBJCriGVnuE",
  "key5": "YSQc8TxM1cyScC2HK743kTj91R2Ve6SrGnC8cDNkxe8VSZz43r3JfF4i87ZR6ixT27Vv122rPnu4Sk4zxQQC6xz",
  "key6": "4yD2nokQrpJheKe3V2H4XPr99HFHNoSzLb578wJ4jw9c6Mf42Sn62cbSZhLj56ZBLJdmUmASRySTBhfSbsFBuNnc",
  "key7": "45RdxJaTqT6P5WmZzJRbA8iG3437Nd7rbQT6kcw1Mk995yydfBSy1xUr5mRcXzotsYu5CUcde28ktjDwuXHS21oq",
  "key8": "2YnWzxSXyb7F9HZEvP9U6rTMt6TqjJDbeSTsfkvEMysdVjMbt8R4a68QfyEQMUtz3GKqHGC4ZM5eM6cEx8tsxfPb",
  "key9": "5K6j7mcuGqy3QUvthnfEuYNHYB5px4Rkr1dbFTrhhXB7DYh8gMmnepYgkbQiafEUtPsJYFk4UMpDTmGK4GmUHjQk",
  "key10": "3BZDKs3sqEfwf8GmWgozfE5c41bBqbvqf88CbxrSFBL3qpL7L7CQ6hqQwyXJ6EkURV1kkzAeSDYGVXwrBX5LuBLL",
  "key11": "2S9zMpwuC51iF8WCHQphWKaPQFGS59cv6N7faDKReMhmYGHchZfztBMra8Z5uDg8pcVcGupFpR7qYotMLd7Y2ohb",
  "key12": "3zpwtS1g4U6gqk3YgRrVGivX8j69eaXjujqiHdK24CFLrP6CnL51vSHMSK3RjHUstgBF1qDwjixByxeQ2UZmuRLo",
  "key13": "5kJuvbHxBXgTdF4dVmoaG31spoFbgLZMAsbAgu3P9JU55kunWWDe7H6iaM4gZWNd8WCPSfwUqNH47RbyXsPsVmrq",
  "key14": "4yQaHLAQdv9HjvvPqzDTjsQa6VbwSPLy9fCLuWZ87hJtAuC92aydeY9zcmTPKrk4qUAYWkmMStyWyAJUfH9LWAEs",
  "key15": "kXXraNn6ELud4J4pzPthng9ybro68pEbKgfBGjxSafPSzAYdn8Nt3J3iJc918yUFH3UHZPtCnyzSYSRjmUgT3nY",
  "key16": "2sYH1xmPv1iiiLW966J4THdToehQEAJpxcH4DxR8zmrmzr7zioza8dxCpq8gvBdgfqKVDrHfjyQ7LgpAwa6GJqaH",
  "key17": "5HNMQLrEeq9ee2UEn55QCpCKtnmR3sjHevL5S3kjGcn3LakupJWvnr76tymtA4TNrDPwMmz2ZyuWVB9xsWanyjQ2",
  "key18": "2svKLBfq1zHSCto4iVHnBM2bfQxRMdir9ahQ2aGWLAMds1PsbbWEZspHHpRE4scW5M4msyJ31eX3ostKFNPyhmSP",
  "key19": "4DfcYyhRetpYP1xCieBg71P4VfejhNiQB3eMp28ofQxtWZArxWNQ9z8xjvwUgAPDs3djyn5wM9VteE85C42BwMg1",
  "key20": "3AkFHNpdkjxH7sU2i8md8VcpBJa8yivPQNUnyp74JLsjdBbL9AHzp4skMMqWHqjzUomeoxKEFxTDDgr1UdhJqC9d",
  "key21": "3F4BvrGve65zdUQtn4fVHLai3rTUxoiC5Qy4p1LvWMH4WBMF7grW6iNy5vRaQq93vYpDV5AVTJhu1WzUvLMJNkFz",
  "key22": "9QqvYs2WGMZ5ovSWq9n7J3wAaU6fR5pvKYGV8dfZ12cewFJ3LYTtxHZKZDDHPVqYeYDEG5z5ZXJZjc3XdrSkNCi",
  "key23": "5vR376zfCKDNGeTD1VESFNGn9b3UvtYqJUTnas9h9eptjNehq3sRUYK5Ps5dQd7WhQ8UQTRnMAyNyyU9DCzVe2r3",
  "key24": "rtbkXXc2YMVGNX6Dd4vWYCJH6RS3F3QvcXVjCgGCNmxyNTZsM1rNQqoNCmj2FedKFQ7vwHYitae1hM9CzAFehi9",
  "key25": "4qaZv323wPYAjuFtnt49mFZfoJw8EDRtXRQ14px67xUY8wpcxjTVAAB3Q38yQ3eKq6PWJLYfG1onMRQRqrMrgLYh",
  "key26": "2oFU58XqJfNqMqZcpkYsjWhJKcjirSDQ74qSvamukKC3BHxPQM8ZuCka9Jz7WiG51vCWgn5ndx6PqNcuGtVfJMPK",
  "key27": "3ngt9RoNZEQxKdRQAd9kMbpNrH2jsjdoBhsCkM56Ji4yci9QEyuS3H6C5rEbq9dF6TLhJRhtgsiEyFSFhYffhfPs",
  "key28": "2vgcNbyRkES2HWq5cc4CJdgmpcz8CkAj1eb1TWdGoELgDod5N22iikysAFEiUXsQvXW5exKLa1XLfNewaHM7Cst5",
  "key29": "PyewKHQx6q78LDZv1F9hr2VXeVyASHGYbGqbbBVCJ74c4LGwqc8ymVCVaPy652Kjy4ekba4VX1SgS4QD7o3tTTb",
  "key30": "3uC91Bngc329kiSHeskgjx53hSHZTw5GDeTd8qbseoQUmUcrSgymESyjoujTdf75wp7yA4m5sveo9E3YcQ47PyzZ",
  "key31": "3j2xaebPpAd1nro6RuKrztkiYDuKCjZTmvxZY1JR94X92svoUxobbhuBTKagUPuwPp2DtTdAdBUR78FwvYJLBNF2",
  "key32": "4nmL8VTuCTyRArfe1s9MvDSZgMUnf6XqFUQXnyzVmALX1hL4pN1pTLyKjiMZeMWuUUfpHdBHZWLN74sEa3k4UFtr",
  "key33": "5o8D1q1SZb3D5Nv8hGU6XuzHZGrmjLwJb44zk3TeAboYQ1pBaFB3z2oLPjUGvyvUNixHT3HkGbp1VcNjRYehJD3u",
  "key34": "2UWMt7z9K8ah5SRL6BcABRodgRvmP6wLUfKcrTQ7Vg7jwoqgPS4GTkRdYQXnZZ5VXV8q4kbENztxg8Yr5zDvpTpV",
  "key35": "cXdHLFaT9zkZXrxfHaHQ6UgNnWwXPMhjxyxpUgyAJU8xEJoJ1rkiBrXfYyyJ5PfvL1TworpRqJABdccCvDoJ9SB",
  "key36": "2RyHkFaLYELRMvXjTkVYpAuoFZZ24SepN5AuftLw9VgJegBZutRd9u61mS2QcPgVmJ4YNsLHFYievxVeyNrJA8vq",
  "key37": "wS2NRCT22LWmiLVbPb5FNn1EdALSBZpQUdQU4dvrbHPjkQSuYgC5k8Dp6WwuKjc5u85ha1C9SPMNZagwMz4dn77",
  "key38": "2ir9XqQRzwFzphbN6R423Qbzm73Na1geEDWqqMbXxsUJzU5mzBZ7hxriXSMkGyoQTXL469tXD38MP2BU9YCa2WFN",
  "key39": "2kiGC8AYKZ5DPxRfbSjkqc4T47t7kfcXH4PWfuZNzksaHoNSpxGZUtCf13ruZJXt3k5VCq6aNKakEjRA8AZnSYuT",
  "key40": "5abqqwYvaXRCJwRC22t3uhtzqEv29sgtEhcGyne6j5qXzrQ8kWfnQtiz7nCYWVkpjcJwcpjzGubGHGuVfHLAyQTC",
  "key41": "2hXQizDzLf1MGGAhSg6nRPD6o2nJxUJNnX9CTJ2BeMWGKHZBPH5s3i3Ti65q81WrUyz3ybKD8mtdqMePh7JGtPfL",
  "key42": "2waxFr45uRUcrREzNwku8tJeMfbZa2wLvLzaQwD34RtzMFg5NRSmTQEeYH7hN2saxix8Djvuq2fxQB7wtjhUNZAR",
  "key43": "3XLpiTyNvt4u5z2LwBrb9ux5jscwhRsTxKQEPCJmqYy3Yk4cKq4ofgmxJvA68Ji9ZALScmPHUjZgCMPeYNGDo1XF",
  "key44": "5nPvFoin7Q9wY6pnn6eBGRt7tkc4Y7qQuXiJ8rxsVbUQ6SuATDsqQmSQXVYVkzgFwnP4TNHgi1wiucK55q6fky4U",
  "key45": "4gYmq9eyZxP9nXjNDYmGar1hW8RQrsE6TttBcu8jLwpDdbvttMTVnrnnmBiq7TL1kKhTAPWhAADVQt9dN9ZkeadR"
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
