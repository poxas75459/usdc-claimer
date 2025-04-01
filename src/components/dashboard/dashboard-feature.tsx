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
    "4Qc2d9P3Lz8gArhTRNzsNyucx2KZpeTKRWT8CevuCqojuJnyjvqrccRWREh6sogEJS8vAdERVBzckPEnJkFcpnUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veZZwoCH3yGMmZwey3fmeHRvvfmEzc4y2SZ3jvKNAobL5xHYAZB9pqKpt1bjsUbgYFSw34UvHazn3jcUbswhUbK",
  "key1": "5UGCM944DYdq2dXdqh5SfuduYUP1bmD3qnrgRVKNauG7F6HxXGwK97YfebT3CWXeCc4m3Rx45vtmKf9xjERxzNew",
  "key2": "5AvtBhXHEUdQM1ipeBcp4w6mJ6WnKpMWd9SHjR7Y7CgCF5eZeajq65rj1ymUkDhUFhwdvef1ce4xtkWrDGkqSsTj",
  "key3": "3VDzeiWVAfBbGbYxBr6bm8Fz4yyr5udJWy92tGXpySRTcCVBVRpwGnSyjuqvAPMhgWMQyvgcPiw8FV83KrWXivKf",
  "key4": "4Wb7qxrvhAhsVAuvLsjVn9GviBktei2KgfsP2vB4E8gmJbodpyqS8PyLLvZdama9nPMm9JmzcqKEkM3F8C31rPm7",
  "key5": "5FMDi4yusG7tndRhZqqdjnuLtPAGHDtP5aHxHTA4JeUBsh1SiGvK7UWzN9hn1pzEawMyDAuK6BNwKq8C1GABQmQj",
  "key6": "4iv6G2NDWzf7dH1dzKqzTdLX3GxPuqFKPxmeZJD6butrVRCCdArFQR8uCaPiDubcWo4hz3NkmMS1u2VCEV3W5gtt",
  "key7": "33TAsEN2zYJCaU3hu3BFDbhWm6U4FxLsSApu5SuPRjB3aMQGyPMu2FGyYo3GEauvc2zuMsFwZbqTEotFqCJfKNi5",
  "key8": "4Fp6FZW9ot8a3UaU5bRiA5kaAwLxyQ85dXTzKQikm2Bn9wohDC5dujtPHYGZTQhN9NhP73QgQqPdezsdiurSmTnK",
  "key9": "pz8ZbSkyGAiBK3kodTCSfkvojARAyQxvt6amhLgz73XcqQa5cyfYwX7EQLefViQmtZmTPH3h34q6siphzuSWZGm",
  "key10": "3UCtdeGEiiAt7bZkTJsBEBbdw2qn7jyNGJuhS5j4KcTJ7PGQP8ANAQnb4xsqDZKdv1VYz9qqHGu8dJDwG855rMXe",
  "key11": "3dorDTnZTmVALyDfKEJfHqu2WUTgizjF7Yd2SwbsriDwSow2hGYGpJAAsXa6BRskBFZ9UKnGqoWK3hN3oxbnwNEP",
  "key12": "XLG9WHQtz3DADvKpzhgLWoYXjHxMg6Sqs7WVn8zNeRP1b66gXV83yXDKzgWpF6wvYv6wQGFU2zBhHaYFxmdoc7m",
  "key13": "PzzyGYWqiSLFxkdWM7mZaEq3xCzrtsMW2RfLHaGrYAzWKxBwpbNHSeshJdey85byr3AtceyKBmeV1JLtgSwPJ71",
  "key14": "45Xeqc49Lz9JQ6WbHZjv2PBqfndAPrQe7whz99uX18jb2tcBcRGoUaKEQuM61ioH2LvE3vis5C7x3po89u8VmZVq",
  "key15": "22AViQ1Fxqy7e4WyKvRYEmhzQVyW1TEt6YktQhZWd968Uzn5FpmgkQcwrQoC4QmseQR54AfCaA64nTdArpo2GRZ4",
  "key16": "3U12GJNGBtWFkrdvQJHBoZcuqRrWKfiMEXAhAT7LJDwvh1pJr7YwNdjpoxrMMLNvhwpDpSZmr66XyF1BdHTnmQmb",
  "key17": "476PHs768ReHCrsrTShKam88hYth4jwQCy8GGW4URstTUjuRE8Bmbq7PvtXTr2RjuYXy5rgg11WTRcz3WBmpduxx",
  "key18": "2mTnLzMc9DHELdDgWr2WC3RNYVEgsd3SC3awcXrirVx2PWrhHT5QWLcU2SXmCatchG2s4qFrsSGZSdCyAzf9A7EG",
  "key19": "3i8TkfCvfYhua9Biww9mMsh4YQtkwysKuULcVc3BJJoG7fPpbBjrShTNjayp1qcrNBK6DafviDJhNe1nosx6DzJm",
  "key20": "3kDkyjSzsrikTTa7BCv4PR2zGVisj3oy6br3wpDNzs8oWVevnARzUXSVvD1ZGqtbw6CjA5fXVUTP6k9wu37Dg2AM",
  "key21": "5Djs4nFiHafkbRWzMuLpYFypqDrsz1Kp32HFgtTEagwrp2EypVAHF2zngy2n9reKMtpT6spdcrSGGLY2ATCujcwU",
  "key22": "3A7hLy2uoMes1mvaQrMWm8sgaiETXjZmnUcyRKm3kgkU6cMXBAZ642zKiR7crqPF8amz6REK3sJnar8kwXT3gicU",
  "key23": "43BuoAjW2cjKEf9XAfoJBk2yDiFTwXrEom9PMJ15mKYqktw5FnFxj6JU55eopwaNR57TtvkZ1iDoanuN7LXcrNwF",
  "key24": "2f6j5sHwoiAWmJcqKbCnSN7bhYpQHpny9NvJDRAiBCaP9tb9PAvakUZKDHxQ9T27ZtSTUyd3HKKoDZaJfd2RtmDG",
  "key25": "2ZGgBi7UtLreJ9zCdUDaZ7dTFEhtjds86GhhgwBgshUeLRDvCMFvG1pevQFXt6YP465Fp3PyfK2i3HxgSYQVz6DS",
  "key26": "34qTZPnhtKqYKoqeKoKp5FXihu8oA8mKF938fcVbz4eBwNUs5BCbHAhUZV7Us2WDT89LJ87bvEJVXFe5qM8sJZqk",
  "key27": "2fzEYy2pdf5EwvELkPWPs7EFeNrhdwEsHFDqLoT8H3VroRSTdGuSRKpmJB8vTMhcY5ddW4uTJW5ULvU8wQiDubbF",
  "key28": "31oPSaVens4e8DRajnuK6X1GCu8KX24mYA5uQYoPD8ABnxZJfGvmMCvt5fDPU84j73LJF7fV39f84MASGMuWQmPU",
  "key29": "57rhdrLje1QohwatFx3LWrBrDsTLSiyV6escn9pjAAozbmzXoatRcoQNCkvjk6kAZNkUQLwEuUg1Jan7VVvtRPtF",
  "key30": "2mY3dgqSSqfiZ1LcF63jXxckKShTV6rWPEBuK4CAuUVhGmak9qvbKP8SBiVLUVQn2pS6nboHFm6cEe8QAZ9NAy9U"
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
