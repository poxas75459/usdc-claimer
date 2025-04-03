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
    "3mpzRFuzEbtCcdwwVk5nti6knHPDDP7KXx7HkEskHF2jPRXzUvkLBb6p7KSV72XzMJsuhu2H3VKpMjaWuBtRpUcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Td9WcJtPaXCvEreWyFAhhjX2mwf351NgUHCGhc52yj8gZp2gkz4rAdj7Jqc9EwgCrdQfetLRTN3rtMcsDEvZ2xV",
  "key1": "zghRnQigo9MbNhXYCGQRdKdPW9rZAaU5HYBSQgZSwSV12xa9qystfiiSD3JJcBptaSbku8bycmwo1Xq6Em6Jzoo",
  "key2": "2R14CeUaKrXWxSiJUHzsQsAhZdY6DKYEcTXwB77vQitNkJrBxNu72v2VJU586DJdU7gjjN7pxqh4hpzdQXudWE9",
  "key3": "5UnqrkYULk4zudRrdr8Jccd336vmsTgJGTWDdF6yaNjCHmajpnFqvRti8YkDd6Eou4Uh7KjQ5AAg5ULVpKkt2SzK",
  "key4": "4B5vEBLkXfqfkA6AqU938Q9oFUsqjR2k8RQvRAAqBNdqZxNoUHhDxGvpgEDtzaYDW8xgdAaN6wzsvVuYCHB47PQH",
  "key5": "39C8wj6cxC7dm96TSdgaNhtvTxzTvu8CWWThWppsv2XAWqZKC6C5fzCG725vmiouLWW8TbJr2TYtuwoThbCJNLC4",
  "key6": "JAh6hoDYUALnH2XxC2yy8UukvkUGPoU3tTjreQqRDgcjU7HA1SA2iaRpgsQr4dq5kmys27xE7GJQ3LMY8xwad6L",
  "key7": "5WHqqqsqE8VC6LovCiLiwXQJkDLyJWouv8EFZyYk9TfDDHBLA1yfVFscTX6Ci7gsBavMfvh9rAiV3GYma6Uhr1zV",
  "key8": "32KaiBDnPbGh6XKEZapnEJ2Go7b2LNPzndQAiXUbgGspZeg8XzSTQVRpjtLgfzjPrnEkoUzEpb2qCvXCLDbYzeRn",
  "key9": "3HgeE6HRfkBwCbw8EbcvrS5zbiFuKf1skhUStoKadNCJ3GfV5XAhwYBgL69M7y5H2mkeZiyHjfg8C8CWSmervVKS",
  "key10": "5R3SK6bZVU1yodsd1wgbd9d63ymoyKf318aHYaZ1NotzT39iNmfHMf9jguc89EVcnfR45BcWkh7xBJWbvoCZ1ad1",
  "key11": "fp8rGnj5rpMDy1NrnDjYZSav1AhNdisosdQskHETZEFV5dhHGK21VC5xX8UvTzQ2tmc1zGDZcJvnvpH9xdCicaX",
  "key12": "3WpqYzc9ctK21E2a8nJBv4wj5RtGfKqnBje57eKuEPFSK1vuKhydbmgGfS8oGGc7EXkGYUeX8LitxdEzxPo5f4SZ",
  "key13": "3Kwdk2DfVbGFXnd9zPof8JKu869jFowKmxGWjtm89JTcxPpmerzwnZg63wyBU7Jdnp2HDMTwnUXB6qkUPa8grfPR",
  "key14": "3i3bW69hY3LXvuK6qvJjjHCHeAFiib6jGdSo6eSWr6F2xSaJmzxYscz6GSqxhkRuLcohQbb6WceX11vF6UHTYNye",
  "key15": "9n5eiEp4j9QLfqdU8XVuNfdFYnn1GahKEyEiSGYdjgW5yDN76yc55JYEJTfs8zAoJLnjhPMeitZYi2Bgzpum9bT",
  "key16": "49vJ3ovVeA4METixVqgxNW4Da5pT5UWQpLFTWsN9uAeTzZSjQ3mPwpJWQP1W7shFpSG6rmYq69Sx4yhQjZVaPskR",
  "key17": "2UASpAgoqzD1uBuJreKWYqUUKjQDAHkSACcAAvZUKLGvhDGjrbdcK4bt7HnaCA8Bzj2VKbSnCkkDtQEi8YCDhHFC",
  "key18": "w27CcW5TTEN8btNAAxHPwetvFHarLJFgGUNPfQpwQ71ezjoBdffRRE9xLbSh1saNPkAhkEXFjtbdqiSCDpuAyd8",
  "key19": "56qXZJSHoW1AdZ9hue5JjxCKs5BG5BJ2S4E5gosZ13WQcgmQnfcYdYDQBeBrxxXqZRBh92jpHYLCtxSUp1Tkhi5v",
  "key20": "3kzdquprXgwVThYkMhdywEhXetk4scALRiy8LTDS1Ghkw3kvZdNL2H5S1Pn6nkZu27nAa8MCqi4VA9BF3r9cgjup",
  "key21": "5q8e9JYLm9yUqgA8kFkJGZxaPQq7mRh46mUZnCRdijTsTHBNuFfjA3RymgBxKRvQ37rexnbHu2xk1ZKVFMjKdWrE",
  "key22": "3yqe48fSur22GLKwDb9j1ZwFXMjXxSHuzpYutvwLX5qg4AUBWDm5FSPfVtodfGV8nm3DNv9VjS64PAE5eoCDQfVr",
  "key23": "HTzmpYn6SXUkqZPtunB6cCtzXCZJBEjffjhvwzcrojKS97xCi9Reegscw58Zhv6nHTUC6zTVDG2H4TxzuZksfNb",
  "key24": "39DA7i96XyFaJp7ne13GBSfuUjrZ1NYtJUJjssvSQJhax5FypT8itPK6bUXLq8kU5NyBeNArLGQrDeS6as6dMx3p",
  "key25": "2aFrmQS1oarcz9CTersrQWnbekDaZjEVU39e58CNGW4yjV86qxHdv9maUF4VkCFYTZHg23eKcPmVgYcSfeFC4fg2"
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
