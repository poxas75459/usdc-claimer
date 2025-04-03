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
    "4iWpfycJMMs8DNC6JvCe1F4rj3xit5ufehUdCxFmYA12nchXgxkcmyy8PZLsyrkcqfimHCxheGo2fBcvA6LGjFiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPuNd61H5aZU6vTqtRnPZ11iNeL6oibbfdPNM9yqcsUrzQ5QnFx9GR9aMmncjRtvBxGLLM1ZH4FtgxbWDK7v6f4",
  "key1": "5BAWXQNu2rc8NCwhsqurvo9KnBrLQADqfTrQbk7ZB47xwaafPgpSFWFz9E5GGKbiQcnbXHMv6J9SMh4QhVQ2hswY",
  "key2": "3kpmMuKoEA8fRcSpJeEof5cSzEuYg1JyCKSo1paTesxTRFkWdJwMEHW2tyZ8ExBf4rTu3cpkEQt1kniYg8mGrCaJ",
  "key3": "4oGmzRG9qmoiyX5r9kjssMNacZc6drecQSKnYhskobQgjmN1NL5JJw7YDaHfBnJsmGmTQkd2yghokWB2CvujXbJu",
  "key4": "2keD85ku6ZoMNtdfwKt7rSLEraQZuT7HEtL2dmzgG2ipSWukV2satBQAymUFT9Lj4yH3GRZ7hRMrCsbP1VbLzTv9",
  "key5": "bzTtBYR7w3HoRSCC13SWdnhERBF1fdTyw9VBteXmM1pVmUn5ASqQLJjBi9Rvyi39GAWxgUm7PPrA163buhV2wJB",
  "key6": "4UuP9hTqdwR4RoEHyGC88Dd53QtoTyJakcN7uPqJoBMXLWWXSNKfdon4tHtQbuGKeaMdnFL2EPZ2yxUQtp1rg2JU",
  "key7": "4S3ErxD6EPwDzJeE1hV8H7VHwZR7zsoeRBd5iWN39EdfWbK9AZdrYkBQrKxHA1ibVdodjTr88S23u7abUUD1wqkQ",
  "key8": "4fFDQNzrDFXcBfibz12uufR4qar5VfeNagN4AyptT8XkFPBt4V74rws8fVpyQS5AojqD6qFUGetXwGnQqGqeebkP",
  "key9": "2ki4BroHRMWJRtfYc8iuAe3ncxYGYr6ARLDpT1oL38qS8hFKC6wmYRn1JE3Y27Cu7XaTFc3N175n5NCwkTenHV4H",
  "key10": "2h99Z3BUgii45obFCn967ZeqFXZFbdDgJLnQsqqh6SzoDb4HmpAD8vVhPqXSb5cNdW9sdFxVa8UyvuhjJvMQubW5",
  "key11": "2NmCgMe3zZFZKHQAQM7kg767Vc3AkRz7KVNGG7qCfA9vsCN5d2mckE7UcRmnUHXsgt9ueDrDtJ8E9azdPaBbYMT9",
  "key12": "4HiJeWipjbRwj5Cb7orXQoUTMgUKq54BZtc1MtRYANMN2UXpd4bLn8yvQxJ9tZajBySMnRqEt76LKEnEgwShVRXB",
  "key13": "2F3FBstX9rfTTCvbdz7mGpWWCGnmvB6RoK4bRZUcPQSeGJVxJav7T6KNrEc8Gq7ccZj1BmxLcommxB1fvbYv6qXR",
  "key14": "41mBKvwENHY4TtsMvQLn1YVogbQ3YjBMpV4pE8Hg7vT5fCWUN6FEaoVrydoRgb1umdJ8YTa4qpKYRGpX2mtKHuv8",
  "key15": "3rL6vK5bRQm9gRmMRXGngrVndCEJ5KSBMaWQRLDP3rLNkEMo5UeeW57THFK7CLUtmpQevyuT4B3xsSQ8SduSGtER",
  "key16": "3jNkGddz8zVEotQoct1dGs9dtJDsJGSanftkchQkHQ9cZEyE7UEDudVP9YkuQPouWCG3vtBpDXZezh36YRLRn4QK",
  "key17": "3yKTvVnq51nFBFCvzTAm5YP1UAhzqvnGobP3h8abPgZCaKyoqX1R8jdrJuuF3qXgkyxixzMwToxL6TZKg3o8oLf2",
  "key18": "4oB3thnE5DzXwUJKytmQNPNEXGcc6qNJgkTu7ZiHVdegCJhszs2cjrZg8MGs7VAhSTbKTK1PynwQsMK1AzrXZjQG",
  "key19": "289EvVWQRBacULXhRy93ne3aCrCA4opytKfZ5gPSDXEck36Y9b2hgd6EyBnF8KFvd7hAusfEz7mNXkZTSAM3cjfZ",
  "key20": "5PyBUWsjxLZrvo4nBhLFnPk8qPW6AHkKmucg1KYoENjkhMaNAi4ZuiqDhGZ3qrcj2LAveahyRt1vxQFibtpyXnfp",
  "key21": "5kh4MZ9sEdH9wkDw9LmajN3N3j4Z9KNmuk9WFphupajT3Tg8aMnEiThPT1NCj7LLd5BJuLmX8XFFLgBGMQwu3CDo",
  "key22": "4HtHt4GWGsSfQe7nax6fMoj38BL5P96vez7UqMCuHtTC3F8X21B4p9Kkn3yqCXbs9v8AL5gDsjHGqcpvWLFRq1W7",
  "key23": "3C9KwrTepsD3zUaKp1M3x2WDLqXryvxoNAQPRkbg2HGAXpYfSrzMicA4BE2YJPH46ngFo5Yc3o3NWTRvksnDu2Pm",
  "key24": "4GGSKYPKxd1f7i3FZxSgF2ySxj62YAhnquRBAZBuEViMc8J3mnHMiY6vAV2Rv7YanARXTBss5QDyWwfu1eXqts6",
  "key25": "voXGk3CEiGGfUhw6VkvH9N1uxP3i4BC8irA3dgzBbthz4p8wXH6dhCBfQTRiqVt1zysXHxHGWg2HZcoCgENdpMu",
  "key26": "48D4Rmhf9hg2BFKVDgV9evbCVB9LJtzGUucCD2DemAxg2rUCBYBTNS53nfbumzfEKombCdHmZCRpkciJ5jtQxpRR",
  "key27": "3LdCS1T4VAG6XUZ96vMKzVysQtYL49JrexoNsgacYnmB48g6LpTQuqZ8oycQAMqmje4F91rmXyPTuXpLLm9GXBZJ",
  "key28": "MrwDGFRpwfnb8xSjPXWpG6iZsgoLAxviACwAduYnHsk1ZRFKa1TQjGWhz3udQZXgXNLiApsj61AnoDysm3UzaXX",
  "key29": "rCLE2yqG32DysRf1p8BWWpwHJgrL5St1Ec2URiHrhyvaUpBg6FnfuheR4V8ZKd33XVnjFcEtTiTNy9kBHi2iZLQ",
  "key30": "be4qvGGhPZNpKUzaJXbZYCmdkzhLGzmZN5LMk34Y7tsb1RcnM26w84tPrgPHrnFPZPgXqML6Eui5nmrKYczRp6d",
  "key31": "T4jXwMyLZKqWKZGoXP6xepo5tw33yELRyvAePKB8gj3D6WXtkF853R9H81daobRqMj979E6y2YU89xjtYZMvQif",
  "key32": "3PE1uXjdpfPrJTttZevC9LzqKLXtaCdix3eRgqxFDKF2qLGkxzjRw9WHkea5FeS97FSa1fyVUP465WGgXfMpZPUL",
  "key33": "3D1XE2FYMJKpwajxCRwmypMvrQN59nZkDgEVk3t2uMdqyj2o2pEZmTNeKRdFiYRibaT8ixsiVydgkMppJXAQ32cU"
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
