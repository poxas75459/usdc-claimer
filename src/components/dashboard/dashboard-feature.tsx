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
    "35F1VMwj3st8NMQ2eWPToVAUkbEoWkYwbizvDMQAzbHoiQkvwY9ZmSrrkmK6svZVo8Kqbfjy7BkBCvBAMKUKpzGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsnSVQVaRDEQQvjgoWZJB6AHqRUJkXiM8ckTD5bZYjsyRwT8a4grDAUzCMeqewaVfGNAxvho5LRuiKq2pdfpk8K",
  "key1": "48faHfR9UfdFXwuaWbLsknKLQRrxReCXJsMDc6emv8QUPnk8HHHBJAJeUP3DLJ79TFa1Ex1SeR9TyVouU8xnRet",
  "key2": "33xcUGYVkzZKkJfvBnRPLP6VdbCobN1a1jftGsViv7qtrkYFYrnH8xsGTCckvCdKGm5TrLJdKYkXyBvfJzCKgedF",
  "key3": "XQ1z7NM4xEUfZDCGoJzevcy1Esp9rPC3b7BHVxo6sUTXX2UcTdzmTYbJnvv15JbkxeUgvmTx4zNhHkeJFybumpj",
  "key4": "ZDod9AQf7rbALspKHisJdgFpZjT1MY94ZUnWBKVusYhSy7ijUpYz2ezUsS9Z7WAFbT27484jzzFCyHvDTC6q3uD",
  "key5": "i3at3jYrLrdZtkRf7KkpurqWGgih3rBNidJgXgRe8ZhGc71KJN9NQVyK7aqJVjfyrSBEcmcUNA1Sczewf3y2CV5",
  "key6": "8ugcYvFoibtJQ4rRDhMNT3ysKK7nXbSyn4iugQp8DQbiziFwia6DVxwYtHoFrqMF7kLeY53GRrRZwAXUaRXzEq1",
  "key7": "3VgaFfkXZYEjfXD5CUbVDXtHGHi6uP4FyDvhkNfGfJh3UT1jb2oXwD7p6WJzUYBc7gRx8Q6y3mxegSTG1eqnv7bp",
  "key8": "5TQcE1uAPvgKJvgseKueULodXFoTtBpM4j8kuzW2m7MaVt2o2yCCAecb8tFYUHuGchU98qXBeZ2Hau5Ev2bKrzB",
  "key9": "2JvUe3Jifougu7LjCwwgE1gRS8QtAckmFRcnVR1dnaXx5LqiJ92jqYQJbQZkYxx1jprWj6TbqEzrMXVV89o69FHK",
  "key10": "2Gkud5jeTNRJiq4dWCYNN4TLHH6zr3cus1457PmLcF221QHupXnwSE2mfFUyYjAPHJcFpjU17LAqsbCV4jJjjudP",
  "key11": "2t55m8qwowYrQXg8mU8pU6hDKFbc3cDCZ9S6MZHEdf1RZJvwBioxFaWd67PmrRLKUUNDTWCgWHQCTMDptku5hiFi",
  "key12": "MUqDtF8f7FPtwNzPdpzoZcY3PBr44wEvvFwzvaK74oBw3g77niHizwMKFhJQRbziaHQekpUrgByLvNcVks5wSWZ",
  "key13": "3nJV8bdBESQsewiSrsMcnKVZSKypfUVL55RX4UDnVH32rofPGsdRN8K2iji4AW8xdByLyDRwvWy4HEup4yre9oFa",
  "key14": "5U43o5i3XRFHvrs2y2zTUPZFPcU9UtGHHstHztUdSacWyFL1QxBxVhygo2a7WVrVfNXPGhbJRtYWy27sXMLabVbe",
  "key15": "2yJYQb7qxuMnCuEZVf6VxFtXHgd88zhVU5kbY18aN9hck4QnQGMjeYUMmX3dom3JVog4nVw3A13yDbcYaicTQK5w",
  "key16": "4R3jhQkAkNTpDrwkJGvpKqbV2341LkWqzhm7BP2RuiUK5mkbiFFuntq79M8FiWcS8eSu9wSRJAoJfNtjs4ChgScA",
  "key17": "2WuRZGoVAGwyNfjcF6Mjf9dxFLAtoMafkGN8Y8VZaFWrMPg6R3hq35VWs11m4Aoz1UmWuirDesUX7kLWCJxxgYas",
  "key18": "4JbBeEuziRXpkWuVu4iZWjRKgtfdhYnGUexoqepgbJjpGzvHQPHRFKHUvtNeRruQ9mv6DazHeQMR3CgcTu2XxiEV",
  "key19": "8T6jcCc92fu3eCEfyVUopt1QwyzMHU9m7ng1JeTfn3C71tHQ1QEoRARGjN2nL1nD3Q8gsccT4VSmyjgGPMMQvwB",
  "key20": "cjNB2UuacSV14s2mpDWR8kGaqFdByquo9V6FbhvDJoWpKVMQpgJWcVLtk5dSyBkY35Zb8DHLPzPQ98hkbQdxF2P",
  "key21": "4LxPXzhkkhG9WPEEzqxNBPi8ZWn6AT2CzVeXe4p172eyVd7bqMHp3DyKEBWvMXhHRV7K1xdvBRFXyDGxSJi1Ahx6",
  "key22": "2LY6VLWzpnTGZKMkNxnKUsrpnFwwGr7kXByXjtFFzrhrt5gx5HYUXJbPqJA11TkR55CkdyMPDKWGoaXn4iGb4u1y",
  "key23": "4SyY9nteFnkvHBUiTWGxzNa3UGC5aybx2zsqQ2EQpqrDrxyHWQvK8XNWmx7Ti74CDaaHcmpcLiz4tfByuaqXtzZw",
  "key24": "46fQCDprjBLwmujA8XTYzQL7pdLdF9VivT4q74sjgrztuMgYmepFgGCWaeXvFX4LY8RVCuhUUa8JpEF3d47qXepM",
  "key25": "67DR9jS8KLywNbRJ9torC1uA4cshi62GyrAgq7SfYG4ibFPsmz2TQCVp1e6YJ1hVB7UBm2L1TgszavYiHaQxY3Zw",
  "key26": "5A3oujpYWFeRVR7w29SqsbLwuu8mznceUvbkKgHHfqViGjEkguNkJ4CMsF3cW4i57t4uCX8ZvYPpbDxHcC3CMy7G",
  "key27": "gcse8DBKQv6av5dFTJGWF2NLj76G9dXHf6tFZyhgL5tx3rcFbdCVkkhseiHpdSqKxhJE4kgHA944WDintWFiWXC",
  "key28": "5xT4JH8h2H43ZRjQttNzDbirNQQBMuMccdBd9cMYiKutPhDfSHiHq96neWQokxdnZbZj2zB5YxjHVBSZrhuWyyjh",
  "key29": "4xSUZmpZqc4EXuTpDap3JxGieKKrGcWojrCaqpjrVDFPwD5SMqDfgnpWDxKrmJjFE1zhP4tQSXVGYg38Y7pX8H11"
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
