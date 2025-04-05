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
    "5TTqyHquWmiqCFfPs2zEPUmdXzTPaowwmyc1bio74c3pU5bENeQeXrhR63wDJ9coS6NE1vFdCYMkniHwaqdLAzkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6LjWwth5qaX6Z8FzehGgRfWzF8jFY2o6GCmpvHVErQ14eDQjw1hhzmVLYz2c4Kw8k1kimG5sC8n1NLMV16FTzgH",
  "key1": "1kYWE9qvE6jT2k85F65RcULwEpzBAa9nPEEuJzW1HKsVkDXjQi5zHTT9GP3bAz1qBPBMsZJMJr6avLhAtyYVGGk",
  "key2": "27xRDfttZCqiyTYfQrPTBt6HExsav9MzVbXWdfvGmBzDzyyTJb9KRnYPS8jdi3B4YW3tLhKZToVvvxJVa9f1yEsh",
  "key3": "2VFytPEuQcZs3rehbFsVinArrU1AiCfvUPQym3iTpFpkGg8m5PLv8AVQNoGBJ8kkNuousvGuWrBaE1jpy9FaoU2W",
  "key4": "4zm8hv95fwdYdzuKih4KveX7YoGMCKKbJrkyvujxh4oLBH4UfBwNQjcVXG9GnJpCKfhqcZTrJ3V2TmWWS6EGJAFC",
  "key5": "8dqwW546QFeEvXwvJuY7cX6TxS2GxPQY2TBCcdmJUmTSgvmuahXYZqQmZJHyanMxwqMeNBfQBDh5hTfSdSuhxeJ",
  "key6": "3PScSikT9Jr94kQ2KzUJnQcTgKfS4jE9EJAdes5ioMYo6DExhuG1a92Vzp2p6YviLFQ38FSi8aKnBG6kmsyXczCH",
  "key7": "5TtinLrnzyhFhKSxPqo7aKKLw7FwzKi7PJeaQ3rYjaNrwmBxmhU4s32qKNVeggRgjQvKVcJ6T5EAn9ciiQ3mjAoG",
  "key8": "3JGYhLFa8ZyRmzio1z7HBxgwbEk8vsEWqTAzqMGjbn2YmvbHvn3hnoE2L8QvLHAJ6mXVF8urW3gqyxDxz5d12bQN",
  "key9": "5Wjb55Kavbz8HdHXcVbPF9o4jjGtZZkTz5RRBeN8oBAoiaCdU6m4kbQgrAtMYBVYFMbHK6vDUNoQWUB59ZsAwxRy",
  "key10": "xJxWueNGSSqSoC1qYS8Esp6w1LLJjD7wMdFoo81o1tneXprF3RLLzoqtUfhYWMPdkD1TiuAs7gY6QRGrVC2Syp9",
  "key11": "32k3rGQz8z55QoAgCMpm7iady5jZTZzm59fYXmBs2SYbgyF2tpge6yBiaFjGJn8kVcmoguj8WajEXHVhEYvaFZfx",
  "key12": "5AuEus8MKqoV7AmVgUbMELA4bYDdYWSxQtkk8531MmM3mMytsjQqnaggo5bcCvGL3aeF3tupG4q4WLs5ajzerik",
  "key13": "5fBq5Jc51FwkRf4AeR5vQJsSrkLV4jzDZUbG3cAWsgrap4HMViRmnwHPmtUJYNqz8uNUjhQ77WCGRV8u8K4SYfbF",
  "key14": "aCdLVHAVz1QHDtkdaJcDDsx24nsj8NQzLPXSuqkNDPPGbE4TMGS7XhsJ6Y6fvPnGazJpzrZnHMRhJPQYtdcgsYD",
  "key15": "CPXLE1cLeaTbUu8NzMh7dMcxEJ9CrwATBdGi8Qa3mXrhVQhypGEELUtgZ644Cdde4HAFpbxPARa8iEt29AstMC9",
  "key16": "4JUCueedh36PnQRDpXBgEuxFNQNUW8RswWJPVydvL8DGBj5JmWFFSWFSX6SH9KikrWG9RicpyE5qw3FPpadhhKaB",
  "key17": "4HEmzbc9FDAxrUTgL856gUWmVnDpGdeufeb8HhYUMBdVin9t5objuJxZ4Tr2XwsL6wHn3R9S8HF8sUVsMG5VLdtJ",
  "key18": "4mi1fFSRMYAc1XephEz9TaiJJ3VxCLd7AvKLkKVzxtfUNYnxAV9u1c2fp5EGt3pvkW5Qq3VxWeYTPaDcAGmm1RzN",
  "key19": "sDyhpstrrNbZ75oGyvxopugqu4chrY2zf9HJAe3jh48WUHRmo4Gmr8nnMmNVQt4KxMiVCcWwfRDrWc1hVzP8Vkr",
  "key20": "3xszRxtMGNcZnFUg6iFvSKDFRqtNUBjJSYpvarDPxwZdqQ9z7bek28baSRUZTaj1CaF823uNDTCWsLVdyabh4pSp",
  "key21": "5VxXQFGtoMQhAxQ4YdEQehe4ZrXcbLJLTJsiirQf7b6wWPWu2MYErRW9XH4W9Sc8gfJNm9fJ2KLtCSfZkKhxsdj3",
  "key22": "5EQfWjkcPVZdqnP2AzZQdry6s29VhUtMY56ZUTMQEmTqTqQo8PQUJJjT9tAi213xfPtLSYESuJFHo7fFbZN2EpZ6",
  "key23": "5u4juwckDsyKG4MamyfZycoF6hv8qgb39CVSSugqiEUv5XDWdJSZaTfFDkQgGstHTrngDdG4dfiiWy6ELX5tdoP8",
  "key24": "vtbfin8r59jepsR2eQTYEQdGPncG3SKwM71mRDJrMxUASrPxno1ni6WnS7itj8WUXAKMeLvE9F2jLy2PEG8U2qE",
  "key25": "4LvRpFjxSzRs287QAosxA17PM9jZxAL5xzoNUbz5qP8wzXfinpTsfpjasri2KewiKMnfpBpAyREd8J9R56QJ2AAL",
  "key26": "JCfpYvugHbqB759peS749EwYvAudEuUumSTYyikLecniiADXQnpp6DkLozHGaogoqZ2oHPHCXE25iX6sLcgH31K",
  "key27": "4PNHdcxU5yQUPFd5Fw3RusMGUEBYPT2s7dsdf8MwbgkWtcozFeqqdNN4F4xfBeAkgxy9QhXAc9K88ftU5xUjxXSX",
  "key28": "2WkJajss6JXRUwnjo4ADyyCK9VzBwq1VZ2scTukJ4XhNmZQmSLZA9CbZ3Cu36hLBQAjsQcmR8t9kvz3grJwJGrZx"
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
