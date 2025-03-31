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
    "4Vwdz8TZJXt1Q6FgCm9WPRtLegRRspegoQFLS2nK8D6meN1ekwWgBc8PoFr4cRj7W612j8C9L2JNtY5h6Qzq1poY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWooTBCuUqtzm5FTPuFAeeSr6xuy7xVnQyyg2ZvA8sMxzyLKUSBJQxaSdpUC4bnbSt5xbBPRgmb9bpLzbtbz54F",
  "key1": "5RN9r9VQC3yuc1RVmBsbX4RcgDuypZ65TaMFY7vPCqX76ScWhSrP47Uwj5QTHwoeYyA4XqHm2USMNWki6vioxb2H",
  "key2": "2vii3GuuuVsMJ8rGG4HGGK1erAUsBoixUBAhESqMuUUFkctr77tj7QW4dS7ze9UTn59bTMggJ2v7NGoUNDXuc86y",
  "key3": "5g1sJsTTvRjHsUrVgJsafk23GL69cTeAWuBgYXwBcr3WM6eABnSZ35WJa2kNxxhzL142xNdDERZQrv2bTqk2stFq",
  "key4": "5XUQHMpLkfsxqLXKMUYjHXZ86arBV2uuUGmHgqAC7jeMR15p5WfhRxPZqTdgqjL81HHgAcWoQ8QY1qaZhv4yk1we",
  "key5": "3cY6XD5nMRhS1KjQ6wmZnfXv838zqACtjHMbKFz7FMPG8M5wZacBEoeQ8oGSeswVyfrHwxq6VS4K4iSDgn8srkja",
  "key6": "3ubtKY4aA9WxLAwd3kvFnRkyj7UUEgQ4UQAFZLsmUeGVWhaa49ZsuCVhkp6si4Mf37EaB3o6mToDhAPS4LctvWAw",
  "key7": "mPEj9iZB714b4LRKGvmBTojJZJkCoUgC9yT2mMMpZ2JepwZ7z5AskSRzjhzWnSoHxLR4WPMfzULBRPLX2BMv7cV",
  "key8": "pxP2dLwHc161zksmPvEabPznT41RjNQ37oM2ECWrMpdz8oBkeBzHMCigthaq117C9H8Xjt2Lo7pRug8grJqNR6h",
  "key9": "22NDCvgyvHjZbqHizge1TWkkjrk4L69tMswtGKoN1N9qc6YuZS8ig2jLLHa1bWfUy4325g6s4L67NtRBda3wif8i",
  "key10": "5noX5feXPBCkUh2KdpgpzZoykqsdQ9siBaaGWjwHCguDrZqLMm6uZ8pLWM3EoymJrZWMVdQU1qPh5H45YBGTB1UP",
  "key11": "2Na2u7GwDXWfita9woe7ttXLp9o7Cm2faL7cVQARaujPm44D5AtBPZVA1Cxeyi9a3vNZPfSBzFuavDyprTThHe8A",
  "key12": "2jrLCdQnxm7ahgSc5Wv2ctiPfJF85vqyx3e9F9Jkj53AJWk8T3TRE7giX8bavT67V9fQAqKpjh2EZ59gtnbHrRKr",
  "key13": "3eCkRYQT2LSXopAxvRCyvi3QVKQ1KBX9Am71c6AVaLX4gsQpQzuZU4DVRx8b2PQrPPCZUuj3FuNizYLjyUqap6vF",
  "key14": "4EoHo8k5B26UuZpifeQ1nuPP3Mf6Scp3EpZy6tRu2EYw6qjLUwNepxcc9ghCAUKLnwPxW2D9CnS8eUgdvvrzdLrm",
  "key15": "67Hd51HtCxcymXTjyFcP14zf3qHjoyfxdCvzXkCSFuJLTnqEcm27JAdsjZLYEBsr5xuBLuRYnjXEHc9hSFJv6MP7",
  "key16": "3hFHcmxaveh66pFcqy9AnvivyeYt6oW6SLvkgMeLT9UbfZgrcXfFt6eJFexrpEbreSB6FudAULZuSjf3YDB7LVuf",
  "key17": "5KeCHAz6wrDgy2HG3xneWJTJZzC7ftE7JftpmuxE1w5KoNLRtdFau6ncS95pGKSE8ASjx4h7AUixgn5D4RoAWyFH",
  "key18": "5PSZf53TEPa72VtpiGc53TGZQqPbAxJdKmitHi5FCyxoN6LrNUokEkHEvWoJJThZunTbctfhXdicWACF1BwzqaDq",
  "key19": "26BFHGf3sYcESdpzjVZUP4Jjqxmiv5RuM7UmqLKSZ5kCL2QkMD15GYdRihxD19JkemVcX7xMhXGSEjF5NzkzM9rx",
  "key20": "RgpB6r3XQQNyvck4hmuWZppie8yQeBuz7nugcTDazXhiaAqpf7dER4xJi3Exi9XwFovteHgq8X1PZcHji2Ao3vD",
  "key21": "5geSCgj1G9mQ5jJGvjWmZJt9fMctv5etCromH9wKmjGw21pecqLk1AJcGkTRtMDnZddPR2v1hYhpJvbfzjZTK19A",
  "key22": "35oYcGpQPg14ZEfpYomBSWKynU6BJgpuYEbshpo3QQTUaVvwGs8robHTUXDXryS7Rhp2U3LQyE72N17oGTVhAwv3",
  "key23": "iqvJa4thZxWeEwGL2wgF9PraCgxuUL63cqDsXy17L3oHS3YRivgb31JYmgN8ntMWwp6t2GRMM88hTT28qDPFvYF",
  "key24": "3EHdfcsaz13MVYyEY7RkzLX7yHYBKFWHvS97dtwgd6s9fqrgr1yH8cHL2y1xgqazAepcwRPBiUCLFrEUJnyYuhz4"
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
