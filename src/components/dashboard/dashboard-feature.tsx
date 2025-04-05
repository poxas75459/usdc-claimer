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
    "5LvPNjZKh3XtjQXFjn2TtfrAWF8gWQc8XaYVCryGDYr3T4XTPthe8YcnEqZHHBgfEfQ2K8215TnjCsqjMQLFoPYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEsKzDdwXnyx3GhTwbW7bwvdK2cFAGQhaakhjS8rsBFh6784NJMH2xn9bt1fJ68GuVTV8rLkNepsdsrjERRutz6",
  "key1": "5i2PZRQRvz5jPwSGRBBLnYYvBA2u2LpjN5BhQvy2YmBCB9cXkXGwmZxhZXjxrhArkTpML4ZuuhXmgPjnTGZTMPzK",
  "key2": "5wbV2AtnfxC9xmJtGErpe6vmbx6tUAnrW41binMpHMsbq3jB24y6F6FRmry9bAhwA73zUcmVBHBgoAhZVv6Yw74s",
  "key3": "4FP2SoDuyLLxZfdErZmAvUEYHuqt11PJgPXjf32CTe5b8qwwhw4PhURK1GyNRkNEwPvFecqwRJ5WiPYHpAny4QB1",
  "key4": "4Nv7KoffbBHv89hYUezLeNfjM5qhoVth8grNuBm2Gi3yfR9yjs6MCFjefpua3gDP8ycJwzrEjncpXtRKa2z6bexU",
  "key5": "46SYkS1jUm5WyUhaxtKxaVv8tktFwz5WHjGjwcDNwJ6Y3FpZFZCt9i7fe2L4gMQSzpRhT5dJgvnyt4RcdhCBLPN4",
  "key6": "MU2XSNcQmrEuf7JxBqbzD52TZuNwanXYSY7Hx4AAWtF8YuHcW6N85PDNpB1oKJeRAMTdCfok4PazWFjcg5DSFaY",
  "key7": "geSif76iwVwjVaNtJixvok3K9ySSNEMU1G3eXDJZEtaaAqY2fBZAVUhPEsHquQSv4WsT6odwqMU5t3KG6hvrKwe",
  "key8": "5VLovfJRZ2s4GzFbHst4xLhZUjRsxhxJ1hX13WNwD47inZtkTFsZxDjxeBcKUGaccGpHa3Bz52ogb7BjgKRPsM5p",
  "key9": "39za9sDoGzFpHG9Qt9rcuuFrZiBCoL3irtTgKkdokQS9p7J7UFx9LtwgQouo1Q7ZddimS95avgXgJh5KpHRXCVDi",
  "key10": "65Xerik6GAbxSd7mc5RAm9LhyDocPZPY6nk8KyoxA2TqCWYzzYpzqXvTs6cE3W9faWVR18vsWXeeLS2KQH94p68u",
  "key11": "4VgTHJ9eXhFgUgyuAFP6UNUR1DzhiaaoD5jUG4JtCvugPAJX9JSeoUQTLpY2V88o3VJ7zCrGzP7RJt5S8bk9papX",
  "key12": "2nmnrgnX4NdfLRx27WLvM23Z3zdBqZ4za3y22DGjKHMiUS6LEi7EomsaD7jHwCw5vqjLEGabUhVbMyZ4uGP5P8Du",
  "key13": "3n88YjXFdDj4EYHiQiQWdVHwgCVcoKHXH8Y8NqfmwtMad3gNW2ZWxFcZK5HicQMmXLgbsjYj6GYciCYLL2Zv14ZM",
  "key14": "3N1KDPNZnsAa82vw3Dmn5WH2siXKaZ1jXqnrhqAng7QKJwym11A146wmr9gPGARGpMMJRXTGgB4us6JFXAkcRNrY",
  "key15": "6713mNjLonyrJhmCPL1k4pymDxVS5uEGhDHe4B9Qum7ikQRUFMPdEUxjFAj54akh38Ty2WePUoB7CVGfasoxdCeR",
  "key16": "HPo5pWk5qRjVFA6z9EQayv2C58xWWWRyS8BaNtRZT4azwBTrH8YxLr4WB6rpYJCEadmKNgkTBLvgHxrxD9XQ1Sx",
  "key17": "31DWqvuhkns1ircy4pJdc5mKJ5SFCDjaUgJqnxQtz3m67qoRLnwDLtHQ9XvvCMA25aDHwCU4nDAzED9d9XaGiAJU",
  "key18": "3CWrKNhxibhWzTffT1oXP4gRMTwjmuRJ6RUBfJwJ3aMHPQLP2ckeu7p8WcggcKVbECRGwawuMJkmmYrQhDQnu2d1",
  "key19": "2tmiKdLaTMz8Q5ouWXD4DDFiPHN2QSUpXhy112YrYTboVGGkxreEAcx1tb3TQSewDnMahYCpFVdgUw5dcTCoGeuL",
  "key20": "5q83cEUapVJntPnfSihRkVDcgn6VfYADCQYTGmobVqSZRKGuvHDfmd6m4FeVuxZGR3LNYnwEeb9qVRBdzo36Wsnz",
  "key21": "2BesFuY6S6LKUyaaZhyvz7yVL3cVy7UfkrWZQ6VWqqAgTKBhDP3VHo5e1ehnG5SJsum5oesKpQEUzaaLp2H39iUv",
  "key22": "4RUKjZEme1McCsXkpp9oNhcRVDZJrWJKa45EjZTEigGaoK8UezDciTweMSKZjhrpBArbLXAwNBCJGAZFRXQDtuSF",
  "key23": "3XAXHVWe1Xch6e7D7SbdUFf49icm68cPcT7iSVKvSFhBmvgnz35kSMdnwuEos8Tg5ZgKKL4C5rShJgVmKF37FdbW",
  "key24": "2487nhtV7aXu737wc4jLpmiac4ivQNinibec29K2VtXadqwn57oX3nZBU6iwXyr3y1Co9wsiw7ex7uq3x72gous8",
  "key25": "3s61KeNMfXMcEhLAqhrnWJhHgKyJj6CdFWKUJxu3NzpsXDENsuwnGihZcmDD5Zct4ovi4dRLZXc3HhaniBeqnren",
  "key26": "ycfhmSNiNicGvZwT4NBtWbL9ZsvimDfxki8bsV1b74pRCpbgimvAhnYTGSqnhN2bQFEKC3bJq5GmQh1uXKobkYa",
  "key27": "3oiUHdHXzV2W7BAYYWYrZ5fK5XuYo4BW29A5b7KKaKFDrwm1k4ez4RRsuW3ucpEDpPFWYwToNoD9F8YRPa48eX3x",
  "key28": "4SRAwfGAu5tM7qBzHUAu6HxLjXG3EWUQETwJnssoTj7V47ynmyzPpPEKmkbqFCEhhpC7HNEsy14vu9necsVzgCYS",
  "key29": "QT7Md1XwrtUDNq5T5LXPZv1H8ve2QyYt7XjtUfYUBMRAey2a1suMc8g9WjwUFx5ZKRcKnPoud8fz8bbxNRqPNLo",
  "key30": "2rn74vpS48pgcmZqNAzi2ByTcUrN3bxrnuyhgvayfKfKmeZxhWqFqYUWW489HNCzSJZBAL6fanh4VFWUR7LbWyiQ",
  "key31": "5PHTsFMW7remDLbzWwEDVx1n1VHMd2hkmDE4y1kEfTsor7kpfJZMKu1CZRHwXGspMNz8qcHuWxfPCQs2ETfqAHCb",
  "key32": "3R14QAqppsBtrRL3m7C3bVmfGYB7mpVsyMgcVy3Xgmv26WoQzD4XqQWeLdiCww332nrYTa23KsoKS8ivAofhCaeT",
  "key33": "4gx9C2z9c854UCM6rJ8isMz3bFzpnRxCTS8myTEd8cMWVP3VGL1XqYj6wT3tYNatsHHSzb1MZYUjwwbggBuXCsdr",
  "key34": "5ADjh7dUnQeo4CRWGRqRX9nkAfKE5rzvu5LGyegspa3q6HcggWcXZquwWPUV2dGzsj7zY51sucN2omCHsr5uukek",
  "key35": "4Zr6NACgpXPZPSQHn4rcSDbGDufv8CVwVsPxhL8k9YyYWTz8oNsRw73qx5BY3LoHtM8wnksZ8hqozMcDg6SqUFo6",
  "key36": "2wo8PSk9HzFCP7KT4V9fSyaojEnLKKSeXTWm7BGv6hU1QhJtfRJXnzw9wcTe2Uqv1p4iDLgAsf41UCFqSpZqSmxy",
  "key37": "5aCbsN4XNM1ASpMGoGtKPc9fMo5rWwHYSBdQ1u2kxgHhPDQfWj2NWbCC5UohxACzsy6qnVYMf8vy4j2XLdSQ8JZV",
  "key38": "5M7JgNxeV5NfxYkrqUubXx4VLZVrwwzSR7pMXKp9etYBkV7gC8tAxdHt6AjspkfYTdQJPAFcvCP64i2j1VrPvFw6",
  "key39": "3e6T8zscXpdgE8EvvuMaSMinzu7LLW4tNgmxEL7fCknkfZCwZPh89L9WGQGhheCA3FQ9VBUuTcAt7HAyftQtyXGA",
  "key40": "5UEBVMJdDK4H1NYMCy6iW3WGGpJp7NTpXpdfSvXuTiWCm9p7qtqtXJY3kgvLs2XWXYz8pEyEMcaACDChQ2GPGvcW",
  "key41": "3uwGTPNfdNAH2B8orq3UvVFmXwx8KdMNFXFjuzkNLsQvNJZSUvDXEUUWPU28gm49Y9H1kRKprLDXF6nRF65H42QA"
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
