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
    "4YfSM9dnJEiS5gC3fbGymR6vG92DXSy8k7bwux96SDZKGtLkRGM1Qzva7JjKbA1BYZM7FxtALmnyBMFrup6qzssG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kcNw5CN31ktDyadpuU51s1WAVTWF9y5Q21A5cvEXgngiXe3GGZyTtpEbQdsuZquMov4KKZqLVY8sR7WkWhwUKG4",
  "key1": "42fWeUXywAkLwZHob5fUtwBU5HnhwhaF3ER62RKDWVUxnA6FvKeubccq5KP9VLLVPzXKMQUQj2meUPMXMhb32mr1",
  "key2": "4kj2suosrAh8ySSs3bW2EdHruagotzV8MQi8BVmQ7ceCqWocWPZ5Vxaw7yHqjwh5AGJofim3LyYJpccumhT25sKW",
  "key3": "3t5PRN7hMnCh45KU3vFvuHRvENSBSqtn8GbqQ3djnndvvjtKoZNsdKsp7r8sqMshFVpUVKu4RGApMgXEGUq2NS1B",
  "key4": "3rMzsg3xkRuWhfqPUt1XY3uunYMgfquHjEC4LrcT2m542X7kzgjWpQdRgN7yvx2Wyb9dn8UsS8zU84KumNDZC8Dj",
  "key5": "2xBgNugPMKFyue3xMGhe9MPGxz4WHAd9q5tfocbup6auwipC1EWxthZA4pUgwfmDPXVXGgU5E7kecYJuvpueMNgc",
  "key6": "4KYrYo5RyB1ynjTspvNjKnKFkJgb9pdhKADVx8WP6YYKPQhQz33M6DE89fatyMn2DHJ6cEEcrNDLWXiBKowV6KRd",
  "key7": "3zaYCSHZMjA9PrLKf8ZzJskGdkNtNExKejK15G1vGhH3uxqLGb7XfC78zkXcagvksU3RvLmz7zhkg13NtyY7TMiF",
  "key8": "Dxn7joT2XFQddftMQ2QjXt2PcFiXSyAX5ojWim9sbdSw4ja6KrS7oX1AZ5WhxjPtk1JQNyq5gFmpH86CpQthEdW",
  "key9": "4181BKzDFqZhDNirgmbHA5B9FqY9Ws6Fn1Lt6T44ErDp8utU55S8VaCbzk9oijjfxaaWWb9EatavGhSY1dyZHne6",
  "key10": "2GgEPR9jztgEs2FKmV85CYZvKGtsRKx4Riwwvc7iBcr3y7AW1eGMBUtGfcCH5QfaZE52594bRL1yMQg25FMJ3EFz",
  "key11": "3L32hFNCVUzASoC8ukp9M6duVXBzrzQn124byc7u7qdN5UCmCKsMoi7PkND1Qy83GfSuTeMUaJfAt8sLXkPayDb3",
  "key12": "7Y3XTyH81qhGrhRSnR7Gg8A27eLrcDLgr9ScHkBZpuPDtQ27QQBReoPihkFGqcirHVeQi2bjriAryjkCXP117Nn",
  "key13": "3GRb6S4YpiKwynpdpMdh3A28oc1M6YcxWVwmYc6VZZa7QfFv91P9nZW61M8R7EPNiP71JNVVYw1fEJvmBP6v2Wpq",
  "key14": "4fwjFU3LmnfVRJQcZ2p8MBAAJzucZ27B3Wox6cuaHBnYkfaAwBwgsqpTks4x77xZSzCj5NWxQobD2bsJxWP3mJx8",
  "key15": "4dEQAyvFER6G8LXMRMj8A6kfcfE5SQPEEx9CGe2zgTPXrHhdEJ1D2zYWsvBedVixqYrB6zW82ghicLEQj969rPvR",
  "key16": "dU1BnS8dPcrmK4Mh15h1ojmi2Q2BhszywWMmJWGp5BQpNvhwRdapGc55683DhsBkVrb9PtkuB9PGr2yvC3az4jd",
  "key17": "3gSntgNWNSY1NMcjWm2PF15verzYs3zJSrwXjcCxdPfg6DWpMAvNUR2KJNzdnLNDoeT8Wj5RMfseFBdZkcGtXhj3",
  "key18": "3vT46RjnsayYyWShipkc4S4sgqQzmsUqrS18PBxMM94sJVWkaKzWwpetoE5ow8RwZ3Y3oS7AKEjZVi62LfiZ1uu1",
  "key19": "5i1krMaVijsZ3ER4Q7RGUxxqSVAppABEt12qWARimRtL7uS275f7mM4R8MvRUMNEMHG5HJzknu815WCsckxDYTaB",
  "key20": "rFpQM89zv2yTP9otd1bRVumdcoo8z5LGg3WAJQYnYE8FRoNWESkgQJfc8gyjvs3XwPnJt89dZTtps1XLJGx5aeR",
  "key21": "4rFHqfUa5DTiPXreamDmhKVYtjPnj7Pg3N2xFwMkiW8bhXwgVYhGrdTJjCK3nBbh7Dncrxv6A546oCiDWBYcEmqB",
  "key22": "4UbJcaVFsekCdEt9ZUHLbT31tUdFfwM8Vkre2bGpaJhZLdbQcqStv2xb4n6v9ECqmXugBL3GsCUWWjihSxE9pMmQ",
  "key23": "2bY1wZ4WBF89q3naLPCqx4iwNK8VydfS8bFmxkrs82hKtgEm1yUuNBYsjhKdJKyDu653hyjFym1GULYkQ42uhsy2",
  "key24": "NxY7KD5QppPUo76nsnA8xy8Z533tM3UKQPcP5dwsyVwgVhrGUb8xAprHwn5EQxmSig6Ymf6RLQGbxd7ymohZP1u",
  "key25": "34Gjqukqf1qndkaJM7UTFY8LeBeKJ9oa5v9XAJoiiRQdj2P1cjoMKAHvLdgpSPQpLKDGqv5nxKSUpR2eFJmPqANz",
  "key26": "BroicSbtgfYgVrNFnFLAaUiZkRFjbfzLspMjrEZb42Kxw32UD6gjEMG1kDS56j4VUN6MuKThX4VJGQSThMnWWJS",
  "key27": "4nfTE62t7a6ntKSRHCzp5cXDpnkzEFnKNhTP3Vzs5qhwMDbUCVhNu4Snn45wpafsmdvNw9y6uHAWzJvfCUQuw3s7",
  "key28": "26LyuRiZP1Y2wMpMPrrSxtyjhxCGr191NF5AH9UuWWRzgMur2vLoseSCW4HhMGn3X6GeAwUoP89tiDzDDC5LL4Jc",
  "key29": "2B9kbgycLwQqReyH7JFnRUE2tNUh3cYhSdfBXftEUAF2qgTJKfoPGDBkByKKwiCo198RjE1owYe2ivCteYSPA5uw",
  "key30": "2oYAERFi9fmNf78Yy7w7xqDHcinV1HBzKt6HxPQgnoZE3HwEosgo1iAgxFvLsoPCPN4wwZpZjWYKtugXwfZv4FNY",
  "key31": "5ZZbNbBvFLVKzpyPqgAuVxY4ykJ3HYg5AiYv1GNgcBLaB64cKkJm592tHN7Y7nUoFdhYTydMQX86hxC7isR1cB7U",
  "key32": "4piTSgCvTNrumXGRUVp7s5dceH3tjqDgf77o1EPaf7NmGpNxadBSez5qwK9g7RDU4LXJzHE5xLHVmJzeUwPLyryf",
  "key33": "5dxki4jQ822LjFL73ocfDASPH67ubxUWGgERH5aeZHciTBmQ4LPe3NyJ8QY2KGdc4zQBQj6A8CdFJtfCTCtYVtTi",
  "key34": "8cUi8mfM1ifSuboTzbcVC4iwKmHN6UqxVLVv4hkvHYN2skBK65xdjhnySDcpnWnRTjYs9eqK4ieMA1UvfY4oZU1",
  "key35": "56jPUM6kdxi4Qhy1qgu5Td2pxN7in2yo4DvCwZwef46QJoNNZge2jZXN8jJY8MKdHQnd4fNq7zKCXUq1mCqxyLK6",
  "key36": "RRQ3wNANEEa6QFFhdzEVN72HU4NXGd3xjbaeUjSMAfT78jtEinBRTHktLc7ig5YPsbxdcLAFVqpwtKyfBFPNHYr"
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
