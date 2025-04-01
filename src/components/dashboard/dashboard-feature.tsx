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
    "2XuLPYHeNA8TrnLMYjQhFDWk19W3E7FRPud27W1JPCLPcpWc4NiwhhNgKrnbPYCFnBHFG8SoNN7mFQASZ8YT4nUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Pm5hfEgyM2wTzQedqFzGLgSnHZdYtzkyXjtzrKLKrNrYPPcR612VXUqxerSWszkHuV8qkLRukL26UmbVXaXEv3",
  "key1": "5RYR5dxbuPsXN8wTKuHPTYnEVRR4xa5j1tLpbEjhP4derm38u7UeDNkDF9mqK4q3J6cLQdnTFzuGNSWSMRkLyDii",
  "key2": "3GpvZ94siURW4brTNbLfuxyZdPRoWWoagEvPSVHd2AdD1o1gkEFhUsaedUaf9A9DuqFTMgrD4bLx4gtZDfwnTSYB",
  "key3": "42sDuRfwTm24gRLkbJEnNT3TNM6gkZbbhZKbkMPvPkdWNeqAnLDqwA3qSJ9UxnnDzr9TwVHqhxnNGtq57GzBD5RF",
  "key4": "3CC5a2wJwz9wAwTqM6Tj3C7nQcq2t39Lpzfzd2y2bSukLw76oqpWxE3VootBCi1iMoyd9L4Tdex23Zqv4hrb9191",
  "key5": "5jGm3jYrAS9tWRV1VfzrKggJ1j6yXmzUkMhyPuhpda66Utep2bReQo7Y5cXUsCK1NtyvG18QRyBXzy3BahdxUkM7",
  "key6": "5zCW51NSYJyiZfFSQyLhmYKLbQmbH8bg2rSaSDd58GHkq96G8TjGPopDW1Bteh6RcTKVfzxqVA4Q6kKiC9PYKGiE",
  "key7": "4EuLa5NxrMUgrx2zwTwN1vQDygfurvZsEVAq6XCRJKHTCyT93XGGyF7t9Hzig8duMHagjhX22GbHQgeX8UzJ1MtN",
  "key8": "2VimURBD5WMJFXh3YJmqifsV2JGTUFPmMMjWWKh8Czk384MBned3WWrLfNrwECbzgpwtxrYkbjiwvWagnyU7RfVs",
  "key9": "574mCUXLZq4xhMLMLgjZu4W1GkWN9sEdnKsqR5gekTmdpfmoQstbCMHqXRu3kz77dPdaNUznhxmFTemXh18YzBmV",
  "key10": "2zG7fp7GzndXrdK6ck4vft8HMnZ41eNkX3hqJYsCdyvYiYxMrkw4vQB6HPwKTf88iSL6bjXuFVd22c6p5etYsThm",
  "key11": "4SG5yg1q1NvCfxhK5zMvU21vy81S6Hkx46biKxTrJeuSsr1ezPzV8C8SffubztLYQ9GgxtcVxMLovtWwwwysskwY",
  "key12": "5wGv4fDCDZttKekuJWpbWtZmZj7LVmp9HyX2MsZDUaK1KemVRhwf96JTsT9xQXWUaYuXvePi42cisgoSSNswsXZt",
  "key13": "2PtpVRLtBE7qGbKao9xh8AASjatBMqEwKamZPa1Df6iAbtgtKLbziNifyjXbUQRza4eJ1GAQFHc41h9LEp4oo4f6",
  "key14": "3DxJMQTT6QFP58eLcdXxbW4uF7otwFucfAs12z8HA9H3vNbps37JE1VpQBsvsWsbcpt7AxRmApMh5G1HPj1niQaw",
  "key15": "re7eLezJBk5q1GxAZKpAUjZrMY6KMR4YcpVL6hgdhegQefR4P8zcTpCTbSRVVtdx6fqSQi3wqs8XfVVnNdSb93C",
  "key16": "5wxnme6op1wfZfyU37cX574WjXHnCSV1chC74T8jsLcnS7tXrTba9Q6V2KwdRxieaYPgKXRZp247mr3bRamLKubq",
  "key17": "5qDVmLZb2Z9FRVEB6wKEVaCtdWStb2cT79d1jdRpTx5VbVxbYiKzTS8NxziQrxoDvtDNmFNbESD25p7UxzGE4FnA",
  "key18": "2yDR42xxnhEMhWhWgcEA3pY8TNnvG2Jss6Cs5qGMwHw3L39ndGHV81bn7GFkvP1xPFSppg7h1bNJBuPnjb3uEoz3",
  "key19": "5273erSQ9yWRimhQL3hhBM5wBbpEdWvf4ASujREztvRzBSpqD6NM7TBo4ooHAnGWpP5Yx8Sy6Z6ZRtCgXbqQFnNM",
  "key20": "3tgErQC2mt4CveFvrvVNJoBUvqipCmmBHWfyFNdjso33TeDT4wmyUvqyBryJaSucvqo7Bu73hPc9djWfnibx9eT1",
  "key21": "2QELgqLPkPZd4n8LVsEHnVnHKzsEYi3Adfq1NTeuz3cHNZPL165ELaXeVw49N6M68wdDewC1UVGFbGzjCNVWHh3p",
  "key22": "4ZuLwBYQaaFzCo684hFUNSme8nrufPBFbADLHGPgXN9ozKE86fpRFcicuQpmGJ3haErZGzjX7ya4rV6RDFbDeS9v",
  "key23": "3CWuXwzVB5MyY3L9r2vNQfVrmtEJvGybBBKNQD4vpP9b7Rq9dpVr5yJK7vziHyzJrNDnNfMFtfmH3y4887L8WWyr",
  "key24": "26ySr397BbF143hcu4yN7h9v8snsZDJTXkcVpoiKrLZBJQ75QBwNTGa8EMy4yALaorR5QuSMpsRZwhvMirt6ACmS",
  "key25": "2c5LdNb6TzWd9t53newuXcC1BuSndkZZyMGfvgZw9bcC5u4cD5NU19jiy6sAUHD8ckK1jQ4SJods4XWV42tCW6DE",
  "key26": "49gvDunx8gTg2bcfgd3EZSJmyhvzvrG47Moo14UezdPqxxA9aJkTarvCHW86EYxYtBPdFtQWVeXRLqbC8mFSxPi8",
  "key27": "283AKHYkcoqPaBuKX52sVzJNZVvMG6mAubCJKqbdd8j9i3bg78AMz2QJdLc6CZG9u5BT21EG7NNHeEVDRGcXGqWE",
  "key28": "2wm35GdAV7MJAsaCWMd92pEqV2yWX5DFu34LtM2VqCZTPPqaEWe6B618KATzsy9Fjw5vnkz7GSQm17Tmr1heYV8Y",
  "key29": "2Vwau7Bme4MA8JwC3QdbsVJYm4XF4HPmfdqFX52uvGY1ELkBorTntttSnQrUXamP3jcfSRJQHVsTHWok3s7PC54r",
  "key30": "u12HR5HfPVqKPwhG9ucjdkHtEKSQfdjMhedhzmSs2YUVVeM5v4oHaYpoyX962Z7yvjB5p5NwaVabbkuuqF6z8wJ",
  "key31": "DjE8s4EegfABD4H6tzQ8hTEbo4XghuE38XpgR6YJuRjv1GYhRoVWscPWeuZDiJHoUXTmMmfCeuzmsQCARvf7Gtd",
  "key32": "5jsEq4t2Jgg4Mp4KreSUFiraModteqChUAKkNDGDGcmK9X26mejExXfoH7x1zBP8YFUZeibNoMAH6kBr3VPBuHbT",
  "key33": "3vUJtFvHogqhbNPH9PHtXrBprRFcNYj7h3GyEF2QK8jDN1GoSFgKRgm8vGuADX896cQYB8eKPkYYT7depgJEPnwg",
  "key34": "4kPpCpGt2LtsGNxtwwJxF4GThgGfVKcKgV4DRv39J1auFatQKStwUPofVDyR6c6Grdo2FTKtev8gfiD9DHKtHXdS",
  "key35": "3ELdG2kcM6q9djh1WM2U5ef4JrCEQsZwCwBkzixATtDdHAuStNLWzxFS2YHV6sRszH9CwuM4Yt9H33uLtqwNhNft",
  "key36": "aR6eRuZ3oWPkYBJWDpNCCTbccz8cUDbkYD2qpd6iuUTCiV2Pa1eCe9c1ZFBCMF9KjW7tiBfLPmNzkLCPHJiJrqp",
  "key37": "4rVaLAWUxYGobkwiaKwUMFwpx9CXh4Jit1NH3L8hqECTAyhWkzdQDasJfye87qnxjX2PmwVkWmHBbq3pxWm9Je88",
  "key38": "3pzitQu15nJ3z3Nud5EsKwQFTdATsZ5Ewa3qd8TczxQ3NFsW15hVsBbsWaXzrV7csWC7v7U8vmrV1z7FQjn7tdbB",
  "key39": "3DHU51VRF3r6dkUU86rAJDLGEiq4d2uaNZFRCBHtsEomnVinMgBXaCrTey5Hq4BBn9khroHCWRcwsiKVPbnsM1P6",
  "key40": "4pS4tNtLAWeh29mAWtaHsPRUTdQoTiUN6YvFUztc8CNodN75ASkzwftAnMgMkrs5UsV8jFMxhTiqfjfh1yf433gX",
  "key41": "4TBPMKxMiBaRDeebun6RhmKCdBSAFuLBXoJTvYwrSgcKMhp5GpaH5KNaECNkfZHRm5C1hctk2wwgwY4CdhWXk3AT",
  "key42": "66UJExUqb4YeGYZ2fdJZrPEXhPuhVQQRCBzXtAKphv6WN9e5jN9RjQEpA4AmmAW4WfqLhtxrjxcz44j7HexbAZ5d",
  "key43": "5ryirMbLaYD2XAPW5w2wtBkuC8GzzAWNpSFhjrwdpzVfstZvarbXrDQhZfLzFcvEjRjMEUoYGEfenyiAVifmJWN",
  "key44": "5AQjMD6MbWnHcR3VogNDRsG8TBBgVGqhQ6EgANdYDJ8g3dh1UaG95nYsBCXpzQviSRxx6zPrUZsshdAb9Jpz17WU",
  "key45": "xDdvWoRRQvK8EuqaeDCt5dp1GcBvYHuXTs4iSq1FpzPvdYFxixJ1oRDt7YERPeGKskJqpFWPS92PPYMJ1kuUgx8",
  "key46": "4Fe5LmQQBZNSJYNXcFk1uyQS1isc1PRvX6NBzUat7gufUK6GJoL7j8ox76LCQPfHSrq4vbwwtV27jF45shhyVnwn",
  "key47": "34Qy5Bkq51BjRTZB2ce7itREnaNu3S2dDXii4hJBhWq312oY4q5NxqQfGLY4UkmJn3EtDTgpA3rH3EDUZsDjSpWU",
  "key48": "3GK3zDHtw9qquEv4PHJAm8FBL3kraj71n8EY2eJBTuou56e9GkmMKx9eZHoo99xfEKjPk2muHFyotq5ZkhWxKqL6",
  "key49": "43WT2ahjQfbuQr2LSQA33yK6VXCSX8BUczWSif6AMXykSXNgo4BgHpp3K4S7ch6yR6QzKPqWB9LqyR6bTuyN46n4"
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
