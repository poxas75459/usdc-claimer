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
    "46uQgdVvmPSdKLYyt8oBEDknZhUJB6o7FgoeaEgdChSGjBpw86igeQEqma6FTpnjAqaA8zUcoWM3WuAmuhA3Hztr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TDRqC33dFEEvDcS7ueKwUEcJhLThrakt3JvBoknZFCJpksFe9DuagC3D11DTmmnhNfXMXmaD77wS3Vm138uhrnn",
  "key1": "3LGfATEPfjNux7185NfaRb1TDGDf5b1KwEZi8qZRRwrbB5aVKY2WYaWHGs3Uxi9KUuwen9sNEssRHw8bhgSXkhWo",
  "key2": "UdBnNqSia8khTaN5dQ2mxtH17ZgWQLZSM8pUDhHQpQm7kDci6dYvmxQG9po6RKUC2aXxNaABjVk992Q1FpyYNHN",
  "key3": "4HBxXNuEYEq1UG7Qqxt9mRceGNF9rR29qLRtTfAh1nQ2siVgjNPYPxxUDggwoitizQDyWdAQQ1YzMCQtQ5LEnCfe",
  "key4": "4BkiX868JUMQhXqhR4pHiQMu3FGN9cQPdj7t7VfnMngxxvnTwMXawx65VBY6YXpy61RNEuvbcFmrhmW6LK8XqtXm",
  "key5": "4rVhNuWNptQUKvtkQyQc6Daf1GnwBozV7BVuFa7XzuL2neLz22PtNJq515nfiLvfFkm2sLEwZKNvDCCQLfQgcwyJ",
  "key6": "5CKwp5ctRdoP9iyQYGuEsUggbfE954FrLXsA4qTziGxnc6AVpdWkjYDwERZ5yV8QYo3M8VesxojewCJVT9Ddpqyi",
  "key7": "aqcWdRPa3rgMEtsPKqNjsa2UB6GHBreE89mm99VyverS9aLH2aupsmVK2mzJUc78mdR4ZrH7T7TWnwcppn6mx6R",
  "key8": "21wLudXDhoB8vmjFjLoHc1a66oysk14NFfP7sM71NzFTmKe65CRKFkCR8TEeL2YQTZaVPBjw7Wf7NYQnxjgCnjUQ",
  "key9": "44LSrn5Xx5Jqh8QYaWF9MiBbxn5kr2f4oxpec5Wep2EhetwtrvutLcXMyPF2WGBo2wQ5VDMkS5umNmGcBbbGGnkk",
  "key10": "5azubVk4WCcVjczbmQmXhNkSpK7G6fNncr3CM8KPU2b2ZrWDAir4VVEeUhxYJ5xD6iXG5iLtv8fP4wpRwpJrKu73",
  "key11": "4Y42RBcub64iezDh2nVuebs3Ra1QYPDUwL586RXLZfJyEH2YeR5gTAPEdzF7oBPfKUDTDLRzALkqp9iwPuXmoDq2",
  "key12": "3wFBwtDxBVvuxr6KEYZih9ff8dzmojDfdo36dxHoaPErnuxzd1WW55o83XCHrbRFL5wxMU2naXMYBvVcJXYMiV8U",
  "key13": "4SdgLKHZRzUrP3WHeMkCRmym5J9Yw4UM7BSHGtq41NpzpseiaQpru61gZ7ZNYhqT18APE5mNnBqgjYcT3TzSN5f9",
  "key14": "3Aw65Gh9nsyotU3BUEuGFnDZaVYxpcUAKSgVHoxApv4YtVP3rEWDCCnpouuFqoMYeJ9hSXj1ZRhkb14MqYsAogMH",
  "key15": "5HisinM4c9jSbvvwqC4xGiBWvCxqagFS1XhPwh3vpgDEmsoSvG4zmwVTUpvC7sVRntFs8kLvPSpr5kXiFSdL95r5",
  "key16": "4YFKYbyR7Ri6zx1uaxUViitEC6zn5Brqyw1mUFCmFoPZ61BWpHt4VoK79JBxxqYobM4epWMnTKtZ6oMGVuSTsBwW",
  "key17": "2UMPWktMdmhZnYvY1mr3AoRQwu4BuNodtJuydeVhiXpCNov8P8BN3RBX86gdRQ8AFN8eaY1rg6TEALQBZWytcths",
  "key18": "3mrw6cqbPR8mejD7S6cFK12CYUEWWFBF5X919pi1ynwo5PpaajTDZCaFDYYHSckBGVZN4wFA8CgkYMnCkf7ujPTc",
  "key19": "3hR8K37dF3y516RVGBPoFRbF2TLwuPpos2nUUJHu6YZEKtH59PYsjA6amr3bdyG28LVpW1gyee3BBpKZ9xCjUS3Q",
  "key20": "yqyQjbWbUCbhuTrLbZBpiy94mH6c7tJrDZbqsy7rgmSTygKuV6afy3bju2eLTQcmCJUG6dWk7nuCYjskVFsbBan",
  "key21": "39SbnWiTdLEfrqAPXVfx18f488hmQjYoZyaLaQdnu6Udy7z1m95GEBeeFcvAJijoGhue1U9ZxVDzVDNdVVfz84nq",
  "key22": "2EhezouB24ECxHZSuaXuWt5oL4vgcGpYWzc1WQNuh1BBkcUqaizanEtLE7v1sFf7TMRaSnng9GdECBvW58wrNry6",
  "key23": "ykkfhy7VGrGusmLEEDnA2vrNU5ikxyWmthBzmDouaugSViij79E24TDEfxipBxbEUj3u8c4kVpef5hUdKPS3SpT",
  "key24": "Ss6WtJXE5ZeYDDwWVdmsvJtQV92tyDHXYcuf8iFmhkvpZan6YxfdxYZNz5w7hdNvTfzZSN6sqdziq6xLDjvpxQh",
  "key25": "3yXif2UwXDaXrL92tdWKJvgjBobSB4gwmoPidSWGFTYETTQCtXvVLVS5ioLUY6QrKRcHf86M6j4q9Ye35Y81Ykw8",
  "key26": "4YnduXca7WN91MSgeScT6abBz13xT7fodJUDLVu3adanLxQa18T9yCa8ymUJxcW7YCg52G2ftQXX2UnA3PAXitzw",
  "key27": "3ENnSr1vvgkT9N6kye4a2962YxvDmAjyjMrVx4BHAcQ5h5EpWj44Fa9Dk2VC3uYsc1ftqo9uzM92G3oUbLFhMeuy",
  "key28": "ftAGAy5fZFTd5HHLg6xuUU49ovWBubbT6J7KEtzrPzVDAra6QDBTNuki3dgDAtJrsSGw9FAvrw4gQBbT8aYM5rV",
  "key29": "3PJgt1M5LmHJ2qCPojkTQUBSNM5CRyBpDs5F699LB2MWbTnfgDcDSdra2v3jN6rUBMNrGTugWyk51mrqvR4RDAUf",
  "key30": "4HmTquPTjx2m2FPBUJ9oTj7td7sm5JFn4Q38vVYs952EqjGCgoCfTUEXzQTy5LV7mcrGz5S27HqthCnjUegDeDcE",
  "key31": "5xUUFAUgjFm5Ukjoi1AAE6rbCU1fnpYvbWp7XBMKnubC8EuDrzQ4GPpXh4wi3dUPzpcUfsrn95pKfFTXdsZe2TBo"
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
