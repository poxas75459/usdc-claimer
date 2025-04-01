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
    "4qJG3Y76MHNsNtwuscdZaRxMHc5nqD9hMQbT26ArXLVXRuKecdHBAoKnY9sKdGCdNk24zJ4Ab46ekkENTDwjFQuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GRFC1bF8TX7UyKoQ4f86jboTQ7EejXM9eGArtBugsvGLnB4ARajF43d1ShJRqysS4o8QxMqzMFKgGnpHZNE5Xtz",
  "key1": "3D98V9t9B6cUYxAfQVKuu9bCStHKiHsktXBfZBniCyGfUiBNZiK1A7u1MpWviWeXnNuCL6dQf1UctuqsNLQjz4Mu",
  "key2": "3dBMmhWpEcd3wSt1jxr9KwXNKUXxkQeM7SYY6w9dLtEN8FJArQ4Hh1MSBG9Eb33TCXbUWuYAmdoJAuWWHgiH71Ln",
  "key3": "5xc9bC2uHiZaadRE1xgvuzvSs761gHyqyHwJ8uYG1Ec67cG5XNkmLJbkCCx6naUc9Agh2w7j69NenM5Tc1BDYsLT",
  "key4": "2e1FbpBEiMJ5Cw4QHKJuqkCKF1wX7QpN9MdRqNni7YQtTCZnSkR52kv2ad2E2V4HavGNHN673rfriVyqRunAhu1x",
  "key5": "3s4Mky2WNf3W7dvaRkGpXvWzMQUvUrpmA6CaHezz44163r7dbjfcw8qVEfmxrUBmHAQsBWqqVxaKzrcrf5xjxAfu",
  "key6": "4h8tToZE6DYwyQzDjJHABdpKtzmgjVWmLhwqpHJHEgrRdfXVmc8Q9taQrksidKiYzvyfXCtMAiJqXdU1RTTa3NMu",
  "key7": "54pWTo2JVbk1MqiTwPYD5woxYpg3dh9WTSeAwixakYkYY9rmDCXZ18byFDD28doRRtLdFKh2asFaePCAUVUZxUeE",
  "key8": "5WNFhPnaMuVba93AEL4SfEFJvwT9ijDDvXMQxi2frZ5b7YFdE8kZJrzQGvLUkSNidPeY4KhQGfBKuvHXjxWWagbr",
  "key9": "281KmZatDugPiD78t2w68dxm4EVDggNMBdC9WSBQHVeRudxcP4hXtvQ1B9GVq4ACHvQxBNxWRvkY9RCuA754gWq1",
  "key10": "5wncXNvNz9DKqajPqFiYRnJX68JvScX1tuCUDAA5xJwQMua9kaSQJSnKXujJ9rXXbEeeErhod7jxDhuNQN7XWXJn",
  "key11": "4CmjHTPMPX3mt7BcMSDqmqif9MirjBMUEBbR1uh9RqgUmjzghXMhLCMznGxLn2p3tHFXh29ttNZDP2tsowniftsM",
  "key12": "4DuiqyQxba8NZPSuyMBd4aMZumrJGss3StxFtqT9XuApxuKFsZ5tKjCH8NLfxSKyfgDKR42zZFG5GVGKQNYgwBhp",
  "key13": "5uJCg3d7m3iQbePfHYZgJksJ6H7BHCZgDviY4LEUQ9HuyFhRgdgqzUG4X5CJFHTXPRtVKKUynu3gSpM88uigzprG",
  "key14": "3Svr6S8MF4LrzWMhxGRAcLjCowxaAw1zT6PNkFMyLPCwEL6MkPBkLpMDzTA1CyxGgjBs9rxutmQVPsMf38ACzqsF",
  "key15": "5WNkVxAjh1TfJDYckttivaadBfJcwHU63qPTpvRhi73UqCU4kKDHvMwFuhDSBPEzTxJQfGsAhrBSPjkwZpezNkFM",
  "key16": "2p6WBSdkr1FYfdsm8K85XhS8kfFGRqcVbPJKNyDegp6w5AN5uR58W4PE9nsJBxLyuAtjGLVgVphdHUCNqabLGqiR",
  "key17": "3bXVpA2msVZgnuMgnvMzbfVPiXZbRs75GSETKXaujDme1RpiSyUusDDMAMx6Mi451sJmpg4fwdwPAW5mTgq8HMP2",
  "key18": "2mSE7B7UbxwcBS44qYqoY1wNfjnY7kSfonsEfVNCUxjjhnLeuVFgFAFvtNipLoey1Pa6uZW9WfvRWHk1Z2rLhaXR",
  "key19": "3KcNQyP8R1SgphSCu14HhUTwCPNHq6dFs78J2YBpaNxtNA8kCDeqNEkVCojJL6HxQDsTH8gHn9zUxTrs7yDSxXwi",
  "key20": "66mjSoQFV4UtBQTwCWbZUPLs9eB6ayfEMV6EiCG7RoxDibJS9PbvkL76gvTtD4nG3FCTWeCu94pujPU3r4sAg8DP",
  "key21": "5ccvaC1xUXcd1mfheBKDbiB9SvYeJC6WPLvKTfzevR5nr7TgYUGR6ZEedCGVMFe5zsr2mX98vnyG2BvfcRucVv8o",
  "key22": "4qWEDpdFLrGYXDMcbQ7KYn67stBNkngdik8QBSYk3XnDaipSL6sUxibqUEkjQuF4g6DVst2B1KQdaFK4dDz4aRtj",
  "key23": "3LW6nP1JBci4XYDRXB3J6yP6uVp5auRLcd2W7tFSj59khrrY9yXYoWpdbWi2Ntj4N98iNjaxcTZJ66RYWPPkKFLn",
  "key24": "4w2G1EsM3FPT5p9wbPkosSeqjLoX4RRfeJx8fNNSDhqZRZohRr1VdnwvRGvkH2vSZekW3BkfyLDBFvNkNHbiu7QK",
  "key25": "4r2Ht2XWa5Bp8X4amxFViN5hd33S6Y7BEiwSmP8TmX8D8eanj9dnxmsEKN5soo558gtJsJwwYHFsAnC1wzn3UrcL",
  "key26": "3pp9VCNfPUqyhMxQ7yrbteoocMhYDNKJPh1acEKa5FzuHPpZPD76y2uRbnjoRcbJNyRTW1ZgzkGePgUnF65MqTAd",
  "key27": "4jk4ga6e1kZaxP5Te3JQ3Snm2kyj2tXy8iQwx3yqBP8XtUQDMtm5P8QUYy4PYJZ2KMr3WsaHLsHtbVUL9vk8whJX",
  "key28": "597NDRTpNjv1MRPU15wx8fkHJhv1pCCerE4QsmucC6HRuN55X3FsNsmhWkc4hSwZ7o5oeCbi4Vqqg7LLyZUxXN85",
  "key29": "4aQyrisBkNDExHfQobnUFykGwkho1t5C4kZmXU1Miwjiq39MKqpw62CTNfLKF1QoeHFBCBZCpyAFXvRStrP7gNCJ",
  "key30": "3ieDZCYurYNS3MeG3FxLyj67maAEtTMCeRbV29YUHveYrEKRMsgeSNA2HLFCzmwKKqRgqs8qZqd9CWpWk9UNdtsk",
  "key31": "5VS1Zn1mxLrYvQspyVM1GkKNbjJJCHMSZP2Z6GB9XdzxbbbqLLNgrDB35R1ADVaYAtqBfrtiEUqS6iLNW3HgVU6K",
  "key32": "hw1tLxtxs5o7x6BSvCnn5mQfGNim3NfwBHu4zj2Lk3obYQo58tgPAixmrfegWwRBCGMT1hH5ez1MirFYqbfw5ia",
  "key33": "2eeLPg28NcmfNozutTksTAmrbEikBaRGkAbfHjzHbKqnHZi4VjGBVJcw3dsSUV4jtngfpe66hxKj8DW2cwzai8Ws",
  "key34": "4m5Ba1vbA2mcqBC8BoxKwaDTCafP5fVPkpkruLv1q9QBJxLUXuEA8mU3rSY3iGScfeSGhFNsVTEtKXGe6HpqQkJk",
  "key35": "QUkd856BteWxhhAxTNQiHQPXeaZSTh8ndk7wkfQ6nK6mdKWAFhJLEyciBZybbnFrbUEjkjvEd9qKpumeTHXCfLB",
  "key36": "5D8zCRwZVFRmBJaA3uhUNhorWi8tJ5XDGVhr4iD46dqcWK2TZrptzRUDXQxCjjqmVa69D5oV31LshzL6rBfKaoEk",
  "key37": "Pyyo4hkbUhryojbfcUX4XcyTv1RewJDZTaYDadH3JbntCNpVoowYhKoKLunGuDpHx1ePuunyc86LFbUzCReKgrR",
  "key38": "fNjjXgiHoNDGN7UkBY1GuFzh6237jGByRci6ThpQdkdNxC3tMwX777LqGj5skTa9nCDiRCkmaqndRHbmThB4XYn",
  "key39": "3mcGcc3m3RbsVai6o3UQXHJm2nfeU3zorzBYREFwrDaUqwjaP9tdc3ZVFP6yia9FA4i9eYhphcxTZzgwp3bXySHX",
  "key40": "5MfnDzPNZdRg3Xi4HYG6Yrx6CZCPSTVTsijg526fxBeyQUfveoMVKhq4TLRgqAXimntxFKzpbVNu5tkBshDvPob3"
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
