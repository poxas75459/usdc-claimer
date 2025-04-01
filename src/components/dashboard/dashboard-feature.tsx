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
    "3YhP6hpndafsWrbFVJ4sZipfeVh2ced3T7UpdstyCJ19NN8YRdgLn6jTxmTiiwWoXNayVcpSQz2GzDUjNX9G3B6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJsyLQjvgLxmQWNkjjmroMVASZJyTP3JZegbzLVkgfpY5KbJzU3SqPUatmHeSnjxUwfXJSxwABFSdA1G1P4EKZw",
  "key1": "5pV8aic9x4PARFGrfnNrut6hbe2dowX9LuFZHdLfb14PKYGGp4krA6Jfzh3pzGfDShak7eXcFjJ6HTGvHee4y11R",
  "key2": "4SiMeoPcQdVKHGVY9xHyRQUKcMw3Gss7a4Rrp99J7vDDbfc2uEEDwSuZg62R81WC6QVewmsuBR2WBZ5QYZBz4WZE",
  "key3": "3XL5XdYLPKEpNnrgD1oFoeghfTUk4MrhtU8uNcVtk8KsUbQ2xyEJj4ujUnNpc6BzR8wNcKDZw2NJmh13jYiUDxf2",
  "key4": "3g9QKMytrA2P1R9hsNSFK2iV1uxw9CdgAgMtxxRYooJy5RJ9WWZ4b8WEV5TZrK3LkiWVT9MP2sSK628RKfqjhtRE",
  "key5": "BxRi4pDwHgQeRVvD9e26JrsWtcSqWT5puvwrbUHdhfkzugM4yCEdXnrG1fDeke2dRV7FwW8yNAEjt9empF5iedo",
  "key6": "2doKGNHVC9UDtyUz7PSJxzbsyAg4FxtTHRXysnc66pJUCJTESZggmK7RFcDYWvJ3awUsmewLesdqANjWQSi5mDFV",
  "key7": "3B82XNmvU1dhRnET9eUBz9EBKSyhxF6h21x4wEVsb38K8Dqmv8HZMbdDKbKkAXfZEaViNgCmmtFQ1L2CtWt6FvbG",
  "key8": "PSTq22GWqsuPrGLW7EeGpxywewdFoYGctMhqEPfiJRfUe581Xy2vouteLCcJubcXrxDcMoFZNPJxnmrgzBeHJb8",
  "key9": "4UVkS7SXwTY5L8yg84ZBGAszYrW7A2rgafYyYcuz9mA1nec7KnqEjgPwHMxi5vgKsQRp9WtGALfvSQ5anAkpKVj6",
  "key10": "4Mo1rodzSmeTrF8Hm6P6uKGqVWEgDi4ARmRsbZMKEvvTAKVEjdzMzDWriKB7zfwcmM4bq1cUNeBAEFHcETxxRUKy",
  "key11": "4VJMrTtFdHntNBTtaih1cvtR4U1TtTNHnPPk2EDvjykMsJUTAorQaMKYHkJicn5iU2i1uZM5emF3BGE7hrtqooR7",
  "key12": "5pNZPkpG16wbnZbeR8ZudufShsrfisfUop1DdoABZ1imtVuYv5rMQJxLwnKTu14gHdDTt4qsNKbEKAQ6dT12gkXX",
  "key13": "2dDzqgMJQeMThdvk8zs4jYantYFSv8WDK2mHxJAcyWa7CMbeT3KDQTGTvmbSZKVwuiotggTwyie1byVsw2UVxGny",
  "key14": "66eWcSppSSkWLKLHDYbq19jD25ehBXLQUZdqBV9WAmAm1DKqHyuQqCYV2Rt7j8dVBtMKC4r6hCRZikAR1xG5co86",
  "key15": "2chwskgiLxZ6oJDA3k5uRjZFsw1siXrq7YMJLYqgzpK91M4N4nfhAmCMKwnxCE8WKZQgS4T2nfGtRrZWEcAT8thg",
  "key16": "42RTN9PP2hWYgXhzMX6X8ZPhwBottoZK99kSZU3hpk1KcmxiiLsdHxw1pPbH7fW8QKFonaqDrXcXP4cPdchT5ALY",
  "key17": "Zee8KG21STdyKTwtJb65Pq8CpjgwZ91rhex7KNT3cFPMbCM2LHtUdCfEG5XZjeFBuL5uGPXJPej4RxdjyhzBJ9m",
  "key18": "2aWgPBC6BLAniiHntHTPL4oujAYjGZiyEF9ckM5yfPGLReDDdaC5AxKt41MqptDcF27hagqbrFfWBtsq9c9UNm1m",
  "key19": "35e7Gy62Zd5xdZarwbPJCuVYi73nG8NCFrZM5g73wdM2X2qbvG9J73NAvSUzLeDCp6ytGMFtMsmaPtkUpYxEZaPn",
  "key20": "5j1cZmmLqLzMox1xuiSunRZEEhUuEDzYWMBwCNmdcoESpmpQ6kR5J1XmT63bFELp48zFqbhEtu4qLKyDa2enwrf6",
  "key21": "JbZx5DpYBjoQobVX358nMVV9piZgo3vJCXHnb7JXiQmyTmNBbxSe4k6yG8oMFLXKn8cGfU83fRKSERTExeeuDwi",
  "key22": "5bXovRQtg1Q4hMNogNmkdb92VVRzggTb2SPNaDpWND7deZioEX2SHALkmg86HGMVm32eEoQ2rpFeSNZNTkWRmeLB",
  "key23": "5XXCUUvnP5wtGWDyQAkk4oeiDYU7hjpZgtwkeFJqaQNC7aFNNqHswXX3r3RYdwL6PBVYjkLfLMqqPj9h97PsZdXk",
  "key24": "34QyLoGbUNfobSiD3KHSLZGj9NApjaMHzpHSGfaTtvNtFVPm9qLtevqYAqdHNafyK8fSUHciwC9VHibZLeA74uyA",
  "key25": "2VimYer3B4aRGB2vzBvxq2r25nzLH82ER8ucpAehJJdvcg6WkJrdS9LAQNBNg1n5uobTmgpZTZJmR2xG46swmHcE",
  "key26": "Xg2MBcYbakgvpXgCEBKHhgSBnm8MbCKcwmEVqDSk3uujLNroYnAzW43KHsSkLZaeNUgX12xaPWzqzuCJHAUvCgm",
  "key27": "4bWjVWPz9XDCGeUrqfFfwVqCrbuB3PRp4zjWz62CofecPCmk3MtrMT4868uN7z1qfbggAjYBXLjUyDu3mScuj5Y5",
  "key28": "3Ki6A1WperMskxknTEFNCWosKJ1UfZEQYoeZkopfmkpc13pF1WRf54tKJs71shK9RJzkvx5yRy4b9t2Bo9mDTZdK",
  "key29": "2ZaJEzjDvhzFC1N7dzkw7sm4aL1EDSsStViw56oC4vQqLoEitwkPQmxG7BqBHAbjoFKK9nL6TVtkvEreQXXbsfgH",
  "key30": "4t5t6fGDZBA3K8ZxqUsiaXq8X1ckMN1HtsLVavn69Azpyzzg2WQaqwUKmLeEbGs7q5hprUJkBEBDnSLpakQzdMrp",
  "key31": "39wCAivLFpCYabHUPhfbUkek7KKc1A3BWcPWQXzpztc5AkSdR84p3Yqm7RfZ2ajdqWWf8nBNrvMutPo4JhTEjYZB",
  "key32": "2eqYBoX1Hybt2AmLzj9XdnGEomRyykj7NHt9rpySeM7vPVSMJwVPB9ymhai2FRcvwfM8eYeS48bv67GFKZ3Y5UoU",
  "key33": "2pN4cQskrMMWrkbEZtSsD3jARYziFAqubPGEpN7U3fMZirbJN32339d8QLpQiZVVHowrbNHUGSStK3VkC8ADWTNt",
  "key34": "3W2sRA6bc8WuKNH3HhKY11trhiWesUzE6YvVW2JTntazoYpjWLw5FbjVqcSbk3BcsjbtcApJAo8X7LkKuUTEAMgc",
  "key35": "3RYakEstuthXdzUpYBerToLiGWVZh7yVrDDoXDh9QnThCS6QmA8qrN7DviHnSjChPwU5jHfVqHoHVgz1sjL9c2Rf",
  "key36": "2UyPdo3SvJPiX9vxqJTCrHnjTxaxwKAgeqbRh2T7U8dr2jizfsLgPcUrvg7h4JC1Wi4KYAfHrP9SWNnyvwreuFgE",
  "key37": "5yJ5Hp3RkGy2Nmqu7Eew8r9bzppmGJDLywqJaN6A3pEG8kkQ7EHRLsiwaGAb3DGrBdj6ijMort8gYZfifYc3zfJZ",
  "key38": "25usVdEFwYCgn8r6nCoVeJuTh6vQVRDekQPdGMj3r2eyWoXM8NzM79pfaKsS9bRz1RATgBmYkWsnP2aNThWTmVpT",
  "key39": "5jxquVAAENb4kG1hURFa3WCNoayqEph283MLdMUiiLiaakEjeTPYvhVK6zGNN34cWGdkN1ktq3zm9ftEkHMyxfYy"
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
