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
    "41MBgNPuswEXX8p72NgU3RSUsiBVwWpSM9TroWLZoxHmbs3xmt8Etkw5RXHtMj11Vrh1pbASp72H6G49UnrDgumn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CaJrpHb1ZPJzHardpSowXau2tc7y4MxTN6aPBhBHfyVCmrN4XAKMZAMS9jHXrWSVHno8sXhVnEVxhkBfYKBvGr5",
  "key1": "3vrNTYPTkUxN8yhATP5ha1VPWoe7dwwJBXwNRHkPhVEbNd31MdkSyAuFpu2Kt1kxAzKHhaRWpNADyVNuPonhiyuw",
  "key2": "2KEt9fap1ozTQHvNyGPhMGNkoxijmy4XX8ihQaUxMitn5vMcDEbWrk86NSQL15knEMheWRmACPrG4e2yG9C7Bx4u",
  "key3": "2bf65b55UAagNvvSQAW1fQktrPLoujezNVjE6fG9DWncHxJu2KqqpoayDb1bKKUfhSRkM2xvA2VsUTvn6BaC71ps",
  "key4": "4w5SaD4ZeTR2iwtSkkDiPMT71Jeza8p7MzrtAf1jHXovVCQc7xBbfpNjzF7JTDCsSKaDraVYEUztfAFVtqhfMYV8",
  "key5": "654DfsGzfw2smwop1dY4VCaVfcD6YpguMQehJv2mXwSHnxnCntq6Ez3c4BkxAxEVqbnWFe8Nwd78g21r9Lqt7YBW",
  "key6": "5YZDDG64RBWDeT6DfZL3ik42iJeGPzcS8ukPUQ91K4FEMXRhgNy3XbQecyGpwjLNwRGYJfCFWk5ivoUuFdcea7Zg",
  "key7": "rBLvjvvXFMW6v72cH4EQNsTnLgS6LhL325aQ4iq5VeRaeP5T3KQC8JTbwJHZXAJYbntcJQU8CpuAaTKyd4yCd9F",
  "key8": "3x3XJqPK4FT2shDayzPkeZHtoUvF4t7YHq1x4PQFRLMiq6Q8rLV6Dy7R1hpBUDCfSkNiSQUnmFA65yM9hJR19wth",
  "key9": "4bswUknMeAJ3AHPDufVAhnTBXoLNzTEQoQ13PVYU5QzJzGW5N4ng7UVVqj34u22mnV9yMSELP3nKn5fsUtuxz4px",
  "key10": "2Jpw2HFtPTsBf4Zj9CoAXoB6CznVkQmpYeNN8fU55i5xA17NuvKj2op4mCeRCYnjBjBR7RhHFG2MSiD8uYgqtPYA",
  "key11": "5CD89jsrEyNAhozijQhjWuvHzg85V7k9khT8G1MFEB3FgYkUBFdNsxu8DHQAYz2gt8Vqs8h3rrcVh7AYBAB5PHDH",
  "key12": "2jyNC6WVsMneNZWEnNC1f6Ge1HrinnEWgS7nrnxH9hT4n57kyN5856hLwpNorejwuc6Z8reTkTgNrTtT3qGNfU1B",
  "key13": "4Z94J9PMS1144snNswcbW8RvF6SAaccJ899XA39gzsQNXURZU9Qp6S1ikXdUquDJNhGsv9uaxgtxZe1RXSsio7EQ",
  "key14": "5VrmUj2emVS611mvehEMYoZQfPWwDgySBQktguSdiYKKCyao6SGVUDe42pMGkJjsGiHZMmtXDHstLBvn6KUcZ8RG",
  "key15": "42JN3jeHhtrQt5xCDk3gEUqUncyaMXd5hMuwZDPqXDxtXFhpEFkAk1sZEp6eQ6ka3u4gbszaM8X3FmiEu3zMaxX3",
  "key16": "4KmRfEA9WzKA9Y55AA8hriBVntX4PNM23RnxsVgFmoPWTefDPs14N2V1DRxeoJE3cZQ28XTB6zxPibJffqQeFfm2",
  "key17": "suFKJU87K9JvN61NApSjdRJy6AZWA2GLseEfg5cFytwyDeJZJKneZTLWw6FrXqH3Ctdu8Rxff54HbfmRBz4izoi",
  "key18": "3JBqRfbF7hBCXstCvzpB89xmiZKQFFTFLFsP7kbVyTabHbYqe83HBsq69sARY1T4mnjbdHLDSVwQDChZQ4Mzz4sS",
  "key19": "xZdMwML9GguS4vTfNDu63PhUKN6E3pik3P7PErzn2eBSmPaeBs4Ja4J1rcobqJMvwC6tkug6c4K35S5yHeTKCcc",
  "key20": "4NSXFbRFPEmJxiKcbeqMVjxE3rodiVHHTKaj4EvZcn8rnP9TeJRKJpiTgyZeqqBAGD28E43ZXsw7hts7Tt2b9Rhg",
  "key21": "4EwpvAmSoMN1LxTxjAkSdeKLareabRZWsKMKTKikYHxHMx4MS1pGZZq8u4UX6qd8mz5a8mTyBzDQEKjWGFCFioQt",
  "key22": "xa4VDAeSZ7UbeTsoiREXByPguTEsSuMcjKtDpMbGmiWWB3sWrRSXGSwD2f1Lx9cC9TW44xMJmXjDGC97GCtQb7b",
  "key23": "VJUtMarMVkvwUciEpDEE8trymrSfbhLaJoqMFx9eisCWrGTot8YT2YQjVx8uCxH5u3KMVGH8BQZXcHwAn2j65EF",
  "key24": "25d7dBMXkzREBxGRV56WephC7K1MDVoaJDjo2NAQLiC9RdkrR3j1PKrnQaSNJtCwfnhveVDZWJ4ETaV43MZor8Bf",
  "key25": "TEbL3jHrCqa2GSx8NVVgyNE6Cdhb1uFMdMXpo4MCJqnBwiyM1F9cB5CTiiUX7J9sKs9GikxACRLYQ9iS3a7wVR5",
  "key26": "aUDQii4QakP5JyrEW4ukKdExuzkFoUvMeeMfWs7TReQjamFag1dsD47tF75cWuVcAhjuWZXQbxrJ1FGu8KyVPgB",
  "key27": "3gpgJJY2Yv5Wgo7jAonaqgLRxQb3agiF9ZSVMpPNAQqpjuSTtEMaxg51i6pbrSGjdURvXrFTKu6qyTFHvPVm93Co",
  "key28": "5RidtBBHxHxgW2FGbN4uhUHrAnLiWuAvffQ8vCxmo4ATqwXpC2p1jE8CEK4Zo2g2HiVbE5QUQXYtybskBFRhNCxU",
  "key29": "4i9qXjdpiyKqRfDsb2LQRoMgaVv6Rn7FvWBvz9WMRx92Dn8TxSTmi7buJCfyhoWhNQ5KkgxEvqrcfj5UnMU4scF1",
  "key30": "3DFjwFEMny5Kse8gJNjkqYuRmkYeMd6jD7usNhX7PHKJgwgXF2NXq1LGDA2oY8MPjoQJF178L66hTpKjsNxwCatk",
  "key31": "5yne9BRXkL68BNbG8egBJY3yxEaDuNc8yfDDntpgxYzbAR7FfGxv7A3ZCPCNg8DXUiyfS7YCbMoCs1F9go5gjtJd",
  "key32": "sh9Lh7iWjzAde5axC8R7wmAmzswpBT6f33zVVTcBtfom2pBtuBwxgHRZ32NELAte74DxePjcRwPtNRMTYdEmZES",
  "key33": "2P6hvKDLr87BKyWnLN2TBUfyxezYRWBh1JCUrawTJ7wkUyM9QrgggfuHZioZkkW4Ld3VTCQKzWm1xdm8a3wvjoJt",
  "key34": "5Jzhp7k8BikW1n93TkVYdEPx1xnWQ19LhtBG4au2aLee651xe6k9ENDxDkEBFs9JwRKFfeVm927hn3PJgr6R6UAQ",
  "key35": "dt1evVCjfzG7j3U8v2F4MhmDd8xSJxnPYpt1J6BgC6H9FiQj8i4tU3bxzYNSzr9eHFa833VYQGAa5qQEqopim4R",
  "key36": "2LP8grM6CyD3iXFaayFugpDhL2GwaJG2h7GejCpwtdrckYHw2pXGraTHQsx99aVJ7LKfD3iNciuKFKprkN6uWJpw",
  "key37": "4vpjHrKVxh32kxxUd18JETvyg9drUtD3irE8USkyPratZtPMU1pELHwRR6kFJJqTgoh9Ru41X8FRtCPiPnUtnN5d",
  "key38": "2gPpmU5gpkY4gCw5S1ccvtS7BvdvgKA9yiWjV5FHxNDBmYRtn22XMAp3HwSw47gwTLAp14G9MhF2HwpMfomvAhcE",
  "key39": "4cpe8wy75czCPKaK3U6o46nBD9a6Sm9xWP7WzVtfTbEBkP2jdf3gFaVtMRRGjRvhrdTtbU2XBVkiCJHwW87oXRGM",
  "key40": "WUUAja96hph3gLfY53YjYbq1EeZdB6KR32GNpG25hS6crA1tW2PnTZB4xeXLvprECNj6Su7GiBAM4UaGEe7Ku7F",
  "key41": "3pRhFri1aPg2DNAUnuLCVZUmCYCTQBQD5jngvkmUtx2jb3hrkHokjhYqBDNQjvzNeynGfkeQ1XD7VmyyCqn2eZUg",
  "key42": "3UWzLi2pn4EGWFa2NJRNFvm1vVqe1NLmJckhcW8H6483UesMuTh3wqYetR1GsukRtbxJE4mJqW58thDD25xaqS4R",
  "key43": "5ycfWjyZiGRGGn5FEjtFeXebwMzw4rQ8j92DGQXNEEChN4YRrKjoc2umbYToUk9sFCfYaywQXejCGvSquwifXq9Y",
  "key44": "Fhc765rfJmSabMzpX8P6bsbmxEgewmXh9oBo7hW5dHyXsrRKdgYBdVJ16YpFRvmkxYjD4TXRyhDiSG6ooktRLiH",
  "key45": "2HGh1dJLrLuRWjhYTGQj1SnkFLAsaTZU97qyaJvo7YiRLkijwyumhYUuPVH2D79Q9am1Sw2jzCySPTvC9y1pcNwK",
  "key46": "4LbBxFuB42P51B69wrtEW7nfU9h6MnwYVQokJAQWkEpUoXJ5Sfc7T5F1Z9WyJ45XMzfXhJjdwC8iPjfhkHP3UVUy",
  "key47": "2NjWx7H1hUy2aE5nSLEs32wnnBtYFghUCVg3P1cK1qZtYkkpD8CNZYSP5CobT5Vm7UTvcTt5VG2V4KW5Vcy9LjEJ",
  "key48": "3pF4uS7oDXU1HQbeAQPe19st97SscbkNwbH9X4YdYofbT9839trmXasGMR2fKNwwqyi6FGrfnmWQykzUsHiNQSpE",
  "key49": "5VrDp5Z16CxVua1XAvfdqKgknmq3CFwNQb39v1z5Ez64sDYJ5cUakZjuAm9wYPKD84dapJiYoewCLFJsw22wu38R"
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
