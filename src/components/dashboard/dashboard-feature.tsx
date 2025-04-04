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
    "5qzWaNBxR82rWHCRm7jey8xvF7FQKP3QvSdqbJiVbVcbQjBuYqLK3puXgyXKbsEKmv1SBxEb4bgxHwjGNKn9ZPBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aR1cQ3Wh2xqKd2TFfqPukvCzqUryNpKWAq5QCA4GdNQpwWHRSHyUYkwdJQtMY3K2utXvDCBmbr3cZFiiZbNmyGF",
  "key1": "2aPsWiJQ8PgcuyuPbZ94i9ySvrm2hePkn625r9G1v2mabKVk6Td3RebBohZt9uDPPyvbRGvsiqrnM1yJGSSU8qmD",
  "key2": "4uFubc93TafwS3gun3PyTqAfDxaZ2FWe66n1BGyzbzTk4bQKRH4NTqx7Z84LFM994r3tdimexbN6Vgszyh1fkyhz",
  "key3": "4pfiaPaKssrv6gEeopvwdDxk6hwUgfjScn1BnRyAmkQ6UuyzX171FSG9Kf7dcUweCSJzWGdPUkT4AQnYHk8p9Gq4",
  "key4": "2Tbb7yy5MCzWn91rfY6wg1khudkeQb8Ad3krhT6oxvLq5TtbPUvG7LntdXDkhjkatFJ4SZan8MgXHp1HZ3TkZH9o",
  "key5": "2J9JE7Ans19uVAD9VMjt5hupEBNMmKRdkgmWXXMxkQVMk3nAz6EHTWzLMAQN4mQB8kg6oW3GioW8eh8eJkkXq8C9",
  "key6": "56oaNDMUV3YsSeM56cG7FnzYRN38ozsH2R8oZuUVobopEBHxMSZiuWrzny5MEUFpF6kSC63RDs5bdiuM8aQuvBo7",
  "key7": "2iS5Y2YKoZUBgFxBwoCw1sJZX9avPNs86hX73TGKzr3ESxxaCKVo8H5YXTxLfpF6XTS2bTm8eF7zV6uexy96xs6A",
  "key8": "2Vwh9xaMvW1Q4UyswFubtmU3uDUUbajiVZaiqesvdL7xvBkVoS9Vt1BBMV2hhLyxqHz3gXCHG2z1KYdRqgt8FnKW",
  "key9": "UALWtjbXS8rerKMmhmRJBeKEhiVYEwTHECYmFvVgPUXZNu5dArT6oM1MiVHRZ3a2CiPPK9FvsuHLqNzhhenyYub",
  "key10": "2oAURu1LaoaVTZS6MRzxvmxBoQUFZBqEbVukTqApxRtkVam3cN5i9DaxN8DDB8ysAoe3rUaY2Z5RwfqnTratmg7r",
  "key11": "3c2gpLv1gm22bh1P6NhumcsrcpiCQbJuUsLFj1626FeRiZwWbqBVUPziEYTXweSR6XoXkq9MMnq2RiHWg7NJqSB5",
  "key12": "BnKVFLxcBK9WdFL3nHWwJbjHuckBBpmY5oZZCQ7hZ4VrB2zjFdwhhg4xCwGZoduE3EmXCzCxsVLSkiQJZeQ78A7",
  "key13": "5unhKqM3bcFrBoE3EMsvjNSwbLgyrJgG2Hxt1CJ7LoL2AcmrcMjfR9DSdnVSrH5QdAis1DZTRWfbYJhDhrXmvYFZ",
  "key14": "2Z9G3TkJ7RAbwah9qFQif7B1gzTefGxTRECRe3qgbtCtKu7iLFzbsZ71ozxd7Pd9rK8TPfoVMHED7Lsu6WDR2Va2",
  "key15": "2FnFfhy9VPtWiDqrjjW9rcbc8UFdYkc9QcDGW1jXDcXjPHeKfdQQ7DG3chQ5QWHkQAnNC6uaAcgPhAxnEaYNPXxw",
  "key16": "2oKgocMPWboUTf8RC8T4V55zQfybFdwzvYWLCdnhwuvZMZcAr5c9pvn3oEjMoKyJtRBbPrZc1yUa9F8bCE12Hzz1",
  "key17": "5tCrnjjeZXPoRAkXbu31LFPt4QX7FdDxQdjrrB8ZEcKxzRzefi4VuKX9rTtnGTPeZMP7UuyKSq9DAdngJySy48ev",
  "key18": "zUVu86DEhnYnDvupad69taYftGkqvbJob8QSz2TBXpY97udrb9Sd8aBCtS95ZE9j3nfrPnrepNbhB4LQem9buAR",
  "key19": "3XzCPwbrahuQCCLwGKtEuZcPf1WKKkRfkKJgxWmBupGXwAEq1rBPwKXiZkkMEyeEPXUVaQG8fLuDreWj6uBjoV7e",
  "key20": "26PoacG2aJCEq9ofaSubUfsS86t1jDRewmitw56FQqx2Kt6UpSJTXMaY4HqZRqj3K3BDFkKLE932PEbtBfQTznuN",
  "key21": "D1Z4T1Pc6GYbwrhLep4o9UF524vw8x6W5hPatNpQsGS4AJNR8W7bbYXcKmf43p3sjmGqJ72AJYtqGu1H5epFScc",
  "key22": "zAYSE66VtomGvgpvjDgbuo3ymof4P6v18a7AYhaPgBFCooo5yiv9y1QYxPtKkf75vaH5ybT9RcDGvUsWUD2UJGZ",
  "key23": "4eSk128mQYS4txLTZHnZUoFfLqGP4jJ2TNx9CXYq7j3Qc1ktui8ZJ9SPFD7sKNwweHZbGcfBcV7sJupAMLMyk8JR",
  "key24": "3fUkGds4c2Yopp7bRUPxWJWpfNFBLdEXgJvVZ8T2aX1JCXqm8eWrjaJckLQE9gEyu2qpT3xhxbZvQB8XGEoAt3Aj",
  "key25": "2oLPtsB81CFYGdGVQ7uZS9wAuxtnKuUXWedEuyGeKZCcLp43VSt17MGHShEicnZRsnZpWDcexXhM26oY4i5y9mZh",
  "key26": "2HvDYQpgrx3maDWeXiE8Yut4Ltf6QHq1gkm996NNrWTBBDFQPMw5aYmu27RXTf14Qrx48xEaTqPNJyDoz6mSKgCy",
  "key27": "CkQA7jsLnGCCkfGfyt5t2XeEk5EF9ihEt66UeG8mK5VqrRrYUz5XJ7B4qhEHepSGFeabPyBVpAkoN9Rr437cytV",
  "key28": "5emmQCM4uoi3tYNYoX7v8qgUWgJ1y9CcnYpqvWRzy3j7BUjkHvEWsDF6sCUqzhg39VBFGFa2mkhRRyD8iKJXuUtQ"
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
