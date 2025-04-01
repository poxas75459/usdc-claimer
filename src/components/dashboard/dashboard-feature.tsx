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
    "3kJLN8XFypBYC2e259ttLzynArsitisEy896CV1669YGQ85QtW9XrFQcMhWB25Ak7VF4QqmSrAhUJYAMPSeaWjxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uq9RwCakT4xQhm7u9KC51GS8cT36YUmBpkmE8sQFefu9jW5jVBQWYtdkZYVxwNzm6uiW4RuvpX7STrJVzxUaVwM",
  "key1": "2MyVYdTMYJKmtTPLj6jxSrvnMqmnt8k4VqppJYWex2hzGQTxxj8M36uLGsHVVvRaC6vMePd8eenzHooV4Lw15jnN",
  "key2": "2tpxzhWuft1odg5DwH1PY4LnWLqTPgNvd526YAuDudupMYBPZYSXED5iBPpo3UXeD7MdSGBj3AkyWrEUnuXP7MUv",
  "key3": "2V4h1am1EyokRjw2fyPSMQXcdB6SDj1fXc89y7ugtWuwR2KJKdEoghfB5ss5pjy6x2WvbdrT2xGJCtD5YcTCeyQm",
  "key4": "2aVJxQMHMLLG4frC8o6MxKVeB3bQcbbQvroaweEHCF6eHMySasN3BjAbHDSMLzkGzgESrqpVSpVMXeQ9sXtCPGMu",
  "key5": "Gp4KWcqvk8855xuevMTmAr7RPxZE2u9aAybX7S6v7aXi7RMiSZ79cczRxtFWWDfyioyrPwaBMXFg7TP1Ce8AgQy",
  "key6": "2Ptj4aJqwnC335oHVHqRn3HkXT4CEvYq4VRG2FfiXhbw5MGL98WprYpefGLGtxbKtNNsbJyaFkSMdKSEnKKx7CQ",
  "key7": "4xpNtKp23hN8gMVE1mZfpDkYSnJuDNcj6kKY4DXWh6CbxuEwXkveREXhDjWYdL7Byf5oZKuoV8fMojwk8c21qkRe",
  "key8": "2R3Lb6PvWQ8CjZ884XekkhtNmD7yD9cE95yRY7Q3eb4aq9gHJJ1aQb7iU3bXQJah3WEZBTvqmgBu8BDdZ1z847TJ",
  "key9": "2CaA8cGfHEsdowsk1e55Ly7iFenwFcBoRKGfGJyESYa9CarCWtTk1jHnoV28CMYume6mzf1Vnpb4X8vDAHF38m1u",
  "key10": "5W9iX4EUBy1nE91ijPYn9MMaNcdp4KuTAuJvJ8EvtycRR8Z2JnxZ13LgBvR9FXnbmy6bVh9ArRrp9rTmtKh4yUJ1",
  "key11": "2vNLxqDze4UoUFFD8s9o7xDjExUy8auUQiJDepEaJ6oKnjU8mv75ro6stfb2X3HK5EzKSrf4zSCoZnE5Urm1Dy7H",
  "key12": "4XuKSfXpBUjiK6ySUDoUZh8FBBFiqkcWyFtrBjd4YUycwvMweFbgn22VuXBdjGuLDRee3V8sb3kb1w4MpxC8awoq",
  "key13": "52NutbV9BW8yDos8XXmQD4Ck7L63u2Yj5BUi8vUhXY1AvCAKAt5xYjdFgLNTrVSHBsfBBKhK6YrMaZigTVatPcLo",
  "key14": "5xoLE8a4Pn3bhKJjag4LAooJvWf6yNDPbKyey2P2tUybBwfg3Jqqhs9AtcZpUzmpLK9rYUNB8GDtUNYFH1Jq1vrN",
  "key15": "D8VUQxF9voL2PQzwe285Da1ZNqf1ZFNZzayJQehZ9ZZQNMAeNbM1Qhgq3rm6dHqDAjTqfHxhNyDiKqEvCCURg35",
  "key16": "cKFE54CiD1cWt9GuinnuVuRkwPPd7gRA8k5b4AfZq8rAnoXAsQMuiVKWADkpezRVsK5U1JZYvbyanWjFNYP4Tgc",
  "key17": "5iRAZ52VZunHtcg2BTEzcbbt9mDTs67s5eyxuDTHmY43GCgc2Abdo6WVWxsgCRG6u7TReuqqvRsLD3DtBNzh4wgZ",
  "key18": "5fhUNHxWSNULBnphDVsDAzjEzb179DpEmq1Msy5fb2JYsgR7wVz6TBbM5txc4cUiQmH5AfmWL5Bh6aQL5P1o9Def",
  "key19": "3BC9tiG5oW8mLSbdePkGFQg91rtabkhHf7KxNJBKM1YXKTzdsFaBtDP6BwmNv7sZQ4Hod2e4VSWZjv3TenT7WUzZ",
  "key20": "4Yu2jisCs5RvjHSnnnKm8oAb6A75oySZS892hjMaPqgdvvc7m4opETm3XmUswboWHcTSLGKkBryGmcbr9xzXK3Dq",
  "key21": "2NFMt2aHTgNqqgSs3TinW57qPTpX5TjPZ3aPdMpKVvDVEiL6TdheAfNxJym8GJ5WepqgAZtb1CSvr9E6ooiEsAxS",
  "key22": "5HzH19v6DPzDbTJc3w6Kfrbz2MpboRQBYjAWTRRUaefiNSaH3nMrWSK466AAAZzGqpTinDojW7t8bvRT1RBiobgv",
  "key23": "5G8DJKXB23c8yDgQzeKdgzrXwQk1CJ3QCvJgnm6VZHUmwjrifRPyzu3ocfQFLx6LwbbUPJjCGXcMYzSJjNjr2sEx",
  "key24": "4MBo8PWaQNFG7zLW8nMsfUWFVjd8tp9bnfhqwCgSDPY8RkSJLbXmhPMHBE9dhHDdN7VR3tvrNNizF5dXzwSej4DQ",
  "key25": "3pcriRUhAzccSpDK9GLgJPCAinyiQCqg1Ek3fehvd4erBozQsgZqG7fgxeRgViXjp9Fm654HaENLDrq6J25WLT1d",
  "key26": "3jvZbTyh8UXd2JRN1TsyJ6U8sJY7xiDA6ULZ4enMmwH9Lb7aa5krqa15Zi2rQfpj9g6Q8AidoSh2tixyK5a3SY2G"
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
