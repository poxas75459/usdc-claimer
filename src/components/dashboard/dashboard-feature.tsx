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
    "46kWkopXQSY7bZgLSz2DEWjuhF8fYcNKj9wdiRMe2x53ENdbgScLiJ198MYqnoGPAcrQyAP595bqNxuZTAmK5qbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mWe6GDvU4X339DX9U7RiotcSwGr3ztTVwisFjCuG3hzv4qgik5woCT7Lv6HP1pUPNicQ3r52jUGEHaKke7KaFqa",
  "key1": "y6bWJxWV1GJCjLnBobT3QSuYis86gYmnDSJ9amGeBMAD9wLumc8AZkMwjQjYdyQaQ4LnjJnzw5i8NTS1bEGDmAG",
  "key2": "5KbX4U4DEUihU8esxVcu1RZmNsTUAbYjcs7Coz4JkKKMyfy5dL8B9EyMhEJoZhGNEjcty4WUWYTqbynA9ZUhpmyV",
  "key3": "3DdevHDCtU6beubtXH1J6ysESUgzR46hvUid2JMkWsihX3F1Qm1c8FgjifBSwxqd3x5fPbADqYu1w4gXFk4WJTya",
  "key4": "5Mc3U87LBVyQLoYzgZ6feCzBTZ7MJAzBDcApgRuEDWjsq2DswJQQ2haQRHSnVaruwBWMDdKEfJnRbi3hnF3cJiL6",
  "key5": "5pfVVTXTqMDDNd2WHESou81BySVCr28cSXcbtGgSzQSCN7Mcpiag5iFda29CguuP2jubXT9XJAFj8pGaEX1XYn2N",
  "key6": "4wYxg7o6o3CdTgMmCYgD6VtiUqXRSMeKPPuS4PjZqdFtcBC8z8qGd3moAZDvCDHiYWSbMNTZRfjnwac3FVj5Mu1N",
  "key7": "4iHt6Hv3VfYse9QsZQmwNSsk3swje62YgsCqobFHaWDsSjyMMCj6dBcfYrLv1CnAmCAyNnxFNRR5ki47UrV7TsvD",
  "key8": "292voWm2WnE9ynR7dJui59MDC8qynRE9wUGSMNu43K5sh6tHFSV9AJMEpHb4x3bJ2xnyJ6i6dHQ4qiXvDqRwwrwm",
  "key9": "4coo1VtxfdQ13Uzdd4XALpEhcjKMhBWLDoL4WeSyXPrgLUWejTLvoXrEdQTD6G6Ai5mzAwg7Uvkg5yu74ZH6WPgw",
  "key10": "4BENi6RBewfUeMLVFKTtbKf15xtCVmuTikgyqP15bGdq1hXoVygKexyc2y5ZGtS7QcRy3Rm785Cnqk3oPahg2dAb",
  "key11": "3DvYwktQgQ13mkEQ6NJja6FUDxWsFyQPPvB8ztx7PHzzkKDvApcVyxpPVRwbC4ZGPLdtdHL3myPRp3TJmr9Q5DEY",
  "key12": "34vqLmMD63A57aP86mStSBf3WbBUCzZqcAQZgNYWiNEGsyfW25WLVxTSPoVmA4fDGfr8tLURriaW8zMox8iFnWLS",
  "key13": "3BeH19jvN1rnrhBmph6nDSqGcuey6F2k7wHo4hRrRsJ9W7yGf8fXDwZjHDxBo29dyDTXoE55fFEZ3BbeW1aFv3M4",
  "key14": "4SwgxxEg9WhmxzU6XQgbwXaAPjbitRC8AjT19kBGzQwvg3kFSyhjGnzUCGYmJVMNwt5QfnT1dSWTVhBoZdyqVSac",
  "key15": "aYRNsXRHVL7rLY7moQ3QNnkWTWChYe1bpbEwGgqo14jKWKcJVHwLTkf7axd5dhj8UG4wNrx7eXJYAUsRrt7BDBd",
  "key16": "25SsuEXzVVKwp5zJvfFV2sZymAGdji5ShjoQZsjFTYerZnAo56H6Fvkp1dh3NgXzbeXqc8J8GREawiaiFAvbEj7Z",
  "key17": "5zQNwsucBJBNKz2nprtdeXYX6BaQrNYhvP1nqFoFKASBy388tmowBDmbYD1kFi1eBxBN29SC6qD6PGgduQ1wxHq6",
  "key18": "5KbWuEDLBs5VFxvoPEPGpDKw6AQWsQ6eFXX57UYLvECdfgHqSQCq3Z1sMdJLUWFzE8f59Pxfe9KdR4baVKNPHGpo",
  "key19": "3DTvBHqSdun2HJtvydtaaiB35yNgy3R4XFdz9rbaRzQxfhNGWenHRRRaYr9KdRs6BVFiyLDmRp7iDCJKskWqzctD",
  "key20": "dHU9Sjga7Ugasj6BXhk2Akje9CJg2bm4RxdUdzXSLWvb1Bg1AWNSB8WGYug8dLnnJwYeFmr4egSurmBo6LNvL7H",
  "key21": "4PTSRwQrWQ4sfEcQLwbQhRdBttVPXqLQXpQ2TCJNbf3heGNTceXPpWdKexHHBWrN5qYe9UgVHTJ33HmvmsaVtcbM",
  "key22": "4H961jyZnKpgFQYCm1Uf3Yr5ZCX3UUGKPKpdBJ49JnDTZAsdy6WinHCQnKLk5tq7bhnbkRX22WLDNt2fKF6duJ8x",
  "key23": "2ZnmVBxc74Yp2bTuN1uNVp9yBetL5uKCqtYMQkgFsYsnR9nF7HHUJUt8BPcyF87UQQy8ZXrQWicWtiWht3uyFhp2",
  "key24": "4xinAVyoEymVo375kyrxVR4NaMZAZ1JRFq6t2HP6W4vsQa5eM7RDudYPAMRLThvWYm1i18QiiZrzPqMzSTwKo3Q1",
  "key25": "3GFhQzuCrz8MHr8pUFopSfTN1LmyZe4DdyA87B9Rviq57ck61t3NX76NhPBYi2UVYaCVL7W3KG8v8tZ2TQBVsd7Z",
  "key26": "dBq3spwzA6xUsbFHT3RJNL4CBs6K8Ed9YRFtbN4YLRxYmGXk82DNFm8yD3YSAmKBUdX8pGKrrV5pmmdire6B445",
  "key27": "4X21B7riuwVFDMptxzUtV12wiUZvFP86DEaYfkeTvnCV6deTN8NvHkLbCZgekK9VT8qLnJWgQDtHNU6FKkWGJE8p",
  "key28": "4spRWq6WpKQSQxZSuEwzZyYWt8DASEUmcjP3Yp2yhVqdUg1UWzCdxzo4HgzB8e8WSrDqmhGfx2EqUW99LsNbyxmW",
  "key29": "2Zp6PjReqdyqSJLi275K5MVJAVcLGAEvT5vxvvyrMrfnQ4VAKxuzLLpqeepGNegBVWZZ2KUCSPNrr71nFkSLtxhx",
  "key30": "2BTa1MqLuT8KgS57qYd3fWA9MPr8Wa9uS1a4xdGb8cPbjVN8HQeNpuGVgtZPzqYsgKSxhvsqnpXoh5YZdhhwip37",
  "key31": "a1UBjqaYJeAGqt8ESAo127To8rDQ8itkTtQjDkL2q7n49sahHnGiE72ZbDncnRKM2o6nhPeDQ1BdusHTXmELDQU",
  "key32": "44ygCiq4gQAA6A9PnQrgn9VRGkj9KFS4jx5dyNsjWLt78xRRkBNQLyrC7VNZp2YhhsBLgky9ce7nUxuVHQa74zGC",
  "key33": "4sv1fR7C9vtvpU8exaZsxQs4P1Yyzrtw32PJhYFhespiKa7Rw8vGiHFopcxg5U4GEk8LnukdRGSSVk3fZhwTTCnb",
  "key34": "4ygAdKG6U3CEFzPnEEugt8nJ72MYp4br49kWNqwEzAELvPWeNYN2CU4StwTDy8FKF3doVL6JmjuXN4fLxVMoWCj2",
  "key35": "5umYSdxgTc6KrbsBWKdXqd7wzpwASzMESHKJR2KTRceLA327jLinwvV3rTGsXZQMGDtWVt9FG4aAX3CZXQQwJNUM",
  "key36": "5NuCsw5nQ5H3eJeRKTjjJocNi68vGetRbv8ivHx2jsmUW1okjWJSjLCo2wxKYRbJrWJ5Uzndz3VEsgLQbiyTMM26"
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
