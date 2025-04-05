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
    "5e9AUiojxau6nBXk4k8S1n448b9F9qP7ExPNwmaw3SntJaVkLRiGDBVDejn7Au3Ut2KTHD29BiHucyAmfupPodFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSSXocAFEimvtvoQGm8p5872pWnoEquSVrBHXMraxoqs4nhgrjiHcg4JPxREh3cAKKPUhfGSQsELnLUmsdo7roo",
  "key1": "3q2s1LY5LWpTecrTfydimMqeAHRHSuT7FaTWLuUuLcuuCbQryPqFdXJ2VQph9FGrnt6ojNtJ8mckkGBMBPbRyfQL",
  "key2": "4K8wUcgHYBixKbCxQd3Yw2YvkRYWkeksPVuhcpebjNmxBjZkVzupJTpXGDJpGZiVi8BnbLhaEFacgRRNk7HoQLUU",
  "key3": "4Z3At3n8qhMnE6GYk2nwyDxtNNfHeDdU3bRbhZbyqiVfA1MHUqJhrzj2aTFhNXWQDa1fhjHfS2wHqhseqcJvkL9d",
  "key4": "2h71bXg4puY6S8YAX7JvodrtTHdNyorNxnv7Vi4XnTEGicEiMQZcDY2NXXUgFTLoZqpEBWMTL1zeWU1zG2Uu8zCx",
  "key5": "PbdTFsSbjXabAJktCoaJQpLcFDK2XMgB8H9bCQ17iJSSGQf5jhiEJ16qNgfvcyi4L2SFnL6ztkk7B5zdq3X2cuz",
  "key6": "4NUeqVSJCFzY2JgJwM81Jr1vWrv8Yg6Yv49g6dXBzrdbnd69Lx7rZfHGwfnerdDBrsyno6MPJXW4hQHo6frJjPVk",
  "key7": "4rANARP6zn14z3HALib8GE8XrGYx4zfwtXmATFrP7jrM4ksFfXcjX917xGUWjGxrCKMC3Y8ttW7aKKGufjE2P1Ca",
  "key8": "2YMxQfwX2aJ1L9YsvPmXCjXLyY4T7QWhjzJXbuwGsEi9M3LqHXfWXX5GhsER6jLzMRZThjJa2Byprdp9doSFEZkJ",
  "key9": "4mzq2ZSMx8J9o6KEKNxxKuJeZtjpDdR2yFW9r2hyLktmWjm6WRhM1MaGkBZTVRdAFoewN67oJpPHGnPqBthPE23g",
  "key10": "3ehvupLCPreQ4qXKGAiCze1DbPDQ6VFSkHCRHgGUE2xNmSCKw8HcNXT9xapkUPBpqkC655HwUhFU9pg7P76pNP4X",
  "key11": "sEF6EwSz34obQWeptf5PooEMKxqVnj5uQffoykDG1bnHdFdHCiqwX43SrZGqMQk8oCGNQbs8uigMaLujHu3rmkQ",
  "key12": "X8mgRLocKT2c7EN6kyqmacgzcwpddh27WJdbufvdhTUAPq48EQRSk5rUBJmSzvKMnuMMSvJfpBZTKmGpbETheTE",
  "key13": "WKRmXSRBzSUM1QJifviza7bL9chBLpm1GvJ8C4j2PP46Ryf5dN9kuZpko3bbRxuVdFgUmwduKJhuZheEkgeb7XA",
  "key14": "4FtmLUsp5Mfbs46Miydu9qkm2VqCuKJJHDoKuoX3Msmh6fumMyMRXyfa8UUEzgRTzM6UiC5Zu96umGTmJfYDxpKc",
  "key15": "5rHyp5LZmQafpVwVH6LqnFvpLiQDgjt4Xibz7ET2rMxTxVoz34mZc8Ki5vrrzc2J222Rqr5nBcSENpM7VSP2b7P4",
  "key16": "5RYtNXDmCWrEtnQUan8SYZvooaUPcze1pDtWAVyGQXZ4riP3teBjpW7NfymdFmznBZU5fMfCwQnVWBZbyxHEcPcM",
  "key17": "4C3qFduhGmNqCfqEwgnKkR8dH2xhN9xrasKV1NSBLEyC36bv8iW53FwJG3FvxPLcevt2ENp3NXhyWx4gEHkqgivN",
  "key18": "3zhefUApK9bNTwtL5fUWZZojZNqr7sqXBtENXFrBL9Zq2qH7bookPQhrBjZUqtbb59g2afhZFz7YA4ga7W2AoEwS",
  "key19": "54K4TooRrA4xfA9YEFxHcvjJHSyRtbYF82qVQ2NkEJ1Z2qNGuJUHFH9oZmrQmQ1i3KnE4TLRgiGeRkxMGap7HhTh",
  "key20": "QTz1NHaQsgGWHfHzPy7nzHo5KJ1hXkDhpMvEcxTiBAx8rro2ozak17YXmWcBDFUNjFCLGDdswuwhrk11yWs2AT3",
  "key21": "44RUQCn6vo8KrwyxZhMXWGUrVgUzyxa5Qx1XHSnUDj3LUHBV3oLP1NTKVfTwaeH2tjysRYvY4VDdShbA8hWpQJDg",
  "key22": "35DBpaJLmLY7CWcNpw2dKKf1LYTpn5dFSoprJNqvExBdkXH3ctch5JkHzeuNGU8VxZqyFLge9HJ7YHAUZfHhXEoK",
  "key23": "3Hq3QAdXfqGruaah6NTc2TWxRQ3F7aGM46Si3ZET2UHaLReDG4zam7DD5Nit1sNfNyx18GZm4HTwSkfWcNWMGoCQ",
  "key24": "3sQGYeMpuPA6D7drb5x3S2awLP2SKJXTUWQboBgMW5quCAWj8dJtQ1YXZZ3VaWLtfCWoDayH3fjszWpVSAebrgDJ",
  "key25": "3GZybq56XXgWQeKY66khogDzHfGTopyihaTaRKQbwyXmbjKQBxLLf9WaCzwaBJpD9Hm9Cc7jhytww71t1pgdDxLb",
  "key26": "61KroHmMQQL97YTkTBUcUthwrZvvMbs9DLDevjGMYbVR3Co9jrNYMdAv62RqRxeKC7VUaKNwSk6MqGqnSWHaLUoQ",
  "key27": "3ycLPFEZcc8eFW32gwMPXJK64Rr7V2Z4PBeaoBq8DPEPdFKuSwgMJJMTDrvp5sT9WU3fcxVT3rASNomK5QFkDNrC",
  "key28": "5rcGMZmESmc6WELbUKSPouWLV2zstmyaRjK8RJPQDwGmAhVctu1VmpUt7vhxXDyquk4zsnXzEW2R86fRo6TfCMzS",
  "key29": "3252wgb4BdJva4NZmLnLQkvmmL1CEEiKBh67ejv5axRjQg4Em58cmKFq1Bh8Bi7MvDbCDpjhtwAKUYi2tr7rxPAw",
  "key30": "2yg2gqbWy77ZNVwZBWxcqzWuzhgB8PZR5tcPZHV38zrbDYc96GM2jrfQrcW8DW7xGt6MQGfUF5LKPh78qNmFM7TB",
  "key31": "57dRiH8rvgyKXB8wVv4d78UrhrX4BXXhUYdLqTY26ZYK7RvcvLHLsRXPfwQe4iaazyfw6AAt5sk5tPZNmzW8fnba",
  "key32": "4yu87Z3Mu9T2UjmL8HqULeF8i19zGEKKDZKx5EwD3DmcMfEQUcDhcCoSwPdjtEANHRewcQJxZ6rNhdFYgWhVFDrK",
  "key33": "5Hwtg3wJzBm3Q8GxFqNwGvjjmWa1t2UixD6WqZRgdaNo91JKpD6oJNx9kmGPKdmjkb3yyy96CWpeQnZq6EEtzdWD",
  "key34": "3rKLiufxXo1XxQyqtPBs8WUAk2WYdv3wnapf6j9AHAHVgpL3p3chmSSYAUvkBMMvMnFta8s1MBpuiZiYstUgk46s",
  "key35": "3wCy2swPhPtHME681vKYozQLqsWNJU3bStdrHU5S7XkfTLKRrtuctXdWRCbpaW1ZPS9xahM7DArh82KrTXfGVFbN",
  "key36": "2EzWTfUqnKZkHb3for5rDGKFs7g5hVMCihKPsadbJehg8LNrrNQbKFA1TxWttufMLEa7LjyQSYFwuWfj9pb8moEN",
  "key37": "3vrqnYqeHNQ6NRHf33grYcVVjUB3G4HtB8A2ahcuQ83GzV6GD5GQ85UGVHt1Fcb1xv3QdsJh5HrAmzNVydRF4zMP"
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
