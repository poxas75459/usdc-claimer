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
    "54ZHb2R4nMoY4CQiTyUAr65Pdu6ZiiTWm9PuBawAmoA5yheTwfAigRPoyrdiFDsPqK4eA4YQqgBEnnCcpPVA7esn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cq3PCfuupAi5SNNHGrhqYgnEwbvBd8enptzZKbhnVFVvVxoWS3rgYsm1nofxL98Hc1sbDkhALHYaTsPuv2sMQ2x",
  "key1": "mxSEMdL8w8kFo156kPBS1WfZ6KDZYrv9ywnvr6wN8RJGAgTcw7au3W5C4x6x8TiXLV1MhE9TvhZRkwpJE6zUeYX",
  "key2": "3WnH6zWx1h8AnERACmkAsJuSZkAS812uJ1RxgxHVQzT2WeeczGqzhhPyNbfDy1erNwbTQtPGuwE9ymBhLKoB6ppm",
  "key3": "3tXA8d3BaqVBW7DE2Wc6hidBvwZtGWyWC7RAyE1py8jrNdii3pvS178UP144HyfbYus98QqiM1hFNqG5w7BtqKPp",
  "key4": "34jokgysPC3wANaAbaRw79siLWpmeCwnjNEJLxbBn3syjJbveHdgBx6XocwXG4j11i1wy9dC4Tkk7PNDhpHJVrEc",
  "key5": "64ZAbN6acPMW6AZztxAhbLZQqbETF6Tqu3cF9HbSGfvmW8W6Qibxc8GEKFi45L3MnCQonXSnZUaPy2eNixeGqFm8",
  "key6": "oyNpKyD6MxwML4Shj2idBTjeTY1CgaCWCkV2UixX2dYrKDJVUhdHQgooyBBXSJUeVWtf9xPHrzQQz5pTjanwTVK",
  "key7": "44UxTi6b8q4BcpK3sgsK4MAr5ivUqZJ6jitLtEZovUTxt4p9BymXuzXPbFG3G9yfNkvSg96kdRJCeQrFgoJ7ebXp",
  "key8": "62je939ZmUUvhBtZbfdS7T27KTvTrJ5tR7ow92SSY25j7nSNkkNnckrkZMDTPxU1HMgLMrNcJDtavQHbZyTqm3aP",
  "key9": "41qDf7d7ayPD4WXvQJLhzn6worw2W3r9C63EGWVLrsYaFyWumP9kTx6W17iuvZ8ZknXqUJzVvLarAC7KJn49pWu4",
  "key10": "3kTfznrZfPS44gQyFiZRC9wwBPTeLFpJ6NsBLjnzKc585ZbkPFuVoxU3y44d2CeeKbGcDDa2pqun1z8nzZwEZxsU",
  "key11": "3A3BmhN43r7JTfXLJY74wpaNbNdGWU4Hg5qecwBoX1B54EJaNLtWZxbp5Xi7ne1Dp96pXFcwVvCAsDZmNDAXzgcM",
  "key12": "5RCaQYboGd4LVV5744TxRSae4onjdYcp6GbjABQ5zEgaaJ6pe4QvStdSgcqRW9k2m5Khj16WDiT3LV4ZUAqyh7mV",
  "key13": "ppb9Sy3YZ5pR4jrgTsV1cXJcy6XtqHHNNrfbNmxfbsoLCahShDXcKmEu1MQ5pJKfdjiE82H5FHN9Y8KLo1CReWd",
  "key14": "rRUgpAQ37CdZXnxT8eh3dEDret8pZJxhoXpXQoyBakDvKybsyRDfj32D5EYVNgUn1hXESjNjAw7ZZv6Xg1HfssE",
  "key15": "vFSS5wv3CHSLvurY3qsCFHzXU5ASJhWESmEuQumYq7xpqpf42tcDc5HkJKG1EeqNYaH15i5vAECJo2LjwHKayu8",
  "key16": "3c19mUM281LykCr2jA6bh85FwanKH9qmig3bWnueeF7kTVxisvrMGzkDox2CW4y1oG4x6w6m6zQ2Ak1Kuziuej8V",
  "key17": "2DMTJj57dFmppWG7BxoVjojbK6i44RWNELD73xRhLRGUR5mRKfehawzZ73RFMSxFx5aHm1gZSpppUJkKynMtVuLZ",
  "key18": "5HVgLz2VQqj4ZkH7MQFMzuJS9q7XXKc7GgRSgoxHPkvWq13N9kk9Se3rUXCUhYVxc27GL3bkxku6amX2oJxv3BPA",
  "key19": "4nVtPFAjXhxfXYgSQZ2JGaXsFXwbLUeB6sgDYyQE5PXkZ7VNvd2As8zG6phS1pGGpf6299ThzRUWFLdwe2Aidi1z",
  "key20": "5vw44Ry9HX1A2edkDiAgpCSBu7dKZZQ4sSArDR4N4oFsqcTpth1BfN7m9bt3LgUWd5UNJnARuTYZWiAnSkoWL69a",
  "key21": "4kfY4yRMa1ZCZtksvc4AF5kF46Jj8Jo1TcxGKEQMYfaWNw91EMRd7ZFbXK4MeKyawtVWZ9P9uPbbu42Jkpi2m9P",
  "key22": "2r4QMi678jmTDpS6U5eudFjzyjQ7JP6z4sSR3igZHJHt29sK55Hc4m7v31LsZzk1ztB5hCXR4LbKPZb6gi1LBUp5",
  "key23": "C6vCPLaZk8wHFXgeiBMzoueizVN7e3SPKLpuYXMSq7R8nzdgruEfEQWQWMnR6pqsBth9ehjWzzAntc1JRBGJuaN",
  "key24": "iyqJ59syFAPpEeFZbmR5s9vQkt2Qtp7eszJjG4oQkGAAPjTyf1ciTneAepXFoTK7xAbvrtoKw3ChdXicyBNtGUi",
  "key25": "3PwhzGnWhTJgrqaVJ8WSyUqFhhDsR7PaTtogCjZq1WwXb8FN715mcYHbDS5NTvECsMELjmT2x4eXGjxdb3XzGA4V",
  "key26": "4985E4L3auZ2riDBFf9UkWXAE6AyYakdqvUBVkE7oi5tB3bdLC5rV5FgZed1UNg6fUoexbQeAJ3gCHyKpmkUqFW8",
  "key27": "4cW3LXKqYVZQAwrgyZqWaMEDTSCnZAxQcZ2k3233QWc28x3gaZXvsmr9Tr7f9t4zA4LTBwaVSbGT2Q6qSzZkKpaM",
  "key28": "5iQ6X7NHhZPHKDKZfcH2xsLNxEkw2gMt2ryp1DjH75EZNFE4bjMggab9ixpWELo6wvqQRXoCyiVaXZ9qmTH4ippc",
  "key29": "2Q4WW7S357ZsxKUtKYfXEWuHRtzguXguLGVjQZBic1HZjtXh9pAqMooBkevE3ixcc7Copj1eJhhRTRycTRRS7ozw",
  "key30": "ufyf3W4uqgZ5jdnry9SjD83TPr17WkkEqW4doSVHt5Hf67FxnN1V4usdwQrtns9geqvq5Tv3oDpiqTFSYCZVoY3",
  "key31": "ByTxsuZSbDxtQmsoyU3EaQ3efUSR5V1CJ43sPCU2szoy11UKyE5c3XzeJs96ZfrHVHrrEaPBp9zRTco9UaHPC28",
  "key32": "2xPa2GAeDAJ1so3wyZ4FFnabgZXxLER4bA6GDCHFukU6qyvj4XsQhRfz44BCiFq6MqvqkL1iLwrR3ZWprVkjdSiG",
  "key33": "2haWmwWZoLFknm1VSqGLZfjWbWZszrbP662KMyT8gKo154NK7DoP5W6GBTRTd1RjQ9f5oTrqxPYu68KJkVADRvYu",
  "key34": "ZXcQqPVEPyQrYkM4apZkryJSgbbAAWRU7TzCtgFvhysfFqQJGAeXatCRmzHweWDmnCwQAp88apPWVWC6jj442UQ"
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
