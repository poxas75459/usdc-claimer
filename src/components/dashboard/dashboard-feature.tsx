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
    "4qvrcJ6qixT82dRptKBtrifarZsNC4LNzgD7wX4LgXeJF3k8iYg94Hmp5kvR3SkjLdqAuyB8XR7Eo2ks4Hn6KmyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhYi5U5Wib5xqfu3bLVTmnuPbqWhd1pAMHJDJLgVu7s6pLeAv4tieomrhvE289ut5u6cA5PEyGxUXwSzEiUTvL6",
  "key1": "42VqCe51F4iF6vVDtZCousi4t2GwS6AYyQBCvApWCQg9SZnYAgwXRRjxgiG8W2HZ71F5GycmHQ1DLPMB7taqiv3e",
  "key2": "Yvw7QSQQjc4VU6ryp5KVd4obva4LLfA4qfkSyUPE9qWckJN5ncvvYaQgYMznEZjh91kyHNgDyCWNjKMoBHHYjQK",
  "key3": "4wiX5x5KAtvBHNiYJruoxySdoS5YN1mQbiid4RJNx8SqNvFKhUUuGbtNHygsrB7EYVaQoByVXEyVHLfnUzTxb9g6",
  "key4": "4YqGmYYpyzrD1q5UjU1hcPrqwdBY7FtNJMv69ZStzZuKwwsEzn7uSGKdPiefPCYXui6UeF9CBZ8Z6zrNmhpiK5Ck",
  "key5": "2e3h4EaHv66AgAsJwRzcbRZNXHp2he7bixLb4aGDtAiBxWocu2xSE5BzVUGHnSmsmHdaRMMgfmtRshXEChgquhTE",
  "key6": "4EMptLU53vBAjfx9i8q78frfnbrorEbTrnyv7F2Jvmh1YAijtqTfQGstd2CyUcvaB4H6QYNAexBcPhTXbaQpKds8",
  "key7": "5uBrWdrcD7vxtXnrnVvjxjxkS2MPMUJYnRVnCdMUVaEoVRtcSgMk38UsB4PfTbTDLdmPr5YPCwSnt7o8xrpVjmba",
  "key8": "3MbKQdepJtqdmLPa4wxZ6xZoBYa4H2o5CErQnid4vyrdhi4fphUBTdKjv7yxHajaoTooMNMr8BoervJxQhL1T41J",
  "key9": "5bj9NwXMVvXzo4kadT4d8m59bt58BJrdVavMFxcXZhawK85fgM3kpx9QP4BgjZVAYmU1P82ateBYdpCpsm3dhdPS",
  "key10": "2BtxcQMLU9jGooPUuzuPRpFpiJYzp6KQGNzC4sGMJw4YhbEwKi8XmQFZgsXSMN3ZwsASZ32WyK2PyWYMi6k2pxw2",
  "key11": "zGVsGgyyGVwxFxs8qTz4mb51Gj7CJ9Gm5aNmSQbXrxNPT6S21P5HJD65T2d5omGtCKbSsXBgFZRRWCpGrMuH5hB",
  "key12": "4LonJDPkwdcBH2qGvRGayZncLqheo3JKaztJNFv5hBv6szcDo42gYQP7m2wF4RXmskdv6UMSbto9hrnmGHUyKvaY",
  "key13": "2skiftKmVoCANryx8ZG4Ev3nvKxxJrqSNksavisBMCcHChEtUxi3c6qXn3FXVmFVQXWzgn26xXCWZhSB6urgMfSs",
  "key14": "5e2qCahnZ6fviXBNpM2HX9fYpezYbbifCNEcnJwLfhbT5WrtTgP4U6uHNZMBRcPKkHDdF8WtqCpzw9eVeyphQScT",
  "key15": "3a7HA34UXPTk8UNAvvi3zGUNLLoNe77ysGMkxS8tgSB8PvpNZun9akuh8h1HS11hW81FrPEJsQdPYByauMMYbY1T",
  "key16": "2UCefyxWAYyXApJx3hkC3koMdkYDosdQkfRXQ5nPsnaeCVsMDv965cy3WFQVhutDvX7V3S68rfSW3QH45K5sxUA1",
  "key17": "4wiyqkVXJJpc7ACHbXq7JRry7vQedzFDDUs5VuKCFWcwCqf9f5V8Vb6w3HgSvKBbqvgriP829p3SSouT2veF7vKZ",
  "key18": "UWRJnFDH6vAknFKityX9KStFL8eH3rrxV9fomNWXGupieui4v9x4ggw43RrtBEh7sjyGQwv1cHfASW5rJ44oUxD",
  "key19": "3c9Fh2Kg2jtCko76w3tQcBpEriV2z7NQe77g9KUWsxMUh6CKvV7umvD5MqbLCaTkd9soyuTzrjG3kP7vgKPuJf3G",
  "key20": "3hvyjnh1Wp6Lfq3CBVTmbVfkbjijeJr1mojyWJ7gWJDF3wLAh3iRg4tjMbso9EB8j6JMEzSZ4wq5sPTGfeWnxdeF",
  "key21": "54TpcSozmfgM2tovdm7EXteAasWPT5E37nTCUipSBSocX8KHkoatUEfYVH41VnZjsKRUxUTbYVFPdb4zE9vUSC72",
  "key22": "419sWDWwRMxiT1vakj9HK2RXDuGA4zSbzKtueZSfVYDq2AfDokg5PrA9wKj2mSKSWpiEtEkFw5eB6v8oKNvQKHpb",
  "key23": "2WTwCywAYG465eqeivG3ftfQgfsE5i8dRkmJK79M3mtA2tRVMVk6kck4Mx3Eqr4nGDyS69z6CPYgypjuiyC3N3Us",
  "key24": "2tTozkAsCiXTogAEzhcYmZtYPgdvo7s4ohWzcrV9EYr6jHhxWnV9QcMvixzQTv6VjMTchzjsBqRQzbSzaSoNAQm",
  "key25": "2XuHuwB5RqyMGJUmpEEFFMnp7S3VaEu72XgJ5ZRmKUKiRYbnaaaqBkSgAg7ccbB5vtxhnihr4x2o1iFTFk4oT1kt",
  "key26": "4xe4LkAzLHxuhHh3sWVE6XvozKFcndX3bwcyueXo6C8J5EU5h7fX2NT5ZDdbaX6EW6hv2SPXHn3pN6Zqtsr15ZyF",
  "key27": "5f8eRFYPPtLGuhLjyttCxwVYMr18f2accovo4L3z2WibNzoY4bBqzbs1sf4hTVu2EzfT6gqfGGLGQTcTsD5bYdjf",
  "key28": "35y6ytx46vjEjKvenxG4oRstw46gQaGzfNpDyNxBNzemn9sL1CgmckdmLM4PLvQkuDHusoQegMeUBDUph457zFDF",
  "key29": "4UX1YCgC9oGXo1G2DCRtS2cJqNHJgGcrwyyLAVA329QNm5cctR9w8rtg9AZUaDfiH59zwJ1nh4oHruurqQcJ3881",
  "key30": "5MyBHECT34qXE4SBnqmkSk6EqdUWBfTWXkPt9ud6FSgWEFgTBCmw56sMFtpxN78QhfGtBfzkX8SruUZPHiLvCrHr",
  "key31": "4sf1hpKAVCA9QrkdoA4fmpxjVKsxyzApWNZ9WWPBhFXGrXFWBULhWTE7zNKcmVeuJSUs75b69m737nPmBn9tc44h",
  "key32": "4Kv2GMoMBtYtMPnLNHXW6us3wQ9m1FPsYj4siU67K1MBzBhfpPEX9Rmcvb4f2r7wZx2Mh2zwbN8FjMXSjeGK432q"
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
