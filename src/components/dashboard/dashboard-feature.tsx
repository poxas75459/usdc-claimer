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
    "54yY2bzJ2Xf1o5fPbXDnwZ61mQjUzRcSPAwfUPiZqyciWueRytCcQdnDKwvq53w3eeciJYWsGk1A2NmYgcMAUg8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7hXUC7jWfgmBKUwipbm6EzgzW3Sdygm1qryABzVN9u5mD2W5LLYxPPQ3A2waFVJ5NQ4xwrWJkypxiJcNcHidxL",
  "key1": "4iM2wj1iLS1yD8EfgxX9ZBLM7e7Yb2S7q6G1Aqc6fvbC7q4w3vNfwS8EnGUadHmfxLozouXCvvdeXKHZw4BTW9Rv",
  "key2": "34cxezxVcmAr9TPNPnfghhK7VAJ78Rgb3DZMGjL3fakRdKuGhx4yXr5pbH4hd73iMkk7ad8BjvuoqBTgTQ2NXxW8",
  "key3": "673BdDSXFJs3csD335uUJZSQFfYBWbygpWrq22hnWXi2XEw4FLhJPQke1b7oPwXqNoBNm1EYCsH41jLrxELnAJaq",
  "key4": "4CqFJq4aLczJb9FJtYcJzts1dtXj5aAmvWyf2uYbenZQvvchnbUYg1RjR7MacAo3Q37Hjk9zh1tHK44g5QDuDWhv",
  "key5": "4JHMWPbRxEDyGd7i3skHukb3MVBDEjLvUWJGAZvUZE55q7L8fY54YoUdT3JZJ6XW5fxQV6WZGA1rMWvnBv373Brd",
  "key6": "tEUR7S5krEgfhBrdj289ZwU8kUUPm8S9udHvBhSQAtBYH4okgs6r63CkpQ6Br6QPz4z4sgnZe6bU3d9paqyzQuG",
  "key7": "22mf2NFmpFoNMCU21ZS8woeMbaMunKiTG4N9YMbx1gqB9L4PKLaUgrFjiz8dUVwrDDF2789SELMKkCV7TWgoqJvq",
  "key8": "3FSChs88CSFjDu23Npn5f9hjrMsWq4J5LM7SrqaY62oqigEPtP5hSfiuFWFm8yxGdQf5vi22WvMagDR86a25jeEZ",
  "key9": "5sZ2xKJJTgK3m2dNy2ry5D9EaJaZ1Z5eTz4K5ddKkqSjkPkF1KaEZXx2Z75rsQQK3Wv6Qv4JWhgvJSTpaHUDnYfk",
  "key10": "HWGcLSQ7vFNg93SeSUcq1L2vLMgXGYrQq3V9Di5ZC3zCVRoCWxtHnt4LArT2oGkf9FwLZgnREDccn5k7SUU2rst",
  "key11": "65LT4ZNjPcYACita6VqjywaezziYJnV2BsPJ2d2YKYWaCRZWrs5AiDT9GuVsBycZUn3XADEjZcDMPeyi7GSZRcu2",
  "key12": "4gKZpLhFNDQrxipPonWWZN4xec2oiEkkjWN3fJ28ULbFHf8rTbyQvXA9VidqZX9tdzge8859Drd8MSKHpHj2EEpe",
  "key13": "ykYTaHLJeTV3pMkZYYNreW1Jq2KHChy8oTZa96pHH9xgE1q1Du6ZKv57m1mNhKMTWSTm917UK25wzrxjFxsfeMN",
  "key14": "G5M22eiarGDypwdNyJocX54thuuwvcLGjeCxAUnFNpVBD4z9pBK6LoXAj1iKW1e9bbnGZAw8Hq1mwoc54DphUpL",
  "key15": "55ME4UaohL2WXXEQ3mLyi8VxLQAbvaj695MYhGoF4QpCGdwTonXnSrCdU6LEJSR57ni8a8dPC4o3BGYvwyxjgdTC",
  "key16": "3TT89n9cvjUh88H5e1VHUWhrHod32iU6tQra7eGUF3mjdmhGRUwahfGQTNXfstRXnf3BdHEJwzK2xxtM7eF7bPoH",
  "key17": "5Z4oNb4hxKy4MB7QXy6NYSV6MUqJL7iHC32WxSuDTrxMHkb4vpgr2EAzwQ1caCaLT27mnwsZt93HKHSMhDMx8wfT",
  "key18": "4bDUPa6gVum94LWgrKfK4zhEbQ7HQNLXQajVcxFLwdoZ5PjbVG7YrTKQKzmHrkWMmPN5QnhkzCjvTUhBac5m5TST",
  "key19": "Y9wNaXHGSBmgNysnHKeHJu2ppQAkTBSu4Hwr16BKVdzNWWGktXjYhX33tiF8maPzXRfF7YQn6jFTVHZbwQCfz2D",
  "key20": "4iw5Ws49iX5ubXrJELg4jNi7UxnrqNGs5Sq6Gw27k3JvKgKczbF5ChJ7BQcKMwVrrbbFPKoBU7jP3E6HbihoSohz",
  "key21": "28RGTwoJ8NJtsbygxMeWABoriQWHDw1Ah3qy8qNAS6HYRNg4NLLaK9YxCRx3CUgHKBGUMrw7V1SDP9WjiKHcbJ2z",
  "key22": "5m8EUNgoocATkMNiwB5rVxa8qUWDBRvUirnYjxFMmyhMvX9ejmrX4FjewDUz2cegeZwMvf4KzR2W4mQEKpWuMf4g",
  "key23": "4N9aSbKRdVUK24GQKxkGrHZMkj9nm9RVJMMCDGHqeDuuMTX86rP9Edg9UQotNCWy3gja1q3PEdteK8H9YGHtibZB",
  "key24": "2mp6BEaXgyex5iZajpj3G1ubDg3wcjkkz7UL1LiCmpuiFf71J4LkD9PvsK7XuV8YviQXqTfs4UFZwjRrm2A1Nnds",
  "key25": "5ifcTiihh6wbXuGfXA8mA8Wt9Pf286ua7qkyo4tnkQ5xuXsHifzNS2yZdhUf4p8JLVLXZ8B3NktN6WKLYaGs6TDu",
  "key26": "MmXjbecRB4yNCeL8nhmSHAdX1YAbAv78RryvJzBZNCffezGXboghY7Km1mCNRgg5Kub4o1xsaPBHw7LVnU84Sjg",
  "key27": "aZ1NXDpgTWPu96eTTsRu3QMZXQ8eD3FhESoA4aGgaguV2TDytjj2rsXiXqn5jTxgFE6aq4tDiDJzyKk9ajoAz7o",
  "key28": "685X5smo3HBYizj78Fq78DQfyiKh4yJ9cNEc5fQZBTZXRx9zJDn5v1gSEgu1WFtWat2gF1Ub8k5VK6nedGsdNTu",
  "key29": "2Z1QNAqYnfaJcefTKSFE5yfhJgDcT5wWKDSeJDr7vqcMX54edpoEzBrsCGcJTiHf8YUerH5sVLB2orRmsgKddbCP",
  "key30": "2NaiVfSfKoYG33vFgEwRdc2aNLokznHKYjKZfXuTZD7pnjELi5GLbpU4DT8GdfsVkHJQp5oHhXztskNiyM3NxKo2",
  "key31": "2p455P8WgrvqPzHxciBhXfk4iDBXQhniHoAWvYd2Wvxg13MZyYo13yFddBtP9PALXGUD5QCb3uamvdeMqqrueJN4",
  "key32": "3adSLpT8yDTZG7cp2FM6tn4mFAMXR7fWJHKy3ezDyKtv1f6bwCLvR1aRnutkhFWaduwuFN25nw1z3iwWNMaBadR7",
  "key33": "55gq9co2CTjJfiodp4tjA7dZ1mHYx6nUuYFH5Cite5rbZYD9GDkcsCfQUyJVh72Fg4LzKMpFZir216WcNn26UvmX",
  "key34": "3LQuCTeLfotieAazn2qUgUz12D6V73VUtCinG4EVrSKG8evNZ6rT8jEbMFNNwYAFSTpZXxuitF93Hsfw2i4eheVt",
  "key35": "29kg4vBEjByizRyQAQysMJj2LREr6vois1V4S1Y4Y8M7iH4jp43eS5iEqS6y227pDqpq59AwRVopYT2aUJQNHmhr",
  "key36": "KrgzotNhupP5XER3rypLzvgEKiRPxwgEL5XTkB8RvZfcXqGniXtBb13SZjbXmEjyH8fU1UguifSGSAzpFBqhvEq",
  "key37": "4RJTcACyesPCtZt9SJtJzFqAUk1BRfn3iZeVmfG2RgaH3XE2FrtTWvz3awqhdxVF7T73F1bRAkU2375wcos8pXnE",
  "key38": "DX3uhe49QjCaPPwr1fqREAAE8aCkLfJf942NxeZ2yD9X3y49uuBZKjitLp8MNkR3xS7rXCebvtiEnxahbdN1gyy",
  "key39": "21K5Hb1Gmwa4bnXmVvvTgAM7j7in8WhaEFdzpSvZ76Tz2ypKWp9TE76DqszW3k8K9vBk1WT1VA5uhycfXvTGDuqG",
  "key40": "4AcUcuaTfsHGnge9nJ35sVU4wZFRdjM3TnQstvZzcLV2CgQU1wthuqi8nUUb2AGVaKzeB7CcPTFE99jm4axExuPY"
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
