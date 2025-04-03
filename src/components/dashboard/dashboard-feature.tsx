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
    "PZ2pJEQ2Uo6izdb3zgk6V1ZXKHcbx7tpxGeqRa9NvM75z6jwaY6rXz4sMSL2H7y7vXp46TmdUbXapb7nJ367dvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ScGLgAaeeCjJi5pY47T4Bm46RSQJApXTYnNB85oVrAWv4zU4YV6JqQfYqRf5d4QwcCwCQrGGzbZRYiCMZvgWb2i",
  "key1": "63TnZBvi5n4EeMJfgPZcnnxKRLvsERX4Rdbn3AmAYHs4ucoUUm33zWfUGRDY8tSYM3p3ykgnMF5pbNb3ZyEWuK1j",
  "key2": "3CAFoDNQ63NuDYAkrUroFEg3nNks2FSfeBjQCnBmjtck3F9jKjjRbBgZsoPpyxhQ1FburuMDajf22u4oHGV2K67H",
  "key3": "Nk8cHUH369u8HrYi4rG2owvu3fV6oBt1VB6YutWw2miyYACW2hLQAG6MAGrrv3oagem9MjQYSwknt6i8KBBUzdq",
  "key4": "5Erymj9ix494hUyFwDvZN2YbdmdkmTWLuAjVG7FTDBSbHvoEhgX6V8hMrhHaJVq3VN1H1yHYcm7gfGTdMM9v1899",
  "key5": "Ffwa7Wuick3fY4LxV51oruM4XCpa5mZeCZJLh8t1zCEJRqkzBusWFbCFJSNCNCeVzm2EzmpY4PbR8XEPg1eLFAw",
  "key6": "taqsf1uRtB6Dqn8uQwMPMQ87afFDL397UKntBLhq1TMMJs4FAR3cPZnbkH3eLXu9cMdaX4YKVpBWhsd6PotqgEC",
  "key7": "4dxuXttWUbNu3D4nexMD4thysaMrBbb8m6MRMBgwhXL5CmrMiMV3MUG8qzCqBigiMst1k6K5dyg8g9hacFwiwSE1",
  "key8": "23NrCDUPKkYQGVrGMXKddYZKjvtL5DewSMywVb1KTWLj1CNcPt4UJ7jxa6UNGMky936JSFdrGsV4SmtHrp2F3rdu",
  "key9": "5jrfUzc9c1ACVaq6mNR4eqYbwK4pBbaWbFC5m5NxfNqMZzgBsY5vjX5mUjvLrndeamyoL9vgtjiB8W4kuiminCbt",
  "key10": "24sdijTshuXjmmnYbBW1V53Dtjq5RNXi51tDYHtn8yST3XydMwca3YatpQUu9EUWxjPjgKKUFK8UTFy5sze36agw",
  "key11": "4HrcuAt394GioDCTYrmMKEbLjaRypraCdUiZAU9o4aRfiXigCqCCTczm1eNgzpcfJkJqTyEzYTKpFvwYkjB5qgzo",
  "key12": "3MTLgYynnb9q47uJXpTXmm1AtL1pytEkGoZFjz7ukjxyPGSRn3XrGZQFSTozHQ7oJSyQ9PVVvsaKzhUSax4VMiHw",
  "key13": "4uuUJTHcbpYWYGgsi4WFM19EvqUvfDwBBHVdwMXCAuzFK7J5Z8tNdSgTGQxCo7Nrf5ZUhgcK78MDac4SxyS5yiKU",
  "key14": "4D2zvm7mB2fjW4KZz6x581Bsw1L2TNBPRkV3bEQaNjnrgBZ7YeYL56Kbj6YtSZ51HQFjhDcDQe1v67yLsNxXLiN",
  "key15": "4cbWV9Ap5vuCXDn7WZE4WiocwxgTFSAT3nMTx8HXREKCXdTC3gkfkCxWZBfVoqwNjYSDpr8gY2AJFsTE72kVpSsa",
  "key16": "4maJu8Wd6i7GohznDojBJyPr8mbg3ENLzFKw6eVgh58JARYfrUxKjT7QEQgqtQ3HiaeyKwkLxubrWwDfgyPx2xCe",
  "key17": "3BSnZCr2ngPP6NArVfoLDf8DXGqqcgAQZavusMmrRLkD9gkoGLr6c39Bvcrad8wp4B1a5KfEWdGGRWADGBtgTcNJ",
  "key18": "4bFcztbrPSkGh29apiiosipNpwog91e5Tq3ZtNRbzSJ5cSg22PbWSe5ecS8eJ6eUd23VmMh1CJ4nrRuZk4UNNueh",
  "key19": "g5Rmi5oT9CSckSBpJyHdGufbjSszn2U7uxiHF9Tthfb4FcuDdnQZYPMmXsE9hdikQqe7PUv63eGwVHM4BHDgt2K",
  "key20": "64QCNNQu5C2ksbCAGNUPT2gD3LDm2RC39km5qeGqRdEMGtrygoEEpqtAcN66a8ek6JmLn1oPf84FNE9vKrHXx3Dr",
  "key21": "5QPXmB8ayAbhDJmUEsUq8G3MQDwWsrx3c56PjJbfBunScvmmgUZam2qiHhpGfdLC6SRsoTd7m6FAGRTAx2PtP8Xd",
  "key22": "3pu6p1jWwKkP7ibDnVBFwLQjJmQ2px7ZksQK2zWSmkb8dzUzRHJvYmAfKYUWY47nv5uxMSQuDcSe9QkA66g9u7xB",
  "key23": "2LpbKbgfr4suDA1qvVDmYTT8C3iru1eHseiKwLvLWdiCsJ7RjcBXRkTHkN1LN7LYUcZNgnvodFrdKxiUdxzrFKSJ",
  "key24": "3ND7C9qCJmrJNhJae7rY7JMkhsT7sXh8kTwcVPxVwToBD1toMxHyXhnXXXCPMHkvBE24DKubviG35JDxRnwk49Zd",
  "key25": "iirmMXt4uYKvJZGMwyMbRitbwJwjiBxvhEy5xL65J1iczAv51xm2tnio2kCmd6e67bmkYHfr7h2SQEiaGyxxbyW",
  "key26": "2NvufMbhiFDLN8UvYkfKknci7cbUSP3kAWLps5udU9YKxe9S5U8iWVaEnGkdYdzngvgFCNkwhNWujP2tGoEtWSsV",
  "key27": "4Yw2A8R82w28E46RqirTQ7jM48v19iBQk2PDF3PimViAMj2nFrAuEBc2H5c3xtS1rJbVQsUTbeWB8HqBXhwnySdm",
  "key28": "JkgB4T9xzFzvV2meGepn7PqaUGVBHbozK2URG1mwHZbz4BkmjfMcJWjtGmXv4T2H89k3k2bVKFj7tmgem5Kemz3",
  "key29": "2hD7fr9vTmBgBnAQdCUWDrND9ZXjB35wAGyT9pSaXRtjeMdoR88ynJZ9p35zrk2rL5oVXTEExEvoKB2xHrz6yuM4",
  "key30": "47HxtUkEnUj1h3iHm9wPxQGodGSjnSCG4PYZsFg2mzzAntdpnNqK6rvKq4voTYaAZ4aNLRJGEUMCFPfUjms9iTi8",
  "key31": "5h5cb33jXk84p9TnJDuAjDJ77JCKzY2etDKqa1jwLeFok9SWMxK3WMNFJNtnaUZgRrouiHCbn4Sjc4KZuBdMAoe8",
  "key32": "43roantxRnuxzmCzfQBVJs3wSmcGrh3vpzbimaXptZaYWiCsfSW3Q4jV6znekbbGfoVn4Z6NDVuZHBoVhBHvrwDB"
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
