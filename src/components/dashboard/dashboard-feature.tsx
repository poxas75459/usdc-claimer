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
    "52wX3JPMjhLFL4WHaLpBHqQtwnPdBr7enGzg3Sr15WbCkoCzaDe2WxFoEapVyg8MUzjxCZ4cddXPiBNYNaeswgps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJCGWzTw4Zksi6QBbgve2yv1MJXc5CWAw3n3crGjtJNqaESpWBAdUobvDY7Sr2r5Mmh9twp3HW7rahuRh2AJ9tQ",
  "key1": "4EBGQo6ic4vhtndqdESoeLJeWaDzkx9mBhTDRFAZbdtjfimCQVoDLJ5TZhEdas18YDurjF5dt229jzrw9HsMVPPr",
  "key2": "25pQK6yULNTDHwHQzCoVBXEhQ9FLxZsLeVfMNjoS69nY44HJPsawgHxy6jCUf8Gx6vZdiL9tZNKgexmhoRUcRjuA",
  "key3": "jaDPCJU9CboMyhwqDzbZ2LoS83ZzcFr73DMUfVh2QaDgHrnMwtVQkbXJs8Y44yD8s94KicXDa4RSdfMGstNZTGJ",
  "key4": "2UzkcQVGeqcdWzXEgtHHVAsnL1aYcggGrHnQ7RuxhBnKsrkLgvvznhuUSfUDukLqHZCFeBirj7FNVKcPKJhUCeDs",
  "key5": "56rvX4Hj2JuTyNzzEFky53htrUir94dnaxvgAJdiR98B453cRrwPPu2S2hppsKurV87kZqCncXYbzZGjX5BMCbX6",
  "key6": "4kxqZmRSMvuEpkSmiTZxnXF7J7G2Tr3XAFZec1Bc1bxsx8h4ZMCAducZTrLoXohNhsPxXQJ6JbbzXSNx5q5UgSCS",
  "key7": "4kuVQCUFQTmdAoXLD2rXFvCqUsb28MFMMWpTxXNUQVafVoKKJdrWx5ugUoK7WrvWqw71W8EJ7U4pB6mAejQE4hvu",
  "key8": "59YPXA6zMPstDe2weY2zJm1v6MrMecoGFZiLuV9v4uAwXbEhTXHTzaxVQ48pzcuzDLyjGbDoct6A8wWRxezcmeLM",
  "key9": "3NxJsFDHLA8Ksd8ZHN8MP68nvYUUz45mhpgF2ZdRWCkgEuUhh9uAZDHJMDW6vmkUiJXHEkbWsMgYYv9Y2zjMKYFH",
  "key10": "nurf3AVp2yHWKsEPc5PQPgedn9vbH5zyQDfNvRJzTQveW5iZXe1hDR8etzwxA9YzuhtZcfqPPEH6rz7hSsoZt4o",
  "key11": "3uPxgJttpag9eTankn5oFzoX6nV5v9rDDm4ZNgH2yN21ACDqHc1SCvbQkyW3WyV47sKjxuiFH5MEwWSFYTMkntgf",
  "key12": "3LyyR4onY5QzSJrAZUVJ8hA4kVpKhUvHD3wEZA9toaSM57jB2m5aZ7rzfLHdy1uhomj8uLya1auNtkRwBS2sM6KH",
  "key13": "EjSZCKUD4G1K4oENAQeLE9tAVtsLKAAaVPih9euf7WzruCPAWYDUziQrhrCyJbAmvP6AwEom9wetpbmjxBJtnNw",
  "key14": "7TSqWfwPYfzPvCZYfRmcEdHctu25f9ek7PMgbi61NydepiWLhfrwdAagS3kDZ4gsC3K6HfddCJthNTp4tj9g9Zo",
  "key15": "3TLzLfhvR1ER3fkRQxW1P1ykcdVaJ2ZKkwpWa7RcNJPGc34yTHqUUsc7wKV7R9XK6UXvBxymuPLpWXkNKTfAKkGP",
  "key16": "56LsNHcFAUYLoxFz7aUq9Y2WprndrsywDw5vTuk5eLeC28b6MBNDmyYs8U9aBhk5vtbqXbXpRS1D9mJwixDsYhqC",
  "key17": "h3Sz2PQADGPvoXcCmE1E6kXDxz4PRf3UiVvcizpncJMLZuHjG6LC6Cdp96rsLfNiqXqUuCg5qhEJvSHouCJeL1d",
  "key18": "4ocnQMKSLo4qtSa9TU34efKJmRWcF77D9LCZmFdHweT7Qyax6vjVsVZ5g8MfFgKBWXpFySqw3CPhbjrQxFn2oJJC",
  "key19": "5Fj8mP3ojSJin213oQSTzxv3uNkVVPd1j8LFNmRkif8rJJB51AcqrxxNz3JwJhUWmMDttUfk2UEsZyJuK5ZEGD7h",
  "key20": "52zkzQdD8W8xG2SAejhgt79VQ7mdpm6DgcF1uQixEpLgnd1uUYJwuWCNyN1x7AKUPrtA8MR7tNvFxzqcL6oYW3AH",
  "key21": "3rJ4Rf6xza8MdgQiucCSjUSRfxpsP8XvPNsWFwKzuJUuXhUmrooX1At3SGcP7B2fKzEVZkzGQAWgu74yFTrqJ2nz",
  "key22": "5EvgXs2RMgiFTrpSLGqjjT6JJF7GLDaUFpe1m2Fb3kbC3ttowFgmsFwmdZ8bLKB7g3xyUbro2ow5rf5zaQBAaXY8",
  "key23": "5FfyJNv7374zZGh7ip6zubGqw6qgEfMHTYmaa5aTTNJxLnyADEWV6Wv5KFonFqDxDktd2YRKCkQyKc73xVhN26va",
  "key24": "35E5kdcEEvTC97wJg2tuzDB1c6cA4jyDq5TUwXagjr2UP7JmtEgm6C1YWRcEwfzGrVWxonpNcgcCQinpsxPRKFTn",
  "key25": "5MjoZ8nb1GUxFUiq3ruDPAw95dppUYnxRXMi6zNPJNeVzmU3tD2K4PeTYUeKMRF87kbUu3Qz2qL4WwRtaMpAWDh2",
  "key26": "3NDXTYZiopgYkt1pDZz1XDuLpYzun77ftPBxu4ssDUeQ83XcQ3Yds8enVz91U4Pb2rdYsdid9M4VqcQybeApQ5DF",
  "key27": "2MVU21ELU8mAiUCRHtWpjsJGb6MC3vMnpg94uY9Q5vx9PnQquDocMyqGEqVk1FhJ5rT39AYtYfDZmNfb7JYVbbzR",
  "key28": "36Mt94rW5BbiBsrTk3jZpDAsSz788ya5rXGyuqbVctzvp339vcFT4DCP7XxGLub4UibWBpLvntwETUsMvbvSjM2C",
  "key29": "5Uw2BQgcsQbXNxbsicMtJhwDCV18gj8cVFVR1HNBM3jW56AanmZZ5VGfLWsyqrt9BcJCKX1RVcijFi7BfkUKsLNJ",
  "key30": "5ZRmGLxdgYqkrVVUT2bYJt21eQyxxeKGkx77htWsMdKpAKYwKngLBGnFYTjLBzQPFqp722H6iFkCogwHHs39YWcT",
  "key31": "5qpNmvKNzJuAsF8pYN1MPm5nE2xg4Hzug3yAGpiqHnFyuyCCpYeVeoMQRhNJ12QuhAh7bphorMrkkT2BaTzVPLnu",
  "key32": "4U7F4LArXYbJkqXPmFNQsDrsaTprWTv8TMp5vnFJWNA45Q5Cj19F9F333WAs8H4J9NiQxKZynjxSxkcyEdJgX6J8",
  "key33": "55LJpLMgNaYAXjMksb1a6Xc5uGxWNVKbAZhrcTNht8ZDYhHav79Pj5RfGyG1z5YZ7BassWaUJVZKsZni7e4M9eAs",
  "key34": "26MoJw1FrDiiKqJEAZ6EKcd9fD8jukmRH8BRCHBe9p1CbxnNQDSNxoRpiMnsENUTULKLLdZkTJrrA7MVWchF9zGZ",
  "key35": "4hY59rXVwinwwLbeu8qkJFMc1WbbYCs49EKEdVwBSZMCJZB5cwtdX9q98S2HQAoPE1unftZbaPA8dSKEEk6jPrG5",
  "key36": "5Y52CRdAKxhna5j6ENnanRZAaRgbN7zYoskKi3Tgpgv6coaDWsbnt3x7yDLxBJYeEBN9bYJvxwzq6p8MGHHtKVrv"
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
