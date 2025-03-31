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
    "8c7GSe9ifoxNiVmzEi23wjYh6E7gBrsRqXFUizGjR3JoEmCPCBzqNmRKfwh1gxXQ8zk9JcyK5rAeMCCmYXw1KJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Ag5rfGzsTY1TFJCAg4bRkGWwzM7yocVHitRJNokK7N1t2Y9NYQHpQ7bzFW68Y4TVeSVqG8aNKJvArZJLLHN4Q3",
  "key1": "5BSvajChA6Y2EdhxRGWUp9uC9w8WzzTytUfnfeKH2FKUex21t2UNHNQ8uVXmh57n3XCo4uNfuuHXeXTeHihX1eT8",
  "key2": "s4WMZqmNEQbZWXcvUczvD8uoV9ZgBjqdxYZNU5BULAutXs8ByCkzSo6b7W6zSn2NTT7vLs54okivef2Ajac3t4Q",
  "key3": "4CJ5dC9FPVBfPLnuMJxLwjuDoogjqhLQApnvW8oboVAzDkoGsKp1mwiKrkhzuG534pYVXc4xUWj9SBALPJWroKt6",
  "key4": "caEbXkUCKFyKFNHaXMb5S8Q26yvrx5uK5fSeUoLZsZhHaaMy6oGNFtznRS2pezwBEAtvF7N5prUg8BLgTy4LyPU",
  "key5": "EqKKWmtp9jTgz6Nh5GJZhtMSCDPmqCfgfu47bTG19ATDWEFjnZAuKDvCjzHtGQrTT2TV5t8P9zKWpYWcHSbB44D",
  "key6": "4dBQush9nwTKzs3Z6MApSp2DFwFgM294dCqeE8Zi13SqvLTBCFBoui4DayCSf411XA39xLEuUJfCbVL4AWjk8dY4",
  "key7": "UVKZWViCuGsgyUa9RLZBfgppM5L8TjFL7YGjTXepmyPUA7FJr1aqC1V7owrz1g9Eu7JSvMQpXiPeJAUzQyKP21r",
  "key8": "4utMZ8vB9T8EykxEsoTcq1dK4ggbaku63oLpUazG2nttzeE2VxhzNmMqZk9wYFZdCPLzQhPcUfa5fs29NaRfubXg",
  "key9": "3m1YJ7cEEpChvr6N5mUmHf6YHoVVfrFTTcbgdcydpP1wxsQkNogvsJCv9ox9FBL4qnvPTAc5aMfgWXKeFkZRL9YZ",
  "key10": "4vj11soodBbjpJUr1VLVyti8D8SihbHFS2rM6564uYgFxcKwL2PwQRXQvFVDRVSFcTuRnXH7H2UHkR5T9uv5CjBn",
  "key11": "3fF4FCHwvgty9uUQGjwYQMtZtc9c1wjmTfN6TFuwiiDsqHc8ytYhE45HsDboYiWHAPiVsJdyABQCRxCuGtMR2fqx",
  "key12": "qaFPGkUo1LBoCAY8m3yYx8FJZRVXikkpnAEPaNvuUbbDCtfcZ8v5HmkxaNExw9uzvyyGwxFTp1GBc1om9r75dDS",
  "key13": "5496iYpR45339AxGVzXvGiocRCYsPTdzHa9qiMSwdehXtLaqWtAav3a6FvJgFqzAriQvDEDZ6QB9Y7eysubBFzPg",
  "key14": "5QH9JVr5ciVnVmmcSoNcwPe6YACWvaNsi6nRsPAVBWY3b3gZL9XqSdfbZV9xagxfLYGMJUbwNEWBauEvSthQAhL6",
  "key15": "E9KJiqf7Ev7hWBM942JffLH3Zs4pzsGWUfGvorqRjq5DBei4GkPbYoEkB9wUE2skWo8aSpiDRGEYwcC7hJMMeHb",
  "key16": "5FFbvchnWv6dxHN6omqM28aqNGTcZbffgo4ZXGJwL1hv7DEuNVQXToHgWcZboSZxPegCXm4PaSUGaPjnnU2HU1Ca",
  "key17": "3qSDQHyoGwKrEBWnD9VTwFTxs6XuuSLtvoQNkBvKwsBWtJ9UNXTP7rws5e6e12eq69WBF5Z6FYYVwkDaSzbqS7gp",
  "key18": "5eP7FuwpvZ6vP3S6q9cWmh26QVA3wSWmywMsfdWPH3WTx6y3GuaXuQVQLRMa6x9XC3zrVFE7vcNaYDFkrYgJfAax",
  "key19": "4ZHvGnECBZeddg5kcMob8MV688qEXrTV2jxLAc3Srd3QayZpQTPSnVBJNL14FE6E1DbMpCYqbqKSVvFdWgQS5LE4",
  "key20": "Bu2nfVWht49xLpF3cLY3LnyR782KKeC67HGMFDBxCCeKh2cr9bvLyoxzMAQ2UDjvS3gEQKN65qpSdk1VJWsEuNU",
  "key21": "2G9BFLzAavKiWFetFq9UeXVsxH3vTQ82RQMgVk1MTBe7xeo2swGSxRjRGnDya9uQNiVTtgGqagSqqqZs3CQau1A1",
  "key22": "DTMH5MFVmpecjB6rC7eAVxDLpHx3Z3sS4i5aT8NuQssvcf9niYhcefatAetBQqNQwgnWHdHcf7T5rdi1SSiCMkW",
  "key23": "3hpGwdbdU8BPXDDBPRzgfWvxNGG8orb9yeEwqtWKaPzrrEvaG6hWa4EAiP64tieqpqqzQ7DM4L2VFni66ATTqAUy",
  "key24": "2FaU86FGVTWgc1md2DUb7SSVjigP1zqiwqw7Kvqh1qFpa2pHdKce4PmyFWAoNouHxorK7kbVeufM8973mnHUJLWD",
  "key25": "2dTQU7MV9daB5gHzpaqWPZztLkU8h4YATkoMQYjobrW2FATorjnEqcJxRqHZyrrtbWaYchaxzk4r2AraXNZJ1ZXw",
  "key26": "391c1jKQsjS9SgZ1JAHhscpfotr2QGPWGpWAxrjyV8H1XVVX9UfzpMcsWWmFT44MXBvqtZ7f5cr5C2yA7rEFiqCn",
  "key27": "4Yg11rRbZkTe1gUdTFdC62zj6GV2yEsMcg1nKJm8A8Z3LAQFd1P7TjvyJyqni1WDFzkiya7rMj6yXrLmPcReCqg7",
  "key28": "gFsmzc7JhfSTwmANu7hRnMt3Sv2HHxHh9o9uXdk97mp4bxJUTZmLwjzTQ6FeUr91abgGeuWvBxj8gA9o598nGQ4"
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
