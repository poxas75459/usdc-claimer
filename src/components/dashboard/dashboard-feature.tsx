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
    "3hRMKPqb86SCzfSR2jsK2ZSManHra4HgcreGZanaD7xwCtXwwSMHqbeSitRF3cbVWAaAQ8HYytNA62sAauDWcvGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwk3rRWdF2Pvs5T51rECu3GCjCeGFH6uTMqWcWo76zvqruHG3neRm6oEhJ3Kdhe7uUMmz1YXqoDQNhLxqNMwJkn",
  "key1": "5myndQBivuUqqbp3rqddE3Ns12ghqmKfaEZbvdfBakxP1vMFuoxJ6z5pmC3d1Y7eK4dC5LXKGPVyna7G2M4mhy5B",
  "key2": "3g44wf4cbg8n5RyfUP4Muxmau1tbqzLEFHTejjxzUefxNaG9PnCrHyy7jnNxKgcbMwybdj9W8cukgsKBbeManeE9",
  "key3": "eipkEnBSto2iKXu8mBon5Y4MnFcRxDU25AcxRkpuGybAE145MTmMvSyG4WFWzah2eFP6x4jgtoRGZsXPwrHnR19",
  "key4": "4JEaW43nrEAbKvozPRLsV3xu6x9CUFE2pmytxUtbRpByr9X11si2xbFAJtrfTREiz14RNKJHhfy3hLXpBCMuAjkJ",
  "key5": "45551WVH9PmjUEUxnj3iHDEJDZHmFTJiu9qS8dStKhoycQNiV8JT2WTQLnUPezgqF84PrxjriaoTn1vCg5vtDjzQ",
  "key6": "2WkoMYcW8b7vMXKy3ExzxY1SgVwgAhxvVG3PeWxHAbDq6uxV52tyLBgwkm2PffsKJGYTba2RF4WUnSKAP9NamZ5f",
  "key7": "2obHZQDzVtHh8PQhFiRdm4J8q8f5q49ShLsYFn8mM5fMBzastEhm7L379LWibmY83DGqpxnWjS7W78KQFHnMS29Y",
  "key8": "cBtpE6Uu1MUyk8w7zKXo5W532dibSheDuNXagDuyrNiRq5c6UGmHwoYfmnKxqkAA8wLFWgZhutatQVbxsWUKkTp",
  "key9": "m92pCGNmPuhb4LHdYcBytst6yDqGo3VogcJw7qnpdPhkg1VQ98sc5VA9yWBSuJBqvvZVnxVAAfNK91Pj1S9bpvV",
  "key10": "3wKqAwrL3JVL9LyUjegvnijk2AZQcBzb4sCKFHq1EuTf6NiV3DDN6xRQqwZiBGsJL9zz35oKjDwkWMLZZ1UtiWP7",
  "key11": "55W6DdRKJ4hMxJp2Tu5Y7pRs8nHghn8dKG9STUVAPQGQo8fimE55jq4USWZjssaDvPRWVDXi7Q8Lot2n7iUpiBRV",
  "key12": "3vk9RJft2zD2twSL74CQF6gzs9JUezEe6wbqWQEr1Y8SjHDz8RkZFRKoi5i1qrYomJLNrMEXGYF5wHRXzJDbXUzM",
  "key13": "3Y2988eZYNMwkGNv66iJTByAwThQ4M2NJXFHhnrMei5mpEVyoPGFQm8U9fT9oUK3hGUbmCS71g4inDxqmrAVBvh2",
  "key14": "4yMLsEY4nAnsYGBh5bQcwnEDPPDNfiUEtEeJrBJzKaGcuUXRjuqEzhLot83NCHvsTE2jpQ2A76mYuuwNqsfJrZe4",
  "key15": "4mL3jfLHRhVuxhZtVSeLt8ZTWJZSSURTP4K5q4tT44f4RFnYiVmT7Jyqf7nbYPLsevssVqqCPpsnGmEDm2vvC1by",
  "key16": "4FfzhhmbLe2BVP2DswquDqxuo95YpQ8vRWYTMcVCpnFJSHT3bZjumxFmN2WTsmNYJhKteHPCEbrdDCp1Kowm24Qb",
  "key17": "3a16nvfyiH764DUWG52gw7X3FCwHsuyG7ibJPzqieGumWXYQMrTsqyCASGv6hmJZJD87LkPjLtGm24nVYTJuiXVS",
  "key18": "5w2uajDsR4XJYi1Zdet3aMkmd89TThW92f1oXYMSGhDYNd8uT1UgJQjvQDHCsW8sLx6k2n3Ko8JsygmPiDGiJqMN",
  "key19": "AWCHkAR2ePGqbpmynJu7MnDyNCyvc5tqHe4vz3g6oVnJL9sa2aHLBQa3q1qeFkFBeQ29b3ZeDxjwWJioGSuWMTg",
  "key20": "2F5N4LBxyTHo6GdwGmv9LeSXJCLPzCEuX8R87dB8A5t8jhVnzqhsk7zYepRgUk5q477akr1F7GKFSGM4znj2sP5E",
  "key21": "H896od13WACMk7Br3WZ86EZnQtd4FAjb6erAa8hXzqDDvC91JrkhNyizXjbDhuvXNPMyjEccGD7AJyZFjjr4Nco",
  "key22": "2VVvYGq8VdzWqZgTtEBfPEvwJoEC5A48fDGhDLRgrcmoMPrcu8zZF2xkJyZG4u5e2zksVr9k5YJSw2uqoMWdFg1R",
  "key23": "61QE9DuSmcY7NWJBPoPuQtGvsrUcL51xHavWJXWVpafeb6e1VjmsedRRQniTrJgbqiPyq5YyBGB1vTWMiWEgExkN",
  "key24": "5ub2HJoHVMK5dLNTyJWAV2bdaAASoH7gDsWAe6Btkje8Z9bmr25iC52zW6R8hEivfpkWxCDpzmJS88Vc449AX1qx",
  "key25": "4Y8bqLm32DsQWTGZnu3F9Pme9zcCNt3gLF2NMLCK53YWHpLcNBm4uB4c5pC79J2dmEnHQNgejjQtbRvDTVPi9cJ4",
  "key26": "2ivdwhzdHx1gPdMtGJjp9ayZTkZvWLQWzw9ccBBoqWh5hPMpGkyhvyRVKMjtKWUxN36USxFPv5cDkWJwP8rACYXb",
  "key27": "63ifbKRMYZ9Qrno9nHWNqeQGVLjjmsBE9gkRjx9xnpGpXTUgBbSwNQtZspZQcfqK6e1od3ddv8Wv2PHqhapfJeo",
  "key28": "4nWrSy7wxxk8G83UdxUJqq8NoWhGLJAVhtGp7WmxUi2DQ96WvftAuWdDXU59QHmdjhJZRZgpU9e8RrPEmadjJfkq",
  "key29": "2WUS83Z9rcdK1Pqax8pwsNquYJWHDDjfx828touVjDPLtdRjZHAwVGjLDutQVHhXF3pxYRk2bciPStugyEywTcRj",
  "key30": "Q7VZcRDWU7HV6o2KPCKfAWo5omgWq1wdXVJmAyxqKwR6dgMv95Qp8gkDJeCS7vVk3YUaev1Jrz8DpNzAtQ3B9AM",
  "key31": "3U3Zq1WFtnQnHVuAqN1YkmGWPhZ6sJ1H2o3KYPc975maSgrzoFacVZkNcMn9XN1CgMPSfm8pEH9PACCWijAnja3Z",
  "key32": "2NtKM79mnbXv9JnStavaCWbiERmnxNdguSF4oD5K94n1ncPrYoEeCqqYkYgr7VGzCQ4zkvw3Vn3FGfxnUNk1fs9N",
  "key33": "3t2xynE5bXUi9DrgsLtoqybnzE2HkX9vXzHwkTWr1eUMC7yUyfXjBh7UcUitGWkmNpXvDdGiQXLLxa5NFhAJsWL4",
  "key34": "2sxetBty4iq4gkY575axmHx7K4jG1xJuu2EaNV4P4zArCCLSE27QEoWhKSZh6LrkureHxh2Ve5rSiGnNXUCVzBVJ",
  "key35": "2yXBcx7mYUqcJRFKvkgvssRnYru7T1WBN17DSDpxPRbtyB2Sm3teM3h9Sbpq3M77yseqv5gWm3jVXXdWdBoFbwLs",
  "key36": "t4YfywFL19FnnJNhaJNoqdzpv1R71NBMeJVTYMBfHSSXspYEfGGYrX5DtthesztuVjLMGyeqtWtQ7o9zauZkYG6",
  "key37": "4zPEAL7LDLwr5Peb5c8tQC5yTqhUFFfie7Zzm3UG58ETnKvfczGksB7Yed8qRXSQwAHaGtU4QYFmqCukcEyPJDqQ",
  "key38": "37rPGgxMHwAFJLuRoekNhZHL5mPiqccTmp7Puu7zMMg6noMHGJPjYoBZmjKzbNoB92Vddgp4eKFoYwcJNyrcwk5s",
  "key39": "2L6v11K3jjia88ocR4jizjr1RfKL1HCfGQE9DtBBQTJi6ePPhWCBT4yiYtT3AKLLhTQNEpUU3A9xpwtTZq1Ho22n",
  "key40": "5FjLhsqgyY188ybYt2fUVzhPF3XXoSXAB69A8pjScPGsY8ZNQTQ4yFYbT1xqsG7pDXqxexZHG5KFMoPESVmLQEyQ",
  "key41": "w4cyC5EAV7n4MD7qozT5MVMeJ9KBQNBEcjw2JitGW6so3HUaP52Sv5EcFDqXTNgK3x3cjFFadhKCHyxDeE5zSdu",
  "key42": "3c5JnfBEqAjGiBbb7UdHnwntVXgmYmZp2RXMvepQGdu1wCKJhhmKigzwXaEVxw8CetpR2xj7EHdnABrpMag24Btb",
  "key43": "296ScZqyfKTTsRBgNqiC7Uqk8vLXDzKTATZnueZcfJwBMFgWXedz3PoSuRjARtUpG2xmLcUjH5ntDBmTZbDxGvA7",
  "key44": "2Y9ec4g8wGXpdDPcNhVz8VuDdgaHA9PwNy9ShDwwTKcisS1PYBpEj8ndw3puQQC3UK1efcwJAyim41zoSsnXtXSz"
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
