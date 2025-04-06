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
    "2rs25ZLp79McBoJCPi3CwdEf49yiYB9wR6PEtAWJhxrhZ6fdxpb5BeB4Xzqx8h7hmMUZk3y68vi5mcgpSZNnBtLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZLhmrUPi22DS99ecY2NzXMzsoMpVMJgJTdRfnp6yWmreD8CjRzzDpepPyMUwrnysHGjows3F6ryYmwqjJMRypN",
  "key1": "rAfXHKuZLQ3Mg6zvjjcvccXA36x655URGN6amENqGSXtuB6CkBnGH6ZXso33SFSNuavagHwkumsMMXx2HHcKje7",
  "key2": "5xgkvUA2wrmzWHZmr9msi3pHoJwdaVxV7c1g7CvtN3wQLftFFZg2npRraEzK8PxYKWnQ3kVRtGkFUcjxxnPZpgyE",
  "key3": "62ats6GKCpeqnBw4YbjFf5MB7oQebJS2oVkFP9yRxSdAsJcCYdP55Jw4rbMm1pQpM3TWiAzsqoZr4aLUNbUKPjvb",
  "key4": "4sU8bGtUW2wSocDM4PouNsBwxKqzTR1PNuJTW9WnkggKnL1C8VxsHV2RzDiGGDYrMRH7m9quefTDVvXq5PFyi9A5",
  "key5": "4ZRWPSbJf2n8sDt9j1WM2FwNsDVAXCcdfWAF5LSwMFw3wY1pqqt29fbfcAYUWwB54TJhLujUkge9fJgkZgHoCwQx",
  "key6": "2TyJXkJLD2r4vKaGuXktAziNuGoLQEXTw7UWxJhytPK5rQT6v5ogcMUdi6LVSZk7tXxaCmtcT85snFppb6LBD64u",
  "key7": "3QGwQdvzee1J6zTKkuCBG3W3zNyZirP2kUnAuoWfjCvDKkAgA8WXKurExZ6WkEbeSPmGHaP6e6WzFdDbvT7SU2Wo",
  "key8": "x8Fmfow2vPS3Xgwf5iTcmNe4UvN9fJrrf6d4ZYAxKWSEUVzHdPhD61cVsLYrcvThrLtN5RViXW5x4q3EVXNBdK4",
  "key9": "23k7516ZtUBjp8XGpZMm97SjeSnNVdp3ZkXCYbNtz4HnVdtjHmBFTmwr6Y18HQasDcqK1fJ56R1xFTcjmiNi1uyS",
  "key10": "29Lf4u6xLQs4a1C3t8S9i7GPsfaXLL63w3WLYLteJgLE1Q44SY6DHo4HP5wrw3knYHw5exBgWKwDaVh4XbQXZeNf",
  "key11": "231XV1hvgA2DcLM9ofjpMBHJKaenJbuaimzKmk7mLvf7rqgBwAQV6fvvNikMNZhGoXyZ61uRBmqx5mDxfSHdXdGs",
  "key12": "5SvtYvDMGK4GeP9iKXUgAjWJA1CiepfQPUhKSyXiMe6MS4qVSsXuvHTXnEUcakp3CYje8sCXJWy5vkTFanz6vVky",
  "key13": "2gHr1HyU4y2w8antLChgANZEYSwDyN953t2xnV33GYCGbUJGxphqHcjLxJYMLrU9MkS45KLU2KvYqPF41TvRsvZ5",
  "key14": "4kqSwiwnN5HJgSRDDsB1gwnfmEbAKe4JbA8SwAvZXbmt3iQ3cL5JrAgmhFPSjLB1ixNf7youwYJNNoA6SC8YhocC",
  "key15": "5rPoKtcR92qMY9DRVK9RU19EyuJ16hsrvjcD52ZnaVri7DurzRekuu3pUdmjC493uK2n7QjXTzaydVirFH3jAAL4",
  "key16": "4wV5GvosodWanfA17fhHrctvpXvFML5DStFGmL64MsUg8xhTGaqvEQtgyGA5ygRsEUmsFfQdGeGU9HQYtcjj6WiN",
  "key17": "2eyvukZc9ZLt9pvScMxU4Gpg3uEJyjm2RHd7iMLxJe8zSRtvY2e7hk9mjBATyTQXdz2kBuZWJDsQNiyS4f66q2fS",
  "key18": "7HfH3EtzNJwECb4AeStb5CcgnF4yKAEcTE7qGGZo6pKRHffftLoVjmhscxbWTocsbbkjduykpd6ErLX5GFWzGGQ",
  "key19": "2X73WrYS4n8EXZsQPhyHP5Ba44QabmnCsf6c1AreMuY3hxZ28uiFpsEognpTMTTs1kkRpRtSaoqvp75Z5aiewgvq",
  "key20": "GnzJNMNo6bGxCSymS5dyYGGwpgSwDZtgP79fPT5XwBGcsAQWhht9vrnkPhEt1MUNGfcsZpcUf5C6PtSqSNqgv3a",
  "key21": "3XGkn4KMv2Ltex8C6m9WHjqLK7h4oc1wyD5f2myBYj5FwgqPsct2LTZnvdyQ3X6jNXusKLdzF42YSBvBntLd24A3",
  "key22": "2HMMrw9zfSo1yVR8n3PT7b9dWbLTPsBA7T7dhNoWNFrgkvUqyA3stF7Epv6BkUT6n752TG533P1ZJCd8YHNTvhMX",
  "key23": "eXtWg8g4KZjYNCf8frrRsNVXA6T4JbyK1WQP5bzagR7Y5W9CgfHHRdMxenreQoUt2cZE4NhHqKowZYyuaETTTsr",
  "key24": "683noZQH6myVPuK6YTK3UgKCfvDwq13a4uCbanh88DhwsJEexGwW3VK6HGUf9iSVMPs5RsPugoBZPaxoyS5EqS9",
  "key25": "5U3apuLRxkPeTXSboAEkzHWCbTb84mbJTyp68WKFyKGTxCTQzp5BFTQJ47oz15AdNyrzXBMR3B1agvGaMQEEQ1pm",
  "key26": "3Mqmb9K7J1HG51wAUpPNzwjTwALkt91841LnDk54H484NxeEYretpLf7iqwWYRnvrs1ZLSBcrY9wDW6ydLJKiui9",
  "key27": "58ye991mKxHEQHmNEfDvrQbdzKt4xr9mdCv3oZKbnmJA8ja1D42xmYypx94TciVUCs8GM6gHQE38N4AY5X8MT4ge",
  "key28": "bQfAabeqmyexMhgmGzxrczzfx5fZwoo2t8R8SN25vCNimWUsJWFG6fnUXaK63eixfZrwRnUmMgVk4cL3DGdRna9",
  "key29": "BJCS3FFSK21NvBAJRZ8R1z7YdsQrR4LgXphCmeVA6sNeW3VFZkHXyDJjjUKbYrpLNFwaJvNCsjmhgZsCn16D6sc",
  "key30": "2vqpJZcKa1D6JXrzs8oSgYeH7YCKVte4NFvLSBSeXVuXVrh3QQUf3LqxHySNYZHmCUj6DZrZSTgQUaaBWJ4iGK1h",
  "key31": "41pSuq2KqCH3KvVw2od56pvZVPxyE81WbRYSGwJUs7sbwemw7dffrfG4e1x8qgBLDwPm5d3mQHt5FrHyTC7SVAg5",
  "key32": "5iuDpjh3cM2jNpWhDgJHWaFuobAXAZuVnfdFfo9MjRcscR4v6LDihbNiHHJwGzU32qi9opv7wDvkhfyhUAdC8KQW",
  "key33": "4wNL8EoxmRC9eHjCHaRFCggFnL8m3PHYs9sp5fWb6LVx6MwLjEqBEAsmeFs461L1Xsr9D9qLqff5rrs5EpWsYKwE",
  "key34": "pK8Xki5iTPeep8Z43ka2CrABLLq3N9uXrESusuSVi6Z5TKf4xvk1qbENQR1AB55s2udkPGHwUTviQcLqLwhEs8S",
  "key35": "3bopgQWaDF4PyP3XmECBqsJcDZWuZgf9ieDDGsEBJBA7Ndw2oyxKX169e8cGRbV5mMNckmtVrLnxPPicgAwHsW6r",
  "key36": "2RV3ScrRYmT5n7U9WahJSXqM3hW2ChSpkKPTr7PtgrjRpCpWHmkg4TSRymu27TmdgcHVcb3878qySBhKKR2Cv22m",
  "key37": "iM9C3LxNbj7WK5HMnx42n4uFYYF7Ly8QAF2AwzkhmaRQKEhVbNkUcZGWTsrDunKMWYb2SvxoUAjWBW8hSjnZ22e",
  "key38": "53a2DucWR5ajLwBUwcqJgrBuCaR4rp9uP5UHViPorM8z8DV9dTp8mbTtLKxZNKEd1Q7tYTFzW3iXiisUR4W3CFW7",
  "key39": "377afijr4DPiqVaxy4MBPCHzKTkW2ju6ifgSjk824ndMkCPbXHH8nBSMVPr3D8bKcvyBX6nW4enJCg8S7bD7sw7V",
  "key40": "45MqcCbGd7EJKUjT77qsumS6eFhsreCgKTGxGbFv3nYxatNuPVQ42y8jZrM26wF1qywHGr5zHtW72HVfeMtzFXFj"
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
