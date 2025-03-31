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
    "3moGynpJRASfpnx4AgqhD363heV5tApR3C2ECTmaRz4mPtPXH1myNh4a8aHig3dNSQpUshLUqsBuhoKqWYohBTR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7Cfkio71KmV3BAXBGUSKvfPJNbF5trjrvLeFadu1611PHqCJJrzKmNLGS1Wt4XmYiLvEC89buNDbTeQHwepXcK",
  "key1": "63Jzy8Mk9oU3shFQqsnnfCn5ge4hvzhwZYFRk7QMEqYbykLb53cGrTkaTDqwg11AAvGb1NCkQNUQtj9htStDosfH",
  "key2": "4Va2vUrrAJmZyNsCPy1iJoZRe7LnorRSGZyfNrK5hBjM2K383sJ2NoK8G9psQRvYigtAHb5h5Xbiu86aLzSCDhJ2",
  "key3": "5ZWpEF5KZkURMKwY6QvLo7VPLAngbvQ3HSt9w3mJqMs247MvF8PJ2jhFZSHKPvH133E7G9f7TAxyfF18yT9KwBzH",
  "key4": "3jVU1icsVFiAB4SZbuGM3Sy1j1LwpUi7WwGEpBDaV43GG4RfCd5WsYBezbufn1i4YNcpSpw2uAkaFmocjTtVoyD8",
  "key5": "2MU3CAcceUeSVZkp6TgroE7xzjBXwAQfPjsdgAc2wtmTdLBb64AWMhrTmaMRjoCsZ97UkKqDPSJ8XxNxtM97KoZG",
  "key6": "a2HgPdwWWKQUp21Rm7T84fQffBapghP6TWwTDva8b9fGWGj2suCtzVn78yBZnM4pChGsUGbZNKiXeb7kD1nKxkc",
  "key7": "4EMiqHNrRP2ayq6pzs2gwgqWJx1dTtmidDmuMeVVeeq13gZ7fzKRSJLfj7X8jpUTjZsnsicwrGHnjwoKYySuhwwN",
  "key8": "DeGNeg3JMUhuzGf6NfCysjpNJPAkEZitvMCyhwudfPd5mxdLhPmbbADuEuX8jjBdF7B5yt4pWmoWw2F1a22zfS3",
  "key9": "rsJ9Hfj4J4KMLecvuGvjRoTQp1WAJNZcaRRrcNv38pB6WB3kQWhXiBX8shDjnKES4RFpLun61uqrq1WMgrYUysy",
  "key10": "yprecebWhzrCyZP1oyekVYkEk8nShAFyHvmJ4v5p2wU5k7qARBLWMivmA5JfQmpYwfHkor65FDxF1HE4Ma7B7ei",
  "key11": "2PGSNhPJQEjDszbwv4rLPe1v12ToHw141DhT6mE9KhzjMqCJJGpBhuGuLtijAZnkhamADmEUiRi7srP9g5C4ZB7n",
  "key12": "3saXVTj8YBbfc3SGkDaKReU2JmCAd3xDYex4gqM7Vjw67ZBaTXBjRxsg89bXUGZnHoXgEz1Q93p2YLLnVXmWVksc",
  "key13": "4Not1p6sPJJ2qDWvG1c9Z7JaMUmVvVTYEhP72dYFTNNnfR7c3YtXJ3ZPQQfsVuXwe9xCCCRwxp3yXQYkhKM31Mf8",
  "key14": "5dVFp5gH866Wq6X5DWepMwdhCmUhYnXG3EoZczfdMaBJy5fbMHqM1FKrFmRKX5GexdxXgSbNtxiA5nsPq1cyrSJJ",
  "key15": "53m3WxUXL2tgG12QcURqRskiLDuLQ8S4j6gUVSTf9psKCSDeEEJfQdMvqR9TFLaoy1VxexBC5yjMdwtfX5A9T1tk",
  "key16": "5gZBYtcg1KzxgpRn5mM9Jbv7THp1uxfHbDwbTcNZFJHRZUjsYwsRX9KDPweJWtkAq2YgCCVsFCtUgxtTcgmMHYUx",
  "key17": "5U66dL96R4MK9Kbpv5t1vRhdyjvPs7rv27vs5RBavUHsajFPgfVgFiuQshBLk6FW3aZDESc6xgdgguNspws2JccG",
  "key18": "5Lyz1WFbE2mLdwTRfbT2zFxQqMvQPfrL5JcRaxUP6XeE4PGfrWrE4yb62FFwU1hy7hhTwUNwT3iiAYK5Q3nbkizS",
  "key19": "27uG3GdHDQQoF5iiR1L3Pwut2h5z1rNbvrugqbg6EsYxTwnyvqVp6qrJygte2zZm3Zfmi5vS5HxBuUYrhY3buQXE",
  "key20": "5wSNxUC4SXtHRdqmfuakztE2ZZTUuoxzk3wt6Gnzf7fKULLRkfZSH98WsCiFBiiChHxj5xXgB3K4BT8oLZQFWKRk",
  "key21": "dGB2zGcjFaJLcY3KTXsQ9yZv7Ys4MSHH61hLfui9hKcLJptZij1JVTS5Xr8yQa9wmwQaKs7QoieoxzUzzM5Lroj",
  "key22": "4AwNDPDN3Y7XttzR6JkyT4szsTaeX6k9D4kd3ULLCMENnunbFwAhxvtkSi59P6ZUP7hb7csWMcV9PimNV8icQn2A",
  "key23": "3F4f15WtBzn4oLKLfHwWSUk6ufpEzR98HxoEWjrpwGYE7nXJchY8D32HBWB6sifCWg82zSD6wU9s5RGAnA8ooSk8",
  "key24": "dutCWkucmbotQQLTHT78xkrsvGyobg6GWVpwPHTQiBU6cy7FN4JCTb6KEASCBweistqNG7hxJmhhDBq4yxUAbSU",
  "key25": "5VSCYGjMc5FDBhQiFMKsdf4uFrhkoUjxXvZjvmqQKudBeMP4x7UqR8qkkWKdzif6DYJK3xgrxRrNaBMN9bLpiYxU",
  "key26": "3jX1pyY7Gtv1S8rQcxLXrqGjcsgs56yoauj21BaWSFrYXV3XxdBQdU2EcXnLjcK5hBG4HwYTuFXZro7MV2ptZPdb",
  "key27": "roV7sWyaZtfmgsJiWewkL2C8vZvb1c53oLpFznP6iv8KcCWjN9WJHzajEcc9RgqASutzHJMS5Uk11L5AFrruWos",
  "key28": "2hhBjQFVH3kXk1wyjT1FHQQnAUqDG6G8CszmbMs2WBoHfPokoA1St6BRcTw4VuYBipmwiFXMx4fUKqGe9zqiirem",
  "key29": "366KHqcwu3yoJhi3Pc9TECMu9WBvV3FbpTMto6ZZubq3CsA4ZnVmx3qT9uvhyrrWTKfffVgjRgSwzrDSHiFLsAZ1",
  "key30": "rHZZAe1yHsPubqMSk8WewNiQ1Edeozsi4UUCTqth1PZbYoyAF5p4K7NzcpeqcG3TwAb63oSHf2Z74mnR8CoCV5y",
  "key31": "5uGkpwhaGp7gvuY5Ec4EGki2NjBKGLLWcEEmm2nLPXDKrDYwMd9ubNPZcYHingSaAxXHGX29McA1qdamzXkA7K7w",
  "key32": "36NgNXCNksU5GFfaYDgofTkoH4yrTpmgmFAXtx2am2XUM4ZwEHffCVXvZAMnTqA4sF7gFW5NYaVRYhjqyDd5w482",
  "key33": "BwaiBCgNaZxWG6sumvqabDKqDywSHnfDgDrCZYov1PzKVqaixd3f8rcP9UYbP5CYHRHTKxkjKgFxNuBd5ktJnKW",
  "key34": "Mgiz6unFpz5DWeuy4J2iM634itoqCZidrSXMnUxPw5pWD3NonjoUmc9Y61PuhtAoEenqD9jKNAv6MMyRY8bGfwh",
  "key35": "5Lejzu56jjXE5fRHAo5JeHYA1Dz3iRVr5BPVDog8ZxEKD9EFBbx1exuEtgeidsmUXiWCE8dm92mFD9jWaEhCcnKB",
  "key36": "2T6Yofb1oivoTE28GH3rV5paqDHbDNRJ3PiSE5PwvHCiLtB1hnrsKZxFg5aQpgCTnF2KMEg86eL2KGFPMkygtjKX",
  "key37": "5x4K8Hy77eTMaMtHSJhV3jv4SNDyYTADekegQqL73rkmRUpMD7HMUFREH5uSQesBNt349hbc6zu57i9Q1sJgAQep",
  "key38": "4Xj651pu2spzc2X7QkZupsU7T3Nzns4V4SRNzUxRYaH1hNwQftTQj1ufmVCmjTa1wSug3GdzkwSkZfkZLzPQt6nu",
  "key39": "2ZqL96WEyioHegaDgPtTzjRT1iR98bkmSW5cByu4t5tkpYvV9kTY6WZ4TkczBo318W3xwrj9eL96jer4CfktCCu2"
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
