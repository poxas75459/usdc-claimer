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
    "4ZC6EDaTLv84mfc2jzZFuSJQp7kBDHzzGymTx1Pz5Mjt5VKdGKzT86iMz3TDCcYWKizQqQrBfdgctJaqo4XbrTT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDaj6siue8rw7offFdS1uuRYbrAUxv6vM1GvqUmQzWSeSK6EFkozCJQSA75M1fDLNvhaMzYmhPFAuSAYcWVdArC",
  "key1": "3U2iXbhtXTN9W7ryejeL2tUHDomtjRAkfS1djVbdhN1JDe45p3fieXf5rgNez6DjVQBYsftH8wBQeEQk54UFBCKn",
  "key2": "4gFwhM8FrKnyfqUZ2Up9MsfpLCyBDSKCW51aE2ZdCoitcn9fUNzndyS8LVvDqhAcHQcpchC6Qhjmke6FhBxnSBes",
  "key3": "2rq8M3Gu7ym9MA7KX6DL4qTKWj5PHgefLHFN4MGncdA8ezcAxQ8AXR7t5ADsMNWFGyQ8fedn8q2spQJzxqPD45yY",
  "key4": "KFXn2jKhtseHjvA5oJEouUJ872UXUzF2QxsrXHCD6MuFfgoTex1dDpAMEA18mhkRewMMJbYC1zRAEuEf8eph8uy",
  "key5": "tFWxzSu55jPxggZCagytTLfvgwFu4ap8HH52E6X9YhcEXC9x5Z5aKuMvhzSBrnE8tawmeoNUFf45oqsWbvsNUkC",
  "key6": "4a9QU9Qmnc75dh7tMNaEoPZLb27bxA8C5vUzJTWHg32mkvFgvwrFWEzr8dYevKRkvdoQb2xYzdTtnCio6j4pvXp4",
  "key7": "3wj2G668atJ1ScLMSm5PT917oByzK1QTAXiVebxCigG4q7zU7phUbQhtYusCt78Wwhn8nxvt92VmWoAPXwrVFYHx",
  "key8": "58S7bFRDHpjT2HM5Q4A2WQ5FrFSyYf6FvTyU7TKVf9XoTazMacUnh6Bg6x4NX2dBrbWR8zSUvqWQmEWtb8da8kB2",
  "key9": "59DYWEBznR1RzKFqEQCqGwU4eL44KQnarm6hkZL48xGWvfwuTK3jJBMhiSUYnEfY34Rc7FNHGwGwf2B84iZZh8Xx",
  "key10": "65p5m26yur4XyBAhFKSjP48PySQ7xH47EmzJmR26oxo6N57gzaiKLBB4LdmQG3YVEB28Xg4Udiy7zvsN8fxfBkS8",
  "key11": "mANBsQy8muuWVwaThQodHtK1x9eD2bipBu9XrAF4ZEViTuV89GgWAqNFvkFUJhub9oJb8Fvc1HLSPwV2XZ72Ssm",
  "key12": "sH3gAzt8dZdroxUwtYcMzmX6d7aQYwXmvBfrWgqsvJKWnzhwqDjCTLr8CNw7CMRARkFK7F1kBq1S9KKpYjerGk6",
  "key13": "2pJcoShkPtL4FxjcoUJw8UdYdYBZRGSebzEZz2LNYhVoJcvPwyXef7GFfgWACdExBSxPhmJMNYfZGjyoMUT1hSb6",
  "key14": "2D1K5oCNnVVwkfmjKvJ1RwzhD8hZ7kvWAHEMbMctbewEkx5fAwBYWVF4pQCn2AYKmVEeYNdoEMKQEqhkJzCaHAfb",
  "key15": "4j7WqUEYi2skcrUxb8xrDCorPXaqaBrU4Vm7MDhBueuKe7peydy97pPihAich1KEgSM7tPMdWy7GhdXh6BqeqxZV",
  "key16": "8j4JGrAmoCWGnRcMnSQswtByvfaNMhUaTRXngfQAnjq15t9pNhj5RBK1tFAvzy4xVQ4ZP8JUd1Hgr8NJJbX9FqJ",
  "key17": "3KiLrkDt21q6kj3yJHE85BrSzvB9ZReJZ4YeeNG4pJat8BjRxkv9XNmvQawsV5znUJU7h8CpGVytrDDzUJLcQfsT",
  "key18": "5WSJkYgu2f6Z8kqkXPrU9uQhafCdsK6awHBB5vfftHTpNg5NsDjpvdeMs8r37XpHW3LWk7wxnPvqjt7hJQsfCDf6",
  "key19": "4bqn9KUDuJEd5pENr1CQydDL7CidTMiGL2hdJoQdY4JagAxPCecJgH1sTK5o2SyJPKoCbNRBUrGwSu9NDvAb2HoU",
  "key20": "4EMNKQjoA92zccj9mofw7rmYy4bdaSQaJfH6nJgys3HYt4XXnKCSMFJgSQ8meayaKW1qNbTaKxKJKLLcWR3W41NM",
  "key21": "3SXaCJ1MTDhj5x7QAUx6efNao4J1DcxstFQiySj4ceNSfhzjrTmCW4s4k7Ve1gwRKhDiWB28CbUqwqpt7JQu9s2X",
  "key22": "2Bid4Xb8xn1LD9TbiypvfH58GWogz5thzpURWsWow28shCcXEYUn7zxJRXEPB58x6iNWsYKjSh5J3jrsjTAyGz7j",
  "key23": "5ftm88HbYMqDCk1QBSs8yU81gu8jksdFUkqdCsLRjDpVRCZmBoqnGmCw9iQkF7edoSGmHVjcz6v9NJFPLdeU3GhG",
  "key24": "2wytkGsXvkwtgx1svhMPpxbxYZohrRc5vtscCY359C6vD94Z9beNg7Jdw7DS6doj8sZC5a3qRkP9kFbUpA6Yn7Z1",
  "key25": "5pTW45WYti4XYS8i8UdsC2R2GHPdHH2mhPoxUJyyCtaHRmJUawL4JhS7hSjoVfodVdeeEVe3RrZmDT2XVdkb6UJv",
  "key26": "hVT8ytKzFcxjaZMsGcEMHRA3KDSBq8oYSia8ZVEKpLFhq3nZ5U94ghq5LbGEZQzxCiwhKVLL8cY2MknqEZA4SqN",
  "key27": "58CtFWPmg75VR88WUgT3KRVYEEcQrep9CB5Qpcp198HBF95Emajhf11dPwguaU81z2szWo7dVSJxLn5ut3jUJT36",
  "key28": "2gQE1EHPSt5YhfAo6apqN2GzB37tLX33vc1o3LKnBDE1uDKy5wMFkNHhqxTab49F1fQ2h51czDyjQbevTC7quYz5",
  "key29": "4jhnhpqCP7VRZusAapFanXLTuaqztF8aooYf8bCAa9XBc9A9Q5oV2bNnxmQQEBFs2y9rqg3EpYPYjwSbm2hG5voT"
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
