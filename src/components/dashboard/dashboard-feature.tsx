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
    "5objTsR9y3MfKdNT7FoXuxXRBvFNXaTe5PZJHuXnVXRh2sapAcxBd8RnmQQUimna7EKasJjMRbi8hk6nYzG4ia9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKaptHvNmT4vkuvEtpu3aUhchNemdKHm4eqWcoFHiQHz4SFLsqLr8gdGYpPcNY4SzZsErzGvT3eG2Y5jL1FtQvk",
  "key1": "4bULyXyNVG11o9JkPgpCkQSqCGeZDZEaTsoHtTcLgaPwLUZrUKug75bdwhtbuGgZexw3aNsa8penbuJFA8TZPNLt",
  "key2": "49X9BxZchEQW8L8hpNryPaTsTgTY7ng8jYCVGYwLkRUBh7qRTwqfcUsFWBxhgeqXHT78rGg9PMAPdruaVR7nkm6d",
  "key3": "2rAgF96kWn5DwGgEBbKevBYjPpUxWefea2wDnuZx3BvTegwxjW1TcAgZqWJdFdEqrtJfjpKDtecVWmcMmWPzGmgo",
  "key4": "5jMC4KgDU4VE6scqNYR7g8M9vfoGguYSsBQokNMbSYUuEmXc8MybnNYZ2TR6Sd9iD3VoM8NJUAXTedhbETmym1yc",
  "key5": "28mBnuDzxFQ25bhQuqk7ja5qi3iHiLVrkbdZTvMzuW8utMAfKcSRBrJog8LFMkY7gnMVvHUEajRDCtA8xiupUYTg",
  "key6": "6f26h2FnfmfmoXfNnjghcWysfNjB17gHRDgBnB3yjtVrNmhM2agHZBmQVfvCPZXRLAC5qbTpEjTUKa5gXKk1ZLy",
  "key7": "4uL2WNYFi5Nm43HvyjqkuX4SGX6sJBujzK4cgMsSnD6LqRDdZCkjSRdkJuPg7dHPcDmt1PSGUgv2ZLzYoAeDjPYJ",
  "key8": "236iTuE7S6cMBGWhsoKbUEbZEUhMdCoY5g7N2u5qHu8W8wvnJykHUzCWngV31WgdjYYPXKHspdsGU3pJTC6Ya2nR",
  "key9": "3kryv8q8phkxzDZai6dL57aURtkJs1A5keTJC5Zj1P2CJGA2KrWKuYw2D2CmcHQ44AqrNasaBBbBQyvydUGKcgZ9",
  "key10": "4R9Pqd1Epf2anqfwJ5gMfoyAzp24zooZRoz3JttzMAU7oPZHBr2Kwo7QudgiAjt1nLX6asBWTCpuU4jCfNYVn53D",
  "key11": "4xo7KBeUoF2iZTxmyFXerrcYKEUf1UhAANdLJE4k4fYA1k7pmXoeS3v37MkcZHKvpxq35L9UHE8yLQXRcnEGGXtq",
  "key12": "4Z54yUp3VPGyY4afNtJpEjkyaMzddNuP9pqq8jwduhQzLWn2ozkiUXCaXR5twZQKM5hmPTxQVCxEYoZSFhp22Wkf",
  "key13": "4DJSTRVhQ1Er6wJTSxA3e7rSFr5xvqwwkmsWtVUiZYfgZvwJkLReaUfmqSU5fDbHtZ7FStcdJyC9UQoLX8ohDMHr",
  "key14": "29FuXL1jj958PeGfx2PjbXT7XPJtkQ4ZwtnRca45J8YhJApZ5xcbTVi326CzRAoHRrPh3BMLScamcWYtzzyT3DCe",
  "key15": "3gxBvvvRKEPsSUWgY4zbEZ56zaC9tdqCUxExn1TvYMQk6s4bqMpqfZ94JdqZuFFRSeV6YmVXDxS51nnSnJNDpzXE",
  "key16": "5irpKKru6PHkJvkQYJrb7MH1CBGqfVtT7pPDYpjPceCy5ZQyYddHrzJQq4NLtTTHh41CGfg3Nj3cn4ye2oJrYR3G",
  "key17": "4CBWrHesPTD8DUSWXNV3rCjmQaix6LoHvsZtWEikkwKnybn2WpMuWZFuqw1uaCjcw9WKUPYdbeXEQVnKbTh1jW6S",
  "key18": "53xhNc1vRMPvSz9BgR2Q42hAf1WGvFZhkf7BGW3UfPCxi9vLWAntTT4PB6dnNQVFDX5PkfAbCr17KPhLw7NzUsNG",
  "key19": "42pArjcPuUzZNyUdmQZ5mz14wcYBA7vZ66QUra2ZP4CUG8zUXPjdqtutRPpXAbwDnZgeKrvvGN6EUc3dxuUEW77F",
  "key20": "4i1cbbHyY6zZbLR7Vki9nmtHRpm7Z3i8ym5hYWcLhSUXft3nrZNUVM8DsE162og3Pj45nKgfAYZhrzu32nGkNUbc",
  "key21": "4j53C8Gt2x2yB4bNbfcdmr5cBHJ4L2LtSG8oYUc7UcbrUcBv7ZSuBFgFPsXMBrnNbJA6kDhRtG2bmvCBmki1jpxC",
  "key22": "3cr4JsW7ezJTuqovTEDysH7crXqRreM6u7VBPZ7kzZrK2ZFKhzzmXH3LGftjePEQhho4ELot9EpsN7daNzwZn6XC",
  "key23": "2VEgxxfynK1npJ7117eXvSM348TNoNLpHdKXJzyiAWpkYu2goCJYezgW71akonQEaJHuXZmqnFo1uSrEGACjnT2D",
  "key24": "4kSEgRfdRxg8ayEKW7G4rdsD3Lji2xnMRtiL555F9JG5H8aNhPmb8DocKu7CC1x6CdqdJkrq1JNDBQiwjbjordmk",
  "key25": "2j3DFapE4Uw81qPBby8huzuPkK6NS6xrAJCcrLv6n6o9zjAyuWmLHaLb7fDFJ1hY8HvWwuk9yWNNQ1ypqmAHtWSG",
  "key26": "3SaRPy8iz3gEU4UGN3EYRGY9njCCrw3FHDDnbs8a5pnzrSLAUTCX4VUrJmTt1mj7hrTWGbcPhoNptTHznJgYSexL",
  "key27": "c2CYXQ3rmV7gsAjkuU4txaDgGaL1mTtVQNJkpQNVbxjZhLGpet4SY6xRSqvGyj93MsoyJnaUEx37GG18H2JrqwT",
  "key28": "5HK84MaGCR5pHR5AD55bfC5BSNp3iueTQY4RWECYpfppFc5Yqb6zc8uj1J88M8g9Bs7jALKW2vSvhKHmHTcYNcLh",
  "key29": "5ekDqUkHXQM3iNDfQYnJzynNaQUJVTqAybxWDUjZJJdRX3ub3WtfktGHNU6QmQexX21XPB7r3EyViAd85VVhKZTR",
  "key30": "uzFHUKJkWzdhHFsiNMSvAcYKPQmfKSe7Qe9QnDHvgPcysup3k1co64i4Z4qfk5kGQj42M4Gw8WVD6FgLcL4dHWv",
  "key31": "dyeMbujpW3ySBWkirScTk4z8BpEoDNMnujtcbS46BY5td72pi9vvNJseyTK8NW68tRE3c5ixNDFEWWGazhwJRLk",
  "key32": "4huj8MEP3Z1wFj1DGGKy3fLFZfj3aynuxRgRSUw3FAcPcjhsES9N2xL1A9jGVjzQ8ZyjWWoAguJvMHSYYnkpqw3A",
  "key33": "5rs1c7MYncCEMhjWwvgdFwsWrU49g3FgCy3MVbKMB359AhSTdHazcZcLmB6CqMg7MD2SX9xVR1RCz25tdMBEFe75",
  "key34": "5J77iYwrTYkSV1djAANbAVu67ihSmdRjDXjMgSrEFpwwRTqD9Rj6sxjg8F86ntHk5z5mTJQ326bkz2zarfWJPXsH",
  "key35": "yEgQ9VK1wrn3QwgCUm5qioPVaT9EVmMDqEAhEdW4vPwRVJBswrEUfc9V2pvZyNugENwakcSR4ep8D6FgCiG6nJ5",
  "key36": "zMHBzv5EkqUssC1SpanLXpae4Q4EaPe47YpCnVUBK9FRxZ8j2ByGGXh8jG7C8Ux6qeduQ5ZJiXThcf2fmZjYrqp",
  "key37": "4FWnaioSXNEDNJEBZV174ZAmHcUEodWzaTkBX7jFY3bKvpuwbwjwv3DkovdDWRbDuwBJfbWNsdU12tntnTBqcLHb",
  "key38": "3xueZHSqBSBeLGmm3muNVBsyCuoGjAYBZuWQrb1THUU4gesP2NS1f4cseox4sPe2B89ucz3t3ZuPZH14Aonsuaqx",
  "key39": "5ngn4ZUR79YB8VXjF4VNdtCHvJ7PKoC3buq44CJqpWmbg3L5XQkgRN1cdcHB75VwAfH6GKfohKkF7vnG7mx3VCai",
  "key40": "54B8FdgdHru3YNebVVhB8QUUwYahK5XLNzBWQR2PteQNjSW8rT4aNY7rstUzQFYV9UprZeL5imgWUHr4PfPbb9rc",
  "key41": "5u6v1xq9ur8dpms9fntJC5SnPeM9rLk6XkdjzKPCQWM92eG1a2X7U9Yb4yheZB9WDrYX7tDzbYSPeUZh7Whc6h6b",
  "key42": "HVeLFELJj6rdbTeg5iVZDhB86pUffkMu3Jejxeue7VDDSwhoasjRJjar8MAK5vYQp1ysgSnfcNao5oPZ7DnKwFJ",
  "key43": "36EDZPTqL1dYZKiLxwFXdoxsFUfizLXvz9xob5KK1bkHaNSFYDjG4u62Qf9Vt44TvvvDhpJKWCuFecSAh4CnFWML",
  "key44": "256AnikCnbffpib9BvyBGHPfDszf2PuvFMRA1JCJqZSnoejhJyRXv2K9TLroeH87fDeMYUsSntxUNHD68SBTNnzw",
  "key45": "2eNZryZY2vW56vQvn2j1LRVARZkTLezbfM8Nd4cZj9fjtmGjyeBzK6x2CudmvHEWKobasvKtkiGhaEa9EZwRHqSc"
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
