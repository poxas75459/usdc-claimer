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
    "4ikUNnzzRiVJVB9Fxi96YfE8ovqCMpagVQn7j1XkHkUWt6m9YQZD8ftNYXBEqkebdNt4UHDt65v62aUqgm7HPKxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8fCNw546WVkD2a3XC1ayVpMpk7J1K4sMAStQD5BybqxqzfpWpbYYtpTzzqwZc9rzf34jMwirJkpmzqjQuaVksc",
  "key1": "5tTe6jgD8ySQUob37kxJRM6s4HxXU137YfrxSDyi1u3LZ94BuP966kb2vxFizegdyhDzDWvRXYHMLQFsiZEe5dTR",
  "key2": "2guqP5RiSUCVvzhZpSnPPtTsaEzaoHXAdVFGES6EidKYZLMTNdZZgwxuKcNpAVRUk6vcpbF4vKsuQCBj6LvEp4SL",
  "key3": "3T7c5cV47SYoG4RAWM5yHW2t4n4TQnD6xTsj9D3SGawD8CJBUq3Rf7oaepbHyf8vKnUsG4LogtXX5PBhYxGRJ3fQ",
  "key4": "g2UBSMvk9coMTRLYy8x8cQGHqgHK4tp9qThjYzv2dtPuusz6jPMcGy4AmLZkCWdchrzzSvRLrEuZERzBCpAhBzj",
  "key5": "gTFaimJ3tBZxTDYBMmyDuLYnrrjbWp4vG5uMSJTk6pEJyCkhWuL6Ry21tjGQxA2UJpjv2meWW2VG4appgGGVa7A",
  "key6": "mYnBfSiSJ9rCKLcCWWb8BS7MNvsFairu37Siztw6WLYYxaBkABo4qTnsSbFF5ZjhYe5fvPYQv35N9SnEHH8XZhp",
  "key7": "4yTYeofHyFFdGn7kQemYCDekrxfbixYMDqQxsT5W1ufrFQEd6xzSVtd2YxPZhQTYrPRtdJAzjwYSRNz3Mo2p6aPx",
  "key8": "ePiuUb7uwGf3huhVEVHg1H8BGzDwZpHW4eESuCbipHSDmMpJ6WUkFa9zocsPSnZ4WWWqiHRspNJ5XK9sYJADYr2",
  "key9": "P7wXeVAT1HviGcmedaPWLq7WmyPonDgmhVg8ari2R5obwgLnammEETfBJ5MVq9RJ2PDRr2ydPSQnts9rVUi8Epu",
  "key10": "442zRKC5s7SBAnVHqhU8jkp8UGoC2u6anDqkvcUNaDG8SQP747P1oPFKZxbEqQD7YKsZgKXW36n5ppLsYMvaM213",
  "key11": "Hpc54JzAhTseadciRevoRWfAGXxvLfmpn3xg1B4H9SGsV7rbKcuJ1tpjg7ukznLsPu3f2zJpCfduggnozxP3exV",
  "key12": "65ciroGyjpEUTDghjF93BLBjqCRmSQMaG8KRXT8uTszZtWx5Frhmqi85zdCytR2ZjzxDw2WtsMMKSKUuM9rfNQgc",
  "key13": "YfpTj8pjSr5BqsT9Ui66AEQsvJZiCT2VMgaBMyyd21BY3GKxx37KcShTqmGJJc1K823moexkFmegUvtkxY4kCAh",
  "key14": "5Kj8Wnk9ahatq59TtQHwiHdjgXStA5Cb6pULBtNRRCmoyJyHSoDBBYWaiGckGDLFSKeFtJyjsJtTtXny9E4WCado",
  "key15": "hJ9kFq4SUQgAKF8aUB8CWNd71qsiHShRGNwYdgpA2Y3UEUmdA5e6aNgm1zvp4pUwxxxJSN9qTuJ4XsFHQDZEyLh",
  "key16": "3WRF4TbeYR1Yw2xz2ijsRvjjKGVwPdMGVn71R5c8HpEHj4Ltbpk3EeiGR86pVqDqNzWGRcb8d6DVFBaJ4JveAJoV",
  "key17": "E5rpdRGtdTUYCU7gtUkPpo8fmqht6UbkL1HjqreuTCbSxecVYb8ZEQiJupnrvbH8XLHcttd3hAJDPAqR8fZ4HSh",
  "key18": "5Srsd7srwkmmsHVyy6VQnydaDRUeBQEQxptNAAcnSz3s1j3nZZxmiXQMdruAmA2EeQioPVnkWQrzF2ZK5uL7vjWa",
  "key19": "4m9vbBGrAQc8eSv3qt9WgHgqx818brzsZdR3qcKFWVJMMhYNLrP82r1N2PB2D8Ep751sCW3hqghhCczdYLL7KdQf",
  "key20": "Dp8if9HRhGJgtSuYCFUeMLkqqt47wKp7ZwvwsKG74Z5ooeCJbdwjCjbSQb5wFY6Dch5tphF3RD4KzjNXTg5ovnS",
  "key21": "2965isYfKSc4gfTZsvjWnLCrapwv2QLDPu4hVDZJgDedzKTCihybCtZeygJ9iP2KxZwBQf4VJhAFukmfYWtBS9Qb",
  "key22": "Whocmco4dvGSDpTgLQVnALJdfiKZ3FKvR29KPYzhbhYyPH2c6BXAayjZ2EM2uUJp6ziTzqLPF9rxxckptvTgSv5",
  "key23": "2RD8JQGysKxEfEqSAVF6LdagJ1Kr5dUenvzJBno1ZovQpttLFmi8ZmceXqTennwc61P9sbRMr4vFCJbqfQDezRto",
  "key24": "5NHXagbT9jwbLyp4BPTVx1oR2TWzZF1jyJbHYULDqycB8PZy7Pd8Ywit1GwNg6jwz4w7cxmpRyodA8EKHCxqwL7k",
  "key25": "4Sw2c2TfVjGqv19PhE5Sk3drA4TU7Z1wo5vMGZQctAJF37jsowqwVRM9EfAWgqtoc3Mn8gvXD53RuvzwcxvyxQKe",
  "key26": "3nKBQWv3pKqK2WkPjkbABNb6vpx3nyHH5v8AZS84hk9ZXfwfeeweVctzN37uQYiTnS4odWbpJpQo6oxCUU57Kyi4",
  "key27": "2FbVngWtvTVYodgLqRRPmHeJZUuht2XHzdJmpBqHTcHRbV1bj5hmvhvF2MkQN1NpNr2TVxDtdXpHnU5FKXXeFnXX",
  "key28": "4p6cbSCNzX6MaYLpcxDSjBzFMR2R8ve8DkCtvri8X5VTVp6m5CysSpKRxVh5AComJhTzyt8LTMRq7fWoi6fXfCsF",
  "key29": "3cwyU6iNoPukT4vEq1Co7uMAaegYu5FbeEkbArU3kB1x11XFxVXBGcRSmjjaagQiT1yKdYXUH6Whvs9TwWBebHh2",
  "key30": "2hrcsZAgWZ73UUNPPis3dSrPhLDZruHZHXtK4j1ytC2AjnM63fGHUaqQm1L7vV1rqqL7HZF4imNegArGmdwHA4QA",
  "key31": "Hk1RbkUnvfzPRokTCACYggTJWo4BfAsEbZhk48aBGJPzhGwcgB7edxLVyR4Hd1Cvox9nJV3eAUkaiXsHxAGcrrt",
  "key32": "cqqsVrMmo63q1CFskPnVzRFhhs7MBgypC9VKttG86AuMpyxNvdM9LDmSksi88gZnNMfx7wt67JKk3qExUH6itqK",
  "key33": "2NZoxJLMbc8z8AHyjehXD6cmxa4v79VSQx5WVpxm2LVHB6Ny9uod4QXyZvd18GRNkp6FMGf3Go9BE9r6iTknD6qp",
  "key34": "2AQ1pbyoyJ9Y688iZ5uYUZ4PNChfYUs1HCW3z86dEaBJRVskkbchNGKcUTzjJH4VfNFjBWcxNVNW1XFHAm5iR7aT",
  "key35": "2xSgYxEgGSgy2C5uyPXtjj7GL72A7KJw4XBbH34WiBP8dvr2d8mTQVBEmxnyevBG3L7XMwq57zP39XCMD7ZPoN6m",
  "key36": "5zUcMA8iG4HuifGB7U5SnQAMwUYFZVtsFADCMNym8T1i4Q9f5CwpfKLzKz9GqTquxsz2PcotXASiuzDUQyLfnu7j",
  "key37": "SYs2QtfXwuFRB2fcbSgizPVLmh2bQWNczembqPs7SitbidLWUHJjdPKH9gMLv88gfBtyLcnbvdDWFumXruZovay",
  "key38": "2HdCHyYGGHWozc49nJro3fEZkb9fxUZM2VU1yN2SnAQuSnWRDesoZf24wyWSaaSr1GBWdMkXazdPGBrdVTwPU2MQ",
  "key39": "6kmvJHCy73GuFKBsoYyHVN2VYrJYzq6nKFwNqAuAVi2faVcJZLWLzn99T9J3SMMQt5ZHMw2k3Dd44Mi5gYc2fDb",
  "key40": "4JuwFQ2NjM9SsZW2uo6QMhz5z4gM1siL7uTuizA4jbbbXwQeWVyUv9nE7MbcnvLwreFVCUyaVpXhDskJ1atau689",
  "key41": "2DCdjR5s1FWfB6qVHVbVAaG1VKLQp9weTxpZ23sTB7N4Fb8WYCYufdTM6VjPQTbLCAMPQfpkdjWG4axme9homgV6"
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
