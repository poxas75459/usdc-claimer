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
    "5ehht3S9RXsoe3pFhXw6pzY6VAmiVQPWUbxweUx5AtKXzaeZCDHzuPErxZ3u8kFPCo9zaUsuWvjYfD35PycBZoJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHMSURCDBzm1BRtw6bpPyppHSzsPJ35aWVkNDeYZ4rKSadYP59REYX1WTTgPxqrC3UMR6rTALKzTUQz7qh7sgrs",
  "key1": "3JMk87yhpTAq7q7BGPY5nHiDJUHpsC2i6JFHG547J9MnsBLFNH5ZBygkssSmqX2zQg9CdsDi686cJduXxWSZsRSH",
  "key2": "enBrZkLpiukSxK2dTAPvuHsCNb4BpQJCGRSiqCA1BstQqEeaLyNHAqH4vRQVg76omnK1ciQbmB8nm6DpMnHoqU1",
  "key3": "4Ug9yXeFp4WsKrKai7uHsTmRbJXYrZFFGCMw4zvhCjXvkZf8zYhzKzAtw4TEBTsRmR2NXwAAtUkcXNWwQdBZD4zu",
  "key4": "3TK7AJmijDPyc2eXE2RaPwt326RJU91d2ab2zDyfQYq5zVWEeJPpqQbBG1fbPgfUHRHFBZdDizz59B213bjBnm6c",
  "key5": "xayHYxEaFsDLY7NtuDL51BzWSwP1LRVuu1vgsDz7Vd2pGXwBGbCiPsqm87ttBBMHCJ8BoAcXude7uovhh4AnR48",
  "key6": "3TXgcJo3T8SziFbxyJbnTr9EtW3vNgxvKi7tnQNdbC7XN1pM7vRvRR1PCmrAYMQXdrDzBRFhoFNCHmzbKjPi2at",
  "key7": "wTzdBx7q8wcSiokRxetocss4ySCrJDKcqYdQqNgp3inEDYD5yiz4AgK3vR2z3yU8YWAChXcU4KcgRwekDjbPEuL",
  "key8": "4X8wJTSNyQZWRKJvQxp8etzUf81BdFbEwJVCdbGHTynC2zTSeFLwHyBMVYVPEeNdv9RY2MWLRiC6xSFFXvnvZCUQ",
  "key9": "5qERc2W59oeMxT5u3QsBpEXrXgV26eNn6ePyT7HYLymxBhjJTugU82rzfkpQb7ZgXAS4NWqkuLmXBAa96Cdew5tw",
  "key10": "2YzBSS1Cd5gkFmZrqv3tBTWSjafqtZcSWgggeV5DXDMEp9Zu2X1sUcFbaBMCY5NbsHZKWWH16ZoXjAXC4ycubv27",
  "key11": "T1NrMWbPPakZ9aqJwZPgKfM9iYs8U1HPiCggAtXvDjLY4pymTYNVzbzT1sTnjch7eAjd7Rw5hJGdApDUJavvFUG",
  "key12": "54cegFzHBMy7hUreipogWjAYCq1gzffw8SkJXGixJQwzTp3TdXPHFs5sVAjLqnJme7bJpHkKWsCvK3W2QP6mwNhc",
  "key13": "4Y1HA8Ns9qC7RprT1DF3b2sZuajquNJL95ZH5jFMqo6VcwfdJ3eVCUfPvWHupQbaVtHGbbK9tWyGUm9brs6csscZ",
  "key14": "62ZZrkrTwxP3Mp2bs8A4wtMnxt4bhepseThUZDc4GvXExZqMqxo8jCcgkPb7en13azeFh29sLtoaBYDyRsvsGHJ4",
  "key15": "4p7FQGPT4e42wqshSfRzRZFjW6aHJGGmRGPQExJgtMp8VWZ9G6J8tGXMUbF8kbGvUReqj6fNrFHPHjXmQAd8Yba5",
  "key16": "2LHfj27WrtSaRsA1DNjoKFL6d8GgQDN5VnbEkKgB5CpGV6rjGm4DHT13uUGNEHmc3axKpCA7M9PP8GHAvSpVZkYQ",
  "key17": "9VmbHxR2Jk74qmQpYyguaBAdFzDJjBL13t9i6s5qo21hYm4yC1JhPsq58qe3fuyFT6WJvfJxDoWPUg1PFuvUCyQ",
  "key18": "2h8Q5QK4Uh5r84ZEinzobPWs4KTT9Rgwr6vaHpFwz3zh6gBvr9r2MpPJHb9mvZ9LcgoySrH3AkDabAZDm3D4Rwg6",
  "key19": "5LvYKJ6TQAuEUpEcnwmuvP1NQwJEuPqXXAvbLwaKX5g3LNnxaPrYAshNkZNSSC5wLemp8f49bkAtBsUCptyhbSnt",
  "key20": "3CYR9zJVWPCTNpu6S3yd9mDtsdVGWHeVeLhwvU7y7F4rytNwE7Zh2WT3GDHVcQLdPiQyRW869ymXoT4R4jsi7pbW",
  "key21": "5o1XHT8UrpwMqgXcifUU2dUa2EAhNdPrAVoVAjr2oYAk9XJtCbD2msizMEkCoJPe4E7RrTxrdMEbFKSjFTKR8Ghf",
  "key22": "3w7AryD93aizbcoF3wwXQUFpEMjLouCa9kYnKpp3XFXU6jry3Pwo6vb5xm41yprwPZ1h6uX8V7JEK2qKWgtCW9Pv",
  "key23": "5q7MnuAPgJNnBQQDxiTLL15Pxt52JvShTDxqVTZ1tyDWkHs4ECL9yAEZMzLShwUVC9kLNr2fJYa2upiwLhw6F73s",
  "key24": "5Kht4JR56koN2GsnAL2hj6CzdxgtoPeULiW2LA9zVqNcZor142E5WwMJRig3tZ8ptB2uzmdks7zZ3dP2kcXUduA8",
  "key25": "5t4V24NJgsReNH8d5KPZab9VnzuVBcH7mHLrR1DAfbvV1KEyGn46sJQUeZdcSx1xpThfA89QoQ3sVhfVFfNbW6kg",
  "key26": "5wkZPwMKqxXXeQd59qhxs1YU1o52NH9B4a5Q2t9Hy26gudcvCFbcD7B6RnPRgRodwFCTorqBWQ12Zt3bcubRZYKu",
  "key27": "3nkYSV541XKEkfiqPr1udHapQJWSQ1tFkRDxPkJ4AVUct61fg8DXz48xjoG8f1gdcjo66Qx2fRfLYBtQyzoPRTjj",
  "key28": "5WHAAw462974mnrXWtvM6edwQkNTb2YqsnzDqN4PRQBUaNg7kMMvgepzcJtwUsrGjqh51fsRf3otCGpuoc1ePTrQ",
  "key29": "3aZQLLCQv15ZU58uAWvDD2RDPo3JnYCXHedNjoFLwgWVrHWHuXWDtdsUsseyjB8qLjbLLLGfs1rFmFdyeQdi6TGK",
  "key30": "4q74Zw4sC8561xWNR547K2fQrzcBQNZGrtRiAqfxWYiC8gXmxut5N9z2VtFRtNXXPnRsx2Sjvukq2ZqLe2iTTvVo",
  "key31": "hJtvrBt1iD8dTH2eWjXBjxukaorcbrHmXaUxhps41RBxrAb8q7FrGfDa2Rz6iwUyFMnxm6WuAdUntYJL4wwoXg8",
  "key32": "3TGhtLLzg58avLdLi8ZPLT5ukfHymVC7iucyqojSchi9QAtvcsqvurFtmjoR58ADkDh9742WGUXj3u27wn9Ga68s",
  "key33": "X63YwQYYyKaNwgbWisEJ4HbNaGDDePVMnMXhMtBzyRrz4vKpXCSnML9xAErHNf783CVHjXN6r5iYdJVMjzxUC7x",
  "key34": "4qb4Ty4iDRc716oU6BPSo9s2A7XK4XH6D9EJCuDdMZdb9mDXEKLRFCW5KPzCeMdH5R2MbVriJV4veRL7ojWCQkqF",
  "key35": "5DYDZXgEjG7fBg7FHrHsTP9LRW3AqtDxjjyc9fU85iep56Y4PjozTh9LMBsMeExYUjmP77PLBcB9umLsgZR7CVr4",
  "key36": "5uNXvCjPVmeyaa4MPjEcimEyYGd16D3ycB3JEVxjHh91tecBQYG1VMouVz6TmjuSberWcW3RYWhNmjjieEzAGxnK",
  "key37": "33FWoJq2RkMQ79fEzcfYyxEWCWcM7fk5uyPx4YSTnNR8bV4G9udCpNdASHNRu1t8HMrgnDNfGVSdCMdeP3tWKJSN",
  "key38": "5Pe89sxWK1KbHPFWGxMWXR7qgaGMAMKZkZPvnawQFLqoaxVBwKh7zjwKmxUFwy4Qyv7f6BeLyvrwV1YZnkDTfFj4",
  "key39": "2r342XcN2fxeUpbsVKNYxXPKnecitPUgPhMpyNvuCGYDDJ5c6Zjc9eK1EY8cE2666d5iTrNAnjJY6ML715vtV8Ct",
  "key40": "3vxQkCGnoKaCxC3kTyF1LPb4Gsf6UJYpQbkBTdS7dAFhUikBcvnoLVgadMDQJtU6jojPaAb4HqyDPPvaSFJMYDgU",
  "key41": "2y28a1Q4Kve5NFX81Uvk1jWk3EWvfzb4GAJiHdMXr8RKDdAi1W5FpnUNTeQ2zxZDu6i2rxETkWrLgCAkHfuaz8u1",
  "key42": "3J8HiyCAm6BkAdJ9ktANhpDN7FuEifPu5hRLhJbipDTuEDswYB8RbxewAiULsm8KMy4GwjYLNFDLZCepdmikGLYN",
  "key43": "2UywSgDay6oeHRFr6saVr9XMwZDGkgaU9RrwHJWHftgSiNJ3Ch2ZgZcwzoc8riEEnEFeZ9pEks2PwF583zXyD16W",
  "key44": "4xH94jFcSYpEEyeoD2SYhR74KE1AhQVHsGHiqezNgwxhcRuifV2hwCUH1j9RdCJeEMeVq1ypBXXtpJ88uVqT7uqq",
  "key45": "4XyMgvJE4nrZGmaUdPz2UNX8ziQePv1L6rBEgW1H8UCqFf2ud7A2gdHu5mQCRLCNSfiiCCHcEmWDwMbEYiuzT7Fn",
  "key46": "uqTDK6oMxTKeuiUjxXGmUNg2Md3hHYeHTxT6NdR9LmEjZsPDgEiSdMNyL9UiJPjNeUKrjY2ka8EZ6C3GP85kpP4",
  "key47": "37tkDEoy5WdV6VgCCdgY6Zjgi8MEiFm5upAcbfqEJgfGAMdmUnkeQ5GQvLqJ3qbQeDwWVxt1RKacbDbFautxGuG8",
  "key48": "4a4NfMFAKFWLGnfoYC11zdQAr8aNXuF8bjPndr673Bt24D48dENUMRqfmdwK565a2aVBJGEeNRgT3yBVXFbUArQ8",
  "key49": "6778CRVwoXYYw6j2SDzJ9GuP9z1zmn3ZcZaV8KgfA619jCUQgBBz5H27K9b99ahYJ48NXP2i2kPJtRhKvwMoz6iE"
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
