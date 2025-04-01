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
    "3qVsWf3qLGChWcq1TxQLShjE4hdfrZEMFs9tnmtjGUkC1PkecNModuDT51RJhUJBxLM2cRtgxorw3s5HJTmzT61p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZG1JCkZmeGyQvUC9qqunN35mvNqBdzv9aMCWHpjz6sHgHbBd9ynf4LUxHceqzSJnstDk6bjTb4v8vqRkD2QjtpT",
  "key1": "3cDXEAyzgakNyeRecULdYxpCixYvxw99EFKBwe3DfhUF1hytQEs8jpknVepFi7KUjwVEgynojV95GC8N37wBZqrn",
  "key2": "3V9vQHFnADBsNLcSMe6PFiJ75UJkWdcEJgNz9oFDmnuvb8a4p75r7NrPhF9RjywuWwQVcKR81fHQkrHdKBZhxxuD",
  "key3": "24f9jxjdTbP7EQ66bBoqXoGyZHGMLPQRSN9bTt3fcf23WhVP91btvrHymtEKiVxzZtSb6YssyWNUtfb44o2mwwdd",
  "key4": "3nrQZKzbBqK4BYH5rSQhwCCanmu1r2nCbT4GhNoW23MAvfkNYxbz5erw3XFx26WfVHwuLXGqKDW6zKpfuMsMEHxJ",
  "key5": "4hz85jTNkKmUVVruqJsmWoPwDk3ohyQYGS1Cb5jywHVXAM9PyLpXxpoXBkE6tCtMtymAtNznRagUPbJt9wbPkL5T",
  "key6": "2y6dYeBjzqv7XV94uus8aCLuZz4KtQVfvfqFdgEcpDQDZYpeewC2HhxGbfjQoW8tA7ywaHxPeev5X9rS2wnBBUCQ",
  "key7": "34EuoyAUtKTVYEHBKagVLrUULw5DRo47fdecPZTjFDU1VETv5XzyDgW8iryctaqttwU2Thp7Tgw3ziSJpZGisWHo",
  "key8": "7Y9roPe2VxJJZfftjG23M3b3qRPSj4sLH1efjnwiYcsBT1ZyxbGJpAaduQCZ6f35dFGfynWU3PFD7HC2wyWCf36",
  "key9": "35R8ji1RZkvA4GjGNjoVCWcbrabXtnxhMvjrnfAw88iTZiDvqBjdHH3RxUtgeau5BXj699w1f66YNTFwMCkWh5is",
  "key10": "Kqtq5MvUmMyTxZYszkEQyeYa3rrCV5djXs83SWotD9YVktZZaJVAkiLqoDZyzd3pxe9cpMst4U2mqhoJbzFko96",
  "key11": "R7a1iFzxXgiywgUP2pPGg6iHv1JKfoYo4a9uJT6oiCw1soMfEEzJ74UfCKDqjFngvsiC7EXigNHH4QuVzcrv6DL",
  "key12": "5P7DfNgBeErCFGfDc2b3ZNR6wDQ8qSHFGMhXq235HhH6TcAkRopqQMQfCS9EbaSWXHkBBUM7f2MxbRaXZ57J7gbe",
  "key13": "4QJiDSajY2raEDYMLThrwyfgTNjh79tFB1PUnurL9XgEmUkmJ65TiXoHTCzrr3Tv8yoNEvJCkAxFCW58smi7WwkG",
  "key14": "4WzEhSeav1Jze3Bsc6HtM6TEqc5Hpau8Nj4qNRYRx58zMBthxPuT9g69kmU6DxN9eZdMxYCCjPVWyaL1onjSUkqK",
  "key15": "3gyJEN3yAmWfP25yqXJt2uiwGbpXQxPCMmmAiHomt9Yza4u23SxhgAYfdJd1BLFFKPyEpk3QPHfyPqkD5rAVD8W1",
  "key16": "gWXZh3FWdiw3YbsxgDmdjiPHXw1QUQ75KE7jbD6wXAP8KF8X6xQvP24HyFDB98pKaQBVGypHdviajS9gea6XLqe",
  "key17": "RFG3wqovoZht4RnRLJyYZdHTajhVLHJtmPqPkiohXxAW6ynWjbW5Jj1Amob2bZ3zMtyAAYkipgi8ahtHXiZxJj2",
  "key18": "2efKCimzLF6ssQ2bZZyf9863QnwG88QG9fo2FUx62MstyRjYX7Ny8Sn2E7cAKJcgDxuVycaGY1NbF6zez8U3Xr4H",
  "key19": "57pb3A7tfrvBzLFQVrModLySaSBM9AcnoqfoVnQtgNemU6dLnxZ9cTHSQRsX7teuC8AdCCiQ6adh19vMPy2F3gDd",
  "key20": "2TNEqYQnZ9LXaoGJs6rUN2rvF4Vx1AWk9XjafaAGP3nCPt8g9XNJUBSMYXsqxrEp4VLYijLb7MZZzgPh4w7N17WK",
  "key21": "255eWCTsjqKXZPt8N6NfymXmj6Mtizk1kwbFEtbLmu7JRgfDENffbeDoxCb9EwgDg3XXM8LG8My2A87LesfpgZbb",
  "key22": "2hw3ePdZZRJpXhJxyjjXbRpnSs2Lh73Whg5xbB1EYyPtT83k6TQ69fE8aNyKyVtWBzHdxqrSiwPHYsAg2osEBkRD",
  "key23": "3YRVtnASmEmpeZuFMi4Z8mPBmwLq435CFTdG7n9YG4992AC6Q6qZF5sAZ8fkHuMs8zC3XrNamLTCTpVkWtgcx9ie",
  "key24": "AgMfEaFPXvTWBYAYD23rXHyZiNkSyxyCAqaURDg6jTATLA3EgQB64mDZFYmqQ9W2YC8uzkTUp14c2fpRLm2GuhH",
  "key25": "aBUQnwUZWkYyW5UUtph6MD6hgHQfaWk2X71Rz5axN4hiChbyyC7PkMUdo3oncGcr9duDYW5edjhhJjZEEhLAi1K",
  "key26": "Y2y4dQmFUGoLoKu1LYUrcGSgG6fXFzycvVyV5XGdU5iXBuCco8q6psPUn2hVw4FgPZiZ6RrAXr2DLKpkjFYCwci",
  "key27": "5LEny625RpbPVNbpCTjciuRrCLkUqk1YFBcXBZs9GCXgpoFLABakkSZDGTgh8cVGjDkz2fqWqQwSHBfJaV2p1RVB",
  "key28": "5oZXyczBTDH13XpKf1h61iAikwomQJU9GGyaqSZ92WiaEgRxp9fKujZ4h1CVFNsf67Pw963pcnCjz941uNmtBNC1",
  "key29": "5iEMRRM9BsqiujZJ9wJU7Bu6eCPwjFiSK45ti9JqX5WrvQypP6LZvVJYquH1RVmSQwtZgACJsVSYPZszagnbcscT",
  "key30": "4VbKWXHPWiWaR57gAHrhssNtAWHWuw5axs9Yse6GvqGukPJ17STN1gkEn8sepR2ztq5xvuJExAVAhXJYnSErSVJs",
  "key31": "U3DthgYa1iwTahifvAZub47qDfPu11Z6seceMTnFXina43Ab2F5oGqQqLzDt24aiYPY1xuAisHeGMArSMHpTv7A",
  "key32": "3gtVeD7TcuN9GKWnKYyBBd9nA4BCsp367hGerm6Nms4XrZNc5btv3AqJqYAfkJV4VQY1M78pms7aJeiX1i1SL6Bw",
  "key33": "s93c9Tosf2ZNH614KAUpUpCarTMwsGWeKthqKBT2c54u5CzEtj2qARb8BESgvpkzcZnHeVZExrqwurrtsDAKWtm",
  "key34": "3yyH3xodSrHGazJ5ZvATJEMVM7WX1DjPQGt7pHPu8Tm5kkqBowgvG3TuZ72SjUi8cqFo9PSyHwDAD7WnctLE7JAg",
  "key35": "2b4DpBX3sH6kjmMzdgFb5UZ7cvoQeaf3T1R4FCnF43wqF4cyoJ2yBRmaTH8A6KWteeKVazCe7biPQSfMkE6mDcRq",
  "key36": "2JoUwYVoughqstzVPGEVdniQAgsvR7VzPrXpfnMpazw8Uw9JxvPeCW8MFLpzKowrCo8aBh2ZnFEGrxYSmRZQJzq8",
  "key37": "3MR18XN1iWRAzjiEhW1hhipTGiTBNQQuZw6WBNnxrGn8fvSwXg3Vmt4krVWjVvHzLfUuy6xQF8VPXt8nEwK9ErBG",
  "key38": "cNT2fSN1dsyUG3Tq4C2bVzzatVj9mb3dfbkdrY5SAAxcU2LE5YnJLZcDMos8Fir28JTQ1yhpgezBG8LaMudm1wf",
  "key39": "5cAD8DxmrvU7uYf45cBMJQDLP7xJNRgZzsLFkz2JMbotb2T4iNwXE5zGcYa1uXJsYmqZK9oFFwaCqPZnVPLMdcwU",
  "key40": "iHVjTg91fGxbkzVgNeWEfAcJnMGFMndotjWWpXVEhbCzTrJAn4ytzhJdG5u6dhx9sJQJfDCyctoP2ZD9R8tpY7n",
  "key41": "nL9D7RfwPtU66fFg4MtQ4DvTZD99RYZcrnYXGCYAnBgjeGyHjcyq1iQopix2nQoBc7R2EqWgwfXwamDJJXCnEo8",
  "key42": "4BTkaRBYNpgJEvQ8rhMqkntE2dmt2uTZ5qAGNFE5bSDQ1rYQCsBwmzG1uXcZ2UHy1ds16EqYPMPgtdvP74H4agdA"
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
