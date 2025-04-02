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
    "4JnP7gpqEV9iJ7jxkSNrrWRwLZe2MXv7HUrcDD8YCXooZ5qy5Fdcd2oXbqJv4xASRM2vdx6D2f5omB3snor2p8sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FXch1LV2vtKfW33oRgXRZiU3WNN3K32zeJYhtpECNEV2jYGVvLBt1iAwcfDsqa8rVRdi4E9QncBhJiPYJM9HwF",
  "key1": "4f5o2e1RtfrBbH7DWeFsF4x4tnyZusNeHkPf9go33C1EbHsvBcdCXQk76DeAKuNJYnZ19ogRBtvdfib6VMeUTE3q",
  "key2": "wtmf9toQFBfY23tPK6XGzAAAhEGin2b5Yjp2SZhQkEc73D7AZi7Evqh24tngfS932bJwkpcYsz9LGP784gZs3eJ",
  "key3": "2hXnBHey5h723v136qhwn472MEpqi83yuGEoA3T3GL2HDwUehNZRvtjqsY9zy5J6vJNVTGAh1e5wT3ytfQLodTW",
  "key4": "3cjgKhuzxpNyGCUxtS1bdvSz4VyxyrVXvXzHG18tQZgpwj9wkgsjdtTe1KGgPxTpr4ZUy8CZ3tfvbK9vQZkeRYe3",
  "key5": "4zTgX25Hb8otnfSmCwqmyvDevjRMFgA2nhMc7Nt5tLUaD4z3ujw2YKyXV5yXJbrUr2GYPeoxz9Cmgm2vR7V7Meij",
  "key6": "3B6DSnyhdcZdfKwqC3Hxup7Cczv1CyGejEexKHZurS2Ux3CQCF16G9wA1kCCK9wZ2RM8ad4Js61kKAJwv8GDRKnB",
  "key7": "2fPN9PsQCWPAxohSSy8NCCoLKgNdCjePRCNYcu4JQp8QS5QsGpf7ReVMG1zSJpCe7J53RicYKZjE1CCyTFjWioGh",
  "key8": "3tneV8neMdD7vfECiBqrQ4LytSJMjrAeTVBjWWPFNhYdHwtKCKXZmrEJPn3iHkTWbzPQpnaqGHgibWZHsDr1hKqE",
  "key9": "29E4NLUiKSo8GhSfKuXyCnHAv4ZPqAeY6FpQac3mu6szsf41NV3tBiYpw6R2gsugaaGuCRxRA9VRHo5rqkuU96Gw",
  "key10": "4xKixg9k5MjyRF4oE4aPVAjXkMCfHJom2woKiALZVK3RHApMWJi9xC8bbJE6GsTCsFU5bt73ujyEJP7ko7SL877g",
  "key11": "35EpXhew6zUM7ihTJyqPVBkgv2ZRMqWWpaFfXu1zM6ycq9hDeqaWj4366oYaps3nBmN2sHdvD4DCgQyhYL4ssiW6",
  "key12": "5hspCp8NHK8EsQuDMJ6g5va9fx8tZWiFLfxqujErkWaCZb7jLhU2Lyganyz4jrtc4w65z7cHMzWM8HzXNqb5HVVj",
  "key13": "5yZ3dekjapwoNLCAkNL9svXaQ1k6ksFyDmEcZMzwLWV4KepsHwFfDgH9fiMj5dyGcGviiUnV9jNhGq9GeHx7itMJ",
  "key14": "24nRPSRH8H7nL1iuXrfg9HkThUgXhtghZuZcpp2uGKVxn7G5cYzX6qW57K4RaK7SewaBBYqkWBaLLDVFvXTTRGEU",
  "key15": "3szYusyombpro5E5KE4LZXQg3DEVQuEVUnmwS7Aw8BJj1ejeicvejai5BerQ4zJeAuy1e6dojj26FzWfqvvgBvdE",
  "key16": "2Bk8BDywS1YmiBnd3qxgwj9m5eR6upKGt96CvYcAwZNqgTCrwpW8ijxvtYMegEnEcrK59w6H3Zpj7EBCWxyd3GdU",
  "key17": "2Nz2S3EpbgQR2ksMa25G6REGTeMSEFPZDRkoUnrSS42vfHhga1P3z6bV6y7yQsJQM16PAwrAZQ6zWpaeLQgWWrbs",
  "key18": "2EtVdNnGJPTeAr6RyNCUuLarsJZG1wrHnT7N4qSvh4RRUfegiE1MkXEpczRscsZEAxDr4uvriRzP6BJm3Kz9UqPZ",
  "key19": "57VrtPRhnpLHsGJcwNXEfyVcq1d3cvwWuxh6oK413hRUMMW7jBBunhTciWQUymivPYSUG1ExcCzJVkoGVB6huAi7",
  "key20": "qDEp8XGJAwKhpBxNCHFJ8D7wYFrkux78Gej9EA7RLDauTyw6boim3ybrASsCGQiCgM1e6zCf7WaNMQj8Put3J1x",
  "key21": "57KTBqYKRR3dGT6nbfMvbS7FckjuK4dZsqvHAt7aZ4828BFE4ZVpnCz8iFZCFbHbAtPd3C2HXSgsoxqUevRuLswE",
  "key22": "3a7RSBUkqPNiKZxdQmxgDKPPW4cgMeKhNYayKXPXrW8eY1HBETQ6KXhGActgwL2pmQK4whFNzVUgubxcWXVhJHAF",
  "key23": "3c5pnLbbYjqfs9o2U2tvsCnxCRnwcv2zHKjG1VFaZZppj3mHi3xQ8wSivonm7XzTxGGYeMtNeJpvAnR2AeHigshF",
  "key24": "4mQDqXuBha1xZeGZqDGXGGaz2XNr1WcWDM5HKfHPPnzmj9SQwMgnt3nvPEeWhihsRkdBTqK5bJcN1DdJ7yD3iRVL",
  "key25": "4EpKHPArgTq9bLRyYhDttAKDvQqjMVfPkaCNuiXMAV5RTQmLUPk2FtvSFi1QaCeaqdrrkWDJP9QxKxX2YKu14Mkn",
  "key26": "2uSGjtcCUhBC1FvWKkLYqSY8VEk71dg6tyYBWVhQmCY1ndx49dCBzsqAS3JMkrzDdY2heK8NDGb1v46HETd7TEmd",
  "key27": "5ycq6JFxcUh92kGzjccArFAHxGbFzk9ni66RRMbNyyYjVi4YFEnRBRx6cuKJBAcX52ozEXkmM7V8UUdEQqux3XY9",
  "key28": "3CjWvoZ9VmvY7MNuFZ59jRxYZAH3w2Z56UoihVZ5bRHEYw9eZWzCRnXaLgTETLZdVB7ip3CRMZL5Pcj74FoRmGsm",
  "key29": "3PRfXksN5vs8FgBcHxfJzJxDgDGW5XfD39MsvagKfxLM5V6GqVjhD4vSYaAgPFuBKZ11BSfXmLgdT5JopEreRvej",
  "key30": "21AwM4h8cgbP9caqB3uYUmMBDNrHVtv99nPBdZGD4FZcd4LzNY3Z1cMnTeW5PnGPAsi6wXKsGVw8rFrbtYEgh2xZ"
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
