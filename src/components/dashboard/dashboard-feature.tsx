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
    "2u7zxPpd1sfBpcgBigeaEnpqGXFmtQKk3nAnp6NDhmZP2KAxgfjH8BN7okMJZ9F1WfWZS9TBENgmsJBWNfBjwgGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9yfAesZk1CbC2wWp1N69uNrwMVc8gYRsnSUmbwjky6JrCAZPeLpq2XbRu2V1kHKbmBSMr9s98wwYHQaYH9y7Ws",
  "key1": "3zXEp3XH9MXNx5cfRg4R1vZW9xgp18Ze5r2j1B1UD8Rgzq6Q4JJSdcrF3332iJKuQGECMNwu8oKhdmbZANHjHC1s",
  "key2": "aNi9ihHqeUXJY4DoFUZPvxeHZkw2PUFeTuF5sjy1vNtZ5aFuhqAc5r9jk3pQHovj4uDqRsQju5bbKEVYDq1e2w1",
  "key3": "3Wo1Px3syMCCK2P6aqwR3S4v8RPqdzv3AQuubCmpmf5HUhB1FXFZrP7NFdbCtfvBeBeEuDo7EPXHXNmHpQ36sfzD",
  "key4": "2uQqD5WKhBPMXVpUzcfDW2NZdVtQ3WBy15NcUseeEsTQ9tQQ1UWERpgFHd9quZMBBSaUUy1xUBmm3tkzEQecvgcT",
  "key5": "4EbAhLbahg9Z5GcNWKQ33PAgGVUpmYM2weWPAMWBQvjtYn23ZmgMA5fzvzVLv1H7A2KfY36QDk69hfYq89tVsXhX",
  "key6": "2MmJiiXatKNXH8BvBq1dQD3PrkSvzDSpajMXkL4vBYxpd1mvJpsqE4XEeu3uQ6eKiGED6tWn4bk1ghoSsdkKmtVD",
  "key7": "oU8iKcVLy44DRV6qVTDmDH5fWz6gFMxJpHL3epVkXQvDyro2RkqAGLL2sakhco1B1EwbzLyVsDQ8fSwp6MseUU6",
  "key8": "2Zy6bL2TU9cXyKjG8YMNS4KXWPZ6o3N9iNDLVgoi711ouSjaggBPnBSkZGDTF24jxRdyiCjkpDGDdm3fdVu3cFXY",
  "key9": "2QAMvjwh1wYQv33cyUnK4WW35TbMpWB8BHJ4dXFQ5HVY5EQuTbvQBiP3XK8iq637oKubr9Fcp5ESPn98rPdpJgsV",
  "key10": "KrRF83SdS7kTHK4tSz2rnJR8FGrs1q57CSg79pP5JfmKvv54TeySTAE4AuX9CSXUGFa5WuRgdUi2cLUvXBSsT7U",
  "key11": "2dEWagDVknmHzhGUvvH57iSJTLCz9tuMHz6KFEQmZhpknRxpbpqc7XSyEvZZFG9mzbZxfngbJeog1rrdh8jF8Wxg",
  "key12": "3g8vEqCDRGfEPzYgRc1EUNwLoPBstDbjHxMYK3Sbefpa9dVE3S9wuNEPD13rB8XNhgioVTzxPHwFdgxkkBpXMDQU",
  "key13": "u37NJsUSPtJyHoVRrMmdnz9tuiXarWZdYVR4RL3D7k78iZgv5wEcwvfnqVs3BzrzgQhFr8Dt4xE7NspCWavtS5k",
  "key14": "wxfnC2GuYF7XSmLA13G3mQ44nHAvzV54zn3T62k39gUHNgFZ5qBi81V1hkoVnvK5epF8BKC2L3F3Rwk2qeqvVRU",
  "key15": "2KtJxoCgiqVNMyUdquArrqScXynqBPKDSH41oiWXs8AiZwYem1Q7SXjGSHj6wdwZdm5vCgKVySY9hHKmJnG6n8Hd",
  "key16": "xVfEpwdnv8DCgqAkrYKSZcAWPxpgcwQuoiypsgEzo7Emikr33eC2deEspprQv43e45CDCtq1z9dgWjtb6BC3e7v",
  "key17": "43rtyhR6FuFpkwSgfFtTu6sFDPbKXqxGTpyFFqNw1iMB2iv9GDMEFmgRSmK45nwthNMHeUkX6YNXxxcfQfDeiqBW",
  "key18": "uBqtBc1p7Jg2pBUsApmKsRpkLcBGdu6UZEwLcoPwip5A3U5PUJ4x41Wrbmde9A6gkyGkBos8gundLpyEHKxDajU",
  "key19": "4n6QpbUHo7vyEGn8aR8sc5nrpGeAGqCQu1EEZzkUGCKTEaStPtJaug3A2yGNmxjbXUfqFMZtPPuZMGD7n5hm8cha",
  "key20": "4gJzDgR4bfeXTvo7vAYDWh3cei7HRq6xRRtFpHPjo5HUoyoikVJS2YbRrzifb5tr3KwTkiT4ahZt1JUAbAgQeLL9",
  "key21": "2xRAp8vVJeVC8PFETjTPqappjZR31DGkMpQ6uo8y62D33HHjVso3Ju2PihHaKPRYtYcgyYd6Vz3QGpGCxr77eK9h",
  "key22": "2vaTkZBUSCZnP5jwMV4AHdWF3K8gT4VtmBJgHwZfcnSJ6qCekgHPDfgWKjVi6S7ajtDtQDgk7WrNJaJZmSnYmVHH",
  "key23": "4AKacG3pZh2UWgx3pdxzcXrkqLUte4cPbFT7NSZSiwrmqx92LDwQHbYPSH9TJNd6Edh6V4K9GBffpJfid3s9VTwZ",
  "key24": "3bMdd7QTAjSA3WuZ1B18pBnLQCoMyidePmT6PMxVLcMzxbgXuK7g7RqJhPbWGstXpoB6KSmpvYJp9VVuqijBPsB5",
  "key25": "5Qu8s3MJgHrQWrQrgSbcdmuduvyS2giKoxPCJknLp5i8saLXt2dvZGMsb84VrKqo9X46nJTCtPEMXZJyR9f8Yb4G",
  "key26": "5e2MLGS8B9FguJYk5gsWkdqdLSEfDGNKYzE2x9ntUvs4gsDhyGXbZoseSGRFNNbccfux4GV9mtPQrKdeE2BapyBh",
  "key27": "qzyZUeAzD2YAcrMCQu56narhHpUBSLKQ5CTWq3oj9yxnDHL559QpqcELyRkXP2J1kuW7LLVz5kSTV8tToNDPM4K"
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
