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
    "GkG1nQwHaCwRvuyimqzRgdBHa7xzGDf41zxm5YN319QBiXhtsGwkUk4y1bwu4uBM9enTn6pQT4j1H6hpj3FFoqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497B4d8TJU2k7EvB72ubUwFFEaD3iqgv3tk8Y3RNXnkSni452DCaA8hzc19rzH3T6d9HRk2ALY2xPNDeAhiDhpxv",
  "key1": "5K4icJCGjHFwRGVpUKrPwwvyx6r9Re2qdcF4Xt1wM1JczGrXAQEeBLgbcMiTx1dkBUBVPSr7KhDtwPhgnG4LPZGS",
  "key2": "5PzybhU4gZYCVMoF4tw3brNpryvWcbkNh47puf1HWHBpAuKYR9ePGPRR4Uj9fx4vtDG3NbFT8bhmeDNvUFbA6W71",
  "key3": "62pXPdHB8gz4jAV6qpAsu6iYfLUd7MmSWeDtNczvezUWCcNWGQmzKqC7afQy48oVAzg83RY8G9JKYtZUi1e1wwDE",
  "key4": "5WNidsqYi6cNKTDuWm44tMx2sdHzmrm1GNJgnGZoYMWuPJxFg7P8HViQAmaPJqEDZdetcvuMPM62zGTXkyijG62p",
  "key5": "yEkSDPZoV7W1jpZyuddbu7Kn32fJ7dmyRQSuWdeVSGB386LBfvDKCStwJ1oZ4Afbg2dgbwFvnJKUyUgopoRTjdh",
  "key6": "5GVko8rHUtWWxUqcLzBPFUmyBHDUA2sWnNJJwnfNX5K5TYyG2gFzDRJTP7aBJfC3GiDjzXPTMunqUXo3VP43auts",
  "key7": "5yvZsrhLePu4xAg3714LyUUCNxwxFWMJ2SGacWYvZybNnvspk2NZtVAV8EiV95CKgSyi2dyGq4jBE7UBeEhfhBpG",
  "key8": "2izxZNyNcDQDdxm2RCMB5FyJgCuKxjuQMANwtppHZMiXFiCE8CmY7XVCoB2QAT81iYxG7VB9jXYyKFuQT2t2FNeo",
  "key9": "tbLQuHvkJC8iYCSmQU3vupVV2Bd5zP3wHjURDygFWwKRF3vugvDervTJ9ZU3QvomeCMjzyYUFD28Qjiy61y3nAv",
  "key10": "3k3cHbbQnPMfdGcQ5voYRgyueiSVQv27FMMsek1eRADV9UNs41cb6zW1kfgSB5CB9aqqyS6Fbn6ZfcBe5Y6SKT9W",
  "key11": "4iErMzmduai1BD2yGZ9UWthuaeMQV2txGL9vHKTyPPoTnkqW4j5oMXai5jVtcMhsU4KHBjMgB5TKWyUf6brK74mo",
  "key12": "4deGKdYgBoX1A4ogVnXK77tfCbBYmaboVVCH6K3fjdbxc9hp5yoCiRKFJU4nrx41qtTznRyjqgAaDnhEk3Wu4eKs",
  "key13": "2P2yeudWTPBxN99v9kBDYBLo8m7BuA74V27MgZ5avXridhnqAEcgQcDxYfWZ57RHFkT84zLXD8gf87fZkSLoexjc",
  "key14": "5ZZ78h5zs4eUkeu3m83FYGkJvJNkG8tKqqKKdT5KcGMoGAR6pq2V4PUM4QbbEfgWyCUe77KD6itq7oeeELHU61dJ",
  "key15": "5aiZudpekR2oVuu5Bfh4e34Uj7GNGhXhaaUqEUauD4pY4edvZZuM82X9Q9ahfaJLyKgKEQXvHPEaC2V7vj6g6uQm",
  "key16": "ijYBN75LHkwfLb5M61JFZw8ZaDToEBbiUg5tS8GHEKQYYGdtcFuEEWayvpn8sAdnGJ23bDVzzD95yPLh5w1KtfE",
  "key17": "2ZkgPo9qQXJGBMgH33YJUR1pPf2YHXs4zBdnyUjJXZYwdvFyRrDm75YjgbqQoVtke3QrmCnEWk6QvBn6byNSbjo5",
  "key18": "3yw95vj6wtSJrVn1baL4bL2wd8YgR7w1X5ntZZj6qrQkMeC27GMmAa5Zb2doLZ6uLQWKRNYhHCLkMd3jjxzpwh6f",
  "key19": "2MyTPwPjT9FiBjDHsmdDFkVxGjmVV5H72tZs2YQFnJSMUED8cUZAp4PsuY2vfQxA6Y9eFEectrc4RQUEXzVYYrbV",
  "key20": "5JmN12qcVjj1CKYdAEP87s2wU7YrsJ8RZddMobGkM6NsZ9yb7tQZDrFqnT9kUzKHv34RfkybGbKARwmkUaqB23Nc",
  "key21": "4rALREomSNB3s53e5xVzsa9zPwahBpCjUTQ1Hh7fZ5KaoVUVtBQWvZvWxgV6BZ6eyxRDWdwVmQnkzWGdMzzY3trw",
  "key22": "3Q1zCaWrnk6urbKxHPS5HvBcQtzVywN16euFsuW9RkoBpkDEAsNryoJVd2DZLsXgkLMt3D9j5vNF6LJC91t4HQak",
  "key23": "ps4diCCYMtD1hCnhZLfuJRNh3KPsFswDvSJxuduESU6HEADe9ifuoWYE5VhmEfnNWzeZ5HCcxAdxGWsdi8zDKuu",
  "key24": "3qPEHHaraZ9mLm2YxDdfd58FWdem3zfgNBjDpr9zpvrHgWtvc6nXdEeNzYxZH6hzVyrgzcbEHx5mEN8ifJNc3fBr",
  "key25": "J97JaKDdowTAhAp84akZSN4NSJSSJ4tagWjj4pzKjWHLJCsLWTJeaSQKXPgawAM7oy4PvtswN6smXZKZDfMu36m",
  "key26": "U8pfmkqb4JY2uokK81HmMN4imCTRh2jz8W2YBFLqh2CNZSLrrarDTecw5miGfM2LyGq8RP77siEFA2LXY8rkMV2",
  "key27": "2LCA2rvWAVRCeFyYNmRdt5VFntxQ9rSj7Gf4zWgkFMJBoE9ws3QLr8Sz5fU8JBjPMEJUYVjT9obPNQjs2curDBgK",
  "key28": "5eTNwMt5VWLdRdyMpuiu1N38Rk4mvNLqx6wC1Vx9BoeFmWJeqUXGVLr2fTEU8vhyAWpjw6e7EvRCGMgB4Q2Mo7H",
  "key29": "4Pi9uJaLYjxfMbYGET5CpeefWrpMCJybEc8yYuJJQAGYWJjLHm9ZfLPB5vRYru1tp1TLjyVhhpbnSQx9NbRYKKh1"
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
