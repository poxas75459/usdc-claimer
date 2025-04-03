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
    "9tDVmfeymSF5NmgNaoew7jH2bmLPBzj3cwxBYW9wGWzHCUJus5JLQU5BPLAzenPpBvBUY7Vpn8JhqywMwntWD8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8XME31V6Ki1wXeNQ9YrC8XnQwJ8Zxsy1DuQ31PiaXExtdwpDGaY7grFJv6phUebs86zB6BaJc2HRhvtXMSST3t",
  "key1": "2UPG8f3DUMug3NUoc4wUq7RS7hxKzgo3zLpN6K4YsS34AXWramyZ7cyk4wA6pWBHKBdV5f4EerndV4tEPhPzUpxE",
  "key2": "2CKTjxBzZedyMj2x8FjzYX4xhsgvXW6GkqSZUHo3j37RDoYqq3PRcemcTVwRC6trVvV7tC2UUQ7uxZf3CYanW7T",
  "key3": "757Wejg4ArQ1DzWtRVcdVUwRsCjqA6kpcxrwMSCvFxe7JRsHJQumC9zaE3Rco8avP2d2gqMBTRHVEWQwP3VouWq",
  "key4": "2XtPemCUy19gc8ynGQXoQw3NEPyCXYKK7xVGKpHnjCcN6hMFKatqBcxN1PBxe6qGZGU2AEAmymXeNmkGgGU6BtTj",
  "key5": "S5bMZqs2YhzirZkWEvZEDdzUqnpZs8MZzB7sEiRPWUTMFmoSPYG87bL4Kub4mr6Yu6Xey7ntEUSNLGBYXgQ1xPp",
  "key6": "3y4RELzPD18bubs1uubyqDDCPMSGiVgT22GV1zEuQGZQqfMfSaWWGSyFXSEVCuCWh6RFW66GjhEKQe1D5gHph3Vc",
  "key7": "5dBRejqLYGZPMwtyK7nuUEx2zt7tMybkAG7PMzafwKSfzWdj4bchfWXiKujMBJoVwtQQEW4ThYewFtcGv46SfM3k",
  "key8": "Lk8HAjScV5MeqMaowsJ3MpZNUuaer3vMUCwJ4c1ejf2Qct2HwiRy4RwWNk7ENbz83uNvihPZ7rL2z91LZ239Cq9",
  "key9": "3NCQRGrM64v6VQNEbn6bCYtPGzv95yfADuamMfV4S7KrvQhLifvLrp52T6rp3jUSJJwatjz4jLKF3BKpJUT1depy",
  "key10": "3gTaGY5fL5w4QLGjzUgaYoJiYpkaWvPif5QcLgLXATNXqVgEphikizkfMLjnn3LbS2n4D7ivZtXXU4aeVPFKsMGv",
  "key11": "AWEG5aFFwgFsk4EVEvKqXtPAJ7jbkr61XxDAuRwUJdX3TrZpxKF9fYrHtsDokb83aVbM3SUutKdGyZyPDoQR3C6",
  "key12": "emXwjDGw1zDa3jZtnxu1t92jdobuPSvbAQKypLHJukCrQEABuTv4RmEfzmfenoe6DT3DS1tQWbSYYnvSFA722V7",
  "key13": "36NX2HDxH8TVi5WQucqzW6R7fGRSeTyQ98Pms9LynoiKPmcLuCf9NXZSNgRfGKYkADdDsSkdS8G8xJZwvHD1zhHT",
  "key14": "FsoZictr8qKqW76j8qxLxy8oFpg7Grb6obdvLsTQRyEN2RihWALyNE4U2Rvpb8QpaCVAJhk9KDPqJzsdeLvhH5p",
  "key15": "4aRcJtYHkJv17Fa6FbbjToQRYNsxRwWcD8Qx3FXtvCHtSw7YQBrGfocU7a6s34vfPfs85cGfQohPxB2PfvEJe2pF",
  "key16": "3zQy5n8peSfA9RXvEHWVWcXtVGYMK18yrQxGo9gRkQFmm5RtfR2nisZHBnZVqHarfT4hi77is3JLRKNCPumyrQNe",
  "key17": "2bTBxAsMp39KKuvgpwTweVciutvHGbeC8Y9uRHgBdtPApCj5E8YpYD6HmL8ZSYLsuXEtJDvJ8AQrS9mDmMCCaeNq",
  "key18": "P5ZXak1WcSQ76ufoURA3Cb3LVwU4GFgpcCSVvYSpX6MqEYnKT6eysfQj3v8h63VDeSuPnAAPYB5MnDFG1XwfvJD",
  "key19": "2SbTqwtracqgbkAiW9Q8SamQX1RF1CGvrkPUzNBNBznXTaJuVdJorA5D1sbuuMamxhPF7KnBgwWsgaSsXu5mvGvT",
  "key20": "2gdnCswoEdJiFiFeewcoNccC7AG4XLXuH8GvfpCahzzfCCKThYQgb3VNxZm3UVdSojEPbxKb7fBr5vqju37hXvwF",
  "key21": "5H2kJWiAazSEJMpQrjTiGEtfwZKSRxEwPn2W8oHU7i93YfqM2vxgusXqTVMrzWP83Z1QURzHnPPgg83aDmPQXVrs",
  "key22": "4sFYhtxxdEgM21DDmButNQUkhy54d2hWtrnJxDmKC9B75toUfuxhgLfLGroLfHVkAH92D2faMags9jnAo1Uitwjq",
  "key23": "44EJYQrK5C5m4bAAqwtPFsFQC23e9ZiLLB9bo8LHf5YMqQ9wLenWCQYKbVSezhQqULdxRsBwXQZLGRd9NnFCuw1i",
  "key24": "22H5nCGkbF23ov1iaLp4NrisCg1tMnDsvJahc9LoHzq2k2rztFGmpgtHTtjuqWynBmvHwS7c8ik53jMsyXBEdZG9",
  "key25": "4CAd7HDJMpcXBD5bDw6CvdwBfKErcqhSQp7FtzRdmzHY5DRCUdRRA4Q4yvQtHwj4QgHbaw3GDcx1WnkVoLMZLADT",
  "key26": "5TWHRr6KCcc9zVwan56ewgoRd9ghbpj77rLBqp5oYGt9CDY5XTSWnJxnJWbg7w85NnGBf2LuYRDqzBWDpKFh6fV"
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
