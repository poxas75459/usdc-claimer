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
    "2G5QHAv2hzTjSKmsgufPqPdEsx8MX6YsKM29aH3E8DQxuPK9pzRjmX1JsxEg6ChGcDPsUfnxqtGzyBSnkc5EiWyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqCzCt7i2xTZzvhsiXFUd6AN77zuVV4Ga75Dk6vEPD8zFbQbPfDJkQdsAn2FsaVS8VwPtRa2mKXqYzbnw1LRVvZ",
  "key1": "bM6y5nNQc4y7xv3PhAf2vsJVS8xnjet4ddHT6cu6bx9y6XgrA8L9WQNjwMK24ysx5Hs8JuT1WQDCDXQSZwHTRYG",
  "key2": "56Mkd6FkfHC4GCArmPrWSheaL4wKuu3kd7Mg8snXbFmUL9jZtLnyDeiPH54NRQrgKBdGDvUSSUQYg8mjiaMe8VFd",
  "key3": "2b2MMcZDxMXD4g4gAwiUSCtmYJ7j94hX1D4ZXvW5Z7T2QeArr35Zdb6eakQ43ksnhyvQeqAs55jMJhj2RvU9ZqTU",
  "key4": "LC8dXxb1RQ5Q2HJZcKjwHwFvLERdxXghkioe5Vx4SDNctap9HmJ2HeBydaT5oyyiRZ7o2wcinfgBHBrrjGnp1WZ",
  "key5": "517PegzdFnWRrUmke5xoTpYMYMgn36C5dPa9Skz2YGLbvpWrzqYADPst84ErMy2basp81uP9d8WweatWb5dUMxv1",
  "key6": "5nBEzA7RNMBdtXCDdPJjRRbsT7RQMFyJgHCCi8nGqkUxFcBPV4e9sMpVU5jkJvYnF1c6HEhupVw2J6Sh1BcPUpX9",
  "key7": "5gXioRs1Cu5tG9j1kQaCTnr958YZACN15BevrDVMxa9RmC63rN7hyBsbmZNfLKwdrWzfWxAX9FYtCCRB4kDuuA1E",
  "key8": "4STgnu1GTDQ6ikSAdiuunnnokvwj527kFu6mTxpa9CewSNCszyNfYy7QWrcoUZaMLtn9JcueinisWuLnQPq8cbgd",
  "key9": "21S2q8JK4CC7nfCqpHzWK3uGNb1cUznJMWqVKPC1htuwe4mWRkyDhDmU7XnS36npnGPzox8yiKNfYrArcA4gsNFS",
  "key10": "4sZcZMLEhEUcpVVrogm28asAiMYWd9nu81XnDgthnXfXjoD2ioiakkdDUWGqydBmjCjKev77XTYBHaBt4qoDSbKM",
  "key11": "4mURhCGffgk7iNjRw7uegjbCVyRvSuU3Zcb7kovjAYHoAghEHwhJKAtSUUeqdeX9zgA4e2KpQ6p4MMDBXo9e2HH8",
  "key12": "3E9o4xX9grhzudmDgjyVCZQkhp6Kt7azMi36Et6Cyw3J8dtPAvmfuHvgkKpJMzyRHd7d5nBHpVbnJSGPJ3BV9Hcu",
  "key13": "2mA3eeK7p7HB5a27baUCyK7MUZ7YMpiBDAMiYKVrniVekYFiss5omK8BHQ3PCFYxGa5y9fPBgUQoCR2V6HK9bVtn",
  "key14": "3ZtygXkbrSVq8GDoLmCpePDB8hM7aYn1BTGrc8EEgfELzbsgqELWz9NFfC7XAsSg4AP6HRukhL1p2UvyCcSh5n84",
  "key15": "63mYRmVJxJpqGcL4EZ4Sgf5axUEdtzFovHDSpvcA4pxvWpZDivuFSiSegjmiBPLHgu48wm5G5whqH57w9qE9B85j",
  "key16": "2XRb51Ax3VEciA7reW4NJVNf5UbHRjV4YhayBGh9bYCULniCYEydW34TNDNPqmG23nErqdL6rx9XwEiwHWSZemYX",
  "key17": "3XN7fvp8opEiF6oRJvA3Gsz4HYzaE4j1km8cZza54nzoEni8qDzk4RRu8NKzsMxdSBLkWLe1doHYRN49RKR99Xdp",
  "key18": "2M6NLNNopQUHY2ULPhPmUifDAc5BVwtY1RzxWLfc6yxRVj3sL9YuyRU7TejtpsJQ3Eyqe78mPFnPFyrCkdQea8e3",
  "key19": "4bwhSThoCArw5GPLWhAseKexgqU6ND8aUMuYcru3sNJm4Nk3AxnyQWvHLMRtNk7XW4kg9QUAbBPp2YiUK7VC2AgK",
  "key20": "3MtDBUSRByVABphoWJXyTcV6tH7YTyG5AFauxLoyG5cog48nTstYyguiSXiwd4PQ17kQn5PhQitSJjfTTKRfxq46",
  "key21": "3j7X2NWn4nMVWkL3GYmw1At3cCRCxEGxWpfx9WuyC9pzGBne9Z3Vxvu87hQN3bTgAR8wBMrri7m8FUFAwp9LkTz5",
  "key22": "3RaHcT7gz7VK4NWpmkEeYVP1zX5PBeop6L3XqEWnjYxfZa2HY6V3QAx43erSb6AVBsUqivFPbooN41dCkLPuMCyo",
  "key23": "2BachCwENa6gCRPCEyitfYQdLi1Z1AjbpZCb75GxduE2AoyQMbsWbzyhgA4GXwBDmZV5S6sQhfEH6U7hsJzD5Jbh",
  "key24": "2uhm8BWiAviTozo5yxM9sR1qFYRzvEjsgt1a8xw8rRkuPueK3tzgeUSdTpa9dXR8m8zmiowGsYnsBygkvFYMeYRc",
  "key25": "5vbHDdH9qHPCCxQ5P1EC6nkye6c6UMTGoSTTs4d1GQbKcobw16x4dKhE5wbHD3zuVZopSAs1ewehaMYEycDdHGdY",
  "key26": "455L4WXfbb2frCrvopMqhutGVFRTGnpMU4qMuY7b5F6Ng8aY1YDBgJjNnRPfq7qP12292H2fq1hQHcgPdkLD7Y3K",
  "key27": "5gawBdpu6pC98N5g1AgNZ95jWX1trmUh9CJdDnGVLq6gbTYw4Xw6DmMUbnbYETmy34ExUzNcU177iVbE4Y9kSAr1",
  "key28": "1eWWjUhRRGoJrxhBcmfL8HgQ2EwhwLMvHaKmrhSLmr8JHZLTrCtVmptAZRGzJRyoECdS5MbxurEbH5u35qAbCws",
  "key29": "4e7ieNwf2bHZW91euPTty6dS8tqpJGWucYoxg8ncJJDmatZeKcSgLPKFeDAN1bNJsasenUbMoUzwQ4QiWVsppQzH",
  "key30": "46S4BoBQ4wktnon8jc1yfSErMoJpEMhyZTW7kYjNpweEiDv9biZxWWG3HEoe3524c9nzUh6owGFajZEW7V5pwUBA"
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
