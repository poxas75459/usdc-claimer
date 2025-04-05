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
    "3z6x2QegjWencniaKYTQDEFxr2Me6ctw49JEhzFjuGLfBvVyqNXX3FH5e6QKn8cL2EPFwDYQ9Edea7LhTx9S3GCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxP1MWzcjSVwJHrZ15aoX4DhrPD3DPzr8CCUQC4quHYRZFeUrRqbx2YaH4kdb6jS7nQqPCPbGJnQtpBCEg2pys1",
  "key1": "2dC1Ep9faFg89bDq6duURUzmwehntgH6mCA5gmpvEz3uQrq4J3YhHfPtgsahCjaw9wvcauaBdb4hgRUgV6a5kLBa",
  "key2": "5s8QqxbjnFWb9XMMHchffevYQJAmftpSpja4NJJrCCJHr716YJeNfwM8ReuRYLz5cUAi22b1PdUAtxYi3ip25EnZ",
  "key3": "4yUzccBqfqv1nXCbsrEYbncA6cWqZc58YAw1zwenLP3ARt5PLJ5hYWbZ9ATKUCTHyVFCXooBBaUEvthcgM9NdPTe",
  "key4": "LGQfkpTtTpcfS5xq9D522Cp7pwTigSyeKscPgXghGWXrSZa5EDQ7b9iU8XCkHqzeSk8xm5Tomfj2zvtkFg5QAo3",
  "key5": "32t4bdRUCQPUJd1zDNv7WLmsfz6eSJJrXaWgkBm9GosjuRwpYbb7zEmiBKFXKYaVcQ9EHdsAAYNXXDi2kNfTMvwX",
  "key6": "5qL5FWXPfx8rfvhX6acTEr2FGdqQM7satoLpehn5HVmu4VBtHX7VTXSmgcSbaqqwymTstiY2eE31qdxucNosNMm",
  "key7": "5zgQkv6aju6MZtwtNtmuoWxkcKxwFp5TrV2GVxtzGmfEoA1vXcXNLa2NSgkXx9fVCxcgjfVjQW9RvoqvbxNd5Db1",
  "key8": "3kZAZjf8QFpDmjWL7jbqF1cVCSgYUdL9f3Me9wUwRMAnBkeztNeG935HkXBYUL87nicxkFRpevvn9WDrdgPAE9YN",
  "key9": "2Vp6RyijpfZ3NJFg61CXUK3bbR2if6ajp2emMj3UUwNy85siR6fX33GG2S875xbprPz7THVDLHAkfAcSwDWUNUA4",
  "key10": "4bjCD27VP78dYUvZWqjHS7AKB1Qz3YuBY2p4dRC1SwwT4jW5aGfPBp52MW1hPgGPXwmjtVor2UxpGD4CrgebKCRZ",
  "key11": "3UTHm9wLpKReq41hFmpvqjFXf24Xa4pznRVpgpHGktyUdodhPj8MvnSTcSyKYavvP5REjCY11GXkSLxC1o6BzRVJ",
  "key12": "3J1n9ZFUtC9REsyn4kuA4HhGUXEtBNEhjbSLAxeQyYGc8QEQWLC54kYq5srNHkiBkRe1a3pQowKVFeCPLuQ6Bnig",
  "key13": "5J53G7i8ALpJk3dJC7q83CLYLw7KDg9XQgHocvkkCw1dpmjND24S8owDRh8r1nysqpPj7dywDMDhCoCPNJJS8kJu",
  "key14": "2bBrDaQx6Cy3ieHxQKeX5gFbkQMxEMJVEDDGcCFrvvgYVKZ4NxUfzJ9W1gSKQsCR1scPnq9LGj1WhVTDhsm11Vu1",
  "key15": "4gYnnC3Xbg3wsKTKZnckAC7Y38bHBdDwWThn2qUys24oUPEibpeRxS3kwBe1dvyvF24f8gzUHMh5fqDs3wBJqKqN",
  "key16": "3SwvZWjRa3SaMb3FtUtvV1HjHum7EhNNAJj2kCz5eNdd3ES1Pg1XprDQSpMTe6dMmoMmN1zF1V3bXUEnvuTCPfhz",
  "key17": "3EdN6ycyhzB17uJiTB1SP9zvh5pFZ3xFH2ieyfBxPcH8NkJnTY63o1NqreoSpYW7dhTPwBW5w1MRn48wJdVR8zrG",
  "key18": "3R2W9VRZjJcnhGwjZJossWMmV7oWYhAoVS8a6GQ6AhHd8DNcQUHNAJVXM46CULU3sznDaLpmCVe3Gy3682eyjAz8",
  "key19": "3Zzfft2LPyXpkXRGmKtiePx5YPxJX41tgates4MvQYCaC6UMR8k7xXLgRZGdbMv56z2f8rrm8ZJPwD9NLJiTMqFD",
  "key20": "5H2WRiRT9wgvKLKJjYs1w6TmmjehtvPF2awdxASYoCctkCad2kCPrMxEFco38cshRtPZWMd1pzKaVCtswh3BakBB",
  "key21": "4jctLz7RzDijGx3Rhp8Mn2N7AkUG837JnBhB3vR9HoWLruu5zk7qKxKxitizCUZGKMBVhrs4H6oDWePGKhiq5TrE",
  "key22": "3TexaovvBuA1AFun2za4qnmqVg4zNxSGBhWsmEzYuRLedbXKBgmZEFD2mnH63jxKanftFGkCqsev1PVjus3bSYp8",
  "key23": "5HPE4VBRxqyjURVZz36dXbFczwG4pHunjeQrCQXPrK3jqsDSoy6C6N367qzDKm18iqt7mrqLVoToGPcWhLE2UL7A",
  "key24": "5BVCHaChuGfXjd3nedtW8WVSwUdTuZfDFcDRsFAaSBHmeRDsEFTcgHrQPfkHPgAxNztcwn2whYQKmntTGiaHpYcs",
  "key25": "y8yBbcWc5Qiai8imjRRQbRfc59Y3jTsnuUtWAvBE5yxNZTmKXqAdPS2HD5hBPtyRv8HcWMQbWno1HpFvxoWsKag",
  "key26": "fughdybRxscWzoBQJsdqtZVDYkp6nVtCN7TsCf91LNwk47tjahMvDdih5W2YGuCrrY7kb4EbTY4dwp3j6gaRb7o",
  "key27": "3LMNcUhN9u3dPNnZdqeqRenYD5JV1DbkjwE8prQvWgnajQPHn6G6EATYGSSEWb1pjXzWwFK68SpUgQu7r16Px5XT",
  "key28": "3WxPmAo2ZsF7873zmhCU7TH76Vvab68hi2r4fddcPxgekqDJ7vTuG1Q7qknRE76EKE6dLwSZUy7UdkvyQR8VLj8F",
  "key29": "3sYBj63MW53KQb9RjpJiZ4XhDDBNFAQUM7gCkF5WLF3Wg5jDuBEipL7gpdZd2NbyktcBPQtWFHcXyj4oLz3notou",
  "key30": "4hSTP7HNm6MN2PUP6K8FQbBzJyPSZ8eEiRVhe5rmJ1qaNSfyKBQdUwzJfauUNFUkSmZv4yTiWSQiT8KRHM5MFpK3",
  "key31": "2qg3HjsLpDJMoDYwc7LNDsQhxKLtXVVZgsBYvb9UvRYBRRvAi7gn9XFX93SLkQuEMKqizUXB8STT4phQ7mwfBFp3",
  "key32": "5jvqWRonfHKxJ1nuU3P5ocampv4axEfiFtJ3iHprVy2QAHYMkQ5YB6KucUpUZ8kdQumr2qZ5AaeJ6FKG2fNeGTeo",
  "key33": "LjAEPSVfzjbBDC1m6cPYfVY2wEezxXwbRKE3HiXBikxEGJmb3cf12d6teBSwBFkYg1HLMNfyeSaXVk12rGDsDPV",
  "key34": "4ArxdxgAoCzg58WyyUxHAA8KdFsGgsX5iRKV7TuE5pPSFXuNgqydiua5bbdG7RkYDQqB8uLMfbTWVoFNZNJTbCMA"
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
