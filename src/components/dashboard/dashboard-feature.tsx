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
    "2BB6an2M7mjtRhZmNihXkPt7aBizzcPmE3UzsDwm5roh6dyvpmp6V1RSRQWVrpxn3ZZHvYUT1VQ6H79ESvpyUxWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBnbthT4VHsQPFhAMGf6gJU7WUA5nrKeQmrp3QSq1o6kJsdeFTKAjwmQbhpXPcj8Rtj26DvXNiYdW39sVy1w1fd",
  "key1": "2YRT1yTN3Z6boHVpkbvvJiKQnk1yaRXt5dsprvoY6o9wpCvvQ7PcaxTtQh8WiY4WmEAxRN1dFcrsxSd6q3rbNy9E",
  "key2": "4GoWixroASNwrHw2MkpNcneFroTP9w5L7wLT85SAoUPjtJfHrNpE6okqVdewoBvq66XWCsGr9iBWmztNbNGKwKBV",
  "key3": "4F65nWqFVvaUjne3Qkqy2PCbbKBSQK245wKAM9NSRDK7BVg3suUz7M3DGB5YZYCpQpNMtheLgR7M2JANhgAYCV3o",
  "key4": "3VGSGM3mwSM3GmRPZqaaL7KejHY2WnLUG8tcwXvSqkwq8UBBt663JByv1tZN7rMvvPczfWSxfDAus6dZbVJjYmuE",
  "key5": "5DVvwPqAwwS6eR2gLZKdHptnGqNznMwuKA5cqX2iNE4y3fVoPiYGpEueACm8zTMmUkBADDEpMwZBDcErgV2qniw6",
  "key6": "35e534mJV5vAgJ3p1V4t59CVJvc9tCGux1sETQHA33yUL2fzf4srLFPzXvkdvEGcMqGvMBgTekUn8fzGeGLsxHNu",
  "key7": "257LbKQvfrtsP1cVukn1FoAdSzhgi5FgaSFo4VdBknzYHkRvhZeC9knHNJphdvwa1GLEiwJhaLagKHQevDHBkqiV",
  "key8": "26wzTVn9fkK3376NGnbzgxkCYzX7BkK7zfRihNNgqt6DUcQWJF4LWxzkNmttFrqGmDq7bBasz3pmCXcrbqWqZuKQ",
  "key9": "5EdJdzQxx1i2TJC9NbaxFF6vrkpEh9fvzQcWqaPC7P6avgJ5Tv8936buJuSsnD7Aw91upfad6pNfN9uTWsenG8VK",
  "key10": "3DDbiudFRBe1uwgw1trXnxBaUAyu583AyZhwMYYxNiVoYFvUeRPCNhQVQpUbxL92idUwyp7wYVpc2P5NA6e3ESGF",
  "key11": "mDi57vMTGpDcKEkGoM93ewU3G6sNMej7r52dhZYAgoyUE1qEFHGsFehnmHWBqPnCSgpbNFPFTPaZ2voQ37F6cbD",
  "key12": "51EXZftefC6juRyCFiWTT6wPLGp5YVoRT7Djib51cYFXRySfnoczGfquKDv9tX8ZNxmok9J8L6nYso1nxMLXGDg2",
  "key13": "gEHTnY2fA8hEQNKpifg1ajHF1uDkwRFSoXEZPxW3jdAaiLqDgvzRHNuWoiLznSKFfdtGP7RCCxvYNUSAJKh8WkN",
  "key14": "2Z5nbfHdFgczzwWeyJAKUNXfkFLbe1gWqHhA72kEza6VnmmK35VmwGW28JwYGU1dfCh9vppxTu5gex16mnuno2z8",
  "key15": "2aQZ7HsvQtxn9WwDdUsWHYzHiyyTr18ejZDH9ejC3vRovD6CKpVwjFDAW2q3McfAJQrRZaYh4oiAEkUivyZfJLGK",
  "key16": "32wvDVWtXehTWWtbhpnVqBDjpLthDBGrHocB9noweDH3N5hhe1eGSRu75H9pvR6EYVf5Pss1yFdczhTeBdLMGzMs",
  "key17": "31x6jjp1L9gpxqkBb2DPq3AZeUN4ghya7okTprw7oonZ83LACz8Rhehek1RCKjw6kCUqogPe5iXB4kwhi1nB2pAJ",
  "key18": "5hHcBoGAj5dgdpHqYVH2v5x1UvQHkam9TWEgGu5f9JZBvUobB8H7ZeHGDb76f49m4Tb8sbcdBNXFzkXuxkuegJSX",
  "key19": "4ucZou6DcYGH2bhAkppgy2ooNGigR2YYW8BJM2QTn58e3VC2QQNeGB2w6euLXzEMx4cas2bYDMQmCGCxYn9828V",
  "key20": "4LiUy3r57AvjxzFWnYHDUUy9N18xkq2TbLgCJBmcsD5tKm1UecBUNmNhwQPU6NVomWzexogt1uXnbW22c8tsq17z",
  "key21": "58kmD8zFDRXpPCFN6jMkYZT4qWMHtdH3Vs7thbo9MPux5rQ9AtS4H7f98FhcgtbGuj3gXzy5pKB6C5w2Fe3aNMs",
  "key22": "66XtjPZYW8G1BheU4eHbPsHxy2R4X2uHZZ9P8di3RQM24UraTh3c4jjZpLbug2oSh5YFQk9N61ivDpaid8Gopcy6",
  "key23": "ehYMdcTBvqu9pG2DHiQk34hChdr1JPAAiKn4kMjQGuENRhFb553MzLGxaZZ8fFGSQEhy1945u6STMxAQ3yPreMT",
  "key24": "5p9wjN6r9eMwk9BtETGe6TdiXMajJ74jZzLoMQsGJbSTqjuSTFDy3asqhPi22VKvNXtzbXa2Vf9tC8PFwk7CibVL",
  "key25": "64osKZGscEbSGPsZCki2me1tnmu7R84QsUVZuGtkGR5XCzisJ4Q6Foh2dicvyJRhNe6SqMWSxeWAnFM7UGxyL4CP",
  "key26": "36NMhmEax9yXcAWUMHD6oJ35HDfNthnu7yyMW1T4dCmcmDBFagY6kuA6U1XRUZVnqcYVi7uK9vysJgzJtXprXKxe",
  "key27": "FErQYThuAAo7cPBJ4g5mUngNp3gmC7poFR7m8sQfv3LqFg9Rb7orzukUPhhA33sH254t6U43Rcom3dQHyqzLTDA",
  "key28": "3FnHbCFApwLC8f9pJegS53MF6NGRwMNrbsR8xHjhnM4WZBoZdNe4JoRffpLRQE4FH1jWYbRUYRbN1S1hzwAvxcBh",
  "key29": "2YxSB4Q2iXrYkj5PdXBhogv8vQYcKD4KcnuE9iHkqfYD4h76KouBisN7bYbmNXs4SMZKA3iS8K39wiEqJxF8Ff1f",
  "key30": "5rEYjNgdTMwmqvTZ653vBXo7DYR1Dneamww5p6U8bDqLNmXJJkmNK88xaVVr5JK1R9QCGZM6fYfj3twPCgjXr7d6",
  "key31": "55tyc7qxiGGfgf4Sb87goPRL7v18mhcaXBhXgf9sVC6WGUT33PYXtRd7DEQ2qXbFUzcYUiwD5HetdGGqzUvkvdco",
  "key32": "5pbTk9p16rGqMAqnASjSQ6uaT7CSdUK24CACX9WurW5n3EsdjZFmw4smdHyRENptjGj5T48ane4MQDddMLdo98z9",
  "key33": "2vuKNFMazvzP85PhdD9WkhWBmQVHxx4Fkz4nc7w8jvEZi2YriNXKCorhFCZQo4CQ29aXd1mREMQsRLnbDkJZkLTm",
  "key34": "38SvkmgaL8eGAHKsGvwL7KQqb5uTTaNG62vK47Jtf2riar1TpcENqBrmU43ZSzMqgSBnATvjf3iTXUyui6xYSmQY",
  "key35": "2kEQi7Zop839Pjd1bBt83e2fKBdo3xh1tGrkMXS4RJya36sK6DVGDeeNFm1hf7fvEKH33iyuw4U8oRvtacBn9hWA",
  "key36": "3kaQpE9oPM558FRQitD4JAB8f6tasGU6Hxw6nyQ2qQSHesNFGHFmNTYChQmCZ46vY9mdEe1x99E1PjQNZsFDD3AD",
  "key37": "4yWn8zyhMWYPtvyB55uFhKWWeY6RVCyeR46z8aiiyHZRwqN5rajkK84FZmFqHBtPb9vx6ceiaUHu1D42juArVEDh",
  "key38": "3fepspi6BMcUVMYpKT6FHYibqAtHwXFq5de4aW4WggrunSQ45N6MGzinZh8cN2xM2PbAizxRe9bV5pqCBiU1RGgg",
  "key39": "2gNfT9iWHZRMRjumUZLi31ZAtktTdiLVQHhstS8M1arovfrc1vKTw79GZCFpr15FPeMT7jbfbUHXod11TVtTn58K",
  "key40": "4Kje8ZWAbPUsjd2g5auRG6iX1GHuz6trCKJX5rE1fQX5DLEGtLtB6CBq4LCQYrCyhg27tFFjn7VkTVF7ochBuY7q",
  "key41": "5pTrbM3aLFiqM8rw5xwkQ53YfdRYsXto9SDHFxerdvfSif2poSzbHDXTfCJ7yzudJiqokU4poKGKpJLAUKM9AiSN",
  "key42": "e8KNbM5e4Tp9yjvjUPL6wBGLvLzJ13SepZbVCDXTE3sG7X5SD2nfSWCwPrTKLaynXisRsqDoU5LWzbzQqZKJbQR",
  "key43": "2AL1So2VbiHep4NVj94rxAg8WjqDMLE9LuGcHUbrKjm43zhmgrz742cciKNAgbCy1qdyabGj2394xANaUbH15Aw6",
  "key44": "c21Wxxozv2BnJqt2LkptpQYdf4VdfyGYW4m8XHSaUVUySKDm2SW2x2iyDC1Yt9bxspLWeSyH2rkR4DPxsxvyNxo",
  "key45": "3WDfbKSzc9JHqSyxoCw9DRH9S4Vo1D4kB19wkZtfzwLDiajSZECWSwUDwiGwVEpB2EEh6aViSECWm9A9uMFv4x7C",
  "key46": "37mqtVpw7xwSVHyPuAVvu9R2qFvdddMkZuWQAKRTGPmftWrWJfwAsuLXBwDq1dua7VSb6apDhCqYYZQKDMzBnub9",
  "key47": "JrQCyDrgyYp47f4yPnU1MXQFYJ5EGMjCBUQCU2MuHhinoMFkLL9vac1fMKf64X2ya3CBRVSZcc4Tuirb5hEaAMK"
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
