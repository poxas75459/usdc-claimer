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
    "5XvzXM5EXg44YRtk3vBvDr3k2UGiCpbxqSZAJfdswf2FrmBHTf3CuBHibAQiNnrmKTNF6mHyqHCBmKP4DRoRcMyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6VD2nZTEvgj5u1ibusQ1enV2Xo9hfs451ZWc4s2ywJ5xretKWqGqgyUMJzDqwbDSnmzx4zHncpJUoVAnSWUJA6",
  "key1": "62zuB5fbKZ39d737UCHAoKcFCj6eSRTvjj9ognug676Q1PRhZxNmxszbPiVURMx8NKpN9wcMuspXgUPooo8jbgxP",
  "key2": "PdQaS3PxWjpp4dBUeKuBnFoNLzbebrjDcMWYmCRoBuU5bUioBKq47t4bYN52oVVBhmYYE3Fkq899Fiv1TtQWHjy",
  "key3": "5UDEwXhQf5mo4bjC5CyNmXJqhsaZhJkYn6eij8jbkKLNKcsnB6uFKvvemt8kCK1Wm3rYX6S998ue9wYxHM2CQJTj",
  "key4": "4JzuYAynVzfWordxg8fZ6KBjoPMcNRVovuKiHALLQzDH1wNztVoUtXbdk9am9UohMjQTyp9wNNUMKKCzxAd6oq6Q",
  "key5": "3enkvs99agq4STTKEQxv6KLpa5WNM1MBBYHcCAv1cTzPQXzMMXg4g9xPbrn79D2TJh6szBm1XQDeNiyqweQy3C6v",
  "key6": "5oNHKxXH5juoMPnr9t24CRdc31fvu7w3gP5b4W4LYjGVkJXqgbTv8nW3AHCRgbf1dnnbva9htKXF65dEAzKRd7HP",
  "key7": "4hKp6bfE5BxjAJLyzvsGmWWohqcShtwG4EiR5UvCB7Ed2YaMN4u57AFDMqZ8VroSJexPUWNxFunc1nmSZAwfxuuk",
  "key8": "3DTcG4SmFJJvwwJg4XCUVWMbmthRB62gtzyZEX3KDuqscFzQrf55jNqYqDxGJyhGgjC16JiAeNxqQmuX9PE7npwS",
  "key9": "eSkZwrFZ7636R9aFq44XNYsrtswHRB4EJvjGViBY53gtAD9nVddkBWcb3fpDtpHpQPfyjpGqkDZg5LAxJFcV8qG",
  "key10": "53UzTe2oJ5oM8drjMfrqn31pV5hRFcWWdNpx88GosXWdHuFXxwQrDqiQZQg8XaotG4e2Jg6AH8KM76B9qztPZCep",
  "key11": "3dFYiCdAMjhLrQcxQWX1hDiz1t86SKa2FhTYvTxjPcUaVHbyXhVfLWFTn6uPwkdECZ36bi8TitZjwV6bP3MaTMhc",
  "key12": "2vzqRJ265xxd2sSkJb48JpdSWVHnCWrRjyKx8Gu9uXbQiT23SbT4brp3ePQLnNmHMTyd7MJNPbUvJAML83FS1u1R",
  "key13": "2cdA8EopA8CoXSX5tQNML6QJemeiMtLhMwuaF3d2cWoJy74kSwkcRCuVfdMBHobFkqaXU3KiHSGTqPdWVc9GchMq",
  "key14": "45cBgNczWpqu5zWZ5FnDY77DTsq7qQgDsyWdfHFknhuuDGwWt6zf1kMsnWt5TB5fpydQuLP4CcqX13EAFAPG65bA",
  "key15": "5WEGNMo7T3WeG1PbL2SmUNTEzQbc6x76zMo4TrA5mvPdXNmAVXMdvzYRCdx57nidnSxBRJJiMPFg8TCeAC5Ed9N1",
  "key16": "5eV1ABbkNjcPGDsMn2YuKkbALMFvcjg3QXZdA5t2wRH4uQweZ93N1pYnuvZDypMY56n5g2wQdj3WYusqx3hPPNXD",
  "key17": "2WgGR8vYV9tmXKsTnpDEEWqEHZ33xRfHbqpkwJN4qYTFRuHxPkdjrMMUea7JtqPZvmov7c2Vb2hL9m7sL6CuakRQ",
  "key18": "4C2FPvTSBUTC4RsgCwWJ8htZa7Jt71rMk5ntDgMbG85pfuZeXmofWUg5eC4Zfg5Z1d7oXAjq1S1dKZXU2XZC4uLD",
  "key19": "5mzm8hBF19ivNy397NEAGmZQFeEW8My65gikJLwndnH2nTQo7mUFyp9UqxfhZo5NCA7FCrzWxpgQ3RWosgcrEDB7",
  "key20": "3bKjcG3n6n1SGdZSW4q4uPYdxPw6NA3z2bW9fZT7hNkTc5A2JNv3XGV7oMtFmxMtukwSEoaWucv4S2V6YoKTEfnR",
  "key21": "4wwDy2wHWPnS7xVENYzREeSs12vT6sUp4qtaRa69rk5wwdq9zdnewn7mCxEfKEmPekLPovK1S7W9ywJ26Sbu3UWD",
  "key22": "VC1vcEYs9VS7dYD9eDQxRRYuizCYXUYL5iSjEWPSpGbLzoUkk8Guu1cuXhCDnpHbnxhgZgG1GbZuWMSP9LhhG7y",
  "key23": "4y1jREsLG8NurZvHnkScPZqGM6LWcvUWsadziPd57SFu4DoPt6SVXUg9iZc4EyupK446rtNrtM1df1PFdKJEVMY8",
  "key24": "5QGDyJDy9ChpChLGVUj869eT9m8nnnAr7RrCfo2w6ofz2vT9NfgXLZJf9o8KUKAdV8yHEGPPmeryMNeAXBKSX4iz",
  "key25": "32sZjKQ3GJM2mYz2SDN7tU9F38GCmr6oTaogJ66Yg5G22HfEKHXNmSxh8mz4bRWSVTzAidcPQvGdGkCfBwDRL26H",
  "key26": "2N2PaN4RZbV8GviqFGXPHxFJzcGH1kddSHLLdJyHQn1dTqfQvMaQWeBkrYJdMwHXkGAKK4D1sk5bcLV4TtawLWrc",
  "key27": "trPnScnjwdH9cabhX6wUkm4vJobTZxC9jyofdMayjmEUYJWUW8P49H62XMTE1MyqUykKrQV3PPAssQYSnD9juNR",
  "key28": "2RbWntLdQQtq9YE2F1zgB5444iFjTRxNFpQx97b6Zu3wyBD1DqVR8mHjftxk1kTNJsFij8RtahodMkvRkuteU8C6",
  "key29": "48d3b6JMkT7hHdN21qYW57tSMEBVQ7yLKHpkzQ7ZENDdNRr4GnLEFgBqPVNLWHSpJjPELsFNmHQpnhdZPA863XEn",
  "key30": "27X137BRvDmhNm7nCLjExuW9v5PagBudw4ywppovP2o6c13WM7pbon7tuKLTuZrVFySCPs3VtJdcVWEvVUS9KdYf",
  "key31": "3DDBEKXpu8JATvL7c32fRXyqN6j8JCctxDTuweeGRqTx9aN4cF5MQrGxDoU46fWhf7zGNr7LtLYumPNuF5Ra8GBV",
  "key32": "4k43EosQedcWupbvdihgHrnwaMRv413qF5LTeJtKnoaXvSBPQWrkvWquUYenqxzSaSpMafbYbupxMAQwNvR5i7TW",
  "key33": "51RxXNbt2QdixLcw4dyn8RJgL9DxwNEpEt3EYevVfJGHwX6DM5ST1Yp5EJcHRDTwkQhMhvr1nXW29vmPgRBYhpWm",
  "key34": "2GSWjJq2aYFWXjvdWhMW7ubzWADnDHDN5hAkXdAsqiMWeCDK1sfbQwhpDB1rtKzJHp4t4ryQat4eJgR7GuYkDQCV",
  "key35": "2iq4AcvU9haCFb7irbHrmh5kWqyPbQbFkBQLJzCsG8i7ixL5ESJGq6md658iqRh9KC9YtY6Dk1AAdXRWgbbk9DVm",
  "key36": "59Ce3hXyeQ8e2PBiFsA7VVSyzdRgC5jU9u3Vvp5aUqiXpfs5ZMGDbfab4anREYBSAggD5bCrnSkR9PdG8qm8m25g",
  "key37": "2J7Cn8GidGfuM5JBSiFccwpgNcejDAQ7ucbTarfuBRj2HERf3uQrRkbAQRYATaWVen4bhNSYpaVmKvK3yqvFJ6uZ",
  "key38": "4VgBcAC23K42TTSXYTPQyF9CAHwLwsxyC3r1HWfS4Kp4Yg9rLg98YKoiELqGFZYXoLU1JsUmj41qhkpiYyAYCz4c",
  "key39": "2w42i57H3Mzm5PPccXqyy7mEmVViLhWgpM9YPbLiHJYV3DoBJSvSZ4Fvdktubd2EoAJt1SdEJmDP43Buna6ZKaYG",
  "key40": "4XDQHvzuhUEqtkiAqWwqai1JMBk9BJ2ThLKGM3TAHJ6sWgxToYH8J27415D9sR2WqgdkC7fAdW6Wd3kCJRCUXBNJ",
  "key41": "4chLux4FEWyuQjFiXWsganSWopxFboD5XagoCvpEAHzgpM7HjxfLB1KqAuqEVRpGBfvKpjQ6tLsQ2ubgNEQSGKt2",
  "key42": "2arGKY2nEo4xnVMRyVngvxBSqN3Gy4tF1hHCTMZdfsFzRuTZ4gHWJjevyd6HcV2KLuFCWwmfnFZNptbaMoMLhMHe",
  "key43": "5YdY8vX4eSk8RbouacJibLTkLu3v2pcDScRNUXQvc5jFWHngdWS3fbi6SLfYSwe1rUVePQef6X5DduxLUfcLRhes",
  "key44": "rhyQVqY69bxDLztqt2dHaX8eeCo6TRCSYnttm9E3EyJfgyJzZKKZ7uzU18pavPukuWMGDdYBL6MzYmrqGGkDLti"
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
