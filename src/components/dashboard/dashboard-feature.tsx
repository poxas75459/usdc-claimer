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
    "iXryBj3RdJAwkzMytWvXUj9oBd6K7ct63nrUnABMyCb94sKkoTT1BdBUYg9nKiKA4XGNKvPTowyEzVQwxZUNY5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQvTr4rHZzh3fof3brrzKDnS5P3Ku79ZLdabkFzkdzUKdkrky43mB4UwnVhxZ6YRZe6XFeCMkzKwWnCQC6W1TYq",
  "key1": "2Dz69EsgtvjpD4h1RfN7WhuyS7UHigY1w3bMnN9bQXmCkcesfudZo5zFkdMF7iawG2PUVopUDSK9ic3U4CebcbjJ",
  "key2": "3prWFcm4wJ7eFqJ4MG186AqG2wMeM9KKS8V27BrjV4Bow3L6vdhUpQJTtEeBFANmkNVPzAoNWYjgvdNSxswe7zyQ",
  "key3": "38GJST7MfJoi52NUMbBv2QuiruXGMmUAzsB9jZc7pA2LjnGLcpHSpoATSKKr4HAQX2F5yCn2ZupAjdXtBRH3EwPG",
  "key4": "3Zgaqv3j8hdsSEc7nk9vQ7eZgXnF656nXLt7kPV3smoXvZkc4Mk1PoDKFEo9ei8W5nnu8yA1nxSxbGHSXj9QFRya",
  "key5": "3D342jtgtFod2APDk1sYnMXGTa7nCnUP5aRHpEJrB95xGodSc1EhJztRzQS1SXSuHBpAeptVZrk13N7pjKXZZQXX",
  "key6": "5C2hQAeHUKMNdwnNmveM7qHEyqo1KjACusL9J6aPVKdpWKpS9nV9QE7ohPkE3uz11FVda4StxJXXHrLNDsgbJ8Mt",
  "key7": "59edbtRW6WzwWesZdavr6axKUU2dPky6owiuPqSpTQ2YWSQPNf66WKEay4BvvQ4eozGa8iTdfrNirLopCZ8jL17",
  "key8": "27hn6XLAtTwADDRhTwQtjAHRmXHUr8Y1X9BzAzainMkJgokQCeWyJDkoyMZ7j9cTf5UrpSabbmMVLT3cv3PSZ5gG",
  "key9": "4Uh4oniav3VKQkQYmm1b4hfpXMZZ83n6q4mLM9vFCB1xEi6oy9vMMwUm8DLTZdJBveBLLDPgdp8NtsvfcuYLJigp",
  "key10": "5p7nh9krARG3D9giuvyRfMhAG8UTQVg8nRHYrHva5F9Wfq6SfJSVZYFKjThH9rVWfS8xpdKRZvPTVPpArmNqoJHp",
  "key11": "637K4jbVAPqgb2QMfL5zFcRB99KGYnTpTi6cHHAtJ65A8q48iq9d9nBwvD51JpZZwtFgoscZcpQdVfYXU1gHjJro",
  "key12": "ds4BSUe4V36sxWrAgs6EcpFiyZBA1nZUJkvWNG3qGoqTA5iTdovkBKtB6zKEm8ezFnAugnsXoo9p5JbZxsw3qHN",
  "key13": "4CUb4wjfCViPqSGeAqpMfPCgcnqXw1xBFDYwcrA78PLaBikfaT9qyWpQybKndwQViEZvW3x5EQYRqg9Fs2PdM88w",
  "key14": "2Y3MWRan7LLSVyoQdtYZUGcYQnCbHpDosTH5oTjuAW6GYistSvDPS6pnKUUPYYnrHHaPAgqAweP1XoaenypeWLwi",
  "key15": "3LvvqGpcuJtS4X348B7jsLt9WHDrecnBe8MeQJdxj1UaGAVZeNjh6qtEKsafHJUbTeiDX1SpWwNGRAkxGMyAMpCZ",
  "key16": "gwXaDhr8h5FMCNcZP8Xyp61woSAdmZssyf7sTwgyxmSKZr6ycXSc6cZuna6uDySNhpMHtXEvMTmMJGsQa3hXqNj",
  "key17": "4SpLfm3MmTUYTLEgTr9nLfViKC1yFP84DGy1xBxWZe1wWJUdBxEo6RHtvWLHJTz8ywMyKegACajbiF3UrRRsVZPW",
  "key18": "27gsrPGiJsQSetjX6GDNEErtJNwBteNN9ZoMn8ud2zEPYRs7m1GutfNc7xpgNYKEjduBKyiAcfR29w6zLChoaPHE",
  "key19": "4jzw8TnkDXjPSsZtQ7xiW1NnBEhHAcANLKFBMXKyzbexVw8cNXPZGDpYM7g2avtDUyLWS3yPbGkBRPZa46XSpQir",
  "key20": "4xunYKkE4xf4TyJ9q2s9BGbU8wsJYuUR441at6eGHFaSkTwaj1cndzm6yGEEFDWsm6x38RJJVnZ4rst85THvqAhP",
  "key21": "5ZpGQmWH9dPAZoNzLWojaRm37V7mu86rzwWHkpWT34AbaCohxyaRrgYi8UTN5dLZJrKfCSdsT392J3M58Snkm34i",
  "key22": "293RMqXfkHASW7fjN1bWKFHq2SqRWstk7igyuVpEgoEQqZhLjFeTeQRsRVFttLtEt1jui6QbQa26NjfighJLKCcz",
  "key23": "3e5usRGt4UQv41cqVWn5SVKet7jyWRJVoZDYmMeczP96FHyR27wLbymAig6Sdy6Bu1AYrGRFdJBCpsJgzJCvddt6",
  "key24": "2FVuX7XM9HTAEFR7kSUPYfYbrmFRWMEWztCw1ct46yW8yFJfQJB15q29ZtkXp8Uohgf6kmE1cCRWmt8933fMmVru",
  "key25": "3GbLCcmGuYaC8PgL3XzerfBcGxwDyugRmQbmLc8MPphDTJcL9dJvcDPV14wZgy4wExLLEKAUygAiqV4jNnrGrciA",
  "key26": "4xcwzfjbKZpK2dZDRHEXhXvYgsfguEH66wA4ZXbmMGWdEs1KCcpRjrwq4jo7ADnDTzN1HvNJA4Z1NNjY51KGHcHf",
  "key27": "38jxDAfg8h5rriejfDxbtnrXmbdmq9XrQ4jYc1eKqzgq3AiaJ2n8nrbK5oXkjttEihGfALmXrieTCUDN22cSsKJx",
  "key28": "4F1uMotktCkYaep41oP74vfB86iz9b6s6tG98LvSUtVFa4viTUusiBVVbDnyMf4go1icZd5DgRKpaz772Ko7hCTo",
  "key29": "25UT1YsK6qFmKkSxJmZbPb6xQp2jkQK152APcm5svRsErFwGXE5FdwhP8sSn6QPS78HXtnjJHi1uSuRwRNxCg2U5",
  "key30": "QZwntL9HbzSNr1G4K3dexej3EjyG7Ut6u83CFomk7XXXGJqhoV4Sn3vs8TTHgCTTA5y2tZ91PNyRKdYL5xob4Pw",
  "key31": "2B4r6MGbskKQBdLTESjLfqjpfH94sobtJP63ZL3h5z1Utc32EGMGh4UALzMQ3vqb886pWQBsxQizu2jCEeBuBYcS",
  "key32": "5WCenqfkoFovo8EnN3nk1ZkXukmM8N6WPmXjeqaAgc2DckFQnsvJ2J3HkasP8UBpv2dBK4kwtW8aD2YoamuVHUmh",
  "key33": "TiexuvCLf71RhakzFxqkY6cqmFsW6rUNFuYGcWU9ZegCjp4MJUCdk325rvqP4CDFAwK2funsxqmwk5YgAmAsZk1",
  "key34": "4bnW6fVPX8v3oAcnCqed4ACrYtc57NLgBZD4gePskC1YnihZFH1HsK6Ksh9aYGgJDZpSNcKop7Zt3FMfCQx2wso5"
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
