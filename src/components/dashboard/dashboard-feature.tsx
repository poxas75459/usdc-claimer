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
    "2enUJfXSiejYR32URxMqXQSMhXATr4bs2NHV7oUQtRkD3jSoWdQdPMxcf7LgTqztXK8Qc2f6SudUfRDA7DRHEjzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbRQyCqkm98rfibw7FZRAB3watTy83MFYTBYnfKi9PqgqNXgqxoPKeiixBkooq7bL2aWkUyWmE2bxtF8QwAqf9s",
  "key1": "2Aux8Nm6MWjtjDP2p8njKspXnKpMN3gmg5Lxh28wWNUsZgF7R7M2AskW56tY2QNkk7eBPqrZgV5baquDsdSZ6Fa7",
  "key2": "2nWnNuLoNwd4jDBS3kQPLjxZXyyrkJcXisCvUHjYy6jts6rFciD8JtJrssP9mtAysBgmwzotT6Uiv3odpVTPXDgA",
  "key3": "2HLXrMNuiNPf8qyaHsNqFD2fm5W3vyrcg3v6tWzvo55sC9kP2iC7nkwoKhu59Xr1JFdqaCW4LVYjTK5xykidAWen",
  "key4": "55x9LasxwBcbysV4Gynxio6NkU2SEnn7eke2u27JfR1N9G6GYpyNhSY9S2c2Xmw27stEDoPiyEoHS7PrBbjqVKSr",
  "key5": "x9WRfgfqdCgfoqima8XKGZ32EftX3tQWrVRKiP61vH2aFBPFpz5gNH4UMCJXGdV57Dgkgq71Wma5RJNXpDoLmU3",
  "key6": "3H2XHeCuhujjZ9NJkN4YcGodds2bvkG1RUD1Z98uQ1d3XCAC7Vs4pS5CTLLFzTAb6o8sCGyBSJkTop4exrZhdfwS",
  "key7": "2nwVHewNq2pbAwHrkcFE7PSn9kiw4jbuwGeaTdv64f2c8pgFpVoWwawpBm11Coi2vhoqk6CwGcBDsYqmqQLzKe5K",
  "key8": "3yZSSpNEn2VmmYBWTsKLpsin4kHuKzfQasJ2SavDZ7rb6jbD8YGC1a5wYh9kRdXr7EKb2bCQn2EHYUTw9eeW23d",
  "key9": "31c85N4zm42gT8QuWpN3eSwcaQ5EU4RLPUjb8mqJej9busyVpfjch8EAZb8FapiB6bX273zxuKpQhaeMBAMu2GkD",
  "key10": "44CTDMDk3HkiEZGMaWgy5yquPmXUeNoxc3FCqp3FkvoaSmMwsWED4YDMzBX9FoeYTbZQcrAeREaR3hFu3rXrcPAL",
  "key11": "23tHzwGiUoFXyDDQ2ESfhzJwc1JeWMzJtLGcJD1vhhFbVypMhGkbwe5BYXN6xyFjMx7qo9jp32G8pZiBpyx7ycGD",
  "key12": "K1YfTNBVQX5VmShAipJhe9YoeSYyA4ajyWNBfgXZxqD2znuLxT1G1hQ6baBMERE1v5whAHB1v7AssTri54qgqqt",
  "key13": "4yu1KeYiVvZP5ajvWie9G5ksKuNrDtfqRfwpZKCKz9Z2DHYJ1dVkRkQneVoM2q64PDSjXq1Xhxi9anf1rJePW9rS",
  "key14": "3NZ5gXbnWBgfZ9LjUESXuLT412FW41bjZNosF4cx1bjwP6yMQ6uCD8d26kUczRMPGLXSWtuv8MP9LVztyt6pcesQ",
  "key15": "YtnqPkikoN4JWTGRnrMhcS9BtTXsYBN3W1u8meN6G7h7JJxs7QSdQvdHEw55UHiqTcMPXATh7BSmNKMrRR375ev",
  "key16": "4UptHcJDsW6ic8rxhAm85oPx5V1hJiCZ8LYTJ9JvdmbZvToMKDGWQbB43LB5cH9c7TkN12yKhzLfa6KJkdEDEc7F",
  "key17": "3efsEPZ85pRPX4kuS5pMDi4hT9GxnpFo3MagHdCVBEd6UxFmdX2XLzV1fNK2h4HERQ6owWnfuzuYR62XQjuYZZzG",
  "key18": "2SMSUfsoJMH73FZaFBr29C4V4TxG1xAhbZ7XdhFMKagfBuErWM7uUMHuJ4kSBtBP4NJDeT7kg4Peu4iETrLkGefE",
  "key19": "4ACkQBVa7VuwsREGkuWB4a4iJ83AKsGrRQXpmtDi8abbKKHUu3vgn5Xdd93QaR2f5CytfLDGtaPuypK8PocZUfS2",
  "key20": "3cS4zdDSrNNs25dDr7t69WKHiXS53FLpwbSoi6tGxAtGsx3jA1zZ4xMRSQVEEvQ4BCdNHof7nT4rkE4pJDMoK8vH",
  "key21": "2XrLFL5n3wDG7VGcYz2jZfNjSovtXDHJhnNrVrn6wxVuvzvESGx1Wp5ZQZYenedsRHLubSYxp5aW88aqYno1DYjD",
  "key22": "4AYTyfcBD48DVpajakGG1VPy8rjNRPbagM7kEoSUSsCp7AfnrnD27Vx7cNGh1GG4Qon3eqYdGmgiosYUutj2RMcS",
  "key23": "2N7S33LWG1iSgkbcexscUVjuctEXvSTLKdn9c3TaBrUwrAM9y5TEW5gfdQqqg8ehAwGcwbqB8s7vHLx7tVEYcSwG",
  "key24": "3urS1sN3QHFsoUmYZjMvZtsFv29MqWYgATH4QenXs3hfvBtuQjxDeE8H8QTqHXn57fnkyFJc7kcR967NTNxETjki",
  "key25": "vKKM6LUN85riDtQfZ6ft8oAUQPupsutPLm2pxFNFpKFDRoHiVpGYVWCCFjpgtJbhRja6drJ8ngk2AqzdUS5QYYV",
  "key26": "64RPDUpgKXTnbEymDcxZdosfQKvkYQJouXYxJRGFRpUrDXdV4YnjVXmadqBgpk6s7hatT9R3vxuJF2T9UyxvpfKg",
  "key27": "5saXPnaipj2kX6gsbMPPGDYWnKSPJLLxwHNm5FV1NffPaDA8fbDNE6Zmqup3jUGzukdLMChFD4cLJANumnCoH8Vd"
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
