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
    "4q9JvNNh51NnHk3DebVhNC2m2bBA8EC2Kdv6bPVCqv5jjbWzZWzsNwizo4MhUvpdHx2iVRRB27YN6tR6ppcEeYes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hob2znDgqjRTCD1eEvJb7y4TZfg6XHMYsYn5REPGSs9BXmNpKWFyRWmhCyBx5Nqimzb87KcCFFhbCArQM8S4G6P",
  "key1": "2hGfHTaumND4RCdwHUeQdQs3b82cKKSV8zR6p9FkBcAKgVS5UDeAFPWNCvDdCJTVsK6y8zpeff4uGFYGRLEXpbii",
  "key2": "4dguKtSyjnr3i3Q5KC3JBAzYwSXNz6xrRutHhHAzbBtnt9NhbVSykxuEqycXRBQV4a4DZegh53pnsDCMqFS3KdYy",
  "key3": "3L4r3CRswpnZceoxS2eJoh5rw3YNxubedmzAyEB7Q3jFtGmeiMBqwQrLmCuA6pFeLVet1e9wNGM1HxP8RBjQwng5",
  "key4": "4kXTey4wtgd69iqMXN7ykLRRBcjNBc5gAjFoc5K5FFWgB5YejweZzionvhkTqpsgcKF1P6qAwc8a3QqEsGAXoyh",
  "key5": "2pEPJK9zqSixG3fgzXxQiTde4schKaHtDCC1wXkDFqVo8dtgktgxxHe91i6ke1bZMSA5rdJk4MogNrt7mHaHnMs3",
  "key6": "3ARsfF7DCErwDbLaahvZN5q5UV5PuoNwbGd1u9zD6N1QCjRcJgfNeNKsVDCyTGDYdByQAoSX5FSSErPK1PiBC3tv",
  "key7": "43DM61WXgwMR1Zsp6yxGS7CkhUqS8Lr8ojGC9QMi7f9uD2GAnUXvF3i7B8gne5SNn3yK1too38SnCsVMWpgkter5",
  "key8": "57cSb77AxcZozawfH5u6FeSapoFdQ6vGivwyYNZXEEkUEFwfTaKkexH8GPzEKFqrLesEDThEERyQvTtoMjB9Au5A",
  "key9": "2HPXvJHzduV3L8E1bJ2jnhxdoJQ3jipmpwuVxTEcCAsXXEe5ZyVT77rU7bFnhqaXPTp769hofDZ5z142NZTvXuca",
  "key10": "iKjgLcGexL8zK5aQw7rZDGXCVmUKDNioMLZ9Gf79asQsn2D9pqWcx1f5HMPK1zcMtjqmnmxQG4pPqrvqdmCbzKY",
  "key11": "3qHQ3QZQENLApW8K3Swsy45AetXP28SQ4sDYDTW2qHWmMAxbvwpL2CMfiqCFwJddtKmdsB9wYC7KmN9nKbmY4nKt",
  "key12": "5UQG229zz1qWKo1BBMiX83SmLYJJAHs9azXZi1gqpv92uNYBef8XH8Y8yCGGAfjEPQSv1Evx7Gm58mcYGyVtg2P8",
  "key13": "d9A1a2cDS2oYc9bw4hDrnokNp8ba8sBskstXqTYrvV6hzu1t3V5dnG23d1wasL5sQAniubvzqCyMgRuJASiYiCU",
  "key14": "4FB6QsKksEzjxrVNdQAxPaanHoLGZruxoAszDFEKHJYuHpoTQF314Wf2omQjUKdDhjVysaGq8kKuJngt7jDevmTo",
  "key15": "3FXmEiB9oGjhamGbVy5nm2Tu5g8pVmxUCMq2PW3UhzXUaP87iwFQCePpaCTgwWQScWwnSxjVoDKVHWKiUUqwxhCQ",
  "key16": "2K21oJSZVSK2ZwQVzAjBBkwhS1qwkUhN2XEfye6uFchQAQST2cWmBesh2gLdMxA4Ecbaxs92XH5gCgvSeCsjYnuy",
  "key17": "w2UP4hfPzgDptxQc8pZM8VHTtP8rukCf58EPZS7FGMXGehYnFMRH4aHeEheVpfm1osD8FhJgsqFecYzRU8bLUvQ",
  "key18": "3XkSR5E99dE7JRhCtYAF2eA9Z2SsnQ9YpaRN2Faz5awCdnbevzawfcYEvf56aRpVr95Hok6gYCAPaSh9jCyyMY7J",
  "key19": "52TejBUEQ7ihNXrFHoPzBbUuCsJfP8JgouEFvEViuxwf6wYG3hci8W2FUGbo5yV3dQXCnDA2uXAWDzpEfzDZy1aE",
  "key20": "3gbVQhU6k2tocGauVZDfSCzjugsGKW87471HCBbYTWz88CBd7UHjC1Dgra7JgKzurECTy3Efs2WzBo9oHyW6fJXV",
  "key21": "4drxzMSwFv2EvwPxWYSE78zrrUveByHRSpNaTKKYqBDoykrECAGtATEJZDPPCrTsp1FxK6aEZSMP9nrzptYkWd3j",
  "key22": "3XFUVB4E3mX1MjUaDKvbqAfGxCgUG4Qket6CmqkEemLuqet93x7tDTkR7WWvLbWMPcsDso88dh98HR6o7y3sButM",
  "key23": "4LMSuYd9nR5nvidCQzhg7ACq2AeayNLWuUpTLsAJGB4dwDYt36w1pgGqUeFMeW2r1sQ2zHHNTgurYD3RgZjVyG9X",
  "key24": "5pbCo3WrkPsTd1TE2bzCUbs1ycRLFvbpy2Ae82duuryboduicLiUvMV6sRhSxV6uXuz2Dyp1eB5LUwcb6FV5qwYp",
  "key25": "514oNV4S5mZbRTjWfFsrwc6Kaj4np2ZQDZPBSPVC3P2GDT2cuDX9VgQKaQRACqi5SB6sJ56bj8Zhgd8PgJNQHDs",
  "key26": "3rk5Y8eKLScymQ9qo5noYDnQviHsmG6VeefaFSoZhKKVNaeM8ZAWN8VZmzmEewfV7KtEb9T8WZRxJ6pyAmzmpvrw",
  "key27": "2TKT2veUFKdHTDSngf2bXXrc5jPZ5fppsBmzCe675uvV9hhxv934hLxQpWGGoPbKaQb2QZM34iTEwFNaqA1557ad",
  "key28": "5ecfLiMG86SRgeh5GreyWkoGXRZtRTe7SdMr4rD8DL5YFredL8zAZecoE4AiTRa2bZkETJBqYpHj2d5GMuge8Sou",
  "key29": "T2Hd2TskXgBrhz8KaQGzgiWoffhkgLwTsBdkXNWYiuRobqXr3ZanKHzpDW6KLo7zNMaa8wLKo2migt2zpwXeKmZ",
  "key30": "3FA1tT9gB3QVMLDPnd4TBaSQfWLb9eLNfmrsnSVP2rQxJYk5s2Xu5LmrSoB5a9N9TZ8dfSoNNE5jqpwUXh599gCE",
  "key31": "64C71njpQESL3zDAn8ezAoEJwv3SXwvcaeSXvSqsXu9QC4bGAKjzu65B4u5Qj7i3LQFpSLPhbKv9Z5tpQeMwWpJ8",
  "key32": "QuFgPMRzcfWviUY3NfLZYaZQoFQCrAU9j2trt7rykRwRsdeWRYTbpbxXLRhb7E6PvXzQ41KpBw9Rpfv6RwxHrfg",
  "key33": "o3LEKNeLE65ha89fDEdzzC2hYWGFFxuJD32JrvENTLBk2ZALx7RwSMq13VkHuJnZhKfwACEEX5yASr7z8wiyYhH",
  "key34": "5cBM7BEzUrqEhcYeW47dugsFMTDDSDBdJCJ3vC8Y1aZXnUJVMAts9hvtL3f7tFb1HeJfBQcgv29xqKanQ3Aizn4a",
  "key35": "2dFqoMoBmVi6M7pjEvdK191GBBrj5UZzZF4qCkAX2ARjCautMwSXFv3Aojog27afFxJmZ9Ehr1fTi3Y2sfswAAEp",
  "key36": "2R74YYsGxiJadRYD7KmtCXgvsjPacv22ctcfrj8P6kNrCK8vNXxje24LCvSkNL6uCvewBzsNyHR7sa9rWsUnr1Bi",
  "key37": "3prRoFnRyVffwdFMnsm5tLZnpJTVVREfWwMeg4ZmZNFAdtDmvmoLPtnUmRw48gpKNaFBBpL2H9evXQvfBHYQxP38",
  "key38": "5NVrgnkxbpotV7BQL41B2oLptd6GiBcn4wjeUQyjC8qFXXsZoUGqL6zMeBQApduCeM7S1yNfMcd7MgchERC6D3MX",
  "key39": "2y57D61FdjzdhYg9V255X1wz5Y1M4Bt1b9fJ1vaepAEhnhQf4eoqroYZGn7sgC8KsvoDLDKFLZND5zVGBGML8MVt",
  "key40": "Rf4Q9uNaMJwdME4tnwsG6UdKWk2dX6e6SdY5vxvc5b8xvdGcvndKbnbAwYejPKPoNACfcso8Kh4cd8uHpw9v2NC",
  "key41": "53tZgeZKfZd9rnzRiqWQgQRiwipHUgjrBn3feNYg8bpn2MPzUDAYAH4FjT4TPfUfvGjoweLmTk8tdMa2sDTUr6xs",
  "key42": "2CEmjQtpNM3kdh8mxfZHTzt24LkGSv8Lv3MG4YJhZWiqDPpuxeX3HCoqJSnEv7ZkCBpckj8rRZy1T4eFuqnWAbjc",
  "key43": "2kFrWnS4Lb6y4wq1zyF26Ua7jmyB9dKESxB3p5s9FvKtZUPhqattxEX7EL3TEWUqXBBrdtERq6EoHFEuciNES8u1",
  "key44": "2fzrAy8GXGT6baaH1vqQKLjGkVj3DZbMyeDN6QMRbeGuUMyExMd2HsYyUZuzARerG1uuFRyAL9es4kwBr7XpM7iz",
  "key45": "4r9TibQeXyEPvPiXo96sJH7oLY1MAJXs3hNxYZyDMyAGR9PCtwaozid4BEg16NuKDPe3GnYrmrU1bFEVGAAeHCmR"
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
