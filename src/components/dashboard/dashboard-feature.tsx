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
    "4n77D5hCNBRu8CkBapYapKeKp7q93FREqZ9AYBye3SW1jPqSyiSFmnoF6hpFstTyNZtzMSdDvtP3WMqC6CHY4i6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ekYS5bPJZDsCGoZoHzLRuw9vxRstUp6kPxp6D2g1SfsWiYk456cSA1SGsHWSUzBzb8N7VXqJuFs5jbhRJXgsnS",
  "key1": "tF6L9nMwZzijEmXWgvdxap1CMFX9BzS5ePSXJFeqcFJgCXV2nxMCN9Xp7Yre9Gr2J2dDVwRFH4codm6SCijf9Yf",
  "key2": "Vp9UwuC12FT8KL3HAjySfbSYi8VEFkB3ozoZVp6veZAj9R15mJTQjtXWpqCLwHCg5ohSfLNt7UQABYvwajnFu3h",
  "key3": "3y7k7hq1pqHjwGQoTYYSfgBMDK3cufMJXek4MqbkYWvdP5j1f57PDgtgFvdUkxCf4w1tKvWTzDyukLMqj5EcYC3F",
  "key4": "34iT7dJctLAq8yrdEbQR5gVhNdfiL6sQHAcPNDxLQ8vEFH1Q2Jje6ZF54sNCZmvE3JRraJhyVrPkD7PxzfoFoVzU",
  "key5": "2NcNr3hHkVRkwLpVKZsYXFrH9spFbyHucY91T1qbceKqw77rmRohw4as9o3VgVg45NkE9cQ3GqYTMdT1DryALkGL",
  "key6": "2cqoyQWSZzHRk2s6KoujKmmVtTSChL5J825fT8kc8GmHn7zuU25KMTCoenaaWfqBPPosDdtcT7Gp2uNN2iHa93PJ",
  "key7": "2KcqQq2wtkoFXi6qZ9zpsfuXKjfxSs16GfuGcy69bs6H7nmkYtDXoMz2yhz7HEQqwZ3oU9nsTYSzC918dfce2jak",
  "key8": "2B5W6oA562Lk5GppG2BQQa8AGuF4oWELondD9YGJsdP5uwj24hwKbKMZXfqNQodm7aTsQ25eDz1gbVKJPnveHfEs",
  "key9": "2C3bJqWX1GQmhjTdjeAxXge6M3vGGoZpfuSQgqf7JySyku5z4NzZL1UovGbFxhDXX19YHJm25wRkdsC1uAESLQfW",
  "key10": "3MEncbNumQA4Kk7kmeU4APCsmYgrGJ1Yiee1oUmrq6yfART3nWLqmdg5VUWzxcgQvAWSXDHQBrBmdDwcw1WwrF5j",
  "key11": "4dvMrawF56k5ittNWVqZKkZkt3DkKPh9gpdkjM8mWkmEgYX5E3YECFSKLSnz8B2vrZTYLhkCbutxXopYoeLrrRqJ",
  "key12": "mbguRn3dGA3aqW4PPtWv1BZL1WmGkZgvDxsPpUS79ScTHzy6BJmgMa46rZDxcQGgVkRVKq2aZkAFJBSnzziPoFs",
  "key13": "2PdJa8AkdjtZp3YStq4eQbNJRaVBdyFNdw3PuWbStycMD6PKaHbtLxfuVsgP9gAYEonRv7VZKiKwFQg12TBm6QMV",
  "key14": "4VWznV7M6EUQQCDg9rs7PPDxvb1CwGbzwouSv2edCnGRMfp4iqPGZCy49g7CSCsvG1JKMCZ7Xtzgwi1SHTP63SGg",
  "key15": "2JqMsrihtnGqCvyMnLwfmiZsdpVbrLhAfUxwjLdbcHoYYh9HnoRPDB7SikEovE8vgCp2zqbthUGqadsBEctQeJcB",
  "key16": "5XPE5Ri8CLByBZL4RdA9Yd32AW6hmwZDyXWieFqQRhJXe7P8iHLsWgPfd3bFWXTFadWukoaZ1R6xPDYXQe1TbLhB",
  "key17": "yCTGvwHL3nQTkMbp5gkYMpFkmgz5kz9mMZzVCuFBrJDGJR4BnG1P1u4i3mb6aJsRpiTXr23CgXiZKDe4oqWVihs",
  "key18": "5iCyczN73mLiV29ZvM9PjmjpdfVmJyCKCAxf5wodsLe4HQs5oxt1yAin1CUei7pSBFt2LxVjkC4cVMn8mw55TnQY",
  "key19": "5bX1hKRv1j3a3W1UV58QsH5MZN5pFgDEcts87GRkGJvLwieHwSueNqPMhq7SLozjmWCpTtTUqQx1Pkoxo4P5gt3z",
  "key20": "f9DUuSurja4oRBUfUeQnnUjQFEZsM9pr1CovJdpCFik4HpDtLFRTiTUxQu1X3uyCZcwRfpB4uVPYMLHuPo93TVp",
  "key21": "5wofeGkbWrnpiwxakwG7W92sUqHR5rBAJFRNxgoc24cLMMcEFvenbb6CDXQLvBPkYe8CHV4b4qoU514vKBD2bKhi",
  "key22": "4upHDVe1ThjfNXo3i1aqnPtcG1z2L2BBu96byMUUPi2nZwLBvq8HpuYXPGVXmETVcJVTUXHostTk3GfNktP46uix",
  "key23": "2CXcZmcBonxMHdNQxSZvMmEap1UfKjTHgrBxX9Q5xDHWhari1kiAJiY96tQ6fMoM9uBhbJdxegG8yVXBguo8ARHD",
  "key24": "35L28PVgSN6yqVoj236P28PS5oLtWHc2NwC6bCBGEXtujRMJdQP8jY5b3wDTKoWVh5euMYPnPK6v5ScdKZNGr1nw",
  "key25": "5hxHjG98Jco832XjnVKJQkRs5n1MbmHuMxkwVYWKR6USN8Zwq2ej9kaisaHBAouQtBN26nJQb2mQNScwfUH6ryV8",
  "key26": "gjFvXhTns1fWskW3DPH4PKq5yL7HNXxSVkG8yAP61nQj6tC67fLtjgrRJJuwaWMFYFDnqaXs2BBntrHnB1HNGdm",
  "key27": "36Ui5FxT3xKHwdrAAT5cWcSftbcRsEVBpA5vxFrm5DWtXmozLrN68Tp5XrsEtFpvwkTjqwQ4cCCNUWFLRcgk8v1U",
  "key28": "52YNbhmwg6pe3vQQXrqmUmHUVZQfLa7BEYn1KMppvxXi2m6r4bAr8kXLP16h3skdoNYg51Wum2cg9pwfroM3P7x5",
  "key29": "356GUTbUaCCKyP3rM8TRGres2KvPkBb1WABGwbvPnufMx9271M97pKCzpx9K6WpwXXNMtGHpfDh9g5Ws32D9PxTt",
  "key30": "2WQDU49dWeAMjfAiJ481Rud766t3CdvpZkcBGBb4FwSjTPMnKDnWDXwK4dRsUMpUGXw5KdpEBqW4dp6Va8kF3VB6",
  "key31": "4Fb5zF9fWoQRti83YwNaDRVNXuqN2iwqFefbYCvLtqBrMdSX2W8CHAijEXpuYVgB2caSvF1opWkWPfoCsTkWSFzr",
  "key32": "37jvsn4njs3e9tncoQdz3DwkFXgwVh2AuDnPQj5g8Ke9JxVyiuZZbcnHKPEG49SgQiQzghMs443NDbUk2ScC1dra"
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
