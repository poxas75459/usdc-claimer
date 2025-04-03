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
    "2DqgTatSoCP62M4i8VhYN1ktJDYgr1v4V47CPKFZ8vfT9Gk35Lgfjon43HT1W2CYzASwxWf9YKHrSWD1WHYxCEwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQrADQNYctbu4MgVToCvWrZNrCvPjgQtry5MzNBR8rMd45nJp1jgmpWucKJqzD2cyEbY1YzuVFJ69PPHv2fVSjL",
  "key1": "5K1frXc1ftmyN9yxsAvwzNdYx4w5Q11WRwnD64ZkWv4RkrELB6HMZvgrYUjjja7gz2CEZ6SqDzdiQuKjpVhZnAuL",
  "key2": "4rLbEibqgLJeFUfUDEpzF8YSPNorWtJnHYyvQ3zTGSvzsrzCbTkEMD6kxsun4mMdTwJi9QQhZpL9gxkwvRJJvbCP",
  "key3": "4kWy2dSHyNWg8c1n5XbGfvvhgpwW12xUhJJmLztbtRifZKdxgiy2JfLjUGLuq5C7rtotaDMJQxZtg5DEggKbcrc6",
  "key4": "3ZQM7iL2YKxes4QTNSNK4hZDBuC6yFopPi5YPceRzYv5ktMRh2mhtVykwzkJgHwEQbjGhJF41YypBNhhsr4RJUaH",
  "key5": "4VS1ZeQUVM3LJvMYvN8sx6j2QU7QoEtkv6XqcKCbhMHi6PHairPoNzFGCEBxfSxX6hLeKvyUyRD9RHVwheqcmFnN",
  "key6": "2szVZtTSHQaNUnrhxPode5K9ppDxmyb2mkKP5kHQN2dwQNU4kCLDPmBMwwD2hXhJ9uPcncW3LqiFPF33t6t2R7h6",
  "key7": "QMVkA2xbpb8w8fgMumaRmgQnzkQot96ocCa9WLrKV8DHBHLzhEFJPbRZRmHpZze8Cc3xc5Khrr9HLmz77EiMUXT",
  "key8": "5EGmiEPiuomgQbnbLyv7c5qhp1WVc6yCjBtcnoyQYGyVcTsDBQozMbsZ1ZjeKwM14K7284nQ7iPormyos8AePKs8",
  "key9": "28FaEm5uWSGXuAajB8uUE3NykDw7KdvjvFfGSSR8Qnze7WRzyDFfJsEPCXYepSVjso5af3r8g1tYqF1Sr2xm4Lsy",
  "key10": "cSAVFtH8CB6tWvs93qSfhkzUDRav3YYqumnBLNZA274GkmkdQFkZq2DePw9ncRKirWciK9P4Jcof6bjuv5hNaUz",
  "key11": "5vNyRBWXRDRe2EWRFM2rPSC138hsgra5kZMVFdaDv5n6UAjEn2nMzty8edRFAe7WZaXP2MzZA7umL4kfUadaW32g",
  "key12": "4AKWfzUekqgVQKCWzJHJxxGwFRrmx5cnuBEsqGhGz568t5wrARhQiAPriUjNBRKysL5TzSZ5smYksPhPh8fEJuqt",
  "key13": "5rbYjTxKaZxFPzHU41RotpcR3aMbfeA3uFh5y7rsEFXLAPTMNMtCYgjzaL1B3Ykbv94e6ChzKUabN8RFKmibKH2R",
  "key14": "4f85E2SGsxgezjUbHo2GB8KWtru8zF38LeDbnmAGANQEzKucZa443kqeDkkBvcYji8YdqiJUwoP6yZgXKnpWZemf",
  "key15": "zWfLzwWYpY1vcg1vGZ8kqPGWHQG4bUiWH4kwypL1VhKr2rnY4UdqwGubj34VGp75g8UHFKUuPkfNYMtX1HLdVE8",
  "key16": "3eahrh9Anjj6ftXpCdo6FmnRXWSthRDdZaaokopkEuKCrNCi17Egjy7EjCe975ZtcfuJxoEZK3CkwY497jjGcSEh",
  "key17": "5uBPKcxPsbBmbARrEZp9kDhWY95uYozPssSrYZn5tgj8KqXipJ75MAqf5A3dWt3RoXi2vJoSGQGGEE1oRYapaWEN",
  "key18": "4eh313ZEhAN3EYF6VycENkQ9ngW27HpqgAVBaR63hrVT9wXrDsxhxh9kU8BPobeVmQDiEo2DJTu4nyUxbo68bESr",
  "key19": "5FboiUhVgU9oVQC9sC9UN5qUgYsJXdSziGjWMT6eM2twSJgMsUnpTLyLRuirJwbQfHjRXaPxoypx7xAGpVQ4dUFD",
  "key20": "4nxUMh9YmtUA3KKWK2yWHP3YAS48UfGzzwxTVLKNrqUNMRmKCmZ9ioVGH8fEVnQcW8zDfJKGTDJpDMdCTwMb8GXA",
  "key21": "eVrB5or2raP6F3cZPQi3YtVWbR1BxxZhXD1kQAWb97SoCUJPn5siJf2Qg2Cuz4c1R9G8vaqLNYVMcB8ZcbW7LLJ",
  "key22": "4jzp2N4aDiCgMKnXR5PG4c5nWqEuWy9mc8wDbMmmVC9FLqtiyndawxAjCHtvFMmumsPcHWyoAKZoBLYvczhfCWjL",
  "key23": "3tgq119BfhTZ9ruN8titBYcKyGbwqU4hAR2ZJjhVxU5P3ZtMsTk2K58Q23uXAExMjxJYZKGSihL7aeJR2RsMPsLa",
  "key24": "3xetCoTXkTGotSb3LmTeVmjMmcLTuQXabnqiKPpPUEzm5qsnwRNcdA58ZcYNABVjtxThsn6KYkFPdbeELDp9KMnX",
  "key25": "MYogJx7RkS9VKy4FMuo37g3rUVbhGL8TCkoTNgVThibmttU33nHFk7ARtfoW62BN6bYgJqYN7ymNt36oPM27ZJk",
  "key26": "4yEtSS7ciFgHd1RaGYPFtC4sRTmJPGe9kL87HdzoznxTSG2NrqqYQ1dvNt5gVZgEsAYobpuMfkJBYiJmD5dYEWKd",
  "key27": "4zJ3GC5aszACC3mrFvHuVmWvCz9eHGeW8WJnEjRHddCEra2HSDPmP5g9DfUAF7xQ7yL2pr7hZ3Mtur7i34xGkapA",
  "key28": "38eMqseJ7wU4bLFDzUHT6PbMGdf6ZmMFwbNLYV1je7LNSB63kJ8J883WPNsdRRAKVvEcnq4iMXx6Nyz2K5RMvRQp",
  "key29": "5zvZ47dgyY29KQ8D7motgR9sm2yx97MgKyi6EqZtRxfrYVYk4HitMqpnCqj5Zzkc2JtaygYhrgrsGTguPYUEkEbk",
  "key30": "4VXiTRryGZ3WFW8EduoEo2adZGgjtEZVuaB3oUS914pkgjyfW1koqeSZdxFYtcRM62eeib7cCjWWWKWApLTVJ9AJ",
  "key31": "y6zjHE5gYKnW51wyvVTUM7xWoFwBhPMg5uJCHhBdcGpd84YVt3v39P2vjJagahXdKAU4xQrXdvqfDZYQnSAx7zV",
  "key32": "4UKPTWsjkHDyqKGR2by8wooqiKC1CgAywg27pUYUX74YkTxXfVokRxQb2iJmS3nUKQEFz18vQrvhwwB9DcVqeRBm",
  "key33": "3sn8pToErWE7qpAfoTvzSZPDFiQbaF2xpXYyw2r6WbfTcXhkegd7YA3Kmy7koeZamZMq9wES1VdtXVipRFBtgHVr"
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
