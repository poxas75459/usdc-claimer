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
    "5om1Yn5HQ5g4cEs35NCHw53WMDhqZG3o8Y2ntVumALS4uETEt9m9jDrv4geY1VMFr4TJgdxhKgE3khH8CrRVhDDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBpUZcatF1i38rGLHwNaVFAkNKLcmTTuotgk6ZGN4wU2dLVXFaCKphvtMXrTGZn2oEuhtyCCh7nh4K7RyvMev5p",
  "key1": "D2EpowBgeLQ31fzVdmRPVUNQ8v1mVhAUQZWzTP41CM2y9JaaQe3a1qH9CJaawt3YD7skYpS4Kre6qu37geCLv1Z",
  "key2": "2swjq7YtjL3W2B2iSdcnAfKg3nFvantLyJuAmwDqmH4JeYH5RCnfbWbpDLh1cneRURzLvfNGk9V2dMRLAKEoTyQ5",
  "key3": "4T5MyhGTd3zgz6UEKx6dpMfiNdnUigq4c9fYoVnG5BVu31N6b5pVtWRf7jUJ5i8zSWnq6kSftVULifR3Pi56xKNP",
  "key4": "2qUKFASNL6J1gDtoDWpgEXY51hAghA3i5NZZhN1qLq7x5GBQTPvwMxfS7itmo5YqJY8JKmSC4seEDjQNZDfBi4TQ",
  "key5": "4yBhe4ue3NcpGoebDfUkq8G9RFuv3uFMyXEjWRLQ3bf1gFHgW1DgD2eXvKf12BRktaW4JitNsfLzqD8ybvj6jH5w",
  "key6": "xnytUMnVtFjBkKfGbgYqiokVFy5MTaJvLd4Hc3wcTxxnf7NnSFEnKyNsAhq17FxCHcjTpeYhs43PAuA8kaceLQ4",
  "key7": "vr6NYJ8PZnyxUEWkBw9AtR5dNERYEWEEtGXgNWgCr5hoJZx54jYwwYSFHpCwaMUwuVx74kHctk8fSgKm3pjV9bY",
  "key8": "2BMJpZNFgj2gV3zkqBeSDNjmnp5LrQ8zvWL3yre6ba8dePukVAavt3Y8ZkZaBiCJdCL9gbqDZGrRBtPxPQiwTqxL",
  "key9": "2NMmTja5kFbGnLE5Y1c3eBoATbayq3CYKGFxTyAuCirQhhYnBL5tz1zAcosZ9mdAWfdBhqjRdaNxQcVNToiZGK9E",
  "key10": "2KLyz5VWYrGBQP1b7UYXbPZkfMBBu6pQ63TGrXMAcsRzHYX9arNKViNnRwZtCWE128v1LQnMFgp49FFAcWtvPYt7",
  "key11": "4RCuqg4cEoBiw6sTCPut9mNBxaCKBAuce8ecFKfsXf8cVyJyXdQEfEw75469YP5tQ3C3iTPxA398Smm1hoKapVou",
  "key12": "4GwtvTQAc8QN7X3B4BayKJEW3YhjnxPUQ9Dsd3rYhVCfWSGpJqZwj19FjehvqnNtMsizPHdB7gpbvKwZWS9RLAez",
  "key13": "3Xtv7DmpPQb9cWfVaBU2S3t9NGzUXDW6XZyLAcKdevPZ34YdvJ6576tgUjK3nbKmFb2fFxyT9wb1fPQp9XohZpd7",
  "key14": "4ijDSKi5hyu19nYNH1GQ4zxP3sumBB12EYFZ4TerRWaPQCxmDjapMREAqs5oPemUo13vT1FzjUkP7bDXMuF2XzAP",
  "key15": "b7Ft6YxbzUSdsSwunJDwGU36xMmkKDLAXF8L2QoRmqAYjAyq6UsepZqaKwHAhh9e9tqUco7Xvp8A4zyKJc3iWpK",
  "key16": "4MmfnUsgbmbmsb6ySQLAhcBE1aJE7LW1bYzEkj6rJiXD53djxkE7qUQSXCZ3LeUwebGZz1obzziHqeyGRU9wayPg",
  "key17": "4hxaw5Hecoh6SSdP3rWEoTREk8nppyhy5NipSYTWArMj2tKtJnWSXZXw43ZAhDrnkKvgLqdCnz6V2EXLTQpRCTji",
  "key18": "5Z8kr4T2o4cipjogrnw66ycTqDmt8W5rsEyz2dfLx5cPdnDY9oebDPEnLrdBuxAD3R4UfPWGLBs6ci32kHRKy6Cf",
  "key19": "4shi6VyYjQb5oyR3t12a7NbhAAJyqpVWXqAAspQgH3FMddzFTtAiB812q84TbY1Toj7we5cab3q1x8jpbmcaBjay",
  "key20": "26p9qN3u4iTnZnXED4oJXsWUjrDJY2LgkvgTVdvJ6P5FJ8pDgwu3qXazgVV1RHGhhe1KHe3cw49Kgj5AtBjmzmcL",
  "key21": "qe8suEqrPBuwr3RtWe4RikSbfbbVMitj7x2NiVUAxa5pUj5yCWnAeszF8yXK89DCjuaRtpTjvEkFcLvbm5PRyHV",
  "key22": "4zuds3x5HwsDPkKdNHuUByoWAVHpuxQjz7ig7ruSLRrR2enxupgrX7mFEArjsQJxr42cPiMuRXY7GmfYdQTm1cp4",
  "key23": "2ieKnXTqUiQPZsYDQRXvUmMvdPbNoRsiVBrqnehHiRbxeYLG5fc6jtUSDXfpzozLVeeZH3wNpLB1yNNPszSwy9K2",
  "key24": "5VER99rZyb34Adrb2TNS76FFGbbUCVk4A2U91QEFuxKQkT2xyZdk2bXf7dZRfga258ysFreq82gNZ7mUaEjL7mFi",
  "key25": "3cwKZAFVU4n2KiWkhqp3P9sb2hehxDjFS47NorS18jkqmhimzvCqtf7Pn1YSsqeymBncKvyx82M55Z892gyNvX46"
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
