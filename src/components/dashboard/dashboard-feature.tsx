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
    "3Fi2JeecWrk8GBFYtpZD71WoG1ovCWUb94QxWYYxnK4zcKib4cTuDSKZXgJLPvts2Ds7JsKNvkN3WqCbRNEjeokH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633U8zaTGHsdoe1k9YvMN9yvMkNhJAiJ12Zfj4Vf8A8zxKxvv5AtYkA5pVLKuE8mhSqcGyJfY99W78CWkezciBxi",
  "key1": "TiyLCXUJWJ4rLmbpCho9inWd1g1ERrDVeYuXrijpPTkowBXoHdRXtEtc8e7rE7fqg97MbUGzEGBZWduynqFzWkc",
  "key2": "4ffztGDBDeXjcn1S6Xbm63o498gwmbs3itbCcUuJ6D9dtX3pF1PSW8g3N14ph8AkstomoV9zGaoKkFGLsQsx6wsV",
  "key3": "5wQrjJvtUeaUxLJC2GCSkeAZhRzLuSvkjZ4crPWmYRXzBgeNJBPNPKA933AyiCwRnb8MygV6ejDqSS2UhZwaTVwb",
  "key4": "5NMwjo1EDU2WrvjQKH6i3RCh1nEN1swEVMzAbCovKguREMXp6wPnCpGU58xcJjwNJi5gnN36WeB79ckk9eugFyQg",
  "key5": "3FYw1Dgrkf4gpYAzZBHokX44qBxb7fGCcc5SfpLJn8WCUgiP9cdEEpBfQv58bpzxGdeivveRDMxtWyuFQ5ZL3ZAi",
  "key6": "43gr1jdoW6DN1oif1wii7soXU934eqqGhVXjsowkf4jDxuNwvhAiizcycDU1kNUmwnxDBa1oURipKzXUn86ppEAZ",
  "key7": "67japoT84gTG5AL5irrBPbiFFnMpDZTRecE4pVV6VYHuuAT8oA3ADsD8zswvC5gXGQnS4bymDgPe8u8oijcykiFP",
  "key8": "pPEkGkfgkyWuhjXTq5YKe4mffsBQigEtN7PyUUr7bQMehtGSBuBhTmrK78Qon5d7pR59jquXDxqGisZLuqd9ioZ",
  "key9": "hu3hd8W6y8kz17jxUYAKigp1W1i3ZyYcBLT1rzP3xkH8xnycTKGbTLKvyLR4bCMyXSm8oJWnyuj5Myn1z99XF1Q",
  "key10": "62h7jueRixrwHK4osesUg1jAd2LdtdSVAxiSDg6nrmuznzZ6crVvd4iTDxpRZxk3492LVC6fz9fXzTWSLusrULVw",
  "key11": "5dfgbedi3wRDqcNughkuD8DxuUJt4ZNoCCkyrys8Zsc8kzMrkpPofevT1rkhEbZJrUbnuQqXEYdEZfbTWeDiEBoM",
  "key12": "394scYdUm84VDHhNMTLCuG9wptDdnoiQYjLkr26gSk3BExFm5QSXfjidmcp9xxf3He84qeW5wyrSnSQqrE6cm5C1",
  "key13": "49fLthGnujUa1iXaftsCTmC9m1PymQAafFdXehhhdgyqduLqLWQC3rPg5h3SeL4t3bhuWGVvsFgRKapAQLwwQz1S",
  "key14": "2M285ftqijCrTj7A1coRhqHhhGQ9omzLYG7pWkUCoY1pq6c5qR6YF3yKLRwrwxtQJn6Mg73Y6CYNm6mTJnqP1TwY",
  "key15": "G93W4tRwydfvxWJ5xZL9B956N3iZ8uksGfJsaxiLh5EKeyFcQGu6xZ7nst2bxnpu5Ra6Yp3E9qx2Apwe7ubk9eU",
  "key16": "41KEMjQ5SRivv8a1QXnA6yWx87rh471o1zkd6VajH6PKoiVZFuk7WFpT3pkdEmrNz3bZp8ZaCfSxaR1J3F1JaYrm",
  "key17": "4hXacoKuBYrDiKux9psKhvEArbTvmV3Ld5AWvUByX5dWDZxRgY532oK4NgNuar1PuG9e7qyduHcGLGzc61jAjyHn",
  "key18": "3aBwFXj3GrW2WV4VNf4fGqfiszZAefx1yt243FPxNcg9KGyN1vm5VMgpzm7x2xx81VXPgxFEgzdSPSa1mSQuZFf9",
  "key19": "2ugs5XFkRZGMYvAmSxyFQFBkz5TzhmxkB7seYnps8rVpVfm543nvMsMtoG4BnKE7rZcvbcmPwd8uTQ1zZr8NVrTk",
  "key20": "4MnianJuKe8oPptNy4BQ6jvjQyaoVJUzmAUbJekL6GetSXrXB4g9oxPnumySiMzZjVbGy5bjcS1cX4yjzUhx6bA3",
  "key21": "25Zx9S8wNp1VFhFaRbWa1nobAudm2n8h3iyBrfYiLoWudbrbXU9JeRodEZKzxpDt1tPnuzPR6MpaPjnFzmuWX2uV",
  "key22": "648yXzVDdZAaQeq1spLbTfCFVs6BzGENQp8m1f6yw8p3v6FVQef4VftU6fteRCyjCJE1m36B4xSCk9Kv64nZfvB7",
  "key23": "59GvhLnkKhBVeHwCUxuUZ33AyaBMMUCTTA4kWCDMv8pLW1ayEH7fteGNNaM4U1U7k8feavAzpBKmrUpGkYsW2JVs",
  "key24": "iKHSwcVfoYDMMQMTWT9VKFb5mbYPrf98DUou3rHhq4sBzvqksoRCnwRUtNDHyJwX5kjHqAccBewLLhoxjqktm6q",
  "key25": "2oE6KB6T6hwrFk7MLaUoRRH6pkcjo2QnnfeZNkdToKpgxLQz2jLA11fFBAXcadRmmDrZCAbwB5rLEc7GhvEwJx3X",
  "key26": "3hWugbfgjsT49CgCpcdia6jaeeC7VKdBxjj5SaBoJsiHVLybbhwhktyxyx9HV4NLdamz1iJN3oGKb3yZmy33wvJz",
  "key27": "2BFEYJ7B55N4ozAN5G5TmD2zi7rpsRkF45DuzYCrzRxW1Br3E2HuGnjERTmPBWeG1sjKYGHcYErhjyqeDquWeyFx",
  "key28": "3yoZ1JwHkkxSgMFesG6n2ntSDo3SWsF5jAm33EohDQcb2TWESwHfHatP1SaMjwX93DzxswWVkny2KvMwe1Ddi8DV",
  "key29": "2ckpks2V8Tig1H83VdBMqSt7cfc8njsLogppSBTR5276m4EjhRmYAGc7arY4p7cbnUNJjSwXkGdQrap7zMdmCADn",
  "key30": "2cvkcdLxwBo9PnU4CaCoZQ3zLVxz9v18V4jQeJm4MoTt73Fvtyq7RwZm2Q4ru2ktixNmrhEPfd9N2APa9eaX1fa9",
  "key31": "25573eAJyQHLD2sM9FVZEw56dZszYHSwzUjEVdQadJQYgMgyW1x3WL1VAQ9UDm6cyMsyHwnH4M6V4iisPyZGGQCE",
  "key32": "2hqs1K4i1nmpqmCmNYiXQgn7TUfCHNLTcQBsSNyCuRs22nj7HszNttqLurbcY9jsLevbmbyJArSaNQcBBV1wN1Az",
  "key33": "jxF2F48tpqkSoavRQUqymRXvwNrip5Wrux9U8LXPbYL3NvPsubYeFH2jhMDtuhCDQ7hjK26wJqoregPrDhwsKrg",
  "key34": "2wJz7jhU2AWZvidpbCZDWAx19QoYr1g6GREZxPLL9SfnyevpvATrU8HQLqjxM43AFy37AE1Gf4psZ7ZFxho6PXmc",
  "key35": "46i6Mt81tKVKGcJijQjidb8cxVeU36nYcbE1aNY88ABcEJ4ApDSWNiZgVnjy7ZW6iEVGj7rngiCEvVpTBzpUUHyq",
  "key36": "4WhwsBeNP3F1aoPTF1D9nKkJUPtadshV9Wcn9mro33GF2b9uBL46a8Cpp9h4aqAYwfpzqtoRaAuHpv9s9i9ZqRZx",
  "key37": "3y8xSPAqWV4ayJSVfpDHuyWauCJtR5JZFZa4YbpNYaXdBuPw3HSMFuwy79hQVD1FLpQRxkXjtcjCUx1t7ow26bGm",
  "key38": "2dZz2PT9wd81zXddZvVVXRPAzL9h9M5cE69mczEH4pcXjWMnHuuH16ipzyVHDFCa5iJsu389M7PVYSDV85UJxCvN",
  "key39": "42qBXhq7MCMALyCHac2LuVc4DmVpgWbg8yjjcNr74kyrQnDCTrj7U2jaFpK6J4oa1V57vVfKgQktXb3RDrsLb1g9",
  "key40": "66zm4PrRX45rKZAgQcrGDPjZ6tEpa8PauPALpxAwRCjzBqwPy5VesmsMTCwhrb8whEdHZEb11967R53pNj4F3QaW",
  "key41": "3f4PQuhLiqLr6EhWBU4U6Ejz5JE263smxRUUC3Rx4NJiRcxi3xAvhxTJ2nA9NYi5gFWUcU1HGH9G2L4p1L7Vq6Rs",
  "key42": "4vunKTWdoNgWZD3pgtJngpqe6MaLSNfqbo8yaVQShfe5R99PKob81kkp1ctQjiqwEiSuBAqyyX5NPfNJW2FdmGb8",
  "key43": "2qUZM83VCNH9pUm8RcdLq9Hss8Wgn7p2y2XaHhV9fNtQQHHvuxQExnz8bi5oJhdK1ABbRD2i6Nth3KknY1pihcub"
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
