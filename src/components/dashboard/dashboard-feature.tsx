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
    "5RVhgPXwdXjLhPuQPRGpp7f3zdgcEmowcZ5ZXYX8pDb1kjRi1dbhkA31qBH5kDfKXh9Dbj1YbXi2UCBU5iTW2cCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GosPC3Dd9YQnjZceDiTErCisCYB5KVrgTn7xtLMrc9uCADHZ2uvYP4SnipivUdSncShS5tZ3hb1FFnGAGU7TMDJ",
  "key1": "3fso6EwVycksy86QWWmzCkGFztKKbWmpyi7b7gcBzioScvDHkLx4Unk35ECLcKBVVroRw8ZZrTnDRQw9eYmZCvVF",
  "key2": "PN6qXxwAAs2CqTfakuQDqkHRhquw2PaSPD5P86naiRH8r7tVYrbRXZJjvzQbXZcgGBYCp4uXL9iSDJYJhq8fyBY",
  "key3": "3XfaE8qEifzomUxfiQywYZhwEkEQaLvsmuy6euxoT1yMdSqKwbcMkmrE5bGDjaejcwBz7e2dcZJ8ZS5vRt7KCSNx",
  "key4": "3J8KPBpTCYFwLU8GtvsVqfCrterCEJBdVY9qyCHSkHnRKbGwiPFhCjqGVqzQhRRriM2wm4NVYciPky1cDTwuWbgQ",
  "key5": "4296PCCAPoGJCcmboiYLQ7dUb3LU6JbC4b8UNZH2SrnHWoyfzn5Jx4w5J9G1o6zonWK7ZJUcnKMNGtrABmqiHQaZ",
  "key6": "4eYbFVrEwxVWWrD3zsvdE9SNoouwHE2pqySo53mB4cPTtYXQocVJhvmVqMhRXcuddPma8vxhpncmRTFcHNCj1HbF",
  "key7": "56QkhUPCbSv9iCKv4o2hBq1gu4EJgZq43y8mRzWvvkg4PGaiFS1k7VvNU8eKXe19idimFaRF1GTznb1wn69d1jjk",
  "key8": "uvsqjP1xaViwhcFUoBz1NLHWKfwBjDAY4e2dpiA2f1Y3NwDzPgfS9KFjpQTCxSVj1ofP9nHdad3E6E6wstkxRnH",
  "key9": "4bTnvioLAhG2WSUcLGnKEHMNn4ktTfZjsj91riwYaegTs8ppu2RDwetJEQTAC51825MMWrmgBzYmwNU82NKrafXr",
  "key10": "FFym2woyuXS1BJYs8yBGWK3E7XLZDGhp3RGoyQQNA7ZydgeBEU7XVPU8N5LaZKaFPuQJX84G5UqwgTLRw7a7Q41",
  "key11": "5rk31JkdsFjYb7whZ8UTtqgAzh4XuAsumBTqgQepcz5Lj2BYGp7B99Taj5kSCWijE4NCFvZ8GrpvH9af5AE5xzBG",
  "key12": "qJa36oz7EhybZooTzH9rG9uZ6yQKrfyMZF7Z3eEaf7caHkJfieqQyAFetJfCon7gd7Dhh84Rt2vX143hZ1rLBcW",
  "key13": "YVjcUNt3Zt7gYAqwK7F3T6u6WmpGWAud3j4AgYs1GbRM1D9pZtnbAGjVRJfxhT2kyNN287stdBkdkQQ53YpL7DK",
  "key14": "21MLPJZd2Zdk16VrAbqz9JtWBggovdMZBAqVssZmjWwjdfVmQCs1QbPULsSgobBPAyNkBb6FG9NHWzaKVDKF8dGK",
  "key15": "4PwuyNekMyWbr5uDLyNwpqCqQpRR2PQeZE1dNA3zHedJi2pbfYv8UyWD7i5VPftPSaX4zAfg9VzBpMAzeVFHU9bM",
  "key16": "uzVsoog7qehDMZsd3f7KpCE5Bfajnv2EiXDYZ9NQPSJfDbch5Z85Lftc8UzCn31HRwgMiRZSaTcY2gNj44vKrEC",
  "key17": "2F1stgLBfpwVrZSkvHSAsa8jSz7DewoYsNVA886hZ94itCF3Sxgjt81QLob76BgM9eqz3DG5yBC9UvySty8ATYtK",
  "key18": "34EMPWrTZQVYHeib5P2gT9k5Haw2vdDA9ikVTNu3b54cqSaJg1FfgknSEbnkZG8MbJJfN5XivyXfwDAmoTGhGpRT",
  "key19": "2smBQTVixz3Gqy9UAy5UT24NebMD6k3EsEXcKS115YJQJuYJVW7miuDzgAbJHnzgJsgyu24iDMNwELVW9BRGnNoN",
  "key20": "ur4itXKHhfiiQBhgosrxsskAmDoQTSZo3QKg6seKPrBe42JFDXbiehK35cEuqv9weug5pFXR2c3wrTC355J9RC9",
  "key21": "Hj9eZYjTncESjT4kH2ifns1fTWQNt8LhrGx6JPjmwKjpUZxfv8tMZqFU8LVD4LTQSbQKdzdrHAtvGUby5eW6SyV",
  "key22": "3B1HrmsnjkZ7ULdFoRLfaGkw9Z2gu1LuLjK7wN9tzXJxby8ESkXPy1xYkHUntriR2Y6icCDpXzCvtKU84G1dGpY9",
  "key23": "2eo2SJkHXmXpB6xwWoaasMjnbNVw79U4TMMThJAoUvsSWpD7WwdjE8Lq7ZT6bu238cmPfiC2SuQxm2TNuTS8Zk9h",
  "key24": "5hYoQuidpZrZt1a8sYSySDiP8kDM8PQDLXXFJxjH3ngU7P1ThieAXd1ASQtgWUzZdxcHFAQuowMocK7fGGbtiR9q",
  "key25": "rPcvy9xFEgDG4LgAC4vs3gtrprtQdxicuxzCf2zP6jPd5krxZbUZUX9z7ZarxXNzVUBFi66vXZ9uzyNmBB2CQ4q",
  "key26": "4jfLtZE4HtS2ygUwbULegTzfQwZn7J5W6BUHafnJxa2iF3owU8E84Uicvk7nhCqx1K8acgHbUU2FwN2ZHyWN7ETs",
  "key27": "3hTij3HRb7kQgZoJ7GUYtgC51poRA7jzgzyuGrJDhxDsUq2z7idgoy75jqN7tQ8Yrg4TopK663LNN4RbMspHjXH7"
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
