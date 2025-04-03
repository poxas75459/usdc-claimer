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
    "2X1SBKtqnjqQFNMSiJYqyokVHBKa9DzxgqxprTwZ3sPa3THsRVETwFuqPnXGuJUw3r1uxnzUKn7R8fKiUFcxz46a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXfnTLe6Jzrt42n99U5x13YeJ9rhFqWjoKsKaafkc5PbfMetGNSZVAZWuWSWKTrvC79w5L6QBHPWofewUHn7sYg",
  "key1": "5rfXdtuGADYn2aRRYSY8Aae3S8K8sVhio1oiiEMZghkEW5qvVgER8cSDEZEzhj1ixJV8GfFEgx8xUnL9FwgGMByH",
  "key2": "4DhGQ6jgNrdHhgxCQqmVu4goZsLQaHqDhCkMtm98dK2yX6aThCPSZe3DujhhKnanMYnkRNFGD61eBSwzsprUFGw8",
  "key3": "3C1V8xRzJV3aALMfEYdyJNEPknUzPU1dd66hdc5YWz59udi4KqcgzzmHnEcBHs4zuANRxocRm2wCpPJR8TZkML39",
  "key4": "2bdgCzGHBz2xTQ4kkh3D3Rk46YPaTTabmY5m6pmPA7AG1ML7zpc5ZFEdvJVaFTsNXu5SF5Fn9V5VbZumaLxqVTaL",
  "key5": "3tAB36Gxh882Mnefjbta4UjcTRQfPyMPhLx5BVEYAvNrTZxrGMb7iTZcWoNrJ19fuu6HFYAco7kzSziU5fCDhTUk",
  "key6": "VxQZQNqUuC62Q2cLUq1Ps1JnjETETkD3ZrahioGvNCit9LRJLkwJo9MDoHeXw7otdjt8GbdB1cuKWPERYaLp2uo",
  "key7": "3Ki9ZSDMqSAaYdRjhS2EeuA6qEm5L4K92K3KZGFpAPdo3jVSn7cCroG9zWhFkymU8s54C3SHaKYaag5iLd3fpFDc",
  "key8": "39krhEg6BmjGjVvyWcFSDAj1Xiv7D5vevL5yv5QfnZZRC4JZZJwnhAmeSTAiT7XaLhGsvvtfWBysX21MR3mG2eHb",
  "key9": "2QdJWC3UHWfoGKxXzp3oUyJX3E216NWfHZ7g86v3mUGGSfkXopmT1QDeiL4Mb7wdgYeJ6YKtXw2uNzSQR8qFGqfb",
  "key10": "3b9QwT84LNFU87fE8UqR1qf1iLzUbcQaSun137unbqbYKr98ZrZxRiFen1WuvK8swRPWgH4uYWZQfuA6g48NQET5",
  "key11": "3d5Zru5AoUhFB5ouR78F71KtTJN6PMUvg9Rrmpcv41T7rKLc6GpnhMQuK9Eku7c8x7aNPqTeJaRy7dsAt4fNmek",
  "key12": "2VdAvh5XtrTwHz1FYK7EPePb4f6bLyJoCA8ZH3oavx9zyzBXDpyk6o6rWBY2SPqjkAYXPJi47er5xWHFvtizwYAU",
  "key13": "2yXe7uqto5RNhvLWm24qSaFppRWYR6pL5kLYVQCspugTBHDaZXsg3XjCp6VRbyRhchxF9RVLcuLqFTvyvuX1RW1q",
  "key14": "4RTKgZ8rqVSqpFV9MFtUkoqeAsW7qWP3KXQ7qosuDkGHfAMmtkcmF2v1xmxxp7bVyYXoB6pD3qyKnHoC4nMiq8Uh",
  "key15": "4hzwqEYuGDDjkuTuBgFBRm27f6bKmLq6LVoq1ciwCtafuN4qenzef6FEhXdvX4TSbGZDWNypYRtsWK3f7PvYsvDc",
  "key16": "2qDQxKXijMtq8SPwFQP1ctQ8q9XkpVMtD9JyJMmmVfNh3jehSr3n3LJc9KHHUvPcbt3u5wsMNmH96Q129YR923Yf",
  "key17": "3hs6UeQ5Wjzj6WguVZLDywSYSN4RwULXT26rewap24ag8NfqrifM5SKFDMyqqmKbbM3UU3xsgE7q8gLpeygjQFjZ",
  "key18": "2NYnpcwbeYTVM2CHtH9qUxVubTqAUZJSjMsX6Ne97bs3G82mhX8nv5kcSzPUNVF5uSsuSKWDwvEXuHHLwThZ4Jwi",
  "key19": "4BJBwaBC8A6gtsCFc3RDXa57JTZW65Yqxji3jo68YQDMnMh4BVRhXhEjmGtVvr7eDH3ktxaxA8ptWBLC7bzuNbGh",
  "key20": "5VRgURzu938nzmQUPoHZuJoWtrRnXpUALzcZmqAk1fFG1uPuzbpRv2a9HjptYTc7p9gdz5QvZFb95BGz2DhemFZ8",
  "key21": "4whTGnrBMajSMujKdV1HRfL9F8TzTsBbm7A5R3tzcF6oumJ1zx9oDeCn1onNW6pULnfeC7atjjtuS8TBwSbrikrp",
  "key22": "3SYeh3GycmgEV4Ht32jr6bN5R7df6yFjAnBqK3XWhadVfwsKiD4t9z29XPx8H7pHxmtJjZRB1yU3UZdr5g5wSWZ3",
  "key23": "3y1hfNhdsk3DaT6pZPfWMV95pu4QLcZMnUridmsQrfUMEEYN6jqpXnxH8MDimPJC7dfuq6ug8wDUW6DB1CbjpjvT",
  "key24": "4kprq8yy3nBug1abFwzSBJb7V4W7FR1r4wFB2rixUdvNJSay5jritP3c8KjxFv9wg2EHLF3xTDBi9AUjPhV6eCry",
  "key25": "29Rs815qt7b41GdBLCbNejqAsP1JUmjYdYbXh7AyyESmZssEsdfLnXAcZ7T4GAvkyGpYA9GMuJ4nXvupump42J3H",
  "key26": "4J6f1z4zYcAsvXpPf7EuD1c5wiFtPRCdH9U7b6f78Yd854mH6JsdLW8vWrycXWmtJb92qQRBrfnwMFvrZvD1qpRi",
  "key27": "xEeQpoXgF5k5YGzdez5VdUJTaDwbQ4Z1HsT5Ly4viWrTEQkaJUKDxY9kHrEdBddpvtdBSc6aG52YtSnr4RaPa7U",
  "key28": "2avV5TYyPuTJhFWQtJmHpeGPYhpskhbVRkkWDrf11DZXhH8SLhjKDnRErqpUQ8z69PXmGjvcg9dyYLMSg19PjfaU",
  "key29": "2XicE9f2jBrpPZmSTJ1JQfT2DwZorYL2o6PFPiQ18LkovT8fpXHDcGXYm7oygeYJXZR76qbGGUvZ6hsHUamrVYye",
  "key30": "5T8kqAeBpLWzjv5gVPBW4X9nxXUZQNji5eB6GwtYYzHPdfKB8DbjKVaAkwYnPiW6UFSQDGYRwoNYxgNyGz59zxgj",
  "key31": "2Gz8aEcBcYnKQFYkcarZFLY1Rdhws572CsGNWgC38mSRzWVzTziQMDkuXx4hrmNFzHCAxDieoNgik52YzV2XmMUw",
  "key32": "4ANYiqc69xtuPze5eykEV9B1pJPFitZZD1f12cx3DoiitFwYRy1x7LWYvkiJBuArHPjjn75nZjiyvrLiFPGukGvQ",
  "key33": "3pa41eoJiz1yXq1uDHeLDSGhp2zuHtd2fXHCM8U3Wx2UCJag6zqdDda7VHpY8oJwVWe81Q1Cmgh8W77LgCu8AKNT",
  "key34": "2riRh71cB12NaQme1bTazPR78MaBzmGWDcL43pRBwEbWFoT6BZmLH8JEookVPXxKrdZ3jAQoZr1dwMiGS7qBZEsP",
  "key35": "58qY42izZaLx3DuBnZJ9F2E7zCTupozYoKcm5PJAZxjKzwUe2ESyoZN6ka5B97yNo3MsH4BnqUsVAvpcydmHic5N",
  "key36": "5fzJgJwA41mH5rth5wD2QSyNQYrpUSfWhVqTbzMM2NHcQx8XyzfugNRWzk6RZhi1UZ5EQfUVCgm6bfL9Za2PPoXN",
  "key37": "DhuFsMZaei38mpbKnCCw5wiPhaCCtrTZqM1DtKLVVKy2KnRrpK1iq8sbW16fQJY7yj2hge8DFjLrYM2GGPkqFEo",
  "key38": "3fJHjQNerwRVv69aEHgWvw9X93PtULuE6A7Vv3yDsVWpi7kDW1HNKqsjTU2dykvxsJby8P658LbWD8VjzXpfUDKN",
  "key39": "37nP1WnndeCS8Vkwdb26siFyrG1SC8AanJQzoGzDsCNJv9B4odjfwCb1VbqirEtFEHbb4NFnHJM9cmTcm839uF5i",
  "key40": "4PVzDFeWtmGph7Z1RSsmn92A3v1JccgKP7Mhm2wNuuQzkVXS6ZVi2Ucg1UYxGFj5o6KwbxDLjraZ6fs63UFvKg8m",
  "key41": "jVLiBhG6UgQpRUN96sSwRBUUCjB9kgRYhmZZJ8QBzVaAsJcozWhMKeYva28t1WKE5tkiFY3xUycpTPD2udmREf1",
  "key42": "5y8UDcVdfdBcDEQiz2K48DrM5WKRYD9RRVvYVCWp1iSC19BcVuzXnxLCutdGQiJTGSENSmuAdWkhyRLKMLtfVnrj",
  "key43": "48qkdPwStwp7agLddSgcvpTR86joH5GkjRmv3VduMgqocSq9T2QqEKhADCBCspjxtyQxSWXCKxQ9ZBSRswznDzSm",
  "key44": "USEtY14X2YcCceLzFRve8W376XwPWpdxbpheBDgt3r9FxuR1ZanMT6XrPDxBwS1ZxkT98FnqtgiVshSbwKRvdkL",
  "key45": "27YMAaGsrmMkVSzjn6asiCwKZLheng2KcMkZB9EdKUUGtU8Cg3m1fVz74eqJvaftJK4p3y6eetmGkf9ibvfqS9Rc",
  "key46": "4ndLsEEmjzB7LnJAftQQRsMGh3VDRXVyqTZXXJjgzDT6QamzXJjob26sL64ivCTN8G7AmViL6GR9aLsZerzpABWF"
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
