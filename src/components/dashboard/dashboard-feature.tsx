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
    "2DwfoxFibgk2Br8znxwreG1gG9BcR2FQ6caXcdRDWNfjYC58Z5KzUqEs7A7AnqpxWwgx2QWUM4nN8evWyTmjHDuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HsTEQFwVr7tCxEz1eZt1CBM3PL22jc3VJLywhdyUhrXZzxmaQwZ6vMB7wHC75p75ogLufrWZZzpG4tSkEourUL",
  "key1": "3LNoT2MiJWwVurkYRkjpeJm12SLJcA2XUvK48QQWR4Wq2fLjQ7CMtgvpXXmJzgKNjXr6meyEuP1BoXnnQi4UGbJ9",
  "key2": "GDc37zc2E349RLyybXj2nWFA4Y4whAdShD1PmCoyYYLM61Fnis4Rviw3qi8UxQ4g1AAAfQqQaPhiHGY3hrnJRSR",
  "key3": "3QfT2sG3ypmeuoDTso1Jnu6Effxj6Jm84jWwGdKGLKrwH8W95Lo1zk9c8Gtkdgd1CRgpGLaNJ7QYwNRRUPcTNfVz",
  "key4": "2Em3UKmLxaKuoQmNQjECaJ5fy6XYgdChjdAaFUzyNZpCm4X9CBqhbDM6TFs5MQP7UPmgtX4dLawMa8tx7UiJDfDF",
  "key5": "4iPVp3ZRd6Y7oFkG4XW2J8nbyf8RxZsV3KdfQZgK7yjaLcLbxKYipcqziDP9jbyUnHRkr3r6hgpHPaZRjzM2evHw",
  "key6": "2LoZeje49sMWbz4qwGzJs4aJkBa4mc3fAFHUoK3ZKmfJZVZtTHNxURHEK5MW7So3WzZWf2RZ1jLkHwt2jRfNno5n",
  "key7": "5GbzWqHg2Vccm3ygszQcUR3x9BtQi99aQUYRKacdEhXeqm5tWUQFTxn7swL7sCFAbrjnGXwe8SJqN8ECCw8XK1xM",
  "key8": "51PLDRV2MZ6dM7FND7rLFhjFWzcLcbYTc67zicmjvVMrraEZxMMo5R765rdSQVuXqrjrkYVYcCN67nfvX7qctLf7",
  "key9": "FwD4cVedPbV3Pf1z75tVwWFCRVZw4zwQsCDzKq74gAG4Da3zZkd3fysf4GvAVtu84Jo3KY7ecpf9xLZSZ6yw4Pd",
  "key10": "2E7CDBP5Q527gYJ3DL1DLxMYJxQqftPr3xKACnvKbNhpweomwLBrVjeuLfok26538TGNu6LsqFS7jtCi5PsyRitW",
  "key11": "jzN5uEFYU1d2Pd5JjVsk8xBKqWXFPUdqt88y3zMiyGYvN5sPJEbKo1TV658DYxqFJZtu4YAFmH321MY2PVkEJZc",
  "key12": "4xM2ojTky4L5DgEtEUymKUkhUMj5Re1Utaz7FSsky1NF1TRNSiHpxEdWTkyGJE713wysJcBB42HUcGiRVuB3KcY1",
  "key13": "5DiJrdddbW3K8EiVwrY9LuobYjaTsSXKKY67PJ5aMxYLC9zpgR7UAQ2xgBQkVpCP3LzAtuoSzCE1s5BoGr4tnGdP",
  "key14": "4tUeYhijp4axRvcuvWPwSwQY8oNWXx6op8g1bd8DryBhrzrgmPdbbYkL7QRKLxrkH2Vsd6k7vP83wAWpnhpphjVP",
  "key15": "4DSqxzfa8s2epZgyJ9wDhQmMd6rtsvTgvmwNoWy3GmdBaaH2FoqwaomDfnxj8RLQuSGF8XaP1soPQpewHPS8KVfz",
  "key16": "5BtActaqwsx9wMk2akFv22AWgxUpE1mFyGqnr6ySYCiDAbzacFr5KR1dWrCQzhzNFLWTuH9n45z5fVYjVGf5YRf9",
  "key17": "3LdA3dAcpS9WVuJsVdrsR4Y2PvyFQJBgrwHMZ4nsP8izZT8uwb6TVJPRz8yG8cDAVFp2EZbRknuj71bJdoMHG6oU",
  "key18": "3FmSvjX5kPEgfntLL11mpbCLqdLoAyVJNGczszoKL7p5dRRHqRkBqkv18vRe88U3f2J1ZmbwedoBk4QnEJGxBUQ1",
  "key19": "2sFt6QWgYqDwJi1bR2gSpBcej3DU1NzKYRQfWwTQBXK2wh9Gfdcdt1JULsxQXewAajhpsdvXwZYLyr8f8ihnqgry",
  "key20": "4VYTx18RnXuM2aFNzB2Czf8n49qw3h7kxZqRtZ18pXWLHTMeYfgpYU2KyQqT3mMpfkdTXeBEKQcj7JeHoXL8dVVs",
  "key21": "4CbfQ2Yfo9U6RBNyeiK6buXHjnrJjP6DH41LU5X6Bvntc8tdCJumLNVbDrM3dfEjbYZN2SgW9MwuaYs6B4H6K3LY",
  "key22": "3q8hNoiP8X38WLJeTr7DNoWBJyFa4T9EvDHEKx42GUPFikg8NVRi93gPEzGXoHjsNfzRz4taHyk4buN5tDBvsDz8",
  "key23": "2bupUqYZsMpDigxtQZNRLhzcYjqa5q2rDNWpRpxRt1zeRTmP9xnM4tFdJiFkorgCuJexqori5zCRs4iggceSATDi",
  "key24": "2h5w7X7NYduBKjYXPGUxNS5CjrbC19X2cMGrz43w67c9UNDbsGirrbgEjUhuCavwxToG98LeecLVwiJVWMLTWeLx",
  "key25": "2r7gg4PvuaiRbuHpEXpMdtLhA4VKZrsRg9hfaXV3odcDGcxmBt7tSmdexsLAZPtaQ2fAaiHZNcdgWP8MeBeYbH2Z",
  "key26": "xWeqqBiQ9vnrkabiyzCAxZvxAf9yEYocRLU463W9417xgnMbhN86Zv8Nt1DXAXNVQL4mSddZJW5y8ohDPCMiUZJ",
  "key27": "3rJwUbZ9zvMry17zUbwAoHg74RqSAKgP6663rHmRaaPcKV7oek8r9juUArDsSPvLoLdPitwgm4RiPjMfsXCZvkvH",
  "key28": "5H9auU2zLJ2pQGweXqjAvhUp9bC4gRncoKrS3j4x3ANfho4eMob4WFcDRoYrwg7dJVouGTh8GURxQ7UJRrBVq8sq",
  "key29": "2gnfnfgDY4x42zx5h5PUVmBZy9hEYhxQvwTUPqzaStJfkcbgVjrjKX1QS1JzCBnM75iiFz4b8SuXKy7vDLzHnnuu",
  "key30": "59RrtMNThqnDxLkkcv7pbzQNs8SqaUvdMFbxXQEDTk7dWPvjAZL7f9XK81pem2eRnrBP39UQLzotDyGmfCi5u587",
  "key31": "2uYfawEdYtKHofhkJBdNEFBptkjj5DtreGxnUQduwjp22EjpJckDuhHeCBeABXBXeLBKvZ4hVpkradnQTMU4J4nZ",
  "key32": "i16kCnuw9fvmookYS87mVFTuaxugkCAwKBGtcWqJfjryV5nHgWLc23EFaCBG35r8GKhVQskRrbRQb4Qb9TKuB6X",
  "key33": "5tY9FB6BXPoxWYVX9NeEN6HGS3jGtFpzRHST9jbU2xUcQVjwoizTQ8SHNsdLBC5ByF9rw7yKcdEtKAbNM8y68zZJ",
  "key34": "49mUSmzAJ9jAc7cVKr6UcaThkivjv79Yv8NcqHbtxsRsLCm8psFYphsoNPEsFThZRwE5FmUMQEL4siHQk62eF1PX",
  "key35": "2sAwT7g26PXcFqwRtyfuseEgduJBUajZVtBUVNC3WMyqDLJwC5p6UiFHYBSruZf6KPhL6kgZstYCqFzF111qS44Y",
  "key36": "FWTHVB5sZDsfH1jMnSqzUwGCLByAqRCrVp6H7YmVYiUYyu7jLXRPPYAeumKubgt932tT7UNVVP7Nj7G4sBnQjQb",
  "key37": "4g9V7dVr1frY6eHt7BrHediEHfo6NbobTG2fABSnxePsmkiEdyspvzxqoAQ6nZH6SBLqWAWnduoL3iBZXKCZVn6m",
  "key38": "4ieKTJE4UVQ84Lq2Mwe546yFzdV71uizXnyYtzewPf8cMKWPjxHBuEKJnL9ZFMi54WB6n4zYwwBSwwVf1eGK2ZjE",
  "key39": "2MYu8j2mnLegp2zdjtf7UAQ619JTfY6o8p8zxkmCLtpktmdeRFdr9UF2wNPgLBsh6ZAonLEEedc3rgT9qqKSphxu",
  "key40": "3bbqLabVg64RV7UzVczdyL7uiGWu6URJJ6qFnAQqMop3FLwuCfdKk7QXQXbehd6AVhv6igWoEwqoahDEMRkVoKey",
  "key41": "wMRMGCTzxpdA5AHBryLjvUUpA3ZBn6DnK5vGRfrGnJo1Le122nt9FkWVrXPLj1sqsU3T6X2SFXZqYfvZ1XoyX79",
  "key42": "4VvbXxcEqjAZFWaJJbeoMhVqR4NccJBeJVZsbhv47cWurfdBFAXv1dxSiTgEr71PprBoUkdM88umkmBipvJx2ctF",
  "key43": "3j9VzUvbFNACEYCXiimNtF3hvYZSkvYVLreHzJ8viBp7Lg5NDu3oEFHLgi9D2KBrbN1R5mV59CEhkYH2ENUirZgU",
  "key44": "3J5EZRYvsDyoAyvSqFq9dHbfdoPf2wZmbhUKnEBmtCHoE4XVsGSn4ZcQLogc7roEzdFsdMUzppVn1m1a44UsQceJ",
  "key45": "2EoPYnSLKPXXidH4b3MnHha2p1iJhFHNwWvS1JPMvWnpMtSsNqWq983w9J3by7acXebRuhTM3CJFuBnE6YXdNEc2",
  "key46": "442fNot2jHQrRAfk6qZCjHagW7Bggu56GCLCppmfNYAbCmhRSXhjHBpFyhoNcmEShskvbWuVunPBmsgPh9rxRaD8",
  "key47": "5WUbEsFKRs9drWCFJaUCry1RJYRJyy4vdDZCpGwyqnDyCqGeGUDzvjnXusUCEf2TsnJ71mpurzVbW2Hf6yx24EWx",
  "key48": "5bC4217d3jkniUQ9kwdCfFs8bZ2vzE7FmMLCAJJB3FwZRbtQYwbattf73W7mCHM7LmgLsEtwXuP7GthjKNsRvAbi"
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
