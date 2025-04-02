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
    "crZDpL4MzXGPuh3ZGfRMvNZCTZ4DfCRdpE88B7YodeYxF3urcXwy3oHSt5N2rrVGacK1DbZKMxSXfNbX6m2q7cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vj4K1pCb4HnDMVynaRyJxQZL19Rgu2EBEPXuwmMTu6KzG7G3vFfsx3ZPh9CK3RcRbKECZAtvviQ3yCsqvhu2QkC",
  "key1": "29CV4cycY9kwayuEZvXAt4zssp5yP2oi6MZX6tM6APJsvRt2eKXaAYyC5n2g8hMHWw9jyRsuoXFbsBX9hA6pj5cc",
  "key2": "2F8PiyzvsdapmjZFtuVqE5y4rtokbAozKAZERHUC3wweBGFS25DXc6r42SJtULDeFYeM52SpQ2yR9UbfpRVtRJGy",
  "key3": "4dSEGT2744cQbinZfcoCvg4WH4eJZRxmwYVrLsi7LaC2ziL49SXTrHi8SPUAxySXJnQcZ9b4Nx5Yq1go5DufuvPz",
  "key4": "xRJkyDQ1vNyJwmSMTzkAu1VBFfNNRPMyHYghwpjBUULZXyMkpJzv8aKjuHkStn5YkPm4aNEGsfvJchVk6bfWNQo",
  "key5": "21tAdzAt7GnCxkYURJ2VBUhuBdXmTxJL6S6Nah16WJKVedUNLpVCC2dbYYA2xrU5SbjjcTCq8XGDXbqAkqn27x6N",
  "key6": "ZGV3chzjga1U4Akz4Vx5xSupP5Q3UsY96ErrA5jtaUmRL9hsgA6mFrkhqDQokRhE4BkdV1LSZWFnzwsjUUosctD",
  "key7": "629E91WvMdzTYGWi9ur8uyPQ3VK3UXZtt5aA7HP3gaemUWWQQL2N4uUf71wwqRFDxZUwx8d8nAxRuNZeYwyzyHqq",
  "key8": "4qoD1LuBTu4E1s8Av8L6eAp1QqgiF4bkjtfcdNsfvuVf5DCGvS2CUSow6fWu2YFkL3Y8gfpVrwDXunefzqgpkY45",
  "key9": "QuX7fZn1J3yWpSL2pFhinuB2MGCCDyibrrp8vKJvVVC3omu9VDqTW7NpkZgrDG9ZnP2nA8i1DvJ5trKu8xHTdTp",
  "key10": "2eFPquV9y18qSQfDmafV1kpxrHbzVA4smPqRB7oLakvRGKu3hXHNLZ8EmW8G8iQCCiZVRKuN1Z3BjYjp7auuawFr",
  "key11": "2KBtTkmQW4F9MPVmBCE9nsaMrq21QfsWW821wq3NtaaSUVVUv2x1RBv9q386NWxZkWxuzpWFAzvFYdPEWn6axSeP",
  "key12": "5AaxUDXfFi6Sbqb22wqivJAgAzHYFvbwJbuqauQWbB3iVKcjLrYLwY9j7UZnzWWnCTQMjf1hso8CgPQFWDbCiUCA",
  "key13": "43PHHSXg8B4jkVedZyKTW9WVV7tAHhSFVPATpBiDLWsA5HZc3RYdMq1GTzQA1Bv8taoeeV3ToLQ98ArbAcrMJXNj",
  "key14": "4VXBz9dQAkUDm4QqBaHYr1a1UxancnZQcJyRcTwdHgmRnRuERN98eiFwGojWbR4Zb5MFDo4eMiskTXiVUJr5tKgA",
  "key15": "2n6J37VGDxv463obU2Sm1FiFapbtXkdFLTZ1PYZHcnhV248LFj4Zo65KeA9jz2CjMLhYKGYR2mNT7CHMqTfFDotV",
  "key16": "3GGMqnFbzBVVoiWhqXYCrimAsk8MTGUA7MwB51y5fWG8tZPXEMPpSuLm1DiPcdVWQZ8hV7SRPCFiczq8abdcx7zc",
  "key17": "52FmRyyTn4GoN6cbBxrpAkJUjSje6nAg4hH5eabaPhsHAUawBJStVM15mkzZwhbBQ9ajw7aUwQD6iUnZirWcMJ38",
  "key18": "2LWUbgRLrpNQMNfdHKbf3ZhCQHBt5FRoxWUnW1pogacJTyxs51ZAL7FgPvHzP74LfpwUdn8yZR9XaaEDbje5yWbv",
  "key19": "4KQw3ZxfKjcMejPUCBztXZVTb6W3XZDXm1Dw3oG13FKTE8AekpnKA5j2QbNoWTK4JjUtKerGJSdJPB8vsyR5bDxd",
  "key20": "2hBcZLzwHAagdiRTzBgboCAXAQmzfGrmD3FS3C5v4LTkr96n9jqFyRkKWrzx4mEZCU7JaRhSW8Rb8ihdBkpoTtAh",
  "key21": "8w7rpDg46zX5uPAJ1NqJHYEFihfovChkww3UC8nqfpFePksNECQ4heoB2p5kz6mjNx3q2AJaa7MMmD5VWK9y4LL",
  "key22": "4Jf4d2mtDau561U7vCwUoQHXmyHizrL8rnXcHEV24eM9SLVkbZuSxLMts4Hmv1V7NnG2kn4sfosj1ywPQ5b5LW6e",
  "key23": "5EN6zgqr54BxfMRuhniy6t4VGDnsRb9FRYhSVUMmcq7r26HXzxz9pB3TieWrXwkfbgUgS5JrTX2ioftgZRc9LEEh",
  "key24": "39PBUaVWnwzFC1pJ9NQvcf52givgZ4EKZiZZZUs2GxLaPcDkTKeh1McY7iJRGaHrtDwGqXjRMssNsDtcQYTsjBp2",
  "key25": "3njEuNgj1vcJiHGp2Ggz3RqhNP7B5c5Q5e8HD9aAzdDwJgmVz9EMHz5QKYk25yvcgdHmMGrYnonQAcQmn8JAVDMf",
  "key26": "4B3GrXvdBxykNU6haEoJMb1d2P2LVtdqvhLNJiSEqtscmTcAFK9cWb5A4phzBvABHuYg1s618qm2KZEeJoTtZWz7",
  "key27": "5VB4ngDjmuJrBV3vzF5egEWDbRJeXAnfDDwdP5qFFkpfJBMybW36WHCLwAvZ8Tpr9JgiCYkPtrdNrdUNq1DcjYzi",
  "key28": "5h9ZPEKBizZpCQq2vhD5Q4ZoTHvoJfSjaBqCBUdWUFtrj4cDubrkeV9PLjLRgyqwb4hiDNiSYqD1QmkAMcWKS1S",
  "key29": "deytjiec3qbzzCofYxXWQU3LNRLJv13xgG3mvMxyhCEFnkk3rg4qSP5wRY4U8LVDEF3y2VhbBUeP1rxmRtqKaoE",
  "key30": "398hCQXgj1XFLHvrzWGJAfsNQdPTVXnMbx62wzpgtzYwMUJjpWCKVkicfQdHhfpBF6JkSbNYKZuQAs2oxstoTswM",
  "key31": "3QTripCCjMXizRZxxWJtbyovc35XtzQeKtQSGzPCWkpBcPkPBQG1kH1ySrKcewUqvrzDdNka46agqBWgTKsdZtgB",
  "key32": "5DhNzjoa3B3vqToFNAmjK4WxiDzcg4Kpv3odHTUKdBfrxG9wziE9Jzcw16hZWBomH7AfqMv4RsRFRUHZFj4H36nB",
  "key33": "sDAJQ3YniGwSPUyabUhPddKB4V45hCBNtzatMZaw7Kbhb2qRGbe2MhHsYM3LGTG6F2F2JF4HwMAAYqcoZXy9Knm",
  "key34": "VnhLUvNWJHyAoCyXFKGiFTBEzVX5ZAkCjkK6j8aSztxyFuacmLYsqKTEXdjfA4Nskd3RNBo6jkVpj5AFHg8MB64",
  "key35": "4jEiHVoD2EEfyQ7wH9UUJhSww7ZVQQRSE4D2U1Dw8MQumX3BRJ1F2iYoDSSH1pzFmjzfF3LNkB9ofUR82CTfnaEF",
  "key36": "4ctfwmsRSCRztGWtHCavSxH32PAjDRE8Go4i3HYwBidTiHaQ45ZuFNAk6W4cy3UETdGJYGgLWAyEhdR5qtXzJB7c",
  "key37": "4VE1RpJ2oA2RFaHDCEyhrJer3K9iGRvK9EgtKSvWeoCcRr65qVZuzvSbFS4RDVmmVRwYren8YZAzqu23yTHSNUST",
  "key38": "Y83qVan5MxxKYj4a7RXkmucD8r7rKUMm4Y2iBXAnne7nbhGgELUqcBWw3P1cc8sYSJngPYACnyYqp7oFauhNpGG",
  "key39": "2MuFue3uyJ46org5wcZWjuoXRyxXwqAkv6fmVcrW1FLT4pXVT4ybq1QWJLk4m91pPR6RBfXJgZfxqHzEU6zixG3c",
  "key40": "2jLUBDEWHBV2tmnHbJZLvnZHyeFpLjpsmhsRBbpxxrxZCt9wheunXNdHbCqhDr3aq3N3q65JFPLJEvF21C3tBPbX",
  "key41": "37yQNEc4Z4LfEGSmcG1Zy7mTQtdsKR6ykh23XLiGJCBGDX3UQSG4wzGvP9B2xncu9nCJd4YYvzsvtE8BJqUgjo5N",
  "key42": "2TWSLYEXizL3ZZAbrFJZvj9kYUyyi8mgsU1TXxud3SCv5JZN4geuXhQAMRucKBwf6YuPQ9Sv7EcdMvmUaakLcCVH",
  "key43": "419VrDk1XjdhsFaheN8utFPFMNLPU811p3qqk9zZQrJLh8Hgus1RJgF2AwWVFMv3qNREX9JjYQ2Zc4tzMm6k7bPh",
  "key44": "2m9DkXByJcjXZvSqtbvYxkMVdVUvi2ee8j3aPFxqSghQTACA8Mm3z2AbkMzqYDLhx9k4gRuWin2CM9YcCB1Vekiq",
  "key45": "4fiwxUUYbY2qc8xR2hifSYQa5ncpjMAUzqXptKxpMHwSoRn7EoEGK6k3hbvJnLiudzVQd66KDhKT6q8yYk27HkPG"
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
