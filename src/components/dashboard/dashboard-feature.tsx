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
    "iUQuNNCMGzWqf9HVDpg1bTMCz8Fa121uDWSrLJ9YRQgD3cNETms3pWssQbDjADUVwKCmHNX6wbdyyahpx73gQFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52KbxLAwKXisT2mrFV4qJVq4eKTnPp7ScBCTXKe5yBaLfsV88JHUDpp44vUMYz36Tw7VeK4S57jMNHz5RPa6JJwd",
  "key1": "5uhqTrT5PBq355x7qK5YnLAF48Xe6vw4JbNatU2Z2UxJJbduYo8D1nPCDxqKirLmpzwU3gvdUnNPinKQ7PHpmG1d",
  "key2": "2ChaPCHcyvZmSYZoE9Rew1c6gACmkRfzLgUH4gnAn8oFuftkV1wAQob7oQFTgrZWgs4bzXBP4ZPs9ePjSUXQDXg9",
  "key3": "28GpujAv8wPUjG7Rro9u9eDrJCtX5atjQHnNZAocPgcAHnpbBZNQs3MCStByGEbLix8rKnEiH3TPpXUHy7LFPpC1",
  "key4": "4jiKjGY4kUxu2JVzQoyLsXngcbJ5XALGqEuyfnewwfsRnmjfMmd6fF11fT4vAjDZwfeQcxc9hetV2zvB3MGGFNnj",
  "key5": "2mzVoXRvgubEQg9EofLoFi9t5ncT9sbc3WXnvwqa1TBH1hF4cm4YiGAwaajppDb4zukHZXQ2uwAghhocqQc5yHDf",
  "key6": "2Prh9wgo99ha5NtQAWU1ivadTmCrkKigyyuvNFVa4yJ9eevZb3fATSfcLAjidsNLrFfqb7bK9FrPyVKY6LsEq71u",
  "key7": "2NJHHPFa1GNryLD5n4NawHZM5fzjbj9rCiMf8vnvzWNQSZ2JVEfUMMvwVACAK8hDfTehjGQYNsRuy8fgkqJxap4V",
  "key8": "4ojh75JaSPKsWHFjfjJNRgrHsQ58Hzb7MvZbQSj7YUZowaKKenwHnfsWtuuuhWG2UfCuGQe6FoUKCDqLHAFikQ6y",
  "key9": "5r6dYxLJFLY7qCQuuhPrc4QERAhHv9Y6nC6hF9n5xNY98UA6pcrhomuykSMkQxr5MLEpcsGUp9yndnmbHSj17xQU",
  "key10": "4tnRQLVZeqTUzxLkX9k9riHT9TrgtPazkTWcxQzNXL34h3gh9ooRT7WXFFkLFWngS73PbzsrBYQ8Sdu2FDLRh9e5",
  "key11": "YL4UJCehgbe4RuJP2iVaFiaC5fvSTGmqxM55c9vSPgrqq64Ah4a1crytPB6bUSLP34VW81aN25KwahbAtQjpqNJ",
  "key12": "2DmCthfkmcFDHZYWucqDmi1UppKwYrqN2WZWVp5iTYfNUc7Xo6yr9LQngZ49ddRXVd1JNVg3zpcQBpqC9uZMJvfR",
  "key13": "388X1JKNVoYaNh7vhgJnAbRXkMhRgXSQxsQh88QLj827RTJ3jyrpc5n4Fpj32TL823y4HPEGgJLHQbfKDzckFkYU",
  "key14": "3NhChFHNaYjJTTprQtXfB3xEpZys3gj6g32LFziSR7cULt14ksdvg5tYba8zW8JobdYUf4b8Y1o4bwvwv9iGqmav",
  "key15": "23F5qmbduGoRc8nVKY4MWfR53AxVLXcrHaavRgEcoEAxbxLeYfWuijBFLQX92Tygki7n7tborCZQBNYtWWrTUmAa",
  "key16": "5yCv2BFFp4Wet2S8kG3st6noXewRvVTqK11GVK9xVHLaA2p5SdEV73LwDJQxu4qNGYvusPdXNQ17LP84XCzxA1jp",
  "key17": "EzAYNR5hQ6TKSpW1yvswQMEhmRtAiy1dRWpbUtWx9wTn1CVYYAowQfDXxNft1Yq7m5PupYzvQoDGw7LDjKJL8zc",
  "key18": "vdZvFz4GK37ExcSJJK7ei8D4jThq1iyeJRHvEz7GS57LTzLvrEnWasELbV1pMCJmrzyCZghWWXYaaMeP8Z4bJNU",
  "key19": "U5UiULLAyooLkYxuPdGFPCgs67EHGYv4V2qV2efjrQ8WmrgA3h7SFckBeJc8PjjrRJgrZXobweun6De423FyzrG",
  "key20": "5QUKonFuvgnbKhzHNAXXZC1JGBpNDoUWaa9eAaxKnL7twgkq9HCazqMqGfDeAZzLDZ6S84YzTZCMv9Ng6a4stgVL",
  "key21": "4toiPxHmWewXcybaQRYkknCY27J6Fw16uJzQ6vZtNSayaLbQnkG4aSwLZzpCWpCWdY43g5YgVczhhqMJAMdiFNog",
  "key22": "67mpXco2iomqkQPayy1c8SNz9wm27Vj1xqT5Jmhdg9T5Wd5b2LJp7DaXLMtX4DNWYqdaNDjWsi48DvBtppmStAUa",
  "key23": "5s5HagQVvu58Di8GVYU5RJBmwgAqom5cybNui3w5q3cvWTcSmrbSopTUFYRNBaXfVdD33JL4RDkaFXvd48yF2eMM",
  "key24": "2J3dcmJNLRGgLrexPXWXbvKDphfBdftAgyF1GB2vs69SCe4Zq5eP1FmXZ7dPbAEVFHvBuv2yA2NVQvLZ9YYE7ZG4",
  "key25": "4JqyePN5HWUbzYzW3NhcqThCBvtq3Bu16xi7vJUExAtSb8YmqvpKMoxtrNaM5n88hJ6Ta4qa51RoefpWaZKCF8Fx",
  "key26": "3mJLJ6bPCFknQvw1fpt8oiM9aXUcdJRyvapD66K6XdnHNrtTwHbnwu1BSwWA6eYM68v71KjeLbT5c6xArM3zupsN",
  "key27": "5EyKceG5JRpPsyjTNpYRXKMsi7JAqw4DEWbiQBYfEo1Xv58HshYKr4ztWUyiKp71rqVVHaYXZgn7sWQthVrmaFJD",
  "key28": "2zWSxPdS2Ru6FdBbU8CC3aYn5KGGmhxJLskbB7hWd2UWdMnU1TvNy8gSu1KQGe9rBvPTeRgmDxmShi4QAf73VkbT",
  "key29": "sab7xXw4nJqyExfiNSEcFRJy2bQNZKV7ESFEwoegXqUVp7ephuk1eoNaj1nHqF4XT58KG1ZZgjkYxTYbh6S8jRd",
  "key30": "wEpbFH23oFjM2qydXgN3JmK6Zg1PdsXmRxdMXtD9ezvYAqUuswXF9UMLbXYirqKZcscPZsdhZNMFKczHBpxQM1B",
  "key31": "3pAuHaUEGLcMcFLNkQqyp1im3bMEWvV9XKb9bPzwJX6aR2SDXBVaPHUR8KVRYFphowitPAftfuXMmR5kqtscH7ze",
  "key32": "63jvh6X78iHBDUCePNhkiGk8aYWUkyFdh1kpD3FY8NyHRrrLp7iD7u81JUtCPGRxwMCvDdNnim32RE6sRYRRiZxT",
  "key33": "65wjtMXrecKun1h6KPoSsF6VsB8g3o5VWxDd4U6szaxti7md6W33KvjnZGZX4RvngSdCtkxFzd2JNUZRKVD919VF",
  "key34": "4s8AsQ4w34DqBVf7TWmPZ3jsfqRaghbme23k3V5kCWrj11btrXbzaWNCzvDTXH8NBU7MnJiMmN8xf7SJwM2jEPK3",
  "key35": "5mH2E2SGdUZizmBhgMqPmTEfRW3h793zrXm7vjzwypbTnDm9xKu7wwmG3BoiX9pgwXwP7SQYna3Spp49KG9XtF7f"
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
