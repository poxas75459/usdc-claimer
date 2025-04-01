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
    "48SLTAB4RrNyWLCNvjQBUY8YNu73b8gobi7z3jTHiGFLuQ8GT6jNyZPvMrrvsPEf2aavV28v8wjXUwUXp4F6J8ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odS544yGHBKHNgUrWms3CrqbJ6qkSTL78aS4tFR4nbyEaqqesNcwnSiWnRtbUFmXHd3QeiSJnAZJt3NJniPb4XX",
  "key1": "2NBmtcS5xGq1ZnTxVaoaWipferbeXPKbjPouVgEcaUjNBKD7DDgC2TkoqFsqTq7XKLDYVwW6nTa3x2g4WrB8eq28",
  "key2": "3Uvb7EmB6AupDyPssx2txaYa651VM91jJWVuVNjEuyL7PYQX27dHArRTDC3tqv2M58sDwZKNn59da7hb125hjsmk",
  "key3": "2bFNTtwEFSkUSgYwtE8BgyJzarV9Kd6MR6zaxvbaagmvq3rBoLByEPZwY6CkJ9QsoGQHnkwggRCJTdaHzadoxy83",
  "key4": "4z6rJHLft6wrEQFj97pZ55mHaz5JJ7bRzjDxzSBneqVugyhaWbeNGM7xf2u24BGE4VgL7cnh8E25onVSzXZVdBMJ",
  "key5": "5ScJ68m1ffJ19k6cpHXT4HR6ZzssaCMaMHwQ9f4iyZ5HDCiYei9uJxa4pwBWKmxsURfdpae633BfEu4uRQTM3qd9",
  "key6": "62EF1Ta7g7MngL1viz84N7baQTEUCykPsaxGRPCJo4kW8NKbjmkB3GvxcU3M6avB7WC3veybVxkRsFWCSXLboe5z",
  "key7": "4avEZHgj8JvEPBadGUwkZgAH57k4rAgQGGEFdMPX457GnyxKPQhCQrADVXMqADQ47R1KpdgTDTjWfwWDT9EWoyiP",
  "key8": "rvJRbbLEQcoAK1gKXpXH47QVkwdhXNmcoJmPufW6r3eUZhSNxY9oBmBExHvXHqSZsdJRaVjCf6ft8tMzPtteNHZ",
  "key9": "3yf5vM3hCYLUaVdYBDFx2amFWfd9MKCh7M97CEkYfxXCo17KFNBTtp1jfLQdKfxDUFTwedEX4A9icer3n9Cvehyt",
  "key10": "2j8vN9jrbr8MPMVUR9zWsUL2V5DCiAKCN6zjrtoFJbBGCeQpvkRsyU3fXGinZcybpsgMj6t4Hk4VrKPR7DzdLheD",
  "key11": "5j4Fep4ku4QRvhzhPwHGkN9Kr1u2owYyiTcytKddoRg4dhtmbHodqmxSUw1A8vEit6tUvHLRcVR7Ge7Mo781mqup",
  "key12": "3CRimQfjHkGkz5T6NqB5gYtWUrMXHa3LQmJbraVLfu5ZMpz4K1Dv6xvmHPYR7ZGHc6Ztp9FD1dV8DpKvJFuy7DEh",
  "key13": "2u1tjFMkwsUSvWa3K4sjhP5gAMYrTbU9vjR5tej8MhyZSN3GHzrgo5vp2D8RBPgAh4SkwzRxVRCincWffAjbdfsB",
  "key14": "2bTr25MVL2u3XzNPZdZfa9abonKCg9dBQjfspz5jTp6YkzX7jE6dcLYoQusw1RfosQEzhByfN3nCZEMZTSgBpZji",
  "key15": "67EMBY4zTExS8Lm17ELJUNejosZVJyEpjdT5GkTXpi6vPmLPVavSWWifWdswdBNyrC9mcBXmsQdKz5VNyFTKyVX4",
  "key16": "Pwdp7jFJ7r3dewdRSzX1rdmjYttrwQsPRgfZVsSzzekx48qUaHLMMEEJEv1JLf9NwgfqAXNZQgwommzNSi4YTbw",
  "key17": "4XtsCMRZxwKL9F1iu5LhsKxQrWv5rVUtpyH1JQKwGrFgQMx7F8Lgehum4b2Uok2bjuemio5F4bQJRtb5Kt84Ehbh",
  "key18": "QFa4kNgwBDAWegiE6HgLRxi2dq44BnmVq9KanhX7ruMdNcgFQmqq6LFXVttH6EMqXk5veTY9evVW8nvYavqdvV6",
  "key19": "5RWHYuW8BRatoDmpFRnW772BQJiCFNvtDLaLnJ3XKC6VJYCrGTQiWurfEwKC8Vzsxr6qS3zsprzcb3VwDgFkbx3t",
  "key20": "5XbxsFZfRRfCPf3X41PEyW9JRr1sVy5dB17vPh886aQfG526xLXG8gcpybHYFumhBpi8w9i4r5br2UJ9miZ6cc2g",
  "key21": "4hC7k7hZAWx7NNHfqoDD8jsEBCxGkPCsTjbu413ikRwX9AFfShVkTx5sMjNDBYpFT5DGwns3HfQQKhoL1rYwwkBc",
  "key22": "3Qw4h61rmGbAuV1FBwejkCF8vgxfkhre5au6fS8cZ7ykdpXTiJQq4VpaaJi8ScvspzcPUMHQcMpi3gD1Ah1Nwvp9",
  "key23": "jgHZnK6ZXqPXY72DqNVku5dVHf9jbweAJsAmQwmCuuFf2N5zmSTZH3tHxpAHBb6KsXwwWkMNYUsS98z27gyUsn2",
  "key24": "3E7xWbC9vcf1oXGwuPT1jnmbRfM2cmzLooAoH9UNybgoJHnnxTQKjwVx7qEJdUrkw7H2UZdxpwmpUipEqMGmV8Y9",
  "key25": "2nwqbhA4DYZiFDeCpeYQC9mj71dgdwJLXJbF5hpCgKUSNNyJz2i6FEp79t1SLcCzaejiTHtTzvjfyV184M2LnfgY",
  "key26": "A6vnQDhjcHKmMcUMDHyZ1AESECAYLaq6aknZF9pbFp3Ms7jEmYopcYXUnY7VaiCFteKX3U3vAaoxAb9uwQB5PDp",
  "key27": "JFWGE8tffgn5dwY6rLL5RaqSUpk8V1PKCpPoy7H18gGJaiH2jLHmYhXchUCZXEQc7F1KwhsxmkWUQWkt3QhMarm",
  "key28": "3UFo52XoNUnB2yZmyRsBci9FHwU3Hyran85tGeF42hMpLTXCBKvmshRJBaFXpfVVmtGSJSjmE7juQJxjuX4eLfxg",
  "key29": "5bGrEk5j9arjhrXQkuxkKnGapPRvD15L2iGThKCuY7nTeKUoQCT5iusnUwCvTXXqVhcaCKGpgt9pKQ51yCz4jCYX",
  "key30": "2GY5tS2zZNckxhik1YKVKLvG3FDBsXLn1FxvRZ57u9WLZfbimMkn8xJM4cgPqfsHKgpofUaHpWShC2MGKJ3gp9tp"
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
