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
    "63pLc9g5c8nFiemrBGYqSNGZbvB1btxT9gpLmg4pzEw7TWALTYF1Lm841pFJYkL9aBRptoY3pz2CXWMm2S3krtYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTJ1GqJTQUVU3VrfMk8pxZ1ybop8P5smhPzhDs3fea2FWbeoiqwSUX1wYnb7BUSf3AYFjvzKMLd9GUKhmGbEbeC",
  "key1": "4g1sFTsEsSAFGDE52yJ7xLtBqymsD5R5UqKSsonVPax3LW3E2ii3CPphCP3UxkdUNSPRXD8BcDwa8ZCCCsNhvazW",
  "key2": "3J6cDwCMEPvB67L4uDGnSe34rWoarpNqd4Jyb9C7smKN47HC4jkEP9GQKdNWpdLuMbnXjiCDUdqGXzUNNWURiSL3",
  "key3": "3FrVXRoH7FpKspFHgxGKBgTdBYxP8G1sHifo1fCUiQR4czdRwoBXAAAwGrHCjdfxZFp8SPUm1w4BNRepn5otqmHa",
  "key4": "3yEingvtJLLLzhuouRUA3UQdcNrx6ujXhNCKZAYMm2MAhdzhnu3eYZw9jvyzeDvq78ZceCCXJ8s9XMsfQLD2W7UT",
  "key5": "3HwvTg9zthzc86Hc6D2iT1ARdVE5Mqv4Lcn9gtqzcEJZGNWNcezsG3ZLpskygniayibCCpyL3CYnwLMrQdefY51o",
  "key6": "2ddH5Xs3ddHaNFcah922fmSzwp9HBrSmtq3LhpgiTD7MhG1jVjud1qRzEn4YQK4pesqAyBzfwHNAYhvtAX7YBVj1",
  "key7": "2pe8FBkds1MoFbQKhthZTPzCJWcfD9wAUCn8YXZAo1JFNsXUeGu6NxCbzpUPVvypjqhtV4Sx6Qh2iNEC2UdoKNrq",
  "key8": "21WgDgpaWtNQEX82EK5uhyLNC35rHyJw8daHWrdoDxPkiYtPbA4owM5sy2y742TroTtZ9GqH5Wp7LodTS234RrMa",
  "key9": "4iAVCgGxZGkFpAThkijesu8T2EyXEgPgV4YAQToKvFqVq7oBoZ5yrpJpY4H41xq4Yy7p4dfyYNAahoxCwgJxk6b9",
  "key10": "5Lp81gUDoEpWkS4tcSWGsApNR62icPJsCmd4TuyiZqWmVnE1FBnzXnijqhw1yBEwvMYfevLkZ1FN4U4UasToiUjd",
  "key11": "3ZsChaLvNqcBPZ8FCQe13YGbpVyzFJuc62LtYksTWFmjXAcRm6gwySTmoHaUzXKqDEmioA5ozE9nutfnziZWB6qY",
  "key12": "uRnMLJ1v37nqfqCyQPP8NFD2uLvKEth3aBenqz4DqQXH1hMMeECDoYUWs7h18E8dnLpBLTuc53qGr82LMvvsLgH",
  "key13": "3zYFohAWGYaDkBPpPLC4vRFC5DichkGuzwwc24Tto7XKmT6LnJ3KZr1cU5ER9kdnUWUpUmoEu7Wz2oGBikpZBuDH",
  "key14": "445gYxRhrWZ22jKawQhLPaQv89AB7QqaBtzeAiXZmcw4WpDdeBAyB1m3PWnVuWWEUyJMmWFXt1eYAyr39tWnRn53",
  "key15": "51wrZMnQcqj8zHVLKMhY8VJ1SiMTsonJoDDsaV8CuGqfuccbfrPvMzyR6wMYRbWAiPUdTB4u5GrB13mSMJW7JVeu",
  "key16": "5AN2QNfkXbpqQcUPnFgnPWU5CgMi3P1ki1SXjhPzSNWo8V7DLGqYooQevXWtNR1bpF3ddrk1Q51ixn6nHnvrBPhY",
  "key17": "4hoGa1QJxJr1bmHdeamiYQo9Ct3oUoLcZUeoy9ZeycL6NBxCF2ymM27PBp1mndWy6ixUsVEMrnQMNaM8qFpCJafY",
  "key18": "3Nv4hSjgYcGWRRMVz44L93n9SyTUhRSBXpETXjQ5aC52xYfoxy5jmzmbhHguZnym8v6w96VGiF9WoiKyyVkFwrxe",
  "key19": "2ZdwgNUph4odQ5i28eZHJTPWuyK8dNAUD3BkeRdBAZgwfyw9Cxx2iSaDxfc7YZTQJ7F8asNwbSckdLb9JdDGVhce",
  "key20": "3f6yyZfAKUzoBiRMHJB59hUEHvkxDdcFn6L7rk2WmA2oPsvNp7VxZRNEAaiFGqysFrJSvBEEt4BcQ64nyei38QoF",
  "key21": "U2tvwMALrTQjD4EniDQo1rV1rJdsJS6p7L25cwED232PLzp2rAD6TsGnwpNkzJUYqxGhxuTy3HFmVo3zZEFdrjv",
  "key22": "52FFZHLsvjUKKLLFyAWJakMXLk32chVVjzj5fbGqRCXyStTEoA6vAjWRhwwAcRm8hytSVWtFMgccjh64gSqoRvC7",
  "key23": "QobKQ6T7PkVsHE8dCV9KEUHZYZpoVoX8kK2Ceozz29EAx5GHTHJ1RZGTLrWpXGwzUggwbs6ySZUbuSQYVj9GGZG",
  "key24": "3NNFpZNhdPhp4aNEEMHKpTj9Pob83SEtXdVkudMNV5C1sN9Y5coLMppiiH2dXRDNKKiJWV7uyghAUKWwLofW6RZ3",
  "key25": "3AuRU5jSjq5wFMveDJjrYBsfXq1RkupzxbAPRGnYrGH4oYhyPx6xNYE1Yv9vgi6SNZYeaCPCR4JzrJQEDAFzB3jC",
  "key26": "4GP3r73J4wYNgz1ZqmckWhUzv8n5vyrvVAZyPDxJHADyjHQPwFH96skw2d1H7c7sYMToKkAbP4tsHDiRS2SX5Pnx",
  "key27": "4m3nMTMcpLhZeoUsci5aRSa53D3DjZshZG4PrUgqXUjjALexSfumFK1UPWqiJxk5sLPEjZiojZW9TzRXPa8PcwdC",
  "key28": "2bFAEpX6ixNwncM5nWGMSpWcydxGLsSGmjZt53ppMHcSN2V6o3zcyE3ByAAk5sVxauzbqx1HPc1LuUh5wFeU8Vd",
  "key29": "64SXfD9NCZ6qBWkcc1U87Qs8fPZ5ndRjz18NrGrpn2PcJaEqdziiMQ8eGyXFcCA77h9PTQLo4yn2CQ7s1BohuoMa",
  "key30": "4D6kwmYyFBJxkZkzDTKZSZq6ecLGKdaxcXn1j3XdBZyJTmqBgbnSvf6U3iRUpC1uzZgWhonB1bfMZaNQWC5TWHte",
  "key31": "4mqGJhPPQk8eZxWwTYM5Q4fMo3ieHsXNpxqjyhi6b3yKtKFA8VpMdfqfd4srUED4apxocGVBQe2EUznrFAyggxLf",
  "key32": "62Qcvzuj3M2VSABudtzfYZBzWkBwkCakhVHFjjWL69i7yh5EGARfwHHfKTjhLUT5faDS4UrjtoRcETgdmyhRdXfn",
  "key33": "3Ak6VCAVWtyawEHtCEanSBKmQhgGTSUsXRJCaUtykVLP7uJHVQfKeUbxdhXi2D2BiQfckL2F89qnWMMRWeoYHXtj",
  "key34": "3fZtv76krbAz4k9V3TC93dGkxyFsvg6aNhCVb6JGLXJKgjtxFrAKLX4vK3tctEDPbzw6Z97o2SVgxcaaMD9mpc9P",
  "key35": "4dPS7LGj279VuiYT6z3W9qn5b2E6fNHTjyLMHyT7nRdRLWK3G9By6rMMbYXawoheXJo8g6JUUe9NvNEmDWPhNdut",
  "key36": "49xg6WFNW2Cvudd8zaYF3juFLFTWsTM9qvJSDaAhLYtBY7XijZcHyYL6u5GSJohKpS5y3NoeHyFyHjTo14UJ6rjg",
  "key37": "gjmym5YaT6zF1ZEjE4natyr7JCdnMijkbjekgoEMXKZWvVg7KKGjiaWEYQtmGXgrSGLRwQbzYLSwK3NbWQmVA6h",
  "key38": "5qfFwiJwXZhD5FsfiEW8zuEVzdS147JHgjLorivCaCqWp9DGagHTgxKwSdCgDkKeu2hwAAAZJmu94mTDzpde8DuL",
  "key39": "4yfJbLM6ST1f4tUBmc8BS6X3k71aQTYU2aQr2inpR1TJ9NawauC6ESpWME8jNrfUMAECA7GBChoed5d1Bkr4aLt8",
  "key40": "3oqiwDzrMnbpcFFDMQY5LJ77qdRwgYtj158QYrA9CZNKrxjF79g2vRjPVc2XjmMMdjqDM1Z4QwgqJex4jxM3uFsd",
  "key41": "5hY61wdbpcJo4qjffr4U72zh8FzxJP9BzUef5ytY9S4pKu7xXh1jpvmczin4LqYgKrCpG7R4JLjqRRwoBo4V3YnP",
  "key42": "bBsgNrrCGMFETskFV36mF1WotKKYCdQLGBaZbqqVL1Qe2JVza86MoRGq7AuyVfVsx8uncLvSToq7chdDQvEQibD",
  "key43": "586KvCHT9A1VshaADpR2AgxuXj6donmPRzbygynZF2vu3KXiig7rWAuMbgdbkxj7B81wxRyCiEC4xzc7iadwQuJ1",
  "key44": "4cAVRbrVd8k66qfeToQt1NeTBv1ERdvppjrzSXK7HinjskwkJKMvVEDNjhE9Jfc3Kaz4C3hkjmfS6o9h6G3zuTMV",
  "key45": "qKRCkfCdaYjoVfWzQLNvA6hcSB91ykt8oabKKpQ2u37Xwn6NULJK5Fw3JgbNKZ72MusMGuF3dLFprZwpMJfov4c",
  "key46": "48wgJGUYAnH3FHxPMnWVpKgdhPSkm9TBQYnUfLw6JGMjxVFWCmMUzX8M4hvmruPYrnL2JLuwHY1X8FS4MaxNPbtn",
  "key47": "3kygqYbN7gkpL6w3BvgsSMt45iQtUXUpRvTuLoJfYeaDMtjd6TkM6xkv8riwL76U61o8D9tCaBytKmDvHaEzMGwt",
  "key48": "4pLFmDiGQ8iCB84texScGnDHSsRnmKCqKT9faWDy4BJrhwp7wNWVaeAgAjiyjouW4fg3H8qmaySz18o77kWmFzF3",
  "key49": "5B4wgkdZ1Sgpg8vghWigFtJAZH9uCdABMFma9sMCNCrRfxUGSw6yfSHjyUoaSDdy7wvm3S8wK3ezSGjS9CWKVNPq"
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
