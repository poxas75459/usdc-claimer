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
    "587GFEdhvd9TEmmcuPEfr8zrQn72LcwsvfvFcmgPUyrY754T8KKyECSs2zfh57Qoj6FHc8oxtDYrtZnXznyjQma2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imN3g2cd3UgJzQLsHx7GKAMMJaEp2ouXeHipEJALcyGMDwGwVhAtJ6awZvFNGdsREf3NZFUQEgynrNwxB4zjpFt",
  "key1": "4PhMWmwVb9k1DFxHHmJBxd7VTV7EbB4g4XR7xYvjZHcBCP1ro7k4AxyGKTXxjvQhVbUeRyJozbTneGWNUveeCDEv",
  "key2": "3Tip4AeMHyggdunddTsuRC8b2Sg19DJLbCPL5Jnng3MHgAH641nc5PGmMPTEeMKcXVNaQU312cgR354TT3XmXwFQ",
  "key3": "48YkhUAmupwMrRov7Prb67QpFdtxJcWTyzumZEFz3WqyBQU927siCnsu1oiN2giC7iSnaBWn5UaseGLi3x3Az8TE",
  "key4": "4MzN19VGdWEZcmquCSNoPTfyDRcQKvGUYsReiW4bgnSnRkQ9US5XZdANjyWdgFxAMhruiqeyexwd2AsZVDZKbY9i",
  "key5": "3GYkMnAirxTNM8MMeXhmYqZjFE8DGKEeQdwBn2nnrjJhXgEqQXFd5dnrsj8W1RUsAuGENnTTVYqdrbKsdDFXX2zH",
  "key6": "4PnactVGjbNT2r4Wx3W8m7zVgeABRzJYcFUYp7i23KZLzMZ2T9GESfbbxJpg5F2CDyJgPqquofdTCPcYHA4Koiw3",
  "key7": "w6A28QXp3mfJKhjjtZ1oD6dFys7tj7BopcdhNM1No4ueZRaWzgyzSES53JMEuumVZx7TgHQ9bsot1iXoVa8BAkG",
  "key8": "3fJyWMNDohnezncf7JNzXz1MEf1aiowQZU1w718VJN4SuYXDvHBEAvZa2XZnwoRGbhBTb52EcKYivXBm5Kn89t8e",
  "key9": "jEBeNWQ7nXm39b7ci3pmHL5bf4X9f53PSui9kmLPLVhaZB9iyuZ5d38qXA2BjkAZMHEkc3uXYPVAhdb4SWyBJum",
  "key10": "2oHtTfaxG5ARnM2YsCwuHCNjt9VrSKRAnnuoVRbTX4TAKUUu3dtsCDiMSX4kDVnB9m66qdcmZGqXEd5F8kQmi2hf",
  "key11": "3mqwkecQ2Ef8fumqWCu2zWSPwxhvweHjLpRjLHxvS5n5CFdu5UL96qQhhf7CRzSvPHJFMhz7ZwHJmYX5LeKbztVj",
  "key12": "AmC6aADg7xXobR4HMa25XGUPLFcddwHvH4cFvnwcMibvNihD7n93Hid352jGPU65Ju6DzSEcBfsk8ACR3ouGou3",
  "key13": "5aYWqEDwUzuKESyVt76v2Xe6UXUggXCyTnv2hiGQFbC94UjC7doy2ZvMnwu1p12vCngSf3TutwkrPUcXJKUGHED1",
  "key14": "2mFi9xg7V9BUUjTLid6F855x7GhNrZtKXCg8mpzfXt2CJFwNDqtMsLNAEEzbqZ4ranN7tDxCZfvd9HBG8xNu58ES",
  "key15": "3UZUUei7uMDgmKpLxxhSXneicRx2EuoNB2WJ7ijdkXmnJr77cKoM5Jo4GPAt9zFjQRD8Gd3EmNH7pqkyQJQwVMB2",
  "key16": "3hUq4Zc3iojRQnQQsNndLyJ13YP8KKj2SqrpqCKQQ21BczbuEATNgtBBBvQXitTgJCz9qgZNzSeiQ2jC7wRZ751c",
  "key17": "3MBo6oY6uUuLKjcd7BJMnmC6xatNgQvJXeJNHnEQcgNzND5BWMJFssU6sPCe5xGAqm96C2k9tAbCMhk4m4MVKtAg",
  "key18": "2LJKt7YVZCPXvpyyyFSF7vd5Ytnew7Cq96DcrhcyBwUCUCYuFnSAhYhjfcbgEX3Sar8QuFXHmT69gXQTDysHvECA",
  "key19": "4N6FFTP53WELsoiVMBLf5Pz9ndxPswkvYYUYaGh6gVoW9cnXjTv4ZZEepbC5wuXzU9iMsEh5swUDvmDahKzrx6cH",
  "key20": "2hRPfvjqEiJuZhYmG5shpEoxn6n2AaMvoiL9U3RtGfo5LwXJZ8MEenUsyMMvYneYYyJjPk329CQ5xN6NPVMfdhf3",
  "key21": "2wqY9XgzpVRNM2nsSAXVc3KqJ6BExjkjbkeVXVfM2CjMpmr98Z5RYgqB4kgwGFrbeGJefyDb4zAdeanZpdMr45jM",
  "key22": "34MdQ1v1Ykn3f84LmVq1QpxFUdT87QtMZe5NPz2VvcbYEdLQAXCvRznAkMAPV1VLkKiuUYcJAvbCUXxYeLqYoaVZ",
  "key23": "3FgbqgPqjyu4QfGV7CThxtzxjeerRNX8f61accchan9SJ6EDpbQ7ZyYT86s9hH7fTcE889Qpi4vxqNVq33FWBsdR",
  "key24": "VNeYd3Fzs1mWaXUKpFncaVQQ2QFHfATX4iYEGTSfeb7GfRG1Dv3q8gPz8hM2hXfgeZo8xtSD5K3ANgi7cUmZqgZ",
  "key25": "UJrMS3Qmj3theAh7YoEMqweWnJf1KCDqD22HFauE92So8YyfpMP5CFrt7NAjyxe72egJ7Kg2JrQzThSnZ2Sy6He",
  "key26": "Mrh6sxxukGJ7mWUBjZKmUhA5dfJxkAo1XfzxB3BsaqcAsrVCcpVYo4j8YFvWKaFbpizcWNSXzCwDGvXasSkjUJf",
  "key27": "2dFMMGQSu2z8AGHPiDvVqzdKwSVVnAfiTc6nZLvgyj33WvRikLzapbP1acgAz4BXcV8DvYkKnR8j3x9nxgEupFBz"
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
