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
    "tAgNWc6JxhLik1gkgbzpyvPknnDS8JHSn7q5tdgSu57e3RAQhgUafNgRpjDBJ47TPomfNSLQm6GhB3yax9bbFsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zLUtnX3YH1pZ3EaSoYzJTTHhKkGGEXUufYcsae42ysJUzVTpHU8FcERPiWQKHJFerDrJzmpHqgzi6jMJhfTNz2",
  "key1": "3uQaNL6rXmo15sYcnwj7yN9hkSbKv1fpVsHn4EEa2Cve5B8ZVQZXFHWWrj9YwBRZdzXWCHMfBbnBfcD6PyuLZ5TL",
  "key2": "3wf7iWeXuEc6RfZL59BsnvfbqbiRYs7gFqASkJFekVpcwBniJHEkRvT3onK4iyw5P9cYfXzJk6juoJP5WnQ7tXb6",
  "key3": "o2wvAuRimrCNYRquaPe3JPejaALfcEWX2A4T6CXhgeHXeC2EDWw5dy8aqdu9mnZTt8PmTRUt6Ry8fj6hgkFV76L",
  "key4": "5VVnmH6AqwZGbxKtypGPtJYJyYNCpQcerrcDLFogwgtrPQNGbPSnjb5kA8DeQKvapjDE5WfXrQpMnXBYzpiBjvWU",
  "key5": "2C1c2nZe1y5KdkF8GpwNEvDA3pSGZB4Gj2aJR5oc6zX7suz6g1DBEdb9uH1kYoqgfDUyfHR41fhYBr934z4SFP8S",
  "key6": "3uyreLQVTic67UDnn4tiHo6tVmz8JW8NMtEHT7EoSTA9WUd5kHFsiRyEsd7TLhL2dvPjQK5Ck72N8P3nzePsNhBT",
  "key7": "3QkcXEu87kMtyYTcd4JM7bi3twYBABR6F3oVdyeWc2pZDr5r7TFfMaHTYczvxSzrbDUyMJdQYrTAWTdwcFGohu1V",
  "key8": "4BoUQN97jSg2c9wmDupXHfaA9iCUP1sGYrBZU2n93MfqMj4axgT31Nam4q2aA7FMfB7kL9Q1xz9PhSySrAMRZDgH",
  "key9": "26Kxv5AEsP7QdoaZzkSbYg4DQEn6nndMeX4bdTYCJtrnETav1ghb1F9fooQMLZ7LtQw4rVzsEmswfeK2Q2ibPaho",
  "key10": "2JN8yUQT1sZg5XK5gmhcN5BSSWugDgSz5nLujqxiCFczjQ5mCgLMpk3wUCeCJpgiRJihneqwqFNPxB71mKMNVu31",
  "key11": "3R7P6LruqmMP5HxEHLMfEhAXwSZrZK1nFzU8MNb696nhatMVoZumbW4yz9SmQvzyGhx5FhkmigmVQ3dAhxmuxyFz",
  "key12": "na9VxieDpN5fVe385Q8X5MCkW7236VVDZDbX27S25qpVDpgYe863khHsAu5GYtdpSDwJq2kbJokaJ1npzXVrCeo",
  "key13": "3yHzf5s1DqhJjKpJy46UNavH7qxVhprAfEkvfHkKVb5phbvqpWYaPLFejUk9viqonpSvLydd4LCbW4aua82syzcp",
  "key14": "2HeDYLHop4MMWPVyN3ZYozgfr9ZXwRxgn4xRzGX8gLzPNyZaubM21CoLAKvzb1qAufr9khbD4SRsJswaN1g2RQk6",
  "key15": "25H8A5Gbn2oJ59YXFdhW2hZK16568rq9ob241Qyy2YMMT4VEv5YvWFtyGGwLNL3TzvWrboiyButtEegrEWkUhg6Y",
  "key16": "5G8QZ21X6p4TGzTVhZ9Zt2iLKv9NP4dJtxWmPFK9A582ipZkmoJ8qQqYoZDY76wBVrRZUFB5aGQgAfYdzPd8QNsh",
  "key17": "75GyZo2Mn3vXm2fyjUho3HcVBSXtSHvVrj2dfS5MX7MLEUdtghaWdmf8rY8wBmPDsnnr61vMQb1ga5JsGwYS95Q",
  "key18": "3j9xrHDH6Gzx3spNvJ8DPhAYvBvmPPJagcw4tMXM9N1mKQzfWrKZiwffK1hstGCgkLT3eTxGS68GYD3wLWHLiTjS",
  "key19": "MCHnMH8WAhox4A4KupHxS94RbBBaxj2ips2zy7cJrGREG1wohuUzLrJ6irdr2mePqjMtd7rpESe8iExZCdz8Kwv",
  "key20": "375T52MYSJR38bSC7J2tPP4qFzSox8J8jp2MiVCKmU7ZSKqeQmgGB6GiwuKp2uGwA5dsTuBnydjietWZNdFo5EB2",
  "key21": "4AR3gnWRHqyRE7hDrZH1F3B1pQcMqLCRLA74otCUCTfLVXC8UGqh3iSr53kHwfgBm4n8sC8ft8A19APmdm291xGv",
  "key22": "2eD7uJxaF9iN2Ne6FZRGNV2YYXjf5VjegXkMZZEw8Ljtpq3gns6cduN8zKXhrMTucSWUtpfALg92hckUZJs9mzss",
  "key23": "3pLsScNRi7orSwVg2As9XRGPUHEU1teSmnFMcNS8ZSgpeSxCSJfqcS9o4AoNtnyCMmunWmtiR5TqXPALEKsMDYNJ",
  "key24": "2dpxNWKfVPo1zZpikt7K17rqkB6s9aoPrvVK6uF9oR4srC4ETxkLEtXzC1mC4gbdfZhpUyNeVgt2Kwoi5JqkREXd",
  "key25": "5gQgk6pjtbuPqQUDkLwZsTZtE899YYeLeW88k3TvZ1aksCZE4Lnq8CEwWaFt6ZNWJX5xBg8HHwVBxdkrK7VfpZKu",
  "key26": "4h83pxciE71JQRnHiAjtok5SYGqY9kykeopzqCJZ3gYVoGBdyaxpDR4etCGzjN5M9tDyXRC8s8ajpMoHLrHYzLga",
  "key27": "5qacdiRb2YArkTrAUkYWmpjrHBd9L7cWXRRb5pvBhPkAAPHbXeirFxrSjGH9yd9ZQj9reUhrXzvYfLWsaC64H2Ut",
  "key28": "eeXxhhNSUySdUvLb1Py3CnpbzUjzoRhG3zgSVvspGgSuybmhZg1xKJU6CYr5Ym5JBJ7aQfiixRo7GRV74MrVWn6",
  "key29": "eQaBpvKU2yX1LGWJbeGt1UZVYCZ9an9MAB7d5o5SZkFnvdzwJRCHN7Dfe5Egid3jrEmsucCTZ2JJZ2Bmvhc9muY",
  "key30": "2eLcnNKaoHEDEf29hBd1Sax2vP1HSfzA8vtCRBTYWGdK9Yrne9aJvPV6Lj7tqUMNLuj7p2cZMByu8krn7bSaizNw",
  "key31": "5qSE1WpiBYAe8dyZahcJUbPGsbkUKfYSepHBWRSC5x8P6UiMseG5JT4xin5kPgjPkRBs68ooFwu4Lqk5frTB4UDM",
  "key32": "3xXDCBqfwWgEtHy81EZhpYJBmQBBWU5qSSoj3TD2P4jSmyQZ3bQYfGxzPU3C52g2DcoXfU76crfqURFUvN39qH3M",
  "key33": "2irRPVW8UtnykYw3Upo6M55dv8aRrB19mEombzJwCpX3PSqLY1Q7MmRQh464RXpQaaVmNJQ91iKd5v73kkEm46z",
  "key34": "499GijLDHPU6gmsJSv1QzBN5kDKHYoW34SATd7ijgd3oN8CSrAuUC2rVtiBLC7J3NXAeYSrM6JMzzhvbVGNDrmbx",
  "key35": "4fXKsWFC11Kqw9P5uokQxF5UYKd1BWd3TyHRWtgYQAPbP3B3BPTasLzRaDs3ZVLoshoPkX7wYrK5F83d7cRDn85a",
  "key36": "4xqjrjnfR2vnG8GEEX8Qpnu3iU7hGu49EENRiRK4sHaN26iDvBDaAtuS3Qvz6grSLMGWxC242A1gm4qJPuTwBnry",
  "key37": "2xMvjocFdfcPyaBDVdrkuVwyUY6SMKM7sBsX61i4Xqr7vEcadAkbg5PDN1P5JpdzpHjG72ExK9dZmnhzVwkeikPS",
  "key38": "CUXD8qzCUqoj5EGQhZKamHVq16w17pKe9Cv6FHaAsBVGxiteRmeXjhTYrGQ61vS3gZHinWxXys2NvmqDmnNfxRJ"
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
