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
    "5rCjaKx9A1cNXFfQn3gMfutzk5TJZHQ4h21tPd3fbXGtq6cWxcNdoXQjquoTRBVawThxmAFzqXEK6qnFNLLzHoWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmAbxyZDpJW62njshayEySDVDXZHNianGnNh4FBdZ4UhNssUaeuTDrA7wwnbP9bjdrCYA7cNLR28VZD3sjbZQau",
  "key1": "43GgL46wfHJftLrffzRPULRrMqcvRRD1E5dfSjsRNePkoeguHTT5j1A3WU5RyqdD8WhFjrbrYZUKmbkqFiSGv4Cj",
  "key2": "23i3c5GhhKxuKsaene1F5Auy5aQBAKpzg8Sq73s46NmY6kWUS7fna3iwY44UVn5HQrFxBMMQMYc2TsLzRPp9cUub",
  "key3": "2Jd4NqrscGDTjuowVfnMyUUEe3mKsVkigoGA7YVxLRp8eWr8LbTfrggzqb3T1VzMzq3a3B9UwkHQgGbv6tGFL9gk",
  "key4": "pVWQ2GB2HKcRFadPGkKZA6VDddUJbMES3yFSFAgawkJbBzK8NNucFQhQNVwyQyf7tZjyqkKCQsDMdTCLr6n641M",
  "key5": "vaAxS1iyHNqi5A8QA7NuvuYAGaRwBZwZjPzaEAT6G1qjuXSFswiymRkwCZEYxVfogmbWrGAXzsqkgqgFodZZAJZ",
  "key6": "3Y9vDjXgB6WnpGQsAi99EzQzfvLsbwHcYUMFkYJs5Pg7m1qE6wpA4CZi2LDAmPU4U7PctCAXuPrxJqHQm6qUWEPz",
  "key7": "2FXjn7Uv91tn84ps7M9Q5kpNB9kVg5tSZbj7P58owynHzTD7UVTfyaSwoUK9vJxQPkhU3rmKkd2edgq5uGpxtAYr",
  "key8": "4uvZGYrtgHCTFYh3gv9mpfXgf6qjgTkmQbsHQ5bjJ4P8YwLzyBF1gAJgGLoDmyKCy4DT7zsToZVXnnFjNYg96Bt8",
  "key9": "46DA9U83qLeNxfYcxZmBJnpeh4ZZw73cKM7kCcxoxbe1MoQBM9aMWxTabbnfoyuEp48DbZfWUctCeBECAPNUmEkG",
  "key10": "frTD1Zq4ZUWriN4FTEfz31y61Wod3fwc4hN66jhQP19tNR5NCNAjTaQiXu2BZcjNYqbMWTTmyJmNzqVavHTChiV",
  "key11": "58eXRp3Y9fSjo9BzKRBt278w8ArwzcB7UhDFWjvNs8CyoPmiTT1BefwYxz4wVKcNky8TM1FuDovz8s8MbfaH2Bnz",
  "key12": "5YASt7V629WpwN9LqiSagusX6uH8f4Km6Ps1tRW5taRDPgX2B1KV3JHrDoW1yihLtNfoYj2dW9mouMursN1hob21",
  "key13": "5PRgMm8QYauKuNegFkuRoykAvjhCRCKugQakevo9FCQrK1wSzwtuCN2iNYXS2QXZ9GNPqbmDxWBfRnzJL5oKfWJc",
  "key14": "2MR5bQKgsK9fD2mw4CCpnCSgNCCtPvfwrqYhNvxBFWCrTBdfQrHP9HJAgcwbvwK9bhgsc7Mce9fYT7KJL5Gu4SKD",
  "key15": "2PrNV7iNcaMyovpSFsEt1Jy3qPE3doM29ay3adWuuZhjLYmVZxuB53aQcuPaDmAF3LFWjENcvH3RX5kX3cMzWywD",
  "key16": "3hwRsdqWbaKQcJowGorryURW8a744kY4m91PgTbmvavmW2X4YdkQKxYYFCuunNnkUxzyBzD6rV8pKNRZRpfanY2H",
  "key17": "4f81XiAb5vpSJY5kfgVKUMyUpLQecgrqn2Cu6TpooomTxHq4eSq86Z5KKVWQtKkdn1Caphe7ft1n98Q9a2mM77YF",
  "key18": "431pAHMtoMktp7LLN5X8M5NH2yUiZjXoY56DCuDHuNrG5hkcApNbzFvozBufur6URJ53RSswF7GokmQozeLz4Vkj",
  "key19": "3UhBArm1zASZs64o3otWeyWfzJkMgKjz8e9TGADQuTEMgD4NudN7oLMxYo6AcLAuHCuQYyYioWWrravpNMYXyTSA",
  "key20": "42SySt4fzUESHfxr7dGzsZptGjQT87Bz2XgL5dLeVCzdTafdQwskk57tUnKLGtsP8v8WEL1vveeUdT38UsMx4NDt",
  "key21": "4sbFE6pXPMcsE8vBXm9qgrcQAXYbp7CRuaQsVoPhq6d4voGDTm7TqzG7usdz4Xuoi477mrHszvjM6EM7hYa7z2Xn",
  "key22": "3tKfiq8SsPDJFLELDy7sUpeLb5iTsPmDABkSmZ8pBZFSpQACy9XGvXQzbR8e6MBeBWFR3WMgW5sY4wfuNGERxsJN",
  "key23": "5Z1uKiCZnXJzZhbNxeMFWSdUnGpSrV4umcT79aU4DZD8aqK1CLn9nHsD2RU2eVFedbXe2oqRrVzF89pdRCzjv2HW",
  "key24": "xHL5SkSHskiKhUyqVDTDahUvNDDAG84hvaafL7dgnUm3nHkQKezD8Ugc83gedeYApuRMn12VteEMhUGvmFDCBev",
  "key25": "3E9UtjcGytUkZDSx2dJSU38rEZwFcwThPuuBmvV7sAoMNPThH7MHvPWaonvXQZR3oL7gwqZwpCeNbs8dJeu8v5jp",
  "key26": "3evKkrrD9WSzYVGSjmE7P7zrTdHKW8UAvzM17GyX1fj2cpnWRwYF46DH9xNWX9PaxQmKVEBpENRf4tpz98V1cecc",
  "key27": "dRxzc26Vfvo1tmvjAdWGqHUHzUjbno7fZiRJWs2PWenKfkYpSvMLKh4boE9Le5ZenaYeawxJwH4V3iM7WFjcBrG",
  "key28": "5SHENKkMvui1HtHcDJwYbcMDdvqfgMhUSNhzagHEEbJE1urqK3uHYuafS2JUzBp5eygmvoRnUuXoWvBn3vcYSAbT",
  "key29": "gj22eeBTBSxgriJXT2vNVGrcm3pywJot8pSzuRP2652nQTnnk3B2PUx5KqZdA25fGVCUr4in39xzxkrS61HjsKu",
  "key30": "3ZdsWoP4or1MUZKaGiKAGF4yCmdjLCZJfAcMsfTJWQu9Mb6RfbZZhfEFMQDQVVSMhU6ZG6dsfQWVoxKSXbCu5ozS",
  "key31": "2CM1uhmvqTAsYvqxdR26mk6gMSxRdBzcyxhtdJ4turEtZHurCHc1614s53k6LryCgr1HpawETZbaXeSYLPWvTmXT",
  "key32": "4qgp74qV5w5Ko6P9NuJJsjUrLw9te1etiaby5BkpKfBcf9yYNt6hkMkQTGNoKAy3CSYYquqKo74ztgLWGCx6NC9z",
  "key33": "paRKSKLqwrhWYntTJSRYf17AYtf3p1Rx7Sca4rALyQcCBDmdbw3Kg4hzNNBsLTqh5RjoSHDbNg38SAzHPvyU2VP",
  "key34": "pjiS1gsaFxhJQgb5krBqmYPsSX6nhvh83ZWcmzqFHurdip6XJ49JV4MeZpzwmnu68zLS2j4DRtkEQ35JnFpvLGm",
  "key35": "58D5dz8k7rSeZDAL9PHYmD7EmHmRXtJU4Puk6LGxnFKbU7JhNraGLg4N1shDaBC17ZjtcJE47ebM3UntxbrBqdff",
  "key36": "3cQdTx1qNVy2FcNW1cj829gbF5mfbqRYaQG3eU7uogj6iuxK1FubzyWgZqAfRqai87w87f3kUK9Qbeb8myhdCgpy",
  "key37": "5oSj9As7qcqEioXwADHYUbi2B1jYtjEvHFzmozQPS5btm4gcnoe6gqJqCRUn88vcWfyuowoyyPbuesLPADpYvr17",
  "key38": "XdK6b2w4GymsG1pLXBsYWSofCUt5R7pLHuqPL3XswguUgwQSQsorjafxmNDiCqxhsA41yKN3F8uGKUi8PkPaG7d",
  "key39": "4XQFunKLRwGu9mzVAGUrmyf11DcyMgScWcvu1MiFDokp2WRy3DbG1ej77bkJZjW4fe2LnoVpbuCTjGxmq8sdQ3po",
  "key40": "5sNXXeGX4MQj6TRxppSMnhjrsGqboK9XUqPXa9sF88S1BuaqRYLWnBMGqZrxoqTroigfxZyfbwYoaTYD3cgELtD1",
  "key41": "4A36LmaW8UpA48gR6FiY9usGBiVkFfy5n221FwqDZpG22sTiMuuZR3vbuKehztjuBwJjo9PE3SwsWJK9KTAyNCVL",
  "key42": "5GtP1gUbH2MSnzXGHRGXks59BR1WyckTNzD96UFjzRyX3Z6CYLwFAVXfsMwu7MtwssFLpw2rFKUD3JGwb49yeL7c",
  "key43": "2gA1gmXdQFsVN2TTmNb5krqucetdwjhWLApudMFnhP6VxBL1z6CMm2H1TWcEJZGxntPdG9D51MFSwqXgdczFaNRe",
  "key44": "2JCgFy5KFTTvomj79JZPpfso45uVAAkn1CRHW9GuVsgx527EJVs4zk5gPKPn8uwxt8128JFt8sNtdr4rJqaFmJJJ",
  "key45": "3sFvWPJAps7b3KM4auQcjuUBs8zRLoyXycqzNLqhVYCkgE7ndZbYKN44Da3DMKH5vAmaiWjVcuG9GTeMdvfYhaGZ",
  "key46": "2qet3QL1kyGqWhqZgb8m8m3cnJBLyRskqaDqhQa7UPMhrCCk51YPxp7XJjgBNzWeVYM4GDcBgHXqWsX9PRXHSMAL",
  "key47": "2EJ4AM55YD1W7cny3hSn4YLD1pnMUPXJfhZUVD2CnjQvtCBBPSrfge6epxEMKcuAVfZSdngxjpaScydju6o2ntSe",
  "key48": "4GkcTno7ZMVQub1Pz7XCm7bRokzaD3P6gFQMffcQ761bGiugTx5Kt8rDZSDgPwrNb4cEndtxUegk7cfxxoAtpYcb",
  "key49": "2atZKog3EjsiazXVu4J2kiiucLbJxH25UTnRtxmopoJyxxLJfumnn9ZvLWrgkX8BYh5ZQfzXDLpWes9gmz3TAzyk"
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
