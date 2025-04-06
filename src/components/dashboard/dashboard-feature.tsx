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
    "2oKiBDNja2otcqEXVkFCJQJCpARnu4NTngxXombx9H8FkWf2HcXtXdqEZBoXpdd5AUNMg9rV4GW2ocFEZQ9X7LV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34yS1rijWh1c9c8oM8iFB1attrUy8LGc4r4xwaSSzr481PTS7pTfFMs3hgLX6wz7CbGkMFwcPpF5uZ2fGZB44VQe",
  "key1": "52hksZMnpEDAn7TbbNyuCP2ynbvsnEj3DWhCbMzcrgHCkrELJhcJhYVvqENcjJXTsRz2CAZk2r3AEyURsfDJRM4e",
  "key2": "5RZVEAjvpjcETCxAbordnzQvbrQbFCpNPDnsmhTurC4ZkuJZJZgsy3if6hYuvLSuab52rXb5EBYiAyaZFwPop7ow",
  "key3": "HQSTuGxuPZeBysNmS8TEufwgXVANzeytN9rTpHAsMLqB9KGqAExZupMFHKjhwDagLW635sccNc82H7rPKxn2mpi",
  "key4": "JWYCf1n6Qc2HPMd5Y17W5Jpvv16j5WNhicTwQJCgq3en8y4pStNkDhKGsvtkgpZbaD1k369RMBuXdTuXHB7S9EF",
  "key5": "6CcC8nQLMNXQynBZ4zxekiDgfESUzuboMQeNikYRQjfKCswquPXHS7S7KRtKiNrKcAemsBS5Yog4daaYaNLQXvz",
  "key6": "3o1PRgzzKFpe8GTPyCX14BeL8cBa64hqZNaeckP8eWZZkSqkHLMcHS1Utt84b6Nr99ZppDttjW2NRXQX3S1UmAur",
  "key7": "4DU9V6Fffx7uxHe8gmWY7nckf7BbzuJu4aLjCbkcbZmoutwJfKQNfzyRjVaoH6TXCc4sc1WkvWtbbxUiv4oh5x6i",
  "key8": "2QLZ7UGJrw4AwWToz2kncNjSYbGz7PnKeFZK4Ahv2THDkkns1EvkX2pyiGrbXqS4ukn4oK4BTYuWE8h9tawW4DzR",
  "key9": "5stwzqAPeJcMtnmTSXByyK4dWyHyyxCQPiwsYeM6gvGJQoP6cStmYJoZczFYYNF751tgVimE11HqBEWPJndvapY8",
  "key10": "2s2TsmXM7fVW75Re8SJ9npSuoHmiRZC8FoBVmfc93w6CWS9pxHBe61sNU5cvTve3QgqbsrizEqyVL73mSah3T84B",
  "key11": "4xL9DDGp6QAGA64upzhmZEFU6QyFhxGDPC11mfTzwkcXjxmK6LzW8E27FWQfuxxX4EfbnMKRzdzy73TbeB9ZVM5x",
  "key12": "3w6BySpPBDTYdJmG4ihSoQzGZrBuRVCzCvNjbvGiJXPoFAwraXmDMKkaeWcLfmkRx8KynA7Bg7aEjpoSm4i2resH",
  "key13": "4ZsPyeZGJ8aWE4dDfp8ByaFvXAgrtt4zBUpJSLVqKCFRjNKWUXkYWtrHScH5GAaukHpfQ9aEf5H4qyVetgqphBFJ",
  "key14": "4u4gdQk2y3QpXX9NeuedXp6QtE3c5EA8k3AJUymqsuiadX23SnKkFGnGMsv4RKY3PHScNpMqpGvqvJ6vJMnmMfED",
  "key15": "3sJSz7Fg2DAxveuxUKc3jvzuSB4dvqd6zDcyjC4tbzCerdQ5ge4AdxmKPS8XCt7vZyHpuz8SPgaxLJPuaB73mKHC",
  "key16": "31VD6uAsRveEPJSPJnigj1yUf5V7Z2DZjcN5zXjoHveSnhqMRULeX1TGTihjAnaMFsvm3s1UCaBQq2gyyxLXFKVg",
  "key17": "2PcMvY8xgzQwzAD4QDUutHNV1Worz9q4ERhp2mWVixZbTx4Vk34VW4E4HaE2WPihM59D3zvZ2WB2EtAGp5pUuAQx",
  "key18": "GKagkrA6yTfVwNJPW8D6r7Tv15E84uMEsv6Ev8okDeE3Zv3DaamvWQZJujcKpoX87dZGPemr3mZhCs5wRe4vsRf",
  "key19": "2SSbRSWcb84r8rVUhdYqDVe1FEBViCa9MavytFQqYRPZ6gSDyAdBbZBAeQRWUSCrAU7Nim6dhHepM9VVFzXaNGsq",
  "key20": "2UZcTHA2Mroygt4HPWXCBsadhQM9nP1M4MW1zGAABLRTqjBQwcT7SVsc5Fb5FDYYDdyKL8cBU47NaLwNqb2LRYRW",
  "key21": "JKV3vamsopAJjGAQDDgG19nYQ35ofERDE3KGqehepZbT7TD2X14i9C46iXgvFnWNunkhQtGnJoLkCq6UTu2zxWU",
  "key22": "3GYjKeNTYTQTMpeqK9S7ACHKdD8UugZxKu3ksg8UASpFzrrhPQTE6qwJCSY9jryNJt1pWqEQSActPgvyuaRXmhMX",
  "key23": "3F7qB7ntiQgitASLLFUK9QJYW6jvMH2ASynrr7perKENR4Bi4UsyP9JJybHqBfSGC6ZKy2fy7bGLQ3wHUcdmQHRa",
  "key24": "4qJnUqznLzZskz2PRoiRU4VE7UCgH7HA4EjMhbSphbrNbAy8T49ewg6NRhNs8yPsxTxh4Ebg5KvCxbQAJEK6EqgB",
  "key25": "4KdcX9wXr1jmgLZgUBP1syersTQ2YdmSHy6Zm2j9GTz84ZEd9nwwcawsodN5HZPqQ1i2Grz1u62KPGrbcPMKhx8n",
  "key26": "2Z2V5oirBPDiGGhDW8J7ZVPhvk8QGpZNqUGihSbdcJbZX7YFwraJXQPi85Pk75LN1PJUtzgMykFGqXUGv5sY3635",
  "key27": "3kfBaSkX9eKXUqdMKn8pUU9hJ2Cfmui2JFecpSc5b77qSf4jVfeHR5sTNc376zoswW9zNdaQ7k68ev8DcYZteH45"
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
