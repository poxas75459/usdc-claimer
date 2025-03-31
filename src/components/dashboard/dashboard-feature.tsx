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
    "3kp5S9D76c2WThy6tSLPLp9L4yacM6rS186FWEq2pEA5oRemKDT8z2uCj4yyfAVRbnDHxrfj1agTg46ziKPvZsAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCZGN3cyHfNWRf1Hf7dGmZhwHxfRWKBdBEv2YnCGJqa8kL6d81HKbqp26NbSYudczy7XEnkB58yUSEh7f1ytHcb",
  "key1": "jU2YQqqibNGA95dCPwx7U6rESzePet1vq1mHb3nAzJtk8MqYRHCWdNwFuy8Fkf5DQtbGiHQrYiYCs8depFHwTMv",
  "key2": "bwrifjorjCc9xi9RZ3yvYQqp4QvsLVXP9XwxNEacF4Mu5nRpYmTwdARpSa4xcru3QJkfApaeqUL26iD3bBZRk9z",
  "key3": "4vWEDGPXwELuyq6MzN7eEWc5rJvKhTwFyFfWmD47Byi5iLq7XuVDqwKsKhBNsa4YLsRb9L6zt2k8Y2UNTBk3vnhB",
  "key4": "35DbReMnKfc7C6mjr9VZHnFiNR3wVuWtJ6fKLghn94TK2jfvSTh6DhJqCHHHiaPKmWFeYVNriUEutAAkvrAVfW6c",
  "key5": "5wEXXwuHcrDXvu36rv8tyo4Ba8p355tXLhSNSN9h2wF1c4TGsau2mNEcUzPLmL52fGD1gxyoocvReM3WjdacDNRt",
  "key6": "2ym4aHBQBZpi3N2oe1S9KCHMWBpmjvCPB73GANrexB1rKwYT2313XTSpF9FuHFD6sUrtukXhPQwkBoBSxzRqJSmu",
  "key7": "3UkoQvpcLwzNCaCqvZgezeg68uPbumvBLpwENw5eRWPCje7T8qunQfpGyWJeyed3hQXt8dHypwwG2RJYbXzyLG7g",
  "key8": "38z7aL2QtyPuSp19cNKuLAKhHjh1gs7NZMMLSXx1iSmkuhdgsCQtCxeuZSC5htPLXvpYqBP7k21MKGXG4fLwe8oC",
  "key9": "5vYVTkCSu7q2PkmvSE47zoAuJWZtHt59smLzidmpbAt8n6EYYnHrnkuf9vBf7K32tZY8sj5pcuCSFDfrjCosBwpL",
  "key10": "4kbDVfB3fyz86YqQn5Sa3a3xQxwshwFo3BV71T6Z4G8AdHWLDfs8uZU89Na4W22Q37UpFNL9Qr47gMCy3QCK6NBN",
  "key11": "5W6mPX4FhBvY9tQzrj8YKiBHppMWuh5zm9dpEpSbWHLXJJwENDprmecVoXrhLxubcwrQqKNM24X5ktJDuApk7htv",
  "key12": "5juaoX8ppmRbeFTqsboiiUwxdDnjQUXtWL2MXPJSR9TYtoR8q453mnwTaP6MikVrqBKRvX9KkY7LEfo9eRWAuzKE",
  "key13": "3SWtJMSgUFTez9XyaSyJFfx2LYgBQjAGrdBPRwuUg4TSZEnt9TWeHzkMwJS8XXgDFEjF4Nuuq7k92kkE15SZidgL",
  "key14": "4kUVfNZz3yE3bAX9edoHWgeURdqaFpE2RDf3qirmQUZQrpCf6W69Lb1fAGKHyFEdFmemQhHC4nNyEzgT95gXbpen",
  "key15": "wSj2JAcHH34zSKyfLFCx5P6FiNMD9aBh3A2uKD1FzmhgFSNMYjkm2r6hytcGewPekWtg73oWUHqpkh5RiFjajNi",
  "key16": "215CJbnTi6ZhxqeFvbCzCQziy6BxjiBNouu4jiFiXED7fTsmC9c5NpaNXCTJEfRwzpZuPUMvmRqZpeap8cyae9yh",
  "key17": "2G4jy299ocYowhu89jea7uP37ABudxDCvWXAsQF3ohFD4Kz8jGqvGNHQb3bkCWTFWnEEGtvfwt77RKenkJxUkAnK",
  "key18": "34SMCZStE1Pgq4TLBb3k5PX38RR9mydc4CurgCVv985iSV7nYhQuzNAM8C54jAcKmNDvVxr8E89aPLXT7yjuBNcg",
  "key19": "4c2PbUViYyFb8vwZowo9jtt5jeu6BVr8Sn4hWBgp3REbZcuqZQQH3frQuhBwkZ6vfC4qhekvFZB7KJauw5XD2Boz",
  "key20": "3yzkqexRAB1oBF7DqWEhutnCqQBdudUHoDpyhRfucYWamURyNem55Eavx7AGmftrzE34jPmBUWVaLnPGyVMmh8wo",
  "key21": "29gjwoBit3YML4uBuyrnCZ88uuvdy9wYPE8BrGVnsZZGC5u5x4RM2SRiEJVWRXXfvyp7mUgS3WGXrZoqNi3acofV",
  "key22": "5vX8RrmyufNpiqhrJxcSPfLqnnnNJTewYAQTVYFNvrzd2BwWGFr22Wt7jmEfqAqSrjXUyHwTyjdqyp8ub315iMw1",
  "key23": "x9UbkN7XggiqAAsdmBULdk1XfkkWmvqGtBm33CPBmDN7PrGFj9M8TC8T9v23wvQBt7BFmEBPmVykvEbhwA3FK4f",
  "key24": "2bQJx2tEKNSHfVA95e7KkkPuaW3PpWqegWx6JGCReumbePDpqqRKPd5uESmspCVCV47DBaS2Pm8jVGaLCc3LXLDL",
  "key25": "5qSzdvPhFapycU9Ko49Za9V9Drns4SdPx82AbvpWHWaqHhqDmTybTvCkmHpk4AAQArgFGXckNdevdUTTQJS8tgig"
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
