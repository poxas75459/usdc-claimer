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
    "5uF528HyYcnxE2BYTjTKTqNkKGtQtRNqeLZQeV7XiKrEUnDAkLvJ2p7Szzq91Uka168joqW67FEdaCiz89X1rArE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQPteHWUi91qbvYwUU5p97z85HcANTWJKKBngfpdPZpdhTxMdjcn3NCMY6bsimYdteLo93fRKY1SMV5AKS8eums",
  "key1": "5yz9VCFrsVh79dPyAhqAod4n9ed8hK1HkNg1rMcuGoq2rxgCjrSk5jzomAAk7mpBdhKGZ48JngNcJukmDBFze2Yz",
  "key2": "5FtUEQtxWTQexZ24TfTMD5UsqRGteutgk7pADnmWxfsn1WgDSWCrT7hK4pyckJ57aWm841CJVbfGdpnHUy2nNrzS",
  "key3": "5oGKLranxa6jPibekxSP1t4rMj4KvomYMytP4uwm65Tv7w4DgtMXwcoX48mscWgcd7AepAxj4iY4MjFRk2sy4vC7",
  "key4": "5FXkhv2JE8ZEVEcLfLTNZUmitaz1aGavDJWk77hPdZ7HxpVNw72DeM4XHaASLNMner8gvTYurF5HEseYL2Lkxz4U",
  "key5": "7doM7Pty5718Yi2mKgh8g3BSUnd1XipZNjeWa2ak6VfmDXZPr78tHcRjp2HYXb1Eq3fstgPzAs8ZQG1bihyDZ6V",
  "key6": "7Y28mK4G22zDVojTgdmJveGpNt6xmrCD1NqP1MA49R8AQdk2E9m3YDLbjiss8NiewYxC7o5yT8QRRBikTJsW7qf",
  "key7": "3foK4bycsVyrDXPeFsgz3PPVURwVy5GHUuxMLjtbUWyR6zgXc5B2v73Sye3MTMQUh9dt8T3vzdgacUHVBsYH5yrA",
  "key8": "5qRc7TcPDfqJxasttdfQYrLqBUMMgaQbdGct28PkVJys7XBb7MkExpjbd9MNFpKKk6xsfWfJVofDjwk2w3CwpCHr",
  "key9": "2451Nz98Kyb4DfJthodBGkWnqfy3uQSfDh3bNgtLWn3t7yK6RTj3LaL6Z28EJfBbTMU2Dm4aHpczdHcwj7MK9oLC",
  "key10": "tQ4z2aLaRD1FDnVz8G42q1jbxordSCxQf6oJbocoLQ9xpWvX5CvUbrdzt71mQf2zkGJyYtbFUPDsorUrrTw1G4X",
  "key11": "5bZGTtcRZcwqaFtFa3oGVW7yGTpXmMRo1GHEiwmrrFzkubeoqXAHic9S8yYWf3k8hayGL7dcTAVSjv111rxqU1Cw",
  "key12": "43rTa2jzB9AZWGnugVbBwBB158B7opuxMqBaKtPc87GQnaRnXDrbtBRY3CS8ZZMyfwFv7DaBmQo62tXXWb5TGMNT",
  "key13": "4eqkjntSDAQPznQZrzvm7Kg17DzixkezwSXatGqLj5E3Ghv9Ppb5V8DNW5UV2D1hGke6X8pspXtabZwksq815qgo",
  "key14": "2pYNq59H24MrocHa6JhmwWBomwETggcMhFGwGUzqEG9kYeoB2edyM3uXwrzULE4S6Awxs128CcgbDX9FVVsCL4Nq",
  "key15": "5ZPopkkGGdj1qPL9XDHQc3NginrntJJeL5yPUL4ivsmDw3kGTi9UpkGpAqL7d1fiTJBev8BU2bBZCXpiKVniqiS6",
  "key16": "4stUW8yM2rLAVySmwzKGQHNZabh5kjVLE1KT3L6NsfDPmFEWUdKvJ5Tg5nUFikuFys3FfBKKEbpcuGgew1Sm1K8o",
  "key17": "3XXWde81YLrR7yTG2bQbaaS3DYN81JrTNzLasLGmmPjcpNgA6G6e9VugqMGcApARC5CgmabidHQ1fciqk5esUiAR",
  "key18": "5XRmvATWWPu91hqsYhx4nuebzeQHjXwXFAwmkyMH5gY4vjAiprfzYzNSXzHixPq26TfukNGLXQhJPhAP41ATb1m9",
  "key19": "4BBk3i7MPF2uTipHAusk56x9BpMf6mT83rxMedi3E6w76MVboJcJuddTGwF1AK7sRaef1GsYjubcRsbpTZFSnT8U",
  "key20": "61hDCLCcpmjM8gaXSRSHTk4BvZFuDk9sH8tDSz3JowisUMojMzt6PYQei5qGpV8PVBL8eX5uLr7AAaX9Jv2BXA53",
  "key21": "5uvBnMv2fQxsx9wCUCADZN4u9HpBWe23XNWuSr4vyAHcUFcUR3mWxRgA7hpBiyZTjJFj1vivqTUywsBrV5Ztpq61",
  "key22": "CjJWqfdcEwXS1bXnSPWmgYZ5p26hX3qD99ZEMXd5JmPxa1YguwGgSURXBmxFPhZknw17zyL7BEXnVwjskusZyhY",
  "key23": "2chTy6MTTW2LafVk4vfN9HnQLxMtVEJtkBhYUWnVXLH4frfWa9U96GcvT224EJasf81j1DxKwEjQ3vrSPfkaqEWs",
  "key24": "SVW5dgc78vr2EJKnVz8UR6ovqdCtcpa1bbULtwm3QpFqAgJhcyiW2DZrB2MXj1ZpPvDMRYoi6tax7pHEmWkUNa6"
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
