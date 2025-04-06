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
    "3kTXgYAF9hKx4GnFKwG85FrwmfL2HvVV3zvJ4abpaXEHsq7i1mnkZZ2k6PdQNQMjswo96c6FspqN4ZHcqrQ7NZxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3EQjf8koLYtLAFjCNBR85GvZkiowK37Mscpcar35zLr3EiCmCmzZa3Wd8zDySquCC3ByscGYkqSLwGc6Y94igR",
  "key1": "4uoFxNbaeCZRJXZ9JAWpZG6uxyMzaw3VYF7TTzAqRaC3fxrxSrVmKSnHM9kofjgv3hFcquLSJrQ1GtiMwoCNxvrV",
  "key2": "51VXZ86mJn6x7jeremk9Px6iS9Z13qoW77RA564jq5XftN9ki2jFVbPALbDzfRPCufWur9MSGrWEAXu9tCRdM5Aq",
  "key3": "5pCmUV3mjrfj3AGGwt3V3bjeDpLftjWRF3pZCEJtsY9m6crkoMxJ6JcLBcxzNx21mVYkReCcHT35HEZeNSUTCRd1",
  "key4": "5zKYsV13rJmSkNxUp1Vgrv4yihm3qjDXrjWtQNL8oBkDfxNsNfKFA3juJSFgVWbgxghKRRYhsshacdgXAd9g5iLs",
  "key5": "3ZDg5XcwnY2c6Uu8r97SaZqbYNnFqemZniSTtToACah2yGXsetnLhN3i2ucoMH3DnJqbLA6nk4GurEZ6v2w8zsnW",
  "key6": "3JBdgRi3Nr9dFmyu9B5qH2B6rYEEuty9crzBnvriojNdcpKfw2V1hcN9HwrzWwWeKqDRYyoGfFiCZSZSf9NU8suc",
  "key7": "4aNNVfXUdSXaXVcCizJcxUjAKpiWFubt8KCwojxa2Wh1nuW1wVQowUNKrc5e2SJoSE9ZPof9QRefdkZmjgtmfufx",
  "key8": "2i4LjZa4XMEqR4SE5nnYFdFtPhDYVsbLZaGykJcQYNPEMoBixi2NbVYyUeJXrbyBakaTcsW9CnMG3u54Ed1daBKz",
  "key9": "5oYxgDeK5od1ym8P9Yd7cNphA2MXDcBhnqmt7XtUrRMZQHPcWmy3Mhkor7WDs3rJBK2nMyd21ueWkL1W8QVZLiko",
  "key10": "3yJaj2TLQs1rTBd5D6dfVcK7WtMQK9NDumXfeuAc2m2XJZoX9dsEjn1C87K6tCqn8YDjxsfrVNek3b9n7zPSZ4pt",
  "key11": "5ztqv6FKDWueAmAN7e44VLG99MvhS58prBiNCAvYtj2psCj6yRwmdnk5UUbU6xqmVfnYby7CASAZb6qQ1yGCSHqt",
  "key12": "5VYMxgyHR4brog1cUGLiY6mxoZkj3KTQ29HZMKiWo16YzTz7T4t7erRm7y4XinyUDxjcckKHeN7cUstvhZD6zXJt",
  "key13": "5SktpJ7zYSPvBpaM18Y4jfHUJ3VPK8eGvp67i2rGwGhsJ9sX3g4ojEabkwvuehnsKHtPR7tTnF7XuBjqvJ9yaPCZ",
  "key14": "2GF8t2cywk1ybkXfQa45YWbHu8G7jxbLpejr2XiSKikYr3yM6tjmjfhx9yAjwqLLpzhPZF5PV8XFjXuxSz5zWL1A",
  "key15": "58iKzFA2ma7rtu3V3HcLZK9nCNjjKpwbh9CHFiriQPiQE8cdhb2eGxHikBxGD7R3hQy2Uk18ggJkuCyQD33EcLpE",
  "key16": "2xGdEWL7QVyx7mT4WohZW1W9WBBNQcjkdeRierjvS2fUWtX1UWPPVjFxtgqZ7KxTZbjQEaUbcuJasaqQqJagH5y6",
  "key17": "2MvE5Zh76M5WFvzaT9nhDYJb5bqw6btccFvuhRu7stiCpYsvAcchjfT49EuMFnHoKYhBrnixGLiTSb8Eyqby53Es",
  "key18": "4Scvby7YKzGCouHAE23qf4xfM7ZNQqVvhzkc8QhtqsJQ3hHeET4UwnorzEYowmHyrTstusMj3iEw2GoCE6UBRy5h",
  "key19": "2hb1Q3VnhJgHGGUHUvfQ1QYVVDCGyELsvNsf2dbq2SC8mVg1NKL7kJWF7fTd4wAAETDgoYBDYT8VM7KuZbPuTK4T",
  "key20": "3eMNTHtRX17QHborf3jBrQkDn5xVxRgC7TaBfk38hgssZaNiJUKbX1YcRX8bpnN88T5Wd1Kv8THwRnsBPa3K5tSt",
  "key21": "49W1k7DoeoiVT76E61on8PsSWzHmVYhrUDbouvcM8QyW2j5oE42YR1miqHuYH7XoLY41XgGkEvv2K3ezZ6oEgoh9",
  "key22": "3GMWCGbDtJ7LqL3i3tc7tzvEsfTfgYougk8m7km7noV3un99PouV9xyJXwP2CMeFTGcMaSQPLZoVwBjUe6wMh2ai",
  "key23": "3EkE65mqaoYxGp9H9EU9xjSCg9SVxzM4NEXqzzgUFtYiw9jpuTm6ujdeb1iB9k3JzNHLUcidkb1qQfwvHGbVGM3c",
  "key24": "4AQPEw7yjYwNj4c4sCBNeSB5YaYa3qoxhJGLfWjkiFEoL7TjnEopa4tLBniH66MJbQXoSC1HZ7ctDk72e1fDLXLJ",
  "key25": "2koPjXiiX9vduLaF3rq3XWDg8j5uB61vDRrW9H13CXqYYQsLJZKh645mWtq7PBfaVjSUXk1KzytoKivCPvUrKjuE",
  "key26": "3uqywARi6MGp46E2LKU72bFnHjaHVkGMQMHi6zxxv41EKNUAhTL4wm8eSxmLGDVi8kbqggP2XpQJNNqrE2FzfKYw",
  "key27": "2forxyEJce1FZs64rZSmUiV2RtuVPAJYNZCJzGKi7kCujfUxXTM4FtbYwrb45anTrUn8vn1Wi8b2DmQyTNX95DSL",
  "key28": "5iTfdsHsG5EEJerzK9oBsN8EWkbrJbkKCmupAjnjUmHNBcTiGBVVUzhY3F1JK25QyUJA74XkEgLDRacSBpcbY7v7",
  "key29": "3q7xKgQg2vrHYRqJv1kjxFHQ3JkJRJvBmPAtFqTx2UKtngxqT4ReaBZBQmMQYF4BwWHHm8GVdo2Z7pftQ26YzEEy",
  "key30": "3Yx2BWyiM7qW8tk4UsJh43p3WjDctKPKhfqVhuUzdodAVuqMAHtwBQHjgD8PKy87r2N8xFU4JNNfEPVy2Ljcn6qc",
  "key31": "GMpCYqfprmsS2EUjbEWMfTuL9hcsYGdpea5jroMsPaUoLjqVoUfnUxkznwfMTLPzqFCiNW5TDY7VEmhvMeGK82p",
  "key32": "5GrG6C4fD6vPS8sakx5giiT5DySvWM2w9mN6A93aLJst5raRRgofvtuu9hZPZq9NgvVnRAfDVjXonnjZMMbyXUHf",
  "key33": "4fKmP1vN4Yvv5K4UdEK9NyEhr2H6s2pK4F5depM7KuLphjNwapMAEhBQET8naZcdzbYyNo92Z3SrzvbZFgnbMko",
  "key34": "2ArY7RrbC41Co3rngmCrq8VbRfWiGSotCBqTBeU8gBE6hwhuk7H5me2wiT9DmPktXuigJyqWXgEBGzxcsdPGuNRo"
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
