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
    "2hYZGt6KvWfwdyWD4qiQLjWhHWpu2Xjskgtp7RdyTAjHkzi9BsFmGZy5Ko6QJtjjAcGZEGSL6SyjfZzkcy8XmRff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434h1vQbut9k8SCHnUpCQ8sjP5jit7N7QVWnBTMo8QiiQyGARbptEMPedMJCtccibhZnoqf8H8oSPpwSW5i8L64p",
  "key1": "5ec8ADfaxXpmUWKGnZyvm2V3RPNA2BJZe2MfQTPApiLUKAh2s1sTpSt9PxCM4bcovuQc12mbZeBwYb7tY8zTSpmQ",
  "key2": "21XmyMdNWs6NnrXMivi6yYkzZzFjovafoaAiJAHdoBoxTKh4wAhiNkwgrhpTYU3Dgx5xNE2xraXRWUxNHnDEeGAe",
  "key3": "5HE5ecQcuLMFFQVUSefKbqGwWJWzRVKHxoVxUQjZmKi8Vpz48eCffaPmhBDLjPSB362CpyDhCAbfyDTkhDth35mu",
  "key4": "2dBg9BLV4FgVhEz91rtRSPWTMeF1LKj7Y4PapjkBkTSf3UWQ5tRYuQGkCtAfLofMeM1MuC34NJ4EyKbNmHNougHs",
  "key5": "2D2MJg1qgGBGoBeC5bS9QNvKSKJ89U6xH4Bwc4iUVhQED6Nbcnkk41Cybn9cP7dfdwPWqkgHH5kELYxjhZbTPbTY",
  "key6": "3WrKbVe2psGa2L29xEkr8rs1JNZBRmukYer9mb4Err9UVD8W52ByuhdWa7jfYboNSaMEjUdwBaPZm6KBEXGV1WYR",
  "key7": "23VnQSdBS1FF4VskyiPQ9ybgW7RZx4RXnRkxi7LQBFYVW71cnZrhYTdHYPh1g3pjheixMWZELpBWyAFSe1rkfiZv",
  "key8": "4uQ5rzR3eKKTta8AXjpciFQ7nEgBF39XRb47vLZWmd1PZrbZoXNh7eWrWVWEkt6RidyxgaqJvZ2MXRLoq2wtdv4m",
  "key9": "4izMvD34txeyiYFUamn9rmeuboPjM6k6nrXkRcUjjPYZe1SuE4mKZ53xTpo74f3z1uH9amsrmJQLAdvbp14KuHKD",
  "key10": "2oYFoZwgdSK8HJgeCk9YhppbYrZzovsUPTbq9a13yxUHouRXcQKL91mD7tFW5cnPNvybGCbdc7cmVn3euMbrnKyc",
  "key11": "2YFChbGQijvh9JEyRM9yqr4JfB94wnyAgsv6PHPdmMBEh8YqRyGPHX4V89eUt7YBZjNeDewxxCrMFdE75YuBE1Fm",
  "key12": "2GZbF7n9EyrxmV3eASm8bGw3vTSwcGiHW61S3QBuQmTzmctckENjd5dWyNYzrVvnK9ZGFeiwiT4idxg3kFTsvYDc",
  "key13": "2KTMfYANbvsBd3JmpghZx5pKVb414ao6Mxi3ia5z6a4dNe9EwoiocW3g1SZkybL6peG4Fc2o298ezd2pnrwaisJW",
  "key14": "2CnZbfaSWQ7mZ3twuEYDPJekmAiAgv8WY4Qodsse2BAsaJMqf3HP6TmAwNMJYqz7RnseSSA23ZYR4FF4DSujQFq3",
  "key15": "417HQm4ioTK1dL72FxTGRQNZPqXb5gzewFCdS2F8eU6dokN6AH8oWPRPuActzipCf6HdY2gJYkjqiXwH132o3j5T",
  "key16": "5QaNWS4QZLu3yyA4gXmUZsytJdBn7T6LH7BJR27Gg8cWnPF7vf1MHPCxq4J8bNuiAqM7y1HtzYQFUVRZd9rTHy4n",
  "key17": "55x7H9A6JpT11x1smo2jriYPBmdzxzrL4VnVjsjJRAvQsmcm2umd4mpCoC9o2ZvYoCWEirZbVp569h4ht1pTgBRz",
  "key18": "4gBHkpSHukDS1KuZjBcfZpxvySXYmtVJhjEivhMtqr9L4cn9jKqnmd2kj6uoKKSS5xrJgjQLTJZvjeTawtrakfvd",
  "key19": "kkatFkV8Pmc7ctQWebuED8JXHdpkAfDNaDs3yPgXEDE5y1KHwZHCKXeCaQnokt3q9vmkA1pnyYqExZkyQowQNHb",
  "key20": "3SyKGGZrswpabH3ewEkBq2FvHcqDhoFzj1EiS3nmtWo9qbsg2jxpg1hPQaMLcPz4ha8MJ6r1t2PQE8464oawG4s4",
  "key21": "eHc8ZijUHcg9fgvSXS78MfZWb3kWocjyyfmaUrfHQDS3cL2tHYghs1xsoRrBtfEBEZxASNDEZ9i7AsWFoPWfFMF",
  "key22": "zHgamM6Rb19rHs7ND2MRYggimUkC52xvDXqeXc7DKmCrhHiNuZxxf28Mj8Lt7KUYPCTX3YKyzLSZcjQ74Dn882z",
  "key23": "3WaoiwNtek2SwH7gngRV42Z4BEmei1ZRnGzWsFmhjJaqx4ghrFhSujonJA3arFChU3aE32AnYSkhVutZnun3kMqN",
  "key24": "yqymH4u1cofrutgsWEZAZDHNqyG96qSh97qRax9XmwZs9HQ2sU9W6uLt2XF7TdSmsgEn1P2Wd8xYQ6M8nxocQVw",
  "key25": "2ctkuJ2cpLrvWx9xznW3xVNkCXFmMhrMQc2HRQFHfAP2XToZwQvAuELFhLeoFKQGXit4RtHunfASPAoeV4wNSUXG",
  "key26": "422H73hLa5WwbkxmcXkzemg3kNgWLiahxCWiXDKBqHxrge2B8WPTXzMkqf9faurpkV2Urk7NMCdA3DtS4fcTGtUu",
  "key27": "2i4yC9KPv3wSFKQA32PmQQQYGXWX66cCpcfBxhN8TRuCyVBtVGgJ3qcu5xrDzUCfFPcJzq3m8TdR21bf8VquV6yN",
  "key28": "3n55TwQ4ojRcsXjUcF5RkfeFyW82suPKjyR8sXfWJx4h8gGymQCDwEGNByNeQGBkUUnUbebqRFWc86193EQRCchP",
  "key29": "NHKb9J15WPKa6J5Utb8N1VfUjEhbQ2ki1u958L1CHgmfww8dzfk8L1xPbReZDUyrjsjvFEvTV6PY46ruBkpm993",
  "key30": "2nkxazUEp38PNdUoLUBa9Xn7LHAwo8YcHeRWJ4HUyKRs3gbA3cqfgxt5C3h274UvvFptDZdztdQnsJXVRki2xDGd",
  "key31": "3pUHVXotgSehcSRUqnFGs1vhmUwrknfDXVQRNYthE9o96MR2BTA7X6z23DsJoMYY48UMErvxweknkHR775TdbBgj",
  "key32": "5UiaQSRe32jkzzBfS9jZ9j1LnzVR1Nn861f98fu7ShSKQih1CLGqu3nZXXR1CErAby9oQpoawift5Q7MRsKZWHVW",
  "key33": "Px5ehWqxHNKRnmPPYjcN9Q5b7iq1v5DfkbpFVSw94xNpVojaHrNUgRxohuPQS7i4od9qf2yBTg354QsfMuEuUGG"
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
