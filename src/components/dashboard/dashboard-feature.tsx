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
    "24LPrbHBMiJE2zp9mrAqa5S4HZRd61DBsgPU8VvhkJdwR3bUNYnA8e6mb4QVCk1Zj6JCKMLU5PE9v4UsZ7B3mSAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54kG9cV59ruWyrPkUx5mY3prNtS8qzQ4M7RBWWio4D4pHssDyfzarueAW15yyCjjLyJaQHCHKKaUR7vZmRgdrDXU",
  "key1": "4t9My76bZjaV7yt334Nx11ezf7bzjy18Xa2Vu8EMcqGY95ftx2xES3zyRgFqRSuaQyhPPWYhv8PvqJ1qmJj4v1A3",
  "key2": "3MbeuG9D9NyWPf4tLrTWCRRFYKr6kcEAx1uAiMY4whnJQxCnGqKC1wzzAqrWwwvQjeVd1GDsRHpeJzbuF4zhxf1j",
  "key3": "421QoJtr9irwsUQSAPPNcacrNt2Mwz8T8Uh6HYVBWxSb84P55s1nJjJMo6pecH4PSLAY97yHF1NQzJFfQn76anoq",
  "key4": "5XiUWeDLR3bnh68yZFAg94Exs5XGAvpTVxfJ8TCooz8QxAAEppmMosWgRSeY6cMrxBBqUvPjDDdWJ2zrJVEtyzZf",
  "key5": "86Qorec5DF8gqhx6qZKQWfvUjnLoXRjNUhbhkxsgbxszfowxT721RjVfK33aHWy5fhBEUdebWPcBHQ6zwRYePxK",
  "key6": "4rybF2gwvPWi3PqzcWRkBiqRW6gUkFGrHhwbDHK87ZdgLZgfEoF9UNhcV5CEYTPsjysukPkJ6Cv5z1mtVnYnqKqq",
  "key7": "c1JNRnryF7f8hKVeLTpqG9fhqgdD8cR3EDVya4u37EFh6cd238uatcEfAkBfXdmuuDb46oBiZzHLBQescwFSz3e",
  "key8": "5yTPbRgcn4BFYM36v9mTY861U96zQU9kQophLA9qsGicg4dJfmTHXzsRd5bnB8wGQjNg3JbCZCPbqdtqGV1Ybu1V",
  "key9": "5mGPZcjUTGqQP5VFBWeYc79JUdPFJAA7mU7GjvPQG8kDVo4whujdePKZ9Abm9jPCC42Mi8oDhPSA7X8DKdQjPyyS",
  "key10": "5Nyf4Mg3pkKUo9o1VyBkrZrjkA61Rqp9xhKuN85cKeefbi3LXDbs17vaZixm4HpLKFkjc5QKTc7sggr6TbmoC4oF",
  "key11": "4LKLfiRebZBqigmJKMigbvZneNhVLrMt7xebdXW5CrJPh2GVxssePyZKiHfCh6do68QVXdyhw1tyKUoEyZGeLEC9",
  "key12": "271japfm8qP46cmYW6CNDZQBrudfAENrHYF2vVJteeg6nQaEuGbgv4KgyJJjuqBFA4Uxh7hPRdUwLuCoDmypHpwd",
  "key13": "5bzL4KyLrP6uP4XEu5ZD8tcpNXPWNzpQtXdtxkGQ74FzpJUJEcZerVh8dNRSiDwHtXHLDwkSuga2fYeSdnTawAmr",
  "key14": "5KXVC9M2UBnFMPsSbwK5G8wSLZMHbqy8WrX6xzmhEjqKzH6jzDJKzG87cc7M7x2MR75FYd9tX3UsMJLC2HCRJDwj",
  "key15": "5CDGWKSQxBys7YXwTmJ9jgCM7EKuPTGLnYwQxq42wHKpKxPFkCyXdkzympkr1cqgdmVhUmPHm6gcyp3k55nRvmyF",
  "key16": "eRzkag95oaLPwNoWQBMBrpHU3bn7rXXoAvt94xEL8axLsWCJbiN7Q5orzKzSBmpSAAQbmpQ3pzkD4ctSZPbLoMN",
  "key17": "Xwbf1zscHoCDo5dKPRBXxzPEa2pNYfMBRkNvKxz9p4ecoXsmi1xNpoWms8UXDq88sJ1dYeenm6xYyystniDD8qi",
  "key18": "4qmNm5FzqHdkEUqTxGTJZCpq1Aq9xiz5FvxphVYTFVLkNj3rUjvhSngwp16X8MCyxSA71P3LoBYf7DoBftDTeiVJ",
  "key19": "4JRqoa1YwMU8AZVqtKhnJThRFh8GPxqxfgArnmZ5Z1HkEi6hQ2yGB2nuSt9BmEUf9GYsFUufgUYCj3pmFyfCaGsu",
  "key20": "49jtWch8MHzgDcZD3ekmAtinFK2hSw8vDevGK4rqeutt4BGn3ppwYtjzUJgYhYJYSNyt3eA4S9JhrnLgHJ6mjXMa",
  "key21": "2JTCe1TA7wPocCLNZM8FVrkJVgPHYFhVhpZnbMKD9fZeiKFo2TsjGxo2JKjFdt3jmH1ExYAFk7QozQmVqnTFmgfC",
  "key22": "5cxB3M4n1yWc4KLoymkn3p5S4ckCE8UZzuXHDh8TPDs8S3XbH5fWRBpmosG3CKGKgd3Z4YxcxQ9MDgDtJuEeQjhk",
  "key23": "22m2YFayjY6aAVftPUnzjP7SDpJLUHDp9noXgeHWmad4E5xbwNbRAMExM5G8aRW2vatHMokjDVRvdXNy9MHPxvd3",
  "key24": "k1UPcuDi2tQyPaQ2H9umNBcE8a7p4dEZ21JbtKWJrmdrAiS9zwD1TR4dxEnJepwZdehrmokzFQaMKZG4QozBnNq",
  "key25": "tPWQZg6J93RpxtMyQv1JojYWHf77qm796FQmq1qMAc2f3wS9dxxE6Q6XD5omDkazt84ZZ7pNzioTareQRf8B62o",
  "key26": "3nwhmJaYc68wVzr462xcWi8XVD8f4jF1xMqpkWjY3tx199qtLPZcj3a2T2RQRKDeJKof71DFdUtB7Ajx7VqDk35K",
  "key27": "3yXiMEdXgvzN2t24Zew6oBq8VnSDHadEBySoxf39j8W2EBLhFvAt5MxgCJtXVvv1vLumvZTsntKuuK1YwcoiT7r5",
  "key28": "2TBCFR6dvBg4m1hLFQSQ28aUoF22agofAmPZVpC4rVPoX4NHbMozFTu8rPiKZVY5D4AHFPsF2dpD7C5YDE4uHWqP"
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
