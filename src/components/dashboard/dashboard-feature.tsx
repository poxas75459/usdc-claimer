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
    "5CeHELKdpvosntrjPu96XbzuhqJeCvRtVa65wvwqiXsYFuLLYk85itXjf8c8CZiuJrC4zxZtDF3fZUYTXTHJmL6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBLUa9u9yCvPJE7v4aL82vRewQWEgKTgbuLiqYcVEEnK2YiAH7kErFya7khcVGgSn2eYfzstzQUgZFQssZXbZF",
  "key1": "53bRP1CAQvqGgpNJ48hX2dRDHQa9wu5MGwvGMvK1WqVAM6BA2gBwV2CrvLNm2xdNfjquHf7VVNNoaeR8XpSVtjEA",
  "key2": "39pgrYaEcAKDZqidM6aXKowabgLp7DXVDan1mxesM7enjBWXS6EsDkwYfbjb71sB598QkVyKe4Gn2aeKA3dwL6o9",
  "key3": "3LuCoCnmmQB5PsrhtzdCW3fBw55Xtkb7dpUTmT6pGojaG4mQA5obxsuAhVh6y1V7NUC1U5ND7AsY2bfojKWm9kf",
  "key4": "25kmLoNfRHhsaNxYBSkf5xXqzStuXvUTbKrRbWpBvXP5Q5rH6TAi769L6Ef5MySS3xQvgtNKHY11xW3RFiRXU5dE",
  "key5": "UbhzPhuG1XaXesQNVZChtxMid1uQvtVDLN8NKGitstJAaqJHvGq5yvBRsFchSbYpzXh2D9HXt9SVnarNuqc1MkV",
  "key6": "5a1s1fbKBCn2PNDNuZ8hK3xmFY3drenZt7BTRHHhJc5jJELA8FnNMowjrSF9gVobSs42Amc6uw1ARGFhmwG3W6Jj",
  "key7": "32h6BcspSrvE18We9TLT5xEr49zfntPsihDDHZoxxfHarWwMNDMsi3mkuQ7xAijGa2vYgL7d5uosmQ4zQ6guMRhQ",
  "key8": "4kkEe29r64g8nQJUzzw3YuCm1y1a9pCNLniuge5oxmAASqncWaYEdSXhn83VXdpGXheGXxb3RhxYJ7UKQXhMuySa",
  "key9": "4h6gcvHe4wvzXcXCGCu8DmxtRYoU37LByV1GnXs4DhF4KeMkXKGjFbkZWanUBmUwkJbc6CRLKNUXfrb7awjzTHK8",
  "key10": "2HypTHxpiihLZ9AKYbtTF3mjAkvaYmanWAquScgZurRysnkxcXk41yc7kwAWDbBY2peUnNEHoipYs64V6bg3qMw7",
  "key11": "5euJpDbZFmFBzNV2hF4AP96WsaoNKk1CdfTyLBJ9VTTqiVcCtdokr4kugfYodm1wFkg7Hfa2SYVWjP4VQsiWopNr",
  "key12": "3YnG35RW4orsqpRJ4Rm8CDAishg6h5W3i6PJhW3hTdDk2hMtU6QUwr1MzGB2kcN3ykdQQov6ys6TZCL3La4GtBkx",
  "key13": "2qmryWuGhJmYmyeB7ZnLZXsiEznMiy3Jv98KQqayebN65TgdMpuhiXxqipWetVk32gp32v2q6ySxBtHV3ZqNYrP3",
  "key14": "34REpCJviRCNwp1b4GS57Zy347cL8ggTRhKVyTm5ugDT98JGMDyDBFfac5EWN5M5M3b5w7evQ2iiHeY7EAvMp5Ti",
  "key15": "3squ5En1P8t4BtzmFmcaCLwzWs4N8yr9asbJCXp9TNrBbV4oboL9p6qwLvrEcvoae4qxJTz4ANSCgHRF8qoVAVHb",
  "key16": "5WPeb3dyMpRB1UZXLjx9QLdFpRyt4qnLXA2upiw4Hwb1bQD5soNgaHMhvvPWNcve292bYaUWgvjV5FyEJ9wu9fir",
  "key17": "3LcMtw2S59CWxJKXsJZG3ywynUfFvGVKCW4QiyotcVqVSRCr4uCTakFnAYYckFtxRMYaSVEoAbu6wHgEPW4P16nK",
  "key18": "kZ4DCimTHNB1QA4Ji849MoZvr8v58rXzEeC6Lu71Y167GVVv9orNdJ6p8ok25SVytSB5asULypMT7b6QhdtKnzm",
  "key19": "mBcs2unpk1BCvYS6dEbTjdbKRURxH3FCzrK6iw8X56arSHCaeBWc9HmppJWxFEBQGM5xfcq1LWYoS3aXUunBo52",
  "key20": "2fCU8YgWjtDToqM6EgVN4QUUFyzcyb3Q6z9tKuZytYyp39nM7D1e7KQJ2zJXnWrebfP3WJYexLMJpbdsUaNHF17K",
  "key21": "zifQaStGAwoRQNeLSxR8CqBFoWWcg4sP1XSZsRrcHXkVPZg3RUG8xq98M1smiBKxb91BkztDb5UWHtec7rEShPC",
  "key22": "5tudwe6r6X69antZWUgqKKn16ZVx8pg5N8JVxw3m36AnUjYbQoZgqKfrvUfBA11E1PMf53JM23GeNSLcw6K9DH9A",
  "key23": "5KpSAMWpGDAr2UhZyJux7TbAbvU97Hq6VkuVVegV1Ya9uN8FVRHxYLLMAmtWZ3y1iQLU38CnuiqvMThK6Yms117p",
  "key24": "3CR3RhNDG2HtEYV5Q78qBbpT1hSsDR8z1CcPTt6mWbkT2F2yQPU4BUJQHgLiRQCm3BESFVZZs1rM5qaojr8UX9XY",
  "key25": "2C4tyicT5PZbj4hZ3binjMabEzHEGyKRPQdtfqWvEsMuyXVUeZGCekBPZ3bwFCQjwCvAdGRWWHJGEK1TRM6RRjHv",
  "key26": "57nCunthqVnnznaYhZmDXdFV4TiY87LKb49KB7s96yicK9AQ1WFowLhUhw8sLcQGdR3tHbn1ymtJ7XBvgtbMsPPh",
  "key27": "3fdorgDVxjeX8YUuXZN9puL1sVfgmJoijpqh8hUDeBHyz2hbKzhykqWmHR5AacUMa6NkGXCtvSSGLU53ZnLdDqrA",
  "key28": "3b3AGWeQkGcSBsqbqofLhMpmpM1Vbg6aDA5CXpUwao57T8MNzD4bYXCbkD9E6YcDcXmX2yn79jGQKiyVJzZn8wDv",
  "key29": "3HFGBtcu6o54Qybh5fgeB3Q1LAtHHhF3QcjhMmkcqn2uQfaBGXNZdHXX9vYPfMvYjRfbVdFdguR1Rwww8cK5CsRK",
  "key30": "5U6QfhhEsDPFkAE4Bb8tnyA382RJEiUjUfD439ogGRMrtojxWRKj4Rv8pxkMpWt5MzK3GTyoGvR5GXyNqxqp96oW",
  "key31": "2r7xpPcnSJra23C1ZRhJeYjwbVGrWqNnUFzaTennBdDMbceP9Wq5zxSw9CAk933f2uc7BWH6CZwHG7e626HqPHb8",
  "key32": "3iQMqs93o9qJdGJYtaFLjpwoZjNDewfgMjHKCseJuJVngow1RQZkkTgWSnwMTcBDYdX4EEavBppPE4NVNYenE1nw",
  "key33": "4Zq6bKhgZbPLvhggWeJ9ykw1qbNCETisBFT2n7fiY5ecvZzW8R9xqmetkUMVSsm2mJDRXpWMGMAoToGP6VqLu6JP"
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
