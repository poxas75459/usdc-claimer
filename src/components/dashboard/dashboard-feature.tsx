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
    "95SNqF91tf6yufxzKA4qywUGqutzkTsABCWAWcTm2LK4iEofByP29npC2FUEz1npVJCAtz2K82SvR2di1DNNg9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogNz4cdmS2e3dZ9RLLJQjnqwQuMQ6T91QpJofJygvfBSr7sAC1zBsLLxZwWgWyByNbq4pbzuShwQDCQBtuvsdGt",
  "key1": "3qrMMu4iicVz1HS9WMVvvyHFPo3M7j7pFQhHshdUuKN7xJ64YgqEFwkGeYidsCUPuCMn9ANQBKKBY6tjRGTs5Epb",
  "key2": "2UiTBvKzJQnvieQUAdmjhWipoRDVsHtALq8t6BzWdrahzXnLNmXy2MgdCHUd1ur6c961MpesoyAzXvHJ5W5xL4og",
  "key3": "2akBK65w8GBK7qXnFRkUvf8nGF3LibssBPB7QCDUvxT2e7nc2S1YozBzbQuhdztmjfthCogSDoaZ6oWG9XqW7GJ3",
  "key4": "43Mj4gtoSJb7vBuW1ezv9mSqe9evGfTkKxF1dEFjERJT9kVvbv2nWjsvbjeTuci3CVexLkRfybCKEAhD8i6eLb3v",
  "key5": "21Qy2UaZh3kTxZ1z8nhQyVbCua9oz8YR6DvvyNfgbn4dbP5mvEPGNtEThhzHqcdTXDeKUfAec9vehQGqH8QNbCqE",
  "key6": "4i5YxhNy4KiXsKi5Vfo3YhczoWqdL3rxQoD9jrmof9Yg3KsXpvq7ySwAsRbDdhnHjzAw1524RbGAh5bkmxx8pbNU",
  "key7": "35YkXwApBCv1tFdx6azCgkW1gcJ96sHx4uHVe3cJ9uS73XKcUr6L5d1dmdJUyGUJXp7SAvUKP6hKAFaChXo4vUDm",
  "key8": "2hx5CVYhN47rFwzbC9AXnZn1NWRfbC4iLFHi3RLN9Y8xWNczraiCXo6G11byVhuV6nLd8fsSgwcB2tCjhfVspmHp",
  "key9": "5SwMDBBBhyvY2nzbqHZkYCJJRawYXYmLyBC49Tear6Z3nG1vK4vofhuTjtwbstcc9p9NqxG2FrC5N1jtSPpB8zS5",
  "key10": "4a3t5GtXbkRs9QbxzaP4CwiCUr9Pe3rKu1t2Vx8gu9RvyxQ8rqycFtaiLUMMYiLNwrzpZybCbZaiLiKHn3eZX8fr",
  "key11": "28ruHNSbVji71nBgrw3yYwFjunKtdcYacZdz8J6HcBXMVYK4iEWZovtShamKuQFJyJaWAicQ1xs24xsR3SfV7CGM",
  "key12": "2fKmTEt8sXDT6manH9HbFPS61ge7kTJFK8hrZfktBfJzgAjfFhGpDaT2EgBMcGiJSPo1ERiLz5UvKCz3nbiAtrUf",
  "key13": "4MMnhwbTTofUWpz4mrL7ZKHwBiRbKdo51brh7MK9owTZwfhTsWVUekBpU2q3q7Y32sDJBSikAGaYrRn3unh4yDHv",
  "key14": "2hfa1BLivappTeujtGrWcpp9Y4A697opiWzc58iVbDzcRB1fSmUfc8x5viZtJC5nsA5LYBAd3qbpBEDRs2xm6NHJ",
  "key15": "5NuWb2egg8voemL4dEj1w8eLnLQNx5Khwv7V6twURmsqcfYMjJuZoUgXxegdsDU9c9drNaCkVCz2w2XE28C4XQhR",
  "key16": "2a3GfY8j85bkMqbuq6AkjrXLBkiYi1CVad6eFErY89MiMUyZS17d67FDKJuJjPDm1aVMyx3URdxbRceBeo2eLaq",
  "key17": "3YuzSMe1SQ9jYUJZ5iQtjAqAozgo7bfPqjWExVYTsrSiNCzAMvVUpE2rGHj3YHimKpmJG1V7BnQqhNvVeYiMHWqj",
  "key18": "4Wm79AAAmWziCM6rwsHfaBdF1EtrWmYxFHKfi4fC1gnN1nS24BTVMzKwW8NRK8veDUPYSwws5GVm6a9wzPYiesb9",
  "key19": "jGLzQm9X6i33T1KaM3cXTm7b6xwAUVAT32j2dFmsBWvEgv3CVD3JwFnDXsvCnneS93geigz66Kf8gKxK1nh7x2L",
  "key20": "5m5RbRUN5FazTC8D9Ts9uuPWe7sfc6uF6fgyeGF9LEkvWQza8DHtciow4XwgKVwvsByqbSDn81J3LxpY5CJPTMyG",
  "key21": "2NMPpgYJTzanxvq2R67AJojPUe7yhMf3vKXgTREkZzvbuCLYcvp4fGWaRMDe3fNeDGAMLtxijXEK5oSoBwQ7Baex",
  "key22": "2gWx4dxqsyPPhqmGTFjbXKzjxcE8GCkM36uCYMnByUdKgjcPd81E7m3FRCX1p1ousVar8gfYpkCEdy8dU6ju4Wfx",
  "key23": "359eSAMnreSU7T4Q4ezpdNHQhC3uxdGb7zmJJh2wiR3GA5NYYArkYFRVvUquYHJQ7FtfyWtja9wi8pPXPPynVrcv",
  "key24": "2Sy3ssdBWjtPLHdSVrEwpWkX7y2Y9MaFzHsQu6nsYtZGv135m13gyaNW1msu4822stuMgwU8d5BMtYmSFP5CPSYZ",
  "key25": "5zCqBJex6Qc9PN8Q2WjL5joj4wjQCYUFLwtjfUFeVr55CEVgZCfYP2fWRKvK8qqJwJCfL8EnXUEBVqnint73p9EC",
  "key26": "23SWvnDjk8YBexZTnHJNPFP1RPTUuzWn76z9wpnnD4w22im8hj5AKrUxyxA9AkgT8cX2UHVxYAGExPuPbYPRhcZu",
  "key27": "25LwDQheLrw3pYnrrGEnbFYgaDHifNSxeXd9jtw1iWy5pu6QVxbfNcY2xo8eC7LY5guP2f693bydqst5Dm6XLqXp",
  "key28": "5qCmhzfvR7E9vozvchXGjk2qix7LDNL1BUTRBX3rie2ojv2H5HMa4ywnBJQbv34xggrNSMncQ1ZPd25uz9P675hA",
  "key29": "3ktzzpKSQHsU9nAJzQ14Etn19fxs3kYMjYoTcojnyeVLfeWuiCYA1dEsnZz8wWfqYkPwHHyNqzm1MkYETSfCHHx5",
  "key30": "5VRd3xkvqRPb3styrzoViv2GJwX8Lu8GWyJipEouafS5X4u5RmZt1WP3MFMyWNofz3Fy7MDwNRDMvsdFjaVYZPde"
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
