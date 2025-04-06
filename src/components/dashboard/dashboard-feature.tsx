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
    "57b9RYxKdanRKm2fMdpp9NFytLYqsJ9WiJWzqT7RYceqvoeMTyUqyzKtJoeuxCQ72LxeQegGc3EAVWadRotqrqzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G38DK3RisaHfjxkNkUdjTLuFogSkaHcEMbkFbomSH31w8ui6eUVnTdeHWE31j4jF4Ft43e6EcEpoQsA2Q38hhrQ",
  "key1": "4ENRHr6tCiZmqjYkyLHPyFQU2WvzZAtuyxhBhx3JP3que3BTCDqv1XQZdXgQTLrJektqt6kAs2HYW5RWMFYLx3BS",
  "key2": "528aPBM5L9NeUTAinagpwp5JKdvevTGWbGEG3q7jZ2QEqRpL8akA34v4S4QbxfceQtrxpUDzThHA66v1iAGuQ3G4",
  "key3": "2XAxUychsNzqnWjQ24ZcmVHk8GPzExACg8H4oyYkZXBymcVEzV33573HmtaDZrGsMCiRfnC1T9b5msdxJDJJoy4H",
  "key4": "3GiJS8UMntEDe3VgnxzovPb4zBMHwWJrjkU9DDSaAFUNxzZVtDcMTbtezNrefJqtRSbHU3B9CkhoSHmLzY7J4mH3",
  "key5": "NKqmwewFnuSThYrULsrUqjTzsXL9GHAVUzGUSUYPqDwQXkJ53vsjSjJWppKXi5ZfqWmHe84z3K4YQGUxpCk9hyU",
  "key6": "5pKVNi2qASwvBXMvqRr6cjxapv7rFoLxnaZVQSU4Gx3Vx3bQhy8xfZGGmZrQaQqrzK7UY96TLHcAT7DVQo1Y2VLW",
  "key7": "2tGDRjmHozPmcB8gn6mxXxo8MmXE5XdyA5HfbZ42otpQvj7n82YG7VMq1H6277iNYAC43cBQQhFykkoA2bLcJ47s",
  "key8": "4w7MFkrfx7Sbe4VQeMGJEfMAT5Zvk2wWs3GHWRTTJAiLgDN6BJ5DeF8AN8B9K8XM1uNqbJypyrsECPZ6EaemuZen",
  "key9": "4gwr794CG5qAwzh9j52haFkh2DcGbT15f8aFxPZ5goNb5ZsQvdFjiCNqoi3dDvRyBZNmNnqK8sVCmFrrWg84wNTy",
  "key10": "236x3gr87jumffjgS9cxKsJ3RRUx3u5dXXenPAaFzp5qT99FbS4dArxjS2bxyimvHasjGdiTex2kGwvBqi7srxME",
  "key11": "5bUP64WwmVfPMTsT7oWXZEyzXoPbFoN3GVoS5yfxsUWcKkrYYSpQ5p87em4zHxdBNgegfM4yFp7rsdMDAyiNmkMf",
  "key12": "5XpsVJhJB4EwJJSFmtBANLasxLZ1Z34zeTTqYsU4XCphaGwuYLvGrbBVqihVNfaLGtwhe4bpMbf4CSNen8zmg17A",
  "key13": "GkQHoBehKv4UtTSyq1qN8FJydAGB6CSker4UqTZR9DH3Suh7D8fKzLZuYm5m1NwyvrLhQxqwKzAsqHvLZ6c4asL",
  "key14": "aXXdTpZyEfjvzTTJHNmotLgisFSoFawprfDNw5fmAGrL6LZ8tBHjuGAVviT5jnikAYRPqSwfXg88SiXtCGsYxeb",
  "key15": "3TmzCL18qngkVB3mZBu3DB5ecdYWW4CfKPmq6aTuayHH7h1S7jeA6UBccTh8v84tbeL46D1wMfiiZDEeKBQoqYmf",
  "key16": "2CRyfGtGY2VdSuos1vXjpFLCgGwK6pWFqH2UPx6kAYD7XAZhdd5r3sDY83x9HZCwZxHt8fqQGJMCHoBPmZNKWy8k",
  "key17": "DkYF6NBSjoffzxZdpgXkGKZQPwjXx1NGdeQdxnSm3jy2mqmtBz6DSLhZPTTuhpM6VGnCiW6u5WEZa7voFetSnMz",
  "key18": "32spLuTgdRzWQbtrBKH3jtsvABypFkDM5kKFvu8ATbwAkaJxwqZVZ4kU3Phv3XMRHRN9Lv88avcYdrUUo86d1v4y",
  "key19": "rjujeHNGDfw5XAC741gRiHS5QqZDAJwEZXtKtkHPvnmrXJWydfLhpEsCfsu1yUbwsPH6F4KQh6yiivpEYUKNt8F",
  "key20": "2TH6NZe7hcei3ZLwfSjn82cCW5Yv937W8VVP4f9Q9FgPmgBKqb5RAVf2nAsKP6hq8bvuz24J8Jot2QBRYYYjenrT",
  "key21": "5LFst2t22BnSuqSYiW9HnHYW9sG1FeA42kctqp4LzjVAcDxuEj7zRrY5sFpMtUcSv2QbHEQHsze3ZCo5PyQuY4VD",
  "key22": "51GR1cKuqVjH1KczJdNoheVq3GJpt7ezGuudwzUt1vp4niAyEG1SxHqaDCMJiHNP9ww2unznqD2oUVAHJKnWtEej",
  "key23": "2XbMFhYinTGGWkNpn4qQgJT4Rfsqg8GbPhygZYScecWraoZREpN5kJV6QkzjbmzXnzXBtGxwR1fMmLuQp7EnAFc4",
  "key24": "4ziuwYrnTAYESSC24kQsW7pC4RUpArKE4LNz2KN4bn4XJmx7aPDZUkpmfNwEEh1Qa8wkxCMcBzhKeVwmGmJVdBxt",
  "key25": "5scLcdw5TiNUHpUzYy6u2D1QAmzwc5KD8s1HBt9rf4oDR4c1LPzSdMwbhDoS9ZEs9XKn38SCYu7D6TTvbSiNvZWh",
  "key26": "5Mb2kg5nBfGmwSk5W2SZjNgNzYMoNV41JB1XbFuEPJq1dmPMTenu2FbsKfkinbE9KrEmCMbkwVHvfCwwjh13SniE",
  "key27": "yXvFvj4cx53W8mbd57EQyWpDJEtD7jVpndyYosBfARwgKMjj7DPHdXcvzXmrf1aYUm2htJEWEnWxUFfJCUAobK8",
  "key28": "32JEi5v2f7NhPQzGyrFzRHrUgzteJ5PLz9KNdfsqsTD9H3wnsehGRhFkFobnuXJbVn3Rt7P7ApZyKkX1tyzaUHPB",
  "key29": "bca5ZrALUTpS2TkmiohjsikK99MDrMsU2kWbkeqGM7mqfhyz8b5MTsvi6YY7wmbuV1C2QYGJdCepGpyF1LDxgtx",
  "key30": "3YNqb6gcW84Vgv99i67VdrdGHYmi2kpE3MYfsKADnGjGv89EydCqAb5sbFGPZmig2G3gPA8jcoykWXRvVkwEF6QC",
  "key31": "4yx3k7C4MfTPq9sNJtQckHv87d4QQ5iPGnSwRqcBjvWUNSsRbNHsbqeNdBXQYvnmEYWrmfMwCG5sN89F1aaK9BfG",
  "key32": "g5qKyY3UCtMvU8mxwnz1ikwXns5mJoYGYGa37ChA35omDr52mk1xB9naKcDFWozuK9UWcdgf8EjcCRwWxSbDmxd",
  "key33": "5QBLqoAA1zKpiYN2hpgoyrmEzvuHdFB8Fe5XwXqPbZUzURg5QJS2jnjKVVgKBrWiNYs563rL7998PjSShxLKL998",
  "key34": "54eKRDxaTL2QXxCJ56ERRC6UuTqqUoU7y8LLajT8Z4N3p8EYjzqvde8xYP6q86uBWSCj8VeKuZVKyKAFvDU7qbuL",
  "key35": "4XuAvCSX3QUfm9hpZNwzoCWpiQVwwobRzyupQWDWRgMrMtaFJfw9EDJnzPwW5YAG6SxEFonSvseBKyVKn41TgnSD",
  "key36": "3QyGaNFE5TfKqmj5UxyymsU1aW68dGPrNph9NN4nQg1n2QxUpbuJXKeFJxcqzPoxij4f8T72caiFvDMwuY2P2n3p",
  "key37": "2tRm5Jc8SNgysL1UyKBJdnwWiDCwibQL3HCJNdjMpfjzJTvFqaVmzGqBMHf2VdBam1YaMK7he4wuQ3NrkaYg2krq",
  "key38": "5s7gPk5xnCejc7TYWZMsa48GRGFUTmzJNfVi1DdY4fvZY79ZKCxkxTY2tkugs8S66AQ5THDrgEEVbd3Rrkx171Wz",
  "key39": "3438LS9joyt7LQvvC9D48K5JwoubeYKREXJKHB6LvAD3QuZGcXynssrE5ERkWapSbxaZGJidw7P2DFUtRNr8Hhmc",
  "key40": "4X5nhupCCQx1BLSk2mqVW5vDdMYx8FEX56FrvMnfdprRX9YefvnAhoZ8bF4zH4pYx2QRyuzXmXrZCD7iXpjZrtcc",
  "key41": "3y9hstGRjhtLoPBrb5jqfw62Wiapwa6iCNTUKu7aQX1FZyuKVLzdcKuDBAykELbkeqWqDXAsWBEMMBScoHTzQRHg",
  "key42": "hWQxjbszgSrm1GDbH64Kf3zNUSXb1YDDA1UWNmDAorRmjow96pQQNPn6DP8wnJL4HW3HsQVNEF6TPPW3txns8LP",
  "key43": "NQeGBVpk1TDYQsKaKegyoGVHByumGg3DogxLdcmjWTx1kXjN3WBRwQS9nrvzRUWYiKN9Sfibgk2PwAEKeCLWBAX",
  "key44": "2XMZhCXvaTACqP1i2NAPYGQGNRJV8ovf3WCnMkgtU8GhN1Y5Mvvh6A5k6SnzFFWiujNEXKKHuEAGuWpMJGrjJWn4",
  "key45": "5VoJKob8a1NY96wu2AurQANNfUKqwPWqc9SkTdzQhB7fe9H3eRYZtf4DCYuB5coAgv72fYocRyLdEj6XGztgaa6T"
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
