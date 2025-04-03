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
    "5ZTuDmRf1ZxDfz385NoyjZZyUgMk41YDSEoxRMcy8nrsSvkrdusera7CfcccsjxsYv5GaoPMQNDQSNkahBdb1t5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHAGh7CHEA8Ha2aaCCrrhmZsMqXAcMR9EMFf49vmy3aeRxBb653cBfke2Rk2p1p6jLfCADDqeD4njiNMw57qPcF",
  "key1": "2Qw5D1nQ52x14mfVT2Ej3PGXmMFH4rGXE83hrLYy7jBM83w3Jw4HFtFF9FoQfqnJyngp9asbgGuzJNp44vGPkFao",
  "key2": "5XkNixgmbK8CZ7SQ8TP6t4T9eF4oK3szw7gP3Sn6tQ9KheUsXcNPMovUURDYmpHrc5MpoXR5K8EMiPKrKfcypeos",
  "key3": "f5gVroZEqrFuA7HW5gJBATVt2GajALncR7bhKtGUddHhWmcFE4dYLdkxLLZVrz978apTCE1b47izN7LqPPFsrna",
  "key4": "4HhvZwhU21Wop6ZQr8upmULtmBo3GXFs9YvhcgEs45UYucok9QnTXw33ZubSQ9DX1vZpVgmCfHqFBxtxiM7dtQEQ",
  "key5": "2xdWi1mMp61EEZTEAJhvZstWd3KZiFnrEarHZnotRcVFvVWbTESvprGeh3db4c6TKsjnB71cAk1FdQGhpfN7LU9b",
  "key6": "46xokMgmDeRL2nbyrrLDi6SCGHQKKZWZfCdBWeYJzrSiUbp8bEZew6EcK7P5hXUxEYfevifmpuYv6tdRgmXqBCDM",
  "key7": "2y2k1SJnM15ca6ocw9FSAavzRQeKe5uBwzAbhdCrMq86jBsBLpwtQnJpfFUEXF6RPws3LdgND3sJtNdNcbZmXwFM",
  "key8": "2yWeso8oUyQdViVwj9TFnkjuEWQKqUjpgNaFvqoNQ7M2HeabntsiMKjR3yn83gxqmcXWVeSz4QmtGU3dAHa5KAMB",
  "key9": "5myK4ugRjEyqAhryn2fSjAdP3GRLav2dNQCb6NYMPxLWYmWduB3D68iimXi8BaybtcDJQ7ZvtFhcYMKvUWbHz4pQ",
  "key10": "2ZPD15tC98kYkvFGeLDYZNdK3piKRKcASqdad2KtRPtVSfHpbH7PkUDzziv3vZKuy6Kx36ixm3g6zbqpFF8KZFZP",
  "key11": "4s7i7cjNPqT115dw2eXL6bauqWMKaFtafBqkp1TrmeL7puFWUUeMb6MsRUSKeYrDcthEiRBrxUcFiUyCBMGwX7NE",
  "key12": "2mb5nDNbePyN64tnGfXv7XmRPNGJykwC8HVozAmHtohbuERyUaYnAocm8cpLqqncFkVYBdJwh97AtX3drsuoXxcz",
  "key13": "V6tqiVsqxrvodt6nZ7go5qixapDfCe8wkJ4XKBDaevnB9273BM5DRw6yUovH8PLWPit7pMVwwsEP9WwPtjBxt1n",
  "key14": "56DfGwZ5J2R84FHYt7xK98uZu19Der32ZnDLuDdCpRMjtxZJ7r8d1hbPFJrbVJfBRwMUsqhx8arPyRJ95R9tnUyb",
  "key15": "3vVCAkWfcsRh43PvwrkwhhfYbmw4w6DNJ1DYPecwEd1GtFWBoFSZU6djfPFU9WLzWn2sFdJQzh1mGodY9nyv28LY",
  "key16": "5xGJJRmDJZQeckbF7t6iCiJEvYNnrCpbtXspuk1jr7BbcJCJWHd9fqCMoPGPnXWm6hiwsL2hXxvXsHMfc3j6xwyx",
  "key17": "5kn5T1cVdAHw3PAWFP8EDUQDqGHdKDKutk8QoDa7dzwwG5sokuxt2CQ8UUVQs9dky2ZnbWaJP67tMgifhD1u1cu8",
  "key18": "2gyZEhaZ3a2WfhGvMUfsDRYQmZXTdahUnMjMFASPBgfTT7xL7CeEnAnadTsCqnuSiy1j7YJ1wQAsi7AYaQCMZCza",
  "key19": "5QWJj2c7QwzMnMNr9k1Sg5UL48Tj9b2R2XAUEZ9EKroY25vEa56irjMgjBMHB7eNmHMgcnhENqWW16SorpVKX3ZL",
  "key20": "3qHxsTBBpNHz3U4hmSRU5ZidL39CBNE6mGyJSHYyJ8dh1gWHDSWqsGKL4GD6EYBsfWwoEAfGTiPBC5vaaAPZg7cW",
  "key21": "2QSvLvPNZc4rbJTEkPPcLC4h2R4Kasn6eWRWbYWXx1jFo3xmuDsQFbn7G3sgfo2wsgM6qgZKqfUAerLS8ukK7zpK",
  "key22": "4h9hfS68936pRNK7RGKkyB9xXcX2fQVeetscKnxed3ioWRcEkh5Xv7JLHVWToZCtpC5NjqccLotBmkdUMB1kVeCX",
  "key23": "25RLxaPpCcv1d1JFZw2GMZ5yqheDffMKYVdwdqi1a1qfdvt9i2f6nQTypBggxudoW2baJvMbTpZWi3rpgq6bE3eN",
  "key24": "5DfVLSXfBdSeL8ESrTCMFn7159JVoQ7uhBZDF4LsYhR3pD6rLBVi23Ng43884R2ZqoFT5d3sPFHxaxmmoU2mTjbe",
  "key25": "4aHS4Y5YGjr1Bs4LThJHjsLKLURT9PxP4aCb1pFy69KL3i4QGrDbRiG4UcWBxWswmQ39Kbpjp669WxH1nh4wVwuz",
  "key26": "RSqeJ8yQ1D96hubdjwcrWVkKG9xstx7pLNz7yYAX6KgPrVPvo1L5Rnd5UyRF7w5icpDhh5jCvBZyepXNqWVkLhB",
  "key27": "41GcqMY1rPHkSKoBdcNzvzNXu6siBp5vxW3yzWMXurmXX7FXnRxRFTRbKvV4sj8HSWPMMpnbVmyvGHKSHJH8shKb",
  "key28": "4fCvR99hDRgScFSrjFxgAixpMPU5t4EcXHPuWjWGeSRP8ELYmPmeyJoumkLXhf4kyS4AfZhhFEm8cE27pwCXEXCA",
  "key29": "3rqFWejsTypaLH9e1qDQNmzmoTVs5Uj2hk9GGVex7qkj7BrEUX9LXQ3wumFtuQbegQdnwLk9SL2WEGZ4C6cBgPqS",
  "key30": "3haYDYrcxxrSfrkF2zE1FNYBeoxx8mnfmYcqx7G88jb9ivsdcNYi9vVBFmyPRkkQKaer5P2MtpzHDSQb76hzB2Fe",
  "key31": "3CnWtzczyJJpqS5dRzWoTz6iC3FcuvwmiUruj3RFg1oDa4DpxaDrN3ogdJ9uximc6y7Ho8NEdj1jfCrAYqzwAuPc",
  "key32": "5hnPjdziG8wVfZuLZ3ncgu3jaBpNnty3rqKQSJnENvD7Rnx1Lk4pcYjy4DQgHhtNL4YP3vUSr893Ntho7rXbwgBh",
  "key33": "56FEhcDxWu98NXDCrrqMhujmQvMYXijU5J6K4rXyiF1CAopNaVWx8q5RjbsCwvUq151Jwy9xe8xSouNWwM1khMNT",
  "key34": "5ToRe2yZJFEycCaVXvfpgdtcaXLbTgt7XkTn3HBopDUZK8NadgPJo3pWRCHvrpR8BPQDcR6EBb8c7ZEGjJRyKfi7",
  "key35": "62Fv5oi5X66d5AEARkaW8Gg4EkNGvbv7saXtpCEFJPau8CEVA5VPNTisVANSGtZ9ey9rNYNwSqENgP3SyzhBQZqB",
  "key36": "32GLwy2FhDCRcJUTmbxQZqss5tJDGNAJpBc3AzPbvJC44eoZ51g2rKseCKPpJ78peF9LoCAoyFmk9tQuCSsd8xxg",
  "key37": "4gPkTxjmYPnxb8xZ8gjkQBGjbc4S99ztEvGg9FH8GEsTWGWuhhrR9yWHbZdzN2h1M5NNpwY8HjoJmn48c6dEoeVs",
  "key38": "2qY6SRKkmia2fS42jMQgZKioc13mh6U3Tq2d6yxxSpTNqFVSZ77gY85rzCmMNYVsRuTzmKjdWRjfK9WiAYb3wQyH",
  "key39": "47PC4D6Zh2xRVm2Lbm45PvPb63v1FtX9FT6xTrMDvFS4ewHT1BSJFmghMTmvEnydTjiZNpyBNNDwSTQeQxZoo4zE",
  "key40": "3FKaQpmmeSDxupMPxmTTsjFjtih4H6gVbLB86KqSbr9rZHi9k4dywBVTZwPNskxjC5c1W34hppKuyWgmFz2ZYk2e",
  "key41": "3ahFgqymgSNEGDRFNCp8LUY9tNzXq9We3V1jCFpZRubBUiteDRyRaFZVLizgQzMyGRVWq8QMXuhYcf3uBrH5TVik",
  "key42": "26Kx1sBLrDtuZCMDzWJNiVQQLDopXnrU1A8YweSFqAHi1A4rzZB6hNrnVW7u8rozPu5ziraR7zkKZsreLdzJTRW5",
  "key43": "43doJCZc4MZ6SF3q9csXQsVKYoXWks5HC7HWLfoD8LNUsTEfJWLwL8fh1sZ8dqSqLy8Bcz2p4ijq2XHQTpUJq5PG"
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
