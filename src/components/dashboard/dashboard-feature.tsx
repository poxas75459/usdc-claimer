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
    "41ci8nXHm1ueGtoKYDpCPeAfs5JFeuL9zjSSQLHbuycTtJPbXUYHsWveKPW1Lz2hzvy3AwxE8oaAs5HuZNUJqJJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hceoCBRqa9Ni3Po4KJMv5xWBYHi4SS2ZBPuE2JVh3usybeN3hoL6s8eanCa9xQBWKWBijqdaLFercUkqQBackVb",
  "key1": "4KfFAFvw7XzvjurH6tt9CKnd48z7Z2SmoirADn2o5VHLhxWhpV3PTLhbVkrQVwn6CTcQ93xDPsVVXFdXu9hGbYoq",
  "key2": "2pw5mSDPNRhueSVhLJjUVCm6AacgqFpUptzFvbPN1n1muu8iiGbeLQy1ocSuRyQWdhAMZ1NRKX9LnfzXKb4n4pCs",
  "key3": "246edUZw9fqRLMhGoFFEYUkuysbRCUm3ZdDZWgEgXms8zAuFzTHoTJBVs5rnuKqrpumWnRmsqfCjKN1AAMzDGZo1",
  "key4": "2uHU5zawMXyuXU53zKDabNb6gWjMqCkEWaGP54ed4GwwSM5eX6Rcw27h4RaUoGFs6okHjHNQ4shdfCqLLttGc4Fc",
  "key5": "3C9T6kH3jNnEj1Qrk5mCi3e5SmjBP5idGwZMBLP7T2vg46Cw5jMErvc5St4mMJ6JUWUoq8VfP8ZxAj2WEAgJYZ3x",
  "key6": "2vXNeNKqLLbWfX5hvdhrkRUcYxvdWUqQvbRDzb9kJG5wzP3sVKX6vuDuQesHGu742HagQHXr8PhQEdTj77haj9JC",
  "key7": "2UftRmrg9q7Z8ePCxSeRTc98ALsbEPkuTKvWcWmahWRBoichyHZrsa9MuuQT6854pk3kJcqCMv3c5Gp9TX9Ti1Zy",
  "key8": "E1vp66ZpHXRmL4GvRLohjKvz7eMZ1evvdSZWuQamiZr8NSJC3xrQ7vGWMNMiMEYjJ9qpgdKWLLhdTpUzBrEjd4Z",
  "key9": "2F4PWtrzgyCvbkntbAEHcnw1heSvoQSXdxYPXSt4VoePpPfotP9npFTDsBUFZhhGh5Hv51iNUBtE7dkAij39Smto",
  "key10": "4hjmykEeJZ4Kv3YjXVtEGQqwNw6a4GMtrUrzvTQkGV6pdbSMCjKeUscz2VrQScQowtFrLh2CXUQ3HTbDDnqHeiP",
  "key11": "4FLQ5iof9iAwug9gGkmRcEMRekRFaA7kXr7ZkXUiqKmhxJJUzgQ8QGD24sd1TgvPnkRpQ1aWep2BDJ3UxBoY5ayE",
  "key12": "3Mn6PDtcpD9nn7WeBFKSnhQk4dXic9f4yw2sEF3qe2QZEZqi52YKPibBqJ4uLnpKKR2FG4jycPu5dKqocCfVUMrg",
  "key13": "49a8S2ubdVzYwxdJQFRWB8Hahu3arztMGvKAsGKPK2mWVzDrhyu6ozYAhWuhMmZAnb4pakh1QxQ4nJ5NNvhgwKg3",
  "key14": "2xRz4ZJpWQNb4o8nLznoMi9rHHa1cTj9cq6FiYrXUfUWhWpKGY7p6DHsAYPbbn3GSu5TARGMeSSmSFbYrNUxUCZo",
  "key15": "aLAJw7arADVSm2WR4WoHHZj6RFhSQkz4WHpKNjV8Bzftgy1MogQCVGMmur5EebfXy1bSTuDiY1QXwbGKhm262Bc",
  "key16": "2uCsd2MUo7x9ZRjt6A7rj976mtY7aDRoSTTXgae6CcJJQoRePg3nPnHhe5rWDihjF9QYoc6S58NHcRZZpzXt2cLc",
  "key17": "5hvPUPbhqbGpHyEzaynMiz62ydVE4bvgEJNQ4Ho5zmZ1cV89JHxLXwGz51jhYVR1Hwjy7wqobddSftbs61VmHQdG",
  "key18": "3bEsHqgEUTec8QuwuVkqVtk5jkphsoAc2vQ4dsHp22aQEPE7w2LUBYRyZfgU2vPhX5qw8AspDKxotPDEDBdrsKWb",
  "key19": "BsSuuk19TFdoFukPbz2Hp46M4i1szq4aiNMguo5oswf2JrKbBw9xqsQnn7UHXbge23NSUeE9ZGefKjkEcTLCPQ4",
  "key20": "3X27q1jG9KPHTxKLKCKkaoossdXjL7BddHRdJ5Lh2pUJs4mcisP3oqaDWsbA1nnQwkJ3RcRdN9CH9R2KCuXknGbp",
  "key21": "5VHooPXTFCZZEggWxQH8BJZqqp4Nffzd7i7edqUwfzSzMsxZtn8eXordmmgXdwKgPG5ntrsFRkHP5n1seRauYhaH",
  "key22": "3b4Yefkr9dCam88YAatbHFxnc7tVDRRw3ei857f5YnAg7R14wAuEYPN7fNkEfsrPikLBKWKeh5ggVju8kGmVoSki",
  "key23": "3nEgeY2SwGye1zECXQgQcxSQRKWSWZQQnYbKezTSyR8ZdEMqVrmQsC2Jjii96HiggRxNzjCPcVXvLShyioiVvLfZ",
  "key24": "3AjH4bBwawCpCVN6ebmdysWhqMGMA3D8R12vHTuXjGjQqyPqd9PTX5RKW1qD1GHerNDNTiJCgbYs7TgG97yARYg7"
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
