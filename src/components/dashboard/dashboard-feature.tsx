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
    "5BTPvMhUmzUpeHtCcBJzBtaWoSdfYAVyTnU9JXubCCmznPFTtJVXA3xsgTUS3qYZQPBDpE2PU7vSoqBHRm3Rrv8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gg4CVDyPLFv1gNbD2wcScPQX3csDowYh7w2ZzZERFamMGEKvBiufav8eENkprjuUby9JwRbvPaHTktjKYvGWSpG",
  "key1": "3goNrSNh6mWfEndwdBB8hQwBuFnHc5BqRrjtgiU2zqoyAMQqhfTvr3zJoiZtu6k5cwhaGde2nyjgfWReFpKwSyE6",
  "key2": "59ndhfrg38jWzXzwGMUJyVegSexiGKtQKVNTyihtsCx1s53LHKpnnmeAYwahNcjHawKNUiN3BhzUcxbgzfoqmvBk",
  "key3": "476vXPRKYbWn2yJVk2ZHRXKb7Vrpvzm9odECnZeJhMXm1JVAv9ob9GxFJ8NUYXGfYusvZoiz2qzNyG5gCziVv939",
  "key4": "2CCqZppihUywMpPTnBuyMWp57TmXgaZe9uCVexGyXPw3NeX9nhqZi3L6EH1Qi3xziXiCNLtdkyT1mFdXtdn8W8GX",
  "key5": "4H4kJwbn1rQpdPNmSo2J1H9VKfJ4TVThTuxuiAY9YGeyiKQfGj15u9VP5nEt3ASkLb3vCozMSRqqUuxUpM91Zv62",
  "key6": "ysJd4PYgvNUtwrY9pAQFsxYVRdLKMV2aax4BF4ZZv3HykYQoxCHPjikk7RxRsDYw67NwBreZ6SBJKdrimVgrxCk",
  "key7": "344L5hVxNfoUv2PgE2u41835K7xyNBf7btNBLM9ZMLZgFZ3zboRjUmFTrCQ7W5HBcotwESkxMGJcWJBzBb2qqyE",
  "key8": "2FsUJyjeeV2iKYzu9ji7RazpuUw9o8NsSrHsYMRZAW2yKP1RYbGHWCxyhfWWiXoRHjraR2kuv4twN16PLx5axq41",
  "key9": "2WZpnfjTr9L4WCrP5PW2LrpmHcU7f3o1RuzyyD5ke9cBoicda94nM68MHiqonw6BjBodZAPQyA2S8LWSYKXPLR31",
  "key10": "4hRJ2HRYRxfTojaW3txrHVgdF7dwZYzm2tNhgimnkzD739LrGhi9HDLZaxVdR1wmxEfT97JfysRnfBtVzc1d7vUr",
  "key11": "2hp92KdJaybBGsNczpA7Y7hc995kdrXXTM4AJmSg1Gsx6KuWX3agqJcTaiv7CZ95F4Sgng4vW1Y2mg2FBihNUhZg",
  "key12": "4jrVMQnnWsj3QXutJexhKh9WAKxTqrQmKsVbX2J6N7T6WgfympVtNiq5r6NUxgBWpeR8ZhtHA7vWcfarcdHZPuVP",
  "key13": "2exidaeeu1fqYS7h6ysz31AHxxaptN2sbykfx7hSq9mcdJozVuH5jC3rP6umXpXN1PQ6bR1Sy4jX4UKeJm8Nsdhv",
  "key14": "cuPBLmFGyqKB9kXJaDiggvsjndyMsngZUeaDSXNoMoy9sVcmtmXmrahoyerWBTxxn2AXhp8FGNBR1KThjEyUdeg",
  "key15": "5771JsR4zWSkJhW9wDeXfh7B8sTGAoAMXVxu4DvugEmJHV1BdRHdL3gKa1DAWrL5hR7adfodNRKnjvM1DA6ZNpoo",
  "key16": "2bjzEe2gFqQnj3Vf9LoiwWg8mAsESqQed8kzkmek4fGsEyK3EJamAtPbT3UnLu9CxdqkuNjVpXv4zPxYgM3HRCeo",
  "key17": "3sFpG9M72go5hjgsC8vUwjYWXYcLumzQZQJUHs5LfrWQh6h3LzCS8xjkhXGxEcN4mEAwgUw8RCZdxHEP2hPa9hqP",
  "key18": "33rGJssYHCvkAjGBvdpTLJzBuEaufnCQLYPpEzwEGa7pxkwDxGtU7fKhGp8vnVQmGNNjjw1zxvXq3ESkajoyLsTu",
  "key19": "5emxELzhWwtiSAhpWoAzq93p2WQdqmpamrLzR6zy6oF2PCAvwic43E71aZTvjP2jQtojXw9SpUczFmMjxr7WpMrm",
  "key20": "563GdbAnXb489yprCPUXEgHNWYL2UZZBu7YYjWJ2pZqTMtAToiKN6whJ9dh9kk8YTuxM983hFMTUBFwq4ErdYzMV",
  "key21": "3Xkv8fJgQcDRh4bVrGzszpCRUhxUqJpeQrtTneMiDidmfJPrL3Lsw1DwV7uqfaHLzmSXpQo82FUNwmuZ4VfyycaW",
  "key22": "XDnfLf5ifoBSQAeN8xFXUhcHJnwywvemW3M5FV8XyQXPuTiByhFSD7ETXevUFU515LXogB5igZ7Xqz7WT8qEy1G",
  "key23": "4n6SNC17t3nMELeej39nS4jbWcQtboUmPbRtoFGgXyA6zS1JBkgye8HULW3LjfJMCidYhmBZT8W69vmxUpF7PDVM",
  "key24": "4Az2SX4TcZMdnTXSWJt3oYTPPGwgFbm7ydqFKkGQq2unGsZ5UTavWNkefESEQmxYzy92xCWz4Aa7q15v7awmmkqB",
  "key25": "LEYR7LJ83nPuWnBhiCfrJNvpwj4CzgeYpXuWWubdcorcSZ2B3dvfXkfT4NygHC6HDU4evGRzKZWmLJgDnxb9Xv4"
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
