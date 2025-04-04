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
    "5BT2UbiNuSyR9LdE3DCb19oY8PpPqcW3NygX3hFhpntJ13r31gymYXjFwuvWW4S29q9Ebpo2p9oyEt7Lx3j5y3t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LwC1WE5Bt6KJrTAmDQyEWbiT1x88YAJ3ZDLXasgc8CKFsUY8i3Ysz92mCQS4opV22ZGUrbCHDh94JcVQ2Z8frwT",
  "key1": "5JtV352nQcsFnrTV8ncmGyGtaJGtXWzcnFSykCidotEuuSLLAwEvxNToc4ZpSbbdsBM8XMv22K357FbE3dzLbapa",
  "key2": "tChkzfqB49SDhzmEfuU7XCbiADzwdkmFko7QvqxWm7ajJSxA6UQLYWPEJZKHMRtjXeuc7Tau7TQ9psjXABYomDk",
  "key3": "3xSfPq6ggnscpiPMLiCYhBtEJDt5DzGUTsbZhW2RpPLvNyZxDvP32r7U32oM9bwrtEX8eCn34gtrwvuqEwdjo7JB",
  "key4": "4LpLXkCSEDrqUZuFQenVnKi5Adqm3qomfrH6hv8hrfCwEaAz1GbJVPr2sJqh7q7hj3M49mo4MxwqPoCjYVWVY2fA",
  "key5": "2aLZnep4YD1VzRHkvqGEcUpdL2qcz9e43LpvENfiHrLrL14Tng5m8p9GYeWxZycyoH5LTPsx7aEJKddQegGVNXQe",
  "key6": "3j2v8Rf9Teg6sXVuSZAQy24DuXs4SACTZeY5X5r3TYyRbZHRYKU25FjLeJJw6wNrsVf1JHb5cuJYpBh9inqKwViR",
  "key7": "5NVBAMREAJUHwoHrnzsPjJkVuYUjUxahTTurokKJ9X9bgJBHj4LQWKdviYcbiaXkxsSymuZWZFPMKzFtdbVY3jwk",
  "key8": "5XGTyjuNNZwDnmvAg2BnmrtzGq6nrX4qMcKtV3pKVk5j6AEmjFjts93qXjoxS9jBZCiMfVeeNxgAtLpMibxMaDbD",
  "key9": "5oDH45JHaPVALLSJ1NMydTjtn38U6mXz1VCThKE1scjj5okeGu2inkWXrGts9rtCVK4TxK59mJjGEWQenYhi2CX9",
  "key10": "4EtmLzczvKjByXjWZ8tThF2uDqaAtSTvV2mLnhidZrcoUTNPETduBrxywzrfxmKdLqRVKRKVtLZU3ME2YEcJbuCp",
  "key11": "5R4HGQFGaPvBnnFAHjfK72LPpxV7LvUSJz9jzKL9ut9MghJSMVqCAY4f4nfXVFT8Qh1NPzin3CkFY69YS3KgpH6N",
  "key12": "4wHe4UJmEiX8zc13V6RjUoCttAxqZt9zwpE9H6yVBUk8rM8U3oJz4WY2siJeiae6LVsUqo9pLuDUnFJU7AEf98DG",
  "key13": "36fWRQDymu26qbhTL9YpG3xcvCX8tDYqJwkm5fAYjTiMJcSBbNtjUXX3QHv2kThNF2feDmTuj9CH9nNQR3JMkbyw",
  "key14": "2JcBroiLvg8dZiCovgNPGbt5aRYzpPwRC9Uqyo9gLT8cWXgM8wNtcL9Pks2gmoSDJPKT3RZw4SsBn9qz5UHynir3",
  "key15": "3KPXWYSjcEmL3JkGL6fmUutvfkmYuZCp6iWDPssnQa7ku49jRw3Kx3KeKUQG8vm9RRpA52BN33MmYi4Zfb4ZNWSW",
  "key16": "3rtyx3z1mqRtLgCTFVJEU921QuMtgVqVotvfEf8kTBRVg6ihkBifs8yqxkgT1U3h6GUEWwpNJBUr6c84W5Yusy3Y",
  "key17": "5WAaKyBhxWqjRj6Fjcsjq9U8WokP26etX441yxZHUys2muczbQUuvcbrqAxF5H8ybJWarJ9UKU5YkebwhmkmWy6L",
  "key18": "4ZVS6SLpkXqumB1ceuvCiBvfNtQaY4doPevPEP5px4Le7UJycaLY1gF2mLQhrwf7qy1uDYdvPCUEyoc8KkR3Dkvx",
  "key19": "5ccWYFCxsFSmUcArC5TfrWXrQTCez2tukQZDUEKPdZZbC1HvK83fRzyVWa1DwoH9gKdCxpwuAAMcBvkqyR21t7ke",
  "key20": "3PiNKcjtEevhRmj5bmDkFLzSCtjf3bx3TeopR4D3TbSEvFqZd7kenw9oBUcDXoKoo7HmMeoKesZN3DZZt2RH5wmy",
  "key21": "3NxMKuYjxW2hw4bRdo5EcpLTTvwQonEQg3euKjNhS6bSszR9tiKkFH1VwfcoNoY9QDHQckEDUFKgTY27YY2zsYP",
  "key22": "3MQDKnVT2EHp8GbrVb6J3qqmTesJE1P695KtRUuVFog3yhnY4Ycdejb417fUSuznkFYre48eVzPX9xFwrEqLXNT3",
  "key23": "25LG4QrQAk98fJn2XuxtpNNEv3FeVyhHQQ6LEKcLW3KE1ywxzXnZEJMoRYrsTBccRsm19bay7DftuvEQ2oy13VzW",
  "key24": "4QxATyC9QvZNizDPFAhn4rTkbGxMY9EotCeE57Rg3JBrQKYc1bZZasiMeh5QdfyFgtvfiaDZjZxUQ3Xv9jnbqwdW",
  "key25": "678NVZ4gCkqBAGXxkPBYHTwckJkWhjbVyjsg1iveuTU4yKKYcjeCYGV1jd8gUBHyBSYKtrfKi72R6fo6xAMRTeaf"
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
