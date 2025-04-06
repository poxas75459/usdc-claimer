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
    "29HhhpsXQ3zBLfdVrHgVhiVUfpRJyma4HKnHyGjK7BKUvAcQ92ixtie8XzLRTrwiM34zmLmyA6uBRJMGJWs6zf2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iyNgMbpAE8FVXtY7g85EFV9Eh2NxA4XK72pmi5WM91NM6hasV98FKB5TZYRhJFmKGa9zWu45h186vhX1BKTtoyb",
  "key1": "2UVggjZDhRcpatQVp75RifHX6mpUPKCP7u1noWKwvZoCPqYx2RFzUi7v11LW1REwiFCzt5gjZpoVpgPszcxtVHob",
  "key2": "3Q87bdTVsHWJuL9QoXF17hZm2y4RMcbBNhTQtyLS3i462oyqemVcr7EgP9HRPm8NiRw4sFekK3TAH65PHCQxkaua",
  "key3": "3BoYJsJ47vCyMqNJDVuxFpugfPfqdrZKKjERMLvLEmT3uZLjQPAFzRc18n3yhw4SveMaYtBgigRmP1Dw1x6iaWaw",
  "key4": "4K1NCS2TrbJddYiJngGrhv8sMNnzh261PDLVoiFFrVaPsbyvMaCV9MbTi89WLfsL7pL34zUF2FTiY81jfg66yCF1",
  "key5": "yvt7yTvZ3TisUozvFDHyhTLQZRPb62J453ijt23xDM5D34b6Ei2DaRPAcn9DTMESLcqGnUYYjWexwa5daJFW7TE",
  "key6": "24Aj1ikpnvPhLtrUEjCUFjA32a9cnKn9BkLtKuiUeVF5FEcaobsN4EW95tciHySdX4byiifCCW5xwTNHwW4LBAnV",
  "key7": "7mrPcH2Vqet7EY4PSU2v3Z3iDpWRXGL3ARkpboUwNzhLKszvgEqPfTnHxoL1P8bUmz4Kwf2fTdFjS1n5XNLLqcc",
  "key8": "3wrfd15iQgL2GwEJ5uFGDxwV2Qnw32CRjF6nDbX9wXBhaxnz9yw9wsifkCRdXqgrgU4TJ7WdqKSk2pM42yjNgqND",
  "key9": "3EwiHK7yYDtcafgBC2QpMAecuZnfPwe3FvB5LEPT1zAEdQa7DraTGybaVDQG8BzG8M16iezT895HY29kh1LymGSg",
  "key10": "2qwdh7Y6K8r7De8vZojRDarD9tpZmGiHBZsX1wTGYZyaWfYpKPkyJYrPd5HbzAEmV2SPtbr2iU68DY9NgGsrHcZ3",
  "key11": "3xeHqS3RtKqbXCHSxmpEubuM1PkarLuz1vQpDkRdypNm2D4kxhB4unoFQ295qLjS3S1dfhqwTCgwfFZcDniDbgTi",
  "key12": "3e9qxXfcN8TnGWcbm3NJ7avGGyzDGDXzY96QK3EWCa8KQd4anJzi61xpSckfas7hrXreK7NjPs1NjHHT8TEss3s8",
  "key13": "64Z38MKZcMCuxqX9Eyj2FwncVBe7Hc9VyFEv11H4sGvJncSEBrzmXJt3BP8oXwp2u1Jzj8F8ZUFKz4UPC8E4rSgA",
  "key14": "2iczhzK3vCVp5qi4daGUt7dW9psy5MY6Fv7ogXZooEHZqXVBJMMREo91AyQN22t1cTKYugWeaN8W2aA2FzyE9oZM",
  "key15": "2fb8vvc5yuhtPkPmhf86wNYE6j3SyMaqE3io88yYdQgvWpAKXBfHwi5q8dvzhyTAfnGL8DSKZAnqHnNwuQyFsWpT",
  "key16": "crWAL3T4MxsipTXmsKw5BBGiWTkUeSpB5CXm58d7sNwdYTd94z4e26jFLje5YHzDYnJ6V4HVZfTTa9G5KiUKJZU",
  "key17": "5wqCbf6pk9eSNgMuMT8extPLxM4rtp3a8SL2bis1CvjnZWamqcqY1Q1nnHwXHt98CTabPhJrScpC4aJAvpApQpHf",
  "key18": "3W2FZgHKgMnjkhYLnqytqRChTP9ZmAu53zGeKYKcppcAfSS4cpuVa1HRupY5MMawUQurtY6AUPHJAxT6cCLGPqQF",
  "key19": "2ZP8Ep5oBMRv3s9za8o1K5h8mx3345s8T8NBq1euyRyDqnjDc3wPXWzMmZZvRnJtqnL7qoZbELhuvLdDxMEaQr8L",
  "key20": "65XLEZjeS7Zq5zaL5iizPFuCMuLB2jG4g3nGTH6THq6r8AW868whipF5FrEYifnB5fFkYjJJoQHmqs74LvVaqXU8",
  "key21": "2iQJnAo44iRtdBFk3wmEAmZkTY2UMmSAMsS32UAdPdN2d1nZ3RKERnaphVxJybH5agAT1EZHcViJpJebRwrvhHmN",
  "key22": "2jrkPk7va78WosivviMkU2WWmfi4CtdaJBUNtxtytP6nd2p3SPLbX4fTaVFqdifJqx8YENzxH2uc6Di3MpQyo5iq",
  "key23": "yCX2tgv9Vr5jwSBEAc1NV2ooofuKrqwNwspTHBswKi6uNkm3ZMuj8zLp2J6jNbqzMAoB68yHEGj9uSmABzMAGRT",
  "key24": "3kJBBKHsf6EMCWGVQMWD8JsGcuuoSSu7aNUUZdFtVo78e42ihUsn2EaPZNgJ1xAucyGTAxgt5BbVebCwnVkdXV2r",
  "key25": "5CJZLdSXMkG1YEvtM6Dx3t1T165MAArSkKQkJXEQGhB9i8rWKHE66EYERUGhbSbmA2RF7WniK1o9Dou1N9GyzupY",
  "key26": "xvkE6Lx91dmL1bGfG8puQEsG6pTPPAov9gUWNi3QLvUtBXiNX6yyEWUVck1wtWsPwiM2DQjFWxQJrAwgqfr3AUo",
  "key27": "Pt2XwL2LWTkx6zBjqKJWFu8QZVyXAdCu13JTXvFyQHDepjXMpnZ9UsvneDX879RLNsH2tsPR4phZ3xVD4Ax33JA",
  "key28": "4sz6xFRNWKnLXxQM7hauaVVAx1TTUUDgp1rDga51bPWHRc7EFSPJ55m78tZ3nE1w5KZ3grgiDtmZVRBsDCmAHSGR",
  "key29": "61qFQSXGe7CSoH8PEPGDMad7TCcURq9LnVEBew8iHxn7n5v2kyorvFetRvcajXVXZzqxtnZtujBXiTys7K7o1yUU",
  "key30": "4bkADM2Fh4vvFbUEe9g3TQ1UnEK2obYANFV39yi87UhTgmocVWHtxE31PGXhsKKCaFHWN6VSGXZ1ohwgHbeoDeKf",
  "key31": "3G7gkapWLXWP1NpND5nhu9nnXT9auPk1cqpTW1c2f9Pu94hcji6iRi4KqBwWVpZ6ywCiqBD9WHJK4YmtzRohiUwG",
  "key32": "YExwLtmA6GKfwXYuwtmcRdvnqRQK4nbUxU8TCocaKLy1JbhnkrdnPyxsfo1HZkeadvr3JeuRTeieYebNZFSQ53u",
  "key33": "2Y2UMxpDCHoNLEdsRqUzmFs488PSZB1kRBhTAsHbF8wjd2u5rpxF8xxFfiJYurKU1rNJcBzaFiiA1EkomeowxCqK",
  "key34": "5GjycXMoTj7v1V3kAcJzmzSu1FQWqXNMQTgJ4rLFgZmxZDdNYUSue4JhXrf2ASJxcLnzYLPNLUCsGE9sTpNktqo9",
  "key35": "3YL4EC3875QaWrhPGLKehDKhtxsmHGFmo5Z9vbfwDuRCafrLaC17h6hZkZdxwSD5WKLw5b8Lqvy2ZQG8VPwVuRTM",
  "key36": "65tDtNfYh1tte1cLPoPLmfqmtJ8Js9c7ioeU3xpAfseNG31QWT6kLnMKsfanWLyACgZbrn9iaGviR2chEdt5YJdv",
  "key37": "5qr69bkZcbsPk6fttq5WnKLKJ6wwEMeGRTcRbV59BTwjM5fNn2Zgbv3pP7Gxr96D1rQCtexbbfmjXGLzqhRApREN"
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
