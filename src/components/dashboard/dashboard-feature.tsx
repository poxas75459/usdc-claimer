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
    "iFuVobvL7cHzgxW5EzXzsspzQpDDckFvRrgoC9wKYFAaoJNp8FPn7shc2EnuDz6NLr2P5PvuiztR6rL6XRPhqmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EA9qBZfZ1RimGbxAD25GqDTh9jrDtu9bacUG65qKuFKvBTazTkXuhR2XHeDHpxZhrcDKAf8N4tzm4qecaomojy3",
  "key1": "311YZc5CgW1VfcCgBJjQNezcn5EiLH56QHmoy78TDThvCiKbhH7jzRKMdDKt3T4aVh4Zt3ZEudCR2aD8xESG9UXu",
  "key2": "2Xp5vqd99fUkCLKtaP1mz1NXncYyTs9qwP1jQsBsBqJUsigW21ChvGp3VW1fNM8ZZB28YHD6xh2YthYqVSt7jiXV",
  "key3": "3yF7iZSeiHyBYo3c64DRqnFdDWXuHuQwmCXH3xVMjtu6nUxbajJb7PTEoPB1TsbttQFzXCyBVaSkQNBXEGNJe8nF",
  "key4": "2g3zrec3sorVbz6PDzRHPgEw4gtQBaWD6ntD4vKYLZG9SzzsrS4cq2L5UmBTD5mwzzjVp12CgwEB5NihRe7MDuvh",
  "key5": "25dLx3JZGBA8xyKd6XMf1xQAVeqxA5YUVJA9XmWD5mkBsdgBoU31N9HneWaafjDAsEPWU1XfvmrVpVN1JJ7pihXR",
  "key6": "2iNAGCnG5h961tKfKvGs1H7EPhQZ6GDY1XL1UCcQa1JifuEZC2jY5LVQsdZysVPYNXemP68uqGrSYxvncwRkZfYw",
  "key7": "29McFHANAUiJGY4KGL927R2rLLa3ifmvYVp6bAmHqHBjpFGviB7K37arPHhRUViTiQwvA61KYqQhjewk4xuEwMit",
  "key8": "4gmtRc4J9oMXn2ZHukCjkXZjCq9vQkBwJpNqLN3wqGbwrfpsdcDyJvC1h8kPwsYnLVdiHUvCLvuerRb7gA1bjU2L",
  "key9": "SxALAjaeMZKBAmaJQsefzEBuAAtzsbLNrmVFAgfBosJRa7mjUzSATA31NB2TKXiZRMyFvrKEKNcnU7NWcJ8HmfG",
  "key10": "56eHBF3S2NL18bu7HgGXg3dSbUNSGDyMr1HTyCKNV74FMGHFijzywq5h4QMfY6TtphMXToDK4RgKUV3cuZaZCoJq",
  "key11": "3W1vWGffAQAok6ucLkAj6n8F8G9jdXfJrSp76KuNaL1ARTLnMj9JqpkU7uBPpgwmfHHcPNCFjFmp1PTrPfS9SpUs",
  "key12": "Re3ECJAwBSKiysxvyXaj6FkEyugqgVwskmEQ9AmX2spcsorZJ35kADpz7G2HkVnzxEVEduvFfd6rWnaNnX5Lk9N",
  "key13": "5nmmwGqqesZ2AUzJ8CFtF56pUX7dWh22w5SS8iiCRsGxH7gFLKhXywHAstJ4tv9FvA2ejJUw1NKfqwpBYEDwXNEK",
  "key14": "3gi4BWHmvY75577fEMz9XDMQqgTZNwBvJMqE656C9ipV9mPfjv4kZ3ihsfHTFD13v6rufKVa3RW4LoFak3HWUf3X",
  "key15": "2Kg2tvDaQky1oFWcdQGFipqqEvbfuDdfKRzRgqHPwcSxT4PzekffhKcSM7D9FGSXc7TXuJUBuGKWgoXVmLLfKpKi",
  "key16": "FGH4goumhBW8stDhG4LyP9B6JfrNXvhjEjcmjrzMKs2QGRZBvwwt6oqu2crRejhJVcZHe6p9KA6iaZFFBKuHTao",
  "key17": "58auFY8mte7c7ma72etQ85w38KMTz4EX5ttgDBvKGoWNTNE6UnCGnYZc88FACPqDso8WfMQsEWEj4k4CyzpAyq2f",
  "key18": "4trukbHzGK5SCmmMJF1W2Fj6bNn4zbcqHkuLsji1NFX6j3kzLZHfm91vsDvCzvVtBxSKHZJZhNiLzZdxxG5pddq",
  "key19": "vn1VUqmWgqkPreCR91tQ68eKXArxsZn59WFhtzzFLweKYcqUUoCWDGii62qjN371UeGguvFAPtd1B4drhQuxif9",
  "key20": "7f9k7tK7XGdWkoSh9kiwiwiWkvydGw5ttvHMU2MGJeuJcCuPRwgt8DzVgbH7soyqXUgu9QoDJJsKencyR6oB2Dt",
  "key21": "QVTgdhPFTGV8ywCo3og19PAPcKxpTARPYT7ZFHAoeTzmmwSTFypJtbxk73x61XiVWyyhihWGhCdkwnCMqDfjm7o",
  "key22": "ZAMEmrobKYGd1oMgnJ5PvRvM5KwxWmcWhDx5sLk95oxHDMdbdiecrF5AtPm2NbXTTiy1y7Q7XjDgqLF9x5Ck8py",
  "key23": "31n343Rq2JKh6ddstWPjvF6qp2pGFFCmXS4bCcXaZE9btrtMRRzDHoszYrNKjT5g8PqevvfXcGaXzuxzwQQ98rJb",
  "key24": "47fFUgJnHCU73ZupnL11YjmUxaTxGzoWr6Sgt9YhRBzi6ZG6rzS87o9mj79Ut3UVEC5rmPGfUhjrJG2g3ZcBjuEQ",
  "key25": "3qeyHRZpZayd6HvsY7u91d4dyxqTYim599p8Y2hffM8vmqtxnfXseLJx7sxRRTGyfd8Qc8JpopWEwLQX2gRszHEt",
  "key26": "3hZunAEen8uGzuwMvGZkmaUhGU7e6sHArCfct6SqmzY7bo2yt9AFiXZGrqxkAxyt4VifHDKAoB56gAwGXhkZQDXv",
  "key27": "5sNqBBRxxt5kkL8o5ZQ43t1Q1G2Fc4LaafST9uPJEBaXVYY7FkGKFXRk6kXzApBTJwdAeigaxTS791qaMHPrBk9S",
  "key28": "4ShCbNZ7B9V7TQVzaCMWcj5CthewoBikwvoGP7ZZPt6C7fQdLn1QQjD5sSPynWa9Zm7KvpHALPy3tkWP9QxPAMiR"
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
