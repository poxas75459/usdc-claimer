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
    "2ZGCFi1c9rBmexDMCvdAicGt6hGrJHzhe3nakTfGPS3NyUZfTCfZqFfKbcMAmoyNM4nJvxGDNpsQLUm7x2FKCaAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYjPg19pPZDvyDEABRq2VmuYefSR1AspcLi2u2Neps5dJD1of2SQbUj698Gvzo8F3PEZNuavpgrX8ZUKfBWsb6E",
  "key1": "5jzw5etN9MxPJhM7SdUwJM2Qcvh36qTsEDswGrbd5UiyHtmaZrbEXsw7z76v4xWHFC79pKz7Eg6wFBYg48DfDi7U",
  "key2": "DrpWth1G1iivQEg6LMs6i2yTYyxnLvL4qVeDuTeVRj1wMT5uL5stNYgpygw9nMkSReA5aCUXNUcRopRzCpzocAQ",
  "key3": "2YH4swiCHXt6cWLKgqsMPRLsUeYsPXyEpdkxrAQoMVibnAeqXLNkq5VJEeCTwqiWqcgputq25SHuGVX6tCn9goYS",
  "key4": "5hDreWANsaZt5W44izrmVB3tyJHapiNBvhsu3S8ng2ZhtBWd6PvfM2LHzH8X11zL9HwY4MdaqGBSJTFfkQnL4Nu4",
  "key5": "tupYS5udFdd4YnR6uT6w4f7Cdii4Tu5uwuCBqBz4mtfW9jSwjF8GCRkc8CaQe566JnYKvkK8NhBpGNPvscoWp3p",
  "key6": "3f4j9eQR9XtdTcSi5n3D1NqM1uDTvcXh4QvKTe8fAPy21n4ZpTYxvSo6FMpQoKM8wW9aRGzQxfs8kiv5TTyfADzJ",
  "key7": "4L61CaQ6HnuJajarXhqrRwaZpSj4mj9S9xFpVnwG4ALsycRrzgosYLDPv7gEPUB6RrYd3rboJrjV4eXfPFsKJhLt",
  "key8": "2AgzsMcQZyjTqW3hhmrVjAfVYEChVNk7e4qG1Nhw5rNsgQgqCsKXMHZQeMap3Hgf95sreA6M1cCPafD3tsxTvjag",
  "key9": "36x31YTm17J4HTYJBksVHZsgqUVqvY46sDG2qcdd7DUr2GKTPcHeiDzZiPmNii7P5Yxf4kBbj9W8xsZ7oHnYu91p",
  "key10": "4qySBybH7C6zqRWMLDwbeeD4qq7LWZsGZor3YgHTkQqc7g7dwz7tGW6nSXkyqaDd2yuR1U2RJa72YKa1j5mQnHd9",
  "key11": "3s3mo99WfsE4iZqynuj5NCyoQjkypmZ78pr9MZ3GYP1cEygPJCdKvtBdDJoFRz6msARNBzuLdwpRTwDKVgZoPMTc",
  "key12": "4qUF8jMrUcxW8H2d4ybvDVzJDnAw9BuxDdGB2pXqcn5Zh1zMb666QgncCFnVpUdHLjk1fksGM2jdKJp3pFBxmeq5",
  "key13": "5teQuSHK8AVMDE1pgN83PBRD8QY596bpmeb5U8MbRVFgdjWayWEdkJZCaaMf7JoZggnDhNnFKUns3c3bCdfe828W",
  "key14": "37uAz3iEzAusGxWdTFqKJQWe97M1AMo13oL1CKzzVWJcoRhxPnnPAYtL6ZrDq7xVHKqdH5BFpdJPyQbUTXT7uPP6",
  "key15": "3XijoB4W3njC82Wx83vgEm6abXQcQkzh7pX1EsqJKgYbSXNzqMRUJBkSbtDXsftcoY1BnwPa4LRxAGnA71kSCmDp",
  "key16": "KaUjep2P3dqx4E7XfiHutxbnUJ9oaUaBwZonLphqxsmifAgQsZ6yYTnzi9jAgdAPjLi1iSRvCmopfHyfNSX7QDj",
  "key17": "3v43soBxXVaiL6gopNsQpgk6irUvVFfTEebc22ioqasm2LV9f5xdP8fcQCPTATHJZPimVwrb76crbVJzW3cGdnzU",
  "key18": "28K7ED67QAXJ1S9P47NuVc3NbRwtSYZ1FT6imxPu7s6Y6rYuhMnSfr4Dki661xQmZdZAwyfmZivH7YUeACuoSkvv",
  "key19": "2LTsnRvyyqQHP2Xd9k7jB8L15XJXgSUo8Azi7xamz5QKhvzEtg8gdVG1pYgUDB21JPY9HFxReiS9v4SwJBLWNR35",
  "key20": "31rnnXL1Gkb6SR43Yd7xB6vB5PwKYKmGGa5rPRfzunz6b7uytg23ejB33BX3eqnxXHYExkqF5y8kM8JfoUfB4Bwd",
  "key21": "i9ooPMX5TNfrk2rEv4UWdzMX6SeQN5XtxtjhP9Mrj6zqY5XyMeCCud3RVxdAa49j64HhCDvM3g8oqCDw4hWy5bb",
  "key22": "52sxjS5tdiJpNpWDZH7FBX22NgVXbe3zUeDETVJRrD74u4GV7ZVcoDCVL7qVZv1z3ZGrc7WfWu4FXv5K6yga8Vd9",
  "key23": "2p4w6trB1iNE7oNEaPWSvWmSG5rmesfZEUzDKDV4JVgiqa9v3B1reVBW5KGMATCA3ZDmB8yoXHo9LyH1n2D2enkv",
  "key24": "2TbDjfNL5me2WB57Ui5zCdny8tCrzXzVD5nJhdXwS3vvUMj8NnZykqz1euqyNf4f2cw7aPyCqD1iQ416b1LmEuFu",
  "key25": "5rvVbSF4b6A5Fz9nTMEScP7D3G7yWaw12egyhnq33LkHGNFYesr55hgwW1S8hwgxZpbVKgyBtuVuGeTT4SrweHdC",
  "key26": "KXfFbizCL15AmEVmo87wkBZJyLM5TciEaBt2pDhrNFWCvQ7FSUExs8pbHErJXmGfB2qnHyxEctmFDbb9C4GZ8XN",
  "key27": "3myV16rZu4kqy9REi8sZVMrUEFKiYM23USYkPALufHSo2h4iHaQQGvFPXX22mfhZdmBechtvPsRbFEqtYzrCJp5P",
  "key28": "2LSJ2wZcSzkpuMwQxYGJaWrdVvEQLdvpxGRYVapCpWuWJsmkCsbwTujp7annGtt2QvNCkdvH7vMx2emm1yd5V7Bm",
  "key29": "4531vQ5tEnaDXr8ZUJhssJGhsdq4SDwnHDCRFnxeQuv3LsZpM1wc3wDAnNi1zvS3UkWyA2mfGgpgtW4YdJ3Pirai",
  "key30": "3eqWyxP4xTCc5hoLQhnLfLcvNxvHjjcvZyqvCkN1p5SynniRNWDQMEEjZaHjtqTxE1kMiy65VzDh78RdHjD7bftP",
  "key31": "3NwEZ8p9FRw6cvEsyoQEiUFnG4uYxCHD984goQchhsYyG6oS51ALn9WnD9DjJh5dSusSHewPnnwdL7F7eP3F3qsR",
  "key32": "4fwB5LGTf3UvcujN1aYSxXGsNSiNJki1x1VY7K8yzRQDhs19zGM2j2WhUy6L7Me9Hx4vJMtqWQ7h5Gx5BqvSixj5",
  "key33": "4z5xvENf2b2PM55ivStkjZFfbkDT9KCiNXcdHWbonobYXWM4Zm5NVnACMLCtuatcBFZk88fQwJFH7BgNhno7ypoF",
  "key34": "2zJkJRmTzL7PshDgMfjZ5zKCoskedJg2XMbNZLjE2wtF66jLHJ9WitbXh4kHhyS55iHMu6pNv8iHTJj82Rk1m9LV",
  "key35": "4XCfStt1o6JGTMjaPxc6xfmkFNShdcMbb2TV98STbDA6ZVDAGj81WheZh58v6sUmwmZRPe2sHZ24kL7SHwdicDMC",
  "key36": "VAVbNaBf9vPbZSVa1S6TKSL6i2aJvuBf7F1zYVUorj5n6GvPrB6hXdaZCSqW1PkmAoccxBzM5aRH4c8cFqVm4Rq",
  "key37": "3EYE2gjwWCXMwApDuDGxYPEPuyZ3YS5h3Q4CzgiZV4mAQQN97jgnt2ENDscT7W2xH3hbDGFvxddAZ37uKQjpuksV",
  "key38": "2LX4MKM5jona8e6gH1gVERVPwDumbzXeaUd3axD2QuwnSbJ7A2Xit3RjLXJ6TB1ZJ3EqmyqHMm9vweTsNJEAKi8v",
  "key39": "yVZxCSDFKV3jPfdsj6t8DSxH12PwpS22wVdqkudG1DvDBuEjETvCEJmLdPKjVDD3xzHWC88rXWWMD5vHVSUgvp4",
  "key40": "4MMQJSp7B9HTfFhQgVpai2fePCSBKUUKzmVywY3i4N282SCWLGGLqAtdrCSBsqHK3DSdMyYedpkjiPgqgm3dwAkN",
  "key41": "5thg3vFw3VFXhSranapdBs66TfEBahiKNwRKLncPyFBGBUanresBqpCRkKkQ4qT3LxeGxpMyrMHWfnQw6J72jxSc",
  "key42": "2vgXS7LXsRsUJwZvUgZCeNyzmADCNsAuv5zzznSLRdp4if9o17qWWS1rViGgWK3d8gQ1uXRzrZmHFYAaZFtVxKpu",
  "key43": "5ySM43wjHWWB9XsTiTQPnTWFnKA8mDcCqrXAvmKs2PE3vR3tcpapteusHpo9R65ijsGsqXX5qmozb22oZUF2dQht",
  "key44": "4P1B8eQpBYU6pNYj8tvwFQtmjFnc9dstEcXHPvkN8QRfAPrxx2bV5koLspkfTDTv2GEk6ChxXobPn9bbz5VeHE1E",
  "key45": "4n2wRYs4Mh8rb6mjsvwchs4vbGPum3gMpak71MDVpu2Lgwn9CKrgWYNyNatUDaqHexrQvxym4wunHcyRqYi4Vi4P",
  "key46": "2ND8RJyjRn9NgVMzrCFFd7XA6vsUeetbJM99qEY2q1obAKiQeXAg1UwdoSHj8eN4JdkiJ398xbnqGM5jF2k9xeZi"
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
