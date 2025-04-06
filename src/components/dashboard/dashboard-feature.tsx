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
    "mrvyF789zJGpQHP4cznC9tRXnZ9W7Zg9PFQx1knG8heYDa4HaCpowSfdkYQXdwdEgfzJxKzfLxfMBGFurpLdaXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2vUCfeDnbMTnJr7ey9S9oAB7pHQL4FiBskUjWgqV3aZKrwUESAosK3cr61JoiUp3NSmdhzv53TAqp3Fcc7Q95G",
  "key1": "59PuykuteYshf7Qv91zujDwuHtcWe4TuPyJwpqAEMqHQT3hJNSoGaGjsMUpfF6mSNmRj6MvSe7XaVPja52DCxvzd",
  "key2": "4hHy67y6EABzYBtUvna4kdft3xXqJhB7dNSrnbBhk2bWwg2wMnFtF3B2oeQ32oSxSn4kq6XqzBEmX4NCG6a8idYi",
  "key3": "7NWH6EVV7pSqt55UErzqtdatZqEsvFwMQ2YczZ5fijs2yR5S2Zfhx9UZveAbb3B2RVA6sg15iSkzzJNzjeEVuz6",
  "key4": "xq9j9Lo75352Xt2S1nZK11EFExFdBJshNechEahrqroN7dku2RztAwYcP2kDZo3DGzU25vqg6cPeV4oNBcDZt6N",
  "key5": "4DvyG489JkkmcNdwNyJWKWHsYNLr7BC94r5YYJR4BAWEmRF83UtkEyfcSkWi8tPmDozbpxnERU6ADjfkdUGtzfCL",
  "key6": "5CR1NHjKuwx6hSgGZLaexg6VpB7f6qhCMeFt2EcNUEmcuEft37W9y48vjzeW3S888vjiU3Sui6FSG3ZiwSzeMwTz",
  "key7": "57LJa7uTRJbuMk6hskLEWeX1jrdoY7CBU6n1LkzqD1eNMYMTuyKhM83Wc2ZEY56mMRsaZ6n7VhMBiFyKx26ZAQPk",
  "key8": "zbCnnhhqcMpyMJqFjxZxKv32aZvQHVvQCwpiYh1gaTaKDC9iaRUoJBNeBqHWFku63qFrk14noDLBRB5A1M9Kx1y",
  "key9": "4H9Zu36sq2XCzKEiULfvEYYvDy1qbCENYmNDjeiN7aZwgferPYRbEFzVVes6VCZppHz4eVpw5XtyRMQQnnWwgYaZ",
  "key10": "5jPL7s11aR6rFiAdFf92TZQh1beSRoEWP3CAPXXnFg7tyFqfNoUaySWi2ZAsscy5wgJ4PGS7T4SmMEKVvzksK8tn",
  "key11": "2xzd8yhjyr515Vzb7sUPcA3WDB8wSCmKQKqUUrTf8JqNniFFHjidBot1XmDdiwvxS7Wmp74pQzt3eSWUPeMDWex8",
  "key12": "2fHY7RCZDHPpeTPjKLt3HJUQjQFfpzeznABTH5VaTbChkU7QfPmnnzEQCeMnFYcZB1LibfkPZQ8g5V2nWY3o6ezz",
  "key13": "34sUtignrcwsTzsQD3tCb4MQPaEiWgxFkFYws4EXN5yAnNLa6JhquK4eSFAwxVuvEHcQzX7EwFJsev2UxoRQgFGq",
  "key14": "5LjsdFDCt4k5Y5A7WykohgxLutWuPzoj2NtmfpAEUUEavzrZcjTycSa28rUnLuY8gGpo3wMpqMd7FkhaLrRX8ZNR",
  "key15": "ZMcaH917mg6o4Cc6TY1ibS8jrryZnRyd5Z1KZQuyuh8qmiPxMnUgwSJrH1UvFYgm8WzjpB5Y3F6C39hquaG6QzX",
  "key16": "2jayvessxJRe9XrfFXRj4DXeecubic1L7FX7p9DJy4wm4qdQ57o9zYyNW9HNMGcJXHycAdFcN6f1VfzYEXn5JsoR",
  "key17": "eSTqM6ijodocFn94UozqakjdqGJ7AKTU9b6BGiBqNjyRTwTSDuoHTiCadMXbJHdffnHM7NRfamf3mnxZCdArAT4",
  "key18": "3CUEZUMDqpdbq7UNnSkEC3oo5aNvwGw6iDojks9TzobyXd7qkh87TybZcXb3Jh9Ug1TWeqUAuoUZN9tSK3UDA6q9",
  "key19": "3ZToCV6m3Yf9yvsBFEwY7iM6Np2hoojFPyYVdi3CygTTTJrGUisusFro6oMgiTvW36TEf8sRPk5YHWLXpptVaPqk",
  "key20": "4ru7ZmCtddhEHbbEGon1ANcjV5tJF97NjAbrbdnDYK3FdmLR62HySauGc8AGrLXWgN6KQJk2UP93peT5cdpm9K8i",
  "key21": "3sdWrPbfbbjQM1CLuJybdNvib6LMctrPEsWd5qCyYbH6nxTDGUVeAz8GQuX7vbAWQDRKVJAJL2wNr4RFEg9pVVCz",
  "key22": "66ixWoV3dTSv6Va8dVBT7PMXA9M7vuHaZ6bLkrs5VmodB623chWYywz9DirCkg9U9LQp1fWYhibtJp7Zv4UCHnZT",
  "key23": "4FJpcvirztnT3ZTNNkYRQcMjdCVV3FH7ywJcGPET7rr2LMaLNsuf8RLWLzFkRDZD9shMuuJAFNsMfE8XekeN5U3e",
  "key24": "2qsARZPmrUzRL9uYbBo3JZ6n8Cj9KVJpda6EQgpNy5H1uVVRdqPG2MDNvt8Tmvu65vEHCK3Mk8v45DAJGzy3SkR5",
  "key25": "4acaHkAWAawET1FRsZr6gs1YtaG1aKfuqKi8ZV2Jwt1EcXQJ4NLAT8CHvgcTPFKUNKBf3Ryu9rG3gAe7mQgP8cZ",
  "key26": "2hCCvj3pQ9uUPXQGaxNgfch3MfqAwMzanTQN5nHyWxVx3LdbFApTNExBMyPmTNqbB7QmKvThFgQyARmJK14NsTvA",
  "key27": "4MkNDJU8y72ZCs27ZMvMfRZTY9SMWPAP4MwC17143KTDfQufztRbqiHmbFe4w1FtBXLuZTEqbhmvPXGx7bF4SEKj"
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
