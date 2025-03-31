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
    "4SBAsUfRi8TchEck5QNyz4UhQyjqRFR3Fyu2dTEYn3cvRKjN113NKfHA5k9C7eCqzqxN8TTmdenTeWGCLJZSrxrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1UkFALH4z6iVLFupddN4JbeY99RxYqRSBNDMbiRmanmbduFWQuQybwAHP5eb1mMuN2KBfXuHY4mJvwdnqV4dxs",
  "key1": "67khryik8xssBPhBcXXvy43keSUwEGx6uUNMoWoJTRLzzfmwxjQgotZSXQchYkt7ERLLy8azgohTXGopQixoEmgf",
  "key2": "5yTSk5iJ4jn7JCTQdmXgCmkeWA3j6jqqJ7uuyP7pFow8SYV8sLCDPfgYuaYvbxC8fwE9RgBN3zsydFoENxVwhtro",
  "key3": "5fBL2ZVGeLALjbG62qmfhPtxbV1hwKeK3aWjna5KZXbv3fXe8hzcN4YffrWkUs7yxuAS9xwsxKpcFPuWjgvHAXBj",
  "key4": "2gGYLxkMUt2MufcueXiiK2fUAATW2XWA1rALTEUzFpBL7K6ZXA1R4cqH2LkowQJbhcmpAAenw8NyduJkbMLPNEfW",
  "key5": "4pCzdGhgJ4aCCcNxxKYWYnRntEwD3Wc3ovqa3phQr7aTHD37bRQQMmMf8WhioR849riKgt4YJcKTJfMZP1r9VfXv",
  "key6": "38J8zkqMKjY2Bp5jK9ebjQpfLAeeduow748Tm6uzzSD2Fzn3pX5Vy2qaEzBj3A9uyskGe86ReBzpoorqX4s2qmoQ",
  "key7": "3RxH612LcjLa3XSPYaaZ6MkSYsrjVViNTZoFteiLw2BouxyDd3DJN15M9vZgVxPCPN9bozBet3ooaesf3AiKRoCN",
  "key8": "3AqdzV9UKnTVXMA3NxzHxpqNrcoQGquD6qbRwYbwaPAzP5SQecQfZq6DBzvoTtnuPShczwmhZMWS5WhRGQNoeQiG",
  "key9": "hZVLuaWZZUTrM2LHLc7kmgkPrwvDEZNDjPV3DoFwgLQrTU1sJAH9cEDNnNidCdjoXdsficPa9Q7r453uLY39M1L",
  "key10": "2rXCToqMKUXQP3Ey634qT4dYhWborqo6sKa8rAEvSSLXChY9VLy5tfFn12nQbDhb511hCe9UfdPGkKPKt86ASx1C",
  "key11": "5vzJQSowfesZiAKYWQYjW3zLfzFEf9M24BPFBnLeSQ4Zr2c6p78pKApUciAzKjX3Mem64shogZbsq1PdFtsedD3h",
  "key12": "65Md4SDs6g86fL1gUThKWSPTtpnGk1RzFPf5VjbgBFKyJuN93YdeAVkWY7XNffsdnwTYYT5SAZvjct6Zt3CtryKu",
  "key13": "wgGNdtEjVtJgwP5sTja9FQ1LZrCdDKhrzHr5vZniZrMPMP4hQFJGLbqsrQDtHj3VJTcL845LmmzuSRnpbdfh5C5",
  "key14": "2tffymYzn7J5JoqRcnC47idPoNhyMbHGreeCvQzU9vjMYABDXovv1ifCwag3uBHR3GtNJRTTHWeBu6HGZSrdx9oV",
  "key15": "2FHVqvwv3e3iwTJWj3SHG3sQ73NRER4x6Qrs3HLhcAzrEcicYFkYqAj3cTSkgUfpJqZ2G8PZDiXagfv6GnVqgxno",
  "key16": "2e1MVeVTDmcrP1YikXFtFS6gWxDNkeEx18n4RikG1SC71jz2rRc8RoHCbNrUY2VNiARc7enpbsmaDSJmtkaouJLA",
  "key17": "5SJQab9SEgeLtPdDi3cDDpzTKu2rfgnvrakYrH1rYQrhSE4rmU4Y3Dji31CZMpoPCEJyatZ3BHQox4wgmmezGkJS",
  "key18": "3AHzYEcBuETqYKzTmVtrsXmLjtaoykpx3VmZ3BuTFpN91UuaNn8E172dp4YmPXC8dTxGiKjGBVFZ7KaGTYyjqPvW",
  "key19": "314zqpu5kxYJywF5bKRgXfiYpaS4f1PHi3DzTuAWSqxCTP3B2p7xQfhKR5Bx5AJr57oeVLHkNoSohQChh8Fg1BK8",
  "key20": "5PLWrgAcwHR6diRKTN7vQBBWXrUkvzbkuhmEcrbKbvVArJ9U6VwgumYL4joaHSATRSK4vKjjoz8dyKzEts9ibVm3",
  "key21": "2dJL3gpqeL1Vd2iMfAZdF3Tq7zChHets9qMyNe7ci2B5k2nQvpLNdBakGQjAg4LQVd14Md2EgCNwRUBkYoxyfuzh",
  "key22": "51TwW2JdYh6J3Jm3nAZnVUV38yuoegj8qKmZkF6pir5JxYT9F4aCTsRP7GZ349hqFy3PSssQVoe5auaKQppDiTc6",
  "key23": "3ecP5q919KAuqYKCn3nab5KkV2QZgbKPrpSMUsrPFCJZ4u7k3fx8vUtmjD7rio7fF5rKXDUxsBMc9hCmsxgXnG9z",
  "key24": "4dB4o6Qm8SBMtnhrXfcBApfk4NLYgNZ1njLy8bEDkPmxoWvghvd2keVsrabDzooKmwnkN4QXGg2idiXtRPE9U1zr",
  "key25": "5mh6JZ4kw9xrBXRRG8EoguET9EqLE6ddwrgbb2xKmNoZteUHrRdkKFpzXrUK6x1x7PPPXxa8iUfSYuXGtybcRx9Q",
  "key26": "3m9BLRTqmz2JdtQAsKNKRn9VjSxESuoEZXnZYmdZmMeZ4oa3BQhQkYcvhgJm9DHRLpKcNs66ofApnVsEWM1xaFo",
  "key27": "5Pqd4Wugjx4Dh99Mwy7AiXHq3fZrhK6JKDH2XMBvBg6PBZ5NnHzWcqgvkXN2A1pu4bPXDG1ftBk8PWvtMFX1TtTt",
  "key28": "2HAzHxwNUzJxqPUjGqgZSVLkiL6cbQCwhjx37JXXmgszhfSQo11MgdaFnxds65BiL5HJBLdcriRpe6P2MjyAUte6",
  "key29": "3RxcQ1SRzRgjQ9uTowqMM2jGVd7SvtVpkui7jHkJYYgdCBJpuk2dVHpghBPvRSLdCrC5RirFbrq8JS4UsBrcyU3f",
  "key30": "2AMjBRwqBctJM8pA5Gzg369hzto8BKNWp7P14Cem6zVgNpAumGKmc8dyduV9FfhH3swQzM41CV82Tx4HJygJfTwm",
  "key31": "2qHb8zgGkRcwc5uuBB3PEThqHdisNaYtBCVJDLHGmK93cL2FoHbcFRRMhWJokB8vuaJ9KSb4tnbRK65XTTn3wNqJ",
  "key32": "4q3K5zy7qE5bPkvuRtUA9UX5bpB9iVPPfQiUYys2Fgr2ud7pwr5QX8cAVBiRUefcttyLYmMKVETfffH5CA8e6NNa",
  "key33": "4rdcnYU1tscSf2MTbVMyDQP5CHH72s1Te45wn9iR38yViZy4dpYDJNn1N9dz1BTYGuzmGuJsVz8e2STPQLr8n2Lf",
  "key34": "35RWZdBEUkmDTv8jdfaP3pxiMvDaKJRjgu5qXBTHszMsKgQkoXWA7JhJUozVWQRwzGKJCsJwXAruouGLGZq8Eqew",
  "key35": "2w93ScimCnFSpctwMijxUHEfasRxso7T34eT8uPC6FRPZiNcopSEWAs3yqTc6jEJCnErTrwAFZHcsEEycZpocBjM",
  "key36": "eHEyHd9JvbDk6MnZXZW3F5BwU2D7Wii9PZ7p56bZhMTHiW7h3qyVwPEtEks395XEhusa7S2Bi8apTv559PyZroY",
  "key37": "2R1UgzjeQYxr7H1R3HdFDnFUGw888w56yPaBoQv9uEf6i8yGHmGeKoRZdjxAVpJ42rsFW9kZfFTwjkLk9or9AR6t",
  "key38": "4LmBjY1vBxAzhEEcsQEu3jyJ3Jv1oVGALveEa9xUvzzSwXQePw3EcFyXGTFr7nQ4fy24RtjZqtZrZF1dxGsbQ6hp",
  "key39": "3UamYGy4XjiFwuxePJCWyh7gmnHoWc934ZQmLmAyGWkA8xdH6cWDksT2zWnnUZG4z2J4GTwEvy3GoEDLUNz5sLPH",
  "key40": "3V8tjG6GTSmBFDbdftin2K9XFcHVF1Xf7biLCWxFgYEF3iJA9d4UQAt7qMpf1CyDB1eacUHMSPcs6hXF7uSw5iwC",
  "key41": "3d1kzDJ8XEzVTSEastvfmyr8n4Qbd5h4MRuGKJGDVZGFwUPomeWwUzzKaFDJE31PB4wJ2VrrNDo3jCLSMsPEd5XL",
  "key42": "659BsV1Et8gEbyXLcTGWX2QaKk9pkj8njHoh1fKnuvw31yLEsE8nQ1v1Crn2mbb1QSAmunkg4YatGog5J1aDUTxY",
  "key43": "5KX9xAHDCU1Ae57sv2dePqyhj7waZfUpJPw9MpiZfRRBoDFRUPHRwKhjhjHTrTF2JhxLghz4f1o9HWUNosEMDNxF",
  "key44": "Qc1eSTgYVB4MFaEm2ap43nYctpjogCB3ARBLCyHiC3rS3u2BAXsMCQ9a4N8qr1Svr3YVPP5LpetnniuMvAaVKrx",
  "key45": "AGc6SCBz2sjrJ4YmWjBmQzVaDYs8cGoJX3gJEteFRbheYmAthgB1SagTdjib7YZEZpHPWfkyMRoYys54MaazGxw",
  "key46": "48KYpx8iYhZ28VSsNA6PVJir1xQxExg2Tv1peD8STCCb9Sy2PvRi3G96shVHNAKFQ3EjqCa56drGQrn5XxC3T2iD",
  "key47": "2t84Hj5XnM7VJs1q1dsw8pbRKeF3idHdcYdPpcDrsKmfrzVU4KXzghAG892xVvUXSSwv3VpfExpTHcj14eJhjdPF",
  "key48": "3nmaBAEDQujBeeEGdtY233vw2T9pneT163BeRAAZ2ggyuUgU7HyiaEhAdWBLz2XVjzkzAfzmqDYuYb16Yuy1x5Ph",
  "key49": "H18GJkGFycX1HEqg8DeT2H6E7b8wS1yL54tqZJ2nEEZ2ffgCF8db3KfgE3bh6xVnjExStF43inv5jb5o3E5E8uk"
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
