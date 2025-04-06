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
    "3shSPhKnsnhezPgSUcVoEQxWjeBfM4hPfsdqzQX7DAd9Q81FyVTg5GKMxSxgVQECNKKmBrymkuKVKLmBgdKLNMFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2VDfzqztdPCh92nEvBycUvJN78F1jeyjH3iwXuXLVKFzkMVaVoUUjS2x9ZJoBF7L1QVxhpwggfwpFY2y88ii3E",
  "key1": "5Mo9CR7mSL6Yn52prkR51MBtfBuvXF7ZAEDCego759qDQTmLShxkt3fvNMgtRiiSb3k86jhHLeCoukDk82SzPSsJ",
  "key2": "5ZKB8i39PS3QS3LccKWDESYdprix7XfkCak9koFfGoBo2XWiP8nU8jmr3NC2Zc85u2C9s896dcQqTPzdN3QteS7e",
  "key3": "556VPBfYwB8RTKJg2N2PJ73vbDnoopnqeCSX372CP6B88oHUBmeHTJ5uwLkQxYxUEZXS5DzzHSjdo3uwE6ZCmevR",
  "key4": "2rpMbZ4dBD5oLe7gTpqYjvKQDz9J2LJ6X7k9CDoYfWwHbPpTQGJNu7eQgbWN5QMrdTsnxLD9TrFVvRNoynqaUtDg",
  "key5": "2JV6pXzHX364g5GYLhHT3ryTfqbL2yLmPxC5nJWBFxnKM25jjVLrT8iE29aaRkQk7HeGSBJ6EZynX1ga4H2bEtd1",
  "key6": "4fvEufh1vtQXCgMFk5Ui8nUQZuyiuUC8Ed3eZ2KXRHgFwayoBwPGEZgxEKQGNm9qNrpnHNozb48hSEXXSiwTGkcN",
  "key7": "3ZKvLGsoEwYhf1ak7SoaGTYVrdtXzkzfg24v1aAraxsrNWgzxG1mDQpfMNPRKdCUsJLvi4QMEGXF2seaqZ7TE5Wg",
  "key8": "2tRFiZzfY4WMXZGdj8yHKapj8n3jFVCmh7BkBt6bEGj85MPQxggunvn8vyZNktnPZUeHRLysDwvFc91jN2krCKTk",
  "key9": "4YpbWocAFrcZk2zgCeAjKgr3SfRFAWKwaZuvzc4WjnpQbxRrzKcDE2tfgbBmJTwuzzRKC3PRSdk9MXpsTARY9LGz",
  "key10": "3YKqYF2WFLSnm5FmDYsqot2uTscDy9QhakiY2txPz46RotEb7DaZmLaWbLatHVqZYKvD8QkbCx4kFkvUwDZHz9C3",
  "key11": "4QPuZJ9v735QdgG9DQToWyN1742NcuDxxbJRvVA9osk17xF14LHJUPcM9ajHBbDjBpfAWeq1SmcBHxUVu1wz77oJ",
  "key12": "4fWLEAsXij49GaewX5fA3Pie85AuVrjGaavMHRkHV5unFRLrTA5kBDNEZtHbcnyfymNRY7aB7hXqShyhoD9ojpnT",
  "key13": "2UkCb7So3rnXt3o4FxESgSSe8jEE3dGRcmknpVHi4HLEdgDGzn6CHLoHMSYdvJKVKEsQcsSHVPAuLaxpcfzpFzob",
  "key14": "2GezEQawtLVxVkcUp1GDqY6sNDMiC67jrJ7TYecj86b6NDiDhbmXy8HxsMKCUddYK3NnKpoTAM8tFphTkCLy7SZg",
  "key15": "5KWLHymEFzfMRTX84DQTdA52ZRB9YizUGFeDfm3q2Q3K7SeZhG7XAQtTUQKW1RjBR5fVza8BZEignm2UpVz73dKA",
  "key16": "FznMJPBNBUxQfLH8eUNRA2cPsR3gGw7HHE2hyCuf1DAp23eYbcVhqGWBbjU3AZMBxuoCauxTrGHim6Cxu8txvyh",
  "key17": "37vjafNFzXQn1WCHzkRshKPEeRn9YPgqK5GAfoHh5aLus4ExS8nJ6kPfECqJSUatB6nZxxWnkJ9TWSLvcw6zjAvW",
  "key18": "384Zvw4GFQGB6uTVssTtXJ5WzQkntiYpubocgm9YoH3zwr3ah8QkWfRrfvVuSWwtqD3LtT1w5W1WbtjRrtfNqmJL",
  "key19": "4oGj2TXWbqUTnt7wV7tmug6JALJksG9p1qk4zY6i4h5w8CWSqc7HP4vA1q9fTmdnZhXea1Gyd5RWRNggKaHSCDRQ",
  "key20": "3zi8VHKc58wf9ue1xHkkEZyoMnpyCi4ExymSvPMntRogFUGtpqyBN4QJPaXrVsW6CtV3NTpfXV9tRYxVvJaTJQdx",
  "key21": "4g2Lmk44hLNJ8rskBMxjqthU1rG4FyjkFjX8RFREjgmwPDPe29t42S31AdCwzx3XE1aHEhBGpCDW8mGMPbeax6hM",
  "key22": "2LVyjyWbtpkYU3FxzviNGx9FERk4SLUJGyRhSnYq4ZhBpfwmaxpkP74jS1m4vb4DHY17qJxzUf58iDMuKdrQkghS",
  "key23": "5LaCUs8YZgZWqRamPZoBPt5KG9uZEvhTT57FxE67wxoZrsqx2VD8GAV9WETZrGrGVSu7ZhFc4Ftse3tozWzz5f4R",
  "key24": "4YYBMTnixNZPC4w2Z3u8AJgm8VbRiiJ4jz1g2nKeYQRwRgGJMVJ9nbbN9LNDKXZUc5QtJT1bNDtnTWp448AuVmHK",
  "key25": "XF9qP28fjXJ8z6kLyXTRu5fcDfKQcHRsSauRqGmmgMhACyscpxP7JvP99L361GC4Wh5Sn8cTZpmDcoEaPxvLaeQ",
  "key26": "2SKZQy9yeuAWt9KY761giMQSXvZB1L6UkuznN5tcmeQfssmm11dv37GoYzkBBJVufG4z9NHN6MvbVJbszGH3UbbJ",
  "key27": "Rw6gCV8KBMwYAo4dST7hUZ3N9CTAGsFaaFsyg1EpBckAFg9EntSay4yZqWfifRxYxFJceiWjx7ZdFmLbpsm4J3e",
  "key28": "4FGuN6Pi28QXmkyFULj4rFiRBj2jpp7eay8BGdmXKgru9oUigCq8dQ5hv9AHNRJvXn4D4pKGP5dNMxWsDSZr2uV9",
  "key29": "4bNKQejZsAGAp5Tk4V6cLsmEppwzc8mdQMWkwbrQTh9VsaLfLfvwns6k6L5jkmhQPs58FPwqFa1NYx5sFMN2LFro",
  "key30": "BwzWQsNBnsYiQWofx9aCrkRfi7qRzeEazB9hWHpUbUwSK1wFoUrzdjjaGEt8B1pg4yT4jNJvV3BCS7eUdbjaGy2",
  "key31": "66QW8HPCExTqssVA3GANaSSnzLCcB7e7CAZAV7UDn92jwzKevvrRyhUYYLXt3LZXy9gBVU2TBxcMCqCUFx1zcnvg",
  "key32": "5nzgat7jNfgd3NBWKkvn1KBzn7hNmKP8KRECh75xb4rWJRg2LKsUy5nPMGn1ATznjBwJZcfVtgF69PAv9eo9geVA",
  "key33": "p4PbdM7wkTXg7zAK7SdU84HhvuBffaqz8SPSrJCgBMwPXF9iiYvdUGyQaTjtuw83H72JAKjCq7LPSMnj7FypjiE",
  "key34": "3oYXftx6SLLtJWgYjWpu77e11W851dTQUBLtfVoT3nyncxVSwuvbPyYiX7CDVnbnp4HNtRpQj21M5AdrGwYYZceV",
  "key35": "2kqnSkVDzLQfoSpBcfvnTcK4KMKYPXrRXJUcB34ZixbtYpfc1L64Y9n3BAnwG4imT5rfZmYTgdMf3MCzN3n7QJiA",
  "key36": "2akXxJKPQqXhTnwPfZEfodpaAfgAgoLsDYLySLYBqPUkbxzBtGmPsEVsfpHVkQMRyUqFVMQHryU6Z92ALkUCzp5N",
  "key37": "4fs5sHonMSaW1Vkrwr32evu6uNm8tPMNWX1tViq5xYfbn2GWSLG25ntoiAyzAgpNA8amCFhpDFRykeh1dip9RZ2X"
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
