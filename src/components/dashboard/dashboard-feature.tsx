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
    "2sZsNMKHAux3QCFLWResDTqBDkDCTQZjy9aio3W31t6EbGrK8UeFgrtTqa9Bn3Wcvb7qgznbUF8KoqrqoDYcFkEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nA7WxRi7xb7tg2vznu3zStbULCNUx9y7kn2pHSnYu62tUv6D6j13ULxT2uWQYfKCiS3JaRrBbuveqbe12UN7aAx",
  "key1": "47VDBBGB9etnmLWvd3MNsKbrFhrYkYVTgejqB73xhk2LbRXozAwm8uZnMubVcrdZm1W2TXuqDKAmbLQhFVjTTaJg",
  "key2": "48G2S3RsB59D5ktB3Hd1RcdkYQuBX9kud3hj2Q7SPErkjhaLj5MNZPaJmpZGyP1Crr4nuXFbDGnqw6jJM1BV9jgk",
  "key3": "2pt2ZyrtDxTij1g8mC64mnLWaTXNC2gzbsga9wnt8Yaynpwv2ujHWpPUyFfeT3kaiKder3rWqgyqZrQmw697qLYp",
  "key4": "22faKyyj9ugQRjJCXqnYTbz1UFM52zvGa8h8YxVNoRTPTDKXtQySv31HyP5RpRFQfSa9tMSLu451eMaM3NfCtAq1",
  "key5": "3LMXfYwP8grrfFtd3CgNPweJ5xsYaQsMGVkHsk5R137Uhh5j4jMwyafAwW3JFMQSR6sjo3rcPa1fCkq4eymm3vjg",
  "key6": "59SafzMNPLPZEtfKXXbaBg9EDr1RLfrhzEEUs7m8GSGQLwMd7SWaafbmaqUtD3ekxbNErBXT1GjG98Ee2u6X6vyh",
  "key7": "V14ex1wNpeXCFdSApJ23jnhc6gJt8Zm2qJAFg2rZoELqNwJmFi14bGt6Pz34sT4HLwNjEdVgA1akKAG3bDyvZMK",
  "key8": "39P3cwsojN4AcZBLmBdER8MqqnjnaVd2D7Djt4ftC63kKn9bBmPdfdWmGv6xUBkxj9p4vmtctx4UbyksPrqjYsjy",
  "key9": "4L5rJmFHyxb2qvNxEyUZraaZs7PPeep4SFCSBXgU3oHAjoys3oeDeb5KER8NwKFYaQ1tQP1AafAnH9DpFTLkgwGe",
  "key10": "zxMj4XSkjTYaFthVEb6EWb7WnVbaMX3p2HVL6fZnpTPS2P4R26BRXfxPtabMiGpYt9rAqt3dmpMVWLssDJUUsd8",
  "key11": "aRAgFyujECRQ7JKq8Q84YxrstTifPgfr9JaqwK2uwXYCwZekAdnbHQBjEB9SiNtmP3hPYfqaxQTiH8cR82822Xs",
  "key12": "2NUHyRRXXt6C6sS2a2T8ee9nnffckFp114uAxEdjWmqPjw1Gyevxqg27PUdbGp4LhueHuyjvmw4P4sETTTtWAG7s",
  "key13": "5ogEUNttXFKKJMytzjW1yqnhQk53QX7UpPT3sYwXHMnW7ij2Uhn4SgdzbSJ8Vxnni74dTcF18mTi2fgBDicRCkWF",
  "key14": "2toReu863aJPEFGUwkAGsX9Ecc7ewpKwWtRH4gjLU8Gt3XfbKdRJ429vNgF7qT8JFP4qfxjfRgeWgoCceNMoAAiD",
  "key15": "5ABtBGNYiJDNAL3BjUV25fBWcScg6SSEnN5ezU72C8wZwz36oLrAh2zoL6V32CviFZCz52LDZqNDjyFwZa5dGqi4",
  "key16": "2tATuT1c1SuN5da2huJwwqmdxc2hLySG5Kb3HE8pLY81Pocmkxf9snaM1F6XUfUteye6gPSwHTnFPDpppsA5erPC",
  "key17": "3qpuk6NTtq5NhkAXPzRqnCHC4gvSS9rfw4BCyJdSMcasXaEHXxVEBydQBRWHbFgVV8HrXVUu5zaEmJV9g6fNZRjd",
  "key18": "3x4NyheKthKViMcy93eWbX3YXVvb1cnEFY1neyQ7a1Ajt6YMfsFvqvhrrGYWmhzYV4hreGo5p2kAvH2ohRt7Y1sJ",
  "key19": "3qNTk5aaRBD5xaFn4oj2mbLzpFoRU2QTP9J6ryEGbqVjet4nfRXVeq4rMkzqmrmMz8AvddY6FD14WFsVrMdHBN6t",
  "key20": "44FgRJD1FUAGJWj354sGSb6MorVTJi2NGSWqYeZPA9VHARSW2rvyX3z9quedaRXugb9Zu55gNFsrohPucCE81i1F",
  "key21": "5mhFv1suqYKJznAUtx29BBEcp6qv1Kkvz3ShvLLKyvRqn4ULZ8ShQQ7poGyPiX9pNLHJqUVhA5vj2SuRuQGpLBCe",
  "key22": "4j1G2J48NhdBhuSQwJ6PJYf9hrzzSaavB7mU9UdAvmQKBk1mK7PpZ9tQ7Kcia2PwnnpVGkSKKoqkijWcU48kMHAN",
  "key23": "yDTxDpAs61V54RiCPpX7KNNVCgEw9ymzPSZffQghjhZ2u2hyf5BstzX9SupmsLJVA6VF36itYnTCykaLCwoExGt",
  "key24": "D7rtcaMzYnCPpj8uvyBd8BfU4XXEVQ9arwRS6ptZqZ6eRCiUxbVk8n8DSStQa2oz4hB1oq1rhenMMtJCmuVe7ry",
  "key25": "3txPUxD1ZAip1hD853gybPh6MsCj6gZiPAFspgKmUhhkJfkHWjhb5tc2w5KgTJZTfTRQb2DfhSu7ermD8oD1RZ1a",
  "key26": "2DruvhK9rVJgZCEikvE3ytG9SeigsgTzmJNNM4FMk7PD9ekhQkrX1sVFSESXE7jCnS1SBHkeL8BaGvkocMBD4MGW",
  "key27": "4FcBCcmjpvz3qd3m2UWS5wXVPXWRqbgdSMV4eg8QdytFVGPro5PQP1idFJ8oLuQQrJALwzLWTkct8w1EqJs8Ux4V",
  "key28": "3ws7ArLWTNWuYt2KgcrxpztsRFMYjNgrtLd3H9ewnhqwuHNNYxkQ5mq6m2VUC5j1Zgn63hJN3bwHyGdZJnSkWtYi",
  "key29": "3up58YJJr3bJgadnALFitrYT98XVs2JNDr7B4bai4Djj7KJgCnMVgLiKvHCZxB4TEnneqp296e5v7v6ZpbLLWP3F",
  "key30": "2ERxc99tqTucuYYUk7uujGPKzw7m7Xgxn9ffddrqGRPEXF1nmkpbGkrK2P1DT1yHfvQLi9AhTLxtbGU27VMhAGUL",
  "key31": "3aiqewbru8cyRJGAcuXA65TcRpqQmQjyf7KhvY1ZRTtp65RYhU3krMpGku8f8x7oY8otnA6zAteyL4svZhh4Uw9k",
  "key32": "5iTELM1gacaNUrTfsQhbEjQJhsawVC1CSzKQmTPzCkJbFqcn5yTYyJz8sPx5bZ3fpmc9yrhAVUeBMVqnJB1zRRdA",
  "key33": "65jpMMuDqpSCihSk3wyTv5oLHHdZCRFEfbFaqpXePGK1cLs3yUyT4nQNhuHBeR1qGckBDQp1MsbFpYdRcsbYL9LN",
  "key34": "4p6EtbnnhiL44MfdwRZpLXxiUsfwdH6w4VrkXgrCzyDsdonze1DMnvxBNL5eEEW6PM4DeznYHHbM4TCeMktDRAea",
  "key35": "5LxcPNiWasJxhSqgr2GbEd8ioQrS3iRCpJH7x4S6uci3Phh7iu5T1No8LybRwBJdzsswsZMGBpU8RQQ9egVDC65i",
  "key36": "3V1nnhQ6pG6w3DHCAoPdGjq3q6LtPKe9x38zEC5mLtS29RuWgjKDM7HwqHCyo8xwVG73jQQpyLgECPgRz1w1uqWz",
  "key37": "2NB9oeaDP4P2DtPpHbHkZ8zeurm4r3tgBwJNwvCKnVkBjXBvtkF11YQzLvmcsu1y7XLhw5hFWiYsoKT8BSjPQe36",
  "key38": "vJDePHUTov87A4uYrAvf5zSFx1bG3TcnjVCCckQc6fBBa4Zwh9V8XU9WzrXraFGydSNgQn6NyQNa3e91QRfnAWX",
  "key39": "4NsVnUJfuPEYSD4oZBtCfPbiomcC8C7RMWn5nrZEqdhUNJS7fwuuEjG6jtiTVhtCe4cyLnRcEhSFSJez3SFENmmq",
  "key40": "2hwLnD9UYfQxCYPtHFNyKJkkfCDEe6if1LsrxqkcFUie85RmXx4KFhQB4kCp2USb6YQKWr3v9575bLrdqfataqnR",
  "key41": "4tVRxjkDD6XvRgo8hSLDhV6VePVgKji4S8tCXHrsw54NokzVfHZ7GE3iKbPtdiaEow4cxaMB6CEDvcGJcLcFL8Lv"
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
