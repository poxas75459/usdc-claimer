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
    "48u41wiBA7HCntYybSA9DbBoGh14z2CrZUuH2KNdd2j4441HKgi7b4F1N3iTdWkTayWezP1L861zGeZeUTBFpTKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XgA89NnyxQG55SLUZW6uM3Fc5SvBWQ8nG9qYe6Py37yUbC4LpnxypgzN2MdUTeiUcjzzauA89LSUN9GxMuVie7",
  "key1": "aL2PMQue5HjfuarTR2HCRRvtbWmwtqxrN8K6tsj5153j6CUSnNJRiPQcwTjFGpgm7aDRCPG2iVA1Kc3hLBT51dz",
  "key2": "3FpaLb2x9VP5ibaHz3SjS6cTdigQjCbQgnRAv4cMUhh5hQp4apcQgGKCkFnC56tcHHTqzm2df6pLaDY6wiz6JTHK",
  "key3": "4EisQW4QoFfehmdcBLLBvineFzAj9niVjyxVfpzQ5qCCd6kS5d75iHwsTzH2QEQmZD772ZA1xrbkTgU52aQy4UhF",
  "key4": "MdA4nj1v9xttqghsbvsztGEqnAZHCgALtfDgHaZDfwv2nu8FkqZRNRgtrsLhqBpJjHHHYbf1aC2o3v5i6ndciyD",
  "key5": "2VdMg5fnEnEnpeQyzZiGzCZ6QSneX23shdyd2jzjKtALYxCAYZnWkQAwZzgRYjrxJVaESfvNbjHc5DNycD6n4bZo",
  "key6": "dmMAp14umWPmKLpKvohpjms3PRVHLRYDgcdBknzsTJmzGQj5amJ6jiz4B7rGqVzqj4onNMwudS6FvoPGGukaGWd",
  "key7": "54NKUVWMizipq7cDSCKgo7iZAxoDMfdbnAuiadTTARaWuLoxsxARnM4FSpDGVvzXaR1QZXEaGXrMhMvK6SGw8SCU",
  "key8": "4fbKT55aH5AV5WFEgnfNoneJ4VBht8cVtHLpvneknq1Eu6muFr2daJqaGibCeiSeFHCTVY4jYTY1bYhXK9ESTQwd",
  "key9": "5vpCnMsVoEQjCESLfzM8sQqimakrNoziCwX9QZBtoa4nDc3AAwswhVxujzDtCoc4xkmizFYMfmyqgxZNr2wptTWm",
  "key10": "2gtDCJxRvbS2vZDYQ4oGs7A8nCBuUEQJrbsosd5Ghb3zjgXrXHoL7bHSkDbBSDxtSMfW4zNH4rxCpuqYz4tjiE8s",
  "key11": "5ZwRMe5i4pMXARbHWeyAAfSim32C7AcQs9uMC71GBoCsDFcyS8xGNHgo4xf3Y1ymEEMDQeAWGSL8zW2CAZSkznqp",
  "key12": "39297tiWN4uy6namErDTYEEymWbM7S7C2BFVjwmYEq6uUmbJJfGhPdMVTeQPWdWiodmgfxSDYrkpsSAnd3aDhYan",
  "key13": "2hVRTtL9D9SiYXzAhnnnnKNvMQ1QGevVmJQaVKmKaZrZZj9TiWk4VzqK5jZS8EEBmBisZoHLb2EiJHrUjvoxFUoq",
  "key14": "fmBbVNNjSmBXedXU1nSLeP11NHmjymE3iVWCSgnF9nLyohi8akhqz2iKG6cbZFytktqUd1xtPyZY5S2Q1jmQJEe",
  "key15": "3AVsMonUzxZARdrTJyM2hZNwxtCaqVUkxHDfMJAZvbPZ9dGWmZ9dbL87gxjckVMqEFXJhJfD4ZztD5nWtqGu59FX",
  "key16": "3fNTVuzvsgE7QaKUdguGMouPYLJXMUDzSRyZisfaWFbTSZjUB36h3wjwoR4qRhpqWwvNbaaV3WwYV9Mtkvx6ap3s",
  "key17": "261m4Bie7cr2RLoESibAA5jkJ1hLZq67G5gH5NZZAL5g7oVsBr6P8HmPKaNfeRBcYi92SFX9BVFJYQB9xAbDrAD2",
  "key18": "61mmApos3krUnUaHLY3qeXr1dPgmmYJckgqha5XxS6AkEgA6DesMn8QL3bcCVZPbMmr3TX1oihrFigrzWaXWE5iH",
  "key19": "5Lo9hx5TKZJpo2ox3ieg4jVwwtWaMy6Bv7tB6tXT1hyTArFW7hJA9TQzfnoznHEWzi1j14tTuUCcw3ZKX4P8pkSA",
  "key20": "3ixFjEtCsVfDQVn1uX1SEHZQs87XCaG285H2UpCvou5tTGHn1zriU3ioHJbuqaDn3SCVqW8U33GPvfGS5wo9qRM2",
  "key21": "52nYFkTd8yTxP15rczPQen1H5GkKy74LQnini6tLTnqE2X2VC2syc67ssizXRXuvfNoshWyK8CqnxLg7WGGTHsCV",
  "key22": "VEyPqgLVxrkRLrc9fXnFvk4kUP5vSf4subfPbqMWpASZZ19jvshs3pSihKwCAQKY1FrZw8UJEvt9pZ6LHqtBuRK",
  "key23": "31DgMhg5uWz39NP1BqjAWPygT2ybxLrFgU6uLDFhNhQUv2jdpcpq1dW5yJCJtA6F3cnGcidgYqsnYgVwpFuLeDpV",
  "key24": "BNpieQmrRmKgvevrwSfBqDJUARCM1imC4F2LHXx5xSDZyCtcRrFgd4fxARD7Ria7hJeLCbhBmG85yGGf3cQuqap",
  "key25": "Rcbj6SRuhNRN1BC9vnqjQE2MZuRHcpERGBBvBjFL6CiiHGUXm3aVRRzRUk1aK3KQSUdEDNRSxL77khiB58EyK1o",
  "key26": "Jts1QEAwEpgc3K8bkvuuyuqcFe5oUCH33o2Wkq3yCHghry6PhreBQczkwTszzusu99PCYwrEwz82WxzkKaND1TA",
  "key27": "5NWGaNyq3j3K3PXaLPEGki3dfcRQeoX6ycq7YpWdBo49DVb7Z6doKfATavQXDjAmtQruJy1vs9v94Wknweb4vS3o",
  "key28": "LrhkDdAAynSVruuPDTeX7qYXkokcboHKMXy8Q2EzGNjPyMxSkhbYUz8whGCvCVbycNhwvCysUSVqpJXqLeYStTp",
  "key29": "5rRpenFSd7Cpoqs1HgxwAuVtEm5FDpvEfG4v5JNfhLgJKkT7BCSS4tUiG2gYuGwSQQ1c5wCh6jZdVfqeuNDP7MNA",
  "key30": "39WSHnE4nFGQxnARwegzQ3MobKndy6Pe3neToJa32RGyx1SQsd2jagXbieipPSxKshtUsQs1iGKmoWeY1XxkLp8c",
  "key31": "4BgrHgr2U9gHkvgCPexFgGn1skKT5TWPAHV12uEuro3Tw1Ye5MmbmdeuHgAKVPVJBZNND2QtNUi4cWNHMcUwsHrf",
  "key32": "5DPJiC3nb9qQScJ1eHrEgUAqvbRfo478CHv1UMNZZHPa57eHgCcgmXUiwPcbR2pqLhHaAA5ech3S13uxYjXCG6yo",
  "key33": "3EUDJp9VYFUskD8VPP9tUnBepNQ1BMHQQNHJpofetkYuvjLnwpFJE2HVLnhsMgNkeN7Ck8J4qmGo7ni9zWLtWGjo",
  "key34": "4EUNbhGCR9xpz6f53Ae4PRa4MQwQ5rBvVGMCjL39kENLkKGLoxzxBcPVxzB1koESUop5aZriXVn4cA1jdbRtmsv8",
  "key35": "59KpTV2ZDtUCUn3gdY9Y1P1rGF7MzfydcRmdxeTy8XL4QAenLaFytgWXTUJVc738KeuFocZLV2vKeFqPgoDTXwTQ",
  "key36": "226NrJyAeoaaezzdugvXLK3HoArqcgxZn81ja9SZd7nAHqr2SpGqnnZUArJfUrrvNTWMeHhXDZvrZ7AzdqU95ox8",
  "key37": "25zczGmHJCp6spySUVz7guapnxHT4jT3UcGcfcAhrFeDjA8PC4hp8yRDzds3rBvAoCikazddFRhjHdi4kDx4NCW3",
  "key38": "nXCTKV7YPz6UE8VACMimR2MjcBA8EiAynV9CrBbFFRmo5b95v9D8fZh76NZRhPq629PYJLXApzL8QRtatnLdttj",
  "key39": "5W8mVdYppaH3P7tTJ2KWTH5ytAZNw3BzEZuDEtv7bm6UdbgjQT6D5GvX3AAHcMhNA9mQCS29o7qXR9Zc7mC9zCKc",
  "key40": "5RfBGuU1EWG6u1SHMjJQQiohWeNu4Mwm2Lj49x8aV7fYGnegzHu83NGk5fG34cRz7cut7drLe4mSJG5jdfdtJNES"
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
