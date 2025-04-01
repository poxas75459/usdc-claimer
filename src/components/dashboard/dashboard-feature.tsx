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
    "3sFJXjyL7XHPkd9wy5ipydgYLq2R7XWegZoFvmLT1ugZMvNb1GkGErcuYKdhvsH1qfJ126HXhDY7StyzKAULnqJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YT4exjJpBtM5CpUQdiaDcApaFDD4FU8qKwHyn2RkS671c45zhNHMohU3RHd6TjH5kCN7KxoFkvhmhGbuauPiS36",
  "key1": "5dxvgBXVJfiUi7eU8NuDUziZ8eMSGNVaKBvHXCZ9C2P6Q6KcDHZxSbQF6myUuDaiAVKPHJcdxinKWytBbM4DsYzN",
  "key2": "3Fiv4K9j5k52XWyAsCW4N9TsJeQ1ZELcefS6HpsUDCizNEyU3o8t3fkVhRTyT7LXRxtqxaPdWtqWkMTcKXMVr38r",
  "key3": "4ga2tvbzLktgK24qAu1PgeL4nDyWTwmdVCh8cE6eUXKb1YFkaxngiGw2jjcMFcykkAqZVABbPz6cQJiKR2mPpYmx",
  "key4": "4u5d4JcYWtDQjsFZTN792js5yVBCzSLdbcPNTpLGg1EqaRFJDnqck3RnZuAKPGu7S7QMSFmqPvzJsZ7JEHxhM5qd",
  "key5": "528gRuK1173CrU5AfoNoKs7xL68uJ9RYqAGbvtpNtRcUVKTwy6N4jDYTHYcuBqZbSiGpMGyW4hyTnSQQcpA49uYo",
  "key6": "R7M6XmwNnChSZnoZKHz8rUtJR8d1PdycHHb3ktp4C6W9cstaUKyona5HptdrUfRRk429sKytHgdEoAEnQhR7pVa",
  "key7": "tYcdYP8XitmoQoX6Wgh6aimiCCCxjKWCAfLfUNdqdHHQSFdovZ4emEXRXoM4Eut4QPKjAmMgUo3vckB7TvnWxaT",
  "key8": "5TDQ62W4BTkCuYVx9Wy2kTifapFaaayHiaZ5kChgBqeumTxzWvLPw6TxX38tZTQkTcewKzoMLgbGagr4xY2K353K",
  "key9": "2NDSxtJcUbcFJpxxPMAtgtwnJ34apgMtwS94pjVnR9jecrW2z27khWeevPHhUecBCRnrqhB8nUKgR555CCcNYmoe",
  "key10": "66iB9x9e75CoGuyu6boKTWF74JT89XvUPgfjgpFUsSLu9B1riR4FST3PhiTi17J7boA7hMerzerDPegaZm16trDd",
  "key11": "4Qx3ntRfNQyiKf2m6t1sE9cETYbdJ6GAcf3U7cZptgjzz8pfYcGxMC1qPvCbTLCfcqmAxN2PRyj37BU16nqwjEdE",
  "key12": "2xkNws3JWLev4TxztcdiPRktwJAWUZF1Tj9JA9Xds3SktVE9uXETfPUMFRjLsoVEigpgSW3hSbBDzzi9wfyrKWLp",
  "key13": "pUvT4srxsaB3asgozHFNxjLZqNeeDmDLsSVvZr8knkJoZG12vucJTjqJ7bUgoDknYZPM7gvpn3uchQNENykztMF",
  "key14": "5BTCVi2VTdHVPXxCGN1sxVNpH4ZgcfuxxAf3v8GXswXu6bkW5ETX5DWWWBo1W1gsNUH463zdK7mTETFfY44GnjVG",
  "key15": "3SYhBzQBPC5txtH5fsESEjBNbgUGFm8CbYw3mhLe4UW9MoV6TC1UX6siCVcFXAKJ23Xr1pSJWT5JGNV2wzFmW5Di",
  "key16": "2PuC41EFJwihjd45DfvujEdhKgqycGWWxciqoQe5rAvdXo14DbFmUzUgVhM5yxBtfVGWuZjgGjy9axHCDEghzsdm",
  "key17": "5kk8pkNG2oyM1FfQZGnfAWsEm8pn3oAq3PWGBpGLw842YFvorhVLQCWzjYQrfucMULcWcpKAC6DTiW52GvPfd9d8",
  "key18": "4wSCiSEqCjmEC4poAdTkeAAvZ6BrSkGordB5AmvWARHn5oAJG8ST5MfpQ4kk1vJRpsZYHDe8dtwAWyQ8h2b132mb",
  "key19": "2F2dDKyzNNbKkA1HtAQWXEZYChFkK5uj3KZyAw5dG1wDg1CsyYXHVcvU5yxxMZrTMcVpNyhhuV27sXZuyZufSRGk",
  "key20": "3QbzoAXEhJas4cpVbCqMHLd1HkUxS85JXQiGWiAZA38knrYDHAPvd27Fvn72n9S8Vp3j5eG9RZ1LxfHbsxTuoEkQ",
  "key21": "2u6kEUihxkwWWsyDbHfkSb6gauycQpFrMpfuUdQhbY3setJ6kyrUoZgeqtcjDob93YvNaL39E6g2bXn8xhWAuAQ7",
  "key22": "43K6KzHw8jjupjinS6iCQdUsQkQ5XY52P3RdNdDXrTaAyDPoF3QKBtWchx3UwQD6uaSWQGMaQR63HbrxEehPS8bt",
  "key23": "4MXBZhQNdnzqwuM5ZCqFVE2eVyhM7ZzRSpo95HgCrnitqMEXnrDbvDaftxmbHW5nEucccEhLBphNz3dR7xn4j1kD",
  "key24": "4skZhAWHP2tQzcKg8bWZQLMuKSFoKC2aQpy92o6JWLwAeas6h7BDjZke4obasv5tN7Vx7G7VgX6f1eebCqyticbw",
  "key25": "3rJ5geW6B5N8dXPFu1dMtR8WEGzvWH8EzaDZh8tiGJCMGh2gQ9zUWdGq4FBnaiB53d8pDENhyqovseqytg2zfdNK",
  "key26": "2Aa8xfQ9uLTn7SuX8YxBi969yZ79MhGPX44M42bd846rW3MWt1nuX3rksnUorrS7QKe3N53RjDR351k85M3pDCV1",
  "key27": "4ty4nekzYjAus6D7GfmvEemQYhnkAYDHmRssnTDgcPq2krCD4b1fQ56mP4SbB92yHHF7ceVdQici1P1q6K2hM6Ba",
  "key28": "27RcV2z1XvmeMvCAFndz5frLUyQfjYJiqCzFbyqDgRs2G8GvucdeM4xyHsW1r4FDZNvmWVfkAy6CcC1c5fEPSBAp",
  "key29": "3bkAKD1QSRm568Tn8kR9wnwdvSoFxFeVG3PsKFcERKxBDM7BjXtVyHnbdvgwbKRAoAm3E8nGLjNBuscBbNHLgpKK",
  "key30": "zG5tNriWh4EbcJ5fc1fRyWb9uJXSLfhWokcT83xCTedVssdExPjbhGKuVFR5HNvgUXStrMZ59SSXmRAfpfJBUjo",
  "key31": "3vP1KxrrgwN3WdWPfnL5cmGbLVubnD2EHf89c2aDEN1qf15RDPqAtcZyJwtcjjrsyDbAhZcdkb1eGYAiVeB9y5Bm",
  "key32": "2GcaaUEdXeX5iZniBoLZ13gr3xt2BRw3XWbDHpZeMBrPbknw2vmiwG8MJeoZvkjHsUHgigoBDKob5NziNizUKSDQ",
  "key33": "2qk2Yuf4sMs9CWXH5h8J2P789wAL9YiP6UojPRafEWP7JSFrqWjdKZDbczrhCWMwwzeroZKPZDEZMYjB1N2TxRNx",
  "key34": "2ysEFqua3zMs4q9nxJaM4Q1ehd4mxcR7XU5G1BHdSiERecFuFZsCV1VrWmvZa4hhV5HNM7tPG3MTn3PqWs5dySAk",
  "key35": "3T1BRa682uiytgRtkUqUhqBD97vEkKVoUSECX29nxNNXVT82Mxj6bh2GAhp3iuBZwxjs1so1ikadXdrmCd4ToqPQ",
  "key36": "2fMoGD2TpPCvhSeQSKeX6Hz8y7WVQELFrXT8mpU4bJwvJRrvXtsyyu89FunM6gznfUTKUzcb5wn5MCFu3cLP3Jco",
  "key37": "3WNmuwGLMLx2dw6gd2isTUT9XQFm23Y4cxh7Pf9RFgPnWhZ9s9XHFzpiYz6saMBF5BGkvEtq1EUkPtnsbef1dUe8",
  "key38": "VpkN2zj9Jt2thvH2Lnmfn1W15qCeDtpa2T6nMHN1bKXCS58cAYwToXUZh1Kh3jG5jafV4VqonyJ4HQQd9SWgZN6",
  "key39": "2VNAJcZC5mKt9qaXBnoQYPdns4Jdz4kuWydVcB6D2xgpKmrT3HRV196UNxXauoM5kBJNsRBiHSBAHMjgRkNQRdFG",
  "key40": "bEq6iHrekSavM8K2UnGVbfxKi5dpco5bnXhAtUzevbPdVVcUFvx9MvEQfXgGmv7QdQuowJNEhaFEV5Whtp6B36F",
  "key41": "SKwpkZFcKZWqMeH1H3o3xTSm7wyrNgHPRd2bv1Vrg2yk66mfCXD5YW1QexSjk9UKq5PsRYBMCnRp8RhpRqixUY9",
  "key42": "3YMRDuFL4CZDYaiRWGBH2vdYASdarzPzpupPKxTF1x8bswCq4tMRvXPRgDWeVd79AGSb8DuqDjRgsfzpuhfG88MM",
  "key43": "4rZCMALxLHndKptqGekgVKEr3y6xYV5rAGGbqMRGm5oJ1rM5SR5LXYko1MdyB8L2F2eoudoamMy8wejpQMx9JmYh",
  "key44": "5dSacDAXsMEKwiZF9LBd7McYSusWkmq2Zrq6Jf876EgYWqC72Sgvtc4KbDVx26okcCDdVS96ruBtAHR8ScfzzX3D",
  "key45": "kiQB1Zu9V6z9E5HJziRRmZv16pS3W2DHs8Hszqu64YAcZPNDDwMahv6WLBHpMa1aNhsooBf6TKzcXjXG6aLiynk",
  "key46": "3dE6DEWa2F1WaU2nixeGUBxcksCgwyjdehPjMyeNQLbuxcTYBEbLy21unZJt11eSdYmT9Kg2DFWhmgBvd9qMRZ4D",
  "key47": "2Vg4hwFWYpozDKCpKBJ8NZyKxYpoyDU6jvok2F5ND567HoSpuSjz8ruYGewaCUnijfHAZ7Na7LBuzS7UeUfhw7wS",
  "key48": "3BnaLqF9i1cYTzwNRsGoRJVPWT8Q8akVbpsiExqZ4QqjhrgTNSoJ7i2hkMSeu26qLB6SQgmHsuXkyiMiqyoXjHgh",
  "key49": "4EoPwBGEXiWm6DWs41xMt6bVXPXXoagMhb7c12nkkoT4SxTNaAK62Ue6GcTXb2xnqG7uVepXuKoj1pG8AyZ1Leri"
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
