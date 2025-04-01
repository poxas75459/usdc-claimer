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
    "jnTfbCp6xyZieyi6Nj9Ttr1TqamxXhc8Vkm6bXgUtnEpecXherhAz6tmstqMWUn6vX7u8X5uLUmB2M6tYxhpsRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drUpvhAqTxP9D2NYMeNyocdkf19rptj29ZnqFEuFz3CcUVsYcbkSZsQKPX7sqRTEErai8DvFmKm66YksHzQ6N3p",
  "key1": "2zfKBMuZ3uRzHQ6dXyadV7tvR68L2ZaVDp6ifWKucdjAYg2ZNQY1pr3g6JsJ3E1oKFHL84ify1iXdCMNYkQvXPxa",
  "key2": "4oE5FhHmZpJxe5FYqYhcDtSruVzSE7Tpz9g1DJLYkuQa3MHYS26UwqR8dVEdouv66rHb7F2sZqAgFKc26ZHtdogZ",
  "key3": "64JMMWJCrcntLuNTAQFQWSo1M1PzxfnFJam8hLC3pV3cedfbwTFycFM3kdk1yLhDxG3JejKb1Hor35d6rJc39u5x",
  "key4": "5EvcwVw1LMgTdaYXUN83DayUPnpNrFniG35GfsCxTyWa3dwjx5woWGzMvrkvNu3TF8sajB1YFoc3P4mJex6yJwna",
  "key5": "4hVL59GobWm4orCPS2VyMs9wYr1r9JdY4a3yzUVZ9uju55AMLsXWgzMXFQJQAcTmMJcg9pJjrfXJEDMHrWaUR8Fm",
  "key6": "2SHEv7V7YnEYFU3eFqBBbpZM2AyMwjA6jTUVpLxH8nMSXZHeaRH5kAvqFCkru4tXwwowJgSSqzxjC7LcGYPSGEuc",
  "key7": "A42HVkrb7xGR9sUFC4dxV15KCG2nN7EHh3EnvrSp5jzvHxhV5nCs8p9PU8Yhg9RD1bFpQ2qggcFCuhfE3xRvzGQ",
  "key8": "3CXCM8x2vjDQGTTc3aKZr6zD8ju1tf4iiw4RtfL9ttuTtxXZ6p4AjxZ9Uw5xtcEwThJiRv5MgwRzKGCEtHgKdTLG",
  "key9": "2ykBTuVGnUE2EXvLZ1jb91utjSHqSkazbdciguTQmtKhZ2BYAHG7P9P7CtZJnz7Kyv557dC3JnMse2wRiR7mvMy8",
  "key10": "3FpSH8AupsnYJagFFWS8m2DPL5YewzAd9otmbNFkXnbwEw5ty3AxYnUTTteHeKyG6BfK9f3UtZ4ZYLk14XD92CaL",
  "key11": "4HHvGqSYcqEq45Yehftes5D77NDZ6UESkJXM3jiYsh9rrtJ6GK3ibrYwrk485xZnmAc9QBjYbWH18gCb8qdUynit",
  "key12": "5J4YHjbSzxoGtokunu8PU9EGgqb4fX7bPKhoq2czTLtxPuQqk4HzznS6DtjUjTSLiMdD1oQRuVRvK6Amrx3ji8H5",
  "key13": "21dLfnTktXzb2J5ZF8CdRApCnHPSXZGoiEhyZfkYHUxq5zMbPBS3yYjbpX6WNmKaWNMQLCNnocEEgui2vzCA8kqM",
  "key14": "c9fkfvDPTjRbxgaWYiNWLZgQ8EdRXprggup9HppTbnhrHXQaTUV6RMDxvFsGzA899LE9mtkBHtseRT1c5gCrgyp",
  "key15": "4awacEtXQdtq52gPP8EJh77ADuvWHkhK2dLutdhWVZmB25CqbFrKureJRmAJ3ivdrCNtFFD52o2Te3TKGu9VaShf",
  "key16": "2k765PPFYY7sWGSEvxo9qGwGo4VPQafQBAmPgBD5jqzGMnwvQjSA8Svwe95S9PrXaNVik6tKKtUzzJ6AhbBfDZjC",
  "key17": "2QToShUY9jNbroYaYvmfE7HLfAXPdUWcBczsQfiDJYw7ktBPgCqivFPsYDNxUn74rjssthyW3QoU3KyrLhBcZ7Ee",
  "key18": "2XEcN4BzSwDR31yLMrgRX95rGVPixJTsnrb5VxzWCrSFzX4QnQZp59dB5prMpAS8fz5D9yuWJA8zJBns5mYHsU9C",
  "key19": "4CUg8p5fBkU891td5LHH6XsrP8dpq41Q5i2hcjmsKgeA1y952u7cW8yBBwmRqJVKPqMBTMaLPZRLhjYpgHGyp6K3",
  "key20": "51B4fynLg42hqCRQkw5JJebDpBbQuxJGy16bxfbE8V2LTPcKxjgKw9hYS3WnCRNfrhcCFEFbDPEgY2bnvmgg8DAQ",
  "key21": "5DZiiiVwWbSMWw6PAtNyaSJsgXjuTLsP2C2jBvUizi4qrPBCq1j1gdBM9c3s4LCVpUshQAbAreKAYVVt12ibo8xS",
  "key22": "4nEhGeZYxefWUMap118P6Cej59jk5DbyjVT96RBdRe42bNHqbr8HkSwFMsaVL5EDxVEwpZepUtCYGznQJ5u7TNih",
  "key23": "2Y36kakK3LFQ4QhDosXSXSR9k4Tm3d3CgvoLVNZ95VmNaq2Duhd4Pb3pXKuWuyffW6Sz1oBG5pzkXJWvWTLJGnnQ",
  "key24": "3M5g1Ty7EupZ8wtuGd2EXxoX9a4g7UMzTPfBULZUf7MsqDf6Ces4JnjG8BsFceFmvZe1F89mmGfB9ysqikWhVqyB",
  "key25": "2pjMGeefnug1gaLfapfd5qh5Ni2JHESsoCZyZbe2yhVhqj78CkEJYx1ukut3ntFTzFX7hY7AWoiApuR6yhUy842U",
  "key26": "2o7icLfr9T4sMLUy5K2Wqp5mdFu6zFQ1EqCSfivr8dkinDz6BAWL2WJBWkcTUh4KEY3caM9k87NraULkYZMSCXhn",
  "key27": "2GbnbAvvSx8MFiV4ddKqgqiaYja3JKfnGSyQsaodruWar5FwMf3grdRqQGV1kNpxSDEJNNKiT4RiwTfpbsjTctmn",
  "key28": "4kj7KbBJsjZrgH6vvNcxxXREbfcm5VMgr6rzdkdwnnmAKtznCBneQNj3hbTzvPxFiZ1ticgHtiufgprK542ofKD",
  "key29": "2oHdqTqgXnBz3SjvKc611rBmZivP3DnKoYEoGNojGeDkxEJWoqHj7AZc2Eo4KgcUy6rNntqYTSt3DHrK49JU26rD",
  "key30": "31DeGf92SfhgeW41pi8bsrQbCWmYdcpirTiN65ch3ydffRFaKF5zCmT1keRALnNGuJB4ZyT4uGCEpKVJf82R8A8v",
  "key31": "3vbetiZW3566L8aAZjwi514oWpbsqX3rMnt8ftUToDbaNN92isjpeVDpykLm3WcXFnr5jQtmWTp5QW1xGMXDbKXX",
  "key32": "3jTXL72jYhTz6Lz3ZDSoppfLXettQieLrG3B4EjtH2F7j4a3jZfYW2CfSCL18n7gXRzE8xHXuhpVTqoRFUPUGF3S",
  "key33": "2pyFYasznskFBJytST54ThnR1Ds2yJzCk5Spc7JvmQoNBhE2qs5HwjzRozHGkgKTa8jJgAoxgSDLfonzd6cKkt7g",
  "key34": "PtZuUvG1UCoBRMjvHRzMEaXJbUMmdHURHKq4AgSXsMx3LtRfZHcXcseMM5vwkzou5sQiUwWG4KtVs9NwtZnmXVa",
  "key35": "ttvMRSXngkgxiMto4E2VXkryA8rZtc5c8AfTZWQjqoXvbCQqDr7APL9uZKH5tw4dUkTfoTRVGrUYPPuhevZ1PgM"
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
