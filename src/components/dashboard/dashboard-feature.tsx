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
    "zH4jiE8oBhd2E69o9hxvHh9Jf5ZZoN1KCqRbUAEwGXhS61upXPVGMpN79C2pcRHedSRhyqaq2ShmeFsfQbzm2qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjLE2wyfwvBSgYyEza9iFTAp3k6aRXMhH9v7uEZwHePsvEKpRyzKeHupGGcb5ammZPVmZNr6ZHD2J1JaxN6jiMg",
  "key1": "YW5Vh5pBMchURhQtv6fG2oVHJrs8GQm922nXuNdBCh6UsyX2694woBjBhj51u9YoFb52TKCKnvqVK6bz2dB8G7d",
  "key2": "UG8X35ELBvYpqagg14Dy3GbokneWef3wr7ctvPP2EKs8R1kbtCcJGw6AgvYzmTdME7yArfmDBbparkqHoNdJtqA",
  "key3": "2HZWre8JEge13b8ppS9xfbEEcx2NU1ba74CNBRzXinqT5e8vqJM6qti1LepZiBtm72mau5mjCtoK3oA8vWGCqkcd",
  "key4": "y4th6a6hpN696dUGARD9WVYbYNRbhzNnX55ZwwtBVA1sZVxyD4EkKTCz6wuiQYNdoh8xEprXah7CQsGzr21Bz4D",
  "key5": "2j7iC1ViyBwrniaEqB6JbBJgnxaU3PVP7yYqFwaN5LLLmo24iwSd5Yft8EQCAfuFtb3C581q13yfnQFRkx9Vou74",
  "key6": "4vjo3jTug5DAbD2mHy16JrUFtK6nbAvqVtxXX6cofHKNDVgVPqC4x3Nc7Kxq5YK5yB5t6mkNndwfD2RMPUeaT431",
  "key7": "p8FZMu7GXZ21WvfLWRBouwvGNzg61At5joHdrm4gJYVdbhGcJdD1YGsZ6FyvqR7k9cbYaAkypsXDyFTQ38Ydfwe",
  "key8": "4iZura3F2kEYXYuZXhRzxUcJ25Vd6EXXQvDktqRh94D9QELCRAaN66CfLQGPzbS17cd2n47SANvTwztk3pRXieBi",
  "key9": "3X9N9womgs6T1Bx2Fkn3NBViia224u37TN1ZY9H8qFr9j5XMKp4SNnGTGWXc7d6wjnnLYnycTAVQx4BTrecmV9Db",
  "key10": "4gcefup5Enf7zmYbd833yXgo6J81X2WAm1mRqtGvhQesKYLtWgMZewL6mDGwbycU1AMJz8ZxHiiYsjDfxhn77VV8",
  "key11": "4gb4ibQESRXQyJJ66QzsLerAgtZzujTvEtAjCkfNCTiVJAEeWiHWra911QUJwvYktE5jbDyMcbkz2j4AnP5mzmTA",
  "key12": "3rHwckT2b2Q8SSsDx8ATx7bvZ2tw6uzYyDysU3tSHm8MpMgpp8cES8DB2quqQQTSPsz5EZnYh32VCWYQewAQPDUa",
  "key13": "3TuV6bVemS1UBpb9Mk3iYgTUtKeJY4zsPeS21r38owzjERqDH3zYb6fhrgDnEnAQ6BiZUAZehkzeKga75bES6KKz",
  "key14": "2aSSCf4po2B5jLmdb14MeeKBXjcVnZARfhKE5utuFsE2NsUSK1BnvQDNXJNkUCoUCxZX9AcfUQjARWpZrQ1NdYP2",
  "key15": "wk9JAyoq57KsCeK9bSdH4AQQXoV92B5VwCGYfszbbeH4yLWc3NYgCSXKMo5ZpCooFs9V2NVqiwt1b4TiA8DDzVx",
  "key16": "4H96kyG3djBTxWb43jH8fFe5a9XTGPKLoA4RXqe47bxqfmZDNxJ2tFuuuvYUkXMYr1MioySsiVFrKt1GbniJohJg",
  "key17": "5icRqbWkRT6SRFkmr48v74myNQXDeBNU8cyw3Jpuu17qV1A6Kvk8rZX3bYbXo6syFL8GCePYFkGn6EYmmozaiFP1",
  "key18": "XzPWm768FfjEKVdu5xWuzxLBZFCuc5hJUqU13UVYemYPm2P1z5sWKYdwCCe9Bn8UZNvnWbschRVt3XqBs9iba49",
  "key19": "43Qzn8obAqYsbLLivz9BnNhJAK5jLQXFCYfPHZbn1wz2mCjh94UQoBEWRDRvLxBb33wk4ccHPGc5ThGbSfqP52uv",
  "key20": "2cXx9jcKNzS9Cuo5eLQsgYq9y3rNjtYgT1Y4Q6PiiBeqd4VmiNQRX8EqMdut3DPCKZEr917zCcZ1gZtE5EAEHsmh",
  "key21": "4fmZJLe9upc87ASGwjnNKaXSURN626ikKs5Wh45xZq1ErGuAieKxWiS5gSxqNxUCsLoGvroBds9Nzb2L1h1MzXxg",
  "key22": "58UFkHgzPhVTu57Pt1hAzU6wAMJBtKEkQv4KFYKgvjQ696s5KRR59bZVZ5RqTabJTHokgbk6F4UuK4wTFcSmb4ST",
  "key23": "5EFYzZPWSrogQbmNWurMLuRDCFUiPqd23fKKPa2rAsXVGcfojvaXqPwo59cQ4MKz9jvdJSgyAGmAipvbDj5Nx3ro",
  "key24": "4x3yzVvptTqxDd6sn63Hx4oDqjSivaUXaVNoi8rBxZN9F362NdftxQURF762KH4uBo8jZwRN7CcEFquks72cxCZG",
  "key25": "4trv6pb8kz5eUV41AeVDtGxiicpJRPBfdRWakexRc435Nt6B1FpAz6RvWfPf87gv1JNd8MNWjGUiksoCqy5pr7R8",
  "key26": "2bkQNRnuUn5hiPp95Mdp4SL6K4WshWyHn6cqvaMq4r8vQKniq9w94X4qF4s5ws8coGGAw9U9HkavNPhtoaAsiNWN",
  "key27": "5hcYnJjW1JyZ5qHTnWms7ogzFTLYZbx1yJym2LzTQUyuWdUpSj4YNDJjDWRmYWtuWn51JNG77jLobTDdWneJnQSL",
  "key28": "5LUhsvD8My6f57mmSNFQScUu8RboSsHsDriTkSAyZbvUMQtWgtdUQ95gDASWLHs6jQ9ZHHecBev5hDH1xsDfxf1U",
  "key29": "3yueu7LUriXpGUj4fMa31Stvisy3HBtv3hmzC7VfeuCU43EiRERmtwHX3CcVp5swz1vQ2MdwMfKPfdQaG8iK3zp2",
  "key30": "2yKoHF3TZ3vujXpFiHctKVaqPiPpJmrKqgBAqxoiVfeqJesZyxFtidiXwMUg5fwWpuai5nenBUUKKSJpbvPg6rPZ"
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
