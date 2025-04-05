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
    "2ELkHNMzPNCmD2QMT2FVuck4C1cJ8iqPJeGHE38itj2UVUt2c6gfaNeZQbARCYiNtft34CP4mGXjLdiWHBbTZ8TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238kkTNDxYs97XW4MtokDC1tSdTuQrJbM6JcUAprDSBmdoK6iPFVLGLjjTa5SP1VQhoaoAxLe4CG8Vwx6k7Bcf9T",
  "key1": "VBQZQJ7wZojGjPkXgm1p58d2thdMzt7CwYMkAcVELkLtR7pwoEWwCTLdxFp8kAH5j18WNNxBLgj8G5ddCU3kQKf",
  "key2": "xBSEYT3LMeCy42HiWkAVppJHu6LuSYRqu5Nsty73RZLxyN6fyn5L3S9hfGhGwSQrfFmHKyzqc1ua8c4RG5h2acQ",
  "key3": "8jtZUHKECT2FntKMcmAhNYcShGrqaeyaxhmkDUgmy5p9SQQzbePuFbE7pZ1Sw39NNkNd5izdzFj5JUonQ216CFX",
  "key4": "2VBnn33qTwKrpJnoef2LkurwwQWUZPCkS9cLrek73ZQ1D9kuSx3frdwpjW9YAtFRo4uMGfpfKdHKLuUkf57QzBXY",
  "key5": "2ggP3n913onHHHvFQ8SoPXCHfBRxbBnLFQy9wiG9vHmE8cRPv5rcm7qbG8fgQN38euCYnoaXuDqa5khm8rNp6nRM",
  "key6": "4yiFTaPq7KzL5SUomyWasP8TFjep3ZAVELgyQSJcbmpt1vTCgxgJ6SYWejoLKBgF2EAgGoXmEFAuKDuGUTFGTWQy",
  "key7": "3vB4NXTauMZ4qX4eSWBQjZ3hFRMtXctbEkDZRt45cwagvRAWjsRraBH1vP33FUCahPGcVr6orH2o5ymPrMnAesBy",
  "key8": "2WWBdk6AGDoCf4zKvKd8ZdvpDbuM4qRHn4xkyi3GkbTpf7iRpeGMnYP92cTSvwft1rri7GcXwqRDHEQZnZDAAEiw",
  "key9": "2PNTuZHJiiwRcWN9TbjWJyy1VyKsgwKmfeJChCLWP9V1CrY2Vunk45X3KYB1XTZA5RHvCWdiXxp1Cxu3X1sboTV3",
  "key10": "3VXiWo4MPE3W7pvHjX7VkuUYudyabaokqBFc3tRWMFURrT39ZCtk4vg9jLamXxWJC1Zon8pCvz1RXFXfuEMQHxjt",
  "key11": "5qLvJBBBj2uiHKxwFwEUNG9f9NY4YjNQ9hT1sfGk4svEn9WjsPzfML4VfqkHv2h8r8cC5WnCDvLzyFJnWzWSo1QT",
  "key12": "26rchMcu2ocwQn19t9Dh5gGsHMJYNZ8vUUhQB6n38rxCgV8ecR3211YM2qAvkyDthPupYMz8MtEcJCHqU8s9PMy3",
  "key13": "3wiPADFs66BJswwLfYKuiJsYVUeV1Wp7roKHYWGN7KBLPf94hGKr8CjvuE9cqstKfaqsdApRbLg9pBRpXxQHhc44",
  "key14": "3BuJgCL53LL2qVy7sYrCbxKtCqrg2owxtEJsmJgyf2vWNHcnP4CjTnQU5Npy82RmWFW2rnxdTXwqQfT5bzYc63my",
  "key15": "3PixKyWExC5zmCQJuRZaPyYW6bGnuusEm1p2KmkvYVbzPvBnjd6y1MjWDnJcg8XYqPo9rb6RuGKPrcJWiPWhPLVL",
  "key16": "3ZHiNnMXAQp7rgd6ahVYwdJ2KFxzoi4wshzLKtfvupm9uDzdHHccrGjgu9r2UeZyDfGHX4rnKNbRP2BRSF6hJkqe",
  "key17": "5VfwtTm4GNkU4qht4iSuKyveffE4rTe3MeSUd678jScQp7xVccRBxPkJJ6zGwtwjHMMhqRU4tE4u1f7ncFQU1TCo",
  "key18": "2JgG3MKifho96fGvUqwRvgXoWGpJfmQgCDa5Cx5aATmS8W5syWUYxkkQzPPVRrAMjWJejY7VHNnZQjPSTWhNDN8J",
  "key19": "3WJwWxQfCJnRGFKGeP1d3h7aevNnTgU3vRtn2GykvQHuF8WxmHTZS9bdGfTx52NSVH3kNaFXVNHbw7CWfB5K7v6M",
  "key20": "5rNv3kC2o2c5n8JQFDhrx4HgpsztFQdSVtiRTRFQEMbDnwhpHgGFs7ey2oxkJYF7HGjE7gYT5Sduzy4c6FpPQaf1",
  "key21": "4F4pHucbRoRSqX5zGDVmfYmU7wvkT7PYjABmLEcsjshqepAi5nHBh9iyzcy4A9y5AeZ9SLfJrvVsiBN8EBwgeFuY",
  "key22": "3KAAjKE2P52d14fshRQE1pJ9VEs3F2njoW5sVUj8DDUYVoJDk8y6XkkKnejLKbzynkoPTs28CfqTLFd5RoVx7SLP",
  "key23": "5MaxWZ3nmcCYUzuJGmErjHm9BtG1KwRAUHe1CKQ6n4r8GFczvijGqa8oKJMtkJeEm2Hmto8iX3Dumsx8E9dFnSd7",
  "key24": "Tqew1VQcPpYUWzyxKipwr1wSEamnXuCjVdYeNMW852VWd5RzKMgMshz8U2urJ2V62mU4CxKGLWQvHVCfveA8ZRg",
  "key25": "5zbocwbc1TyS39JhYa1max89Ay24bYRmsCvVyEg2V6mg2pSrYzP2F7xA7D2b33GYquGvE6yJaFnwyawfcuVnhJsS",
  "key26": "uUXEi4wPAwVBzWiyh15hjgVAxEj4pNQwU4YgSSHqFmgRiLymov9MfbEud6WH7o92haheUzD1r4YJ5duDNHSe6eb",
  "key27": "oQ7tT4tFKkzYcduD4nMNVXe5E5RP98dTAs9up9LFfVMMeZCWwwoVm47TpbjobdowrX37iWyjZXjZLhn7jPc3vQ4",
  "key28": "5cMckTFiEpg14UhJMpSUAiMqWiQTUipgCaf7dcv3YHr7d2D7RLbL49KCCVqkhZMxQpMEauJhkXz3Kc2K4hiWDrVL",
  "key29": "5ogfYhoix8EPqDVrbBq4f9eLDV3fKjTStznkP4RqPmzkit33AvpJiEyjeZFbrCoVh6gBpC6C1zpEvjHSCWVaTXGJ",
  "key30": "5jQAU4JCHzjY1sYjs5s94AhZAEBfAaYC6xsARvhyeUMsZgbx8D6QU6Ty9j3oYvRKDmYALYKTZzb6KxkoK6vsEKyn",
  "key31": "5SqZZtBJfG37L6cuAE6Nz2btXXzDB2AjV6C2ZkyAc2G8TeqVindYGKVXBoVNPHVVPJr6uTzX9L4RRrz9tj93y4Nx",
  "key32": "2H5RFgeKRqgySTk7dUL8GdAF14VMQkZgHrCGJHDzRRx1DSnmXTWVHDqwAvtjMJyiWe1zazBwmMuF2FV7y8ES8p1F",
  "key33": "L8oS843xmzH8FddCUv71xe17HVVjDH9jo6Ckm8Dkqe3u5ormvuiC57vtqcqzrnhvdnxczhe1XdpotcHVjhEPPBj",
  "key34": "5M8d8W66D7f79HYC61q96iCWXro7Xx1eTmVmntg1Jbe1xH9DwkCQNPKm6nqW7og6h2HQozXjM5XPYnExKPCex5Tx"
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
