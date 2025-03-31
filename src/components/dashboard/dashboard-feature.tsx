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
    "37XZSGuRvygdvGk588nB3nSzuUJWox1p67XYSTHcC7eeYfFgjeEVmsjZUWFiPo9cLiDB2TtzXqZd7TUZ3RFz58g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uq3wgbbDytaS2mW8iqVMa6BYgCJ4fiTYSwGxTdpPQZfmrGz1TKfbQRL2RrwhkkiP2Ff48wNRYSu4c9YVvy2bZyU",
  "key1": "4FpwQLGh2p9TNJTnqSkxUiXHM5jtqjjSWVNmJXJm5rYCX3P59QR7Az5aDgBk5tCSuumvw3dUavb6sxCR2EdYdGX4",
  "key2": "3pwwrtAMd2ZZpYJLk7oWd6HLFdMJx8hZWSU3ZPmZtkPFAdRBGHGKkrC1FXiJrwyokyKkT5dYdk8onfGc8Dg7xSrh",
  "key3": "24TgqqRpNWhRLoGX1D2E3EthNrDQiKRFqEXva5KxhfHRJtAFw9nAdYXx6qRuqhQD9LbQDwm18XdnBST5oGGryom1",
  "key4": "28ntEdXvDsS9xMCLZq1tobuHnUDsFopEV2gmS5TVw8G7bC1nn6CXzCSoRpKwYG6HwRzTXgzsY4C5LBfdYnHMS16Y",
  "key5": "5yiGxQHVceF1SzJuuhZqsVDThbpj3rAgweoNx1RF1HE4wuQPTTSXn33ehzT9Pf2UBvYyMKhNpAruyrjcnPfTzETF",
  "key6": "5QMgeL4aGHiV9dqp1Hd4ru58jREx3vLzrzGoK6GAX1edTZyT8XN4cao8QFhLTPjiMkun59QNDVf1WZVFe3sXbRcQ",
  "key7": "TuW8ULu2JpeuNqKLfvsG6E177ch9bb273w7q9tDVzKH8MhK5q7qv9oAqnkzyAV1QgLus8MixUBrK7vDy2NKE7fu",
  "key8": "74ZyeFDdfQDgAQKxFypiFfBiBfg8pUGKbzKL7ZBg8rSRu7gymZev7jDNGMRbXiuUzMM9S1nHjG98zRZYQhvLr67",
  "key9": "dALrLSDigHBpKwVgNcebFv8JiH1LVwxm182fucvxxXRrXBr4HjucmUufN8J7qpcG6eF5TK14yRL2EqoVkVMCLGE",
  "key10": "46TBQMGJBPCUw296dZ1wFw1YSUeh2tiBSjpQRAkWPo4D8HeyujcBGezdwRMVDQ7oSRQB5H6jgjx8dzb2dp3VZegZ",
  "key11": "3XmDFhAmog8MKA8ERrSEm3TojLTVSu7enHE9DQx1cM922w7f1hx8h1ZjWMYr37RpeizZBK96SpCY494DhEpgyJs5",
  "key12": "AhbGs5GhcnSK6N1fiQLbeAQEJXKS6QVCQwP8EeCr12qJigTJDtDmDVBbpi8XFZcLA92182K2zdkEJx4J1GGmVBM",
  "key13": "5f7RqaWEnZ8yEaad3PBWCAY86gFcoR1Kx3fN9MJKNpVRt6DFGfGoRCnW1tBB5fLdphna3HREafGhSmB5ukiufa5R",
  "key14": "5x35HNeyYDt3QVDi5Qbub8ho1CoGHXgFyDBCVbBmA3jVqSMXmGhbfwDWUKBJUhGHmBUpBZRAVMJ212vTZbvJWAdV",
  "key15": "pq4X6UUHzjzv1phf5oyijP8uvH5PGkaCfAskU8Ee9fnUvby5i12WEDs7svLTwybGZKniMgqhZMfk4cJswq9xqNv",
  "key16": "4ThDKCoAsTXzqfrzE9BqR1b6J3g7CAFwqhHJ9JQkJX6pWhZHHPyZM2vxKrEHzn9gKmMUcnvgHr1Aht5sYCc2SoXT",
  "key17": "2xMbkhsidFi1wB2R2H6vr4jzGDAmaW3m6uY8tSPPpzyZeyNMWevzvbR2wWyrgDxAwWLQVGPgVj9XWhqNcFKWbTLJ",
  "key18": "3bSpZz3PnDB2tMSzYrPMVLBRQga6dCTEvLDJA4CnhEThHD1aSPV7EyahBfpFyuyxmtpMgYw8nf22wyzTTMZxvdJg",
  "key19": "5BD9XgTnRu6g7dkGqfdprWeQDg6A7n2H3UWFAuPYKpUzrovBp9T8faxSAco5WnN2dB3AQaC9MoWqTsj2XKqf81MQ",
  "key20": "jx6zDTFWiro2hQYnewQHD4e6YmikmxHVDKxkAgz4okmXT3ePHyc2XuqKsqK8QXRuZ87fP9Xk13zsqbJSpDESwWe",
  "key21": "24i5ZAmJXAMLn5MJEPZBdyFDZeQvXEpvWq6sF69uAoyi3SNSjWZ7heqaUyhjbod76adeajQ9iR7JVtAKg35zUaRV",
  "key22": "3yBdjfkzSgg54aXoTkVdCfWK8GUZ4a8LDC4zFEXAvU1vPchVLW1BuCccwUSEFVSXj2HXXazqhkw3EWLTeSMC453P",
  "key23": "weWfsoF3W2XYNkD9QS5UGM9ZSECM6yxP1Np4pTemr6DzM5tr8ig6LaVyf33ChrqDpThrHE5eQJPJMihTvmJiize",
  "key24": "47B6fJvSiQfvBPhWc5F97jRpeU7U3wsDWUNGCBa3KSWoAbtmUi7tzbwJSasbkYtqTv4WCwrJ5iJnMhUfrYq5ch7",
  "key25": "WpZ87TcjWHkKYR7DnohqyAU7DfFyVnqtXDXFrU8seWBr9PGRF2pZWuQBKWFoPKrRzbAar3TurFHydbEy6sYoV7N",
  "key26": "4BiKjYSVw18My3eB3qQwr1aks8paXgDmw464Lw1HXihr8wk5FggizLq9xRiprUbG8JiGxSbaucyJwkaKVtdbQpgg",
  "key27": "ia8a3dMZkfwcih1MXKTGt26WGBvRkDvq4sGW13xZiKbJKmUQpXh1wjtiSFfC1MFHZJT4sMGF5VKcGTCFTEbABAs",
  "key28": "8CJDWTAf5nVGcuXzK2UoLeTwNB6oWmQcYao4K1wgX9iU75sU82RTqSZkk8197wNBHEQ7rS858ojv5M1SjyeGKrt",
  "key29": "3Rne58jf3Rxe9upcc4aaSXYnRCQuBpoFLNNVScL3orAA77GpkyqEcmbgf9hNevdsQLky8fw6PtvZfbKTLFyJ9BYb",
  "key30": "2CEH5ckuTef5EUKw839ZhymQnG5YMP5Amh9dUD1mqN76RjfZm7HwpqgGtpJ57RjoRTxDUN48M9pCUJWvMwHgmFoX",
  "key31": "Lh5vJUVm6e2YQGt8yAnWbozUYU9QahuDZtZoWTo8oEEYMLa1EyvhywUAr8s3thDddQ8H5AguA2ec5czs23hsCzK",
  "key32": "2xo1Mm1qBJUHxp39xxSDHh8gHTaCSsTmrtu7RREc5qg7c1exHG16mqmdKEj8dWYxbkByDAK7phwY2AWCmyT3SyCB",
  "key33": "zF26VDKFLK8sHrQbhuxp7CaQqrnQuxMoPDzfhzBYsDVQWrVNbEZvf6WoK4NX6UUD77Rs5d5WN8sVMAiEyVsvCif",
  "key34": "2EYwQNPfYNpV4Ki3MMTAqnBu9rzPm8ZwqkjhJbLQAaPqaA6G5WqqPANBW6pAngx6biXRqTumZ9VNnHkz1GbtfyTB",
  "key35": "4VBQntpVYa3Xd57ewHMy3JKzy96mRgMEmX1FpRMDEiRFnx1wK6DNCaC3PPeaesjAyHFHDWGpDG7KSTkcm3eaicXF",
  "key36": "3ojz5h7K7co1VSuDjuznw6zWCZ4ByQGaEFKVvbmSxfjtvBk6HteDVT6pt7yZJiuiM4HXpDE3KffJU9oyRkpra5KX",
  "key37": "43mzXLjUFRcsA8oy6WFUbgeoxeov4fw5UAfQa819QdDUWrj99dqpRD4Q3N4zD7GN8Xc7jbREiwKquXVCAcSLuKRn",
  "key38": "4rQLyCGjDep8AGirbFHkbZ6NoyQNDKdEFysuVX9yyPdRHDqjWiNkVs3UXgJFWcAVQpmmHPC4ZzrktcAUHY3ThgxZ"
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
