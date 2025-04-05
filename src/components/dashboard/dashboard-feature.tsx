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
    "2XtoijJrZ8qeaPpnySbonc2GNhqGiQoTgE7emKBFUbgVEsrWkib7PEjeCZKhcqa6Tbd95sSems1tJPAjq1VfzsKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zj8o7c3LrjTMyxnVkPhgJyJCRkJN5n9SvpEcC76DDoQsKtbHmtzuGccAiPXkLELQF9XZzkUBEFRkyPckLNhXJtp",
  "key1": "2Uv3U5FSzCpPrmsEzCNFmcmbyyLnmsz2inSrfpjMVvxzRxkhZFGVDffzHEQ1HZmTcu8t178MPr5viYYFVRHjRYoH",
  "key2": "Wj8hrRmuT97v7aHsWar3esLsNc4K3UksTsnzE5BR5yMD1nHHzgVZWohVXiFFFw9Dam2cj7SyYdaXddUq2Modk4x",
  "key3": "61bWUbLPGXmTnApHnqhBjmPo8dUM9dXUa3po9bWLy9RdFdFFapzXxv6Qwww342X8yH3XzzgyHung8oq1M3fCH5wq",
  "key4": "51GBDFzzDMnNMr8pq8eZDVuGQFKyKFLPkaZFYvKwNkMfXy3yLbv6DC1GhFmuoKDRwrThnjMZTy9a6XX7qLSAqfyk",
  "key5": "5H84AhfQxXHmXJuWMQWzh48hobW5MYm21cuva7jGCWNM1AGLW3r5rZBbMP3tacPj2z6k6MK9trCnTkP7bk3oDt3D",
  "key6": "3X1JUwPmEf4JPHyyAPqUu9CBTauyxxJpt9qszGabEcuW6izhYM6dYa85MCVqY6ebc8j5sZTv47dFfytutiVhMv55",
  "key7": "BJvsVFdmjTit7qoEWnJUTCqyn5bsQTe3YJDuWXVHnDjXKTzocXyBhiNUBvNgR1B6sYARLQGtgwXNcF9HTv4Bz7D",
  "key8": "3u96Ky342P8Aya8cgYXFtXmdTh1UmEBLTZWvV27wC1eaMApnjWA1Xn7knVg2YsXk2DDorZFiMBKqnv2oozdrd3qu",
  "key9": "4MsHFxZecXs9TdrDt2wWLv4J8pCVHqWN3ArbPwVQ1EL3Er1MCYiRrvybgkumSBtoQ5Gat4UD6unRePRD6tazyXhB",
  "key10": "2wVd3K67X5JEtRgadM12oosrdTaabFWUDjBupniDSHN18GEr1a3CkwEVwqZcjZM37P3RemWzwGvT9uG7wD1opama",
  "key11": "ZYDNh1bn9XYCHr8Tt2BaPkDSrA7Tkw8bKA39Pr4Y3mYiq4fToTgUtn7cFoB6VYZFXsZwPWp2mj8pUY1RykiHWP8",
  "key12": "r1UbsGXqAFwRLwAizGSZcVmPYrhsxmPHF3RijQHKcjcy2V5Yg1eQEHftz2vgmy5NR1RvcymyprDVvcfccm65Vdv",
  "key13": "2qmg7aUUULM8pqXMFELKt3S8hdAydWLWGGrBTw4cW7cfLCcFtqa4UPHGmRtBpKTc4mwZDHJS7toQA6sJKHvJazso",
  "key14": "5j7mFeQoXZcz2sXtLS52UHPRaqfBh5SaE41ohZ32taQxRvxTLJrT95YJhSXEytEbdYZHc1nWRkxj8P71uzkLJZet",
  "key15": "265CnQXdp68MmNeM2W9QPhskfuFxg2NSJ6bZAtPJ99me8WAeyNQPsAD7t6ZRWFRaoQ2oiKCxDtU7GmEmc9WJnHuR",
  "key16": "3EsupjEDLGbJbYsYoMsJxrGY7Z6aFhcjJd1PxgWABYHjf9m5ExkF9bBcq5hnz2BFDFV7X5qzCpbSauNFSygnzChu",
  "key17": "3o8c8ehgEPNq3XTtCcy7xTZDh2Vkkyw8x4hKYQ4nbXL38yzm3s6fc4TMHcgJA6Kgthe1gp7FieW7bgnDRRtxcqnk",
  "key18": "2VfGDuSouiFP4x73AjCEg49ceFzUQvu2UcArvzMfopzXoVmpQ622dSD8CfadCF5VcjuaR18zAnEupSk49uSXt6un",
  "key19": "FrAW4y9S4Mjrgr3dEbDbMQuzcMpbLM7mxeZBGwvLBTAjg4G8aChRBemqzcPyvsAEpdz7boF4vSa4u9dk7sESPed",
  "key20": "TDgcoaVWUgxFNJcTeNjdPBCViVgfjB7yKs5d5LQGbBxqpeHVVGdX8ttEXDMpFmtWW4VPvjHx3CgiZ1C4mBzhFhi",
  "key21": "APo6MDLZugDywBys6fdH5GXnspBMqn1Ygew1qhrT83rUCkkWtLwDwigUidiUGCaDXC2DCmVbS1nhcLXrCKVcp1M",
  "key22": "4HktCpC6VvqiyrJnhnGqzRur7C9SWo6cQKpSHThAwnyf8bnqeX6VMdjQAzKFdaXyR4KUZ9XEuzQTBZmX7GTmAmSh",
  "key23": "3w1sQNmZTyGwQrvMVvwN46gwxGyLssfMoxx6TddHa3DXA7MBEE5Ky1ijse5RNRjESyacjw3g6jDBCvHV76brh8tb",
  "key24": "4LFPQzKohPfvdP1iVmjz8Js2i17A9NC576c5G9Y9V2J9htevsXPRHHAK5eg7RV6oD4z9fce7LKkaW2fDriwbHtwF",
  "key25": "3ATptXoATarFA4rduUEQK1kTcJsYgnM2ZN5RemtEXntjy3zkrK2snb2VmWNESG8QKG7vQ3YTsbFRRAad2qz7ZhUx",
  "key26": "5foFDircFmZnLt5v8vk2uwkifpbhQUcak1GehZ2BWhdvDUyY7d783jVFDeyLA54wz1mrPJzhTPF2HXg9381RXW3d",
  "key27": "5HwRfehdhZ3K27A4NvGZYTRYAYLytA2QnYooDR7GTYQ8tih3t3SF7c648wSppZMhWeY8vJ7W4v8z9Ck91sB4KBX6",
  "key28": "3m51ueDsd9UMqzD9kiLbhutdg3ZSpofqthQHqmqgzBbe5o7SfwqtvEik8F6oKEGRhQSQBcaMSCsKjAnNPRjQ4qwQ",
  "key29": "iTkZ5v2fu8VufRMLQeZHZGJLdAXsBwPwjz8K4jMkg1ZubQxTM7AA2pys1ZA7KXu9vGzFL5yKcGQKPkb2BoZcryr",
  "key30": "2QEQUJBouSKoAg8UVrAEa1d2mzxBCbo58mKvKSEFzT1i7b1GtzpY6mR3CmKdMn1cQTQ6CAhK9NP7GysWtGPajBwE",
  "key31": "XiEzUDgeitcCUhD5aMLuyX4zcvbtwv6gKgjRwCHxfYV6BzKPHgcebg5vT5xZ7D4aP9RqbjSYQyccd4PGXviWioy",
  "key32": "iZxiLvJ7SYhCL1UNcsUUUpAPhJzaXtxF2NqWi1cnntwMo8fcwC2LiGbZ3zNpYF4UYJF8bZB2sZL2RLnpvnrThFh",
  "key33": "uJFh4J4cfibgGquc2ueFedkDf6VX92Qiw7EKWqHoMNn4w1BaYKisiAnQoDG627TsNXXeTaKAQ9nAsvMkiXEXAiP",
  "key34": "5YJiMvrwgMFs956JR77ncPQL5j6L24uzr9UpnYBSm8Qsz4s6NzTDY3LuEqUx2AaQvHPK7QzNhxVCRKKAco24PX1Z",
  "key35": "2mJpsbhksfYXHoQ7H4rzJtQH7fiFPQxV34j5pPbWJC1Sj9kvChmvFQxqnvvmPyaiyjwnmdZTkXoNFybYiTVm93bo"
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
