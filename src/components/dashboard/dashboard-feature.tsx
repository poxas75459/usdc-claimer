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
    "4P7zW4JemXJ3MfvX1sNVnHtZdg63zEDs2jS96e7KyJkZhAssmyVB9ySvRCXadjMamgJV8SF8D4hE7NopcJQfqd8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a921S6BMCkiSpneawQZdGXrpZM6U33zTq95LYymRRGLEfnTa6XiZ3yGZbUKDmdKgZoRQCvigJDwnwBX3hztos2M",
  "key1": "Z4hfh7mz8iZwWGuUziemSDzpgBZf2SeTn7LDpMa42LauW2gbtSpT7UWBVMrombJrH28qkDFZEmMgNn2jLEbhRp8",
  "key2": "f7za8YGnwZXtCvMJVy3FkwYFqTZyMarQ4C7XTBSgW4vAaCsW9tLQ9m7SEV2dFbDv3L8umz7T4EnQfoDkMgfkLXk",
  "key3": "257V3RVRgUUMyxoy2ZsHuknmzWUbWU9tHDGja4hwYaaAM61V7vr2fYUxmNmfz6BCxAvUVSPEMcRkBiqQRKsNpMUT",
  "key4": "494PBzjQKrvGqa2irnGqop33Wuzy6TwNECp6TeDQXs4kRVSvpjKdAgm1qmSU9RPpRFMTyNdoe4iJAXnWNQe1TBwT",
  "key5": "2vZ7ivzyM4bvkpaxqAr8yeyZqzYxjKgkgteQEW4WS6XSUdKqhPTvpuuQ9j3vvcZgQDbk4hx2pj8bZWGxaRRba7kf",
  "key6": "38RoxzxA7BFNE6QEYd3oGW5ZRGi2C6aQfXKbtDJ3VGqav68LNS6n7CFpuHov5TBvTP3bEScD7d7SFeMhVW2qVkQp",
  "key7": "3reuwtByCPnMBpSry2fg7LFmtjLExNESTCun6TkmYMQZ1Dooxn6BjDpDUnutZ8sXjxqRBzfVe5WTXbi9Ciph1u5f",
  "key8": "2V84DvrZy1StEm9jP42STEiRH8RXny6jNA46MdsqsjciCtwTekhJVqdhqfewfUk51KGUBiArm1oQYKgCKA8Na8X9",
  "key9": "31zE5wDUp7hVpqNLgirTJUrQKhajMdc9DaxrJ9rt6Rj4qtjofxKGwZEB1j5BKrcurYERN14YpYiRJNT8DpyTNB27",
  "key10": "45akhiAvMBzpaRmt7ipgFjfdShzmwDxD1riX5qQVKuRJvf6VmWTvP1upeaa5xBiNeC7p6sF8Yo267T8eR33djEiW",
  "key11": "2jBDRGsSJUsj1aJnaGFPpAKuADc5mgwsNVBQWLZDKdkp61HgqcQaBXMxqbXqfYsGWDF2nBtAmCxwEPxp1KojM43V",
  "key12": "41osWFHLmPKKtcBMbJUfTZw2VwXR7mrEeuGg9gRC4RBHemp85pLSbf1r32vXPu75YimGmEyWmWbfUPGLGyjRiKpp",
  "key13": "2JfbYDapSjKR7FrXse8RrGqW5sLGoWEMFWHTuVA37Ntfn42eVAyprcpudr4TvD3qCujZJYBtvPyJHoms3AhnNu3t",
  "key14": "z2JxMaYPSTWda7oAaDdwsTq7GXSfAtMcBDccMSDvegZ1Rn9Bo23AB6REdzpJ2FKLDfb6jtn1RC52Nxnb4je2UyR",
  "key15": "MB2ZuL7iy8yjgWrEEaqSzVGD42xiZMJk2WYBSyzdw9ETWssCm3w2KtBbxqvSfKzUMtz3joLTZrF3EMBFsKPJ3U5",
  "key16": "4Rv5ZgsshQoCuk9CkFGmReN9Xvw8cncA7USWvnSLSN2rZqnoZB2HqEoGYPp6rJ2QzPtUWQ35X1pNQAU9sWq7nTpK",
  "key17": "5kkG5VyLQfyCKyZj1m2V5JBXm6JXebuYQuGpCP3kUZMECFsPg5iumFiyrQgGMymhnP4bXmrg6QLL56k3tL3SwGSi",
  "key18": "5hj38aFH7NR43UhdpWZqVT18DGzj1UsR2gtK3XjydJD3o1ewyqBtpJ4HHxAMXS29GjM9P95zHtzYBXESYucnPWb8",
  "key19": "Yq1Ns455DyPYqxUPNjVStrm41f14Wb6rqiyuZGTLfgyQDBpwTQqDW7fLUQ6j6N77L5EZ3w1hVqnZ5Dx4ZHwUpFk",
  "key20": "hAeP2tAfMtocCYAkzufUuFzrsoSwDNN4nJK6gU822zP8q5Qa5TDDz62UbjWQQiTXhEwBxT7bSPEi5uufPxG2mHT",
  "key21": "34CrwzNLPhBQFiUc13qoznVNxF177CpGY75RBgcpWSXZfSAncCvDBxtd1DeZGLXivEy1U1Ek7wgaUsqdj85afBQm",
  "key22": "2EbF5yznUpmPwVXFVppDZ8HjKhfmWqBgPiBAwiKY5W7etaKxQp8yPERcjFCa4hrVYBrWEziAapmA4PBrWyhVyfRW",
  "key23": "kKDKuTefGEtFYQuxHWz1tqdYKX49gxLnaZaYoJGWyvzNH3k83opoaL2bNsBHcL3TgoJbDrMAKMcogjHqqTYtZ3V",
  "key24": "4Gher9CCTXCf4bJVC9VsAexq5b5n3R6RsiNwuCZbNjnVnvZSsDHnq1oMBngYV5zW8xQrJgFcUxJPnSaMUtTkRhrL",
  "key25": "5i8CDnEFNtKfoRTK9PYTBqdA6aqWgFFsYP8G7a3y2jd7oHBZSAHbtkjz5q3UfTrPpuEGcvcpBCVvrFeaZkjBNDjG",
  "key26": "5Cv3vi8TzUjthGNdT1YfWmZdbxwUtCxSMKMgFuvTMNFV38oFVkcksDzmmRwCQXJLTVdkpw9tphZVT9qk3Jtn7p88",
  "key27": "PZhvcm7rmeykDAhLXEAUzFkLJXrmDYpaLgH1dwgmozXmSYLCV8C9WFAf2SpDtwtX5zWy7S3kLSeMTFNyAJLYvX7",
  "key28": "529JGgR59z6gUvd3rFxrmrGUC3siDPu1A7otuHtNLFubya924hntNLXWPUBJqLerjjXWFhSd8Q8QQszHJsNEtGw8",
  "key29": "5fD7jjxW9W96Azr1L1TM3bhwEggzry6YExxWVocReUCd81QS5KxKAFa6daguanfuVcLtnYghJfeA3pmCCvdcdR7",
  "key30": "2v6xsmgpYntX8HvNTyCowZYyq2Upea4ofx8AjkeZFKXkkFkvWFQDxKCfkNmRPSpkTWtCTn6mpxnpWwmndtRzpWny",
  "key31": "339cuR7ypjMVhcuKz15uWHzafPoX2QbrHfq5b87jQghLbyTMrHc8WepgVayYtcgGriuj9yaDP9CCRgofBRZsbVRw",
  "key32": "3xYyBMJyAYaGAGsnEPBE4KPvwnjRJN3yRVekV72ZBe7Ebiw7pWG9oknJNwn1vQ24rhZ5Mv9HRRgW5wTchRCZyRE5",
  "key33": "EWjykGXWwMb34yZNm5uCMR1oKUyD5W7UHNHVtDudAH82whUcDE5bm1TYZqrmsYYHXAPPSgiGTe3peJfEJY8horR",
  "key34": "i1aXRWBCFHAkwg3wApD8gysmVBeZRDCritn13tayv6dHfWWgXtuEwW9fPP2e74i3yeTTCZThy52DmcfNa4Mdvk2",
  "key35": "QCi79QsGK4VJC9r5Z6e9HPmheEwMHo4XAsz1hDV5ADD2GvxQErcYWrTHwp6T2szTNiJDxt6H5nr5p16reJ8mFMT",
  "key36": "WXfJpBiHYhpZc9gJeGbFbaPsWpqijeo1a7ojcZvdpqVPrE3iTLWTFbi66VZc9Cm1L4AXTPqpHRzbUbK3eNKSY7h",
  "key37": "2xQy5he2umUFHzNMbp4K7o4EiYHaJutEAFZNdyokMNRq9XUxHi8dMKFGeBv8mS3qjoN9Et1YfnFkQpWAr4SW58Sr",
  "key38": "2THFyKbDqXMsBDUEWNam6LKMwyYKmcisANq4ydQdfA3n5GvGKGydc6BhDc1HoQ28ctbBaJa9sDbXt1tNT6P4SWAa",
  "key39": "2A9eUjqG6H5ceKyLPaoQDd5yxVf3WcdGviXK51DMajc3DNhRtH3mmy9PdQ5Ta9FHid1gTNyw9n5vpVpSTxkihgMK",
  "key40": "2ZsxyyVB2D9ZEZBNTxfBSUj8LmGwy3i3RFduiUkpcu1UuzSRJZwGNmPTz8upfyZ6wygXgXc2xrCzx25f7w5WTimM",
  "key41": "N5iFrznKMZjbkEyh4pwGnihBhJzDBvjvHK9CRHQA86McgrfoEwUMmWurmGd8xQxpodGTDCEeuRUW7UrzQQqQ8Wb"
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
