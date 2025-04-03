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
    "3taLumXG1tAvCmxALfVzvCcGrDjyeeSgzdz1GfairQqiSiNVLchoiAgnitmzLEUMe9KjpBTtSeaN6wWPzxmWWpsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqRNKBrXwUTa8xsoUffamQ95wuB3f8LTuMiBXAm68c9qX2ssfg7hLyBMPwbVmLXaJiGvCAzJiABMwJ3vTxdj5uX",
  "key1": "3yZfBZEGuTCV22S6PKZsx5W9SjBqcFcgCjVRFAQPj3YpuNTircFtVZnHdMSZq5jqprKoXQFhk9BytjhHTWaqRfgA",
  "key2": "Frqh574DDHppeo6FpbA4BGCxM8FjWdR44nkF8Kik9359r2coV4dFHcnjwSBmU68LwLj54H1EuoPWnLtj2YLe8de",
  "key3": "9uf7iFfBPYjeGEBFk5sFij6DMf1GSTDRheSAMdzwwKC7yhPBNMqvyng8X6vb13HsDunc4hAFzfQ1J2ob9RDhQtd",
  "key4": "59Wam7xaQ5KFwhx6br7qiDYXnkj5PdHbf3H2MqBYGAPffQUenjveEyJFPNfZCczjDiPjF3sXmvrsXkKcnSy4WfgU",
  "key5": "dBBCFaXCRSa5HUXAQyGTTuYbjPiPddBY8drd4Bq9oYa4PhMTYuzRpQvr93xv7T9g4XwsaiQ2LJ3LYDjC71s9fMG",
  "key6": "DtgzwBk8VkdvE4fyFJmiCrXib3j4Wxh6Kyg9XGUt5wg1mDGdxYrc7ZJpvqSiWofJNDSa1BkfPcWFZpcyFTtqzHk",
  "key7": "3ESk3VjHXvmYv5AR9Kvzgzjx1VC4mZMNnbG1h5cPmx13Q8DAAJD28imi2zQrwUAR3KjxQCCwFP6riD3Ce5BjVXdW",
  "key8": "bqyavnFcmbpU92m6BSPUVMmNsHBtyMv72vpCM5pLyVMP4jUKbsN6ameswex3SaiWC8ihRxbLBNWovyWWB8SFBSv",
  "key9": "54CuLhAgy15F412zwPAVa7HarQZbyYA1XBBtVMjTLvv4NfgcUhSxKX3HDPtg8JzqkgBmUDbdx4nR1kFU4puSEJdw",
  "key10": "3F34XZqPShM66UqcKpozf2xN8rUfTcLPivLdsmZcPqDwFdKxpBzPJCcXJ51zWgbaSLgPqZVwFwuja1BrypgX1fMf",
  "key11": "bommezAFx92Z8SrB1McYgrb9MFih9pG7uwuAi8bq2ndRZyCC87VvSjqLUQENMu6rhxqvrBgAuvPxLQJQXnKanTb",
  "key12": "2YFsMhjNKeFZv4FqByt7HxvDBhvJJosXBUtgB578d9LuwzyQUEkL85m2WNe1nNFkbPsGMVfvkQ3SoskaP5T95ATe",
  "key13": "2zMsaD1sUBWjetjY3NCCgKnD25yMZPVZv1YBqguHoXgVqEq49pWWSUgkqu9BBPu5F9uj5DCscpYCA68FXMMZrxF9",
  "key14": "2JGk4Nz5sFUVqP9buFfVAqA8LMay2TXs6xAFLwABymQWguk14ipgkJc73ehk3CwrgpDBdTccLNjxLMsYghh8fegZ",
  "key15": "aTuD38hYg7K8KWs7kgDfrM5rw4QurxH6kwefRKge3WK9qcrS9FudpTvXdm82NFXN46bZNj1vkrToYpkxuTHVBsU",
  "key16": "3VL5249pyLjQD71MKZMLmkuY6N3qBEQWx3tz4dVMLghqiNoNDJCzvWGmgMiWuVVjoLwfobztqbXdi1BPGyaTSrk8",
  "key17": "2uwJJp3NpNWrX9ELKcEb7qk6XMwijofwDEUTuT85dZKypQmxzkdkp1xbNSsh4Hdqfk7AXnFwMH7KPJyv3dpNNQ1a",
  "key18": "2r1HWm9ABHEKwAMxYD5tBoj5YuCtEbEHgecfErD46Q4UJBbuJeYqSHcpzu73Rg5MMmda9k5P6Vz8UbE6An36uRLi",
  "key19": "2ZQmFQQWV6xGztxbHGkxBRRoqbMiMpczHhzgLuXYrq2u4tBB54QZDkqSdPBXkL2FdYUBSraBo7L2Wy8yssUXwR7n",
  "key20": "4ydFxnVR8cSNTdCMTrL7q3rtQSQqVMRT53A6s2XHS9e8RKYJ4LGP24UTzTfW4tgW7pRuNNnx22UEaTbfmTLYNFAK",
  "key21": "2FGcQ13AJ6PW5qsremxDcVDmSgtTXz3ic7BfNj9EJPJa4Rj9ix3AUb1w2U3kzQZNgJuQK3v13HvHScuSrdEsMbyT",
  "key22": "3KyTF6bsiByXRip17RrDEhyrKw47iR7CXsgFmkxtKfrnaUwNuDLH65tYVQjqnFEKqKXPwRiQheCz1wegi82VB1WJ",
  "key23": "oPKPepS7kCQRACHmowo3tRQBbKSjQUNAsrFnAuxPjx5fds8naaXUEt2dC926frWzN8h3cHjwKKBNpatdVzdWnFs",
  "key24": "7khx1Tz5rzFowkFzfCYCjtJzFYkd9X4hYFiwsBExkLJrZqj74XpagL2Km67VNxnw9QBc2wDQVvFwP26No4PQHki",
  "key25": "5khhosUkQcQSqNfUk4V2Kx1WbQRQeArc1iwhLWs4VrhdZwmv5kAbiMdCtKre68DhCmYWHGXHgLCfCnpV5S9fyRhP"
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
