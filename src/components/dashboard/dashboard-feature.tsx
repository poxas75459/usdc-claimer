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
    "9oq7dHYHspKNywkZMSgextvagCt8XnQqv1ZiMup6QcSd3y14qSiLVcQHbHkF4btQrLYkzE8skdrpkHNFTwRASH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUqbDPPZKvYixUdd2XAixKweVvTkqbFXe9jkf1KAANESSDbe2pZGjv8k66JcX4X6McUmrB4UfhaYZALFyRMgdFG",
  "key1": "5jUYvkzk7vZVjpEZ68dA4MitAgGy3qFGgkS6o7rJDCC71YEzbuuw5d9PPY6wuHWd2hQKvUvu2HXPxbFYhkhM3wh9",
  "key2": "5VWAmXeKQ8QpDjuDg8Kv2krJ24QMCsMJcVqrrMBqvBFu3ToMnMQwEQXk8XXiCMuj9WPGfAy1kph6gX7jVKm2vDAs",
  "key3": "zKygJNiikfjAzM1kpSrbspFmXkMbf7edsiDXnxEgbjsfEL69Uzbn26KPYaw1QrNaHhodDeVRRTjQUphEkgNnEis",
  "key4": "5zzDQU3EehzgtQFG6KhFoZtoJ8guSM15Lu8n5bZ2RNM1xQ7fwfdY7ePvL5VzSfvuAjCu4ch8YU7b2NhN4MikVjoK",
  "key5": "LfVpMbQ7P2LrXaSD4fFVfpwEahf4SBX8PQgMn2th6iPQVorVifEWPyb4JApK96cDvqLzUqHRVU8apG3VBqUxtoo",
  "key6": "42DJPwKkCGF7AZ1ipvccwggZ6FzzwzHkeX4yKrSGoN6maRGrajDHFSitia1LRLKw5zWGfQm3kGgfueqQx8mt7rKR",
  "key7": "5pAh1rS5wNDtBV46h7NeKKTdTQWC3kisseC5cdk3pdiWSobYXmaL7Ttk3Kr1znSx2JpaB6Zcb7G73DkD33vUxXgP",
  "key8": "2zr4AYrEh4rCoXBY7op7okpFoP2WDirCVzk3NC9M9dkK4nnqRxf11UR8vYhZjuHfM8dQXE21van6QxxViaPA8EFR",
  "key9": "2KKzZpAEFpNHfV2uSEdztvJXczJe8CjK5zKAo11M19JDqjEKHLFUL9k9bMTX89XJDVKSuJBsQg9Q5Ut8hnYMhQE",
  "key10": "4gxzQQRGfJHbQK76WPtswySA379EzsPckeTCMFyutJPpYqJDFHoRj7yhQrWBUpBksHkiWtA7zr95twH9o4apFWVe",
  "key11": "4iwmRnjc3h4yTRxx7S3DrJdCLRpGTN9AHAUJRzQgjwLshZFjEzSzhNz1dRFEjJAAPCsUMRriWEMkjdfFuYYv3A1V",
  "key12": "5iDzmB9tLj57m6NQTfEnYxVVz6gQ5GieeiMD6pPfqCpmah9pCKyN6qTaxdqPHnyuEhoyCHn6DxnHj8DhsgbDEFkJ",
  "key13": "GWsa2h4CBcSPDWoyxVq3kPB84c1LGNB85jq8SSXeQKVmRp7gk1eSiwPXNuJ8wuoentmohBBRLfowsSJkz21K4bt",
  "key14": "2jz4ChZQyW1guXeXo8G7jrxPpg9hQRzWC1sCspJQLD5JsejheXb12DQAbMcYcktSNmuNfLw9PJe84EseHFeUZkiS",
  "key15": "5ALxZvy8wHiuqGjhQBnc4K1rE1UcnwmUW448KqPUdUzAw8U6hXQeE39tE5YTrqtZBw1BpCR9WQuWGbwrM1oCrBa8",
  "key16": "3bwoqnbFzopJDsSsBJqhhWkYPVpLeNZMfkY3zDQjoupDnL4a8xVy4V6xfCv9NgWeiaA69RD222BDq3qRrdt72Z9E",
  "key17": "2AWag3qoDp5AB4npU6wfqiV8QY2P4mgiSdHcbE6cCzH3xJ3foDRWxXmn8EbTf2gz4EapBi2hAXhtU6oascwY75vg",
  "key18": "3ZMwU2rdMHeoU9Q6uEj5Ysp3RqwthHCN6XDmWvHRasYjQmUaVciFBfQydkBKEg3vBHAJdPw6URm3dQRcCRfjGXK7",
  "key19": "3QBE1Y3Vi9SJdomyLJEs759AcjCC6ZhE2au4tyifqRu1Ye47MpjJSypUz6zLyCeCJ8ChXjNF8kiGcdXaYy2QARcA",
  "key20": "d5oFdxQcCJj3C8JGM3kMTbbcrm2pJKhArWSRwoe7mgdSaN3kfugnkwust1JGAUQ9paQKQ3yBNda6A5bquVJCmwv",
  "key21": "4zB9n1PZV1eRbC8pzZvJ6jZaq6Up5YjKJPn6zxeeXFyreDdMhWRH5WiK5cCFywtwgJKJiPDT4ZXUZc7zqVLHQhCT",
  "key22": "2JEZrAZKVRdq7SpDf5CubxbsBSL8fWBgLWCW613BBti4TcBfYNpFw5uva4TkLMfqcuD5Dg2FqbYuopTPK5LysoM9",
  "key23": "2np87sVCiFrcvdN8vq25XoJuMtinRssu6QonhwFHyJgr14nYWFb4tx9kmTZ4it1QJs5cbTKG5sZnCf1XvNSdBG5H",
  "key24": "3JsXcQ47eQ8akcEJb27YXq2VEQoaXWxcg4NYbkGGddWdUDL5y8K5DZc3YyUBZamoSNYD4hKQ4zpqwHRpp8aSnWhD",
  "key25": "2sm26e7djY7UdA8fqJPtZTUe89BtLViE2m4ZyN9ZSNk9Vk2zH6aV3qPYxmjmURJE56PpA39BLCVhAh7y9m474paU",
  "key26": "5NhjLYfKS2jpq9sZhSNHf2UCeE63BdWpbEaNTowov3NDqAP39G5TWXooQvgzHGBiNsU18sshkJUcid5htBCebJEJ",
  "key27": "22Cp4NxTuDyBRNSUmmFxGHKniKT5gyFnUY57ZrSzrcHG2TYzRQfjVkMEFX7NqoopKDP4FRsGrnGGUKunJcAwEgJK",
  "key28": "AxqtaWBzv2iYLYrZ1oRAcwUznJd7DeMk8hNVcKR9eaPC4scHdYz3P6KvZ7H4fdcD9WcWkjsdeKSUNfTLcKHkUgi",
  "key29": "46mQfC8sSV5ErZvubdcTHpnb1CZYuCkiZkDpVJCX9pyXuAhvP7v956iRbyKDZSmLs8DPPow8QzDup3kZLMPTvWmy",
  "key30": "5hU6TbqmegQxSpCXx9tFKQAe5u2RZCLnLfzNagMuFJXGTKhajXLXAmEmbyUKEUFW8J6RJtveYPAnHB3irvjugyRM",
  "key31": "3CjBuLR9KuUGPXi7PWjHvg1Fh47RfhWuUc2j5R8o1exwtwLaVLhEmgmsT9AQdGvh5SKVGuuTgD5HQZPa94u9XS18",
  "key32": "5gB444aTpr3YTGY3qV44osAaU7bPbzzrE1Zm4W67DovV2wLvzwQsnAQt4b6fs9rcKRYQXPTt3QFKGV7ZiRchLUwH",
  "key33": "4CyYqwSVEBVjXj8P4q2HWGiRo5AzQNqUZ55sXTdypyrubfokdB8GwQ32y5PMaSzYvgJ8MzhScseXa5FBtezt8dkK",
  "key34": "8eBYaJLYvQaJ8XAh4zjKrH7vhiyqh4ktEGaRsYRmJxmsLnnDDxr8BxzoMLx5KzqPzqqvVfX6Pkhntfb9rFEcUVZ",
  "key35": "42yZVoLnnM1iMU9sqjZFt58AoFXab5sCxvb8GUfv31cu6DvPfNcsoVRTdVxMkRB6kUbCNQKDDzoNVLTFVvKZJMwT",
  "key36": "4NRSHVtRWWJs4E44qyPeQoJPJ41c9fwqEZSgQBH3P7rLdMaCu3yfwH6q7XcDt1DU4ih27cN2hsDjYR9jnAZkFQ4a"
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
