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
    "kxpvEZa39wCrxF865HSuwydvmd4ffPhZxdNDws22ok7JGkzqNRuk76GFr9n38mqu2xt5op2SRqx2dLK8FLLqvaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpdBVnW7mWjBnisHnkecqFcjhBUXax9Wux1LoNYNamPdkt11Pjty8mYwjunAnrhzavqo22BeHeGMhQ1mo9xD56N",
  "key1": "2APJZs9s3QA9cDuD997z3pFxeQ9mQj1x7mvbuALF9qbkxpesrm7y8yTsyC8WZHRifSW9QnkhLzt6jSJvTt2ndVXA",
  "key2": "5BRWhLGebCzvuqaNBJLytSKTcgiYvkTYtPmGTHU99NhJgRy8peCM1Y4sG3KJqQUQP2qNWwwiwnS3bXEZVn8WUDyD",
  "key3": "3HjaEgKFHdKfzFvPDYp5sqc7HcEphX3iURvg8o612wbtoJLyqmAe4FnWyxUeSLLbvzYXq5R4CKjMALnQPYi7VRtc",
  "key4": "3WUDwfZTTfvKoUaMWjoRAw8P5iDLq7epE5YwUebanWqf4wNu7pGiWycdixTdW9Bt9EcseWYRfwyVxKzXAJuAejid",
  "key5": "3VP9iAUigrJCSXqgdf2QcSSv2euCNgPZMn7J2teMTP8wnrfH7ivRqT9FAYexSXHsutCLJonMzFCSfSCrGWVaHYYk",
  "key6": "4rBz7X7TTFt8yLgW8HwpZmS2gyQo1PHMCL4DEW9DTVjBqFTRobXjNjL29PhD83Bfg2BNrDJYmAXogRdvH5nUAbe5",
  "key7": "5PNvhWrLJmtJ1T2p8W5k1FPexqE6PASqn3xAnYM3naqDtBaPuGV2G2BnpVpL1uEf9uXJN7FL7mV84MoVRikiToXn",
  "key8": "2HFjbQw3N6J5YBkHUvyNiEeuEAP9F3CpR3dyjrANTRGG4m5sVkv2tCFxWV1ytvnWQ8nV3xqKgB76rJSGjkVUSLrX",
  "key9": "3VamDaxoNisJKwcvbM2kPVXG9zsAMQ8j1vDv1Cw5WrNCeBWcD8r1PL77LPB4dLfky8MPkrPed2XFy5QVZU4sEc1m",
  "key10": "33mZmrMhgwhsWPXq915ofSYNzDoqnPxYBZWgAPhrywAdeHrbc5eJr8V19KjZi8FFYixFFLRYGUePPxBMK5PMVeqR",
  "key11": "51c5YvkMzTGva1fNQ9Wia4iXQJveMJwFxGdN9sHCsw1XMedViSxm3afHDKQCuHHvJ7QmUuizpNe2qmQwZMt59CYV",
  "key12": "25zjrRy5ZTfgK6NH1UthcwVtNJtyT1HuBZR1cHCMitAqaioMwBSYf35TG8yGzdnAYhPN1kP1FS8SrggR9k2hRPjc",
  "key13": "4cUx2une7BXd1gBgKVmT5WG3VSoqnuPohbsGGvXuM3rthVajMsFDtBZUars8A9Ya14mVpXqM9CnLoFs9TzuKPm5n",
  "key14": "2N2yJJ5wpeYATF3rP6dfiKMV5XRihmEMMEpH5QZ6StLcwDXVqiq7pUQF8XAEo2dYpJ2anP1vENWApsqYTx5dtbzY",
  "key15": "3GaD2zeThAyDknrJAFMi6hoUV7DcW3AUL9QhRqLnTFNPHLojRzWCxKcHZfFhWw5vTWcN8mT5UHYwwGNDyLkTKn8y",
  "key16": "2qi3p7wWdFdSts4gVmnHerVzSguuwWsqgcYVb5kERBXDGwpLWc6t3XidxB9jBzTVqVgfcQMBUGkHFAzLW8JaD5Jt",
  "key17": "kSjjVt7S53egXjfsfXtxgaQFK6fon7c51rjHZzYA8eRsVprb6M8h9gBxLkubtcvg2uz54hr4JambqSA8yMvnwLQ",
  "key18": "229iwzBi3awyYwChtvRSKXJcJ94g1VAAtDbTy7HERMQNRQfUXrY5oYBGmRp6nuapD8g8HS9ghbC1otu6CW8JU8e5",
  "key19": "3p5LFNwQTDuZYJHZ2cRiQ7UDpCDnS8BrCAH9PBv7espGvyNWjEbWmaN3UKWzWURUQwGgrpKnVY6DtEGBiojKyXKq",
  "key20": "2AHTH4PAMQdPqfZUA3P7mirZ59ds7CEWn1G7arpRHzf3A5iuVZGRK3hfbRVL9K7UDvYx1NrMrrE2Bs5DxcJ3s5bw",
  "key21": "4WkaPp7zevqyEsTM1jYA9p1fUYcA4BWS7JiFSTNVrQscHymnnNrwGshpaj1pEqGcq2DXFT3qU1RRbPZSx2N8FQ4i",
  "key22": "XdGsQJz2TJgimfrSZ9jj2oomVEu3JFw6zN1i1ikDEpFaawb1u9KqLfzNUqSXTDDVWhZ1uVG4xyEeBJi6W2o8XbG",
  "key23": "5yAdsFWkSfXvtkJnhFrY64oRBzdcxdcUFcpDW3aHuGPoBzrSzFYKfxaosQFiR38N5aLk5fngdoAyUfRuePArAygD",
  "key24": "54E3HYrii8vv74FqHNiew4rNpPQJ8hT3H4vihU26i6jwG5yNRi51b4MBPQhjfJBbnECshUAoPbNneTUjt7RCNPez",
  "key25": "3hstKBDE5T2WpQofwYLqWcCdYqRLUuXnNVgq9AS59pyxFRXMR93qFcFPWA4fgAJ1ucAeh5m4nm6owQS1WtReUAwD",
  "key26": "52ZTEN7etb5H8uYDXDHiwLLeJCSYTQftSTwv5cps1LbMBNk1sFnyfAbzDeZWuf1N33WH78XbQe1w5vfF66jZu5oy",
  "key27": "SGA7BCZ79KW5GxppqrMd4tQjuktyVbXCGqdUytdDgZFuRAvReXwnz3ksav4gWRzzN7AHCjpBRjUqSpJdT2qW8Cv",
  "key28": "5aYdzZAnuWd9Wdvj7dZi4hU7d2jRzJV8uoRqKKkCKUpszSjQcrWzaaqNoKPsBwdJRy31ku7wgDpnzSyKk1tmt9iA",
  "key29": "zpHEKZXcSFYN7dS6RCwaoRCmKgHfmjUxCknFtVPsbi9w46ZRoy9fRc67XnjFsh4JKstXZoquddNymJrJsqCPVQX",
  "key30": "3sotpZyBAsKWLvMfMdqAfQymjo3h1tV1uCsbMYXwXHm6xQSFXH8svUW6iCSLf3t7znBN4CApfnMNL1NnC6RC2tJG",
  "key31": "42PtPZ8xAVSsMZQCcWKwun4uEEznCpWe94i2QLzvGJ1QxCgACU6SRkbWc8bBfGUPcoTDQLTFofqepgsTe1MfqEsP",
  "key32": "2TxWmmnmaLPFxACbgm9Km6BpmnsYi6yBytcNQbxpwP9XCeirVJYKTbd841KKYqCixKAoiFBur12AnJip1UuLGyou",
  "key33": "5SnqF7cGGgWEBdbQVu3SkZwhMTYMTXN4pMwnvuViWuVq97umVUu2s8SkYVvkH4qoZxVmQnqvsRURR4Ec87MUxRb3",
  "key34": "2raw1paS8m4FFCbnFxGGq1KbVxENkAGhDMPJY6CX8UU5rTdtQf5RDqoACCa7YQs9YK7YhKY1U7vcPdNDsvWqAAUv",
  "key35": "57Tf3fm4fxr7QLU9FcaLk6TadtRbdc9VnYqeWH2ijWYdE56y53utmmqmcve7Ldwr5h4JHadeTZw6EBDZMVPrqApi",
  "key36": "x1PN8amyswpyPJ2SvKKGSoRpaUycmkjq8cecjPkAk66Fv28hqZRquFeN5Tv9f65Ad3NdrYyLRPSMsQof29smmRo",
  "key37": "4qMKHqHe9Q9V9pCkm4XrwUvE57Cr5zy5NPRFUxcMjP5mCavxdBbWxtrqsXfLML4Yqk2hkuQNmvGDazb1T6Vfmc2c",
  "key38": "4WkJB7nYJAxFE8ywDi1cCpZyWM9gNEWsyQYPZWT1yxVrWcGc71U7MmZAkC3iJhJ6tSZidywFkYrrKwhjFRmGvgVv"
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
