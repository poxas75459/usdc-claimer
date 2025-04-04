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
    "64Q97RkGH3DXZav7iqb6tVWREK7oSm93m6Q5uLxeqXi9WLNS1Lx2rmRg5kxWiUukPPTqwj6WUGpYBvbJNYtHsVEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4pgupBVTxbsbUdyDedmiRe9sDtGEXrmTiUf68LTNDFiacLHFw2YFQ1gMyKzZ72NabY3WPaX4YyEmjTAM5kwUPr",
  "key1": "BsaT4pCjdrwjfdngqsPjwsT55SEMixbDPBBBfmotRt2MA7EnWA1ijs5YxDcRZqwH2XDtB9agnAsVoCgmu99Tbrv",
  "key2": "4MKpHjWToTF2mYR4NeFicbgMmkhobwcRyuwc6tNS5nnRKYdbkf1iKqBsfhGGdEHdXZczvQHFNnoQ5diw5gxBaH5s",
  "key3": "ThpdqK8kFfbbUM1WXD115TVHFJ5K3vb5cFwbrkmtpD41U14yo6EUAXqdtV2X5nrMZGTRqQhtXXjd6rE9EDvVF8R",
  "key4": "mo2njUoLSgNTMFKr5UbMac5agEoFKVWLLoYnqALDuy12pi86mNE2Wb381zeiJLc5o9H6nuaieG4JBjtAgth5wgh",
  "key5": "3nyVnh93YSu9ND9rGY75KzzqfM9uiHW27kBP5RBBC1cmupZGvhJSZYdTGURQcNV6Tu2rAQ9zbgP1Gvt1ZbzQyMff",
  "key6": "5UCqY3d4t2iSGDgKNUDfK9T1HMEGb4tZHaRikwxDQmTnDTMPjDeFfSbfswrPeBRRw3MfJi5qckJvQdjCqJRCoaRq",
  "key7": "2jyCYA7Pah8PpS3vB8TNMpoSgSFC4YTVdUdpRN1NrGcAg5eA3vwuXQCyiopiRKXUS4x4A7jyPB7X6H7yj8L6byvh",
  "key8": "3yVb31Ek4jcoNkVTvZdf2CsS5fCwJStqJWN8oDBRhNKPxFjZZ7Svd2rbw2Bom2b97ciAx4n6N6TQkav5HHPJLWkS",
  "key9": "2uj8fGhbpaFwn7SpFv5a4nEpv29zVhnduv4yys1ftoqRwcanKLhQNHe9bEYd8Rv3CnRVeWQqWcpvS5aVbHMWAzMi",
  "key10": "3nffHCRnKnpCLdDZeCboB3b33hWPR9vmmQtCtytotx67HX5FVzUEe7yz2hjjzFw6MhyxoEoTuYiYKgsq6edmi5sW",
  "key11": "2xCTzFf51EvVwjbJV9WGJjoRDJCkAGkAreG8HBXs72ybGBFb32tSJwt2kHHmLbke6F1z85FRrjkXyHJAUnAaC8Td",
  "key12": "5b4P4HZeARpCKw9papkh5Fr7LB1tuKV5nwoX1Ucuu9b267GHrxRacGS4NuWMD8HNLsuH8rMsDhmaJotB1kaopcVQ",
  "key13": "23dtSsAnkJ7N1MzxhpV4B56buPuasYx2b921fmqUokgKxDvXefGYF7ur8hcchH2Qhw1G58AtKG7a4E4kB4jGutoH",
  "key14": "3sPjUzkD8a9GXe4Cr5FvDDuyUzZP1YzmiE7Mwyf9abQyFudpxzbUYULeX1eC6a1TVFjxtzw7CSVWewvtNdDwyxvH",
  "key15": "5NL5aPGvQaXmuneiFyFRWdGY6c3Unm6YUajQxduk2uHJmyKsgvnJiRymcsWygUA931PkNGQ8giD9sJSwgeiPWLf4",
  "key16": "2izgmU1ebi6L9Jy2ZFGrmz7yeQ5YSXXJ1pkdeArxR3faAzrbsECZPqoreKmPvCk5T4huLyDN7eKxgyparmYqRU2V",
  "key17": "2xHFeGkRErktSrzaC33LmFwTibXjniwKH9cnprV6ihCVL13wCQyS4kkvDA5igwiNRwqFTDUY5yzFN28NDeUm25wn",
  "key18": "5MPiFF9g4BRThnDTehigDN7jyD5wmy5PbfegSnvhFadZ8CT7btGLc4uw722Tk8fvTahBsqFTArYorFtokRXrgpJH",
  "key19": "4TMyn81tzpCdmuamjtXZHEcgLn39sYeJPoBVWAp5M3nBSE2d3dWs7LsiRvm3sjbXwy9P9zQLfR1h9Rc4yHfxgdNr",
  "key20": "q2ePPyPhK5F1c1SeLoxGjky4T2LawR4gffbeVdhf6yLBSRnRXEHWKmrwfwyv1dRkoctsbyZNdRfHSVs6ury36LG",
  "key21": "3e3cXiymi3mtwqzqBM2GhNT1YNxLnJ2Enf2btziLcbCis4jxJTPjELRLpvuGzagevxkBQ4DzdCjisnvLQWLBmyVe",
  "key22": "5o3FUCz5C4Jufew51ry2NiiUycPHhK7CLwRhagR4ifgZifvFoTDCc1dPFizDBaJi4KHxydVSdmtrGm2Pw32jJF41",
  "key23": "4CwabuU8cG4M5AHQokJkZsPSJUHyTqDHVUreNmCznR7GSpWzt91PgZp1msG94jCZkqpinzJNf8WwXpTQFAirfCv9",
  "key24": "NbSiBgvSsiSjKqeMpnY2np88tipajRoZWUAf3asnbd1wGhWGs7cEZPvW2LToWraGES4CbtvZgLqUXDx4qEAoJFF",
  "key25": "qcSr6EZzyjW4m9F5CnwWDK3tkt725wvV3ZHJryWMToSwyF9dgr4ToNCtrpTugAER7r9QEetPmnQu3dhXbBfwfRf",
  "key26": "4XA6FWA4Gy3CyzEdRD45yavBKQNyUsTr5wKJoYA65b19m1ETtS91WeHij62WFkrxQaJiT9inbqi61GSMP6bFd8dL",
  "key27": "dWBxEaQaBRLD5qTThRqpDpxBkk9TjPPBQy4J8TpHPpau5dAhM8ekvuTRurcq47prYkwqoikMdT7c1n2J41DgbcC",
  "key28": "5E9cNQTppXBcT8YskUx88AbTLQ8ALWzbiek5stffTu1UxQ13wDQBPkJ8ME9B8p5489CDcfddjKjFirX8nCPUzFtB",
  "key29": "2KbV1sVyqY1iCgEoLu2EMxiBSVXMWVuiWQdBa3r76QTXVQ8bE3LRvNjcbGk67Atv3tE531skPh2kXk8hAuLZHaTc",
  "key30": "hb5Ak3gMfBMqRYSUR19iJSR8BLdwejP4Hh67C9hj5Lk9E2W4v2cmLzBEGfcgyz7ddHseSgx1bqhPBKbRmgEPy7F",
  "key31": "26mA71EJhsWZo5rPq5xuRQzxvfUPSidVMfdPHE7vjxrpHwDWEvVnWNevMcybDCqCvXmk6wqw6dLfp6Qugfk9TUtu",
  "key32": "2Pa8kczmwwSqnvnUmPeWQJHGNKF4Gjt8ekWVRgdnwwV2pv14JjwkzLtmyN9ELbjmzHdSs26LPFP1jTcFs38Sgppe",
  "key33": "63D5jvJzaLWWTsnGsq43hKp661cds7ULB6rKbR82YfDwEJGuzqbcoMXcoxyjPgnVyD2HAM6QiehBfHmK8T535h3v",
  "key34": "4eujgrDFGoYtSLktnXenDc8uAgy1rgTUY91M2xK2BK9YLkhorvXvuWmtNDMzd37rvAk753rRFajRwP8gtfw41Uxd",
  "key35": "3UBdFXokeEL2Kx6vG9dhbpM2LNkC23DySd78TG9YufLko7pGNHoWAGXiNQGBHPqbaUDurxkTV6jUKmb8q87gzyHb",
  "key36": "ZSi7PY1teRSay6pgXWfYGdHEyx7tK6wxcZJU3L9J8A7CqgR8q9VcngLJvtSfvaxamCbRPCHn6vKDURuxWvUUMFj",
  "key37": "NoZugtxgQB7x9o35htb5ZVpkK2mvfsBRMjYi5tFpLh7Xt2pbmoKPVvLpLr8gtqreLsa6xKeHNpSP6HNbYP5Gip4",
  "key38": "5dRTJ8jswwhdr2e8azv99WyLWMA1d621VWUSEmuLxPcbYGyH63RBvwwf74TPoRuSAJMuwfFaurRKavRyeWd1RaK4",
  "key39": "5yed3TsGz1QD2L9eUyDV6gpnUDTPyfR3KyVonf95FboLyq8sccgdtciDYksWgZeXgwBt1XgKzaJJvAqCrVTKMTQV",
  "key40": "4DdJq4BRbnB9VpdCqReEQNmSjqqxbNrRp4x5eTSQbsAtTYCk5AoMmy5wppCimR8K3qs3oJXSZnkCNbH9sbD8My1t",
  "key41": "5hVtQMU6ksXTe5GLQHTCDV78uA268ktvquEW9w2EfEmKKNv6f5WpRwR7G7CFqHbuNwEmfQmXWzAYMhqwwrGNm8bq",
  "key42": "5VacmDhedcMPhDXHdj8xQ6SLAGsNhxJf2dv5PbZnvYKqBK1xoXC4SpwvBHQaod6fDnVJxYnbfweCFc7NPs5Q3n7r"
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
