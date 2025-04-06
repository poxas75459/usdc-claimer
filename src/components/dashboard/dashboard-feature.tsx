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
    "28813PEf4CJmxmStepumYooTLK5RN4KdLf82DXxBHqTWuHM6oC3YnZNbpC3ukQK9MCQwzUgyJwEkWekSKqy2vX6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRhS8QAvawVA8hY8xxcFrStwzM9YhL5o7xFw4MJQYXpXptwjbBrTBUihkiAs5EQSHvpYsthhqqt7tvGuknpMbBX",
  "key1": "55vJF2TSNDkVNuhLMUzzszjo4mfroDPRKA4as4Ry5gqxEVJyg5WLvM6mZKEAdDNSP1vubRocikuj7APiJ8e9wQ4b",
  "key2": "2ZHTgv73DXhg1R4NaYBqAgDhDaQpid4fqh6JpwDPgoGmYF34cpe4xNf3SJsp4ZSFMrQbv2cwfC9jUy65ycFUP4JB",
  "key3": "5MkptTYWgtnz2dQK2zajfFwVRJ9mHEFzfQoaBk6uP6q4xUiaYLGZWtwaGV9MHqB9nvQqwrdkrqtGcAgoii6wo3sV",
  "key4": "4YqVgbjC8BkXKh6oMdNxtzDueGoMcW1npA62WaYkxrsSNLfQNW5YwdGRhXe6x2STmPM7ENscMYPM1wrisvjbdAfG",
  "key5": "42ZsmBpjrUmV8G3hfZsqQAC8FZRKVqnWWVaN52U9AUPdvVWN18KFXgCuHV9CXXTdLJsGL8A3NdzpVkytKbiY9X8J",
  "key6": "4Z3P49i2WTGrZKmyxhtK4MqWe9iFNghoob79NjT1eb4NonVz75BGqKW9NwRnp2aUbmndfhEoDoKW4fG9XrkeCH1K",
  "key7": "qNXUmLFgCtdwPHr4WiJq5FqyxPANSHBfcFmZrF8Tf7XBLQshWC8h8oSL5Q6wwGJMphRUYfLSRoQN4KsG9m2Sn6c",
  "key8": "66wxwsmauGGb3tTD9Zf1iXMQz1nnj4pYBRHpf5jXM3D9LUeMdEtGLSNPBEKNX8v9GHC2Vmb7MrimHvyah8UpeCVT",
  "key9": "26pQPmdMFT7Pa2A2rwkL4o2NyWu6s8U1fjfhKrs8RDeZH2VA2T1YvgR83wWzbYmQHXeTktMqty4UTrBaAue2KUZB",
  "key10": "3Fi5wcr5QDNdUR3RjL13hU1PueX1vpLfxGiSrJ29trXAfaBL9wV6Q5UsRMX28e1QkSuEuYYfSSjjuxhHyFRCcTAV",
  "key11": "eqFQp3ivZRJyeAbzJdZ7UpMJMNCMdDHQkh6HggPmkYUJJ4dDFdjWzuvgVoTrS92aMirud5MDwsFMKqJ9cVXfrFs",
  "key12": "aqVNH6o3z75M5Uta6uw5SNMcUCPTLwjbaJNquuaxFk5Pujs46uhMASRHUC8584WSk2PAnNwppkWmDRzoqWiu1GN",
  "key13": "DAm6G7PvA2PDimSMbUNpuytXX1GsrF48S6pwBFMmdbNb1AEDsQBap9cfFBcUqrTbWJz8aEDLnyNSZWYTpBLqsoZ",
  "key14": "3AeRjFpbAdptqViBMABVRjrZs9sE1HfXoKhPCXw4nGDTMvdHVUEirbY9FGWbzszjRuo5cQsAKqCzmTNc8NBY4FQu",
  "key15": "2WCA4kQE6kKNY1JdjwsuriLV8NB69y5mjD235sGqiUNvW1yY257Ja6FaHovTmpP4CcCRXzkchBzasHpoLZhkViD3",
  "key16": "wPBhm2EqyQtwnKVbUER2vPDAXKxyfXz2oNHiync8urSJGxmFwqqHXdyNYw2dsVx58vefdqjRhi1ZHaYTWV4iJEp",
  "key17": "3ADwhaFSPHnqJnqNbSQiy4UU12U4kcpZ5WPhz376VBZRBQgiQaA4Nr8euUEtxu3szpDCfEFPzxx1XnKziVnGxkV",
  "key18": "936KUiEFnLdc7egsAhb17eLCbtv2Q96VbwAAHfnKCwGkiuEZeYWYxLsg3oavJSGdNN4DnRsn11pBXCUNeSxWRUb",
  "key19": "2pc5E2PREVueUr3kgs9wuSG9ULGrTctbN82SohomHm6K2xCsMhFYp3oydxCu7SShwYQ6wwYmqNYNCEuRYG8ZArpT",
  "key20": "65KJk9qifFb1eqewkysmTg3hcXjNdCccS4h6pJGPPXufpd682XTrtEA6fGG8SbL3yF2JX4ycyj3dzZ9q9tKYkX1B",
  "key21": "57VT7pYSSNrSbXEtC6cFRPQuSRgmtm63ATWW68TayVdXCP1wXGY5nvn5f6qWiXtBzW2BUmdfJULvcMeXY4pvyZHW",
  "key22": "4gygJeviRGAoDievb61UaiVC7KyeyL3haKHk6BxCpZXTjKHhunob3ttCBxwDudghBUQCEAx5zmSi4zGQu5UqTUSF",
  "key23": "PQ7ekhbKtxctRvrTJS1z2XtyhxHTaSJCb3muEUtVQ9yT8ay6eAH7cktNTGVVyY7JABDvcuEeXRhL8Xci3g3qq5T",
  "key24": "5D5cEv5cWjMs3QdJcjVtN4XSWPgvDjD7n12awGAsHyY14Lwk4qic74i4Chbvgs51wy7gYJoaxuU2UG6Ww2UjkPCu"
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
