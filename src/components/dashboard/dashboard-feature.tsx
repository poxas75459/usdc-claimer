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
    "qwP59qG3V3r8EoGfnuHKkYbvRxL8ghd4KUofcp24xPsFKgZrcRAVhHKuBXiiqAEgQ7TZcd2j4dQwJtSpFCB6X9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6V31G3H2ZiiRW4h37bq7rqVpDAYYENVxS7EEwu2s9B7aLS8FEBp93Pu5MYa3yQeMyYy9nyz4G8angwWJe6pzRn",
  "key1": "5dFvTZohzjySAkRDWKssWdrhvYPYEhg6crC7vhkp52JsrM8KtnznsSwwnchGwqGbmEj8ATzhzMDxn5EeyUx7Bqqm",
  "key2": "ShooePT7QVRs7kS1KCTDi9FjeGcpUunCAupzkEABG9VYE7HmB6wqiiVGPvYC2MHdzzB2oL67wmWfVXMmNEzA1MG",
  "key3": "5FPoZRCMgdBU6DrYrDFamFLs1WbTXVjeKjYgqYYXhE5vM9KxcGP7dGwZsGpMx8ztfWFu8q6LFEoCcGuLUbgw8dCw",
  "key4": "4SAeyrb62YUbaaGyedUbLPyXyE2i6PpMgrXQqWwxo3snPh6kfDsB2TrsfYzsjpo1PrSyugLMMukQ9YSgWKkjpnoo",
  "key5": "22fPN1E8BKAb1AD1CZoDc2rgEF2VngRnRunFHSr8Z7Hm3h6keg5BrMYVW8xjuGJSYqaBz495uWC3ZT3eJs2gzdZc",
  "key6": "3YKQqUbsRcZaz74PvehYtx56p7fEj3WR2dV9QAs2AiWUQmL4DmDrxVBgwKwuygqL4bXLWUuQPqpx9XgALHq1R6Ep",
  "key7": "5UGwAneJaWWY4SWtGd99ohoEXQarW1WvRnCnusZtoTKLq62xpDeAcFt3Cqk4uGsttAgeXvbA1bBuGBfZSdCZWS2w",
  "key8": "3JVHaYWNTrBtAsPLHHEwhfUJh7dKML7o6YmmeGvYPz5fK5PPQFTfq28UHMhnEXKM6YA3j4BvZ5cpfJKB52m8jyxA",
  "key9": "5sEWpsVRghkRtDq7ZFCg7YCZhMCbXeWc3NZJkXksE65RzooLjJsNWSPoSbnrvi6JvA19YYNjkywkhdLmUNmRJR9y",
  "key10": "5dQSfpw44Mr7BxpwSpRzL6STB5DEDSuUYiVaVdWJkpeyz2SnpPubqT5DoDqWapRznBGuEsvy9YvES9msmYW8kxTg",
  "key11": "2zScdLwwxXn6tEL54wPZ7wNCyi1HJZi9LJXAuPRcp7qeq6FtiT2GiGXrhZJGjxcJuj1PkMb4YRQjk8yQndTTpBmZ",
  "key12": "3FLrNJqrsdwofRj2boh516ouAQYF5JnhgLK2JxmryvsTsvakQaD5Ga2gsKHhuiiaA7ai4ijTHjPfYoq8SBXVz8zZ",
  "key13": "2G1rcQpJPttkSwCXW4QxnK1xNb8hwUvB1WZJyyQJdK1VqviL1dJ8apUa5vWJS8K9mFcWsAdE9Ynos1QUYq8oAezz",
  "key14": "2oqhP6ovQRDaAoA7TRfF2z9aEfvB5RycbKhEA2cUoMWK4TSJyUf1bvHaiwtSWvYrHTuPxC4X4t7vDjx7LUSN6A5m",
  "key15": "fC439zSE7Q115HLZhTpQxkSfrHdwCQyy1QtTWLtFdwDFnRCWNQjpmvt9X7gvx1H8pRa5YEeHVEcvoMzNT1sMXDY",
  "key16": "4U3KChAgRBmYtxs6TtYtF4nY1NsZ3fxYzpbD3JeZRiTRWHkpS1XwMFajYKoZGZKyBMQZgEFADnNQiLPG67fhBUiX",
  "key17": "5aNJFvFrEZ54DYA7JdF3LyztvyFbsoNwkrpFbspDvog27uDLxMC9d3m4kCXUsm19v9yJG2kU45aoQ7Df1sPe9g6W",
  "key18": "5C3mxt5rgrptS9ZuzbRhQww17orw111DNmTqrJ1skByWaSeD2FjatX7qwzMdUms23tmbvKmS3acgKFH8xPHmgXYM",
  "key19": "4fGuywZucLsB4yNuq5LhqiaoL8R64Yyhq6qSYPh3LcNMdEEeAP6RNmB5Gt88K2Px1T64iXwYgUZ4PwqN8rxptDvM",
  "key20": "zJDgB2NuidMJqRvoHDvFDkyzEQe4UXo8oCXKtfBEECXyrbe1VH7nTKqVbbRySiDaoFyxq78JbS8mvLxULkU3S21",
  "key21": "5uTP8RiztDMkFESf35QUHtyhR6mQb4GGrTkkJVKwnsWdBuqXMYFiKy5NrpUAuKM68UQH9zB4g5ob3Dg6jqkuGJUK",
  "key22": "2PVzjFCZSHobE6CEwXYiC2XSNDRKoqie1snHe7HX2rYH8H96fkvWLUE1Nqx9YozWvn5dCiYsYx1E73pbV2V7oxUh",
  "key23": "4byzoQrfuA8pXQLCLuDWmY2tXWZnJozdvCa5jPqbNaYG4Mr4UJ8jUYq1GY5aC9fzb9PTLJNNwBuGuSWQMNwN67cS",
  "key24": "627p7Z4Hx3cBVggNivtqw38cbWJp1bw28qHcgvMjE5ZGVgkzQA6uUx7fA5asgGiKsK5Gv2cVNqsbEJrYdJtgwc3a",
  "key25": "2UuACASoJxbXvoyVhxEVa8TzYxSzTTnV14gfYKLjrShTFQPSsYtLbPMkWsny7W6CAbpPAXbFTd6VHMRSSXafu3Jf",
  "key26": "5kCkcjTrh82WtHwhk4NXi6JZcGKnFJP4j85eYL11cQbUX27tsAscGixZh9dMtngvefonG3N56kxEHgztrSbMDNyA"
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
