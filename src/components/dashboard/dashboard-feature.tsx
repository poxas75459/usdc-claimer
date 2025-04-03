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
    "67FEbHFmJhPQLwbkEngEbxrd3jUCXjrYeGSKzbF9hVr5AddhWukBcJ8iyNtGhZgcbJr1WGTksngA4LhzizRxhMy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UraQCdYHEFapEJRBdkKioC8HFzK1GEhDVdL4xNzWnjKHu6PCgVmZWCY1U8Fu8mcQDXsX4a51Td3CfQQG7r9bV9Q",
  "key1": "3WTXDUosKGSR9qdsjJbuAHUNZ39cAsnn9QY3hMpbyQmFdnQnMURhTgHahn9eexXAX6YoWhCBWAga495Lyo3UZMV4",
  "key2": "2GYXJaff3aa4WkYq38qRigGCjFQT8jM4G82KKRSNjnppeNLS9abtfR5GqnRyPHBLAAGFgV6BiGqHv3YvrfmV4WZR",
  "key3": "4nQcaxgxunJAqzx4AKU6qYjLjbeFeKEV9zZAjN7LxPuiSJLMVccuMYDqjPeTRUSw3eGqAW4w6WbW82bkZ1Skmri8",
  "key4": "4WnQp1xP6qegroFhhYL8LHtM4xouMbXoqyRNeaYZamZQnDostKoJVb3391k19rUULskcEFK7YfP5qWG1P6ZZCLux",
  "key5": "UuKqGE9naC1VP93VvfHzuFZJGU4fiysES9A1nxwLSM2UMbHckwu8Jf8RDBoRvk7BrDBNg4y6b8bn6NdwPCDTZnN",
  "key6": "2VNgxHWhUve31wanvVh2uP4hZY8daqnX1rn6UygydGrW29R36y9kn4nyk39Vecokf7W3FSAbH21Wrrer3fZR1dFM",
  "key7": "2oTBgokR3iX8LFenXn2Ey4P5x4pRgkq6HMauZo44f5ABfsr5Stz2de43z8CTWQHfa9n5Axye9Aqod5Hn2C2jsbmH",
  "key8": "5EAbVW2EJooLCqajZB3ZHv9DQubRbgEnLwAhNcLdPfzQ6QE18zbPrmCMAorNdSiji3o3kUvMM5SGqPL9bLBz6mDd",
  "key9": "KrbB8kDZ1pDrMER1Hta3LbwBox9gyT1rYoPjQKB9egesgjSoryAy9eqSBxMMTpkizLWRQ8Xr8FHzm4KzcRmszMp",
  "key10": "5p9UyMnpB9eqN4jLxP4thXB4zC92bSbUyJbcgrWUdYAAJVDWjwxPzdpxeaC5voUyHAmWTsdzQQR5FkJDRjjqk5gi",
  "key11": "4myb78REQae5FE8DDv9Gyv95mQdc2zebnU28qqMBkBFdn9qde5UNwb69WWStkqVUATTnFMHgTKrk6ZpFCTav2mZA",
  "key12": "2s6H5a7LjCs7DPawpaLAVisZutX5dhwbxdpVfG5iCm7A5hJtXi9BGezV9xJSM9vmtFWhfrb3QwD5oMPbExG3ssTT",
  "key13": "4vmU8kgoBBkHdwN2KotGpS3k4D1TykfA2z7bx1jXxnKfqUrBmo1TfXVakegX2cnNvwDoemDm476xqacS5EWufnj4",
  "key14": "3EA8ApNQC9UUY2DB9TrTfkzb74emm9nWhDDyWRU5SXt2RvFcHdP8Tinf8PnUjE6NKnQvPVkpy5mqPDXAw7ugLXPk",
  "key15": "66TFZdt2JJioZqaaP7zhV7AzdRHBesUGCu4tnqftuQhuxacPPCD1JwyyjHtmbmtEBRQNXJcJ9RRcDEpp6Q4H1QUn",
  "key16": "66csXUcVRFyPC54zVmqKihn5jiwXcukkLdonjdUmHbnPo4PwXgrfxumJ6qdy5T5RRx4pwFv2PnKx847VWD32E1s9",
  "key17": "3AWpSwdh1484rYLiF4GKFWgsSPTR1BYShuUijLEsH17vi3sovgFTktYpSGUdn65QfFDDCFkGBZjZvqgAxsx26zWq",
  "key18": "4javC3aWGB7YXskeTc1NgMTJRxkBJiYP85wWv9bJbEgcW3H3VA5CFXGkXkEzvaQwgnCsxo6Cu6Ssbfkctd6rpN46",
  "key19": "2npMTWhQWWghAbRAKM8XfM2t9G9xYgnQ2yd2hRrL2QkeJEwK8WiSTW2MZdsfnwaj9QBXSVNcDPAPUuP2CVSm5gjj",
  "key20": "3WAxZ8RXmDBiG7n9sWV3MV6Jo4Mk33wnosustu4XYTuGNb5vNkq4EwrasgHVvHKvvD4gbBJsyadJUTqJorcjSLLp",
  "key21": "3rjCtgQBLVjPiTDK3kDZdVczBAgNEW2ZCGTocDpUNZvA6CBFtTrchoQoUiqoqkjBHzmZQHb8CuGrPQ2ge6Xocqfy",
  "key22": "5JphLJEwukg8Dvjx9QUWXhGkMxzNyhgednxURz9fVpe72jDQJodr4dFTUN4dPewmrrDwpJb6Eq6fhMs1M3BxWSQ7",
  "key23": "4aCLC9ncyb2rMXfvJcrz3xG8DgsYPBkuEj11QyCff9b5Yee6DjyJkozg1EzkYb1YKmbtZyNSsgLUZkxWKn56FVwM",
  "key24": "4JqbLuDu3bTQe2m2A1VyewxZ4eJxZGMK9KKLJwiUerXqrCqCggzKAb8RxXTHSgSopqntF4FyM51jb5eTtufS4A3A"
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
