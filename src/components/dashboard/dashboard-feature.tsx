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
    "38kMPGynzZqFat9VwmfJGWiZbKk55YQE92jNnN9mPiCdfayKYLYYuAyRbekrwNdZVyFFvacyuG3jG8APWwqsR4Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqD4oLpuwuBGB4XkEUytYioY42u5d5LVFdD1oQ2VHGxxWLKwcoeoiMGKLMN7u47CW1qAx5jKUEvRqoJL8fNh87H",
  "key1": "5NX7a469nzTW2bvQA1dHLqqgPNwP4BXQCwJrFgSG7L7R4umwmXTgvi4FFpbtswD124G17pUUsT1xpYgficKUZviC",
  "key2": "495fu7s27Rxp5DxdYcHzxEJYtKeAL7kC8zKRhMDWUMUURsau9oKcmRbkyMVYHvSwSmvct1FXaXfQrr3TaNSxj1Ei",
  "key3": "4ErGXtafgm7bYhg2Hu48rh9eNpJvSi1T7p7fvWSqc21bjLnGpDYoWtfwZm7hJLwyAWFqQmv6fJG1En4jhRFySZoW",
  "key4": "26Aq9BfknUsewogxCq9UBG9tUzEqpQRFyeHjh1wfhmfBVDVJVUrr4Yj61wNQcVrcER1tW7RXLsCv7C3yVZagChnM",
  "key5": "5GD2ah3uCiStPeMXSez6z1AgydJEbBBD6SgQ7FqwabQX9Ypq4Y3KxyPaTwXT9WxZ5SWsWdFXVnQAPMtUucU6kAHD",
  "key6": "Ezizey2Rc955rouebJqYhfxfAReDEnuSprN2VvXhTfSkUMTRaoLVsBmYJ29YojXDnPP32ERUSy3P46YPL1ZerHz",
  "key7": "53wmyjGA2vxv9D2A6mXriXexQvXMJFHxFwBc2fGCyucazKiTdWF4VH5TpNGwfHy6wq8aZG5FBXSAJNPp46baQUSN",
  "key8": "UGVj9gWjZBC8zDNe93ZJ7LJetBuz777w8BJLHUDUSTUdAfgAerg2fKXnj1zssHw5uZJBNweV8TvJpgKZFP7QwyF",
  "key9": "5ojFJiPg4M7NYGq4zju5JTjFgfZGTGmD7ZD3ESFVvwDpn4gBQUCakUHXFEbEvbs3rbhu91AoeCbCjGk5qCsfUWNB",
  "key10": "4k7fLKfoMCWCaUHUtFUqtczdunwfYLPfb9KTQU9Rk82bhbF1Bqb419wtjRJxzsYNUKL3nL5EYDw2b7GGdfqS444R",
  "key11": "3j5UPGwXjq4CBQxo1Yi3PT5mMv7TYtn2uxvuPQ5nkEXknb4PmFZbUsBptpf6DFDidg7gHkQ95QUk9uoQMVGrzoFd",
  "key12": "3JopwkJwnqp72h6u1U5P468q9xwwuPuQr5VeJ5LkwBGRE3i38Z3zDGbt2fM8uuDj1iEipsAfZDpBqWYQU83gU6UN",
  "key13": "2WWb8YrWj6U1qDp2ACk8cDZXcgTEgHDZ8j8jtCfnTmg8i9cC7U5JPxbDuUMkcD8BtZoaLgCbvcZkr51nhiPFZDaU",
  "key14": "2JDBX5jsFS7z82MJWc29wHA3uiUtdxMoPMiV7d7tmJsDXXfTrkkdmnZBPDA7hL8gy78yh7Pg7XFiaNRoX7PYFChV",
  "key15": "4EG1drCttBAzwBUQ6NQv29zHeCmnTYqtSPdAzERLFxZJ6aCAMWR5RAA29ehEy4xGdC3mGJYN56iC6xbn7T6HbDV8",
  "key16": "3xXHBAQV5K7NzCsJLbFERdChPio6qFbbNHc2eMjXQ55tta57DA9tuRpBFcFLHhccGqAB7mZL9t3wPqKXVi9DXAS1",
  "key17": "29PBQHdKidyb8A87UpR3pXUfP1Npk8wPzvEqh32zvNWb98JnPpjmcp4hnKGr6sGtPaDa9C5DgrwSDxQb8hGukwMR",
  "key18": "vcHBHJmCa9Uu6Mj83kPXyVSgfu4BvP3rCqrz45FBigvmQT9UHaDvvfquE1EG8pAE6bfrHec3td9FwfD3MEgbnaH",
  "key19": "3nPodbQ15v7e8xjwoA2Svrhh2rd6UvrJW1W7pEyvbR9vVH35wko1M96ueP7f1sp9hr5ZnJY1btarm1ASepLpYKY2",
  "key20": "5b1wp6pdBZsovnHw5wwmj9SJvEbpJGggR9M8kykZ8sPJgmEB7X2iGitVnBeFtf1HQNWTqh5ssuV3eqT7zY46mCh8",
  "key21": "6716g6MzHwtwVw3vCJZTJuTDUxV392Bhw3xAHquj56ruN4Z4UoS2HgnNFjJmSGJqyW1GfDH7X59aJEdC2QuSCEWc",
  "key22": "B5Tz1fada867wJo7y6hjx7vqFPBpfJHX8J4CQgU2dwM9bQXkZumttfNrEoWsoqz2e6TeqxYBLk5YaivPxkBKaNi",
  "key23": "3VkVed94Dm26HiFLRdP4YKcNEXSLp17s4Bc75sxSqpzRHmAJfXnmtSKgWzA9MmD1pteKTGpdxom8q8XiG5Gqpn8U",
  "key24": "Nw68EfAnesYCjgbKoQTzYQWYSLZDE9PJXvt9JCEnaDRcodGnCnc5L8et5535kDquJZipYAVEwV85HaM9XvPz3ZM",
  "key25": "3ZVcMFDcCxPxJNK9dD376gDDx5R6MjwrbtErf66rNRsSifnqAckyF1UN5bEHDfKEgNRAB1ggquSnn757CFQr6aGB",
  "key26": "3DvMK1p8HM8pZ2MdsEAEoXEwBnW7x7kY9bk6KeJ3gwbFCPgW9thqtcTaRS4MFxUEqKYTHEY4wvtopq2MbVTfn9qN",
  "key27": "2cmqkcV5a1nqCe2qMdWc8QhyCQLH5Z3UPzHBG6gtkfxarCKBM2Srcn3qQEpfCxQ8e2wXBXVE73uzmDDSWs7DCGhi",
  "key28": "2sMi6kiUZ2u7yHgWpsUvM91cpMGi48moaxL92ez9GoccvUQuhLQK4XMTnhpNEqCozP1nMX1qrRCXFKgZHnhzm8vx",
  "key29": "4uThqd4oSRUi4Qs3TFoyMC7Rjn6YKe4SRsozhP2xkqnNe48BGsXMkhMU6DFQ9QfYh9113mS5CNe8nNzNNdYhRwzZ",
  "key30": "5cNyPNLXfroRPGgb5xw1D69h9GP88FYaeDFBFMXz8HFxFLsrYwvGpqBz2ouBi9ueGGnYzdcc8U1CDqYt8BJ9tmx3",
  "key31": "5hcvHuMBfWmbJSfK7ux1m2rBvPcj3bCkBeAsqyqbPvasfyDqxdzf5oM4CHfh3RpJwhe5qmKLU9LVqijRx1knzXCb",
  "key32": "2MrcxfK5FFzipkyyqAr1kwwMwGZgfgbm7BgNqtGZbSytq5fB3PU9eHYnN1rgwMxd3RNQM9pzy3iebSo2D97vLkX6",
  "key33": "96qrB82nXEdYD8zK1YuGw4FS4Cv5NwJDjVby3Zev1YWbqs6ivYi61mzqPxyCG4d8aXau5iLhQJfkAWUqDAFvQWn",
  "key34": "4DtbrFDsApupCh2JyG96rGjKjeHqqsKfsBZTRdadbLQuttHuP6KaxnbSZccSRwj1FE8QtY4wTb3AcRuc1Pmitc4a",
  "key35": "Namwb8QS14i7mYfmhTUy5AkRfXZsM1SUAprAqBng43SK6WqTdNNNWvsMyaNvBMeBf9vzJE4cYY33xhPQdPahntf",
  "key36": "gakiT2xxyaYX5dPg4y8ZASMsdW7fmqJyTLAp4RiaiRKmWLZqT77jSpu6nK7f4BY6VwcEuN3rkQU7p49Upn9zUJ2",
  "key37": "MQuxHdTqxV13kmqKBpzfDFpDpLJEF8ditFbJ6JwuvR6MxzAswvq82CUo58HNRZNee5jYwrd3i14mwqPoUtG5jqc",
  "key38": "5vzCX5X1Ee2eN7ThgrEL21FctNTgXgnJRnHagtxRWwhgeM33z9vbs7dgNKfGhkFerzesyRRsoA9GosiLgC7f89Tw",
  "key39": "5383BjDT5NVV8mu3w9X2Fydq1N4dfsu3spQbUtTRFdsAmQN8G28v529E98UpNnBhUNGt2DhUFW3sbSkgAFh8rEsd",
  "key40": "4uwEKqGMeWXwcT4R3jMtqPYVefgvvKjLB6PLUqZ4qZDSfEn9g15DwwatAYZK8aXpDbfFdqmveKzRLzjPRskUH6TT",
  "key41": "DfN6yZGjm7TCeC96qhNmrNUmRSnu25R2173UpwfD2b8PkUhin596mjJNF3gkNQv8rFiPUvU973dBug4tPvPg2H3",
  "key42": "4JhjmXJS5B26tsxPiUfYa7MuVEsVDLvsHoU5qutzFiuuLM1zcNLRdZKnwLJrj2mAgXYHYLcEJmw84Z1wGyBW9Euy"
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
