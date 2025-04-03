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
    "tD5LZYWuMGi4dcL5Kf9EkquQY7cqVVhAw7wDQR76ydkGYpabJ9LEQcbiHYdd8aajZ2Ae6QoCnkmNn8SfKbVzSTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j14Q4bbp1BwqjUbtJ62CX3NJvna3EqVu98eibZrdukeNtRahM78JHk2CupFtUW6ei762Hk3tUWMKJSJhnYydKL2",
  "key1": "3aB79kGsBfYNXvEt5Lqjj4GNYATEGvrfaovqNKngyd2jW4MBqLwZ3XVNqZ5LRV7PJ4WkKt61NHuk9APS7S7PBiYT",
  "key2": "2NnBxWmjJuxD8Bz3e6TjXifGdUD1qNpGeF87RmSjao9puzf4EyidD8ag4tYTgFwnjsQMojH47LkuzciXR5usEcND",
  "key3": "59Q3sZPSFxMmeQcxj4a6AdkZCwAcWjk1GEMDGenzMsGGvpnYsdWvpgTRismyutKRyoiYBDVKBkQd6GkHzQMAo4BJ",
  "key4": "5NmXQwfhjy5wy2wJcJNG9cv5wzf1JcFDdA2E9uhwGprqkJBcLFHaNZKwDAoyTXT1sm4aNkTd2eX6KRKndy12iS7r",
  "key5": "5koyE2nN6ZezZjnQ2PNavwdHZuJfz3rFwGy4wRwj4MMwEc3ePnGRCUqSQkhC33Z6W86oQwiC2tHgNKCUTyZVcvPS",
  "key6": "6zAZzvnxH8VxiSVTJGF82LF7uNQpkBpV15nDB1vjeWRSrLWZfNhTExNMXfeCT2rDvK3pbRQ3AZ8ivr8ZW3oSbzi",
  "key7": "4SDZdaYQh6eZixnWMo7hasg1iLdZ6hryYbAC9P9auBvFNgMTn3FgbD4JsuWTsaKrg5JchG9CMT5xLZtPNTDTBVH8",
  "key8": "2wVvmX42a9Mj55dwv2YQ9i8AvW3U8bnXpX1SA2o4m7Y6bnGdTWdGB2by11YikxJTb2t6pFMEQhoAgM14Cwh72UUk",
  "key9": "3Hh9fhuCexVBJKZxvYjkqj2QpJUca9YNcJGoFcKdypUWKj7MoMNt7vczPDLd8a4Yg53SRsJu3PXMXjqdPBMSinhW",
  "key10": "4XKPVvAhMLGA46LV6MbXN7g228PadxYJWSWxBhTpExztzjqFgfrXA21SwgmcPFkfn1hzZST81Ecx54AUftphN6Qv",
  "key11": "339fxnX586DWaij3vRX2V4GWAq9NxWBf1ChTCas7oYo7KFrt56UczChWYqFEw3oXkGfarHV9LadsX6PHW8WJdN6Y",
  "key12": "4RC1fSwrSG2mBY3L31iSKSK52cXtkf1GL1ZrHQ6gsBr1bydcJT28KnBWLLrmLi1mUnDybRZ3WwWr6J4sskRT2AZR",
  "key13": "2wdzWaJsmhhXcUJrgFaH64oAJeez6ncFqDSEWQaEGN42pf5kTarzvDZUxXDDygq2riNntvbNZrCVbPPYW6e2ywEb",
  "key14": "34QcmVcGSjYAA6xU1dzvRazDwT73fbfBEkXtKqKN5R4Ch2F4Q4uqNMTG54jYejCDRKfL97VJAMVLkwk88ostKx9k",
  "key15": "z1bmUSZXMiJQ37yod5UzGCCopBAA53UUiHyyMMyYShqms6GenJC2FRub6cJx2bZXfztkfsRdwv9hsGRd2DmkYA2",
  "key16": "2G4rC5kZ2iouKxBeSGtgEbWfN9cwCUE36Frye5QRSpXu59Rcc2BsoizY8w5TD9fWZPYr5364s9E2U9negG1UWnPm",
  "key17": "2ET77rk573N7QKkCQvxP6GGvjbXxe4aDVTUhALP77QooiFm8HYN7J88V5iKUQF9rWdQxLY6LtM6RmsSFu9FD9Jb5",
  "key18": "4ZAPZdzW97u82z9XBEc8BRy7qYKc1s2JkfbwyTJdzZa9ZYRvoK4kfFVkogcB44Fi5azP8qna7HBZ1FWwNNyqAVHk",
  "key19": "29vv7CfUDWPukNwiMkvDoR3frVsHFX1ENLkerQ9eHJJEt9EZmmipE5o3cG3Dp4dkYJVNwBFtbegydg8g3QGx3rUJ",
  "key20": "4o7KkzCLNxgRgiTLQzSkKdFkvfxn7ANicWCStN4wt4L4CcmwaHHaCCGv8r3Bq7e3Ryc6eQ5AwVjESucDGrJoMs9R",
  "key21": "54NQrKZfhtu8hgW9Xb9meewQccz8GqaakczNWZ1aQJRYRttkhij5uH3LDkqaoUFTRz2PjxMD2dVH8YFwWQS3zFm",
  "key22": "4zHJfgDw1iBfiC5pbwAMQhMfyiceG5LUZw5tJGmqhVrD218vFnU3kMdKLzwMoQynitRXkRatusCDzpusQmPZnnH7",
  "key23": "5yTkPXu3jV1fCjaL4VnEGs76L8AZk9b624fQdc2RcZiH3Ltiht2aMVAuLcVirxkPbHCdYJUZhSMpvrDAoC9ZSyEU",
  "key24": "31R8EUpYXpsbr6RbY3z4b1c5Vi13Cf2TwoddNuYY5hBj7S3W9HSx7shTTKo42gBMAKMi2QZ41rrEkaG2AoEsnMDG",
  "key25": "4QjxNDxxEB3mMZk8Sp6PYGkERbtNafjYD3QbRRjngkm7kbenSHEcnvM2MWgAWtTXRX9c3hxbgJeTMvnyJzWuBUWb",
  "key26": "3v8BA6LXGAE3Q8AUC8hLpct9YqxsuzpPKYw5p8FFPy14bSgXeG594d1GhfyaB625NK54RfHdosDuFWvYL718Z5iM",
  "key27": "5zUYk75CgssRXjKCAaNVQq7tVqZx5XHjYmi7f4BPubDF3Hc6X8UfQuowseY6AUoLHnXC7tMkcxE6Z6JUtiWmxguf",
  "key28": "mH97DULPMa2iLJKkNQozUSYHDQgZzQxN7XDezb4XiMdaEeAep32jm45DgkdbNFkZa5eTPZhF5G9sAJBSi8zHZo6",
  "key29": "4CmfJC2DGoYKb1YSNXbdrXw8JqHyjND5DAgGMDcUJFkcDDdM7sdz9Rgg6bzAwFerEFU7BhQexKVJ7FEYaEuuGasg",
  "key30": "3bMVnt5AoUSWGKFJ2WY2EpJ8ZAmMFZtAc7h68ZPYtQnTn3M8pScbaS6Rv8wwxDu2cyvEgnGSeJg2V71iiH8EfpFx"
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
