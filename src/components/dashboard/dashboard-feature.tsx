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
    "pXXgc3rEWJ3wPpuUABU1pyeXVMsLpWvDz6SpKEYzTsYJ7cE2zhE3Vx7Z4v1S8hfGHHWNcbuzNFk6zMgub4P8F8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fQPSpyKRFxgA4x8m5tsfofzu34xXSRhvTqpWETqN3MkkXjbknKoSUEiTrWMx4pj3Hv4P8RoUJ8ij3LLs3N3Mdq",
  "key1": "4CAm5QkV8QLas9attiqMCXb2mAszNV57Kayo4RqDDyugf5tdBJ9F2vJJ3zrZpKSASbwh69P2PxLqqMSfp8kWcBRR",
  "key2": "4zRb7PVZLRWhVwtfgFLVG9U3o94xPFWP7i1qwLCfwUvPBx6YTynD9bmRNEVxmQRwVLgVc8X58JMTWERB7mEP2MG3",
  "key3": "4m1VxPHdVNGACepYLZqxjTBLLTPsXuVdKGsJU5reDdwdhrVfeVzipcWURbeALcUykQpvZduVAkQJhu3Jw3HXKaWW",
  "key4": "5F8JLvvevYQG1hFYL87SM2FM5jkhZzoXWBgFvu1FfWiQbGtf9867brt21jhtrGso8QMsBveMHz36sQyeHAMfKvJs",
  "key5": "4v9GhD42b7HNczfzmYRKWPJdgwHWr3FyqSkkQH1cexmZjHkpkNj63yRYrGyH5xnNHe9cgHBUAwFQpVu3do1CGDUX",
  "key6": "538x6Pz52BeRRhUxRFQ49aq1e1f3x3HBGY6CyMsza9dNy6GDkNoUKPBC1NsxuqqQGf6iAMt1UAHdvTucoD9cAgje",
  "key7": "2MwvY52gLaDiE1AZXozuWoxW4YnywB5yRaSQfHPceL3hS8qXdbzS4kGFL2qGhvgWnDRkGj45jVbtyhuPu7Pin8bS",
  "key8": "4euBWh6TaMHBbnsjmQMupLgfgsKox1gVQZ6WDD5Kx28jqGoetgfXEdFcqu4AAR6abWtcmbxpYtshratRLoMJmqAn",
  "key9": "2UvYBqueqKvhm2ciF8m8ujtGN4ttBpTGCHY339onQs8E7WcrYCm2TM5qg3PZiR9QnKNQhAyHBYPrhwtGMvGtaVNm",
  "key10": "Hss1oSGFmt2Lmi2dXp3725bpfMAjXdXavAEFm1Cum2Dv5gsziTHq2tNGPy2pDQK72jMcHT2fXE1rPPQsYXq86dX",
  "key11": "5qkKd6NR7NNmPrPFrLGcX4KjGY8Tt7K57Uvz7YadDkQ7AmEGd4AJzvrHiTMSpr9BrLfKTC25TTgGjdoM73XPErrP",
  "key12": "SER6Ms5vRtnu9vB95LAT6p7WJ2am7eKYaCpZGxyuU3cAggCYHEZnTsPWSNmKa86DGSNbfFB6HeAa7NwgHUE7g1T",
  "key13": "4zJ2pc7dQCUE3mKLgMeLLMXzDzZSSUJAFLEUDJ6mYjTfST93W9spFMoKmkrCrkJyKeKZh8e67ksUbEf2gonQjexY",
  "key14": "5ndSdgJiuxaK8yX38HWzwuKXmYosjc3FQ1SyTgekXYNoYZz7PQNZn5zbe1tZsnXkz4qYVzSWMu5Mq6RQi5syyKfa",
  "key15": "4Xe14gPa6gHeKiNrS4yepE21d466p13feYL3LgF7iwfZjGmMMRXwn1GKiE8TuU1NgUop6r95ufgv5WZhMrxaXCDp",
  "key16": "5gRKf7ykzEPiUKjmHsrqUk9x71as33beD1Hpj3t3qtW3LPq9rtnADKz4x4XZGKwECEq5VXWjU68723VNRq8d8RZP",
  "key17": "3uUbUZ9qAQ4Z2x59vhxNhosAdjKJJFcGXDCsUGCfswdTuH52JZ23sKFpkgkTRXgY3wFUKBuWZXxriDL5JZtaeaBr",
  "key18": "cLiHvB6DdHe35Pde4JyiNm3b1UvYZrvRDjM9NrH8CF8Fy828b1MHtqDCsUFa4Zwe8AgZJqTeTDiE3Umeorm9HaQ",
  "key19": "4HjHzwkYC1RC27hBzBBfYB2kfcpPM74DnEV3RnVecAwmopmeuvoeSrtSUtzzhzy46n4DQBwChwfYrojcjKbhq8LM",
  "key20": "3r7hFSKfudwpc14Lc7sben8GeJ3h8BSQUWdCHDWauVYEDbwxpd1wcx6yeZZKoEgJKNzaWAeX9hskjNmeSgKyu72C",
  "key21": "5vrVpipY2fesr57D34MHJufXK3VVKSqEryuhhFEsBQZ3r3WwGHHvKrtcHb9dhRGWDeX8visZxuqpUxkj8QwUUhnh",
  "key22": "4C6tSgwX1jAPdKjZqsmMkjJ9j7CFc5tZiK923DrV6Xj8bRtepUJ9K1M6FbmFMChK8RHARB83XDbxGtUhQewPQVZM",
  "key23": "5MinnFbKA567y5PHXckNmDkeJjWHyg4JdZMXzZLAMBau9LwDbz2N5RWjLN3zuaWbvmvkzgf273mfjqRnn8Ys8iks",
  "key24": "2b4CGfzUmdy6zgcqw8UwcUAfFiUoFq6nqSCroPx5w5LsBYD6Mu7S2fSim7HHXa7ueLQSz1tmFVgn9K2UUnfA8No9",
  "key25": "28C6vYE3tRDwSVKvmSAVTVXPriQSeUe3gCvboBkGtVnAEpfhRLgFweHib9vfJnBc1gkGR9KjPCNgT278miT9KL9j",
  "key26": "4a6BF8ML2eskQUzpZZNj7w3vbPMNihRYUq2Qxsz1kRvk1tfNWCvhaXfxcynnrR65EKUKQ7boiMXUdPYsFBFaTxgj",
  "key27": "5sa5nPG3fVV6KhqfKAHMAyByT5SvgVC8fmnGCmCaAiCTBk1dgnXWxuz6BgvqvdBwdNhjYAepCvhUkFXrSwpoG8y7",
  "key28": "2jenSXPkUzJ4jjfaku7Tmybery6xyUprHsWWteKVMtpCitCVatPWRJqXbB43o4KHZXNQN1arDK6fgc1A6MEkqTq",
  "key29": "5rrGFy6CUDFDo4ecDd1w4hUBfiTXRqWf9ffynLaeMxUBXeWYLCJkmhrqS2xLTCxXpkvmnjrCNQVQBD5DMXcRCJBc",
  "key30": "3y48Py22VU1FP2oRqRudeXeNEfi5YasTC4B9v5SQFQdRnLMr2vwpuSztVVcejmDXgoVukHSQ7hU9TVp9d1tkK9Y8",
  "key31": "5sanTwWbv9k5YHbbH2pKFk3BUbxyFMP1Q86r4fhZsmYWh3wScZ4pk62WR2RjioqMpj4Nz3NJkp9xJQmqhBv4uPDM",
  "key32": "iDitycAd4UB821d6uCMSm5d7UfxSyJJiF9MAJczkGohUzjyWFCt6BSANyNXyR7z23PnQPJq12TDRGeigc8XqH1N",
  "key33": "WewgcqG2Wbax8oT6MjYktoLGuoxaRK5t1EkgnRanXGvXNbcAUFzpV6ZApZWPw5TPwFawMmsesqxy1sDqygpLh44",
  "key34": "2Qy1fmvhL2NSX4owNYQa9FonbiJZ3bi1o8L9rZiBDUh7PNEadtq2pe5DsGEEvTMsgaurGRCHhEzCnaxtcLzA533R",
  "key35": "4tKpwsfdq3zHaLokCwjLjSR6o4We3ou2ZYazmxySG3cmTwXt56MZ7wgaJPfc8YXJtAiXv6C575seUeRMdeSBr1aS",
  "key36": "2683tsvKNWh8v1fYvsDq9b3KUHCEAX8JLQmX9ockZhr4MYSvcSWxQWXbG3MNWAkKZVypWL8SJg1PR4cXuQftmbyb",
  "key37": "42PmMzrbt7BWCapnWgj7CN8GqcPqVM5CHJiFz9TLq6nRvqnnie9MCKtmXBDbUDVhEUonyeidogtL9LWWse468Gv9",
  "key38": "s1XWhrR1agSdQzNG1vfGJsGSZGAEep8Nr1yUfkhWtyEArQN62hZZh8D2ni9wygFxBcz8jWaDTryBRCdVwGUkZDs",
  "key39": "5ypWcvwNp6J7GzXenb3xBP5isC2AxbR8eHfqv1qrAWgwaXwjTsrnexY9xwN4LJvRwrbsx7zMU5PCYgrjzfMSadCm",
  "key40": "2fXp1gtZMUox3MgHs6jr7ytPKATzZgFX9AcGuvJSnPJCMbpdNUNgnaKW8XMEmDMaNXcsm7vkRd1MRRsF2jevP5NH",
  "key41": "5eFAvjcUsyqswMZSUUrBPb91qt4MULQZuqtUvZJeL558UjVTRmbPeYCWivyRu2Pe9ZPkkjFrU4aRrDf4bEtczg7u",
  "key42": "2xK45VgvjktgRZBGdJfujGoMQj4Xnv8Mkfubr6rut51gDSqvb2DQrAW2V992oUkibSp4VZMDZgYy3XBaprY5G8o3",
  "key43": "4ZxA7dAk3tj7JqMx1MbihEZ9P5b7H57W9QbN8QyWAuDkGjpqP1tGEmt3e9EpzhSJDT6KrbJaMPCRARf7t6fGPWV8",
  "key44": "4EKjrakHy21E9TJTSBs1LaRV8XC5naVD4UWfTTqM4Q7uWSn8i5b6jgMDjMEYXGBg5BsUDjECdZCPAE7nt5MoxpS8",
  "key45": "2HRPg9V5mWcD6qAGfiBWjhS8BgUrShonJ9m1LLqf1oXc7iexj9UwWCnBEBf1azMoPhwHCH6yfrG1teZg7pV2X6vq",
  "key46": "2B9qkXSXgS7JfAJnGAtWj4aEdYiH96Gpu6yJd33Mmo5HX6uZjvYawCVnU9A7rJhnLTQeDe7VrhxkMKNCq1jsE2Bt"
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
