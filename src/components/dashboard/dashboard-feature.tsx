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
    "3AkKrXf8tHJV4y63F3D7SkrV7omwtt3MTUNqnSSjp8Tdvsz85zp3756rczUM23amjyk4DquyqSpJtZ94HnrFGvc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEZYTVMgBrDCSK587HidWJST2zotnkhvTx5KcBpgUQQ6rbwFLhwBLh6rhNp3ntGUYtsS5VdJQLntVALavWTqFDh",
  "key1": "UekEb6bEpi2knn8BJNDCAPTiphw2TqG9rbR7GWzziqbNMPH7ySRNaiRoMf4dWLuSkXynDuJ1h2TN798Wp16fcCN",
  "key2": "35ggLy1iBy4eU91GzC4N4FTdBo36k1EVZZNBnKN9PP6ciqn6uuTCAbrRsJzCuCjF7yuEmn2ydtGYUNS3DLmBibEn",
  "key3": "r35Y3uevB9hvfecYDLBpVLqksiMvpCcUtgDkNbDf7mEc5L1rgc4AFg3DNuLk3y2VSGAUUXr45sRv2MQbRepYyN5",
  "key4": "Y7EJa72A4has62YS2ohvqM4p8h5N2SDHYNrSg1JpeBM566Yq2j3sMvDPfGFXuK2sn54paS4zeTWK6C2d8YnnVuk",
  "key5": "61bCMhWcHaca8dk77NNeN8SWdV8juobAEczu4szBUTsH1j863WBLVzKkwJ3yCDRCyjHVpqY39FrG8VMpCbuzyeYv",
  "key6": "5efJnbj29NApgSzBwiKZm9ytH57FACP664X1gcmeDB69FXLtWsxmmZ5BGigYtqjvoxEYhg4GipeJSbz5PTZhiMrS",
  "key7": "32vkWKnvBuCT7whBmLouAFKQJrT3cUdBJRDWLbZaDdKhjHGcvaQADfhs3HRPgV5sXECtKaeTYLC69QQqf216ms31",
  "key8": "n2GYsmr6ATazsb1BrrvziN91FuBrXWSMNz9i7K5YU8tGf2SWmtG9s1sBFm8eFjRtciCbZ9PgaHbFvhsrq8T1ygU",
  "key9": "2b1L6mBRWwnV4GbbALtkRgnoezqytv947eFwiosArjFGyPUQpVJw9djrXkrviDBL7PA67SNC6HSDZREaXE3zM8TC",
  "key10": "6diLok8PH6TPVGUS6tnCaRXNVAay4QYwsFFjtTFuFdfZJ9rNRXM2mJLVvazswANu1em1eYewjyDdoAQTftUYekp",
  "key11": "5ToofA36EcATkiywRt5YxbuaPcSC8Q12i1Xx4hqCWeywoy7HkCFmKNuzMimXFtWoPxrAJ2iXkzTx9oWVFNX8Toi5",
  "key12": "4dDthxkBgrG5jECJy3cYApRaLcUuUjodcjh9n2Nb2vZPy5N8gQE7bYu9AophM8EDELVgt3q6NJfDMee2kawxHk8j",
  "key13": "3QSZ533qEu1ZqKd3386Lpft5i3CNZTH5NhR4Zc8MMHHMzR6Va3frM7nqM7VYaDVLVumTdHaKNJgkyYBxT9Qa4qKm",
  "key14": "XgSvbLUAJFVuZuufwn68ZMqACHt7P4DM8yYJhwYQ163ms8rVz4oLp8xEX5tS7eZ82JYxzSV7p45jvwR9mPofgJ5",
  "key15": "29yEpXeSGigjhsqK6qzFNbsa375cbS5FhWDcyGN6yaAnFBcow26QkTFaasrxp86UKz33VDkjhMpC4ijN2B77n4Mi",
  "key16": "5eVy93GCTyFuYXt3YuCCj1ZqZj63YGoMMB6ro3R1ibrRTdJHD6LaC1PssmJykDyXAJvD5ne8iV5Wypkox5Ei4mwC",
  "key17": "3waxowP9pPEmu8QQoJcqcYfpSiiv6WKp3J7VxQ5bDetGWwLakMUYyYh7xouM1dRDy9MyV37ophMxZURKZbjJEwVL",
  "key18": "5DMrh4HVakQ6HRkAPg8tD94Mqiztr5GT8B51H5e1uWu2dg15XV452sPR7MtSJT7XmDsFAzGTuZsuQLfp8PLgkme8",
  "key19": "5ZaMGjwVmVtvzxjAEBHRe7SZq6skC3Fg6jRDNrLoCC1rVw12iiLbzNhmSzsmEK3rSqZXrThKunkKnYAPrE6NzuaD",
  "key20": "3wpSWbscBE7z9j7bAACPNonhJ6M3NnwYAsdcwJTT345xLUnFhDLhXLwYJF5emzFqy82GBF65s2phuBD71kT53Rzi",
  "key21": "4Yv1nfeKnpTDG5Z7NmHWs2RnsdZnjJqCSVbYcMC15GmaU85aGTLScRziDhYP8eAbXgLr7J2EkJwfmrKbruTHks9X",
  "key22": "5HF3T9HfCuWtjcAtPTaNbEJBmJKcMSUi24Y4E2nM4WFvtxyCsZ3BdzrefBXuJ9TS6QfR3hpRDxzuW8fjsQmuf6gn",
  "key23": "55UuXXjPqMrtUeWwYAfafnzyKk9g2QZkGPxjq5eNTq3L27Uinz5dbgExMHcyqXKFvzX6FQHmKo48AnPi8wwkGGxp",
  "key24": "4yjy1GBfMtP8E29oxrGtK3u81ZBLM5RSkbm3QVZe1UAMYGByTohgCvG5mmmPECsCTnuZQFXr7m3uRe2cHrvPh3uo",
  "key25": "osJTJ3NFGJfjvq69Xr58gW5vRSF5CsbHqdfxy6s7EbrbVLuiXGaAKnuXAMF2NYqzz4DiE8XQ7jHr91cdNLE7aN9",
  "key26": "sxAHiQygF8eJXk6yYfdA9n2c8p4G33EKLofcmjvGkUsAgEUDWrHd2PXWbRDvGu3ZEcu3ueq9KD9Q9NSuXEcS2sU",
  "key27": "25kfcxSRQazvCzWkMjLabNCUcTYkb5tMh6K5ot6jAWVxpAWwHa4RDFD3ZPzaNajyhWdWtQhmuo2FN7YvySCc7tBV",
  "key28": "4hNPgELq57drmFyNKJDAoy2VTBhEcYmCSUXvCbR7htL3SkHaCcaRQ1U3nFHkHeoLeT3ieWNN8dWGVpgqkA2pBYie",
  "key29": "2yvDPtCqLUF1gaKRFPvtLaPakSdi5kxHoXq8iUz8U1sPTSdDxCQSupv3uDRY9ngV9M8HbdsiwU1c1SLrSHNYfU5s",
  "key30": "4WGMCVEZzVmkni4w4oDgxzkyXUB56wKanvo5Tr8SfYzpaQa5yY77tcSABi8MysExCfxmhrZUNTAoeUigFEyKhiBw",
  "key31": "TiiD5jCZvHnUQHPMqK2MHBDmfV3hhMgGzfYoZUvp75Mv9zWoMxRaF7J3xxe7BmyiqFkAqudGpvbfh56SgMUFVj8",
  "key32": "3ka6Rh46i67TGSj6hxWhmyqVjLrebxWZLBm4CXocT1XjmBEfWmeWrU67C4o5ruz7qYZLoC11uiHUBSTf3XwrFTwx",
  "key33": "33HLx7bq264nHRDCmuNF7tBYfMY9tpZ9eq6ftQvuSVgRseEQacAU1QECAF3gVb7jzfWCG8qGbV96yE2syjMHdssP",
  "key34": "535uWJj6ifZ6arYViqvxvpZnd41Erg5VUoMhozjWVVfakc6QkpMu7GdrJ5PUU1gfGA9Lp92hCviV9M7iBKJmBLSG",
  "key35": "34gfwCBEj6sSzwFGMA3yLNML33YHAmPvfDTTdoM2z859PNvFWndeqhnc9RLgyn6decKiKpnvKPRT5tSc1EAdtrB1",
  "key36": "5hDRZVP7CDBjFP9rr2wba5Fo4c9pR6MWmubEyNJZFZrLT4m7ppaXvWMQRRzP2amRLKN7GEF1YPoqrqxQFA84Z7Pj",
  "key37": "3oyGY4peLACaWKZkud6uJPk4SsrCnPFPGwyrkMqN7G5pYr3K6QHwPzP8JXuW5GbgLHnfQ5UQShj2cnn8CDAi5nNW",
  "key38": "4iM4eS9WendWfCFUTANLcemjNW6wPHsYgT1EaSnyS62sVe9LW1DQiucgXbrjSbt7mAygxsTiwyPxTJ9yEn8qLr1M",
  "key39": "5VN5dzJS7Jdk6NTKjTzDr97hLb7iwhcckVzZUNCN8i9XqC9ELHZwSjBQCmoBshdK8gDdDURA3fjZmCFun2iad2r3",
  "key40": "bRM4TfmEYUbWwd1ZFFUhx1CXMUjSXnydj3CikSRG9wXdMJTjUvowZ4DsPLAZ5iU6NPf8YbCNnqwAzjAj9oWMLrM",
  "key41": "4HDo3f6eWreVxtQd7ndm9G5HoKBdRYQczFLhQs9heDDdYL5khGt5BC3oy29J4tofcMZZjLH8LwMpJhT8F6CH78FB",
  "key42": "2gLSdFkuvEYfdTwRLUkvommPX67NwKxZakob7W6H7hT28VwSVo1LVW7C7TTahhqabFnpbjuP5RyeVjMuFm4qfVrT",
  "key43": "31wK6r6AWWxusmGT4nFUVB93WE4sVSJgkMNnTZJsrsea43MKwEGJFnSADABEvV1W1iWZPZdWaTRWNVZqQhYW5md5",
  "key44": "3tTPG6ugMeQJ67eZ9mULGAiPcmwSpe16pwXRCDjJy7Fq9rpVCRAB3D3hUUm8prHEvDYPXw29z2w3FhvA7qFQFvqg",
  "key45": "4mMVx2zjvfiyu7z4Kg4aENKF2A4gw9s4F4kGMyEhNY35LbGvzSpResCm3u199MuS2o9hryeSorf1faWFkCQxCqiJ",
  "key46": "5P63C6XdyyhZzQMs7XMRSVZTjMGVcjuGm4KGQNgKyBSJMGCkpPLH6V8xaEBR2cLp2g8xnzdiN9jtbraqo6GYARCu"
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
