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
    "2hzezrrBtLGydkFNAgBkC8EJP9vzj8CtB3z1x4BLP4wRcjeCnFUPqiZEyrwn6MwKnMJCpj6W1pg2bAAbanCGAmvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkLG1k2shEbSR6ArJkWcPNKPERwQHNo3GUpXKwzZfgirdJGCT3nvUgcPSDRATpk4FkhxLsbsze182iwg1UUcZwz",
  "key1": "3vEqt4823a2WUBdLBjr4qwR86FgEpY1HjUi9kigyY1nK83U6u4xTkYgyHc6vHfUZdzj9nZPg99TzbdktuZKWHkHE",
  "key2": "5UZ6cypD9Zrj63EsxCMmxj9Pry61iNJbKAEdL1DdBCnGTM3UUhVSMgWsvwjw2xmuUReucFdaGnmphdoVPbqpnJzU",
  "key3": "5FupA77A7VAnuYHVXBWU6DoKQsmgwY6J1YvrYza8Pe11vaNmNurqUbqEpqVENt4RysZVYyEe3J7S2VVAnyrbq7eK",
  "key4": "2AQfXxAZQLAjjofJCaMkWM45zmJi8B5amaxNtmVbRixzzB14w8yzWR8yofZEm5YHRFXjpEFGH3RdBHgzGcurDmsD",
  "key5": "5nx8sciMpLwJvhsXpyJE8da2z7zhF8QhiioV7pvVZ2MyhzK4aan3mMSVraZLeirqeNCLViChwFbtoqRM5hrBsFXu",
  "key6": "5LC5SRafBTUrgdaoWb1aCgX7hqQGmMBZYGwhVn1CqnpvSFLJVYJwTpPihaFnJFS9XXZxqV9yzHtiTjQCJyyyqtkq",
  "key7": "4kHBej3kPo4J8roKswtWWTfGfDHr8G2GTKxq7qyT7GxAmzaFyu7T7NpVpy8D4xRnJ8KUGpnpZLUy5CNGkuYbWSmW",
  "key8": "4Fv3KvE4zDNaVcVRHy6UtY8uN9DtNNBCe4C67F6ZpB2VNEMdD1VoW9n4GBYTRRmrXBVU4wjnM3zcR3fkHegdNYHa",
  "key9": "5u6fCQpyaTRi8KhzSvWUKLpzWMAt4apyLw8VhK7UqpirKxFb1rfeKFqh6EhbTTdT7t4PFHVBK1EMnq1hRVMmahiX",
  "key10": "4HFJDRiGg8UvwnP5dSKSrizeRAQQmvT7gYGH9GspJyFVnTTyWUf4RfAQqBBpHPb6RY9NrGeC4HWQgoZuiT75jWLT",
  "key11": "4uazm4eo2hKwVAa2NNmrjAWndQyfMQXEpx2gnEYad4euHoh4BhEEmCq8oFeNxBNB78kXztcab7wK5BRoq27Rj356",
  "key12": "99oLvLK4QbGKCPaS5jH25ECmNDM5t7LJz9UszvL4ufGDR6BMT79mhgx2ikszjiqQbNMi9CJy3sHFcYM29YK97c6",
  "key13": "2PWrkhXSzEkwnoZBirH9oHnwf8hWSRhacAhQAR1maLkYbvjDLE8fKeACFfgCSAtxXN1crCKM5eEEJWHE3SwHFveo",
  "key14": "3g5NMmk83bEdgY2h6PJ48nBNo5z4gVvpX5wq8ehdEwXXMHMAiJZtJuJKr9GvdyRhmshGiFquQP3rA1UoUbonbhDA",
  "key15": "5nR5L4rY3fKReuSgrGMQYjSWorRQ6oyS8BM1eNqLFfTdwpdjPDNXEE69QdRKyPV4jYa5KSSZ1q8S2q1X9eCathPQ",
  "key16": "5irhJN3Wgs4xx5Ya1auWc1uZzRrG4Y3k8Mmb8YCW7UF9GgN6DzZpRMgwgiCSt8MnCq4g9253tWuTJLQPUvPUuCYx",
  "key17": "2FpeCDSLo77Ez2utefkSaDv2Af5zbQmHALFWqqHYVtpQA5tZ5NuKmgP84gsJo3bTHMjMuSF5TXUrmGbmxHYgeUsP",
  "key18": "39MBBV11LH9kFJfzojwNHWCzPoMfMUjcuKJE2iBAibVjVYqnud3pr8ubcvqsnmEkfQEvHLrZbKz1TxZ4byvPCZnG",
  "key19": "5Dyg3n5djFEyVqpdiKXRrP9wENcFbHt8t7nCjsr7QgQeq67iLtYAKrWXN5f6dB2vKAgxqtDy3cuXQohRdVX3hSqz",
  "key20": "5qdmUbvFU4N2vk149jcLSZnrF16CzRzK3PvA1dnzJhzmVWuk3dhXFpFZXXuAf9hYD2NsKwTSaZbnmFC7ph26Zf59",
  "key21": "52wHJQabz7sRRiSsN1kX53Reo5CsXJukN6t4jyrZRhRguVi9CJpFdR6NUh2xyuGoALN9RHH78Z2LnBayufmH45fZ",
  "key22": "5tyMPcQ3847naN5zBCxtLqQUUska5aSsQmD9hVed2suAgWzrSd4YUjGRAd1ytwGHorW6U2rSw93U5yYJrTtBTeaW",
  "key23": "3QZiAMUvcVNKcBg4ph3sKVEQ89c8YknvKryw5ZMDWdYn3QuwMwuEswpptcgABM8VSTiSgRN3nnrWZbaQ4HXWZGZ2",
  "key24": "2c83XPrkDLs9XjcLyQVBAXtKk2HM3Yu6MdCpyeGxgqPH2woRu2h9zyqbNfzbdShtzhpYJATMoceosRmwKFDnXjB3",
  "key25": "24Z92vt5jM1M1G9ffwRDCbxUGvvRjDsCTE8gdMnfX1UaFqTsXqbUjDgD7sugUfaie7FYBHnJA4jNd3K7YL3CzR7f",
  "key26": "3bZpkhhVTrBW1bXusLMVMAsQuDQpioccroEnxZSdRGbahXRZt5dgDTNufBP5dE8Xt7rkCYDhWqqKrvY6br8LYNdz",
  "key27": "2JQJnB6KPpiQGNwKo914kQdngB9bKgh4KR9wUfvUi6oFWfxH4Ds8XH3XVSJq6rz94GKzZJjYHVQQv1Fbby8ipjrL",
  "key28": "3oycNdnJUbn5tvYEKntZpnhBkQZoyzC91H4cuy4h3HGjt46coHpNBNKyjr9rRWDP7tzqKWYT7NijsfZCsBLqD5zU",
  "key29": "5rQkRw8KZ8wEJsXKUDm5Ev88gwgG2R7wwKtamhPZjwTnrQCz8R5yvJth6aVNq7dqW1N95DtiLAyRjA7AAqHurjDv",
  "key30": "2HMJFGVnwin9CR2Wg8Wo6vnDRMk78wyKA7Cq596M3Tmq2LHuPRz5mRnLZDvJwmR2YqQvoTj766kYMZin6pxfG4w1"
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
