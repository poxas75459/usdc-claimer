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
    "mZ2cGeXa9NqTFoyiS187focZvFdriUEk1M94BYEiwWjxRtqAKDrKcWRDgNYdnCsfUmTDnkdTznbmWpAHnvJWXQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXoPYMABZsqVoVVnqTR5zU1ybaox9rHzMR7RNJ4Ag6ZmDQ8X1dM1e8bwfoQVx1hwMJhnBiYpbXXSaB7huuuTeL5",
  "key1": "3LBKsLMfzwsMjtmnL2Xxba9AEV3vJm7DHY8kjHgQdCCZSggeUnvyqUY4utnaokQc5VWzvqTQQYjEX9QB4YMfT94r",
  "key2": "4Nj1s4NNKHbQdArmTt25ndL662c1YGrpZzgjhckF6DQHpzru5hLdT2i5VhxsMY6NxmZfNHV6yyEuFhyFBxp8o1g5",
  "key3": "hFw6EHPWYQ2oAU8ew26ekcgT2Drheow2qrd9QnSBWdoWa4toR3MQr43UxdTGCb6Y3DGqbPDGUmcfGtxTAiKRQ4k",
  "key4": "3FXW7wfyrWatdU7XnHhRJifR8MBJ7tbJ7qQnxkr42RxYEpQCgppAK6hmaCmdUuPXDt6GJ4PupnWXUiwu9AyFEWC5",
  "key5": "5pDeYJ5P8BiBLxC4Akr72CCSWXPLNe2UjhciazZMrN5fcmsERxZNUcWEAXmbD9yq6JaYvALBt7E5Uua8UXtBFx8X",
  "key6": "2e6tmhAzwuVG4kJe6ihKg2gB4x1jdBFWCRG3QkJYU4L9LG3gMDuzvWos9aRcEiuKCCLPmzWBwwrbpJjhQ38QQywA",
  "key7": "4UWndxH3vNF5BGj66xcUvcPhhrHmHFzYUJnPeWHZ5UXt9MHybh3WXEkBk8XdbxpvS2PA1fqrRtMynyBrqktQVauC",
  "key8": "tyZcehybgWhkF43FQg3qjVQSfK61JfWCTPc65FD1SHz8kobLGcR9fWh6pWRJAw33E4rJ9n5SzBwUUiRWd4G1Rxb",
  "key9": "xzCB1Uacr6eMi7La1wvL6WrDHyXbZ5RxBaMn5SeQXSGVvQtnDyUtFoFGTnN81kwG4uEx1LG9FTMqroCPAV14zrJ",
  "key10": "3pYYA85mVXdFeRy3vH5fN41isZ5LBYLcmCNdzrFmsjeBApiLL1rnCSmY1MnRN6BmgiVPgpYeynadRuCqLPWAG2Ao",
  "key11": "55ixKzZ6qoujyJWwg829uNHUwjJeCdcgbb1u5yjjfxEccrVhsVdsdsDy9x82Ejyq3xAECG7XynXAnf9nkC4jEQhr",
  "key12": "365VAmBPp9DxHb1ujKMrqcoXVzkdiYmZQxr9hGur2FzKPmTHdBSDpoT8hE65JRNbvTJnJYK6wYProqpusXyQnJ5D",
  "key13": "2Pg8wcE8WnRPZ7pAyv2vakokv8tjq6YqwKGcUmZqEQTHJ4q8AmjSNBZAfpJbkCrfJ4KdQwkMrPLNUCCzhyWjXK6t",
  "key14": "3HthBTx8pJDf7854MTV7k5Srfz7LZiEWixSWQequvwo6trPx5u5MPwBCefBzA9yd1btS1rvhLKJt23iiHZUu2nhJ",
  "key15": "5gFJaLeoCWFzSbXav1XdN59HjiChTKqzJ3dHSn5YBB9iPUscBCpbUMZqBn51ggHtoRW17mni5u9wAGSpyFW5feyc",
  "key16": "23JfaSh9G1V7omx2mkYnegQp9ATdqrA6gyBb6QvQtopyNTUSVZNdXCzsxuZQ3c6WLUXvmjvt4qff8xKPpV7nDRjc",
  "key17": "3LjuWoZ7H6cLVY6dpq1n2ZHJdup1vt32iQFAqgKdiZEpv2t1JEHqUsohbjXKpS1Fu1fciBtfdd5QvKBtSfsEXZL4",
  "key18": "1Bzb1wjDtYfuTA5HRe3jQufGWiGH6jVpN9JMrv8DXiXHNhFThiYH85GMguwuBFJb8o4d4pq7q68WmrfA1TKrR6Z",
  "key19": "4kJ92Yr41S9ZdymGx97YTtJYn5Uciv5ahjViAwesM8dcudHb21XJQoqPqpm4XRDHzuKnoUMfizsYVTPAymSdvcnV",
  "key20": "mcxUrMSGzujXKupoJXtLZAKUsFddTtejmdcaBnFsM234tikbXFabzX9grUqFgEs3tpU5Zb9U4QHPq9rdqdE4aYC",
  "key21": "5P7vbKaNPjqLa8AJgicpzDb3Q9MV61zvxGnuvZCCQCfm9L13iDQDY2kBtZeunA6LJL1p9eXoj8Z1FDTYuK5AdTmb",
  "key22": "4R3jXxNebpaYp81m5as2YM7x99seNXQNHkAGxHmCC51o9Xeu1WxZChjqfvs9r55Sd9s2Ha1ijvLidjjKEdN2noPD",
  "key23": "2mRYB1PrFth31QZqBMme73tBUXeDF7rkEFdbJr8W6vWXLocZ21XgrPj8EJ3pMtLvezSfHTb9ERo3dW53MSFBj8wi",
  "key24": "38XgsqSF1nWieyNAfXwSq4Aip1kiNrqVQLmyYNAA56swnWei2smVGEuFAzpyK59phZgZnCxi3XBPUqdRgEqRhKfB",
  "key25": "RNHH6w8VoAx1Vtffx95J4PFbk5krRP39MiCjaa3XoZ9Vt2nCSCaHhQ88gZjLKmVYYEXPaNpds5GFnt5t3erUSss",
  "key26": "3wGcN5MraqrT5DEWkgPaqnYm7BmHzm9uqs4b7cbZ3rAomfLsQprofdaoajMjEPaMob5koRW8DeiyPMt185Wfim6H",
  "key27": "2hpCuBSuakUPL9aTK86VyU2dMDxa86nssQ5edKZnGkdRbSGe2yF8uUc7ThJ4gX9y7njcL9Yz8F88NtyTfwYBJVUa",
  "key28": "294sBfe85MBN8hniA4zbKcNWSKR2DUwhD8HeMGiiWvFEyH4joVEgt64AMW2JgZqJufhvbFMkMrDV5aPFZrmrtDU1",
  "key29": "2UrL797WHVNTkhiHbpN92fsnbJvoihjPgsNH12ZjLrgfsL628ccjU6sjoR3PUVWxfbaWZCsZGzZUhdvzP3mC3fKt",
  "key30": "67HCymGEEmGKfFZMa9KPsc6c3ifFC1EvodWi17sNN6tLcVCwCnRKKFx3EoihdwADYnCwWESibx7xpyEA7vWYyq39",
  "key31": "4CKA2VJ9cAJh5uE5LtffvBwaR5RuvTPePfiYQqrFY44wtBEtDtLNQCgB61UoDnZcqPBVUsJPAsjSDhiAkzvZvXYY",
  "key32": "3natQmL6BzEw1tj4eGf5MudakzwDPcPUPyn64teNCxNRBqH4xpi4QCc1GM5oC7Cfos3LWbfccVQMDV6grr9VPyae",
  "key33": "m3A9ZMDRYT65kEp8ioQCu7y9pnZvgNcCtJWZmKij5KLbXrm3kAbVH1sFf5VBrzqaBYYe8djzDsLHeFrF33Xhkog",
  "key34": "3hKF2GBMk4LXZrifS5tZHmTmym85FbGqTWHDphSYg94wy1ao3xoxkkpGeJSFw7gsXhi4snn64UN9jNRJZfw3PiQv",
  "key35": "24CXMyxCJQwrp9e9jj7MLoz88tRnatq9dWP1EkgHeZvmj1uj1Pbdr9xQzKf5FwigWP4uHmgE8QCidzhWfcWpeRNX",
  "key36": "31pgnPCxivp1FvP9sLvFtmKqjJpjbD8FG1hYwmeVh9F3Nq6c28AoV9nitXtysbAxWqGJWujs862Uc7qk8WoGtTM7",
  "key37": "2jiEJkuRp6iUYrJezkHdf62djpuxwZz1ps5YreiPHvbo7Ha8jktK91p3zsK76gAEzJeYor7NmffifuK5YgFAGaGg",
  "key38": "3u8V6u1ica84ph88cFA7aRhuQPPrSaFWX4AqS7HPrrTTSfq2AjBKbywn9huL2PNTMvhmjM9rLtZZAHpX759eiVwL",
  "key39": "WHC5kisDRtf3jRec9GcTtGWRmk5WSofWf3Mg9RGpUoFzman62jCyvmBMSNAC5ZeE2sj9wPL9dzwkrZnCS4v7goV",
  "key40": "cbCrJzwbFjcnFTSzF2gBC2XsmJJ5ry7zBUSLB5Q84QMY8L484HJei6zBGz3FzY28g9G4iS4ui5bwEQU3ByBacUV",
  "key41": "3JdLqBhYhiY3zUfSmX9ro7hesTcK4L5HmU3mbjHASxw1Uy7eChQ7nBuw4EhWcvkGCxUpbicDRijBGFzC52gLApQJ",
  "key42": "2XQSumTfCA14dqrPpumaJZf3beXmAgGtuXRffJWKqchcRxjEXu6iZAiYpM3GEcyPdXAeu5HyCvWBrzZdCmwWMxez",
  "key43": "4rfBzJAVCh7LGBfHxosXYafGymwayg4hcyr4XKiDYfgkkeEeLrLU7LpirHMhYhgxtAceVgnUqUpKX18Dx8vnbp9C",
  "key44": "5a3ECTssMxErtbEGWGBuwXieKSWZFW63J8NXnJJoVqN2xQySXq8mWJhGP26Eq7BiKZ9WiMz6A5u9PHjqMYbFEMPm",
  "key45": "6g5HF42p2dR91gePH7vj3ukTK15xpAkgcz5zMd52eujUDKRAuNfndeT4xnd7aFFEAu1Uw3pRyqwsCYQ3JcT6sNg",
  "key46": "WoCVTm2KeyQhuCnkCWSK3UYvfMeVQThQ84ULXUH7nBNbbzRinF9fLLmN6CyDmsX7PPKkMxE75Sy3o1g27e36DRX",
  "key47": "4WpKGDk1nn5xPFzPAVX5ZsXRg96kUqvNRSZ5RybZJ44KENEXsE493UsRwHx4YSQZthLCHHrmM4M7byF77N8M1wm8"
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
