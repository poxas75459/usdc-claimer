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
    "4y6o4cUX6mNrTKSzZ9daNc16jiJoNnVSHqxmjkZ17pbf2gr2cpFfbMRBaypPXyG6MooSs1uZgqcujwfcimFQNKqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fsu83EJ1fMyeqtbUaHMt7K5arqiesEzEHxVEB5hx7CYTELR2DEDQdRUesTwNydKCdfzUKMCFUBQ1ufDp1DcYptP",
  "key1": "22nrqQQPoQpoFeftPMn84zNa7BvyHvKrZJy7NhPX8tJh4EoJzGGRsfARWBBDQsvoyShmX7Ei46b9bkzSxd4mED61",
  "key2": "4dLwm4EWhdKXb7oixQe5yuHgN2J2Mqm25NPaHkMhA2bn479N1PrSXb9495J9SdxznqgKdyuW428TFXWtsSew71nF",
  "key3": "33EtCFsqwznijH4a6eeJsBgJAjDmPqDyqZHRdnJ7GaZnmL9389sFVapsEDYjZt91Djisi4UFRD29rYKDSva1t84Z",
  "key4": "3c2UTArYtPF5Zd8uVpSvaAwwr81ykCUGuGixo5rLiamnUfG5koUqv8cn9RxBrT9DKhopuzV8WJd5XQXNZpaeRBeZ",
  "key5": "DawEDg9uBnsWTxhWge8imvvSmtd3Pj3PF3Se9wsT9vgwxtNZbt4oXQ96QSJrnLuyQvYDuKk2RNFd9kCrHadxeEW",
  "key6": "2DR9q1Jt3MmVS1Q45Y28LE3BkZ56Warfg7cwFq3b6cDA71QvGc1brqbLoDQb58uWDPooP5C5aevuJKdsqjxWumXU",
  "key7": "5cUXBHQErdKs16HTisAoEGMTmxkAQ3qCjUMGpni2P2WKg8RvZg45n16QuFKHYtBLekS7hiXdTbbjLBRExcmPuHVv",
  "key8": "41NvjYzv9kvyduP3xGzFJK4ZFv5oh68pGhm7E14fFGUnLpYNnsmF87UQzmoRkAkcQWoWGpAgcDVq57gLuvPHx3Pv",
  "key9": "3iwuxumBNtQXc3o8noe1rjQvEyvjaMydqDgMXhZRQqqeK3Y6VERtuLnfmxjhGPPXDNreNdVsDYyyPGcxEAtomuF7",
  "key10": "3fDsHX9zot1jXxLqPhRh3FJDoaW91ejzTPNs98CogsQqozNPyMvkMAWK77E9YJxp5PzgEqcRpYRs98oxeuHJyt6Q",
  "key11": "3nbR3g9JZdEzU8mQsTJT4M6AW3Noeqcbkop3exBzCBVQdmfAx72yLXHPNnVt89XMMgzqTFUJhukyWF6QuxvHmwAw",
  "key12": "2wck3nwy2g8epjFU85vxn8SZ4CwsDDXfGkmAHoJK6FcTk4L8dRfcyjfLaS7rHeKmNCHp4KxJbAEihSMqE4P6nzA8",
  "key13": "3krtXVU8fVVUqehnJwvmupoCCEnmUXNhUp3r3z3heBeacT4fx7gyx4oJipgDZTcQn3FjaPE3mbYhPLGSYJwR23y2",
  "key14": "2Jt5SFdWjVc1rmUd42dejtabD69fBth18qnpMiK2fSNdFLCVUYuyPERYdgH2zMZsLbF1pAyD3koagDpwmjBcjiXo",
  "key15": "51q5yH22k99txkpMpLTLT4oaqrUhtFCXwKEgU7EQvbN35LmneQhgzLG6qTT5SxzfpFMKbZnPamcCvRxu6dKfZFhJ",
  "key16": "2XTYyUjkKphE7NmNYyQiTPYrL2g8h7ExUHQbdxPDBEuKmc7eAjxjpLYa3cWvWTjMiDP1GvtVoBaVysfkVgDS3vi",
  "key17": "5VgByvggomDev2sBb6LKpXcv92dXaoTrtBvsZE44ieDSy2srsiiZpmoYLw6w2HZ9uqYabCRoqFcvgeGFgxtXv9dC",
  "key18": "2bZ1KNtVytX8Qrp5dfZvbsCWp9j9b4N89TfTMZvNVQs5u2HCqKmczsBHDSrtzNCaQk1QotC7S1kVsPzktKmgtTCc",
  "key19": "3Dn9qNv7D6vc9uqGeVoLBDkPqH8YD36TdDaFwhTmjGXzJSPMrSEK64w6sCv5EkAUyVj1ufurmBmDUjKFVWCnGWvt",
  "key20": "Ax7b6h3kDfAMHsFREYDRroqHc78YWoRKvJkwpQSgBudkyLXyrtCez9h6hBKMFBUs7K9Q55rbJzFvrwFFirYbRyS",
  "key21": "4WZ2FpuXihumzixT2dy2taw7mQjat54oSxdHgwDjuxPMYuNAKcAUvpTWifH1SSh6zSUDG6NyiR2pWsYf6rJePfqv",
  "key22": "2JNamemu21a55otqpwvrVeQan9BxRp6Dwnz6cs1Fa7M9S3nSGkuoghj2unBQZ9BdKkYyznxirtYP26ZWuxCB5pCp",
  "key23": "4j11q2y9HVxFonqzoC8N8yHMQ6KhoWBH7Cd6q5z9EsL7B2SBvkHGGkYuLgnuHYdZDMJmYPpxbHnpacaPxzuBaaEa",
  "key24": "4j3eCjk1WjjtZU765b5qMZVS1NDDuG7trkJrx6i67Xt2LneSKBtDJWqgzVPVzYqQxhh6YhctRpb56yZomEm3T3Bf",
  "key25": "4nSZwG8Q959bUDWPWY3kufSgUF6rL34BJHCudaaGQVuTrVVQoqjJXy9wXAKLRYGLf2B4PwCnsSrHypywC7sqazuo",
  "key26": "4Xv718ZFXLV4ttwsvDow1tNq2ZyjqkPzgUStWFfvJDSTkmDqx83yaiw3sBwLWfyUiEwa96PaMFGUgXJXaBLHBmZk",
  "key27": "4fs548hxpQDb7XuhLZNgUqTVdV9wCDWEGjwZGK7HNsc3nwJ8AL2YJBrUAdZmqF4K1pKk4dibLn46BG95H2oaGSVM",
  "key28": "4zsZjPV2f3Y89jbkcxvpj3PwVMEc23ExXGzgPHE1vwsowgvBAyU5zbvUBGyN4VKFtFtmp2hn8oc9XcM1C5A2grJr",
  "key29": "65XuYjaKn9zj5gp1pbPmH1F2kjh6roTMKPG1WFJzo7BzbSS4bcSs18BoZbJYnJmp6EyquY4jNrcNdmd5aKEGHVB4",
  "key30": "4HEgdLHJkjHJQT7Ze6k6PGZs6xKKMvJEXhzEgMo2bCx8S3brK3PvewrBF2voTSkzw53TPvqAdxiczaj4SKt4UDx5"
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
