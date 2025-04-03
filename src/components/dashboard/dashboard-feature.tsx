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
    "5XHZ8yTKhZsMQsb1aLnd2A34iyk4gpiPkaeay9UQd1v2ZaBVnourSm6fTKYhagxcbn7VoDsord7x6Ld2dGs9X62g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFUQBWCkzN3kK7g4aK9q2uFcQJTzMmya2pbRL2HLVCudPBmfi2cPWk9GZkXgfR5fvesBtZkdrnDTj7fkc4pH8sk",
  "key1": "56Ue2qeN48rxvRrHK1aCbpVGw9tQXdmShDSBxFbKhDEjSgzfhTULNfQykA9N8McUgzDAYefHn7ZFLbo4gR3g1vTh",
  "key2": "ESwv2FZDRqQcNT8eDfSo7WxhBgtJBcTvxETyWyvuPtW2gtXjz2p2UC3trTfzjD6aL4D2yjBdJ8DDQbdPUr9bV2d",
  "key3": "37kNdAdZT6yuqSa53xGAcGTWGcvV9hPzN5Z3j7azEqQVSEa9bsixBUYAYtAbv6YzFiSifcbEfqPfS7L5SHrQmV5",
  "key4": "56gW6CuLtpaNnrzWkWKjpQgLfu39wSJPnjgP58igAaUqMzCzo1A47AyDMqsamV53ozshF8S3shJGF4tvEwT4q25P",
  "key5": "5ChFhYA3EAzxnnzbDgBvQbJTxAorMKNoTpFfSLcsZ9mMybUG64GpcWuVGJubuyj3rZ4atwzE4xB8yCYEbCr77N1Y",
  "key6": "3sB33ms3WmAbhRLXVQNVUCRwEe5SuykLtE3NagqqpGRoTVduhmEu2Dv41UbRuSo5Dj8tqrgMGKe782bFzMxPp7pP",
  "key7": "64xv2PbR93uq8KapdkEDYQnkG36ezZAvxWsirNGhVbWUuG9B34oK6CkqcPJUtMXZ1C5kt9rMqjv5kYHiJ4ZyRtQv",
  "key8": "4WLd9xdgcisUYyD5KUXZD3hy4v9rehPa2K8F5dLVSZitEw9qexX4Xt57c1EFVPBoRJUHQCNr8MQBd2SEnugJPTfj",
  "key9": "4xw6iMJaeAtw7f5Aj8GMkd8aY6AwJoaAYTby253RBntx3sjgFSmMPZy2PxN2XW1EEVQzbrAvMm9ivYR4Ym7DLpVQ",
  "key10": "DhQGitUdDViEjQGzJi34Qmewtr87TkLtHz85sTQHitcm2Ya4hFCnJNTD59U44uxNpzaXyXz54sNW9GnZfqRhpH2",
  "key11": "58wgxttBj7JcRqnvRECEwUd3uLtxf7r1jhkfcNB9mTa8U45B5Bn15ZfGp91m4KHewAgdkagq8Mgddacc82gNZvXC",
  "key12": "faeWm3oHeagvZxgYfn6Dmrsa4kBb2A9QHedHhS85jTWn5H4JZMdxCGh6PUMfXk1eSxcqfFY3JTfab16L6jXrRvh",
  "key13": "52fH9ek5yuemc8FDcpECrmhV3sN4KaMSkxxJGy77hPu1DW5BcHagdDWF6sWgGCZabGcTweW2xmaQHVyobNMbtXrA",
  "key14": "5Gnui3yzRdk3BGg4JrEDxp5iSHbyMvV9jwNC7zBB1WA8WwKpiV3cQ1LyqQGnjqSGVnWGmxFtg9v6cqFjJCP4KyWo",
  "key15": "2pkSH5ADfTG7HGW7Xe1gX4r7wcdS2jiNmca8Kp9AMT992rHEMEftcMXtmD76PrYBZQjio4kBnazf8tkrxNuDRkX4",
  "key16": "5tngqYrcxHCDgyT3HRyBJ8nJ7a5DdLoFKdhN26nGtTbFhsi9NKnk45QvYRUAMfTEEnFcWnsXvCsahSnfSx28A7i",
  "key17": "4taR73Dbtp1brX15uwWBx1EvMgqXssV2gF5iP6Co5aLuaGAKpbXwaEJTma1CDkdN6aTtFpcaUSDh2AWnXEi5AQsn",
  "key18": "42ETijkbzhEjFQtGJaJYBJV9Fdcx37J66DotGFryJPCJQBEcB6mMpBPfKhN21yQLy322VJzNfxWbSG5sL567Xhzx",
  "key19": "2H6TtKR1HK7CZs6oRpVVaTVUiN5BgwLVwqFMvyBXuA4PCNc9kYoBbFuds4MwNm1qcR4hZChU1pZcm2JU7JzChsBt",
  "key20": "2wFyvajy6YWQo6CUhGjuJNPyrMnkJBf34pTTFQXmcsUkJyTYJofYmr4am5fSDtYEsRtcKJaqNyffSCJuGfVuKFBH",
  "key21": "5fyQvczRAu5XEsgbaswv1Bv5SBTNCTzRCb9oCLJBzuX5in8C31cpmHWXVvi252fJhDqwPRjB2fNruCJMYMS9rCu9",
  "key22": "24WRfEYwMj4LDke6xzMdDt15BHzj9KLo6UrtVUXW2cmGnqsi999CvjiHo8Q9JDhMiwWPGxYuDHaQcoPLLHVPpqrS",
  "key23": "ff5dUs1Jeq94Weohap4ur944Dag9ynG18GYN7SwmiiSUZdbhgjWQGRszyB4m416xrjbzobfy1SLjRaKJwbWzEB2",
  "key24": "4Y6ES8TYxxpomfUams4UFEgtcV9oQu3ZfpSBy2LYeMLpTRNxYBn2LfzqngWwiZUuB8TfKrVqgnZAJALzCJdq8APD",
  "key25": "2QMHwvY2jeBheqTU7h5caH97wxTk1z1KZh4WFc9jL52tnepRavRHeZCQYC8Sa488GDJ7X6ABJUeyfh7vUxBNvYGi",
  "key26": "2kqcw5xBdRoajg7gJ5a3BS9ZwrsD4om9z5WSohSNP1tmqnj7dNbyHP14MSr9QGxaxSu1ityTQm87t77uPrfegjuj"
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
