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
    "31VJ18ipiyrbRuZwgH2uTe2ErpkVTqBdc9dp4qLwy8f4baD65fHusj416dDd8JtizUEJ48xKTp54YagW6BbsQx9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyxU2y3B24bBLD5RN9pGy8TsdDuxWVRAufTTy1X2LhVU6S6B8wdAjH6oiLRJAz3ejd1HXUNiugRaRuWzvGFvpBn",
  "key1": "3toNHgEYPzkW6odn8iUcA7Lw1qMDqvQFGRX2frHTGDWyhuehA7toFeg8BtgV5gPHEc1qmtA3dfLJSC7RX1zKpVAQ",
  "key2": "2rqCesxSKJuDoRtMZhmAZK86P7T5mRW7vBYYZhPBspmSUukPMkqEo1MhKDTMR1mVoQS3rc7vbj4SvQ6SYoEJNKED",
  "key3": "3AEeeyy74R4WDPMLRvPxknZJBFMCeqJMEYToUW7m9k7KCyAy2wGeN1pGRYJ7fa8pKuSBUMiLipBEVhk6Gsx4Wdcd",
  "key4": "xT8iVXNRyaBuBP95dXGYhX17oeKbLGYgm8qyrE6deP9YENSyzsChWSpqyXLve9ZoV2n7kNHbegwkJA2zEkTF3t5",
  "key5": "4C4rdXr3LMMsC3wNfFT8ugQoqBDhcQDxaErw4XNkg8Ki2YxSmWnEJxviABfGpSUZeD3KD5mcYjCmq5Qo8UpRscSZ",
  "key6": "63VYPNna7J75qLGi9hY8L9hBdtuNeGE9LFknshsSavjSYB7LfpUvPCZ4mMxGyTUQH6pw6QVY2GU82DaT5rPWAhHY",
  "key7": "54MgkGnKtaWjFFpsAY5873zDkc6EAZgh9N9NeqZF67Ar4rA4jP71XKpeMPdnY2PSzxH7RWXxoYCJ1njfewswLYJN",
  "key8": "63thb4jS97ex8m6H1hEkRCymLVZBSPZb4QfNf4tWzGpKSeBGMHzhWF7NEYipU3gwCbHWEykxUhzmc4svvE3kL3LD",
  "key9": "5b2TmZwxkmKJTsnmAm5VwsWAbH4Z1ENwZ84Cu6XaKvFtUEWyocx21aetrL1RZzp7Xkq2pwRCUtwaojLuhLvTPNKw",
  "key10": "4MWKAc4KHwTcd4xHjW2mdNEa76Y35CQwevmAatinttcZA1b3ZcACoKey9c2BcnhfStNGtoHceLGM12SuBnQtXZzn",
  "key11": "Jn13sZP4zpEDcNRzJZbpBUMYoDbwRcA3Cfa8B4NMb4Mig3rWnjRYwy2Y4J5ASsCtkXN2p4ERBqtyGS5kDDJsLNs",
  "key12": "2QXCaFkh27xtrW5ymSxhTLjgZnE29YxvoRfmvJFT4z7tL4GrudsTa55HXcuHeSrpsriJfnoXtZCvapjVNBDpyriv",
  "key13": "4tPNk6AMcgiqqqMNNY9XKouC11sZneWqrdbCdxUsQvHBmnaYi2XGdhNfYihLzcNZ7wxm7qHnSRNnypXirjJEdYbu",
  "key14": "4PfuCdQR2JS2DQUMrvBETWK6mAL2DtpTkDzNG5D4LosEBV6hA842SVZ6xryjtwSvwA4WHnGQ5mdzgWyBwJ13ebpd",
  "key15": "Heb3185Qj9SHiRgHudsX5CfjxpkoYCTVYpL1iWoVjsRhDjFZimmDEJX4CMdTjVEqBVk7SYy6M1iF2ZosnKGpfdW",
  "key16": "3h4X3aBpZUfx4VG5j1sBeRqXSA1C9LMKN75dmtgWrT8ZNoEVAbUv8b9tGfHheUHqRiupaZS7ykaVxy11X7iJjKTu",
  "key17": "4hVULh43pX7SXvPcHPZ12yyx1kYGDNkUJcSMjFqjxJaXoENFxr12AqxVKUPQUkk5orK2XQupEPeew9hFGFoZeyro",
  "key18": "s1LW1djoNTfm5GvV3tpFTzFbZRUcF5fP7j2LkBNLzRjM8Q6EiBdjWqMGLkSFV2LucGoupxpKcCD4Tv56AfBFocN",
  "key19": "5bVysqSHC3LiGPkS1ko7jrxQTVNFmG9w8cCu4XXgVTvUrRuCviSPFgfScd1LVYbtmcn86j2mAyyPjNNBSYiAC3uU",
  "key20": "2QoW8q2VDXrWiSo659j1TzLeaYVu7vA3xVQu4xvWJaEHauRMQeV2G14HfxHAbCWw73X7wT9qAmaC1m2bQfeuvLc3",
  "key21": "5aTJ2wqFutoAeyaxTdafiKu3wazQtdr4F6hDnjgtiaysiUzPequEHKQxwwQDfX7CsVguyki9QwPczennWpaLkfC9",
  "key22": "5gmF7J34A8U75VdLrWQ3W5M5xbpKKnpwRPFHoMGp7bbEsjS98GyL7f11xcvimWaxBUbgWn84A7CFco4TKUxA7Mp2",
  "key23": "4oSB2vaHQj7BHsKgPrfxb2yf6NseE4pHjcPVP4mDqxEhF7YksasM8S23BCkX7mqNiDbUCH6p9Dffj9iYXmJRQNNY",
  "key24": "4ezyutvSooVv6BipuRdeE6mxfXWtWL79QHndVBK5D2aYbo1K63fV35kqbpY7ACK9qd227F5AhRLbWSzrrNDFwbyv",
  "key25": "5eXeCybVC4ZNMcSRxLW8MZC7Tgum9cTxZVKDjb97neEMVsLYtZNxncESrHgyH6nWUk1Xdfwp5MBvpfyySEh8pHhr",
  "key26": "4UkftMbJipxuNBJk8wsgjA53a71csbQCHgmGEuY8fTvnv97UakBnHaTHxKqADMWmrN5ES1sRDJ5K8svmdvwFQMDY",
  "key27": "4UrTn3de7qqpdoo6f9jo3A6rBH98NZMtw11mCWjULTu11h9dRvtVXte2vy2CxX8ekgtTHiWDxn7sQ62ADfyMGnpg",
  "key28": "2Qhvm9khRP25GUtpVFjzTLBAzH6a4WZZ3hJ2kCCjTgZ8XWsq7P3B8DF692i9jZkQt6V1PdhvbTiq81vQVzvGXyXF",
  "key29": "4M9WMnFoa5RQW55GGPkSncvmmh77FBSyDG9EC4rjkiq5KgzbqCtDs3MmmrBwPEFvhTbiKn3d1zmsvpwFAAaTmNx4",
  "key30": "5iKpCUF4pUmdqzAZ2MvgrGPuiAaUuj4CtYSzVKy5F8cjX3y6iLbueFUf1gbJgXwgcG8kaG2r1iVMziL83NdCAfcG",
  "key31": "2H5dvV16qhanmz8vAYS2wSCCMAvGdG9S1ZBhoWpLu4Bq4qGZ8s99UWQEf7yjPQBdt8JoMDKckvuWTJZb6RTJhLkC",
  "key32": "28WEQK2fvNwdoPQY7f3XLqR91GGFd9a9EM7uPoJ53BUqqiP1ydko75RJtABYaxT4x4JsZMBee8GwQHNLnb4Pucfu",
  "key33": "4VC6NWYAxyZwmCqX4NCYiEg6PDRmPYSyS1L6y9UtMrtzBrZFBhpfjuckgm8CAe9KEwTr38kMz5kcdictBHSNmvwo",
  "key34": "gfmU6yRzrCt1D7DW9bgfuDwCzLmQW96fED7zEpr8cyLgjV9TEhETZchKMGRUiYW7UHNNAEszCSgBiAxAPH19wk2",
  "key35": "3od8mwKPjADZNMyVW7dvv735UC79qXncrwju6FhySg95QpnQ6GApZGShkeXpwzHhCzKiswsi5urtrp5TgU4dpD5Q",
  "key36": "34LuVwKb4grVz8JaNxPpQSxaaZ6a4L3CarhZYLNPXe7DF8z9dUwUs3aMyzqjWRGjrv5z67ixQ99XGcCRYkeSVbGZ",
  "key37": "5KCn7FQCSqPvyRhRP6XCUoayhRDDkVMxeDnWM7a6qjhi97ZeF3p5tuGrBtwWGzzvrXijAH2VksjHsiP2tHTkhPtm",
  "key38": "BZ3tzkU6Nd6XGroKHivSUBp14NPJ7SZp4tEWi2N8uNWoPnNcJDBUomnqDuhzYDtsqCoHMLBKSL5F7WP3zmRCtHc",
  "key39": "3bo8WfGs87CPcPZFgXoKqLeqLsLWnZwpMULrYTjEH7zBoaWhSt5kAH4BzmZFKByZRMhf3SeCYRiek6ZwhzY5vSjL",
  "key40": "58Uuj1FaSJgpJaR1gwvLCRqytLw2CytZ9FYxfEaCxhLKRzGh4pDq3JWbspWR6en395wPE7Wwmcff5Y5jXHGZWcV2",
  "key41": "xDVdXJkPm5cMP3TRMguY2tgqn9NBwG7W3jaXvroWByTTGsurJ4v1h5KbUnFsSrw4iPYLJ2eGaS9k8kyWv2RkbjX",
  "key42": "3eYuYTSFrzZe8cysBJNmysTDg5BvWDBdADrmSGjmJkPwH2PApESULARBGGe8SbNEBHbYVW2tvWJmXjv1agBApNWw",
  "key43": "2TPyYH1Jzy3nDdHfoNgViWfgw1R37GR7H53DDFCm1syXbQMoh5kC7YcEpL5saGQdDxGKB3CspaGECijLVcufCgRW",
  "key44": "vnWWRmEBfMFb2LmF51vwGaiWFoQxVSeL9Y6eXnZwep3mLzzpzpWXhBEh38sHiNy4NYxRSZye6nngY4SoibY7BVS"
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
