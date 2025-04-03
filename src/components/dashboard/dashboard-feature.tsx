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
    "3b5AnhDM9zFcQnYYbstsGEq6twyeX2jprdz6oyPrWFHvUPaL73oNUB2j2zqPPcTMQ5WWHkRenNf3bm1dA1xXxUfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oj1Ww2yyd74dwDD5uXSjZwsocbM918cyJ1ig9f6cTG79G3KXGeNU5eGMudzMsS4NDbi7MijXT9LRNEXE3tr2yYh",
  "key1": "63ZYekGZTQNSXMDHy6mQwuWQEn9qAkGKFBAQ4qQsLp4gZCu3PddFCwWDJDhK7VkShasuQ5ojb2RueFAfeQTJyyLp",
  "key2": "26mUDxPCUN6eP1on5C2dLekZvq3Rnbjr89THNCd46capZwVcrRzoVocsq5CHVda1cKP6VpUe5afLZ9tT43WHSZ5m",
  "key3": "9Y6FwfRkf5Yw4LehfE2PbuCtbuHi9k7PTFkU1kndC2iR1YiWMBosjKuqUAb6x2ruST4WNavQRakfWKkK1DPKXhB",
  "key4": "2XcH4i8dLcxCDa9m9YijVTXBtx8ZCF2AMVmNpLQkkcQzWEWHsVvxp1pDwPkiEFQpEh5u66HV21LypF79XNYbNMMe",
  "key5": "DHySRcjvunyXHXpwQDtWeJpyzZGKcvRMHaQAdh6vmKKPZHCWf3au4mPLKQP9ckaSmQ46MzTkCRQdCfupSveoaAJ",
  "key6": "24bf3rfFTTS96f7UnMH1H633XFj3Jb3sijwiKrGo4vPCm94ikMi4BJyRYABxHQovSqgEkEQGDnCGzRKbZfTuM7kU",
  "key7": "43qgd7HZ59KNK5WQYhzqe7kLww2dMCpenjgCUVLVLDK4qCCok1o3sQn2JhTBRREH1xT9pgLo5WazASUJby453r6v",
  "key8": "3spq22HBghzUDLUeyDFNehDe3yLetVuMTvwCMUsv5fy3HPPrNzUJKYiKkpzsosTbdUcpc9GXnnppPNJk1AwigJbr",
  "key9": "5K4obf9DD7L4TtS9t13aS8vEBUqNLbvzokWFdTxvhUZ35AAmHWMQrreX3wCpSWDShb3gcpf1UqobEFnZ6b6bvGdk",
  "key10": "2Aep52MGJCeYpuyhZ4B8TKXjVG3M45N6U1SweGT5C5dosW8DNrFpDaWGkGXTzNT8wvZb45CK5ikdGHgaDHntvxaM",
  "key11": "5Y9AUR9uUBBdJBXDK5HFxQS6yGBYEcjDoGD2wJ1YLsPzATSdC4qUzLMpqnaBPqdfjTUSbJDfq9RH5bnZt2Qy3GQf",
  "key12": "2PSWax7qTrsf6qk1tv8s57M8AtCzcMtcVLbLxHieA38tdjuaTLzxNGaGXa2RtaTSC7Ano4eXM7EisfV4vFTgeq8A",
  "key13": "4VpFvNE18EUCSGNCqjMfYuTcbV61VeQnDoEB8QjzAmQ887R8TWoEQeYBU98og7JKJ6kt3CNK417eZgCH1N76H9T1",
  "key14": "2kLRPfeKdHCtQyUQt9boSYz6Lu3vuZBxUQnxgUqYaLw7dEpkpHFofJ1bbsW8XHZWfq31oD3Rfgjzc3ik3cmsxWxK",
  "key15": "2BgTPJ2vMgZcvJGDuXtoBL6gMuj5HpGY8PF7Bnw4mQwCsmjALgs2gRA3PW4D96rVbpu2k1chpzhuQ6tEW8ECibsE",
  "key16": "2jJ7zzqkMfwJC7vVixB5qNLdHaCN5uiStYxjhsLNRCn3Nq3B1yhLwtsXtKQXT2XQEGj7CaBp2rmrsCVgVXtUTNiQ",
  "key17": "4A7y7dmaLRn7TGpnebwRkD5WVGpR5K3sWabzH3D25FBWRQAkymfWtrbWP8ZsPJeLhYk1sX4EWY1vz4Fczpg55DbA",
  "key18": "5KJxbWbUcu97m5qFQ9s1JcTZLUw5jB2LKnK9iRHPo5CJKDwZDGs65XSP5z4QXm2V8DZjKX2U5aRABenVhmSENGd",
  "key19": "516NjCQM9qeQa7cXx6ZQyHs4Jzuad8Jwu6uyg99LfWGsFuyME9sjnmZhons5bystVakBju9SkugVoiWhDguD3MB1",
  "key20": "53DqHmWaBiDaLu94JxnrSXr6QD9dbZ8DyEcHhYLa9Xsm68AiatxFe4ec6uxjSUo6zb2VC5VC83zdnS6NXHgJNj1m",
  "key21": "2aExkHM1avXsLmXBp7eCWfhT8o6at77nVfZg3XBHCuBfQFYiGL9US3h2GyukHMjxYPsGSwiCtNJQC23iXPLCPPRm",
  "key22": "AFFxUCB9AzXT3Q9kmEQjPT8fTK7yL1zyV7ADkYLsiSSeH4qXKVdWj71AKFKuR67CWcYsevVe8EveS2yZ81gZY8i",
  "key23": "25FU6c3s41ShLaEjF7UVmF9RBuuzFu9vM8hpeU3dHJbEuWDhHktLSWyutQCEdiwdnRc4kd3SMLkTyR5bkvk1upXJ",
  "key24": "NoSLdsR1aBDV8EPgozV9AbgjdHzMjDg5rEq6kwxXRM93NVSw9nhJwg4BiQwHrGhHLg3UuNdHCdM8kWuwSDCU4Xv",
  "key25": "3nZQzmUDKLrRx2UaGLgK6KZx1HES4W7M5kR892H57vCKqkSKTXTej2DEthaGCSCkozCH6Pq1LZ5sjPAWNny6bS3M",
  "key26": "3p21paMZy6pBQb3afTznRh7jKdZrj2JBMsfJSrVenQAgLfHyVJWzWN1bqRoZvA6HT9EZZvyr9xDi1yjCWWZuXna3",
  "key27": "2JnWmz2SHxuP3uL7pG6C9wskRBmtRhrNuxEcUR4f2qMtufKTGttsb42aHT5mbBtBZhBncKMyyfdtrbvsGmxnaeby",
  "key28": "32PnzjPkY9zkA7KW7ZEUeihuLsuynTBVFGpPeWTziMXtr8HdkViC12KSdZBGQt6LJsoU54aPoMSmwfgVYGEs55JN",
  "key29": "5uGgfG2g4bLgy8eajaLC2ycNYXFhxfVBgZuCMAvb53NP6cpatSFSjVvqP1VdaQZ4cD9rMNgERxejQFbSemGrSEKe",
  "key30": "3RFYwtyS2Z28rs9jAe8QMQxtFU1d5Cp71KxQ3piV3iWW9dwFg9iXEigyxsHDxGnGiQUdEQH12ca7bGcsA9EPUG9U",
  "key31": "Z7UzvYrNKV81x5CRR2pZFZU34VhBM8EoGKu6mwFnmpYsa7bmnFd2kbbBtMjQ4qTiAGND4zzewwgeWZAF5ZNNav5",
  "key32": "Ly6xJhhv7y4CiDSLpwPv9XmVfbAVwLjUWST9M3LYVEc5mEq7vmqmLTJ87LVo58d2H9y4Fyasw81FbH8PvBF2SN6",
  "key33": "4SE5V1JMcoLt7YzmYebHpfk8SPDiFDqZDJ6KLXoHBSGDujM99WYZRw8kdAEF7PvH7rcm4G4WQjnL8KrEzGzs98ZH",
  "key34": "2rrYbMJX9JxYT7tpQHJaN1sYuZvjtPE119FxZTAmVMapZ78FftiGYqcZVorA18DhV6dJMdEmKM5c1SKFGSZf3mAd",
  "key35": "35kyHV2DJj5S85o36T6vv3vYX4GQC4VVixbMWy4C5sTnQfbMYdAR9CkEtsHNthTR5GhGsZKhUJo9GeY1y8JZeVHz",
  "key36": "3FsGYEdUJEnGdwAZXV9scPqjN47Fm63BvyswRsJn4x3aiXrFQMgGqcCR2kuoS9FvY6tQEiGkoW2kk1xiKBjH4i1c",
  "key37": "sa1y5uCdZokKjTq2HuXvuN5To44pUsh7sWsW3JLGFRbnxJsLwicNGb956GVVdnx899hiJSw3qH9oN6qstbSBMhJ",
  "key38": "5fe36mYK1KBSe1AWhuPXsXzsUT3LfMW5PvgAw8eeCruiY3J4wyqm7q8M5FbZDBcAbLndK5AjepfeXTrYYm2PzBj3",
  "key39": "4uBwbVULiTDZ6pB3nDEtiiP4mEcr8H38v8uky3ULGsVHWM5YtUU1NwFtiVqxjDVxGMzfF3xThZQqaW9woEDCSMW3",
  "key40": "3N2ZF2TzEgS9RzfcHpzUuebk9LiRY3bR13ac4WxAbZgB49mGiNQAL6DoCwhBe76gfXZ7oJJuLV148tVro4bfmCy8",
  "key41": "4odDaZdt7Evee9rDxTc4yvbG6GLKbcLbgy7zVzrwAxdJ2MwD8xUoJV3JtkYXcv1VAFs9pzZhs3RpQqUF8YVnTk9L",
  "key42": "5xx1WVHwPCZ9PQpW39GiriEweT2vvQVP8HkBkccmy8A5UEPyQcYZQpvSujjwYKtVyAiEjdDJu5yUr8pm5xQbpB5T",
  "key43": "4tvSBcpQoqTevf826tuwXRxQCcCaaaceDTjJtnrT3Rk5KD6Em7RhEaNhk4LVvnkvDDhCL4DWHsSx8QanneFcm2r6",
  "key44": "5CDH37nhiy1PmXtehve5gNu8p1m1FhcNFhnwDxCqiFbudAMqs8PtcSrK9czG4WkmJgHgNTi59tjAru3STjqJsBoS",
  "key45": "qg9BPN4MTYyweHXxqQYK3a8mBnfZAB38oP8okoh9t61xP6PrGFuWPwTLFgbk42BezZWuvuEF2c12hDRP684UgrS",
  "key46": "4giqmEFbvsjvXLMCjEdK4PrKTjgg4mCAX1U4XmSZsHNs78EKz5jWB8NfnmY2TwhYNJrE6K1EAZSTK8fXLvmSd5Us",
  "key47": "3Uxg1W1TrFnzAMtN8QQH2vNvWJ3VTLk6jRZHzGPqFnfiUGyyyzuwqXx47cEvi1fAgkiENT6gsSditDzP1RurEyEA"
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
