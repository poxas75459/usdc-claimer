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
    "3WChrdZKf6Nf8m3176nebmw7ZxccFBdLX7V1LQdGrF67pCCQJqgfbHGQKoBk9Eayyowa4aXp6egCgtySSeThyXEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QdNDX2EqGpNYUF1ZjMqtT5YaK6FdDrsRwpxCpCb9qFNGB39WFyYuR8Sda4jvawXfW3YgjBgVtMX4C2kvyT6kBSU",
  "key1": "5ACoQbaC8apiXi38zqiRWew6LfwnDCNLoMUxfZwA2zeVhrv8948KtdNHh89bnENUnYCyNxiJxMxJKGCXwGwxnMiG",
  "key2": "3uHawfdPJotp8KmzU64fr4nbDGHxzpD3JnSRA85a4VUfSANkpCCeAFgiP9zVRpiJnt5BETgEgscZnEZLaTa6TZy2",
  "key3": "iocY47KpUzCzCzcg4tLvpw1PHczqscUfstjhduh3dphX6VyRypq3tUCCKYod7jThFSxqmQf8BWviBXLUp2fDjou",
  "key4": "2Kgk59egfh9fr5xBUDhKFmp97KJoKp1g3CCX1CaJyYNHmz445wf1AS8tKAVWvcqH62bU2ZBX418U633JPMyh5TY4",
  "key5": "2TsCPDJ8qacgScJfTGSsErgv2uFV3Ffoa3NN6P2BoyM29gEVWfJWhn9NVqBBqiABUuhorNhLRBUrDmtVfRraVdkU",
  "key6": "3ctRUzGGw1P33rDLG8X4B8YwV3DXkVdC18DaaLCxmjwjNMYTw1Cshj9dijZE7BYTSj8tpwkGVVCpkuvxmQKwwZSt",
  "key7": "5FW6nsTKZrzx6pmej4kWZ4iTSfS3Mb3J1A2UPmrKrCoMvkwxmVkLs1uksVGXeai1qcyRXszrMCsv1qUaT7nx373b",
  "key8": "31SY2AT2K96W7aiUd3hqwezscctN839GaJ1zxy3nm26UM5X6y4JziSP1RjwonS1BEzMLKqWeFh2CZZxMCzZJhn4s",
  "key9": "4WUxKB9HNzzqDo2yDgaYNGy7Fk3x4B3sqbgPu84SbSAbiuKW3LYoqLC1Siz9MEsob6WGebxjh8qrYa5Tw2BknWPh",
  "key10": "57rCQNhkR2c2shWjZd6bnxEhjEujUqDGmv8LRKgBeiUicvPWZJKNCkoKFr2gwLqc9zKrW1RHzfPL4yesMKwiJgN",
  "key11": "4nQ9fgFiwHbygn1mG8w7ULzZqeEDcUMQmzWv3PFbdaNL3degXxZxmgugewVCshGYKH2E44vQRkhX6cU96bPbTYwP",
  "key12": "4WGnEiM4T873pGtc8qeRRAPqXrrBHYyk9j5Eh8qZ5idYAp1acjZ2Nm8MmZuTuNYrTRepSypBHsNXVi9hNDjQ2nfF",
  "key13": "34BshVXbRxAiTARyTvhTGvJfd2bKR7Ex3n4cJkQpmvLoBdPwX1RMMDnfhq8E9wMvbLLvTSvQhq7YmKq3bEGeWiQh",
  "key14": "65NYDNo1JUTrhAvwncCTaErW2Bzm39wYBJLssaahdQaeNELbonzMMTFALcpqCAMHpzV3RRKek5r4GbmY3DQKXs9s",
  "key15": "24WLnJRM3m8P2vnaydtVCBmn2gMvR4Jfof5qg2YuqX4xBXmDHKqrMGqX8aKx76skNW6hQmb8nugZC6doX85atEYU",
  "key16": "3wS9mWpmE1abu34YgiJ99yNBV5tQunMqa3JUNszLZcqHiJVPczLgqpwNA5xRcKYAWe5hRh6rSFu4pJ2MXAw1U3Mx",
  "key17": "oYayWemsqD6NE5LsVazHGigF9kgnYaYyVA92d2xvJbhujNRCFB8pZLAHcim2L2H4pR1JtABRRHXSEN9MmUism5i",
  "key18": "bpEzaPEaivBKUKSff6mgoNQjFrQYqD7JNGRxPaDjaNsmqtfBu7Uh6QKWHkpm1MpagNzhXtLKgXfMevuAKerZhS1",
  "key19": "syJRjZeQQ86K7hejvm2t2Am1tbFxNpXHCqxUS7vgP3USYdHjhYYNt7H6XnBkdt1zcnBtp6e1Sm5Z3Cr8kbhxWid",
  "key20": "3u3nD4hBzMDhGwgERBQYszb79sRjVg3JYafYR9jCd9TK4oDwKdGNnGHNCReWs699y1Df2REXuq6YFm3Bq28djNz5",
  "key21": "QuamSHEceJgamKdPVMDPL91BkDNJWiaq3DLmPQG7yNSRFRt7rPhZkBUVFf7Be6CCM2pY3SppBSWN1MNCd7ex4Qo",
  "key22": "56ZrtT4vEzyizFMe2k3kkpXWZcUSvcRPU2tN1jcMhC1Hh4B6Pa7i2D8ENLrbNWANLeFhJX9JeGpYKRCaGDJr9w3h",
  "key23": "3WRZCi95Ev9GFhU4FxAmDHq8Lofn4KRWrKKo1U41KBqkSZKvKgrTe3CLYv8W8BeXFCSj8gB5KkhSgeQ4reTZpk68",
  "key24": "x5UsNA6LpzLbkBFfC5SGR35EynwHFpDCDoAR6H1NpZfrj3Ua1WV8acBrrVnxhWhqGkWxMivy8nKv7qLRdPZBd1C",
  "key25": "5JpntdGXkMsst7GjxnTyJCP1VqpHvRnDm43jox7BfninMrp9jwJATtWnAYk7q42o83tidvnhzKHpKeq3vvUMUBfH",
  "key26": "29G1VL1bPqHpYMntYJbtXWRjrVwGEZGRjTR9j8CBNZSabeApPmaD7M4qu2y7byfojr22bzcWUYUcC5BEP3Nt8tf9",
  "key27": "2iYeBR5jdc6NkrfWMbY6GWkZg4xcUAScbXBZ8aXQZyDCV6oMcriYWgr7gSWjrqnzA17T48sthWtqLzXgW2cvKGx7",
  "key28": "5GkWVHjhBkULLWyRJxhh4Q51SsjrUc7YesZc7BfyZPr23QvFeUByHLstniyD4p7xGWD6CGkyGRp3GUFVgCvtNtce",
  "key29": "2Y4CrYR6XvYqS2ebomraHjRX7B7wryey42Dvi5dYexxpCF3v6jTeXEagHm8whR6YJmA248mVtAjYqm63JZwp2nd2",
  "key30": "4mTXiRmdnJyWFgRMZQU9xCcVWPnQMrvLiRWGheEvUCm2LrViUj78uajC3GJE66tAPjBYdxnFogi295wG6EWWM5CW",
  "key31": "5Yyo5qxZwdrriEVmmK1kwRrCzGXprfu3NjdkvCTz8n5MLfnieaRVLGL4ZFuUJkFSLTWoYtb2dYJMYwyPu48XRmoU",
  "key32": "4cTTM8Mv13RX6QtzbYNHkXPwAju2Cas3cdyeZzieK7NRWqxmXTuP8CsFCxUaxwBgDnCkvNfAS5EEe5bsihru1QxE",
  "key33": "4ckEcDj8jxgUswAXAdRtDXLXoooJXUn67v1gzMhCHQwkLc6xVZ8wigPgMF8AaiKCQ2hTjzL348ZWwyGzUakAPb3X",
  "key34": "2Dg7fgyW4dyXjJtgoKjeG9NxxcvtrZaUbLxprBNPf8HPHqTdBNGhKwb5oxjCCznVR3sZVhC31dJtnGTA1RA1hsbq",
  "key35": "53QPP2w3GQVHCasXuobhmTGpQgAZekhqDraZdiZRdEdPxJgjQvau8rB5oeMc61jDkDEpDNnfEcr3qju15eyEqusi",
  "key36": "2LKowVNL8BiZevwE3hqNACh5hieKa2wosWBDErJQ1FCpbEc2HS2SiQ7qb6CJde5nk9fgw7iPf66R7j7iyeZhpJzc",
  "key37": "4iaBeBgqELnyt6iT1oSAcJ9Qhhdi1pavR9EHmy8dv3t943UgjPNMUWZf2dYMCCmdnj6tJt9bsyQjGoVSkArWuP4Q",
  "key38": "28rUYwGmGJRPftvkGaCgt2UExmowiVKntCAfdFSiNY7Rn9BfYqZa1v6Eb4A1YPemGEwwQaFsuxCLspfCJ9pPNBzm",
  "key39": "5DrHqPjk5yVnMt7ndHbEUafvtsLZ78nW4ntL9xt4xrzop4SCrLfX2FY6WMvnM5scpiVLXUwBQrq9ahmmpWxDdFsy",
  "key40": "3b8tiRk43XVfHxTn1c1dWgRsinuiKF1rELWzqUuQHdTymRrvRjdvXWLeu3pk3xVthsuTRWAMJokhFPh4vFXn6D7m",
  "key41": "55RZgo5WhiTaQ2bqZ7N37Mth7fagmSFmWcy3XNB4i2yUa8VXSTzTG2DUhjWcZMTD9TWBkegnWQxHVipjEz8aMds2",
  "key42": "2fGaCfLNHvTqX75PqtMT5Fo88GZc2wwsMsLpqMSc546NHVqH6JDjE1ygqdVWYpF1sBfVE6xXCqhL3scwB7ZQKnwA",
  "key43": "5W91R9b5GLuSA2oSM3oPZav8kFoyzngh8sgxiAdvZG2MuoC61uGQMJcrPfgdadHeTT5gUdMEvAq48xvbg9FaqjX8",
  "key44": "AtVXFT3xiUMF27krbxQyrVFk37WSb582h9V7Y5egzVmV8qKh5eMRcCQ1NPmbagbqT6gLWzskuLVC83RKA9HDnbt",
  "key45": "5S7YF5zYrG3YdYXQ7Pm22kk4ihHMBewsz5xpvThBaZm7ben3Bc7Tx6SoFU8fM9LZWsWoe4j6uMoBKZ8ZPmkvD8uB",
  "key46": "cnVyN1kkwmAQVRUPveFqkUeASd81cwUFmL95Vs2eWSBXhW8FFmZVH1jqHDUqnrNWP7NHnVbkjdgPFzVHTBKQBSc",
  "key47": "Th4tWV1uFEHJN16Fk59ub3dMoabDr1rrgsXyEkaWpPyrfWo626fyVnk5T86LW4ju6MRCytcTBHvoN8EDBSg692W",
  "key48": "ph13Z9oDsmJk4RFafc457M8pjPPi82cGVbZoVWrjYwfSZGPxq1pXxM3HiSAmQ6PJ5qcWLi86QKTRHtKiFZgS7C8",
  "key49": "2PLxzTYjEZJqgo7LnMvkj4FRGQeC9w4YricLVcLJNBLUdqMQKrsToEBHxkaM4bLGv77SeLzvzMsjqBD8QCkXG2ZX"
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
