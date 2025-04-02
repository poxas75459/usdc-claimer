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
    "5ZpZyZizEVvykdCRnqizLjo4jxPqGYgoiGkJuFQRqWGPbUM8eV2DVN6jasqcL7tr9eyrXvA8zVaVgxzGhXmERbWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Pry6B52JSyVmmX1PgT7s2Tp8NemunX3H1f9UEFkkXqbrcoc7pAUFzwuw6YxYzgjeVsCAJHixx5Yfj4oJVjNLed",
  "key1": "4grtiV7XmWp93Exda2vzgEv9aPQ5cGmnGHuWGggkg9fk7Ey2wg7q3AF6PUbARVFiT6E8tziCFY4d79KDuxLWmUqW",
  "key2": "CXfjjRUkgEUaR6yUtirvBUgPAEU4tnsez5Ms4CAyWRnD9N8cFaav2Mn99vDZ1kmJ7sHJ7kBRLg5iWqi9zybBZeW",
  "key3": "4cnTCRisSwcQT2hrtZb927g9G2viFENgkh4FwompJN7Rs65uXuWVsN8AaZftmgBRZndYxRtQjejToLazvrjEjp8b",
  "key4": "3XrDTp1QQk3P8Xe1yPHn84XpAqHDsex2RTEL1aB4R6N6dKP7PV86quyoJi576eWcjPivdLfd11gHD88N1noUazJK",
  "key5": "2eeFTLTPLJPoUuaPAKowpt1CbGkJ8h3LLCHKcsyS5jp7jzb83tpzTs3pVZM5zTdJ6YKpfw1CPw5rmP9emrXBxaK3",
  "key6": "54vAjSTPW8iEVKCYPjpKM1SXd29MHqyYbCSp3tPucMgjTsE2M6tB6vXKtWUbA3s2s8eo2jsWf1KXizhDssK1KTm5",
  "key7": "39EFs3xYFVUAkr9nfvXBMLbbBmedbQLgiYgGTvitYGNnLK6FBrAmUXcvB5s7zgvF5exPz4d4cMSUdqQRspRdR4ct",
  "key8": "2eRg4eRtSyMMCtzH21HXHhaHvee8JQeTz5GixzcNz5upybfVZxhhLomT5C71jkrVmRDEmFNsvvEMB46DXpPLaA2h",
  "key9": "Ahw5G7X8TJdpXRnwEwtkfyhKnqf2Z7cJE3UZvZt21uXnbZtndUqeqfWpnPxVMUuMjWomDkZx2QQQWd3czdjtq89",
  "key10": "5SaMaU2pAxtAgJSjo7sLfmzjzjaZVBqNH7DbwQU83f1CRjvfJBZiuqYtJJ5fKVCvwnECQM6bBzAGfr5HCrqEJv2r",
  "key11": "3hxsjp8zSZXuPQm1TtuUo4GeAY4o1KHx5h57h51cvWZijzizMUnDubbFCQ6cTwfBFvpE1MgPkPFyjTqhy9nbTbzm",
  "key12": "5ZyYitE9CW6qNTvgaztmbuEtFH2KDpFbkwEtnBFUUa4tCGu2GA1ZBTT1MbMMEFdKynN54yvYn6u5YQX1QnfS5jhj",
  "key13": "2bAa4ZMSQqGUJnjaYa6A5Em7uHVrCynpVKcYjNPruhdujoPDa3F9d1vNJSKE4QGNXNyq1waQKcbFgLYvb2w8ZHCn",
  "key14": "24FCVEDQyNiX8CFAW2J313ARtpNCoBwZr9hojeg6CRvaAPqpZkcnhMpHv2wkEychY2KSoUag9NoBvenGukcMZbDx",
  "key15": "CFEvz4GwVRrpQ2PRcKPhmcjzLSFzFxszutspJzZ4VP6WXbQ1HNY3UT15AULAy1hQXEDt3jECHzEMDv2wzETKwYD",
  "key16": "3QucuY45wgocrTfjVWEzaZJuM1SnLXqTEEAAHBCfYnQpFgXNCMTk1mRu4MFufupohPnC8hFxMdKLxpgqyGciHjHn",
  "key17": "ijTWSGMuFUDWzEiWVDv8J862ATpS1f7P1DDU38nJtxjxUXEhhThnLpqBBntnrSpGHGeh8G1L6sgQ76WJt85nt23",
  "key18": "3JhZBzrNWV1mSRNjAZEUezsNw5qRev73dxoXxtMwbbs6JkLaAxNntupB3vJH12WJDfFwi4fsDdKVk2cmc6W5VR2B",
  "key19": "rTj8CK8RJWFZwMY4DizxW7rTFJYX2KvJQXQ3gfe3wqMpaM7rQjB8J7sjxbCtPdMpjGmZftbzpUQv9GerDnDSAR5",
  "key20": "5v55pqDCZfV1YBksWniCFhuvVX7VbxQboMA51q7D8CiQLLAaFomt9LDEqyFZEDy5PeDMT9jotzjscuuXzJ8235cB",
  "key21": "54UoFybSwyyZe1hRWEnvftobguWGxnGf8PMegWFUxNvcgQrpVoXUhnYoKKJZsefyPUp2CMWzfCkiPLYm9bBZqxfa",
  "key22": "4QBRe94bJTMFHUuWmUPSUaD2LTL9ZAgQ7oQuBAbRPXQ8qBjg4StfGZbYHzGGkipPxxKcGPdz7Ez47KQiK53GERwy",
  "key23": "faRo5Ua6Y99BMjjSTGwnmXYCkaktqbq9gRypv3e1YVgD8kCyzQSn222EcqP9EppZfwDTmGCvPbNxiso7pEk4LH5",
  "key24": "4saVyZmhzEwpNTQLHC5yueh4c8kzZNre4922uHc1mEWHp2ggfUmTED6Pp83DbkeenSjqvHKbyGbPNCLmFoVs2xgU",
  "key25": "2RjT9aaKPfQ33UurfDsCR8kS827UAKZDS4VkaxiKKrqkvyqqUDZQXsyRGYSZmv5CgywUgZVxFgW3cBhaUfjKWLe1",
  "key26": "35ZtsbKfpR7mAXBKSQchicsjc7LNNvSVkoGFHgNDVRhRLkGxGyTEMELZG5k1CVTmsegshudkdwwXN491XD1zRTgc",
  "key27": "htBFP2miw8qzQNYMAuDwoXaPYaX5bGW3uam6ifpsRaUR8jwXCjRLR2hXmv2UniZv1MAKstafoPLnV8oEPLHdejG",
  "key28": "22knmQSFuqHPVJ71rU2tDW37NXyVxtZddzP5u5b4qjaNeVW4eFQg8gdC5sXZadu4p3D9zTLk8rwhNCvXNuNCecqp",
  "key29": "541rgzHmEEqGz2RkX3dGF7Ew29Dk3FEGW916cS8uEufBtr7g27sSqrurVqAkkqk6ysZud9FagnsAUbgfayyLt795",
  "key30": "5jL31L7bG5VDAgc9whTBHfbDqaJhNnJ1VLMu1g4bm1dRew9rGGAPbP2MLstRE6m4JiADPQE4VY24J9ph2BmYD2J1",
  "key31": "d6DSECs3bNFdpWfVFvaEA4TZphv2Zpz4xTKZkrVHVGrgJpwT7XWkce7A6nxsZqjyR17C5rqcWMGnwLFrUzCpspc",
  "key32": "ATZzvSdFcC4EXTectYddNAFgNqSu4LqBjMTWzMaJS1LV6R2EUucsMAYvCUi5XpjFZDCafMTyxcKisVeNZsbPFWv",
  "key33": "FV6JNU7aTfoTBGwiopSpdbqnh2Dytd7Njq67eDe52pjsMyrFBvdBZtCq4QFuq33rDFENy96imXm2ugCfJy3cmmV",
  "key34": "4eojYgeoN6x28BwF8i7gqksmqDqcGjaiRqoCqbSUBwsS138yvGuz7NJ3Mtes87TjtazaUeoU2eM3VnUuwdG5AGMr"
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
