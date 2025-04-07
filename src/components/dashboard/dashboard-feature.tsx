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
    "26LQdMvcXkMNrNd93yNF1c2SEzqjpq4rCneNmLK8jm9ANuH5b43dmoySVEkX9WJsrXE6vFUdWBRENUaQL4FUctRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrFbb3SMGwRLiknXKmAzQzKDVP5MU6L1jHtzMSBQuyqVxUR7SQCkfMYtWzXDYfn4iQ2JDWJUp7vCxL5prpipVsb",
  "key1": "89ScdkUt5W3DaTHfBBTmEdma9hJWHhVN3hsiPap8TPEsfL8hhPWqsKXeuYEjyqHNxNek9gwzSaX6H3hXHKoYsnv",
  "key2": "55nazD2yiWeseQD3DrWaBHrK4TZwRBg1ZUW4WQC5VedVyXWyZMwsAUf6wiJp9Y8Z2gjkQEtuqQaThc5s5Ef7M9Aq",
  "key3": "4XdhFbw8aAPFSvN8qDLxGCiMLTtJ8yVPcwMWBM8zMFYQnECPp3pMHtMXDgtHfAhPKxYAT9gdHYJtAacLRDQmVKdB",
  "key4": "5C2HHUAzWxgVxu14RYvwWQo3dKQpzrKpg8RVvovgGEhdAjRRRVh66GgFvaVogYDtLvgqKdsntW4SU1U4GCC6qzLm",
  "key5": "3K1M7Nnoc1DKUt3ydLsZ2mqfg1Z1yaEuDBKSRBE3dHYAiZcaQW2dmk4e8CogfNnzVF5sJiP1NdeNW5qRp6ZTkh25",
  "key6": "2S5hqe68v3QthovLCvQbwshxnX9VC8QfYxJzMWmZHs8qpASNUfboGKf4mrDEWXe1AeAkfwaVM4uGssZqo3wCPqkb",
  "key7": "5G5Y7qXkpA2eXsazTrEqqfrxdHNh5BW74JJMwjf5qmsJmSbCaiGzqkxouJ76F84zDxAjeyPqsvmMXnbAfhGVomrZ",
  "key8": "NLEAErWwiugmMtJpYn1BNZx8Db7LqSjoDv1gG8ixSagN7fPkxXVkcQJTMJBvfAEqTWGK9EdYJTwmnjoo1hfBa68",
  "key9": "3prWjjrd5BvhoiTi8y7Yc6nmDttesEzPTnYNx6rm3mmkjjHVtgVmgqc5fN3iCavr7VMZvyWMY9oNyCkVaKDTcE7B",
  "key10": "4deJMaM86G3YMCyMCPTX5GZNgcYeBFFLWBXtSm9ifzU1dnyvQefV5q8y2gFYWZiVg6hT3DgP18Binf9uEFyJsMeM",
  "key11": "4kCAtuHstarQWBU78m5iG8GKon9DXgKeWw5f1SQLbxUZJ3oPZU1juabbQoTSB7udQRcqputJfnUCcNubQH5FP4vx",
  "key12": "3WMtHifcfwc6PntGRnGrqgLhr4Mx2PkTF1BYy7UP8Q9F7MXWqViFZpEwuCABf8etK9AzVkcGuTehLezttL78bW2",
  "key13": "p85zbNHDoPSF2WAXH6xMHKEwS1qqH6mfeuWmrnKbDcKmrtzwCYes8qheKEezjGM9YTkVVu1uqFrSSx1wzoFXZac",
  "key14": "3PES3w3imqxdZ3xBN6Nzi23n6Yaq4AjGPsDYNCTkY3PQfeUsJgHXsUF4DJbtsupqRBCr1HpesnUKN8RuSM7XV11y",
  "key15": "2AW5vsMSUXeLL4154KgAeq1MZDNM1GeAj7wFGEwTmuZnmSv1sdqXHXjynWANET3hagPMvxCVfp3ekjK9x8FCKtm9",
  "key16": "2fAWUkmakrBLfzSRAFjbkVHrNh2m6WKKz1gf6Sdx4CEEGfwQGWgeCBk7FjyTbQTpqFNrMY29L2SpfGxDYMtm5sDB",
  "key17": "5vzsbipS5yVRvmZbrCAU7BMJ5XJ6ETf4zzD89n5rFHxseMcZui3y7BdVMJoDZ944CaihnDVvJbwkbuB1R4gT2oZG",
  "key18": "3ZVsGx8E3u1rjdt41FMtZYfgCRJ88PrEEKfc5M98uS5wnpeA8JkZseVrtvCiWv5FScc3YPzzM1R3VZKbj3UV4B3d",
  "key19": "64vqqEzGeDdoJfnutpB3NaHJMPFQnKzCjxzMDdE6MQd6Y8iU8SSSUKGmeBoBCoDY4cx4ATEQAgWKWCHju9kHeJ5w",
  "key20": "3MUunYr4UarCZFRAxtS4jhYtoqicG9aL82tzLDGbyktrD6uXPx3FtescKfi3aGwkezqvPqbqV5Y8MTc2zR4PNB8i",
  "key21": "qe1bnASaCkYFiTbFhx578fRzFkZ4JJxJJZPycCik91GDrNPy9zbf2qJBxgkTXQhgduRjgT9zxSGHm1mC1PdNLTa",
  "key22": "3oKQHsKfMgqjjPgudzJty3F99tjPoEzxCskxk8cSrtSAHUe3VVRerbZLZ5nwpgKKsTkNfpreYcBzvkBNcRbXoFpW",
  "key23": "2cuanPVDNhuxmSHsYojUjSQNWhsscCoirgJRyin4yreFZgyYZBszQ2EvjHJQ3TckUhX7robm9aFyCo24KzkUbNFB",
  "key24": "65nXgtQg4D4duhXJb6AyCo3jkUvWcdQkP275zByLRLfzKrkBjBTQWyki7dSD17BRYTqUFeWkRRXwLQgVSeRJC31A",
  "key25": "2JJnVo4tDGGMUf2jSbFY5pJHF6njdr65BZpaoyqGP8omcNK1qHr6NLYKTDDt4A2Y4ixJnSZ93rouKRe3jZF6Xkbt",
  "key26": "5srMcJ4GPUMRWbiXKzxALTwgZ4EtiUWxpTrBxQmg3qejGjt18aeSMtwE2YnfKPMUGPbZzHe1BWkEUxKh8j3PrxVM"
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
