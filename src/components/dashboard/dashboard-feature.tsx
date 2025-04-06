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
    "4tKYc76YBhyHEeKTQTYcN5DBisJcnTtE2emcdTxRTctPepYvRVc3WkwHY7HygZ7egRzT1YcpenYPpLTo3N3BfBNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fwq78GMHdDVDWwF1GkMtCncLPRLMpFd7v6tQDHb5QNwR4GbpvtpbXiKinCG2Et7pq5xRps33csg5abwSBTKbQJA",
  "key1": "2HmPoiK8DhkGfTxXvSfBfXgMtfMfvajXoKchYGQZTTiFDLG7EHrm2ToQFNtzmWBtzNu8JPVq8bqs3CcJT8CMXAAt",
  "key2": "5C1P3wg3tmq6TU6HcfiYBNzhQnSfE3hAfb6ijPAaXwLkZqZpN5ifwoztdzxRyrUmMWLRkUXHe4LyupSbSizWW3qQ",
  "key3": "5cC3XUhdUnqgvqAgB3kqQQAu2ycDX1KzbYETnh8azzv4i2CkDxFT1esw7h3Zp7sVL7ctwBVnZCYRxiVJ7PDRRGXk",
  "key4": "4B6fBzxEyUz2g7xfch61GuX7GRzVZhDczgS3vKwYTce9F8a5ASzQeE44DWnqjDmTeuYdc5Guinq1ToVXLFoLycB4",
  "key5": "5kB22K3A8HK4bi7jc2fLEc3VPbzC1KbxDD2RWxGVD4UREiHA8ePUyA3mhY2cVP4fbETtqsuku4p4dbSgUBWSCnj4",
  "key6": "39hY9BJLr6wCubENmwpRJgWrtaS3JXfHKuVbVWZ3WBiiPJKsDN5Uct6QHCvieca1UYZCjVhkg6wDWqJDPdVzYrhz",
  "key7": "3rjyuG6EErmPLGRFhsZfjgwBcqaarpaRMZFzBffCkcDDNn9WdqLigwXdFV1JR9hFtpBiVu6qurMbdAu58wdVerfS",
  "key8": "5rLx8qFiWqGkiqyMPtM7hk2AogzUPKrKEVecGbt11fwfxLNqyREE3xJVsFyTzqTbQzrUvpRGWk2S3fQQuiZ2bAmV",
  "key9": "3tvjAMA5XsK8WCdA6QsPCSFCeFkBLJWQ7ma2VHW2pN89wuFNgvkkvCZ44X9nFJi1xbLtPDK2GNVGhsb4xTmFfvgh",
  "key10": "3KS357PQMdtsJJgurYfrH96En9zpTNXF67ZWG3982VoKTbGZV8VdTs8dtjA5o5HEKYCeV5gvL6iCCAz7qNxDzjP",
  "key11": "3o8sg8cWZ5pNAgCDMxTv1uHRmUyZpkow5hTmPrc93s2tvHgLWawsRpymr5Ea5r7ca1oexZPu9BJhd3wdKCBqetsx",
  "key12": "4FqJ76C51fTn99b2bGzUdG4RLDA1iMqzTdRT6QvzZKu3XiNJ699Mydrcg62NY8xAa7BJGuzNtXMYeYs39AXfGbaq",
  "key13": "iTDAjUqspu6PjewzqLQDNUFcRF4js7pFdFhvJDy2PBKfb4yXSPaL7UBh5qo34bbWPi1EZhQzMxdsMwKjMWwneWu",
  "key14": "37wYCQTh2Crj6ivYsMpeGwZp6f4JXcNkyEbyV4vgQYRvBkDTpMFRUfh7KtyBExDmPhWbvBxRZZ4ZH7jFciufFbRy",
  "key15": "V9rkB5NAiVvQ1Hn4NouQeGRqQ9cPAhFjFp4mLyY8kS9vvDAeq1qFV2khVmk9zWSQFjdUTmjHE89HZUUYxrKisy4",
  "key16": "48dq6XDA4CCqEE26xgLh97FxUGT4WZyhNEG13V6u7a2gf7RqRk1KQhwZ5LMThgLQsSJdr8E1gM3HX1pbAEMHNdmt",
  "key17": "4vtd5aZ3zyVEfQz1FWL174spp4dX7FRX5Ptp4Skbava7DCE76t5B9LSD1YtB9CHHxmGXQqwAq5DAeDcG4bXjwLT6",
  "key18": "2MCujzjqfGWh42MCgSYqT6twf945YQjiBox4pbmyxFX8D2ptJ4wbZzaMZZ5K13o3wDmYy9kc5rVTBjB8pFMWa2ob",
  "key19": "5bvN3Pz6J4a7M28R5MTdjrfuAK9FwmTVDDZByc5HAATfAvCWXHCqXX456P1VemBav8YLBmyNpamofAgLkqrjrBV5",
  "key20": "ZMuXpmERBXN4jNKdqQARCgWnaYgbeKMbbaf82aQt2EYhpUwTJxn9qiRLib8dwGnSEBbUyQVpHmwzuvmi34xxMxr",
  "key21": "5JyoNKLV8u1TQUSApiZtztsS6G3PNrjbN2P93kcnEqkSbz4vL6oP1upRMruPfRBZQBj1e1bk4dwePS6fwSHMFerw",
  "key22": "2uKaES8Si9ddFmdVDs8KpBWJ72SfJbaLwWupjAU14kWXxf2aK5BoNeA5MTG2JZcL3FdVWDFVTL3cpcUDmAC25Mdv",
  "key23": "b7VPWDGoiKPzyR3GN8fdzTLFHGWGG5sNRwjHBNb14LgrgWb5mY5VKUTsNTSP4Kpx3M6QnYBu4b8yMJ5SmwasEog",
  "key24": "bVj7766wKTxBcgXDTTCm2jgMqoa1V4p5AfTCS3XX2JzBbMyz8QrckJGNCzQM89mmdTrvjtHStAoSy1XavA7j3XD",
  "key25": "XMv8wKmto3fsnyUf22CvsEEyfMQELx5dgWUqVAb34XSW2H7UPLNN1GxNJPNR444uTtUHdDCM6DJ1oZG6p3jGfCy",
  "key26": "3FZ59xvnHQod1SNtsFFwCV7LCNRJoiwq93nSHHPdBULmaXG8t52yq6Wad3Qmgc3c5ct7yWkUWJgy3XRCfKDn8AHz",
  "key27": "41uW9jmpwX9WZV6LNowgJSym6izc5G5SECksSwawSXAvbHTDngGNHbxZ24ZKZJnDujf71s6N8UD3zLRwENXHwtkx"
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
