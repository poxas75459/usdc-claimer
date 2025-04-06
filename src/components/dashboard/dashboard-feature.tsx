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
    "3AA7C3suckFnREqNGvXSm8qkLJekkyK86LLzYGb9LcsBaNusx5N5iHTW9tFVS6n4DWqR7QhFiG3ifW1kWXTZhymA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Emd6A4L89MPS7sS4XwnCNk1T1LCZ2ntJsQEpR5HW7YeKEinZGLg1PkoSxZwVTSdwjbaEsn7VupBB5u11KDSWz11",
  "key1": "2kC4VB5d2g4mt7UFTa8veJVBt7sVhnedfTDvxtkZusvpAgNGX1rxraD2MciAimkQLPquqQVBU7hSZrB6s93NkcMm",
  "key2": "ANzy8giL7Nx8dBsNEz5vkX9T41FxYrp6iLmPXbpWxsnjFdxcWYckrqjfUuTp69WJpnHj5LUcZVgzBe1W5i9QQY4",
  "key3": "5u1cMaCAByQUip1KZV58yaSgjzAvwUAP7qkZPptkwBKwf9BdBQBepmfpCHhTZxHutCLdVY6sPY44ytSaaKcbrZsA",
  "key4": "3RYBbPReeyHmpDRpLTjtcqaku9hgMpe1YUm15ZWDF5KJLshFBPvWWeHq9GmY7yPzF9fXfERiTytTzmgezDNMvTXK",
  "key5": "36C9nAiqUNKtsWe58henBASrDBLHpdbdN6qU6ooNuiSFKxinScEyLtCPMuNUB9kZodMKip2Ukn5KZVDkoqV1XAAz",
  "key6": "2BEtMqN3LQDfuh1DPStDFUFAMCUkeBkes5ShAoK8ufqZbUCPE6FUm2BrrHkCsULWSXowpuJwzbAK6rtxfrTuJjA7",
  "key7": "FgWzs33yWcj6N8d716XuDsmnBAnnsbwTkGZ9S3YHh6Mbe74gbyXhH1nyBamMHGMcA6Rx2Su9o4NWarY5SBTw132",
  "key8": "5FoeYgUW61Q2rWUX4xQGJMpUTULhxiYZxF3SVfjzfJkDP6rtQiC9ofLA5RLcyyNJwVMBzekHtWVPNpN4t8xyMtBy",
  "key9": "zZ62GvyDACfJz7m9smgvrH4Qk1zrXmgaStqSMobkksKFgL6kEC33rhbLQXmXzxeFQDSNLJoCsyLeFifouqLWJFv",
  "key10": "5ewJ3UP3J4597yGViVXRTZ18uMVhmwUyuGrQhwXMFvGMK1HfEZR1DvuE5QBATpSBSDhE3qcExri6j7Ww7g5qCpDE",
  "key11": "4hxi1giWhP42hFriYgzRk64ETmY31e4jTLCuiYTFmUcWDMbyY9hEg5QNauQAeiAASvwio47RkWArKKcirQUuqoUc",
  "key12": "5HbCqeiYQbjgVTCkzEHrHTLyNYvATBKYZSZourusVxdUdMwQ9ZSe8y9yAD1f5USmzShButQgcxmSv3HiuxDw2q8u",
  "key13": "QyCaxKkDXZcYwU56Wieh2CWHaCSBVLbFR5JsBNaJfxjwvwtNXdeRczSCJsuyCzWXq9BZBp76myR5JxkSE7AA26G",
  "key14": "2NBpjEM1EPDcp3LWHojRaHKbGjrsH7LiKRropZUNcBWLpFu3GtSrJHCw4NG6fjoDVMNWM2zhTp5GVu34vjCYXyjL",
  "key15": "3zTo56DzErBcyYLZoihbrkJH8Yi2u8cRdhKc6mfS53D31fxP9Vf7vBLWNGaPAJVt1C8HTFyEv9sr1hHCPczaLS9G",
  "key16": "3KSLSqa77ZmQr4i4ZSfqvSXP5LkytdCnA9fFJG7DMcv6Wr7PE5L1XLwM3BJvHBZSPzmxqHVFtJb8MZSgZUZRfRfq",
  "key17": "49wdSia7aJjXCDQCEME2bqgFQyyV54ZYbbWvoDcSqotZxUHrJUduXv6FW4tmkhrnvLg3KGzB9VXBN8hcELVmyKS7",
  "key18": "2Lip7CR3YUoZJFwFfftRFt4S7mMC1fXDitNbMXNgRSKbFDToPMeVrAyv5brBt6ZQBZdHko4uo5EwDpTZKePCBSDi",
  "key19": "3RAApNxhkzsf2s5FLbr3hJ9FNQtBidCg1nu6MvgfCCzeEFQc4LT1ZNNQ32FHFX5wmmhAyMQyBEbd8x3fQQHEV8rG",
  "key20": "3ruQAvjd6Mswx2GBwEsiCNBtPP2LtQcBgZvPwVnwjbpNoTymmNpLKMmJoLnVmmAsR5S7kuRkyF15jbXWzxKYquvU",
  "key21": "4vokL4x7K9S2Dhg2SWGexWeHFgncHrsuSbrpT9kDmpRhoLGzEr6CCMsiKbLGGq81xgcUmvDiv6SMy7q4Nf4oi6PN",
  "key22": "4Z1DvT2edkSaVcFBpRinNwFDB1aZc9c4mKjMXVEBLhxyVCQPkRPTREwM5BNCfD2KGvgRHhXVrsC5Dg7f815MBDj3",
  "key23": "GQ2zo7CGT61ZwXyNuEz6k58EhiYDK26SZwuNVDYrKV9NjbHK3ZfGuDyNEi6xwbS5nFMBUTdM3VXTPen2W19rWwb",
  "key24": "3Z4wj829CBq1w8UNAmgE2aei7NJfUfZbPXBeotPUffdc56eYi9BaLRiKh6m22k8hcoYwqMXfaeDrqG4SNX4pQ9bG",
  "key25": "4snTZbX1TgkY3FB3JkHRa1hjh4L5UaUAxwPet4JgavLYsNXeRFMiWgV9YsAJKThE3FgudNnUeE6uxGNjBBrYVoPE",
  "key26": "3C9Ki29Rz17LGqyxu4Qic1xqWxri3SE1yraikPSgPbg5x3KzcJx7yxBxQV5xHsDWBV1qjZ7Mkb1vHp2CbZij2N4t",
  "key27": "2nggqDAjZoG1zErEqc95tzdCTDHAB4a8krR1aghU9BhYCvxuHLP7Hh7iYpNRA4Bt2zkDijtxDx2iJ32XLRtdycrU",
  "key28": "3omUc4d7dtEP52TwD5X4CsDkctpukN4ujwemiLEXPqbHQ42ez8i1p3Z4RBQjNmSK85DV1FsTDsb8Xq99W1Af7nNf",
  "key29": "2tehvqJQSHQhpjbRN9rSD4tEek1X2EUypAegDErjrgoJqGnTYHENihdtAdGZNwbtc3nLNtVCjhtV7qtLGQ56umJ",
  "key30": "4b8Fh2PaskYXGT5xNHpHqCV3fAdFjiJWsAMStyN5c9CcchFGgPpAhkGJB3xiiZgLqczz86Bwyou51ZNEMePV7y3r",
  "key31": "2DahPhmCDDGA7V5Cvv89vyDGT1UdvpLJhmsjBxyumd4JTAphuDwjaxM9HTfUEW7YpxXvhSNRyXg8AceWK62J14Rc",
  "key32": "5knd6KsgRb19nudBauaLASLGvhmJNpjkfVkE3qoTJHsT7dcMGmknux1UjmwiozbM1CpbtRj9ZRPG8j6CNbAaDNzu",
  "key33": "5zKSFw1Hc3axJ8NGd7mRkzwnHcEiicGNEAJo2WAbeJa4xnwXtD5mJFWnheeLZP4CMyMmcgs9FEaMoqUgKPC3fzz9",
  "key34": "3Wmme3zSLpNdkx8YhuL8dsFk14cPixKJahWb14H6soneoZwU3gc1NhctGixYce3wmsG33zUioaCynrGWqkdWAPg2",
  "key35": "ReDo3nBbM4swBDkwpoN2NkLHCqbCafbMeMhUBHBrJHnMHZXDWcLTaAHmkt3T9vvX2nHrjw8H3VWwVie8ZJUo7EH",
  "key36": "5Ed3mazkKHPCtZZLBUg9cm2F7wHwc8E5Xiznuerz8JaFzJiouwcbXPDym1F4xBGDeNZ56ctKVPBrhqX9zzSjRNNM",
  "key37": "2fTf1e7mteMDCNhAnGjRgo6ACMtjUb53kcwoYdhyxTzWRiP8Dfx4q5VrT96ZfSwWT98LoVPzogcNs47r7ZSmCAdf",
  "key38": "5umPUGhcu6DQgER23RJtrAJYb6wC8c17SNCSys25ReXAmeGynGrCoTzuvF3VKcP1nd7Qt77ffv6P9FBbL2VaJiN9",
  "key39": "3utpR2g32Zy3N6Pg3GTUx7pxfKaAiiMLcgQVUZmXMoZjErv8NCH7L7af4avPDQigiYV6hYt47CWtn2LmfF3T42te",
  "key40": "2cv9xdgpR3kDQ2qTFWMxW1msuDwLkMJ1smvTfwtj2sFhdnk6mpLPHoiLffkiU39nNSWfTUhwUPSK1CtxJBe2smy5",
  "key41": "ccCcBBL5tHWahuK7hJjUEsxc8tAcPVzB1Ti1znJycVrV5XtB8QZ6q1cFMNUNfjsE62KBg5vjtyLeo3PgZoK5zT8",
  "key42": "4Gt9oBi9VhJEo47AFnijenLsJDf7osu6yLAfoiBsjn7rUhho4ToAPZKzsSyLQyJTFERTsgkmw14TjfEuNDUxv9VR",
  "key43": "iLGP8QNHcgWX7c674Z6afpQ61v3zpTpE84EwpcFFDpLg7PXMPiViqU8rauwv6zP7VJXSzNzvMNPDSjxvf2XPghp",
  "key44": "5HUFojLwiW8uAXzHtesdYuFhPNhe9tBu2XJXAikiZrZPge8s68PzCsCxFPNA837gwUZUX2Wpa4TJgoer43tTgU4E",
  "key45": "2uKWp7aDEKxYXKuAQCNo9rCjbkVBhbayYVCAkL2ne4vCcdqDakjyXQHsXUR6kKcZYzcmgfrmp7xVYz8zsFa8MZtu",
  "key46": "4oUJyzVjm7TjKZ1CGaFJ7wFu71HHuFQupoKKkFb5XePLXorDXianfp6r3K2LLjHpkPTrckKnA1ESBkJLD18T7JZe",
  "key47": "5oeuioRwXG2QdkEZBP8JY6WC1rj773gr5WN74WyuBT6cnzHaqn5oTEyMZcYH8AfN4cSL9jzVebDLbEk5rdfbaqoo"
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
