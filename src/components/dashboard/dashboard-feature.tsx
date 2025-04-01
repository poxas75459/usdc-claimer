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
    "2m4LQxEiq7Cswr5z4pgjnUKKSJwbdg9bjR6tQm1haqefYFpXrSXc6qqVmp2CV3yV8rVHukCQNHX4KnmfhAiHquz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T96uufVN1Db4EGqWqaR4KF2NcxM5stMurt9ZXuHXGGsRLY3wGSSYevN78ny9Gns88yMzFgV7vu2ynoAwFFfVPk9",
  "key1": "efniz9oVWBLvFhLPFBYJ56iHBoM9YdhZann3w7jzWL8XSjqwNnfc3Cdc1rnxj8HexYjyMJR3sHtnWgheiPpLBDc",
  "key2": "uQTKRayRBC8fSrPuFkvBR8VoSZwCac64BdamwhUVmBo92L7Dd7Mnt9fGcaxf6c8Xkd2512p4NgFDnYVR5HA4hNh",
  "key3": "yDY2uhPe8hteQHYHvGkF3vbnxXzaNcTUhJh1giao7BqzUKjwTrTEk6HvDqbVMgcum1FGHwhMbhVM3t25EBi6GDD",
  "key4": "3fKFAy8HQdXVWq8eQqdyzgjLPeuLvRFgAGJ29yMF2Yj2cb9i5jF9iNREGXxpMRP4AxREUutmaj6P9Yb1KwAUKXGc",
  "key5": "QyuFcXjg2BXiCkJmPfgBL4tHRoF9bMdQQhJk9bk4NjdoX31RgZ8DEFwAdteR5Bw2CejdQQXziTzHbLJx5G33CFw",
  "key6": "5T1aiotZBqrgPYB8BVpj4i1JUtKnHYnGU1PcGLq6L8uNqQxZRDJZV2CxV6aWRY81N9PQkUen7yqDqfqp7M3j5Lg9",
  "key7": "3H7nq5S3si7uFbW81PjJK7HDTRJHV3guFSQuRcaBTmFdNAbZx485pcW8fUXhagniFs7reTuQ3o6YSasHADRU4pBA",
  "key8": "5J8GGYebPDhJ72t2hLGyxsViiykZ8sDJ8BgAy2LZxHKw9YXCdYMW2jpaXL7HV3Rx7jmfHWZEmByTeCMevBHcEESs",
  "key9": "4DPFPemGcqF3bxA3AVKmudLZF6Y8SZNZukQkGzRz6Ty58EjyhBoajpvhT4NNZtNVM2DYfKSAKMkfVcWUtFnAwa1m",
  "key10": "YEPeLwrydqXHhKUQ6qAYqy2METV2vCpdDvGn1XntXLgxNwj6dgJwg6jEmEKnrbd62ea4BwZHvdyvnRy6WRTxG9w",
  "key11": "5m8xEVMgBw6b8F1nX49uDUXJLWELgXiEtDuSfykpTNUaFJHnRW7YTTe3oDNSwKnfHSYvBfuybw3rY33xwMsj84Eh",
  "key12": "54PpbbeSBwErp7sdj8KK4EVqDuWKeWqGt8Wp8n1v7THskFdsUvjbiJrQuZPjM3PgTjzwDCzcReTQjArSJTbxW2kx",
  "key13": "3nRtqm3yWaVa3GeFQgvMp4KNfJgM9MN5MhsLDp1moAkkj5PVuEmjkGRmPu6GDRu1wdb52t6bNarePGM2e92hxiQC",
  "key14": "4vPuHEwdSejhYf8YBAj9d5JFqbFBJMf8mC1cZoDxw9LXhma74KE26jcGnKMAhK1BoaZHHXqqrtpHR5w3CxVcdx7c",
  "key15": "n5wdjWQj6zmH8tSz2WH9Md8vhwT1MUkiFoKgANQPmyAvf8PV26K3Cv45ujniEmC8s12LT9ZGGHEM7qzQuomG7TG",
  "key16": "5GwJEwAyk9cKCDBd7R6fDoX6uiATEhGcVNAw49QAxzJKheJ6f2ZS3a4ZBRubvCN7pcQoFB6VveUmwPXTFdJ6egcL",
  "key17": "4b1WB9ZjL7KgcbxJYjCbdr5uskh1c3wxsDdoshxH2yWwpvowyVaTAe7MKWA11SgzaDcy9q9tNYWFT4JsQARMCPEN",
  "key18": "5YvqeepG2j6XUfD8vDiwEwUUyZBvFN9D4GzGqc39dGpAvcbaSD9HQizFXemRPjCZr7NJNoVtULXx5dPt2z1vcnAF",
  "key19": "5tRLyAG5xA25AwhdWabHP7rzt96s2kMD9dazXaMf8HLodLTJighAWc4gV17SCunVLyBhBcYUpTJQLRhXowyfrDQU",
  "key20": "3t3FnVxJJ2FKD1VaRWmJ3xdzXYugzXfdvzwaUdoFpPpxwzBcfzdtMamWsh2yk4iSKmxKAPch8Pnes4Ngdpo9Eyjj",
  "key21": "2br8hHR3e4WYwgqxXkZ3XdWhdPTuJziCjHijhb5ENbGC1YWMkwASySphejMz99kipskMaDnpCX2Lfou62dKG1he3",
  "key22": "5RX4kPxv6xHBXekf3QJWXtxH2MHcYgYHqXvQydCzLXzsufK5SDqxyH9TsR1gbYLarYs7p6Eh3KCNP3yRVZ7uKoFu",
  "key23": "3BPnutd1yw6LjarpLTW7EX28kjnvDVygA1gsWvLqrQoBLkwBEHWbMA7XwEbR7nXo6G5Nt5EhQN7eWtr6qcGiAM6Z",
  "key24": "57NjYxZ7BykRjQrYr77vAE4pYqC7h5eUnZ3fgy6h56cQsQrgD64ZQs6xwSPTxyFgqx1xyY5gMwYkwGk6ok7VpRoe",
  "key25": "3r6idku6dypEdkR8FTs8PxbCRzCUrY1AfmeBivTSRakgg71KHu8gdbftNnuuvh2TB2nDoLzwUgjY1ZYZznRiSR8h",
  "key26": "wukz5enF9wKSirY6W38WmVDqJXwrAPh9xXni6gkdJoumUpDRpVSnLrDoH137n5B3Evj3NJaufEbgp8Er8goSCJ2",
  "key27": "2srz1r1P23q82JMDXEvYMkrgi2vkDYBREiVGbTmtjTQiXBGmMGW4tdKN4je5qZSyXXVYnsbfXaX7MeCufyzQMHrF"
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
