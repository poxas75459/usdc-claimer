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
    "L4f9q7RJyz42oiJ4ipSey2VcPijQmoUuE2YU66XyAjEKbyS37ABs3KoXcjf3bNkV6oBnQVJrz7TKi5CgnxYcyKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4851FyujqUMcxwnxxuSZCoQNxtso67FrWJmrbt75p5cnumnDN5DENN6axbkjAT5u3mMgVj1B6SttvFVu86yaA4kg",
  "key1": "4KLVrrDLXtvNj6agG9JdNBzGpWH7RgAxf9adewYZKzjXbQJcBz4GiuYjoLYnQPRweBnK6z4FvQNi292p2hCfPfEc",
  "key2": "5wtXG8eEruLREB28gtHzd3rd5NoMdd1ePLbVSMjDG7ZkwSG7rkQr7FwhK62Zea4ax7cBMkYYarczjvhzgmwnPcAU",
  "key3": "ewiq9R2rNLgwBvvfH9JXgCsAdrv4bXTVKQ4JfmpbATKQ5wYN9LbBjCNevjAbx4aHgBvMKeVXFCwgDAb7wYMrXrf",
  "key4": "g4XE5ihgEVHXHS9aRBgpoMvc9g4NKQp1QEUYCXrSdaPas9eoD541AkefDJoRZU9ufRrczszr63HijcmD9WBSL6Q",
  "key5": "3go7sb8KhqH6gcvzvECcRg3U73mhnG25TZ1K3snvEGK25iHKAShxL6uomhwMCfnNuF9NeBxJSP6n94jxoyCy6hJF",
  "key6": "RATZs9WVUDYgangjUXvUhnr93txJniWhzJFMdZYdwUR3jy9Kmvd9D8Vmu2u6ojFcGRVUNENdStcJjMVtiLfPYru",
  "key7": "2oM8bH14RJxFM1jfhZ26pv4FpVhMtZVY6SYBWLm7tjbN32tyvemvCep381amXj2Z8KYXCzCAbZT7LVXZDCzRe8mN",
  "key8": "2FJEMx9yfsUZPJuUaz1HFqMqDiVVxc2kE6mtK7ive1GNSa2hgAFHxhm6DeazW4EZUsTprPrRSQ5qKwx8LFHKDTs5",
  "key9": "2GBt33rzfEX1uL3zheqQGpFZrhAU94skmfkj3DyYnvzZx8zCzz6WXo2QLuTbDtzZkpbC93GdHhkT9wxyn7u77mTi",
  "key10": "2ZjC92yNKNNYeDmRyfTaJdphMzBHzKH55uJa5jkMvQ4dJiBdatqvQxkukEh4m23oYoRpMPHSwJatnpLa697X7VNv",
  "key11": "4qnj3ETLEPg1BQW5k2E8Sh4gpjHwP3kzEgGNdgqxJisuUDbRTCEhfqUyk4tsJ77LVAxuyN7V6AmzNmY8mD5FwuPA",
  "key12": "VmGWvG3doknqUMD74Qt7b9Q5SwiNMUEntJ9yj2MgUMzeMVdPy2nApkV1keTT6vdY2FwUovqrrwA3k1AiARZSs4c",
  "key13": "39ogitdvjx2G9zAuBHJMiBcMSGnqEAXoasZRigXfcRccwfiT9VeXhRAe2Mtfo8JycM4k8HMeSFR8b98Ay5u8kpXL",
  "key14": "mNDscibuHB1cWrp1fmnRYiN7HeqySSKnaeQaKxAXRA6qG49gQLjooWDhSSAebineyxrQ2AbRSDhWjV8JNF5iC54",
  "key15": "5ckVHPP4XiWCSzAgYXauP8YQJWAp5P4k2BMrcpGEkpJP7gpFCmWFvMcfjcdozYPbhUaMWoaiN6bQgZtSWJXSV6qw",
  "key16": "KVd1wuGGqv8Gwh3bor3FwFw5uQGB6cS56UbK5DTF8fDQ4zJ3PxQm3mmw173bSFc6J6PG9xPTymdCYu3DdYpqh9c",
  "key17": "5Q7RHZvnkPRpLQem2rzV3NRYddeHry3uHx2z5vin7HPmoitSCy97UQt8be7g4y3epBwGr2kprE2P8DjfNiPWMjts",
  "key18": "8UXxzkThpRXWcfrXgQ3b8b2otZEHAGN3fipwXmx8uB7zCg5by9pLVvR6p3xagb1HLEgJP8N5YMBBGjbAEcjsWtg",
  "key19": "3h9tz9Ngq8ie8snvVkB4cHT21y3fNALhWyTZZNv82ApfG3df97H34aACHVCuBwnhuYLvw9qtm3KpdqCjgPxRCr7q",
  "key20": "KpVvqLeiL9FoLGQX4YXPwFc1aJD8PJ7fhaxNQkFPvoZtCPUVtRirevR98Vw16FDnPcNRGHeSznLe785a4gk1o5D",
  "key21": "a1xTSPDHGkVRzv5ZMc34F5SnN8JjSg2VHERfQ7z7BkTyBPMeHGNMKoqUTxGFcYjdeYa6j6a9C7NQHCsFSVTW3oL",
  "key22": "965rnPVKYKGnuN7pMNFG3Av5gAUe7VVZ2n2e848BTpikyWMSj9uSr8U9q2TqRAm7LDzB32yD6XrzHtWjXWtKkAw",
  "key23": "5cz6mfq1smQQpYmhmCKxE2Rf7FeEJ3Qwhk2EbxPMa2Xoj3S3VL9TkFAuLqyeqbPRcdo3k1Sd3NerBfk3vwyQ4uzB",
  "key24": "PJCxzEcuGayxbQJPRZSnEjo3SHMybUtSK5CiK8ueSMS1DfGX9RsHaEvqEjQ1Wfk6sw9oWWrPjnqB8nyW9rsDGfU",
  "key25": "3JnziEFzdwsSkvoA1AAosYgZ32NekRv9vkcweypatLDHQ7w2W2JYg5XFJ1qrhTfgerTdN7iGMy33hQ6GQ33joooe",
  "key26": "LNZnBmPsjxWtF86vkxBq9bwwbbfGuYbKAFYWPFRzReKsTtGFPDgjk9AkLkyCJiphMXh2EGnS7xTLVYoAfgvJiHY"
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
