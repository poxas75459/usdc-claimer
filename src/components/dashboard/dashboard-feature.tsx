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
    "4wQg78Hr3SuccxhctdR5VXnuKe6F5KT1CkA9g2oVNXeqGQGp9NuFocJDTfdudxQQeP2HdoZ7F2pGAgKTwzWAPrxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDakgbno6xkZjC2HJp1oz74VzqCWvTALqstRqWSaBrQwm4Af49Fo5ZaS4fghbmUP8xMvep8YXZd9WfcBG47VWmZ",
  "key1": "4iFhrLFxKMuapRxsVZ1dnT2jcFYKxJx7Mhv7jCqg5xQ5fDYXigm4BhLdb8GsLH3g7pu83rXQo9iri9gePyQtW4cF",
  "key2": "4VUfHxzYd8r5EMTvZRmkTM1BdXeR9Loe1oUWTwVkMsDUvmpoLUyoLeqwwqFmbHEU3qA3LCTBQq9D3d3nL8hojPzx",
  "key3": "5LyDo7TFFVVvs37gRndrLiqtDUoQgZGnYX2FmLP7aHojx9evGfT3kyE2ovnkrFtnL5ygg63eW18fdPyprWRsD65X",
  "key4": "32kWufjZEVVNtMM4NpzMPfphTrt4BbrdUA1yFgaAF3gkAyokGTgjrezs3DpoudhGPyXXaXXwxqsjxEptH6bFxuf1",
  "key5": "3gc9Noq6FmhbjL6rK195uR7HaXCA9Tigvqy4DQpDrCgQGb7eEn5qCfXJEatUwpAeq5i5ZA8pXit11oCbLpNXHcQx",
  "key6": "3pzrojPp6beUbiinMY562wZcMeiDFyvuxrC844gPYeLgdnphQ5dWnCiqi54kohQwFWjWPCkvghZDFgh6ffp3u9GM",
  "key7": "2Nftpvm8buqHvWJT6oaMvzvD9KeWkNgfR5LLAWxWTqmh2KtQDz3hbch4RDDpvvuUbeU82QE9csrrzkjqXvVATcUA",
  "key8": "2TPf1fxVUnNSPTLjK5t9yRit9tcBhBX6Jb8mpGLVBCLNeseK2ra33Q44KbYU9hhizfsYsEYSMyy8ZMZrQrV8uRj8",
  "key9": "2yjgHYQ63XjT73Sj6SGbDZJvg3hTaaGuo46hbSLuLzPmyudeRMHKHrPgv6GgZtrupLgnP1VaBfrkGz4u8y8Ag5rM",
  "key10": "M5pccYdGqAZqDS3Hpgtqj28A5tuxgNVqUYqvWzwLmdCy67NaefjzBV3vznfzQ38EJfun83iCzgwh1x1GJHwkpsA",
  "key11": "3XFg7w2E6suEozJb66fvqn7ssywe7QQkC37KHrv7NwQtbYD4oTLp4jbaxn6MXcjNjMSCVsN2oom4PHenaZJR94Ua",
  "key12": "4Akyiqyf6MiocKuLNE3w8nwQCBJWXr719tu8zpXchjMmPyUWTuhPnznLPpXJaM2WxLqM9imeeBHyPawvhwK45mCx",
  "key13": "DMoQeLcuVbNZ7HKx4YRNMTjQwUkVne3yQ2XqRHHitmJe4UL9Ks1mz4h3AeRojNTyFT3NsHuHD26XWZi5Xbf1KfD",
  "key14": "5S5pp2P91gjwewrARFuK7J15nv2vJuAJs8o7iAAq8Rv39AgzEhTaGuz7dV5hmUBmBCbK2fT212HMcgJqvh7ZQiLm",
  "key15": "NV7cnKCvWKVh82cfpoULdzkjaPm9FVCR5cHjXH9sA6gdQBXWb6xw73tJREieemXwEA2jWhsTmvP5Uq4iMxQvznz",
  "key16": "5itmz6wNocMFTd1vFdZEmKpxRet5VcTtDp6jmGY1qatQJ4Kwzr3TvLGXLqrTp5PHLzKjc5ty88QAYUt8v3Xaz6d3",
  "key17": "791zSk4zpmJovFw61nHycvidH9e3Z821fHhW9mRBdnSTYDMKKBPUqMaLNCXQyvyeDY4PkZxq4jtSAPq6Hj9vbFd",
  "key18": "2uCMi11gU4z5Vs7iTRLPfopQnHt9t1bVyt7qBBU8txtCxQymwn4D3VKxTgRCdPPqoadPVv5zqXsLUxXwbgYkyGC4",
  "key19": "4NG8PFv2p4MXf5p3ya5mHwMhqGQUacfkDfEy7SVJGkD3J4dubU7D1LkUAAJaGkXeTz5rXTU7vFm5SP1rtASXA72F",
  "key20": "2pvHzSVeCrVj7trC36JjoXJF2ruygRAdkiy9yPZzPgg2Zck78pAVmSV5eYagVQQfDf8VeZCk3dnDxeEeg7d5dNo4",
  "key21": "DhL7wTPeUF5iKRVQ2jXqvvGxPYivmCH95pmPLUozpzUNpEU3fQnpLpNFw6ao9tH7PQEaQwus2MRMNiHLgpcxFDp",
  "key22": "5Bebowiyy9JVxTZsZwHCXzQdDgkJMQ95XyxtSEQHhJKhNM84ioTMBj4kXiFYsUuLv78TS49L382M73BNgxg4xW4K",
  "key23": "3L5FWuo83kZCBn1NTN8KgWzg2JdFRkfzcSqDXBmVdYhmVGAUSJQ4VpiKFqoX5r24TFqBHicxHk5APvzjZ3fa3taY",
  "key24": "77CVu3bhPFgDDveKh6kzxhekFKwDkJkjjUP6HtC6eZ2zAvM8RbUdUqyreGJfav5avfX4B8dVFX4be8Brw7XTXL7",
  "key25": "5Pcgn9YjUFvQSEtiuDAH6EfSBH3tnm5rY2JEvUwBVxgPFnxwwVLrjZCW4bvwXtxDHkz73FCQPcKTE1sNyiR4HNUg",
  "key26": "2AejoMxx3wF5AoNJXi1DEBsywdwGT1Yi1iJRg1ZrH7PYGaWJxvFABehayeLRCxzvNYrnC7bwBK5bwYcUKcnQqgVW",
  "key27": "UUquBNivvfWMBVcY9iE9vSLGKhmSS4XaBdRZDYZGA3ZrzDcdeQmceQq5bAmo8V9xUVgxMFUL2dy4DwcBWtPHhXg",
  "key28": "5xhW8tBdUcnM3tXaBECBP8u9eAaJzVpGsxqQzP6evi4LiXcUvvhKWzdNCDyK2wTKEfMoeca9grNb26wLpK8J375L",
  "key29": "4nMd8HjZrVa98o8BoRm4ay3ZzKdhfoKMqEwJM7yMRx7AQ37Hk5bPU1wzuUZWK5vgobe59BgdWtWkES8SzFrY83Jj",
  "key30": "5YSuVN2Yx8MjCSfotJJ6egZdgS7SZrcWVfp7vZ7Qbv6J2zWYEJbMTTwLotG12zDXYMfLE9EU7kz9Z3gXGMjxqAsQ",
  "key31": "3dktacGgzMFHbYhWmNFPTbDiGkZcYX9WiZthZ83gqAJTA87BSqqSwuq1KSKdNWBBiaKfCbWnR3VDs79hUANtcGRk",
  "key32": "4UUAuVVDYPzPXSQRCMw6MxBsKRTPSRDdqgTy7EkPnDHjacvuZReAEgwe9LhkdV9hd5bmwSjeFq7yXrxwt6vFbxNE",
  "key33": "51bzpAetjof2TsBMNV3HLdqs7fjh4TUAREZgroYzYKjPnpTnSTkTWNbiy9HJSNw6bC7WtJ4VWfHGUZYABRCPW2tD"
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
