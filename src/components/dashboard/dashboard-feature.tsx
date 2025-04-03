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
    "4deN1gbtjzm68pUMxJJrpUQbdp7f5DijrA6QsWPfgJbTiTKAJyieU2Ath8vxHSjT59SQ5TuMqahxnCqdLNwqt5sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ew8g8Y7RysYQUtvv2oY17b8JNJbxnbXcx8wS7fRFACiiZQP66EAb3VUvximKyYwgRqpQmYv3BDdiqzWJpynw28N",
  "key1": "BcsyMSXqLs3h2B1NQ6Vc7FBdhNZMW4YR9d5tpmMwM3hQKrWXD6SKACdUjLzE2nRLJLVKu26aaQ9xztGKS5eYgQy",
  "key2": "2xA2iiiTJEYnot658MMF8A3MrpZUCsZmAmVfAjxbrfHypLjqbzpXQSxGsDDVee7DzzxvwRuopNCK9efWQaPSsQaN",
  "key3": "27GaezUzMGzyjDbo96yjTW79rbB4LWK8sxWAX6X7ZRYvBECwp8Y93gQwUCS8HZQ5jnz7Y9vUCuFyryH1uxHpNrY2",
  "key4": "4pRQd1HsR1thtFUjXqCxrxZ4kcUpUe64T6iuxQPS19mnkxZ75VMFDirV7xnLaVjzQr2iauRoS9Tqhji7P7Je8gtB",
  "key5": "2YSqEgG87Hdm1PUjQg9AH3LiXW6iqnwSscX9ujyrn2KnRMxt425FBGVUc9NR9jKcnkTPMFB6ckPN17G3G3n7NAB3",
  "key6": "41iXHcRFf6TsZttK6JZNq1rndSHLtY8KfcsQ3xifE8b8SymGhfi9k6etqsRcn4h4i6ctrF5nPmoX6a35WatxFvQo",
  "key7": "3qw53HFTZKPS25oSvyfWcTX5o3LMEoqN6onfSumR1fAws9QgvhbxG1tch2LMvBFVFjeYUaVAjK9zr9x4DK87p5oR",
  "key8": "43RG3waDxTvvWEYt5oH2TBPv7CqonjRq5KvLby86p19VGKoQjTQqF8erzURTy33TorVnEGopJ7TNfGtrdnEJKBf6",
  "key9": "W1d7YmmS4B4sq9bxuvJ4oFimzMQ8Ws6QwnyXMNbVAR5mpg1pEjXRQx4MASqYqWjDhziTo7iB14NbZz3pcw94MLD",
  "key10": "5suJ9gZscLMHcXqdZFoY9igLDd5qjBZj9iz5f12pXvkMVPsk3KXoeZxzRWjUsLRgeeHBpYmALePJtdWNSNLjQzxK",
  "key11": "5FWRCof46kCh8PAW2HbG24yfLAbKgTdK9qhQTArySeG5J8wRHZJ5WRyuDpQwggZVdkv6CX82cXtrP3qFkfaxaPpH",
  "key12": "48Xi9mqphJSsJz6mEMo5aGYiPxT1iKnisPL2tL73ZsH5fg7begnjXasufnVBDC7DSv13yJ7cG4BD6VehcGeXzwqa",
  "key13": "5XQWiJ3oRRipX1zoFZW7tgMWpRusfS8fMD1cEEHk5fyE6ZgJFMob4B2TTXZf3HdjeLTbH48NaYFD5qURcmppzYhX",
  "key14": "4jkaXcCHa1SCeb5fAvXuFh3Rhp77Ap9cXnRnW5x9ceLsR35y5HPMUjLnMNT7x7pKR1Q9oRKQbbRkQu96HRrXGU36",
  "key15": "MQRwWefJqevAt7bCJvoSMKRSs1C76AfH3xkKqVX2iRXDSLup73mZ2ws5L51JZsPvVvJy6W8agUYNx9unExtK2Yc",
  "key16": "C1QVPd6LzMmdNFHM95u3n6GvfrAzykULGzeWrwTrmGGdanLHSDemkf8HZhMFc66tBtxjGjTCRo7G2eYhMXdisBw",
  "key17": "5jrcs8u1s6JogowNeafr3tETXQ2RN87Ma2T5fpoKTpkF6uX4GGN3Po5GcBTPh3sYc5aoXw7JU28udhzKY1gAUG8F",
  "key18": "5e7RbBZRUa8BLmMP9geQdGTMprvRUekv2bQtpSeG3XMYQk18qFpuLxNRLvsqHvuysfyzA6wpCtsDnH36pkBWgQDV",
  "key19": "59fVs61rworFfajmdiikBkDjCL6mkoADYev78xsEicTVwHKhyDeqg1jPpi7Ez7ynwqap5u2jtXwoH54LzK1fJyCv",
  "key20": "5yrm1DuhQfGqeyX4SHsBHHJr9vbgYZw1AsGbp3DwgPp3Hj93FtCnqCbceW6GNGzkPcj8FTHm1U3EXimGGQbnSjyX",
  "key21": "3oUHtoKAWQFs2QbfNw8ebduhBQn1PW1aA1uQKLz7rdKws9TWGmbgGE4XqEUTNnvK6GtgDPJ7bRi2fZHqMdJ5Y1ms",
  "key22": "275zW3xi4zHC7juLZ3D7b58VfWvwJKFZXmL4TJqZ3dUizj6CVoyAtTUd45gVHo8jWkhqLE3mBoehBh4B5cj9whAQ",
  "key23": "62E7LdsYDneFunGE5JLcyB2Y1dKDgLSj6vkmSc4xoUNMhF425LFLabkJY3Xsq1aU2bWRWNQRkpnpbvhFwtk2H4yY",
  "key24": "5MN8UbirzzgrfkmSGnaXnhEyQFJrAWdUk7kjUgZ2TTEgQWqJAhJFTQ2S56pKVvkQyzT9YYmi4uBmrPPcnpeKGaEU",
  "key25": "4vE277UQPRfvGRCojJmfpXn1AnzCWMyo8PUpFTrxxxFBp71op87AqBCTnC177Cz1VvNu2Qx52RqjwvDHCFneZeP2",
  "key26": "QxVFYdAqnW97FEp8frCE56QTyGJsKuJyymfA8uaExP9irD6F4j4t7wMYcZAUET1yDJZWa1RzPXKLHJdPCQZWfVG",
  "key27": "5SareuqHhA8cRKVUmspdLw9mq6VNDHKgfDfbPBJAK8ZP5NwwHackfCn3CjTwsEtfQ3gv1SrF8DP5Rufo8XYQn4cK",
  "key28": "7mMLq23R4AgPcMPhh45krQPdGBYFTVaKtkr5XJKduhPf9SHrdhLCEqHso3JMzCpGQ6d8652C3sPsLHmjND4qUd2",
  "key29": "2i1iGtxaAwutgMUB9f1245eRjVsQ1FjY8vJEp4jBvLXEQtS282HbBrJ19ZeDa86SfSrAMWCmoqL7PdZMVPD65uoN",
  "key30": "43mkkPQVwb3vhKzjk4LktTreQ1Fj8Rjrha8QG2pUPsbJuMdJKTCbhqfU7efwLx7JPTRKZCEPZExzf6fcDHLkBYmB",
  "key31": "3YTMVcTSABMZofvuNpcdcBSpvP9XAsSGYPd7spEZhKdeGLNbMyHBeAPu5ZVi6ZQRSDJAZWcV2rXoe2ss4pkA6xoA",
  "key32": "2sQSfAxuUfSx5NLrujM1U6scSqp7rUqvLXfKHw5tcxbsiohjQR2BtK1KUHAfF5VEBBMTAQjyauntVnm6czhv8KbR",
  "key33": "4zv6GGMeEyUf6UuGSmAVz3c9YX21fwxWX6icU8VVsuiVshzY21aDDLtQmuGJXchM9GXRibM27eGpJsBUACen2g3b",
  "key34": "35BARyzvBsetNK2U2L16VNiwNNPgunR3Sjq8nVaDsPVrB1mzb7r3fwjJ3bE5FHEtYUfaAknz8wNBiRwonsezpw26",
  "key35": "A5P9m5zXuoF3hTGBDawiVS2GroHJgBEWjyAGTXb3biQE1fxFK1ms8q643WsTG9cZZ1YMeCUPLuNje8UAsf5wMfW",
  "key36": "2Nzmm6YawAVzptg26A8XMcg2Xjci9BCb6NsKhRvPWAmRmJBP8cfgqsWT7fYF2DGozB8RP9JYxLnALQddKqNUJhPG",
  "key37": "5yvYao7zGWhtY9ZYfWuo8Gpuqfx8N8ADEdkKj1CTU53bU9q3DNESUA1QEF4Ub3qDub7tu5X44SKyqS7AXM9G3UvR",
  "key38": "xfVjhufWdPkMFc12NCNUnC8FRVod51AdjF6Pe2fcWLdG5L9nZpKoK5GRTxrnDYgSN6uak8TbDD1VnfYqMQWw15C",
  "key39": "2DiNcFBSTiTjh6bJPMVaPjRaSn38CN3R7vi31RC283H7Tos7HJoE4MQA8ZeFt7MpFstXdrThpA8YuRNoPhkPt2Ff",
  "key40": "2eVjbXogi3XB4DoU9qJPqkn4zvCxpB56jb8KK2QYT1skjQ2PEon2fCjZkuLVuXaNComCoUtjXG3JB8iEKSKrmNpV",
  "key41": "Vb23cojJLVkDjTkHc4eShNNLycxDaFAPBLah87sZc6R1zCiUYWiukGkEXhverB6sm1QL87d8TYF7dWLyJK8Jq6H",
  "key42": "5M8i5v2nyXf3cqMYWnJVaFHN7dqZp9VJEAtZB5Qz8rvuc5cyUwDiPs5VR3qDVmEHmBNAR6hGdRMZPe74pjrf7BzS",
  "key43": "47WnHqAtSuZaoztPCdhgGJ6XooJNjHEL18R3XTsB6rUr5vskjrQLPxSV1iUvCuRUpVnNCD5SqRs4tWNVXM7wMgR4",
  "key44": "5177AmhHR7pt5DxxwcQW3PoMoaBBK8Z9rTjHYWqd2UN5NwqwazoxnzSERSU5SGfxffZ3TqvAXfyAuPVjgKjmrnRt"
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
