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
    "546wW7eraTyLhK5MVQy5qANxdfzTARP8HLJqvrX7u5PUAUMoK3VXcSVDe7VGkzr43MfDRgkd5yAKLfd8LHkA3zyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjLNY2VGBCZiqJ7VC9qwYSGYXgyRsCwo7wEVXJgApTZ1xw5TWRVXa6CKrjofK8KZqBnyQcoNTzRnADwXjBnXyXq",
  "key1": "3aZiFSCyyDbf3d3b5S4V1Cmn9HMBYft7y3u2MhWFsQUTLw5u1Gx7Zk4X9DBcGzS1HT3oVr3ZW1rssZiVUXGuN2KF",
  "key2": "2TZSHJ15Fsi5RGS22HY18eJo8rhxUogGLpxKuSQ8tZ5KovhtKJqJMpwYQNJFjur6TfvMcZp14dwsuq5LFZBu69T3",
  "key3": "1YgnSa2fi4RqRMUYt2S3BM3N81u5P4LFa4d7vG9F1SjL3tLDZAoVqBEGPPxdHhyWV45nPpuENzzxGvao4dcF5nL",
  "key4": "2TQp4SnoB6wKN8Mpb5nAgtEP2SdoiHq1CSZCWcVJoeGEGZ6BBVVJGQqiht8H5vMxtPSMSwXYiGusTizHUc1v766h",
  "key5": "3Cc5YqUwAQmv9RJ9wMd4YmFxFLpZTsH89AtykRzRsvf9AWr9s4EGpjzsp9qLoQmgkXj4vo751S6BSYL3yUHA3NbL",
  "key6": "2xFtBEqs2XaBMPDQtcWVWvmbctfkZ3LFPnRqWcMZG9PwBgr6Kxz79xENHvqxcivg6eHdRwcPwP42S5zQ5FKKMzeR",
  "key7": "5xYzTfrVT93Rs5iqVpMRRjefca5mAfNiHbmfDk7JGqGYxs1vdEWLXvoCZZJzRTJrUHuUtCetNMXVK4muMDARw1JN",
  "key8": "5sorHzEpXTCqiMKrKVbP9Msxo7cP5vt636vxvNENnJg77dVcTptpGnxXo1pns94f6KAoSLKH3md7VDV3iWicJ6jv",
  "key9": "dSWcseqZMYDnMcMcEMaW6NiL4Wj2GWyJsP4DXDAzrqKZqdFMGuCHuRP9AZh7AzXmYDEKap1hDVTyCTYYXmdZoaz",
  "key10": "PUVnJcwsaDiXrg4V3fFGw1VvR7Y4tXWuMLtbfuJnGakGCuZAgTLQUK55JB1vvCW3wpyLMcd7ktQs99D9Tgew9Eh",
  "key11": "3ksx8dh15zS6WgPmHBTSjRs5e8WMjvRnDUQdsRBrsSSw8qNycsiW7CSuNoas1JenWpXw1FYBXMp4Fcnk6Z7MX2Ki",
  "key12": "24aHEvSHPVcs7NQQBF1QZNMZQ9mVKDPm1g9CGyt9p2ptizrHwoA4gwxA2jRvDNzxSDPEkUATQcy9CEm16pLy4nzF",
  "key13": "47UiBmbyy9oGM3xqTw38gPU18gpENgRBCQyo5MQBPnCXxSHpYmkJtnPffgDfXLrJXzpM5kbAfiG2eGoosb9ieeEr",
  "key14": "29NHLraas3Nsbk4PV6SMvNxsGJUSUR5inQLSsfYkGmfy6QDMcyj7BxnWmHpJyptjcRXxSvhV9CVhGpTTuKV41jAw",
  "key15": "5wmRHu3Kf5fdGT68XHcts1H44KrdTTaMDMfiv4zULxs8fkpSPH69tL3he1pT2DezvzDydvoFSeVKnvYGBLLRpt7d",
  "key16": "2a8z1rHEhStKySD4GybkhyegKoPGwaBLRPr4BBUGwGwVPDjkGRoqaG56oYJ2vJnQzAn5361W1js3eB9LYhQ2N293",
  "key17": "2tFAvPWweYeyVCou8Ja422eCKo9bK5UU7AQvg8qr3qYYPd5LYGjHvyFU229vSe38WcwENgtr9zJATe3xJynr1kS4",
  "key18": "5hk8abZd6momb66UsnDpcSwd7YG5N47PMysVuWUimeHGum46MnHfDjAWXhGWZTq2tQrxjFwNMCGgmFNAjVo54XLF",
  "key19": "4iVypEhsAaytCksK4hwSXLSnNv6ZTvZDzEtDNoMGhUNafvpXZKC4YU5Xqsz3GAh3UYUbXzpb3GjnAapctZAF9D6z",
  "key20": "3TLGx6Cpp6EJ2a5MGbA2oZAQyQEfqic8rR6XwUDjfwAx6BCVbqvn7Diw1bYNeiiDctqNtMBDYckfkZrKN72RHH8T",
  "key21": "4SAj3cPKumamvtL6GKqCNK5J7CpoTGxaRP8xZ5MNwCtuXhi9LTptzQbMi6p7p1ntRDhC82h7Z6JEb1vkf2EA7SWh",
  "key22": "2s82LfKiAdNuiQrzwJYdpxLQAgwM6d967qMWtTH7mGSpZj1Vw37SFHddaL9ProZ6FjeYLUt4CgMW2pLGcCxfLgvH",
  "key23": "en6W5gXRfKfrUcvmP6gYGVxLz2LA1fEJaKpANZhopXfhtRMSatUWDMcDCyJNQCY5DnCzwUUNKzDr4fLmg58urPa",
  "key24": "4b7aFRfkzFGdcZEGYh1Xfpa7hH3Y7r4VfepAmS4zTJU4PV9Uoudv9ryMEpVEKLNo2KueMM3SKCyUmUcEmCjDJKa2",
  "key25": "5jrrhg3RY3q7kzuDa2EFBpsYDy86fnV9pzXJZT7AWBiepBXCbkcAZm1DHUXGSDxVLpWuEVD8SFYj9hENT36JXshu",
  "key26": "5HYXcziyd6aPZAsigdTXj38rdNCA8PGewj7keo4yiLb7vGzzSciyzVMVbSJQkqwoFrGfZaDyR3UJyLuiQ5QhpNkC",
  "key27": "MZVRbs3UT7Scirre53rpYxnwTvePPJJ4jL6742XJYmKo146d89wRrohTiRd8hUVz8RZK391PJNkCvAdydaMid6W",
  "key28": "443u2rhyMoxqY74NqWLtLr9EmMHmgeSGX5HmWHMyTAPmNdWPmoMJrQWPXydrZo4JWa9A5aSc3DxfrbnMTit6miK3",
  "key29": "PY4GKbCPScNR81ypdKytdCyZ1GvtrJVr2BKWnYf9gy26BnUPCWLBcbFGe1AK2LGkEwsQCnSA7x3eMTXDrjqm2ex",
  "key30": "4PKQ11seXhCvnyeM6zogm2BNAXTSZ5kaXj5Q87JwxvBxg2hr2pnFkFsN1VXcyQLr7Pe2MFzc9i8vpK5u4xNNFkuz",
  "key31": "w7FdJcgWwbhvcrQYzBFs4aR6LmjU1sBJc61EjxhxMe7FAsPFask9XTDo9Z6HvTfeP1Z6oTpXWy5k6Wzh71DtroU",
  "key32": "XkwnRqw6iFaWYJGFNA2M8R53w388SsCVMfbktmbVZF8E1zLoQ8yQ2aNPYmZF8ZjJPG9ydnoRQvMDiemmHgZvTR1",
  "key33": "Z5A7QsidgBVY7MhqynqVhyeQQ5ouzJcHcXvf8QDmQgbQov4obsH6qqGE6W5K4HeN4qZgnqqdcA33uj373THfG71",
  "key34": "3SqVuR7EWweQA229CFj89j3Sc5mc5xvzzJVJDELEG3YRqsYQTvQ4xUVZT9mUyVELqAnNxgKzSuHqnQY9qXoFKycd",
  "key35": "4qFSnQ4AP8ozxAd9NATDdWwenAjwUWsga4ZWtB9KjXyBSCNMvMaAMDwCwXf3TVxMhTHozC7CftCqvSnMxmFojQPS",
  "key36": "2Qt7wnHrZ2m1fyw1kGHAXVsi5f9xRwjz8HdXcqWn3bNFMFX5Ezz3XnhdE15iR1AbcQME1s76rv84HmZuo4ZWZs5v",
  "key37": "3oL4ABgrqFy2WobRgGs4xrCoGBbYtmi45e5XLLWiD47xFey5RBG4nJPjRbcArDAtkhLFjkzanvCjLJi2DVbdn5Ah",
  "key38": "2x1TW1p8T81M75HkSPvqGDQDkrNWiBAu5X933f1eEdVG5aPTPC5JDKrcSPGd2kv5JpLYhTYpRqZTYWVUfAobHKHN",
  "key39": "foQdjxZEmg5fe3L4G61wN6xCxrTGJdfb2xMm7q1Va2N9bP9q1aRWTa6KenLb2zgvFbDj99DYgo34SmXAhXm1tT6",
  "key40": "5uKzEcw7788HEiXBxJr67VmRY7VMVQpGW3S2LYnuj589bh8NAtrsuvm5G9HUwk1upf6JJ3PCBN2TkZwnPkJ7BGQ4",
  "key41": "3mEu1pSi1KFd1F4AUswVjZWTaMdrvPKfJhnQss4Lun1iWC1YsbR6DsUbGqFy9YMdRbaf5LSdZW6SS7aSejSGyNE",
  "key42": "3UYZXjtyRMHu2jKUS1uEyQzvg59ZdccchGhX7CpzH53FvEm2xvXd8aTWw5XAKNasuYS3dzuU3cos5DnVrQEWL23u",
  "key43": "3gdM5TxtGfE8y6y5VruVhV51ZBL7aa63Cgr5TFnKzfhR8Fp83vY5cmSzisE4fi2uK1xCr9SjdRkzZVLZTLzEt5K4",
  "key44": "4Nt4yT6ue4pT6MS1GXcmWLD7zsZE5B6kTGaxW8KUpjReP9qhSB1BqhbmScFhVVUc7PyDmW1izWKifkfRjQCd2Acb",
  "key45": "44PjAt8Rzc79fgUbtbfQ4mdTXJkg3gqec5vQ3XmLUVwyZHN1WhaqLWSNJpyJMihhML6cnPjY52hbzxKSqSutNbTZ",
  "key46": "4py13EdorfMvi7ax4HRKXnoDs3aRNrUSKmxUvCCRYgzZDwiZQRBET7f6VgdTzH55cvGk1xt3aUswbG3DQEekA2XR",
  "key47": "WzzRg59QCG82zERgTRwiGqJByFJwM4bsWuj1RpiDY1suyfvd3BhkveUT1ha7Rru2hm4fd4Vv3HXfqXkZM5qGzm9"
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
