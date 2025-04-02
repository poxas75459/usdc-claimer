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
    "61WcJigNAPH1phZFh6eDjHriHcRm7LLVj47ApWJGGfn5Kvyu97CVDshMomGWi8QTQn1hYJoDuiYr4u6B9P3WJ5HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZciscQaNBynvTRWupXK5nNfcePRMcspNk4bVT6ak6iXwYJhVfRJ4k7WYWCLkTSEVEtZWiWoTbPP37ncYyFmBvD",
  "key1": "dqizc3Vug28pUUQWBdact1yJMvPTFS7wRvrBFTZkGFxiXChLvvKHoBeFKVoRted8CkCwrc3xxrVyPg4soMe52mP",
  "key2": "5P6cJqeYJoneXMZfoxjjMqGBEYjbYo4sMgQd6C8QnyQWB73beoXSUPt15EQPWche4DLXTm4wGWWHaVbDxJdMrjo2",
  "key3": "5G4u2Loz2uuVbNxRmTjyTS7bCYJs31muKPXdGazx5JgKHqCgPePFf2ArTkGnGSxmRU6xVDMjqibqePSSpk7Cfy9p",
  "key4": "5j1xMjBfNtFyiMhGZ9Qss3V7ftbCtQxoZuyGsiGDsbnKjghwuFj55xuem6mmxQMQAwtp63Y4JXrGeB9d2tFPB9HG",
  "key5": "W8LtstYTiJHEFmbTRXDQhyksz7cMVTPD3xouzfCBhX7iLrhUNxxdSteDg2EiuavCMrnF6WR6ovCseVfP1NTmZTs",
  "key6": "4eEbcNU3HibmRB7uKLCtn2SmBheLvVGDbFvLSjN5Hca9s42QEUUup4yLF7g5qnfrSqcPupCRNKgWwK5BHZn6YqxL",
  "key7": "3byjNg3hook8kWTFf4gTezRKdJaSsFCFg4dF5m9Q8gCM7fAPQoSv9pzcnLjjaxewfeb1DFwbJT5Kxe9yEfqHHTZC",
  "key8": "5MaFk8Pnt7dK5PBTYtssTbdfdroZQTyNDnE63Jz5AwVqNQztXhZbvFryn4Gy4WekY6yYhQRGDHD1QGKVT1ebh7ZF",
  "key9": "EtdqC67cY3zU5t5jedzhKTPL9DrpEGiVCmqKJt2ceVMvHwgELq6Q9wgcdFJVPnUvDMpMonJFnRVw7AnJE6163XB",
  "key10": "4zpgN19zY1Ps26q81xTZLrnYhm3zqSkHaHZiVD2vL4XLWDLeNXHi21YhypRsiCXmyekNGNW6FaC6rGScn4L7YeVs",
  "key11": "3F7J482qQg9BToC7mM9REYgCP1wKd8rdtaiwJrijgYrvQLcceM94Ydut26qU9AUF87A5E6UtRcigpF5x7CXNMvnx",
  "key12": "3rY7P38bX6Nq2AQQ44fZinU9mmafBdaxSsiPTE7fYSqz1EAd6jCGC8TrLqkSqEjJFSGxzBjzx4E8UxceT6Pcm95F",
  "key13": "5cumAfhS66skwnRuLgrR2MJGwTScU27fSjXiKECfDvextZmiDrs4DEGWArpvpwyBchw2cNTY2f1wJQ994HHLHe9G",
  "key14": "3gosec32w4TbSxYEUu9UeVEZ8E8Dup7VJUEZSxWma2DypX3hruzfjfW8be6xX6z7H3UQ6bAFqbUtR6vG4p9GrkJB",
  "key15": "3RDtt734aLrv7zoyDY1rDqhJ6DTWa716UAKJEzkqFv1iHpnADbvshq6gLP2kYB225nDhJCHGa6oVYRiDJfynU7SX",
  "key16": "39S27Yj8LcvFbJEXPgTkGLdh1nGHNjx5o4segTDcVm7z7Uh2zi9RjW68G3HMnahgeJNtSxpQGz2c9BW2sacmBAt2",
  "key17": "kJ2xSwKdvVVX9CAkP1c5dKYTbWC8U2phxEyQKRkfufv233XJku62jdyXhJMnDPDFNeaDERjFg6iYr1uh6e5L4GP",
  "key18": "tGYoL1BFZWNfyCN5CoUrJbuYffpnjBfsJkn8X7kfD8abpjVcar5GxC6uUQ8LLrPHSJ9qChvvngbVXKMnAi4nBaR",
  "key19": "4dAgA54CXj78gMxctpinWjNH84J1sueSSs3CdegKhACb7w7UPEEdxgaoUqQzb37Ctsb1PxgBXpn4q5sVgUubNf15",
  "key20": "4LNbrVUQpZRHovkqurgPzC5BBgWsoTXkvNpZTPkjV2rdS6thxqoyjbZPz86hQteLFNasZdywSQxx7e8ZW7V7zfHd",
  "key21": "2qrUuqkW1vZ9BAt9qi5Tzs7pmi8tXdzB4uxLwmVFMadqpb9tRyaycnwWDZXLw4VxDxn9biVYHLVrDKiqKccwv3nE",
  "key22": "4CmEZFCHydJVhHR4xFcKwovwz38shwfCkMjR8PbPJ3jMZMzzvirfT7F4JqYFarBxt37Z1B7ktG9aUqqRAgEJvitr",
  "key23": "rrS35oZfsfxBYNATDzfzH4VUxHzMMATtJjV9sj8LnCHbartgGxJ35qrBDrLEv3S3fUL6o5SEeUqWqHefx4XBC9R",
  "key24": "4dWAxBdGqkTheX5Lknk1f5tNwvP9KgxmdznDkUzrcK3CgVVqMpB7wL83DNqKxDJ6ijm9sdXKCjLE16VC1GQhEZJM",
  "key25": "Ej6SFUrVkDzgLb4Mz8j669yHopUTCNU4TTxRAw8kCNmJMhprsrLzUoBkY8eUJSCnFpNZzhPC3fpdvS7zbTfo2Zc",
  "key26": "5ce6WajKBd721nh6BQYFygbRrDQ3b6bPVqBD6G3gHJebhNS1rrpzrxQb7r7wUb42fhHarCKYphrbaXZ1WDrv8Sy4",
  "key27": "5KxEkzF94pmSzxxvGSF1qTj8AYpxunA5mQR79mUFdgmYKdMWhchExK9zXgM1eEL63uJ7HbbqUALxDeBemymDsWVf",
  "key28": "622ybY9HsMXHjr34kv5E2CgdeYZ7Uudh8Qy7Vn5A2k3JRJ3k93BmptDBodP3937q8kLUJNx12mLnmoeMzoWoFsfE",
  "key29": "3CEXdcNN4wSKpAG7yAcHy1b5WLixEKCLxnjEKBZvyjjGwLu1DZvqbgnEjnjwoN3gXp6n5jp85A22qbF1vsh5VK4L",
  "key30": "4eLUtzbyTaqKkprD9UaTc7shneFX4EBLvn5XYY1wTjxjcsYtWdp3xYYAUzj2Zf9LHgfSpxDj5BAbthQWFDwsWqby",
  "key31": "uFgE7gjN8ytfkg939CUDfhSmkYhwJkRB2baSgqWfA3guruDkYttq13wSAEj5c29a9c5J2X6GRoNYjCkZb4VNinq",
  "key32": "5jmk2mUBwE2hS65KhQTvZZQVJ34iGu3dKdtoG1HBQvXoRMoj4c8tYE2rT1uU5BHKBx2FYaDoes9nW7iAQfehJ1AX",
  "key33": "4ygc8qEmAqKVXgZLry38wRDZnT3nAJKDFBC91dS267EqbgKBnSbVH1toeeTfp2TACWgKb5pDqgr2esBa7TyRCcFg",
  "key34": "3U9EEKqdP51HX99JP4rWq16a3dj5QSLfQLiQkU9LHhAALZHjYGQeuw9uTs6DgDQs3juVXyinkBy1J8tUq6ibvg2E",
  "key35": "2zT2p4WjjqiaghXU1FoaZjg1jnJQhtDFCD2VqkccPnVN9CAS4iXDgLcG9aW7vQQxiwt9mjKfsApDYA7vHqN3cx3R",
  "key36": "66dsFJMzMeebeXFuRTNKAuanGmD9CNmt9kdGy8JncGJSP9cbBjCsJGVu79ybzXA5QKMSaNbvidq3Mgm9oC66k2Ss",
  "key37": "3suQd1EjJ8JFBieaKnhX8mWs4BrGpkXwRMjobdKYSztAfm3BYpDek9ovkGL1z4taJ5Ua9UTrBTGRmZ5e3w3rFY4A",
  "key38": "2JR1nyCJiWademHGhVJcKMUDRANVJUHEffdTZ8m8sM9NN8noLTDcKW8sUDJ8FGqtNnd2AGHEtR5YBCma7fHLNouq",
  "key39": "2gRT5ngJZDfy9S7J3GpTHe3i4YyrQv3DUj1hTQNnUyRTWWJMRXDzQ23fUAcSF8RT3EGqfHvar1DPHdBYc7LjK43N",
  "key40": "4es8iGtg9JUFFNy3znwZGBiSgH6Ygq6CqnUCLYsdVTc7PXvY2xJ2Kjkn7rCqHEHps4M3VoKnLA2xUcgLqLB74KCL"
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
