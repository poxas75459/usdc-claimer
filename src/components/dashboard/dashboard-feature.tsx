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
    "5FJ6DzoRaXwMrkgb3r1PkekWwn2YXFivQsHvyfRx3UTmtCmrcUAVeM9rFj1VxwYMv1frGTpcnZRu17RubfraAnMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8BZ7kLHD2hGeDTMSYgkU6RBGjsjB3mKhsd4NrPvdwTeka6CVUNCnHp7CwqfkQicASq3rMPe2EgvWR5eKNhsgHR",
  "key1": "2qtS8Hx9uHjiCrjeaZFrpnk2GtCA5foY2Qbi6t1LFb113M8y6Z1YmfiWTSihRZDYVVCZDbrcZe2tPHv4z3EGdPg7",
  "key2": "34dBFaFvHq18wSt6UgruHaAoRD6H7ygmaBWe22Ap3usQhJUspLHsPP5oDpvDGSxa9rcVKbQPwdsCyYaEgDNGktkh",
  "key3": "7i5bWjz8qwEvL1bJCZMSUd5MyJSWobqkaMQqdNyCb4ARJLCWQfcyxjzCrJhmzqdM4WpCVT7Jpv9yeuE51fcpbez",
  "key4": "5NnBPzDJP8akjrvucrDU6CFx2KiFrEcPjzx5TgdLmT6J4BZSBaNSXajD33hy1EDZEggxoNbrcdwnqa6czkYSiKtX",
  "key5": "26UkRBqpuhqy4B8wDCcxGvRnzmkopn4ZsXPVxpeLY5T3zfKBYkMf4vwJm2Q4zBcbRNEEuCieayUUauy4Nru3WuP1",
  "key6": "5U1efsPhs4mUNhhDSNiPiyx6j8T2mwH6R8YMDVQdaN6rUSBFMVQbEPouT3XBjhXDY3iV9nWQkpq5qje1BQaoLWgJ",
  "key7": "3JGZSWnC56nnfPdbekEDUTfKgZssdKcDdcB6XHhpeQvYUrBMAbY44yS2ZfaGogFcD75L4udHQX9SM2BfK1WeT2so",
  "key8": "1WLUnJm9VkzHgpjHDmpchTTvvv7UButPvVQLQiSHjhDgHyHSWewNwK3pKmt9qUeKH9HHB4VaDdiWHuF5wMTqKgz",
  "key9": "3RXW22Q1ZWVjV9reqy6nVBsA4cHcxbj7JCAsNJUaJeVXZz7CHz73UvQ9ZUxfb6jsGmg6KERBg2FLdbrs3o6nyTyq",
  "key10": "4HM4dFtNfk9NF2zW6qp1wHf8DYk4T3LyATondGE8nE1a1Y7xHFzaMVvmKf1DQuKzZVaYcQjKBeKUDGfcKzs84sjk",
  "key11": "3irRuEhymzUhjBh1iCRLHedyvjBxEmeSgMgtndunzSgyYcti6g6adtUMW3RpShVJirKgio5Rk7LdFseuekeTJgCF",
  "key12": "4weioXuHSKEVTq8bVpWwVuPpYB6L3haZbwrKvRGdCgzXL4zos5Qc3h2U8m8RTnxn7hEHZa1hwt175TqjSPqSyiRG",
  "key13": "5ognZh7f4L6Dnn5CVgzwAVatkXGjxytRtZpwNJEk5jVC48FWLkUR2RoZwVyNXwDCsBRdMAsCn5p6VpLbWFtmJh1C",
  "key14": "2GopdGcWVdhXBBV6yMMyVybtSU8BRdeGTy1MydMNQkX66ohXoupEwapzBtr4x496vDrD16kjcQMpQU2JBCrw5gbw",
  "key15": "5u3Vie9MzBkJjcbscDsERDZbvmUE3xyHjbvyhLRtxNgP8yvTdAg4eWXXFejzogQ4iL87aHzrZiWer3MCkHL3s58m",
  "key16": "54Yocbx2wbb172tdi9vbhTZi5q2uUG9uW3u5jzY7StUC1TYYdq186FYqMSzuTMKMK3F4pm2dVDUQpZ5TkwY3pBWi",
  "key17": "3DEB7gSCYnwof82PXt2CNCjJhvPNLuZFNopP52DmgUu7buGrBX6v1rpXdvygsJKMYMis3kDHEuiqwgsbYpModAhG",
  "key18": "vJ1RP6gWZZ8btDocyuXcyqcxgKzvyodiusG2Ffnn376hdLU56HcqBgGXGrmenkv8QVijUUSs9B4xVKQwDDorRh4",
  "key19": "5S86UYeV7HsGfHr8aKQ4b38XDUSe6fUQqE7EwUbGwUknEsvtQg4h4vznb7ciPAaiMrkfDDHJGkNKH6Ct5s323LmM",
  "key20": "5iScHhTKotYaWuoqAqBhb57jkk7CZQxp5Z1XnV1R5Zy2MDejA5o974TKDUHmx6HDz3BVPsP5zCetdRpMtVkp7yqD",
  "key21": "2EgKXpGZEWzuL4CGRnVY2g7wC9n4NNQhTeH1bVe2B88TKWpRE7H6zHMMGEspZjRB1KHGuir3xVfB6SdSuQgEjJXM",
  "key22": "5bSew8GnTu8jtwh1KUXPGo2yrhqNyuaJ3johUA3j56SfymWF1w9sS6t6suPuWQQe5tFW7A3GkuzPcoNRAFpUCLs6",
  "key23": "DqiT7dQQkyzuJm5gYRMLeBhVabpA69Gx6a48M3yTTzkh8LywqcwGKqifEKxLpe6wAmBU8MMNAXS2FYxFbqHGyk2",
  "key24": "5yvtpqC5SRhhKsYqEs9hBLB4hvce5T8PSVyRMwZccs4P6YTRozZJB4GKv3yEx27ebZ5LFKet2hBafCFG5V4ZkHmZ",
  "key25": "5CGQow4Cu48D2pv1gjpw3nzFgejxj2EfTJ7Kqvr5CQZwqkAM4z2HYpCrLaZXhBd97rr36S4zwtdCzeHir5hKgUad",
  "key26": "2d6tgJctbA2G7BpCXwb2NpYEwgXAtrUxAYPcSdDMztkpUXPwE9fb3BMKedFPtJ5aCKWY71NrcNKEMhnvUG129cqk",
  "key27": "3v7g3PhituEfthhUm23JMAyCYJmnkoo1Hs7VVvidMMvv6aCz4AQvuNsWrciVWM7nE77v2udCTga27NBW9gwa5MZs",
  "key28": "56EKDzB5oTHVsnhW2krCBAk63k6w269JR7DpknYYDqbtCLtUztmCorKyedRd8TTLWnnQ2sak51nDejSdEb8sia27",
  "key29": "2Gobh8SEdnVvRDq9nsRX1dKKyvhzf59GghvCksxeAw1TriymNMejWBDTw6J7CMLbYpCc3nvCDCnLv1GCSbGKg3jZ",
  "key30": "4hJUGphRFKNNwbpveW7gBGbHY1euxSKHW9gvKKNKmByXwQw6TRTgvBuBoZPFfvUwQurb8uwhmdSnpRSgRaVGFRub",
  "key31": "2ic51mXdFYWWqmETUGTnna9JyxQriZcHttHM8twjPpoLaWzcKAmbBEigB2aZCfqnmiUDKuADSdK8Ty7pDm9c3Mw",
  "key32": "4v3gGs8qZCVHEM96ekNNsT6eEghmKpWzoxBk6NXog8uKkS6VAuJmH9WnPDXs1d89r88NSWJyZuGELHXBCzCgGfhY",
  "key33": "3YaTz3a5nJ9ULo9ckhTuuCXtvYxPJqGBB2FcygBFHxj2wY3JVcqgYuxhhxwuTYLE3bzcp6PLLtfNx1V6dpvWkf8Z",
  "key34": "4W1nrWJXtEFwuWWTc3CvcDwBcq8PiPFdy9EJTWQWPGKjPuAEsLUbDipVSH9yX1xTy2qBxXU86xet5jbeHpv4UkA4",
  "key35": "4MakogiZn2hZhTa62uTkauAptYq8HM3KJscYrFxtuzaNQ5hrZnzth8xcFtw6WY436eSTp1oZ9YPbi5S9uHP73S8g",
  "key36": "3DHYPUHNUNFmMcc2KiRoRqj6q2FhAEhnhv9BQPgy27BSpM8JRRb33raiYcstMb1yixHaU91knNhMiJxWP9eiGVzA",
  "key37": "oBedYm929iry7EC2k3uDA6WTKVCsqiSLnvvQuLfBrYdDYG2SZFCsDEN3jsiK6GUqLigv9S2j5veEqkKVretZYEA",
  "key38": "2EXLh6CYEwfxZhkn1biEwxum9qQBFvaQSDKAzz7pBavZUJC8TZ9hAkwiTJHC1AEmSR5kMpgyY1M7Wbne4u5A1HLU",
  "key39": "2rA62EHdq8q5Z2Zp6JfTafExANWobjiYT6cwtBigHKp8zmoZfcGdAdBTwLBiAVKe5A2jDaDo2P3pP5XhvQejoZ2E",
  "key40": "5oPQfUK89fi3FvKyDaAQ9MrfG3LwvkYqvQfCSaLf83A6jwqtL6zRZxzGGnZ3MpQPC1dyPsZ1jQonWT2TCk7kMrh8",
  "key41": "2Sn9tdr7aXnq75aBhtRHFwBUFauMxjrZpgZZ38HizQRy34mZ3XwG2uxy53VoCv3mbyDscR1X9o2SJz35Esz6Cf43",
  "key42": "5E4qe5wKqVuHACXGXeqBoN2zRqvyLC7homajrPEBmyxiTYLGV5XxiY9u8mjH6oCVXPMsPszsFFMQjWBeZo3itii1",
  "key43": "bAnV1wL7i5DVomMwuGHfRhL14X6aN1dXqRBjMFvfCBfEaCmGiZyqj2Fc46ys7oCYEVov1dQvWQWeMCjNd3QhhKb",
  "key44": "479f4o63qJX2pdzDwD7TDHvBRyQu5LuWk8XHKFgxfg6B41LBvhziroyyq2wutgQeQ74KDgwTS31ouW4F4xBGq5ra",
  "key45": "2EzGJs4eegConxwxrFpFgTneBSYP2EitvLyBSRriWvnyJLmuupra8BKDDe6vfwhyTwsehjWVH4NLMeawkpFZdNLZ"
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
