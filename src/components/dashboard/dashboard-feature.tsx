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
    "88Y4Psizp8xpU1tUTnJ8qsR8oN3tvm26SFPkpoXa2Dpt2SiPcbJLWnS3Yg2nKEQ2mHMbjZVVhwnF2sQ1VuPfv3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQz73Lu9YfKR1AuoN1GwTzKn6H4byHSoE2MDjf7HrEojMqtnqBpGvVYUArc5ks1ecazK4JewKnEj5joW3rN3qaM",
  "key1": "2jUXS5TR25fTUWYPXpvDUw83WvYACY22J2UkYzxAQvMvZcKaaUdMRdSCXgfcyWQYwh14xCXGjyV8SezqqynTP44",
  "key2": "63i14hKh5cMekGEPpo17DmMVT2chmRxw882FAZkyNBcLyvWrhopXcm8gwBreyhAjYem1SJzYgExGWCLPzJrRTp85",
  "key3": "VzVJJwVtQGkWx4AVmybZjZW1VxdfUX1VGcQ3FRgFoTCcErqNgTMr8tgx2Ubu5gex3cdNMBqVFZEPH6pFP4w6nJA",
  "key4": "hAr2arE4jfnV4fW7pYPP6ktHvr3NSvnuPzzn6sK1NGjGjEE8ojzAmXVAaHaeiZbdoJZfvxB15fokgu82s43V5yD",
  "key5": "3K8kz9ZVrWHP2ecLHLLon9jizmNGuAtgMgEbuVuntdei8pgXC3CRvBn7gctRmMHB3Fc2AiiLWr4gSmYhDYUqWo7W",
  "key6": "x1vvJbmoVb9G6DXvXxRCXEtfit8HgJzNV6YpRhYQAscZqXSgrk6CRt9t8UhEnKBGYtEDMLa37QXyWNSe8R2B47b",
  "key7": "4UnLfEDCvpRpg2RBytFK6rKhrwdaMv9xvXskcTS1Syq67THrcbkYy6kSX2xujYBSknA7KxJGLFPfnkGjouEseDq7",
  "key8": "2C1LL2QpG52R15KBLazNdmnA1QsQtKZcrVxTKGw4gE2bAgAv6JuEJrVH6qRSu45DG4H5HxnN2H3DbHpL6VVBAyBN",
  "key9": "66sgDjYjy5gQtDSpY4CtXBNCzX7DXiK4ziXVtySEdsAstG5fUyHEHhJZph71YrqUXAnCwryonEQEe5tAqxJBU94T",
  "key10": "31BTDtcA5z3aNid7ZEcXUyRwzStLeByXjKeRzXZtAxw9hjdmDiBZjq7CXexnpxAWSJs9L4n9dkKndx3ADncJULmR",
  "key11": "2ZwQnAzaMzzGe4kgjYtF236xQZknYFM5huJ4YPfmfpd8kdPEaejQHxrxLp5L48GTBh1QwTTNj1kvddQTRmfgePAj",
  "key12": "2F2saWe52TibVJkaTD5svZWCEQyLJ39LN4ivkvANhYeFumsH346PpnDTdytd6Jw7BGg4hhv6miJgnsqpM8bgpyFu",
  "key13": "5xxJ9e8ksZTpEjXqM1ZxN3sYhpUMZabJ9z9cTXaAVyD5CgywDsxrbptVQKGcw99F49J14zouQYcDeooctokfPNgJ",
  "key14": "2grzYPAcfhMfxFyZL8d42cg5SV2kCq6AKZrow4LfzC16oL1vPAEcguZLLdVnru1aCAjueK9tyYapQN9LQzrjidsZ",
  "key15": "vu9gm3x3SzgSws24o2R8NCw7HNfbrcCJmgKUiRb267sZXNqA8v6jSm4ncusPYX2pXi6dbZ4yadQjeADYbNU5x9K",
  "key16": "5GgJr4JUziNrrnJKXoGu8FwNVmd9XEovzjEv2JmPahqVQ4gUyAotC9hsuPhL7bVLut5mgqvNRfond2ZKA53Erp9D",
  "key17": "57HK1ix1EgPRvVHCUSTYjUqC93U8EEEPLwSZTGFMuiLmNBKWmbNNsTcmEG9bWV46CwokLRttqBhgBLFmDoKsoxBQ",
  "key18": "4mBKmhvsjMWz23JYNwjVhztVLTo9ZEC9XyB3cqZB3UTrGA9FMCx7Yfz3PZBNdXg886JGAmmLnyZW5Ve9cDHgykDj",
  "key19": "3PTRqKyLjkt1gCG6zPPLibHnZkQMR8vxWAy6qeYRhkQUBErr4MdKxcWsASR27R4qK2shTV6BBjYfaQKWwxYawjbi",
  "key20": "3d4RQE5BhgHe7AZpppTUrH8bn4VWFL6JrjnhsYUAM6wFMVkT9ChfUMupFqjFoTd9oSUrhruyZ2mTJefMuoxRpgrf",
  "key21": "66uuUHw1QFMP1ooVujEpw5QUZcVTXPBckZiP71RXDYtR572xMhWNbFCQ6fEs7V3qV3XTZ9PKaupwuBqGKCjpzKuL",
  "key22": "2KcA5ihWNibxg3Bz5bHDtPQ5NCtfu9dQwtW8UTNAhQEWtQPLicTtaHYAJLtpTshmU6rC3V3pJ2o5x7yDeBSmrq3K",
  "key23": "5prb33C6zLn3qnYNPyd5fWCgg9ENdgDtsXp8fQ5u5qM3d5vccvBUaBry2Nst1FcpUsT3SnkzL7cUZyeBCeGxH1ZT",
  "key24": "2zwTWRKbyyAiaSaSgLHpLWEMgz8YjCoAkaN2WMeQ8w1jEka7EJH3Pvk9W7PpoZn2YKJ9TNFUWKDFeWyP12sWUbXb",
  "key25": "43ZTVytAGf5yKVxudkKJYZxkjKN8KxreGry3FKhhDJiH8zPNPPWwiaaJAnAKn1idYDit6x67xJcHZE3RUFowXUnH",
  "key26": "5B8Frq8ptkRErcHaEdPhKHVCsWyyEYUEcA64JZvvuGd74ykpnzchB1qSYCb73k3Z5TSrUmjPZPkVFwvh3hxMHM3U",
  "key27": "3VMJ6E1R73iJJnGqJzvqX3HhT2TyWBQdDphYwhb3EHJXScmUh3v8KK1HsTTjMPoD6GdaryT8asvUhWtg3K7dWjjz"
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
