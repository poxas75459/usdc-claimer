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
    "59pxMSdvrZveEmUFaK8Nmh8Hkv7Q8RpncTMKM5MYczmXHC5dTFcMHX1XjhwABoUJUdyPag38SFdmPNjAk5D1GZPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hShXkG5J8XgWfXpT2kRTNQQ4bXQimoQpCKmpbJWtxZ348yJCWMAU2BY6zWL6qq1CNcZ5mRpxSfWiK1Cqh8EJWmr",
  "key1": "2dvKeGNJfjQXDrjPFLRAAdLhmQhsXDDFKGFVcpvJiNpJZp2eURKLrFvHQhaGcexiKEL78o7H8jQNamVMN1Xd23uB",
  "key2": "2EmNJ2K9uW3Vng5LNaytqgGe7MBoWm6UvqGJh33XNT7fpsjoB2bB9qvyCUscowrRNRyFZwcmAjRWv6TvPN1mjuWg",
  "key3": "A8zyo1CN15JH7g9P7PEjEaqiqNWiVDrdR2pKN6TV6W4pGsWXSo5MsXvrkJX5DApWwmmzV8fwGLh1uYhK3voSBND",
  "key4": "61UyaShCvKinW3SsJJNKeuyKwUBKgx1aeysDJYU784SkUoXBSxAEmqoPc7h82pW78n1wGomuDViYiEV3XcDcWcQC",
  "key5": "3SpZNqTdaYWUNxrY6grqD6cWvYTw1ZQoSbHLLdgT8iCQJQ8KbzvSntz44XBFdm5K1Cmx9RrD5zgxqz1wsyfLSatM",
  "key6": "KeBTrY67E6s1PY7eDGQgivdJtM2dfAxAUDvCGtuSEnPrDRm9B7zJ4ZK5qjof5gPUGUFv7LfCQffKGT1exT7Zwon",
  "key7": "3sYKsww1QAW9qFxKErUFGPzMs9LvPmTea4dyyHNz935SJqd9GrZ3AJYumxDGicemgz8edu2Mg4MYsEs87riZsYFZ",
  "key8": "2qvpbf9DBFACJ7YmEVrJ8GiSeF5Yzwf8K3qSBN8vEtG2P6WkmHCYLkzXwsq11XCBG4cfZm8KNha8HkygTuNNYgB2",
  "key9": "379XcvJP8u5Ww9wzfsr1uAtmZKrB3nvbA8bWkwbuKqFWUoAVwWHsNEbGj3BBfTJjcfz3p7xstJDVXf3Dn57Vjh7n",
  "key10": "3UVEnwAeYHobUv98Yb9xGM1FzsnNrqqWQ3LCQBKWzfDFqqkvDw4uFkWYQvAXN2j84CLbKcfcAPa2aYQPiURchG2N",
  "key11": "3rh1ENPf7FPbaz2DMdGKbcSqeNBgtbPFc5ewMuEL62hz9nJxqH6hUKu4SLVMNE7VT3e48yzppcnJZAC9JZHN2k4Q",
  "key12": "2hgvnKtNRWht9nJh9qZMsFpVSjtrBPMpkHmwu3CQ8W2vW6tsTtEcFhnCsK4P5goYmXvnbHrny3T86TrrAsBjqbAy",
  "key13": "9WVaLBfieuc6jnTyLWTbt6yMXYPuoNzScxUYo7RA4k1YtYWyDekgdj3ZWMHSgqX92tzP7VNN9jkRcvSnR49VW9J",
  "key14": "5mMDAb97AgFsABAEAEvmEpuUcxFGM3ehpPeTodxu5kUhFuMSZXuJroCpAJCoWG5C4YD3aNXA4V19KU9FXTWGTP6S",
  "key15": "2A5o8gzv4b4iw72yhVaN3sbXwUfr4DoxYhADY4zrN5ao1R66tjFDG2EdJV6JKoVwvZZVvyqK7Xd4aNjoR9s5RUWP",
  "key16": "4N7oQwarjvPGt3ke6tQp1vxKbsmPS8EEeLEc6k78JkrKkgz5dp5Dpa4F8vEXYrAYRPyS1rC9G4PDWT6U864qxba9",
  "key17": "2GBQDaVPXdJBDMMXeowq3qz4xBJkZGze6eqm369V7b38rNuHoabhbAcbeX3i1t2jfRJhpVEGhajRKrDSn8ceCypv",
  "key18": "4Zw2o2oENEAMhyKFyfqSR4ESxykcgEsAGjDnZvDFPrjfW6379ekYVcvxdTMvrugMzy4Q1TNceyEynw79HvqscnzV",
  "key19": "67dqZuY7HsLAHG3jwQw3Vz3c1bQ2rTPMNrx8mjvedf13ATTiZkJtBCfvU7KBRxqrQsjGDQREaBtBVz5krBJ4gts5",
  "key20": "3QoYd46oQiPWQ3BVmnditsNmGKWB8RirTCUrNucxGozAfByUReHSBJ9iAdRHaegdoj389NP5G1Jep1GBY1taP3EN",
  "key21": "3E5L99pokxo5H2kz3TCL1A9yrF9b21rYFMtFwPt9eDuFiXL8996c2cpad92KzVcgnePYivrXw2LH16gWxT3LPHBQ",
  "key22": "4CUupCryTA68E9VveiAFdsvvCszcvdY4U6vmYnmQHybgpjgr2BggEeBVaXW1oamHaHi2hZTfLPSdoTmsa4w2QUyp",
  "key23": "66ae6hhXEvjL9jdRMWTbcegQGxRCAgirnd8DqpfHqs5nLovcjzBAn6SuptxUgAniAbxdeu8gFEyrtBFR6AAaU5KK",
  "key24": "5MSxYZeZpAUEEhEwCCAKjTVzxCnKewsCSiS81HvsYs79f25vWDZuiNrH7tLGnQC1axpCfFgHm4vn7KvpYG8qSDZS",
  "key25": "5rm7vsv7U6VXRCXbuoA2Tt3deFzZLug1DX2tKbP7TtxJmzk6FMbc6aDpKaukWiUksUNePHSw61GNqydJ8VT4M6xN",
  "key26": "2RaGSwzrmn8KgAtvptewvi3TrxV8BJmxdxGQ4XRq3nwqwLQDzCVMzS7U361bGwptS8BknRVQ89fbQS9y3Hk4qwqZ",
  "key27": "339GBrYAp6Vu3bWatZ1FLooDSgfmiTno6yqjjkSZJErtBfoskggwWaTfn9ZKSyVndsqRH9WrbJ982JmiGyetxeF9",
  "key28": "2Nowkd2rtubtPcWvceaTZCgTUCivDg9ZdQ2cG2Wr6ZegQzi1GXPFDCuouY27Lgh67gpyLvk9ybrXmULYX2hoM72F",
  "key29": "65c5ssL3mwWdSE81xqbpL8JRrdZpJj9qsNxuYQJDd5D9EQ7bypUNxymryycpZpdJGkNsfQHMDzSQXigJ7SjE9Ze",
  "key30": "5uS5SQcW16jVcfPSHptR2ufvVvzByypVgZuh2rZqG88e3vKXrMykJbpKwbMw82P5oT753feE1BD93kSBw6dXAnNf",
  "key31": "46C7ZJYDpPz3hHcDxURumu8VadKkecPRQ9iEdpWYdkE2ykhUmxz5Jam5613sC2AShnsACs2aREYHY1ZusGmW5fUJ",
  "key32": "3cGqxFebkASSzvT1m86mB2Yq6S8FBrFvTzURdJNKKC3WWe6P4N8TnkPysNh8fQ4kWbVc2QUfg1dEWvWdD598zuvg",
  "key33": "5MtEuZfo9hTg4YduDdzxxiSsjQEfVQTEHBbNBNjVBZQTgJ4QkJZC8gkZWYrbwSpDVmvQF7sihYNutBhSpsFCvEtW",
  "key34": "42XhCczg6A6pKiyee3TVWsn1oACerxQBEmhCx5ED8Kg5se46Nv1qmhqqY3YsVNPYwqCxNQ3dVMR5eToQcW6WCcRL",
  "key35": "4ZeKVxQVJ6uM6UXHyE4gSJJMru5KiQhbWB2nesifALTz9mxtn3cfbZKzER14Q33UX6EU62wf9ixp5Lx7ciwTKkX8",
  "key36": "Fz7qk26nXqZJJHWKxSCxW3vR16WQ7LndNtfDYz83K6Nh55PaKHNhHyAKY3cXMCcAEmbj1M9aUeVrnhWnm9yB1o1",
  "key37": "4mx64PjgjfEaV2eYU3qcS8vWzQ5tVb3jFCLbTMCoZwXsjZBzyxreFBb2wvx7HKbxugzvWYpodr6qVcq6vFx2QF5X",
  "key38": "3cXTEGbk3hCs8MTCRNpSCC9UhXbJxJUKmhVeed5okfScaUW6h2teb9CEGonnxTM1QeNkuQmL4ywfRuv4pDJrbSyt",
  "key39": "5WzuEoDQspiaUPzhdYzS1rxf3npBDkHEDQwp4YYBAicMnJ1AxSYE3s8fzGajqeVdoGuNzWUj79Un6QXivqA8afDF",
  "key40": "4zMiYkFpSxtBErUZFq995XQvRHKmNbTv4gtgfuP5ZpYyYBufMtmsrisjur8JwPf1jeNaDeQPneP2ndTNwQLfmft3",
  "key41": "4UuwLZguLkLQXVp3dX5BWQzFi3rQSxZ1ivm6oPYaYPbq3aSM6kMxC6Dm5gHjxQRkxwPf5Kp2xwsrtBHRyP9Cnbv1",
  "key42": "sYYdB9xd1Qjz3n5bYxY2DoWEHFpa8VaY7dFkyF1ZiyWVP2YxU4YaFaVQ3kkceAfEY2TSMV2wJjt9aGDnzGM8W8Y",
  "key43": "2b5NsdwW1M4yLTZLq8U2jHNJ5cGz9S6g7npwC6yzcPY2zU4rQk1bFpUJVFSxJpHqRryTuewZMzUgFEVZ8ZfKeRSe"
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
