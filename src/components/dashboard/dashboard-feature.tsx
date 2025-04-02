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
    "37K4tcqMS4awcPYyFEgnyBaNaH1zk3WNLmVDEggM3DjPVMeshEbhuBqh2cTCiojiVrhgNvECk4vSEYdxvPDWZwdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gz3ZzwB47aUxHrFhzFJKNzHWDmMQJiFJTrpipsvnZJJUbKMPqmZ5xbo8weVaaThaetCr75cXFXRa1Koy8MWEieJ",
  "key1": "53U3PQPXTi76s9jdeyjTtXV1s1FahpEVFUCse1yC6DMAaVM3Zuv5aBfEKvTYbx6BHoWt5tcNUBkekZFTZuS6RfXL",
  "key2": "36gW4QTygDjA45m1sHMJcWazJEktQqcFHFm2PCUmQYh3RR5DPvskmq8XjtQjkzoHAzZLh9SnpsKpKvwHYNyARn3e",
  "key3": "5eDhvFGL1v9nnN66BLpKN6YKwEEb6ehuYcRi66vFZ1jKgpGTKFqUxYC26QVwc7oqzyDZe5MwaRKxBVKGGCWvMrDr",
  "key4": "2DrqZw5FoAqxWPndxavhTAXKcyCtrwPNdk7E6Ea3FQyZhXfCw7PvXQAkyDFcPmvF6Ayw2o2nt6eyY6CJ4g4zVAAD",
  "key5": "5tR7JGAGLd3fjFHyBzHFAFYjQpXqhR2YaNABvJrRXRYz59GYT2FQx9fj3ja2s6wyAmdXKxiAogSowsVrNtyFDHKG",
  "key6": "5cAqBV2k6s4Cj6PAYe6Xc9Z4fBR4xbhLMMpF9njqh4j1ZkxnU6jPhvvxufEaxQLABArg5nmCLn9CZsXNXWUySTAu",
  "key7": "5o7R4Q2H8Kbig1bdkkZ9dbTaieJmZhujMA7XGeRt4Uk7Kn5PjejZieEkZQiRTjnvTFpu5rtECr4sMSrWzL46cfxv",
  "key8": "MNYpy9zgKBzfyGxTvSK4gPtumykGNiBiDxheBU7hC1ckUuBC2Cd1gejwPLkKQRjjo7S3nnGRm6MRGZjWHYekowU",
  "key9": "5PrBKLhWZbsfQSbwF6Z9M2XLt8dizybpX6FnzhhXyWWzAky5vTsPnLhA9m3fVqhtNxxrQwXQGMD8epqkczfQzudM",
  "key10": "4wCGreqtt6sDKPaL1TaNqpfgNz9RzA62wZWxjFNcZTtPqnmfmBqfg7fTC24iqeo2LbDbXa8AU7ZmukzT5MMHnvEv",
  "key11": "4q18B2gFroshh7MvtYJKgVVdyHLVkFcFfVGsiDiiYYYC5QTcU5aSU7scM81KH9kxkBEwq84EyBnFNqWdUbR4NJpW",
  "key12": "3m6nsWod3XNAyqJyPuHxj1WmvNtnkHavmarjY3uWbYf39BuRZtrum3Hf5LpMybEDxPw1ZpU1VvBhXNwadsJiuwMm",
  "key13": "3KfAqF8jdFGN8aw5nv4Z9vpAYGj2jXku8gJYXBAMPQUurBhU1KVCYjHhsFh3ZxV53HuV5FGZ2BXAugWHAvGhG9yc",
  "key14": "5rGz5T53635LNhmY5pRymSuVrSGtuHE1Jen3dCnJAfECHeyZA5LjBB8G9j7nGs1q7AZ3Us4wHewz2uJG347NfVhq",
  "key15": "5JtbfHSqxTXFAg4QgSS5goaT4fbTGMzFY2eeqKKpwSdgBqzYqSKgjKCuF1RDbLsE5tpG4aBmuBFxZh2KdQArVrZQ",
  "key16": "27kEDtd8Mh2Jcfp3bJkGEa1TR8PxB1S3pNuvW6hUWgvjgwmcSWv1BUtdyddSTVyHbiSy5gL1Yn8TNRVP3DSYJF3c",
  "key17": "4iVhp34kftZkijVcFJXpLc4Uok8BrnSDwexPR9qA9ApJVxxCpnHxQvisjLa2oVRaLZfQ4MQ8TS6rvQBABZUfZq7t",
  "key18": "4ZJTqitwhMgDr9hZP58XZFjCK1ziEdprZNUoxbTkSdi5MukS9KEqi1DG1Jworq3FDKNgXsMV8WG8qnAYtgW8wp8o",
  "key19": "4mGUXwdEjzHHEHzBrkvTstXbr5AAaNv3kW4VE7gyg11dBnna6cdt8BkyqYNuTanrbXTCqqsaTih3Qe44vW2HfHEN",
  "key20": "4LQboYPB5Pb9JLhkKXeJPfMf6Ai9v2mLMpLASHzWRYyLgRXopWyF4UKs2ZCyP8YampDq91KyorjtNotW775Vv8GT",
  "key21": "5gcZxvZGSA7QuqLPWQbXR7shR22GDEnHxMVznRYcFeTmLwGjgZsXz7whw1GASgAtvDPn7vSg3mHPdpaPQVeqMUir",
  "key22": "3KiXBmKANQn6g8VexhgMbfBXGCMvyEHtDzjykMFZpU6BWEo9uqjkD39PtR16ctG8XCVRC6VmLX9E8N1WB1M22XDx",
  "key23": "55onHGHQkfkkBExpE62GbLQoouAnT9EGpRJR2ubZzELYK72QDPexGUPDjnc8EWE6cmf3Q8NKXfNULHzuFdizcSAq",
  "key24": "48buTzLW9HwCB2DjokVsSwJFXLuuk3Pp8wZu3eWCYMYxWkpYr89cxNoAy5yBpxcGMiHb97nAxuL8w6WJWFQjWLvg"
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
