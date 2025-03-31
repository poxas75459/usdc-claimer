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
    "41FHJiHaBu9k6Zc6U7NjfrV9AhVQpW1fkw3VTHptfwbTczMQTEbXxkhWF3ki1aiNREPhqBzLNfu6uQ5b2f8PSCfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwhoWUFFy79WwJzqKSjtXMKzq1Mz1PRwU2TtPTQbPC6LwoBt6vVSLXBcrrBCsXe78yQSEJmSjLFpjZ7i62VUE7b",
  "key1": "22jXAqYAg4aaCsUiN76Ya8vP2GGJbwR44pKQrD2PNaMNGMVicantWLbt52XKFWsFuAw34vpvdoMStATTLEFEjyAJ",
  "key2": "tE4LDxhnBaEu1HSGYT3oXyk1wknKA9CsMQc1NcYuNCyEf5RgiPjcYYcxPvx6SJosWjo4ic68jSJDg9KiSvgtPSc",
  "key3": "44ZcvRyhWyLJjJ5SNwuC4ocJXogyvcXLZc7XHmynAFwp6v1W6jJYkqCpa6qGZVSJRd8MrB6okxn7EipLUMpmkSix",
  "key4": "3i9vMTLsqcBLauc7cqrtwDLCvDMSV4knByWQVULKMkTKHw4idZGi2NjsEnZMNomeQDg81MhHNXpRA5ifKAGwL94M",
  "key5": "2K8TbZYEsyju9Vc1JPYpQgiGK4zLquSYD1S4jTGDrskeVfggmsuZDhqKGWNU1WESiRfRS2LsQNnG5Rzmo6W7ZBTz",
  "key6": "2anUGZaAYL2SobhY1cuD6eAAVjXzsFk2qJMGmzFG87nxw6bPcaZDYNni3VcFRtatK22UTRTnJv4Z19Wk9rUxQcZp",
  "key7": "4ssdJMTVQ9Ti13zWR9Bt5Es24t3esY2AtXNZdNKc4kLKiFdty2ZQNrSkeVwuyce2oyuhVeKwGJVfP51YpKZuDe7",
  "key8": "35WXEFS6YBH41ZaJkSjdG4Vv5enWvHFjegRTzaodtfe8pfcfse7Fyu8FaVfE1BLDtUpwPf9xLyogERCvwg3V4Coq",
  "key9": "MofaKquPqspiENdBXmrBt8HopWxZHfCDvHMA4AFbHgLu3mq5HDSkAQzHh9nSiizvYgbqza85pn9yp2nhCVM9J2n",
  "key10": "5UDQZMfrHCmCC5aYDCjT23Z6eBe26xGGj94vbAW34WcXoRvdGLqWfVrZqv6BC3ZJXhacKGripCPMWC35VkRTg8fz",
  "key11": "23AKrTuuDYT68mCjKnA345kNNpULXEJnw2M1w1gdkXQitjfeDkMr7BSnmbYD35JRofnH1Az4fKNf2hViWbqZbyQa",
  "key12": "5PWzmHmm9G5GJJjAj4yjGrTuB1TzReNNLyqWWcKF4jaxc5EEEufhTwrehbZgT8kS7ikNJWFa1X4bACHAi1kuuUe2",
  "key13": "3qvV57N6CNRpMa97deYiMiXkcZgWwyX2Ajweu51nuqN94hQtZPqbFUEmYFBPNJgRLUGBE6Z7ZpCed8rDgGWzCDJi",
  "key14": "4RqSy1yBqa8u1JPeSfByGnnmNGZcTpfDH78uVFAfz4H6FgWwv9otFBQuzNpX1ULdPKUrRVWNcNafTcsFNKgM3vbX",
  "key15": "26iTZ2mRTm4TpQGsB6CQPYrQ43qfAXwiBjfQqajNz6AggVirMyLtkG5DnvA3UyTBCwy36T32wLTUiTarDEAEjvbQ",
  "key16": "gzgdwPTrprAVfBknScUkaNnRkBYtdTfCy4JSpDx4BVYnxdLe8kovsxyW7vJ22r5QdxihBcf8C4dvjKp4TXL9iYR",
  "key17": "3ZHCuQY6gRiqAcx8wmUPRZzxYu3ScpqkeN3pDUisvecLhmqiUsYHUJASGZfq5nDtnr9YeDr3mRg4GaiG5XJqWWZ7",
  "key18": "4ENuap98zLu55VK262bFMw4a9Vv9sPRPZa78HSk9iP7uprycN1nd7TfFjbPzoawc83Pm7M1R3k1NGkTYUtJbSktS",
  "key19": "28Pqgh1e4rjSUZxMgSh5wx3ZTCrQfrp7EWoWUxeAHbER4Dpbrb73XuDYMYEP6garM54HbgvWjpT4dJS8nb6KP1X4",
  "key20": "4Rvsx8EZQHuBpaVm4KnQVHW3wiDZGf7QU2qrQmVNPBjpwdM2yU25L863ZgeZuaEN7Nk1ADsxFU3M4qPNwFH2m4rV",
  "key21": "5bSHLvCuR1FfVWpVUBmhqJDGmNTNDqXfrqfDMGRCVityvxzJ6XXzXFfeY9zvpyyhha3KuNh6QeuZgoRu7hSYeF7E",
  "key22": "5kRuhW6tTreWNgHRZsZeNoEJqHSW1gm4gerW7zdE3CLaFuqzqNcbGRakvPUrxWN7L6wnJwEY5sv5sYQQ7w4fM8wJ",
  "key23": "34pcuPETiaDikm5vUrwfDs7MPtP9p4m7M9ZfWx9LTivtae6ZCE4bWfZbKC4ocrGAwXui1LJWjDX1gqXKqPBgYPZW",
  "key24": "2mcdqv2dwKbMQWHVZFYe23HnRHQkh4BzZRXtFYEaePLSQZwVWqWWQtnNS3AQLoBE2dCTqSiFjcAYGg8crVtEm3ah",
  "key25": "5cxbcai9ZMpxSJpVWmGmP3a8tGwh6FCJ6CuyhJjpaaqhmw8kyXYHa9zxMkagUbaDZDf1BW4HhaszLXNuVEi8TbC2",
  "key26": "5PEBJN9G2BJHMQmuWfpgXQJZJsKYegdGaSRPHdn7kuic4eFzFfhy7Xor9GYbQ96sKSPv7sJUNVb5VmdVACqk98FW",
  "key27": "4zLzAazHmbNtqdkj9cyJqXnwGP2Jwa3YA2KKhrgXHVWbHRK4XAuUBa7Dyei5JNyZKSbnQU1Sn8qqxT5Yg7GBEzpV",
  "key28": "4gt92Mck9GYFv9LX3UaQj2f8HQWwzvBh4CnXRXqZLPbbHvP5j7svuKAjqs5yBymmpn6YqCftVS6W8mQiZvw3QoUD",
  "key29": "395ttrWvBUDa1dLk5XpNcK1YyKnUad5APqHDwqEeKtBUETMnKWZyAHLCjqgRHxjnTd2rR1PE3659dyrGbnryvgTc"
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
