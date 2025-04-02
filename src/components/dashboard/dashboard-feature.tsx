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
    "47xgpGfEfd9UWCV9S97bEmD2znvqY1qbcTdKPsoZwPabMKF38YueSEnP2iPuXLMbbKZhf8Bck2A4BKhqGFheD5xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q55cbt8cUVi8hetq31B8NjGEyod9mCj97iB76oB3FW6iT3pPG7WgBsVsELHH1A93MktttMaoZUYdF6rCECbrGc5",
  "key1": "pr7NcV2xfAXM6TuvibwkRLQyodn43RRBZAGPf44joBTp2AaXhEVEGLzoKq8MNRVoZ8HMsYdsShhkRqiqYQ6Ze2y",
  "key2": "5DofdStzcJVJhX3VuHxSqMm5Wfd5PddsM1sAKAkH3iPmoAeJFQucX67K45mAmD2SsDVcyJmpdK9ornvHBYUYTdoo",
  "key3": "4BB2WmXPkHym46n26NCsnaT3JLTgNjDUxUNJRCbE4tj8pzWrXkaZ8SvmVWbHVzs8XMsSNYGpsFptzr1RrJYh3bre",
  "key4": "2gpJaZV7Vb2sXYpXQw2AEktYitrXaJec9cpbFX6pJ1qrTSB8LQYMfyMfYvj9idohf5uy9mhF7qad43Zf47Bf3qAC",
  "key5": "2SBd7q3jysNJb3kgwAxKEiMSypzgfRo2RZ8piitJAD449RcU1Z1q6qxtjTKS7NAN1xHJsQ8AMfCpo3L37GBHepKJ",
  "key6": "5ddL3QXE7in1Mkmw6LsFpPKN6kmx2h4PoskzZDy1JXvPVKTh6SJmEVVKL6AQBoK9wbwV8GWAbDe4h45TJQNRwvcV",
  "key7": "3ZrDVxdNwnzE2DCGsTAQo3q7vW7b6gaLYPEhNBjFGB5JtL6yqvAXEwmu9JXDpbbLZCBwTt2TxjpVY9rN91yiRGLB",
  "key8": "3LqqUgwAKbqHV2P5UwWqtNqDUbF9mSFkrGWkxtA6PdMU6wzw7sPNXgMpLaRtTK7rTidDy4g8W28uwL19KwiSKrLp",
  "key9": "5swAmw5unre3HDRgYtFxYWUKmZFZ89py6gbRw6nw4nsXwgW9KPDEj24RtyFdjCCu79MwjqG3wkEJipA2C3kSnidB",
  "key10": "2VADaa973uuJZ7uAhKbKwrHioAFk7cV7Mr1eTx1HRTrUjcSnnGbduogAfa87K5rqVvEkvpZ3VkSM9PS6XK9ouhKC",
  "key11": "5jWEX9ZvUH6dVagYR69h4V9iWcFnVNcPKyp9AgYndStezPqdDaLPQ2FSzTCj4ydbSYNcyYjBbxVDWrQFc3FVsapG",
  "key12": "5Bo59JMcN1DBW3iu4xcNJrCsyzZXQpqB5uZ2tjgaqqR1rzHSzgq1F6LBEz9PhYCMdyhYwEzbCEg1cxtyeXMfMpWj",
  "key13": "2KX7BTy7vxUApik31YSRwzCNWE85R4j4h7UKXSzVFpucVGfvALpxXR4VD2eejmBkmYyw2SoDa1Er1aA8EqVqQGxZ",
  "key14": "d1fu6nbteywsH6aSQL5B6yPszSz6XRyUgr9UMNcBruPmCbku3eXLfu8eAHbM85tGjS1fvj8iopgn4KypedBZB7B",
  "key15": "2ehCCqH7Ya1VE8pjh2HiS73Wvi3vp2aRiXQYJVpoWooMxDdQWFxRzwoSrbS77drYbRGCEEKdNNvir25XFyqfbLyU",
  "key16": "3VvdhZ1AMSXiKXetupQSJqkNkck2DcHQjTszRLAwYaEZ47U1UTyBZw7U8aFbdeMaCGHUJtVC6JPLouerCuexRF5h",
  "key17": "5uzUg2VX3SGUSQicgn9dZQo9HfmeQfdnQvuTxTk5fQvcgkNhd9kb7JGfqRXaaQZ2ZYgAnTdAcMyYLr2ezUjyUvJz",
  "key18": "3WTEtrgyBMRqEnEhryYJgVZ1jUkG8uLWDLbemSfDBGrz3QLm8sR2ZZRDbbT4KKrAftgzUMewFh9cNFPTFnF8Zkhp",
  "key19": "5467JCe4Av27eroamQonicjoGTd4UqCF3ychaCtk4dCCeqicXpJTXiaDTgCb1FMQ9vXsJst4cWPaDhuDk9BGxSAH",
  "key20": "3Hhtw2mdAhQLYw8t2TeeiNuxKYr7HsMDjMXGygT4Z2SV7NBUYgBxBix8KHxCwyXDNgijnXQfwWfRV2W2B9pQL442",
  "key21": "4jdCALfwCii6ZoH4NqEFeiQniJMBhpemif7nSjDecGs5km3LvvgSSMMAcghuLYFZwre9Nms3QhLdZDyBzkiCmK2J",
  "key22": "5wcwJY6sHBt1SR6T1g2TNb2BpPHiG76T7eKPgAmGUjFy32d5VZGCUJws2QGwxD23ace8eZGNvNCwtmKSGkoHrRhp",
  "key23": "4No5VV1UmEk5LsW3APp6wtb2KbBgEUsSJBRwknVzA4R2NJU6Q5aqMBV43yoybQtx2NFAvvJZbHCLyyQUWvZEtAoC",
  "key24": "4VmGKdZcANxJaS1HUoUtWuMpyK1SYPLr3xEvKJSJb7roReWSRw9HaNbr1iCyzn9qCN3Mrw8BKGT5jkkjf4nm1qND",
  "key25": "5HhQDhWBx5FHarNGvxGc6UauHEeSeFSVSXihtY6HjA4HYbaTcTWaUdVpZxUwP39xU1o8azsgr2HPe5gLxuk53hnQ",
  "key26": "3zqhZANp1WGLScPaUBTt8AyhswqzCqbE6Gio3Un4u2HP5LnzRxpikUHAvfLFPFfwupvMSnZUtag4Kcgeg3R2odV4",
  "key27": "4wH8PaRT17wRhH1z267baMZUTooTu16BVh3TYVQ5tEWYSFFaYDX7HQ1yYN7H9nJpNoS1DS9gsPXMmei6RHfYBx4X",
  "key28": "MCezA7sKnMuSjTYVvge4YZBVwvpwPD4pPyNgP9gvYkMgNHoDYChwBQQro669CymvNYcYn2NbE1dDRbEtkQ3yir1",
  "key29": "4N3QAz7eEKRknW4XzQRCxkjmKe9y6i1zS41foSAcnKpMjh26EEa2bpeANrNxVVtJaGvtcGk4wdxjFwM2JBNjRZDc",
  "key30": "5uHa3JxxVqbsVwds88BDJdW4X3wN5LiXW5HAfPNscX9AuvuEtxvKG2txiwrfWNvKKr46s3k65UJqenceruGynqdU",
  "key31": "3MTrVUWvgTRR2CddMbc9Ju4yoyr9afxB1vJb1FYhrfhKzNoLKv3xj3bTFpsjPiZ1fkS36D3NwDGHHfw7YrBvqNYX",
  "key32": "NoQULnpSas7xeWM3NZPCrtQeMpaoV8A8FnbB7nNhVc4uUhQsWd5shGZ8Rz6eLEwNYcdRwZJ1WBRD13fECMPi5dG",
  "key33": "2TAxYw4HedQMDmxeGcCGCX9zKyPoq4BTvUBMNwwU6RvPXxUhsPU9FN8ELEi6w4VPtDHVgwCtMm4fjWSmTyfZENhF",
  "key34": "rZXZHGQoef2zMdNSjdjkTEqig9XD8znKzgn2TjaPgXYBdjSjWJoQuxAWZL75YQPGrM7zHHdVnySVERhZKbsUY4U",
  "key35": "tshV1e5LH3aYZQsVua7iR2UBDAbBNnDfbDPJMaVdP67XZDb2V5cpoY7omFcW7RuBxR4Qh3g4GmuL7pJob5A1wxC",
  "key36": "3Z3NFFQDnY3BtqJU5wwX4heExUvWomS8wS7RM7D2pdx5Ujh2wyaqgsGsXvZWTzLeJZaDjj4e6v4dXtGoAYx3nvSd",
  "key37": "4puCnDgV568xGTLmbAnFDjr5BJGZFmvpnW3xZ3fUVHXN84dUkVtfNiY2UJSibWg9nxqCGxQKRiebTtUFge1gpMMC",
  "key38": "2vhUdGn8bKApvpzVFgp9Jh1BXUT3hhTj5dzgmnVrGrnGQ2qoC5ugADefVnyEYSZVD1Eabhdif9eKehRCFUmJirJn",
  "key39": "5VcWiPwCBcWmJcRFCzhLiTynnrfPnV7F3NKPu9vkeTCQYbtCg7VaUh2ByjXqJQCfEm5NhDtYeYQ3WPu9LzUZf4XH",
  "key40": "24P85i1xVZGH76k6bJzGqRbuZ5xEYoc31SVWU5smqUSfebdrdAS2w3CaaJHDbzhW9K16ckTayrzb8d1T3gh7UGpN",
  "key41": "2WVUn5fZKEWzRQrnrn9MWEbbGfDjvUeMA1mPAbkGbs35BC73aPbXgFJ58nkpSXL5iW391fkJHgzpgsGHkm3wmCGR",
  "key42": "3ktpZhKagD6XadFkE2XLmysqnE62TyTvbhiQj77trQwxw4RUWNfPBpjTNBGrbrHgpcDzEaJGXFdtq4R8MrXxt7n4",
  "key43": "3BAKdx5rA62gsrPxdGFEWiYgiZLs3oE6nXXpLYarKDKAD79kChPZNBTXo65pbYuoNLDTLruHGd9dfAjQuAAkXPQx",
  "key44": "3VpYgcreSxMdD3HUFzeb92mcvoZyaoTC2HE4ndfGiZDLz1jv6CijDcjwbb1BCjHL7UsUWQ335q5KP8fT5B5t6Ra",
  "key45": "yqakeii9XbEpXiC4Y9VLvDuRKzk8RMgYHjesZAiLb94hp9gGxXjndKTtSDNU6NK6CsbHe854srEgTC4wfXcRrsS",
  "key46": "4WE2hNZ8rzsJp9MybKZKByfSftg8TXYK2hJPf46Hb76ZdfhMiyYwS18HJFAkrHvaFiCRmUhcabuHE9Gbwu1f5QCp",
  "key47": "2VHqBd4hknJpNsXZVfAwsKt1jgtJQJJ42fZNnE6PD7aPdhgCEsGjtuTxpDqNBJ9H4HpKUpxJr6qMco81uzTrjPpn",
  "key48": "HYEg3wWAzKTZHFvP5HL3cVX9DbybSTj3zoCQ8k4BmKmcxWwSscp27SjRbSvG7CX6paredwpV6BkuBcSAwBjx6pF"
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
