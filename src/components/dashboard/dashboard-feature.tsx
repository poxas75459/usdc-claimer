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
    "2oW9UtH7xGkeQwe2Xq9hBCtgJfDLxjzuAskWaJzWwWDsRP4FLzHzoi5rrGMQq2JhSzKB4T4zKuwrMgqrFci5AEjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J1TLrwRDLv2hev8hwrZW3dVApsqVXphYqZF8xEv3wPouJPZnaUA4MBxH9k11qM6XeTzgcAfzTgPk5uKbSvDRbDn",
  "key1": "5pK5obnRzt1uW9VKVRL5K8vv6GBUj7Pmva9pAuttoXEfJ74cqhQVGNXTTKCFYcx8QWjPbmwdyGnHyWNgiQPbtuJv",
  "key2": "2qcJLxAK6rFZg7d5FES2qRVv9hK8qJD2kLEuMzo9dVVe6NsXKCYZdnR7aqEojQsnpqPnjiWZtVF4p8RddNJnwjf2",
  "key3": "2dWFmkzu6mNZMV986FxyijqY6oWVE6R61tAnLt4caJ5K1ZN57mgjAeRLx7iqs9x8Cfmzz2hARN6fsfUynumog8yD",
  "key4": "4nQ85uB624GavpccgK5i6SUTXvju8s87ijURJQsMotHCJUx6toTkUMfVdGTMkJD8TTz7zggnA9dyfLoy1ikFYhY5",
  "key5": "2uSLqNUSxD18wB3xt364hDzsf6TVtrreE9Py2r5eTCWfSkcJXtUHNuDnKojVov7CPsQtLvkhCp6bNaePRjLnpYFt",
  "key6": "3rjs4X7WmtTeMtQRn8Zv51iyJENcFoWa4cGcRFhw1o5WxnpnR9Xwjak3rLvt1JEFaMWBTasJ8TzMLfDSr6aDss6T",
  "key7": "3DQuppPTWz64hq9mS39ztxJqcxLKxFEojSJYbwPUDEVvqqYaGhkNxbVQYYqhhejiazdVnnFnXhSabv6rM4be339F",
  "key8": "2aPXCaib38QV8MPvcfYnSDUtGzcdWnMYwftNisbgx3GhUN2AXCDrH5bucW2K4Yn94PPoC5PozcVPGzwFVLNLsifq",
  "key9": "3vYg7UtEp4EXXzDm7V8tkMwV4FjxZ2qjRqiAaVpjxRSiWY1Xh2MsXyG3GwxrqQHugcMWSYLYHmZTTtrtYoDWkuuK",
  "key10": "4ax3iRhVC8LXhfcCmf96HJ4Shs28QZfkTBV83SYF2HGtqWHgUXHVxb7FeiziMayztvmB5wpmvxSYP2QQSzR12EpZ",
  "key11": "24TPCRAAV5HowvLGg8W4VtP62yr2LXhxT5XFxNbYmyHqnvee512J1QVxArqFDNpKLDE5Dv1kyxZd6Ti4X2wehn5H",
  "key12": "2xzocTTWQYJhQ2VBU8dRALPPJ6uMCZcbiYV2CRrUS24rcJ8P6HmZcEyoZxma8khPTCDfe1RTZZjPLAF1UGGBDqa1",
  "key13": "3Lt29tSu93XJpPLcYr5bF9PVddK5kzx83H4HfrmfhcHc7XtTdvp37hoVWz8HQjv1UWqFZZSBuLBMtwuuvCmeJCTN",
  "key14": "2Rq1T2KnhCBsAPRGdp3hV7m7gFyfGTUHv8Sskdfg2CYamEFtLeQscqc5uY561tmjT98vYMf2wZy9mrTVNJWHezFw",
  "key15": "4yiexJj1jZwnL2KeyBnddhUGPtLpc7uw6XtRaHQnpUrCVZenJ2wgzG8UoSXow6L29GcRnDFnnwEXEGnNr4wcgYYP",
  "key16": "3LNF1CbvZTADXkJ25Xei8vu4Uxv8AF4MewZUXQ9fgwKYQHR3F8uN7fge52T1qdRV7sbBWJtwWU2Tkbx1CvmMSMV6",
  "key17": "3Hkb5Lzmy9CaSfbBkdUmgfeASHs9V4AtEyhKDeAoZBSPuTkE2PfF7p69JX6xxSDoi7GGkwdBkoxfJ7PhFKHjFDVG",
  "key18": "2V8sBWiYKxjtYcaTsZkFNVCSgB4JXBy8k85zMGJk8NspnRcsBTKSWTYYDGPHmDbyKjaii8sYpUXkSCBWBE3udiaF",
  "key19": "A4VU2d5yLUjzkbi9FBZ7eU4445wUjLiuu1wG1775Sx4VcXjUU1Mc68tLGnKRsBTQ2ntBcdeoTciJnKNJMfCk1Mf",
  "key20": "3f4RcnweihoAhA8Y2HaJGbvc67e2VsHyxTqRnHQEpQ87pb7EEdpEzva5VbzgMEtyYkb7LNNtky75Ym81viL5s2zx",
  "key21": "24UJS4ZAH7YBNKUJBG21FkgFDgrwm4ig2sWQ6sDQaP5VVp4WC7BqeKtdKcftVwob8Amem3taQYHjhtozr6b9J1hQ",
  "key22": "3q22XR4tDxWmK2jrL3LQHkNC6JgTCa8y8KhUMdVwEwmCkiZtGSPWB96xuzn3SzkjAjNP3VkAoW2irjotnq5tjXTN",
  "key23": "2bNa37Q7s1SWrfuSP94A2RApyMg91EW5qfjVKbqqLdQ2vqPheTNCxSfFD5mKaXfNos7eqZJJYdza9stRNYeBKrmh",
  "key24": "5rycU2tLWSnuEagdu7TarwpsA4cb9fEvgjtxwmiU9V9sFUGNWEDouvKb561hnQ69NkgUMcuA87wJHLPj9CLqYp4X",
  "key25": "Mqs1PMGS4dtDPRsYFaX2YpTMwi9kjtYR3u6JkzgaJpxVE6qPp3v4pq4bLnDKPu5C6MuZmz8cwceS3jP4gFoT8hf",
  "key26": "3mpJe8mwcVQ64HmaLTrFm18FRWx7RJLoT83qyy6w8mm71PpgdLSmFCtJUj5BUXhtPjNCY2R1YUGL6cd7mcfdQ7Li",
  "key27": "3bzo6KajA1uANcmGT88WxwBMTkEbu7rM6n5VUGVSaqKcrYhC4atcKkFnanvjJ9qyhAhgKNox4HNcFkYEK6HLzsgb",
  "key28": "2i9aXrNPbTVejkdyGC2Lc2vwgKek7wsUVD7zVyuNnukP6hkhFQcEabdRshTULzKd2eDYHQX4CpXtpnTptJ4sBghx",
  "key29": "44LwNFyH58Aqr41ZgQHYrAiF3FMfyLvgUyNxBGZ8kJ53BXhWePiv7NhjaoM5WoHNvejMxLBe1vXKL8e2Z21Paiyh",
  "key30": "5mKuoRDSma8sg1LY6GjRs5joc1ULH4hV674LGZVSChB3U3ZcdzLLgf2rgJXS7tBQHXaaskmubpGxYBpbi7SFBAUf",
  "key31": "5NfQR3SaUu28vXUJ4A1r3g3HtVL46rga2phGB2MHi8HJ3YsmAEgSZZPG3zLCvXotxvU4akNAKKDmn4UwyMh5pctU",
  "key32": "678XdDPPxQnGcaH523RUi2kXnfeYNGrrqgwms4H1KviZ9THeRDy7NGfUEUBY73niGrVMS3oc4ngaaJtRTcCn3QZ7",
  "key33": "2eqY1QyvESnePnVqperww4p7HG43qc2xKmGbynzCyzqwyoWBgFpy5L45gQMfnhkp1sEU9vvjSMegYJGGeKNjFerA",
  "key34": "57akY8Rf3wL9YoGnVoRCPv64iisGX3a6kndEDGCr845xdpn9Y98hRcTdijy8C3Q4XpGn9t8A535HWzH8iT5cfxj3",
  "key35": "3vLp39dcQB2qmRJnfBzEM7hSbwc4sEvEBFBChhBDU55CtMiVH7K9fm7dfzvjPPjHYo6ZZTLEvoJLBThrZmipBPrp",
  "key36": "3atUqZyb6MeMzMuEtPSpV4iaxpJy88gSXUCBahgbxxyQsZKWha5TPtQwiu3vcvgzkvFdua9MzA82u4avUKnGqKj",
  "key37": "4WvEJzQC9L4thhiQHMokycesQpLUBuKYxLNPbCTD9zvizuJRTKGrCGVtZfXHo4VEmsJSue4R8Vmja2rMdVgiAmEs",
  "key38": "3vsTacZCB9Z2eWK1K1am7nfTPqrBYUgo2GnHWpUWSoMNwuwaQaRXPjWqEAmxpNNMvJekeQGhCjk5K5rvmGgc5ZcR",
  "key39": "5pJmfnmJW9sCU6UDfz8wnithFg1EcydaAmjRfoS6c4R9zphsxZGqRC2P51abkoqaggLCaDMCQr8uVoQmvoEf7Rhr",
  "key40": "4aaRZAnhq7FLHTrUskJwr6ykQu7h4etVXjWTtmfgGhCBjrNkZ8iqdnqJY437xoTuauocoevC3WkaDNd9kANNFpeq",
  "key41": "9Y8jMRvspEJEb6AhQfErk1Y5hdj2pECysPivtgQVK5jF2myjUaVcJiYhip6YNZE2BsiXr57kmKHpZjpkwkTBrRW"
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
