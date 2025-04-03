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
    "f6hATeaiZnD4viQsbPip2woZJpgGbTdbk7Kerfe5WaBZTs82dMo7SXSCyq6y6M8pdAk4wBHkV1N6TniJbPEPcUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5c1oaLRQTtrFr3FjrFXAGj1X6DSKPoGgzwaHzv7xzTZiy2sYuQcELaMhhWguWPfyf6FFaXn8Vgh8sh9KvuyFoW",
  "key1": "3gPXDtCgrajxDGDcecmv6E1GVkyNutqSzHGnWAVcVuur5E9GaWdpWGnBQKhxuWghK8KnwjhkYjTPpwd6XCiSuFYh",
  "key2": "4Nrcg2SxLv2YoNrTipcykR3PJooQ7W8h3VMGmskFYfPRNYc7xd8jKJiZmoiWojrDvA9X2HMGWqkgH83YGKkgZdBU",
  "key3": "TePsjofTpis9eR9ApNWQLU7LYV1o8jSPXkrCR12cKmgwmrymRZtqCfWq7DkV7eYWQgrkrHLUUouo4XWMe55fFWN",
  "key4": "2S3oR151U8ioLZDEQ34GA3KJXCxSbeULypsSJW2usKkU3YJwcFuPUUvFp6TyUcCwrnkWiJutTRVTh5muPDQRfje9",
  "key5": "5hiHQYRXUvVfLWae14hHGZmPVxp5c5PD5kRJcMTMNxa6ZhhUJpPWRJKHhG6BHuG2eSSxHWxhJm7jghACocz3hiCp",
  "key6": "29oxLcx7cmXcsqF6dzF6G49jdDXnipyfMfnWtBHJmxYzCtjvLAPBKPu6ckCRPJpSKrkzorCbsT5Cr7bHe7QNcDU6",
  "key7": "1cojM4DMYEbxuV1u5RC8oLR6L89gX5VkFCszkcTYWQfQ1VsyCN4CTqufugBcLJJRjRaEyqTbxuyxM8vwHEoZGPy",
  "key8": "WzVNyLRbF3HVh38avSyT4Uos3T2VVgBcRdt4jUqAbYXRxJ4KEEoNa6G7YWjjpwJaXTnxpP1VTUqV73MxpGNLvjP",
  "key9": "56jA5LD7RWndw4279Kbf1wTjSkWkpmwKa6wZBSaW6RuQe8YRaVR48hnKF57PdScp9oaKVPsd2xxeFqCkdpeSV7gZ",
  "key10": "4EPjYmRZe3odGKxSo5taob4npVhvuT55DJ3MVYY624V9fTVEavfxDMHw5v5skB91rwYtpV5LZKJkpEGL4TyvqB9b",
  "key11": "qBE7LLs4vWhtZH1zipb51uoU97FJ1LBMsVckAeuFUBVvtsPmuk2dbP7ArVVhthmymNPAsjAtUzQ8vBnHofqnLCh",
  "key12": "3pFEZAEKKzpeUhJGLqQwzvF9zoRwwWiQf3Tz6yfx4nSgxJMpVpYq9RiGa9VPhPvx38ktvhzrNL1kfuRZo3zqSuN8",
  "key13": "2x4hrgrPh5i52e2AeyqYxdMKJosSHhGHz89joPb38attFLvF9eLYuxk7U3wgZ1WXVDZyaQjZyAPVSADVyut7pXui",
  "key14": "Ga76ngxxQ6BPfeZ1anX29VdR7XxCnqgZ1uougZ7z7TEZb2Dhs5e867QtHyLVsvuWuHYZg7K1xHKsquMe8xvV7PH",
  "key15": "5N3vniTCtxaN65o6aAy92K1vrFAaxFiwiwBnD7vesQcLvwV4yuR27AyhAfv4z5qmws78viRfRBjdHApvkqGycQzi",
  "key16": "5WpVTCnVjKuStZFX54bB9o6CYhrWWr6tBaPS9pyAFrB5aq6UWKHoeDcxontG6mV1hpV818A77qs98EsS9SchpLQV",
  "key17": "2g7RTy7SaGxJhyjb4ARwh8yonyuiMkbcdAyUnfTsyn3sXHfKFwtZfjxAC7apJdnrb3eW9mqvTkNK2mcp1uLpnsHj",
  "key18": "3v3ykAkYnvTBVg2UTnWhLG9GwZHAwPmhPbXrLhpVxGcwd43hXCySXKw99t3qzHx2apeGaAbHas6mQ2mjYmwwQAN8",
  "key19": "3MfqVkSTsLEt6KJTfxxFSvMAc2C25mEoSLraFsxa9qF6QsnLcogN3CppZQnAUhHMCLyPoEvfsDNi3KTnJAeZGVF2",
  "key20": "4jBxfu3dzkk9jYF8uUsuruj2LrHZK6GnHCEGpdqndEY4YcxkaYaoPfXXtHjA5MW8GRLcmyzcQNpAeMG5SWTN6Btm",
  "key21": "53E45YzvfSfFG2GmF9gs5hoV2xzigjknPRuNcZtfNiTzUPphHgyjwpDXn3Ud1Aac3YD8PfPYyLWcC3Bc7oXtbJs2",
  "key22": "5dknU2qRNF5L2qYWJf6KmKB9vcPhmfqV32sXX4G7Vvy7rpr5ZFZ2w3L5XeBQAsuQkVexCqusAKbu3CJhjhaAGk8W",
  "key23": "3MHWESQef3J18McqJPTz6AeAepdjVJntf5MZeuXzrzZvT1aX4qjrK2euMf57uioQfzUAVHnfRj4VRcXACZCzVmyW",
  "key24": "Dbfys1a5L1WhdU7g8X2D7jiE7Czrye77jSWKF5em3oqKqGXp7RH4b8EgnWKchgTLTAmFir4drpxFgrAKyLWqNoq",
  "key25": "4e6XE8EpRZUTUNic6RRH5TVwrfosbXhxd9dydwZdgRkAF3tfXNPDfiD6RJTAYS6f9bYxJWeTe3pcdQeb2mVNib46",
  "key26": "2tGApuE5K9ksLhoQWwEB7HAJJpKm13RcRVvZLZGYgGkJckbVZXDB85RDRZKnehnm7SCoDGuKYDHotApEws5zzMz",
  "key27": "4BPrqiSEbKZX56ahe1K4mTZf1pytE6SWV4prKL5YsTRB1kMGantRXRa3ged42ecJaWUNSAZa6gX18wysHpWc5vj7",
  "key28": "39DQ4bxVRxWVbL4gYGNhqnDL2gdQuBaff45RtBcko3BbrkXNHwkrdSMqkDMS9Xvu5s9mYaUtz1NB3TYzfomdZhdF",
  "key29": "3HGNdM6uhUQuf5AJYubCr5AtXqb5yeiQdmBqSYpLbHWqZNge8LS1xsyaBsD7wm7MuXETq5eKw1hDRjT2v4SLmFPt",
  "key30": "2tGwyidw4Pymu4kDjqPoQGDymZcx9pnqjPaxbXE7sHqwnRobg5oKNjfH5RpL4ZzH7feuQPuEv3xAqi3ZvenrfReB",
  "key31": "3vMTGZeyykwKpgU2N2QnQnYQ4EX8ae8EsGAuawt6KAS2rkgr8CFGvXHitKYaQK3vuFYuNArDZSsQUtycwFVdRDhD",
  "key32": "2mADM4UkihwCKexCNkfJxm7TEz8d8gmV7fMfZ61DgUtpUdcwyfk6pZUBtJJ7SmsTBFX2UbpavciPTZqsUh441bDm",
  "key33": "5TAhnbEeGvzP2WahPZDebBfGmQmMjZH3xkAB4BFQiF59h3HQnY4ENRwjNBTEvayFwdzDYqG6BxDLU4yGDpzh3odS",
  "key34": "22Z5cTvYkXf5eWC361vrRfW83bXgxMv9H6nJUzSVDYE2zzPatDgzhLNuy1NDD5NzSioypoxALaMi4uN1GYeBfFD3",
  "key35": "2PXBFRDgSeEFxo5SY9Pp1KRgXtYp4f91287bi7Ag4GxzCJdB6aUEZ7SEcwQux2hSnzNvpUfr3mJiHjPu6Z43KgZC",
  "key36": "Td7twV58nHagxdhodxjw9eaSWtvmAA1Msu5cuFrRZws21riG5gd2R3rCjxnuRomK8cdodNLzHFFvuxRQtXVYgSx",
  "key37": "2VRm2EzzQb2Bjwdp9o2uVCu1Y59APHSGXpFonTFRkndvLdweQnFYYnPHAFAi4WWWpLP3bfgxEH9BzPJ3tR1vzsDT",
  "key38": "4gf4ks2YpeUeDYBh9UPfU5qTaes41SkvQf6HGk1Lgs59AQs8ySEfYsqcnqSLmog5gPxGmG8tmbhYdUTEnpUHSmJt",
  "key39": "4pP3sJdBqcajaDoCidXySYTMUpZSMCVj1uE8rqvFAaCFvCVDjaXDPpNbWoev1XnJti43TescpXwdhZKqQD3hpLb1",
  "key40": "5B9BHXtPV2UPZeGg18RzdjeuNpFGStWoX24Dxft9Pv14m5PTgqvNxXXeUdgwJN1Jy7jFNdVhN6LsszfXdLaaUwp4",
  "key41": "5Rtbp23KnrJR9J3PsGZqtf3GjnfPgiiK9cnurwciZNxDs26a6RP1AZUKbhVmEM6NgDx2AeFZe6SZoJAQdze7cfcU",
  "key42": "3DZfj2qZX47NYZgQMJmZjQBt6nmNUwHcvABrNHnfBq1iarMnvAcW63Xdk8iwsTVkGTB5HSK6toT34P1tF1SvQtdx",
  "key43": "pZuFPqyE6WLAHD4SGKTc4irjXagzABgqrZzXruoR14YehFQSRgxvSegFQU58KYdVRqKWWiNZBf7NHLD4ovSy9aG",
  "key44": "3jJBufe74683LPNTtUJETfMRVeBPVkWiFsDxgAqWee9vVrvrHS8ky633HCvLWiuHsenX9En51h6ZftLbYqwzU4hp"
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
