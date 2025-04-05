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
    "3owXkhsGTL1JjJXJwBCwZ1dZVMmgDy6Hfqajydd9rW62tFAzBHDxMti4NNBhyncSSQyci37Hzd6FxPbczp63n6fM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zf9pwqoaRcBScFJoRiPrGZRw87DJDaX7NQ5F9EQYQvyhGVei6EtqJtKt5ZCqBKoUNXs8XnY53n7NLaGeKz9MQFu",
  "key1": "mfA3zvpGKDuJUSm4VT28AESG7j3rjmaoqQpX62PG3L81nJC1uTY4QfTWsdX4CSDq8JD6h8HunakAnHMsaABNFh7",
  "key2": "3dQVaXR8bw9c1gLjUCT7yiXN9oXZ2h9YHsYPMrQyDidUcEV1dQh1FLxtYUEHKf85qf1f8xcDHyUwNdj746Md3cP2",
  "key3": "5xy3qFt2YYUqtpsGLJXMqxvLoVMMtHZFwYeJXMz3nbmbwmJGUtk1vmCKfRdcJhjjKwxoB3e5enxkfqt8hjU8D183",
  "key4": "3RjnLsrTshoV6oAoqHgyJJH23VGRynJU5pZGf7g75ErVv2FDm94Fnzrzk9C8Y7xZKzy7M3mLDHPNT5qFyWUksLX5",
  "key5": "2SaYMHYUSjrL8qoxRxt3F8nRrwa24zH5PaKMbyRYjT5s1eY4KMeKHS8DEtQoxtUsWHLLfqzX89sHgPRbxFeR7xjm",
  "key6": "mJsb38Mr89ie7b82ob8Z161sxYDrNjdijE5z4QjCmabcaRXRWgbk2nnq3bjFJTprRHgfDudMcxX6mwK4upsCFFk",
  "key7": "3joSkYrF9DcQaohAp5t166NGse71zzofJT4bAtkKH8nor8Labo7mNm4sJoH6LQY5wiag5cimRkHu68x6DfUXRB7A",
  "key8": "5ABYmAbFjc6nNJqy7kZfXsg9JMpdZj6avDSw9iETqdRnefTUjhEVSrouqq2gJbTH2e7ZW22RZgQhWoPQFevE4DR4",
  "key9": "5Yi4Ue8dZsS9aKtekud8UHRu9A6twDDiCrGPBk7gTUKQpNF86L6PLgh4Pt3EMmu1ZM3dXjcAPytRsVxw3Py9oo67",
  "key10": "5bBBgZkaJP8KMrZn5PYs9JNXB3mYka1q51V3v3ZkrxbDpDvkp3HeidQCbu59LbXmVhvYPKug82C1UZgyVo8Ruin6",
  "key11": "3179rA7s2yGwuHPbcT23p4YURMVJTfANE7DAa5c7ttuT8KBGJ1trXWEvagRaog4BeVBaFobx6QSqLrrmCwyxUq8Y",
  "key12": "53E2bV5MfFYKWjw51ZbYR36GjKeK5uj6SF6YjDn9cnZSwf8UerjVavL7k2VYdXYg7GQptaJGAQ1eg6SwW4LVQ4YE",
  "key13": "4rFXna1c68V4nK2H4NBvVP52LwGtRpA5RXR2vVQsZRpZZDxEb8Bz8dLPJAF8Q6W4f5ZSJQCznffiSHdDkWFYG1Yp",
  "key14": "2rU5ANbvxYXRGeU8FzbCb2u7riCgnPuRmk6kjByr3UXAxr9b3sYZHqRvrfFsx3s9jxiF12SEmNrnHZsLvhfoWPNG",
  "key15": "45Wp5Xybs82k5qo9AkskDf3EEye3aBQvMR1eGiB7sXEBD4PxssF57V8Jhz6gVbam9XxzBZUnmNHQVe8LtenCTm4j",
  "key16": "wpYSR8B9w1SGyrrhDSJaS5xujsa3EEsHGmUN4FvJV9TnJHBmzt6n6dN3eyNzGaFXoqwdFR3hV4x29UXkye5iRdT",
  "key17": "2CvxhoHHZY74TYUxoEvCjpZmbpeYE4aUwykszmMXrM65womi9qdZQoLoxaVm6aF42EDgjnA55Ptr785LnmkracDQ",
  "key18": "3P6jqzmEb7zg9WxqRX9mmtt4YAvsKCZKSEg9xcHQmGSyw8gXnKaNpT8o87SBzdsA4XiDePxRC8UnYT4MHMhbP5GK",
  "key19": "32XyX4k6726YU6y1TCVNagmqHy7o7k8jLqFgHSK6hWHJdPpTPbhc4bUftdQUrhpUSSmeV5auV5ymh4wpJg5pg1ki",
  "key20": "5KeLcUhk1LRwZxoqWJgcPF7tuzjEcfoLzF7vLxipPFsgnGdneisCmYs1ZMtfpLgMihM29WFZikGq8RFTMsbLLEX6",
  "key21": "4Cnau4CGgBiB5CKgnL9rGrNDpBYsMWXXpyk9fhnEMrsCaoHjdVEdPVm9Rsa1amQgzEkdsnyuC754fdCWuJWxDJn7",
  "key22": "5jX7jY37JsFwKECmYAbG6XztFuChjgAcJ6RnM2MRQQk6iqca3W9SXpMxw9vCeTSMd9qksd4wHcaJ9SHUC7KFUeX3",
  "key23": "3VW8dk6aFmJvL3osrY7acogvnxn9xHXtFCzoQveLJwCcknsi3Jopy7ygCq7jF81qxiUpuf5KYxiAVVQfiomdsw3E",
  "key24": "3xJrn2PLSxeSgc2FtPHyXzRtM3LsE4xj9aFtpixQP7GZ8KXG6hMpjKhCERJtWN99mZUR33xyJAha13ipTCwPTuHV",
  "key25": "5tGivwsdeTaCGo2F17B9qbT7CrEyuzR4uXjXvMR6z4v59PePNktCkZwd6zFG7X4qhs3nyyswGB8E6Sn5R85Ba2Co"
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
